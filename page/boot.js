const base='https://xss-271828.oss-cn-beijing.aliyuncs.com/page/page/';
async function resource(name){
 try {const response=await fetch(base+name,{mode:'cors',signal:AbortSignal.timeout(4500)});if(!response.ok)throw Error(response.status);return URL.createObjectURL(await response.blob());}
 catch {return new URL('./assets/'+name,import.meta.url).href;}
}
window.heroAssets={model:await resource('character.glb'),image:()=>resource('character.png')};
document.body.classList.add('sculpture');
try {await import('./world-flow.js');}
catch(error){console.error('Hero scene unavailable',error);document.body.classList.remove('sculpture');window.dispatchEvent(new Event('worldfailed'));}
