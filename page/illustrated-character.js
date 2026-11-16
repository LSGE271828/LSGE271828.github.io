import * as THREE from 'three';

export async function createIllustratedCharacter(url) {
  const image=new Image();image.src=url;await image.decode();
  const width=4.35*image.width/image.height,height=4.35;
  const sample=document.createElement('canvas');sample.width=image.width;sample.height=image.height;
  const context=sample.getContext('2d',{willReadFrequently:true});context.drawImage(image,0,0);
  const pixels=context.getImageData(0,0,image.width,image.height).data;
  const root=new THREE.Group();
  const imageTexture=new THREE.Texture(image);imageTexture.colorSpace=THREE.SRGBColorSpace;imageTexture.needsUpdate=true;
  const uniforms={uTime:{value:0},uNight:{value:0},uReveal:{value:0},uPointer:{value:new THREE.Vector2(20,20)},uTransition:{value:1},uFlatten:{value:1},uScan:{value:-.2},uLineStrength:{value:0},uUnderpaint:{value:.28}};

  // An actual font atlas: each quad renders a letter, not a soft particle.
  const alphabet='.:,-=+*/sintohmeS0O8BWM#@',tile=64,atlasColumns=8;
  const atlas=document.createElement('canvas');atlas.width=atlas.height=tile*atlasColumns;
  const ink=atlas.getContext('2d');ink.fillStyle='#fff';ink.textAlign='center';ink.textBaseline='middle';ink.font='600 48px Consolas, monospace';
  for(let i=0;i<alphabet.length;i++)ink.fillText(alphabet[i],(i%atlasColumns+.5)*tile,(Math.floor(i/atlasColumns)+.52)*tile);
  const atlasTexture=new THREE.CanvasTexture(atlas);atlasTexture.minFilter=THREE.LinearFilter;atlasTexture.generateMipmaps=false;
  const columns=96,cellWidth=width/columns,cellHeight=cellWidth*1.42,rows=Math.ceil(height/cellHeight);
  const centers=[],colors=[],bases=[],phases=[],opacities=[];
  const color=new THREE.Color(),tint=new THREE.Color('#a69acb');
  for(let row=0;row<rows;row++)for(let col=0;col<columns;col++){
    const u=(col+.5)/columns,v=(row+.5)/rows;
    const x=Math.min(image.width-1,Math.floor(u*image.width)),y=Math.min(image.height-1,Math.floor(v*image.height)),j=(y*image.width+x)*4;
    const alpha=pixels[j+3]/255;if(alpha<.18)continue;
    const r=pixels[j]/255,g=pixels[j+1]/255,b=pixels[j+2]/255,luma=.2126*r+.7152*g+.0722*b;
    color.setRGB(r,g,b,THREE.SRGBColorSpace).lerp(tint,.12);
    centers.push((u-.5)*width,(.5-v)*height,.12+(1-luma)*.65);
    color.toArray(colors,colors.length);
    bases.push(luma>.55?12:(luma>.25?16:20));
    phases.push(((col*73+row*179)%997)/997);opacities.push(alpha);
  }
  const geometry=new THREE.InstancedBufferGeometry();
  geometry.setAttribute('position',new THREE.Float32BufferAttribute([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],3));
  geometry.setAttribute('uv',new THREE.Float32BufferAttribute([0,0,1,0,1,1,0,1],2));geometry.setIndex([0,1,2,0,2,3]);
  geometry.setAttribute('aCenter',new THREE.InstancedBufferAttribute(new Float32Array(centers),3));
  geometry.setAttribute('aColor',new THREE.InstancedBufferAttribute(new Float32Array(colors),3));
  geometry.setAttribute('aBase',new THREE.InstancedBufferAttribute(new Float32Array(bases),1));
  geometry.setAttribute('aPhase',new THREE.InstancedBufferAttribute(new Float32Array(phases),1));
  geometry.setAttribute('aAlpha',new THREE.InstancedBufferAttribute(new Float32Array(opacities),1));geometry.instanceCount=bases.length;
  const glyphMaterial=new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.DoubleSide,
    uniforms:{...uniforms,uAtlas:{value:atlasTexture},uCell:{value:new THREE.Vector2(cellWidth*1.15,cellHeight*1.2)}},
    vertexShader:`
      uniform float uTime,uReveal,uTransition,uFlatten;uniform vec2 uPointer,uCell;
      attribute vec3 aCenter,aColor;attribute float aBase,aPhase,aAlpha;
      varying vec2 vUv;varying vec3 vColor;varying float vGlyph,vAlpha;
      void main(){
        vec3 center=aCenter;float phase=aPhase*6.283185;
        float ny=(aCenter.y+2.175)/4.35;
        float converted=smoothstep(ny-.08,ny+.08,uTransition*1.3-.15);
        center.z*=1.-uFlatten;
        float wave=sin(center.y*3.5+uTime*.75+center.x*.7);
        center.x+=(wave*.045+sin(uTime*.4+phase)*.008)*converted;
        center.y+=sin(center.x*2.-uTime*.65)*.028*converted;
        vec2 delta=center.xy-uPointer;float distance=length(delta);
        center.xy+=normalize(delta+vec2(.0001))*exp(-distance*distance*1.5)*.065*sin(uTime*1.6-distance*4.);
        center.z+=wave*.035*converted;
        vec3 p=center+vec3(position.xy*uCell,0.);
        gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
        vUv=uv;vColor=aColor;vGlyph=aBase+mod(floor(uTime*.65+aPhase*9.),4.);
        float scan=smoothstep(-2.8,2.8,center.y);vAlpha=aAlpha*smoothstep(scan*.35,.65+scan*.35,uReveal)*converted;
      }`,
    fragmentShader:`
      uniform sampler2D uAtlas;uniform float uNight;varying vec2 vUv;varying vec3 vColor;varying float vGlyph,vAlpha;
      void main(){
        vec2 tile=vec2(mod(vGlyph,8.),7.-floor(vGlyph/8.));
        vec2 uv=(tile+clamp(vUv,.02,.98))/8.;float ink=texture2D(uAtlas,uv).a;
        if(ink<.035)discard;
        vec3 day=mix(vColor*.22,vec3(.055,.035,.11),.4);
        vec3 night=vColor*.92+vec3(.1,.11,.19);
        gl_FragColor=vec4(mix(day,night,uNight),ink*vAlpha*.97);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`});
  const glyphs=new THREE.Mesh(geometry,glyphMaterial);glyphs.frustumCulled=false;glyphs.renderOrder=3;root.add(glyphs);

  // A quiet original-image underpainting keeps fine facial features readable.
  const underpaintMaterial=new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.DoubleSide,uniforms:{...uniforms,uImage:{value:imageTexture}},
    vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader:`varying vec2 vUv;uniform sampler2D uImage;uniform float uTransition,uReveal,uUnderpaint;void main(){vec4 source=texture2D(uImage,vUv);float converted=smoothstep(vUv.y-.08,vUv.y+.08,uTransition*1.3-.15);gl_FragColor=vec4(source.rgb,source.a*converted*uUnderpaint*uReveal);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`});
  const underpaint=new THREE.Mesh(new THREE.PlaneGeometry(width,height),underpaintMaterial);underpaint.position.z=-.025;underpaint.renderOrder=1;root.add(underpaint);

  const edgeCanvas=document.createElement('canvas');edgeCanvas.width=800;edgeCanvas.height=Math.round(800*image.height/image.width);
  const edgeContext=edgeCanvas.getContext('2d',{willReadFrequently:true});edgeContext.drawImage(image,0,0,edgeCanvas.width,edgeCanvas.height);
  const original=edgeContext.getImageData(0,0,edgeCanvas.width,edgeCanvas.height),edgeData=edgeContext.createImageData(edgeCanvas.width,edgeCanvas.height);
  const w=edgeCanvas.width,h=edgeCanvas.height,luminance=new Float32Array(w*h);
  for(let i=0;i<w*h;i++){const j=i*4;luminance[i]=(.2126*original.data[j]+.7152*original.data[j+1]+.0722*original.data[j+2])/255*(original.data[j+3]/255);}
  for(let y=1;y<h-1;y++)for(let x=1;x<w-1;x++){
    const i=y*w+x,j=i*4;
    const gx=-luminance[i-w-1]+luminance[i-w+1]-2*luminance[i-1]+2*luminance[i+1]-luminance[i+w-1]+luminance[i+w+1];
    const gy=-luminance[i-w-1]-2*luminance[i-w]-luminance[i-w+1]+luminance[i+w-1]+2*luminance[i+w]+luminance[i+w+1];
    const strength=THREE.MathUtils.smoothstep(Math.hypot(gx,gy),.045,.62);
    edgeData.data[j]=225;edgeData.data[j+1]=230;edgeData.data[j+2]=255;edgeData.data[j+3]=Math.round(strength*255);
  }
  edgeContext.putImageData(edgeData,0,0);
  const edgeTexture=new THREE.CanvasTexture(edgeCanvas);
  const lineMaterial=new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.DoubleSide,uniforms:{...uniforms,uEdges:{value:edgeTexture}},
    vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader:`varying vec2 vUv;uniform sampler2D uEdges;uniform float uNight,uTime,uReveal,uScan,uLineStrength;void main(){float edge=texture2D(uEdges,vUv).a;float band=exp(-pow((vUv.y-uScan)*18.,2.));vec3 day=mix(vec3(.24,.18,.4),vec3(.17,.36,.46),vUv.x);vec3 night=mix(vec3(.63,.51,.9),vec3(.4,.85,.92),vUv.x);gl_FragColor=vec4(mix(day,night,uNight),edge*(.12+band*.88)*uReveal*uLineStrength);#include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`});
  // Shader chunk directives have to begin a line.
  lineMaterial.fragmentShader=lineMaterial.fragmentShader.replace(';#include',';\n#include');
  const lines=new THREE.Mesh(new THREE.PlaneGeometry(width,height),lineMaterial);lines.position.z=.02;lines.renderOrder=3;lines.visible=false;root.add(lines);
  let currentMode='glyph';
  return {group:root,setMode(mode){currentMode=mode;glyphs.visible=mode==='glyph'||mode==='flow';lines.visible=mode==='line'||mode==='flow';},
    update(time,night,reveal,pointer,camera,transition=1,flatten=1,scan=-.2){
      uniforms.uTime.value=time;uniforms.uNight.value=night;uniforms.uReveal.value=reveal;
      uniforms.uTransition.value=transition;uniforms.uFlatten.value=flatten;uniforms.uScan.value=scan;
      uniforms.uPointer.value.set(pointer.x*3.4,-pointer.y*2.3);
      if(currentMode==='flow')root.quaternion.identity().slerp(camera.quaternion,THREE.MathUtils.smoothstep(flatten,.1,1)*transition);else root.quaternion.copy(camera.quaternion);
      uniforms.uUnderpaint.value=currentMode==='line'?.065:.28;
      uniforms.uLineStrength.value=currentMode==='flow'?Math.sin(Math.PI*transition)*.8+((scan>-.1&&scan<1.1)?.35:0):(currentMode==='line'?1:0);
      lines.visible=(currentMode==='line'||currentMode==='flow')&&uniforms.uLineStrength.value>.005;
    },count:bases.length};
}
