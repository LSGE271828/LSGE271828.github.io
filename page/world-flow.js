import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { createSlicedCharacter } from './sliced-character.js';
import { createIllustratedCharacter } from './illustrated-character.js';
import { createMistEnvironment } from './mist-environment.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

const host=document.getElementById('world'),status=document.getElementById('status-text');
const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputColorSpace=THREE.SRGBColorSpace;
renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
renderer.domElement.tabIndex=0;renderer.domElement.setAttribute('aria-label','白雾人物从立体经光带描摹逐渐转成流动字符');host.append(renderer.domElement);
host.setAttribute('aria-label','雾白立体到原画字符的一体流变场景');
const scene=new THREE.Scene();scene.fog=new THREE.FogExp2(0xe4e1ed,.027);
const environment=new RoomEnvironment(),pmrem=new THREE.PMREMGenerator(renderer),env=pmrem.fromScene(environment,.025);
scene.environment=env.texture;environment.dispose();pmrem.dispose();
const camera=new THREE.PerspectiveCamera(39,1,.1,180),controls=new OrbitControls(camera,renderer.domElement);
Object.assign(controls,{enableDamping:true,dampingFactor:.055,enablePan:false,minDistance:6,maxDistance:25,minPolarAngle:.4,maxPolarAngle:1.48,enabled:false});
const home=new THREE.Vector3(),focus=new THREE.Vector3(),pointer=new THREE.Vector2(),center=new THREE.Vector3(3.6,2.78,0);
let mobile=false,mode='parallax',night=0,targetNight=0,time=0,entry=0;
let flowClock=window.worldUI.paused?8.2:-1.1,lastPhase=-1;
const composer=new EffectComposer(renderer);composer.addPass(new RenderPass(scene,camera));
composer.addPass(new UnrealBloomPass(new THREE.Vector2(1,1),.12,.4,1.6));composer.addPass(new OutputPass());
function resize(){
 mobile=host.clientWidth<700;home.set(mobile?3.6:0,mobile?1.7:3.9,mobile?18.5:16.2);focus.set(mobile?3.6:0,mobile?-.6:2.35,0);
 camera.aspect=host.clientWidth/host.clientHeight;camera.updateProjectionMatrix();renderer.setSize(host.clientWidth,host.clientHeight);composer.setSize(host.clientWidth,host.clientHeight);
 if(mode==='parallax'){camera.position.copy(home);controls.target.copy(focus);camera.lookAt(focus);}
}
resize();
const hemi=new THREE.HemisphereLight(0xc6d5ff,0x11162e,2.2);scene.add(hemi);
const key=new THREE.DirectionalLight(0xebf2ff,3);key.position.set(-4,8,7);key.castShadow=true;key.shadow.mapSize.set(1024,1024);Object.assign(key.shadow.camera,{left:-15,right:15,top:14,bottom:-12});key.shadow.bias=-.0004;key.shadow.normalBias=.035;scene.add(key);
const rim=new THREE.DirectionalLight(0xb1baf2,2.5);rim.position.set(6,4,-5);scene.add(rim);
const rose=new THREE.PointLight(0xeb8cd7,24,25,2);rose.position.set(7,5,1);scene.add(rose);
const blue=new THREE.PointLight(0x75dfff,22,25,2);blue.position.set(-1,2,4);scene.add(blue);
const landscape=createMistEnvironment(scene);
const modelRoot=new THREE.Group();modelRoot.position.set(3.6,.6,0);modelRoot.rotation.y=Math.PI*1.5;scene.add(modelRoot);
let illustrated=null,character=null,modelPromise=null,ready=false;
const phaseNames=['雾白立体','光带描摹','形体流变','字符流动'];
const captions=['先有形，后有文字。','沿着轮廓，留下微光。','由形入字，缓缓流动。','原画，流成一行行文字。'];
function updateCaption(phase){
 if(phase===lastPhase)return;lastPhase=phase;host.dataset.flowPhase=String(phase);
 document.querySelector('.scene-caption b').textContent=captions[phase];
 document.querySelector('.scene-caption div>span').textContent='VOLUME → LIGHT → INK';
 document.getElementById('flow-phase').textContent=`0${phase+1} / ${phaseNames[phase]}`;
 for(const marker of document.querySelectorAll('[data-flow-step]'))marker.classList.toggle('current',Number(marker.dataset.flowStep)===phase);
 status.textContent=phaseNames[phase]+' · 同一段流变';
}
function markReady(){if(ready)return;ready=true;renderer.compile(scene,camera);document.body.classList.add('ready');window.dispatchEvent(new Event('worldready'));}
function ensureModel(){
 if(modelPromise)return modelPromise;
 modelPromise=new Promise((resolve,reject)=>new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).load(window.heroAssets.model,gltf=>{
  try{
   const model=gltf.scene;model.updateMatrixWorld(true);const box=new THREE.Box3().setFromObject(model),size=box.getSize(new THREE.Vector3()),mid=box.getCenter(new THREE.Vector3()),scale=4.35/size.y;
   model.scale.setScalar(scale);model.position.set(-mid.x*scale,-box.min.y*scale,-mid.z*scale);
   character=createSlicedCharacter(model);modelRoot.add(...character.meshes);
   // The bands stay together permanently. Only their edge light is animated.
   character.uniforms.uDeconstruct.value=0;
   const geometries=new Set(),materials=new Set();model.traverse(obj=>{if(obj.isMesh){geometries.add(obj.geometry);for(const m of(Array.isArray(obj.material)?obj.material:[obj.material]))materials.add(m);}});
   geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());
   renderer.compile(scene,camera);resolve(character);
  }catch(error){reject(error);}
 },undefined,reject));
 return modelPromise;
}
const imagePromise=createIllustratedCharacter(window.heroAssets.image).then(result=>{
 illustrated=result;result.group.position.copy(center);result.setMode('flow');scene.add(result.group);return result;
});
Promise.allSettled([imagePromise,ensureModel()]).then(results=>{
 for(const result of results)if(result.status==='rejected')console.error('Portrait flow asset failed',result.reason);
 if(illustrated&&character){updateCaption(0);markReady();}else if(illustrated){flowClock=8.2;markReady();}else if(character){markReady();status.textContent='原画暂不可用 · 立体人物预览';}else{document.body.classList.remove('sculpture');window.dispatchEvent(new Event('worldfailed'));}
});
addEventListener('worldchange',event=>{
 targetNight=event.detail.night?1:0;
 if(mode!==event.detail.mode){mode=event.detail.mode;controls.enabled=mode==='explore';keys.clear();if(controls.enabled){controls.target.copy(center);controls.update();}}
});
addEventListener('openingstart',()=>{entry=0;flowClock=window.worldUI.paused?8.2:-1.1;lastPhase=-1;});
addEventListener('flowreplay',()=>{flowClock=0;lastPhase=-1;});
const keys=new Set(),destination=new THREE.Vector3(),look=new THREE.Vector3(),inactivePointer=new THREE.Vector2(20,20);
function reset(){pointer.set(0,0);camera.position.copy(home);controls.target.copy(focus);camera.lookAt(focus);}
addEventListener('worldreset',reset);
host.addEventListener('pointermove',event=>{if(event.pointerType==='touch')return;const rect=host.getBoundingClientRect();pointer.set((event.clientX-rect.left)/rect.width*2-1,(event.clientY-rect.top)/rect.height*2-1);});
host.addEventListener('pointerleave',()=>pointer.set(0,0));
addEventListener('keydown',event=>{if(mode==='explore'&&['w','a','s','d','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(event.key)){keys.add(event.key);event.preventDefault();}});
addEventListener('keyup',event=>keys.delete(event.key));addEventListener('blur',()=>keys.clear());
const forward=new THREE.Vector3(),right=new THREE.Vector3(),move=new THREE.Vector3();
function navigate(dt){if(!keys.size)return;camera.getWorldDirection(forward);forward.y=0;forward.normalize();right.crossVectors(forward,camera.up).normalize();move.set(0,0,0);if(keys.has('w')||keys.has('ArrowUp'))move.add(forward);if(keys.has('s')||keys.has('ArrowDown'))move.sub(forward);if(keys.has('a')||keys.has('ArrowLeft'))move.sub(right);if(keys.has('d')||keys.has('ArrowRight'))move.add(right);move.normalize().multiplyScalar(dt*3);if(Math.abs(camera.position.x+move.x)<22&&Math.abs(camera.position.z+move.z)<25){camera.position.add(move);controls.target.add(move);}}
let previous=performance.now();
renderer.setAnimationLoop(now=>{
 const dt=Math.min((now-previous)/1000,.05);previous=now;if(document.hidden||window.heroOffscreen)return;
 const paused=window.worldUI.paused;if(!paused)time+=dt;
 if(window.worldRevealed)entry=THREE.MathUtils.damp(entry,1,2.6,dt);
 if(ready&&window.worldRevealed&&!paused)flowClock=Math.min(8.2,flowClock+dt);
 const morph=illustrated?THREE.MathUtils.smoothstep(flowClock,4.4,8):0;
 const flatten=THREE.MathUtils.smoothstep(flowClock,3.2,7.8);
 const scan=flowClock<2.4?-.2:(flowClock<4.4?THREE.MathUtils.mapLinear(flowClock,2.4,4.4,-.15,1.15):morph*1.3-.15);
 const phase=flowClock<2.4?0:(flowClock<4.4?1:(flowClock<8?2:3));
 if(ready)updateCaption(phase);
 const flowProgress=THREE.MathUtils.clamp(flowClock/8,0,1);
 document.getElementById('flow-progress').style.transform=`scaleX(${flowProgress})`;
 document.querySelector('.flow-track').setAttribute('aria-valuenow',String(Math.round(flowProgress*100)));
 night=THREE.MathUtils.damp(night,targetNight,3,dt);landscape.update(time,night);
 scene.fog.density=.027+Math.sin(Math.PI*morph)*.005;
 hemi.intensity=2.2-night;key.intensity=3+night*.8;rose.intensity=24+night*45;blue.intensity=22+night*40;
 if(mode==='parallax'){
  const px=paused?0:pointer.x,py=paused?0:pointer.y;destination.copy(home);destination.x+=px*.75*(1-flatten*.72);destination.y-=py*.35*(1-flatten*.6);destination.z+=(1-entry)*.8-flatten*(mobile?.35:.65);
  camera.position.lerp(destination,1-Math.exp(-dt*3));look.copy(focus);look.x+=px*.12;camera.lookAt(look);
 }else{navigate(dt);controls.update();}
 if(illustrated){illustrated.group.scale.setScalar(mobile?.94:1);illustrated.update(time,night,entry,paused?inactivePointer:pointer,camera,morph,flatten,scan);}
 const modelScale=mobile?.94:1;modelRoot.scale.set(modelScale*(1-flatten*.96),modelScale,modelScale);modelRoot.position.y=.6+Math.sin(time*.65)*.022*(1-morph);
 modelRoot.visible=!!character&&morph<.9999;
 if(character){character.uniforms.uNight.value=night;character.uniforms.uMorph.value=morph;character.uniforms.uScan.value=scan;}
 composer.render();
});
addEventListener('resize',resize);updateCaption(0);

addEventListener('message',event=>{if(event.origin!==location.origin||event.source!==parent)return;if(event.data?.type==='sinthome:visibility')window.heroOffscreen=!event.data.visible;});
