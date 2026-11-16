import * as THREE from 'three';

// Cut the supplied character's actual triangles into horizontal bands, retaining
// UVs and smooth normals. Each band can move without stretching the triangles.
export function createSlicedCharacter(model, height=4.35) {
  model.updateMatrixWorld(true);
  const count=28,step=height/count,gap=.005;
  const pieces=[],meshes=[],materials=[];
  const uniforms={uDeconstruct:{value:0},uNight:{value:0},uHalfLayer:{value:step/2-gap/2},uMorph:{value:0},uScan:{value:-.2}};
  const wipeShader=`
    float converted=smoothstep(vPortraitY-.08,vPortraitY+.08,uMorph*1.3-.15);
    float screenDoor=fract(sin(dot(floor(gl_FragCoord.xy),vec2(12.9898,78.233)))*43758.5453);
    if(converted>screenDoor)discard;
  `;
  const depthMaterial=new THREE.MeshDepthMaterial({depthPacking:THREE.RGBADepthPacking,side:THREE.DoubleSide});
  depthMaterial.onBeforeCompile=shader=>{
    shader.uniforms.uMorph=uniforms.uMorph;
    shader.vertexShader='attribute float aPortraitY; varying float vPortraitY;\n'+shader.vertexShader;
    shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvPortraitY=aPortraitY;');
    shader.fragmentShader='varying float vPortraitY; uniform float uMorph;\n'+shader.fragmentShader;
    shader.fragmentShader=shader.fragmentShader.replace('#include <alphatest_fragment>','#include <alphatest_fragment>\n'+wipeShader);
  };
  depthMaterial.customProgramCacheKey=()=> 'sinthome-flow-depth-v1';
  const normalMatrix=new THREE.Matrix3();
  function interpolate(a,b,t){return {p:a.p.clone().lerp(b.p,t),n:a.n.clone().lerp(b.n,t),uv:a.uv.clone().lerp(b.uv,t)};}
  function clip(vertices,y,above){
    const out=[];
    for(let i=0;i<vertices.length;i++){
      const a=vertices[i],b=vertices[(i+1)%vertices.length];
      const ai=above?a.p.y>=y:a.p.y<=y,bi=above?b.p.y>=y:b.p.y<=y;
      if(ai)out.push(a);
      if(ai!==bi)out.push(interpolate(a,b,(y-a.p.y)/(b.p.y-a.p.y)));
    }
    return out;
  }
  model.traverse(source=>{
    if(!source.isMesh)return;
    const geometry=source.geometry,pos=geometry.getAttribute('position'),normal=geometry.getAttribute('normal'),uv=geometry.getAttribute('uv'),index=geometry.index;
    normalMatrix.getNormalMatrix(source.matrixWorld);
    const original=Array.isArray(source.material)?source.material[0]:source.material;
    const material=new THREE.MeshPhysicalMaterial({
      map:original.map,normalMap:original.normalMap,normalScale:original.normalScale?.clone(),
      color:original.color.clone().multiplyScalar(.88),roughness:.65,metalness:.04,clearcoat:.12,clearcoatRoughness:.3,
      iridescence:.12,iridescenceIOR:1.3,iridescenceThicknessRange:[120,300],envMapIntensity:.4,
      side:THREE.DoubleSide
    });
    material.onBeforeCompile=shader=>{
      Object.assign(shader.uniforms,uniforms);
      shader.vertexShader='attribute float aPortraitY; varying float vCutY,vPortraitY;\n'+shader.vertexShader;
      shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvCutY=position.y;vPortraitY=aPortraitY;');
      shader.fragmentShader='varying float vCutY,vPortraitY;\nuniform float uDeconstruct,uNight,uHalfLayer,uMorph,uScan;\n'+shader.fragmentShader;
      shader.fragmentShader=shader.fragmentShader.replace('#include <alphatest_fragment>','#include <alphatest_fragment>\n'+wipeShader);
      shader.fragmentShader=shader.fragmentShader.replace('#include <emissivemap_fragment>',`#include <emissivemap_fragment>
        float edgeDistance=max(0.,uHalfLayer-abs(vCutY));
        float edge=1.-smoothstep(.002,.014,edgeDistance);
        vec3 edgeColor=mix(vec3(.12,.16,.28),vec3(.26,.38,.65),uNight);
        totalEmissiveRadiance+=edgeColor*edge*(.13+uDeconstruct*.8);
        float scanBand=exp(-pow((vPortraitY-uScan)*20.,2.));
        totalEmissiveRadiance+=mix(vec3(.16,.28,.45),vec3(.3,.55,.8),uNight)*scanBand*.75;
        diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.63,.60,.77),.08);
      `);
    };
    material.customProgramCacheKey=()=> 'sinthome-character-flow-v2';materials.push(material);
    const bands=Array.from({length:count},()=>({positions:[],normals:[],uvs:[]}));
    function vertex(i){return {
      p:new THREE.Vector3().fromBufferAttribute(pos,i).applyMatrix4(source.matrixWorld),
      n:normal?new THREE.Vector3().fromBufferAttribute(normal,i).applyNormalMatrix(normalMatrix):new THREE.Vector3(0,0,1),
      uv:uv?new THREE.Vector2().fromBufferAttribute(uv,i):new THREE.Vector2()
    };}
    const triangles=(index?index.count:pos.count)/3;
    for(let triangle=0;triangle<triangles;triangle++){
      const j=triangle*3;
      const vertices=[vertex(index?index.getX(j):j),vertex(index?index.getX(j+1):j+1),vertex(index?index.getX(j+2):j+2)];
      const min=Math.min(...vertices.map(v=>v.p.y)),max=Math.max(...vertices.map(v=>v.p.y));
      const first=Math.max(0,Math.floor(min/step)),last=Math.min(count-1,Math.floor(max/step));
      for(let band=first;band<=last;band++){
        const bottom=band*step+gap/2,top=(band+1)*step-gap/2;
        let polygon=vertices;
        if(min<bottom)polygon=clip(polygon,bottom,true);
        if(polygon.length<3)continue;
        if(max>top)polygon=clip(polygon,top,false);
        if(polygon.length<3)continue;
        const data=bands[band],centerY=(band+.5)*step;
        for(let t=1;t<polygon.length-1;t++)for(const v of [polygon[0],polygon[t],polygon[t+1]]){
          data.positions.push(v.p.x,v.p.y-centerY,v.p.z);
          const n=v.n.clone().normalize();data.normals.push(n.x,n.y,n.z);data.uvs.push(v.uv.x,v.uv.y);
        }
      }
    }
    bands.forEach((band,i)=>{
      if(!band.positions.length)return;
      const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(band.positions,3));
      geo.setAttribute('normal',new THREE.Float32BufferAttribute(band.normals,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(band.uvs,2));
      const mesh=new THREE.Mesh(geo,material),origin=new THREE.Vector3(0,(i+.5)*step,0),angle=i*.63;
      const portraitY=new Float32Array(band.positions.length/3);for(let v=0;v<portraitY.length;v++)portraitY[v]=(band.positions[v*3+1]+origin.y)/height;
      geo.setAttribute('aPortraitY',new THREE.BufferAttribute(portraitY,1));
      mesh.customDepthMaterial=depthMaterial;
      mesh.position.copy(origin);mesh.castShadow=true;
      const direction=new THREE.Vector3(Math.cos(angle),Math.sin(angle*.7)*.08,Math.sin(angle)).normalize();
      meshes.push(mesh);pieces.push({mesh,origin,direction,angle});
    });
  });
  if(!meshes.length)throw new Error('Character contains no sliceable triangles');
  return {pieces,meshes,materials,uniforms};
}
