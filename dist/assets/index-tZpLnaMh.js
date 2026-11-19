(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yo="170",sr={ROTATE:0,DOLLY:1,PAN:2},nr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fh=0,Tl=1,ph=2,fc=1,pc=2,Wn=3,Pn=0,jt=1,xn=2,vi=0,ar=1,Al=2,wl=3,Il=4,mh=5,Ci=100,vh=101,gh=102,_h=103,xh=104,yh=200,bh=201,Mh=202,Sh=203,$a=204,Qa=205,Eh=206,Th=207,Ah=208,wh=209,Ih=210,Rh=211,Ch=212,Ph=213,Oh=214,Ja=0,eo=1,to=2,cr=3,no=4,io=5,ro=6,so=7,mc=0,Lh=1,Dh=2,gi=0,Nh=1,Uh=2,Fh=3,vc=4,zh=5,Bh=6,kh=7,Rl="attached",Hh="detached",gc=300,hr=301,ur=302,ao=303,oo=304,ta=306,fr=1e3,pi=1001,Zs=1002,Wt=1003,_c=1004,Gr=1005,en=1006,Hs=1007,qn=1008,Zn=1009,xc=1010,yc=1011,Jr=1012,qo=1013,Li=1014,Mn=1015,is=1016,Ko=1017,jo=1018,pr=1020,bc=35902,Mc=1021,Sc=1022,on=1023,Ec=1024,Tc=1025,or=1026,mr=1027,Zo=1028,$o=1029,Ac=1030,Qo=1031,Jo=1033,Vs=33776,Gs=33777,Ws=33778,Xs=33779,lo=35840,co=35841,ho=35842,uo=35843,fo=36196,po=37492,mo=37496,vo=37808,go=37809,_o=37810,xo=37811,yo=37812,bo=37813,Mo=37814,So=37815,Eo=37816,To=37817,Ao=37818,wo=37819,Io=37820,Ro=37821,Ys=36492,Co=36494,Po=36495,wc=36283,Oo=36284,Lo=36285,Do=36286,es=2300,ts=2301,la=2302,Cl=2400,Pl=2401,Ol=2402,Vh=2500,Gh=0,Ic=1,No=2,Wh=3200,Xh=3201,Rc=0,Yh=1,ui="",Ot="srgb",Yt="srgb-linear",na="linear",nt="srgb",Bi=7680,Ll=519,qh=512,Kh=513,jh=514,Cc=515,Zh=516,$h=517,Qh=518,Jh=519,Uo=35044,Dl="300 es",Kn=2e3,$s=2001;class Ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nl=1234567;const Zr=Math.PI/180,vr=180/Math.PI;function Sn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[r&255]+Ut[r>>8&255]+Ut[r>>16&255]+Ut[r>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Lt(r,e,t){return Math.max(e,Math.min(t,r))}function el(r,e){return(r%e+e)%e}function eu(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function tu(r,e,t){return r!==e?(t-r)/(e-r):0}function $r(r,e,t){return(1-t)*r+t*e}function nu(r,e,t,n){return $r(r,e,1-Math.exp(-t*n))}function iu(r,e=1){return e-Math.abs(el(r,e*2)-e)}function ru(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function su(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function au(r,e){return r+Math.floor(Math.random()*(e-r+1))}function ou(r,e){return r+Math.random()*(e-r)}function lu(r){return r*(.5-Math.random())}function du(r){r!==void 0&&(Nl=r);let e=Nl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cu(r){return r*Zr}function hu(r){return r*vr}function uu(r){return(r&r-1)===0&&r!==0}function fu(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function pu(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function mu(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),d=s((e+n)/2),c=a((e+n)/2),h=s((e-n)/2),u=a((e-n)/2),p=s((n-e)/2),v=a((n-e)/2);switch(i){case"XYX":r.set(o*c,l*h,l*u,o*d);break;case"YZY":r.set(l*u,o*c,l*h,o*d);break;case"ZXZ":r.set(l*h,l*u,o*c,o*d);break;case"XZX":r.set(o*c,l*v,l*p,o*d);break;case"YXY":r.set(l*p,o*c,l*v,o*d);break;case"ZYZ":r.set(l*v,l*p,o*c,o*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function yn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function et(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ft={DEG2RAD:Zr,RAD2DEG:vr,generateUUID:Sn,clamp:Lt,euclideanModulo:el,mapLinear:eu,inverseLerp:tu,lerp:$r,damp:nu,pingpong:iu,smoothstep:ru,smootherstep:su,randInt:au,randFloat:ou,randFloatSpread:lu,seededRandom:du,degToRad:cu,radToDeg:hu,isPowerOfTwo:uu,ceilPowerOfTwo:fu,floorPowerOfTwo:pu,setQuaternionFromProperEuler:mu,normalize:et,denormalize:yn};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,t,n,i,s,a,o,l,d){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,d)}set(e,t,n,i,s,a,o,l,d){const c=this.elements;return c[0]=e,c[1]=i,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=n,c[7]=a,c[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],d=n[1],c=n[4],h=n[7],u=n[2],p=n[5],v=n[8],g=i[0],m=i[3],f=i[6],y=i[1],b=i[4],_=i[7],C=i[2],R=i[5],E=i[8];return s[0]=a*g+o*y+l*C,s[3]=a*m+o*b+l*R,s[6]=a*f+o*_+l*E,s[1]=d*g+c*y+h*C,s[4]=d*m+c*b+h*R,s[7]=d*f+c*_+h*E,s[2]=u*g+p*y+v*C,s[5]=u*m+p*b+v*R,s[8]=u*f+p*_+v*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],d=e[7],c=e[8];return t*a*c-t*o*d-n*s*c+n*o*l+i*s*d-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],d=e[7],c=e[8],h=c*a-o*d,u=o*l-c*s,p=d*s-a*l,v=t*h+n*u+i*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=h*g,e[1]=(i*d-c*n)*g,e[2]=(o*n-i*a)*g,e[3]=u*g,e[4]=(c*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=p*g,e[7]=(n*l-d*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),d=Math.sin(s);return this.set(n*l,n*d,-n*(l*a+d*o)+a+e,-i*d,i*l,-i*(-d*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(da.makeScale(e,t)),this}rotate(e){return this.premultiply(da.makeRotation(-e)),this}translate(e,t){return this.premultiply(da.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const da=new Ue;function Pc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ns(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function vu(){const r=ns("canvas");return r.style.display="block",r}const Ul={};function Wr(r){r in Ul||(Ul[r]=!0,console.warn(r))}function gu(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function _u(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function xu(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ve={enabled:!0,workingColorSpace:Yt,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===nt&&(r.r=jn(r.r),r.g=jn(r.g),r.b=jn(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===nt&&(r.r=lr(r.r),r.g=lr(r.g),r.b=lr(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ui?na:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function jn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function lr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Fl=[.64,.33,.3,.6,.15,.06],zl=[.2126,.7152,.0722],Bl=[.3127,.329],kl=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hl=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ve.define({[Yt]:{primaries:Fl,whitePoint:Bl,transfer:na,toXYZ:kl,fromXYZ:Hl,luminanceCoefficients:zl,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:Fl,whitePoint:Bl,transfer:nt,toXYZ:kl,fromXYZ:Hl,luminanceCoefficients:zl,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}});let ki;class yu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ki===void 0&&(ki=ns("canvas")),ki.width=e.width,ki.height=e.height;const n=ki.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ns("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=jn(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bu=0;class Oc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Sn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(ca(i[a].image)):s.push(ca(i[a]))}else s=ca(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ca(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?yu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mu=0;class Ct extends Ni{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=pi,i=pi,s=en,a=qn,o=on,l=Zn,d=Ct.DEFAULT_ANISOTROPY,c=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Sn(),this.name="",this.source=new Oc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=d,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fr:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case Zs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fr:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case Zs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=gc;Ct.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,t=0,n=0,i=1){je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,d=l[0],c=l[4],h=l[8],u=l[1],p=l[5],v=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(c-u)<.01&&Math.abs(h-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(c+u)<.1&&Math.abs(h+g)<.1&&Math.abs(v+m)<.1&&Math.abs(d+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(d+1)/2,_=(p+1)/2,C=(f+1)/2,R=(c+u)/4,E=(h+g)/4,I=(v+m)/4;return b>_&&b>C?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=R/n,s=E/n):_>C?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=R/i,s=I/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=E/s,i=I/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-v)*(m-v)+(h-g)*(h-g)+(u-c)*(u-c));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(h-g)/y,this.z=(u-c)/y,this.w=Math.acos((d+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Su extends Ni{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ct(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Oc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends Su{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Lc extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Eu extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Be{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],d=n[i+1],c=n[i+2],h=n[i+3];const u=s[a+0],p=s[a+1],v=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=d,e[t+2]=c,e[t+3]=h;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=v,e[t+3]=g;return}if(h!==g||l!==u||d!==p||c!==v){let m=1-o;const f=l*u+d*p+c*v+h*g,y=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const C=Math.sqrt(b),R=Math.atan2(C,f*y);m=Math.sin(m*R)/C,o=Math.sin(o*R)/C}const _=o*y;if(l=l*m+u*_,d=d*m+p*_,c=c*m+v*_,h=h*m+g*_,m===1-o){const C=1/Math.sqrt(l*l+d*d+c*c+h*h);l*=C,d*=C,c*=C,h*=C}}e[t]=l,e[t+1]=d,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],d=n[i+2],c=n[i+3],h=s[a],u=s[a+1],p=s[a+2],v=s[a+3];return e[t]=o*v+c*h+l*p-d*u,e[t+1]=l*v+c*u+d*h-o*p,e[t+2]=d*v+c*p+o*u-l*h,e[t+3]=c*v-o*h-l*u-d*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,d=o(n/2),c=o(i/2),h=o(s/2),u=l(n/2),p=l(i/2),v=l(s/2);switch(a){case"XYZ":this._x=u*c*h+d*p*v,this._y=d*p*h-u*c*v,this._z=d*c*v+u*p*h,this._w=d*c*h-u*p*v;break;case"YXZ":this._x=u*c*h+d*p*v,this._y=d*p*h-u*c*v,this._z=d*c*v-u*p*h,this._w=d*c*h+u*p*v;break;case"ZXY":this._x=u*c*h-d*p*v,this._y=d*p*h+u*c*v,this._z=d*c*v+u*p*h,this._w=d*c*h-u*p*v;break;case"ZYX":this._x=u*c*h-d*p*v,this._y=d*p*h+u*c*v,this._z=d*c*v-u*p*h,this._w=d*c*h+u*p*v;break;case"YZX":this._x=u*c*h+d*p*v,this._y=d*p*h+u*c*v,this._z=d*c*v-u*p*h,this._w=d*c*h-u*p*v;break;case"XZY":this._x=u*c*h-d*p*v,this._y=d*p*h-u*c*v,this._z=d*c*v+u*p*h,this._w=d*c*h+u*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],d=t[2],c=t[6],h=t[10],u=n+o+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-d)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(c-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+d)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-d)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(s+d)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,d=t._z,c=t._w;return this._x=n*c+a*o+i*d-s*l,this._y=i*c+a*l+s*o-n*d,this._z=s*c+a*d+n*l-i*o,this._w=a*c-n*o-i*l-s*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const d=Math.sqrt(l),c=Math.atan2(d,o),h=Math.sin((1-t)*c)/d,u=Math.sin(t*c)/d;return this._w=a*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,d=2*(a*i-o*n),c=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*d+a*h-o*c,this.y=n+l*c+o*d-s*h,this.z=i+l*h+s*c-a*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ha.copy(this).projectOnVector(e),this.sub(ha)}reflect(e){return this.sub(ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ha=new A,Vl=new Be;class cn{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mn):mn.fromBufferAttribute(s,a),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),os.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),os.copy(n.boundingBox)),os.applyMatrix4(e.matrixWorld),this.union(os)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),ls.subVectors(this.max,Pr),Hi.subVectors(e.a,Pr),Vi.subVectors(e.b,Pr),Gi.subVectors(e.c,Pr),ei.subVectors(Vi,Hi),ti.subVectors(Gi,Vi),yi.subVectors(Hi,Gi);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-yi.z,yi.y,ei.z,0,-ei.x,ti.z,0,-ti.x,yi.z,0,-yi.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-yi.y,yi.x,0];return!ua(t,Hi,Vi,Gi,ls)||(t=[1,0,0,0,1,0,0,0,1],!ua(t,Hi,Vi,Gi,ls))?!1:(ds.crossVectors(ei,ti),t=[ds.x,ds.y,ds.z],ua(t,Hi,Vi,Gi,ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fn=[new A,new A,new A,new A,new A,new A,new A,new A],mn=new A,os=new cn,Hi=new A,Vi=new A,Gi=new A,ei=new A,ti=new A,yi=new A,Pr=new A,ls=new A,ds=new A,bi=new A;function ua(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){bi.fromArray(r,s);const o=i.x*Math.abs(bi.x)+i.y*Math.abs(bi.y)+i.z*Math.abs(bi.z),l=e.dot(bi),d=t.dot(bi),c=n.dot(bi);if(Math.max(-Math.max(l,d,c),Math.min(l,d,c))>o)return!1}return!0}const Tu=new cn,Or=new A,fa=new A;class On{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Tu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);const t=Or.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Or,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(fa)),this.expandByPoint(Or.copy(e.center).sub(fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new A,pa=new A,cs=new A,ni=new A,ma=new A,hs=new A,va=new A;class Sr{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){pa.copy(e).add(t).multiplyScalar(.5),cs.copy(t).sub(e).normalize(),ni.copy(this.origin).sub(pa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(cs),o=ni.dot(this.direction),l=-ni.dot(cs),d=ni.lengthSq(),c=Math.abs(1-a*a);let h,u,p,v;if(c>0)if(h=a*l-o,u=a*o-l,v=s*c,h>=0)if(u>=-v)if(u<=v){const g=1/c;h*=g,u*=g,p=h*(h+a*u+2*o)+u*(a*h+u+2*l)+d}else u=s,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+d;else u=-s,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+d;else u<=-v?(h=Math.max(0,-(-a*s+o)),u=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+d):u<=v?(h=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+d):(h=Math.max(0,-(a*s+o)),u=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+d);else u=a>0?-s:s,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(pa).addScaledVector(cs,u),p}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),i=zn.dot(zn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const d=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return d>=0?(n=(e.min.x-u.x)*d,i=(e.max.x-u.x)*d):(n=(e.max.x-u.x)*d,i=(e.min.x-u.x)*d),c>=0?(s=(e.min.y-u.y)*c,a=(e.max.y-u.y)*c):(s=(e.max.y-u.y)*c,a=(e.min.y-u.y)*c),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,i,s){ma.subVectors(t,e),hs.subVectors(n,e),va.crossVectors(ma,hs);let a=this.direction.dot(va),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ni.subVectors(this.origin,e);const l=o*this.direction.dot(hs.crossVectors(ni,hs));if(l<0)return null;const d=o*this.direction.dot(ma.cross(ni));if(d<0||l+d>a)return null;const c=-o*ni.dot(va);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(e,t,n,i,s,a,o,l,d,c,h,u,p,v,g,m){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,d,c,h,u,p,v,g,m)}set(e,t,n,i,s,a,o,l,d,c,h,u,p,v,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=d,f[6]=c,f[10]=h,f[14]=u,f[3]=p,f[7]=v,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Wi.setFromMatrixColumn(e,0).length(),s=1/Wi.setFromMatrixColumn(e,1).length(),a=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),d=Math.sin(i),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=a*c,p=a*h,v=o*c,g=o*h;t[0]=l*c,t[4]=-l*h,t[8]=d,t[1]=p+v*d,t[5]=u-g*d,t[9]=-o*l,t[2]=g-u*d,t[6]=v+p*d,t[10]=a*l}else if(e.order==="YXZ"){const u=l*c,p=l*h,v=d*c,g=d*h;t[0]=u+g*o,t[4]=v*o-p,t[8]=a*d,t[1]=a*h,t[5]=a*c,t[9]=-o,t[2]=p*o-v,t[6]=g+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*c,p=l*h,v=d*c,g=d*h;t[0]=u-g*o,t[4]=-a*h,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*c,t[9]=g-u*o,t[2]=-a*d,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*c,p=a*h,v=o*c,g=o*h;t[0]=l*c,t[4]=v*d-p,t[8]=u*d+g,t[1]=l*h,t[5]=g*d+u,t[9]=p*d-v,t[2]=-d,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*d,v=o*l,g=o*d;t[0]=l*c,t[4]=g-u*h,t[8]=v*h+p,t[1]=h,t[5]=a*c,t[9]=-o*c,t[2]=-d*c,t[6]=p*h+v,t[10]=u-g*h}else if(e.order==="XZY"){const u=a*l,p=a*d,v=o*l,g=o*d;t[0]=l*c,t[4]=-h,t[8]=d*c,t[1]=u*h+g,t[5]=a*c,t[9]=p*h-v,t[2]=v*h-p,t[6]=o*c,t[10]=g*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Au,e,wu)}lookAt(e,t,n){const i=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),ii.crossVectors(n,$t),ii.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),ii.crossVectors(n,$t)),ii.normalize(),us.crossVectors($t,ii),i[0]=ii.x,i[4]=us.x,i[8]=$t.x,i[1]=ii.y,i[5]=us.y,i[9]=$t.y,i[2]=ii.z,i[6]=us.z,i[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],d=n[12],c=n[1],h=n[5],u=n[9],p=n[13],v=n[2],g=n[6],m=n[10],f=n[14],y=n[3],b=n[7],_=n[11],C=n[15],R=i[0],E=i[4],I=i[8],S=i[12],x=i[1],P=i[5],z=i[9],F=i[13],G=i[2],W=i[6],X=i[10],K=i[14],H=i[3],Q=i[7],de=i[11],pe=i[15];return s[0]=a*R+o*x+l*G+d*H,s[4]=a*E+o*P+l*W+d*Q,s[8]=a*I+o*z+l*X+d*de,s[12]=a*S+o*F+l*K+d*pe,s[1]=c*R+h*x+u*G+p*H,s[5]=c*E+h*P+u*W+p*Q,s[9]=c*I+h*z+u*X+p*de,s[13]=c*S+h*F+u*K+p*pe,s[2]=v*R+g*x+m*G+f*H,s[6]=v*E+g*P+m*W+f*Q,s[10]=v*I+g*z+m*X+f*de,s[14]=v*S+g*F+m*K+f*pe,s[3]=y*R+b*x+_*G+C*H,s[7]=y*E+b*P+_*W+C*Q,s[11]=y*I+b*z+_*X+C*de,s[15]=y*S+b*F+_*K+C*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],d=e[13],c=e[2],h=e[6],u=e[10],p=e[14],v=e[3],g=e[7],m=e[11],f=e[15];return v*(+s*l*h-i*d*h-s*o*u+n*d*u+i*o*p-n*l*p)+g*(+t*l*p-t*d*u+s*a*u-i*a*p+i*d*c-s*l*c)+m*(+t*d*h-t*o*p-s*a*h+n*a*p+s*o*c-n*d*c)+f*(-i*o*c-t*l*h+t*o*u+i*a*h-n*a*u+n*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],d=e[7],c=e[8],h=e[9],u=e[10],p=e[11],v=e[12],g=e[13],m=e[14],f=e[15],y=h*m*d-g*u*d+g*l*p-o*m*p-h*l*f+o*u*f,b=v*u*d-c*m*d-v*l*p+a*m*p+c*l*f-a*u*f,_=c*g*d-v*h*d+v*o*p-a*g*p-c*o*f+a*h*f,C=v*h*l-c*g*l-v*o*u+a*g*u+c*o*m-a*h*m,R=t*y+n*b+i*_+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/R;return e[0]=y*E,e[1]=(g*u*s-h*m*s-g*i*p+n*m*p+h*i*f-n*u*f)*E,e[2]=(o*m*s-g*l*s+g*i*d-n*m*d-o*i*f+n*l*f)*E,e[3]=(h*l*s-o*u*s-h*i*d+n*u*d+o*i*p-n*l*p)*E,e[4]=b*E,e[5]=(c*m*s-v*u*s+v*i*p-t*m*p-c*i*f+t*u*f)*E,e[6]=(v*l*s-a*m*s-v*i*d+t*m*d+a*i*f-t*l*f)*E,e[7]=(a*u*s-c*l*s+c*i*d-t*u*d-a*i*p+t*l*p)*E,e[8]=_*E,e[9]=(v*h*s-c*g*s-v*n*p+t*g*p+c*n*f-t*h*f)*E,e[10]=(a*g*s-v*o*s+v*n*d-t*g*d-a*n*f+t*o*f)*E,e[11]=(c*o*s-a*h*s-c*n*d+t*h*d+a*n*p-t*o*p)*E,e[12]=C*E,e[13]=(c*g*i-v*h*i+v*n*u-t*g*u-c*n*m+t*h*m)*E,e[14]=(v*o*i-a*g*i-v*n*l+t*g*l+a*n*m-t*o*m)*E,e[15]=(a*h*i-c*o*i+c*n*l-t*h*l-a*n*u+t*o*u)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,d=s*a,c=s*o;return this.set(d*a+n,d*o-i*l,d*l+i*o,0,d*o+i*l,c*o+n,c*l-i*a,0,d*l-i*o,c*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,d=s+s,c=a+a,h=o+o,u=s*d,p=s*c,v=s*h,g=a*c,m=a*h,f=o*h,y=l*d,b=l*c,_=l*h,C=n.x,R=n.y,E=n.z;return i[0]=(1-(g+f))*C,i[1]=(p+_)*C,i[2]=(v-b)*C,i[3]=0,i[4]=(p-_)*R,i[5]=(1-(u+f))*R,i[6]=(m+y)*R,i[7]=0,i[8]=(v+b)*E,i[9]=(m-y)*E,i[10]=(1-(u+g))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Wi.set(i[0],i[1],i[2]).length();const a=Wi.set(i[4],i[5],i[6]).length(),o=Wi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],vn.copy(this);const d=1/s,c=1/a,h=1/o;return vn.elements[0]*=d,vn.elements[1]*=d,vn.elements[2]*=d,vn.elements[4]*=c,vn.elements[5]*=c,vn.elements[6]*=c,vn.elements[8]*=h,vn.elements[9]*=h,vn.elements[10]*=h,t.setFromRotationMatrix(vn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Kn){const l=this.elements,d=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i);let p,v;if(o===Kn)p=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===$s)p=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Kn){const l=this.elements,d=1/(t-e),c=1/(n-i),h=1/(a-s),u=(t+e)*d,p=(n+i)*c;let v,g;if(o===Kn)v=(a+s)*h,g=-2*h;else if(o===$s)v=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*d,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Wi=new A,vn=new Ie,Au=new A(0,0,0),wu=new A(1,1,1),ii=new A,us=new A,$t=new A,Gl=new Ie,Wl=new Be;class Dt{constructor(e=0,t=0,n=0,i=Dt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],d=i[5],c=i[9],h=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,d)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,d),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,d),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wl.setFromEuler(this),this.setFromQuaternion(Wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dt.DEFAULT_ORDER="XYZ";class tl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Iu=0;const Xl=new A,Xi=new Be,Bn=new Ie,fs=new A,Lr=new A,Ru=new A,Cu=new Be,Yl=new A(1,0,0),ql=new A(0,1,0),Kl=new A(0,0,1),jl={type:"added"},Pu={type:"removed"},Yi={type:"childadded",child:null},ga={type:"childremoved",child:null};class st extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DEFAULT_UP.clone();const e=new A,t=new Dt,n=new Be,i=new A(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Ue}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=st.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(Yl,e)}rotateY(e){return this.rotateOnAxis(ql,e)}rotateZ(e){return this.rotateOnAxis(Kl,e)}translateOnAxis(e,t){return Xl.copy(e).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yl,e)}translateY(e){return this.translateOnAxis(ql,e)}translateZ(e){return this.translateOnAxis(Kl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fs.copy(e):fs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Lr,fs,this.up):Bn.lookAt(fs,Lr,this.up),this.quaternion.setFromRotationMatrix(Bn),i&&(Bn.extractRotation(i.matrixWorld),Xi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jl),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pu),ga.child=e,this.dispatchEvent(ga),ga.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jl),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,e,Ru),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,Cu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let d=0,c=l.length;d<c;d++){const h=l[d];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,d=this.material.length;l<d;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),d=a(e.textures),c=a(e.images),h=a(e.shapes),u=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),d.length>0&&(n.textures=d),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=i,n;function a(o){const l=[];for(const d in o){const c=o[d];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}st.DEFAULT_UP=new A(0,1,0);st.DEFAULT_MATRIX_AUTO_UPDATE=!0;st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new A,kn=new A,_a=new A,Hn=new A,qi=new A,Ki=new A,Zl=new A,xa=new A,ya=new A,ba=new A,Ma=new je,Sa=new je,Ea=new je;class bn{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),gn.subVectors(e,t),i.cross(gn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){gn.subVectors(i,t),kn.subVectors(n,t),_a.subVectors(e,t);const a=gn.dot(gn),o=gn.dot(kn),l=gn.dot(_a),d=kn.dot(kn),c=kn.dot(_a),h=a*d-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,p=(d*l-o*c)*u,v=(a*c-o*l)*u;return s.set(1-p-v,v,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Hn.x),l.addScaledVector(a,Hn.y),l.addScaledVector(o,Hn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Ma.setScalar(0),Sa.setScalar(0),Ea.setScalar(0),Ma.fromBufferAttribute(e,t),Sa.fromBufferAttribute(e,n),Ea.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ma,s.x),a.addScaledVector(Sa,s.y),a.addScaledVector(Ea,s.z),a}static isFrontFacing(e,t,n,i){return gn.subVectors(n,t),kn.subVectors(e,t),gn.cross(kn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),gn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return bn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;qi.subVectors(i,n),Ki.subVectors(s,n),xa.subVectors(e,n);const l=qi.dot(xa),d=Ki.dot(xa);if(l<=0&&d<=0)return t.copy(n);ya.subVectors(e,i);const c=qi.dot(ya),h=Ki.dot(ya);if(c>=0&&h<=c)return t.copy(i);const u=l*h-c*d;if(u<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(n).addScaledVector(qi,a);ba.subVectors(e,s);const p=qi.dot(ba),v=Ki.dot(ba);if(v>=0&&p<=v)return t.copy(s);const g=p*d-l*v;if(g<=0&&d>=0&&v<=0)return o=d/(d-v),t.copy(n).addScaledVector(Ki,o);const m=c*v-p*h;if(m<=0&&h-c>=0&&p-v>=0)return Zl.subVectors(s,i),o=(h-c)/(h-c+(p-v)),t.copy(i).addScaledVector(Zl,o);const f=1/(m+g+u);return a=g*f,o=u*f,t.copy(n).addScaledVector(qi,a).addScaledVector(Ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},ps={h:0,s:0,l:0};function Ta(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Me{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ve.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ve.workingColorSpace){if(e=el(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ta(a,s,e+1/3),this.g=Ta(a,s,e),this.b=Ta(a,s,e-1/3)}return Ve.toWorkingColorSpace(this,i),this}setStyle(e,t=Ot){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=Dc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Ve.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Lt(Ft.r*255,0,255))*65536+Math.round(Lt(Ft.g*255,0,255))*256+Math.round(Lt(Ft.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.fromWorkingColorSpace(Ft.copy(this),t);const n=Ft.r,i=Ft.g,s=Ft.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,d;const c=(o+a)/2;if(o===a)l=0,d=0;else{const h=a-o;switch(d=c<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=d,e.l=c,e}getRGB(e,t=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Ot){Ve.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,i=Ft.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(ps);const n=$r(ri.h,ps.h,t),i=$r(ri.s,ps.s,t),s=$r(ri.l,ps.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Me;Me.NAMES=Dc;let Ou=0;class Cn extends Ni{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=Sn(),this.name="",this.blending=ar,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$a,this.blendDst=Qa,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$a&&(n.blendSrc=this.blendSrc),this.blendDst!==Qa&&(n.blendDst=this.blendDst),this.blendEquation!==Ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ll&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ln extends Cn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dt,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new A,ms=new Ee;class Xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Uo,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ms.fromBufferAttribute(this,t),ms.applyMatrix3(e),this.setXY(t,ms.x,ms.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uo&&(e.usage=this.usage),e}}class Nc extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Uc extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class at extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Lu=0;const rn=new Ie,Aa=new st,ji=new A,Qt=new cn,Dr=new cn,It=new A;class Mt extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pc(e)?Uc:Nc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ue().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return Aa.lookAt(e),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new at(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Qt.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Dr.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(Qt.min,Dr.min),Qt.expandByPoint(It),It.addVectors(Qt.max,Dr.max),Qt.expandByPoint(It)):(Qt.expandByPoint(Dr.min),Qt.expandByPoint(Dr.max))}Qt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)It.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(It));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let d=0,c=o.count;d<c;d++)It.fromBufferAttribute(o,d),l&&(ji.fromBufferAttribute(e,d),It.add(ji)),i=Math.max(i,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new A,l[I]=new A;const d=new A,c=new A,h=new A,u=new Ee,p=new Ee,v=new Ee,g=new A,m=new A;function f(I,S,x){d.fromBufferAttribute(n,I),c.fromBufferAttribute(n,S),h.fromBufferAttribute(n,x),u.fromBufferAttribute(s,I),p.fromBufferAttribute(s,S),v.fromBufferAttribute(s,x),c.sub(d),h.sub(d),p.sub(u),v.sub(u);const P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(g.copy(c).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(c,-v.x).multiplyScalar(P),o[I].add(g),o[S].add(g),o[x].add(g),l[I].add(m),l[S].add(m),l[x].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,S=y.length;I<S;++I){const x=y[I],P=x.start,z=x.count;for(let F=P,G=P+z;F<G;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const b=new A,_=new A,C=new A,R=new A;function E(I){C.fromBufferAttribute(i,I),R.copy(C);const S=o[I];b.copy(S),b.sub(C.multiplyScalar(C.dot(S))).normalize(),_.crossVectors(R,S);const P=_.dot(l[I])<0?-1:1;a.setXYZW(I,b.x,b.y,b.z,P)}for(let I=0,S=y.length;I<S;++I){const x=y[I],P=x.start,z=x.count;for(let F=P,G=P+z;F<G;F+=3)E(e.getX(F+0)),E(e.getX(F+1)),E(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new A,s=new A,a=new A,o=new A,l=new A,d=new A,c=new A,h=new A;if(e)for(let u=0,p=e.count;u<p;u+=3){const v=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),c.subVectors(a,s),h.subVectors(i,s),c.cross(h),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),d.fromBufferAttribute(n,m),o.add(c),l.add(c),d.add(c),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,d.x,d.y,d.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),c.subVectors(a,s),h.subVectors(i,s),c.cross(h),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const d=o.array,c=o.itemSize,h=o.normalized,u=new d.constructor(l.length*c);let p=0,v=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*c;for(let f=0;f<c;f++)u[v++]=d[p++]}return new Xt(u,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],d=e(l,n);t.setAttribute(o,d)}const s=this.morphAttributes;for(const o in s){const l=[],d=s[o];for(let c=0,h=d.length;c<h;c++){const u=d[c],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const d=a[o];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const d in l)l[d]!==void 0&&(e[d]=l[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const d=n[l];e.data.attributes[l]=d.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const d=this.morphAttributes[l],c=[];for(let h=0,u=d.length;h<u;h++){const p=d[h];c.push(p.toJSON(e.data))}c.length>0&&(i[l]=c,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const d in i){const c=i[d];this.setAttribute(d,c.clone(t))}const s=e.morphAttributes;for(const d in s){const c=[],h=s[d];for(let u=0,p=h.length;u<p;u++)c.push(h[u].clone(t));this.morphAttributes[d]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let d=0,c=a.length;d<c;d++){const h=a[d];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $l=new Ie,Mi=new Sr,vs=new On,Ql=new A,gs=new A,_s=new A,xs=new A,wa=new A,ys=new A,Jl=new A,bs=new A;class ne extends st{constructor(e=new Mt,t=new ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){ys.set(0,0,0);for(let l=0,d=s.length;l<d;l++){const c=o[l],h=s[l];c!==0&&(wa.fromBufferAttribute(h,e),a?ys.addScaledVector(wa,c):ys.addScaledVector(wa.sub(t),c))}t.add(ys)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(s),Mi.copy(e.ray).recast(e.near),!(vs.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(vs,Ql)===null||Mi.origin.distanceToSquared(Ql)>(e.far-e.near)**2))&&($l.copy(s).invert(),Mi.copy(e.ray).applyMatrix4($l),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,d=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=u.length;v<g;v++){const m=u[v],f=a[m.materialIndex],y=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,C=b;_<C;_+=3){const R=o.getX(_),E=o.getX(_+1),I=o.getX(_+2);i=Ms(this,f,e,n,d,c,h,R,E,I),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const v=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const y=o.getX(m),b=o.getX(m+1),_=o.getX(m+2);i=Ms(this,a,e,n,d,c,h,y,b,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=u.length;v<g;v++){const m=u[v],f=a[m.materialIndex],y=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,C=b;_<C;_+=3){const R=_,E=_+1,I=_+2;i=Ms(this,f,e,n,d,c,h,R,E,I),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const v=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const y=m,b=m+1,_=m+2;i=Ms(this,a,e,n,d,c,h,y,b,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Du(r,e,t,n,i,s,a,o){let l;if(e.side===jt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Pn,o),l===null)return null;bs.copy(o),bs.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(bs);return d<t.near||d>t.far?null:{distance:d,point:bs.clone(),object:r}}function Ms(r,e,t,n,i,s,a,o,l,d){r.getVertexPosition(o,gs),r.getVertexPosition(l,_s),r.getVertexPosition(d,xs);const c=Du(r,e,t,n,gs,_s,xs,Jl);if(c){const h=new A;bn.getBarycoord(Jl,gs,_s,xs,h),i&&(c.uv=bn.getInterpolatedAttribute(i,o,l,d,h,new Ee)),s&&(c.uv1=bn.getInterpolatedAttribute(s,o,l,d,h,new Ee)),a&&(c.normal=bn.getInterpolatedAttribute(a,o,l,d,h,new A),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const u={a:o,b:l,c:d,normal:new A,materialIndex:0};bn.getNormal(gs,_s,xs,u.normal),c.face=u,c.barycoord=h}return c}class ut extends Mt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],d=[],c=[],h=[];let u=0,p=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,i,a,2),v("x","z","y",1,-1,e,n,-t,i,a,3),v("x","y","z",1,-1,e,t,n,i,s,4),v("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new at(d,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(h,2));function v(g,m,f,y,b,_,C,R,E,I,S){const x=_/E,P=C/I,z=_/2,F=C/2,G=R/2,W=E+1,X=I+1;let K=0,H=0;const Q=new A;for(let de=0;de<X;de++){const pe=de*P-F;for(let Oe=0;Oe<W;Oe++){const Qe=Oe*x-z;Q[g]=Qe*y,Q[m]=pe*b,Q[f]=G,d.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[f]=R>0?1:-1,c.push(Q.x,Q.y,Q.z),h.push(Oe/E),h.push(1-de/I),K+=1}}for(let de=0;de<I;de++)for(let pe=0;pe<E;pe++){const Oe=u+pe+W*de,Qe=u+pe+W*(de+1),Y=u+(pe+1)+W*(de+1),te=u+(pe+1)+W*de;l.push(Oe,Qe,te),l.push(Qe,Y,te),H+=6}o.addGroup(p,H,S),p+=H,u+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ht(r){const e={};for(let t=0;t<r.length;t++){const n=gr(r[t]);for(const i in n)e[i]=n[i]}return e}function Nu(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Fc(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}const Uu={clone:gr,merge:Ht};var Fu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends Cn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fu,this.fragmentShader=zu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=Nu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class zc extends st{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new A,ed=new Ee,td=new Ee;class Gt extends zc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,ed,td),t.subVectors(td,ed)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,d=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/d,i*=a.width/l,n*=a.height/d}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zi=-90,$i=1;class Bu extends st{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Gt(Zi,$i,e,t);i.layers=this.layers,this.add(i);const s=new Gt(Zi,$i,e,t);s.layers=this.layers,this.add(s);const a=new Gt(Zi,$i,e,t);a.layers=this.layers,this.add(a);const o=new Gt(Zi,$i,e,t);o.layers=this.layers,this.add(o);const l=new Gt(Zi,$i,e,t);l.layers=this.layers,this.add(l);const d=new Gt(Zi,$i,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const d of t)this.remove(d);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$s)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,d,c]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,d),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,c),e.setRenderTarget(h,u,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Bc extends Ct{constructor(e,t,n,i,s,a,o,l,d,c){e=e!==void 0?e:[],t=t!==void 0?t:hr,super(e,t,n,i,s,a,o,l,d,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ku extends Di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Bc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ut(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:vi});s.uniforms.tEquirect.value=t;const a=new ne(i,s),o=t.minFilter;return t.minFilter===qn&&(t.minFilter=en),new Bu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Ia=new A,Hu=new A,Vu=new Ue;class hi{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ia.subVectors(n,t).cross(Hu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ia),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vu.getNormalMatrix(e),i=this.coplanarPoint(Ia).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new On,Ss=new A;class nl{constructor(e=new hi,t=new hi,n=new hi,i=new hi,s=new hi,a=new hi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],d=i[4],c=i[5],h=i[6],u=i[7],p=i[8],v=i[9],g=i[10],m=i[11],f=i[12],y=i[13],b=i[14],_=i[15];if(n[0].setComponents(l-s,u-d,m-p,_-f).normalize(),n[1].setComponents(l+s,u+d,m+p,_+f).normalize(),n[2].setComponents(l+a,u+c,m+v,_+y).normalize(),n[3].setComponents(l-a,u-c,m-v,_-y).normalize(),n[4].setComponents(l-o,u-h,m-g,_-b).normalize(),t===Kn)n[5].setComponents(l+o,u+h,m+g,_+b).normalize();else if(t===$s)n[5].setComponents(o,h,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ss.x=i.normal.x>0?e.max.x:e.min.x,Ss.y=i.normal.y>0?e.max.y:e.min.y,Ss.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kc(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Gu(r){const e=new WeakMap;function t(o,l){const d=o.array,c=o.usage,h=d.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,d,c),o.onUploadCallback();let p;if(d instanceof Float32Array)p=r.FLOAT;else if(d instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)p=r.SHORT;else if(d instanceof Uint32Array)p=r.UNSIGNED_INT;else if(d instanceof Int32Array)p=r.INT;else if(d instanceof Int8Array)p=r.BYTE;else if(d instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:u,type:p,bytesPerElement:d.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,d){const c=l.array,h=l.updateRanges;if(r.bindBuffer(d,o),h.length===0)r.bufferSubData(d,0,c);else{h.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<h.length;p++){const v=h[u],g=h[p];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++u,h[u]=g)}h.length=u+1;for(let p=0,v=h.length;p<v;p++){const g=h[p];r.bufferSubData(d,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const d=e.get(o);if(d===void 0)e.set(o,t(o,l));else if(d.version<o.version){if(d.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,o,l),d.version=o.version}}return{get:i,remove:s,update:a}}class Ui extends Mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),d=o+1,c=l+1,h=e/o,u=t/l,p=[],v=[],g=[],m=[];for(let f=0;f<c;f++){const y=f*u-a;for(let b=0;b<d;b++){const _=b*h-s;v.push(_,-y,0),g.push(0,0,1),m.push(b/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const b=y+d*f,_=y+d*(f+1),C=y+1+d*(f+1),R=y+1+d*f;p.push(b,_,R),p.push(_,C,R)}this.setIndex(p),this.setAttribute("position",new at(v,3)),this.setAttribute("normal",new at(g,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xu=`#ifdef USE_ALPHAHASH
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
#endif`,Yu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ku=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ju=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zu=`#ifdef USE_AOMAP
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
#endif`,$u=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qu=`#ifdef USE_BATCHING
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
#endif`,Ju=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rf=`#ifdef USE_IRIDESCENCE
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
#endif`,sf=`#ifdef USE_BUMPMAP
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
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pf=`#define PI 3.141592653589793
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
} // validated`,mf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vf=`vec3 transformedNormal = objectNormal;
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
#endif`,gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,If=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Of=`#ifdef USE_GRADIENTMAP
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
}`,Lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Df=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uf=`uniform bool receiveShadow;
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
#endif`,Ff=`#ifdef USE_ENVMAP
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
#endif`,zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vf=`PhysicalMaterial material;
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
#endif`,Gf=`struct PhysicalMaterial {
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
}`,Wf=`
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
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$f=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ep=`#if defined( USE_POINTS_UV )
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
#endif`,tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ap=`#ifdef USE_MORPHTARGETS
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
#endif`,op=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fp=`#ifdef USE_NORMALMAP
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
#endif`,pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ep=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rp=`float getShadowMask() {
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
}`,Cp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pp=`#ifdef USE_SKINNING
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
#endif`,Op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,Dp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Up=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zp=`#ifdef USE_TRANSMISSION
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
#endif`,Bp=`#ifdef USE_TRANSMISSION
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xp=`uniform sampler2D t2D;
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
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`#include <common>
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
}`,$p=`#if DEPTH_PACKING == 3200
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
}`,Qp=`#define DISTANCE
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
}`,Jp=`#define DISTANCE
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
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`uniform float scale;
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
}`,i0=`uniform vec3 diffuse;
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
}`,r0=`#include <common>
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
}`,s0=`uniform vec3 diffuse;
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
}`,a0=`#define LAMBERT
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
}`,o0=`#define LAMBERT
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
}`,l0=`#define MATCAP
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
}`,d0=`#define MATCAP
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
}`,c0=`#define NORMAL
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
}`,h0=`#define NORMAL
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
}`,u0=`#define PHONG
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
}`,f0=`#define PHONG
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
}`,p0=`#define STANDARD
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
}`,m0=`#define STANDARD
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
}`,v0=`#define TOON
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
}`,g0=`#define TOON
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
}`,_0=`uniform float size;
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
}`,x0=`uniform vec3 diffuse;
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
}`,y0=`#include <common>
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
}`,b0=`uniform vec3 color;
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
}`,M0=`uniform float rotation;
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
}`,S0=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Wu,alphahash_pars_fragment:Xu,alphamap_fragment:Yu,alphamap_pars_fragment:qu,alphatest_fragment:Ku,alphatest_pars_fragment:ju,aomap_fragment:Zu,aomap_pars_fragment:$u,batching_pars_vertex:Qu,batching_vertex:Ju,begin_vertex:ef,beginnormal_vertex:tf,bsdfs:nf,iridescence_fragment:rf,bumpmap_pars_fragment:sf,clipping_planes_fragment:af,clipping_planes_pars_fragment:of,clipping_planes_pars_vertex:lf,clipping_planes_vertex:df,color_fragment:cf,color_pars_fragment:hf,color_pars_vertex:uf,color_vertex:ff,common:pf,cube_uv_reflection_fragment:mf,defaultnormal_vertex:vf,displacementmap_pars_vertex:gf,displacementmap_vertex:_f,emissivemap_fragment:xf,emissivemap_pars_fragment:yf,colorspace_fragment:bf,colorspace_pars_fragment:Mf,envmap_fragment:Sf,envmap_common_pars_fragment:Ef,envmap_pars_fragment:Tf,envmap_pars_vertex:Af,envmap_physical_pars_fragment:Ff,envmap_vertex:wf,fog_vertex:If,fog_pars_vertex:Rf,fog_fragment:Cf,fog_pars_fragment:Pf,gradientmap_pars_fragment:Of,lightmap_pars_fragment:Lf,lights_lambert_fragment:Df,lights_lambert_pars_fragment:Nf,lights_pars_begin:Uf,lights_toon_fragment:zf,lights_toon_pars_fragment:Bf,lights_phong_fragment:kf,lights_phong_pars_fragment:Hf,lights_physical_fragment:Vf,lights_physical_pars_fragment:Gf,lights_fragment_begin:Wf,lights_fragment_maps:Xf,lights_fragment_end:Yf,logdepthbuf_fragment:qf,logdepthbuf_pars_fragment:Kf,logdepthbuf_pars_vertex:jf,logdepthbuf_vertex:Zf,map_fragment:$f,map_pars_fragment:Qf,map_particle_fragment:Jf,map_particle_pars_fragment:ep,metalnessmap_fragment:tp,metalnessmap_pars_fragment:np,morphinstance_vertex:ip,morphcolor_vertex:rp,morphnormal_vertex:sp,morphtarget_pars_vertex:ap,morphtarget_vertex:op,normal_fragment_begin:lp,normal_fragment_maps:dp,normal_pars_fragment:cp,normal_pars_vertex:hp,normal_vertex:up,normalmap_pars_fragment:fp,clearcoat_normal_fragment_begin:pp,clearcoat_normal_fragment_maps:mp,clearcoat_pars_fragment:vp,iridescence_pars_fragment:gp,opaque_fragment:_p,packing:xp,premultiplied_alpha_fragment:yp,project_vertex:bp,dithering_fragment:Mp,dithering_pars_fragment:Sp,roughnessmap_fragment:Ep,roughnessmap_pars_fragment:Tp,shadowmap_pars_fragment:Ap,shadowmap_pars_vertex:wp,shadowmap_vertex:Ip,shadowmask_pars_fragment:Rp,skinbase_vertex:Cp,skinning_pars_vertex:Pp,skinning_vertex:Op,skinnormal_vertex:Lp,specularmap_fragment:Dp,specularmap_pars_fragment:Np,tonemapping_fragment:Up,tonemapping_pars_fragment:Fp,transmission_fragment:zp,transmission_pars_fragment:Bp,uv_pars_fragment:kp,uv_pars_vertex:Hp,uv_vertex:Vp,worldpos_vertex:Gp,background_vert:Wp,background_frag:Xp,backgroundCube_vert:Yp,backgroundCube_frag:qp,cube_vert:Kp,cube_frag:jp,depth_vert:Zp,depth_frag:$p,distanceRGBA_vert:Qp,distanceRGBA_frag:Jp,equirect_vert:e0,equirect_frag:t0,linedashed_vert:n0,linedashed_frag:i0,meshbasic_vert:r0,meshbasic_frag:s0,meshlambert_vert:a0,meshlambert_frag:o0,meshmatcap_vert:l0,meshmatcap_frag:d0,meshnormal_vert:c0,meshnormal_frag:h0,meshphong_vert:u0,meshphong_frag:f0,meshphysical_vert:p0,meshphysical_frag:m0,meshtoon_vert:v0,meshtoon_frag:g0,points_vert:_0,points_frag:x0,shadow_vert:y0,shadow_frag:b0,sprite_vert:M0,sprite_frag:S0},ie={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},In={basic:{uniforms:Ht([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ht([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Me(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ht([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ht([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ht([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Me(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ht([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ht([ie.points,ie.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ht([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ht([ie.common,ie.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ht([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ht([ie.sprite,ie.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Ht([ie.common,ie.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Ht([ie.lights,ie.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};In.physical={uniforms:Ht([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Es={r:0,b:0,g:0},Ei=new Dt,E0=new Ie;function T0(r,e,t,n,i,s,a){const o=new Me(0);let l=s===!0?0:1,d,c,h=null,u=0,p=null;function v(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?t:e).get(b)),b}function g(y){let b=!1;const _=v(y);_===null?f(o,l):_&&_.isColor&&(f(_,1),b=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,b){const _=v(b);_&&(_.isCubeTexture||_.mapping===ta)?(c===void 0&&(c=new ne(new ut(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:gr(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,R,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Ei.copy(b.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(E0.makeRotationFromEuler(Ei)),c.material.toneMapped=Ve.getTransfer(_.colorSpace)!==nt,(h!==_||u!==_.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,p=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(d===void 0&&(d=new ne(new Ui(2,2),new _i({name:"BackgroundMaterial",uniforms:gr(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=_,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.toneMapped=Ve.getTransfer(_.colorSpace)!==nt,_.matrixAutoUpdate===!0&&_.updateMatrix(),d.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||p!==r.toneMapping)&&(d.material.needsUpdate=!0,h=_,u=_.version,p=r.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null))}function f(y,b){y.getRGB(Es,Fc(r)),n.buffers.color.setClear(Es.r,Es.g,Es.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),l=b,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:g,addToRenderList:m}}function A0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,a=!1;function o(x,P,z,F,G){let W=!1;const X=h(F,z,P);s!==X&&(s=X,d(s.object)),W=p(x,F,z,G),W&&v(x,F,z,G),G!==null&&e.update(G,r.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,_(x,P,z,F),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return r.createVertexArray()}function d(x){return r.bindVertexArray(x)}function c(x){return r.deleteVertexArray(x)}function h(x,P,z){const F=z.wireframe===!0;let G=n[x.id];G===void 0&&(G={},n[x.id]=G);let W=G[P.id];W===void 0&&(W={},G[P.id]=W);let X=W[F];return X===void 0&&(X=u(l()),W[F]=X),X}function u(x){const P=[],z=[],F=[];for(let G=0;G<t;G++)P[G]=0,z[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:F,object:x,attributes:{},index:null}}function p(x,P,z,F){const G=s.attributes,W=P.attributes;let X=0;const K=z.getAttributes();for(const H in K)if(K[H].location>=0){const de=G[H];let pe=W[H];if(pe===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(pe=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(pe=x.instanceColor)),de===void 0||de.attribute!==pe||pe&&de.data!==pe.data)return!0;X++}return s.attributesNum!==X||s.index!==F}function v(x,P,z,F){const G={},W=P.attributes;let X=0;const K=z.getAttributes();for(const H in K)if(K[H].location>=0){let de=W[H];de===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(de=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(de=x.instanceColor));const pe={};pe.attribute=de,de&&de.data&&(pe.data=de.data),G[H]=pe,X++}s.attributes=G,s.attributesNum=X,s.index=F}function g(){const x=s.newAttributes;for(let P=0,z=x.length;P<z;P++)x[P]=0}function m(x){f(x,0)}function f(x,P){const z=s.newAttributes,F=s.enabledAttributes,G=s.attributeDivisors;z[x]=1,F[x]===0&&(r.enableVertexAttribArray(x),F[x]=1),G[x]!==P&&(r.vertexAttribDivisor(x,P),G[x]=P)}function y(){const x=s.newAttributes,P=s.enabledAttributes;for(let z=0,F=P.length;z<F;z++)P[z]!==x[z]&&(r.disableVertexAttribArray(z),P[z]=0)}function b(x,P,z,F,G,W,X){X===!0?r.vertexAttribIPointer(x,P,z,G,W):r.vertexAttribPointer(x,P,z,F,G,W)}function _(x,P,z,F){g();const G=F.attributes,W=z.getAttributes(),X=P.defaultAttributeValues;for(const K in W){const H=W[K];if(H.location>=0){let Q=G[K];if(Q===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor)),Q!==void 0){const de=Q.normalized,pe=Q.itemSize,Oe=e.get(Q);if(Oe===void 0)continue;const Qe=Oe.buffer,Y=Oe.type,te=Oe.bytesPerElement,_e=Y===r.INT||Y===r.UNSIGNED_INT||Q.gpuType===qo;if(Q.isInterleavedBufferAttribute){const se=Q.data,we=se.stride,Le=Q.offset;if(se.isInstancedInterleavedBuffer){for(let ke=0;ke<H.locationSize;ke++)f(H.location+ke,se.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ke=0;ke<H.locationSize;ke++)m(H.location+ke);r.bindBuffer(r.ARRAY_BUFFER,Qe);for(let ke=0;ke<H.locationSize;ke++)b(H.location+ke,pe/H.locationSize,Y,de,we*te,(Le+pe/H.locationSize*ke)*te,_e)}else{if(Q.isInstancedBufferAttribute){for(let se=0;se<H.locationSize;se++)f(H.location+se,Q.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let se=0;se<H.locationSize;se++)m(H.location+se);r.bindBuffer(r.ARRAY_BUFFER,Qe);for(let se=0;se<H.locationSize;se++)b(H.location+se,pe/H.locationSize,Y,de,pe*te,pe/H.locationSize*se*te,_e)}}else if(X!==void 0){const de=X[K];if(de!==void 0)switch(de.length){case 2:r.vertexAttrib2fv(H.location,de);break;case 3:r.vertexAttrib3fv(H.location,de);break;case 4:r.vertexAttrib4fv(H.location,de);break;default:r.vertexAttrib1fv(H.location,de)}}}}y()}function C(){I();for(const x in n){const P=n[x];for(const z in P){const F=P[z];for(const G in F)c(F[G].object),delete F[G];delete P[z]}delete n[x]}}function R(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const z in P){const F=P[z];for(const G in F)c(F[G].object),delete F[G];delete P[z]}delete n[x.id]}function E(x){for(const P in n){const z=n[P];if(z[x.id]===void 0)continue;const F=z[x.id];for(const G in F)c(F[G].object),delete F[G];delete z[x.id]}}function I(){S(),a=!0,s!==i&&(s=i,d(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function w0(r,e,t){let n;function i(d){n=d}function s(d,c){r.drawArrays(n,d,c),t.update(c,n,1)}function a(d,c,h){h!==0&&(r.drawArraysInstanced(n,d,c,h),t.update(c,n,h))}function o(d,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,c,0,h);let p=0;for(let v=0;v<h;v++)p+=c[v];t.update(p,n,1)}function l(d,c,h,u){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<d.length;v++)a(d[v],c[v],u[v]);else{p.multiDrawArraysInstancedWEBGL(n,d,0,c,0,u,0,h);let v=0;for(let g=0;g<h;g++)v+=c[g]*u[g];t.update(v,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function I0(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==on&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const I=E===is&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Zn&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Mn&&!I)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const c=l(d);c!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",c,"instead."),d=c);const h=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,R=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:d,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:C,maxSamples:R}}function R0(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new hi,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||n!==0||i;return i=u,n=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,p){const v=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,f=r.get(h);if(!i||v===null||v.length===0||s&&!m)s?c(null):d();else{const y=s?0:n,b=y*4;let _=f.clippingState||null;l.value=_,_=c(v,u,b,p);for(let C=0;C!==b;++C)_[C]=t[C];f.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function d(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(h,u,p,v){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const f=p+g*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,_=p;b!==g;++b,_+=4)a.copy(h[b]).applyMatrix4(y,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function C0(r){let e=new WeakMap;function t(a,o){return o===ao?a.mapping=hr:o===oo&&(a.mapping=ur),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ao||o===oo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const d=new ku(l.height);return d.fromEquirectangularTexture(r,a),e.set(a,d),a.addEventListener("dispose",i),t(d.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class il extends zc{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,a=s+d*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ir=4,nd=[.125,.215,.35,.446,.526,.582],Pi=20,Ra=new il,id=new Me;let Ca=null,Pa=0,Oa=0,La=!1;const Ii=(1+Math.sqrt(5))/2,Qi=1/Ii,rd=[new A(-Ii,Qi,0),new A(Ii,Qi,0),new A(-Qi,0,Ii),new A(Qi,0,Ii),new A(0,Ii,-Qi),new A(0,Ii,Qi),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class sd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ca=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ca,Pa,Oa),this._renderer.xr.enabled=La,e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hr||e.mapping===ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ca=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:is,format:on,colorSpace:Yt,depthBuffer:!1},i=ad(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ad(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=P0(s)),this._blurMaterial=O0(s,e,t)}return i}_compileMaterial(e){const t=new ne(this._lodPlanes[0],e);this._renderer.compile(t,Ra)}_sceneToCubeUV(e,t,n,i){const o=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,u=c.toneMapping;c.getClearColor(id),c.toneMapping=gi,c.autoClear=!1;const p=new ln({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),v=new ne(new ut,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(id),g=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,l[f],0),o.lookAt(d[f],0,0)):y===1?(o.up.set(0,0,l[f]),o.lookAt(0,d[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,d[f]));const b=this._cubeSize;Ts(i,y*b,f>2?b:0,b,b),c.setRenderTarget(i),g&&c.render(v,o),c.render(e,o)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=u,c.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===hr||e.mapping===ur;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=od());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new ne(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ts(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ra)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=rd[(i-s-1)%rd.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,d=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new ne(this._lodPlanes[i],d),u=d.uniforms,p=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Pi-1),g=s/v,m=isFinite(s)?1+Math.floor(c*g):Pi;m>Pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pi}`);const f=[];let y=0;for(let E=0;E<Pi;++E){const I=E/g,S=Math.exp(-I*I/2);f.push(S),E===0?y+=S:E<m&&(y+=2*S)}for(let E=0;E<f.length;E++)f[E]=f[E]/y;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=v,u.mipInt.value=b-n;const _=this._sizeLods[i],C=3*_*(i>b-ir?i-b+ir:0),R=4*(this._cubeSize-_);Ts(t,C,R,3*_,2*_),l.setRenderTarget(t),l.render(h,Ra)}}function P0(r){const e=[],t=[],n=[];let i=r;const s=r-ir+1+nd.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-ir?l=nd[a-r+ir-1]:a===0&&(l=0),n.push(l);const d=1/(o-2),c=-d,h=1+d,u=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,v=6,g=3,m=2,f=1,y=new Float32Array(g*v*p),b=new Float32Array(m*v*p),_=new Float32Array(f*v*p);for(let R=0;R<p;R++){const E=R%3*2/3-1,I=R>2?0:-1,S=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];y.set(S,g*v*R),b.set(u,m*v*R);const x=[R,R,R,R,R,R];_.set(x,f*v*R)}const C=new Mt;C.setAttribute("position",new Xt(y,g)),C.setAttribute("uv",new Xt(b,m)),C.setAttribute("faceIndex",new Xt(_,f)),e.push(C),i>ir&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ad(r,e,t){const n=new Di(r,e,t);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ts(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function O0(r,e,t){const n=new Float32Array(Pi),i=new A(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:rl(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function od(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rl(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function ld(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function rl(){return`

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
	`}function L0(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,d=l===ao||l===oo,c=l===hr||l===ur;if(d||c){let h=e.get(o);const u=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new sd(r)),h=d?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return d&&p&&p.height>0||c&&p&&i(p)?(t===null&&(t=new sd(r)),h=d?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const d=6;for(let c=0;c<d;c++)o[c]!==void 0&&l++;return l===d}function s(o){const l=o.target;l.removeEventListener("dispose",s);const d=e.get(l);d!==void 0&&(e.delete(l),d.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function D0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Wr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function N0(r,e,t,n){const i={},s=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);for(const v in u.morphAttributes){const g=u.morphAttributes[v];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}u.removeEventListener("dispose",a),delete i[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const v in u)e.update(u[v],r.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const g=p[v];for(let m=0,f=g.length;m<f;m++)e.update(g[m],r.ARRAY_BUFFER)}}function d(h){const u=[],p=h.index,v=h.attributes.position;let g=0;if(p!==null){const y=p.array;g=p.version;for(let b=0,_=y.length;b<_;b+=3){const C=y[b+0],R=y[b+1],E=y[b+2];u.push(C,R,R,E,E,C)}}else if(v!==void 0){const y=v.array;g=v.version;for(let b=0,_=y.length/3-1;b<_;b+=3){const C=b+0,R=b+1,E=b+2;u.push(C,R,R,E,E,C)}}else return;const m=new(Pc(u)?Uc:Nc)(u,1);m.version=g;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function c(h){const u=s.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&d(h)}else d(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:c}}function U0(r,e,t){let n;function i(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,p){r.drawElements(n,p,s,u*a),t.update(p,n,1)}function d(u,p,v){v!==0&&(r.drawElementsInstanced(n,p,s,u*a,v),t.update(p,n,v))}function c(u,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,u,0,v);let m=0;for(let f=0;f<v;f++)m+=p[f];t.update(m,n,1)}function h(u,p,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)d(u[f]/a,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,u,0,g,0,v);let f=0;for(let y=0;y<v;y++)f+=p[y]*g[y];t.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=d,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function F0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function z0(r,e,t){const n=new WeakMap,i=new je;function s(a,o,l){const d=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=c!==void 0?c.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let x=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var p=x;u!==void 0&&u.texture.dispose();const v=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let _=0;v===!0&&(_=1),g===!0&&(_=2),m===!0&&(_=3);let C=o.attributes.position.count*_,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const E=new Float32Array(C*R*4*h),I=new Lc(E,C,R,h);I.type=Mn,I.needsUpdate=!0;const S=_*4;for(let P=0;P<h;P++){const z=f[P],F=y[P],G=b[P],W=C*R*4*P;for(let X=0;X<z.count;X++){const K=X*S;v===!0&&(i.fromBufferAttribute(z,X),E[W+K+0]=i.x,E[W+K+1]=i.y,E[W+K+2]=i.z,E[W+K+3]=0),g===!0&&(i.fromBufferAttribute(F,X),E[W+K+4]=i.x,E[W+K+5]=i.y,E[W+K+6]=i.z,E[W+K+7]=0),m===!0&&(i.fromBufferAttribute(G,X),E[W+K+8]=i.x,E[W+K+9]=i.y,E[W+K+10]=i.z,E[W+K+11]=G.itemSize===4?i.w:1)}}u={count:h,texture:I,size:new Ee(C,R)},n.set(o,u),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let v=0;for(let m=0;m<d.length;m++)v+=d[m];const g=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",d)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function B0(r,e,t,n){let i=new WeakMap;function s(l){const d=n.render.frame,c=l.geometry,h=e.get(l,c);if(i.get(h)!==d&&(e.update(h),i.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==d&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,d))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==d&&(u.update(),i.set(u,d))}return h}function a(){i=new WeakMap}function o(l){const d=l.target;d.removeEventListener("dispose",o),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:a}}class Hc extends Ct{constructor(e,t,n,i,s,a,o,l,d,c=or){if(c!==or&&c!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===or&&(n=Li),n===void 0&&c===mr&&(n=pr),super(null,i,s,a,o,l,c,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Vc=new Ct,dd=new Hc(1,1),Gc=new Lc,Wc=new Eu,Xc=new Bc,cd=[],hd=[],ud=new Float32Array(16),fd=new Float32Array(9),pd=new Float32Array(4);function Er(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=cd[i];if(s===void 0&&(s=new Float32Array(i),cd[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function At(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function wt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ia(r,e){let t=hd[e];t===void 0&&(t=new Int32Array(e),hd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function k0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function H0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2fv(this.addr,e),wt(t,e)}}function V0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;r.uniform3fv(this.addr,e),wt(t,e)}}function G0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4fv(this.addr,e),wt(t,e)}}function W0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(At(t,n))return;pd.set(n),r.uniformMatrix2fv(this.addr,!1,pd),wt(t,n)}}function X0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(At(t,n))return;fd.set(n),r.uniformMatrix3fv(this.addr,!1,fd),wt(t,n)}}function Y0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(At(t,n))return;ud.set(n),r.uniformMatrix4fv(this.addr,!1,ud),wt(t,n)}}function q0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function K0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2iv(this.addr,e),wt(t,e)}}function j0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;r.uniform3iv(this.addr,e),wt(t,e)}}function Z0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4iv(this.addr,e),wt(t,e)}}function $0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Q0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2uiv(this.addr,e),wt(t,e)}}function J0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;r.uniform3uiv(this.addr,e),wt(t,e)}}function em(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4uiv(this.addr,e),wt(t,e)}}function tm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(dd.compareFunction=Cc,s=dd):s=Vc,t.setTexture2D(e||s,i)}function nm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Wc,i)}function im(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Xc,i)}function rm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Gc,i)}function sm(r){switch(r){case 5126:return k0;case 35664:return H0;case 35665:return V0;case 35666:return G0;case 35674:return W0;case 35675:return X0;case 35676:return Y0;case 5124:case 35670:return q0;case 35667:case 35671:return K0;case 35668:case 35672:return j0;case 35669:case 35673:return Z0;case 5125:return $0;case 36294:return Q0;case 36295:return J0;case 36296:return em;case 35678:case 36198:case 36298:case 36306:case 35682:return tm;case 35679:case 36299:case 36307:return nm;case 35680:case 36300:case 36308:case 36293:return im;case 36289:case 36303:case 36311:case 36292:return rm}}function am(r,e){r.uniform1fv(this.addr,e)}function om(r,e){const t=Er(e,this.size,2);r.uniform2fv(this.addr,t)}function lm(r,e){const t=Er(e,this.size,3);r.uniform3fv(this.addr,t)}function dm(r,e){const t=Er(e,this.size,4);r.uniform4fv(this.addr,t)}function cm(r,e){const t=Er(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function hm(r,e){const t=Er(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function um(r,e){const t=Er(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function fm(r,e){r.uniform1iv(this.addr,e)}function pm(r,e){r.uniform2iv(this.addr,e)}function mm(r,e){r.uniform3iv(this.addr,e)}function vm(r,e){r.uniform4iv(this.addr,e)}function gm(r,e){r.uniform1uiv(this.addr,e)}function _m(r,e){r.uniform2uiv(this.addr,e)}function xm(r,e){r.uniform3uiv(this.addr,e)}function ym(r,e){r.uniform4uiv(this.addr,e)}function bm(r,e,t){const n=this.cache,i=e.length,s=ia(t,i);At(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Vc,s[a])}function Mm(r,e,t){const n=this.cache,i=e.length,s=ia(t,i);At(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Wc,s[a])}function Sm(r,e,t){const n=this.cache,i=e.length,s=ia(t,i);At(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Xc,s[a])}function Em(r,e,t){const n=this.cache,i=e.length,s=ia(t,i);At(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Gc,s[a])}function Tm(r){switch(r){case 5126:return am;case 35664:return om;case 35665:return lm;case 35666:return dm;case 35674:return cm;case 35675:return hm;case 35676:return um;case 5124:case 35670:return fm;case 35667:case 35671:return pm;case 35668:case 35672:return mm;case 35669:case 35673:return vm;case 5125:return gm;case 36294:return _m;case 36295:return xm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return Mm;case 35680:case 36300:case 36308:case 36293:return Sm;case 36289:case 36303:case 36311:case 36292:return Em}}class Am{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sm(t.type)}}class wm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tm(t.type)}}class Im{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Da=/(\w+)(\])?(\[|\.)?/g;function md(r,e){r.seq.push(e),r.map[e.id]=e}function Rm(r,e,t){const n=r.name,i=n.length;for(Da.lastIndex=0;;){const s=Da.exec(n),a=Da.lastIndex;let o=s[1];const l=s[2]==="]",d=s[3];if(l&&(o=o|0),d===void 0||d==="["&&a+2===i){md(t,d===void 0?new Am(o,r,e):new wm(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new Im(o),md(t,h)),t=h}}}class qs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Rm(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function vd(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Cm=37297;let Pm=0;function Om(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const gd=new Ue;function Lm(r){Ve._getMatrix(gd,Ve.workingColorSpace,r);const e=`mat3( ${gd.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(r)){case na:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function _d(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Om(r.getShaderSource(e),a)}else return i}function Dm(r,e){const t=Lm(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Nm(r,e){let t;switch(e){case Nh:t="Linear";break;case Uh:t="Reinhard";break;case Fh:t="Cineon";break;case vc:t="ACESFilmic";break;case Bh:t="AgX";break;case kh:t="Neutral";break;case zh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const As=new A;function Um(){Ve.getLuminanceCoefficients(As);const r=As.x.toFixed(4),e=As.y.toFixed(4),t=As.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fm(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xr).join(`
`)}function zm(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Bm(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Xr(r){return r!==""}function xd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const km=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(r){return r.replace(km,Vm)}const Hm=new Map;function Vm(r,e){let t=ze[e];if(t===void 0){const n=Hm.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Fo(t)}const Gm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bd(r){return r.replace(Gm,Wm)}function Wm(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Md(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xm(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===fc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===pc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ym(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case hr:case ur:e="ENVMAP_TYPE_CUBE";break;case ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qm(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ur:e="ENVMAP_MODE_REFRACTION";break}return e}function Km(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case mc:e="ENVMAP_BLENDING_MULTIPLY";break;case Lh:e="ENVMAP_BLENDING_MIX";break;case Dh:e="ENVMAP_BLENDING_ADD";break}return e}function jm(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Zm(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Xm(t),d=Ym(t),c=qm(t),h=Km(t),u=jm(t),p=Fm(t),v=zm(s),g=i.createProgram();let m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Xr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Xr).join(`
`),f.length>0&&(f+=`
`)):(m=[Md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),f=[Md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?ze.tonemapping_pars_fragment:"",t.toneMapping!==gi?Nm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Dm("linearToOutputTexel",t.outputColorSpace),Um(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xr).join(`
`)),a=Fo(a),a=xd(a,t),a=yd(a,t),o=Fo(o),o=xd(o,t),o=yd(o,t),a=bd(a),o=bd(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=y+m+a,_=y+f+o,C=vd(i,i.VERTEX_SHADER,b),R=vd(i,i.FRAGMENT_SHADER,_);i.attachShader(g,C),i.attachShader(g,R),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(P){if(r.debug.checkShaderErrors){const z=i.getProgramInfoLog(g).trim(),F=i.getShaderInfoLog(C).trim(),G=i.getShaderInfoLog(R).trim();let W=!0,X=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,C,R);else{const K=_d(i,C,"vertex"),H=_d(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+K+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||G==="")&&(X=!1);X&&(P.diagnostics={runnable:W,programLog:z,vertexShader:{log:F,prefix:m},fragmentShader:{log:G,prefix:f}})}i.deleteShader(C),i.deleteShader(R),I=new qs(i,g),S=Bm(i,g)}let I;this.getUniforms=function(){return I===void 0&&E(this),I};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(g,Cm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pm++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=R,this}let $m=0;class Qm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Jm(e),t.set(e,n)),n}}class Jm{constructor(e){this.id=$m++,this.code=e,this.usedTimes=0}}function ev(r,e,t,n,i,s,a){const o=new tl,l=new Qm,d=new Set,c=[],h=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return d.add(S),S===0?"uv":`uv${S}`}function m(S,x,P,z,F){const G=z.fog,W=F.geometry,X=S.isMeshStandardMaterial?z.environment:null,K=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),H=K&&K.mapping===ta?K.image.height:null,Q=v[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const de=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pe=de!==void 0?de.length:0;let Oe=0;W.morphAttributes.position!==void 0&&(Oe=1),W.morphAttributes.normal!==void 0&&(Oe=2),W.morphAttributes.color!==void 0&&(Oe=3);let Qe,Y,te,_e;if(Q){const Je=In[Q];Qe=Je.vertexShader,Y=Je.fragmentShader}else Qe=S.vertexShader,Y=S.fragmentShader,l.update(S),te=l.getVertexShaderID(S),_e=l.getFragmentShaderID(S);const se=r.getRenderTarget(),we=r.state.buffers.depth.getReversed(),Le=F.isInstancedMesh===!0,ke=F.isBatchedMesh===!0,mt=!!S.map,Ye=!!S.matcap,xt=!!K,N=!!S.aoMap,tn=!!S.lightMap,Ge=!!S.bumpMap,We=!!S.normalMap,Te=!!S.displacementMap,dt=!!S.emissiveMap,Se=!!S.metalnessMap,w=!!S.roughnessMap,M=S.anisotropy>0,U=S.clearcoat>0,j=S.dispersion>0,$=S.iridescence>0,q=S.sheen>0,ye=S.transmission>0,ae=M&&!!S.anisotropyMap,he=U&&!!S.clearcoatMap,qe=U&&!!S.clearcoatNormalMap,J=U&&!!S.clearcoatRoughnessMap,ue=$&&!!S.iridescenceMap,Ae=$&&!!S.iridescenceThicknessMap,Re=q&&!!S.sheenColorMap,fe=q&&!!S.sheenRoughnessMap,Xe=!!S.specularMap,Fe=!!S.specularColorMap,ot=!!S.specularIntensityMap,O=ye&&!!S.transmissionMap,re=ye&&!!S.thicknessMap,V=!!S.gradientMap,Z=!!S.alphaMap,ce=S.alphaTest>0,oe=!!S.alphaHash,De=!!S.extensions;let gt=gi;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(gt=r.toneMapping);const Nt={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:Qe,fragmentShader:Y,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:_e,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:ke,batchingColor:ke&&F._colorsTexture!==null,instancing:Le,instancingColor:Le&&F.instanceColor!==null,instancingMorph:Le&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:se===null?r.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Yt,alphaToCoverage:!!S.alphaToCoverage,map:mt,matcap:Ye,envMap:xt,envMapMode:xt&&K.mapping,envMapCubeUVHeight:H,aoMap:N,lightMap:tn,bumpMap:Ge,normalMap:We,displacementMap:u&&Te,emissiveMap:dt,normalMapObjectSpace:We&&S.normalMapType===Yh,normalMapTangentSpace:We&&S.normalMapType===Rc,metalnessMap:Se,roughnessMap:w,anisotropy:M,anisotropyMap:ae,clearcoat:U,clearcoatMap:he,clearcoatNormalMap:qe,clearcoatRoughnessMap:J,dispersion:j,iridescence:$,iridescenceMap:ue,iridescenceThicknessMap:Ae,sheen:q,sheenColorMap:Re,sheenRoughnessMap:fe,specularMap:Xe,specularColorMap:Fe,specularIntensityMap:ot,transmission:ye,transmissionMap:O,thicknessMap:re,gradientMap:V,opaque:S.transparent===!1&&S.blending===ar&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:ce,alphaHash:oe,combine:S.combine,mapUv:mt&&g(S.map.channel),aoMapUv:N&&g(S.aoMap.channel),lightMapUv:tn&&g(S.lightMap.channel),bumpMapUv:Ge&&g(S.bumpMap.channel),normalMapUv:We&&g(S.normalMap.channel),displacementMapUv:Te&&g(S.displacementMap.channel),emissiveMapUv:dt&&g(S.emissiveMap.channel),metalnessMapUv:Se&&g(S.metalnessMap.channel),roughnessMapUv:w&&g(S.roughnessMap.channel),anisotropyMapUv:ae&&g(S.anisotropyMap.channel),clearcoatMapUv:he&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:qe&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:fe&&g(S.sheenRoughnessMap.channel),specularMapUv:Xe&&g(S.specularMap.channel),specularColorMapUv:Fe&&g(S.specularColorMap.channel),specularIntensityMapUv:ot&&g(S.specularIntensityMap.channel),transmissionMapUv:O&&g(S.transmissionMap.channel),thicknessMapUv:re&&g(S.thicknessMap.channel),alphaMapUv:Z&&g(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(We||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(mt||Z),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:we,skinning:F.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Oe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:gt,decodeVideoTexture:mt&&S.map.isVideoTexture===!0&&Ve.getTransfer(S.map.colorSpace)===nt,decodeVideoTextureEmissive:dt&&S.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(S.emissiveMap.colorSpace)===nt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===xn,flipSided:S.side===jt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:De&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&S.extensions.multiDraw===!0||ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Nt.vertexUv1s=d.has(1),Nt.vertexUv2s=d.has(2),Nt.vertexUv3s=d.has(3),d.clear(),Nt}function f(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)x.push(P),x.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(y(x,S),b(x,S),x.push(r.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function y(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function b(S,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),S.push(o.mask)}function _(S){const x=v[S.type];let P;if(x){const z=In[x];P=Uu.clone(z.uniforms)}else P=S.uniforms;return P}function C(S,x){let P;for(let z=0,F=c.length;z<F;z++){const G=c[z];if(G.cacheKey===x){P=G,++P.usedTimes;break}}return P===void 0&&(P=new Zm(r,x,S,s),c.push(P)),P}function R(S){if(--S.usedTimes===0){const x=c.indexOf(S);c[x]=c[c.length-1],c.pop(),S.destroy()}}function E(S){l.remove(S)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:C,releaseProgram:R,releaseShaderCache:E,programs:c,dispose:I}}function tv(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function nv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Sd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ed(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,u,p,v,g,m){let f=r[e];return f===void 0?(f={id:h.id,object:h,geometry:u,material:p,groupOrder:v,renderOrder:h.renderOrder,z:g,group:m},r[e]=f):(f.id=h.id,f.object=h,f.geometry=u,f.material=p,f.groupOrder=v,f.renderOrder=h.renderOrder,f.z=g,f.group=m),e++,f}function o(h,u,p,v,g,m){const f=a(h,u,p,v,g,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(h,u,p,v,g,m){const f=a(h,u,p,v,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function d(h,u){t.length>1&&t.sort(h||nv),n.length>1&&n.sort(u||Sd),i.length>1&&i.sort(u||Sd)}function c(){for(let h=e,u=r.length;h<u;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:c,sort:d}}function iv(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Ed,r.set(n,[a])):i>=s.length?(a=new Ed,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function rv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Me};break;case"SpotLight":t={position:new A,direction:new A,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new A,halfWidth:new A,halfHeight:new A};break}return r[e.id]=t,t}}}function sv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let av=0;function ov(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function lv(r){const e=new rv,t=sv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new A);const i=new A,s=new Ie,a=new Ie;function o(d){let c=0,h=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,v=0,g=0,m=0,f=0,y=0,b=0,_=0,C=0,R=0,E=0;d.sort(ov);for(let S=0,x=d.length;S<x;S++){const P=d[S],z=P.color,F=P.intensity,G=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=z.r*F,h+=z.g*F,u+=z.b*F;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],F);E++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,H=t.get(P);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=P.shadow.matrix,y++}n.directional[p]=X,p++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(z).multiplyScalar(F),X.distance=G,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[g]=X;const K=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,K.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[g]=K.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=W,_++}g++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(z).multiplyScalar(F),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const K=P.shadow,H=t.get(P);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,n.pointShadow[v]=H,n.pointShadowMap[v]=W,n.pointShadowMatrix[v]=P.shadow.matrix,b++}n.point[v]=X,v++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(F),X.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[f]=X,f++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ie.LTC_FLOAT_1,n.rectAreaLTC2=ie.LTC_FLOAT_2):(n.rectAreaLTC1=ie.LTC_HALF_1,n.rectAreaLTC2=ie.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=h,n.ambient[2]=u;const I=n.hash;(I.directionalLength!==p||I.pointLength!==v||I.spotLength!==g||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==y||I.numPointShadows!==b||I.numSpotShadows!==_||I.numSpotMaps!==C||I.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=_+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=E,I.directionalLength=p,I.pointLength=v,I.spotLength=g,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=y,I.numPointShadows=b,I.numSpotShadows=_,I.numSpotMaps=C,I.numLightProbes=E,n.version=av++)}function l(d,c){let h=0,u=0,p=0,v=0,g=0;const m=c.matrixWorldInverse;for(let f=0,y=d.length;f<y;f++){const b=d[f];if(b.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),h++}else if(b.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const _=n.rectArea[v];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){const _=n.point[u];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const _=n.hemi[g];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Td(r){const e=new lv(r),t=[],n=[];function i(c){d.camera=c,t.length=0,n.length=0}function s(c){t.push(c)}function a(c){n.push(c)}function o(){e.setup(t)}function l(c){e.setupView(t,c)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:d,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function dv(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Td(r),e.set(i,[o])):s>=a.length?(o=new Td(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class cv extends Cn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Wh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hv extends Cn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fv=`uniform sampler2D shadow_pass;
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
}`;function pv(r,e,t){let n=new nl;const i=new Ee,s=new Ee,a=new je,o=new cv({depthPacking:Xh}),l=new hv,d={},c=t.maxTextureSize,h={[Pn]:jt,[jt]:Pn,[xn]:xn},u=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:uv,fragmentShader:fv}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new Mt;v.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ne(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fc;let f=this.type;this.render=function(R,E,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const S=r.getRenderTarget(),x=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),z=r.state;z.setBlending(vi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const F=f!==Wn&&this.type===Wn,G=f===Wn&&this.type!==Wn;for(let W=0,X=R.length;W<X;W++){const K=R[W],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const Q=H.getFrameExtents();if(i.multiply(Q),s.copy(H.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(s.x=Math.floor(c/Q.x),i.x=s.x*Q.x,H.mapSize.x=s.x),i.y>c&&(s.y=Math.floor(c/Q.y),i.y=s.y*Q.y,H.mapSize.y=s.y)),H.map===null||F===!0||G===!0){const pe=this.type!==Wn?{minFilter:Wt,magFilter:Wt}:{};H.map!==null&&H.map.dispose(),H.map=new Di(i.x,i.y,pe),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const de=H.getViewportCount();for(let pe=0;pe<de;pe++){const Oe=H.getViewport(pe);a.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),z.viewport(a),H.updateMatrices(K,pe),n=H.getFrustum(),_(E,I,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===Wn&&y(H,I),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(S,x,P)};function y(R,E){const I=e.update(g);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Di(i.x,i.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(E,null,I,u,g,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(E,null,I,p,g,null)}function b(R,E,I,S){let x=null;const P=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)x=P;else if(x=I.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const z=x.uuid,F=E.uuid;let G=d[z];G===void 0&&(G={},d[z]=G);let W=G[F];W===void 0&&(W=x.clone(),G[F]=W,E.addEventListener("dispose",C)),x=W}if(x.visible=E.visible,x.wireframe=E.wireframe,S===Wn?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:h[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=r.properties.get(x);z.light=I}return x}function _(R,E,I,S,x){if(R.visible===!1)return;if(R.layers.test(E.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===Wn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const F=e.update(R),G=R.material;if(Array.isArray(G)){const W=F.groups;for(let X=0,K=W.length;X<K;X++){const H=W[X],Q=G[H.materialIndex];if(Q&&Q.visible){const de=b(R,Q,S,x);R.onBeforeShadow(r,R,E,I,F,de,H),r.renderBufferDirect(I,null,F,de,R,H),R.onAfterShadow(r,R,E,I,F,de,H)}}}else if(G.visible){const W=b(R,G,S,x);R.onBeforeShadow(r,R,E,I,F,W,null),r.renderBufferDirect(I,null,F,W,R,null),R.onAfterShadow(r,R,E,I,F,W,null)}}const z=R.children;for(let F=0,G=z.length;F<G;F++)_(z[F],E,I,S,x)}function C(R){R.target.removeEventListener("dispose",C);for(const I in d){const S=d[I],x=R.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const mv={[Ja]:eo,[to]:ro,[no]:so,[cr]:io,[eo]:Ja,[ro]:to,[so]:no,[io]:cr};function vv(r,e){function t(){let O=!1;const re=new je;let V=null;const Z=new je(0,0,0,0);return{setMask:function(ce){V!==ce&&!O&&(r.colorMask(ce,ce,ce,ce),V=ce)},setLocked:function(ce){O=ce},setClear:function(ce,oe,De,gt,Nt){Nt===!0&&(ce*=gt,oe*=gt,De*=gt),re.set(ce,oe,De,gt),Z.equals(re)===!1&&(r.clearColor(ce,oe,De,gt),Z.copy(re))},reset:function(){O=!1,V=null,Z.set(-1,0,0,0)}}}function n(){let O=!1,re=!1,V=null,Z=null,ce=null;return{setReversed:function(oe){if(re!==oe){const De=e.get("EXT_clip_control");re?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT);const gt=ce;ce=null,this.setClear(gt)}re=oe},getReversed:function(){return re},setTest:function(oe){oe?se(r.DEPTH_TEST):we(r.DEPTH_TEST)},setMask:function(oe){V!==oe&&!O&&(r.depthMask(oe),V=oe)},setFunc:function(oe){if(re&&(oe=mv[oe]),Z!==oe){switch(oe){case Ja:r.depthFunc(r.NEVER);break;case eo:r.depthFunc(r.ALWAYS);break;case to:r.depthFunc(r.LESS);break;case cr:r.depthFunc(r.LEQUAL);break;case no:r.depthFunc(r.EQUAL);break;case io:r.depthFunc(r.GEQUAL);break;case ro:r.depthFunc(r.GREATER);break;case so:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=oe}},setLocked:function(oe){O=oe},setClear:function(oe){ce!==oe&&(re&&(oe=1-oe),r.clearDepth(oe),ce=oe)},reset:function(){O=!1,V=null,Z=null,ce=null,re=!1}}}function i(){let O=!1,re=null,V=null,Z=null,ce=null,oe=null,De=null,gt=null,Nt=null;return{setTest:function(Je){O||(Je?se(r.STENCIL_TEST):we(r.STENCIL_TEST))},setMask:function(Je){re!==Je&&!O&&(r.stencilMask(Je),re=Je)},setFunc:function(Je,fn,Nn){(V!==Je||Z!==fn||ce!==Nn)&&(r.stencilFunc(Je,fn,Nn),V=Je,Z=fn,ce=Nn)},setOp:function(Je,fn,Nn){(oe!==Je||De!==fn||gt!==Nn)&&(r.stencilOp(Je,fn,Nn),oe=Je,De=fn,gt=Nn)},setLocked:function(Je){O=Je},setClear:function(Je){Nt!==Je&&(r.clearStencil(Je),Nt=Je)},reset:function(){O=!1,re=null,V=null,Z=null,ce=null,oe=null,De=null,gt=null,Nt=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,d=new WeakMap;let c={},h={},u=new WeakMap,p=[],v=null,g=!1,m=null,f=null,y=null,b=null,_=null,C=null,R=null,E=new Me(0,0,0),I=0,S=!1,x=null,P=null,z=null,F=null,G=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=K>=2);let Q=null,de={};const pe=r.getParameter(r.SCISSOR_BOX),Oe=r.getParameter(r.VIEWPORT),Qe=new je().fromArray(pe),Y=new je().fromArray(Oe);function te(O,re,V,Z){const ce=new Uint8Array(4),oe=r.createTexture();r.bindTexture(O,oe),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let De=0;De<V;De++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(re,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,ce):r.texImage2D(re+De,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ce);return oe}const _e={};_e[r.TEXTURE_2D]=te(r.TEXTURE_2D,r.TEXTURE_2D,1),_e[r.TEXTURE_CUBE_MAP]=te(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[r.TEXTURE_2D_ARRAY]=te(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_e[r.TEXTURE_3D]=te(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(r.DEPTH_TEST),a.setFunc(cr),Ge(!1),We(Tl),se(r.CULL_FACE),N(vi);function se(O){c[O]!==!0&&(r.enable(O),c[O]=!0)}function we(O){c[O]!==!1&&(r.disable(O),c[O]=!1)}function Le(O,re){return h[O]!==re?(r.bindFramebuffer(O,re),h[O]=re,O===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=re),O===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=re),!0):!1}function ke(O,re){let V=p,Z=!1;if(O){V=u.get(re),V===void 0&&(V=[],u.set(re,V));const ce=O.textures;if(V.length!==ce.length||V[0]!==r.COLOR_ATTACHMENT0){for(let oe=0,De=ce.length;oe<De;oe++)V[oe]=r.COLOR_ATTACHMENT0+oe;V.length=ce.length,Z=!0}}else V[0]!==r.BACK&&(V[0]=r.BACK,Z=!0);Z&&r.drawBuffers(V)}function mt(O){return v!==O?(r.useProgram(O),v=O,!0):!1}const Ye={[Ci]:r.FUNC_ADD,[vh]:r.FUNC_SUBTRACT,[gh]:r.FUNC_REVERSE_SUBTRACT};Ye[_h]=r.MIN,Ye[xh]=r.MAX;const xt={[yh]:r.ZERO,[bh]:r.ONE,[Mh]:r.SRC_COLOR,[$a]:r.SRC_ALPHA,[Ih]:r.SRC_ALPHA_SATURATE,[Ah]:r.DST_COLOR,[Eh]:r.DST_ALPHA,[Sh]:r.ONE_MINUS_SRC_COLOR,[Qa]:r.ONE_MINUS_SRC_ALPHA,[wh]:r.ONE_MINUS_DST_COLOR,[Th]:r.ONE_MINUS_DST_ALPHA,[Rh]:r.CONSTANT_COLOR,[Ch]:r.ONE_MINUS_CONSTANT_COLOR,[Ph]:r.CONSTANT_ALPHA,[Oh]:r.ONE_MINUS_CONSTANT_ALPHA};function N(O,re,V,Z,ce,oe,De,gt,Nt,Je){if(O===vi){g===!0&&(we(r.BLEND),g=!1);return}if(g===!1&&(se(r.BLEND),g=!0),O!==mh){if(O!==m||Je!==S){if((f!==Ci||_!==Ci)&&(r.blendEquation(r.FUNC_ADD),f=Ci,_=Ci),Je)switch(O){case ar:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Al:r.blendFunc(r.ONE,r.ONE);break;case wl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Il:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ar:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Al:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case wl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Il:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,b=null,C=null,R=null,E.set(0,0,0),I=0,m=O,S=Je}return}ce=ce||re,oe=oe||V,De=De||Z,(re!==f||ce!==_)&&(r.blendEquationSeparate(Ye[re],Ye[ce]),f=re,_=ce),(V!==y||Z!==b||oe!==C||De!==R)&&(r.blendFuncSeparate(xt[V],xt[Z],xt[oe],xt[De]),y=V,b=Z,C=oe,R=De),(gt.equals(E)===!1||Nt!==I)&&(r.blendColor(gt.r,gt.g,gt.b,Nt),E.copy(gt),I=Nt),m=O,S=!1}function tn(O,re){O.side===xn?we(r.CULL_FACE):se(r.CULL_FACE);let V=O.side===jt;re&&(V=!V),Ge(V),O.blending===ar&&O.transparent===!1?N(vi):N(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const Z=O.stencilWrite;o.setTest(Z),Z&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),dt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?se(r.SAMPLE_ALPHA_TO_COVERAGE):we(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(O){x!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),x=O)}function We(O){O!==fh?(se(r.CULL_FACE),O!==P&&(O===Tl?r.cullFace(r.BACK):O===ph?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):we(r.CULL_FACE),P=O}function Te(O){O!==z&&(X&&r.lineWidth(O),z=O)}function dt(O,re,V){O?(se(r.POLYGON_OFFSET_FILL),(F!==re||G!==V)&&(r.polygonOffset(re,V),F=re,G=V)):we(r.POLYGON_OFFSET_FILL)}function Se(O){O?se(r.SCISSOR_TEST):we(r.SCISSOR_TEST)}function w(O){O===void 0&&(O=r.TEXTURE0+W-1),Q!==O&&(r.activeTexture(O),Q=O)}function M(O,re,V){V===void 0&&(Q===null?V=r.TEXTURE0+W-1:V=Q);let Z=de[V];Z===void 0&&(Z={type:void 0,texture:void 0},de[V]=Z),(Z.type!==O||Z.texture!==re)&&(Q!==V&&(r.activeTexture(V),Q=V),r.bindTexture(O,re||_e[O]),Z.type=O,Z.texture=re)}function U(){const O=de[Q];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{r.compressedTexImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{r.texSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{r.texSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function qe(){try{r.texStorage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{r.texStorage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{r.texImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{r.texImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(O){Qe.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),Qe.copy(O))}function fe(O){Y.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),Y.copy(O))}function Xe(O,re){let V=d.get(re);V===void 0&&(V=new WeakMap,d.set(re,V));let Z=V.get(O);Z===void 0&&(Z=r.getUniformBlockIndex(re,O.name),V.set(O,Z))}function Fe(O,re){const Z=d.get(re).get(O);l.get(re)!==Z&&(r.uniformBlockBinding(re,Z,O.__bindingPointIndex),l.set(re,Z))}function ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},Q=null,de={},h={},u=new WeakMap,p=[],v=null,g=!1,m=null,f=null,y=null,b=null,_=null,C=null,R=null,E=new Me(0,0,0),I=0,S=!1,x=null,P=null,z=null,F=null,G=null,Qe.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:se,disable:we,bindFramebuffer:Le,drawBuffers:ke,useProgram:mt,setBlending:N,setMaterial:tn,setFlipSided:Ge,setCullFace:We,setLineWidth:Te,setPolygonOffset:dt,setScissorTest:Se,activeTexture:w,bindTexture:M,unbindTexture:U,compressedTexImage2D:j,compressedTexImage3D:$,texImage2D:ue,texImage3D:Ae,updateUBOMapping:Xe,uniformBlockBinding:Fe,texStorage2D:qe,texStorage3D:J,texSubImage2D:q,texSubImage3D:ye,compressedTexSubImage2D:ae,compressedTexSubImage3D:he,scissor:Re,viewport:fe,reset:ot}}function Ad(r,e,t,n){const i=gv(n);switch(t){case Mc:return r*e;case Ec:return r*e;case Tc:return r*e*2;case Zo:return r*e/i.components*i.byteLength;case $o:return r*e/i.components*i.byteLength;case Ac:return r*e*2/i.components*i.byteLength;case Qo:return r*e*2/i.components*i.byteLength;case Sc:return r*e*3/i.components*i.byteLength;case on:return r*e*4/i.components*i.byteLength;case Jo:return r*e*4/i.components*i.byteLength;case Vs:case Gs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ws:case Xs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case co:case uo:return Math.max(r,16)*Math.max(e,8)/4;case lo:case ho:return Math.max(r,8)*Math.max(e,8)/2;case fo:case po:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case mo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case go:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case _o:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case xo:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case yo:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case bo:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case So:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Eo:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case To:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case wo:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Io:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ro:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ys:case Co:case Po:return Math.ceil(r/4)*Math.ceil(e/4)*16;case wc:case Oo:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Lo:case Do:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gv(r){switch(r){case Zn:case xc:return{byteLength:1,components:1};case Jr:case yc:case is:return{byteLength:2,components:1};case Ko:case jo:return{byteLength:2,components:4};case Li:case qo:case Mn:return{byteLength:4,components:1};case bc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function _v(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ee,c=new WeakMap;let h;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,M){return p?new OffscreenCanvas(w,M):ns("canvas")}function g(w,M,U){let j=1;const $=Se(w);if(($.width>U||$.height>U)&&(j=U/Math.max($.width,$.height)),j<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const q=Math.floor(j*$.width),ye=Math.floor(j*$.height);h===void 0&&(h=v(q,ye));const ae=M?v(q,ye):h;return ae.width=q,ae.height=ye,ae.getContext("2d").drawImage(w,0,0,q,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+q+"x"+ye+")."),ae}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){r.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(w,M,U,j,$=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=M;if(M===r.RED&&(U===r.FLOAT&&(q=r.R32F),U===r.HALF_FLOAT&&(q=r.R16F),U===r.UNSIGNED_BYTE&&(q=r.R8)),M===r.RED_INTEGER&&(U===r.UNSIGNED_BYTE&&(q=r.R8UI),U===r.UNSIGNED_SHORT&&(q=r.R16UI),U===r.UNSIGNED_INT&&(q=r.R32UI),U===r.BYTE&&(q=r.R8I),U===r.SHORT&&(q=r.R16I),U===r.INT&&(q=r.R32I)),M===r.RG&&(U===r.FLOAT&&(q=r.RG32F),U===r.HALF_FLOAT&&(q=r.RG16F),U===r.UNSIGNED_BYTE&&(q=r.RG8)),M===r.RG_INTEGER&&(U===r.UNSIGNED_BYTE&&(q=r.RG8UI),U===r.UNSIGNED_SHORT&&(q=r.RG16UI),U===r.UNSIGNED_INT&&(q=r.RG32UI),U===r.BYTE&&(q=r.RG8I),U===r.SHORT&&(q=r.RG16I),U===r.INT&&(q=r.RG32I)),M===r.RGB_INTEGER&&(U===r.UNSIGNED_BYTE&&(q=r.RGB8UI),U===r.UNSIGNED_SHORT&&(q=r.RGB16UI),U===r.UNSIGNED_INT&&(q=r.RGB32UI),U===r.BYTE&&(q=r.RGB8I),U===r.SHORT&&(q=r.RGB16I),U===r.INT&&(q=r.RGB32I)),M===r.RGBA_INTEGER&&(U===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),U===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),U===r.UNSIGNED_INT&&(q=r.RGBA32UI),U===r.BYTE&&(q=r.RGBA8I),U===r.SHORT&&(q=r.RGBA16I),U===r.INT&&(q=r.RGBA32I)),M===r.RGB&&U===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),M===r.RGBA){const ye=$?na:Ve.getTransfer(j);U===r.FLOAT&&(q=r.RGBA32F),U===r.HALF_FLOAT&&(q=r.RGBA16F),U===r.UNSIGNED_BYTE&&(q=ye===nt?r.SRGB8_ALPHA8:r.RGBA8),U===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),U===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function _(w,M){let U;return w?M===null||M===Li||M===pr?U=r.DEPTH24_STENCIL8:M===Mn?U=r.DEPTH32F_STENCIL8:M===Jr&&(U=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Li||M===pr?U=r.DEPTH_COMPONENT24:M===Mn?U=r.DEPTH_COMPONENT32F:M===Jr&&(U=r.DEPTH_COMPONENT16),U}function C(w,M){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Wt&&w.minFilter!==en?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function R(w){const M=w.target;M.removeEventListener("dispose",R),I(M),M.isVideoTexture&&c.delete(M)}function E(w){const M=w.target;M.removeEventListener("dispose",E),x(M)}function I(w){const M=n.get(w);if(M.__webglInit===void 0)return;const U=w.source,j=u.get(U);if(j){const $=j[M.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(w),Object.keys(j).length===0&&u.delete(U)}n.remove(w)}function S(w){const M=n.get(w);r.deleteTexture(M.__webglTexture);const U=w.source,j=u.get(U);delete j[M.__cacheKey],a.memory.textures--}function x(w){const M=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let $=0;$<M.__webglFramebuffer[j].length;$++)r.deleteFramebuffer(M.__webglFramebuffer[j][$]);else r.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)r.deleteFramebuffer(M.__webglFramebuffer[j]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const U=w.textures;for(let j=0,$=U.length;j<$;j++){const q=n.get(U[j]);q.__webglTexture&&(r.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(U[j])}n.remove(w)}let P=0;function z(){P=0}function F(){const w=P;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),P+=1,w}function G(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function W(w,M){const U=n.get(w);if(w.isVideoTexture&&Te(w),w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){const j=w.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(U,w,M);return}}t.bindTexture(r.TEXTURE_2D,U.__webglTexture,r.TEXTURE0+M)}function X(w,M){const U=n.get(w);if(w.version>0&&U.__version!==w.version){Y(U,w,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,U.__webglTexture,r.TEXTURE0+M)}function K(w,M){const U=n.get(w);if(w.version>0&&U.__version!==w.version){Y(U,w,M);return}t.bindTexture(r.TEXTURE_3D,U.__webglTexture,r.TEXTURE0+M)}function H(w,M){const U=n.get(w);if(w.version>0&&U.__version!==w.version){te(U,w,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+M)}const Q={[fr]:r.REPEAT,[pi]:r.CLAMP_TO_EDGE,[Zs]:r.MIRRORED_REPEAT},de={[Wt]:r.NEAREST,[_c]:r.NEAREST_MIPMAP_NEAREST,[Gr]:r.NEAREST_MIPMAP_LINEAR,[en]:r.LINEAR,[Hs]:r.LINEAR_MIPMAP_NEAREST,[qn]:r.LINEAR_MIPMAP_LINEAR},pe={[qh]:r.NEVER,[Jh]:r.ALWAYS,[Kh]:r.LESS,[Cc]:r.LEQUAL,[jh]:r.EQUAL,[Qh]:r.GEQUAL,[Zh]:r.GREATER,[$h]:r.NOTEQUAL};function Oe(w,M){if(M.type===Mn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===en||M.magFilter===Hs||M.magFilter===Gr||M.magFilter===qn||M.minFilter===en||M.minFilter===Hs||M.minFilter===Gr||M.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,Q[M.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,Q[M.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,Q[M.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,de[M.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,de[M.minFilter]),M.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,pe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Wt||M.minFilter!==Gr&&M.minFilter!==qn||M.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");r.texParameterf(w,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Qe(w,M){let U=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",R));const j=M.source;let $=u.get(j);$===void 0&&($={},u.set(j,$));const q=G(M);if(q!==w.__cacheKey){$[q]===void 0&&($[q]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,U=!0),$[q].usedTimes++;const ye=$[w.__cacheKey];ye!==void 0&&($[w.__cacheKey].usedTimes--,ye.usedTimes===0&&S(M)),w.__cacheKey=q,w.__webglTexture=$[q].texture}return U}function Y(w,M,U){let j=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=r.TEXTURE_3D);const $=Qe(w,M),q=M.source;t.bindTexture(j,w.__webglTexture,r.TEXTURE0+U);const ye=n.get(q);if(q.version!==ye.__version||$===!0){t.activeTexture(r.TEXTURE0+U);const ae=Ve.getPrimaries(Ve.workingColorSpace),he=M.colorSpace===ui?null:Ve.getPrimaries(M.colorSpace),qe=M.colorSpace===ui||ae===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let J=g(M.image,!1,i.maxTextureSize);J=dt(M,J);const ue=s.convert(M.format,M.colorSpace),Ae=s.convert(M.type);let Re=b(M.internalFormat,ue,Ae,M.colorSpace,M.isVideoTexture);Oe(j,M);let fe;const Xe=M.mipmaps,Fe=M.isVideoTexture!==!0,ot=ye.__version===void 0||$===!0,O=q.dataReady,re=C(M,J);if(M.isDepthTexture)Re=_(M.format===mr,M.type),ot&&(Fe?t.texStorage2D(r.TEXTURE_2D,1,Re,J.width,J.height):t.texImage2D(r.TEXTURE_2D,0,Re,J.width,J.height,0,ue,Ae,null));else if(M.isDataTexture)if(Xe.length>0){Fe&&ot&&t.texStorage2D(r.TEXTURE_2D,re,Re,Xe[0].width,Xe[0].height);for(let V=0,Z=Xe.length;V<Z;V++)fe=Xe[V],Fe?O&&t.texSubImage2D(r.TEXTURE_2D,V,0,0,fe.width,fe.height,ue,Ae,fe.data):t.texImage2D(r.TEXTURE_2D,V,Re,fe.width,fe.height,0,ue,Ae,fe.data);M.generateMipmaps=!1}else Fe?(ot&&t.texStorage2D(r.TEXTURE_2D,re,Re,J.width,J.height),O&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,J.width,J.height,ue,Ae,J.data)):t.texImage2D(r.TEXTURE_2D,0,Re,J.width,J.height,0,ue,Ae,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Fe&&ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,re,Re,Xe[0].width,Xe[0].height,J.depth);for(let V=0,Z=Xe.length;V<Z;V++)if(fe=Xe[V],M.format!==on)if(ue!==null)if(Fe){if(O)if(M.layerUpdates.size>0){const ce=Ad(fe.width,fe.height,M.format,M.type);for(const oe of M.layerUpdates){const De=fe.data.subarray(oe*ce/fe.data.BYTES_PER_ELEMENT,(oe+1)*ce/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,V,0,0,oe,fe.width,fe.height,1,ue,De)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,V,0,0,0,fe.width,fe.height,J.depth,ue,fe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,V,Re,fe.width,fe.height,J.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?O&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,V,0,0,0,fe.width,fe.height,J.depth,ue,Ae,fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,V,Re,fe.width,fe.height,J.depth,0,ue,Ae,fe.data)}else{Fe&&ot&&t.texStorage2D(r.TEXTURE_2D,re,Re,Xe[0].width,Xe[0].height);for(let V=0,Z=Xe.length;V<Z;V++)fe=Xe[V],M.format!==on?ue!==null?Fe?O&&t.compressedTexSubImage2D(r.TEXTURE_2D,V,0,0,fe.width,fe.height,ue,fe.data):t.compressedTexImage2D(r.TEXTURE_2D,V,Re,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?O&&t.texSubImage2D(r.TEXTURE_2D,V,0,0,fe.width,fe.height,ue,Ae,fe.data):t.texImage2D(r.TEXTURE_2D,V,Re,fe.width,fe.height,0,ue,Ae,fe.data)}else if(M.isDataArrayTexture)if(Fe){if(ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,re,Re,J.width,J.height,J.depth),O)if(M.layerUpdates.size>0){const V=Ad(J.width,J.height,M.format,M.type);for(const Z of M.layerUpdates){const ce=J.data.subarray(Z*V/J.data.BYTES_PER_ELEMENT,(Z+1)*V/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,J.width,J.height,1,ue,Ae,ce)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ue,Ae,J.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Re,J.width,J.height,J.depth,0,ue,Ae,J.data);else if(M.isData3DTexture)Fe?(ot&&t.texStorage3D(r.TEXTURE_3D,re,Re,J.width,J.height,J.depth),O&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ue,Ae,J.data)):t.texImage3D(r.TEXTURE_3D,0,Re,J.width,J.height,J.depth,0,ue,Ae,J.data);else if(M.isFramebufferTexture){if(ot)if(Fe)t.texStorage2D(r.TEXTURE_2D,re,Re,J.width,J.height);else{let V=J.width,Z=J.height;for(let ce=0;ce<re;ce++)t.texImage2D(r.TEXTURE_2D,ce,Re,V,Z,0,ue,Ae,null),V>>=1,Z>>=1}}else if(Xe.length>0){if(Fe&&ot){const V=Se(Xe[0]);t.texStorage2D(r.TEXTURE_2D,re,Re,V.width,V.height)}for(let V=0,Z=Xe.length;V<Z;V++)fe=Xe[V],Fe?O&&t.texSubImage2D(r.TEXTURE_2D,V,0,0,ue,Ae,fe):t.texImage2D(r.TEXTURE_2D,V,Re,ue,Ae,fe);M.generateMipmaps=!1}else if(Fe){if(ot){const V=Se(J);t.texStorage2D(r.TEXTURE_2D,re,Re,V.width,V.height)}O&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ue,Ae,J)}else t.texImage2D(r.TEXTURE_2D,0,Re,ue,Ae,J);m(M)&&f(j),ye.__version=q.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function te(w,M,U){if(M.image.length!==6)return;const j=Qe(w,M),$=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+U);const q=n.get($);if($.version!==q.__version||j===!0){t.activeTexture(r.TEXTURE0+U);const ye=Ve.getPrimaries(Ve.workingColorSpace),ae=M.colorSpace===ui?null:Ve.getPrimaries(M.colorSpace),he=M.colorSpace===ui||ye===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const qe=M.isCompressedTexture||M.image[0].isCompressedTexture,J=M.image[0]&&M.image[0].isDataTexture,ue=[];for(let Z=0;Z<6;Z++)!qe&&!J?ue[Z]=g(M.image[Z],!0,i.maxCubemapSize):ue[Z]=J?M.image[Z].image:M.image[Z],ue[Z]=dt(M,ue[Z]);const Ae=ue[0],Re=s.convert(M.format,M.colorSpace),fe=s.convert(M.type),Xe=b(M.internalFormat,Re,fe,M.colorSpace),Fe=M.isVideoTexture!==!0,ot=q.__version===void 0||j===!0,O=$.dataReady;let re=C(M,Ae);Oe(r.TEXTURE_CUBE_MAP,M);let V;if(qe){Fe&&ot&&t.texStorage2D(r.TEXTURE_CUBE_MAP,re,Xe,Ae.width,Ae.height);for(let Z=0;Z<6;Z++){V=ue[Z].mipmaps;for(let ce=0;ce<V.length;ce++){const oe=V[ce];M.format!==on?Re!==null?Fe?O&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,0,0,oe.width,oe.height,Re,oe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,Xe,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,0,0,oe.width,oe.height,Re,fe,oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,Xe,oe.width,oe.height,0,Re,fe,oe.data)}}}else{if(V=M.mipmaps,Fe&&ot){V.length>0&&re++;const Z=Se(ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,re,Xe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(J){Fe?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ue[Z].width,ue[Z].height,Re,fe,ue[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,ue[Z].width,ue[Z].height,0,Re,fe,ue[Z].data);for(let ce=0;ce<V.length;ce++){const De=V[ce].image[Z].image;Fe?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,0,0,De.width,De.height,Re,fe,De.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,Xe,De.width,De.height,0,Re,fe,De.data)}}else{Fe?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Re,fe,ue[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,Re,fe,ue[Z]);for(let ce=0;ce<V.length;ce++){const oe=V[ce];Fe?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,0,0,Re,fe,oe.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,Xe,Re,fe,oe.image[Z])}}}m(M)&&f(r.TEXTURE_CUBE_MAP),q.__version=$.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function _e(w,M,U,j,$,q){const ye=s.convert(U.format,U.colorSpace),ae=s.convert(U.type),he=b(U.internalFormat,ye,ae,U.colorSpace),qe=n.get(M),J=n.get(U);if(J.__renderTarget=M,!qe.__hasExternalTextures){const ue=Math.max(1,M.width>>q),Ae=Math.max(1,M.height>>q);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,q,he,ue,Ae,M.depth,0,ye,ae,null):t.texImage2D($,q,he,ue,Ae,0,ye,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),We(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,$,J.__webglTexture,0,Ge(M)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,$,J.__webglTexture,q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function se(w,M,U){if(r.bindRenderbuffer(r.RENDERBUFFER,w),M.depthBuffer){const j=M.depthTexture,$=j&&j.isDepthTexture?j.type:null,q=_(M.stencilBuffer,$),ye=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=Ge(M);We(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ae,q,M.width,M.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,ae,q,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,q,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,w)}else{const j=M.textures;for(let $=0;$<j.length;$++){const q=j[$],ye=s.convert(q.format,q.colorSpace),ae=s.convert(q.type),he=b(q.internalFormat,ye,ae,q.colorSpace),qe=Ge(M);U&&We(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,he,M.width,M.height):We(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qe,he,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,he,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function we(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(M.depthTexture);j.__renderTarget=M,(!j.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const $=j.__webglTexture,q=Ge(M);if(M.depthTexture.format===or)We(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0);else if(M.depthTexture.format===mr)We(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Le(w){const M=n.get(w),U=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const j=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const $=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",$)};j.addEventListener("dispose",$),M.__depthDisposeCallback=$}M.__boundDepthTexture=j}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");we(M.__webglFramebuffer,w)}else if(U){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=r.createRenderbuffer(),se(M.__webglDepthbuffer[j],w,!1);else{const $=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,q)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),se(M.__webglDepthbuffer,w,!1);else{const j=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,$)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ke(w,M,U){const j=n.get(w);M!==void 0&&_e(j.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),U!==void 0&&Le(w)}function mt(w){const M=w.texture,U=n.get(w),j=n.get(M);w.addEventListener("dispose",E);const $=w.textures,q=w.isWebGLCubeRenderTarget===!0,ye=$.length>1;if(ye||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=M.version,a.memory.textures++),q){U.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer[ae]=[];for(let he=0;he<M.mipmaps.length;he++)U.__webglFramebuffer[ae][he]=r.createFramebuffer()}else U.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)U.__webglFramebuffer[ae]=r.createFramebuffer()}else U.__webglFramebuffer=r.createFramebuffer();if(ye)for(let ae=0,he=$.length;ae<he;ae++){const qe=n.get($[ae]);qe.__webglTexture===void 0&&(qe.__webglTexture=r.createTexture(),a.memory.textures++)}if(w.samples>0&&We(w)===!1){U.__webglMultisampledFramebuffer=r.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ae=0;ae<$.length;ae++){const he=$[ae];U.__webglColorRenderbuffer[ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,U.__webglColorRenderbuffer[ae]);const qe=s.convert(he.format,he.colorSpace),J=s.convert(he.type),ue=b(he.internalFormat,qe,J,he.colorSpace,w.isXRRenderTarget===!0),Ae=Ge(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ae,ue,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,U.__webglColorRenderbuffer[ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=r.createRenderbuffer(),se(U.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(q){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),Oe(r.TEXTURE_CUBE_MAP,M);for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0)for(let he=0;he<M.mipmaps.length;he++)_e(U.__webglFramebuffer[ae][he],w,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,he);else _e(U.__webglFramebuffer[ae],w,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(M)&&f(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ae=0,he=$.length;ae<he;ae++){const qe=$[ae],J=n.get(qe);t.bindTexture(r.TEXTURE_2D,J.__webglTexture),Oe(r.TEXTURE_2D,qe),_e(U.__webglFramebuffer,w,qe,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,0),m(qe)&&f(r.TEXTURE_2D)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ae=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,j.__webglTexture),Oe(ae,M),M.mipmaps&&M.mipmaps.length>0)for(let he=0;he<M.mipmaps.length;he++)_e(U.__webglFramebuffer[he],w,M,r.COLOR_ATTACHMENT0,ae,he);else _e(U.__webglFramebuffer,w,M,r.COLOR_ATTACHMENT0,ae,0);m(M)&&f(ae),t.unbindTexture()}w.depthBuffer&&Le(w)}function Ye(w){const M=w.textures;for(let U=0,j=M.length;U<j;U++){const $=M[U];if(m($)){const q=y(w),ye=n.get($).__webglTexture;t.bindTexture(q,ye),f(q),t.unbindTexture()}}}const xt=[],N=[];function tn(w){if(w.samples>0){if(We(w)===!1){const M=w.textures,U=w.width,j=w.height;let $=r.COLOR_BUFFER_BIT;const q=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=n.get(w),ae=M.length>1;if(ae)for(let he=0;he<M.length;he++)t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let he=0;he<M.length;he++){if(w.resolveDepthBuffer&&(w.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ye.__webglColorRenderbuffer[he]);const qe=n.get(M[he]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,qe,0)}r.blitFramebuffer(0,0,U,j,0,0,U,j,$,r.NEAREST),l===!0&&(xt.length=0,N.length=0,xt.push(r.COLOR_ATTACHMENT0+he),w.depthBuffer&&w.resolveDepthBuffer===!1&&(xt.push(q),N.push(q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,N)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ae)for(let he=0;he<M.length;he++){t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,ye.__webglColorRenderbuffer[he]);const qe=n.get(M[he]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,qe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const M=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Ge(w){return Math.min(i.maxSamples,w.samples)}function We(w){const M=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Te(w){const M=a.render.frame;c.get(w)!==M&&(c.set(w,M),w.update())}function dt(w,M){const U=w.colorSpace,j=w.format,$=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||U!==Yt&&U!==ui&&(Ve.getTransfer(U)===nt?(j!==on||$!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),M}function Se(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(d.width=w.naturalWidth||w.width,d.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(d.width=w.displayWidth,d.height=w.displayHeight):(d.width=w.width,d.height=w.height),d}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=ke,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=We}function xv(r,e){function t(n,i=ui){let s;const a=Ve.getTransfer(i);if(n===Zn)return r.UNSIGNED_BYTE;if(n===Ko)return r.UNSIGNED_SHORT_4_4_4_4;if(n===jo)return r.UNSIGNED_SHORT_5_5_5_1;if(n===bc)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===xc)return r.BYTE;if(n===yc)return r.SHORT;if(n===Jr)return r.UNSIGNED_SHORT;if(n===qo)return r.INT;if(n===Li)return r.UNSIGNED_INT;if(n===Mn)return r.FLOAT;if(n===is)return r.HALF_FLOAT;if(n===Mc)return r.ALPHA;if(n===Sc)return r.RGB;if(n===on)return r.RGBA;if(n===Ec)return r.LUMINANCE;if(n===Tc)return r.LUMINANCE_ALPHA;if(n===or)return r.DEPTH_COMPONENT;if(n===mr)return r.DEPTH_STENCIL;if(n===Zo)return r.RED;if(n===$o)return r.RED_INTEGER;if(n===Ac)return r.RG;if(n===Qo)return r.RG_INTEGER;if(n===Jo)return r.RGBA_INTEGER;if(n===Vs||n===Gs||n===Ws||n===Xs)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Vs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Vs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lo||n===co||n===ho||n===uo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===lo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===co)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ho)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fo||n===po||n===mo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===fo||n===po)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===mo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vo||n===go||n===_o||n===xo||n===yo||n===bo||n===Mo||n===So||n===Eo||n===To||n===Ao||n===wo||n===Io||n===Ro)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===vo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===go)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_o)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===So)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Eo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===To)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ao)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Io)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ro)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ys||n===Co||n===Po)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ys)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Co)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Po)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wc||n===Oo||n===Lo||n===Do)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ys)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Oo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Do)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class yv extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dn extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bv={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),f=this._getHandJoint(d,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=d.joints["index-finger-tip"],h=d.joints["thumb-tip"],u=c.position.distanceTo(h.position),p=.02,v=.005;d.inputState.pinching&&u>p+v?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&u<=p-v&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),d!==null&&(d.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new dn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Mv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sv=`
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

}`;class Ev{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Ct,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _i({vertexShader:Mv,fragmentShader:Sv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ne(new Ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tv extends Ni{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,d=null,c=null,h=null,u=null,p=null,v=null;const g=new Ev,m=t.getContextAttributes();let f=null,y=null;const b=[],_=[],C=new Ee;let R=null;const E=new Gt;E.viewport=new je;const I=new Gt;I.viewport=new je;const S=[E,I],x=new yv;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=b[Y];return te===void 0&&(te=new Na,b[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=b[Y];return te===void 0&&(te=new Na,b[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=b[Y];return te===void 0&&(te=new Na,b[Y]=te),te.getHandSpace()};function F(Y){const te=_.indexOf(Y.inputSource);if(te===-1)return;const _e=b[te];_e!==void 0&&(_e.update(Y.inputSource,Y.frame,d||a),_e.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",W);for(let Y=0;Y<b.length;Y++){const te=_[Y];te!==null&&(_[Y]=null,b[Y].disconnect(te))}P=null,z=null,g.reset(),e.setRenderTarget(f),p=null,u=null,h=null,i=null,y=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||a},this.setReferenceSpace=function(Y){d=Y},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",G),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Di(p.framebufferWidth,p.framebufferHeight,{format:on,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,_e=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?mr:or,_e=m.stencil?pr:Li);const we={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(we),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Di(u.textureWidth,u.textureHeight,{format:on,type:Zn,depthTexture:new Hc(u.textureWidth,u.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),d=null,a=await i.requestReferenceSpace(o),Qe.setContext(i),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(Y){for(let te=0;te<Y.removed.length;te++){const _e=Y.removed[te],se=_.indexOf(_e);se>=0&&(_[se]=null,b[se].disconnect(_e))}for(let te=0;te<Y.added.length;te++){const _e=Y.added[te];let se=_.indexOf(_e);if(se===-1){for(let Le=0;Le<b.length;Le++)if(Le>=_.length){_.push(_e),se=Le;break}else if(_[Le]===null){_[Le]=_e,se=Le;break}if(se===-1)break}const we=b[se];we&&we.connect(_e)}}const X=new A,K=new A;function H(Y,te,_e){X.setFromMatrixPosition(te.matrixWorld),K.setFromMatrixPosition(_e.matrixWorld);const se=X.distanceTo(K),we=te.projectionMatrix.elements,Le=_e.projectionMatrix.elements,ke=we[14]/(we[10]-1),mt=we[14]/(we[10]+1),Ye=(we[9]+1)/we[5],xt=(we[9]-1)/we[5],N=(we[8]-1)/we[0],tn=(Le[8]+1)/Le[0],Ge=ke*N,We=ke*tn,Te=se/(-N+tn),dt=Te*-N;if(te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(dt),Y.translateZ(Te),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),we[10]===-1)Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Se=ke+Te,w=mt+Te,M=Ge-dt,U=We+(se-dt),j=Ye*mt/w*Se,$=xt*mt/w*Se;Y.projectionMatrix.makePerspective(M,U,j,$,Se,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Q(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let te=Y.near,_e=Y.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),x.near=I.near=E.near=te,x.far=I.far=E.far=_e,(P!==x.near||z!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,z=x.far),E.layers.mask=Y.layers.mask|2,I.layers.mask=Y.layers.mask|4,x.layers.mask=E.layers.mask|I.layers.mask;const se=Y.parent,we=x.cameras;Q(x,se);for(let Le=0;Le<we.length;Le++)Q(we[Le],se);we.length===2?H(x,E,I):x.projectionMatrix.copy(E.projectionMatrix),de(Y,x,se)};function de(Y,te,_e){_e===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(_e.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=vr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let pe=null;function Oe(Y,te){if(c=te.getViewerPose(d||a),v=te,c!==null){const _e=c.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let se=!1;_e.length!==x.cameras.length&&(x.cameras.length=0,se=!0);for(let Le=0;Le<_e.length;Le++){const ke=_e[Le];let mt=null;if(p!==null)mt=p.getViewport(ke);else{const xt=h.getViewSubImage(u,ke);mt=xt.viewport,Le===0&&(e.setRenderTargetTextures(y,xt.colorTexture,u.ignoreDepthValues?void 0:xt.depthStencilTexture),e.setRenderTarget(y))}let Ye=S[Le];Ye===void 0&&(Ye=new Gt,Ye.layers.enable(Le),Ye.viewport=new je,S[Le]=Ye),Ye.matrix.fromArray(ke.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(ke.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(mt.x,mt.y,mt.width,mt.height),Le===0&&(x.matrix.copy(Ye.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),se===!0&&x.cameras.push(Ye)}const we=i.enabledFeatures;if(we&&we.includes("depth-sensing")){const Le=h.getDepthInformation(_e[0]);Le&&Le.isValid&&Le.texture&&g.init(e,Le,i.renderState)}}for(let _e=0;_e<b.length;_e++){const se=_[_e],we=b[_e];se!==null&&we!==void 0&&we.update(se,te,d||a)}pe&&pe(Y,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),v=null}const Qe=new kc;Qe.setAnimationLoop(Oe),this.setAnimationLoop=function(Y){pe=Y},this.dispose=function(){}}}const Ti=new Dt,Av=new Ie;function wv(r,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Fc(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,y,b,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,b):f.isSpriteMaterial?d(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===jt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===jt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f),b=y.envMap,_=y.envMapRotation;b&&(m.envMap.value=b,Ti.copy(_),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),m.envMapRotation.value.setFromMatrix4(Av.makeRotationFromEuler(Ti)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===jt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Iv(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const _=b.program;n.uniformBlockBinding(y,_)}function d(y,b){let _=i[y.id];_===void 0&&(v(y),_=c(y),i[y.id]=_,y.addEventListener("dispose",m));const C=b.program;n.updateUBOMapping(y,C);const R=e.render.frame;s[y.id]!==R&&(u(y),s[y.id]=R)}function c(y){const b=h();y.__bindingPointIndex=b;const _=r.createBuffer(),C=y.__size,R=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,C,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,_),_}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const b=i[y.id],_=y.uniforms,C=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let R=0,E=_.length;R<E;R++){const I=Array.isArray(_[R])?_[R]:[_[R]];for(let S=0,x=I.length;S<x;S++){const P=I[S];if(p(P,R,S,C)===!0){const z=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let W=0;W<F.length;W++){const X=F[W],K=g(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,z+G,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,G),G+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(y,b,_,C){const R=y.value,E=b+"_"+_;if(C[E]===void 0)return typeof R=="number"||typeof R=="boolean"?C[E]=R:C[E]=R.clone(),!0;{const I=C[E];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return C[E]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function v(y){const b=y.uniforms;let _=0;const C=16;for(let E=0,I=b.length;E<I;E++){const S=Array.isArray(b[E])?b[E]:[b[E]];for(let x=0,P=S.length;x<P;x++){const z=S[x],F=Array.isArray(z.value)?z.value:[z.value];for(let G=0,W=F.length;G<W;G++){const X=F[G],K=g(X),H=_%C,Q=H%K.boundary,de=H+Q;_+=Q,de!==0&&C-de<K.storage&&(_+=C-de),z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=K.storage}}}const R=_%C;return R>0&&(_+=C-R),y.__size=_,y.__cache={},this}function g(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){const b=y.target;b.removeEventListener("dispose",m);const _=a.indexOf(b.__bindingPointIndex);a.splice(_,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function f(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:d,dispose:f}}class Rv{constructor(e={}){const{canvas:t=vu(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:d=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,f=null;const y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this.toneMapping=gi,this.toneMappingExposure=1;const _=this;let C=!1,R=0,E=0,I=null,S=-1,x=null;const P=new je,z=new je;let F=null;const G=new Me(0);let W=0,X=t.width,K=t.height,H=1,Q=null,de=null;const pe=new je(0,0,X,K),Oe=new je(0,0,X,K);let Qe=!1;const Y=new nl;let te=!1,_e=!1;const se=new Ie,we=new Ie,Le=new A,ke=new je,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function xt(){return I===null?H:1}let N=n;function tn(T,L){return t.getContext(T,L)}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:d,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yo}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",oe,!1),N===null){const L="webgl2";if(N=tn(L,T),N===null)throw tn(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ge,We,Te,dt,Se,w,M,U,j,$,q,ye,ae,he,qe,J,ue,Ae,Re,fe,Xe,Fe,ot,O;function re(){Ge=new D0(N),Ge.init(),Fe=new xv(N,Ge),We=new I0(N,Ge,e,Fe),Te=new vv(N,Ge),We.reverseDepthBuffer&&u&&Te.buffers.depth.setReversed(!0),dt=new F0(N),Se=new tv,w=new _v(N,Ge,Te,Se,We,Fe,dt),M=new C0(_),U=new L0(_),j=new Gu(N),ot=new A0(N,j),$=new N0(N,j,dt,ot),q=new B0(N,$,j,dt),Re=new z0(N,We,w),J=new R0(Se),ye=new ev(_,M,U,Ge,We,ot,J),ae=new wv(_,Se),he=new iv,qe=new dv(Ge),Ae=new T0(_,M,U,Te,q,p,l),ue=new pv(_,q,We),O=new Iv(N,dt,We,Te),fe=new w0(N,Ge,dt),Xe=new U0(N,Ge,dt),dt.programs=ye.programs,_.capabilities=We,_.extensions=Ge,_.properties=Se,_.renderLists=he,_.shadowMap=ue,_.state=Te,_.info=dt}re();const V=new Tv(_,N);this.xr=V,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=Ge.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ge.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(X,K,!1))},this.getSize=function(T){return T.set(X,K)},this.setSize=function(T,L,B=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,K=L,t.width=Math.floor(T*H),t.height=Math.floor(L*H),B===!0&&(t.style.width=T+"px",t.style.height=L+"px"),this.setViewport(0,0,T,L)},this.getDrawingBufferSize=function(T){return T.set(X*H,K*H).floor()},this.setDrawingBufferSize=function(T,L,B){X=T,K=L,H=B,t.width=Math.floor(T*B),t.height=Math.floor(L*B),this.setViewport(0,0,T,L)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(pe)},this.setViewport=function(T,L,B,k){T.isVector4?pe.set(T.x,T.y,T.z,T.w):pe.set(T,L,B,k),Te.viewport(P.copy(pe).multiplyScalar(H).round())},this.getScissor=function(T){return T.copy(Oe)},this.setScissor=function(T,L,B,k){T.isVector4?Oe.set(T.x,T.y,T.z,T.w):Oe.set(T,L,B,k),Te.scissor(z.copy(Oe).multiplyScalar(H).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(T){Te.setScissorTest(Qe=T)},this.setOpaqueSort=function(T){Q=T},this.setTransparentSort=function(T){de=T},this.getClearColor=function(T){return T.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(T=!0,L=!0,B=!0){let k=0;if(T){let D=!1;if(I!==null){const ee=I.texture.format;D=ee===Jo||ee===Qo||ee===$o}if(D){const ee=I.texture.type,le=ee===Zn||ee===Li||ee===Jr||ee===pr||ee===Ko||ee===jo,me=Ae.getClearColor(),ve=Ae.getClearAlpha(),Ce=me.r,Ne=me.g,ge=me.b;le?(v[0]=Ce,v[1]=Ne,v[2]=ge,v[3]=ve,N.clearBufferuiv(N.COLOR,0,v)):(g[0]=Ce,g[1]=Ne,g[2]=ge,g[3]=ve,N.clearBufferiv(N.COLOR,0,g))}else k|=N.COLOR_BUFFER_BIT}L&&(k|=N.DEPTH_BUFFER_BIT),B&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),he.dispose(),qe.dispose(),Se.dispose(),M.dispose(),U.dispose(),q.dispose(),ot.dispose(),O.dispose(),ye.dispose(),V.dispose(),V.removeEventListener("sessionstart",gl),V.removeEventListener("sessionend",_l),xi.stop()};function Z(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const T=dt.autoReset,L=ue.enabled,B=ue.autoUpdate,k=ue.needsUpdate,D=ue.type;re(),dt.autoReset=T,ue.enabled=L,ue.autoUpdate=B,ue.needsUpdate=k,ue.type=D}function oe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function De(T){const L=T.target;L.removeEventListener("dispose",De),gt(L)}function gt(T){Nt(T),Se.remove(T)}function Nt(T){const L=Se.get(T).programs;L!==void 0&&(L.forEach(function(B){ye.releaseProgram(B)}),T.isShaderMaterial&&ye.releaseShaderCache(T))}this.renderBufferDirect=function(T,L,B,k,D,ee){L===null&&(L=mt);const le=D.isMesh&&D.matrixWorld.determinant()<0,me=ch(T,L,B,k,D);Te.setMaterial(k,le);let ve=B.index,Ce=1;if(k.wireframe===!0){if(ve=$.getWireframeAttribute(B),ve===void 0)return;Ce=2}const Ne=B.drawRange,ge=B.attributes.position;let Ke=Ne.start*Ce,lt=(Ne.start+Ne.count)*Ce;ee!==null&&(Ke=Math.max(Ke,ee.start*Ce),lt=Math.min(lt,(ee.start+ee.count)*Ce)),ve!==null?(Ke=Math.max(Ke,0),lt=Math.min(lt,ve.count)):ge!=null&&(Ke=Math.max(Ke,0),lt=Math.min(lt,ge.count));const ct=lt-Ke;if(ct<0||ct===1/0)return;ot.setup(D,k,me,B,ve);let qt,Ze=fe;if(ve!==null&&(qt=j.get(ve),Ze=Xe,Ze.setIndex(qt)),D.isMesh)k.wireframe===!0?(Te.setLineWidth(k.wireframeLinewidth*xt()),Ze.setMode(N.LINES)):Ze.setMode(N.TRIANGLES);else if(D.isLine){let be=k.linewidth;be===void 0&&(be=1),Te.setLineWidth(be*xt()),D.isLineSegments?Ze.setMode(N.LINES):D.isLineLoop?Ze.setMode(N.LINE_LOOP):Ze.setMode(N.LINE_STRIP)}else D.isPoints?Ze.setMode(N.POINTS):D.isSprite&&Ze.setMode(N.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Ze.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))Ze.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const be=D._multiDrawStarts,Un=D._multiDrawCounts,$e=D._multiDrawCount,pn=ve?j.get(ve).bytesPerElement:1,zi=Se.get(k).currentProgram.getUniforms();for(let Zt=0;Zt<$e;Zt++)zi.setValue(N,"_gl_DrawID",Zt),Ze.render(be[Zt]/pn,Un[Zt])}else if(D.isInstancedMesh)Ze.renderInstances(Ke,ct,D.count);else if(B.isInstancedBufferGeometry){const be=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Un=Math.min(B.instanceCount,be);Ze.renderInstances(Ke,ct,Un)}else Ze.render(Ke,ct)};function Je(T,L,B){T.transparent===!0&&T.side===xn&&T.forceSinglePass===!1?(T.side=jt,T.needsUpdate=!0,as(T,L,B),T.side=Pn,T.needsUpdate=!0,as(T,L,B),T.side=xn):as(T,L,B)}this.compile=function(T,L,B=null){B===null&&(B=T),f=qe.get(B),f.init(L),b.push(f),B.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),T!==B&&T.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),f.setupLights();const k=new Set;return T.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const ee=D.material;if(ee)if(Array.isArray(ee))for(let le=0;le<ee.length;le++){const me=ee[le];Je(me,B,D),k.add(me)}else Je(ee,B,D),k.add(ee)}),b.pop(),f=null,k},this.compileAsync=function(T,L,B=null){const k=this.compile(T,L,B);return new Promise(D=>{function ee(){if(k.forEach(function(le){Se.get(le).currentProgram.isReady()&&k.delete(le)}),k.size===0){D(T);return}setTimeout(ee,10)}Ge.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let fn=null;function Nn(T){fn&&fn(T)}function gl(){xi.stop()}function _l(){xi.start()}const xi=new kc;xi.setAnimationLoop(Nn),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(T){fn=T,V.setAnimationLoop(T),T===null?xi.stop():xi.start()},V.addEventListener("sessionstart",gl),V.addEventListener("sessionend",_l),this.render=function(T,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(L),L=V.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,L,I),f=qe.get(T,b.length),f.init(L),b.push(f),we.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Y.setFromProjectionMatrix(we),_e=this.localClippingEnabled,te=J.init(this.clippingPlanes,_e),m=he.get(T,y.length),m.init(),y.push(m),V.enabled===!0&&V.isPresenting===!0){const ee=_.xr.getDepthSensingMesh();ee!==null&&oa(ee,L,-1/0,_.sortObjects)}oa(T,L,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(Q,de),Ye=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Ye&&Ae.addToRenderList(m,T),this.info.render.frame++,te===!0&&J.beginShadows();const B=f.state.shadowsArray;ue.render(B,T,L),te===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,D=m.transmissive;if(f.setupLights(),L.isArrayCamera){const ee=L.cameras;if(D.length>0)for(let le=0,me=ee.length;le<me;le++){const ve=ee[le];yl(k,D,T,ve)}Ye&&Ae.render(T);for(let le=0,me=ee.length;le<me;le++){const ve=ee[le];xl(m,T,ve,ve.viewport)}}else D.length>0&&yl(k,D,T,L),Ye&&Ae.render(T),xl(m,T,L);I!==null&&(w.updateMultisampleRenderTarget(I),w.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(_,T,L),ot.resetDefaultState(),S=-1,x=null,b.pop(),b.length>0?(f=b[b.length-1],te===!0&&J.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function oa(T,L,B,k){if(T.visible===!1)return;if(T.layers.test(L.layers)){if(T.isGroup)B=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(L);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){k&&ke.setFromMatrixPosition(T.matrixWorld).applyMatrix4(we);const le=q.update(T),me=T.material;me.visible&&m.push(T,le,me,B,ke.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){const le=q.update(T),me=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ke.copy(T.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),ke.copy(le.boundingSphere.center)),ke.applyMatrix4(T.matrixWorld).applyMatrix4(we)),Array.isArray(me)){const ve=le.groups;for(let Ce=0,Ne=ve.length;Ce<Ne;Ce++){const ge=ve[Ce],Ke=me[ge.materialIndex];Ke&&Ke.visible&&m.push(T,le,Ke,B,ke.z,ge)}}else me.visible&&m.push(T,le,me,B,ke.z,null)}}const ee=T.children;for(let le=0,me=ee.length;le<me;le++)oa(ee[le],L,B,k)}function xl(T,L,B,k){const D=T.opaque,ee=T.transmissive,le=T.transparent;f.setupLightsView(B),te===!0&&J.setGlobalState(_.clippingPlanes,B),k&&Te.viewport(P.copy(k)),D.length>0&&ss(D,L,B),ee.length>0&&ss(ee,L,B),le.length>0&&ss(le,L,B),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function yl(T,L,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new Di(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?is:Zn,minFilter:qn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));const ee=f.state.transmissionRenderTarget[k.id],le=k.viewport||P;ee.setSize(le.z,le.w);const me=_.getRenderTarget();_.setRenderTarget(ee),_.getClearColor(G),W=_.getClearAlpha(),W<1&&_.setClearColor(16777215,.5),_.clear(),Ye&&Ae.render(B);const ve=_.toneMapping;_.toneMapping=gi;const Ce=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),te===!0&&J.setGlobalState(_.clippingPlanes,k),ss(T,B,k),w.updateMultisampleRenderTarget(ee),w.updateRenderTargetMipmap(ee),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let ge=0,Ke=L.length;ge<Ke;ge++){const lt=L[ge],ct=lt.object,qt=lt.geometry,Ze=lt.material,be=lt.group;if(Ze.side===xn&&ct.layers.test(k.layers)){const Un=Ze.side;Ze.side=jt,Ze.needsUpdate=!0,bl(ct,B,k,qt,Ze,be),Ze.side=Un,Ze.needsUpdate=!0,Ne=!0}}Ne===!0&&(w.updateMultisampleRenderTarget(ee),w.updateRenderTargetMipmap(ee))}_.setRenderTarget(me),_.setClearColor(G,W),Ce!==void 0&&(k.viewport=Ce),_.toneMapping=ve}function ss(T,L,B){const k=L.isScene===!0?L.overrideMaterial:null;for(let D=0,ee=T.length;D<ee;D++){const le=T[D],me=le.object,ve=le.geometry,Ce=k===null?le.material:k,Ne=le.group;me.layers.test(B.layers)&&bl(me,L,B,ve,Ce,Ne)}}function bl(T,L,B,k,D,ee){T.onBeforeRender(_,L,B,k,D,ee),T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),D.onBeforeRender(_,L,B,k,T,ee),D.transparent===!0&&D.side===xn&&D.forceSinglePass===!1?(D.side=jt,D.needsUpdate=!0,_.renderBufferDirect(B,L,k,D,T,ee),D.side=Pn,D.needsUpdate=!0,_.renderBufferDirect(B,L,k,D,T,ee),D.side=xn):_.renderBufferDirect(B,L,k,D,T,ee),T.onAfterRender(_,L,B,k,D,ee)}function as(T,L,B){L.isScene!==!0&&(L=mt);const k=Se.get(T),D=f.state.lights,ee=f.state.shadowsArray,le=D.state.version,me=ye.getParameters(T,D.state,ee,L,B),ve=ye.getProgramCacheKey(me);let Ce=k.programs;k.environment=T.isMeshStandardMaterial?L.environment:null,k.fog=L.fog,k.envMap=(T.isMeshStandardMaterial?U:M).get(T.envMap||k.environment),k.envMapRotation=k.environment!==null&&T.envMap===null?L.environmentRotation:T.envMapRotation,Ce===void 0&&(T.addEventListener("dispose",De),Ce=new Map,k.programs=Ce);let Ne=Ce.get(ve);if(Ne!==void 0){if(k.currentProgram===Ne&&k.lightsStateVersion===le)return Sl(T,me),Ne}else me.uniforms=ye.getUniforms(T),T.onBeforeCompile(me,_),Ne=ye.acquireProgram(me,ve),Ce.set(ve,Ne),k.uniforms=me.uniforms;const ge=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ge.clippingPlanes=J.uniform),Sl(T,me),k.needsLights=uh(T),k.lightsStateVersion=le,k.needsLights&&(ge.ambientLightColor.value=D.state.ambient,ge.lightProbe.value=D.state.probe,ge.directionalLights.value=D.state.directional,ge.directionalLightShadows.value=D.state.directionalShadow,ge.spotLights.value=D.state.spot,ge.spotLightShadows.value=D.state.spotShadow,ge.rectAreaLights.value=D.state.rectArea,ge.ltc_1.value=D.state.rectAreaLTC1,ge.ltc_2.value=D.state.rectAreaLTC2,ge.pointLights.value=D.state.point,ge.pointLightShadows.value=D.state.pointShadow,ge.hemisphereLights.value=D.state.hemi,ge.directionalShadowMap.value=D.state.directionalShadowMap,ge.directionalShadowMatrix.value=D.state.directionalShadowMatrix,ge.spotShadowMap.value=D.state.spotShadowMap,ge.spotLightMatrix.value=D.state.spotLightMatrix,ge.spotLightMap.value=D.state.spotLightMap,ge.pointShadowMap.value=D.state.pointShadowMap,ge.pointShadowMatrix.value=D.state.pointShadowMatrix),k.currentProgram=Ne,k.uniformsList=null,Ne}function Ml(T){if(T.uniformsList===null){const L=T.currentProgram.getUniforms();T.uniformsList=qs.seqWithValue(L.seq,T.uniforms)}return T.uniformsList}function Sl(T,L){const B=Se.get(T);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.batchingColor=L.batchingColor,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.instancingMorph=L.instancingMorph,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function ch(T,L,B,k,D){L.isScene!==!0&&(L=mt),w.resetTextureUnits();const ee=L.fog,le=k.isMeshStandardMaterial?L.environment:null,me=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Yt,ve=(k.isMeshStandardMaterial?U:M).get(k.envMap||le),Ce=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ne=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),ge=!!B.morphAttributes.position,Ke=!!B.morphAttributes.normal,lt=!!B.morphAttributes.color;let ct=gi;k.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ct=_.toneMapping);const qt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ze=qt!==void 0?qt.length:0,be=Se.get(k),Un=f.state.lights;if(te===!0&&(_e===!0||T!==x)){const nn=T===x&&k.id===S;J.setState(k,T,nn)}let $e=!1;k.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Un.state.version||be.outputColorSpace!==me||D.isBatchedMesh&&be.batching===!1||!D.isBatchedMesh&&be.batching===!0||D.isBatchedMesh&&be.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&be.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&be.instancing===!1||!D.isInstancedMesh&&be.instancing===!0||D.isSkinnedMesh&&be.skinning===!1||!D.isSkinnedMesh&&be.skinning===!0||D.isInstancedMesh&&be.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&be.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&be.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&be.instancingMorph===!1&&D.morphTexture!==null||be.envMap!==ve||k.fog===!0&&be.fog!==ee||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==J.numPlanes||be.numIntersection!==J.numIntersection)||be.vertexAlphas!==Ce||be.vertexTangents!==Ne||be.morphTargets!==ge||be.morphNormals!==Ke||be.morphColors!==lt||be.toneMapping!==ct||be.morphTargetsCount!==Ze)&&($e=!0):($e=!0,be.__version=k.version);let pn=be.currentProgram;$e===!0&&(pn=as(k,L,D));let zi=!1,Zt=!1,Rr=!1;const ht=pn.getUniforms(),Tn=be.uniforms;if(Te.useProgram(pn.program)&&(zi=!0,Zt=!0,Rr=!0),k.id!==S&&(S=k.id,Zt=!0),zi||x!==T){Te.buffers.depth.getReversed()?(se.copy(T.projectionMatrix),_u(se),xu(se),ht.setValue(N,"projectionMatrix",se)):ht.setValue(N,"projectionMatrix",T.projectionMatrix),ht.setValue(N,"viewMatrix",T.matrixWorldInverse);const Qn=ht.map.cameraPosition;Qn!==void 0&&Qn.setValue(N,Le.setFromMatrixPosition(T.matrixWorld)),We.logarithmicDepthBuffer&&ht.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ht.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,Zt=!0,Rr=!0)}if(D.isSkinnedMesh){ht.setOptional(N,D,"bindMatrix"),ht.setOptional(N,D,"bindMatrixInverse");const nn=D.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),ht.setValue(N,"boneTexture",nn.boneTexture,w))}D.isBatchedMesh&&(ht.setOptional(N,D,"batchingTexture"),ht.setValue(N,"batchingTexture",D._matricesTexture,w),ht.setOptional(N,D,"batchingIdTexture"),ht.setValue(N,"batchingIdTexture",D._indirectTexture,w),ht.setOptional(N,D,"batchingColorTexture"),D._colorsTexture!==null&&ht.setValue(N,"batchingColorTexture",D._colorsTexture,w));const Cr=B.morphAttributes;if((Cr.position!==void 0||Cr.normal!==void 0||Cr.color!==void 0)&&Re.update(D,B,pn),(Zt||be.receiveShadow!==D.receiveShadow)&&(be.receiveShadow=D.receiveShadow,ht.setValue(N,"receiveShadow",D.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Tn.envMap.value=ve,Tn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&L.environment!==null&&(Tn.envMapIntensity.value=L.environmentIntensity),Zt&&(ht.setValue(N,"toneMappingExposure",_.toneMappingExposure),be.needsLights&&hh(Tn,Rr),ee&&k.fog===!0&&ae.refreshFogUniforms(Tn,ee),ae.refreshMaterialUniforms(Tn,k,H,K,f.state.transmissionRenderTarget[T.id]),qs.upload(N,Ml(be),Tn,w)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(qs.upload(N,Ml(be),Tn,w),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ht.setValue(N,"center",D.center),ht.setValue(N,"modelViewMatrix",D.modelViewMatrix),ht.setValue(N,"normalMatrix",D.normalMatrix),ht.setValue(N,"modelMatrix",D.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const nn=k.uniformsGroups;for(let Qn=0,Jn=nn.length;Qn<Jn;Qn++){const El=nn[Qn];O.update(El,pn),O.bind(El,pn)}}return pn}function hh(T,L){T.ambientLightColor.needsUpdate=L,T.lightProbe.needsUpdate=L,T.directionalLights.needsUpdate=L,T.directionalLightShadows.needsUpdate=L,T.pointLights.needsUpdate=L,T.pointLightShadows.needsUpdate=L,T.spotLights.needsUpdate=L,T.spotLightShadows.needsUpdate=L,T.rectAreaLights.needsUpdate=L,T.hemisphereLights.needsUpdate=L}function uh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,L,B){Se.get(T.texture).__webglTexture=L,Se.get(T.depthTexture).__webglTexture=B;const k=Se.get(T);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,L){const B=Se.get(T);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(T,L=0,B=0){I=T,R=L,E=B;let k=!0,D=null,ee=!1,le=!1;if(T){const ve=Se.get(T);if(ve.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(N.FRAMEBUFFER,null),k=!1;else if(ve.__webglFramebuffer===void 0)w.setupRenderTarget(T);else if(ve.__hasExternalTextures)w.rebindTextures(T,Se.get(T.texture).__webglTexture,Se.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ge=T.depthTexture;if(ve.__boundDepthTexture!==ge){if(ge!==null&&Se.has(ge)&&(T.width!==ge.image.width||T.height!==ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(T)}}const Ce=T.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(le=!0);const Ne=Se.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ne[L])?D=Ne[L][B]:D=Ne[L],ee=!0):T.samples>0&&w.useMultisampledRTT(T)===!1?D=Se.get(T).__webglMultisampledFramebuffer:Array.isArray(Ne)?D=Ne[B]:D=Ne,P.copy(T.viewport),z.copy(T.scissor),F=T.scissorTest}else P.copy(pe).multiplyScalar(H).floor(),z.copy(Oe).multiplyScalar(H).floor(),F=Qe;if(Te.bindFramebuffer(N.FRAMEBUFFER,D)&&k&&Te.drawBuffers(T,D),Te.viewport(P),Te.scissor(z),Te.setScissorTest(F),ee){const ve=Se.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,ve.__webglTexture,B)}else if(le){const ve=Se.get(T.texture),Ce=L||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ve.__webglTexture,B||0,Ce)}S=-1},this.readRenderTargetPixels=function(T,L,B,k,D,ee,le){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Se.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&le!==void 0&&(me=me[le]),me){Te.bindFramebuffer(N.FRAMEBUFFER,me);try{const ve=T.texture,Ce=ve.format,Ne=ve.type;if(!We.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=T.width-k&&B>=0&&B<=T.height-D&&N.readPixels(L,B,k,D,Fe.convert(Ce),Fe.convert(Ne),ee)}finally{const ve=I!==null?Se.get(I).__webglFramebuffer:null;Te.bindFramebuffer(N.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(T,L,B,k,D,ee,le){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Se.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&le!==void 0&&(me=me[le]),me){const ve=T.texture,Ce=ve.format,Ne=ve.type;if(!We.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=T.width-k&&B>=0&&B<=T.height-D){Te.bindFramebuffer(N.FRAMEBUFFER,me);const ge=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ge),N.bufferData(N.PIXEL_PACK_BUFFER,ee.byteLength,N.STREAM_READ),N.readPixels(L,B,k,D,Fe.convert(Ce),Fe.convert(Ne),0);const Ke=I!==null?Se.get(I).__webglFramebuffer:null;Te.bindFramebuffer(N.FRAMEBUFFER,Ke);const lt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await gu(N,lt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ge),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ee),N.deleteBuffer(ge),N.deleteSync(lt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,L=null,B=0){T.isTexture!==!0&&(Wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,T=arguments[1]);const k=Math.pow(2,-B),D=Math.floor(T.image.width*k),ee=Math.floor(T.image.height*k),le=L!==null?L.x:0,me=L!==null?L.y:0;w.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,le,me,D,ee),Te.unbindTexture()},this.copyTextureToTexture=function(T,L,B=null,k=null,D=0){T.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1],L=arguments[2],D=arguments[3]||0,B=null);let ee,le,me,ve,Ce,Ne,ge,Ke,lt;const ct=T.isCompressedTexture?T.mipmaps[D]:T.image;B!==null?(ee=B.max.x-B.min.x,le=B.max.y-B.min.y,me=B.isBox3?B.max.z-B.min.z:1,ve=B.min.x,Ce=B.min.y,Ne=B.isBox3?B.min.z:0):(ee=ct.width,le=ct.height,me=ct.depth||1,ve=0,Ce=0,Ne=0),k!==null?(ge=k.x,Ke=k.y,lt=k.z):(ge=0,Ke=0,lt=0);const qt=Fe.convert(L.format),Ze=Fe.convert(L.type);let be;L.isData3DTexture?(w.setTexture3D(L,0),be=N.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(w.setTexture2DArray(L,0),be=N.TEXTURE_2D_ARRAY):(w.setTexture2D(L,0),be=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,L.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,L.unpackAlignment);const Un=N.getParameter(N.UNPACK_ROW_LENGTH),$e=N.getParameter(N.UNPACK_IMAGE_HEIGHT),pn=N.getParameter(N.UNPACK_SKIP_PIXELS),zi=N.getParameter(N.UNPACK_SKIP_ROWS),Zt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ct.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ct.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ve),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ce),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ne);const Rr=T.isDataArrayTexture||T.isData3DTexture,ht=L.isDataArrayTexture||L.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Tn=Se.get(T),Cr=Se.get(L),nn=Se.get(Tn.__renderTarget),Qn=Se.get(Cr.__renderTarget);Te.bindFramebuffer(N.READ_FRAMEBUFFER,nn.__webglFramebuffer),Te.bindFramebuffer(N.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let Jn=0;Jn<me;Jn++)Rr&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Se.get(T).__webglTexture,D,Ne+Jn),T.isDepthTexture?(ht&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Se.get(L).__webglTexture,D,lt+Jn),N.blitFramebuffer(ve,Ce,ee,le,ge,Ke,ee,le,N.DEPTH_BUFFER_BIT,N.NEAREST)):ht?N.copyTexSubImage3D(be,D,ge,Ke,lt+Jn,ve,Ce,ee,le):N.copyTexSubImage2D(be,D,ge,Ke,lt+Jn,ve,Ce,ee,le);Te.bindFramebuffer(N.READ_FRAMEBUFFER,null),Te.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ht?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(be,D,ge,Ke,lt,ee,le,me,qt,Ze,ct.data):L.isCompressedArrayTexture?N.compressedTexSubImage3D(be,D,ge,Ke,lt,ee,le,me,qt,ct.data):N.texSubImage3D(be,D,ge,Ke,lt,ee,le,me,qt,Ze,ct):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,D,ge,Ke,ee,le,qt,Ze,ct.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,D,ge,Ke,ct.width,ct.height,qt,ct.data):N.texSubImage2D(N.TEXTURE_2D,D,ge,Ke,ee,le,qt,Ze,ct);N.pixelStorei(N.UNPACK_ROW_LENGTH,Un),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,$e),N.pixelStorei(N.UNPACK_SKIP_PIXELS,pn),N.pixelStorei(N.UNPACK_SKIP_ROWS,zi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Zt),D===0&&L.generateMipmaps&&N.generateMipmap(be),Te.unbindTexture()},this.copyTextureToTexture3D=function(T,L,B=null,k=null,D=0){return T.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,T=arguments[2],L=arguments[3],D=arguments[4]||0),Wr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,L,B,k,D)},this.initRenderTarget=function(T){Se.get(T).__webglFramebuffer===void 0&&w.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?w.setTextureCube(T,0):T.isData3DTexture?w.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?w.setTexture2DArray(T,0):w.setTexture2D(T,0),Te.unbindTexture()},this.resetState=function(){R=0,E=0,I=null,Te.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}}class sl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Me(e),this.near=t,this.far=n}clone(){return new sl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Cv extends st{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dt,this.environmentIntensity=1,this.environmentRotation=new Dt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Pv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Uo,this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new A;class al{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new al(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const wd=new A,Id=new je,Rd=new je,Ov=new A,Cd=new Ie,ws=new A,Ua=new On,Pd=new Ie,Fa=new Sr;class Lv extends ne{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Rl,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new cn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ws),this.boundingBox.expandByPoint(ws)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ws),this.boundingSphere.expandByPoint(ws)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ua.copy(this.boundingSphere),Ua.applyMatrix4(i),e.ray.intersectsSphere(Ua)!==!1&&(Pd.copy(i).invert(),Fa.copy(e.ray).applyMatrix4(Pd),!(this.boundingBox!==null&&Fa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Rl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Hh?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Id.fromBufferAttribute(i.attributes.skinIndex,e),Rd.fromBufferAttribute(i.attributes.skinWeight,e),wd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Rd.getComponent(s);if(a!==0){const o=Id.getComponent(s);Cd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Ov.copy(wd).applyMatrix4(Cd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Yc extends st{constructor(){super(),this.isBone=!0,this.type="Bone"}}class qc extends Ct{constructor(e=null,t=1,n=1,i,s,a,o,l,d=Wt,c=Wt,h,u){super(null,a,o,l,d,c,i,s,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Od=new Ie,Dv=new Ie;class ol{constructor(e=[],t=[]){this.uuid=Sn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Dv;Od.multiplyMatrices(o,t[s]),Od.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ol(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new qc(t,e,e,on,Mn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Yc),this.bones.push(a),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class zo extends Xt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ji=new Ie,Ld=new Ie,Is=[],Dd=new cn,Nv=new Ie,Nr=new ne,Ur=new On;class Uv extends ne{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Nv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ji),Dd.copy(e.boundingBox).applyMatrix4(Ji),this.boundingBox.union(Dd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ji),Ur.copy(e.boundingSphere).applyMatrix4(Ji),this.boundingSphere.union(Ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Nr.geometry=this.geometry,Nr.material=this.material,Nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ur.copy(this.boundingSphere),Ur.applyMatrix4(n),e.ray.intersectsSphere(Ur)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ji),Ld.multiplyMatrices(n,Ji),Nr.matrixWorld=Ld,Nr.raycast(e,Is);for(let a=0,o=Is.length;a<o;a++){const l=Is[a];l.instanceId=s,l.object=this,t.push(l)}Is.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new qc(new Float32Array(i*this.count),i,this.count,Zo,Mn));const s=this.morphTexture.source.data.data;let a=0;for(let d=0;d<n.length;d++)a+=n[d];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Fi extends Cn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qs=new A,Js=new A,Nd=new Ie,Fr=new Sr,Rs=new On,za=new A,Ud=new A;class Jt extends st{constructor(e=new Mt,t=new Fi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Qs.fromBufferAttribute(t,i-1),Js.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Qs.distanceTo(Js);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(i),Rs.radius+=s,e.ray.intersectsSphere(Rs)===!1)return;Nd.copy(i).invert(),Fr.copy(e.ray).applyMatrix4(Nd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,d=this.isLineSegments?2:1,c=n.index,u=n.attributes.position;if(c!==null){const p=Math.max(0,a.start),v=Math.min(c.count,a.start+a.count);for(let g=p,m=v-1;g<m;g+=d){const f=c.getX(g),y=c.getX(g+1),b=Cs(this,e,Fr,l,f,y);b&&t.push(b)}if(this.isLineLoop){const g=c.getX(v-1),m=c.getX(p),f=Cs(this,e,Fr,l,g,m);f&&t.push(f)}}else{const p=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let g=p,m=v-1;g<m;g+=d){const f=Cs(this,e,Fr,l,g,g+1);f&&t.push(f)}if(this.isLineLoop){const g=Cs(this,e,Fr,l,v-1,p);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Cs(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(Qs.fromBufferAttribute(a,i),Js.fromBufferAttribute(a,s),t.distanceSqToSegment(Qs,Js,za,Ud)>n)return;za.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(za);if(!(l<e.near||l>e.far))return{distance:l,point:Ud.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Fd=new A,zd=new A;class ll extends Jt{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Fd.fromBufferAttribute(t,i),zd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Fd.distanceTo(zd);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fv extends Jt{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Kc extends Cn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bd=new Ie,Bo=new Sr,Ps=new On,Os=new A;class zv extends st{constructor(e=new Mt,t=new Kc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(i),Ps.radius+=s,e.ray.intersectsSphere(Ps)===!1)return;Bd.copy(i).invert(),Bo.copy(e.ray).applyMatrix4(Bd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,d=n.index,h=n.attributes.position;if(d!==null){const u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let v=u,g=p;v<g;v++){const m=d.getX(v);Os.fromBufferAttribute(h,m),kd(Os,m,l,i,e,t,this)}}else{const u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=u,g=p;v<g;v++)Os.fromBufferAttribute(h,v),kd(Os,v,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function kd(r,e,t,n,i,s,a){const o=Bo.distanceSqToPoint(r);if(o<t){const l=new A;Bo.closestPointToPoint(r,l),l.applyMatrix4(n);const d=i.ray.origin.distanceTo(l);if(d<i.near||d>i.far)return;s.push({distance:d,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Pt extends Mt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const d=this;i=Math.floor(i),s=Math.floor(s);const c=[],h=[],u=[],p=[];let v=0;const g=[],m=n/2;let f=0;y(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(c),this.setAttribute("position",new at(h,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(p,2));function y(){const _=new A,C=new A;let R=0;const E=(t-e)/n;for(let I=0;I<=s;I++){const S=[],x=I/s,P=x*(t-e)+e;for(let z=0;z<=i;z++){const F=z/i,G=F*l+o,W=Math.sin(G),X=Math.cos(G);C.x=P*W,C.y=-x*n+m,C.z=P*X,h.push(C.x,C.y,C.z),_.set(W,E,X).normalize(),u.push(_.x,_.y,_.z),p.push(F,1-x),S.push(v++)}g.push(S)}for(let I=0;I<i;I++)for(let S=0;S<s;S++){const x=g[S][I],P=g[S+1][I],z=g[S+1][I+1],F=g[S][I+1];(e>0||S!==0)&&(c.push(x,P,F),R+=3),(t>0||S!==s-1)&&(c.push(P,z,F),R+=3)}d.addGroup(f,R,0),f+=R}function b(_){const C=v,R=new Ee,E=new A;let I=0;const S=_===!0?e:t,x=_===!0?1:-1;for(let z=1;z<=i;z++)h.push(0,m*x,0),u.push(0,x,0),p.push(.5,.5),v++;const P=v;for(let z=0;z<=i;z++){const G=z/i*l+o,W=Math.cos(G),X=Math.sin(G);E.x=S*X,E.y=m*x,E.z=S*W,h.push(E.x,E.y,E.z),u.push(0,x,0),R.x=W*.5+.5,R.y=X*.5*x+.5,p.push(R.x,R.y),v++}for(let z=0;z<i;z++){const F=C+z,G=P+z;_===!0?c.push(G,G+1,F):c.push(G+1,G,F),I+=3}d.addGroup(f,I,_===!0?1:2),f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class dl extends Mt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),d(n),c(),this.setAttribute("position",new at(s,3)),this.setAttribute("normal",new at(s.slice(),3)),this.setAttribute("uv",new at(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const b=new A,_=new A,C=new A;for(let R=0;R<t.length;R+=3)p(t[R+0],b),p(t[R+1],_),p(t[R+2],C),l(b,_,C,y)}function l(y,b,_,C){const R=C+1,E=[];for(let I=0;I<=R;I++){E[I]=[];const S=y.clone().lerp(_,I/R),x=b.clone().lerp(_,I/R),P=R-I;for(let z=0;z<=P;z++)z===0&&I===R?E[I][z]=S:E[I][z]=S.clone().lerp(x,z/P)}for(let I=0;I<R;I++)for(let S=0;S<2*(R-I)-1;S++){const x=Math.floor(S/2);S%2===0?(u(E[I][x+1]),u(E[I+1][x]),u(E[I][x])):(u(E[I][x+1]),u(E[I+1][x+1]),u(E[I+1][x]))}}function d(y){const b=new A;for(let _=0;_<s.length;_+=3)b.x=s[_+0],b.y=s[_+1],b.z=s[_+2],b.normalize().multiplyScalar(y),s[_+0]=b.x,s[_+1]=b.y,s[_+2]=b.z}function c(){const y=new A;for(let b=0;b<s.length;b+=3){y.x=s[b+0],y.y=s[b+1],y.z=s[b+2];const _=m(y)/2/Math.PI+.5,C=f(y)/Math.PI+.5;a.push(_,1-C)}v(),h()}function h(){for(let y=0;y<a.length;y+=6){const b=a[y+0],_=a[y+2],C=a[y+4],R=Math.max(b,_,C),E=Math.min(b,_,C);R>.9&&E<.1&&(b<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),C<.2&&(a[y+4]+=1))}}function u(y){s.push(y.x,y.y,y.z)}function p(y,b){const _=y*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function v(){const y=new A,b=new A,_=new A,C=new A,R=new Ee,E=new Ee,I=new Ee;for(let S=0,x=0;S<s.length;S+=9,x+=6){y.set(s[S+0],s[S+1],s[S+2]),b.set(s[S+3],s[S+4],s[S+5]),_.set(s[S+6],s[S+7],s[S+8]),R.set(a[x+0],a[x+1]),E.set(a[x+2],a[x+3]),I.set(a[x+4],a[x+5]),C.copy(y).add(b).add(_).divideScalar(3);const P=m(C);g(R,x+0,y,P),g(E,x+2,b,P),g(I,x+4,_,P)}}function g(y,b,_,C){C<0&&y.x===1&&(a[b]=y.x-1),_.x===0&&_.z===0&&(a[b]=C/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.vertices,e.indices,e.radius,e.details)}}class Oi extends dl{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Oi(e.radius,e.detail)}}class _r extends Mt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let d=0;const c=[],h=new A,u=new A,p=[],v=[],g=[],m=[];for(let f=0;f<=n;f++){const y=[],b=f/n;let _=0;f===0&&a===0?_=.5/t:f===n&&l===Math.PI&&(_=-.5/t);for(let C=0;C<=t;C++){const R=C/t;h.x=-e*Math.cos(i+R*s)*Math.sin(a+b*o),h.y=e*Math.cos(a+b*o),h.z=e*Math.sin(i+R*s)*Math.sin(a+b*o),v.push(h.x,h.y,h.z),u.copy(h).normalize(),g.push(u.x,u.y,u.z),m.push(R+_,1-b),y.push(d++)}c.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){const b=c[f][y+1],_=c[f][y],C=c[f+1][y],R=c[f+1][y+1];(f!==0||a>0)&&p.push(b,_,R),(f!==n-1||l<Math.PI)&&p.push(_,C,R)}this.setIndex(p),this.setAttribute("position",new at(v,3)),this.setAttribute("normal",new at(g,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fi extends Mt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],d=[],c=new A,h=new A,u=new A;for(let p=0;p<=n;p++)for(let v=0;v<=i;v++){const g=v/i*s,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(g),h.y=(e+t*Math.cos(m))*Math.sin(g),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),c.x=e*Math.cos(g),c.y=e*Math.sin(g),u.subVectors(h,c).normalize(),l.push(u.x,u.y,u.z),d.push(v/i),d.push(p/n)}for(let p=1;p<=n;p++)for(let v=1;v<=i;v++){const g=(i+1)*p+v-1,m=(i+1)*(p-1)+v-1,f=(i+1)*(p-1)+v,y=(i+1)*p+v;a.push(g,m,y),a.push(m,f,y)}this.setIndex(a),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Yn extends Cn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rc,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ln extends Yn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Bv extends Fi{static get type(){return"LineDashedMaterial"}constructor(e){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Ls(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function kv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Hv(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Hd(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function jc(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class rs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Vv extends rs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cl,endingEnd:Cl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pl:s=e,o=2*t-n;break;case Ol:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Pl:a=e,l=2*n-t;break;case Ol:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const d=(n-t)*.5,c=this.valueSize;this._weightPrev=d/(t-o),this._weightNext=d/(l-n),this._offsetPrev=s*c,this._offsetNext=a*c}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,d=l-o,c=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,p=this._weightNext,v=(n-t)/(i-t),g=v*v,m=g*v,f=-u*m+2*u*g-u*v,y=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*v+1,b=(-1-p)*m+(1.5+p)*g+.5*v,_=p*m-p*g;for(let C=0;C!==o;++C)s[C]=f*a[c+C]+y*a[d+C]+b*a[l+C]+_*a[h+C];return s}}class Gv extends rs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,d=l-o,c=(n-t)/(i-t),h=1-c;for(let u=0;u!==o;++u)s[u]=a[d+u]*h+a[l+u]*c;return s}}class Wv extends rs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Dn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ls(t,this.TimeBufferType),this.values=Ls(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ls(e.times,Array),values:Ls(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case es:t=this.InterpolantFactoryMethodDiscrete;break;case ts:t=this.InterpolantFactoryMethodLinear;break;case la:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return es;case this.InterpolantFactoryMethodLinear:return ts;case this.InterpolantFactoryMethodSmooth:return la}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&kv(i))for(let o=0,l=i.length;o!==l;++o){const d=i[o];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===la,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const d=e[o],c=e[o+1];if(d!==c&&(o!==1||d!==e[0]))if(i)l=!0;else{const h=o*n,u=h-n,p=h+n;for(let v=0;v!==n;++v){const g=t[h+v];if(g!==t[u+v]||g!==t[p+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,u=a*n;for(let p=0;p!==n;++p)t[u+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,d=0;d!==n;++d)t[l+d]=t[o+d];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=ts;class Tr extends Dn{constructor(e,t,n){super(e,t,n)}}Tr.prototype.ValueTypeName="bool";Tr.prototype.ValueBufferType=Array;Tr.prototype.DefaultInterpolation=es;Tr.prototype.InterpolantFactoryMethodLinear=void 0;Tr.prototype.InterpolantFactoryMethodSmooth=void 0;class Zc extends Dn{}Zc.prototype.ValueTypeName="color";class xr extends Dn{}xr.prototype.ValueTypeName="number";class Xv extends rs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let d=e*o;for(let c=d+o;d!==c;d+=4)Be.slerpFlat(s,0,a,d-o,a,d,l);return s}}class yr extends Dn{InterpolantFactoryMethodLinear(e){return new Xv(this.times,this.values,this.getValueSize(),e)}}yr.prototype.ValueTypeName="quaternion";yr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ar extends Dn{constructor(e,t,n){super(e,t,n)}}Ar.prototype.ValueTypeName="string";Ar.prototype.ValueBufferType=Array;Ar.prototype.DefaultInterpolation=es;Ar.prototype.InterpolantFactoryMethodLinear=void 0;Ar.prototype.InterpolantFactoryMethodSmooth=void 0;class br extends Dn{}br.prototype.ValueTypeName="vector";class Yv{constructor(e="",t=-1,n=[],i=Vh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Sn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Kv(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Dn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],d=[];l.push((o+s-1)%s,o,(o+1)%s),d.push(0,1,0);const c=Hv(l);l=Hd(l,1,c),d=Hd(d,1,c),!i&&l[0]===0&&(l.push(s),d.push(d[0])),a.push(new xr(".morphTargetInfluences["+t[o].name+"]",l,d).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const d=e[o],c=d.name.match(s);if(c&&c.length>1){const h=c[1];let u=i[h];u||(i[h]=u=[]),u.push(d)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,p,v,g){if(p.length!==0){const m=[],f=[];jc(p,m,f,v),m.length!==0&&g.push(new h(u,m,f))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const d=e.hierarchy||[];for(let h=0;h<d.length;h++){const u=d[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const p={};let v;for(v=0;v<u.length;v++)if(u[v].morphTargets)for(let g=0;g<u[v].morphTargets.length;g++)p[u[v].morphTargets[g]]=-1;for(const g in p){const m=[],f=[];for(let y=0;y!==u[v].morphTargets.length;++y){const b=u[v];m.push(b.time),f.push(b.morphTarget===g?1:0)}i.push(new xr(".morphTargetInfluence["+g+"]",m,f))}l=p.length*a}else{const p=".bones["+t[h].name+"]";n(br,p+".position",u,"pos",i),n(yr,p+".quaternion",u,"rot",i),n(br,p+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function qv(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xr;case"vector":case"vector2":case"vector3":case"vector4":return br;case"color":return Zc;case"quaternion":return yr;case"bool":case"boolean":return Tr;case"string":return Ar}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Kv(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=qv(r.type);if(r.times===void 0){const t=[],n=[];jc(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const mi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class jv{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){o++,s===!1&&i.onStart!==void 0&&i.onStart(c,a,o),s=!0},this.itemEnd=function(c){a++,i.onProgress!==void 0&&i.onProgress(c,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,h){return d.push(c,h),this},this.removeHandler=function(c){const h=d.indexOf(c);return h!==-1&&d.splice(h,2),this},this.getHandler=function(c){for(let h=0,u=d.length;h<u;h+=2){const p=d[h],v=d[h+1];if(p.global&&(p.lastIndex=0),p.test(c))return v}return null}}}const Zv=new jv;class wr{constructor(e){this.manager=e!==void 0?e:Zv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}wr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vn={};class $v extends Error{constructor(e,t){super(e),this.response=t}}class $c extends wr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=mi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Vn[e]!==void 0){Vn[e].push({onLoad:t,onProgress:n,onError:i});return}Vn[e]=[],Vn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const c=Vn[e],h=d.body.getReader(),u=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),p=u?parseInt(u):0,v=p!==0;let g=0;const m=new ReadableStream({start(f){y();function y(){h.read().then(({done:b,value:_})=>{if(b)f.close();else{g+=_.byteLength;const C=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:p});for(let R=0,E=c.length;R<E;R++){const I=c[R];I.onProgress&&I.onProgress(C)}f.enqueue(_),y()}},b=>{f.error(b)})}}});return new Response(m)}else throw new $v(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(l){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(c=>new DOMParser().parseFromString(c,o));case"json":return d.json();default:if(o===void 0)return d.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(u);return d.arrayBuffer().then(v=>p.decode(v))}}}).then(d=>{mi.add(e,d);const c=Vn[e];delete Vn[e];for(let h=0,u=c.length;h<u;h++){const p=c[h];p.onLoad&&p.onLoad(d)}}).catch(d=>{const c=Vn[e];if(c===void 0)throw this.manager.itemError(e),d;delete Vn[e];for(let h=0,u=c.length;h<u;h++){const p=c[h];p.onError&&p.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Qv extends wr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=mi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=ns("img");function l(){c(),mi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function d(h){c(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",d,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Jv extends wr{constructor(e){super(e)}load(e,t,n,i){const s=new Ct,a=new Qv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ra extends st{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class eg extends ra{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ba=new Ie,Vd=new A,Gd=new A;class cl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nl,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Vd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vd),Gd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gd),t.updateMatrixWorld(),Ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ba),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class tg extends cl{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=vr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ng extends ra{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new tg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Wd=new Ie,zr=new A,ka=new A;class ig extends cl{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ee(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),zr.setFromMatrixPosition(e.matrixWorld),n.position.copy(zr),ka.copy(n.position),ka.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ka),n.updateMatrixWorld(),i.makeTranslation(-zr.x,-zr.y,-zr.z),Wd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wd)}}class rg extends ra{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ig}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class sg extends cl{constructor(){super(new il(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hl extends ra{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.shadow=new sg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Qr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ag extends wr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=mi.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(d=>{t&&t(d),s.manager.itemEnd(e)}).catch(d=>{i&&i(d)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(d){return mi.add(e,d),t&&t(d),s.manager.itemEnd(e),d}).catch(function(d){i&&i(d),mi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});mi.add(e,l),s.manager.itemStart(e)}}const ul="\\[\\]\\.:\\/",og=new RegExp("["+ul+"]","g"),fl="[^"+ul+"]",lg="[^"+ul.replace("\\.","")+"]",dg=/((?:WC+[\/:])*)/.source.replace("WC",fl),cg=/(WCOD+)?/.source.replace("WCOD",lg),hg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fl),ug=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fl),fg=new RegExp("^"+dg+cg+hg+ug+"$"),pg=["material","materials","bones","map"];class mg{constructor(e,t,n){const i=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tt{constructor(e,t,n){this.path=t,this.parsedPath=n||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,n):new tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(og,"")}static parseTrackName(e){const t=fg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);pg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let d=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===d){d=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const a=e[i];if(a===void 0){const d=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=mg;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Xd=new Ie;class Qc{constructor(e,t,n=0,i=1/0){this.ray=new Sr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new tl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Xd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xd),this}intersectObject(e,t=!0,n=[]){return ko(e,this,n,t),n.sort(Yd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ko(e[i],this,n,t);return n.sort(Yd),n}}function Yd(r,e){return r.distance-e.distance}function ko(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)ko(s[a],e,t,!0)}}class qd{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ai=new A,Ds=new Ie,Ha=new Ie;class vg extends ll{constructor(e){const t=Jc(e),n=new Mt,i=[],s=[],a=new Me(0,0,1),o=new Me(0,1,0);for(let d=0;d<t.length;d++){const c=t[d];c.parent&&c.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}n.setAttribute("position",new at(i,3)),n.setAttribute("color",new at(s,3));const l=new Fi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Ha.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&(Ds.multiplyMatrices(Ha,o.matrixWorld),ai.setFromMatrixPosition(Ds),i.setXYZ(a,ai.x,ai.y,ai.z),Ds.multiplyMatrices(Ha,o.parent.matrixWorld),ai.setFromMatrixPosition(Ds),i.setXYZ(a+1,ai.x,ai.y,ai.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Jc(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,Jc(r.children[t]));return e}class gg extends ll{constructor(e=10,t=10,n=4473924,i=8947848){n=new Me(n),i=new Me(i);const s=t/2,a=e/t,o=e/2,l=[],d=[];for(let u=0,p=0,v=-o;u<=t;u++,v+=a){l.push(-o,0,v,o,0,v),l.push(v,0,-o,v,0,o);const g=u===s?n:i;g.toArray(d,p),p+=3,g.toArray(d,p),p+=3,g.toArray(d,p),p+=3,g.toArray(d,p),p+=3}const c=new Mt;c.setAttribute("position",new at(l,3)),c.setAttribute("color",new at(d,3));const h=new Fi({vertexColors:!0,toneMapped:!1});super(c,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class eh extends Ni{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yo);const Kd={type:"change"},pl={type:"start"},th={type:"end"},Ns=new Sr,jd=new hi,_g=Math.cos(70*ft.DEG2RAD),St=new A,Kt=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Va=1e-6;class xg extends eh{constructor(e,t=null){super(e,t),this.state=it.NONE,this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:sr.ROTATE,MIDDLE:sr.DOLLY,RIGHT:sr.PAN},this.touches={ONE:nr.ROTATE,TWO:nr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new Be,this._lastTargetPosition=new A,this._quat=new Be().setFromUnitVectors(e.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qd,this._sphericalDelta=new qd,this._scale=1,this._panOffset=new A,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new A,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=bg.bind(this),this._onPointerDown=yg.bind(this),this._onPointerUp=Mg.bind(this),this._onContextMenu=Rg.bind(this),this._onMouseWheel=Tg.bind(this),this._onKeyDown=Ag.bind(this),this._onTouchStart=wg.bind(this),this._onTouchMove=Ig.bind(this),this._onMouseDown=Sg.bind(this),this._onMouseMove=Eg.bind(this),this._interceptControlDown=Cg.bind(this),this._interceptControlUp=Pg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Kd),this.update(),this.state=it.NONE}update(e=null){const t=this.object.position;St.copy(t).sub(this.target),St.applyQuaternion(this._quat),this._spherical.setFromVector3(St),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Kt:n>Math.PI&&(n-=Kt),i<-Math.PI?i+=Kt:i>Math.PI&&(i-=Kt),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(St.setFromSpherical(this._spherical),St.applyQuaternion(this._quatInverse),t.copy(this.target).add(St),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=St.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new A(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const d=new A(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(o),this.object.updateMatrixWorld(),a=St.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ns.origin.copy(this.object.position),Ns.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ns.direction))<_g?this.object.lookAt(this.target):(jd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ns.intersectPlane(jd,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Va||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Va||this._lastTargetPosition.distanceToSquared(this.target)>Va?(this.dispatchEvent(Kd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Kt/60*this.autoRotateSpeed*e:Kt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){St.setFromMatrixColumn(t,0),St.multiplyScalar(-e),this._panOffset.add(St)}_panUp(e,t){this.screenSpacePanning===!0?St.setFromMatrixColumn(t,1):(St.setFromMatrixColumn(t,0),St.crossVectors(this.object.up,St)),St.multiplyScalar(e),this._panOffset.add(St)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;St.copy(i).sub(this.target);let s=St.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ee,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function yg(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function bg(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Mg(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(th),this.state=it.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Sg(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case sr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=it.DOLLY;break;case sr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=it.ROTATE}break;case sr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(pl)}function Eg(r){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function Tg(r){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(r.preventDefault(),this.dispatchEvent(pl),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(th))}function Ag(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function wg(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case nr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=it.TOUCH_ROTATE;break;case nr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case nr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=it.TOUCH_DOLLY_PAN;break;case nr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(pl)}function Ig(r){switch(this._trackPointer(r),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=it.NONE}}function Rg(r){this.enabled!==!1&&r.preventDefault()}function Cg(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Pg(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ai=new Qc,zt=new A,oi=new A,pt=new Be,Zd={X:new A(1,0,0),Y:new A(0,1,0),Z:new A(0,0,1)},Ga={type:"change"},$d={type:"mouseDown",mode:null},Qd={type:"mouseUp",mode:null},Jd={type:"objectChange"};class Og extends eh{constructor(e,t=null){super(void 0,t);const n=new zg(this);this._root=n;const i=new Bg;this._gizmo=i,n.add(i);const s=new kg;this._plane=s,n.add(s);const a=this;function o(b,_){let C=_;Object.defineProperty(a,b,{get:function(){return C!==void 0?C:_},set:function(R){C!==R&&(C=R,s[b]=R,i[b]=R,a.dispatchEvent({type:b+"-changed",value:R}),a.dispatchEvent(Ga))}}),a[b]=_,s[b]=_,i[b]=_}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0),o("minX",-1/0),o("maxX",1/0),o("minY",-1/0),o("maxY",1/0),o("minZ",-1/0),o("maxZ",1/0);const l=new A,d=new A,c=new Be,h=new Be,u=new A,p=new Be,v=new A,g=new A,m=new A,f=0,y=new A;o("worldPosition",l),o("worldPositionStart",d),o("worldQuaternion",c),o("worldQuaternionStart",h),o("cameraPosition",u),o("cameraQuaternion",p),o("pointStart",v),o("pointEnd",g),o("rotationAxis",m),o("rotationAngle",f),o("eye",y),this._offset=new A,this._startNorm=new A,this._endNorm=new A,this._cameraScale=new A,this._parentPosition=new A,this._parentQuaternion=new Be,this._parentQuaternionInv=new Be,this._parentScale=new A,this._worldScaleStart=new A,this._worldQuaternionInv=new Be,this._worldScale=new A,this._positionStart=new A,this._quaternionStart=new Be,this._scaleStart=new A,this._getPointer=Lg.bind(this),this._onPointerDown=Ng.bind(this),this._onPointerHover=Dg.bind(this),this._onPointerMove=Ug.bind(this),this._onPointerUp=Fg.bind(this),t!==null&&this.connect()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&Ai.setFromCamera(e,this.camera);const t=Wa(this._gizmo.picker[this.mode],Ai);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&Ai.setFromCamera(e,this.camera);const t=Wa(this._plane,Ai,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,$d.mode=this.mode,this.dispatchEvent($d)}}pointerMove(e){const t=this.axis,n=this.mode,i=this.object;let s=this.space;if(n==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),i===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&Ai.setFromCamera(e,this.camera);const a=Wa(this._plane,Ai,!0);if(a){if(this.pointEnd.copy(a.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),i.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(i.position.applyQuaternion(pt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.position.applyQuaternion(this._quaternionStart)),s==="world"&&(i.parent&&i.position.add(zt.setFromMatrixPosition(i.parent.matrixWorld)),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.parent&&i.position.sub(zt.setFromMatrixPosition(i.parent.matrixWorld)))),i.position.x=Math.max(this.minX,Math.min(this.maxX,i.position.x)),i.position.y=Math.max(this.minY,Math.min(this.maxY,i.position.y)),i.position.z=Math.max(this.minZ,Math.min(this.maxZ,i.position.z));else if(n==="scale"){if(t.search("XYZ")!==-1){let o=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(o*=-1),oi.set(o,o,o)}else zt.copy(this.pointStart),oi.copy(this.pointEnd),zt.applyQuaternion(this._worldQuaternionInv),oi.applyQuaternion(this._worldQuaternionInv),oi.divide(zt),t.search("X")===-1&&(oi.x=1),t.search("Y")===-1&&(oi.y=1),t.search("Z")===-1&&(oi.z=1);i.scale.copy(this._scaleStart).multiply(oi),this.scaleSnap&&(t.search("X")!==-1&&(i.scale.x=Math.round(i.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(i.scale.y=Math.round(i.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(i.scale.z=Math.round(i.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const o=20/this.worldPosition.distanceTo(zt.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(zt.copy(this.rotationAxis).cross(this.eye))*o):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Zd[t]),zt.copy(Zd[t]),s==="local"&&zt.applyQuaternion(this.worldQuaternion),zt.cross(this.eye),zt.length()===0?l=!0:this.rotationAngle=this._offset.dot(zt.normalize())*o),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(i.quaternion.copy(this._quaternionStart),i.quaternion.multiply(pt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),i.quaternion.copy(pt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),i.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Ga),this.dispatchEvent(Jd)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Qd.mode=this.mode,this.dispatchEvent(Qd)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Ga),this.dispatchEvent(Jd),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Ai}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function Lg(r){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:r.button};{const e=this.domElement.getBoundingClientRect();return{x:(r.clientX-e.left)/e.width*2-1,y:-(r.clientY-e.top)/e.height*2+1,button:r.button}}}function Dg(r){if(this.enabled)switch(r.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(r));break}}function Ng(r){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(r)),this.pointerDown(this._getPointer(r)))}function Ug(r){this.enabled&&this.pointerMove(this._getPointer(r))}function Fg(r){this.enabled&&(this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(r)))}function Wa(r,e,t){const n=e.intersectObject(r,!0);for(let i=0;i<n.length;i++)if(n[i].object.visible||t)return n[i];return!1}const Us=new Dt,rt=new A(0,1,0),ec=new A(0,0,0),tc=new Ie,Fs=new Be,Ks=new Be,An=new A,nc=new Ie,Yr=new A(1,0,0),Ri=new A(0,1,0),qr=new A(0,0,1),zs=new A,Br=new A,kr=new A;class zg extends st{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){const t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}}class Bg extends st{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new ln({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Fi({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const i=t.clone();i.opacity=.5;const s=e.clone();s.color.setHex(16711680);const a=e.clone();a.color.setHex(65280);const o=e.clone();o.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const d=e.clone();d.color.setHex(65280),d.opacity=.5;const c=e.clone();c.color.setHex(255),c.opacity=.5;const h=e.clone();h.opacity=.25;const u=e.clone();u.color.setHex(16776960),u.opacity=.25,e.clone().color.setHex(16776960);const v=e.clone();v.color.setHex(7895160);const g=new Pt(0,.04,.1,12);g.translate(0,.05,0);const m=new ut(.08,.08,.08);m.translate(0,.04,0);const f=new Mt;f.setAttribute("position",new at([0,0,0,1,0,0],3));const y=new Pt(.0075,.0075,.5,3);y.translate(0,.25,0);function b(W,X){const K=new fi(W,.0075,3,64,X*Math.PI*2);return K.rotateY(Math.PI/2),K.rotateX(Math.PI/2),K}function _(){const W=new Mt;return W.setAttribute("position",new at([0,0,0,1,1,1],3)),W}const C={X:[[new ne(g,s),[.5,0,0],[0,0,-Math.PI/2]],[new ne(g,s),[-.5,0,0],[0,0,Math.PI/2]],[new ne(y,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ne(g,a),[0,.5,0]],[new ne(g,a),[0,-.5,0],[Math.PI,0,0]],[new ne(y,a)]],Z:[[new ne(g,o),[0,0,.5],[Math.PI/2,0,0]],[new ne(g,o),[0,0,-.5],[-Math.PI/2,0,0]],[new ne(y,o),null,[Math.PI/2,0,0]]],XYZ:[[new ne(new Oi(.1,0),h.clone()),[0,0,0]]],XY:[[new ne(new ut(.15,.15,.01),c.clone()),[.15,.15,0]]],YZ:[[new ne(new ut(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ne(new ut(.15,.15,.01),d.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},R={X:[[new ne(new Pt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ne(new Pt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ne(new Pt(.2,0,.6,4),n),[0,.3,0]],[new ne(new Pt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ne(new Pt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ne(new Pt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ne(new Oi(.2,0),n)]],XY:[[new ne(new ut(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ne(new ut(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ne(new ut(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},E={START:[[new ne(new Oi(.01,2),i),null,null,null,"helper"]],END:[[new ne(new Oi(.01,2),i),null,null,null,"helper"]],DELTA:[[new Jt(_(),i),null,null,null,"helper"]],X:[[new Jt(f,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Jt(f,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Jt(f,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},I={XYZE:[[new ne(b(.5,1),v),null,[0,Math.PI/2,0]]],X:[[new ne(b(.5,.5),s)]],Y:[[new ne(b(.5,.5),a),null,[0,0,-Math.PI/2]]],Z:[[new ne(b(.5,.5),o),null,[0,Math.PI/2,0]]],E:[[new ne(b(.75,1),u),null,[0,Math.PI/2,0]]]},S={AXIS:[[new Jt(f,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},x={XYZE:[[new ne(new _r(.25,10,8),n)]],X:[[new ne(new fi(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ne(new fi(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ne(new fi(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ne(new fi(.75,.1,2,24),n)]]},P={X:[[new ne(m,s),[.5,0,0],[0,0,-Math.PI/2]],[new ne(y,s),[0,0,0],[0,0,-Math.PI/2]],[new ne(m,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ne(m,a),[0,.5,0]],[new ne(y,a)],[new ne(m,a),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ne(m,o),[0,0,.5],[Math.PI/2,0,0]],[new ne(y,o),[0,0,0],[Math.PI/2,0,0]],[new ne(m,o),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ne(new ut(.15,.15,.01),c),[.15,.15,0]]],YZ:[[new ne(new ut(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ne(new ut(.15,.15,.01),d),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ne(new ut(.1,.1,.1),h.clone())]]},z={X:[[new ne(new Pt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new ne(new Pt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ne(new Pt(.2,0,.6,4),n),[0,.3,0]],[new ne(new Pt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ne(new Pt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new ne(new Pt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ne(new ut(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new ne(new ut(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ne(new ut(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ne(new ut(.2,.2,.2),n),[0,0,0]]]},F={X:[[new Jt(f,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Jt(f,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Jt(f,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function G(W){const X=new st;for(const K in W)for(let H=W[K].length;H--;){const Q=W[K][H][0].clone(),de=W[K][H][1],pe=W[K][H][2],Oe=W[K][H][3],Qe=W[K][H][4];Q.name=K,Q.tag=Qe,de&&Q.position.set(de[0],de[1],de[2]),pe&&Q.rotation.set(pe[0],pe[1],pe[2]),Oe&&Q.scale.set(Oe[0],Oe[1],Oe[2]),Q.updateMatrix();const Y=Q.geometry.clone();Y.applyMatrix4(Q.matrix),Q.geometry=Y,Q.renderOrder=1/0,Q.position.set(0,0,0),Q.rotation.set(0,0,0),Q.scale.set(1,1,1),X.add(Q)}return X}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=G(C)),this.add(this.gizmo.rotate=G(I)),this.add(this.gizmo.scale=G(P)),this.add(this.picker.translate=G(R)),this.add(this.picker.rotate=G(x)),this.add(this.picker.scale=G(z)),this.add(this.helper.translate=G(E)),this.add(this.helper.rotate=G(S)),this.add(this.helper.scale=G(F)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Ks;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let i=[];i=i.concat(this.picker[this.mode].children),i=i.concat(this.gizmo[this.mode].children),i=i.concat(this.helper[this.mode].children);for(let s=0;s<i.length;s++){const a=i[s];a.visible=!0,a.rotation.set(0,0,0),a.position.copy(this.worldPosition);let o;if(this.camera.isOrthographicCamera?o=(this.camera.top-this.camera.bottom)/this.camera.zoom:o=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),a.scale.set(1,1,1).multiplyScalar(o*this.size/4),a.tag==="helper"){a.visible=!1,a.name==="AXIS"?(a.visible=!!this.axis,this.axis==="X"&&(pt.setFromEuler(Us.set(0,0,0)),a.quaternion.copy(n).multiply(pt),Math.abs(rt.copy(Yr).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Y"&&(pt.setFromEuler(Us.set(0,0,Math.PI/2)),a.quaternion.copy(n).multiply(pt),Math.abs(rt.copy(Ri).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Z"&&(pt.setFromEuler(Us.set(0,Math.PI/2,0)),a.quaternion.copy(n).multiply(pt),Math.abs(rt.copy(qr).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="XYZE"&&(pt.setFromEuler(Us.set(0,Math.PI/2,0)),rt.copy(this.rotationAxis),a.quaternion.setFromRotationMatrix(tc.lookAt(ec,rt,Ri)),a.quaternion.multiply(pt),a.visible=this.dragging),this.axis==="E"&&(a.visible=!1)):a.name==="START"?(a.position.copy(this.worldPositionStart),a.visible=this.dragging):a.name==="END"?(a.position.copy(this.worldPosition),a.visible=this.dragging):a.name==="DELTA"?(a.position.copy(this.worldPositionStart),a.quaternion.copy(this.worldQuaternionStart),zt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),zt.applyQuaternion(this.worldQuaternionStart.clone().invert()),a.scale.copy(zt),a.visible=this.dragging):(a.quaternion.copy(n),this.dragging?a.position.copy(this.worldPositionStart):a.position.copy(this.worldPosition),this.axis&&(a.visible=this.axis.search(a.name)!==-1));continue}a.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(a.name==="X"&&Math.abs(rt.copy(Yr).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Y"&&Math.abs(rt.copy(Ri).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Z"&&Math.abs(rt.copy(qr).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XY"&&Math.abs(rt.copy(qr).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="YZ"&&Math.abs(rt.copy(Yr).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XZ"&&Math.abs(rt.copy(Ri).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1)):this.mode==="rotate"&&(Fs.copy(n),rt.copy(this.eye).applyQuaternion(pt.copy(n).invert()),a.name.search("E")!==-1&&a.quaternion.setFromRotationMatrix(tc.lookAt(this.eye,ec,Ri)),a.name==="X"&&(pt.setFromAxisAngle(Yr,Math.atan2(-rt.y,rt.z)),pt.multiplyQuaternions(Fs,pt),a.quaternion.copy(pt)),a.name==="Y"&&(pt.setFromAxisAngle(Ri,Math.atan2(rt.x,rt.z)),pt.multiplyQuaternions(Fs,pt),a.quaternion.copy(pt)),a.name==="Z"&&(pt.setFromAxisAngle(qr,Math.atan2(rt.y,rt.x)),pt.multiplyQuaternions(Fs,pt),a.quaternion.copy(pt))),a.visible=a.visible&&(a.name.indexOf("X")===-1||this.showX),a.visible=a.visible&&(a.name.indexOf("Y")===-1||this.showY),a.visible=a.visible&&(a.name.indexOf("Z")===-1||this.showZ),a.visible=a.visible&&(a.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),a.material._color=a.material._color||a.material.color.clone(),a.material._opacity=a.material._opacity||a.material.opacity,a.material.color.copy(a.material._color),a.material.opacity=a.material._opacity,this.enabled&&this.axis&&(a.name===this.axis||this.axis.split("").some(function(l){return a.name===l}))&&(a.material.color.setHex(16776960),a.material.opacity=1)}super.updateMatrixWorld(e)}}class kg extends ne{constructor(){super(new Ui(1e5,1e5,2,2),new ln({visible:!1,wireframe:!0,side:xn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),zs.copy(Yr).applyQuaternion(t==="local"?this.worldQuaternion:Ks),Br.copy(Ri).applyQuaternion(t==="local"?this.worldQuaternion:Ks),kr.copy(qr).applyQuaternion(t==="local"?this.worldQuaternion:Ks),rt.copy(Br),this.mode){case"translate":case"scale":switch(this.axis){case"X":rt.copy(this.eye).cross(zs),An.copy(zs).cross(rt);break;case"Y":rt.copy(this.eye).cross(Br),An.copy(Br).cross(rt);break;case"Z":rt.copy(this.eye).cross(kr),An.copy(kr).cross(rt);break;case"XY":An.copy(kr);break;case"YZ":An.copy(zs);break;case"XZ":rt.copy(kr),An.copy(Br);break;case"XYZ":case"E":An.set(0,0,0);break}break;case"rotate":default:An.set(0,0,0)}An.length()===0?this.quaternion.copy(this.cameraQuaternion):(nc.lookAt(zt.set(0,0,0),An,rt),this.quaternion.setFromRotationMatrix(nc)),super.updateMatrixWorld(e)}}function ic(r,e){if(e===Gh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===No||e===Ic){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===No)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Hg extends wr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Yg(t)}),this.register(function(t){return new qg(t)}),this.register(function(t){return new n_(t)}),this.register(function(t){return new i_(t)}),this.register(function(t){return new r_(t)}),this.register(function(t){return new jg(t)}),this.register(function(t){return new Zg(t)}),this.register(function(t){return new $g(t)}),this.register(function(t){return new Qg(t)}),this.register(function(t){return new Xg(t)}),this.register(function(t){return new Jg(t)}),this.register(function(t){return new Kg(t)}),this.register(function(t){return new t_(t)}),this.register(function(t){return new e_(t)}),this.register(function(t){return new Gg(t)}),this.register(function(t){return new s_(t)}),this.register(function(t){return new a_(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const d=Qr.extractUrlBase(e);a=Qr.resolveURL(d,this.path)}else a=Qr.extractUrlBase(e);this.manager.itemStart(e);const o=function(d){i?i(d):console.error(d),s.manager.itemError(e),s.manager.itemEnd(e)},l=new $c(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(d){try{s.parse(d,a,function(c){t(c),s.manager.itemEnd(e)},o)}catch(c){o(c)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===nh){try{a[He.KHR_BINARY_GLTF]=new o_(e)}catch(h){i&&i(h);return}s=JSON.parse(a[He.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new y_(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const h=this.pluginCallbacks[c](d);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const h=s.extensionsUsed[c],u=s.extensionsRequired||[];switch(h){case He.KHR_MATERIALS_UNLIT:a[h]=new Wg;break;case He.KHR_DRACO_MESH_COMPRESSION:a[h]=new l_(s,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:a[h]=new d_;break;case He.KHR_MESH_QUANTIZATION:a[h]=new c_;break;default:u.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}d.setExtensions(a),d.setPlugins(o),d.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Vg(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Gg{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let d;const c=new Me(16777215);l.color!==void 0&&c.setRGB(l.color[0],l.color[1],l.color[2],Yt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":d=new hl(c),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new rg(c),d.distance=h;break;case"spot":d=new ng(c),d.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,d.angle=l.spot.outerConeAngle,d.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return d.position.set(0,0,0),d.decay=2,Xn(d,l),l.intensity!==void 0&&(d.intensity=l.intensity),d.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(d),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Wg{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return ln}extendParams(e,t,n){const i=[];e.color=new Me(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Yt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ot))}return Promise.all(i)}}class Xg{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Yg{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ee(o,o)}return Promise.all(s)}}class qg{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Kg{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class jg{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Me(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Yt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ot)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class Zg{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class $g{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Me().setRGB(o[0],o[1],o[2],Yt),Promise.all(s)}}class Qg{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Jg{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Me().setRGB(o[0],o[1],o[2],Yt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ot)),Promise.all(s)}}class e_{constructor(e){this.parser=e,this.name=He.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class t_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class n_{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class i_{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const d=n.options.manager.getHandler(o.uri);d!==null&&(l=d)}return this.detectSupport().then(function(d){if(d)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class r_{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const d=n.options.manager.getHandler(o.uri);d!==null&&(l=d)}return this.detectSupport().then(function(d){if(d)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class s_{constructor(e){this.name=He.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,d=i.byteLength||0,c=i.count,h=i.byteStride,u=new Uint8Array(o,l,d);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(c,h,u,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(c*h);return a.decodeGltfBuffer(new Uint8Array(p),c,h,u,i.mode,i.filter),p})})}else return null}}class a_{constructor(e){this.name=He.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const d of i.primitives)if(d.mode!==sn.TRIANGLES&&d.mode!==sn.TRIANGLE_STRIP&&d.mode!==sn.TRIANGLE_FAN&&d.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const d in a)o.push(this.parser.getDependency("accessor",a[d]).then(c=>(l[d]=c,l[d])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(d=>{const c=d.pop(),h=c.isGroup?c.children:[c],u=d[0].count,p=[];for(const v of h){const g=new Ie,m=new A,f=new Be,y=new A(1,1,1),b=new Uv(v.geometry,v.material,u);for(let _=0;_<u;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,_),l.SCALE&&y.fromBufferAttribute(l.SCALE,_),b.setMatrixAt(_,g.compose(m,f,y));for(const _ in l)if(_==="_COLOR_0"){const C=l[_];b.instanceColor=new zo(C.array,C.itemSize,C.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&v.geometry.setAttribute(_,l[_]);st.prototype.copy.call(b,v),this.parser.assignFinalMaterial(b),p.push(b)}return c.isGroup?(c.clear(),c.add(...p),c):p[0]}))}}const nh="glTF",Hr=12,rc={JSON:1313821514,BIN:5130562};class o_{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Hr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==nh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Hr,s=new DataView(e,Hr);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===rc.JSON){const d=new Uint8Array(e,Hr+a,o);this.content=n.decode(d)}else if(l===rc.BIN){const d=Hr+a;this.body=e.slice(d,d+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class l_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},d={};for(const c in a){const h=Ho[c]||c.toLowerCase();o[h]=a[c]}for(const c in e.attributes){const h=Ho[c]||c.toLowerCase();if(a[c]!==void 0){const u=n.accessors[e.attributes[c]],p=dr[u.componentType];d[h]=p.name,l[h]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(c){return new Promise(function(h,u){i.decodeDracoFile(c,function(p){for(const v in p.attributes){const g=p.attributes[v],m=l[v];m!==void 0&&(g.normalized=m)}h(p)},o,d,Yt,u)})})}}class d_{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class c_{constructor(){this.name=He.KHR_MESH_QUANTIZATION}}class ih extends rs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,d=o*3,c=i-t,h=(n-t)/c,u=h*h,p=u*h,v=e*d,g=v-d,m=-2*p+3*u,f=p-u,y=1-m,b=f-u+h;for(let _=0;_!==o;_++){const C=a[g+_+o],R=a[g+_+l]*c,E=a[v+_+o],I=a[v+_]*c;s[_]=y*C+b*R+m*E+f*I}return s}}const h_=new Be;class u_ extends ih{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return h_.fromArray(s).normalize().toArray(s),s}}const sn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},dr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},sc={9728:Wt,9729:en,9984:_c,9985:Hs,9986:Gr,9987:qn},ac={33071:pi,33648:Zs,10497:fr},Xa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ho={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},li={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},f_={CUBICSPLINE:void 0,LINEAR:ts,STEP:es},Ya={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function p_(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Yn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Pn})),r.DefaultMaterial}function wi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Xn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function m_(r,e,t){let n=!1,i=!1,s=!1;for(let d=0,c=e.length;d<c;d++){const h=e[d];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let d=0,c=e.length;d<c;d++){const h=e[d];if(n){const u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;a.push(u)}if(i){const u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;o.push(u)}if(s){const u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(d){const c=d[0],h=d[1],u=d[2];return n&&(r.morphAttributes.position=c),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=u),r.morphTargetsRelative=!0,r})}function v_(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function g_(r){let e;const t=r.extensions&&r.extensions[He.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+qa(t.attributes):e=r.indices+":"+qa(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+qa(r.targets[n]);return e}function qa(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Vo(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function __(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const x_=new Ie;class y_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Vg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new Jv(this.options.manager):this.textureLoader=new ag(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new $c(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return wi(s,o,i),Xn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[d,c]of a.children.entries())s(c,o.children[d])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Qr.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Xa[i.type],o=dr[i.componentType],l=i.normalized===!0,d=new o(i.count*a);return Promise.resolve(new Xt(d,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=Xa[i.type],d=dr[i.componentType],c=d.BYTES_PER_ELEMENT,h=c*l,u=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,v=i.normalized===!0;let g,m;if(p&&p!==h){const f=Math.floor(u/p),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let b=t.cache.get(y);b||(g=new d(o,f*p,i.count*p/c),b=new Pv(g,p/c),t.cache.add(y,b)),m=new al(b,l,u%p/c,v)}else o===null?g=new d(i.count*l):g=new d(o,u,i.count*l),m=new Xt(g,l,v);if(i.sparse!==void 0){const f=Xa.SCALAR,y=dr[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,C=new y(a[1],b,i.sparse.count*f),R=new d(a[2],_,i.sparse.count*l);o!==null&&(m=new Xt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,I=C.length;E<I;E++){const S=C[E];if(m.setX(S,R[E*l]),l>=2&&m.setY(S,R[E*l+1]),l>=3&&m.setZ(S,R[E*l+2]),l>=4&&m.setW(S,R[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=v}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const d=this.loadImageSource(t,n).then(function(c){c.flipY=!1,c.name=a.name||o.name||"",c.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(c.name=o.uri);const u=(s.samplers||{})[a.sampler]||{};return c.magFilter=sc[u.magFilter]||en,c.minFilter=sc[u.minFilter]||qn,c.wrapS=ac[u.wrapS]||fr,c.wrapT=ac[u.wrapT]||fr,c.generateMipmaps=!c.isCompressedTexture&&c.minFilter!==Wt&&c.minFilter!==en,i.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[l]=d,d}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",d=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){d=!0;const u=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const c=Promise.resolve(l).then(function(h){return new Promise(function(u,p){let v=u;t.isImageBitmapLoader===!0&&(v=function(g){const m=new Ct(g);m.needsUpdate=!0,u(m)}),t.load(Qr.resolveURL(h,s.path),v,void 0,p)})}).then(function(h){return d===!0&&o.revokeObjectURL(l),Xn(h,a),h.userData.mimeType=a.mimeType||__(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=c,c}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[He.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Kc,Cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Fi,Cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Yn}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},d=[];if(l[He.KHR_MATERIALS_UNLIT]){const h=i[He.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),d.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new Me(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Yt),o.opacity=u[3]}h.baseColorTexture!==void 0&&d.push(t.assignTexture(o,"map",h.baseColorTexture,Ot)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),d.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=xn);const c=s.alphaMode||Ya.OPAQUE;if(c===Ya.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,c===Ya.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==ln&&(d.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ee(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==ln&&(d.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==ln){const h=s.emissiveFactor;o.emissive=new Me().setRGB(h[0],h[1],h[2],Yt)}return s.emissiveTexture!==void 0&&a!==ln&&d.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Ot)),Promise.all(d).then(function(){const h=new a(o);return s.name&&(h.name=s.name),Xn(h,s),t.associations.set(h,{materials:e}),s.extensions&&wi(i,h,s),h})}createUniqueName(e){const t=tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return oc(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const d=e[o],c=g_(d),h=i[c];if(h)a.push(h.promise);else{let u;d.extensions&&d.extensions[He.KHR_DRACO_MESH_COMPRESSION]?u=s(d):u=oc(new Mt,d,t),i[c]={primitive:d,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,d=a.length;l<d;l++){const c=a[l].material===void 0?p_(this.cache):this.getDependency("material",a[l].material);o.push(c)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const d=l.slice(0,l.length-1),c=l[l.length-1],h=[];for(let p=0,v=c.length;p<v;p++){const g=c[p],m=a[p];let f;const y=d[p];if(m.mode===sn.TRIANGLES||m.mode===sn.TRIANGLE_STRIP||m.mode===sn.TRIANGLE_FAN||m.mode===void 0)f=s.isSkinnedMesh===!0?new Lv(g,y):new ne(g,y),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===sn.TRIANGLE_STRIP?f.geometry=ic(f.geometry,Ic):m.mode===sn.TRIANGLE_FAN&&(f.geometry=ic(f.geometry,No));else if(m.mode===sn.LINES)f=new ll(g,y);else if(m.mode===sn.LINE_STRIP)f=new Jt(g,y);else if(m.mode===sn.LINE_LOOP)f=new Fv(g,y);else if(m.mode===sn.POINTS)f=new zv(g,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&v_(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),Xn(f,s),m.extensions&&wi(i,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,v=h.length;p<v;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&wi(i,h[0],s),h[0];const u=new dn;s.extensions&&wi(i,u,s),t.associations.set(u,{meshes:e});for(let p=0,v=h.length;p<v;p++)u.add(h[p]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(ft.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new il(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Xn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let d=0,c=a.length;d<c;d++){const h=a[d];if(h){o.push(h);const u=new Ie;s!==null&&u.fromArray(s.array,d*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new ol(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],d=[],c=[];for(let h=0,u=i.channels.length;h<u;h++){const p=i.channels[h],v=i.samplers[p.sampler],g=p.target,m=g.node,f=i.parameters!==void 0?i.parameters[v.input]:v.input,y=i.parameters!==void 0?i.parameters[v.output]:v.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",y)),d.push(v),c.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(d),Promise.all(c)]).then(function(h){const u=h[0],p=h[1],v=h[2],g=h[3],m=h[4],f=[];for(let y=0,b=u.length;y<b;y++){const _=u[y],C=p[y],R=v[y],E=g[y],I=m[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const S=n._createAnimationTracks(_,C,R,E,I);if(S)for(let x=0;x<S.length;x++)f.push(S[x])}return new Yv(s,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,d=i.weights.length;l<d;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let d=0,c=o.length;d<c;d++)a.push(n.getDependency("node",o[d]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(d){const c=d[0],h=d[1],u=d[2];u!==null&&c.traverse(function(p){p.isSkinnedMesh&&p.bind(u,x_)});for(let p=0,v=h.length;p<v;p++)c.add(h[p]);return c})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(d){return i._getNodeRef(i.cameraCache,s.camera,d)})),i._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){o.push(d)}),this.nodeCache[e]=Promise.all(o).then(function(d){let c;if(s.isBone===!0?c=new Yc:d.length>1?c=new dn:d.length===1?c=d[0]:c=new st,c!==d[0])for(let h=0,u=d.length;h<u;h++)c.add(d[h]);if(s.name&&(c.userData.name=s.name,c.name=a),Xn(c,s),s.extensions&&wi(n,c,s),s.matrix!==void 0){const h=new Ie;h.fromArray(s.matrix),c.applyMatrix4(h)}else s.translation!==void 0&&c.position.fromArray(s.translation),s.rotation!==void 0&&c.quaternion.fromArray(s.rotation),s.scale!==void 0&&c.scale.fromArray(s.scale);return i.associations.has(c)||i.associations.set(c,{}),i.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new dn;n.name&&(s.name=i.createUniqueName(n.name)),Xn(s,n),n.extensions&&wi(t,s,n);const a=n.nodes||[],o=[];for(let l=0,d=a.length;l<d;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let c=0,h=l.length;c<h;c++)s.add(l[c]);const d=c=>{const h=new Map;for(const[u,p]of i.associations)(u instanceof Cn||u instanceof Ct)&&h.set(u,p);return c.traverse(u=>{const p=i.associations.get(u);p!=null&&h.set(u,p)}),h};return i.associations=d(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];li[s.path]===li.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(o);let d;switch(li[s.path]){case li.weights:d=xr;break;case li.rotation:d=yr;break;case li.position:case li.scale:d=br;break;default:switch(n.itemSize){case 1:d=xr;break;case 2:case 3:default:d=br;break}break}const c=i.interpolation!==void 0?f_[i.interpolation]:ts,h=this._getArrayFromAccessor(n);for(let u=0,p=l.length;u<p;u++){const v=new d(l[u]+"."+li[s.path],t.array,h,c);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Vo(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof yr?u_:ih;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function b_(r,e,t){const n=e.attributes,i=new cn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,d=o.max;if(l!==void 0&&d!==void 0){if(i.set(new A(l[0],l[1],l[2]),new A(d[0],d[1],d[2])),o.normalized){const c=Vo(dr[o.componentType]);i.min.multiplyScalar(c),i.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new A,l=new A;for(let d=0,c=s.length;d<c;d++){const h=s[d];if(h.POSITION!==void 0){const u=t.json.accessors[h.POSITION],p=u.min,v=u.max;if(p!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(v[2]))),u.normalized){const g=Vo(dr[u.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new On;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function oc(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=Ho[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return Ve.workingColorSpace!==Yt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ve.workingColorSpace}" not supported.`),Xn(r,e),b_(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?m_(r,e.targets,t):r})}class M_{constructor(e){this.scene=e,this.loader=new Hg,this.modelRoot=null,this.skeletonHelper=null,this.bones={},this.allBones=[],this.restTransforms=new Map,this.restWorldPositions={},this.restWorldQuaternions={},this.floorY=0,this.batRoot=null,this.batPivot=null,this.batSide="right",this.batDefaultTransform={px:.01,py:.132,pz:.055,rx:5,ry:-88,rz:67},this.batTransform={...this.batDefaultTransform}}async loadFromUrl(e){const t=await this.loader.loadAsync(e);return this._setupModel(t)}async loadFromFile(e){const t=URL.createObjectURL(e);try{const n=await this.loader.loadAsync(t);return this._setupModel(n)}finally{URL.revokeObjectURL(t)}}_setupModel(e){this.modelRoot&&this.scene.remove(this.modelRoot),this.skeletonHelper&&(this.scene.remove(this.skeletonHelper),this.skeletonHelper=null);const t=e.scene;t.updateMatrixWorld(!0),t.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0,u.material&&(u.material.side=Pn))});const n=new cn().setFromObject(t),i=new A;n.getSize(i);const o=1.75/Math.max(i.y,.001),l=new dn;l.name="CharacterWrapper",t.scale.multiplyScalar(o),l.add(t),l.updateMatrixWorld(!0);const d=new cn().setFromObject(l),c=new A;d.getCenter(c),t.position.x-=c.x,t.position.z-=c.z,t.position.y-=d.min.y,this.scene.add(l),this.modelRoot=l,l.updateMatrixWorld(!0),this.allBones=[];const h=new Set;l.traverse(u=>{u.isBone&&!h.has(u)&&(h.add(u),this.allBones.push(u))}),this.restTransforms.clear();for(const u of this.allBones)this.restTransforms.set(u.uuid,{position:u.position.clone(),quaternion:u.quaternion.clone()});this.bones=this._detectHumanoidBones(this.allBones),this.restWorldPositions={},this.restWorldQuaternions={};for(const[u,p]of Object.entries(this.bones))p&&(this.restWorldPositions[u]=p.getWorldPosition(new A),this.restWorldQuaternions[u]=p.getWorldQuaternion(new Be));return this.skeletonHelper=new vg(l),this.skeletonHelper.visible=!1,this.skeletonHelper.material.linewidth=2,this.scene.add(this.skeletonHelper),{boneCount:this.allBones.length,detected:Object.keys(this.bones).filter(u=>!!this.bones[u])}}_detectHumanoidBones(e){const t=n=>{for(const i of n){const s=typeof i=="string"?new RegExp(`^${i}$`,"i"):i,a=e.find(o=>s.test(o.name));if(a)return a}return null};return{hips:t([/^Root(_\d+)?$/i,/mixamorig:?Hips(_\d+)?$/i,/hips/i,/pelvis/i]),spine:t([/^spine(_\d+)?$/i,/mixamorig:?Spine(_\d+)?$/i,/spine0?1/i]),chest:t([/^spine\.001(_\d+)?$/i,/mixamorig:?Spine2(_\d+)?$/i,/mixamorig:?Spine1(_\d+)?$/i,/chest/i,/spine0?2/i,/upper.?chest/i]),neck:t([/upper.?neck/i,/mixamorig:?Neck(_\d+)?$/i,/neck/i]),head:t([/^Head(_\d+)?$/i,/mixamorig:?Head(_\d+)?$/i,/\bhead\b/i]),thighL:t([/^thigh\.L/i,/mixamorig:?LeftUpLeg(_\d+)?$/i,/left.?up.?leg/i,/thigh_l/i]),shinL:t([/^shin\.L/i,/mixamorig:?LeftLeg(_\d+)?$/i,/left.?leg(_\d+)?$/i,/calf_l/i,/shin_l/i]),footL:t([/^foot\.L/i,/mixamorig:?LeftFoot(_\d+)?$/i,/left.?foot/i,/foot_l/i]),toeL:t([/^toe\.L/i,/mixamorig:?LeftToeBase(_\d+)?$/i,/left.?toe/i,/toe_l/i]),thighR:t([/^thigh\.R/i,/mixamorig:?RightUpLeg(_\d+)?$/i,/right.?up.?leg/i,/thigh_r/i]),shinR:t([/^shin\.R/i,/mixamorig:?RightLeg(_\d+)?$/i,/right.?leg(_\d+)?$/i,/calf_r/i,/shin_r/i]),footR:t([/^foot\.R/i,/mixamorig:?RightFoot(_\d+)?$/i,/right.?foot/i,/foot_r/i]),toeR:t([/^toe\.R/i,/mixamorig:?RightToeBase(_\d+)?$/i,/right.?toe/i,/toe_r/i]),upperArmL:t([/^upper_arm\.L/i,/mixamorig:?LeftArm(_\d+)?$/i,/left.?arm(_\d+)?$/i,/upperarm_l/i]),forearmL:t([/^forearm\.L/i,/mixamorig:?LeftForeArm(_\d+)?$/i,/left.?fore.?arm/i,/lowerarm_l/i]),handL:t([/^hand\.L/i,/mixamorig:?LeftHand(_\d+)?$/i,/left.?hand(_\d+)?$/i,/hand_l/i]),upperArmR:t([/^upper_arm\.R/i,/mixamorig:?RightArm(_\d+)?$/i,/right.?arm(_\d+)?$/i,/upperarm_r/i]),forearmR:t([/^forearm\.R/i,/mixamorig:?RightForeArm(_\d+)?$/i,/right.?fore.?arm/i,/lowerarm_r/i]),handR:t([/^hand\.R/i,/mixamorig:?RightHand(_\d+)?$/i,/right.?hand(_\d+)?$/i,/hand_r/i])}}resetAllBonesToRest(){for(const e of this.allBones){const t=this.restTransforms.get(e.uuid);t&&(e.position.copy(t.position),e.quaternion.copy(t.quaternion))}this.modelRoot&&this.modelRoot.updateMatrixWorld(!0)}setSkeletonVisible(e){this.skeletonHelper&&(this.skeletonHelper.visible=e)}async loadAndAttachBat(e="/table_tennis_bat.glb",t="right"){const i=(await this.loader.loadAsync(e)).scene;i.traverse(p=>{p.isMesh&&(p.castShadow=!0,p.receiveShadow=!0)}),i.updateMatrixWorld(!0);const s=new cn().setFromObject(i),a=new A;s.getSize(a);const d=.26/Math.max(a.x,a.y,a.z,.001),c=new A;s.getCenter(c);const h=new A(c.x,c.y,s.min.z+a.z*.78),u=new dn;u.name="TableTennisBatNormalized",i.scale.setScalar(d),i.position.copy(h).multiplyScalar(-d),u.add(i),this.batRoot=u,this.batPivot=new dn,this.batPivot.name="TableTennisBatPivot",this.batPivot.add(this.batRoot),this.attachBatToHand(t)}attachBatToHand(e="right"){if(this.batSide=e,!this.batPivot)return;if(this.batPivot.parent&&this.batPivot.parent.remove(this.batPivot),e==="none"){this.batPivot.visible=!1;return}const t=e==="left"?this.bones.handL:this.bones.handR;if(!t)return;t.updateMatrixWorld(!0);const n=t.getWorldScale(new A);this.batPivot.scale.set(1/Math.max(n.x,1e-4),1/Math.max(n.y,1e-4),1/Math.max(n.z,1e-4)),this.applyBatTransform(),this.batPivot.visible=!0,t.add(this.batPivot)}applyBatTransform(){if(!this.batPivot||this.batSide==="none")return;const e=this.batSide==="left"?-1:1,t=this.batTransform;this.batPivot.position.set(t.px*e*this.batPivot.scale.x,t.py*this.batPivot.scale.y,t.pz*this.batPivot.scale.z),this.batPivot.rotation.set(ft.degToRad(t.rx),ft.degToRad(t.ry*e),ft.degToRad(t.rz*e))}setBatTransform(e){Object.assign(this.batTransform,e),this.applyBatTransform()}resetBatTransform(){return this.batTransform={...this.batDefaultTransform},this.applyBatTransform(),this.batTransform}applyBatGripPose(){if(this.batSide==="none")return;const e=this.batSide==="left"?"LeftHand":"RightHand",t=this.batSide==="left"?-1:1,n=(i,s,a=0,o=0)=>{const l=this.allBones.find(c=>c.name.includes(e+i));if(!l)return;const d=new Be().setFromEuler(new Dt(ft.degToRad(s),ft.degToRad(a*t),ft.degToRad(o*t),"XYZ"));l.quaternion.multiply(d)};for(const i of["Middle","Ring","Pinky"])n(`${i}1`,72),n(`${i}2`,88),n(`${i}3`,68);n("Index1",14,0,-10),n("Index2",12),n("Index3",8),n("Thumb1",18,22,-18),n("Thumb2",12,10,-10),n("Thumb3",10)}}const S_=new A,lc=new A,E_=new A,Gn=new Be,Bs=new Be,T_=new Be,di=new Dt;class A_{constructor(e){this.rig=e,this.footPinning=!0,this.smartBodyFollow=!0,this.targets={},this.restTargets={},this.floorFootY=0}initFromRig(){const e=this.rig.bones,t=this.rig.restWorldPositions;this.targets={},this.restTargets={};const n=(i,s,a,o,l="main")=>{const d=o?o.clone():new A;this.targets[i]={id:i,label:s,color:a,group:l,position:d.clone(),rotation:new Dt(0,0,0,"XYZ")},this.restTargets[i]={position:d.clone(),rotation:new Dt(0,0,0,"XYZ")}};if(e.hips&&n("hips","Bacino","#f5a623",t.hips),e.head){const i=t.head.clone().add(new A(0,.05,.45));n("head","Testa","#a78bfa",i)}e.footL&&(this.floorFootY=Math.min(t.footL.y,t.footR?t.footR.y:t.footL.y),n("footL","Piede SX","#4cc38a",t.footL)),e.footR&&n("footR","Piede DX","#38bdf8",t.footR),e.handL&&n("handL","Mano SX","#4cc38a",t.handL),e.handR&&n("handR","Mano DX","#38bdf8",t.handR),e.shinL&&n("poleKneeL","Ginocchio SX","#2d8a5e",t.shinL.clone().add(new A(0,0,.45)),"pole"),e.shinR&&n("poleKneeR","Ginocchio DX","#257aa3",t.shinR.clone().add(new A(0,0,.45)),"pole")}resetAllTargets(){for(const e of Object.keys(this.targets)){const t=this.restTargets[e];t&&(this.targets[e].position.copy(t.position),this.targets[e].rotation.copy(t.rotation))}this.solve()}resetTarget(e){const t=this.targets[e],n=this.restTargets[e];t&&n&&(t.position.copy(n.position),t.rotation.copy(n.rotation),this.solve())}solve(){const e=this.rig.bones;if(!e.hips)return;this.footPinning&&(this.targets.footL&&(this.targets.footL.position.y=Math.max(this.targets.footL.position.y,this.floorFootY)),this.targets.footR&&(this.targets.footR.position.y=Math.max(this.targets.footR.position.y,this.floorFootY))),this.rig.resetAllBonesToRest();const t=this.targets.hips,n=this.restTargets.hips,i=new A;if(t&&n&&i.copy(t.position).sub(n.position),this.smartBodyFollow){const s=this._computeSmartReachOffset();if(i.add(s.hipsShift),e.spine&&e.chest){const a=new Dt(s.torsoPitch,s.torsoYaw,s.torsoRoll,"XYZ");Gn.setFromEuler(a);const o=new Be().slerpQuaternions(new Be,Gn,.45),l=new Be().slerpQuaternions(new Be,Gn,.55);this._applyWorldRotationOffset(e.spine,o),e.spine.updateMatrixWorld(!0),this._applyWorldRotationOffset(e.chest,l),e.chest.updateMatrixWorld(!0)}}if(e.hips.parent&&i.lengthSq()>1e-7){const s=e.hips.parent.getWorldQuaternion(Gn).invert(),a=e.hips.parent.getWorldScale(lc),o=i.clone().applyQuaternion(s).divide(a);e.hips.position.add(o)}if(t&&(Gn.setFromEuler(t.rotation),this._applyWorldRotationOffset(e.hips,Gn)),e.hips.updateMatrixWorld(!0),e.head&&this.targets.head&&this._solveHeadLookAt(e.neck,e.head,this.targets.head),e.thighL&&e.shinL&&e.footL&&this.targets.footL&&this.targets.poleKneeL&&(this._solveTwoBoneIK(e.thighL,e.shinL,e.footL,this.targets.footL.position,this.targets.poleKneeL.position),this._solveSmartFootOrientation(e.footL,"footL",this.targets.footL,this.targets.poleKneeL,this.restTargets.poleKneeL,this.restTargets.footL)),e.thighR&&e.shinR&&e.footR&&this.targets.footR&&this.targets.poleKneeR&&(this._solveTwoBoneIK(e.thighR,e.shinR,e.footR,this.targets.footR.position,this.targets.poleKneeR.position),this._solveSmartFootOrientation(e.footR,"footR",this.targets.footR,this.targets.poleKneeR,this.restTargets.poleKneeR,this.restTargets.footR)),e.upperArmL&&e.forearmL&&e.handL&&this.targets.handL){const s=this._computeAutoElbowPole(e.upperArmL,this.targets.handL.position,1);this._solveTwoBoneIK(e.upperArmL,e.forearmL,e.handL,this.targets.handL.position,s),this._setBoneWorldOrientationFromRest(e.handL,"handL",this.targets.handL.rotation)}if(e.upperArmR&&e.forearmR&&e.handR&&this.targets.handR){const s=this._computeAutoElbowPole(e.upperArmR,this.targets.handR.position,-1);this._solveTwoBoneIK(e.upperArmR,e.forearmR,e.handR,this.targets.handR.position,s),this._setBoneWorldOrientationFromRest(e.handR,"handR",this.targets.handR.rotation)}this.rig.applyBatGripPose()}_computeAutoElbowPole(e,t,n){return e.getWorldPosition(new A).clone().lerp(t,.5).add(new A(n*.22,-.15,-.45))}_computeSmartReachOffset(){let e=0,t=0,n=0;const i=new A,s=(c,h,u)=>{const p=this.targets[c],v=this.restTargets[c],g=this.rig.restWorldPositions[h];if(!p||!v||!g)return;const m=p.position.clone().sub(v.position);e+=ft.clamp(m.z*.45*u,-.45,.45),m.y<-.15&&(t+=ft.clamp(-m.y*.35,0,.35));const f=p.position.distanceTo(g);if(f>.65){const y=(f-.65)*.28,b=p.position.clone().sub(g).normalize();i.addScaledVector(b,Math.min(y,.14))}};s("handL","upperArmL",-1),s("handR","upperArmR",1);const a=this.targets.footL,o=this.targets.footR,l=this.restTargets.footL,d=this.restTargets.footR;if(a&&o&&l&&d){const c=.5*(a.position.x-l.position.x+(o.position.x-d.position.x)),h=.5*(a.position.z-l.position.z+(o.position.z-d.position.z));i.x+=c*.45,i.z+=h*.45}return{torsoYaw:e,torsoPitch:t,torsoRoll:n,hipsShift:i}}_solveHeadLookAt(e,t,n){const i=t.getWorldPosition(S_),s=lc.copy(n.position).sub(i);if(s.lengthSq()<1e-5)return;s.normalize();const a=E_.set(0,0,1),o=Gn.setFromUnitVectors(a,s);if(di.setFromQuaternion(o,"YXZ"),di.y=ft.clamp(di.y,-1.1,1.1),di.x=ft.clamp(di.x,-.75,.75),di.z=ft.clamp(di.z,-.4,.4),o.setFromEuler(di),Bs.setFromEuler(n.rotation),o.multiply(Bs),e){const d=new Be().slerpQuaternions(new Be,o,.35);this._applyWorldRotationOffset(e,d),e.updateMatrixWorld(!0)}const l=new Be().slerpQuaternions(new Be,o,.65);this._applyWorldRotationOffset(t,l),t.updateMatrixWorld(!0)}_solveTwoBoneIK(e,t,n,i,s){e.updateMatrixWorld(!0);const a=e.getWorldPosition(new A),o=t.getWorldPosition(new A),l=n.getWorldPosition(new A),d=a.distanceTo(o),c=o.distanceTo(l);if(d<1e-5||c<1e-5)return;const h=i.clone().sub(a),u=(d+c)*.999,p=Math.max(Math.abs(d-c)*1.01,.01),v=ft.clamp(h.length(),p,u),g=h.lengthSq()>1e-8?h.normalize():new A(0,-1,0),m=ft.clamp((d*d+v*v-c*c)/(2*d*v),-1,1),f=Math.acos(m),y=s.clone().sub(a),b=y.sub(g.clone().multiplyScalar(y.dot(g)));b.lengthSq()<1e-6&&(b.set(0,0,1),b.sub(g.clone().multiplyScalar(b.dot(g))),b.lengthSq()<1e-6&&b.set(1,0,0)),b.normalize();const _=a.clone().addScaledVector(g,d*Math.cos(f)).addScaledVector(b,d*Math.sin(f)),C=o.clone().sub(a).normalize(),R=_.clone().sub(a).normalize(),E=new Be().setFromUnitVectors(C,R);this._applyWorldRotationOffset(e,E),e.updateMatrixWorld(!0);const I=t.getWorldPosition(new A),x=n.getWorldPosition(new A).clone().sub(I).normalize(),P=i.clone().sub(I).normalize(),z=new Be().setFromUnitVectors(x,P);this._applyWorldRotationOffset(t,z),t.updateMatrixWorld(!0)}_applyWorldRotationOffset(e,t){if(!e.parent){e.quaternion.premultiply(t);return}const n=e.parent.getWorldQuaternion(T_).invert(),i=e.getWorldQuaternion(new Be),s=t.clone().multiply(i);e.quaternion.copy(n.multiply(s))}_setBoneWorldOrientationFromRest(e,t,n){const i=this.rig.restWorldQuaternions[t];if(!i||!e.parent)return;const a=Gn.setFromEuler(n).multiply(i),o=e.parent.getWorldQuaternion(Bs).invert();e.quaternion.copy(o.multiply(a)),e.updateMatrixWorld(!0)}_solveSmartFootOrientation(e,t,n,i,s,a){const o=this.rig.restWorldQuaternions[t];if(!o||!e.parent)return;const l=i.position.x-n.position.x,d=i.position.z-n.position.z,c=s?s.position.x-a.position.x:0,h=s?s.position.z-a.position.z:1;let u=0;if(l*l+d*d>1e-4&&c*c+h*h>1e-4){const f=Math.atan2(l,d),y=Math.atan2(c,h);for(u=f-y;u>Math.PI;)u-=Math.PI*2;for(;u<-Math.PI;)u+=Math.PI*2}const p=new Be().setFromAxisAngle(new A(0,1,0),u),g=Gn.setFromEuler(n.rotation).multiply(p).multiply(o),m=e.parent.getWorldQuaternion(Bs).invert();e.quaternion.copy(m.multiply(g)),e.updateMatrixWorld(!0)}capturePose(){const e={};for(const[t,n]of Object.entries(this.targets))e[t]={px:n.position.x,py:n.position.y,pz:n.position.z,rx:n.rotation.x,ry:n.rotation.y,rz:n.rotation.z};return e}applyPose(e){for(const[t,n]of Object.entries(e)){const i=this.targets[t];!i||!n||(n.px!==void 0&&(i.position.x=n.px),n.py!==void 0&&(i.position.y=n.py),n.pz!==void 0&&(i.position.z=n.pz),n.rx!==void 0&&(i.rotation.x=n.rx),n.ry!==void 0&&(i.rotation.y=n.ry),n.rz!==void 0&&(i.rotation.z=n.rz))}this.solve()}}class w_{constructor(e,t){this.scene=e,this.ik=t,this.group=new dn,this.group.name="IKGizmosGroup",this.scene.add(this.group),this.handleMeshes={},this.poleLines=[],this.selectedId=null;const n=new Mt,i=new Fi({color:6333946,transparent:!0,opacity:.75});this.motionPathLine=new Jt(n,i),this.motionPathLine.visible=!0,this.scene.add(this.motionPathLine)}rebuild(){for(;this.group.children.length>0;){const t=this.group.children[0];this.group.remove(t)}this.handleMeshes={},this.poleLines=[];for(const[t,n]of Object.entries(this.ik.targets)){const i=n.group==="pole";let s;t==="hips"?(s=new fi(.16,.016,10,28),s.rotateX(Math.PI/2)):t==="chest"?s=new Oi(.065,0):t.startsWith("foot")?s=new ut(.11,.04,.18):i?s=new _r(.032,12,12):s=new _r(.048,16,16);const a=new ln({color:new Me(n.color),transparent:!0,opacity:i?.55:.85,depthTest:!1}),o=new ne(s,a);o.renderOrder=999,o.userData={ikId:t,baseColor:n.color,isPole:i},o.position.copy(n.position),o.rotation.copy(n.rotation),this.group.add(o),this.handleMeshes[t]=o}const e=[["poleKneeL","shinL"],["poleKneeR","shinR"],["poleElbowL","forearmL"],["poleElbowR","forearmR"]];for(const[t,n]of e)if(this.handleMeshes[t]&&this.ik.rig.bones[n]){const i=new Mt().setFromPoints([new A,new A]),s=new Bv({color:8950440,dashSize:.03,gapSize:.02,transparent:!0,opacity:.5,depthTest:!1}),a=new Jt(i,s);a.renderOrder=998,this.group.add(a),this.poleLines.push({line:a,poleId:t,boneKey:n})}}select(e){this.selectedId=e;for(const[t,n]of Object.entries(this.handleMeshes)){const i=t===e;n.scale.setScalar(i?1.25:1),n.material.color.set(i?"#ffffff":n.userData.baseColor),n.material.opacity=i?1:n.userData.isPole?.55:.82}}syncFromSolver(){for(const[e,t]of Object.entries(this.handleMeshes)){const n=this.ik.targets[e];n&&(t.position.copy(n.position),t.rotation.copy(n.rotation))}for(const e of this.poleLines){const t=this.ik.targets[e.poleId],n=this.ik.rig.bones[e.boneKey];if(!t||!n)continue;const i=n.getWorldPosition(new A),s=e.line.geometry.attributes.position;s.setXYZ(0,t.position.x,t.position.y,t.position.z),s.setXYZ(1,i.x,i.y,i.z),s.needsUpdate=!0,e.line.computeLineDistances()}}updateMotionPath(e,t=!0){if(!t||!e||e.length<2){this.motionPathLine.visible=!1;return}this.motionPathLine.geometry.setFromPoints(e),this.motionPathLine.visible=!0}getPickableMeshes(){return Object.values(this.handleMeshes)}}const Vr=["px","py","pz","rx","ry","rz"];function I_(r,e,t){const n=e.frame-r.frame;if(n<=0)return r.value;const i=r.frame,s=r.value,a=e.frame,o=e.value;let l=i+(r.handleOut?r.handleOut.df:n*.35),d=s+(r.handleOut?r.handleOut.dv:0),c=a+(e.handleIn?e.handleIn.df:-n*.35),h=o+(e.handleIn?e.handleIn.dv:0);l=Math.min(Math.max(l,i),a),c=Math.max(Math.min(c,a),i);let u=0,p=1,v=(t-i)/n;for(let m=0;m<16;m++){const f=1-v,y=f*f*f*i+3*f*f*v*l+3*f*v*v*c+v*v*v*a;if(Math.abs(y-t)<1e-4)break;y<t?u=v:p=v,v=.5*(u+p)}const g=1-v;return g*g*g*s+3*g*g*v*d+3*g*v*v*h+v*v*v*o}class R_{constructor(){this.fps=30,this.totalFrames=90,this.currentFrame=0,this.isPlaying=!1,this.loop=!0,this.autoKey=!1,this.tracks={}}clear(){this.tracks={}}_ensureChannel(e,t){return this.tracks[e]||(this.tracks[e]={}),this.tracks[e][t]||(this.tracks[e][t]=[]),this.tracks[e][t]}setTargetKeyframe(e,t,n=this.currentFrame,i="bezier"){const s=Math.round(n),a={px:t.position.x,py:t.position.y,pz:t.position.z,rx:t.rotation.x,ry:t.rotation.y,rz:t.rotation.z};for(const o of Vr)this.setChannelKeyframe(e,o,s,a[o],i)}setFullPoseKeyframe(e,t=this.currentFrame,n="bezier"){for(const[i,s]of Object.entries(e))this.setTargetKeyframe(i,s,t,n)}setChannelKeyframe(e,t,n,i,s="bezier"){const a=this._ensureChannel(e,t),o=a.find(l=>l.frame===n);if(o)o.value=i,s&&(o.interp=s);else{const l={frame:n,value:i,interp:s,handleIn:{df:-6,dv:0},handleOut:{df:6,dv:0}};a.push(l),a.sort((d,c)=>d.frame-c.frame)}this._recomputeAutoHandles(a)}_recomputeAutoHandles(e){for(let t=0;t<e.length;t++){const n=e[t];if(n.customHandles)continue;const i=e[t-1],s=e[t+1];if(n.interp==="easeIn"){const a=s?(s.frame-n.frame)*.45:6;n.handleOut={df:a,dv:0},n.handleIn={df:i?-(n.frame-i.frame)*.15:-4,dv:0}}else if(n.interp==="easeOut"){const a=i?(n.frame-i.frame)*.45:6;n.handleIn={df:-a,dv:0},n.handleOut={df:s?(s.frame-n.frame)*.15:4,dv:0}}else{const a=i?(n.frame-i.frame)*.35:6,o=s?(s.frame-n.frame)*.35:6;n.handleIn={df:-a,dv:0},n.handleOut={df:o,dv:0}}}}deleteTargetKeyframe(e,t){const n=Math.round(t),i=this.tracks[e];if(i)for(const s of Vr)i[s]&&(i[s]=i[s].filter(a=>a.frame!==n))}deleteFullPoseKeyframe(e){const t=Math.round(e);for(const n of Object.keys(this.tracks))this.deleteTargetKeyframe(n,t)}moveTargetKeyframe(e,t,n){const i=Math.round(t),s=Math.max(0,Math.min(this.totalFrames,Math.round(n)));if(i===s)return i;const a=this.tracks[e];if(!a)return i;for(const o of Vr){const l=a[o];if(!l)continue;const d=l.filter(h=>h.frame!==s||h.frame===i),c=d.find(h=>h.frame===i);c&&(c.frame=s),d.sort((h,u)=>h.frame-u.frame),a[o]=d,this._recomputeAutoHandles(a[o])}return s}getTrackKeyframeFrames(e){const t=this.tracks[e];if(!t)return[];const n=new Set;for(const i of Vr)if(t[i])for(const s of t[i])n.add(s.frame);return Array.from(n).sort((i,s)=>i-s)}getAllKeyframeFrames(){const e=new Set;for(const t of Object.keys(this.tracks))for(const n of this.getTrackKeyframeFrames(t))e.add(n);return Array.from(e).sort((t,n)=>t-n)}evaluateChannel(e,t,n){const i=this.tracks[e];if(!i||!i[t]||i[t].length===0)return null;const s=i[t];if(n<=s[0].frame)return s[0].value;if(n>=s[s.length-1].frame)return s[s.length-1].value;for(let a=0;a<s.length-1;a++){const o=s[a],l=s[a+1];if(n>=o.frame&&n<=l.frame){if(o.interp==="step")return o.value;if(o.interp==="linear"){const d=(n-o.frame)/(l.frame-o.frame);return o.value+(l.value-o.value)*d}return I_(o,l,n)}}return s[s.length-1].value}evaluatePose(e=this.currentFrame){const t={};for(const n of Object.keys(this.tracks)){const i={};let s=!1;for(const a of Vr){const o=this.evaluateChannel(n,a,e);o!==null&&(i[a]=o,s=!0)}s&&(t[n]=i)}return t}sampleMotionPath(e,t=60){const n=this.getTrackKeyframeFrames(e);if(n.length<2)return[];const i=n[0],s=n[n.length-1],a=[];for(let o=0;o<=t;o++){const l=i+(s-i)*o/t,d=this.evaluateChannel(e,"px",l),c=this.evaluateChannel(e,"py",l),h=this.evaluateChannel(e,"pz",l);d!==null&&c!==null&&h!==null&&a.push(new A(d,c,h))}return a}toJSON(){return{fps:this.fps,totalFrames:this.totalFrames,tracks:this.tracks}}fromJSON(e){!e||!e.tracks||(this.fps=e.fps||30,this.totalFrames=e.totalFrames||90,this.tracks=e.tracks)}}const C_=30,P_=34,O_=JSON.parse('{"hips":{"px":[{"frame":0,"value":-0.001872,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0.04,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0.08,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":-0.001872,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":-0.001872,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":-0.001872,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":-0.001872,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"py":[{"frame":0,"value":0.677254,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0.69,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0.65,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0.702254,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0.742254,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0.632254,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0.677254,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"pz":[{"frame":0,"value":-0.028365,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0.04,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0.12,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":-0.028365,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":-0.028365,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":-0.028365,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":-0.028365,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rx":[{"frame":0,"value":0.369888,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0.42,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0.5,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0.369888,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0.369888,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0.369888,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0.369888,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"ry":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0.15,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":-0.08,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rz":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}]},"head":{"px":[{"frame":0,"value":-0.062912,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":-0.062912,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0.04,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":-0.062912,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":-0.062912,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":-0.062912,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":-0.062912,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"py":[{"frame":0,"value":1.220587,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":1.220587,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":1.18,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":1.220587,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":1.220587,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":1.220587,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":1.220587,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"pz":[{"frame":0,"value":0.597739,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0.597739,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0.72,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0.597739,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0.597739,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0.597739,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0.597739,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rx":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"ry":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rz":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}]},"footL":{"px":[{"frame":0,"value":0.16882,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0.16882,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0.16882,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0.16882,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0.16882,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0.16882,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0.16882,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"py":[{"frame":0,"value":0.067857,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0.067857,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0.067857,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0.067857,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0.112857,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0.067857,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0.067857,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"pz":[{"frame":0,"value":0.038724,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0.038724,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0.038724,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0.038724,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0.038724,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0.038724,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0.038724,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rx":[{"frame":0,"value":0.255147,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0.255147,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0.255147,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0.255147,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0.255147,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0.255147,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0.255147,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"ry":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rz":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}]},"footR":{"px":[{"frame":0,"value":-0.450478,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":-0.36,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":-0.28,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":2.0999999999999996,"dv":0}},{"frame":15,"value":-0.365239,"interp":"bezier","handleIn":{"df":-2.0999999999999996,"dv":0},"handleOut":{"df":2.4499999999999997,"dv":0}},{"frame":22,"value":-0.450478,"interp":"easeOut","handleIn":{"df":-3.15,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":-0.450478,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":-0.450478,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":-0.450478,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"py":[{"frame":0,"value":0.06672,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0.14,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0.07,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":2.0999999999999996,"dv":0}},{"frame":15,"value":0.21,"interp":"bezier","handleIn":{"df":-2.0999999999999996,"dv":0},"handleOut":{"df":2.4499999999999997,"dv":0}},{"frame":22,"value":0.06672,"interp":"easeOut","handleIn":{"df":-3.15,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0.11172,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0.06672,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0.06672,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"pz":[{"frame":0,"value":-0.09666,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0.14,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0.34,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":2.0999999999999996,"dv":0}},{"frame":15,"value":0.12167000000000001,"interp":"bezier","handleIn":{"df":-2.0999999999999996,"dv":0},"handleOut":{"df":2.4499999999999997,"dv":0}},{"frame":22,"value":-0.09666,"interp":"easeOut","handleIn":{"df":-3.15,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":-0.09666,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":-0.09666,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":-0.09666,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rx":[{"frame":0,"value":-0.009755,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":-0.01,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":-0.01,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":2.0999999999999996,"dv":0}},{"frame":15,"value":-0.0098775,"interp":"bezier","handleIn":{"df":-2.0999999999999996,"dv":0},"handleOut":{"df":2.4499999999999997,"dv":0}},{"frame":22,"value":-0.009755,"interp":"easeOut","handleIn":{"df":-3.15,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":-0.009755,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":-0.009755,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":-0.009755,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"ry":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":-0.25,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":-0.45,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":2.0999999999999996,"dv":0}},{"frame":15,"value":-0.225,"interp":"bezier","handleIn":{"df":-2.0999999999999996,"dv":0},"handleOut":{"df":2.4499999999999997,"dv":0}},{"frame":22,"value":0,"interp":"easeOut","handleIn":{"df":-3.15,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rz":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":2.0999999999999996,"dv":0}},{"frame":15,"value":0,"interp":"bezier","handleIn":{"df":-2.0999999999999996,"dv":0},"handleOut":{"df":2.4499999999999997,"dv":0}},{"frame":22,"value":0,"interp":"easeOut","handleIn":{"df":-3.15,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}]},"handL":{"px":[{"frame":0,"value":0.251387,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0.34,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0.4,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0.251387,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0.251387,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0.251387,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0.251387,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"py":[{"frame":0,"value":0.80412,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0.82,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0.8,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0.80412,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0.84412,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0.7741199999999999,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0.80412,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"pz":[{"frame":0,"value":-0.016458,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0.06,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0.12,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":-0.016458,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":-0.016458,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":-0.016458,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":-0.016458,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rx":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":-0.4,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"ry":[{"frame":0,"value":0.408902,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0.45,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0.3,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0.408902,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0.408902,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0.408902,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0.408902,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rz":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}]},"handR":{"px":[{"frame":0,"value":-0.504796,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0.01720102614866255,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0.12,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":-0.504796,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":-0.504796,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":-0.504796,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":-0.504796,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"py":[{"frame":0,"value":0.756381,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0.8706324294992732,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0.74,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0.756381,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0.796381,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0.7263809999999999,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0.756381,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"pz":[{"frame":0,"value":0.394926,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0.2702243895952974,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0.62,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0.394926,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0.394926,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0.394926,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0.394926,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rx":[{"frame":0,"value":-0.994999,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":-1.6885323379062693,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":-0.6604721126302352,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":-0.994999,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":-0.994999,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":-0.994999,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":-0.994999,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"ry":[{"frame":0,"value":0.020933,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0.3959133888015802,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0.9193995052185578,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0.020933,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0.020933,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0.020933,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0.020933,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rz":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0.5596481295149456,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":-1.2329074287460968,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}]},"poleKneeL":{"px":[{"frame":0,"value":0.32011,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0.32011,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0.32011,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0.32011,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0.32011,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0.32011,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0.32011,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"py":[{"frame":0,"value":0.474629,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0.474629,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0.474629,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0.474629,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0.474629,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0.474629,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0.474629,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"pz":[{"frame":0,"value":0.348878,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0.348878,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0.348878,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0.348878,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0.348878,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0.408878,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0.348878,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rx":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"ry":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rz":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}]},"poleKneeR":{"px":[{"frame":0,"value":-0.325568,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":-0.25,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":-0.18,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":-0.325568,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":-0.325568,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":-0.325568,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":-0.325568,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"py":[{"frame":0,"value":0.548968,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0.52,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0.48,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0.548968,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0.548968,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0.548968,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0.548968,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"pz":[{"frame":0,"value":0.494418,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0.55,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0.62,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0.494418,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0.494418,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0.5544180000000001,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0.494418,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rx":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"ry":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rz":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":4,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":9,"value":0.0008726319359238331,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":22,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":25,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":29,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":34,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}]}}'),L_={fps:C_,totalFrames:P_,tracks:O_},D_=30,N_=33,U_=JSON.parse('{"hips":{"px":[{"frame":0,"value":-0.001872,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0.04,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":-0.04,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":-0.001872,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":-0.001872,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":-0.001872,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":-0.001872,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"py":[{"frame":0,"value":0.677254,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0.6,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0.76,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0.702254,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0.742254,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0.632254,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0.677254,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"pz":[{"frame":0,"value":-0.028365,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":-0.04,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0.02,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":-0.028365,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":-0.028365,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":-0.028365,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":-0.028365,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rx":[{"frame":0,"value":0.369888,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0.52,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0.32,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0.369888,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0.369888,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0.369888,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0.369888,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"ry":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0.24,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":-0.18,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rz":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":-0.1,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0.08,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}]},"head":{"px":[{"frame":0,"value":-0.062912,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":-0.062912,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":-0.062912,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":-0.062912,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":-0.062912,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":-0.062912,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":-0.062912,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"py":[{"frame":0,"value":1.220587,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":1.220587,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":1.220587,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":1.220587,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":1.220587,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":1.220587,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":1.220587,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"pz":[{"frame":0,"value":0.597739,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0.597739,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0.597739,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0.597739,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0.597739,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0.597739,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0.597739,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rx":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"ry":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rz":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}]},"footL":{"px":[{"frame":0,"value":0.16882,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0.16882,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0.16882,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0.16882,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0.16882,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0.16882,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0.16882,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"py":[{"frame":0,"value":0.067857,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0.067857,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0.067857,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0.067857,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0.112857,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0.067857,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0.067857,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"pz":[{"frame":0,"value":0.038724,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0.038724,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0.038724,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0.038724,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0.038724,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0.038724,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0.038724,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rx":[{"frame":0,"value":0.255147,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0.255147,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0.255147,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0.255147,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0.255147,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0.255147,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0.255147,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"ry":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rz":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}]},"footR":{"px":[{"frame":0,"value":-0.450478,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":-0.450478,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":-0.450478,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":-0.450478,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":-0.450478,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":-0.450478,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":-0.450478,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"py":[{"frame":0,"value":0.06672027217523824,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0.06672027217523824,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0.06672027217523824,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0.06672,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0.11172,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0.06672,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0.06672,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"pz":[{"frame":0,"value":-0.09666,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":-0.09666,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":-0.09666,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":-0.09666,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":-0.09666,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":-0.09666,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":-0.09666,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rx":[{"frame":0,"value":-0.009755,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":-0.009755,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":-0.009755,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":-0.009755,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":-0.009755,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":-0.009755,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":-0.009755,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"ry":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rz":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}]},"handL":{"px":[{"frame":0,"value":0.251387,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0.35,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0.28,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0.251387,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0.251387,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0.251387,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0.251387,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"py":[{"frame":0,"value":0.80412,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0.78,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0.86,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0.80412,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0.84412,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0.7741199999999999,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0.80412,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"pz":[{"frame":0,"value":-0.016458,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0.05,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":-0.05,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":-0.016458,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":-0.016458,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":-0.016458,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":-0.016458,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rx":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"ry":[{"frame":0,"value":0.408902,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0.5,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0.35,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0.408902,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0.408902,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0.408902,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0.408902,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rz":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}]},"handR":{"px":[{"frame":0,"value":-0.504796,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0.12,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":-0.38711347008081565,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":-0.504796,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":-0.504796,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":-0.504796,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":-0.504796,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"py":[{"frame":0,"value":0.756381,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0.68,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":1.2451511400866389,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0.756381,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0.796381,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0.7263809999999999,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0.756381,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"pz":[{"frame":0,"value":0.394926,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0.26,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0.5364770968727941,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0.394926,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0.394926,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0.394926,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0.394926,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rx":[{"frame":0,"value":-0.9329488755542719,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":-0.22215548088645917,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":-0.7524072855985319,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":-0.994999,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":-0.994999,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":-0.994999,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":-0.994999,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"ry":[{"frame":0,"value":0.5972110659095866,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":1.500347874160276,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":-1.0552385666164572,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0.020933,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0.020933,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0.020933,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0.020933,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rz":[{"frame":0,"value":-0.05556511326780169,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0.13161268066329992,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":-0.0415493885885945,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}]},"poleKneeL":{"px":[{"frame":0,"value":0.32011,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0.34,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0.32011,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0.32011,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0.32011,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0.32011,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0.32011,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"py":[{"frame":0,"value":0.474629,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0.45,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0.474629,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0.474629,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0.474629,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0.474629,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0.474629,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"pz":[{"frame":0,"value":0.348878,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0.45,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0.348878,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0.348878,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0.348878,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0.408878,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0.348878,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rx":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"ry":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rz":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}]},"poleKneeR":{"px":[{"frame":0,"value":-0.325568,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":-0.3,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":-0.325568,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":-0.325568,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":-0.325568,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":-0.325568,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":-0.325568,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"py":[{"frame":0,"value":0.548968,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0.5,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0.548968,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0.548968,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0.548968,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0.548968,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0.548968,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"pz":[{"frame":0,"value":0.494418,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0.56,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0.494418,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0.494418,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0.494418,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0.5544180000000001,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0.494418,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rx":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"ry":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}],"rz":[{"frame":0,"value":0,"interp":"bezier","handleIn":{"df":-6,"dv":0},"handleOut":{"df":1.0499999999999998,"dv":0}},{"frame":3,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":8,"value":0,"interp":"bezier","handleIn":{"df":-1.75,"dv":0},"handleOut":{"df":4.55,"dv":0}},{"frame":21,"value":0,"interp":"easeOut","handleIn":{"df":-5.8500000000000005,"dv":0},"handleOut":{"df":0.44999999999999996,"dv":0}},{"frame":24,"value":0,"interp":"bezier","handleIn":{"df":-1.0499999999999998,"dv":0},"handleOut":{"df":1.4,"dv":0}},{"frame":28,"value":0,"interp":"bezier","handleIn":{"df":-1.4,"dv":0},"handleOut":{"df":1.75,"dv":0}},{"frame":33,"value":0,"interp":"easeOut","handleIn":{"df":-2.25,"dv":0},"handleOut":{"df":4,"dv":0}}]}}'),F_={fps:D_,totalFrames:N_,tracks:U_},Vt={hips:[-.001872,.677254,-.028365,.369888,0,0],head:[-.062912,1.220587,.597739,0,0,0],footL:[.16882,.067857,.038724,.255147,0,0],footR:[-.450478,.06672,-.09666,-.009755,0,0],handL:[.251387,.80412,-.016458,0,.408902,0],handR:[-.504796,.756381,.394926,-.994999,.020933,0],poleKneeL:[.32011,.474629,.348878,0,0,0],poleKneeR:[-.325568,.548968,.494418,0,0,0]},ea=["px","py","pz","rx","ry","rz"];function rh(r,e,t="bezier"){return{frame:r,value:e,interp:t,handleIn:{df:-2.5,dv:0},handleOut:{df:2.5,dv:0}}}function z_(){const r={};for(const e of Object.keys(Vt)){r[e]={};for(const t of ea)r[e][t]=[]}return r}function vt(r,e,t,n="bezier"){for(const[i,s]of Object.entries(t))r[i]&&ea.forEach((a,o)=>{r[i][a].push(rh(e,s[o],n))})}function er(r,e,t=!1){const n=e+6,i=e+13,s=e+16,a=e+20,o=e+25;if(t){const h=r.footR,u=ea.map(v=>h[v][h[v].length-1].value),p=[.5*(u[0]+Vt.footR[0]),.21,.5*(u[2]+Vt.footR[2]),.5*(u[3]+Vt.footR[3]),.5*(u[4]+Vt.footR[4]),.5*(u[5]+Vt.footR[5])];ea.forEach((v,g)=>{r.footR[v].push(rh(n,p[g]))})}const l=structuredClone(Vt);l.hips[1]+=.025,vt(r,i,l,"easeOut");const d=structuredClone(Vt);d.hips[1]+=.065,d.footL[1]+=.045,d.footR[1]+=.045,d.handL[1]+=.04,d.handR[1]+=.04,vt(r,s,d,"bezier");const c=structuredClone(Vt);return c.hips[1]-=.045,c.poleKneeL[2]+=.06,c.poleKneeR[2]+=.06,c.handL[1]-=.03,c.handR[1]-=.03,vt(r,a,c,"bezier"),vt(r,o,Vt,"easeOut"),o}function Go(r){const e=z_(),t={head:[.45745,1.56,1.02301,0,0,0],footL:[.16882,.06786,.03872,0,0,0],footR:[-.5472,.11536,-.1277,.06759,-.55554,.13547],handL:[.21534,.99529,.23245,-1.61382,.02304,-.00312],poleKneeL:[.12335,.47468,.51534,0,0,0],poleKneeR:[-.90122,.61472,.09146,0,0,0],hips:[-.00504,.73808,-.08417,.49433,-.32614,.17099],handR:[-.59441,.90595,.28175,-1.73611,.78622,-.50773]};return r==="anim_top"?(vt(e,0,t),vt(e,2,{...t,hips:[-.00504,.73808,-.08417,.67418,-.76707,.50636],handR:[-.81296,.95251,.19166,-.8076,.26771,-2.04024]}),vt(e,8,{...t,hips:[-.00504,.73808,-.08417,.47469,.18303,-.09326],handR:[-.13746,1.20865,.45227,-1.91508,.21219,.58854]}),{fps:30,totalFrames:er(e,8,!1),tracks:e}):r==="anim_taglio"?(vt(e,0,t),vt(e,4,{...t,hips:[-.03,.75,-.09,.42,-.56,.25],handL:[.21534,1.04,.23245,-1.61382,.02304,-.00312],handR:[-.66,1.34,.08,-1.05,.52,-.95]}),vt(e,10,{...t,hips:[.02,.68,-.03,.56,.08,.04],handL:[.24,.96,.18,-1.61382,.02304,-.00312],handR:[-.14,.78,.54,-.82,.35,-.35]}),{fps:30,totalFrames:er(e,10,!1),tracks:e}):r==="anim_apertura"?(vt(e,0,t),vt(e,3,{...t,hips:[-.09,.635,-.12,.66,-.88,.46],handL:[.24,.88,.26,-1.61382,.02304,-.00312],handR:[-.78,.66,.14,-.95,.35,-1.65]}),vt(e,9,{...t,hips:[.04,.79,-.02,.41,.28,-.14],handL:[.16,1.06,.16,-1.61382,.02304,-.00312],handR:[-.1,1.44,.46,-2.05,.18,.72]}),{fps:30,totalFrames:er(e,9,!1),tracks:e}):r==="anim_push"?(vt(e,0,t),vt(e,4,{head:[.3,1.42,1.02,0,0,0],footL:t.footL,footR:[-.36,.22,.2,1.5,-.82,1.6],poleKneeL:[.32,.51,.6,0,0,0],poleKneeR:[-.48,.56,.28,0,0,0],handL:[.42,.94,.28,-1.44,.01,0],hips:[.11,.77,-.04,.44,-.16,.08],handR:[-.28,1.02,.32,-.9,-.25,.15]}),vt(e,10,{head:[.13616,1.26034,1.01375,0,0,0],footL:t.footL,footR:[-.18512,.12916,.53736,3.14159,-1.06519,3.14159],poleKneeL:[.52911,.54118,.68186,0,0,0],poleKneeR:[-.09494,.47402,.43109,0,0,0],handL:[.63944,.86254,.327,-1.26911,0,0],hips:[.22317,.80138,-.00322,.39144,0,0],handR:[.07357,.74842,.63956,0,-1.19407,.7609]}),{fps:30,totalFrames:er(e,10,!0),tracks:e}):r==="anim_push_bh"?structuredClone(L_):r==="anim_top_bh"?structuredClone(F_):r==="anim_smash_jump"?(vt(e,0,Vt),vt(e,4,{...t,hips:[-.08,.56,-.12,.62,-.95,.42],poleKneeL:[.2,.44,.58,0,0,0],poleKneeR:[-.85,.52,.25,0,0,0],handL:[.28,.92,.32,-1.4,.1,0],handR:[-.82,1.28,-.16,-.95,.45,-1.75]}),vt(e,9,{...t,head:[.12,1.56,.85,0,0,0],hips:[.02,.94,.08,.38,.36,-.18],footL:[.18,.28,.05,.35,0,0],footR:[-.46,.32,-.04,.25,-.4,0],poleKneeL:[.28,.68,.48,0,0,0],poleKneeR:[-.62,.72,.28,0,0,0],handL:[.36,1.05,.02,-.8,.3,0],handR:[-.06,1.12,.64,-2.15,.15,.75]}),vt(e,13,{...Vt,hips:[0,.59,.02,.46,.12,0],poleKneeL:[.32,.44,.48,0,0,0],poleKneeR:[-.34,.48,.56,0,0,0],handR:[-.28,.82,.48,-1.45,.1,.25]}),{fps:30,totalFrames:er(e,13,!1),tracks:e}):r==="anim_block_bh"?(vt(e,0,Vt),vt(e,3,{...Vt,hips:[0,.66,0,.42,.08,0],handR:[.04,.94,.42,-1.35,.15,.25]}),vt(e,7,{...Vt,hips:[0,.67,.02,.44,-.05,0],handR:[-.04,.96,.56,-1.55,.05,.05]}),{fps:30,totalFrames:er(e,7,!1),tracks:e}):null}class B_{constructor(e,t,n){this.timeline=e,this.ik=t,this.cb=n,this.rulerCanvas=document.getElementById("ds-ruler-canvas"),this.keysCanvas=document.getElementById("ds-keys-canvas"),this.tracksList=document.getElementById("ds-tracks-list"),this.selectedTargetId=null,this.selectedKey=null,this.draggingScrub=!1,this.draggingKey=null,this.trackOrder=[],this.rowHeight=24,this._bindEvents()}setSelectedTarget(e){this.selectedTargetId=e,this.rebuildTrackList(),this.render()}rebuildTrackList(){this.trackOrder=Object.keys(this.ik.targets),this.tracksList.innerHTML="";for(const t of this.trackOrder){const n=this.ik.targets[t],i=document.createElement("div");i.className=`ds-track-row${t===this.selectedTargetId?" active":""}`,i.innerHTML=`<span class="handle-dot" style="background:${n.color}"></span><span>${n.label}</span>`,i.addEventListener("click",()=>{this.cb.onSelectTarget(t)}),this.tracksList.appendChild(i)}const e=Math.max(this.trackOrder.length*this.rowHeight,120);this.keysCanvas.style.height=`${e}px`,this.render()}_frameToX(e,t){const i=Math.max(t-24,10);return 12+e/Math.max(this.timeline.totalFrames,1)*i}_xToFrame(e,t){const i=Math.max(t-24,10),s=(e-12)/i*this.timeline.totalFrames;return Math.max(0,Math.min(this.timeline.totalFrames,Math.round(s)))}_bindEvents(){const e=t=>{const n=this.rulerCanvas.getBoundingClientRect(),i=this._xToFrame(t.clientX-n.left,n.width);this.cb.onFrameChange(i)};this.rulerCanvas.addEventListener("pointerdown",t=>{this.draggingScrub=!0,this.rulerCanvas.setPointerCapture(t.pointerId),e(t)}),this.rulerCanvas.addEventListener("pointermove",t=>{this.draggingScrub&&e(t)}),this.rulerCanvas.addEventListener("pointerup",t=>{this.draggingScrub=!1;try{this.rulerCanvas.releasePointerCapture(t.pointerId)}catch{}}),this.keysCanvas.addEventListener("pointerdown",t=>{const n=this.keysCanvas.getBoundingClientRect(),i=t.clientX-n.left,s=t.clientY-n.top,a=Math.floor(s/this.rowHeight),o=this.trackOrder[a];if(o){const d=this.timeline.getTrackKeyframeFrames(o);let c=null;for(const h of d){const u=this._frameToX(h,n.width);if(Math.abs(u-i)<=7){c=h;break}}if(c!==null){this.selectedKey={targetId:o,frame:c},this.draggingKey={targetId:o,origFrame:c,currentFrame:c},this.keysCanvas.setPointerCapture(t.pointerId),this.cb.onSelectTarget(o),this.cb.onFrameChange(c),this.render();return}}this.selectedKey=null,this.draggingScrub=!0,this.keysCanvas.setPointerCapture(t.pointerId);const l=this._xToFrame(i,n.width);this.cb.onFrameChange(l)}),this.keysCanvas.addEventListener("pointermove",t=>{const n=this.keysCanvas.getBoundingClientRect(),i=t.clientX-n.left;if(this.draggingKey){const s=this._xToFrame(i,n.width);if(s!==this.draggingKey.currentFrame){const a=this.timeline.moveTargetKeyframe(this.draggingKey.targetId,this.draggingKey.currentFrame,s);this.draggingKey.currentFrame=a,this.selectedKey={targetId:this.draggingKey.targetId,frame:a},this.cb.onFrameChange(a),this.cb.onKeyframeEdited()}}else if(this.draggingScrub){const s=this._xToFrame(i,n.width);this.cb.onFrameChange(s)}}),this.keysCanvas.addEventListener("pointerup",t=>{this.draggingKey=null,this.draggingScrub=!1;try{this.keysCanvas.releasePointerCapture(t.pointerId)}catch{}}),window.addEventListener("resize",()=>this.render())}render(){this._renderRuler(),this._renderKeys()}_syncCanvasSize(e){const t=e.getBoundingClientRect(),n=window.devicePixelRatio||1,i=Math.max(1,Math.floor(t.width*n)),s=Math.max(1,Math.floor(t.height*n));(e.width!==i||e.height!==s)&&(e.width=i,e.height=s);const a=e.getContext("2d");return a.setTransform(n,0,0,n,0,0),{ctx:a,width:t.width,height:t.height}}_renderRuler(){const{ctx:e,width:t,height:n}=this._syncCanvasSize(this.rulerCanvas);e.clearRect(0,0,t,n);const i=this.timeline.totalFrames,s=i<=60?5:i<=150?10:20;e.strokeStyle="rgba(255,255,255,0.12)",e.fillStyle="#9098ab",e.font="10px JetBrains Mono, monospace",e.textAlign="center";for(let o=0;o<=i;o+=s){const l=this._frameToX(o,t);e.beginPath(),e.moveTo(l,n-8),e.lineTo(l,n),e.stroke(),e.fillText(String(o),l,11)}const a=this._frameToX(this.timeline.currentFrame,t);e.fillStyle="#4c8bf5",e.beginPath(),e.moveTo(a-6,0),e.lineTo(a+6,0),e.lineTo(a+6,12),e.lineTo(a,20),e.lineTo(a-6,12),e.closePath(),e.fill()}_renderKeys(){const{ctx:e,width:t,height:n}=this._syncCanvasSize(this.keysCanvas);e.clearRect(0,0,t,n);const i=this.timeline.totalFrames,s=i<=60?5:i<=150?10:20;e.strokeStyle="rgba(255,255,255,0.05)",e.lineWidth=1;for(let o=0;o<=i;o+=s){const l=this._frameToX(o,t);e.beginPath(),e.moveTo(l,0),e.lineTo(l,n),e.stroke()}this.trackOrder.forEach((o,l)=>{const d=l*this.rowHeight,c=d+this.rowHeight/2;o===this.selectedTargetId&&(e.fillStyle="rgba(76, 139, 245, 0.08)",e.fillRect(0,d,t,this.rowHeight)),e.strokeStyle="rgba(255,255,255,0.04)",e.beginPath(),e.moveTo(0,d+this.rowHeight),e.lineTo(t,d+this.rowHeight),e.stroke();const h=this.timeline.getTrackKeyframeFrames(o);for(const u of h){const p=this._frameToX(u,t),v=this.selectedKey&&this.selectedKey.targetId===o&&this.selectedKey.frame===u;e.save(),e.translate(p,c),e.rotate(Math.PI/4),e.fillStyle=v?"#ffffff":"#f5a623",e.strokeStyle="#14161a",e.lineWidth=1.5;const g=v?5:4;e.fillRect(-g,-g,g*2,g*2),e.strokeRect(-g,-g,g*2,g*2),e.restore()}});const a=this._frameToX(this.timeline.currentFrame,t);e.strokeStyle="#4c8bf5",e.lineWidth=1.5,e.beginPath(),e.moveTo(a,0),e.lineTo(a,n),e.stroke()}}const ks=[{key:"px",label:"X",color:"#ef5350"},{key:"py",label:"Y",color:"#66bb6a"},{key:"pz",label:"Z",color:"#42a5f5"}];class k_{constructor(e,t,n){this.timeline=e,this.ik=t,this.cb=n,this.canvas=document.getElementById("graph-canvas"),this.targetLabel=document.getElementById("graph-target-label"),this.selectedTargetId=null,this.visibleChannels={px:!0,py:!0,pz:!0},this.minVal=-1,this.maxVal=2,this.selectedNode=null,this.drag=null,this._bindEvents()}setSelectedTarget(e){this.selectedTargetId=e,this.selectedNode=null;const t=this.ik.targets[e];this.targetLabel.textContent=t?`(${t.label})`:"(Seleziona un controller)",this.fitView(),this.render()}fitView(){if(!this.selectedTargetId)return;const e=this.timeline.tracks[this.selectedTargetId];let t=1/0,n=-1/0;if(e)for(const s of ks){if(!this.visibleChannels[s.key])continue;const a=e[s.key];if(a)for(const o of a)t=Math.min(t,o.value),n=Math.max(n,o.value)}if(!Number.isFinite(t)||!Number.isFinite(n)){const s=this.ik.targets[this.selectedTargetId];s?(t=Math.min(s.position.x,s.position.y,s.position.z)-.5,n=Math.max(s.position.x,s.position.y,s.position.z)+.5):(t=-1,n=2)}const i=Math.max(n-t,.4);this.minVal=t-i*.25,this.maxVal=n+i*.25}applyEasingPreset(e){if(!this.selectedTargetId)return;const t=this.timeline.tracks[this.selectedTargetId];if(t){if(this.selectedNode){const n=t[this.selectedNode.channel],i=n&&n[this.selectedNode.index];i&&(i.interp=e,i.customHandles=!1,this.timeline._recomputeAutoHandles(n))}else for(const n of ks){if(!this.visibleChannels[n.key])continue;const i=t[n.key];if(i){for(const s of i)s.interp=e,s.customHandles=!1;this.timeline._recomputeAutoHandles(i)}}this._syncEaseButtons(e),this.cb.onCurveEdited(),this.render()}}_syncEaseButtons(e){document.querySelectorAll(".ease-btn").forEach(t=>{t.classList.toggle("active",t.dataset.ease===e)})}_frameToX(e,t){const i=Math.max(t-52,10);return 26+e/Math.max(this.timeline.totalFrames,1)*i}_xToFrame(e,t){const i=Math.max(t-52,10);return Math.max(0,Math.min(this.timeline.totalFrames,Math.round((e-26)/i*this.timeline.totalFrames)))}_valToY(e,t){const i=Math.max(t-36,10),s=(e-this.minVal)/Math.max(this.maxVal-this.minVal,1e-4);return t-18-s*i}_yToVal(e,t){const i=Math.max(t-36,10),s=(t-18-e)/i;return this.minVal+s*(this.maxVal-this.minVal)}_bindEvents(){document.getElementById("chk-ch-x").addEventListener("change",e=>{this.visibleChannels.px=e.target.checked,this.render()}),document.getElementById("chk-ch-y").addEventListener("change",e=>{this.visibleChannels.py=e.target.checked,this.render()}),document.getElementById("chk-ch-z").addEventListener("change",e=>{this.visibleChannels.pz=e.target.checked,this.render()}),document.getElementById("btn-graph-fit").addEventListener("click",()=>{this.fitView(),this.render()}),document.querySelectorAll(".ease-btn").forEach(e=>{e.addEventListener("click",()=>this.applyEasingPreset(e.dataset.ease))}),this.canvas.addEventListener("pointerdown",e=>{var a,o,l,d;const t=this.canvas.getBoundingClientRect(),n=e.clientX-t.left,i=e.clientY-t.top;if(!this.selectedTargetId)return;const s=this.timeline.tracks[this.selectedTargetId];if(s){if(this.selectedNode){const c=s[this.selectedNode.channel],h=c&&c[this.selectedNode.index];if(h&&h.interp!=="linear"&&h.interp!=="step"){const u=this._frameToX(h.frame+(((a=h.handleIn)==null?void 0:a.df)??-6),t.width),p=this._valToY(h.value+(((o=h.handleIn)==null?void 0:o.dv)??0),t.height);if(Math.hypot(n-u,i-p)<=8){this.drag={type:"handleIn",...this.selectedNode},this.canvas.setPointerCapture(e.pointerId);return}const v=this._frameToX(h.frame+(((l=h.handleOut)==null?void 0:l.df)??6),t.width),g=this._valToY(h.value+(((d=h.handleOut)==null?void 0:d.dv)??0),t.height);if(Math.hypot(n-v,i-g)<=8){this.drag={type:"handleOut",...this.selectedNode},this.canvas.setPointerCapture(e.pointerId);return}}}for(const c of ks){if(!this.visibleChannels[c.key])continue;const h=s[c.key];if(h)for(let u=0;u<h.length;u++){const p=h[u],v=this._frameToX(p.frame,t.width),g=this._valToY(p.value,t.height);if(Math.hypot(n-v,i-g)<=8){this.selectedNode={channel:c.key,index:u},this._syncEaseButtons(p.interp||"bezier"),this.drag={type:"key",channel:c.key,index:u},this.canvas.setPointerCapture(e.pointerId),this.cb.onFrameChange(p.frame),this.render();return}}}this.selectedNode=null,this.drag={type:"scrub"},this.canvas.setPointerCapture(e.pointerId),this.cb.onFrameChange(this._xToFrame(n,t.width)),this.render()}}),this.canvas.addEventListener("pointermove",e=>{if(!this.drag)return;const t=this.canvas.getBoundingClientRect(),n=e.clientX-t.left,i=e.clientY-t.top;if(this.drag.type==="scrub"){this.cb.onFrameChange(this._xToFrame(n,t.width));return}const s=this.timeline.tracks[this.selectedTargetId],a=s&&s[this.drag.channel],o=a&&a[this.drag.index];if(o){if(this.drag.type==="key"){o.value=this._yToVal(i,t.height);const l=this._xToFrame(n,t.width),d=this.drag.index>0?a[this.drag.index-1].frame+1:0,c=this.drag.index<a.length-1?a[this.drag.index+1].frame-1:this.timeline.totalFrames;o.frame=Math.max(d,Math.min(c,l)),this.timeline._recomputeAutoHandles(a),this.cb.onFrameChange(o.frame),this.cb.onCurveEdited()}else if(this.drag.type==="handleIn"){const l=this._xToFrame(n,t.width),d=this._yToVal(i,t.height);o.customHandles=!0,o.interp="bezier",o.handleIn={df:Math.min(-.5,l-o.frame),dv:d-o.value},this.cb.onCurveEdited()}else if(this.drag.type==="handleOut"){const l=this._xToFrame(n,t.width),d=this._yToVal(i,t.height);o.customHandles=!0,o.interp="bezier",o.handleOut={df:Math.max(.5,l-o.frame),dv:d-o.value},this.cb.onCurveEdited()}this.render()}}),this.canvas.addEventListener("pointerup",e=>{this.drag=null;try{this.canvas.releasePointerCapture(e.pointerId)}catch{}}),this.canvas.addEventListener("wheel",e=>{e.preventDefault();const t=.5*(this.minVal+this.maxVal),n=.5*(this.maxVal-this.minVal),i=e.deltaY>0?1.12:.89,s=Math.max(.05,Math.min(20,n*i));this.minVal=t-s,this.maxVal=t+s,this.render()},{passive:!1}),window.addEventListener("resize",()=>this.render())}render(){var p,v,g,m;const e=this.canvas.getBoundingClientRect();if(e.width<=0||e.height<=0)return;const t=window.devicePixelRatio||1,n=Math.floor(e.width*t),i=Math.floor(e.height*t);(this.canvas.width!==n||this.canvas.height!==i)&&(this.canvas.width=n,this.canvas.height=i);const s=this.canvas.getContext("2d");s.setTransform(t,0,0,t,0,0);const a=e.width,o=e.height;s.clearRect(0,0,a,o),s.font="10px JetBrains Mono, monospace",s.fillStyle="#6f778a";const l=4;for(let f=0;f<=l;f++){const y=this.minVal+(this.maxVal-this.minVal)*f/l,b=this._valToY(y,o);s.strokeStyle=Math.abs(y)<.01?"rgba(255,255,255,0.2)":"rgba(255,255,255,0.05)",s.beginPath(),s.moveTo(26,b),s.lineTo(a-10,b),s.stroke(),s.fillText(y.toFixed(1),2,b+3)}const d=this.timeline.totalFrames,c=d<=60?10:15;for(let f=0;f<=d;f+=c){const y=this._frameToX(f,a);s.strokeStyle="rgba(255,255,255,0.05)",s.beginPath(),s.moveTo(y,0),s.lineTo(y,o),s.stroke()}const h=this._frameToX(this.timeline.currentFrame,a);if(s.strokeStyle="rgba(76, 139, 245, 0.8)",s.lineWidth=1.5,s.beginPath(),s.moveTo(h,0),s.lineTo(h,o),s.stroke(),!this.selectedTargetId)return;const u=this.timeline.tracks[this.selectedTargetId];if(!u){s.fillStyle="#6f778a",s.font="12px Inter, sans-serif",s.fillText('Premi I o "+ Keyframe" per creare curve di animazione',44,o/2);return}for(const f of ks){if(!this.visibleChannels[f.key])continue;const y=u[f.key];if(!y||y.length===0)continue;s.strokeStyle=f.color,s.lineWidth=2,s.beginPath();const b=y[0].frame,_=y[y.length-1].frame;if(y.length===1){const C=this._valToY(y[0].value,o);s.moveTo(this._frameToX(0,a),C),s.lineTo(this._frameToX(d,a),C)}else{const C=this._valToY(y[0].value,o);s.moveTo(this._frameToX(0,a),C),s.lineTo(this._frameToX(b,a),C);const R=Math.max(60,(_-b)*2);for(let I=0;I<=R;I++){const S=b+(_-b)*I/R,x=this.timeline.evaluateChannel(this.selectedTargetId,f.key,S);s.lineTo(this._frameToX(S,a),this._valToY(x,o))}const E=this._valToY(y[y.length-1].value,o);s.lineTo(this._frameToX(d,a),E)}s.stroke();for(let C=0;C<y.length;C++){const R=y[C],E=this._frameToX(R.frame,a),I=this._valToY(R.value,o),S=this.selectedNode&&this.selectedNode.channel===f.key&&this.selectedNode.index===C;if(S&&R.interp!=="linear"&&R.interp!=="step"){const x=this._frameToX(R.frame+(((p=R.handleIn)==null?void 0:p.df)??-6),a),P=this._valToY(R.value+(((v=R.handleIn)==null?void 0:v.dv)??0),o),z=this._frameToX(R.frame+(((g=R.handleOut)==null?void 0:g.df)??6),a),F=this._valToY(R.value+(((m=R.handleOut)==null?void 0:m.dv)??0),o);s.strokeStyle="rgba(255,255,255,0.6)",s.lineWidth=1.2,s.beginPath(),s.moveTo(x,P),s.lineTo(E,I),s.lineTo(z,F),s.stroke();for(const[G,W]of[[x,P],[z,F]])s.fillStyle="#ffd166",s.beginPath(),s.arc(G,W,4,0,Math.PI*2),s.fill()}s.fillStyle=S?"#ffffff":f.color,s.strokeStyle="#14161a",s.lineWidth=1.5,s.beginPath(),s.arc(E,I,S?5.5:4,0,Math.PI*2),s.fill(),s.stroke()}}}}const Ka=[{key:"1",id:"anim_top",label:"Top Dritto",hitFrame:6,speed:5.2,arcY:1.5,spin:"top"},{key:"2",id:"anim_top_bh",label:"Top Rovescio",hitFrame:6,speed:5,arcY:1.55,spin:"top"},{key:"3",id:"anim_push",label:"Push Dritto",hitFrame:7,speed:3.1,arcY:1.9,spin:"back"},{key:"4",id:"anim_push_bh",label:"Push Rovescio",hitFrame:7,speed:3.1,arcY:1.9,spin:"back"},{key:"5",id:"anim_apertura",label:"Apertura Taglio",hitFrame:6,speed:4.8,arcY:2.1,spin:"top"},{key:"6",id:"anim_smash_jump",label:"Smash Salto",hitFrame:8,speed:7.4,arcY:.7,spin:"smash"},{key:"7",id:"anim_block_bh",label:"Block Rovescio",hitFrame:5,speed:4,arcY:1.4,spin:"flat"}],_n=.76,Kr=.65,wn=3.39,ci=(Kr+wn)*.5,tr=.7625,ja=.022,H_=-9.8;class V_{constructor(e,t,n,i,s,a){this.scene=e,this.camera=t,this.orbit=n,this.ik=i,this.timeline=s,this.cb=a,this.active=!1,this.group=new dn,this.group.name="MiniGameGroup",this.group.visible=!1,this.scene.add(this.group),this.score=0,this.streak=0,this.bestStreak=0,this.ballPos=new A(0,1.2,2.9),this.ballVel=new A(0,0,0),this.ballPhase="waiting",this.ballType="normal",this.playerHasBounced=!1,this.opponentHasBounced=!1,this.waitTimer=.8,this.playingStroke=null,this.strokeAnim=null,this.strokeFrame=0,this.hitChecked=!1,this._buildTableAndBall(),this._buildHUD()}_buildTableAndBall(){const e=wn-Kr,t=tr*2,n=new ut(t,.04,e),i=new Yn({color:"#1b4d89",roughness:.45,metalness:.05}),s=new ne(n,i);s.position.set(0,_n-.02,ci),s.receiveShadow=!0,s.castShadow=!0,this.group.add(s);const a=new ln({color:"#ffffff"}),o=(f,y,b,_)=>{const C=new ne(new Ui(f,y),a);C.rotation.x=-Math.PI/2,C.position.set(b,_n+.001,_),this.group.add(C)};o(t,.02,0,Kr+.01),o(t,.02,0,wn-.01),o(.02,e,-tr+.01,ci),o(.02,e,tr-.01,ci),o(.008,e,0,ci);const l=new ut(.05,_n-.04,.05),d=new Yn({color:"#1e222b",roughness:.7});for(const f of[-tr+.12,tr-.12])for(const y of[Kr+.25,wn-.25]){const b=new ne(l,d);b.position.set(f,(_n-.04)/2,y),b.castShadow=!0,this.group.add(b)}const c=new ut(t+.16,.1525,.01),h=new Yn({color:"#e2e8f0",transparent:!0,opacity:.55,roughness:.8}),u=new ne(c,h);u.position.set(0,_n+.1525/2,ci),this.group.add(u);const p=new ne(new ut(t+.16,.015,.014),new ln({color:"#ffffff"}));p.position.set(0,_n+.1525,ci),this.group.add(p);const v=new _r(ja,18,18),g=new Yn({color:"#ff9f1c",emissive:"#ff6b00",emissiveIntensity:.25,roughness:.3});this.ballMesh=new ne(v,g),this.ballMesh.castShadow=!0,this.group.add(this.ballMesh);const m=new Pt(.085,.085,.014,24);m.rotateX(Math.PI/2),this.oppPaddle=new ne(m,new Yn({color:"#ef4444",roughness:.4})),this.oppPaddle.position.set(0,_n+.28,wn+.25),this.group.add(this.oppPaddle)}_buildHUD(){this.hud=document.createElement("div"),this.hud.id="minigame-hud",this.hud.className="hidden",this.hud.innerHTML=`
      <div class="mg-topbar">
        <div class="mg-stats">
          <span>🏆 Punti: <strong id="mg-score">0</strong></span>
          <span>🔥 Serie: <strong id="mg-streak">0</strong></span>
          <span>⭐ Record: <strong id="mg-best">0</strong></span>
        </div>
        <div id="mg-ball-type" class="mg-pill">In attesa servizio...</div>
        <button id="mg-exit-btn" class="btn btn-danger btn-sm">✕ Esci dal Minigioco</button>
      </div>
      <div id="mg-feedback" class="mg-feedback"></div>
      <div class="mg-controls">
        ${Ka.map(e=>`<button class="mg-stroke-btn" data-stroke="${e.id}"><kbd>${e.key}</kbd> ${e.label}</button>`).join("")}
      </div>
    `,document.getElementById("viewport-container").appendChild(this.hud),this.hud.querySelector("#mg-exit-btn").addEventListener("click",()=>this.stop()),this.hud.querySelectorAll(".mg-stroke-btn").forEach(e=>{e.addEventListener("click",()=>this.triggerStroke(e.dataset.stroke))}),window.addEventListener("keydown",e=>{if(!this.active)return;const t=Ka.find(n=>n.key===e.key);t?(e.preventDefault(),this.triggerStroke(t.id)):e.key==="Escape"&&this.stop()})}start(){this.active=!0,this.group.visible=!0,this.hud.classList.remove("hidden"),this._savedCamPos=this.camera.position.clone(),this._savedOrbitTarget=this.orbit.target.clone(),this.camera.position.set(-1.35,1.85,-1.15),this.orbit.target.set(0,.9,1.8),this._applyIdlePose(),this.score=0,this.streak=0,this._updateStats(),this.ballPhase="waiting",this.waitTimer=.7,this._showFeedback("PRONTO!","#60a5fa")}stop(){this.active&&(this.active=!1,this.group.visible=!1,this.hud.classList.add("hidden"),this._savedCamPos&&this.camera.position.copy(this._savedCamPos),this._savedOrbitTarget&&this.orbit.target.copy(this._savedOrbitTarget),this.cb.onExit())}_applyIdlePose(){const e=Go("anim_top");if(e){this.timeline.fromJSON(e);const t=e.totalFrames,n=this.timeline.evaluatePose(t);this.ik.applyPose(n)}}triggerStroke(e){if(!this.active)return;const t=Ka.find(i=>i.id===e),n=Go(e);!t||!n||(this.playingStroke=t,this.strokeAnim=n,this.strokeFrame=0,this.hitChecked=!1,this.timeline.fromJSON(n),this.hud.querySelectorAll(".mg-stroke-btn").forEach(i=>{i.classList.toggle("active",i.dataset.stroke===e)}))}_serveToPlayer(){const e=["normal","backspin","lob","short"];this.ballType=e[Math.floor(Math.random()*e.length)];const t=document.getElementById("mg-ball-type"),n={normal:{text:"⚪ Palla Liscia (Top / Block)",color:"#93c5fd"},backspin:{text:"🟣 Palla Tagliata (Apertura / Push)",color:"#c4b5fd"},lob:{text:"🟡 Palla Alta! (Smash con Salto!)",color:"#fde047"},short:{text:"🟢 Palla Corta (Push / Passo Avanti!)",color:"#86efac"}};t.textContent=n[this.ballType].text,t.style.color=n[this.ballType].color;const i=(Math.random()-.5)*.55;this.ballPos.set((Math.random()-.5)*.3,_n+.25,wn-.1),this.oppPaddle.position.set(this.ballPos.x,this.ballPos.y,wn+.15),this.ballType==="lob"?this.ballVel.set((i-this.ballPos.x)*.85,3.6,-2.55):this.ballType==="short"?this.ballVel.set((i-this.ballPos.x)*1.1,2.2,-2):this.ballType==="backspin"?this.ballVel.set((i-this.ballPos.x)*.95,2,-2.5):this.ballVel.set((i-this.ballPos.x)*1,1.9,-2.9),this.ballPhase="toPlayer",this.playerHasBounced=!1,this.opponentHasBounced=!1}_checkHit(){if(!this.playingStroke||this.hitChecked||this.ballPhase!=="toPlayer")return;const e=this.ballPos.z>=-.15&&this.ballPos.z<=1.25,t=this.ballPos.y>=_n-.1&&this.ballPos.y<=1.65;if(e&&t&&this.playerHasBounced){this.hitChecked=!0;const n=this.playingStroke;let i=10,s="COLPO!",a="#4cc38a";this.ballType==="lob"&&n.id==="anim_smash_jump"?(i=30,s="SMASH PERFETTO! +30",a="#fde047"):this.ballType==="backspin"&&(n.id==="anim_apertura"||n.id.includes("push"))?(i=20,s="OTTIMA LETTURA! +20",a="#a78bfa"):this.ballType==="short"&&n.id.includes("push")&&(i=20,s="PUSH PRECISO! +20",a="#4cc38a"),this.score+=i,this.streak+=1,this.bestStreak=Math.max(this.bestStreak,this.streak),this._updateStats(),this._showFeedback(s,a);const o=(Math.random()-.5)*.7,l=wn-.5-this.ballPos.z,d=n.speed,c=l/d,h=(o-this.ballPos.x)/Math.max(c,.25);this.ballVel.set(h,n.arcY,d),this.ballPhase="toOpponent",this.opponentHasBounced=!1}}update(e){var i;if(!this.active)return;if(this.playingStroke&&this.strokeAnim)if(this.strokeFrame+=e*this.strokeAnim.fps,!this.hitChecked&&this.strokeFrame>=this.playingStroke.hitFrame-2&&this.strokeFrame<=this.playingStroke.hitFrame+4&&this._checkHit(),this.strokeFrame>=this.strokeAnim.totalFrames){const s=this.timeline.evaluatePose(this.strokeAnim.totalFrames);this.ik.applyPose(s),this.playingStroke=null,this.hud.querySelectorAll(".mg-stroke-btn").forEach(a=>a.classList.remove("active"))}else{const s=this.timeline.evaluatePose(this.strokeFrame);this.ik.applyPose(s)}if(this.ballPhase==="waiting"){this.waitTimer-=e,this.waitTimer<=0&&this._serveToPlayer();return}let t=H_;this.ballPhase==="toPlayer"&&this.ballType==="backspin"&&(t*=.82),this.ballPhase==="toOpponent"&&((i=this.playingStroke)==null?void 0:i.spin)==="top"&&(t*=1.25),this.ballVel.y+=t*e,this.ballPos.addScaledVector(this.ballVel,e),Math.abs(this.ballPos.x)<=tr&&this.ballPos.z>=Kr&&this.ballPos.z<=wn&&this.ballPos.y<=_n+ja&&this.ballVel.y<0&&(this.ballPos.y=_n+ja,this.ballVel.y=-this.ballVel.y*.82,this.ballPhase==="toPlayer"&&this.ballPos.z<ci?this.playerHasBounced=!0:this.ballPhase==="toOpponent"&&this.ballPos.z>ci&&(this.opponentHasBounced=!0)),this.ballPhase==="toPlayer"&&(this.ballPos.z<-.5||this.ballPos.y<.05)?(this.streak=0,this._updateStats(),this._showFeedback("PERSA!","#e05a5a"),this.ballPhase="waiting",this.waitTimer=.9):this.ballPhase==="toOpponent"&&(this.ballPos.z>wn+.15||this.ballPos.y<.05)&&(this.opponentHasBounced?this._serveToPlayer():(this.streak=0,this._updateStats(),this._showFeedback("FUORI!","#f5a623"),this.ballPhase="waiting",this.waitTimer=.9)),this.ballMesh.position.copy(this.ballPos)}_updateStats(){document.getElementById("mg-score").textContent=String(this.score),document.getElementById("mg-streak").textContent=String(this.streak),document.getElementById("mg-best").textContent=String(this.bestStreak)}_showFeedback(e,t){const n=document.getElementById("mg-feedback");n.textContent=e,n.style.color=t,n.classList.remove("pop"),n.offsetWidth,n.classList.add("pop")}}const G_=document.getElementById("three-canvas"),dc=document.getElementById("viewport-container"),hn=new Rv({canvas:G_,antialias:!0});hn.setPixelRatio(Math.min(window.devicePixelRatio,2));hn.shadowMap.enabled=!0;hn.shadowMap.type=pc;hn.toneMapping=vc;hn.toneMappingExposure=1.1;const un=new Cv;un.background=new Me("#181b22");un.fog=new sl("#181b22",8,22);const $n=new Gt(45,1,.05,50);$n.position.set(1.8,1.45,2.6);const Ir=new xg($n,hn.domElement);Ir.enableDamping=!0;Ir.dampingFactor=.08;Ir.target.set(0,.9,0);const W_=new eg(14412542,2764605,.9);un.add(W_);const En=new hl(16777215,2.1);En.position.set(3,5,4);En.castShadow=!0;En.shadow.mapSize.set(2048,2048);En.shadow.camera.near=.5;En.shadow.camera.far=15;const sa=2.5;En.shadow.camera.left=-sa;En.shadow.camera.right=sa;En.shadow.camera.top=sa;En.shadow.camera.bottom=-sa;En.shadow.bias=-5e-4;un.add(En);const sh=new hl(6333946,.9);sh.position.set(-3,3,-3);un.add(sh);const X_=new Ui(30,30),Y_=new Yn({color:"#1b1f27",roughness:.85,metalness:.1}),ml=new ne(X_,Y_);ml.rotation.x=-Math.PI/2;ml.receiveShadow=!0;un.add(ml);const ah=new gg(12,24,3883604,2501430);ah.position.y=.001;un.add(ah);const Et=new M_(un),Pe=new A_(Et),bt=new w_(un,Pe),xe=new R_;let _t=null,oh=!0,Wo=new A;const Bt=new Og($n,hn.domElement);Bt.setSize(.75);un.add(Bt.getHelper?Bt.getHelper():Bt);const Rt=new B_(xe,Pe,{onFrameChange:r=>Rn(r),onSelectTarget:r=>aa(r),onKeyframeEdited:()=>{Rn(xe.currentFrame),an(),Tt.render()}}),Tt=new k_(xe,Pe,{onFrameChange:r=>Rn(r),onCurveEdited:()=>{vl(xe.currentFrame),an(),Rt.render()}});Bt.addEventListener("dragging-changed",r=>{Ir.enabled=!r.value,r.value&&Pe.targets.hips&&Wo.copy(Pe.targets.hips.position),!r.value&&xe.autoKey&&_t&&(xe.setTargetKeyframe(_t,Pe.targets[_t],xe.currentFrame),Rt.render(),Tt.fitView(),Tt.render(),an())});Bt.addEventListener("objectChange",()=>{if(!_t)return;const r=bt.handleMeshes[_t],e=Pe.targets[_t];if(!(!r||!e)){if(_t==="hips"&&!Pe.footPinning){const t=r.position.clone().sub(Wo);for(const n of["footL","footR","poleKneeL","poleKneeR"])Pe.targets[n]&&Pe.targets[n].position.add(t);Wo.copy(r.position)}e.position.copy(r.position),e.rotation.copy(r.rotation),Pe.solve(),bt.syncFromSolver(),Mr()}});const cc=new Qc,Za=new Ee;let Xo={x:0,y:0};hn.domElement.addEventListener("pointerdown",r=>{Xo={x:r.clientX,y:r.clientY}});hn.domElement.addEventListener("pointerup",r=>{if(Math.hypot(r.clientX-Xo.x,r.clientY-Xo.y)>5||Bt.dragging)return;const t=hn.domElement.getBoundingClientRect();Za.x=(r.clientX-t.left)/t.width*2-1,Za.y=-((r.clientY-t.top)/t.height)*2+1,cc.setFromCamera(Za,$n);const n=cc.intersectObjects(bt.getPickableMeshes(),!1);if(n.length>0){const i=n[0].object.userData.ikId;i&&aa(i)}});function aa(r){_t=r,bt.select(r);const e=bt.handleMeshes[r];e?Bt.attach(e):Bt.detach(),document.querySelectorAll(".handle-pill").forEach(n=>{n.classList.toggle("active",n.dataset.id===r)});const t=Pe.targets[r];document.getElementById("selected-name").textContent=t?t.label:"Nessuno",Mr(),Rt.setSelectedTarget(r),Tt.setSelectedTarget(r),an()}function Mr(){const r=_t?Pe.targets[_t]:null,e=["px","py","pz","rx","ry","rz"];if(!r){e.forEach(t=>document.getElementById(`inp-${t}`).value="");return}document.getElementById("inp-px").value=r.position.x.toFixed(3),document.getElementById("inp-py").value=r.position.y.toFixed(3),document.getElementById("inp-pz").value=r.position.z.toFixed(3),document.getElementById("inp-rx").value=ft.radToDeg(r.rotation.x).toFixed(1),document.getElementById("inp-ry").value=ft.radToDeg(r.rotation.y).toFixed(1),document.getElementById("inp-rz").value=ft.radToDeg(r.rotation.z).toFixed(1)}function q_(){const r=[["px",(e,t)=>e.position.x=t],["py",(e,t)=>e.position.y=t],["pz",(e,t)=>e.position.z=t],["rx",(e,t)=>e.rotation.x=ft.degToRad(t)],["ry",(e,t)=>e.rotation.y=ft.degToRad(t)],["rz",(e,t)=>e.rotation.z=ft.degToRad(t)]];for(const[e,t]of r)document.getElementById(`inp-${e}`).addEventListener("change",n=>{if(!_t||!Pe.targets[_t])return;const i=parseFloat(n.target.value);Number.isFinite(i)&&(t(Pe.targets[_t],i),Pe.solve(),bt.syncFromSolver(),xe.autoKey&&(xe.setTargetKeyframe(_t,Pe.targets[_t],xe.currentFrame),Rt.render(),Tt.render()))})}function K_(){const r=document.getElementById("handle-list");r.innerHTML="";for(const[e,t]of Object.entries(Pe.targets)){const n=document.createElement("button");n.className="handle-pill",n.dataset.id=e,n.innerHTML=`<span class="handle-dot" style="background:${t.color}"></span><span>${t.label}</span>`,n.addEventListener("click",()=>aa(e)),r.appendChild(n)}}function Rn(r){xe.currentFrame=Math.max(0,Math.min(xe.totalFrames,r)),document.getElementById("inp-frame").value=Math.round(xe.currentFrame),vl(xe.currentFrame),Rt.render(),Tt.render()}function vl(r){const e=xe.evaluatePose(r);Object.keys(e).length>0&&(Pe.applyPose(e),bt.syncFromSolver(),Mr())}function an(){if(!oh||!_t){bt.updateMotionPath([],!1);return}const r=xe.sampleMotionPath(_t,70);bt.updateMotionPath(r,r.length>=2)}function jr(){xe.isPlaying=!xe.isPlaying;const r=document.getElementById("btn-play");r.textContent=xe.isPlaying?"⏸":"▶",r.classList.toggle("playing",xe.isPlaying)}function js(r){if(!r)return;const e=Go(r);if(e){xe.fromJSON(e),document.getElementById("inp-total-frames").value=xe.totalFrames,document.getElementById("sel-fps").value=String(xe.fps),Rn(0),an(),Tt.fitView(),Tt.render(),Rt.render();return}Pe.resetAllTargets();const t=Pe.restTargets,n=(i,s,a,o,l=0,d=0,c=0)=>{!Pe.targets[i]||!t[i]||(Pe.targets[i].position.set(t[i].position.x+s,t[i].position.y+a,t[i].position.z+o),Pe.targets[i].rotation.set(l,d,c))};if(r==="idle")n("handL",.04,-.04,.08),n("handR",-.04,-.04,.08);else if(r==="ready")n("footL",.14,.05,.05),n("footR",-.14,.05,-.05),n("poleKneeL",.12,-.05,.15),n("poleKneeR",-.12,-.05,.15),n("handL",.05,.06,.28),n("handR",-.06,.08,.3),n("head",0,-.08,.2);else if(r==="forehand")n("footL",.16,0,.12),n("footR",-.16,0,-.12),n("handR",.22,.24,.44),n("handL",.12,.05,.2);else if(r==="squat")n("footL",.1,.18,0),n("footR",-.1,.18,0),n("poleKneeL",.15,-.08,.25),n("poleKneeR",-.15,-.08,.25),n("handL",.02,-.1,.35),n("handR",-.02,-.1,.35);else if(r==="demo_anim"){xe.clear(),xe.totalFrames=90,document.getElementById("inp-total-frames").value=90,js("ready"),xe.setFullPoseKeyframe(Pe.targets,0,"bezier"),Pe.resetAllTargets(),n("footL",.15,0,.08),n("footR",-.16,0,-.1),n("handR",-.28,-.02,-.14),n("handL",.08,.08,.28),Pe.solve(),xe.setFullPoseKeyframe(Pe.targets,25,"bezier"),js("forehand"),xe.setFullPoseKeyframe(Pe.targets,48,"bezier"),js("ready"),xe.setFullPoseKeyframe(Pe.targets,90,"bezier"),Rn(0),an(),Tt.fitView(),Tt.render(),Rt.render();return}Pe.solve(),bt.syncFromSolver(),Mr()}function j_(){q_(),document.getElementById("btn-reset-pose").addEventListener("click",()=>{Pe.resetAllTargets(),bt.syncFromSolver(),Mr()}),document.getElementById("btn-reset-handle").addEventListener("click",()=>{_t&&(Pe.resetTarget(_t),bt.syncFromSolver(),Mr())});const r=document.getElementById("btn-mode-translate"),e=document.getElementById("btn-mode-rotate"),t=E=>{Bt.setMode(E),r.classList.toggle("active",E==="translate"),e.classList.toggle("active",E==="rotate")};r.addEventListener("click",()=>t("translate")),e.addEventListener("click",()=>t("rotate"));const n=document.getElementById("btn-space-toggle");n.addEventListener("click",()=>{const E=Bt.space==="world"?"local":"world";Bt.setSpace(E),n.textContent=E==="world"?"🌐 Globale":"📍 Locale"});const i=(E,I)=>{const S=document.getElementById(E),x=S.closest(".toggle-chip");S.addEventListener("change",()=>{x&&x.classList.toggle("active",S.checked),I(S.checked)})};i("chk-foot-pin",E=>{Pe.footPinning=E}),i("chk-body-follow",E=>{Pe.smartBodyFollow=E,Pe.solve(),bt.syncFromSolver()}),i("chk-skeleton",E=>{Et.setSkeletonVisible(E)}),i("chk-motion-path",E=>{oh=E,an()}),i("chk-loop",E=>{xe.loop=E}),i("chk-autokey",E=>{xe.autoKey=E}),document.getElementById("btn-play").addEventListener("click",jr),document.getElementById("btn-stop").addEventListener("click",()=>{xe.isPlaying&&jr(),Rn(0)}),document.getElementById("btn-prev-key").addEventListener("click",()=>{const I=[...xe.getAllKeyframeFrames()].reverse().find(S=>S<xe.currentFrame);I!==void 0&&Rn(I)}),document.getElementById("btn-next-key").addEventListener("click",()=>{const I=xe.getAllKeyframeFrames().find(S=>S>xe.currentFrame);I!==void 0&&Rn(I)}),document.getElementById("inp-frame").addEventListener("change",E=>{Rn(parseInt(E.target.value,10)||0)}),document.getElementById("inp-total-frames").addEventListener("change",E=>{xe.totalFrames=Math.max(10,parseInt(E.target.value,10)||90),Rt.render(),Tt.render()}),document.getElementById("sel-fps").addEventListener("change",E=>{xe.fps=parseInt(E.target.value,10)||30});const s=()=>{xe.setFullPoseKeyframe(Pe.targets,xe.currentFrame),Rt.render(),Tt.fitView(),Tt.render(),an()};document.getElementById("btn-add-key").addEventListener("click",s);const a=()=>{Rt.selectedKey?(xe.deleteTargetKeyframe(Rt.selectedKey.targetId,Rt.selectedKey.frame),Rt.selectedKey=null):_t&&xe.deleteTargetKeyframe(_t,xe.currentFrame),Rt.render(),Tt.render(),an()};document.getElementById("btn-del-key").addEventListener("click",a),document.querySelectorAll(".tab-btn").forEach(E=>{E.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(S=>S.classList.remove("active")),E.classList.add("active");const I=document.getElementById("animation-views");I.className=`view-${E.dataset.view}`,Rt.render(),Tt.render()})});const o=document.getElementById("bottom-dock"),l=document.getElementById("dock-resizer");let d=!1;l.addEventListener("pointerdown",E=>{d=!0,l.setPointerCapture(E.pointerId)}),l.addEventListener("pointermove",E=>{if(!d)return;const I=window.innerHeight-E.clientY;o.style.height=`${Math.max(150,Math.min(window.innerHeight*.65,I))}px`,rr()}),l.addEventListener("pointerup",()=>{d=!1}),document.getElementById("preset-select").addEventListener("change",E=>{js(E.target.value),E.target.value=""});const c=["px","py","pz","rx","ry","rz"],h=()=>{for(const E of c){const I=Et.batTransform[E];document.getElementById(`bat-${E}-rng`).value=I,document.getElementById(`bat-${E}-num`).value=I}};h();for(const E of c){const I=document.getElementById(`bat-${E}-rng`),S=document.getElementById(`bat-${E}-num`);I.addEventListener("input",()=>{const x=parseFloat(I.value);S.value=x,Et.setBatTransform({[E]:x})}),S.addEventListener("input",()=>{const x=parseFloat(S.value);Number.isFinite(x)&&(I.value=x,Et.setBatTransform({[E]:x}))})}document.getElementById("btn-reset-bat").addEventListener("click",()=>{Et.resetBatTransform(),h()}),document.getElementById("btn-copy-bat").addEventListener("click",()=>{var S;const E=JSON.stringify(Et.batTransform);(S=navigator.clipboard)==null||S.writeText(E);const I=document.getElementById("btn-copy-bat");I.textContent="✓",setTimeout(()=>I.textContent="📋",900)});const u=document.getElementById("bat-view-rng"),p=document.getElementById("bat-view-num");let v=null,g=null;const m=()=>{if(!Et.batPivot||!Et.batPivot.parent)return;v=Et.batPivot.quaternion.clone();const E=$n.getWorldDirection(new A).negate(),I=Et.batPivot.parent.getWorldQuaternion(new Be).invert();g=E.applyQuaternion(I).normalize()};u.addEventListener("pointerdown",m),u.addEventListener("input",()=>{if((!v||!g)&&m(),!v||!g)return;const E=parseFloat(u.value)||0;p.value=E;const S=new Be().setFromAxisAngle(g,ft.degToRad(E)).multiply(v),x=new Dt().setFromQuaternion(S,"XYZ"),P=Et.batSide==="left"?-1:1;Et.setBatTransform({rx:Math.round(ft.radToDeg(x.x)),ry:Math.round(ft.radToDeg(x.y)*P),rz:Math.round(ft.radToDeg(x.z)*P)}),h()});const f=()=>{v=null,g=null,u.value=0,p.value=0};u.addEventListener("pointerup",f),u.addEventListener("change",f),document.getElementById("bat-select").addEventListener("change",E=>{Et.attachBatToHand(E.target.value),Pe.solve()}),document.getElementById("file-input").addEventListener("change",async E=>{const I=E.target.files[0];I&&await hc(I)});const y=document.getElementById("drop-overlay");window.addEventListener("dragover",E=>{E.preventDefault(),y.classList.remove("hidden")}),window.addEventListener("dragleave",E=>{E.relatedTarget===null&&y.classList.add("hidden")}),window.addEventListener("drop",async E=>{E.preventDefault(),y.classList.add("hidden");const I=E.dataTransfer.files[0];I&&/\.(glb|gltf)$/i.test(I.name)&&await hc(I)}),document.getElementById("btn-export-json").addEventListener("click",()=>{const E=new Blob([JSON.stringify(xe.toJSON(),null,2)],{type:"application/json"}),I=document.createElement("a");I.href=URL.createObjectURL(E),I.download="kinetic_animation.json",I.click()}),document.getElementById("json-input").addEventListener("change",async E=>{const I=E.target.files[0];if(!I)return;const S=await I.text();xe.fromJSON(JSON.parse(S)),document.getElementById("inp-total-frames").value=xe.totalFrames,document.getElementById("sel-fps").value=String(xe.fps),Rn(0),Tt.fitView(),Tt.render(),an()});let b=!1;const _=Bt.getHelper?Bt.getHelper():Bt,C=()=>{b=!b,document.body.classList.toggle("zen-mode",b),document.getElementById("btn-exit-zen").classList.toggle("hidden",!b),bt.group.visible=!b,_.visible=!b,b?bt.motionPathLine.visible=!1:an(),rr()};document.getElementById("btn-zen-mode").addEventListener("click",C),document.getElementById("btn-exit-zen").addEventListener("click",C);const R=new V_(un,$n,Ir,Pe,xe,{onExit:()=>{document.body.classList.remove("minigame-mode"),bt.group.visible=!b,_.visible=!b,b||an(),rr()}});window.__miniGame=R,document.getElementById("btn-minigame").addEventListener("click",()=>{xe.isPlaying&&jr(),document.body.classList.add("minigame-mode"),bt.group.visible=!1,_.visible=!1,bt.motionPathLine.visible=!1,R.start(),rr()}),window.addEventListener("keydown",E=>{var I;(I=window.__miniGame)!=null&&I.active||E.target.tagName==="INPUT"||E.target.tagName==="SELECT"||(E.code==="Space"?(E.preventDefault(),jr()):E.key==="h"||E.key==="H"?C():E.key==="g"||E.key==="G"?t("translate"):E.key==="r"||E.key==="R"?t("rotate"):E.key==="i"||E.key==="I"?s():E.key==="Delete"||E.key==="Backspace"?a():E.key==="Escape"&&(Bt.detach(),_t=null,bt.select(null)))})}async function lh(r,e){const t=document.getElementById("status-badge");t.textContent=`Caricamento ${e}...`,t.style.color="#f5a623";try{const n=await r();Pe.initFromRig(),Pe.solve(),bt.rebuild(),K_(),Rt.rebuildTrackList();const i=Pe.targets.handR?"handR":Object.keys(Pe.targets)[0];i&&aa(i);const s=document.getElementById("bat-select").value;Et.batPivot?Et.attachBatToHand(s):Et.loadAndAttachBat("/table_tennis_bat.glb",s).catch(a=>console.warn("Bat non caricata:",a)),t.textContent=`✓ ${e} (${n.boneCount} ossa · ${n.detected.length} IK mappate)`,t.style.color="#4cc38a"}catch(n){console.error(n),t.textContent=`Errore caricamento: ${n.message}`,t.style.color="#e05a5a"}}async function hc(r){xe.clear(),await lh(()=>Et.loadFromFile(r),r.name)}function rr(){const r=dc.clientWidth,e=dc.clientHeight;$n.aspect=r/Math.max(e,1),$n.updateProjectionMatrix(),hn.setSize(r,e),Rt.render(),Tt.render()}window.addEventListener("resize",rr);let uc=performance.now();function dh(r){var t;requestAnimationFrame(dh);const e=Math.min((r-uc)/1e3,.1);if(uc=r,(t=window.__miniGame)!=null&&t.active)window.__miniGame.update(e);else if(xe.isPlaying){let n=xe.currentFrame+e*xe.fps;n>xe.totalFrames&&(xe.loop?n=0:(n=xe.totalFrames,jr())),xe.currentFrame=n,document.getElementById("inp-frame").value=Math.round(n),vl(n),Rt.render(),Tt.render()}Ir.update(),hn.render(un,$n)}j_();rr();lh(()=>Et.loadFromUrl("/rigged_character.glb"),"rigged_character.glb");requestAnimationFrame(dh);
