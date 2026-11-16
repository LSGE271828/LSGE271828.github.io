// Interface remains usable when WebGL is unavailable.
window.worldUI = { mode: 'parallax', night: false, paused: matchMedia('(prefers-reduced-motion: reduce)').matches };
const ui = window.worldUI;
const $ = id => document.getElementById(id);
function emit(){ window.dispatchEvent(new CustomEvent('worldchange', { detail: { ...ui } })); }
function mode(value){
 ui.mode = value; document.body.classList.toggle('exploring', value === 'explore');
 $('explore-message').hidden = value !== 'explore';
 $('parallax').setAttribute('aria-pressed', String(value === 'parallax'));
 $('explore').setAttribute('aria-pressed', String(value === 'explore')); emit();
}
for(const id of ['enter','explore','nav-explore']) $(id).onclick = () => { mode('explore'); $('home').scrollIntoView(); };
for(const id of ['parallax','leave']) $(id).onclick = () => mode('parallax');
function theme(night){ ui.night=night;document.body.classList.toggle('night',night);$('day').setAttribute('aria-pressed',String(!night));$('night').setAttribute('aria-pressed',String(night));emit(); }
$('day').onclick = () => theme(false); $('night').onclick = () => theme(true);
$('pause').onclick = () => {ui.paused=!ui.paused;updatePause();emit();};
function updatePause(){ $('pause').setAttribute('aria-pressed',String(ui.paused));$('pause').textContent=ui.paused?'▷':'Ⅱ';$('pause').setAttribute('aria-label',ui.paused?'继续动态':'暂停动态');$('pause').title=ui.paused?'继续动态':'暂停动态'; }
updatePause();
$('reset').onclick = () => { mode('parallax'); window.dispatchEvent(new Event('worldreset')); };
addEventListener('keydown', e => { if(e.key==='Escape') mode('parallax'); });
addEventListener('openingstart', () => { mode('parallax'); window.dispatchEvent(new Event('worldreset')); });
if($('replay-flow'))$('replay-flow').onclick=()=>{mode('parallax');window.dispatchEvent(new Event('worldreset'));window.dispatchEvent(new Event('flowreplay'));};
setTimeout(()=>{ if(!document.body.classList.contains('ready')) $('status-text').textContent='3D 正在加载 · 原画预览可用'; },15000);

for(const link of document.querySelectorAll('a[href="#writing"]'))link.addEventListener('click',event=>{event.preventDefault();parent.postMessage({type:'sinthome:articles'},location.origin);});
