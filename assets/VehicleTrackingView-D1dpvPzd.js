import{d as Yo,r as Rl,l as $e,c as Mi,I as jo,s as Cl,Z as Ia,a as Be,t as x,x as ut,K as qn,v as Te,Q as Pl,o as Fe,q as Dl,u as Tt,L as Ll,F as si,f as ri,U as Ua,M as Ii,b as Na,z as qs,_ as Fa}from"./vendor-CBGniyLR.js";import{L as xt}from"./leaflet-src-BqV47dzd.js";import{_ as Ko,u as Il}from"./index-Dx7m1vKq.js";import{D as Ul}from"./driver-app-api-BSPHqOf9.js";import{N as Nl}from"./network-api-D5r1f1aE.js";import{P as Fl}from"./planning-api-BdC-tJtD.js";import{R as Ol}from"./resources-api-gRoOZ0_8.js";import{S as Bl}from"./service-areas-api-CNhDdMI8.js";import{C as zl}from"./configuration-BiWBPvh5.js";import"./jsonforms-DUCi4SlM.js";import"./index-NIGUFBhG.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const va="179",kl=0,Oa=1,Hl=2,Zo=1,Vl=2,yn=3,Fn=0,Ht=1,En=2,Un=0,yi=1,Ba=2,za=3,ka=4,Gl=5,Kn=100,Wl=101,Xl=102,$l=103,ql=104,Yl=200,jl=201,Kl=202,Zl=203,Pr=204,Dr=205,Jl=206,Ql=207,ec=208,tc=209,nc=210,ic=211,sc=212,rc=213,ac=214,Lr=0,Ir=1,Ur=2,bi=3,Nr=4,Fr=5,Or=6,Br=7,xa=0,oc=1,lc=2,Nn=0,cc=1,uc=2,dc=3,hc=4,fc=5,pc=6,mc=7,Jo=300,Ai=301,wi=302,zr=303,kr=304,Gs=306,Hr=1e3,Jn=1001,Vr=1002,ln=1003,gc=1004,as=1005,dn=1006,Ys=1007,Qn=1008,pn=1009,Qo=1010,el=1011,Gi=1012,Ma=1013,ti=1014,Tn=1015,qi=1016,Sa=1017,ya=1018,Wi=1020,tl=35902,nl=1021,il=1022,on=1023,Xi=1026,$i=1027,sl=1028,Ea=1029,rl=1030,Ta=1031,ba=1033,Ls=33776,Is=33777,Us=33778,Ns=33779,Gr=35840,Wr=35841,Xr=35842,$r=35843,qr=36196,Yr=37492,jr=37496,Kr=37808,Zr=37809,Jr=37810,Qr=37811,ea=37812,ta=37813,na=37814,ia=37815,sa=37816,ra=37817,aa=37818,oa=37819,la=37820,ca=37821,Fs=36492,ua=36494,da=36495,al=36283,ha=36284,fa=36285,pa=36286,_c=3200,vc=3201,Aa=0,xc=1,In="",Xt="srgb",Ri="srgb-linear",Bs="linear",yt="srgb",ai=7680,Ha=519,Mc=512,Sc=513,yc=514,ol=515,Ec=516,Tc=517,bc=518,Ac=519,Va=35044,Ga="300 es",hn=2e3,zs=2001;class Pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],js=Math.PI/180,ma=180/Math.PI;function Yi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function ht(i,e,t){return Math.max(e,Math.min(t,i))}function wc(i,e){return(i%e+e)%e}function Ks(i,e,t){return(1-t)*i+t*e}function Ui(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class gt{constructor(e=0,t=0){gt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ji{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const p=r[a+0],m=r[a+1],v=r[a+2],S=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=p,e[t+1]=m,e[t+2]=v,e[t+3]=S;return}if(u!==S||c!==p||l!==m||h!==v){let g=1-o;const d=c*p+l*m+h*v+u*S,L=d>=0?1:-1,R=1-d*d;if(R>Number.EPSILON){const F=Math.sqrt(R),D=Math.atan2(F,d*L);g=Math.sin(g*D)/F,o=Math.sin(o*D)/F}const w=o*L;if(c=c*g+p*w,l=l*g+m*w,h=h*g+v*w,u=u*g+S*w,g===1-o){const F=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=F,l*=F,h*=F,u*=F}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],p=r[a+1],m=r[a+2],v=r[a+3];return e[t]=o*v+h*u+c*m-l*p,e[t+1]=c*v+h*p+l*u-o*m,e[t+2]=l*v+h*m+o*p-c*u,e[t+3]=h*v-o*u-c*p-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),p=c(n/2),m=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=p*h*u+l*m*v,this._y=l*m*u-p*h*v,this._z=l*h*v+p*m*u,this._w=l*h*u-p*m*v;break;case"YXZ":this._x=p*h*u+l*m*v,this._y=l*m*u-p*h*v,this._z=l*h*v-p*m*u,this._w=l*h*u+p*m*v;break;case"ZXY":this._x=p*h*u-l*m*v,this._y=l*m*u+p*h*v,this._z=l*h*v+p*m*u,this._w=l*h*u-p*m*v;break;case"ZYX":this._x=p*h*u-l*m*v,this._y=l*m*u+p*h*v,this._z=l*h*v-p*m*u,this._w=l*h*u+p*m*v;break;case"YZX":this._x=p*h*u+l*m*v,this._y=l*m*u+p*h*v,this._z=l*h*v-p*m*u,this._w=l*h*u-p*m*v;break;case"XZY":this._x=p*h*u-l*m*v,this._y=l*m*u-p*h*v,this._z=l*h*v+p*m*u,this._w=l*h*u+p*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],p=n+o+u;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=a*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zs.copy(this).projectOnVector(e),this.sub(Zs)}reflect(e){return this.sub(Zs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zs=new V,Wa=new ji;class rt{constructor(e,t,n,s,r,a,o,c,l){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],p=n[2],m=n[5],v=n[8],S=s[0],g=s[3],d=s[6],L=s[1],R=s[4],w=s[7],F=s[2],D=s[5],U=s[8];return r[0]=a*S+o*L+c*F,r[3]=a*g+o*R+c*D,r[6]=a*d+o*w+c*U,r[1]=l*S+h*L+u*F,r[4]=l*g+h*R+u*D,r[7]=l*d+h*w+u*U,r[2]=p*S+m*L+v*F,r[5]=p*g+m*R+v*D,r[8]=p*d+m*w+v*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,p=o*c-h*r,m=l*r-a*c,v=t*u+n*p+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=u*S,e[1]=(s*l-h*n)*S,e[2]=(o*n-s*a)*S,e[3]=p*S,e[4]=(h*t-s*c)*S,e[5]=(s*r-o*t)*S,e[6]=m*S,e[7]=(n*c-l*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Js.makeScale(e,t)),this}rotate(e){return this.premultiply(Js.makeRotation(-e)),this}translate(e,t){return this.premultiply(Js.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Js=new rt;function ll(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rc(){const i=ks("canvas");return i.style.display="block",i}const Xa={};function Ei(i){i in Xa||(Xa[i]=!0,console.warn(i))}function Cc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const $a=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qa=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pc(){const i={enabled:!0,workingColorSpace:Ri,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===yt&&(s.r=bn(s.r),s.g=bn(s.g),s.b=bn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===yt&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===In?Bs:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ei("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ei("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ri]:{primaries:e,whitePoint:n,transfer:Bs,toXYZ:$a,fromXYZ:qa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:$a,fromXYZ:qa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),i}const mt=Pc();function bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ti(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let oi;class Dc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{oi===void 0&&(oi=ks("canvas")),oi.width=e.width,oi.height=e.height;const s=oi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=oi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ks("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=bn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bn(t[n]/255)*255):t[n]=bn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lc=0;class wa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=Yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Qs(s[a].image)):r.push(Qs(s[a]))}else r=Qs(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Qs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ic=0;const er=new V;class Vt extends Pi{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,n=Jn,s=Jn,r=dn,a=Qn,o=on,c=pn,l=Vt.DEFAULT_ANISOTROPY,h=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=Yi(),this.name="",this.source=new wa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(er).x}get height(){return this.source.getSize(er).y}get depth(){return this.source.getSize(er).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hr:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case Vr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hr:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case Vr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Jo;Vt.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,n=0,s=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],p=c[1],m=c[5],v=c[9],S=c[2],g=c[6],d=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-S)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+S)<.1&&Math.abs(v+g)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(l+1)/2,w=(m+1)/2,F=(d+1)/2,D=(h+p)/4,U=(u+S)/4,k=(v+g)/4;return R>w&&R>F?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=D/n,r=U/n):w>F?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=D/s,r=k/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=U/r,s=k/r),this.set(n,s,r,t),this}let L=Math.sqrt((g-v)*(g-v)+(u-S)*(u-S)+(p-h)*(p-h));return Math.abs(L)<.001&&(L=1),this.x=(g-v)/L,this.y=(u-S)/L,this.z=(p-h)/L,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uc extends Pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Vt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new wa(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends Uc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class cl extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nc extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ki{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),os.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),os.copy(n.boundingBox)),os.applyMatrix4(e.matrixWorld),this.union(os)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ni),ls.subVectors(this.max,Ni),li.subVectors(e.a,Ni),ci.subVectors(e.b,Ni),ui.subVectors(e.c,Ni),wn.subVectors(ci,li),Rn.subVectors(ui,ci),Hn.subVectors(li,ui);let t=[0,-wn.z,wn.y,0,-Rn.z,Rn.y,0,-Hn.z,Hn.y,wn.z,0,-wn.x,Rn.z,0,-Rn.x,Hn.z,0,-Hn.x,-wn.y,wn.x,0,-Rn.y,Rn.x,0,-Hn.y,Hn.x,0];return!tr(t,li,ci,ui,ls)||(t=[1,0,0,0,1,0,0,0,1],!tr(t,li,ci,ui,ls))?!1:(cs.crossVectors(wn,Rn),t=[cs.x,cs.y,cs.z],tr(t,li,ci,ui,ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gn=[new V,new V,new V,new V,new V,new V,new V,new V],nn=new V,os=new Ki,li=new V,ci=new V,ui=new V,wn=new V,Rn=new V,Hn=new V,Ni=new V,ls=new V,cs=new V,Vn=new V;function tr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Vn.fromArray(i,r);const o=s.x*Math.abs(Vn.x)+s.y*Math.abs(Vn.y)+s.z*Math.abs(Vn.z),c=e.dot(Vn),l=t.dot(Vn),h=n.dot(Vn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Fc=new Ki,Fi=new V,nr=new V;class Zi{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Fc.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fi.subVectors(e,this.center);const t=Fi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Fi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fi.copy(e.center).add(nr)),this.expandByPoint(Fi.copy(e.center).sub(nr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const _n=new V,ir=new V,us=new V,Cn=new V,sr=new V,ds=new V,rr=new V;class Ra{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ir.copy(e).add(t).multiplyScalar(.5),us.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(ir);const r=e.distanceTo(t)*.5,a=-this.direction.dot(us),o=Cn.dot(this.direction),c=-Cn.dot(us),l=Cn.lengthSq(),h=Math.abs(1-a*a);let u,p,m,v;if(h>0)if(u=a*c-o,p=a*o-c,v=r*h,u>=0)if(p>=-v)if(p<=v){const S=1/h;u*=S,p*=S,m=u*(u+a*p+2*o)+p*(a*u+p+2*c)+l}else p=r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*c)+l;else p=-r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*c)+l;else p<=-v?(u=Math.max(0,-(-a*r+o)),p=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+p*(p+2*c)+l):p<=v?(u=0,p=Math.min(Math.max(-r,-c),r),m=p*(p+2*c)+l):(u=Math.max(0,-(a*r+o)),p=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+p*(p+2*c)+l);else p=a>0?-r:r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ir).addScaledVector(us,p),m}intersectSphere(e,t){_n.subVectors(e.center,this.origin);const n=_n.dot(this.direction),s=_n.dot(_n)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),h>=0?(r=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-p.z)*u,c=(e.max.z-p.z)*u):(o=(e.max.z-p.z)*u,c=(e.min.z-p.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,n,s,r){sr.subVectors(t,e),ds.subVectors(n,e),rr.crossVectors(sr,ds);let a=this.direction.dot(rr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cn.subVectors(this.origin,e);const c=o*this.direction.dot(ds.crossVectors(Cn,ds));if(c<0)return null;const l=o*this.direction.dot(sr.cross(Cn));if(l<0||c+l>a)return null;const h=-o*Cn.dot(rr);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,t,n,s,r,a,o,c,l,h,u,p,m,v,S,g){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,p,m,v,S,g)}set(e,t,n,s,r,a,o,c,l,h,u,p,m,v,S,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=p,d[3]=m,d[7]=v,d[11]=S,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/di.setFromMatrixColumn(e,0).length(),r=1/di.setFromMatrixColumn(e,1).length(),a=1/di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const p=a*h,m=a*u,v=o*h,S=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+v*l,t[5]=p-S*l,t[9]=-o*c,t[2]=S-p*l,t[6]=v+m*l,t[10]=a*c}else if(e.order==="YXZ"){const p=c*h,m=c*u,v=l*h,S=l*u;t[0]=p+S*o,t[4]=v*o-m,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-v,t[6]=S+p*o,t[10]=a*c}else if(e.order==="ZXY"){const p=c*h,m=c*u,v=l*h,S=l*u;t[0]=p-S*o,t[4]=-a*u,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*h,t[9]=S-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const p=a*h,m=a*u,v=o*h,S=o*u;t[0]=c*h,t[4]=v*l-m,t[8]=p*l+S,t[1]=c*u,t[5]=S*l+p,t[9]=m*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const p=a*c,m=a*l,v=o*c,S=o*l;t[0]=c*h,t[4]=S-p*u,t[8]=v*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*u+v,t[10]=p-S*u}else if(e.order==="XZY"){const p=a*c,m=a*l,v=o*c,S=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=p*u+S,t[5]=a*h,t[9]=m*u-v,t[2]=v*u-m,t[6]=o*h,t[10]=S*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Oc,e,Bc)}lookAt(e,t,n){const s=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Pn.crossVectors(n,Gt),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Pn.crossVectors(n,Gt)),Pn.normalize(),hs.crossVectors(Gt,Pn),s[0]=Pn.x,s[4]=hs.x,s[8]=Gt.x,s[1]=Pn.y,s[5]=hs.y,s[9]=Gt.y,s[2]=Pn.z,s[6]=hs.z,s[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],p=n[9],m=n[13],v=n[2],S=n[6],g=n[10],d=n[14],L=n[3],R=n[7],w=n[11],F=n[15],D=s[0],U=s[4],k=s[8],b=s[12],T=s[1],P=s[5],Q=s[9],q=s[13],K=s[2],se=s[6],ee=s[10],de=s[14],Y=s[3],xe=s[7],Ee=s[11],Pe=s[15];return r[0]=a*D+o*T+c*K+l*Y,r[4]=a*U+o*P+c*se+l*xe,r[8]=a*k+o*Q+c*ee+l*Ee,r[12]=a*b+o*q+c*de+l*Pe,r[1]=h*D+u*T+p*K+m*Y,r[5]=h*U+u*P+p*se+m*xe,r[9]=h*k+u*Q+p*ee+m*Ee,r[13]=h*b+u*q+p*de+m*Pe,r[2]=v*D+S*T+g*K+d*Y,r[6]=v*U+S*P+g*se+d*xe,r[10]=v*k+S*Q+g*ee+d*Ee,r[14]=v*b+S*q+g*de+d*Pe,r[3]=L*D+R*T+w*K+F*Y,r[7]=L*U+R*P+w*se+F*xe,r[11]=L*k+R*Q+w*ee+F*Ee,r[15]=L*b+R*q+w*de+F*Pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],p=e[10],m=e[14],v=e[3],S=e[7],g=e[11],d=e[15];return v*(+r*c*u-s*l*u-r*o*p+n*l*p+s*o*m-n*c*m)+S*(+t*c*m-t*l*p+r*a*p-s*a*m+s*l*h-r*c*h)+g*(+t*l*u-t*o*m-r*a*u+n*a*m+r*o*h-n*l*h)+d*(-s*o*h-t*c*u+t*o*p+s*a*u-n*a*p+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],p=e[10],m=e[11],v=e[12],S=e[13],g=e[14],d=e[15],L=u*g*l-S*p*l+S*c*m-o*g*m-u*c*d+o*p*d,R=v*p*l-h*g*l-v*c*m+a*g*m+h*c*d-a*p*d,w=h*S*l-v*u*l+v*o*m-a*S*m-h*o*d+a*u*d,F=v*u*c-h*S*c-v*o*p+a*S*p+h*o*g-a*u*g,D=t*L+n*R+s*w+r*F;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/D;return e[0]=L*U,e[1]=(S*p*r-u*g*r-S*s*m+n*g*m+u*s*d-n*p*d)*U,e[2]=(o*g*r-S*c*r+S*s*l-n*g*l-o*s*d+n*c*d)*U,e[3]=(u*c*r-o*p*r-u*s*l+n*p*l+o*s*m-n*c*m)*U,e[4]=R*U,e[5]=(h*g*r-v*p*r+v*s*m-t*g*m-h*s*d+t*p*d)*U,e[6]=(v*c*r-a*g*r-v*s*l+t*g*l+a*s*d-t*c*d)*U,e[7]=(a*p*r-h*c*r+h*s*l-t*p*l-a*s*m+t*c*m)*U,e[8]=w*U,e[9]=(v*u*r-h*S*r-v*n*m+t*S*m+h*n*d-t*u*d)*U,e[10]=(a*S*r-v*o*r+v*n*l-t*S*l-a*n*d+t*o*d)*U,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*m-t*o*m)*U,e[12]=F*U,e[13]=(h*S*s-v*u*s+v*n*p-t*S*p-h*n*g+t*u*g)*U,e[14]=(v*o*s-a*S*s-v*n*c+t*S*c+a*n*g-t*o*g)*U,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*p+t*o*p)*U,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,p=r*l,m=r*h,v=r*u,S=a*h,g=a*u,d=o*u,L=c*l,R=c*h,w=c*u,F=n.x,D=n.y,U=n.z;return s[0]=(1-(S+d))*F,s[1]=(m+w)*F,s[2]=(v-R)*F,s[3]=0,s[4]=(m-w)*D,s[5]=(1-(p+d))*D,s[6]=(g+L)*D,s[7]=0,s[8]=(v+R)*U,s[9]=(g-L)*U,s[10]=(1-(p+S))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=di.set(s[0],s[1],s[2]).length();const a=di.set(s[4],s[5],s[6]).length(),o=di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],sn.copy(this);const l=1/r,h=1/a,u=1/o;return sn.elements[0]*=l,sn.elements[1]*=l,sn.elements[2]*=l,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,t.setFromRotationMatrix(sn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=hn,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-s),p=(t+e)/(t-e),m=(n+s)/(n-s);let v,S;if(c)v=r/(a-r),S=a*r/(a-r);else if(o===hn)v=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===zs)v=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=hn,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-s),p=-(t+e)/(t-e),m=-(n+s)/(n-s);let v,S;if(c)v=1/(a-r),S=a/(a-r);else if(o===hn)v=-2/(a-r),S=-(a+r)/(a-r);else if(o===zs)v=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=u,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=v,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const di=new V,sn=new At,Oc=new V(0,0,0),Bc=new V(1,1,1),Pn=new V,hs=new V,Gt=new V,Ya=new At,ja=new ji;class cn{constructor(e=0,t=0,n=0,s=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ya.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ya,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ja.setFromEuler(this),this.setFromQuaternion(ja,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class ul{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zc=0;const Ka=new V,hi=new ji,vn=new At,fs=new V,Oi=new V,kc=new V,Hc=new ji,Za=new V(1,0,0),Ja=new V(0,1,0),Qa=new V(0,0,1),eo={type:"added"},Vc={type:"removed"},fi={type:"childadded",child:null},ar={type:"childremoved",child:null};class Nt extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new V,t=new cn,n=new ji,s=new V(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new At},normalMatrix:{value:new rt}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.multiply(hi),this}rotateOnWorldAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.premultiply(hi),this}rotateX(e){return this.rotateOnAxis(Za,e)}rotateY(e){return this.rotateOnAxis(Ja,e)}rotateZ(e){return this.rotateOnAxis(Qa,e)}translateOnAxis(e,t){return Ka.copy(e).applyQuaternion(this.quaternion),this.position.add(Ka.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Za,e)}translateY(e){return this.translateOnAxis(Ja,e)}translateZ(e){return this.translateOnAxis(Qa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fs.copy(e):fs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(Oi,fs,this.up):vn.lookAt(fs,Oi,this.up),this.quaternion.setFromRotationMatrix(vn),s&&(vn.extractRotation(s.matrixWorld),hi.setFromRotationMatrix(vn),this.quaternion.premultiply(hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eo),fi.child=e,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vc),ar.child=e,this.dispatchEvent(ar),ar.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eo),fi.child=e,this.dispatchEvent(fi),fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,e,kc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,Hc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),p=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Nt.DEFAULT_UP=new V(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new V,xn=new V,or=new V,Mn=new V,pi=new V,mi=new V,to=new V,lr=new V,cr=new V,ur=new V,dr=new Rt,hr=new Rt,fr=new Rt;class an{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),rn.subVectors(e,t),s.cross(rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){rn.subVectors(s,t),xn.subVectors(n,t),or.subVectors(e,t);const a=rn.dot(rn),o=rn.dot(xn),c=rn.dot(or),l=xn.dot(xn),h=xn.dot(or),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const p=1/u,m=(l*c-o*h)*p,v=(a*h-o*c)*p;return r.set(1-m-v,v,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Mn.x),c.addScaledVector(a,Mn.y),c.addScaledVector(o,Mn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return dr.setScalar(0),hr.setScalar(0),fr.setScalar(0),dr.fromBufferAttribute(e,t),hr.fromBufferAttribute(e,n),fr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(dr,r.x),a.addScaledVector(hr,r.y),a.addScaledVector(fr,r.z),a}static isFrontFacing(e,t,n,s){return rn.subVectors(n,t),xn.subVectors(e,t),rn.cross(xn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),rn.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return an.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;pi.subVectors(s,n),mi.subVectors(r,n),lr.subVectors(e,n);const c=pi.dot(lr),l=mi.dot(lr);if(c<=0&&l<=0)return t.copy(n);cr.subVectors(e,s);const h=pi.dot(cr),u=mi.dot(cr);if(h>=0&&u<=h)return t.copy(s);const p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(pi,a);ur.subVectors(e,r);const m=pi.dot(ur),v=mi.dot(ur);if(v>=0&&m<=v)return t.copy(r);const S=m*l-c*v;if(S<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(n).addScaledVector(mi,o);const g=h*v-m*u;if(g<=0&&u-h>=0&&m-v>=0)return to.subVectors(r,s),o=(u-h)/(u-h+(m-v)),t.copy(s).addScaledVector(to,o);const d=1/(g+S+p);return a=S*d,o=p*d,t.copy(n).addScaledVector(pi,a).addScaledVector(mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},ps={h:0,s:0,l:0};function pr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ct{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=mt.workingColorSpace){if(e=wc(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=pr(a,r,e+1/3),this.g=pr(a,r,e),this.b=pr(a,r,e-1/3)}return mt.colorSpaceToWorking(this,s),this}setStyle(e,t=Xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const n=dl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bn(e.r),this.g=bn(e.g),this.b=bn(e.b),this}copyLinearToSRGB(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return mt.workingToColorSpace(Ot.copy(this),e),Math.round(ht(Ot.r*255,0,255))*65536+Math.round(ht(Ot.g*255,0,255))*256+Math.round(ht(Ot.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(Ot.copy(this),t);const n=Ot.r,s=Ot.g,r=Ot.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Xt){mt.workingToColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,s=Ot.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(ps);const n=Ks(Dn.h,ps.h,t),s=Ks(Dn.s,ps.s,t),r=Ks(Dn.l,ps.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new ct;ct.NAMES=dl;let Gc=0;class mn extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=yi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pr,this.blendDst=Dr,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ha,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pr&&(n.blendSrc=this.blendSrc),this.blendDst!==Dr&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ha&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hl extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new V,ms=new gt;let Wc=0;class fn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Va,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ms.fromBufferAttribute(this,t),ms.applyMatrix3(e),this.setXY(t,ms.x,ms.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),s=kt(s,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Va&&(e.usage=this.usage),e}}class fl extends fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pl extends fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zt extends fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xc=0;const qt=new At,mr=new Nt,gi=new V,Wt=new Ki,Bi=new Ki,Ut=new V;class Zt extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ll(e)?pl:fl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return mr.lookAt(e),mr.updateMatrix(),this.applyMatrix4(mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new zt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Wt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Bi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(Wt.min,Bi.min),Wt.expandByPoint(Ut),Ut.addVectors(Wt.max,Bi.max),Wt.expandByPoint(Ut)):(Wt.expandByPoint(Bi.min),Wt.expandByPoint(Bi.max))}Wt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ut));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ut.fromBufferAttribute(o,l),c&&(gi.fromBufferAttribute(e,l),Ut.add(gi)),s=Math.max(s,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let k=0;k<n.count;k++)o[k]=new V,c[k]=new V;const l=new V,h=new V,u=new V,p=new gt,m=new gt,v=new gt,S=new V,g=new V;function d(k,b,T){l.fromBufferAttribute(n,k),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,T),p.fromBufferAttribute(r,k),m.fromBufferAttribute(r,b),v.fromBufferAttribute(r,T),h.sub(l),u.sub(l),m.sub(p),v.sub(p);const P=1/(m.x*v.y-v.x*m.y);isFinite(P)&&(S.copy(h).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(P),g.copy(u).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(P),o[k].add(S),o[b].add(S),o[T].add(S),c[k].add(g),c[b].add(g),c[T].add(g))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let k=0,b=L.length;k<b;++k){const T=L[k],P=T.start,Q=T.count;for(let q=P,K=P+Q;q<K;q+=3)d(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const R=new V,w=new V,F=new V,D=new V;function U(k){F.fromBufferAttribute(s,k),D.copy(F);const b=o[k];R.copy(b),R.sub(F.multiplyScalar(F.dot(b))).normalize(),w.crossVectors(D,b);const P=w.dot(c[k])<0?-1:1;a.setXYZW(k,R.x,R.y,R.z,P)}for(let k=0,b=L.length;k<b;++k){const T=L[k],P=T.start,Q=T.count;for(let q=P,K=P+Q;q<K;q+=3)U(e.getX(q+0)),U(e.getX(q+1)),U(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const s=new V,r=new V,a=new V,o=new V,c=new V,l=new V,h=new V,u=new V;if(e)for(let p=0,m=e.count;p<m;p+=3){const v=e.getX(p+0),S=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,p=new l.constructor(c.length*h);let m=0,v=0;for(let S=0,g=c.length;S<g;S++){o.isInterleavedBufferAttribute?m=c[S]*o.data.stride+o.offset:m=c[S]*h;for(let d=0;d<h;d++)p[v++]=l[m++]}return new fn(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const p=l[h],m=e(p,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){const m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const no=new At,Gn=new Ra,gs=new Zi,io=new V,_s=new V,vs=new V,xs=new V,gr=new V,Ms=new V,so=new V,Ss=new V;class Kt extends Nt{constructor(e=new Zt,t=new hl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ms.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(gr.fromBufferAttribute(u,e),a?Ms.addScaledVector(gr,h):Ms.addScaledVector(gr.sub(t),h))}t.add(Ms)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(r),Gn.copy(e.ray).recast(e.near),!(gs.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(gs,io)===null||Gn.origin.distanceToSquared(io)>(e.far-e.near)**2))&&(no.copy(r).invert(),Gn.copy(e.ray).applyMatrix4(no),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,S=p.length;v<S;v++){const g=p[v],d=a[g.materialIndex],L=Math.max(g.start,m.start),R=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let w=L,F=R;w<F;w+=3){const D=o.getX(w),U=o.getX(w+1),k=o.getX(w+2);s=ys(this,d,e,n,l,h,u,D,U,k),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let g=v,d=S;g<d;g+=3){const L=o.getX(g),R=o.getX(g+1),w=o.getX(g+2);s=ys(this,a,e,n,l,h,u,L,R,w),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,S=p.length;v<S;v++){const g=p[v],d=a[g.materialIndex],L=Math.max(g.start,m.start),R=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let w=L,F=R;w<F;w+=3){const D=w,U=w+1,k=w+2;s=ys(this,d,e,n,l,h,u,D,U,k),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),S=Math.min(c.count,m.start+m.count);for(let g=v,d=S;g<d;g+=3){const L=g,R=g+1,w=g+2;s=ys(this,a,e,n,l,h,u,L,R,w),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function $c(i,e,t,n,s,r,a,o){let c;if(e.side===Ht?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Fn,o),c===null)return null;Ss.copy(o),Ss.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ss);return l<t.near||l>t.far?null:{distance:l,point:Ss.clone(),object:i}}function ys(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,_s),i.getVertexPosition(c,vs),i.getVertexPosition(l,xs);const h=$c(i,e,t,n,_s,vs,xs,so);if(h){const u=new V;an.getBarycoord(so,_s,vs,xs,u),s&&(h.uv=an.getInterpolatedAttribute(s,o,c,l,u,new gt)),r&&(h.uv1=an.getInterpolatedAttribute(r,o,c,l,u,new gt)),a&&(h.normal=an.getInterpolatedAttribute(a,o,c,l,u,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:c,c:l,normal:new V,materialIndex:0};an.getNormal(_s,vs,xs,p.normal),h.face=p,h.barycoord=u}return h}class Ji extends Zt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let p=0,m=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(u,2));function v(S,g,d,L,R,w,F,D,U,k,b){const T=w/U,P=F/k,Q=w/2,q=F/2,K=D/2,se=U+1,ee=k+1;let de=0,Y=0;const xe=new V;for(let Ee=0;Ee<ee;Ee++){const Pe=Ee*P-q;for(let Qe=0;Qe<se;Qe++){const ze=Qe*T-Q;xe[S]=ze*L,xe[g]=Pe*R,xe[d]=K,l.push(xe.x,xe.y,xe.z),xe[S]=0,xe[g]=0,xe[d]=D>0?1:-1,h.push(xe.x,xe.y,xe.z),u.push(Qe/U),u.push(1-Ee/k),de+=1}}for(let Ee=0;Ee<k;Ee++)for(let Pe=0;Pe<U;Pe++){const Qe=p+Pe+se*Ee,ze=p+Pe+se*(Ee+1),Ce=p+(Pe+1)+se*(Ee+1),W=p+(Pe+1)+se*Ee;c.push(Qe,ze,W),c.push(ze,Ce,W),Y+=6}o.addGroup(m,Y,b),m+=Y,p+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ci(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Bt(i){const e={};for(let t=0;t<i.length;t++){const n=Ci(i[t]);for(const s in n)e[s]=n[s]}return e}function qc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ml(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const Yc={clone:Ci,merge:Bt};var jc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jc,this.fragmentShader=Kc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ci(e.uniforms),this.uniformsGroups=qc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gl extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ln=new V,ro=new gt,ao=new gt;class jt extends gl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ma*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z)}getViewSize(e,t){return this.getViewBounds(e,ro,ao),t.subVectors(ao,ro)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(js*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _i=-90,vi=1;class Zc extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new jt(_i,vi,e,t);s.layers=this.layers,this.add(s);const r=new jt(_i,vi,e,t);r.layers=this.layers,this.add(r);const a=new jt(_i,vi,e,t);a.layers=this.layers,this.add(a);const o=new jt(_i,vi,e,t);o.layers=this.layers,this.add(o);const c=new jt(_i,vi,e,t);c.layers=this.layers,this.add(c);const l=new jt(_i,vi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,p,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class _l extends Vt{constructor(e=[],t=Ai,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jc extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new _l(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ji(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Un});r.uniforms.tEquirect.value=t;const a=new Kt(s,r),o=t.minFilter;return t.minFilter===Qn&&(t.minFilter=dn),new Zc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class ei extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qc={type:"move"};class _r{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const S of e.hand.values()){const g=t.getJointPose(S,n),d=this._getHandJoint(l,S);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,v=.005;l.inputState.pinching&&p>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qc)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ei;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class eu extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const vr=new V,tu=new V,nu=new rt;class Yn{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=vr.subVectors(n,t).cross(tu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(vr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nu.getNormalMatrix(e),s=this.coplanarPoint(vr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new Zi,iu=new gt(.5,.5),Es=new V;class Ca{constructor(e=new Yn,t=new Yn,n=new Yn,s=new Yn,r=new Yn,a=new Yn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],p=r[6],m=r[7],v=r[8],S=r[9],g=r[10],d=r[11],L=r[12],R=r[13],w=r[14],F=r[15];if(s[0].setComponents(l-a,m-h,d-v,F-L).normalize(),s[1].setComponents(l+a,m+h,d+v,F+L).normalize(),s[2].setComponents(l+o,m+u,d+S,F+R).normalize(),s[3].setComponents(l-o,m-u,d-S,F-R).normalize(),n)s[4].setComponents(c,p,g,w).normalize(),s[5].setComponents(l-c,m-p,d-g,F-w).normalize();else if(s[4].setComponents(l-c,m-p,d-g,F-w).normalize(),t===hn)s[5].setComponents(l+c,m+p,d+g,F+w).normalize();else if(t===zs)s[5].setComponents(c,p,g,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(e){Wn.center.set(0,0,0);const t=iu.distanceTo(e.center);return Wn.radius=.7071067811865476+t,Wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Es.x=s.normal.x>0?e.max.x:e.min.x,Es.y=s.normal.y>0?e.max.y:e.min.y,Es.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vi extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Hs=new V,Vs=new V,oo=new At,zi=new Ra,Ts=new Zi,xr=new V,lo=new V;class vl extends Nt{constructor(e=new Zt,t=new Vi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Hs.fromBufferAttribute(t,s-1),Vs.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Hs.distanceTo(Vs);e.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(s),Ts.radius+=r,e.ray.intersectsSphere(Ts)===!1)return;oo.copy(s).invert(),zi.copy(e.ray).applyMatrix4(oo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let S=m,g=v-1;S<g;S+=l){const d=h.getX(S),L=h.getX(S+1),R=bs(this,e,zi,c,d,L,S);R&&t.push(R)}if(this.isLineLoop){const S=h.getX(v-1),g=h.getX(m),d=bs(this,e,zi,c,S,g,v-1);d&&t.push(d)}}else{const m=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let S=m,g=v-1;S<g;S+=l){const d=bs(this,e,zi,c,S,S+1,S);d&&t.push(d)}if(this.isLineLoop){const S=bs(this,e,zi,c,v-1,m,v-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function bs(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Hs.fromBufferAttribute(o,s),Vs.fromBufferAttribute(o,r),t.distanceSqToSegment(Hs,Vs,xr,lo)>n)return;xr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(xr);if(!(l<e.near||l>e.far))return{distance:l,point:lo.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const co=new V,uo=new V;class ho extends vl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)co.fromBufferAttribute(t,s),uo.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+co.distanceTo(uo);e.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ki extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fo=new At,ga=new Ra,As=new Zi,ws=new V;class Mr extends Nt{constructor(e=new Zt,t=new ki){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(s),As.radius+=r,e.ray.intersectsSphere(As)===!1)return;fo.copy(s).invert(),ga.copy(e.ray).applyMatrix4(fo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const p=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let v=p,S=m;v<S;v++){const g=l.getX(v);ws.fromBufferAttribute(u,g),po(ws,g,c,s,e,t,this)}}else{const p=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let v=p,S=m;v<S;v++)ws.fromBufferAttribute(u,v),po(ws,v,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function po(i,e,t,n,s,r,a){const o=ga.distanceSqToPoint(i);if(o<t){const c=new V;ga.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class xl extends Vt{constructor(e,t,n=ti,s,r,a,o=ln,c=ln,l,h=Xi,u=1){if(h!==Xi&&h!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:u};super(p,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Qi extends Zt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,p=t/c,m=[],v=[],S=[],g=[];for(let d=0;d<h;d++){const L=d*p-a;for(let R=0;R<l;R++){const w=R*u-r;v.push(w,-L,0),S.push(0,0,1),g.push(R/o),g.push(1-d/c)}}for(let d=0;d<c;d++)for(let L=0;L<o;L++){const R=L+l*d,w=L+l*(d+1),F=L+1+l*(d+1),D=L+1+l*d;m.push(R,w,D),m.push(w,F,D)}this.setIndex(m),this.setAttribute("position",new zt(v,3)),this.setAttribute("normal",new zt(S,3)),this.setAttribute("uv",new zt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Sr extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class su extends mn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ct(16777215),this.specular=new ct(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ru extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_c,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class au extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ou{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=l.length;u<p;u+=2){const m=l[u],v=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const lu=new ou;class Pa{constructor(e){this.manager=e!==void 0?e:lu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Pa.DEFAULT_MATERIAL_NAME="__DEFAULT";const Sn={};class cu extends Error{constructor(e,t){super(e),this.response=t}}class uu extends Pa{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=mo.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Sn[e]!==void 0){Sn[e].push({onLoad:t,onProgress:n,onError:s});return}Sn[e]=[],Sn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Sn[e],u=l.body.getReader(),p=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=p?parseInt(p):0,v=m!==0;let S=0;const g=new ReadableStream({start(d){L();function L(){u.read().then(({done:R,value:w})=>{if(R)d.close();else{S+=w.byteLength;const F=new ProgressEvent("progress",{lengthComputable:v,loaded:S,total:m});for(let D=0,U=h.length;D<U;D++){const k=h[D];k.onProgress&&k.onProgress(F)}d.enqueue(w),L()}},R=>{d.error(R)})}}});return new Response(g)}else throw new cu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),p=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(p);return l.arrayBuffer().then(v=>m.decode(v))}}}).then(l=>{mo.add(`file:${e}`,l);const h=Sn[e];delete Sn[e];for(let u=0,p=h.length;u<p;u++){const m=h[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{const h=Sn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Sn[e];for(let u=0,p=h.length;u<p;u++){const m=h[u];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Ml extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const yr=new At,go=new V,_o=new V;class du{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ca,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;go.setFromMatrixPosition(e.matrixWorld),t.position.copy(go),_o.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_o),t.updateMatrixWorld(),yr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yr,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Sl extends gl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class hu extends du{constructor(){super(new Sl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fu extends Ml{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new hu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pu extends Ml{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class mu extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function vo(i,e,t,n){const s=gu(n);switch(t){case nl:return i*e;case sl:return i*e/s.components*s.byteLength;case Ea:return i*e/s.components*s.byteLength;case rl:return i*e*2/s.components*s.byteLength;case Ta:return i*e*2/s.components*s.byteLength;case il:return i*e*3/s.components*s.byteLength;case on:return i*e*4/s.components*s.byteLength;case ba:return i*e*4/s.components*s.byteLength;case Ls:case Is:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Us:case Ns:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wr:case $r:return Math.max(i,16)*Math.max(e,8)/4;case Gr:case Xr:return Math.max(i,8)*Math.max(e,8)/2;case qr:case Yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Jr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Qr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ea:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ta:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case na:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ia:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case sa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ra:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case aa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case oa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case la:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ca:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Fs:case ua:case da:return Math.ceil(i/4)*Math.ceil(e/4)*16;case al:case ha:return Math.ceil(i/4)*Math.ceil(e/4)*8;case fa:case pa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gu(i){switch(i){case pn:case Qo:return{byteLength:1,components:1};case Gi:case el:case qi:return{byteLength:2,components:1};case Sa:case ya:return{byteLength:2,components:4};case ti:case Ma:case Tn:return{byteLength:4,components:1};case tl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=va);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yl(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function _u(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((m,v)=>m.start-v.start);let p=0;for(let m=1;m<u.length;m++){const v=u[p],S=u[m];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++p,u[p]=S)}u.length=p+1;for(let m=0,v=u.length;m<v;m++){const S=u[m];i.bufferSubData(l,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var vu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xu=`#ifdef USE_ALPHAHASH
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
#endif`,Mu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Su=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Eu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tu=`#ifdef USE_AOMAP
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
#endif`,bu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Au=`#ifdef USE_BATCHING
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
#endif`,wu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ru=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Du=`#ifdef USE_IRIDESCENCE
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
#endif`,Lu=`#ifdef USE_BUMPMAP
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
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Hu=`#define PI 3.141592653589793
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
} // validated`,Vu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gu=`vec3 transformedNormal = objectNormal;
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
#endif`,Wu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yu="gl_FragColor = linearToOutputTexel( gl_FragColor );",ju=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ku=`#ifdef USE_ENVMAP
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
#endif`,Zu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ju=`#ifdef USE_ENVMAP
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
#endif`,Qu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ed=`#ifdef USE_ENVMAP
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
#endif`,td=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,id=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rd=`#ifdef USE_GRADIENTMAP
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
}`,ad=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,od=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cd=`uniform bool receiveShadow;
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
#endif`,ud=`#ifdef USE_ENVMAP
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
#endif`,dd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,md=`PhysicalMaterial material;
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
#endif`,gd=`struct PhysicalMaterial {
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
}`,_d=`
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
#endif`,vd=`#if defined( RE_IndirectDiffuse )
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
#endif`,xd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Md=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ed=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Td=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ad=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wd=`#if defined( USE_POINTS_UV )
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
#endif`,Rd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ld=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Id=`#ifdef USE_MORPHTARGETS
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
#endif`,Ud=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kd=`#ifdef USE_NORMALMAP
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
#endif`,Hd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$d=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
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
#endif`,eh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,th=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nh=`float getShadowMask() {
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
}`,ih=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sh=`#ifdef USE_SKINNING
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
#endif`,rh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ah=`#ifdef USE_SKINNING
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
#endif`,oh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ch=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dh=`#ifdef USE_TRANSMISSION
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
#endif`,hh=`#ifdef USE_TRANSMISSION
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
#endif`,fh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ph=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _h=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vh=`uniform sampler2D t2D;
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
}`,xh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eh=`#include <common>
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
}`,Th=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bh=`#define DISTANCE
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
}`,Ah=`#define DISTANCE
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
}`,wh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ch=`uniform float scale;
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
}`,Ph=`uniform vec3 diffuse;
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
}`,Dh=`#include <common>
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
}`,Lh=`uniform vec3 diffuse;
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
}`,Ih=`#define LAMBERT
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
}`,Uh=`#define LAMBERT
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
}`,Nh=`#define MATCAP
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
}`,Fh=`#define MATCAP
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
}`,Oh=`#define NORMAL
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
}`,Bh=`#define NORMAL
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
}`,zh=`#define PHONG
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
}`,kh=`#define PHONG
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
}`,Hh=`#define STANDARD
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
}`,Vh=`#define STANDARD
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
}`,Gh=`#define TOON
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
}`,Wh=`#define TOON
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
}`,Xh=`uniform float size;
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
}`,$h=`uniform vec3 diffuse;
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
}`,qh=`#include <common>
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
}`,Yh=`uniform vec3 color;
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
}`,jh=`uniform float rotation;
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
}`,Kh=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:vu,alphahash_pars_fragment:xu,alphamap_fragment:Mu,alphamap_pars_fragment:Su,alphatest_fragment:yu,alphatest_pars_fragment:Eu,aomap_fragment:Tu,aomap_pars_fragment:bu,batching_pars_vertex:Au,batching_vertex:wu,begin_vertex:Ru,beginnormal_vertex:Cu,bsdfs:Pu,iridescence_fragment:Du,bumpmap_pars_fragment:Lu,clipping_planes_fragment:Iu,clipping_planes_pars_fragment:Uu,clipping_planes_pars_vertex:Nu,clipping_planes_vertex:Fu,color_fragment:Ou,color_pars_fragment:Bu,color_pars_vertex:zu,color_vertex:ku,common:Hu,cube_uv_reflection_fragment:Vu,defaultnormal_vertex:Gu,displacementmap_pars_vertex:Wu,displacementmap_vertex:Xu,emissivemap_fragment:$u,emissivemap_pars_fragment:qu,colorspace_fragment:Yu,colorspace_pars_fragment:ju,envmap_fragment:Ku,envmap_common_pars_fragment:Zu,envmap_pars_fragment:Ju,envmap_pars_vertex:Qu,envmap_physical_pars_fragment:ud,envmap_vertex:ed,fog_vertex:td,fog_pars_vertex:nd,fog_fragment:id,fog_pars_fragment:sd,gradientmap_pars_fragment:rd,lightmap_pars_fragment:ad,lights_lambert_fragment:od,lights_lambert_pars_fragment:ld,lights_pars_begin:cd,lights_toon_fragment:dd,lights_toon_pars_fragment:hd,lights_phong_fragment:fd,lights_phong_pars_fragment:pd,lights_physical_fragment:md,lights_physical_pars_fragment:gd,lights_fragment_begin:_d,lights_fragment_maps:vd,lights_fragment_end:xd,logdepthbuf_fragment:Md,logdepthbuf_pars_fragment:Sd,logdepthbuf_pars_vertex:yd,logdepthbuf_vertex:Ed,map_fragment:Td,map_pars_fragment:bd,map_particle_fragment:Ad,map_particle_pars_fragment:wd,metalnessmap_fragment:Rd,metalnessmap_pars_fragment:Cd,morphinstance_vertex:Pd,morphcolor_vertex:Dd,morphnormal_vertex:Ld,morphtarget_pars_vertex:Id,morphtarget_vertex:Ud,normal_fragment_begin:Nd,normal_fragment_maps:Fd,normal_pars_fragment:Od,normal_pars_vertex:Bd,normal_vertex:zd,normalmap_pars_fragment:kd,clearcoat_normal_fragment_begin:Hd,clearcoat_normal_fragment_maps:Vd,clearcoat_pars_fragment:Gd,iridescence_pars_fragment:Wd,opaque_fragment:Xd,packing:$d,premultiplied_alpha_fragment:qd,project_vertex:Yd,dithering_fragment:jd,dithering_pars_fragment:Kd,roughnessmap_fragment:Zd,roughnessmap_pars_fragment:Jd,shadowmap_pars_fragment:Qd,shadowmap_pars_vertex:eh,shadowmap_vertex:th,shadowmask_pars_fragment:nh,skinbase_vertex:ih,skinning_pars_vertex:sh,skinning_vertex:rh,skinnormal_vertex:ah,specularmap_fragment:oh,specularmap_pars_fragment:lh,tonemapping_fragment:ch,tonemapping_pars_fragment:uh,transmission_fragment:dh,transmission_pars_fragment:hh,uv_pars_fragment:fh,uv_pars_vertex:ph,uv_vertex:mh,worldpos_vertex:gh,background_vert:_h,background_frag:vh,backgroundCube_vert:xh,backgroundCube_frag:Mh,cube_vert:Sh,cube_frag:yh,depth_vert:Eh,depth_frag:Th,distanceRGBA_vert:bh,distanceRGBA_frag:Ah,equirect_vert:wh,equirect_frag:Rh,linedashed_vert:Ch,linedashed_frag:Ph,meshbasic_vert:Dh,meshbasic_frag:Lh,meshlambert_vert:Ih,meshlambert_frag:Uh,meshmatcap_vert:Nh,meshmatcap_frag:Fh,meshnormal_vert:Oh,meshnormal_frag:Bh,meshphong_vert:zh,meshphong_frag:kh,meshphysical_vert:Hh,meshphysical_frag:Vh,meshtoon_vert:Gh,meshtoon_frag:Wh,points_vert:Xh,points_frag:$h,shadow_vert:qh,shadow_frag:Yh,sprite_vert:jh,sprite_frag:Kh},be={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},un={basic:{uniforms:Bt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Bt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ct(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Bt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Bt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Bt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new ct(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Bt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Bt([be.points,be.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Bt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Bt([be.common,be.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Bt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Bt([be.sprite,be.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:Bt([be.common,be.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:Bt([be.lights,be.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};un.physical={uniforms:Bt([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Rs={r:0,b:0,g:0},Xn=new cn,Zh=new At;function Jh(i,e,t,n,s,r,a){const o=new ct(0);let c=r===!0?0:1,l,h,u=null,p=0,m=null;function v(R){let w=R.isScene===!0?R.background:null;return w&&w.isTexture&&(w=(R.backgroundBlurriness>0?t:e).get(w)),w}function S(R){let w=!1;const F=v(R);F===null?d(o,c):F&&F.isColor&&(d(F,1),w=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(R,w){const F=v(w);F&&(F.isCubeTexture||F.mapping===Gs)?(h===void 0&&(h=new Kt(new Ji(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Ci(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,U,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Xn.copy(w.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),h.material.uniforms.envMap.value=F,h.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zh.makeRotationFromEuler(Xn)),h.material.toneMapped=mt.getTransfer(F.colorSpace)!==yt,(u!==F||p!==F.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=F,p=F.version,m=i.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):F&&F.isTexture&&(l===void 0&&(l=new Kt(new Qi(2,2),new On({name:"BackgroundMaterial",uniforms:Ci(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=F,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=mt.getTransfer(F.colorSpace)!==yt,F.matrixAutoUpdate===!0&&F.updateMatrix(),l.material.uniforms.uvTransform.value.copy(F.matrix),(u!==F||p!==F.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=F,p=F.version,m=i.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null))}function d(R,w){R.getRGB(Rs,ml(i)),n.buffers.color.setClear(Rs.r,Rs.g,Rs.b,w,a)}function L(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(R,w=1){o.set(R),c=w,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(R){c=R,d(o,c)},render:S,addToRenderList:g,dispose:L}}function Qh(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,a=!1;function o(T,P,Q,q,K){let se=!1;const ee=u(q,Q,P);r!==ee&&(r=ee,l(r.object)),se=m(T,q,Q,K),se&&v(T,q,Q,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(se||a)&&(a=!1,w(T,P,Q,q),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function c(){return i.createVertexArray()}function l(T){return i.bindVertexArray(T)}function h(T){return i.deleteVertexArray(T)}function u(T,P,Q){const q=Q.wireframe===!0;let K=n[T.id];K===void 0&&(K={},n[T.id]=K);let se=K[P.id];se===void 0&&(se={},K[P.id]=se);let ee=se[q];return ee===void 0&&(ee=p(c()),se[q]=ee),ee}function p(T){const P=[],Q=[],q=[];for(let K=0;K<t;K++)P[K]=0,Q[K]=0,q[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:Q,attributeDivisors:q,object:T,attributes:{},index:null}}function m(T,P,Q,q){const K=r.attributes,se=P.attributes;let ee=0;const de=Q.getAttributes();for(const Y in de)if(de[Y].location>=0){const Ee=K[Y];let Pe=se[Y];if(Pe===void 0&&(Y==="instanceMatrix"&&T.instanceMatrix&&(Pe=T.instanceMatrix),Y==="instanceColor"&&T.instanceColor&&(Pe=T.instanceColor)),Ee===void 0||Ee.attribute!==Pe||Pe&&Ee.data!==Pe.data)return!0;ee++}return r.attributesNum!==ee||r.index!==q}function v(T,P,Q,q){const K={},se=P.attributes;let ee=0;const de=Q.getAttributes();for(const Y in de)if(de[Y].location>=0){let Ee=se[Y];Ee===void 0&&(Y==="instanceMatrix"&&T.instanceMatrix&&(Ee=T.instanceMatrix),Y==="instanceColor"&&T.instanceColor&&(Ee=T.instanceColor));const Pe={};Pe.attribute=Ee,Ee&&Ee.data&&(Pe.data=Ee.data),K[Y]=Pe,ee++}r.attributes=K,r.attributesNum=ee,r.index=q}function S(){const T=r.newAttributes;for(let P=0,Q=T.length;P<Q;P++)T[P]=0}function g(T){d(T,0)}function d(T,P){const Q=r.newAttributes,q=r.enabledAttributes,K=r.attributeDivisors;Q[T]=1,q[T]===0&&(i.enableVertexAttribArray(T),q[T]=1),K[T]!==P&&(i.vertexAttribDivisor(T,P),K[T]=P)}function L(){const T=r.newAttributes,P=r.enabledAttributes;for(let Q=0,q=P.length;Q<q;Q++)P[Q]!==T[Q]&&(i.disableVertexAttribArray(Q),P[Q]=0)}function R(T,P,Q,q,K,se,ee){ee===!0?i.vertexAttribIPointer(T,P,Q,K,se):i.vertexAttribPointer(T,P,Q,q,K,se)}function w(T,P,Q,q){S();const K=q.attributes,se=Q.getAttributes(),ee=P.defaultAttributeValues;for(const de in se){const Y=se[de];if(Y.location>=0){let xe=K[de];if(xe===void 0&&(de==="instanceMatrix"&&T.instanceMatrix&&(xe=T.instanceMatrix),de==="instanceColor"&&T.instanceColor&&(xe=T.instanceColor)),xe!==void 0){const Ee=xe.normalized,Pe=xe.itemSize,Qe=e.get(xe);if(Qe===void 0)continue;const ze=Qe.buffer,Ce=Qe.type,W=Qe.bytesPerElement,ge=Ce===i.INT||Ce===i.UNSIGNED_INT||xe.gpuType===Ma;if(xe.isInterleavedBufferAttribute){const ue=xe.data,Ue=ue.stride,Le=xe.offset;if(ue.isInstancedInterleavedBuffer){for(let Ge=0;Ge<Y.locationSize;Ge++)d(Y.location+Ge,ue.meshPerAttribute);T.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ge=0;Ge<Y.locationSize;Ge++)g(Y.location+Ge);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let Ge=0;Ge<Y.locationSize;Ge++)R(Y.location+Ge,Pe/Y.locationSize,Ce,Ee,Ue*W,(Le+Pe/Y.locationSize*Ge)*W,ge)}else{if(xe.isInstancedBufferAttribute){for(let ue=0;ue<Y.locationSize;ue++)d(Y.location+ue,xe.meshPerAttribute);T.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ue=0;ue<Y.locationSize;ue++)g(Y.location+ue);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let ue=0;ue<Y.locationSize;ue++)R(Y.location+ue,Pe/Y.locationSize,Ce,Ee,Pe*W,Pe/Y.locationSize*ue*W,ge)}}else if(ee!==void 0){const Ee=ee[de];if(Ee!==void 0)switch(Ee.length){case 2:i.vertexAttrib2fv(Y.location,Ee);break;case 3:i.vertexAttrib3fv(Y.location,Ee);break;case 4:i.vertexAttrib4fv(Y.location,Ee);break;default:i.vertexAttrib1fv(Y.location,Ee)}}}}L()}function F(){k();for(const T in n){const P=n[T];for(const Q in P){const q=P[Q];for(const K in q)h(q[K].object),delete q[K];delete P[Q]}delete n[T]}}function D(T){if(n[T.id]===void 0)return;const P=n[T.id];for(const Q in P){const q=P[Q];for(const K in q)h(q[K].object),delete q[K];delete P[Q]}delete n[T.id]}function U(T){for(const P in n){const Q=n[P];if(Q[T.id]===void 0)continue;const q=Q[T.id];for(const K in q)h(q[K].object),delete q[K];delete Q[T.id]}}function k(){b(),a=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:k,resetDefaultState:b,dispose:F,releaseStatesOfGeometry:D,releaseStatesOfProgram:U,initAttributes:S,enableAttribute:g,disableUnusedAttributes:L}}function ef(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v];t.update(m,n,1)}function c(l,h,u,p){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<l.length;v++)a(l[v],h[v],p[v]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,u);let v=0;for(let S=0;S<u;S++)v+=h[S]*p[S];t.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function tf(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(U){return!(U!==on&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){const k=U===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==pn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Tn&&!k)}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=v>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:L,maxVaryings:R,maxFragmentUniforms:w,vertexTextures:F,maxSamples:D}}function nf(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Yn,o=new rt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const m=u.length!==0||p||n!==0||s;return s=p,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,m){const v=u.clippingPlanes,S=u.clipIntersection,g=u.clipShadows,d=i.get(u);if(!s||v===null||v.length===0||r&&!g)r?h(null):l();else{const L=r?0:n,R=L*4;let w=d.clippingState||null;c.value=w,w=h(v,p,R,m);for(let F=0;F!==R;++F)w[F]=t[F];d.clippingState=w,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=L}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,p,m,v){const S=u!==null?u.length:0;let g=null;if(S!==0){if(g=c.value,v!==!0||g===null){const d=m+S*4,L=p.matrixWorldInverse;o.getNormalMatrix(L),(g===null||g.length<d)&&(g=new Float32Array(d));for(let R=0,w=m;R!==S;++R,w+=4)a.copy(u[R]).applyMatrix4(L,o),a.normal.toArray(g,w),g[w+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}function sf(i){let e=new WeakMap;function t(a,o){return o===zr?a.mapping=Ai:o===kr&&(a.mapping=wi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===zr||o===kr)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Jc(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Si=4,xo=[.125,.215,.35,.446,.526,.582],Zn=20,Er=new Sl,Mo=new ct;let Tr=null,br=0,Ar=0,wr=!1;const jn=(1+Math.sqrt(5))/2,xi=1/jn,So=[new V(-jn,xi,0),new V(jn,xi,0),new V(-xi,0,jn),new V(xi,0,jn),new V(0,jn,-xi),new V(0,jn,xi),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],rf=new V;class yo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=rf}=r;Tr=this._renderer.getRenderTarget(),br=this._renderer.getActiveCubeFace(),Ar=this._renderer.getActiveMipmapLevel(),wr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=To(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tr,br,Ar),this._renderer.xr.enabled=wr,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tr=this._renderer.getRenderTarget(),br=this._renderer.getActiveCubeFace(),Ar=this._renderer.getActiveMipmapLevel(),wr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:qi,format:on,colorSpace:Ri,depthBuffer:!1},s=Eo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=af(r)),this._blurMaterial=of(r,e,t)}return s}_compileMaterial(e){const t=new Kt(this._lodPlanes[0],e);this._renderer.compile(t,Er)}_sceneToCubeUV(e,t,n,s,r){const c=new jt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,m=u.toneMapping;u.getClearColor(Mo),u.toneMapping=Nn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const S=new hl({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),g=new Kt(new Ji,S);let d=!1;const L=e.background;L?L.isColor&&(S.color.copy(L),e.background=null,d=!0):(S.color.copy(Mo),d=!0);for(let R=0;R<6;R++){const w=R%3;w===0?(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[R],r.y,r.z)):w===1?(c.up.set(0,0,l[R]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[R],r.z)):(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[R]));const F=this._cubeSize;Cs(s,w*F,R>2?F:0,F,F),u.setRenderTarget(s),d&&u.render(g,c),u.render(e,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=m,u.autoClear=p,e.background=L}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ai||e.mapping===wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=To());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Kt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Cs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Er)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=So[(s-r-1)%So.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Kt(this._lodPlanes[s],l),p=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Zn-1),S=r/v,g=isFinite(r)?1+Math.floor(h*S):Zn;g>Zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Zn}`);const d=[];let L=0;for(let U=0;U<Zn;++U){const k=U/S,b=Math.exp(-k*k/2);d.push(b),U===0?L+=b:U<g&&(L+=2*b)}for(let U=0;U<d.length;U++)d[U]=d[U]/L;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:R}=this;p.dTheta.value=v,p.mipInt.value=R-n;const w=this._sizeLods[s],F=3*w*(s>R-Si?s-R+Si:0),D=4*(this._cubeSize-w);Cs(t,F,D,3*w,2*w),c.setRenderTarget(t),c.render(u,Er)}}function af(i){const e=[],t=[],n=[];let s=i;const r=i-Si+1+xo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Si?c=xo[a-i+Si-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,v=6,S=3,g=2,d=1,L=new Float32Array(S*v*m),R=new Float32Array(g*v*m),w=new Float32Array(d*v*m);for(let D=0;D<m;D++){const U=D%3*2/3-1,k=D>2?0:-1,b=[U,k,0,U+2/3,k,0,U+2/3,k+1,0,U,k,0,U+2/3,k+1,0,U,k+1,0];L.set(b,S*v*D),R.set(p,g*v*D);const T=[D,D,D,D,D,D];w.set(T,d*v*D)}const F=new Zt;F.setAttribute("position",new fn(L,S)),F.setAttribute("uv",new fn(R,g)),F.setAttribute("faceIndex",new fn(w,d)),e.push(F),s>Si&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Eo(i,e,t){const n=new ni(i,e,t);return n.texture.mapping=Gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function of(i,e,t){const n=new Float32Array(Zn),s=new V(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Da(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function To(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Da(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function bo(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Da(){return`

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
	`}function lf(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===zr||c===kr,h=c===Ai||c===wi;if(l||h){let u=e.get(o);const p=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new yo(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return l&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new yo(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function cf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ei("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function uf(i,e,t,n){const s={},r=new WeakMap;function a(u){const p=u.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);p.removeEventListener("dispose",a),delete s[p.id];const m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(u,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function c(u){const p=u.attributes;for(const m in p)e.update(p[m],i.ARRAY_BUFFER)}function l(u){const p=[],m=u.index,v=u.attributes.position;let S=0;if(m!==null){const L=m.array;S=m.version;for(let R=0,w=L.length;R<w;R+=3){const F=L[R+0],D=L[R+1],U=L[R+2];p.push(F,D,D,U,U,F)}}else if(v!==void 0){const L=v.array;S=v.version;for(let R=0,w=L.length/3-1;R<w;R+=3){const F=R+0,D=R+1,U=R+2;p.push(F,D,D,U,U,F)}}else return;const g=new(ll(p)?pl:fl)(p,1);g.version=S;const d=r.get(u);d&&e.remove(d),r.set(u,g)}function h(u){const p=r.get(u);if(p){const m=u.index;m!==null&&p.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function df(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,m){i.drawElements(n,m,r,p*a),t.update(m,n,1)}function l(p,m,v){v!==0&&(i.drawElementsInstanced(n,m,r,p*a,v),t.update(m,n,v))}function h(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,v);let g=0;for(let d=0;d<v;d++)g+=m[d];t.update(g,n,1)}function u(p,m,v,S){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<p.length;d++)l(p[d]/a,m[d],S[d]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,S,0,v);let d=0;for(let L=0;L<v;L++)d+=m[L]*S[L];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function hf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ff(i,e,t){const n=new WeakMap,s=new Rt;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let p=n.get(o);if(p===void 0||p.count!==u){let b=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",b)};p!==void 0&&p.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],L=o.morphAttributes.color||[];let R=0;m===!0&&(R=1),v===!0&&(R=2),S===!0&&(R=3);let w=o.attributes.position.count*R,F=1;w>e.maxTextureSize&&(F=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const D=new Float32Array(w*F*4*u),U=new cl(D,w,F,u);U.type=Tn,U.needsUpdate=!0;const k=R*4;for(let T=0;T<u;T++){const P=g[T],Q=d[T],q=L[T],K=w*F*4*T;for(let se=0;se<P.count;se++){const ee=se*k;m===!0&&(s.fromBufferAttribute(P,se),D[K+ee+0]=s.x,D[K+ee+1]=s.y,D[K+ee+2]=s.z,D[K+ee+3]=0),v===!0&&(s.fromBufferAttribute(Q,se),D[K+ee+4]=s.x,D[K+ee+5]=s.y,D[K+ee+6]=s.z,D[K+ee+7]=0),S===!0&&(s.fromBufferAttribute(q,se),D[K+ee+8]=s.x,D[K+ee+9]=s.y,D[K+ee+10]=s.z,D[K+ee+11]=q.itemSize===4?s.w:1)}}p={count:u,texture:U,size:new gt(w,F)},n.set(o,p),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let S=0;S<l.length;S++)m+=l[S];const v=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function pf(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const El=new Vt,Ao=new xl(1,1),Tl=new cl,bl=new Nc,Al=new _l,wo=[],Ro=[],Co=new Float32Array(16),Po=new Float32Array(9),Do=new Float32Array(4);function Di(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=wo[s];if(r===void 0&&(r=new Float32Array(s),wo[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ws(i,e){let t=Ro[e];t===void 0&&(t=new Int32Array(e),Ro[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function mf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function _f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function xf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;Do.set(n),i.uniformMatrix2fv(this.addr,!1,Do),Lt(t,n)}}function Mf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;Po.set(n),i.uniformMatrix3fv(this.addr,!1,Po),Lt(t,n)}}function Sf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;Co.set(n),i.uniformMatrix4fv(this.addr,!1,Co),Lt(t,n)}}function yf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ef(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function Tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function bf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function Af(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function Rf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function Cf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function Pf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ao.compareFunction=ol,r=Ao):r=El,t.setTexture2D(e||r,s)}function Df(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||bl,s)}function Lf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Al,s)}function If(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Tl,s)}function Uf(i){switch(i){case 5126:return mf;case 35664:return gf;case 35665:return _f;case 35666:return vf;case 35674:return xf;case 35675:return Mf;case 35676:return Sf;case 5124:case 35670:return yf;case 35667:case 35671:return Ef;case 35668:case 35672:return Tf;case 35669:case 35673:return bf;case 5125:return Af;case 36294:return wf;case 36295:return Rf;case 36296:return Cf;case 35678:case 36198:case 36298:case 36306:case 35682:return Pf;case 35679:case 36299:case 36307:return Df;case 35680:case 36300:case 36308:case 36293:return Lf;case 36289:case 36303:case 36311:case 36292:return If}}function Nf(i,e){i.uniform1fv(this.addr,e)}function Ff(i,e){const t=Di(e,this.size,2);i.uniform2fv(this.addr,t)}function Of(i,e){const t=Di(e,this.size,3);i.uniform3fv(this.addr,t)}function Bf(i,e){const t=Di(e,this.size,4);i.uniform4fv(this.addr,t)}function zf(i,e){const t=Di(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function kf(i,e){const t=Di(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Hf(i,e){const t=Di(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Vf(i,e){i.uniform1iv(this.addr,e)}function Gf(i,e){i.uniform2iv(this.addr,e)}function Wf(i,e){i.uniform3iv(this.addr,e)}function Xf(i,e){i.uniform4iv(this.addr,e)}function $f(i,e){i.uniform1uiv(this.addr,e)}function qf(i,e){i.uniform2uiv(this.addr,e)}function Yf(i,e){i.uniform3uiv(this.addr,e)}function jf(i,e){i.uniform4uiv(this.addr,e)}function Kf(i,e,t){const n=this.cache,s=e.length,r=Ws(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||El,r[a])}function Zf(i,e,t){const n=this.cache,s=e.length,r=Ws(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||bl,r[a])}function Jf(i,e,t){const n=this.cache,s=e.length,r=Ws(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Al,r[a])}function Qf(i,e,t){const n=this.cache,s=e.length,r=Ws(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Tl,r[a])}function ep(i){switch(i){case 5126:return Nf;case 35664:return Ff;case 35665:return Of;case 35666:return Bf;case 35674:return zf;case 35675:return kf;case 35676:return Hf;case 5124:case 35670:return Vf;case 35667:case 35671:return Gf;case 35668:case 35672:return Wf;case 35669:case 35673:return Xf;case 5125:return $f;case 36294:return qf;case 36295:return Yf;case 36296:return jf;case 35678:case 36198:case 36298:case 36306:case 35682:return Kf;case 35679:case 36299:case 36307:return Zf;case 35680:case 36300:case 36308:case 36293:return Jf;case 36289:case 36303:case 36311:case 36292:return Qf}}class tp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Uf(t.type)}}class np{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ep(t.type)}}class ip{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Rr=/(\w+)(\])?(\[|\.)?/g;function Lo(i,e){i.seq.push(e),i.map[e.id]=e}function sp(i,e,t){const n=i.name,s=n.length;for(Rr.lastIndex=0;;){const r=Rr.exec(n),a=Rr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Lo(t,l===void 0?new tp(o,i,e):new np(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new ip(o),Lo(t,u)),t=u}}}class Os{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);sp(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Io(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const rp=37297;let ap=0;function op(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Uo=new rt;function lp(i){mt._getMatrix(Uo,mt.workingColorSpace,i);const e=`mat3( ${Uo.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(i)){case Bs:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function No(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+op(i.getShaderSource(e),o)}else return r}function cp(i,e){const t=lp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function up(i,e){let t;switch(e){case cc:t="Linear";break;case uc:t="Reinhard";break;case dc:t="Cineon";break;case hc:t="ACESFilmic";break;case pc:t="AgX";break;case mc:t="Neutral";break;case fc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ps=new V;function dp(){mt.getLuminanceCoefficients(Ps);const i=Ps.x.toFixed(4),e=Ps.y.toFixed(4),t=Ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hi).join(`
`)}function fp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Hi(i){return i!==""}function Fo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mp=/^[ \t]*#include +<([\w\d./]+)>/gm;function _a(i){return i.replace(mp,_p)}const gp=new Map;function _p(i,e){let t=at[e];if(t===void 0){const n=gp.get(e);if(n!==void 0)t=at[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _a(t)}const vp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bo(i){return i.replace(vp,xp)}function xp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zo(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Mp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yn&&(e="SHADOWMAP_TYPE_VSM"),e}function Sp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ai:case wi:e="ENVMAP_TYPE_CUBE";break;case Gs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case wi:e="ENVMAP_MODE_REFRACTION";break}return e}function Ep(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xa:e="ENVMAP_BLENDING_MULTIPLY";break;case oc:e="ENVMAP_BLENDING_MIX";break;case lc:e="ENVMAP_BLENDING_ADD";break}return e}function Tp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function bp(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Mp(t),l=Sp(t),h=yp(t),u=Ep(t),p=Tp(t),m=hp(t),v=fp(r),S=s.createProgram();let g,d,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Hi).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Hi).join(`
`),d.length>0&&(d+=`
`)):(g=[zo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hi).join(`
`),d=[zo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?at.tonemapping_pars_fragment:"",t.toneMapping!==Nn?up("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,cp("linearToOutputTexel",t.outputColorSpace),dp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hi).join(`
`)),a=_a(a),a=Fo(a,t),a=Oo(a,t),o=_a(o),o=Fo(o,t),o=Oo(o,t),a=Bo(a),o=Bo(o),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===Ga?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ga?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const R=L+g+a,w=L+d+o,F=Io(s,s.VERTEX_SHADER,R),D=Io(s,s.FRAGMENT_SHADER,w);s.attachShader(S,F),s.attachShader(S,D),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function U(P){if(i.debug.checkShaderErrors){const Q=s.getProgramInfoLog(S)||"",q=s.getShaderInfoLog(F)||"",K=s.getShaderInfoLog(D)||"",se=Q.trim(),ee=q.trim(),de=K.trim();let Y=!0,xe=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,F,D);else{const Ee=No(s,F,"vertex"),Pe=No(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+se+`
`+Ee+`
`+Pe)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(ee===""||de==="")&&(xe=!1);xe&&(P.diagnostics={runnable:Y,programLog:se,vertexShader:{log:ee,prefix:g},fragmentShader:{log:de,prefix:d}})}s.deleteShader(F),s.deleteShader(D),k=new Os(s,S),b=pp(s,S)}let k;this.getUniforms=function(){return k===void 0&&U(this),k};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(S,rp)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ap++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=F,this.fragmentShader=D,this}let Ap=0;class wp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Rp(e),t.set(e,n)),n}}class Rp{constructor(e){this.id=Ap++,this.code=e,this.usedTimes=0}}function Cp(i,e,t,n,s,r,a){const o=new ul,c=new wp,l=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,T,P,Q,q){const K=Q.fog,se=q.geometry,ee=b.isMeshStandardMaterial?Q.environment:null,de=(b.isMeshStandardMaterial?t:e).get(b.envMap||ee),Y=de&&de.mapping===Gs?de.image.height:null,xe=v[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const Ee=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Pe=Ee!==void 0?Ee.length:0;let Qe=0;se.morphAttributes.position!==void 0&&(Qe=1),se.morphAttributes.normal!==void 0&&(Qe=2),se.morphAttributes.color!==void 0&&(Qe=3);let ze,Ce,W,ge;if(xe){const ft=un[xe];ze=ft.vertexShader,Ce=ft.fragmentShader}else ze=b.vertexShader,Ce=b.fragmentShader,c.update(b),W=c.getVertexShaderID(b),ge=c.getFragmentShaderID(b);const ue=i.getRenderTarget(),Ue=i.state.buffers.depth.getReversed(),Le=q.isInstancedMesh===!0,Ge=q.isBatchedMesh===!0,it=!!b.map,Ke=!!b.matcap,C=!!de,lt=!!b.aoMap,ke=!!b.lightMap,st=!!b.bumpMap,We=!!b.normalMap,_t=!!b.displacementMap,_e=!!b.emissiveMap,tt=!!b.metalnessMap,Ct=!!b.roughnessMap,bt=b.anisotropy>0,A=b.clearcoat>0,_=b.dispersion>0,H=b.iridescence>0,Z=b.sheen>0,ce=b.transmission>0,J=bt&&!!b.anisotropyMap,Xe=A&&!!b.clearcoatMap,ve=A&&!!b.clearcoatNormalMap,Oe=A&&!!b.clearcoatRoughnessMap,He=H&&!!b.iridescenceMap,pe=H&&!!b.iridescenceThicknessMap,we=Z&&!!b.sheenColorMap,Je=Z&&!!b.sheenRoughnessMap,Ve=!!b.specularMap,Se=!!b.specularColorMap,nt=!!b.specularIntensityMap,N=ce&&!!b.transmissionMap,me=ce&&!!b.thicknessMap,Me=!!b.gradientMap,De=!!b.alphaMap,fe=b.alphaTest>0,ie=!!b.alphaHash,Ne=!!b.extensions;let et=Nn;b.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(et=i.toneMapping);const Mt={shaderID:xe,shaderType:b.type,shaderName:b.name,vertexShader:ze,fragmentShader:Ce,defines:b.defines,customVertexShaderID:W,customFragmentShaderID:ge,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Ge,batchingColor:Ge&&q._colorsTexture!==null,instancing:Le,instancingColor:Le&&q.instanceColor!==null,instancingMorph:Le&&q.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Ri,alphaToCoverage:!!b.alphaToCoverage,map:it,matcap:Ke,envMap:C,envMapMode:C&&de.mapping,envMapCubeUVHeight:Y,aoMap:lt,lightMap:ke,bumpMap:st,normalMap:We,displacementMap:p&&_t,emissiveMap:_e,normalMapObjectSpace:We&&b.normalMapType===xc,normalMapTangentSpace:We&&b.normalMapType===Aa,metalnessMap:tt,roughnessMap:Ct,anisotropy:bt,anisotropyMap:J,clearcoat:A,clearcoatMap:Xe,clearcoatNormalMap:ve,clearcoatRoughnessMap:Oe,dispersion:_,iridescence:H,iridescenceMap:He,iridescenceThicknessMap:pe,sheen:Z,sheenColorMap:we,sheenRoughnessMap:Je,specularMap:Ve,specularColorMap:Se,specularIntensityMap:nt,transmission:ce,transmissionMap:N,thicknessMap:me,gradientMap:Me,opaque:b.transparent===!1&&b.blending===yi&&b.alphaToCoverage===!1,alphaMap:De,alphaTest:fe,alphaHash:ie,combine:b.combine,mapUv:it&&S(b.map.channel),aoMapUv:lt&&S(b.aoMap.channel),lightMapUv:ke&&S(b.lightMap.channel),bumpMapUv:st&&S(b.bumpMap.channel),normalMapUv:We&&S(b.normalMap.channel),displacementMapUv:_t&&S(b.displacementMap.channel),emissiveMapUv:_e&&S(b.emissiveMap.channel),metalnessMapUv:tt&&S(b.metalnessMap.channel),roughnessMapUv:Ct&&S(b.roughnessMap.channel),anisotropyMapUv:J&&S(b.anisotropyMap.channel),clearcoatMapUv:Xe&&S(b.clearcoatMap.channel),clearcoatNormalMapUv:ve&&S(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&S(b.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&S(b.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&S(b.iridescenceThicknessMap.channel),sheenColorMapUv:we&&S(b.sheenColorMap.channel),sheenRoughnessMapUv:Je&&S(b.sheenRoughnessMap.channel),specularMapUv:Ve&&S(b.specularMap.channel),specularColorMapUv:Se&&S(b.specularColorMap.channel),specularIntensityMapUv:nt&&S(b.specularIntensityMap.channel),transmissionMapUv:N&&S(b.transmissionMap.channel),thicknessMapUv:me&&S(b.thicknessMap.channel),alphaMapUv:De&&S(b.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(We||bt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!se.attributes.uv&&(it||De),fog:!!K,useFog:b.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ue,skinning:q.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Qe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:et,decodeVideoTexture:it&&b.map.isVideoTexture===!0&&mt.getTransfer(b.map.colorSpace)===yt,decodeVideoTextureEmissive:_e&&b.emissiveMap.isVideoTexture===!0&&mt.getTransfer(b.emissiveMap.colorSpace)===yt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===En,flipSided:b.side===Ht,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ne&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&b.extensions.multiDraw===!0||Ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function d(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)T.push(P),T.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(L(T,b),R(T,b),T.push(i.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function L(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function R(b,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),T.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),b.push(o.mask)}function w(b){const T=v[b.type];let P;if(T){const Q=un[T];P=Yc.clone(Q.uniforms)}else P=b.uniforms;return P}function F(b,T){let P;for(let Q=0,q=h.length;Q<q;Q++){const K=h[Q];if(K.cacheKey===T){P=K,++P.usedTimes;break}}return P===void 0&&(P=new bp(i,T,b,r),h.push(P)),P}function D(b){if(--b.usedTimes===0){const T=h.indexOf(b);h[T]=h[h.length-1],h.pop(),b.destroy()}}function U(b){c.remove(b)}function k(){c.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:w,acquireProgram:F,releaseProgram:D,releaseShaderCache:U,programs:h,dispose:k}}function Pp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Dp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ko(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ho(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,p,m,v,S,g){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:p,material:m,groupOrder:v,renderOrder:u.renderOrder,z:S,group:g},i[e]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=m,d.groupOrder=v,d.renderOrder=u.renderOrder,d.z=S,d.group=g),e++,d}function o(u,p,m,v,S,g){const d=a(u,p,m,v,S,g);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):t.push(d)}function c(u,p,m,v,S,g){const d=a(u,p,m,v,S,g);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,p){t.length>1&&t.sort(u||Dp),n.length>1&&n.sort(p||ko),s.length>1&&s.sort(p||ko)}function h(){for(let u=e,p=i.length;u<p;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Lp(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ho,i.set(n,[a])):s>=r.length?(a=new Ho,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ip(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new ct};break;case"SpotLight":t={position:new V,direction:new V,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function Up(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Np=0;function Fp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Op(i){const e=new Ip,t=Up(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new V);const s=new V,r=new At,a=new At;function o(l){let h=0,u=0,p=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,v=0,S=0,g=0,d=0,L=0,R=0,w=0,F=0,D=0,U=0;l.sort(Fp);for(let b=0,T=l.length;b<T;b++){const P=l[b],Q=P.color,q=P.intensity,K=P.distance,se=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=Q.r*q,u+=Q.g*q,p+=Q.b*q;else if(P.isLightProbe){for(let ee=0;ee<9;ee++)n.probe[ee].addScaledVector(P.sh.coefficients[ee],q);U++}else if(P.isDirectionalLight){const ee=e.get(P);if(ee.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const de=P.shadow,Y=t.get(P);Y.shadowIntensity=de.intensity,Y.shadowBias=de.bias,Y.shadowNormalBias=de.normalBias,Y.shadowRadius=de.radius,Y.shadowMapSize=de.mapSize,n.directionalShadow[m]=Y,n.directionalShadowMap[m]=se,n.directionalShadowMatrix[m]=P.shadow.matrix,L++}n.directional[m]=ee,m++}else if(P.isSpotLight){const ee=e.get(P);ee.position.setFromMatrixPosition(P.matrixWorld),ee.color.copy(Q).multiplyScalar(q),ee.distance=K,ee.coneCos=Math.cos(P.angle),ee.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),ee.decay=P.decay,n.spot[S]=ee;const de=P.shadow;if(P.map&&(n.spotLightMap[F]=P.map,F++,de.updateMatrices(P),P.castShadow&&D++),n.spotLightMatrix[S]=de.matrix,P.castShadow){const Y=t.get(P);Y.shadowIntensity=de.intensity,Y.shadowBias=de.bias,Y.shadowNormalBias=de.normalBias,Y.shadowRadius=de.radius,Y.shadowMapSize=de.mapSize,n.spotShadow[S]=Y,n.spotShadowMap[S]=se,w++}S++}else if(P.isRectAreaLight){const ee=e.get(P);ee.color.copy(Q).multiplyScalar(q),ee.halfWidth.set(P.width*.5,0,0),ee.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=ee,g++}else if(P.isPointLight){const ee=e.get(P);if(ee.color.copy(P.color).multiplyScalar(P.intensity),ee.distance=P.distance,ee.decay=P.decay,P.castShadow){const de=P.shadow,Y=t.get(P);Y.shadowIntensity=de.intensity,Y.shadowBias=de.bias,Y.shadowNormalBias=de.normalBias,Y.shadowRadius=de.radius,Y.shadowMapSize=de.mapSize,Y.shadowCameraNear=de.camera.near,Y.shadowCameraFar=de.camera.far,n.pointShadow[v]=Y,n.pointShadowMap[v]=se,n.pointShadowMatrix[v]=P.shadow.matrix,R++}n.point[v]=ee,v++}else if(P.isHemisphereLight){const ee=e.get(P);ee.skyColor.copy(P.color).multiplyScalar(q),ee.groundColor.copy(P.groundColor).multiplyScalar(q),n.hemi[d]=ee,d++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;const k=n.hash;(k.directionalLength!==m||k.pointLength!==v||k.spotLength!==S||k.rectAreaLength!==g||k.hemiLength!==d||k.numDirectionalShadows!==L||k.numPointShadows!==R||k.numSpotShadows!==w||k.numSpotMaps!==F||k.numLightProbes!==U)&&(n.directional.length=m,n.spot.length=S,n.rectArea.length=g,n.point.length=v,n.hemi.length=d,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=L,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=w+F-D,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=U,k.directionalLength=m,k.pointLength=v,k.spotLength=S,k.rectAreaLength=g,k.hemiLength=d,k.numDirectionalShadows=L,k.numPointShadows=R,k.numSpotShadows=w,k.numSpotMaps=F,k.numLightProbes=U,n.version=Np++)}function c(l,h){let u=0,p=0,m=0,v=0,S=0;const g=h.matrixWorldInverse;for(let d=0,L=l.length;d<L;d++){const R=l[d];if(R.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),u++}else if(R.isSpotLight){const w=n.spot[m];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),m++}else if(R.isRectAreaLight){const w=n.rectArea[v];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(g),a.identity(),r.copy(R.matrixWorld),r.premultiply(g),a.extractRotation(r),w.halfWidth.set(R.width*.5,0,0),w.halfHeight.set(0,R.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(R.isPointLight){const w=n.point[p];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(g),p++}else if(R.isHemisphereLight){const w=n.hemi[S];w.direction.setFromMatrixPosition(R.matrixWorld),w.direction.transformDirection(g),S++}}}return{setup:o,setupView:c,state:n}}function Vo(i){const e=new Op(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Bp(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Vo(i),e.set(s,[o])):r>=a.length?(o=new Vo(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const zp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kp=`uniform sampler2D shadow_pass;
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
}`;function Hp(i,e,t){let n=new Ca;const s=new gt,r=new gt,a=new Rt,o=new ru({depthPacking:vc}),c=new au,l={},h=t.maxTextureSize,u={[Fn]:Ht,[Ht]:Fn,[En]:En},p=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:zp,fragmentShader:kp}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const v=new Zt;v.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Kt(v,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zo;let d=this.type;this.render=function(D,U,k){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||D.length===0)return;const b=i.getRenderTarget(),T=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(Un),Q.buffers.depth.getReversed()?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const q=d!==yn&&this.type===yn,K=d===yn&&this.type!==yn;for(let se=0,ee=D.length;se<ee;se++){const de=D[se],Y=de.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const xe=Y.getFrameExtents();if(s.multiply(xe),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/xe.x),s.x=r.x*xe.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/xe.y),s.y=r.y*xe.y,Y.mapSize.y=r.y)),Y.map===null||q===!0||K===!0){const Pe=this.type!==yn?{minFilter:ln,magFilter:ln}:{};Y.map!==null&&Y.map.dispose(),Y.map=new ni(s.x,s.y,Pe),Y.map.texture.name=de.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const Ee=Y.getViewportCount();for(let Pe=0;Pe<Ee;Pe++){const Qe=Y.getViewport(Pe);a.set(r.x*Qe.x,r.y*Qe.y,r.x*Qe.z,r.y*Qe.w),Q.viewport(a),Y.updateMatrices(de,Pe),n=Y.getFrustum(),w(U,k,Y.camera,de,this.type)}Y.isPointLightShadow!==!0&&this.type===yn&&L(Y,k),Y.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(b,T,P)};function L(D,U){const k=e.update(S);p.defines.VSM_SAMPLES!==D.blurSamples&&(p.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ni(s.x,s.y)),p.uniforms.shadow_pass.value=D.map.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(U,null,k,p,S,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(U,null,k,m,S,null)}function R(D,U,k,b){let T=null;const P=k.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(P!==void 0)T=P;else if(T=k.isPointLight===!0?c:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const Q=T.uuid,q=U.uuid;let K=l[Q];K===void 0&&(K={},l[Q]=K);let se=K[q];se===void 0&&(se=T.clone(),K[q]=se,U.addEventListener("dispose",F)),T=se}if(T.visible=U.visible,T.wireframe=U.wireframe,b===yn?T.side=U.shadowSide!==null?U.shadowSide:U.side:T.side=U.shadowSide!==null?U.shadowSide:u[U.side],T.alphaMap=U.alphaMap,T.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,T.map=U.map,T.clipShadows=U.clipShadows,T.clippingPlanes=U.clippingPlanes,T.clipIntersection=U.clipIntersection,T.displacementMap=U.displacementMap,T.displacementScale=U.displacementScale,T.displacementBias=U.displacementBias,T.wireframeLinewidth=U.wireframeLinewidth,T.linewidth=U.linewidth,k.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Q=i.properties.get(T);Q.light=k}return T}function w(D,U,k,b,T){if(D.visible===!1)return;if(D.layers.test(U.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&T===yn)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,D.matrixWorld);const q=e.update(D),K=D.material;if(Array.isArray(K)){const se=q.groups;for(let ee=0,de=se.length;ee<de;ee++){const Y=se[ee],xe=K[Y.materialIndex];if(xe&&xe.visible){const Ee=R(D,xe,b,T);D.onBeforeShadow(i,D,U,k,q,Ee,Y),i.renderBufferDirect(k,null,q,Ee,D,Y),D.onAfterShadow(i,D,U,k,q,Ee,Y)}}}else if(K.visible){const se=R(D,K,b,T);D.onBeforeShadow(i,D,U,k,q,se,null),i.renderBufferDirect(k,null,q,se,D,null),D.onAfterShadow(i,D,U,k,q,se,null)}}const Q=D.children;for(let q=0,K=Q.length;q<K;q++)w(Q[q],U,k,b,T)}function F(D){D.target.removeEventListener("dispose",F);for(const k in l){const b=l[k],T=D.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}const Vp={[Lr]:Ir,[Ur]:Or,[Nr]:Br,[bi]:Fr,[Ir]:Lr,[Or]:Ur,[Br]:Nr,[Fr]:bi};function Gp(i,e){function t(){let N=!1;const me=new Rt;let Me=null;const De=new Rt(0,0,0,0);return{setMask:function(fe){Me!==fe&&!N&&(i.colorMask(fe,fe,fe,fe),Me=fe)},setLocked:function(fe){N=fe},setClear:function(fe,ie,Ne,et,Mt){Mt===!0&&(fe*=et,ie*=et,Ne*=et),me.set(fe,ie,Ne,et),De.equals(me)===!1&&(i.clearColor(fe,ie,Ne,et),De.copy(me))},reset:function(){N=!1,Me=null,De.set(-1,0,0,0)}}}function n(){let N=!1,me=!1,Me=null,De=null,fe=null;return{setReversed:function(ie){if(me!==ie){const Ne=e.get("EXT_clip_control");ie?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),me=ie;const et=fe;fe=null,this.setClear(et)}},getReversed:function(){return me},setTest:function(ie){ie?ue(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(ie){Me!==ie&&!N&&(i.depthMask(ie),Me=ie)},setFunc:function(ie){if(me&&(ie=Vp[ie]),De!==ie){switch(ie){case Lr:i.depthFunc(i.NEVER);break;case Ir:i.depthFunc(i.ALWAYS);break;case Ur:i.depthFunc(i.LESS);break;case bi:i.depthFunc(i.LEQUAL);break;case Nr:i.depthFunc(i.EQUAL);break;case Fr:i.depthFunc(i.GEQUAL);break;case Or:i.depthFunc(i.GREATER);break;case Br:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=ie}},setLocked:function(ie){N=ie},setClear:function(ie){fe!==ie&&(me&&(ie=1-ie),i.clearDepth(ie),fe=ie)},reset:function(){N=!1,Me=null,De=null,fe=null,me=!1}}}function s(){let N=!1,me=null,Me=null,De=null,fe=null,ie=null,Ne=null,et=null,Mt=null;return{setTest:function(ft){N||(ft?ue(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function(ft){me!==ft&&!N&&(i.stencilMask(ft),me=ft)},setFunc:function(ft,Jt,$t){(Me!==ft||De!==Jt||fe!==$t)&&(i.stencilFunc(ft,Jt,$t),Me=ft,De=Jt,fe=$t)},setOp:function(ft,Jt,$t){(ie!==ft||Ne!==Jt||et!==$t)&&(i.stencilOp(ft,Jt,$t),ie=ft,Ne=Jt,et=$t)},setLocked:function(ft){N=ft},setClear:function(ft){Mt!==ft&&(i.clearStencil(ft),Mt=ft)},reset:function(){N=!1,me=null,Me=null,De=null,fe=null,ie=null,Ne=null,et=null,Mt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},p=new WeakMap,m=[],v=null,S=!1,g=null,d=null,L=null,R=null,w=null,F=null,D=null,U=new ct(0,0,0),k=0,b=!1,T=null,P=null,Q=null,q=null,K=null;const se=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,de=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(Y)[1]),ee=de>=1):Y.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),ee=de>=2);let xe=null,Ee={};const Pe=i.getParameter(i.SCISSOR_BOX),Qe=i.getParameter(i.VIEWPORT),ze=new Rt().fromArray(Pe),Ce=new Rt().fromArray(Qe);function W(N,me,Me,De){const fe=new Uint8Array(4),ie=i.createTexture();i.bindTexture(N,ie),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<Me;Ne++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(me+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return ie}const ge={};ge[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(i.DEPTH_TEST),a.setFunc(bi),st(!1),We(Oa),ue(i.CULL_FACE),lt(Un);function ue(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Ue(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Le(N,me){return u[N]!==me?(i.bindFramebuffer(N,me),u[N]=me,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=me),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=me),!0):!1}function Ge(N,me){let Me=m,De=!1;if(N){Me=p.get(me),Me===void 0&&(Me=[],p.set(me,Me));const fe=N.textures;if(Me.length!==fe.length||Me[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Ne=fe.length;ie<Ne;ie++)Me[ie]=i.COLOR_ATTACHMENT0+ie;Me.length=fe.length,De=!0}}else Me[0]!==i.BACK&&(Me[0]=i.BACK,De=!0);De&&i.drawBuffers(Me)}function it(N){return v!==N?(i.useProgram(N),v=N,!0):!1}const Ke={[Kn]:i.FUNC_ADD,[Wl]:i.FUNC_SUBTRACT,[Xl]:i.FUNC_REVERSE_SUBTRACT};Ke[$l]=i.MIN,Ke[ql]=i.MAX;const C={[Yl]:i.ZERO,[jl]:i.ONE,[Kl]:i.SRC_COLOR,[Pr]:i.SRC_ALPHA,[nc]:i.SRC_ALPHA_SATURATE,[ec]:i.DST_COLOR,[Jl]:i.DST_ALPHA,[Zl]:i.ONE_MINUS_SRC_COLOR,[Dr]:i.ONE_MINUS_SRC_ALPHA,[tc]:i.ONE_MINUS_DST_COLOR,[Ql]:i.ONE_MINUS_DST_ALPHA,[ic]:i.CONSTANT_COLOR,[sc]:i.ONE_MINUS_CONSTANT_COLOR,[rc]:i.CONSTANT_ALPHA,[ac]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(N,me,Me,De,fe,ie,Ne,et,Mt,ft){if(N===Un){S===!0&&(Ue(i.BLEND),S=!1);return}if(S===!1&&(ue(i.BLEND),S=!0),N!==Gl){if(N!==g||ft!==b){if((d!==Kn||w!==Kn)&&(i.blendEquation(i.FUNC_ADD),d=Kn,w=Kn),ft)switch(N){case yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ba:i.blendFunc(i.ONE,i.ONE);break;case za:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ka:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ba:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case za:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ka:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}L=null,R=null,F=null,D=null,U.set(0,0,0),k=0,g=N,b=ft}return}fe=fe||me,ie=ie||Me,Ne=Ne||De,(me!==d||fe!==w)&&(i.blendEquationSeparate(Ke[me],Ke[fe]),d=me,w=fe),(Me!==L||De!==R||ie!==F||Ne!==D)&&(i.blendFuncSeparate(C[Me],C[De],C[ie],C[Ne]),L=Me,R=De,F=ie,D=Ne),(et.equals(U)===!1||Mt!==k)&&(i.blendColor(et.r,et.g,et.b,Mt),U.copy(et),k=Mt),g=N,b=!1}function ke(N,me){N.side===En?Ue(i.CULL_FACE):ue(i.CULL_FACE);let Me=N.side===Ht;me&&(Me=!Me),st(Me),N.blending===yi&&N.transparent===!1?lt(Un):lt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const De=N.stencilWrite;o.setTest(De),De&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),_e(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(N){T!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),T=N)}function We(N){N!==kl?(ue(i.CULL_FACE),N!==P&&(N===Oa?i.cullFace(i.BACK):N===Hl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),P=N}function _t(N){N!==Q&&(ee&&i.lineWidth(N),Q=N)}function _e(N,me,Me){N?(ue(i.POLYGON_OFFSET_FILL),(q!==me||K!==Me)&&(i.polygonOffset(me,Me),q=me,K=Me)):Ue(i.POLYGON_OFFSET_FILL)}function tt(N){N?ue(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function Ct(N){N===void 0&&(N=i.TEXTURE0+se-1),xe!==N&&(i.activeTexture(N),xe=N)}function bt(N,me,Me){Me===void 0&&(xe===null?Me=i.TEXTURE0+se-1:Me=xe);let De=Ee[Me];De===void 0&&(De={type:void 0,texture:void 0},Ee[Me]=De),(De.type!==N||De.texture!==me)&&(xe!==Me&&(i.activeTexture(Me),xe=Me),i.bindTexture(N,me||ge[N]),De.type=N,De.texture=me)}function A(){const N=Ee[xe];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xe(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Oe(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function He(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(N){ze.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ze.copy(N))}function Je(N){Ce.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Ce.copy(N))}function Ve(N,me){let Me=l.get(me);Me===void 0&&(Me=new WeakMap,l.set(me,Me));let De=Me.get(N);De===void 0&&(De=i.getUniformBlockIndex(me,N.name),Me.set(N,De))}function Se(N,me){const De=l.get(me).get(N);c.get(me)!==De&&(i.uniformBlockBinding(me,De,N.__bindingPointIndex),c.set(me,De))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},xe=null,Ee={},u={},p=new WeakMap,m=[],v=null,S=!1,g=null,d=null,L=null,R=null,w=null,F=null,D=null,U=new ct(0,0,0),k=0,b=!1,T=null,P=null,Q=null,q=null,K=null,ze.set(0,0,i.canvas.width,i.canvas.height),Ce.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ue,disable:Ue,bindFramebuffer:Le,drawBuffers:Ge,useProgram:it,setBlending:lt,setMaterial:ke,setFlipSided:st,setCullFace:We,setLineWidth:_t,setPolygonOffset:_e,setScissorTest:tt,activeTexture:Ct,bindTexture:bt,unbindTexture:A,compressedTexImage2D:_,compressedTexImage3D:H,texImage2D:He,texImage3D:pe,updateUBOMapping:Ve,uniformBlockBinding:Se,texStorage2D:ve,texStorage3D:Oe,texSubImage2D:Z,texSubImage3D:ce,compressedTexSubImage2D:J,compressedTexSubImage3D:Xe,scissor:we,viewport:Je,reset:nt}}function Wp(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new gt,h=new WeakMap;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,_){return m?new OffscreenCanvas(A,_):ks("canvas")}function S(A,_,H){let Z=1;const ce=bt(A);if((ce.width>H||ce.height>H)&&(Z=H/Math.max(ce.width,ce.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const J=Math.floor(Z*ce.width),Xe=Math.floor(Z*ce.height);u===void 0&&(u=v(J,Xe));const ve=_?v(J,Xe):u;return ve.width=J,ve.height=Xe,ve.getContext("2d").drawImage(A,0,0,J,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+J+"x"+Xe+")."),ve}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),A;return A}function g(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function L(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(A,_,H,Z,ce=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=_;if(_===i.RED&&(H===i.FLOAT&&(J=i.R32F),H===i.HALF_FLOAT&&(J=i.R16F),H===i.UNSIGNED_BYTE&&(J=i.R8)),_===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.R8UI),H===i.UNSIGNED_SHORT&&(J=i.R16UI),H===i.UNSIGNED_INT&&(J=i.R32UI),H===i.BYTE&&(J=i.R8I),H===i.SHORT&&(J=i.R16I),H===i.INT&&(J=i.R32I)),_===i.RG&&(H===i.FLOAT&&(J=i.RG32F),H===i.HALF_FLOAT&&(J=i.RG16F),H===i.UNSIGNED_BYTE&&(J=i.RG8)),_===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RG8UI),H===i.UNSIGNED_SHORT&&(J=i.RG16UI),H===i.UNSIGNED_INT&&(J=i.RG32UI),H===i.BYTE&&(J=i.RG8I),H===i.SHORT&&(J=i.RG16I),H===i.INT&&(J=i.RG32I)),_===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGB8UI),H===i.UNSIGNED_SHORT&&(J=i.RGB16UI),H===i.UNSIGNED_INT&&(J=i.RGB32UI),H===i.BYTE&&(J=i.RGB8I),H===i.SHORT&&(J=i.RGB16I),H===i.INT&&(J=i.RGB32I)),_===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),H===i.UNSIGNED_INT&&(J=i.RGBA32UI),H===i.BYTE&&(J=i.RGBA8I),H===i.SHORT&&(J=i.RGBA16I),H===i.INT&&(J=i.RGBA32I)),_===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),_===i.RGBA){const Xe=ce?Bs:mt.getTransfer(Z);H===i.FLOAT&&(J=i.RGBA32F),H===i.HALF_FLOAT&&(J=i.RGBA16F),H===i.UNSIGNED_BYTE&&(J=Xe===yt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function w(A,_){let H;return A?_===null||_===ti||_===Wi?H=i.DEPTH24_STENCIL8:_===Tn?H=i.DEPTH32F_STENCIL8:_===Gi&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ti||_===Wi?H=i.DEPTH_COMPONENT24:_===Tn?H=i.DEPTH_COMPONENT32F:_===Gi&&(H=i.DEPTH_COMPONENT16),H}function F(A,_){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==ln&&A.minFilter!==dn?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function D(A){const _=A.target;_.removeEventListener("dispose",D),k(_),_.isVideoTexture&&h.delete(_)}function U(A){const _=A.target;_.removeEventListener("dispose",U),T(_)}function k(A){const _=n.get(A);if(_.__webglInit===void 0)return;const H=A.source,Z=p.get(H);if(Z){const ce=Z[_.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&b(A),Object.keys(Z).length===0&&p.delete(H)}n.remove(A)}function b(A){const _=n.get(A);i.deleteTexture(_.__webglTexture);const H=A.source,Z=p.get(H);delete Z[_.__cacheKey],a.memory.textures--}function T(A){const _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let ce=0;ce<_.__webglFramebuffer[Z].length;ce++)i.deleteFramebuffer(_.__webglFramebuffer[Z][ce]);else i.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[Z]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const H=A.textures;for(let Z=0,ce=H.length;Z<ce;Z++){const J=n.get(H[Z]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(H[Z])}n.remove(A)}let P=0;function Q(){P=0}function q(){const A=P;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function K(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function se(A,_){const H=n.get(A);if(A.isVideoTexture&&tt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&H.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(H,A,_);return}}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+_)}function ee(A,_){const H=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){ge(H,A,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+_)}function de(A,_){const H=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){ge(H,A,_);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+_)}function Y(A,_){const H=n.get(A);if(A.version>0&&H.__version!==A.version){ue(H,A,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+_)}const xe={[Hr]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[Vr]:i.MIRRORED_REPEAT},Ee={[ln]:i.NEAREST,[gc]:i.NEAREST_MIPMAP_NEAREST,[as]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[Ys]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},Pe={[Mc]:i.NEVER,[Ac]:i.ALWAYS,[Sc]:i.LESS,[ol]:i.LEQUAL,[yc]:i.EQUAL,[bc]:i.GEQUAL,[Ec]:i.GREATER,[Tc]:i.NOTEQUAL};function Qe(A,_){if(_.type===Tn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===dn||_.magFilter===Ys||_.magFilter===as||_.magFilter===Qn||_.minFilter===dn||_.minFilter===Ys||_.minFilter===as||_.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,xe[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,xe[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,xe[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Ee[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Ee[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Pe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ln||_.minFilter!==as&&_.minFilter!==Qn||_.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ze(A,_){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",D));const Z=_.source;let ce=p.get(Z);ce===void 0&&(ce={},p.set(Z,ce));const J=K(_);if(J!==A.__cacheKey){ce[J]===void 0&&(ce[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ce[J].usedTimes++;const Xe=ce[A.__cacheKey];Xe!==void 0&&(ce[A.__cacheKey].usedTimes--,Xe.usedTimes===0&&b(_)),A.__cacheKey=J,A.__webglTexture=ce[J].texture}return H}function Ce(A,_,H){return Math.floor(Math.floor(A/H)/_)}function W(A,_,H,Z){const J=A.updateRanges;if(J.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,H,Z,_.data);else{J.sort((pe,we)=>pe.start-we.start);let Xe=0;for(let pe=1;pe<J.length;pe++){const we=J[Xe],Je=J[pe],Ve=we.start+we.count,Se=Ce(Je.start,_.width,4),nt=Ce(we.start,_.width,4);Je.start<=Ve+1&&Se===nt&&Ce(Je.start+Je.count-1,_.width,4)===Se?we.count=Math.max(we.count,Je.start+Je.count-we.start):(++Xe,J[Xe]=Je)}J.length=Xe+1;const ve=i.getParameter(i.UNPACK_ROW_LENGTH),Oe=i.getParameter(i.UNPACK_SKIP_PIXELS),He=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let pe=0,we=J.length;pe<we;pe++){const Je=J[pe],Ve=Math.floor(Je.start/4),Se=Math.ceil(Je.count/4),nt=Ve%_.width,N=Math.floor(Ve/_.width),me=Se,Me=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,nt,N,me,Me,H,Z,_.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ve),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),i.pixelStorei(i.UNPACK_SKIP_ROWS,He)}}function ge(A,_,H){let Z=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=i.TEXTURE_3D);const ce=ze(A,_),J=_.source;t.bindTexture(Z,A.__webglTexture,i.TEXTURE0+H);const Xe=n.get(J);if(J.version!==Xe.__version||ce===!0){t.activeTexture(i.TEXTURE0+H);const ve=mt.getPrimaries(mt.workingColorSpace),Oe=_.colorSpace===In?null:mt.getPrimaries(_.colorSpace),He=_.colorSpace===In||ve===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let pe=S(_.image,!1,s.maxTextureSize);pe=Ct(_,pe);const we=r.convert(_.format,_.colorSpace),Je=r.convert(_.type);let Ve=R(_.internalFormat,we,Je,_.colorSpace,_.isVideoTexture);Qe(Z,_);let Se;const nt=_.mipmaps,N=_.isVideoTexture!==!0,me=Xe.__version===void 0||ce===!0,Me=J.dataReady,De=F(_,pe);if(_.isDepthTexture)Ve=w(_.format===$i,_.type),me&&(N?t.texStorage2D(i.TEXTURE_2D,1,Ve,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,Ve,pe.width,pe.height,0,we,Je,null));else if(_.isDataTexture)if(nt.length>0){N&&me&&t.texStorage2D(i.TEXTURE_2D,De,Ve,nt[0].width,nt[0].height);for(let fe=0,ie=nt.length;fe<ie;fe++)Se=nt[fe],N?Me&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Se.width,Se.height,we,Je,Se.data):t.texImage2D(i.TEXTURE_2D,fe,Ve,Se.width,Se.height,0,we,Je,Se.data);_.generateMipmaps=!1}else N?(me&&t.texStorage2D(i.TEXTURE_2D,De,Ve,pe.width,pe.height),Me&&W(_,pe,we,Je)):t.texImage2D(i.TEXTURE_2D,0,Ve,pe.width,pe.height,0,we,Je,pe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){N&&me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Ve,nt[0].width,nt[0].height,pe.depth);for(let fe=0,ie=nt.length;fe<ie;fe++)if(Se=nt[fe],_.format!==on)if(we!==null)if(N){if(Me)if(_.layerUpdates.size>0){const Ne=vo(Se.width,Se.height,_.format,_.type);for(const et of _.layerUpdates){const Mt=Se.data.subarray(et*Ne/Se.data.BYTES_PER_ELEMENT,(et+1)*Ne/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,et,Se.width,Se.height,1,we,Mt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Se.width,Se.height,pe.depth,we,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,Ve,Se.width,Se.height,pe.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?Me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Se.width,Se.height,pe.depth,we,Je,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,Ve,Se.width,Se.height,pe.depth,0,we,Je,Se.data)}else{N&&me&&t.texStorage2D(i.TEXTURE_2D,De,Ve,nt[0].width,nt[0].height);for(let fe=0,ie=nt.length;fe<ie;fe++)Se=nt[fe],_.format!==on?we!==null?N?Me&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,Se.width,Se.height,we,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,Ve,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?Me&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Se.width,Se.height,we,Je,Se.data):t.texImage2D(i.TEXTURE_2D,fe,Ve,Se.width,Se.height,0,we,Je,Se.data)}else if(_.isDataArrayTexture)if(N){if(me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Ve,pe.width,pe.height,pe.depth),Me)if(_.layerUpdates.size>0){const fe=vo(pe.width,pe.height,_.format,_.type);for(const ie of _.layerUpdates){const Ne=pe.data.subarray(ie*fe/pe.data.BYTES_PER_ELEMENT,(ie+1)*fe/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,pe.width,pe.height,1,we,Je,Ne)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,we,Je,pe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ve,pe.width,pe.height,pe.depth,0,we,Je,pe.data);else if(_.isData3DTexture)N?(me&&t.texStorage3D(i.TEXTURE_3D,De,Ve,pe.width,pe.height,pe.depth),Me&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,we,Je,pe.data)):t.texImage3D(i.TEXTURE_3D,0,Ve,pe.width,pe.height,pe.depth,0,we,Je,pe.data);else if(_.isFramebufferTexture){if(me)if(N)t.texStorage2D(i.TEXTURE_2D,De,Ve,pe.width,pe.height);else{let fe=pe.width,ie=pe.height;for(let Ne=0;Ne<De;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,Ve,fe,ie,0,we,Je,null),fe>>=1,ie>>=1}}else if(nt.length>0){if(N&&me){const fe=bt(nt[0]);t.texStorage2D(i.TEXTURE_2D,De,Ve,fe.width,fe.height)}for(let fe=0,ie=nt.length;fe<ie;fe++)Se=nt[fe],N?Me&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,we,Je,Se):t.texImage2D(i.TEXTURE_2D,fe,Ve,we,Je,Se);_.generateMipmaps=!1}else if(N){if(me){const fe=bt(pe);t.texStorage2D(i.TEXTURE_2D,De,Ve,fe.width,fe.height)}Me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,Je,pe)}else t.texImage2D(i.TEXTURE_2D,0,Ve,we,Je,pe);g(_)&&d(Z),Xe.__version=J.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function ue(A,_,H){if(_.image.length!==6)return;const Z=ze(A,_),ce=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+H);const J=n.get(ce);if(ce.version!==J.__version||Z===!0){t.activeTexture(i.TEXTURE0+H);const Xe=mt.getPrimaries(mt.workingColorSpace),ve=_.colorSpace===In?null:mt.getPrimaries(_.colorSpace),Oe=_.colorSpace===In||Xe===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const He=_.isCompressedTexture||_.image[0].isCompressedTexture,pe=_.image[0]&&_.image[0].isDataTexture,we=[];for(let ie=0;ie<6;ie++)!He&&!pe?we[ie]=S(_.image[ie],!0,s.maxCubemapSize):we[ie]=pe?_.image[ie].image:_.image[ie],we[ie]=Ct(_,we[ie]);const Je=we[0],Ve=r.convert(_.format,_.colorSpace),Se=r.convert(_.type),nt=R(_.internalFormat,Ve,Se,_.colorSpace),N=_.isVideoTexture!==!0,me=J.__version===void 0||Z===!0,Me=ce.dataReady;let De=F(_,Je);Qe(i.TEXTURE_CUBE_MAP,_);let fe;if(He){N&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,nt,Je.width,Je.height);for(let ie=0;ie<6;ie++){fe=we[ie].mipmaps;for(let Ne=0;Ne<fe.length;Ne++){const et=fe[Ne];_.format!==on?Ve!==null?N?Me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne,0,0,et.width,et.height,Ve,et.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne,nt,et.width,et.height,0,et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne,0,0,et.width,et.height,Ve,Se,et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne,nt,et.width,et.height,0,Ve,Se,et.data)}}}else{if(fe=_.mipmaps,N&&me){fe.length>0&&De++;const ie=bt(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,nt,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(pe){N?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,we[ie].width,we[ie].height,Ve,Se,we[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,nt,we[ie].width,we[ie].height,0,Ve,Se,we[ie].data);for(let Ne=0;Ne<fe.length;Ne++){const Mt=fe[Ne].image[ie].image;N?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne+1,0,0,Mt.width,Mt.height,Ve,Se,Mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne+1,nt,Mt.width,Mt.height,0,Ve,Se,Mt.data)}}else{N?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ve,Se,we[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,nt,Ve,Se,we[ie]);for(let Ne=0;Ne<fe.length;Ne++){const et=fe[Ne];N?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne+1,0,0,Ve,Se,et.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne+1,nt,Ve,Se,et.image[ie])}}}g(_)&&d(i.TEXTURE_CUBE_MAP),J.__version=ce.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Ue(A,_,H,Z,ce,J){const Xe=r.convert(H.format,H.colorSpace),ve=r.convert(H.type),Oe=R(H.internalFormat,Xe,ve,H.colorSpace),He=n.get(_),pe=n.get(H);if(pe.__renderTarget=_,!He.__hasExternalTextures){const we=Math.max(1,_.width>>J),Je=Math.max(1,_.height>>J);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,J,Oe,we,Je,_.depth,0,Xe,ve,null):t.texImage2D(ce,J,Oe,we,Je,0,Xe,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),_e(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ce,pe.__webglTexture,0,_t(_)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ce,pe.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(A,_,H){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){const Z=_.depthTexture,ce=Z&&Z.isDepthTexture?Z.type:null,J=w(_.stencilBuffer,ce),Xe=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=_t(_);_e(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,J,_.width,_.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,J,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,J,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Xe,i.RENDERBUFFER,A)}else{const Z=_.textures;for(let ce=0;ce<Z.length;ce++){const J=Z[ce],Xe=r.convert(J.format,J.colorSpace),ve=r.convert(J.type),Oe=R(J.internalFormat,Xe,ve,J.colorSpace),He=_t(_);H&&_e(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Oe,_.width,_.height):_e(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He,Oe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Oe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ge(A,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(_.depthTexture);Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),se(_.depthTexture,0);const ce=Z.__webglTexture,J=_t(_);if(_.depthTexture.format===Xi)_e(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0);else if(_.depthTexture.format===$i)_e(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function it(A){const _=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){const ce=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",ce)};Z.addEventListener("dispose",ce),_.__depthDisposeCallback=ce}_.__boundDepthTexture=Z}if(A.depthTexture&&!_.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const Z=A.texture.mipmaps;Z&&Z.length>0?Ge(_.__webglFramebuffer[0],A):Ge(_.__webglFramebuffer,A)}else if(H){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=i.createRenderbuffer(),Le(_.__webglDepthbuffer[Z],A,!1);else{const ce=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,J)}}else{const Z=A.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Le(_.__webglDepthbuffer,A,!1);else{const ce=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,J)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(A,_,H){const Z=n.get(A);_!==void 0&&Ue(Z.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&it(A)}function C(A){const _=A.texture,H=n.get(A),Z=n.get(_);A.addEventListener("dispose",U);const ce=A.textures,J=A.isWebGLCubeRenderTarget===!0,Xe=ce.length>1;if(Xe||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=_.version,a.memory.textures++),J){H.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer[ve]=[];for(let Oe=0;Oe<_.mipmaps.length;Oe++)H.__webglFramebuffer[ve][Oe]=i.createFramebuffer()}else H.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer=[];for(let ve=0;ve<_.mipmaps.length;ve++)H.__webglFramebuffer[ve]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Xe)for(let ve=0,Oe=ce.length;ve<Oe;ve++){const He=n.get(ce[ve]);He.__webglTexture===void 0&&(He.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&_e(A)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ve=0;ve<ce.length;ve++){const Oe=ce[ve];H.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ve]);const He=r.convert(Oe.format,Oe.colorSpace),pe=r.convert(Oe.type),we=R(Oe.internalFormat,He,pe,Oe.colorSpace,A.isXRRenderTarget===!0),Je=_t(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,we,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,H.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,_);for(let ve=0;ve<6;ve++)if(_.mipmaps&&_.mipmaps.length>0)for(let Oe=0;Oe<_.mipmaps.length;Oe++)Ue(H.__webglFramebuffer[ve][Oe],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Oe);else Ue(H.__webglFramebuffer[ve],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);g(_)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let ve=0,Oe=ce.length;ve<Oe;ve++){const He=ce[ve],pe=n.get(He);let we=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(we=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(we,pe.__webglTexture),Qe(we,He),Ue(H.__webglFramebuffer,A,He,i.COLOR_ATTACHMENT0+ve,we,0),g(He)&&d(we)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ve=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,Z.__webglTexture),Qe(ve,_),_.mipmaps&&_.mipmaps.length>0)for(let Oe=0;Oe<_.mipmaps.length;Oe++)Ue(H.__webglFramebuffer[Oe],A,_,i.COLOR_ATTACHMENT0,ve,Oe);else Ue(H.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,ve,0);g(_)&&d(ve),t.unbindTexture()}A.depthBuffer&&it(A)}function lt(A){const _=A.textures;for(let H=0,Z=_.length;H<Z;H++){const ce=_[H];if(g(ce)){const J=L(A),Xe=n.get(ce).__webglTexture;t.bindTexture(J,Xe),d(J),t.unbindTexture()}}}const ke=[],st=[];function We(A){if(A.samples>0){if(_e(A)===!1){const _=A.textures,H=A.width,Z=A.height;let ce=i.COLOR_BUFFER_BIT;const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Xe=n.get(A),ve=_.length>1;if(ve)for(let He=0;He<_.length;He++)t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer);const Oe=A.texture.mipmaps;Oe&&Oe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let He=0;He<_.length;He++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),ve){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Xe.__webglColorRenderbuffer[He]);const pe=n.get(_[He]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pe,0)}i.blitFramebuffer(0,0,H,Z,0,0,H,Z,ce,i.NEAREST),c===!0&&(ke.length=0,st.length=0,ke.push(i.COLOR_ATTACHMENT0+He),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ke.push(J),st.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,st)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let He=0;He<_.length;He++){t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,Xe.__webglColorRenderbuffer[He]);const pe=n.get(_[He]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function _t(A){return Math.min(s.maxSamples,A.samples)}function _e(A){const _=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function tt(A){const _=a.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function Ct(A,_){const H=A.colorSpace,Z=A.format,ce=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==Ri&&H!==In&&(mt.getTransfer(H)===yt?(Z!==on||ce!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),_}function bt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=Q,this.setTexture2D=se,this.setTexture2DArray=ee,this.setTexture3D=de,this.setTextureCube=Y,this.rebindTextures=Ke,this.setupRenderTarget=C,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=_e}function Xp(i,e){function t(n,s=In){let r;const a=mt.getTransfer(s);if(n===pn)return i.UNSIGNED_BYTE;if(n===Sa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ya)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qo)return i.BYTE;if(n===el)return i.SHORT;if(n===Gi)return i.UNSIGNED_SHORT;if(n===Ma)return i.INT;if(n===ti)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===qi)return i.HALF_FLOAT;if(n===nl)return i.ALPHA;if(n===il)return i.RGB;if(n===on)return i.RGBA;if(n===Xi)return i.DEPTH_COMPONENT;if(n===$i)return i.DEPTH_STENCIL;if(n===sl)return i.RED;if(n===Ea)return i.RED_INTEGER;if(n===rl)return i.RG;if(n===Ta)return i.RG_INTEGER;if(n===ba)return i.RGBA_INTEGER;if(n===Ls||n===Is||n===Us||n===Ns)if(a===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ls)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ls)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ns)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gr||n===Wr||n===Xr||n===$r)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Gr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$r)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qr||n===Yr||n===jr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qr||n===Yr)return a===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===jr)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Kr||n===Zr||n===Jr||n===Qr||n===ea||n===ta||n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===la||n===ca)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Kr)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zr)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jr)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qr)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ea)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ta)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===na)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ia)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sa)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ra)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===aa)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oa)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===la)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ca)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fs||n===ua||n===da)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Fs)return a===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ua)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===da)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===al||n===ha||n===fa||n===pa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ha)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class wl extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const $p=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qp=`
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

}`;class Yp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new wl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new On({vertexShader:$p,fragmentShader:qp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kt(new Qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jp extends Pi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,p=null,m=null,v=null;const S=new Yp,g={},d=t.getContextAttributes();let L=null,R=null;const w=[],F=[],D=new gt;let U=null;const k=new jt;k.viewport=new Rt;const b=new jt;b.viewport=new Rt;const T=[k,b],P=new mu;let Q=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ge=w[W];return ge===void 0&&(ge=new _r,w[W]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(W){let ge=w[W];return ge===void 0&&(ge=new _r,w[W]=ge),ge.getGripSpace()},this.getHand=function(W){let ge=w[W];return ge===void 0&&(ge=new _r,w[W]=ge),ge.getHandSpace()};function K(W){const ge=F.indexOf(W.inputSource);if(ge===-1)return;const ue=w[ge];ue!==void 0&&(ue.update(W.inputSource,W.frame,l||a),ue.dispatchEvent({type:W.type,data:W.inputSource}))}function se(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",se),s.removeEventListener("inputsourceschange",ee);for(let W=0;W<w.length;W++){const ge=F[W];ge!==null&&(F[W]=null,w[W].disconnect(ge))}Q=null,q=null,S.reset();for(const W in g)delete g[W];e.setRenderTarget(L),m=null,p=null,u=null,s=null,R=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(L=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",se),s.addEventListener("inputsourceschange",ee),d.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&(u=new XRWebGLBinding(s,t)),u!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Ue=null,Le=null;d.depth&&(Le=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=d.stencil?$i:Xi,Ue=d.stencil?Wi:ti);const Ge={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:r};p=u.createProjectionLayer(Ge),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),R=new ni(p.textureWidth,p.textureHeight,{format:on,type:pn,depthTexture:new xl(p.textureWidth,p.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ue={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),R=new ni(m.framebufferWidth,m.framebufferHeight,{format:on,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ce.setContext(s),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ee(W){for(let ge=0;ge<W.removed.length;ge++){const ue=W.removed[ge],Ue=F.indexOf(ue);Ue>=0&&(F[Ue]=null,w[Ue].disconnect(ue))}for(let ge=0;ge<W.added.length;ge++){const ue=W.added[ge];let Ue=F.indexOf(ue);if(Ue===-1){for(let Ge=0;Ge<w.length;Ge++)if(Ge>=F.length){F.push(ue),Ue=Ge;break}else if(F[Ge]===null){F[Ge]=ue,Ue=Ge;break}if(Ue===-1)break}const Le=w[Ue];Le&&Le.connect(ue)}}const de=new V,Y=new V;function xe(W,ge,ue){de.setFromMatrixPosition(ge.matrixWorld),Y.setFromMatrixPosition(ue.matrixWorld);const Ue=de.distanceTo(Y),Le=ge.projectionMatrix.elements,Ge=ue.projectionMatrix.elements,it=Le[14]/(Le[10]-1),Ke=Le[14]/(Le[10]+1),C=(Le[9]+1)/Le[5],lt=(Le[9]-1)/Le[5],ke=(Le[8]-1)/Le[0],st=(Ge[8]+1)/Ge[0],We=it*ke,_t=it*st,_e=Ue/(-ke+st),tt=_e*-ke;if(ge.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(tt),W.translateZ(_e),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Le[10]===-1)W.projectionMatrix.copy(ge.projectionMatrix),W.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Ct=it+_e,bt=Ke+_e,A=We-tt,_=_t+(Ue-tt),H=C*Ke/bt*Ct,Z=lt*Ke/bt*Ct;W.projectionMatrix.makePerspective(A,_,H,Z,Ct,bt),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Ee(W,ge){ge===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ge.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let ge=W.near,ue=W.far;S.texture!==null&&(S.depthNear>0&&(ge=S.depthNear),S.depthFar>0&&(ue=S.depthFar)),P.near=b.near=k.near=ge,P.far=b.far=k.far=ue,(Q!==P.near||q!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),Q=P.near,q=P.far),P.layers.mask=W.layers.mask|6,k.layers.mask=P.layers.mask&3,b.layers.mask=P.layers.mask&5;const Ue=W.parent,Le=P.cameras;Ee(P,Ue);for(let Ge=0;Ge<Le.length;Ge++)Ee(Le[Ge],Ue);Le.length===2?xe(P,k,b):P.projectionMatrix.copy(k.projectionMatrix),Pe(W,P,Ue)};function Pe(W,ge,ue){ue===null?W.matrix.copy(ge.matrixWorld):(W.matrix.copy(ue.matrixWorld),W.matrix.invert(),W.matrix.multiply(ge.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ge.projectionMatrix),W.projectionMatrixInverse.copy(ge.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ma*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(W){c=W,p!==null&&(p.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(P)},this.getCameraTexture=function(W){return g[W]};let Qe=null;function ze(W,ge){if(h=ge.getViewerPose(l||a),v=ge,h!==null){const ue=h.views;m!==null&&(e.setRenderTargetFramebuffer(R,m.framebuffer),e.setRenderTarget(R));let Ue=!1;ue.length!==P.cameras.length&&(P.cameras.length=0,Ue=!0);for(let Ke=0;Ke<ue.length;Ke++){const C=ue[Ke];let lt=null;if(m!==null)lt=m.getViewport(C);else{const st=u.getViewSubImage(p,C);lt=st.viewport,Ke===0&&(e.setRenderTargetTextures(R,st.colorTexture,st.depthStencilTexture),e.setRenderTarget(R))}let ke=T[Ke];ke===void 0&&(ke=new jt,ke.layers.enable(Ke),ke.viewport=new Rt,T[Ke]=ke),ke.matrix.fromArray(C.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(C.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(lt.x,lt.y,lt.width,lt.height),Ke===0&&(P.matrix.copy(ke.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ue===!0&&P.cameras.push(ke)}const Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const Ke=u.getDepthInformation(ue[0]);Ke&&Ke.isValid&&Ke.texture&&S.init(Ke,s.renderState)}if(Le&&Le.includes("camera-access")&&(e.state.unbindTexture(),u))for(let Ke=0;Ke<ue.length;Ke++){const C=ue[Ke].camera;if(C){let lt=g[C];lt||(lt=new wl,g[C]=lt);const ke=u.getCameraImage(C);lt.sourceTexture=ke}}}for(let ue=0;ue<w.length;ue++){const Ue=F[ue],Le=w[ue];Ue!==null&&Le!==void 0&&Le.update(Ue,ge,l||a)}Qe&&Qe(W,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),v=null}const Ce=new yl;Ce.setAnimationLoop(ze),this.setAnimationLoop=function(W){Qe=W},this.dispose=function(){}}}const $n=new cn,Kp=new At;function Zp(i,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,ml(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,L,R,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),u(g,d)):d.isMeshPhongMaterial?(r(g,d),h(g,d)):d.isMeshStandardMaterial?(r(g,d),p(g,d),d.isMeshPhysicalMaterial&&m(g,d,w)):d.isMeshMatcapMaterial?(r(g,d),v(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),S(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?c(g,d,L,R):d.isSpriteMaterial?l(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Ht&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Ht&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const L=e.get(d),R=L.envMap,w=L.envMapRotation;R&&(g.envMap.value=R,$n.copy(w),$n.x*=-1,$n.y*=-1,$n.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),g.envMapRotation.value.setFromMatrix4(Kp.makeRotationFromEuler($n)),g.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function c(g,d,L,R){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*L,g.scale.value=R*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function l(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function u(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function p(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,L){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ht&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=L.texture,g.transmissionSamplerSize.value.set(L.width,L.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,d){d.matcap&&(g.matcap.value=d.matcap)}function S(g,d){const L=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(L.matrixWorld),g.nearDistance.value=L.shadow.camera.near,g.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Jp(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(L,R){const w=R.program;n.uniformBlockBinding(L,w)}function l(L,R){let w=s[L.id];w===void 0&&(v(L),w=h(L),s[L.id]=w,L.addEventListener("dispose",g));const F=R.program;n.updateUBOMapping(L,F);const D=e.render.frame;r[L.id]!==D&&(p(L),r[L.id]=D)}function h(L){const R=u();L.__bindingPointIndex=R;const w=i.createBuffer(),F=L.__size,D=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,F,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,w),w}function u(){for(let L=0;L<o;L++)if(a.indexOf(L)===-1)return a.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(L){const R=s[L.id],w=L.uniforms,F=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let D=0,U=w.length;D<U;D++){const k=Array.isArray(w[D])?w[D]:[w[D]];for(let b=0,T=k.length;b<T;b++){const P=k[b];if(m(P,D,b,F)===!0){const Q=P.__offset,q=Array.isArray(P.value)?P.value:[P.value];let K=0;for(let se=0;se<q.length;se++){const ee=q[se],de=S(ee);typeof ee=="number"||typeof ee=="boolean"?(P.__data[0]=ee,i.bufferSubData(i.UNIFORM_BUFFER,Q+K,P.__data)):ee.isMatrix3?(P.__data[0]=ee.elements[0],P.__data[1]=ee.elements[1],P.__data[2]=ee.elements[2],P.__data[3]=0,P.__data[4]=ee.elements[3],P.__data[5]=ee.elements[4],P.__data[6]=ee.elements[5],P.__data[7]=0,P.__data[8]=ee.elements[6],P.__data[9]=ee.elements[7],P.__data[10]=ee.elements[8],P.__data[11]=0):(ee.toArray(P.__data,K),K+=de.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Q,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(L,R,w,F){const D=L.value,U=R+"_"+w;if(F[U]===void 0)return typeof D=="number"||typeof D=="boolean"?F[U]=D:F[U]=D.clone(),!0;{const k=F[U];if(typeof D=="number"||typeof D=="boolean"){if(k!==D)return F[U]=D,!0}else if(k.equals(D)===!1)return k.copy(D),!0}return!1}function v(L){const R=L.uniforms;let w=0;const F=16;for(let U=0,k=R.length;U<k;U++){const b=Array.isArray(R[U])?R[U]:[R[U]];for(let T=0,P=b.length;T<P;T++){const Q=b[T],q=Array.isArray(Q.value)?Q.value:[Q.value];for(let K=0,se=q.length;K<se;K++){const ee=q[K],de=S(ee),Y=w%F,xe=Y%de.boundary,Ee=Y+xe;w+=xe,Ee!==0&&F-Ee<de.storage&&(w+=F-Ee),Q.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=w,w+=de.storage}}}const D=w%F;return D>0&&(w+=F-D),L.__size=w,L.__cache={},this}function S(L){const R={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(R.boundary=4,R.storage=4):L.isVector2?(R.boundary=8,R.storage=8):L.isVector3||L.isColor?(R.boundary=16,R.storage=12):L.isVector4?(R.boundary=16,R.storage=16):L.isMatrix3?(R.boundary=48,R.storage=48):L.isMatrix4?(R.boundary=64,R.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),R}function g(L){const R=L.target;R.removeEventListener("dispose",g);const w=a.indexOf(R.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function d(){for(const L in s)i.deleteBuffer(s[L]);a=[],s={},r={}}return{bind:c,update:l,dispose:d}}class Qp{constructor(e={}){const{canvas:t=Rc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const v=new Uint32Array(4),S=new Int32Array(4);let g=null,d=null;const L=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let F=!1;this._outputColorSpace=Xt;let D=0,U=0,k=null,b=-1,T=null;const P=new Rt,Q=new Rt;let q=null;const K=new ct(0);let se=0,ee=t.width,de=t.height,Y=1,xe=null,Ee=null;const Pe=new Rt(0,0,ee,de),Qe=new Rt(0,0,ee,de);let ze=!1;const Ce=new Ca;let W=!1,ge=!1;const ue=new At,Ue=new V,Le=new Rt,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function Ke(){return k===null?Y:1}let C=n;function lt(y,B){return t.getContext(y,B)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${va}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",fe,!1),C===null){const B="webgl2";if(C=lt(B,y),C===null)throw lt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ke,st,We,_t,_e,tt,Ct,bt,A,_,H,Z,ce,J,Xe,ve,Oe,He,pe,we,Je,Ve,Se,nt;function N(){ke=new cf(C),ke.init(),Ve=new Xp(C,ke),st=new tf(C,ke,e,Ve),We=new Gp(C,ke),st.reversedDepthBuffer&&p&&We.buffers.depth.setReversed(!0),_t=new hf(C),_e=new Pp,tt=new Wp(C,ke,We,_e,st,Ve,_t),Ct=new sf(w),bt=new lf(w),A=new _u(C),Se=new Qh(C,A),_=new uf(C,A,_t,Se),H=new pf(C,_,A,_t),pe=new ff(C,st,tt),ve=new nf(_e),Z=new Cp(w,Ct,bt,ke,st,Se,ve),ce=new Zp(w,_e),J=new Lp,Xe=new Bp(ke),He=new Jh(w,Ct,bt,We,H,m,c),Oe=new Hp(w,H,st),nt=new Jp(C,_t,st,We),we=new ef(C,ke,_t),Je=new df(C,ke,_t),_t.programs=Z.programs,w.capabilities=st,w.extensions=ke,w.properties=_e,w.renderLists=J,w.shadowMap=Oe,w.state=We,w.info=_t}N();const me=new jp(w,C);this.xr=me,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const y=ke.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ke.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(y){y!==void 0&&(Y=y,this.setSize(ee,de,!1))},this.getSize=function(y){return y.set(ee,de)},this.setSize=function(y,B,X=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=y,de=B,t.width=Math.floor(y*Y),t.height=Math.floor(B*Y),X===!0&&(t.style.width=y+"px",t.style.height=B+"px"),this.setViewport(0,0,y,B)},this.getDrawingBufferSize=function(y){return y.set(ee*Y,de*Y).floor()},this.setDrawingBufferSize=function(y,B,X){ee=y,de=B,Y=X,t.width=Math.floor(y*X),t.height=Math.floor(B*X),this.setViewport(0,0,y,B)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(Pe)},this.setViewport=function(y,B,X,$){y.isVector4?Pe.set(y.x,y.y,y.z,y.w):Pe.set(y,B,X,$),We.viewport(P.copy(Pe).multiplyScalar(Y).round())},this.getScissor=function(y){return y.copy(Qe)},this.setScissor=function(y,B,X,$){y.isVector4?Qe.set(y.x,y.y,y.z,y.w):Qe.set(y,B,X,$),We.scissor(Q.copy(Qe).multiplyScalar(Y).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(y){We.setScissorTest(ze=y)},this.setOpaqueSort=function(y){xe=y},this.setTransparentSort=function(y){Ee=y},this.getClearColor=function(y){return y.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(y=!0,B=!0,X=!0){let $=0;if(y){let z=!1;if(k!==null){const re=k.texture.format;z=re===ba||re===Ta||re===Ea}if(z){const re=k.texture.type,Ae=re===pn||re===ti||re===Gi||re===Wi||re===Sa||re===ya,Ie=He.getClearColor(),Re=He.getClearAlpha(),je=Ie.r,Ze=Ie.g,qe=Ie.b;Ae?(v[0]=je,v[1]=Ze,v[2]=qe,v[3]=Re,C.clearBufferuiv(C.COLOR,0,v)):(S[0]=je,S[1]=Ze,S[2]=qe,S[3]=Re,C.clearBufferiv(C.COLOR,0,S))}else $|=C.COLOR_BUFFER_BIT}B&&($|=C.DEPTH_BUFFER_BIT),X&&($|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),He.dispose(),J.dispose(),Xe.dispose(),_e.dispose(),Ct.dispose(),bt.dispose(),H.dispose(),Se.dispose(),nt.dispose(),Z.dispose(),me.dispose(),me.removeEventListener("sessionstart",$t),me.removeEventListener("sessionend",Li),Qt.stop()};function Me(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const y=_t.autoReset,B=Oe.enabled,X=Oe.autoUpdate,$=Oe.needsUpdate,z=Oe.type;N(),_t.autoReset=y,Oe.enabled=B,Oe.autoUpdate=X,Oe.needsUpdate=$,Oe.type=z}function fe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ie(y){const B=y.target;B.removeEventListener("dispose",ie),Ne(B)}function Ne(y){et(y),_e.remove(y)}function et(y){const B=_e.get(y).programs;B!==void 0&&(B.forEach(function(X){Z.releaseProgram(X)}),y.isShaderMaterial&&Z.releaseShaderCache(y))}this.renderBufferDirect=function(y,B,X,$,z,re){B===null&&(B=Ge);const Ae=z.isMesh&&z.matrixWorld.determinant()<0,Ie=Xs(y,B,X,$,z);We.setMaterial($,Ae);let Re=X.index,je=1;if($.wireframe===!0){if(Re=_.getWireframeAttribute(X),Re===void 0)return;je=2}const Ze=X.drawRange,qe=X.attributes.position;let ot=Ze.start*je,vt=(Ze.start+Ze.count)*je;re!==null&&(ot=Math.max(ot,re.start*je),vt=Math.min(vt,(re.start+re.count)*je)),Re!==null?(ot=Math.max(ot,0),vt=Math.min(vt,Re.count)):qe!=null&&(ot=Math.max(ot,0),vt=Math.min(vt,qe.count));const M=vt-ot;if(M<0||M===1/0)return;Se.setup(z,$,Ie,X,Re);let f,E=we;if(Re!==null&&(f=A.get(Re),E=Je,E.setIndex(f)),z.isMesh)$.wireframe===!0?(We.setLineWidth($.wireframeLinewidth*Ke()),E.setMode(C.LINES)):E.setMode(C.TRIANGLES);else if(z.isLine){let O=$.linewidth;O===void 0&&(O=1),We.setLineWidth(O*Ke()),z.isLineSegments?E.setMode(C.LINES):z.isLineLoop?E.setMode(C.LINE_LOOP):E.setMode(C.LINE_STRIP)}else z.isPoints?E.setMode(C.POINTS):z.isSprite&&E.setMode(C.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Ei("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),E.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))E.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const O=z._multiDrawStarts,j=z._multiDrawCounts,G=z._multiDrawCount,ye=Re?A.get(Re).bytesPerElement:1,ae=_e.get($).currentProgram.getUniforms();for(let I=0;I<G;I++)ae.setValue(C,"_gl_DrawID",I),E.render(O[I]/ye,j[I])}else if(z.isInstancedMesh)E.renderInstances(ot,M,z.count);else if(X.isInstancedBufferGeometry){const O=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,j=Math.min(X.instanceCount,O);E.renderInstances(ot,M,j)}else E.render(ot,M)};function Mt(y,B,X){y.transparent===!0&&y.side===En&&y.forceSinglePass===!1?(y.side=Ht,y.needsUpdate=!0,An(y,B,X),y.side=Fn,y.needsUpdate=!0,An(y,B,X),y.side=En):An(y,B,X)}this.compile=function(y,B,X=null){X===null&&(X=y),d=Xe.get(X),d.init(B),R.push(d),X.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),y!==X&&y.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();const $=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const re=z.material;if(re)if(Array.isArray(re))for(let Ae=0;Ae<re.length;Ae++){const Ie=re[Ae];Mt(Ie,X,z),$.add(Ie)}else Mt(re,X,z),$.add(re)}),d=R.pop(),$},this.compileAsync=function(y,B,X=null){const $=this.compile(y,B,X);return new Promise(z=>{function re(){if($.forEach(function(Ae){_e.get(Ae).currentProgram.isReady()&&$.delete(Ae)}),$.size===0){z(y);return}setTimeout(re,10)}ke.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let ft=null;function Jt(y){ft&&ft(y)}function $t(){Qt.stop()}function Li(){Qt.start()}const Qt=new yl;Qt.setAnimationLoop(Jt),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(y){ft=y,me.setAnimationLoop(y),y===null?Qt.stop():Qt.start()},me.addEventListener("sessionstart",$t),me.addEventListener("sessionend",Li),this.render=function(y,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(B),B=me.getCamera()),y.isScene===!0&&y.onBeforeRender(w,y,B,k),d=Xe.get(y,R.length),d.init(B),R.push(d),ue.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ce.setFromProjectionMatrix(ue,hn,B.reversedDepth),ge=this.localClippingEnabled,W=ve.init(this.clippingPlanes,ge),g=J.get(y,L.length),g.init(),L.push(g),me.enabled===!0&&me.isPresenting===!0){const re=w.xr.getDepthSensingMesh();re!==null&&ii(re,B,-1/0,w.sortObjects)}ii(y,B,0,w.sortObjects),g.finish(),w.sortObjects===!0&&g.sort(xe,Ee),it=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,it&&He.addToRenderList(g,y),this.info.render.frame++,W===!0&&ve.beginShadows();const X=d.state.shadowsArray;Oe.render(X,y,B),W===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=g.opaque,z=g.transmissive;if(d.setupLights(),B.isArrayCamera){const re=B.cameras;if(z.length>0)for(let Ae=0,Ie=re.length;Ae<Ie;Ae++){const Re=re[Ae];ts($,z,y,Re)}it&&He.render(y);for(let Ae=0,Ie=re.length;Ae<Ie;Ae++){const Re=re[Ae];es(g,y,Re,Re.viewport)}}else z.length>0&&ts($,z,y,B),it&&He.render(y),es(g,y,B);k!==null&&U===0&&(tt.updateMultisampleRenderTarget(k),tt.updateRenderTargetMipmap(k)),y.isScene===!0&&y.onAfterRender(w,y,B),Se.resetDefaultState(),b=-1,T=null,R.pop(),R.length>0?(d=R[R.length-1],W===!0&&ve.setGlobalState(w.clippingPlanes,d.state.camera)):d=null,L.pop(),L.length>0?g=L[L.length-1]:g=null};function ii(y,B,X,$){if(y.visible===!1)return;if(y.layers.test(B.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(B);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Ce.intersectsSprite(y)){$&&Le.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ue);const Ae=H.update(y),Ie=y.material;Ie.visible&&g.push(y,Ae,Ie,X,Le.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Ce.intersectsObject(y))){const Ae=H.update(y),Ie=y.material;if($&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Le.copy(y.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Le.copy(Ae.boundingSphere.center)),Le.applyMatrix4(y.matrixWorld).applyMatrix4(ue)),Array.isArray(Ie)){const Re=Ae.groups;for(let je=0,Ze=Re.length;je<Ze;je++){const qe=Re[je],ot=Ie[qe.materialIndex];ot&&ot.visible&&g.push(y,Ae,ot,X,Le.z,qe)}}else Ie.visible&&g.push(y,Ae,Ie,X,Le.z,null)}}const re=y.children;for(let Ae=0,Ie=re.length;Ae<Ie;Ae++)ii(re[Ae],B,X,$)}function es(y,B,X,$){const z=y.opaque,re=y.transmissive,Ae=y.transparent;d.setupLightsView(X),W===!0&&ve.setGlobalState(w.clippingPlanes,X),$&&We.viewport(P.copy($)),z.length>0&&en(z,B,X),re.length>0&&en(re,B,X),Ae.length>0&&en(Ae,B,X),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function ts(y,B,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[$.id]===void 0&&(d.state.transmissionRenderTarget[$.id]=new ni(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?qi:pn,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));const re=d.state.transmissionRenderTarget[$.id],Ae=$.viewport||P;re.setSize(Ae.z*w.transmissionResolutionScale,Ae.w*w.transmissionResolutionScale);const Ie=w.getRenderTarget(),Re=w.getActiveCubeFace(),je=w.getActiveMipmapLevel();w.setRenderTarget(re),w.getClearColor(K),se=w.getClearAlpha(),se<1&&w.setClearColor(16777215,.5),w.clear(),it&&He.render(X);const Ze=w.toneMapping;w.toneMapping=Nn;const qe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),d.setupLightsView($),W===!0&&ve.setGlobalState(w.clippingPlanes,$),en(y,X,$),tt.updateMultisampleRenderTarget(re),tt.updateRenderTargetMipmap(re),ke.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let vt=0,M=B.length;vt<M;vt++){const f=B[vt],E=f.object,O=f.geometry,j=f.material,G=f.group;if(j.side===En&&E.layers.test($.layers)){const ye=j.side;j.side=Ht,j.needsUpdate=!0,Bn(E,X,$,O,j,G),j.side=ye,j.needsUpdate=!0,ot=!0}}ot===!0&&(tt.updateMultisampleRenderTarget(re),tt.updateRenderTargetMipmap(re))}w.setRenderTarget(Ie,Re,je),w.setClearColor(K,se),qe!==void 0&&($.viewport=qe),w.toneMapping=Ze}function en(y,B,X){const $=B.isScene===!0?B.overrideMaterial:null;for(let z=0,re=y.length;z<re;z++){const Ae=y[z],Ie=Ae.object,Re=Ae.geometry,je=Ae.group;let Ze=Ae.material;Ze.allowOverride===!0&&$!==null&&(Ze=$),Ie.layers.test(X.layers)&&Bn(Ie,B,X,Re,Ze,je)}}function Bn(y,B,X,$,z,re){y.onBeforeRender(w,B,X,$,z,re),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(w,B,X,$,y,re),z.transparent===!0&&z.side===En&&z.forceSinglePass===!1?(z.side=Ht,z.needsUpdate=!0,w.renderBufferDirect(X,B,$,z,y,re),z.side=Fn,z.needsUpdate=!0,w.renderBufferDirect(X,B,$,z,y,re),z.side=En):w.renderBufferDirect(X,B,$,z,y,re),y.onAfterRender(w,B,X,$,z,re)}function An(y,B,X){B.isScene!==!0&&(B=Ge);const $=_e.get(y),z=d.state.lights,re=d.state.shadowsArray,Ae=z.state.version,Ie=Z.getParameters(y,z.state,re,B,X),Re=Z.getProgramCacheKey(Ie);let je=$.programs;$.environment=y.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(y.isMeshStandardMaterial?bt:Ct).get(y.envMap||$.environment),$.envMapRotation=$.environment!==null&&y.envMap===null?B.environmentRotation:y.envMapRotation,je===void 0&&(y.addEventListener("dispose",ie),je=new Map,$.programs=je);let Ze=je.get(Re);if(Ze!==void 0){if($.currentProgram===Ze&&$.lightsStateVersion===Ae)return is(y,Ie),Ze}else Ie.uniforms=Z.getUniforms(y),y.onBeforeCompile(Ie,w),Ze=Z.acquireProgram(Ie,Re),je.set(Re,Ze),$.uniforms=Ie.uniforms;const qe=$.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(qe.clippingPlanes=ve.uniform),is(y,Ie),$.needsLights=ss(y),$.lightsStateVersion=Ae,$.needsLights&&(qe.ambientLightColor.value=z.state.ambient,qe.lightProbe.value=z.state.probe,qe.directionalLights.value=z.state.directional,qe.directionalLightShadows.value=z.state.directionalShadow,qe.spotLights.value=z.state.spot,qe.spotLightShadows.value=z.state.spotShadow,qe.rectAreaLights.value=z.state.rectArea,qe.ltc_1.value=z.state.rectAreaLTC1,qe.ltc_2.value=z.state.rectAreaLTC2,qe.pointLights.value=z.state.point,qe.pointLightShadows.value=z.state.pointShadow,qe.hemisphereLights.value=z.state.hemi,qe.directionalShadowMap.value=z.state.directionalShadowMap,qe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,qe.spotShadowMap.value=z.state.spotShadowMap,qe.spotLightMatrix.value=z.state.spotLightMatrix,qe.spotLightMap.value=z.state.spotLightMap,qe.pointShadowMap.value=z.state.pointShadowMap,qe.pointShadowMatrix.value=z.state.pointShadowMatrix),$.currentProgram=Ze,$.uniformsList=null,Ze}function ns(y){if(y.uniformsList===null){const B=y.currentProgram.getUniforms();y.uniformsList=Os.seqWithValue(B.seq,y.uniforms)}return y.uniformsList}function is(y,B){const X=_e.get(y);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Xs(y,B,X,$,z){B.isScene!==!0&&(B=Ge),tt.resetTextureUnits();const re=B.fog,Ae=$.isMeshStandardMaterial?B.environment:null,Ie=k===null?w.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ri,Re=($.isMeshStandardMaterial?bt:Ct).get($.envMap||Ae),je=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ze=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),qe=!!X.morphAttributes.position,ot=!!X.morphAttributes.normal,vt=!!X.morphAttributes.color;let M=Nn;$.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(M=w.toneMapping);const f=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,E=f!==void 0?f.length:0,O=_e.get($),j=d.state.lights;if(W===!0&&(ge===!0||y!==T)){const oe=y===T&&$.id===b;ve.setState($,y,oe)}let G=!1;$.version===O.__version?(O.needsLights&&O.lightsStateVersion!==j.state.version||O.outputColorSpace!==Ie||z.isBatchedMesh&&O.batching===!1||!z.isBatchedMesh&&O.batching===!0||z.isBatchedMesh&&O.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&O.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&O.instancing===!1||!z.isInstancedMesh&&O.instancing===!0||z.isSkinnedMesh&&O.skinning===!1||!z.isSkinnedMesh&&O.skinning===!0||z.isInstancedMesh&&O.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&O.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&O.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&O.instancingMorph===!1&&z.morphTexture!==null||O.envMap!==Re||$.fog===!0&&O.fog!==re||O.numClippingPlanes!==void 0&&(O.numClippingPlanes!==ve.numPlanes||O.numIntersection!==ve.numIntersection)||O.vertexAlphas!==je||O.vertexTangents!==Ze||O.morphTargets!==qe||O.morphNormals!==ot||O.morphColors!==vt||O.toneMapping!==M||O.morphTargetsCount!==E)&&(G=!0):(G=!0,O.__version=$.version);let ye=O.currentProgram;G===!0&&(ye=An($,B,z));let ae=!1,I=!1,le=!1;const he=ye.getUniforms(),ne=O.uniforms;if(We.useProgram(ye.program)&&(ae=!0,I=!0,le=!0),$.id!==b&&(b=$.id,I=!0),ae||T!==y){We.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),he.setValue(C,"projectionMatrix",y.projectionMatrix),he.setValue(C,"viewMatrix",y.matrixWorldInverse);const Ye=he.map.cameraPosition;Ye!==void 0&&Ye.setValue(C,Ue.setFromMatrixPosition(y.matrixWorld)),st.logarithmicDepthBuffer&&he.setValue(C,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&he.setValue(C,"isOrthographic",y.isOrthographicCamera===!0),T!==y&&(T=y,I=!0,le=!0)}if(z.isSkinnedMesh){he.setOptional(C,z,"bindMatrix"),he.setOptional(C,z,"bindMatrixInverse");const oe=z.skeleton;oe&&(oe.boneTexture===null&&oe.computeBoneTexture(),he.setValue(C,"boneTexture",oe.boneTexture,tt))}z.isBatchedMesh&&(he.setOptional(C,z,"batchingTexture"),he.setValue(C,"batchingTexture",z._matricesTexture,tt),he.setOptional(C,z,"batchingIdTexture"),he.setValue(C,"batchingIdTexture",z._indirectTexture,tt),he.setOptional(C,z,"batchingColorTexture"),z._colorsTexture!==null&&he.setValue(C,"batchingColorTexture",z._colorsTexture,tt));const te=X.morphAttributes;if((te.position!==void 0||te.normal!==void 0||te.color!==void 0)&&pe.update(z,X,ye),(I||O.receiveShadow!==z.receiveShadow)&&(O.receiveShadow=z.receiveShadow,he.setValue(C,"receiveShadow",z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(ne.envMap.value=Re,ne.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&B.environment!==null&&(ne.envMapIntensity.value=B.environmentIntensity),I&&(he.setValue(C,"toneMappingExposure",w.toneMappingExposure),O.needsLights&&zn(ne,le),re&&$.fog===!0&&ce.refreshFogUniforms(ne,re),ce.refreshMaterialUniforms(ne,$,Y,de,d.state.transmissionRenderTarget[y.id]),Os.upload(C,ns(O),ne,tt)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Os.upload(C,ns(O),ne,tt),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&he.setValue(C,"center",z.center),he.setValue(C,"modelViewMatrix",z.modelViewMatrix),he.setValue(C,"normalMatrix",z.normalMatrix),he.setValue(C,"modelMatrix",z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const oe=$.uniformsGroups;for(let Ye=0,wt=oe.length;Ye<wt;Ye++){const St=oe[Ye];nt.update(St,ye),nt.bind(St,ye)}}return ye}function zn(y,B){y.ambientLightColor.needsUpdate=B,y.lightProbe.needsUpdate=B,y.directionalLights.needsUpdate=B,y.directionalLightShadows.needsUpdate=B,y.pointLights.needsUpdate=B,y.pointLightShadows.needsUpdate=B,y.spotLights.needsUpdate=B,y.spotLightShadows.needsUpdate=B,y.rectAreaLights.needsUpdate=B,y.hemisphereLights.needsUpdate=B}function ss(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(y,B,X){const $=_e.get(y);$.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),_e.get(y.texture).__webglTexture=B,_e.get(y.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:X,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,B){const X=_e.get(y);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0};const $s=C.createFramebuffer();this.setRenderTarget=function(y,B=0,X=0){k=y,D=B,U=X;let $=!0,z=null,re=!1,Ae=!1;if(y){const Re=_e.get(y);if(Re.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(C.FRAMEBUFFER,null),$=!1;else if(Re.__webglFramebuffer===void 0)tt.setupRenderTarget(y);else if(Re.__hasExternalTextures)tt.rebindTextures(y,_e.get(y.texture).__webglTexture,_e.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const qe=y.depthTexture;if(Re.__boundDepthTexture!==qe){if(qe!==null&&_e.has(qe)&&(y.width!==qe.image.width||y.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(y)}}const je=y.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ae=!0);const Ze=_e.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ze[B])?z=Ze[B][X]:z=Ze[B],re=!0):y.samples>0&&tt.useMultisampledRTT(y)===!1?z=_e.get(y).__webglMultisampledFramebuffer:Array.isArray(Ze)?z=Ze[X]:z=Ze,P.copy(y.viewport),Q.copy(y.scissor),q=y.scissorTest}else P.copy(Pe).multiplyScalar(Y).floor(),Q.copy(Qe).multiplyScalar(Y).floor(),q=ze;if(X!==0&&(z=$s),We.bindFramebuffer(C.FRAMEBUFFER,z)&&$&&We.drawBuffers(y,z),We.viewport(P),We.scissor(Q),We.setScissorTest(q),re){const Re=_e.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+B,Re.__webglTexture,X)}else if(Ae){const Re=B;for(let je=0;je<y.textures.length;je++){const Ze=_e.get(y.textures[je]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+je,Ze.__webglTexture,X,Re)}}else if(y!==null&&X!==0){const Re=_e.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Re.__webglTexture,X)}b=-1},this.readRenderTargetPixels=function(y,B,X,$,z,re,Ae,Ie=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=_e.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ae!==void 0&&(Re=Re[Ae]),Re){We.bindFramebuffer(C.FRAMEBUFFER,Re);try{const je=y.textures[Ie],Ze=je.format,qe=je.type;if(!st.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=y.width-$&&X>=0&&X<=y.height-z&&(y.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ie),C.readPixels(B,X,$,z,Ve.convert(Ze),Ve.convert(qe),re))}finally{const je=k!==null?_e.get(k).__webglFramebuffer:null;We.bindFramebuffer(C.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(y,B,X,$,z,re,Ae,Ie=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=_e.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ae!==void 0&&(Re=Re[Ae]),Re)if(B>=0&&B<=y.width-$&&X>=0&&X<=y.height-z){We.bindFramebuffer(C.FRAMEBUFFER,Re);const je=y.textures[Ie],Ze=je.format,qe=je.type;if(!st.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,ot),C.bufferData(C.PIXEL_PACK_BUFFER,re.byteLength,C.STREAM_READ),y.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ie),C.readPixels(B,X,$,z,Ve.convert(Ze),Ve.convert(qe),0);const vt=k!==null?_e.get(k).__webglFramebuffer:null;We.bindFramebuffer(C.FRAMEBUFFER,vt);const M=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Cc(C,M,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,ot),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,re),C.deleteBuffer(ot),C.deleteSync(M),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,B=null,X=0){const $=Math.pow(2,-X),z=Math.floor(y.image.width*$),re=Math.floor(y.image.height*$),Ae=B!==null?B.x:0,Ie=B!==null?B.y:0;tt.setTexture2D(y,0),C.copyTexSubImage2D(C.TEXTURE_2D,X,0,0,Ae,Ie,z,re),We.unbindTexture()};const dt=C.createFramebuffer(),rs=C.createFramebuffer();this.copyTextureToTexture=function(y,B,X=null,$=null,z=0,re=null){re===null&&(z!==0?(Ei("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=z,z=0):re=0);let Ae,Ie,Re,je,Ze,qe,ot,vt,M;const f=y.isCompressedTexture?y.mipmaps[re]:y.image;if(X!==null)Ae=X.max.x-X.min.x,Ie=X.max.y-X.min.y,Re=X.isBox3?X.max.z-X.min.z:1,je=X.min.x,Ze=X.min.y,qe=X.isBox3?X.min.z:0;else{const te=Math.pow(2,-z);Ae=Math.floor(f.width*te),Ie=Math.floor(f.height*te),y.isDataArrayTexture?Re=f.depth:y.isData3DTexture?Re=Math.floor(f.depth*te):Re=1,je=0,Ze=0,qe=0}$!==null?(ot=$.x,vt=$.y,M=$.z):(ot=0,vt=0,M=0);const E=Ve.convert(B.format),O=Ve.convert(B.type);let j;B.isData3DTexture?(tt.setTexture3D(B,0),j=C.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(tt.setTexture2DArray(B,0),j=C.TEXTURE_2D_ARRAY):(tt.setTexture2D(B,0),j=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,B.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,B.unpackAlignment);const G=C.getParameter(C.UNPACK_ROW_LENGTH),ye=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ae=C.getParameter(C.UNPACK_SKIP_PIXELS),I=C.getParameter(C.UNPACK_SKIP_ROWS),le=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,f.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,f.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,je),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ze),C.pixelStorei(C.UNPACK_SKIP_IMAGES,qe);const he=y.isDataArrayTexture||y.isData3DTexture,ne=B.isDataArrayTexture||B.isData3DTexture;if(y.isDepthTexture){const te=_e.get(y),oe=_e.get(B),Ye=_e.get(te.__renderTarget),wt=_e.get(oe.__renderTarget);We.bindFramebuffer(C.READ_FRAMEBUFFER,Ye.__webglFramebuffer),We.bindFramebuffer(C.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let St=0;St<Re;St++)he&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_e.get(y).__webglTexture,z,qe+St),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_e.get(B).__webglTexture,re,M+St)),C.blitFramebuffer(je,Ze,Ae,Ie,ot,vt,Ae,Ie,C.DEPTH_BUFFER_BIT,C.NEAREST);We.bindFramebuffer(C.READ_FRAMEBUFFER,null),We.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(z!==0||y.isRenderTargetTexture||_e.has(y)){const te=_e.get(y),oe=_e.get(B);We.bindFramebuffer(C.READ_FRAMEBUFFER,dt),We.bindFramebuffer(C.DRAW_FRAMEBUFFER,rs);for(let Ye=0;Ye<Re;Ye++)he?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,te.__webglTexture,z,qe+Ye):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,te.__webglTexture,z),ne?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,oe.__webglTexture,re,M+Ye):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,oe.__webglTexture,re),z!==0?C.blitFramebuffer(je,Ze,Ae,Ie,ot,vt,Ae,Ie,C.COLOR_BUFFER_BIT,C.NEAREST):ne?C.copyTexSubImage3D(j,re,ot,vt,M+Ye,je,Ze,Ae,Ie):C.copyTexSubImage2D(j,re,ot,vt,je,Ze,Ae,Ie);We.bindFramebuffer(C.READ_FRAMEBUFFER,null),We.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else ne?y.isDataTexture||y.isData3DTexture?C.texSubImage3D(j,re,ot,vt,M,Ae,Ie,Re,E,O,f.data):B.isCompressedArrayTexture?C.compressedTexSubImage3D(j,re,ot,vt,M,Ae,Ie,Re,E,f.data):C.texSubImage3D(j,re,ot,vt,M,Ae,Ie,Re,E,O,f):y.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,re,ot,vt,Ae,Ie,E,O,f.data):y.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,re,ot,vt,f.width,f.height,E,f.data):C.texSubImage2D(C.TEXTURE_2D,re,ot,vt,Ae,Ie,E,O,f);C.pixelStorei(C.UNPACK_ROW_LENGTH,G),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ye),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ae),C.pixelStorei(C.UNPACK_SKIP_ROWS,I),C.pixelStorei(C.UNPACK_SKIP_IMAGES,le),re===0&&B.generateMipmaps&&C.generateMipmap(j),We.unbindTexture()},this.copyTextureToTexture3D=function(y,B,X=null,$=null,z=0){return Ei('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,B,X,$,z)},this.initRenderTarget=function(y){_e.get(y).__webglFramebuffer===void 0&&tt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?tt.setTextureCube(y,0):y.isData3DTexture?tt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?tt.setTexture2DArray(y,0):tt.setTexture2D(y,0),We.unbindTexture()},this.resetState=function(){D=0,U=0,k=null,We.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}const em=/^[og]\s*(.+)?/,tm=/^mtllib /,nm=/^usemtl /,im=/^usemap /,Go=/\s+/,Wo=new V,Cr=new V,Xo=new V,$o=new V,Yt=new V,Ds=new ct;function sm(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(e,t,n){const s=this.vertices,r=this.object.geometry.normals;Wo.fromArray(s,e),Cr.fromArray(s,t),Xo.fromArray(s,n),Yt.subVectors(Xo,Cr),$o.subVectors(Wo,Cr),Yt.cross($o),Yt.normalize(),r.push(Yt.x,Yt.y,Yt.z),r.push(Yt.x,Yt.y,Yt.z),r.push(Yt.x,Yt.y,Yt.z)},addColor:function(e,t,n){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(e,t,n){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,s,r,a,o,c,l){const h=this.vertices.length;let u=this.parseVertexIndex(e,h),p=this.parseVertexIndex(t,h),m=this.parseVertexIndex(n,h);if(this.addVertex(u,p,m),this.addColor(u,p,m),o!==void 0&&o!==""){const v=this.normals.length;u=this.parseNormalIndex(o,v),p=this.parseNormalIndex(c,v),m=this.parseNormalIndex(l,v),this.addNormal(u,p,m)}else this.addFaceNormal(u,p,m);if(s!==void 0&&s!==""){const v=this.uvs.length;u=this.parseUVIndex(s,v),p=this.parseUVIndex(r,v),m=this.parseUVIndex(a,v),this.addUV(u,p,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,s=e.length;n<s;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let r=0,a=e.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return i.startObject("",!1),i}class rm extends Pa{constructor(e){super(e),this.materials=null}load(e,t,n,s){const r=this,a=new uu(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new sm;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let s=[];for(let o=0,c=n.length;o<c;o++){const l=n[o].trimStart();if(l.length===0)continue;const h=l.charAt(0);if(h!=="#")if(h==="v"){const u=l.split(Go);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(Ds.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),Xt),t.colors.push(Ds.r,Ds.g,Ds.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){const p=l.slice(1).trim().split(Go),m=[];for(let S=0,g=p.length;S<g;S++){const d=p[S];if(d.length>0){const L=d.split("/");m.push(L)}}const v=m[0];for(let S=1,g=m.length-1;S<g;S++){const d=m[S],L=m[S+1];t.addFace(v[0],d[0],L[0],v[1],d[1],L[1],v[2],d[2],L[2])}}else if(h==="l"){const u=l.substring(1).trim().split(" ");let p=[];const m=[];if(l.indexOf("/")===-1)p=u;else for(let v=0,S=u.length;v<S;v++){const g=u[v].split("/");g[0]!==""&&p.push(g[0]),g[1]!==""&&m.push(g[1])}t.addLineGeometry(p,m)}else if(h==="p"){const p=l.slice(1).trim().split(" ");t.addPointGeometry(p)}else if((s=em.exec(l))!==null){const u=(" "+s[0].slice(1).trim()).slice(1);t.startObject(u)}else if(nm.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(tm.test(l))t.materialLibraries.push(l.substring(7).trim());else if(im.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(s=l.split(" "),s.length>1){const p=s[1].trim().toLowerCase();t.object.smooth=p!=="0"&&p!=="off"}else t.object.smooth=!0;const u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();const r=new ei;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,c=t.objects.length;o<c;o++){const l=t.objects[o],h=l.geometry,u=l.materials,p=h.type==="Line",m=h.type==="Points";let v=!1;if(h.vertices.length===0)continue;const S=new Zt;S.setAttribute("position",new zt(h.vertices,3)),h.normals.length>0&&S.setAttribute("normal",new zt(h.normals,3)),h.colors.length>0&&(v=!0,S.setAttribute("color",new zt(h.colors,3))),h.hasUVIndices===!0&&S.setAttribute("uv",new zt(h.uvs,2));const g=[];for(let L=0,R=u.length;L<R;L++){const w=u[L],F=w.name+"_"+w.smooth+"_"+v;let D=t.materials[F];if(this.materials!==null){if(D=this.materials.create(w.name),p&&D&&!(D instanceof Vi)){const U=new Vi;mn.prototype.copy.call(U,D),U.color.copy(D.color),D=U}else if(m&&D&&!(D instanceof ki)){const U=new ki({size:10,sizeAttenuation:!1});mn.prototype.copy.call(U,D),U.color.copy(D.color),U.map=D.map,D=U}}D===void 0&&(p?D=new Vi:m?D=new ki({size:1,sizeAttenuation:!1}):D=new su,D.name=w.name,D.flatShading=!w.smooth,D.vertexColors=v,t.materials[F]=D),g.push(D)}let d;if(g.length>1){for(let L=0,R=u.length;L<R;L++){const w=u[L];S.addGroup(w.groupStart,w.groupCount,L)}p?d=new ho(S,g):m?d=new Mr(S,g):d=new Kt(S,g)}else p?d=new ho(S,g[0]):m?d=new Mr(S,g[0]):d=new Kt(S,g[0]);d.name=l.name,r.add(d)}else if(t.vertices.length>0){const o=new ki({size:1,sizeAttenuation:!1}),c=new Zt;c.setAttribute("position",new zt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new zt(t.colors,3)),o.vertexColors=!0);const l=new Mr(c,o);r.add(l)}return r}}const am={key:0,class:"hud"},om=["max"],lm=1e3/30,cm=Yo({__name:"Pip3D",props:{dataUrl:{default:"/pip_test_data.json"},wsUrl:{default:""},modelPaths:{default:()=>({bus:"/bus.obj",car:"/car.obj",pedestrian:"/pedestrian.obj"})},cameraMode:{default:"chase"}},setup(i){const e=i,t=Rl([]),n=$e(0),s=$e(0),r=$e(!0);let a=null;const o=[],c=Mi(()=>t.length?e.wsUrl?t[t.length-1]:t[n.value]:null),l=$e(null),h=$e(null);let u,p,m,v=0,S=0;const g=$e(!0);let d,L,R;const w=new rm,F=new Sr({color:16777215,metalness:0,roughness:1}),D=new Sr({color:14278115,metalness:0,roughness:.9}),U=new Sr({color:11388671,roughness:.85}),k={};async function b(ze){if(k[ze])return k[ze].clone(!0);const Ce=await w.loadAsync(ze);return Ce.traverse(W=>{W.isMesh&&(W.castShadow=!1,W.receiveShadow=!1)}),k[ze]=Ce,Ce.clone(!0)}const T={};function P(ze){return`${ze.type}-${ze.id}`}const Q={};function q(ze,Ce,W=0){if(ze==="top")m.position.set(Ce.x,30,Ce.z),m.lookAt(Ce.x,0,Ce.z);else{const Le=Math.sin(W),Ge=Math.cos(W);m.position.set(Ce.x-Le*12,4,Ce.z-Ge*12),m.lookAt(Ce.x+Le*5,1,Ce.z+Ge*5)}}async function K(){p=new eu,p.background=new ct(16185337);const ze=l.value?l.value.clientWidth:640,Ce=l.value?l.value.clientHeight:400;m=new jt(45,ze/Ce,.1,1e3),m.position.set(0,6,12),u=new Qp({canvas:h.value,antialias:!1,powerPreference:"low-power"}),u.setPixelRatio(1),u.setSize(ze,Ce,!1),u.shadowMap.enabled=!1,p.add(new pu(16777215,.6)),R=new fu(16777215,.6),R.position.set(10,12,6),R.castShadow=!1,p.add(R);const W=new Qi(100,100,1,1);L=new Kt(W,F),L.receiveShadow=!1,L.rotation.x=-Math.PI/2,p.add(L),d=new ei;const ge=await b(e.modelPaths.bus);ge.traverse(ue=>{ue.isMesh&&(ue.material=U)}),d.add(ge),p.add(d),se()}function se(ze=0){if(v=requestAnimationFrame(se),Qe(),ze-S<lm||(S=ze,!g.value))return;const W=c.value;if(W){const{x:ge=0,y:ue=0,z:Ue=0,yaw:Le=0}=W.ego||{};d.position.set(ge,ue,Ue),d.rotation.set(0,Le,0),q(e.cameraMode,{x:ge,z:Ue},Le);const Ge={};for(const it of W.objects||[]){const Ke=P(it);let C=T[Ke];if(!C){C=new ei,T[Ke]=C,p.add(C);let lt=e.modelPaths.car;it.type==="pedestrian"&&(lt=e.modelPaths.pedestrian),b(lt).then(ke=>{ke.traverse(st=>{st.isMesh&&(st.material=D)}),C.add(ke)})}C.position.set(it.x??0,it.y??0,it.z??0),C.rotation.set(0,it.yaw??0,0),Ge[Ke]=!0}for(const[it,Ke]of Object.entries(T))Ge[it]||(p.remove(Ke),delete T[it]);for(const it of W.lanes||[]){let Ke=Q[it.id];const C=(it.pts||[]).map(lt=>new V(lt[0],lt[1],lt[2]));if(Ke)Ke.geometry.setFromPoints(C),Ke.geometry.computeBoundingSphere();else{const lt=new Zt().setFromPoints(C),ke=new Vi({color:13686237});Ke=new vl(lt,ke),Q[it.id]=Ke,p.add(Ke)}}}u.render(p,m)}async function ee(){const Ce=await(await fetch(e.dataUrl)).json();t.splice(0,t.length,...Ce.frames||[])}function de(){e.wsUrl&&(a=new WebSocket(e.wsUrl),a.onmessage=ze=>{try{const Ce=JSON.parse(ze.data);o.push(Ce),o.length>240&&o.shift(),t.splice(0,t.length,...o)}catch(Ce){console.warn("WS parse error",Ce)}},a.onclose=()=>{})}let Y=null;function xe(){Ee(),Y=setInterval(()=>{var ze;t.length&&r.value&&(n.value=(n.value+1)%t.length,s.value=((ze=t[n.value])==null?void 0:ze.ts_ms)||0)},100)}function Ee(){Y&&(clearInterval(Y),Y=null)}let Pe=null;function Qe(){if(!u||!m||!l.value)return;const ze=l.value.getBoundingClientRect(),Ce=Math.max(1,Math.floor(ze.width)),W=Math.max(1,Math.floor(ze.height));if(Ce===0||W===0)return;const ge=u.domElement,ue=u.getPixelRatio(),Ue=Math.floor(ge.width/ue),Le=Math.floor(ge.height/ue),Ge=Ue!==Ce||Le!==W;return Ge&&(console.log(`Resizing renderer: ${Ue}x${Le} -> ${Ce}x${W}`),console.log(`(clientWidth: ${l.value.clientWidth}, boundingRect: ${Ce})`),u.setSize(Ce,W,!1),m.aspect=Ce/W,m.updateProjectionMatrix()),Ge}return jo(async()=>{await K(),await Cl(),Qe(),l.value&&(Pe=new ResizeObserver(()=>{console.log("ResizeObserver triggered"),Qe()}),Pe.observe(l.value)),e.wsUrl?de():(await ee(),xe());const ze=new IntersectionObserver(Ce=>{Ce.forEach(W=>{g.value=W.isIntersecting})},{threshold:.1});l.value&&ze.observe(l.value),Ia(()=>{l.value&&ze.unobserve(l.value),Pe&&l.value&&(Pe.unobserve(l.value),Pe=null)})}),Ia(()=>{cancelAnimationFrame(v),Ee(),a==null||a.close(),Pe&&l.value&&(Pe.unobserve(l.value),Pe=null),u==null||u.dispose();for(const ze of Object.values(T))p.remove(ze)}),(ze,Ce)=>(Fe(),Be("div",{ref_key:"wrap",ref:l,class:"pip3d-container"},[x("canvas",{ref_key:"canvas",ref:h},null,512),ze.wsUrl?ut("",!0):(Fe(),Be("div",am,[x("button",{onClick:Ce[0]||(Ce[0]=W=>r.value=!r.value)},Te(r.value?"Pause":"Play"),1),x("span",null,"t: "+Te(s.value),1),qn(x("input",{type:"range",min:0,max:Math.max(0,t.length-1),"onUpdate:modelValue":Ce[1]||(Ce[1]=W=>n.value=W)},null,8,om),[[Pl,n.value,void 0,{number:!0}]])]))],512))}}),qo=Ko(cm,[["__scopeId","data-v-08858fec"]]),um={class:"vehicle-tracking-container"},dm={class:"header px-6 py-3 bg-white border-b border-gray-200"},hm={class:"flex items-center gap-4 mt-4"},fm={class:"flex items-center gap-2"},pm={class:"text-sm text-gray-700"},mm={class:"flex items-center gap-2"},gm={class:"text-sm text-gray-700"},_m={class:"flex items-center gap-2"},vm={class:"text-sm text-gray-700"},xm={class:"flex items-center gap-2"},Mm={class:"text-sm text-gray-700"},Sm={class:"text-sm text-gray-500 flex items-center gap-2"},ym={class:"flex items-center gap-2 ml-auto"},Em={key:0,class:"text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded border border-orange-200"},Tm=["disabled"],bm={class:"main-content"},Am={class:"left-sidebar"},wm={key:0,class:"vertical-route-diagram-container"},Rm={class:"vertical-route-diagrams"},Cm={class:"route-badge-container"},Pm={class:"route-badge"},Dm={class:"route-badge-number"},Lm={class:"route-badge-type"},Im={class:"vertical-route-line"},Um=["title"],Nm={class:"vertical-stop-info"},Fm={class:"stop-name"},Om={class:"stop-number"},Bm=["title"],zm={class:"bus-marker-container"},km={class:"bus-marker-icon"},Hm={width:"32",height:"32",viewBox:"0 0 32 32",fill:"none"},Vm=["fill"],Gm={class:"map-container"},Wm={class:"map-style-selector"},Xm={class:"map-style-options"},$m={class:"pip-header"},qm={class:"pip-controls"},Ym={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},jm={key:1,width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},Km={class:"pip-body"},Zm={class:"pip-header"},Jm={class:"pip-controls"},Qm={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},eg={key:1,width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},tg={class:"pip-body"},ng={class:"pip-header"},ig={class:"pip-controls"},sg={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},rg={key:1,width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},ag={class:"panel-content"},og={class:"info-section"},lg={class:"info-grid"},cg={class:"info-item"},ug={class:"info-value"},dg={class:"info-item"},hg={class:"info-value"},fg={class:"info-item"},pg={class:"info-item"},mg={class:"info-section"},gg={class:"info-grid"},_g={class:"info-item"},vg={class:"info-value"},xg={class:"info-item"},Mg={class:"info-value"},Sg={key:0,class:"info-item"},yg={class:"info-value"},Eg={key:1,class:"info-item"},Tg={class:"info-value"},bg={class:"info-section"},Ag={class:"info-grid"},wg={class:"info-item full-width"},Rg={class:"info-value font-mono text-xs"},Cg={class:"info-item"},Pg={class:"info-value"},Dg={class:"info-item"},Lg={class:"info-value"},Ig={key:0,class:"info-item"},Ug={class:"info-value"},Ng={class:"text-gray-500"},Fg={key:1,class:"info-item"},Og={class:"info-value"},Bg={class:"info-section"},zg={class:"object-detection-grid"},kg={class:"detection-item"},Hg={class:"detection-info"},Vg={class:"detection-count"},Gg={class:"detection-item"},Wg={class:"detection-info"},Xg={class:"detection-count"},$g={class:"detection-item"},qg={class:"detection-info"},Yg={class:"detection-count"},jg={class:"detection-item"},Kg={class:"detection-info"},Zg={class:"info-section"},Jg={class:"odd-status-header"},Qg={class:"odd-status-icon"},e_={class:"odd-status-content"},t_={class:"odd-status-value"},n_={key:0,class:"odd-distance"},i_={class:"environment-conditions"},s_={class:"condition-grid"},r_={class:"condition-item"},a_={class:"condition-info"},o_={class:"condition-value"},l_={class:"condition-item"},c_={class:"condition-info"},u_={class:"condition-value"},d_={class:"condition-item"},h_={class:"condition-info"},f_={class:"condition-value"},p_={class:"condition-item"},m_={class:"condition-info"},g_={class:"condition-value"},__={class:"system-limits"},v_={class:"limit-status-list"},x_={key:0,class:"intervention-alert"},M_={class:"intervention-content"},S_={class:"intervention-reason"},y_={class:"safety-text"},E_={key:0,class:"odd-warning-card"},T_={class:"warning-content"},b_={class:"warning-distance"},A_={class:"distance-value"},w_={class:"warning-eta"},R_={class:"eta-value"},C_={class:"warning-action"},P_={class:"action-text"},D_={key:1,class:"absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10"},L_={key:2,class:"absolute top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded z-10"},I_={class:"text-sm"},U_={class:"sidebar"},N_={class:"sidebar-content"},F_={key:0,class:"text-center text-gray-500 py-8"},O_={key:1,class:"space-y-3"},B_=["onClick"],z_={class:"flex items-center justify-between mb-2"},k_={class:"flex items-center gap-2"},H_={class:"font-medium text-gray-800"},V_={class:"text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"},G_={class:"text-sm text-gray-600 space-y-1"},W_={class:"flex justify-between"},X_={class:"text-purple-600"},$_={key:0,class:"flex justify-between"},q_={class:"font-medium"},Y_={class:"text-blue-600"},j_={key:1,class:"mt-2 p-2 bg-green-50 border border-green-200 rounded text-xs"},K_={class:"space-y-1 text-green-700"},Z_={class:"flex justify-between"},J_={class:"font-mono"},Q_={class:"flex justify-between"},ev={class:"font-mono"},tv={key:0,class:"mt-1 pt-1 border-t border-green-300"},nv={key:0,class:"flex justify-between"},iv={class:"font-medium"},sv={key:1,class:"mt-1"},rv={class:"flex flex-wrap gap-1 mt-1"},av={key:2,class:"flex justify-between"},ov={class:"font-mono"},lv={class:"flex justify-between"},cv={key:0,class:"text-xs"},uv={key:2,class:"mt-1 p-2 bg-orange-50 rounded text-xs"},dv={class:"flex justify-between"},hv={class:"animate-slideDown"},fv={class:"mt-3 pt-2 border-t border-gray-200"},pv={class:"flex gap-2"},mv=["onClick","disabled"],gv=["onClick","disabled"],_v={key:0,class:"mt-2 pt-2 border-t border-gray-200"},vv={key:0,class:"bg-blue-50 p-2 rounded text-xs mb-2"},xv={class:"flex justify-between mb-1"},Mv={class:"font-medium text-blue-900"},Sv={class:"flex justify-between"},yv={class:"font-medium text-blue-900"},Ev={key:1,class:"flex justify-between text-xs"},Tv={class:"text-green-600 font-medium"},bv={key:2,class:"flex justify-between text-xs"},Av={class:"text-indigo-600"},wv={key:3,class:"flex justify-between text-xs"},Rv={class:"text-gray-700"},Cv={key:1,class:"mt-2 pt-2 border-t border-gray-200"},Pv={key:0,class:"space-y-2"},Dv={class:"flex justify-between text-xs"},Lv={class:"text-purple-600 font-medium"},Iv={class:"font-medium text-green-800 mb-1"},Uv={class:"space-y-1 text-green-700"},Nv={class:"flex items-start gap-1"},Fv={class:"flex-1"},Ov=["title"],Bv={class:"flex items-start gap-1"},zv={class:"flex-1"},kv=["title"],Hv={key:0,class:"text-xs text-gray-600"},Vv={key:0,class:"text-xs text-gray-500 text-center"},Gv={key:1,class:"flex justify-between text-xs mt-2"},Wv={class:"text-gray-700"},Xv={key:2,class:"flex justify-between text-xs"},$v={class:"text-gray-700"},qv={class:"mt-2 pt-2 border-t border-gray-200"},Yv={class:"flex justify-between text-xs"},jv={class:"font-mono"},Kv={key:0,class:"flex justify-between text-xs"},Zv={class:"text-gray-700"},Jv={class:"text-gray-500"},Qv={key:1,class:"flex justify-between text-xs"},e0={class:"text-gray-700"},t0=Yo({__name:"VehicleTrackingView",setup(i){delete xt.Icon.Default.prototype._getIconUrl,xt.Icon.Default.mergeOptions({iconRetinaUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",iconUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png"});const e=new zl({basePath:"https://av-ops.maas-busan.shop",baseOptions:{timeout:3e4,headers:{"Content-Type":"application/json",Accept:"application/json"}}}),t=new Ol(e);new Ul(e);const n=new Fl(e),s=new Bl(e),r=new Nl(e),a="https://av-ops.maas-busan.shop",o=$e(),c=$e(),l=$e("light"),h=$e(!1),u=$e(),p=$e(new Map),m=$e(new Map),v=$e(new Map),S=$e(new Map),g=$e(new Map),d=$e(new Map),L=$e(new Map),R=$e([]),w=$e(!1),F=$e(!1),D=$e(new Map),U=$e(new Map),k=$e(new Map),b=$e(!1),T=$e(!1),P=$e(null),Q=$e([]),q=$e([]),K=$e([]),se=$e([]),ee=$e(""),de=$e(1e3),Y=$e([]),xe=$e(new Map),Ee=$e(new Set),Pe=$e(new Map);$e(new Set),$e(new Map);const Qe=M=>{const f=typeof M=="string"?parseInt(M):M;for(const E of Pe.value.values())if(E.stops&&E.stops.length>0){const O=E.stops.findIndex(j=>j.id===f||j.node_id===f);if(O!==-1)return{name:E.stops[O].name,index:O+1}}return{name:"",index:null}},ze=M=>{const f=Qe(M);return f.name&&f.index!==null?`${f.index}. ${f.name}`:f.name?f.name:`노드 ${M}`},Ce=$e(),W=$e(),ge=$e(),ue=$e(),Ue=$e(),Le=$e(),Ge=$e(!1),it=$e(!1),Ke=$e(!1),C=$e(!0),lt=$e(!0),ke=$e(!0),st=$e(null),We=$e({x:0,y:0}),_t=$e(null),_e=$e(null),tt=$e({pedestrians:0,vehicles:0,bicycles:0}),Ct=$e("녹색"),bt=Mi(()=>{const M=Ct.value;return M==="녹색"?"text-green-600":M==="황색"?"text-yellow-600":M==="적색"?"text-red-600":"text-gray-600"}),A=$e({inODD:!0,distanceToBoundary:850,approachingBoundary:!1,etaToBoundary:60,recommendedAction:"정상 운행 가능",weather:"맑음",lighting:"주간",roadCondition:"건조",temperature:23,systemLimits:{oddExceeded:!1,sensorFailure:!1,weatherLimit:!1,gpsLoss:!1},driverInterventionRequired:!1,interventionReason:"",safetyStopAvailable:!0});let _=null;const H=[35.1796,129.0756],Z=Mi(()=>{console.log("=== 운행 중 차량 필터링 ==="),console.log("전체 차량 수:",Q.value.length),console.log("수요응답 Trip 수:",q.value.length),console.log("정기노선 Trip 수:",K.value.length),q.value.length>0&&console.log("수요응답 Trip 상태들:",q.value.map(f=>({id:f.id,vehicle_id:f.vehicle_id,status:f.status}))),K.value.length>0&&console.log("정기노선 Trip 상태들:",K.value.map(f=>({id:f.id,vehicle_id:f.vehicle_id,status:f.status})));const M=Q.value.filter(f=>{var j,G;const E=q.value.find(ye=>ye.vehicle_id===f.id);if(E&&(console.log(`🚗 차량 ${f.id}: 수요응답 Trip #${E.id} (상태: ${E.status})`,{calls_count:((j=E.calls)==null?void 0:j.length)||0,call_ids:((G=E.calls)==null?void 0:G.map(ye=>ye.id))||[],service_area_id:E.service_area_id}),E.status!=="SCHEDULED"&&E.status!=="COMPLETED"))return!0;const O=K.value.find(ye=>ye.vehicle_id===f.id);return!!(O&&(console.log(`차량 ${f.id}: 정기노선 Trip 상태 = ${O.status}`),O.status!=="SCHEDULED"&&O.status!=="COMPLETED"))});return console.log("필터링 결과: 운행 중 차량 수 =",M.length),console.log("=== 필터링 종료 ==="),M.map(f=>{const E=q.value.find(G=>G.vehicle_id===f.id),O=K.value.find(G=>G.vehicle_id===f.id),j=E||O;return{...f,trip_id:j==null?void 0:j.id,tripStatus:j==null?void 0:j.status,tripType:E?"ON_DEMAND":"SCHEDULED"}})}),ce=Mi(()=>Z.value.filter(M=>M.tripType==="SCHEDULED"&&M.tripStatus!=="RETURNING").length),J=Mi(()=>Z.value.filter(M=>M.tripType==="ON_DEMAND"&&M.tripStatus!=="RETURNING").length),Xe=Mi(()=>Z.value.filter(M=>M.tripStatus==="RETURNING").length),ve=()=>{try{if(console.log("지도 초기화 시작..."),console.log("mapContainer.value:",o.value),!o.value){console.error("지도 컨테이너를 찾을 수 없습니다");return}c.value&&c.value.remove(),console.log("Leaflet 지도 객체 생성 중..."),c.value=xt.map(o.value,{center:H,zoom:12,zoomControl:!0,attributionControl:!0,minZoom:10,maxZoom:18}),c.value.on("movestart",()=>{console.log("🔍 지도 이동 시작 (movestart event)"),console.trace("지도 이동 호출 스택")}),c.value.on("zoomstart",()=>{console.log("🔍 줌 변경 시작")}),c.value.on("moveend",()=>{const f=c.value.getCenter(),E=c.value.getZoom();console.log(`📍 지도 이동 완료 - 중심: (${f.lat.toFixed(6)}, ${f.lng.toFixed(6)}), 줌: ${E}`)}),console.log("타일 레이어 추가 중...");const M=xt.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",{attribution:"© OpenStreetMap contributors © CARTO",maxZoom:19,subdomains:"abcd"});M.addTo(c.value),u.value=M,M.on("loading",()=>{console.log("타일 로딩 시작")}),M.on("load",()=>{console.log("타일 로딩 완료")}),console.log("지도 초기화 완료"),console.log("지도 객체:",c.value)}catch(M){console.error("지도 초기화 실패:",M),M.value=`지도 초기화 실패: ${M.message}`}},Oe=async()=>{try{console.log("서비스 지역 조회 중...");const M=await s.getServiceAreasApiServiceAreasGet();M.data&&M.data.areas?se.value=M.data.areas||[]:Array.isArray(M.data)?se.value=M.data||[]:se.value=[],console.log(`서비스 지역 ${se.value.length}개 조회 완료`),console.log("서비스 지역 데이터:",se.value),se.value.length>0&&c.value&&(pe(),console.log("🔍 서비스 지역 로드 후 지도 조정 체크",{serviceAreasLoaded:w.value,mapInitiallyPositioned:F.value}),!w.value&&!F.value?(console.log("✅ 최초 1회 지도 범위 조정 실행"),He(),w.value=!0,F.value=!0):console.log("⏭️ 지도 범위 조정 스킵 (이미 설정됨)"))}catch(M){console.error("서비스 지역 조회 실패:",M)}},He=()=>{if(console.log("🎯 fitMapToServiceAreas 호출됨",{hasMap:!!c.value,serviceAreasCount:se.value.length,mapInitiallyPositioned:F.value,serviceAreasLoaded:w.value}),!(!c.value||se.value.length===0)){if(F.value){console.log("⏭️ 지도가 이미 위치 설정됨 - 스킵");return}try{console.log("🗺️ 서비스 지역 기준으로 지도 범위 조정 시작...");let M=null,f=0,E=[];if(se.value.forEach(O=>{const j=O.boundary||O.geojson;if(j)if(j.type&&j.coordinates){const G=(ye,ae=0)=>{if(!(ae>3)&&Array.isArray(ye))if(ye.length===2&&typeof ye[0]=="number"&&typeof ye[1]=="number"){const I=xt.latLng(ye[1],ye[0]);E.push([ye[1],ye[0]]),M?M.extend(I):M=xt.latLngBounds([I]),f++}else ye.forEach(I=>G(I,ae+1))};G(j.coordinates)}else j.features&&j.features.forEach(G=>{if(G.geometry&&G.geometry.coordinates){const ye=(ae,I=0)=>{if(!(I>3)&&Array.isArray(ae))if(ae.length===2&&typeof ae[0]=="number"&&typeof ae[1]=="number"){const le=xt.latLng(ae[1],ae[0]);E.push([ae[1],ae[0]]),M?M.extend(le):M=xt.latLngBounds([le]),f++}else ae.forEach(le=>ye(le,I+1))};ye(G.geometry.coordinates)}})}),M&&f>0){console.log(`${f}개 좌표로 지도 범위 설정`),console.log("범위:",M.getSouthWest(),"~",M.getNorthEast());const O=M.getCenter();console.log("서비스 지역 중심점:",O),c.value.setView(O,14,{animate:!1}),setTimeout(()=>{c.value.fitBounds(M,{padding:[10,40],maxZoom:15,animate:!0,duration:1}),setTimeout(()=>{const j=c.value.getZoom();c.value.setZoom(Math.min(j+.5,15),{animate:!0})},1100)},100)}else console.warn("서비스 지역 좌표를 찾을 수 없어 기본 위치 사용"),c.value.setView(H,11)}catch(M){console.error("지도 범위 조정 실패:",M),c.value.setView(H,11)}}},pe=()=>{c.value&&(R.value.forEach(M=>{var f;(f=c.value)==null||f.removeLayer(M)}),R.value=[],se.value.forEach((M,f)=>{var O,j;const E=M.boundary||M.geojson;if(E)try{const G=["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6"],ye=G[f%G.length];let ae=E;E.type&&(E.type==="Polygon"||E.type==="LineString"||E.type==="MultiPolygon"||E.type==="MultiLineString")&&(ae={type:"Feature",geometry:E,properties:{}});const I=xt.geoJSON(ae,{style:ne=>{var te,oe;return((te=ne==null?void 0:ne.geometry)==null?void 0:te.type)==="LineString"||((oe=ne==null?void 0:ne.geometry)==null?void 0:oe.type)==="MultiLineString"?{color:ye,weight:5,opacity:1,dashArray:M.area_type==="RESTRICTED"?"10, 5":void 0}:{color:ye,weight:3,opacity:.9,fillColor:ye,fillOpacity:.15,dashArray:M.area_type==="RESTRICTED"?"10, 5":void 0}},onEachFeature:(ne,te)=>{const oe=`
              <div class="service-area-popup">
                <h4 class="font-bold text-lg mb-2">${M.name||M.area_name||"서비스 지역"}</h4>
                <div class="space-y-1">
                  <p><strong>구역 타입:</strong> ${M.area_type||(E.type==="LineString"||E.type==="MultiLineString"?"Route":"Service Area")}</p>
                  <p><strong>상태:</strong> ${M.is_active?"✅ 활성":"❌ 비활성"}</p>
                  <p><strong>설명:</strong> ${M.description||"설명 없음"}</p>
                </div>
              </div>
            `;te.bindPopup(oe,{maxWidth:300,className:"custom-popup",autoPan:!1}),te.on("mouseover",function(){var Ye,wt;((Ye=ne.geometry)==null?void 0:Ye.type)==="LineString"||((wt=ne.geometry)==null?void 0:wt.type)==="MultiLineString"?this.setStyle({weight:7,opacity:1}):this.setStyle({weight:4,fillOpacity:.25})}),te.on("mouseout",function(){I.resetStyle(this)})}});I.addTo(c.value),R.value.push(I);const le=new Set;ae.type==="Feature"?le.add(((O=ae.geometry)==null?void 0:O.type)||"Unknown"):ae.features&&((j=ae.features)==null||j.forEach(ne=>{var te;(te=ne.geometry)!=null&&te.type&&le.add(ne.geometry.type)}));const he=M.name||M.area_name||"서비스 지역";console.log(`서비스 지역 "${he}" 지도에 추가 (타입: ${Array.from(le).join(", ")})`)}catch(G){console.error(`서비스 지역 "${M.area_name}" 표시 실패:`,G)}}))},we=async()=>{var M;try{console.log("차량 목록 조회 중...");const f=await t.getAllVehiclesApiVehiclesGet();Q.value=f.data||[],console.log(`차량 ${Q.value.length}대 조회 완료`),console.log("차량 데이터:",Q.value),(M=P.value)!=null&&M.includes("차량 목록 조회 실패")&&(P.value=null)}catch(f){console.error("차량 목록 조회 실패:",f),P.value=`차량 목록 조회 실패: ${f.message}`}},Je=async()=>{try{console.log("수요응답 Trip 조회 중...");try{const M=await fetch(`${a}/api/on-demand-trips/calls`);if(M.ok){const f=await M.json();f&&f.length>0&&(console.log("📍 Call API 응답 구조 (첫 번째 call):",f[0]),console.log("📍 Call 필드명:",Object.keys(f[0])))}}catch(M){console.log("Call API 조회 스킵:",M)}try{const M=await fetch(`${a}/api/on-demand-trips/active`);if(M.ok){const f=await M.json();q.value=f||[],console.log("수요응답 활성 Trip:",f)}else throw new Error(`Active trips API failed: ${M.status}`)}catch(M){console.warn("활성 API 실패, 전체 조회 시도...",M);try{const f=await fetch(`${a}/api/on-demand-trips`);if(f.ok){const E=await f.json();q.value=E||[],console.log("=== 수요응답 Trip 전체 데이터 분석 ==="),console.log("전체 Trip 수:",E.length),E.forEach(G=>{var ye,ae;if(console.log(`🚗 수요응답 Trip ${G.id}:`,{status:G.status,vehicle_id:G.vehicle_id,driver_id:G.driver_id,start_time:G.start_time,end_time:G.end_time,current_passengers:G.current_passengers,service_area_id:G.service_area_id,has_calls:!!(G.calls&&G.calls.length>0),calls_count:((ye=G.calls)==null?void 0:ye.length)||0,call_ids:((ae=G.calls)==null?void 0:ae.map(I=>I.id))||[]}),G.calls&&G.calls.length>0){console.log("   📞 Call 데이터 구조 (첫 번째 call):",G.calls[0]);const I=G.calls[0].id;I&&fetch(`${a}/api/on-demand-trips/calls/${I}`).then(le=>le.json()).then(le=>{console.log(`   📍 Call #${I} 상세 정보:`,le)}).catch(le=>console.error(`Call #${I} 조회 실패:`,le))}});const O=E.reduce((G,ye)=>(G[ye.status]=(G[ye.status]||0)+1,G),{});console.log("상태별 Trip 수:",O);const j=E.filter(G=>G.status==="IN_PROGRESS");console.log("IN_PROGRESS Trip 수:",j.length),j.length>0&&console.log("IN_PROGRESS Trip vehicle_ids:",j.map(G=>G.vehicle_id))}}catch(f){console.warn("수요응답 Trip 조회 실패:",f)}}console.log(`수요응답 Trip ${q.value.length}개 조회 완료`)}catch(M){console.error("수요응답 Trip 조회 실패:",M)}},Ve=async()=>{try{console.log("정기노선 Trip 조회 중...");const M=new Date().toISOString().split("T")[0];try{const f=await n.getScheduledTripsApiPlanningScheduledTripsGet();f.data&&(K.value=f.data.filter(E=>E.status==="IN_PROGRESS"&&E.trip_date===M),console.log("정기노선 활성 Trip:",K.value))}catch{const E=await fetch(`${a}/api/planning/scheduled-trips?trip_date=${M}`);if(E.ok){const O=await E.json();K.value=O.filter(j=>j.status==="IN_PROGRESS"),console.log("정기노선 활성 Trip (fetch):",K.value)}}console.log(`정기노선 Trip ${K.value.length}개 조회 완료`)}catch(M){console.error("정기노선 Trip 조회 실패:",M)}},Se=async M=>{var f,E,O,j,G,ye;if(!(!c.value||!M.trip_id))try{let ae=null;const I=M.trip_id;if(M.tripType==="SCHEDULED"){const le=await fetch(`${a}/api/driver/scheduled-trips/${I}/route`);if(le.ok){const he=await le.text();if(he)try{ae=JSON.parse(he),xe.value.set(M.id,{...ae,is_upward:ae.trip_direction==="UPWARD"||I%2===0,current_stop_index:ae.current_stop_sequence||0,total_stops:((f=ae.route_stops)==null?void 0:f.length)||0}),console.log(`정기노선 Trip ${I} Route API 업데이트 데이터:`,{trip_type:ae.trip_type,trip_status:ae.trip_status,current_node_id:ae.current_node_id,current_location:[ae.current_latitude,ae.current_longitude],route_points_count:((E=ae.route_points)==null?void 0:E.length)||0,heading_fields:{heading:ae.heading,current_location_heading:(O=ae.current_location)==null?void 0:O.heading,has_current_location_obj:!!ae.current_location}})}catch{console.log(`정기노선 Trip ${I} 경로 파싱 실패:`,he)}}else console.log(`정기노선 Trip ${I} 경로 API 응답 실패:`,le.status)}else if(M.tripType==="ON_DEMAND"){const le=await fetch(`${a}/api/driver/on-demand-trips/${I}/route`);if(le.ok){const he=await le.text();if(he)try{ae=JSON.parse(he),console.log(`수요응답 Trip ${I} Route API 업데이트 데이터:`,{trip_type:ae.trip_type,trip_status:ae.trip_status,current_node_id:ae.current_node_id,current_location:[ae.current_latitude,ae.current_longitude],route_points_count:((j=ae.route_points)==null?void 0:j.length)||0,heading_fields:{heading:ae.heading,current_location_heading:(G=ae.current_location)==null?void 0:G.heading,has_current_location_obj:!!ae.current_location}})}catch{console.log(`수요응답 Trip ${I} 경로 파싱 실패:`,he)}}else console.log(`수요응답 Trip ${I} 경로 API 응답 실패:`,le.status)}if(ae){if(ae.current_latitude&&ae.current_longitude&&(M.current_latitude=ae.current_latitude,M.current_longitude=ae.current_longitude),((ye=ae.current_location)==null?void 0:ye.heading)!==void 0)M.heading=ae.current_location.heading,console.log(`차량 ${M.id} heading 업데이트:`,M.heading);else if(ae.heading!==void 0)M.heading=ae.heading,console.log(`차량 ${M.id} heading 업데이트:`,M.heading);else{const le=ie(M,ae);le!==null&&(M.heading=le,console.log(`차량 ${M.id} heading 계산됨:`,M.heading))}xe.value.set(M.id,{last_node_id:ae.last_node_id,current_node_id:ae.current_node_id,current_link_id:ae.current_link_id,link_progress:ae.link_progress,trip_direction:ae.trip_direction,trip_status:ae.trip_status,current_stop_sequence:ae.current_stop_sequence,current_stop_name:ae.current_stop_name,is_returning:ae.trip_status==="RETURNING",route_links:ae.route_links,stops:ae.stops||ae.route_points}),await nt(M,ae),N(M,ae)&&$t(M,ae),await ii()}else console.log(`차량 ${M.id} (Trip ${I}): 경로 데이터 없음`)}catch(ae){console.error(`차량 ${M.id} 경로 로드 실패:`,ae)}},nt=async(M,f)=>{if(!c.value)return;const E=f.current_latitude||M.current_latitude,O=f.current_longitude||M.current_longitude;if(!E||!O)return;let j=p.value.get(M.id);if(j){const G=xt.latLng(E,O);if(j.getLatLng().distanceTo(G)>5){j.setLatLng(G);const I=M.tripStatus==="RETURNING"?"#EA580C":M.tripType==="SCHEDULED"?"#2563EB":"#059669",le=Li(M,I);j.setIcon(le),me(j,M,f)}}else De(M);Me(M.id,E,O)},N=(M,f)=>{const E=U.value.get(M.id)||0,O=Date.now();if(O-E>5e3)return U.value.set(M.id,O),!0;const j=k.value.get(M.id),G=f.current_link_id||f.current_node_id;return j!==G?(k.value.set(M.id,G),!0):!1},me=(M,f,E)=>{var G,ye;const O=f.tripType==="SCHEDULED"?"정기노선":f.tripType==="ON_DEMAND"?"수요응답":"알 수 없음",j=`
    <div class="vehicle-popup">
      <h4 class="font-semibold">${f.vehicle_number}</h4>
      <p class="text-sm text-gray-600">${O}</p>
      <p class="text-xs text-gray-500">
        위치: ${(G=E.current_latitude)==null?void 0:G.toFixed(6)}, ${(ye=E.current_longitude)==null?void 0:ye.toFixed(6)}<br>
        방향: ${f.heading||0}°<br>
        승객: ${f.current_occupancy||0}/${f.capacity||0}명<br>
        상태: ${zn(f.tripStatus)}
      </p>
    </div>
  `;M.bindPopup(j,{autoPan:!1})},Me=(M,f,E)=>{if(!c.value)return;let O=d.value.get(M)||[];O.push([f,E]),O.length>20&&(O=O.slice(-20)),d.value.set(M,O);const j=g.value.get(M);if(j&&c.value.removeLayer(j),O.length>=2){const G=xt.polyline(O,{color:"#FF6600",weight:2,opacity:.6,dashArray:"3, 6",className:"trajectory-line"});G.addTo(c.value),g.value.set(M,G)}},De=M=>{if(!c.value)return;const f=M.current_latitude,E=M.current_longitude;if(!f||!E)return;let O="#6B7280";M.tripStatus==="RETURNING"?O="#EA580C":M.tripType==="SCHEDULED"?O="#2563EB":M.tripType==="ON_DEMAND"&&(O="#059669");const j=Li(M,O),G=xt.marker([f,E],{icon:j,zIndexOffset:1e3}),ye=M.tripType==="SCHEDULED"?"정기노선":M.tripType==="ON_DEMAND"?"수요응답":"알 수 없음",ae=`
    <div class="vehicle-popup">
      <h4 class="font-semibold">${M.vehicle_number}</h4>
      <p class="text-sm text-gray-600">${ye}</p>
      <p class="text-xs text-gray-500">
        위치: ${f.toFixed(6)}, ${E.toFixed(6)}<br>
        방향: ${M.heading||0}°<br>
        승객: ${M.current_occupancy||0}/${M.capacity||0}명<br>
        상태: ${zn(M.tripStatus)}
      </p>
    </div>
  `;G.bindPopup(ae,{autoPan:!1}),G.addTo(c.value),p.value.set(M.id,G)},fe=M=>{var E,O;const f=M.tripType==="SCHEDULED"?"정기노선":M.tripType==="ON_DEMAND"?"수요응답":"알 수 없음";return`
    <div class="vehicle-popup">
      <h4 class="font-semibold">${M.vehicle_number}</h4>
      <p class="text-sm text-gray-600">${f}</p>
      <p class="text-xs text-gray-500">
        위치: ${(E=M.current_latitude)==null?void 0:E.toFixed(6)}, ${(O=M.current_longitude)==null?void 0:O.toFixed(6)}<br>
        방향: ${M.heading||0}°<br>
        승객: ${M.current_occupancy||0}/${M.capacity||0}명<br>
        상태: ${zn(M.tripStatus)}
      </p>
    </div>
  `},ie=(M,f)=>{try{D.value||(D.value=new Map);const E=D.value.get(M.id),O=f.current_latitude,j=f.current_longitude;if(!E||!O||!j)return D.value.set(M.id,{lat:O,lng:j,timestamp:Date.now()}),null;if(Ne(E.lat,E.lng,O,j)<9e-5)return null;const ye=et(E.lat,E.lng,O,j);return D.value.set(M.id,{lat:O,lng:j,timestamp:Date.now()}),Math.round(ye)}catch(E){return console.error("heading 계산 오류:",E),null}},Ne=(M,f,E,O)=>{const j=E-M,G=O-f;return Math.sqrt(j*j+G*G)},et=(M,f,E,O)=>{const j=(O-f)*Math.PI/180,G=M*Math.PI/180,ye=E*Math.PI/180,ae=Math.sin(j)*Math.cos(ye),I=Math.cos(G)*Math.sin(ye)-Math.sin(G)*Math.cos(ye)*Math.cos(j);return(Math.atan2(ae,I)*180/Math.PI+360)%360},Mt=(M,f,E)=>{if(!c.value||!f.start_node||!f.end_node)return;const O=L.value.get(M);O&&c.value.removeLayer(O);const j=f.start_node.latitude+(f.end_node.latitude-f.start_node.latitude)*E,G=f.start_node.longitude+(f.end_node.longitude-f.start_node.longitude)*E,ye=xt.divIcon({className:"progress-arrow",html:'<div style="color: #FF0000; font-size: 20px; font-weight: bold; text-shadow: 0 0 3px white;">→</div>',iconSize:[20,20],iconAnchor:[10,10]}),ae=xt.marker([j,G],{icon:ye});ae.addTo(c.value),L.value.set(M,ae)},ft=async(M,f)=>{var O,j,G,ye,ae;const E=`${M}-${f}`;if(v.value.has(E)){const I=v.value.get(E);return console.log(`🔗 링크 캐시 히트 ${E}:`,{has_geojson:!!(I.geojson&&I.geojson.geometry),geojson_type:(j=(O=I.geojson)==null?void 0:O.geometry)==null?void 0:j.type,coordinates_count:(ae=(ye=(G=I.geojson)==null?void 0:G.geometry)==null?void 0:ye.coordinates)==null?void 0:ae.length}),I}try{if(console.log(`🔗 링크 캐시 사이즈: ${v.value.size}`),v.value.size===0){console.log("🌐 Network API에서 모든 링크 정보 로드 중...");const le=await r.getActiveLinksApiNetworkLinksGet();le.data?(console.log(`🌐 Network API 응답: ${le.data.length}개 링크`),le.data.forEach(he=>{const ne=`${he.from_node_id}-${he.to_node_id}`;v.value.set(ne,he)}),console.log(`🔗 링크 캐시 구축 완료: ${v.value.size}개 링크`)):console.warn("🌐 Network API 응답 데이터 없음")}const I=v.value.get(E)||null;return I||console.warn(`🔗 링크 ${E} 캐시에서 찾을 수 없음`),I}catch(I){return console.error("🌐 링크 정보 조회 실패:",I),null}},Jt=M=>{var f;!c.value||!M.stops||(S.value.forEach(E=>{var O;(O=c.value)==null||O.removeLayer(E)}),S.value.clear(),(f=M.stops)==null||f.forEach(E=>{const O=xt.divIcon({className:"stop-marker",html:`
        <div class="stop-icon ${E.is_passed?"passed":""}" 
             style="background: ${E.is_passed?"#9CA3AF":"#3B82F6"}; 
                    width: 28px; height: 28px; border-radius: 50%; 
                    display: flex; align-items: center; justify-content: center;
                    border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">
          <span style="color: white; font-weight: bold; font-size: 12px;">${E.order||E.sequence||""}</span>
        </div>
      `,iconSize:[28,28],iconAnchor:[14,14]}),j=xt.marker([E.latitude,E.longitude],{icon:O}).bindPopup(`
        <b>${E.name||E.node_name}</b><br>
        순서: ${E.order||E.sequence}<br>
        ${E.arrival_time?`도착: ${y(E.arrival_time)}`:""}
        ${E.is_passed?'<br><span style="color: #9CA3AF;">통과됨</span>':""}
      `,{autoPan:!1});if(j.addTo(c.value),S.value.set(E.node_id,j),M.next_node_id===E.node_id){const G=j.getPopup();G&&(G.options.autoPan=!1,j.openPopup())}}))},$t=async(M,f)=>{var ye,ae;if(!c.value)return;const E=m.value.get(M.id);E&&E.forEach(I=>{var le;return(le=c.value)==null?void 0:le.removeLayer(I)});const O=L.value.get(M.id);O&&(c.value.removeLayer(O),L.value.delete(M.id));const j=[];if(Jt(f),f.route_links&&Array.isArray(f.route_links)){console.log(`route_links 배열 처리: ${f.route_links.length}개 링크`),console.log("첫 번째 링크 구조:",JSON.stringify(f.route_links[0],null,2)),f.route_links.forEach((I,le)=>{var he,ne,te;console.log(`Link ${le+1} (ID: ${I.link_id}):`,{has_geojson:!!I.geojson,geojson_type:(he=I.geojson)==null?void 0:he.type,coordinates_count:(te=(ne=I.geojson)==null?void 0:ne.coordinates)==null?void 0:te.length,is_current:I.is_current,is_completed:I.is_completed})});for(const I of f.route_links){let le;const he=I.is_completed?"#888888":I.is_current?"#FF0000":"#0066CC",ne=I.is_current?5:3,te=I.is_completed?.5:.8,oe=I.is_completed?"5, 10":void 0;if(I.geojson&&I.geojson.coordinates)console.log(`링크 ${I.link_id}: Route API의 GeoJSON 사용 (${I.geojson.coordinates.length}개 점)`),le=xt.geoJSON(I.geojson,{style:{color:he,weight:ne,opacity:te,dashArray:oe}});else if(I.link_id&&I.start_node&&I.end_node){const Ye=await ft(I.start_node.id||I.start_node.node_id,I.end_node.id||I.end_node.node_id);if(Ye&&Ye.geojson&&Ye.geojson.geometry)console.log(`링크 ${I.link_id}: 네트워크 API에서 GeoJSON 가져옴`),le=xt.geoJSON(Ye.geojson.geometry,{style:{color:he,weight:ne,opacity:te,dashArray:oe}});else{console.log(`링크 ${I.link_id}: 네트워크 API에서도 GeoJSON 없음, 직선 연결`);const wt=[[I.start_node.latitude,I.start_node.longitude],[I.end_node.latitude,I.end_node.longitude]];le=xt.polyline(wt,{color:he,weight:ne,opacity:te,dashArray:oe})}}else{console.log(`링크 ${I.link_id||"Unknown"}: 링크 정보 불완전, 직선 연결`);const Ye=[[I.start_node.latitude,I.start_node.longitude],[I.end_node.latitude,I.end_node.longitude]];le=xt.polyline(Ye,{color:he,weight:ne,opacity:te,dashArray:oe})}le.addTo(c.value),j.push(le),I.is_current&&f.link_progress&&Mt(M.id,I,f.link_progress)}m.value.set(M.id,j),console.log(`차량 ${M.id}: ${j.length}개 링크 표시 완료`);return}const G=f.stops||f.route_points||f.waypoints||[];if(G&&Array.isArray(G)){console.log(`stops 배열 파싱: ${G.length}개 노드`);for(let I=0;I<G.length-1;I++){const le=G[I],he=G[I+1];if(le.node_id&&he.node_id){const ne=await ft(le.node_id,he.node_id);ne&&ne.geojson&&ne.geojson.geometry&&ne.geojson.geometry.coordinates?ne.geojson.geometry.coordinates.forEach(oe=>{Array.isArray(oe)&&oe.length>=2&&routePoints.push([oe[1],oe[0]])}):(console.log(`링크 ${le.node_id}->${he.node_id} GeoJSON 없음, 직선 연결`),routePoints.push([le.latitude,le.longitude]),I===G.length-2&&routePoints.push([he.latitude,he.longitude]))}}console.log(`총 ${routePoints.length}개 좌표 포인트 생성`)}else Array.isArray(f)?(console.log(`직접 배열 파싱: ${f.length}개`),routePoints=f.map(I=>I.latitude&&I.longitude?[I.latitude,I.longitude]:I.lat&&I.lng?[I.lat,I.lng]:Array.isArray(I)&&I.length>=2?[I[0],I[1]]:null).filter(Boolean)):f.coordinates?(console.log(`coordinates 배열 파싱: ${f.coordinates.length}개`),routePoints=f.coordinates.map(I=>Array.isArray(I)&&I.length>=2?[I[1],I[0]]:null).filter(Boolean)):f.points?(console.log(`points 배열 파싱: ${f.points.length}개`),routePoints=f.points.map(I=>I.latitude&&I.longitude?[I.latitude,I.longitude]:null).filter(Boolean)):f.path?(console.log(`path 배열 파싱: ${f.path.length}개`),routePoints=f.path.map(I=>I.latitude&&I.longitude?[I.latitude,I.longitude]:I.lat&&I.lng?[I.lat,I.lng]:null).filter(Boolean)):console.warn("알 수 없는 경로 데이터 형식:",f);if(routePoints.length>0){const I=currentLocation.latitude||I,le=currentLocation.longitude||le;let he=-1,ne=1/0;if(f.route_links){let te=0;for(const oe of f.route_links){const Ye=((ae=(ye=oe.geojson)==null?void 0:ye.coordinates)==null?void 0:ae.length)||2;if(oe.is_current){he=te+Math.floor(Ye*linkProgress);break}if(oe.is_completed)te+=Ye;else break}}if(he===-1&&routePoints.forEach((te,oe)=>{const Ye=Math.sqrt(Math.pow(te[0]-I,2)+Math.pow(te[1]-le,2));Ye<ne&&(ne=Ye,he=oe)}),console.log(`차량 ${M.id}: 경로 포인트 ${routePoints.length}개, 현재 인덱스 ${he}`),he>0){const te=xt.polyline(routePoints.slice(0,he+1),{color:"#9CA3AF",weight:3,opacity:.6,dashArray:"8, 8"});te.addTo(c.value),j.push(te),console.log(`이전 경로 추가: ${he+1}개 포인트`)}if(he<routePoints.length-1&&he>=0){const te=M.tripType==="SCHEDULED"?"#3B82F6":"#10B981",oe=xt.polyline(routePoints.slice(he),{color:te,weight:4,opacity:.8});oe.addTo(c.value),j.push(oe),console.log(`미래 경로 추가: ${routePoints.length-he}개 포인트, 색상: ${te}`)}if(he===-1){const te=M.tripType==="SCHEDULED"?"#3B82F6":"#10B981",oe=xt.polyline(routePoints,{color:te,weight:4,opacity:.8});oe.addTo(c.value),j.push(oe),console.log(`전체 경로 추가: ${routePoints.length}개 포인트, 색상: ${te}`)}m.value.set(M.id,j)}},Li=(M,f)=>{const E=M.heading||0;return console.log(`차량 ${M.id} 아이콘 생성 - heading: ${E} (vehicle.heading: ${M.heading})`),xt.divIcon({html:`
      <div style="transform: rotate(${E}deg); transform-origin: center; filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.5));">
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(20, 20)">
            <!-- 외곽 테두리 -->
            <path d="M 0,-16 L -8,10 L 0,6 L 8,10 Z" 
                  fill="white" 
                  stroke="black" 
                  stroke-width="1"
                  opacity="1"/>
            <!-- 내부 색상 -->
            <path d="M 0,-14 L -7,9 L 0,5 L 7,9 Z" 
                  fill="${f}" 
                  stroke="none"
                  opacity="1"/>
            <!-- 중앙 점 -->
            <circle cx="0" cy="0" r="4" fill="white" stroke="black" stroke-width="1"/>
            <circle cx="0" cy="0" r="2.5" fill="${f}"/>
          </g>
        </svg>
      </div>
    `,className:"vehicle-icon",iconSize:[40,40],iconAnchor:[20,20]})};let Qt=!1;const ii=async()=>{var M;if(Qt){console.log("updateRouteDiagram 이미 실행 중, 건너뛰기");return}Qt=!0,console.log("=== updateRouteDiagram 시작 ===");try{const f=new Map;let E=[];try{E=(await r.getActiveRoutesApiNetworkRoutesGet()).data||[],console.log(`전체 노선 ${E.length}개 로드`)}catch(I){console.error("전체 노선 정보 로드 실패:",I),E=[{id:1,name:"강서01",node_sequence:[134,135,136,137,138,139,140,141,142,143,144,145]}];const le=[{id:134,name:"강서경찰서",sequence:0},{id:135,name:"동양라이트",sequence:1},{id:136,name:"스마트빌리지",sequence:2},{id:137,name:"대저중앙초.가락중",sequence:3},{id:138,name:"에코3고등학교",sequence:4},{id:139,name:"에코3중학교.에코4초등학교",sequence:5},{id:140,name:"에코3중학교.에코4초등학교",sequence:6},{id:141,name:"에코3고등학교",sequence:7},{id:142,name:"대저중앙초.가락중",sequence:8},{id:143,name:"스마트빌리지",sequence:9},{id:144,name:"동양라이트",sequence:10},{id:145,name:"강서경찰서",sequence:11}];f.set(1,{routeId:1,routeName:"강서01",stops:le,buses:[]})}const O="on-demand-route";if(q.value.length>0){const I={routeId:O,routeName:"수요응답",stops:[],buses:[]},le=new Set,he=[];for(const ne of q.value)ne.start_node&&!le.has(ne.start_node.id)&&(le.add(ne.start_node.id),he.push({id:ne.start_node.id,name:ne.start_node.name||`정류장 ${ne.start_node.id}`,latitude:ne.start_node.latitude,longitude:ne.start_node.longitude,sequence:he.length})),ne.end_node&&!le.has(ne.end_node.id)&&(le.add(ne.end_node.id),he.push({id:ne.end_node.id,name:ne.end_node.name||`정류장 ${ne.end_node.id}`,latitude:ne.end_node.latitude,longitude:ne.end_node.longitude,sequence:he.length}));I.stops=he;for(const ne of q.value){const te=Q.value.find(oe=>oe.id===ne.vehicle_id);if(te){const oe=xe.value.get(te.id);let Ye=50;oe&&oe.link_progress!==void 0?Ye=oe.link_progress:ne.status==="PICKING_UP"?Ye=25:ne.status==="IN_TRANSIT"&&(Ye=75),I.buses.push({vehicleId:te.id,vehicleNumber:te.vehicle_number||te.id.toString(),position:Math.min(Math.max(Ye,0),100),direction:"forward",tripId:ne.id,tripType:"ON_DEMAND",tripStatus:ne.status,currentStop:"",occupancy:te.current_occupancy||0,capacity:te.capacity||0})}}I.stops.length>0&&f.set(O,I)}const j=new Map;for(const I of K.value)I.vehicle_id&&I.status!=="SCHEDULED"&&I.status!=="COMPLETED"&&(j.set(I.vehicle_id,{tripId:I.id,tripType:"SCHEDULED",routeId:I.route_id}),console.log(`정기노선 Trip #${I.id} -> 차량 ${I.vehicle_id}`));for(const I of q.value)I.vehicle_id&&I.status!=="SCHEDULED"&&I.status!=="COMPLETED"&&I.status!=="CANCELLED"&&(j.set(I.vehicle_id,{tripId:I.id,tripType:"ON_DEMAND",routeId:I.route_id}),console.log(`수요응답 Trip #${I.id} -> 차량 ${I.vehicle_id} (기존 Trip 덮어쓰기)`));console.log("활성 Trip 매핑:",Array.from(j.entries()).map(([I,le])=>{const he=Q.value.find(ne=>ne.id===I);return`차량 ${he==null?void 0:he.vehicle_number}(${I}): Trip #${le.tripId} (${le.tripType})`}));for(const I of K.value){if(!I.route_id||!I.vehicle_id)continue;const le=j.get(I.vehicle_id);if(!le||le.tripId!==I.id){console.log(`Trip #${I.id}는 활성 상태가 아니거나 다른 Trip이 우선, 건너뛰기`);continue}const he=I.route_id;if(!f.has(he)){console.log(`새로운 노선 ${he} 처리 시작`);let oe=Pe.value.get(he);if(oe?oe={...oe,buses:[]}:(oe={routeId:he,routeName:"",stops:[],buses:[]},Pe.value.set(he,oe)),f.set(he,oe),!oe.stops||oe.stops.length===0){const Ye=E.find(wt=>wt.id===he);Ye&&(oe.routeName=Ye.name||Ye.route_name||`${he}번 노선`);try{const wt=await fetch(`${a}/api/network/routes/${he}/details`);if(wt.ok){const St=await wt.json();console.log(`Route ${he} 상세 정보:`,St),St.route_name&&(oe.routeName=St.route_name),St.nodes&&St.nodes.length>0&&(oe.stops=St.nodes.map((pt,Et)=>({id:pt.node_id||pt.id||Et,name:pt.node_name||pt.name||`정류장 ${Et+1}`,sequence:pt.sequence!==void 0?pt.sequence:Et,type:pt.node_type||"STATION",latitude:pt.latitude,longitude:pt.longitude})),oe.stops.sort((pt,Et)=>pt.sequence-Et.sequence),console.log(`노선 ${he} (${oe.routeName})의 정류장 ${oe.stops.length}개:`,oe.stops.map(pt=>pt.name)),Pe.value.set(he,oe))}else console.error(`Route ${he} details API 실패: ${wt.status}`)}catch(wt){console.error(`Route ${he} details API 호출 실패:`,wt)}oe.routeName||(oe.routeName=I.route_name||`${he}번 노선`)}}const ne=f.get(he),te=Q.value.find(oe=>oe.id===I.vehicle_id);if(te&&ne&&ne.stops.length>0){const oe=xe.value.get(te.id);let Ye=50,wt="forward";if(oe&&oe.last_node_id){const pt=ne.stops.findIndex(Et=>Et.id===oe.last_node_id||Et.node_id===oe.last_node_id);if(pt!==-1){if(Ye=pt/Math.max(ne.stops.length-1,1)*100,oe.link_progress!==void 0&&oe.link_progress!==null){const Et=100/Math.max(ne.stops.length-1,1),It=oe.link_progress/100*Et;Ye=Math.min(100,Ye+It)}(oe.trip_direction==="DOWNWARD"||oe.is_returning)&&(wt="backward",Ye=100-Ye),console.log(`차량 ${te.vehicle_number} Route API 위치:`,{last_node_id:oe.last_node_id,lastNodeIndex:pt,link_progress:oe.link_progress,position:Ye.toFixed(1),direction:wt,trip_status:oe.trip_status})}else if(te.current_latitude&&te.current_longitude){let Et=0,It=1/0;ne.stops.forEach((tn,kn)=>{if(tn.latitude&&tn.longitude){const La=Math.sqrt(Math.pow(te.current_latitude-tn.latitude,2)+Math.pow(te.current_longitude-tn.longitude,2));La<It&&(It=La,Et=kn)}}),Ye=Et/Math.max(ne.stops.length-1,1)*100}}else if(te.current_latitude&&te.current_longitude){let pt=0,Et=1/0;ne.stops.forEach((It,tn)=>{if(It.latitude&&It.longitude){const kn=Math.sqrt(Math.pow(te.current_latitude-It.latitude,2)+Math.pow(te.current_longitude-It.longitude,2));kn<Et&&(Et=kn,pt=tn)}}),Ye=pt/Math.max(ne.stops.length-1,1)*100}const St={vehicleId:te.id,vehicleNumber:te.vehicle_number||te.id.toString(),position:Math.min(Math.max(Ye,0),100),direction:wt,tripId:I.id,tripType:"SCHEDULED",tripStatus:I.status,currentStop:I.current_stop_name||"",occupancy:te.current_occupancy||0,capacity:te.capacity||0};ne.buses.push(St)}}for(const I of q.value){const le=Q.value.find(oe=>oe.id===I.vehicle_id);if(!le)continue;const he=j.get(le.id);if(!he||he.tripId!==I.id){console.log(`수요응답 Trip #${I.id}는 차량 ${le.vehicle_number}(${le.id})의 활성 Trip이 아님, 건너뛰기`);continue}if(I.status==="SCHEDULED"||I.status==="COMPLETED"||I.status==="CANCELLED")continue;let ne=null;const te=xe.value.get(le.id);if(I.route_id&&(ne=f.get(I.route_id)),ne||(ne=Array.from(f.values())[0]),ne&&ne.stops.length>0){let oe=50;console.log(`🔍 수요응답 차량 ${le.vehicle_number} (ID: ${le.id}) 디버깅:`),console.log("  - odTrip.route_id:",I.route_id),console.log("  - targetRoute.routeId:",ne==null?void 0:ne.routeId),console.log("  - targetRoute.routeName:",ne==null?void 0:ne.routeName),console.log("  - vehicleRoute 전체:",te),console.log("  - last_node_id:",te==null?void 0:te.last_node_id),console.log("  - current_node_id:",te==null?void 0:te.current_node_id),console.log("  - current_link_id:",te==null?void 0:te.current_link_id),console.log("  - link_progress:",te==null?void 0:te.link_progress),console.log("  - trip_status:",te==null?void 0:te.trip_status),console.log("  - targetRoute.stops:",ne.stops.map(St=>({id:St.id,name:St.name})));const Ye=(te==null?void 0:te.last_node_id)||(te==null?void 0:te.current_node_id);if(te&&Ye){const St=ne.stops.findIndex(pt=>pt.id===Ye||pt.node_id===Ye);if(St!==-1){const pt=ne.stops.length>2&&ne.stops[0].id===ne.stops[ne.stops.length-1].id;if(pt&&St===ne.stops.length-1?oe=99:oe=St/Math.max(ne.stops.length-1,1)*100,te.link_progress!==void 0&&te.link_progress!==null&&te.link_progress>0){const Et=100/Math.max(ne.stops.length-1,1),It=te.link_progress/100*Et;oe=Math.min(100,oe+It)}console.log(`수요응답 차량 ${le.vehicle_number} 노드 기반 위치:`,{node_id_used:Ye,node_name:(M=ne.stops[St])==null?void 0:M.name,lastNodeIndex:St,total_stops:ne.stops.length,is_circular:pt,link_progress:te.link_progress,calculated_position:oe})}else if(le.current_latitude&&le.current_longitude){let pt=1/0,Et=0;ne.stops.forEach((It,tn)=>{if(It.latitude&&It.longitude){const kn=Math.sqrt(Math.pow(le.current_latitude-It.latitude,2)+Math.pow(le.current_longitude-It.longitude,2));kn<pt&&(pt=kn,Et=tn)}}),oe=Et/Math.max(ne.stops.length-1,1)*100,console.log(`수요응답 차량 ${le.vehicle_number} GPS 기반 위치:`,{closestIndex:Et,calculated_position:oe})}}else if(le.current_latitude&&le.current_longitude){let St=1/0,pt=0;ne.stops.forEach((Et,It)=>{if(Et.latitude&&Et.longitude){const tn=Math.sqrt(Math.pow(le.current_latitude-Et.latitude,2)+Math.pow(le.current_longitude-Et.longitude,2));tn<St&&(St=tn,pt=It)}}),oe=pt/Math.max(ne.stops.length-1,1)*100,console.log(`수요응답 차량 ${le.vehicle_number} GPS 기반 위치 (대체):`,{closestIndex:pt,calculated_position:oe})}else I.status==="PICKING_UP"?oe=30:I.status==="IN_TRANSIT"?oe=70:I.status==="DROPPING_OFF"&&(oe=90),console.log(`수요응답 차량 ${le.vehicle_number} 상태 기반 위치:`,{status:I.status,calculated_position:oe});const wt={vehicleId:le.id,vehicleNumber:le.vehicle_number||le.id.toString(),position:Math.min(Math.max(oe,0),100),direction:"forward",tripId:I.id,tripType:"ON_DEMAND",tripStatus:I.status,currentStop:(te==null?void 0:te.current_stop_name)||"",occupancy:le.current_occupancy||0,capacity:le.capacity||0};ne.buses.push(wt),console.log(`수요응답 차량 ${le.vehicle_number}(ID: ${le.id}) 노선도에 추가 완료:`,{position:oe.toFixed(1),status:I.status,routeName:ne.routeName,last_node_id:te==null?void 0:te.last_node_id,current_link_id:te==null?void 0:te.current_link_id,link_progress:te==null?void 0:te.link_progress})}}f.forEach(I=>{I.stops.length===0&&console.warn(`노선 ${I.routeId}에 정리장 정보가 없습니다`)});const G=Array.from(f.values()),ye=new Set,ae=G.filter(I=>ye.has(I.routeId)?(console.warn(`중복된 노선 ${I.routeId} 발견, 제거`),!1):(ye.add(I.routeId),!0));Y.value=ae,console.log("노선도 데이터 생성 완료:",Y.value.length,"개 노선"),console.log("노선 목록:",Y.value.map(I=>`${I.routeId}: ${I.routeName}(${I.stops.length}개 정류장, ${I.buses.length}대 버스)`)),console.log("routeMap 크기:",f.size,"uniqueRoutes 수:",G.length,"filtered 수:",ae.length)}catch(f){console.error("노선도 데이터 업데이트 실패:",f)}finally{Qt=!1}},es=async()=>{if(!c.value)return;const M=new Set(Z.value.map(E=>E.id)),f=new Set(p.value.keys());for(const E of f)if(!M.has(E)){const O=p.value.get(E);O&&(c.value.removeLayer(O),p.value.delete(E));const j=m.value.get(E);j&&(j.forEach(ye=>{var ae;return(ae=c.value)==null?void 0:ae.removeLayer(ye)}),m.value.delete(E));const G=g.value.get(E);G&&(c.value.removeLayer(G),g.value.delete(E))}Z.value.forEach(E=>{if(E.current_latitude&&E.current_longitude){const O=p.value.get(E.id);if(!O)De(E),Se(E);else{const j=xt.latLng(E.current_latitude,E.current_longitude);O.setLatLng(j);const G=fe(E);O.setPopupContent(G),Se(E)}}}),console.log(`${Z.value.length}대의 차량 차등 업데이트 완료`)},ts=async()=>{b.value=!0,P.value=null;try{await An(),console.log("수동 새로고침 완료")}catch(M){console.error("수동 새로고침 실패:",M),P.value=M.message||"데이터 로드 중 오류가 발생했습니다."}finally{b.value=!1}},en=async()=>{T.value=!0;try{P.value=null,await An(),de.value>1e3&&console.log("백그라운드 업데이트 완료")}catch(M){console.error("백그라운드 업데이트 실패:",M),setTimeout(()=>{P.value&&(P.value=null)},3e3)}finally{T.value=!1}},Bn=M=>{if(!c.value||!u.value)return;c.value.removeLayer(u.value);let f;switch(M){case"dark":f=xt.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{attribution:"© OpenStreetMap contributors © CARTO",maxZoom:19,subdomains:"abcd"});break;case"light":f=xt.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",{attribution:"© OpenStreetMap contributors © CARTO",maxZoom:19,subdomains:"abcd"});break;case"color":f=xt.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",{attribution:"© OpenStreetMap contributors © CARTO",maxZoom:19,subdomains:"abcd"});break;case"satellite":f=xt.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"© Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN",maxZoom:19});break}f.addTo(c.value),u.value=f,l.value=M,h.value=!1},An=async()=>{await we(),await Promise.all([Je(),Ve(),Oe()]),await es(),await ii(),ee.value=new Date().toLocaleString("ko-KR")},ns=M=>{const f=Z.value.find(E=>E.id===M);Ee.value.has(M)?Ee.value.delete(M):(Ee.value.add(M),f&&f.current_latitude&&f.current_longitude&&Xs(f))},is=()=>{_t.value=null,_e.value=null,tt.value={pedestrians:0,vehicles:0,bicycles:0}},Xs=M=>{if(c.value&&M.current_latitude&&M.current_longitude){console.log(`🗺️ 지도 중심 이동: 차량 ${M.vehicle_number} (ID: ${M.id})`),c.value.setView([M.current_latitude,M.current_longitude],15);const f=p.value.get(M.id);if(f){const E=f.getPopup();E&&(E.options.autoPan=!1),f.openPopup()}}},zn=M=>{switch(M){case"SCHEDULED":return"예약됨";case"IN_PROGRESS":return"운행중";case"RETURNING":return"차고지 복귀중";case"COMPLETED":return"완료";case"CANCELLED":return"취소됨";default:return"알 수 없음"}},ss=(M,f)=>!M||!f?"N/A":`${M.toFixed(4)}, ${f.toFixed(4)}`,$s=()=>{console.log(`업데이트 주기를 ${de.value}ms로 변경`),_&&clearInterval(_),_=setInterval(en,de.value)},dt=M=>M.tripType==="ON_DEMAND"?q.value.find(f=>f.vehicle_id===M.id):M.tripType==="SCHEDULED"?K.value.find(f=>f.vehicle_id===M.id):null,rs=M=>({SCHEDULED:"text-blue-600",IN_PROGRESS:"text-green-600 font-medium",RETURNING:"text-orange-600 font-medium",COMPLETED:"text-gray-500",CANCELLED:"text-red-600"})[M||""]||"text-gray-500",y=M=>{if(!M)return"-";try{return new Date(M).toLocaleString("ko-KR",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return M}},B=M=>{if(!M)return"-";try{return M.match(/^\d{2}:\d{2}$/)?M:new Date(M).toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return M}},X=M=>{if(M.start_node&&typeof M.start_node=="object")return M.start_node.name||`정류장 #${M.start_node.id}`;if(M.start_node_id)return`정류장 #${M.start_node_id}`;const f=M.pickup_address||M.origin_address||M.from_address;if(f)return f;const E=M.pickup_latitude||M.pickup_lat||M.origin_latitude||M.origin_lat,O=M.pickup_longitude||M.pickup_lng||M.pickup_lon||M.origin_longitude||M.origin_lng||M.origin_lon;return E!==void 0&&O!==void 0&&E!==null&&O!==null?`${Number(E).toFixed(4)}, ${Number(O).toFixed(4)}`:"위치 정보 없음"},$=M=>{if(M.end_node&&typeof M.end_node=="object")return M.end_node.name||`정류장 #${M.end_node.id}`;if(M.end_node_id)return`정류장 #${M.end_node_id}`;const f=M.dropoff_address||M.destination_address||M.to_address;if(f)return f;const E=M.dropoff_latitude||M.dropoff_lat||M.destination_latitude||M.destination_lat,O=M.dropoff_longitude||M.dropoff_lng||M.dropoff_lon||M.destination_longitude||M.destination_lng||M.destination_lon;return E!==void 0&&O!==void 0&&E!==null&&O!==null?`${Number(E).toFixed(4)}, ${Number(O).toFixed(4)}`:"위치 정보 없음"},z=M=>{if(!M)return"-";try{const f=new Date(M),O=new Date().getTime()-f.getTime(),j=Math.floor(O/6e4);if(j<60)return`${j}분`;{const G=Math.floor(j/60),ye=j%60;return`${G}시간 ${ye}분`}}catch{return"-"}},re=Il(),Ae=async M=>{if(!M.trip_id){re.warning("Trip ID가 없습니다.");return}if(confirm(`차량 ${M.vehicle_number}의 운행을 중단하시겠습니까?\\n\\n운행이 완료 처리되며 차량이 차고지로 복귀합니다.`))try{T.value=!0;const E=M.tripType||"SCHEDULED";console.log(`차량 ${M.id}: IN_PROGRESS → COMPLETED 상태 전환 시도`);const O=await fetch(`${a}/api/planning/trips/${M.trip_id}/status?trip_type=${E}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:"COMPLETED"})});if(O.ok)console.log(`차량 ${M.id} 운행 완료 처리됨`),await en(),re.success("운행이 완료 처리되었습니다.");else{const j=await O.text();if(console.error("운행완료 처리 실패:",O.status,j),O.status===400&&j.includes("상태 전환")){console.log("CANCELLED 상태로 시도");const G=await fetch(`${a}/api/planning/trips/${M.trip_id}/status?trip_type=${E}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:"CANCELLED"})});if(G.ok)console.log(`차량 ${M.id} 운행 취소됨`),await en(),re.warning("운행이 취소되었습니다.");else{const ye=await G.text();console.error("운행취소도 실패:",G.status,ye),re.error(`운행중단 실패: COMPLETED 전환 실패 - ${j}, CANCELLED 전환 실패 - ${ye}`)}}else re.error(`운행중단 실패: ${O.status} - ${j}`)}}catch(E){console.error("운행중단 오류:",E),re.error(`운행중단 중 오류가 발생했습니다: ${E.message}`)}finally{T.value=!1}},Ie=async M=>{if(!M.trip_id){re.warning("Trip ID가 없습니다.");return}if(confirm(`차량 ${M.vehicle_number}의 복귀를 완료하시겠습니까?`))try{if(T.value=!0,M.tripType==="ON_DEMAND"){const E=await fetch(`${a}/api/driver/trips/${M.trip_id}/return-complete`,{method:"POST",headers:{"Content-Type":"application/json"}});if(E.ok)console.log(`수요응답 차량 ${M.id} 복귀 완료`),await en(),re.success("복귀가 완료되었습니다.");else{const O=await E.text();console.error("복귀완료 실패:",E.status,O),re.error(`복귀완료 실패: ${E.status} - ${O}`)}}else{const E=M.tripType||"SCHEDULED",O=await fetch(`${a}/api/planning/trips/${M.trip_id}/status?trip_type=${E}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:"COMPLETED"})});if(O.ok)console.log(`정기노선 차량 ${M.id} 복귀 완료`),await en(),re.success("복귀가 완료되었습니다.");else{const j=await O.text();console.error("복귀완료 실패:",O.status,j),re.error(`복귀완료 실패: ${O.status} - ${j}`)}}}catch(E){console.error("복귀완료 오류:",E),re.error(`복귀완료 중 오류가 발생했습니다: ${E.message}`)}finally{T.value=!1}},Re=M=>{M===1?Ge.value=!Ge.value:M===2?it.value=!it.value:M===3&&(Ke.value=!Ke.value)},je=M=>{M===1?(C.value=!1,ue.value&&ue.value.pause()):M===2?(lt.value=!1,Ue.value&&Ue.value.pause()):M===3&&(ke.value=!1,Le.value&&Le.value.pause())},Ze=(M,f)=>{if(M.target.closest(".pip-header")){st.value=f;let E;if(f===1?E=Ce.value:f===2?E=W.value:f===3&&(E=ge.value),E){const O=E.getBoundingClientRect();We.value={x:M.clientX-O.left,y:M.clientY-O.top},document.addEventListener("mousemove",qe),document.addEventListener("mouseup",ot)}}},qe=M=>{if(st.value!==null){let f;if(st.value===1?f=Ce.value:st.value===2?f=W.value:st.value===3&&(f=ge.value),f){const E=M.clientX-We.value.x,O=M.clientY-We.value.y,j=window.innerWidth-f.offsetWidth,G=window.innerHeight-f.offsetHeight;f.style.left=`${Math.max(0,Math.min(E,j))}px`,f.style.top=`${Math.max(0,Math.min(O,G))}px`}}},ot=()=>{st.value=null,document.removeEventListener("mousemove",qe),document.removeEventListener("mouseup",ot)},vt=()=>{setTimeout(()=>{ue.value&&(ue.value.currentTime=0,ue.value.play())},100),setTimeout(()=>{Ue.value&&(Ue.value.currentTime=5,Ue.value.play())},500),setTimeout(()=>{Le.value&&(Le.value.currentTime=10,Le.value.play())},1e3)};return jo(async()=>{b.value=!0;try{ve(),await An(),console.log("초기 데이터 로드 완료")}catch(M){console.error("초기 데이터 로드 실패:",M),P.value=M.message||"데이터 로드 중 오류가 발생했습니다."}finally{b.value=!1}vt(),_=setInterval(en,de.value)}),Dl(()=>{_&&clearInterval(_),c.value&&c.value.remove()}),(M,f)=>(Fe(),Be("div",um,[x("div",dm,[f[22]||(f[22]=x("h1",{class:"text-lg font-semibold text-gray-700"},"실시간 차량 위치 추적",-1)),x("div",hm,[x("div",fm,[f[15]||(f[15]=x("div",{class:"w-3 h-3 bg-blue-500 rounded-full"},null,-1)),x("span",pm,"정기노선 ("+Te(ce.value)+"대)",1)]),x("div",mm,[f[16]||(f[16]=x("div",{class:"w-3 h-3 bg-green-500 rounded-full"},null,-1)),x("span",gm,"수요응답 ("+Te(J.value)+"대)",1)]),x("div",_m,[f[17]||(f[17]=x("div",{class:"w-3 h-3 bg-orange-500 rounded-full"},null,-1)),x("span",vm,"차고지 복귀 중 ("+Te(Xe.value)+"대)",1)]),x("div",xm,[f[18]||(f[18]=x("div",{class:"w-3 h-3 bg-gray-400 rounded-full"},null,-1)),x("span",Mm,"전체 차량 ("+Te(Q.value.length)+"대)",1)]),x("div",Sm,[x("span",null,"마지막 업데이트: "+Te(ee.value),1),x("div",{class:Tt(["w-2 h-2 rounded-full transition-all duration-300",T.value?"bg-blue-500 animate-pulse":"bg-transparent"]),title:"업데이트 상태"},null,2)]),x("div",ym,[f[21]||(f[21]=x("label",{class:"text-sm text-gray-600"},"업데이트 주기:",-1)),qn(x("select",{"onUpdate:modelValue":f[0]||(f[0]=E=>de.value=E),onChange:$s,class:"text-sm border border-gray-300 rounded px-2 py-1"},f[19]||(f[19]=[x("option",{value:1e3},"1초 (실시간)",-1),x("option",{value:3e3},"3초",-1),x("option",{value:5e3},"5초",-1),x("option",{value:1e4},"10초",-1),x("option",{value:3e4},"30초",-1)]),544),[[Ll,de.value]]),de.value===1e3?(Fe(),Be("div",Em,f[20]||(f[20]=[x("span",null,"⚡ 실시간 모드",-1)]))):ut("",!0),x("button",{onClick:ts,disabled:b.value||T.value,class:"px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 disabled:opacity-50",style:{"min-width":"100px"}},Te(b.value?"로딩 중...":"새로고침"),9,Tm)])])]),x("div",bm,[x("div",Am,[Y.value.length>0?(Fe(),Be("div",wm,[x("div",Rm,[(Fe(!0),Be(si,null,ri(Y.value,E=>(Fe(),Be("div",{key:E.routeId,class:"vertical-route-diagram"},[x("div",Cm,[x("div",Pm,[x("span",Dm,Te(E.routeName.replace(/[^0-9]/g,"")||"01"),1),x("span",Lm,Te(E.routeName.includes("순환")?"순환":"일반"),1)])]),x("div",Im,[f[28]||(f[28]=x("div",{class:"vertical-track center-track"},null,-1)),(Fe(!0),Be(si,null,ri(E.stops,(O,j)=>(Fe(),Be("div",{key:`stop-${O.id}`,class:Tt(["vertical-stop",{"is-terminal":j===0||j===E.stops.length-1,"has-bus":E.buses.some(G=>Math.abs(G.position-j/Math.max(E.stops.length-1,1)*100)<5)}]),style:Fa({top:`${j/Math.max(E.stops.length-1,1)*100}%`}),title:O.name},[f[23]||(f[23]=x("div",{class:"vertical-stop-dot"},[x("div",{class:"stop-dot-inner"})],-1)),x("div",Nm,[x("div",Fm,Te(O.name),1),x("div",Om,Te(O.id),1)])],14,Um))),128)),(Fe(!0),Be(si,null,ri(E.buses,O=>(Fe(),Be("div",{key:`bus-${O.vehicleId}`,class:Tt(["vertical-bus-marker",{scheduled:O.tripType==="SCHEDULED","on-demand":O.tripType==="ON_DEMAND",returning:O.tripStatus==="RETURNING"}]),style:Fa({top:`${O.position}%`}),title:`차량 ${O.vehicleNumber} (${O.tripType==="SCHEDULED"?"정기노선":"수요응답"})`},[x("div",zm,[x("div",km,[(Fe(),Be("svg",Hm,[x("rect",{x:"4",y:"8",width:"24",height:"16",rx:"4",fill:O.tripStatus==="RETURNING"?"#EA580C":O.tripType==="SCHEDULED"?"#2563EB":"#059669"},null,8,Vm),f[24]||(f[24]=x("rect",{x:"6",y:"10",width:"8",height:"6",rx:"1",fill:"white",opacity:"0.9"},null,-1)),f[25]||(f[25]=x("rect",{x:"16",y:"10",width:"8",height:"6",rx:"1",fill:"white",opacity:"0.9"},null,-1)),f[26]||(f[26]=x("rect",{x:"8",y:"18",width:"2",height:"3",fill:"white"},null,-1)),f[27]||(f[27]=x("rect",{x:"22",y:"18",width:"2",height:"3",fill:"white"},null,-1))]))]),x("div",{class:Tt(["bus-marker-number",{scheduled:O.tripType==="SCHEDULED","on-demand":O.tripType==="ON_DEMAND",returning:O.tripStatus==="RETURNING"}])},Te(O.vehicleNumber),3)])],14,Bm))),128))])]))),128))])])):ut("",!0)]),x("div",Gm,[x("div",{ref_key:"mapContainer",ref:o,class:"w-full h-full"},null,512),x("div",Wm,[x("div",{class:"map-style-header",onClick:f[1]||(f[1]=E=>h.value=!h.value)},[f[30]||(f[30]=x("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"},[x("path",{"fill-rule":"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z","clip-rule":"evenodd"})],-1)),f[31]||(f[31]=x("span",null,"지도 스타일",-1)),(Fe(),Be("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",class:Tt({"rotate-180":h.value})},f[29]||(f[29]=[x("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"},null,-1)]),2))]),qn(x("div",Xm,[x("button",{onClick:f[2]||(f[2]=E=>Bn("light")),class:Tt(["style-option",{active:l.value==="light"}])},f[32]||(f[32]=[x("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"},[x("path",{"fill-rule":"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z","clip-rule":"evenodd"})],-1),x("span",null,"라이트",-1),x("span",{class:"style-desc"},"깔끔하고 밝은 스타일",-1)]),2),x("button",{onClick:f[3]||(f[3]=E=>Bn("dark")),class:Tt(["style-option",{active:l.value==="dark"}])},f[33]||(f[33]=[x("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"},[x("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})],-1),x("span",null,"다크",-1),x("span",{class:"style-desc"},"어두운 테마",-1)]),2),x("button",{onClick:f[4]||(f[4]=E=>Bn("color")),class:Tt(["style-option",{active:l.value==="color"}])},f[34]||(f[34]=[x("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"},[x("path",{"fill-rule":"evenodd",d:"M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z","clip-rule":"evenodd"})],-1),x("span",null,"컬러",-1),x("span",{class:"style-desc"},"컬러풀한 스타일",-1)]),2),x("button",{onClick:f[5]||(f[5]=E=>Bn("satellite")),class:Tt(["style-option",{active:l.value==="satellite"}])},f[35]||(f[35]=[x("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"},[x("path",{"fill-rule":"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z","clip-rule":"evenodd"})],-1),x("span",null,"위성",-1),x("span",{class:"style-desc"},"위성 사진",-1)]),2)],512),[[Ii,h.value]])]),qn(x("div",{ref_key:"pip1Container",ref:Ce,class:Tt(["pip-video-container pip-1",{"pip-minimized":Ge.value,"pip-selected":_t.value===0}]),onMousedown:f[8]||(f[8]=E=>Ze(E,1))},[x("div",$m,[f[39]||(f[39]=x("span",{class:"pip-title"},"3D 시뮬레이션 (Chase)",-1)),x("div",qm,[x("button",{onClick:f[6]||(f[6]=E=>Re(1)),class:"pip-btn",title:"크기 조절"},[Ge.value?(Fe(),Be("svg",Ym,f[36]||(f[36]=[x("path",{d:"M3 3v10h10V3H3zm9 9H4V4h8v8z"},null,-1)]))):(Fe(),Be("svg",jm,f[37]||(f[37]=[x("path",{d:"M4 4h3v1H5v2H4V4zm5 0h3v3h-1V5H9V4zM4 9h1v2h2v1H4V9zm8 0h1v3H9v-1h3V9z"},null,-1)])))]),x("button",{onClick:f[7]||(f[7]=E=>je(1)),class:"pip-btn",title:"닫기"},f[38]||(f[38]=[x("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},[x("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})],-1)]))])]),x("div",Km,[(Fe(),Na(qo,{key:`pip1-${Ge.value}`,class:"w-full h-full",cameraMode:"chase"}))])],34),[[Ii,C.value]]),qn(x("div",{ref_key:"pip2Container",ref:W,class:Tt(["pip-video-container pip-2",{"pip-minimized":it.value,"pip-selected":_t.value===1}]),onMousedown:f[11]||(f[11]=E=>Ze(E,2))},[x("div",Zm,[f[43]||(f[43]=x("span",{class:"pip-title"},"3D 시뮬레이션 (Top)",-1)),x("div",Jm,[x("button",{onClick:f[9]||(f[9]=E=>Re(2)),class:"pip-btn",title:"크기 조절"},[it.value?(Fe(),Be("svg",Qm,f[40]||(f[40]=[x("path",{d:"M3 3v10h10V3H3zm9 9H4V4h8v8z"},null,-1)]))):(Fe(),Be("svg",eg,f[41]||(f[41]=[x("path",{d:"M4 4h3v1H5v2H4V4zm5 0h3v3h-1V5H9V4zM4 9h1v2h2v1H4V9zm8 0h1v3H9v-1h3V9z"},null,-1)])))]),x("button",{onClick:f[10]||(f[10]=E=>je(2)),class:"pip-btn",title:"닫기"},f[42]||(f[42]=[x("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},[x("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})],-1)]))])]),x("div",tg,[(Fe(),Na(qo,{key:`pip2-${it.value}`,class:"w-full h-full",cameraMode:"top"}))])],34),[[Ii,lt.value]]),qn(x("div",{ref_key:"pip3Container",ref:ge,class:Tt(["pip-video-container pip-3",{"pip-minimized":Ke.value,"pip-selected":_t.value===2}]),onMousedown:f[14]||(f[14]=E=>Ze(E,3))},[x("div",ng,[f[47]||(f[47]=x("span",{class:"pip-title"},"차량 내부 영상",-1)),x("div",ig,[x("button",{onClick:f[12]||(f[12]=E=>Re(3)),class:"pip-btn",title:"크기 조절"},[Ke.value?(Fe(),Be("svg",sg,f[44]||(f[44]=[x("path",{d:"M3 3v10h10V3H3zm9 9H4V4h8v8z"},null,-1)]))):(Fe(),Be("svg",rg,f[45]||(f[45]=[x("path",{d:"M4 4h3v1H5v2H4V4zm5 0h3v3h-1V5H9V4zM4 9h1v2h2v1H4V9zm8 0h1v3H9v-1h3V9z"},null,-1)])))]),x("button",{onClick:f[13]||(f[13]=E=>je(3)),class:"pip-btn",title:"닫기"},f[46]||(f[46]=[x("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},[x("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})],-1)]))])]),x("video",{ref_key:"video3Player",ref:Le,class:"pip-video",src:"/generated.mp4",controls:"",autoplay:"",loop:"",muted:""},null,512)],34),[[Ii,ke.value]]),_e.value&&_t.value!==null?(Fe(),Be("div",{key:0,class:Tt(["vehicle-info-panel",{"panel-expanded":_t.value!==null}])},[x("div",{class:"panel-header"},[f[49]||(f[49]=x("h3",{class:"panel-title"},"차량 상세 정보",-1)),x("button",{onClick:is,class:"close-btn"},f[48]||(f[48]=[x("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"},[x("path",{d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"})],-1)]))]),x("div",ag,[x("div",og,[f[54]||(f[54]=x("h4",{class:"section-title"},"차량 정보",-1)),x("div",lg,[x("div",cg,[f[50]||(f[50]=x("span",{class:"info-label"},"차량 번호",-1)),x("span",ug,Te(_e.value.vehicle_number),1)]),x("div",dg,[f[51]||(f[51]=x("span",{class:"info-label"},"차량 ID",-1)),x("span",hg,"#"+Te(_e.value.id),1)]),x("div",fg,[f[52]||(f[52]=x("span",{class:"info-label"},"운행 타입",-1)),x("span",{class:Tt(["info-value",_e.value.tripType==="SCHEDULED"?"text-blue-600":"text-green-600"])},Te(_e.value.tripType==="SCHEDULED"?"정기노선":"수요응답"),3)]),x("div",pg,[f[53]||(f[53]=x("span",{class:"info-label"},"상태",-1)),x("span",{class:Tt(["info-value",rs(_e.value.tripStatus)])},Te(zn(_e.value.tripStatus)),3)])])]),x("div",mg,[f[59]||(f[59]=x("h4",{class:"section-title"},"운행 정보",-1)),x("div",gg,[x("div",_g,[f[55]||(f[55]=x("span",{class:"info-label"},"Trip ID",-1)),x("span",vg,"#"+Te(_e.value.trip_id),1)]),x("div",xg,[f[56]||(f[56]=x("span",{class:"info-label"},"승객",-1)),x("span",Mg,Te(_e.value.current_occupancy||0)+"/"+Te(_e.value.capacity||0)+"명",1)]),_e.value.driver_id?(Fe(),Be("div",Sg,[f[57]||(f[57]=x("span",{class:"info-label"},"운전자 ID",-1)),x("span",yg,"#"+Te(_e.value.driver_id),1)])):ut("",!0),_e.value.route_id?(Fe(),Be("div",Eg,[f[58]||(f[58]=x("span",{class:"info-label"},"노선 ID",-1)),x("span",Tg,"#"+Te(_e.value.route_id),1)])):ut("",!0)])]),x("div",bg,[f[65]||(f[65]=x("h4",{class:"section-title"},"위치 정보",-1)),x("div",Ag,[x("div",wg,[f[60]||(f[60]=x("span",{class:"info-label"},"현재 좌표",-1)),x("span",Rg,Te(ss(_e.value.current_latitude,_e.value.current_longitude)),1)]),x("div",Cg,[f[61]||(f[61]=x("span",{class:"info-label"},"속도",-1)),x("span",Pg,Te(_e.value.speed||0)+" km/h",1)]),x("div",Dg,[f[62]||(f[62]=x("span",{class:"info-label"},"방향",-1)),x("span",Lg,Te(_e.value.heading||0)+"°",1)]),_e.value.last_node_id?(Fe(),Be("div",Ig,[f[63]||(f[63]=x("span",{class:"info-label"},"마지막 노드",-1)),x("span",Ug,[qs(Te(ze(_e.value.last_node_id))+" ",1),x("span",Ng,"(#"+Te(_e.value.last_node_id)+")",1)])])):ut("",!0),_e.value.current_link_id?(Fe(),Be("div",Fg,[f[64]||(f[64]=x("span",{class:"info-label"},"현재 링크",-1)),x("span",Og,"#"+Te(_e.value.current_link_id),1)])):ut("",!0)])]),x("div",Bg,[f[74]||(f[74]=x("h4",{class:"section-title"},"객체 감지 정보",-1)),x("div",zg,[x("div",kg,[f[67]||(f[67]=x("div",{class:"detection-icon pedestrian"},null,-1)),x("div",Hg,[f[66]||(f[66]=x("span",{class:"detection-label"},"보행자",-1)),x("span",Vg,Te(tt.value.pedestrians||0),1)])]),x("div",Gg,[f[69]||(f[69]=x("div",{class:"detection-icon vehicle"},null,-1)),x("div",Wg,[f[68]||(f[68]=x("span",{class:"detection-label"},"차량",-1)),x("span",Xg,Te(tt.value.vehicles||0),1)])]),x("div",$g,[f[71]||(f[71]=x("div",{class:"detection-icon bicycle"},null,-1)),x("div",qg,[f[70]||(f[70]=x("span",{class:"detection-label"},"자전거",-1)),x("span",Yg,Te(tt.value.bicycles||0),1)])]),x("div",jg,[f[73]||(f[73]=x("div",{class:"detection-icon signal"},null,-1)),x("div",Kg,[f[72]||(f[72]=x("span",{class:"detection-label"},"신호등",-1)),x("span",{class:Tt(["detection-status",bt.value])},Te(Ct.value),3)])])])]),f[98]||(f[98]=Ua('<div class="info-section" data-v-962ef7e2><h4 class="section-title" data-v-962ef7e2>센서 데이터</h4><div class="sensor-grid" data-v-962ef7e2><div class="sensor-item" data-v-962ef7e2><span class="sensor-label" data-v-962ef7e2>LiDAR</span><div class="sensor-bar" data-v-962ef7e2><div class="sensor-fill" style="width:85%;" data-v-962ef7e2></div></div><span class="sensor-value" data-v-962ef7e2>정상</span></div><div class="sensor-item" data-v-962ef7e2><span class="sensor-label" data-v-962ef7e2>Camera</span><div class="sensor-bar" data-v-962ef7e2><div class="sensor-fill" style="width:92%;" data-v-962ef7e2></div></div><span class="sensor-value" data-v-962ef7e2>정상</span></div><div class="sensor-item" data-v-962ef7e2><span class="sensor-label" data-v-962ef7e2>GPS</span><div class="sensor-bar" data-v-962ef7e2><div class="sensor-fill" style="width:98%;" data-v-962ef7e2></div></div><span class="sensor-value" data-v-962ef7e2>정상</span></div><div class="sensor-item" data-v-962ef7e2><span class="sensor-label" data-v-962ef7e2>IMU</span><div class="sensor-bar" data-v-962ef7e2><div class="sensor-fill" style="width:90%;" data-v-962ef7e2></div></div><span class="sensor-value" data-v-962ef7e2>정상</span></div></div></div>',1)),x("div",Zg,[f[97]||(f[97]=x("h4",{class:"section-title"},"ODD 운영설계영역 상태",-1)),x("div",{class:Tt(["odd-status-card",A.value.inODD?"status-safe":"status-warning"])},[x("div",Jg,[x("span",Qg,Te(A.value.inODD?"✅":"⚠️"),1),f[75]||(f[75]=x("span",{class:"odd-status-title"},"ODD 범위 상태",-1))]),x("div",e_,[x("span",t_,Te(A.value.inODD?"ODD 내 운행 중":"ODD 이탈"),1),A.value.distanceToBoundary?(Fe(),Be("span",n_," 경계까지: "+Te(A.value.distanceToBoundary)+"m ",1)):ut("",!0)])],2),x("div",i_,[f[84]||(f[84]=x("h5",{class:"subsection-title"},"환경 조건",-1)),x("div",s_,[x("div",r_,[f[77]||(f[77]=x("span",{class:"condition-icon"},"🌤️",-1)),x("div",a_,[f[76]||(f[76]=x("span",{class:"condition-label"},"날씨",-1)),x("span",o_,Te(A.value.weather),1)])]),x("div",l_,[f[79]||(f[79]=x("span",{class:"condition-icon"},"☀️",-1)),x("div",c_,[f[78]||(f[78]=x("span",{class:"condition-label"},"조도",-1)),x("span",u_,Te(A.value.lighting),1)])]),x("div",d_,[f[81]||(f[81]=x("span",{class:"condition-icon"},"🛣️",-1)),x("div",h_,[f[80]||(f[80]=x("span",{class:"condition-label"},"도로",-1)),x("span",f_,Te(A.value.roadCondition),1)])]),x("div",p_,[f[83]||(f[83]=x("span",{class:"condition-icon"},"🌡️",-1)),x("div",m_,[f[82]||(f[82]=x("span",{class:"condition-label"},"온도",-1)),x("span",g_,Te(A.value.temperature)+"°C",1)])])])]),x("div",__,[f[92]||(f[92]=x("h5",{class:"subsection-title"},"시스템 한계 상황",-1)),x("div",v_,[x("div",{class:Tt(["limit-item",{"limit-active":A.value.systemLimits.oddExceeded}])},f[85]||(f[85]=[x("span",{class:"limit-indicator"},null,-1),x("span",{class:"limit-text"},"ODD 범위 벗어남",-1)]),2),x("div",{class:Tt(["limit-item",{"limit-active":A.value.systemLimits.sensorFailure}])},f[86]||(f[86]=[x("span",{class:"limit-indicator"},null,-1),x("span",{class:"limit-text"},"센서 장애",-1)]),2),x("div",{class:Tt(["limit-item",{"limit-active":A.value.systemLimits.weatherLimit}])},f[87]||(f[87]=[x("span",{class:"limit-indicator"},null,-1),x("span",{class:"limit-text"},"날씨 제한",-1)]),2),x("div",{class:Tt(["limit-item",{"limit-active":A.value.systemLimits.gpsLoss}])},f[88]||(f[88]=[x("span",{class:"limit-indicator"},null,-1),x("span",{class:"limit-text"},"GPS 신호 손실",-1)]),2)]),A.value.driverInterventionRequired?(Fe(),Be("div",x_,[f[90]||(f[90]=x("div",{class:"intervention-icon"},"⚠️",-1)),x("div",M_,[f[89]||(f[89]=x("span",{class:"intervention-title"},"운전자 개입 필요",-1)),x("span",S_,Te(A.value.interventionReason),1)])])):ut("",!0),x("div",{class:Tt(["safety-stop-status",{active:A.value.safetyStopAvailable}])},[f[91]||(f[91]=x("span",{class:"safety-icon"},"🛑",-1)),x("span",y_,"안전 정차 "+Te(A.value.safetyStopAvailable?"가능":"불가능"),1)],2)]),A.value.approachingBoundary?(Fe(),Be("div",E_,[f[96]||(f[96]=x("div",{class:"warning-header"},[x("span",{class:"warning-icon"},"⚠️"),x("span",{class:"warning-title"},"ODD 경계 접근 중")],-1)),x("div",T_,[x("div",b_,[f[93]||(f[93]=x("span",{class:"distance-label"},"경계까지 거리:",-1)),x("span",A_,Te(A.value.distanceToBoundary)+"m",1)]),x("div",w_,[f[94]||(f[94]=x("span",{class:"eta-label"},"예상 도달 시간:",-1)),x("span",R_,Te(A.value.etaToBoundary)+"초",1)]),x("div",C_,[f[95]||(f[95]=x("span",{class:"action-label"},"권장 조치",-1)),x("span",P_,Te(A.value.recommendedAction),1)])])])):ut("",!0)])])],2)):ut("",!0),f[101]||(f[101]=Ua('<div class="legend-box" data-v-962ef7e2><h4 class="font-semibold text-sm mb-2" data-v-962ef7e2>범례</h4><div class="legend-section mb-3" data-v-962ef7e2><div class="legend-title text-xs font-medium text-gray-700 mb-1" data-v-962ef7e2>경로 표시</div><div class="legend-item" data-v-962ef7e2><div class="legend-line" style="background:#0066CC;height:3px;" data-v-962ef7e2></div><span class="legend-label" data-v-962ef7e2>예정 경로 (미래)</span></div><div class="legend-item" data-v-962ef7e2><div class="legend-line" style="background:#FF0000;height:5px;" data-v-962ef7e2></div><span class="legend-label" data-v-962ef7e2>현재 주행 중인 구간</span></div><div class="legend-item" data-v-962ef7e2><div class="legend-line legend-dashed" style="background:#888888;height:3px;" data-v-962ef7e2></div><span class="legend-label" data-v-962ef7e2>이미 지나간 경로</span></div><div class="legend-item" data-v-962ef7e2><div class="legend-line legend-dashed" style="background:#FF6600;height:2px;" data-v-962ef7e2></div><span class="legend-label" data-v-962ef7e2>차량 이동 궤적</span></div></div><div class="legend-section mb-3" data-v-962ef7e2><div class="legend-title text-xs font-medium text-gray-700 mb-1" data-v-962ef7e2>차량 마커</div><div class="legend-item" data-v-962ef7e2><div class="legend-marker" style="background:#2563EB;" data-v-962ef7e2></div><span class="legend-label" data-v-962ef7e2>정기노선 차량</span></div><div class="legend-item" data-v-962ef7e2><div class="legend-marker" style="background:#059669;" data-v-962ef7e2></div><span class="legend-label" data-v-962ef7e2>수요응답 차량</span></div><div class="legend-item" data-v-962ef7e2><div class="legend-marker" style="background:#EA580C;" data-v-962ef7e2></div><span class="legend-label" data-v-962ef7e2>차고지 복귀 중</span></div></div><div class="legend-section" data-v-962ef7e2><div class="legend-title text-xs font-medium text-gray-700 mb-1" data-v-962ef7e2>정류장</div><div class="legend-item" data-v-962ef7e2><div class="legend-stop" style="background:#3B82F6;" data-v-962ef7e2></div><span class="legend-label" data-v-962ef7e2>예정 정류장</span></div><div class="legend-item" data-v-962ef7e2><div class="legend-stop" style="background:#9CA3AF;" data-v-962ef7e2></div><span class="legend-label" data-v-962ef7e2>통과한 정류장</span></div></div></div>',1)),b.value?(Fe(),Be("div",D_,f[99]||(f[99]=[x("div",{class:"text-center"},[x("div",{class:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"}),x("p",{class:"text-gray-600"},"차량 위치 정보를 불러오는 중...")],-1)]))):ut("",!0),P.value?(Fe(),Be("div",L_,[f[100]||(f[100]=x("p",{class:"font-semibold"},"오류 발생",-1)),x("p",I_,Te(P.value),1)])):ut("",!0)]),x("div",U_,[x("div",N_,[f[132]||(f[132]=x("h3",{class:"text-lg font-semibold mb-4"},"운행 중 차량 목록",-1)),Z.value.length===0?(Fe(),Be("div",F_,f[102]||(f[102]=[x("p",null,"현재 운행 중인 차량이 없습니다.",-1)]))):(Fe(),Be("div",O_,[(Fe(!0),Be(si,null,ri(Z.value,(E,O)=>{var j;return Fe(),Be("div",{key:E.id,class:"vehicle-card p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors",onClick:G=>ns(E.id)},[x("div",z_,[x("div",k_,[x("div",{class:Tt(["w-3 h-3 rounded-full",E.tripType==="SCHEDULED"?"bg-blue-500":E.tripType==="ON_DEMAND"?"bg-green-500":"bg-gray-500"])},null,2),x("span",H_,Te(E.vehicle_number),1)]),x("span",V_,Te(E.tripType==="SCHEDULED"?"정기노선":"수요응답"),1)]),x("div",G_,[x("div",W_,[f[103]||(f[103]=x("span",{class:"font-medium"},"차량 ID:",-1)),x("span",X_,"#"+Te(E.id),1)]),E.trip_id?(Fe(),Be("div",$_,[x("span",q_,Te(E.tripType==="ON_DEMAND"?"Trip ID (수요응답):":"운행 ID:"),1),x("span",Y_,"#"+Te(E.trip_id),1)])):ut("",!0),E.tripType==="ON_DEMAND"?(Fe(),Be("div",j_,[f[109]||(f[109]=x("div",{class:"font-medium text-green-800 mb-1"},"🔍 디버깅 정보",-1)),x("div",K_,[x("div",Z_,[f[104]||(f[104]=x("span",null,"Trip ID:",-1)),x("span",J_,"#"+Te(E.trip_id),1)]),x("div",Q_,[f[105]||(f[105]=x("span",null,"Vehicle ID:",-1)),x("span",ev,"#"+Te(E.id),1)]),dt(E)?(Fe(),Be("div",tv,[dt(E).calls?(Fe(),Be("div",nv,[f[106]||(f[106]=x("span",null,"할당된 Call 수:",-1)),x("span",iv,Te(((j=dt(E).calls)==null?void 0:j.length)||0)+"개",1)])):ut("",!0),dt(E).calls&&dt(E).calls.length>0?(Fe(),Be("div",sv,[f[107]||(f[107]=x("span",{class:"text-green-600"},"Call IDs:",-1)),x("div",rv,[(Fe(!0),Be(si,null,ri(dt(E).calls,G=>(Fe(),Be("span",{key:G.id,class:"px-1.5 py-0.5 bg-purple-100 text-purple-700 rounded text-xs font-mono"}," #"+Te(G.id),1))),128))])])):ut("",!0),dt(E).service_area_id?(Fe(),Be("div",av,[f[108]||(f[108]=x("span",null,"서비스 지역:",-1)),x("span",ov,"#"+Te(dt(E).service_area_id),1)])):ut("",!0)])):ut("",!0)])])):ut("",!0),x("div",lv,[f[110]||(f[110]=x("span",null,"상태:",-1)),x("span",{class:Tt(rs(E.tripStatus))},[qs(Te(zn(E.tripStatus))+" ",1),E.tripStatus==="RETURNING"?(Fe(),Be("span",cv," 🏠 ")):ut("",!0)],2)]),E.tripStatus==="RETURNING"?(Fe(),Be("div",uv,f[111]||(f[111]=[x("span",{class:"text-orange-700"},"12번 정류장 → 1번 정류장 (차고지)",-1)]))):ut("",!0),x("div",dv,[f[112]||(f[112]=x("span",null,"승객:",-1)),x("span",{class:Tt(E.current_occupancy>0?"text-orange-600 font-medium":"")},Te(E.current_occupancy||0)+"/"+Te(E.capacity||0)+"명 ",3)]),qn(x("div",hv,[x("div",fv,[f[113]||(f[113]=x("div",{class:"text-xs text-gray-500 mb-2"},"운행 제어",-1)),x("div",pv,[E.tripStatus==="IN_PROGRESS"?(Fe(),Be("button",{key:0,onClick:G=>Ae(E),class:"flex-1 px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 disabled:opacity-50",disabled:b.value}," 운행중단 ",8,mv)):ut("",!0),E.tripStatus==="RETURNING"?(Fe(),Be("button",{key:1,onClick:G=>Ie(E),class:"flex-1 px-2 py-1 bg-green-500 text-white text-xs rounded hover:bg-green-600 disabled:opacity-50",disabled:b.value}," 복귀완료 ",8,gv)):ut("",!0)])]),E.tripType==="SCHEDULED"&&dt(E)?(Fe(),Be("div",_v,[f[119]||(f[119]=x("div",{class:"text-xs text-gray-500 mb-1"},"운행 정보",-1)),dt(E).start_datetime||dt(E).start_time?(Fe(),Be("div",vv,[x("div",xv,[f[114]||(f[114]=x("span",{class:"text-blue-700"},"출발:",-1)),x("span",Mv,Te(B(dt(E).start_datetime||dt(E).start_time)),1)]),x("div",Sv,[f[115]||(f[115]=x("span",{class:"text-blue-700"},"도착:",-1)),x("span",yv,Te(B(dt(E).end_datetime||dt(E).end_time)),1)])])):ut("",!0),dt(E).start_time&&!dt(E).end_time?(Fe(),Be("div",Ev,[f[116]||(f[116]=x("span",null,"운행 경과:",-1)),x("span",Tv,Te(z(dt(E).start_time)),1)])):ut("",!0),dt(E).route_id?(Fe(),Be("div",bv,[f[117]||(f[117]=x("span",null,"노선 ID:",-1)),x("span",Av,"#"+Te(dt(E).route_id),1)])):ut("",!0),dt(E).driver_id?(Fe(),Be("div",wv,[f[118]||(f[118]=x("span",null,"운전자:",-1)),x("span",Rv,"#"+Te(dt(E).driver_id),1)])):ut("",!0)])):ut("",!0),E.tripType==="ON_DEMAND"&&dt(E)?(Fe(),Be("div",Cv,[f[127]||(f[127]=x("div",{class:"text-xs text-gray-500 mb-1"},"호출 정보",-1)),dt(E).calls&&dt(E).calls.length>0?(Fe(),Be("div",Pv,[x("div",Dv,[f[120]||(f[120]=x("span",null,"할당 호출:",-1)),x("span",Lv,Te(dt(E).calls.length)+"개",1)]),(Fe(!0),Be(si,null,ri(dt(E).calls.slice(0,3),(G,ye)=>(Fe(),Be("div",{key:G.id,class:"bg-green-50 p-2 rounded text-xs"},[x("div",Iv,"Call #"+Te(G.id),1),x("div",Uv,[x("div",Nv,[f[122]||(f[122]=x("span",{class:"text-green-600"},"🔵",-1)),x("div",Fv,[f[121]||(f[121]=x("span",{class:"text-xs"},"픽업:",-1)),x("div",{class:"text-xs truncate",title:X(G)},Te(X(G)),9,Ov)])]),x("div",Bv,[f[124]||(f[124]=x("span",{class:"text-red-600"},"🔴",-1)),x("div",zv,[f[123]||(f[123]=x("span",{class:"text-xs"},"드롭:",-1)),x("div",{class:"text-xs truncate",title:$(G)},Te($(G)),9,kv)])]),G.requested_pickup_time?(Fe(),Be("div",Hv," 요청시간: "+Te(B(G.requested_pickup_time)),1)):ut("",!0)])]))),128)),dt(E).calls.length>3?(Fe(),Be("div",Vv," ... 외 "+Te(dt(E).calls.length-3)+"개 호출 ",1)):ut("",!0)])):ut("",!0),dt(E).service_area_id?(Fe(),Be("div",Gv,[f[125]||(f[125]=x("span",null,"서비스 지역:",-1)),x("span",Wv,"#"+Te(dt(E).service_area_id),1)])):ut("",!0),dt(E).driver_id?(Fe(),Be("div",Xv,[f[126]||(f[126]=x("span",null,"운전자:",-1)),x("span",$v,"#"+Te(dt(E).driver_id),1)])):ut("",!0)])):ut("",!0),x("div",qv,[f[131]||(f[131]=x("div",{class:"text-xs text-gray-500 mb-1"},"위치 정보",-1)),x("div",Yv,[f[128]||(f[128]=x("span",null,"좌표:",-1)),x("span",jv,Te(ss(E.current_latitude,E.current_longitude)),1)]),E.last_node_id?(Fe(),Be("div",Kv,[f[129]||(f[129]=x("span",null,"마지막 노드:",-1)),x("span",Zv,[qs(Te(ze(E.last_node_id))+" ",1),x("span",Jv,"(#"+Te(E.last_node_id)+")",1)])])):ut("",!0),E.current_link_id?(Fe(),Be("div",Qv,[f[130]||(f[130]=x("span",null,"현재 링크:",-1)),x("span",e0,"#"+Te(E.current_link_id),1)])):ut("",!0)])],512),[[Ii,Ee.value.has(E.id)]])])],8,B_)}),128))]))])])])]))}}),f0=Ko(t0,[["__scopeId","data-v-962ef7e2"]]);export{f0 as default};
