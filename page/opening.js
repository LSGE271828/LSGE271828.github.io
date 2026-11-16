(() => {
  const overlay = document.getElementById('opening');
  const word = overlay.querySelector('.opening-word');
  const square = overlay.querySelector('.geometry-square');
  const circle = overlay.querySelector('.geometry-circle');
  const subtitle = overlay.querySelector('.opening-subtitle');
  const status = document.getElementById('opening-status');
  const stage = document.getElementById('opening-stage');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ease = 'cubic-bezier(.76,0,.24,1)';
  const main = document.querySelector('main'), header = document.querySelector('header');
  main.tabIndex = -1;
  let ready = false, active = false, exiting = false, started = 0, minimumTimer, fallbackTimer;
  let previousFocus;
  const animations = [];
  window.worldRevealed = false;
  function animate(element, frames, options) {
    const a = element.animate(frames, { fill: 'forwards', ...options }); animations.push(a); return a;
  }
  function canExit() { if (active && ready && performance.now() - started >= (reduced ? 0 : 2500)) finish(); }
  function start() {
    if (active) return;
    animations.splice(0).forEach(a => a.cancel());
    clearTimeout(minimumTimer); clearTimeout(fallbackTimer);
    active = true; exiting = false; started = performance.now(); previousFocus = document.activeElement;
    overlay.hidden = false; window.worldRevealed = false;
    header.inert = main.inert = true;
    document.body.classList.remove('world-entering'); document.body.classList.add('opening');
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.getElementById('skip-opening').focus({ preventScroll: true });
    window.dispatchEvent(new Event('openingstart'));
    ready = document.body.classList.contains('ready');
    status.textContent = ready ? '世界就绪，想象即将展开' : '正在构建你的世界'; stage.textContent = 'FORM / 01';
    if (!reduced) {
      animate(word, [
        { transform: 'translate(-50%,-50%) rotate(-90deg) scale(.66)', opacity: 0, offset: 0 },
        { transform: 'translate(-50%,-50%) rotate(-90deg) scale(.78)', opacity: 1, offset: .2 },
        { transform: 'translate(-50%,-50%) rotate(-90deg) scale(.78)', opacity: 1, offset: .39 },
        { transform: 'translate(-50%,-50%) rotate(0deg) scale(1)', opacity: 1, offset: 1 }
      ], { duration: 2100, easing: ease });
      animate(square, [
        { transform:'translate(-50%,-50%) rotate(-45deg) scale(.45)',opacity:0 },
        { transform:'translate(-50%,-50%) rotate(90deg) scale(1)',opacity:1 }
      ], { duration: 2200, easing: ease });
      animate(circle, [{ transform:'translate(-50%,-50%) rotate(-90deg) scale(.5)',opacity:0 }, { transform:'translate(-50%,-50%) rotate(90deg) scale(1)',opacity:1 }], { duration:2200,easing:ease });
      animate(subtitle,[{opacity:0,transform:'translateY(16px)'},{opacity:1,transform:'translateY(0)'}],{duration:800,delay:1650,easing:ease});
      for(const [selector,angle] of [['.opening-triangle',90],['.opening-disc',-90]]) {
        animate(overlay.querySelector(selector),[{transform:`translateY(45px) rotate(${angle}deg)`,opacity:0},{transform:'translateY(0) rotate(0deg)',opacity:.75}],{duration:1900,easing:ease});
      }
    } else {
      word.style.transform='translate(-50%,-50%)'; word.style.opacity='1';
    }
    minimumTimer = setTimeout(canExit, reduced ? 0 : 2550);
    // Always hand over to the usable 2D fallback if 3D cannot become ready.
    fallbackTimer = setTimeout(() => { status.textContent='先以原画进入，三维空间将继续加载'; finish(); }, 12000);
    canExit();
  }
  function finish() {
    if (!active || exiting) return;
    exiting = true; clearTimeout(minimumTimer); clearTimeout(fallbackTimer);
    window.worldRevealed = true;
    stage.textContent='SPACE / 02'; status.textContent='让想象，有所形状';
    document.body.classList.remove('opening'); document.body.classList.add('world-entering');
    window.dispatchEvent(new Event('openingreveal'));
    const duration = reduced ? 1 : 1150;
    const titleRect = document.querySelector('.intro h1').getBoundingClientRect();
    const dx = titleRect.left + titleRect.width / 2 - innerWidth / 2;
    const dy = titleRect.top + titleRect.height / 2 - innerHeight / 2;
    animate(word,[{opacity:1,transform:'translate(-50%,-50%) rotate(0deg) scale(1)'},{opacity:0,transform:`translate(calc(-50% + ${dx}px),calc(-50% + ${dy}px)) rotate(0deg) scale(.62)`}],{duration:duration*.8,easing:ease});
    animate(square,[{transform:'translate(-50%,-50%) rotate(90deg) scale(1)',opacity:1},{transform:'translate(-50%,-50%) rotate(180deg) scale(3.8)',opacity:0}],{duration,easing:ease});
    animate(circle,[{opacity:1,transform:'translate(-50%,-50%) scale(1)'},{opacity:0,transform:'translate(-50%,-50%) scale(3)'}],{duration,easing:ease});
    for(const el of overlay.querySelectorAll('.opening-top,.opening-bottom,.opening-grid,.opening-axis,.opening-coordinate,.opening-subtitle,.opening-triangle,.opening-disc'))animate(el,[{opacity:1},{opacity:0}],{duration:duration*.5,easing:'ease'});
    animate(overlay.querySelector('.panel-left'),[{transform:'translateY(0) rotate(0deg)'},{transform:'translate(-25%,-110%) rotate(-90deg)'}],{duration,easing:ease});
    const last = animate(overlay.querySelector('.panel-right'),[{transform:'translateY(0) rotate(0deg)'},{transform:'translate(25%,110%) rotate(-90deg)'}],{duration,easing:ease});
    last.finished.then(() => {
      if (!exiting) return;
      overlay.hidden=true; active=false; exiting=false; header.inert=main.inert=false;
      if(previousFocus?.isConnected && previousFocus !== document.body)previousFocus.focus({preventScroll:true});
      else main.focus({preventScroll:true});
    }).catch(()=>{});
  }
  window.addEventListener('worldready',()=>{ready=true;status.textContent='轮廓已成形，即将进入';canExit();});
  window.addEventListener('worldfailed',()=>{ready=true;status.textContent='原画预览已就绪';canExit();});
  window.addEventListener('worldprogress',e=>{
    if(!active||exiting||ready)return;
    status.textContent=e.detail.total?`空间资源载入 ${Math.round(e.detail.loaded/e.detail.total*100)}%`:'正在载入空间资源';
  });
  document.getElementById('skip-opening').onclick=finish;
  document.getElementById('replay-opening').onclick=start;
  overlay.addEventListener('keydown',e=>{if(e.key==='Escape')finish();if(e.key==='Tab'){e.preventDefault();document.getElementById('skip-opening').focus();}});
  start();
})();
