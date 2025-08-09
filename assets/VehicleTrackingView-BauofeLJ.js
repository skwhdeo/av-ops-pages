import{d as $o,r as Al,l as $e,c as xi,I as qo,s as wl,Z as Da,a as Ve,t as M,x as ht,K as Wn,v as Te,Q as Rl,o as Oe,q as Cl,u as Tt,L as Pl,F as ii,f as si,U as La,M as Ii,b as Ia,z as Xs,_ as Ua}from"./vendor-CBGniyLR.js";import{L as yt}from"./leaflet-src-BqV47dzd.js";import{_ as Yo,u as Dl}from"./index-BmVv5VAt.js";import{D as Ll}from"./driver-app-api-BSPHqOf9.js";import{N as Il}from"./network-api-D5r1f1aE.js";import{P as Ul}from"./planning-api-BdC-tJtD.js";import{R as Nl}from"./resources-api-gRoOZ0_8.js";import{S as Fl}from"./service-areas-api-CNhDdMI8.js";import{C as Ol}from"./configuration-BiWBPvh5.js";import"./jsonforms-DUCi4SlM.js";import"./index-NIGUFBhG.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ga="179",Bl=0,Na=1,zl=2,jo=1,kl=2,Sn=3,Nn=0,zt=1,yn=2,In=0,Si=1,Fa=2,Oa=3,Ba=4,Hl=5,qn=100,Vl=101,Gl=102,Wl=103,Xl=104,$l=200,ql=201,Yl=202,jl=203,Rr=204,Cr=205,Kl=206,Zl=207,Jl=208,Ql=209,ec=210,tc=211,nc=212,ic=213,sc=214,Pr=0,Dr=1,Lr=2,Ti=3,Ir=4,Ur=5,Nr=6,Fr=7,_a=0,rc=1,ac=2,Un=0,oc=1,lc=2,cc=3,dc=4,uc=5,hc=6,fc=7,Ko=300,bi=301,Ai=302,Or=303,Br=304,Hs=306,zr=1e3,jn=1001,kr=1002,sn=1003,pc=1004,ss=1005,ln=1006,$s=1007,Kn=1008,un=1009,Zo=1010,Jo=1011,Gi=1012,va=1013,Jn=1014,En=1015,qi=1016,xa=1017,Ma=1018,Wi=1020,Qo=35902,el=1021,tl=1022,nn=1023,Xi=1026,$i=1027,nl=1028,Sa=1029,il=1030,ya=1031,Ea=1033,Ps=33776,Ds=33777,Ls=33778,Is=33779,Hr=35840,Vr=35841,Gr=35842,Wr=35843,Xr=36196,$r=37492,qr=37496,Yr=37808,jr=37809,Kr=37810,Zr=37811,Jr=37812,Qr=37813,ea=37814,ta=37815,na=37816,ia=37817,sa=37818,ra=37819,aa=37820,oa=37821,Us=36492,la=36494,ca=36495,sl=36283,da=36284,ua=36285,ha=36286,mc=3200,gc=3201,Ta=0,_c=1,Ln="",Wt="srgb",wi="srgb-linear",Fs="linear",Et="srgb",ri=7680,za=519,vc=512,xc=513,Mc=514,rl=515,Sc=516,yc=517,Ec=518,Tc=519,ka=35044,Ha="300 es",cn=2e3,Os=2001;class Ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qs=Math.PI/180,fa=180/Math.PI;function Yi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function gt(i,e,t){return Math.max(e,Math.min(t,i))}function bc(i,e){return(i%e+e)%e}function Ys(i,e,t){return(1-t)*i+t*e}function Ui(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Mt{constructor(e=0,t=0){Mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ji{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const p=r[a+0],m=r[a+1],v=r[a+2],S=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=m,e[t+2]=v,e[t+3]=S;return}if(d!==S||c!==p||l!==m||h!==v){let g=1-o;const u=c*p+l*m+h*v+d*S,D=u>=0?1:-1,R=1-u*u;if(R>Number.EPSILON){const F=Math.sqrt(R),L=Math.atan2(F,u*D);g=Math.sin(g*L)/F,o=Math.sin(o*L)/F}const A=o*D;if(c=c*g+p*A,l=l*g+m*A,h=h*g+v*A,d=d*g+S*A,g===1-o){const F=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=F,l*=F,h*=F,d*=F}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],p=r[a+1],m=r[a+2],v=r[a+3];return e[t]=o*v+h*d+c*m-l*p,e[t+1]=c*v+h*p+l*d-o*m,e[t+2]=l*v+h*m+o*p-c*d,e[t+3]=h*v-o*d-c*p-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),p=c(n/2),m=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=p*h*d+l*m*v,this._y=l*m*d-p*h*v,this._z=l*h*v+p*m*d,this._w=l*h*d-p*m*v;break;case"YXZ":this._x=p*h*d+l*m*v,this._y=l*m*d-p*h*v,this._z=l*h*v-p*m*d,this._w=l*h*d+p*m*v;break;case"ZXY":this._x=p*h*d-l*m*v,this._y=l*m*d+p*h*v,this._z=l*h*v+p*m*d,this._w=l*h*d-p*m*v;break;case"ZYX":this._x=p*h*d-l*m*v,this._y=l*m*d+p*h*v,this._z=l*h*v-p*m*d,this._w=l*h*d+p*m*v;break;case"YZX":this._x=p*h*d+l*m*v,this._y=l*m*d+p*h*v,this._z=l*h*v-p*m*d,this._w=l*h*d-p*m*v;break;case"XZY":this._x=p*h*d-l*m*v,this._y=l*m*d-p*h*v,this._z=l*h*v+p*m*d,this._w=l*h*d+p*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],p=n+o+d;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Va.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Va.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return js.copy(this).projectOnVector(e),this.sub(js)}reflect(e){return this.sub(js.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const js=new G,Va=new ji;class rt{constructor(e,t,n,s,r,a,o,c,l){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],p=n[2],m=n[5],v=n[8],S=s[0],g=s[3],u=s[6],D=s[1],R=s[4],A=s[7],F=s[2],L=s[5],U=s[8];return r[0]=a*S+o*D+c*F,r[3]=a*g+o*R+c*L,r[6]=a*u+o*A+c*U,r[1]=l*S+h*D+d*F,r[4]=l*g+h*R+d*L,r[7]=l*u+h*A+d*U,r[2]=p*S+m*D+v*F,r[5]=p*g+m*R+v*L,r[8]=p*u+m*A+v*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,p=o*c-h*r,m=l*r-a*c,v=t*d+n*p+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=d*S,e[1]=(s*l-h*n)*S,e[2]=(o*n-s*a)*S,e[3]=p*S,e[4]=(h*t-s*c)*S,e[5]=(s*r-o*t)*S,e[6]=m*S,e[7]=(n*c-l*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ks.makeScale(e,t)),this}rotate(e){return this.premultiply(Ks.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ks.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ks=new rt;function al(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ac(){const i=Bs("canvas");return i.style.display="block",i}const Ga={};function yi(i){i in Ga||(Ga[i]=!0,console.warn(i))}function wc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Wa=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xa=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rc(){const i={enabled:!0,workingColorSpace:wi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Et&&(s.r=Tn(s.r),s.g=Tn(s.g),s.b=Tn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Et&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ln?Fs:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return yi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return yi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wi]:{primaries:e,whitePoint:n,transfer:Fs,toXYZ:Wa,fromXYZ:Xa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:Wa,fromXYZ:Xa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),i}const xt=Rc();function Tn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ei(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ai;class Cc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ai===void 0&&(ai=Bs("canvas")),ai.width=e.width,ai.height=e.height;const s=ai.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ai}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Tn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Tn(t[n]/255)*255):t[n]=Tn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pc=0;class ba{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=Yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Zs(s[a].image)):r.push(Zs(s[a]))}else r=Zs(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Zs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dc=0;const Js=new G;class kt extends Ci{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=jn,s=jn,r=ln,a=Kn,o=nn,c=un,l=kt.DEFAULT_ANISOTROPY,h=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=Yi(),this.name="",this.source=new ba(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Js).x}get height(){return this.source.getSize(Js).y}get depth(){return this.source.getSize(Js).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ko)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zr:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case kr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zr:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case kr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Ko;kt.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,n=0,s=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],d=c[8],p=c[1],m=c[5],v=c[9],S=c[2],g=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-S)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+S)<.1&&Math.abs(v+g)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(l+1)/2,A=(m+1)/2,F=(u+1)/2,L=(h+p)/4,U=(d+S)/4,z=(v+g)/4;return R>A&&R>F?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=L/n,r=U/n):A>F?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=L/s,r=z/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=U/r,s=z/r),this.set(n,s,r,t),this}let D=Math.sqrt((g-v)*(g-v)+(d-S)*(d-S)+(p-h)*(p-h));return Math.abs(D)<.001&&(D=1),this.x=(g-v)/D,this.y=(d-S)/D,this.z=(p-h)/D,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lc extends Ci{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new kt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ba(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends Lc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ol extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ic extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ki{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jt):Jt.fromBufferAttribute(r,a),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rs.copy(n.boundingBox)),rs.applyMatrix4(e.matrixWorld),this.union(rs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ni),as.subVectors(this.max,Ni),oi.subVectors(e.a,Ni),li.subVectors(e.b,Ni),ci.subVectors(e.c,Ni),An.subVectors(li,oi),wn.subVectors(ci,li),Bn.subVectors(oi,ci);let t=[0,-An.z,An.y,0,-wn.z,wn.y,0,-Bn.z,Bn.y,An.z,0,-An.x,wn.z,0,-wn.x,Bn.z,0,-Bn.x,-An.y,An.x,0,-wn.y,wn.x,0,-Bn.y,Bn.x,0];return!Qs(t,oi,li,ci,as)||(t=[1,0,0,0,1,0,0,0,1],!Qs(t,oi,li,ci,as))?!1:(os.crossVectors(An,wn),t=[os.x,os.y,os.z],Qs(t,oi,li,ci,as))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mn=[new G,new G,new G,new G,new G,new G,new G,new G],Jt=new G,rs=new Ki,oi=new G,li=new G,ci=new G,An=new G,wn=new G,Bn=new G,Ni=new G,as=new G,os=new G,zn=new G;function Qs(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){zn.fromArray(i,r);const o=s.x*Math.abs(zn.x)+s.y*Math.abs(zn.y)+s.z*Math.abs(zn.z),c=e.dot(zn),l=t.dot(zn),h=n.dot(zn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Uc=new Ki,Fi=new G,er=new G;class Zi{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Uc.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fi.subVectors(e,this.center);const t=Fi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Fi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(er.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fi.copy(e.center).add(er)),this.expandByPoint(Fi.copy(e.center).sub(er))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const gn=new G,tr=new G,ls=new G,Rn=new G,nr=new G,cs=new G,ir=new G;class Aa{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){tr.copy(e).add(t).multiplyScalar(.5),ls.copy(t).sub(e).normalize(),Rn.copy(this.origin).sub(tr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ls),o=Rn.dot(this.direction),c=-Rn.dot(ls),l=Rn.lengthSq(),h=Math.abs(1-a*a);let d,p,m,v;if(h>0)if(d=a*c-o,p=a*o-c,v=r*h,d>=0)if(p>=-v)if(p<=v){const S=1/h;d*=S,p*=S,m=d*(d+a*p+2*o)+p*(a*d+p+2*c)+l}else p=r,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*c)+l;else p=-r,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*c)+l;else p<=-v?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+p*(p+2*c)+l):p<=v?(d=0,p=Math.min(Math.max(-r,-c),r),m=p*(p+2*c)+l):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+p*(p+2*c)+l);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(tr).addScaledVector(ls,p),m}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const n=gn.dot(this.direction),s=gn.dot(gn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),h>=0?(r=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,n,s,r){nr.subVectors(t,e),cs.subVectors(n,e),ir.crossVectors(nr,cs);let a=this.direction.dot(ir),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Rn.subVectors(this.origin,e);const c=o*this.direction.dot(cs.crossVectors(Rn,cs));if(c<0)return null;const l=o*this.direction.dot(nr.cross(Rn));if(l<0||c+l>a)return null;const h=-o*Rn.dot(ir);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,t,n,s,r,a,o,c,l,h,d,p,m,v,S,g){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,d,p,m,v,S,g)}set(e,t,n,s,r,a,o,c,l,h,d,p,m,v,S,g){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=p,u[3]=m,u[7]=v,u[11]=S,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/di.setFromMatrixColumn(e,0).length(),r=1/di.setFromMatrixColumn(e,1).length(),a=1/di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const p=a*h,m=a*d,v=o*h,S=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=m+v*l,t[5]=p-S*l,t[9]=-o*c,t[2]=S-p*l,t[6]=v+m*l,t[10]=a*c}else if(e.order==="YXZ"){const p=c*h,m=c*d,v=l*h,S=l*d;t[0]=p+S*o,t[4]=v*o-m,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=m*o-v,t[6]=S+p*o,t[10]=a*c}else if(e.order==="ZXY"){const p=c*h,m=c*d,v=l*h,S=l*d;t[0]=p-S*o,t[4]=-a*d,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*h,t[9]=S-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const p=a*h,m=a*d,v=o*h,S=o*d;t[0]=c*h,t[4]=v*l-m,t[8]=p*l+S,t[1]=c*d,t[5]=S*l+p,t[9]=m*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const p=a*c,m=a*l,v=o*c,S=o*l;t[0]=c*h,t[4]=S-p*d,t[8]=v*d+m,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*d+v,t[10]=p-S*d}else if(e.order==="XZY"){const p=a*c,m=a*l,v=o*c,S=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=p*d+S,t[5]=a*h,t[9]=m*d-v,t[2]=v*d-m,t[6]=o*h,t[10]=S*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nc,e,Fc)}lookAt(e,t,n){const s=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Cn.crossVectors(n,Vt),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Cn.crossVectors(n,Vt)),Cn.normalize(),ds.crossVectors(Vt,Cn),s[0]=Cn.x,s[4]=ds.x,s[8]=Vt.x,s[1]=Cn.y,s[5]=ds.y,s[9]=Vt.y,s[2]=Cn.z,s[6]=ds.z,s[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],p=n[9],m=n[13],v=n[2],S=n[6],g=n[10],u=n[14],D=n[3],R=n[7],A=n[11],F=n[15],L=s[0],U=s[4],z=s[8],b=s[12],E=s[1],P=s[5],Z=s[9],j=s[13],K=s[2],re=s[6],Q=s[10],ue=s[14],Y=s[3],Me=s[7],ye=s[11],Le=s[15];return r[0]=a*L+o*E+c*K+l*Y,r[4]=a*U+o*P+c*re+l*Me,r[8]=a*z+o*Z+c*Q+l*ye,r[12]=a*b+o*j+c*ue+l*Le,r[1]=h*L+d*E+p*K+m*Y,r[5]=h*U+d*P+p*re+m*Me,r[9]=h*z+d*Z+p*Q+m*ye,r[13]=h*b+d*j+p*ue+m*Le,r[2]=v*L+S*E+g*K+u*Y,r[6]=v*U+S*P+g*re+u*Me,r[10]=v*z+S*Z+g*Q+u*ye,r[14]=v*b+S*j+g*ue+u*Le,r[3]=D*L+R*E+A*K+F*Y,r[7]=D*U+R*P+A*re+F*Me,r[11]=D*z+R*Z+A*Q+F*ye,r[15]=D*b+R*j+A*ue+F*Le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],p=e[10],m=e[14],v=e[3],S=e[7],g=e[11],u=e[15];return v*(+r*c*d-s*l*d-r*o*p+n*l*p+s*o*m-n*c*m)+S*(+t*c*m-t*l*p+r*a*p-s*a*m+s*l*h-r*c*h)+g*(+t*l*d-t*o*m-r*a*d+n*a*m+r*o*h-n*l*h)+u*(-s*o*h-t*c*d+t*o*p+s*a*d-n*a*p+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],p=e[10],m=e[11],v=e[12],S=e[13],g=e[14],u=e[15],D=d*g*l-S*p*l+S*c*m-o*g*m-d*c*u+o*p*u,R=v*p*l-h*g*l-v*c*m+a*g*m+h*c*u-a*p*u,A=h*S*l-v*d*l+v*o*m-a*S*m-h*o*u+a*d*u,F=v*d*c-h*S*c-v*o*p+a*S*p+h*o*g-a*d*g,L=t*D+n*R+s*A+r*F;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/L;return e[0]=D*U,e[1]=(S*p*r-d*g*r-S*s*m+n*g*m+d*s*u-n*p*u)*U,e[2]=(o*g*r-S*c*r+S*s*l-n*g*l-o*s*u+n*c*u)*U,e[3]=(d*c*r-o*p*r-d*s*l+n*p*l+o*s*m-n*c*m)*U,e[4]=R*U,e[5]=(h*g*r-v*p*r+v*s*m-t*g*m-h*s*u+t*p*u)*U,e[6]=(v*c*r-a*g*r-v*s*l+t*g*l+a*s*u-t*c*u)*U,e[7]=(a*p*r-h*c*r+h*s*l-t*p*l-a*s*m+t*c*m)*U,e[8]=A*U,e[9]=(v*d*r-h*S*r-v*n*m+t*S*m+h*n*u-t*d*u)*U,e[10]=(a*S*r-v*o*r+v*n*l-t*S*l-a*n*u+t*o*u)*U,e[11]=(h*o*r-a*d*r-h*n*l+t*d*l+a*n*m-t*o*m)*U,e[12]=F*U,e[13]=(h*S*s-v*d*s+v*n*p-t*S*p-h*n*g+t*d*g)*U,e[14]=(v*o*s-a*S*s-v*n*c+t*S*c+a*n*g-t*o*g)*U,e[15]=(a*d*s-h*o*s+h*n*c-t*d*c-a*n*p+t*o*p)*U,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,p=r*l,m=r*h,v=r*d,S=a*h,g=a*d,u=o*d,D=c*l,R=c*h,A=c*d,F=n.x,L=n.y,U=n.z;return s[0]=(1-(S+u))*F,s[1]=(m+A)*F,s[2]=(v-R)*F,s[3]=0,s[4]=(m-A)*L,s[5]=(1-(p+u))*L,s[6]=(g+D)*L,s[7]=0,s[8]=(v+R)*U,s[9]=(g-D)*U,s[10]=(1-(p+S))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=di.set(s[0],s[1],s[2]).length();const a=di.set(s[4],s[5],s[6]).length(),o=di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Qt.copy(this);const l=1/r,h=1/a,d=1/o;return Qt.elements[0]*=l,Qt.elements[1]*=l,Qt.elements[2]*=l,Qt.elements[4]*=h,Qt.elements[5]*=h,Qt.elements[6]*=h,Qt.elements[8]*=d,Qt.elements[9]*=d,Qt.elements[10]*=d,t.setFromRotationMatrix(Qt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=cn,c=!1){const l=this.elements,h=2*r/(t-e),d=2*r/(n-s),p=(t+e)/(t-e),m=(n+s)/(n-s);let v,S;if(c)v=r/(a-r),S=a*r/(a-r);else if(o===cn)v=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Os)v=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=cn,c=!1){const l=this.elements,h=2/(t-e),d=2/(n-s),p=-(t+e)/(t-e),m=-(n+s)/(n-s);let v,S;if(c)v=1/(a-r),S=a/(a-r);else if(o===cn)v=-2/(a-r),S=-(a+r)/(a-r);else if(o===Os)v=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=v,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const di=new G,Qt=new bt,Nc=new G(0,0,0),Fc=new G(1,1,1),Cn=new G,ds=new G,Vt=new G,$a=new bt,qa=new ji;class rn{constructor(e=0,t=0,n=0,s=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $a.makeRotationFromQuaternion(e),this.setFromRotationMatrix($a,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qa.setFromEuler(this),this.setFromQuaternion(qa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class ll{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Oc=0;const Ya=new G,ui=new ji,_n=new bt,us=new G,Oi=new G,Bc=new G,zc=new ji,ja=new G(1,0,0),Ka=new G(0,1,0),Za=new G(0,0,1),Ja={type:"added"},kc={type:"removed"},hi={type:"childadded",child:null},sr={type:"childremoved",child:null};class It extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new G,t=new rn,n=new ji,s=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new rt}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.multiply(ui),this}rotateOnWorldAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.premultiply(ui),this}rotateX(e){return this.rotateOnAxis(ja,e)}rotateY(e){return this.rotateOnAxis(Ka,e)}rotateZ(e){return this.rotateOnAxis(Za,e)}translateOnAxis(e,t){return Ya.copy(e).applyQuaternion(this.quaternion),this.position.add(Ya.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ja,e)}translateY(e){return this.translateOnAxis(Ka,e)}translateZ(e){return this.translateOnAxis(Za,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?us.copy(e):us.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Oi,us,this.up):_n.lookAt(us,Oi,this.up),this.quaternion.setFromRotationMatrix(_n),s&&(_n.extractRotation(s.matrixWorld),ui.setFromRotationMatrix(_n),this.quaternion.premultiply(ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ja),hi.child=e,this.dispatchEvent(hi),hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kc),sr.child=e,this.dispatchEvent(sr),sr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ja),hi.child=e,this.dispatchEvent(hi),hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,e,Bc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,zc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),p=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}It.DEFAULT_UP=new G(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new G,vn=new G,rr=new G,xn=new G,fi=new G,pi=new G,Qa=new G,ar=new G,or=new G,lr=new G,cr=new At,dr=new At,ur=new At;class tn{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),en.subVectors(e,t),s.cross(en);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){en.subVectors(s,t),vn.subVectors(n,t),rr.subVectors(e,t);const a=en.dot(en),o=en.dot(vn),c=en.dot(rr),l=vn.dot(vn),h=vn.dot(rr),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const p=1/d,m=(l*c-o*h)*p,v=(a*h-o*c)*p;return r.set(1-m-v,v,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xn.x),c.addScaledVector(a,xn.y),c.addScaledVector(o,xn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return cr.setScalar(0),dr.setScalar(0),ur.setScalar(0),cr.fromBufferAttribute(e,t),dr.fromBufferAttribute(e,n),ur.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(cr,r.x),a.addScaledVector(dr,r.y),a.addScaledVector(ur,r.z),a}static isFrontFacing(e,t,n,s){return en.subVectors(n,t),vn.subVectors(e,t),en.cross(vn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),en.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return tn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;fi.subVectors(s,n),pi.subVectors(r,n),ar.subVectors(e,n);const c=fi.dot(ar),l=pi.dot(ar);if(c<=0&&l<=0)return t.copy(n);or.subVectors(e,s);const h=fi.dot(or),d=pi.dot(or);if(h>=0&&d<=h)return t.copy(s);const p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(fi,a);lr.subVectors(e,r);const m=fi.dot(lr),v=pi.dot(lr);if(v>=0&&m<=v)return t.copy(r);const S=m*l-c*v;if(S<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(n).addScaledVector(pi,o);const g=h*v-m*d;if(g<=0&&d-h>=0&&m-v>=0)return Qa.subVectors(r,s),o=(d-h)/(d-h+(m-v)),t.copy(s).addScaledVector(Qa,o);const u=1/(g+S+p);return a=S*u,o=p*u,t.copy(n).addScaledVector(fi,a).addScaledVector(pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},hs={h:0,s:0,l:0};function hr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class dt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=xt.workingColorSpace){if(e=bc(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=hr(a,r,e+1/3),this.g=hr(a,r,e),this.b=hr(a,r,e-1/3)}return xt.colorSpaceToWorking(this,s),this}setStyle(e,t=Wt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const n=cl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}copyLinearToSRGB(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return xt.workingToColorSpace(Nt.copy(this),e),Math.round(gt(Nt.r*255,0,255))*65536+Math.round(gt(Nt.g*255,0,255))*256+Math.round(gt(Nt.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(Nt.copy(this),t);const n=Nt.r,s=Nt.g,r=Nt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Wt){xt.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,s=Nt.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(hs);const n=Ys(Pn.h,hs.h,t),s=Ys(Pn.s,hs.s,t),r=Ys(Pn.l,hs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new dt;dt.NAMES=cl;let Hc=0;class hn extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=Si,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rr,this.blendDst=Cr,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Ti,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=za,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rr&&(n.blendSrc=this.blendSrc),this.blendDst!==Cr&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ti&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==za&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dl extends hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=_a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new G,fs=new Mt;let Vc=0;class dn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ka,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fs.fromBufferAttribute(this,t),fs.applyMatrix3(e),this.setXY(t,fs.x,fs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ka&&(e.usage=this.usage),e}}class ul extends dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hl extends dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ot extends dn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Gc=0;const Xt=new bt,fr=new It,mi=new G,Gt=new Ki,Bi=new Ki,Lt=new G;class jt extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(al(e)?hl:ul)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return fr.lookAt(e),fr.updateMatrix(),this.applyMatrix4(fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ot(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Gt.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Bi.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(Gt.min,Bi.min),Gt.expandByPoint(Lt),Lt.addVectors(Gt.max,Bi.max),Gt.expandByPoint(Lt)):(Gt.expandByPoint(Bi.min),Gt.expandByPoint(Bi.max))}Gt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Lt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Lt.fromBufferAttribute(o,l),c&&(mi.fromBufferAttribute(e,l),Lt.add(mi)),s=Math.max(s,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let z=0;z<n.count;z++)o[z]=new G,c[z]=new G;const l=new G,h=new G,d=new G,p=new Mt,m=new Mt,v=new Mt,S=new G,g=new G;function u(z,b,E){l.fromBufferAttribute(n,z),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,E),p.fromBufferAttribute(r,z),m.fromBufferAttribute(r,b),v.fromBufferAttribute(r,E),h.sub(l),d.sub(l),m.sub(p),v.sub(p);const P=1/(m.x*v.y-v.x*m.y);isFinite(P)&&(S.copy(h).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(P),g.copy(d).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(P),o[z].add(S),o[b].add(S),o[E].add(S),c[z].add(g),c[b].add(g),c[E].add(g))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let z=0,b=D.length;z<b;++z){const E=D[z],P=E.start,Z=E.count;for(let j=P,K=P+Z;j<K;j+=3)u(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const R=new G,A=new G,F=new G,L=new G;function U(z){F.fromBufferAttribute(s,z),L.copy(F);const b=o[z];R.copy(b),R.sub(F.multiplyScalar(F.dot(b))).normalize(),A.crossVectors(L,b);const P=A.dot(c[z])<0?-1:1;a.setXYZW(z,R.x,R.y,R.z,P)}for(let z=0,b=D.length;z<b;++z){const E=D[z],P=E.start,Z=E.count;for(let j=P,K=P+Z;j<K;j+=3)U(e.getX(j+0)),U(e.getX(j+1)),U(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const s=new G,r=new G,a=new G,o=new G,c=new G,l=new G,h=new G,d=new G;if(e)for(let p=0,m=e.count;p<m;p+=3){const v=e.getX(p+0),S=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,p=new l.constructor(c.length*h);let m=0,v=0;for(let S=0,g=c.length;S<g;S++){o.isInterleavedBufferAttribute?m=c[S]*o.data.stride+o.offset:m=c[S]*h;for(let u=0;u<h;u++)p[v++]=l[m++]}return new dn(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const p=l[h],m=e(p,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){const m=l[d];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let p=0,m=d.length;p<m;p++)h.push(d[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eo=new bt,kn=new Aa,ps=new Zi,to=new G,ms=new G,gs=new G,_s=new G,pr=new G,vs=new G,no=new G,xs=new G;class Yt extends It{constructor(e=new jt,t=new dl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){vs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(pr.fromBufferAttribute(d,e),a?vs.addScaledVector(pr,h):vs.addScaledVector(pr.sub(t),h))}t.add(vs)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(r),kn.copy(e.ray).recast(e.near),!(ps.containsPoint(kn.origin)===!1&&(kn.intersectSphere(ps,to)===null||kn.origin.distanceToSquared(to)>(e.far-e.near)**2))&&(eo.copy(r).invert(),kn.copy(e.ray).applyMatrix4(eo),!(n.boundingBox!==null&&kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,kn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,S=p.length;v<S;v++){const g=p[v],u=a[g.materialIndex],D=Math.max(g.start,m.start),R=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let A=D,F=R;A<F;A+=3){const L=o.getX(A),U=o.getX(A+1),z=o.getX(A+2);s=Ms(this,u,e,n,l,h,d,L,U,z),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let g=v,u=S;g<u;g+=3){const D=o.getX(g),R=o.getX(g+1),A=o.getX(g+2);s=Ms(this,a,e,n,l,h,d,D,R,A),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,S=p.length;v<S;v++){const g=p[v],u=a[g.materialIndex],D=Math.max(g.start,m.start),R=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let A=D,F=R;A<F;A+=3){const L=A,U=A+1,z=A+2;s=Ms(this,u,e,n,l,h,d,L,U,z),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),S=Math.min(c.count,m.start+m.count);for(let g=v,u=S;g<u;g+=3){const D=g,R=g+1,A=g+2;s=Ms(this,a,e,n,l,h,d,D,R,A),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Wc(i,e,t,n,s,r,a,o){let c;if(e.side===zt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Nn,o),c===null)return null;xs.copy(o),xs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(xs);return l<t.near||l>t.far?null:{distance:l,point:xs.clone(),object:i}}function Ms(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,ms),i.getVertexPosition(c,gs),i.getVertexPosition(l,_s);const h=Wc(i,e,t,n,ms,gs,_s,no);if(h){const d=new G;tn.getBarycoord(no,ms,gs,_s,d),s&&(h.uv=tn.getInterpolatedAttribute(s,o,c,l,d,new Mt)),r&&(h.uv1=tn.getInterpolatedAttribute(r,o,c,l,d,new Mt)),a&&(h.normal=tn.getInterpolatedAttribute(a,o,c,l,d,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:c,c:l,normal:new G,materialIndex:0};tn.getNormal(ms,gs,_s,p.normal),h.face=p,h.barycoord=d}return h}class Ji extends jt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let p=0,m=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(d,2));function v(S,g,u,D,R,A,F,L,U,z,b){const E=A/U,P=F/z,Z=A/2,j=F/2,K=L/2,re=U+1,Q=z+1;let ue=0,Y=0;const Me=new G;for(let ye=0;ye<Q;ye++){const Le=ye*P-j;for(let et=0;et<re;et++){const ze=et*E-Z;Me[S]=ze*D,Me[g]=Le*R,Me[u]=K,l.push(Me.x,Me.y,Me.z),Me[S]=0,Me[g]=0,Me[u]=L>0?1:-1,h.push(Me.x,Me.y,Me.z),d.push(et/U),d.push(1-ye/z),ue+=1}}for(let ye=0;ye<z;ye++)for(let Le=0;Le<U;Le++){const et=p+Le+re*ye,ze=p+Le+re*(ye+1),Re=p+(Le+1)+re*(ye+1),X=p+(Le+1)+re*ye;c.push(et,ze,X),c.push(ze,Re,X),Y+=6}o.addGroup(m,Y,b),m+=Y,p+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ri(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=Ri(i[t]);for(const s in n)e[s]=n[s]}return e}function Xc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const $c={clone:Ri,merge:Ft};var qc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qc,this.fragmentShader=Yc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ri(e.uniforms),this.uniformsGroups=Xc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class pl extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dn=new G,io=new Mt,so=new Mt;class qt extends pl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fa*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z)}getViewSize(e,t){return this.getViewBounds(e,io,so),t.subVectors(so,io)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gi=-90,_i=1;class jc extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qt(gi,_i,e,t);s.layers=this.layers,this.add(s);const r=new qt(gi,_i,e,t);r.layers=this.layers,this.add(r);const a=new qt(gi,_i,e,t);a.layers=this.layers,this.add(a);const o=new qt(gi,_i,e,t);o.layers=this.layers,this.add(o);const c=new qt(gi,_i,e,t);c.layers=this.layers,this.add(c);const l=new qt(gi,_i,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Os)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,p,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class ml extends kt{constructor(e=[],t=bi,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kc extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ml(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ji(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:In});r.uniforms.tEquirect.value=t;const a=new Yt(s,r),o=t.minFilter;return t.minFilter===Kn&&(t.minFilter=ln),new jc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class Zn extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zc={type:"move"};class mr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const S of e.hand.values()){const g=t.getJointPose(S,n),u=this._getHandJoint(l,S);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),m=.02,v=.005;l.inputState.pinching&&p>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zc)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Zn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Jc extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const gr=new G,Qc=new G,ed=new rt;class Xn{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=gr.subVectors(n,t).cross(Qc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(gr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ed.getNormalMatrix(e),s=this.coplanarPoint(gr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new Zi,td=new Mt(.5,.5),Ss=new G;class wa{constructor(e=new Xn,t=new Xn,n=new Xn,s=new Xn,r=new Xn,a=new Xn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],p=r[6],m=r[7],v=r[8],S=r[9],g=r[10],u=r[11],D=r[12],R=r[13],A=r[14],F=r[15];if(s[0].setComponents(l-a,m-h,u-v,F-D).normalize(),s[1].setComponents(l+a,m+h,u+v,F+D).normalize(),s[2].setComponents(l+o,m+d,u+S,F+R).normalize(),s[3].setComponents(l-o,m-d,u-S,F-R).normalize(),n)s[4].setComponents(c,p,g,A).normalize(),s[5].setComponents(l-c,m-p,u-g,F-A).normalize();else if(s[4].setComponents(l-c,m-p,u-g,F-A).normalize(),t===cn)s[5].setComponents(l+c,m+p,u+g,F+A).normalize();else if(t===Os)s[5].setComponents(c,p,g,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(e){Hn.center.set(0,0,0);const t=td.distanceTo(e.center);return Hn.radius=.7071067811865476+t,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ss.x=s.normal.x>0?e.max.x:e.min.x,Ss.y=s.normal.y>0?e.max.y:e.min.y,Ss.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vi extends hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zs=new G,ks=new G,ro=new bt,zi=new Aa,ys=new Zi,_r=new G,ao=new G;class gl extends It{constructor(e=new jt,t=new Vi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)zs.fromBufferAttribute(t,s-1),ks.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=zs.distanceTo(ks);e.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(s),ys.radius+=r,e.ray.intersectsSphere(ys)===!1)return;ro.copy(s).invert(),zi.copy(e.ray).applyMatrix4(ro);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let S=m,g=v-1;S<g;S+=l){const u=h.getX(S),D=h.getX(S+1),R=Es(this,e,zi,c,u,D,S);R&&t.push(R)}if(this.isLineLoop){const S=h.getX(v-1),g=h.getX(m),u=Es(this,e,zi,c,S,g,v-1);u&&t.push(u)}}else{const m=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let S=m,g=v-1;S<g;S+=l){const u=Es(this,e,zi,c,S,S+1,S);u&&t.push(u)}if(this.isLineLoop){const S=Es(this,e,zi,c,v-1,m,v-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Es(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(zs.fromBufferAttribute(o,s),ks.fromBufferAttribute(o,r),t.distanceSqToSegment(zs,ks,_r,ao)>n)return;_r.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(_r);if(!(l<e.near||l>e.far))return{distance:l,point:ao.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const oo=new G,lo=new G;class co extends gl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)oo.fromBufferAttribute(t,s),lo.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+oo.distanceTo(lo);e.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ki extends hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const uo=new bt,pa=new Aa,Ts=new Zi,bs=new G;class vr extends It{constructor(e=new jt,t=new ki){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(s),Ts.radius+=r,e.ray.intersectsSphere(Ts)===!1)return;uo.copy(s).invert(),pa.copy(e.ray).applyMatrix4(uo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const p=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let v=p,S=m;v<S;v++){const g=l.getX(v);bs.fromBufferAttribute(d,g),ho(bs,g,c,s,e,t,this)}}else{const p=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let v=p,S=m;v<S;v++)bs.fromBufferAttribute(d,v),ho(bs,v,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ho(i,e,t,n,s,r,a){const o=pa.distanceSqToPoint(i);if(o<t){const c=new G;pa.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class _l extends kt{constructor(e,t,n=Jn,s,r,a,o=sn,c=sn,l,h=Xi,d=1){if(h!==Xi&&h!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:d};super(p,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ba(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Qi extends jt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=e/o,p=t/c,m=[],v=[],S=[],g=[];for(let u=0;u<h;u++){const D=u*p-a;for(let R=0;R<l;R++){const A=R*d-r;v.push(A,-D,0),S.push(0,0,1),g.push(R/o),g.push(1-u/c)}}for(let u=0;u<c;u++)for(let D=0;D<o;D++){const R=D+l*u,A=D+l*(u+1),F=D+1+l*(u+1),L=D+1+l*u;m.push(R,A,L),m.push(A,F,L)}this.setIndex(m),this.setAttribute("position",new Ot(v,3)),this.setAttribute("normal",new Ot(S,3)),this.setAttribute("uv",new Ot(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.width,e.height,e.widthSegments,e.heightSegments)}}class xr extends hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nd extends hn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new dt(16777215),this.specular=new dt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=_a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class id extends hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sd extends hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class rd{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=l.length;d<p;d+=2){const m=l[d],v=l[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const ad=new rd;class Ra{constructor(e){this.manager=e!==void 0?e:ad,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ra.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mn={};class od extends Error{constructor(e,t){super(e),this.response=t}}class ld extends Ra{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=fo.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Mn[e]!==void 0){Mn[e].push({onLoad:t,onProgress:n,onError:s});return}Mn[e]=[],Mn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Mn[e],d=l.body.getReader(),p=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=p?parseInt(p):0,v=m!==0;let S=0;const g=new ReadableStream({start(u){D();function D(){d.read().then(({done:R,value:A})=>{if(R)u.close();else{S+=A.byteLength;const F=new ProgressEvent("progress",{lengthComputable:v,loaded:S,total:m});for(let L=0,U=h.length;L<U;L++){const z=h[L];z.onProgress&&z.onProgress(F)}u.enqueue(A),D()}},R=>{u.error(R)})}}});return new Response(g)}else throw new od(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),p=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(p);return l.arrayBuffer().then(v=>m.decode(v))}}}).then(l=>{fo.add(`file:${e}`,l);const h=Mn[e];delete Mn[e];for(let d=0,p=h.length;d<p;d++){const m=h[d];m.onLoad&&m.onLoad(l)}}).catch(l=>{const h=Mn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Mn[e];for(let d=0,p=h.length;d<p;d++){const m=h[d];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class vl extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Mr=new bt,po=new G,mo=new G;class cd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wa,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;po.setFromMatrixPosition(e.matrixWorld),t.position.copy(po),mo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mo),t.updateMatrixWorld(),Mr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mr,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Mr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xl extends pl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class dd extends cd{constructor(){super(new xl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ud extends vl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new dd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hd extends vl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class fd extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function go(i,e,t,n){const s=pd(n);switch(t){case el:return i*e;case nl:return i*e/s.components*s.byteLength;case Sa:return i*e/s.components*s.byteLength;case il:return i*e*2/s.components*s.byteLength;case ya:return i*e*2/s.components*s.byteLength;case tl:return i*e*3/s.components*s.byteLength;case nn:return i*e*4/s.components*s.byteLength;case Ea:return i*e*4/s.components*s.byteLength;case Ps:case Ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ls:case Is:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vr:case Wr:return Math.max(i,16)*Math.max(e,8)/4;case Hr:case Gr:return Math.max(i,8)*Math.max(e,8)/2;case Xr:case $r:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Kr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Zr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Jr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Qr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ea:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ta:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case na:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ia:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case sa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ra:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case aa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case oa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Us:case la:case ca:return Math.ceil(i/4)*Math.ceil(e/4)*16;case sl:case da:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ua:case ha:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pd(i){switch(i){case un:case Zo:return{byteLength:1,components:1};case Gi:case Jo:case qi:return{byteLength:2,components:1};case xa:case Ma:return{byteLength:2,components:4};case Jn:case va:case En:return{byteLength:4,components:1};case Qo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ga);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ml(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function md(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((m,v)=>m.start-v.start);let p=0;for(let m=1;m<d.length;m++){const v=d[p],S=d[m];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++p,d[p]=S)}d.length=p+1;for(let m=0,v=d.length;m<v;m++){const S=d[m];i.bufferSubData(l,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var gd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_d=`#ifdef USE_ALPHAHASH
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
#endif`,vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Md=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yd=`#ifdef USE_AOMAP
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
#endif`,Ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Td=`#ifdef USE_BATCHING
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
#endif`,bd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ad=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cd=`#ifdef USE_IRIDESCENCE
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
#endif`,Pd=`#ifdef USE_BUMPMAP
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
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zd=`#define PI 3.141592653589793
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
} // validated`,kd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hd=`vec3 transformedNormal = objectNormal;
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
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$d="gl_FragColor = linearToOutputTexel( gl_FragColor );",qd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yd=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iu=`#ifdef USE_GRADIENTMAP
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
}`,su=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ru=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,au=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ou=`uniform bool receiveShadow;
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
#endif`,lu=`#ifdef USE_ENVMAP
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
#endif`,cu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fu=`PhysicalMaterial material;
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
#endif`,pu=`struct PhysicalMaterial {
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
}`,mu=`
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
#endif`,gu=`#if defined( RE_IndirectDiffuse )
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
#endif`,_u=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Su=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bu=`#if defined( USE_POINTS_UV )
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
#endif`,Au=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ru=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Du=`#ifdef USE_MORPHTARGETS
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
#endif`,Lu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Uu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ou=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bu=`#ifdef USE_NORMALMAP
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
#endif`,zu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ku=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$u=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ju=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ku=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ju=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eh=`float getShadowMask() {
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
}`,th=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nh=`#ifdef USE_SKINNING
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
#endif`,ih=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sh=`#ifdef USE_SKINNING
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
#endif`,rh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ah=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ch=`#ifdef USE_TRANSMISSION
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
#endif`,dh=`#ifdef USE_TRANSMISSION
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
#endif`,uh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ph=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gh=`uniform sampler2D t2D;
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
}`,_h=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sh=`#include <common>
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
}`,yh=`#if DEPTH_PACKING == 3200
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
}`,Eh=`#define DISTANCE
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
}`,Th=`#define DISTANCE
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
}`,bh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ah=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wh=`uniform float scale;
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
}`,Rh=`uniform vec3 diffuse;
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
}`,Ch=`#include <common>
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
}`,Ph=`uniform vec3 diffuse;
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
}`,Dh=`#define LAMBERT
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
}`,Lh=`#define LAMBERT
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
}`,Ih=`#define MATCAP
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
}`,Uh=`#define MATCAP
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
}`,Nh=`#define NORMAL
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
}`,Fh=`#define NORMAL
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
}`,Oh=`#define PHONG
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
}`,Bh=`#define PHONG
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
}`,zh=`#define STANDARD
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
}`,kh=`#define STANDARD
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
}`,Hh=`#define TOON
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
}`,Vh=`#define TOON
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
}`,Gh=`uniform float size;
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
}`,Wh=`uniform vec3 diffuse;
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
}`,Xh=`#include <common>
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
}`,$h=`uniform vec3 color;
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
}`,qh=`uniform float rotation;
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
}`,Yh=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:gd,alphahash_pars_fragment:_d,alphamap_fragment:vd,alphamap_pars_fragment:xd,alphatest_fragment:Md,alphatest_pars_fragment:Sd,aomap_fragment:yd,aomap_pars_fragment:Ed,batching_pars_vertex:Td,batching_vertex:bd,begin_vertex:Ad,beginnormal_vertex:wd,bsdfs:Rd,iridescence_fragment:Cd,bumpmap_pars_fragment:Pd,clipping_planes_fragment:Dd,clipping_planes_pars_fragment:Ld,clipping_planes_pars_vertex:Id,clipping_planes_vertex:Ud,color_fragment:Nd,color_pars_fragment:Fd,color_pars_vertex:Od,color_vertex:Bd,common:zd,cube_uv_reflection_fragment:kd,defaultnormal_vertex:Hd,displacementmap_pars_vertex:Vd,displacementmap_vertex:Gd,emissivemap_fragment:Wd,emissivemap_pars_fragment:Xd,colorspace_fragment:$d,colorspace_pars_fragment:qd,envmap_fragment:Yd,envmap_common_pars_fragment:jd,envmap_pars_fragment:Kd,envmap_pars_vertex:Zd,envmap_physical_pars_fragment:lu,envmap_vertex:Jd,fog_vertex:Qd,fog_pars_vertex:eu,fog_fragment:tu,fog_pars_fragment:nu,gradientmap_pars_fragment:iu,lightmap_pars_fragment:su,lights_lambert_fragment:ru,lights_lambert_pars_fragment:au,lights_pars_begin:ou,lights_toon_fragment:cu,lights_toon_pars_fragment:du,lights_phong_fragment:uu,lights_phong_pars_fragment:hu,lights_physical_fragment:fu,lights_physical_pars_fragment:pu,lights_fragment_begin:mu,lights_fragment_maps:gu,lights_fragment_end:_u,logdepthbuf_fragment:vu,logdepthbuf_pars_fragment:xu,logdepthbuf_pars_vertex:Mu,logdepthbuf_vertex:Su,map_fragment:yu,map_pars_fragment:Eu,map_particle_fragment:Tu,map_particle_pars_fragment:bu,metalnessmap_fragment:Au,metalnessmap_pars_fragment:wu,morphinstance_vertex:Ru,morphcolor_vertex:Cu,morphnormal_vertex:Pu,morphtarget_pars_vertex:Du,morphtarget_vertex:Lu,normal_fragment_begin:Iu,normal_fragment_maps:Uu,normal_pars_fragment:Nu,normal_pars_vertex:Fu,normal_vertex:Ou,normalmap_pars_fragment:Bu,clearcoat_normal_fragment_begin:zu,clearcoat_normal_fragment_maps:ku,clearcoat_pars_fragment:Hu,iridescence_pars_fragment:Vu,opaque_fragment:Gu,packing:Wu,premultiplied_alpha_fragment:Xu,project_vertex:$u,dithering_fragment:qu,dithering_pars_fragment:Yu,roughnessmap_fragment:ju,roughnessmap_pars_fragment:Ku,shadowmap_pars_fragment:Zu,shadowmap_pars_vertex:Ju,shadowmap_vertex:Qu,shadowmask_pars_fragment:eh,skinbase_vertex:th,skinning_pars_vertex:nh,skinning_vertex:ih,skinnormal_vertex:sh,specularmap_fragment:rh,specularmap_pars_fragment:ah,tonemapping_fragment:oh,tonemapping_pars_fragment:lh,transmission_fragment:ch,transmission_pars_fragment:dh,uv_pars_fragment:uh,uv_pars_vertex:hh,uv_vertex:fh,worldpos_vertex:ph,background_vert:mh,background_frag:gh,backgroundCube_vert:_h,backgroundCube_frag:vh,cube_vert:xh,cube_frag:Mh,depth_vert:Sh,depth_frag:yh,distanceRGBA_vert:Eh,distanceRGBA_frag:Th,equirect_vert:bh,equirect_frag:Ah,linedashed_vert:wh,linedashed_frag:Rh,meshbasic_vert:Ch,meshbasic_frag:Ph,meshlambert_vert:Dh,meshlambert_frag:Lh,meshmatcap_vert:Ih,meshmatcap_frag:Uh,meshnormal_vert:Nh,meshnormal_frag:Fh,meshphong_vert:Oh,meshphong_frag:Bh,meshphysical_vert:zh,meshphysical_frag:kh,meshtoon_vert:Hh,meshtoon_frag:Vh,points_vert:Gh,points_frag:Wh,shadow_vert:Xh,shadow_frag:$h,sprite_vert:qh,sprite_frag:Yh},be={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},on={basic:{uniforms:Ft([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Ft([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new dt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Ft([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Ft([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Ft([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new dt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Ft([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Ft([be.points,be.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Ft([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Ft([be.common,be.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Ft([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Ft([be.sprite,be.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:Ft([be.common,be.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:Ft([be.lights,be.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};on.physical={uniforms:Ft([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const As={r:0,b:0,g:0},Vn=new rn,jh=new bt;function Kh(i,e,t,n,s,r,a){const o=new dt(0);let c=r===!0?0:1,l,h,d=null,p=0,m=null;function v(R){let A=R.isScene===!0?R.background:null;return A&&A.isTexture&&(A=(R.backgroundBlurriness>0?t:e).get(A)),A}function S(R){let A=!1;const F=v(R);F===null?u(o,c):F&&F.isColor&&(u(F,1),A=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(R,A){const F=v(A);F&&(F.isCubeTexture||F.mapping===Hs)?(h===void 0&&(h=new Yt(new Ji(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Ri(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,U,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Vn.copy(A.backgroundRotation),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),h.material.uniforms.envMap.value=F,h.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jh.makeRotationFromEuler(Vn)),h.material.toneMapped=xt.getTransfer(F.colorSpace)!==Et,(d!==F||p!==F.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=F,p=F.version,m=i.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):F&&F.isTexture&&(l===void 0&&(l=new Yt(new Qi(2,2),new Fn({name:"BackgroundMaterial",uniforms:Ri(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=F,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=xt.getTransfer(F.colorSpace)!==Et,F.matrixAutoUpdate===!0&&F.updateMatrix(),l.material.uniforms.uvTransform.value.copy(F.matrix),(d!==F||p!==F.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=F,p=F.version,m=i.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null))}function u(R,A){R.getRGB(As,fl(i)),n.buffers.color.setClear(As.r,As.g,As.b,A,a)}function D(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(R,A=1){o.set(R),c=A,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(R){c=R,u(o,c)},render:S,addToRenderList:g,dispose:D}}function Zh(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,a=!1;function o(E,P,Z,j,K){let re=!1;const Q=d(j,Z,P);r!==Q&&(r=Q,l(r.object)),re=m(E,j,Z,K),re&&v(E,j,Z,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(re||a)&&(a=!1,A(E,P,Z,j),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function d(E,P,Z){const j=Z.wireframe===!0;let K=n[E.id];K===void 0&&(K={},n[E.id]=K);let re=K[P.id];re===void 0&&(re={},K[P.id]=re);let Q=re[j];return Q===void 0&&(Q=p(c()),re[j]=Q),Q}function p(E){const P=[],Z=[],j=[];for(let K=0;K<t;K++)P[K]=0,Z[K]=0,j[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:Z,attributeDivisors:j,object:E,attributes:{},index:null}}function m(E,P,Z,j){const K=r.attributes,re=P.attributes;let Q=0;const ue=Z.getAttributes();for(const Y in ue)if(ue[Y].location>=0){const ye=K[Y];let Le=re[Y];if(Le===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(Le=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(Le=E.instanceColor)),ye===void 0||ye.attribute!==Le||Le&&ye.data!==Le.data)return!0;Q++}return r.attributesNum!==Q||r.index!==j}function v(E,P,Z,j){const K={},re=P.attributes;let Q=0;const ue=Z.getAttributes();for(const Y in ue)if(ue[Y].location>=0){let ye=re[Y];ye===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(ye=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(ye=E.instanceColor));const Le={};Le.attribute=ye,ye&&ye.data&&(Le.data=ye.data),K[Y]=Le,Q++}r.attributes=K,r.attributesNum=Q,r.index=j}function S(){const E=r.newAttributes;for(let P=0,Z=E.length;P<Z;P++)E[P]=0}function g(E){u(E,0)}function u(E,P){const Z=r.newAttributes,j=r.enabledAttributes,K=r.attributeDivisors;Z[E]=1,j[E]===0&&(i.enableVertexAttribArray(E),j[E]=1),K[E]!==P&&(i.vertexAttribDivisor(E,P),K[E]=P)}function D(){const E=r.newAttributes,P=r.enabledAttributes;for(let Z=0,j=P.length;Z<j;Z++)P[Z]!==E[Z]&&(i.disableVertexAttribArray(Z),P[Z]=0)}function R(E,P,Z,j,K,re,Q){Q===!0?i.vertexAttribIPointer(E,P,Z,K,re):i.vertexAttribPointer(E,P,Z,j,K,re)}function A(E,P,Z,j){S();const K=j.attributes,re=Z.getAttributes(),Q=P.defaultAttributeValues;for(const ue in re){const Y=re[ue];if(Y.location>=0){let Me=K[ue];if(Me===void 0&&(ue==="instanceMatrix"&&E.instanceMatrix&&(Me=E.instanceMatrix),ue==="instanceColor"&&E.instanceColor&&(Me=E.instanceColor)),Me!==void 0){const ye=Me.normalized,Le=Me.itemSize,et=e.get(Me);if(et===void 0)continue;const ze=et.buffer,Re=et.type,X=et.bytesPerElement,me=Re===i.INT||Re===i.UNSIGNED_INT||Me.gpuType===va;if(Me.isInterleavedBufferAttribute){const ce=Me.data,Ue=ce.stride,Ie=Me.offset;if(ce.isInstancedInterleavedBuffer){for(let We=0;We<Y.locationSize;We++)u(Y.location+We,ce.meshPerAttribute);E.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let We=0;We<Y.locationSize;We++)g(Y.location+We);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let We=0;We<Y.locationSize;We++)R(Y.location+We,Le/Y.locationSize,Re,ye,Ue*X,(Ie+Le/Y.locationSize*We)*X,me)}else{if(Me.isInstancedBufferAttribute){for(let ce=0;ce<Y.locationSize;ce++)u(Y.location+ce,Me.meshPerAttribute);E.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ce=0;ce<Y.locationSize;ce++)g(Y.location+ce);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let ce=0;ce<Y.locationSize;ce++)R(Y.location+ce,Le/Y.locationSize,Re,ye,Le*X,Le/Y.locationSize*ce*X,me)}}else if(Q!==void 0){const ye=Q[ue];if(ye!==void 0)switch(ye.length){case 2:i.vertexAttrib2fv(Y.location,ye);break;case 3:i.vertexAttrib3fv(Y.location,ye);break;case 4:i.vertexAttrib4fv(Y.location,ye);break;default:i.vertexAttrib1fv(Y.location,ye)}}}}D()}function F(){z();for(const E in n){const P=n[E];for(const Z in P){const j=P[Z];for(const K in j)h(j[K].object),delete j[K];delete P[Z]}delete n[E]}}function L(E){if(n[E.id]===void 0)return;const P=n[E.id];for(const Z in P){const j=P[Z];for(const K in j)h(j[K].object),delete j[K];delete P[Z]}delete n[E.id]}function U(E){for(const P in n){const Z=n[P];if(Z[E.id]===void 0)continue;const j=Z[E.id];for(const K in j)h(j[K].object),delete j[K];delete Z[E.id]}}function z(){b(),a=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:z,resetDefaultState:b,dispose:F,releaseStatesOfGeometry:L,releaseStatesOfProgram:U,initAttributes:S,enableAttribute:g,disableUnusedAttributes:D}}function Jh(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function o(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let m=0;for(let v=0;v<d;v++)m+=h[v];t.update(m,n,1)}function c(l,h,d,p){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<l.length;v++)a(l[v],h[v],p[v]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,d);let v=0;for(let S=0;S<d;S++)v+=h[S]*p[S];t.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Qh(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(U){return!(U!==nn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){const z=U===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==un&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==En&&!z)}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=v>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:D,maxVaryings:R,maxFragmentUniforms:A,vertexTextures:F,maxSamples:L}}function ef(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Xn,o=new rt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const m=d.length!==0||p||n!==0||s;return s=p,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,m){const v=d.clippingPlanes,S=d.clipIntersection,g=d.clipShadows,u=i.get(d);if(!s||v===null||v.length===0||r&&!g)r?h(null):l();else{const D=r?0:n,R=D*4;let A=u.clippingState||null;c.value=A,A=h(v,p,R,m);for(let F=0;F!==R;++F)A[F]=t[F];u.clippingState=A,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=D}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,p,m,v){const S=d!==null?d.length:0;let g=null;if(S!==0){if(g=c.value,v!==!0||g===null){const u=m+S*4,D=p.matrixWorldInverse;o.getNormalMatrix(D),(g===null||g.length<u)&&(g=new Float32Array(u));for(let R=0,A=m;R!==S;++R,A+=4)a.copy(d[R]).applyMatrix4(D,o),a.normal.toArray(g,A),g[A+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}function tf(i){let e=new WeakMap;function t(a,o){return o===Or?a.mapping=bi:o===Br&&(a.mapping=Ai),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Or||o===Br)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Kc(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Mi=4,_o=[.125,.215,.35,.446,.526,.582],Yn=20,Sr=new xl,vo=new dt;let yr=null,Er=0,Tr=0,br=!1;const $n=(1+Math.sqrt(5))/2,vi=1/$n,xo=[new G(-$n,vi,0),new G($n,vi,0),new G(-vi,0,$n),new G(vi,0,$n),new G(0,$n,-vi),new G(0,$n,vi),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],nf=new G;class Mo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=nf}=r;yr=this._renderer.getRenderTarget(),Er=this._renderer.getActiveCubeFace(),Tr=this._renderer.getActiveMipmapLevel(),br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yr,Er,Tr),this._renderer.xr.enabled=br,e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bi||e.mapping===Ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yr=this._renderer.getRenderTarget(),Er=this._renderer.getActiveCubeFace(),Tr=this._renderer.getActiveMipmapLevel(),br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:qi,format:nn,colorSpace:wi,depthBuffer:!1},s=So(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=So(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sf(r)),this._blurMaterial=rf(r,e,t)}return s}_compileMaterial(e){const t=new Yt(this._lodPlanes[0],e);this._renderer.compile(t,Sr)}_sceneToCubeUV(e,t,n,s,r){const c=new qt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,m=d.toneMapping;d.getClearColor(vo),d.toneMapping=Un,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const S=new dl({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),g=new Yt(new Ji,S);let u=!1;const D=e.background;D?D.isColor&&(S.color.copy(D),e.background=null,u=!0):(S.color.copy(vo),u=!0);for(let R=0;R<6;R++){const A=R%3;A===0?(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[R],r.y,r.z)):A===1?(c.up.set(0,0,l[R]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[R],r.z)):(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[R]));const F=this._cubeSize;ws(s,A*F,R>2?F:0,F,F),d.setRenderTarget(s),u&&d.render(g,c),d.render(e,c)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=m,d.autoClear=p,e.background=D}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===bi||e.mapping===Ai;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Yt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;ws(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Sr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=xo[(s-r-1)%xo.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Yt(this._lodPlanes[s],l),p=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Yn-1),S=r/v,g=isFinite(r)?1+Math.floor(h*S):Yn;g>Yn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Yn}`);const u=[];let D=0;for(let U=0;U<Yn;++U){const z=U/S,b=Math.exp(-z*z/2);u.push(b),U===0?D+=b:U<g&&(D+=2*b)}for(let U=0;U<u.length;U++)u[U]=u[U]/D;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:R}=this;p.dTheta.value=v,p.mipInt.value=R-n;const A=this._sizeLods[s],F=3*A*(s>R-Mi?s-R+Mi:0),L=4*(this._cubeSize-A);ws(t,F,L,3*A,2*A),c.setRenderTarget(t),c.render(d,Sr)}}function sf(i){const e=[],t=[],n=[];let s=i;const r=i-Mi+1+_o.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Mi?c=_o[a-i+Mi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,p=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,v=6,S=3,g=2,u=1,D=new Float32Array(S*v*m),R=new Float32Array(g*v*m),A=new Float32Array(u*v*m);for(let L=0;L<m;L++){const U=L%3*2/3-1,z=L>2?0:-1,b=[U,z,0,U+2/3,z,0,U+2/3,z+1,0,U,z,0,U+2/3,z+1,0,U,z+1,0];D.set(b,S*v*L),R.set(p,g*v*L);const E=[L,L,L,L,L,L];A.set(E,u*v*L)}const F=new jt;F.setAttribute("position",new dn(D,S)),F.setAttribute("uv",new dn(R,g)),F.setAttribute("faceIndex",new dn(A,u)),e.push(F),s>Mi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function So(i,e,t){const n=new Qn(i,e,t);return n.texture.mapping=Hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ws(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function rf(i,e,t){const n=new Float32Array(Yn),s=new G(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ca(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function yo(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ca(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Eo(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Ca(){return`

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
	`}function af(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Or||c===Br,h=c===bi||c===Ai;if(l||h){let d=e.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new Mo(i)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return l&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new Mo(i)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function of(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&yi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function lf(i,e,t,n){const s={},r=new WeakMap;function a(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);p.removeEventListener("dispose",a),delete s[p.id];const m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function c(d){const p=d.attributes;for(const m in p)e.update(p[m],i.ARRAY_BUFFER)}function l(d){const p=[],m=d.index,v=d.attributes.position;let S=0;if(m!==null){const D=m.array;S=m.version;for(let R=0,A=D.length;R<A;R+=3){const F=D[R+0],L=D[R+1],U=D[R+2];p.push(F,L,L,U,U,F)}}else if(v!==void 0){const D=v.array;S=v.version;for(let R=0,A=D.length/3-1;R<A;R+=3){const F=R+0,L=R+1,U=R+2;p.push(F,L,L,U,U,F)}}else return;const g=new(al(p)?hl:ul)(p,1);g.version=S;const u=r.get(d);u&&e.remove(u),r.set(d,g)}function h(d){const p=r.get(d);if(p){const m=d.index;m!==null&&p.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function cf(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,m){i.drawElements(n,m,r,p*a),t.update(m,n,1)}function l(p,m,v){v!==0&&(i.drawElementsInstanced(n,m,r,p*a,v),t.update(m,n,v))}function h(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,v);let g=0;for(let u=0;u<v;u++)g+=m[u];t.update(g,n,1)}function d(p,m,v,S){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<p.length;u++)l(p[u]/a,m[u],S[u]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,S,0,v);let u=0;for(let D=0;D<v;D++)u+=m[D]*S[D];t.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function df(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function uf(i,e,t){const n=new WeakMap,s=new At;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let p=n.get(o);if(p===void 0||p.count!==d){let b=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",b)};p!==void 0&&p.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],D=o.morphAttributes.color||[];let R=0;m===!0&&(R=1),v===!0&&(R=2),S===!0&&(R=3);let A=o.attributes.position.count*R,F=1;A>e.maxTextureSize&&(F=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const L=new Float32Array(A*F*4*d),U=new ol(L,A,F,d);U.type=En,U.needsUpdate=!0;const z=R*4;for(let E=0;E<d;E++){const P=g[E],Z=u[E],j=D[E],K=A*F*4*E;for(let re=0;re<P.count;re++){const Q=re*z;m===!0&&(s.fromBufferAttribute(P,re),L[K+Q+0]=s.x,L[K+Q+1]=s.y,L[K+Q+2]=s.z,L[K+Q+3]=0),v===!0&&(s.fromBufferAttribute(Z,re),L[K+Q+4]=s.x,L[K+Q+5]=s.y,L[K+Q+6]=s.z,L[K+Q+7]=0),S===!0&&(s.fromBufferAttribute(j,re),L[K+Q+8]=s.x,L[K+Q+9]=s.y,L[K+Q+10]=s.z,L[K+Q+11]=j.itemSize===4?s.w:1)}}p={count:d,texture:U,size:new Mt(A,F)},n.set(o,p),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let S=0;S<l.length;S++)m+=l[S];const v=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function hf(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return d}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const Sl=new kt,To=new _l(1,1),yl=new ol,El=new Ic,Tl=new ml,bo=[],Ao=[],wo=new Float32Array(16),Ro=new Float32Array(9),Co=new Float32Array(4);function Pi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=bo[s];if(r===void 0&&(r=new Float32Array(s),bo[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Vs(i,e){let t=Ao[e];t===void 0&&(t=new Int32Array(e),Ao[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ff(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function pf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function mf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function gf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function _f(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Co.set(n),i.uniformMatrix2fv(this.addr,!1,Co),Pt(t,n)}}function vf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Ro.set(n),i.uniformMatrix3fv(this.addr,!1,Ro),Pt(t,n)}}function xf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;wo.set(n),i.uniformMatrix4fv(this.addr,!1,wo),Pt(t,n)}}function Mf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function yf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function Ef(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function Tf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function bf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function Af(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function Rf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(To.compareFunction=rl,r=To):r=Sl,t.setTexture2D(e||r,s)}function Cf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||El,s)}function Pf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Tl,s)}function Df(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||yl,s)}function Lf(i){switch(i){case 5126:return ff;case 35664:return pf;case 35665:return mf;case 35666:return gf;case 35674:return _f;case 35675:return vf;case 35676:return xf;case 5124:case 35670:return Mf;case 35667:case 35671:return Sf;case 35668:case 35672:return yf;case 35669:case 35673:return Ef;case 5125:return Tf;case 36294:return bf;case 36295:return Af;case 36296:return wf;case 35678:case 36198:case 36298:case 36306:case 35682:return Rf;case 35679:case 36299:case 36307:return Cf;case 35680:case 36300:case 36308:case 36293:return Pf;case 36289:case 36303:case 36311:case 36292:return Df}}function If(i,e){i.uniform1fv(this.addr,e)}function Uf(i,e){const t=Pi(e,this.size,2);i.uniform2fv(this.addr,t)}function Nf(i,e){const t=Pi(e,this.size,3);i.uniform3fv(this.addr,t)}function Ff(i,e){const t=Pi(e,this.size,4);i.uniform4fv(this.addr,t)}function Of(i,e){const t=Pi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Bf(i,e){const t=Pi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zf(i,e){const t=Pi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function kf(i,e){i.uniform1iv(this.addr,e)}function Hf(i,e){i.uniform2iv(this.addr,e)}function Vf(i,e){i.uniform3iv(this.addr,e)}function Gf(i,e){i.uniform4iv(this.addr,e)}function Wf(i,e){i.uniform1uiv(this.addr,e)}function Xf(i,e){i.uniform2uiv(this.addr,e)}function $f(i,e){i.uniform3uiv(this.addr,e)}function qf(i,e){i.uniform4uiv(this.addr,e)}function Yf(i,e,t){const n=this.cache,s=e.length,r=Vs(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Sl,r[a])}function jf(i,e,t){const n=this.cache,s=e.length,r=Vs(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||El,r[a])}function Kf(i,e,t){const n=this.cache,s=e.length,r=Vs(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Tl,r[a])}function Zf(i,e,t){const n=this.cache,s=e.length,r=Vs(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||yl,r[a])}function Jf(i){switch(i){case 5126:return If;case 35664:return Uf;case 35665:return Nf;case 35666:return Ff;case 35674:return Of;case 35675:return Bf;case 35676:return zf;case 5124:case 35670:return kf;case 35667:case 35671:return Hf;case 35668:case 35672:return Vf;case 35669:case 35673:return Gf;case 5125:return Wf;case 36294:return Xf;case 36295:return $f;case 36296:return qf;case 35678:case 36198:case 36298:case 36306:case 35682:return Yf;case 35679:case 36299:case 36307:return jf;case 35680:case 36300:case 36308:case 36293:return Kf;case 36289:case 36303:case 36311:case 36292:return Zf}}class Qf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Lf(t.type)}}class ep{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jf(t.type)}}class tp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ar=/(\w+)(\])?(\[|\.)?/g;function Po(i,e){i.seq.push(e),i.map[e.id]=e}function np(i,e,t){const n=i.name,s=n.length;for(Ar.lastIndex=0;;){const r=Ar.exec(n),a=Ar.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Po(t,l===void 0?new Qf(o,i,e):new ep(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new tp(o),Po(t,d)),t=d}}}class Ns{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);np(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Do(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ip=37297;let sp=0;function rp(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Lo=new rt;function ap(i){xt._getMatrix(Lo,xt.workingColorSpace,i);const e=`mat3( ${Lo.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(i)){case Fs:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Io(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+rp(i.getShaderSource(e),o)}else return r}function op(i,e){const t=ap(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function lp(i,e){let t;switch(e){case oc:t="Linear";break;case lc:t="Reinhard";break;case cc:t="Cineon";break;case dc:t="ACESFilmic";break;case hc:t="AgX";break;case fc:t="Neutral";break;case uc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rs=new G;function cp(){xt.getLuminanceCoefficients(Rs);const i=Rs.x.toFixed(4),e=Rs.y.toFixed(4),t=Rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hi).join(`
`)}function up(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Hi(i){return i!==""}function Uo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function No(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ma(i){return i.replace(fp,mp)}const pp=new Map;function mp(i,e){let t=ot[e];if(t===void 0){const n=pp.get(e);if(n!==void 0)t=ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ma(t)}const gp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fo(i){return i.replace(gp,_p)}function _p(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Oo(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function vp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===kl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Sn&&(e="SHADOWMAP_TYPE_VSM"),e}function xp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bi:case Ai:e="ENVMAP_TYPE_CUBE";break;case Hs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ai:e="ENVMAP_MODE_REFRACTION";break}return e}function Sp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _a:e="ENVMAP_BLENDING_MULTIPLY";break;case rc:e="ENVMAP_BLENDING_MIX";break;case ac:e="ENVMAP_BLENDING_ADD";break}return e}function yp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ep(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=vp(t),l=xp(t),h=Mp(t),d=Sp(t),p=yp(t),m=dp(t),v=up(r),S=s.createProgram();let g,u,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Hi).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Hi).join(`
`),u.length>0&&(u+=`
`)):(g=[Oo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hi).join(`
`),u=[Oo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?ot.tonemapping_pars_fragment:"",t.toneMapping!==Un?lp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,op("linearToOutputTexel",t.outputColorSpace),cp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hi).join(`
`)),a=ma(a),a=Uo(a,t),a=No(a,t),o=ma(o),o=Uo(o,t),o=No(o,t),a=Fo(a),o=Fo(o),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",t.glslVersion===Ha?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ha?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const R=D+g+a,A=D+u+o,F=Do(s,s.VERTEX_SHADER,R),L=Do(s,s.FRAGMENT_SHADER,A);s.attachShader(S,F),s.attachShader(S,L),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function U(P){if(i.debug.checkShaderErrors){const Z=s.getProgramInfoLog(S)||"",j=s.getShaderInfoLog(F)||"",K=s.getShaderInfoLog(L)||"",re=Z.trim(),Q=j.trim(),ue=K.trim();let Y=!0,Me=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,F,L);else{const ye=Io(s,F,"vertex"),Le=Io(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+re+`
`+ye+`
`+Le)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(Q===""||ue==="")&&(Me=!1);Me&&(P.diagnostics={runnable:Y,programLog:re,vertexShader:{log:Q,prefix:g},fragmentShader:{log:ue,prefix:u}})}s.deleteShader(F),s.deleteShader(L),z=new Ns(s,S),b=hp(s,S)}let z;this.getUniforms=function(){return z===void 0&&U(this),z};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(S,ip)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sp++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=F,this.fragmentShader=L,this}let Tp=0;class bp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ap(e),t.set(e,n)),n}}class Ap{constructor(e){this.id=Tp++,this.code=e,this.usedTimes=0}}function wp(i,e,t,n,s,r,a){const o=new ll,c=new bp,l=new Set,h=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,E,P,Z,j){const K=Z.fog,re=j.geometry,Q=b.isMeshStandardMaterial?Z.environment:null,ue=(b.isMeshStandardMaterial?t:e).get(b.envMap||Q),Y=ue&&ue.mapping===Hs?ue.image.height:null,Me=v[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const ye=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Le=ye!==void 0?ye.length:0;let et=0;re.morphAttributes.position!==void 0&&(et=1),re.morphAttributes.normal!==void 0&&(et=2),re.morphAttributes.color!==void 0&&(et=3);let ze,Re,X,me;if(Me){const vt=on[Me];ze=vt.vertexShader,Re=vt.fragmentShader}else ze=b.vertexShader,Re=b.fragmentShader,c.update(b),X=c.getVertexShaderID(b),me=c.getFragmentShaderID(b);const ce=i.getRenderTarget(),Ue=i.state.buffers.depth.getReversed(),Ie=j.isInstancedMesh===!0,We=j.isBatchedMesh===!0,at=!!b.map,Je=!!b.matcap,C=!!ue,lt=!!b.aoMap,Ne=!!b.lightMap,ct=!!b.bumpMap,Be=!!b.normalMap,Qe=!!b.displacementMap,Ce=!!b.emissiveMap,st=!!b.metalnessMap,wt=!!b.roughnessMap,nt=b.anisotropy>0,w=b.clearcoat>0,_=b.dispersion>0,H=b.iridescence>0,ne=b.sheen>0,oe=b.transmission>0,ee=nt&&!!b.anisotropyMap,Xe=w&&!!b.clearcoatMap,_e=w&&!!b.clearcoatNormalMap,ke=w&&!!b.clearcoatRoughnessMap,Ge=H&&!!b.iridescenceMap,fe=H&&!!b.iridescenceThicknessMap,Ae=ne&&!!b.sheenColorMap,Ke=ne&&!!b.sheenRoughnessMap,He=!!b.specularMap,Ee=!!b.specularColorMap,it=!!b.specularIntensityMap,N=oe&&!!b.transmissionMap,pe=oe&&!!b.thicknessMap,xe=!!b.gradientMap,Pe=!!b.alphaMap,de=b.alphaTest>0,ie=!!b.alphaHash,Fe=!!b.extensions;let tt=Un;b.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(tt=i.toneMapping);const St={shaderID:Me,shaderType:b.type,shaderName:b.name,vertexShader:ze,fragmentShader:Re,defines:b.defines,customVertexShaderID:X,customFragmentShaderID:me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:We,batchingColor:We&&j._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&j.instanceColor!==null,instancingMorph:Ie&&j.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:wi,alphaToCoverage:!!b.alphaToCoverage,map:at,matcap:Je,envMap:C,envMapMode:C&&ue.mapping,envMapCubeUVHeight:Y,aoMap:lt,lightMap:Ne,bumpMap:ct,normalMap:Be,displacementMap:p&&Qe,emissiveMap:Ce,normalMapObjectSpace:Be&&b.normalMapType===_c,normalMapTangentSpace:Be&&b.normalMapType===Ta,metalnessMap:st,roughnessMap:wt,anisotropy:nt,anisotropyMap:ee,clearcoat:w,clearcoatMap:Xe,clearcoatNormalMap:_e,clearcoatRoughnessMap:ke,dispersion:_,iridescence:H,iridescenceMap:Ge,iridescenceThicknessMap:fe,sheen:ne,sheenColorMap:Ae,sheenRoughnessMap:Ke,specularMap:He,specularColorMap:Ee,specularIntensityMap:it,transmission:oe,transmissionMap:N,thicknessMap:pe,gradientMap:xe,opaque:b.transparent===!1&&b.blending===Si&&b.alphaToCoverage===!1,alphaMap:Pe,alphaTest:de,alphaHash:ie,combine:b.combine,mapUv:at&&S(b.map.channel),aoMapUv:lt&&S(b.aoMap.channel),lightMapUv:Ne&&S(b.lightMap.channel),bumpMapUv:ct&&S(b.bumpMap.channel),normalMapUv:Be&&S(b.normalMap.channel),displacementMapUv:Qe&&S(b.displacementMap.channel),emissiveMapUv:Ce&&S(b.emissiveMap.channel),metalnessMapUv:st&&S(b.metalnessMap.channel),roughnessMapUv:wt&&S(b.roughnessMap.channel),anisotropyMapUv:ee&&S(b.anisotropyMap.channel),clearcoatMapUv:Xe&&S(b.clearcoatMap.channel),clearcoatNormalMapUv:_e&&S(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&S(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&S(b.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&S(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&S(b.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&S(b.sheenRoughnessMap.channel),specularMapUv:He&&S(b.specularMap.channel),specularColorMapUv:Ee&&S(b.specularColorMap.channel),specularIntensityMapUv:it&&S(b.specularIntensityMap.channel),transmissionMapUv:N&&S(b.transmissionMap.channel),thicknessMapUv:pe&&S(b.thicknessMap.channel),alphaMapUv:Pe&&S(b.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Be||nt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!re.attributes.uv&&(at||Pe),fog:!!K,useFog:b.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ue,skinning:j.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:et,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:tt,decodeVideoTexture:at&&b.map.isVideoTexture===!0&&xt.getTransfer(b.map.colorSpace)===Et,decodeVideoTextureEmissive:Ce&&b.emissiveMap.isVideoTexture===!0&&xt.getTransfer(b.emissiveMap.colorSpace)===Et,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===yn,flipSided:b.side===zt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Fe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&b.extensions.multiDraw===!0||We)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function u(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)E.push(P),E.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(D(E,b),R(E,b),E.push(i.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function D(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function R(b,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),E.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),b.push(o.mask)}function A(b){const E=v[b.type];let P;if(E){const Z=on[E];P=$c.clone(Z.uniforms)}else P=b.uniforms;return P}function F(b,E){let P;for(let Z=0,j=h.length;Z<j;Z++){const K=h[Z];if(K.cacheKey===E){P=K,++P.usedTimes;break}}return P===void 0&&(P=new Ep(i,E,b,r),h.push(P)),P}function L(b){if(--b.usedTimes===0){const E=h.indexOf(b);h[E]=h[h.length-1],h.pop(),b.destroy()}}function U(b){c.remove(b)}function z(){c.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:A,acquireProgram:F,releaseProgram:L,releaseShaderCache:U,programs:h,dispose:z}}function Rp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Cp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Bo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function zo(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,p,m,v,S,g){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:p,material:m,groupOrder:v,renderOrder:d.renderOrder,z:S,group:g},i[e]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=m,u.groupOrder=v,u.renderOrder=d.renderOrder,u.z=S,u.group=g),e++,u}function o(d,p,m,v,S,g){const u=a(d,p,m,v,S,g);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):t.push(u)}function c(d,p,m,v,S,g){const u=a(d,p,m,v,S,g);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):t.unshift(u)}function l(d,p){t.length>1&&t.sort(d||Cp),n.length>1&&n.sort(p||Bo),s.length>1&&s.sort(p||Bo)}function h(){for(let d=e,p=i.length;d<p;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Pp(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new zo,i.set(n,[a])):s>=r.length?(a=new zo,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Dp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new dt};break;case"SpotLight":t={position:new G,direction:new G,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function Lp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ip=0;function Up(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Np(i){const e=new Dp,t=Lp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);const s=new G,r=new bt,a=new bt;function o(l){let h=0,d=0,p=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,v=0,S=0,g=0,u=0,D=0,R=0,A=0,F=0,L=0,U=0;l.sort(Up);for(let b=0,E=l.length;b<E;b++){const P=l[b],Z=P.color,j=P.intensity,K=P.distance,re=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=Z.r*j,d+=Z.g*j,p+=Z.b*j;else if(P.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(P.sh.coefficients[Q],j);U++}else if(P.isDirectionalLight){const Q=e.get(P);if(Q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ue=P.shadow,Y=t.get(P);Y.shadowIntensity=ue.intensity,Y.shadowBias=ue.bias,Y.shadowNormalBias=ue.normalBias,Y.shadowRadius=ue.radius,Y.shadowMapSize=ue.mapSize,n.directionalShadow[m]=Y,n.directionalShadowMap[m]=re,n.directionalShadowMatrix[m]=P.shadow.matrix,D++}n.directional[m]=Q,m++}else if(P.isSpotLight){const Q=e.get(P);Q.position.setFromMatrixPosition(P.matrixWorld),Q.color.copy(Z).multiplyScalar(j),Q.distance=K,Q.coneCos=Math.cos(P.angle),Q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Q.decay=P.decay,n.spot[S]=Q;const ue=P.shadow;if(P.map&&(n.spotLightMap[F]=P.map,F++,ue.updateMatrices(P),P.castShadow&&L++),n.spotLightMatrix[S]=ue.matrix,P.castShadow){const Y=t.get(P);Y.shadowIntensity=ue.intensity,Y.shadowBias=ue.bias,Y.shadowNormalBias=ue.normalBias,Y.shadowRadius=ue.radius,Y.shadowMapSize=ue.mapSize,n.spotShadow[S]=Y,n.spotShadowMap[S]=re,A++}S++}else if(P.isRectAreaLight){const Q=e.get(P);Q.color.copy(Z).multiplyScalar(j),Q.halfWidth.set(P.width*.5,0,0),Q.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=Q,g++}else if(P.isPointLight){const Q=e.get(P);if(Q.color.copy(P.color).multiplyScalar(P.intensity),Q.distance=P.distance,Q.decay=P.decay,P.castShadow){const ue=P.shadow,Y=t.get(P);Y.shadowIntensity=ue.intensity,Y.shadowBias=ue.bias,Y.shadowNormalBias=ue.normalBias,Y.shadowRadius=ue.radius,Y.shadowMapSize=ue.mapSize,Y.shadowCameraNear=ue.camera.near,Y.shadowCameraFar=ue.camera.far,n.pointShadow[v]=Y,n.pointShadowMap[v]=re,n.pointShadowMatrix[v]=P.shadow.matrix,R++}n.point[v]=Q,v++}else if(P.isHemisphereLight){const Q=e.get(P);Q.skyColor.copy(P.color).multiplyScalar(j),Q.groundColor.copy(P.groundColor).multiplyScalar(j),n.hemi[u]=Q,u++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;const z=n.hash;(z.directionalLength!==m||z.pointLength!==v||z.spotLength!==S||z.rectAreaLength!==g||z.hemiLength!==u||z.numDirectionalShadows!==D||z.numPointShadows!==R||z.numSpotShadows!==A||z.numSpotMaps!==F||z.numLightProbes!==U)&&(n.directional.length=m,n.spot.length=S,n.rectArea.length=g,n.point.length=v,n.hemi.length=u,n.directionalShadow.length=D,n.directionalShadowMap.length=D,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=D,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=A+F-L,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=U,z.directionalLength=m,z.pointLength=v,z.spotLength=S,z.rectAreaLength=g,z.hemiLength=u,z.numDirectionalShadows=D,z.numPointShadows=R,z.numSpotShadows=A,z.numSpotMaps=F,z.numLightProbes=U,n.version=Ip++)}function c(l,h){let d=0,p=0,m=0,v=0,S=0;const g=h.matrixWorldInverse;for(let u=0,D=l.length;u<D;u++){const R=l[u];if(R.isDirectionalLight){const A=n.directional[d];A.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),d++}else if(R.isSpotLight){const A=n.spot[m];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),m++}else if(R.isRectAreaLight){const A=n.rectArea[v];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(g),a.identity(),r.copy(R.matrixWorld),r.premultiply(g),a.extractRotation(r),A.halfWidth.set(R.width*.5,0,0),A.halfHeight.set(0,R.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(R.isPointLight){const A=n.point[p];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(g),p++}else if(R.isHemisphereLight){const A=n.hemi[S];A.direction.setFromMatrixPosition(R.matrixWorld),A.direction.transformDirection(g),S++}}}return{setup:o,setupView:c,state:n}}function ko(i){const e=new Np(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Fp(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new ko(i),e.set(s,[o])):r>=a.length?(o=new ko(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Op=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bp=`uniform sampler2D shadow_pass;
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
}`;function zp(i,e,t){let n=new wa;const s=new Mt,r=new Mt,a=new At,o=new id({depthPacking:gc}),c=new sd,l={},h=t.maxTextureSize,d={[Nn]:zt,[zt]:Nn,[yn]:yn},p=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:Op,fragmentShader:Bp}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const v=new jt;v.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Yt(v,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jo;let u=this.type;this.render=function(L,U,z){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;const b=i.getRenderTarget(),E=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(In),Z.buffers.depth.getReversed()?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const j=u!==Sn&&this.type===Sn,K=u===Sn&&this.type!==Sn;for(let re=0,Q=L.length;re<Q;re++){const ue=L[re],Y=ue.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const Me=Y.getFrameExtents();if(s.multiply(Me),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Me.x),s.x=r.x*Me.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Me.y),s.y=r.y*Me.y,Y.mapSize.y=r.y)),Y.map===null||j===!0||K===!0){const Le=this.type!==Sn?{minFilter:sn,magFilter:sn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Qn(s.x,s.y,Le),Y.map.texture.name=ue.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const ye=Y.getViewportCount();for(let Le=0;Le<ye;Le++){const et=Y.getViewport(Le);a.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),Z.viewport(a),Y.updateMatrices(ue,Le),n=Y.getFrustum(),A(U,z,Y.camera,ue,this.type)}Y.isPointLightShadow!==!0&&this.type===Sn&&D(Y,z),Y.needsUpdate=!1}u=this.type,g.needsUpdate=!1,i.setRenderTarget(b,E,P)};function D(L,U){const z=e.update(S);p.defines.VSM_SAMPLES!==L.blurSamples&&(p.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Qn(s.x,s.y)),p.uniforms.shadow_pass.value=L.map.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(U,null,z,p,S,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(U,null,z,m,S,null)}function R(L,U,z,b){let E=null;const P=z.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(P!==void 0)E=P;else if(E=z.isPointLight===!0?c:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const Z=E.uuid,j=U.uuid;let K=l[Z];K===void 0&&(K={},l[Z]=K);let re=K[j];re===void 0&&(re=E.clone(),K[j]=re,U.addEventListener("dispose",F)),E=re}if(E.visible=U.visible,E.wireframe=U.wireframe,b===Sn?E.side=U.shadowSide!==null?U.shadowSide:U.side:E.side=U.shadowSide!==null?U.shadowSide:d[U.side],E.alphaMap=U.alphaMap,E.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,E.map=U.map,E.clipShadows=U.clipShadows,E.clippingPlanes=U.clippingPlanes,E.clipIntersection=U.clipIntersection,E.displacementMap=U.displacementMap,E.displacementScale=U.displacementScale,E.displacementBias=U.displacementBias,E.wireframeLinewidth=U.wireframeLinewidth,E.linewidth=U.linewidth,z.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Z=i.properties.get(E);Z.light=z}return E}function A(L,U,z,b,E){if(L.visible===!1)return;if(L.layers.test(U.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&E===Sn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,L.matrixWorld);const j=e.update(L),K=L.material;if(Array.isArray(K)){const re=j.groups;for(let Q=0,ue=re.length;Q<ue;Q++){const Y=re[Q],Me=K[Y.materialIndex];if(Me&&Me.visible){const ye=R(L,Me,b,E);L.onBeforeShadow(i,L,U,z,j,ye,Y),i.renderBufferDirect(z,null,j,ye,L,Y),L.onAfterShadow(i,L,U,z,j,ye,Y)}}}else if(K.visible){const re=R(L,K,b,E);L.onBeforeShadow(i,L,U,z,j,re,null),i.renderBufferDirect(z,null,j,re,L,null),L.onAfterShadow(i,L,U,z,j,re,null)}}const Z=L.children;for(let j=0,K=Z.length;j<K;j++)A(Z[j],U,z,b,E)}function F(L){L.target.removeEventListener("dispose",F);for(const z in l){const b=l[z],E=L.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}const kp={[Pr]:Dr,[Lr]:Nr,[Ir]:Fr,[Ti]:Ur,[Dr]:Pr,[Nr]:Lr,[Fr]:Ir,[Ur]:Ti};function Hp(i,e){function t(){let N=!1;const pe=new At;let xe=null;const Pe=new At(0,0,0,0);return{setMask:function(de){xe!==de&&!N&&(i.colorMask(de,de,de,de),xe=de)},setLocked:function(de){N=de},setClear:function(de,ie,Fe,tt,St){St===!0&&(de*=tt,ie*=tt,Fe*=tt),pe.set(de,ie,Fe,tt),Pe.equals(pe)===!1&&(i.clearColor(de,ie,Fe,tt),Pe.copy(pe))},reset:function(){N=!1,xe=null,Pe.set(-1,0,0,0)}}}function n(){let N=!1,pe=!1,xe=null,Pe=null,de=null;return{setReversed:function(ie){if(pe!==ie){const Fe=e.get("EXT_clip_control");ie?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),pe=ie;const tt=de;de=null,this.setClear(tt)}},getReversed:function(){return pe},setTest:function(ie){ie?ce(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(ie){xe!==ie&&!N&&(i.depthMask(ie),xe=ie)},setFunc:function(ie){if(pe&&(ie=kp[ie]),Pe!==ie){switch(ie){case Pr:i.depthFunc(i.NEVER);break;case Dr:i.depthFunc(i.ALWAYS);break;case Lr:i.depthFunc(i.LESS);break;case Ti:i.depthFunc(i.LEQUAL);break;case Ir:i.depthFunc(i.EQUAL);break;case Ur:i.depthFunc(i.GEQUAL);break;case Nr:i.depthFunc(i.GREATER);break;case Fr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=ie}},setLocked:function(ie){N=ie},setClear:function(ie){de!==ie&&(pe&&(ie=1-ie),i.clearDepth(ie),de=ie)},reset:function(){N=!1,xe=null,Pe=null,de=null,pe=!1}}}function s(){let N=!1,pe=null,xe=null,Pe=null,de=null,ie=null,Fe=null,tt=null,St=null;return{setTest:function(vt){N||(vt?ce(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function(vt){pe!==vt&&!N&&(i.stencilMask(vt),pe=vt)},setFunc:function(vt,Kt,Ht){(xe!==vt||Pe!==Kt||de!==Ht)&&(i.stencilFunc(vt,Kt,Ht),xe=vt,Pe=Kt,de=Ht)},setOp:function(vt,Kt,Ht){(ie!==vt||Fe!==Kt||tt!==Ht)&&(i.stencilOp(vt,Kt,Ht),ie=vt,Fe=Kt,tt=Ht)},setLocked:function(vt){N=vt},setClear:function(vt){St!==vt&&(i.clearStencil(vt),St=vt)},reset:function(){N=!1,pe=null,xe=null,Pe=null,de=null,ie=null,Fe=null,tt=null,St=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},d={},p=new WeakMap,m=[],v=null,S=!1,g=null,u=null,D=null,R=null,A=null,F=null,L=null,U=new dt(0,0,0),z=0,b=!1,E=null,P=null,Z=null,j=null,K=null;const re=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,ue=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Q=ue>=1):Y.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Q=ue>=2);let Me=null,ye={};const Le=i.getParameter(i.SCISSOR_BOX),et=i.getParameter(i.VIEWPORT),ze=new At().fromArray(Le),Re=new At().fromArray(et);function X(N,pe,xe,Pe){const de=new Uint8Array(4),ie=i.createTexture();i.bindTexture(N,ie),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<xe;Fe++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(pe+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return ie}const me={};me[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(i.DEPTH_TEST),a.setFunc(Ti),ct(!1),Be(Na),ce(i.CULL_FACE),lt(In);function ce(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Ue(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Ie(N,pe){return d[N]!==pe?(i.bindFramebuffer(N,pe),d[N]=pe,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=pe),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function We(N,pe){let xe=m,Pe=!1;if(N){xe=p.get(pe),xe===void 0&&(xe=[],p.set(pe,xe));const de=N.textures;if(xe.length!==de.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Fe=de.length;ie<Fe;ie++)xe[ie]=i.COLOR_ATTACHMENT0+ie;xe.length=de.length,Pe=!0}}else xe[0]!==i.BACK&&(xe[0]=i.BACK,Pe=!0);Pe&&i.drawBuffers(xe)}function at(N){return v!==N?(i.useProgram(N),v=N,!0):!1}const Je={[qn]:i.FUNC_ADD,[Vl]:i.FUNC_SUBTRACT,[Gl]:i.FUNC_REVERSE_SUBTRACT};Je[Wl]=i.MIN,Je[Xl]=i.MAX;const C={[$l]:i.ZERO,[ql]:i.ONE,[Yl]:i.SRC_COLOR,[Rr]:i.SRC_ALPHA,[ec]:i.SRC_ALPHA_SATURATE,[Jl]:i.DST_COLOR,[Kl]:i.DST_ALPHA,[jl]:i.ONE_MINUS_SRC_COLOR,[Cr]:i.ONE_MINUS_SRC_ALPHA,[Ql]:i.ONE_MINUS_DST_COLOR,[Zl]:i.ONE_MINUS_DST_ALPHA,[tc]:i.CONSTANT_COLOR,[nc]:i.ONE_MINUS_CONSTANT_COLOR,[ic]:i.CONSTANT_ALPHA,[sc]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(N,pe,xe,Pe,de,ie,Fe,tt,St,vt){if(N===In){S===!0&&(Ue(i.BLEND),S=!1);return}if(S===!1&&(ce(i.BLEND),S=!0),N!==Hl){if(N!==g||vt!==b){if((u!==qn||A!==qn)&&(i.blendEquation(i.FUNC_ADD),u=qn,A=qn),vt)switch(N){case Si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fa:i.blendFunc(i.ONE,i.ONE);break;case Oa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ba:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Oa:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ba:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}D=null,R=null,F=null,L=null,U.set(0,0,0),z=0,g=N,b=vt}return}de=de||pe,ie=ie||xe,Fe=Fe||Pe,(pe!==u||de!==A)&&(i.blendEquationSeparate(Je[pe],Je[de]),u=pe,A=de),(xe!==D||Pe!==R||ie!==F||Fe!==L)&&(i.blendFuncSeparate(C[xe],C[Pe],C[ie],C[Fe]),D=xe,R=Pe,F=ie,L=Fe),(tt.equals(U)===!1||St!==z)&&(i.blendColor(tt.r,tt.g,tt.b,St),U.copy(tt),z=St),g=N,b=!1}function Ne(N,pe){N.side===yn?Ue(i.CULL_FACE):ce(i.CULL_FACE);let xe=N.side===zt;pe&&(xe=!xe),ct(xe),N.blending===Si&&N.transparent===!1?lt(In):lt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const Pe=N.stencilWrite;o.setTest(Pe),Pe&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ce(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(N){E!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),E=N)}function Be(N){N!==Bl?(ce(i.CULL_FACE),N!==P&&(N===Na?i.cullFace(i.BACK):N===zl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),P=N}function Qe(N){N!==Z&&(Q&&i.lineWidth(N),Z=N)}function Ce(N,pe,xe){N?(ce(i.POLYGON_OFFSET_FILL),(j!==pe||K!==xe)&&(i.polygonOffset(pe,xe),j=pe,K=xe)):Ue(i.POLYGON_OFFSET_FILL)}function st(N){N?ce(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function wt(N){N===void 0&&(N=i.TEXTURE0+re-1),Me!==N&&(i.activeTexture(N),Me=N)}function nt(N,pe,xe){xe===void 0&&(Me===null?xe=i.TEXTURE0+re-1:xe=Me);let Pe=ye[xe];Pe===void 0&&(Pe={type:void 0,texture:void 0},ye[xe]=Pe),(Pe.type!==N||Pe.texture!==pe)&&(Me!==xe&&(i.activeTexture(xe),Me=xe),i.bindTexture(N,pe||me[N]),Pe.type=N,Pe.texture=pe)}function w(){const N=ye[Me];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xe(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ge(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(N){ze.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ze.copy(N))}function Ke(N){Re.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Re.copy(N))}function He(N,pe){let xe=l.get(pe);xe===void 0&&(xe=new WeakMap,l.set(pe,xe));let Pe=xe.get(N);Pe===void 0&&(Pe=i.getUniformBlockIndex(pe,N.name),xe.set(N,Pe))}function Ee(N,pe){const Pe=l.get(pe).get(N);c.get(pe)!==Pe&&(i.uniformBlockBinding(pe,Pe,N.__bindingPointIndex),c.set(pe,Pe))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Me=null,ye={},d={},p=new WeakMap,m=[],v=null,S=!1,g=null,u=null,D=null,R=null,A=null,F=null,L=null,U=new dt(0,0,0),z=0,b=!1,E=null,P=null,Z=null,j=null,K=null,ze.set(0,0,i.canvas.width,i.canvas.height),Re.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ce,disable:Ue,bindFramebuffer:Ie,drawBuffers:We,useProgram:at,setBlending:lt,setMaterial:Ne,setFlipSided:ct,setCullFace:Be,setLineWidth:Qe,setPolygonOffset:Ce,setScissorTest:st,activeTexture:wt,bindTexture:nt,unbindTexture:w,compressedTexImage2D:_,compressedTexImage3D:H,texImage2D:Ge,texImage3D:fe,updateUBOMapping:He,uniformBlockBinding:Ee,texStorage2D:_e,texStorage3D:ke,texSubImage2D:ne,texSubImage3D:oe,compressedTexSubImage2D:ee,compressedTexSubImage3D:Xe,scissor:Ae,viewport:Ke,reset:it}}function Vp(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Mt,h=new WeakMap;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,_){return m?new OffscreenCanvas(w,_):Bs("canvas")}function S(w,_,H){let ne=1;const oe=nt(w);if((oe.width>H||oe.height>H)&&(ne=H/Math.max(oe.width,oe.height)),ne<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ee=Math.floor(ne*oe.width),Xe=Math.floor(ne*oe.height);d===void 0&&(d=v(ee,Xe));const _e=_?v(ee,Xe):d;return _e.width=ee,_e.height=Xe,_e.getContext("2d").drawImage(w,0,0,ee,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ee+"x"+Xe+")."),_e}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),w;return w}function g(w){return w.generateMipmaps}function u(w){i.generateMipmap(w)}function D(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(w,_,H,ne,oe=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ee=_;if(_===i.RED&&(H===i.FLOAT&&(ee=i.R32F),H===i.HALF_FLOAT&&(ee=i.R16F),H===i.UNSIGNED_BYTE&&(ee=i.R8)),_===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(ee=i.R8UI),H===i.UNSIGNED_SHORT&&(ee=i.R16UI),H===i.UNSIGNED_INT&&(ee=i.R32UI),H===i.BYTE&&(ee=i.R8I),H===i.SHORT&&(ee=i.R16I),H===i.INT&&(ee=i.R32I)),_===i.RG&&(H===i.FLOAT&&(ee=i.RG32F),H===i.HALF_FLOAT&&(ee=i.RG16F),H===i.UNSIGNED_BYTE&&(ee=i.RG8)),_===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(ee=i.RG8UI),H===i.UNSIGNED_SHORT&&(ee=i.RG16UI),H===i.UNSIGNED_INT&&(ee=i.RG32UI),H===i.BYTE&&(ee=i.RG8I),H===i.SHORT&&(ee=i.RG16I),H===i.INT&&(ee=i.RG32I)),_===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),H===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),H===i.UNSIGNED_INT&&(ee=i.RGB32UI),H===i.BYTE&&(ee=i.RGB8I),H===i.SHORT&&(ee=i.RGB16I),H===i.INT&&(ee=i.RGB32I)),_===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),H===i.UNSIGNED_INT&&(ee=i.RGBA32UI),H===i.BYTE&&(ee=i.RGBA8I),H===i.SHORT&&(ee=i.RGBA16I),H===i.INT&&(ee=i.RGBA32I)),_===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),_===i.RGBA){const Xe=oe?Fs:xt.getTransfer(ne);H===i.FLOAT&&(ee=i.RGBA32F),H===i.HALF_FLOAT&&(ee=i.RGBA16F),H===i.UNSIGNED_BYTE&&(ee=Xe===Et?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function A(w,_){let H;return w?_===null||_===Jn||_===Wi?H=i.DEPTH24_STENCIL8:_===En?H=i.DEPTH32F_STENCIL8:_===Gi&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Jn||_===Wi?H=i.DEPTH_COMPONENT24:_===En?H=i.DEPTH_COMPONENT32F:_===Gi&&(H=i.DEPTH_COMPONENT16),H}function F(w,_){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==sn&&w.minFilter!==ln?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function L(w){const _=w.target;_.removeEventListener("dispose",L),z(_),_.isVideoTexture&&h.delete(_)}function U(w){const _=w.target;_.removeEventListener("dispose",U),E(_)}function z(w){const _=n.get(w);if(_.__webglInit===void 0)return;const H=w.source,ne=p.get(H);if(ne){const oe=ne[_.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&b(w),Object.keys(ne).length===0&&p.delete(H)}n.remove(w)}function b(w){const _=n.get(w);i.deleteTexture(_.__webglTexture);const H=w.source,ne=p.get(H);delete ne[_.__cacheKey],a.memory.textures--}function E(w){const _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(_.__webglFramebuffer[ne]))for(let oe=0;oe<_.__webglFramebuffer[ne].length;oe++)i.deleteFramebuffer(_.__webglFramebuffer[ne][oe]);else i.deleteFramebuffer(_.__webglFramebuffer[ne]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[ne])}else{if(Array.isArray(_.__webglFramebuffer))for(let ne=0;ne<_.__webglFramebuffer.length;ne++)i.deleteFramebuffer(_.__webglFramebuffer[ne]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let ne=0;ne<_.__webglColorRenderbuffer.length;ne++)_.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[ne]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const H=w.textures;for(let ne=0,oe=H.length;ne<oe;ne++){const ee=n.get(H[ne]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),a.memory.textures--),n.remove(H[ne])}n.remove(w)}let P=0;function Z(){P=0}function j(){const w=P;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function K(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function re(w,_){const H=n.get(w);if(w.isVideoTexture&&st(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&H.__version!==w.version){const ne=w.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(H,w,_);return}}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+_)}function Q(w,_){const H=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){me(H,w,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+_)}function ue(w,_){const H=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){me(H,w,_);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+_)}function Y(w,_){const H=n.get(w);if(w.version>0&&H.__version!==w.version){ce(H,w,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+_)}const Me={[zr]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[kr]:i.MIRRORED_REPEAT},ye={[sn]:i.NEAREST,[pc]:i.NEAREST_MIPMAP_NEAREST,[ss]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[$s]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},Le={[vc]:i.NEVER,[Tc]:i.ALWAYS,[xc]:i.LESS,[rl]:i.LEQUAL,[Mc]:i.EQUAL,[Ec]:i.GEQUAL,[Sc]:i.GREATER,[yc]:i.NOTEQUAL};function et(w,_){if(_.type===En&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===ln||_.magFilter===$s||_.magFilter===ss||_.magFilter===Kn||_.minFilter===ln||_.minFilter===$s||_.minFilter===ss||_.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Me[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Me[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Me[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ye[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ye[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Le[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===sn||_.minFilter!==ss&&_.minFilter!==Kn||_.type===En&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ze(w,_){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",L));const ne=_.source;let oe=p.get(ne);oe===void 0&&(oe={},p.set(ne,oe));const ee=K(_);if(ee!==w.__cacheKey){oe[ee]===void 0&&(oe[ee]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),oe[ee].usedTimes++;const Xe=oe[w.__cacheKey];Xe!==void 0&&(oe[w.__cacheKey].usedTimes--,Xe.usedTimes===0&&b(_)),w.__cacheKey=ee,w.__webglTexture=oe[ee].texture}return H}function Re(w,_,H){return Math.floor(Math.floor(w/H)/_)}function X(w,_,H,ne){const ee=w.updateRanges;if(ee.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,H,ne,_.data);else{ee.sort((fe,Ae)=>fe.start-Ae.start);let Xe=0;for(let fe=1;fe<ee.length;fe++){const Ae=ee[Xe],Ke=ee[fe],He=Ae.start+Ae.count,Ee=Re(Ke.start,_.width,4),it=Re(Ae.start,_.width,4);Ke.start<=He+1&&Ee===it&&Re(Ke.start+Ke.count-1,_.width,4)===Ee?Ae.count=Math.max(Ae.count,Ke.start+Ke.count-Ae.start):(++Xe,ee[Xe]=Ke)}ee.length=Xe+1;const _e=i.getParameter(i.UNPACK_ROW_LENGTH),ke=i.getParameter(i.UNPACK_SKIP_PIXELS),Ge=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let fe=0,Ae=ee.length;fe<Ae;fe++){const Ke=ee[fe],He=Math.floor(Ke.start/4),Ee=Math.ceil(Ke.count/4),it=He%_.width,N=Math.floor(He/_.width),pe=Ee,xe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,it),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,it,N,pe,xe,H,ne,_.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_e),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ke),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ge)}}function me(w,_,H){let ne=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ne=i.TEXTURE_3D);const oe=ze(w,_),ee=_.source;t.bindTexture(ne,w.__webglTexture,i.TEXTURE0+H);const Xe=n.get(ee);if(ee.version!==Xe.__version||oe===!0){t.activeTexture(i.TEXTURE0+H);const _e=xt.getPrimaries(xt.workingColorSpace),ke=_.colorSpace===Ln?null:xt.getPrimaries(_.colorSpace),Ge=_.colorSpace===Ln||_e===ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let fe=S(_.image,!1,s.maxTextureSize);fe=wt(_,fe);const Ae=r.convert(_.format,_.colorSpace),Ke=r.convert(_.type);let He=R(_.internalFormat,Ae,Ke,_.colorSpace,_.isVideoTexture);et(ne,_);let Ee;const it=_.mipmaps,N=_.isVideoTexture!==!0,pe=Xe.__version===void 0||oe===!0,xe=ee.dataReady,Pe=F(_,fe);if(_.isDepthTexture)He=A(_.format===$i,_.type),pe&&(N?t.texStorage2D(i.TEXTURE_2D,1,He,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,He,fe.width,fe.height,0,Ae,Ke,null));else if(_.isDataTexture)if(it.length>0){N&&pe&&t.texStorage2D(i.TEXTURE_2D,Pe,He,it[0].width,it[0].height);for(let de=0,ie=it.length;de<ie;de++)Ee=it[de],N?xe&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Ee.width,Ee.height,Ae,Ke,Ee.data):t.texImage2D(i.TEXTURE_2D,de,He,Ee.width,Ee.height,0,Ae,Ke,Ee.data);_.generateMipmaps=!1}else N?(pe&&t.texStorage2D(i.TEXTURE_2D,Pe,He,fe.width,fe.height),xe&&X(_,fe,Ae,Ke)):t.texImage2D(i.TEXTURE_2D,0,He,fe.width,fe.height,0,Ae,Ke,fe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){N&&pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,He,it[0].width,it[0].height,fe.depth);for(let de=0,ie=it.length;de<ie;de++)if(Ee=it[de],_.format!==nn)if(Ae!==null)if(N){if(xe)if(_.layerUpdates.size>0){const Fe=go(Ee.width,Ee.height,_.format,_.type);for(const tt of _.layerUpdates){const St=Ee.data.subarray(tt*Fe/Ee.data.BYTES_PER_ELEMENT,(tt+1)*Fe/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,tt,Ee.width,Ee.height,1,Ae,St)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,Ee.width,Ee.height,fe.depth,Ae,Ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,He,Ee.width,Ee.height,fe.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?xe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,Ee.width,Ee.height,fe.depth,Ae,Ke,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,He,Ee.width,Ee.height,fe.depth,0,Ae,Ke,Ee.data)}else{N&&pe&&t.texStorage2D(i.TEXTURE_2D,Pe,He,it[0].width,it[0].height);for(let de=0,ie=it.length;de<ie;de++)Ee=it[de],_.format!==nn?Ae!==null?N?xe&&t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,Ee.width,Ee.height,Ae,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,de,He,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?xe&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Ee.width,Ee.height,Ae,Ke,Ee.data):t.texImage2D(i.TEXTURE_2D,de,He,Ee.width,Ee.height,0,Ae,Ke,Ee.data)}else if(_.isDataArrayTexture)if(N){if(pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,He,fe.width,fe.height,fe.depth),xe)if(_.layerUpdates.size>0){const de=go(fe.width,fe.height,_.format,_.type);for(const ie of _.layerUpdates){const Fe=fe.data.subarray(ie*de/fe.data.BYTES_PER_ELEMENT,(ie+1)*de/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,fe.width,fe.height,1,Ae,Ke,Fe)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ae,Ke,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,He,fe.width,fe.height,fe.depth,0,Ae,Ke,fe.data);else if(_.isData3DTexture)N?(pe&&t.texStorage3D(i.TEXTURE_3D,Pe,He,fe.width,fe.height,fe.depth),xe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ae,Ke,fe.data)):t.texImage3D(i.TEXTURE_3D,0,He,fe.width,fe.height,fe.depth,0,Ae,Ke,fe.data);else if(_.isFramebufferTexture){if(pe)if(N)t.texStorage2D(i.TEXTURE_2D,Pe,He,fe.width,fe.height);else{let de=fe.width,ie=fe.height;for(let Fe=0;Fe<Pe;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,He,de,ie,0,Ae,Ke,null),de>>=1,ie>>=1}}else if(it.length>0){if(N&&pe){const de=nt(it[0]);t.texStorage2D(i.TEXTURE_2D,Pe,He,de.width,de.height)}for(let de=0,ie=it.length;de<ie;de++)Ee=it[de],N?xe&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Ae,Ke,Ee):t.texImage2D(i.TEXTURE_2D,de,He,Ae,Ke,Ee);_.generateMipmaps=!1}else if(N){if(pe){const de=nt(fe);t.texStorage2D(i.TEXTURE_2D,Pe,He,de.width,de.height)}xe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,Ke,fe)}else t.texImage2D(i.TEXTURE_2D,0,He,Ae,Ke,fe);g(_)&&u(ne),Xe.__version=ee.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function ce(w,_,H){if(_.image.length!==6)return;const ne=ze(w,_),oe=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+H);const ee=n.get(oe);if(oe.version!==ee.__version||ne===!0){t.activeTexture(i.TEXTURE0+H);const Xe=xt.getPrimaries(xt.workingColorSpace),_e=_.colorSpace===Ln?null:xt.getPrimaries(_.colorSpace),ke=_.colorSpace===Ln||Xe===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const Ge=_.isCompressedTexture||_.image[0].isCompressedTexture,fe=_.image[0]&&_.image[0].isDataTexture,Ae=[];for(let ie=0;ie<6;ie++)!Ge&&!fe?Ae[ie]=S(_.image[ie],!0,s.maxCubemapSize):Ae[ie]=fe?_.image[ie].image:_.image[ie],Ae[ie]=wt(_,Ae[ie]);const Ke=Ae[0],He=r.convert(_.format,_.colorSpace),Ee=r.convert(_.type),it=R(_.internalFormat,He,Ee,_.colorSpace),N=_.isVideoTexture!==!0,pe=ee.__version===void 0||ne===!0,xe=oe.dataReady;let Pe=F(_,Ke);et(i.TEXTURE_CUBE_MAP,_);let de;if(Ge){N&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,it,Ke.width,Ke.height);for(let ie=0;ie<6;ie++){de=Ae[ie].mipmaps;for(let Fe=0;Fe<de.length;Fe++){const tt=de[Fe];_.format!==nn?He!==null?N?xe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,0,0,tt.width,tt.height,He,tt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,it,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,0,0,tt.width,tt.height,He,Ee,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe,it,tt.width,tt.height,0,He,Ee,tt.data)}}}else{if(de=_.mipmaps,N&&pe){de.length>0&&Pe++;const ie=nt(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,it,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(fe){N?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ae[ie].width,Ae[ie].height,He,Ee,Ae[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,it,Ae[ie].width,Ae[ie].height,0,He,Ee,Ae[ie].data);for(let Fe=0;Fe<de.length;Fe++){const St=de[Fe].image[ie].image;N?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,0,0,St.width,St.height,He,Ee,St.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,it,St.width,St.height,0,He,Ee,St.data)}}else{N?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,He,Ee,Ae[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,it,He,Ee,Ae[ie]);for(let Fe=0;Fe<de.length;Fe++){const tt=de[Fe];N?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,0,0,He,Ee,tt.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Fe+1,it,He,Ee,tt.image[ie])}}}g(_)&&u(i.TEXTURE_CUBE_MAP),ee.__version=oe.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Ue(w,_,H,ne,oe,ee){const Xe=r.convert(H.format,H.colorSpace),_e=r.convert(H.type),ke=R(H.internalFormat,Xe,_e,H.colorSpace),Ge=n.get(_),fe=n.get(H);if(fe.__renderTarget=_,!Ge.__hasExternalTextures){const Ae=Math.max(1,_.width>>ee),Ke=Math.max(1,_.height>>ee);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,ee,ke,Ae,Ke,_.depth,0,Xe,_e,null):t.texImage2D(oe,ee,ke,Ae,Ke,0,Xe,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Ce(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,oe,fe.__webglTexture,0,Qe(_)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,oe,fe.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(w,_,H){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){const ne=_.depthTexture,oe=ne&&ne.isDepthTexture?ne.type:null,ee=A(_.stencilBuffer,oe),Xe=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=Qe(_);Ce(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,ee,_.width,_.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ee,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ee,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Xe,i.RENDERBUFFER,w)}else{const ne=_.textures;for(let oe=0;oe<ne.length;oe++){const ee=ne[oe],Xe=r.convert(ee.format,ee.colorSpace),_e=r.convert(ee.type),ke=R(ee.internalFormat,Xe,_e,ee.colorSpace),Ge=Qe(_);H&&Ce(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,ke,_.width,_.height):Ce(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ge,ke,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ke,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function We(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(_.depthTexture);ne.__renderTarget=_,(!ne.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),re(_.depthTexture,0);const oe=ne.__webglTexture,ee=Qe(_);if(_.depthTexture.format===Xi)Ce(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(_.depthTexture.format===$i)Ce(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function at(w){const _=n.get(w),H=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){const ne=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ne){const oe=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ne.removeEventListener("dispose",oe)};ne.addEventListener("dispose",oe),_.__depthDisposeCallback=oe}_.__boundDepthTexture=ne}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const ne=w.texture.mipmaps;ne&&ne.length>0?We(_.__webglFramebuffer[0],w):We(_.__webglFramebuffer,w)}else if(H){_.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[ne]),_.__webglDepthbuffer[ne]===void 0)_.__webglDepthbuffer[ne]=i.createRenderbuffer(),Ie(_.__webglDepthbuffer[ne],w,!1);else{const oe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=_.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,ee)}}else{const ne=w.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ie(_.__webglDepthbuffer,w,!1);else{const oe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,ee)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(w,_,H){const ne=n.get(w);_!==void 0&&Ue(ne.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&at(w)}function C(w){const _=w.texture,H=n.get(w),ne=n.get(_);w.addEventListener("dispose",U);const oe=w.textures,ee=w.isWebGLCubeRenderTarget===!0,Xe=oe.length>1;if(Xe||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=_.version,a.memory.textures++),ee){H.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer[_e]=[];for(let ke=0;ke<_.mipmaps.length;ke++)H.__webglFramebuffer[_e][ke]=i.createFramebuffer()}else H.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer=[];for(let _e=0;_e<_.mipmaps.length;_e++)H.__webglFramebuffer[_e]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Xe)for(let _e=0,ke=oe.length;_e<ke;_e++){const Ge=n.get(oe[_e]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&Ce(w)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let _e=0;_e<oe.length;_e++){const ke=oe[_e];H.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[_e]);const Ge=r.convert(ke.format,ke.colorSpace),fe=r.convert(ke.type),Ae=R(ke.internalFormat,Ge,fe,ke.colorSpace,w.isXRRenderTarget===!0),Ke=Qe(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,Ae,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,H.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(H.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),et(i.TEXTURE_CUBE_MAP,_);for(let _e=0;_e<6;_e++)if(_.mipmaps&&_.mipmaps.length>0)for(let ke=0;ke<_.mipmaps.length;ke++)Ue(H.__webglFramebuffer[_e][ke],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ke);else Ue(H.__webglFramebuffer[_e],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);g(_)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let _e=0,ke=oe.length;_e<ke;_e++){const Ge=oe[_e],fe=n.get(Ge);let Ae=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Ae=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ae,fe.__webglTexture),et(Ae,Ge),Ue(H.__webglFramebuffer,w,Ge,i.COLOR_ATTACHMENT0+_e,Ae,0),g(Ge)&&u(Ae)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(_e=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,ne.__webglTexture),et(_e,_),_.mipmaps&&_.mipmaps.length>0)for(let ke=0;ke<_.mipmaps.length;ke++)Ue(H.__webglFramebuffer[ke],w,_,i.COLOR_ATTACHMENT0,_e,ke);else Ue(H.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,_e,0);g(_)&&u(_e),t.unbindTexture()}w.depthBuffer&&at(w)}function lt(w){const _=w.textures;for(let H=0,ne=_.length;H<ne;H++){const oe=_[H];if(g(oe)){const ee=D(w),Xe=n.get(oe).__webglTexture;t.bindTexture(ee,Xe),u(ee),t.unbindTexture()}}}const Ne=[],ct=[];function Be(w){if(w.samples>0){if(Ce(w)===!1){const _=w.textures,H=w.width,ne=w.height;let oe=i.COLOR_BUFFER_BIT;const ee=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Xe=n.get(w),_e=_.length>1;if(_e)for(let Ge=0;Ge<_.length;Ge++)t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer);const ke=w.texture.mipmaps;ke&&ke.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Ge=0;Ge<_.length;Ge++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),_e){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ge]);const fe=n.get(_[Ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,H,ne,0,0,H,ne,oe,i.NEAREST),c===!0&&(Ne.length=0,ct.length=0,Ne.push(i.COLOR_ATTACHMENT0+Ge),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ne.push(ee),ct.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ct)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let Ge=0;Ge<_.length;Ge++){t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ge,i.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ge]);const fe=n.get(_[Ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ge,i.TEXTURE_2D,fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Qe(w){return Math.min(s.maxSamples,w.samples)}function Ce(w){const _=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function st(w){const _=a.render.frame;h.get(w)!==_&&(h.set(w,_),w.update())}function wt(w,_){const H=w.colorSpace,ne=w.format,oe=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==wi&&H!==Ln&&(xt.getTransfer(H)===Et?(ne!==nn||oe!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),_}function nt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=j,this.resetTextureUnits=Z,this.setTexture2D=re,this.setTexture2DArray=Q,this.setTexture3D=ue,this.setTextureCube=Y,this.rebindTextures=Je,this.setupRenderTarget=C,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Ce}function Gp(i,e){function t(n,s=Ln){let r;const a=xt.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===xa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ma)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zo)return i.BYTE;if(n===Jo)return i.SHORT;if(n===Gi)return i.UNSIGNED_SHORT;if(n===va)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===qi)return i.HALF_FLOAT;if(n===el)return i.ALPHA;if(n===tl)return i.RGB;if(n===nn)return i.RGBA;if(n===Xi)return i.DEPTH_COMPONENT;if(n===$i)return i.DEPTH_STENCIL;if(n===nl)return i.RED;if(n===Sa)return i.RED_INTEGER;if(n===il)return i.RG;if(n===ya)return i.RG_INTEGER;if(n===Ea)return i.RGBA_INTEGER;if(n===Ps||n===Ds||n===Ls||n===Is)if(a===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ps)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ps)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Is)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hr||n===Vr||n===Gr||n===Wr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Hr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xr||n===$r||n===qr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xr||n===$r)return a===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qr)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Yr||n===jr||n===Kr||n===Zr||n===Jr||n===Qr||n===ea||n===ta||n===na||n===ia||n===sa||n===ra||n===aa||n===oa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yr)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jr)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kr)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zr)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jr)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qr)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ea)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ta)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===na)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ia)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sa)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ra)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===aa)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oa)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Us||n===la||n===ca)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Us)return a===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===la)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ca)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sl||n===da||n===ua||n===ha)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Us)return r.COMPRESSED_RED_RGTC1_EXT;if(n===da)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ha)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class bl extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const Wp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xp=`
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

}`;class $p{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new bl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Fn({vertexShader:Wp,fragmentShader:Xp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yt(new Qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qp extends Ci{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,p=null,m=null,v=null;const S=new $p,g={},u=t.getContextAttributes();let D=null,R=null;const A=[],F=[],L=new Mt;let U=null;const z=new qt;z.viewport=new At;const b=new qt;b.viewport=new At;const E=[z,b],P=new fd;let Z=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let me=A[X];return me===void 0&&(me=new mr,A[X]=me),me.getTargetRaySpace()},this.getControllerGrip=function(X){let me=A[X];return me===void 0&&(me=new mr,A[X]=me),me.getGripSpace()},this.getHand=function(X){let me=A[X];return me===void 0&&(me=new mr,A[X]=me),me.getHandSpace()};function K(X){const me=F.indexOf(X.inputSource);if(me===-1)return;const ce=A[me];ce!==void 0&&(ce.update(X.inputSource,X.frame,l||a),ce.dispatchEvent({type:X.type,data:X.inputSource}))}function re(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",re),s.removeEventListener("inputsourceschange",Q);for(let X=0;X<A.length;X++){const me=F[X];me!==null&&(F[X]=null,A[X].disconnect(me))}Z=null,j=null,S.reset();for(const X in g)delete g[X];e.setRenderTarget(D),m=null,p=null,d=null,s=null,R=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(D=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",re),s.addEventListener("inputsourceschange",Q),u.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(s,t)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Ue=null,Ie=null;u.depth&&(Ie=u.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=u.stencil?$i:Xi,Ue=u.stencil?Wi:Jn);const We={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};p=d.createProjectionLayer(We),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),R=new Qn(p.textureWidth,p.textureHeight,{format:nn,type:un,depthTexture:new _l(p.textureWidth,p.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ce={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),R=new Qn(m.framebufferWidth,m.framebufferHeight,{format:nn,type:un,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Re.setContext(s),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Q(X){for(let me=0;me<X.removed.length;me++){const ce=X.removed[me],Ue=F.indexOf(ce);Ue>=0&&(F[Ue]=null,A[Ue].disconnect(ce))}for(let me=0;me<X.added.length;me++){const ce=X.added[me];let Ue=F.indexOf(ce);if(Ue===-1){for(let We=0;We<A.length;We++)if(We>=F.length){F.push(ce),Ue=We;break}else if(F[We]===null){F[We]=ce,Ue=We;break}if(Ue===-1)break}const Ie=A[Ue];Ie&&Ie.connect(ce)}}const ue=new G,Y=new G;function Me(X,me,ce){ue.setFromMatrixPosition(me.matrixWorld),Y.setFromMatrixPosition(ce.matrixWorld);const Ue=ue.distanceTo(Y),Ie=me.projectionMatrix.elements,We=ce.projectionMatrix.elements,at=Ie[14]/(Ie[10]-1),Je=Ie[14]/(Ie[10]+1),C=(Ie[9]+1)/Ie[5],lt=(Ie[9]-1)/Ie[5],Ne=(Ie[8]-1)/Ie[0],ct=(We[8]+1)/We[0],Be=at*Ne,Qe=at*ct,Ce=Ue/(-Ne+ct),st=Ce*-Ne;if(me.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(st),X.translateZ(Ce),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ie[10]===-1)X.projectionMatrix.copy(me.projectionMatrix),X.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const wt=at+Ce,nt=Je+Ce,w=Be-st,_=Qe+(Ue-st),H=C*Je/nt*wt,ne=lt*Je/nt*wt;X.projectionMatrix.makePerspective(w,_,H,ne,wt,nt),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ye(X,me){me===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(me.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let me=X.near,ce=X.far;S.texture!==null&&(S.depthNear>0&&(me=S.depthNear),S.depthFar>0&&(ce=S.depthFar)),P.near=b.near=z.near=me,P.far=b.far=z.far=ce,(Z!==P.near||j!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),Z=P.near,j=P.far),P.layers.mask=X.layers.mask|6,z.layers.mask=P.layers.mask&3,b.layers.mask=P.layers.mask&5;const Ue=X.parent,Ie=P.cameras;ye(P,Ue);for(let We=0;We<Ie.length;We++)ye(Ie[We],Ue);Ie.length===2?Me(P,z,b):P.projectionMatrix.copy(z.projectionMatrix),Le(X,P,Ue)};function Le(X,me,ce){ce===null?X.matrix.copy(me.matrixWorld):(X.matrix.copy(ce.matrixWorld),X.matrix.invert(),X.matrix.multiply(me.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(me.projectionMatrix),X.projectionMatrixInverse.copy(me.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=fa*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(X){c=X,p!==null&&(p.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(P)},this.getCameraTexture=function(X){return g[X]};let et=null;function ze(X,me){if(h=me.getViewerPose(l||a),v=me,h!==null){const ce=h.views;m!==null&&(e.setRenderTargetFramebuffer(R,m.framebuffer),e.setRenderTarget(R));let Ue=!1;ce.length!==P.cameras.length&&(P.cameras.length=0,Ue=!0);for(let Je=0;Je<ce.length;Je++){const C=ce[Je];let lt=null;if(m!==null)lt=m.getViewport(C);else{const ct=d.getViewSubImage(p,C);lt=ct.viewport,Je===0&&(e.setRenderTargetTextures(R,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(R))}let Ne=E[Je];Ne===void 0&&(Ne=new qt,Ne.layers.enable(Je),Ne.viewport=new At,E[Je]=Ne),Ne.matrix.fromArray(C.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(C.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(lt.x,lt.y,lt.width,lt.height),Je===0&&(P.matrix.copy(Ne.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ue===!0&&P.cameras.push(Ne)}const Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const Je=d.getDepthInformation(ce[0]);Je&&Je.isValid&&Je.texture&&S.init(Je,s.renderState)}if(Ie&&Ie.includes("camera-access")&&(e.state.unbindTexture(),d))for(let Je=0;Je<ce.length;Je++){const C=ce[Je].camera;if(C){let lt=g[C];lt||(lt=new bl,g[C]=lt);const Ne=d.getCameraImage(C);lt.sourceTexture=Ne}}}for(let ce=0;ce<A.length;ce++){const Ue=F[ce],Ie=A[ce];Ue!==null&&Ie!==void 0&&Ie.update(Ue,me,l||a)}et&&et(X,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),v=null}const Re=new Ml;Re.setAnimationLoop(ze),this.setAnimationLoop=function(X){et=X},this.dispose=function(){}}}const Gn=new rn,Yp=new bt;function jp(i,e){function t(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function n(g,u){u.color.getRGB(g.fogColor.value,fl(i)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function s(g,u,D,R,A){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(g,u):u.isMeshToonMaterial?(r(g,u),d(g,u)):u.isMeshPhongMaterial?(r(g,u),h(g,u)):u.isMeshStandardMaterial?(r(g,u),p(g,u),u.isMeshPhysicalMaterial&&m(g,u,A)):u.isMeshMatcapMaterial?(r(g,u),v(g,u)):u.isMeshDepthMaterial?r(g,u):u.isMeshDistanceMaterial?(r(g,u),S(g,u)):u.isMeshNormalMaterial?r(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?c(g,u,D,R):u.isSpriteMaterial?l(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,t(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===zt&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,t(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===zt&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,t(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,t(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const D=e.get(u),R=D.envMap,A=D.envMapRotation;R&&(g.envMap.value=R,Gn.copy(A),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),g.envMapRotation.value.setFromMatrix4(Yp.makeRotationFromEuler(Gn)),g.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function c(g,u,D,R){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*D,g.scale.value=R*.5,u.map&&(g.map.value=u.map,t(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function l(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function h(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function d(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function p(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function m(g,u,D){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===zt&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=D.texture,g.transmissionSamplerSize.value.set(D.width,D.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,u){u.matcap&&(g.matcap.value=u.matcap)}function S(g,u){const D=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(D.matrixWorld),g.nearDistance.value=D.shadow.camera.near,g.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Kp(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(D,R){const A=R.program;n.uniformBlockBinding(D,A)}function l(D,R){let A=s[D.id];A===void 0&&(v(D),A=h(D),s[D.id]=A,D.addEventListener("dispose",g));const F=R.program;n.updateUBOMapping(D,F);const L=e.render.frame;r[D.id]!==L&&(p(D),r[D.id]=L)}function h(D){const R=d();D.__bindingPointIndex=R;const A=i.createBuffer(),F=D.__size,L=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,F,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,A),A}function d(){for(let D=0;D<o;D++)if(a.indexOf(D)===-1)return a.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(D){const R=s[D.id],A=D.uniforms,F=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let L=0,U=A.length;L<U;L++){const z=Array.isArray(A[L])?A[L]:[A[L]];for(let b=0,E=z.length;b<E;b++){const P=z[b];if(m(P,L,b,F)===!0){const Z=P.__offset,j=Array.isArray(P.value)?P.value:[P.value];let K=0;for(let re=0;re<j.length;re++){const Q=j[re],ue=S(Q);typeof Q=="number"||typeof Q=="boolean"?(P.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,Z+K,P.__data)):Q.isMatrix3?(P.__data[0]=Q.elements[0],P.__data[1]=Q.elements[1],P.__data[2]=Q.elements[2],P.__data[3]=0,P.__data[4]=Q.elements[3],P.__data[5]=Q.elements[4],P.__data[6]=Q.elements[5],P.__data[7]=0,P.__data[8]=Q.elements[6],P.__data[9]=Q.elements[7],P.__data[10]=Q.elements[8],P.__data[11]=0):(Q.toArray(P.__data,K),K+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(D,R,A,F){const L=D.value,U=R+"_"+A;if(F[U]===void 0)return typeof L=="number"||typeof L=="boolean"?F[U]=L:F[U]=L.clone(),!0;{const z=F[U];if(typeof L=="number"||typeof L=="boolean"){if(z!==L)return F[U]=L,!0}else if(z.equals(L)===!1)return z.copy(L),!0}return!1}function v(D){const R=D.uniforms;let A=0;const F=16;for(let U=0,z=R.length;U<z;U++){const b=Array.isArray(R[U])?R[U]:[R[U]];for(let E=0,P=b.length;E<P;E++){const Z=b[E],j=Array.isArray(Z.value)?Z.value:[Z.value];for(let K=0,re=j.length;K<re;K++){const Q=j[K],ue=S(Q),Y=A%F,Me=Y%ue.boundary,ye=Y+Me;A+=Me,ye!==0&&F-ye<ue.storage&&(A+=F-ye),Z.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=A,A+=ue.storage}}}const L=A%F;return L>0&&(A+=F-L),D.__size=A,D.__cache={},this}function S(D){const R={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(R.boundary=4,R.storage=4):D.isVector2?(R.boundary=8,R.storage=8):D.isVector3||D.isColor?(R.boundary=16,R.storage=12):D.isVector4?(R.boundary=16,R.storage=16):D.isMatrix3?(R.boundary=48,R.storage=48):D.isMatrix4?(R.boundary=64,R.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),R}function g(D){const R=D.target;R.removeEventListener("dispose",g);const A=a.indexOf(R.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function u(){for(const D in s)i.deleteBuffer(s[D]);a=[],s={},r={}}return{bind:c,update:l,dispose:u}}class Zp{constructor(e={}){const{canvas:t=Ac(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const v=new Uint32Array(4),S=new Int32Array(4);let g=null,u=null;const D=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let F=!1;this._outputColorSpace=Wt;let L=0,U=0,z=null,b=-1,E=null;const P=new At,Z=new At;let j=null;const K=new dt(0);let re=0,Q=t.width,ue=t.height,Y=1,Me=null,ye=null;const Le=new At(0,0,Q,ue),et=new At(0,0,Q,ue);let ze=!1;const Re=new wa;let X=!1,me=!1;const ce=new bt,Ue=new G,Ie=new At,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function Je(){return z===null?Y:1}let C=n;function lt(y,O){return t.getContext(y,O)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ga}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",de,!1),C===null){const O="webgl2";if(C=lt(O,y),C===null)throw lt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ne,ct,Be,Qe,Ce,st,wt,nt,w,_,H,ne,oe,ee,Xe,_e,ke,Ge,fe,Ae,Ke,He,Ee,it;function N(){Ne=new of(C),Ne.init(),He=new Gp(C,Ne),ct=new Qh(C,Ne,e,He),Be=new Hp(C,Ne),ct.reversedDepthBuffer&&p&&Be.buffers.depth.setReversed(!0),Qe=new df(C),Ce=new Rp,st=new Vp(C,Ne,Be,Ce,ct,He,Qe),wt=new tf(A),nt=new af(A),w=new md(C),Ee=new Zh(C,w),_=new lf(C,w,Qe,Ee),H=new hf(C,_,w,Qe),fe=new uf(C,ct,st),_e=new ef(Ce),ne=new wp(A,wt,nt,Ne,ct,Ee,_e),oe=new jp(A,Ce),ee=new Pp,Xe=new Fp(Ne),Ge=new Kh(A,wt,nt,Be,H,m,c),ke=new zp(A,H,ct),it=new Kp(C,Qe,ct,Be),Ae=new Jh(C,Ne,Qe),Ke=new cf(C,Ne,Qe),Qe.programs=ne.programs,A.capabilities=ct,A.extensions=Ne,A.properties=Ce,A.renderLists=ee,A.shadowMap=ke,A.state=Be,A.info=Qe}N();const pe=new qp(A,C);this.xr=pe,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const y=Ne.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ne.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(y){y!==void 0&&(Y=y,this.setSize(Q,ue,!1))},this.getSize=function(y){return y.set(Q,ue)},this.setSize=function(y,O,$=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=y,ue=O,t.width=Math.floor(y*Y),t.height=Math.floor(O*Y),$===!0&&(t.style.width=y+"px",t.style.height=O+"px"),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(Q*Y,ue*Y).floor()},this.setDrawingBufferSize=function(y,O,$){Q=y,ue=O,Y=$,t.width=Math.floor(y*$),t.height=Math.floor(O*$),this.setViewport(0,0,y,O)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(Le)},this.setViewport=function(y,O,$,W){y.isVector4?Le.set(y.x,y.y,y.z,y.w):Le.set(y,O,$,W),Be.viewport(P.copy(Le).multiplyScalar(Y).round())},this.getScissor=function(y){return y.copy(et)},this.setScissor=function(y,O,$,W){y.isVector4?et.set(y.x,y.y,y.z,y.w):et.set(y,O,$,W),Be.scissor(Z.copy(et).multiplyScalar(Y).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(y){Be.setScissorTest(ze=y)},this.setOpaqueSort=function(y){Me=y},this.setTransparentSort=function(y){ye=y},this.getClearColor=function(y){return y.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(y=!0,O=!0,$=!0){let W=0;if(y){let B=!1;if(z!==null){const he=z.texture.format;B=he===Ea||he===ya||he===Sa}if(B){const he=z.texture.type,Se=he===un||he===Jn||he===Gi||he===Wi||he===xa||he===Ma,De=Ge.getClearColor(),we=Ge.getClearAlpha(),Ye=De.r,Ze=De.g,qe=De.b;Se?(v[0]=Ye,v[1]=Ze,v[2]=qe,v[3]=we,C.clearBufferuiv(C.COLOR,0,v)):(S[0]=Ye,S[1]=Ze,S[2]=qe,S[3]=we,C.clearBufferiv(C.COLOR,0,S))}else W|=C.COLOR_BUFFER_BIT}O&&(W|=C.DEPTH_BUFFER_BIT),$&&(W|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Ge.dispose(),ee.dispose(),Xe.dispose(),Ce.dispose(),wt.dispose(),nt.dispose(),H.dispose(),Ee.dispose(),it.dispose(),ne.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Ht),pe.removeEventListener("sessionend",ei),an.stop()};function xe(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const y=Qe.autoReset,O=ke.enabled,$=ke.autoUpdate,W=ke.needsUpdate,B=ke.type;N(),Qe.autoReset=y,ke.enabled=O,ke.autoUpdate=$,ke.needsUpdate=W,ke.type=B}function de(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ie(y){const O=y.target;O.removeEventListener("dispose",ie),Fe(O)}function Fe(y){tt(y),Ce.remove(y)}function tt(y){const O=Ce.get(y).programs;O!==void 0&&(O.forEach(function($){ne.releaseProgram($)}),y.isShaderMaterial&&ne.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,$,W,B,he){O===null&&(O=We);const Se=B.isMesh&&B.matrixWorld.determinant()<0,De=ns(y,O,$,W,B);Be.setMaterial(W,Se);let we=$.index,Ye=1;if(W.wireframe===!0){if(we=_.getWireframeAttribute($),we===void 0)return;Ye=2}const Ze=$.drawRange,qe=$.attributes.position;let x=Ze.start*Ye,f=(Ze.start+Ze.count)*Ye;he!==null&&(x=Math.max(x,he.start*Ye),f=Math.min(f,(he.start+he.count)*Ye)),we!==null?(x=Math.max(x,0),f=Math.min(f,we.count)):qe!=null&&(x=Math.max(x,0),f=Math.min(f,qe.count));const T=f-x;if(T<0||T===1/0)return;Ee.setup(B,W,De,$,we);let V,q=Ae;if(we!==null&&(V=w.get(we),q=Ke,q.setIndex(V)),B.isMesh)W.wireframe===!0?(Be.setLineWidth(W.wireframeLinewidth*Je()),q.setMode(C.LINES)):q.setMode(C.TRIANGLES);else if(B.isLine){let k=W.linewidth;k===void 0&&(k=1),Be.setLineWidth(k*Je()),B.isLineSegments?q.setMode(C.LINES):B.isLineLoop?q.setMode(C.LINE_LOOP):q.setMode(C.LINE_STRIP)}else B.isPoints?q.setMode(C.POINTS):B.isSprite&&q.setMode(C.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)yi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),q.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))q.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const k=B._multiDrawStarts,ge=B._multiDrawCounts,J=B._multiDrawCount,I=we?w.get(we).bytesPerElement:1,ae=Ce.get(W).currentProgram.getUniforms();for(let ve=0;ve<J;ve++)ae.setValue(C,"_gl_DrawID",ve),q.render(k[ve]/I,ge[ve])}else if(B.isInstancedMesh)q.renderInstances(x,T,B.count);else if($.isInstancedBufferGeometry){const k=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ge=Math.min($.instanceCount,k);q.renderInstances(x,T,ge)}else q.render(x,T)};function St(y,O,$){y.transparent===!0&&y.side===yn&&y.forceSinglePass===!1?(y.side=zt,y.needsUpdate=!0,ni(y,O,$),y.side=Nn,y.needsUpdate=!0,ni(y,O,$),y.side=yn):ni(y,O,$)}this.compile=function(y,O,$=null){$===null&&($=y),u=Xe.get($),u.init(O),R.push(u),$.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),y!==$&&y.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),u.setupLights();const W=new Set;return y.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const he=B.material;if(he)if(Array.isArray(he))for(let Se=0;Se<he.length;Se++){const De=he[Se];St(De,$,B),W.add(De)}else St(he,$,B),W.add(he)}),u=R.pop(),W},this.compileAsync=function(y,O,$=null){const W=this.compile(y,O,$);return new Promise(B=>{function he(){if(W.forEach(function(Se){Ce.get(Se).currentProgram.isReady()&&W.delete(Se)}),W.size===0){B(y);return}setTimeout(he,10)}Ne.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let vt=null;function Kt(y){vt&&vt(y)}function Ht(){an.stop()}function ei(){an.start()}const an=new Ml;an.setAnimationLoop(Kt),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(y){vt=y,pe.setAnimationLoop(y),y===null?an.stop():an.start()},pe.addEventListener("sessionstart",Ht),pe.addEventListener("sessionend",ei),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(O),O=pe.getCamera()),y.isScene===!0&&y.onBeforeRender(A,y,O,z),u=Xe.get(y,R.length),u.init(O),R.push(u),ce.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Re.setFromProjectionMatrix(ce,cn,O.reversedDepth),me=this.localClippingEnabled,X=_e.init(this.clippingPlanes,me),g=ee.get(y,D.length),g.init(),D.push(g),pe.enabled===!0&&pe.isPresenting===!0){const he=A.xr.getDepthSensingMesh();he!==null&&Di(he,O,-1/0,A.sortObjects)}Di(y,O,0,A.sortObjects),g.finish(),A.sortObjects===!0&&g.sort(Me,ye),at=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,at&&Ge.addToRenderList(g,y),this.info.render.frame++,X===!0&&_e.beginShadows();const $=u.state.shadowsArray;ke.render($,y,O),X===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=g.opaque,B=g.transmissive;if(u.setupLights(),O.isArrayCamera){const he=O.cameras;if(B.length>0)for(let Se=0,De=he.length;Se<De;Se++){const we=he[Se];fn(W,B,y,we)}at&&Ge.render(y);for(let Se=0,De=he.length;Se<De;Se++){const we=he[Se];es(g,y,we,we.viewport)}}else B.length>0&&fn(W,B,y,O),at&&Ge.render(y),es(g,y,O);z!==null&&U===0&&(st.updateMultisampleRenderTarget(z),st.updateRenderTargetMipmap(z)),y.isScene===!0&&y.onAfterRender(A,y,O),Ee.resetDefaultState(),b=-1,E=null,R.pop(),R.length>0?(u=R[R.length-1],X===!0&&_e.setGlobalState(A.clippingPlanes,u.state.camera)):u=null,D.pop(),D.length>0?g=D[D.length-1]:g=null};function Di(y,O,$,W){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)$=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLight)u.pushLight(y),y.castShadow&&u.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Re.intersectsSprite(y)){W&&Ie.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ce);const Se=H.update(y),De=y.material;De.visible&&g.push(y,Se,De,$,Ie.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Re.intersectsObject(y))){const Se=H.update(y),De=y.material;if(W&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ie.copy(y.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ie.copy(Se.boundingSphere.center)),Ie.applyMatrix4(y.matrixWorld).applyMatrix4(ce)),Array.isArray(De)){const we=Se.groups;for(let Ye=0,Ze=we.length;Ye<Ze;Ye++){const qe=we[Ye],x=De[qe.materialIndex];x&&x.visible&&g.push(y,Se,x,$,Ie.z,qe)}}else De.visible&&g.push(y,Se,De,$,Ie.z,null)}}const he=y.children;for(let Se=0,De=he.length;Se<De;Se++)Di(he[Se],O,$,W)}function es(y,O,$,W){const B=y.opaque,he=y.transmissive,Se=y.transparent;u.setupLightsView($),X===!0&&_e.setGlobalState(A.clippingPlanes,$),W&&Be.viewport(P.copy(W)),B.length>0&&pn(B,O,$),he.length>0&&pn(he,O,$),Se.length>0&&pn(Se,O,$),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function fn(y,O,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[W.id]===void 0&&(u.state.transmissionRenderTarget[W.id]=new Qn(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?qi:un,minFilter:Kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));const he=u.state.transmissionRenderTarget[W.id],Se=W.viewport||P;he.setSize(Se.z*A.transmissionResolutionScale,Se.w*A.transmissionResolutionScale);const De=A.getRenderTarget(),we=A.getActiveCubeFace(),Ye=A.getActiveMipmapLevel();A.setRenderTarget(he),A.getClearColor(K),re=A.getClearAlpha(),re<1&&A.setClearColor(16777215,.5),A.clear(),at&&Ge.render($);const Ze=A.toneMapping;A.toneMapping=Un;const qe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),u.setupLightsView(W),X===!0&&_e.setGlobalState(A.clippingPlanes,W),pn(y,$,W),st.updateMultisampleRenderTarget(he),st.updateRenderTargetMipmap(he),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let x=!1;for(let f=0,T=O.length;f<T;f++){const V=O[f],q=V.object,k=V.geometry,ge=V.material,J=V.group;if(ge.side===yn&&q.layers.test(W.layers)){const I=ge.side;ge.side=zt,ge.needsUpdate=!0,ti(q,$,W,k,ge,J),ge.side=I,ge.needsUpdate=!0,x=!0}}x===!0&&(st.updateMultisampleRenderTarget(he),st.updateRenderTargetMipmap(he))}A.setRenderTarget(De,we,Ye),A.setClearColor(K,re),qe!==void 0&&(W.viewport=qe),A.toneMapping=Ze}function pn(y,O,$){const W=O.isScene===!0?O.overrideMaterial:null;for(let B=0,he=y.length;B<he;B++){const Se=y[B],De=Se.object,we=Se.geometry,Ye=Se.group;let Ze=Se.material;Ze.allowOverride===!0&&W!==null&&(Ze=W),De.layers.test($.layers)&&ti(De,O,$,we,Ze,Ye)}}function ti(y,O,$,W,B,he){y.onBeforeRender(A,O,$,W,B,he),y.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(A,O,$,W,y,he),B.transparent===!0&&B.side===yn&&B.forceSinglePass===!1?(B.side=zt,B.needsUpdate=!0,A.renderBufferDirect($,O,W,B,y,he),B.side=Nn,B.needsUpdate=!0,A.renderBufferDirect($,O,W,B,y,he),B.side=yn):A.renderBufferDirect($,O,W,B,y,he),y.onAfterRender(A,O,$,W,B,he)}function ni(y,O,$){O.isScene!==!0&&(O=We);const W=Ce.get(y),B=u.state.lights,he=u.state.shadowsArray,Se=B.state.version,De=ne.getParameters(y,B.state,he,O,$),we=ne.getProgramCacheKey(De);let Ye=W.programs;W.environment=y.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(y.isMeshStandardMaterial?nt:wt).get(y.envMap||W.environment),W.envMapRotation=W.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,Ye===void 0&&(y.addEventListener("dispose",ie),Ye=new Map,W.programs=Ye);let Ze=Ye.get(we);if(Ze!==void 0){if(W.currentProgram===Ze&&W.lightsStateVersion===Se)return bn(y,De),Ze}else De.uniforms=ne.getUniforms(y),y.onBeforeCompile(De,A),Ze=ne.acquireProgram(De,we),Ye.set(we,Ze),W.uniforms=De.uniforms;const qe=W.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(qe.clippingPlanes=_e.uniform),bn(y,De),W.needsLights=ft(y),W.lightsStateVersion=Se,W.needsLights&&(qe.ambientLightColor.value=B.state.ambient,qe.lightProbe.value=B.state.probe,qe.directionalLights.value=B.state.directional,qe.directionalLightShadows.value=B.state.directionalShadow,qe.spotLights.value=B.state.spot,qe.spotLightShadows.value=B.state.spotShadow,qe.rectAreaLights.value=B.state.rectArea,qe.ltc_1.value=B.state.rectAreaLTC1,qe.ltc_2.value=B.state.rectAreaLTC2,qe.pointLights.value=B.state.point,qe.pointLightShadows.value=B.state.pointShadow,qe.hemisphereLights.value=B.state.hemi,qe.directionalShadowMap.value=B.state.directionalShadowMap,qe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,qe.spotShadowMap.value=B.state.spotShadowMap,qe.spotLightMatrix.value=B.state.spotLightMatrix,qe.spotLightMap.value=B.state.spotLightMap,qe.pointShadowMap.value=B.state.pointShadowMap,qe.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Ze,W.uniformsList=null,Ze}function ts(y){if(y.uniformsList===null){const O=y.currentProgram.getUniforms();y.uniformsList=Ns.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function bn(y,O){const $=Ce.get(y);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function ns(y,O,$,W,B){O.isScene!==!0&&(O=We),st.resetTextureUnits();const he=O.fog,Se=W.isMeshStandardMaterial?O.environment:null,De=z===null?A.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:wi,we=(W.isMeshStandardMaterial?nt:wt).get(W.envMap||Se),Ye=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ze=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),qe=!!$.morphAttributes.position,x=!!$.morphAttributes.normal,f=!!$.morphAttributes.color;let T=Un;W.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(T=A.toneMapping);const V=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,q=V!==void 0?V.length:0,k=Ce.get(W),ge=u.state.lights;if(X===!0&&(me===!0||y!==E)){const _t=y===E&&W.id===b;_e.setState(W,y,_t)}let J=!1;W.version===k.__version?(k.needsLights&&k.lightsStateVersion!==ge.state.version||k.outputColorSpace!==De||B.isBatchedMesh&&k.batching===!1||!B.isBatchedMesh&&k.batching===!0||B.isBatchedMesh&&k.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&k.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&k.instancing===!1||!B.isInstancedMesh&&k.instancing===!0||B.isSkinnedMesh&&k.skinning===!1||!B.isSkinnedMesh&&k.skinning===!0||B.isInstancedMesh&&k.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&k.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&k.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&k.instancingMorph===!1&&B.morphTexture!==null||k.envMap!==we||W.fog===!0&&k.fog!==he||k.numClippingPlanes!==void 0&&(k.numClippingPlanes!==_e.numPlanes||k.numIntersection!==_e.numIntersection)||k.vertexAlphas!==Ye||k.vertexTangents!==Ze||k.morphTargets!==qe||k.morphNormals!==x||k.morphColors!==f||k.toneMapping!==T||k.morphTargetsCount!==q)&&(J=!0):(J=!0,k.__version=W.version);let I=k.currentProgram;J===!0&&(I=ni(W,O,B));let ae=!1,ve=!1,se=!1;const te=I.getUniforms(),le=k.uniforms;if(Be.useProgram(I.program)&&(ae=!0,ve=!0,se=!0),W.id!==b&&(b=W.id,ve=!0),ae||E!==y){Be.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),te.setValue(C,"projectionMatrix",y.projectionMatrix),te.setValue(C,"viewMatrix",y.matrixWorldInverse);const pt=te.map.cameraPosition;pt!==void 0&&pt.setValue(C,Ue.setFromMatrixPosition(y.matrixWorld)),ct.logarithmicDepthBuffer&&te.setValue(C,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&te.setValue(C,"isOrthographic",y.isOrthographicCamera===!0),E!==y&&(E=y,ve=!0,se=!0)}if(B.isSkinnedMesh){te.setOptional(C,B,"bindMatrix"),te.setOptional(C,B,"bindMatrixInverse");const _t=B.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),te.setValue(C,"boneTexture",_t.boneTexture,st))}B.isBatchedMesh&&(te.setOptional(C,B,"batchingTexture"),te.setValue(C,"batchingTexture",B._matricesTexture,st),te.setOptional(C,B,"batchingIdTexture"),te.setValue(C,"batchingIdTexture",B._indirectTexture,st),te.setOptional(C,B,"batchingColorTexture"),B._colorsTexture!==null&&te.setValue(C,"batchingColorTexture",B._colorsTexture,st));const je=$.morphAttributes;if((je.position!==void 0||je.normal!==void 0||je.color!==void 0)&&fe.update(B,$,I),(ve||k.receiveShadow!==B.receiveShadow)&&(k.receiveShadow=B.receiveShadow,te.setValue(C,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(le.envMap.value=we,le.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(le.envMapIntensity.value=O.environmentIntensity),ve&&(te.setValue(C,"toneMappingExposure",A.toneMappingExposure),k.needsLights&&Gs(le,se),he&&W.fog===!0&&oe.refreshFogUniforms(le,he),oe.refreshMaterialUniforms(le,W,Y,ue,u.state.transmissionRenderTarget[y.id]),Ns.upload(C,ts(k),le,st)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ns.upload(C,ts(k),le,st),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&te.setValue(C,"center",B.center),te.setValue(C,"modelViewMatrix",B.modelViewMatrix),te.setValue(C,"normalMatrix",B.normalMatrix),te.setValue(C,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const _t=W.uniformsGroups;for(let pt=0,ut=_t.length;pt<ut;pt++){const mt=_t[pt];it.update(mt,I),it.bind(mt,I)}}return I}function Gs(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function ft(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(y,O,$){const W=Ce.get(y);W.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Ce.get(y.texture).__webglTexture=O,Ce.get(y.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,O){const $=Ce.get(y);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0};const is=C.createFramebuffer();this.setRenderTarget=function(y,O=0,$=0){z=y,L=O,U=$;let W=!0,B=null,he=!1,Se=!1;if(y){const we=Ce.get(y);if(we.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(C.FRAMEBUFFER,null),W=!1;else if(we.__webglFramebuffer===void 0)st.setupRenderTarget(y);else if(we.__hasExternalTextures)st.rebindTextures(y,Ce.get(y.texture).__webglTexture,Ce.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const qe=y.depthTexture;if(we.__boundDepthTexture!==qe){if(qe!==null&&Ce.has(qe)&&(y.width!==qe.image.width||y.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(y)}}const Ye=y.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Se=!0);const Ze=Ce.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ze[O])?B=Ze[O][$]:B=Ze[O],he=!0):y.samples>0&&st.useMultisampledRTT(y)===!1?B=Ce.get(y).__webglMultisampledFramebuffer:Array.isArray(Ze)?B=Ze[$]:B=Ze,P.copy(y.viewport),Z.copy(y.scissor),j=y.scissorTest}else P.copy(Le).multiplyScalar(Y).floor(),Z.copy(et).multiplyScalar(Y).floor(),j=ze;if($!==0&&(B=is),Be.bindFramebuffer(C.FRAMEBUFFER,B)&&W&&Be.drawBuffers(y,B),Be.viewport(P),Be.scissor(Z),Be.setScissorTest(j),he){const we=Ce.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+O,we.__webglTexture,$)}else if(Se){const we=O;for(let Ye=0;Ye<y.textures.length;Ye++){const Ze=Ce.get(y.textures[Ye]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ye,Ze.__webglTexture,$,we)}}else if(y!==null&&$!==0){const we=Ce.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,we.__webglTexture,$)}b=-1},this.readRenderTargetPixels=function(y,O,$,W,B,he,Se,De=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ce.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){Be.bindFramebuffer(C.FRAMEBUFFER,we);try{const Ye=y.textures[De],Ze=Ye.format,qe=Ye.type;if(!ct.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-W&&$>=0&&$<=y.height-B&&(y.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+De),C.readPixels(O,$,W,B,He.convert(Ze),He.convert(qe),he))}finally{const Ye=z!==null?Ce.get(z).__webglFramebuffer:null;Be.bindFramebuffer(C.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(y,O,$,W,B,he,Se,De=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Ce.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we)if(O>=0&&O<=y.width-W&&$>=0&&$<=y.height-B){Be.bindFramebuffer(C.FRAMEBUFFER,we);const Ye=y.textures[De],Ze=Ye.format,qe=Ye.type;if(!ct.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const x=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,x),C.bufferData(C.PIXEL_PACK_BUFFER,he.byteLength,C.STREAM_READ),y.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+De),C.readPixels(O,$,W,B,He.convert(Ze),He.convert(qe),0);const f=z!==null?Ce.get(z).__webglFramebuffer:null;Be.bindFramebuffer(C.FRAMEBUFFER,f);const T=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await wc(C,T,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,x),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,he),C.deleteBuffer(x),C.deleteSync(T),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,O=null,$=0){const W=Math.pow(2,-$),B=Math.floor(y.image.width*W),he=Math.floor(y.image.height*W),Se=O!==null?O.x:0,De=O!==null?O.y:0;st.setTexture2D(y,0),C.copyTexSubImage2D(C.TEXTURE_2D,$,0,0,Se,De,B,he),Be.unbindTexture()};const Ws=C.createFramebuffer(),Li=C.createFramebuffer();this.copyTextureToTexture=function(y,O,$=null,W=null,B=0,he=null){he===null&&(B!==0?(yi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=B,B=0):he=0);let Se,De,we,Ye,Ze,qe,x,f,T;const V=y.isCompressedTexture?y.mipmaps[he]:y.image;if($!==null)Se=$.max.x-$.min.x,De=$.max.y-$.min.y,we=$.isBox3?$.max.z-$.min.z:1,Ye=$.min.x,Ze=$.min.y,qe=$.isBox3?$.min.z:0;else{const je=Math.pow(2,-B);Se=Math.floor(V.width*je),De=Math.floor(V.height*je),y.isDataArrayTexture?we=V.depth:y.isData3DTexture?we=Math.floor(V.depth*je):we=1,Ye=0,Ze=0,qe=0}W!==null?(x=W.x,f=W.y,T=W.z):(x=0,f=0,T=0);const q=He.convert(O.format),k=He.convert(O.type);let ge;O.isData3DTexture?(st.setTexture3D(O,0),ge=C.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(st.setTexture2DArray(O,0),ge=C.TEXTURE_2D_ARRAY):(st.setTexture2D(O,0),ge=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);const J=C.getParameter(C.UNPACK_ROW_LENGTH),I=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ae=C.getParameter(C.UNPACK_SKIP_PIXELS),ve=C.getParameter(C.UNPACK_SKIP_ROWS),se=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,V.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,V.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ye),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ze),C.pixelStorei(C.UNPACK_SKIP_IMAGES,qe);const te=y.isDataArrayTexture||y.isData3DTexture,le=O.isDataArrayTexture||O.isData3DTexture;if(y.isDepthTexture){const je=Ce.get(y),_t=Ce.get(O),pt=Ce.get(je.__renderTarget),ut=Ce.get(_t.__renderTarget);Be.bindFramebuffer(C.READ_FRAMEBUFFER,pt.__webglFramebuffer),Be.bindFramebuffer(C.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let mt=0;mt<we;mt++)te&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ce.get(y).__webglTexture,B,qe+mt),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ce.get(O).__webglTexture,he,T+mt)),C.blitFramebuffer(Ye,Ze,Se,De,x,f,Se,De,C.DEPTH_BUFFER_BIT,C.NEAREST);Be.bindFramebuffer(C.READ_FRAMEBUFFER,null),Be.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(B!==0||y.isRenderTargetTexture||Ce.has(y)){const je=Ce.get(y),_t=Ce.get(O);Be.bindFramebuffer(C.READ_FRAMEBUFFER,Ws),Be.bindFramebuffer(C.DRAW_FRAMEBUFFER,Li);for(let pt=0;pt<we;pt++)te?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,je.__webglTexture,B,qe+pt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,je.__webglTexture,B),le?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_t.__webglTexture,he,T+pt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,_t.__webglTexture,he),B!==0?C.blitFramebuffer(Ye,Ze,Se,De,x,f,Se,De,C.COLOR_BUFFER_BIT,C.NEAREST):le?C.copyTexSubImage3D(ge,he,x,f,T+pt,Ye,Ze,Se,De):C.copyTexSubImage2D(ge,he,x,f,Ye,Ze,Se,De);Be.bindFramebuffer(C.READ_FRAMEBUFFER,null),Be.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else le?y.isDataTexture||y.isData3DTexture?C.texSubImage3D(ge,he,x,f,T,Se,De,we,q,k,V.data):O.isCompressedArrayTexture?C.compressedTexSubImage3D(ge,he,x,f,T,Se,De,we,q,V.data):C.texSubImage3D(ge,he,x,f,T,Se,De,we,q,k,V):y.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,he,x,f,Se,De,q,k,V.data):y.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,he,x,f,V.width,V.height,q,V.data):C.texSubImage2D(C.TEXTURE_2D,he,x,f,Se,De,q,k,V);C.pixelStorei(C.UNPACK_ROW_LENGTH,J),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,I),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ae),C.pixelStorei(C.UNPACK_SKIP_ROWS,ve),C.pixelStorei(C.UNPACK_SKIP_IMAGES,se),he===0&&O.generateMipmaps&&C.generateMipmap(ge),Be.unbindTexture()},this.copyTextureToTexture3D=function(y,O,$=null,W=null,B=0){return yi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,O,$,W,B)},this.initRenderTarget=function(y){Ce.get(y).__webglFramebuffer===void 0&&st.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?st.setTextureCube(y,0):y.isData3DTexture?st.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?st.setTexture2DArray(y,0):st.setTexture2D(y,0),Be.unbindTexture()},this.resetState=function(){L=0,U=0,z=null,Be.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}const Jp=/^[og]\s*(.+)?/,Qp=/^mtllib /,em=/^usemtl /,tm=/^usemap /,Ho=/\s+/,Vo=new G,wr=new G,Go=new G,Wo=new G,$t=new G,Cs=new dt;function nm(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(e,t,n){const s=this.vertices,r=this.object.geometry.normals;Vo.fromArray(s,e),wr.fromArray(s,t),Go.fromArray(s,n),$t.subVectors(Go,wr),Wo.subVectors(Vo,wr),$t.cross(Wo),$t.normalize(),r.push($t.x,$t.y,$t.z),r.push($t.x,$t.y,$t.z),r.push($t.x,$t.y,$t.z)},addColor:function(e,t,n){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(e,t,n){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,s,r,a,o,c,l){const h=this.vertices.length;let d=this.parseVertexIndex(e,h),p=this.parseVertexIndex(t,h),m=this.parseVertexIndex(n,h);if(this.addVertex(d,p,m),this.addColor(d,p,m),o!==void 0&&o!==""){const v=this.normals.length;d=this.parseNormalIndex(o,v),p=this.parseNormalIndex(c,v),m=this.parseNormalIndex(l,v),this.addNormal(d,p,m)}else this.addFaceNormal(d,p,m);if(s!==void 0&&s!==""){const v=this.uvs.length;d=this.parseUVIndex(s,v),p=this.parseUVIndex(r,v),m=this.parseUVIndex(a,v),this.addUV(d,p,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,s=e.length;n<s;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let r=0,a=e.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return i.startObject("",!1),i}class im extends Ra{constructor(e){super(e),this.materials=null}load(e,t,n,s){const r=this,a=new ld(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new nm;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let s=[];for(let o=0,c=n.length;o<c;o++){const l=n[o].trimStart();if(l.length===0)continue;const h=l.charAt(0);if(h!=="#")if(h==="v"){const d=l.split(Ho);switch(d[0]){case"v":t.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(Cs.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6]),Wt),t.colors.push(Cs.r,Cs.g,Cs.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":t.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(h==="f"){const p=l.slice(1).trim().split(Ho),m=[];for(let S=0,g=p.length;S<g;S++){const u=p[S];if(u.length>0){const D=u.split("/");m.push(D)}}const v=m[0];for(let S=1,g=m.length-1;S<g;S++){const u=m[S],D=m[S+1];t.addFace(v[0],u[0],D[0],v[1],u[1],D[1],v[2],u[2],D[2])}}else if(h==="l"){const d=l.substring(1).trim().split(" ");let p=[];const m=[];if(l.indexOf("/")===-1)p=d;else for(let v=0,S=d.length;v<S;v++){const g=d[v].split("/");g[0]!==""&&p.push(g[0]),g[1]!==""&&m.push(g[1])}t.addLineGeometry(p,m)}else if(h==="p"){const p=l.slice(1).trim().split(" ");t.addPointGeometry(p)}else if((s=Jp.exec(l))!==null){const d=(" "+s[0].slice(1).trim()).slice(1);t.startObject(d)}else if(em.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(Qp.test(l))t.materialLibraries.push(l.substring(7).trim());else if(tm.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(s=l.split(" "),s.length>1){const p=s[1].trim().toLowerCase();t.object.smooth=p!=="0"&&p!=="off"}else t.object.smooth=!0;const d=t.object.currentMaterial();d&&(d.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();const r=new Zn;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,c=t.objects.length;o<c;o++){const l=t.objects[o],h=l.geometry,d=l.materials,p=h.type==="Line",m=h.type==="Points";let v=!1;if(h.vertices.length===0)continue;const S=new jt;S.setAttribute("position",new Ot(h.vertices,3)),h.normals.length>0&&S.setAttribute("normal",new Ot(h.normals,3)),h.colors.length>0&&(v=!0,S.setAttribute("color",new Ot(h.colors,3))),h.hasUVIndices===!0&&S.setAttribute("uv",new Ot(h.uvs,2));const g=[];for(let D=0,R=d.length;D<R;D++){const A=d[D],F=A.name+"_"+A.smooth+"_"+v;let L=t.materials[F];if(this.materials!==null){if(L=this.materials.create(A.name),p&&L&&!(L instanceof Vi)){const U=new Vi;hn.prototype.copy.call(U,L),U.color.copy(L.color),L=U}else if(m&&L&&!(L instanceof ki)){const U=new ki({size:10,sizeAttenuation:!1});hn.prototype.copy.call(U,L),U.color.copy(L.color),U.map=L.map,L=U}}L===void 0&&(p?L=new Vi:m?L=new ki({size:1,sizeAttenuation:!1}):L=new nd,L.name=A.name,L.flatShading=!A.smooth,L.vertexColors=v,t.materials[F]=L),g.push(L)}let u;if(g.length>1){for(let D=0,R=d.length;D<R;D++){const A=d[D];S.addGroup(A.groupStart,A.groupCount,D)}p?u=new co(S,g):m?u=new vr(S,g):u=new Yt(S,g)}else p?u=new co(S,g[0]):m?u=new vr(S,g[0]):u=new Yt(S,g[0]);u.name=l.name,r.add(u)}else if(t.vertices.length>0){const o=new ki({size:1,sizeAttenuation:!1}),c=new jt;c.setAttribute("position",new Ot(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new Ot(t.colors,3)),o.vertexColors=!0);const l=new vr(c,o);r.add(l)}return r}}const sm={key:0,class:"hud"},rm=["max"],am=1e3/30,om=$o({__name:"Pip3D",props:{dataUrl:{default:"/pip_test_data.json"},wsUrl:{default:""},modelPaths:{default:()=>({bus:"/bus.obj",car:"/car.obj",pedestrian:"/pedestrian.obj"})},cameraMode:{default:"chase"}},setup(i){const e=i,t=Al([]),n=$e(0),s=$e(0),r=$e(!0);let a=null;const o=[],c=xi(()=>t.length?e.wsUrl?t[t.length-1]:t[n.value]:null),l=$e(null),h=$e(null);let d,p,m,v=0,S=0;const g=$e(!0);let u,D,R;const A=new im,F=new xr({color:16777215,metalness:0,roughness:1}),L=new xr({color:14278115,metalness:0,roughness:.9}),U=new xr({color:11388671,roughness:.85}),z={};async function b(ze){if(z[ze])return z[ze].clone(!0);const Re=await A.loadAsync(ze);return Re.traverse(X=>{X.isMesh&&(X.castShadow=!1,X.receiveShadow=!1)}),z[ze]=Re,Re.clone(!0)}const E={};function P(ze){return`${ze.type}-${ze.id}`}const Z={};function j(ze,Re,X=0){if(ze==="top")m.position.set(Re.x,30,Re.z),m.lookAt(Re.x,0,Re.z);else{const Ie=Math.sin(X),We=Math.cos(X);m.position.set(Re.x-Ie*12,4,Re.z-We*12),m.lookAt(Re.x+Ie*5,1,Re.z+We*5)}}async function K(){p=new Jc,p.background=new dt(16185337);const ze=l.value?l.value.clientWidth:640,Re=l.value?l.value.clientHeight:400;m=new qt(45,ze/Re,.1,1e3),m.position.set(0,6,12),d=new Zp({canvas:h.value,antialias:!1,powerPreference:"low-power"}),d.setPixelRatio(1),d.setSize(ze,Re,!1),d.shadowMap.enabled=!1,p.add(new hd(16777215,.6)),R=new ud(16777215,.6),R.position.set(10,12,6),R.castShadow=!1,p.add(R);const X=new Qi(100,100,1,1);D=new Yt(X,F),D.receiveShadow=!1,D.rotation.x=-Math.PI/2,p.add(D),u=new Zn;const me=await b(e.modelPaths.bus);me.traverse(ce=>{ce.isMesh&&(ce.material=U)}),u.add(me),p.add(u),re()}function re(ze=0){if(v=requestAnimationFrame(re),et(),ze-S<am||(S=ze,!g.value))return;const X=c.value;if(X){const{x:me=0,y:ce=0,z:Ue=0,yaw:Ie=0}=X.ego||{};u.position.set(me,ce,Ue),u.rotation.set(0,Ie,0),j(e.cameraMode,{x:me,z:Ue},Ie);const We={};for(const at of X.objects||[]){const Je=P(at);let C=E[Je];if(!C){C=new Zn,E[Je]=C,p.add(C);let lt=e.modelPaths.car;at.type==="pedestrian"&&(lt=e.modelPaths.pedestrian),b(lt).then(Ne=>{Ne.traverse(ct=>{ct.isMesh&&(ct.material=L)}),C.add(Ne)})}C.position.set(at.x??0,at.y??0,at.z??0),C.rotation.set(0,at.yaw??0,0),We[Je]=!0}for(const[at,Je]of Object.entries(E))We[at]||(p.remove(Je),delete E[at]);for(const at of X.lanes||[]){let Je=Z[at.id];const C=(at.pts||[]).map(lt=>new G(lt[0],lt[1],lt[2]));if(Je)Je.geometry.setFromPoints(C),Je.geometry.computeBoundingSphere();else{const lt=new jt().setFromPoints(C),Ne=new Vi({color:13686237});Je=new gl(lt,Ne),Z[at.id]=Je,p.add(Je)}}}d.render(p,m)}async function Q(){const Re=await(await fetch(e.dataUrl)).json();t.splice(0,t.length,...Re.frames||[])}function ue(){e.wsUrl&&(a=new WebSocket(e.wsUrl),a.onmessage=ze=>{try{const Re=JSON.parse(ze.data);o.push(Re),o.length>240&&o.shift(),t.splice(0,t.length,...o)}catch(Re){console.warn("WS parse error",Re)}},a.onclose=()=>{})}let Y=null;function Me(){ye(),Y=setInterval(()=>{var ze;t.length&&r.value&&(n.value=(n.value+1)%t.length,s.value=((ze=t[n.value])==null?void 0:ze.ts_ms)||0)},100)}function ye(){Y&&(clearInterval(Y),Y=null)}let Le=null;function et(){if(!d||!m||!l.value)return;const ze=l.value.getBoundingClientRect(),Re=Math.max(1,Math.floor(ze.width)),X=Math.max(1,Math.floor(ze.height));if(Re===0||X===0)return;const me=d.domElement,ce=d.getPixelRatio(),Ue=Math.floor(me.width/ce),Ie=Math.floor(me.height/ce),We=Ue!==Re||Ie!==X;return We&&(console.log(`Resizing renderer: ${Ue}x${Ie} -> ${Re}x${X}`),console.log(`(clientWidth: ${l.value.clientWidth}, boundingRect: ${Re})`),d.setSize(Re,X,!1),m.aspect=Re/X,m.updateProjectionMatrix()),We}return qo(async()=>{await K(),await wl(),et(),l.value&&(Le=new ResizeObserver(()=>{console.log("ResizeObserver triggered"),et()}),Le.observe(l.value)),e.wsUrl?ue():(await Q(),Me());const ze=new IntersectionObserver(Re=>{Re.forEach(X=>{g.value=X.isIntersecting})},{threshold:.1});l.value&&ze.observe(l.value),Da(()=>{l.value&&ze.unobserve(l.value),Le&&l.value&&(Le.unobserve(l.value),Le=null)})}),Da(()=>{cancelAnimationFrame(v),ye(),a==null||a.close(),Le&&l.value&&(Le.unobserve(l.value),Le=null),d==null||d.dispose();for(const ze of Object.values(E))p.remove(ze)}),(ze,Re)=>(Oe(),Ve("div",{ref_key:"wrap",ref:l,class:"pip3d-container"},[M("canvas",{ref_key:"canvas",ref:h},null,512),ze.wsUrl?ht("",!0):(Oe(),Ve("div",sm,[M("button",{onClick:Re[0]||(Re[0]=X=>r.value=!r.value)},Te(r.value?"Pause":"Play"),1),M("span",null,"t: "+Te(s.value),1),Wn(M("input",{type:"range",min:0,max:Math.max(0,t.length-1),"onUpdate:modelValue":Re[1]||(Re[1]=X=>n.value=X)},null,8,rm),[[Rl,n.value,void 0,{number:!0}]])]))],512))}}),Xo=Yo(om,[["__scopeId","data-v-08858fec"]]),lm={class:"vehicle-tracking-container"},cm={class:"header px-6 py-3 bg-white border-b border-gray-200"},dm={class:"flex items-center gap-4 mt-4"},um={class:"flex items-center gap-2"},hm={class:"text-sm text-gray-700"},fm={class:"flex items-center gap-2"},pm={class:"text-sm text-gray-700"},mm={class:"flex items-center gap-2"},gm={class:"text-sm text-gray-700"},_m={class:"flex items-center gap-2"},vm={class:"text-sm text-gray-700"},xm={class:"text-sm text-gray-500 flex items-center gap-2"},Mm={class:"flex items-center gap-2 ml-auto"},Sm={key:0,class:"text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded border border-orange-200"},ym=["disabled"],Em={class:"main-content"},Tm={class:"left-sidebar"},bm={key:0,class:"vertical-route-diagram-container"},Am={class:"vertical-route-diagrams"},wm={class:"route-badge-container"},Rm={class:"route-badge"},Cm={class:"route-badge-number"},Pm={class:"route-badge-type"},Dm={class:"vertical-route-line"},Lm=["title"],Im={class:"vertical-stop-info"},Um={class:"stop-name"},Nm={class:"stop-number"},Fm=["title"],Om={class:"bus-marker-container"},Bm={class:"bus-marker-icon"},zm={width:"32",height:"32",viewBox:"0 0 32 32",fill:"none"},km=["fill"],Hm={class:"map-container"},Vm={class:"map-style-selector"},Gm={class:"map-style-options"},Wm={class:"pip-header"},Xm={class:"pip-controls"},$m={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},qm={key:1,width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},Ym={class:"pip-body"},jm={class:"pip-header"},Km={class:"pip-controls"},Zm={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},Jm={key:1,width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},Qm={class:"pip-body"},eg={class:"pip-header"},tg={class:"pip-controls"},ng={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},ig={key:1,width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},sg={class:"panel-content"},rg={class:"info-section"},ag={class:"info-grid"},og={class:"info-item"},lg={class:"info-value"},cg={class:"info-item"},dg={class:"info-value"},ug={class:"info-item"},hg={class:"info-item"},fg={class:"info-section"},pg={class:"info-grid"},mg={class:"info-item"},gg={class:"info-value"},_g={class:"info-item"},vg={class:"info-value"},xg={key:0,class:"info-item"},Mg={class:"info-value"},Sg={key:1,class:"info-item"},yg={class:"info-value"},Eg={class:"info-section"},Tg={class:"info-grid"},bg={class:"info-item full-width"},Ag={class:"info-value font-mono text-xs"},wg={class:"info-item"},Rg={class:"info-value"},Cg={class:"info-item"},Pg={class:"info-value"},Dg={key:0,class:"info-item"},Lg={class:"info-value"},Ig={class:"text-gray-500"},Ug={key:1,class:"info-item"},Ng={class:"info-value"},Fg={class:"info-section"},Og={class:"object-detection-grid"},Bg={class:"detection-item"},zg={class:"detection-info"},kg={class:"detection-count"},Hg={class:"detection-item"},Vg={class:"detection-info"},Gg={class:"detection-count"},Wg={class:"detection-item"},Xg={class:"detection-info"},$g={class:"detection-count"},qg={class:"detection-item"},Yg={class:"detection-info"},jg={class:"info-section"},Kg={class:"odd-status-header"},Zg={class:"odd-status-icon"},Jg={class:"odd-status-content"},Qg={class:"odd-status-value"},e_={key:0,class:"odd-distance"},t_={class:"environment-conditions"},n_={class:"condition-grid"},i_={class:"condition-item"},s_={class:"condition-info"},r_={class:"condition-value"},a_={class:"condition-item"},o_={class:"condition-info"},l_={class:"condition-value"},c_={class:"condition-item"},d_={class:"condition-info"},u_={class:"condition-value"},h_={class:"condition-item"},f_={class:"condition-info"},p_={class:"condition-value"},m_={class:"system-limits"},g_={class:"limit-status-list"},__={key:0,class:"intervention-alert"},v_={class:"intervention-content"},x_={class:"intervention-reason"},M_={class:"safety-text"},S_={key:0,class:"odd-warning-card"},y_={class:"warning-content"},E_={class:"warning-distance"},T_={class:"distance-value"},b_={class:"warning-eta"},A_={class:"eta-value"},w_={class:"warning-action"},R_={class:"action-text"},C_={key:1,class:"absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10"},P_={key:2,class:"absolute top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded z-10"},D_={class:"text-sm"},L_={class:"sidebar"},I_={class:"sidebar-content"},U_={key:0,class:"text-center text-gray-500 py-8"},N_={key:1,class:"space-y-3"},F_=["onClick"],O_={class:"flex items-center justify-between mb-2"},B_={class:"flex items-center gap-2"},z_={class:"font-medium text-gray-800"},k_={class:"text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"},H_={class:"text-sm text-gray-600 space-y-1"},V_={class:"flex justify-between"},G_={class:"text-purple-600"},W_={key:0,class:"flex justify-between"},X_={class:"font-medium"},$_={class:"text-blue-600"},q_={key:1,class:"mt-2 p-2 bg-green-50 border border-green-200 rounded text-xs"},Y_={class:"space-y-1 text-green-700"},j_={class:"flex justify-between"},K_={class:"font-mono"},Z_={class:"flex justify-between"},J_={class:"font-mono"},Q_={key:0,class:"mt-1 pt-1 border-t border-green-300"},ev={key:0,class:"flex justify-between"},tv={class:"font-medium"},nv={key:1,class:"mt-1"},iv={class:"flex flex-wrap gap-1 mt-1"},sv={key:2,class:"flex justify-between"},rv={class:"font-mono"},av={class:"flex justify-between"},ov={key:0,class:"text-xs"},lv={key:2,class:"mt-1 p-2 bg-orange-50 rounded text-xs"},cv={class:"flex justify-between"},dv={class:"animate-slideDown"},uv={class:"mt-3 pt-2 border-t border-gray-200"},hv={class:"flex gap-2"},fv=["onClick","disabled"],pv=["onClick","disabled"],mv={key:0,class:"mt-2 pt-2 border-t border-gray-200"},gv={key:0,class:"bg-blue-50 p-2 rounded text-xs mb-2"},_v={class:"flex justify-between mb-1"},vv={class:"font-medium text-blue-900"},xv={class:"flex justify-between"},Mv={class:"font-medium text-blue-900"},Sv={key:1,class:"flex justify-between text-xs"},yv={class:"text-green-600 font-medium"},Ev={key:2,class:"flex justify-between text-xs"},Tv={class:"text-indigo-600"},bv={key:3,class:"flex justify-between text-xs"},Av={class:"text-gray-700"},wv={key:1,class:"mt-2 pt-2 border-t border-gray-200"},Rv={key:0,class:"space-y-2"},Cv={class:"flex justify-between text-xs"},Pv={class:"text-purple-600 font-medium"},Dv={class:"font-medium text-green-800 mb-1"},Lv={class:"space-y-1 text-green-700"},Iv={class:"flex items-start gap-1"},Uv={class:"flex-1"},Nv=["title"],Fv={class:"flex items-start gap-1"},Ov={class:"flex-1"},Bv=["title"],zv={key:0,class:"text-xs text-gray-600"},kv={key:0,class:"text-xs text-gray-500 text-center"},Hv={key:1,class:"flex justify-between text-xs mt-2"},Vv={class:"text-gray-700"},Gv={key:2,class:"flex justify-between text-xs"},Wv={class:"text-gray-700"},Xv={class:"mt-2 pt-2 border-t border-gray-200"},$v={class:"flex justify-between text-xs"},qv={class:"font-mono"},Yv={key:0,class:"flex justify-between text-xs"},jv={class:"text-gray-700"},Kv={class:"text-gray-500"},Zv={key:1,class:"flex justify-between text-xs"},Jv={class:"text-gray-700"},Qv=$o({__name:"VehicleTrackingView",setup(i){delete yt.Icon.Default.prototype._getIconUrl,yt.Icon.Default.mergeOptions({iconRetinaUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",iconUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png"});const e=new Ol({basePath:"https://av-ops.maas-busan.shop",baseOptions:{timeout:1e4,headers:{"Content-Type":"application/json",Accept:"application/json"}}}),t=new Nl(e);new Ll(e);const n=new Ul(e),s=new Fl(e),r=new Il(e),a="https://av-ops.maas-busan.shop",o=$e(),c=$e(),l=$e("light"),h=$e(!1),d=$e(),p=$e(new Map),m=$e(new Map),v=$e(new Map),S=$e(new Map),g=$e(new Map),u=$e(new Map),D=$e(new Map),R=$e([]),A=$e(!1),F=$e(new Map),L=$e(new Map),U=$e(new Map),z=$e(!1),b=$e(!1),E=$e(null),P=$e([]),Z=$e([]),j=$e([]),K=$e([]),re=$e(""),Q=$e(1e3),ue=$e([]),Y=$e(new Map),Me=$e(new Set),ye=$e(new Map);$e(new Set),$e(new Map);const Le=x=>{const f=typeof x=="string"?parseInt(x):x;for(const T of ye.value.values())if(T.stops&&T.stops.length>0){const V=T.stops.findIndex(q=>q.id===f||q.node_id===f);if(V!==-1)return{name:T.stops[V].name,index:V+1}}return{name:"",index:null}},et=x=>{const f=Le(x);return f.name&&f.index!==null?`${f.index}. ${f.name}`:f.name?f.name:`노드 ${x}`},ze=$e(),Re=$e(),X=$e(),me=$e(),ce=$e(),Ue=$e(),Ie=$e(!1),We=$e(!1),at=$e(!1),Je=$e(!0),C=$e(!0),lt=$e(!0),Ne=$e(null),ct=$e({x:0,y:0}),Be=$e(null),Qe=$e(null),Ce=$e({pedestrians:0,vehicles:0,bicycles:0}),st=$e("녹색"),wt=xi(()=>{const x=st.value;return x==="녹색"?"text-green-600":x==="황색"?"text-yellow-600":x==="적색"?"text-red-600":"text-gray-600"}),nt=$e({inODD:!0,distanceToBoundary:850,approachingBoundary:!1,etaToBoundary:60,recommendedAction:"정상 운행 가능",weather:"맑음",lighting:"주간",roadCondition:"건조",temperature:23,systemLimits:{oddExceeded:!1,sensorFailure:!1,weatherLimit:!1,gpsLoss:!1},driverInterventionRequired:!1,interventionReason:"",safetyStopAvailable:!0});let w=null;const _=[35.1796,129.0756],H=xi(()=>{console.log("=== 운행 중 차량 필터링 ==="),console.log("전체 차량 수:",P.value.length),console.log("수요응답 Trip 수:",Z.value.length),console.log("정기노선 Trip 수:",j.value.length),Z.value.length>0&&console.log("수요응답 Trip 상태들:",Z.value.map(f=>({id:f.id,vehicle_id:f.vehicle_id,status:f.status}))),j.value.length>0&&console.log("정기노선 Trip 상태들:",j.value.map(f=>({id:f.id,vehicle_id:f.vehicle_id,status:f.status})));const x=P.value.filter(f=>{var q,k;const T=Z.value.find(ge=>ge.vehicle_id===f.id);if(T&&(console.log(`🚗 차량 ${f.id}: 수요응답 Trip #${T.id} (상태: ${T.status})`,{calls_count:((q=T.calls)==null?void 0:q.length)||0,call_ids:((k=T.calls)==null?void 0:k.map(ge=>ge.id))||[],service_area_id:T.service_area_id}),T.status!=="SCHEDULED"&&T.status!=="COMPLETED"))return!0;const V=j.value.find(ge=>ge.vehicle_id===f.id);return!!(V&&(console.log(`차량 ${f.id}: 정기노선 Trip 상태 = ${V.status}`),V.status!=="SCHEDULED"&&V.status!=="COMPLETED"))});return console.log("필터링 결과: 운행 중 차량 수 =",x.length),console.log("=== 필터링 종료 ==="),x.map(f=>{const T=Z.value.find(k=>k.vehicle_id===f.id),V=j.value.find(k=>k.vehicle_id===f.id),q=T||V;return{...f,trip_id:q==null?void 0:q.id,tripStatus:q==null?void 0:q.status,tripType:T?"ON_DEMAND":"SCHEDULED"}})}),ne=xi(()=>H.value.filter(x=>x.tripType==="SCHEDULED"&&x.tripStatus!=="RETURNING").length),oe=xi(()=>H.value.filter(x=>x.tripType==="ON_DEMAND"&&x.tripStatus!=="RETURNING").length),ee=xi(()=>H.value.filter(x=>x.tripStatus==="RETURNING").length),Xe=()=>{try{if(console.log("지도 초기화 시작..."),console.log("mapContainer.value:",o.value),!o.value){console.error("지도 컨테이너를 찾을 수 없습니다");return}c.value&&c.value.remove(),console.log("Leaflet 지도 객체 생성 중..."),c.value=yt.map(o.value,{center:_,zoom:12,zoomControl:!0,attributionControl:!0,minZoom:10,maxZoom:18}),console.log("타일 레이어 추가 중...");const x=yt.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",{attribution:"© OpenStreetMap contributors © CARTO",maxZoom:19,subdomains:"abcd"});x.addTo(c.value),d.value=x,x.on("loading",()=>{console.log("타일 로딩 시작")}),x.on("load",()=>{console.log("타일 로딩 완료")}),console.log("지도 초기화 완료"),console.log("지도 객체:",c.value)}catch(x){console.error("지도 초기화 실패:",x),x.value=`지도 초기화 실패: ${x.message}`}},_e=async()=>{try{console.log("서비스 지역 조회 중...");const x=await s.getServiceAreasApiServiceAreasGet();x.data&&x.data.areas?K.value=x.data.areas||[]:Array.isArray(x.data)?K.value=x.data||[]:K.value=[],console.log(`서비스 지역 ${K.value.length}개 조회 완료`),console.log("서비스 지역 데이터:",K.value),K.value.length>0&&c.value&&(Ge(),A.value||(ke(),A.value=!0))}catch(x){console.error("서비스 지역 조회 실패:",x)}},ke=()=>{if(!(!c.value||K.value.length===0))try{console.log("서비스 지역 기준으로 지도 범위 조정 중...");let x=null,f=0,T=[];if(K.value.forEach(V=>{const q=V.boundary||V.geojson;if(q)if(q.type&&q.coordinates){const k=(ge,J=0)=>{if(!(J>3)&&Array.isArray(ge))if(ge.length===2&&typeof ge[0]=="number"&&typeof ge[1]=="number"){const I=yt.latLng(ge[1],ge[0]);T.push([ge[1],ge[0]]),x?x.extend(I):x=yt.latLngBounds([I]),f++}else ge.forEach(I=>k(I,J+1))};k(q.coordinates)}else q.features&&q.features.forEach(k=>{if(k.geometry&&k.geometry.coordinates){const ge=(J,I=0)=>{if(!(I>3)&&Array.isArray(J))if(J.length===2&&typeof J[0]=="number"&&typeof J[1]=="number"){const ae=yt.latLng(J[1],J[0]);T.push([J[1],J[0]]),x?x.extend(ae):x=yt.latLngBounds([ae]),f++}else J.forEach(ae=>ge(ae,I+1))};ge(k.geometry.coordinates)}})}),x&&f>0){console.log(`${f}개 좌표로 지도 범위 설정`),console.log("범위:",x.getSouthWest(),"~",x.getNorthEast());const V=x.getCenter();console.log("서비스 지역 중심점:",V),c.value.setView(V,14,{animate:!1}),setTimeout(()=>{c.value.fitBounds(x,{padding:[10,40],maxZoom:15,animate:!0,duration:1}),setTimeout(()=>{const q=c.value.getZoom();c.value.setZoom(Math.min(q+.5,15),{animate:!0})},1100)},100)}else console.warn("서비스 지역 좌표를 찾을 수 없어 기본 위치 사용"),c.value.setView(_,11)}catch(x){console.error("지도 범위 조정 실패:",x),c.value.setView(_,11)}},Ge=()=>{c.value&&(R.value.forEach(x=>{var f;(f=c.value)==null||f.removeLayer(x)}),R.value=[],K.value.forEach((x,f)=>{var V,q;const T=x.boundary||x.geojson;if(T)try{const k=["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6"],ge=k[f%k.length];let J=T;T.type&&(T.type==="Polygon"||T.type==="LineString"||T.type==="MultiPolygon"||T.type==="MultiLineString")&&(J={type:"Feature",geometry:T,properties:{}});const I=yt.geoJSON(J,{style:se=>{var te,le;return((te=se==null?void 0:se.geometry)==null?void 0:te.type)==="LineString"||((le=se==null?void 0:se.geometry)==null?void 0:le.type)==="MultiLineString"?{color:ge,weight:5,opacity:1,dashArray:x.area_type==="RESTRICTED"?"10, 5":void 0}:{color:ge,weight:3,opacity:.9,fillColor:ge,fillOpacity:.15,dashArray:x.area_type==="RESTRICTED"?"10, 5":void 0}},onEachFeature:(se,te)=>{const le=`
              <div class="service-area-popup">
                <h4 class="font-bold text-lg mb-2">${x.name||x.area_name||"서비스 지역"}</h4>
                <div class="space-y-1">
                  <p><strong>구역 타입:</strong> ${x.area_type||(T.type==="LineString"||T.type==="MultiLineString"?"Route":"Service Area")}</p>
                  <p><strong>상태:</strong> ${x.is_active?"✅ 활성":"❌ 비활성"}</p>
                  <p><strong>설명:</strong> ${x.description||"설명 없음"}</p>
                </div>
              </div>
            `;te.bindPopup(le,{maxWidth:300,className:"custom-popup"}),te.on("mouseover",function(){var je,_t;((je=se.geometry)==null?void 0:je.type)==="LineString"||((_t=se.geometry)==null?void 0:_t.type)==="MultiLineString"?this.setStyle({weight:7,opacity:1}):this.setStyle({weight:4,fillOpacity:.25})}),te.on("mouseout",function(){I.resetStyle(this)})}});I.addTo(c.value),R.value.push(I);const ae=new Set;J.type==="Feature"?ae.add(((V=J.geometry)==null?void 0:V.type)||"Unknown"):J.features&&((q=J.features)==null||q.forEach(se=>{var te;(te=se.geometry)!=null&&te.type&&ae.add(se.geometry.type)}));const ve=x.name||x.area_name||"서비스 지역";console.log(`서비스 지역 "${ve}" 지도에 추가 (타입: ${Array.from(ae).join(", ")})`)}catch(k){console.error(`서비스 지역 "${x.area_name}" 표시 실패:`,k)}}))},fe=async()=>{try{console.log("차량 목록 조회 중...");const x=await t.getAllVehiclesApiVehiclesGet();P.value=x.data||[],console.log(`차량 ${P.value.length}대 조회 완료`),console.log("차량 데이터:",P.value)}catch(x){console.error("차량 목록 조회 실패:",x),E.value=`차량 목록 조회 실패: ${x.message}`}},Ae=async()=>{try{console.log("수요응답 Trip 조회 중...");try{const x=await fetch(`${a}/api/on-demand-trips/calls`);if(x.ok){const f=await x.json();f&&f.length>0&&(console.log("📍 Call API 응답 구조 (첫 번째 call):",f[0]),console.log("📍 Call 필드명:",Object.keys(f[0])))}}catch(x){console.log("Call API 조회 스킵:",x)}try{const x=await fetch(`${a}/api/on-demand-trips/active`);if(x.ok){const f=await x.json();Z.value=f||[],console.log("수요응답 활성 Trip:",f)}else throw new Error(`Active trips API failed: ${x.status}`)}catch(x){console.warn("활성 API 실패, 전체 조회 시도...",x);try{const f=await fetch(`${a}/api/on-demand-trips`);if(f.ok){const T=await f.json();Z.value=T||[],console.log("=== 수요응답 Trip 전체 데이터 분석 ==="),console.log("전체 Trip 수:",T.length),T.forEach(k=>{var ge,J;if(console.log(`🚗 수요응답 Trip ${k.id}:`,{status:k.status,vehicle_id:k.vehicle_id,driver_id:k.driver_id,start_time:k.start_time,end_time:k.end_time,current_passengers:k.current_passengers,service_area_id:k.service_area_id,has_calls:!!(k.calls&&k.calls.length>0),calls_count:((ge=k.calls)==null?void 0:ge.length)||0,call_ids:((J=k.calls)==null?void 0:J.map(I=>I.id))||[]}),k.calls&&k.calls.length>0){console.log("   📞 Call 데이터 구조 (첫 번째 call):",k.calls[0]);const I=k.calls[0].id;I&&fetch(`${a}/api/on-demand-trips/calls/${I}`).then(ae=>ae.json()).then(ae=>{console.log(`   📍 Call #${I} 상세 정보:`,ae)}).catch(ae=>console.error(`Call #${I} 조회 실패:`,ae))}});const V=T.reduce((k,ge)=>(k[ge.status]=(k[ge.status]||0)+1,k),{});console.log("상태별 Trip 수:",V);const q=T.filter(k=>k.status==="IN_PROGRESS");console.log("IN_PROGRESS Trip 수:",q.length),q.length>0&&console.log("IN_PROGRESS Trip vehicle_ids:",q.map(k=>k.vehicle_id))}}catch(f){console.warn("수요응답 Trip 조회 실패:",f)}}console.log(`수요응답 Trip ${Z.value.length}개 조회 완료`)}catch(x){console.error("수요응답 Trip 조회 실패:",x)}},Ke=async()=>{try{console.log("정기노선 Trip 조회 중...");const x=new Date().toISOString().split("T")[0];try{const f=await n.getScheduledTripsApiPlanningScheduledTripsGet();f.data&&(j.value=f.data.filter(T=>T.status==="IN_PROGRESS"&&T.trip_date===x),console.log("정기노선 활성 Trip:",j.value))}catch{const T=await fetch(`${a}/api/planning/scheduled-trips?trip_date=${x}`);if(T.ok){const V=await T.json();j.value=V.filter(q=>q.status==="IN_PROGRESS"),console.log("정기노선 활성 Trip (fetch):",j.value)}}console.log(`정기노선 Trip ${j.value.length}개 조회 완료`)}catch(x){console.error("정기노선 Trip 조회 실패:",x)}},He=async x=>{var f,T,V,q,k,ge;if(!(!c.value||!x.trip_id))try{let J=null;const I=x.trip_id;if(x.tripType==="SCHEDULED"){const ae=await fetch(`${a}/api/driver/scheduled-trips/${I}/route`);if(ae.ok){const ve=await ae.text();if(ve)try{J=JSON.parse(ve),Y.value.set(x.id,{...J,is_upward:J.trip_direction==="UPWARD"||I%2===0,current_stop_index:J.current_stop_sequence||0,total_stops:((f=J.route_stops)==null?void 0:f.length)||0}),console.log(`정기노선 Trip ${I} Route API 업데이트 데이터:`,{trip_type:J.trip_type,trip_status:J.trip_status,current_node_id:J.current_node_id,current_location:[J.current_latitude,J.current_longitude],route_points_count:((T=J.route_points)==null?void 0:T.length)||0,heading_fields:{heading:J.heading,current_location_heading:(V=J.current_location)==null?void 0:V.heading,has_current_location_obj:!!J.current_location}})}catch{console.log(`정기노선 Trip ${I} 경로 파싱 실패:`,ve)}}else console.log(`정기노선 Trip ${I} 경로 API 응답 실패:`,ae.status)}else if(x.tripType==="ON_DEMAND"){const ae=await fetch(`${a}/api/driver/on-demand-trips/${I}/route`);if(ae.ok){const ve=await ae.text();if(ve)try{J=JSON.parse(ve),console.log(`수요응답 Trip ${I} Route API 업데이트 데이터:`,{trip_type:J.trip_type,trip_status:J.trip_status,current_node_id:J.current_node_id,current_location:[J.current_latitude,J.current_longitude],route_points_count:((q=J.route_points)==null?void 0:q.length)||0,heading_fields:{heading:J.heading,current_location_heading:(k=J.current_location)==null?void 0:k.heading,has_current_location_obj:!!J.current_location}})}catch{console.log(`수요응답 Trip ${I} 경로 파싱 실패:`,ve)}}else console.log(`수요응답 Trip ${I} 경로 API 응답 실패:`,ae.status)}if(J){if(J.current_latitude&&J.current_longitude&&(x.current_latitude=J.current_latitude,x.current_longitude=J.current_longitude),((ge=J.current_location)==null?void 0:ge.heading)!==void 0)x.heading=J.current_location.heading,console.log(`차량 ${x.id} heading 업데이트:`,x.heading);else if(J.heading!==void 0)x.heading=J.heading,console.log(`차량 ${x.id} heading 업데이트:`,x.heading);else{const ae=de(x,J);ae!==null&&(x.heading=ae,console.log(`차량 ${x.id} heading 계산됨:`,x.heading))}Y.value.set(x.id,{last_node_id:J.last_node_id,current_node_id:J.current_node_id,current_link_id:J.current_link_id,link_progress:J.link_progress,trip_direction:J.trip_direction,trip_status:J.trip_status,current_stop_sequence:J.current_stop_sequence,current_stop_name:J.current_stop_name,is_returning:J.trip_status==="RETURNING",route_links:J.route_links,stops:J.stops||J.route_points}),await Ee(x,J),it(x,J)&&Kt(x,J),await an()}else console.log(`차량 ${x.id} (Trip ${I}): 경로 데이터 없음`)}catch(J){console.error(`차량 ${x.id} 경로 로드 실패:`,J)}},Ee=async(x,f)=>{if(!c.value)return;const T=f.current_latitude||x.current_latitude,V=f.current_longitude||x.current_longitude;if(!T||!V)return;let q=p.value.get(x.id);if(q){const k=yt.latLng(T,V);if(q.getLatLng().distanceTo(k)>5){q.setLatLng(k);const I=x.tripStatus==="RETURNING"?"#EA580C":x.tripType==="SCHEDULED"?"#2563EB":"#059669",ae=Ht(x,I);q.setIcon(ae),N(q,x,f)}}else xe(x);pe(x.id,T,V)},it=(x,f)=>{const T=L.value.get(x.id)||0,V=Date.now();if(V-T>5e3)return L.value.set(x.id,V),!0;const q=U.value.get(x.id),k=f.current_link_id||f.current_node_id;return q!==k?(U.value.set(x.id,k),!0):!1},N=(x,f,T)=>{var k,ge;const V=f.tripType==="SCHEDULED"?"정기노선":f.tripType==="ON_DEMAND"?"수요응답":"알 수 없음",q=`
    <div class="vehicle-popup">
      <h4 class="font-semibold">${f.vehicle_number}</h4>
      <p class="text-sm text-gray-600">${V}</p>
      <p class="text-xs text-gray-500">
        위치: ${(k=T.current_latitude)==null?void 0:k.toFixed(6)}, ${(ge=T.current_longitude)==null?void 0:ge.toFixed(6)}<br>
        방향: ${f.heading||0}°<br>
        승객: ${f.current_occupancy||0}/${f.capacity||0}명<br>
        상태: ${bn(f.tripStatus)}
      </p>
    </div>
  `;x.bindPopup(q)},pe=(x,f,T)=>{if(!c.value)return;let V=u.value.get(x)||[];V.push([f,T]),V.length>20&&(V=V.slice(-20)),u.value.set(x,V);const q=g.value.get(x);if(q&&c.value.removeLayer(q),V.length>=2){const k=yt.polyline(V,{color:"#FF6600",weight:2,opacity:.6,dashArray:"3, 6",className:"trajectory-line"});k.addTo(c.value),g.value.set(x,k)}},xe=x=>{if(!c.value)return;const f=x.current_latitude,T=x.current_longitude;if(!f||!T)return;let V="#6B7280";x.tripStatus==="RETURNING"?V="#EA580C":x.tripType==="SCHEDULED"?V="#2563EB":x.tripType==="ON_DEMAND"&&(V="#059669");const q=Ht(x,V),k=yt.marker([f,T],{icon:q,zIndexOffset:1e3}),ge=x.tripType==="SCHEDULED"?"정기노선":x.tripType==="ON_DEMAND"?"수요응답":"알 수 없음",J=`
    <div class="vehicle-popup">
      <h4 class="font-semibold">${x.vehicle_number}</h4>
      <p class="text-sm text-gray-600">${ge}</p>
      <p class="text-xs text-gray-500">
        위치: ${f.toFixed(6)}, ${T.toFixed(6)}<br>
        방향: ${x.heading||0}°<br>
        승객: ${x.current_occupancy||0}/${x.capacity||0}명<br>
        상태: ${bn(x.tripStatus)}
      </p>
    </div>
  `;k.bindPopup(J),k.addTo(c.value),p.value.set(x.id,k)},Pe=x=>{var T,V;const f=x.tripType==="SCHEDULED"?"정기노선":x.tripType==="ON_DEMAND"?"수요응답":"알 수 없음";return`
    <div class="vehicle-popup">
      <h4 class="font-semibold">${x.vehicle_number}</h4>
      <p class="text-sm text-gray-600">${f}</p>
      <p class="text-xs text-gray-500">
        위치: ${(T=x.current_latitude)==null?void 0:T.toFixed(6)}, ${(V=x.current_longitude)==null?void 0:V.toFixed(6)}<br>
        방향: ${x.heading||0}°<br>
        승객: ${x.current_occupancy||0}/${x.capacity||0}명<br>
        상태: ${bn(x.tripStatus)}
      </p>
    </div>
  `},de=(x,f)=>{try{F.value||(F.value=new Map);const T=F.value.get(x.id),V=f.current_latitude,q=f.current_longitude;if(!T||!V||!q)return F.value.set(x.id,{lat:V,lng:q,timestamp:Date.now()}),null;if(ie(T.lat,T.lng,V,q)<9e-5)return null;const ge=Fe(T.lat,T.lng,V,q);return F.value.set(x.id,{lat:V,lng:q,timestamp:Date.now()}),Math.round(ge)}catch(T){return console.error("heading 계산 오류:",T),null}},ie=(x,f,T,V)=>{const q=T-x,k=V-f;return Math.sqrt(q*q+k*k)},Fe=(x,f,T,V)=>{const q=(V-f)*Math.PI/180,k=x*Math.PI/180,ge=T*Math.PI/180,J=Math.sin(q)*Math.cos(ge),I=Math.cos(k)*Math.sin(ge)-Math.sin(k)*Math.cos(ge)*Math.cos(q);return(Math.atan2(J,I)*180/Math.PI+360)%360},tt=(x,f,T)=>{if(!c.value||!f.start_node||!f.end_node)return;const V=D.value.get(x);V&&c.value.removeLayer(V);const q=f.start_node.latitude+(f.end_node.latitude-f.start_node.latitude)*T,k=f.start_node.longitude+(f.end_node.longitude-f.start_node.longitude)*T,ge=yt.divIcon({className:"progress-arrow",html:'<div style="color: #FF0000; font-size: 20px; font-weight: bold; text-shadow: 0 0 3px white;">→</div>',iconSize:[20,20],iconAnchor:[10,10]}),J=yt.marker([q,k],{icon:ge});J.addTo(c.value),D.value.set(x,J)},St=async(x,f)=>{var V,q,k,ge,J;const T=`${x}-${f}`;if(v.value.has(T)){const I=v.value.get(T);return console.log(`🔗 링크 캐시 히트 ${T}:`,{has_geojson:!!(I.geojson&&I.geojson.geometry),geojson_type:(q=(V=I.geojson)==null?void 0:V.geometry)==null?void 0:q.type,coordinates_count:(J=(ge=(k=I.geojson)==null?void 0:k.geometry)==null?void 0:ge.coordinates)==null?void 0:J.length}),I}try{if(console.log(`🔗 링크 캐시 사이즈: ${v.value.size}`),v.value.size===0){console.log("🌐 Network API에서 모든 링크 정보 로드 중...");const ae=await r.getActiveLinksApiNetworkLinksGet();ae.data?(console.log(`🌐 Network API 응답: ${ae.data.length}개 링크`),ae.data.forEach(ve=>{const se=`${ve.from_node_id}-${ve.to_node_id}`;v.value.set(se,ve)}),console.log(`🔗 링크 캐시 구축 완료: ${v.value.size}개 링크`)):console.warn("🌐 Network API 응답 데이터 없음")}const I=v.value.get(T)||null;return I||console.warn(`🔗 링크 ${T} 캐시에서 찾을 수 없음`),I}catch(I){return console.error("🌐 링크 정보 조회 실패:",I),null}},vt=x=>{var f;!c.value||!x.stops||(S.value.forEach(T=>{var V;(V=c.value)==null||V.removeLayer(T)}),S.value.clear(),(f=x.stops)==null||f.forEach(T=>{const V=yt.divIcon({className:"stop-marker",html:`
        <div class="stop-icon ${T.is_passed?"passed":""}" 
             style="background: ${T.is_passed?"#9CA3AF":"#3B82F6"}; 
                    width: 28px; height: 28px; border-radius: 50%; 
                    display: flex; align-items: center; justify-content: center;
                    border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">
          <span style="color: white; font-weight: bold; font-size: 12px;">${T.order||T.sequence||""}</span>
        </div>
      `,iconSize:[28,28],iconAnchor:[14,14]}),q=yt.marker([T.latitude,T.longitude],{icon:V}).bindPopup(`
        <b>${T.name||T.node_name}</b><br>
        순서: ${T.order||T.sequence}<br>
        ${T.arrival_time?`도착: ${Ws(T.arrival_time)}`:""}
        ${T.is_passed?'<br><span style="color: #9CA3AF;">통과됨</span>':""}
      `);q.addTo(c.value),S.value.set(T.node_id,q),x.next_node_id===T.node_id&&q.openPopup()}))},Kt=async(x,f)=>{var ge,J;if(!c.value)return;const T=m.value.get(x.id);T&&T.forEach(I=>{var ae;return(ae=c.value)==null?void 0:ae.removeLayer(I)});const V=D.value.get(x.id);V&&(c.value.removeLayer(V),D.value.delete(x.id));const q=[];if(vt(f),f.route_links&&Array.isArray(f.route_links)){console.log(`route_links 배열 처리: ${f.route_links.length}개 링크`),console.log("첫 번째 링크 구조:",JSON.stringify(f.route_links[0],null,2)),f.route_links.forEach((I,ae)=>{var ve,se,te;console.log(`Link ${ae+1} (ID: ${I.link_id}):`,{has_geojson:!!I.geojson,geojson_type:(ve=I.geojson)==null?void 0:ve.type,coordinates_count:(te=(se=I.geojson)==null?void 0:se.coordinates)==null?void 0:te.length,is_current:I.is_current,is_completed:I.is_completed})});for(const I of f.route_links){let ae;const ve=I.is_completed?"#888888":I.is_current?"#FF0000":"#0066CC",se=I.is_current?5:3,te=I.is_completed?.5:.8,le=I.is_completed?"5, 10":void 0;if(I.geojson&&I.geojson.coordinates)console.log(`링크 ${I.link_id}: Route API의 GeoJSON 사용 (${I.geojson.coordinates.length}개 점)`),ae=yt.geoJSON(I.geojson,{style:{color:ve,weight:se,opacity:te,dashArray:le}});else if(I.link_id&&I.start_node&&I.end_node){const je=await St(I.start_node.id||I.start_node.node_id,I.end_node.id||I.end_node.node_id);if(je&&je.geojson&&je.geojson.geometry)console.log(`링크 ${I.link_id}: 네트워크 API에서 GeoJSON 가져옴`),ae=yt.geoJSON(je.geojson.geometry,{style:{color:ve,weight:se,opacity:te,dashArray:le}});else{console.log(`링크 ${I.link_id}: 네트워크 API에서도 GeoJSON 없음, 직선 연결`);const _t=[[I.start_node.latitude,I.start_node.longitude],[I.end_node.latitude,I.end_node.longitude]];ae=yt.polyline(_t,{color:ve,weight:se,opacity:te,dashArray:le})}}else{console.log(`링크 ${I.link_id||"Unknown"}: 링크 정보 불완전, 직선 연결`);const je=[[I.start_node.latitude,I.start_node.longitude],[I.end_node.latitude,I.end_node.longitude]];ae=yt.polyline(je,{color:ve,weight:se,opacity:te,dashArray:le})}ae.addTo(c.value),q.push(ae),I.is_current&&f.link_progress&&tt(x.id,I,f.link_progress)}m.value.set(x.id,q),console.log(`차량 ${x.id}: ${q.length}개 링크 표시 완료`);return}const k=f.stops||f.route_points||f.waypoints||[];if(k&&Array.isArray(k)){console.log(`stops 배열 파싱: ${k.length}개 노드`);for(let I=0;I<k.length-1;I++){const ae=k[I],ve=k[I+1];if(ae.node_id&&ve.node_id){const se=await St(ae.node_id,ve.node_id);se&&se.geojson&&se.geojson.geometry&&se.geojson.geometry.coordinates?se.geojson.geometry.coordinates.forEach(le=>{Array.isArray(le)&&le.length>=2&&routePoints.push([le[1],le[0]])}):(console.log(`링크 ${ae.node_id}->${ve.node_id} GeoJSON 없음, 직선 연결`),routePoints.push([ae.latitude,ae.longitude]),I===k.length-2&&routePoints.push([ve.latitude,ve.longitude]))}}console.log(`총 ${routePoints.length}개 좌표 포인트 생성`)}else Array.isArray(f)?(console.log(`직접 배열 파싱: ${f.length}개`),routePoints=f.map(I=>I.latitude&&I.longitude?[I.latitude,I.longitude]:I.lat&&I.lng?[I.lat,I.lng]:Array.isArray(I)&&I.length>=2?[I[0],I[1]]:null).filter(Boolean)):f.coordinates?(console.log(`coordinates 배열 파싱: ${f.coordinates.length}개`),routePoints=f.coordinates.map(I=>Array.isArray(I)&&I.length>=2?[I[1],I[0]]:null).filter(Boolean)):f.points?(console.log(`points 배열 파싱: ${f.points.length}개`),routePoints=f.points.map(I=>I.latitude&&I.longitude?[I.latitude,I.longitude]:null).filter(Boolean)):f.path?(console.log(`path 배열 파싱: ${f.path.length}개`),routePoints=f.path.map(I=>I.latitude&&I.longitude?[I.latitude,I.longitude]:I.lat&&I.lng?[I.lat,I.lng]:null).filter(Boolean)):console.warn("알 수 없는 경로 데이터 형식:",f);if(routePoints.length>0){const I=currentLocation.latitude||I,ae=currentLocation.longitude||ae;let ve=-1,se=1/0;if(f.route_links){let te=0;for(const le of f.route_links){const je=((J=(ge=le.geojson)==null?void 0:ge.coordinates)==null?void 0:J.length)||2;if(le.is_current){ve=te+Math.floor(je*linkProgress);break}if(le.is_completed)te+=je;else break}}if(ve===-1&&routePoints.forEach((te,le)=>{const je=Math.sqrt(Math.pow(te[0]-I,2)+Math.pow(te[1]-ae,2));je<se&&(se=je,ve=le)}),console.log(`차량 ${x.id}: 경로 포인트 ${routePoints.length}개, 현재 인덱스 ${ve}`),ve>0){const te=yt.polyline(routePoints.slice(0,ve+1),{color:"#9CA3AF",weight:3,opacity:.6,dashArray:"8, 8"});te.addTo(c.value),q.push(te),console.log(`이전 경로 추가: ${ve+1}개 포인트`)}if(ve<routePoints.length-1&&ve>=0){const te=x.tripType==="SCHEDULED"?"#3B82F6":"#10B981",le=yt.polyline(routePoints.slice(ve),{color:te,weight:4,opacity:.8});le.addTo(c.value),q.push(le),console.log(`미래 경로 추가: ${routePoints.length-ve}개 포인트, 색상: ${te}`)}if(ve===-1){const te=x.tripType==="SCHEDULED"?"#3B82F6":"#10B981",le=yt.polyline(routePoints,{color:te,weight:4,opacity:.8});le.addTo(c.value),q.push(le),console.log(`전체 경로 추가: ${routePoints.length}개 포인트, 색상: ${te}`)}m.value.set(x.id,q)}},Ht=(x,f)=>{const T=x.heading||0;return console.log(`차량 ${x.id} 아이콘 생성 - heading: ${T} (vehicle.heading: ${x.heading})`),yt.divIcon({html:`
      <div style="transform: rotate(${T}deg); transform-origin: center; filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.5));">
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
    `,className:"vehicle-icon",iconSize:[40,40],iconAnchor:[20,20]})};let ei=!1;const an=async()=>{var x;if(ei){console.log("updateRouteDiagram 이미 실행 중, 건너뛰기");return}ei=!0,console.log("=== updateRouteDiagram 시작 ===");try{const f=new Map;let T=[];try{T=(await r.getActiveRoutesApiNetworkRoutesGet()).data||[],console.log(`전체 노선 ${T.length}개 로드`)}catch(I){console.error("전체 노선 정보 로드 실패:",I),T=[{id:1,name:"강서01",node_sequence:[134,135,136,137,138,139,140,141,142,143,144,145]}];const ae=[{id:134,name:"강서경찰서",sequence:0},{id:135,name:"동양라이트",sequence:1},{id:136,name:"스마트빌리지",sequence:2},{id:137,name:"대저중앙초.가락중",sequence:3},{id:138,name:"에코3고등학교",sequence:4},{id:139,name:"에코3중학교.에코4초등학교",sequence:5},{id:140,name:"에코3중학교.에코4초등학교",sequence:6},{id:141,name:"에코3고등학교",sequence:7},{id:142,name:"대저중앙초.가락중",sequence:8},{id:143,name:"스마트빌리지",sequence:9},{id:144,name:"동양라이트",sequence:10},{id:145,name:"강서경찰서",sequence:11}];f.set(1,{routeId:1,routeName:"강서01",stops:ae,buses:[]})}const V="on-demand-route";if(Z.value.length>0){const I={routeId:V,routeName:"수요응답",stops:[],buses:[]},ae=new Set,ve=[];for(const se of Z.value)se.start_node&&!ae.has(se.start_node.id)&&(ae.add(se.start_node.id),ve.push({id:se.start_node.id,name:se.start_node.name||`정류장 ${se.start_node.id}`,latitude:se.start_node.latitude,longitude:se.start_node.longitude,sequence:ve.length})),se.end_node&&!ae.has(se.end_node.id)&&(ae.add(se.end_node.id),ve.push({id:se.end_node.id,name:se.end_node.name||`정류장 ${se.end_node.id}`,latitude:se.end_node.latitude,longitude:se.end_node.longitude,sequence:ve.length}));I.stops=ve;for(const se of Z.value){const te=P.value.find(le=>le.id===se.vehicle_id);if(te){const le=Y.value.get(te.id);let je=50;le&&le.link_progress!==void 0?je=le.link_progress:se.status==="PICKING_UP"?je=25:se.status==="IN_TRANSIT"&&(je=75),I.buses.push({vehicleId:te.id,vehicleNumber:te.vehicle_number||te.id.toString(),position:Math.min(Math.max(je,0),100),direction:"forward",tripId:se.id,tripType:"ON_DEMAND",tripStatus:se.status,currentStop:"",occupancy:te.current_occupancy||0,capacity:te.capacity||0})}}I.stops.length>0&&f.set(V,I)}const q=new Map;for(const I of j.value)I.vehicle_id&&I.status!=="SCHEDULED"&&I.status!=="COMPLETED"&&(q.set(I.vehicle_id,{tripId:I.id,tripType:"SCHEDULED",routeId:I.route_id}),console.log(`정기노선 Trip #${I.id} -> 차량 ${I.vehicle_id}`));for(const I of Z.value)I.vehicle_id&&I.status!=="SCHEDULED"&&I.status!=="COMPLETED"&&I.status!=="CANCELLED"&&(q.set(I.vehicle_id,{tripId:I.id,tripType:"ON_DEMAND",routeId:I.route_id}),console.log(`수요응답 Trip #${I.id} -> 차량 ${I.vehicle_id} (기존 Trip 덮어쓰기)`));console.log("활성 Trip 매핑:",Array.from(q.entries()).map(([I,ae])=>{const ve=P.value.find(se=>se.id===I);return`차량 ${ve==null?void 0:ve.vehicle_number}(${I}): Trip #${ae.tripId} (${ae.tripType})`}));for(const I of j.value){if(!I.route_id||!I.vehicle_id)continue;const ae=q.get(I.vehicle_id);if(!ae||ae.tripId!==I.id){console.log(`Trip #${I.id}는 활성 상태가 아니거나 다른 Trip이 우선, 건너뛰기`);continue}const ve=I.route_id;if(!f.has(ve)){console.log(`새로운 노선 ${ve} 처리 시작`);let le=ye.value.get(ve);if(le?le={...le,buses:[]}:(le={routeId:ve,routeName:"",stops:[],buses:[]},ye.value.set(ve,le)),f.set(ve,le),!le.stops||le.stops.length===0){const je=T.find(_t=>_t.id===ve);je&&(le.routeName=je.name||je.route_name||`${ve}번 노선`);try{const _t=await fetch(`${a}/api/network/routes/${ve}/details`);if(_t.ok){const pt=await _t.json();console.log(`Route ${ve} 상세 정보:`,pt),pt.route_name&&(le.routeName=pt.route_name),pt.nodes&&pt.nodes.length>0&&(le.stops=pt.nodes.map((ut,mt)=>({id:ut.node_id||ut.id||mt,name:ut.node_name||ut.name||`정류장 ${mt+1}`,sequence:ut.sequence!==void 0?ut.sequence:mt,type:ut.node_type||"STATION",latitude:ut.latitude,longitude:ut.longitude})),le.stops.sort((ut,mt)=>ut.sequence-mt.sequence),console.log(`노선 ${ve} (${le.routeName})의 정류장 ${le.stops.length}개:`,le.stops.map(ut=>ut.name)),ye.value.set(ve,le))}else console.error(`Route ${ve} details API 실패: ${_t.status}`)}catch(_t){console.error(`Route ${ve} details API 호출 실패:`,_t)}le.routeName||(le.routeName=I.route_name||`${ve}번 노선`)}}const se=f.get(ve),te=P.value.find(le=>le.id===I.vehicle_id);if(te&&se&&se.stops.length>0){const le=Y.value.get(te.id);let je=50,_t="forward";if(le&&le.last_node_id){const ut=se.stops.findIndex(mt=>mt.id===le.last_node_id||mt.node_id===le.last_node_id);if(ut!==-1){if(je=ut/Math.max(se.stops.length-1,1)*100,le.link_progress!==void 0&&le.link_progress!==null){const mt=100/Math.max(se.stops.length-1,1),Dt=le.link_progress/100*mt;je=Math.min(100,je+Dt)}(le.trip_direction==="DOWNWARD"||le.is_returning)&&(_t="backward",je=100-je),console.log(`차량 ${te.vehicle_number} Route API 위치:`,{last_node_id:le.last_node_id,lastNodeIndex:ut,link_progress:le.link_progress,position:je.toFixed(1),direction:_t,trip_status:le.trip_status})}else if(te.current_latitude&&te.current_longitude){let mt=0,Dt=1/0;se.stops.forEach((Zt,On)=>{if(Zt.latitude&&Zt.longitude){const Pa=Math.sqrt(Math.pow(te.current_latitude-Zt.latitude,2)+Math.pow(te.current_longitude-Zt.longitude,2));Pa<Dt&&(Dt=Pa,mt=On)}}),je=mt/Math.max(se.stops.length-1,1)*100}}else if(te.current_latitude&&te.current_longitude){let ut=0,mt=1/0;se.stops.forEach((Dt,Zt)=>{if(Dt.latitude&&Dt.longitude){const On=Math.sqrt(Math.pow(te.current_latitude-Dt.latitude,2)+Math.pow(te.current_longitude-Dt.longitude,2));On<mt&&(mt=On,ut=Zt)}}),je=ut/Math.max(se.stops.length-1,1)*100}const pt={vehicleId:te.id,vehicleNumber:te.vehicle_number||te.id.toString(),position:Math.min(Math.max(je,0),100),direction:_t,tripId:I.id,tripType:"SCHEDULED",tripStatus:I.status,currentStop:I.current_stop_name||"",occupancy:te.current_occupancy||0,capacity:te.capacity||0};se.buses.push(pt)}}for(const I of Z.value){const ae=P.value.find(le=>le.id===I.vehicle_id);if(!ae)continue;const ve=q.get(ae.id);if(!ve||ve.tripId!==I.id){console.log(`수요응답 Trip #${I.id}는 차량 ${ae.vehicle_number}(${ae.id})의 활성 Trip이 아님, 건너뛰기`);continue}if(I.status==="SCHEDULED"||I.status==="COMPLETED"||I.status==="CANCELLED")continue;let se=null;const te=Y.value.get(ae.id);if(I.route_id&&(se=f.get(I.route_id)),se||(se=Array.from(f.values())[0]),se&&se.stops.length>0){let le=50;console.log(`🔍 수요응답 차량 ${ae.vehicle_number} (ID: ${ae.id}) 디버깅:`),console.log("  - odTrip.route_id:",I.route_id),console.log("  - targetRoute.routeId:",se==null?void 0:se.routeId),console.log("  - targetRoute.routeName:",se==null?void 0:se.routeName),console.log("  - vehicleRoute 전체:",te),console.log("  - last_node_id:",te==null?void 0:te.last_node_id),console.log("  - current_node_id:",te==null?void 0:te.current_node_id),console.log("  - current_link_id:",te==null?void 0:te.current_link_id),console.log("  - link_progress:",te==null?void 0:te.link_progress),console.log("  - trip_status:",te==null?void 0:te.trip_status),console.log("  - targetRoute.stops:",se.stops.map(pt=>({id:pt.id,name:pt.name})));const je=(te==null?void 0:te.last_node_id)||(te==null?void 0:te.current_node_id);if(te&&je){const pt=se.stops.findIndex(ut=>ut.id===je||ut.node_id===je);if(pt!==-1){const ut=se.stops.length>2&&se.stops[0].id===se.stops[se.stops.length-1].id;if(ut&&pt===se.stops.length-1?le=99:le=pt/Math.max(se.stops.length-1,1)*100,te.link_progress!==void 0&&te.link_progress!==null&&te.link_progress>0){const mt=100/Math.max(se.stops.length-1,1),Dt=te.link_progress/100*mt;le=Math.min(100,le+Dt)}console.log(`수요응답 차량 ${ae.vehicle_number} 노드 기반 위치:`,{node_id_used:je,node_name:(x=se.stops[pt])==null?void 0:x.name,lastNodeIndex:pt,total_stops:se.stops.length,is_circular:ut,link_progress:te.link_progress,calculated_position:le})}else if(ae.current_latitude&&ae.current_longitude){let ut=1/0,mt=0;se.stops.forEach((Dt,Zt)=>{if(Dt.latitude&&Dt.longitude){const On=Math.sqrt(Math.pow(ae.current_latitude-Dt.latitude,2)+Math.pow(ae.current_longitude-Dt.longitude,2));On<ut&&(ut=On,mt=Zt)}}),le=mt/Math.max(se.stops.length-1,1)*100,console.log(`수요응답 차량 ${ae.vehicle_number} GPS 기반 위치:`,{closestIndex:mt,calculated_position:le})}}else if(ae.current_latitude&&ae.current_longitude){let pt=1/0,ut=0;se.stops.forEach((mt,Dt)=>{if(mt.latitude&&mt.longitude){const Zt=Math.sqrt(Math.pow(ae.current_latitude-mt.latitude,2)+Math.pow(ae.current_longitude-mt.longitude,2));Zt<pt&&(pt=Zt,ut=Dt)}}),le=ut/Math.max(se.stops.length-1,1)*100,console.log(`수요응답 차량 ${ae.vehicle_number} GPS 기반 위치 (대체):`,{closestIndex:ut,calculated_position:le})}else I.status==="PICKING_UP"?le=30:I.status==="IN_TRANSIT"?le=70:I.status==="DROPPING_OFF"&&(le=90),console.log(`수요응답 차량 ${ae.vehicle_number} 상태 기반 위치:`,{status:I.status,calculated_position:le});const _t={vehicleId:ae.id,vehicleNumber:ae.vehicle_number||ae.id.toString(),position:Math.min(Math.max(le,0),100),direction:"forward",tripId:I.id,tripType:"ON_DEMAND",tripStatus:I.status,currentStop:(te==null?void 0:te.current_stop_name)||"",occupancy:ae.current_occupancy||0,capacity:ae.capacity||0};se.buses.push(_t),console.log(`수요응답 차량 ${ae.vehicle_number}(ID: ${ae.id}) 노선도에 추가 완료:`,{position:le.toFixed(1),status:I.status,routeName:se.routeName,last_node_id:te==null?void 0:te.last_node_id,current_link_id:te==null?void 0:te.current_link_id,link_progress:te==null?void 0:te.link_progress})}}f.forEach(I=>{I.stops.length===0&&console.warn(`노선 ${I.routeId}에 정리장 정보가 없습니다`)});const k=Array.from(f.values()),ge=new Set,J=k.filter(I=>ge.has(I.routeId)?(console.warn(`중복된 노선 ${I.routeId} 발견, 제거`),!1):(ge.add(I.routeId),!0));ue.value=J,console.log("노선도 데이터 생성 완료:",ue.value.length,"개 노선"),console.log("노선 목록:",ue.value.map(I=>`${I.routeId}: ${I.routeName}(${I.stops.length}개 정류장, ${I.buses.length}대 버스)`)),console.log("routeMap 크기:",f.size,"uniqueRoutes 수:",k.length,"filtered 수:",J.length)}catch(f){console.error("노선도 데이터 업데이트 실패:",f)}finally{ei=!1}},Di=async()=>{if(!c.value)return;const x=new Set(H.value.map(T=>T.id)),f=new Set(p.value.keys());for(const T of f)if(!x.has(T)){const V=p.value.get(T);V&&(c.value.removeLayer(V),p.value.delete(T));const q=m.value.get(T);q&&(q.forEach(ge=>{var J;return(J=c.value)==null?void 0:J.removeLayer(ge)}),m.value.delete(T));const k=g.value.get(T);k&&(c.value.removeLayer(k),g.value.delete(T))}H.value.forEach(T=>{if(T.current_latitude&&T.current_longitude){const V=p.value.get(T.id);if(!V)xe(T),He(T);else{const q=yt.latLng(T.current_latitude,T.current_longitude);V.setLatLng(q);const k=Pe(T);V.setPopupContent(k),He(T)}}}),console.log(`${H.value.length}대의 차량 차등 업데이트 완료`)},es=async()=>{z.value=!0,E.value=null;try{await ti(),console.log("수동 새로고침 완료")}catch(x){console.error("수동 새로고침 실패:",x),E.value=x.message||"데이터 로드 중 오류가 발생했습니다."}finally{z.value=!1}},fn=async()=>{b.value=!0;try{await ti(),Q.value>1e3&&console.log("백그라운드 업데이트 완료")}catch(x){console.error("백그라운드 업데이트 실패:",x)}finally{b.value=!1}},pn=x=>{if(!c.value||!d.value)return;c.value.removeLayer(d.value);let f;switch(x){case"dark":f=yt.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{attribution:"© OpenStreetMap contributors © CARTO",maxZoom:19,subdomains:"abcd"});break;case"light":f=yt.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",{attribution:"© OpenStreetMap contributors © CARTO",maxZoom:19,subdomains:"abcd"});break;case"color":f=yt.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",{attribution:"© OpenStreetMap contributors © CARTO",maxZoom:19,subdomains:"abcd"});break;case"satellite":f=yt.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"© Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN",maxZoom:19});break}f.addTo(c.value),d.value=f,l.value=x,h.value=!1},ti=async()=>{await fe(),await Promise.all([Ae(),Ke(),_e()]),await Di(),await an(),re.value=new Date().toLocaleString("ko-KR")},ni=x=>{Me.value.has(x)?Me.value.delete(x):Me.value.add(x)},ts=()=>{Be.value=null,Qe.value=null,Ce.value={pedestrians:0,vehicles:0,bicycles:0}},bn=x=>{switch(x){case"SCHEDULED":return"예약됨";case"IN_PROGRESS":return"운행중";case"RETURNING":return"차고지 복귀중";case"COMPLETED":return"완료";case"CANCELLED":return"취소됨";default:return"알 수 없음"}},ns=(x,f)=>!x||!f?"N/A":`${x.toFixed(4)}, ${f.toFixed(4)}`,Gs=()=>{console.log(`업데이트 주기를 ${Q.value}ms로 변경`),w&&clearInterval(w),w=setInterval(fn,Q.value)},ft=x=>x.tripType==="ON_DEMAND"?Z.value.find(f=>f.vehicle_id===x.id):x.tripType==="SCHEDULED"?j.value.find(f=>f.vehicle_id===x.id):null,is=x=>({SCHEDULED:"text-blue-600",IN_PROGRESS:"text-green-600 font-medium",RETURNING:"text-orange-600 font-medium",COMPLETED:"text-gray-500",CANCELLED:"text-red-600"})[x||""]||"text-gray-500",Ws=x=>{if(!x)return"-";try{return new Date(x).toLocaleString("ko-KR",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return x}},Li=x=>{if(!x)return"-";try{return x.match(/^\d{2}:\d{2}$/)?x:new Date(x).toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return x}},y=x=>{if(x.start_node&&typeof x.start_node=="object")return x.start_node.name||`정류장 #${x.start_node.id}`;if(x.start_node_id)return`정류장 #${x.start_node_id}`;const f=x.pickup_address||x.origin_address||x.from_address;if(f)return f;const T=x.pickup_latitude||x.pickup_lat||x.origin_latitude||x.origin_lat,V=x.pickup_longitude||x.pickup_lng||x.pickup_lon||x.origin_longitude||x.origin_lng||x.origin_lon;return T!==void 0&&V!==void 0&&T!==null&&V!==null?`${Number(T).toFixed(4)}, ${Number(V).toFixed(4)}`:"위치 정보 없음"},O=x=>{if(x.end_node&&typeof x.end_node=="object")return x.end_node.name||`정류장 #${x.end_node.id}`;if(x.end_node_id)return`정류장 #${x.end_node_id}`;const f=x.dropoff_address||x.destination_address||x.to_address;if(f)return f;const T=x.dropoff_latitude||x.dropoff_lat||x.destination_latitude||x.destination_lat,V=x.dropoff_longitude||x.dropoff_lng||x.dropoff_lon||x.destination_longitude||x.destination_lng||x.destination_lon;return T!==void 0&&V!==void 0&&T!==null&&V!==null?`${Number(T).toFixed(4)}, ${Number(V).toFixed(4)}`:"위치 정보 없음"},$=x=>{if(!x)return"-";try{const f=new Date(x),V=new Date().getTime()-f.getTime(),q=Math.floor(V/6e4);if(q<60)return`${q}분`;{const k=Math.floor(q/60),ge=q%60;return`${k}시간 ${ge}분`}}catch{return"-"}},W=Dl(),B=async x=>{if(!x.trip_id){W.warning("Trip ID가 없습니다.");return}if(confirm(`차량 ${x.vehicle_number}의 운행을 중단하시겠습니까?\\n\\n운행이 완료 처리되며 차량이 차고지로 복귀합니다.`))try{b.value=!0;const T=x.tripType||"SCHEDULED";console.log(`차량 ${x.id}: IN_PROGRESS → COMPLETED 상태 전환 시도`);const V=await fetch(`${a}/api/planning/trips/${x.trip_id}/status?trip_type=${T}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:"COMPLETED"})});if(V.ok)console.log(`차량 ${x.id} 운행 완료 처리됨`),await fn(),W.success("운행이 완료 처리되었습니다.");else{const q=await V.text();if(console.error("운행완료 처리 실패:",V.status,q),V.status===400&&q.includes("상태 전환")){console.log("CANCELLED 상태로 시도");const k=await fetch(`${a}/api/planning/trips/${x.trip_id}/status?trip_type=${T}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:"CANCELLED"})});if(k.ok)console.log(`차량 ${x.id} 운행 취소됨`),await fn(),W.warning("운행이 취소되었습니다.");else{const ge=await k.text();console.error("운행취소도 실패:",k.status,ge),W.error(`운행중단 실패: COMPLETED 전환 실패 - ${q}, CANCELLED 전환 실패 - ${ge}`)}}else W.error(`운행중단 실패: ${V.status} - ${q}`)}}catch(T){console.error("운행중단 오류:",T),W.error(`운행중단 중 오류가 발생했습니다: ${T.message}`)}finally{b.value=!1}},he=async x=>{if(!x.trip_id){W.warning("Trip ID가 없습니다.");return}if(confirm(`차량 ${x.vehicle_number}의 복귀를 완료하시겠습니까?`))try{if(b.value=!0,x.tripType==="ON_DEMAND"){const T=await fetch(`${a}/api/driver/trips/${x.trip_id}/return-complete`,{method:"POST",headers:{"Content-Type":"application/json"}});if(T.ok)console.log(`수요응답 차량 ${x.id} 복귀 완료`),await fn(),W.success("복귀가 완료되었습니다.");else{const V=await T.text();console.error("복귀완료 실패:",T.status,V),W.error(`복귀완료 실패: ${T.status} - ${V}`)}}else{const T=x.tripType||"SCHEDULED",V=await fetch(`${a}/api/planning/trips/${x.trip_id}/status?trip_type=${T}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:"COMPLETED"})});if(V.ok)console.log(`정기노선 차량 ${x.id} 복귀 완료`),await fn(),W.success("복귀가 완료되었습니다.");else{const q=await V.text();console.error("복귀완료 실패:",V.status,q),W.error(`복귀완료 실패: ${V.status} - ${q}`)}}}catch(T){console.error("복귀완료 오류:",T),W.error(`복귀완료 중 오류가 발생했습니다: ${T.message}`)}finally{b.value=!1}},Se=x=>{x===1?Ie.value=!Ie.value:x===2?We.value=!We.value:x===3&&(at.value=!at.value)},De=x=>{x===1?(Je.value=!1,me.value&&me.value.pause()):x===2?(C.value=!1,ce.value&&ce.value.pause()):x===3&&(lt.value=!1,Ue.value&&Ue.value.pause())},we=(x,f)=>{if(x.target.closest(".pip-header")){Ne.value=f;let T;if(f===1?T=ze.value:f===2?T=Re.value:f===3&&(T=X.value),T){const V=T.getBoundingClientRect();ct.value={x:x.clientX-V.left,y:x.clientY-V.top},document.addEventListener("mousemove",Ye),document.addEventListener("mouseup",Ze)}}},Ye=x=>{if(Ne.value!==null){let f;if(Ne.value===1?f=ze.value:Ne.value===2?f=Re.value:Ne.value===3&&(f=X.value),f){const T=x.clientX-ct.value.x,V=x.clientY-ct.value.y,q=window.innerWidth-f.offsetWidth,k=window.innerHeight-f.offsetHeight;f.style.left=`${Math.max(0,Math.min(T,q))}px`,f.style.top=`${Math.max(0,Math.min(V,k))}px`}}},Ze=()=>{Ne.value=null,document.removeEventListener("mousemove",Ye),document.removeEventListener("mouseup",Ze)},qe=()=>{setTimeout(()=>{me.value&&(me.value.currentTime=0,me.value.play())},100),setTimeout(()=>{ce.value&&(ce.value.currentTime=5,ce.value.play())},500),setTimeout(()=>{Ue.value&&(Ue.value.currentTime=10,Ue.value.play())},1e3)};return qo(async()=>{z.value=!0;try{Xe(),await ti(),console.log("초기 데이터 로드 완료")}catch(x){console.error("초기 데이터 로드 실패:",x),E.value=x.message||"데이터 로드 중 오류가 발생했습니다."}finally{z.value=!1}qe(),w=setInterval(fn,Q.value)}),Cl(()=>{w&&clearInterval(w),c.value&&c.value.remove()}),(x,f)=>(Oe(),Ve("div",lm,[M("div",cm,[f[22]||(f[22]=M("h1",{class:"text-lg font-semibold text-gray-700"},"실시간 차량 위치 추적",-1)),M("div",dm,[M("div",um,[f[15]||(f[15]=M("div",{class:"w-3 h-3 bg-blue-500 rounded-full"},null,-1)),M("span",hm,"정기노선 ("+Te(ne.value)+"대)",1)]),M("div",fm,[f[16]||(f[16]=M("div",{class:"w-3 h-3 bg-green-500 rounded-full"},null,-1)),M("span",pm,"수요응답 ("+Te(oe.value)+"대)",1)]),M("div",mm,[f[17]||(f[17]=M("div",{class:"w-3 h-3 bg-orange-500 rounded-full"},null,-1)),M("span",gm,"차고지 복귀 중 ("+Te(ee.value)+"대)",1)]),M("div",_m,[f[18]||(f[18]=M("div",{class:"w-3 h-3 bg-gray-400 rounded-full"},null,-1)),M("span",vm,"전체 차량 ("+Te(P.value.length)+"대)",1)]),M("div",xm,[M("span",null,"마지막 업데이트: "+Te(re.value),1),M("div",{class:Tt(["w-2 h-2 rounded-full transition-all duration-300",b.value?"bg-blue-500 animate-pulse":"bg-transparent"]),title:"업데이트 상태"},null,2)]),M("div",Mm,[f[21]||(f[21]=M("label",{class:"text-sm text-gray-600"},"업데이트 주기:",-1)),Wn(M("select",{"onUpdate:modelValue":f[0]||(f[0]=T=>Q.value=T),onChange:Gs,class:"text-sm border border-gray-300 rounded px-2 py-1"},f[19]||(f[19]=[M("option",{value:1e3},"1초 (실시간)",-1),M("option",{value:3e3},"3초",-1),M("option",{value:5e3},"5초",-1),M("option",{value:1e4},"10초",-1),M("option",{value:3e4},"30초",-1)]),544),[[Pl,Q.value]]),Q.value===1e3?(Oe(),Ve("div",Sm,f[20]||(f[20]=[M("span",null,"⚡ 실시간 모드",-1)]))):ht("",!0),M("button",{onClick:es,disabled:z.value||b.value,class:"px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 disabled:opacity-50",style:{"min-width":"100px"}},Te(z.value?"로딩 중...":"새로고침"),9,ym)])])]),M("div",Em,[M("div",Tm,[ue.value.length>0?(Oe(),Ve("div",bm,[M("div",Am,[(Oe(!0),Ve(ii,null,si(ue.value,T=>(Oe(),Ve("div",{key:T.routeId,class:"vertical-route-diagram"},[M("div",wm,[M("div",Rm,[M("span",Cm,Te(T.routeName.replace(/[^0-9]/g,"")||"01"),1),M("span",Pm,Te(T.routeName.includes("순환")?"순환":"일반"),1)])]),M("div",Dm,[f[28]||(f[28]=M("div",{class:"vertical-track center-track"},null,-1)),(Oe(!0),Ve(ii,null,si(T.stops,(V,q)=>(Oe(),Ve("div",{key:`stop-${V.id}`,class:Tt(["vertical-stop",{"is-terminal":q===0||q===T.stops.length-1,"has-bus":T.buses.some(k=>Math.abs(k.position-q/Math.max(T.stops.length-1,1)*100)<5)}]),style:Ua({top:`${q/Math.max(T.stops.length-1,1)*100}%`}),title:V.name},[f[23]||(f[23]=M("div",{class:"vertical-stop-dot"},[M("div",{class:"stop-dot-inner"})],-1)),M("div",Im,[M("div",Um,Te(V.name),1),M("div",Nm,Te(V.id),1)])],14,Lm))),128)),(Oe(!0),Ve(ii,null,si(T.buses,V=>(Oe(),Ve("div",{key:`bus-${V.vehicleId}`,class:Tt(["vertical-bus-marker",{scheduled:V.tripType==="SCHEDULED","on-demand":V.tripType==="ON_DEMAND",returning:V.tripStatus==="RETURNING"}]),style:Ua({top:`${V.position}%`}),title:`차량 ${V.vehicleNumber} (${V.tripType==="SCHEDULED"?"정기노선":"수요응답"})`},[M("div",Om,[M("div",Bm,[(Oe(),Ve("svg",zm,[M("rect",{x:"4",y:"8",width:"24",height:"16",rx:"4",fill:V.tripStatus==="RETURNING"?"#EA580C":V.tripType==="SCHEDULED"?"#2563EB":"#059669"},null,8,km),f[24]||(f[24]=M("rect",{x:"6",y:"10",width:"8",height:"6",rx:"1",fill:"white",opacity:"0.9"},null,-1)),f[25]||(f[25]=M("rect",{x:"16",y:"10",width:"8",height:"6",rx:"1",fill:"white",opacity:"0.9"},null,-1)),f[26]||(f[26]=M("rect",{x:"8",y:"18",width:"2",height:"3",fill:"white"},null,-1)),f[27]||(f[27]=M("rect",{x:"22",y:"18",width:"2",height:"3",fill:"white"},null,-1))]))]),M("div",{class:Tt(["bus-marker-number",{scheduled:V.tripType==="SCHEDULED","on-demand":V.tripType==="ON_DEMAND",returning:V.tripStatus==="RETURNING"}])},Te(V.vehicleNumber),3)])],14,Fm))),128))])]))),128))])])):ht("",!0)]),M("div",Hm,[M("div",{ref_key:"mapContainer",ref:o,class:"w-full h-full"},null,512),M("div",Vm,[M("div",{class:"map-style-header",onClick:f[1]||(f[1]=T=>h.value=!h.value)},[f[30]||(f[30]=M("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"},[M("path",{"fill-rule":"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z","clip-rule":"evenodd"})],-1)),f[31]||(f[31]=M("span",null,"지도 스타일",-1)),(Oe(),Ve("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",class:Tt({"rotate-180":h.value})},f[29]||(f[29]=[M("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"},null,-1)]),2))]),Wn(M("div",Gm,[M("button",{onClick:f[2]||(f[2]=T=>pn("light")),class:Tt(["style-option",{active:l.value==="light"}])},f[32]||(f[32]=[M("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"},[M("path",{"fill-rule":"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z","clip-rule":"evenodd"})],-1),M("span",null,"라이트",-1),M("span",{class:"style-desc"},"깔끔하고 밝은 스타일",-1)]),2),M("button",{onClick:f[3]||(f[3]=T=>pn("dark")),class:Tt(["style-option",{active:l.value==="dark"}])},f[33]||(f[33]=[M("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"},[M("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})],-1),M("span",null,"다크",-1),M("span",{class:"style-desc"},"어두운 테마",-1)]),2),M("button",{onClick:f[4]||(f[4]=T=>pn("color")),class:Tt(["style-option",{active:l.value==="color"}])},f[34]||(f[34]=[M("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"},[M("path",{"fill-rule":"evenodd",d:"M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z","clip-rule":"evenodd"})],-1),M("span",null,"컬러",-1),M("span",{class:"style-desc"},"컬러풀한 스타일",-1)]),2),M("button",{onClick:f[5]||(f[5]=T=>pn("satellite")),class:Tt(["style-option",{active:l.value==="satellite"}])},f[35]||(f[35]=[M("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"},[M("path",{"fill-rule":"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z","clip-rule":"evenodd"})],-1),M("span",null,"위성",-1),M("span",{class:"style-desc"},"위성 사진",-1)]),2)],512),[[Ii,h.value]])]),Wn(M("div",{ref_key:"pip1Container",ref:ze,class:Tt(["pip-video-container pip-1",{"pip-minimized":Ie.value,"pip-selected":Be.value===0}]),onMousedown:f[8]||(f[8]=T=>we(T,1))},[M("div",Wm,[f[39]||(f[39]=M("span",{class:"pip-title"},"3D 시뮬레이션 (Chase)",-1)),M("div",Xm,[M("button",{onClick:f[6]||(f[6]=T=>Se(1)),class:"pip-btn",title:"크기 조절"},[Ie.value?(Oe(),Ve("svg",$m,f[36]||(f[36]=[M("path",{d:"M3 3v10h10V3H3zm9 9H4V4h8v8z"},null,-1)]))):(Oe(),Ve("svg",qm,f[37]||(f[37]=[M("path",{d:"M4 4h3v1H5v2H4V4zm5 0h3v3h-1V5H9V4zM4 9h1v2h2v1H4V9zm8 0h1v3H9v-1h3V9z"},null,-1)])))]),M("button",{onClick:f[7]||(f[7]=T=>De(1)),class:"pip-btn",title:"닫기"},f[38]||(f[38]=[M("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},[M("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})],-1)]))])]),M("div",Ym,[(Oe(),Ia(Xo,{key:`pip1-${Ie.value}`,class:"w-full h-full",cameraMode:"chase"}))])],34),[[Ii,Je.value]]),Wn(M("div",{ref_key:"pip2Container",ref:Re,class:Tt(["pip-video-container pip-2",{"pip-minimized":We.value,"pip-selected":Be.value===1}]),onMousedown:f[11]||(f[11]=T=>we(T,2))},[M("div",jm,[f[43]||(f[43]=M("span",{class:"pip-title"},"3D 시뮬레이션 (Top)",-1)),M("div",Km,[M("button",{onClick:f[9]||(f[9]=T=>Se(2)),class:"pip-btn",title:"크기 조절"},[We.value?(Oe(),Ve("svg",Zm,f[40]||(f[40]=[M("path",{d:"M3 3v10h10V3H3zm9 9H4V4h8v8z"},null,-1)]))):(Oe(),Ve("svg",Jm,f[41]||(f[41]=[M("path",{d:"M4 4h3v1H5v2H4V4zm5 0h3v3h-1V5H9V4zM4 9h1v2h2v1H4V9zm8 0h1v3H9v-1h3V9z"},null,-1)])))]),M("button",{onClick:f[10]||(f[10]=T=>De(2)),class:"pip-btn",title:"닫기"},f[42]||(f[42]=[M("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},[M("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})],-1)]))])]),M("div",Qm,[(Oe(),Ia(Xo,{key:`pip2-${We.value}`,class:"w-full h-full",cameraMode:"top"}))])],34),[[Ii,C.value]]),Wn(M("div",{ref_key:"pip3Container",ref:X,class:Tt(["pip-video-container pip-3",{"pip-minimized":at.value,"pip-selected":Be.value===2}]),onMousedown:f[14]||(f[14]=T=>we(T,3))},[M("div",eg,[f[47]||(f[47]=M("span",{class:"pip-title"},"차량 내부 영상",-1)),M("div",tg,[M("button",{onClick:f[12]||(f[12]=T=>Se(3)),class:"pip-btn",title:"크기 조절"},[at.value?(Oe(),Ve("svg",ng,f[44]||(f[44]=[M("path",{d:"M3 3v10h10V3H3zm9 9H4V4h8v8z"},null,-1)]))):(Oe(),Ve("svg",ig,f[45]||(f[45]=[M("path",{d:"M4 4h3v1H5v2H4V4zm5 0h3v3h-1V5H9V4zM4 9h1v2h2v1H4V9zm8 0h1v3H9v-1h3V9z"},null,-1)])))]),M("button",{onClick:f[13]||(f[13]=T=>De(3)),class:"pip-btn",title:"닫기"},f[46]||(f[46]=[M("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},[M("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})],-1)]))])]),M("video",{ref_key:"video3Player",ref:Ue,class:"pip-video",src:"/generated.mp4",controls:"",autoplay:"",loop:"",muted:""},null,512)],34),[[Ii,lt.value]]),Qe.value&&Be.value!==null?(Oe(),Ve("div",{key:0,class:Tt(["vehicle-info-panel",{"panel-expanded":Be.value!==null}])},[M("div",{class:"panel-header"},[f[49]||(f[49]=M("h3",{class:"panel-title"},"차량 상세 정보",-1)),M("button",{onClick:ts,class:"close-btn"},f[48]||(f[48]=[M("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"},[M("path",{d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"})],-1)]))]),M("div",sg,[M("div",rg,[f[54]||(f[54]=M("h4",{class:"section-title"},"차량 정보",-1)),M("div",ag,[M("div",og,[f[50]||(f[50]=M("span",{class:"info-label"},"차량 번호",-1)),M("span",lg,Te(Qe.value.vehicle_number),1)]),M("div",cg,[f[51]||(f[51]=M("span",{class:"info-label"},"차량 ID",-1)),M("span",dg,"#"+Te(Qe.value.id),1)]),M("div",ug,[f[52]||(f[52]=M("span",{class:"info-label"},"운행 타입",-1)),M("span",{class:Tt(["info-value",Qe.value.tripType==="SCHEDULED"?"text-blue-600":"text-green-600"])},Te(Qe.value.tripType==="SCHEDULED"?"정기노선":"수요응답"),3)]),M("div",hg,[f[53]||(f[53]=M("span",{class:"info-label"},"상태",-1)),M("span",{class:Tt(["info-value",is(Qe.value.tripStatus)])},Te(bn(Qe.value.tripStatus)),3)])])]),M("div",fg,[f[59]||(f[59]=M("h4",{class:"section-title"},"운행 정보",-1)),M("div",pg,[M("div",mg,[f[55]||(f[55]=M("span",{class:"info-label"},"Trip ID",-1)),M("span",gg,"#"+Te(Qe.value.trip_id),1)]),M("div",_g,[f[56]||(f[56]=M("span",{class:"info-label"},"승객",-1)),M("span",vg,Te(Qe.value.current_occupancy||0)+"/"+Te(Qe.value.capacity||0)+"명",1)]),Qe.value.driver_id?(Oe(),Ve("div",xg,[f[57]||(f[57]=M("span",{class:"info-label"},"운전자 ID",-1)),M("span",Mg,"#"+Te(Qe.value.driver_id),1)])):ht("",!0),Qe.value.route_id?(Oe(),Ve("div",Sg,[f[58]||(f[58]=M("span",{class:"info-label"},"노선 ID",-1)),M("span",yg,"#"+Te(Qe.value.route_id),1)])):ht("",!0)])]),M("div",Eg,[f[65]||(f[65]=M("h4",{class:"section-title"},"위치 정보",-1)),M("div",Tg,[M("div",bg,[f[60]||(f[60]=M("span",{class:"info-label"},"현재 좌표",-1)),M("span",Ag,Te(ns(Qe.value.current_latitude,Qe.value.current_longitude)),1)]),M("div",wg,[f[61]||(f[61]=M("span",{class:"info-label"},"속도",-1)),M("span",Rg,Te(Qe.value.speed||0)+" km/h",1)]),M("div",Cg,[f[62]||(f[62]=M("span",{class:"info-label"},"방향",-1)),M("span",Pg,Te(Qe.value.heading||0)+"°",1)]),Qe.value.last_node_id?(Oe(),Ve("div",Dg,[f[63]||(f[63]=M("span",{class:"info-label"},"마지막 노드",-1)),M("span",Lg,[Xs(Te(et(Qe.value.last_node_id))+" ",1),M("span",Ig,"(#"+Te(Qe.value.last_node_id)+")",1)])])):ht("",!0),Qe.value.current_link_id?(Oe(),Ve("div",Ug,[f[64]||(f[64]=M("span",{class:"info-label"},"현재 링크",-1)),M("span",Ng,"#"+Te(Qe.value.current_link_id),1)])):ht("",!0)])]),M("div",Fg,[f[74]||(f[74]=M("h4",{class:"section-title"},"객체 감지 정보",-1)),M("div",Og,[M("div",Bg,[f[67]||(f[67]=M("div",{class:"detection-icon pedestrian"},null,-1)),M("div",zg,[f[66]||(f[66]=M("span",{class:"detection-label"},"보행자",-1)),M("span",kg,Te(Ce.value.pedestrians||0),1)])]),M("div",Hg,[f[69]||(f[69]=M("div",{class:"detection-icon vehicle"},null,-1)),M("div",Vg,[f[68]||(f[68]=M("span",{class:"detection-label"},"차량",-1)),M("span",Gg,Te(Ce.value.vehicles||0),1)])]),M("div",Wg,[f[71]||(f[71]=M("div",{class:"detection-icon bicycle"},null,-1)),M("div",Xg,[f[70]||(f[70]=M("span",{class:"detection-label"},"자전거",-1)),M("span",$g,Te(Ce.value.bicycles||0),1)])]),M("div",qg,[f[73]||(f[73]=M("div",{class:"detection-icon signal"},null,-1)),M("div",Yg,[f[72]||(f[72]=M("span",{class:"detection-label"},"신호등",-1)),M("span",{class:Tt(["detection-status",wt.value])},Te(st.value),3)])])])]),f[98]||(f[98]=La('<div class="info-section" data-v-add936e8><h4 class="section-title" data-v-add936e8>센서 데이터</h4><div class="sensor-grid" data-v-add936e8><div class="sensor-item" data-v-add936e8><span class="sensor-label" data-v-add936e8>LiDAR</span><div class="sensor-bar" data-v-add936e8><div class="sensor-fill" style="width:85%;" data-v-add936e8></div></div><span class="sensor-value" data-v-add936e8>정상</span></div><div class="sensor-item" data-v-add936e8><span class="sensor-label" data-v-add936e8>Camera</span><div class="sensor-bar" data-v-add936e8><div class="sensor-fill" style="width:92%;" data-v-add936e8></div></div><span class="sensor-value" data-v-add936e8>정상</span></div><div class="sensor-item" data-v-add936e8><span class="sensor-label" data-v-add936e8>GPS</span><div class="sensor-bar" data-v-add936e8><div class="sensor-fill" style="width:98%;" data-v-add936e8></div></div><span class="sensor-value" data-v-add936e8>정상</span></div><div class="sensor-item" data-v-add936e8><span class="sensor-label" data-v-add936e8>IMU</span><div class="sensor-bar" data-v-add936e8><div class="sensor-fill" style="width:90%;" data-v-add936e8></div></div><span class="sensor-value" data-v-add936e8>정상</span></div></div></div>',1)),M("div",jg,[f[97]||(f[97]=M("h4",{class:"section-title"},"ODD 운영설계영역 상태",-1)),M("div",{class:Tt(["odd-status-card",nt.value.inODD?"status-safe":"status-warning"])},[M("div",Kg,[M("span",Zg,Te(nt.value.inODD?"✅":"⚠️"),1),f[75]||(f[75]=M("span",{class:"odd-status-title"},"ODD 범위 상태",-1))]),M("div",Jg,[M("span",Qg,Te(nt.value.inODD?"ODD 내 운행 중":"ODD 이탈"),1),nt.value.distanceToBoundary?(Oe(),Ve("span",e_," 경계까지: "+Te(nt.value.distanceToBoundary)+"m ",1)):ht("",!0)])],2),M("div",t_,[f[84]||(f[84]=M("h5",{class:"subsection-title"},"환경 조건",-1)),M("div",n_,[M("div",i_,[f[77]||(f[77]=M("span",{class:"condition-icon"},"🌤️",-1)),M("div",s_,[f[76]||(f[76]=M("span",{class:"condition-label"},"날씨",-1)),M("span",r_,Te(nt.value.weather),1)])]),M("div",a_,[f[79]||(f[79]=M("span",{class:"condition-icon"},"☀️",-1)),M("div",o_,[f[78]||(f[78]=M("span",{class:"condition-label"},"조도",-1)),M("span",l_,Te(nt.value.lighting),1)])]),M("div",c_,[f[81]||(f[81]=M("span",{class:"condition-icon"},"🛣️",-1)),M("div",d_,[f[80]||(f[80]=M("span",{class:"condition-label"},"도로",-1)),M("span",u_,Te(nt.value.roadCondition),1)])]),M("div",h_,[f[83]||(f[83]=M("span",{class:"condition-icon"},"🌡️",-1)),M("div",f_,[f[82]||(f[82]=M("span",{class:"condition-label"},"온도",-1)),M("span",p_,Te(nt.value.temperature)+"°C",1)])])])]),M("div",m_,[f[92]||(f[92]=M("h5",{class:"subsection-title"},"시스템 한계 상황",-1)),M("div",g_,[M("div",{class:Tt(["limit-item",{"limit-active":nt.value.systemLimits.oddExceeded}])},f[85]||(f[85]=[M("span",{class:"limit-indicator"},null,-1),M("span",{class:"limit-text"},"ODD 범위 벗어남",-1)]),2),M("div",{class:Tt(["limit-item",{"limit-active":nt.value.systemLimits.sensorFailure}])},f[86]||(f[86]=[M("span",{class:"limit-indicator"},null,-1),M("span",{class:"limit-text"},"센서 장애",-1)]),2),M("div",{class:Tt(["limit-item",{"limit-active":nt.value.systemLimits.weatherLimit}])},f[87]||(f[87]=[M("span",{class:"limit-indicator"},null,-1),M("span",{class:"limit-text"},"날씨 제한",-1)]),2),M("div",{class:Tt(["limit-item",{"limit-active":nt.value.systemLimits.gpsLoss}])},f[88]||(f[88]=[M("span",{class:"limit-indicator"},null,-1),M("span",{class:"limit-text"},"GPS 신호 손실",-1)]),2)]),nt.value.driverInterventionRequired?(Oe(),Ve("div",__,[f[90]||(f[90]=M("div",{class:"intervention-icon"},"⚠️",-1)),M("div",v_,[f[89]||(f[89]=M("span",{class:"intervention-title"},"운전자 개입 필요",-1)),M("span",x_,Te(nt.value.interventionReason),1)])])):ht("",!0),M("div",{class:Tt(["safety-stop-status",{active:nt.value.safetyStopAvailable}])},[f[91]||(f[91]=M("span",{class:"safety-icon"},"🛑",-1)),M("span",M_,"안전 정차 "+Te(nt.value.safetyStopAvailable?"가능":"불가능"),1)],2)]),nt.value.approachingBoundary?(Oe(),Ve("div",S_,[f[96]||(f[96]=M("div",{class:"warning-header"},[M("span",{class:"warning-icon"},"⚠️"),M("span",{class:"warning-title"},"ODD 경계 접근 중")],-1)),M("div",y_,[M("div",E_,[f[93]||(f[93]=M("span",{class:"distance-label"},"경계까지 거리:",-1)),M("span",T_,Te(nt.value.distanceToBoundary)+"m",1)]),M("div",b_,[f[94]||(f[94]=M("span",{class:"eta-label"},"예상 도달 시간:",-1)),M("span",A_,Te(nt.value.etaToBoundary)+"초",1)]),M("div",w_,[f[95]||(f[95]=M("span",{class:"action-label"},"권장 조치",-1)),M("span",R_,Te(nt.value.recommendedAction),1)])])])):ht("",!0)])])],2)):ht("",!0),f[101]||(f[101]=La('<div class="legend-box" data-v-add936e8><h4 class="font-semibold text-sm mb-2" data-v-add936e8>범례</h4><div class="legend-section mb-3" data-v-add936e8><div class="legend-title text-xs font-medium text-gray-700 mb-1" data-v-add936e8>경로 표시</div><div class="legend-item" data-v-add936e8><div class="legend-line" style="background:#0066CC;height:3px;" data-v-add936e8></div><span class="legend-label" data-v-add936e8>예정 경로 (미래)</span></div><div class="legend-item" data-v-add936e8><div class="legend-line" style="background:#FF0000;height:5px;" data-v-add936e8></div><span class="legend-label" data-v-add936e8>현재 주행 중인 구간</span></div><div class="legend-item" data-v-add936e8><div class="legend-line legend-dashed" style="background:#888888;height:3px;" data-v-add936e8></div><span class="legend-label" data-v-add936e8>이미 지나간 경로</span></div><div class="legend-item" data-v-add936e8><div class="legend-line legend-dashed" style="background:#FF6600;height:2px;" data-v-add936e8></div><span class="legend-label" data-v-add936e8>차량 이동 궤적</span></div></div><div class="legend-section mb-3" data-v-add936e8><div class="legend-title text-xs font-medium text-gray-700 mb-1" data-v-add936e8>차량 마커</div><div class="legend-item" data-v-add936e8><div class="legend-marker" style="background:#2563EB;" data-v-add936e8></div><span class="legend-label" data-v-add936e8>정기노선 차량</span></div><div class="legend-item" data-v-add936e8><div class="legend-marker" style="background:#059669;" data-v-add936e8></div><span class="legend-label" data-v-add936e8>수요응답 차량</span></div><div class="legend-item" data-v-add936e8><div class="legend-marker" style="background:#EA580C;" data-v-add936e8></div><span class="legend-label" data-v-add936e8>차고지 복귀 중</span></div></div><div class="legend-section" data-v-add936e8><div class="legend-title text-xs font-medium text-gray-700 mb-1" data-v-add936e8>정류장</div><div class="legend-item" data-v-add936e8><div class="legend-stop" style="background:#3B82F6;" data-v-add936e8></div><span class="legend-label" data-v-add936e8>예정 정류장</span></div><div class="legend-item" data-v-add936e8><div class="legend-stop" style="background:#9CA3AF;" data-v-add936e8></div><span class="legend-label" data-v-add936e8>통과한 정류장</span></div></div></div>',1)),z.value?(Oe(),Ve("div",C_,f[99]||(f[99]=[M("div",{class:"text-center"},[M("div",{class:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"}),M("p",{class:"text-gray-600"},"차량 위치 정보를 불러오는 중...")],-1)]))):ht("",!0),E.value?(Oe(),Ve("div",P_,[f[100]||(f[100]=M("p",{class:"font-semibold"},"오류 발생",-1)),M("p",D_,Te(E.value),1)])):ht("",!0)]),M("div",L_,[M("div",I_,[f[132]||(f[132]=M("h3",{class:"text-lg font-semibold mb-4"},"운행 중 차량 목록",-1)),H.value.length===0?(Oe(),Ve("div",U_,f[102]||(f[102]=[M("p",null,"현재 운행 중인 차량이 없습니다.",-1)]))):(Oe(),Ve("div",N_,[(Oe(!0),Ve(ii,null,si(H.value,(T,V)=>{var q;return Oe(),Ve("div",{key:T.id,class:"vehicle-card p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors",onClick:k=>ni(T.id)},[M("div",O_,[M("div",B_,[M("div",{class:Tt(["w-3 h-3 rounded-full",T.tripType==="SCHEDULED"?"bg-blue-500":T.tripType==="ON_DEMAND"?"bg-green-500":"bg-gray-500"])},null,2),M("span",z_,Te(T.vehicle_number),1)]),M("span",k_,Te(T.tripType==="SCHEDULED"?"정기노선":"수요응답"),1)]),M("div",H_,[M("div",V_,[f[103]||(f[103]=M("span",{class:"font-medium"},"차량 ID:",-1)),M("span",G_,"#"+Te(T.id),1)]),T.trip_id?(Oe(),Ve("div",W_,[M("span",X_,Te(T.tripType==="ON_DEMAND"?"Trip ID (수요응답):":"운행 ID:"),1),M("span",$_,"#"+Te(T.trip_id),1)])):ht("",!0),T.tripType==="ON_DEMAND"?(Oe(),Ve("div",q_,[f[109]||(f[109]=M("div",{class:"font-medium text-green-800 mb-1"},"🔍 디버깅 정보",-1)),M("div",Y_,[M("div",j_,[f[104]||(f[104]=M("span",null,"Trip ID:",-1)),M("span",K_,"#"+Te(T.trip_id),1)]),M("div",Z_,[f[105]||(f[105]=M("span",null,"Vehicle ID:",-1)),M("span",J_,"#"+Te(T.id),1)]),ft(T)?(Oe(),Ve("div",Q_,[ft(T).calls?(Oe(),Ve("div",ev,[f[106]||(f[106]=M("span",null,"할당된 Call 수:",-1)),M("span",tv,Te(((q=ft(T).calls)==null?void 0:q.length)||0)+"개",1)])):ht("",!0),ft(T).calls&&ft(T).calls.length>0?(Oe(),Ve("div",nv,[f[107]||(f[107]=M("span",{class:"text-green-600"},"Call IDs:",-1)),M("div",iv,[(Oe(!0),Ve(ii,null,si(ft(T).calls,k=>(Oe(),Ve("span",{key:k.id,class:"px-1.5 py-0.5 bg-purple-100 text-purple-700 rounded text-xs font-mono"}," #"+Te(k.id),1))),128))])])):ht("",!0),ft(T).service_area_id?(Oe(),Ve("div",sv,[f[108]||(f[108]=M("span",null,"서비스 지역:",-1)),M("span",rv,"#"+Te(ft(T).service_area_id),1)])):ht("",!0)])):ht("",!0)])])):ht("",!0),M("div",av,[f[110]||(f[110]=M("span",null,"상태:",-1)),M("span",{class:Tt(is(T.tripStatus))},[Xs(Te(bn(T.tripStatus))+" ",1),T.tripStatus==="RETURNING"?(Oe(),Ve("span",ov," 🏠 ")):ht("",!0)],2)]),T.tripStatus==="RETURNING"?(Oe(),Ve("div",lv,f[111]||(f[111]=[M("span",{class:"text-orange-700"},"12번 정류장 → 1번 정류장 (차고지)",-1)]))):ht("",!0),M("div",cv,[f[112]||(f[112]=M("span",null,"승객:",-1)),M("span",{class:Tt(T.current_occupancy>0?"text-orange-600 font-medium":"")},Te(T.current_occupancy||0)+"/"+Te(T.capacity||0)+"명 ",3)]),Wn(M("div",dv,[M("div",uv,[f[113]||(f[113]=M("div",{class:"text-xs text-gray-500 mb-2"},"운행 제어",-1)),M("div",hv,[T.tripStatus==="IN_PROGRESS"?(Oe(),Ve("button",{key:0,onClick:k=>B(T),class:"flex-1 px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 disabled:opacity-50",disabled:z.value}," 운행중단 ",8,fv)):ht("",!0),T.tripStatus==="RETURNING"?(Oe(),Ve("button",{key:1,onClick:k=>he(T),class:"flex-1 px-2 py-1 bg-green-500 text-white text-xs rounded hover:bg-green-600 disabled:opacity-50",disabled:z.value}," 복귀완료 ",8,pv)):ht("",!0)])]),T.tripType==="SCHEDULED"&&ft(T)?(Oe(),Ve("div",mv,[f[119]||(f[119]=M("div",{class:"text-xs text-gray-500 mb-1"},"운행 정보",-1)),ft(T).start_datetime||ft(T).start_time?(Oe(),Ve("div",gv,[M("div",_v,[f[114]||(f[114]=M("span",{class:"text-blue-700"},"출발:",-1)),M("span",vv,Te(Li(ft(T).start_datetime||ft(T).start_time)),1)]),M("div",xv,[f[115]||(f[115]=M("span",{class:"text-blue-700"},"도착:",-1)),M("span",Mv,Te(Li(ft(T).end_datetime||ft(T).end_time)),1)])])):ht("",!0),ft(T).start_time&&!ft(T).end_time?(Oe(),Ve("div",Sv,[f[116]||(f[116]=M("span",null,"운행 경과:",-1)),M("span",yv,Te($(ft(T).start_time)),1)])):ht("",!0),ft(T).route_id?(Oe(),Ve("div",Ev,[f[117]||(f[117]=M("span",null,"노선 ID:",-1)),M("span",Tv,"#"+Te(ft(T).route_id),1)])):ht("",!0),ft(T).driver_id?(Oe(),Ve("div",bv,[f[118]||(f[118]=M("span",null,"운전자:",-1)),M("span",Av,"#"+Te(ft(T).driver_id),1)])):ht("",!0)])):ht("",!0),T.tripType==="ON_DEMAND"&&ft(T)?(Oe(),Ve("div",wv,[f[127]||(f[127]=M("div",{class:"text-xs text-gray-500 mb-1"},"호출 정보",-1)),ft(T).calls&&ft(T).calls.length>0?(Oe(),Ve("div",Rv,[M("div",Cv,[f[120]||(f[120]=M("span",null,"할당 호출:",-1)),M("span",Pv,Te(ft(T).calls.length)+"개",1)]),(Oe(!0),Ve(ii,null,si(ft(T).calls.slice(0,3),(k,ge)=>(Oe(),Ve("div",{key:k.id,class:"bg-green-50 p-2 rounded text-xs"},[M("div",Dv,"Call #"+Te(k.id),1),M("div",Lv,[M("div",Iv,[f[122]||(f[122]=M("span",{class:"text-green-600"},"🔵",-1)),M("div",Uv,[f[121]||(f[121]=M("span",{class:"text-xs"},"픽업:",-1)),M("div",{class:"text-xs truncate",title:y(k)},Te(y(k)),9,Nv)])]),M("div",Fv,[f[124]||(f[124]=M("span",{class:"text-red-600"},"🔴",-1)),M("div",Ov,[f[123]||(f[123]=M("span",{class:"text-xs"},"드롭:",-1)),M("div",{class:"text-xs truncate",title:O(k)},Te(O(k)),9,Bv)])]),k.requested_pickup_time?(Oe(),Ve("div",zv," 요청시간: "+Te(Li(k.requested_pickup_time)),1)):ht("",!0)])]))),128)),ft(T).calls.length>3?(Oe(),Ve("div",kv," ... 외 "+Te(ft(T).calls.length-3)+"개 호출 ",1)):ht("",!0)])):ht("",!0),ft(T).service_area_id?(Oe(),Ve("div",Hv,[f[125]||(f[125]=M("span",null,"서비스 지역:",-1)),M("span",Vv,"#"+Te(ft(T).service_area_id),1)])):ht("",!0),ft(T).driver_id?(Oe(),Ve("div",Gv,[f[126]||(f[126]=M("span",null,"운전자:",-1)),M("span",Wv,"#"+Te(ft(T).driver_id),1)])):ht("",!0)])):ht("",!0),M("div",Xv,[f[131]||(f[131]=M("div",{class:"text-xs text-gray-500 mb-1"},"위치 정보",-1)),M("div",$v,[f[128]||(f[128]=M("span",null,"좌표:",-1)),M("span",qv,Te(ns(T.current_latitude,T.current_longitude)),1)]),T.last_node_id?(Oe(),Ve("div",Yv,[f[129]||(f[129]=M("span",null,"마지막 노드:",-1)),M("span",jv,[Xs(Te(et(T.last_node_id))+" ",1),M("span",Kv,"(#"+Te(T.last_node_id)+")",1)])])):ht("",!0),T.current_link_id?(Oe(),Ve("div",Zv,[f[130]||(f[130]=M("span",null,"현재 링크:",-1)),M("span",Jv,"#"+Te(T.current_link_id),1)])):ht("",!0)])],512),[[Ii,Me.value.has(T.id)]])])],8,F_)}),128))]))])])])]))}}),u0=Yo(Qv,[["__scopeId","data-v-add936e8"]]);export{u0 as default};
