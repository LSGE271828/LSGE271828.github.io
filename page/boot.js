// Same-origin assets avoid OSS CORS failures; model transfer and module loading run together.
async function resource(name){
 const response=await fetch(new URL('./assets/'+name,import.meta.url),{signal:AbortSignal.timeout(15000)});
 if(!response.ok)throw Error('Hero asset '+name+': '+response.status);
 return URL.createObjectURL(await response.blob());
}
window.heroAssets={model:resource('character.glb'),image:()=>resource('character.png')};
document.body.classList.add('sculpture');
try {await import('./world-intact.js?v=20261116-short-hold');}
catch(error){console.error('Hero scene unavailable',error);dispatchEvent(new Event('worldfailed'));}
