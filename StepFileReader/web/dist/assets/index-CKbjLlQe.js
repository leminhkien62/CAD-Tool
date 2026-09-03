(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const aa="171",Ps={ROTATE:0,DOLLY:1,PAN:2},Ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ff=0,vh=1,Nf=2,od=1,Of=2,zn=3,Tn=0,ke=1,Ie=2,di=0,Ls=1,yh=2,Mh=3,Sh=4,Bf=5,Fi=100,zf=101,kf=102,Hf=103,Vf=104,Gf=200,Wf=201,Xf=202,Yf=203,Al=204,Cl=205,qf=206,Zf=207,jf=208,$f=209,Kf=210,Qf=211,Jf=212,tp=213,ep=214,Rl=0,Pl=1,Ll=2,Ns=3,Dl=4,Il=5,Ul=6,Fl=7,Dc=0,np=1,ip=2,fi=0,sp=1,rp=2,op=3,ap=4,lp=5,cp=6,hp=7,ad=300,Os=301,Bs=302,Nl=303,Ol=304,la=306,Bl=1e3,Bi=1001,zl=1002,wn=1003,up=1004,Fr=1005,Dn=1006,ba=1007,zi=1008,Kn=1009,ld=1010,cd=1011,Tr=1012,Ic=1013,Gi=1014,Gn=1015,Dr=1016,Uc=1017,Fc=1018,zs=1020,hd=35902,ud=1021,dd=1022,En=1023,fd=1024,pd=1025,Ds=1026,ks=1027,md=1028,Nc=1029,gd=1030,Oc=1031,Bc=1033,Io=33776,Uo=33777,Fo=33778,No=33779,kl=35840,Hl=35841,Vl=35842,Gl=35843,Wl=36196,Xl=37492,Yl=37496,ql=37808,Zl=37809,jl=37810,$l=37811,Kl=37812,Ql=37813,Jl=37814,tc=37815,ec=37816,nc=37817,ic=37818,sc=37819,rc=37820,oc=37821,Oo=36492,ac=36494,lc=36495,_d=36283,cc=36284,hc=36285,uc=36286,dp=3200,fp=3201,zc=0,pp=1,ci="",We="srgb",Hs="srgb-linear",Go="linear",re="srgb",Zi=7680,Ea=7681,wa=34055,Ta=34056,mp=517,dc=519,gp=512,_p=513,xp=514,xd=515,vp=516,yp=517,Mp=518,Sp=519,fc=35044,bh="300 es",Wn=2e3,Wo=2001;class Yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vr=Math.PI/180,pc=180/Math.PI;function pi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function bp(i,t){return(i%t+t)%t}function Aa(i,t,e){return(1-e)*i+e*t}function Ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ep={DEG2RAD:vr};class wt{constructor(t=0,e=0){wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,s,r,o,a,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],v=s[1],x=s[4],y=s[7],E=s[2],b=s[5],w=s[8];return r[0]=o*_+a*v+l*E,r[3]=o*m+a*x+l*b,r[6]=o*f+a*y+l*w,r[1]=c*_+d*v+h*E,r[4]=c*m+d*x+h*b,r[7]=c*f+d*y+h*w,r[2]=u*_+p*v+g*E,r[5]=u*m+p*x+g*b,r[8]=u*f+p*y+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e*o*d-e*a*c-n*r*d+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],h=d*o-a*c,u=a*l-d*r,p=c*r-o*l,g=e*h+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-d*n)*_,t[2]=(a*n-s*o)*_,t[3]=u*_,t[4]=(d*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ca.makeScale(t,e)),this}rotate(t){return this.premultiply(Ca.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ca.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ca=new Wt;function vd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wp(){const i=Xo("canvas");return i.style.display="block",i}const Eh={};function ws(i){i in Eh||(Eh[i]=!0,console.warn(i))}function Tp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ap(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Cp(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const wh=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Th=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rp(){const i={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===re&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===re&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ci?Go:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hs]:{primaries:t,whitePoint:n,transfer:Go,toXYZ:wh,fromXYZ:Th,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:t,whitePoint:n,transfer:re,toXYZ:wh,fromXYZ:Th,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:We}}}),i}const ee=Rp();function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ji;class Pp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ji===void 0&&(ji=Xo("canvas")),ji.width=t.width,ji.height=t.height;const n=ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yn(e[n]/255)*255):e[n]=Yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Lp=0;class yd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=pi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ra(s[o].image)):r.push(Ra(s[o]))}else r=Ra(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ra(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dp=0;class Xe extends Yi{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=Bi,s=Bi,r=Dn,o=zi,a=En,l=Kn,c=Xe.DEFAULT_ANISOTROPY,d=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=pi(),this.name="",this.source=new yd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ad)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bl:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case zl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bl:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case zl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=ad;Xe.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,s=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,y=(p+1)/2,E=(f+1)/2,b=(d+u)/4,w=(h+_)/4,A=(g+m)/4;return x>y&&x>E?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=b/n,r=w/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=A/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=w/r,s=A/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(u-d)*(u-d));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(u-d)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ip extends Yi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Xe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new yd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends Ip{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Md extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Up extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ve{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],d=n[s+2],h=n[s+3];const u=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==u||c!==p||d!==g){let m=1-a;const f=l*u+c*p+d*g+h*_,v=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const E=Math.sqrt(x),b=Math.atan2(E,f*v);m=Math.sin(m*b)/E,a=Math.sin(a*b)/E}const y=a*v;if(l=l*m+u*y,c=c*m+p*y,d=d*m+g*y,h=h*m+_*y,m===1-a){const E=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=E,c*=E,d*=E,h*=E}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],d=n[s+3],h=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+d*h+l*p-c*u,t[e+1]=l*g+d*u+c*h-a*p,t[e+2]=c*g+d*p+a*u-l*h,t[e+3]=d*g-a*h-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(s/2),h=a(r/2),u=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"YXZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"ZXY":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"ZYX":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"YZX":this._x=u*d*h+c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h-u*p*g;break;case"XZY":this._x=u*d*h-c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],d=e[6],h=e[10],u=n+a+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(d-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-s*a,this._w=o*d-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-e)*d)/c,u=Math.sin(e*d)/c;return this._w=o*h+this._w*u,this._x=n*h+this._x*u,this._y=s*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ah.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ah.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),d=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*d,this.y=n+l*d+a*c-r*h,this.z=s+l*h+r*d-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pa.copy(this).projectOnVector(t),this.sub(Pa)}reflect(t){return this.sub(Pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pa=new R,Ah=new ve;class ye{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nr.copy(n.boundingBox)),Nr.applyMatrix4(t.matrixWorld),this.union(Nr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($s),Or.subVectors(this.max,$s),$i.subVectors(t.a,$s),Ki.subVectors(t.b,$s),Qi.subVectors(t.c,$s),Jn.subVectors(Ki,$i),ti.subVectors(Qi,Ki),bi.subVectors($i,Qi);let e=[0,-Jn.z,Jn.y,0,-ti.z,ti.y,0,-bi.z,bi.y,Jn.z,0,-Jn.x,ti.z,0,-ti.x,bi.z,0,-bi.x,-Jn.y,Jn.x,0,-ti.y,ti.x,0,-bi.y,bi.x,0];return!La(e,$i,Ki,Qi,Or)||(e=[1,0,0,0,1,0,0,0,1],!La(e,$i,Ki,Qi,Or))?!1:(Br.crossVectors(Jn,ti),e=[Br.x,Br.y,Br.z],La(e,$i,Ki,Qi,Or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Un=[new R,new R,new R,new R,new R,new R,new R,new R],_n=new R,Nr=new ye,$i=new R,Ki=new R,Qi=new R,Jn=new R,ti=new R,bi=new R,$s=new R,Or=new R,Br=new R,Ei=new R;function La(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ei.fromArray(i,r);const a=s.x*Math.abs(Ei.x)+s.y*Math.abs(Ei.y)+s.z*Math.abs(Ei.z),l=t.dot(Ei),c=e.dot(Ei),d=n.dot(Ei);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Fp=new ye,Ks=new R,Da=new R;class Xs{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Fp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);const e=Ks.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ks,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Da.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(Da)),this.expandByPoint(Ks.copy(t.center).sub(Da))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new R,Ia=new R,zr=new R,ei=new R,Ua=new R,kr=new R,Fa=new R;class ca{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ia.copy(t).add(e).multiplyScalar(.5),zr.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(Ia);const r=t.distanceTo(e)*.5,o=-this.direction.dot(zr),a=ei.dot(this.direction),l=-ei.dot(zr),c=ei.lengthSq(),d=Math.abs(1-o*o);let h,u,p,g;if(d>0)if(h=o*l-a,u=o*a-l,g=r*d,h>=0)if(u>=-g)if(u<=g){const _=1/d;h*=_,u*=_,p=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ia).addScaledVector(zr,u),p}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);const n=Fn.dot(this.direction),s=Fn.dot(Fn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),d>=0?(r=(t.min.y-u.y)*d,o=(t.max.y-u.y)*d):(r=(t.max.y-u.y)*d,o=(t.min.y-u.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,s,r){Ua.subVectors(e,t),kr.subVectors(n,t),Fa.crossVectors(Ua,kr);let o=this.direction.dot(Fa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,t);const l=a*this.direction.dot(kr.crossVectors(ei,kr));if(l<0)return null;const c=a*this.direction.dot(Ua.cross(ei));if(c<0||l+c>o)return null;const d=-a*ei.dot(Fa);return d<0?null:this.at(d/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,n,s,r,o,a,l,c,d,h,u,p,g,_,m){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,d,h,u,p,g,_,m)}set(t,e,n,s,r,o,a,l,c,d,h,u,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ji.setFromMatrixColumn(t,0).length(),r=1/Ji.setFromMatrixColumn(t,1).length(),o=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const u=o*d,p=o*h,g=a*d,_=a*h;e[0]=l*d,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*d,p=l*h,g=c*d,_=c*h;e[0]=u+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*d,e[9]=-a,e[2]=p*a-g,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*d,p=l*h,g=c*d,_=c*h;e[0]=u-_*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*d,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*d,p=o*h,g=a*d,_=a*h;e[0]=l*d,e[4]=g*c-p,e[8]=u*c+_,e[1]=l*h,e[5]=_*c+u,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*d,e[4]=_-u*h,e[8]=g*h+p,e[1]=h,e[5]=o*d,e[9]=-a*d,e[2]=-c*d,e[6]=p*h+g,e[10]=u-_*h}else if(t.order==="XZY"){const u=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*d,e[4]=-h,e[8]=c*d,e[1]=u*h+_,e[5]=o*d,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*d,e[10]=_*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Np,t,Op)}lookAt(t,e,n){const s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ni.crossVectors(n,tn),ni.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ni.crossVectors(n,tn)),ni.normalize(),Hr.crossVectors(tn,ni),s[0]=ni.x,s[4]=Hr.x,s[8]=tn.x,s[1]=ni.y,s[5]=Hr.y,s[9]=tn.y,s[2]=ni.z,s[6]=Hr.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],v=n[3],x=n[7],y=n[11],E=n[15],b=s[0],w=s[4],A=s[8],S=s[12],M=s[1],P=s[5],D=s[9],I=s[13],N=s[2],k=s[6],H=s[10],$=s[14],W=s[3],J=s[7],ht=s[11],yt=s[15];return r[0]=o*b+a*M+l*N+c*W,r[4]=o*w+a*P+l*k+c*J,r[8]=o*A+a*D+l*H+c*ht,r[12]=o*S+a*I+l*$+c*yt,r[1]=d*b+h*M+u*N+p*W,r[5]=d*w+h*P+u*k+p*J,r[9]=d*A+h*D+u*H+p*ht,r[13]=d*S+h*I+u*$+p*yt,r[2]=g*b+_*M+m*N+f*W,r[6]=g*w+_*P+m*k+f*J,r[10]=g*A+_*D+m*H+f*ht,r[14]=g*S+_*I+m*$+f*yt,r[3]=v*b+x*M+y*N+E*W,r[7]=v*w+x*P+y*k+E*J,r[11]=v*A+x*D+y*H+E*ht,r[15]=v*S+x*I+y*$+E*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],d=t[2],h=t[6],u=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*h-s*c*h-r*a*u+n*c*u+s*a*p-n*l*p)+_*(+e*l*p-e*c*u+r*o*u-s*o*p+s*c*d-r*l*d)+m*(+e*c*h-e*a*p-r*o*h+n*o*p+r*a*d-n*c*d)+f*(-s*a*d-e*l*h+e*a*u+s*o*h-n*o*u+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],h=t[9],u=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],v=h*m*c-_*u*c+_*l*p-a*m*p-h*l*f+a*u*f,x=g*u*c-d*m*c-g*l*p+o*m*p+d*l*f-o*u*f,y=d*_*c-g*h*c+g*a*p-o*_*p-d*a*f+o*h*f,E=g*h*l-d*_*l-g*a*u+o*_*u+d*a*m-o*h*m,b=e*v+n*x+s*y+r*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=v*w,t[1]=(_*u*r-h*m*r-_*s*p+n*m*p+h*s*f-n*u*f)*w,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*f+n*l*f)*w,t[3]=(h*l*r-a*u*r-h*s*c+n*u*c+a*s*p-n*l*p)*w,t[4]=x*w,t[5]=(d*m*r-g*u*r+g*s*p-e*m*p-d*s*f+e*u*f)*w,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*w,t[7]=(o*u*r-d*l*r+d*s*c-e*u*c-o*s*p+e*l*p)*w,t[8]=y*w,t[9]=(g*h*r-d*_*r-g*n*p+e*_*p+d*n*f-e*h*f)*w,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*f+e*a*f)*w,t[11]=(d*a*r-o*h*r-d*n*c+e*h*c+o*n*p-e*a*p)*w,t[12]=E*w,t[13]=(d*_*s-g*h*s+g*n*u-e*_*u-d*n*m+e*h*m)*w,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*w,t[15]=(o*h*s-d*a*s+d*n*l-e*h*l-o*n*u+e*a*u)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+n,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,d=o+o,h=a+a,u=r*c,p=r*d,g=r*h,_=o*d,m=o*h,f=a*h,v=l*c,x=l*d,y=l*h,E=n.x,b=n.y,w=n.z;return s[0]=(1-(_+f))*E,s[1]=(p+y)*E,s[2]=(g-x)*E,s[3]=0,s[4]=(p-y)*b,s[5]=(1-(u+f))*b,s[6]=(m+v)*b,s[7]=0,s[8]=(g+x)*w,s[9]=(m-v)*w,s[10]=(1-(u+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ji.set(s[0],s[1],s[2]).length();const o=Ji.set(s[4],s[5],s[6]).length(),a=Ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],xn.copy(this);const c=1/r,d=1/o,h=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=d,xn.elements[5]*=d,xn.elements[6]*=d,xn.elements[8]*=h,xn.elements[9]*=h,xn.elements[10]*=h,e.setFromRotationMatrix(xn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Wn){const l=this.elements,c=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),u=(n+s)/(n-s);let p,g;if(a===Wn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Wo)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Wn){const l=this.elements,c=1/(e-t),d=1/(n-s),h=1/(o-r),u=(e+t)*c,p=(n+s)*d;let g,_;if(a===Wn)g=(o+r)*h,_=-2*h;else if(a===Wo)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ji=new R,xn=new jt,Np=new R(0,0,0),Op=new R(1,1,1),ni=new R,Hr=new R,tn=new R,Ch=new jt,Rh=new ve;class De{constructor(t=0,e=0,n=0,s=De.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],h=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ch.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ch,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rh.setFromEuler(this),this.setFromQuaternion(Rh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}De.DEFAULT_ORDER="XYZ";class kc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bp=0;const Ph=new R,ts=new ve,Nn=new jt,Vr=new R,Qs=new R,zp=new R,kp=new ve,Lh=new R(1,0,0),Dh=new R(0,1,0),Ih=new R(0,0,1),Uh={type:"added"},Hp={type:"removed"},es={type:"childadded",child:null},Na={type:"childremoved",child:null};class ue extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DEFAULT_UP.clone();const t=new R,e=new De,n=new ve,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new Wt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.multiply(ts),this}rotateOnWorldAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.premultiply(ts),this}rotateX(t){return this.rotateOnAxis(Lh,t)}rotateY(t){return this.rotateOnAxis(Dh,t)}rotateZ(t){return this.rotateOnAxis(Ih,t)}translateOnAxis(t,e){return Ph.copy(t).applyQuaternion(this.quaternion),this.position.add(Ph.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lh,t)}translateY(t){return this.translateOnAxis(Dh,t)}translateZ(t){return this.translateOnAxis(Ih,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Vr.copy(t):Vr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Qs,Vr,this.up):Nn.lookAt(Vr,Qs,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),ts.setFromRotationMatrix(Nn),this.quaternion.premultiply(ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Uh),es.child=t,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hp),Na.child=t,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Uh),es.child=t,this.dispatchEvent(es),es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,zp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,kp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),d=o(t.images),h=o(t.shapes),u=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ue.DEFAULT_UP=new R(0,1,0);ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new R,On=new R,Oa=new R,Bn=new R,ns=new R,is=new R,Fh=new R,Ba=new R,za=new R,ka=new R,Ha=new me,Va=new me,Ga=new me;class Ae{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),On.subVectors(n,e),Oa.subVectors(t,e);const o=vn.dot(vn),a=vn.dot(On),l=vn.dot(Oa),c=On.dot(On),d=On.dot(Oa),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const u=1/h,p=(c*l-a*d)*u,g=(o*d-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ha.setScalar(0),Va.setScalar(0),Ga.setScalar(0),Ha.fromBufferAttribute(t,e),Va.fromBufferAttribute(t,n),Ga.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ha,r.x),o.addScaledVector(Va,r.y),o.addScaledVector(Ga,r.z),o}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),On.subVectors(t,e),vn.cross(On).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),vn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ae.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ae.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ae.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ae.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ae.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ns.subVectors(s,n),is.subVectors(r,n),Ba.subVectors(t,n);const l=ns.dot(Ba),c=is.dot(Ba);if(l<=0&&c<=0)return e.copy(n);za.subVectors(t,s);const d=ns.dot(za),h=is.dot(za);if(d>=0&&h<=d)return e.copy(s);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(n).addScaledVector(ns,o);ka.subVectors(t,r);const p=ns.dot(ka),g=is.dot(ka);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(is,a);const m=d*g-p*h;if(m<=0&&h-d>=0&&p-g>=0)return Fh.subVectors(r,s),a=(h-d)/(h-d+(p-g)),e.copy(s).addScaledVector(Fh,a);const f=1/(m+_+u);return o=_*f,a=u*f,e.copy(n).addScaledVector(ns,o).addScaledVector(is,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function Wa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=bp(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Wa(o,r,t+1/3),this.g=Wa(o,r,t),this.b=Wa(o,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){const n=Sd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return ee.fromWorkingColorSpace(Be.copy(this),t),Math.round(Zt(Be.r*255,0,255))*65536+Math.round(Zt(Be.g*255,0,255))*256+Math.round(Zt(Be.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,s=Be.g,r=Be.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=We){ee.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,s=Be.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(Gr);const n=Aa(ii.h,Gr.h,e),s=Aa(ii.s,Gr.s,e),r=Aa(ii.l,Gr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new kt;kt.NAMES=Sd;let Vp=0;class yi extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=Ls,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Al,this.blendDst=Cl,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Al&&(n.blendSrc=this.blendSrc),this.blendDst!==Cl&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class pn extends yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new De,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new R,Wr=new wt;class Me{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fc,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Wr.fromBufferAttribute(this,e),Wr.applyMatrix3(t),this.setXY(e,Wr.x,Wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ln(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ln(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ln(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ln(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array),r=oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fc&&(t.usage=this.usage),t}}class bd extends Me{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Hc extends Me{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Kt extends Me{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Gp=0;const ln=new jt,Xa=new ue,ss=new R,en=new ye,Js=new ye,Pe=new R;class le extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vd(t)?Hc:bd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return Xa.lookAt(t),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ye);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Js.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(en.min,Js.min),en.expandByPoint(Pe),Pe.addVectors(en.max,Js.max),en.expandByPoint(Pe)):(en.expandByPoint(Js.min),en.expandByPoint(Js.max))}en.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Pe.fromBufferAttribute(a,c),l&&(ss.fromBufferAttribute(t,c),Pe.add(ss)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Me(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new R,l[A]=new R;const c=new R,d=new R,h=new R,u=new wt,p=new wt,g=new wt,_=new R,m=new R;function f(A,S,M){c.fromBufferAttribute(n,A),d.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),u.fromBufferAttribute(r,A),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),d.sub(c),h.sub(c),p.sub(u),g.sub(u);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(P),a[A].add(_),a[S].add(_),a[M].add(_),l[A].add(m),l[S].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let A=0,S=v.length;A<S;++A){const M=v[A],P=M.start,D=M.count;for(let I=P,N=P+D;I<N;I+=3)f(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const x=new R,y=new R,E=new R,b=new R;function w(A){E.fromBufferAttribute(s,A),b.copy(E);const S=a[A];x.copy(S),x.sub(E.multiplyScalar(E.dot(S))).normalize(),y.crossVectors(b,S);const P=y.dot(l[A])<0?-1:1;o.setXYZW(A,x.x,x.y,x.z,P)}for(let A=0,S=v.length;A<S;++A){const M=v[A],P=M.start,D=M.count;for(let I=P,N=P+D;I<N;I+=3)w(t.getX(I+0)),w(t.getX(I+1)),w(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,d=new R,h=new R;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(d),l.add(d),c.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,l){const c=a.array,d=a.itemSize,h=a.normalized,u=new c.constructor(l.length*d);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*d;for(let f=0;f<d;f++)u[g++]=c[p++]}return new Me(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new le,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=t(u,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(e))}const r=t.morphAttributes;for(const c in r){const d=[],h=r[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nh=new jt,wi=new ca,Xr=new Xs,Oh=new R,Yr=new R,qr=new R,Zr=new R,Ya=new R,jr=new R,Bh=new R,$r=new R;class ct extends ue{constructor(t=new le,e=new pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],h=r[l];d!==0&&(Ya.fromBufferAttribute(h,t),o?jr.addScaledVector(Ya,d):jr.addScaledVector(Ya.sub(e),d))}e.add(jr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(r),wi.copy(t.ray).recast(t.near),!(Xr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Xr,Oh)===null||wi.origin.distanceToSquared(Oh)>(t.far-t.near)**2))&&(Nh.copy(r).invert(),wi.copy(t.ray).applyMatrix4(Nh),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,E=x;y<E;y+=3){const b=a.getX(y),w=a.getX(y+1),A=a.getX(y+2);s=Kr(this,f,t,n,c,d,h,b,w,A),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);s=Kr(this,o,t,n,c,d,h,v,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,E=x;y<E;y+=3){const b=y,w=y+1,A=y+2;s=Kr(this,f,t,n,c,d,h,b,w,A),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=m,x=m+1,y=m+2;s=Kr(this,o,t,n,c,d,h,v,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Wp(i,t,e,n,s,r,o,a){let l;if(t.side===ke?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Tn,a),l===null)return null;$r.copy(a),$r.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo($r);return c<e.near||c>e.far?null:{distance:c,point:$r.clone(),object:i}}function Kr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Yr),i.getVertexPosition(l,qr),i.getVertexPosition(c,Zr);const d=Wp(i,t,e,n,Yr,qr,Zr,Bh);if(d){const h=new R;Ae.getBarycoord(Bh,Yr,qr,Zr,h),s&&(d.uv=Ae.getInterpolatedAttribute(s,a,l,c,h,new wt)),r&&(d.uv1=Ae.getInterpolatedAttribute(r,a,l,c,h,new wt)),o&&(d.normal=Ae.getInterpolatedAttribute(o,a,l,c,h,new R),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new R,materialIndex:0};Ae.getNormal(Yr,qr,Zr,u.normal),d.face=u,d.barycoord=h}return d}class Ee extends le{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],h=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(h,2));function g(_,m,f,v,x,y,E,b,w,A,S){const M=y/w,P=E/A,D=y/2,I=E/2,N=b/2,k=w+1,H=A+1;let $=0,W=0;const J=new R;for(let ht=0;ht<H;ht++){const yt=ht*P-I;for(let Dt=0;Dt<k;Dt++){const it=Dt*M-D;J[_]=it*v,J[m]=yt*x,J[f]=N,c.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[f]=b>0?1:-1,d.push(J.x,J.y,J.z),h.push(Dt/w),h.push(1-ht/A),$+=1}}for(let ht=0;ht<A;ht++)for(let yt=0;yt<w;yt++){const Dt=u+yt+k*ht,it=u+yt+k*(ht+1),F=u+(yt+1)+k*(ht+1),V=u+(yt+1)+k*ht;l.push(Dt,it,V),l.push(it,F,V),W+=6}a.addGroup(p,W,S),p+=W,u+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ge(i){const t={};for(let e=0;e<i.length;e++){const n=Vs(i[e]);for(const s in n)t[s]=n[s]}return t}function Xp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ed(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const Yp={clone:Vs,merge:Ge};var qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qp,this.fragmentShader=Zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vs(t.uniforms),this.uniformsGroups=Xp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class wd extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new R,zh=new wt,kh=new wt;class cn extends wd{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=pc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pc*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,zh,kh),e.subVectors(kh,zh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(vr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rs=-90,os=1;class jp extends ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(rs,os,t,e);s.layers=this.layers,this.add(s);const r=new cn(rs,os,t,e);r.layers=this.layers,this.add(r);const o=new cn(rs,os,t,e);o.layers=this.layers,this.add(o);const a=new cn(rs,os,t,e);a.layers=this.layers,this.add(a);const l=new cn(rs,os,t,e);l.layers=this.layers,this.add(l);const c=new cn(rs,os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(h,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Td extends Xe{constructor(t,e,n,s,r,o,a,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:Os,super(t,e,n,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $p extends Wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Td(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ee(5,5,5),r=new _i({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:di});r.uniforms.tEquirect.value=e;const o=new ct(s,r),a=e.minFilter;return e.minFilter===zi&&(e.minFilter=Dn),new jp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class Kp extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new De,this.environmentIntensity=1,this.environmentRotation=new De,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Qp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fc,this.updateRanges=[],this.version=0,this.uuid=pi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ve=new R;class Yo{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ln(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ln(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ln(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ln(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),s=oe(s,this.array),r=oe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Yo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ad extends yi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let as;const tr=new R,ls=new R,cs=new R,hs=new wt,er=new wt,Cd=new jt,Qr=new R,nr=new R,Jr=new R,Hh=new wt,qa=new wt,Vh=new wt;class us extends ue{constructor(t=new Ad){if(super(),this.isSprite=!0,this.type="Sprite",as===void 0){as=new le;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Qp(e,5);as.setIndex([0,1,2,0,2,3]),as.setAttribute("position",new Yo(n,3,0,!1)),as.setAttribute("uv",new Yo(n,2,3,!1))}this.geometry=as,this.material=t,this.center=new wt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ls.setFromMatrixScale(this.matrixWorld),Cd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),cs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ls.multiplyScalar(-cs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;to(Qr.set(-.5,-.5,0),cs,o,ls,s,r),to(nr.set(.5,-.5,0),cs,o,ls,s,r),to(Jr.set(.5,.5,0),cs,o,ls,s,r),Hh.set(0,0),qa.set(1,0),Vh.set(1,1);let a=t.ray.intersectTriangle(Qr,nr,Jr,!1,tr);if(a===null&&(to(nr.set(-.5,.5,0),cs,o,ls,s,r),qa.set(0,1),a=t.ray.intersectTriangle(Qr,Jr,nr,!1,tr),a===null))return;const l=t.ray.origin.distanceTo(tr);l<t.near||l>t.far||e.push({distance:l,point:tr.clone(),uv:Ae.getInterpolation(tr,Qr,nr,Jr,Hh,qa,Vh,new wt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function to(i,t,e,n,s,r){hs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(er.x=r*hs.x-s*hs.y,er.y=s*hs.x+r*hs.y):er.copy(hs),i.copy(t),i.x+=er.x,i.y+=er.y,i.applyMatrix4(Cd)}const Za=new R,Jp=new R,tm=new Wt;class Sn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Za.subVectors(n,e).cross(Jp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Za),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||tm.getNormalMatrix(t),s=this.coplanarPoint(Za).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new Xs,eo=new R;class Vc{constructor(t=new Sn,e=new Sn,n=new Sn,s=new Sn,r=new Sn,o=new Sn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],d=s[5],h=s[6],u=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],v=s[13],x=s[14],y=s[15];if(n[0].setComponents(l-r,u-c,m-p,y-f).normalize(),n[1].setComponents(l+r,u+c,m+p,y+f).normalize(),n[2].setComponents(l+o,u+d,m+g,y+v).normalize(),n[3].setComponents(l-o,u-d,m-g,y-v).normalize(),n[4].setComponents(l-a,u-h,m-_,y-x).normalize(),e===Wn)n[5].setComponents(l+a,u+h,m+_,y+x).normalize();else if(e===Wo)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(eo.x=s.normal.x>0?t.max.x:t.min.x,eo.y=s.normal.y>0?t.max.y:t.min.y,eo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(eo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qn extends yi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const qo=new R,Zo=new R,Gh=new jt,ir=new ca,no=new Xs,ja=new R,Wh=new R;class sn extends ue{constructor(t=new le,e=new qn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)qo.fromBufferAttribute(e,s-1),Zo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=qo.distanceTo(Zo);t.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(s),no.radius+=r,t.ray.intersectsSphere(no)===!1)return;Gh.copy(s).invert(),ir.copy(t.ray).applyMatrix4(Gh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=d.getX(_),v=d.getX(_+1),x=io(this,t,ir,l,f,v);x&&e.push(x)}if(this.isLineLoop){const _=d.getX(g-1),m=d.getX(p),f=io(this,t,ir,l,_,m);f&&e.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=io(this,t,ir,l,_,_+1);f&&e.push(f)}if(this.isLineLoop){const _=io(this,t,ir,l,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function io(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(qo.fromBufferAttribute(o,s),Zo.fromBufferAttribute(o,r),e.distanceSqToSegment(qo,Zo,ja,Wh)>n)return;ja.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ja);if(!(l<t.near||l>t.far))return{distance:l,point:Wh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Xh=new R,Yh=new R;class Bo extends sn{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Xh.fromBufferAttribute(e,s),Yh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Xh.distanceTo(Yh);t.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ki extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}class em extends Xe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rd extends Xe{constructor(t,e,n,s,r,o,a,l,c,d=Ds){if(d!==Ds&&d!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Ds&&(n=Gi),n===void 0&&d===ks&&(n=zs),super(null,s,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Fe extends le{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],h=[],u=[],p=[];let g=0;const _=[],m=n/2;let f=0;v(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new Kt(h,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(p,2));function v(){const y=new R,E=new R;let b=0;const w=(e-t)/n;for(let A=0;A<=r;A++){const S=[],M=A/r,P=M*(e-t)+t;for(let D=0;D<=s;D++){const I=D/s,N=I*l+a,k=Math.sin(N),H=Math.cos(N);E.x=P*k,E.y=-M*n+m,E.z=P*H,h.push(E.x,E.y,E.z),y.set(k,w,H).normalize(),u.push(y.x,y.y,y.z),p.push(I,1-M),S.push(g++)}_.push(S)}for(let A=0;A<s;A++)for(let S=0;S<r;S++){const M=_[S][A],P=_[S+1][A],D=_[S+1][A+1],I=_[S][A+1];(t>0||S!==0)&&(d.push(M,P,I),b+=3),(e>0||S!==r-1)&&(d.push(P,D,I),b+=3)}c.addGroup(f,b,0),f+=b}function x(y){const E=g,b=new wt,w=new R;let A=0;const S=y===!0?t:e,M=y===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,m*M,0),u.push(0,M,0),p.push(.5,.5),g++;const P=g;for(let D=0;D<=s;D++){const N=D/s*l+a,k=Math.cos(N),H=Math.sin(N);w.x=S*H,w.y=m*M,w.z=S*k,h.push(w.x,w.y,w.z),u.push(0,M,0),b.x=k*.5+.5,b.y=H*.5*M+.5,p.push(b.x,b.y),g++}for(let D=0;D<s;D++){const I=E+D,N=P+D;y===!0?d.push(N,N+1,I):d.push(N+1,N,I),A+=3}c.addGroup(f,A,y===!0?1:2),f+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gc extends le{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),d(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new R,y=new R,E=new R;for(let b=0;b<e.length;b+=3)p(e[b+0],x),p(e[b+1],y),p(e[b+2],E),l(x,y,E,v)}function l(v,x,y,E){const b=E+1,w=[];for(let A=0;A<=b;A++){w[A]=[];const S=v.clone().lerp(y,A/b),M=x.clone().lerp(y,A/b),P=b-A;for(let D=0;D<=P;D++)D===0&&A===b?w[A][D]=S:w[A][D]=S.clone().lerp(M,D/P)}for(let A=0;A<b;A++)for(let S=0;S<2*(b-A)-1;S++){const M=Math.floor(S/2);S%2===0?(u(w[A][M+1]),u(w[A+1][M]),u(w[A][M])):(u(w[A][M+1]),u(w[A+1][M+1]),u(w[A+1][M]))}}function c(v){const x=new R;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(v),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function d(){const v=new R;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const y=m(v)/2/Math.PI+.5,E=f(v)/Math.PI+.5;o.push(y,1-E)}g(),h()}function h(){for(let v=0;v<o.length;v+=6){const x=o[v+0],y=o[v+2],E=o[v+4],b=Math.max(x,y,E),w=Math.min(x,y,E);b>.9&&w<.1&&(x<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),E<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function p(v,x){const y=v*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function g(){const v=new R,x=new R,y=new R,E=new R,b=new wt,w=new wt,A=new wt;for(let S=0,M=0;S<r.length;S+=9,M+=6){v.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),b.set(o[M+0],o[M+1]),w.set(o[M+2],o[M+3]),A.set(o[M+4],o[M+5]),E.copy(v).add(x).add(y).divideScalar(3);const P=m(E);_(b,M+0,v,P),_(w,M+2,x,P),_(A,M+4,y,P)}}function _(v,x,y,E){E<0&&v.x===1&&(o[x]=v.x-1),y.x===0&&y.z===0&&(o[x]=E/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gc(t.vertices,t.indices,t.radius,t.details)}}const so=new R,ro=new R,$a=new R,oo=new Ae;class nm extends le{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(vr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],d=["a","b","c"],h=new Array(3),u={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:f}=oo;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),oo.getNormal($a),h[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let v=0;v<3;v++){const x=(v+1)%3,y=h[v],E=h[x],b=oo[d[v]],w=oo[d[x]],A=`${y}_${E}`,S=`${E}_${y}`;S in u&&u[S]?($a.dot(u[S].normal)<=r&&(p.push(b.x,b.y,b.z),p.push(w.x,w.y,w.z)),u[S]=null):A in u||(u[A]={index0:c[v],index1:c[x],normal:$a.clone()})}}for(const g in u)if(u[g]){const{index0:_,index1:m}=u[g];so.fromBufferAttribute(a,_),ro.fromBufferAttribute(a,m),p.push(so.x,so.y,so.z),p.push(ro.x,ro.y,ro.z)}this.setAttribute("position",new Kt(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class As extends Gc{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new As(t.radius,t.detail)}}class Xi extends le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,d=l+1,h=t/a,u=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<d;f++){const v=f*u-o;for(let x=0;x<c;x++){const y=x*h-r;g.push(y,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const x=v+c*f,y=v+c*(f+1),E=v+1+c*(f+1),b=v+1+c*f;p.push(x,y,b),p.push(y,E,b)}this.setIndex(p),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Gs extends le{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new R,u=new R,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const v=[],x=f/n;let y=0;f===0&&o===0?y=.5/e:f===n&&l===Math.PI&&(y=-.5/e);for(let E=0;E<=e;E++){const b=E/e;h.x=-t*Math.cos(s+b*r)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(s+b*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),u.copy(h).normalize(),_.push(u.x,u.y,u.z),m.push(b+y,1-x),v.push(c++)}d.push(v)}for(let f=0;f<n;f++)for(let v=0;v<e;v++){const x=d[f][v+1],y=d[f][v],E=d[f+1][v],b=d[f+1][v+1];(f!==0||o>0)&&p.push(x,y,b),(f!==n-1||l<Math.PI)&&p.push(y,E,b)}this.setIndex(p),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ni extends le{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],d=new R,h=new R,u=new R;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),d.x=t*Math.cos(_),d.y=t*Math.sin(_),u.subVectors(h,d).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,v=(s+1)*p+g;o.push(_,m,v),o.push(m,f,v)}this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ni(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Pd extends yi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new De,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class im extends yi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new kt(16777215),this.specular=new kt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new De,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sm extends yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rm extends yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class om extends qn{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class Ld extends ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class am extends Ld{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ka=new jt,qh=new R,Zh=new R;class lm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vc,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;qh.setFromMatrixPosition(t.matrixWorld),e.position.copy(qh),Zh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zh),e.updateMatrixWorld(),Ka.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ka),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ka)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ha extends wd{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class cm extends lm{constructor(){super(new ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jh extends Ld{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.shadow=new cm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class hm extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}const $h=new jt;class ua{constructor(t,e,n=0,s=1/0){this.ray=new ca(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new kc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return $h.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($h),this}intersectObject(t,e=!0,n=[]){return mc(t,this,n,e),n.sort(Kh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)mc(t[s],this,n,e);return n.sort(Kh),n}}function Kh(i,t){return i.distance-t.distance}function mc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)mc(r[o],t,e,!0)}}class Qh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Jh=new R,ao=new R;class Zn{constructor(t=new R,e=new R){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Jh.subVectors(t,this.start),ao.subVectors(this.end,this.start);const n=ao.dot(ao);let r=ao.dot(Jh)/n;return e&&(r=Zt(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Dd extends Yi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function tu(i,t,e,n){const s=um(n);switch(e){case ud:return i*t;case fd:return i*t;case pd:return i*t*2;case md:return i*t/s.components*s.byteLength;case Nc:return i*t/s.components*s.byteLength;case gd:return i*t*2/s.components*s.byteLength;case Oc:return i*t*2/s.components*s.byteLength;case dd:return i*t*3/s.components*s.byteLength;case En:return i*t*4/s.components*s.byteLength;case Bc:return i*t*4/s.components*s.byteLength;case Io:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fo:case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Hl:case Gl:return Math.max(i,16)*Math.max(t,8)/4;case kl:case Vl:return Math.max(i,8)*Math.max(t,8)/2;case Wl:case Xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Yl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case jl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $l:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case tc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ic:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case sc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case oc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Oo:case ac:case lc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case _d:case cc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case hc:case uc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function um(i){switch(i){case Kn:case ld:return{byteLength:1,components:1};case Tr:case cd:case Dr:return{byteLength:2,components:1};case Uc:case Fc:return{byteLength:2,components:4};case Gi:case Ic:case Gn:return{byteLength:4,components:1};case hd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=aa);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Id(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function dm(i){const t=new WeakMap;function e(a,l){const c=a.array,d=a.usage,h=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const d=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,d);else{h.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<h.length;p++){const g=h[u],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,h[u]=_)}h.length=u+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];i.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var fm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_m=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Tm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Am=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Nm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Om=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ng=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,og=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ag=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ug=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ag=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$g=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Kg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,t_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,n_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,o_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,a_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,l_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,u_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,__=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,v_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,y_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,M_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,S_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,A_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,L_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,I_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,U_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,O_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,H_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,W_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:fm,alphahash_pars_fragment:pm,alphamap_fragment:mm,alphamap_pars_fragment:gm,alphatest_fragment:_m,alphatest_pars_fragment:xm,aomap_fragment:vm,aomap_pars_fragment:ym,batching_pars_vertex:Mm,batching_vertex:Sm,begin_vertex:bm,beginnormal_vertex:Em,bsdfs:wm,iridescence_fragment:Tm,bumpmap_pars_fragment:Am,clipping_planes_fragment:Cm,clipping_planes_pars_fragment:Rm,clipping_planes_pars_vertex:Pm,clipping_planes_vertex:Lm,color_fragment:Dm,color_pars_fragment:Im,color_pars_vertex:Um,color_vertex:Fm,common:Nm,cube_uv_reflection_fragment:Om,defaultnormal_vertex:Bm,displacementmap_pars_vertex:zm,displacementmap_vertex:km,emissivemap_fragment:Hm,emissivemap_pars_fragment:Vm,colorspace_fragment:Gm,colorspace_pars_fragment:Wm,envmap_fragment:Xm,envmap_common_pars_fragment:Ym,envmap_pars_fragment:qm,envmap_pars_vertex:Zm,envmap_physical_pars_fragment:rg,envmap_vertex:jm,fog_vertex:$m,fog_pars_vertex:Km,fog_fragment:Qm,fog_pars_fragment:Jm,gradientmap_pars_fragment:tg,lightmap_pars_fragment:eg,lights_lambert_fragment:ng,lights_lambert_pars_fragment:ig,lights_pars_begin:sg,lights_toon_fragment:og,lights_toon_pars_fragment:ag,lights_phong_fragment:lg,lights_phong_pars_fragment:cg,lights_physical_fragment:hg,lights_physical_pars_fragment:ug,lights_fragment_begin:dg,lights_fragment_maps:fg,lights_fragment_end:pg,logdepthbuf_fragment:mg,logdepthbuf_pars_fragment:gg,logdepthbuf_pars_vertex:_g,logdepthbuf_vertex:xg,map_fragment:vg,map_pars_fragment:yg,map_particle_fragment:Mg,map_particle_pars_fragment:Sg,metalnessmap_fragment:bg,metalnessmap_pars_fragment:Eg,morphinstance_vertex:wg,morphcolor_vertex:Tg,morphnormal_vertex:Ag,morphtarget_pars_vertex:Cg,morphtarget_vertex:Rg,normal_fragment_begin:Pg,normal_fragment_maps:Lg,normal_pars_fragment:Dg,normal_pars_vertex:Ig,normal_vertex:Ug,normalmap_pars_fragment:Fg,clearcoat_normal_fragment_begin:Ng,clearcoat_normal_fragment_maps:Og,clearcoat_pars_fragment:Bg,iridescence_pars_fragment:zg,opaque_fragment:kg,packing:Hg,premultiplied_alpha_fragment:Vg,project_vertex:Gg,dithering_fragment:Wg,dithering_pars_fragment:Xg,roughnessmap_fragment:Yg,roughnessmap_pars_fragment:qg,shadowmap_pars_fragment:Zg,shadowmap_pars_vertex:jg,shadowmap_vertex:$g,shadowmask_pars_fragment:Kg,skinbase_vertex:Qg,skinning_pars_vertex:Jg,skinning_vertex:t_,skinnormal_vertex:e_,specularmap_fragment:n_,specularmap_pars_fragment:i_,tonemapping_fragment:s_,tonemapping_pars_fragment:r_,transmission_fragment:o_,transmission_pars_fragment:a_,uv_pars_fragment:l_,uv_pars_vertex:c_,uv_vertex:h_,worldpos_vertex:u_,background_vert:d_,background_frag:f_,backgroundCube_vert:p_,backgroundCube_frag:m_,cube_vert:g_,cube_frag:__,depth_vert:x_,depth_frag:v_,distanceRGBA_vert:y_,distanceRGBA_frag:M_,equirect_vert:S_,equirect_frag:b_,linedashed_vert:E_,linedashed_frag:w_,meshbasic_vert:T_,meshbasic_frag:A_,meshlambert_vert:C_,meshlambert_frag:R_,meshmatcap_vert:P_,meshmatcap_frag:L_,meshnormal_vert:D_,meshnormal_frag:I_,meshphong_vert:U_,meshphong_frag:F_,meshphysical_vert:N_,meshphysical_frag:O_,meshtoon_vert:B_,meshtoon_frag:z_,points_vert:k_,points_frag:H_,shadow_vert:V_,shadow_frag:G_,sprite_vert:W_,sprite_frag:X_},ft={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Rn={basic:{uniforms:Ge([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Ge([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new kt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Ge([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Ge([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Ge([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new kt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Ge([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Ge([ft.points,ft.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Ge([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Ge([ft.common,ft.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Ge([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Ge([ft.sprite,ft.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Ge([ft.common,ft.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Ge([ft.lights,ft.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Rn.physical={uniforms:Ge([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const lo={r:0,b:0,g:0},Ai=new De,Y_=new jt;function q_(i,t,e,n,s,r,o){const a=new kt(0);let l=r===!0?0:1,c,d,h=null,u=0,p=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function _(x){let y=!1;const E=g(x);E===null?f(a,l):E&&E.isColor&&(f(E,1),y=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,y){const E=g(y);E&&(E.isCubeTexture||E.mapping===la)?(d===void 0&&(d=new ct(new Ee(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Vs(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(b,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Ai.copy(y.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),d.material.uniforms.envMap.value=E,d.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Y_.makeRotationFromEuler(Ai)),d.material.toneMapped=ee.getTransfer(E.colorSpace)!==re,(h!==E||u!==E.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,h=E,u=E.version,p=i.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new ct(new Xi(2,2),new _i({name:"BackgroundMaterial",uniforms:Vs(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ee.getTransfer(E.colorSpace)!==re,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||u!==E.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=E,u=E.version,p=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function f(x,y){x.getRGB(lo,Ed(i)),n.buffers.color.setClear(lo.r,lo.g,lo.b,y,o)}function v(){d!==void 0&&(d.geometry.dispose(),d.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(a,l)},render:_,addToRenderList:m,dispose:v}}function Z_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(M,P,D,I,N){let k=!1;const H=h(I,D,P);r!==H&&(r=H,c(r.object)),k=p(M,I,D,N),k&&g(M,I,D,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,y(M,P,D,I),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function d(M){return i.deleteVertexArray(M)}function h(M,P,D){const I=D.wireframe===!0;let N=n[M.id];N===void 0&&(N={},n[M.id]=N);let k=N[P.id];k===void 0&&(k={},N[P.id]=k);let H=k[I];return H===void 0&&(H=u(l()),k[I]=H),H}function u(M){const P=[],D=[],I=[];for(let N=0;N<e;N++)P[N]=0,D[N]=0,I[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:I,object:M,attributes:{},index:null}}function p(M,P,D,I){const N=r.attributes,k=P.attributes;let H=0;const $=D.getAttributes();for(const W in $)if($[W].location>=0){const ht=N[W];let yt=k[W];if(yt===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),ht===void 0||ht.attribute!==yt||yt&&ht.data!==yt.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function g(M,P,D,I){const N={},k=P.attributes;let H=0;const $=D.getAttributes();for(const W in $)if($[W].location>=0){let ht=k[W];ht===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor));const yt={};yt.attribute=ht,ht&&ht.data&&(yt.data=ht.data),N[W]=yt,H++}r.attributes=N,r.attributesNum=H,r.index=I}function _(){const M=r.newAttributes;for(let P=0,D=M.length;P<D;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){const D=r.newAttributes,I=r.enabledAttributes,N=r.attributeDivisors;D[M]=1,I[M]===0&&(i.enableVertexAttribArray(M),I[M]=1),N[M]!==P&&(i.vertexAttribDivisor(M,P),N[M]=P)}function v(){const M=r.newAttributes,P=r.enabledAttributes;for(let D=0,I=P.length;D<I;D++)P[D]!==M[D]&&(i.disableVertexAttribArray(D),P[D]=0)}function x(M,P,D,I,N,k,H){H===!0?i.vertexAttribIPointer(M,P,D,N,k):i.vertexAttribPointer(M,P,D,I,N,k)}function y(M,P,D,I){_();const N=I.attributes,k=D.getAttributes(),H=P.defaultAttributeValues;for(const $ in k){const W=k[$];if(W.location>=0){let J=N[$];if(J===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),J!==void 0){const ht=J.normalized,yt=J.itemSize,Dt=t.get(J);if(Dt===void 0)continue;const it=Dt.buffer,F=Dt.type,V=Dt.bytesPerElement,K=F===i.INT||F===i.UNSIGNED_INT||J.gpuType===Ic;if(J.isInterleavedBufferAttribute){const Y=J.data,tt=Y.stride,ut=J.offset;if(Y.isInstancedInterleavedBuffer){for(let ot=0;ot<W.locationSize;ot++)f(W.location+ot,Y.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ot=0;ot<W.locationSize;ot++)m(W.location+ot);i.bindBuffer(i.ARRAY_BUFFER,it);for(let ot=0;ot<W.locationSize;ot++)x(W.location+ot,yt/W.locationSize,F,ht,tt*V,(ut+yt/W.locationSize*ot)*V,K)}else{if(J.isInstancedBufferAttribute){for(let Y=0;Y<W.locationSize;Y++)f(W.location+Y,J.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Y=0;Y<W.locationSize;Y++)m(W.location+Y);i.bindBuffer(i.ARRAY_BUFFER,it);for(let Y=0;Y<W.locationSize;Y++)x(W.location+Y,yt/W.locationSize,F,ht,yt*V,yt/W.locationSize*Y*V,K)}}else if(H!==void 0){const ht=H[$];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(W.location,ht);break;case 3:i.vertexAttrib3fv(W.location,ht);break;case 4:i.vertexAttrib4fv(W.location,ht);break;default:i.vertexAttrib1fv(W.location,ht)}}}}v()}function E(){A();for(const M in n){const P=n[M];for(const D in P){const I=P[D];for(const N in I)d(I[N].object),delete I[N];delete P[D]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const D in P){const I=P[D];for(const N in I)d(I[N].object),delete I[N];delete P[D]}delete n[M.id]}function w(M){for(const P in n){const D=n[P];if(D[M.id]===void 0)continue;const I=D[M.id];for(const N in I)d(I[N].object),delete I[N];delete D[M.id]}}function A(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function j_(i,t,e){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),e.update(d,n,1)}function o(c,d,h){h!==0&&(i.drawArraysInstanced(n,c,d,h),e.update(d,n,h))}function a(c,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let p=0;for(let g=0;g<h;g++)p+=d[g];e.update(p,n,1)}function l(c,d,h,u){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],d[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,u,0,h);let g=0;for(let _=0;_<h;_++)g+=d[_]*u[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==En&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const A=w===Dr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Kn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Gn&&!A)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:E,maxSamples:b}}function K_(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Sn,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||n!==0||s;return s=u,n=h.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){e=d(h,u,0)},this.setState=function(h,u,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?d(null):c();else{const v=r?0:n,x=v*4;let y=f.clippingState||null;l.value=y,y=d(g,u,x,p);for(let E=0;E!==x;++E)y[E]=e[E];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,u,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,y=p;x!==_;++x,y+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Q_(i){let t=new WeakMap;function e(o,a){return a===Nl?o.mapping=Os:a===Ol&&(o.mapping=Bs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Nl||a===Ol)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new $p(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Cs=4,eu=[.125,.215,.35,.446,.526,.582],Oi=20,Qa=new ha,nu=new kt;let Ja=null,tl=0,el=0,nl=!1;const Ii=(1+Math.sqrt(5))/2,ds=1/Ii,iu=[new R(-Ii,ds,0),new R(Ii,ds,0),new R(-ds,0,Ii),new R(ds,0,Ii),new R(0,Ii,-ds),new R(0,Ii,ds),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class su{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ja=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ja,tl,el),this._renderer.xr.enabled=nl,t.scissorTest=!1,co(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Os||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ja=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Dr,format:En,colorSpace:Hs,depthBuffer:!1},s=ru(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ru(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=J_(r)),this._blurMaterial=t0(r,t,e)}return s}_compileMaterial(t){const e=new ct(this._lodPlanes[0],t);this._renderer.compile(e,Qa)}_sceneToCubeUV(t,e,n,s){const a=new cn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(nu),d.toneMapping=fi,d.autoClear=!1;const p=new pn({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),g=new ct(new Ee,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(nu),_=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const x=this._cubeSize;co(s,v*x,f>2?x:0,x,x),d.setRenderTarget(s),_&&d.render(g,a),d.render(t,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Os||t.mapping===Bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=au()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ou());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ct(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;co(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Qa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=iu[(s-r-1)%iu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new ct(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Oi-1),_=r/g,m=isFinite(r)?1+Math.floor(d*_):Oi;m>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);const f=[];let v=0;for(let w=0;w<Oi;++w){const A=w/_,S=Math.exp(-A*A/2);f.push(S),w===0?v+=S:w<m&&(v+=2*S)}for(let w=0;w<f.length;w++)f[w]=f[w]/v;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;const y=this._sizeLods[s],E=3*y*(s>x-Cs?s-x+Cs:0),b=4*(this._cubeSize-y);co(e,E,b,3*y,2*y),l.setRenderTarget(e),l.render(h,Qa)}}function J_(i){const t=[],e=[],n=[];let s=i;const r=i-Cs+1+eu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Cs?l=eu[o-i+Cs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,g=6,_=3,m=2,f=1,v=new Float32Array(_*g*p),x=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let b=0;b<p;b++){const w=b%3*2/3-1,A=b>2?0:-1,S=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];v.set(S,_*g*b),x.set(u,m*g*b);const M=[b,b,b,b,b,b];y.set(M,f*g*b)}const E=new le;E.setAttribute("position",new Me(v,_)),E.setAttribute("uv",new Me(x,m)),E.setAttribute("faceIndex",new Me(y,f)),t.push(E),s>Cs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ru(i,t,e){const n=new Wi(i,t,e);return n.texture.mapping=la,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function co(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function t0(i,t,e){const n=new Float32Array(Oi),s=new R(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function ou(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function au(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function e0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Nl||l===Ol,d=l===Os||l===Bs;if(c||d){let h=t.get(a);const u=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new su(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&s(p)?(e===null&&(e=new su(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function n0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ws("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function i0(i,t,e,n){const s={},r=new WeakMap;function o(h){const u=h.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(h,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(h){const u=h.attributes;for(const p in u)t.update(u[p],i.ARRAY_BUFFER)}function c(h){const u=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let x=0,y=v.length;x<y;x+=3){const E=v[x+0],b=v[x+1],w=v[x+2];u.push(E,b,b,w,w,E)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const E=x+0,b=x+1,w=x+2;u.push(E,b,b,w,w,E)}}else return;const m=new(vd(u)?Hc:bd)(u,1);m.version=_;const f=r.get(h);f&&t.remove(f),r.set(h,m)}function d(h){const u=r.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function s0(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,p){i.drawElements(n,p,r,u*o),e.update(p,n,1)}function c(u,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,u*o,g),e.update(p,n,g))}function d(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function h(u,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,_,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*_[v];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function r0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function o0(i,t,e){const n=new WeakMap,s=new me;function r(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(a);if(u===void 0||u.count!==h){let S=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let y=a.attributes.position.count*x,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const b=new Float32Array(y*E*4*h),w=new Md(b,y,E,h);w.type=Gn,w.needsUpdate=!0;const A=x*4;for(let M=0;M<h;M++){const P=m[M],D=f[M],I=v[M],N=y*E*4*M;for(let k=0;k<P.count;k++){const H=k*A;p===!0&&(s.fromBufferAttribute(P,k),b[N+H+0]=s.x,b[N+H+1]=s.y,b[N+H+2]=s.z,b[N+H+3]=0),g===!0&&(s.fromBufferAttribute(D,k),b[N+H+4]=s.x,b[N+H+5]=s.y,b[N+H+6]=s.z,b[N+H+7]=0),_===!0&&(s.fromBufferAttribute(I,k),b[N+H+8]=s.x,b[N+H+9]=s.y,b[N+H+10]=s.z,b[N+H+11]=I.itemSize===4?s.w:1)}}u={count:h,texture:w,size:new wt(y,E)},n.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function a0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,h=t.get(l,d);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Ud=new Xe,lu=new Rd(1,1),Fd=new Md,Nd=new Up,Od=new Td,cu=[],hu=[],uu=new Float32Array(16),du=new Float32Array(9),fu=new Float32Array(4);function Ys(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=cu[s];if(r===void 0&&(r=new Float32Array(s),cu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function da(i,t){let e=hu[t];e===void 0&&(e=new Int32Array(t),hu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function l0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function c0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function h0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function u0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function d0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;fu.set(n),i.uniformMatrix2fv(this.addr,!1,fu),Re(e,n)}}function f0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;du.set(n),i.uniformMatrix3fv(this.addr,!1,du),Re(e,n)}}function p0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,n))return;uu.set(n),i.uniformMatrix4fv(this.addr,!1,uu),Re(e,n)}}function m0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function g0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function _0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function x0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function v0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function y0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function M0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function S0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function b0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lu.compareFunction=xd,r=lu):r=Ud,e.setTexture2D(t||r,s)}function E0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Nd,s)}function w0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Od,s)}function T0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Fd,s)}function A0(i){switch(i){case 5126:return l0;case 35664:return c0;case 35665:return h0;case 35666:return u0;case 35674:return d0;case 35675:return f0;case 35676:return p0;case 5124:case 35670:return m0;case 35667:case 35671:return g0;case 35668:case 35672:return _0;case 35669:case 35673:return x0;case 5125:return v0;case 36294:return y0;case 36295:return M0;case 36296:return S0;case 35678:case 36198:case 36298:case 36306:case 35682:return b0;case 35679:case 36299:case 36307:return E0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return T0}}function C0(i,t){i.uniform1fv(this.addr,t)}function R0(i,t){const e=Ys(t,this.size,2);i.uniform2fv(this.addr,e)}function P0(i,t){const e=Ys(t,this.size,3);i.uniform3fv(this.addr,e)}function L0(i,t){const e=Ys(t,this.size,4);i.uniform4fv(this.addr,e)}function D0(i,t){const e=Ys(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function I0(i,t){const e=Ys(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function U0(i,t){const e=Ys(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function F0(i,t){i.uniform1iv(this.addr,t)}function N0(i,t){i.uniform2iv(this.addr,t)}function O0(i,t){i.uniform3iv(this.addr,t)}function B0(i,t){i.uniform4iv(this.addr,t)}function z0(i,t){i.uniform1uiv(this.addr,t)}function k0(i,t){i.uniform2uiv(this.addr,t)}function H0(i,t){i.uniform3uiv(this.addr,t)}function V0(i,t){i.uniform4uiv(this.addr,t)}function G0(i,t,e){const n=this.cache,s=t.length,r=da(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ud,r[o])}function W0(i,t,e){const n=this.cache,s=t.length,r=da(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Nd,r[o])}function X0(i,t,e){const n=this.cache,s=t.length,r=da(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Od,r[o])}function Y0(i,t,e){const n=this.cache,s=t.length,r=da(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Fd,r[o])}function q0(i){switch(i){case 5126:return C0;case 35664:return R0;case 35665:return P0;case 35666:return L0;case 35674:return D0;case 35675:return I0;case 35676:return U0;case 5124:case 35670:return F0;case 35667:case 35671:return N0;case 35668:case 35672:return O0;case 35669:case 35673:return B0;case 5125:return z0;case 36294:return k0;case 36295:return H0;case 36296:return V0;case 35678:case 36198:case 36298:case 36306:case 35682:return G0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return Y0}}class Z0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=A0(e.type)}}class j0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=q0(e.type)}}class $0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const il=/(\w+)(\])?(\[|\.)?/g;function pu(i,t){i.seq.push(t),i.map[t.id]=t}function K0(i,t,e){const n=i.name,s=n.length;for(il.lastIndex=0;;){const r=il.exec(n),o=il.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){pu(e,c===void 0?new Z0(a,i,t):new j0(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new $0(a),pu(e,h)),e=h}}}class zo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);K0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function mu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Q0=37297;let J0=0;function tx(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const gu=new Wt;function ex(i){ee._getMatrix(gu,ee.workingColorSpace,i);const t=`mat3( ${gu.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case Go:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function _u(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+tx(i.getShaderSource(t),o)}else return s}function nx(i,t){const e=ex(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ix(i,t){let e;switch(t){case sp:e="Linear";break;case rp:e="Reinhard";break;case op:e="Cineon";break;case ap:e="ACESFilmic";break;case cp:e="AgX";break;case hp:e="Neutral";break;case lp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ho=new R;function sx(){ee.getLuminanceCoefficients(ho);const i=ho.x.toFixed(4),t=ho.y.toFixed(4),e=ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function ox(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ax(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function fr(i){return i!==""}function xu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lx=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(i){return i.replace(lx,hx)}const cx=new Map;function hx(i,t){let e=Yt[t];if(e===void 0){const n=cx.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return gc(e)}const ux=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yu(i){return i.replace(ux,dx)}function dx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function fx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===od?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Of?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function px(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Os:case Bs:t="ENVMAP_TYPE_CUBE";break;case la:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bs:t="ENVMAP_MODE_REFRACTION";break}return t}function gx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dc:t="ENVMAP_BLENDING_MULTIPLY";break;case np:t="ENVMAP_BLENDING_MIX";break;case ip:t="ENVMAP_BLENDING_ADD";break}return t}function _x(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function xx(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=fx(e),c=px(e),d=mx(e),h=gx(e),u=_x(e),p=rx(e),g=ox(r),_=s.createProgram();let m,f,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fr).join(`
`),f.length>0&&(f+=`
`)):(m=[Mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),f=[Mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==fi?ix("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,nx("linearToOutputTexel",e.outputColorSpace),sx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fr).join(`
`)),o=gc(o),o=xu(o,e),o=vu(o,e),a=gc(a),a=xu(a,e),a=vu(a,e),o=yu(o),a=yu(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=v+m+o,y=v+f+a,E=mu(s,s.VERTEX_SHADER,x),b=mu(s,s.FRAGMENT_SHADER,y);s.attachShader(_,E),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(P){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(_).trim(),I=s.getShaderInfoLog(E).trim(),N=s.getShaderInfoLog(b).trim();let k=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,b);else{const $=_u(s,E,"vertex"),W=_u(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+$+`
`+W)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(I===""||N==="")&&(H=!1);H&&(P.diagnostics={runnable:k,programLog:D,vertexShader:{log:I,prefix:m},fragmentShader:{log:N,prefix:f}})}s.deleteShader(E),s.deleteShader(b),A=new zo(s,_),S=ax(s,_)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Q0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=J0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=b,this}let vx=0;class yx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Mx(t),e.set(t,n)),n}}class Mx{constructor(t){this.id=vx++,this.code=t,this.usedTimes=0}}function Sx(i,t,e,n,s,r,o){const a=new kc,l=new yx,c=new Set,d=[],h=s.logarithmicDepthBuffer,u=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,P,D,I){const N=D.fog,k=I.geometry,H=S.isMeshStandardMaterial?D.environment:null,$=(S.isMeshStandardMaterial?e:t).get(S.envMap||H),W=$&&$.mapping===la?$.image.height:null,J=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ht=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,yt=ht!==void 0?ht.length:0;let Dt=0;k.morphAttributes.position!==void 0&&(Dt=1),k.morphAttributes.normal!==void 0&&(Dt=2),k.morphAttributes.color!==void 0&&(Dt=3);let it,F,V,K;if(J){const se=Rn[J];it=se.vertexShader,F=se.fragmentShader}else it=S.vertexShader,F=S.fragmentShader,l.update(S),V=l.getVertexShaderID(S),K=l.getFragmentShaderID(S);const Y=i.getRenderTarget(),tt=i.state.buffers.depth.getReversed(),ut=I.isInstancedMesh===!0,ot=I.isBatchedMesh===!0,Rt=!!S.map,Mt=!!S.matcap,Ot=!!$,U=!!S.aoMap,Ht=!!S.lightMap,Ct=!!S.bumpMap,Ft=!!S.normalMap,lt=!!S.displacementMap,Nt=!!S.emissiveMap,At=!!S.metalnessMap,L=!!S.roughnessMap,T=S.anisotropy>0,G=S.clearcoat>0,Q=S.dispersion>0,et=S.iridescence>0,j=S.sheen>0,st=S.transmission>0,dt=T&&!!S.anisotropyMap,St=G&&!!S.clearcoatMap,Qt=G&&!!S.clearcoatNormalMap,at=G&&!!S.clearcoatRoughnessMap,bt=et&&!!S.iridescenceMap,Ut=et&&!!S.iridescenceThicknessMap,Bt=j&&!!S.sheenColorMap,Et=j&&!!S.sheenRoughnessMap,$t=!!S.specularMap,Xt=!!S.specularColorMap,he=!!S.specularIntensityMap,O=st&&!!S.transmissionMap,mt=st&&!!S.thicknessMap,Z=!!S.gradientMap,nt=!!S.alphaMap,xt=S.alphaTest>0,_t=!!S.alphaHash,Gt=!!S.extensions;let ge=fi;S.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ge=i.toneMapping);const Ne={shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:it,fragmentShader:F,defines:S.defines,customVertexShaderID:V,customFragmentShaderID:K,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:ot,batchingColor:ot&&I._colorsTexture!==null,instancing:ut,instancingColor:ut&&I.instanceColor!==null,instancingMorph:ut&&I.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Hs,alphaToCoverage:!!S.alphaToCoverage,map:Rt,matcap:Mt,envMap:Ot,envMapMode:Ot&&$.mapping,envMapCubeUVHeight:W,aoMap:U,lightMap:Ht,bumpMap:Ct,normalMap:Ft,displacementMap:u&&lt,emissiveMap:Nt,normalMapObjectSpace:Ft&&S.normalMapType===pp,normalMapTangentSpace:Ft&&S.normalMapType===zc,metalnessMap:At,roughnessMap:L,anisotropy:T,anisotropyMap:dt,clearcoat:G,clearcoatMap:St,clearcoatNormalMap:Qt,clearcoatRoughnessMap:at,dispersion:Q,iridescence:et,iridescenceMap:bt,iridescenceThicknessMap:Ut,sheen:j,sheenColorMap:Bt,sheenRoughnessMap:Et,specularMap:$t,specularColorMap:Xt,specularIntensityMap:he,transmission:st,transmissionMap:O,thicknessMap:mt,gradientMap:Z,opaque:S.transparent===!1&&S.blending===Ls&&S.alphaToCoverage===!1,alphaMap:nt,alphaTest:xt,alphaHash:_t,combine:S.combine,mapUv:Rt&&_(S.map.channel),aoMapUv:U&&_(S.aoMap.channel),lightMapUv:Ht&&_(S.lightMap.channel),bumpMapUv:Ct&&_(S.bumpMap.channel),normalMapUv:Ft&&_(S.normalMap.channel),displacementMapUv:lt&&_(S.displacementMap.channel),emissiveMapUv:Nt&&_(S.emissiveMap.channel),metalnessMapUv:At&&_(S.metalnessMap.channel),roughnessMapUv:L&&_(S.roughnessMap.channel),anisotropyMapUv:dt&&_(S.anisotropyMap.channel),clearcoatMapUv:St&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Et&&_(S.sheenRoughnessMap.channel),specularMapUv:$t&&_(S.specularMap.channel),specularColorMapUv:Xt&&_(S.specularColorMap.channel),specularIntensityMapUv:he&&_(S.specularIntensityMap.channel),transmissionMapUv:O&&_(S.transmissionMap.channel),thicknessMapUv:mt&&_(S.thicknessMap.channel),alphaMapUv:nt&&_(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ft||T),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(Rt||nt),fog:!!N,useFog:S.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:tt,skinning:I.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Dt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ge,decodeVideoTexture:Rt&&S.map.isVideoTexture===!0&&ee.getTransfer(S.map.colorSpace)===re,decodeVideoTextureEmissive:Nt&&S.emissiveMap.isVideoTexture===!0&&ee.getTransfer(S.emissiveMap.colorSpace)===re,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ie,flipSided:S.side===ke,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Gt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&S.extensions.multiDraw===!0||ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function f(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(v(M,S),x(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function v(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const M=g[S.type];let P;if(M){const D=Rn[M];P=Yp.clone(D.uniforms)}else P=S.uniforms;return P}function E(S,M){let P;for(let D=0,I=d.length;D<I;D++){const N=d[D];if(N.cacheKey===M){P=N,++P.usedTimes;break}}return P===void 0&&(P=new xx(i,M,S,r),d.push(P)),P}function b(S){if(--S.usedTimes===0){const M=d.indexOf(S);d[M]=d[d.length-1],d.pop(),S.destroy()}}function w(S){l.remove(S)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:E,releaseProgram:b,releaseShaderCache:w,programs:d,dispose:A}}function bx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ex(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Su(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,u,p,g,_,m){let f=i[t];return f===void 0?(f={id:h.id,object:h,geometry:u,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=f):(f.id=h.id,f.object=h,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),t++,f}function a(h,u,p,g,_,m){const f=o(h,u,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(h,u,p,g,_,m){const f=o(h,u,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(h,u){e.length>1&&e.sort(h||Ex),n.length>1&&n.sort(u||Su),s.length>1&&s.sort(u||Su)}function d(){for(let h=t,u=i.length;h<u;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:d,sort:c}}function wx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new bu,i.set(n,[o])):s>=r.length?(o=new bu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Tx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new kt};break;case"SpotLight":e={position:new R,direction:new R,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Ax(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Cx=0;function Rx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Px(i){const t=new Tx,e=Ax(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const s=new R,r=new jt,o=new jt;function a(c){let d=0,h=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,v=0,x=0,y=0,E=0,b=0,w=0;c.sort(Rx);for(let S=0,M=c.length;S<M;S++){const P=c[S],D=P.color,I=P.intensity,N=P.distance,k=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=D.r*I,h+=D.g*I,u+=D.b*I;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],I);w++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,W=e.get(P);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=k,n.directionalShadowMatrix[p]=P.shadow.matrix,v++}n.directional[p]=H,p++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(D).multiplyScalar(I),H.distance=N,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[_]=H;const $=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,$.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[_]=$.matrix,P.castShadow){const W=e.get(P);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=k,y++}_++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(D).multiplyScalar(I),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=H,m++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const $=P.shadow,W=e.get(P);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=H,g++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(I),H.groundColor.copy(P.groundColor).multiplyScalar(I),n.hemi[f]=H,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const A=n.hash;(A.directionalLength!==p||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==f||A.numDirectionalShadows!==v||A.numPointShadows!==x||A.numSpotShadows!==y||A.numSpotMaps!==E||A.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+E-b,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,A.directionalLength=p,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=f,A.numDirectionalShadows=v,A.numPointShadows=x,A.numSpotShadows=y,A.numSpotMaps=E,A.numLightProbes=w,n.version=Cx++)}function l(c,d){let h=0,u=0,p=0,g=0,_=0;const m=d.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const x=c[f];if(x.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(x.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),u++}else if(x.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Eu(i){const t=new Px(i),e=[],n=[];function s(d){c.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function o(d){n.push(d)}function a(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Lx(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Eu(i),t.set(s,[a])):r>=o.length?(a=new Eu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ix=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ux(i,t,e){let n=new Vc;const s=new wt,r=new wt,o=new me,a=new sm({depthPacking:fp}),l=new rm,c={},d=e.maxTextureSize,h={[Tn]:ke,[ke]:Tn,[Ie]:Ie},u=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:Dx,fragmentShader:Ix}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new le;g.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ct(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=od;let f=this.type;this.render=function(b,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(di),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const I=f!==zn&&this.type===zn,N=f===zn&&this.type!==zn;for(let k=0,H=b.length;k<H;k++){const $=b[k],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const J=W.getFrameExtents();if(s.multiply(J),r.copy(W.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/J.x),s.x=r.x*J.x,W.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/J.y),s.y=r.y*J.y,W.mapSize.y=r.y)),W.map===null||I===!0||N===!0){const yt=this.type!==zn?{minFilter:wn,magFilter:wn}:{};W.map!==null&&W.map.dispose(),W.map=new Wi(s.x,s.y,yt),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const ht=W.getViewportCount();for(let yt=0;yt<ht;yt++){const Dt=W.getViewport(yt);o.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),D.viewport(o),W.updateMatrices($,yt),n=W.getFrustum(),y(w,A,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===zn&&v(W,A),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,P)};function v(b,w){const A=t.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Wi(s.x,s.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,A,u,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,A,p,_,null)}function x(b,w,A,S){let M=null;const P=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)M=P;else if(M=A.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const D=M.uuid,I=w.uuid;let N=c[D];N===void 0&&(N={},c[D]=N);let k=N[I];k===void 0&&(k=M.clone(),N[I]=k,w.addEventListener("dispose",E)),M=k}if(M.visible=w.visible,M.wireframe=w.wireframe,S===zn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=i.properties.get(M);D.light=A}return M}function y(b,w,A,S,M){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===zn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const I=t.update(b),N=b.material;if(Array.isArray(N)){const k=I.groups;for(let H=0,$=k.length;H<$;H++){const W=k[H],J=N[W.materialIndex];if(J&&J.visible){const ht=x(b,J,S,M);b.onBeforeShadow(i,b,w,A,I,ht,W),i.renderBufferDirect(A,null,I,ht,b,W),b.onAfterShadow(i,b,w,A,I,ht,W)}}}else if(N.visible){const k=x(b,N,S,M);b.onBeforeShadow(i,b,w,A,I,k,null),i.renderBufferDirect(A,null,I,k,b,null),b.onAfterShadow(i,b,w,A,I,k,null)}}const D=b.children;for(let I=0,N=D.length;I<N;I++)y(D[I],w,A,S,M)}function E(b){b.target.removeEventListener("dispose",E);for(const A in c){const S=c[A],M=b.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Fx={[Rl]:Pl,[Ll]:Ul,[Dl]:Fl,[Ns]:Il,[Pl]:Rl,[Ul]:Ll,[Fl]:Dl,[Il]:Ns};function Nx(i,t){function e(){let O=!1;const mt=new me;let Z=null;const nt=new me(0,0,0,0);return{setMask:function(xt){Z!==xt&&!O&&(i.colorMask(xt,xt,xt,xt),Z=xt)},setLocked:function(xt){O=xt},setClear:function(xt,_t,Gt,ge,Ne){Ne===!0&&(xt*=ge,_t*=ge,Gt*=ge),mt.set(xt,_t,Gt,ge),nt.equals(mt)===!1&&(i.clearColor(xt,_t,Gt,ge),nt.copy(mt))},reset:function(){O=!1,Z=null,nt.set(-1,0,0,0)}}}function n(){let O=!1,mt=!1,Z=null,nt=null,xt=null;return{setReversed:function(_t){if(mt!==_t){const Gt=t.get("EXT_clip_control");mt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);const ge=xt;xt=null,this.setClear(ge)}mt=_t},getReversed:function(){return mt},setTest:function(_t){_t?Y(i.DEPTH_TEST):tt(i.DEPTH_TEST)},setMask:function(_t){Z!==_t&&!O&&(i.depthMask(_t),Z=_t)},setFunc:function(_t){if(mt&&(_t=Fx[_t]),nt!==_t){switch(_t){case Rl:i.depthFunc(i.NEVER);break;case Pl:i.depthFunc(i.ALWAYS);break;case Ll:i.depthFunc(i.LESS);break;case Ns:i.depthFunc(i.LEQUAL);break;case Dl:i.depthFunc(i.EQUAL);break;case Il:i.depthFunc(i.GEQUAL);break;case Ul:i.depthFunc(i.GREATER);break;case Fl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=_t}},setLocked:function(_t){O=_t},setClear:function(_t){xt!==_t&&(mt&&(_t=1-_t),i.clearDepth(_t),xt=_t)},reset:function(){O=!1,Z=null,nt=null,xt=null,mt=!1}}}function s(){let O=!1,mt=null,Z=null,nt=null,xt=null,_t=null,Gt=null,ge=null,Ne=null;return{setTest:function(se){O||(se?Y(i.STENCIL_TEST):tt(i.STENCIL_TEST))},setMask:function(se){mt!==se&&!O&&(i.stencilMask(se),mt=se)},setFunc:function(se,mn,In){(Z!==se||nt!==mn||xt!==In)&&(i.stencilFunc(se,mn,In),Z=se,nt=mn,xt=In)},setOp:function(se,mn,In){(_t!==se||Gt!==mn||ge!==In)&&(i.stencilOp(se,mn,In),_t=se,Gt=mn,ge=In)},setLocked:function(se){O=se},setClear:function(se){Ne!==se&&(i.clearStencil(se),Ne=se)},reset:function(){O=!1,mt=null,Z=null,nt=null,xt=null,_t=null,Gt=null,ge=null,Ne=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let d={},h={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,x=null,y=null,E=null,b=null,w=new kt(0,0,0),A=0,S=!1,M=null,P=null,D=null,I=null,N=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=$>=2);let J=null,ht={};const yt=i.getParameter(i.SCISSOR_BOX),Dt=i.getParameter(i.VIEWPORT),it=new me().fromArray(yt),F=new me().fromArray(Dt);function V(O,mt,Z,nt){const xt=new Uint8Array(4),_t=i.createTexture();i.bindTexture(O,_t),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<Z;Gt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(mt+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return _t}const K={};K[i.TEXTURE_2D]=V(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=V(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=V(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=V(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(i.DEPTH_TEST),o.setFunc(Ns),Ct(!1),Ft(vh),Y(i.CULL_FACE),U(di);function Y(O){d[O]!==!0&&(i.enable(O),d[O]=!0)}function tt(O){d[O]!==!1&&(i.disable(O),d[O]=!1)}function ut(O,mt){return h[O]!==mt?(i.bindFramebuffer(O,mt),h[O]=mt,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=mt),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function ot(O,mt){let Z=p,nt=!1;if(O){Z=u.get(mt),Z===void 0&&(Z=[],u.set(mt,Z));const xt=O.textures;if(Z.length!==xt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,Gt=xt.length;_t<Gt;_t++)Z[_t]=i.COLOR_ATTACHMENT0+_t;Z.length=xt.length,nt=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,nt=!0);nt&&i.drawBuffers(Z)}function Rt(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const Mt={[Fi]:i.FUNC_ADD,[zf]:i.FUNC_SUBTRACT,[kf]:i.FUNC_REVERSE_SUBTRACT};Mt[Hf]=i.MIN,Mt[Vf]=i.MAX;const Ot={[Gf]:i.ZERO,[Wf]:i.ONE,[Xf]:i.SRC_COLOR,[Al]:i.SRC_ALPHA,[Kf]:i.SRC_ALPHA_SATURATE,[jf]:i.DST_COLOR,[qf]:i.DST_ALPHA,[Yf]:i.ONE_MINUS_SRC_COLOR,[Cl]:i.ONE_MINUS_SRC_ALPHA,[$f]:i.ONE_MINUS_DST_COLOR,[Zf]:i.ONE_MINUS_DST_ALPHA,[Qf]:i.CONSTANT_COLOR,[Jf]:i.ONE_MINUS_CONSTANT_COLOR,[tp]:i.CONSTANT_ALPHA,[ep]:i.ONE_MINUS_CONSTANT_ALPHA};function U(O,mt,Z,nt,xt,_t,Gt,ge,Ne,se){if(O===di){_===!0&&(tt(i.BLEND),_=!1);return}if(_===!1&&(Y(i.BLEND),_=!0),O!==Bf){if(O!==m||se!==S){if((f!==Fi||y!==Fi)&&(i.blendEquation(i.FUNC_ADD),f=Fi,y=Fi),se)switch(O){case Ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yh:i.blendFunc(i.ONE,i.ONE);break;case Mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,x=null,E=null,b=null,w.set(0,0,0),A=0,m=O,S=se}return}xt=xt||mt,_t=_t||Z,Gt=Gt||nt,(mt!==f||xt!==y)&&(i.blendEquationSeparate(Mt[mt],Mt[xt]),f=mt,y=xt),(Z!==v||nt!==x||_t!==E||Gt!==b)&&(i.blendFuncSeparate(Ot[Z],Ot[nt],Ot[_t],Ot[Gt]),v=Z,x=nt,E=_t,b=Gt),(ge.equals(w)===!1||Ne!==A)&&(i.blendColor(ge.r,ge.g,ge.b,Ne),w.copy(ge),A=Ne),m=O,S=!1}function Ht(O,mt){O.side===Ie?tt(i.CULL_FACE):Y(i.CULL_FACE);let Z=O.side===ke;mt&&(Z=!Z),Ct(Z),O.blending===Ls&&O.transparent===!1?U(di):U(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const nt=O.stencilWrite;a.setTest(nt),nt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Nt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(O){M!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),M=O)}function Ft(O){O!==Ff?(Y(i.CULL_FACE),O!==P&&(O===vh?i.cullFace(i.BACK):O===Nf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):tt(i.CULL_FACE),P=O}function lt(O){O!==D&&(H&&i.lineWidth(O),D=O)}function Nt(O,mt,Z){O?(Y(i.POLYGON_OFFSET_FILL),(I!==mt||N!==Z)&&(i.polygonOffset(mt,Z),I=mt,N=Z)):tt(i.POLYGON_OFFSET_FILL)}function At(O){O?Y(i.SCISSOR_TEST):tt(i.SCISSOR_TEST)}function L(O){O===void 0&&(O=i.TEXTURE0+k-1),J!==O&&(i.activeTexture(O),J=O)}function T(O,mt,Z){Z===void 0&&(J===null?Z=i.TEXTURE0+k-1:Z=J);let nt=ht[Z];nt===void 0&&(nt={type:void 0,texture:void 0},ht[Z]=nt),(nt.type!==O||nt.texture!==mt)&&(J!==Z&&(i.activeTexture(Z),J=Z),i.bindTexture(O,mt||K[O]),nt.type=O,nt.texture=mt)}function G(){const O=ht[J];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function St(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Qt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ut(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Bt(O){it.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),it.copy(O))}function Et(O){F.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),F.copy(O))}function $t(O,mt){let Z=c.get(mt);Z===void 0&&(Z=new WeakMap,c.set(mt,Z));let nt=Z.get(O);nt===void 0&&(nt=i.getUniformBlockIndex(mt,O.name),Z.set(O,nt))}function Xt(O,mt){const nt=c.get(mt).get(O);l.get(mt)!==nt&&(i.uniformBlockBinding(mt,nt,O.__bindingPointIndex),l.set(mt,nt))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},J=null,ht={},h={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,x=null,y=null,E=null,b=null,w=new kt(0,0,0),A=0,S=!1,M=null,P=null,D=null,I=null,N=null,it.set(0,0,i.canvas.width,i.canvas.height),F.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Y,disable:tt,bindFramebuffer:ut,drawBuffers:ot,useProgram:Rt,setBlending:U,setMaterial:Ht,setFlipSided:Ct,setCullFace:Ft,setLineWidth:lt,setPolygonOffset:Nt,setScissorTest:At,activeTexture:L,bindTexture:T,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:et,texImage2D:bt,texImage3D:Ut,updateUBOMapping:$t,uniformBlockBinding:Xt,texStorage2D:Qt,texStorage3D:at,texSubImage2D:j,texSubImage3D:st,compressedTexSubImage2D:dt,compressedTexSubImage3D:St,scissor:Bt,viewport:Et,reset:he}}function Ox(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new wt,d=new WeakMap;let h;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,T){return p?new OffscreenCanvas(L,T):Xo("canvas")}function _(L,T,G){let Q=1;const et=At(L);if((et.width>G||et.height>G)&&(Q=G/Math.max(et.width,et.height)),Q<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const j=Math.floor(Q*et.width),st=Math.floor(Q*et.height);h===void 0&&(h=g(j,st));const dt=T?g(j,st):h;return dt.width=j,dt.height=st,dt.getContext("2d").drawImage(L,0,0,j,st),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+j+"x"+st+")."),dt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),L;return L}function m(L){return L.generateMipmaps}function f(L){i.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(L,T,G,Q,et=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let j=T;if(T===i.RED&&(G===i.FLOAT&&(j=i.R32F),G===i.HALF_FLOAT&&(j=i.R16F),G===i.UNSIGNED_BYTE&&(j=i.R8)),T===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.R8UI),G===i.UNSIGNED_SHORT&&(j=i.R16UI),G===i.UNSIGNED_INT&&(j=i.R32UI),G===i.BYTE&&(j=i.R8I),G===i.SHORT&&(j=i.R16I),G===i.INT&&(j=i.R32I)),T===i.RG&&(G===i.FLOAT&&(j=i.RG32F),G===i.HALF_FLOAT&&(j=i.RG16F),G===i.UNSIGNED_BYTE&&(j=i.RG8)),T===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RG8UI),G===i.UNSIGNED_SHORT&&(j=i.RG16UI),G===i.UNSIGNED_INT&&(j=i.RG32UI),G===i.BYTE&&(j=i.RG8I),G===i.SHORT&&(j=i.RG16I),G===i.INT&&(j=i.RG32I)),T===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RGB8UI),G===i.UNSIGNED_SHORT&&(j=i.RGB16UI),G===i.UNSIGNED_INT&&(j=i.RGB32UI),G===i.BYTE&&(j=i.RGB8I),G===i.SHORT&&(j=i.RGB16I),G===i.INT&&(j=i.RGB32I)),T===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),G===i.UNSIGNED_INT&&(j=i.RGBA32UI),G===i.BYTE&&(j=i.RGBA8I),G===i.SHORT&&(j=i.RGBA16I),G===i.INT&&(j=i.RGBA32I)),T===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),T===i.RGBA){const st=et?Go:ee.getTransfer(Q);G===i.FLOAT&&(j=i.RGBA32F),G===i.HALF_FLOAT&&(j=i.RGBA16F),G===i.UNSIGNED_BYTE&&(j=st===re?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function y(L,T){let G;return L?T===null||T===Gi||T===zs?G=i.DEPTH24_STENCIL8:T===Gn?G=i.DEPTH32F_STENCIL8:T===Tr&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Gi||T===zs?G=i.DEPTH_COMPONENT24:T===Gn?G=i.DEPTH_COMPONENT32F:T===Tr&&(G=i.DEPTH_COMPONENT16),G}function E(L,T){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==wn&&L.minFilter!==Dn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function b(L){const T=L.target;T.removeEventListener("dispose",b),A(T),T.isVideoTexture&&d.delete(T)}function w(L){const T=L.target;T.removeEventListener("dispose",w),M(T)}function A(L){const T=n.get(L);if(T.__webglInit===void 0)return;const G=L.source,Q=u.get(G);if(Q){const et=Q[T.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(L),Object.keys(Q).length===0&&u.delete(G)}n.remove(L)}function S(L){const T=n.get(L);i.deleteTexture(T.__webglTexture);const G=L.source,Q=u.get(G);delete Q[T.__cacheKey],o.memory.textures--}function M(L){const T=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let et=0;et<T.__webglFramebuffer[Q].length;et++)i.deleteFramebuffer(T.__webglFramebuffer[Q][et]);else i.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)i.deleteFramebuffer(T.__webglFramebuffer[Q]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const G=L.textures;for(let Q=0,et=G.length;Q<et;Q++){const j=n.get(G[Q]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(G[Q])}n.remove(L)}let P=0;function D(){P=0}function I(){const L=P;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),P+=1,L}function N(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function k(L,T){const G=n.get(L);if(L.isVideoTexture&&lt(L),L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){const Q=L.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(G,L,T);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+T)}function H(L,T){const G=n.get(L);if(L.version>0&&G.__version!==L.version){F(G,L,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+T)}function $(L,T){const G=n.get(L);if(L.version>0&&G.__version!==L.version){F(G,L,T);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+T)}function W(L,T){const G=n.get(L);if(L.version>0&&G.__version!==L.version){V(G,L,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+T)}const J={[Bl]:i.REPEAT,[Bi]:i.CLAMP_TO_EDGE,[zl]:i.MIRRORED_REPEAT},ht={[wn]:i.NEAREST,[up]:i.NEAREST_MIPMAP_NEAREST,[Fr]:i.NEAREST_MIPMAP_LINEAR,[Dn]:i.LINEAR,[ba]:i.LINEAR_MIPMAP_NEAREST,[zi]:i.LINEAR_MIPMAP_LINEAR},yt={[gp]:i.NEVER,[Sp]:i.ALWAYS,[_p]:i.LESS,[xd]:i.LEQUAL,[xp]:i.EQUAL,[Mp]:i.GEQUAL,[vp]:i.GREATER,[yp]:i.NOTEQUAL};function Dt(L,T){if(T.type===Gn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Dn||T.magFilter===ba||T.magFilter===Fr||T.magFilter===zi||T.minFilter===Dn||T.minFilter===ba||T.minFilter===Fr||T.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,J[T.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,J[T.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,J[T.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ht[T.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ht[T.minFilter]),T.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,yt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===wn||T.minFilter!==Fr&&T.minFilter!==zi||T.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function it(L,T){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",b));const Q=T.source;let et=u.get(Q);et===void 0&&(et={},u.set(Q,et));const j=N(T);if(j!==L.__cacheKey){et[j]===void 0&&(et[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),et[j].usedTimes++;const st=et[L.__cacheKey];st!==void 0&&(et[L.__cacheKey].usedTimes--,st.usedTimes===0&&S(T)),L.__cacheKey=j,L.__webglTexture=et[j].texture}return G}function F(L,T,G){let Q=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Q=i.TEXTURE_3D);const et=it(L,T),j=T.source;e.bindTexture(Q,L.__webglTexture,i.TEXTURE0+G);const st=n.get(j);if(j.version!==st.__version||et===!0){e.activeTexture(i.TEXTURE0+G);const dt=ee.getPrimaries(ee.workingColorSpace),St=T.colorSpace===ci?null:ee.getPrimaries(T.colorSpace),Qt=T.colorSpace===ci||dt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let at=_(T.image,!1,s.maxTextureSize);at=Nt(T,at);const bt=r.convert(T.format,T.colorSpace),Ut=r.convert(T.type);let Bt=x(T.internalFormat,bt,Ut,T.colorSpace,T.isVideoTexture);Dt(Q,T);let Et;const $t=T.mipmaps,Xt=T.isVideoTexture!==!0,he=st.__version===void 0||et===!0,O=j.dataReady,mt=E(T,at);if(T.isDepthTexture)Bt=y(T.format===ks,T.type),he&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,Bt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Bt,at.width,at.height,0,bt,Ut,null));else if(T.isDataTexture)if($t.length>0){Xt&&he&&e.texStorage2D(i.TEXTURE_2D,mt,Bt,$t[0].width,$t[0].height);for(let Z=0,nt=$t.length;Z<nt;Z++)Et=$t[Z],Xt?O&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Et.width,Et.height,bt,Ut,Et.data):e.texImage2D(i.TEXTURE_2D,Z,Bt,Et.width,Et.height,0,bt,Ut,Et.data);T.generateMipmaps=!1}else Xt?(he&&e.texStorage2D(i.TEXTURE_2D,mt,Bt,at.width,at.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,bt,Ut,at.data)):e.texImage2D(i.TEXTURE_2D,0,Bt,at.width,at.height,0,bt,Ut,at.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Xt&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Bt,$t[0].width,$t[0].height,at.depth);for(let Z=0,nt=$t.length;Z<nt;Z++)if(Et=$t[Z],T.format!==En)if(bt!==null)if(Xt){if(O)if(T.layerUpdates.size>0){const xt=tu(Et.width,Et.height,T.format,T.type);for(const _t of T.layerUpdates){const Gt=Et.data.subarray(_t*xt/Et.data.BYTES_PER_ELEMENT,(_t+1)*xt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,_t,Et.width,Et.height,1,bt,Gt)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Et.width,Et.height,at.depth,bt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Bt,Et.width,Et.height,at.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Et.width,Et.height,at.depth,bt,Ut,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,Bt,Et.width,Et.height,at.depth,0,bt,Ut,Et.data)}else{Xt&&he&&e.texStorage2D(i.TEXTURE_2D,mt,Bt,$t[0].width,$t[0].height);for(let Z=0,nt=$t.length;Z<nt;Z++)Et=$t[Z],T.format!==En?bt!==null?Xt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,Et.width,Et.height,bt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,Bt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?O&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Et.width,Et.height,bt,Ut,Et.data):e.texImage2D(i.TEXTURE_2D,Z,Bt,Et.width,Et.height,0,bt,Ut,Et.data)}else if(T.isDataArrayTexture)if(Xt){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Bt,at.width,at.height,at.depth),O)if(T.layerUpdates.size>0){const Z=tu(at.width,at.height,T.format,T.type);for(const nt of T.layerUpdates){const xt=at.data.subarray(nt*Z/at.data.BYTES_PER_ELEMENT,(nt+1)*Z/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,at.width,at.height,1,bt,Ut,xt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,bt,Ut,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,at.width,at.height,at.depth,0,bt,Ut,at.data);else if(T.isData3DTexture)Xt?(he&&e.texStorage3D(i.TEXTURE_3D,mt,Bt,at.width,at.height,at.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,bt,Ut,at.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,at.width,at.height,at.depth,0,bt,Ut,at.data);else if(T.isFramebufferTexture){if(he)if(Xt)e.texStorage2D(i.TEXTURE_2D,mt,Bt,at.width,at.height);else{let Z=at.width,nt=at.height;for(let xt=0;xt<mt;xt++)e.texImage2D(i.TEXTURE_2D,xt,Bt,Z,nt,0,bt,Ut,null),Z>>=1,nt>>=1}}else if($t.length>0){if(Xt&&he){const Z=At($t[0]);e.texStorage2D(i.TEXTURE_2D,mt,Bt,Z.width,Z.height)}for(let Z=0,nt=$t.length;Z<nt;Z++)Et=$t[Z],Xt?O&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,bt,Ut,Et):e.texImage2D(i.TEXTURE_2D,Z,Bt,bt,Ut,Et);T.generateMipmaps=!1}else if(Xt){if(he){const Z=At(at);e.texStorage2D(i.TEXTURE_2D,mt,Bt,Z.width,Z.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Ut,at)}else e.texImage2D(i.TEXTURE_2D,0,Bt,bt,Ut,at);m(T)&&f(Q),st.__version=j.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function V(L,T,G){if(T.image.length!==6)return;const Q=it(L,T),et=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+G);const j=n.get(et);if(et.version!==j.__version||Q===!0){e.activeTexture(i.TEXTURE0+G);const st=ee.getPrimaries(ee.workingColorSpace),dt=T.colorSpace===ci?null:ee.getPrimaries(T.colorSpace),St=T.colorSpace===ci||st===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Qt=T.isCompressedTexture||T.image[0].isCompressedTexture,at=T.image[0]&&T.image[0].isDataTexture,bt=[];for(let nt=0;nt<6;nt++)!Qt&&!at?bt[nt]=_(T.image[nt],!0,s.maxCubemapSize):bt[nt]=at?T.image[nt].image:T.image[nt],bt[nt]=Nt(T,bt[nt]);const Ut=bt[0],Bt=r.convert(T.format,T.colorSpace),Et=r.convert(T.type),$t=x(T.internalFormat,Bt,Et,T.colorSpace),Xt=T.isVideoTexture!==!0,he=j.__version===void 0||Q===!0,O=et.dataReady;let mt=E(T,Ut);Dt(i.TEXTURE_CUBE_MAP,T);let Z;if(Qt){Xt&&he&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,$t,Ut.width,Ut.height);for(let nt=0;nt<6;nt++){Z=bt[nt].mipmaps;for(let xt=0;xt<Z.length;xt++){const _t=Z[xt];T.format!==En?Bt!==null?Xt?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt,0,0,_t.width,_t.height,Bt,_t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt,$t,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt,0,0,_t.width,_t.height,Bt,Et,_t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt,$t,_t.width,_t.height,0,Bt,Et,_t.data)}}}else{if(Z=T.mipmaps,Xt&&he){Z.length>0&&mt++;const nt=At(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,$t,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(at){Xt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,bt[nt].width,bt[nt].height,Bt,Et,bt[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,$t,bt[nt].width,bt[nt].height,0,Bt,Et,bt[nt].data);for(let xt=0;xt<Z.length;xt++){const Gt=Z[xt].image[nt].image;Xt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt+1,0,0,Gt.width,Gt.height,Bt,Et,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt+1,$t,Gt.width,Gt.height,0,Bt,Et,Gt.data)}}else{Xt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Bt,Et,bt[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,$t,Bt,Et,bt[nt]);for(let xt=0;xt<Z.length;xt++){const _t=Z[xt];Xt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt+1,0,0,Bt,Et,_t.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt+1,$t,Bt,Et,_t.image[nt])}}}m(T)&&f(i.TEXTURE_CUBE_MAP),j.__version=et.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function K(L,T,G,Q,et,j){const st=r.convert(G.format,G.colorSpace),dt=r.convert(G.type),St=x(G.internalFormat,st,dt,G.colorSpace),Qt=n.get(T),at=n.get(G);if(at.__renderTarget=T,!Qt.__hasExternalTextures){const bt=Math.max(1,T.width>>j),Ut=Math.max(1,T.height>>j);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,j,St,bt,Ut,T.depth,0,st,dt,null):e.texImage2D(et,j,St,bt,Ut,0,st,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),Ft(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,et,at.__webglTexture,0,Ct(T)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,et,at.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Y(L,T,G){if(i.bindRenderbuffer(i.RENDERBUFFER,L),T.depthBuffer){const Q=T.depthTexture,et=Q&&Q.isDepthTexture?Q.type:null,j=y(T.stencilBuffer,et),st=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=Ct(T);Ft(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,j,T.width,T.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,j,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,j,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,L)}else{const Q=T.textures;for(let et=0;et<Q.length;et++){const j=Q[et],st=r.convert(j.format,j.colorSpace),dt=r.convert(j.type),St=x(j.internalFormat,st,dt,j.colorSpace),Qt=Ct(T);G&&Ft(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt,St,T.width,T.height):Ft(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt,St,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,St,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function tt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(T.depthTexture);Q.__renderTarget=T,(!Q.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),k(T.depthTexture,0);const et=Q.__webglTexture,j=Ct(T);if(T.depthTexture.format===Ds)Ft(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(T.depthTexture.format===ks)Ft(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function ut(L){const T=n.get(L),G=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const Q=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Q){const et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Q.removeEventListener("dispose",et)};Q.addEventListener("dispose",et),T.__depthDisposeCallback=et}T.__boundDepthTexture=Q}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");tt(T.__webglFramebuffer,L)}else if(G){T.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Q]),T.__webglDepthbuffer[Q]===void 0)T.__webglDepthbuffer[Q]=i.createRenderbuffer(),Y(T.__webglDepthbuffer[Q],L,!1);else{const et=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=T.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Y(T.__webglDepthbuffer,L,!1);else{const Q=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(L,T,G){const Q=n.get(L);T!==void 0&&K(Q.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ut(L)}function Rt(L){const T=L.texture,G=n.get(L),Q=n.get(T);L.addEventListener("dispose",w);const et=L.textures,j=L.isWebGLCubeRenderTarget===!0,st=et.length>1;if(st||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=T.version,o.memory.textures++),j){G.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[dt]=[];for(let St=0;St<T.mipmaps.length;St++)G.__webglFramebuffer[dt][St]=i.createFramebuffer()}else G.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let dt=0;dt<T.mipmaps.length;dt++)G.__webglFramebuffer[dt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(st)for(let dt=0,St=et.length;dt<St;dt++){const Qt=n.get(et[dt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&Ft(L)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let dt=0;dt<et.length;dt++){const St=et[dt];G.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[dt]);const Qt=r.convert(St.format,St.colorSpace),at=r.convert(St.type),bt=x(St.internalFormat,Qt,at,St.colorSpace,L.isXRRenderTarget===!0),Ut=Ct(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,bt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,G.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Y(G.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,T);for(let dt=0;dt<6;dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let St=0;St<T.mipmaps.length;St++)K(G.__webglFramebuffer[dt][St],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,St);else K(G.__webglFramebuffer[dt],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(T)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let dt=0,St=et.length;dt<St;dt++){const Qt=et[dt],at=n.get(Qt);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),Dt(i.TEXTURE_2D,Qt),K(G.__webglFramebuffer,L,Qt,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),m(Qt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(dt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,Q.__webglTexture),Dt(dt,T),T.mipmaps&&T.mipmaps.length>0)for(let St=0;St<T.mipmaps.length;St++)K(G.__webglFramebuffer[St],L,T,i.COLOR_ATTACHMENT0,dt,St);else K(G.__webglFramebuffer,L,T,i.COLOR_ATTACHMENT0,dt,0);m(T)&&f(dt),e.unbindTexture()}L.depthBuffer&&ut(L)}function Mt(L){const T=L.textures;for(let G=0,Q=T.length;G<Q;G++){const et=T[G];if(m(et)){const j=v(L),st=n.get(et).__webglTexture;e.bindTexture(j,st),f(j),e.unbindTexture()}}}const Ot=[],U=[];function Ht(L){if(L.samples>0){if(Ft(L)===!1){const T=L.textures,G=L.width,Q=L.height;let et=i.COLOR_BUFFER_BIT;const j=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=n.get(L),dt=T.length>1;if(dt)for(let St=0;St<T.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let St=0;St<T.length;St++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,st.__webglColorRenderbuffer[St]);const Qt=n.get(T[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qt,0)}i.blitFramebuffer(0,0,G,Q,0,0,G,Q,et,i.NEAREST),l===!0&&(Ot.length=0,U.length=0,Ot.push(i.COLOR_ATTACHMENT0+St),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ot.push(j),U.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ot))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let St=0;St<T.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,st.__webglColorRenderbuffer[St]);const Qt=n.get(T[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const T=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Ct(L){return Math.min(s.maxSamples,L.samples)}function Ft(L){const T=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function lt(L){const T=o.render.frame;d.get(L)!==T&&(d.set(L,T),L.update())}function Nt(L,T){const G=L.colorSpace,Q=L.format,et=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==Hs&&G!==ci&&(ee.getTransfer(G)===re?(Q!==En||et!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),T}function At(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=D,this.setTexture2D=k,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=W,this.rebindTextures=ot,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=K,this.useMultisampledRTT=Ft}function Bx(i,t){function e(n,s=ci){let r;const o=ee.getTransfer(s);if(n===Kn)return i.UNSIGNED_BYTE;if(n===Uc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ld)return i.BYTE;if(n===cd)return i.SHORT;if(n===Tr)return i.UNSIGNED_SHORT;if(n===Ic)return i.INT;if(n===Gi)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===Dr)return i.HALF_FLOAT;if(n===ud)return i.ALPHA;if(n===dd)return i.RGB;if(n===En)return i.RGBA;if(n===fd)return i.LUMINANCE;if(n===pd)return i.LUMINANCE_ALPHA;if(n===Ds)return i.DEPTH_COMPONENT;if(n===ks)return i.DEPTH_STENCIL;if(n===md)return i.RED;if(n===Nc)return i.RED_INTEGER;if(n===gd)return i.RG;if(n===Oc)return i.RG_INTEGER;if(n===Bc)return i.RGBA_INTEGER;if(n===Io||n===Uo||n===Fo||n===No)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kl||n===Hl||n===Vl||n===Gl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wl||n===Xl||n===Yl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wl||n===Xl)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ql||n===Zl||n===jl||n===$l||n===Kl||n===Ql||n===Jl||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ql)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$l)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ql)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ec)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ic)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oo||n===ac||n===lc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Oo)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_d||n===cc||n===hc||n===uc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Oo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const zx={type:"move"};class sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ki;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const kx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Vx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Xe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new _i({vertexShader:kx,fragmentShader:Hx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ct(new Xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gx extends Yi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,g=null;const _=new Vx,m=e.getContextAttributes();let f=null,v=null;const x=[],y=[],E=new wt;let b=null;const w=new cn;w.viewport=new me;const A=new cn;A.viewport=new me;const S=[w,A],M=new hm;let P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let V=x[F];return V===void 0&&(V=new sl,x[F]=V),V.getTargetRaySpace()},this.getControllerGrip=function(F){let V=x[F];return V===void 0&&(V=new sl,x[F]=V),V.getGripSpace()},this.getHand=function(F){let V=x[F];return V===void 0&&(V=new sl,x[F]=V),V.getHandSpace()};function I(F){const V=y.indexOf(F.inputSource);if(V===-1)return;const K=x[V];K!==void 0&&(K.update(F.inputSource,F.frame,c||o),K.dispatchEvent({type:F.type,data:F.inputSource}))}function N(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",k);for(let F=0;F<x.length;F++){const V=y[F];V!==null&&(y[F]=null,x[F].disconnect(V))}P=null,D=null,_.reset(),t.setRenderTarget(f),p=null,u=null,h=null,s=null,v=null,it.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",N),s.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0){const V={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,V),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Wi(p.framebufferWidth,p.framebufferHeight,{format:En,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let V=null,K=null,Y=null;m.depth&&(Y=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,V=m.stencil?ks:Ds,K=m.stencil?zs:Gi);const tt={colorFormat:e.RGBA8,depthFormat:Y,scaleFactor:r};h=new XRWebGLBinding(s,e),u=h.createProjectionLayer(tt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Wi(u.textureWidth,u.textureHeight,{format:En,type:Kn,depthTexture:new Rd(u.textureWidth,u.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),it.setContext(s),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(F){for(let V=0;V<F.removed.length;V++){const K=F.removed[V],Y=y.indexOf(K);Y>=0&&(y[Y]=null,x[Y].disconnect(K))}for(let V=0;V<F.added.length;V++){const K=F.added[V];let Y=y.indexOf(K);if(Y===-1){for(let ut=0;ut<x.length;ut++)if(ut>=y.length){y.push(K),Y=ut;break}else if(y[ut]===null){y[ut]=K,Y=ut;break}if(Y===-1)break}const tt=x[Y];tt&&tt.connect(K)}}const H=new R,$=new R;function W(F,V,K){H.setFromMatrixPosition(V.matrixWorld),$.setFromMatrixPosition(K.matrixWorld);const Y=H.distanceTo($),tt=V.projectionMatrix.elements,ut=K.projectionMatrix.elements,ot=tt[14]/(tt[10]-1),Rt=tt[14]/(tt[10]+1),Mt=(tt[9]+1)/tt[5],Ot=(tt[9]-1)/tt[5],U=(tt[8]-1)/tt[0],Ht=(ut[8]+1)/ut[0],Ct=ot*U,Ft=ot*Ht,lt=Y/(-U+Ht),Nt=lt*-U;if(V.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Nt),F.translateZ(lt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),tt[10]===-1)F.projectionMatrix.copy(V.projectionMatrix),F.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const At=ot+lt,L=Rt+lt,T=Ct-Nt,G=Ft+(Y-Nt),Q=Mt*Rt/L*At,et=Ot*Rt/L*At;F.projectionMatrix.makePerspective(T,G,Q,et,At,L),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function J(F,V){V===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(V.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let V=F.near,K=F.far;_.texture!==null&&(_.depthNear>0&&(V=_.depthNear),_.depthFar>0&&(K=_.depthFar)),M.near=A.near=w.near=V,M.far=A.far=w.far=K,(P!==M.near||D!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,D=M.far),w.layers.mask=F.layers.mask|2,A.layers.mask=F.layers.mask|4,M.layers.mask=w.layers.mask|A.layers.mask;const Y=F.parent,tt=M.cameras;J(M,Y);for(let ut=0;ut<tt.length;ut++)J(tt[ut],Y);tt.length===2?W(M,w,A):M.projectionMatrix.copy(w.projectionMatrix),ht(F,M,Y)};function ht(F,V,K){K===null?F.matrix.copy(V.matrixWorld):(F.matrix.copy(K.matrixWorld),F.matrix.invert(),F.matrix.multiply(V.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(V.projectionMatrix),F.projectionMatrixInverse.copy(V.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=pc*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(F){l=F,u!==null&&(u.fixedFoveation=F),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=F)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let yt=null;function Dt(F,V){if(d=V.getViewerPose(c||o),g=V,d!==null){const K=d.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let Y=!1;K.length!==M.cameras.length&&(M.cameras.length=0,Y=!0);for(let ut=0;ut<K.length;ut++){const ot=K[ut];let Rt=null;if(p!==null)Rt=p.getViewport(ot);else{const Ot=h.getViewSubImage(u,ot);Rt=Ot.viewport,ut===0&&(t.setRenderTargetTextures(v,Ot.colorTexture,u.ignoreDepthValues?void 0:Ot.depthStencilTexture),t.setRenderTarget(v))}let Mt=S[ut];Mt===void 0&&(Mt=new cn,Mt.layers.enable(ut),Mt.viewport=new me,S[ut]=Mt),Mt.matrix.fromArray(ot.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(ot.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),ut===0&&(M.matrix.copy(Mt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Y===!0&&M.cameras.push(Mt)}const tt=s.enabledFeatures;if(tt&&tt.includes("depth-sensing")){const ut=h.getDepthInformation(K[0]);ut&&ut.isValid&&ut.texture&&_.init(t,ut,s.renderState)}}for(let K=0;K<x.length;K++){const Y=y[K],tt=x[K];Y!==null&&tt!==void 0&&tt.update(Y,V,c||o)}yt&&yt(F,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),g=null}const it=new Id;it.setAnimationLoop(Dt),this.setAnimationLoop=function(F){yt=F},this.dispose=function(){}}}const Ci=new De,Wx=new jt;function Xx(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ed(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,x,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),d(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ke&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ke&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=t.get(f),x=v.envMap,y=v.envMapRotation;x&&(m.envMap.value=x,Ci.copy(y),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),m.envMapRotation.value.setFromMatrix4(Wx.makeRotationFromEuler(Ci)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ke&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Yx(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;n.uniformBlockBinding(v,y)}function c(v,x){let y=s[v.id];y===void 0&&(g(v),y=d(v),s[v.id]=y,v.addEventListener("dispose",m));const E=x.program;n.updateUBOMapping(v,E);const b=t.render.frame;r[v.id]!==b&&(u(v),r[v.id]=b)}function d(v){const x=h();v.__bindingPointIndex=x;const y=i.createBuffer(),E=v.__size,b=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,E,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const x=s[v.id],y=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let b=0,w=y.length;b<w;b++){const A=Array.isArray(y[b])?y[b]:[y[b]];for(let S=0,M=A.length;S<M;S++){const P=A[S];if(p(P,b,S,E)===!0){const D=P.__offset,I=Array.isArray(P.value)?P.value:[P.value];let N=0;for(let k=0;k<I.length;k++){const H=I[k],$=_(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,D+N,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,N),N+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,x,y,E){const b=v.value,w=x+"_"+y;if(E[w]===void 0)return typeof b=="number"||typeof b=="boolean"?E[w]=b:E[w]=b.clone(),!0;{const A=E[w];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return E[w]=b,!0}else if(A.equals(b)===!1)return A.copy(b),!0}return!1}function g(v){const x=v.uniforms;let y=0;const E=16;for(let w=0,A=x.length;w<A;w++){const S=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,P=S.length;M<P;M++){const D=S[M],I=Array.isArray(D.value)?D.value:[D.value];for(let N=0,k=I.length;N<k;N++){const H=I[N],$=_(H),W=y%E,J=W%$.boundary,ht=W+J;y+=J,ht!==0&&E-ht<$.storage&&(y+=E-ht),D.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=$.storage}}}const b=y%E;return b>0&&(y+=E-b),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class qx{constructor(t={}){const{canvas:e=wp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const v=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this.toneMapping=fi,this.toneMappingExposure=1;const y=this;let E=!1,b=0,w=0,A=null,S=-1,M=null;const P=new me,D=new me;let I=null;const N=new kt(0);let k=0,H=e.width,$=e.height,W=1,J=null,ht=null;const yt=new me(0,0,H,$),Dt=new me(0,0,H,$);let it=!1;const F=new Vc;let V=!1,K=!1;const Y=new jt,tt=new jt,ut=new R,ot=new me,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function Ot(){return A===null?W:1}let U=n;function Ht(C,B){return e.getContext(C,B)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${aa}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),U===null){const B="webgl2";if(U=Ht(B,C),U===null)throw Ht(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ct,Ft,lt,Nt,At,L,T,G,Q,et,j,st,dt,St,Qt,at,bt,Ut,Bt,Et,$t,Xt,he,O;function mt(){Ct=new n0(U),Ct.init(),Xt=new Bx(U,Ct),Ft=new $_(U,Ct,t,Xt),lt=new Nx(U,Ct),Ft.reverseDepthBuffer&&u&&lt.buffers.depth.setReversed(!0),Nt=new r0(U),At=new bx,L=new Ox(U,Ct,lt,At,Ft,Xt,Nt),T=new Q_(y),G=new e0(y),Q=new dm(U),he=new Z_(U,Q),et=new i0(U,Q,Nt,he),j=new a0(U,et,Q,Nt),Bt=new o0(U,Ft,L),at=new K_(At),st=new Sx(y,T,G,Ct,Ft,he,at),dt=new Xx(y,At),St=new wx,Qt=new Lx(Ct),Ut=new q_(y,T,G,lt,j,p,l),bt=new Ux(y,j,Ft),O=new Yx(U,Nt,Ft,lt),Et=new j_(U,Ct,Nt),$t=new s0(U,Ct,Nt),Nt.programs=st.programs,y.capabilities=Ft,y.extensions=Ct,y.properties=At,y.renderLists=St,y.shadowMap=bt,y.state=lt,y.info=Nt}mt();const Z=new Gx(y,U);this.xr=Z,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=Ct.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ct.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(C){C!==void 0&&(W=C,this.setSize(H,$,!1))},this.getSize=function(C){return C.set(H,$)},this.setSize=function(C,B,X=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=C,$=B,e.width=Math.floor(C*W),e.height=Math.floor(B*W),X===!0&&(e.style.width=C+"px",e.style.height=B+"px"),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(H*W,$*W).floor()},this.setDrawingBufferSize=function(C,B,X){H=C,$=B,W=X,e.width=Math.floor(C*X),e.height=Math.floor(B*X),this.setViewport(0,0,C,B)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(yt)},this.setViewport=function(C,B,X,q){C.isVector4?yt.set(C.x,C.y,C.z,C.w):yt.set(C,B,X,q),lt.viewport(P.copy(yt).multiplyScalar(W).round())},this.getScissor=function(C){return C.copy(Dt)},this.setScissor=function(C,B,X,q){C.isVector4?Dt.set(C.x,C.y,C.z,C.w):Dt.set(C,B,X,q),lt.scissor(D.copy(Dt).multiplyScalar(W).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(C){lt.setScissorTest(it=C)},this.setOpaqueSort=function(C){J=C},this.setTransparentSort=function(C){ht=C},this.getClearColor=function(C){return C.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(C=!0,B=!0,X=!0){let q=0;if(C){let z=!1;if(A!==null){const rt=A.texture.format;z=rt===Bc||rt===Oc||rt===Nc}if(z){const rt=A.texture.type,gt=rt===Kn||rt===Gi||rt===Tr||rt===zs||rt===Uc||rt===Fc,vt=Ut.getClearColor(),Tt=Ut.getClearAlpha(),zt=vt.r,Vt=vt.g,Pt=vt.b;gt?(g[0]=zt,g[1]=Vt,g[2]=Pt,g[3]=Tt,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=zt,_[1]=Vt,_[2]=Pt,_[3]=Tt,U.clearBufferiv(U.COLOR,0,_))}else q|=U.COLOR_BUFFER_BIT}B&&(q|=U.DEPTH_BUFFER_BIT),X&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Ut.dispose(),St.dispose(),Qt.dispose(),At.dispose(),T.dispose(),G.dispose(),j.dispose(),he.dispose(),O.dispose(),st.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",dh),Z.removeEventListener("sessionend",fh),Mi.stop()};function nt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const C=Nt.autoReset,B=bt.enabled,X=bt.autoUpdate,q=bt.needsUpdate,z=bt.type;mt(),Nt.autoReset=C,bt.enabled=B,bt.autoUpdate=X,bt.needsUpdate=q,bt.type=z}function _t(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Gt(C){const B=C.target;B.removeEventListener("dispose",Gt),ge(B)}function ge(C){Ne(C),At.remove(C)}function Ne(C){const B=At.get(C).programs;B!==void 0&&(B.forEach(function(X){st.releaseProgram(X)}),C.isShaderMaterial&&st.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,X,q,z,rt){B===null&&(B=Rt);const gt=z.isMesh&&z.matrixWorld.determinant()<0,vt=Pf(C,B,X,q,z);lt.setMaterial(q,gt);let Tt=X.index,zt=1;if(q.wireframe===!0){if(Tt=et.getWireframeAttribute(X),Tt===void 0)return;zt=2}const Vt=X.drawRange,Pt=X.attributes.position;let Jt=Vt.start*zt,ne=(Vt.start+Vt.count)*zt;rt!==null&&(Jt=Math.max(Jt,rt.start*zt),ne=Math.min(ne,(rt.start+rt.count)*zt)),Tt!==null?(Jt=Math.max(Jt,0),ne=Math.min(ne,Tt.count)):Pt!=null&&(Jt=Math.max(Jt,0),ne=Math.min(ne,Pt.count));const Se=ne-Jt;if(Se<0||Se===1/0)return;he.setup(z,q,vt,X,Tt);let _e,te=Et;if(Tt!==null&&(_e=Q.get(Tt),te=$t,te.setIndex(_e)),z.isMesh)q.wireframe===!0?(lt.setLineWidth(q.wireframeLinewidth*Ot()),te.setMode(U.LINES)):te.setMode(U.TRIANGLES);else if(z.isLine){let It=q.linewidth;It===void 0&&(It=1),lt.setLineWidth(It*Ot()),z.isLineSegments?te.setMode(U.LINES):z.isLineLoop?te.setMode(U.LINE_LOOP):te.setMode(U.LINE_STRIP)}else z.isPoints?te.setMode(U.POINTS):z.isSprite&&te.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)te.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ct.get("WEBGL_multi_draw"))te.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const It=z._multiDrawStarts,Ue=z._multiDrawCounts,ie=z._multiDrawCount,gn=Tt?Q.get(Tt).bytesPerElement:1,qi=At.get(q).currentProgram.getUniforms();for(let Je=0;Je<ie;Je++)qi.setValue(U,"_gl_DrawID",Je),te.render(It[Je]/gn,Ue[Je])}else if(z.isInstancedMesh)te.renderInstances(Jt,Se,z.count);else if(X.isInstancedBufferGeometry){const It=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ue=Math.min(X.instanceCount,It);te.renderInstances(Jt,Se,Ue)}else te.render(Jt,Se)};function se(C,B,X){C.transparent===!0&&C.side===Ie&&C.forceSinglePass===!1?(C.side=ke,C.needsUpdate=!0,Ur(C,B,X),C.side=Tn,C.needsUpdate=!0,Ur(C,B,X),C.side=Ie):Ur(C,B,X)}this.compile=function(C,B,X=null){X===null&&(X=C),f=Qt.get(X),f.init(B),x.push(f),X.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),C!==X&&C.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights();const q=new Set;return C.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const rt=z.material;if(rt)if(Array.isArray(rt))for(let gt=0;gt<rt.length;gt++){const vt=rt[gt];se(vt,X,z),q.add(vt)}else se(rt,X,z),q.add(rt)}),x.pop(),f=null,q},this.compileAsync=function(C,B,X=null){const q=this.compile(C,B,X);return new Promise(z=>{function rt(){if(q.forEach(function(gt){At.get(gt).currentProgram.isReady()&&q.delete(gt)}),q.size===0){z(C);return}setTimeout(rt,10)}Ct.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let mn=null;function In(C){mn&&mn(C)}function dh(){Mi.stop()}function fh(){Mi.start()}const Mi=new Id;Mi.setAnimationLoop(In),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(C){mn=C,Z.setAnimationLoop(C),C===null?Mi.stop():Mi.start()},Z.addEventListener("sessionstart",dh),Z.addEventListener("sessionend",fh),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(B),B=Z.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,B,A),f=Qt.get(C,x.length),f.init(B),x.push(f),tt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),F.setFromProjectionMatrix(tt),K=this.localClippingEnabled,V=at.init(this.clippingPlanes,K),m=St.get(C,v.length),m.init(),v.push(m),Z.enabled===!0&&Z.isPresenting===!0){const rt=y.xr.getDepthSensingMesh();rt!==null&&Ma(rt,B,-1/0,y.sortObjects)}Ma(C,B,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(J,ht),Mt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Mt&&Ut.addToRenderList(m,C),this.info.render.frame++,V===!0&&at.beginShadows();const X=f.state.shadowsArray;bt.render(X,C,B),V===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,z=m.transmissive;if(f.setupLights(),B.isArrayCamera){const rt=B.cameras;if(z.length>0)for(let gt=0,vt=rt.length;gt<vt;gt++){const Tt=rt[gt];mh(q,z,C,Tt)}Mt&&Ut.render(C);for(let gt=0,vt=rt.length;gt<vt;gt++){const Tt=rt[gt];ph(m,C,Tt,Tt.viewport)}}else z.length>0&&mh(q,z,C,B),Mt&&Ut.render(C),ph(m,C,B);A!==null&&(L.updateMultisampleRenderTarget(A),L.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(y,C,B),he.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?(f=x[x.length-1],V===!0&&at.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Ma(C,B,X,q){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||F.intersectsSprite(C)){q&&ot.setFromMatrixPosition(C.matrixWorld).applyMatrix4(tt);const gt=j.update(C),vt=C.material;vt.visible&&m.push(C,gt,vt,X,ot.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||F.intersectsObject(C))){const gt=j.update(C),vt=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ot.copy(C.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),ot.copy(gt.boundingSphere.center)),ot.applyMatrix4(C.matrixWorld).applyMatrix4(tt)),Array.isArray(vt)){const Tt=gt.groups;for(let zt=0,Vt=Tt.length;zt<Vt;zt++){const Pt=Tt[zt],Jt=vt[Pt.materialIndex];Jt&&Jt.visible&&m.push(C,gt,Jt,X,ot.z,Pt)}}else vt.visible&&m.push(C,gt,vt,X,ot.z,null)}}const rt=C.children;for(let gt=0,vt=rt.length;gt<vt;gt++)Ma(rt[gt],B,X,q)}function ph(C,B,X,q){const z=C.opaque,rt=C.transmissive,gt=C.transparent;f.setupLightsView(X),V===!0&&at.setGlobalState(y.clippingPlanes,X),q&&lt.viewport(P.copy(q)),z.length>0&&Ir(z,B,X),rt.length>0&&Ir(rt,B,X),gt.length>0&&Ir(gt,B,X),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function mh(C,B,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[q.id]===void 0&&(f.state.transmissionRenderTarget[q.id]=new Wi(1,1,{generateMipmaps:!0,type:Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float")?Dr:Kn,minFilter:zi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const rt=f.state.transmissionRenderTarget[q.id],gt=q.viewport||P;rt.setSize(gt.z,gt.w);const vt=y.getRenderTarget();y.setRenderTarget(rt),y.getClearColor(N),k=y.getClearAlpha(),k<1&&y.setClearColor(16777215,.5),y.clear(),Mt&&Ut.render(X);const Tt=y.toneMapping;y.toneMapping=fi;const zt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),f.setupLightsView(q),V===!0&&at.setGlobalState(y.clippingPlanes,q),Ir(C,X,q),L.updateMultisampleRenderTarget(rt),L.updateRenderTargetMipmap(rt),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Pt=0,Jt=B.length;Pt<Jt;Pt++){const ne=B[Pt],Se=ne.object,_e=ne.geometry,te=ne.material,It=ne.group;if(te.side===Ie&&Se.layers.test(q.layers)){const Ue=te.side;te.side=ke,te.needsUpdate=!0,gh(Se,X,q,_e,te,It),te.side=Ue,te.needsUpdate=!0,Vt=!0}}Vt===!0&&(L.updateMultisampleRenderTarget(rt),L.updateRenderTargetMipmap(rt))}y.setRenderTarget(vt),y.setClearColor(N,k),zt!==void 0&&(q.viewport=zt),y.toneMapping=Tt}function Ir(C,B,X){const q=B.isScene===!0?B.overrideMaterial:null;for(let z=0,rt=C.length;z<rt;z++){const gt=C[z],vt=gt.object,Tt=gt.geometry,zt=q===null?gt.material:q,Vt=gt.group;vt.layers.test(X.layers)&&gh(vt,B,X,Tt,zt,Vt)}}function gh(C,B,X,q,z,rt){C.onBeforeRender(y,B,X,q,z,rt),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),z.onBeforeRender(y,B,X,q,C,rt),z.transparent===!0&&z.side===Ie&&z.forceSinglePass===!1?(z.side=ke,z.needsUpdate=!0,y.renderBufferDirect(X,B,q,z,C,rt),z.side=Tn,z.needsUpdate=!0,y.renderBufferDirect(X,B,q,z,C,rt),z.side=Ie):y.renderBufferDirect(X,B,q,z,C,rt),C.onAfterRender(y,B,X,q,z,rt)}function Ur(C,B,X){B.isScene!==!0&&(B=Rt);const q=At.get(C),z=f.state.lights,rt=f.state.shadowsArray,gt=z.state.version,vt=st.getParameters(C,z.state,rt,B,X),Tt=st.getProgramCacheKey(vt);let zt=q.programs;q.environment=C.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(C.isMeshStandardMaterial?G:T).get(C.envMap||q.environment),q.envMapRotation=q.environment!==null&&C.envMap===null?B.environmentRotation:C.envMapRotation,zt===void 0&&(C.addEventListener("dispose",Gt),zt=new Map,q.programs=zt);let Vt=zt.get(Tt);if(Vt!==void 0){if(q.currentProgram===Vt&&q.lightsStateVersion===gt)return xh(C,vt),Vt}else vt.uniforms=st.getUniforms(C),C.onBeforeCompile(vt,y),Vt=st.acquireProgram(vt,Tt),zt.set(Tt,Vt),q.uniforms=vt.uniforms;const Pt=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Pt.clippingPlanes=at.uniform),xh(C,vt),q.needsLights=Df(C),q.lightsStateVersion=gt,q.needsLights&&(Pt.ambientLightColor.value=z.state.ambient,Pt.lightProbe.value=z.state.probe,Pt.directionalLights.value=z.state.directional,Pt.directionalLightShadows.value=z.state.directionalShadow,Pt.spotLights.value=z.state.spot,Pt.spotLightShadows.value=z.state.spotShadow,Pt.rectAreaLights.value=z.state.rectArea,Pt.ltc_1.value=z.state.rectAreaLTC1,Pt.ltc_2.value=z.state.rectAreaLTC2,Pt.pointLights.value=z.state.point,Pt.pointLightShadows.value=z.state.pointShadow,Pt.hemisphereLights.value=z.state.hemi,Pt.directionalShadowMap.value=z.state.directionalShadowMap,Pt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pt.spotShadowMap.value=z.state.spotShadowMap,Pt.spotLightMatrix.value=z.state.spotLightMatrix,Pt.spotLightMap.value=z.state.spotLightMap,Pt.pointShadowMap.value=z.state.pointShadowMap,Pt.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=Vt,q.uniformsList=null,Vt}function _h(C){if(C.uniformsList===null){const B=C.currentProgram.getUniforms();C.uniformsList=zo.seqWithValue(B.seq,C.uniforms)}return C.uniformsList}function xh(C,B){const X=At.get(C);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Pf(C,B,X,q,z){B.isScene!==!0&&(B=Rt),L.resetTextureUnits();const rt=B.fog,gt=q.isMeshStandardMaterial?B.environment:null,vt=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Hs,Tt=(q.isMeshStandardMaterial?G:T).get(q.envMap||gt),zt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Vt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Pt=!!X.morphAttributes.position,Jt=!!X.morphAttributes.normal,ne=!!X.morphAttributes.color;let Se=fi;q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Se=y.toneMapping);const _e=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,te=_e!==void 0?_e.length:0,It=At.get(q),Ue=f.state.lights;if(V===!0&&(K===!0||C!==M)){const He=C===M&&q.id===S;at.setState(q,C,He)}let ie=!1;q.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Ue.state.version||It.outputColorSpace!==vt||z.isBatchedMesh&&It.batching===!1||!z.isBatchedMesh&&It.batching===!0||z.isBatchedMesh&&It.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&It.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&It.instancing===!1||!z.isInstancedMesh&&It.instancing===!0||z.isSkinnedMesh&&It.skinning===!1||!z.isSkinnedMesh&&It.skinning===!0||z.isInstancedMesh&&It.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&It.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&It.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&It.instancingMorph===!1&&z.morphTexture!==null||It.envMap!==Tt||q.fog===!0&&It.fog!==rt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==at.numPlanes||It.numIntersection!==at.numIntersection)||It.vertexAlphas!==zt||It.vertexTangents!==Vt||It.morphTargets!==Pt||It.morphNormals!==Jt||It.morphColors!==ne||It.toneMapping!==Se||It.morphTargetsCount!==te)&&(ie=!0):(ie=!0,It.__version=q.version);let gn=It.currentProgram;ie===!0&&(gn=Ur(q,B,z));let qi=!1,Je=!1,js=!1;const fe=gn.getUniforms(),on=It.uniforms;if(lt.useProgram(gn.program)&&(qi=!0,Je=!0,js=!0),q.id!==S&&(S=q.id,Je=!0),qi||M!==C){lt.buffers.depth.getReversed()?(Y.copy(C.projectionMatrix),Ap(Y),Cp(Y),fe.setValue(U,"projectionMatrix",Y)):fe.setValue(U,"projectionMatrix",C.projectionMatrix),fe.setValue(U,"viewMatrix",C.matrixWorldInverse);const qe=fe.map.cameraPosition;qe!==void 0&&qe.setValue(U,ut.setFromMatrixPosition(C.matrixWorld)),Ft.logarithmicDepthBuffer&&fe.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&fe.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Je=!0,js=!0)}if(z.isSkinnedMesh){fe.setOptional(U,z,"bindMatrix"),fe.setOptional(U,z,"bindMatrixInverse");const He=z.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),fe.setValue(U,"boneTexture",He.boneTexture,L))}z.isBatchedMesh&&(fe.setOptional(U,z,"batchingTexture"),fe.setValue(U,"batchingTexture",z._matricesTexture,L),fe.setOptional(U,z,"batchingIdTexture"),fe.setValue(U,"batchingIdTexture",z._indirectTexture,L),fe.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&fe.setValue(U,"batchingColorTexture",z._colorsTexture,L));const an=X.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&Bt.update(z,X,gn),(Je||It.receiveShadow!==z.receiveShadow)&&(It.receiveShadow=z.receiveShadow,fe.setValue(U,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(on.envMap.value=Tt,on.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(on.envMapIntensity.value=B.environmentIntensity),Je&&(fe.setValue(U,"toneMappingExposure",y.toneMappingExposure),It.needsLights&&Lf(on,js),rt&&q.fog===!0&&dt.refreshFogUniforms(on,rt),dt.refreshMaterialUniforms(on,q,W,$,f.state.transmissionRenderTarget[C.id]),zo.upload(U,_h(It),on,L)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(zo.upload(U,_h(It),on,L),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&fe.setValue(U,"center",z.center),fe.setValue(U,"modelViewMatrix",z.modelViewMatrix),fe.setValue(U,"normalMatrix",z.normalMatrix),fe.setValue(U,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const He=q.uniformsGroups;for(let qe=0,Sa=He.length;qe<Sa;qe++){const Si=He[qe];O.update(Si,gn),O.bind(Si,gn)}}return gn}function Lf(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function Df(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,B,X){At.get(C.texture).__webglTexture=B,At.get(C.depthTexture).__webglTexture=X;const q=At.get(C);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||Ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,B){const X=At.get(C);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(C,B=0,X=0){A=C,b=B,w=X;let q=!0,z=null,rt=!1,gt=!1;if(C){const Tt=At.get(C);if(Tt.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(U.FRAMEBUFFER,null),q=!1;else if(Tt.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(Tt.__hasExternalTextures)L.rebindTextures(C,At.get(C.texture).__webglTexture,At.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Pt=C.depthTexture;if(Tt.__boundDepthTexture!==Pt){if(Pt!==null&&At.has(Pt)&&(C.width!==Pt.image.width||C.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const zt=C.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(gt=!0);const Vt=At.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Vt[B])?z=Vt[B][X]:z=Vt[B],rt=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?z=At.get(C).__webglMultisampledFramebuffer:Array.isArray(Vt)?z=Vt[X]:z=Vt,P.copy(C.viewport),D.copy(C.scissor),I=C.scissorTest}else P.copy(yt).multiplyScalar(W).floor(),D.copy(Dt).multiplyScalar(W).floor(),I=it;if(lt.bindFramebuffer(U.FRAMEBUFFER,z)&&q&&lt.drawBuffers(C,z),lt.viewport(P),lt.scissor(D),lt.setScissorTest(I),rt){const Tt=At.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Tt.__webglTexture,X)}else if(gt){const Tt=At.get(C.texture),zt=B||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Tt.__webglTexture,X||0,zt)}S=-1},this.readRenderTargetPixels=function(C,B,X,q,z,rt,gt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=At.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&gt!==void 0&&(vt=vt[gt]),vt){lt.bindFramebuffer(U.FRAMEBUFFER,vt);try{const Tt=C.texture,zt=Tt.format,Vt=Tt.type;if(!Ft.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-q&&X>=0&&X<=C.height-z&&U.readPixels(B,X,q,z,Xt.convert(zt),Xt.convert(Vt),rt)}finally{const Tt=A!==null?At.get(A).__webglFramebuffer:null;lt.bindFramebuffer(U.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(C,B,X,q,z,rt,gt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=At.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&gt!==void 0&&(vt=vt[gt]),vt){const Tt=C.texture,zt=Tt.format,Vt=Tt.type;if(!Ft.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=C.width-q&&X>=0&&X<=C.height-z){lt.bindFramebuffer(U.FRAMEBUFFER,vt);const Pt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Pt),U.bufferData(U.PIXEL_PACK_BUFFER,rt.byteLength,U.STREAM_READ),U.readPixels(B,X,q,z,Xt.convert(zt),Xt.convert(Vt),0);const Jt=A!==null?At.get(A).__webglFramebuffer:null;lt.bindFramebuffer(U.FRAMEBUFFER,Jt);const ne=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Tp(U,ne,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Pt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,rt),U.deleteBuffer(Pt),U.deleteSync(ne),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,B=null,X=0){C.isTexture!==!0&&(ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,C=arguments[1]);const q=Math.pow(2,-X),z=Math.floor(C.image.width*q),rt=Math.floor(C.image.height*q),gt=B!==null?B.x:0,vt=B!==null?B.y:0;L.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,gt,vt,z,rt),lt.unbindTexture()};const If=U.createFramebuffer(),Uf=U.createFramebuffer();this.copyTextureToTexture=function(C,B,X=null,q=null,z=0,rt=null){C.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,C=arguments[1],B=arguments[2],rt=arguments[3]||0,X=null),rt===null&&(z!==0?(ws("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),rt=z,z=0):rt=0);let gt,vt,Tt,zt,Vt,Pt,Jt,ne,Se;const _e=C.isCompressedTexture?C.mipmaps[rt]:C.image;if(X!==null)gt=X.max.x-X.min.x,vt=X.max.y-X.min.y,Tt=X.isBox3?X.max.z-X.min.z:1,zt=X.min.x,Vt=X.min.y,Pt=X.isBox3?X.min.z:0;else{const an=Math.pow(2,-z);gt=Math.floor(_e.width*an),vt=Math.floor(_e.height*an),C.isDataArrayTexture?Tt=_e.depth:C.isData3DTexture?Tt=Math.floor(_e.depth*an):Tt=1,zt=0,Vt=0,Pt=0}q!==null?(Jt=q.x,ne=q.y,Se=q.z):(Jt=0,ne=0,Se=0);const te=Xt.convert(B.format),It=Xt.convert(B.type);let Ue;B.isData3DTexture?(L.setTexture3D(B,0),Ue=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(L.setTexture2DArray(B,0),Ue=U.TEXTURE_2D_ARRAY):(L.setTexture2D(B,0),Ue=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const ie=U.getParameter(U.UNPACK_ROW_LENGTH),gn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),qi=U.getParameter(U.UNPACK_SKIP_PIXELS),Je=U.getParameter(U.UNPACK_SKIP_ROWS),js=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,_e.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_e.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,zt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Vt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Pt);const fe=C.isDataArrayTexture||C.isData3DTexture,on=B.isDataArrayTexture||B.isData3DTexture;if(C.isDepthTexture){const an=At.get(C),He=At.get(B),qe=At.get(an.__renderTarget),Sa=At.get(He.__renderTarget);lt.bindFramebuffer(U.READ_FRAMEBUFFER,qe.__webglFramebuffer),lt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Sa.__webglFramebuffer);for(let Si=0;Si<Tt;Si++)fe&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,At.get(C).__webglTexture,z,Pt+Si),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,At.get(B).__webglTexture,rt,Se+Si)),U.blitFramebuffer(zt,Vt,gt,vt,Jt,ne,gt,vt,U.DEPTH_BUFFER_BIT,U.NEAREST);lt.bindFramebuffer(U.READ_FRAMEBUFFER,null),lt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||C.isRenderTargetTexture||At.has(C)){const an=At.get(C),He=At.get(B);lt.bindFramebuffer(U.READ_FRAMEBUFFER,If),lt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Uf);for(let qe=0;qe<Tt;qe++)fe?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,an.__webglTexture,z,Pt+qe):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,an.__webglTexture,z),on?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,He.__webglTexture,rt,Se+qe):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,He.__webglTexture,rt),z!==0?U.blitFramebuffer(zt,Vt,gt,vt,Jt,ne,gt,vt,U.COLOR_BUFFER_BIT,U.NEAREST):on?U.copyTexSubImage3D(Ue,rt,Jt,ne,Se+qe,zt,Vt,gt,vt):U.copyTexSubImage2D(Ue,rt,Jt,ne,zt,Vt,gt,vt);lt.bindFramebuffer(U.READ_FRAMEBUFFER,null),lt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else on?C.isDataTexture||C.isData3DTexture?U.texSubImage3D(Ue,rt,Jt,ne,Se,gt,vt,Tt,te,It,_e.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Ue,rt,Jt,ne,Se,gt,vt,Tt,te,_e.data):U.texSubImage3D(Ue,rt,Jt,ne,Se,gt,vt,Tt,te,It,_e):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,rt,Jt,ne,gt,vt,te,It,_e.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,rt,Jt,ne,_e.width,_e.height,te,_e.data):U.texSubImage2D(U.TEXTURE_2D,rt,Jt,ne,gt,vt,te,It,_e);U.pixelStorei(U.UNPACK_ROW_LENGTH,ie),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,qi),U.pixelStorei(U.UNPACK_SKIP_ROWS,Je),U.pixelStorei(U.UNPACK_SKIP_IMAGES,js),rt===0&&B.generateMipmaps&&U.generateMipmap(Ue),lt.unbindTexture()},this.copyTextureToTexture3D=function(C,B,X=null,q=null,z=0){return C.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,C=arguments[2],B=arguments[3],z=arguments[4]||0),ws('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,B,X,q,z)},this.initRenderTarget=function(C){At.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),lt.unbindTexture()},this.resetState=function(){b=0,w=0,A=null,lt.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}const pr=i=>i>="0"&&i<="9",rl=i=>i>="A"&&i<="Z"||i>="a"&&i<="z"||i==="_",Zx=i=>pr(i)||i==="."||i==="e"||i==="E"||i==="+"||i==="-";function jx(i){const t=[];let e=0;const n=i.length;for(;e<n;){const s=i[e];if(s===" "||s==="	"||s==="\r"||s===`
`){e++;continue}if(s==="/"&&i[e+1]==="*"){const o=i.indexOf("*/",e+2);e=o<0?n:o+2;continue}const r=e;if(s==="'"){e++;let o="";for(;e<n;){if(i[e]==="'"){if(i[e+1]==="'"){o+="'",e+=2;continue}e++;break}o+=i[e++]}t.push({kind:"str",text:o,pos:r});continue}if(s==="#"){e++;let o="";for(;e<n&&pr(i[e]);)o+=i[e++];t.push({kind:"ref",text:o,pos:r});continue}if(s==="."&&rl(i[e+1]??"")){e++;let o="";for(;e<n&&i[e]!==".";)o+=i[e++];e++,t.push({kind:"enum",text:o,pos:r});continue}if(pr(s)||(s==="+"||s==="-"||s===".")&&pr(i[e+1]??"")){let o=i[e++];for(;e<n&&Zx(i[e]);)o+=i[e++];t.push({kind:"num",text:o,pos:r});continue}if(rl(s)){let o="";for(;e<n&&(rl(i[e])||pr(i[e]));)o+=i[e++];t.push({kind:"kw",text:o,pos:r});continue}e++,s==="("?t.push({kind:"lparen",text:s,pos:r}):s===")"?t.push({kind:"rparen",text:s,pos:r}):s===","?t.push({kind:"comma",text:s,pos:r}):s===";"?t.push({kind:"semi",text:s,pos:r}):s==="="?t.push({kind:"eq",text:s,pos:r}):s==="$"?t.push({kind:"dollar",text:s,pos:r}):s==="*"&&t.push({kind:"star",text:s,pos:r})}return t.push({kind:"eof",text:"",pos:n}),t}const fs=1,je=2,qt=4,uo=67108864;class jn{constructor(t,e=0){this.size=0;let n=64;for(;n*.7<t;)n*=2;this.lanes=e,this.mask=n-1,this.growAt=n*.7|0,this.keys=new Float64Array(n).fill(-1),this.cnt=new Uint8Array(n),this.v0=e>=1?new Int32Array(n).fill(-1):new Int32Array(0),this.v1=e>=2?new Int32Array(n).fill(-1):new Int32Array(0)}get capacity(){return this.keys.length}static hash(t,e){const n=t>>>0,s=t/4294967296>>>0;let r=Math.imul(n,2654435761)^Math.imul(s,2246822507);return r^=r>>>15,r=Math.imul(r,739982445),r^=r>>>12,r&e}slot(t,e){this.size>=this.growAt&&this.rehash();const n=t<e?t*uo+e:e*uo+t,s=this.keys,r=this.mask;let o=jn.hash(n,r);for(;s[o]!==n;){if(s[o]===-1)return s[o]=n,this.size++,o;o=o+1&r}return o}find(t,e){const n=t<e?t*uo+e:e*uo+t,s=this.keys,r=this.mask;let o=jn.hash(n,r);for(;s[o]!==n;){if(s[o]===-1)return-1;o=o+1&r}return o}bump(t,e){const n=this.slot(t,e);return this.cnt[n]<255&&(this.cnt[n]=this.cnt[n]+1),n}rehash(){const t=this.keys,e=this.cnt,n=this.v0,s=this.v1,r=t.length*2,o=r-1,a=new Float64Array(r).fill(-1),l=new Uint8Array(r),c=this.lanes>=1?new Int32Array(r).fill(-1):this.v0,d=this.lanes>=2?new Int32Array(r).fill(-1):this.v1;for(let h=0;h<t.length;h++){const u=t[h];if(u===-1)continue;let p=jn.hash(u,o);for(;a[p]!==-1;)p=p+1&o;a[p]=u,l[p]=e[h],this.lanes>=1&&(c[p]=n[h]),this.lanes>=2&&(d[p]=s[h])}this.keys=a,this.cnt=l,this.v0=c,this.v1=d,this.mask=o,this.growAt=r*.7|0}}const jo=[{id:"cnckitchen",label:"VPIC1",hint:"left-drag orbit · right-drag pan · scroll zoom",bindings:[{buttons:fs,action:"orbit"},{buttons:je,action:"pan"}]},{id:"fusion",label:"Autodesk Fusion",wheelZoomsOut:!0,hint:"Shift+middle orbit · middle pan · scroll zoom (up = out)",bindings:[{buttons:qt,shift:!0,action:"orbit"},{buttons:qt,action:"pan"},{buttons:qt,shift:!0,ctrl:!0,action:"zoom"}]},{id:"inventor",label:"Autodesk Inventor",wheelZoomsOut:!0,hint:"Shift+middle orbit · middle pan · scroll zoom (up = out)",bindings:[{buttons:qt,shift:!0,action:"orbit"},{buttons:qt,action:"pan"}]},{id:"bambu",label:"Bambu Studio / Orca / Prusa",hint:"left-drag orbit · right-drag pan · scroll zoom",bindings:[{buttons:fs,action:"orbit"},{buttons:je,action:"pan"},{buttons:qt,action:"pan"}]},{id:"blender",label:"Blender",hint:"middle orbit · Shift+middle pan · scroll zoom",bindings:[{buttons:qt,action:"orbit"},{buttons:qt,shift:!0,action:"pan"},{buttons:qt,ctrl:!0,action:"zoom"}]},{id:"catia",label:"CATIA",catiaZoomTick:!0,hint:"middle pan · middle+hold left/right orbit · middle+click left/right then drag zoom",bindings:[{buttons:qt,action:"pan"},{buttons:qt|fs,action:"orbit"},{buttons:qt|je,action:"orbit"},{buttons:qt,ctrl:!0,action:"zoom"}]},{id:"freecad",label:"FreeCAD",hint:"middle pan · middle+left orbit · scroll zoom",bindings:[{buttons:qt,action:"pan"},{buttons:qt|fs,action:"orbit"},{buttons:qt|je,action:"orbit"}]},{id:"nx",label:"Siemens NX",wheelZoomsOut:!0,hint:"middle orbit · Shift+middle pan · Ctrl+middle zoom · scroll (up = out)",bindings:[{buttons:qt,action:"orbit"},{buttons:qt,shift:!0,action:"pan"},{buttons:qt|je,action:"pan"},{buttons:qt,ctrl:!0,action:"zoom"},{buttons:qt|fs,action:"zoom"}]},{id:"onshape",label:"Onshape",hint:"right-drag orbit · middle pan · scroll zoom",bindings:[{buttons:je,action:"orbit"},{buttons:qt,action:"pan"},{buttons:je,ctrl:!0,action:"pan"}]},{id:"rhino",label:"Rhino",hint:"right-drag orbit · Shift+right pan · Ctrl+right zoom",bindings:[{buttons:je,action:"orbit"},{buttons:je,shift:!0,action:"pan"},{buttons:je,ctrl:!0,action:"zoom"},{buttons:qt,action:"pan"}]},{id:"sketchup",label:"SketchUp",hint:"middle orbit · Shift+middle pan · scroll zoom",bindings:[{buttons:qt,action:"orbit"},{buttons:qt,shift:!0,action:"pan"}]},{id:"solidedge",label:"Solid Edge",hint:"middle orbit · Shift+middle pan · Alt+middle zoom",bindings:[{buttons:qt,action:"orbit"},{buttons:qt,shift:!0,action:"pan"},{buttons:qt,alt:!0,action:"zoom"}]},{id:"solidworks",label:"SolidWorks",wheelZoomsOut:!0,hint:"middle orbit · Ctrl+middle pan · Shift+middle zoom · scroll (up = out)",bindings:[{buttons:qt,action:"orbit"},{buttons:qt,ctrl:!0,action:"pan"},{buttons:qt,shift:!0,action:"zoom"}]},{id:"tinkercad",label:"Tinkercad",hint:"right-drag orbit · middle pan · scroll zoom",bindings:[{buttons:je,action:"orbit"},{buttons:fs,ctrl:!0,action:"orbit"},{buttons:qt,action:"pan"},{buttons:je,shift:!0,action:"pan"}]}],$x=new TextDecoder;function Kx(i){const t=i instanceof Uint8Array?i:new Uint8Array(i);return Bd(t)?Qx(t):Jx($x.decode(t))}function Bd(i){if(i.length<84)return!1;const e=new DataView(i.buffer,i.byteOffset,i.byteLength).getUint32(80,!0);return i.length===84+e*50}function Qx(i){const t=new DataView(i.buffer,i.byteOffset,i.byteLength),e=t.getUint32(80,!0),n=new Float64Array(e*9);let s=84;for(let r=0;r<e;r++){const o=r*9;for(let a=0;a<9;a++)n[o+a]=t.getFloat32(s+12+a*4,!0);s+=50}return{positions:n,triangleCount:e}}function Jx(i){const t=[],e=String.raw`([-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?)`,n=new RegExp(String.raw`vertex\s+${e}\s+${e}\s+${e}`,"g");let s;for(;(s=n.exec(i))!==null;)t.push(parseFloat(s[1]),parseFloat(s[2]),parseFloat(s[3]));const r=Float64Array.from(t);return{positions:r,triangleCount:r.length/9}}function tv(i,t="meshStep binary STL"){const e=i.indices.length/3,n=new Uint8Array(84+e*50),s=new DataView(n.buffer);new TextEncoder().encodeInto(t.slice(0,79),n.subarray(0,79)),s.setUint32(80,e,!0);let r=84;const o=i.positions,a=i.indices;for(let l=0;l<e;l++){const c=a[l*3]*3,d=a[l*3+1]*3,h=a[l*3+2]*3,u=o[c],p=o[c+1],g=o[c+2],_=o[d],m=o[d+1],f=o[d+2],v=o[h],x=o[h+1],y=o[h+2],E=_-u,b=m-p,w=f-g,A=v-u,S=x-p,M=y-g;let P=b*M-w*S,D=w*A-E*M,I=E*S-b*A;const N=Math.hypot(P,D,I)||1;P/=N,D/=N,I/=N,s.setFloat32(r,P,!0),s.setFloat32(r+4,D,!0),s.setFloat32(r+8,I,!0),s.setFloat32(r+12,u,!0),s.setFloat32(r+16,p,!0),s.setFloat32(r+20,g,!0),s.setFloat32(r+24,_,!0),s.setFloat32(r+28,m,!0),s.setFloat32(r+32,f,!0),s.setFloat32(r+36,v,!0),s.setFloat32(r+40,x,!0),s.setFloat32(r+44,y,!0),s.setUint16(r+48,0,!0),r+=50}return n}function ev(i){const t=(e,n)=>{let s="";for(let r=0;r+n<=e.length;r+=n)s+=String.fromCodePoint(parseInt(e.slice(r,r+n),16));return s};return i.replace(/\\X2\\([0-9A-Fa-f]+)\\X0\\/g,(e,n)=>t(n,4)).replace(/\\X4\\([0-9A-Fa-f]+)\\X0\\/g,(e,n)=>t(n,8)).replace(/\\X\\([0-9A-Fa-f]{2})/g,(e,n)=>String.fromCharCode(parseInt(n,16))).replace(/\\S\\(.)/g,(e,n)=>n)}function _c(i,t){const e=i[t];if(!e)return[null,t];if(e.kind==="str")return[ev(e.text),t+1];if(e.kind==="num"||e.kind==="enum")return[e.text,t+1];if(e.kind==="lparen"){const n=[];for(t++;i[t]&&i[t].kind!=="rparen"&&i[t].kind!=="eof";){let s;[s,t]=_c(i,t),n.push(s),i[t]?.kind==="comma"&&t++}return i[t]?.kind==="rparen"&&t++,[n,t]}if(e.kind==="kw"&&i[t+1]?.kind==="lparen"){const[,n]=_c(i,t+1);return[null,n]}return[null,t+1]}function kn(i){if(i==null)return;if(typeof i=="string")return i.trim()||void 0;const t=i.map(kn).filter(e=>!!e);return t.length?t.join(", "):void 0}function nv(i){const t=i.toUpperCase();if(t.includes("AP242")||t.includes("MANAGED_MODEL_BASED"))return"AP242";if(t.includes("AUTOMOTIVE_DESIGN"))return"AP214";if(t.includes("CONFIG_CONTROL_DESIGN"))return"AP203";const e=t.match(/10303\s+(\d{3})/);if(e)return`AP${e[1]}`;const n=t.match(/AP(\d{3})/);return n?`AP${n[1]}`:i.split(/[ {]/)[0]||i}function iv(i){try{const t=i.indexOf("HEADER;");if(t<0)return{};const e=i.indexOf("ENDSEC;",t),n=i.slice(t+7,e<0?void 0:e),s=jx(n),r=new Map;let o=0;for(;s[o]&&s[o].kind!=="eof";){const h=s[o];if(h.kind==="kw"&&s[o+1]?.kind==="lparen"){const[u,p]=_c(s,o+1);Array.isArray(u)&&r.set(h.text.toUpperCase(),u),o=p;continue}o++}const a=r.get("FILE_NAME")??[],l=r.get("FILE_DESCRIPTION")??[],c=r.get("FILE_SCHEMA")??[],d={description:kn(l[0]),name:kn(a[0]),timeStamp:kn(a[1]),author:kn(a[2]),organization:kn(a[3]),preprocessor:kn(a[4]),originatingSystem:kn(a[5]),schema:kn(c[0])};return d.schema&&(d.schemaLabel=nv(d.schema)),d}catch{return{}}}const wu=i=>{const t=Math.floor(Math.log10(i)),e=i/10**t;return(e<1.5?1:e<3.5?2:e<7.5?5:10)*10**t},Tu=(i,t,e)=>Math.min(e,Math.max(t,i));function sv(i){const t=i<=100?i*1e-4:.01*2**Math.log10(i/100);return{surfaceDeviation:wu(Tu(t,.001,.1)),maxEdge:wu(Tu(i*.01,.1,100))}}const Au={type:"change"},Xc={type:"start"},zd={type:"end"},fo=new ca,Cu=new Sn,rv=Math.cos(70*Ep.DEG2RAD),Te=new R,Ze=2*Math.PI,ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ol=1e-6;class ov extends Dd{constructor(t,e=null){super(t,e),this.state=ae.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ps.ROTATE,MIDDLE:Ps.DOLLY,RIGHT:Ps.PAN},this.touches={ONE:Ts.ROTATE,TWO:Ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new ve,this._lastTargetPosition=new R,this._quat=new ve().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qh,this._sphericalDelta=new Qh,this._scale=1,this._panOffset=new R,this._rotateStart=new wt,this._rotateEnd=new wt,this._rotateDelta=new wt,this._panStart=new wt,this._panEnd=new wt,this._panDelta=new wt,this._dollyStart=new wt,this._dollyEnd=new wt,this._dollyDelta=new wt,this._dollyDirection=new R,this._mouse=new wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lv.bind(this),this._onPointerDown=av.bind(this),this._onPointerUp=cv.bind(this),this._onContextMenu=gv.bind(this),this._onMouseWheel=dv.bind(this),this._onKeyDown=fv.bind(this),this._onTouchStart=pv.bind(this),this._onTouchMove=mv.bind(this),this._onMouseDown=hv.bind(this),this._onMouseMove=uv.bind(this),this._interceptControlDown=_v.bind(this),this._interceptControlUp=xv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Au),this.update(),this.state=ae.NONE}update(t=null){const e=this.object.position;Te.copy(e).sub(this.target),Te.applyQuaternion(this._quat),this._spherical.setFromVector3(Te),this.autoRotate&&this.state===ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ze:n>Math.PI&&(n-=Ze),s<-Math.PI?s+=Ze:s>Math.PI&&(s-=Ze),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Te.setFromSpherical(this._spherical),Te.applyQuaternion(this._quatInverse),e.copy(this.target).add(Te),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Te.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Te.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(fo.origin.copy(this.object.position),fo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fo.direction))<rv?this.object.lookAt(this.target):(Cu.setFromNormalAndCoplanarPoint(this.object.up,this.target),fo.intersectPlane(Cu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ol||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ol||this._lastTargetPosition.distanceToSquared(this.target)>ol?(this.dispatchEvent(Au),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ze/60*this.autoRotateSpeed*t:Ze/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Te.setFromMatrixColumn(e,0),Te.multiplyScalar(-t),this._panOffset.add(Te)}_panUp(t,e){this.screenSpacePanning===!0?Te.setFromMatrixColumn(e,1):(Te.setFromMatrixColumn(e,0),Te.crossVectors(this.object.up,Te)),Te.multiplyScalar(t),this._panOffset.add(Te)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Te.copy(s).sub(this.target);let r=Te.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ze*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ze*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ze*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ze*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new wt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function av(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function lv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function cv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zd),this.state=ae.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function hv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ps.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ae.DOLLY;break;case Ps.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ae.ROTATE}break;case Ps.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ae.PAN}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(Xc)}function uv(i){switch(this.state){case ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function dv(i){this.enabled===!1||this.enableZoom===!1||this.state!==ae.NONE||(i.preventDefault(),this.dispatchEvent(Xc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(zd))}function fv(i){this.enabled!==!1&&this._handleKeyDown(i)}function pv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ts.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ae.TOUCH_ROTATE;break;case Ts.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ae.TOUCH_PAN;break;default:this.state=ae.NONE}break;case 2:switch(this.touches.TWO){case Ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ae.TOUCH_DOLLY_PAN;break;case Ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ae.TOUCH_DOLLY_ROTATE;break;default:this.state=ae.NONE}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(Xc)}function mv(i){switch(this._trackPointer(i),this.state){case ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ae.NONE}}function gv(i){this.enabled!==!1&&i.preventDefault()}function _v(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class vv extends ue{constructor(t,e){super(),this.isViewHelper=!0,this.animating=!1,this.center=new R;const n=new kt("#ff4466"),s=new kt("#88ff44"),r=new kt("#4488ff"),o=new kt("#000000"),a={},l=[],c=new ua,d=new wt,h=new ue,u=new ha(-2,2,2,-2,0,4);u.position.set(0,0,2);const p=new Fe(.04,.04,.8,5).rotateZ(-Math.PI/2).translate(.4,0,0),g=new ct(p,yt(n)),_=new ct(p,yt(s)),m=new ct(p,yt(r));_.rotation.z=Math.PI/2,m.rotation.y=-Math.PI/2,this.add(g),this.add(m),this.add(_);const f=Dt(n),v=Dt(s),x=Dt(r),y=Dt(o),E=new us(f),b=new us(v),w=new us(x),A=new us(y),S=new us(y),M=new us(y);E.position.x=1,b.position.y=1,w.position.z=1,A.position.x=-1,S.position.y=-1,M.position.z=-1,A.material.opacity=.2,S.material.opacity=.2,M.material.opacity=.2,E.userData.type="posX",b.userData.type="posY",w.userData.type="posZ",A.userData.type="negX",S.userData.type="negY",M.userData.type="negZ",this.add(E),this.add(b),this.add(w),this.add(A),this.add(S),this.add(M),l.push(E),l.push(b),l.push(w),l.push(A),l.push(S),l.push(M);const P=new R,D=128,I=2*Math.PI;this.render=function(F){this.quaternion.copy(t.quaternion).invert(),this.updateMatrixWorld(),P.set(0,0,1),P.applyQuaternion(t.quaternion);const V=e.offsetWidth-D;F.clearDepth(),F.getViewport(W),F.setViewport(V,0,D,D),F.render(this,u),F.setViewport(W.x,W.y,W.z,W.w)};const N=new R,k=new ve,H=new ve,$=new ve,W=new me;let J=0;this.handleClick=function(F){if(this.animating===!0)return!1;const V=e.getBoundingClientRect(),K=V.left+(e.offsetWidth-D),Y=V.top+(e.offsetHeight-D);d.x=(F.clientX-K)/(V.right-K)*2-1,d.y=-((F.clientY-Y)/(V.bottom-Y))*2+1,c.setFromCamera(d,u);const tt=c.intersectObjects(l);if(tt.length>0){const ot=tt[0].object;return ht(ot,this.center),this.animating=!0,!0}else return!1},this.setLabels=function(F,V,K){a.labelX=F,a.labelY=V,a.labelZ=K,it()},this.setLabelStyle=function(F,V,K){a.font=F,a.color=V,a.radius=K,it()},this.update=function(F){const V=F*I;H.rotateTowards($,V),t.position.set(0,0,1).applyQuaternion(H).multiplyScalar(J).add(this.center),t.quaternion.rotateTowards(k,V),H.angleTo($)===0&&(this.animating=!1)},this.dispose=function(){p.dispose(),g.material.dispose(),_.material.dispose(),m.material.dispose(),E.material.map.dispose(),b.material.map.dispose(),w.material.map.dispose(),A.material.map.dispose(),S.material.map.dispose(),M.material.map.dispose(),E.material.dispose(),b.material.dispose(),w.material.dispose(),A.material.dispose(),S.material.dispose(),M.material.dispose()};function ht(F,V){switch(F.userData.type){case"posX":N.set(1,0,0),k.setFromEuler(new De(0,Math.PI*.5,0));break;case"posY":N.set(0,1,0),k.setFromEuler(new De(-Math.PI*.5,0,0));break;case"posZ":N.set(0,0,1),k.setFromEuler(new De);break;case"negX":N.set(-1,0,0),k.setFromEuler(new De(0,-Math.PI*.5,0));break;case"negY":N.set(0,-1,0),k.setFromEuler(new De(Math.PI*.5,0,0));break;case"negZ":N.set(0,0,-1),k.setFromEuler(new De(0,Math.PI,0));break;default:console.error("ViewHelper: Invalid axis.")}J=t.position.distanceTo(V),N.multiplyScalar(J).add(V),h.position.copy(V),h.lookAt(t.position),H.copy(h.quaternion),h.lookAt(N),$.copy(h.quaternion)}function yt(F){return new pn({color:F,toneMapped:!1})}function Dt(F,V){const{font:K="24px Arial",color:Y="#000000",radius:tt=14}=a,ut=document.createElement("canvas");ut.width=64,ut.height=64;const ot=ut.getContext("2d");ot.beginPath(),ot.arc(32,32,tt,0,2*Math.PI),ot.closePath(),ot.fillStyle=F.getStyle(),ot.fill(),V&&(ot.font=K,ot.textAlign="center",ot.fillStyle=Y,ot.fillText(V,32,41));const Rt=new em(ut);return Rt.colorSpace=We,new Ad({map:Rt,toneMapped:!1})}function it(){E.material.map.dispose(),b.material.map.dispose(),w.material.map.dispose(),E.material.dispose(),b.material.dispose(),w.material.dispose(),E.material=Dt(n,a.labelX),b.material=Dt(s,a.labelY),w.material=Dt(r,a.labelZ)}}}class yv extends ue{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new wt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const ps=new R,Ru=new jt,Pu=new jt,Lu=new R,Du=new R;class Mv{constructor(t={}){const e=this;let n,s,r,o;const a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:s}},this.render=function(g,_){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),Ru.copy(_.matrixWorldInverse),Pu.multiplyMatrices(_.projectionMatrix,Ru),d(g,g,_),p(g)},this.setSize=function(g,_){n=g,s=_,r=n/2,o=s/2,l.style.width=g+"px",l.style.height=_+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let _=0,m=g.children.length;_<m;_++)c(g.children[_])}function d(g,_,m){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){ps.setFromMatrixPosition(g.matrixWorld),ps.applyMatrix4(Pu);const f=ps.z>=-1&&ps.z<=1&&g.layers.test(m.layers)===!0,v=g.element;v.style.display=f===!0?"":"none",f===!0&&(g.onBeforeRender(e,_,m),v.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(ps.x*r+r)+"px,"+(-ps.y*o+o)+"px)",v.parentNode!==l&&l.appendChild(v),g.onAfterRender(e,_,m));const x={distanceToCameraSquared:h(m,g)};a.objects.set(g,x)}for(let f=0,v=g.children.length;f<v;f++)d(g.children[f],_,m)}function h(g,_){return Lu.setFromMatrixPosition(g.matrixWorld),Du.setFromMatrixPosition(_.matrixWorld),Lu.distanceToSquared(Du)}function u(g){const _=[];return g.traverseVisible(function(m){m.isCSS2DObject&&_.push(m)}),_}function p(g){const _=u(g).sort(function(f,v){if(f.renderOrder!==v.renderOrder)return v.renderOrder-f.renderOrder;const x=a.objects.get(f).distanceToCameraSquared,y=a.objects.get(v).distanceToCameraSquared;return x-y}),m=_.length;for(let f=0,v=_.length;f<v;f++)_[f].element.style.zIndex=m-f}}}const kd=0,Sv=1,bv=2,Iu=2,al=1.25,Uu=1,yr=32,fa=65535,Ev=Math.pow(2,-24),ll=Symbol("SKIP_GENERATION");function wv(i){return i.index?i.index.count:i.attributes.position.count}function qs(i){return wv(i)/3}function Tv(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function Av(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=Tv(e,n);i.setIndex(new Me(s,1));for(let r=0;r<e;r++)s[r]=r}}function Hd(i,t){const e=qs(i),n=t||i.drawRange,s=n.start/3,r=(n.start+n.count)/3,o=Math.max(0,s),a=Math.min(e,r)-o;return[{offset:Math.floor(o),count:Math.floor(a)}]}function Vd(i,t){if(!i.groups||!i.groups.length)return Hd(i,t);const e=[],n=new Set,s=t||i.drawRange,r=s.start/3,o=(s.start+s.count)/3;for(const l of i.groups){const c=l.start/3,d=(l.start+l.count)/3;n.add(Math.max(r,c)),n.add(Math.min(o,d))}const a=Array.from(n.values()).sort((l,c)=>l-c);for(let l=0;l<a.length-1;l++){const c=a[l],d=a[l+1];e.push({offset:Math.floor(c),count:Math.floor(d-c)})}return e}function Cv(i,t){const e=qs(i),n=Vd(i,t).sort((o,a)=>o.offset-a.offset),s=n[n.length-1];s.count=Math.min(e-s.offset,s.count);let r=0;return n.forEach(({count:o})=>r+=o),e!==r}function cl(i,t,e,n,s){let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,d=-1/0,h=1/0,u=1/0,p=1/0,g=-1/0,_=-1/0,m=-1/0;for(let f=t*6,v=(t+e)*6;f<v;f+=6){const x=i[f+0],y=i[f+1],E=x-y,b=x+y;E<r&&(r=E),b>l&&(l=b),x<h&&(h=x),x>g&&(g=x);const w=i[f+2],A=i[f+3],S=w-A,M=w+A;S<o&&(o=S),M>c&&(c=M),w<u&&(u=w),w>_&&(_=w);const P=i[f+4],D=i[f+5],I=P-D,N=P+D;I<a&&(a=I),N>d&&(d=N),P<p&&(p=P),P>m&&(m=P)}n[0]=r,n[1]=o,n[2]=a,n[3]=l,n[4]=c,n[5]=d,s[0]=h,s[1]=u,s[2]=p,s[3]=g,s[4]=_,s[5]=m}function Rv(i,t=null,e=null,n=null){const s=i.attributes.position,r=i.index?i.index.array:null,o=qs(i),a=s.normalized;let l;t===null?(l=new Float32Array(o*6),e=0,n=o):(l=t,e=e||0,n=n||o);const c=s.array,d=s.offset||0;let h=3;s.isInterleavedBufferAttribute&&(h=s.data.stride);const u=["getX","getY","getZ"];for(let p=e;p<e+n;p++){const g=p*3,_=p*6;let m=g+0,f=g+1,v=g+2;r&&(m=r[m],f=r[f],v=r[v]),a||(m=m*h+d,f=f*h+d,v=v*h+d);for(let x=0;x<3;x++){let y,E,b;a?(y=s[u[x]](m),E=s[u[x]](f),b=s[u[x]](v)):(y=c[m+x],E=c[f+x],b=c[v+x]);let w=y;E<w&&(w=E),b<w&&(w=b);let A=y;E>A&&(A=E),b>A&&(A=b);const S=(A-w)/2,M=x*2;l[_+M+0]=w+S,l[_+M+1]=S+(Math.abs(w)+S)*Ev}}return l}function xe(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function Fu(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const s=i[n+3]-i[n];s>e&&(e=s,t=n)}return t}function Nu(i,t){t.set(i)}function Ou(i,t,e){let n,s;for(let r=0;r<3;r++){const o=r+3;n=i[r],s=t[r],e[r]=n<s?n:s,n=i[o],s=t[o],e[o]=n>s?n:s}}function po(i,t,e){for(let n=0;n<3;n++){const s=t[i+2*n],r=t[i+2*n+1],o=s-r,a=s+r;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function sr(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}const Hn=32,Pv=(i,t)=>i.candidate-t.candidate,ri=new Array(Hn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),mo=new Float32Array(6);function Lv(i,t,e,n,s,r){let o=-1,a=0;if(r===kd)o=Fu(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(r===Sv)o=Fu(i),o!==-1&&(a=Dv(e,n,s,o));else if(r===bv){const l=sr(i);let c=al*s;const d=n*6,h=(n+s)*6;for(let u=0;u<3;u++){const p=t[u],m=(t[u+3]-p)/Hn;if(s<Hn/4){const f=[...ri];f.length=s;let v=0;for(let y=d;y<h;y+=6,v++){const E=f[v];E.candidate=e[y+2*u],E.count=0;const{bounds:b,leftCacheBounds:w,rightCacheBounds:A}=E;for(let S=0;S<3;S++)A[S]=1/0,A[S+3]=-1/0,w[S]=1/0,w[S+3]=-1/0,b[S]=1/0,b[S+3]=-1/0;po(y,e,b)}f.sort(Pv);let x=s;for(let y=0;y<x;y++){const E=f[y];for(;y+1<x&&f[y+1].candidate===E.candidate;)f.splice(y+1,1),x--}for(let y=d;y<h;y+=6){const E=e[y+2*u];for(let b=0;b<x;b++){const w=f[b];E>=w.candidate?po(y,e,w.rightCacheBounds):(po(y,e,w.leftCacheBounds),w.count++)}}for(let y=0;y<x;y++){const E=f[y],b=E.count,w=s-E.count,A=E.leftCacheBounds,S=E.rightCacheBounds;let M=0;b!==0&&(M=sr(A)/l);let P=0;w!==0&&(P=sr(S)/l);const D=Uu+al*(M*b+P*w);D<c&&(o=u,c=D,a=E.candidate)}}else{for(let x=0;x<Hn;x++){const y=ri[x];y.count=0,y.candidate=p+m+x*m;const E=y.bounds;for(let b=0;b<3;b++)E[b]=1/0,E[b+3]=-1/0}for(let x=d;x<h;x+=6){let b=~~((e[x+2*u]-p)/m);b>=Hn&&(b=Hn-1);const w=ri[b];w.count++,po(x,e,w.bounds)}const f=ri[Hn-1];Nu(f.bounds,f.rightCacheBounds);for(let x=Hn-2;x>=0;x--){const y=ri[x],E=ri[x+1];Ou(y.bounds,E.rightCacheBounds,y.rightCacheBounds)}let v=0;for(let x=0;x<Hn-1;x++){const y=ri[x],E=y.count,b=y.bounds,A=ri[x+1].rightCacheBounds;E!==0&&(v===0?Nu(b,mo):Ou(b,mo,mo)),v+=E;let S=0,M=0;v!==0&&(S=sr(mo)/l);const P=s-v;P!==0&&(M=sr(A)/l);const D=Uu+al*(S*v+M*P);D<c&&(o=u,c=D,a=y.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function Dv(i,t,e,n){let s=0;for(let r=t,o=t+e;r<o;r++)s+=i[r*6+n*2];return s/e}class hl{constructor(){this.boundingData=new Float32Array(6)}}function Iv(i,t,e,n,s,r){let o=n,a=n+s-1;const l=r.pos,c=r.axis*2;for(;;){for(;o<=a&&e[o*6+c]<l;)o++;for(;o<=a&&e[a*6+c]>=l;)a--;if(o<a){for(let d=0;d<3;d++){let h=t[o*3+d];t[o*3+d]=t[a*3+d],t[a*3+d]=h}for(let d=0;d<6;d++){let h=e[o*6+d];e[o*6+d]=e[a*6+d],e[a*6+d]=h}o++,a--}else return o}}function Uv(i,t,e,n,s,r){let o=n,a=n+s-1;const l=r.pos,c=r.axis*2;for(;;){for(;o<=a&&e[o*6+c]<l;)o++;for(;o<=a&&e[a*6+c]>=l;)a--;if(o<a){let d=i[o];i[o]=i[a],i[a]=d;for(let h=0;h<6;h++){let u=e[o*6+h];e[o*6+h]=e[a*6+h],e[a*6+h]=u}o++,a--}else return o}}function Ke(i,t){return t[i+15]===65535}function rn(i,t){return t[i+6]}function hn(i,t){return t[i+14]}function un(i){return i+8}function dn(i,t){return t[i+6]}function Gd(i,t){return t[i+7]}let Wd,mr,ko,Xd;const Fv=Math.pow(2,32);function xc(i){return"count"in i?1:1+xc(i.left)+xc(i.right)}function Nv(i,t,e){return Wd=new Float32Array(e),mr=new Uint32Array(e),ko=new Uint16Array(e),Xd=new Uint8Array(e),vc(i,t)}function vc(i,t){const e=i/4,n=i/2,s="count"in t,r=t.boundingData;for(let o=0;o<6;o++)Wd[e+o]=r[o];if(s)if(t.buffer){const o=t.buffer;Xd.set(new Uint8Array(o),i);for(let a=i,l=i+o.byteLength;a<l;a+=yr){const c=a/2;Ke(c,ko)||(mr[a/4+6]+=e)}return i+o.byteLength}else{const o=t.offset,a=t.count;return mr[e+6]=o,ko[n+14]=a,ko[n+15]=fa,i+yr}else{const o=t.left,a=t.right,l=t.splitAxis;let c;if(c=vc(i+yr,o),c/4>Fv)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return mr[e+6]=c/4,c=vc(c,a),mr[e+7]=l,c}}function Ov(i,t){const e=(i.index?i.index.count:i.attributes.position.count)/3,n=e>2**16,s=n?4:2,r=t?new SharedArrayBuffer(e*s):new ArrayBuffer(e*s),o=n?new Uint32Array(r):new Uint16Array(r);for(let a=0,l=o.length;a<l;a++)o[a]=a;return o}function Bv(i,t,e,n,s){const{maxDepth:r,verbose:o,maxLeafTris:a,strategy:l,onProgress:c,indirect:d}=s,h=i._indirectBuffer,u=i.geometry,p=u.index?u.index.array:null,g=d?Uv:Iv,_=qs(u),m=new Float32Array(6);let f=!1;const v=new hl;return cl(t,e,n,v.boundingData,m),y(v,e,n,m),v;function x(E){c&&c(E/_)}function y(E,b,w,A=null,S=0){if(!f&&S>=r&&(f=!0,o&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(u))),w<=a||S>=r)return x(b+w),E.offset=b,E.count=w,E;const M=Lv(E.boundingData,A,t,b,w,l);if(M.axis===-1)return x(b+w),E.offset=b,E.count=w,E;const P=g(h,p,t,b,w,M);if(P===b||P===b+w)x(b+w),E.offset=b,E.count=w;else{E.splitAxis=M.axis;const D=new hl,I=b,N=P-b;E.left=D,cl(t,I,N,D.boundingData,m),y(D,I,N,m,S+1);const k=new hl,H=P,$=w-N;E.right=k,cl(t,H,$,k.boundingData,m),y(k,H,$,m,S+1)}return E}}function zv(i,t){const e=i.geometry;t.indirect&&(i._indirectBuffer=Ov(e,t.useSharedArrayBuffer),Cv(e,t.range)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||Av(e,t);const n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=Rv(e),r=t.indirect?Hd(e,t.range):Vd(e,t.range);i._roots=r.map(o=>{const a=Bv(i,s,o.offset,o.count,t),l=xc(a),c=new n(yr*l);return Nv(0,a,c),c})}class Qn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,s=-1/0;for(let r=0,o=t.length;r<o;r++){const l=t[r][e];n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}setFromPoints(t,e){let n=1/0,s=-1/0;for(let r=0,o=e.length;r<o;r++){const a=e[r],l=t.dot(a);n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}}Qn.prototype.setFromBox=(function(){const i=new R;return function(e,n){const s=n.min,r=n.max;let o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let d=0;d<=1;d++){i.x=s.x*l+r.x*(1-l),i.y=s.y*c+r.y*(1-c),i.z=s.z*d+r.z*(1-d);const h=e.dot(i);o=Math.min(h,o),a=Math.max(h,a)}this.min=o,this.max=a}})();const kv=(function(){const i=new R,t=new R,e=new R;return function(s,r,o){const a=s.start,l=i,c=r.start,d=t;e.subVectors(a,c),i.subVectors(s.end,s.start),t.subVectors(r.end,r.start);const h=e.dot(d),u=d.dot(l),p=d.dot(d),g=e.dot(l),m=l.dot(l)*p-u*u;let f,v;m!==0?f=(h*u-g*p)/m:f=0,v=(h+f*u)/p,o.x=f,o.y=v}})(),Yc=(function(){const i=new wt,t=new R,e=new R;return function(s,r,o,a){kv(s,r,i);let l=i.x,c=i.y;if(l>=0&&l<=1&&c>=0&&c<=1){s.at(l,o),r.at(c,a);return}else if(l>=0&&l<=1){c<0?r.at(0,a):r.at(1,a),s.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let d;l<0?d=s.start:d=s.end;let h;c<0?h=r.start:h=r.end;const u=t,p=e;if(s.closestPointToPoint(h,!0,t),r.closestPointToPoint(d,!0,e),u.distanceToSquared(h)<=p.distanceToSquared(d)){o.copy(u),a.copy(h);return}else{o.copy(d),a.copy(p);return}}}})(),Hv=(function(){const i=new R,t=new R,e=new Sn,n=new Zn;return function(r,o){const{radius:a,center:l}=r,{a:c,b:d,c:h}=o;if(n.start=c,n.end=d,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a||(n.start=c,n.end=h,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a)||(n.start=d,n.end=h,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a))return!0;const _=o.getPlane(e);if(Math.abs(_.distanceToPoint(l))<=a){const f=_.projectPoint(l,t);if(o.containsPoint(f))return!0}return!1}})(),Vv=1e-15;function ul(i){return Math.abs(i)<Vv}class An extends Ae{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new R),this.satBounds=new Array(4).fill().map(()=>new Qn),this.points=[this.a,this.b,this.c],this.sphere=new Xs,this.plane=new Sn,this.needsUpdate=!0}intersectsSphere(t){return Hv(t,this)}update(){const t=this.a,e=this.b,n=this.c,s=this.points,r=this.satAxes,o=this.satBounds,a=r[0],l=o[0];this.getNormal(a),l.setFromPoints(a,s);const c=r[1],d=o[1];c.subVectors(t,e),d.setFromPoints(c,s);const h=r[2],u=o[2];h.subVectors(e,n),u.setFromPoints(h,s);const p=r[3],g=o[3];p.subVectors(n,t),g.setFromPoints(p,s),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}An.prototype.closestPointToSegment=(function(){const i=new R,t=new R,e=new Zn;return function(s,r=null,o=null){const{start:a,end:l}=s,c=this.points;let d,h=1/0;for(let u=0;u<3;u++){const p=(u+1)%3;e.start.copy(c[u]),e.end.copy(c[p]),Yc(e,s,i,t),d=i.distanceToSquared(t),d<h&&(h=d,r&&r.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),d=a.distanceToSquared(i),d<h&&(h=d,r&&r.copy(i),o&&o.copy(a)),this.closestPointToPoint(l,i),d=l.distanceToSquared(i),d<h&&(h=d,r&&r.copy(i),o&&o.copy(l)),Math.sqrt(h)}})();An.prototype.intersectsTriangle=(function(){const i=new An,t=new Array(3),e=new Array(3),n=new Qn,s=new Qn,r=new R,o=new R,a=new R,l=new R,c=new R,d=new Zn,h=new Zn,u=new Zn,p=new R;function g(_,m,f){const v=_.points;let x=0,y=-1;for(let E=0;E<3;E++){const{start:b,end:w}=d;b.copy(v[E]),w.copy(v[(E+1)%3]),d.delta(o);const A=ul(m.distanceToPoint(b));if(ul(m.normal.dot(o))&&A){f.copy(d),x=2;break}const S=m.intersectLine(d,p);if(!S&&A&&p.copy(b),(S||A)&&!ul(p.distanceTo(w))){if(x<=1)(x===1?f.start:f.end).copy(p),A&&(y=x);else if(x>=2){(y===1?f.start:f.end).copy(p),x=2;break}if(x++,x===2&&y===-1)break}}return x}return function(m,f=null,v=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(i.copy(m),i.update(),m=i);const x=this.plane,y=m.plane;if(Math.abs(x.normal.dot(y.normal))>1-1e-10){const E=this.satBounds,b=this.satAxes;e[0]=m.a,e[1]=m.b,e[2]=m.c;for(let S=0;S<4;S++){const M=E[S],P=b[S];if(n.setFromPoints(P,e),M.isSeparated(n))return!1}const w=m.satBounds,A=m.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let S=0;S<4;S++){const M=w[S],P=A[S];if(n.setFromPoints(P,t),M.isSeparated(n))return!1}for(let S=0;S<4;S++){const M=b[S];for(let P=0;P<4;P++){const D=A[P];if(r.crossVectors(M,D),n.setFromPoints(r,t),s.setFromPoints(r,e),n.isSeparated(s))return!1}}return f&&(v||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),f.start.set(0,0,0),f.end.set(0,0,0)),!0}else{const E=g(this,y,h);if(E===1&&m.containsPoint(h.end))return f&&(f.start.copy(h.end),f.end.copy(h.end)),!0;if(E!==2)return!1;const b=g(m,x,u);if(b===1&&this.containsPoint(u.end))return f&&(f.start.copy(u.end),f.end.copy(u.end)),!0;if(b!==2)return!1;if(h.delta(a),u.delta(l),a.dot(l)<0){let I=u.start;u.start=u.end,u.end=I}const w=h.start.dot(a),A=h.end.dot(a),S=u.start.dot(a),M=u.end.dot(a),P=A<S,D=w<M;return w!==M&&S!==A&&P===D?!1:(f&&(c.subVectors(h.start,u.start),c.dot(a)>0?f.start.copy(h.start):f.start.copy(u.start),c.subVectors(h.end,u.end),c.dot(a)<0?f.end.copy(h.end):f.end.copy(u.end)),!0)}}})();An.prototype.distanceToPoint=(function(){const i=new R;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();An.prototype.distanceToTriangle=(function(){const i=new R,t=new R,e=["a","b","c"],n=new Zn,s=new Zn;return function(o,a=null,l=null){const c=a||l?n:null;if(this.intersectsTriangle(o,c))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let d=1/0;for(let h=0;h<3;h++){let u;const p=e[h],g=o[p];this.closestPointToPoint(g,i),u=g.distanceToSquared(i),u<d&&(d=u,a&&a.copy(i),l&&l.copy(g));const _=this[p];o.closestPointToPoint(_,i),u=_.distanceToSquared(i),u<d&&(d=u,a&&a.copy(_),l&&l.copy(i))}for(let h=0;h<3;h++){const u=e[h],p=e[(h+1)%3];n.set(this[u],this[p]);for(let g=0;g<3;g++){const _=e[g],m=e[(g+1)%3];s.set(o[_],o[m]),Yc(n,s,i,t);const f=i.distanceToSquared(t);f<d&&(d=f,a&&a.copy(i),l&&l.copy(t))}}return Math.sqrt(d)}})();class Ye{constructor(t,e,n){this.isOrientedBox=!0,this.min=new R,this.max=new R,this.matrix=new jt,this.invMatrix=new jt,this.points=new Array(8).fill().map(()=>new R),this.satAxes=new Array(3).fill().map(()=>new R),this.satBounds=new Array(3).fill().map(()=>new Qn),this.alignedSatBounds=new Array(3).fill().map(()=>new Qn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}Ye.prototype.update=(function(){return function(){const t=this.matrix,e=this.min,n=this.max,s=this.points;for(let c=0;c<=1;c++)for(let d=0;d<=1;d++)for(let h=0;h<=1;h++){const u=1*c|2*d|4*h,p=s[u];p.x=c?n.x:e.x,p.y=d?n.y:e.y,p.z=h?n.z:e.z,p.applyMatrix4(t)}const r=this.satBounds,o=this.satAxes,a=s[0];for(let c=0;c<3;c++){const d=o[c],h=r[c],u=1<<c,p=s[u];d.subVectors(a,p),h.setFromPoints(d,s)}const l=this.alignedSatBounds;l[0].setFromPointsField(s,"x"),l[1].setFromPointsField(s,"y"),l[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Ye.prototype.intersectsBox=(function(){const i=new Qn;return function(e){this.needsUpdate&&this.update();const n=e.min,s=e.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,a[0].isSeparated(i)||(i.min=n.y,i.max=s.y,a[1].isSeparated(i))||(i.min=n.z,i.max=s.z,a[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){const c=o[l],d=r[l];if(i.setFromBox(c,e),d.isSeparated(i))return!1}return!0}})();Ye.prototype.intersectsTriangle=(function(){const i=new An,t=new Array(3),e=new Qn,n=new Qn,s=new R;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);const a=this.satBounds,l=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let u=0;u<3;u++){const p=a[u],g=l[u];if(e.setFromPoints(g,t),p.isSeparated(e))return!1}const c=o.satBounds,d=o.satAxes,h=this.points;for(let u=0;u<3;u++){const p=c[u],g=d[u];if(e.setFromPoints(g,h),p.isSeparated(e))return!1}for(let u=0;u<3;u++){const p=l[u];for(let g=0;g<4;g++){const _=d[g];if(s.crossVectors(p,_),e.setFromPoints(s,t),n.setFromPoints(s,h),e.isSeparated(n))return!1}}return!0}})();Ye.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();Ye.prototype.distanceToPoint=(function(){const i=new R;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();Ye.prototype.distanceToBox=(function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new Zn),e=new Array(12).fill().map(()=>new Zn),n=new R,s=new R;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(s),this.closestPointToPoint(s,n),o.closestPointToPoint(n,s),l&&l.copy(n),c&&c.copy(s)),0;const d=a*a,h=o.min,u=o.max,p=this.points;let g=1/0;for(let m=0;m<8;m++){const f=p[m];s.copy(f).clamp(h,u);const v=f.distanceToSquared(s);if(v<g&&(g=v,l&&l.copy(f),c&&c.copy(s),v<d))return Math.sqrt(v)}let _=0;for(let m=0;m<3;m++)for(let f=0;f<=1;f++)for(let v=0;v<=1;v++){const x=(m+1)%3,y=(m+2)%3,E=f<<x|v<<y,b=1<<m|f<<x|v<<y,w=p[E],A=p[b];t[_].set(w,A);const M=i[m],P=i[x],D=i[y],I=e[_],N=I.start,k=I.end;N[M]=h[M],N[P]=f?h[P]:u[P],N[D]=v?h[D]:u[P],k[M]=u[M],k[P]=f?h[P]:u[P],k[D]=v?h[D]:u[P],_++}for(let m=0;m<=1;m++)for(let f=0;f<=1;f++)for(let v=0;v<=1;v++){s.x=m?u.x:h.x,s.y=f?u.y:h.y,s.z=v?u.z:h.z,this.closestPointToPoint(s,n);const x=s.distanceToSquared(n);if(x<g&&(g=x,l&&l.copy(n),c&&c.copy(s),x<d))return Math.sqrt(x)}for(let m=0;m<12;m++){const f=t[m];for(let v=0;v<12;v++){const x=e[v];Yc(f,x,n,s);const y=n.distanceToSquared(s);if(y<g&&(g=y,l&&l.copy(n),c&&c.copy(s),y<d))return Math.sqrt(y)}}return Math.sqrt(g)}})();class qc{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class Gv extends qc{constructor(){super(()=>new An)}}const fn=new Gv;class Wv{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const de=new Wv;let hi,Rs;const ms=[],go=new qc(()=>new ye);function Xv(i,t,e,n,s,r){hi=go.getPrimitive(),Rs=go.getPrimitive(),ms.push(hi,Rs),de.setBuffer(i._roots[t]);const o=yc(0,i.geometry,e,n,s,r);de.clearBuffer(),go.releasePrimitive(hi),go.releasePrimitive(Rs),ms.pop(),ms.pop();const a=ms.length;return a>0&&(Rs=ms[a-1],hi=ms[a-2]),o}function yc(i,t,e,n,s=null,r=0,o=0){const{float32Array:a,uint16Array:l,uint32Array:c}=de;let d=i*2;if(Ke(d,l)){const u=rn(i,c),p=hn(d,l);return xe(i,a,hi),n(u,p,!1,o,r+i,hi)}else{let M=function(D){const{uint16Array:I,uint32Array:N}=de;let k=D*2;for(;!Ke(k,I);)D=un(D),k=D*2;return rn(D,N)},P=function(D){const{uint16Array:I,uint32Array:N}=de;let k=D*2;for(;!Ke(k,I);)D=dn(D,N),k=D*2;return rn(D,N)+hn(k,I)};const u=un(i),p=dn(i,c);let g=u,_=p,m,f,v,x;if(s&&(v=hi,x=Rs,xe(g,a,v),xe(_,a,x),m=s(v),f=s(x),f<m)){g=p,_=u;const D=m;m=f,f=D,v=x}v||(v=hi,xe(g,a,v));const y=Ke(g*2,l),E=e(v,y,m,o+1,r+g);let b;if(E===Iu){const D=M(g),N=P(g)-D;b=n(D,N,!0,o+1,r+g,v)}else b=E&&yc(g,t,e,n,s,r,o+1);if(b)return!0;x=Rs,xe(_,a,x);const w=Ke(_*2,l),A=e(x,w,f,o+1,r+_);let S;if(A===Iu){const D=M(_),N=P(_)-D;S=n(D,N,!0,o+1,r+_,x)}else S=A&&yc(_,t,e,n,s,r,o+1);return!!S}}const rr=new R,dl=new R;function Yv(i,t,e={},n=0,s=1/0){const r=n*n,o=s*s;let a=1/0,l=null;if(i.shapecast({boundsTraverseOrder:d=>(rr.copy(t).clamp(d.min,d.max),rr.distanceToSquared(t)),intersectsBounds:(d,h,u)=>u<a&&u<o,intersectsTriangle:(d,h)=>{d.closestPointToPoint(t,rr);const u=t.distanceToSquared(rr);return u<a&&(dl.copy(rr),a=u,l=h),u<r}}),a===1/0)return null;const c=Math.sqrt(a);return e.point?e.point.copy(dl):e.point=dl.clone(),e.distance=c,e.faceIndex=l,e}const qv=parseInt(aa)>=169,Ri=new R,Pi=new R,Li=new R,_o=new wt,xo=new wt,vo=new wt,Bu=new R,zu=new R,ku=new R,or=new R;function Zv(i,t,e,n,s,r,o,a){let l;if(r===ke?l=i.intersectTriangle(n,e,t,!0,s):l=i.intersectTriangle(t,e,n,r!==Ie,s),l===null)return null;const c=i.origin.distanceTo(s);return c<o||c>a?null:{distance:c,point:s.clone()}}function jv(i,t,e,n,s,r,o,a,l,c,d){Ri.fromBufferAttribute(t,r),Pi.fromBufferAttribute(t,o),Li.fromBufferAttribute(t,a);const h=Zv(i,Ri,Pi,Li,or,l,c,d);if(h){const u=new R;Ae.getBarycoord(or,Ri,Pi,Li,u),n&&(_o.fromBufferAttribute(n,r),xo.fromBufferAttribute(n,o),vo.fromBufferAttribute(n,a),h.uv=Ae.getInterpolation(or,Ri,Pi,Li,_o,xo,vo,new wt)),s&&(_o.fromBufferAttribute(s,r),xo.fromBufferAttribute(s,o),vo.fromBufferAttribute(s,a),h.uv1=Ae.getInterpolation(or,Ri,Pi,Li,_o,xo,vo,new wt)),e&&(Bu.fromBufferAttribute(e,r),zu.fromBufferAttribute(e,o),ku.fromBufferAttribute(e,a),h.normal=Ae.getInterpolation(or,Ri,Pi,Li,Bu,zu,ku,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:r,b:o,c:a,normal:new R,materialIndex:0};Ae.getNormal(Ri,Pi,Li,p.normal),h.face=p,h.faceIndex=r,qv&&(h.barycoord=u)}return h}function pa(i,t,e,n,s,r,o){const a=n*3;let l=a+0,c=a+1,d=a+2;const h=i.index;i.index&&(l=h.getX(l),c=h.getX(c),d=h.getX(d));const{position:u,normal:p,uv:g,uv1:_}=i.attributes,m=jv(e,u,p,g,_,l,c,d,t,r,o);return m?(m.faceIndex=n,s&&s.push(m),m):null}function we(i,t,e,n){const s=i.a,r=i.b,o=i.c;let a=t,l=t+1,c=t+2;e&&(a=e.getX(a),l=e.getX(l),c=e.getX(c)),s.x=n.getX(a),s.y=n.getY(a),s.z=n.getZ(a),r.x=n.getX(l),r.y=n.getY(l),r.z=n.getZ(l),o.x=n.getX(c),o.y=n.getY(c),o.z=n.getZ(c)}function $v(i,t,e,n,s,r,o,a){const{geometry:l,_indirectBuffer:c}=i;for(let d=n,h=n+s;d<h;d++)pa(l,t,e,d,r,o,a)}function Kv(i,t,e,n,s,r,o){const{geometry:a,_indirectBuffer:l}=i;let c=1/0,d=null;for(let h=n,u=n+s;h<u;h++){let p;p=pa(a,t,e,h,null,r,o),p&&p.distance<c&&(d=p,c=p.distance)}return d}function Qv(i,t,e,n,s,r,o){const{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let d=i,h=t+i;d<h;d++){let u;if(u=d,we(o,u*3,l,c),o.needsUpdate=!0,n(o,u,s,r))return!0}return!1}function Jv(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,o,a,l,c=0;const d=i._roots;for(let u=0,p=d.length;u<p;u++)r=d[u],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),h(0,c),c+=r.byteLength;function h(u,p,g=!1){const _=u*2;if(a[_+15]===fa){const f=o[u+6],v=a[_+14];let x=1/0,y=1/0,E=1/0,b=-1/0,w=-1/0,A=-1/0;for(let S=3*f,M=3*(f+v);S<M;S++){let P=n[S];const D=s.getX(P),I=s.getY(P),N=s.getZ(P);D<x&&(x=D),D>b&&(b=D),I<y&&(y=I),I>w&&(w=I),N<E&&(E=N),N>A&&(A=N)}return l[u+0]!==x||l[u+1]!==y||l[u+2]!==E||l[u+3]!==b||l[u+4]!==w||l[u+5]!==A?(l[u+0]=x,l[u+1]=y,l[u+2]=E,l[u+3]=b,l[u+4]=w,l[u+5]=A,!0):!1}else{const f=u+8,v=o[u+6],x=f+p,y=v+p;let E=g,b=!1,w=!1;t?E||(b=t.has(x),w=t.has(y),E=!b&&!w):(b=!0,w=!0);const A=E||b,S=E||w;let M=!1;A&&(M=h(f,p,E));let P=!1;S&&(P=h(v,p,E));const D=M||P;if(D)for(let I=0;I<3;I++){const N=f+I,k=v+I,H=l[N],$=l[N+3],W=l[k],J=l[k+3];l[u+I]=H<W?H:W,l[u+I+3]=$>J?$:J}return D}}}function xi(i,t,e,n,s){let r,o,a,l,c,d;const h=1/e.direction.x,u=1/e.direction.y,p=1/e.direction.z,g=e.origin.x,_=e.origin.y,m=e.origin.z;let f=t[i],v=t[i+3],x=t[i+1],y=t[i+3+1],E=t[i+2],b=t[i+3+2];return h>=0?(r=(f-g)*h,o=(v-g)*h):(r=(v-g)*h,o=(f-g)*h),u>=0?(a=(x-_)*u,l=(y-_)*u):(a=(y-_)*u,l=(x-_)*u),r>l||a>o||((a>r||isNaN(r))&&(r=a),(l<o||isNaN(o))&&(o=l),p>=0?(c=(E-m)*p,d=(b-m)*p):(c=(b-m)*p,d=(E-m)*p),r>d||c>o)?!1:((c>r||r!==r)&&(r=c),(d<o||o!==o)&&(o=d),r<=s&&o>=n)}function ty(i,t,e,n,s,r,o,a){const{geometry:l,_indirectBuffer:c}=i;for(let d=n,h=n+s;d<h;d++){let u=c?c[d]:d;pa(l,t,e,u,r,o,a)}}function ey(i,t,e,n,s,r,o){const{geometry:a,_indirectBuffer:l}=i;let c=1/0,d=null;for(let h=n,u=n+s;h<u;h++){let p;p=pa(a,t,e,l?l[h]:h,null,r,o),p&&p.distance<c&&(d=p,c=p.distance)}return d}function ny(i,t,e,n,s,r,o){const{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let d=i,h=t+i;d<h;d++){let u;if(u=e.resolveTriangleIndex(d),we(o,u*3,l,c),o.needsUpdate=!0,n(o,u,s,r))return!0}return!1}function iy(i,t,e,n,s,r,o){de.setBuffer(i._roots[t]),Mc(0,i,e,n,s,r,o),de.clearBuffer()}function Mc(i,t,e,n,s,r,o){const{float32Array:a,uint16Array:l,uint32Array:c}=de,d=i*2;if(Ke(d,l)){const u=rn(i,c),p=hn(d,l);$v(t,e,n,u,p,s,r,o)}else{const u=un(i);xi(u,a,n,r,o)&&Mc(u,t,e,n,s,r,o);const p=dn(i,c);xi(p,a,n,r,o)&&Mc(p,t,e,n,s,r,o)}}const sy=["x","y","z"];function ry(i,t,e,n,s,r){de.setBuffer(i._roots[t]);const o=Sc(0,i,e,n,s,r);return de.clearBuffer(),o}function Sc(i,t,e,n,s,r){const{float32Array:o,uint16Array:a,uint32Array:l}=de;let c=i*2;if(Ke(c,a)){const h=rn(i,l),u=hn(c,a);return Kv(t,e,n,h,u,s,r)}else{const h=Gd(i,l),u=sy[h],g=n.direction[u]>=0;let _,m;g?(_=un(i),m=dn(i,l)):(_=dn(i,l),m=un(i));const v=xi(_,o,n,s,r)?Sc(_,t,e,n,s,r):null;if(v){const E=v.point[u];if(g?E<=o[m+h]:E>=o[m+h+3])return v}const y=xi(m,o,n,s,r)?Sc(m,t,e,n,s,r):null;return v&&y?v.distance<=y.distance?v:y:v||y||null}}const yo=new ye,gs=new An,_s=new An,ar=new jt,Hu=new Ye,Mo=new Ye;function oy(i,t,e,n){de.setBuffer(i._roots[t]);const s=bc(0,i,e,n);return de.clearBuffer(),s}function bc(i,t,e,n,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=de;let l=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),Hu.set(e.boundingBox.min,e.boundingBox.max,n),s=Hu),Ke(l,o)){const d=t.geometry,h=d.index,u=d.attributes.position,p=e.index,g=e.attributes.position,_=rn(i,a),m=hn(l,o);if(ar.copy(n).invert(),e.boundsTree)return xe(i,r,Mo),Mo.matrix.copy(ar),Mo.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:v=>Mo.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let x=_*3,y=(m+_)*3;x<y;x+=3)if(we(_s,x,h,u),_s.needsUpdate=!0,v.intersectsTriangle(_s))return!0;return!1}});for(let f=_*3,v=(m+_)*3;f<v;f+=3){we(gs,f,h,u),gs.a.applyMatrix4(ar),gs.b.applyMatrix4(ar),gs.c.applyMatrix4(ar),gs.needsUpdate=!0;for(let x=0,y=p.count;x<y;x+=3)if(we(_s,x,p,g),_s.needsUpdate=!0,gs.intersectsTriangle(_s))return!0}}else{const d=i+8,h=a[i+6];return xe(d,r,yo),!!(s.intersectsBox(yo)&&bc(d,t,e,n,s)||(xe(h,r,yo),s.intersectsBox(yo)&&bc(h,t,e,n,s)))}}const So=new jt,fl=new Ye,lr=new Ye,ay=new R,ly=new R,cy=new R,hy=new R;function uy(i,t,e,n={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),fl.set(t.boundingBox.min,t.boundingBox.max,e),fl.needsUpdate=!0;const a=i.geometry,l=a.attributes.position,c=a.index,d=t.attributes.position,h=t.index,u=fn.getPrimitive(),p=fn.getPrimitive();let g=ay,_=ly,m=null,f=null;s&&(m=cy,f=hy);let v=1/0,x=null,y=null;return So.copy(e).invert(),lr.matrix.copy(So),i.shapecast({boundsTraverseOrder:E=>fl.distanceToBox(E),intersectsBounds:(E,b,w)=>w<v&&w<o?(b&&(lr.min.copy(E.min),lr.max.copy(E.max),lr.needsUpdate=!0),!0):!1,intersectsRange:(E,b)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:A=>lr.distanceToBox(A),intersectsBounds:(A,S,M)=>M<v&&M<o,intersectsRange:(A,S)=>{for(let M=A,P=A+S;M<P;M++){we(p,3*M,h,d),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let D=E,I=E+b;D<I;D++){we(u,3*D,c,l),u.needsUpdate=!0;const N=u.distanceToTriangle(p,g,m);if(N<v&&(_.copy(g),f&&f.copy(m),v=N,x=D,y=M),N<r)return!0}}}});{const w=qs(t);for(let A=0,S=w;A<S;A++){we(p,3*A,h,d),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let M=E,P=E+b;M<P;M++){we(u,3*M,c,l),u.needsUpdate=!0;const D=u.distanceToTriangle(p,g,m);if(D<v&&(_.copy(g),f&&f.copy(m),v=D,x=M,y=A),D<r)return!0}}}}}),fn.releasePrimitive(u),fn.releasePrimitive(p),v===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=v,n.faceIndex=x,s&&(s.point?s.point.copy(f):s.point=f.clone(),s.point.applyMatrix4(So),_.applyMatrix4(So),s.distance=_.sub(s.point).length(),s.faceIndex=y),n)}function dy(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,o,a,l,c=0;const d=i._roots;for(let u=0,p=d.length;u<p;u++)r=d[u],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),h(0,c),c+=r.byteLength;function h(u,p,g=!1){const _=u*2;if(a[_+15]===fa){const f=o[u+6],v=a[_+14];let x=1/0,y=1/0,E=1/0,b=-1/0,w=-1/0,A=-1/0;for(let S=f,M=f+v;S<M;S++){const P=3*i.resolveTriangleIndex(S);for(let D=0;D<3;D++){let I=P+D;I=n?n[I]:I;const N=s.getX(I),k=s.getY(I),H=s.getZ(I);N<x&&(x=N),N>b&&(b=N),k<y&&(y=k),k>w&&(w=k),H<E&&(E=H),H>A&&(A=H)}}return l[u+0]!==x||l[u+1]!==y||l[u+2]!==E||l[u+3]!==b||l[u+4]!==w||l[u+5]!==A?(l[u+0]=x,l[u+1]=y,l[u+2]=E,l[u+3]=b,l[u+4]=w,l[u+5]=A,!0):!1}else{const f=u+8,v=o[u+6],x=f+p,y=v+p;let E=g,b=!1,w=!1;t?E||(b=t.has(x),w=t.has(y),E=!b&&!w):(b=!0,w=!0);const A=E||b,S=E||w;let M=!1;A&&(M=h(f,p,E));let P=!1;S&&(P=h(v,p,E));const D=M||P;if(D)for(let I=0;I<3;I++){const N=f+I,k=v+I,H=l[N],$=l[N+3],W=l[k],J=l[k+3];l[u+I]=H<W?H:W,l[u+I+3]=$>J?$:J}return D}}}function fy(i,t,e,n,s,r,o){de.setBuffer(i._roots[t]),Ec(0,i,e,n,s,r,o),de.clearBuffer()}function Ec(i,t,e,n,s,r,o){const{float32Array:a,uint16Array:l,uint32Array:c}=de,d=i*2;if(Ke(d,l)){const u=rn(i,c),p=hn(d,l);ty(t,e,n,u,p,s,r,o)}else{const u=un(i);xi(u,a,n,r,o)&&Ec(u,t,e,n,s,r,o);const p=dn(i,c);xi(p,a,n,r,o)&&Ec(p,t,e,n,s,r,o)}}const py=["x","y","z"];function my(i,t,e,n,s,r){de.setBuffer(i._roots[t]);const o=wc(0,i,e,n,s,r);return de.clearBuffer(),o}function wc(i,t,e,n,s,r){const{float32Array:o,uint16Array:a,uint32Array:l}=de;let c=i*2;if(Ke(c,a)){const h=rn(i,l),u=hn(c,a);return ey(t,e,n,h,u,s,r)}else{const h=Gd(i,l),u=py[h],g=n.direction[u]>=0;let _,m;g?(_=un(i),m=dn(i,l)):(_=dn(i,l),m=un(i));const v=xi(_,o,n,s,r)?wc(_,t,e,n,s,r):null;if(v){const E=v.point[u];if(g?E<=o[m+h]:E>=o[m+h+3])return v}const y=xi(m,o,n,s,r)?wc(m,t,e,n,s,r):null;return v&&y?v.distance<=y.distance?v:y:v||y||null}}const bo=new ye,xs=new An,vs=new An,cr=new jt,Vu=new Ye,Eo=new Ye;function gy(i,t,e,n){de.setBuffer(i._roots[t]);const s=Tc(0,i,e,n);return de.clearBuffer(),s}function Tc(i,t,e,n,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=de;let l=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),Vu.set(e.boundingBox.min,e.boundingBox.max,n),s=Vu),Ke(l,o)){const d=t.geometry,h=d.index,u=d.attributes.position,p=e.index,g=e.attributes.position,_=rn(i,a),m=hn(l,o);if(cr.copy(n).invert(),e.boundsTree)return xe(i,r,Eo),Eo.matrix.copy(cr),Eo.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:v=>Eo.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let x=_,y=m+_;x<y;x++)if(we(vs,3*t.resolveTriangleIndex(x),h,u),vs.needsUpdate=!0,v.intersectsTriangle(vs))return!0;return!1}});for(let f=_,v=m+_;f<v;f++){const x=t.resolveTriangleIndex(f);we(xs,3*x,h,u),xs.a.applyMatrix4(cr),xs.b.applyMatrix4(cr),xs.c.applyMatrix4(cr),xs.needsUpdate=!0;for(let y=0,E=p.count;y<E;y+=3)if(we(vs,y,p,g),vs.needsUpdate=!0,xs.intersectsTriangle(vs))return!0}}else{const d=i+8,h=a[i+6];return xe(d,r,bo),!!(s.intersectsBox(bo)&&Tc(d,t,e,n,s)||(xe(h,r,bo),s.intersectsBox(bo)&&Tc(h,t,e,n,s)))}}const wo=new jt,pl=new Ye,hr=new Ye,_y=new R,xy=new R,vy=new R,yy=new R;function My(i,t,e,n={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),pl.set(t.boundingBox.min,t.boundingBox.max,e),pl.needsUpdate=!0;const a=i.geometry,l=a.attributes.position,c=a.index,d=t.attributes.position,h=t.index,u=fn.getPrimitive(),p=fn.getPrimitive();let g=_y,_=xy,m=null,f=null;s&&(m=vy,f=yy);let v=1/0,x=null,y=null;return wo.copy(e).invert(),hr.matrix.copy(wo),i.shapecast({boundsTraverseOrder:E=>pl.distanceToBox(E),intersectsBounds:(E,b,w)=>w<v&&w<o?(b&&(hr.min.copy(E.min),hr.max.copy(E.max),hr.needsUpdate=!0),!0):!1,intersectsRange:(E,b)=>{if(t.boundsTree){const w=t.boundsTree;return w.shapecast({boundsTraverseOrder:A=>hr.distanceToBox(A),intersectsBounds:(A,S,M)=>M<v&&M<o,intersectsRange:(A,S)=>{for(let M=A,P=A+S;M<P;M++){const D=w.resolveTriangleIndex(M);we(p,3*D,h,d),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let I=E,N=E+b;I<N;I++){const k=i.resolveTriangleIndex(I);we(u,3*k,c,l),u.needsUpdate=!0;const H=u.distanceToTriangle(p,g,m);if(H<v&&(_.copy(g),f&&f.copy(m),v=H,x=I,y=M),H<r)return!0}}}})}else{const w=qs(t);for(let A=0,S=w;A<S;A++){we(p,3*A,h,d),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let M=E,P=E+b;M<P;M++){const D=i.resolveTriangleIndex(M);we(u,3*D,c,l),u.needsUpdate=!0;const I=u.distanceToTriangle(p,g,m);if(I<v&&(_.copy(g),f&&f.copy(m),v=I,x=M,y=A),I<r)return!0}}}}}),fn.releasePrimitive(u),fn.releasePrimitive(p),v===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=v,n.faceIndex=x,s&&(s.point?s.point.copy(f):s.point=f.clone(),s.point.applyMatrix4(wo),_.applyMatrix4(wo),s.distance=_.sub(s.point).length(),s.faceIndex=y),n)}function Sy(){return typeof SharedArrayBuffer<"u"}const Mr=new de.constructor,$o=new de.constructor,ai=new qc(()=>new ye),ys=new ye,Ms=new ye,ml=new ye,gl=new ye;let _l=!1;function by(i,t,e,n){if(_l)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");_l=!0;const s=i._roots,r=t._roots;let o,a=0,l=0;const c=new jt().copy(e).invert();for(let d=0,h=s.length;d<h;d++){Mr.setBuffer(s[d]),l=0;const u=ai.getPrimitive();xe(0,Mr.float32Array,u),u.applyMatrix4(c);for(let p=0,g=r.length;p<g&&($o.setBuffer(r[p]),o=Mn(0,0,e,c,n,a,l,0,0,u),$o.clearBuffer(),l+=r[p].length,!o);p++);if(ai.releasePrimitive(u),Mr.clearBuffer(),a+=s[d].length,o)break}return _l=!1,o}function Mn(i,t,e,n,s,r=0,o=0,a=0,l=0,c=null,d=!1){let h,u;d?(h=$o,u=Mr):(h=Mr,u=$o);const p=h.float32Array,g=h.uint32Array,_=h.uint16Array,m=u.float32Array,f=u.uint32Array,v=u.uint16Array,x=i*2,y=t*2,E=Ke(x,_),b=Ke(y,v);let w=!1;if(b&&E)d?w=s(rn(t,f),hn(t*2,v),rn(i,g),hn(i*2,_),l,o+t,a,r+i):w=s(rn(i,g),hn(i*2,_),rn(t,f),hn(t*2,v),a,r+i,l,o+t);else if(b){const A=ai.getPrimitive();xe(t,m,A),A.applyMatrix4(e);const S=un(i),M=dn(i,g);xe(S,p,ys),xe(M,p,Ms);const P=A.intersectsBox(ys),D=A.intersectsBox(Ms);w=P&&Mn(t,S,n,e,s,o,r,l,a+1,A,!d)||D&&Mn(t,M,n,e,s,o,r,l,a+1,A,!d),ai.releasePrimitive(A)}else{const A=un(t),S=dn(t,f);xe(A,m,ml),xe(S,m,gl);const M=c.intersectsBox(ml),P=c.intersectsBox(gl);if(M&&P)w=Mn(i,A,e,n,s,r,o,a,l+1,c,d)||Mn(i,S,e,n,s,r,o,a,l+1,c,d);else if(M)if(E)w=Mn(i,A,e,n,s,r,o,a,l+1,c,d);else{const D=ai.getPrimitive();D.copy(ml).applyMatrix4(e);const I=un(i),N=dn(i,g);xe(I,p,ys),xe(N,p,Ms);const k=D.intersectsBox(ys),H=D.intersectsBox(Ms);w=k&&Mn(A,I,n,e,s,o,r,l,a+1,D,!d)||H&&Mn(A,N,n,e,s,o,r,l,a+1,D,!d),ai.releasePrimitive(D)}else if(P)if(E)w=Mn(i,S,e,n,s,r,o,a,l+1,c,d);else{const D=ai.getPrimitive();D.copy(gl).applyMatrix4(e);const I=un(i),N=dn(i,g);xe(I,p,ys),xe(N,p,Ms);const k=D.intersectsBox(ys),H=D.intersectsBox(Ms);w=k&&Mn(S,I,n,e,s,o,r,l,a+1,D,!d)||H&&Mn(S,N,n,e,s,o,r,l,a+1,D,!d),ai.releasePrimitive(D)}}return w}const To=new Ye,Gu=new ye,Ey={strategy:kd,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class ma{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,s=t._roots,r=t._indirectBuffer,o=n.getIndex();let a;return e.cloneBuffers?a={roots:s.map(l=>l.slice()),index:o?o.array.slice():null,indirectBuffer:r?r.slice():null}:a={roots:s,index:o?o.array:null,indirectBuffer:r},a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:s,roots:r,indirectBuffer:o}=t,a=new ma(e,{...n,[ll]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){const l=e.getIndex();if(l===null){const c=new Me(t.index,1,!1);e.setIndex(c)}else l.array!==s&&(l.array.set(s),l.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...Ey,[ll]:!1},e),e.useSharedArrayBuffer&&!Sy())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[ll]||(zv(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new ye))),this.resolveTriangleIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n}refit(t=null){return(this.indirect?dy:Jv)(this,t)}traverse(t,e=0){const n=this._roots[e],s=new Uint32Array(n),r=new Uint16Array(n);o(0);function o(a,l=0){const c=a*2,d=r[c+15]===fa;if(d){const h=s[a+6],u=r[c+14];t(l,d,new Float32Array(n,a*4,6),h,u)}else{const h=a+yr/4,u=s[a+6],p=s[a+7];t(l,d,new Float32Array(n,a*4,6),p)||(o(h,l+1),o(u,l+1))}}}raycast(t,e=Tn,n=0,s=1/0){const r=this._roots,o=this.geometry,a=[],l=e.isMaterial,c=Array.isArray(e),d=o.groups,h=l?e.side:e,u=this.indirect?fy:iy;for(let p=0,g=r.length;p<g;p++){const _=c?e[d[p].materialIndex].side:h,m=a.length;if(u(this,p,_,t,a,n,s),c){const f=d[p].materialIndex;for(let v=m,x=a.length;v<x;v++)a[v].face.materialIndex=f}}return a}raycastFirst(t,e=Tn,n=0,s=1/0){const r=this._roots,o=this.geometry,a=e.isMaterial,l=Array.isArray(e);let c=null;const d=o.groups,h=a?e.side:e,u=this.indirect?my:ry;for(let p=0,g=r.length;p<g;p++){const _=l?e[d[p].materialIndex].side:h,m=u(this,p,_,t,n,s);m!=null&&(c==null||m.distance<c.distance)&&(c=m,l&&(m.face.materialIndex=d[p].materialIndex))}return c}intersectsGeometry(t,e){let n=!1;const s=this._roots,r=this.indirect?gy:oy;for(let o=0,a=s.length;o<a&&(n=r(this,o,t,e),!n);o++);return n}shapecast(t){const e=fn.getPrimitive(),n=this.indirect?ny:Qv;let{boundsTraverseOrder:s,intersectsBounds:r,intersectsRange:o,intersectsTriangle:a}=t;if(o&&a){const h=o;o=(u,p,g,_,m)=>h(u,p,g,_,m)?!0:n(u,p,this,a,g,_,e)}else o||(a?o=(h,u,p,g)=>n(h,u,this,a,p,g,e):o=(h,u,p)=>p);let l=!1,c=0;const d=this._roots;for(let h=0,u=d.length;h<u;h++){const p=d[h];if(l=Xv(this,h,r,o,s,c),l)break;c+=p.byteLength}return fn.releasePrimitive(e),l}bvhcast(t,e,n){let{intersectsRanges:s,intersectsTriangles:r}=n;const o=fn.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?g=>{const _=this.resolveTriangleIndex(g);we(o,_*3,a,l)}:g=>{we(o,g*3,a,l)},d=fn.getPrimitive(),h=t.geometry.index,u=t.geometry.attributes.position,p=t.indirect?g=>{const _=t.resolveTriangleIndex(g);we(d,_*3,h,u)}:g=>{we(d,g*3,h,u)};if(r){const g=(_,m,f,v,x,y,E,b)=>{for(let w=f,A=f+v;w<A;w++){p(w),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let S=_,M=_+m;S<M;S++)if(c(S),o.needsUpdate=!0,r(o,d,S,w,x,y,E,b))return!0}return!1};if(s){const _=s;s=function(m,f,v,x,y,E,b,w){return _(m,f,v,x,y,E,b,w)?!0:g(m,f,v,x,y,E,b,w)}}else s=g}return by(this,t,e,s)}intersectsBox(t,e){return To.set(t.min,t.max,e),To.needsUpdate=!0,this.shapecast({intersectsBounds:n=>To.intersectsBox(n),intersectsTriangle:n=>To.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},s={},r=0,o=1/0){return(this.indirect?My:uy)(this,t,e,n,s,r,o)}closestPointToPoint(t,e={},n=0,s=1/0){return Yv(this,t,e,n,s)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{xe(0,new Float32Array(n),Gu),t.union(Gu)}),t}}function wy(i,t){const e=new le;return e.setAttribute("position",new Kt(new Float32Array(i.positions),3)),e.setIndex(new Hc(i.indices.slice(),1)),t?e.setAttribute("normal",new Kt(t,3)):e.computeVertexNormals(),e.computeBoundingBox(),e.computeBoundingSphere(),e}function Ty(i){const t=new le;return t.setAttribute("position",new Kt(new Float32Array(i),3)),t.computeVertexNormals(),t.computeBoundingBox(),t.computeBoundingSphere(),t}function Ay(i,t,e){const n=i.indices,s=i.positions,r=new jn(n.length/2);for(let d=0;d<n.length;d+=3){const h=n[d],u=n[d+1],p=n[d+2];r.bump(h,u),r.bump(u,p),r.bump(p,h)}const o=[],a=[],l=[],c=(d,h,u)=>{r.cnt[r.find(d,h)]===1&&(o.push(s[d*3],s[d*3+1],s[d*3+2]),o.push(s[h*3],s[h*3+1],s[h*3+2]),a.push(t[u]??0),e&&l.push(e[u]??0))};for(let d=0;d<n.length;d+=3){const h=n[d],u=n[d+1],p=n[d+2];c(h,u,d/3),c(u,p,d/3),c(p,h,d/3)}return{positions:new Float32Array(o),count:a.length,solidOfSeg:Uint32Array.from(a),...e?{instanceOfSeg:Uint32Array.from(l)}:{}}}function Cy(i,t,e,n){const s=i.indices,r=i.positions,o=1,a=2,l=new jn(s.length/2,2),c=(_,m,f)=>{const v=l.bump(_,m);l.cnt[v]===1?(l.v0[v]=f,l.v1[v]=0):l.v0[v]!==f&&(l.v1[v]=l.v1[v]|o)},d=s.length/3;for(let _=0;_<d;_++){const m=t[_]??0,f=s[_*3],v=s[_*3+1],x=s[_*3+2];c(f,v,m),c(v,x,m),c(x,f,m)}const h=[],u=[],p=[],g=(_,m,f)=>{const v=l.find(_,m);l.v1[v]&a||l.cnt[v]!==1&&!(l.v1[v]&o)||(l.v1[v]=l.v1[v]|a,h.push(r[_*3],r[_*3+1],r[_*3+2]),h.push(r[m*3],r[m*3+1],r[m*3+2]),u.push(e[f]??0),n&&p.push(n[f]??0))};for(let _=0;_<d;_++){const m=s[_*3],f=s[_*3+1],v=s[_*3+2];g(m,f,_),g(f,v,_),g(v,m,_)}return{positions:new Float32Array(h),count:u.length,solidOfSeg:Uint32Array.from(u),...n?{instanceOfSeg:Uint32Array.from(p)}:{}}}function Yd(i,t,e,n){const s=i.indices,r=i.positions,o=s.length/3,a=new Float32Array(o*3),l=new Uint8Array(o);for(let v=0;v<o;v++){const x=s[v*3]*3,y=s[v*3+1]*3,E=s[v*3+2]*3,b=r[y]-r[x],w=r[y+1]-r[x+1],A=r[y+2]-r[x+2],S=r[E]-r[x],M=r[E+1]-r[x+1],P=r[E+2]-r[x+2],D=w*P-A*M,I=A*S-b*P,N=b*M-w*S,k=Math.sqrt(D*D+I*I+N*N);if(k<1e-30){l[v]=1;continue}a[v*3]=D/k,a[v*3+1]=I/k,a[v*3+2]=N/k}const c=Math.cos(e*Math.PI/180),d=1,h=2,u=new jn(s.length/2,2),p=(v,x,y)=>{const E=u.bump(v,x),b=u.cnt[E];if(b===1){u.v0[E]=y,u.v1[E]=0;return}if(b>2){u.v1[E]=u.v1[E]|d;return}const w=u.v0[E];if(l[w]||l[y])return;a[w*3]*a[y*3]+a[w*3+1]*a[y*3+1]+a[w*3+2]*a[y*3+2]<c&&(u.v1[E]=u.v1[E]|d)};for(let v=0;v<o;v++){const x=s[v*3],y=s[v*3+1],E=s[v*3+2];p(x,y,v),p(y,E,v),p(E,x,v)}const g=[],_=[],m=[],f=(v,x,y)=>{const E=u.find(v,x);u.v1[E]&h||u.cnt[E]!==1&&!(u.v1[E]&d)||(u.v1[E]=u.v1[E]|h,g.push(r[v*3],r[v*3+1],r[v*3+2]),g.push(r[x*3],r[x*3+1],r[x*3+2]),_.push(t[y]??0),n&&m.push(n[y]??0))};for(let v=0;v<o;v++){const x=s[v*3],y=s[v*3+1],E=s[v*3+2];f(x,y,v),f(y,E,v),f(E,x,v)}return{positions:new Float32Array(g),count:_.length,solidOfSeg:Uint32Array.from(_),...n?{instanceOfSeg:Uint32Array.from(m)}:{}}}function Ry(i,t){const e=i.indices,n=i.positions,s=e.length/3,r=new Float64Array(s*3),o=new Float64Array(s*3);for(let x=0;x<s;x++){const y=e[x*3]*3,E=e[x*3+1]*3,b=e[x*3+2]*3,w=n[E]-n[y],A=n[E+1]-n[y+1],S=n[E+2]-n[y+2],M=n[b]-n[y],P=n[b+1]-n[y+1],D=n[b+2]-n[y+2],I=A*D-S*P,N=S*M-w*D,k=w*P-A*M;r[x*3]=I,r[x*3+1]=N,r[x*3+2]=k;const H=Math.sqrt(I*I+N*N+k*k);H<1e-30||(o[x*3]=I/H,o[x*3+1]=N/H,o[x*3+2]=k/H)}const a=Math.cos(t*Math.PI/180),l=new jn(e.length/2,1);for(let x=0;x<s;x++){const y=e[x*3],E=e[x*3+1],b=e[x*3+2];for(const[w,A]of[[y,E],[E,b],[b,y]]){const S=l.bump(w,A);l.cnt[S]===1&&(l.v0[S]=x)}}const c=new Int32Array(e.length);for(let x=0;x<c.length;x++)c[x]=x;const d=x=>{for(;c[x]!==x;)c[x]=c[c[x]],x=c[x];return x},h=(x,y)=>e[x*3]===y?x*3:e[x*3+1]===y?x*3+1:x*3+2;for(let x=0;x<s;x++){const y=e[x*3],E=e[x*3+1],b=e[x*3+2];for(const[w,A]of[[y,E],[E,b],[b,y]]){const S=l.find(w,A);if(l.cnt[S]!==2)continue;const M=l.v0[S];M===x||o[M*3]*o[x*3]+o[M*3+1]*o[x*3+1]+o[M*3+2]*o[x*3+2]<a||(c[d(h(x,w))]=d(h(M,w)),c[d(h(x,A))]=d(h(M,A)))}}const u=new Uint32Array(e.length),p=new Int32Array(e.length).fill(-1);let g=0;for(let x=0;x<e.length;x++){const y=d(x);p[y]===-1&&(p[y]=g++),u[x]=p[y]}const _=new Float64Array(g*3),m=new Float64Array(g*3),f=new Uint32Array(g);for(let x=0;x<e.length;x++){const y=u[x],E=e[x],b=(x-x%3)/3;f[y]=E,_[y*3]=n[E*3],_[y*3+1]=n[E*3+1],_[y*3+2]=n[E*3+2],m[y*3]+=r[b*3],m[y*3+1]+=r[b*3+1],m[y*3+2]+=r[b*3+2]}const v=new Float32Array(g*3);for(let x=0;x<g;x++){const y=m[x*3],E=m[x*3+1],b=m[x*3+2],w=Math.sqrt(y*y+E*E+b*b);w>1e-30?(v[x*3]=y/w,v[x*3+1]=E/w,v[x*3+2]=b/w):v[x*3+2]=1}return{mesh:{positions:_,indices:u},normals:v,src:f}}function Py(i){const t=new jn(i.length/2),e=new Uint32Array(i.length*2);let n=0;for(let s=0;s+2<i.length;s+=3)for(let r=0;r<3;r++){const o=i[s+r],a=i[s+(r+1)%3],l=t.bump(o,a);t.cnt[l]===1&&(e[n]=o,e[n+1]=a,n+=2)}return e.slice(0,n)}function Ly(i,t,e){const n=new Uint32Array(i.length);let s=0;for(let r=0;r<t.length;r++)e.has(t[r])||(n[s]=i[r*3],n[s+1]=i[r*3+1],n[s+2]=i[r*3+2],s+=3);return n.subarray(0,s)}function Dy(i,t){if(t.size===0)return i;const e=new Float32Array(i.positions.length),n=new Uint32Array(i.count),s=i.instanceOfSeg?new Uint32Array(i.count):null;let r=0;for(let o=0;o<i.count;o++)t.has(i.solidOfSeg[o])||(e.set(i.positions.subarray(o*6,o*6+6),r*6),n[r]=i.solidOfSeg[o],s&&(s[r]=i.instanceOfSeg[o]),r++);return{positions:e.subarray(0,r*6),count:r,solidOfSeg:n.subarray(0,r),...s?{instanceOfSeg:s.subarray(0,r)}:{}}}function Iy(i,t){const e=new Float32Array(i.positions.length);let n=0;for(let s=0;s<i.count;s++)t.has(i.solidOfSeg[s])||(e.set(i.positions.subarray(s*6,s*6+6),n),n+=6);return e.subarray(0,n)}function Wu(i,t,e,n){const s=i.positions.length/3,r=t.length,o=new Uint32Array(r*3),a=new Int32Array(s).fill(-2),l=e.length+2,c=new Map,d=[],h=[];for(let m=0;m<r;m++){const f=t[m];for(let v=0;v<3;v++){const x=i.indices[m*3+v];if(a[x]===-2&&(a[x]=f),a[x]===f){o[m*3+v]=x;continue}const y=x*l+(f+1);let E=c.get(y);E===void 0&&(E=s+h.length,c.set(y,E),d.push(i.positions[x*3],i.positions[x*3+1],i.positions[x*3+2]),h.push(f)),o[m*3+v]=E}}const u=s+h.length,p=new Float32Array(u*3),g=(m,f)=>{const v=f>=0?e[f]:n;p[m*3]=v[0],p[m*3+1]=v[1],p[m*3+2]=v[2]};for(let m=0;m<s;m++)g(m,a[m]);for(let m=0;m<h.length;m++)g(s+m,h[m]);const _=new Float64Array(u*3);return _.set(i.positions),_.set(d,s*3),{mesh:{positions:_,indices:o},colors:p}}function qd(i){return i.indices.length/3}function Zd(i,t){if(t<=0)return[1,1,1];const e=Math.min(1,Math.max(-1,i/t));if(e<0){const s=1+e;return[s,s,1]}const n=1-e;return[1,n,n]}const Di=new ua,ze=new R,oi=new R,pe=new ve,Xu={X:new R(1,0,0),Y:new R(0,1,0),Z:new R(0,0,1)},xl={type:"change"},Yu={type:"mouseDown",mode:null},qu={type:"mouseUp",mode:null},Zu={type:"objectChange"};class Uy extends Dd{constructor(t,e=null){super(void 0,e);const n=new ky(this);this._root=n;const s=new Hy;this._gizmo=s,n.add(s);const r=new Vy;this._plane=r,n.add(r);const o=this;function a(x,y){let E=y;Object.defineProperty(o,x,{get:function(){return E!==void 0?E:y},set:function(b){E!==b&&(E=b,r[x]=b,s[x]=b,o.dispatchEvent({type:x+"-changed",value:b}),o.dispatchEvent(xl))}}),o[x]=y,r[x]=y,s[x]=y}a("camera",t),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);const l=new R,c=new R,d=new ve,h=new ve,u=new R,p=new ve,g=new R,_=new R,m=new R,f=0,v=new R;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",d),a("worldQuaternionStart",h),a("cameraPosition",u),a("cameraQuaternion",p),a("pointStart",g),a("pointEnd",_),a("rotationAxis",m),a("rotationAngle",f),a("eye",v),this._offset=new R,this._startNorm=new R,this._endNorm=new R,this._cameraScale=new R,this._parentPosition=new R,this._parentQuaternion=new ve,this._parentQuaternionInv=new ve,this._parentScale=new R,this._worldScaleStart=new R,this._worldQuaternionInv=new ve,this._worldScale=new R,this._positionStart=new R,this._quaternionStart=new ve,this._scaleStart=new R,this._getPointer=Fy.bind(this),this._onPointerDown=Oy.bind(this),this._onPointerHover=Ny.bind(this),this._onPointerMove=By.bind(this),this._onPointerUp=zy.bind(this),e!==null&&this.connect()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;t!==null&&Di.setFromCamera(t,this.camera);const e=vl(this._gizmo.picker[this.mode],Di);e?this.axis=e.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t!=null&&t.button!==0)&&this.axis!==null){t!==null&&Di.setFromCamera(t,this.camera);const e=vl(this._plane,Di,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,Yu.mode=this.mode,this.dispatchEvent(Yu)}}pointerMove(t){const e=this.axis,n=this.mode,s=this.object;let r=this.space;if(n==="scale"?r="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(r="world"),s===void 0||e===null||this.dragging===!1||t!==null&&t.button!==-1)return;t!==null&&Di.setFromCamera(t,this.camera);const o=vl(this._plane,Di,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(pe.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(ze.setFromMatrixPosition(s.parent.matrixWorld)),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(ze.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(e.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),oi.set(a,a,a)}else ze.copy(this.pointStart),oi.copy(this.pointEnd),ze.applyQuaternion(this._worldQuaternionInv),oi.applyQuaternion(this._worldQuaternionInv),oi.divide(ze),e.search("X")===-1&&(oi.x=1),e.search("Y")===-1&&(oi.y=1),e.search("Z")===-1&&(oi.z=1);s.scale.copy(this._scaleStart).multiply(oi),this.scaleSnap&&(e.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(ze.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(ze.copy(this.rotationAxis).cross(this.eye))*a):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy(Xu[e]),ze.copy(Xu[e]),r==="local"&&ze.applyQuaternion(this.worldQuaternion),ze.cross(this.eye),ze.length()===0?l=!0:this.rotationAngle=this._offset.dot(ze.normalize())*a),(e==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&e!=="E"&&e!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(pe.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(pe.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(xl),this.dispatchEvent(Zu)}}pointerUp(t){t!==null&&t.button!==0||(this.dragging&&this.axis!==null&&(qu.mode=this.mode,this.dispatchEvent(qu)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(t){return this.object=t,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(xl),this.dispatchEvent(Zu),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Di}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}}function Fy(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const t=this.domElement.getBoundingClientRect();return{x:(i.clientX-t.left)/t.width*2-1,y:-(i.clientY-t.top)/t.height*2+1,button:i.button}}}function Ny(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function Oy(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function By(i){this.enabled&&this.pointerMove(this._getPointer(i))}function zy(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function vl(i,t,e){const n=t.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||e)return n[s];return!1}const Ao=new De,ce=new R(0,1,0),ju=new R(0,0,0),$u=new jt,Co=new ve,Ho=new ve,Cn=new R,Ku=new jt,gr=new R(1,0,0),Ui=new R(0,1,0),_r=new R(0,0,1),Ro=new R,ur=new R,dr=new R;class ky extends ue{constructor(t){super(),this.isTransformControlsRoot=!0,this.controls=t,this.visible=!1}updateMatrixWorld(t){const e=this.controls;e.object!==void 0&&(e.object.updateMatrixWorld(),e.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):e.object.parent.matrixWorld.decompose(e._parentPosition,e._parentQuaternion,e._parentScale),e.object.matrixWorld.decompose(e.worldPosition,e.worldQuaternion,e._worldScale),e._parentQuaternionInv.copy(e._parentQuaternion).invert(),e._worldQuaternionInv.copy(e.worldQuaternion).invert()),e.camera.updateMatrixWorld(),e.camera.matrixWorld.decompose(e.cameraPosition,e.cameraQuaternion,e._cameraScale),e.camera.isOrthographicCamera?e.camera.getWorldDirection(e.eye).negate():e.eye.copy(e.cameraPosition).sub(e.worldPosition).normalize(),super.updateMatrixWorld(t)}dispose(){this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}class Hy extends ue{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const t=new pn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new qn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=t.clone();n.opacity=.15;const s=e.clone();s.opacity=.5;const r=t.clone();r.color.setHex(16711680);const o=t.clone();o.color.setHex(65280);const a=t.clone();a.color.setHex(255);const l=t.clone();l.color.setHex(16711680),l.opacity=.5;const c=t.clone();c.color.setHex(65280),c.opacity=.5;const d=t.clone();d.color.setHex(255),d.opacity=.5;const h=t.clone();h.opacity=.25;const u=t.clone();u.color.setHex(16776960),u.opacity=.25,t.clone().color.setHex(16776960);const g=t.clone();g.color.setHex(7895160);const _=new Fe(0,.04,.1,12);_.translate(0,.05,0);const m=new Ee(.08,.08,.08);m.translate(0,.04,0);const f=new le;f.setAttribute("position",new Kt([0,0,0,1,0,0],3));const v=new Fe(.0075,.0075,.5,3);v.translate(0,.25,0);function x(k,H){const $=new Ni(k,.0075,3,64,H*Math.PI*2);return $.rotateY(Math.PI/2),$.rotateX(Math.PI/2),$}function y(){const k=new le;return k.setAttribute("position",new Kt([0,0,0,1,1,1],3)),k}const E={X:[[new ct(_,r),[.5,0,0],[0,0,-Math.PI/2]],[new ct(_,r),[-.5,0,0],[0,0,Math.PI/2]],[new ct(v,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ct(_,o),[0,.5,0]],[new ct(_,o),[0,-.5,0],[Math.PI,0,0]],[new ct(v,o)]],Z:[[new ct(_,a),[0,0,.5],[Math.PI/2,0,0]],[new ct(_,a),[0,0,-.5],[-Math.PI/2,0,0]],[new ct(v,a),null,[Math.PI/2,0,0]]],XYZ:[[new ct(new As(.1,0),h.clone()),[0,0,0]]],XY:[[new ct(new Ee(.15,.15,.01),d.clone()),[.15,.15,0]]],YZ:[[new ct(new Ee(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ct(new Ee(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},b={X:[[new ct(new Fe(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ct(new Fe(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ct(new Fe(.2,0,.6,4),n),[0,.3,0]],[new ct(new Fe(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ct(new Fe(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ct(new Fe(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ct(new As(.2,0),n)]],XY:[[new ct(new Ee(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ct(new Ee(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ct(new Ee(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},w={START:[[new ct(new As(.01,2),s),null,null,null,"helper"]],END:[[new ct(new As(.01,2),s),null,null,null,"helper"]],DELTA:[[new sn(y(),s),null,null,null,"helper"]],X:[[new sn(f,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new sn(f,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new sn(f,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},A={XYZE:[[new ct(x(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new ct(x(.5,.5),r)]],Y:[[new ct(x(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new ct(x(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new ct(x(.75,1),u),null,[0,Math.PI/2,0]]]},S={AXIS:[[new sn(f,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},M={XYZE:[[new ct(new Gs(.25,10,8),n)]],X:[[new ct(new Ni(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ct(new Ni(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ct(new Ni(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ct(new Ni(.75,.1,2,24),n)]]},P={X:[[new ct(m,r),[.5,0,0],[0,0,-Math.PI/2]],[new ct(v,r),[0,0,0],[0,0,-Math.PI/2]],[new ct(m,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ct(m,o),[0,.5,0]],[new ct(v,o)],[new ct(m,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ct(m,a),[0,0,.5],[Math.PI/2,0,0]],[new ct(v,a),[0,0,0],[Math.PI/2,0,0]],[new ct(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ct(new Ee(.15,.15,.01),d),[.15,.15,0]]],YZ:[[new ct(new Ee(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ct(new Ee(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ct(new Ee(.1,.1,.1),h.clone())]]},D={X:[[new ct(new Fe(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ct(new Fe(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ct(new Fe(.2,0,.6,4),n),[0,.3,0]],[new ct(new Fe(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ct(new Fe(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ct(new Fe(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ct(new Ee(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ct(new Ee(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ct(new Ee(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ct(new Ee(.2,.2,.2),n),[0,0,0]]]},I={X:[[new sn(f,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new sn(f,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new sn(f,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function N(k){const H=new ue;for(const $ in k)for(let W=k[$].length;W--;){const J=k[$][W][0].clone(),ht=k[$][W][1],yt=k[$][W][2],Dt=k[$][W][3],it=k[$][W][4];J.name=$,J.tag=it,ht&&J.position.set(ht[0],ht[1],ht[2]),yt&&J.rotation.set(yt[0],yt[1],yt[2]),Dt&&J.scale.set(Dt[0],Dt[1],Dt[2]),J.updateMatrix();const F=J.geometry.clone();F.applyMatrix4(J.matrix),J.geometry=F,J.renderOrder=1/0,J.position.set(0,0,0),J.rotation.set(0,0,0),J.scale.set(1,1,1),H.add(J)}return H}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=N(E)),this.add(this.gizmo.rotate=N(A)),this.add(this.gizmo.scale=N(P)),this.add(this.picker.translate=N(b)),this.add(this.picker.rotate=N(M)),this.add(this.picker.scale=N(D)),this.add(this.helper.translate=N(w)),this.add(this.helper.rotate=N(S)),this.add(this.helper.scale=N(I)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Ho;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){const o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(pe.setFromEuler(Ao.set(0,0,0)),o.quaternion.copy(n).multiply(pe),Math.abs(ce.copy(gr).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(pe.setFromEuler(Ao.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(pe),Math.abs(ce.copy(Ui).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(pe.setFromEuler(Ao.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(pe),Math.abs(ce.copy(_r).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(pe.setFromEuler(Ao.set(0,Math.PI/2,0)),ce.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix($u.lookAt(ju,ce,Ui)),o.quaternion.multiply(pe),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),ze.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),ze.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(ze),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(ce.copy(gr).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(ce.copy(Ui).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(ce.copy(_r).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(ce.copy(_r).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(ce.copy(gr).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(ce.copy(Ui).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Co.copy(n),ce.copy(this.eye).applyQuaternion(pe.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix($u.lookAt(this.eye,ju,Ui)),o.name==="X"&&(pe.setFromAxisAngle(gr,Math.atan2(-ce.y,ce.z)),pe.multiplyQuaternions(Co,pe),o.quaternion.copy(pe)),o.name==="Y"&&(pe.setFromAxisAngle(Ui,Math.atan2(ce.x,ce.z)),pe.multiplyQuaternions(Co,pe),o.quaternion.copy(pe)),o.name==="Z"&&(pe.setFromAxisAngle(_r,Math.atan2(ce.y,ce.x)),pe.multiplyQuaternions(Co,pe),o.quaternion.copy(pe))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(l){return o.name===l}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(t)}}class Vy extends ct{constructor(){super(new Xi(1e5,1e5,2,2),new pn({visible:!1,wireframe:!0,side:Ie,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),Ro.copy(gr).applyQuaternion(e==="local"?this.worldQuaternion:Ho),ur.copy(Ui).applyQuaternion(e==="local"?this.worldQuaternion:Ho),dr.copy(_r).applyQuaternion(e==="local"?this.worldQuaternion:Ho),ce.copy(ur),this.mode){case"translate":case"scale":switch(this.axis){case"X":ce.copy(this.eye).cross(Ro),Cn.copy(Ro).cross(ce);break;case"Y":ce.copy(this.eye).cross(ur),Cn.copy(ur).cross(ce);break;case"Z":ce.copy(this.eye).cross(dr),Cn.copy(dr).cross(ce);break;case"XY":Cn.copy(dr);break;case"YZ":Cn.copy(Ro);break;case"XZ":ce.copy(dr),Cn.copy(ur);break;case"XYZ":case"E":Cn.set(0,0,0);break}break;case"rotate":default:Cn.set(0,0,0)}Cn.length()===0?this.quaternion.copy(this.cameraQuaternion):(Ku.lookAt(ze.set(0,0,0),Cn,ce),this.quaternion.setFromRotationMatrix(Ku)),super.updateMatrixWorld(t)}}const Po=[12483405,6000056,8036956,11557980,9269184,13215804,5223333,11561374],Qu=3043280;class Gy{constructor(t){this.host=t}plane=new Sn(new R(-1,0,0),0);proxy=new ue;translate=null;rotate=null;quad=null;quadDisposables=[];capObjects=[];capQuads=[];bucketGeos=[];capDisposables=[];geometry=null;fullIndex=null;solidOfTri=null;slotOfSolid=new Map;slotCount=1;hiddenSolids=new Set;on=!1;capsAllowed=!0;get enabled(){return this.on}busy(){const t=this.translate,e=this.rotate;return this.on&&!!t&&!!e&&(t.dragging||e.dragging||t.axis!==null||e.axis!==null)}setEnabled(t){this.on=t,t&&this.ensure(),this.updateVisibility()}setCamera(t){this.translate&&(this.translate.camera=t),this.rotate&&(this.rotate.camera=t)}setGeometry(t,e=null,n=null){this.geometry=t,this.fullIndex=e,this.solidOfTri=n,this.hiddenSolids=new Set,this.slotOfSolid.clear(),n&&[...new Set(n)].sort((r,o)=>r-o).forEach((r,o)=>this.slotOfSolid.set(r,o%Po.length)),this.slotCount=this.slotOfSolid.size?Math.min(this.slotOfSolid.size,Po.length):1,this.translate&&this.rebuildCaps()}setHiddenSolids(t){this.hiddenSolids=new Set(t),this.bucketGeos.length&&this.refillBucketIndices()}refit(){this.translate&&(this.proxy.position.copy(this.host.partCenter()),this.buildQuad(),this.sync())}flip(){this.translate&&(this.proxy.rotateX(Math.PI),this.sync())}setAxis(t){this.translate&&(this.proxy.quaternion.setFromUnitVectors(new R(0,0,1),this.normalTowardCut(t)),this.sync())}setCapsAllowed(t){this.capsAllowed=t,this.updateVisibility()}normalTowardCut(t){const e=this.host.partCenter().sub(this.host.camera().position),n=t??(Math.abs(e.x)>=Math.abs(e.y)&&Math.abs(e.x)>=Math.abs(e.z)?"x":Math.abs(e.y)>=Math.abs(e.z)?"y":"z"),s=new R(n==="x"?1:0,n==="y"?1:0,n==="z"?1:0);return s.dot(e)<0&&s.negate(),s}arbitrateHover=()=>{const t=this.translate,e=this.rotate;if(!t||!e||t.dragging||e.dragging)return;const n=this.on&&t.axis===null;e.enabled!==n&&(e.enabled=n,n||(e.axis=null))};ensure(){if(this.translate)return;this.proxy.position.copy(this.host.partCenter()),this.proxy.quaternion.setFromUnitVectors(new R(0,0,1),this.normalTowardCut()),this.host.scene.add(this.proxy);const t=(e,n,s)=>{const r=new Uy(this.host.camera(),this.host.domElement());return r.setMode(e),r.setSpace("local"),r.setSize(n),s(r),r.addEventListener("dragging-changed",o=>{this.host.onDraggingChanged(!!o.value)}),r.addEventListener("objectChange",()=>this.sync()),r.attach(this.proxy),this.host.scene.add(r.getHelper()),r};this.translate=t("translate",.75,e=>{e.showX=!1,e.showY=!1}),this.rotate=t("rotate",1.05,e=>{e.showZ=!1}),this.host.domElement().addEventListener("pointermove",this.arbitrateHover),this.buildQuad(),this.rebuildCaps(),this.sync()}buildQuad(){if(this.quad){this.proxy.remove(this.quad);for(const a of this.quadDisposables)a.dispose();this.quadDisposables=[]}const t=this.host.bboxDiag()*1.15,e=new ki,n=new Xi(t,t),s=new pn({color:Qu,transparent:!0,opacity:.08,side:Ie,depthWrite:!1}),r=new nm(n),o=new qn({color:Qu,transparent:!0,opacity:.7});this.quadDisposables.push(n,s,r,o),e.add(new ct(n,s)),e.add(new Bo(r,o)),this.quad=e,this.proxy.add(e)}bucketIndices(){const t=this.fullIndex??(this.geometry?.getIndex()?.array||null);if(!t)return[];const e=this.solidOfTri;if(!e||!this.slotOfSolid.size)return[t];const n=new Array(this.slotCount).fill(0);for(let o=0;o<e.length;o++)this.hiddenSolids.has(e[o])||n[this.slotOfSolid.get(e[o])]++;const s=n.map(o=>new Uint32Array(o*3)),r=new Array(this.slotCount).fill(0);for(let o=0;o<e.length;o++){const a=e[o];if(this.hiddenSolids.has(a))continue;const l=this.slotOfSolid.get(a),c=s[l];c[r[l]]=t[o*3],c[r[l]+1]=t[o*3+1],c[r[l]+2]=t[o*3+2],r[l]+=3}return s}refillBucketIndices(){const t=this.bucketIndices();this.bucketGeos.forEach((e,n)=>{e.setIndex(new Me(t[n]??new Uint32Array(0),1))})}rebuildCaps(){for(const n of this.capObjects)this.host.scene.remove(n);for(const n of this.capDisposables)n.dispose();if(this.capObjects=[],this.capQuads=[],this.bucketGeos=[],this.capDisposables=[],!this.geometry)return;const t=this.geometry.getAttribute("position"),e=this.host.bboxDiag()*4;this.bucketIndices().forEach((n,s)=>{const r=new le;r.setAttribute("position",t),r.setIndex(new Me(n,1)),r.boundingSphere=this.geometry.boundingSphere,this.bucketGeos.push(r),this.capDisposables.push(r);const o=()=>{const _=new pn;return _.depthWrite=!1,_.depthTest=!1,_.colorWrite=!1,_.stencilWrite=!0,_.stencilFunc=dc,_.clippingPlanes=[this.plane],this.capDisposables.push(_),_},a=o();a.side=ke,a.stencilFail=wa,a.stencilZFail=wa,a.stencilZPass=wa;const l=o();l.side=Tn,l.stencilFail=Ta,l.stencilZFail=Ta,l.stencilZPass=Ta;const c=new ct(r,a),d=new ct(r,l),h=1+s*.02;c.renderOrder=h,d.renderOrder=h;const u=new Xi(e,e),p=new Pd({color:Po[s%Po.length],metalness:.05,roughness:.8,side:Ie,stencilWrite:!0,stencilRef:0,stencilFunc:mp,stencilFail:Ea,stencilZFail:Ea,stencilZPass:Ea});this.capDisposables.push(u,p);const g=new ct(u,p);g.renderOrder=h+.01,g.onAfterRender=_=>_.clearStencil(),g.position.copy(this.proxy.position),g.quaternion.copy(this.proxy.quaternion),this.capQuads.push(g),this.capObjects.push(c,d,g)});for(const n of this.capObjects)this.host.scene.add(n);this.updateVisibility()}sync(){const t=new R(0,0,1).applyQuaternion(this.proxy.quaternion);this.plane.setFromNormalAndCoplanarPoint(t,this.proxy.position);for(const e of this.capQuads)e.position.copy(this.proxy.position),e.quaternion.copy(this.proxy.quaternion)}updateVisibility(){this.proxy.visible=this.on;for(const e of[this.translate,this.rotate])e&&(e.enabled=this.on,e.getHelper().visible=this.on);const t=this.on&&this.capsAllowed;for(const e of this.capObjects)e.visible=t}}const Ss={vertex:10,center:10,midpoint:8,edge:6},bs={vertex:16754219,center:5088255,midpoint:4054148,edge:16777215,surface:10134961},Lo={light:11817737,dark:16756768},yn=i=>{const t=Math.abs(i),e=t>=100?2:t>=1?3:4;return`${i.toFixed(e)} mm`},Wy=i=>`${(i*180/Math.PI).toFixed(1)}°`;class Xy{host;_enabled=!1;mode="distance";data=null;theme="dark";verts=new Float32Array(0);vertSolid=new Uint32Array(0);centers=new Float32Array(0);centerSolid=new Uint32Array(0);centerEdge=new Uint32Array(0);mids=new Float32Array(0);midSolid=new Uint32Array(0);midEdge=new Uint32Array(0);sphC=new Float32Array(0);sphR=new Float32Array(0);group=new ki;hoverMarker;firstMarker;edgeHover;rubber;rubberLabel;lineMat;rubberMat;edgeMat;measurements=[];scalables=[];firstPoint=null;downAt=null;pendingMove=null;raycaster=new ua;_ndc=new wt;_v=new R;_a=new R;_b=new R;_seg=new R;_segPt=new R;constructor(t){this.host=t,this.group.name="measure",t.scene.add(this.group);const e=new Gs(1,16,10);this.hoverMarker=new ct(e,new pn({color:bs.surface,depthTest:!1})),this.hoverMarker.renderOrder=11,this.hoverMarker.visible=!1,this.group.add(this.hoverMarker),this.scalables.push([this.hoverMarker,.012]),this.firstMarker=new ct(e,new pn({color:bs.vertex,depthTest:!1})),this.firstMarker.renderOrder=11,this.firstMarker.visible=!1,this.group.add(this.firstMarker),this.scalables.push([this.firstMarker,.01]),this.lineMat=new qn({color:Lo.dark,depthTest:!1}),this.rubberMat=new om({color:Lo.dark,depthTest:!1,dashSize:1,gapSize:.6,transparent:!0,opacity:.9}),this.edgeMat=new qn({color:bs.center,depthTest:!1});const n=new le;n.setAttribute("position",new Kt(new Float32Array(6),3)),this.rubber=new sn(n,this.rubberMat),this.rubber.renderOrder=9,this.rubber.visible=!1,this.rubber.frustumCulled=!1,this.group.add(this.rubber),this.rubberLabel=this.makeLabel(""),this.rubberLabel.visible=!1,this.group.add(this.rubberLabel),this.edgeHover=new sn(new le,this.edgeMat),this.edgeHover.renderOrder=9,this.edgeHover.visible=!1,this.edgeHover.frustumCulled=!1,this.group.add(this.edgeHover)}get enabled(){return this._enabled}setEnabled(t){if(t===this._enabled)return;this._enabled=t;const e=this.host.domElement();e.parentElement?.classList.toggle("measuring",t),t?(e.addEventListener("pointerdown",this.onDown),document.addEventListener("pointermove",this.onMove),document.addEventListener("pointerup",this.onUp),document.addEventListener("keydown",this.onKey)):(e.removeEventListener("pointerdown",this.onDown),document.removeEventListener("pointermove",this.onMove),document.removeEventListener("pointerup",this.onUp),document.removeEventListener("keydown",this.onKey),this.cancelPending())}setMode(t){this.mode=t,this.cancelPending()}setData(t){this.data=t,this.clearAll(),this.cancelPending(),this.buildCaches();const e=this.host.bboxDiag();this.rubberMat.dashSize=e*.012,this.rubberMat.gapSize=e*.008}clearAll(){for(const t of this.measurements){for(const e of t.objects)this.group.remove(e),e.geometry?.dispose?.();for(const e of t.labels)this.group.remove(e),e.element.remove()}this.scalables.length=2,this.measurements=[]}setTheme(t){this.theme=t;const e=Lo[t];this.lineMat.color.set(e),this.rubberMat.color.set(e)}update(){if(this.pendingMove&&this._enabled){const{x:e,y:n,touch:s}=this.pendingMove;this.pendingMove=null,this.hover(e,n,s)}if(!this.scalables.length)return;const t=this.host.camera();for(const[e,n]of this.scalables){if(!e.visible)continue;const s=t.isOrthographicCamera?(t.top-t.bottom)/2/t.zoom:t.position.distanceTo(e.position)*Math.tan(t.fov*Math.PI/360);e.scale.setScalar(Math.max(s*n,1e-6))}}dispose(){this.setEnabled(!1),this.clearAll(),this.host.scene.remove(this.group)}onDown=t=>{if(t.button!==0||this.host.busy()){this.downAt=null;return}this.downAt={x:t.clientX,y:t.clientY}};onMove=t=>{this.pendingMove={x:t.clientX,y:t.clientY,touch:t.pointerType==="touch"}};onUp=t=>{const e=this.downAt;if(this.downAt=null,!e||t.button!==0||Math.hypot(t.clientX-e.x,t.clientY-e.y)>=3||this.host.busy())return;const n=this.query(t.clientX,t.clientY,t.pointerType==="touch");n&&(this.mode==="distance"?this.clickDistance(n):(n.kind==="edge"||n.kind==="center"||n.kind==="midpoint")&&this.commitEdge(n))};onKey=t=>{if(t.key!=="Escape")return;const e=t.target;if(!(e&&(e.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(e.tagName)))){if(t.preventDefault(),this.firstPoint){this.cancelPending();return}this.setEnabled(!1),this.host.onEnabledChanged(!1)}};cancelPending(){this.firstPoint=null,this.firstMarker.visible=!1,this.rubber.visible=!1,this.rubberLabel.visible=!1,this.hoverMarker.visible=!1,this.edgeHover.visible=!1}hover(t,e,n){const s=this.query(t,e,n);if(!s){this.hoverMarker.visible=!1,this.edgeHover.visible=!1,this.firstPoint&&(this.rubber.visible=!1,this.rubberLabel.visible=!1);return}if(this.hoverMarker.material.color.set(bs[s.kind]),this.hoverMarker.position.copy(s.point),this.hoverMarker.visible=!0,this.mode==="edge"&&s.edgeIdx!==null?this.showEdgeHover(s.edgeIdx):this.edgeHover.visible=!1,this.mode==="distance"&&this.firstPoint){const r=this.firstPoint.point,o=s.point,a=this.rubber.geometry.getAttribute("position");a.setXYZ(0,r.x,r.y,r.z),a.setXYZ(1,o.x,o.y,o.z),a.needsUpdate=!0,this.rubber.geometry.computeBoundingSphere(),this.rubber.computeLineDistances(),this.rubber.visible=!0,this.setLabel(this.rubberLabel,yn(r.distanceTo(o)),r.clone().add(o).multiplyScalar(.5)),this.rubberLabel.visible=!0}}query(t,e,n){const r=this.host.domElement().getBoundingClientRect();if(!r.width||!r.height)return null;const o=this.host.camera();o.updateMatrixWorld(),this._ndc.set((t-r.left)/r.width*2-1,-((e-r.top)/r.height)*2+1),this.raycaster.setFromCamera(this._ndc,o);const a=this.raycaster.ray,l=this.host.raycastSurface(t,e),c=Math.max(.1,this.host.bboxDiag()*.005),d=l?this._v.copy(l).sub(a.origin).dot(a.direction)+c:1/0,h=this.host.hiddenSolids(),u=this.host.sectionPlane(),p=n?2:1,g=(x,y,E)=>{if(this._v.set(x,y,E),u&&u.distanceToPoint(this._v)<-1e-6)return 1/0;const b=this._a.copy(this._v).sub(a.origin).dot(a.direction);if(b<0||b>d||(this._v.project(o),this._v.z>1))return 1/0;const w=r.left+(this._v.x+1)/2*r.width,A=r.top+(1-this._v.y)/2*r.height;return Math.hypot(w-t,A-e)},_=(x,y)=>{let E=1/0,b=-1;for(let w=0;w<y.length;w++){if(h.has(y[w]))continue;const A=g(x[w*3],x[w*3+1],x[w*3+2]);A<E&&(E=A,b=w)}return{d:E,i:b}},m=(x,y)=>new R(x[y*3],x[y*3+1],x[y*3+2]);if(this.mode==="distance"&&this.data){const x=_(this.verts,this.vertSolid);if(x.d<=Ss.vertex*p)return{kind:"vertex",point:m(this.verts,x.i),edgeIdx:null};const y=_(this.centers,this.centerSolid);if(y.d<=Ss.center*p)return{kind:"center",point:m(this.centers,y.i),edgeIdx:this.centerEdge[y.i]};const E=_(this.mids,this.midSolid);if(E.d<=Ss.midpoint*p)return{kind:"midpoint",point:m(this.mids,E.i),edgeIdx:this.midEdge[E.i]}}const f=this.nearestEdgePoint(a,g,d),v=(this.mode==="edge"?Ss.vertex:Ss.edge)*p;if(f&&f.d<=v)return{kind:"edge",point:f.point,edgeIdx:f.edgeIdx};if(this.mode==="edge"){if(this.data){const x=_(this.centers,this.centerSolid);if(x.d<=Ss.center*p)return{kind:"center",point:m(this.centers,x.i),edgeIdx:this.centerEdge[x.i]}}return null}return l?{kind:"surface",point:l.clone(),edgeIdx:null}:null}nearestEdgePoint(t,e,n){const s=this.data;if(!s)return null;const r=this.host.hiddenSolids(),o=s.points;let a=1/0,l=-1;const c=new R;for(let h=0;h<s.edges.length;h++){const u=s.edges[h];if(r.has(u.solidId))continue;const p=this._seg.set(this.sphC[h*3],this.sphC[h*3+1],this.sphC[h*3+2]),g=this._a.copy(p).sub(t.origin).dot(t.direction);if(g-this.sphR[h]>n)continue;const _=this.worldPerPx(Math.max(g,0))*24;if(!(t.distanceSqToPoint(p)>(this.sphR[h]+_)**2))for(let m=1;m<u.count;m++){const f=(u.first+m-1)*3,v=(u.first+m)*3;this._a.set(o[f],o[f+1],o[f+2]),this._b.set(o[v],o[v+1],o[v+2]),t.distanceSqToSegment(this._a,this._b,void 0,this._segPt);const x=e(this._segPt.x,this._segPt.y,this._segPt.z);x<a&&(a=x,l=h,c.copy(this._segPt))}}if(l===-1)return null;const d=this.data.edges[l];if(d.kind==="circle"&&d.center&&d.axis&&d.radius){const h=new R(...d.center),u=new R(...d.axis),p=c.clone().sub(h).addScaledVector(u,-c.clone().sub(h).dot(u));p.lengthSq()>1e-12&&c.copy(h).addScaledVector(p.normalize(),d.radius)}return{d:a,point:c,edgeIdx:l}}worldPerPx(t){const e=this.host.camera(),n=this.host.domElement().getBoundingClientRect().height||1;if(e.isOrthographicCamera){const s=e;return(s.top-s.bottom)/s.zoom/n}return 2*Math.max(t,.001)*Math.tan(e.fov*Math.PI/360)/n}clickDistance(t){if(!this.firstPoint){this.firstPoint=t,this.firstMarker.material.color.set(bs[t.kind]),this.firstMarker.position.copy(t.point),this.firstMarker.visible=!0;return}const e=this.firstPoint.point,n=t.point;if(this.firstPoint=null,this.firstMarker.visible=!1,this.rubber.visible=!1,this.rubberLabel.visible=!1,e.distanceTo(n)<1e-9)return;const s=new le().setFromPoints([e,n]),r=new sn(s,this.lineMat);r.renderOrder=9,r.frustumCulled=!1;const o=this.makeDot(e),a=this.makeDot(n),l=this.makeLabel(yn(e.distanceTo(n)),e.clone().add(n).multiplyScalar(.5));l.element.title=`ΔX ${yn(Math.abs(n.x-e.x))}  ΔY ${yn(Math.abs(n.y-e.y))}  ΔZ ${yn(Math.abs(n.z-e.z))}`,this.group.add(r,o,a,l),this.measurements.push({objects:[r,o,a],labels:[l]})}commitEdge(t){const e=this.data;if(!e||t.edgeIdx===null)return;const n=e.edges[t.edgeIdx],s=[],r=new sn(this.edgePolylineGeometry(n),this.lineMat);r.renderOrder=9,r.frustumCulled=!1,s.push(r);let o;(n.kind==="circle"||n.kind==="ellipse")&&n.center?(o=new R(...n.center),s.push(this.makeDot(o,bs.center))):o=this.edgeMidpoint(n);const a=this.makeLabel(this.edgeLabel(n),o);for(const l of s)this.group.add(l);this.group.add(a),this.measurements.push({objects:s,labels:[a]})}edgeMidpoint(t){const e=this.data.points;let n=0;for(let a=1;a<t.count;a++){const l=(t.first+a-1)*3,c=(t.first+a)*3;n+=Math.hypot(e[c]-e[l],e[c+1]-e[l+1],e[c+2]-e[l+2])}let s=0;const r=n/2;for(let a=1;a<t.count;a++){const l=(t.first+a-1)*3,c=(t.first+a)*3,d=Math.hypot(e[c]-e[l],e[c+1]-e[l+1],e[c+2]-e[l+2]);if(s+d>=r&&d>0){const h=(r-s)/d;return new R(e[l]+(e[c]-e[l])*h,e[l+1]+(e[c+1]-e[l+1])*h,e[l+2]+(e[c+2]-e[l+2])*h)}s+=d}const o=t.first*3;return new R(e[o],e[o+1],e[o+2])}edgeLabel(t){return t.kind==="circle"?Math.abs(t.sweep??0)>Math.PI*2-.001?`Ø ${yn((t.radius??0)*2)}`:`R ${yn(t.radius??0)} · ${Wy(Math.abs(t.sweep??0))}`:t.kind==="ellipse"?`⌀ ${yn((t.radius??0)*2)} × ${yn((t.radius2??0)*2)}`:t.kind==="line"?`L ${yn(t.length)}`:`L ≈ ${yn(t.length)}`}makeDot(t,e){const n=new ct(new Gs(1,12,8),new pn({color:e??Lo[this.theme],depthTest:!1}));return n.renderOrder=11,n.position.copy(t),this.scalables.push([n,.007]),n}makeLabel(t,e){const n=document.createElement("div");n.className="measure-label",n.textContent=t;const s=new yv(n);return e&&s.position.copy(e),s}setLabel(t,e,n){t.element.textContent=e,t.position.copy(n)}showEdgeHover(t){const e=this.data?.edges[t];e&&(this.edgeHover.geometry.dispose(),this.edgeHover.geometry=this.edgePolylineGeometry(e),this.edgeHover.visible=!0)}edgePolylineGeometry(t){const e=this.data.points,n=new Float32Array(t.count*3);n.set(e.subarray(t.first*3,(t.first+t.count)*3));const s=new le;return s.setAttribute("position",new Kt(n,3)),s}buildCaches(){const t=this.data;if(!t){this.verts=new Float32Array(0),this.vertSolid=new Uint32Array(0),this.centers=new Float32Array(0),this.centerSolid=new Uint32Array(0),this.centerEdge=new Uint32Array(0),this.mids=new Float32Array(0),this.midSolid=new Uint32Array(0),this.midEdge=new Uint32Array(0),this.sphC=new Float32Array(0),this.sphR=new Float32Array(0);return}const e=t.points,n=t.edges.length,s=new Map,r=[],o=[],a=(g,_)=>{const m=`${Math.round(e[g]*1e4)}_${Math.round(e[g+1]*1e4)}_${Math.round(e[g+2]*1e4)}`;s.has(m)||(s.set(m,r.length/3),r.push(e[g],e[g+1],e[g+2]),o.push(_))},l=[],c=[],d=[],h=[],u=[],p=[];this.sphC=new Float32Array(n*3),this.sphR=new Float32Array(n);for(let g=0;g<n;g++){const _=t.edges[g];if(a(_.first*3,_.solidId),a((_.first+_.count-1)*3,_.solidId),(_.kind==="circle"||_.kind==="ellipse")&&_.center&&(l.push(_.center[0],_.center[1],_.center[2]),c.push(_.solidId),d.push(g)),_.count>=2){const S=this.edgeMidpoint(_);h.push(S.x,S.y,S.z),u.push(_.solidId),p.push(g)}let m=1/0,f=1/0,v=1/0,x=-1/0,y=-1/0,E=-1/0;for(let S=0;S<_.count;S++){const M=(_.first+S)*3,P=e[M],D=e[M+1],I=e[M+2];P<m&&(m=P),P>x&&(x=P),D<f&&(f=D),D>y&&(y=D),I<v&&(v=I),I>E&&(E=I)}const b=(m+x)/2,w=(f+y)/2,A=(v+E)/2;this.sphC[g*3]=b,this.sphC[g*3+1]=w,this.sphC[g*3+2]=A,this.sphR[g]=Math.hypot(x-b,y-w,E-A)}this.verts=Float32Array.from(r),this.vertSolid=Uint32Array.from(o),this.centers=Float32Array.from(l),this.centerSolid=Uint32Array.from(c),this.centerEdge=Uint32Array.from(d),this.mids=Float32Array.from(h),this.midSolid=Uint32Array.from(u),this.midEdge=Uint32Array.from(p)}}const Ko=7311280,Yy=3399048,qy=16726832,Zy=724498,jy=16754219,$y={0:"iso",1:"top",2:"bottom",3:"front",4:"behind",5:"left",6:"right"},yl=new R(.7,-.8,.55);class Ky{renderer;scene=new Kp;persp;ortho;camera;keyLight;fillLight;controls;content;container;scheme=jo[0];navAction=null;navMask=0;navLast=null;zoomAnchor=null;chordDown=null;catiaZoomLatch=!1;pivotMarker;orbitPivot=null;lastOrbitPivot=null;orbitStart=null;orbitLast=null;orbiting=!1;raycaster=new ua;pointerNdc=new wt;_oq1=new ve;_oq2=new ve;_oRight=new R;_oTmp=new R;_oTmp2=new R;_oDir=new R;_oUp=new R;orthoOn=!1;showWire=!1;showEdges=!1;showFeature=!0;showReference=!1;deviationOn=!1;showColors=!0;transparentOn=!1;solidVisible=!0;smoothOn=!0;faceColors=null;devColors=null;solidOfTri=null;fullIndex=null;boundarySet=null;featureSet=null;hiddenSolids=new Set;wireDirty=!1;drawnSolidOfTri=null;rmbStart=null;onContextMenu=null;clipSphere=new Xs;clipSphereDirty=!0;section;viewHelper;explodeData=null;explodeFactor=0;explodePending=null;explodeTarget=null;explodeBase=null;instanceOfVertex=null;explodedOffsets=null;explodeBlendFrom=null;explodeBlendT=1;pickBvhDirty=!1;measure;labelRenderer;pickBvh=null;pickGeo=null;onMeasureExit=null;constructor(t){this.container=t,this.renderer=new qx({antialias:!0,stencil:!0}),this.renderer.localClippingEnabled=!0,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.autoClear=!1,t.appendChild(this.renderer.domElement),this.scene.background=new kt(1316893),this.persp=new cn(45,1,.01,1e6),this.persp.up.set(0,0,1),this.persp.position.set(70,-80,55),this.ortho=new ha(-1,1,1,-1,.01,1e6),this.ortho.up.set(0,0,1),this.ortho.position.set(70,-80,55),this.camera=this.persp,this.controls=this.makeControls(new R),this.viewHelper=this.makeViewHelper();const e=new am(16777215,6316136,.9);e.position.set(0,0,1),this.scene.add(e),this.keyLight=new jh(16777215,1.6),this.scene.add(this.keyLight),this.fillLight=new jh(16777215,.7),this.scene.add(this.fillLight),this.updateLights(),this.pivotMarker=new ct(new Gs(1,16,10),new pn({color:16720418,depthTest:!1})),this.pivotMarker.renderOrder=10,this.pivotMarker.visible=!1,this.scene.add(this.pivotMarker);const n=new ki;this.scene.add(n),this.content={group:n,solid:null,wire:null,edges:null,feature:null,reference:null,highlight:null},this.section=new Gy({scene:this.scene,camera:()=>this.camera,domElement:()=>this.renderer.domElement,onDraggingChanged:r=>{this.controls.enabled=!r},bboxDiag:()=>this.contentDiag(),partCenter:()=>this.contentCenter()}),this.labelRenderer=new Mv;const s=this.labelRenderer.domElement;s.style.position="absolute",s.style.inset="0",s.style.pointerEvents="none",t.appendChild(s),this.measure=new Xy({scene:this.scene,camera:()=>this.camera,domElement:()=>this.renderer.domElement,raycastSurface:(r,o)=>this.raycastSurface(r,o),sectionPlane:()=>this.section.enabled?this.section.plane:null,hiddenSolids:()=>this.hiddenSolids,busy:()=>this.section.busy(),onEnabledChanged:()=>this.onMeasureExit?.(),bboxDiag:()=>this.contentDiag()}),this.installNavigation(this.renderer.domElement),window.addEventListener("resize",()=>this.resize()),this.resize(),this.animate()}resize(){const t=this.container.clientWidth,e=this.container.clientHeight;this.renderer.setSize(t,e,!0),this.labelRenderer.setSize(t,e),this.persp.aspect=t/e,this.persp.updateProjectionMatrix(),this.setOrthoFrustum(this.ortho.top-this.ortho.bottom),this.ortho.updateProjectionMatrix()}makeControls(t){const e=new ov(this.camera,this.renderer.domElement);return e.enableDamping=!0,e.dampingFactor=.08,e.enableRotate=!1,e.enableZoom=!1,e.enablePan=!1,e.minPolarAngle=0,e.maxPolarAngle=Math.PI,e.target.copy(t),e.update(),e}setOrthoFrustum(t){const e=this.container.clientWidth/Math.max(1,this.container.clientHeight),n=Math.max(t,.001)/2;this.ortho.top=n,this.ortho.bottom=-n,this.ortho.left=-n*e,this.ortho.right=n*e}setProjection(t){if(t===this.orthoOn)return;const e=this.controls.target.clone(),n=this.camera.position.clone(),s=n.distanceTo(e);this.orthoOn=t,t?(this.setOrthoFrustum(2*s*Math.tan(this.persp.fov*Math.PI/360)),this.ortho.position.copy(n),this.ortho.up.copy(this.persp.up),this.ortho.zoom=1,this.ortho.updateProjectionMatrix(),this.camera=this.ortho):(this.persp.position.copy(n),this.persp.up.copy(this.ortho.up),this.persp.updateProjectionMatrix(),this.camera=this.persp),this.controls.dispose(),this.controls=this.makeControls(e),this.section.setCamera(this.camera),this.viewHelper.dispose(),this.viewHelper=this.makeViewHelper()}makeViewHelper(){const t=new vv(this.camera,this.renderer.domElement);return t.setLabels("X","Y","Z"),t.traverse(e=>{typeof e.userData.type=="string"&&e.userData.type.startsWith("neg")&&(e.visible=!1)}),t}contentCenter(){const t=this.content.solid;return t?new ye().expandByObject(t).getCenter(new R):this.controls.target.clone()}contentDiag(){const t=this.content.solid;return t&&new ye().expandByObject(t).getSize(new R).length()||100}setNavScheme(t){this.scheme=t,this.endOrbitDrag(),this.navAction=null,this.navMask=0,this.navLast=null,this.zoomAnchor=null,this.chordDown=null,this.catiaZoomLatch=!1}installNavigation(t){t.addEventListener("pointerdown",e=>this.syncNavButtons(e)),t.addEventListener("mousedown",e=>{e.button===1&&e.preventDefault()}),t.addEventListener("contextmenu",e=>{e.preventDefault();const n=this.rmbStart;this.rmbStart=null,!(e.buttons&7)&&(n&&Math.hypot(e.clientX-n.x,e.clientY-n.y)>4||this.onContextMenu?.(this.pickSolid(e.clientX,e.clientY),e.clientX,e.clientY))}),document.addEventListener("pointermove",this.onNavMove),document.addEventListener("pointerup",e=>{this.navMask&&this.syncNavButtons(e)}),document.addEventListener("keydown",this.onViewKey),t.addEventListener("wheel",this.onWheel,{passive:!1})}syncNavButtons(t){const e=t.buttons&7;if(e===this.navMask)return;const n=this.navMask;if(this.navMask=e,e&je&&!(n&je)&&(this.rmbStart={x:t.clientX,y:t.clientY}),this.scheme.catiaZoomTick&&n&qt&&e&qt){if(e&~qt&~n)this.chordDown={t:performance.now(),x:t.clientX,y:t.clientY};else if(n&~qt&~e&&this.chordDown){const s=this.chordDown;performance.now()-s.t<300&&Math.hypot(t.clientX-s.x,t.clientY-s.y)<5&&(this.catiaZoomLatch=!0),this.chordDown=null}}else this.chordDown=null;this.updateNavAction(t)}updateNavAction(t){const e=t.buttons&7;e&qt||(this.catiaZoomLatch=!1);let n=null;this.catiaZoomLatch&&e===qt?n="zoom":e&&(n=this.scheme.bindings.find(r=>r.buttons===e&&!!r.shift===t.shiftKey&&!!r.ctrl===t.ctrlKey&&!!r.alt===t.altKey)?.action??null),n!==this.navAction&&(this.endOrbitDrag(),this.navAction=null,this.navLast=null,this.zoomAnchor=null,!(!n||this.section.busy())&&(this.navAction=n,n==="orbit"?this.beginOrbit(t):(this.navLast={x:t.clientX,y:t.clientY},n==="zoom"&&(this.zoomAnchor={x:t.clientX,y:t.clientY}))))}onNavMove=t=>{if(this.navMask&&(t.buttons&7)!==this.navMask){this.syncNavButtons(t);return}this.navAction==="orbit"?this.onOrbitMove(t):this.navAction==="pan"?this.onPanMove(t):this.navAction==="zoom"&&this.onZoomMove(t)};orbitTargets(){const t=[];return this.content.solid&&t.push(this.content.solid),this.content.reference?.visible&&t.push(this.content.reference),t}pickPoint(t){const e=this.orbitTargets();if(!e.length)return null;const n=this.renderer.domElement.getBoundingClientRect();this.pointerNdc.x=(t.clientX-n.left)/n.width*2-1,this.pointerNdc.y=-((t.clientY-n.top)/n.height)*2+1,this.raycaster.setFromCamera(this.pointerNdc,this.camera);const s=this.raycaster.intersectObjects(e,!1);if(this.section.enabled){const r=s.find(o=>this.section.plane.distanceToPoint(o.point)>-1e-6);return r?r.point.clone():null}return s.length?s[0].point.clone():null}pickSolid(t,e){const n=this.content;if(!n.solid||!this.drawnSolidOfTri)return null;const s=this.renderer.domElement.getBoundingClientRect();this.pointerNdc.x=(t-s.left)/s.width*2-1,this.pointerNdc.y=-((e-s.top)/s.height)*2+1,this.raycaster.setFromCamera(this.pointerNdc,this.camera);const r=this.raycaster.intersectObject(n.solid,!1),o=this.section.enabled?r.find(a=>this.section.plane.distanceToPoint(a.point)>-1e-6):r[0];return!o||o.faceIndex==null?null:this.drawnSolidOfTri[o.faceIndex]??null}ensurePickBvh(){if(this.pickBvh)return this.pickBvhDirty&&(this.pickBvh.refit(),this.pickBvhDirty=!1),this.pickBvh;const t=this.content;if(!t.solid||!this.fullIndex)return null;const e=new le;return e.setAttribute("position",t.solid.geometry.getAttribute("position")),e.setIndex(new Me(this.fullIndex,1)),this.pickGeo=e,this.pickBvh=new ma(e,{indirect:!0}),this.pickBvhDirty=!1,this.pickBvh}raycastSurface(t,e){const n=this.ensurePickBvh();if(!n)return null;const s=this.renderer.domElement.getBoundingClientRect();this.pointerNdc.x=(t-s.left)/s.width*2-1,this.pointerNdc.y=-((e-s.top)/s.height)*2+1,this.raycaster.setFromCamera(this.pointerNdc,this.camera);const r=n.raycast(this.raycaster.ray,Ie);r.sort((o,a)=>o.distance-a.distance);for(const o of r)if(!(o.faceIndex!=null&&this.solidOfTri&&this.hiddenSolids.has(this.solidOfTri[o.faceIndex]))&&!(this.section.enabled&&this.section.plane.distanceToPoint(o.point)<-1e-6))return o.point.clone();return null}pickSolidsThrough(t,e){const n=this.ensurePickBvh();if(!n||!this.solidOfTri)return[];const s=this.renderer.domElement.getBoundingClientRect();this.pointerNdc.x=(t-s.left)/s.width*2-1,this.pointerNdc.y=-((e-s.top)/s.height)*2+1,this.raycaster.setFromCamera(this.pointerNdc,this.camera);const r=n.raycast(this.raycaster.ray,Ie);r.sort((l,c)=>l.distance-c.distance);const o=new Set,a=[];for(const l of r){if(l.faceIndex==null||this.section.enabled&&this.section.plane.distanceToPoint(l.point)<-1e-6)continue;const c=this.solidOfTri[l.faceIndex];o.has(c)||(o.add(c),a.push(c))}return a}beginOrbit(t){if(this.section.busy())return;const e=this.pickPoint(t)??this.lastOrbitPivot??this.controls.target.clone();this.orbitPivot=e.clone(),this.lastOrbitPivot=e.clone(),this.orbitStart={x:t.clientX,y:t.clientY},this.orbitLast={x:t.clientX,y:t.clientY},this.orbiting=!1}showPivotMarker(){const t=this.pivotMarker;if(!this.orbitPivot)return;t.position.copy(this.orbitPivot);const e=this.orthoOn?this.ortho.top/this.ortho.zoom:this.persp.position.distanceTo(this.orbitPivot)*Math.tan(this.persp.fov*Math.PI/360);t.scale.setScalar(e*.015),t.visible=!0}onOrbitMove=t=>{if(!this.orbitPivot||!this.orbitLast)return;if(!this.orbiting){if(Math.hypot(t.clientX-this.orbitStart.x,t.clientY-this.orbitStart.y)<3)return;this.orbiting=!0,this.showPivotMarker()}const e=t.clientX-this.orbitLast.x,n=t.clientY-this.orbitLast.y;if(this.orbitLast={x:t.clientX,y:t.clientY},e===0&&n===0)return;const s=this.orbitPivot,r=.005;this.camera.updateMatrixWorld(),this._oRight.setFromMatrixColumn(this.camera.matrixWorld,0).normalize(),this._oUp.setFromMatrixColumn(this.camera.matrixWorld,1).normalize(),this._oq1.setFromAxisAngle(this._oUp,-e*r),this._oq2.setFromAxisAngle(this._oRight,-n*r),this._oq1.premultiply(this._oq2),this._oTmp.copy(this.camera.position).sub(s).applyQuaternion(this._oq1),this.camera.position.copy(s).add(this._oTmp),this._oTmp2.copy(this.controls.target).sub(s).applyQuaternion(this._oq1),this.controls.target.copy(s).add(this._oTmp2),this.camera.up.applyQuaternion(this._oq1),this.camera.quaternion.premultiply(this._oq1),this.camera.updateMatrixWorld()};endOrbitDrag(){this.orbitPivot&&(this.orbitPivot=null,this.orbitStart=null,this.orbitLast=null,this.orbiting=!1,this.pivotMarker.visible=!1)}onPanMove(t){if(!this.navLast)return;const e=t.clientX-this.navLast.x,n=t.clientY-this.navLast.y;if(this.navLast={x:t.clientX,y:t.clientY},e===0&&n===0)return;const s=Math.max(1,this.renderer.domElement.clientHeight),r=this.orthoOn?(this.ortho.top-this.ortho.bottom)/this.ortho.zoom/s:2*this.persp.position.distanceTo(this.controls.target)*Math.tan(this.persp.fov*Math.PI/360)/s;this.camera.updateMatrixWorld(),this._oRight.setFromMatrixColumn(this.camera.matrixWorld,0).normalize(),this._oUp.setFromMatrixColumn(this.camera.matrixWorld,1).normalize(),this._oTmp.copy(this._oRight).multiplyScalar(-e*r).addScaledVector(this._oUp,n*r),this.camera.position.add(this._oTmp),this.controls.target.add(this._oTmp),this.controls.update()}onZoomMove(t){if(!this.navLast||!this.zoomAnchor)return;const e=t.clientY-this.navLast.y;this.navLast={x:t.clientX,y:t.clientY},e!==0&&this.zoomAt(Math.exp(-e*.005),this.zoomAnchor.x,this.zoomAnchor.y)}onWheel=t=>{t.preventDefault();const e=this.scheme.wheelZoomsOut?t.deltaY>0:t.deltaY<0;this.zoomAt(e?1.1:1/1.1,t.clientX,t.clientY)};zoomAt(t,e,n){const s=this.renderer.domElement.getBoundingClientRect(),r=(e-s.left)/s.width*2-1,o=-((n-s.top)/s.height)*2+1;if(this.orthoOn)this._oTmp.set(r,o,0).unproject(this.ortho),this.ortho.zoom=Math.max(.05,Math.min(200,this.ortho.zoom*t)),this.ortho.updateProjectionMatrix(),this._oTmp2.set(r,o,0).unproject(this.ortho),this._oTmp.sub(this._oTmp2),this.ortho.position.add(this._oTmp),this.controls.target.add(this._oTmp);else{const a=this.persp;a.updateMatrixWorld();const l=a.getWorldDirection(this._oDir);this._oTmp.set(r,o,.5).unproject(a).sub(a.position).normalize();const c=this._oTmp.dot(l),d=this._oTmp2.copy(this.controls.target).sub(a.position).dot(l);if(c<1e-6||d<1e-9)return;const h=this._oTmp.multiplyScalar(d/c).add(a.position),u=1/t,p=Math.max(this.clipSphere.radius,.001);if(t>1&&a.position.distanceTo(h)*u<p/500)return;a.position.sub(h).multiplyScalar(u).add(h),this.controls.target.sub(h).multiplyScalar(u).add(h)}this.controls.update()}onViewKey=t=>{if(t.altKey||t.shiftKey)return;const e=t.target;if(e&&(e.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(e.tagName)))return;const n=t.ctrlKey||t.metaKey;if(!n&&(t.key==="f"||t.key==="F")){t.preventDefault(),this.fit();return}const s=$y[t.key];!s||!n&&t.key==="0"||(t.preventDefault(),this.setCameraView(s))};visibleBox(){const t=this.content.solid;if(!t)return null;if(!this.hiddenSolids.size||!this.solidOfTri||!this.fullIndex)return new ye().expandByObject(t);const e=t.geometry.getAttribute("position"),n=new ye,s=this.solidOfTri,r=this.fullIndex;for(let o=0;o<s.length;o++)if(!this.hiddenSolids.has(s[o]))for(let a=0;a<3;a++){const l=r[o*3+a];this._oTmp.set(e.getX(l),e.getY(l),e.getZ(l)),n.expandByPoint(this._oTmp)}return n.isEmpty()?new ye().expandByObject(t):n}setCameraView(t){const e=this.visibleBox();if(!e)return;const n=e.getCenter(new R),s=e.getSize(new R),r=Math.max(s.x,s.y,s.z)*.5||1;let o;const a=new R(0,0,1);switch(t){case"top":o=new R(0,0,1),a.set(0,1,0);break;case"bottom":o=new R(0,0,-1),a.set(0,1,0);break;case"front":o=new R(0,-1,0);break;case"behind":o=new R(0,1,0);break;case"left":o=new R(-1,0,0);break;case"right":o=new R(1,0,0);break;default:o=yl.clone().normalize();break}const l=r/Math.sin(this.persp.fov*Math.PI/360)*1.4,c=n.clone().addScaledVector(o,l);this.persp.up.copy(a),this.persp.position.copy(c),this.persp.updateProjectionMatrix(),this.ortho.up.copy(a),this.ortho.position.copy(c),this.ortho.zoom=1,this.setOrthoFrustum(r*2.4),this.ortho.updateProjectionMatrix(),this.controls.target.copy(n),this.controls.update(),this.lastOrbitPivot=n.clone()}updateLights(){this.keyLight.position.set(.5,.7,1.5).applyQuaternion(this.camera.quaternion),this.fillLight.position.set(-1,-.6,.4).applyQuaternion(this.camera.quaternion)}updateClipPlanes(){if(this.clipSphereDirty){const n=new ye().expandByObject(this.content.group);if(n.isEmpty())return;n.getBoundingSphere(this.clipSphere),this.clipSphereDirty=!1}const t=Math.max(this.clipSphere.radius,.001),e=this.camera.position.distanceTo(this.clipSphere.center);this.orthoOn?(this.ortho.near=e-4*t,this.ortho.far=e+4*t,this.ortho.updateProjectionMatrix()):(this.persp.near=Math.max((e-t)*.8,t/1e3),this.persp.far=e+4*t,this.persp.updateProjectionMatrix())}animate=()=>{if(requestAnimationFrame(this.animate),this.explodeBlendT<1&&(this.explodeBlendT=Math.min(1,this.explodeBlendT+.1),this.applyExplode(this.explodePending??this.explodeFactor,!0),this.explodePending=null,this.explodeBlendT>=1&&(this.explodeBlendFrom=null)),this.explodeTarget!==null){const t=this.explodeTarget-this.explodeFactor;Math.abs(t)<.004?(this.explodePending=this.explodeTarget,this.explodeTarget=null):this.explodePending=this.explodeFactor+t*.18}if(this.explodePending!==null){const t=this.explodePending;this.explodePending=null,this.applyExplode(t)}this.controls.update(),this.updateClipPlanes(),this.updateLights(),this.measure.update(),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.viewHelper.render(this.renderer),this.labelRenderer.render(this.scene,this.camera)};refreshClipping(){const t=this.section.enabled?[this.section.plane]:null,e=this.content,n=[e.solid,e.wire,e.edges,e.feature,e.highlight,e.reference].map(s=>s?.material);for(const s of n){if(!s)continue;(s.clippingPlanes?.length??0)>0!==!!t&&(s.clippingPlanes=t,s.needsUpdate=!0)}}applyVisibility(){this.refreshClipping(),this.section.setCapsAllowed(this.solidVisible&&!this.transparentOn);const t=this.content;if(t.wire&&(t.wire.visible=this.showWire),t.edges&&(t.edges.visible=this.showEdges),t.feature&&(t.feature.visible=this.showFeature),t.reference&&(t.reference.visible=this.showReference),t.solid){t.solid.visible=this.solidVisible;const e=t.solid.material,n=this.deviationOn&&this.devColors?this.devColors:this.showColors?this.faceColors:null,s=t.solid.geometry,r=s.getAttribute("color");n?(!r||r.array!==n)&&s.setAttribute("color",new Kt(n,3)):r&&s.deleteAttribute("color"),e.vertexColors=!!n,e.color.set(e.vertexColors?16777215:Ko),e.flatShading=!this.smoothOn,e.transparent=this.transparentOn,e.opacity=this.transparentOn?.4:1,e.depthWrite=!this.transparentOn,e.needsUpdate=!0}}setMesh(t,e,n,s=null,r=null){const o=this.content;this.disposeMeshes(o),this.faceColors=s,this.devColors=null,this.lastOrbitPivot=null,this.disposePickBvh(),this.measure.setData(null),this.solidOfTri=r,this.drawnSolidOfTri=r,this.clipSphereDirty=!0,this.fullIndex=t.getIndex()?.array??null,this.boundarySet=e,this.featureSet=n,this.hiddenSolids.clear(),this.explodeData=null,this.explodeBase=null,this.instanceOfVertex=null,this.explodedOffsets=null,this.explodeFactor=0,this.explodePending=null,this.explodeTarget=null;const a=new im({color:Ko,specular:7829367,shininess:40,side:Ie,flatShading:!this.smoothOn,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});o.solid=new ct(t,a),o.group.add(o.solid);const l=new qn({color:790290,transparent:!0,opacity:.55}),c=new le;c.setAttribute("position",t.getAttribute("position")),c.setIndex(new Me(new Uint32Array(0),1)),c.boundingSphere=t.boundingSphere,o.wire=new Bo(c,l),o.wire.visible=this.showWire,o.group.add(o.wire),this.wireDirty=!0,this.showWire&&this.rebuildWire();const d=new le;d.setAttribute("position",new Kt(n.positions,3));const h=new qn({color:Zy});o.feature=new Bo(d,h),o.feature.visible=this.showFeature,o.group.add(o.feature);const u=new le;u.setAttribute("position",new Kt(e.positions,3));const p=new qn({color:qy,depthTest:!1});o.edges=new Bo(u,p),o.edges.renderOrder=10,o.edges.visible=this.showEdges,o.group.add(o.edges);const g=new le;g.setAttribute("position",t.getAttribute("position")),g.setIndex(new Me(new Uint32Array(0),1)),g.boundingSphere=t.boundingSphere;const _=new pn({color:jy,transparent:!0,opacity:.45,side:Ie,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});o.highlight=new ct(g,_),o.highlight.renderOrder=5,o.highlight.visible=!1,o.group.add(o.highlight),this.section.setGeometry(t,this.fullIndex,r),this.section.refit(),this.applyVisibility()}setReference(t){const e=this.content;if(e.reference&&(e.group.remove(e.reference),e.reference.material.dispose(),e.reference=null),t){const n=new Pd({color:Yy,transparent:!0,opacity:.28,metalness:0,roughness:1,side:Ie,depthWrite:!1});e.reference=new ct(t,n),e.reference.visible=this.showReference,e.group.add(e.reference)}this.clipSphereDirty=!0,this.refreshClipping()}setDeviationColors(t){this.devColors=t,this.applyVisibility()}setHiddenSolids(t){const e=this.content;if(!e.solid||!this.solidOfTri||!this.fullIndex)return;this.hiddenSolids=new Set(t);const n=e.solid.geometry,s=this.hiddenSolids.size?Ly(this.fullIndex,this.solidOfTri,this.hiddenSolids):this.fullIndex;if(n.setIndex(new Me(s,1)),this.hiddenSolids.size){const r=this.solidOfTri,o=new Uint32Array(r.length);let a=0;for(let l=0;l<r.length;l++)this.hiddenSolids.has(r[l])||(o[a++]=r[l]);this.drawnSolidOfTri=o.subarray(0,a)}else this.drawnSolidOfTri=this.solidOfTri;this.refreshEdgeOverlays(),this.wireDirty=!0,this.showWire&&this.rebuildWire(),this.section.setHiddenSolids(this.hiddenSolids)}setHighlightSolids(t){const e=this.content;if(!e.highlight||!this.solidOfTri||!this.fullIndex)return;if(!t||t.size===0){e.highlight.visible=!1;return}const n=this.solidOfTri,s=this.fullIndex,r=new Uint32Array(s.length);let o=0;for(let a=0;a<n.length;a++)t.has(n[a])&&(r[o]=s[a*3],r[o+1]=s[a*3+1],r[o+2]=s[a*3+2],o+=3);e.highlight.geometry.setIndex(new Me(r.slice(0,o),1)),e.highlight.visible=o>0}rebuildWire(){const t=this.content;if(!t.wire||!t.solid)return;const e=t.solid.geometry.getIndex().array;t.wire.geometry.setIndex(new Me(Py(e),1)),this.wireDirty=!1}setFeatureEdgeSet(t){this.featureSet=t,this.refreshEdgeOverlays()}displayedSegPositions(t){let e=t;const n=this.explodedOffsets;if(n&&t.instanceOfSeg){const s=t.positions.slice(),r=t.instanceOfSeg;for(let o=0;o<t.count;o++){const a=r[o]*3,l=o*6;s[l]+=n[a],s[l+1]+=n[a+1],s[l+2]+=n[a+2],s[l+3]+=n[a],s[l+4]+=n[a+1],s[l+5]+=n[a+2]}e={...t,positions:s}}return this.hiddenSolids.size?Iy(e,this.hiddenSolids):e.positions}refreshEdgeOverlays(){const t=this.content;t.feature&&this.featureSet&&(t.feature.geometry.setAttribute("position",new Kt(this.displayedSegPositions(this.featureSet),3)),t.feature.geometry.boundingSphere=null),t.edges&&this.boundarySet&&(t.edges.geometry.setAttribute("position",new Kt(this.displayedSegPositions(this.boundarySet),3)),t.edges.geometry.boundingSphere=null)}setExplode(t){this.explodeData=t,this.explodeBase=null,this.instanceOfVertex=null,this.explodedOffsets=null,this.explodeFactor=0,this.explodePending=null,this.explodeTarget=null,this.explodeBlendFrom=null,this.explodeBlendT=1}restyleExplode(){!this.explodeData||!this.explodedOffsets||(this.explodeBlendFrom=this.explodedOffsets,this.explodeBlendT=0)}setExplodeFactor(t,e=!1){if(!this.explodeData)return;const n=Math.min(1,Math.max(0,t));e?this.explodeTarget=n:(this.explodeTarget=null,this.explodePending=null,this.applyExplode(n))}applyExplode(t,e=!1){const n=this.content,s=this.explodeData;if(!n.solid||!s||!this.fullIndex||!e&&t===this.explodeFactor&&t>0==!!this.explodedOffsets)return;const r=n.solid.geometry.getAttribute("position"),o=r.array;if(this.explodeBase||(this.explodeBase=o.slice()),!this.instanceOfVertex){const l=new Uint32Array(o.length/3),c=s.instanceOfTri,d=this.fullIndex;for(let h=0;h<c.length;h++)l[d[h*3]]=c[h],l[d[h*3+1]]=c[h],l[d[h*3+2]]=c[h];this.instanceOfVertex=l}this.explodeFactor=t;const a=this.explodeBase;if(t<=0)o.set(a),this.explodedOffsets=null;else{const l=s.offsetsAt(t);if(this.explodeBlendFrom&&this.explodeBlendT<1&&this.explodeBlendFrom.length===l.length){const d=this.explodeBlendT,h=d*d*(3-2*d),u=this.explodeBlendFrom;for(let p=0;p<l.length;p++)l[p]=u[p]*(1-h)+l[p]*h}const c=this.instanceOfVertex;for(let d=0;d<c.length;d++){const h=c[d]*3,u=d*3;o[u]=a[u]+l[h],o[u+1]=a[u+1]+l[h+1],o[u+2]=a[u+2]+l[h+2]}this.explodedOffsets=l}r.needsUpdate=!0,n.solid.geometry.computeBoundingBox(),n.solid.geometry.computeBoundingSphere(),this.refreshEdgeOverlays(),this.pickBvhDirty=!0,this.clipSphereDirty=!0}setWireframe(t){this.showWire=t,t&&this.wireDirty&&this.rebuildWire(),this.applyVisibility()}setShowColors(t){this.showColors=t,this.applyVisibility()}setSmoothShading(t){this.smoothOn=t,this.applyVisibility()}setOpenEdges(t){this.showEdges=t,this.applyVisibility()}setFeatureEdges(t){this.showFeature=t,this.applyVisibility()}setTransparent(t){this.transparentOn=t,this.applyVisibility()}setSurfacesVisible(t){this.solidVisible=t,this.applyVisibility()}setSection(t){this.section.setEnabled(t),this.applyVisibility()}setSectionAxis(t){this.section.setAxis(t)}flipSection(){this.section.flip()}setMeasure(t){this.measure.setEnabled(t)}setMeasureMode(t){this.measure.setMode(t)}setMeasureData(t){this.measure.setData(t)}clearMeasurements(){this.measure.clearAll()}setTheme(t){this.scene.background=new kt(t==="light"?15330802:1316893),this.measure.setTheme(t)}setReferenceVisible(t){this.showReference=t,this.applyVisibility()}setDeviation(t){this.deviationOn=t,this.applyVisibility()}fit(){const t=this.visibleBox();if(!t)return;const e=t.getSize(new R),n=t.getCenter(new R),s=Math.max(e.x,e.y,e.z)*.5||1,r=s/Math.sin(this.persp.fov*Math.PI/360)*1.4,o=yl.clone().normalize(),a=n.clone().addScaledVector(o,r);this.persp.up.set(0,0,1),this.ortho.up.set(0,0,1),this.persp.position.copy(a),this.persp.updateProjectionMatrix(),this.ortho.position.copy(a),this.ortho.zoom=1,this.setOrthoFrustum(s*2.4),this.ortho.updateProjectionMatrix(),this.controls.target.copy(n),this.controls.update(),this.lastOrbitPivot=n.clone()}fitSolids(t){const e=this.content;if(!e.solid||!this.solidOfTri||!this.fullIndex||t.size===0)return;const n=e.solid.geometry.getAttribute("position"),s=new ye,r=this.solidOfTri,o=this.fullIndex;for(let p=0;p<r.length;p++)if(t.has(r[p]))for(let g=0;g<3;g++){const _=o[p*3+g];this._oTmp.set(n.getX(_),n.getY(_),n.getZ(_)),s.expandByPoint(this._oTmp)}if(s.isEmpty())return;const a=s.getCenter(new R),l=s.getSize(new R),c=Math.max(l.x,l.y,l.z)*.5||1,d=this.camera.position.clone().sub(this.controls.target);d.lengthSq()<1e-12&&d.copy(yl),d.normalize();const h=c/Math.sin(this.persp.fov*Math.PI/360)*1.4,u=a.clone().addScaledVector(d,h);this.persp.position.copy(u),this.persp.updateProjectionMatrix(),this.ortho.position.copy(u),this.ortho.zoom=1,this.setOrthoFrustum(c*2.4),this.ortho.updateProjectionMatrix(),this.controls.target.copy(a),this.controls.update(),this.lastOrbitPivot=a.clone()}disposePickBvh(){this.pickBvh=null,this.pickGeo=null}disposeMeshes(t){t.solid&&(t.group.remove(t.solid),t.solid.geometry.dispose(),t.solid.material.dispose(),t.solid=null),t.wire&&(t.group.remove(t.wire),t.wire.geometry.dispose(),t.wire.material.dispose(),t.wire=null),t.edges&&(t.group.remove(t.edges),t.edges.geometry.dispose(),t.edges.material.dispose(),t.edges=null),t.feature&&(t.group.remove(t.feature),t.feature.geometry.dispose(),t.feature.material.dispose(),t.feature=null),t.highlight&&(t.group.remove(t.highlight),t.highlight.geometry.dispose(),t.highlight.material.dispose(),t.highlight=null)}}class Qy{geometry;bvh;constructor(t){this.geometry=t,this.bvh=new ma(t)}dispose(){this.geometry.dispose()}deviationFor(t,e){const n=t.getAttribute("position"),s=n.count,r=new Float32Array(s),o=new R,a={point:new R,distance:0,faceIndex:-1},l=this.geometry.getAttribute("position"),c=this.geometry.getIndex(),d=new R,h=new R,u=new R,p=new R,g=new R,_=new R,m=new R;let f=0,v=0,x=0;for(let b=0;b<s;b++){o.set(n.getX(b),n.getY(b),n.getZ(b)),this.bvh.closestPointToPoint(o,a);const w=a.distance,A=a.faceIndex;let S,M,P;c?(S=c.getX(A*3),M=c.getX(A*3+1),P=c.getX(A*3+2)):(S=A*3,M=A*3+1,P=A*3+2),d.set(l.getX(S),l.getY(S),l.getZ(S)),h.set(l.getX(M),l.getY(M),l.getZ(M)),u.set(l.getX(P),l.getY(P),l.getZ(P)),p.subVectors(h,d),g.subVectors(u,d),_.crossVectors(p,g),m.subVectors(o,a.point);const D=_.dot(m)>=0?1:-1,I=w*D;r[b]=I;const N=Math.abs(I);N>f&&(f=N),v+=I*I,x+=I}const y=e??(f>0?f:1),E=new Float32Array(s*3);for(let b=0;b<s;b++){const[w,A,S]=Zd(r[b],y);E[b*3]=w,E[b*3+1]=A,E[b*3+2]=S}return{signed:r,colors:E,maxAbs:f,rms:Math.sqrt(v/s),mean:x/s}}}const Ju=1.75,jd=[1/0,1/0,1/0,-1/0,-1/0,-1/0];function Ml(i){const t=[...jd];let e=0,n=0,s=0,r=0;for(const l of i){e+=l.w,n+=l.c[0]*l.w,s+=l.c[1]*l.w,r+=l.c[2]*l.w;for(let c=0;c<3;c++)l.bb[c]<t[c]&&(t[c]=l.bb[c]),l.bb[c+3]>t[c+3]&&(t[c+3]=l.bb[c+3])}const o=e>0?[n/e,s/e,r/e]:[(t[0]+t[3])/2,(t[1]+t[4])/2,(t[2]+t[5])/2],a=Math.hypot(t[3]-t[0],t[4]-t[1],t[5]-t[2])/2||0;return{inst:-1,children:i,c:o,w:e,bb:t,r:a}}function Sl(i){const t=1-2*(i%16+.5)/16,e=Math.sqrt(Math.max(0,1-t*t)),n=i*2.399963229728653;return[e*Math.cos(n),e*Math.sin(n),t]}function Jy(i){const{mesh:t,solidOfTri:e,faceOfTri:n,measure:s,structure:r}=i;let o=i.instances,a=i.instanceOfTri;if(!o||!a){let it=-1;for(let F=0;F<e.length;F++)e[F]>it&&(it=e[F]);o=Array.from({length:it+1},(F,V)=>({solidId:V,instance:0,frame:null})),a=e}const l=o.length,c=new Float64Array(l),d=new Float64Array(l*3),h=new Float64Array(l*6);for(let it=0;it<l;it++)h[it*6]=h[it*6+1]=h[it*6+2]=1/0,h[it*6+3]=h[it*6+4]=h[it*6+5]=-1/0;const u=t.positions,p=t.indices,g=a.length;for(let it=0;it<g;it++){const F=a[it],V=p[it*3]*3,K=p[it*3+1]*3,Y=p[it*3+2]*3,tt=u[V],ut=u[V+1],ot=u[V+2],Rt=u[K],Mt=u[K+1],Ot=u[K+2],U=u[Y],Ht=u[Y+1],Ct=u[Y+2],Ft=Rt-tt,lt=Mt-ut,Nt=Ot-ot,At=U-tt,L=Ht-ut,T=Ct-ot,G=lt*T-Nt*L,Q=Nt*At-Ft*T,et=Ft*L-lt*At,j=Math.sqrt(G*G+Q*Q+et*et);c[F]+=j,d[F*3]+=j*(tt+Rt+U)/3,d[F*3+1]+=j*(ut+Mt+Ht)/3,d[F*3+2]+=j*(ot+Ot+Ct)/3;const st=F*6;tt<h[st]&&(h[st]=tt),tt>h[st+3]&&(h[st+3]=tt),ut<h[st+1]&&(h[st+1]=ut),ut>h[st+4]&&(h[st+4]=ut),ot<h[st+2]&&(h[st+2]=ot),ot>h[st+5]&&(h[st+5]=ot),Rt<h[st]&&(h[st]=Rt),Rt>h[st+3]&&(h[st+3]=Rt),Mt<h[st+1]&&(h[st+1]=Mt),Mt>h[st+4]&&(h[st+4]=Mt),Ot<h[st+2]&&(h[st+2]=Ot),Ot>h[st+5]&&(h[st+5]=Ot),U<h[st]&&(h[st]=U),U>h[st+3]&&(h[st+3]=U),Ht<h[st+1]&&(h[st+1]=Ht),Ht>h[st+4]&&(h[st+4]=Ht),Ct<h[st+2]&&(h[st+2]=Ct),Ct>h[st+5]&&(h[st+5]=Ct)}const _=it=>{if(c[it]<=0&&h[it*6]===1/0)return null;const F=it*6,V=[h[F],h[F+1],h[F+2],h[F+3],h[F+4],h[F+5]],K=c[it],Y=K>0?[d[it*3]/K,d[it*3+1]/K,d[it*3+2]/K]:[(V[0]+V[3])/2,(V[1]+V[4])/2,(V[2]+V[5])/2],tt=Math.hypot(V[3]-V[0],V[4]-V[1],V[5]-V[2])/2||0;return{inst:it,children:[],c:Y,w:K,bb:V,r:tt}},m=new Map;o.forEach((it,F)=>{const V=m.get(it.solidId);V?V.push(F):m.set(it.solidId,[F])});const f=new Set,v=it=>{const F=[];for(const V of m.get(it)??[]){const K=_(V);K&&(F.push(K),f.add(V))}return F.length===0?null:F.length===1?F[0]:Ml(F)},x=it=>{const F=[];for(const V of it.children){const K=x(V);K&&F.push(K)}for(const V of it.bodies){const K=v(V.id);K&&F.push(K)}return F.length===0?null:F.length===1?F[0]:Ml(F)};let y=x(r);const E=[];for(let it=0;it<l;it++){if(f.has(it))continue;const F=_(it);F&&E.push(F)}E.length>0&&(y=Ml(y?[y,...E]:E));const b=[],w=it=>{if(it.inst>=0){b.push(it);return}for(const F of it.children)w(F)};y&&w(y);const A=b.length,S=y?y.c:[0,0,0],M=y?y.bb:jd,P=y?Math.max(y.r,1e-9):1,D=new Float64Array(l*3);s&&A>1&&tM(s,o,a,n,t,D);const I=it=>{const F=new Float64Array(l*3);if(!y||it<=0)return F;const V=Math.min(1,it),K=(Y,tt,ut,ot,Rt,Mt,Ot)=>{let U=Rt,Ht=Mt,Ct=Ot;if(tt){const lt=Ju*Math.pow(V,ot);let Nt=Y.c[0]-tt.c[0],At=Y.c[1]-tt.c[1],L=Y.c[2]-tt.c[2];const T=Y.inst*3;if(Y.inst>=0&&(D[T]!==0||D[T+1]!==0||D[T+2]!==0)){const G=D[T],Q=D[T+1],et=D[T+2],j=Nt*G+At*Q+L*et,st=j>=0?1:-1,dt=lt*Math.max(Math.abs(j),Y.r);U+=G*st*dt,Ht+=Q*st*dt,Ct+=et*st*dt}else if(Math.hypot(Nt,At,L)<1e-6*Math.max(tt.r,1e-9)){const[Q,et,j]=Sl(ut),st=lt*Math.max(Y.r,tt.r*.4);U+=Q*st,Ht+=et*st,Ct+=j*st}else U+=Nt*lt,Ht+=At*lt,Ct+=L*lt}if(Y.inst>=0){F[Y.inst*3]=U,F[Y.inst*3+1]=Ht,F[Y.inst*3+2]=Ct;return}const Ft=Y.children.length>1?ot+1:ot;Y.children.forEach((lt,Nt)=>K(lt,Y,Nt,tt?Ft:ot,U,Ht,Ct))};return K(y,null,0,1,0,0,0),F},N=it=>{const F=new Float64Array(l*3);return it<=0||b.forEach((V,K)=>{const Y=V.c[0]-S[0],tt=V.c[1]-S[1],ut=V.c[2]-S[2],ot=Ju*Math.min(1,it),Rt=V.inst*3;if(Math.hypot(Y,tt,ut)<1e-6*P){const[Mt,Ot,U]=Sl(K),Ht=ot*.3*P;F[Rt]=Mt*Ht,F[Rt+1]=Ot*Ht,F[Rt+2]=U*Ht}else F[Rt]=Y*ot,F[Rt+1]=tt*ot,F[Rt+2]=ut*ot}),F},k=it=>{if(it==="x")return[1,0,0];if(it==="y")return[0,1,0];if(it==="z")return[0,0,1];const F=[0,0,0];let V=!1;for(let Y=0;Y<l;Y++){const tt=D[Y*3],ut=D[Y*3+1],ot=D[Y*3+2];tt===0&&ut===0&&ot===0||(V=!0,F[0]+=Math.abs(tt),F[1]+=Math.abs(ut),F[2]+=Math.abs(ot))}if(!V){const Y=[0,0,0];for(const tt of b)Y[0]+=tt.c[0],Y[1]+=tt.c[1],Y[2]+=tt.c[2];for(let tt=0;tt<3;tt++)Y[tt]=Y[tt]/Math.max(1,b.length);for(const tt of b)for(let ut=0;ut<3;ut++)F[ut]+=(tt.c[ut]-Y[ut])**2}const K=F[0]>=F[1]&&F[0]>=F[2]?0:F[1]>=F[2]?1:2;return K===0?[1,0,0]:K===1?[0,1,0]:[0,0,1]},H=(it,F)=>{if(it<=0)return new Float64Array(l*3);const V=k(F);let K=1/0,Y=-1/0;for(const Mt of b){const Ot=Mt.c[0]*V[0]+Mt.c[1]*V[1]+Mt.c[2]*V[2];Ot<K&&(K=Ot),Ot>Y&&(Y=Ot)}const tt=Y-K;if(tt<1e-6)return N(it);const ut=(K+Y)/2,ot=new Float64Array(l*3),Rt=Math.min(1,it)*2.2*P;for(const Mt of b){const U=(Mt.c[0]*V[0]+Mt.c[1]*V[1]+Mt.c[2]*V[2]-ut)/(tt/2)*Rt,Ht=Mt.inst*3;ot[Ht]=V[0]*U,ot[Ht+1]=V[1]*U,ot[Ht+2]=V[2]*U}return ot};let $=null;const W=it=>{const F=new Float64Array(l*3);if(it<=0||b.length<2)return F;if(!$){const K=b.map((Y,tt)=>({k:tt,d:Math.min(Y.c[0]-M[0],M[3]-Y.c[0],Y.c[1]-M[1],M[4]-Y.c[1],Y.c[2]-M[2],M[5]-Y.c[2])}));K.sort((Y,tt)=>Y.d-tt.d),$=new Float64Array(b.length),K.forEach((Y,tt)=>{$[Y.k]=tt/(K.length-1)})}const V=Math.min(1,it);return b.forEach((K,Y)=>{const tt=$[Y],ut=.7*tt,ot=Math.min(1,Math.max(0,(V-ut)/(1-ut)));if(ot<=0)return;const Rt=ot*ot*(3-2*ot),Mt=(1.2+1.6*(1-tt))*P*Rt;let Ot=K.c[0]-S[0],U=K.c[1]-S[1],Ht=K.c[2]-S[2];const Ct=Math.hypot(Ot,U,Ht);Ct<1e-6*P?[Ot,U,Ht]=Sl(Y):(Ot/=Ct,U/=Ct,Ht/=Ct);const Ft=K.inst*3;F[Ft]=Ot*Mt,F[Ft+1]=U*Mt,F[Ft+2]=Ht*Mt}),F};let J=null,ht=-1;const yt=(it,F)=>{const V=new Float64Array(l*3);if(it<=0||b.length===0)return V;const K=F==="x"?0:F==="y"?1:2,Y=K===0?1:0,tt=K===2?1:2;if(!J||ht!==K){ht=K,J=new Float64Array(b.length*3);const ot=.06*P,Rt=b.map((lt,Nt)=>({k:Nt,w:lt.bb[Y+3]-lt.bb[Y]+ot,d:lt.bb[tt+3]-lt.bb[tt]+ot}));let Mt=0;for(const lt of Rt)Mt+=lt.w*lt.d;const Ot=Math.max(M[Y+3]-M[Y],Math.sqrt(Mt)*1.25);Rt.sort((lt,Nt)=>Math.max(Nt.w,Nt.d)-Math.max(lt.w,lt.d));const U=M[Y];let Ht=U,Ct=M[tt]-ot*3,Ft=0;for(const lt of Rt){Ht>U&&Ht+lt.w>U+Ot&&(Ht=U,Ct-=Ft,Ft=0);const Nt=b[lt.k];J[lt.k*3+Y]=Ht+(Nt.c[Y]-Nt.bb[Y]),J[lt.k*3+tt]=Ct-lt.d+(Nt.c[tt]-Nt.bb[tt]),J[lt.k*3+K]=M[K]+(Nt.c[K]-Nt.bb[K]),Ht+=lt.w,lt.d>Ft&&(Ft=lt.d)}}const ut=Math.min(1,it);return b.forEach((ot,Rt)=>{const Mt=ot.inst*3;V[Mt]=(J[Rt*3]-ot.c[0])*ut,V[Mt+1]=(J[Rt*3+1]-ot.c[1])*ut,V[Mt+2]=(J[Rt*3+2]-ot.c[2])*ut}),V};return{instanceOfTri:a,leafCount:A,offsetsAt:(it,F="hierarchical",V="auto")=>{switch(F){case"radial":return N(it);case"axis":return H(it,V);case"peel":return W(it);case"layout":return yt(it,V);default:return I(it)}}}}function tM(i,t,e,n,s,r){const o=new Map,a=new Map;t.forEach((p,g)=>a.set(p.solidId*1048576+p.instance,g));let l=0;for(const p of i.faces){if(p.kind!=="CYLINDRICAL_SURFACE"||!p.axis||!p.origin||!(p.radius>0))continue;const g=a.get(p.solidId*1048576+p.instance);if(g===void 0)continue;let[_,m,f]=p.axis;(Math.abs(_)>=Math.abs(m)&&Math.abs(_)>=Math.abs(f)?_:Math.abs(m)>=Math.abs(f)?m:f)<0&&(_=-_,m=-m,f=-f);const x=Math.hypot(_,m,f);if(x<1e-9)continue;const y={inst:g,a:[_/x,m/x,f/x],o:[...p.origin],r:p.radius,tmin:1/0,tmax:-1/0};let E=o.get(p.faceId);if(E||(E=[],o.set(p.faceId,E)),E[p.instance]=y,++l>6e4)return}if(l===0)return;const c=s.positions,d=s.indices;for(let p=0;p<e.length;p++){const g=o.get(n[p]);if(!g)continue;const _=g[t[e[p]].instance];if(!(!_||_.inst!==e[p]))for(let m=0;m<3;m++){const f=d[p*3+m]*3,v=(c[f]-_.o[0])*_.a[0]+(c[f+1]-_.o[1])*_.a[1]+(c[f+2]-_.o[2])*_.a[2];v<_.tmin&&(_.tmin=v),v>_.tmax&&(_.tmax=v)}}const h=new Map;for(const p of o.values())for(const g of p){if(!g||g.tmin===1/0)continue;const _=`${Math.round(g.a[0]*50)},${Math.round(g.a[1]*50)},${Math.round(g.a[2]*50)}`,m=h.get(_);m?m.push(g):h.set(_,[g])}const u=new Map;for(const p of h.values())if(!(p.length<2||p.length>512))for(let g=0;g<p.length;g++)for(let _=g+1;_<p.length;_++){const m=p[g],f=p[_];if(m.inst===f.inst||m.a[0]*f.a[0]+m.a[1]*f.a[1]+m.a[2]*f.a[2]<.9995)continue;const v=Math.max(m.r,f.r);if(Math.abs(m.r-f.r)>Math.max(1,.35*v))continue;const x=f.o[0]-m.o[0],y=f.o[1]-m.o[1],E=f.o[2]-m.o[2],b=x*m.a[0]+y*m.a[1]+E*m.a[2],w=x-b*m.a[0],A=y-b*m.a[1],S=E-b*m.a[2];if(Math.hypot(w,A,S)>Math.max(.3,.1*v))continue;const M=f.tmin+b,P=f.tmax+b,D=Math.min(m.tmax,P)-Math.max(m.tmin,M),I=Math.min(m.tmax-m.tmin,f.tmax-f.tmin);if(D<Math.max(.05,.1*I))continue;const N=D*Math.min(m.r,f.r);for(const k of[m.inst,f.inst]){const H=u.get(k),$={a:m.a,w:N};H?H.push($):u.set(k,[$])}}for(const[p,g]of u){let _=0;for(const v of g)_+=v.w;let m=0,f=null;for(const v of g){let x=0,y=0,E=0,b=0;for(const w of g){const A=v.a[0]*w.a[0]+v.a[1]*w.a[1]+v.a[2]*w.a[2];if(Math.abs(A)<.98)continue;const S=A>=0?1:-1;x+=w.w,y+=S*w.a[0]*w.w,E+=S*w.a[1]*w.w,b+=S*w.a[2]*w.w}if(x>m){const w=Math.hypot(y,E,b);w>1e-9&&(m=x,f=[y/w,E/w,b/w])}}f&&m>=.7*_&&(r[p*3]=f[0],r[p*3+1]=f[1],r[p*3+2]=f[2])}}const Zc=["vi","en","zh"],bl={vi:{tagline:"","s1.title":"Tệp đầu vào","s1.choose":"Chọn tệp STEP / STL / 3MF…","s1.none":"Chưa tải tệp nào","info.title":"Thông tin tệp","info.cad":"Phần mềm CAD","info.schema":"Schema","info.units":"Đơn vị","info.dims":"Kích thước","info.bodies":"Số khối","info.faces":"Số mặt","info.tris":"Tam giác","info.openEdges":"Cạnh hở","info.exported":"Ngày xuất","info.watertight":"Kín nước","info.notWatertight":"Không kín nước","s2.title":"Chuyển sang lưới (mesh)","s2.convert":"Chuyển đổi","s2.export":"Xuất STL…","s2.refine":"Thiết lập độ chi tiết","s2.surfDev":"Độ lệch bề mặt","s2.normDev":"Độ lệch pháp tuyến","s2.maxEdge":"Chiều dài cạnh tối đa","s3.title":"Hiển thị","s3.shaded":"Bóng khối","s3.transparent":"Trong suốt","s3.wireframe":"Khung dây","s3.edges":"Chỉ cạnh","s3.smooth":"Đổ bóng mượt","s3.crease":"Ngưỡng góc gấp nếp","s3.colors":"Màu mô hình (từ STEP)","s3.boundaries":"Đường biên mặt (CAD)","s3.highlightOpen":"Làm nổi cạnh hở","parts.title":"Danh sách chi tiết","parts.hint":"Rê chuột để làm nổi · bỏ chọn để ẩn","parts.showAll":"Hiện tất cả","parts.hideAll":"Ẩn tất cả","s4.title":"STL tham chiếu & độ lệch","s4.choose":"Chọn STL tham chiếu…","s4.none":"Chưa có tệp tham chiếu","s4.overlay":"Chồng lớp tham chiếu","s4.colorDev":"Tô màu theo độ lệch","s4.range":"Dải màu ±","s4.auto":"tự động","vp.controls":"Điều khiển","vp.hint":"kéo để xoay · cuộn để phóng to · kéo phải để di chuyển · chuột phải để mở menu chi tiết","vp.fit":"Vừa khung","vp.views":"Góc nhìn ▾","vp.iso":"Đẳng trắc","vp.top":"Trên","vp.bottom":"Dưới","vp.front":"Trước","vp.back":"Sau","vp.left":"Trái","vp.right":"Phải","vp.ortho":"Song song","vp.perspective":"Phối cảnh","vp.section":"Cắt lát","vp.measure":"Đo","vp.explode":"Nổ lắp","vp.flip":"Lật","vp.dist":"Khoảng cách","vp.edge":"Cạnh","vp.clear":"Xóa","vp.hierarchical":"Theo nhóm","vp.radial":"Tỏa tròn","vp.axis":"Xếp trục","vp.peel":"Bóc lớp","vp.layout":"Trải phẳng","vp.auto":"Tự động","vp.collapse":"Thu gọn","overlay.working":"Đang xử lý…","status.loaded":"Đã tải {name}","status.converting":"Đang chuyển đổi…","status.done":"Hoàn tất","status.error":"Lỗi: {msg}"},en:{tagline:"","s1.title":"Input","s1.choose":"Choose STEP / STL / 3MF file…","s1.none":"No file loaded","info.title":"File info","info.cad":"CAD program","info.schema":"Schema","info.units":"Units","info.dims":"Dimensions","info.bodies":"Bodies","info.faces":"Faces","info.tris":"Triangles","info.openEdges":"Open edges","info.exported":"Exported","info.watertight":"Watertight","info.notWatertight":"Not watertight","s2.title":"Convert to mesh","s2.convert":"Convert","s2.export":"Export STL…","s2.refine":"Refinement settings","s2.surfDev":"Surface deviation","s2.normDev":"Normal deviation","s2.maxEdge":"Max edge length","s3.title":"Appearance","s3.shaded":"Shaded","s3.transparent":"Transparent","s3.wireframe":"Wireframe","s3.edges":"Edges","s3.smooth":"Smooth shading","s3.crease":"Crease angle threshold","s3.colors":"Model colors (from STEP)","s3.boundaries":"Surface boundaries (CAD faces)","s3.highlightOpen":"Highlight open edges","parts.title":"Parts","parts.hint":"Hover to highlight · uncheck to hide","parts.showAll":"Show all","parts.hideAll":"Hide all","s4.title":"Reference STL & deviation","s4.choose":"Choose reference STL…","s4.none":"No reference","s4.overlay":"Overlay reference","s4.colorDev":"Color by deviation","s4.range":"Color range ±","s4.auto":"auto","vp.controls":"Controls","vp.hint":"drag to orbit · scroll to zoom · right-drag to pan · right-click for part menu","vp.fit":"Fit","vp.views":"Views ▾","vp.iso":"Isometric","vp.top":"Top","vp.bottom":"Bottom","vp.front":"Front","vp.back":"Back","vp.left":"Left","vp.right":"Right","vp.ortho":"Ortho","vp.perspective":"Perspective","vp.section":"Section","vp.measure":"Measure","vp.explode":"Explode","vp.flip":"Flip","vp.dist":"Distance","vp.edge":"Edge","vp.clear":"Clear","vp.hierarchical":"Grouped","vp.radial":"Radial","vp.axis":"Stacked","vp.peel":"Peel","vp.layout":"Flat lay","vp.auto":"Auto","vp.collapse":"Collapse","overlay.working":"Working…","status.loaded":"Loaded {name}","status.converting":"Converting…","status.done":"Done","status.error":"Error: {msg}"},zh:{tagline:"","s1.title":"輸入文件","s1.choose":"選擇 STEP / STL / 3MF 文件…","s1.none":"尚未加載文件","info.title":"文件信息","info.cad":"CAD 軟體","info.schema":"架構 (Schema)","info.units":"單位","info.dims":"尺寸","info.bodies":"實體數","info.faces":"面數","info.tris":"三角面數","info.openEdges":"開放邊","info.exported":"導出日期","info.watertight":"水密","info.notWatertight":"非水密","s2.title":"轉換為網格","s2.convert":"轉換","s2.export":"導出 STL…","s2.refine":"細化設置","s2.surfDev":"表面偏差","s2.normDev":"法線偏差","s2.maxEdge":"最大邊長","s3.title":"外觀","s3.shaded":"著色","s3.transparent":"透明","s3.wireframe":"線框","s3.edges":"僅邊線","s3.smooth":"平滑著色","s3.crease":"折痕角度閾值","s3.colors":"模型顏色（來自 STEP）","s3.boundaries":"表面邊界（CAD 面）","s3.highlightOpen":"高亮開放邊","parts.title":"零件","parts.hint":"懸停高亮 · 取消勾選可隱藏","parts.showAll":"全部顯示","parts.hideAll":"全部隱藏","s4.title":"參考 STL 與偏差","s4.choose":"選擇參考 STL…","s4.none":"無參考文件","s4.overlay":"疊加參考模型","s4.colorDev":"按偏差著色","s4.range":"顏色範圍 ±","s4.auto":"自動","vp.controls":"操作方式","vp.hint":"拖動旋轉 · 滾動縮放 · 右鍵拖動平移 · 右鍵單擊打開零件菜單","vp.fit":"適應窗口","vp.views":"視圖 ▾","vp.iso":"等軸測","vp.top":"頂視圖","vp.bottom":"底視圖","vp.front":"前視圖","vp.back":"後視圖","vp.left":"左視圖","vp.right":"右視圖","vp.ortho":"正交","vp.perspective":"透視","vp.section":"剖切","vp.measure":"測量","vp.explode":"爆炸視圖","vp.flip":"翻轉","vp.dist":"距離","vp.edge":"邊","vp.clear":"清除","vp.hierarchical":"分組","vp.radial":"放射狀","vp.axis":"堆疊","vp.peel":"剝離","vp.layout":"平鋪","vp.auto":"自動","vp.collapse":"收攏","overlay.working":"處理中…","status.loaded":"已加載 {name}","status.converting":"正在轉換…","status.done":"完成","status.error":"錯誤：{msg}"}},$d="vpic1.lang";function eM(){try{const t=localStorage.getItem($d);if(t&&Zc.includes(t))return t}catch{}const i=((navigator.language||navigator.userLanguage||"en")+"").toLowerCase();return i.startsWith("vi")?"vi":i.startsWith("zh")?"zh":"en"}let ga=(()=>{const i=document.documentElement.dataset.lang;return i&&Zc.includes(i)?i:eM()})();function nM(i,t){return i}function iM(i,t){const n=(bl[ga]??bl.en)[i]??bl.en[i]??i;return nM(n)}function Kd(i=document){i.querySelectorAll("[data-i18n]").forEach(n=>{const s=n.getAttribute("data-i18n");if(!s)return;const r=iM(s),o=n.querySelector(".kbd");if(o){const a=n.firstChild;a&&a.nodeType===Node.TEXT_NODE?a.textContent=r+" ":n.insertBefore(document.createTextNode(r+" "),o)}else if(n.tagName==="OPTION"||n.children.length===0)n.textContent=r;else{let a=null;for(const l of Array.from(n.childNodes))if(l.nodeType===Node.TEXT_NODE&&l.textContent?.trim()){a=l;break}a?a.textContent=r:n.insertBefore(document.createTextNode(r),n.firstChild)}});const e=document.getElementById("langSelect");e&&(e.value=ga)}function sM(i){if(Zc.includes(i)){ga=i;try{localStorage.setItem($d,i)}catch{}document.documentElement.dataset.lang=i,document.documentElement.lang=i,Kd(document),document.dispatchEvent(new CustomEvent("vpic1:langchange",{detail:{lang:i}}))}}function rM(){const i=()=>{Kd(document);const t=document.getElementById("langSelect");t&&(t.value=ga,t.addEventListener("change",()=>sM(t.value)))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",i):i()}rM();const pt=i=>{const t=document.getElementById(i);if(!t)throw new Error(`#${i} missing`);return t},El=pt("stepFile"),oM=pt("stepName"),wl=pt("refFile"),td=pt("refName"),mi=pt("convertBtn"),Qd=pt("exportBtn"),ed=pt("status"),Jd=pt("overlay"),tf=pt("overlayText"),ef=pt("progressBar"),nf=pt("progressFill"),Ac=pt("tSmooth"),Ar=pt("tColors"),aM=pt("tColorsLabel"),Sr=pt("tEdges"),Qo=pt("tFeature"),lM=pt("tFeatureLabel"),cM=pt("creaseField"),hM=pt("creaseAngle"),sf=Array.from(document.querySelectorAll("#styleSeg .seg-btn")),rf=pt("viewsBtn"),vi=pt("viewsMenu"),jc=pt("sectionBtn"),uM=pt("sectionRow"),$c=pt("measureBtn"),dM=pt("measureRow"),Cr=pt("explodeBtn"),of=pt("explodeRow"),Jo=pt("explodeRange"),nd=pt("explodeStyle"),br=pt("explodeAxisSeg"),fM=pt("explodeCollapse"),af=pt("mDist"),lf=pt("mEdge"),pM=pt("mClear"),id=pt("projBtn"),Cc=pt("tRef"),li=pt("tDev"),Rc=pt("devRange"),mM=pt("rangeField"),gM=pt("autoRange"),ta=pt("legend"),_M=pt("legNeg"),xM=pt("legPos"),vM=pt("legMeta"),yM=pt("partsPanel"),sd=pt("partsTree"),MM=pt("partsShowAll"),SM=pt("partsHideAll"),Rr=pt("autoNote"),cf=pt("surfaceDeviation"),hf=pt("maxEdge"),Kc=pt("infoPanel"),$e=pt("watertight"),uf=pt("iSystem"),df=pt("iSchema"),Qc=pt("iUnits"),Jc=pt("iDims"),th=pt("iBodies"),eh=pt("iFaces"),nh=pt("iTris"),ih=pt("iEdgesRow"),bM=pt("iEdges"),ff=pt("iDate"),pf=pt("themeToggle");function mf(i){document.documentElement.dataset.theme=i,Lt.setTheme(i),pf.textContent=i==="light"?"☾":"☀",localStorage.setItem("meshstep.theme",i)}pf.addEventListener("click",()=>{mf(document.documentElement.dataset.theme==="light"?"dark":"light")});const Lt=new Ky(pt("viewport"));mf(document.documentElement.dataset.theme==="light"?"light":"dark");let Xn=null,Vo="mesh",bn=null,Le=null,Er=!1,ea=null,na=new Set,gi=null,Us=null,Pc=new Set,Lc=null,xr=null,ia=null,gf=null,Pn=null,Vn="hierarchical",sh="auto",rh="z",sa=null,$n=null,_a=null,xa=!1;cf.addEventListener("input",()=>{xa=!0,Rr.hidden=!0});hf.addEventListener("input",()=>{xa=!0,Rr.hidden=!0});function EM(i){if(xa)return;const t=sv(i);cf.value=String(t.surfaceDeviation),hf.value=String(t.maxEdge),Rr.textContent=`auto for ~${Vi(i)} mm model`,Rr.hidden=!1}El.addEventListener("change",async()=>{const i=El.files?.[0];if(!i)return;El.value="",oM.textContent=i.name,xa=!1,Rr.hidden=!0,Ws(""),bn?.terminate(),bn=new Worker(new URL(""+new URL("worker-DZGZJ8KB.js",import.meta.url).href,import.meta.url),{type:"module"}),bn.onmessage=e=>_f(e.data),bn.onerror=e=>{Lr(),Ws(`Worker error: ${e.message}`,!0)};const t=/\.stl$/i.test(i.name)?"stl":/\.3mf$/i.test(i.name)?"3mf":null;if(t){Xn=null,mi.disabled=!0,Vo=i.name.replace(/\.(stl|3mf)$/i,"")||"mesh";const e=await i.arrayBuffer();FM(t==="3mf"?"3MF":Bd(new Uint8Array(e))?"STL · binary":"STL · ASCII"),Rf(t==="3mf"?"Reading 3MF…":"Reading STL…"),bn.postMessage({type:t==="3mf"?"load3mf":"loadStl",buffer:e,name:Vo},[e]);return}Xn=await i.text(),Vo=i.name.replace(/\.(step|stp)$/i,"")||"mesh",mi.disabled=!1,UM(Xn),bn.postMessage({type:"measure",stepText:Xn})});wl.addEventListener("change",async()=>{const i=wl.files?.[0];if(i){wl.value="";try{const t=await i.arrayBuffer(),e=Kx(t),n=Ty(e.positions);sa?.dispose(),sa=new Qy(n),td.textContent=`${i.name}  ·  ${e.triangleCount.toLocaleString()} tris`,Lt.setReference(n),Cc.disabled=!1,li.disabled=!1,ch()}catch(t){td.textContent="Failed to read STL",console.error(t)}}});mi.addEventListener("click",()=>{if(!Xn)return;const i={surfaceDeviation:Fs("surfaceDeviation",.01),normalDeviation:Fs("normalDeviation",15),maxEdge:Fs("maxEdge",1),remesh:!1};Rf("Starting…"),mi.disabled=!0,bn?.terminate(),bn=new Worker(new URL(""+new URL("worker-DZGZJ8KB.js",import.meta.url).href,import.meta.url),{type:"module"}),bn.onmessage=t=>_f(t.data),bn.onerror=t=>{Lr(),mi.disabled=!1,Ws(`Worker error: ${t.message}`,!0)},bn.postMessage({type:"convert",stepText:Xn,opts:i})});function _f(i){if(i.type==="size"){i.estimate&&EM(i.estimate.diag);return}if(i.type==="progress"){tf.textContent=i.stage,i.fraction!==void 0&&(ef.hidden=!1,nf.style.width=`${(i.fraction*100).toFixed(1)}%`);return}if(i.type==="error"){Lr(),mi.disabled=!Xn,Ws(i.message.split(`
`)[0]??"Conversion failed",!0),console.error(i.message);return}try{wM(i)}catch(t){Lr(),mi.disabled=!Xn,Ws(String(t),!0),console.error(t)}}function wM(i){Le=i.mesh;let t=null,e=Le;const n=!!i.colors;if(i.colors){const{palette:a,faceColor:l}=i.colors,c=new Int32Array(i.mesh.faceOfTri.length);for(let p=0;p<c.length;p++)c[p]=l.get(i.mesh.faceOfTri[p])??-1;const d=new kt,h=a.map(([p,g,_])=>(d.setRGB(p,g,_,We),[d.r,d.g,d.b]));d.set(Ko);const u=Wu(Le,c,h,[d.r,d.g,d.b]);e=u.mesh,t=u.colors}else{const a=i.mesh.solidOfTri,l=new Map;for(let c=0;c<a.length;c++)l.has(a[c])||l.set(a[c],l.size);if(l.size>1){const c=new kt,d=[];for(let p=0;p<l.size;p++)c.setHSL((.08+p*.61803398875)%1,.55,.55,We),d.push([c.r,c.g,c.b]);const h=new Int32Array(a.length);for(let p=0;p<a.length;p++)h[p]=l.get(a[p]);c.set(Ko);const u=Wu(Le,h,d,[c.r,c.g,c.b]);e=u.mesh,t=u.colors}}aM.textContent=n?`Model colors (from ${i.kind==="3mf"?"3MF":"STEP"})`:"Random colors (per part)",Ar.disabled=!t,Ar.checked=n&&!!t,jc.disabled=!1,Lc=e,xr=t,Pn=Jy({structure:i.structure,mesh:Le,solidOfTri:i.mesh.solidOfTri,faceOfTri:i.mesh.faceOfTri,instances:i.instances,instanceOfTri:i.instanceOfTri,measure:i.measure}),Af(),Cr.disabled=Pn.leafCount<2,Cr.title=Pn.leafCount<2?"Exploded view (needs an assembly with several parts)":"Exploded view",na=new Set(i.openSolids);const s=i.diagnostics.openEdges,r=Dy(Ay(Le,i.mesh.solidOfTri,Pn.instanceOfTri),na);Pc=new Set;for(let a=0;a<r.count;a++)Pc.add(r.solidOfSeg[a]);Er=i.kind!=="step",lM.textContent=Er?"Feature edges (by angle)":"Surface boundaries (CAD faces)",Ef();const o=Er?Yd(Le,i.mesh.solidOfTri,Fs("creaseAngle",20),Pn.instanceOfTri):Cy(Le,i.mesh.faceOfTri,i.mesh.solidOfTri,Pn.instanceOfTri);gi=i.mesh.solidOfTri,Us=r,ia=o,gf=i.measure,Qe=new Set,Zs(),xf(Fs("creaseAngle",20)),$c.disabled=!1,Lt.fit(),TM(i.structure),NM(i,s),Lr(),mi.disabled=!Xn,Qd.disabled=!1,Ws(`${i.kind==="step"?"Done":"Loaded"} · ${qd(Le).toLocaleString()} tris`)}function xf(i){if(!Lc||!Us||!ia||!gi)return;Af();const t=Ry(Lc,Math.min(179,Math.max(1,i)));let e=null;if(xr){e=new Float32Array(t.src.length*3);for(let n=0;n<t.src.length;n++){const s=t.src[n]*3;e[n*3]=xr[s],e[n*3+1]=xr[s+1],e[n*3+2]=xr[s+2]}}ea=wy(t.mesh,t.normals),Lt.setMesh(ea,Us,ia,e,gi),Lt.setExplode(Pn&&{instanceOfTri:Pn.instanceOfTri,offsetsAt:n=>Pn.offsetsAt(n,Vn,Vn==="layout"?rh:sh)}),Lt.setShowColors(Ar.checked),Lt.setMeasureData(gf),Lt.setHiddenSolids(Qe),ch()}let Qe=new Set,oh=[];const ah=[];let ra=new Map;function vf(i,t){const e=t*i.occurrences,n=i.children.length===0&&i.bodies.length===1;for(const[s,r]of i.bodies.entries()){const o=n?i.name||r.name||"(unnamed part)":r.name||(i.bodies.length>1?`Body ${s+1}`:"Body");ra.set(r.id,{label:o,partName:i.name,occurrences:e})}for(const s of i.children)vf(s,e)}function yf(i){let t=i.name,e=i.occurrences,n=i;for(;n.bodies.length===0&&n.children.length===1;)n=n.children[0],e*=n.occurrences,t||(t=n.name);return{name:t,occurrences:e,bodies:n.bodies,children:n.children.map(yf)}}function lh(i,t=[]){for(const e of i.bodies)t.push(e.id);for(const e of i.children)lh(e,t);return t}function Hi(){Lt.setHiddenSolids(Qe);for(const i of ah){const t=i.solids.reduce((e,n)=>e+(Qe.has(n)?1:0),0);i.cb.checked=t===0,i.cb.indeterminate=t>0&&t<i.solids.length,i.row.classList.toggle("off",t===i.solids.length&&i.solids.length>0)}}function Tl(i,t,e,n,s){const r=document.createElement("div");r.className="part-row",r.style.paddingLeft=`${n*14}px`;const o=document.createElement("span");o.className="part-caret"+(s?"":" empty"),o.textContent="▶";const a=document.createElement("input");a.type="checkbox",a.checked=!0;const l=document.createElement("span");l.className="part-name",l.textContent=i,l.title=i;const c=document.createElement("span");c.className="part-meta",c.textContent=t,e.some(h=>Pc.has(h))&&(r.classList.add("leaky"),l.title=`${i} — has open edges`),r.append(o,a,l,c),ah.push({cb:a,row:r,solids:e}),a.addEventListener("change",()=>{for(const h of e)a.checked?Qe.delete(h):Qe.add(h);Hi()}),r.addEventListener("mouseenter",()=>Lt.setHighlightSolids(new Set(e))),r.addEventListener("mouseleave",()=>Lt.setHighlightSolids(null));const d=document.createElement("div");if(d.appendChild(r),s){let h=null;o.addEventListener("click",()=>{if(h)h.hidden=!h.hidden;else{h=document.createElement("div");for(const u of s())h.appendChild(u);d.appendChild(h),Hi()}o.textContent=h.hidden?"▶":"▼"})}return d}function Mf(i,t){const e=[],n=s=>s.length>0&&s.every(r=>na.has(r))?"sheet":"";for(const s of i.children){const r=lh(s),o=[s.occurrences>1?`×${s.occurrences}`:"",s.bodies.length>1?`${s.bodies.length} bodies`:"",n(r)].filter(Boolean).join(" · "),a=s.children.length>0||s.bodies.length>1;e.push(Tl(s.name||"(unnamed)",o,r,t,a?()=>Mf(s,t+1):null))}if(i.children.length>0&&i.bodies.length===1){const s=i.bodies[0];e.push(Tl(s.name||"Body",n([s.id]),[s.id],t,null))}else if(i.bodies.length>1||i.children.length===0&&i.bodies.length>0)for(const[s,r]of i.bodies.entries())e.push(Tl(r.name||`Body ${s+1}`,n([r.id]),[r.id],t,null));return e}function TM(i){Qe=new Set,ah.length=0,sd.textContent="";const t=yf(i);oh=lh(t),ra=new Map,vf(t,1);const e=t.children.length>0||t.bodies.length>1;if(yM.hidden=!e,!!e)for(const n of Mf(t,0))sd.appendChild(n)}MM.addEventListener("click",()=>{Qe.clear(),Hi()});SM.addEventListener("click",()=>{Qe=new Set(oh),Hi()});const nn=pt("ctxMenu"),ui=pt("partPop");function Zs(){nn.hidden=!0,ui.hidden=!0,vi.hidden=!0,Lt.setHighlightSolids(null)}function Es(i,t,e=!0){const n=document.createElement("button");return n.type="button",n.className="ctx-item",n.textContent=i,n.disabled=!e,n.addEventListener("click",()=>{Zs(),t()}),n}function Sf(i,t,e){i.hidden=!1,i.style.left="0px",i.style.top="0px",i.style.left=`${Math.max(4,Math.min(t,window.innerWidth-i.offsetWidth-8))}px`,i.style.top=`${Math.max(4,Math.min(e,window.innerHeight-i.offsetHeight-8))}px`}Lt.onContextMenu=(i,t,e)=>{if(Zs(),!Le)return;const n=Lt.pickSolidsThrough(t,e);bf(i??n[0]??null,n,t,e)};function bf(i,t,e,n){nn.textContent="";const s=i==null?void 0:ra.get(i);if(s&&i!=null){const r=i,o=document.createElement("div");o.className="ctx-title",o.textContent=s.label,nn.appendChild(o),Lt.setHighlightSolids(new Set([r]));const a=oh.filter(c=>c!==r);nn.append(Es("Isolate part",()=>{Qe=new Set(a),Hi()},a.length>0),Es("Hide part",()=>{Qe.add(r),Hi()}),Es("Zoom to part",()=>Lt.fitSolids(new Set([r]))),Es("Part info…",()=>AM(s,r,e,n)));const l=document.createElement("div");if(l.className="ctx-sep",nn.appendChild(l),t.length>1){const c=document.createElement("div");c.className="ctx-subtitle",c.textContent="Under cursor · front to back",nn.appendChild(c);const d=document.createElement("div");d.className="ctx-ray";for(const u of t){const p=ra.get(u),g=document.createElement("button");g.type="button",g.className="ctx-item ctx-ray-item"+(u===r?" current":"");const _=document.createElement("span");_.className="ctx-ray-dot",_.textContent=u===r?"●":"○";const m=document.createElement("span");if(m.className="ctx-ray-name",m.textContent=p?.label??`Body ${u}`,m.title=m.textContent,g.append(_,m),Qe.has(u)){const f=document.createElement("span");f.className="ctx-ray-tag",f.textContent="hidden",g.appendChild(f)}g.addEventListener("click",()=>bf(u,t,e,n)),g.addEventListener("mouseenter",()=>Lt.setHighlightSolids(new Set([u]))),g.addEventListener("mouseleave",()=>Lt.setHighlightSolids(new Set([r]))),d.appendChild(g)}nn.appendChild(d);const h=document.createElement("div");h.className="ctx-sep",nn.appendChild(h)}}nn.append(Es("Show all parts",()=>{Qe.clear(),Hi()},Qe.size>0),Es("Fit view",()=>Lt.fit())),Sf(nn,e,n)}function AM(i,t,e,n){if(!Le||!gi)return;const s=new Set([t]);Lt.setHighlightSolids(s);let r=0,o=0,a=0,l=1/0,c=1/0,d=1/0,h=-1/0,u=-1/0,p=-1/0;const g=Le.indices,_=Le.positions,m=[0,0,0,0,0,0,0,0,0];for(let b=0;b<gi.length;b++){if(!s.has(gi[b]))continue;r++;for(let H=0;H<3;H++){const $=g[b*3+H]*3,W=_[$],J=_[$+1],ht=_[$+2];m[H*3]=W,m[H*3+1]=J,m[H*3+2]=ht,W<l&&(l=W),W>h&&(h=W),J<c&&(c=J),J>u&&(u=J),ht<d&&(d=ht),ht>p&&(p=ht)}const w=m[3]-m[0],A=m[4]-m[1],S=m[5]-m[2],M=m[6]-m[0],P=m[7]-m[1],D=m[8]-m[2],I=A*D-S*P,N=S*M-w*D,k=w*P-A*M;o+=Math.sqrt(I*I+N*N+k*k)/2,a+=m[0]*(m[4]*m[8]-m[5]*m[7])-m[1]*(m[3]*m[8]-m[5]*m[6])+m[2]*(m[3]*m[7]-m[4]*m[6])}let f=0;if(Us)for(let b=0;b<Us.count;b++)s.has(Us.solidOfSeg[b])&&f++;const v=na.has(t);ui.textContent="";const x=document.createElement("div");x.className="ctx-title",x.textContent=i.label,x.title=x.textContent,ui.appendChild(x);const y=document.createElement("dl");y.className="info";const E=(b,w)=>{const A=document.createElement("div"),S=document.createElement("dt");S.textContent=b;const M=document.createElement("dd");M.textContent=w,A.append(S,M),y.appendChild(A)};i.partName&&i.partName!==i.label&&E("Part",i.partName),i.occurrences>1&&E("Instances",`×${i.occurrences}`),E("Triangles",r.toLocaleString()),r>0&&(E(i.occurrences>1?"Extent (all)":"Size",`${Vi(h-l)} × ${Vi(u-c)} × ${Vi(p-d)} mm`),!v&&f===0&&E(i.occurrences>1?"Volume (all)":"Volume",BM(Math.abs(a)/6)),E(i.occurrences>1?"Area (all)":"Surface area",zM(o))),E("Type",v?"sheet body (open by design)":f===0?"solid · watertight":`solid · ${f.toLocaleString()} open edge${f===1?"":"s"}`),ui.appendChild(y),Sf(ui,e,n)}document.addEventListener("pointerdown",i=>{if(nn.hidden&&ui.hidden&&vi.hidden)return;const t=i.target;nn.contains(t)||ui.contains(t)||vi.contains(t)||t===rf||Zs()});document.addEventListener("keydown",i=>{i.key==="Escape"&&Zs()});document.addEventListener("wheel",()=>{(!nn.hidden||!ui.hidden||!vi.hidden)&&Zs()},{capture:!0,passive:!0});Qd.addEventListener("click",()=>{if(!Le)return;const i=tv(Le),t=new Blob([i.buffer],{type:"model/stl"}),e=URL.createObjectURL(t),n=document.createElement("a");n.href=e,n.download=`${Vo}.stl`,n.click(),URL.revokeObjectURL(e)});function ch(){if(!sa||!ea){$n=null,ta.hidden=!0;return}ya(!1,!1),$n=sa.deviationFor(ea,null),va()}function va(){if(!$n)return;const i=_a??Math.max($n.maxAbs,1e-9);Lt.setDeviationColors(CM($n.signed,i)),RM(i)}function CM(i,t){const e=new Float32Array(i.length*3);for(let n=0;n<i.length;n++){const[s,r,o]=Zd(i[n],t);e[n*3]=s,e[n*3+1]=r,e[n*3+2]=o}return e}function RM(i){if(!li.checked){ta.hidden=!0;return}ta.hidden=!1,_M.textContent=`-${i.toFixed(3)}`,xM.textContent=`+${i.toFixed(3)}`,_a==null&&(Rc.value=i.toFixed(3)),vM.textContent=$n?`max |dev| ${$n.maxAbs.toFixed(4)} · rms ${$n.rms.toFixed(4)} mm`:""}function Ef(){cM.hidden=!Le||!Er&&!Ac.checked}let rd;hM.addEventListener("input",()=>{clearTimeout(rd),rd=setTimeout(()=>{if(!Le||!gi)return;const i=Math.min(179,Math.max(1,Fs("creaseAngle",20)));Er&&(ia=Yd(Le,gi,i,Pn?.instanceOfTri)),xf(i)},250)});Ac.addEventListener("change",()=>{Lt.setSmoothShading(Ac.checked),Ef()});Ar.addEventListener("change",()=>Lt.setShowColors(Ar.checked));Sr.addEventListener("change",()=>Lt.setOpenEdges(Sr.checked));Qo.addEventListener("change",()=>Lt.setFeatureEdges(Qo.checked));$e.addEventListener("click",()=>{$e.classList.contains("warn")&&(Sr.checked=!Sr.checked,Lt.setOpenEdges(Sr.checked))});function PM(i){Lt.setTransparent(i==="transparent"),Lt.setWireframe(i==="wireframe"),Lt.setSurfacesVisible(i!=="edges"),i==="edges"&&!Qo.checked&&(Qo.checked=!0,Lt.setFeatureEdges(!0));for(const t of sf)t.classList.toggle("active",t.dataset.style===i)}for(const i of sf)i.addEventListener("click",()=>PM(i.dataset.style));let oa=!1;function wf(i){oa!==i&&(oa=i,jc.classList.toggle("active",i),Lt.setSection(i),uM.hidden=!i,i&&ya(!1))}jc.addEventListener("click",()=>wf(!oa));pt("secX").addEventListener("click",()=>Lt.setSectionAxis("x"));pt("secY").addEventListener("click",()=>Lt.setSectionAxis("y"));pt("secZ").addEventListener("click",()=>Lt.setSectionAxis("z"));pt("secFlip").addEventListener("click",()=>Lt.flipSection());let hh=!1;function uh(i){hh=i,$c.classList.toggle("active",i),Lt.setMeasure(i),dM.hidden=!i,i&&ya(!1)}$c.addEventListener("click",()=>uh(!hh));Lt.onMeasureExit=()=>uh(!1);function Tf(i){Lt.setMeasureMode(i),af.classList.toggle("active",i==="distance"),lf.classList.toggle("active",i==="edge")}af.addEventListener("click",()=>Tf("distance"));lf.addEventListener("click",()=>Tf("edge"));pM.addEventListener("click",()=>Lt.clearMeasurements());let Pr=!1;function ya(i,t=!0){Pr!==i&&(Pr=i,Cr.classList.toggle("active",i),of.hidden=!i,i?(hh&&uh(!1),oa&&wf(!1),Lt.setExplodeFactor(parseFloat(Jo.value)||0,t)):Lt.setExplodeFactor(0,t))}function Af(){Pr=!1,Cr.classList.remove("active"),of.hidden=!0}Cr.addEventListener("click",()=>ya(!Pr));Jo.addEventListener("input",()=>{Pr&&Lt.setExplodeFactor(parseFloat(Jo.value)||0)});const LM={axis:{auto:"Stack along the dominant assembly direction",x:"Stack along X",y:"Stack along Y",z:"Stack along Z"},layout:{x:"Lay out on the YZ plane (X up)",y:"Lay out on the XZ plane (Y up)",z:"Lay out on the XY plane (Z up)"}};function DM(){if(br.hidden=Vn!=="axis"&&Vn!=="layout",br.hidden)return;const i=Vn==="layout"?rh:sh;for(const t of br.querySelectorAll("[data-axis]"))t.hidden=Vn==="layout"&&t.dataset.axis==="auto",t.classList.toggle("active",t.dataset.axis===i),t.title=LM[Vn]?.[t.dataset.axis]??t.title}nd.addEventListener("change",()=>{Vn=nd.value,DM(),Lt.restyleExplode()});for(const i of br.querySelectorAll("[data-axis]"))i.addEventListener("click",()=>{Vn==="layout"?rh=i.dataset.axis:sh=i.dataset.axis;for(const t of br.querySelectorAll("[data-axis]"))t.classList.toggle("active",t===i);Lt.restyleExplode()});fM.addEventListener("click",()=>{Jo.value="0",Lt.setExplodeFactor(0,!0)});let Do=!0;Lt.setProjection(!0);id.addEventListener("click",()=>{Do=!Do,Lt.setProjection(Do),id.textContent=Do?"Ortho":"Persp"});rf.addEventListener("click",()=>{vi.hidden=!vi.hidden});for(const i of vi.querySelectorAll("[data-view]"))i.addEventListener("click",()=>{vi.hidden=!0,Lt.setCameraView(i.dataset.view)});Cc.addEventListener("change",()=>Lt.setReferenceVisible(Cc.checked));li.addEventListener("change",()=>{Lt.setDeviation(li.checked),mM.hidden=!li.checked,li.checked&&!$n&&ch(),ta.hidden=!li.checked,li.checked&&va()});Rc.addEventListener("input",()=>{const i=parseFloat(Rc.value);_a=isFinite(i)&&i>0?i:null,va()});gM.addEventListener("click",()=>{_a=null,va()});pt("fitBtn").addEventListener("click",()=>Lt.fit());const wr=pt("navScheme"),IM=pt("navHint");for(const i of jo){const t=document.createElement("option");t.value=i.id,t.textContent=i.label,wr.appendChild(t)}function Cf(i){const t=jo.find(e=>e.id===i)??jo[0];wr.value=t.id,Lt.setNavScheme(t),IM.textContent=`${t.hint} · right-click for part menu`}Cf(localStorage.getItem("meshstep.navscheme"));wr.addEventListener("change",()=>{Cf(wr.value),localStorage.setItem("meshstep.navscheme",wr.value)});function UM(i){const t=iv(i);Kc.hidden=!1,uf.textContent=t.originatingSystem??t.preprocessor??"—",df.textContent=t.schemaLabel??t.schema??"—",ff.textContent=kM(t.timeStamp),Qc.textContent="—",Jc.textContent="—",th.textContent="—",eh.textContent="—",nh.textContent="—",ih.hidden=!0,$e.hidden=!0}function FM(i){Kc.hidden=!1,uf.textContent="—",df.textContent=i,ff.textContent="—",Qc.textContent="—",Jc.textContent="—",th.textContent="—",eh.textContent="—",nh.textContent="—",ih.hidden=!0,$e.hidden=!0}function NM(i,t){Kc.hidden=!1,Qc.textContent=i.units||"—",Jc.textContent=i.bbox?OM(i.bbox):"—";const e=i.openSolids.length;th.textContent=e>0?`${i.stats.solids.toLocaleString()} (${e.toLocaleString()} sheet${e===1?"":"s"})`:i.stats.solids.toLocaleString(),eh.textContent=i.kind==="step"?i.stats.facesTotal.toLocaleString():"—",nh.textContent=qd(i.mesh).toLocaleString(),ih.hidden=t===0,bM.textContent=t.toLocaleString(),$e.hidden=!1,t===0&&e===0?($e.textContent="✓ Watertight · print-ready",$e.className="badge ok",$e.title=""):t===0?($e.textContent=`✓ Clean · ${e.toLocaleString()} sheet bod${e===1?"y":"ies"}`,$e.className="badge ok",$e.title="Surface (sheet) bodies are open by design; their boundary edges are not defects. No unexpected open edges found."):($e.textContent=`⚠ ${t.toLocaleString()} unexpected open edge${t===1?"":"s"}`,$e.className="badge warn",$e.title=(e>0?`Sheet-body boundaries (${e} bodies) are excluded from this count. `:"")+"Click to highlight the open edges in the viewport.")}function Vi(i){const t=Math.abs(i);return(t>=100?i.toFixed(1):t>=1?i.toFixed(2):i.toFixed(3)).replace(/\.?0+$/,"")}function OM(i){return`${Vi(i[3]-i[0])} × ${Vi(i[4]-i[1])} × ${Vi(i[5]-i[2])} mm`}function BM(i){return i>=1e3?`${(i/1e3).toLocaleString(void 0,{maximumFractionDigits:2})} cm³`:`${i.toLocaleString(void 0,{maximumFractionDigits:2})} mm³`}function zM(i){return i>=1e3?`${(i/100).toLocaleString(void 0,{maximumFractionDigits:2})} cm²`:`${i.toLocaleString(void 0,{maximumFractionDigits:2})} mm²`}function kM(i){if(!i)return"—";const t=new Date(i);return isNaN(t.getTime())?i:t.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}function Fs(i,t){const e=parseFloat(pt(i).value);return isFinite(e)?e:t}function Ws(i,t=!1){ed.textContent=i,ed.classList.toggle("error",t)}function Rf(i){tf.textContent=i,ef.hidden=!0,nf.style.width="0%",Jd.hidden=!1}function Lr(){Jd.hidden=!0}
