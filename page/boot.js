const base='https://xss-271828.oss-cn-beijing.aliyuncs.com/page/page/';
async function resource(name){
 try {const response=await fetch(base+name,{mode:'cors',signal:AbortSignal.timeout(4500)});if(!response.ok)throw Error(response.status);return URL.createObjectURL(await response.blob());}
 catch {return new URL('./assets/'+name,import.meta.url).href;}
}
const [model,image]=await Promise.all([resource('character.glb'),resource('character.png')]);window.heroAssets={model,image};
document.body.classList.add('sculpture');
try {await import('./world-flow.js');}
catch(error){console.error('Hero scene unavailable',error);document.body.classList.remove('sculpture');document.getElementById('status-text').textContent='原画预览';window.dispatchEvent(new Event('worldfailed'));}
