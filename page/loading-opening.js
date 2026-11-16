(()=>{
 const overlay=document.getElementById('opening'),main=document.querySelector('main'),status=document.getElementById('opening-status');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches,start=performance.now();let finished=false,timer;
 window.worldRevealed=false;main.inert=true;
 function finish(){if(finished)return;finished=true;clearTimeout(timer);main.inert=false;window.worldRevealed=true;document.body.classList.remove('opening');overlay.animate([{opacity:1},{opacity:0}],{duration:reduced?1:180,fill:'forwards'}).finished.then(()=>overlay.remove());}
 addEventListener('worldready',()=>{status.textContent='';setTimeout(finish,Math.max(0,(reduced?0:300)-(performance.now()-start)));},{once:true});
 addEventListener('worldfailed',()=>{status.textContent='模型加载失败';setTimeout(finish,1000);},{once:true});
 document.getElementById('skip-opening').onclick=finish;addEventListener('keydown',e=>{if(e.key==='Escape')finish();});
 timer=setTimeout(finish,15000);
})();