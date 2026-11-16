import * as THREE from 'three';

// The original homepage landscape, shared with the new sculpture direction.
export function createMistEnvironment(scene) {
  const stone=new THREE.MeshStandardMaterial({color:0xcac7d8,roughness:.47,metalness:.22});
  const sideStone=new THREE.MeshStandardMaterial({color:0x858098,roughness:.7,metalness:.18});
  const steel=new THREE.MeshStandardMaterial({color:0x9f9aac,roughness:.37,metalness:.65});
  const edge=new THREE.MeshBasicMaterial({color:0xebe0ff,transparent:true,opacity:.64});
  const floorMaterial=new THREE.MeshStandardMaterial({color:0xe3dfeb,roughness:.26,metalness:.3});
  const floor=new THREE.Mesh(new THREE.PlaneGeometry(180,180),floorMaterial);
  floor.rotation.x=-Math.PI/2;floor.position.y=-.85;floor.receiveShadow=true;scene.add(floor);
  const sky=new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,uniforms:{
    top:{value:new THREE.Color('#c9c7de')},bottom:{value:new THREE.Color('#f3f0f8')},glow:{value:new THREE.Color('#f8d9df')}
  },vertexShader:`varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
  fragmentShader:`varying vec3 vP;uniform vec3 top,bottom,glow;void main(){vec3 p=normalize(vP);float h=smoothstep(-.12,.8,p.y);vec3 c=mix(bottom,top,h);float sun=pow(max(0.,dot(p,normalize(vec3(.6,.22,-1.)))),18.);c=mix(c,glow,sun*.65);gl_FragColor=vec4(c,1.);}`});
  scene.add(new THREE.Mesh(new THREE.SphereGeometry(110,32,24),sky));
  let seed=78;const rand=()=>{seed=(Math.imul(1664525,seed)+1013904223)|0;return(seed>>>0)/4294967296;};
  function island(x,y,z,r,n){
    const shape=new THREE.Shape();
    for(let i=0;i<n;i++){const angle=i/n*Math.PI*2,rad=r*(.8+rand()*.25),a=Math.cos(angle)*rad,b=Math.sin(angle)*rad;i?shape.lineTo(a,b):shape.moveTo(a,b);}
    shape.closePath();const geometry=new THREE.ExtrudeGeometry(shape,{depth:.35+rand()*.5,bevelEnabled:false});geometry.rotateX(-Math.PI/2);
    const mesh=new THREE.Mesh(geometry,[stone,sideStone]);mesh.position.set(x,y,z);mesh.receiveShadow=mesh.castShadow=true;scene.add(mesh);
  }
  island(3.7,-.15,0,3.65,7);
  for(let i=0;i<30;i++){const x=(rand()-.5)*48,z=(rand()-.5)*38-10;if(Math.abs(x-3.7)<4.5&&Math.abs(z)<5)continue;island(x,-.7+rand()*.3,z,1+rand()*3.4,3+Math.floor(rand()*4));}
  for(let i=0;i<12;i++){const path=new THREE.Mesh(new THREE.BoxGeometry(.012,.008,60),edge);path.position.set((i-5)*4,-.795,-11);path.rotation.y=.38;scene.add(path);}
  const pedestal=new THREE.Mesh(new THREE.CylinderGeometry(2.08,2.23,.2,80),new THREE.MeshStandardMaterial({color:0xe9e2f0,roughness:.3,metalness:.24}));
  pedestal.position.set(3.7,.47,0);pedestal.receiveShadow=pedestal.castShadow=true;scene.add(pedestal);
  const pedestalLine=new THREE.Mesh(new THREE.TorusGeometry(2.12,.012,6,100),edge);pedestalLine.rotation.x=Math.PI/2;pedestalLine.position.set(3.7,.51,0);scene.add(pedestalLine);
  function beam(group,a,b,width){const aa=new THREE.Vector3(...a),bb=new THREE.Vector3(...b),d=bb.clone().sub(aa),m=new THREE.Mesh(new THREE.CylinderGeometry(width,width,d.length(),5),steel);m.position.copy(aa).add(bb).multiplyScalar(.5);m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),d.normalize());group.add(m);}
  function truss(x,z,h,lean){
    const group=new THREE.Group(),w=.65;
    for(const a of [-w,w])for(const b of [-w,w])beam(group,[a,0,b],[a,h,b],.045);
    for(let y=0;y<h-1;y+=1.4)for(const s of [-w,w]){
      beam(group,[-w,y,s],[w,y+1.4,s],.024);beam(group,[w,y,s],[-w,y+1.4,s],.024);
      beam(group,[s,y,-w],[s,y+1.4,w],.024);beam(group,[s,y,w],[s,y+1.4,-w],.024);
    }
    group.position.set(x,-.6,z);group.rotation.z=lean;scene.add(group);
  }
  truss(-7,-3,13,.17);truss(10,-1,17,-.1);truss(-13,-21,16,-.08);truss(16,-27,13,.18);
  const fragments=[];
  for(let i=0;i<28;i++){
    const mesh=new THREE.Mesh(new THREE.TetrahedronGeometry(.12+rand()*.5),new THREE.MeshStandardMaterial({color:[0xc5bbd9,0xc5d9dd,0xe7cfdc,0xdedceb][i%4],roughness:.28,metalness:.25,transparent:true,opacity:.6+rand()*.3}));
    mesh.position.set((rand()-.5)*38,2+rand()*13,-3-rand()*35);mesh.rotation.set(rand()*3,rand()*3,rand()*3);scene.add(mesh);fragments.push({mesh,y:mesh.position.y,phase:rand()*6});
  }
  const portal=new THREE.Group();portal.position.set(4.3,-.2,-9);
  const portalMaterial=new THREE.MeshStandardMaterial({color:0x93869e,roughness:.23,metalness:.5});
  for(const x of [-1.55,1.55]){const b=new THREE.Mesh(new THREE.BoxGeometry(.14,6.1,.3),portalMaterial);b.position.set(x,3,0);portal.add(b);}
  const lintel=new THREE.Mesh(new THREE.BoxGeometry(3.25,.14,.3),portalMaterial);lintel.position.y=6.1;portal.add(lintel);
  const doorMaterial=new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.DoubleSide,uniforms:{night:{value:0}},
    vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader:`varying vec2 vUv;uniform float night;void main(){vec3 c=mix(vec3(.82,.78,.95),vec3(1.,.91,.92),vUv.y);c=mix(c,mix(vec3(.6,.37,.76),vec3(1.,.68,.78),vUv.y),night);float a=(.28+night*.3)*smoothstep(0.,.12,vUv.x)*smoothstep(1.,.88,vUv.x);gl_FragColor=vec4(c,a);}`});
  const door=new THREE.Mesh(new THREE.PlaneGeometry(2.95,5.95),doorMaterial);door.position.set(0,3,0);portal.add(door);scene.add(portal);
  const canvas=document.createElement('canvas');canvas.width=canvas.height=128;const ctx=canvas.getContext('2d'),g=ctx.createRadialGradient(64,64,0,64,64,64);g.addColorStop(0,'rgba(255,255,255,.38)');g.addColorStop(.35,'rgba(255,255,255,.2)');g.addColorStop(1,'rgba(255,255,255,0)');ctx.fillStyle=g;ctx.fillRect(0,0,128,128);
  const map=new THREE.CanvasTexture(canvas),clouds=[];
  for(let i=0;i<36;i++){const cloud=new THREE.Sprite(new THREE.SpriteMaterial({map,color:0xf5f0ff,transparent:true,opacity:.45,depthWrite:false}));cloud.position.set((rand()-.5)*80,-.6+rand()*1.5,-8-rand()*45);const s=7+rand()*13;cloud.scale.set(s,s*.5,1);scene.add(cloud);clouds.push({cloud,x:cloud.position.x,phase:rand()*6});}
  const day={top:'#c9c7de',bottom:'#f3f0f8',glow:'#f8d9df',fog:'#e4e1ed',stone:'#cac7d8',side:'#858098',floor:'#e3dfeb',steel:'#9f9aac',cloud:'#f5f0ff'};
  const dusk={top:'#161933',bottom:'#85708e',glow:'#f3afce',fog:'#514362',stone:'#71647f',side:'#352b48',floor:'#5e526e',steel:'#706480',cloud:'#b9a0c9'};
  const dayColors={},duskColors={};for(const key in day){dayColors[key]=new THREE.Color(day[key]);duskColors[key]=new THREE.Color(dusk[key]);}
  let previousNight=-1;
  return {update(time,night){
    if(Math.abs(night-previousNight)>.0001){
      for(const key of ['top','bottom','glow'])sky.uniforms[key].value.lerpColors(dayColors[key],duskColors[key],night);
      scene.fog.color.lerpColors(dayColors.fog,duskColors.fog,night);
      for(const [material,key] of [[stone,'stone'],[sideStone,'side'],[floorMaterial,'floor'],[steel,'steel']])material.color.lerpColors(dayColors[key],duskColors[key],night);
      clouds.forEach(({cloud})=>cloud.material.color.lerpColors(dayColors.cloud,duskColors.cloud,night));
      doorMaterial.uniforms.night.value=night;previousNight=night;
    }
    for(const {mesh,y,phase} of fragments){mesh.position.y=y+Math.sin(time*.3+phase)*.16;mesh.rotation.y=time*.06+phase;}
    for(const {cloud,x,phase} of clouds)cloud.position.x=x+Math.sin(time*.06+phase)*1.4;
  }};
}
