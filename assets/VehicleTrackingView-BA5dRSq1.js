import{d as jo,r as Rl,l as ze,c as Mi,I as Yo,Y as Cl,a as Ie,Z as Pl,t as E,x as Ke,K as Xi,v as Me,Q as Dl,o as Ue,q as Ll,u as Et,L as Il,T as Fa,M as Ks,y as Ul,F as Zs,f as Js,z as Nl}from"./vendor-CpiWLcQ-.js";import{L as pt}from"./leaflet-src-CPUEJO6m.js";import{_ as Ko}from"./index-Cw8U0UCx.js";import{a as wt}from"./index-NIGUFBhG.js";import{B as Ol,o as Rt,c as Ct,a as ct,D as Pt,s as Dt,b as Lt,d as Rn,t as It,e as Ut,C as Fl}from"./configuration-BiWBPvh5.js";import{N as Bl}from"./network-api-iGJov4ky.js";import{P as Vl}from"./planning-api-DjgiGuJW.js";import{R as zl}from"./resources-api-gRoOZ0_8.js";import{S as kl}from"./service-areas-api-CNhDdMI8.js";import"./jsonforms-NKEl3KDl.js";const Hl=function(i){return{boardPassengerApiDriverPassengerPassengerIdBoardPut:async(e,t,n={})=>{ct("boardPassengerApiDriverPassengerPassengerIdBoardPut","passengerId",e),ct("boardPassengerApiDriverPassengerPassengerIdBoardPut","passengerBoardRequest",t);const s="/api/driver/passenger/{passenger_id}/board".replace("{passenger_id}",encodeURIComponent(String(e))),r=new URL(s,Pt);let a;i&&(a=i.baseOptions);const o={method:"PUT",...a,...n},c={},l={};await Dt(c,"OAuth2PasswordBearer",[],i),c["Content-Type"]="application/json",Lt(r,l);let d=a&&a.headers?a.headers:{};return o.headers={...c,...d,...n.headers},o.data=Rn(t,o,i),{url:It(r),options:o}},completeTripReturnApiDriverTripsTripIdReturnCompletePost:async(e,t={})=>{ct("completeTripReturnApiDriverTripsTripIdReturnCompletePost","tripId",e);const n="/api/driver/trips/{trip_id}/return-complete".replace("{trip_id}",encodeURIComponent(String(e))),s=new URL(n,Pt);let r;i&&(r=i.baseOptions);const a={method:"POST",...r,...t},o={},c={};await Dt(o,"OAuth2PasswordBearer",[],i),Lt(s,c);let l=r&&r.headers?r.headers:{};return a.headers={...o,...l,...t.headers},{url:It(s),options:a}},getAssignedCallsApiDriverCallsAssignedGet:async(e,t={})=>{ct("getAssignedCallsApiDriverCallsAssignedGet","tripId",e);const n="/api/driver/calls/assigned",s=new URL(n,Pt);let r;i&&(r=i.baseOptions);const a={method:"GET",...r,...t},o={},c={};await Dt(o,"OAuth2PasswordBearer",[],i),e!==void 0&&(c.trip_id=e),Lt(s,c);let l=r&&r.headers?r.headers:{};return a.headers={...o,...l,...t.headers},{url:It(s),options:a}},getOnDemandTripRouteApiDriverOnDemandTripsTripIdRouteGet:async(e,t={})=>{ct("getOnDemandTripRouteApiDriverOnDemandTripsTripIdRouteGet","tripId",e);const n="/api/driver/on-demand-trips/{trip_id}/route".replace("{trip_id}",encodeURIComponent(String(e))),s=new URL(n,Pt);let r;i&&(r=i.baseOptions);const a={method:"GET",...r,...t},o={},c={};await Dt(o,"OAuth2PasswordBearer",[],i),Lt(s,c);let l=r&&r.headers?r.headers:{};return a.headers={...o,...l,...t.headers},{url:It(s),options:a}},getPassengerListApiDriverPassengerListGet:async(e,t,n={})=>{ct("getPassengerListApiDriverPassengerListGet","tripType",e),ct("getPassengerListApiDriverPassengerListGet","tripId",t);const s="/api/driver/passenger-list",r=new URL(s,Pt);let a;i&&(a=i.baseOptions);const o={method:"GET",...a,...n},c={},l={};await Dt(c,"OAuth2PasswordBearer",[],i),e!==void 0&&(l.trip_type=e),t!==void 0&&(l.trip_id=t),Lt(r,l);let d=a&&a.headers?a.headers:{};return o.headers={...c,...d,...n.headers},{url:It(r),options:o}},getScheduledTripRouteApiDriverScheduledTripsTripIdRouteGet:async(e,t={})=>{ct("getScheduledTripRouteApiDriverScheduledTripsTripIdRouteGet","tripId",e);const n="/api/driver/scheduled-trips/{trip_id}/route".replace("{trip_id}",encodeURIComponent(String(e))),s=new URL(n,Pt);let r;i&&(r=i.baseOptions);const a={method:"GET",...r,...t},o={},c={};await Dt(o,"OAuth2PasswordBearer",[],i),Lt(s,c);let l=r&&r.headers?r.headers:{};return a.headers={...o,...l,...t.headers},{url:It(s),options:a}},getStationAlightInfoApiDriverStationAlightInfoGet:async(e,t,n,s={})=>{ct("getStationAlightInfoApiDriverStationAlightInfoGet","stationId",e),ct("getStationAlightInfoApiDriverStationAlightInfoGet","tripType",t),ct("getStationAlightInfoApiDriverStationAlightInfoGet","tripId",n);const r="/api/driver/station-alight-info",a=new URL(r,Pt);let o;i&&(o=i.baseOptions);const c={method:"GET",...o,...s},l={},d={};await Dt(l,"OAuth2PasswordBearer",[],i),e!==void 0&&(d.station_id=e),t!==void 0&&(d.trip_type=t),n!==void 0&&(d.trip_id=n),Lt(a,d);let h=o&&o.headers?o.headers:{};return c.headers={...l,...h,...s.headers},{url:It(a),options:c}},getVehicleOnDemandTripsApiDriverOnDemandTripsVehicleVehicleIdGet:async(e,t={})=>{ct("getVehicleOnDemandTripsApiDriverOnDemandTripsVehicleVehicleIdGet","vehicleId",e);const n="/api/driver/on-demand-trips/vehicle/{vehicle_id}".replace("{vehicle_id}",encodeURIComponent(String(e))),s=new URL(n,Pt);let r;i&&(r=i.baseOptions);const a={method:"GET",...r,...t},o={},c={};await Dt(o,"OAuth2PasswordBearer",[],i),Lt(s,c);let l=r&&r.headers?r.headers:{};return a.headers={...o,...l,...t.headers},{url:It(s),options:a}},reportPassengerDropoffApiDriverCallsCallIdDropoffPost:async(e,t,n={})=>{ct("reportPassengerDropoffApiDriverCallsCallIdDropoffPost","callId",e),ct("reportPassengerDropoffApiDriverCallsCallIdDropoffPost","passengerDropoffRequest",t);const s="/api/driver/calls/{call_id}/dropoff".replace("{call_id}",encodeURIComponent(String(e))),r=new URL(s,Pt);let a;i&&(a=i.baseOptions);const o={method:"POST",...a,...n},c={},l={};await Dt(c,"OAuth2PasswordBearer",[],i),c["Content-Type"]="application/json",Lt(r,l);let d=a&&a.headers?a.headers:{};return o.headers={...c,...d,...n.headers},o.data=Rn(t,o,i),{url:It(r),options:o}},reportPassengerPickupApiDriverCallsCallIdPickupPost:async(e,t,n={})=>{ct("reportPassengerPickupApiDriverCallsCallIdPickupPost","callId",e),ct("reportPassengerPickupApiDriverCallsCallIdPickupPost","passengerPickupRequest",t);const s="/api/driver/calls/{call_id}/pickup".replace("{call_id}",encodeURIComponent(String(e))),r=new URL(s,Pt);let a;i&&(a=i.baseOptions);const o={method:"POST",...a,...n},c={},l={};await Dt(c,"OAuth2PasswordBearer",[],i),c["Content-Type"]="application/json",Lt(r,l);let d=a&&a.headers?a.headers:{};return o.headers={...c,...d,...n.headers},o.data=Rn(t,o,i),{url:It(r),options:o}},sendPvdDataApiDriverPvdDataPost:async(e,t={})=>{ct("sendPvdDataApiDriverPvdDataPost","pvdDataCreate",e);const n="/api/driver/pvd-data",s=new URL(n,Pt);let r;i&&(r=i.baseOptions);const a={method:"POST",...r,...t},o={},c={};await Dt(o,"OAuth2PasswordBearer",[],i),o["Content-Type"]="application/json",Lt(s,c);let l=r&&r.headers?r.headers:{};return a.headers={...o,...l,...t.headers},a.data=Rn(e,a,i),{url:It(s),options:a}},syncOfflineDataApiDriverSyncOfflineDataPost:async(e,t={})=>{ct("syncOfflineDataApiDriverSyncOfflineDataPost","offlineDataSyncRequest",e);const n="/api/driver/sync-offline-data",s=new URL(n,Pt);let r;i&&(r=i.baseOptions);const a={method:"POST",...r,...t},o={},c={};await Dt(o,"OAuth2PasswordBearer",[],i),o["Content-Type"]="application/json",Lt(s,c);let l=r&&r.headers?r.headers:{};return a.headers={...o,...l,...t.headers},a.data=Rn(e,a,i),{url:It(s),options:a}},updateAlightCountApiDriverAlightCountPut:async(e,t,n,s={})=>{ct("updateAlightCountApiDriverAlightCountPut","tripType",e),ct("updateAlightCountApiDriverAlightCountPut","tripId",t),ct("updateAlightCountApiDriverAlightCountPut","alightCountRequest",n);const r="/api/driver/alight-count",a=new URL(r,Pt);let o;i&&(o=i.baseOptions);const c={method:"PUT",...o,...s},l={},d={};await Dt(l,"OAuth2PasswordBearer",[],i),e!==void 0&&(d.trip_type=e),t!==void 0&&(d.trip_id=t),l["Content-Type"]="application/json",Lt(a,d);let h=o&&o.headers?o.headers:{};return c.headers={...l,...h,...s.headers},c.data=Rn(n,c,i),{url:It(a),options:c}},updateSeatCountApiDriverSeatCountPut:async(e,t,n={})=>{ct("updateSeatCountApiDriverSeatCountPut","vehicleId",e),ct("updateSeatCountApiDriverSeatCountPut","seatCountUpdateRequest",t);const s="/api/driver/seat-count",r=new URL(s,Pt);let a;i&&(a=i.baseOptions);const o={method:"PUT",...a,...n},c={},l={};await Dt(c,"OAuth2PasswordBearer",[],i),e!==void 0&&(l.vehicle_id=e),c["Content-Type"]="application/json",Lt(r,l);let d=a&&a.headers?a.headers:{};return o.headers={...c,...d,...n.headers},o.data=Rn(t,o,i),{url:It(r),options:o}},updateTripStatusApiDriverTripsTripIdStatusPut:async(e,t,n,s={})=>{ct("updateTripStatusApiDriverTripsTripIdStatusPut","tripId",e),ct("updateTripStatusApiDriverTripsTripIdStatusPut","tripType",t),ct("updateTripStatusApiDriverTripsTripIdStatusPut","tripStatusUpdateRequest",n);const r="/api/driver/trips/{trip_id}/status".replace("{trip_id}",encodeURIComponent(String(e))),a=new URL(r,Pt);let o;i&&(o=i.baseOptions);const c={method:"PUT",...o,...s},l={},d={};await Dt(l,"OAuth2PasswordBearer",[],i),t!==void 0&&(d.trip_type=t),l["Content-Type"]="application/json",Lt(a,d);let h=o&&o.headers?o.headers:{};return c.headers={...l,...h,...s.headers},c.data=Rn(n,c,i),{url:It(a),options:c}}}},Nt=function(i){const e=Hl(i);return{async boardPassengerApiDriverPassengerPassengerIdBoardPut(t,n,s){var c,l;const r=await e.boardPassengerApiDriverPassengerPassengerIdBoardPut(t,n,s),a=(i==null?void 0:i.serverIndex)??0,o=(l=(c=Rt["DriverAppApi.boardPassengerApiDriverPassengerPassengerIdBoardPut"])==null?void 0:c[a])==null?void 0:l.url;return(d,h)=>Ct(r,wt,Ut,i)(d,o||h)},async completeTripReturnApiDriverTripsTripIdReturnCompletePost(t,n){var o,c;const s=await e.completeTripReturnApiDriverTripsTripIdReturnCompletePost(t,n),r=(i==null?void 0:i.serverIndex)??0,a=(c=(o=Rt["DriverAppApi.completeTripReturnApiDriverTripsTripIdReturnCompletePost"])==null?void 0:o[r])==null?void 0:c.url;return(l,d)=>Ct(s,wt,Ut,i)(l,a||d)},async getAssignedCallsApiDriverCallsAssignedGet(t,n){var o,c;const s=await e.getAssignedCallsApiDriverCallsAssignedGet(t,n),r=(i==null?void 0:i.serverIndex)??0,a=(c=(o=Rt["DriverAppApi.getAssignedCallsApiDriverCallsAssignedGet"])==null?void 0:o[r])==null?void 0:c.url;return(l,d)=>Ct(s,wt,Ut,i)(l,a||d)},async getOnDemandTripRouteApiDriverOnDemandTripsTripIdRouteGet(t,n){var o,c;const s=await e.getOnDemandTripRouteApiDriverOnDemandTripsTripIdRouteGet(t,n),r=(i==null?void 0:i.serverIndex)??0,a=(c=(o=Rt["DriverAppApi.getOnDemandTripRouteApiDriverOnDemandTripsTripIdRouteGet"])==null?void 0:o[r])==null?void 0:c.url;return(l,d)=>Ct(s,wt,Ut,i)(l,a||d)},async getPassengerListApiDriverPassengerListGet(t,n,s){var c,l;const r=await e.getPassengerListApiDriverPassengerListGet(t,n,s),a=(i==null?void 0:i.serverIndex)??0,o=(l=(c=Rt["DriverAppApi.getPassengerListApiDriverPassengerListGet"])==null?void 0:c[a])==null?void 0:l.url;return(d,h)=>Ct(r,wt,Ut,i)(d,o||h)},async getScheduledTripRouteApiDriverScheduledTripsTripIdRouteGet(t,n){var o,c;const s=await e.getScheduledTripRouteApiDriverScheduledTripsTripIdRouteGet(t,n),r=(i==null?void 0:i.serverIndex)??0,a=(c=(o=Rt["DriverAppApi.getScheduledTripRouteApiDriverScheduledTripsTripIdRouteGet"])==null?void 0:o[r])==null?void 0:c.url;return(l,d)=>Ct(s,wt,Ut,i)(l,a||d)},async getStationAlightInfoApiDriverStationAlightInfoGet(t,n,s,r){var l,d;const a=await e.getStationAlightInfoApiDriverStationAlightInfoGet(t,n,s,r),o=(i==null?void 0:i.serverIndex)??0,c=(d=(l=Rt["DriverAppApi.getStationAlightInfoApiDriverStationAlightInfoGet"])==null?void 0:l[o])==null?void 0:d.url;return(h,p)=>Ct(a,wt,Ut,i)(h,c||p)},async getVehicleOnDemandTripsApiDriverOnDemandTripsVehicleVehicleIdGet(t,n){var o,c;const s=await e.getVehicleOnDemandTripsApiDriverOnDemandTripsVehicleVehicleIdGet(t,n),r=(i==null?void 0:i.serverIndex)??0,a=(c=(o=Rt["DriverAppApi.getVehicleOnDemandTripsApiDriverOnDemandTripsVehicleVehicleIdGet"])==null?void 0:o[r])==null?void 0:c.url;return(l,d)=>Ct(s,wt,Ut,i)(l,a||d)},async reportPassengerDropoffApiDriverCallsCallIdDropoffPost(t,n,s){var c,l;const r=await e.reportPassengerDropoffApiDriverCallsCallIdDropoffPost(t,n,s),a=(i==null?void 0:i.serverIndex)??0,o=(l=(c=Rt["DriverAppApi.reportPassengerDropoffApiDriverCallsCallIdDropoffPost"])==null?void 0:c[a])==null?void 0:l.url;return(d,h)=>Ct(r,wt,Ut,i)(d,o||h)},async reportPassengerPickupApiDriverCallsCallIdPickupPost(t,n,s){var c,l;const r=await e.reportPassengerPickupApiDriverCallsCallIdPickupPost(t,n,s),a=(i==null?void 0:i.serverIndex)??0,o=(l=(c=Rt["DriverAppApi.reportPassengerPickupApiDriverCallsCallIdPickupPost"])==null?void 0:c[a])==null?void 0:l.url;return(d,h)=>Ct(r,wt,Ut,i)(d,o||h)},async sendPvdDataApiDriverPvdDataPost(t,n){var o,c;const s=await e.sendPvdDataApiDriverPvdDataPost(t,n),r=(i==null?void 0:i.serverIndex)??0,a=(c=(o=Rt["DriverAppApi.sendPvdDataApiDriverPvdDataPost"])==null?void 0:o[r])==null?void 0:c.url;return(l,d)=>Ct(s,wt,Ut,i)(l,a||d)},async syncOfflineDataApiDriverSyncOfflineDataPost(t,n){var o,c;const s=await e.syncOfflineDataApiDriverSyncOfflineDataPost(t,n),r=(i==null?void 0:i.serverIndex)??0,a=(c=(o=Rt["DriverAppApi.syncOfflineDataApiDriverSyncOfflineDataPost"])==null?void 0:o[r])==null?void 0:c.url;return(l,d)=>Ct(s,wt,Ut,i)(l,a||d)},async updateAlightCountApiDriverAlightCountPut(t,n,s,r){var l,d;const a=await e.updateAlightCountApiDriverAlightCountPut(t,n,s,r),o=(i==null?void 0:i.serverIndex)??0,c=(d=(l=Rt["DriverAppApi.updateAlightCountApiDriverAlightCountPut"])==null?void 0:l[o])==null?void 0:d.url;return(h,p)=>Ct(a,wt,Ut,i)(h,c||p)},async updateSeatCountApiDriverSeatCountPut(t,n,s){var c,l;const r=await e.updateSeatCountApiDriverSeatCountPut(t,n,s),a=(i==null?void 0:i.serverIndex)??0,o=(l=(c=Rt["DriverAppApi.updateSeatCountApiDriverSeatCountPut"])==null?void 0:c[a])==null?void 0:l.url;return(d,h)=>Ct(r,wt,Ut,i)(d,o||h)},async updateTripStatusApiDriverTripsTripIdStatusPut(t,n,s,r){var l,d;const a=await e.updateTripStatusApiDriverTripsTripIdStatusPut(t,n,s,r),o=(i==null?void 0:i.serverIndex)??0,c=(d=(l=Rt["DriverAppApi.updateTripStatusApiDriverTripsTripIdStatusPut"])==null?void 0:l[o])==null?void 0:d.url;return(h,p)=>Ct(a,wt,Ut,i)(h,c||p)}}};class Gl extends Ol{boardPassengerApiDriverPassengerPassengerIdBoardPut(e,t,n){return Nt(this.configuration).boardPassengerApiDriverPassengerPassengerIdBoardPut(e,t,n).then(s=>s(this.axios,this.basePath))}completeTripReturnApiDriverTripsTripIdReturnCompletePost(e,t){return Nt(this.configuration).completeTripReturnApiDriverTripsTripIdReturnCompletePost(e,t).then(n=>n(this.axios,this.basePath))}getAssignedCallsApiDriverCallsAssignedGet(e,t){return Nt(this.configuration).getAssignedCallsApiDriverCallsAssignedGet(e,t).then(n=>n(this.axios,this.basePath))}getOnDemandTripRouteApiDriverOnDemandTripsTripIdRouteGet(e,t){return Nt(this.configuration).getOnDemandTripRouteApiDriverOnDemandTripsTripIdRouteGet(e,t).then(n=>n(this.axios,this.basePath))}getPassengerListApiDriverPassengerListGet(e,t,n){return Nt(this.configuration).getPassengerListApiDriverPassengerListGet(e,t,n).then(s=>s(this.axios,this.basePath))}getScheduledTripRouteApiDriverScheduledTripsTripIdRouteGet(e,t){return Nt(this.configuration).getScheduledTripRouteApiDriverScheduledTripsTripIdRouteGet(e,t).then(n=>n(this.axios,this.basePath))}getStationAlightInfoApiDriverStationAlightInfoGet(e,t,n,s){return Nt(this.configuration).getStationAlightInfoApiDriverStationAlightInfoGet(e,t,n,s).then(r=>r(this.axios,this.basePath))}getVehicleOnDemandTripsApiDriverOnDemandTripsVehicleVehicleIdGet(e,t){return Nt(this.configuration).getVehicleOnDemandTripsApiDriverOnDemandTripsVehicleVehicleIdGet(e,t).then(n=>n(this.axios,this.basePath))}reportPassengerDropoffApiDriverCallsCallIdDropoffPost(e,t,n){return Nt(this.configuration).reportPassengerDropoffApiDriverCallsCallIdDropoffPost(e,t,n).then(s=>s(this.axios,this.basePath))}reportPassengerPickupApiDriverCallsCallIdPickupPost(e,t,n){return Nt(this.configuration).reportPassengerPickupApiDriverCallsCallIdPickupPost(e,t,n).then(s=>s(this.axios,this.basePath))}sendPvdDataApiDriverPvdDataPost(e,t){return Nt(this.configuration).sendPvdDataApiDriverPvdDataPost(e,t).then(n=>n(this.axios,this.basePath))}syncOfflineDataApiDriverSyncOfflineDataPost(e,t){return Nt(this.configuration).syncOfflineDataApiDriverSyncOfflineDataPost(e,t).then(n=>n(this.axios,this.basePath))}updateAlightCountApiDriverAlightCountPut(e,t,n,s){return Nt(this.configuration).updateAlightCountApiDriverAlightCountPut(e,t,n,s).then(r=>r(this.axios,this.basePath))}updateSeatCountApiDriverSeatCountPut(e,t,n){return Nt(this.configuration).updateSeatCountApiDriverSeatCountPut(e,t,n).then(s=>s(this.axios,this.basePath))}updateTripStatusApiDriverTripsTripIdStatusPut(e,t,n,s){return Nt(this.configuration).updateTripStatusApiDriverTripsTripIdStatusPut(e,t,n,s).then(r=>r(this.axios,this.basePath))}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ea="179",Wl=0,Ba=1,Xl=2,Zo=1,$l=2,En=3,Bn=0,zt=1,Tn=2,On=0,yi=1,Va=2,za=3,ka=4,ql=5,Kn=100,jl=101,Yl=102,Kl=103,Zl=104,Jl=200,Ql=201,ec=202,tc=203,Nr=204,Or=205,nc=206,ic=207,sc=208,rc=209,ac=210,oc=211,lc=212,cc=213,dc=214,Fr=0,Br=1,Vr=2,bi=3,zr=4,kr=5,Hr=6,Gr=7,Ta=0,uc=1,hc=2,Fn=0,fc=1,pc=2,mc=3,gc=4,_c=5,vc=6,xc=7,Jo=300,Ai=301,wi=302,Wr=303,Xr=304,Xs=306,$r=1e3,Jn=1001,qr=1002,ln=1003,Mc=1004,ls=1005,hn=1006,Qs=1007,Qn=1008,mn=1009,Qo=1010,el=1011,Yi=1012,ba=1013,ti=1014,bn=1015,Qi=1016,Aa=1017,wa=1018,Ki=1020,tl=35902,nl=1021,il=1022,on=1023,Zi=1026,Ji=1027,sl=1028,Ra=1029,rl=1030,Ca=1031,Pa=1033,Us=33776,Ns=33777,Os=33778,Fs=33779,jr=35840,Yr=35841,Kr=35842,Zr=35843,Jr=36196,Qr=37492,ea=37496,ta=37808,na=37809,ia=37810,sa=37811,ra=37812,aa=37813,oa=37814,la=37815,ca=37816,da=37817,ua=37818,ha=37819,fa=37820,pa=37821,Bs=36492,ma=36494,ga=36495,al=36283,_a=36284,va=36285,xa=36286,Sc=3200,yc=3201,Da=0,Ec=1,Nn="",$t="srgb",Ri="srgb-linear",zs="linear",ot="srgb",ai=7680,Ha=519,Tc=512,bc=513,Ac=514,ol=515,wc=516,Rc=517,Cc=518,Pc=519,Ga=35044,Wa="300 es",fn=2e3,ks=2001;class Pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],er=Math.PI/180,Ma=180/Math.PI;function es(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function Dc(i,e){return(i%e+e)%e}function tr(i,e,t){return(1-t)*i+t*e}function Vi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class it{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ts{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],d=n[s+2],h=n[s+3];const p=r[a+0],m=r[a+1],M=r[a+2],S=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h;return}if(o===1){e[t+0]=p,e[t+1]=m,e[t+2]=M,e[t+3]=S;return}if(h!==S||c!==p||l!==m||d!==M){let _=1-o;const f=c*p+l*m+d*M+h*S,D=f>=0?1:-1,R=1-f*f;if(R>Number.EPSILON){const O=Math.sqrt(R),C=Math.atan2(O,f*D);_=Math.sin(_*C)/O,o=Math.sin(o*C)/O}const b=o*D;if(c=c*_+p*b,l=l*_+m*b,d=d*_+M*b,h=h*_+S*b,_===1-o){const O=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=O,l*=O,d*=O,h*=O}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],d=n[s+3],h=r[a],p=r[a+1],m=r[a+2],M=r[a+3];return e[t]=o*M+d*h+c*m-l*p,e[t+1]=c*M+d*p+l*h-o*m,e[t+2]=l*M+d*m+o*p-c*h,e[t+3]=d*M-o*h-c*p-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(s/2),h=o(r/2),p=c(n/2),m=c(s/2),M=c(r/2);switch(a){case"XYZ":this._x=p*d*h+l*m*M,this._y=l*m*h-p*d*M,this._z=l*d*M+p*m*h,this._w=l*d*h-p*m*M;break;case"YXZ":this._x=p*d*h+l*m*M,this._y=l*m*h-p*d*M,this._z=l*d*M-p*m*h,this._w=l*d*h+p*m*M;break;case"ZXY":this._x=p*d*h-l*m*M,this._y=l*m*h+p*d*M,this._z=l*d*M+p*m*h,this._w=l*d*h-p*m*M;break;case"ZYX":this._x=p*d*h-l*m*M,this._y=l*m*h+p*d*M,this._z=l*d*M-p*m*h,this._w=l*d*h+p*m*M;break;case"YZX":this._x=p*d*h+l*m*M,this._y=l*m*h+p*d*M,this._z=l*d*M-p*m*h,this._w=l*d*h-p*m*M;break;case"XZY":this._x=p*d*h-l*m*M,this._y=l*m*h-p*d*M,this._z=l*d*M+p*m*h,this._w=l*d*h+p*m*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],h=t[10],p=n+o+h;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(d-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+s*l-r*c,this._y=s*d+a*c+r*o-n*l,this._z=r*d+a*l+n*c-s*o,this._w=a*d-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,o),h=Math.sin((1-t)*d)/l,p=Math.sin(t*d)/l;return this._w=a*h+this._w*p,this._x=n*h+this._x*p,this._y=s*h+this._y*p,this._z=r*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),d=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*d,this.y=n+c*d+o*l-r*h,this.z=s+c*h+r*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nr.copy(this).projectOnVector(e),this.sub(nr)}reflect(e){return this.sub(nr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nr=new G,Xa=new ts;class Xe{constructor(e,t,n,s,r,a,o,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],h=n[7],p=n[2],m=n[5],M=n[8],S=s[0],_=s[3],f=s[6],D=s[1],R=s[4],b=s[7],O=s[2],C=s[5],U=s[8];return r[0]=a*S+o*D+c*O,r[3]=a*_+o*R+c*C,r[6]=a*f+o*b+c*U,r[1]=l*S+d*D+h*O,r[4]=l*_+d*R+h*C,r[7]=l*f+d*b+h*U,r[2]=p*S+m*D+M*O,r[5]=p*_+m*R+M*C,r[8]=p*f+m*b+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*r*d+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=d*a-o*l,p=o*c-d*r,m=l*r-a*c,M=t*h+n*p+s*m;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/M;return e[0]=h*S,e[1]=(s*l-d*n)*S,e[2]=(o*n-s*a)*S,e[3]=p*S,e[4]=(d*t-s*c)*S,e[5]=(s*r-o*t)*S,e[6]=m*S,e[7]=(n*c-l*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ir.makeScale(e,t)),this}rotate(e){return this.premultiply(ir.makeRotation(-e)),this}translate(e,t){return this.premultiply(ir.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ir=new Xe;function ll(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lc(){const i=Hs("canvas");return i.style.display="block",i}const $a={};function Ei(i){i in $a||($a[i]=!0,console.warn(i))}function Ic(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const qa=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ja=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uc(){const i={enabled:!0,workingColorSpace:Ri,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ot&&(s.r=An(s.r),s.g=An(s.g),s.b=An(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Nn?zs:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ei("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ei("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ri]:{primaries:e,whitePoint:n,transfer:zs,toXYZ:qa,fromXYZ:ja,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:qa,fromXYZ:ja,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),i}const nt=Uc();function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ti(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let oi;class Nc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{oi===void 0&&(oi=Hs("canvas")),oi.width=e.width,oi.height=e.height;const s=oi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=oi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=An(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(An(t[n]/255)*255):t[n]=An(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Oc=0;class La{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=es(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(sr(s[a].image)):r.push(sr(s[a]))}else r=sr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function sr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fc=0;const rr=new G;class kt extends Pi{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=Jn,s=Jn,r=hn,a=Qn,o=on,c=mn,l=kt.DEFAULT_ANISOTROPY,d=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=es(),this.name="",this.source=new La(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rr).x}get height(){return this.source.getSize(rr).y}get depth(){return this.source.getSize(rr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $r:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $r:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Jo;kt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,s=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],d=c[4],h=c[8],p=c[1],m=c[5],M=c[9],S=c[2],_=c[6],f=c[10];if(Math.abs(d-p)<.01&&Math.abs(h-S)<.01&&Math.abs(M-_)<.01){if(Math.abs(d+p)<.1&&Math.abs(h+S)<.1&&Math.abs(M+_)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(l+1)/2,b=(m+1)/2,O=(f+1)/2,C=(d+p)/4,U=(h+S)/4,B=(M+_)/4;return R>b&&R>O?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=C/n,r=U/n):b>O?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=C/s,r=B/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=U/r,s=B/r),this.set(n,s,r,t),this}let D=Math.sqrt((_-M)*(_-M)+(h-S)*(h-S)+(p-d)*(p-d));return Math.abs(D)<.001&&(D=1),this.x=(_-M)/D,this.y=(h-S)/D,this.z=(p-d)/D,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bc extends Pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new kt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new La(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends Bc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class cl extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vc extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ns{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cs.copy(n.boundingBox)),cs.applyMatrix4(e.matrixWorld),this.union(cs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zi),ds.subVectors(this.max,zi),li.subVectors(e.a,zi),ci.subVectors(e.b,zi),di.subVectors(e.c,zi),Cn.subVectors(ci,li),Pn.subVectors(di,ci),Hn.subVectors(li,di);let t=[0,-Cn.z,Cn.y,0,-Pn.z,Pn.y,0,-Hn.z,Hn.y,Cn.z,0,-Cn.x,Pn.z,0,-Pn.x,Hn.z,0,-Hn.x,-Cn.y,Cn.x,0,-Pn.y,Pn.x,0,-Hn.y,Hn.x,0];return!ar(t,li,ci,di,ds)||(t=[1,0,0,0,1,0,0,0,1],!ar(t,li,ci,di,ds))?!1:(us.crossVectors(Cn,Pn),t=[us.x,us.y,us.z],ar(t,li,ci,di,ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _n=[new G,new G,new G,new G,new G,new G,new G,new G],nn=new G,cs=new ns,li=new G,ci=new G,di=new G,Cn=new G,Pn=new G,Hn=new G,zi=new G,ds=new G,us=new G,Gn=new G;function ar(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Gn.fromArray(i,r);const o=s.x*Math.abs(Gn.x)+s.y*Math.abs(Gn.y)+s.z*Math.abs(Gn.z),c=e.dot(Gn),l=t.dot(Gn),d=n.dot(Gn);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const zc=new ns,ki=new G,or=new G;class is{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zc.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ki.subVectors(e,this.center);const t=ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ki,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(or.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ki.copy(e.center).add(or)),this.expandByPoint(ki.copy(e.center).sub(or))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const vn=new G,lr=new G,hs=new G,Dn=new G,cr=new G,fs=new G,dr=new G;class Ia{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){lr.copy(e).add(t).multiplyScalar(.5),hs.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(lr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(hs),o=Dn.dot(this.direction),c=-Dn.dot(hs),l=Dn.lengthSq(),d=Math.abs(1-a*a);let h,p,m,M;if(d>0)if(h=a*c-o,p=a*o-c,M=r*d,h>=0)if(p>=-M)if(p<=M){const S=1/d;h*=S,p*=S,m=h*(h+a*p+2*o)+p*(a*h+p+2*c)+l}else p=r,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*c)+l;else p=-r,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*c)+l;else p<=-M?(h=Math.max(0,-(-a*r+o)),p=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+p*(p+2*c)+l):p<=M?(h=0,p=Math.min(Math.max(-r,-c),r),m=p*(p+2*c)+l):(h=Math.max(0,-(a*r+o)),p=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+p*(p+2*c)+l);else p=a>0?-r:r,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(lr).addScaledVector(hs,p),m}intersectSphere(e,t){vn.subVectors(e.center,this.origin);const n=vn.dot(this.direction),s=vn.dot(vn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),d>=0?(r=(e.min.y-p.y)*d,a=(e.max.y-p.y)*d):(r=(e.max.y-p.y)*d,a=(e.min.y-p.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-p.z)*h,c=(e.max.z-p.z)*h):(o=(e.max.z-p.z)*h,c=(e.min.z-p.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,n,s,r){cr.subVectors(t,e),fs.subVectors(n,e),dr.crossVectors(cr,fs);let a=this.direction.dot(dr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Dn.subVectors(this.origin,e);const c=o*this.direction.dot(fs.crossVectors(Dn,fs));if(c<0)return null;const l=o*this.direction.dot(cr.cross(Dn));if(l<0||c+l>a)return null;const d=-o*Dn.dot(dr);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,n,s,r,a,o,c,l,d,h,p,m,M,S,_){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,d,h,p,m,M,S,_)}set(e,t,n,s,r,a,o,c,l,d,h,p,m,M,S,_){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=d,f[10]=h,f[14]=p,f[3]=m,f[7]=M,f[11]=S,f[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ui.setFromMatrixColumn(e,0).length(),r=1/ui.setFromMatrixColumn(e,1).length(),a=1/ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const p=a*d,m=a*h,M=o*d,S=o*h;t[0]=c*d,t[4]=-c*h,t[8]=l,t[1]=m+M*l,t[5]=p-S*l,t[9]=-o*c,t[2]=S-p*l,t[6]=M+m*l,t[10]=a*c}else if(e.order==="YXZ"){const p=c*d,m=c*h,M=l*d,S=l*h;t[0]=p+S*o,t[4]=M*o-m,t[8]=a*l,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=m*o-M,t[6]=S+p*o,t[10]=a*c}else if(e.order==="ZXY"){const p=c*d,m=c*h,M=l*d,S=l*h;t[0]=p-S*o,t[4]=-a*h,t[8]=M+m*o,t[1]=m+M*o,t[5]=a*d,t[9]=S-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const p=a*d,m=a*h,M=o*d,S=o*h;t[0]=c*d,t[4]=M*l-m,t[8]=p*l+S,t[1]=c*h,t[5]=S*l+p,t[9]=m*l-M,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const p=a*c,m=a*l,M=o*c,S=o*l;t[0]=c*d,t[4]=S-p*h,t[8]=M*h+m,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=m*h+M,t[10]=p-S*h}else if(e.order==="XZY"){const p=a*c,m=a*l,M=o*c,S=o*l;t[0]=c*d,t[4]=-h,t[8]=l*d,t[1]=p*h+S,t[5]=a*d,t[9]=m*h-M,t[2]=M*h-m,t[6]=o*d,t[10]=S*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kc,e,Hc)}lookAt(e,t,n){const s=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Ln.crossVectors(n,Wt),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Ln.crossVectors(n,Wt)),Ln.normalize(),ps.crossVectors(Wt,Ln),s[0]=Ln.x,s[4]=ps.x,s[8]=Wt.x,s[1]=Ln.y,s[5]=ps.y,s[9]=Wt.y,s[2]=Ln.z,s[6]=ps.z,s[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],h=n[5],p=n[9],m=n[13],M=n[2],S=n[6],_=n[10],f=n[14],D=n[3],R=n[7],b=n[11],O=n[15],C=s[0],U=s[4],B=s[8],A=s[12],T=s[1],L=s[5],J=s[9],q=s[13],j=s[2],ie=s[6],Y=s[10],oe=s[14],$=s[3],ee=s[7],te=s[11],me=s[15];return r[0]=a*C+o*T+c*j+l*$,r[4]=a*U+o*L+c*ie+l*ee,r[8]=a*B+o*J+c*Y+l*te,r[12]=a*A+o*q+c*oe+l*me,r[1]=d*C+h*T+p*j+m*$,r[5]=d*U+h*L+p*ie+m*ee,r[9]=d*B+h*J+p*Y+m*te,r[13]=d*A+h*q+p*oe+m*me,r[2]=M*C+S*T+_*j+f*$,r[6]=M*U+S*L+_*ie+f*ee,r[10]=M*B+S*J+_*Y+f*te,r[14]=M*A+S*q+_*oe+f*me,r[3]=D*C+R*T+b*j+O*$,r[7]=D*U+R*L+b*ie+O*ee,r[11]=D*B+R*J+b*Y+O*te,r[15]=D*A+R*q+b*oe+O*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],h=e[6],p=e[10],m=e[14],M=e[3],S=e[7],_=e[11],f=e[15];return M*(+r*c*h-s*l*h-r*o*p+n*l*p+s*o*m-n*c*m)+S*(+t*c*m-t*l*p+r*a*p-s*a*m+s*l*d-r*c*d)+_*(+t*l*h-t*o*m-r*a*h+n*a*m+r*o*d-n*l*d)+f*(-s*o*d-t*c*h+t*o*p+s*a*h-n*a*p+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=e[9],p=e[10],m=e[11],M=e[12],S=e[13],_=e[14],f=e[15],D=h*_*l-S*p*l+S*c*m-o*_*m-h*c*f+o*p*f,R=M*p*l-d*_*l-M*c*m+a*_*m+d*c*f-a*p*f,b=d*S*l-M*h*l+M*o*m-a*S*m-d*o*f+a*h*f,O=M*h*c-d*S*c-M*o*p+a*S*p+d*o*_-a*h*_,C=t*D+n*R+s*b+r*O;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/C;return e[0]=D*U,e[1]=(S*p*r-h*_*r-S*s*m+n*_*m+h*s*f-n*p*f)*U,e[2]=(o*_*r-S*c*r+S*s*l-n*_*l-o*s*f+n*c*f)*U,e[3]=(h*c*r-o*p*r-h*s*l+n*p*l+o*s*m-n*c*m)*U,e[4]=R*U,e[5]=(d*_*r-M*p*r+M*s*m-t*_*m-d*s*f+t*p*f)*U,e[6]=(M*c*r-a*_*r-M*s*l+t*_*l+a*s*f-t*c*f)*U,e[7]=(a*p*r-d*c*r+d*s*l-t*p*l-a*s*m+t*c*m)*U,e[8]=b*U,e[9]=(M*h*r-d*S*r-M*n*m+t*S*m+d*n*f-t*h*f)*U,e[10]=(a*S*r-M*o*r+M*n*l-t*S*l-a*n*f+t*o*f)*U,e[11]=(d*o*r-a*h*r-d*n*l+t*h*l+a*n*m-t*o*m)*U,e[12]=O*U,e[13]=(d*S*s-M*h*s+M*n*p-t*S*p-d*n*_+t*h*_)*U,e[14]=(M*o*s-a*S*s-M*n*c+t*S*c+a*n*_-t*o*_)*U,e[15]=(a*h*s-d*o*s+d*n*c-t*h*c-a*n*p+t*o*p)*U,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,d=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+n,d*c-s*a,0,l*c-s*o,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,d=a+a,h=o+o,p=r*l,m=r*d,M=r*h,S=a*d,_=a*h,f=o*h,D=c*l,R=c*d,b=c*h,O=n.x,C=n.y,U=n.z;return s[0]=(1-(S+f))*O,s[1]=(m+b)*O,s[2]=(M-R)*O,s[3]=0,s[4]=(m-b)*C,s[5]=(1-(p+f))*C,s[6]=(_+D)*C,s[7]=0,s[8]=(M+R)*U,s[9]=(_-D)*U,s[10]=(1-(p+S))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ui.set(s[0],s[1],s[2]).length();const a=ui.set(s[4],s[5],s[6]).length(),o=ui.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],sn.copy(this);const l=1/r,d=1/a,h=1/o;return sn.elements[0]*=l,sn.elements[1]*=l,sn.elements[2]*=l,sn.elements[4]*=d,sn.elements[5]*=d,sn.elements[6]*=d,sn.elements[8]*=h,sn.elements[9]*=h,sn.elements[10]*=h,t.setFromRotationMatrix(sn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=fn,c=!1){const l=this.elements,d=2*r/(t-e),h=2*r/(n-s),p=(t+e)/(t-e),m=(n+s)/(n-s);let M,S;if(c)M=r/(a-r),S=a*r/(a-r);else if(o===fn)M=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===ks)M=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=M,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=fn,c=!1){const l=this.elements,d=2/(t-e),h=2/(n-s),p=-(t+e)/(t-e),m=-(n+s)/(n-s);let M,S;if(c)M=1/(a-r),S=a/(a-r);else if(o===fn)M=-2/(a-r),S=-(a+r)/(a-r);else if(o===ks)M=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=h,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=M,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ui=new G,sn=new mt,kc=new G(0,0,0),Hc=new G(1,1,1),Ln=new G,ps=new G,Wt=new G,Ya=new mt,Ka=new ts;class cn{constructor(e=0,t=0,n=0,s=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],d=s[9],h=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ya.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ya,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ka.setFromEuler(this),this.setFromQuaternion(Ka,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class dl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gc=0;const Za=new G,hi=new ts,xn=new mt,ms=new G,Hi=new G,Wc=new G,Xc=new ts,Ja=new G(1,0,0),Qa=new G(0,1,0),eo=new G(0,0,1),to={type:"added"},$c={type:"removed"},fi={type:"childadded",child:null},ur={type:"childremoved",child:null};class yt extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new G,t=new cn,n=new ts,s=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new Xe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.multiply(hi),this}rotateOnWorldAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.premultiply(hi),this}rotateX(e){return this.rotateOnAxis(Ja,e)}rotateY(e){return this.rotateOnAxis(Qa,e)}rotateZ(e){return this.rotateOnAxis(eo,e)}translateOnAxis(e,t){return Za.copy(e).applyQuaternion(this.quaternion),this.position.add(Za.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ja,e)}translateY(e){return this.translateOnAxis(Qa,e)}translateZ(e){return this.translateOnAxis(eo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ms.copy(e):ms.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Hi,ms,this.up):xn.lookAt(ms,Hi,this.up),this.quaternion.setFromRotationMatrix(xn),s&&(xn.extractRotation(s.matrixWorld),hi.setFromRotationMatrix(xn),this.quaternion.premultiply(hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(to),fi.child=e,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($c),ur.child=e,this.dispatchEvent(ur),ur.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(to),fi.child=e,this.dispatchEvent(fi),fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,e,Wc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,Xc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),h=a(e.shapes),p=a(e.skeletons),m=a(e.animations),M=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),M.length>0&&(n.nodes=M)}return n.object=s,n;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}yt.DEFAULT_UP=new G(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new G,Mn=new G,hr=new G,Sn=new G,pi=new G,mi=new G,no=new G,fr=new G,pr=new G,mr=new G,gr=new gt,_r=new gt,vr=new gt;class an{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),rn.subVectors(e,t),s.cross(rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){rn.subVectors(s,t),Mn.subVectors(n,t),hr.subVectors(e,t);const a=rn.dot(rn),o=rn.dot(Mn),c=rn.dot(hr),l=Mn.dot(Mn),d=Mn.dot(hr),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const p=1/h,m=(l*c-o*d)*p,M=(a*d-o*c)*p;return r.set(1-m-M,M,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Sn.x),c.addScaledVector(a,Sn.y),c.addScaledVector(o,Sn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return gr.setScalar(0),_r.setScalar(0),vr.setScalar(0),gr.fromBufferAttribute(e,t),_r.fromBufferAttribute(e,n),vr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(gr,r.x),a.addScaledVector(_r,r.y),a.addScaledVector(vr,r.z),a}static isFrontFacing(e,t,n,s){return rn.subVectors(n,t),Mn.subVectors(e,t),rn.cross(Mn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),rn.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return an.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;pi.subVectors(s,n),mi.subVectors(r,n),fr.subVectors(e,n);const c=pi.dot(fr),l=mi.dot(fr);if(c<=0&&l<=0)return t.copy(n);pr.subVectors(e,s);const d=pi.dot(pr),h=mi.dot(pr);if(d>=0&&h<=d)return t.copy(s);const p=c*h-d*l;if(p<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(pi,a);mr.subVectors(e,r);const m=pi.dot(mr),M=mi.dot(mr);if(M>=0&&m<=M)return t.copy(r);const S=m*l-c*M;if(S<=0&&l>=0&&M<=0)return o=l/(l-M),t.copy(n).addScaledVector(mi,o);const _=d*M-m*h;if(_<=0&&h-d>=0&&m-M>=0)return no.subVectors(r,s),o=(h-d)/(h-d+(m-M)),t.copy(s).addScaledVector(no,o);const f=1/(_+S+p);return a=S*f,o=p*f,t.copy(n).addScaledVector(pi,a).addScaledVector(mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ul={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},gs={h:0,s:0,l:0};function xr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=Dc(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=xr(a,r,e+1/3),this.g=xr(a,r,e),this.b=xr(a,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=$t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const n=ul[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return nt.workingToColorSpace(bt.copy(this),e),Math.round(Ze(bt.r*255,0,255))*65536+Math.round(Ze(bt.g*255,0,255))*256+Math.round(Ze(bt.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(bt.copy(this),t);const n=bt.r,s=bt.g,r=bt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=d<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=$t){nt.workingToColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,s=bt.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(In),this.setHSL(In.h+e,In.s+t,In.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(In),e.getHSL(gs);const n=tr(In.h,gs.h,t),s=tr(In.s,gs.s,t),r=tr(In.l,gs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new je;je.NAMES=ul;let qc=0;class gn extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qc++}),this.uuid=es(),this.name="",this.type="Material",this.blending=yi,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nr,this.blendDst=Or,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ha,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nr&&(n.blendSrc=this.blendSrc),this.blendDst!==Or&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ha&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hl extends gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new G,_s=new it;let jc=0;class pn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ga,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_s.fromBufferAttribute(this,t),_s.applyMatrix3(e),this.setXY(t,_s.x,_s.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),s=Vt(s,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ga&&(e.usage=this.usage),e}}class fl extends pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pl extends pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ft extends pn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Yc=0;const Kt=new mt,Mr=new yt,gi=new G,Xt=new ns,Gi=new ns,St=new G;class en extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ll(e)?pl:fl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return Mr.lookAt(e),Mr.updateMatrix(),this.applyMatrix4(Mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ft(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Xt.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Gi.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Xt.min,Gi.min),Xt.expandByPoint(St),St.addVectors(Xt.max,Gi.max),Xt.expandByPoint(St)):(Xt.expandByPoint(Gi.min),Xt.expandByPoint(Gi.max))}Xt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)St.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(St));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)St.fromBufferAttribute(o,l),c&&(gi.fromBufferAttribute(e,l),St.add(gi)),s=Math.max(s,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let B=0;B<n.count;B++)o[B]=new G,c[B]=new G;const l=new G,d=new G,h=new G,p=new it,m=new it,M=new it,S=new G,_=new G;function f(B,A,T){l.fromBufferAttribute(n,B),d.fromBufferAttribute(n,A),h.fromBufferAttribute(n,T),p.fromBufferAttribute(r,B),m.fromBufferAttribute(r,A),M.fromBufferAttribute(r,T),d.sub(l),h.sub(l),m.sub(p),M.sub(p);const L=1/(m.x*M.y-M.x*m.y);isFinite(L)&&(S.copy(d).multiplyScalar(M.y).addScaledVector(h,-m.y).multiplyScalar(L),_.copy(h).multiplyScalar(m.x).addScaledVector(d,-M.x).multiplyScalar(L),o[B].add(S),o[A].add(S),o[T].add(S),c[B].add(_),c[A].add(_),c[T].add(_))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let B=0,A=D.length;B<A;++B){const T=D[B],L=T.start,J=T.count;for(let q=L,j=L+J;q<j;q+=3)f(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const R=new G,b=new G,O=new G,C=new G;function U(B){O.fromBufferAttribute(s,B),C.copy(O);const A=o[B];R.copy(A),R.sub(O.multiplyScalar(O.dot(A))).normalize(),b.crossVectors(C,A);const L=b.dot(c[B])<0?-1:1;a.setXYZW(B,R.x,R.y,R.z,L)}for(let B=0,A=D.length;B<A;++B){const T=D[B],L=T.start,J=T.count;for(let q=L,j=L+J;q<j;q+=3)U(e.getX(q+0)),U(e.getX(q+1)),U(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const s=new G,r=new G,a=new G,o=new G,c=new G,l=new G,d=new G,h=new G;if(e)for(let p=0,m=e.count;p<m;p+=3){const M=e.getX(p+0),S=e.getX(p+1),_=e.getX(p+2);s.fromBufferAttribute(t,M),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,_),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,_),o.add(d),c.add(d),l.add(d),n.setXYZ(M,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,h=o.normalized,p=new l.constructor(c.length*d);let m=0,M=0;for(let S=0,_=c.length;S<_;S++){o.isInterleavedBufferAttribute?m=c[S]*o.data.stride+o.offset:m=c[S]*d;for(let f=0;f<d;f++)p[M++]=l[m++]}return new pn(p,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let d=0,h=l.length;d<h;d++){const p=l[d],m=e(p,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,p=l.length;h<p;h++){const m=l[h];d.push(m.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const d=s[l];this.setAttribute(l,d.clone(t))}const r=e.morphAttributes;for(const l in r){const d=[],h=r[l];for(let p=0,m=h.length;p<m;p++)d.push(h[p].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const io=new mt,Wn=new Ia,vs=new is,so=new G,xs=new G,Ms=new G,Ss=new G,Sr=new G,ys=new G,ro=new G,Es=new G;class Qt extends yt{constructor(e=new en,t=new hl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ys.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=o[c],h=r[c];d!==0&&(Sr.fromBufferAttribute(h,e),a?ys.addScaledVector(Sr,d):ys.addScaledVector(Sr.sub(t),d))}t.add(ys)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(r),Wn.copy(e.ray).recast(e.near),!(vs.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(vs,so)===null||Wn.origin.distanceToSquared(so)>(e.far-e.near)**2))&&(io.copy(r).invert(),Wn.copy(e.ray).applyMatrix4(io),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let M=0,S=p.length;M<S;M++){const _=p[M],f=a[_.materialIndex],D=Math.max(_.start,m.start),R=Math.min(o.count,Math.min(_.start+_.count,m.start+m.count));for(let b=D,O=R;b<O;b+=3){const C=o.getX(b),U=o.getX(b+1),B=o.getX(b+2);s=Ts(this,f,e,n,l,d,h,C,U,B),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const M=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let _=M,f=S;_<f;_+=3){const D=o.getX(_),R=o.getX(_+1),b=o.getX(_+2);s=Ts(this,a,e,n,l,d,h,D,R,b),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let M=0,S=p.length;M<S;M++){const _=p[M],f=a[_.materialIndex],D=Math.max(_.start,m.start),R=Math.min(c.count,Math.min(_.start+_.count,m.start+m.count));for(let b=D,O=R;b<O;b+=3){const C=b,U=b+1,B=b+2;s=Ts(this,f,e,n,l,d,h,C,U,B),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const M=Math.max(0,m.start),S=Math.min(c.count,m.start+m.count);for(let _=M,f=S;_<f;_+=3){const D=_,R=_+1,b=_+2;s=Ts(this,a,e,n,l,d,h,D,R,b),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function Kc(i,e,t,n,s,r,a,o){let c;if(e.side===zt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Bn,o),c===null)return null;Es.copy(o),Es.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Es);return l<t.near||l>t.far?null:{distance:l,point:Es.clone(),object:i}}function Ts(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,xs),i.getVertexPosition(c,Ms),i.getVertexPosition(l,Ss);const d=Kc(i,e,t,n,xs,Ms,Ss,ro);if(d){const h=new G;an.getBarycoord(ro,xs,Ms,Ss,h),s&&(d.uv=an.getInterpolatedAttribute(s,o,c,l,h,new it)),r&&(d.uv1=an.getInterpolatedAttribute(r,o,c,l,h,new it)),a&&(d.normal=an.getInterpolatedAttribute(a,o,c,l,h,new G),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a:o,b:c,c:l,normal:new G,materialIndex:0};an.getNormal(xs,Ms,Ss,p.normal),d.face=p,d.barycoord=h}return d}class ss extends en{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],d=[],h=[];let p=0,m=0;M("z","y","x",-1,-1,n,t,e,a,r,0),M("z","y","x",1,-1,n,t,-e,a,r,1),M("x","z","y",1,1,e,n,t,s,a,2),M("x","z","y",1,-1,e,n,-t,s,a,3),M("x","y","z",1,-1,e,t,n,s,r,4),M("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(d,3)),this.setAttribute("uv",new Ft(h,2));function M(S,_,f,D,R,b,O,C,U,B,A){const T=b/U,L=O/B,J=b/2,q=O/2,j=C/2,ie=U+1,Y=B+1;let oe=0,$=0;const ee=new G;for(let te=0;te<Y;te++){const me=te*L-q;for(let ke=0;ke<ie;ke++){const rt=ke*T-J;ee[S]=rt*D,ee[_]=me*R,ee[f]=j,l.push(ee.x,ee.y,ee.z),ee[S]=0,ee[_]=0,ee[f]=C>0?1:-1,d.push(ee.x,ee.y,ee.z),h.push(ke/U),h.push(1-te/B),oe+=1}}for(let te=0;te<B;te++)for(let me=0;me<U;me++){const ke=p+me+ie*te,rt=p+me+ie*(te+1),Je=p+(me+1)+ie*(te+1),X=p+(me+1)+ie*te;c.push(ke,rt,X),c.push(rt,Je,X),$+=6}o.addGroup(m,$,A),m+=$,p+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ci(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ot(i){const e={};for(let t=0;t<i.length;t++){const n=Ci(i[t]);for(const s in n)e[s]=n[s]}return e}function Zc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ml(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Jc={clone:Ci,merge:Ot};var Qc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ed=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qc,this.fragmentShader=ed,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ci(e.uniforms),this.uniformsGroups=Zc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gl extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Un=new G,ao=new it,oo=new it;class Jt extends gl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ma*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ma*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Un.x,Un.y).multiplyScalar(-e/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-e/Un.z)}getViewSize(e,t){return this.getViewBounds(e,ao,oo),t.subVectors(oo,ao)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(er*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _i=-90,vi=1;class td extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Jt(_i,vi,e,t);s.layers=this.layers,this.add(s);const r=new Jt(_i,vi,e,t);r.layers=this.layers,this.add(r);const a=new Jt(_i,vi,e,t);a.layers=this.layers,this.add(a);const o=new Jt(_i,vi,e,t);o.layers=this.layers,this.add(o);const c=new Jt(_i,vi,e,t);c.layers=this.layers,this.add(c);const l=new Jt(_i,vi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,d]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(h,p,m),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class _l extends kt{constructor(e=[],t=Ai,n,s,r,a,o,c,l,d){super(e,t,n,s,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nd extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new _l(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ss(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:On});r.uniforms.tEquirect.value=t;const a=new Qt(s,r),o=t.minFilter;return t.minFilter===Qn&&(t.minFilter=hn),new td(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class ei extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const id={type:"move"};class yr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const S of e.hand.values()){const _=t.getJointPose(S,n),f=this._getHandJoint(l,S);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],p=d.position.distanceTo(h.position),m=.02,M=.005;l.inputState.pinching&&p>m+M?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=m-M&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(id)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ei;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class sd extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Er=new G,rd=new G,ad=new Xe;class jn{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Er.subVectors(n,t).cross(rd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Er),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ad.getNormalMatrix(e),s=this.coplanarPoint(Er).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new is,od=new it(.5,.5),bs=new G;class Ua{constructor(e=new jn,t=new jn,n=new jn,s=new jn,r=new jn,a=new jn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],d=r[4],h=r[5],p=r[6],m=r[7],M=r[8],S=r[9],_=r[10],f=r[11],D=r[12],R=r[13],b=r[14],O=r[15];if(s[0].setComponents(l-a,m-d,f-M,O-D).normalize(),s[1].setComponents(l+a,m+d,f+M,O+D).normalize(),s[2].setComponents(l+o,m+h,f+S,O+R).normalize(),s[3].setComponents(l-o,m-h,f-S,O-R).normalize(),n)s[4].setComponents(c,p,_,b).normalize(),s[5].setComponents(l-c,m-p,f-_,O-b).normalize();else if(s[4].setComponents(l-c,m-p,f-_,O-b).normalize(),t===fn)s[5].setComponents(l+c,m+p,f+_,O+b).normalize();else if(t===ks)s[5].setComponents(c,p,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(e){Xn.center.set(0,0,0);const t=od.distanceTo(e.center);return Xn.radius=.7071067811865476+t,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(bs.x=s.normal.x>0?e.max.x:e.min.x,bs.y=s.normal.y>0?e.max.y:e.min.y,bs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ji extends gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gs=new G,Ws=new G,lo=new mt,Wi=new Ia,As=new is,Tr=new G,co=new G;class vl extends yt{constructor(e=new en,t=new ji){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Gs.fromBufferAttribute(t,s-1),Ws.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Gs.distanceTo(Ws);e.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(s),As.radius+=r,e.ray.intersectsSphere(As)===!1)return;lo.copy(s).invert(),Wi.copy(e.ray).applyMatrix4(lo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=n.index,p=n.attributes.position;if(d!==null){const m=Math.max(0,a.start),M=Math.min(d.count,a.start+a.count);for(let S=m,_=M-1;S<_;S+=l){const f=d.getX(S),D=d.getX(S+1),R=ws(this,e,Wi,c,f,D,S);R&&t.push(R)}if(this.isLineLoop){const S=d.getX(M-1),_=d.getX(m),f=ws(this,e,Wi,c,S,_,M-1);f&&t.push(f)}}else{const m=Math.max(0,a.start),M=Math.min(p.count,a.start+a.count);for(let S=m,_=M-1;S<_;S+=l){const f=ws(this,e,Wi,c,S,S+1,S);f&&t.push(f)}if(this.isLineLoop){const S=ws(this,e,Wi,c,M-1,m,M-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ws(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Gs.fromBufferAttribute(o,s),Ws.fromBufferAttribute(o,r),t.distanceSqToSegment(Gs,Ws,Tr,co)>n)return;Tr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Tr);if(!(l<e.near||l>e.far))return{distance:l,point:co.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const uo=new G,ho=new G;class fo extends vl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)uo.fromBufferAttribute(t,s),ho.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+uo.distanceTo(ho);e.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $i extends gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const po=new mt,Sa=new Ia,Rs=new is,Cs=new G;class br extends yt{constructor(e=new en,t=new $i){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(s),Rs.radius+=r,e.ray.intersectsSphere(Rs)===!1)return;po.copy(s).invert(),Sa.copy(e.ray).applyMatrix4(po);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const p=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let M=p,S=m;M<S;M++){const _=l.getX(M);Cs.fromBufferAttribute(h,_),mo(Cs,_,c,s,e,t,this)}}else{const p=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let M=p,S=m;M<S;M++)Cs.fromBufferAttribute(h,M),mo(Cs,M,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function mo(i,e,t,n,s,r,a){const o=Sa.distanceSqToPoint(i);if(o<t){const c=new G;Sa.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class xl extends kt{constructor(e,t,n=ti,s,r,a,o=ln,c=ln,l,d=Zi,h=1){if(d!==Zi&&d!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:h};super(p,s,r,a,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new La(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class rs extends en{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,d=c+1,h=e/o,p=t/c,m=[],M=[],S=[],_=[];for(let f=0;f<d;f++){const D=f*p-a;for(let R=0;R<l;R++){const b=R*h-r;M.push(b,-D,0),S.push(0,0,1),_.push(R/o),_.push(1-f/c)}}for(let f=0;f<c;f++)for(let D=0;D<o;D++){const R=D+l*f,b=D+l*(f+1),O=D+1+l*(f+1),C=D+1+l*f;m.push(R,b,C),m.push(b,O,C)}this.setIndex(m),this.setAttribute("position",new Ft(M,3)),this.setAttribute("normal",new Ft(S,3)),this.setAttribute("uv",new Ft(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ar extends gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Da,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ld extends gn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new je(16777215),this.specular=new je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Da,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cd extends gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dd extends gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const go={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ud{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,h){return l.push(d,h),this},this.removeHandler=function(d){const h=l.indexOf(d);return h!==-1&&l.splice(h,2),this},this.getHandler=function(d){for(let h=0,p=l.length;h<p;h+=2){const m=l[h],M=l[h+1];if(m.global&&(m.lastIndex=0),m.test(d))return M}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const hd=new ud;class Na{constructor(e){this.manager=e!==void 0?e:hd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Na.DEFAULT_MATERIAL_NAME="__DEFAULT";const yn={};class fd extends Error{constructor(e,t){super(e),this.response=t}}class pd extends Na{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=go.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(yn[e]!==void 0){yn[e].push({onLoad:t,onProgress:n,onError:s});return}yn[e]=[],yn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const d=yn[e],h=l.body.getReader(),p=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=p?parseInt(p):0,M=m!==0;let S=0;const _=new ReadableStream({start(f){D();function D(){h.read().then(({done:R,value:b})=>{if(R)f.close();else{S+=b.byteLength;const O=new ProgressEvent("progress",{lengthComputable:M,loaded:S,total:m});for(let C=0,U=d.length;C<U;C++){const B=d[C];B.onProgress&&B.onProgress(O)}f.enqueue(b),D()}},R=>{f.error(R)})}}});return new Response(_)}else throw new fd(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return l.json();default:if(o==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),p=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(p);return l.arrayBuffer().then(M=>m.decode(M))}}}).then(l=>{go.add(`file:${e}`,l);const d=yn[e];delete yn[e];for(let h=0,p=d.length;h<p;h++){const m=d[h];m.onLoad&&m.onLoad(l)}}).catch(l=>{const d=yn[e];if(d===void 0)throw this.manager.itemError(e),l;delete yn[e];for(let h=0,p=d.length;h<p;h++){const m=d[h];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Ml extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const wr=new mt,_o=new G,vo=new G;class md{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ua,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_o.setFromMatrixPosition(e.matrixWorld),t.position.copy(_o),vo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vo),t.updateMatrixWorld(),wr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wr,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Sl extends gl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class gd extends md{constructor(){super(new Sl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _d extends Ml{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new gd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vd extends Ml{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class xd extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function xo(i,e,t,n){const s=Md(n);switch(t){case nl:return i*e;case sl:return i*e/s.components*s.byteLength;case Ra:return i*e/s.components*s.byteLength;case rl:return i*e*2/s.components*s.byteLength;case Ca:return i*e*2/s.components*s.byteLength;case il:return i*e*3/s.components*s.byteLength;case on:return i*e*4/s.components*s.byteLength;case Pa:return i*e*4/s.components*s.byteLength;case Us:case Ns:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Os:case Fs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yr:case Zr:return Math.max(i,16)*Math.max(e,8)/4;case jr:case Kr:return Math.max(i,8)*Math.max(e,8)/2;case Jr:case Qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case na:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ia:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case sa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ra:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case aa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case oa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case la:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ca:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case da:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ua:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ha:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case fa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case pa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Bs:case ma:case ga:return Math.ceil(i/4)*Math.ceil(e/4)*16;case al:case _a:return Math.ceil(i/4)*Math.ceil(e/4)*8;case va:case xa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Md(i){switch(i){case mn:case Qo:return{byteLength:1,components:1};case Yi:case el:case Qi:return{byteLength:2,components:1};case Aa:case wa:return{byteLength:2,components:4};case ti:case ba:case bn:return{byteLength:4,components:1};case tl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ea}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ea);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yl(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Sd(i){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,h=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,d),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const d=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,d);else{h.sort((m,M)=>m.start-M.start);let p=0;for(let m=1;m<h.length;m++){const M=h[p],S=h[m];S.start<=M.start+M.count+1?M.count=Math.max(M.count,S.start+S.count-M.start):(++p,h[p]=S)}h.length=p+1;for(let m=0,M=h.length;m<M;m++){const S=h[m];i.bufferSubData(l,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var yd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ed=`#ifdef USE_ALPHAHASH
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
#endif`,Td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ad=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rd=`#ifdef USE_AOMAP
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
#endif`,Cd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pd=`#ifdef USE_BATCHING
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
#endif`,Dd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Id=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ud=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nd=`#ifdef USE_IRIDESCENCE
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
#endif`,Od=`#ifdef USE_BUMPMAP
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
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xd=`#define PI 3.141592653589793
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
} // validated`,$d=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qd=`vec3 transformedNormal = objectNormal;
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
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eu=`#ifdef USE_ENVMAP
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
#endif`,tu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nu=`#ifdef USE_ENVMAP
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
#endif`,iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,su=`#ifdef USE_ENVMAP
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
#endif`,ru=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,au=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ou=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cu=`#ifdef USE_GRADIENTMAP
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
}`,du=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fu=`uniform bool receiveShadow;
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
#endif`,pu=`#ifdef USE_ENVMAP
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
#endif`,mu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_u=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xu=`PhysicalMaterial material;
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
#endif`,Mu=`struct PhysicalMaterial {
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
}`,Su=`
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
#endif`,yu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Eu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Au=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ru=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Du=`#if defined( USE_POINTS_UV )
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
#endif`,Lu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ou=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fu=`#ifdef USE_MORPHTARGETS
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
#endif`,Bu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ku=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wu=`#ifdef USE_NORMALMAP
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
#endif`,Xu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$u=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ju=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ku=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ju=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,th=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ih=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ah=`float getShadowMask() {
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
}`,oh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lh=`#ifdef USE_SKINNING
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
#endif`,ch=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dh=`#ifdef USE_SKINNING
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
#endif`,uh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ph=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mh=`#ifdef USE_TRANSMISSION
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
#endif`,gh=`#ifdef USE_TRANSMISSION
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
#endif`,_h=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yh=`uniform sampler2D t2D;
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
}`,Eh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Th=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ah=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wh=`#include <common>
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
}`,Rh=`#if DEPTH_PACKING == 3200
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
}`,Ch=`#define DISTANCE
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
}`,Ph=`#define DISTANCE
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
}`,Dh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ih=`uniform float scale;
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
}`,Uh=`uniform vec3 diffuse;
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
}`,Nh=`#include <common>
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
}`,Oh=`uniform vec3 diffuse;
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
}`,Fh=`#define LAMBERT
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
}`,Bh=`#define LAMBERT
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
}`,Vh=`#define MATCAP
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
}`,zh=`#define MATCAP
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
}`,kh=`#define NORMAL
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
}`,Hh=`#define NORMAL
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
}`,Gh=`#define PHONG
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
}`,Wh=`#define PHONG
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
}`,Xh=`#define STANDARD
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
}`,$h=`#define STANDARD
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
}`,qh=`#define TOON
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
}`,jh=`#define TOON
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
}`,Yh=`uniform float size;
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
}`,Kh=`uniform vec3 diffuse;
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
}`,Zh=`#include <common>
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
}`,Jh=`uniform vec3 color;
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
}`,Qh=`uniform float rotation;
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
}`,ef=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:yd,alphahash_pars_fragment:Ed,alphamap_fragment:Td,alphamap_pars_fragment:bd,alphatest_fragment:Ad,alphatest_pars_fragment:wd,aomap_fragment:Rd,aomap_pars_fragment:Cd,batching_pars_vertex:Pd,batching_vertex:Dd,begin_vertex:Ld,beginnormal_vertex:Id,bsdfs:Ud,iridescence_fragment:Nd,bumpmap_pars_fragment:Od,clipping_planes_fragment:Fd,clipping_planes_pars_fragment:Bd,clipping_planes_pars_vertex:Vd,clipping_planes_vertex:zd,color_fragment:kd,color_pars_fragment:Hd,color_pars_vertex:Gd,color_vertex:Wd,common:Xd,cube_uv_reflection_fragment:$d,defaultnormal_vertex:qd,displacementmap_pars_vertex:jd,displacementmap_vertex:Yd,emissivemap_fragment:Kd,emissivemap_pars_fragment:Zd,colorspace_fragment:Jd,colorspace_pars_fragment:Qd,envmap_fragment:eu,envmap_common_pars_fragment:tu,envmap_pars_fragment:nu,envmap_pars_vertex:iu,envmap_physical_pars_fragment:pu,envmap_vertex:su,fog_vertex:ru,fog_pars_vertex:au,fog_fragment:ou,fog_pars_fragment:lu,gradientmap_pars_fragment:cu,lightmap_pars_fragment:du,lights_lambert_fragment:uu,lights_lambert_pars_fragment:hu,lights_pars_begin:fu,lights_toon_fragment:mu,lights_toon_pars_fragment:gu,lights_phong_fragment:_u,lights_phong_pars_fragment:vu,lights_physical_fragment:xu,lights_physical_pars_fragment:Mu,lights_fragment_begin:Su,lights_fragment_maps:yu,lights_fragment_end:Eu,logdepthbuf_fragment:Tu,logdepthbuf_pars_fragment:bu,logdepthbuf_pars_vertex:Au,logdepthbuf_vertex:wu,map_fragment:Ru,map_pars_fragment:Cu,map_particle_fragment:Pu,map_particle_pars_fragment:Du,metalnessmap_fragment:Lu,metalnessmap_pars_fragment:Iu,morphinstance_vertex:Uu,morphcolor_vertex:Nu,morphnormal_vertex:Ou,morphtarget_pars_vertex:Fu,morphtarget_vertex:Bu,normal_fragment_begin:Vu,normal_fragment_maps:zu,normal_pars_fragment:ku,normal_pars_vertex:Hu,normal_vertex:Gu,normalmap_pars_fragment:Wu,clearcoat_normal_fragment_begin:Xu,clearcoat_normal_fragment_maps:$u,clearcoat_pars_fragment:qu,iridescence_pars_fragment:ju,opaque_fragment:Yu,packing:Ku,premultiplied_alpha_fragment:Zu,project_vertex:Ju,dithering_fragment:Qu,dithering_pars_fragment:eh,roughnessmap_fragment:th,roughnessmap_pars_fragment:nh,shadowmap_pars_fragment:ih,shadowmap_pars_vertex:sh,shadowmap_vertex:rh,shadowmask_pars_fragment:ah,skinbase_vertex:oh,skinning_pars_vertex:lh,skinning_vertex:ch,skinnormal_vertex:dh,specularmap_fragment:uh,specularmap_pars_fragment:hh,tonemapping_fragment:fh,tonemapping_pars_fragment:ph,transmission_fragment:mh,transmission_pars_fragment:gh,uv_pars_fragment:_h,uv_pars_vertex:vh,uv_vertex:xh,worldpos_vertex:Mh,background_vert:Sh,background_frag:yh,backgroundCube_vert:Eh,backgroundCube_frag:Th,cube_vert:bh,cube_frag:Ah,depth_vert:wh,depth_frag:Rh,distanceRGBA_vert:Ch,distanceRGBA_frag:Ph,equirect_vert:Dh,equirect_frag:Lh,linedashed_vert:Ih,linedashed_frag:Uh,meshbasic_vert:Nh,meshbasic_frag:Oh,meshlambert_vert:Fh,meshlambert_frag:Bh,meshmatcap_vert:Vh,meshmatcap_frag:zh,meshnormal_vert:kh,meshnormal_frag:Hh,meshphong_vert:Gh,meshphong_frag:Wh,meshphysical_vert:Xh,meshphysical_frag:$h,meshtoon_vert:qh,meshtoon_frag:jh,points_vert:Yh,points_frag:Kh,shadow_vert:Zh,shadow_frag:Jh,sprite_vert:Qh,sprite_frag:ef},_e={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},un={basic:{uniforms:Ot([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Ot([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new je(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Ot([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Ot([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Ot([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new je(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Ot([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Ot([_e.points,_e.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Ot([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Ot([_e.common,_e.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Ot([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Ot([_e.sprite,_e.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Ot([_e.common,_e.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Ot([_e.lights,_e.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};un.physical={uniforms:Ot([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Ps={r:0,b:0,g:0},$n=new cn,tf=new mt;function nf(i,e,t,n,s,r,a){const o=new je(0);let c=r===!0?0:1,l,d,h=null,p=0,m=null;function M(R){let b=R.isScene===!0?R.background:null;return b&&b.isTexture&&(b=(R.backgroundBlurriness>0?t:e).get(b)),b}function S(R){let b=!1;const O=M(R);O===null?f(o,c):O&&O.isColor&&(f(O,1),b=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(R,b){const O=M(b);O&&(O.isCubeTexture||O.mapping===Xs)?(d===void 0&&(d=new Qt(new ss(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Ci(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,U,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),$n.copy(b.backgroundRotation),$n.x*=-1,$n.y*=-1,$n.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),d.material.uniforms.envMap.value=O,d.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(tf.makeRotationFromEuler($n)),d.material.toneMapped=nt.getTransfer(O.colorSpace)!==ot,(h!==O||p!==O.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,h=O,p=O.version,m=i.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null)):O&&O.isTexture&&(l===void 0&&(l=new Qt(new rs(2,2),new Vn({name:"BackgroundMaterial",uniforms:Ci(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=O,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=nt.getTransfer(O.colorSpace)!==ot,O.matrixAutoUpdate===!0&&O.updateMatrix(),l.material.uniforms.uvTransform.value.copy(O.matrix),(h!==O||p!==O.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=O,p=O.version,m=i.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null))}function f(R,b){R.getRGB(Ps,ml(i)),n.buffers.color.setClear(Ps.r,Ps.g,Ps.b,b,a)}function D(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(R,b=1){o.set(R),c=b,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(R){c=R,f(o,c)},render:S,addToRenderList:_,dispose:D}}function sf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,a=!1;function o(T,L,J,q,j){let ie=!1;const Y=h(q,J,L);r!==Y&&(r=Y,l(r.object)),ie=m(T,q,J,j),ie&&M(T,q,J,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(ie||a)&&(a=!1,b(T,L,J,q),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return i.createVertexArray()}function l(T){return i.bindVertexArray(T)}function d(T){return i.deleteVertexArray(T)}function h(T,L,J){const q=J.wireframe===!0;let j=n[T.id];j===void 0&&(j={},n[T.id]=j);let ie=j[L.id];ie===void 0&&(ie={},j[L.id]=ie);let Y=ie[q];return Y===void 0&&(Y=p(c()),ie[q]=Y),Y}function p(T){const L=[],J=[],q=[];for(let j=0;j<t;j++)L[j]=0,J[j]=0,q[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:J,attributeDivisors:q,object:T,attributes:{},index:null}}function m(T,L,J,q){const j=r.attributes,ie=L.attributes;let Y=0;const oe=J.getAttributes();for(const $ in oe)if(oe[$].location>=0){const te=j[$];let me=ie[$];if(me===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(me=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(me=T.instanceColor)),te===void 0||te.attribute!==me||me&&te.data!==me.data)return!0;Y++}return r.attributesNum!==Y||r.index!==q}function M(T,L,J,q){const j={},ie=L.attributes;let Y=0;const oe=J.getAttributes();for(const $ in oe)if(oe[$].location>=0){let te=ie[$];te===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(te=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(te=T.instanceColor));const me={};me.attribute=te,te&&te.data&&(me.data=te.data),j[$]=me,Y++}r.attributes=j,r.attributesNum=Y,r.index=q}function S(){const T=r.newAttributes;for(let L=0,J=T.length;L<J;L++)T[L]=0}function _(T){f(T,0)}function f(T,L){const J=r.newAttributes,q=r.enabledAttributes,j=r.attributeDivisors;J[T]=1,q[T]===0&&(i.enableVertexAttribArray(T),q[T]=1),j[T]!==L&&(i.vertexAttribDivisor(T,L),j[T]=L)}function D(){const T=r.newAttributes,L=r.enabledAttributes;for(let J=0,q=L.length;J<q;J++)L[J]!==T[J]&&(i.disableVertexAttribArray(J),L[J]=0)}function R(T,L,J,q,j,ie,Y){Y===!0?i.vertexAttribIPointer(T,L,J,j,ie):i.vertexAttribPointer(T,L,J,q,j,ie)}function b(T,L,J,q){S();const j=q.attributes,ie=J.getAttributes(),Y=L.defaultAttributeValues;for(const oe in ie){const $=ie[oe];if($.location>=0){let ee=j[oe];if(ee===void 0&&(oe==="instanceMatrix"&&T.instanceMatrix&&(ee=T.instanceMatrix),oe==="instanceColor"&&T.instanceColor&&(ee=T.instanceColor)),ee!==void 0){const te=ee.normalized,me=ee.itemSize,ke=e.get(ee);if(ke===void 0)continue;const rt=ke.buffer,Je=ke.type,X=ke.bytesPerElement,ce=Je===i.INT||Je===i.UNSIGNED_INT||ee.gpuType===ba;if(ee.isInterleavedBufferAttribute){const ne=ee.data,ue=ne.stride,Ee=ee.offset;if(ne.isInstancedInterleavedBuffer){for(let Ne=0;Ne<$.locationSize;Ne++)f($.location+Ne,ne.meshPerAttribute);T.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ne=0;Ne<$.locationSize;Ne++)_($.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let Ne=0;Ne<$.locationSize;Ne++)R($.location+Ne,me/$.locationSize,Je,te,ue*X,(Ee+me/$.locationSize*Ne)*X,ce)}else{if(ee.isInstancedBufferAttribute){for(let ne=0;ne<$.locationSize;ne++)f($.location+ne,ee.meshPerAttribute);T.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ne=0;ne<$.locationSize;ne++)_($.location+ne);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let ne=0;ne<$.locationSize;ne++)R($.location+ne,me/$.locationSize,Je,te,me*X,me/$.locationSize*ne*X,ce)}}else if(Y!==void 0){const te=Y[oe];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv($.location,te);break;case 3:i.vertexAttrib3fv($.location,te);break;case 4:i.vertexAttrib4fv($.location,te);break;default:i.vertexAttrib1fv($.location,te)}}}}D()}function O(){B();for(const T in n){const L=n[T];for(const J in L){const q=L[J];for(const j in q)d(q[j].object),delete q[j];delete L[J]}delete n[T]}}function C(T){if(n[T.id]===void 0)return;const L=n[T.id];for(const J in L){const q=L[J];for(const j in q)d(q[j].object),delete q[j];delete L[J]}delete n[T.id]}function U(T){for(const L in n){const J=n[L];if(J[T.id]===void 0)continue;const q=J[T.id];for(const j in q)d(q[j].object),delete q[j];delete J[T.id]}}function B(){A(),a=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:B,resetDefaultState:A,dispose:O,releaseStatesOfGeometry:C,releaseStatesOfProgram:U,initAttributes:S,enableAttribute:_,disableUnusedAttributes:D}}function rf(i,e,t){let n;function s(l){n=l}function r(l,d){i.drawArrays(n,l,d),t.update(d,n,1)}function a(l,d,h){h!==0&&(i.drawArraysInstanced(n,l,d,h),t.update(d,n,h))}function o(l,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,h);let m=0;for(let M=0;M<h;M++)m+=d[M];t.update(m,n,1)}function c(l,d,h,p){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let M=0;M<l.length;M++)a(l[M],d[M],p[M]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,d,0,p,0,h);let M=0;for(let S=0;S<h;S++)M+=d[S]*p[S];t.update(M,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function af(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(U){return!(U!==on&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){const B=U===Qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==mn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==bn&&!B)}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=M>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:M,maxTextureSize:S,maxCubemapSize:_,maxAttributes:f,maxVertexUniforms:D,maxVaryings:R,maxFragmentUniforms:b,vertexTextures:O,maxSamples:C}}function of(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new jn,o=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const m=h.length!==0||p||n!==0||s;return s=p,n=h.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,p){t=d(h,p,0)},this.setState=function(h,p,m){const M=h.clippingPlanes,S=h.clipIntersection,_=h.clipShadows,f=i.get(h);if(!s||M===null||M.length===0||r&&!_)r?d(null):l();else{const D=r?0:n,R=D*4;let b=f.clippingState||null;c.value=b,b=d(M,p,R,m);for(let O=0;O!==R;++O)b[O]=t[O];f.clippingState=b,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=D}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,p,m,M){const S=h!==null?h.length:0;let _=null;if(S!==0){if(_=c.value,M!==!0||_===null){const f=m+S*4,D=p.matrixWorldInverse;o.getNormalMatrix(D),(_===null||_.length<f)&&(_=new Float32Array(f));for(let R=0,b=m;R!==S;++R,b+=4)a.copy(h[R]).applyMatrix4(D,o),a.normal.toArray(_,b),_[b+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,_}}function lf(i){let e=new WeakMap;function t(a,o){return o===Wr?a.mapping=Ai:o===Xr&&(a.mapping=wi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Wr||o===Xr)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new nd(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Si=4,Mo=[.125,.215,.35,.446,.526,.582],Zn=20,Rr=new Sl,So=new je;let Cr=null,Pr=0,Dr=0,Lr=!1;const Yn=(1+Math.sqrt(5))/2,xi=1/Yn,yo=[new G(-Yn,xi,0),new G(Yn,xi,0),new G(-xi,0,Yn),new G(xi,0,Yn),new G(0,Yn,-xi),new G(0,Yn,xi),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],cf=new G;class Eo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=cf}=r;Cr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),Lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ao(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cr,Pr,Dr),this._renderer.xr.enabled=Lr,e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),Lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Qi,format:on,colorSpace:Ri,depthBuffer:!1},s=To(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=To(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=df(r)),this._blurMaterial=uf(r,e,t)}return s}_compileMaterial(e){const t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,Rr)}_sceneToCubeUV(e,t,n,s,r){const c=new Jt(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,m=h.toneMapping;h.getClearColor(So),h.toneMapping=Fn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const S=new hl({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),_=new Qt(new ss,S);let f=!1;const D=e.background;D?D.isColor&&(S.color.copy(D),e.background=null,f=!0):(S.color.copy(So),f=!0);for(let R=0;R<6;R++){const b=R%3;b===0?(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[R],r.y,r.z)):b===1?(c.up.set(0,0,l[R]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[R],r.z)):(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[R]));const O=this._cubeSize;Ds(s,b*O,R>2?O:0,O,O),h.setRenderTarget(s),f&&h.render(_,c),h.render(e,c)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=m,h.autoClear=p,e.background=D}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ai||e.mapping===wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ao()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Qt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Ds(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Rr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=yo[(s-r-1)%yo.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Qt(this._lodPlanes[s],l),p=l.uniforms,m=this._sizeLods[n]-1,M=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Zn-1),S=r/M,_=isFinite(r)?1+Math.floor(d*S):Zn;_>Zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Zn}`);const f=[];let D=0;for(let U=0;U<Zn;++U){const B=U/S,A=Math.exp(-B*B/2);f.push(A),U===0?D+=A:U<_&&(D+=2*A)}for(let U=0;U<f.length;U++)f[U]=f[U]/D;p.envMap.value=e.texture,p.samples.value=_,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:R}=this;p.dTheta.value=M,p.mipInt.value=R-n;const b=this._sizeLods[s],O=3*b*(s>R-Si?s-R+Si:0),C=4*(this._cubeSize-b);Ds(t,O,C,3*b,2*b),c.setRenderTarget(t),c.render(h,Rr)}}function df(i){const e=[],t=[],n=[];let s=i;const r=i-Si+1+Mo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Si?c=Mo[a-i+Si-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),d=-l,h=1+l,p=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,M=6,S=3,_=2,f=1,D=new Float32Array(S*M*m),R=new Float32Array(_*M*m),b=new Float32Array(f*M*m);for(let C=0;C<m;C++){const U=C%3*2/3-1,B=C>2?0:-1,A=[U,B,0,U+2/3,B,0,U+2/3,B+1,0,U,B,0,U+2/3,B+1,0,U,B+1,0];D.set(A,S*M*C),R.set(p,_*M*C);const T=[C,C,C,C,C,C];b.set(T,f*M*C)}const O=new en;O.setAttribute("position",new pn(D,S)),O.setAttribute("uv",new pn(R,_)),O.setAttribute("faceIndex",new pn(b,f)),e.push(O),s>Si&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function To(i,e,t){const n=new ni(i,e,t);return n.texture.mapping=Xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ds(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function uf(i,e,t){const n=new Float32Array(Zn),s=new G(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function bo(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ao(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Oa(){return`

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
	`}function hf(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Wr||c===Xr,d=c===Ai||c===wi;if(l||d){let h=e.get(o);const p=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new Eo(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return l&&m&&m.height>0||d&&m&&s(m)?(t===null&&(t=new Eo(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ff(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ei("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function pf(i,e,t,n){const s={},r=new WeakMap;function a(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const M in p.attributes)e.remove(p.attributes[M]);p.removeEventListener("dispose",a),delete s[p.id];const m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(h,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function c(h){const p=h.attributes;for(const m in p)e.update(p[m],i.ARRAY_BUFFER)}function l(h){const p=[],m=h.index,M=h.attributes.position;let S=0;if(m!==null){const D=m.array;S=m.version;for(let R=0,b=D.length;R<b;R+=3){const O=D[R+0],C=D[R+1],U=D[R+2];p.push(O,C,C,U,U,O)}}else if(M!==void 0){const D=M.array;S=M.version;for(let R=0,b=D.length/3-1;R<b;R+=3){const O=R+0,C=R+1,U=R+2;p.push(O,C,C,U,U,O)}}else return;const _=new(ll(p)?pl:fl)(p,1);_.version=S;const f=r.get(h);f&&e.remove(f),r.set(h,_)}function d(h){const p=r.get(h);if(p){const m=h.index;m!==null&&p.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:d}}function mf(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,m){i.drawElements(n,m,r,p*a),t.update(m,n,1)}function l(p,m,M){M!==0&&(i.drawElementsInstanced(n,m,r,p*a,M),t.update(m,n,M))}function d(p,m,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,M);let _=0;for(let f=0;f<M;f++)_+=m[f];t.update(_,n,1)}function h(p,m,M,S){if(M===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let f=0;f<p.length;f++)l(p[f]/a,m[f],S[f]);else{_.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,S,0,M);let f=0;for(let D=0;D<M;D++)f+=m[D]*S[D];t.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function gf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function _f(i,e,t){const n=new WeakMap,s=new gt;function r(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let p=n.get(o);if(p===void 0||p.count!==h){let A=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",A)};p!==void 0&&p.texture.dispose();const m=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],D=o.morphAttributes.color||[];let R=0;m===!0&&(R=1),M===!0&&(R=2),S===!0&&(R=3);let b=o.attributes.position.count*R,O=1;b>e.maxTextureSize&&(O=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const C=new Float32Array(b*O*4*h),U=new cl(C,b,O,h);U.type=bn,U.needsUpdate=!0;const B=R*4;for(let T=0;T<h;T++){const L=_[T],J=f[T],q=D[T],j=b*O*4*T;for(let ie=0;ie<L.count;ie++){const Y=ie*B;m===!0&&(s.fromBufferAttribute(L,ie),C[j+Y+0]=s.x,C[j+Y+1]=s.y,C[j+Y+2]=s.z,C[j+Y+3]=0),M===!0&&(s.fromBufferAttribute(J,ie),C[j+Y+4]=s.x,C[j+Y+5]=s.y,C[j+Y+6]=s.z,C[j+Y+7]=0),S===!0&&(s.fromBufferAttribute(q,ie),C[j+Y+8]=s.x,C[j+Y+9]=s.y,C[j+Y+10]=s.z,C[j+Y+11]=q.itemSize===4?s.w:1)}}p={count:h,texture:U,size:new it(b,O)},n.set(o,p),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let S=0;S<l.length;S++)m+=l[S];const M=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function vf(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const El=new kt,wo=new xl(1,1),Tl=new cl,bl=new Vc,Al=new _l,Ro=[],Co=[],Po=new Float32Array(16),Do=new Float32Array(9),Lo=new Float32Array(4);function Di(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Ro[s];if(r===void 0&&(r=new Float32Array(s),Ro[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function $s(i,e){let t=Co[e];t===void 0&&(t=new Int32Array(e),Co[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function xf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Mf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function Sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function yf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function Ef(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;Lo.set(n),i.uniformMatrix2fv(this.addr,!1,Lo),Mt(t,n)}}function Tf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;Do.set(n),i.uniformMatrix3fv(this.addr,!1,Do),Mt(t,n)}}function bf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;Po.set(n),i.uniformMatrix4fv(this.addr,!1,Po),Mt(t,n)}}function Af(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function Rf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function Cf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function Pf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Df(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function Lf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function If(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function Uf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wo.compareFunction=ol,r=wo):r=El,t.setTexture2D(e||r,s)}function Nf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||bl,s)}function Of(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Al,s)}function Ff(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Tl,s)}function Bf(i){switch(i){case 5126:return xf;case 35664:return Mf;case 35665:return Sf;case 35666:return yf;case 35674:return Ef;case 35675:return Tf;case 35676:return bf;case 5124:case 35670:return Af;case 35667:case 35671:return wf;case 35668:case 35672:return Rf;case 35669:case 35673:return Cf;case 5125:return Pf;case 36294:return Df;case 36295:return Lf;case 36296:return If;case 35678:case 36198:case 36298:case 36306:case 35682:return Uf;case 35679:case 36299:case 36307:return Nf;case 35680:case 36300:case 36308:case 36293:return Of;case 36289:case 36303:case 36311:case 36292:return Ff}}function Vf(i,e){i.uniform1fv(this.addr,e)}function zf(i,e){const t=Di(e,this.size,2);i.uniform2fv(this.addr,t)}function kf(i,e){const t=Di(e,this.size,3);i.uniform3fv(this.addr,t)}function Hf(i,e){const t=Di(e,this.size,4);i.uniform4fv(this.addr,t)}function Gf(i,e){const t=Di(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wf(i,e){const t=Di(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Xf(i,e){const t=Di(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $f(i,e){i.uniform1iv(this.addr,e)}function qf(i,e){i.uniform2iv(this.addr,e)}function jf(i,e){i.uniform3iv(this.addr,e)}function Yf(i,e){i.uniform4iv(this.addr,e)}function Kf(i,e){i.uniform1uiv(this.addr,e)}function Zf(i,e){i.uniform2uiv(this.addr,e)}function Jf(i,e){i.uniform3uiv(this.addr,e)}function Qf(i,e){i.uniform4uiv(this.addr,e)}function ep(i,e,t){const n=this.cache,s=e.length,r=$s(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||El,r[a])}function tp(i,e,t){const n=this.cache,s=e.length,r=$s(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||bl,r[a])}function np(i,e,t){const n=this.cache,s=e.length,r=$s(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Al,r[a])}function ip(i,e,t){const n=this.cache,s=e.length,r=$s(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Tl,r[a])}function sp(i){switch(i){case 5126:return Vf;case 35664:return zf;case 35665:return kf;case 35666:return Hf;case 35674:return Gf;case 35675:return Wf;case 35676:return Xf;case 5124:case 35670:return $f;case 35667:case 35671:return qf;case 35668:case 35672:return jf;case 35669:case 35673:return Yf;case 5125:return Kf;case 36294:return Zf;case 36295:return Jf;case 36296:return Qf;case 35678:case 36198:case 36298:case 36306:case 35682:return ep;case 35679:case 36299:case 36307:return tp;case 35680:case 36300:case 36308:case 36293:return np;case 36289:case 36303:case 36311:case 36292:return ip}}class rp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Bf(t.type)}}class ap{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sp(t.type)}}class op{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ir=/(\w+)(\])?(\[|\.)?/g;function Io(i,e){i.seq.push(e),i.map[e.id]=e}function lp(i,e,t){const n=i.name,s=n.length;for(Ir.lastIndex=0;;){const r=Ir.exec(n),a=Ir.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Io(t,l===void 0?new rp(o,i,e):new ap(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new op(o),Io(t,h)),t=h}}}class Vs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);lp(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Uo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const cp=37297;let dp=0;function up(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const No=new Xe;function hp(i){nt._getMatrix(No,nt.workingColorSpace,i);const e=`mat3( ${No.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case zs:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Oo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+up(i.getShaderSource(e),o)}else return r}function fp(i,e){const t=hp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function pp(i,e){let t;switch(e){case fc:t="Linear";break;case pc:t="Reinhard";break;case mc:t="Cineon";break;case gc:t="ACESFilmic";break;case vc:t="AgX";break;case xc:t="Neutral";break;case _c:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ls=new G;function mp(){nt.getLuminanceCoefficients(Ls);const i=Ls.x.toFixed(4),e=Ls.y.toFixed(4),t=Ls.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qi).join(`
`)}function _p(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function qi(i){return i!==""}function Fo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ya(i){return i.replace(xp,Sp)}const Mp=new Map;function Sp(i,e){let t=qe[e];if(t===void 0){const n=Mp.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ya(t)}const yp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vo(i){return i.replace(yp,Ep)}function Ep(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zo(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Tp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===$l?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(e="SHADOWMAP_TYPE_VSM"),e}function bp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ai:case wi:e="ENVMAP_TYPE_CUBE";break;case Xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ap(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case wi:e="ENVMAP_MODE_REFRACTION";break}return e}function wp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ta:e="ENVMAP_BLENDING_MULTIPLY";break;case uc:e="ENVMAP_BLENDING_MIX";break;case hc:e="ENVMAP_BLENDING_ADD";break}return e}function Rp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Cp(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Tp(t),l=bp(t),d=Ap(t),h=wp(t),p=Rp(t),m=gp(t),M=_p(r),S=s.createProgram();let _,f,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(qi).join(`
`),_.length>0&&(_+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(qi).join(`
`),f.length>0&&(f+=`
`)):(_=[zo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qi).join(`
`),f=[zo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?qe.tonemapping_pars_fragment:"",t.toneMapping!==Fn?pp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,fp("linearToOutputTexel",t.outputColorSpace),mp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qi).join(`
`)),a=ya(a),a=Fo(a,t),a=Bo(a,t),o=ya(o),o=Fo(o,t),o=Bo(o,t),a=Vo(a),o=Vo(o),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,f=["#define varying in",t.glslVersion===Wa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const R=D+_+a,b=D+f+o,O=Uo(s,s.VERTEX_SHADER,R),C=Uo(s,s.FRAGMENT_SHADER,b);s.attachShader(S,O),s.attachShader(S,C),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function U(L){if(i.debug.checkShaderErrors){const J=s.getProgramInfoLog(S)||"",q=s.getShaderInfoLog(O)||"",j=s.getShaderInfoLog(C)||"",ie=J.trim(),Y=q.trim(),oe=j.trim();let $=!0,ee=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,O,C);else{const te=Oo(s,O,"vertex"),me=Oo(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+ie+`
`+te+`
`+me)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(Y===""||oe==="")&&(ee=!1);ee&&(L.diagnostics={runnable:$,programLog:ie,vertexShader:{log:Y,prefix:_},fragmentShader:{log:oe,prefix:f}})}s.deleteShader(O),s.deleteShader(C),B=new Vs(s,S),A=vp(s,S)}let B;this.getUniforms=function(){return B===void 0&&U(this),B};let A;this.getAttributes=function(){return A===void 0&&U(this),A};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(S,cp)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dp++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=O,this.fragmentShader=C,this}let Pp=0;class Dp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Lp(e),t.set(e,n)),n}}class Lp{constructor(e){this.id=Pp++,this.code=e,this.usedTimes=0}}function Ip(i,e,t,n,s,r,a){const o=new dl,c=new Dp,l=new Set,d=[],h=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(A){return l.add(A),A===0?"uv":`uv${A}`}function _(A,T,L,J,q){const j=J.fog,ie=q.geometry,Y=A.isMeshStandardMaterial?J.environment:null,oe=(A.isMeshStandardMaterial?t:e).get(A.envMap||Y),$=oe&&oe.mapping===Xs?oe.image.height:null,ee=M[A.type];A.precision!==null&&(m=s.getMaxPrecision(A.precision),m!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",m,"instead."));const te=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,me=te!==void 0?te.length:0;let ke=0;ie.morphAttributes.position!==void 0&&(ke=1),ie.morphAttributes.normal!==void 0&&(ke=2),ie.morphAttributes.color!==void 0&&(ke=3);let rt,Je,X,ce;if(ee){const et=un[ee];rt=et.vertexShader,Je=et.fragmentShader}else rt=A.vertexShader,Je=A.fragmentShader,c.update(A),X=c.getVertexShaderID(A),ce=c.getFragmentShaderID(A);const ne=i.getRenderTarget(),ue=i.state.buffers.depth.getReversed(),Ee=q.isInstancedMesh===!0,Ne=q.isBatchedMesh===!0,dt=!!A.map,Ce=!!A.matcap,P=!!oe,st=!!A.aoMap,Ae=!!A.lightMap,Qe=!!A.bumpMap,De=!!A.normalMap,lt=!!A.displacementMap,ye=!!A.emissiveMap,We=!!A.metalnessMap,_t=!!A.roughnessMap,ut=A.anisotropy>0,w=A.clearcoat>0,x=A.dispersion>0,H=A.iridescence>0,Z=A.sheen>0,se=A.transmission>0,K=ut&&!!A.anisotropyMap,Pe=w&&!!A.clearcoatMap,he=w&&!!A.clearcoatNormalMap,be=w&&!!A.clearcoatRoughnessMap,we=H&&!!A.iridescenceMap,de=H&&!!A.iridescenceThicknessMap,ve=Z&&!!A.sheenColorMap,Oe=Z&&!!A.sheenRoughnessMap,Re=!!A.specularMap,ge=!!A.specularColorMap,Ge=!!A.specularIntensityMap,N=se&&!!A.transmissionMap,le=se&&!!A.thicknessMap,pe=!!A.gradientMap,Se=!!A.alphaMap,re=A.alphaTest>0,Q=!!A.alphaHash,Te=!!A.extensions;let He=Fn;A.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(He=i.toneMapping);const at={shaderID:ee,shaderType:A.type,shaderName:A.name,vertexShader:rt,fragmentShader:Je,defines:A.defines,customVertexShaderID:X,customFragmentShaderID:ce,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:m,batching:Ne,batchingColor:Ne&&q._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&q.instanceColor!==null,instancingMorph:Ee&&q.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ri,alphaToCoverage:!!A.alphaToCoverage,map:dt,matcap:Ce,envMap:P,envMapMode:P&&oe.mapping,envMapCubeUVHeight:$,aoMap:st,lightMap:Ae,bumpMap:Qe,normalMap:De,displacementMap:p&&lt,emissiveMap:ye,normalMapObjectSpace:De&&A.normalMapType===Ec,normalMapTangentSpace:De&&A.normalMapType===Da,metalnessMap:We,roughnessMap:_t,anisotropy:ut,anisotropyMap:K,clearcoat:w,clearcoatMap:Pe,clearcoatNormalMap:he,clearcoatRoughnessMap:be,dispersion:x,iridescence:H,iridescenceMap:we,iridescenceThicknessMap:de,sheen:Z,sheenColorMap:ve,sheenRoughnessMap:Oe,specularMap:Re,specularColorMap:ge,specularIntensityMap:Ge,transmission:se,transmissionMap:N,thicknessMap:le,gradientMap:pe,opaque:A.transparent===!1&&A.blending===yi&&A.alphaToCoverage===!1,alphaMap:Se,alphaTest:re,alphaHash:Q,combine:A.combine,mapUv:dt&&S(A.map.channel),aoMapUv:st&&S(A.aoMap.channel),lightMapUv:Ae&&S(A.lightMap.channel),bumpMapUv:Qe&&S(A.bumpMap.channel),normalMapUv:De&&S(A.normalMap.channel),displacementMapUv:lt&&S(A.displacementMap.channel),emissiveMapUv:ye&&S(A.emissiveMap.channel),metalnessMapUv:We&&S(A.metalnessMap.channel),roughnessMapUv:_t&&S(A.roughnessMap.channel),anisotropyMapUv:K&&S(A.anisotropyMap.channel),clearcoatMapUv:Pe&&S(A.clearcoatMap.channel),clearcoatNormalMapUv:he&&S(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&S(A.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&S(A.iridescenceMap.channel),iridescenceThicknessMapUv:de&&S(A.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&S(A.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&S(A.sheenRoughnessMap.channel),specularMapUv:Re&&S(A.specularMap.channel),specularColorMapUv:ge&&S(A.specularColorMap.channel),specularIntensityMapUv:Ge&&S(A.specularIntensityMap.channel),transmissionMapUv:N&&S(A.transmissionMap.channel),thicknessMapUv:le&&S(A.thicknessMap.channel),alphaMapUv:Se&&S(A.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(De||ut),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ie.attributes.uv&&(dt||Se),fog:!!j,useFog:A.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ue,skinning:q.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:ke,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:dt&&A.map.isVideoTexture===!0&&nt.getTransfer(A.map.colorSpace)===ot,decodeVideoTextureEmissive:ye&&A.emissiveMap.isVideoTexture===!0&&nt.getTransfer(A.emissiveMap.colorSpace)===ot,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Tn,flipSided:A.side===zt,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Te&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&A.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return at.vertexUv1s=l.has(1),at.vertexUv2s=l.has(2),at.vertexUv3s=l.has(3),l.clear(),at}function f(A){const T=[];if(A.shaderID?T.push(A.shaderID):(T.push(A.customVertexShaderID),T.push(A.customFragmentShaderID)),A.defines!==void 0)for(const L in A.defines)T.push(L),T.push(A.defines[L]);return A.isRawShaderMaterial===!1&&(D(T,A),R(T,A),T.push(i.outputColorSpace)),T.push(A.customProgramCacheKey),T.join()}function D(A,T){A.push(T.precision),A.push(T.outputColorSpace),A.push(T.envMapMode),A.push(T.envMapCubeUVHeight),A.push(T.mapUv),A.push(T.alphaMapUv),A.push(T.lightMapUv),A.push(T.aoMapUv),A.push(T.bumpMapUv),A.push(T.normalMapUv),A.push(T.displacementMapUv),A.push(T.emissiveMapUv),A.push(T.metalnessMapUv),A.push(T.roughnessMapUv),A.push(T.anisotropyMapUv),A.push(T.clearcoatMapUv),A.push(T.clearcoatNormalMapUv),A.push(T.clearcoatRoughnessMapUv),A.push(T.iridescenceMapUv),A.push(T.iridescenceThicknessMapUv),A.push(T.sheenColorMapUv),A.push(T.sheenRoughnessMapUv),A.push(T.specularMapUv),A.push(T.specularColorMapUv),A.push(T.specularIntensityMapUv),A.push(T.transmissionMapUv),A.push(T.thicknessMapUv),A.push(T.combine),A.push(T.fogExp2),A.push(T.sizeAttenuation),A.push(T.morphTargetsCount),A.push(T.morphAttributeCount),A.push(T.numDirLights),A.push(T.numPointLights),A.push(T.numSpotLights),A.push(T.numSpotLightMaps),A.push(T.numHemiLights),A.push(T.numRectAreaLights),A.push(T.numDirLightShadows),A.push(T.numPointLightShadows),A.push(T.numSpotLightShadows),A.push(T.numSpotLightShadowsWithMaps),A.push(T.numLightProbes),A.push(T.shadowMapType),A.push(T.toneMapping),A.push(T.numClippingPlanes),A.push(T.numClipIntersection),A.push(T.depthPacking)}function R(A,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),T.gradientMap&&o.enable(22),A.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),A.push(o.mask)}function b(A){const T=M[A.type];let L;if(T){const J=un[T];L=Jc.clone(J.uniforms)}else L=A.uniforms;return L}function O(A,T){let L;for(let J=0,q=d.length;J<q;J++){const j=d[J];if(j.cacheKey===T){L=j,++L.usedTimes;break}}return L===void 0&&(L=new Cp(i,T,A,r),d.push(L)),L}function C(A){if(--A.usedTimes===0){const T=d.indexOf(A);d[T]=d[d.length-1],d.pop(),A.destroy()}}function U(A){c.remove(A)}function B(){c.dispose()}return{getParameters:_,getProgramCacheKey:f,getUniforms:b,acquireProgram:O,releaseProgram:C,releaseShaderCache:U,programs:d,dispose:B}}function Up(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Np(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ko(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ho(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,p,m,M,S,_){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:p,material:m,groupOrder:M,renderOrder:h.renderOrder,z:S,group:_},i[e]=f):(f.id=h.id,f.object=h,f.geometry=p,f.material=m,f.groupOrder=M,f.renderOrder=h.renderOrder,f.z=S,f.group=_),e++,f}function o(h,p,m,M,S,_){const f=a(h,p,m,M,S,_);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function c(h,p,m,M,S,_){const f=a(h,p,m,M,S,_);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function l(h,p){t.length>1&&t.sort(h||Np),n.length>1&&n.sort(p||ko),s.length>1&&s.sort(p||ko)}function d(){for(let h=e,p=i.length;h<p;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:d,sort:l}}function Op(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ho,i.set(n,[a])):s>=r.length?(a=new Ho,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Fp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new je};break;case"SpotLight":t={position:new G,direction:new G,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function Bp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Vp=0;function zp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function kp(i){const e=new Fp,t=Bp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);const s=new G,r=new mt,a=new mt;function o(l){let d=0,h=0,p=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let m=0,M=0,S=0,_=0,f=0,D=0,R=0,b=0,O=0,C=0,U=0;l.sort(zp);for(let A=0,T=l.length;A<T;A++){const L=l[A],J=L.color,q=L.intensity,j=L.distance,ie=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=J.r*q,h+=J.g*q,p+=J.b*q;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],q);U++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const oe=L.shadow,$=t.get(L);$.shadowIntensity=oe.intensity,$.shadowBias=oe.bias,$.shadowNormalBias=oe.normalBias,$.shadowRadius=oe.radius,$.shadowMapSize=oe.mapSize,n.directionalShadow[m]=$,n.directionalShadowMap[m]=ie,n.directionalShadowMatrix[m]=L.shadow.matrix,D++}n.directional[m]=Y,m++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(J).multiplyScalar(q),Y.distance=j,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[S]=Y;const oe=L.shadow;if(L.map&&(n.spotLightMap[O]=L.map,O++,oe.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[S]=oe.matrix,L.castShadow){const $=t.get(L);$.shadowIntensity=oe.intensity,$.shadowBias=oe.bias,$.shadowNormalBias=oe.normalBias,$.shadowRadius=oe.radius,$.shadowMapSize=oe.mapSize,n.spotShadow[S]=$,n.spotShadowMap[S]=ie,b++}S++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(J).multiplyScalar(q),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[_]=Y,_++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const oe=L.shadow,$=t.get(L);$.shadowIntensity=oe.intensity,$.shadowBias=oe.bias,$.shadowNormalBias=oe.normalBias,$.shadowRadius=oe.radius,$.shadowMapSize=oe.mapSize,$.shadowCameraNear=oe.camera.near,$.shadowCameraFar=oe.camera.far,n.pointShadow[M]=$,n.pointShadowMap[M]=ie,n.pointShadowMatrix[M]=L.shadow.matrix,R++}n.point[M]=Y,M++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(q),Y.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[f]=Y,f++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=p;const B=n.hash;(B.directionalLength!==m||B.pointLength!==M||B.spotLength!==S||B.rectAreaLength!==_||B.hemiLength!==f||B.numDirectionalShadows!==D||B.numPointShadows!==R||B.numSpotShadows!==b||B.numSpotMaps!==O||B.numLightProbes!==U)&&(n.directional.length=m,n.spot.length=S,n.rectArea.length=_,n.point.length=M,n.hemi.length=f,n.directionalShadow.length=D,n.directionalShadowMap.length=D,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=D,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=b+O-C,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=U,B.directionalLength=m,B.pointLength=M,B.spotLength=S,B.rectAreaLength=_,B.hemiLength=f,B.numDirectionalShadows=D,B.numPointShadows=R,B.numSpotShadows=b,B.numSpotMaps=O,B.numLightProbes=U,n.version=Vp++)}function c(l,d){let h=0,p=0,m=0,M=0,S=0;const _=d.matrixWorldInverse;for(let f=0,D=l.length;f<D;f++){const R=l[f];if(R.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),h++}else if(R.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),m++}else if(R.isRectAreaLight){const b=n.rectArea[M];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(_),a.identity(),r.copy(R.matrixWorld),r.premultiply(_),a.extractRotation(r),b.halfWidth.set(R.width*.5,0,0),b.halfHeight.set(0,R.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),M++}else if(R.isPointLight){const b=n.point[p];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(_),p++}else if(R.isHemisphereLight){const b=n.hemi[S];b.direction.setFromMatrixPosition(R.matrixWorld),b.direction.transformDirection(_),S++}}}return{setup:o,setupView:c,state:n}}function Go(i){const e=new kp(i),t=[],n=[];function s(d){l.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Hp(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Go(i),e.set(s,[o])):r>=a.length?(o=new Go(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Gp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wp=`uniform sampler2D shadow_pass;
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
}`;function Xp(i,e,t){let n=new Ua;const s=new it,r=new it,a=new gt,o=new cd({depthPacking:yc}),c=new dd,l={},d=t.maxTextureSize,h={[Bn]:zt,[zt]:Bn,[Tn]:Tn},p=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:Gp,fragmentShader:Wp}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const M=new en;M.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Qt(M,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zo;let f=this.type;this.render=function(C,U,B){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||C.length===0)return;const A=i.getRenderTarget(),T=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),J=i.state;J.setBlending(On),J.buffers.depth.getReversed()?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const q=f!==En&&this.type===En,j=f===En&&this.type!==En;for(let ie=0,Y=C.length;ie<Y;ie++){const oe=C[ie],$=oe.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const ee=$.getFrameExtents();if(s.multiply(ee),r.copy($.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ee.x),s.x=r.x*ee.x,$.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ee.y),s.y=r.y*ee.y,$.mapSize.y=r.y)),$.map===null||q===!0||j===!0){const me=this.type!==En?{minFilter:ln,magFilter:ln}:{};$.map!==null&&$.map.dispose(),$.map=new ni(s.x,s.y,me),$.map.texture.name=oe.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const te=$.getViewportCount();for(let me=0;me<te;me++){const ke=$.getViewport(me);a.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),J.viewport(a),$.updateMatrices(oe,me),n=$.getFrustum(),b(U,B,$.camera,oe,this.type)}$.isPointLightShadow!==!0&&this.type===En&&D($,B),$.needsUpdate=!1}f=this.type,_.needsUpdate=!1,i.setRenderTarget(A,T,L)};function D(C,U){const B=e.update(S);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ni(s.x,s.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(U,null,B,p,S,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(U,null,B,m,S,null)}function R(C,U,B,A){let T=null;const L=B.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)T=L;else if(T=B.isPointLight===!0?c:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const J=T.uuid,q=U.uuid;let j=l[J];j===void 0&&(j={},l[J]=j);let ie=j[q];ie===void 0&&(ie=T.clone(),j[q]=ie,U.addEventListener("dispose",O)),T=ie}if(T.visible=U.visible,T.wireframe=U.wireframe,A===En?T.side=U.shadowSide!==null?U.shadowSide:U.side:T.side=U.shadowSide!==null?U.shadowSide:h[U.side],T.alphaMap=U.alphaMap,T.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,T.map=U.map,T.clipShadows=U.clipShadows,T.clippingPlanes=U.clippingPlanes,T.clipIntersection=U.clipIntersection,T.displacementMap=U.displacementMap,T.displacementScale=U.displacementScale,T.displacementBias=U.displacementBias,T.wireframeLinewidth=U.wireframeLinewidth,T.linewidth=U.linewidth,B.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const J=i.properties.get(T);J.light=B}return T}function b(C,U,B,A,T){if(C.visible===!1)return;if(C.layers.test(U.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&T===En)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,C.matrixWorld);const q=e.update(C),j=C.material;if(Array.isArray(j)){const ie=q.groups;for(let Y=0,oe=ie.length;Y<oe;Y++){const $=ie[Y],ee=j[$.materialIndex];if(ee&&ee.visible){const te=R(C,ee,A,T);C.onBeforeShadow(i,C,U,B,q,te,$),i.renderBufferDirect(B,null,q,te,C,$),C.onAfterShadow(i,C,U,B,q,te,$)}}}else if(j.visible){const ie=R(C,j,A,T);C.onBeforeShadow(i,C,U,B,q,ie,null),i.renderBufferDirect(B,null,q,ie,C,null),C.onAfterShadow(i,C,U,B,q,ie,null)}}const J=C.children;for(let q=0,j=J.length;q<j;q++)b(J[q],U,B,A,T)}function O(C){C.target.removeEventListener("dispose",O);for(const B in l){const A=l[B],T=C.target.uuid;T in A&&(A[T].dispose(),delete A[T])}}}const $p={[Fr]:Br,[Vr]:Hr,[zr]:Gr,[bi]:kr,[Br]:Fr,[Hr]:Vr,[Gr]:zr,[kr]:bi};function qp(i,e){function t(){let N=!1;const le=new gt;let pe=null;const Se=new gt(0,0,0,0);return{setMask:function(re){pe!==re&&!N&&(i.colorMask(re,re,re,re),pe=re)},setLocked:function(re){N=re},setClear:function(re,Q,Te,He,at){at===!0&&(re*=He,Q*=He,Te*=He),le.set(re,Q,Te,He),Se.equals(le)===!1&&(i.clearColor(re,Q,Te,He),Se.copy(le))},reset:function(){N=!1,pe=null,Se.set(-1,0,0,0)}}}function n(){let N=!1,le=!1,pe=null,Se=null,re=null;return{setReversed:function(Q){if(le!==Q){const Te=e.get("EXT_clip_control");Q?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),le=Q;const He=re;re=null,this.setClear(He)}},getReversed:function(){return le},setTest:function(Q){Q?ne(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(Q){pe!==Q&&!N&&(i.depthMask(Q),pe=Q)},setFunc:function(Q){if(le&&(Q=$p[Q]),Se!==Q){switch(Q){case Fr:i.depthFunc(i.NEVER);break;case Br:i.depthFunc(i.ALWAYS);break;case Vr:i.depthFunc(i.LESS);break;case bi:i.depthFunc(i.LEQUAL);break;case zr:i.depthFunc(i.EQUAL);break;case kr:i.depthFunc(i.GEQUAL);break;case Hr:i.depthFunc(i.GREATER);break;case Gr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Se=Q}},setLocked:function(Q){N=Q},setClear:function(Q){re!==Q&&(le&&(Q=1-Q),i.clearDepth(Q),re=Q)},reset:function(){N=!1,pe=null,Se=null,re=null,le=!1}}}function s(){let N=!1,le=null,pe=null,Se=null,re=null,Q=null,Te=null,He=null,at=null;return{setTest:function(et){N||(et?ne(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(et){le!==et&&!N&&(i.stencilMask(et),le=et)},setFunc:function(et,tn,qt){(pe!==et||Se!==tn||re!==qt)&&(i.stencilFunc(et,tn,qt),pe=et,Se=tn,re=qt)},setOp:function(et,tn,qt){(Q!==et||Te!==tn||He!==qt)&&(i.stencilOp(et,tn,qt),Q=et,Te=tn,He=qt)},setLocked:function(et){N=et},setClear:function(et){at!==et&&(i.clearStencil(et),at=et)},reset:function(){N=!1,le=null,pe=null,Se=null,re=null,Q=null,Te=null,He=null,at=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let d={},h={},p=new WeakMap,m=[],M=null,S=!1,_=null,f=null,D=null,R=null,b=null,O=null,C=null,U=new je(0,0,0),B=0,A=!1,T=null,L=null,J=null,q=null,j=null;const ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,oe=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=oe>=1):$.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=oe>=2);let ee=null,te={};const me=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),rt=new gt().fromArray(me),Je=new gt().fromArray(ke);function X(N,le,pe,Se){const re=new Uint8Array(4),Q=i.createTexture();i.bindTexture(N,Q),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<pe;Te++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,Se,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(le+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return Q}const ce={};ce[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(bi),Qe(!1),De(Ba),ne(i.CULL_FACE),st(On);function ne(N){d[N]!==!0&&(i.enable(N),d[N]=!0)}function ue(N){d[N]!==!1&&(i.disable(N),d[N]=!1)}function Ee(N,le){return h[N]!==le?(i.bindFramebuffer(N,le),h[N]=le,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=le),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=le),!0):!1}function Ne(N,le){let pe=m,Se=!1;if(N){pe=p.get(le),pe===void 0&&(pe=[],p.set(le,pe));const re=N.textures;if(pe.length!==re.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Te=re.length;Q<Te;Q++)pe[Q]=i.COLOR_ATTACHMENT0+Q;pe.length=re.length,Se=!0}}else pe[0]!==i.BACK&&(pe[0]=i.BACK,Se=!0);Se&&i.drawBuffers(pe)}function dt(N){return M!==N?(i.useProgram(N),M=N,!0):!1}const Ce={[Kn]:i.FUNC_ADD,[jl]:i.FUNC_SUBTRACT,[Yl]:i.FUNC_REVERSE_SUBTRACT};Ce[Kl]=i.MIN,Ce[Zl]=i.MAX;const P={[Jl]:i.ZERO,[Ql]:i.ONE,[ec]:i.SRC_COLOR,[Nr]:i.SRC_ALPHA,[ac]:i.SRC_ALPHA_SATURATE,[sc]:i.DST_COLOR,[nc]:i.DST_ALPHA,[tc]:i.ONE_MINUS_SRC_COLOR,[Or]:i.ONE_MINUS_SRC_ALPHA,[rc]:i.ONE_MINUS_DST_COLOR,[ic]:i.ONE_MINUS_DST_ALPHA,[oc]:i.CONSTANT_COLOR,[lc]:i.ONE_MINUS_CONSTANT_COLOR,[cc]:i.CONSTANT_ALPHA,[dc]:i.ONE_MINUS_CONSTANT_ALPHA};function st(N,le,pe,Se,re,Q,Te,He,at,et){if(N===On){S===!0&&(ue(i.BLEND),S=!1);return}if(S===!1&&(ne(i.BLEND),S=!0),N!==ql){if(N!==_||et!==A){if((f!==Kn||b!==Kn)&&(i.blendEquation(i.FUNC_ADD),f=Kn,b=Kn),et)switch(N){case yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Va:i.blendFunc(i.ONE,i.ONE);break;case za:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ka:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Va:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case za:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ka:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}D=null,R=null,O=null,C=null,U.set(0,0,0),B=0,_=N,A=et}return}re=re||le,Q=Q||pe,Te=Te||Se,(le!==f||re!==b)&&(i.blendEquationSeparate(Ce[le],Ce[re]),f=le,b=re),(pe!==D||Se!==R||Q!==O||Te!==C)&&(i.blendFuncSeparate(P[pe],P[Se],P[Q],P[Te]),D=pe,R=Se,O=Q,C=Te),(He.equals(U)===!1||at!==B)&&(i.blendColor(He.r,He.g,He.b,at),U.copy(He),B=at),_=N,A=!1}function Ae(N,le){N.side===Tn?ue(i.CULL_FACE):ne(i.CULL_FACE);let pe=N.side===zt;le&&(pe=!pe),Qe(pe),N.blending===yi&&N.transparent===!1?st(On):st(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const Se=N.stencilWrite;o.setTest(Se),Se&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ye(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(N){T!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),T=N)}function De(N){N!==Wl?(ne(i.CULL_FACE),N!==L&&(N===Ba?i.cullFace(i.BACK):N===Xl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),L=N}function lt(N){N!==J&&(Y&&i.lineWidth(N),J=N)}function ye(N,le,pe){N?(ne(i.POLYGON_OFFSET_FILL),(q!==le||j!==pe)&&(i.polygonOffset(le,pe),q=le,j=pe)):ue(i.POLYGON_OFFSET_FILL)}function We(N){N?ne(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)}function _t(N){N===void 0&&(N=i.TEXTURE0+ie-1),ee!==N&&(i.activeTexture(N),ee=N)}function ut(N,le,pe){pe===void 0&&(ee===null?pe=i.TEXTURE0+ie-1:pe=ee);let Se=te[pe];Se===void 0&&(Se={type:void 0,texture:void 0},te[pe]=Se),(Se.type!==N||Se.texture!==le)&&(ee!==pe&&(i.activeTexture(pe),ee=pe),i.bindTexture(N,le||ce[N]),Se.type=N,Se.texture=le)}function w(){const N=te[ee];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(N){rt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),rt.copy(N))}function Oe(N){Je.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Je.copy(N))}function Re(N,le){let pe=l.get(le);pe===void 0&&(pe=new WeakMap,l.set(le,pe));let Se=pe.get(N);Se===void 0&&(Se=i.getUniformBlockIndex(le,N.name),pe.set(N,Se))}function ge(N,le){const Se=l.get(le).get(N);c.get(le)!==Se&&(i.uniformBlockBinding(le,Se,N.__bindingPointIndex),c.set(le,Se))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ee=null,te={},h={},p=new WeakMap,m=[],M=null,S=!1,_=null,f=null,D=null,R=null,b=null,O=null,C=null,U=new je(0,0,0),B=0,A=!1,T=null,L=null,J=null,q=null,j=null,rt.set(0,0,i.canvas.width,i.canvas.height),Je.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:ue,bindFramebuffer:Ee,drawBuffers:Ne,useProgram:dt,setBlending:st,setMaterial:Ae,setFlipSided:Qe,setCullFace:De,setLineWidth:lt,setPolygonOffset:ye,setScissorTest:We,activeTexture:_t,bindTexture:ut,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:H,texImage2D:we,texImage3D:de,updateUBOMapping:Re,uniformBlockBinding:ge,texStorage2D:he,texStorage3D:be,texSubImage2D:Z,texSubImage3D:se,compressedTexSubImage2D:K,compressedTexSubImage3D:Pe,scissor:ve,viewport:Oe,reset:Ge}}function jp(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new it,d=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(w,x){return m?new OffscreenCanvas(w,x):Hs("canvas")}function S(w,x,H){let Z=1;const se=ut(w);if((se.width>H||se.height>H)&&(Z=H/Math.max(se.width,se.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const K=Math.floor(Z*se.width),Pe=Math.floor(Z*se.height);h===void 0&&(h=M(K,Pe));const he=x?M(K,Pe):h;return he.width=K,he.height=Pe,he.getContext("2d").drawImage(w,0,0,K,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+K+"x"+Pe+")."),he}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),w;return w}function _(w){return w.generateMipmaps}function f(w){i.generateMipmap(w)}function D(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(w,x,H,Z,se=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let K=x;if(x===i.RED&&(H===i.FLOAT&&(K=i.R32F),H===i.HALF_FLOAT&&(K=i.R16F),H===i.UNSIGNED_BYTE&&(K=i.R8)),x===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.R8UI),H===i.UNSIGNED_SHORT&&(K=i.R16UI),H===i.UNSIGNED_INT&&(K=i.R32UI),H===i.BYTE&&(K=i.R8I),H===i.SHORT&&(K=i.R16I),H===i.INT&&(K=i.R32I)),x===i.RG&&(H===i.FLOAT&&(K=i.RG32F),H===i.HALF_FLOAT&&(K=i.RG16F),H===i.UNSIGNED_BYTE&&(K=i.RG8)),x===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RG8UI),H===i.UNSIGNED_SHORT&&(K=i.RG16UI),H===i.UNSIGNED_INT&&(K=i.RG32UI),H===i.BYTE&&(K=i.RG8I),H===i.SHORT&&(K=i.RG16I),H===i.INT&&(K=i.RG32I)),x===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RGB8UI),H===i.UNSIGNED_SHORT&&(K=i.RGB16UI),H===i.UNSIGNED_INT&&(K=i.RGB32UI),H===i.BYTE&&(K=i.RGB8I),H===i.SHORT&&(K=i.RGB16I),H===i.INT&&(K=i.RGB32I)),x===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),H===i.UNSIGNED_INT&&(K=i.RGBA32UI),H===i.BYTE&&(K=i.RGBA8I),H===i.SHORT&&(K=i.RGBA16I),H===i.INT&&(K=i.RGBA32I)),x===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),x===i.RGBA){const Pe=se?zs:nt.getTransfer(Z);H===i.FLOAT&&(K=i.RGBA32F),H===i.HALF_FLOAT&&(K=i.RGBA16F),H===i.UNSIGNED_BYTE&&(K=Pe===ot?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function b(w,x){let H;return w?x===null||x===ti||x===Ki?H=i.DEPTH24_STENCIL8:x===bn?H=i.DEPTH32F_STENCIL8:x===Yi&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ti||x===Ki?H=i.DEPTH_COMPONENT24:x===bn?H=i.DEPTH_COMPONENT32F:x===Yi&&(H=i.DEPTH_COMPONENT16),H}function O(w,x){return _(w)===!0||w.isFramebufferTexture&&w.minFilter!==ln&&w.minFilter!==hn?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function C(w){const x=w.target;x.removeEventListener("dispose",C),B(x),x.isVideoTexture&&d.delete(x)}function U(w){const x=w.target;x.removeEventListener("dispose",U),T(x)}function B(w){const x=n.get(w);if(x.__webglInit===void 0)return;const H=w.source,Z=p.get(H);if(Z){const se=Z[x.__cacheKey];se.usedTimes--,se.usedTimes===0&&A(w),Object.keys(Z).length===0&&p.delete(H)}n.remove(w)}function A(w){const x=n.get(w);i.deleteTexture(x.__webglTexture);const H=w.source,Z=p.get(H);delete Z[x.__cacheKey],a.memory.textures--}function T(w){const x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let se=0;se<x.__webglFramebuffer[Z].length;se++)i.deleteFramebuffer(x.__webglFramebuffer[Z][se]);else i.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[Z]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const H=w.textures;for(let Z=0,se=H.length;Z<se;Z++){const K=n.get(H[Z]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(H[Z])}n.remove(w)}let L=0;function J(){L=0}function q(){const w=L;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),L+=1,w}function j(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function ie(w,x){const H=n.get(w);if(w.isVideoTexture&&We(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&H.__version!==w.version){const Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(H,w,x);return}}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+x)}function Y(w,x){const H=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){ce(H,w,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+x)}function oe(w,x){const H=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){ce(H,w,x);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+x)}function $(w,x){const H=n.get(w);if(w.version>0&&H.__version!==w.version){ne(H,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+x)}const ee={[$r]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[qr]:i.MIRRORED_REPEAT},te={[ln]:i.NEAREST,[Mc]:i.NEAREST_MIPMAP_NEAREST,[ls]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[Qs]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},me={[Tc]:i.NEVER,[Pc]:i.ALWAYS,[bc]:i.LESS,[ol]:i.LEQUAL,[Ac]:i.EQUAL,[Cc]:i.GEQUAL,[wc]:i.GREATER,[Rc]:i.NOTEQUAL};function ke(w,x){if(x.type===bn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===hn||x.magFilter===Qs||x.magFilter===ls||x.magFilter===Qn||x.minFilter===hn||x.minFilter===Qs||x.minFilter===ls||x.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ee[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ee[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ee[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,te[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,te[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,me[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ln||x.minFilter!==ls&&x.minFilter!==Qn||x.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function rt(w,x){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",C));const Z=x.source;let se=p.get(Z);se===void 0&&(se={},p.set(Z,se));const K=j(x);if(K!==w.__cacheKey){se[K]===void 0&&(se[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),se[K].usedTimes++;const Pe=se[w.__cacheKey];Pe!==void 0&&(se[w.__cacheKey].usedTimes--,Pe.usedTimes===0&&A(x)),w.__cacheKey=K,w.__webglTexture=se[K].texture}return H}function Je(w,x,H){return Math.floor(Math.floor(w/H)/x)}function X(w,x,H,Z){const K=w.updateRanges;if(K.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,H,Z,x.data);else{K.sort((de,ve)=>de.start-ve.start);let Pe=0;for(let de=1;de<K.length;de++){const ve=K[Pe],Oe=K[de],Re=ve.start+ve.count,ge=Je(Oe.start,x.width,4),Ge=Je(ve.start,x.width,4);Oe.start<=Re+1&&ge===Ge&&Je(Oe.start+Oe.count-1,x.width,4)===ge?ve.count=Math.max(ve.count,Oe.start+Oe.count-ve.start):(++Pe,K[Pe]=Oe)}K.length=Pe+1;const he=i.getParameter(i.UNPACK_ROW_LENGTH),be=i.getParameter(i.UNPACK_SKIP_PIXELS),we=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let de=0,ve=K.length;de<ve;de++){const Oe=K[de],Re=Math.floor(Oe.start/4),ge=Math.ceil(Oe.count/4),Ge=Re%x.width,N=Math.floor(Re/x.width),le=ge,pe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,Ge,N,le,pe,H,Z,x.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,he),i.pixelStorei(i.UNPACK_SKIP_PIXELS,be),i.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function ce(w,x,H){let Z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=i.TEXTURE_3D);const se=rt(w,x),K=x.source;t.bindTexture(Z,w.__webglTexture,i.TEXTURE0+H);const Pe=n.get(K);if(K.version!==Pe.__version||se===!0){t.activeTexture(i.TEXTURE0+H);const he=nt.getPrimaries(nt.workingColorSpace),be=x.colorSpace===Nn?null:nt.getPrimaries(x.colorSpace),we=x.colorSpace===Nn||he===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let de=S(x.image,!1,s.maxTextureSize);de=_t(x,de);const ve=r.convert(x.format,x.colorSpace),Oe=r.convert(x.type);let Re=R(x.internalFormat,ve,Oe,x.colorSpace,x.isVideoTexture);ke(Z,x);let ge;const Ge=x.mipmaps,N=x.isVideoTexture!==!0,le=Pe.__version===void 0||se===!0,pe=K.dataReady,Se=O(x,de);if(x.isDepthTexture)Re=b(x.format===Ji,x.type),le&&(N?t.texStorage2D(i.TEXTURE_2D,1,Re,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Re,de.width,de.height,0,ve,Oe,null));else if(x.isDataTexture)if(Ge.length>0){N&&le&&t.texStorage2D(i.TEXTURE_2D,Se,Re,Ge[0].width,Ge[0].height);for(let re=0,Q=Ge.length;re<Q;re++)ge=Ge[re],N?pe&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ge.width,ge.height,ve,Oe,ge.data):t.texImage2D(i.TEXTURE_2D,re,Re,ge.width,ge.height,0,ve,Oe,ge.data);x.generateMipmaps=!1}else N?(le&&t.texStorage2D(i.TEXTURE_2D,Se,Re,de.width,de.height),pe&&X(x,de,ve,Oe)):t.texImage2D(i.TEXTURE_2D,0,Re,de.width,de.height,0,ve,Oe,de.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){N&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Re,Ge[0].width,Ge[0].height,de.depth);for(let re=0,Q=Ge.length;re<Q;re++)if(ge=Ge[re],x.format!==on)if(ve!==null)if(N){if(pe)if(x.layerUpdates.size>0){const Te=xo(ge.width,ge.height,x.format,x.type);for(const He of x.layerUpdates){const at=ge.data.subarray(He*Te/ge.data.BYTES_PER_ELEMENT,(He+1)*Te/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,He,ge.width,ge.height,1,ve,at)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,de.depth,ve,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Re,ge.width,ge.height,de.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,de.depth,ve,Oe,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Re,ge.width,ge.height,de.depth,0,ve,Oe,ge.data)}else{N&&le&&t.texStorage2D(i.TEXTURE_2D,Se,Re,Ge[0].width,Ge[0].height);for(let re=0,Q=Ge.length;re<Q;re++)ge=Ge[re],x.format!==on?ve!==null?N?pe&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,ge.width,ge.height,ve,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Re,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?pe&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ge.width,ge.height,ve,Oe,ge.data):t.texImage2D(i.TEXTURE_2D,re,Re,ge.width,ge.height,0,ve,Oe,ge.data)}else if(x.isDataArrayTexture)if(N){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Re,de.width,de.height,de.depth),pe)if(x.layerUpdates.size>0){const re=xo(de.width,de.height,x.format,x.type);for(const Q of x.layerUpdates){const Te=de.data.subarray(Q*re/de.data.BYTES_PER_ELEMENT,(Q+1)*re/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,de.width,de.height,1,ve,Oe,Te)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,ve,Oe,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,de.width,de.height,de.depth,0,ve,Oe,de.data);else if(x.isData3DTexture)N?(le&&t.texStorage3D(i.TEXTURE_3D,Se,Re,de.width,de.height,de.depth),pe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,ve,Oe,de.data)):t.texImage3D(i.TEXTURE_3D,0,Re,de.width,de.height,de.depth,0,ve,Oe,de.data);else if(x.isFramebufferTexture){if(le)if(N)t.texStorage2D(i.TEXTURE_2D,Se,Re,de.width,de.height);else{let re=de.width,Q=de.height;for(let Te=0;Te<Se;Te++)t.texImage2D(i.TEXTURE_2D,Te,Re,re,Q,0,ve,Oe,null),re>>=1,Q>>=1}}else if(Ge.length>0){if(N&&le){const re=ut(Ge[0]);t.texStorage2D(i.TEXTURE_2D,Se,Re,re.width,re.height)}for(let re=0,Q=Ge.length;re<Q;re++)ge=Ge[re],N?pe&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ve,Oe,ge):t.texImage2D(i.TEXTURE_2D,re,Re,ve,Oe,ge);x.generateMipmaps=!1}else if(N){if(le){const re=ut(de);t.texStorage2D(i.TEXTURE_2D,Se,Re,re.width,re.height)}pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Oe,de)}else t.texImage2D(i.TEXTURE_2D,0,Re,ve,Oe,de);_(x)&&f(Z),Pe.__version=K.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ne(w,x,H){if(x.image.length!==6)return;const Z=rt(w,x),se=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+H);const K=n.get(se);if(se.version!==K.__version||Z===!0){t.activeTexture(i.TEXTURE0+H);const Pe=nt.getPrimaries(nt.workingColorSpace),he=x.colorSpace===Nn?null:nt.getPrimaries(x.colorSpace),be=x.colorSpace===Nn||Pe===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const we=x.isCompressedTexture||x.image[0].isCompressedTexture,de=x.image[0]&&x.image[0].isDataTexture,ve=[];for(let Q=0;Q<6;Q++)!we&&!de?ve[Q]=S(x.image[Q],!0,s.maxCubemapSize):ve[Q]=de?x.image[Q].image:x.image[Q],ve[Q]=_t(x,ve[Q]);const Oe=ve[0],Re=r.convert(x.format,x.colorSpace),ge=r.convert(x.type),Ge=R(x.internalFormat,Re,ge,x.colorSpace),N=x.isVideoTexture!==!0,le=K.__version===void 0||Z===!0,pe=se.dataReady;let Se=O(x,Oe);ke(i.TEXTURE_CUBE_MAP,x);let re;if(we){N&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Ge,Oe.width,Oe.height);for(let Q=0;Q<6;Q++){re=ve[Q].mipmaps;for(let Te=0;Te<re.length;Te++){const He=re[Te];x.format!==on?Re!==null?N?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,0,0,He.width,He.height,Re,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,Ge,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,0,0,He.width,He.height,Re,ge,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,Ge,He.width,He.height,0,Re,ge,He.data)}}}else{if(re=x.mipmaps,N&&le){re.length>0&&Se++;const Q=ut(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Ge,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(de){N?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ve[Q].width,ve[Q].height,Re,ge,ve[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ge,ve[Q].width,ve[Q].height,0,Re,ge,ve[Q].data);for(let Te=0;Te<re.length;Te++){const at=re[Te].image[Q].image;N?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,0,0,at.width,at.height,Re,ge,at.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,Ge,at.width,at.height,0,Re,ge,at.data)}}else{N?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Re,ge,ve[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ge,Re,ge,ve[Q]);for(let Te=0;Te<re.length;Te++){const He=re[Te];N?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,0,0,Re,ge,He.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,Ge,Re,ge,He.image[Q])}}}_(x)&&f(i.TEXTURE_CUBE_MAP),K.__version=se.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ue(w,x,H,Z,se,K){const Pe=r.convert(H.format,H.colorSpace),he=r.convert(H.type),be=R(H.internalFormat,Pe,he,H.colorSpace),we=n.get(x),de=n.get(H);if(de.__renderTarget=x,!we.__hasExternalTextures){const ve=Math.max(1,x.width>>K),Oe=Math.max(1,x.height>>K);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,K,be,ve,Oe,x.depth,0,Pe,he,null):t.texImage2D(se,K,be,ve,Oe,0,Pe,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ye(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,se,de.__webglTexture,0,lt(x)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,se,de.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(w,x,H){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){const Z=x.depthTexture,se=Z&&Z.isDepthTexture?Z.type:null,K=b(x.stencilBuffer,se),Pe=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=lt(x);ye(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,K,x.width,x.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,K,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,K,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,w)}else{const Z=x.textures;for(let se=0;se<Z.length;se++){const K=Z[se],Pe=r.convert(K.format,K.colorSpace),he=r.convert(K.type),be=R(K.internalFormat,Pe,he,K.colorSpace),we=lt(x);H&&ye(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,be,x.width,x.height):ye(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,be,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,be,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(x.depthTexture);Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ie(x.depthTexture,0);const se=Z.__webglTexture,K=lt(x);if(x.depthTexture.format===Zi)ye(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(x.depthTexture.format===Ji)ye(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function dt(w){const x=n.get(w),H=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const se=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",se)};Z.addEventListener("dispose",se),x.__depthDisposeCallback=se}x.__boundDepthTexture=Z}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const Z=w.texture.mipmaps;Z&&Z.length>0?Ne(x.__webglFramebuffer[0],w):Ne(x.__webglFramebuffer,w)}else if(H){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=i.createRenderbuffer(),Ee(x.__webglDepthbuffer[Z],w,!1);else{const se=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,K)}}else{const Z=w.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ee(x.__webglDepthbuffer,w,!1);else{const se=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,K)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(w,x,H){const Z=n.get(w);x!==void 0&&ue(Z.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&dt(w)}function P(w){const x=w.texture,H=n.get(w),Z=n.get(x);w.addEventListener("dispose",U);const se=w.textures,K=w.isWebGLCubeRenderTarget===!0,Pe=se.length>1;if(Pe||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=x.version,a.memory.textures++),K){H.__webglFramebuffer=[];for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[he]=[];for(let be=0;be<x.mipmaps.length;be++)H.__webglFramebuffer[he][be]=i.createFramebuffer()}else H.__webglFramebuffer[he]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let he=0;he<x.mipmaps.length;he++)H.__webglFramebuffer[he]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let he=0,be=se.length;he<be;he++){const we=n.get(se[he]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&ye(w)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let he=0;he<se.length;he++){const be=se[he];H.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[he]);const we=r.convert(be.format,be.colorSpace),de=r.convert(be.type),ve=R(be.internalFormat,we,de,be.colorSpace,w.isXRRenderTarget===!0),Oe=lt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,ve,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,H.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Ee(H.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),ke(i.TEXTURE_CUBE_MAP,x);for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)ue(H.__webglFramebuffer[he][be],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,be);else ue(H.__webglFramebuffer[he],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);_(x)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let he=0,be=se.length;he<be;he++){const we=se[he],de=n.get(we);let ve=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ve=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,de.__webglTexture),ke(ve,we),ue(H.__webglFramebuffer,w,we,i.COLOR_ATTACHMENT0+he,ve,0),_(we)&&f(ve)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(he=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,Z.__webglTexture),ke(he,x),x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)ue(H.__webglFramebuffer[be],w,x,i.COLOR_ATTACHMENT0,he,be);else ue(H.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,he,0);_(x)&&f(he),t.unbindTexture()}w.depthBuffer&&dt(w)}function st(w){const x=w.textures;for(let H=0,Z=x.length;H<Z;H++){const se=x[H];if(_(se)){const K=D(w),Pe=n.get(se).__webglTexture;t.bindTexture(K,Pe),f(K),t.unbindTexture()}}}const Ae=[],Qe=[];function De(w){if(w.samples>0){if(ye(w)===!1){const x=w.textures,H=w.width,Z=w.height;let se=i.COLOR_BUFFER_BIT;const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(w),he=x.length>1;if(he)for(let we=0;we<x.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const be=w.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let we=0;we<x.length;we++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[we]);const de=n.get(x[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,H,Z,0,0,H,Z,se,i.NEAREST),c===!0&&(Ae.length=0,Qe.length=0,Ae.push(i.COLOR_ATTACHMENT0+we),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ae.push(K),Qe.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Qe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let we=0;we<x.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[we]);const de=n.get(x[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,de,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function lt(w){return Math.min(s.maxSamples,w.samples)}function ye(w){const x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function We(w){const x=a.render.frame;d.get(w)!==x&&(d.set(w,x),w.update())}function _t(w,x){const H=w.colorSpace,Z=w.format,se=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==Ri&&H!==Nn&&(nt.getTransfer(H)===ot?(Z!==on||se!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),x}function ut(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=J,this.setTexture2D=ie,this.setTexture2DArray=Y,this.setTexture3D=oe,this.setTextureCube=$,this.rebindTextures=Ce,this.setupRenderTarget=P,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=ye}function Yp(i,e){function t(n,s=Nn){let r;const a=nt.getTransfer(s);if(n===mn)return i.UNSIGNED_BYTE;if(n===Aa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qo)return i.BYTE;if(n===el)return i.SHORT;if(n===Yi)return i.UNSIGNED_SHORT;if(n===ba)return i.INT;if(n===ti)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===Qi)return i.HALF_FLOAT;if(n===nl)return i.ALPHA;if(n===il)return i.RGB;if(n===on)return i.RGBA;if(n===Zi)return i.DEPTH_COMPONENT;if(n===Ji)return i.DEPTH_STENCIL;if(n===sl)return i.RED;if(n===Ra)return i.RED_INTEGER;if(n===rl)return i.RG;if(n===Ca)return i.RG_INTEGER;if(n===Pa)return i.RGBA_INTEGER;if(n===Us||n===Ns||n===Os||n===Fs)if(a===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Us)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Us)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Os)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jr||n===Yr||n===Kr||n===Zr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jr||n===Qr||n===ea)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jr||n===Qr)return a===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ea)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ta||n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===la||n===ca||n===da||n===ua||n===ha||n===fa||n===pa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ta)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===na)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ia)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sa)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ra)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===aa)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oa)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===la)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ca)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===da)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ua)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ha)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fa)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pa)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bs||n===ma||n===ga)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Bs)return a===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ma)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===al||n===_a||n===va||n===xa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Bs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class wl extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const Kp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zp=`
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

}`;class Jp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new wl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Vn({vertexShader:Kp,fragmentShader:Zp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qt(new rs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qp extends Pi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,h=null,p=null,m=null,M=null;const S=new Jp,_={},f=t.getContextAttributes();let D=null,R=null;const b=[],O=[],C=new it;let U=null;const B=new Jt;B.viewport=new gt;const A=new Jt;A.viewport=new gt;const T=[B,A],L=new xd;let J=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ce=b[X];return ce===void 0&&(ce=new yr,b[X]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(X){let ce=b[X];return ce===void 0&&(ce=new yr,b[X]=ce),ce.getGripSpace()},this.getHand=function(X){let ce=b[X];return ce===void 0&&(ce=new yr,b[X]=ce),ce.getHandSpace()};function j(X){const ce=O.indexOf(X.inputSource);if(ce===-1)return;const ne=b[ce];ne!==void 0&&(ne.update(X.inputSource,X.frame,l||a),ne.dispatchEvent({type:X.type,data:X.inputSource}))}function ie(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",ie),s.removeEventListener("inputsourceschange",Y);for(let X=0;X<b.length;X++){const ce=O[X];ce!==null&&(O[X]=null,b[X].disconnect(ce))}J=null,q=null,S.reset();for(const X in _)delete _[X];e.setRenderTarget(D),m=null,p=null,h=null,s=null,R=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return h},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(D=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",ie),s.addEventListener("inputsourceschange",Y),f.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&(h=new XRWebGLBinding(s,t)),h!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,ue=null,Ee=null;f.depth&&(Ee=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=f.stencil?Ji:Zi,ue=f.stencil?Ki:ti);const Ne={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};p=h.createProjectionLayer(Ne),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),R=new ni(p.textureWidth,p.textureHeight,{format:on,type:mn,depthTexture:new xl(p.textureWidth,p.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ne={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),R=new ni(m.framebufferWidth,m.framebufferHeight,{format:on,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Je.setContext(s),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Y(X){for(let ce=0;ce<X.removed.length;ce++){const ne=X.removed[ce],ue=O.indexOf(ne);ue>=0&&(O[ue]=null,b[ue].disconnect(ne))}for(let ce=0;ce<X.added.length;ce++){const ne=X.added[ce];let ue=O.indexOf(ne);if(ue===-1){for(let Ne=0;Ne<b.length;Ne++)if(Ne>=O.length){O.push(ne),ue=Ne;break}else if(O[Ne]===null){O[Ne]=ne,ue=Ne;break}if(ue===-1)break}const Ee=b[ue];Ee&&Ee.connect(ne)}}const oe=new G,$=new G;function ee(X,ce,ne){oe.setFromMatrixPosition(ce.matrixWorld),$.setFromMatrixPosition(ne.matrixWorld);const ue=oe.distanceTo($),Ee=ce.projectionMatrix.elements,Ne=ne.projectionMatrix.elements,dt=Ee[14]/(Ee[10]-1),Ce=Ee[14]/(Ee[10]+1),P=(Ee[9]+1)/Ee[5],st=(Ee[9]-1)/Ee[5],Ae=(Ee[8]-1)/Ee[0],Qe=(Ne[8]+1)/Ne[0],De=dt*Ae,lt=dt*Qe,ye=ue/(-Ae+Qe),We=ye*-Ae;if(ce.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(We),X.translateZ(ye),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ee[10]===-1)X.projectionMatrix.copy(ce.projectionMatrix),X.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const _t=dt+ye,ut=Ce+ye,w=De-We,x=lt+(ue-We),H=P*Ce/ut*_t,Z=st*Ce/ut*_t;X.projectionMatrix.makePerspective(w,x,H,Z,_t,ut),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function te(X,ce){ce===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ce.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let ce=X.near,ne=X.far;S.texture!==null&&(S.depthNear>0&&(ce=S.depthNear),S.depthFar>0&&(ne=S.depthFar)),L.near=A.near=B.near=ce,L.far=A.far=B.far=ne,(J!==L.near||q!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),J=L.near,q=L.far),L.layers.mask=X.layers.mask|6,B.layers.mask=L.layers.mask&3,A.layers.mask=L.layers.mask&5;const ue=X.parent,Ee=L.cameras;te(L,ue);for(let Ne=0;Ne<Ee.length;Ne++)te(Ee[Ne],ue);Ee.length===2?ee(L,B,A):L.projectionMatrix.copy(B.projectionMatrix),me(X,L,ue)};function me(X,ce,ne){ne===null?X.matrix.copy(ce.matrixWorld):(X.matrix.copy(ne.matrixWorld),X.matrix.invert(),X.matrix.multiply(ce.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ce.projectionMatrix),X.projectionMatrixInverse.copy(ce.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ma*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(X){c=X,p!==null&&(p.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(L)},this.getCameraTexture=function(X){return _[X]};let ke=null;function rt(X,ce){if(d=ce.getViewerPose(l||a),M=ce,d!==null){const ne=d.views;m!==null&&(e.setRenderTargetFramebuffer(R,m.framebuffer),e.setRenderTarget(R));let ue=!1;ne.length!==L.cameras.length&&(L.cameras.length=0,ue=!0);for(let Ce=0;Ce<ne.length;Ce++){const P=ne[Ce];let st=null;if(m!==null)st=m.getViewport(P);else{const Qe=h.getViewSubImage(p,P);st=Qe.viewport,Ce===0&&(e.setRenderTargetTextures(R,Qe.colorTexture,Qe.depthStencilTexture),e.setRenderTarget(R))}let Ae=T[Ce];Ae===void 0&&(Ae=new Jt,Ae.layers.enable(Ce),Ae.viewport=new gt,T[Ce]=Ae),Ae.matrix.fromArray(P.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(P.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(st.x,st.y,st.width,st.height),Ce===0&&(L.matrix.copy(Ae.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ue===!0&&L.cameras.push(Ae)}const Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const Ce=h.getDepthInformation(ne[0]);Ce&&Ce.isValid&&Ce.texture&&S.init(Ce,s.renderState)}if(Ee&&Ee.includes("camera-access")&&(e.state.unbindTexture(),h))for(let Ce=0;Ce<ne.length;Ce++){const P=ne[Ce].camera;if(P){let st=_[P];st||(st=new wl,_[P]=st);const Ae=h.getCameraImage(P);st.sourceTexture=Ae}}}for(let ne=0;ne<b.length;ne++){const ue=O[ne],Ee=b[ne];ue!==null&&Ee!==void 0&&Ee.update(ue,ce,l||a)}ke&&ke(X,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),M=null}const Je=new yl;Je.setAnimationLoop(rt),this.setAnimationLoop=function(X){ke=X},this.dispose=function(){}}}const qn=new cn,em=new mt;function tm(i,e){function t(_,f){_.matrixAutoUpdate===!0&&_.updateMatrix(),f.value.copy(_.matrix)}function n(_,f){f.color.getRGB(_.fogColor.value,ml(i)),f.isFog?(_.fogNear.value=f.near,_.fogFar.value=f.far):f.isFogExp2&&(_.fogDensity.value=f.density)}function s(_,f,D,R,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(_,f):f.isMeshToonMaterial?(r(_,f),h(_,f)):f.isMeshPhongMaterial?(r(_,f),d(_,f)):f.isMeshStandardMaterial?(r(_,f),p(_,f),f.isMeshPhysicalMaterial&&m(_,f,b)):f.isMeshMatcapMaterial?(r(_,f),M(_,f)):f.isMeshDepthMaterial?r(_,f):f.isMeshDistanceMaterial?(r(_,f),S(_,f)):f.isMeshNormalMaterial?r(_,f):f.isLineBasicMaterial?(a(_,f),f.isLineDashedMaterial&&o(_,f)):f.isPointsMaterial?c(_,f,D,R):f.isSpriteMaterial?l(_,f):f.isShadowMaterial?(_.color.value.copy(f.color),_.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(_,f){_.opacity.value=f.opacity,f.color&&_.diffuse.value.copy(f.color),f.emissive&&_.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(_.map.value=f.map,t(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,t(f.alphaMap,_.alphaMapTransform)),f.bumpMap&&(_.bumpMap.value=f.bumpMap,t(f.bumpMap,_.bumpMapTransform),_.bumpScale.value=f.bumpScale,f.side===zt&&(_.bumpScale.value*=-1)),f.normalMap&&(_.normalMap.value=f.normalMap,t(f.normalMap,_.normalMapTransform),_.normalScale.value.copy(f.normalScale),f.side===zt&&_.normalScale.value.negate()),f.displacementMap&&(_.displacementMap.value=f.displacementMap,t(f.displacementMap,_.displacementMapTransform),_.displacementScale.value=f.displacementScale,_.displacementBias.value=f.displacementBias),f.emissiveMap&&(_.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,_.emissiveMapTransform)),f.specularMap&&(_.specularMap.value=f.specularMap,t(f.specularMap,_.specularMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest);const D=e.get(f),R=D.envMap,b=D.envMapRotation;R&&(_.envMap.value=R,qn.copy(b),qn.x*=-1,qn.y*=-1,qn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),_.envMapRotation.value.setFromMatrix4(em.makeRotationFromEuler(qn)),_.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=f.reflectivity,_.ior.value=f.ior,_.refractionRatio.value=f.refractionRatio),f.lightMap&&(_.lightMap.value=f.lightMap,_.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,_.lightMapTransform)),f.aoMap&&(_.aoMap.value=f.aoMap,_.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,_.aoMapTransform))}function a(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,f.map&&(_.map.value=f.map,t(f.map,_.mapTransform))}function o(_,f){_.dashSize.value=f.dashSize,_.totalSize.value=f.dashSize+f.gapSize,_.scale.value=f.scale}function c(_,f,D,R){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.size.value=f.size*D,_.scale.value=R*.5,f.map&&(_.map.value=f.map,t(f.map,_.uvTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,t(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function l(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.rotation.value=f.rotation,f.map&&(_.map.value=f.map,t(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,t(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function d(_,f){_.specular.value.copy(f.specular),_.shininess.value=Math.max(f.shininess,1e-4)}function h(_,f){f.gradientMap&&(_.gradientMap.value=f.gradientMap)}function p(_,f){_.metalness.value=f.metalness,f.metalnessMap&&(_.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,_.metalnessMapTransform)),_.roughness.value=f.roughness,f.roughnessMap&&(_.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,_.roughnessMapTransform)),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)}function m(_,f,D){_.ior.value=f.ior,f.sheen>0&&(_.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),_.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(_.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,_.sheenColorMapTransform)),f.sheenRoughnessMap&&(_.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,_.sheenRoughnessMapTransform))),f.clearcoat>0&&(_.clearcoat.value=f.clearcoat,_.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(_.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,_.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(_.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===zt&&_.clearcoatNormalScale.value.negate())),f.dispersion>0&&(_.dispersion.value=f.dispersion),f.iridescence>0&&(_.iridescence.value=f.iridescence,_.iridescenceIOR.value=f.iridescenceIOR,_.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(_.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,_.iridescenceMapTransform)),f.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),f.transmission>0&&(_.transmission.value=f.transmission,_.transmissionSamplerMap.value=D.texture,_.transmissionSamplerSize.value.set(D.width,D.height),f.transmissionMap&&(_.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,_.transmissionMapTransform)),_.thickness.value=f.thickness,f.thicknessMap&&(_.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=f.attenuationDistance,_.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(_.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(_.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=f.specularIntensity,_.specularColor.value.copy(f.specularColor),f.specularColorMap&&(_.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,_.specularColorMapTransform)),f.specularIntensityMap&&(_.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,_.specularIntensityMapTransform))}function M(_,f){f.matcap&&(_.matcap.value=f.matcap)}function S(_,f){const D=e.get(f).light;_.referencePosition.value.setFromMatrixPosition(D.matrixWorld),_.nearDistance.value=D.shadow.camera.near,_.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function nm(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(D,R){const b=R.program;n.uniformBlockBinding(D,b)}function l(D,R){let b=s[D.id];b===void 0&&(M(D),b=d(D),s[D.id]=b,D.addEventListener("dispose",_));const O=R.program;n.updateUBOMapping(D,O);const C=e.render.frame;r[D.id]!==C&&(p(D),r[D.id]=C)}function d(D){const R=h();D.__bindingPointIndex=R;const b=i.createBuffer(),O=D.__size,C=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,O,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,b),b}function h(){for(let D=0;D<o;D++)if(a.indexOf(D)===-1)return a.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(D){const R=s[D.id],b=D.uniforms,O=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let C=0,U=b.length;C<U;C++){const B=Array.isArray(b[C])?b[C]:[b[C]];for(let A=0,T=B.length;A<T;A++){const L=B[A];if(m(L,C,A,O)===!0){const J=L.__offset,q=Array.isArray(L.value)?L.value:[L.value];let j=0;for(let ie=0;ie<q.length;ie++){const Y=q[ie],oe=S(Y);typeof Y=="number"||typeof Y=="boolean"?(L.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,J+j,L.__data)):Y.isMatrix3?(L.__data[0]=Y.elements[0],L.__data[1]=Y.elements[1],L.__data[2]=Y.elements[2],L.__data[3]=0,L.__data[4]=Y.elements[3],L.__data[5]=Y.elements[4],L.__data[6]=Y.elements[5],L.__data[7]=0,L.__data[8]=Y.elements[6],L.__data[9]=Y.elements[7],L.__data[10]=Y.elements[8],L.__data[11]=0):(Y.toArray(L.__data,j),j+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,J,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(D,R,b,O){const C=D.value,U=R+"_"+b;if(O[U]===void 0)return typeof C=="number"||typeof C=="boolean"?O[U]=C:O[U]=C.clone(),!0;{const B=O[U];if(typeof C=="number"||typeof C=="boolean"){if(B!==C)return O[U]=C,!0}else if(B.equals(C)===!1)return B.copy(C),!0}return!1}function M(D){const R=D.uniforms;let b=0;const O=16;for(let U=0,B=R.length;U<B;U++){const A=Array.isArray(R[U])?R[U]:[R[U]];for(let T=0,L=A.length;T<L;T++){const J=A[T],q=Array.isArray(J.value)?J.value:[J.value];for(let j=0,ie=q.length;j<ie;j++){const Y=q[j],oe=S(Y),$=b%O,ee=$%oe.boundary,te=$+ee;b+=ee,te!==0&&O-te<oe.storage&&(b+=O-te),J.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=b,b+=oe.storage}}}const C=b%O;return C>0&&(b+=O-C),D.__size=b,D.__cache={},this}function S(D){const R={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(R.boundary=4,R.storage=4):D.isVector2?(R.boundary=8,R.storage=8):D.isVector3||D.isColor?(R.boundary=16,R.storage=12):D.isVector4?(R.boundary=16,R.storage=16):D.isMatrix3?(R.boundary=48,R.storage=48):D.isMatrix4?(R.boundary=64,R.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),R}function _(D){const R=D.target;R.removeEventListener("dispose",_);const b=a.indexOf(R.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function f(){for(const D in s)i.deleteBuffer(s[D]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}class im{constructor(e={}){const{canvas:t=Lc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const M=new Uint32Array(4),S=new Int32Array(4);let _=null,f=null;const D=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let O=!1;this._outputColorSpace=$t;let C=0,U=0,B=null,A=-1,T=null;const L=new gt,J=new gt;let q=null;const j=new je(0);let ie=0,Y=t.width,oe=t.height,$=1,ee=null,te=null;const me=new gt(0,0,Y,oe),ke=new gt(0,0,Y,oe);let rt=!1;const Je=new Ua;let X=!1,ce=!1;const ne=new mt,ue=new G,Ee=new gt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Ce(){return B===null?$:1}let P=n;function st(y,F){return t.getContext(y,F)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ea}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",re,!1),P===null){const F="webgl2";if(P=st(F,y),P===null)throw st(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ae,Qe,De,lt,ye,We,_t,ut,w,x,H,Z,se,K,Pe,he,be,we,de,ve,Oe,Re,ge,Ge;function N(){Ae=new ff(P),Ae.init(),Re=new Yp(P,Ae),Qe=new af(P,Ae,e,Re),De=new qp(P,Ae),Qe.reversedDepthBuffer&&p&&De.buffers.depth.setReversed(!0),lt=new gf(P),ye=new Up,We=new jp(P,Ae,De,ye,Qe,Re,lt),_t=new lf(b),ut=new hf(b),w=new Sd(P),ge=new sf(P,w),x=new pf(P,w,lt,ge),H=new vf(P,x,w,lt),de=new _f(P,Qe,We),he=new of(ye),Z=new Ip(b,_t,ut,Ae,Qe,ge,he),se=new tm(b,ye),K=new Op,Pe=new Hp(Ae),we=new nf(b,_t,ut,De,H,m,c),be=new Xp(b,H,Qe),Ge=new nm(P,lt,Qe,De),ve=new rf(P,Ae,lt),Oe=new mf(P,Ae,lt),lt.programs=Z.programs,b.capabilities=Qe,b.extensions=Ae,b.properties=ye,b.renderLists=K,b.shadowMap=be,b.state=De,b.info=lt}N();const le=new Qp(b,P);this.xr=le,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=Ae.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ae.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(y){y!==void 0&&($=y,this.setSize(Y,oe,!1))},this.getSize=function(y){return y.set(Y,oe)},this.setSize=function(y,F,g=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=y,oe=F,t.width=Math.floor(y*$),t.height=Math.floor(F*$),g===!0&&(t.style.width=y+"px",t.style.height=F+"px"),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(Y*$,oe*$).floor()},this.setDrawingBufferSize=function(y,F,g){Y=y,oe=F,$=g,t.width=Math.floor(y*g),t.height=Math.floor(F*g),this.setViewport(0,0,y,F)},this.getCurrentViewport=function(y){return y.copy(L)},this.getViewport=function(y){return y.copy(me)},this.setViewport=function(y,F,g,u){y.isVector4?me.set(y.x,y.y,y.z,y.w):me.set(y,F,g,u),De.viewport(L.copy(me).multiplyScalar($).round())},this.getScissor=function(y){return y.copy(ke)},this.setScissor=function(y,F,g,u){y.isVector4?ke.set(y.x,y.y,y.z,y.w):ke.set(y,F,g,u),De.scissor(J.copy(ke).multiplyScalar($).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(y){De.setScissorTest(rt=y)},this.setOpaqueSort=function(y){ee=y},this.setTransparentSort=function(y){te=y},this.getClearColor=function(y){return y.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,g=!0){let u=0;if(y){let v=!1;if(B!==null){const I=B.texture.format;v=I===Pa||I===Ca||I===Ra}if(v){const I=B.texture.type,z=I===mn||I===ti||I===Yi||I===Ki||I===Aa||I===wa,V=we.getClearColor(),W=we.getClearAlpha(),fe=V.r,k=V.g,ae=V.b;z?(M[0]=fe,M[1]=k,M[2]=ae,M[3]=W,P.clearBufferuiv(P.COLOR,0,M)):(S[0]=fe,S[1]=k,S[2]=ae,S[3]=W,P.clearBufferiv(P.COLOR,0,S))}else u|=P.COLOR_BUFFER_BIT}F&&(u|=P.DEPTH_BUFFER_BIT),g&&(u|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(u)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",re,!1),we.dispose(),K.dispose(),Pe.dispose(),ye.dispose(),_t.dispose(),ut.dispose(),H.dispose(),ge.dispose(),Ge.dispose(),Z.dispose(),le.dispose(),le.removeEventListener("sessionstart",qt),le.removeEventListener("sessionend",wn),dn.stop()};function pe(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const y=lt.autoReset,F=be.enabled,g=be.autoUpdate,u=be.needsUpdate,v=be.type;N(),lt.autoReset=y,be.enabled=F,be.autoUpdate=g,be.needsUpdate=u,be.type=v}function re(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Q(y){const F=y.target;F.removeEventListener("dispose",Q),Te(F)}function Te(y){He(y),ye.remove(y)}function He(y){const F=ye.get(y).programs;F!==void 0&&(F.forEach(function(g){Z.releaseProgram(g)}),y.isShaderMaterial&&Z.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,g,u,v,I){F===null&&(F=Ne);const z=v.isMesh&&v.matrixWorld.determinant()<0,V=qs(y,F,g,u,v);De.setMaterial(u,z);let W=g.index,fe=1;if(u.wireframe===!0){if(W=x.getWireframeAttribute(g),W===void 0)return;fe=2}const k=g.drawRange,ae=g.attributes.position;let xe=k.start*fe,Fe=(k.start+k.count)*fe;I!==null&&(xe=Math.max(xe,I.start*fe),Fe=Math.min(Fe,(I.start+I.count)*fe)),W!==null?(xe=Math.max(xe,0),Fe=Math.min(Fe,W.count)):ae!=null&&(xe=Math.max(xe,0),Fe=Math.min(Fe,ae.count));const Ve=Fe-xe;if(Ve<0||Ve===1/0)return;ge.setup(v,u,V,g,W);let Be,$e=ve;if(W!==null&&(Be=w.get(W),$e=Oe,$e.setIndex(Be)),v.isMesh)u.wireframe===!0?(De.setLineWidth(u.wireframeLinewidth*Ce()),$e.setMode(P.LINES)):$e.setMode(P.TRIANGLES);else if(v.isLine){let Le=u.linewidth;Le===void 0&&(Le=1),De.setLineWidth(Le*Ce()),v.isLineSegments?$e.setMode(P.LINES):v.isLineLoop?$e.setMode(P.LINE_LOOP):$e.setMode(P.LINE_STRIP)}else v.isPoints?$e.setMode(P.POINTS):v.isSprite&&$e.setMode(P.TRIANGLES);if(v.isBatchedMesh)if(v._multiDrawInstances!==null)Ei("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$e.renderMultiDrawInstances(v._multiDrawStarts,v._multiDrawCounts,v._multiDrawCount,v._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))$e.renderMultiDraw(v._multiDrawStarts,v._multiDrawCounts,v._multiDrawCount);else{const Le=v._multiDrawStarts,ht=v._multiDrawCounts,tt=v._multiDrawCount,Ht=W?w.get(W).bytesPerElement:1,ri=ye.get(u).currentProgram.getUniforms();for(let Gt=0;Gt<tt;Gt++)ri.setValue(P,"_gl_DrawID",Gt),$e.render(Le[Gt]/Ht,ht[Gt])}else if(v.isInstancedMesh)$e.renderInstances(xe,Ve,v.count);else if(g.isInstancedBufferGeometry){const Le=g._maxInstanceCount!==void 0?g._maxInstanceCount:1/0,ht=Math.min(g.instanceCount,Le);$e.renderInstances(xe,Ve,ht)}else $e.render(xe,Ve)};function at(y,F,g){y.transparent===!0&&y.side===Tn&&y.forceSinglePass===!1?(y.side=zt,y.needsUpdate=!0,zn(y,F,g),y.side=Bn,y.needsUpdate=!0,zn(y,F,g),y.side=Tn):zn(y,F,g)}this.compile=function(y,F,g=null){g===null&&(g=y),f=Pe.get(g),f.init(F),R.push(f),g.traverseVisible(function(v){v.isLight&&v.layers.test(F.layers)&&(f.pushLight(v),v.castShadow&&f.pushShadow(v))}),y!==g&&y.traverseVisible(function(v){v.isLight&&v.layers.test(F.layers)&&(f.pushLight(v),v.castShadow&&f.pushShadow(v))}),f.setupLights();const u=new Set;return y.traverse(function(v){if(!(v.isMesh||v.isPoints||v.isLine||v.isSprite))return;const I=v.material;if(I)if(Array.isArray(I))for(let z=0;z<I.length;z++){const V=I[z];at(V,g,v),u.add(V)}else at(I,g,v),u.add(I)}),f=R.pop(),u},this.compileAsync=function(y,F,g=null){const u=this.compile(y,F,g);return new Promise(v=>{function I(){if(u.forEach(function(z){ye.get(z).currentProgram.isReady()&&u.delete(z)}),u.size===0){v(y);return}setTimeout(I,10)}Ae.get("KHR_parallel_shader_compile")!==null?I():setTimeout(I,10)})};let et=null;function tn(y){et&&et(y)}function qt(){dn.stop()}function wn(){dn.start()}const dn=new yl;dn.setAnimationLoop(tn),typeof self<"u"&&dn.setContext(self),this.setAnimationLoop=function(y){et=y,le.setAnimationLoop(y),y===null?dn.stop():dn.start()},le.addEventListener("sessionstart",qt),le.addEventListener("sessionend",wn),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(F),F=le.getCamera()),y.isScene===!0&&y.onBeforeRender(b,y,F,B),f=Pe.get(y,R.length),f.init(F),R.push(f),ne.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Je.setFromProjectionMatrix(ne,fn,F.reversedDepth),ce=this.localClippingEnabled,X=he.init(this.clippingPlanes,ce),_=K.get(y,D.length),_.init(),D.push(_),le.enabled===!0&&le.isPresenting===!0){const I=b.xr.getDepthSensingMesh();I!==null&&Li(I,F,-1/0,b.sortObjects)}Li(y,F,0,b.sortObjects),_.finish(),b.sortObjects===!0&&_.sort(ee,te),dt=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,dt&&we.addToRenderList(_,y),this.info.render.frame++,X===!0&&he.beginShadows();const g=f.state.shadowsArray;be.render(g,y,F),X===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const u=_.opaque,v=_.transmissive;if(f.setupLights(),F.isArrayCamera){const I=F.cameras;if(v.length>0)for(let z=0,V=I.length;z<V;z++){const W=I[z];Ii(u,v,y,W)}dt&&we.render(y);for(let z=0,V=I.length;z<V;z++){const W=I[z];Ye(_,y,W,W.viewport)}}else v.length>0&&Ii(u,v,y,F),dt&&we.render(y),Ye(_,y,F);B!==null&&U===0&&(We.updateMultisampleRenderTarget(B),We.updateRenderTargetMipmap(B)),y.isScene===!0&&y.onAfterRender(b,y,F),ge.resetDefaultState(),A=-1,T=null,R.pop(),R.length>0?(f=R[R.length-1],X===!0&&he.setGlobalState(b.clippingPlanes,f.state.camera)):f=null,D.pop(),D.length>0?_=D[D.length-1]:_=null};function Li(y,F,g,u){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)g=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Je.intersectsSprite(y)){u&&Ee.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ne);const z=H.update(y),V=y.material;V.visible&&_.push(y,z,V,g,Ee.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Je.intersectsObject(y))){const z=H.update(y),V=y.material;if(u&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ee.copy(y.boundingSphere.center)):(z.boundingSphere===null&&z.computeBoundingSphere(),Ee.copy(z.boundingSphere.center)),Ee.applyMatrix4(y.matrixWorld).applyMatrix4(ne)),Array.isArray(V)){const W=z.groups;for(let fe=0,k=W.length;fe<k;fe++){const ae=W[fe],xe=V[ae.materialIndex];xe&&xe.visible&&_.push(y,z,xe,g,Ee.z,ae)}}else V.visible&&_.push(y,z,V,g,Ee.z,null)}}const I=y.children;for(let z=0,V=I.length;z<V;z++)Li(I[z],F,g,u)}function Ye(y,F,g,u){const v=y.opaque,I=y.transmissive,z=y.transparent;f.setupLightsView(g),X===!0&&he.setGlobalState(b.clippingPlanes,g),u&&De.viewport(L.copy(u)),v.length>0&&ii(v,F,g),I.length>0&&ii(I,F,g),z.length>0&&ii(z,F,g),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Ii(y,F,g,u){if((g.isScene===!0?g.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[u.id]===void 0&&(f.state.transmissionRenderTarget[u.id]=new ni(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float")?Qi:mn,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const I=f.state.transmissionRenderTarget[u.id],z=u.viewport||L;I.setSize(z.z*b.transmissionResolutionScale,z.w*b.transmissionResolutionScale);const V=b.getRenderTarget(),W=b.getActiveCubeFace(),fe=b.getActiveMipmapLevel();b.setRenderTarget(I),b.getClearColor(j),ie=b.getClearAlpha(),ie<1&&b.setClearColor(16777215,.5),b.clear(),dt&&we.render(g);const k=b.toneMapping;b.toneMapping=Fn;const ae=u.viewport;if(u.viewport!==void 0&&(u.viewport=void 0),f.setupLightsView(u),X===!0&&he.setGlobalState(b.clippingPlanes,u),ii(y,g,u),We.updateMultisampleRenderTarget(I),We.updateRenderTargetMipmap(I),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let xe=!1;for(let Fe=0,Ve=F.length;Fe<Ve;Fe++){const Be=F[Fe],$e=Be.object,Le=Be.geometry,ht=Be.material,tt=Be.group;if(ht.side===Tn&&$e.layers.test(u.layers)){const Ht=ht.side;ht.side=zt,ht.needsUpdate=!0,si($e,g,u,Le,ht,tt),ht.side=Ht,ht.needsUpdate=!0,xe=!0}}xe===!0&&(We.updateMultisampleRenderTarget(I),We.updateRenderTargetMipmap(I))}b.setRenderTarget(V,W,fe),b.setClearColor(j,ie),ae!==void 0&&(u.viewport=ae),b.toneMapping=k}function ii(y,F,g){const u=F.isScene===!0?F.overrideMaterial:null;for(let v=0,I=y.length;v<I;v++){const z=y[v],V=z.object,W=z.geometry,fe=z.group;let k=z.material;k.allowOverride===!0&&u!==null&&(k=u),V.layers.test(g.layers)&&si(V,F,g,W,k,fe)}}function si(y,F,g,u,v,I){y.onBeforeRender(b,F,g,u,v,I),y.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),v.onBeforeRender(b,F,g,u,y,I),v.transparent===!0&&v.side===Tn&&v.forceSinglePass===!1?(v.side=zt,v.needsUpdate=!0,b.renderBufferDirect(g,F,u,v,y,I),v.side=Bn,v.needsUpdate=!0,b.renderBufferDirect(g,F,u,v,y,I),v.side=Tn):b.renderBufferDirect(g,F,u,v,y,I),y.onAfterRender(b,F,g,u,v,I)}function zn(y,F,g){F.isScene!==!0&&(F=Ne);const u=ye.get(y),v=f.state.lights,I=f.state.shadowsArray,z=v.state.version,V=Z.getParameters(y,v.state,I,F,g),W=Z.getProgramCacheKey(V);let fe=u.programs;u.environment=y.isMeshStandardMaterial?F.environment:null,u.fog=F.fog,u.envMap=(y.isMeshStandardMaterial?ut:_t).get(y.envMap||u.environment),u.envMapRotation=u.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,fe===void 0&&(y.addEventListener("dispose",Q),fe=new Map,u.programs=fe);let k=fe.get(W);if(k!==void 0){if(u.currentProgram===k&&u.lightsStateVersion===z)return as(y,V),k}else V.uniforms=Z.getUniforms(y),y.onBeforeCompile(V,b),k=Z.acquireProgram(V,W),fe.set(W,k),u.uniforms=V.uniforms;const ae=u.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ae.clippingPlanes=he.uniform),as(y,V),u.needsLights=Ni(y),u.lightsStateVersion=z,u.needsLights&&(ae.ambientLightColor.value=v.state.ambient,ae.lightProbe.value=v.state.probe,ae.directionalLights.value=v.state.directional,ae.directionalLightShadows.value=v.state.directionalShadow,ae.spotLights.value=v.state.spot,ae.spotLightShadows.value=v.state.spotShadow,ae.rectAreaLights.value=v.state.rectArea,ae.ltc_1.value=v.state.rectAreaLTC1,ae.ltc_2.value=v.state.rectAreaLTC2,ae.pointLights.value=v.state.point,ae.pointLightShadows.value=v.state.pointShadow,ae.hemisphereLights.value=v.state.hemi,ae.directionalShadowMap.value=v.state.directionalShadowMap,ae.directionalShadowMatrix.value=v.state.directionalShadowMatrix,ae.spotShadowMap.value=v.state.spotShadowMap,ae.spotLightMatrix.value=v.state.spotLightMatrix,ae.spotLightMap.value=v.state.spotLightMap,ae.pointShadowMap.value=v.state.pointShadowMap,ae.pointShadowMatrix.value=v.state.pointShadowMatrix),u.currentProgram=k,u.uniformsList=null,k}function Ui(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=Vs.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function as(y,F){const g=ye.get(y);g.outputColorSpace=F.outputColorSpace,g.batching=F.batching,g.batchingColor=F.batchingColor,g.instancing=F.instancing,g.instancingColor=F.instancingColor,g.instancingMorph=F.instancingMorph,g.skinning=F.skinning,g.morphTargets=F.morphTargets,g.morphNormals=F.morphNormals,g.morphColors=F.morphColors,g.morphTargetsCount=F.morphTargetsCount,g.numClippingPlanes=F.numClippingPlanes,g.numIntersection=F.numClipIntersection,g.vertexAlphas=F.vertexAlphas,g.vertexTangents=F.vertexTangents,g.toneMapping=F.toneMapping}function qs(y,F,g,u,v){F.isScene!==!0&&(F=Ne),We.resetTextureUnits();const I=F.fog,z=u.isMeshStandardMaterial?F.environment:null,V=B===null?b.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ri,W=(u.isMeshStandardMaterial?ut:_t).get(u.envMap||z),fe=u.vertexColors===!0&&!!g.attributes.color&&g.attributes.color.itemSize===4,k=!!g.attributes.tangent&&(!!u.normalMap||u.anisotropy>0),ae=!!g.morphAttributes.position,xe=!!g.morphAttributes.normal,Fe=!!g.morphAttributes.color;let Ve=Fn;u.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ve=b.toneMapping);const Be=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,$e=Be!==void 0?Be.length:0,Le=ye.get(u),ht=f.state.lights;if(X===!0&&(ce===!0||y!==T)){const At=y===T&&u.id===A;he.setState(u,y,At)}let tt=!1;u.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==ht.state.version||Le.outputColorSpace!==V||v.isBatchedMesh&&Le.batching===!1||!v.isBatchedMesh&&Le.batching===!0||v.isBatchedMesh&&Le.batchingColor===!0&&v.colorTexture===null||v.isBatchedMesh&&Le.batchingColor===!1&&v.colorTexture!==null||v.isInstancedMesh&&Le.instancing===!1||!v.isInstancedMesh&&Le.instancing===!0||v.isSkinnedMesh&&Le.skinning===!1||!v.isSkinnedMesh&&Le.skinning===!0||v.isInstancedMesh&&Le.instancingColor===!0&&v.instanceColor===null||v.isInstancedMesh&&Le.instancingColor===!1&&v.instanceColor!==null||v.isInstancedMesh&&Le.instancingMorph===!0&&v.morphTexture===null||v.isInstancedMesh&&Le.instancingMorph===!1&&v.morphTexture!==null||Le.envMap!==W||u.fog===!0&&Le.fog!==I||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==he.numPlanes||Le.numIntersection!==he.numIntersection)||Le.vertexAlphas!==fe||Le.vertexTangents!==k||Le.morphTargets!==ae||Le.morphNormals!==xe||Le.morphColors!==Fe||Le.toneMapping!==Ve||Le.morphTargetsCount!==$e)&&(tt=!0):(tt=!0,Le.__version=u.version);let Ht=Le.currentProgram;tt===!0&&(Ht=zn(u,F,v));let ri=!1,Gt=!1,Bi=!1;const ft=Ht.getUniforms(),jt=Le.uniforms;if(De.useProgram(Ht.program)&&(ri=!0,Gt=!0,Bi=!0),u.id!==A&&(A=u.id,Gt=!0),ri||T!==y){De.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ft.setValue(P,"projectionMatrix",y.projectionMatrix),ft.setValue(P,"viewMatrix",y.matrixWorldInverse);const Bt=ft.map.cameraPosition;Bt!==void 0&&Bt.setValue(P,ue.setFromMatrixPosition(y.matrixWorld)),Qe.logarithmicDepthBuffer&&ft.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(u.isMeshPhongMaterial||u.isMeshToonMaterial||u.isMeshLambertMaterial||u.isMeshBasicMaterial||u.isMeshStandardMaterial||u.isShaderMaterial)&&ft.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),T!==y&&(T=y,Gt=!0,Bi=!0)}if(v.isSkinnedMesh){ft.setOptional(P,v,"bindMatrix"),ft.setOptional(P,v,"bindMatrixInverse");const At=v.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),ft.setValue(P,"boneTexture",At.boneTexture,We))}v.isBatchedMesh&&(ft.setOptional(P,v,"batchingTexture"),ft.setValue(P,"batchingTexture",v._matricesTexture,We),ft.setOptional(P,v,"batchingIdTexture"),ft.setValue(P,"batchingIdTexture",v._indirectTexture,We),ft.setOptional(P,v,"batchingColorTexture"),v._colorsTexture!==null&&ft.setValue(P,"batchingColorTexture",v._colorsTexture,We));const Yt=g.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&de.update(v,g,Ht),(Gt||Le.receiveShadow!==v.receiveShadow)&&(Le.receiveShadow=v.receiveShadow,ft.setValue(P,"receiveShadow",v.receiveShadow)),u.isMeshGouraudMaterial&&u.envMap!==null&&(jt.envMap.value=W,jt.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1),u.isMeshStandardMaterial&&u.envMap===null&&F.environment!==null&&(jt.envMapIntensity.value=F.environmentIntensity),Gt&&(ft.setValue(P,"toneMappingExposure",b.toneMappingExposure),Le.needsLights&&js(jt,Bi),I&&u.fog===!0&&se.refreshFogUniforms(jt,I),se.refreshMaterialUniforms(jt,u,$,oe,f.state.transmissionRenderTarget[y.id]),Vs.upload(P,Ui(Le),jt,We)),u.isShaderMaterial&&u.uniformsNeedUpdate===!0&&(Vs.upload(P,Ui(Le),jt,We),u.uniformsNeedUpdate=!1),u.isSpriteMaterial&&ft.setValue(P,"center",v.center),ft.setValue(P,"modelViewMatrix",v.modelViewMatrix),ft.setValue(P,"normalMatrix",v.normalMatrix),ft.setValue(P,"modelMatrix",v.matrixWorld),u.isShaderMaterial||u.isRawShaderMaterial){const At=u.uniformsGroups;for(let Bt=0,Ys=At.length;Bt<Ys;Bt++){const kn=At[Bt];Ge.update(kn,Ht),Ge.bind(kn,Ht)}}return Ht}function js(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function Ni(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(y,F,g){const u=ye.get(y);u.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,u.__autoAllocateDepthBuffer===!1&&(u.__useRenderToTexture=!1),ye.get(y.texture).__webglTexture=F,ye.get(y.depthTexture).__webglTexture=u.__autoAllocateDepthBuffer?void 0:g,u.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,F){const g=ye.get(y);g.__webglFramebuffer=F,g.__useDefaultFramebuffer=F===void 0};const Oi=P.createFramebuffer();this.setRenderTarget=function(y,F=0,g=0){B=y,C=F,U=g;let u=!0,v=null,I=!1,z=!1;if(y){const W=ye.get(y);if(W.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(P.FRAMEBUFFER,null),u=!1;else if(W.__webglFramebuffer===void 0)We.setupRenderTarget(y);else if(W.__hasExternalTextures)We.rebindTextures(y,ye.get(y.texture).__webglTexture,ye.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const ae=y.depthTexture;if(W.__boundDepthTexture!==ae){if(ae!==null&&ye.has(ae)&&(y.width!==ae.image.width||y.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(y)}}const fe=y.texture;(fe.isData3DTexture||fe.isDataArrayTexture||fe.isCompressedArrayTexture)&&(z=!0);const k=ye.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(k[F])?v=k[F][g]:v=k[F],I=!0):y.samples>0&&We.useMultisampledRTT(y)===!1?v=ye.get(y).__webglMultisampledFramebuffer:Array.isArray(k)?v=k[g]:v=k,L.copy(y.viewport),J.copy(y.scissor),q=y.scissorTest}else L.copy(me).multiplyScalar($).floor(),J.copy(ke).multiplyScalar($).floor(),q=rt;if(g!==0&&(v=Oi),De.bindFramebuffer(P.FRAMEBUFFER,v)&&u&&De.drawBuffers(y,v),De.viewport(L),De.scissor(J),De.setScissorTest(q),I){const W=ye.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,W.__webglTexture,g)}else if(z){const W=F;for(let fe=0;fe<y.textures.length;fe++){const k=ye.get(y.textures[fe]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+fe,k.__webglTexture,g,W)}}else if(y!==null&&g!==0){const W=ye.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,W.__webglTexture,g)}A=-1},this.readRenderTargetPixels=function(y,F,g,u,v,I,z,V=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let W=ye.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&z!==void 0&&(W=W[z]),W){De.bindFramebuffer(P.FRAMEBUFFER,W);try{const fe=y.textures[V],k=fe.format,ae=fe.type;if(!Qe.textureFormatReadable(k)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-u&&g>=0&&g<=y.height-v&&(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+V),P.readPixels(F,g,u,v,Re.convert(k),Re.convert(ae),I))}finally{const fe=B!==null?ye.get(B).__webglFramebuffer:null;De.bindFramebuffer(P.FRAMEBUFFER,fe)}}},this.readRenderTargetPixelsAsync=async function(y,F,g,u,v,I,z,V=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let W=ye.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&z!==void 0&&(W=W[z]),W)if(F>=0&&F<=y.width-u&&g>=0&&g<=y.height-v){De.bindFramebuffer(P.FRAMEBUFFER,W);const fe=y.textures[V],k=fe.format,ae=fe.type;if(!Qe.textureFormatReadable(k))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,xe),P.bufferData(P.PIXEL_PACK_BUFFER,I.byteLength,P.STREAM_READ),y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+V),P.readPixels(F,g,u,v,Re.convert(k),Re.convert(ae),0);const Fe=B!==null?ye.get(B).__webglFramebuffer:null;De.bindFramebuffer(P.FRAMEBUFFER,Fe);const Ve=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Ic(P,Ve,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,xe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,I),P.deleteBuffer(xe),P.deleteSync(Ve),I}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,F=null,g=0){const u=Math.pow(2,-g),v=Math.floor(y.image.width*u),I=Math.floor(y.image.height*u),z=F!==null?F.x:0,V=F!==null?F.y:0;We.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,g,0,0,z,V,v,I),De.unbindTexture()};const Fi=P.createFramebuffer(),os=P.createFramebuffer();this.copyTextureToTexture=function(y,F,g=null,u=null,v=0,I=null){I===null&&(v!==0?(Ei("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),I=v,v=0):I=0);let z,V,W,fe,k,ae,xe,Fe,Ve;const Be=y.isCompressedTexture?y.mipmaps[I]:y.image;if(g!==null)z=g.max.x-g.min.x,V=g.max.y-g.min.y,W=g.isBox3?g.max.z-g.min.z:1,fe=g.min.x,k=g.min.y,ae=g.isBox3?g.min.z:0;else{const Yt=Math.pow(2,-v);z=Math.floor(Be.width*Yt),V=Math.floor(Be.height*Yt),y.isDataArrayTexture?W=Be.depth:y.isData3DTexture?W=Math.floor(Be.depth*Yt):W=1,fe=0,k=0,ae=0}u!==null?(xe=u.x,Fe=u.y,Ve=u.z):(xe=0,Fe=0,Ve=0);const $e=Re.convert(F.format),Le=Re.convert(F.type);let ht;F.isData3DTexture?(We.setTexture3D(F,0),ht=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(We.setTexture2DArray(F,0),ht=P.TEXTURE_2D_ARRAY):(We.setTexture2D(F,0),ht=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const tt=P.getParameter(P.UNPACK_ROW_LENGTH),Ht=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ri=P.getParameter(P.UNPACK_SKIP_PIXELS),Gt=P.getParameter(P.UNPACK_SKIP_ROWS),Bi=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Be.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Be.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,fe),P.pixelStorei(P.UNPACK_SKIP_ROWS,k),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ae);const ft=y.isDataArrayTexture||y.isData3DTexture,jt=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){const Yt=ye.get(y),At=ye.get(F),Bt=ye.get(Yt.__renderTarget),Ys=ye.get(At.__renderTarget);De.bindFramebuffer(P.READ_FRAMEBUFFER,Bt.__webglFramebuffer),De.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ys.__webglFramebuffer);for(let kn=0;kn<W;kn++)ft&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ye.get(y).__webglTexture,v,ae+kn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ye.get(F).__webglTexture,I,Ve+kn)),P.blitFramebuffer(fe,k,z,V,xe,Fe,z,V,P.DEPTH_BUFFER_BIT,P.NEAREST);De.bindFramebuffer(P.READ_FRAMEBUFFER,null),De.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(v!==0||y.isRenderTargetTexture||ye.has(y)){const Yt=ye.get(y),At=ye.get(F);De.bindFramebuffer(P.READ_FRAMEBUFFER,Fi),De.bindFramebuffer(P.DRAW_FRAMEBUFFER,os);for(let Bt=0;Bt<W;Bt++)ft?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Yt.__webglTexture,v,ae+Bt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Yt.__webglTexture,v),jt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,At.__webglTexture,I,Ve+Bt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,At.__webglTexture,I),v!==0?P.blitFramebuffer(fe,k,z,V,xe,Fe,z,V,P.COLOR_BUFFER_BIT,P.NEAREST):jt?P.copyTexSubImage3D(ht,I,xe,Fe,Ve+Bt,fe,k,z,V):P.copyTexSubImage2D(ht,I,xe,Fe,fe,k,z,V);De.bindFramebuffer(P.READ_FRAMEBUFFER,null),De.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else jt?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(ht,I,xe,Fe,Ve,z,V,W,$e,Le,Be.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(ht,I,xe,Fe,Ve,z,V,W,$e,Be.data):P.texSubImage3D(ht,I,xe,Fe,Ve,z,V,W,$e,Le,Be):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,I,xe,Fe,z,V,$e,Le,Be.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,I,xe,Fe,Be.width,Be.height,$e,Be.data):P.texSubImage2D(P.TEXTURE_2D,I,xe,Fe,z,V,$e,Le,Be);P.pixelStorei(P.UNPACK_ROW_LENGTH,tt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ht),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ri),P.pixelStorei(P.UNPACK_SKIP_ROWS,Gt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Bi),I===0&&F.generateMipmaps&&P.generateMipmap(ht),De.unbindTexture()},this.copyTextureToTexture3D=function(y,F,g=null,u=null,v=0){return Ei('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,F,g,u,v)},this.initRenderTarget=function(y){ye.get(y).__webglFramebuffer===void 0&&We.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?We.setTextureCube(y,0):y.isData3DTexture?We.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?We.setTexture2DArray(y,0):We.setTexture2D(y,0),De.unbindTexture()},this.resetState=function(){C=0,U=0,B=null,De.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}const sm=/^[og]\s*(.+)?/,rm=/^mtllib /,am=/^usemtl /,om=/^usemap /,Wo=/\s+/,Xo=new G,Ur=new G,$o=new G,qo=new G,Zt=new G,Is=new je;function lm(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(e,t,n){const s=this.vertices,r=this.object.geometry.normals;Xo.fromArray(s,e),Ur.fromArray(s,t),$o.fromArray(s,n),Zt.subVectors($o,Ur),qo.subVectors(Xo,Ur),Zt.cross(qo),Zt.normalize(),r.push(Zt.x,Zt.y,Zt.z),r.push(Zt.x,Zt.y,Zt.z),r.push(Zt.x,Zt.y,Zt.z)},addColor:function(e,t,n){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(e,t,n){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,s,r,a,o,c,l){const d=this.vertices.length;let h=this.parseVertexIndex(e,d),p=this.parseVertexIndex(t,d),m=this.parseVertexIndex(n,d);if(this.addVertex(h,p,m),this.addColor(h,p,m),o!==void 0&&o!==""){const M=this.normals.length;h=this.parseNormalIndex(o,M),p=this.parseNormalIndex(c,M),m=this.parseNormalIndex(l,M),this.addNormal(h,p,m)}else this.addFaceNormal(h,p,m);if(s!==void 0&&s!==""){const M=this.uvs.length;h=this.parseUVIndex(s,M),p=this.parseUVIndex(r,M),m=this.parseUVIndex(a,M),this.addUV(h,p,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,s=e.length;n<s;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let r=0,a=e.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return i.startObject("",!1),i}class cm extends Na{constructor(e){super(e),this.materials=null}load(e,t,n,s){const r=this,a=new pd(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new lm;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let s=[];for(let o=0,c=n.length;o<c;o++){const l=n[o].trimStart();if(l.length===0)continue;const d=l.charAt(0);if(d!=="#")if(d==="v"){const h=l.split(Wo);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(Is.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6]),$t),t.colors.push(Is.r,Is.g,Is.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(d==="f"){const p=l.slice(1).trim().split(Wo),m=[];for(let S=0,_=p.length;S<_;S++){const f=p[S];if(f.length>0){const D=f.split("/");m.push(D)}}const M=m[0];for(let S=1,_=m.length-1;S<_;S++){const f=m[S],D=m[S+1];t.addFace(M[0],f[0],D[0],M[1],f[1],D[1],M[2],f[2],D[2])}}else if(d==="l"){const h=l.substring(1).trim().split(" ");let p=[];const m=[];if(l.indexOf("/")===-1)p=h;else for(let M=0,S=h.length;M<S;M++){const _=h[M].split("/");_[0]!==""&&p.push(_[0]),_[1]!==""&&m.push(_[1])}t.addLineGeometry(p,m)}else if(d==="p"){const p=l.slice(1).trim().split(" ");t.addPointGeometry(p)}else if((s=sm.exec(l))!==null){const h=(" "+s[0].slice(1).trim()).slice(1);t.startObject(h)}else if(am.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(rm.test(l))t.materialLibraries.push(l.substring(7).trim());else if(om.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(d==="s"){if(s=l.split(" "),s.length>1){const p=s[1].trim().toLowerCase();t.object.smooth=p!=="0"&&p!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();const r=new ei;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,c=t.objects.length;o<c;o++){const l=t.objects[o],d=l.geometry,h=l.materials,p=d.type==="Line",m=d.type==="Points";let M=!1;if(d.vertices.length===0)continue;const S=new en;S.setAttribute("position",new Ft(d.vertices,3)),d.normals.length>0&&S.setAttribute("normal",new Ft(d.normals,3)),d.colors.length>0&&(M=!0,S.setAttribute("color",new Ft(d.colors,3))),d.hasUVIndices===!0&&S.setAttribute("uv",new Ft(d.uvs,2));const _=[];for(let D=0,R=h.length;D<R;D++){const b=h[D],O=b.name+"_"+b.smooth+"_"+M;let C=t.materials[O];if(this.materials!==null){if(C=this.materials.create(b.name),p&&C&&!(C instanceof ji)){const U=new ji;gn.prototype.copy.call(U,C),U.color.copy(C.color),C=U}else if(m&&C&&!(C instanceof $i)){const U=new $i({size:10,sizeAttenuation:!1});gn.prototype.copy.call(U,C),U.color.copy(C.color),U.map=C.map,C=U}}C===void 0&&(p?C=new ji:m?C=new $i({size:1,sizeAttenuation:!1}):C=new ld,C.name=b.name,C.flatShading=!b.smooth,C.vertexColors=M,t.materials[O]=C),_.push(C)}let f;if(_.length>1){for(let D=0,R=h.length;D<R;D++){const b=h[D];S.addGroup(b.groupStart,b.groupCount,D)}p?f=new fo(S,_):m?f=new br(S,_):f=new Qt(S,_)}else p?f=new fo(S,_[0]):m?f=new br(S,_[0]):f=new Qt(S,_[0]);f.name=l.name,r.add(f)}else if(t.vertices.length>0){const o=new $i({size:1,sizeAttenuation:!1}),c=new en;c.setAttribute("position",new Ft(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new Ft(t.colors,3)),o.vertexColors=!0);const l=new br(c,o);r.add(l)}return r}}const dm={key:0,class:"hud"},um=["max"],hm=jo({__name:"Pip3D",props:{width:{default:560},height:{default:350},dataUrl:{default:"/pip_test_data.json"},wsUrl:{default:""},modelPaths:{default:()=>({bus:"/bus.obj",car:"/car.obj",pedestrian:"/pedestrian.obj"})},cameraMode:{default:"chase"}},setup(i){const e=i,t=Rl([]),n=ze(0),s=ze(0),r=ze(!0);let a=null;const o=[],c=Mi(()=>t.length?e.wsUrl?t[t.length-1]:t[n.value]:null),l=ze(null),d=ze(null);let h,p,m,M=0,S,_,f;const D=new cm,R=new Ar({color:16777215,metalness:0,roughness:1}),b=new Ar({color:14278115,metalness:0,roughness:.9}),O=new Ar({color:11388671,roughness:.85}),C={};async function U(ee){if(C[ee])return C[ee].clone(!0);const te=await D.loadAsync(ee);return te.traverse(me=>{me.isMesh&&(me.castShadow=!0,me.receiveShadow=!0)}),C[ee]=te,te.clone(!0)}const B={};function A(ee){return`${ee.type}-${ee.id}`}const T={};function L(ee,te){if(ee==="top")m.position.set(te.x,30,te.z),m.lookAt(te.x,0,te.z);else{const me=new G(te.x,3.5,te.z-10);m.position.lerp(me,.12),m.lookAt(te.x,.8,te.z+6)}}async function J(){p=new sd,p.background=new je(16185337),m=new Jt(45,e.width/e.height,.1,1e3),m.position.set(0,6,12),h=new im({canvas:d.value,antialias:!0}),h.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),h.setSize(e.width,e.height),h.shadowMap.enabled=!0,p.add(new vd(16777215,.6)),f=new _d(16777215,.6),f.position.set(10,12,6),f.castShadow=!0,p.add(f);const ee=new rs(200,200);_=new Qt(ee,R),_.receiveShadow=!0,_.rotation.x=-Math.PI/2,p.add(_),S=new ei;const te=await U(e.modelPaths.bus);te.traverse(me=>{me.isMesh&&(me.material=O)}),S.add(te),p.add(S),q()}function q(){M=requestAnimationFrame(q);const ee=c.value;if(ee){const{x:te=0,y:me=0,z:ke=0,yaw:rt=0}=ee.ego||{};S.position.set(te,me,ke),S.rotation.set(0,rt,0),L(e.cameraMode,{x:te,z:ke});const Je={};for(const X of ee.objects||[]){const ce=A(X);let ne=B[ce];if(!ne){ne=new ei,B[ce]=ne,p.add(ne);let ue=e.modelPaths.car;X.type==="pedestrian"&&(ue=e.modelPaths.pedestrian),U(ue).then(Ee=>{Ee.traverse(Ne=>{Ne.isMesh&&(Ne.material=b)}),ne.add(Ee)})}ne.position.set(X.x??0,X.y??0,X.z??0),ne.rotation.set(0,X.yaw??0,0),Je[ce]=!0}for(const[X,ce]of Object.entries(B))Je[X]||(p.remove(ce),delete B[X]);for(const X of ee.lanes||[]){let ce=T[X.id];const ne=(X.pts||[]).map(ue=>new G(ue[0],ue[1],ue[2]));if(ce)ce.geometry.setFromPoints(ne),ce.geometry.computeBoundingSphere();else{const ue=new en().setFromPoints(ne),Ee=new ji({color:13686237});ce=new vl(ue,Ee),T[X.id]=ce,p.add(ce)}}}h.render(p,m)}async function j(){const te=await(await fetch(e.dataUrl)).json();t.splice(0,t.length,...te.frames||[])}function ie(){e.wsUrl&&(a=new WebSocket(e.wsUrl),a.onmessage=ee=>{try{const te=JSON.parse(ee.data);o.push(te),o.length>240&&o.shift(),t.splice(0,t.length,...o)}catch(te){console.warn("WS parse error",te)}},a.onclose=()=>{})}let Y=0;function oe(){$();const ee=()=>{var te;t.length&&r.value&&(n.value=(n.value+1)%t.length,s.value=((te=t[n.value])==null?void 0:te.ts_ms)||0),Y=requestAnimationFrame(ee)};Y=requestAnimationFrame(ee)}function $(){Y&&cancelAnimationFrame(Y)}return Yo(async()=>{await J(),e.wsUrl?ie():(await j(),oe()),new ResizeObserver(()=>{const te=e.width,me=e.height;h.setSize(te,me),m.aspect=te/me,m.updateProjectionMatrix()}).observe(l.value)}),Cl(()=>{cancelAnimationFrame(M),$(),a==null||a.close(),h==null||h.dispose();for(const ee of Object.values(B))p.remove(ee)}),(ee,te)=>(Ue(),Ie("div",{ref_key:"wrap",ref:l,class:"pip3d",style:Pl({width:`${ee.width}px`,height:`${ee.height}px`})},[E("canvas",{ref_key:"canvas",ref:d},null,512),ee.wsUrl?Ke("",!0):(Ue(),Ie("div",dm,[E("button",{onClick:te[0]||(te[0]=me=>r.value=!r.value)},Me(r.value?"Pause":"Play"),1),E("span",null,"t: "+Me(s.value),1),Xi(E("input",{type:"range",min:0,max:Math.max(0,t.length-1),"onUpdate:modelValue":te[1]||(te[1]=me=>n.value=me)},null,8,um),[[Dl,n.value,void 0,{number:!0}]])]))],4))}}),fm=Ko(hm,[["__scopeId","data-v-24b7cede"]]),pm={class:"vehicle-tracking-container"},mm={class:"header px-6 py-4 bg-white shadow-sm"},gm={class:"flex items-center gap-4 mt-4"},_m={class:"flex items-center gap-2"},vm={class:"text-sm text-gray-700"},xm={class:"flex items-center gap-2"},Mm={class:"text-sm text-gray-700"},Sm={class:"flex items-center gap-2"},ym={class:"text-sm text-gray-700"},Em={class:"flex items-center gap-2"},Tm={class:"text-sm text-gray-700"},bm={class:"text-sm text-gray-500 flex items-center gap-2"},Am={class:"flex items-center gap-2 ml-auto"},wm={key:0,class:"text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded border border-orange-200"},Rm=["disabled"],Cm={class:"main-content"},Pm={class:"map-container"},Dm={class:"pip-header"},Lm={class:"pip-controls"},Im={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},Um={key:1,width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},Nm={class:"pip-header"},Om={class:"pip-controls"},Fm={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},Bm={key:1,width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},Vm={class:"pip-header"},zm={class:"pip-controls"},km={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},Hm={key:1,width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},Gm={class:"panel-content"},Wm={class:"info-section"},Xm={class:"info-grid"},$m={class:"info-item"},qm={class:"info-value"},jm={class:"info-item"},Ym={class:"info-value"},Km={class:"info-item"},Zm={class:"info-item"},Jm={class:"info-section"},Qm={class:"info-grid"},eg={class:"info-item"},tg={class:"info-value"},ng={class:"info-item"},ig={class:"info-value"},sg={key:0,class:"info-item"},rg={class:"info-value"},ag={key:1,class:"info-item"},og={class:"info-value"},lg={class:"info-section"},cg={class:"info-grid"},dg={class:"info-item full-width"},ug={class:"info-value font-mono text-xs"},hg={class:"info-item"},fg={class:"info-value"},pg={class:"info-item"},mg={class:"info-value"},gg={key:0,class:"info-item"},_g={class:"info-value"},vg={key:1,class:"info-item"},xg={class:"info-value"},Mg={class:"info-section"},Sg={class:"object-detection-grid"},yg={class:"detection-item"},Eg={class:"detection-info"},Tg={class:"detection-count"},bg={class:"detection-item"},Ag={class:"detection-info"},wg={class:"detection-count"},Rg={class:"detection-item"},Cg={class:"detection-info"},Pg={class:"detection-count"},Dg={class:"detection-item"},Lg={class:"detection-info"},Ig={class:"info-section"},Ug={class:"odd-status-header"},Ng={class:"odd-status-icon"},Og={class:"odd-status-content"},Fg={class:"odd-status-value"},Bg={key:0,class:"odd-distance"},Vg={class:"environment-conditions"},zg={class:"condition-grid"},kg={class:"condition-item"},Hg={class:"condition-info"},Gg={class:"condition-value"},Wg={class:"condition-item"},Xg={class:"condition-info"},$g={class:"condition-value"},qg={class:"condition-item"},jg={class:"condition-info"},Yg={class:"condition-value"},Kg={class:"condition-item"},Zg={class:"condition-info"},Jg={class:"condition-value"},Qg={class:"system-limits"},e_={class:"limit-status-list"},t_={key:0,class:"intervention-alert"},n_={class:"intervention-content"},i_={class:"intervention-reason"},s_={class:"safety-text"},r_={key:0,class:"odd-warning-card"},a_={class:"warning-content"},o_={class:"warning-distance"},l_={class:"distance-value"},c_={class:"warning-eta"},d_={class:"eta-value"},u_={class:"warning-action"},h_={class:"action-text"},f_={key:1,class:"absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10"},p_={key:2,class:"absolute top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded z-10"},m_={class:"text-sm"},g_={class:"sidebar"},__={class:"sidebar-content"},v_={key:0,class:"text-center text-gray-500 py-8"},x_={key:1,class:"space-y-3"},M_=["onClick"],S_={class:"flex items-center justify-between mb-2"},y_={class:"flex items-center gap-2"},E_={class:"font-medium text-gray-800"},T_={class:"text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"},b_={class:"text-sm text-gray-600 space-y-1"},A_={class:"flex justify-between"},w_={class:"text-purple-600"},R_={key:0,class:"flex justify-between"},C_={class:"font-medium"},P_={class:"text-blue-600"},D_={key:1,class:"mt-2 p-2 bg-green-50 border border-green-200 rounded text-xs"},L_={class:"space-y-1 text-green-700"},I_={class:"flex justify-between"},U_={class:"font-mono"},N_={class:"flex justify-between"},O_={class:"font-mono"},F_={key:0,class:"mt-1 pt-1 border-t border-green-300"},B_={key:0,class:"flex justify-between"},V_={class:"font-medium"},z_={key:1,class:"mt-1"},k_={class:"flex flex-wrap gap-1 mt-1"},H_={key:2,class:"flex justify-between"},G_={class:"font-mono"},W_={class:"flex justify-between"},X_={key:0,class:"text-xs"},$_={key:2,class:"mt-1 p-2 bg-orange-50 rounded text-xs"},q_={class:"flex justify-between"},j_={class:"mt-3 pt-2 border-t border-gray-200"},Y_={class:"flex gap-2"},K_=["onClick","disabled"],Z_=["onClick","disabled"],J_={key:3,class:"mt-2 pt-2 border-t border-gray-200"},Q_={key:0,class:"bg-blue-50 p-2 rounded text-xs mb-2"},ev={class:"flex justify-between mb-1"},tv={class:"font-medium text-blue-900"},nv={class:"flex justify-between"},iv={class:"font-medium text-blue-900"},sv={key:1,class:"flex justify-between text-xs"},rv={class:"text-green-600 font-medium"},av={key:2,class:"flex justify-between text-xs"},ov={class:"text-indigo-600"},lv={key:3,class:"flex justify-between text-xs"},cv={class:"text-gray-700"},dv={key:4,class:"mt-2 pt-2 border-t border-gray-200"},uv={key:0,class:"space-y-2"},hv={class:"flex justify-between text-xs"},fv={class:"text-purple-600 font-medium"},pv={class:"font-medium text-green-800 mb-1"},mv={class:"space-y-1 text-green-700"},gv={class:"flex items-start gap-1"},_v={class:"flex-1"},vv=["title"],xv={class:"flex items-start gap-1"},Mv={class:"flex-1"},Sv=["title"],yv={key:0,class:"text-xs text-gray-600"},Ev={key:0,class:"text-xs text-gray-500 text-center"},Tv={key:1,class:"flex justify-between text-xs mt-2"},bv={class:"text-gray-700"},Av={key:2,class:"flex justify-between text-xs"},wv={class:"text-gray-700"},Rv={class:"mt-2 pt-2 border-t border-gray-200"},Cv={class:"flex justify-between text-xs"},Pv={class:"font-mono"},Dv={key:0,class:"flex justify-between text-xs"},Lv={class:"text-gray-700"},Iv={key:1,class:"flex justify-between text-xs"},Uv={class:"text-gray-700"},Nv=jo({__name:"VehicleTrackingView",setup(i){delete pt.Icon.Default.prototype._getIconUrl,pt.Icon.Default.mergeOptions({iconRetinaUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",iconUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png"});const e=new Fl({basePath:"https://av-ops.maas-busan.shop",baseOptions:{timeout:1e4,headers:{"Content-Type":"application/json",Accept:"application/json"}}}),t=new zl(e);new Gl(e);const n=new Vl(e),s=new kl(e),r=new Bl(e),a="https://av-ops.maas-busan.shop",o=ze(),c=ze(),l=ze(new Map),d=ze(new Map),h=ze(new Map),p=ze(new Map),m=ze(new Map),M=ze(new Map),S=ze(new Map),_=ze([]),f=ze(new Map),D=ze(new Map),R=ze(new Map),b=ze(!1),O=ze(!1),C=ze(null),U=ze([]),B=ze([]),A=ze([]),T=ze([]),L=ze(""),J=ze(1e3),q=ze(),j=ze(),ie=ze(),Y=ze(),oe=ze(),$=ze(),ee=ze(!1),te=ze(!1),me=ze(!1),ke=ze(!0),rt=ze(!0),Je=ze(!0),X=ze(null),ce=ze({x:0,y:0}),ne=ze(null),ue=ze(null),Ee=ze({pedestrians:0,vehicles:0,bicycles:0}),Ne=ze("녹색"),dt=Mi(()=>{const g=Ne.value;return g==="녹색"?"text-green-600":g==="황색"?"text-yellow-600":g==="적색"?"text-red-600":"text-gray-600"}),Ce=ze({inODD:!0,distanceToBoundary:850,approachingBoundary:!1,etaToBoundary:60,recommendedAction:"정상 운행 가능",weather:"맑음",lighting:"주간",roadCondition:"건조",temperature:23,systemLimits:{oddExceeded:!1,sensorFailure:!1,weatherLimit:!1,gpsLoss:!1},driverInterventionRequired:!1,interventionReason:"",safetyStopAvailable:!0});let P=null;const st=[35.1796,129.0756],Ae=Mi(()=>{console.log("=== 운행 중 차량 필터링 ==="),console.log("전체 차량 수:",U.value.length),console.log("수요응답 Trip 수:",B.value.length),console.log("정기노선 Trip 수:",A.value.length),B.value.length>0&&console.log("수요응답 Trip 상태들:",B.value.map(u=>({id:u.id,vehicle_id:u.vehicle_id,status:u.status}))),A.value.length>0&&console.log("정기노선 Trip 상태들:",A.value.map(u=>({id:u.id,vehicle_id:u.vehicle_id,status:u.status})));const g=U.value.filter(u=>{var z,V;const v=B.value.find(W=>W.vehicle_id===u.id);if(v&&(console.log(`🚗 차량 ${u.id}: 수요응답 Trip #${v.id} (상태: ${v.status})`,{calls_count:((z=v.calls)==null?void 0:z.length)||0,call_ids:((V=v.calls)==null?void 0:V.map(W=>W.id))||[],service_area_id:v.service_area_id}),v.status!=="SCHEDULED"&&v.status!=="COMPLETED"))return!0;const I=A.value.find(W=>W.vehicle_id===u.id);return!!(I&&(console.log(`차량 ${u.id}: 정기노선 Trip 상태 = ${I.status}`),I.status!=="SCHEDULED"&&I.status!=="COMPLETED"))});return console.log("필터링 결과: 운행 중 차량 수 =",g.length),console.log("=== 필터링 종료 ==="),g.map(u=>{const v=B.value.find(V=>V.vehicle_id===u.id),I=A.value.find(V=>V.vehicle_id===u.id),z=v||I;return{...u,trip_id:z==null?void 0:z.id,tripStatus:z==null?void 0:z.status,tripType:v?"ON_DEMAND":"SCHEDULED"}})}),Qe=Mi(()=>Ae.value.filter(g=>g.tripType==="SCHEDULED"&&g.tripStatus!=="RETURNING").length),De=Mi(()=>Ae.value.filter(g=>g.tripType==="ON_DEMAND"&&g.tripStatus!=="RETURNING").length),lt=Mi(()=>Ae.value.filter(g=>g.tripStatus==="RETURNING").length),ye=()=>{try{if(console.log("지도 초기화 시작..."),console.log("mapContainer.value:",o.value),!o.value){console.error("지도 컨테이너를 찾을 수 없습니다");return}c.value&&c.value.remove(),console.log("Leaflet 지도 객체 생성 중..."),c.value=pt.map(o.value,{center:st,zoom:13,zoomControl:!0,attributionControl:!0,minZoom:10,maxZoom:18}),console.log("타일 레이어 추가 중...");const g=pt.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors",maxZoom:19,subdomains:["a","b","c"]});g.addTo(c.value),g.on("loading",()=>{console.log("타일 로딩 시작")}),g.on("load",()=>{console.log("타일 로딩 완료")}),console.log("지도 초기화 완료"),console.log("지도 객체:",c.value)}catch(g){console.error("지도 초기화 실패:",g),g.value=`지도 초기화 실패: ${g.message}`}},We=async()=>{try{console.log("서비스 지역 조회 중...");const g=await s.getServiceAreasApiServiceAreasGet();T.value=g.data||[],console.log(`서비스 지역 ${T.value.length}개 조회 완료`),console.log("서비스 지역 데이터:",T.value),T.value.length>0&&c.value&&(ut(),_t())}catch(g){console.error("서비스 지역 조회 실패:",g)}},_t=()=>{if(!(!c.value||T.value.length===0))try{console.log("서비스 지역 기준으로 지도 범위 조정 중...");let g=null,u=0;T.value.forEach(v=>{v.geojson&&v.geojson.features&&v.geojson.features.forEach(I=>{if(I.geometry&&I.geometry.coordinates){const z=(V,W=0)=>{if(!(W>3)&&Array.isArray(V))if(V.length===2&&typeof V[0]=="number"&&typeof V[1]=="number"){const fe=pt.latLng(V[1],V[0]);g?g.extend(fe):g=pt.latLngBounds([fe]),u++}else V.forEach(fe=>z(fe,W+1))};z(I.geometry.coordinates)}})}),g&&u>0?(console.log(`${u}개 좌표로 지도 범위 설정`),console.log("범위:",g.getSouthWest(),"~",g.getNorthEast()),c.value.fitBounds(g,{padding:[20,20],maxZoom:15})):(console.warn("서비스 지역 좌표를 찾을 수 없어 기본 위치 사용"),c.value.setView(st,11))}catch(g){console.error("지도 범위 조정 실패:",g),c.value.setView(st,11)}},ut=()=>{c.value&&(_.value.forEach(g=>{var u;(u=c.value)==null||u.removeLayer(g)}),_.value=[],T.value.forEach(g=>{if(g.geojson)try{const u=pt.geoJSON(g.geojson,{style:{color:"#3b82f6",weight:2,opacity:.8,fillColor:"#3b82f6",fillOpacity:.1},onEachFeature:(v,I)=>{const z=`
              <div>
                <h4 class="font-semibold">${g.area_name}</h4>
                <p><strong>타입:</strong> ${g.area_type||"N/A"}</p>
                <p><strong>설명:</strong> ${g.description||"설명 없음"}</p>
              </div>
            `;I.bindPopup(z)}});u.addTo(c.value),_.value.push(u),console.log(`서비스 지역 "${g.area_name}" 지도에 추가`)}catch(u){console.error(`서비스 지역 "${g.area_name}" 표시 실패:`,u)}}))},w=async()=>{try{console.log("차량 목록 조회 중...");const g=await t.getAllVehiclesApiVehiclesGet();U.value=g.data||[],console.log(`차량 ${U.value.length}대 조회 완료`),console.log("차량 데이터:",U.value)}catch(g){console.error("차량 목록 조회 실패:",g),C.value=`차량 목록 조회 실패: ${g.message}`}},x=async()=>{try{console.log("수요응답 Trip 조회 중...");try{const g=await fetch(`${a}/api/on-demand-trips/calls`);if(g.ok){const u=await g.json();u&&u.length>0&&(console.log("📍 Call API 응답 구조 (첫 번째 call):",u[0]),console.log("📍 Call 필드명:",Object.keys(u[0])))}}catch(g){console.log("Call API 조회 스킵:",g)}try{const g=await fetch(`${a}/api/on-demand-trips/active`);if(g.ok){const u=await g.json();B.value=u||[],console.log("수요응답 활성 Trip:",u)}else throw new Error(`Active trips API failed: ${g.status}`)}catch(g){console.warn("활성 API 실패, 전체 조회 시도...",g);try{const u=await fetch(`${a}/api/on-demand-trips`);if(u.ok){const v=await u.json();B.value=v||[],console.log("=== 수요응답 Trip 전체 데이터 분석 ==="),console.log("전체 Trip 수:",v.length),v.forEach(V=>{var W,fe;if(console.log(`🚗 수요응답 Trip ${V.id}:`,{status:V.status,vehicle_id:V.vehicle_id,driver_id:V.driver_id,start_time:V.start_time,end_time:V.end_time,current_passengers:V.current_passengers,service_area_id:V.service_area_id,has_calls:!!(V.calls&&V.calls.length>0),calls_count:((W=V.calls)==null?void 0:W.length)||0,call_ids:((fe=V.calls)==null?void 0:fe.map(k=>k.id))||[]}),V.calls&&V.calls.length>0){console.log("   📞 Call 데이터 구조 (첫 번째 call):",V.calls[0]);const k=V.calls[0].id;k&&fetch(`${a}/api/on-demand-trips/calls/${k}`).then(ae=>ae.json()).then(ae=>{console.log(`   📍 Call #${k} 상세 정보:`,ae)}).catch(ae=>console.error(`Call #${k} 조회 실패:`,ae))}});const I=v.reduce((V,W)=>(V[W.status]=(V[W.status]||0)+1,V),{});console.log("상태별 Trip 수:",I);const z=v.filter(V=>V.status==="IN_PROGRESS");console.log("IN_PROGRESS Trip 수:",z.length),z.length>0&&console.log("IN_PROGRESS Trip vehicle_ids:",z.map(V=>V.vehicle_id))}}catch(u){console.warn("수요응답 Trip 조회 실패:",u)}}console.log(`수요응답 Trip ${B.value.length}개 조회 완료`)}catch(g){console.error("수요응답 Trip 조회 실패:",g)}},H=async()=>{try{console.log("정기노선 Trip 조회 중...");const g=new Date().toISOString().split("T")[0];try{const u=await n.getScheduledTripsApiPlanningScheduledTripsGet();u.data&&(A.value=u.data.filter(v=>v.status==="IN_PROGRESS"&&v.trip_date===g),console.log("정기노선 활성 Trip:",A.value))}catch{const v=await fetch(`${a}/api/planning/scheduled-trips?trip_date=${g}`);if(v.ok){const I=await v.json();A.value=I.filter(z=>z.status==="IN_PROGRESS"),console.log("정기노선 활성 Trip (fetch):",A.value)}}console.log(`정기노선 Trip ${A.value.length}개 조회 완료`)}catch(g){console.error("정기노선 Trip 조회 실패:",g)}},Z=async g=>{var u,v,I,z,V;if(!(!c.value||!g.trip_id))try{let W=null;const fe=g.trip_id;if(g.tripType==="SCHEDULED"){const k=await fetch(`${a}/api/driver/scheduled-trips/${fe}/route`);if(k.ok){const ae=await k.text();if(ae)try{W=JSON.parse(ae),console.log(`정기노선 Trip ${fe} Route API 업데이트 데이터:`,{trip_type:W.trip_type,trip_status:W.trip_status,current_node_id:W.current_node_id,current_location:[W.current_latitude,W.current_longitude],route_points_count:((u=W.route_points)==null?void 0:u.length)||0,heading_fields:{heading:W.heading,current_location_heading:(v=W.current_location)==null?void 0:v.heading,has_current_location_obj:!!W.current_location}})}catch{console.log(`정기노선 Trip ${fe} 경로 파싱 실패:`,ae)}}else console.log(`정기노선 Trip ${fe} 경로 API 응답 실패:`,k.status)}else if(g.tripType==="ON_DEMAND"){const k=await fetch(`${a}/api/driver/on-demand-trips/${fe}/route`);if(k.ok){const ae=await k.text();if(ae)try{W=JSON.parse(ae),console.log(`수요응답 Trip ${fe} Route API 업데이트 데이터:`,{trip_type:W.trip_type,trip_status:W.trip_status,current_node_id:W.current_node_id,current_location:[W.current_latitude,W.current_longitude],route_points_count:((I=W.route_points)==null?void 0:I.length)||0,heading_fields:{heading:W.heading,current_location_heading:(z=W.current_location)==null?void 0:z.heading,has_current_location_obj:!!W.current_location}})}catch{console.log(`수요응답 Trip ${fe} 경로 파싱 실패:`,ae)}}else console.log(`수요응답 Trip ${fe} 경로 API 응답 실패:`,k.status)}if(W){if(W.current_latitude&&W.current_longitude&&(g.current_latitude=W.current_latitude,g.current_longitude=W.current_longitude),((V=W.current_location)==null?void 0:V.heading)!==void 0)g.heading=W.current_location.heading,console.log(`차량 ${g.id} heading 업데이트:`,g.heading);else if(W.heading!==void 0)g.heading=W.heading,console.log(`차량 ${g.id} heading 업데이트:`,g.heading);else{const k=de(g,W);k!==null&&(g.heading=k,console.log(`차량 ${g.id} heading 계산됨:`,g.heading))}await se(g,W),K(g,W)&&N(g,W)}else console.log(`차량 ${g.id} (Trip ${fe}): 경로 데이터 없음`)}catch(W){console.error(`차량 ${g.id} 경로 로드 실패:`,W)}},se=async(g,u)=>{if(!c.value)return;const v=u.current_latitude||g.current_latitude,I=u.current_longitude||g.current_longitude;if(!v||!I)return;let z=l.value.get(g.id);if(z){const V=pt.latLng(v,I);if(z.getLatLng().distanceTo(V)>5){z.setLatLng(V);const k=g.tripStatus==="RETURNING"?"#EA580C":g.tripType==="SCHEDULED"?"#2563EB":"#059669",ae=le(g,k);z.setIcon(ae),Pe(z,g,u)}}else be(g);he(g.id,v,I)},K=(g,u)=>{const v=D.value.get(g.id)||0,I=Date.now();if(I-v>5e3)return D.value.set(g.id,I),!0;const z=R.value.get(g.id),V=u.current_link_id||u.current_node_id;return z!==V?(R.value.set(g.id,V),!0):!1},Pe=(g,u,v)=>{var V,W;const I=u.tripType==="SCHEDULED"?"정기노선":u.tripType==="ON_DEMAND"?"수요응답":"알 수 없음",z=`
    <div class="vehicle-popup">
      <h4 class="font-semibold">${u.vehicle_number}</h4>
      <p class="text-sm text-gray-600">${I}</p>
      <p class="text-xs text-gray-500">
        위치: ${(V=v.current_latitude)==null?void 0:V.toFixed(6)}, ${(W=v.current_longitude)==null?void 0:W.toFixed(6)}<br>
        방향: ${u.heading||0}°<br>
        승객: ${u.current_occupancy||0}/${u.capacity||0}명<br>
        상태: ${wn(u.tripStatus)}
      </p>
    </div>
  `;g.bindPopup(z)},he=(g,u,v)=>{if(!c.value)return;let I=M.value.get(g)||[];I.push([u,v]),I.length>20&&(I=I.slice(-20)),M.value.set(g,I);const z=m.value.get(g);if(z&&c.value.removeLayer(z),I.length>=2){const V=pt.polyline(I,{color:"#FF6600",weight:2,opacity:.6,dashArray:"3, 6",className:"trajectory-line"});V.addTo(c.value),m.value.set(g,V)}},be=g=>{if(!c.value)return;const u=g.current_latitude,v=g.current_longitude;if(!u||!v)return;let I="#6B7280";g.tripStatus==="RETURNING"?I="#EA580C":g.tripType==="SCHEDULED"?I="#2563EB":g.tripType==="ON_DEMAND"&&(I="#059669");const z=le(g,I),V=pt.marker([u,v],{icon:z,zIndexOffset:1e3}),W=g.tripType==="SCHEDULED"?"정기노선":g.tripType==="ON_DEMAND"?"수요응답":"알 수 없음",fe=`
    <div class="vehicle-popup">
      <h4 class="font-semibold">${g.vehicle_number}</h4>
      <p class="text-sm text-gray-600">${W}</p>
      <p class="text-xs text-gray-500">
        위치: ${u.toFixed(6)}, ${v.toFixed(6)}<br>
        방향: ${g.heading||0}°<br>
        승객: ${g.current_occupancy||0}/${g.capacity||0}명<br>
        상태: ${wn(g.tripStatus)}
      </p>
    </div>
  `;V.bindPopup(fe),V.addTo(c.value),l.value.set(g.id,V)},we=g=>{var v,I;const u=g.tripType==="SCHEDULED"?"정기노선":g.tripType==="ON_DEMAND"?"수요응답":"알 수 없음";return`
    <div class="vehicle-popup">
      <h4 class="font-semibold">${g.vehicle_number}</h4>
      <p class="text-sm text-gray-600">${u}</p>
      <p class="text-xs text-gray-500">
        위치: ${(v=g.current_latitude)==null?void 0:v.toFixed(6)}, ${(I=g.current_longitude)==null?void 0:I.toFixed(6)}<br>
        방향: ${g.heading||0}°<br>
        승객: ${g.current_occupancy||0}/${g.capacity||0}명<br>
        상태: ${wn(g.tripStatus)}
      </p>
    </div>
  `},de=(g,u)=>{try{f.value||(f.value=new Map);const v=f.value.get(g.id),I=u.current_latitude,z=u.current_longitude;if(!v||!I||!z)return f.value.set(g.id,{lat:I,lng:z,timestamp:Date.now()}),null;if(ve(v.lat,v.lng,I,z)<9e-5)return null;const W=Oe(v.lat,v.lng,I,z);return f.value.set(g.id,{lat:I,lng:z,timestamp:Date.now()}),Math.round(W)}catch(v){return console.error("heading 계산 오류:",v),null}},ve=(g,u,v,I)=>{const z=v-g,V=I-u;return Math.sqrt(z*z+V*V)},Oe=(g,u,v,I)=>{const z=(I-u)*Math.PI/180,V=g*Math.PI/180,W=v*Math.PI/180,fe=Math.sin(z)*Math.cos(W),k=Math.cos(V)*Math.sin(W)-Math.sin(V)*Math.cos(W)*Math.cos(z);return(Math.atan2(fe,k)*180/Math.PI+360)%360},Re=(g,u,v)=>{if(!c.value||!u.start_node||!u.end_node)return;const I=S.value.get(g);I&&c.value.removeLayer(I);const z=u.start_node.latitude+(u.end_node.latitude-u.start_node.latitude)*v,V=u.start_node.longitude+(u.end_node.longitude-u.start_node.longitude)*v,W=pt.divIcon({className:"progress-arrow",html:'<div style="color: #FF0000; font-size: 20px; font-weight: bold; text-shadow: 0 0 3px white;">→</div>',iconSize:[20,20],iconAnchor:[10,10]}),fe=pt.marker([z,V],{icon:W});fe.addTo(c.value),S.value.set(g,fe)},ge=async(g,u)=>{var I,z,V,W,fe;const v=`${g}-${u}`;if(h.value.has(v)){const k=h.value.get(v);return console.log(`🔗 링크 캐시 히트 ${v}:`,{has_geojson:!!(k.geojson&&k.geojson.geometry),geojson_type:(z=(I=k.geojson)==null?void 0:I.geometry)==null?void 0:z.type,coordinates_count:(fe=(W=(V=k.geojson)==null?void 0:V.geometry)==null?void 0:W.coordinates)==null?void 0:fe.length}),k}try{if(console.log(`🔗 링크 캐시 사이즈: ${h.value.size}`),h.value.size===0){console.log("🌐 Network API에서 모든 링크 정보 로드 중...");const ae=await r.getActiveLinksApiNetworkLinksGet();ae.data?(console.log(`🌐 Network API 응답: ${ae.data.length}개 링크`),ae.data.forEach(xe=>{const Fe=`${xe.from_node_id}-${xe.to_node_id}`;h.value.set(Fe,xe)}),console.log(`🔗 링크 캐시 구축 완료: ${h.value.size}개 링크`)):console.warn("🌐 Network API 응답 데이터 없음")}const k=h.value.get(v)||null;return k||console.warn(`🔗 링크 ${v} 캐시에서 찾을 수 없음`),k}catch(k){return console.error("🌐 링크 정보 조회 실패:",k),null}},Ge=g=>{var u;!c.value||!g.stops||(p.value.forEach(v=>{var I;(I=c.value)==null||I.removeLayer(v)}),p.value.clear(),(u=g.stops)==null||u.forEach(v=>{const I=pt.divIcon({className:"stop-marker",html:`
        <div class="stop-icon ${v.is_passed?"passed":""}" 
             style="background: ${v.is_passed?"#9CA3AF":"#3B82F6"}; 
                    width: 28px; height: 28px; border-radius: 50%; 
                    display: flex; align-items: center; justify-content: center;
                    border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">
          <span style="color: white; font-weight: bold; font-size: 12px;">${v.order||v.sequence||""}</span>
        </div>
      `,iconSize:[28,28],iconAnchor:[14,14]}),z=pt.marker([v.latitude,v.longitude],{icon:I}).bindPopup(`
        <b>${v.name||v.node_name}</b><br>
        순서: ${v.order||v.sequence}<br>
        ${v.arrival_time?`도착: ${ii(v.arrival_time)}`:""}
        ${v.is_passed?'<br><span style="color: #9CA3AF;">통과됨</span>':""}
      `);z.addTo(c.value),p.value.set(v.node_id,z),g.next_node_id===v.node_id&&z.openPopup()}))},N=async(g,u)=>{var W,fe;if(!c.value)return;const v=d.value.get(g.id);v&&v.forEach(k=>{var ae;return(ae=c.value)==null?void 0:ae.removeLayer(k)});const I=S.value.get(g.id);I&&(c.value.removeLayer(I),S.value.delete(g.id));const z=[];if(Ge(u),u.route_links&&Array.isArray(u.route_links)){console.log(`route_links 배열 처리: ${u.route_links.length}개 링크`),console.log("첫 번째 링크 구조:",JSON.stringify(u.route_links[0],null,2)),u.route_links.forEach((k,ae)=>{var xe,Fe,Ve;console.log(`Link ${ae+1} (ID: ${k.link_id}):`,{has_geojson:!!k.geojson,geojson_type:(xe=k.geojson)==null?void 0:xe.type,coordinates_count:(Ve=(Fe=k.geojson)==null?void 0:Fe.coordinates)==null?void 0:Ve.length,is_current:k.is_current,is_completed:k.is_completed})});for(const k of u.route_links){let ae;const xe=k.is_completed?"#888888":k.is_current?"#FF0000":"#0066CC",Fe=k.is_current?5:3,Ve=k.is_completed?.5:.8,Be=k.is_completed?"5, 10":void 0;if(k.geojson&&k.geojson.coordinates)console.log(`링크 ${k.link_id}: Route API의 GeoJSON 사용 (${k.geojson.coordinates.length}개 점)`),ae=pt.geoJSON(k.geojson,{style:{color:xe,weight:Fe,opacity:Ve,dashArray:Be}});else if(k.link_id&&k.start_node&&k.end_node){const $e=await ge(k.start_node.id||k.start_node.node_id,k.end_node.id||k.end_node.node_id);if($e&&$e.geojson&&$e.geojson.geometry)console.log(`링크 ${k.link_id}: 네트워크 API에서 GeoJSON 가져옴`),ae=pt.geoJSON($e.geojson.geometry,{style:{color:xe,weight:Fe,opacity:Ve,dashArray:Be}});else{console.log(`링크 ${k.link_id}: 네트워크 API에서도 GeoJSON 없음, 직선 연결`);const Le=[[k.start_node.latitude,k.start_node.longitude],[k.end_node.latitude,k.end_node.longitude]];ae=pt.polyline(Le,{color:xe,weight:Fe,opacity:Ve,dashArray:Be})}}else{console.log(`링크 ${k.link_id||"Unknown"}: 링크 정보 불완전, 직선 연결`);const $e=[[k.start_node.latitude,k.start_node.longitude],[k.end_node.latitude,k.end_node.longitude]];ae=pt.polyline($e,{color:xe,weight:Fe,opacity:Ve,dashArray:Be})}ae.addTo(c.value),z.push(ae),k.is_current&&u.link_progress&&Re(g.id,k,u.link_progress)}d.value.set(g.id,z),console.log(`차량 ${g.id}: ${z.length}개 링크 표시 완료`);return}const V=u.stops||u.route_points||u.waypoints||[];if(V&&Array.isArray(V)){console.log(`stops 배열 파싱: ${V.length}개 노드`);for(let k=0;k<V.length-1;k++){const ae=V[k],xe=V[k+1];if(ae.node_id&&xe.node_id){const Fe=await ge(ae.node_id,xe.node_id);Fe&&Fe.geojson&&Fe.geojson.geometry&&Fe.geojson.geometry.coordinates?Fe.geojson.geometry.coordinates.forEach(Be=>{Array.isArray(Be)&&Be.length>=2&&routePoints.push([Be[1],Be[0]])}):(console.log(`링크 ${ae.node_id}->${xe.node_id} GeoJSON 없음, 직선 연결`),routePoints.push([ae.latitude,ae.longitude]),k===V.length-2&&routePoints.push([xe.latitude,xe.longitude]))}}console.log(`총 ${routePoints.length}개 좌표 포인트 생성`)}else Array.isArray(u)?(console.log(`직접 배열 파싱: ${u.length}개`),routePoints=u.map(k=>k.latitude&&k.longitude?[k.latitude,k.longitude]:k.lat&&k.lng?[k.lat,k.lng]:Array.isArray(k)&&k.length>=2?[k[0],k[1]]:null).filter(Boolean)):u.coordinates?(console.log(`coordinates 배열 파싱: ${u.coordinates.length}개`),routePoints=u.coordinates.map(k=>Array.isArray(k)&&k.length>=2?[k[1],k[0]]:null).filter(Boolean)):u.points?(console.log(`points 배열 파싱: ${u.points.length}개`),routePoints=u.points.map(k=>k.latitude&&k.longitude?[k.latitude,k.longitude]:null).filter(Boolean)):u.path?(console.log(`path 배열 파싱: ${u.path.length}개`),routePoints=u.path.map(k=>k.latitude&&k.longitude?[k.latitude,k.longitude]:k.lat&&k.lng?[k.lat,k.lng]:null).filter(Boolean)):console.warn("알 수 없는 경로 데이터 형식:",u);if(routePoints.length>0){const k=currentLocation.latitude||k,ae=currentLocation.longitude||ae;let xe=-1,Fe=1/0;if(u.route_links){let Ve=0;for(const Be of u.route_links){const $e=((fe=(W=Be.geojson)==null?void 0:W.coordinates)==null?void 0:fe.length)||2;if(Be.is_current){xe=Ve+Math.floor($e*linkProgress);break}if(Be.is_completed)Ve+=$e;else break}}if(xe===-1&&routePoints.forEach((Ve,Be)=>{const $e=Math.sqrt(Math.pow(Ve[0]-k,2)+Math.pow(Ve[1]-ae,2));$e<Fe&&(Fe=$e,xe=Be)}),console.log(`차량 ${g.id}: 경로 포인트 ${routePoints.length}개, 현재 인덱스 ${xe}`),xe>0){const Ve=pt.polyline(routePoints.slice(0,xe+1),{color:"#9CA3AF",weight:3,opacity:.6,dashArray:"8, 8"});Ve.addTo(c.value),z.push(Ve),console.log(`이전 경로 추가: ${xe+1}개 포인트`)}if(xe<routePoints.length-1&&xe>=0){const Ve=g.tripType==="SCHEDULED"?"#3B82F6":"#10B981",Be=pt.polyline(routePoints.slice(xe),{color:Ve,weight:4,opacity:.8});Be.addTo(c.value),z.push(Be),console.log(`미래 경로 추가: ${routePoints.length-xe}개 포인트, 색상: ${Ve}`)}if(xe===-1){const Ve=g.tripType==="SCHEDULED"?"#3B82F6":"#10B981",Be=pt.polyline(routePoints,{color:Ve,weight:4,opacity:.8});Be.addTo(c.value),z.push(Be),console.log(`전체 경로 추가: ${routePoints.length}개 포인트, 색상: ${Ve}`)}d.value.set(g.id,z)}},le=(g,u)=>{const v=g.heading||0;return console.log(`차량 ${g.id} 아이콘 생성 - heading: ${v} (vehicle.heading: ${g.heading})`),pt.divIcon({html:`
      <div style="transform: rotate(${v}deg); transform-origin: center; filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.5));">
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
                  fill="${u}" 
                  stroke="none"
                  opacity="1"/>
            <!-- 중앙 점 -->
            <circle cx="0" cy="0" r="4" fill="white" stroke="black" stroke-width="1"/>
            <circle cx="0" cy="0" r="2.5" fill="${u}"/>
          </g>
        </svg>
      </div>
    `,className:"vehicle-icon",iconSize:[40,40],iconAnchor:[20,20]})},pe=async()=>{if(!c.value)return;const g=new Set(Ae.value.map(v=>v.id)),u=new Set(l.value.keys());for(const v of u)if(!g.has(v)){const I=l.value.get(v);I&&(c.value.removeLayer(I),l.value.delete(v));const z=d.value.get(v);z&&(z.forEach(W=>{var fe;return(fe=c.value)==null?void 0:fe.removeLayer(W)}),d.value.delete(v));const V=m.value.get(v);V&&(c.value.removeLayer(V),m.value.delete(v))}Ae.value.forEach(v=>{if(v.current_latitude&&v.current_longitude){const I=l.value.get(v.id);if(!I)be(v),Z(v);else{const z=pt.latLng(v.current_latitude,v.current_longitude);I.setLatLng(z);const V=we(v);I.setPopupContent(V),Z(v)}}}),console.log(`${Ae.value.length}대의 차량 차등 업데이트 완료`)},Se=async()=>{b.value=!0,C.value=null;try{await Q(),console.log("수동 새로고침 완료")}catch(g){console.error("수동 새로고침 실패:",g),C.value=g.message||"데이터 로드 중 오류가 발생했습니다."}finally{b.value=!1}},re=async()=>{O.value=!0;try{await Q(),J.value>1e3&&console.log("백그라운드 업데이트 완료")}catch(g){console.error("백그라운드 업데이트 실패:",g)}finally{O.value=!1}},Q=async()=>{await w(),await Promise.all([x(),H(),We()]),await pe(),L.value=new Date().toLocaleString("ko-KR")},Te=(g,u)=>{qt(g);const v=u%3;ne.value===v?(ne.value=null,ue.value=null,Ee.value={pedestrians:0,vehicles:0,bicycles:0}):(ne.value=v,ue.value=g,at(),et(),tn())},He=()=>{ne.value=null,ue.value=null,Ee.value={pedestrians:0,vehicles:0,bicycles:0}},at=()=>{Ee.value={pedestrians:Math.floor(Math.random()*5),vehicles:Math.floor(Math.random()*8),bicycles:Math.floor(Math.random()*3)};const g=setInterval(()=>{ue.value?Ee.value={pedestrians:Math.floor(Math.random()*5),vehicles:Math.floor(Math.random()*8),bicycles:Math.floor(Math.random()*3)}:clearInterval(g)},3e3)},et=()=>{const g=["녹색","황색","적색"];let u=0;const v=setInterval(()=>{ue.value?(Ne.value=g[u],u=(u+1)%g.length):clearInterval(v)},5e3)},tn=()=>{const g=()=>{if(!ue.value)return;const v=Math.random();if(v<.7)Ce.value={inODD:!0,distanceToBoundary:Math.floor(Math.random()*2e3)+500,approachingBoundary:!1,etaToBoundary:0,recommendedAction:"정상 운행 유지",weather:["맑음","흐림"][Math.floor(Math.random()*2)],lighting:ue.value.currentTime==="night"?"야간":"주간",roadCondition:"건조",temperature:Math.floor(Math.random()*10)+18,systemLimits:{oddExceeded:!1,sensorFailure:!1,weatherLimit:!1,gpsLoss:!1},driverInterventionRequired:!1,interventionReason:"",safetyStopAvailable:!0};else if(v<.9){const I=Math.floor(Math.random()*300)+100;Ce.value={inODD:!0,distanceToBoundary:I,approachingBoundary:!0,etaToBoundary:Math.floor(I/10),recommendedAction:"속도 감소 및 경로 확인",weather:["비","안개"][Math.floor(Math.random()*2)],lighting:"주간",roadCondition:"습윤",temperature:Math.floor(Math.random()*5)+15,systemLimits:{oddExceeded:!1,sensorFailure:!1,weatherLimit:I<200,gpsLoss:!1},driverInterventionRequired:I<150,interventionReason:I<150?"ODD 경계 접근":"",safetyStopAvailable:!0}}else Ce.value={inODD:!1,distanceToBoundary:0,approachingBoundary:!1,etaToBoundary:0,recommendedAction:"즉시 운전자 개입 필요",weather:["폭우","눈"][Math.floor(Math.random()*2)],lighting:"야간",roadCondition:["결빙","침수"][Math.floor(Math.random()*2)],temperature:Math.floor(Math.random()*5)-2,systemLimits:{oddExceeded:!0,sensorFailure:Math.random()>.5,weatherLimit:!0,gpsLoss:Math.random()>.7},driverInterventionRequired:!0,interventionReason:"시스템 한계 도달",safetyStopAvailable:Math.random()>.3}};g();const u=setInterval(()=>{ue.value?g():clearInterval(u)},1e4)},qt=g=>{if(c.value&&g.current_latitude&&g.current_longitude){c.value.setView([g.current_latitude,g.current_longitude],15);const u=l.value.get(g.id);u&&u.openPopup()}},wn=g=>{switch(g){case"SCHEDULED":return"예약됨";case"IN_PROGRESS":return"운행중";case"RETURNING":return"차고지 복귀중";case"COMPLETED":return"완료";case"CANCELLED":return"취소됨";default:return"알 수 없음"}},dn=(g,u)=>!g||!u?"N/A":`${g.toFixed(4)}, ${u.toFixed(4)}`,Li=()=>{console.log(`업데이트 주기를 ${J.value}ms로 변경`),P&&clearInterval(P),P=setInterval(re,J.value)},Ye=g=>g.tripType==="ON_DEMAND"?B.value.find(u=>u.vehicle_id===g.id):g.tripType==="SCHEDULED"?A.value.find(u=>u.vehicle_id===g.id):null,Ii=g=>({SCHEDULED:"text-blue-600",IN_PROGRESS:"text-green-600 font-medium",RETURNING:"text-orange-600 font-medium",COMPLETED:"text-gray-500",CANCELLED:"text-red-600"})[g||""]||"text-gray-500",ii=g=>{if(!g)return"-";try{return new Date(g).toLocaleString("ko-KR",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return g}},si=g=>{if(!g)return"-";try{return g.match(/^\d{2}:\d{2}$/)?g:new Date(g).toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return g}},zn=g=>{if(g.start_node&&typeof g.start_node=="object")return g.start_node.name||`정류장 #${g.start_node.id}`;if(g.start_node_id)return`정류장 #${g.start_node_id}`;const u=g.pickup_address||g.origin_address||g.from_address;if(u)return u;const v=g.pickup_latitude||g.pickup_lat||g.origin_latitude||g.origin_lat,I=g.pickup_longitude||g.pickup_lng||g.pickup_lon||g.origin_longitude||g.origin_lng||g.origin_lon;return v!==void 0&&I!==void 0&&v!==null&&I!==null?`${Number(v).toFixed(4)}, ${Number(I).toFixed(4)}`:"위치 정보 없음"},Ui=g=>{if(g.end_node&&typeof g.end_node=="object")return g.end_node.name||`정류장 #${g.end_node.id}`;if(g.end_node_id)return`정류장 #${g.end_node_id}`;const u=g.dropoff_address||g.destination_address||g.to_address;if(u)return u;const v=g.dropoff_latitude||g.dropoff_lat||g.destination_latitude||g.destination_lat,I=g.dropoff_longitude||g.dropoff_lng||g.dropoff_lon||g.destination_longitude||g.destination_lng||g.destination_lon;return v!==void 0&&I!==void 0&&v!==null&&I!==null?`${Number(v).toFixed(4)}, ${Number(I).toFixed(4)}`:"위치 정보 없음"},as=g=>{if(!g)return"-";try{const u=new Date(g),I=new Date().getTime()-u.getTime(),z=Math.floor(I/6e4);if(z<60)return`${z}분`;{const V=Math.floor(z/60),W=z%60;return`${V}시간 ${W}분`}}catch{return"-"}},qs=async g=>{if(!g.trip_id){alert("Trip ID가 없습니다.");return}if(confirm(`차량 ${g.vehicle_number}의 운행을 중단하시겠습니까?\\n\\n운행이 완료 처리되며 차량이 차고지로 복귀합니다.`))try{O.value=!0;const v=g.tripType||"SCHEDULED";console.log(`차량 ${g.id}: IN_PROGRESS → COMPLETED 상태 전환 시도`);const I=await fetch(`${a}/api/planning/trips/${g.trip_id}/status?trip_type=${v}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:"COMPLETED"})});if(I.ok)console.log(`차량 ${g.id} 운행 완료 처리됨`),await re(),alert("운행이 완료 처리되었습니다.");else{const z=await I.text();if(console.error("운행완료 처리 실패:",I.status,z),I.status===400&&z.includes("상태 전환")){console.log("CANCELLED 상태로 시도");const V=await fetch(`${a}/api/planning/trips/${g.trip_id}/status?trip_type=${v}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:"CANCELLED"})});if(V.ok)console.log(`차량 ${g.id} 운행 취소됨`),await re(),alert("운행이 취소되었습니다.");else{const W=await V.text();console.error("운행취소도 실패:",V.status,W),alert(`운행중단 실패:\\n1. COMPLETED 전환 실패: ${z}\\n2. CANCELLED 전환 실패: ${W}`)}}else alert(`운행중단 실패: ${I.status} - ${z}`)}}catch(v){console.error("운행중단 오류:",v),alert(`운행중단 중 오류가 발생했습니다: ${v.message}`)}finally{O.value=!1}},js=async g=>{if(!g.trip_id){alert("Trip ID가 없습니다.");return}if(confirm(`차량 ${g.vehicle_number}의 복귀를 완료하시겠습니까?`))try{if(O.value=!0,g.tripType==="ON_DEMAND"){const v=await fetch(`${a}/api/driver/trips/${g.trip_id}/return-complete`,{method:"POST",headers:{"Content-Type":"application/json"}});if(v.ok)console.log(`수요응답 차량 ${g.id} 복귀 완료`),await re(),alert("복귀가 완료되었습니다.");else{const I=await v.text();console.error("복귀완료 실패:",v.status,I),alert(`복귀완료 실패: ${v.status} - ${I}`)}}else{const v=g.tripType||"SCHEDULED",I=await fetch(`${a}/api/planning/trips/${g.trip_id}/status?trip_type=${v}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:"COMPLETED"})});if(I.ok)console.log(`정기노선 차량 ${g.id} 복귀 완료`),await re(),alert("복귀가 완료되었습니다.");else{const z=await I.text();console.error("복귀완료 실패:",I.status,z),alert(`복귀완료 실패: ${I.status} - ${z}`)}}}catch(v){console.error("복귀완료 오류:",v),alert(`복귀완료 중 오류가 발생했습니다: ${v.message}`)}finally{O.value=!1}},Ni=g=>{g===1?ee.value=!ee.value:g===2?te.value=!te.value:g===3&&(me.value=!me.value)},Oi=g=>{g===1?(ke.value=!1,Y.value&&Y.value.pause()):g===2?(rt.value=!1,oe.value&&oe.value.pause()):g===3&&(Je.value=!1,$.value&&$.value.pause())},Fi=(g,u)=>{if(g.target.closest(".pip-header")){X.value=u;let v;if(u===1?v=q.value:u===2?v=j.value:u===3&&(v=ie.value),v){const I=v.getBoundingClientRect();ce.value={x:g.clientX-I.left,y:g.clientY-I.top},document.addEventListener("mousemove",os),document.addEventListener("mouseup",y)}}},os=g=>{if(X.value!==null){let u;if(X.value===1?u=q.value:X.value===2?u=j.value:X.value===3&&(u=ie.value),u){const v=g.clientX-ce.value.x,I=g.clientY-ce.value.y,z=window.innerWidth-u.offsetWidth,V=window.innerHeight-u.offsetHeight;u.style.left=`${Math.max(0,Math.min(v,z))}px`,u.style.top=`${Math.max(0,Math.min(I,V))}px`}}},y=()=>{X.value=null,document.removeEventListener("mousemove",os),document.removeEventListener("mouseup",y)},F=()=>{setTimeout(()=>{Y.value&&(Y.value.currentTime=0,Y.value.play())},100),setTimeout(()=>{oe.value&&(oe.value.currentTime=5,oe.value.play())},500),setTimeout(()=>{$.value&&($.value.currentTime=10,$.value.play())},1e3)};return Yo(async()=>{b.value=!0;try{ye(),await Q(),console.log("초기 데이터 로드 완료")}catch(g){console.error("초기 데이터 로드 실패:",g),C.value=g.message||"데이터 로드 중 오류가 발생했습니다."}finally{b.value=!1}F(),P=setInterval(re,J.value)}),Ll(()=>{P&&clearInterval(P),c.value&&c.value.remove()}),(g,u)=>(Ue(),Ie("div",pm,[E("div",mm,[u[17]||(u[17]=E("h1",{class:"text-2xl font-bold text-gray-800"},"실시간 차량 위치 추적",-1)),E("div",gm,[E("div",_m,[u[10]||(u[10]=E("div",{class:"w-3 h-3 bg-blue-500 rounded-full"},null,-1)),E("span",vm,"정기노선 ("+Me(Qe.value)+"대)",1)]),E("div",xm,[u[11]||(u[11]=E("div",{class:"w-3 h-3 bg-green-500 rounded-full"},null,-1)),E("span",Mm,"수요응답 ("+Me(De.value)+"대)",1)]),E("div",Sm,[u[12]||(u[12]=E("div",{class:"w-3 h-3 bg-orange-500 rounded-full"},null,-1)),E("span",ym,"차고지 복귀 중 ("+Me(lt.value)+"대)",1)]),E("div",Em,[u[13]||(u[13]=E("div",{class:"w-3 h-3 bg-gray-400 rounded-full"},null,-1)),E("span",Tm,"전체 차량 ("+Me(U.value.length)+"대)",1)]),E("div",bm,[E("span",null,"마지막 업데이트: "+Me(L.value),1),E("div",{class:Et(["w-2 h-2 rounded-full transition-all duration-300",O.value?"bg-blue-500 animate-pulse":"bg-transparent"]),title:"업데이트 상태"},null,2)]),E("div",Am,[u[16]||(u[16]=E("label",{class:"text-sm text-gray-600"},"업데이트 주기:",-1)),Xi(E("select",{"onUpdate:modelValue":u[0]||(u[0]=v=>J.value=v),onChange:Li,class:"text-sm border border-gray-300 rounded px-2 py-1"},u[14]||(u[14]=[E("option",{value:1e3},"1초 (실시간)",-1),E("option",{value:3e3},"3초",-1),E("option",{value:5e3},"5초",-1),E("option",{value:1e4},"10초",-1),E("option",{value:3e4},"30초",-1)]),544),[[Il,J.value]]),J.value===1e3?(Ue(),Ie("div",wm,u[15]||(u[15]=[E("span",null,"⚡ 실시간 모드",-1)]))):Ke("",!0),E("button",{onClick:Se,disabled:b.value||O.value,class:"px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 disabled:opacity-50",style:{"min-width":"100px"}},Me(b.value?"로딩 중...":"새로고침"),9,Rm)])])]),E("div",Cm,[E("div",Pm,[E("div",{ref_key:"mapContainer",ref:o,class:"w-full h-full"},null,512),Xi(E("div",{ref_key:"pip1Container",ref:q,class:Et(["pip-video-container pip-1",{"pip-minimized":ee.value,"pip-selected":ne.value===0}]),onMousedown:u[3]||(u[3]=v=>Fi(v,1))},[E("div",Dm,[u[21]||(u[21]=E("span",{class:"pip-title"},"자율주행 #1",-1)),E("div",Lm,[E("button",{onClick:u[1]||(u[1]=v=>Ni(1)),class:"pip-btn",title:"크기 조절"},[ee.value?(Ue(),Ie("svg",Im,u[18]||(u[18]=[E("path",{d:"M3 3v10h10V3H3zm9 9H4V4h8v8z"},null,-1)]))):(Ue(),Ie("svg",Um,u[19]||(u[19]=[E("path",{d:"M4 4h3v1H5v2H4V4zm5 0h3v3h-1V5H9V4zM4 9h1v2h2v1H4V9zm8 0h1v3H9v-1h3V9z"},null,-1)])))]),E("button",{onClick:u[2]||(u[2]=v=>Oi(1)),class:"pip-btn",title:"닫기"},u[20]||(u[20]=[E("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},[E("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})],-1)]))])]),E("video",{ref_key:"video1Player",ref:Y,class:"pip-video",src:"/generated.mp4",controls:"",autoplay:"",loop:"",muted:""},null,512)],34),[[Ks,ke.value]]),Xi(E("div",{ref_key:"pip2Container",ref:j,class:Et(["pip-video-container pip-2",{"pip-minimized":te.value,"pip-selected":ne.value===1}]),onMousedown:u[6]||(u[6]=v=>Fi(v,2))},[E("div",Nm,[u[25]||(u[25]=E("span",{class:"pip-title"},"자율주행 #2",-1)),E("div",Om,[E("button",{onClick:u[4]||(u[4]=v=>Ni(2)),class:"pip-btn",title:"크기 조절"},[te.value?(Ue(),Ie("svg",Fm,u[22]||(u[22]=[E("path",{d:"M3 3v10h10V3H3zm9 9H4V4h8v8z"},null,-1)]))):(Ue(),Ie("svg",Bm,u[23]||(u[23]=[E("path",{d:"M4 4h3v1H5v2H4V4zm5 0h3v3h-1V5H9V4zM4 9h1v2h2v1H4V9zm8 0h1v3H9v-1h3V9z"},null,-1)])))]),E("button",{onClick:u[5]||(u[5]=v=>Oi(2)),class:"pip-btn",title:"닫기"},u[24]||(u[24]=[E("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},[E("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})],-1)]))])]),E("video",{ref_key:"video2Player",ref:oe,class:"pip-video",src:"/generated.mp4",controls:"",autoplay:"",loop:"",muted:""},null,512)],34),[[Ks,rt.value]]),Xi(E("div",{ref_key:"pip3Container",ref:ie,class:Et(["pip-video-container pip-3",{"pip-minimized":me.value,"pip-selected":ne.value===2}]),onMousedown:u[9]||(u[9]=v=>Fi(v,3))},[E("div",Vm,[u[29]||(u[29]=E("span",{class:"pip-title"},"3D 시뮬레이션",-1)),E("div",zm,[E("button",{onClick:u[7]||(u[7]=v=>Ni(3)),class:"pip-btn",title:"크기 조절"},[me.value?(Ue(),Ie("svg",km,u[26]||(u[26]=[E("path",{d:"M3 3v10h10V3H3zm9 9H4V4h8v8z"},null,-1)]))):(Ue(),Ie("svg",Hm,u[27]||(u[27]=[E("path",{d:"M4 4h3v1H5v2H4V4zm5 0h3v3h-1V5H9V4zM4 9h1v2h2v1H4V9zm8 0h1v3H9v-1h3V9z"},null,-1)])))]),E("button",{onClick:u[8]||(u[8]=v=>Oi(3)),class:"pip-btn",title:"닫기"},u[28]||(u[28]=[E("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor"},[E("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})],-1)]))])]),Ul(fm,{width:me.value?320:640,height:me.value?200:400,cameraMode:"chase"},null,8,["width","height"])],34),[[Ks,Je.value]]),ue.value&&ne.value!==null?(Ue(),Ie("div",{key:0,class:Et(["vehicle-info-panel",{"panel-expanded":ne.value!==null}])},[E("div",{class:"panel-header"},[u[31]||(u[31]=E("h3",{class:"panel-title"},"차량 상세 정보",-1)),E("button",{onClick:He,class:"close-btn"},u[30]||(u[30]=[E("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor"},[E("path",{d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"})],-1)]))]),E("div",Gm,[E("div",Wm,[u[36]||(u[36]=E("h4",{class:"section-title"},"차량 정보",-1)),E("div",Xm,[E("div",$m,[u[32]||(u[32]=E("span",{class:"info-label"},"차량 번호",-1)),E("span",qm,Me(ue.value.vehicle_number),1)]),E("div",jm,[u[33]||(u[33]=E("span",{class:"info-label"},"차량 ID",-1)),E("span",Ym,"#"+Me(ue.value.id),1)]),E("div",Km,[u[34]||(u[34]=E("span",{class:"info-label"},"운행 타입",-1)),E("span",{class:Et(["info-value",ue.value.tripType==="SCHEDULED"?"text-blue-600":"text-green-600"])},Me(ue.value.tripType==="SCHEDULED"?"정기노선":"수요응답"),3)]),E("div",Zm,[u[35]||(u[35]=E("span",{class:"info-label"},"상태",-1)),E("span",{class:Et(["info-value",Ii(ue.value.tripStatus)])},Me(wn(ue.value.tripStatus)),3)])])]),E("div",Jm,[u[41]||(u[41]=E("h4",{class:"section-title"},"운행 정보",-1)),E("div",Qm,[E("div",eg,[u[37]||(u[37]=E("span",{class:"info-label"},"Trip ID",-1)),E("span",tg,"#"+Me(ue.value.trip_id),1)]),E("div",ng,[u[38]||(u[38]=E("span",{class:"info-label"},"승객",-1)),E("span",ig,Me(ue.value.current_occupancy||0)+"/"+Me(ue.value.capacity||0)+"명",1)]),ue.value.driver_id?(Ue(),Ie("div",sg,[u[39]||(u[39]=E("span",{class:"info-label"},"운전자 ID",-1)),E("span",rg,"#"+Me(ue.value.driver_id),1)])):Ke("",!0),ue.value.route_id?(Ue(),Ie("div",ag,[u[40]||(u[40]=E("span",{class:"info-label"},"노선 ID",-1)),E("span",og,"#"+Me(ue.value.route_id),1)])):Ke("",!0)])]),E("div",lg,[u[47]||(u[47]=E("h4",{class:"section-title"},"위치 정보",-1)),E("div",cg,[E("div",dg,[u[42]||(u[42]=E("span",{class:"info-label"},"현재 좌표",-1)),E("span",ug,Me(dn(ue.value.current_latitude,ue.value.current_longitude)),1)]),E("div",hg,[u[43]||(u[43]=E("span",{class:"info-label"},"속도",-1)),E("span",fg,Me(ue.value.speed||0)+" km/h",1)]),E("div",pg,[u[44]||(u[44]=E("span",{class:"info-label"},"방향",-1)),E("span",mg,Me(ue.value.heading||0)+"°",1)]),ue.value.last_node_id?(Ue(),Ie("div",gg,[u[45]||(u[45]=E("span",{class:"info-label"},"마지막 노드",-1)),E("span",_g,"#"+Me(ue.value.last_node_id),1)])):Ke("",!0),ue.value.current_link_id?(Ue(),Ie("div",vg,[u[46]||(u[46]=E("span",{class:"info-label"},"현재 링크",-1)),E("span",xg,"#"+Me(ue.value.current_link_id),1)])):Ke("",!0)])]),E("div",Mg,[u[56]||(u[56]=E("h4",{class:"section-title"},"객체 감지 정보",-1)),E("div",Sg,[E("div",yg,[u[49]||(u[49]=E("div",{class:"detection-icon pedestrian"},null,-1)),E("div",Eg,[u[48]||(u[48]=E("span",{class:"detection-label"},"보행자",-1)),E("span",Tg,Me(Ee.value.pedestrians||0),1)])]),E("div",bg,[u[51]||(u[51]=E("div",{class:"detection-icon vehicle"},null,-1)),E("div",Ag,[u[50]||(u[50]=E("span",{class:"detection-label"},"차량",-1)),E("span",wg,Me(Ee.value.vehicles||0),1)])]),E("div",Rg,[u[53]||(u[53]=E("div",{class:"detection-icon bicycle"},null,-1)),E("div",Cg,[u[52]||(u[52]=E("span",{class:"detection-label"},"자전거",-1)),E("span",Pg,Me(Ee.value.bicycles||0),1)])]),E("div",Dg,[u[55]||(u[55]=E("div",{class:"detection-icon signal"},null,-1)),E("div",Lg,[u[54]||(u[54]=E("span",{class:"detection-label"},"신호등",-1)),E("span",{class:Et(["detection-status",dt.value])},Me(Ne.value),3)])])])]),u[80]||(u[80]=Fa('<div class="info-section" data-v-a0018e7a><h4 class="section-title" data-v-a0018e7a>센서 데이터</h4><div class="sensor-grid" data-v-a0018e7a><div class="sensor-item" data-v-a0018e7a><span class="sensor-label" data-v-a0018e7a>LiDAR</span><div class="sensor-bar" data-v-a0018e7a><div class="sensor-fill" style="width:85%;" data-v-a0018e7a></div></div><span class="sensor-value" data-v-a0018e7a>정상</span></div><div class="sensor-item" data-v-a0018e7a><span class="sensor-label" data-v-a0018e7a>Camera</span><div class="sensor-bar" data-v-a0018e7a><div class="sensor-fill" style="width:92%;" data-v-a0018e7a></div></div><span class="sensor-value" data-v-a0018e7a>정상</span></div><div class="sensor-item" data-v-a0018e7a><span class="sensor-label" data-v-a0018e7a>GPS</span><div class="sensor-bar" data-v-a0018e7a><div class="sensor-fill" style="width:98%;" data-v-a0018e7a></div></div><span class="sensor-value" data-v-a0018e7a>정상</span></div><div class="sensor-item" data-v-a0018e7a><span class="sensor-label" data-v-a0018e7a>IMU</span><div class="sensor-bar" data-v-a0018e7a><div class="sensor-fill" style="width:90%;" data-v-a0018e7a></div></div><span class="sensor-value" data-v-a0018e7a>정상</span></div></div></div>',1)),E("div",Ig,[u[79]||(u[79]=E("h4",{class:"section-title"},"ODD 운영설계영역 상태",-1)),E("div",{class:Et(["odd-status-card",Ce.value.inODD?"status-safe":"status-warning"])},[E("div",Ug,[E("span",Ng,Me(Ce.value.inODD?"✅":"⚠️"),1),u[57]||(u[57]=E("span",{class:"odd-status-title"},"ODD 범위 상태",-1))]),E("div",Og,[E("span",Fg,Me(Ce.value.inODD?"ODD 내 운행 중":"ODD 이탈"),1),Ce.value.distanceToBoundary?(Ue(),Ie("span",Bg," 경계까지: "+Me(Ce.value.distanceToBoundary)+"m ",1)):Ke("",!0)])],2),E("div",Vg,[u[66]||(u[66]=E("h5",{class:"subsection-title"},"환경 조건",-1)),E("div",zg,[E("div",kg,[u[59]||(u[59]=E("span",{class:"condition-icon"},"🌤️",-1)),E("div",Hg,[u[58]||(u[58]=E("span",{class:"condition-label"},"날씨",-1)),E("span",Gg,Me(Ce.value.weather),1)])]),E("div",Wg,[u[61]||(u[61]=E("span",{class:"condition-icon"},"☀️",-1)),E("div",Xg,[u[60]||(u[60]=E("span",{class:"condition-label"},"조도",-1)),E("span",$g,Me(Ce.value.lighting),1)])]),E("div",qg,[u[63]||(u[63]=E("span",{class:"condition-icon"},"🛣️",-1)),E("div",jg,[u[62]||(u[62]=E("span",{class:"condition-label"},"도로",-1)),E("span",Yg,Me(Ce.value.roadCondition),1)])]),E("div",Kg,[u[65]||(u[65]=E("span",{class:"condition-icon"},"🌡️",-1)),E("div",Zg,[u[64]||(u[64]=E("span",{class:"condition-label"},"온도",-1)),E("span",Jg,Me(Ce.value.temperature)+"°C",1)])])])]),E("div",Qg,[u[74]||(u[74]=E("h5",{class:"subsection-title"},"시스템 한계 상황",-1)),E("div",e_,[E("div",{class:Et(["limit-item",{"limit-active":Ce.value.systemLimits.oddExceeded}])},u[67]||(u[67]=[E("span",{class:"limit-indicator"},null,-1),E("span",{class:"limit-text"},"ODD 범위 벗어남",-1)]),2),E("div",{class:Et(["limit-item",{"limit-active":Ce.value.systemLimits.sensorFailure}])},u[68]||(u[68]=[E("span",{class:"limit-indicator"},null,-1),E("span",{class:"limit-text"},"센서 장애",-1)]),2),E("div",{class:Et(["limit-item",{"limit-active":Ce.value.systemLimits.weatherLimit}])},u[69]||(u[69]=[E("span",{class:"limit-indicator"},null,-1),E("span",{class:"limit-text"},"날씨 제한",-1)]),2),E("div",{class:Et(["limit-item",{"limit-active":Ce.value.systemLimits.gpsLoss}])},u[70]||(u[70]=[E("span",{class:"limit-indicator"},null,-1),E("span",{class:"limit-text"},"GPS 신호 손실",-1)]),2)]),Ce.value.driverInterventionRequired?(Ue(),Ie("div",t_,[u[72]||(u[72]=E("div",{class:"intervention-icon"},"⚠️",-1)),E("div",n_,[u[71]||(u[71]=E("span",{class:"intervention-title"},"운전자 개입 필요",-1)),E("span",i_,Me(Ce.value.interventionReason),1)])])):Ke("",!0),E("div",{class:Et(["safety-stop-status",{active:Ce.value.safetyStopAvailable}])},[u[73]||(u[73]=E("span",{class:"safety-icon"},"🛑",-1)),E("span",s_,"안전 정차 "+Me(Ce.value.safetyStopAvailable?"가능":"불가능"),1)],2)]),Ce.value.approachingBoundary?(Ue(),Ie("div",r_,[u[78]||(u[78]=E("div",{class:"warning-header"},[E("span",{class:"warning-icon"},"⚠️"),E("span",{class:"warning-title"},"ODD 경계 접근 중")],-1)),E("div",a_,[E("div",o_,[u[75]||(u[75]=E("span",{class:"distance-label"},"경계까지 거리:",-1)),E("span",l_,Me(Ce.value.distanceToBoundary)+"m",1)]),E("div",c_,[u[76]||(u[76]=E("span",{class:"eta-label"},"예상 도달 시간:",-1)),E("span",d_,Me(Ce.value.etaToBoundary)+"초",1)]),E("div",u_,[u[77]||(u[77]=E("span",{class:"action-label"},"권장 조치",-1)),E("span",h_,Me(Ce.value.recommendedAction),1)])])])):Ke("",!0)])])],2)):Ke("",!0),u[83]||(u[83]=Fa('<div class="legend-box" data-v-a0018e7a><h4 class="font-semibold text-sm mb-2" data-v-a0018e7a>범례</h4><div class="legend-section mb-3" data-v-a0018e7a><div class="legend-title text-xs font-medium text-gray-700 mb-1" data-v-a0018e7a>경로 표시</div><div class="legend-item" data-v-a0018e7a><div class="legend-line" style="background:#0066CC;height:3px;" data-v-a0018e7a></div><span class="legend-label" data-v-a0018e7a>예정 경로 (미래)</span></div><div class="legend-item" data-v-a0018e7a><div class="legend-line" style="background:#FF0000;height:5px;" data-v-a0018e7a></div><span class="legend-label" data-v-a0018e7a>현재 주행 중인 구간</span></div><div class="legend-item" data-v-a0018e7a><div class="legend-line legend-dashed" style="background:#888888;height:3px;" data-v-a0018e7a></div><span class="legend-label" data-v-a0018e7a>이미 지나간 경로</span></div><div class="legend-item" data-v-a0018e7a><div class="legend-line legend-dashed" style="background:#FF6600;height:2px;" data-v-a0018e7a></div><span class="legend-label" data-v-a0018e7a>차량 이동 궤적</span></div></div><div class="legend-section mb-3" data-v-a0018e7a><div class="legend-title text-xs font-medium text-gray-700 mb-1" data-v-a0018e7a>차량 마커</div><div class="legend-item" data-v-a0018e7a><div class="legend-marker" style="background:#2563EB;" data-v-a0018e7a></div><span class="legend-label" data-v-a0018e7a>정기노선 차량</span></div><div class="legend-item" data-v-a0018e7a><div class="legend-marker" style="background:#059669;" data-v-a0018e7a></div><span class="legend-label" data-v-a0018e7a>수요응답 차량</span></div><div class="legend-item" data-v-a0018e7a><div class="legend-marker" style="background:#EA580C;" data-v-a0018e7a></div><span class="legend-label" data-v-a0018e7a>차고지 복귀 중</span></div></div><div class="legend-section" data-v-a0018e7a><div class="legend-title text-xs font-medium text-gray-700 mb-1" data-v-a0018e7a>정류장</div><div class="legend-item" data-v-a0018e7a><div class="legend-stop" style="background:#3B82F6;" data-v-a0018e7a></div><span class="legend-label" data-v-a0018e7a>예정 정류장</span></div><div class="legend-item" data-v-a0018e7a><div class="legend-stop" style="background:#9CA3AF;" data-v-a0018e7a></div><span class="legend-label" data-v-a0018e7a>통과한 정류장</span></div></div></div>',1)),b.value?(Ue(),Ie("div",f_,u[81]||(u[81]=[E("div",{class:"text-center"},[E("div",{class:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"}),E("p",{class:"text-gray-600"},"차량 위치 정보를 불러오는 중...")],-1)]))):Ke("",!0),C.value?(Ue(),Ie("div",p_,[u[82]||(u[82]=E("p",{class:"font-semibold"},"오류 발생",-1)),E("p",m_,Me(C.value),1)])):Ke("",!0)]),E("div",g_,[E("div",__,[u[114]||(u[114]=E("h3",{class:"text-lg font-semibold mb-4"},"운행 중 차량 목록",-1)),Ae.value.length===0?(Ue(),Ie("div",v_,u[84]||(u[84]=[E("p",null,"현재 운행 중인 차량이 없습니다.",-1)]))):(Ue(),Ie("div",x_,[(Ue(!0),Ie(Zs,null,Js(Ae.value,(v,I)=>{var z;return Ue(),Ie("div",{key:v.id,class:"vehicle-card p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors",onClick:V=>Te(v,I)},[E("div",S_,[E("div",y_,[E("div",{class:Et(["w-3 h-3 rounded-full",v.tripType==="SCHEDULED"?"bg-blue-500":v.tripType==="ON_DEMAND"?"bg-green-500":"bg-gray-500"])},null,2),E("span",E_,Me(v.vehicle_number),1)]),E("span",T_,Me(v.tripType==="SCHEDULED"?"정기노선":"수요응답"),1)]),E("div",b_,[E("div",A_,[u[85]||(u[85]=E("span",{class:"font-medium"},"차량 ID:",-1)),E("span",w_,"#"+Me(v.id),1)]),v.trip_id?(Ue(),Ie("div",R_,[E("span",C_,Me(v.tripType==="ON_DEMAND"?"Trip ID (수요응답):":"운행 ID:"),1),E("span",P_,"#"+Me(v.trip_id),1)])):Ke("",!0),v.tripType==="ON_DEMAND"?(Ue(),Ie("div",D_,[u[91]||(u[91]=E("div",{class:"font-medium text-green-800 mb-1"},"🔍 디버깅 정보",-1)),E("div",L_,[E("div",I_,[u[86]||(u[86]=E("span",null,"Trip ID:",-1)),E("span",U_,"#"+Me(v.trip_id),1)]),E("div",N_,[u[87]||(u[87]=E("span",null,"Vehicle ID:",-1)),E("span",O_,"#"+Me(v.id),1)]),Ye(v)?(Ue(),Ie("div",F_,[Ye(v).calls?(Ue(),Ie("div",B_,[u[88]||(u[88]=E("span",null,"할당된 Call 수:",-1)),E("span",V_,Me(((z=Ye(v).calls)==null?void 0:z.length)||0)+"개",1)])):Ke("",!0),Ye(v).calls&&Ye(v).calls.length>0?(Ue(),Ie("div",z_,[u[89]||(u[89]=E("span",{class:"text-green-600"},"Call IDs:",-1)),E("div",k_,[(Ue(!0),Ie(Zs,null,Js(Ye(v).calls,V=>(Ue(),Ie("span",{key:V.id,class:"px-1.5 py-0.5 bg-purple-100 text-purple-700 rounded text-xs font-mono"}," #"+Me(V.id),1))),128))])])):Ke("",!0),Ye(v).service_area_id?(Ue(),Ie("div",H_,[u[90]||(u[90]=E("span",null,"서비스 지역:",-1)),E("span",G_,"#"+Me(Ye(v).service_area_id),1)])):Ke("",!0)])):Ke("",!0)])])):Ke("",!0),E("div",W_,[u[92]||(u[92]=E("span",null,"상태:",-1)),E("span",{class:Et(Ii(v.tripStatus))},[Nl(Me(wn(v.tripStatus))+" ",1),v.tripStatus==="RETURNING"?(Ue(),Ie("span",X_," 🏠 ")):Ke("",!0)],2)]),v.tripStatus==="RETURNING"?(Ue(),Ie("div",$_,u[93]||(u[93]=[E("span",{class:"text-orange-700"},"12번 정류장 → 1번 정류장 (차고지)",-1)]))):Ke("",!0),E("div",q_,[u[94]||(u[94]=E("span",null,"승객:",-1)),E("span",{class:Et(v.current_occupancy>0?"text-orange-600 font-medium":"")},Me(v.current_occupancy||0)+"/"+Me(v.capacity||0)+"명 ",3)]),E("div",j_,[u[95]||(u[95]=E("div",{class:"text-xs text-gray-500 mb-2"},"운행 제어",-1)),E("div",Y_,[v.tripStatus==="IN_PROGRESS"?(Ue(),Ie("button",{key:0,onClick:V=>qs(v),class:"flex-1 px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 disabled:opacity-50",disabled:b.value}," 운행중단 ",8,K_)):Ke("",!0),v.tripStatus==="RETURNING"?(Ue(),Ie("button",{key:1,onClick:V=>js(v),class:"flex-1 px-2 py-1 bg-green-500 text-white text-xs rounded hover:bg-green-600 disabled:opacity-50",disabled:b.value}," 복귀완료 ",8,Z_)):Ke("",!0)])]),v.tripType==="SCHEDULED"&&Ye(v)?(Ue(),Ie("div",J_,[u[101]||(u[101]=E("div",{class:"text-xs text-gray-500 mb-1"},"운행 정보",-1)),Ye(v).start_datetime||Ye(v).start_time?(Ue(),Ie("div",Q_,[E("div",ev,[u[96]||(u[96]=E("span",{class:"text-blue-700"},"출발:",-1)),E("span",tv,Me(si(Ye(v).start_datetime||Ye(v).start_time)),1)]),E("div",nv,[u[97]||(u[97]=E("span",{class:"text-blue-700"},"도착:",-1)),E("span",iv,Me(si(Ye(v).end_datetime||Ye(v).end_time)),1)])])):Ke("",!0),Ye(v).start_time&&!Ye(v).end_time?(Ue(),Ie("div",sv,[u[98]||(u[98]=E("span",null,"운행 경과:",-1)),E("span",rv,Me(as(Ye(v).start_time)),1)])):Ke("",!0),Ye(v).route_id?(Ue(),Ie("div",av,[u[99]||(u[99]=E("span",null,"노선 ID:",-1)),E("span",ov,"#"+Me(Ye(v).route_id),1)])):Ke("",!0),Ye(v).driver_id?(Ue(),Ie("div",lv,[u[100]||(u[100]=E("span",null,"운전자:",-1)),E("span",cv,"#"+Me(Ye(v).driver_id),1)])):Ke("",!0)])):Ke("",!0),v.tripType==="ON_DEMAND"&&Ye(v)?(Ue(),Ie("div",dv,[u[109]||(u[109]=E("div",{class:"text-xs text-gray-500 mb-1"},"호출 정보",-1)),Ye(v).calls&&Ye(v).calls.length>0?(Ue(),Ie("div",uv,[E("div",hv,[u[102]||(u[102]=E("span",null,"할당 호출:",-1)),E("span",fv,Me(Ye(v).calls.length)+"개",1)]),(Ue(!0),Ie(Zs,null,Js(Ye(v).calls.slice(0,3),(V,W)=>(Ue(),Ie("div",{key:V.id,class:"bg-green-50 p-2 rounded text-xs"},[E("div",pv,"Call #"+Me(V.id),1),E("div",mv,[E("div",gv,[u[104]||(u[104]=E("span",{class:"text-green-600"},"🔵",-1)),E("div",_v,[u[103]||(u[103]=E("span",{class:"text-xs"},"픽업:",-1)),E("div",{class:"text-xs truncate",title:zn(V)},Me(zn(V)),9,vv)])]),E("div",xv,[u[106]||(u[106]=E("span",{class:"text-red-600"},"🔴",-1)),E("div",Mv,[u[105]||(u[105]=E("span",{class:"text-xs"},"드롭:",-1)),E("div",{class:"text-xs truncate",title:Ui(V)},Me(Ui(V)),9,Sv)])]),V.requested_pickup_time?(Ue(),Ie("div",yv," 요청시간: "+Me(si(V.requested_pickup_time)),1)):Ke("",!0)])]))),128)),Ye(v).calls.length>3?(Ue(),Ie("div",Ev," ... 외 "+Me(Ye(v).calls.length-3)+"개 호출 ",1)):Ke("",!0)])):Ke("",!0),Ye(v).service_area_id?(Ue(),Ie("div",Tv,[u[107]||(u[107]=E("span",null,"서비스 지역:",-1)),E("span",bv,"#"+Me(Ye(v).service_area_id),1)])):Ke("",!0),Ye(v).driver_id?(Ue(),Ie("div",Av,[u[108]||(u[108]=E("span",null,"운전자:",-1)),E("span",wv,"#"+Me(Ye(v).driver_id),1)])):Ke("",!0)])):Ke("",!0),E("div",Rv,[u[113]||(u[113]=E("div",{class:"text-xs text-gray-500 mb-1"},"위치 정보",-1)),E("div",Cv,[u[110]||(u[110]=E("span",null,"좌표:",-1)),E("span",Pv,Me(dn(v.current_latitude,v.current_longitude)),1)]),v.last_node_id?(Ue(),Ie("div",Dv,[u[111]||(u[111]=E("span",null,"마지막 노드:",-1)),E("span",Lv,"#"+Me(v.last_node_id),1)])):Ke("",!0),v.current_link_id?(Ue(),Ie("div",Iv,[u[112]||(u[112]=E("span",null,"현재 링크:",-1)),E("span",Uv,"#"+Me(v.current_link_id),1)])):Ke("",!0)])])],8,M_)}),128))]))])])])]))}}),$v=Ko(Nv,[["__scopeId","data-v-a0018e7a"]]);export{$v as default};
