import{d as ml,r as ql,l as He,c as Ui,p as Yl,D as gl,s as jl,O as Ja,a as Ne,t as g,x as rt,H as ai,v as fe,J as Zl,o as De,q as Kl,u as Rt,I as Jl,F as Tn,f as Qn,E as zn,P as Qi,b as Qa,Q as dr,z as ys}from"./vendor-DYgZlFnk.js";import{L as Et}from"./leaflet-src-DHduYtwe.js";import{_ as _l,u as Ql}from"./index-CeuYGmYK.js";import{b as ur}from"./driver-app-api-InINxe55.js";import{b as ec}from"./network-api-B3J4y0c6.js";import{b as tc}from"./planning-api-BvVRcJ7A.js";import{b as nc}from"./resources-api-CiH8HpHt.js";import{b as ic}from"./service-areas-api-Da8qY6RQ.js";import{C as sc}from"./configuration-BiWBPvh5.js";import"./jsonforms-B_XolX9Y.js";import"./index-NIGUFBhG.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Na="179",rc=0,eo=1,ac=2,vl=1,oc=2,Dn=3,Zn=0,Kt=1,In=2,Yn=0,Oi=1,to=2,no=3,io=4,lc=5,ci=100,cc=101,dc=102,uc=103,hc=104,fc=200,pc=201,mc=202,gc=203,qr=204,Yr=205,_c=206,vc=207,xc=208,Mc=209,yc=210,Sc=211,Ec=212,bc=213,Tc=214,jr=0,Zr=1,Kr=2,ki=3,Jr=4,Qr=5,ea=6,ta=7,Fa=0,Ac=1,wc=2,jn=0,Rc=1,Cc=2,Pc=3,Lc=4,Dc=5,Ic=6,Uc=7,xl=300,Hi=301,Vi=302,na=303,ia=304,rr=306,sa=1e3,ui=1001,ra=1002,pn=1003,Nc=1004,Ss=1005,xn=1006,hr=1007,hi=1008,Sn=1009,Ml=1010,yl=1011,cs=1012,Oa=1013,pi=1014,Un=1015,fs=1016,Ba=1017,za=1018,ds=1020,Sl=35902,El=1021,bl=1022,fn=1023,us=1026,hs=1027,Tl=1028,ka=1029,Al=1030,Ha=1031,Va=1033,Ys=33776,js=33777,Zs=33778,Ks=33779,aa=35840,oa=35841,la=35842,ca=35843,da=36196,ua=37492,ha=37496,fa=37808,pa=37809,ma=37810,ga=37811,_a=37812,va=37813,xa=37814,Ma=37815,ya=37816,Sa=37817,Ea=37818,ba=37819,Ta=37820,Aa=37821,Js=36492,wa=36494,Ra=36495,wl=36283,Ca=36284,Pa=36285,La=36286,Fc=3200,Oc=3201,Ga=0,Bc=1,qn="",tn="srgb",Gi="srgb-linear",er="linear",Tt="srgb",xi=7680,so=519,zc=512,kc=513,Hc=514,Rl=515,Vc=516,Gc=517,Wc=518,Xc=519,ro=35044,ao="300 es",Mn=2e3,tr=2001;class $i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fr=Math.PI/180,Da=180/Math.PI;function ps(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function mt(i,e,t){return Math.max(e,Math.min(t,i))}function $c(i,e){return(i%e+e)%e}function pr(i,e,t){return(1-t)*i+t*e}function es(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class _t{constructor(e=0,t=0){_t.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ms{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3];const p=r[a+0],m=r[a+1],v=r[a+2],x=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=p,e[t+1]=m,e[t+2]=v,e[t+3]=x;return}if(f!==x||c!==p||l!==m||h!==v){let _=1-o;const u=c*p+l*m+h*v+f*x,C=u>=0?1:-1,R=1-u*u;if(R>Number.EPSILON){const I=Math.sqrt(R),P=Math.atan2(I,u*C);_=Math.sin(_*P)/I,o=Math.sin(o*P)/I}const T=o*C;if(c=c*_+p*T,l=l*_+m*T,h=h*_+v*T,f=f*_+x*T,_===1-o){const I=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=I,l*=I,h*=I,f*=I}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[a],p=r[a+1],m=r[a+2],v=r[a+3];return e[t]=o*v+h*f+c*m-l*p,e[t+1]=c*v+h*p+l*f-o*m,e[t+2]=l*v+h*m+o*p-c*f,e[t+3]=h*v-o*f-c*p-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(r/2),p=c(n/2),m=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=p*h*f+l*m*v,this._y=l*m*f-p*h*v,this._z=l*h*v+p*m*f,this._w=l*h*f-p*m*v;break;case"YXZ":this._x=p*h*f+l*m*v,this._y=l*m*f-p*h*v,this._z=l*h*v-p*m*f,this._w=l*h*f+p*m*v;break;case"ZXY":this._x=p*h*f-l*m*v,this._y=l*m*f+p*h*v,this._z=l*h*v+p*m*f,this._w=l*h*f-p*m*v;break;case"ZYX":this._x=p*h*f-l*m*v,this._y=l*m*f+p*h*v,this._z=l*h*v-p*m*f,this._w=l*h*f+p*m*v;break;case"YZX":this._x=p*h*f+l*m*v,this._y=l*m*f+p*h*v,this._z=l*h*v-p*m*f,this._w=l*h*f-p*m*v;break;case"XZY":this._x=p*h*f-l*m*v,this._y=l*m*f-p*h*v,this._z=l*h*v+p*m*f,this._w=l*h*f+p*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],p=n+o+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),f=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=a*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mr.copy(this).projectOnVector(e),this.sub(mr)}reflect(e){return this.sub(mr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mr=new G,oo=new ms;class ot{constructor(e,t,n,s,r,a,o,c,l){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],p=n[2],m=n[5],v=n[8],x=s[0],_=s[3],u=s[6],C=s[1],R=s[4],T=s[7],I=s[2],P=s[5],U=s[8];return r[0]=a*x+o*C+c*I,r[3]=a*_+o*R+c*P,r[6]=a*u+o*T+c*U,r[1]=l*x+h*C+f*I,r[4]=l*_+h*R+f*P,r[7]=l*u+h*T+f*U,r[2]=p*x+m*C+v*I,r[5]=p*_+m*R+v*P,r[8]=p*u+m*T+v*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*a-o*l,p=o*c-h*r,m=l*r-a*c,v=t*f+n*p+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=f*x,e[1]=(s*l-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=p*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=m*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(gr.makeScale(e,t)),this}rotate(e){return this.premultiply(gr.makeRotation(-e)),this}translate(e,t){return this.premultiply(gr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gr=new ot;function Cl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qc(){const i=nr("canvas");return i.style.display="block",i}const lo={};function Bi(i){i in lo||(lo[i]=!0,console.warn(i))}function Yc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const co=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uo=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jc(){const i={enabled:!0,workingColorSpace:Gi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Tt&&(s.r=Fn(s.r),s.g=Fn(s.g),s.b=Fn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Tt&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qn?er:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Bi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Bi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gi]:{primaries:e,whitePoint:n,transfer:er,toXYZ:co,fromXYZ:uo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:e,whitePoint:n,transfer:Tt,toXYZ:co,fromXYZ:uo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),i}const Mt=jc();function Fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Mi;class Zc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mi===void 0&&(Mi=nr("canvas")),Mi.width=e.width,Mi.height=e.height;const s=Mi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Mi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=nr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Fn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fn(t[n]/255)*255):t[n]=Fn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kc=0;class Wa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kc++}),this.uuid=ps(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(_r(s[a].image)):r.push(_r(s[a]))}else r=_r(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function _r(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jc=0;const vr=new G;class Jt extends $i{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=ui,s=ui,r=xn,a=hi,o=fn,c=Sn,l=Jt.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=ps(),this.name="",this.source=new Wa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vr).x}get height(){return this.source.getSize(vr).y}get depth(){return this.source.getSize(vr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sa:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case ra:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sa:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case ra:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=xl;Jt.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,n=0,s=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],f=c[8],p=c[1],m=c[5],v=c[9],x=c[2],_=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(f-x)<.01&&Math.abs(v-_)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+x)<.1&&Math.abs(v+_)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(l+1)/2,T=(m+1)/2,I=(u+1)/2,P=(h+p)/4,U=(f+x)/4,k=(v+_)/4;return R>T&&R>I?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=P/n,r=U/n):T>I?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=P/s,r=k/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=U/r,s=k/r),this.set(n,s,r,t),this}let C=Math.sqrt((_-v)*(_-v)+(f-x)*(f-x)+(p-h)*(p-h));return Math.abs(C)<.001&&(C=1),this.x=(_-v)/C,this.y=(f-x)/C,this.z=(p-h)/C,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qc extends $i{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Jt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Wa(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends Qc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Pl extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ed extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gs{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Es.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Es.copy(n.boundingBox)),Es.applyMatrix4(e.matrixWorld),this.union(Es)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ts),bs.subVectors(this.max,ts),yi.subVectors(e.a,ts),Si.subVectors(e.b,ts),Ei.subVectors(e.c,ts),kn.subVectors(Si,yi),Hn.subVectors(Ei,Si),ei.subVectors(yi,Ei);let t=[0,-kn.z,kn.y,0,-Hn.z,Hn.y,0,-ei.z,ei.y,kn.z,0,-kn.x,Hn.z,0,-Hn.x,ei.z,0,-ei.x,-kn.y,kn.x,0,-Hn.y,Hn.x,0,-ei.y,ei.x,0];return!xr(t,yi,Si,Ei,bs)||(t=[1,0,0,0,1,0,0,0,1],!xr(t,yi,Si,Ei,bs))?!1:(Ts.crossVectors(kn,Hn),t=[Ts.x,Ts.y,Ts.z],xr(t,yi,Si,Ei,bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const An=[new G,new G,new G,new G,new G,new G,new G,new G],cn=new G,Es=new gs,yi=new G,Si=new G,Ei=new G,kn=new G,Hn=new G,ei=new G,ts=new G,bs=new G,Ts=new G,ti=new G;function xr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ti.fromArray(i,r);const o=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),c=e.dot(ti),l=t.dot(ti),h=n.dot(ti);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const td=new gs,ns=new G,Mr=new G;class _s{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):td.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ns.subVectors(e,this.center);const t=ns.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ns,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ns.copy(e.center).add(Mr)),this.expandByPoint(ns.copy(e.center).sub(Mr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const wn=new G,yr=new G,As=new G,Vn=new G,Sr=new G,ws=new G,Er=new G;class Xa{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){yr.copy(e).add(t).multiplyScalar(.5),As.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(yr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(As),o=Vn.dot(this.direction),c=-Vn.dot(As),l=Vn.lengthSq(),h=Math.abs(1-a*a);let f,p,m,v;if(h>0)if(f=a*c-o,p=a*o-c,v=r*h,f>=0)if(p>=-v)if(p<=v){const x=1/h;f*=x,p*=x,m=f*(f+a*p+2*o)+p*(a*f+p+2*c)+l}else p=r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*c)+l;else p=-r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*c)+l;else p<=-v?(f=Math.max(0,-(-a*r+o)),p=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+p*(p+2*c)+l):p<=v?(f=0,p=Math.min(Math.max(-r,-c),r),m=p*(p+2*c)+l):(f=Math.max(0,-(a*r+o)),p=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+p*(p+2*c)+l);else p=a>0?-r:r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(yr).addScaledVector(As,p),m}intersectSphere(e,t){wn.subVectors(e.center,this.origin);const n=wn.dot(this.direction),s=wn.dot(wn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),h>=0?(r=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,n,s,r){Sr.subVectors(t,e),ws.subVectors(n,e),Er.crossVectors(Sr,ws);let a=this.direction.dot(Er),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,e);const c=o*this.direction.dot(ws.crossVectors(Vn,ws));if(c<0)return null;const l=o*this.direction.dot(Sr.cross(Vn));if(l<0||c+l>a)return null;const h=-o*Vn.dot(Er);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,t,n,s,r,a,o,c,l,h,f,p,m,v,x,_){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,f,p,m,v,x,_)}set(e,t,n,s,r,a,o,c,l,h,f,p,m,v,x,_){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=f,u[14]=p,u[3]=m,u[7]=v,u[11]=x,u[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/bi.setFromMatrixColumn(e,0).length(),r=1/bi.setFromMatrixColumn(e,1).length(),a=1/bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const p=a*h,m=a*f,v=o*h,x=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=m+v*l,t[5]=p-x*l,t[9]=-o*c,t[2]=x-p*l,t[6]=v+m*l,t[10]=a*c}else if(e.order==="YXZ"){const p=c*h,m=c*f,v=l*h,x=l*f;t[0]=p+x*o,t[4]=v*o-m,t[8]=a*l,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=m*o-v,t[6]=x+p*o,t[10]=a*c}else if(e.order==="ZXY"){const p=c*h,m=c*f,v=l*h,x=l*f;t[0]=p-x*o,t[4]=-a*f,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*h,t[9]=x-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const p=a*h,m=a*f,v=o*h,x=o*f;t[0]=c*h,t[4]=v*l-m,t[8]=p*l+x,t[1]=c*f,t[5]=x*l+p,t[9]=m*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const p=a*c,m=a*l,v=o*c,x=o*l;t[0]=c*h,t[4]=x-p*f,t[8]=v*f+m,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*f+v,t[10]=p-x*f}else if(e.order==="XZY"){const p=a*c,m=a*l,v=o*c,x=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=p*f+x,t[5]=a*h,t[9]=m*f-v,t[2]=v*f-m,t[6]=o*h,t[10]=x*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nd,e,id)}lookAt(e,t,n){const s=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),Gn.crossVectors(n,Qt),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),Gn.crossVectors(n,Qt)),Gn.normalize(),Rs.crossVectors(Qt,Gn),s[0]=Gn.x,s[4]=Rs.x,s[8]=Qt.x,s[1]=Gn.y,s[5]=Rs.y,s[9]=Qt.y,s[2]=Gn.z,s[6]=Rs.z,s[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],p=n[9],m=n[13],v=n[2],x=n[6],_=n[10],u=n[14],C=n[3],R=n[7],T=n[11],I=n[15],P=s[0],U=s[4],k=s[8],A=s[12],b=s[1],L=s[5],j=s[9],W=s[13],X=s[2],se=s[6],J=s[10],pe=s[14],Y=s[3],be=s[7],we=s[11],Ve=s[15];return r[0]=a*P+o*b+c*X+l*Y,r[4]=a*U+o*L+c*se+l*be,r[8]=a*k+o*j+c*J+l*we,r[12]=a*A+o*W+c*pe+l*Ve,r[1]=h*P+f*b+p*X+m*Y,r[5]=h*U+f*L+p*se+m*be,r[9]=h*k+f*j+p*J+m*we,r[13]=h*A+f*W+p*pe+m*Ve,r[2]=v*P+x*b+_*X+u*Y,r[6]=v*U+x*L+_*se+u*be,r[10]=v*k+x*j+_*J+u*we,r[14]=v*A+x*W+_*pe+u*Ve,r[3]=C*P+R*b+T*X+I*Y,r[7]=C*U+R*L+T*se+I*be,r[11]=C*k+R*j+T*J+I*we,r[15]=C*A+R*W+T*pe+I*Ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],p=e[10],m=e[14],v=e[3],x=e[7],_=e[11],u=e[15];return v*(+r*c*f-s*l*f-r*o*p+n*l*p+s*o*m-n*c*m)+x*(+t*c*m-t*l*p+r*a*p-s*a*m+s*l*h-r*c*h)+_*(+t*l*f-t*o*m-r*a*f+n*a*m+r*o*h-n*l*h)+u*(-s*o*h-t*c*f+t*o*p+s*a*f-n*a*p+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],p=e[10],m=e[11],v=e[12],x=e[13],_=e[14],u=e[15],C=f*_*l-x*p*l+x*c*m-o*_*m-f*c*u+o*p*u,R=v*p*l-h*_*l-v*c*m+a*_*m+h*c*u-a*p*u,T=h*x*l-v*f*l+v*o*m-a*x*m-h*o*u+a*f*u,I=v*f*c-h*x*c-v*o*p+a*x*p+h*o*_-a*f*_,P=t*C+n*R+s*T+r*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/P;return e[0]=C*U,e[1]=(x*p*r-f*_*r-x*s*m+n*_*m+f*s*u-n*p*u)*U,e[2]=(o*_*r-x*c*r+x*s*l-n*_*l-o*s*u+n*c*u)*U,e[3]=(f*c*r-o*p*r-f*s*l+n*p*l+o*s*m-n*c*m)*U,e[4]=R*U,e[5]=(h*_*r-v*p*r+v*s*m-t*_*m-h*s*u+t*p*u)*U,e[6]=(v*c*r-a*_*r-v*s*l+t*_*l+a*s*u-t*c*u)*U,e[7]=(a*p*r-h*c*r+h*s*l-t*p*l-a*s*m+t*c*m)*U,e[8]=T*U,e[9]=(v*f*r-h*x*r-v*n*m+t*x*m+h*n*u-t*f*u)*U,e[10]=(a*x*r-v*o*r+v*n*l-t*x*l-a*n*u+t*o*u)*U,e[11]=(h*o*r-a*f*r-h*n*l+t*f*l+a*n*m-t*o*m)*U,e[12]=I*U,e[13]=(h*x*s-v*f*s+v*n*p-t*x*p-h*n*_+t*f*_)*U,e[14]=(v*o*s-a*x*s-v*n*c+t*x*c+a*n*_-t*o*_)*U,e[15]=(a*f*s-h*o*s+h*n*c-t*f*c-a*n*p+t*o*p)*U,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,f=o+o,p=r*l,m=r*h,v=r*f,x=a*h,_=a*f,u=o*f,C=c*l,R=c*h,T=c*f,I=n.x,P=n.y,U=n.z;return s[0]=(1-(x+u))*I,s[1]=(m+T)*I,s[2]=(v-R)*I,s[3]=0,s[4]=(m-T)*P,s[5]=(1-(p+u))*P,s[6]=(_+C)*P,s[7]=0,s[8]=(v+R)*U,s[9]=(_-C)*U,s[10]=(1-(p+x))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=bi.set(s[0],s[1],s[2]).length();const a=bi.set(s[4],s[5],s[6]).length(),o=bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],dn.copy(this);const l=1/r,h=1/a,f=1/o;return dn.elements[0]*=l,dn.elements[1]*=l,dn.elements[2]*=l,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=f,dn.elements[9]*=f,dn.elements[10]*=f,t.setFromRotationMatrix(dn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Mn,c=!1){const l=this.elements,h=2*r/(t-e),f=2*r/(n-s),p=(t+e)/(t-e),m=(n+s)/(n-s);let v,x;if(c)v=r/(a-r),x=a*r/(a-r);else if(o===Mn)v=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===tr)v=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Mn,c=!1){const l=this.elements,h=2/(t-e),f=2/(n-s),p=-(t+e)/(t-e),m=-(n+s)/(n-s);let v,x;if(c)v=1/(a-r),x=a/(a-r);else if(o===Mn)v=-2/(a-r),x=-(a+r)/(a-r);else if(o===tr)v=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=v,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const bi=new G,dn=new Lt,nd=new G(0,0,0),id=new G(1,1,1),Gn=new G,Rs=new G,Qt=new G,ho=new Lt,fo=new ms;class mn{constructor(e=0,t=0,n=0,s=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(mt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ho.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ho,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fo.setFromEuler(this),this.setFromQuaternion(fo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class Ll{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sd=0;const po=new G,Ti=new ms,Rn=new Lt,Cs=new G,is=new G,rd=new G,ad=new ms,mo=new G(1,0,0),go=new G(0,1,0),_o=new G(0,0,1),vo={type:"added"},od={type:"removed"},Ai={type:"childadded",child:null},br={type:"childremoved",child:null};class Bt extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new G,t=new mn,n=new ms,s=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Lt},normalMatrix:{value:new ot}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(mo,e)}rotateY(e){return this.rotateOnAxis(go,e)}rotateZ(e){return this.rotateOnAxis(_o,e)}translateOnAxis(e,t){return po.copy(e).applyQuaternion(this.quaternion),this.position.add(po.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mo,e)}translateY(e){return this.translateOnAxis(go,e)}translateZ(e){return this.translateOnAxis(_o,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cs.copy(e):Cs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(is,Cs,this.up):Rn.lookAt(Cs,is,this.up),this.quaternion.setFromRotationMatrix(Rn),s&&(Rn.extractRotation(s.matrixWorld),Ti.setFromRotationMatrix(Rn),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vo),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(od),br.child=e,this.dispatchEvent(br),br.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vo),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,e,rd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,ad,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),f=a(e.shapes),p=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Bt.DEFAULT_UP=new G(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new G,Cn=new G,Tr=new G,Pn=new G,wi=new G,Ri=new G,xo=new G,Ar=new G,wr=new G,Rr=new G,Cr=new It,Pr=new It,Lr=new It;class hn{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),un.subVectors(e,t),s.cross(un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){un.subVectors(s,t),Cn.subVectors(n,t),Tr.subVectors(e,t);const a=un.dot(un),o=un.dot(Cn),c=un.dot(Tr),l=Cn.dot(Cn),h=Cn.dot(Tr),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const p=1/f,m=(l*c-o*h)*p,v=(a*h-o*c)*p;return r.set(1-m-v,v,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Pn.x),c.addScaledVector(a,Pn.y),c.addScaledVector(o,Pn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Cr.setScalar(0),Pr.setScalar(0),Lr.setScalar(0),Cr.fromBufferAttribute(e,t),Pr.fromBufferAttribute(e,n),Lr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Cr,r.x),a.addScaledVector(Pr,r.y),a.addScaledVector(Lr,r.z),a}static isFrontFacing(e,t,n,s){return un.subVectors(n,t),Cn.subVectors(e,t),un.cross(Cn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),un.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return hn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;wi.subVectors(s,n),Ri.subVectors(r,n),Ar.subVectors(e,n);const c=wi.dot(Ar),l=Ri.dot(Ar);if(c<=0&&l<=0)return t.copy(n);wr.subVectors(e,s);const h=wi.dot(wr),f=Ri.dot(wr);if(h>=0&&f<=h)return t.copy(s);const p=c*f-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(wi,a);Rr.subVectors(e,r);const m=wi.dot(Rr),v=Ri.dot(Rr);if(v>=0&&m<=v)return t.copy(r);const x=m*l-c*v;if(x<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(n).addScaledVector(Ri,o);const _=h*v-m*f;if(_<=0&&f-h>=0&&m-v>=0)return xo.subVectors(r,s),o=(f-h)/(f-h+(m-v)),t.copy(s).addScaledVector(xo,o);const u=1/(_+x+p);return a=x*u,o=p*u,t.copy(n).addScaledVector(wi,a).addScaledVector(Ri,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function Dr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ht{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Mt.workingColorSpace){if(e=$c(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Dr(a,r,e+1/3),this.g=Dr(a,r,e),this.b=Dr(a,r,e-1/3)}return Mt.colorSpaceToWorking(this,s),this}setStyle(e,t=tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tn){const n=Dl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}copyLinearToSRGB(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return Mt.workingToColorSpace(Yt.copy(this),e),Math.round(mt(Yt.r*255,0,255))*65536+Math.round(mt(Yt.g*255,0,255))*256+Math.round(mt(Yt.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(Yt.copy(this),t);const n=Yt.r,s=Yt.g,r=Yt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=tn){Mt.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,s=Yt.b;return e!==tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(Ps);const n=pr(Wn.h,Ps.h,t),s=pr(Wn.s,Ps.s,t),r=pr(Wn.l,Ps.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new ht;ht.NAMES=Dl;let ld=0;class En extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=Oi,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qr,this.blendDst=Yr,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=so,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qr&&(n.blendSrc=this.blendSrc),this.blendDst!==Yr&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==so&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ls extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new G,Ls=new _t;let cd=0;class yn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ro,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ls.fromBufferAttribute(this,t),Ls.applyMatrix3(e),this.setXY(t,Ls.x,Ls.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=es(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=es(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=es(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=es(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ro&&(e.usage=this.usage),e}}class Il extends yn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ul extends yn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ut extends yn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let dd=0;const sn=new Lt,Ir=new Bt,Ci=new G,en=new gs,ss=new gs,Gt=new G;class Wt extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cl(e)?Ul:Il)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ot().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Ir.lookAt(e),Ir.updateMatrix(),this.applyMatrix4(Ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ut(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ss.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(en.min,ss.min),en.expandByPoint(Gt),Gt.addVectors(en.max,ss.max),en.expandByPoint(Gt)):(en.expandByPoint(ss.min),en.expandByPoint(ss.max))}en.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Gt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Gt.fromBufferAttribute(o,l),c&&(Ci.fromBufferAttribute(e,l),Gt.add(Ci)),s=Math.max(s,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let k=0;k<n.count;k++)o[k]=new G,c[k]=new G;const l=new G,h=new G,f=new G,p=new _t,m=new _t,v=new _t,x=new G,_=new G;function u(k,A,b){l.fromBufferAttribute(n,k),h.fromBufferAttribute(n,A),f.fromBufferAttribute(n,b),p.fromBufferAttribute(r,k),m.fromBufferAttribute(r,A),v.fromBufferAttribute(r,b),h.sub(l),f.sub(l),m.sub(p),v.sub(p);const L=1/(m.x*v.y-v.x*m.y);isFinite(L)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(L),_.copy(f).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(L),o[k].add(x),o[A].add(x),o[b].add(x),c[k].add(_),c[A].add(_),c[b].add(_))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let k=0,A=C.length;k<A;++k){const b=C[k],L=b.start,j=b.count;for(let W=L,X=L+j;W<X;W+=3)u(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const R=new G,T=new G,I=new G,P=new G;function U(k){I.fromBufferAttribute(s,k),P.copy(I);const A=o[k];R.copy(A),R.sub(I.multiplyScalar(I.dot(A))).normalize(),T.crossVectors(P,A);const L=T.dot(c[k])<0?-1:1;a.setXYZW(k,R.x,R.y,R.z,L)}for(let k=0,A=C.length;k<A;++k){const b=C[k],L=b.start,j=b.count;for(let W=L,X=L+j;W<X;W+=3)U(e.getX(W+0)),U(e.getX(W+1)),U(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const s=new G,r=new G,a=new G,o=new G,c=new G,l=new G,h=new G,f=new G;if(e)for(let p=0,m=e.count;p<m;p+=3){const v=e.getX(p+0),x=e.getX(p+1),_=e.getX(p+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,_),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,_),o.add(h),c.add(h),l.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,f=o.normalized,p=new l.constructor(c.length*h);let m=0,v=0;for(let x=0,_=c.length;x<_;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*h;for(let u=0;u<h;u++)p[v++]=l[m++]}return new yn(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){const p=l[h],m=e(p,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,p=l.length;f<p;f++){const m=l[f];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],f=r[l];for(let p=0,m=f.length;p<m;p++)h.push(f[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mo=new Lt,ni=new Xa,Ds=new _s,yo=new G,Is=new G,Us=new G,Ns=new G,Ur=new G,Fs=new G,So=new G,Os=new G;class Ot extends Bt{constructor(e=new Wt,t=new ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Fs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],f=r[c];h!==0&&(Ur.fromBufferAttribute(f,e),a?Fs.addScaledVector(Ur,h):Fs.addScaledVector(Ur.sub(t),h))}t.add(Fs)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(r),ni.copy(e.ray).recast(e.near),!(Ds.containsPoint(ni.origin)===!1&&(ni.intersectSphere(Ds,yo)===null||ni.origin.distanceToSquared(yo)>(e.far-e.near)**2))&&(Mo.copy(r).invert(),ni.copy(e.ray).applyMatrix4(Mo),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=p.length;v<x;v++){const _=p[v],u=a[_.materialIndex],C=Math.max(_.start,m.start),R=Math.min(o.count,Math.min(_.start+_.count,m.start+m.count));for(let T=C,I=R;T<I;T+=3){const P=o.getX(T),U=o.getX(T+1),k=o.getX(T+2);s=Bs(this,u,e,n,l,h,f,P,U,k),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let _=v,u=x;_<u;_+=3){const C=o.getX(_),R=o.getX(_+1),T=o.getX(_+2);s=Bs(this,a,e,n,l,h,f,C,R,T),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,x=p.length;v<x;v++){const _=p[v],u=a[_.materialIndex],C=Math.max(_.start,m.start),R=Math.min(c.count,Math.min(_.start+_.count,m.start+m.count));for(let T=C,I=R;T<I;T+=3){const P=T,U=T+1,k=T+2;s=Bs(this,u,e,n,l,h,f,P,U,k),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let _=v,u=x;_<u;_+=3){const C=_,R=_+1,T=_+2;s=Bs(this,a,e,n,l,h,f,C,R,T),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function ud(i,e,t,n,s,r,a,o){let c;if(e.side===Kt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Zn,o),c===null)return null;Os.copy(o),Os.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Os);return l<t.near||l>t.far?null:{distance:l,point:Os.clone(),object:i}}function Bs(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Is),i.getVertexPosition(c,Us),i.getVertexPosition(l,Ns);const h=ud(i,e,t,n,Is,Us,Ns,So);if(h){const f=new G;hn.getBarycoord(So,Is,Us,Ns,f),s&&(h.uv=hn.getInterpolatedAttribute(s,o,c,l,f,new _t)),r&&(h.uv1=hn.getInterpolatedAttribute(r,o,c,l,f,new _t)),a&&(h.normal=hn.getInterpolatedAttribute(a,o,c,l,f,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:c,c:l,normal:new G,materialIndex:0};hn.getNormal(Is,Us,Ns,p.normal),h.face=p,h.barycoord=f}return h}class gi extends Wt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],f=[];let p=0,m=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ut(l,3)),this.setAttribute("normal",new Ut(h,3)),this.setAttribute("uv",new Ut(f,2));function v(x,_,u,C,R,T,I,P,U,k,A){const b=T/U,L=I/k,j=T/2,W=I/2,X=P/2,se=U+1,J=k+1;let pe=0,Y=0;const be=new G;for(let we=0;we<J;we++){const Ve=we*L-W;for(let Qe=0;Qe<se;Qe++){const yt=Qe*b-j;be[x]=yt*C,be[_]=Ve*R,be[u]=X,l.push(be.x,be.y,be.z),be[x]=0,be[_]=0,be[u]=P>0?1:-1,h.push(be.x,be.y,be.z),f.push(Qe/U),f.push(1-we/k),pe+=1}}for(let we=0;we<k;we++)for(let Ve=0;Ve<U;Ve++){const Qe=p+Ve+se*we,yt=p+Ve+se*(we+1),ft=p+(Ve+1)+se*(we+1),ee=p+(Ve+1)+se*we;c.push(Qe,yt,ee),c.push(yt,ft,ee),Y+=6}o.addGroup(m,Y,A),m+=Y,p+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function jt(i){const e={};for(let t=0;t<i.length;t++){const n=Wi(i[t]);for(const s in n)e[s]=n[s]}return e}function hd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const fd={clone:Wi,merge:jt};var pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pd,this.fragmentShader=md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wi(e.uniforms),this.uniformsGroups=hd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Fl extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new G,Eo=new _t,bo=new _t;class an extends Fl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Da*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,Eo,bo),t.subVectors(bo,Eo)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Pi=-90,Li=1;class gd extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(Pi,Li,e,t);s.layers=this.layers,this.add(s);const r=new an(Pi,Li,e,t);r.layers=this.layers,this.add(r);const a=new an(Pi,Li,e,t);a.layers=this.layers,this.add(a);const o=new an(Pi,Li,e,t);o.layers=this.layers,this.add(o);const c=new an(Pi,Li,e,t);c.layers=this.layers,this.add(c);const l=new an(Pi,Li,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,p,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Ol extends Jt{constructor(e=[],t=Hi,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _d extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ol(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gi(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Yn});r.uniforms.tEquirect.value=t;const a=new Ot(s,r),o=t.minFilter;return t.minFilter===hi&&(t.minFilter=xn),new gd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class Nn extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vd={type:"move"};class Nr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const _=t.getJointPose(x,n),u=this._getHandJoint(l,x);_!==null&&(u.matrix.fromArray(_.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=_.radius),u.visible=_!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=h.position.distanceTo(f.position),m=.02,v=.005;l.inputState.pinching&&p>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Nn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class xd extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Fr=new G,Md=new G,yd=new ot;class oi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Fr.subVectors(n,t).cross(Md.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Fr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||yd.getNormalMatrix(e),s=this.coplanarPoint(Fr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ii=new _s,Sd=new _t(.5,.5),zs=new G;class $a{constructor(e=new oi,t=new oi,n=new oi,s=new oi,r=new oi,a=new oi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],p=r[6],m=r[7],v=r[8],x=r[9],_=r[10],u=r[11],C=r[12],R=r[13],T=r[14],I=r[15];if(s[0].setComponents(l-a,m-h,u-v,I-C).normalize(),s[1].setComponents(l+a,m+h,u+v,I+C).normalize(),s[2].setComponents(l+o,m+f,u+x,I+R).normalize(),s[3].setComponents(l-o,m-f,u-x,I-R).normalize(),n)s[4].setComponents(c,p,_,T).normalize(),s[5].setComponents(l-c,m-p,u-_,I-T).normalize();else if(s[4].setComponents(l-c,m-p,u-_,I-T).normalize(),t===Mn)s[5].setComponents(l+c,m+p,u+_,I+T).normalize();else if(t===tr)s[5].setComponents(c,p,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){ii.center.set(0,0,0);const t=Sd.distanceTo(e.center);return ii.radius=.7071067811865476+t,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(zs.x=s.normal.x>0?e.max.x:e.min.x,zs.y=s.normal.y>0?e.max.y:e.min.y,zs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fi extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ir=new G,sr=new G,To=new Lt,rs=new Xa,ks=new _s,Or=new G,Ao=new G;class Ni extends Bt{constructor(e=new Wt,t=new fi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ir.fromBufferAttribute(t,s-1),sr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ir.distanceTo(sr);e.setAttribute("lineDistance",new Ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(s),ks.radius+=r,e.ray.intersectsSphere(ks)===!1)return;To.copy(s).invert(),rs.copy(e.ray).applyMatrix4(To);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let x=m,_=v-1;x<_;x+=l){const u=h.getX(x),C=h.getX(x+1),R=Hs(this,e,rs,c,u,C,x);R&&t.push(R)}if(this.isLineLoop){const x=h.getX(v-1),_=h.getX(m),u=Hs(this,e,rs,c,x,_,v-1);u&&t.push(u)}}else{const m=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let x=m,_=v-1;x<_;x+=l){const u=Hs(this,e,rs,c,x,x+1,x);u&&t.push(u)}if(this.isLineLoop){const x=Hs(this,e,rs,c,v-1,m,v-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Hs(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(ir.fromBufferAttribute(o,s),sr.fromBufferAttribute(o,r),t.distanceSqToSegment(ir,sr,Or,Ao)>n)return;Or.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Or);if(!(l<e.near||l>e.far))return{distance:l,point:Ao.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const wo=new G,Ro=new G;class Co extends Ni{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)wo.fromBufferAttribute(t,s),Ro.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wo.distanceTo(Ro);e.setAttribute("lineDistance",new Ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class as extends En{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Po=new Lt,Ia=new Xa,Vs=new _s,Gs=new G;class Br extends Bt{constructor(e=new Wt,t=new as){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(s),Vs.radius+=r,e.ray.intersectsSphere(Vs)===!1)return;Po.copy(s).invert(),Ia.copy(e.ray).applyMatrix4(Po);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const p=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let v=p,x=m;v<x;v++){const _=l.getX(v);Gs.fromBufferAttribute(f,_),Lo(Gs,_,c,s,e,t,this)}}else{const p=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let v=p,x=m;v<x;v++)Gs.fromBufferAttribute(f,v),Lo(Gs,v,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Lo(i,e,t,n,s,r,a){const o=Ia.distanceSqToPoint(i);if(o<t){const c=new G;Ia.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Bl extends Jt{constructor(e,t,n=pi,s,r,a,o=pn,c=pn,l,h=us,f=1){if(h!==us&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:f};super(p,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qa extends Wt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],p=[],m=[];let v=0;const x=[],_=n/2;let u=0;C(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new Ut(f,3)),this.setAttribute("normal",new Ut(p,3)),this.setAttribute("uv",new Ut(m,2));function C(){const T=new G,I=new G;let P=0;const U=(t-e)/n;for(let k=0;k<=r;k++){const A=[],b=k/r,L=b*(t-e)+e;for(let j=0;j<=s;j++){const W=j/s,X=W*c+o,se=Math.sin(X),J=Math.cos(X);I.x=L*se,I.y=-b*n+_,I.z=L*J,f.push(I.x,I.y,I.z),T.set(se,U,J).normalize(),p.push(T.x,T.y,T.z),m.push(W,1-b),A.push(v++)}x.push(A)}for(let k=0;k<s;k++)for(let A=0;A<r;A++){const b=x[A][k],L=x[A+1][k],j=x[A+1][k+1],W=x[A][k+1];(e>0||A!==0)&&(h.push(b,L,W),P+=3),(t>0||A!==r-1)&&(h.push(L,j,W),P+=3)}l.addGroup(u,P,0),u+=P}function R(T){const I=v,P=new _t,U=new G;let k=0;const A=T===!0?e:t,b=T===!0?1:-1;for(let j=1;j<=s;j++)f.push(0,_*b,0),p.push(0,b,0),m.push(.5,.5),v++;const L=v;for(let j=0;j<=s;j++){const X=j/s*c+o,se=Math.cos(X),J=Math.sin(X);U.x=A*J,U.y=_*b,U.z=A*se,f.push(U.x,U.y,U.z),p.push(0,b,0),P.x=se*.5+.5,P.y=J*.5*b+.5,m.push(P.x,P.y),v++}for(let j=0;j<s;j++){const W=I+j,X=L+j;T===!0?h.push(X,X+1,W):h.push(X+1,X,W),k+=3}l.addGroup(u,k,T===!0?1:2),u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xi extends Wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=e/o,p=t/c,m=[],v=[],x=[],_=[];for(let u=0;u<h;u++){const C=u*p-a;for(let R=0;R<l;R++){const T=R*f-r;v.push(T,-C,0),x.push(0,0,1),_.push(R/o),_.push(1-u/c)}}for(let u=0;u<c;u++)for(let C=0;C<o;C++){const R=C+l*u,T=C+l*(u+1),I=C+1+l*(u+1),P=C+1+l*u;m.push(R,T,P),m.push(T,I,P)}this.setIndex(m),this.setAttribute("position",new Ut(v,3)),this.setAttribute("normal",new Ut(x,3)),this.setAttribute("uv",new Ut(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ya extends Wt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],f=new G,p=new G,m=[],v=[],x=[],_=[];for(let u=0;u<=n;u++){const C=[],R=u/n;let T=0;u===0&&a===0?T=.5/t:u===n&&c===Math.PI&&(T=-.5/t);for(let I=0;I<=t;I++){const P=I/t;f.x=-e*Math.cos(s+P*r)*Math.sin(a+R*o),f.y=e*Math.cos(a+R*o),f.z=e*Math.sin(s+P*r)*Math.sin(a+R*o),v.push(f.x,f.y,f.z),p.copy(f).normalize(),x.push(p.x,p.y,p.z),_.push(P+T,1-R),C.push(l++)}h.push(C)}for(let u=0;u<n;u++)for(let C=0;C<t;C++){const R=h[u][C+1],T=h[u][C],I=h[u+1][C],P=h[u+1][C+1];(u!==0||a>0)&&m.push(R,T,P),(u!==n-1||c<Math.PI)&&m.push(T,I,P)}this.setIndex(m),this.setAttribute("position",new Ut(v,3)),this.setAttribute("normal",new Ut(x,3)),this.setAttribute("uv",new Ut(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $n extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ga,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ed extends En{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ht(16777215),this.specular=new ht(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ga,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bd extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Td extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ad extends fi{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const Do={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class wd{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){const f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,p=l.length;f<p;f+=2){const m=l[f],v=l[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Rd=new wd;class ja{constructor(e){this.manager=e!==void 0?e:Rd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ja.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ln={};class Cd extends Error{constructor(e,t){super(e),this.response=t}}class Pd extends ja{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Do.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ln[e]!==void 0){Ln[e].push({onLoad:t,onProgress:n,onError:s});return}Ln[e]=[],Ln[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Ln[e],f=l.body.getReader(),p=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=p?parseInt(p):0,v=m!==0;let x=0;const _=new ReadableStream({start(u){C();function C(){f.read().then(({done:R,value:T})=>{if(R)u.close();else{x+=T.byteLength;const I=new ProgressEvent("progress",{lengthComputable:v,loaded:x,total:m});for(let P=0,U=h.length;P<U;P++){const k=h[P];k.onProgress&&k.onProgress(I)}u.enqueue(T),C()}},R=>{u.error(R)})}}});return new Response(_)}else throw new Cd(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),p=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(p);return l.arrayBuffer().then(v=>m.decode(v))}}}).then(l=>{Do.add(`file:${e}`,l);const h=Ln[e];delete Ln[e];for(let f=0,p=h.length;f<p;f++){const m=h[f];m.onLoad&&m.onLoad(l)}}).catch(l=>{const h=Ln[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ln[e];for(let f=0,p=h.length;f<p;f++){const m=h[f];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class zl extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const zr=new Lt,Io=new G,Uo=new G;class Ld{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $a,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Io.setFromMatrixPosition(e.matrixWorld),t.position.copy(Io),Uo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uo),t.updateMatrixWorld(),zr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zr,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class kl extends Fl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Dd extends Ld{constructor(){super(new kl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Id extends zl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new Dd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ud extends zl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Nd extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function No(i,e,t,n){const s=Fd(n);switch(t){case El:return i*e;case Tl:return i*e/s.components*s.byteLength;case ka:return i*e/s.components*s.byteLength;case Al:return i*e*2/s.components*s.byteLength;case Ha:return i*e*2/s.components*s.byteLength;case bl:return i*e*3/s.components*s.byteLength;case fn:return i*e*4/s.components*s.byteLength;case Va:return i*e*4/s.components*s.byteLength;case Ys:case js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zs:case Ks:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oa:case ca:return Math.max(i,16)*Math.max(e,8)/4;case aa:case la:return Math.max(i,8)*Math.max(e,8)/2;case da:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ma:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ga:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _a:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case va:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case xa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ya:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ba:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ta:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Aa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Js:case wa:case Ra:return Math.ceil(i/4)*Math.ceil(e/4)*16;case wl:case Ca:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Pa:case La:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fd(i){switch(i){case Sn:case Ml:return{byteLength:1,components:1};case cs:case yl:case fs:return{byteLength:2,components:1};case Ba:case za:return{byteLength:2,components:4};case pi:case Oa:case Un:return{byteLength:4,components:1};case Sl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Na}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Na);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hl(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Od(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,f=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((m,v)=>m.start-v.start);let p=0;for(let m=1;m<f.length;m++){const v=f[p],x=f[m];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++p,f[p]=x)}f.length=p+1;for(let m=0,v=f.length;m<v;m++){const x=f[m];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zd=`#ifdef USE_ALPHAHASH
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
#endif`,kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wd=`#ifdef USE_AOMAP
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
#endif`,Xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$d=`#ifdef USE_BATCHING
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
#endif`,qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kd=`#ifdef USE_IRIDESCENCE
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
#endif`,Jd=`#ifdef USE_BUMPMAP
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
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,au=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ou=`#define PI 3.141592653589793
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
} // validated`,lu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cu=`vec3 transformedNormal = objectNormal;
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
#endif`,du=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pu="gl_FragColor = linearToOutputTexel( gl_FragColor );",mu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gu=`#ifdef USE_ENVMAP
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
#endif`,_u=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vu=`#ifdef USE_ENVMAP
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
#endif`,xu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mu=`#ifdef USE_ENVMAP
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
#endif`,yu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Su=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tu=`#ifdef USE_GRADIENTMAP
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
}`,Au=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ru=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cu=`uniform bool receiveShadow;
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
#endif`,Pu=`#ifdef USE_ENVMAP
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
#endif`,Lu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nu=`PhysicalMaterial material;
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
#endif`,Fu=`struct PhysicalMaterial {
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
}`,Ou=`
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
#endif`,Bu=`#if defined( RE_IndirectDiffuse )
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
#endif`,zu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ku=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$u=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qu=`#if defined( USE_POINTS_UV )
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
#endif`,Yu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ju=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ku=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ju=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qu=`#ifdef USE_MORPHTARGETS
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
#endif`,eh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,th=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ih=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ah=`#ifdef USE_NORMALMAP
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
#endif`,oh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ch=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ph=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_h=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sh=`float getShadowMask() {
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
}`,Eh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bh=`#ifdef USE_SKINNING
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
#endif`,Th=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ah=`#ifdef USE_SKINNING
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
#endif`,wh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ch=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ph=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lh=`#ifdef USE_TRANSMISSION
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
#endif`,Dh=`#ifdef USE_TRANSMISSION
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
#endif`,Ih=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Oh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bh=`uniform sampler2D t2D;
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
}`,zh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gh=`#include <common>
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
}`,Wh=`#if DEPTH_PACKING == 3200
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
}`,Xh=`#define DISTANCE
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
}`,$h=`#define DISTANCE
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
}`,qh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jh=`uniform float scale;
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
}`,Zh=`uniform vec3 diffuse;
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
}`,Kh=`#include <common>
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
}`,Jh=`uniform vec3 diffuse;
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
}`,Qh=`#define LAMBERT
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
}`,ef=`#define LAMBERT
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
}`,tf=`#define MATCAP
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
}`,nf=`#define MATCAP
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
}`,sf=`#define NORMAL
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
}`,rf=`#define NORMAL
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
}`,af=`#define PHONG
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
}`,of=`#define PHONG
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
}`,lf=`#define STANDARD
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
}`,cf=`#define STANDARD
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
}`,df=`#define TOON
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
}`,uf=`#define TOON
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
}`,hf=`uniform float size;
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
}`,ff=`uniform vec3 diffuse;
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
}`,pf=`#include <common>
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
}`,mf=`uniform vec3 color;
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
}`,gf=`uniform float rotation;
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
}`,_f=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:Bd,alphahash_pars_fragment:zd,alphamap_fragment:kd,alphamap_pars_fragment:Hd,alphatest_fragment:Vd,alphatest_pars_fragment:Gd,aomap_fragment:Wd,aomap_pars_fragment:Xd,batching_pars_vertex:$d,batching_vertex:qd,begin_vertex:Yd,beginnormal_vertex:jd,bsdfs:Zd,iridescence_fragment:Kd,bumpmap_pars_fragment:Jd,clipping_planes_fragment:Qd,clipping_planes_pars_fragment:eu,clipping_planes_pars_vertex:tu,clipping_planes_vertex:nu,color_fragment:iu,color_pars_fragment:su,color_pars_vertex:ru,color_vertex:au,common:ou,cube_uv_reflection_fragment:lu,defaultnormal_vertex:cu,displacementmap_pars_vertex:du,displacementmap_vertex:uu,emissivemap_fragment:hu,emissivemap_pars_fragment:fu,colorspace_fragment:pu,colorspace_pars_fragment:mu,envmap_fragment:gu,envmap_common_pars_fragment:_u,envmap_pars_fragment:vu,envmap_pars_vertex:xu,envmap_physical_pars_fragment:Pu,envmap_vertex:Mu,fog_vertex:yu,fog_pars_vertex:Su,fog_fragment:Eu,fog_pars_fragment:bu,gradientmap_pars_fragment:Tu,lightmap_pars_fragment:Au,lights_lambert_fragment:wu,lights_lambert_pars_fragment:Ru,lights_pars_begin:Cu,lights_toon_fragment:Lu,lights_toon_pars_fragment:Du,lights_phong_fragment:Iu,lights_phong_pars_fragment:Uu,lights_physical_fragment:Nu,lights_physical_pars_fragment:Fu,lights_fragment_begin:Ou,lights_fragment_maps:Bu,lights_fragment_end:zu,logdepthbuf_fragment:ku,logdepthbuf_pars_fragment:Hu,logdepthbuf_pars_vertex:Vu,logdepthbuf_vertex:Gu,map_fragment:Wu,map_pars_fragment:Xu,map_particle_fragment:$u,map_particle_pars_fragment:qu,metalnessmap_fragment:Yu,metalnessmap_pars_fragment:ju,morphinstance_vertex:Zu,morphcolor_vertex:Ku,morphnormal_vertex:Ju,morphtarget_pars_vertex:Qu,morphtarget_vertex:eh,normal_fragment_begin:th,normal_fragment_maps:nh,normal_pars_fragment:ih,normal_pars_vertex:sh,normal_vertex:rh,normalmap_pars_fragment:ah,clearcoat_normal_fragment_begin:oh,clearcoat_normal_fragment_maps:lh,clearcoat_pars_fragment:ch,iridescence_pars_fragment:dh,opaque_fragment:uh,packing:hh,premultiplied_alpha_fragment:fh,project_vertex:ph,dithering_fragment:mh,dithering_pars_fragment:gh,roughnessmap_fragment:_h,roughnessmap_pars_fragment:vh,shadowmap_pars_fragment:xh,shadowmap_pars_vertex:Mh,shadowmap_vertex:yh,shadowmask_pars_fragment:Sh,skinbase_vertex:Eh,skinning_pars_vertex:bh,skinning_vertex:Th,skinnormal_vertex:Ah,specularmap_fragment:wh,specularmap_pars_fragment:Rh,tonemapping_fragment:Ch,tonemapping_pars_fragment:Ph,transmission_fragment:Lh,transmission_pars_fragment:Dh,uv_pars_fragment:Ih,uv_pars_vertex:Uh,uv_vertex:Nh,worldpos_vertex:Fh,background_vert:Oh,background_frag:Bh,backgroundCube_vert:zh,backgroundCube_frag:kh,cube_vert:Hh,cube_frag:Vh,depth_vert:Gh,depth_frag:Wh,distanceRGBA_vert:Xh,distanceRGBA_frag:$h,equirect_vert:qh,equirect_frag:Yh,linedashed_vert:jh,linedashed_frag:Zh,meshbasic_vert:Kh,meshbasic_frag:Jh,meshlambert_vert:Qh,meshlambert_frag:ef,meshmatcap_vert:tf,meshmatcap_frag:nf,meshnormal_vert:sf,meshnormal_frag:rf,meshphong_vert:af,meshphong_frag:of,meshphysical_vert:lf,meshphysical_frag:cf,meshtoon_vert:df,meshtoon_frag:uf,points_vert:hf,points_frag:ff,shadow_vert:pf,shadow_frag:mf,sprite_vert:gf,sprite_frag:_f},Ie={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},vn={basic:{uniforms:jt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:jt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new ht(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:jt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:jt([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:jt([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new ht(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:jt([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:jt([Ie.points,Ie.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:jt([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:jt([Ie.common,Ie.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:jt([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:jt([Ie.sprite,Ie.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:jt([Ie.common,Ie.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:jt([Ie.lights,Ie.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};vn.physical={uniforms:jt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Ws={r:0,b:0,g:0},si=new mn,vf=new Lt;function xf(i,e,t,n,s,r,a){const o=new ht(0);let c=r===!0?0:1,l,h,f=null,p=0,m=null;function v(R){let T=R.isScene===!0?R.background:null;return T&&T.isTexture&&(T=(R.backgroundBlurriness>0?t:e).get(T)),T}function x(R){let T=!1;const I=v(R);I===null?u(o,c):I&&I.isColor&&(u(I,1),T=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(R,T){const I=v(T);I&&(I.isCubeTexture||I.mapping===rr)?(h===void 0&&(h=new Ot(new gi(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Wi(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,U,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),si.copy(T.backgroundRotation),si.x*=-1,si.y*=-1,si.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(vf.makeRotationFromEuler(si)),h.material.toneMapped=Mt.getTransfer(I.colorSpace)!==Tt,(f!==I||p!==I.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=I,p=I.version,m=i.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new Ot(new Xi(2,2),new Kn({name:"BackgroundMaterial",uniforms:Wi(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Mt.getTransfer(I.colorSpace)!==Tt,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(f!==I||p!==I.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,f=I,p=I.version,m=i.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null))}function u(R,T){R.getRGB(Ws,Nl(i)),n.buffers.color.setClear(Ws.r,Ws.g,Ws.b,T,a)}function C(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(R,T=1){o.set(R),c=T,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(R){c=R,u(o,c)},render:x,addToRenderList:_,dispose:C}}function Mf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,a=!1;function o(b,L,j,W,X){let se=!1;const J=f(W,j,L);r!==J&&(r=J,l(r.object)),se=m(b,W,j,X),se&&v(b,W,j,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(se||a)&&(a=!1,T(b,L,j,W),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function f(b,L,j){const W=j.wireframe===!0;let X=n[b.id];X===void 0&&(X={},n[b.id]=X);let se=X[L.id];se===void 0&&(se={},X[L.id]=se);let J=se[W];return J===void 0&&(J=p(c()),se[W]=J),J}function p(b){const L=[],j=[],W=[];for(let X=0;X<t;X++)L[X]=0,j[X]=0,W[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:j,attributeDivisors:W,object:b,attributes:{},index:null}}function m(b,L,j,W){const X=r.attributes,se=L.attributes;let J=0;const pe=j.getAttributes();for(const Y in pe)if(pe[Y].location>=0){const we=X[Y];let Ve=se[Y];if(Ve===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(Ve=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(Ve=b.instanceColor)),we===void 0||we.attribute!==Ve||Ve&&we.data!==Ve.data)return!0;J++}return r.attributesNum!==J||r.index!==W}function v(b,L,j,W){const X={},se=L.attributes;let J=0;const pe=j.getAttributes();for(const Y in pe)if(pe[Y].location>=0){let we=se[Y];we===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(we=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(we=b.instanceColor));const Ve={};Ve.attribute=we,we&&we.data&&(Ve.data=we.data),X[Y]=Ve,J++}r.attributes=X,r.attributesNum=J,r.index=W}function x(){const b=r.newAttributes;for(let L=0,j=b.length;L<j;L++)b[L]=0}function _(b){u(b,0)}function u(b,L){const j=r.newAttributes,W=r.enabledAttributes,X=r.attributeDivisors;j[b]=1,W[b]===0&&(i.enableVertexAttribArray(b),W[b]=1),X[b]!==L&&(i.vertexAttribDivisor(b,L),X[b]=L)}function C(){const b=r.newAttributes,L=r.enabledAttributes;for(let j=0,W=L.length;j<W;j++)L[j]!==b[j]&&(i.disableVertexAttribArray(j),L[j]=0)}function R(b,L,j,W,X,se,J){J===!0?i.vertexAttribIPointer(b,L,j,X,se):i.vertexAttribPointer(b,L,j,W,X,se)}function T(b,L,j,W){x();const X=W.attributes,se=j.getAttributes(),J=L.defaultAttributeValues;for(const pe in se){const Y=se[pe];if(Y.location>=0){let be=X[pe];if(be===void 0&&(pe==="instanceMatrix"&&b.instanceMatrix&&(be=b.instanceMatrix),pe==="instanceColor"&&b.instanceColor&&(be=b.instanceColor)),be!==void 0){const we=be.normalized,Ve=be.itemSize,Qe=e.get(be);if(Qe===void 0)continue;const yt=Qe.buffer,ft=Qe.type,ee=Qe.bytesPerElement,Re=ft===i.INT||ft===i.UNSIGNED_INT||be.gpuType===Oa;if(be.isInterleavedBufferAttribute){const ve=be.data,We=ve.stride,Xe=be.offset;if(ve.isInstancedInterleavedBuffer){for(let Ze=0;Ze<Y.locationSize;Ze++)u(Y.location+Ze,ve.meshPerAttribute);b.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ze=0;Ze<Y.locationSize;Ze++)_(Y.location+Ze);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let Ze=0;Ze<Y.locationSize;Ze++)R(Y.location+Ze,Ve/Y.locationSize,ft,we,We*ee,(Xe+Ve/Y.locationSize*Ze)*ee,Re)}else{if(be.isInstancedBufferAttribute){for(let ve=0;ve<Y.locationSize;ve++)u(Y.location+ve,be.meshPerAttribute);b.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let ve=0;ve<Y.locationSize;ve++)_(Y.location+ve);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let ve=0;ve<Y.locationSize;ve++)R(Y.location+ve,Ve/Y.locationSize,ft,we,Ve*ee,Ve/Y.locationSize*ve*ee,Re)}}else if(J!==void 0){const we=J[pe];if(we!==void 0)switch(we.length){case 2:i.vertexAttrib2fv(Y.location,we);break;case 3:i.vertexAttrib3fv(Y.location,we);break;case 4:i.vertexAttrib4fv(Y.location,we);break;default:i.vertexAttrib1fv(Y.location,we)}}}}C()}function I(){k();for(const b in n){const L=n[b];for(const j in L){const W=L[j];for(const X in W)h(W[X].object),delete W[X];delete L[j]}delete n[b]}}function P(b){if(n[b.id]===void 0)return;const L=n[b.id];for(const j in L){const W=L[j];for(const X in W)h(W[X].object),delete W[X];delete L[j]}delete n[b.id]}function U(b){for(const L in n){const j=n[L];if(j[b.id]===void 0)continue;const W=j[b.id];for(const X in W)h(W[X].object),delete W[X];delete j[b.id]}}function k(){A(),a=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:k,resetDefaultState:A,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:_,disableUnusedAttributes:C}}function yf(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),t.update(h,n,f))}function o(l,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let m=0;for(let v=0;v<f;v++)m+=h[v];t.update(m,n,1)}function c(l,h,f,p){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<l.length;v++)a(l[v],h[v],p[v]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,f);let v=0;for(let x=0;x<f;x++)v+=h[x]*p[x];t.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Sf(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(U){return!(U!==fn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){const k=U===fs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Sn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Un&&!k)}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=v>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:_,maxAttributes:u,maxVertexUniforms:C,maxVaryings:R,maxFragmentUniforms:T,vertexTextures:I,maxSamples:P}}function Ef(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new oi,o=new ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||n!==0||s;return s=p,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=h(f,p,0)},this.setState=function(f,p,m){const v=f.clippingPlanes,x=f.clipIntersection,_=f.clipShadows,u=i.get(f);if(!s||v===null||v.length===0||r&&!_)r?h(null):l();else{const C=r?0:n,R=C*4;let T=u.clippingState||null;c.value=T,T=h(v,p,R,m);for(let I=0;I!==R;++I)T[I]=t[I];u.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,p,m,v){const x=f!==null?f.length:0;let _=null;if(x!==0){if(_=c.value,v!==!0||_===null){const u=m+x*4,C=p.matrixWorldInverse;o.getNormalMatrix(C),(_===null||_.length<u)&&(_=new Float32Array(u));for(let R=0,T=m;R!==x;++R,T+=4)a.copy(f[R]).applyMatrix4(C,o),a.normal.toArray(_,T),_[T+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,_}}function bf(i){let e=new WeakMap;function t(a,o){return o===na?a.mapping=Hi:o===ia&&(a.mapping=Vi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===na||o===ia)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new _d(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Fi=4,Fo=[.125,.215,.35,.446,.526,.582],di=20,kr=new kl,Oo=new ht;let Hr=null,Vr=0,Gr=0,Wr=!1;const li=(1+Math.sqrt(5))/2,Di=1/li,Bo=[new G(-li,Di,0),new G(li,Di,0),new G(-Di,0,li),new G(Di,0,li),new G(0,li,-Di),new G(0,li,Di),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],Tf=new G;class zo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Tf}=r;Hr=this._renderer.getRenderTarget(),Vr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),Wr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ho(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hr,Vr,Gr),this._renderer.xr.enabled=Wr,e.scissorTest=!1,Xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===Vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hr=this._renderer.getRenderTarget(),Vr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),Wr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:fs,format:fn,colorSpace:Gi,depthBuffer:!1},s=ko(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ko(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Af(r)),this._blurMaterial=wf(r,e,t)}return s}_compileMaterial(e){const t=new Ot(this._lodPlanes[0],e);this._renderer.compile(t,kr)}_sceneToCubeUV(e,t,n,s,r){const c=new an(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(Oo),f.toneMapping=jn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const x=new ls({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),_=new Ot(new gi,x);let u=!1;const C=e.background;C?C.isColor&&(x.color.copy(C),e.background=null,u=!0):(x.color.copy(Oo),u=!0);for(let R=0;R<6;R++){const T=R%3;T===0?(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[R],r.y,r.z)):T===1?(c.up.set(0,0,l[R]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[R],r.z)):(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[R]));const I=this._cubeSize;Xs(s,T*I,R>2?I:0,I,I),f.setRenderTarget(s),u&&f.render(_,c),f.render(e,c)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=m,f.autoClear=p,e.background=C}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Hi||e.mapping===Vi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ho());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ot(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Xs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,kr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Bo[(s-r-1)%Bo.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Ot(this._lodPlanes[s],l),p=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*di-1),x=r/v,_=isFinite(r)?1+Math.floor(h*x):di;_>di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${di}`);const u=[];let C=0;for(let U=0;U<di;++U){const k=U/x,A=Math.exp(-k*k/2);u.push(A),U===0?C+=A:U<_&&(C+=2*A)}for(let U=0;U<u.length;U++)u[U]=u[U]/C;p.envMap.value=e.texture,p.samples.value=_,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:R}=this;p.dTheta.value=v,p.mipInt.value=R-n;const T=this._sizeLods[s],I=3*T*(s>R-Fi?s-R+Fi:0),P=4*(this._cubeSize-T);Xs(t,I,P,3*T,2*T),c.setRenderTarget(t),c.render(f,kr)}}function Af(i){const e=[],t=[],n=[];let s=i;const r=i-Fi+1+Fo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Fi?c=Fo[a-i+Fi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,f=1+l,p=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,v=6,x=3,_=2,u=1,C=new Float32Array(x*v*m),R=new Float32Array(_*v*m),T=new Float32Array(u*v*m);for(let P=0;P<m;P++){const U=P%3*2/3-1,k=P>2?0:-1,A=[U,k,0,U+2/3,k,0,U+2/3,k+1,0,U,k,0,U+2/3,k+1,0,U,k+1,0];C.set(A,x*v*P),R.set(p,_*v*P);const b=[P,P,P,P,P,P];T.set(b,u*v*P)}const I=new Wt;I.setAttribute("position",new yn(C,x)),I.setAttribute("uv",new yn(R,_)),I.setAttribute("faceIndex",new yn(T,u)),e.push(I),s>Fi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ko(i,e,t){const n=new mi(i,e,t);return n.texture.mapping=rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function wf(i,e,t){const n=new Float32Array(di),s=new G(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Za(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Ho(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Za(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Vo(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Za(){return`

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
	`}function Rf(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===na||c===ia,h=c===Hi||c===Vi;if(l||h){let f=e.get(o);const p=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new zo(i)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return l&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new zo(i)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Cf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Bi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Pf(i,e,t,n){const s={},r=new WeakMap;function a(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);p.removeEventListener("dispose",a),delete s[p.id];const m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(f,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function c(f){const p=f.attributes;for(const m in p)e.update(p[m],i.ARRAY_BUFFER)}function l(f){const p=[],m=f.index,v=f.attributes.position;let x=0;if(m!==null){const C=m.array;x=m.version;for(let R=0,T=C.length;R<T;R+=3){const I=C[R+0],P=C[R+1],U=C[R+2];p.push(I,P,P,U,U,I)}}else if(v!==void 0){const C=v.array;x=v.version;for(let R=0,T=C.length/3-1;R<T;R+=3){const I=R+0,P=R+1,U=R+2;p.push(I,P,P,U,U,I)}}else return;const _=new(Cl(p)?Ul:Il)(p,1);_.version=x;const u=r.get(f);u&&e.remove(u),r.set(f,_)}function h(f){const p=r.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function Lf(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,m){i.drawElements(n,m,r,p*a),t.update(m,n,1)}function l(p,m,v){v!==0&&(i.drawElementsInstanced(n,m,r,p*a,v),t.update(m,n,v))}function h(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,v);let _=0;for(let u=0;u<v;u++)_+=m[u];t.update(_,n,1)}function f(p,m,v,x){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let u=0;u<p.length;u++)l(p[u]/a,m[u],x[u]);else{_.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,x,0,v);let u=0;for(let C=0;C<v;C++)u+=m[C]*x[C];t.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Df(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function If(i,e,t){const n=new WeakMap,s=new It;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let p=n.get(o);if(p===void 0||p.count!==f){let A=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",A)};p!==void 0&&p.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let R=0;m===!0&&(R=1),v===!0&&(R=2),x===!0&&(R=3);let T=o.attributes.position.count*R,I=1;T>e.maxTextureSize&&(I=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const P=new Float32Array(T*I*4*f),U=new Pl(P,T,I,f);U.type=Un,U.needsUpdate=!0;const k=R*4;for(let b=0;b<f;b++){const L=_[b],j=u[b],W=C[b],X=T*I*4*b;for(let se=0;se<L.count;se++){const J=se*k;m===!0&&(s.fromBufferAttribute(L,se),P[X+J+0]=s.x,P[X+J+1]=s.y,P[X+J+2]=s.z,P[X+J+3]=0),v===!0&&(s.fromBufferAttribute(j,se),P[X+J+4]=s.x,P[X+J+5]=s.y,P[X+J+6]=s.z,P[X+J+7]=0),x===!0&&(s.fromBufferAttribute(W,se),P[X+J+8]=s.x,P[X+J+9]=s.y,P[X+J+10]=s.z,P[X+J+11]=W.itemSize===4?s.w:1)}}p={count:f,texture:U,size:new _t(T,I)},n.set(o,p),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let x=0;x<l.length;x++)m+=l[x];const v=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Uf(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return f}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const Vl=new Jt,Go=new Bl(1,1),Gl=new Pl,Wl=new ed,Xl=new Ol,Wo=[],Xo=[],$o=new Float32Array(16),qo=new Float32Array(9),Yo=new Float32Array(4);function qi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Wo[s];if(r===void 0&&(r=new Float32Array(s),Wo[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ar(i,e){let t=Xo[e];t===void 0&&(t=new Int32Array(e),Xo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Nf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function Of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function Bf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function zf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;Yo.set(n),i.uniformMatrix2fv(this.addr,!1,Yo),kt(t,n)}}function kf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;qo.set(n),i.uniformMatrix3fv(this.addr,!1,qo),kt(t,n)}}function Hf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;$o.set(n),i.uniformMatrix4fv(this.addr,!1,$o),kt(t,n)}}function Vf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Gf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function Wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function Xf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function $f(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function qf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function Yf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function Zf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Go.compareFunction=Rl,r=Go):r=Vl,t.setTexture2D(e||r,s)}function Kf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Wl,s)}function Jf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Xl,s)}function Qf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Gl,s)}function ep(i){switch(i){case 5126:return Nf;case 35664:return Ff;case 35665:return Of;case 35666:return Bf;case 35674:return zf;case 35675:return kf;case 35676:return Hf;case 5124:case 35670:return Vf;case 35667:case 35671:return Gf;case 35668:case 35672:return Wf;case 35669:case 35673:return Xf;case 5125:return $f;case 36294:return qf;case 36295:return Yf;case 36296:return jf;case 35678:case 36198:case 36298:case 36306:case 35682:return Zf;case 35679:case 36299:case 36307:return Kf;case 35680:case 36300:case 36308:case 36293:return Jf;case 36289:case 36303:case 36311:case 36292:return Qf}}function tp(i,e){i.uniform1fv(this.addr,e)}function np(i,e){const t=qi(e,this.size,2);i.uniform2fv(this.addr,t)}function ip(i,e){const t=qi(e,this.size,3);i.uniform3fv(this.addr,t)}function sp(i,e){const t=qi(e,this.size,4);i.uniform4fv(this.addr,t)}function rp(i,e){const t=qi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ap(i,e){const t=qi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function op(i,e){const t=qi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function lp(i,e){i.uniform1iv(this.addr,e)}function cp(i,e){i.uniform2iv(this.addr,e)}function dp(i,e){i.uniform3iv(this.addr,e)}function up(i,e){i.uniform4iv(this.addr,e)}function hp(i,e){i.uniform1uiv(this.addr,e)}function fp(i,e){i.uniform2uiv(this.addr,e)}function pp(i,e){i.uniform3uiv(this.addr,e)}function mp(i,e){i.uniform4uiv(this.addr,e)}function gp(i,e,t){const n=this.cache,s=e.length,r=ar(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Vl,r[a])}function _p(i,e,t){const n=this.cache,s=e.length,r=ar(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Wl,r[a])}function vp(i,e,t){const n=this.cache,s=e.length,r=ar(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Xl,r[a])}function xp(i,e,t){const n=this.cache,s=e.length,r=ar(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Gl,r[a])}function Mp(i){switch(i){case 5126:return tp;case 35664:return np;case 35665:return ip;case 35666:return sp;case 35674:return rp;case 35675:return ap;case 35676:return op;case 5124:case 35670:return lp;case 35667:case 35671:return cp;case 35668:case 35672:return dp;case 35669:case 35673:return up;case 5125:return hp;case 36294:return fp;case 36295:return pp;case 36296:return mp;case 35678:case 36198:case 36298:case 36306:case 35682:return gp;case 35679:case 36299:case 36307:return _p;case 35680:case 36300:case 36308:case 36293:return vp;case 36289:case 36303:case 36311:case 36292:return xp}}class yp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ep(t.type)}}class Sp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mp(t.type)}}class Ep{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Xr=/(\w+)(\])?(\[|\.)?/g;function jo(i,e){i.seq.push(e),i.map[e.id]=e}function bp(i,e,t){const n=i.name,s=n.length;for(Xr.lastIndex=0;;){const r=Xr.exec(n),a=Xr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){jo(t,l===void 0?new yp(o,i,e):new Sp(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Ep(o),jo(t,f)),t=f}}}class Qs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);bp(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Zo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Tp=37297;let Ap=0;function wp(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ko=new ot;function Rp(i){Mt._getMatrix(Ko,Mt.workingColorSpace,i);const e=`mat3( ${Ko.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(i)){case er:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Jo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+wp(i.getShaderSource(e),o)}else return r}function Cp(i,e){const t=Rp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Pp(i,e){let t;switch(e){case Rc:t="Linear";break;case Cc:t="Reinhard";break;case Pc:t="Cineon";break;case Lc:t="ACESFilmic";break;case Ic:t="AgX";break;case Uc:t="Neutral";break;case Dc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $s=new G;function Lp(){Mt.getLuminanceCoefficients($s);const i=$s.x.toFixed(4),e=$s.y.toFixed(4),t=$s.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(os).join(`
`)}function Ip(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Up(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function os(i){return i!==""}function Qo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function el(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Np=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ua(i){return i.replace(Np,Op)}const Fp=new Map;function Op(i,e){let t=lt[e];if(t===void 0){const n=Fp.get(e);if(n!==void 0)t=lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ua(t)}const Bp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tl(i){return i.replace(Bp,zp)}function zp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nl(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function kp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===oc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Dn&&(e="SHADOWMAP_TYPE_VSM"),e}function Hp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hi:case Vi:e="ENVMAP_TYPE_CUBE";break;case rr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vi:e="ENVMAP_MODE_REFRACTION";break}return e}function Gp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fa:e="ENVMAP_BLENDING_MULTIPLY";break;case Ac:e="ENVMAP_BLENDING_MIX";break;case wc:e="ENVMAP_BLENDING_ADD";break}return e}function Wp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Xp(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=kp(t),l=Hp(t),h=Vp(t),f=Gp(t),p=Wp(t),m=Dp(t),v=Ip(r),x=s.createProgram();let _,u,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(os).join(`
`),_.length>0&&(_+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(os).join(`
`),u.length>0&&(u+=`
`)):(_=[nl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),u=[nl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?lt.tonemapping_pars_fragment:"",t.toneMapping!==jn?Pp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,Cp("linearToOutputTexel",t.outputColorSpace),Lp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(os).join(`
`)),a=Ua(a),a=Qo(a,t),a=el(a,t),o=Ua(o),o=Qo(o,t),o=el(o,t),a=tl(a),o=tl(o),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,u=["#define varying in",t.glslVersion===ao?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ao?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const R=C+_+a,T=C+u+o,I=Zo(s,s.VERTEX_SHADER,R),P=Zo(s,s.FRAGMENT_SHADER,T);s.attachShader(x,I),s.attachShader(x,P),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function U(L){if(i.debug.checkShaderErrors){const j=s.getProgramInfoLog(x)||"",W=s.getShaderInfoLog(I)||"",X=s.getShaderInfoLog(P)||"",se=j.trim(),J=W.trim(),pe=X.trim();let Y=!0,be=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,I,P);else{const we=Jo(s,I,"vertex"),Ve=Jo(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+se+`
`+we+`
`+Ve)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(J===""||pe==="")&&(be=!1);be&&(L.diagnostics={runnable:Y,programLog:se,vertexShader:{log:J,prefix:_},fragmentShader:{log:pe,prefix:u}})}s.deleteShader(I),s.deleteShader(P),k=new Qs(s,x),A=Up(s,x)}let k;this.getUniforms=function(){return k===void 0&&U(this),k};let A;this.getAttributes=function(){return A===void 0&&U(this),A};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,Tp)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ap++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=P,this}let $p=0;class qp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Yp(e),t.set(e,n)),n}}class Yp{constructor(e){this.id=$p++,this.code=e,this.usedTimes=0}}function jp(i,e,t,n,s,r,a){const o=new Ll,c=new qp,l=new Set,h=[],f=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(A){return l.add(A),A===0?"uv":`uv${A}`}function _(A,b,L,j,W){const X=j.fog,se=W.geometry,J=A.isMeshStandardMaterial?j.environment:null,pe=(A.isMeshStandardMaterial?t:e).get(A.envMap||J),Y=pe&&pe.mapping===rr?pe.image.height:null,be=v[A.type];A.precision!==null&&(m=s.getMaxPrecision(A.precision),m!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",m,"instead."));const we=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ve=we!==void 0?we.length:0;let Qe=0;se.morphAttributes.position!==void 0&&(Qe=1),se.morphAttributes.normal!==void 0&&(Qe=2),se.morphAttributes.color!==void 0&&(Qe=3);let yt,ft,ee,Re;if(be){const vt=vn[be];yt=vt.vertexShader,ft=vt.fragmentShader}else yt=A.vertexShader,ft=A.fragmentShader,c.update(A),ee=c.getVertexShaderID(A),Re=c.getFragmentShaderID(A);const ve=i.getRenderTarget(),We=i.state.buffers.depth.getReversed(),Xe=W.isInstancedMesh===!0,Ze=W.isBatchedMesh===!0,gt=!!A.map,at=!!A.matcap,D=!!pe,dt=!!A.aoMap,$e=!!A.lightMap,xe=!!A.bumpMap,le=!!A.normalMap,Ue=!!A.displacementMap,ne=!!A.emissiveMap,Oe=!!A.metalnessMap,st=!!A.roughnessMap,Ye=A.anisotropy>0,w=A.clearcoat>0,M=A.dispersion>0,V=A.iridescence>0,z=A.sheen>0,te=A.transmission>0,N=Ye&&!!A.anisotropyMap,Se=w&&!!A.clearcoatMap,he=w&&!!A.clearcoatNormalMap,Pe=w&&!!A.clearcoatRoughnessMap,Le=V&&!!A.iridescenceMap,de=V&&!!A.iridescenceThicknessMap,Te=z&&!!A.sheenColorMap,je=z&&!!A.sheenRoughnessMap,Ee=!!A.specularMap,Ce=!!A.specularColorMap,nt=!!A.specularIntensityMap,O=te&&!!A.transmissionMap,_e=te&&!!A.thicknessMap,Ae=!!A.gradientMap,ze=!!A.alphaMap,me=A.alphaTest>0,oe=!!A.alphaHash,Ge=!!A.extensions;let it=jn;A.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(it=i.toneMapping);const bt={shaderID:be,shaderType:A.type,shaderName:A.name,vertexShader:yt,fragmentShader:ft,defines:A.defines,customVertexShaderID:ee,customFragmentShaderID:Re,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:m,batching:Ze,batchingColor:Ze&&W._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&W.instanceColor!==null,instancingMorph:Xe&&W.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ve===null?i.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Gi,alphaToCoverage:!!A.alphaToCoverage,map:gt,matcap:at,envMap:D,envMapMode:D&&pe.mapping,envMapCubeUVHeight:Y,aoMap:dt,lightMap:$e,bumpMap:xe,normalMap:le,displacementMap:p&&Ue,emissiveMap:ne,normalMapObjectSpace:le&&A.normalMapType===Bc,normalMapTangentSpace:le&&A.normalMapType===Ga,metalnessMap:Oe,roughnessMap:st,anisotropy:Ye,anisotropyMap:N,clearcoat:w,clearcoatMap:Se,clearcoatNormalMap:he,clearcoatRoughnessMap:Pe,dispersion:M,iridescence:V,iridescenceMap:Le,iridescenceThicknessMap:de,sheen:z,sheenColorMap:Te,sheenRoughnessMap:je,specularMap:Ee,specularColorMap:Ce,specularIntensityMap:nt,transmission:te,transmissionMap:O,thicknessMap:_e,gradientMap:Ae,opaque:A.transparent===!1&&A.blending===Oi&&A.alphaToCoverage===!1,alphaMap:ze,alphaTest:me,alphaHash:oe,combine:A.combine,mapUv:gt&&x(A.map.channel),aoMapUv:dt&&x(A.aoMap.channel),lightMapUv:$e&&x(A.lightMap.channel),bumpMapUv:xe&&x(A.bumpMap.channel),normalMapUv:le&&x(A.normalMap.channel),displacementMapUv:Ue&&x(A.displacementMap.channel),emissiveMapUv:ne&&x(A.emissiveMap.channel),metalnessMapUv:Oe&&x(A.metalnessMap.channel),roughnessMapUv:st&&x(A.roughnessMap.channel),anisotropyMapUv:N&&x(A.anisotropyMap.channel),clearcoatMapUv:Se&&x(A.clearcoatMap.channel),clearcoatNormalMapUv:he&&x(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&x(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&x(A.iridescenceMap.channel),iridescenceThicknessMapUv:de&&x(A.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&x(A.sheenColorMap.channel),sheenRoughnessMapUv:je&&x(A.sheenRoughnessMap.channel),specularMapUv:Ee&&x(A.specularMap.channel),specularColorMapUv:Ce&&x(A.specularColorMap.channel),specularIntensityMapUv:nt&&x(A.specularIntensityMap.channel),transmissionMapUv:O&&x(A.transmissionMap.channel),thicknessMapUv:_e&&x(A.thicknessMap.channel),alphaMapUv:ze&&x(A.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(le||Ye),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!se.attributes.uv&&(gt||ze),fog:!!X,useFog:A.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:We,skinning:W.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:Ve,morphTextureStride:Qe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:gt&&A.map.isVideoTexture===!0&&Mt.getTransfer(A.map.colorSpace)===Tt,decodeVideoTextureEmissive:ne&&A.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(A.emissiveMap.colorSpace)===Tt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===In,flipSided:A.side===Kt,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ge&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&A.extensions.multiDraw===!0||Ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function u(A){const b=[];if(A.shaderID?b.push(A.shaderID):(b.push(A.customVertexShaderID),b.push(A.customFragmentShaderID)),A.defines!==void 0)for(const L in A.defines)b.push(L),b.push(A.defines[L]);return A.isRawShaderMaterial===!1&&(C(b,A),R(b,A),b.push(i.outputColorSpace)),b.push(A.customProgramCacheKey),b.join()}function C(A,b){A.push(b.precision),A.push(b.outputColorSpace),A.push(b.envMapMode),A.push(b.envMapCubeUVHeight),A.push(b.mapUv),A.push(b.alphaMapUv),A.push(b.lightMapUv),A.push(b.aoMapUv),A.push(b.bumpMapUv),A.push(b.normalMapUv),A.push(b.displacementMapUv),A.push(b.emissiveMapUv),A.push(b.metalnessMapUv),A.push(b.roughnessMapUv),A.push(b.anisotropyMapUv),A.push(b.clearcoatMapUv),A.push(b.clearcoatNormalMapUv),A.push(b.clearcoatRoughnessMapUv),A.push(b.iridescenceMapUv),A.push(b.iridescenceThicknessMapUv),A.push(b.sheenColorMapUv),A.push(b.sheenRoughnessMapUv),A.push(b.specularMapUv),A.push(b.specularColorMapUv),A.push(b.specularIntensityMapUv),A.push(b.transmissionMapUv),A.push(b.thicknessMapUv),A.push(b.combine),A.push(b.fogExp2),A.push(b.sizeAttenuation),A.push(b.morphTargetsCount),A.push(b.morphAttributeCount),A.push(b.numDirLights),A.push(b.numPointLights),A.push(b.numSpotLights),A.push(b.numSpotLightMaps),A.push(b.numHemiLights),A.push(b.numRectAreaLights),A.push(b.numDirLightShadows),A.push(b.numPointLightShadows),A.push(b.numSpotLightShadows),A.push(b.numSpotLightShadowsWithMaps),A.push(b.numLightProbes),A.push(b.shadowMapType),A.push(b.toneMapping),A.push(b.numClippingPlanes),A.push(b.numClipIntersection),A.push(b.depthPacking)}function R(A,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),A.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),A.push(o.mask)}function T(A){const b=v[A.type];let L;if(b){const j=vn[b];L=fd.clone(j.uniforms)}else L=A.uniforms;return L}function I(A,b){let L;for(let j=0,W=h.length;j<W;j++){const X=h[j];if(X.cacheKey===b){L=X,++L.usedTimes;break}}return L===void 0&&(L=new Xp(i,b,A,r),h.push(L)),L}function P(A){if(--A.usedTimes===0){const b=h.indexOf(A);h[b]=h[h.length-1],h.pop(),A.destroy()}}function U(A){c.remove(A)}function k(){c.dispose()}return{getParameters:_,getProgramCacheKey:u,getUniforms:T,acquireProgram:I,releaseProgram:P,releaseShaderCache:U,programs:h,dispose:k}}function Zp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Kp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function il(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function sl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,p,m,v,x,_){let u=i[e];return u===void 0?(u={id:f.id,object:f,geometry:p,material:m,groupOrder:v,renderOrder:f.renderOrder,z:x,group:_},i[e]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=m,u.groupOrder=v,u.renderOrder=f.renderOrder,u.z=x,u.group=_),e++,u}function o(f,p,m,v,x,_){const u=a(f,p,m,v,x,_);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):t.push(u)}function c(f,p,m,v,x,_){const u=a(f,p,m,v,x,_);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):t.unshift(u)}function l(f,p){t.length>1&&t.sort(f||Kp),n.length>1&&n.sort(p||il),s.length>1&&s.sort(p||il)}function h(){for(let f=e,p=i.length;f<p;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Jp(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new sl,i.set(n,[a])):s>=r.length?(a=new sl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Qp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new ht};break;case"SpotLight":t={position:new G,direction:new G,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function em(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let tm=0;function nm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function im(i){const e=new Qp,t=em(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);const s=new G,r=new Lt,a=new Lt;function o(l){let h=0,f=0,p=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let m=0,v=0,x=0,_=0,u=0,C=0,R=0,T=0,I=0,P=0,U=0;l.sort(nm);for(let A=0,b=l.length;A<b;A++){const L=l[A],j=L.color,W=L.intensity,X=L.distance,se=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=j.r*W,f+=j.g*W,p+=j.b*W;else if(L.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(L.sh.coefficients[J],W);U++}else if(L.isDirectionalLight){const J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const pe=L.shadow,Y=t.get(L);Y.shadowIntensity=pe.intensity,Y.shadowBias=pe.bias,Y.shadowNormalBias=pe.normalBias,Y.shadowRadius=pe.radius,Y.shadowMapSize=pe.mapSize,n.directionalShadow[m]=Y,n.directionalShadowMap[m]=se,n.directionalShadowMatrix[m]=L.shadow.matrix,C++}n.directional[m]=J,m++}else if(L.isSpotLight){const J=e.get(L);J.position.setFromMatrixPosition(L.matrixWorld),J.color.copy(j).multiplyScalar(W),J.distance=X,J.coneCos=Math.cos(L.angle),J.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),J.decay=L.decay,n.spot[x]=J;const pe=L.shadow;if(L.map&&(n.spotLightMap[I]=L.map,I++,pe.updateMatrices(L),L.castShadow&&P++),n.spotLightMatrix[x]=pe.matrix,L.castShadow){const Y=t.get(L);Y.shadowIntensity=pe.intensity,Y.shadowBias=pe.bias,Y.shadowNormalBias=pe.normalBias,Y.shadowRadius=pe.radius,Y.shadowMapSize=pe.mapSize,n.spotShadow[x]=Y,n.spotShadowMap[x]=se,T++}x++}else if(L.isRectAreaLight){const J=e.get(L);J.color.copy(j).multiplyScalar(W),J.halfWidth.set(L.width*.5,0,0),J.halfHeight.set(0,L.height*.5,0),n.rectArea[_]=J,_++}else if(L.isPointLight){const J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),J.distance=L.distance,J.decay=L.decay,L.castShadow){const pe=L.shadow,Y=t.get(L);Y.shadowIntensity=pe.intensity,Y.shadowBias=pe.bias,Y.shadowNormalBias=pe.normalBias,Y.shadowRadius=pe.radius,Y.shadowMapSize=pe.mapSize,Y.shadowCameraNear=pe.camera.near,Y.shadowCameraFar=pe.camera.far,n.pointShadow[v]=Y,n.pointShadowMap[v]=se,n.pointShadowMatrix[v]=L.shadow.matrix,R++}n.point[v]=J,v++}else if(L.isHemisphereLight){const J=e.get(L);J.skyColor.copy(L.color).multiplyScalar(W),J.groundColor.copy(L.groundColor).multiplyScalar(W),n.hemi[u]=J,u++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=p;const k=n.hash;(k.directionalLength!==m||k.pointLength!==v||k.spotLength!==x||k.rectAreaLength!==_||k.hemiLength!==u||k.numDirectionalShadows!==C||k.numPointShadows!==R||k.numSpotShadows!==T||k.numSpotMaps!==I||k.numLightProbes!==U)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=_,n.point.length=v,n.hemi.length=u,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=T+I-P,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=U,k.directionalLength=m,k.pointLength=v,k.spotLength=x,k.rectAreaLength=_,k.hemiLength=u,k.numDirectionalShadows=C,k.numPointShadows=R,k.numSpotShadows=T,k.numSpotMaps=I,k.numLightProbes=U,n.version=tm++)}function c(l,h){let f=0,p=0,m=0,v=0,x=0;const _=h.matrixWorldInverse;for(let u=0,C=l.length;u<C;u++){const R=l[u];if(R.isDirectionalLight){const T=n.directional[f];T.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(_),f++}else if(R.isSpotLight){const T=n.spot[m];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(_),T.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(_),m++}else if(R.isRectAreaLight){const T=n.rectArea[v];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(_),a.identity(),r.copy(R.matrixWorld),r.premultiply(_),a.extractRotation(r),T.halfWidth.set(R.width*.5,0,0),T.halfHeight.set(0,R.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(R.isPointLight){const T=n.point[p];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(_),p++}else if(R.isHemisphereLight){const T=n.hemi[x];T.direction.setFromMatrixPosition(R.matrixWorld),T.direction.transformDirection(_),x++}}}return{setup:o,setupView:c,state:n}}function rl(i){const e=new im(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function sm(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new rl(i),e.set(s,[o])):r>=a.length?(o=new rl(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const rm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,am=`uniform sampler2D shadow_pass;
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
}`;function om(i,e,t){let n=new $a;const s=new _t,r=new _t,a=new It,o=new bd({depthPacking:Oc}),c=new Td,l={},h=t.maxTextureSize,f={[Zn]:Kt,[Kt]:Zn,[In]:In},p=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:rm,fragmentShader:am}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const v=new Wt;v.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ot(v,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vl;let u=this.type;this.render=function(P,U,k){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;const A=i.getRenderTarget(),b=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),j=i.state;j.setBlending(Yn),j.buffers.depth.getReversed()?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const W=u!==Dn&&this.type===Dn,X=u===Dn&&this.type!==Dn;for(let se=0,J=P.length;se<J;se++){const pe=P[se],Y=pe.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const be=Y.getFrameExtents();if(s.multiply(be),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/be.x),s.x=r.x*be.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/be.y),s.y=r.y*be.y,Y.mapSize.y=r.y)),Y.map===null||W===!0||X===!0){const Ve=this.type!==Dn?{minFilter:pn,magFilter:pn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new mi(s.x,s.y,Ve),Y.map.texture.name=pe.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const we=Y.getViewportCount();for(let Ve=0;Ve<we;Ve++){const Qe=Y.getViewport(Ve);a.set(r.x*Qe.x,r.y*Qe.y,r.x*Qe.z,r.y*Qe.w),j.viewport(a),Y.updateMatrices(pe,Ve),n=Y.getFrustum(),T(U,k,Y.camera,pe,this.type)}Y.isPointLightShadow!==!0&&this.type===Dn&&C(Y,k),Y.needsUpdate=!1}u=this.type,_.needsUpdate=!1,i.setRenderTarget(A,b,L)};function C(P,U){const k=e.update(x);p.defines.VSM_SAMPLES!==P.blurSamples&&(p.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new mi(s.x,s.y)),p.uniforms.shadow_pass.value=P.map.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(U,null,k,p,x,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(U,null,k,m,x,null)}function R(P,U,k,A){let b=null;const L=k.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)b=L;else if(b=k.isPointLight===!0?c:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const j=b.uuid,W=U.uuid;let X=l[j];X===void 0&&(X={},l[j]=X);let se=X[W];se===void 0&&(se=b.clone(),X[W]=se,U.addEventListener("dispose",I)),b=se}if(b.visible=U.visible,b.wireframe=U.wireframe,A===Dn?b.side=U.shadowSide!==null?U.shadowSide:U.side:b.side=U.shadowSide!==null?U.shadowSide:f[U.side],b.alphaMap=U.alphaMap,b.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,b.map=U.map,b.clipShadows=U.clipShadows,b.clippingPlanes=U.clippingPlanes,b.clipIntersection=U.clipIntersection,b.displacementMap=U.displacementMap,b.displacementScale=U.displacementScale,b.displacementBias=U.displacementBias,b.wireframeLinewidth=U.wireframeLinewidth,b.linewidth=U.linewidth,k.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const j=i.properties.get(b);j.light=k}return b}function T(P,U,k,A,b){if(P.visible===!1)return;if(P.layers.test(U.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&b===Dn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,P.matrixWorld);const W=e.update(P),X=P.material;if(Array.isArray(X)){const se=W.groups;for(let J=0,pe=se.length;J<pe;J++){const Y=se[J],be=X[Y.materialIndex];if(be&&be.visible){const we=R(P,be,A,b);P.onBeforeShadow(i,P,U,k,W,we,Y),i.renderBufferDirect(k,null,W,we,P,Y),P.onAfterShadow(i,P,U,k,W,we,Y)}}}else if(X.visible){const se=R(P,X,A,b);P.onBeforeShadow(i,P,U,k,W,se,null),i.renderBufferDirect(k,null,W,se,P,null),P.onAfterShadow(i,P,U,k,W,se,null)}}const j=P.children;for(let W=0,X=j.length;W<X;W++)T(j[W],U,k,A,b)}function I(P){P.target.removeEventListener("dispose",I);for(const k in l){const A=l[k],b=P.target.uuid;b in A&&(A[b].dispose(),delete A[b])}}}const lm={[jr]:Zr,[Kr]:ea,[Jr]:ta,[ki]:Qr,[Zr]:jr,[ea]:Kr,[ta]:Jr,[Qr]:ki};function cm(i,e){function t(){let O=!1;const _e=new It;let Ae=null;const ze=new It(0,0,0,0);return{setMask:function(me){Ae!==me&&!O&&(i.colorMask(me,me,me,me),Ae=me)},setLocked:function(me){O=me},setClear:function(me,oe,Ge,it,bt){bt===!0&&(me*=it,oe*=it,Ge*=it),_e.set(me,oe,Ge,it),ze.equals(_e)===!1&&(i.clearColor(me,oe,Ge,it),ze.copy(_e))},reset:function(){O=!1,Ae=null,ze.set(-1,0,0,0)}}}function n(){let O=!1,_e=!1,Ae=null,ze=null,me=null;return{setReversed:function(oe){if(_e!==oe){const Ge=e.get("EXT_clip_control");oe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),_e=oe;const it=me;me=null,this.setClear(it)}},getReversed:function(){return _e},setTest:function(oe){oe?ve(i.DEPTH_TEST):We(i.DEPTH_TEST)},setMask:function(oe){Ae!==oe&&!O&&(i.depthMask(oe),Ae=oe)},setFunc:function(oe){if(_e&&(oe=lm[oe]),ze!==oe){switch(oe){case jr:i.depthFunc(i.NEVER);break;case Zr:i.depthFunc(i.ALWAYS);break;case Kr:i.depthFunc(i.LESS);break;case ki:i.depthFunc(i.LEQUAL);break;case Jr:i.depthFunc(i.EQUAL);break;case Qr:i.depthFunc(i.GEQUAL);break;case ea:i.depthFunc(i.GREATER);break;case ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ze=oe}},setLocked:function(oe){O=oe},setClear:function(oe){me!==oe&&(_e&&(oe=1-oe),i.clearDepth(oe),me=oe)},reset:function(){O=!1,Ae=null,ze=null,me=null,_e=!1}}}function s(){let O=!1,_e=null,Ae=null,ze=null,me=null,oe=null,Ge=null,it=null,bt=null;return{setTest:function(vt){O||(vt?ve(i.STENCIL_TEST):We(i.STENCIL_TEST))},setMask:function(vt){_e!==vt&&!O&&(i.stencilMask(vt),_e=vt)},setFunc:function(vt,on,nn){(Ae!==vt||ze!==on||me!==nn)&&(i.stencilFunc(vt,on,nn),Ae=vt,ze=on,me=nn)},setOp:function(vt,on,nn){(oe!==vt||Ge!==on||it!==nn)&&(i.stencilOp(vt,on,nn),oe=vt,Ge=on,it=nn)},setLocked:function(vt){O=vt},setClear:function(vt){bt!==vt&&(i.clearStencil(vt),bt=vt)},reset:function(){O=!1,_e=null,Ae=null,ze=null,me=null,oe=null,Ge=null,it=null,bt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},f={},p=new WeakMap,m=[],v=null,x=!1,_=null,u=null,C=null,R=null,T=null,I=null,P=null,U=new ht(0,0,0),k=0,A=!1,b=null,L=null,j=null,W=null,X=null;const se=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,pe=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(Y)[1]),J=pe>=1):Y.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),J=pe>=2);let be=null,we={};const Ve=i.getParameter(i.SCISSOR_BOX),Qe=i.getParameter(i.VIEWPORT),yt=new It().fromArray(Ve),ft=new It().fromArray(Qe);function ee(O,_e,Ae,ze){const me=new Uint8Array(4),oe=i.createTexture();i.bindTexture(O,oe),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<Ae;Ge++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(_e,0,i.RGBA,1,1,ze,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(_e+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return oe}const Re={};Re[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),Re[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Re[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ve(i.DEPTH_TEST),a.setFunc(ki),xe(!1),le(eo),ve(i.CULL_FACE),dt(Yn);function ve(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function We(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Xe(O,_e){return f[O]!==_e?(i.bindFramebuffer(O,_e),f[O]=_e,O===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=_e),O===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ze(O,_e){let Ae=m,ze=!1;if(O){Ae=p.get(_e),Ae===void 0&&(Ae=[],p.set(_e,Ae));const me=O.textures;if(Ae.length!==me.length||Ae[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Ge=me.length;oe<Ge;oe++)Ae[oe]=i.COLOR_ATTACHMENT0+oe;Ae.length=me.length,ze=!0}}else Ae[0]!==i.BACK&&(Ae[0]=i.BACK,ze=!0);ze&&i.drawBuffers(Ae)}function gt(O){return v!==O?(i.useProgram(O),v=O,!0):!1}const at={[ci]:i.FUNC_ADD,[cc]:i.FUNC_SUBTRACT,[dc]:i.FUNC_REVERSE_SUBTRACT};at[uc]=i.MIN,at[hc]=i.MAX;const D={[fc]:i.ZERO,[pc]:i.ONE,[mc]:i.SRC_COLOR,[qr]:i.SRC_ALPHA,[yc]:i.SRC_ALPHA_SATURATE,[xc]:i.DST_COLOR,[_c]:i.DST_ALPHA,[gc]:i.ONE_MINUS_SRC_COLOR,[Yr]:i.ONE_MINUS_SRC_ALPHA,[Mc]:i.ONE_MINUS_DST_COLOR,[vc]:i.ONE_MINUS_DST_ALPHA,[Sc]:i.CONSTANT_COLOR,[Ec]:i.ONE_MINUS_CONSTANT_COLOR,[bc]:i.CONSTANT_ALPHA,[Tc]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(O,_e,Ae,ze,me,oe,Ge,it,bt,vt){if(O===Yn){x===!0&&(We(i.BLEND),x=!1);return}if(x===!1&&(ve(i.BLEND),x=!0),O!==lc){if(O!==_||vt!==A){if((u!==ci||T!==ci)&&(i.blendEquation(i.FUNC_ADD),u=ci,T=ci),vt)switch(O){case Oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case to:i.blendFunc(i.ONE,i.ONE);break;case no:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case io:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case to:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case no:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case io:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}C=null,R=null,I=null,P=null,U.set(0,0,0),k=0,_=O,A=vt}return}me=me||_e,oe=oe||Ae,Ge=Ge||ze,(_e!==u||me!==T)&&(i.blendEquationSeparate(at[_e],at[me]),u=_e,T=me),(Ae!==C||ze!==R||oe!==I||Ge!==P)&&(i.blendFuncSeparate(D[Ae],D[ze],D[oe],D[Ge]),C=Ae,R=ze,I=oe,P=Ge),(it.equals(U)===!1||bt!==k)&&(i.blendColor(it.r,it.g,it.b,bt),U.copy(it),k=bt),_=O,A=!1}function $e(O,_e){O.side===In?We(i.CULL_FACE):ve(i.CULL_FACE);let Ae=O.side===Kt;_e&&(Ae=!Ae),xe(Ae),O.blending===Oi&&O.transparent===!1?dt(Yn):dt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const ze=O.stencilWrite;o.setTest(ze),ze&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ne(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):We(i.SAMPLE_ALPHA_TO_COVERAGE)}function xe(O){b!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),b=O)}function le(O){O!==rc?(ve(i.CULL_FACE),O!==L&&(O===eo?i.cullFace(i.BACK):O===ac?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):We(i.CULL_FACE),L=O}function Ue(O){O!==j&&(J&&i.lineWidth(O),j=O)}function ne(O,_e,Ae){O?(ve(i.POLYGON_OFFSET_FILL),(W!==_e||X!==Ae)&&(i.polygonOffset(_e,Ae),W=_e,X=Ae)):We(i.POLYGON_OFFSET_FILL)}function Oe(O){O?ve(i.SCISSOR_TEST):We(i.SCISSOR_TEST)}function st(O){O===void 0&&(O=i.TEXTURE0+se-1),be!==O&&(i.activeTexture(O),be=O)}function Ye(O,_e,Ae){Ae===void 0&&(be===null?Ae=i.TEXTURE0+se-1:Ae=be);let ze=we[Ae];ze===void 0&&(ze={type:void 0,texture:void 0},we[Ae]=ze),(ze.type!==O||ze.texture!==_e)&&(be!==Ae&&(i.activeTexture(Ae),be=Ae),i.bindTexture(O,_e||Re[O]),ze.type=O,ze.texture=_e)}function w(){const O=we[be];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function z(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function N(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(O){yt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),yt.copy(O))}function je(O){ft.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ft.copy(O))}function Ee(O,_e){let Ae=l.get(_e);Ae===void 0&&(Ae=new WeakMap,l.set(_e,Ae));let ze=Ae.get(O);ze===void 0&&(ze=i.getUniformBlockIndex(_e,O.name),Ae.set(O,ze))}function Ce(O,_e){const ze=l.get(_e).get(O);c.get(_e)!==ze&&(i.uniformBlockBinding(_e,ze,O.__bindingPointIndex),c.set(_e,ze))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},be=null,we={},f={},p=new WeakMap,m=[],v=null,x=!1,_=null,u=null,C=null,R=null,T=null,I=null,P=null,U=new ht(0,0,0),k=0,A=!1,b=null,L=null,j=null,W=null,X=null,yt.set(0,0,i.canvas.width,i.canvas.height),ft.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ve,disable:We,bindFramebuffer:Xe,drawBuffers:Ze,useProgram:gt,setBlending:dt,setMaterial:$e,setFlipSided:xe,setCullFace:le,setLineWidth:Ue,setPolygonOffset:ne,setScissorTest:Oe,activeTexture:st,bindTexture:Ye,unbindTexture:w,compressedTexImage2D:M,compressedTexImage3D:V,texImage2D:Le,texImage3D:de,updateUBOMapping:Ee,uniformBlockBinding:Ce,texStorage2D:he,texStorage3D:Pe,texSubImage2D:z,texSubImage3D:te,compressedTexSubImage2D:N,compressedTexSubImage3D:Se,scissor:Te,viewport:je,reset:nt}}function dm(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new _t,h=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,M){return m?new OffscreenCanvas(w,M):nr("canvas")}function x(w,M,V){let z=1;const te=Ye(w);if((te.width>V||te.height>V)&&(z=V/Math.max(te.width,te.height)),z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const N=Math.floor(z*te.width),Se=Math.floor(z*te.height);f===void 0&&(f=v(N,Se));const he=M?v(N,Se):f;return he.width=N,he.height=Se,he.getContext("2d").drawImage(w,0,0,N,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+N+"x"+Se+")."),he}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),w;return w}function _(w){return w.generateMipmaps}function u(w){i.generateMipmap(w)}function C(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(w,M,V,z,te=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let N=M;if(M===i.RED&&(V===i.FLOAT&&(N=i.R32F),V===i.HALF_FLOAT&&(N=i.R16F),V===i.UNSIGNED_BYTE&&(N=i.R8)),M===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(N=i.R8UI),V===i.UNSIGNED_SHORT&&(N=i.R16UI),V===i.UNSIGNED_INT&&(N=i.R32UI),V===i.BYTE&&(N=i.R8I),V===i.SHORT&&(N=i.R16I),V===i.INT&&(N=i.R32I)),M===i.RG&&(V===i.FLOAT&&(N=i.RG32F),V===i.HALF_FLOAT&&(N=i.RG16F),V===i.UNSIGNED_BYTE&&(N=i.RG8)),M===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(N=i.RG8UI),V===i.UNSIGNED_SHORT&&(N=i.RG16UI),V===i.UNSIGNED_INT&&(N=i.RG32UI),V===i.BYTE&&(N=i.RG8I),V===i.SHORT&&(N=i.RG16I),V===i.INT&&(N=i.RG32I)),M===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(N=i.RGB8UI),V===i.UNSIGNED_SHORT&&(N=i.RGB16UI),V===i.UNSIGNED_INT&&(N=i.RGB32UI),V===i.BYTE&&(N=i.RGB8I),V===i.SHORT&&(N=i.RGB16I),V===i.INT&&(N=i.RGB32I)),M===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(N=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(N=i.RGBA16UI),V===i.UNSIGNED_INT&&(N=i.RGBA32UI),V===i.BYTE&&(N=i.RGBA8I),V===i.SHORT&&(N=i.RGBA16I),V===i.INT&&(N=i.RGBA32I)),M===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(N=i.RGB9_E5),M===i.RGBA){const Se=te?er:Mt.getTransfer(z);V===i.FLOAT&&(N=i.RGBA32F),V===i.HALF_FLOAT&&(N=i.RGBA16F),V===i.UNSIGNED_BYTE&&(N=Se===Tt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(N=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(N=i.RGB5_A1)}return(N===i.R16F||N===i.R32F||N===i.RG16F||N===i.RG32F||N===i.RGBA16F||N===i.RGBA32F)&&e.get("EXT_color_buffer_float"),N}function T(w,M){let V;return w?M===null||M===pi||M===ds?V=i.DEPTH24_STENCIL8:M===Un?V=i.DEPTH32F_STENCIL8:M===cs&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===pi||M===ds?V=i.DEPTH_COMPONENT24:M===Un?V=i.DEPTH_COMPONENT32F:M===cs&&(V=i.DEPTH_COMPONENT16),V}function I(w,M){return _(w)===!0||w.isFramebufferTexture&&w.minFilter!==pn&&w.minFilter!==xn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function P(w){const M=w.target;M.removeEventListener("dispose",P),k(M),M.isVideoTexture&&h.delete(M)}function U(w){const M=w.target;M.removeEventListener("dispose",U),b(M)}function k(w){const M=n.get(w);if(M.__webglInit===void 0)return;const V=w.source,z=p.get(V);if(z){const te=z[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&A(w),Object.keys(z).length===0&&p.delete(V)}n.remove(w)}function A(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const V=w.source,z=p.get(V);delete z[M.__cacheKey],a.memory.textures--}function b(w){const M=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(M.__webglFramebuffer[z]))for(let te=0;te<M.__webglFramebuffer[z].length;te++)i.deleteFramebuffer(M.__webglFramebuffer[z][te]);else i.deleteFramebuffer(M.__webglFramebuffer[z]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[z])}else{if(Array.isArray(M.__webglFramebuffer))for(let z=0;z<M.__webglFramebuffer.length;z++)i.deleteFramebuffer(M.__webglFramebuffer[z]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let z=0;z<M.__webglColorRenderbuffer.length;z++)M.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[z]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=w.textures;for(let z=0,te=V.length;z<te;z++){const N=n.get(V[z]);N.__webglTexture&&(i.deleteTexture(N.__webglTexture),a.memory.textures--),n.remove(V[z])}n.remove(w)}let L=0;function j(){L=0}function W(){const w=L;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),L+=1,w}function X(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function se(w,M){const V=n.get(w);if(w.isVideoTexture&&Oe(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&V.__version!==w.version){const z=w.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(V,w,M);return}}else w.isExternalTexture&&(V.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+M)}function J(w,M){const V=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){Re(V,w,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+M)}function pe(w,M){const V=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){Re(V,w,M);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+M)}function Y(w,M){const V=n.get(w);if(w.version>0&&V.__version!==w.version){ve(V,w,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+M)}const be={[sa]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[ra]:i.MIRRORED_REPEAT},we={[pn]:i.NEAREST,[Nc]:i.NEAREST_MIPMAP_NEAREST,[Ss]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[hr]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},Ve={[zc]:i.NEVER,[Xc]:i.ALWAYS,[kc]:i.LESS,[Rl]:i.LEQUAL,[Hc]:i.EQUAL,[Wc]:i.GEQUAL,[Vc]:i.GREATER,[Gc]:i.NOTEQUAL};function Qe(w,M){if(M.type===Un&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===xn||M.magFilter===hr||M.magFilter===Ss||M.magFilter===hi||M.minFilter===xn||M.minFilter===hr||M.minFilter===Ss||M.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,be[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,be[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,be[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,we[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,we[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ve[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===pn||M.minFilter!==Ss&&M.minFilter!==hi||M.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function yt(w,M){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",P));const z=M.source;let te=p.get(z);te===void 0&&(te={},p.set(z,te));const N=X(M);if(N!==w.__cacheKey){te[N]===void 0&&(te[N]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),te[N].usedTimes++;const Se=te[w.__cacheKey];Se!==void 0&&(te[w.__cacheKey].usedTimes--,Se.usedTimes===0&&A(M)),w.__cacheKey=N,w.__webglTexture=te[N].texture}return V}function ft(w,M,V){return Math.floor(Math.floor(w/V)/M)}function ee(w,M,V,z){const N=w.updateRanges;if(N.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,V,z,M.data);else{N.sort((de,Te)=>de.start-Te.start);let Se=0;for(let de=1;de<N.length;de++){const Te=N[Se],je=N[de],Ee=Te.start+Te.count,Ce=ft(je.start,M.width,4),nt=ft(Te.start,M.width,4);je.start<=Ee+1&&Ce===nt&&ft(je.start+je.count-1,M.width,4)===Ce?Te.count=Math.max(Te.count,je.start+je.count-Te.start):(++Se,N[Se]=je)}N.length=Se+1;const he=i.getParameter(i.UNPACK_ROW_LENGTH),Pe=i.getParameter(i.UNPACK_SKIP_PIXELS),Le=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let de=0,Te=N.length;de<Te;de++){const je=N[de],Ee=Math.floor(je.start/4),Ce=Math.ceil(je.count/4),nt=Ee%M.width,O=Math.floor(Ee/M.width),_e=Ce,Ae=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,nt,O,_e,Ae,V,z,M.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,he),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Le)}}function Re(w,M,V){let z=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(z=i.TEXTURE_3D);const te=yt(w,M),N=M.source;t.bindTexture(z,w.__webglTexture,i.TEXTURE0+V);const Se=n.get(N);if(N.version!==Se.__version||te===!0){t.activeTexture(i.TEXTURE0+V);const he=Mt.getPrimaries(Mt.workingColorSpace),Pe=M.colorSpace===qn?null:Mt.getPrimaries(M.colorSpace),Le=M.colorSpace===qn||he===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let de=x(M.image,!1,s.maxTextureSize);de=st(M,de);const Te=r.convert(M.format,M.colorSpace),je=r.convert(M.type);let Ee=R(M.internalFormat,Te,je,M.colorSpace,M.isVideoTexture);Qe(z,M);let Ce;const nt=M.mipmaps,O=M.isVideoTexture!==!0,_e=Se.__version===void 0||te===!0,Ae=N.dataReady,ze=I(M,de);if(M.isDepthTexture)Ee=T(M.format===hs,M.type),_e&&(O?t.texStorage2D(i.TEXTURE_2D,1,Ee,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Ee,de.width,de.height,0,Te,je,null));else if(M.isDataTexture)if(nt.length>0){O&&_e&&t.texStorage2D(i.TEXTURE_2D,ze,Ee,nt[0].width,nt[0].height);for(let me=0,oe=nt.length;me<oe;me++)Ce=nt[me],O?Ae&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Ce.width,Ce.height,Te,je,Ce.data):t.texImage2D(i.TEXTURE_2D,me,Ee,Ce.width,Ce.height,0,Te,je,Ce.data);M.generateMipmaps=!1}else O?(_e&&t.texStorage2D(i.TEXTURE_2D,ze,Ee,de.width,de.height),Ae&&ee(M,de,Te,je)):t.texImage2D(i.TEXTURE_2D,0,Ee,de.width,de.height,0,Te,je,de.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){O&&_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ze,Ee,nt[0].width,nt[0].height,de.depth);for(let me=0,oe=nt.length;me<oe;me++)if(Ce=nt[me],M.format!==fn)if(Te!==null)if(O){if(Ae)if(M.layerUpdates.size>0){const Ge=No(Ce.width,Ce.height,M.format,M.type);for(const it of M.layerUpdates){const bt=Ce.data.subarray(it*Ge/Ce.data.BYTES_PER_ELEMENT,(it+1)*Ge/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,it,Ce.width,Ce.height,1,Te,bt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Ce.width,Ce.height,de.depth,Te,Ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,Ee,Ce.width,Ce.height,de.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?Ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Ce.width,Ce.height,de.depth,Te,je,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,Ee,Ce.width,Ce.height,de.depth,0,Te,je,Ce.data)}else{O&&_e&&t.texStorage2D(i.TEXTURE_2D,ze,Ee,nt[0].width,nt[0].height);for(let me=0,oe=nt.length;me<oe;me++)Ce=nt[me],M.format!==fn?Te!==null?O?Ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,Ce.width,Ce.height,Te,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,me,Ee,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?Ae&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Ce.width,Ce.height,Te,je,Ce.data):t.texImage2D(i.TEXTURE_2D,me,Ee,Ce.width,Ce.height,0,Te,je,Ce.data)}else if(M.isDataArrayTexture)if(O){if(_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ze,Ee,de.width,de.height,de.depth),Ae)if(M.layerUpdates.size>0){const me=No(de.width,de.height,M.format,M.type);for(const oe of M.layerUpdates){const Ge=de.data.subarray(oe*me/de.data.BYTES_PER_ELEMENT,(oe+1)*me/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,de.width,de.height,1,Te,je,Ge)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Te,je,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,de.width,de.height,de.depth,0,Te,je,de.data);else if(M.isData3DTexture)O?(_e&&t.texStorage3D(i.TEXTURE_3D,ze,Ee,de.width,de.height,de.depth),Ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Te,je,de.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,de.width,de.height,de.depth,0,Te,je,de.data);else if(M.isFramebufferTexture){if(_e)if(O)t.texStorage2D(i.TEXTURE_2D,ze,Ee,de.width,de.height);else{let me=de.width,oe=de.height;for(let Ge=0;Ge<ze;Ge++)t.texImage2D(i.TEXTURE_2D,Ge,Ee,me,oe,0,Te,je,null),me>>=1,oe>>=1}}else if(nt.length>0){if(O&&_e){const me=Ye(nt[0]);t.texStorage2D(i.TEXTURE_2D,ze,Ee,me.width,me.height)}for(let me=0,oe=nt.length;me<oe;me++)Ce=nt[me],O?Ae&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Te,je,Ce):t.texImage2D(i.TEXTURE_2D,me,Ee,Te,je,Ce);M.generateMipmaps=!1}else if(O){if(_e){const me=Ye(de);t.texStorage2D(i.TEXTURE_2D,ze,Ee,me.width,me.height)}Ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,je,de)}else t.texImage2D(i.TEXTURE_2D,0,Ee,Te,je,de);_(M)&&u(z),Se.__version=N.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ve(w,M,V){if(M.image.length!==6)return;const z=yt(w,M),te=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+V);const N=n.get(te);if(te.version!==N.__version||z===!0){t.activeTexture(i.TEXTURE0+V);const Se=Mt.getPrimaries(Mt.workingColorSpace),he=M.colorSpace===qn?null:Mt.getPrimaries(M.colorSpace),Pe=M.colorSpace===qn||Se===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Le=M.isCompressedTexture||M.image[0].isCompressedTexture,de=M.image[0]&&M.image[0].isDataTexture,Te=[];for(let oe=0;oe<6;oe++)!Le&&!de?Te[oe]=x(M.image[oe],!0,s.maxCubemapSize):Te[oe]=de?M.image[oe].image:M.image[oe],Te[oe]=st(M,Te[oe]);const je=Te[0],Ee=r.convert(M.format,M.colorSpace),Ce=r.convert(M.type),nt=R(M.internalFormat,Ee,Ce,M.colorSpace),O=M.isVideoTexture!==!0,_e=N.__version===void 0||z===!0,Ae=te.dataReady;let ze=I(M,je);Qe(i.TEXTURE_CUBE_MAP,M);let me;if(Le){O&&_e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ze,nt,je.width,je.height);for(let oe=0;oe<6;oe++){me=Te[oe].mipmaps;for(let Ge=0;Ge<me.length;Ge++){const it=me[Ge];M.format!==fn?Ee!==null?O?Ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ge,0,0,it.width,it.height,Ee,it.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ge,nt,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?Ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ge,0,0,it.width,it.height,Ee,Ce,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ge,nt,it.width,it.height,0,Ee,Ce,it.data)}}}else{if(me=M.mipmaps,O&&_e){me.length>0&&ze++;const oe=Ye(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ze,nt,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(de){O?Ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Te[oe].width,Te[oe].height,Ee,Ce,Te[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,nt,Te[oe].width,Te[oe].height,0,Ee,Ce,Te[oe].data);for(let Ge=0;Ge<me.length;Ge++){const bt=me[Ge].image[oe].image;O?Ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ge+1,0,0,bt.width,bt.height,Ee,Ce,bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ge+1,nt,bt.width,bt.height,0,Ee,Ce,bt.data)}}else{O?Ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ee,Ce,Te[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,nt,Ee,Ce,Te[oe]);for(let Ge=0;Ge<me.length;Ge++){const it=me[Ge];O?Ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ge+1,0,0,Ee,Ce,it.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ge+1,nt,Ee,Ce,it.image[oe])}}}_(M)&&u(i.TEXTURE_CUBE_MAP),N.__version=te.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function We(w,M,V,z,te,N){const Se=r.convert(V.format,V.colorSpace),he=r.convert(V.type),Pe=R(V.internalFormat,Se,he,V.colorSpace),Le=n.get(M),de=n.get(V);if(de.__renderTarget=M,!Le.__hasExternalTextures){const Te=Math.max(1,M.width>>N),je=Math.max(1,M.height>>N);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,N,Pe,Te,je,M.depth,0,Se,he,null):t.texImage2D(te,N,Pe,Te,je,0,Se,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ne(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,te,de.__webglTexture,0,Ue(M)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,te,de.__webglTexture,N),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(w,M,V){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){const z=M.depthTexture,te=z&&z.isDepthTexture?z.type:null,N=T(M.stencilBuffer,te),Se=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=Ue(M);ne(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,N,M.width,M.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,N,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,N,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,w)}else{const z=M.textures;for(let te=0;te<z.length;te++){const N=z[te],Se=r.convert(N.format,N.colorSpace),he=r.convert(N.type),Pe=R(N.internalFormat,Se,he,N.colorSpace),Le=Ue(M);V&&ne(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,Pe,M.width,M.height):ne(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,Pe,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ze(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=n.get(M.depthTexture);z.__renderTarget=M,(!z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),se(M.depthTexture,0);const te=z.__webglTexture,N=Ue(M);if(M.depthTexture.format===us)ne(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,N):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(M.depthTexture.format===hs)ne(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,N):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function gt(w){const M=n.get(w),V=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const z=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),z){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,z.removeEventListener("dispose",te)};z.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=z}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const z=w.texture.mipmaps;z&&z.length>0?Ze(M.__webglFramebuffer[0],w):Ze(M.__webglFramebuffer,w)}else if(V){M.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[z]),M.__webglDepthbuffer[z]===void 0)M.__webglDepthbuffer[z]=i.createRenderbuffer(),Xe(M.__webglDepthbuffer[z],w,!1);else{const te=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,N=M.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,N),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,N)}}else{const z=w.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Xe(M.__webglDepthbuffer,w,!1);else{const te=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,N=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,N),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,N)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function at(w,M,V){const z=n.get(w);M!==void 0&&We(z.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&gt(w)}function D(w){const M=w.texture,V=n.get(w),z=n.get(M);w.addEventListener("dispose",U);const te=w.textures,N=w.isWebGLCubeRenderTarget===!0,Se=te.length>1;if(Se||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=M.version,a.memory.textures++),N){V.__webglFramebuffer=[];for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[he]=[];for(let Pe=0;Pe<M.mipmaps.length;Pe++)V.__webglFramebuffer[he][Pe]=i.createFramebuffer()}else V.__webglFramebuffer[he]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)V.__webglFramebuffer[he]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Se)for(let he=0,Pe=te.length;he<Pe;he++){const Le=n.get(te[he]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&ne(w)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let he=0;he<te.length;he++){const Pe=te[he];V.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[he]);const Le=r.convert(Pe.format,Pe.colorSpace),de=r.convert(Pe.type),Te=R(Pe.internalFormat,Le,de,Pe.colorSpace,w.isXRRenderTarget===!0),je=Ue(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,je,Te,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,V.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Xe(V.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(N){t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,M);for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0)for(let Pe=0;Pe<M.mipmaps.length;Pe++)We(V.__webglFramebuffer[he][Pe],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe);else We(V.__webglFramebuffer[he],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);_(M)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let he=0,Pe=te.length;he<Pe;he++){const Le=te[he],de=n.get(Le);let Te=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Te=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,de.__webglTexture),Qe(Te,Le),We(V.__webglFramebuffer,w,Le,i.COLOR_ATTACHMENT0+he,Te,0),_(Le)&&u(Te)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(he=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,z.__webglTexture),Qe(he,M),M.mipmaps&&M.mipmaps.length>0)for(let Pe=0;Pe<M.mipmaps.length;Pe++)We(V.__webglFramebuffer[Pe],w,M,i.COLOR_ATTACHMENT0,he,Pe);else We(V.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,he,0);_(M)&&u(he),t.unbindTexture()}w.depthBuffer&&gt(w)}function dt(w){const M=w.textures;for(let V=0,z=M.length;V<z;V++){const te=M[V];if(_(te)){const N=C(w),Se=n.get(te).__webglTexture;t.bindTexture(N,Se),u(N),t.unbindTexture()}}}const $e=[],xe=[];function le(w){if(w.samples>0){if(ne(w)===!1){const M=w.textures,V=w.width,z=w.height;let te=i.COLOR_BUFFER_BIT;const N=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(w),he=M.length>1;if(he)for(let Le=0;Le<M.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Pe=w.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Le=0;Le<M.length;Le++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Le]);const de=n.get(M[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,V,z,0,0,V,z,te,i.NEAREST),c===!0&&($e.length=0,xe.length=0,$e.push(i.COLOR_ATTACHMENT0+Le),w.depthBuffer&&w.resolveDepthBuffer===!1&&($e.push(N),xe.push(N),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,xe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$e))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let Le=0;Le<M.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Le]);const de=n.get(M[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,de,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Ue(w){return Math.min(s.maxSamples,w.samples)}function ne(w){const M=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Oe(w){const M=a.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function st(w,M){const V=w.colorSpace,z=w.format,te=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||V!==Gi&&V!==qn&&(Mt.getTransfer(V)===Tt?(z!==fn||te!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function Ye(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=j,this.setTexture2D=se,this.setTexture2DArray=J,this.setTexture3D=pe,this.setTextureCube=Y,this.rebindTextures=at,this.setupRenderTarget=D,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=We,this.useMultisampledRTT=ne}function um(i,e){function t(n,s=qn){let r;const a=Mt.getTransfer(s);if(n===Sn)return i.UNSIGNED_BYTE;if(n===Ba)return i.UNSIGNED_SHORT_4_4_4_4;if(n===za)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ml)return i.BYTE;if(n===yl)return i.SHORT;if(n===cs)return i.UNSIGNED_SHORT;if(n===Oa)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===fs)return i.HALF_FLOAT;if(n===El)return i.ALPHA;if(n===bl)return i.RGB;if(n===fn)return i.RGBA;if(n===us)return i.DEPTH_COMPONENT;if(n===hs)return i.DEPTH_STENCIL;if(n===Tl)return i.RED;if(n===ka)return i.RED_INTEGER;if(n===Al)return i.RG;if(n===Ha)return i.RG_INTEGER;if(n===Va)return i.RGBA_INTEGER;if(n===Ys||n===js||n===Zs||n===Ks)if(a===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===aa||n===oa||n===la||n===ca)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===aa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===la)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ca)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===da||n===ua||n===ha)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===da||n===ua)return a===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ha)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fa||n===pa||n===ma||n===ga||n===_a||n===va||n===xa||n===Ma||n===ya||n===Sa||n===Ea||n===ba||n===Ta||n===Aa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fa)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pa)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ma)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ga)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_a)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===va)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xa)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ma)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ya)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sa)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ea)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ba)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ta)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Aa)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Js||n===wa||n===Ra)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Js)return a===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ra)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wl||n===Ca||n===Pa||n===La)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Js)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ca)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===La)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class $l extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const hm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fm=`
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

}`;class pm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new $l(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Kn({vertexShader:hm,fragmentShader:fm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ot(new Xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mm extends $i{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,p=null,m=null,v=null;const x=new pm,_={},u=t.getContextAttributes();let C=null,R=null;const T=[],I=[],P=new _t;let U=null;const k=new an;k.viewport=new It;const A=new an;A.viewport=new It;const b=[k,A],L=new Nd;let j=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let Re=T[ee];return Re===void 0&&(Re=new Nr,T[ee]=Re),Re.getTargetRaySpace()},this.getControllerGrip=function(ee){let Re=T[ee];return Re===void 0&&(Re=new Nr,T[ee]=Re),Re.getGripSpace()},this.getHand=function(ee){let Re=T[ee];return Re===void 0&&(Re=new Nr,T[ee]=Re),Re.getHandSpace()};function X(ee){const Re=I.indexOf(ee.inputSource);if(Re===-1)return;const ve=T[Re];ve!==void 0&&(ve.update(ee.inputSource,ee.frame,l||a),ve.dispatchEvent({type:ee.type,data:ee.inputSource}))}function se(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",se),s.removeEventListener("inputsourceschange",J);for(let ee=0;ee<T.length;ee++){const Re=I[ee];Re!==null&&(I[ee]=null,T[ee].disconnect(Re))}j=null,W=null,x.reset();for(const ee in _)delete _[ee];e.setRenderTarget(C),m=null,p=null,f=null,s=null,R=null,ft.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",se),s.addEventListener("inputsourceschange",J),u.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&(f=new XRWebGLBinding(s,t)),f!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,We=null,Xe=null;u.depth&&(Xe=u.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=u.stencil?hs:us,We=u.stencil?ds:pi);const Ze={colorFormat:t.RGBA8,depthFormat:Xe,scaleFactor:r};p=f.createProjectionLayer(Ze),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),R=new mi(p.textureWidth,p.textureHeight,{format:fn,type:Sn,depthTexture:new Bl(p.textureWidth,p.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ve={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),R=new mi(m.framebufferWidth,m.framebufferHeight,{format:fn,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ft.setContext(s),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(ee){for(let Re=0;Re<ee.removed.length;Re++){const ve=ee.removed[Re],We=I.indexOf(ve);We>=0&&(I[We]=null,T[We].disconnect(ve))}for(let Re=0;Re<ee.added.length;Re++){const ve=ee.added[Re];let We=I.indexOf(ve);if(We===-1){for(let Ze=0;Ze<T.length;Ze++)if(Ze>=I.length){I.push(ve),We=Ze;break}else if(I[Ze]===null){I[Ze]=ve,We=Ze;break}if(We===-1)break}const Xe=T[We];Xe&&Xe.connect(ve)}}const pe=new G,Y=new G;function be(ee,Re,ve){pe.setFromMatrixPosition(Re.matrixWorld),Y.setFromMatrixPosition(ve.matrixWorld);const We=pe.distanceTo(Y),Xe=Re.projectionMatrix.elements,Ze=ve.projectionMatrix.elements,gt=Xe[14]/(Xe[10]-1),at=Xe[14]/(Xe[10]+1),D=(Xe[9]+1)/Xe[5],dt=(Xe[9]-1)/Xe[5],$e=(Xe[8]-1)/Xe[0],xe=(Ze[8]+1)/Ze[0],le=gt*$e,Ue=gt*xe,ne=We/(-$e+xe),Oe=ne*-$e;if(Re.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Oe),ee.translateZ(ne),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Xe[10]===-1)ee.projectionMatrix.copy(Re.projectionMatrix),ee.projectionMatrixInverse.copy(Re.projectionMatrixInverse);else{const st=gt+ne,Ye=at+ne,w=le-Oe,M=Ue+(We-Oe),V=D*at/Ye*st,z=dt*at/Ye*st;ee.projectionMatrix.makePerspective(w,M,V,z,st,Ye),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function we(ee,Re){Re===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(Re.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let Re=ee.near,ve=ee.far;x.texture!==null&&(x.depthNear>0&&(Re=x.depthNear),x.depthFar>0&&(ve=x.depthFar)),L.near=A.near=k.near=Re,L.far=A.far=k.far=ve,(j!==L.near||W!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),j=L.near,W=L.far),L.layers.mask=ee.layers.mask|6,k.layers.mask=L.layers.mask&3,A.layers.mask=L.layers.mask&5;const We=ee.parent,Xe=L.cameras;we(L,We);for(let Ze=0;Ze<Xe.length;Ze++)we(Xe[Ze],We);Xe.length===2?be(L,k,A):L.projectionMatrix.copy(k.projectionMatrix),Ve(ee,L,We)};function Ve(ee,Re,ve){ve===null?ee.matrix.copy(Re.matrixWorld):(ee.matrix.copy(ve.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(Re.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(Re.projectionMatrix),ee.projectionMatrixInverse.copy(Re.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Da*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(ee){c=ee,p!==null&&(p.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(L)},this.getCameraTexture=function(ee){return _[ee]};let Qe=null;function yt(ee,Re){if(h=Re.getViewerPose(l||a),v=Re,h!==null){const ve=h.views;m!==null&&(e.setRenderTargetFramebuffer(R,m.framebuffer),e.setRenderTarget(R));let We=!1;ve.length!==L.cameras.length&&(L.cameras.length=0,We=!0);for(let at=0;at<ve.length;at++){const D=ve[at];let dt=null;if(m!==null)dt=m.getViewport(D);else{const xe=f.getViewSubImage(p,D);dt=xe.viewport,at===0&&(e.setRenderTargetTextures(R,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(R))}let $e=b[at];$e===void 0&&($e=new an,$e.layers.enable(at),$e.viewport=new It,b[at]=$e),$e.matrix.fromArray(D.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(D.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(dt.x,dt.y,dt.width,dt.height),at===0&&(L.matrix.copy($e.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),We===!0&&L.cameras.push($e)}const Xe=s.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&f){const at=f.getDepthInformation(ve[0]);at&&at.isValid&&at.texture&&x.init(at,s.renderState)}if(Xe&&Xe.includes("camera-access")&&(e.state.unbindTexture(),f))for(let at=0;at<ve.length;at++){const D=ve[at].camera;if(D){let dt=_[D];dt||(dt=new $l,_[D]=dt);const $e=f.getCameraImage(D);dt.sourceTexture=$e}}}for(let ve=0;ve<T.length;ve++){const We=I[ve],Xe=T[ve];We!==null&&Xe!==void 0&&Xe.update(We,Re,l||a)}Qe&&Qe(ee,Re),Re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Re}),v=null}const ft=new Hl;ft.setAnimationLoop(yt),this.setAnimationLoop=function(ee){Qe=ee},this.dispose=function(){}}}const ri=new mn,gm=new Lt;function _m(i,e){function t(_,u){_.matrixAutoUpdate===!0&&_.updateMatrix(),u.value.copy(_.matrix)}function n(_,u){u.color.getRGB(_.fogColor.value,Nl(i)),u.isFog?(_.fogNear.value=u.near,_.fogFar.value=u.far):u.isFogExp2&&(_.fogDensity.value=u.density)}function s(_,u,C,R,T){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(_,u):u.isMeshToonMaterial?(r(_,u),f(_,u)):u.isMeshPhongMaterial?(r(_,u),h(_,u)):u.isMeshStandardMaterial?(r(_,u),p(_,u),u.isMeshPhysicalMaterial&&m(_,u,T)):u.isMeshMatcapMaterial?(r(_,u),v(_,u)):u.isMeshDepthMaterial?r(_,u):u.isMeshDistanceMaterial?(r(_,u),x(_,u)):u.isMeshNormalMaterial?r(_,u):u.isLineBasicMaterial?(a(_,u),u.isLineDashedMaterial&&o(_,u)):u.isPointsMaterial?c(_,u,C,R):u.isSpriteMaterial?l(_,u):u.isShadowMaterial?(_.color.value.copy(u.color),_.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(_,u){_.opacity.value=u.opacity,u.color&&_.diffuse.value.copy(u.color),u.emissive&&_.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(_.map.value=u.map,t(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,t(u.alphaMap,_.alphaMapTransform)),u.bumpMap&&(_.bumpMap.value=u.bumpMap,t(u.bumpMap,_.bumpMapTransform),_.bumpScale.value=u.bumpScale,u.side===Kt&&(_.bumpScale.value*=-1)),u.normalMap&&(_.normalMap.value=u.normalMap,t(u.normalMap,_.normalMapTransform),_.normalScale.value.copy(u.normalScale),u.side===Kt&&_.normalScale.value.negate()),u.displacementMap&&(_.displacementMap.value=u.displacementMap,t(u.displacementMap,_.displacementMapTransform),_.displacementScale.value=u.displacementScale,_.displacementBias.value=u.displacementBias),u.emissiveMap&&(_.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,_.emissiveMapTransform)),u.specularMap&&(_.specularMap.value=u.specularMap,t(u.specularMap,_.specularMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest);const C=e.get(u),R=C.envMap,T=C.envMapRotation;R&&(_.envMap.value=R,ri.copy(T),ri.x*=-1,ri.y*=-1,ri.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),_.envMapRotation.value.setFromMatrix4(gm.makeRotationFromEuler(ri)),_.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=u.reflectivity,_.ior.value=u.ior,_.refractionRatio.value=u.refractionRatio),u.lightMap&&(_.lightMap.value=u.lightMap,_.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,_.lightMapTransform)),u.aoMap&&(_.aoMap.value=u.aoMap,_.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,_.aoMapTransform))}function a(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,u.map&&(_.map.value=u.map,t(u.map,_.mapTransform))}function o(_,u){_.dashSize.value=u.dashSize,_.totalSize.value=u.dashSize+u.gapSize,_.scale.value=u.scale}function c(_,u,C,R){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.size.value=u.size*C,_.scale.value=R*.5,u.map&&(_.map.value=u.map,t(u.map,_.uvTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,t(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function l(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.rotation.value=u.rotation,u.map&&(_.map.value=u.map,t(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,t(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function h(_,u){_.specular.value.copy(u.specular),_.shininess.value=Math.max(u.shininess,1e-4)}function f(_,u){u.gradientMap&&(_.gradientMap.value=u.gradientMap)}function p(_,u){_.metalness.value=u.metalness,u.metalnessMap&&(_.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,_.metalnessMapTransform)),_.roughness.value=u.roughness,u.roughnessMap&&(_.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,_.roughnessMapTransform)),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)}function m(_,u,C){_.ior.value=u.ior,u.sheen>0&&(_.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),_.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(_.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,_.sheenColorMapTransform)),u.sheenRoughnessMap&&(_.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,_.sheenRoughnessMapTransform))),u.clearcoat>0&&(_.clearcoat.value=u.clearcoat,_.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(_.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,_.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(_.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Kt&&_.clearcoatNormalScale.value.negate())),u.dispersion>0&&(_.dispersion.value=u.dispersion),u.iridescence>0&&(_.iridescence.value=u.iridescence,_.iridescenceIOR.value=u.iridescenceIOR,_.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(_.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,_.iridescenceMapTransform)),u.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),u.transmission>0&&(_.transmission.value=u.transmission,_.transmissionSamplerMap.value=C.texture,_.transmissionSamplerSize.value.set(C.width,C.height),u.transmissionMap&&(_.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,_.transmissionMapTransform)),_.thickness.value=u.thickness,u.thicknessMap&&(_.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=u.attenuationDistance,_.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(_.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(_.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=u.specularIntensity,_.specularColor.value.copy(u.specularColor),u.specularColorMap&&(_.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,_.specularColorMapTransform)),u.specularIntensityMap&&(_.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,u){u.matcap&&(_.matcap.value=u.matcap)}function x(_,u){const C=e.get(u).light;_.referencePosition.value.setFromMatrixPosition(C.matrixWorld),_.nearDistance.value=C.shadow.camera.near,_.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vm(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,R){const T=R.program;n.uniformBlockBinding(C,T)}function l(C,R){let T=s[C.id];T===void 0&&(v(C),T=h(C),s[C.id]=T,C.addEventListener("dispose",_));const I=R.program;n.updateUBOMapping(C,I);const P=e.render.frame;r[C.id]!==P&&(p(C),r[C.id]=P)}function h(C){const R=f();C.__bindingPointIndex=R;const T=i.createBuffer(),I=C.__size,P=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,I,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,T),T}function f(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(C){const R=s[C.id],T=C.uniforms,I=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let P=0,U=T.length;P<U;P++){const k=Array.isArray(T[P])?T[P]:[T[P]];for(let A=0,b=k.length;A<b;A++){const L=k[A];if(m(L,P,A,I)===!0){const j=L.__offset,W=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let se=0;se<W.length;se++){const J=W[se],pe=x(J);typeof J=="number"||typeof J=="boolean"?(L.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,j+X,L.__data)):J.isMatrix3?(L.__data[0]=J.elements[0],L.__data[1]=J.elements[1],L.__data[2]=J.elements[2],L.__data[3]=0,L.__data[4]=J.elements[3],L.__data[5]=J.elements[4],L.__data[6]=J.elements[5],L.__data[7]=0,L.__data[8]=J.elements[6],L.__data[9]=J.elements[7],L.__data[10]=J.elements[8],L.__data[11]=0):(J.toArray(L.__data,X),X+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,j,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(C,R,T,I){const P=C.value,U=R+"_"+T;if(I[U]===void 0)return typeof P=="number"||typeof P=="boolean"?I[U]=P:I[U]=P.clone(),!0;{const k=I[U];if(typeof P=="number"||typeof P=="boolean"){if(k!==P)return I[U]=P,!0}else if(k.equals(P)===!1)return k.copy(P),!0}return!1}function v(C){const R=C.uniforms;let T=0;const I=16;for(let U=0,k=R.length;U<k;U++){const A=Array.isArray(R[U])?R[U]:[R[U]];for(let b=0,L=A.length;b<L;b++){const j=A[b],W=Array.isArray(j.value)?j.value:[j.value];for(let X=0,se=W.length;X<se;X++){const J=W[X],pe=x(J),Y=T%I,be=Y%pe.boundary,we=Y+be;T+=be,we!==0&&I-we<pe.storage&&(T+=I-we),j.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=T,T+=pe.storage}}}const P=T%I;return P>0&&(T+=I-P),C.__size=T,C.__cache={},this}function x(C){const R={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(R.boundary=4,R.storage=4):C.isVector2?(R.boundary=8,R.storage=8):C.isVector3||C.isColor?(R.boundary=16,R.storage=12):C.isVector4?(R.boundary=16,R.storage=16):C.isMatrix3?(R.boundary=48,R.storage=48):C.isMatrix4?(R.boundary=64,R.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),R}function _(C){const R=C.target;R.removeEventListener("dispose",_);const T=a.indexOf(R.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function u(){for(const C in s)i.deleteBuffer(s[C]);a=[],s={},r={}}return{bind:c,update:l,dispose:u}}class xm{constructor(e={}){const{canvas:t=qc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const v=new Uint32Array(4),x=new Int32Array(4);let _=null,u=null;const C=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let I=!1;this._outputColorSpace=tn;let P=0,U=0,k=null,A=-1,b=null;const L=new It,j=new It;let W=null;const X=new ht(0);let se=0,J=t.width,pe=t.height,Y=1,be=null,we=null;const Ve=new It(0,0,J,pe),Qe=new It(0,0,J,pe);let yt=!1;const ft=new $a;let ee=!1,Re=!1;const ve=new Lt,We=new G,Xe=new It,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function at(){return k===null?Y:1}let D=n;function dt(S,B){return t.getContext(S,B)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Na}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",me,!1),D===null){const B="webgl2";if(D=dt(B,S),D===null)throw dt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let $e,xe,le,Ue,ne,Oe,st,Ye,w,M,V,z,te,N,Se,he,Pe,Le,de,Te,je,Ee,Ce,nt;function O(){$e=new Cf(D),$e.init(),Ee=new um(D,$e),xe=new Sf(D,$e,e,Ee),le=new cm(D,$e),xe.reversedDepthBuffer&&p&&le.buffers.depth.setReversed(!0),Ue=new Df(D),ne=new Zp,Oe=new dm(D,$e,le,ne,xe,Ee,Ue),st=new bf(T),Ye=new Rf(T),w=new Od(D),Ce=new Mf(D,w),M=new Pf(D,w,Ue,Ce),V=new Uf(D,M,w,Ue),de=new If(D,xe,Oe),he=new Ef(ne),z=new jp(T,st,Ye,$e,xe,Ce,he),te=new _m(T,ne),N=new Jp,Se=new sm($e),Le=new xf(T,st,Ye,le,V,m,c),Pe=new om(T,V,xe),nt=new vm(D,Ue,xe,le),Te=new yf(D,$e,Ue),je=new Lf(D,$e,Ue),Ue.programs=z.programs,T.capabilities=xe,T.extensions=$e,T.properties=ne,T.renderLists=N,T.shadowMap=Pe,T.state=le,T.info=Ue}O();const _e=new mm(T,D);this.xr=_e,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=$e.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=$e.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(S){S!==void 0&&(Y=S,this.setSize(J,pe,!1))},this.getSize=function(S){return S.set(J,pe)},this.setSize=function(S,B,$=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=S,pe=B,t.width=Math.floor(S*Y),t.height=Math.floor(B*Y),$===!0&&(t.style.width=S+"px",t.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(J*Y,pe*Y).floor()},this.setDrawingBufferSize=function(S,B,$){J=S,pe=B,Y=$,t.width=Math.floor(S*$),t.height=Math.floor(B*$),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(Ve)},this.setViewport=function(S,B,$,q){S.isVector4?Ve.set(S.x,S.y,S.z,S.w):Ve.set(S,B,$,q),le.viewport(L.copy(Ve).multiplyScalar(Y).round())},this.getScissor=function(S){return S.copy(Qe)},this.setScissor=function(S,B,$,q){S.isVector4?Qe.set(S.x,S.y,S.z,S.w):Qe.set(S,B,$,q),le.scissor(j.copy(Qe).multiplyScalar(Y).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(S){le.setScissorTest(yt=S)},this.setOpaqueSort=function(S){be=S},this.setTransparentSort=function(S){we=S},this.getClearColor=function(S){return S.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(S=!0,B=!0,$=!0){let q=0;if(S){let H=!1;if(k!==null){const ge=k.texture.format;H=ge===Va||ge===Ha||ge===ka}if(H){const ge=k.texture.type,ae=ge===Sn||ge===pi||ge===cs||ge===ds||ge===Ba||ge===za,ke=Le.getClearColor(),Be=Le.getClearAlpha(),Ke=ke.r,et=ke.g,qe=ke.b;ae?(v[0]=Ke,v[1]=et,v[2]=qe,v[3]=Be,D.clearBufferuiv(D.COLOR,0,v)):(x[0]=Ke,x[1]=et,x[2]=qe,x[3]=Be,D.clearBufferiv(D.COLOR,0,x))}else q|=D.COLOR_BUFFER_BIT}B&&(q|=D.DEPTH_BUFFER_BIT),$&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Le.dispose(),N.dispose(),Se.dispose(),ne.dispose(),st.dispose(),Ye.dispose(),V.dispose(),Ce.dispose(),nt.dispose(),z.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",nn),_e.removeEventListener("sessionend",vs),bn.stop()};function Ae(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const S=Ue.autoReset,B=Pe.enabled,$=Pe.autoUpdate,q=Pe.needsUpdate,H=Pe.type;O(),Ue.autoReset=S,Pe.enabled=B,Pe.autoUpdate=$,Pe.needsUpdate=q,Pe.type=H}function me(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function oe(S){const B=S.target;B.removeEventListener("dispose",oe),Ge(B)}function Ge(S){it(S),ne.remove(S)}function it(S){const B=ne.get(S).programs;B!==void 0&&(B.forEach(function($){z.releaseProgram($)}),S.isShaderMaterial&&z.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,$,q,H,ge){B===null&&(B=Ze);const ae=H.isMesh&&H.matrixWorld.determinant()<0,ke=or(S,B,$,q,H);le.setMaterial(q,ae);let Be=$.index,Ke=1;if(q.wireframe===!0){if(Be=M.getWireframeAttribute($),Be===void 0)return;Ke=2}const et=$.drawRange,qe=$.attributes.position;let ut=et.start*Ke,tt=(et.start+et.count)*Ke;ge!==null&&(ut=Math.max(ut,ge.start*Ke),tt=Math.min(tt,(ge.start+ge.count)*Ke)),Be!==null?(ut=Math.max(ut,0),tt=Math.min(tt,Be.count)):qe!=null&&(ut=Math.max(ut,0),tt=Math.min(tt,qe.count));const Dt=tt-ut;if(Dt<0||Dt===1/0)return;Ce.setup(H,q,ke,$,Be);let At,St=Te;if(Be!==null&&(At=w.get(Be),St=je,St.setIndex(At)),H.isMesh)q.wireframe===!0?(le.setLineWidth(q.wireframeLinewidth*at()),St.setMode(D.LINES)):St.setMode(D.TRIANGLES);else if(H.isLine){let Je=q.linewidth;Je===void 0&&(Je=1),le.setLineWidth(Je*at()),H.isLineSegments?St.setMode(D.LINES):H.isLineLoop?St.setMode(D.LINE_LOOP):St.setMode(D.LINE_STRIP)}else H.isPoints?St.setMode(D.POINTS):H.isSprite&&St.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Bi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))St.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Je=H._multiDrawStarts,Ct=H._multiDrawCounts,pt=H._multiDrawCount,Xt=Be?w.get(Be).bytesPerElement:1,_n=ne.get(q).currentProgram.getUniforms();for(let $t=0;$t<pt;$t++)_n.setValue(D,"_gl_DrawID",$t),St.render(Je[$t]/Xt,Ct[$t])}else if(H.isInstancedMesh)St.renderInstances(ut,Dt,H.count);else if($.isInstancedBufferGeometry){const Je=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ct=Math.min($.instanceCount,Je);St.renderInstances(ut,Dt,Ct)}else St.render(ut,Dt)};function bt(S,B,$){S.transparent===!0&&S.side===In&&S.forceSinglePass===!1?(S.side=Kt,S.needsUpdate=!0,On(S,B,$),S.side=Zn,S.needsUpdate=!0,On(S,B,$),S.side=In):On(S,B,$)}this.compile=function(S,B,$=null){$===null&&($=S),u=Se.get($),u.init(B),R.push(u),$.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(u.pushLight(H),H.castShadow&&u.pushShadow(H))}),S!==$&&S.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(u.pushLight(H),H.castShadow&&u.pushShadow(H))}),u.setupLights();const q=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ge=H.material;if(ge)if(Array.isArray(ge))for(let ae=0;ae<ge.length;ae++){const ke=ge[ae];bt(ke,$,H),q.add(ke)}else bt(ge,$,H),q.add(ge)}),u=R.pop(),q},this.compileAsync=function(S,B,$=null){const q=this.compile(S,B,$);return new Promise(H=>{function ge(){if(q.forEach(function(ae){ne.get(ae).currentProgram.isReady()&&q.delete(ae)}),q.size===0){H(S);return}setTimeout(ge,10)}$e.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let vt=null;function on(S){vt&&vt(S)}function nn(){bn.stop()}function vs(){bn.start()}const bn=new Hl;bn.setAnimationLoop(on),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(S){vt=S,_e.setAnimationLoop(S),S===null?bn.stop():bn.start()},_e.addEventListener("sessionstart",nn),_e.addEventListener("sessionend",vs),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(B),B=_e.getCamera()),S.isScene===!0&&S.onBeforeRender(T,S,B,k),u=Se.get(S,R.length),u.init(B),R.push(u),ve.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ft.setFromProjectionMatrix(ve,Mn,B.reversedDepth),Re=this.localClippingEnabled,ee=he.init(this.clippingPlanes,Re),_=N.get(S,C.length),_.init(),C.push(_),_e.enabled===!0&&_e.isPresenting===!0){const ge=T.xr.getDepthSensingMesh();ge!==null&&Yi(ge,B,-1/0,T.sortObjects)}Yi(S,B,0,T.sortObjects),_.finish(),T.sortObjects===!0&&_.sort(be,we),gt=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,gt&&Le.addToRenderList(_,S),this.info.render.frame++,ee===!0&&he.beginShadows();const $=u.state.shadowsArray;Pe.render($,S,B),ee===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=_.opaque,H=_.transmissive;if(u.setupLights(),B.isArrayCamera){const ge=B.cameras;if(H.length>0)for(let ae=0,ke=ge.length;ae<ke;ae++){const Be=ge[ae];xs(q,H,S,Be)}gt&&Le.render(S);for(let ae=0,ke=ge.length;ae<ke;ae++){const Be=ge[ae];ji(_,S,Be,Be.viewport)}}else H.length>0&&xs(q,H,S,B),gt&&Le.render(S),ji(_,S,B);k!==null&&U===0&&(Oe.updateMultisampleRenderTarget(k),Oe.updateRenderTargetMipmap(k)),S.isScene===!0&&S.onAfterRender(T,S,B),Ce.resetDefaultState(),A=-1,b=null,R.pop(),R.length>0?(u=R[R.length-1],ee===!0&&he.setGlobalState(T.clippingPlanes,u.state.camera)):u=null,C.pop(),C.length>0?_=C[C.length-1]:_=null};function Yi(S,B,$,q){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)$=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)u.pushLight(S),S.castShadow&&u.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ft.intersectsSprite(S)){q&&Xe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ve);const ae=V.update(S),ke=S.material;ke.visible&&_.push(S,ae,ke,$,Xe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ft.intersectsObject(S))){const ae=V.update(S),ke=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Xe.copy(S.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Xe.copy(ae.boundingSphere.center)),Xe.applyMatrix4(S.matrixWorld).applyMatrix4(ve)),Array.isArray(ke)){const Be=ae.groups;for(let Ke=0,et=Be.length;Ke<et;Ke++){const qe=Be[Ke],ut=ke[qe.materialIndex];ut&&ut.visible&&_.push(S,ae,ut,$,Xe.z,qe)}}else ke.visible&&_.push(S,ae,ke,$,Xe.z,null)}}const ge=S.children;for(let ae=0,ke=ge.length;ae<ke;ae++)Yi(ge[ae],B,$,q)}function ji(S,B,$,q){const H=S.opaque,ge=S.transmissive,ae=S.transparent;u.setupLightsView($),ee===!0&&he.setGlobalState(T.clippingPlanes,$),q&&le.viewport(L.copy(q)),H.length>0&&_i(H,B,$),ge.length>0&&_i(ge,B,$),ae.length>0&&_i(ae,B,$),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function xs(S,B,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[q.id]===void 0&&(u.state.transmissionRenderTarget[q.id]=new mi(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?fs:Sn,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const ge=u.state.transmissionRenderTarget[q.id],ae=q.viewport||L;ge.setSize(ae.z*T.transmissionResolutionScale,ae.w*T.transmissionResolutionScale);const ke=T.getRenderTarget(),Be=T.getActiveCubeFace(),Ke=T.getActiveMipmapLevel();T.setRenderTarget(ge),T.getClearColor(X),se=T.getClearAlpha(),se<1&&T.setClearColor(16777215,.5),T.clear(),gt&&Le.render($);const et=T.toneMapping;T.toneMapping=jn;const qe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),u.setupLightsView(q),ee===!0&&he.setGlobalState(T.clippingPlanes,q),_i(S,$,q),Oe.updateMultisampleRenderTarget(ge),Oe.updateRenderTargetMipmap(ge),$e.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let tt=0,Dt=B.length;tt<Dt;tt++){const At=B[tt],St=At.object,Je=At.geometry,Ct=At.material,pt=At.group;if(Ct.side===In&&St.layers.test(q.layers)){const Xt=Ct.side;Ct.side=Kt,Ct.needsUpdate=!0,Zi(St,$,q,Je,Ct,pt),Ct.side=Xt,Ct.needsUpdate=!0,ut=!0}}ut===!0&&(Oe.updateMultisampleRenderTarget(ge),Oe.updateRenderTargetMipmap(ge))}T.setRenderTarget(ke,Be,Ke),T.setClearColor(X,se),qe!==void 0&&(q.viewport=qe),T.toneMapping=et}function _i(S,B,$){const q=B.isScene===!0?B.overrideMaterial:null;for(let H=0,ge=S.length;H<ge;H++){const ae=S[H],ke=ae.object,Be=ae.geometry,Ke=ae.group;let et=ae.material;et.allowOverride===!0&&q!==null&&(et=q),ke.layers.test($.layers)&&Zi(ke,B,$,Be,et,Ke)}}function Zi(S,B,$,q,H,ge){S.onBeforeRender(T,B,$,q,H,ge),S.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(T,B,$,q,S,ge),H.transparent===!0&&H.side===In&&H.forceSinglePass===!1?(H.side=Kt,H.needsUpdate=!0,T.renderBufferDirect($,B,q,H,S,ge),H.side=Zn,H.needsUpdate=!0,T.renderBufferDirect($,B,q,H,S,ge),H.side=In):T.renderBufferDirect($,B,q,H,S,ge),S.onAfterRender(T,B,$,q,H,ge)}function On(S,B,$){B.isScene!==!0&&(B=Ze);const q=ne.get(S),H=u.state.lights,ge=u.state.shadowsArray,ae=H.state.version,ke=z.getParameters(S,H.state,ge,B,$),Be=z.getProgramCacheKey(ke);let Ke=q.programs;q.environment=S.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(S.isMeshStandardMaterial?Ye:st).get(S.envMap||q.environment),q.envMapRotation=q.environment!==null&&S.envMap===null?B.environmentRotation:S.envMapRotation,Ke===void 0&&(S.addEventListener("dispose",oe),Ke=new Map,q.programs=Ke);let et=Ke.get(Be);if(et!==void 0){if(q.currentProgram===et&&q.lightsStateVersion===ae)return Ms(S,ke),et}else ke.uniforms=z.getUniforms(S),S.onBeforeCompile(ke,T),et=z.acquireProgram(ke,Be),Ke.set(Be,et),q.uniforms=ke.uniforms;const qe=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(qe.clippingPlanes=he.uniform),Ms(S,ke),q.needsLights=vi(S),q.lightsStateVersion=ae,q.needsLights&&(qe.ambientLightColor.value=H.state.ambient,qe.lightProbe.value=H.state.probe,qe.directionalLights.value=H.state.directional,qe.directionalLightShadows.value=H.state.directionalShadow,qe.spotLights.value=H.state.spot,qe.spotLightShadows.value=H.state.spotShadow,qe.rectAreaLights.value=H.state.rectArea,qe.ltc_1.value=H.state.rectAreaLTC1,qe.ltc_2.value=H.state.rectAreaLTC2,qe.pointLights.value=H.state.point,qe.pointLightShadows.value=H.state.pointShadow,qe.hemisphereLights.value=H.state.hemi,qe.directionalShadowMap.value=H.state.directionalShadowMap,qe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,qe.spotShadowMap.value=H.state.spotShadowMap,qe.spotLightMatrix.value=H.state.spotLightMatrix,qe.spotLightMap.value=H.state.spotLightMap,qe.pointShadowMap.value=H.state.pointShadowMap,qe.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=et,q.uniformsList=null,et}function Ki(S){if(S.uniformsList===null){const B=S.currentProgram.getUniforms();S.uniformsList=Qs.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function Ms(S,B){const $=ne.get(S);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function or(S,B,$,q,H){B.isScene!==!0&&(B=Ze),Oe.resetTextureUnits();const ge=B.fog,ae=q.isMeshStandardMaterial?B.environment:null,ke=k===null?T.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Gi,Be=(q.isMeshStandardMaterial?Ye:st).get(q.envMap||ae),Ke=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,et=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),qe=!!$.morphAttributes.position,ut=!!$.morphAttributes.normal,tt=!!$.morphAttributes.color;let Dt=jn;q.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Dt=T.toneMapping);const At=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,St=At!==void 0?At.length:0,Je=ne.get(q),Ct=u.state.lights;if(ee===!0&&(Re===!0||S!==b)){const F=S===b&&q.id===A;he.setState(q,S,F)}let pt=!1;q.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Ct.state.version||Je.outputColorSpace!==ke||H.isBatchedMesh&&Je.batching===!1||!H.isBatchedMesh&&Je.batching===!0||H.isBatchedMesh&&Je.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Je.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Je.instancing===!1||!H.isInstancedMesh&&Je.instancing===!0||H.isSkinnedMesh&&Je.skinning===!1||!H.isSkinnedMesh&&Je.skinning===!0||H.isInstancedMesh&&Je.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Je.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Je.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Je.instancingMorph===!1&&H.morphTexture!==null||Je.envMap!==Be||q.fog===!0&&Je.fog!==ge||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==he.numPlanes||Je.numIntersection!==he.numIntersection)||Je.vertexAlphas!==Ke||Je.vertexTangents!==et||Je.morphTargets!==qe||Je.morphNormals!==ut||Je.morphColors!==tt||Je.toneMapping!==Dt||Je.morphTargetsCount!==St)&&(pt=!0):(pt=!0,Je.__version=q.version);let Xt=Je.currentProgram;pt===!0&&(Xt=On(q,B,H));let _n=!1,$t=!1,Bn=!1;const Pt=Xt.getUniforms(),y=Je.uniforms;if(le.useProgram(Xt.program)&&(_n=!0,$t=!0,Bn=!0),q.id!==A&&(A=q.id,$t=!0),_n||b!==S){le.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Pt.setValue(D,"projectionMatrix",S.projectionMatrix),Pt.setValue(D,"viewMatrix",S.matrixWorldInverse);const Z=Pt.map.cameraPosition;Z!==void 0&&Z.setValue(D,We.setFromMatrixPosition(S.matrixWorld)),xe.logarithmicDepthBuffer&&Pt.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Pt.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,$t=!0,Bn=!0)}if(H.isSkinnedMesh){Pt.setOptional(D,H,"bindMatrix"),Pt.setOptional(D,H,"bindMatrixInverse");const F=H.skeleton;F&&(F.boneTexture===null&&F.computeBoneTexture(),Pt.setValue(D,"boneTexture",F.boneTexture,Oe))}H.isBatchedMesh&&(Pt.setOptional(D,H,"batchingTexture"),Pt.setValue(D,"batchingTexture",H._matricesTexture,Oe),Pt.setOptional(D,H,"batchingIdTexture"),Pt.setValue(D,"batchingIdTexture",H._indirectTexture,Oe),Pt.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&Pt.setValue(D,"batchingColorTexture",H._colorsTexture,Oe));const d=$.morphAttributes;if((d.position!==void 0||d.normal!==void 0||d.color!==void 0)&&de.update(H,$,Xt),($t||Je.receiveShadow!==H.receiveShadow)&&(Je.receiveShadow=H.receiveShadow,Pt.setValue(D,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(y.envMap.value=Be,y.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(y.envMapIntensity.value=B.environmentIntensity),$t&&(Pt.setValue(D,"toneMappingExposure",T.toneMappingExposure),Je.needsLights&&gn(y,Bn),ge&&q.fog===!0&&te.refreshFogUniforms(y,ge),te.refreshMaterialUniforms(y,q,Y,pe,u.state.transmissionRenderTarget[S.id]),Qs.upload(D,Ki(Je),y,Oe)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Qs.upload(D,Ki(Je),y,Oe),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Pt.setValue(D,"center",H.center),Pt.setValue(D,"modelViewMatrix",H.modelViewMatrix),Pt.setValue(D,"normalMatrix",H.normalMatrix),Pt.setValue(D,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const F=q.uniformsGroups;for(let Z=0,Q=F.length;Z<Q;Z++){const ie=F[Z];nt.update(ie,Xt),nt.bind(ie,Xt)}}return Xt}function gn(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function vi(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(S,B,$){const q=ne.get(S);q.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),ne.get(S.texture).__webglTexture=B,ne.get(S.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:$,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,B){const $=ne.get(S);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0};const Ji=D.createFramebuffer();this.setRenderTarget=function(S,B=0,$=0){k=S,P=B,U=$;let q=!0,H=null,ge=!1,ae=!1;if(S){const Be=ne.get(S);if(Be.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(D.FRAMEBUFFER,null),q=!1;else if(Be.__webglFramebuffer===void 0)Oe.setupRenderTarget(S);else if(Be.__hasExternalTextures)Oe.rebindTextures(S,ne.get(S.texture).__webglTexture,ne.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const qe=S.depthTexture;if(Be.__boundDepthTexture!==qe){if(qe!==null&&ne.has(qe)&&(S.width!==qe.image.width||S.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(S)}}const Ke=S.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(ae=!0);const et=ne.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(et[B])?H=et[B][$]:H=et[B],ge=!0):S.samples>0&&Oe.useMultisampledRTT(S)===!1?H=ne.get(S).__webglMultisampledFramebuffer:Array.isArray(et)?H=et[$]:H=et,L.copy(S.viewport),j.copy(S.scissor),W=S.scissorTest}else L.copy(Ve).multiplyScalar(Y).floor(),j.copy(Qe).multiplyScalar(Y).floor(),W=yt;if($!==0&&(H=Ji),le.bindFramebuffer(D.FRAMEBUFFER,H)&&q&&le.drawBuffers(S,H),le.viewport(L),le.scissor(j),le.setScissorTest(W),ge){const Be=ne.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Be.__webglTexture,$)}else if(ae){const Be=B;for(let Ke=0;Ke<S.textures.length;Ke++){const et=ne.get(S.textures[Ke]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ke,et.__webglTexture,$,Be)}}else if(S!==null&&$!==0){const Be=ne.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Be.__webglTexture,$)}A=-1},this.readRenderTargetPixels=function(S,B,$,q,H,ge,ae,ke=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=ne.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ae!==void 0&&(Be=Be[ae]),Be){le.bindFramebuffer(D.FRAMEBUFFER,Be);try{const Ke=S.textures[ke],et=Ke.format,qe=Ke.type;if(!xe.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-q&&$>=0&&$<=S.height-H&&(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ke),D.readPixels(B,$,q,H,Ee.convert(et),Ee.convert(qe),ge))}finally{const Ke=k!==null?ne.get(k).__webglFramebuffer:null;le.bindFramebuffer(D.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(S,B,$,q,H,ge,ae,ke=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=ne.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ae!==void 0&&(Be=Be[ae]),Be)if(B>=0&&B<=S.width-q&&$>=0&&$<=S.height-H){le.bindFramebuffer(D.FRAMEBUFFER,Be);const Ke=S.textures[ke],et=Ke.format,qe=Ke.type;if(!xe.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ut),D.bufferData(D.PIXEL_PACK_BUFFER,ge.byteLength,D.STREAM_READ),S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ke),D.readPixels(B,$,q,H,Ee.convert(et),Ee.convert(qe),0);const tt=k!==null?ne.get(k).__webglFramebuffer:null;le.bindFramebuffer(D.FRAMEBUFFER,tt);const Dt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Yc(D,Dt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ut),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ge),D.deleteBuffer(ut),D.deleteSync(Dt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,B=null,$=0){const q=Math.pow(2,-$),H=Math.floor(S.image.width*q),ge=Math.floor(S.image.height*q),ae=B!==null?B.x:0,ke=B!==null?B.y:0;Oe.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,$,0,0,ae,ke,H,ge),le.unbindTexture()};const lr=D.createFramebuffer(),cr=D.createFramebuffer();this.copyTextureToTexture=function(S,B,$=null,q=null,H=0,ge=null){ge===null&&(H!==0?(Bi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=H,H=0):ge=0);let ae,ke,Be,Ke,et,qe,ut,tt,Dt;const At=S.isCompressedTexture?S.mipmaps[ge]:S.image;if($!==null)ae=$.max.x-$.min.x,ke=$.max.y-$.min.y,Be=$.isBox3?$.max.z-$.min.z:1,Ke=$.min.x,et=$.min.y,qe=$.isBox3?$.min.z:0;else{const d=Math.pow(2,-H);ae=Math.floor(At.width*d),ke=Math.floor(At.height*d),S.isDataArrayTexture?Be=At.depth:S.isData3DTexture?Be=Math.floor(At.depth*d):Be=1,Ke=0,et=0,qe=0}q!==null?(ut=q.x,tt=q.y,Dt=q.z):(ut=0,tt=0,Dt=0);const St=Ee.convert(B.format),Je=Ee.convert(B.type);let Ct;B.isData3DTexture?(Oe.setTexture3D(B,0),Ct=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Oe.setTexture2DArray(B,0),Ct=D.TEXTURE_2D_ARRAY):(Oe.setTexture2D(B,0),Ct=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const pt=D.getParameter(D.UNPACK_ROW_LENGTH),Xt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),_n=D.getParameter(D.UNPACK_SKIP_PIXELS),$t=D.getParameter(D.UNPACK_SKIP_ROWS),Bn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,At.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,At.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ke),D.pixelStorei(D.UNPACK_SKIP_ROWS,et),D.pixelStorei(D.UNPACK_SKIP_IMAGES,qe);const Pt=S.isDataArrayTexture||S.isData3DTexture,y=B.isDataArrayTexture||B.isData3DTexture;if(S.isDepthTexture){const d=ne.get(S),F=ne.get(B),Z=ne.get(d.__renderTarget),Q=ne.get(F.__renderTarget);le.bindFramebuffer(D.READ_FRAMEBUFFER,Z.__webglFramebuffer),le.bindFramebuffer(D.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let ie=0;ie<Be;ie++)Pt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ne.get(S).__webglTexture,H,qe+ie),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ne.get(B).__webglTexture,ge,Dt+ie)),D.blitFramebuffer(Ke,et,ae,ke,ut,tt,ae,ke,D.DEPTH_BUFFER_BIT,D.NEAREST);le.bindFramebuffer(D.READ_FRAMEBUFFER,null),le.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||ne.has(S)){const d=ne.get(S),F=ne.get(B);le.bindFramebuffer(D.READ_FRAMEBUFFER,lr),le.bindFramebuffer(D.DRAW_FRAMEBUFFER,cr);for(let Z=0;Z<Be;Z++)Pt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,d.__webglTexture,H,qe+Z):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,d.__webglTexture,H),y?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,F.__webglTexture,ge,Dt+Z):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,F.__webglTexture,ge),H!==0?D.blitFramebuffer(Ke,et,ae,ke,ut,tt,ae,ke,D.COLOR_BUFFER_BIT,D.NEAREST):y?D.copyTexSubImage3D(Ct,ge,ut,tt,Dt+Z,Ke,et,ae,ke):D.copyTexSubImage2D(Ct,ge,ut,tt,Ke,et,ae,ke);le.bindFramebuffer(D.READ_FRAMEBUFFER,null),le.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else y?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(Ct,ge,ut,tt,Dt,ae,ke,Be,St,Je,At.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Ct,ge,ut,tt,Dt,ae,ke,Be,St,At.data):D.texSubImage3D(Ct,ge,ut,tt,Dt,ae,ke,Be,St,Je,At):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ge,ut,tt,ae,ke,St,Je,At.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ge,ut,tt,At.width,At.height,St,At.data):D.texSubImage2D(D.TEXTURE_2D,ge,ut,tt,ae,ke,St,Je,At);D.pixelStorei(D.UNPACK_ROW_LENGTH,pt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Xt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,_n),D.pixelStorei(D.UNPACK_SKIP_ROWS,$t),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Bn),ge===0&&B.generateMipmaps&&D.generateMipmap(Ct),le.unbindTexture()},this.copyTextureToTexture3D=function(S,B,$=null,q=null,H=0){return Bi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,B,$,q,H)},this.initRenderTarget=function(S){ne.get(S).__webglFramebuffer===void 0&&Oe.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Oe.setTextureCube(S,0):S.isData3DTexture?Oe.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Oe.setTexture2DArray(S,0):Oe.setTexture2D(S,0),le.unbindTexture()},this.resetState=function(){P=0,U=0,k=null,le.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}const Mm=/^[og]\s*(.+)?/,ym=/^mtllib /,Sm=/^usemtl /,Em=/^usemap /,al=/\s+/,ol=new G,$r=new G,ll=new G,cl=new G,rn=new G,qs=new ht;function bm(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(e,t,n){const s=this.vertices,r=this.object.geometry.normals;ol.fromArray(s,e),$r.fromArray(s,t),ll.fromArray(s,n),rn.subVectors(ll,$r),cl.subVectors(ol,$r),rn.cross(cl),rn.normalize(),r.push(rn.x,rn.y,rn.z),r.push(rn.x,rn.y,rn.z),r.push(rn.x,rn.y,rn.z)},addColor:function(e,t,n){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(e,t,n){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,s,r,a,o,c,l){const h=this.vertices.length;let f=this.parseVertexIndex(e,h),p=this.parseVertexIndex(t,h),m=this.parseVertexIndex(n,h);if(this.addVertex(f,p,m),this.addColor(f,p,m),o!==void 0&&o!==""){const v=this.normals.length;f=this.parseNormalIndex(o,v),p=this.parseNormalIndex(c,v),m=this.parseNormalIndex(l,v),this.addNormal(f,p,m)}else this.addFaceNormal(f,p,m);if(s!==void 0&&s!==""){const v=this.uvs.length;f=this.parseUVIndex(s,v),p=this.parseUVIndex(r,v),m=this.parseUVIndex(a,v),this.addUV(f,p,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,s=e.length;n<s;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let r=0,a=e.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return i.startObject("",!1),i}class Tm extends ja{constructor(e){super(e),this.materials=null}load(e,t,n,s){const r=this,a=new Pd(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new bm;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let s=[];for(let o=0,c=n.length;o<c;o++){const l=n[o].trimStart();if(l.length===0)continue;const h=l.charAt(0);if(h!=="#")if(h==="v"){const f=l.split(al);switch(f[0]){case"v":t.vertices.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])),f.length>=7?(qs.setRGB(parseFloat(f[4]),parseFloat(f[5]),parseFloat(f[6]),tn),t.colors.push(qs.r,qs.g,qs.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3]));break;case"vt":t.uvs.push(parseFloat(f[1]),parseFloat(f[2]));break}}else if(h==="f"){const p=l.slice(1).trim().split(al),m=[];for(let x=0,_=p.length;x<_;x++){const u=p[x];if(u.length>0){const C=u.split("/");m.push(C)}}const v=m[0];for(let x=1,_=m.length-1;x<_;x++){const u=m[x],C=m[x+1];t.addFace(v[0],u[0],C[0],v[1],u[1],C[1],v[2],u[2],C[2])}}else if(h==="l"){const f=l.substring(1).trim().split(" ");let p=[];const m=[];if(l.indexOf("/")===-1)p=f;else for(let v=0,x=f.length;v<x;v++){const _=f[v].split("/");_[0]!==""&&p.push(_[0]),_[1]!==""&&m.push(_[1])}t.addLineGeometry(p,m)}else if(h==="p"){const p=l.slice(1).trim().split(" ");t.addPointGeometry(p)}else if((s=Mm.exec(l))!==null){const f=(" "+s[0].slice(1).trim()).slice(1);t.startObject(f)}else if(Sm.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(ym.test(l))t.materialLibraries.push(l.substring(7).trim());else if(Em.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(s=l.split(" "),s.length>1){const p=s[1].trim().toLowerCase();t.object.smooth=p!=="0"&&p!=="off"}else t.object.smooth=!0;const f=t.object.currentMaterial();f&&(f.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();const r=new Nn;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,c=t.objects.length;o<c;o++){const l=t.objects[o],h=l.geometry,f=l.materials,p=h.type==="Line",m=h.type==="Points";let v=!1;if(h.vertices.length===0)continue;const x=new Wt;x.setAttribute("position",new Ut(h.vertices,3)),h.normals.length>0&&x.setAttribute("normal",new Ut(h.normals,3)),h.colors.length>0&&(v=!0,x.setAttribute("color",new Ut(h.colors,3))),h.hasUVIndices===!0&&x.setAttribute("uv",new Ut(h.uvs,2));const _=[];for(let C=0,R=f.length;C<R;C++){const T=f[C],I=T.name+"_"+T.smooth+"_"+v;let P=t.materials[I];if(this.materials!==null){if(P=this.materials.create(T.name),p&&P&&!(P instanceof fi)){const U=new fi;En.prototype.copy.call(U,P),U.color.copy(P.color),P=U}else if(m&&P&&!(P instanceof as)){const U=new as({size:10,sizeAttenuation:!1});En.prototype.copy.call(U,P),U.color.copy(P.color),U.map=P.map,P=U}}P===void 0&&(p?P=new fi:m?P=new as({size:1,sizeAttenuation:!1}):P=new Ed,P.name=T.name,P.flatShading=!T.smooth,P.vertexColors=v,t.materials[I]=P),_.push(P)}let u;if(_.length>1){for(let C=0,R=f.length;C<R;C++){const T=f[C];x.addGroup(T.groupStart,T.groupCount,C)}p?u=new Co(x,_):m?u=new Br(x,_):u=new Ot(x,_)}else p?u=new Co(x,_[0]):m?u=new Br(x,_[0]):u=new Ot(x,_[0]);u.name=l.name,r.add(u)}else if(t.vertices.length>0){const o=new as({size:1,sizeAttenuation:!1}),c=new Wt;c.setAttribute("position",new Ut(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new Ut(t.colors,3)),o.vertexColors=!0);const l=new Br(c,o);r.add(l)}return r}}class Am extends Bt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new _t(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const Ii=new G,dl=new Lt,ul=new Lt,hl=new G,fl=new G;class wm{constructor(e={}){const t=this;let n,s,r,a;const o={objects:new WeakMap},c=e.element!==void 0?e.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.getSize=function(){return{width:n,height:s}},this.render=function(v,x){v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),dl.copy(x.matrixWorldInverse),ul.multiplyMatrices(x.projectionMatrix,dl),h(v,v,x),m(v)},this.setSize=function(v,x){n=v,s=x,r=n/2,a=s/2,c.style.width=v+"px",c.style.height=x+"px"};function l(v){v.isCSS2DObject&&(v.element.style.display="none");for(let x=0,_=v.children.length;x<_;x++)l(v.children[x])}function h(v,x,_){if(v.visible===!1){l(v);return}if(v.isCSS2DObject){Ii.setFromMatrixPosition(v.matrixWorld),Ii.applyMatrix4(ul);const u=Ii.z>=-1&&Ii.z<=1&&v.layers.test(_.layers)===!0,C=v.element;C.style.display=u===!0?"":"none",u===!0&&(v.onBeforeRender(t,x,_),C.style.transform="translate("+-100*v.center.x+"%,"+-100*v.center.y+"%)translate("+(Ii.x*r+r)+"px,"+(-Ii.y*a+a)+"px)",C.parentNode!==c&&c.appendChild(C),v.onAfterRender(t,x,_));const R={distanceToCameraSquared:f(_,v)};o.objects.set(v,R)}for(let u=0,C=v.children.length;u<C;u++)h(v.children[u],x,_)}function f(v,x){return hl.setFromMatrixPosition(v.matrixWorld),fl.setFromMatrixPosition(x.matrixWorld),hl.distanceToSquared(fl)}function p(v){const x=[];return v.traverseVisible(function(_){_.isCSS2DObject&&x.push(_)}),x}function m(v){const x=p(v).sort(function(u,C){if(u.renderOrder!==C.renderOrder)return C.renderOrder-u.renderOrder;const R=o.objects.get(u).distanceToCameraSquared,T=o.objects.get(C).distanceToCameraSquared;return R-T}),_=x.length;for(let u=0,C=x.length;u<C;u++)x[u].element.style.zIndex=_-u}}}const Rm={class:"control-panel"},Cm={key:0},Pm={key:1},Lm={key:0,class:"hud"},Dm=["max"],Im=1e3/15,Um=ml({__name:"Pip3D",props:{dataUrl:{default:"/pip_test_data.json"},wsUrl:{default:""},modelPaths:{default:()=>({bus:"/bus.obj",car:"/car.obj",pedestrian:"/pedestrian.obj"})},cameraMode:{default:"chase"}},setup(i){const e=i,t=ql([]),n=He(0),s=He(0),r=He(!0),a=He(!1);let o=null;const c=[],l=Ui(()=>t.length?e.wsUrl?t[t.length-1]:t[n.value]:null),h=He(null),f=He(null);let p,m,v,x,_=0,u=0;const C=He(!0);let R=0,T,I,P;const U=new Tm;new $n({color:16777215,metalness:0,roughness:1});const k=new $n({color:4868682,metalness:0,roughness:1}),A=new Ad({color:16777215,dashSize:3,gapSize:3}),b=new fi({color:16777215,linewidth:2}),L=new fi({color:16776960,linewidth:3}),j=new $n({color:14278115,metalness:0,roughness:.9}),W=new $n({color:11388671,roughness:.85}),X=new $n({color:9143936,metalness:.1,roughness:.9}),se={};async function J(xe){if(se[xe])return se[xe].clone(!0);const le=await U.loadAsync(xe);return le.traverse(Ue=>{Ue.isMesh&&(Ue.castShadow=!1,Ue.receiveShadow=!1)}),se[xe]=le,le.clone(!0)}const pe={},Y={};function be(xe){return`${xe.type}-${xe.id}`}const we={},Ve={},Qe=new Nn;Yl(a,xe=>{for(const le of Object.values(Y)){le.visible=xe;const Ue=le.element;Ue.style.display=xe?"block":"none"}});function yt(){for(let Ee=0;Ee<5;Ee++){const Ce=new Xi(12,200,1,1),nt=new Ot(Ce,k);nt.rotation.x=-Math.PI/2,nt.position.y=.01,nt.position.z=-1e3/2+200/2+Ee*200,Qe.add(nt)}const ne=-1e3/2,Oe=1e3/2,st=new Wt,Ye=[];for(let Ee=ne;Ee<=Oe;Ee+=1)Ye.push(new G(0,.02,Ee));st.setFromPoints(Ye);const w=new Ni(st,L);Qe.add(w);const M=new Wt,V=[];for(let Ee=ne;Ee<=Oe;Ee+=1)V.push(new G(-3,.02,Ee));M.setFromPoints(V);const z=new Ni(M,A);z.computeLineDistances(),Qe.add(z);const te=new Wt,N=[];for(let Ee=ne;Ee<=Oe;Ee+=1)N.push(new G(3,.02,Ee));te.setFromPoints(N);const Se=new Ni(te,A);Se.computeLineDistances(),Qe.add(Se);const he=new Wt,Pe=[];for(let Ee=ne;Ee<=Oe;Ee+=1)Pe.push(new G(-6,.02,Ee));he.setFromPoints(Pe);const Le=new Ni(he,b);Qe.add(Le);const de=new Wt,Te=[];for(let Ee=ne;Ee<=Oe;Ee+=1)Te.push(new G(6,.02,Ee));de.setFromPoints(Te);const je=new Ni(de,b);Qe.add(je)}function ft(xe,le,Ue="red"){const ne=new Nn,Oe=new qa(.1,.1,4),st=new $n({color:3355443}),Ye=new Ot(Oe,st);Ye.position.y=2,ne.add(Ye);const w=new gi(.3,.8,.3),M=new $n({color:2236962}),V=new Ot(w,M);V.position.y=4,ne.add(V);const z=new Ya(.1,8,8),te=new Ot(z,new ls({color:Ue==="red"?16711680:3342336,emissive:Ue==="red"?16711680:0}));te.position.set(0,4.2,.16),ne.add(te);const N=new Ot(z,new ls({color:Ue==="yellow"?16776960:3355392,emissive:Ue==="yellow"?16776960:0}));N.position.set(0,4,.16),ne.add(N);const Se=new Ot(z,new ls({color:Ue==="green"?65280:13056,emissive:Ue==="green"?65280:0}));return Se.position.set(0,3.8,.16),ne.add(Se),ne.position.set(xe,0,le),ne}function ee(xe,le,Ue=10,ne=20,Oe=10){const st=new gi(Ue,ne,Oe),Ye=new Ot(st,X);return Ye.position.set(xe,ne/2,le),Ye.castShadow=!1,Ye.receiveShadow=!1,Ye}function Re(xe,le,Ue=0){if(xe==="top")x.position.set(le.x,30,le.z),x.lookAt(le.x,0,le.z),x.rotation.z=Math.PI;else{const st=Math.sin(Ue),Ye=Math.cos(Ue);x.position.set(le.x-st*15,8,le.z-Ye*15),x.lookAt(le.x+st*5,0,le.z+Ye*5)}}async function ve(){var V;v=new xd,v.background=new ht(16185337);const xe=h.value?h.value.clientWidth:640,le=h.value?h.value.clientHeight:400;x=new an(45,xe/le,.1,2e3),x.position.set(0,6,12),p=new xm({canvas:f.value,antialias:!1,powerPreference:"low-power"}),p.setPixelRatio(Math.min(window.devicePixelRatio,1)),p.setSize(xe,le,!1),p.shadowMap.enabled=!1,m=new wm,m.setSize(xe,le),m.domElement.style.position="absolute",m.domElement.style.top="0px",m.domElement.style.pointerEvents="none",(V=h.value)==null||V.appendChild(m.domElement),v.add(new Ud(16777215,.6)),P=new Id(16777215,.6),P.position.set(10,12,6),P.castShadow=!1,v.add(P);const Ue=new Xi(1e3,1e3,1,1);I=new Ot(Ue,new $n({color:2763306})),I.receiveShadow=!1,I.rotation.x=-Math.PI/2,v.add(I),v.add(Qe),yt();const ne=ft(-8,30,"green");v.add(ne),we["tl-default-1"]=ne;const Oe=ft(8,30,"red");v.add(Oe),we["tl-default-2"]=Oe;const st=ft(-8,-30,"red");v.add(st),we["tl-default-3"]=st;const Ye=ft(8,-30,"green");v.add(Ye),we["tl-default-4"]=Ye,[{x:-20,z:0,width:12,height:25,depth:15},{x:-20,z:40,width:15,height:30,depth:12},{x:-20,z:-40,width:10,height:20,depth:18},{x:20,z:10,width:14,height:35,depth:14},{x:20,z:-20,width:12,height:28,depth:16},{x:-35,z:20,width:18,height:40,depth:20},{x:35,z:-10,width:16,height:32,depth:14}].forEach((z,te)=>{const N=ee(z.x,z.z,z.width,z.height,z.depth);v.add(N),Ve[`building-default-${te}`]=N}),T=new Nn;const M=await J(e.modelPaths.bus);M.traverse(z=>{z.isMesh&&(z.material=W)}),T.add(M),v.add(T),We()}function We(xe=0){var ne;if(_=requestAnimationFrame(We),$e(),xe-u<Im||(u=xe,!C.value))return;const Ue=l.value;if(Ue){const{x:Oe=0,y:st=0,z:Ye=0,yaw:w=0}=Ue.ego||{},M=-4.5;T.position.set(M,st,Ye),T.rotation.set(0,w,0),Re(e.cameraMode,{x:M,z:Ye},w);const V={};for(const z of Ue.objects||[]){const te=be(z);let N=pe[te];const Se=(z.x??0)>0;if(!N){N=new Nn,pe[te]=N,v.add(N);let he=e.modelPaths.car;z.type==="pedestrian"&&(he=e.modelPaths.pedestrian),J(he).then(de=>{de.traverse(Te=>{Te.isMesh&&(Te.material=j,Te.frustumCulled=!0)}),Se&&z.type!=="pedestrian"&&(de.rotation.y=Math.PI),N.add(de)});const Pe=document.createElement("div");Pe.className="object-label",Pe.textContent=`${z.type} #${z.id}`,Pe.style.display=a.value?"block":"none";const Le=new Am(Pe);Le.position.set(0,2.5,0),Le.visible=a.value,Y[te]=Le,N.add(Le)}if(N.position.set(z.x??0,z.y??0,z.z??0),Se&&z.type!=="pedestrian"?N.rotation.set(0,(z.yaw??0)+Math.PI,0):N.rotation.set(0,z.yaw??0,0),Y[te]){const he=Y[te],Pe=he.element,Le=z.speed?(z.speed*3.6).toFixed(1):"0.0",de=Math.round(((z.yaw??0)*180/Math.PI+(Se?180:0))%360),je=["↑","↗","→","↘","↓","↙","←","↖"][Math.round(de/45)%8];Pe.innerHTML=`
            <div class="label-header">
              <span class="label-icon">${z.type==="pedestrian"?"🚶":"🚗"}</span>
              <span class="label-id">#${z.id}</span>
              ${Se&&z.type!=="pedestrian"?'<span class="label-lane">⬅</span>':""}
            </div>
            <div class="label-info">
              <div class="info-row">
                <span class="info-label">속도:</span>
                <span class="info-value">${Le} km/h</span>
              </div>
              <div class="info-row">
                <span class="info-label">방향:</span>
                <span class="info-value">${je} ${de}°</span>
              </div>
              ${z.state!==void 0?`
              <div class="info-row">
                <span class="info-label">상태:</span>
                <span class="info-value state-${(ne=z.state)==null?void 0:ne.toLowerCase()}">${z.state}</span>
              </div>`:""}
            </div>
          `,he.visible=a.value,Pe.style.display=a.value?"block":"none"}V[te]=!0}if(R++,R%10===0)for(const[z,te]of Object.entries(pe))V[z]||(v.remove(te),delete pe[z],Y[z]&&(te.remove(Y[z]),delete Y[z]));for(const z of Ue.trafficLights||[]){const te=`tl-${z.id}`;if(!we[te]){const N=ft(z.x||0,z.z||0,z.state||"red");we[te]=N,v.add(N)}}for(const z of Ue.buildings||[]){const te=`building-${z.id}`;if(!Ve[te]){const N=ee(z.x||0,z.z||0,z.width||10,z.height||20,z.depth||10);Ve[te]=N,v.add(N)}}}p.render(v,x),a.value&&m.render(v,x)}async function Xe(){(await(await fetch(e.dataUrl)).json()).frames;const Ue=[],ne=600,Oe=[{id:101,type:"bus",lane:"lane1",x:-4.5,startZ:-30,speed:6},{id:102,type:"bus",lane:"lane1",x:-4.5,startZ:-80,speed:5.5},{id:103,type:"car",lane:"lane1",x:-4.5,startZ:-130,speed:6.5},{id:201,type:"car",lane:"lane2",x:-1.5,startZ:-20,speed:10},{id:202,type:"car",lane:"lane2",x:-1.5,startZ:-50,speed:11},{id:203,type:"car",lane:"lane2",x:-1.5,startZ:-90,speed:12},{id:204,type:"car",lane:"lane2",x:-1.5,startZ:-120,speed:10.5},{id:205,type:"car",lane:"lane2",x:-1.5,startZ:10,speed:13},{id:206,type:"car",lane:"lane2",x:-1.5,startZ:40,speed:11.5},{id:301,type:"car",lane:"opposite",x:4.5,startZ:200,speed:10},{id:302,type:"car",lane:"opposite",x:4.5,startZ:230,speed:11},{id:303,type:"car",lane:"opposite",x:4.5,startZ:260,speed:9},{id:304,type:"car",lane:"opposite",x:4.5,startZ:290,speed:12},{id:305,type:"car",lane:"opposite",x:4.5,startZ:320,speed:10.5},{id:306,type:"car",lane:"opposite",x:4.5,startZ:350,speed:8.5},{id:307,type:"car",lane:"opposite",x:4.5,startZ:380,speed:11.5},{id:401,type:"car",lane:"parked",x:-8,startZ:10,speed:0},{id:402,type:"car",lane:"parked",x:-8,startZ:25,speed:0},{id:403,type:"car",lane:"parked",x:8,startZ:-15,speed:0},{id:404,type:"car",lane:"parked",x:-8,startZ:50,speed:0},{id:405,type:"car",lane:"parked",x:8,startZ:35,speed:0},{id:406,type:"car",lane:"parked",x:-8,startZ:70,speed:0}],st=[{id:501,type:"pedestrian",x:-7,startZ:5,direction:1,speed:1.2},{id:502,type:"pedestrian",x:7,startZ:15,direction:-1,speed:1},{id:503,type:"pedestrian",x:-7.5,startZ:-5,direction:1,speed:1.1},{id:504,type:"pedestrian",x:7.5,startZ:35,direction:-1,speed:1.3},{id:505,type:"pedestrian",x:-7.2,startZ:50,direction:1,speed:1},{id:506,type:"pedestrian",x:7.3,startZ:60,direction:-1,speed:1.2}];for(let Ye=0;Ye<ne;Ye++){const w=Ye*.1,M={x:0,y:0,z:w*3,yaw:0,v:8+Math.sin(w*.2)*2},V=Oe.map(N=>{let Se=0;N.lane==="lane1"||N.lane==="lane2"?Se=N.startZ+w*(N.speed*.3):N.lane==="opposite"?Se=N.startZ-w*(N.speed*.35):N.lane==="parked"&&(Se=N.startZ);const he=w*3;return Math.abs(Se-he)>100?null:{id:N.id,type:N.type,x:N.x,y:0,z:Se,yaw:N.lane==="opposite"?Math.PI:0,speed:N.speed,state:N.lane==="parked"?"stopped":"moving"}}).filter(N=>N!==null),z=st.map(N=>{const Se=N.startZ+w*(N.speed*.3)*N.direction,he=w*3;if(Math.abs(Se-he)>80)return null;const Pe=N.x+Math.sin(w*.5+N.id)*.3;return{id:N.id,type:N.type,x:Pe,y:0,z:Se,yaw:N.direction>0?0:Math.PI,speed:N.speed,state:"walking"}}).filter(N=>N!==null),te={ts_ms:17230956e5+Ye*100,ego:M,objects:[...V,...z],trafficLights:[{id:1,x:-8,z:30,state:Ye%300<150?"green":"red"},{id:2,x:8,z:30,state:Ye%300>=150?"green":"red"}]};Ue.push(te)}t.splice(0,t.length,...Ue)}function Ze(){e.wsUrl&&(o=new WebSocket(e.wsUrl),o.onmessage=xe=>{try{const le=JSON.parse(xe.data);c.push(le),c.length>600&&c.shift(),t.splice(0,t.length,...c)}catch(le){console.warn("WS parse error",le)}},o.onclose=()=>{})}let gt=null;function at(){D(),gt=setInterval(()=>{var xe;t.length&&r.value&&(n.value=(n.value+1)%t.length,s.value=((xe=t[n.value])==null?void 0:xe.ts_ms)||0)},100)}function D(){gt&&(clearInterval(gt),gt=null)}let dt=null;function $e(){if(!p||!x||!h.value)return;const xe=h.value.getBoundingClientRect(),le=Math.max(1,Math.floor(xe.width)),Ue=Math.max(1,Math.floor(xe.height));if(le===0||Ue===0)return;const ne=p.domElement,Oe=p.getPixelRatio(),st=Math.floor(ne.width/Oe),Ye=Math.floor(ne.height/Oe),w=st!==le||Ye!==Ue;return w&&(console.log(`Resizing renderer: ${st}x${Ye} -> ${le}x${Ue}`),console.log(`(clientWidth: ${h.value.clientWidth}, boundingRect: ${le})`),p.setSize(le,Ue,!1),m&&m.setSize(le,Ue),x.aspect=le/Ue,x.updateProjectionMatrix()),w}return gl(async()=>{await ve(),await jl(),$e(),h.value&&(dt=new ResizeObserver(()=>{console.log("ResizeObserver triggered"),$e()}),dt.observe(h.value)),e.wsUrl?Ze():(await Xe(),at());const xe=new IntersectionObserver(le=>{le.forEach(Ue=>{C.value=Ue.isIntersecting})},{threshold:.1});h.value&&xe.observe(h.value),Ja(()=>{h.value&&xe.unobserve(h.value),dt&&h.value&&(dt.unobserve(h.value),dt=null)})}),Ja(()=>{cancelAnimationFrame(_),D(),o==null||o.close(),dt&&h.value&&(dt.unobserve(h.value),dt=null),p==null||p.dispose();for(const xe of Object.values(pe))v.remove(xe);for(const xe of Object.values(Y))xe.parent&&xe.parent.remove(xe);for(const xe of Object.values(we))v.remove(xe);for(const xe of Object.values(Ve))v.remove(xe);v.remove(Qe)}),(xe,le)=>(De(),Ne("div",{ref_key:"wrap",ref:h,class:"pip3d-container"},[g("canvas",{ref_key:"canvas",ref:f},null,512),g("div",Rm,[g("button",{onClick:le[0]||(le[0]=Ue=>a.value=!a.value),class:"toggle-btn"},[a.value?(De(),Ne("span",Cm,"🏷️ 정보 숨기기")):(De(),Ne("span",Pm,"🏷️ 정보 표시"))])]),xe.wsUrl?rt("",!0):(De(),Ne("div",Lm,[g("button",{onClick:le[1]||(le[1]=Ue=>r.value=!r.value)},fe(r.value?"Pause":"Play"),1),g("span",null,"t: "+fe(s.value),1),ai(g("input",{type:"range",min:0,max:Math.max(0,t.length-1),"onUpdate:modelValue":le[2]||(le[2]=Ue=>n.value=Ue)},null,8,Dm),[[Zl,n.value,void 0,{number:!0}]])]))],512))}}),pl=_l(Um,[["__scopeId","data-v-e553136d"]]),Nm={class:"vehicle-tracking-container"},Fm={class:"header px-6 py-3 bg-white border-b border-gray-200"},Om={class:"flex items-center gap-4 mt-4"},Bm={class:"flex items-center gap-2"},zm={class:"text-sm text-gray-700"},km={class:"flex items-center gap-2"},Hm={class:"text-sm text-gray-700"},Vm={class:"flex items-center gap-2"},Gm={class:"text-sm text-gray-700"},Wm={class:"flex items-center gap-2"},Xm={class:"text-sm text-gray-700"},$m={class:"text-sm text-gray-500 flex items-center gap-2"},qm={class:"flex items-center gap-2 ml-auto"},Ym={key:0,class:"text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded border border-orange-200"},jm=["disabled"],Zm={class:"main-content"},Km={class:"left-sidebar"},Jm={key:0,class:"vertical-route-diagram-container"},Qm={class:"vertical-route-diagrams"},eg={class:"route-badge-container"},tg={class:"route-badge"},ng={class:"route-badge-number"},ig={class:"route-badge-type"},sg={class:"vertical-route-line"},rg=["title"],ag={class:"vertical-stop-info"},og={class:"stop-name"},lg={class:"stop-number"},cg=["title"],dg={class:"bus-marker-container"},ug={class:"bus-marker-icon"},hg={width:"32",height:"32",viewBox:"0 0 32 32",fill:"none"},fg=["fill"],pg={class:"map-container"},mg={class:"map-style-selector"},gg={class:"map-style-options"},_g={class:"pip-header"},vg={class:"pip-controls"},xg={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},Mg={key:1,width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},yg={class:"pip-body"},Sg={key:0,class:"fullscreen-info-panels"},Eg={class:"info-panel left-panel"},bg={class:"info-item"},Tg={class:"info-value"},Ag={class:"info-item"},wg={class:"info-value text-2xl font-bold text-blue-400"},Rg={class:"info-item"},Cg={class:"info-value"},Pg={class:"info-item"},Lg={class:"info-value"},Dg={class:"pip-header"},Ig={class:"pip-controls"},Ug={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},Ng={key:1,width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},Fg={class:"pip-body"},Og={key:0,class:"fullscreen-info-panels"},Bg={class:"info-panel left-panel"},zg={class:"traffic-overview"},kg={class:"traffic-item"},Hg={class:"traffic-value"},Vg={class:"traffic-item"},Gg={class:"traffic-value"},Wg={class:"info-panel right-panel"},Xg={class:"vehicle-list"},$g={class:"vehicle-item active"},qg={class:"vehicle-speed"},Yg={class:"pip-header"},jg={class:"pip-controls"},Zg={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},Kg={key:1,width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},Jg={key:0,class:"fullscreen-info-panels"},Qg={class:"info-panel left-panel"},e_={class:"info-item"},t_={class:"info-value"},n_={class:"info-item"},i_={class:"info-value text-2xl font-bold text-blue-400"},s_={class:"info-item"},r_={class:"info-value"},a_={class:"info-item"},o_={class:"info-value"},l_={class:"info-item"},c_={class:"info-value"},d_={class:"info-item"},u_={class:"info-value"},h_={class:"info-item"},f_={class:"battery-bar"},p_={class:"battery-text"},m_={class:"info-panel right-panel"},g_={class:"detection-item"},__={class:"detection-info"},v_={class:"detection-count"},x_={class:"detection-item"},M_={class:"detection-info"},y_={class:"detection-count"},S_={class:"detection-item"},E_={class:"detection-info"},b_={class:"detection-count"},T_={class:"detection-status"},A_={class:"status-item"},w_={class:"status-item"},R_={class:"panel-content"},C_={class:"info-section"},P_={class:"info-grid"},L_={class:"info-item"},D_={class:"info-value"},I_={class:"info-item"},U_={class:"info-value"},N_={class:"info-item"},F_={class:"info-item"},O_={class:"info-section"},B_={class:"info-grid"},z_={class:"info-item"},k_={class:"info-value"},H_={class:"info-item"},V_={class:"info-value"},G_={key:0,class:"info-item"},W_={class:"info-value"},X_={key:1,class:"info-item"},$_={class:"info-value"},q_={class:"info-section"},Y_={class:"info-grid"},j_={class:"info-item full-width"},Z_={class:"info-value font-mono text-xs"},K_={class:"info-item"},J_={class:"info-value"},Q_={class:"info-item"},ev={class:"info-value"},tv={key:0,class:"info-item"},nv={class:"info-value"},iv={class:"text-gray-500"},sv={key:1,class:"info-item"},rv={class:"info-value"},av={class:"info-section"},ov={class:"object-detection-grid"},lv={class:"detection-item"},cv={class:"detection-info"},dv={class:"detection-count"},uv={class:"detection-item"},hv={class:"detection-info"},fv={class:"detection-count"},pv={class:"detection-item"},mv={class:"detection-info"},gv={class:"detection-count"},_v={class:"detection-item"},vv={class:"detection-info"},xv={class:"info-section"},Mv={class:"odd-status-header"},yv={class:"odd-status-icon"},Sv={class:"odd-status-content"},Ev={class:"odd-status-value"},bv={key:0,class:"odd-distance"},Tv={class:"environment-conditions"},Av={class:"condition-grid"},wv={class:"condition-item"},Rv={class:"condition-info"},Cv={class:"condition-value"},Pv={class:"condition-item"},Lv={class:"condition-info"},Dv={class:"condition-value"},Iv={class:"condition-item"},Uv={class:"condition-info"},Nv={class:"condition-value"},Fv={class:"condition-item"},Ov={class:"condition-info"},Bv={class:"condition-value"},zv={class:"system-limits"},kv={class:"limit-status-list"},Hv={key:0,class:"intervention-alert"},Vv={class:"intervention-content"},Gv={class:"intervention-reason"},Wv={class:"safety-text"},Xv={key:0,class:"odd-warning-card"},$v={class:"warning-content"},qv={class:"warning-distance"},Yv={class:"distance-value"},jv={class:"warning-eta"},Zv={class:"eta-value"},Kv={class:"warning-action"},Jv={class:"action-text"},Qv={key:1,class:"absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10"},e0={key:2,class:"absolute top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded z-10"},t0={class:"text-sm"},n0={class:"sidebar"},i0={class:"sidebar-content"},s0={key:0,class:"text-center text-gray-500 py-8"},r0={key:1,class:"space-y-3"},a0=["onClick"],o0={class:"flex items-center justify-between mb-2"},l0={class:"flex items-center gap-2"},c0={class:"font-medium text-gray-800"},d0={class:"text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"},u0={class:"text-sm text-gray-600 space-y-1"},h0={class:"flex justify-between"},f0={class:"text-purple-600"},p0={key:0,class:"flex justify-between"},m0={class:"font-medium"},g0={class:"text-blue-600"},_0={key:1,class:"mt-2 p-2 bg-green-50 border border-green-200 rounded text-xs"},v0={class:"space-y-1 text-green-700"},x0={class:"flex justify-between"},M0={class:"font-mono"},y0={class:"flex justify-between"},S0={class:"font-mono"},E0={key:0,class:"mt-1 pt-1 border-t border-green-300"},b0={key:0,class:"flex justify-between"},T0={class:"font-medium"},A0={key:1,class:"mt-1"},w0={class:"flex flex-wrap gap-1 mt-1"},R0={key:2,class:"flex justify-between"},C0={class:"font-mono"},P0={class:"flex justify-between"},L0={key:0,class:"text-xs"},D0={key:2,class:"mt-1 p-2 bg-orange-50 rounded text-xs"},I0={class:"flex justify-between"},U0={class:"animate-slideDown"},N0={class:"mt-3 pt-2 border-t border-gray-200"},F0={class:"flex gap-2"},O0=["onClick","disabled"],B0=["onClick","disabled"],z0={key:0,class:"mt-3 pt-2 border-t border-gray-200"},k0={class:"bg-yellow-50 p-2 rounded text-xs mb-2"},H0={class:"flex justify-between items-center mb-2"},V0={class:"font-bold text-yellow-900"},G0={key:0,class:"space-y-2"},W0={key:0,class:"flex justify-between items-center p-1 bg-white rounded"},X0={class:"text-gray-700"},$0={key:0,class:"text-xs text-gray-500"},q0={class:"text-xs"},Y0=["onClick","disabled"],j0={key:1,class:"text-gray-500 text-xs"},Z0={class:"flex gap-2"},K0=["onClick","disabled"],J0=["onClick","disabled"],Q0={key:1,class:"mt-2 pt-2 border-t border-gray-200"},ex={key:0,class:"bg-blue-50 p-2 rounded text-xs mb-2"},tx={class:"flex justify-between mb-1"},nx={class:"font-medium text-blue-900"},ix={class:"flex justify-between"},sx={class:"font-medium text-blue-900"},rx={key:1,class:"flex justify-between text-xs"},ax={class:"text-green-600 font-medium"},ox={key:2,class:"flex justify-between text-xs"},lx={class:"text-indigo-600"},cx={key:3,class:"flex justify-between text-xs"},dx={class:"text-gray-700"},ux={key:2,class:"mt-2 pt-2 border-t border-gray-200"},hx={key:0,class:"space-y-2"},fx={class:"flex justify-between text-xs"},px={class:"text-purple-600 font-medium"},mx={class:"font-medium text-green-800 mb-1"},gx={class:"space-y-1 text-green-700"},_x={class:"flex items-start gap-1"},vx={class:"flex-1"},xx=["title"],Mx={class:"flex items-start gap-1"},yx={class:"flex-1"},Sx=["title"],Ex={key:0,class:"text-xs text-gray-600"},bx={key:0,class:"text-xs text-gray-500 text-center"},Tx={key:1,class:"flex justify-between text-xs mt-2"},Ax={class:"text-gray-700"},wx={key:2,class:"flex justify-between text-xs"},Rx={class:"text-gray-700"},Cx={class:"mt-2 pt-2 border-t border-gray-200"},Px={class:"flex justify-between text-xs"},Lx={class:"font-mono"},Dx={key:0,class:"flex justify-between text-xs"},Ix={class:"text-gray-700"},Ux={class:"text-gray-500"},Nx={key:1,class:"flex justify-between text-xs"},Fx={class:"text-gray-700"},Ox=ml({__name:"VehicleTrackingView",setup(i){delete Et.Icon.Default.prototype._getIconUrl,Et.Icon.Default.mergeOptions({iconRetinaUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",iconUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png"});const e=new sc({basePath:"https://av-ops.maas-busan.shop",baseOptions:{timeout:3e4,headers:{"Content-Type":"application/json",Accept:"application/json"}}}),t=new nc(e);new ur(e);const n=new tc(e),s=new ic(e),r=new ec(e),a="https://av-ops.maas-busan.shop",o=He(),c=He(),l=He("light"),h=He(!1),f=He(),p=He(new Map),m=He(new Map),v=He(new Map),x=He(new Map),_=He(new Map),u=He(new Map),C=He(new Map),R=He([]),T=He(!1),I=He(!1),P=He(new Map),U=He(new Map),k=He(new Map),A=He(!1),b=He(!1),L=He(null),j=He([]),W=He([]),X=He([]),se=He([]),J=He(""),pe=He(1e3),Y=He([]),be=He(new Map),we=He(new Set),Ve=He(new Map);He(new Set),He(new Map);const Qe=y=>{const d=typeof y=="string"?parseInt(y):y;for(const F of Ve.value.values())if(F.stops&&F.stops.length>0){const Z=F.stops.findIndex(Q=>Q.id===d||Q.node_id===d);if(Z!==-1)return{name:F.stops[Z].name,index:Z+1}}return{name:"",index:null}},yt=y=>{const d=Qe(y);return d.name&&d.index!==null?`${d.index}. ${d.name}`:d.name?d.name:`노드 ${y}`},ft=He(),ee=He(),Re=He(),ve=He(),We=He(),Xe=He(),Ze=He(!1),gt=He(!1),at=He(!1),D=He(!0),dt=He(!0),$e=He(!0),xe=He(null),le=He({x:0,y:0}),Ue=He(null),ne=He(null),Oe=He({pedestrians:0,vehicles:0,bicycles:0}),st=He(32),Ye=He(28),w=He(12.5),M=He(85),V=He(25.5),z=He("녹색"),te=Ui(()=>{const y=z.value;return y==="녹색"?"text-green-600":y==="황색"?"text-yellow-600":y==="적색"?"text-red-600":"text-gray-600"}),N=He({inODD:!0,distanceToBoundary:850,approachingBoundary:!1,etaToBoundary:60,recommendedAction:"정상 운행 가능",weather:"맑음",lighting:"주간",roadCondition:"건조",temperature:23,systemLimits:{oddExceeded:!1,sensorFailure:!1,weatherLimit:!1,gpsLoss:!1},driverInterventionRequired:!1,interventionReason:"",safetyStopAvailable:!0});let Se=null,he=null;const Pe=[35.1796,129.0756],Le=Ui(()=>{console.log("=== 운행 중 차량 필터링 ==="),console.log("전체 차량 수:",j.value.length),console.log("수요응답 Trip 수:",W.value.length),console.log("정기노선 Trip 수:",X.value.length),W.value.length>0&&console.log("수요응답 Trip 상태들:",W.value.map(d=>({id:d.id,vehicle_id:d.vehicle_id,status:d.status}))),X.value.length>0&&console.log("정기노선 Trip 상태들:",X.value.map(d=>({id:d.id,vehicle_id:d.vehicle_id,status:d.status})));const y=j.value.filter(d=>{var Q,ie;const F=W.value.find(Fe=>Fe.vehicle_id===d.id);if(F&&(console.log(`🚗 차량 ${d.id}: 수요응답 Trip #${F.id} (상태: ${F.status})`,{calls_count:((Q=F.calls)==null?void 0:Q.length)||0,call_ids:((ie=F.calls)==null?void 0:ie.map(Fe=>Fe.id))||[],service_area_id:F.service_area_id}),F.status!=="SCHEDULED"&&F.status!=="COMPLETED"))return!0;const Z=X.value.find(Fe=>Fe.vehicle_id===d.id);return!!(Z&&(console.log(`차량 ${d.id}: 정기노선 Trip 상태 = ${Z.status}`),Z.status!=="SCHEDULED"&&Z.status!=="COMPLETED"))});return console.log("필터링 결과: 운행 중 차량 수 =",y.length),console.log("=== 필터링 종료 ==="),y.map(d=>{const F=W.value.find(ie=>ie.vehicle_id===d.id),Z=X.value.find(ie=>ie.vehicle_id===d.id),Q=F||Z;return{...d,trip_id:Q==null?void 0:Q.id,tripStatus:Q==null?void 0:Q.status,tripType:F?"ON_DEMAND":"SCHEDULED"}})}),de=Ui(()=>Le.value.filter(y=>y.tripType==="SCHEDULED"&&y.tripStatus!=="RETURNING").length),Te=Ui(()=>Le.value.filter(y=>y.tripType==="ON_DEMAND"&&y.tripStatus!=="RETURNING").length),je=Ui(()=>Le.value.filter(y=>y.tripStatus==="RETURNING").length),Ee=()=>{try{if(console.log("지도 초기화 시작..."),console.log("mapContainer.value:",o.value),!o.value){console.error("지도 컨테이너를 찾을 수 없습니다");return}c.value&&c.value.remove(),console.log("Leaflet 지도 객체 생성 중..."),c.value=Et.map(o.value,{center:Pe,zoom:12,zoomControl:!0,attributionControl:!0,minZoom:10,maxZoom:18}),c.value.on("movestart",()=>{console.log("🔍 지도 이동 시작 (movestart event)"),console.trace("지도 이동 호출 스택")}),c.value.on("zoomstart",()=>{console.log("🔍 줌 변경 시작")}),c.value.on("moveend",()=>{const d=c.value.getCenter(),F=c.value.getZoom();console.log(`📍 지도 이동 완료 - 중심: (${d.lat.toFixed(6)}, ${d.lng.toFixed(6)}), 줌: ${F}`)}),console.log("타일 레이어 추가 중...");const y=Et.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",{attribution:"© OpenStreetMap contributors © CARTO",maxZoom:19,subdomains:"abcd"});y.addTo(c.value),f.value=y,y.on("loading",()=>{console.log("타일 로딩 시작")}),y.on("load",()=>{console.log("타일 로딩 완료")}),console.log("지도 초기화 완료"),console.log("지도 객체:",c.value)}catch(y){console.error("지도 초기화 실패:",y),y.value=`지도 초기화 실패: ${y.message}`}},Ce=async()=>{try{console.log("서비스 지역 조회 중...");const y=await s.getServiceAreasApiServiceAreasGet();y.data&&y.data.areas?se.value=y.data.areas||[]:Array.isArray(y.data)?se.value=y.data||[]:se.value=[],console.log(`서비스 지역 ${se.value.length}개 조회 완료`),console.log("서비스 지역 데이터:",se.value),se.value.length>0&&c.value&&(O(),console.log("🔍 서비스 지역 로드 후 지도 조정 체크",{serviceAreasLoaded:T.value,mapInitiallyPositioned:I.value}),!T.value&&!I.value?(console.log("✅ 최초 1회 지도 범위 조정 실행"),nt(),T.value=!0,I.value=!0):console.log("⏭️ 지도 범위 조정 스킵 (이미 설정됨)"))}catch(y){console.error("서비스 지역 조회 실패:",y)}},nt=()=>{if(console.log("🎯 fitMapToServiceAreas 호출됨",{hasMap:!!c.value,serviceAreasCount:se.value.length,mapInitiallyPositioned:I.value,serviceAreasLoaded:T.value}),!(!c.value||se.value.length===0)){if(I.value){console.log("⏭️ 지도가 이미 위치 설정됨 - 스킵");return}try{console.log("🗺️ 서비스 지역 기준으로 지도 범위 조정 시작...");let y=null,d=0,F=[];if(se.value.forEach(Z=>{const Q=Z.boundary||Z.geojson;if(Q)if(Q.type&&Q.coordinates){const ie=(Fe,ue=0)=>{if(!(ue>3)&&Array.isArray(Fe))if(Fe.length===2&&typeof Fe[0]=="number"&&typeof Fe[1]=="number"){const E=Et.latLng(Fe[1],Fe[0]);F.push([Fe[1],Fe[0]]),y?y.extend(E):y=Et.latLngBounds([E]),d++}else Fe.forEach(E=>ie(E,ue+1))};ie(Q.coordinates)}else Q.features&&Q.features.forEach(ie=>{if(ie.geometry&&ie.geometry.coordinates){const Fe=(ue,E=0)=>{if(!(E>3)&&Array.isArray(ue))if(ue.length===2&&typeof ue[0]=="number"&&typeof ue[1]=="number"){const re=Et.latLng(ue[1],ue[0]);F.push([ue[1],ue[0]]),y?y.extend(re):y=Et.latLngBounds([re]),d++}else ue.forEach(re=>Fe(re,E+1))};Fe(ie.geometry.coordinates)}})}),y&&d>0){console.log(`${d}개 좌표로 지도 범위 설정`),console.log("범위:",y.getSouthWest(),"~",y.getNorthEast());const Z=y.getCenter();console.log("서비스 지역 중심점:",Z),c.value.setView(Z,14,{animate:!1}),setTimeout(()=>{c.value.fitBounds(y,{padding:[10,40],maxZoom:15,animate:!0,duration:1}),setTimeout(()=>{const Q=c.value.getZoom();c.value.setZoom(Math.min(Q+.5,15),{animate:!0})},1100)},100)}else console.warn("서비스 지역 좌표를 찾을 수 없어 기본 위치 사용"),c.value.setView(Pe,11)}catch(y){console.error("지도 범위 조정 실패:",y),c.value.setView(Pe,11)}}},O=()=>{c.value&&(R.value.forEach(y=>{var d;(d=c.value)==null||d.removeLayer(y)}),R.value=[],se.value.forEach((y,d)=>{var Z,Q;const F=y.boundary||y.geojson;if(F)try{const ie=["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6"],Fe=ie[d%ie.length];let ue=F;F.type&&(F.type==="Polygon"||F.type==="LineString"||F.type==="MultiPolygon"||F.type==="MultiLineString")&&(ue={type:"Feature",geometry:F,properties:{}});const E=Et.geoJSON(ue,{style:ce=>{var K,ye;return((K=ce==null?void 0:ce.geometry)==null?void 0:K.type)==="LineString"||((ye=ce==null?void 0:ce.geometry)==null?void 0:ye.type)==="MultiLineString"?{color:Fe,weight:5,opacity:1,dashArray:y.area_type==="RESTRICTED"?"10, 5":void 0}:{color:Fe,weight:3,opacity:.9,fillColor:Fe,fillOpacity:.15,dashArray:y.area_type==="RESTRICTED"?"10, 5":void 0}},onEachFeature:(ce,K)=>{const ye=`
              <div class="service-area-popup">
                <h4 class="font-bold text-lg mb-2">${y.name||y.area_name||"서비스 지역"}</h4>
                <div class="space-y-1">
                  <p><strong>구역 타입:</strong> ${y.area_type||(F.type==="LineString"||F.type==="MultiLineString"?"Route":"Service Area")}</p>
                  <p><strong>상태:</strong> ${y.is_active?"✅ 활성":"❌ 비활성"}</p>
                  <p><strong>설명:</strong> ${y.description||"설명 없음"}</p>
                </div>
              </div>
            `;K.bindPopup(ye,{maxWidth:300,className:"custom-popup",autoPan:!1}),K.on("mouseover",function(){var ct,Ht;((ct=ce.geometry)==null?void 0:ct.type)==="LineString"||((Ht=ce.geometry)==null?void 0:Ht.type)==="MultiLineString"?this.setStyle({weight:7,opacity:1}):this.setStyle({weight:4,fillOpacity:.25})}),K.on("mouseout",function(){E.resetStyle(this)})}});E.addTo(c.value),R.value.push(E);const re=new Set;ue.type==="Feature"?re.add(((Z=ue.geometry)==null?void 0:Z.type)||"Unknown"):ue.features&&((Q=ue.features)==null||Q.forEach(ce=>{var K;(K=ce.geometry)!=null&&K.type&&re.add(ce.geometry.type)}));const Me=y.name||y.area_name||"서비스 지역";console.log(`서비스 지역 "${Me}" 지도에 추가 (타입: ${Array.from(re).join(", ")})`)}catch(ie){console.error(`서비스 지역 "${y.area_name}" 표시 실패:`,ie)}}))},_e=async()=>{var y;try{console.log("차량 목록 조회 중...");const d=await t.getAllVehiclesApiVehiclesGet();j.value=d.data||[],console.log(`차량 ${j.value.length}대 조회 완료`),console.log("차량 데이터:",j.value),(y=L.value)!=null&&y.includes("차량 목록 조회 실패")&&(L.value=null)}catch(d){console.error("차량 목록 조회 실패:",d),L.value=`차량 목록 조회 실패: ${d.message}`}},Ae=async()=>{try{console.log("수요응답 Trip 조회 중...");try{const y=await fetch(`${a}/api/on-demand-trips/calls`);if(y.ok){const d=await y.json();d&&d.length>0&&(console.log("📍 Call API 응답 구조 (첫 번째 call):",d[0]),console.log("📍 Call 필드명:",Object.keys(d[0])))}}catch(y){console.log("Call API 조회 스킵:",y)}try{const y=await fetch(`${a}/api/on-demand-trips/active`);if(y.ok){const d=await y.json();W.value=d||[],console.log("수요응답 활성 Trip:",d)}else throw new Error(`Active trips API failed: ${y.status}`)}catch(y){console.warn("활성 API 실패, 전체 조회 시도...",y);try{const d=await fetch(`${a}/api/on-demand-trips`);if(d.ok){const F=await d.json();W.value=F||[],console.log("=== 수요응답 Trip 전체 데이터 분석 ==="),console.log("전체 Trip 수:",F.length),F.forEach(ie=>{var Fe,ue;if(console.log(`🚗 수요응답 Trip ${ie.id}:`,{status:ie.status,vehicle_id:ie.vehicle_id,driver_id:ie.driver_id,start_time:ie.start_time,end_time:ie.end_time,current_passengers:ie.current_passengers,service_area_id:ie.service_area_id,has_calls:!!(ie.calls&&ie.calls.length>0),calls_count:((Fe=ie.calls)==null?void 0:Fe.length)||0,call_ids:((ue=ie.calls)==null?void 0:ue.map(E=>E.id))||[]}),ie.calls&&ie.calls.length>0){console.log("   📞 Call 데이터 구조 (첫 번째 call):",ie.calls[0]);const E=ie.calls[0].id;E&&fetch(`${a}/api/on-demand-trips/calls/${E}`).then(re=>re.json()).then(re=>{console.log(`   📍 Call #${E} 상세 정보:`,re)}).catch(re=>console.error(`Call #${E} 조회 실패:`,re))}});const Z=F.reduce((ie,Fe)=>(ie[Fe.status]=(ie[Fe.status]||0)+1,ie),{});console.log("상태별 Trip 수:",Z);const Q=F.filter(ie=>ie.status==="IN_PROGRESS");console.log("IN_PROGRESS Trip 수:",Q.length),Q.length>0&&console.log("IN_PROGRESS Trip vehicle_ids:",Q.map(ie=>ie.vehicle_id))}}catch(d){console.warn("수요응답 Trip 조회 실패:",d)}}console.log(`수요응답 Trip ${W.value.length}개 조회 완료`)}catch(y){console.error("수요응답 Trip 조회 실패:",y)}},ze=async()=>{try{console.log("정기노선 Trip 조회 중...");const y=new Date().toISOString().split("T")[0];try{const d=await n.getScheduledTripsApiPlanningScheduledTripsGet();d.data&&(X.value=d.data.filter(F=>F.status==="IN_PROGRESS"&&F.trip_date===y),console.log("정기노선 활성 Trip:",X.value))}catch{const F=await fetch(`${a}/api/planning/scheduled-trips?trip_date=${y}`);if(F.ok){const Z=await F.json();X.value=Z.filter(Q=>Q.status==="IN_PROGRESS"),console.log("정기노선 활성 Trip (fetch):",X.value)}}console.log(`정기노선 Trip ${X.value.length}개 조회 완료`)}catch(y){console.error("정기노선 Trip 조회 실패:",y)}},me=async y=>{var d,F,Z,Q,ie,Fe;if(!(!c.value||!y.trip_id))try{let ue=null;const E=y.trip_id;if(y.tripType==="SCHEDULED"){const re=await fetch(`${a}/api/driver/scheduled-trips/${E}/route`);if(re.ok){const Me=await re.text();if(Me)try{ue=JSON.parse(Me),be.value.set(y.id,{...ue,is_upward:ue.trip_direction==="UPWARD"||E%2===0,current_stop_index:ue.current_stop_sequence||0,total_stops:((d=ue.route_stops)==null?void 0:d.length)||0}),console.log(`정기노선 Trip ${E} Route API 업데이트 데이터:`,{trip_type:ue.trip_type,trip_status:ue.trip_status,current_node_id:ue.current_node_id,current_location:[ue.current_latitude,ue.current_longitude],route_points_count:((F=ue.route_points)==null?void 0:F.length)||0,heading_fields:{heading:ue.heading,current_location_heading:(Z=ue.current_location)==null?void 0:Z.heading,has_current_location_obj:!!ue.current_location}})}catch{console.log(`정기노선 Trip ${E} 경로 파싱 실패:`,Me)}}else console.log(`정기노선 Trip ${E} 경로 API 응답 실패:`,re.status)}else if(y.tripType==="ON_DEMAND"){const re=await fetch(`${a}/api/driver/on-demand-trips/${E}/route`);if(re.ok){const Me=await re.text();if(Me)try{ue=JSON.parse(Me),console.log(`수요응답 Trip ${E} Route API 업데이트 데이터:`,{trip_type:ue.trip_type,trip_status:ue.trip_status,current_node_id:ue.current_node_id,current_location:[ue.current_latitude,ue.current_longitude],route_points_count:((Q=ue.route_points)==null?void 0:Q.length)||0,heading_fields:{heading:ue.heading,current_location_heading:(ie=ue.current_location)==null?void 0:ie.heading,has_current_location_obj:!!ue.current_location}})}catch{console.log(`수요응답 Trip ${E} 경로 파싱 실패:`,Me)}}else console.log(`수요응답 Trip ${E} 경로 API 응답 실패:`,re.status)}if(ue){if(ue.current_latitude&&ue.current_longitude&&(y.current_latitude=ue.current_latitude,y.current_longitude=ue.current_longitude),((Fe=ue.current_location)==null?void 0:Fe.heading)!==void 0)y.heading=ue.current_location.heading,console.log(`차량 ${y.id} heading 업데이트:`,y.heading);else if(ue.heading!==void 0)y.heading=ue.heading,console.log(`차량 ${y.id} heading 업데이트:`,y.heading);else{const re=nn(y,ue);re!==null&&(y.heading=re,console.log(`차량 ${y.id} heading 계산됨:`,y.heading))}be.value.set(y.id,{last_node_id:ue.last_node_id,current_node_id:ue.current_node_id,current_link_id:ue.current_link_id,link_progress:ue.link_progress,trip_direction:ue.trip_direction,trip_status:ue.trip_status,current_stop_sequence:ue.current_stop_sequence,current_stop_name:ue.current_stop_name,is_returning:ue.trip_status==="RETURNING",route_links:ue.route_links,stops:ue.stops||ue.route_points}),await oe(y,ue),Ge(y,ue)&&_i(y,ue),await Ki()}else console.log(`차량 ${y.id} (Trip ${E}): 경로 데이터 없음`)}catch(ue){console.error(`차량 ${y.id} 경로 로드 실패:`,ue)}},oe=async(y,d)=>{if(!c.value)return;const F=d.current_latitude||y.current_latitude,Z=d.current_longitude||y.current_longitude;if(!F||!Z)return;let Q=p.value.get(y.id);if(Q){const ie=Et.latLng(F,Z);if(Q.getLatLng().distanceTo(ie)>5){Q.setLatLng(ie);const E=y.tripStatus==="RETURNING"?"#EA580C":y.tripType==="SCHEDULED"?"#2563EB":"#059669",re=Zi(y,E);Q.setIcon(re),it(Q,y,d)}}else vt(y);bt(y.id,F,Z)},Ge=(y,d)=>{const F=U.value.get(y.id)||0,Z=Date.now();if(Z-F>5e3)return U.value.set(y.id,Z),!0;const Q=k.value.get(y.id),ie=d.current_link_id||d.current_node_id;return Q!==ie?(k.value.set(y.id,ie),!0):!1},it=(y,d,F)=>{var ie,Fe;const Z=d.tripType==="SCHEDULED"?"정기노선":d.tripType==="ON_DEMAND"?"수요응답":"알 수 없음",Q=`
    <div class="vehicle-popup">
      <h4 class="font-semibold">${d.vehicle_number}</h4>
      <p class="text-sm text-gray-600">${Z}</p>
      <p class="text-xs text-gray-500">
        위치: ${(ie=F.current_latitude)==null?void 0:ie.toFixed(6)}, ${(Fe=F.current_longitude)==null?void 0:Fe.toFixed(6)}<br>
        방향: ${d.heading||0}°<br>
        승객: ${d.current_occupancy||0}/${d.capacity||0}명<br>
        상태: ${B(d.tripStatus)}
      </p>
    </div>
  `;y.bindPopup(Q,{autoPan:!1})},bt=(y,d,F)=>{if(!c.value)return;let Z=u.value.get(y)||[];Z.push([d,F]),Z.length>20&&(Z=Z.slice(-20)),u.value.set(y,Z);const Q=_.value.get(y);if(Q&&c.value.removeLayer(Q),Z.length>=2){const ie=Et.polyline(Z,{color:"#FF6600",weight:2,opacity:.6,dashArray:"3, 6",className:"trajectory-line"});ie.addTo(c.value),_.value.set(y,ie)}},vt=y=>{if(!c.value)return;const d=y.current_latitude,F=y.current_longitude;if(!d||!F)return;let Z="#6B7280";y.tripStatus==="RETURNING"?Z="#EA580C":y.tripType==="SCHEDULED"?Z="#2563EB":y.tripType==="ON_DEMAND"&&(Z="#059669");const Q=Zi(y,Z),ie=Et.marker([d,F],{icon:Q,zIndexOffset:1e3}),Fe=y.tripType==="SCHEDULED"?"정기노선":y.tripType==="ON_DEMAND"?"수요응답":"알 수 없음",ue=`
    <div class="vehicle-popup">
      <h4 class="font-semibold">${y.vehicle_number}</h4>
      <p class="text-sm text-gray-600">${Fe}</p>
      <p class="text-xs text-gray-500">
        위치: ${d.toFixed(6)}, ${F.toFixed(6)}<br>
        방향: ${y.heading||0}°<br>
        승객: ${y.current_occupancy||0}/${y.capacity||0}명<br>
        상태: ${B(y.tripStatus)}
      </p>
    </div>
  `;ie.bindPopup(ue,{autoPan:!1}),ie.addTo(c.value),p.value.set(y.id,ie)},on=y=>{var F,Z;const d=y.tripType==="SCHEDULED"?"정기노선":y.tripType==="ON_DEMAND"?"수요응답":"알 수 없음";return`
    <div class="vehicle-popup">
      <h4 class="font-semibold">${y.vehicle_number}</h4>
      <p class="text-sm text-gray-600">${d}</p>
      <p class="text-xs text-gray-500">
        위치: ${(F=y.current_latitude)==null?void 0:F.toFixed(6)}, ${(Z=y.current_longitude)==null?void 0:Z.toFixed(6)}<br>
        방향: ${y.heading||0}°<br>
        승객: ${y.current_occupancy||0}/${y.capacity||0}명<br>
        상태: ${B(y.tripStatus)}
      </p>
    </div>
  `},nn=(y,d)=>{try{P.value||(P.value=new Map);const F=P.value.get(y.id),Z=d.current_latitude,Q=d.current_longitude;if(!F||!Z||!Q)return P.value.set(y.id,{lat:Z,lng:Q,timestamp:Date.now()}),null;if(vs(F.lat,F.lng,Z,Q)<9e-5)return null;const Fe=bn(F.lat,F.lng,Z,Q);return P.value.set(y.id,{lat:Z,lng:Q,timestamp:Date.now()}),Math.round(Fe)}catch(F){return console.error("heading 계산 오류:",F),null}},vs=(y,d,F,Z)=>{const Q=F-y,ie=Z-d;return Math.sqrt(Q*Q+ie*ie)},bn=(y,d,F,Z)=>{const Q=(Z-d)*Math.PI/180,ie=y*Math.PI/180,Fe=F*Math.PI/180,ue=Math.sin(Q)*Math.cos(Fe),E=Math.cos(ie)*Math.sin(Fe)-Math.sin(ie)*Math.cos(Fe)*Math.cos(Q);return(Math.atan2(ue,E)*180/Math.PI+360)%360},Yi=(y,d,F)=>{if(!c.value||!d.start_node||!d.end_node)return;const Z=C.value.get(y);Z&&c.value.removeLayer(Z);const Q=d.start_node.latitude+(d.end_node.latitude-d.start_node.latitude)*F,ie=d.start_node.longitude+(d.end_node.longitude-d.start_node.longitude)*F,Fe=Et.divIcon({className:"progress-arrow",html:'<div style="color: #FF0000; font-size: 20px; font-weight: bold; text-shadow: 0 0 3px white;">→</div>',iconSize:[20,20],iconAnchor:[10,10]}),ue=Et.marker([Q,ie],{icon:Fe});ue.addTo(c.value),C.value.set(y,ue)},ji=async(y,d)=>{var Z,Q,ie,Fe,ue;const F=`${y}-${d}`;if(v.value.has(F)){const E=v.value.get(F);return console.log(`🔗 링크 캐시 히트 ${F}:`,{has_geojson:!!(E.geojson&&E.geojson.geometry),geojson_type:(Q=(Z=E.geojson)==null?void 0:Z.geometry)==null?void 0:Q.type,coordinates_count:(ue=(Fe=(ie=E.geojson)==null?void 0:ie.geometry)==null?void 0:Fe.coordinates)==null?void 0:ue.length}),E}try{if(console.log(`🔗 링크 캐시 사이즈: ${v.value.size}`),v.value.size===0){console.log("🌐 Network API에서 모든 링크 정보 로드 중...");const re=await r.getActiveLinksApiNetworkLinksGet();re.data?(console.log(`🌐 Network API 응답: ${re.data.length}개 링크`),re.data.forEach(Me=>{const ce=`${Me.from_node_id}-${Me.to_node_id}`;v.value.set(ce,Me)}),console.log(`🔗 링크 캐시 구축 완료: ${v.value.size}개 링크`)):console.warn("🌐 Network API 응답 데이터 없음")}const E=v.value.get(F)||null;return E||console.warn(`🔗 링크 ${F} 캐시에서 찾을 수 없음`),E}catch(E){return console.error("🌐 링크 정보 조회 실패:",E),null}},xs=y=>{var d;!c.value||!y.stops||(x.value.forEach(F=>{var Z;(Z=c.value)==null||Z.removeLayer(F)}),x.value.clear(),(d=y.stops)==null||d.forEach(F=>{const Z=Et.divIcon({className:"stop-marker",html:`
        <div class="stop-icon ${F.is_passed?"passed":""}" 
             style="background: ${F.is_passed?"#9CA3AF":"#3B82F6"}; 
                    width: 28px; height: 28px; border-radius: 50%; 
                    display: flex; align-items: center; justify-content: center;
                    border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">
          <span style="color: white; font-weight: bold; font-size: 12px;">${F.order||F.sequence||""}</span>
        </div>
      `,iconSize:[28,28],iconAnchor:[14,14]}),Q=Et.marker([F.latitude,F.longitude],{icon:Z}).bindPopup(`
        <b>${F.name||F.node_name}</b><br>
        순서: ${F.order||F.sequence}<br>
        ${F.arrival_time?`도착: ${Be(F.arrival_time)}`:""}
        ${F.is_passed?'<br><span style="color: #9CA3AF;">통과됨</span>':""}
      `,{autoPan:!1});if(Q.addTo(c.value),x.value.set(F.node_id,Q),y.next_node_id===F.node_id){const ie=Q.getPopup();ie&&(ie.options.autoPan=!1,Q.openPopup())}}))},_i=async(y,d)=>{var Fe,ue;if(!c.value)return;const F=m.value.get(y.id);F&&F.forEach(E=>{var re;return(re=c.value)==null?void 0:re.removeLayer(E)});const Z=C.value.get(y.id);Z&&(c.value.removeLayer(Z),C.value.delete(y.id));const Q=[];if(xs(d),d.route_links&&Array.isArray(d.route_links)){console.log(`route_links 배열 처리: ${d.route_links.length}개 링크`),console.log("첫 번째 링크 구조:",JSON.stringify(d.route_links[0],null,2)),d.route_links.forEach((E,re)=>{var Me,ce,K;console.log(`Link ${re+1} (ID: ${E.link_id}):`,{has_geojson:!!E.geojson,geojson_type:(Me=E.geojson)==null?void 0:Me.type,coordinates_count:(K=(ce=E.geojson)==null?void 0:ce.coordinates)==null?void 0:K.length,is_current:E.is_current,is_completed:E.is_completed})});for(const E of d.route_links){let re;const Me=E.is_completed?"#888888":E.is_current?"#FF0000":"#0066CC",ce=E.is_current?5:3,K=E.is_completed?.5:.8,ye=E.is_completed?"5, 10":void 0;if(E.geojson&&E.geojson.coordinates)console.log(`링크 ${E.link_id}: Route API의 GeoJSON 사용 (${E.geojson.coordinates.length}개 점)`),re=Et.geoJSON(E.geojson,{style:{color:Me,weight:ce,opacity:K,dashArray:ye}});else if(E.link_id&&E.start_node&&E.end_node){const ct=await ji(E.start_node.id||E.start_node.node_id,E.end_node.id||E.end_node.node_id);if(ct&&ct.geojson&&ct.geojson.geometry)console.log(`링크 ${E.link_id}: 네트워크 API에서 GeoJSON 가져옴`),re=Et.geoJSON(ct.geojson.geometry,{style:{color:Me,weight:ce,opacity:K,dashArray:ye}});else{console.log(`링크 ${E.link_id}: 네트워크 API에서도 GeoJSON 없음, 직선 연결`);const Ht=[[E.start_node.latitude,E.start_node.longitude],[E.end_node.latitude,E.end_node.longitude]];re=Et.polyline(Ht,{color:Me,weight:ce,opacity:K,dashArray:ye})}}else{console.log(`링크 ${E.link_id||"Unknown"}: 링크 정보 불완전, 직선 연결`);const ct=[[E.start_node.latitude,E.start_node.longitude],[E.end_node.latitude,E.end_node.longitude]];re=Et.polyline(ct,{color:Me,weight:ce,opacity:K,dashArray:ye})}re.addTo(c.value),Q.push(re),E.is_current&&d.link_progress&&Yi(y.id,E,d.link_progress)}m.value.set(y.id,Q),console.log(`차량 ${y.id}: ${Q.length}개 링크 표시 완료`);return}const ie=d.stops||d.route_points||d.waypoints||[];if(ie&&Array.isArray(ie)){console.log(`stops 배열 파싱: ${ie.length}개 노드`);for(let E=0;E<ie.length-1;E++){const re=ie[E],Me=ie[E+1];if(re.node_id&&Me.node_id){const ce=await ji(re.node_id,Me.node_id);ce&&ce.geojson&&ce.geojson.geometry&&ce.geojson.geometry.coordinates?ce.geojson.geometry.coordinates.forEach(ye=>{Array.isArray(ye)&&ye.length>=2&&routePoints.push([ye[1],ye[0]])}):(console.log(`링크 ${re.node_id}->${Me.node_id} GeoJSON 없음, 직선 연결`),routePoints.push([re.latitude,re.longitude]),E===ie.length-2&&routePoints.push([Me.latitude,Me.longitude]))}}console.log(`총 ${routePoints.length}개 좌표 포인트 생성`)}else Array.isArray(d)?(console.log(`직접 배열 파싱: ${d.length}개`),routePoints=d.map(E=>E.latitude&&E.longitude?[E.latitude,E.longitude]:E.lat&&E.lng?[E.lat,E.lng]:Array.isArray(E)&&E.length>=2?[E[0],E[1]]:null).filter(Boolean)):d.coordinates?(console.log(`coordinates 배열 파싱: ${d.coordinates.length}개`),routePoints=d.coordinates.map(E=>Array.isArray(E)&&E.length>=2?[E[1],E[0]]:null).filter(Boolean)):d.points?(console.log(`points 배열 파싱: ${d.points.length}개`),routePoints=d.points.map(E=>E.latitude&&E.longitude?[E.latitude,E.longitude]:null).filter(Boolean)):d.path?(console.log(`path 배열 파싱: ${d.path.length}개`),routePoints=d.path.map(E=>E.latitude&&E.longitude?[E.latitude,E.longitude]:E.lat&&E.lng?[E.lat,E.lng]:null).filter(Boolean)):console.warn("알 수 없는 경로 데이터 형식:",d);if(routePoints.length>0){const E=currentLocation.latitude||E,re=currentLocation.longitude||re;let Me=-1,ce=1/0;if(d.route_links){let K=0;for(const ye of d.route_links){const ct=((ue=(Fe=ye.geojson)==null?void 0:Fe.coordinates)==null?void 0:ue.length)||2;if(ye.is_current){Me=K+Math.floor(ct*linkProgress);break}if(ye.is_completed)K+=ct;else break}}if(Me===-1&&routePoints.forEach((K,ye)=>{const ct=Math.sqrt(Math.pow(K[0]-E,2)+Math.pow(K[1]-re,2));ct<ce&&(ce=ct,Me=ye)}),console.log(`차량 ${y.id}: 경로 포인트 ${routePoints.length}개, 현재 인덱스 ${Me}`),Me>0){const K=Et.polyline(routePoints.slice(0,Me+1),{color:"#9CA3AF",weight:3,opacity:.6,dashArray:"8, 8"});K.addTo(c.value),Q.push(K),console.log(`이전 경로 추가: ${Me+1}개 포인트`)}if(Me<routePoints.length-1&&Me>=0){const K=y.tripType==="SCHEDULED"?"#3B82F6":"#10B981",ye=Et.polyline(routePoints.slice(Me),{color:K,weight:4,opacity:.8});ye.addTo(c.value),Q.push(ye),console.log(`미래 경로 추가: ${routePoints.length-Me}개 포인트, 색상: ${K}`)}if(Me===-1){const K=y.tripType==="SCHEDULED"?"#3B82F6":"#10B981",ye=Et.polyline(routePoints,{color:K,weight:4,opacity:.8});ye.addTo(c.value),Q.push(ye),console.log(`전체 경로 추가: ${routePoints.length}개 포인트, 색상: ${K}`)}m.value.set(y.id,Q)}},Zi=(y,d)=>{const F=y.heading||0;return console.log(`차량 ${y.id} 아이콘 생성 - heading: ${F} (vehicle.heading: ${y.heading})`),Et.divIcon({html:`
      <div style="transform: rotate(${F}deg); transform-origin: center; filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.5));">
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
                  fill="${d}" 
                  stroke="none"
                  opacity="1"/>
            <!-- 중앙 점 -->
            <circle cx="0" cy="0" r="4" fill="white" stroke="black" stroke-width="1"/>
            <circle cx="0" cy="0" r="2.5" fill="${d}"/>
          </g>
        </svg>
      </div>
    `,className:"vehicle-icon",iconSize:[40,40],iconAnchor:[20,20]})};let On=!1;const Ki=async()=>{var y;if(On){console.log("updateRouteDiagram 이미 실행 중, 건너뛰기");return}On=!0,console.log("=== updateRouteDiagram 시작 ===");try{const d=new Map;let F=[];try{F=(await r.getActiveRoutesApiNetworkRoutesGet()).data||[],console.log(`전체 노선 ${F.length}개 로드`)}catch(E){console.error("전체 노선 정보 로드 실패:",E),F=[{id:1,name:"강서01",node_sequence:[134,135,136,137,138,139,140,141,142,143,144,145]}];const re=[{id:134,name:"강서경찰서",sequence:0},{id:135,name:"동양라이트",sequence:1},{id:136,name:"스마트빌리지",sequence:2},{id:137,name:"대저중앙초.가락중",sequence:3},{id:138,name:"에코3고등학교",sequence:4},{id:139,name:"에코3중학교.에코4초등학교",sequence:5},{id:140,name:"에코3중학교.에코4초등학교",sequence:6},{id:141,name:"에코3고등학교",sequence:7},{id:142,name:"대저중앙초.가락중",sequence:8},{id:143,name:"스마트빌리지",sequence:9},{id:144,name:"동양라이트",sequence:10},{id:145,name:"강서경찰서",sequence:11}];d.set(1,{routeId:1,routeName:"강서01",stops:re,buses:[]})}const Z="on-demand-route";if(W.value.length>0){const E={routeId:Z,routeName:"수요응답",stops:[],buses:[]},re=new Set,Me=[];for(const ce of W.value)ce.start_node&&!re.has(ce.start_node.id)&&(re.add(ce.start_node.id),Me.push({id:ce.start_node.id,name:ce.start_node.name||`정류장 ${ce.start_node.id}`,latitude:ce.start_node.latitude,longitude:ce.start_node.longitude,sequence:Me.length})),ce.end_node&&!re.has(ce.end_node.id)&&(re.add(ce.end_node.id),Me.push({id:ce.end_node.id,name:ce.end_node.name||`정류장 ${ce.end_node.id}`,latitude:ce.end_node.latitude,longitude:ce.end_node.longitude,sequence:Me.length}));E.stops=Me;for(const ce of W.value){const K=j.value.find(ye=>ye.id===ce.vehicle_id);if(K){const ye=be.value.get(K.id);let ct=50;ye&&ye.link_progress!==void 0?ct=ye.link_progress:ce.status==="PICKING_UP"?ct=25:ce.status==="IN_TRANSIT"&&(ct=75),E.buses.push({vehicleId:K.id,vehicleNumber:K.vehicle_number||K.id.toString(),position:Math.min(Math.max(ct,0),100),direction:"forward",tripId:ce.id,tripType:"ON_DEMAND",tripStatus:ce.status,currentStop:"",occupancy:K.current_occupancy||0,capacity:K.capacity||0})}}E.stops.length>0&&d.set(Z,E)}const Q=new Map;for(const E of X.value)E.vehicle_id&&E.status!=="SCHEDULED"&&E.status!=="COMPLETED"&&(Q.set(E.vehicle_id,{tripId:E.id,tripType:"SCHEDULED",routeId:E.route_id}),console.log(`정기노선 Trip #${E.id} -> 차량 ${E.vehicle_id}`));for(const E of W.value)E.vehicle_id&&E.status!=="SCHEDULED"&&E.status!=="COMPLETED"&&E.status!=="CANCELLED"&&(Q.set(E.vehicle_id,{tripId:E.id,tripType:"ON_DEMAND",routeId:E.route_id}),console.log(`수요응답 Trip #${E.id} -> 차량 ${E.vehicle_id} (기존 Trip 덮어쓰기)`));console.log("활성 Trip 매핑:",Array.from(Q.entries()).map(([E,re])=>{const Me=j.value.find(ce=>ce.id===E);return`차량 ${Me==null?void 0:Me.vehicle_number}(${E}): Trip #${re.tripId} (${re.tripType})`}));for(const E of X.value){if(!E.route_id||!E.vehicle_id)continue;const re=Q.get(E.vehicle_id);if(!re||re.tripId!==E.id){console.log(`Trip #${E.id}는 활성 상태가 아니거나 다른 Trip이 우선, 건너뛰기`);continue}const Me=E.route_id;if(!d.has(Me)){console.log(`새로운 노선 ${Me} 처리 시작`);let ye=Ve.value.get(Me);if(ye?ye={...ye,buses:[]}:(ye={routeId:Me,routeName:"",stops:[],buses:[]},Ve.value.set(Me,ye)),d.set(Me,ye),!ye.stops||ye.stops.length===0){const ct=F.find(Ht=>Ht.id===Me);ct&&(ye.routeName=ct.name||ct.route_name||`${Me}번 노선`);try{const Ht=await fetch(`${a}/api/network/routes/${Me}/details`);if(Ht.ok){const Nt=await Ht.json();console.log(`Route ${Me} 상세 정보:`,Nt),Nt.route_name&&(ye.routeName=Nt.route_name),Nt.nodes&&Nt.nodes.length>0&&(ye.stops=Nt.nodes.map((xt,wt)=>({id:xt.node_id||xt.id||wt,name:xt.node_name||xt.name||`정류장 ${wt+1}`,sequence:xt.sequence!==void 0?xt.sequence:wt,type:xt.node_type||"STATION",latitude:xt.latitude,longitude:xt.longitude})),ye.stops.sort((xt,wt)=>xt.sequence-wt.sequence),console.log(`노선 ${Me} (${ye.routeName})의 정류장 ${ye.stops.length}개:`,ye.stops.map(xt=>xt.name)),Ve.value.set(Me,ye))}else console.error(`Route ${Me} details API 실패: ${Ht.status}`)}catch(Ht){console.error(`Route ${Me} details API 호출 실패:`,Ht)}ye.routeName||(ye.routeName=E.route_name||`${Me}번 노선`)}}const ce=d.get(Me),K=j.value.find(ye=>ye.id===E.vehicle_id);if(K&&ce&&ce.stops.length>0){const ye=be.value.get(K.id);let ct=50,Ht="forward";if(ye&&ye.last_node_id){const xt=ce.stops.findIndex(wt=>wt.id===ye.last_node_id||wt.node_id===ye.last_node_id);if(xt!==-1){if(ct=xt/Math.max(ce.stops.length-1,1)*100,ye.link_progress!==void 0&&ye.link_progress!==null){const wt=100/Math.max(ce.stops.length-1,1),Vt=ye.link_progress/100*wt;ct=Math.min(100,ct+Vt)}(ye.trip_direction==="DOWNWARD"||ye.is_returning)&&(Ht="backward",ct=100-ct),console.log(`차량 ${K.vehicle_number} Route API 위치:`,{last_node_id:ye.last_node_id,lastNodeIndex:xt,link_progress:ye.link_progress,position:ct.toFixed(1),direction:Ht,trip_status:ye.trip_status})}else if(K.current_latitude&&K.current_longitude){let wt=0,Vt=1/0;ce.stops.forEach((ln,Jn)=>{if(ln.latitude&&ln.longitude){const Ka=Math.sqrt(Math.pow(K.current_latitude-ln.latitude,2)+Math.pow(K.current_longitude-ln.longitude,2));Ka<Vt&&(Vt=Ka,wt=Jn)}}),ct=wt/Math.max(ce.stops.length-1,1)*100}}else if(K.current_latitude&&K.current_longitude){let xt=0,wt=1/0;ce.stops.forEach((Vt,ln)=>{if(Vt.latitude&&Vt.longitude){const Jn=Math.sqrt(Math.pow(K.current_latitude-Vt.latitude,2)+Math.pow(K.current_longitude-Vt.longitude,2));Jn<wt&&(wt=Jn,xt=ln)}}),ct=xt/Math.max(ce.stops.length-1,1)*100}const Nt={vehicleId:K.id,vehicleNumber:K.vehicle_number||K.id.toString(),position:Math.min(Math.max(ct,0),100),direction:Ht,tripId:E.id,tripType:"SCHEDULED",tripStatus:E.status,currentStop:E.current_stop_name||"",occupancy:K.current_occupancy||0,capacity:K.capacity||0};ce.buses.push(Nt)}}for(const E of W.value){const re=j.value.find(ye=>ye.id===E.vehicle_id);if(!re)continue;const Me=Q.get(re.id);if(!Me||Me.tripId!==E.id){console.log(`수요응답 Trip #${E.id}는 차량 ${re.vehicle_number}(${re.id})의 활성 Trip이 아님, 건너뛰기`);continue}if(E.status==="SCHEDULED"||E.status==="COMPLETED"||E.status==="CANCELLED")continue;let ce=null;const K=be.value.get(re.id);if(E.route_id&&(ce=d.get(E.route_id)),ce||(ce=Array.from(d.values())[0]),ce&&ce.stops.length>0){let ye=50;console.log(`🔍 수요응답 차량 ${re.vehicle_number} (ID: ${re.id}) 디버깅:`),console.log("  - odTrip.route_id:",E.route_id),console.log("  - targetRoute.routeId:",ce==null?void 0:ce.routeId),console.log("  - targetRoute.routeName:",ce==null?void 0:ce.routeName),console.log("  - vehicleRoute 전체:",K),console.log("  - last_node_id:",K==null?void 0:K.last_node_id),console.log("  - current_node_id:",K==null?void 0:K.current_node_id),console.log("  - current_link_id:",K==null?void 0:K.current_link_id),console.log("  - link_progress:",K==null?void 0:K.link_progress),console.log("  - trip_status:",K==null?void 0:K.trip_status),console.log("  - targetRoute.stops:",ce.stops.map(Nt=>({id:Nt.id,name:Nt.name})));const ct=(K==null?void 0:K.last_node_id)||(K==null?void 0:K.current_node_id);if(K&&ct){const Nt=ce.stops.findIndex(xt=>xt.id===ct||xt.node_id===ct);if(Nt!==-1){const xt=ce.stops.length>2&&ce.stops[0].id===ce.stops[ce.stops.length-1].id;if(xt&&Nt===ce.stops.length-1?ye=99:ye=Nt/Math.max(ce.stops.length-1,1)*100,K.link_progress!==void 0&&K.link_progress!==null&&K.link_progress>0){const wt=100/Math.max(ce.stops.length-1,1),Vt=K.link_progress/100*wt;ye=Math.min(100,ye+Vt)}console.log(`수요응답 차량 ${re.vehicle_number} 노드 기반 위치:`,{node_id_used:ct,node_name:(y=ce.stops[Nt])==null?void 0:y.name,lastNodeIndex:Nt,total_stops:ce.stops.length,is_circular:xt,link_progress:K.link_progress,calculated_position:ye})}else if(re.current_latitude&&re.current_longitude){let xt=1/0,wt=0;ce.stops.forEach((Vt,ln)=>{if(Vt.latitude&&Vt.longitude){const Jn=Math.sqrt(Math.pow(re.current_latitude-Vt.latitude,2)+Math.pow(re.current_longitude-Vt.longitude,2));Jn<xt&&(xt=Jn,wt=ln)}}),ye=wt/Math.max(ce.stops.length-1,1)*100,console.log(`수요응답 차량 ${re.vehicle_number} GPS 기반 위치:`,{closestIndex:wt,calculated_position:ye})}}else if(re.current_latitude&&re.current_longitude){let Nt=1/0,xt=0;ce.stops.forEach((wt,Vt)=>{if(wt.latitude&&wt.longitude){const ln=Math.sqrt(Math.pow(re.current_latitude-wt.latitude,2)+Math.pow(re.current_longitude-wt.longitude,2));ln<Nt&&(Nt=ln,xt=Vt)}}),ye=xt/Math.max(ce.stops.length-1,1)*100,console.log(`수요응답 차량 ${re.vehicle_number} GPS 기반 위치 (대체):`,{closestIndex:xt,calculated_position:ye})}else E.status==="PICKING_UP"?ye=30:E.status==="IN_TRANSIT"?ye=70:E.status==="DROPPING_OFF"&&(ye=90),console.log(`수요응답 차량 ${re.vehicle_number} 상태 기반 위치:`,{status:E.status,calculated_position:ye});const Ht={vehicleId:re.id,vehicleNumber:re.vehicle_number||re.id.toString(),position:Math.min(Math.max(ye,0),100),direction:"forward",tripId:E.id,tripType:"ON_DEMAND",tripStatus:E.status,currentStop:(K==null?void 0:K.current_stop_name)||"",occupancy:re.current_occupancy||0,capacity:re.capacity||0};ce.buses.push(Ht),console.log(`수요응답 차량 ${re.vehicle_number}(ID: ${re.id}) 노선도에 추가 완료:`,{position:ye.toFixed(1),status:E.status,routeName:ce.routeName,last_node_id:K==null?void 0:K.last_node_id,current_link_id:K==null?void 0:K.current_link_id,link_progress:K==null?void 0:K.link_progress})}}d.forEach(E=>{E.stops.length===0&&console.warn(`노선 ${E.routeId}에 정리장 정보가 없습니다`)});const ie=Array.from(d.values()),Fe=new Set,ue=ie.filter(E=>Fe.has(E.routeId)?(console.warn(`중복된 노선 ${E.routeId} 발견, 제거`),!1):(Fe.add(E.routeId),!0));Y.value=ue,console.log("노선도 데이터 생성 완료:",Y.value.length,"개 노선"),console.log("노선 목록:",Y.value.map(E=>`${E.routeId}: ${E.routeName}(${E.stops.length}개 정류장, ${E.buses.length}대 버스)`)),console.log("routeMap 크기:",d.size,"uniqueRoutes 수:",ie.length,"filtered 수:",ue.length)}catch(d){console.error("노선도 데이터 업데이트 실패:",d)}finally{On=!1}},Ms=async()=>{if(!c.value)return;const y=new Set(Le.value.map(F=>F.id)),d=new Set(p.value.keys());for(const F of d)if(!y.has(F)){const Z=p.value.get(F);Z&&(c.value.removeLayer(Z),p.value.delete(F));const Q=m.value.get(F);Q&&(Q.forEach(Fe=>{var ue;return(ue=c.value)==null?void 0:ue.removeLayer(Fe)}),m.value.delete(F));const ie=_.value.get(F);ie&&(c.value.removeLayer(ie),_.value.delete(F))}Le.value.forEach(F=>{if(F.current_latitude&&F.current_longitude){const Z=p.value.get(F.id);if(!Z)vt(F),me(F);else{const Q=Et.latLng(F.current_latitude,F.current_longitude);Z.setLatLng(Q);const ie=on(F);Z.setPopupContent(ie),me(F)}}}),console.log(`${Le.value.length}대의 차량 차등 업데이트 완료`)},or=async()=>{A.value=!0,L.value=null;try{await Ji(),console.log("수동 새로고침 완료")}catch(y){console.error("수동 새로고침 실패:",y),L.value=y.message||"데이터 로드 중 오류가 발생했습니다."}finally{A.value=!1}},gn=async()=>{b.value=!0;try{L.value=null,await Ji(),pe.value>1e3&&console.log("백그라운드 업데이트 완료")}catch(y){console.error("백그라운드 업데이트 실패:",y),setTimeout(()=>{L.value&&(L.value=null)},3e3)}finally{b.value=!1}},vi=y=>{if(!c.value||!f.value)return;c.value.removeLayer(f.value);let d;switch(y){case"dark":d=Et.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{attribution:"© OpenStreetMap contributors © CARTO",maxZoom:19,subdomains:"abcd"});break;case"light":d=Et.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",{attribution:"© OpenStreetMap contributors © CARTO",maxZoom:19,subdomains:"abcd"});break;case"color":d=Et.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",{attribution:"© OpenStreetMap contributors © CARTO",maxZoom:19,subdomains:"abcd"});break;case"satellite":d=Et.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"© Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN",maxZoom:19});break}d.addTo(c.value),f.value=d,l.value=y,h.value=!1},Ji=async()=>{await _e(),await Promise.all([Ae(),ze(),Ce()]),await Ms(),await Ki(),J.value=new Date().toLocaleString("ko-KR")},lr=y=>{const d=Le.value.find(F=>F.id===y);we.value.has(y)?we.value.delete(y):(we.value.add(y),d&&d.current_latitude&&d.current_longitude&&S(d))},cr=()=>{Ue.value=null,ne.value=null,Oe.value={pedestrians:0,vehicles:0,bicycles:0}},S=y=>{if(c.value&&y.current_latitude&&y.current_longitude){console.log(`🗺️ 지도 중심 이동: 차량 ${y.vehicle_number} (ID: ${y.id})`),c.value.setView([y.current_latitude,y.current_longitude],15);const d=p.value.get(y.id);if(d){const F=d.getPopup();F&&(F.options.autoPan=!1),d.openPopup()}}},B=y=>{switch(y){case"SCHEDULED":return"예약됨";case"IN_PROGRESS":return"운행중";case"RETURNING":return"차고지 복귀중";case"COMPLETED":return"완료";case"CANCELLED":return"취소됨";case"IN_SERVICE":return"운행중";default:return"알 수 없음"}},$=()=>{const y=z.value;return y==="녹색"?"text-green-400":y==="황색"?"text-yellow-400":y==="적색"?"text-red-400":"text-gray-400"},q=()=>{if(st.value=Math.round(25+Math.random()*15),Oe.value={pedestrians:Math.floor(Math.random()*5),vehicles:Math.floor(Math.random()*8),bicycles:Math.floor(Math.random()*3)},V.value=Math.round((15+Math.random()*35)*10)/10,Math.random()<.1){const y=["녹색","황색","적색"];z.value=y[Math.floor(Math.random()*y.length)]}M.value>20&&(M.value=Math.max(20,M.value-.1)),w.value+=st.value/3600},H=(y,d)=>!y||!d?"N/A":`${y.toFixed(4)}, ${d.toFixed(4)}`,ge=()=>{console.log(`업데이트 주기를 ${pe.value}ms로 변경`),Se&&clearInterval(Se),Se=setInterval(gn,pe.value)},ae=y=>y.tripType==="ON_DEMAND"?W.value.find(d=>d.vehicle_id===y.id):y.tripType==="SCHEDULED"?X.value.find(d=>d.vehicle_id===y.id):null,ke=y=>({SCHEDULED:"text-blue-600",IN_PROGRESS:"text-green-600 font-medium",RETURNING:"text-orange-600 font-medium",COMPLETED:"text-gray-500",CANCELLED:"text-red-600"})[y||""]||"text-gray-500",Be=y=>{if(!y)return"-";try{return new Date(y).toLocaleString("ko-KR",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return y}},Ke=y=>{if(!y)return"-";try{return y.match(/^\d{2}:\d{2}$/)?y:new Date(y).toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return y}},et=y=>{if(y.start_node&&typeof y.start_node=="object")return y.start_node.name||`정류장 #${y.start_node.id}`;if(y.start_node_id)return`정류장 #${y.start_node_id}`;const d=y.pickup_address||y.origin_address||y.from_address;if(d)return d;const F=y.pickup_latitude||y.pickup_lat||y.origin_latitude||y.origin_lat,Z=y.pickup_longitude||y.pickup_lng||y.pickup_lon||y.origin_longitude||y.origin_lng||y.origin_lon;return F!==void 0&&Z!==void 0&&F!==null&&Z!==null?`${Number(F).toFixed(4)}, ${Number(Z).toFixed(4)}`:"위치 정보 없음"},qe=y=>{if(y.end_node&&typeof y.end_node=="object")return y.end_node.name||`정류장 #${y.end_node.id}`;if(y.end_node_id)return`정류장 #${y.end_node_id}`;const d=y.dropoff_address||y.destination_address||y.to_address;if(d)return d;const F=y.dropoff_latitude||y.dropoff_lat||y.destination_latitude||y.destination_lat,Z=y.dropoff_longitude||y.dropoff_lng||y.dropoff_lon||y.destination_longitude||y.destination_lng||y.destination_lon;return F!==void 0&&Z!==void 0&&F!==null&&Z!==null?`${Number(F).toFixed(4)}, ${Number(Z).toFixed(4)}`:"위치 정보 없음"},ut=y=>{if(!y)return"-";try{const d=new Date(y),Z=new Date().getTime()-d.getTime(),Q=Math.floor(Z/6e4);if(Q<60)return`${Q}분`;{const ie=Math.floor(Q/60),Fe=Q%60;return`${ie}시간 ${Fe}분`}}catch{return"-"}},tt=Ql(),Dt=async y=>{if(!y.trip_id){tt.warning("Trip ID가 없습니다.");return}if(confirm(`차량 ${y.vehicle_number}의 운행을 중단하시겠습니까?\\n\\n운행이 완료 처리되며 차량이 차고지로 복귀합니다.`))try{b.value=!0;const F=y.tripType||"SCHEDULED";console.log(`차량 ${y.id}: IN_PROGRESS → COMPLETED 상태 전환 시도`);const Z=await fetch(`${a}/api/planning/trips/${y.trip_id}/status?trip_type=${F}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:"COMPLETED"})});if(Z.ok)console.log(`차량 ${y.id} 운행 완료 처리됨`),await gn(),tt.success("운행이 완료 처리되었습니다.");else{const Q=await Z.text();if(console.error("운행완료 처리 실패:",Z.status,Q),Z.status===400&&Q.includes("상태 전환")){console.log("CANCELLED 상태로 시도");const ie=await fetch(`${a}/api/planning/trips/${y.trip_id}/status?trip_type=${F}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:"CANCELLED"})});if(ie.ok)console.log(`차량 ${y.id} 운행 취소됨`),await gn(),tt.warning("운행이 취소되었습니다.");else{const Fe=await ie.text();console.error("운행취소도 실패:",ie.status,Fe),tt.error(`운행중단 실패: COMPLETED 전환 실패 - ${Q}, CANCELLED 전환 실패 - ${Fe}`)}}else tt.error(`운행중단 실패: ${Z.status} - ${Q}`)}}catch(F){console.error("운행중단 오류:",F),tt.error(`운행중단 중 오류가 발생했습니다: ${F.message}`)}finally{b.value=!1}},At=async(y,d)=>{var Z,Q;if(!d.id){tt.warning("Call ID가 없습니다.");return}if(confirm(`Call #${d.id}의 승객 ${d.passenger_count||1}명을 하차처리 하시겠습니까?`))try{b.value=!0;const ie=new ur(e),Fe={dropoff_time:new Date().toISOString(),dropoff_location:y.current_latitude&&y.current_longitude?{latitude:y.current_latitude,longitude:y.current_longitude}:null};(await ie.reportPassengerDropoffApiDriverCallsCallIdDropoffPost(d.id,Fe)).data&&(tt.success(`Call #${d.id} 하차처리 완료`),y.current_occupancy&&d.passenger_count&&(y.current_occupancy=Math.max(0,y.current_occupancy-(d.passenger_count||1))),await gn())}catch(ie){console.error("하차처리 중 오류:",ie);const Fe=((Q=(Z=ie.response)==null?void 0:Z.data)==null?void 0:Q.detail)||ie.message||"알 수 없는 오류";tt.error(`하차처리 실패: ${Fe}`)}finally{b.value=!1}},St=async y=>{var F,Z;if(!y.trip_id){tt.warning("Trip ID가 없습니다.");return}if(confirm(`차량 ${y.vehicle_number}의 모든 승객 ${y.current_occupancy}명을 하차처리 하시겠습니까?`))try{b.value=!0;const Q=ae(y);if(!(Q!=null&&Q.calls)||Q.calls.length===0){tt.warning("하차 처리할 Call이 없습니다.");return}const ie=new ur(e),Fe={dropoff_time:new Date().toISOString(),dropoff_location:y.current_latitude&&y.current_longitude?{latitude:y.current_latitude,longitude:y.current_longitude}:null},ue=Q.calls.filter(Me=>Me&&Me.id).map(Me=>ie.reportPassengerDropoffApiDriverCallsCallIdDropoffPost(Me.id,Fe).catch(ce=>(console.error(`Call #${Me.id} 하차처리 실패:`,ce),null))),re=(await Promise.all(ue)).filter(Me=>Me!==null).length;re>0?(tt.success(`차량 ${y.vehicle_number}: ${re}개 Call 하차처리 완료`),y.current_occupancy=0,await gn()):tt.error("전체 하차처리 실패")}catch(Q){console.error("전체 하차처리 중 오류:",Q);const ie=((Z=(F=Q.response)==null?void 0:F.data)==null?void 0:Z.detail)||Q.message||"알 수 없는 오류";tt.error(`전체 하차처리 실패: ${ie}`)}finally{b.value=!1}},Je=y=>{tt.info("개별 하차처리 기능은 준비 중입니다.")},Ct=async y=>{if(!y.trip_id){tt.warning("Trip ID가 없습니다.");return}if(confirm(`차량 ${y.vehicle_number}의 복귀를 완료하시겠습니까?`))try{if(b.value=!0,y.tripType==="ON_DEMAND"){const F=await fetch(`${a}/api/driver/trips/${y.trip_id}/return-complete`,{method:"POST",headers:{"Content-Type":"application/json"}});if(F.ok)console.log(`수요응답 차량 ${y.id} 복귀 완료`),await gn(),tt.success("복귀가 완료되었습니다.");else{const Z=await F.text();console.error("복귀완료 실패:",F.status,Z),tt.error(`복귀완료 실패: ${F.status} - ${Z}`)}}else{const F=y.tripType||"SCHEDULED",Z=await fetch(`${a}/api/planning/trips/${y.trip_id}/status?trip_type=${F}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:"COMPLETED"})});if(Z.ok)console.log(`정기노선 차량 ${y.id} 복귀 완료`),await gn(),tt.success("복귀가 완료되었습니다.");else{const Q=await Z.text();console.error("복귀완료 실패:",Z.status,Q),tt.error(`복귀완료 실패: ${Z.status} - ${Q}`)}}}catch(F){console.error("복귀완료 오류:",F),tt.error(`복귀완료 중 오류가 발생했습니다: ${F.message}`)}finally{b.value=!1}},pt=y=>{y===1?Ze.value=!Ze.value:y===2?gt.value=!gt.value:y===3&&(at.value=!at.value)},Xt=y=>{y===1?(D.value=!1,ve.value&&ve.value.pause()):y===2?(dt.value=!1,We.value&&We.value.pause()):y===3&&($e.value=!1,Xe.value&&Xe.value.pause())},_n=(y,d)=>{if(!(d===1&&Ze.value)&&!(d===2&&gt.value)&&!(d===3&&at.value)&&y.target.closest(".pip-header")){xe.value=d;let F;if(d===1?F=ft.value:d===2?F=ee.value:d===3&&(F=Re.value),F){const Z=F.getBoundingClientRect();le.value={x:y.clientX-Z.left,y:y.clientY-Z.top},document.addEventListener("mousemove",$t),document.addEventListener("mouseup",Bn)}}},$t=y=>{if(xe.value!==null){let d;if(xe.value===1?d=ft.value:xe.value===2?d=ee.value:xe.value===3&&(d=Re.value),d){const F=y.clientX-le.value.x,Z=y.clientY-le.value.y,Q=window.innerWidth-d.offsetWidth,ie=window.innerHeight-d.offsetHeight;d.style.left=`${Math.max(0,Math.min(F,Q))}px`,d.style.top=`${Math.max(0,Math.min(Z,ie))}px`}}},Bn=()=>{xe.value=null,document.removeEventListener("mousemove",$t),document.removeEventListener("mouseup",Bn)},Pt=()=>{setTimeout(()=>{ve.value&&(ve.value.currentTime=0,ve.value.play())},100),setTimeout(()=>{We.value&&(We.value.currentTime=5,We.value.play())},500),setTimeout(()=>{Xe.value&&(Xe.value.currentTime=10,Xe.value.play())},1e3)};return gl(async()=>{A.value=!0;try{Ee(),await Ji(),console.log("초기 데이터 로드 완료")}catch(y){console.error("초기 데이터 로드 실패:",y),L.value=y.message||"데이터 로드 중 오류가 발생했습니다."}finally{A.value=!1}Pt(),he=setInterval(q,1e3),Se=setInterval(gn,pe.value)}),Kl(()=>{Se&&clearInterval(Se),he&&clearInterval(he),c.value&&c.value.remove()}),(y,d)=>{var F,Z,Q,ie,Fe,ue;return De(),Ne("div",Nm,[g("div",Fm,[d[22]||(d[22]=g("h1",{class:"text-lg font-semibold text-gray-700"},"실시간 차량 위치 추적",-1)),g("div",Om,[g("div",Bm,[d[15]||(d[15]=g("div",{class:"w-3 h-3 bg-blue-500 rounded-full"},null,-1)),g("span",zm,"정기노선 ("+fe(de.value)+"대)",1)]),g("div",km,[d[16]||(d[16]=g("div",{class:"w-3 h-3 bg-green-500 rounded-full"},null,-1)),g("span",Hm,"수요응답 ("+fe(Te.value)+"대)",1)]),g("div",Vm,[d[17]||(d[17]=g("div",{class:"w-3 h-3 bg-orange-500 rounded-full"},null,-1)),g("span",Gm,"차고지 복귀 중 ("+fe(je.value)+"대)",1)]),g("div",Wm,[d[18]||(d[18]=g("div",{class:"w-3 h-3 bg-gray-400 rounded-full"},null,-1)),g("span",Xm,"전체 차량 ("+fe(j.value.length)+"대)",1)]),g("div",$m,[g("span",null,"마지막 업데이트: "+fe(J.value),1),g("div",{class:Rt(["w-2 h-2 rounded-full transition-all duration-300",b.value?"bg-blue-500 animate-pulse":"bg-transparent"]),title:"업데이트 상태"},null,2)]),g("div",qm,[d[21]||(d[21]=g("label",{class:"text-sm text-gray-600"},"업데이트 주기:",-1)),ai(g("select",{"onUpdate:modelValue":d[0]||(d[0]=E=>pe.value=E),onChange:ge,class:"text-sm border border-gray-300 rounded px-2 py-1"},d[19]||(d[19]=[g("option",{value:1e3},"1초 (실시간)",-1),g("option",{value:3e3},"3초",-1),g("option",{value:5e3},"5초",-1),g("option",{value:1e4},"10초",-1),g("option",{value:3e4},"30초",-1)]),544),[[Jl,pe.value]]),pe.value===1e3?(De(),Ne("div",Ym,d[20]||(d[20]=[g("span",null,"⚡ 실시간 모드",-1)]))):rt("",!0),g("button",{onClick:or,disabled:A.value||b.value,class:"px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 disabled:opacity-50",style:{"min-width":"100px"}},fe(A.value?"로딩 중...":"새로고침"),9,jm)])])]),g("div",Zm,[g("div",Km,[Y.value.length>0?(De(),Ne("div",Jm,[g("div",Qm,[(De(!0),Ne(Tn,null,Qn(Y.value,E=>(De(),Ne("div",{key:E.routeId,class:"vertical-route-diagram"},[g("div",eg,[g("div",tg,[g("span",ng,fe(E.routeName.replace(/[^0-9]/g,"")||"01"),1),g("span",ig,fe(E.routeName.includes("순환")?"순환":"일반"),1)])]),g("div",sg,[d[28]||(d[28]=g("div",{class:"vertical-track center-track"},null,-1)),(De(!0),Ne(Tn,null,Qn(E.stops,(re,Me)=>(De(),Ne("div",{key:`stop-${re.id}`,class:Rt(["vertical-stop",{"is-terminal":Me===0||Me===E.stops.length-1,"has-bus":E.buses.some(ce=>Math.abs(ce.position-Me/Math.max(E.stops.length-1,1)*100)<5)}]),style:dr({top:`${Me/Math.max(E.stops.length-1,1)*100}%`}),title:re.name},[d[23]||(d[23]=g("div",{class:"vertical-stop-dot"},[g("div",{class:"stop-dot-inner"})],-1)),g("div",ag,[g("div",og,fe(re.name),1),g("div",lg,fe(re.id),1)])],14,rg))),128)),(De(!0),Ne(Tn,null,Qn(E.buses,re=>(De(),Ne("div",{key:`bus-${re.vehicleId}`,class:Rt(["vertical-bus-marker",{scheduled:re.tripType==="SCHEDULED","on-demand":re.tripType==="ON_DEMAND",returning:re.tripStatus==="RETURNING"}]),style:dr({top:`${re.position}%`}),title:`차량 ${re.vehicleNumber} (${re.tripType==="SCHEDULED"?"정기노선":"수요응답"})`},[g("div",dg,[g("div",ug,[(De(),Ne("svg",hg,[g("rect",{x:"4",y:"8",width:"24",height:"16",rx:"4",fill:re.tripStatus==="RETURNING"?"#EA580C":re.tripType==="SCHEDULED"?"#2563EB":"#059669"},null,8,fg),d[24]||(d[24]=g("rect",{x:"6",y:"10",width:"8",height:"6",rx:"1",fill:"white",opacity:"0.9"},null,-1)),d[25]||(d[25]=g("rect",{x:"16",y:"10",width:"8",height:"6",rx:"1",fill:"white",opacity:"0.9"},null,-1)),d[26]||(d[26]=g("rect",{x:"8",y:"18",width:"2",height:"3",fill:"white"},null,-1)),d[27]||(d[27]=g("rect",{x:"22",y:"18",width:"2",height:"3",fill:"white"},null,-1))]))]),g("div",{class:Rt(["bus-marker-number",{scheduled:re.tripType==="SCHEDULED","on-demand":re.tripType==="ON_DEMAND",returning:re.tripStatus==="RETURNING"}])},fe(re.vehicleNumber),3)])],14,cg))),128))])]))),128))])])):rt("",!0)]),g("div",pg,[g("div",{ref_key:"mapContainer",ref:o,class:"w-full h-full"},null,512),g("div",mg,[g("div",{class:"map-style-header",onClick:d[1]||(d[1]=E=>h.value=!h.value)},[d[30]||(d[30]=g("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"},[g("path",{"fill-rule":"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z","clip-rule":"evenodd"})],-1)),d[31]||(d[31]=g("span",null,"지도 스타일",-1)),(De(),Ne("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",class:Rt({"rotate-180":h.value})},d[29]||(d[29]=[g("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"},null,-1)]),2))]),ai(g("div",gg,[g("button",{onClick:d[2]||(d[2]=E=>vi("light")),class:Rt(["style-option",{active:l.value==="light"}])},d[32]||(d[32]=[g("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"},[g("path",{"fill-rule":"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z","clip-rule":"evenodd"})],-1),g("span",null,"라이트",-1),g("span",{class:"style-desc"},"깔끔하고 밝은 스타일",-1)]),2),g("button",{onClick:d[3]||(d[3]=E=>vi("dark")),class:Rt(["style-option",{active:l.value==="dark"}])},d[33]||(d[33]=[g("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"},[g("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})],-1),g("span",null,"다크",-1),g("span",{class:"style-desc"},"어두운 테마",-1)]),2),g("button",{onClick:d[4]||(d[4]=E=>vi("color")),class:Rt(["style-option",{active:l.value==="color"}])},d[34]||(d[34]=[g("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"},[g("path",{"fill-rule":"evenodd",d:"M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z","clip-rule":"evenodd"})],-1),g("span",null,"컬러",-1),g("span",{class:"style-desc"},"컬러풀한 스타일",-1)]),2),g("button",{onClick:d[5]||(d[5]=E=>vi("satellite")),class:Rt(["style-option",{active:l.value==="satellite"}])},d[35]||(d[35]=[g("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"},[g("path",{"fill-rule":"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z","clip-rule":"evenodd"})],-1),g("span",null,"위성",-1),g("span",{class:"style-desc"},"위성 사진",-1)]),2)],512),[[Qi,h.value]])]),ai(g("div",{ref_key:"pip1Container",ref:ft,class:Rt(["pip-video-container pip-1",{"pip-maximized":Ze.value,"pip-selected":Ue.value===0}]),onMousedown:d[8]||(d[8]=E=>_n(E,1))},[g("div",_g,[d[39]||(d[39]=g("span",{class:"pip-title"},"3D 시뮬레이션 (Chase)",-1)),g("div",vg,[g("button",{onClick:d[6]||(d[6]=E=>pt(1)),class:"pip-btn",title:"크기 조절"},[Ze.value?(De(),Ne("svg",Mg,d[37]||(d[37]=[g("path",{d:"M4 4h3v1H5v2H4V4zm5 0h3v3h-1V5H9V4zM4 9h1v2h2v1H4V9zm8 0h1v3H9v-1h3V9z"},null,-1)]))):(De(),Ne("svg",xg,d[36]||(d[36]=[g("path",{d:"M3 3v10h10V3H3zm9 9H4V4h8v8z"},null,-1)])))]),g("button",{onClick:d[7]||(d[7]=E=>Xt(1)),class:"pip-btn",title:"닫기"},d[38]||(d[38]=[g("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},[g("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})],-1)]))])]),g("div",yg,[(De(),Qa(pl,{key:`pip1-${Ze.value}`,class:"w-full h-full",cameraMode:"chase"}))]),Ze.value?(De(),Ne("div",Sg,[g("div",Eg,[d[44]||(d[44]=g("h3",{class:"panel-title"},"차량 정보",-1)),g("div",bg,[d[40]||(d[40]=g("span",{class:"info-label"},"차량 번호",-1)),g("span",Tg,fe(((F=ne.value)==null?void 0:F.vehicle_number)||"AV-001"),1)]),g("div",Ag,[d[41]||(d[41]=g("span",{class:"info-label"},"현재 속도",-1)),g("span",wg,fe(st.value)+" km/h",1)]),g("div",Rg,[d[42]||(d[42]=g("span",{class:"info-label"},"평균 속도",-1)),g("span",Cg,fe(Ye.value)+" km/h",1)]),g("div",Pg,[d[43]||(d[43]=g("span",{class:"info-label"},"운행 상태",-1)),g("span",Lg,fe(B(((Z=ne.value)==null?void 0:Z.tripStatus)||"IN_SERVICE")),1)]),d[45]||(d[45]=zn('<div class="info-item" data-v-72abc267><span class="info-label" data-v-72abc267>다음 정류장</span><span class="info-value text-yellow-400" data-v-72abc267>센텀시티역</span></div><div class="info-item" data-v-72abc267><span class="info-label" data-v-72abc267>도착 예정</span><span class="info-value" data-v-72abc267>2분 30초</span></div><div class="separator" data-v-72abc267></div><h4 class="sub-title" data-v-72abc267>3D 뷰 설정</h4><div class="info-item" data-v-72abc267><span class="info-label" data-v-72abc267>카메라 모드</span><span class="info-value" data-v-72abc267>추적 모드</span></div><div class="info-item" data-v-72abc267><span class="info-label" data-v-72abc267>렌더링 품질</span><span class="info-value" data-v-72abc267>높음</span></div>',6))]),d[46]||(d[46]=zn('<div class="info-panel right-panel" data-v-72abc267><h3 class="panel-title" data-v-72abc267>경로 정보</h3><div class="route-progress" data-v-72abc267><div class="route-item completed" data-v-72abc267><div class="route-icon" data-v-72abc267>✓</div><div class="route-info" data-v-72abc267><span class="route-name" data-v-72abc267>해운대역</span><span class="route-time" data-v-72abc267>09:15 출발</span></div></div><div class="route-line" data-v-72abc267></div><div class="route-item current" data-v-72abc267><div class="route-icon" data-v-72abc267>●</div><div class="route-info" data-v-72abc267><span class="route-name" data-v-72abc267>벡스코</span><span class="route-time" data-v-72abc267>09:22 통과</span></div></div><div class="route-line" data-v-72abc267></div><div class="route-item upcoming" data-v-72abc267><div class="route-icon" data-v-72abc267>○</div><div class="route-info" data-v-72abc267><span class="route-name" data-v-72abc267>센텀시티역</span><span class="route-time" data-v-72abc267>09:25 도착예정</span></div></div><div class="route-line" data-v-72abc267></div><div class="route-item upcoming" data-v-72abc267><div class="route-icon" data-v-72abc267>○</div><div class="route-info" data-v-72abc267><span class="route-name" data-v-72abc267>부산역</span><span class="route-time" data-v-72abc267>09:40 도착예정</span></div></div></div><div class="separator" data-v-72abc267></div><div class="info-item" data-v-72abc267><span class="info-label" data-v-72abc267>총 거리</span><span class="info-value" data-v-72abc267>15.2 km</span></div><div class="info-item" data-v-72abc267><span class="info-label" data-v-72abc267>남은 거리</span><span class="info-value" data-v-72abc267>8.7 km</span></div><div class="info-item" data-v-72abc267><span class="info-label" data-v-72abc267>예상 시간</span><span class="info-value" data-v-72abc267>18분</span></div></div>',1))])):rt("",!0)],34),[[Qi,D.value]]),ai(g("div",{ref_key:"pip2Container",ref:ee,class:Rt(["pip-video-container pip-2",{"pip-maximized":gt.value,"pip-selected":Ue.value===1}]),onMousedown:d[11]||(d[11]=E=>_n(E,2))},[g("div",Dg,[d[50]||(d[50]=g("span",{class:"pip-title"},"3D 시뮬레이션 (Top)",-1)),g("div",Ig,[g("button",{onClick:d[9]||(d[9]=E=>pt(2)),class:"pip-btn",title:"크기 조절"},[gt.value?(De(),Ne("svg",Ng,d[48]||(d[48]=[g("path",{d:"M4 4h3v1H5v2H4V4zm5 0h3v3h-1V5H9V4zM4 9h1v2h2v1H4V9zm8 0h1v3H9v-1h3V9z"},null,-1)]))):(De(),Ne("svg",Ug,d[47]||(d[47]=[g("path",{d:"M3 3v10h10V3H3zm9 9H4V4h8v8z"},null,-1)])))]),g("button",{onClick:d[10]||(d[10]=E=>Xt(2)),class:"pip-btn",title:"닫기"},d[49]||(d[49]=[g("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},[g("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})],-1)]))])]),g("div",Fg,[(De(),Qa(pl,{key:`pip2-${gt.value}`,class:"w-full h-full",cameraMode:"top"}))]),gt.value?(De(),Ne("div",Og,[g("div",Bg,[d[54]||(d[54]=g("h3",{class:"panel-title"},"교통 상황",-1)),g("div",zg,[g("div",kg,[d[51]||(d[51]=g("span",{class:"traffic-label"},"전체 차량 수",-1)),g("span",Hg,fe(y.vehiclesOnMap.size||12)+"대",1)]),g("div",Vg,[d[52]||(d[52]=g("span",{class:"traffic-label"},"평균 속도",-1)),g("span",Gg,fe(Ye.value)+" km/h",1)]),d[53]||(d[53]=zn('<div class="traffic-item" data-v-72abc267><span class="traffic-label" data-v-72abc267>혼잡도</span><div class="congestion-bar" data-v-72abc267><div class="congestion-level" style="width:35%;background:#10b981;" data-v-72abc267></div><span class="congestion-text" data-v-72abc267>원활</span></div></div>',1))]),d[55]||(d[55]=zn('<div class="separator" data-v-72abc267></div><h4 class="sub-title" data-v-72abc267>구간별 상태</h4><div class="section-status" data-v-72abc267><div class="section-item" data-v-72abc267><span class="section-name" data-v-72abc267>해운대역 - 벡스코</span><span class="status-badge good" data-v-72abc267>정상</span></div><div class="section-item" data-v-72abc267><span class="section-name" data-v-72abc267>벡스코 - 센텀시티</span><span class="status-badge warning" data-v-72abc267>지연</span></div><div class="section-item" data-v-72abc267><span class="section-name" data-v-72abc267>센텀시티 - 부산역</span><span class="status-badge good" data-v-72abc267>정상</span></div></div><div class="separator" data-v-72abc267></div><h4 class="sub-title" data-v-72abc267>3D 뷰 설정</h4><div class="info-item" data-v-72abc267><span class="info-label" data-v-72abc267>카메라 모드</span><span class="info-value" data-v-72abc267>탑뷰</span></div><div class="info-item" data-v-72abc267><span class="info-label" data-v-72abc267>줌 레벨</span><span class="info-value" data-v-72abc267>200m</span></div>',7))]),g("div",Wg,[d[59]||(d[59]=g("h3",{class:"panel-title"},"운행 차량",-1)),g("div",Xg,[g("div",$g,[d[56]||(d[56]=g("div",{class:"vehicle-status-dot active"},null,-1)),d[57]||(d[57]=g("div",{class:"vehicle-info"},[g("span",{class:"vehicle-id"},"AV-001"),g("span",{class:"vehicle-route"},"정기노선")],-1)),g("span",qg,fe(st.value)+" km/h",1)]),d[58]||(d[58]=zn('<div class="vehicle-item" data-v-72abc267><div class="vehicle-status-dot active" data-v-72abc267></div><div class="vehicle-info" data-v-72abc267><span class="vehicle-id" data-v-72abc267>AV-002</span><span class="vehicle-route" data-v-72abc267>수요응답</span></div><span class="vehicle-speed" data-v-72abc267>28 km/h</span></div><div class="vehicle-item" data-v-72abc267><div class="vehicle-status-dot active" data-v-72abc267></div><div class="vehicle-info" data-v-72abc267><span class="vehicle-id" data-v-72abc267>AV-003</span><span class="vehicle-route" data-v-72abc267>정기노선</span></div><span class="vehicle-speed" data-v-72abc267>35 km/h</span></div><div class="vehicle-item idle" data-v-72abc267><div class="vehicle-status-dot idle" data-v-72abc267></div><div class="vehicle-info" data-v-72abc267><span class="vehicle-id" data-v-72abc267>AV-004</span><span class="vehicle-route" data-v-72abc267>대기중</span></div><span class="vehicle-speed" data-v-72abc267>0 km/h</span></div>',3))]),d[60]||(d[60]=zn('<div class="separator" data-v-72abc267></div><div class="summary-stats" data-v-72abc267><div class="stat-item" data-v-72abc267><span class="stat-label" data-v-72abc267>운행중</span><span class="stat-value text-green-400" data-v-72abc267>8대</span></div><div class="stat-item" data-v-72abc267><span class="stat-label" data-v-72abc267>대기중</span><span class="stat-value text-yellow-400" data-v-72abc267>3대</span></div><div class="stat-item" data-v-72abc267><span class="stat-label" data-v-72abc267>정비중</span><span class="stat-value text-red-400" data-v-72abc267>1대</span></div></div>',2))])])):rt("",!0)],34),[[Qi,dt.value]]),ai(g("div",{ref_key:"pip3Container",ref:Re,class:Rt(["pip-video-container pip-3",{"pip-maximized":at.value,"pip-selected":Ue.value===2}]),onMousedown:d[14]||(d[14]=E=>_n(E,3))},[g("div",Yg,[d[64]||(d[64]=g("span",{class:"pip-title"},"차량 내부 영상",-1)),g("div",jg,[g("button",{onClick:d[12]||(d[12]=E=>pt(3)),class:"pip-btn",title:"크기 조절"},[at.value?(De(),Ne("svg",Kg,d[62]||(d[62]=[g("path",{d:"M4 4h3v1H5v2H4V4zm5 0h3v3h-1V5H9V4zM4 9h1v2h2v1H4V9zm8 0h1v3H9v-1h3V9z"},null,-1)]))):(De(),Ne("svg",Zg,d[61]||(d[61]=[g("path",{d:"M3 3v10h10V3H3zm9 9H4V4h8v8z"},null,-1)])))]),g("button",{onClick:d[13]||(d[13]=E=>Xt(3)),class:"pip-btn",title:"닫기"},d[63]||(d[63]=[g("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},[g("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})],-1)]))])]),g("video",{ref_key:"video3Player",ref:Xe,class:"pip-video",src:"/generated.mp4",controls:"",autoplay:"",loop:"",muted:""},null,512),at.value?(De(),Ne("div",Jg,[g("div",Qg,[d[72]||(d[72]=g("h3",{class:"panel-title"},"차량 정보",-1)),g("div",e_,[d[65]||(d[65]=g("span",{class:"info-label"},"차량 번호",-1)),g("span",t_,fe(((Q=ne.value)==null?void 0:Q.vehicle_number)||"AV-001"),1)]),g("div",n_,[d[66]||(d[66]=g("span",{class:"info-label"},"현재 속도",-1)),g("span",i_,fe(st.value)+" km/h",1)]),g("div",s_,[d[67]||(d[67]=g("span",{class:"info-label"},"평균 속도",-1)),g("span",r_,fe(Ye.value)+" km/h",1)]),g("div",a_,[d[68]||(d[68]=g("span",{class:"info-label"},"주행 거리",-1)),g("span",o_,fe(w.value.toFixed(1))+" km",1)]),g("div",l_,[d[69]||(d[69]=g("span",{class:"info-label"},"운행 상태",-1)),g("span",c_,fe(B(((ie=ne.value)==null?void 0:ie.tripStatus)||"IN_SERVICE")),1)]),g("div",d_,[d[70]||(d[70]=g("span",{class:"info-label"},"승객 수",-1)),g("span",u_,fe(((Fe=ne.value)==null?void 0:Fe.current_occupancy)||0)+" / "+fe(((ue=ne.value)==null?void 0:ue.capacity)||20)+"명",1)]),g("div",h_,[d[71]||(d[71]=g("span",{class:"info-label"},"배터리",-1)),g("div",f_,[g("div",{class:"battery-level",style:dr({width:M.value+"%"})},null,4),g("span",p_,fe(M.value)+"%",1)])])]),g("div",m_,[d[82]||(d[82]=g("h3",{class:"panel-title"},"Object 감지",-1)),g("div",g_,[d[74]||(d[74]=g("div",{class:"detection-icon pedestrian"},[g("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},[g("path",{d:"M12 2C13.1 2 14 2.9 14 4S13.1 6 12 6 10 5.1 10 4 10.9 2 12 2M10 20V12L7.5 8.6C7.1 8 7.1 7.2 7.5 6.6L10 3H14L16.5 6.6C16.9 7.2 16.9 8 16.5 8.6L14 12V20H10Z"})])],-1)),g("div",__,[d[73]||(d[73]=g("span",{class:"detection-label"},"보행자",-1)),g("span",v_,fe(Oe.value.pedestrians)+"명",1)])]),g("div",x_,[d[76]||(d[76]=g("div",{class:"detection-icon vehicle"},[g("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},[g("path",{d:"M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5S5.67 13 6.5 13 8 13.67 8 14.5 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5S16.67 13 17.5 13 19 13.67 19 14.5 18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z"})])],-1)),g("div",M_,[d[75]||(d[75]=g("span",{class:"detection-label"},"차량",-1)),g("span",y_,fe(Oe.value.vehicles)+"대",1)])]),g("div",S_,[d[78]||(d[78]=g("div",{class:"detection-icon bicycle"},[g("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},[g("path",{d:"M15.5 5.5C16.61 5.5 17.5 4.61 17.5 3.5S16.61 1.5 15.5 1.5 13.5 2.39 13.5 3.5 14.39 5.5 15.5 5.5M5 12C2.24 12 0 14.24 0 17S2.24 22 5 22 10 19.76 10 17 7.76 12 5 12M5 20.5C3.07 20.5 1.5 18.93 1.5 17S3.07 13.5 5 13.5 8.5 15.07 8.5 17 6.93 20.5 5 20.5M10.8 10.5L8.5 8.42L9.91 5.66C10.27 5 11.05 4.73 11.71 5.08L15.15 7.25C15.62 7.5 16 8 16 8.5V12H14.5V9.5L13.62 9L11.46 12.71L12.5 14V18H11V13.2L10.8 10.5M19 12C16.24 12 14 14.24 14 17S16.24 22 19 22 24 19.76 24 17 21.76 12 19 12M19 20.5C17.07 20.5 15.5 18.93 15.5 17S17.07 13.5 19 13.5 22.5 15.07 22.5 17 20.93 20.5 19 20.5Z"})])],-1)),g("div",E_,[d[77]||(d[77]=g("span",{class:"detection-label"},"자전거",-1)),g("span",b_,fe(Oe.value.bicycles)+"대",1)])]),d[83]||(d[83]=g("div",{class:"detection-separator"},null,-1)),g("div",T_,[g("div",A_,[d[79]||(d[79]=g("span",{class:"status-label"},"전방 거리",-1)),g("span",{class:Rt(["status-value",{"text-red-400":V.value<10}])},fe(V.value.toFixed(1))+"m ",3)]),g("div",w_,[d[80]||(d[80]=g("span",{class:"status-label"},"신호등",-1)),g("span",{class:Rt(["status-value",$()])},fe(z.value),3)]),d[81]||(d[81]=g("div",{class:"status-item"},[g("span",{class:"status-label"},"센서 상태"),g("span",{class:"status-value text-green-400"},"정상")],-1))])])])):rt("",!0)],34),[[Qi,$e.value]]),ne.value&&Ue.value!==null?(De(),Ne("div",{key:0,class:Rt(["vehicle-info-panel",{"panel-expanded":Ue.value!==null}])},[g("div",{class:"panel-header"},[d[85]||(d[85]=g("h3",{class:"panel-title"},"차량 상세 정보",-1)),g("button",{onClick:cr,class:"close-btn"},d[84]||(d[84]=[g("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"},[g("path",{d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"})],-1)]))]),g("div",R_,[g("div",C_,[d[90]||(d[90]=g("h4",{class:"section-title"},"차량 정보",-1)),g("div",P_,[g("div",L_,[d[86]||(d[86]=g("span",{class:"info-label"},"차량 번호",-1)),g("span",D_,fe(ne.value.vehicle_number),1)]),g("div",I_,[d[87]||(d[87]=g("span",{class:"info-label"},"차량 ID",-1)),g("span",U_,"#"+fe(ne.value.id),1)]),g("div",N_,[d[88]||(d[88]=g("span",{class:"info-label"},"운행 타입",-1)),g("span",{class:Rt(["info-value",ne.value.tripType==="SCHEDULED"?"text-blue-600":"text-green-600"])},fe(ne.value.tripType==="SCHEDULED"?"정기노선":"수요응답"),3)]),g("div",F_,[d[89]||(d[89]=g("span",{class:"info-label"},"상태",-1)),g("span",{class:Rt(["info-value",ke(ne.value.tripStatus)])},fe(B(ne.value.tripStatus)),3)])])]),g("div",O_,[d[95]||(d[95]=g("h4",{class:"section-title"},"운행 정보",-1)),g("div",B_,[g("div",z_,[d[91]||(d[91]=g("span",{class:"info-label"},"Trip ID",-1)),g("span",k_,"#"+fe(ne.value.trip_id),1)]),g("div",H_,[d[92]||(d[92]=g("span",{class:"info-label"},"승객",-1)),g("span",V_,fe(ne.value.current_occupancy||0)+"/"+fe(ne.value.capacity||0)+"명",1)]),ne.value.driver_id?(De(),Ne("div",G_,[d[93]||(d[93]=g("span",{class:"info-label"},"운전자 ID",-1)),g("span",W_,"#"+fe(ne.value.driver_id),1)])):rt("",!0),ne.value.route_id?(De(),Ne("div",X_,[d[94]||(d[94]=g("span",{class:"info-label"},"노선 ID",-1)),g("span",$_,"#"+fe(ne.value.route_id),1)])):rt("",!0)])]),g("div",q_,[d[101]||(d[101]=g("h4",{class:"section-title"},"위치 정보",-1)),g("div",Y_,[g("div",j_,[d[96]||(d[96]=g("span",{class:"info-label"},"현재 좌표",-1)),g("span",Z_,fe(H(ne.value.current_latitude,ne.value.current_longitude)),1)]),g("div",K_,[d[97]||(d[97]=g("span",{class:"info-label"},"속도",-1)),g("span",J_,fe(ne.value.speed||0)+" km/h",1)]),g("div",Q_,[d[98]||(d[98]=g("span",{class:"info-label"},"방향",-1)),g("span",ev,fe(ne.value.heading||0)+"°",1)]),ne.value.last_node_id?(De(),Ne("div",tv,[d[99]||(d[99]=g("span",{class:"info-label"},"마지막 노드",-1)),g("span",nv,[ys(fe(yt(ne.value.last_node_id))+" ",1),g("span",iv,"(#"+fe(ne.value.last_node_id)+")",1)])])):rt("",!0),ne.value.current_link_id?(De(),Ne("div",sv,[d[100]||(d[100]=g("span",{class:"info-label"},"현재 링크",-1)),g("span",rv,"#"+fe(ne.value.current_link_id),1)])):rt("",!0)])]),g("div",av,[d[110]||(d[110]=g("h4",{class:"section-title"},"객체 감지 정보",-1)),g("div",ov,[g("div",lv,[d[103]||(d[103]=g("div",{class:"detection-icon pedestrian"},null,-1)),g("div",cv,[d[102]||(d[102]=g("span",{class:"detection-label"},"보행자",-1)),g("span",dv,fe(Oe.value.pedestrians||0),1)])]),g("div",uv,[d[105]||(d[105]=g("div",{class:"detection-icon vehicle"},null,-1)),g("div",hv,[d[104]||(d[104]=g("span",{class:"detection-label"},"차량",-1)),g("span",fv,fe(Oe.value.vehicles||0),1)])]),g("div",pv,[d[107]||(d[107]=g("div",{class:"detection-icon bicycle"},null,-1)),g("div",mv,[d[106]||(d[106]=g("span",{class:"detection-label"},"자전거",-1)),g("span",gv,fe(Oe.value.bicycles||0),1)])]),g("div",_v,[d[109]||(d[109]=g("div",{class:"detection-icon signal"},null,-1)),g("div",vv,[d[108]||(d[108]=g("span",{class:"detection-label"},"신호등",-1)),g("span",{class:Rt(["detection-status",te.value])},fe(z.value),3)])])])]),d[134]||(d[134]=zn('<div class="info-section" data-v-72abc267><h4 class="section-title" data-v-72abc267>센서 데이터</h4><div class="sensor-grid" data-v-72abc267><div class="sensor-item" data-v-72abc267><span class="sensor-label" data-v-72abc267>LiDAR</span><div class="sensor-bar" data-v-72abc267><div class="sensor-fill" style="width:85%;" data-v-72abc267></div></div><span class="sensor-value" data-v-72abc267>정상</span></div><div class="sensor-item" data-v-72abc267><span class="sensor-label" data-v-72abc267>Camera</span><div class="sensor-bar" data-v-72abc267><div class="sensor-fill" style="width:92%;" data-v-72abc267></div></div><span class="sensor-value" data-v-72abc267>정상</span></div><div class="sensor-item" data-v-72abc267><span class="sensor-label" data-v-72abc267>GPS</span><div class="sensor-bar" data-v-72abc267><div class="sensor-fill" style="width:98%;" data-v-72abc267></div></div><span class="sensor-value" data-v-72abc267>정상</span></div><div class="sensor-item" data-v-72abc267><span class="sensor-label" data-v-72abc267>IMU</span><div class="sensor-bar" data-v-72abc267><div class="sensor-fill" style="width:90%;" data-v-72abc267></div></div><span class="sensor-value" data-v-72abc267>정상</span></div></div></div>',1)),g("div",xv,[d[133]||(d[133]=g("h4",{class:"section-title"},"ODD 운영설계영역 상태",-1)),g("div",{class:Rt(["odd-status-card",N.value.inODD?"status-safe":"status-warning"])},[g("div",Mv,[g("span",yv,fe(N.value.inODD?"✅":"⚠️"),1),d[111]||(d[111]=g("span",{class:"odd-status-title"},"ODD 범위 상태",-1))]),g("div",Sv,[g("span",Ev,fe(N.value.inODD?"ODD 내 운행 중":"ODD 이탈"),1),N.value.distanceToBoundary?(De(),Ne("span",bv," 경계까지: "+fe(N.value.distanceToBoundary)+"m ",1)):rt("",!0)])],2),g("div",Tv,[d[120]||(d[120]=g("h5",{class:"subsection-title"},"환경 조건",-1)),g("div",Av,[g("div",wv,[d[113]||(d[113]=g("span",{class:"condition-icon"},"🌤️",-1)),g("div",Rv,[d[112]||(d[112]=g("span",{class:"condition-label"},"날씨",-1)),g("span",Cv,fe(N.value.weather),1)])]),g("div",Pv,[d[115]||(d[115]=g("span",{class:"condition-icon"},"☀️",-1)),g("div",Lv,[d[114]||(d[114]=g("span",{class:"condition-label"},"조도",-1)),g("span",Dv,fe(N.value.lighting),1)])]),g("div",Iv,[d[117]||(d[117]=g("span",{class:"condition-icon"},"🛣️",-1)),g("div",Uv,[d[116]||(d[116]=g("span",{class:"condition-label"},"도로",-1)),g("span",Nv,fe(N.value.roadCondition),1)])]),g("div",Fv,[d[119]||(d[119]=g("span",{class:"condition-icon"},"🌡️",-1)),g("div",Ov,[d[118]||(d[118]=g("span",{class:"condition-label"},"온도",-1)),g("span",Bv,fe(N.value.temperature)+"°C",1)])])])]),g("div",zv,[d[128]||(d[128]=g("h5",{class:"subsection-title"},"시스템 한계 상황",-1)),g("div",kv,[g("div",{class:Rt(["limit-item",{"limit-active":N.value.systemLimits.oddExceeded}])},d[121]||(d[121]=[g("span",{class:"limit-indicator"},null,-1),g("span",{class:"limit-text"},"ODD 범위 벗어남",-1)]),2),g("div",{class:Rt(["limit-item",{"limit-active":N.value.systemLimits.sensorFailure}])},d[122]||(d[122]=[g("span",{class:"limit-indicator"},null,-1),g("span",{class:"limit-text"},"센서 장애",-1)]),2),g("div",{class:Rt(["limit-item",{"limit-active":N.value.systemLimits.weatherLimit}])},d[123]||(d[123]=[g("span",{class:"limit-indicator"},null,-1),g("span",{class:"limit-text"},"날씨 제한",-1)]),2),g("div",{class:Rt(["limit-item",{"limit-active":N.value.systemLimits.gpsLoss}])},d[124]||(d[124]=[g("span",{class:"limit-indicator"},null,-1),g("span",{class:"limit-text"},"GPS 신호 손실",-1)]),2)]),N.value.driverInterventionRequired?(De(),Ne("div",Hv,[d[126]||(d[126]=g("div",{class:"intervention-icon"},"⚠️",-1)),g("div",Vv,[d[125]||(d[125]=g("span",{class:"intervention-title"},"운전자 개입 필요",-1)),g("span",Gv,fe(N.value.interventionReason),1)])])):rt("",!0),g("div",{class:Rt(["safety-stop-status",{active:N.value.safetyStopAvailable}])},[d[127]||(d[127]=g("span",{class:"safety-icon"},"🛑",-1)),g("span",Wv,"안전 정차 "+fe(N.value.safetyStopAvailable?"가능":"불가능"),1)],2)]),N.value.approachingBoundary?(De(),Ne("div",Xv,[d[132]||(d[132]=g("div",{class:"warning-header"},[g("span",{class:"warning-icon"},"⚠️"),g("span",{class:"warning-title"},"ODD 경계 접근 중")],-1)),g("div",$v,[g("div",qv,[d[129]||(d[129]=g("span",{class:"distance-label"},"경계까지 거리:",-1)),g("span",Yv,fe(N.value.distanceToBoundary)+"m",1)]),g("div",jv,[d[130]||(d[130]=g("span",{class:"eta-label"},"예상 도달 시간:",-1)),g("span",Zv,fe(N.value.etaToBoundary)+"초",1)]),g("div",Kv,[d[131]||(d[131]=g("span",{class:"action-label"},"권장 조치",-1)),g("span",Jv,fe(N.value.recommendedAction),1)])])])):rt("",!0)])])],2)):rt("",!0),d[137]||(d[137]=zn('<div class="legend-box" data-v-72abc267><h4 class="font-semibold text-sm mb-2" data-v-72abc267>범례</h4><div class="legend-section mb-3" data-v-72abc267><div class="legend-title text-xs font-medium text-gray-700 mb-1" data-v-72abc267>경로 표시</div><div class="legend-item" data-v-72abc267><div class="legend-line" style="background:#0066CC;height:3px;" data-v-72abc267></div><span class="legend-label" data-v-72abc267>예정 경로 (미래)</span></div><div class="legend-item" data-v-72abc267><div class="legend-line" style="background:#FF0000;height:5px;" data-v-72abc267></div><span class="legend-label" data-v-72abc267>현재 주행 중인 구간</span></div><div class="legend-item" data-v-72abc267><div class="legend-line legend-dashed" style="background:#888888;height:3px;" data-v-72abc267></div><span class="legend-label" data-v-72abc267>이미 지나간 경로</span></div><div class="legend-item" data-v-72abc267><div class="legend-line legend-dashed" style="background:#FF6600;height:2px;" data-v-72abc267></div><span class="legend-label" data-v-72abc267>차량 이동 궤적</span></div></div><div class="legend-section mb-3" data-v-72abc267><div class="legend-title text-xs font-medium text-gray-700 mb-1" data-v-72abc267>차량 마커</div><div class="legend-item" data-v-72abc267><div class="legend-marker" style="background:#2563EB;" data-v-72abc267></div><span class="legend-label" data-v-72abc267>정기노선 차량</span></div><div class="legend-item" data-v-72abc267><div class="legend-marker" style="background:#059669;" data-v-72abc267></div><span class="legend-label" data-v-72abc267>수요응답 차량</span></div><div class="legend-item" data-v-72abc267><div class="legend-marker" style="background:#EA580C;" data-v-72abc267></div><span class="legend-label" data-v-72abc267>차고지 복귀 중</span></div></div><div class="legend-section" data-v-72abc267><div class="legend-title text-xs font-medium text-gray-700 mb-1" data-v-72abc267>정류장</div><div class="legend-item" data-v-72abc267><div class="legend-stop" style="background:#3B82F6;" data-v-72abc267></div><span class="legend-label" data-v-72abc267>예정 정류장</span></div><div class="legend-item" data-v-72abc267><div class="legend-stop" style="background:#9CA3AF;" data-v-72abc267></div><span class="legend-label" data-v-72abc267>통과한 정류장</span></div></div></div>',1)),A.value?(De(),Ne("div",Qv,d[135]||(d[135]=[g("div",{class:"text-center"},[g("div",{class:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"}),g("p",{class:"text-gray-600"},"차량 위치 정보를 불러오는 중...")],-1)]))):rt("",!0),L.value?(De(),Ne("div",e0,[d[136]||(d[136]=g("p",{class:"font-semibold"},"오류 발생",-1)),g("p",t0,fe(L.value),1)])):rt("",!0)]),g("div",n0,[g("div",i0,[d[170]||(d[170]=g("h3",{class:"text-lg font-semibold mb-4"},"운행 중 차량 목록",-1)),Le.value.length===0?(De(),Ne("div",s0,d[138]||(d[138]=[g("p",null,"현재 운행 중인 차량이 없습니다.",-1)]))):(De(),Ne("div",r0,[(De(!0),Ne(Tn,null,Qn(Le.value,(E,re)=>{var Me,ce;return De(),Ne("div",{key:E.id,class:"vehicle-card p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors",onClick:K=>lr(E.id)},[g("div",o0,[g("div",l0,[g("div",{class:Rt(["w-3 h-3 rounded-full",E.tripType==="SCHEDULED"?"bg-blue-500":E.tripType==="ON_DEMAND"?"bg-green-500":"bg-gray-500"])},null,2),g("span",c0,fe(E.vehicle_number),1)]),g("span",d0,fe(E.tripType==="SCHEDULED"?"정기노선":"수요응답"),1)]),g("div",u0,[g("div",h0,[d[139]||(d[139]=g("span",{class:"font-medium"},"차량 ID:",-1)),g("span",f0,"#"+fe(E.id),1)]),E.trip_id?(De(),Ne("div",p0,[g("span",m0,fe(E.tripType==="ON_DEMAND"?"Trip ID (수요응답):":"운행 ID:"),1),g("span",g0,"#"+fe(E.trip_id),1)])):rt("",!0),E.tripType==="ON_DEMAND"?(De(),Ne("div",_0,[d[145]||(d[145]=g("div",{class:"font-medium text-green-800 mb-1"},"🔍 디버깅 정보",-1)),g("div",v0,[g("div",x0,[d[140]||(d[140]=g("span",null,"Trip ID:",-1)),g("span",M0,"#"+fe(E.trip_id),1)]),g("div",y0,[d[141]||(d[141]=g("span",null,"Vehicle ID:",-1)),g("span",S0,"#"+fe(E.id),1)]),ae(E)?(De(),Ne("div",E0,[ae(E).calls?(De(),Ne("div",b0,[d[142]||(d[142]=g("span",null,"할당된 Call 수:",-1)),g("span",T0,fe(((Me=ae(E).calls)==null?void 0:Me.length)||0)+"개",1)])):rt("",!0),ae(E).calls&&ae(E).calls.length>0?(De(),Ne("div",A0,[d[143]||(d[143]=g("span",{class:"text-green-600"},"Call IDs:",-1)),g("div",w0,[(De(!0),Ne(Tn,null,Qn(ae(E).calls,K=>(De(),Ne("span",{key:K.id,class:"px-1.5 py-0.5 bg-purple-100 text-purple-700 rounded text-xs font-mono"}," #"+fe(K.id),1))),128))])])):rt("",!0),ae(E).service_area_id?(De(),Ne("div",R0,[d[144]||(d[144]=g("span",null,"서비스 지역:",-1)),g("span",C0,"#"+fe(ae(E).service_area_id),1)])):rt("",!0)])):rt("",!0)])])):rt("",!0),g("div",P0,[d[146]||(d[146]=g("span",null,"상태:",-1)),g("span",{class:Rt(ke(E.tripStatus))},[ys(fe(B(E.tripStatus))+" ",1),E.tripStatus==="RETURNING"?(De(),Ne("span",L0," 🏠 ")):rt("",!0)],2)]),E.tripStatus==="RETURNING"?(De(),Ne("div",D0,d[147]||(d[147]=[g("span",{class:"text-orange-700"},"12번 정류장 → 1번 정류장 (차고지)",-1)]))):rt("",!0),g("div",I0,[d[148]||(d[148]=g("span",null,"승객:",-1)),g("span",{class:Rt(E.current_occupancy>0?"text-orange-600 font-medium":"")},fe(E.current_occupancy||0)+"/"+fe(E.capacity||0)+"명 ",3)]),ai(g("div",U0,[g("div",N0,[d[149]||(d[149]=g("div",{class:"text-xs text-gray-500 mb-2"},"운행 제어",-1)),g("div",F0,[E.tripStatus==="IN_PROGRESS"?(De(),Ne("button",{key:0,onClick:K=>Dt(E),class:"flex-1 px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 disabled:opacity-50",disabled:A.value}," 운행중단 ",8,O0)):rt("",!0),E.tripStatus==="RETURNING"?(De(),Ne("button",{key:1,onClick:K=>Ct(E),class:"flex-1 px-2 py-1 bg-green-500 text-white text-xs rounded hover:bg-green-600 disabled:opacity-50",disabled:A.value}," 복귀완료 ",8,B0)):rt("",!0)])]),E.tripType==="ON_DEMAND"&&E.tripStatus==="IN_PROGRESS"&&E.current_occupancy>0?(De(),Ne("div",z0,[d[151]||(d[151]=g("div",{class:"text-xs text-gray-500 mb-2"},"승객 관리",-1)),g("div",k0,[g("div",H0,[d[150]||(d[150]=g("span",{class:"text-yellow-700"},"현재 탑승 인원:",-1)),g("span",V0,fe(E.current_occupancy)+"명",1)]),(ce=ae(E))!=null&&ce.calls&&Array.isArray(ae(E).calls)?(De(),Ne(Tn,{key:0},[ae(E).calls.length>0?(De(),Ne("div",G0,[(De(!0),Ne(Tn,null,Qn(ae(E).calls,K=>(De(),Ne(Tn,{key:(K==null?void 0:K.id)||Math.random()},[K&&K.id?(De(),Ne("div",W0,[g("span",X0,[ys(" Call #"+fe(K.id)+" ",1),K.status?(De(),Ne("span",$0,"("+fe(K.status)+")",1)):rt("",!0),g("span",q0,fe(K.passenger_count||1)+"명",1)]),g("button",{onClick:ye=>At(E,K),class:"px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600",disabled:A.value}," 하차처리 ",8,Y0)])):rt("",!0)],64))),128))])):(De(),Ne("div",j0," 할당된 Call이 없습니다. "))],64)):rt("",!0)]),g("div",Z0,[g("button",{onClick:K=>St(E),class:"flex-1 px-2 py-1 bg-purple-500 text-white text-xs rounded hover:bg-purple-600 disabled:opacity-50",disabled:A.value}," 전체 하차처리 ",8,K0),g("button",{onClick:K=>Je(),class:"flex-1 px-2 py-1 bg-indigo-500 text-white text-xs rounded hover:bg-indigo-600 disabled:opacity-50",disabled:A.value}," 개별 선택 하차 ",8,J0)])])):rt("",!0),E.tripType==="SCHEDULED"&&ae(E)?(De(),Ne("div",Q0,[d[157]||(d[157]=g("div",{class:"text-xs text-gray-500 mb-1"},"운행 정보",-1)),ae(E).start_datetime||ae(E).start_time?(De(),Ne("div",ex,[g("div",tx,[d[152]||(d[152]=g("span",{class:"text-blue-700"},"출발:",-1)),g("span",nx,fe(Ke(ae(E).start_datetime||ae(E).start_time)),1)]),g("div",ix,[d[153]||(d[153]=g("span",{class:"text-blue-700"},"도착:",-1)),g("span",sx,fe(Ke(ae(E).end_datetime||ae(E).end_time)),1)])])):rt("",!0),ae(E).start_time&&!ae(E).end_time?(De(),Ne("div",rx,[d[154]||(d[154]=g("span",null,"운행 경과:",-1)),g("span",ax,fe(ut(ae(E).start_time)),1)])):rt("",!0),ae(E).route_id?(De(),Ne("div",ox,[d[155]||(d[155]=g("span",null,"노선 ID:",-1)),g("span",lx,"#"+fe(ae(E).route_id),1)])):rt("",!0),ae(E).driver_id?(De(),Ne("div",cx,[d[156]||(d[156]=g("span",null,"운전자:",-1)),g("span",dx,"#"+fe(ae(E).driver_id),1)])):rt("",!0)])):rt("",!0),E.tripType==="ON_DEMAND"&&ae(E)?(De(),Ne("div",ux,[d[165]||(d[165]=g("div",{class:"text-xs text-gray-500 mb-1"},"호출 정보",-1)),ae(E).calls&&ae(E).calls.length>0?(De(),Ne("div",hx,[g("div",fx,[d[158]||(d[158]=g("span",null,"할당 호출:",-1)),g("span",px,fe(ae(E).calls.length)+"개",1)]),(De(!0),Ne(Tn,null,Qn(ae(E).calls.slice(0,3),(K,ye)=>(De(),Ne("div",{key:K.id,class:"bg-green-50 p-2 rounded text-xs"},[g("div",mx,"Call #"+fe(K.id),1),g("div",gx,[g("div",_x,[d[160]||(d[160]=g("span",{class:"text-green-600"},"🔵",-1)),g("div",vx,[d[159]||(d[159]=g("span",{class:"text-xs"},"픽업:",-1)),g("div",{class:"text-xs truncate",title:et(K)},fe(et(K)),9,xx)])]),g("div",Mx,[d[162]||(d[162]=g("span",{class:"text-red-600"},"🔴",-1)),g("div",yx,[d[161]||(d[161]=g("span",{class:"text-xs"},"드롭:",-1)),g("div",{class:"text-xs truncate",title:qe(K)},fe(qe(K)),9,Sx)])]),K.requested_pickup_time?(De(),Ne("div",Ex," 요청시간: "+fe(Ke(K.requested_pickup_time)),1)):rt("",!0)])]))),128)),ae(E).calls.length>3?(De(),Ne("div",bx," ... 외 "+fe(ae(E).calls.length-3)+"개 호출 ",1)):rt("",!0)])):rt("",!0),ae(E).service_area_id?(De(),Ne("div",Tx,[d[163]||(d[163]=g("span",null,"서비스 지역:",-1)),g("span",Ax,"#"+fe(ae(E).service_area_id),1)])):rt("",!0),ae(E).driver_id?(De(),Ne("div",wx,[d[164]||(d[164]=g("span",null,"운전자:",-1)),g("span",Rx,"#"+fe(ae(E).driver_id),1)])):rt("",!0)])):rt("",!0),g("div",Cx,[d[169]||(d[169]=g("div",{class:"text-xs text-gray-500 mb-1"},"위치 정보",-1)),g("div",Px,[d[166]||(d[166]=g("span",null,"좌표:",-1)),g("span",Lx,fe(H(E.current_latitude,E.current_longitude)),1)]),E.last_node_id?(De(),Ne("div",Dx,[d[167]||(d[167]=g("span",null,"마지막 노드:",-1)),g("span",Ix,[ys(fe(yt(E.last_node_id))+" ",1),g("span",Ux,"(#"+fe(E.last_node_id)+")",1)])])):rt("",!0),E.current_link_id?(De(),Ne("div",Nx,[d[168]||(d[168]=g("span",null,"현재 링크:",-1)),g("span",Fx,"#"+fe(E.current_link_id),1)])):rt("",!0)])],512),[[Qi,we.value.has(E.id)]])])],8,a0)}),128))]))])])])])}}}),jx=_l(Ox,[["__scopeId","data-v-72abc267"]]);export{jx as default};
