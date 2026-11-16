import * as THREE from './vendor/three.module.js';
import { GLTFLoader } from './vendor/loaders/GLTFLoader.js';
import { MeshoptDecoder } from './vendor/libs/meshopt_decoder.module.js';
import { RoomEnvironment } from './vendor/environments/RoomEnvironment.js';
import { createMistEnvironment } from './mist-environment.js';
const host=document.getElementById('world'),renderer=new THREE.WebGLRenderer({antialias:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.85;host.append(renderer.domElement);
const scene=new THREE.Scene();scene.fog=new THREE.FogExp2(0x282038,.021);
const pmrem=new THREE.PMREMGenerator(renderer),room=new RoomEnvironment();scene.environment=pmrem.fromScene(room,.03).texture;room.dispose();pmrem.dispose();
const camera=new THREE.PerspectiveCamera(39,1,.1,180),pointer=new THREE.Vector2(),home=new THREE.Vector3(),focus=new THREE.Vector3();
const landscape=createMistEnvironment(scene);landscape.update(0,1);
scene.add(new THREE.HemisphereLight(0xdce8ff,0x27203b,1.6));const key=new THREE.DirectionalLight(0xfff4ec,2.1);key.position.set(-4,8,7);scene.add(key);const rim=new THREE.DirectionalLight(0x9badff,2.4);rim.position.set(6,4,-5);scene.add(rim);
const root=new THREE.Group();root.position.set(3.6,.6,0);root.rotation.y=Math.PI*1.5;scene.add(root);
let original,mats=[],time=0;const paused=matchMedia('(prefers-reduced-motion: reduce)').matches,strength=.65;
function material(source){const m=new THREE.MeshStandardMaterial({map:source.map,normalMap:source.normalMap,color:source.color,roughness:.75,metalness:0,envMapIntensity:.45,side:THREE.DoubleSide,transparent:source.transparent,opacity:source.opacity,alphaTest:source.alphaTest});m.onBeforeCompile=shader=>{shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
float gray=dot(diffuseColor.rgb,vec3(.2126,.7152,.0722));
diffuseColor.rgb=mix(vec3(gray),diffuseColor.rgb,1.35);`);};return m;}
try{const gltf=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).loadAsync(window.heroAssets.model);const model=gltf.scene;model.updateMatrixWorld(true);const box=new THREE.Box3().setFromObject(model),scale=4.35/box.getSize(new THREE.Vector3()).y,center=box.getCenter(new THREE.Vector3());const normalize=new THREE.Matrix4().makeScale(scale,scale,scale);normalize.setPosition(-center.x*scale,-box.min.y*scale,-center.z*scale);
 original=new THREE.Group();root.add(original);
 model.traverse(obj=>{if(!obj.isMesh)return;let geo=obj.geometry.clone();for(const name of ["position","normal"]){const a=geo.getAttribute(name);if(!a)continue;const values=new Float32Array(a.count*3);for(let i=0;i<a.count;i++){values[i*3]=a.getX(i);values[i*3+1]=a.getY(i);values[i*3+2]=a.getZ(i);}geo.setAttribute(name,new THREE.BufferAttribute(values,3));}geo.applyMatrix4(new THREE.Matrix4().multiplyMatrices(normalize,obj.matrixWorld));if(!geo.attributes.normal)geo.computeVertexNormals();const sources=Array.isArray(obj.material)?obj.material:[obj.material];const materials=sources.map(material);original.add(new THREE.Mesh(geo,materials.length===1?materials[0]:materials));});resize();renderer.compile(scene,camera);document.body.classList.add('ready');dispatchEvent(new Event('worldready'));}
catch(error){console.error(error);dispatchEvent(new Event('worldfailed'));}
function resize(){const mobile=host.clientWidth<700;root.scale.setScalar(mobile?Math.min(.94,host.clientWidth/570):1);camera.aspect=host.clientWidth/host.clientHeight;camera.updateProjectionMatrix();renderer.setSize(host.clientWidth,host.clientHeight);home.set(mobile?3.6:0,mobile?1.7:3.9,mobile?18.5:16.2);focus.set(mobile?3.6:0,mobile?-.6:2.35,0);camera.position.copy(home);camera.lookAt(focus);}resize();addEventListener('resize',resize);
host.onpointermove=e=>{const r=host.getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,(e.clientY-r.top)/r.height*2-1);};host.onpointerleave=()=>pointer.set(0,0);
let previous=performance.now();renderer.setAnimationLoop(now=>{const dt=Math.min((now-previous)/1000,.05);previous=now;if(document.hidden||window.heroOffscreen)return;if(!paused&&window.worldRevealed)time+=dt;
 landscape.update(time,1);root.rotation.y=Math.PI*1.5+(Math.sin(time*.36)*.09*strength);root.position.y=.6+Math.sin(time*.65)*.05*strength;
 camera.position.lerp(new THREE.Vector3(home.x+(paused?0:pointer.x*.5),home.y-(paused?0:pointer.y*.25),home.z),1-Math.exp(-dt*3));camera.lookAt(focus);
 renderer.render(scene,camera);});

addEventListener('message',event=>{if(event.origin!==location.origin||event.source!==parent)return;if(event.data?.type==='sinthome:visibility')window.heroOffscreen=!event.data.visible;});
