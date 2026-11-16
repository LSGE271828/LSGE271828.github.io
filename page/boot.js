const base='https://xss-271828.oss-cn-beijing.aliyuncs.com/page/page/';
// Begin asset transfer and module loading together. A nearby copy wins if OSS is slow.
async function resource(name){
 const controllers=[new AbortController(),new AbortController()];
 const request=async (url,index)=>{const response=await fetch(url,{signal:AbortSignal.any([controllers[index].signal,AbortSignal.timeout(8000)])});if(!response.ok)throw Error(response.status);return response.blob();};
 try{const blob=await Promise.any([request(base+name,0),new Promise(resolve=>setTimeout(resolve,180)).then(()=>request(new URL('./assets/'+name,import.meta.url),1))]);return URL.createObjectURL(blob);}
 finally{controllers.forEach(controller=>controller.abort());}
}
window.heroAssets={model:resource('character.glb'),image:()=>resource('character.png')};
document.body.classList.add('sculpture');
try {await import('./world-intact.js?v=20261116-flow-fast');}
catch(error){console.error('Hero scene unavailable',error);dispatchEvent(new Event('worldfailed'));}
