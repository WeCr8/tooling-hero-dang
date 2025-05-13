(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function _u(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const xe={},Yr=[],cn=()=>{},ry=()=>!1,oa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),yu=t=>t.startsWith("onUpdate:"),It=Object.assign,vu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},iy=Object.prototype.hasOwnProperty,Se=(t,e)=>iy.call(t,e),ue=Array.isArray,Jr=t=>xs(t)==="[object Map]",bi=t=>xs(t)==="[object Set]",Lh=t=>xs(t)==="[object Date]",ge=t=>typeof t=="function",Ge=t=>typeof t=="string",tn=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",Yf=t=>(Ve(t)||ge(t))&&ge(t.then)&&ge(t.catch),Jf=Object.prototype.toString,xs=t=>Jf.call(t),sy=t=>xs(t).slice(8,-1),Zf=t=>xs(t)==="[object Object]",Tu=t=>Ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Zi=_u(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),aa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},oy=/-(\w)/g,Gt=aa(t=>t.replace(oy,(e,n)=>n?n.toUpperCase():"")),ay=/\B([A-Z])/g,Or=aa(t=>t.replace(ay,"-$1").toLowerCase()),la=aa(t=>t.charAt(0).toUpperCase()+t.slice(1)),ol=aa(t=>t?`on${la(t)}`:""),tr=(t,e)=>!Object.is(t,e),bo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ep=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Oo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let kh;const ua=()=>kh||(kh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Eu(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Ge(r)?hy(r):Eu(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(Ge(t)||Ve(t))return t}const ly=/;(?![^(]*\))/g,uy=/:([^]+)/,cy=/\/\*[^]*?\*\//g;function hy(t){const e={};return t.replace(cy,"").split(ly).forEach(n=>{if(n){const r=n.split(uy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Cr(t){let e="";if(Ge(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const r=Cr(t[n]);r&&(e+=r+" ")}else if(Ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const dy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fy=_u(dy);function tp(t){return!!t||t===""}function py(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ns(t[r],e[r]);return n}function Ns(t,e){if(t===e)return!0;let n=Lh(t),r=Lh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=tn(t),r=tn(e),n||r)return t===e;if(n=ue(t),r=ue(e),n||r)return n&&r?py(t,e):!1;if(n=Ve(t),r=Ve(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in t){const l=t.hasOwnProperty(o),u=e.hasOwnProperty(o);if(l&&!u||!l&&u||!Ns(t[o],e[o]))return!1}}return String(t)===String(e)}function bu(t,e){return t.findIndex(n=>Ns(n,e))}const np=t=>!!(t&&t.__v_isRef===!0),Le=t=>Ge(t)?t:t==null?"":ue(t)||Ve(t)&&(t.toString===Jf||!ge(t.toString))?np(t)?Le(t.value):JSON.stringify(t,rp,2):String(t),rp=(t,e)=>np(e)?rp(t,e.value):Jr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],s)=>(n[al(r,s)+" =>"]=i,n),{})}:bi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>al(n))}:tn(e)?al(e):Ve(e)&&!ue(e)&&!Zf(e)?String(e):e,al=(t,e="")=>{var n;return tn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ot;class gy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ot,!e&&Ot&&(this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ot;try{return Ot=this,e()}finally{Ot=n}}}on(){Ot=this}off(){Ot=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function my(){return Ot}let Oe;const ll=new WeakSet;class ip{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ot&&Ot.active&&Ot.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ll.has(this)&&(ll.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||op(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Dh(this),ap(this);const e=Oe,n=Jt;Oe=this,Jt=!0;try{return this.fn()}finally{lp(this),Oe=e,Jt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Au(e);this.deps=this.depsTail=void 0,Dh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ll.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Sl(this)&&this.run()}get dirty(){return Sl(this)}}let sp=0,es,ts;function op(t,e=!1){if(t.flags|=8,e){t.next=ts,ts=t;return}t.next=es,es=t}function Iu(){sp++}function wu(){if(--sp>0)return;if(ts){let e=ts;for(ts=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;es;){let e=es;for(es=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function ap(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function lp(t){let e,n=t.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),Au(r),_y(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}t.deps=e,t.depsTail=n}function Sl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(up(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function up(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ps))return;t.globalVersion=ps;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Sl(t)){t.flags&=-3;return}const n=Oe,r=Jt;Oe=t,Jt=!0;try{ap(t);const i=t.fn(t._value);(e.version===0||tr(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{Oe=n,Jt=r,lp(t),t.flags&=-3}}function Au(t,e=!1){const{dep:n,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Au(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function _y(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Jt=!0;const cp=[];function hr(){cp.push(Jt),Jt=!1}function dr(){const t=cp.pop();Jt=t===void 0?!0:t}function Dh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Oe;Oe=void 0;try{e()}finally{Oe=n}}}let ps=0;class yy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ru{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Oe||!Jt||Oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Oe)n=this.activeLink=new yy(Oe,this),Oe.deps?(n.prevDep=Oe.depsTail,Oe.depsTail.nextDep=n,Oe.depsTail=n):Oe.deps=Oe.depsTail=n,hp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Oe.depsTail,n.nextDep=void 0,Oe.depsTail.nextDep=n,Oe.depsTail=n,Oe.deps===n&&(Oe.deps=r)}return n}trigger(e){this.version++,ps++,this.notify(e)}notify(e){Iu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{wu()}}}function hp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)hp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ll=new WeakMap,Rr=Symbol(""),kl=Symbol(""),gs=Symbol("");function mt(t,e,n){if(Jt&&Oe){let r=Ll.get(t);r||Ll.set(t,r=new Map);let i=r.get(n);i||(r.set(n,i=new Ru),i.map=r,i.key=n),i.track()}}function bn(t,e,n,r,i,s){const o=Ll.get(t);if(!o){ps++;return}const l=u=>{u&&u.trigger()};if(Iu(),e==="clear")o.forEach(l);else{const u=ue(t),c=u&&Tu(n);if(u&&n==="length"){const d=Number(r);o.forEach((p,g)=>{(g==="length"||g===gs||!tn(g)&&g>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),c&&l(o.get(gs)),e){case"add":u?c&&l(o.get("length")):(l(o.get(Rr)),Jr(t)&&l(o.get(kl)));break;case"delete":u||(l(o.get(Rr)),Jr(t)&&l(o.get(kl)));break;case"set":Jr(t)&&l(o.get(Rr));break}}wu()}function Gr(t){const e=Ce(t);return e===t?e:(mt(e,"iterate",gs),$t(t)?e:e.map(_t))}function ca(t){return mt(t=Ce(t),"iterate",gs),t}const vy={__proto__:null,[Symbol.iterator](){return ul(this,Symbol.iterator,_t)},concat(...t){return Gr(this).concat(...t.map(e=>ue(e)?Gr(e):e))},entries(){return ul(this,"entries",t=>(t[1]=_t(t[1]),t))},every(t,e){return vn(this,"every",t,e,void 0,arguments)},filter(t,e){return vn(this,"filter",t,e,n=>n.map(_t),arguments)},find(t,e){return vn(this,"find",t,e,_t,arguments)},findIndex(t,e){return vn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return vn(this,"findLast",t,e,_t,arguments)},findLastIndex(t,e){return vn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return vn(this,"forEach",t,e,void 0,arguments)},includes(...t){return cl(this,"includes",t)},indexOf(...t){return cl(this,"indexOf",t)},join(t){return Gr(this).join(t)},lastIndexOf(...t){return cl(this,"lastIndexOf",t)},map(t,e){return vn(this,"map",t,e,void 0,arguments)},pop(){return Bi(this,"pop")},push(...t){return Bi(this,"push",t)},reduce(t,...e){return xh(this,"reduce",t,e)},reduceRight(t,...e){return xh(this,"reduceRight",t,e)},shift(){return Bi(this,"shift")},some(t,e){return vn(this,"some",t,e,void 0,arguments)},splice(...t){return Bi(this,"splice",t)},toReversed(){return Gr(this).toReversed()},toSorted(t){return Gr(this).toSorted(t)},toSpliced(...t){return Gr(this).toSpliced(...t)},unshift(...t){return Bi(this,"unshift",t)},values(){return ul(this,"values",_t)}};function ul(t,e,n){const r=ca(t),i=r[e]();return r!==t&&!$t(t)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.value&&(s.value=n(s.value)),s}),i}const Ty=Array.prototype;function vn(t,e,n,r,i,s){const o=ca(t),l=o!==t&&!$t(t),u=o[e];if(u!==Ty[e]){const p=u.apply(t,s);return l?_t(p):p}let c=n;o!==t&&(l?c=function(p,g){return n.call(this,_t(p),g,t)}:n.length>2&&(c=function(p,g){return n.call(this,p,g,t)}));const d=u.call(o,c,r);return l&&i?i(d):d}function xh(t,e,n,r){const i=ca(t);let s=n;return i!==t&&($t(t)?n.length>3&&(s=function(o,l,u){return n.call(this,o,l,u,t)}):s=function(o,l,u){return n.call(this,o,_t(l),u,t)}),i[e](s,...r)}function cl(t,e,n){const r=Ce(t);mt(r,"iterate",gs);const i=r[e](...n);return(i===-1||i===!1)&&Su(n[0])?(n[0]=Ce(n[0]),r[e](...n)):i}function Bi(t,e,n=[]){hr(),Iu();const r=Ce(t)[e].apply(t,n);return wu(),dr(),r}const Ey=_u("__proto__,__v_isRef,__isVue"),dp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(tn));function by(t){tn(t)||(t=String(t));const e=Ce(this);return mt(e,"has",t),e.hasOwnProperty(t)}class fp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?Dy:_p:s?mp:gp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ue(e);if(!i){let u;if(o&&(u=vy[n]))return u;if(n==="hasOwnProperty")return by}const l=Reflect.get(e,n,Tt(e)?e:r);return(tn(n)?dp.has(n):Ey(n))||(i||mt(e,"get",n),s)?l:Tt(l)?o&&Tu(n)?l:l.value:Ve(l)?i?vp(l):ha(l):l}}class pp extends fp{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];if(!this._isShallow){const u=Sr(s);if(!$t(r)&&!Sr(r)&&(s=Ce(s),r=Ce(r)),!ue(e)&&Tt(s)&&!Tt(r))return u?!1:(s.value=r,!0)}const o=ue(e)&&Tu(n)?Number(n)<e.length:Se(e,n),l=Reflect.set(e,n,r,Tt(e)?e:i);return e===Ce(i)&&(o?tr(r,s)&&bn(e,"set",n,r):bn(e,"add",n,r)),l}deleteProperty(e,n){const r=Se(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&bn(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!tn(n)||!dp.has(n))&&mt(e,"has",n),r}ownKeys(e){return mt(e,"iterate",ue(e)?"length":Rr),Reflect.ownKeys(e)}}class Iy extends fp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const wy=new pp,Ay=new Iy,Ry=new pp(!0);const Dl=t=>t,po=t=>Reflect.getPrototypeOf(t);function Py(t,e,n){return function(...r){const i=this.__v_raw,s=Ce(i),o=Jr(s),l=t==="entries"||t===Symbol.iterator&&o,u=t==="keys"&&o,c=i[t](...r),d=n?Dl:e?xl:_t;return!e&&mt(s,"iterate",u?kl:Rr),{next(){const{value:p,done:g}=c.next();return g?{value:p,done:g}:{value:l?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function go(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Cy(t,e){const n={get(i){const s=this.__v_raw,o=Ce(s),l=Ce(i);t||(tr(i,l)&&mt(o,"get",i),mt(o,"get",l));const{has:u}=po(o),c=e?Dl:t?xl:_t;if(u.call(o,i))return c(s.get(i));if(u.call(o,l))return c(s.get(l));s!==o&&s.get(i)},get size(){const i=this.__v_raw;return!t&&mt(Ce(i),"iterate",Rr),Reflect.get(i,"size",i)},has(i){const s=this.__v_raw,o=Ce(s),l=Ce(i);return t||(tr(i,l)&&mt(o,"has",i),mt(o,"has",l)),i===l?s.has(i):s.has(i)||s.has(l)},forEach(i,s){const o=this,l=o.__v_raw,u=Ce(l),c=e?Dl:t?xl:_t;return!t&&mt(u,"iterate",Rr),l.forEach((d,p)=>i.call(s,c(d),c(p),o))}};return It(n,t?{add:go("add"),set:go("set"),delete:go("delete"),clear:go("clear")}:{add(i){!e&&!$t(i)&&!Sr(i)&&(i=Ce(i));const s=Ce(this);return po(s).has.call(s,i)||(s.add(i),bn(s,"add",i,i)),this},set(i,s){!e&&!$t(s)&&!Sr(s)&&(s=Ce(s));const o=Ce(this),{has:l,get:u}=po(o);let c=l.call(o,i);c||(i=Ce(i),c=l.call(o,i));const d=u.call(o,i);return o.set(i,s),c?tr(s,d)&&bn(o,"set",i,s):bn(o,"add",i,s),this},delete(i){const s=Ce(this),{has:o,get:l}=po(s);let u=o.call(s,i);u||(i=Ce(i),u=o.call(s,i)),l&&l.call(s,i);const c=s.delete(i);return u&&bn(s,"delete",i,void 0),c},clear(){const i=Ce(this),s=i.size!==0,o=i.clear();return s&&bn(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Py(i,t,e)}),n}function Pu(t,e){const n=Cy(t,e);return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Se(n,i)&&i in r?n:r,i,s)}const Sy={get:Pu(!1,!1)},Ly={get:Pu(!1,!0)},ky={get:Pu(!0,!1)};const gp=new WeakMap,mp=new WeakMap,_p=new WeakMap,Dy=new WeakMap;function xy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ny(t){return t.__v_skip||!Object.isExtensible(t)?0:xy(sy(t))}function ha(t){return Sr(t)?t:Cu(t,!1,wy,Sy,gp)}function yp(t){return Cu(t,!1,Ry,Ly,mp)}function vp(t){return Cu(t,!0,Ay,ky,_p)}function Cu(t,e,n,r,i){if(!Ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=Ny(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return i.set(t,l),l}function Zr(t){return Sr(t)?Zr(t.__v_raw):!!(t&&t.__v_isReactive)}function Sr(t){return!!(t&&t.__v_isReadonly)}function $t(t){return!!(t&&t.__v_isShallow)}function Su(t){return t?!!t.__v_raw:!1}function Ce(t){const e=t&&t.__v_raw;return e?Ce(e):t}function Oy(t){return!Se(t,"__v_skip")&&Object.isExtensible(t)&&ep(t,"__v_skip",!0),t}const _t=t=>Ve(t)?ha(t):t,xl=t=>Ve(t)?vp(t):t;function Tt(t){return t?t.__v_isRef===!0:!1}function ie(t){return Tp(t,!1)}function Vy(t){return Tp(t,!0)}function Tp(t,e){return Tt(t)?t:new My(t,e)}class My{constructor(e,n){this.dep=new Ru,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ce(e),this._value=n?e:_t(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||$t(e)||Sr(e);e=r?e:Ce(e),tr(e,n)&&(this._rawValue=e,this._value=r?e:_t(e),this.dep.trigger())}}function ei(t){return Tt(t)?t.value:t}const Fy={get:(t,e,n)=>e==="__v_raw"?t:ei(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Tt(i)&&!Tt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Ep(t){return Zr(t)?t:new Proxy(t,Fy)}class Uy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ru(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ps-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return op(this,!0),!0}get value(){const e=this.dep.track();return up(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Hy(t,e,n=!1){let r,i;return ge(t)?r=t:(r=t.get,i=t.set),new Uy(r,i,n)}const mo={},Vo=new WeakMap;let br;function jy(t,e=!1,n=br){if(n){let r=Vo.get(n);r||Vo.set(n,r=[]),r.push(t)}}function By(t,e,n=xe){const{immediate:r,deep:i,once:s,scheduler:o,augmentJob:l,call:u}=n,c=F=>i?F:$t(F)||i===!1||i===0?In(F,1):In(F);let d,p,g,_,L=!1,D=!1;if(Tt(t)?(p=()=>t.value,L=$t(t)):Zr(t)?(p=()=>c(t),L=!0):ue(t)?(D=!0,L=t.some(F=>Zr(F)||$t(F)),p=()=>t.map(F=>{if(Tt(F))return F.value;if(Zr(F))return c(F);if(ge(F))return u?u(F,2):F()})):ge(t)?e?p=u?()=>u(t,2):t:p=()=>{if(g){hr();try{g()}finally{dr()}}const F=br;br=d;try{return u?u(t,3,[_]):t(_)}finally{br=F}}:p=cn,e&&i){const F=p,ce=i===!0?1/0:i;p=()=>In(F(),ce)}const k=my(),U=()=>{d.stop(),k&&k.active&&vu(k.effects,d)};if(s&&e){const F=e;e=(...ce)=>{F(...ce),U()}}let N=D?new Array(t.length).fill(mo):mo;const O=F=>{if(!(!(d.flags&1)||!d.dirty&&!F))if(e){const ce=d.run();if(i||L||(D?ce.some((me,I)=>tr(me,N[I])):tr(ce,N))){g&&g();const me=br;br=d;try{const I=[ce,N===mo?void 0:D&&N[0]===mo?[]:N,_];u?u(e,3,I):e(...I),N=ce}finally{br=me}}}else d.run()};return l&&l(O),d=new ip(p),d.scheduler=o?()=>o(O,!1):O,_=F=>jy(F,!1,d),g=d.onStop=()=>{const F=Vo.get(d);if(F){if(u)u(F,4);else for(const ce of F)ce();Vo.delete(d)}},e?r?O(!0):N=d.run():o?o(O.bind(null,!0),!0):d.run(),U.pause=d.pause.bind(d),U.resume=d.resume.bind(d),U.stop=U,U}function In(t,e=1/0,n){if(e<=0||!Ve(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Tt(t))In(t.value,e,n);else if(ue(t))for(let r=0;r<t.length;r++)In(t[r],e,n);else if(bi(t)||Jr(t))t.forEach(r=>{In(r,e,n)});else if(Zf(t)){for(const r in t)In(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&In(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Os(t,e,n,r){try{return r?t(...r):t()}catch(i){da(i,e,n)}}function gn(t,e,n,r){if(ge(t)){const i=Os(t,e,n,r);return i&&Yf(i)&&i.catch(s=>{da(s,e,n)}),i}if(ue(t)){const i=[];for(let s=0;s<t.length;s++)i.push(gn(t[s],e,n,r));return i}}function da(t,e,n,r=!0){const i=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xe;if(e){let l=e.parent;const u=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,u,c)===!1)return}l=l.parent}if(s){hr(),Os(s,null,10,[t,u,c]),dr();return}}$y(t,n,i,r,o)}function $y(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}const Ct=[];let an=-1;const ti=[];let Wn=null,Kr=0;const bp=Promise.resolve();let Mo=null;function Lu(t){const e=Mo||bp;return t?e.then(this?t.bind(this):t):e}function qy(t){let e=an+1,n=Ct.length;for(;e<n;){const r=e+n>>>1,i=Ct[r],s=ms(i);s<t||s===t&&i.flags&2?e=r+1:n=r}return e}function ku(t){if(!(t.flags&1)){const e=ms(t),n=Ct[Ct.length-1];!n||!(t.flags&2)&&e>=ms(n)?Ct.push(t):Ct.splice(qy(e),0,t),t.flags|=1,Ip()}}function Ip(){Mo||(Mo=bp.then(Ap))}function Gy(t){ue(t)?ti.push(...t):Wn&&t.id===-1?Wn.splice(Kr+1,0,t):t.flags&1||(ti.push(t),t.flags|=1),Ip()}function Nh(t,e,n=an+1){for(;n<Ct.length;n++){const r=Ct[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ct.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function wp(t){if(ti.length){const e=[...new Set(ti)].sort((n,r)=>ms(n)-ms(r));if(ti.length=0,Wn){Wn.push(...e);return}for(Wn=e,Kr=0;Kr<Wn.length;Kr++){const n=Wn[Kr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Wn=null,Kr=0}}const ms=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ap(t){try{for(an=0;an<Ct.length;an++){const e=Ct[an];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Os(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;an<Ct.length;an++){const e=Ct[an];e&&(e.flags&=-2)}an=-1,Ct.length=0,wp(),Mo=null,(Ct.length||ti.length)&&Ap()}}let ot=null,Rp=null;function Fo(t){const e=ot;return ot=t,Rp=t&&t.type.__scopeId||null,e}function hn(t,e=ot,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&qh(-1);const s=Fo(e);let o;try{o=t(...i)}finally{Fo(s),r._d&&qh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ze(t,e){if(ot===null)return t;const n=_a(ot),r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[s,o,l,u=xe]=e[i];s&&(ge(s)&&(s={mounted:s,updated:s}),s.deep&&In(o),r.push({dir:s,instance:n,value:o,oldValue:void 0,arg:l,modifiers:u}))}return t}function Tr(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];s&&(l.oldValue=s[o].value);let u=l.dir[r];u&&(hr(),gn(u,n,8,[t.el,l,t,e]),dr())}}const Ky=Symbol("_vte"),Wy=t=>t.__isTeleport;function Du(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Du(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Pp(t,e){return ge(t)?It({name:t.name},e,{setup:t}):t}function Cp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Uo(t,e,n,r,i=!1){if(ue(t)){t.forEach((L,D)=>Uo(L,e&&(ue(e)?e[D]:e),n,r,i));return}if(ni(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Uo(t,e,n,r.component.subTree);return}const s=r.shapeFlag&4?_a(r.component):r.el,o=i?null:s,{i:l,r:u}=t,c=e&&e.r,d=l.refs===xe?l.refs={}:l.refs,p=l.setupState,g=Ce(p),_=p===xe?()=>!1:L=>Se(g,L);if(c!=null&&c!==u&&(Ge(c)?(d[c]=null,_(c)&&(p[c]=null)):Tt(c)&&(c.value=null)),ge(u))Os(u,l,12,[o,d]);else{const L=Ge(u),D=Tt(u);if(L||D){const k=()=>{if(t.f){const U=L?_(u)?p[u]:d[u]:u.value;i?ue(U)&&vu(U,s):ue(U)?U.includes(s)||U.push(s):L?(d[u]=[s],_(u)&&(p[u]=d[u])):(u.value=[s],t.k&&(d[t.k]=u.value))}else L?(d[u]=o,_(u)&&(p[u]=o)):D&&(u.value=o,t.k&&(d[t.k]=o))};o?(k.id=-1,Nt(k,n)):k()}}}ua().requestIdleCallback;ua().cancelIdleCallback;const ni=t=>!!t.type.__asyncLoader,Sp=t=>t.type.__isKeepAlive;function zy(t,e){Lp(t,"a",e)}function Xy(t,e){Lp(t,"da",e)}function Lp(t,e,n=vt){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(fa(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Sp(i.parent.vnode)&&Qy(r,e,n,i),i=i.parent}}function Qy(t,e,n,r){const i=fa(e,t,r,!0);pa(()=>{vu(r[e],i)},n)}function fa(t,e,n=vt,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{hr();const l=Vs(n),u=gn(e,n,t,o);return l(),dr(),u});return r?i.unshift(s):i.push(s),s}}const Mn=t=>(e,n=vt)=>{(!vs||t==="sp")&&fa(t,(...r)=>e(...r),n)},Yy=Mn("bm"),Vr=Mn("m"),Jy=Mn("bu"),Zy=Mn("u"),ev=Mn("bum"),pa=Mn("um"),tv=Mn("sp"),nv=Mn("rtg"),rv=Mn("rtc");function iv(t,e=vt){fa("ec",t,e)}const xu="components",sv="directives";function Mr(t,e){return Nu(xu,t,!0,e)||t}const kp=Symbol.for("v-ndc");function ov(t){return Ge(t)?Nu(xu,t,!1)||t:t||kp}function av(t){return Nu(sv,t)}function Nu(t,e,n=!0,r=!1){const i=ot||vt;if(i){const s=i.type;if(t===xu){const l=zv(s,!1);if(l&&(l===e||l===Gt(e)||l===la(Gt(e))))return s}const o=Oh(i[t]||s[t],e)||Oh(i.appContext[t],e);return!o&&r?s:o}}function Oh(t,e){return t&&(t[e]||t[Gt(e)]||t[la(Gt(e))])}function Ho(t,e,n,r){let i;const s=n,o=ue(t);if(o||Ge(t)){const l=o&&Zr(t);let u=!1;l&&(u=!$t(t),t=ca(t)),i=new Array(t.length);for(let c=0,d=t.length;c<d;c++)i[c]=e(u?_t(t[c]):t[c],c,void 0,s)}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,s)}else if(Ve(t))if(t[Symbol.iterator])i=Array.from(t,(l,u)=>e(l,u,void 0,s));else{const l=Object.keys(t);i=new Array(l.length);for(let u=0,c=l.length;u<c;u++){const d=l[u];i[u]=e(t[d],d,u,s)}}else i=[];return i}function Ou(t,e,n={},r,i){if(ot.ce||ot.parent&&ni(ot.parent)&&ot.parent.ce)return ne(),Bo(it,null,[Ne("slot",n,r)],64);let s=t[e];s&&s._c&&(s._d=!1),ne();const o=s&&Dp(s(n)),l=n.key||o&&o.key,u=Bo(it,{key:(l&&!tn(l)?l:`_${e}`)+""},o||[],o&&t._===1?64:-2);return!i&&u.scopeId&&(u.slotScopeIds=[u.scopeId+"-s"]),s&&s._c&&(s._d=!0),u}function Dp(t){return t.some(e=>ys(e)?!(e.type===or||e.type===it&&!Dp(e.children)):!0)?t:null}const Nl=t=>t?Zp(t)?_a(t):Nl(t.parent):null,ns=It(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Nl(t.parent),$root:t=>Nl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Np(t),$forceUpdate:t=>t.f||(t.f=()=>{ku(t.update)}),$nextTick:t=>t.n||(t.n=Lu.bind(t.proxy)),$watch:t=>Cv.bind(t)}),hl=(t,e)=>t!==xe&&!t.__isScriptSetup&&Se(t,e),lv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:l,appContext:u}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(hl(r,e))return o[e]=1,r[e];if(i!==xe&&Se(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Se(c,e))return o[e]=3,s[e];if(n!==xe&&Se(n,e))return o[e]=4,n[e];Ol&&(o[e]=0)}}const d=ns[e];let p,g;if(d)return e==="$attrs"&&mt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==xe&&Se(n,e))return o[e]=4,n[e];if(g=u.config.globalProperties,Se(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return hl(i,e)?(i[e]=n,!0):r!==xe&&Se(r,e)?(r[e]=n,!0):Se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let l;return!!n[o]||t!==xe&&Se(t,o)||hl(e,o)||(l=s[0])&&Se(l,o)||Se(r,o)||Se(ns,o)||Se(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Vh(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ol=!0;function uv(t){const e=Np(t),n=t.proxy,r=t.ctx;Ol=!1,e.beforeCreate&&Mh(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:l,provide:u,inject:c,created:d,beforeMount:p,mounted:g,beforeUpdate:_,updated:L,activated:D,deactivated:k,beforeDestroy:U,beforeUnmount:N,destroyed:O,unmounted:F,render:ce,renderTracked:me,renderTriggered:I,errorCaptured:y,serverPrefetch:E,expose:w,inheritAttrs:A,components:C,directives:b,filters:At}=e;if(c&&cv(c,r,null),o)for(const Ee in o){const ye=o[Ee];ge(ye)&&(r[Ee]=ye.bind(n))}if(i){const Ee=i.call(n,n);Ve(Ee)&&(t.data=ha(Ee))}if(Ol=!0,s)for(const Ee in s){const ye=s[Ee],Dt=ge(ye)?ye.bind(n,n):ge(ye.get)?ye.get.bind(n,n):cn,zt=!ge(ye)&&ge(ye.set)?ye.set.bind(n):cn,Ht=Je({get:Dt,set:zt});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>Ht.value,set:Ue=>Ht.value=Ue})}if(l)for(const Ee in l)xp(l[Ee],r,n,Ee);if(u){const Ee=ge(u)?u.call(n):u;Reflect.ownKeys(Ee).forEach(ye=>{ii(ye,Ee[ye])})}d&&Mh(d,t,"c");function Ke(Ee,ye){ue(ye)?ye.forEach(Dt=>Ee(Dt.bind(n))):ye&&Ee(ye.bind(n))}if(Ke(Yy,p),Ke(Vr,g),Ke(Jy,_),Ke(Zy,L),Ke(zy,D),Ke(Xy,k),Ke(iv,y),Ke(rv,me),Ke(nv,I),Ke(ev,N),Ke(pa,F),Ke(tv,E),ue(w))if(w.length){const Ee=t.exposed||(t.exposed={});w.forEach(ye=>{Object.defineProperty(Ee,ye,{get:()=>n[ye],set:Dt=>n[ye]=Dt})})}else t.exposed||(t.exposed={});ce&&t.render===cn&&(t.render=ce),A!=null&&(t.inheritAttrs=A),C&&(t.components=C),b&&(t.directives=b),E&&Cp(t)}function cv(t,e,n=cn){ue(t)&&(t=Vl(t));for(const r in t){const i=t[r];let s;Ve(i)?"default"in i?s=Et(i.from||r,i.default,!0):s=Et(i.from||r):s=Et(i),Tt(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function Mh(t,e,n){gn(ue(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function xp(t,e,n,r){let i=r.includes(".")?zp(n,r):()=>n[r];if(Ge(t)){const s=e[t];ge(s)&&rs(i,s)}else if(ge(t))rs(i,t.bind(n));else if(Ve(t))if(ue(t))t.forEach(s=>xp(s,e,n,r));else{const s=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(s)&&rs(i,s,t)}}function Np(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,l=s.get(e);let u;return l?u=l:!i.length&&!n&&!r?u=e:(u={},i.length&&i.forEach(c=>jo(u,c,o,!0)),jo(u,e,o)),Ve(e)&&s.set(e,u),u}function jo(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&jo(t,s,n,!0),i&&i.forEach(o=>jo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=hv[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const hv={data:Fh,props:Uh,emits:Uh,methods:Ki,computed:Ki,beforeCreate:Pt,created:Pt,beforeMount:Pt,mounted:Pt,beforeUpdate:Pt,updated:Pt,beforeDestroy:Pt,beforeUnmount:Pt,destroyed:Pt,unmounted:Pt,activated:Pt,deactivated:Pt,errorCaptured:Pt,serverPrefetch:Pt,components:Ki,directives:Ki,watch:fv,provide:Fh,inject:dv};function Fh(t,e){return e?t?function(){return It(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function dv(t,e){return Ki(Vl(t),Vl(e))}function Vl(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ki(t,e){return t?It(Object.create(null),t,e):e}function Uh(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:It(Object.create(null),Vh(t),Vh(e??{})):e}function fv(t,e){if(!t)return e;if(!e)return t;const n=It(Object.create(null),t);for(const r in e)n[r]=Pt(t[r],e[r]);return n}function Op(){return{app:null,config:{isNativeTag:ry,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pv=0;function gv(t,e){return function(r,i=null){ge(r)||(r=It({},r)),i!=null&&!Ve(i)&&(i=null);const s=Op(),o=new WeakSet,l=[];let u=!1;const c=s.app={_uid:pv++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Qv,get config(){return s.config},set config(d){},use(d,...p){return o.has(d)||(d&&ge(d.install)?(o.add(d),d.install(c,...p)):ge(d)&&(o.add(d),d(c,...p))),c},mixin(d){return s.mixins.includes(d)||s.mixins.push(d),c},component(d,p){return p?(s.components[d]=p,c):s.components[d]},directive(d,p){return p?(s.directives[d]=p,c):s.directives[d]},mount(d,p,g){if(!u){const _=c._ceVNode||Ne(r,i);return _.appContext=s,g===!0?g="svg":g===!1&&(g=void 0),t(_,d,g),u=!0,c._container=d,d.__vue_app__=c,_a(_.component)}},onUnmount(d){l.push(d)},unmount(){u&&(gn(l,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(d,p){return s.provides[d]=p,c},runWithContext(d){const p=ri;ri=c;try{return d()}finally{ri=p}}};return c}}let ri=null;function ii(t,e){if(vt){let n=vt.provides;const r=vt.parent&&vt.parent.provides;r===n&&(n=vt.provides=Object.create(r)),n[t]=e}}function Et(t,e,n=!1){const r=vt||ot;if(r||ri){const i=ri?ri._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ge(e)?e.call(r&&r.proxy):e}}const Vp={},Mp=()=>Object.create(Vp),Fp=t=>Object.getPrototypeOf(t)===Vp;function mv(t,e,n,r=!1){const i={},s=Mp();t.propsDefaults=Object.create(null),Up(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:yp(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function _v(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,l=Ce(i),[u]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(ga(t.emitsOptions,g))continue;const _=e[g];if(u)if(Se(s,g))_!==s[g]&&(s[g]=_,c=!0);else{const L=Gt(g);i[L]=Ml(u,l,L,_,t,!1)}else _!==s[g]&&(s[g]=_,c=!0)}}}else{Up(t,e,i,s)&&(c=!0);let d;for(const p in l)(!e||!Se(e,p)&&((d=Or(p))===p||!Se(e,d)))&&(u?n&&(n[p]!==void 0||n[d]!==void 0)&&(i[p]=Ml(u,l,p,void 0,t,!0)):delete i[p]);if(s!==l)for(const p in s)(!e||!Se(e,p))&&(delete s[p],c=!0)}c&&bn(t.attrs,"set","")}function Up(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,l;if(e)for(let u in e){if(Zi(u))continue;const c=e[u];let d;i&&Se(i,d=Gt(u))?!s||!s.includes(d)?n[d]=c:(l||(l={}))[d]=c:ga(t.emitsOptions,u)||(!(u in r)||c!==r[u])&&(r[u]=c,o=!0)}if(s){const u=Ce(n),c=l||xe;for(let d=0;d<s.length;d++){const p=s[d];n[p]=Ml(i,u,p,c[p],t,!Se(c,p))}}return o}function Ml(t,e,n,r,i,s){const o=t[n];if(o!=null){const l=Se(o,"default");if(l&&r===void 0){const u=o.default;if(o.type!==Function&&!o.skipFactory&&ge(u)){const{propsDefaults:c}=i;if(n in c)r=c[n];else{const d=Vs(i);r=c[n]=u.call(null,e),d()}}else r=u;i.ce&&i.ce._setProp(n,r)}o[0]&&(s&&!l?r=!1:o[1]&&(r===""||r===Or(n))&&(r=!0))}return r}const yv=new WeakMap;function Hp(t,e,n=!1){const r=n?yv:e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},l=[];let u=!1;if(!ge(t)){const d=p=>{u=!0;const[g,_]=Hp(p,e,!0);It(o,g),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!s&&!u)return Ve(t)&&r.set(t,Yr),Yr;if(ue(s))for(let d=0;d<s.length;d++){const p=Gt(s[d]);Hh(p)&&(o[p]=xe)}else if(s)for(const d in s){const p=Gt(d);if(Hh(p)){const g=s[d],_=o[p]=ue(g)||ge(g)?{type:g}:It({},g),L=_.type;let D=!1,k=!0;if(ue(L))for(let U=0;U<L.length;++U){const N=L[U],O=ge(N)&&N.name;if(O==="Boolean"){D=!0;break}else O==="String"&&(k=!1)}else D=ge(L)&&L.name==="Boolean";_[0]=D,_[1]=k,(D||Se(_,"default"))&&l.push(p)}}const c=[o,l];return Ve(t)&&r.set(t,c),c}function Hh(t){return t[0]!=="$"&&!Zi(t)}const jp=t=>t[0]==="_"||t==="$stable",Vu=t=>ue(t)?t.map(ln):[ln(t)],vv=(t,e,n)=>{if(e._n)return e;const r=hn((...i)=>Vu(e(...i)),n);return r._c=!1,r},Bp=(t,e,n)=>{const r=t._ctx;for(const i in t){if(jp(i))continue;const s=t[i];if(ge(s))e[i]=vv(i,s,r);else if(s!=null){const o=Vu(s);e[i]=()=>o}}},$p=(t,e)=>{const n=Vu(e);t.slots.default=()=>n},qp=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Tv=(t,e,n)=>{const r=t.slots=Mp();if(t.vnode.shapeFlag&32){const i=e._;i?(qp(r,e,n),n&&ep(r,"_",i,!0)):Bp(e,r)}else e&&$p(t,e)},Ev=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=xe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?s=!1:qp(i,e,n):(s=!e.$stable,Bp(e,i)),o=e}else e&&($p(t,e),o={default:1});if(s)for(const l in i)!jp(l)&&o[l]==null&&delete i[l]},Nt=Ov;function bv(t){return Iv(t)}function Iv(t,e){const n=ua();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:l,createComment:u,setText:c,setElementText:d,parentNode:p,nextSibling:g,setScopeId:_=cn,insertStaticContent:L}=t,D=(v,T,P,M=null,B=null,H=null,z=void 0,K=null,G=!!T.dynamicChildren)=>{if(v===T)return;v&&!$i(v,T)&&(M=V(v),Ue(v,B,H,!0),v=null),T.patchFlag===-2&&(G=!1,T.dynamicChildren=null);const{type:q,ref:se,shapeFlag:Q}=T;switch(q){case ma:k(v,T,P,M);break;case or:U(v,T,P,M);break;case Io:v==null&&N(T,P,M,z);break;case it:C(v,T,P,M,B,H,z,K,G);break;default:Q&1?ce(v,T,P,M,B,H,z,K,G):Q&6?b(v,T,P,M,B,H,z,K,G):(Q&64||Q&128)&&q.process(v,T,P,M,B,H,z,K,G,Z)}se!=null&&B&&Uo(se,v&&v.ref,H,T||v,!T)},k=(v,T,P,M)=>{if(v==null)r(T.el=l(T.children),P,M);else{const B=T.el=v.el;T.children!==v.children&&c(B,T.children)}},U=(v,T,P,M)=>{v==null?r(T.el=u(T.children||""),P,M):T.el=v.el},N=(v,T,P,M)=>{[v.el,v.anchor]=L(v.children,T,P,M,v.el,v.anchor)},O=({el:v,anchor:T},P,M)=>{let B;for(;v&&v!==T;)B=g(v),r(v,P,M),v=B;r(T,P,M)},F=({el:v,anchor:T})=>{let P;for(;v&&v!==T;)P=g(v),i(v),v=P;i(T)},ce=(v,T,P,M,B,H,z,K,G)=>{T.type==="svg"?z="svg":T.type==="math"&&(z="mathml"),v==null?me(T,P,M,B,H,z,K,G):E(v,T,B,H,z,K,G)},me=(v,T,P,M,B,H,z,K)=>{let G,q;const{props:se,shapeFlag:Q,transition:te,dirs:he}=v;if(G=v.el=o(v.type,H,se&&se.is,se),Q&8?d(G,v.children):Q&16&&y(v.children,G,null,M,B,dl(v,H),z,K),he&&Tr(v,null,M,"created"),I(G,v,v.scopeId,z,M),se){for(const _e in se)_e!=="value"&&!Zi(_e)&&s(G,_e,null,se[_e],H,M);"value"in se&&s(G,"value",null,se.value,H),(q=se.onVnodeBeforeMount)&&on(q,M,v)}he&&Tr(v,null,M,"beforeMount");const oe=wv(B,te);oe&&te.beforeEnter(G),r(G,T,P),((q=se&&se.onVnodeMounted)||oe||he)&&Nt(()=>{q&&on(q,M,v),oe&&te.enter(G),he&&Tr(v,null,M,"mounted")},B)},I=(v,T,P,M,B)=>{if(P&&_(v,P),M)for(let H=0;H<M.length;H++)_(v,M[H]);if(B){let H=B.subTree;if(T===H||Qp(H.type)&&(H.ssContent===T||H.ssFallback===T)){const z=B.vnode;I(v,z,z.scopeId,z.slotScopeIds,B.parent)}}},y=(v,T,P,M,B,H,z,K,G=0)=>{for(let q=G;q<v.length;q++){const se=v[q]=K?zn(v[q]):ln(v[q]);D(null,se,T,P,M,B,H,z,K)}},E=(v,T,P,M,B,H,z)=>{const K=T.el=v.el;let{patchFlag:G,dynamicChildren:q,dirs:se}=T;G|=v.patchFlag&16;const Q=v.props||xe,te=T.props||xe;let he;if(P&&Er(P,!1),(he=te.onVnodeBeforeUpdate)&&on(he,P,T,v),se&&Tr(T,v,P,"beforeUpdate"),P&&Er(P,!0),(Q.innerHTML&&te.innerHTML==null||Q.textContent&&te.textContent==null)&&d(K,""),q?w(v.dynamicChildren,q,K,P,M,dl(T,B),H):z||ye(v,T,K,null,P,M,dl(T,B),H,!1),G>0){if(G&16)A(K,Q,te,P,B);else if(G&2&&Q.class!==te.class&&s(K,"class",null,te.class,B),G&4&&s(K,"style",Q.style,te.style,B),G&8){const oe=T.dynamicProps;for(let _e=0;_e<oe.length;_e++){const be=oe[_e],ct=Q[be],et=te[be];(et!==ct||be==="value")&&s(K,be,ct,et,B,P)}}G&1&&v.children!==T.children&&d(K,T.children)}else!z&&q==null&&A(K,Q,te,P,B);((he=te.onVnodeUpdated)||se)&&Nt(()=>{he&&on(he,P,T,v),se&&Tr(T,v,P,"updated")},M)},w=(v,T,P,M,B,H,z)=>{for(let K=0;K<T.length;K++){const G=v[K],q=T[K],se=G.el&&(G.type===it||!$i(G,q)||G.shapeFlag&70)?p(G.el):P;D(G,q,se,null,M,B,H,z,!0)}},A=(v,T,P,M,B)=>{if(T!==P){if(T!==xe)for(const H in T)!Zi(H)&&!(H in P)&&s(v,H,T[H],null,B,M);for(const H in P){if(Zi(H))continue;const z=P[H],K=T[H];z!==K&&H!=="value"&&s(v,H,K,z,B,M)}"value"in P&&s(v,"value",T.value,P.value,B)}},C=(v,T,P,M,B,H,z,K,G)=>{const q=T.el=v?v.el:l(""),se=T.anchor=v?v.anchor:l("");let{patchFlag:Q,dynamicChildren:te,slotScopeIds:he}=T;he&&(K=K?K.concat(he):he),v==null?(r(q,P,M),r(se,P,M),y(T.children||[],P,se,B,H,z,K,G)):Q>0&&Q&64&&te&&v.dynamicChildren?(w(v.dynamicChildren,te,P,B,H,z,K),(T.key!=null||B&&T===B.subTree)&&Gp(v,T,!0)):ye(v,T,P,se,B,H,z,K,G)},b=(v,T,P,M,B,H,z,K,G)=>{T.slotScopeIds=K,v==null?T.shapeFlag&512?B.ctx.activate(T,P,M,z,G):At(T,P,M,B,H,z,G):Ut(v,T,G)},At=(v,T,P,M,B,H,z)=>{const K=v.component=$v(v,M,B);if(Sp(v)&&(K.ctx.renderer=Z),qv(K,!1,z),K.asyncDep){if(B&&B.registerDep(K,Ke,z),!v.el){const G=K.subTree=Ne(or);U(null,G,T,P)}}else Ke(K,v,T,P,B,H,z)},Ut=(v,T,P)=>{const M=T.component=v.component;if(xv(v,T,P))if(M.asyncDep&&!M.asyncResolved){Ee(M,T,P);return}else M.next=T,M.update();else T.el=v.el,M.vnode=T},Ke=(v,T,P,M,B,H,z)=>{const K=()=>{if(v.isMounted){let{next:Q,bu:te,u:he,parent:oe,vnode:_e}=v;{const ht=Kp(v);if(ht){Q&&(Q.el=_e.el,Ee(v,Q,z)),ht.asyncDep.then(()=>{v.isUnmounted||K()});return}}let be=Q,ct;Er(v,!1),Q?(Q.el=_e.el,Ee(v,Q,z)):Q=_e,te&&bo(te),(ct=Q.props&&Q.props.onVnodeBeforeUpdate)&&on(ct,oe,Q,_e),Er(v,!0);const et=Bh(v),jt=v.subTree;v.subTree=et,D(jt,et,p(jt.el),V(jt),v,B,H),Q.el=et.el,be===null&&Nv(v,et.el),he&&Nt(he,B),(ct=Q.props&&Q.props.onVnodeUpdated)&&Nt(()=>on(ct,oe,Q,_e),B)}else{let Q;const{el:te,props:he}=T,{bm:oe,m:_e,parent:be,root:ct,type:et}=v,jt=ni(T);Er(v,!1),oe&&bo(oe),!jt&&(Q=he&&he.onVnodeBeforeMount)&&on(Q,be,T),Er(v,!0);{ct.ce&&ct.ce._injectChildStyle(et);const ht=v.subTree=Bh(v);D(null,ht,P,M,v,B,H),T.el=ht.el}if(_e&&Nt(_e,B),!jt&&(Q=he&&he.onVnodeMounted)){const ht=T;Nt(()=>on(Q,be,ht),B)}(T.shapeFlag&256||be&&ni(be.vnode)&&be.vnode.shapeFlag&256)&&v.a&&Nt(v.a,B),v.isMounted=!0,T=P=M=null}};v.scope.on();const G=v.effect=new ip(K);v.scope.off();const q=v.update=G.run.bind(G),se=v.job=G.runIfDirty.bind(G);se.i=v,se.id=v.uid,G.scheduler=()=>ku(se),Er(v,!0),q()},Ee=(v,T,P)=>{T.component=v;const M=v.vnode.props;v.vnode=T,v.next=null,_v(v,T.props,M,P),Ev(v,T.children,P),hr(),Nh(v),dr()},ye=(v,T,P,M,B,H,z,K,G=!1)=>{const q=v&&v.children,se=v?v.shapeFlag:0,Q=T.children,{patchFlag:te,shapeFlag:he}=T;if(te>0){if(te&128){zt(q,Q,P,M,B,H,z,K,G);return}else if(te&256){Dt(q,Q,P,M,B,H,z,K,G);return}}he&8?(se&16&&St(q,B,H),Q!==q&&d(P,Q)):se&16?he&16?zt(q,Q,P,M,B,H,z,K,G):St(q,B,H,!0):(se&8&&d(P,""),he&16&&y(Q,P,M,B,H,z,K,G))},Dt=(v,T,P,M,B,H,z,K,G)=>{v=v||Yr,T=T||Yr;const q=v.length,se=T.length,Q=Math.min(q,se);let te;for(te=0;te<Q;te++){const he=T[te]=G?zn(T[te]):ln(T[te]);D(v[te],he,P,null,B,H,z,K,G)}q>se?St(v,B,H,!0,!1,Q):y(T,P,M,B,H,z,K,G,Q)},zt=(v,T,P,M,B,H,z,K,G)=>{let q=0;const se=T.length;let Q=v.length-1,te=se-1;for(;q<=Q&&q<=te;){const he=v[q],oe=T[q]=G?zn(T[q]):ln(T[q]);if($i(he,oe))D(he,oe,P,null,B,H,z,K,G);else break;q++}for(;q<=Q&&q<=te;){const he=v[Q],oe=T[te]=G?zn(T[te]):ln(T[te]);if($i(he,oe))D(he,oe,P,null,B,H,z,K,G);else break;Q--,te--}if(q>Q){if(q<=te){const he=te+1,oe=he<se?T[he].el:M;for(;q<=te;)D(null,T[q]=G?zn(T[q]):ln(T[q]),P,oe,B,H,z,K,G),q++}}else if(q>te)for(;q<=Q;)Ue(v[q],B,H,!0),q++;else{const he=q,oe=q,_e=new Map;for(q=oe;q<=te;q++){const tt=T[q]=G?zn(T[q]):ln(T[q]);tt.key!=null&&_e.set(tt.key,q)}let be,ct=0;const et=te-oe+1;let jt=!1,ht=0;const jn=new Array(et);for(q=0;q<et;q++)jn[q]=0;for(q=he;q<=Q;q++){const tt=v[q];if(ct>=et){Ue(tt,B,H,!0);continue}let Bt;if(tt.key!=null)Bt=_e.get(tt.key);else for(be=oe;be<=te;be++)if(jn[be-oe]===0&&$i(tt,T[be])){Bt=be;break}Bt===void 0?Ue(tt,B,H,!0):(jn[Bt-oe]=q+1,Bt>=ht?ht=Bt:jt=!0,D(tt,T[Bt],P,null,B,H,z,K,G),ct++)}const Si=jt?Av(jn):Yr;for(be=Si.length-1,q=et-1;q>=0;q--){const tt=oe+q,Bt=T[tt],Ys=tt+1<se?T[tt+1].el:M;jn[q]===0?D(null,Bt,P,Ys,B,H,z,K,G):jt&&(be<0||q!==Si[be]?Ht(Bt,P,Ys,2):be--)}}},Ht=(v,T,P,M,B=null)=>{const{el:H,type:z,transition:K,children:G,shapeFlag:q}=v;if(q&6){Ht(v.component.subTree,T,P,M);return}if(q&128){v.suspense.move(T,P,M);return}if(q&64){z.move(v,T,P,Z);return}if(z===it){r(H,T,P);for(let Q=0;Q<G.length;Q++)Ht(G[Q],T,P,M);r(v.anchor,T,P);return}if(z===Io){O(v,T,P);return}if(M!==2&&q&1&&K)if(M===0)K.beforeEnter(H),r(H,T,P),Nt(()=>K.enter(H),B);else{const{leave:Q,delayLeave:te,afterLeave:he}=K,oe=()=>r(H,T,P),_e=()=>{Q(H,()=>{oe(),he&&he()})};te?te(H,oe,_e):_e()}else r(H,T,P)},Ue=(v,T,P,M=!1,B=!1)=>{const{type:H,props:z,ref:K,children:G,dynamicChildren:q,shapeFlag:se,patchFlag:Q,dirs:te,cacheIndex:he}=v;if(Q===-2&&(B=!1),K!=null&&Uo(K,null,P,v,!0),he!=null&&(T.renderCache[he]=void 0),se&256){T.ctx.deactivate(v);return}const oe=se&1&&te,_e=!ni(v);let be;if(_e&&(be=z&&z.onVnodeBeforeUnmount)&&on(be,T,v),se&6)sn(v.component,P,M);else{if(se&128){v.suspense.unmount(P,M);return}oe&&Tr(v,null,T,"beforeUnmount"),se&64?v.type.remove(v,T,P,Z,M):q&&!q.hasOnce&&(H!==it||Q>0&&Q&64)?St(q,T,P,!1,!0):(H===it&&Q&384||!B&&se&16)&&St(G,T,P),M&&He(v)}(_e&&(be=z&&z.onVnodeUnmounted)||oe)&&Nt(()=>{be&&on(be,T,v),oe&&Tr(v,null,T,"unmounted")},P)},He=v=>{const{type:T,el:P,anchor:M,transition:B}=v;if(T===it){Hn(P,M);return}if(T===Io){F(v);return}const H=()=>{i(P),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(v.shapeFlag&1&&B&&!B.persisted){const{leave:z,delayLeave:K}=B,G=()=>z(P,H);K?K(v.el,H,G):G()}else H()},Hn=(v,T)=>{let P;for(;v!==T;)P=g(v),i(v),v=P;i(T)},sn=(v,T,P)=>{const{bum:M,scope:B,job:H,subTree:z,um:K,m:G,a:q}=v;jh(G),jh(q),M&&bo(M),B.stop(),H&&(H.flags|=8,Ue(z,v,T,P)),K&&Nt(K,T),Nt(()=>{v.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},St=(v,T,P,M=!1,B=!1,H=0)=>{for(let z=H;z<v.length;z++)Ue(v[z],T,P,M,B)},V=v=>{if(v.shapeFlag&6)return V(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const T=g(v.anchor||v.el),P=T&&T[Ky];return P?g(P):T};let Y=!1;const X=(v,T,P)=>{v==null?T._vnode&&Ue(T._vnode,null,null,!0):D(T._vnode||null,v,T,null,null,null,P),T._vnode=v,Y||(Y=!0,Nh(),wp(),Y=!1)},Z={p:D,um:Ue,m:Ht,r:He,mt:At,mc:y,pc:ye,pbc:w,n:V,o:t};return{render:X,hydrate:void 0,createApp:gv(X)}}function dl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Er({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function wv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Gp(t,e,n=!1){const r=t.children,i=e.children;if(ue(r)&&ue(i))for(let s=0;s<r.length;s++){const o=r[s];let l=i[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[s]=zn(i[s]),l.el=o.el),!n&&l.patchFlag!==-2&&Gp(o,l)),l.type===ma&&(l.el=o.el)}}function Av(t){const e=t.slice(),n=[0];let r,i,s,o,l;const u=t.length;for(r=0;r<u;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)l=s+o>>1,t[n[l]]<c?s=l+1:o=l;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Kp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Kp(e)}function jh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Rv=Symbol.for("v-scx"),Pv=()=>Et(Rv);function rs(t,e,n){return Wp(t,e,n)}function Wp(t,e,n=xe){const{immediate:r,deep:i,flush:s,once:o}=n,l=It({},n),u=e&&r||!e&&s!=="post";let c;if(vs){if(s==="sync"){const _=Pv();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!u){const _=()=>{};return _.stop=cn,_.resume=cn,_.pause=cn,_}}const d=vt;l.call=(_,L,D)=>gn(_,d,L,D);let p=!1;s==="post"?l.scheduler=_=>{Nt(_,d&&d.suspense)}:s!=="sync"&&(p=!0,l.scheduler=(_,L)=>{L?_():ku(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const g=By(t,e,l);return vs&&(c?c.push(g):u&&g()),g}function Cv(t,e,n){const r=this.proxy,i=Ge(t)?t.includes(".")?zp(r,t):()=>r[t]:t.bind(r,r);let s;ge(e)?s=e:(s=e.handler,n=e);const o=Vs(this),l=Wp(i,s.bind(r),n);return o(),l}function zp(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const Sv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Gt(e)}Modifiers`]||t[`${Or(e)}Modifiers`];function Lv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||xe;let i=n;const s=e.startsWith("update:"),o=s&&Sv(r,e.slice(7));o&&(o.trim&&(i=n.map(d=>Ge(d)?d.trim():d)),o.number&&(i=n.map(Oo)));let l,u=r[l=ol(e)]||r[l=ol(Gt(e))];!u&&s&&(u=r[l=ol(Or(e))]),u&&gn(u,t,6,i);const c=r[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,gn(c,t,6,i)}}function Xp(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},l=!1;if(!ge(t)){const u=c=>{const d=Xp(c,e,!0);d&&(l=!0,It(o,d))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!s&&!l?(Ve(t)&&r.set(t,null),null):(ue(s)?s.forEach(u=>o[u]=null):It(o,s),Ve(t)&&r.set(t,o),o)}function ga(t,e){return!t||!oa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Se(t,e[0].toLowerCase()+e.slice(1))||Se(t,Or(e))||Se(t,e))}function Bh(t){const{type:e,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:l,emit:u,render:c,renderCache:d,props:p,data:g,setupState:_,ctx:L,inheritAttrs:D}=t,k=Fo(t);let U,N;try{if(n.shapeFlag&4){const F=i||r,ce=F;U=ln(c.call(ce,F,d,p,_,g,L)),N=l}else{const F=e;U=ln(F.length>1?F(p,{attrs:l,slots:o,emit:u}):F(p,null)),N=e.props?l:kv(l)}}catch(F){is.length=0,da(F,t,1),U=Ne(or)}let O=U;if(N&&D!==!1){const F=Object.keys(N),{shapeFlag:ce}=O;F.length&&ce&7&&(s&&F.some(yu)&&(N=Dv(N,s)),O=ui(O,N,!1,!0))}return n.dirs&&(O=ui(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&Du(O,n.transition),U=O,Fo(k),U}const kv=t=>{let e;for(const n in t)(n==="class"||n==="style"||oa(n))&&((e||(e={}))[n]=t[n]);return e},Dv=(t,e)=>{const n={};for(const r in t)(!yu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function xv(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:l,patchFlag:u}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return r?$h(r,o,c):!!o;if(u&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==r[g]&&!ga(c,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?$h(r,o,c):!0:!!o;return!1}function $h(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!ga(n,s))return!0}return!1}function Nv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Qp=t=>t.__isSuspense;function Ov(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):Gy(t)}const it=Symbol.for("v-fgt"),ma=Symbol.for("v-txt"),or=Symbol.for("v-cmt"),Io=Symbol.for("v-stc"),is=[];let Vt=null;function ne(t=!1){is.push(Vt=t?null:[])}function Vv(){is.pop(),Vt=is[is.length-1]||null}let _s=1;function qh(t,e=!1){_s+=t,t<0&&Vt&&e&&(Vt.hasOnce=!0)}function Yp(t){return t.dynamicChildren=_s>0?Vt||Yr:null,Vv(),_s>0&&Vt&&Vt.push(t),t}function ae(t,e,n,r,i,s){return Yp(R(t,e,n,r,i,s,!0))}function Bo(t,e,n,r,i){return Yp(Ne(t,e,n,r,i,!0))}function ys(t){return t?t.__v_isVNode===!0:!1}function $i(t,e){return t.type===e.type&&t.key===e.key}const Jp=({key:t})=>t??null,wo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ge(t)||Tt(t)||ge(t)?{i:ot,r:t,k:e,f:!!n}:t:null);function R(t,e=null,n=null,r=0,i=null,s=t===it?0:1,o=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Jp(e),ref:e&&wo(e),scopeId:Rp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ot};return l?(Mu(u,n),s&128&&t.normalize(u)):n&&(u.shapeFlag|=Ge(n)?8:16),_s>0&&!o&&Vt&&(u.patchFlag>0||s&6)&&u.patchFlag!==32&&Vt.push(u),u}const Ne=Mv;function Mv(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===kp)&&(t=or),ys(t)){const l=ui(t,e,!0);return n&&Mu(l,n),_s>0&&!s&&Vt&&(l.shapeFlag&6?Vt[Vt.indexOf(t)]=l:Vt.push(l)),l.patchFlag=-2,l}if(Xv(t)&&(t=t.__vccOpts),e){e=Fv(e);let{class:l,style:u}=e;l&&!Ge(l)&&(e.class=Cr(l)),Ve(u)&&(Su(u)&&!ue(u)&&(u=It({},u)),e.style=Eu(u))}const o=Ge(t)?1:Qp(t)?128:Wy(t)?64:Ve(t)?4:ge(t)?2:0;return R(t,e,n,r,i,o,s,!0)}function Fv(t){return t?Su(t)||Fp(t)?It({},t):t:null}function ui(t,e,n=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:l,transition:u}=t,c=e?Hv(i||{},e):i,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Jp(c),ref:e&&e.ref?n&&s?ue(s)?s.concat(wo(e)):[s,wo(e)]:wo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==it?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ui(t.ssContent),ssFallback:t.ssFallback&&ui(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&r&&Du(d,u.clone(d)),d}function at(t=" ",e=0){return Ne(ma,null,t,e)}function Uv(t,e){const n=Ne(Io,null,t);return n.staticCount=e,n}function $e(t="",e=!1){return e?(ne(),Bo(or,null,t)):Ne(or,null,t)}function ln(t){return t==null||typeof t=="boolean"?Ne(or):ue(t)?Ne(it,null,t.slice()):ys(t)?zn(t):Ne(ma,null,String(t))}function zn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ui(t)}function Mu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Mu(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Fp(e)?e._ctx=ot:i===3&&ot&&(ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:ot},n=32):(e=String(e),r&64?(n=16,e=[at(e)]):n=8);t.children=e,t.shapeFlag|=n}function Hv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Cr([e.class,r.class]));else if(i==="style")e.style=Eu([e.style,r.style]);else if(oa(i)){const s=e[i],o=r[i];o&&s!==o&&!(ue(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function on(t,e,n,r=null){gn(t,e,7,[n,r])}const jv=Op();let Bv=0;function $v(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||jv,s={uid:Bv++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new gy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hp(r,i),emitsOptions:Xp(r,i),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Lv.bind(null,s),t.ce&&t.ce(s),s}let vt=null,$o,Fl;{const t=ua(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};$o=e("__VUE_INSTANCE_SETTERS__",n=>vt=n),Fl=e("__VUE_SSR_SETTERS__",n=>vs=n)}const Vs=t=>{const e=vt;return $o(t),t.scope.on(),()=>{t.scope.off(),$o(e)}},Gh=()=>{vt&&vt.scope.off(),$o(null)};function Zp(t){return t.vnode.shapeFlag&4}let vs=!1;function qv(t,e=!1,n=!1){e&&Fl(e);const{props:r,children:i}=t.vnode,s=Zp(t);mv(t,r,s,e),Tv(t,i,n);const o=s?Gv(t,e):void 0;return e&&Fl(!1),o}function Gv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,lv);const{setup:r}=n;if(r){hr();const i=t.setupContext=r.length>1?Wv(t):null,s=Vs(t),o=Os(r,t,0,[t.props,i]),l=Yf(o);if(dr(),s(),(l||t.sp)&&!ni(t)&&Cp(t),l){if(o.then(Gh,Gh),e)return o.then(u=>{Kh(t,u)}).catch(u=>{da(u,t,0)});t.asyncDep=o}else Kh(t,o)}else eg(t)}function Kh(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ve(e)&&(t.setupState=Ep(e)),eg(t)}function eg(t,e,n){const r=t.type;t.render||(t.render=r.render||cn);{const i=Vs(t);hr();try{uv(t)}finally{dr(),i()}}}const Kv={get(t,e){return mt(t,"get",""),t[e]}};function Wv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Kv),slots:t.slots,emit:t.emit,expose:e}}function _a(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ep(Oy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ns)return ns[n](t)},has(e,n){return n in e||n in ns}})):t.proxy}function zv(t,e=!0){return ge(t)?t.displayName||t.name:t.name||e&&t.__name}function Xv(t){return ge(t)&&"__vccOpts"in t}const Je=(t,e)=>Hy(t,e,vs);function tg(t,e,n){const r=arguments.length;return r===2?Ve(e)&&!ue(e)?ys(e)?Ne(t,null,[e]):Ne(t,e):Ne(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ys(n)&&(n=[n]),Ne(t,e,n))}const Qv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ul;const Wh=typeof window<"u"&&window.trustedTypes;if(Wh)try{Ul=Wh.createPolicy("vue",{createHTML:t=>t})}catch{}const ng=Ul?t=>Ul.createHTML(t):t=>t,Yv="http://www.w3.org/2000/svg",Jv="http://www.w3.org/1998/Math/MathML",En=typeof document<"u"?document:null,zh=En&&En.createElement("template"),Zv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?En.createElementNS(Yv,t):e==="mathml"?En.createElementNS(Jv,t):n?En.createElement(t,{is:n}):En.createElement(t);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>En.createTextNode(t),createComment:t=>En.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>En.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{zh.innerHTML=ng(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=zh.content;if(r==="svg"||r==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},eT=Symbol("_vtc");function tT(t,e,n){const r=t[eT];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Xh=Symbol("_vod"),nT=Symbol("_vsh"),rT=Symbol(""),iT=/(^|;)\s*display\s*:/;function sT(t,e,n){const r=t.style,i=Ge(n);let s=!1;if(n&&!i){if(e)if(Ge(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ao(r,l,"")}else for(const o in e)n[o]==null&&Ao(r,o,"");for(const o in n)o==="display"&&(s=!0),Ao(r,o,n[o])}else if(i){if(e!==n){const o=r[rT];o&&(n+=";"+o),r.cssText=n,s=iT.test(n)}}else e&&t.removeAttribute("style");Xh in t&&(t[Xh]=s?r.display:"",t[nT]&&(r.display="none"))}const Qh=/\s*!important$/;function Ao(t,e,n){if(ue(n))n.forEach(r=>Ao(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=oT(t,e);Qh.test(n)?t.setProperty(Or(r),n.replace(Qh,""),"important"):t[r]=n}}const Yh=["Webkit","Moz","ms"],fl={};function oT(t,e){const n=fl[e];if(n)return n;let r=Gt(e);if(r!=="filter"&&r in t)return fl[e]=r;r=la(r);for(let i=0;i<Yh.length;i++){const s=Yh[i]+r;if(s in t)return fl[e]=s}return e}const Jh="http://www.w3.org/1999/xlink";function Zh(t,e,n,r,i,s=fy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Jh,e.slice(6,e.length)):t.setAttributeNS(Jh,e,n):n==null||s&&!tp(n)?t.removeAttribute(e):t.setAttribute(e,s?"":tn(n)?String(n):n)}function ed(t,e,n,r,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ng(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const l=s==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?t.type==="checkbox"?"on":"":String(n);(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=tp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function Qn(t,e,n,r){t.addEventListener(e,n,r)}function aT(t,e,n,r){t.removeEventListener(e,n,r)}const td=Symbol("_vei");function lT(t,e,n,r,i=null){const s=t[td]||(t[td]={}),o=s[e];if(r&&o)o.value=r;else{const[l,u]=uT(e);if(r){const c=s[e]=dT(r,i);Qn(t,l,c,u)}else o&&(aT(t,l,o,u),s[e]=void 0)}}const nd=/(?:Once|Passive|Capture)$/;function uT(t){let e;if(nd.test(t)){e={};let r;for(;r=t.match(nd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Or(t.slice(2)),e]}let pl=0;const cT=Promise.resolve(),hT=()=>pl||(cT.then(()=>pl=0),pl=Date.now());function dT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;gn(fT(r,n.value),e,5,[r])};return n.value=t,n.attached=hT(),n}function fT(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const rd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,pT=(t,e,n,r,i,s)=>{const o=i==="svg";e==="class"?tT(t,r,o):e==="style"?sT(t,n,r):oa(e)?yu(e)||lT(t,e,n,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gT(t,e,r,o))?(ed(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Zh(t,e,r,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ge(r))?ed(t,Gt(e),r,s,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Zh(t,e,r,o))};function gT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&rd(e)&&ge(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return rd(e)&&Ge(n)?!1:e in t}const ci=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>bo(e,n):e};function mT(t){t.target.composing=!0}function id(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Cn=Symbol("_assign"),Ft={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t[Cn]=ci(i);const s=r||i.props&&i.props.type==="number";Qn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),s&&(l=Oo(l)),t[Cn](l)}),n&&Qn(t,"change",()=>{t.value=t.value.trim()}),e||(Qn(t,"compositionstart",mT),Qn(t,"compositionend",id),Qn(t,"change",id))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:i,number:s}},o){if(t[Cn]=ci(o),t.composing)return;const l=(s||t.type==="number")&&!/^0\d/.test(t.value)?Oo(t.value):t.value,u=e??"";l!==u&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||i&&t.value.trim()===u)||(t.value=u))}},_T={deep:!0,created(t,e,n){t[Cn]=ci(n),Qn(t,"change",()=>{const r=t._modelValue,i=Ts(t),s=t.checked,o=t[Cn];if(ue(r)){const l=bu(r,i),u=l!==-1;if(s&&!u)o(r.concat(i));else if(!s&&u){const c=[...r];c.splice(l,1),o(c)}}else if(bi(r)){const l=new Set(r);s?l.add(i):l.delete(i),o(l)}else o(rg(t,s))})},mounted:sd,beforeUpdate(t,e,n){t[Cn]=ci(n),sd(t,e,n)}};function sd(t,{value:e,oldValue:n},r){t._modelValue=e;let i;if(ue(e))i=bu(e,r.props.value)>-1;else if(bi(e))i=e.has(r.props.value);else{if(e===n)return;i=Ns(e,rg(t,!0))}t.checked!==i&&(t.checked=i)}const Hl={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=bi(e);Qn(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Oo(Ts(o)):Ts(o));t[Cn](t.multiple?i?new Set(s):s:s[0]),t._assigning=!0,Lu(()=>{t._assigning=!1})}),t[Cn]=ci(r)},mounted(t,{value:e}){od(t,e)},beforeUpdate(t,e,n){t[Cn]=ci(n)},updated(t,{value:e}){t._assigning||od(t,e)}};function od(t,e){const n=t.multiple,r=ue(e);if(!(n&&!r&&!bi(e))){for(let i=0,s=t.options.length;i<s;i++){const o=t.options[i],l=Ts(o);if(n)if(r){const u=typeof l;u==="string"||u==="number"?o.selected=e.some(c=>String(c)===String(l)):o.selected=bu(e,l)>-1}else o.selected=e.has(l);else if(Ns(Ts(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ts(t){return"_value"in t?t._value:t.value}function rg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const yT=["ctrl","shift","alt","meta"],vT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>yT.some(n=>t[`${n}Key`]&&!e.includes(n))},ig=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(i,...s)=>{for(let o=0;o<e.length;o++){const l=vT[e[o]];if(l&&l(i,e))return}return t(i,...s)})},TT=It({patchProp:pT},Zv);let ad;function ET(){return ad||(ad=bv(TT))}const bT=(...t)=>{const e=ET().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=wT(r);if(!i)return;const s=e._component;!ge(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,IT(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function IT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function wT(t){return Ge(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Wr=typeof document<"u";function sg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function AT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&sg(t.default)}const Pe=Object.assign;function gl(t,e){const n={};for(const r in e){const i=e[r];n[r]=nn(i)?i.map(t):t(i)}return n}const ss=()=>{},nn=Array.isArray,og=/#/g,RT=/&/g,PT=/\//g,CT=/=/g,ST=/\?/g,ag=/\+/g,LT=/%5B/g,kT=/%5D/g,lg=/%5E/g,DT=/%60/g,ug=/%7B/g,xT=/%7C/g,cg=/%7D/g,NT=/%20/g;function Fu(t){return encodeURI(""+t).replace(xT,"|").replace(LT,"[").replace(kT,"]")}function OT(t){return Fu(t).replace(ug,"{").replace(cg,"}").replace(lg,"^")}function jl(t){return Fu(t).replace(ag,"%2B").replace(NT,"+").replace(og,"%23").replace(RT,"%26").replace(DT,"`").replace(ug,"{").replace(cg,"}").replace(lg,"^")}function VT(t){return jl(t).replace(CT,"%3D")}function MT(t){return Fu(t).replace(og,"%23").replace(ST,"%3F")}function FT(t){return t==null?"":MT(t).replace(PT,"%2F")}function Es(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const UT=/\/$/,HT=t=>t.replace(UT,"");function ml(t,e,n="/"){let r,i={},s="",o="";const l=e.indexOf("#");let u=e.indexOf("?");return l<u&&l>=0&&(u=-1),u>-1&&(r=e.slice(0,u),s=e.slice(u+1,l>-1?l:e.length),i=t(s)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=qT(r??e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:Es(o)}}function jT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ld(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function BT(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&hi(e.matched[r],n.matched[i])&&hg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function hg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!$T(t[n],e[n]))return!1;return!0}function $T(t,e){return nn(t)?ud(t,e):nn(e)?ud(e,t):t===e}function ud(t,e){return nn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function qT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o).join("/")}const Gn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var bs;(function(t){t.pop="pop",t.push="push"})(bs||(bs={}));var os;(function(t){t.back="back",t.forward="forward",t.unknown=""})(os||(os={}));function GT(t){if(!t)if(Wr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),HT(t)}const KT=/^[^#]+#/;function WT(t,e){return t.replace(KT,"#")+e}function zT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ya=()=>({left:window.scrollX,top:window.scrollY});function XT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=zT(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function cd(t,e){return(history.state?history.state.position-e:-1)+t}const Bl=new Map;function QT(t,e){Bl.set(t,e)}function YT(t){const e=Bl.get(t);return Bl.delete(t),e}let JT=()=>location.protocol+"//"+location.host;function dg(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let l=i.includes(t.slice(s))?t.slice(s).length:1,u=i.slice(l);return u[0]!=="/"&&(u="/"+u),ld(u,"")}return ld(n,t)+r+i}function ZT(t,e,n,r){let i=[],s=[],o=null;const l=({state:g})=>{const _=dg(t,location),L=n.value,D=e.value;let k=0;if(g){if(n.value=_,e.value=g,o&&o===L){o=null;return}k=D?g.position-D.position:0}else r(_);i.forEach(U=>{U(n.value,L,{delta:k,type:bs.pop,direction:k?k>0?os.forward:os.back:os.unknown})})};function u(){o=n.value}function c(g){i.push(g);const _=()=>{const L=i.indexOf(g);L>-1&&i.splice(L,1)};return s.push(_),_}function d(){const{history:g}=window;g.state&&g.replaceState(Pe({},g.state,{scroll:ya()}),"")}function p(){for(const g of s)g();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:u,listen:c,destroy:p}}function hd(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?ya():null}}function eE(t){const{history:e,location:n}=window,r={value:dg(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(u,c,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+u:JT()+t+u;try{e[d?"replaceState":"pushState"](c,"",g),i.value=c}catch(_){console.error(_),n[d?"replace":"assign"](g)}}function o(u,c){const d=Pe({},e.state,hd(i.value.back,u,i.value.forward,!0),c,{position:i.value.position});s(u,d,!0),r.value=u}function l(u,c){const d=Pe({},i.value,e.state,{forward:u,scroll:ya()});s(d.current,d,!0);const p=Pe({},hd(r.value,u,null),{position:d.position+1},c);s(u,p,!1),r.value=u}return{location:r,state:i,push:l,replace:o}}function tE(t){t=GT(t);const e=eE(t),n=ZT(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=Pe({location:"",base:t,go:r,createHref:WT.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function nE(t){return typeof t=="string"||t&&typeof t=="object"}function fg(t){return typeof t=="string"||typeof t=="symbol"}const pg=Symbol("");var dd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(dd||(dd={}));function di(t,e){return Pe(new Error,{type:t,[pg]:!0},e)}function Tn(t,e){return t instanceof Error&&pg in t&&(e==null||!!(t.type&e))}const fd="[^/]+?",rE={sensitive:!1,strict:!1,start:!0,end:!0},iE=/[.+*?^${}()[\]/\\]/g;function sE(t,e){const n=Pe({},rE,e),r=[];let i=n.start?"^":"";const s=[];for(const c of t){const d=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let p=0;p<c.length;p++){const g=c[p];let _=40+(n.sensitive?.25:0);if(g.type===0)p||(i+="/"),i+=g.value.replace(iE,"\\$&"),_+=40;else if(g.type===1){const{value:L,repeatable:D,optional:k,regexp:U}=g;s.push({name:L,repeatable:D,optional:k});const N=U||fd;if(N!==fd){_+=10;try{new RegExp(`(${N})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${L}" (${N}): `+F.message)}}let O=D?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;p||(O=k&&c.length<2?`(?:/${O})`:"/"+O),k&&(O+="?"),i+=O,_+=20,k&&(_+=-8),D&&(_+=-20),N===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(c){const d=c.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const _=d[g]||"",L=s[g-1];p[L.name]=_&&L.repeatable?_.split("/"):_}return p}function u(c){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of g)if(_.type===0)d+=_.value;else if(_.type===1){const{value:L,repeatable:D,optional:k}=_,U=L in c?c[L]:"";if(nn(U)&&!D)throw new Error(`Provided param "${L}" is an array but it is not repeatable (* or + modifiers)`);const N=nn(U)?U.join("/"):U;if(!N)if(k)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${L}"`);d+=N}}return d||"/"}return{re:o,score:r,keys:s,parse:l,stringify:u}}function oE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function gg(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=oE(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(pd(r))return 1;if(pd(i))return-1}return i.length-r.length}function pd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const aE={type:0,value:""},lE=/[a-zA-Z0-9_]/;function uE(t){if(!t)return[[]];if(t==="/")return[[aE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let l=0,u,c="",d="";function p(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(u==="*"||u==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):e("Invalid state to consume buffer"),c="")}function g(){c+=u}for(;l<t.length;){if(u=t[l++],u==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:u==="/"?(c&&p(),o()):u===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:u==="("?n=2:lE.test(u)?g():(p(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&l--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:n=3:d+=u;break;case 3:p(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),p(),o(),i}function cE(t,e,n){const r=sE(uE(t.path),n),i=Pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function hE(t,e){const n=[],r=new Map;e=yd({strict:!1,end:!0,sensitive:!1},e);function i(p){return r.get(p)}function s(p,g,_){const L=!_,D=md(p);D.aliasOf=_&&_.record;const k=yd(e,p),U=[D];if("alias"in p){const F=typeof p.alias=="string"?[p.alias]:p.alias;for(const ce of F)U.push(md(Pe({},D,{components:_?_.record.components:D.components,path:ce,aliasOf:_?_.record:D})))}let N,O;for(const F of U){const{path:ce}=F;if(g&&ce[0]!=="/"){const me=g.record.path,I=me[me.length-1]==="/"?"":"/";F.path=g.record.path+(ce&&I+ce)}if(N=cE(F,g,k),_?_.alias.push(N):(O=O||N,O!==N&&O.alias.push(N),L&&p.name&&!_d(N)&&o(p.name)),mg(N)&&u(N),D.children){const me=D.children;for(let I=0;I<me.length;I++)s(me[I],N,_&&_.children[I])}_=_||N}return O?()=>{o(O)}:ss}function o(p){if(fg(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function u(p){const g=pE(p,n);n.splice(g,0,p),p.record.name&&!_d(p)&&r.set(p.record.name,p)}function c(p,g){let _,L={},D,k;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw di(1,{location:p});k=_.record.name,L=Pe(gd(g.params,_.keys.filter(O=>!O.optional).concat(_.parent?_.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),p.params&&gd(p.params,_.keys.map(O=>O.name))),D=_.stringify(L)}else if(p.path!=null)D=p.path,_=n.find(O=>O.re.test(D)),_&&(L=_.parse(D),k=_.record.name);else{if(_=g.name?r.get(g.name):n.find(O=>O.re.test(g.path)),!_)throw di(1,{location:p,currentLocation:g});k=_.record.name,L=Pe({},g.params,p.params),D=_.stringify(L)}const U=[];let N=_;for(;N;)U.unshift(N.record),N=N.parent;return{name:k,path:D,params:L,matched:U,meta:fE(U)}}t.forEach(p=>s(p));function d(){n.length=0,r.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:i}}function gd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function md(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:dE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function dE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function _d(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function fE(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function yd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function pE(t,e){let n=0,r=e.length;for(;n!==r;){const s=n+r>>1;gg(t,e[s])<0?r=s:n=s+1}const i=gE(t);return i&&(r=e.lastIndexOf(i,r-1)),r}function gE(t){let e=t;for(;e=e.parent;)if(mg(e)&&gg(t,e)===0)return e}function mg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function mE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(ag," "),o=s.indexOf("="),l=Es(o<0?s:s.slice(0,o)),u=o<0?null:Es(s.slice(o+1));if(l in e){let c=e[l];nn(c)||(c=e[l]=[c]),c.push(u)}else e[l]=u}return e}function vd(t){let e="";for(let n in t){const r=t[n];if(n=VT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(nn(r)?r.map(s=>s&&jl(s)):[r&&jl(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function _E(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=nn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const yE=Symbol(""),Td=Symbol(""),va=Symbol(""),Uu=Symbol(""),$l=Symbol("");function qi(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Xn(t,e,n,r,i,s=o=>o()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((l,u)=>{const c=g=>{g===!1?u(di(4,{from:n,to:e})):g instanceof Error?u(g):nE(g)?u(di(2,{from:e,to:g})):(o&&r.enterCallbacks[i]===o&&typeof g=="function"&&o.push(g),l())},d=s(()=>t.call(r&&r.instances[i],e,n,c));let p=Promise.resolve(d);t.length<3&&(p=p.then(c)),p.catch(g=>u(g))})}function _l(t,e,n,r,i=s=>s()){const s=[];for(const o of t)for(const l in o.components){let u=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(sg(u)){const d=(u.__vccOpts||u)[e];d&&s.push(Xn(d,n,r,o,l,i))}else{let c=u();s.push(()=>c.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=AT(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&Xn(_,n,r,o,l,i)()}))}}return s}function Ed(t){const e=Et(va),n=Et(Uu),r=Je(()=>{const u=ei(t.to);return e.resolve(u)}),i=Je(()=>{const{matched:u}=r.value,{length:c}=u,d=u[c-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(hi.bind(null,d));if(g>-1)return g;const _=bd(u[c-2]);return c>1&&bd(d)===_&&p[p.length-1].path!==_?p.findIndex(hi.bind(null,u[c-2])):g}),s=Je(()=>i.value>-1&&IE(n.params,r.value.params)),o=Je(()=>i.value>-1&&i.value===n.matched.length-1&&hg(n.params,r.value.params));function l(u={}){if(bE(u)){const c=e[ei(t.replace)?"replace":"push"](ei(t.to)).catch(ss);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:r,href:Je(()=>r.value.href),isActive:s,isExactActive:o,navigate:l}}function vE(t){return t.length===1?t[0]:t}const TE=Pp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ed,setup(t,{slots:e}){const n=ha(Ed(t)),{options:r}=Et(va),i=Je(()=>({[Id(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Id(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&vE(e.default(n));return t.custom?s:tg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),EE=TE;function bE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function IE(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!nn(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function bd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Id=(t,e,n)=>t??e??n,wE=Pp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Et($l),i=Je(()=>t.route||r.value),s=Et(Td,0),o=Je(()=>{let c=ei(s);const{matched:d}=i.value;let p;for(;(p=d[c])&&!p.components;)c++;return c}),l=Je(()=>i.value.matched[o.value]);ii(Td,Je(()=>o.value+1)),ii(yE,l),ii($l,i);const u=ie();return rs(()=>[u.value,l.value,t.name],([c,d,p],[g,_,L])=>{d&&(d.instances[p]=c,_&&_!==d&&c&&c===g&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),c&&d&&(!_||!hi(d,_)||!g)&&(d.enterCallbacks[p]||[]).forEach(D=>D(c))},{flush:"post"}),()=>{const c=i.value,d=t.name,p=l.value,g=p&&p.components[d];if(!g)return wd(n.default,{Component:g,route:c});const _=p.props[d],L=_?_===!0?c.params:typeof _=="function"?_(c):_:null,k=tg(g,Pe({},L,e,{onVnodeUnmounted:U=>{U.component.isUnmounted&&(p.instances[d]=null)},ref:u}));return wd(n.default,{Component:k,route:c})||k}}});function wd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const AE=wE;function RE(t){const e=hE(t.routes,t),n=t.parseQuery||mE,r=t.stringifyQuery||vd,i=t.history,s=qi(),o=qi(),l=qi(),u=Vy(Gn);let c=Gn;Wr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=gl.bind(null,V=>""+V),p=gl.bind(null,FT),g=gl.bind(null,Es);function _(V,Y){let X,Z;return fg(V)?(X=e.getRecordMatcher(V),Z=Y):Z=V,e.addRoute(Z,X)}function L(V){const Y=e.getRecordMatcher(V);Y&&e.removeRoute(Y)}function D(){return e.getRoutes().map(V=>V.record)}function k(V){return!!e.getRecordMatcher(V)}function U(V,Y){if(Y=Pe({},Y||u.value),typeof V=="string"){const P=ml(n,V,Y.path),M=e.resolve({path:P.path},Y),B=i.createHref(P.fullPath);return Pe(P,M,{params:g(M.params),hash:Es(P.hash),redirectedFrom:void 0,href:B})}let X;if(V.path!=null)X=Pe({},V,{path:ml(n,V.path,Y.path).path});else{const P=Pe({},V.params);for(const M in P)P[M]==null&&delete P[M];X=Pe({},V,{params:p(P)}),Y.params=p(Y.params)}const Z=e.resolve(X,Y),we=V.hash||"";Z.params=d(g(Z.params));const v=jT(r,Pe({},V,{hash:OT(we),path:Z.path})),T=i.createHref(v);return Pe({fullPath:v,hash:we,query:r===vd?_E(V.query):V.query||{}},Z,{redirectedFrom:void 0,href:T})}function N(V){return typeof V=="string"?ml(n,V,u.value.path):Pe({},V)}function O(V,Y){if(c!==V)return di(8,{from:Y,to:V})}function F(V){return I(V)}function ce(V){return F(Pe(N(V),{replace:!0}))}function me(V){const Y=V.matched[V.matched.length-1];if(Y&&Y.redirect){const{redirect:X}=Y;let Z=typeof X=="function"?X(V):X;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=N(Z):{path:Z},Z.params={}),Pe({query:V.query,hash:V.hash,params:Z.path!=null?{}:V.params},Z)}}function I(V,Y){const X=c=U(V),Z=u.value,we=V.state,v=V.force,T=V.replace===!0,P=me(X);if(P)return I(Pe(N(P),{state:typeof P=="object"?Pe({},we,P.state):we,force:v,replace:T}),Y||X);const M=X;M.redirectedFrom=Y;let B;return!v&&BT(r,Z,X)&&(B=di(16,{to:M,from:Z}),Ht(Z,Z,!0,!1)),(B?Promise.resolve(B):w(M,Z)).catch(H=>Tn(H)?Tn(H,2)?H:zt(H):ye(H,M,Z)).then(H=>{if(H){if(Tn(H,2))return I(Pe({replace:T},N(H.to),{state:typeof H.to=="object"?Pe({},we,H.to.state):we,force:v}),Y||M)}else H=C(M,Z,!0,T,we);return A(M,Z,H),H})}function y(V,Y){const X=O(V,Y);return X?Promise.reject(X):Promise.resolve()}function E(V){const Y=Hn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(V):V()}function w(V,Y){let X;const[Z,we,v]=PE(V,Y);X=_l(Z.reverse(),"beforeRouteLeave",V,Y);for(const P of Z)P.leaveGuards.forEach(M=>{X.push(Xn(M,V,Y))});const T=y.bind(null,V,Y);return X.push(T),St(X).then(()=>{X=[];for(const P of s.list())X.push(Xn(P,V,Y));return X.push(T),St(X)}).then(()=>{X=_l(we,"beforeRouteUpdate",V,Y);for(const P of we)P.updateGuards.forEach(M=>{X.push(Xn(M,V,Y))});return X.push(T),St(X)}).then(()=>{X=[];for(const P of v)if(P.beforeEnter)if(nn(P.beforeEnter))for(const M of P.beforeEnter)X.push(Xn(M,V,Y));else X.push(Xn(P.beforeEnter,V,Y));return X.push(T),St(X)}).then(()=>(V.matched.forEach(P=>P.enterCallbacks={}),X=_l(v,"beforeRouteEnter",V,Y,E),X.push(T),St(X))).then(()=>{X=[];for(const P of o.list())X.push(Xn(P,V,Y));return X.push(T),St(X)}).catch(P=>Tn(P,8)?P:Promise.reject(P))}function A(V,Y,X){l.list().forEach(Z=>E(()=>Z(V,Y,X)))}function C(V,Y,X,Z,we){const v=O(V,Y);if(v)return v;const T=Y===Gn,P=Wr?history.state:{};X&&(Z||T?i.replace(V.fullPath,Pe({scroll:T&&P&&P.scroll},we)):i.push(V.fullPath,we)),u.value=V,Ht(V,Y,X,T),zt()}let b;function At(){b||(b=i.listen((V,Y,X)=>{if(!sn.listening)return;const Z=U(V),we=me(Z);if(we){I(Pe(we,{replace:!0,force:!0}),Z).catch(ss);return}c=Z;const v=u.value;Wr&&QT(cd(v.fullPath,X.delta),ya()),w(Z,v).catch(T=>Tn(T,12)?T:Tn(T,2)?(I(Pe(N(T.to),{force:!0}),Z).then(P=>{Tn(P,20)&&!X.delta&&X.type===bs.pop&&i.go(-1,!1)}).catch(ss),Promise.reject()):(X.delta&&i.go(-X.delta,!1),ye(T,Z,v))).then(T=>{T=T||C(Z,v,!1),T&&(X.delta&&!Tn(T,8)?i.go(-X.delta,!1):X.type===bs.pop&&Tn(T,20)&&i.go(-1,!1)),A(Z,v,T)}).catch(ss)}))}let Ut=qi(),Ke=qi(),Ee;function ye(V,Y,X){zt(V);const Z=Ke.list();return Z.length?Z.forEach(we=>we(V,Y,X)):console.error(V),Promise.reject(V)}function Dt(){return Ee&&u.value!==Gn?Promise.resolve():new Promise((V,Y)=>{Ut.add([V,Y])})}function zt(V){return Ee||(Ee=!V,At(),Ut.list().forEach(([Y,X])=>V?X(V):Y()),Ut.reset()),V}function Ht(V,Y,X,Z){const{scrollBehavior:we}=t;if(!Wr||!we)return Promise.resolve();const v=!X&&YT(cd(V.fullPath,0))||(Z||!X)&&history.state&&history.state.scroll||null;return Lu().then(()=>we(V,Y,v)).then(T=>T&&XT(T)).catch(T=>ye(T,V,Y))}const Ue=V=>i.go(V);let He;const Hn=new Set,sn={currentRoute:u,listening:!0,addRoute:_,removeRoute:L,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:D,resolve:U,options:t,push:F,replace:ce,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:s.add,beforeResolve:o.add,afterEach:l.add,onError:Ke.add,isReady:Dt,install(V){const Y=this;V.component("RouterLink",EE),V.component("RouterView",AE),V.config.globalProperties.$router=Y,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>ei(u)}),Wr&&!He&&u.value===Gn&&(He=!0,F(i.location).catch(we=>{}));const X={};for(const we in Gn)Object.defineProperty(X,we,{get:()=>u.value[we],enumerable:!0});V.provide(va,Y),V.provide(Uu,yp(X)),V.provide($l,u);const Z=V.unmount;Hn.add(V),V.unmount=function(){Hn.delete(V),Hn.size<1&&(c=Gn,b&&b(),b=null,u.value=Gn,He=!1,Ee=!1),Z()}}};function St(V){return V.reduce((Y,X)=>Y.then(()=>E(X)),Promise.resolve())}return sn}function PE(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const l=e.matched[o];l&&(t.matched.find(c=>hi(c,l))?r.push(l):n.push(l));const u=t.matched[o];u&&(e.matched.find(c=>hi(c,u))||i.push(u))}return[n,r,i]}function Ta(){return Et(va)}function CE(t){return Et(Uu)}const _g="/logo.png";var Ad={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},SE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},vg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,_=c&63;u||(_=64,o||(g=64)),r.push(n[d],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):SE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new LE;const g=s<<2|l>>4;if(r.push(g),c!==64){const _=l<<4&240|c>>2;if(r.push(_),p!==64){const L=c<<6&192|p;r.push(L)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class LE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kE=function(t){const e=yg(t);return vg.encodeByteArray(e,!0)},qo=function(t){return kE(t).replace(/\./g,"")},Tg=function(t){try{return vg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=()=>DE().__FIREBASE_DEFAULTS__,NE=()=>{if(typeof process>"u"||typeof Ad>"u")return;const t=Ad.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},OE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Tg(t[1]);return e&&JSON.parse(e)},Ea=()=>{try{return xE()||NE()||OE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Eg=t=>{var e,n;return(n=(e=Ea())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},VE=t=>{const e=Eg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},bg=()=>{var t;return(t=Ea())===null||t===void 0?void 0:t.config},Ig=t=>{var e;return(e=Ea())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[qo(JSON.stringify(n)),qo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function UE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function HE(){var t;const e=(t=Ea())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function BE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $E(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qE(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function GE(){return!HE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function KE(){try{return typeof indexedDB=="object"}catch{return!1}}function WE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE="FirebaseError";class Fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zE,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ms.prototype.create)}}class Ms{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?XE(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Fn(i,l,r)}}function XE(t,e){return t.replace(QE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const QE=/\{\$([^}]+)}/g;function YE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Go(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Rd(s)&&Rd(o)){if(!Go(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Rd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Wi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function zi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function JE(t,e){const n=new ZE(t,e);return n.subscribe.bind(n)}class ZE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=yl),i.error===void 0&&(i.error=yl),i.complete===void 0&&(i.complete=yl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(t){return t&&t._delegate?t._delegate:t}class Lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ME;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rb(e))try{this.getOrInitializeService({instanceIdentifier:Ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ir){return this.instances.has(e)}getOptions(e=Ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ir){return this.component?this.component.multipleInstances?e:Ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nb(t){return t===Ir?void 0:t}function rb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const sb={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},ob=Te.INFO,ab={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},lb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ab[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hu{constructor(e){this.name=e,this._logLevel=ob,this._logHandler=lb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const ub=(t,e)=>e.some(n=>t instanceof n);let Pd,Cd;function cb(){return Pd||(Pd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hb(){return Cd||(Cd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wg=new WeakMap,ql=new WeakMap,Ag=new WeakMap,vl=new WeakMap,ju=new WeakMap;function db(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(nr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wg.set(n,t)}).catch(()=>{}),ju.set(e,t),e}function fb(t){if(ql.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ql.set(t,e)}let Gl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ql.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ag.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pb(t){Gl=t(Gl)}function gb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tl(this),e,...n);return Ag.set(r,e.sort?e.sort():[e]),nr(r)}:hb().includes(t)?function(...e){return t.apply(Tl(this),e),nr(wg.get(this))}:function(...e){return nr(t.apply(Tl(this),e))}}function mb(t){return typeof t=="function"?gb(t):(t instanceof IDBTransaction&&fb(t),ub(t,cb())?new Proxy(t,Gl):t)}function nr(t){if(t instanceof IDBRequest)return db(t);if(vl.has(t))return vl.get(t);const e=mb(t);return e!==t&&(vl.set(t,e),ju.set(e,t)),e}const Tl=t=>ju.get(t);function _b(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=nr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(nr(o.result),u.oldVersion,u.newVersion,nr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const yb=["get","getKey","getAll","getAllKeys","count"],vb=["put","add","delete","clear"],El=new Map;function Sd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(El.get(e))return El.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=vb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||yb.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return El.set(e,s),s}pb(t=>({...t,get:(e,n,r)=>Sd(e,n)||t.get(e,n,r),has:(e,n)=>!!Sd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Eb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Eb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kl="@firebase/app",Ld="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new Hu("@firebase/app"),bb="@firebase/app-compat",Ib="@firebase/analytics-compat",wb="@firebase/analytics",Ab="@firebase/app-check-compat",Rb="@firebase/app-check",Pb="@firebase/auth",Cb="@firebase/auth-compat",Sb="@firebase/database",Lb="@firebase/data-connect",kb="@firebase/database-compat",Db="@firebase/functions",xb="@firebase/functions-compat",Nb="@firebase/installations",Ob="@firebase/installations-compat",Vb="@firebase/messaging",Mb="@firebase/messaging-compat",Fb="@firebase/performance",Ub="@firebase/performance-compat",Hb="@firebase/remote-config",jb="@firebase/remote-config-compat",Bb="@firebase/storage",$b="@firebase/storage-compat",qb="@firebase/firestore",Gb="@firebase/vertexai-preview",Kb="@firebase/firestore-compat",Wb="firebase",zb="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl="[DEFAULT]",Xb={[Kl]:"fire-core",[bb]:"fire-core-compat",[wb]:"fire-analytics",[Ib]:"fire-analytics-compat",[Rb]:"fire-app-check",[Ab]:"fire-app-check-compat",[Pb]:"fire-auth",[Cb]:"fire-auth-compat",[Sb]:"fire-rtdb",[Lb]:"fire-data-connect",[kb]:"fire-rtdb-compat",[Db]:"fire-fn",[xb]:"fire-fn-compat",[Nb]:"fire-iid",[Ob]:"fire-iid-compat",[Vb]:"fire-fcm",[Mb]:"fire-fcm-compat",[Fb]:"fire-perf",[Ub]:"fire-perf-compat",[Hb]:"fire-rc",[jb]:"fire-rc-compat",[Bb]:"fire-gcs",[$b]:"fire-gcs-compat",[qb]:"fire-fst",[Kb]:"fire-fst-compat",[Gb]:"fire-vertex","fire-js":"fire-js",[Wb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new Map,Qb=new Map,zl=new Map;function kd(t,e){try{t.container.addComponent(e)}catch(n){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fi(t){const e=t.name;if(zl.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;zl.set(e,t);for(const n of Is.values())kd(n,t);for(const n of Qb.values())kd(n,t);return!0}function Bu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rr=new Ms("app","Firebase",Yb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=zb;function Rg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Wl,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw rr.create("bad-app-name",{appName:String(i)});if(n||(n=bg()),!n)throw rr.create("no-options");const s=Is.get(i);if(s){if(Go(n,s.options)&&Go(r,s.config))return s;throw rr.create("duplicate-app",{appName:i})}const o=new ib(i);for(const u of zl.values())o.addComponent(u);const l=new Jb(n,r,o);return Is.set(i,l),l}function Pg(t=Wl){const e=Is.get(t);if(!e&&t===Wl&&bg())return Rg();if(!e)throw rr.create("no-app",{appName:t});return e}function Dd(){return Array.from(Is.values())}function ir(t,e,n){var r;let i=(r=Xb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(l.join(" "));return}fi(new Lr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb="firebase-heartbeat-database",eI=1,ws="firebase-heartbeat-store";let bl=null;function Cg(){return bl||(bl=_b(Zb,eI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ws)}catch(n){console.warn(n)}}}}).catch(t=>{throw rr.create("idb-open",{originalErrorMessage:t.message})})),bl}async function tI(t){try{const n=(await Cg()).transaction(ws),r=await n.objectStore(ws).get(Sg(t));return await n.done,r}catch(e){if(e instanceof Fn)kn.warn(e.message);else{const n=rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(n.message)}}}async function xd(t,e){try{const r=(await Cg()).transaction(ws,"readwrite");await r.objectStore(ws).put(e,Sg(t)),await r.done}catch(n){if(n instanceof Fn)kn.warn(n.message);else{const r=rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kn.warn(r.message)}}}function Sg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=1024,rI=30*24*60*60*1e3;class iI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Nd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=rI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){kn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Nd(),{heartbeatsToSend:r,unsentEntries:i}=sI(this._heartbeatsCache.heartbeats),s=qo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return kn.warn(n),""}}}function Nd(){return new Date().toISOString().substring(0,10)}function sI(t,e=nI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Od(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Od(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class oI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return KE()?WE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Od(t){return qo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(t){fi(new Lr("platform-logger",e=>new Tb(e),"PRIVATE")),fi(new Lr("heartbeat",e=>new iI(e),"PRIVATE")),ir(Kl,Ld,t),ir(Kl,Ld,"esm2017"),ir("fire-js","")}aI("");function $u(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Lg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lI=Lg,kg=new Ms("auth","Firebase",Lg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=new Hu("@firebase/auth");function uI(t,...e){Ko.logLevel<=Te.WARN&&Ko.warn(`Auth (${Ii}): ${t}`,...e)}function Ro(t,...e){Ko.logLevel<=Te.ERROR&&Ko.error(`Auth (${Ii}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,...e){throw Gu(t,...e)}function Zt(t,...e){return Gu(t,...e)}function qu(t,e,n){const r=Object.assign(Object.assign({},lI()),{[e]:n});return new Ms("auth","Firebase",r).create(e,{appName:t.name})}function Sn(t){return qu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Kt(t,"argument-error"),qu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Gu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return kg.create(t,...e)}function le(t,e,...n){if(!t)throw Gu(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ro(e),new Error(e)}function Dn(t,e){t||An(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function hI(){return Vd()==="http:"||Vd()==="https:"}function Vd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hI()||BE()||"connection"in navigator)?navigator.onLine:!0}function fI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dn(n>e,"Short delay should be less than long delay!"),this.isMobile=UE()||$E()}get(){return dI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(t,e){Dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI=new Us(3e4,6e4);function fr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Un(t,e,n,r,i={}){return xg(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Fs(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return jE()||(c.referrerPolicy="no-referrer"),Dg.fetch()(Ng(t,t.config.apiHost,n,l),c)})}async function xg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},pI),e);try{const i=new _I(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _o(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw _o(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw _o(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw _o(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw qu(t,d,c);Kt(t,d)}}catch(i){if(i instanceof Fn)throw i;Kt(t,"network-request-failed",{message:String(i)})}}async function Hs(t,e,n,r,i={}){const s=await Un(t,e,n,r,i);return"mfaPendingCredential"in s&&Kt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ng(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ku(t.config,i):`${t.config.apiScheme}://${i}`}function mI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _I{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Zt(this.auth,"network-request-failed")),gI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _o(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Zt(t,e,r);return i.customData._tokenResponse=n,i}function Md(t){return t!==void 0&&t.enterprise!==void 0}class yI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return mI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function vI(t,e){return Un(t,"GET","/v2/recaptchaConfig",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TI(t,e){return Un(t,"POST","/v1/accounts:delete",e)}async function Og(t,e){return Un(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function EI(t,e=!1){const n=Xe(t),r=await n.getIdToken(e),i=Wu(r);le(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:as(Il(i.auth_time)),issuedAtTime:as(Il(i.iat)),expirationTime:as(Il(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Il(t){return Number(t)*1e3}function Wu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ro("JWT malformed, contained fewer than 3 sections"),null;try{const i=Tg(n);return i?JSON.parse(i):(Ro("Failed to decode base64 JWT payload"),null)}catch(i){return Ro("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Fd(t){const e=Wu(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fn&&bI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function bI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=as(this.lastLoginAt),this.creationTime=as(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await pi(t,Og(n,{idToken:r}));le(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Vg(s.providerUserInfo):[],l=AI(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Ql(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function wI(t){const e=Xe(t);await Wo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Vg(t){return t.map(e=>{var{providerId:n}=e,r=$u(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RI(t,e){const n=await xg(t,{},async()=>{const r=Fs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ng(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Dg.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function PI(t,e){return Un(t,"POST","/v2/accounts:revokeToken",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=Fd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await RI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new si;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(le(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(le(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new si,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=$u(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new II(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ql(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await pi(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return EI(this,e)}reload(){return wI(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Rn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Wo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qt(this.auth.app))return Promise.reject(Sn(this.auth));const e=await this.getIdToken();return await pi(this,TI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,L=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,k=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,U=(c=n.createdAt)!==null&&c!==void 0?c:void 0,N=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:O,emailVerified:F,isAnonymous:ce,providerData:me,stsTokenManager:I}=n;le(O&&I,e,"internal-error");const y=si.fromJSON(this.name,I);le(typeof O=="string",e,"internal-error"),Kn(p,e.name),Kn(g,e.name),le(typeof F=="boolean",e,"internal-error"),le(typeof ce=="boolean",e,"internal-error"),Kn(_,e.name),Kn(L,e.name),Kn(D,e.name),Kn(k,e.name),Kn(U,e.name),Kn(N,e.name);const E=new Rn({uid:O,auth:e,email:g,emailVerified:F,displayName:p,isAnonymous:ce,photoURL:L,phoneNumber:_,tenantId:D,stsTokenManager:y,createdAt:U,lastLoginAt:N});return me&&Array.isArray(me)&&(E.providerData=me.map(w=>Object.assign({},w))),k&&(E._redirectEventId=k),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new si;i.updateFromServerResponse(n);const s=new Rn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Wo(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];le(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Vg(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new si;l.updateFromIdToken(r);const u=new Rn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ql(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud=new Map;function Pn(t){Dn(t instanceof Function,"Expected a class definition");let e=Ud.get(t);return e?(Dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ud.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Mg.type="NONE";const Hd=Mg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t,e,n){return`firebase:${t}:${e}:${n}`}class oi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Po(this.userKey,i.apiKey,s),this.fullPersistenceKey=Po("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Rn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new oi(Pn(Hd),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Pn(Hd);const o=Po(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const p=Rn._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new oi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new oi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($g(e))return"Blackberry";if(qg(e))return"Webos";if(Ug(e))return"Safari";if((e.includes("chrome/")||Hg(e))&&!e.includes("edge/"))return"Chrome";if(Bg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Fg(t=wt()){return/firefox\//i.test(t)}function Ug(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hg(t=wt()){return/crios\//i.test(t)}function jg(t=wt()){return/iemobile/i.test(t)}function Bg(t=wt()){return/android/i.test(t)}function $g(t=wt()){return/blackberry/i.test(t)}function qg(t=wt()){return/webos/i.test(t)}function zu(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function CI(t=wt()){var e;return zu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function SI(){return qE()&&document.documentMode===10}function Gg(t=wt()){return zu(t)||Bg(t)||qg(t)||$g(t)||/windows phone/i.test(t)||jg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(t,e=[]){let n;switch(t){case"Browser":n=jd(wt());break;case"Worker":n=`${jd(wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ii}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kI(t,e={}){return Un(t,"GET","/v2/passwordPolicy",fr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=6;class xI{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:DI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bd(this),this.idTokenSubscription=new Bd(this),this.beforeStateQueue=new LI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await oi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Og(this,{idToken:e}),r=await Rn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Qt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qt(this.app))return Promise.reject(Sn(this));const n=e?Xe(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qt(this.app)?Promise.reject(Sn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qt(this.app)?Promise.reject(Sn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kI(this),n=new xI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ms("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await PI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pn(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await oi.create(this,[Pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&uI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function pr(t){return Xe(t)}class Bd{constructor(e){this.auth=e,this.observer=null,this.addObserver=JE(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ba={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function OI(t){ba=t}function Wg(t){return ba.loadJS(t)}function VI(){return ba.recaptchaEnterpriseScript}function MI(){return ba.gapiScript}function FI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const UI="recaptcha-enterprise",HI="NO_RECAPTCHA";class jI{constructor(e){this.type=UI,this.auth=pr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{vI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new yI(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Md(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(HI)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Md(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=VI();u.length!==0&&(u+=l),Wg(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function $d(t,e,n,r=!1){const i=new jI(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Yl(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await $d(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await $d(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(t,e){const n=Bu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Go(s,e??{}))return i;Kt(i,"already-initialized")}return n.initialize({options:e})}function $I(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function qI(t,e,n){const r=pr(t);le(r._canInitEmulator,r,"emulator-config-failed"),le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=zg(e),{host:o,port:l}=GI(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),KI()}function zg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function GI(t){const e=zg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:qd(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:qd(o)}}}function qd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function KI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}async function WI(t,e){return Un(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zI(t,e){return Hs(t,"POST","/v1/accounts:signInWithPassword",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XI(t,e){return Hs(t,"POST","/v1/accounts:signInWithEmailLink",fr(t,e))}async function QI(t,e){return Hs(t,"POST","/v1/accounts:signInWithEmailLink",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As extends Xu{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new As(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new As(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yl(e,n,"signInWithPassword",zI);case"emailLink":return XI(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yl(e,r,"signUpPassword",WI);case"emailLink":return QI(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ai(t,e){return Hs(t,"POST","/v1/accounts:signInWithIdp",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI="http://localhost";class xn extends Xu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=$u(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new xn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ai(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ai(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ai(e,n)}buildRequest(){const e={requestUri:YI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ZI(t){const e=Wi(zi(t)).link,n=e?Wi(zi(e)).deep_link_id:null,r=Wi(zi(t)).deep_link_id;return(r?Wi(zi(r)).link:null)||r||n||e||t}class Qu{constructor(e){var n,r,i,s,o,l;const u=Wi(zi(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=JI((i=u.mode)!==null&&i!==void 0?i:null);le(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=ZI(e);try{return new Qu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){this.providerId=wi.PROVIDER_ID}static credential(e,n){return As._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Qu.parseLink(n);return le(r,"argument-error"),As._fromEmailAndCode(e,r.code,r.tenantId)}}wi.PROVIDER_ID="password";wi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends Yu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ls extends Ai{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return le("providerId"in n&&"signInMethod"in n,"argument-error"),xn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return le(e.idToken||e.accessToken,"argument-error"),xn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ls.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ls.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:l}=e;if(!r&&!i&&!n&&!s||!l)return null;try{return new ls(l)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Ai{constructor(){super("facebook.com")}static credential(e){return xn._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends Ai{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return un.credential(n,r)}catch{return null}}}un.GOOGLE_SIGN_IN_METHOD="google.com";un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Ai{constructor(){super("github.com")}static credential(e){return xn._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Ai{constructor(){super("twitter.com")}static credential(e,n){return xn._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ew(t,e){return Hs(t,"POST","/v1/accounts:signUp",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Rn._fromIdTokenResponse(e,r,i),o=Gd(r);return new kr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Gd(r);return new kr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Gd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo extends Fn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,zo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new zo(e,n,r,i)}}function Xg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?zo._fromErrorAndOperation(t,s,e,r):s})}async function tw(t,e,n=!1){const r=await pi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return kr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nw(t,e,n=!1){const{auth:r}=t;if(Qt(r.app))return Promise.reject(Sn(r));const i="reauthenticate";try{const s=await pi(t,Xg(r,i,e,t),n);le(s.idToken,r,"internal-error");const o=Wu(s.idToken);le(o,r,"internal-error");const{sub:l}=o;return le(t.uid===l,r,"user-mismatch"),kr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qg(t,e,n=!1){if(Qt(t.app))return Promise.reject(Sn(t));const r="signIn",i=await Xg(t,r,e),s=await kr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function rw(t,e){return Qg(pr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yg(t){const e=pr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Jg(t,e,n){if(Qt(t.app))return Promise.reject(Sn(t));const r=pr(t),o=await Yl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ew).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Yg(t),u}),l=await kr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Zg(t,e,n){return Qt(t.app)?Promise.reject(Sn(t)):rw(Xe(t),wi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Yg(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iw(t,e){return Un(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sw(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Xe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await pi(r,iw(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function ow(t,e,n,r){return Xe(t).onIdTokenChanged(e,n,r)}function aw(t,e,n){return Xe(t).beforeAuthStateChanged(e,n)}function Ia(t,e,n,r){return Xe(t).onAuthStateChanged(e,n,r)}function lw(t){return Xe(t).signOut()}const Xo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xo,"1"),this.storage.removeItem(Xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=1e3,cw=10;class tm extends em{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Gg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);SI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cw):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tm.type="LOCAL";const hw=tm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm extends em{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nm.type="SESSION";const rm=nm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new wa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await dw(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Ju("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return window}function pw(t){dn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function gw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _w(){return im()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm="firebaseLocalStorageDb",yw=1,Qo="firebaseLocalStorage",om="fbase_key";class js{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Aa(t,e){return t.transaction([Qo],e?"readwrite":"readonly").objectStore(Qo)}function vw(){const t=indexedDB.deleteDatabase(sm);return new js(t).toPromise()}function Jl(){const t=indexedDB.open(sm,yw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qo,{keyPath:om})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qo)?e(r):(r.close(),await vw(),e(await Jl()))})})}async function Kd(t,e,n){const r=Aa(t,!0).put({[om]:e,value:n});return new js(r).toPromise()}async function Tw(t,e){const n=Aa(t,!1).get(e),r=await new js(n).toPromise();return r===void 0?null:r.value}function Wd(t,e){const n=Aa(t,!0).delete(e);return new js(n).toPromise()}const Ew=800,bw=3;class am{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>bw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return im()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wa._getInstance(_w()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await gw(),!this.activeServiceWorker)return;this.sender=new fw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jl();return await Kd(e,Xo,"1"),await Wd(e,Xo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Tw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Aa(i,!1).getAll();return new js(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ew)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}am.type="LOCAL";const Iw=am;new Us(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t,e){return e?Pn(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu extends Xu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ai(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ai(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ai(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ww(t){return Qg(t.auth,new Zu(t),t.bypassAuthState)}function Aw(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),nw(n,new Zu(t),t.bypassAuthState)}async function Rw(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),tw(n,new Zu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ww;case"linkViaPopup":case"linkViaRedirect":return Rw;case"reauthViaPopup":case"reauthViaRedirect":return Aw;default:Kt(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=new Us(2e3,1e4);async function Zl(t,e,n){if(Qt(t.app))return Promise.reject(Zt(t,"operation-not-supported-in-this-environment"));const r=pr(t);cI(t,e,Yu);const i=lm(r,n);return new wr(r,"signInViaPopup",e,i).executeNotNull()}class wr extends um{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,wr.currentPopupAction&&wr.currentPopupAction.cancel(),wr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=Ju();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Pw.get())};e()}}wr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw="pendingRedirect",Co=new Map;class Sw extends um{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Co.get(this.auth._key());if(!e){try{const r=await Lw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Co.set(this.auth._key(),e)}return this.bypassAuthState||Co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Lw(t,e){const n=xw(e),r=Dw(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function kw(t,e){Co.set(t._key(),e)}function Dw(t){return Pn(t._redirectPersistence)}function xw(t){return Po(Cw,t.config.apiKey,t.name)}async function Nw(t,e,n=!1){if(Qt(t.app))return Promise.reject(Sn(t));const r=pr(t),i=lm(r,e),o=await new Sw(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow=10*60*1e3;class Vw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Mw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!cm(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Zt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ow&&this.cachedEventUids.clear(),this.cachedEventUids.has(zd(e))}saveEventToCache(e){this.cachedEventUids.add(zd(e)),this.lastProcessedEventTime=Date.now()}}function zd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function cm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Mw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fw(t,e={}){return Un(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hw=/^https?/;async function jw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Fw(t);for(const n of e)try{if(Bw(n))return}catch{}Kt(t,"unauthorized-domain")}function Bw(t){const e=Xl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Hw.test(n))return!1;if(Uw.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=new Us(3e4,6e4);function Xd(){const t=dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qw(t){return new Promise((e,n)=>{var r,i,s;function o(){Xd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xd(),n(Zt(t,"network-request-failed"))},timeout:$w.get()})}if(!((i=(r=dn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=dn().gapi)===null||s===void 0)&&s.load)o();else{const l=FI("iframefcb");return dn()[l]=()=>{gapi.load?o():n(Zt(t,"network-request-failed"))},Wg(`${MI()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw So=null,e})}let So=null;function Gw(t){return So=So||qw(t),So}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=new Us(5e3,15e3),Ww="__/auth/iframe",zw="emulator/auth/iframe",Xw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yw(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ku(e,zw):`https://${t.config.authDomain}/${Ww}`,r={apiKey:e.apiKey,appName:t.name,v:Ii},i=Qw.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Fs(r).slice(1)}`}async function Jw(t){const e=await Gw(t),n=dn().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:Yw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xw,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Zt(t,"network-request-failed"),l=dn().setTimeout(()=>{s(o)},Kw.get());function u(){dn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eA=500,tA=600,nA="_blank",rA="http://localhost";class Qd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iA(t,e,n,r=eA,i=tA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Zw),{width:r.toString(),height:i.toString(),top:s,left:o}),c=wt().toLowerCase();n&&(l=Hg(c)?nA:n),Fg(c)&&(e=e||rA,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[_,L])=>`${g}${_}=${L},`,"");if(CI(c)&&l!=="_self")return sA(e||"",l),new Qd(null);const p=window.open(e||"",l,d);le(p,t,"popup-blocked");try{p.focus()}catch{}return new Qd(p)}function sA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA="__/auth/handler",aA="emulator/auth/handler",lA=encodeURIComponent("fac");async function Yd(t,e,n,r,i,s){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ii,eventId:i};if(e instanceof Yu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",YE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Ai){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${lA}=${encodeURIComponent(u)}`:"";return`${uA(t)}?${Fs(l).slice(1)}${c}`}function uA({config:t}){return t.emulator?Ku(t,aA):`https://${t.authDomain}/${oA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl="webStorageSupport";class cA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rm,this._completeRedirectFn=Nw,this._overrideRedirectResult=kw}async _openPopup(e,n,r,i){var s;Dn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Yd(e,n,r,Xl(),i);return iA(e,o,Ju())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Yd(e,n,r,Xl(),i);return pw(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Dn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Jw(e),r=new Vw(e);return n.register("authEvent",i=>(le(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wl,{type:wl},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[wl];o!==void 0&&n(!!o),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Gg()||Ug()||zu()}}const hA=cA;var Jd="@firebase/auth",Zd="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pA(t){fi(new Lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kg(t)},c=new NI(r,i,s,u);return $I(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fi(new Lr("auth-internal",e=>{const n=pr(e.getProvider("auth").getImmediate());return(r=>new dA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ir(Jd,Zd,fA(t)),ir(Jd,Zd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA=5*60,mA=Ig("authIdTokenMaxAge")||gA;let ef=null;const _A=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mA)return;const i=n==null?void 0:n.token;ef!==i&&(ef=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function en(t=Pg()){const e=Bu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=BI(t,{popupRedirectResolver:hA,persistence:[Iw,hw,rm]}),r=Ig("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=_A(s.toString());aw(n,o,()=>o(n.currentUser)),ow(n,l=>o(l))}}const i=Eg("auth");return i&&qI(n,`http://${i}`),n}function yA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}OI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Zt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",yA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pA("Browser");var vA="firebase",TA="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ir(vA,TA,"app");var tf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pr,hm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function E(){}E.prototype=y.prototype,I.D=y.prototype,I.prototype=new E,I.prototype.constructor=I,I.C=function(w,A,C){for(var b=Array(arguments.length-2),At=2;At<arguments.length;At++)b[At-2]=arguments[At];return y.prototype[A].apply(w,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,y,E){E||(E=0);var w=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)w[A]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(A=0;16>A;++A)w[A]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=I.g[0],E=I.g[1],A=I.g[2];var C=I.g[3],b=y+(C^E&(A^C))+w[0]+3614090360&4294967295;y=E+(b<<7&4294967295|b>>>25),b=C+(A^y&(E^A))+w[1]+3905402710&4294967295,C=y+(b<<12&4294967295|b>>>20),b=A+(E^C&(y^E))+w[2]+606105819&4294967295,A=C+(b<<17&4294967295|b>>>15),b=E+(y^A&(C^y))+w[3]+3250441966&4294967295,E=A+(b<<22&4294967295|b>>>10),b=y+(C^E&(A^C))+w[4]+4118548399&4294967295,y=E+(b<<7&4294967295|b>>>25),b=C+(A^y&(E^A))+w[5]+1200080426&4294967295,C=y+(b<<12&4294967295|b>>>20),b=A+(E^C&(y^E))+w[6]+2821735955&4294967295,A=C+(b<<17&4294967295|b>>>15),b=E+(y^A&(C^y))+w[7]+4249261313&4294967295,E=A+(b<<22&4294967295|b>>>10),b=y+(C^E&(A^C))+w[8]+1770035416&4294967295,y=E+(b<<7&4294967295|b>>>25),b=C+(A^y&(E^A))+w[9]+2336552879&4294967295,C=y+(b<<12&4294967295|b>>>20),b=A+(E^C&(y^E))+w[10]+4294925233&4294967295,A=C+(b<<17&4294967295|b>>>15),b=E+(y^A&(C^y))+w[11]+2304563134&4294967295,E=A+(b<<22&4294967295|b>>>10),b=y+(C^E&(A^C))+w[12]+1804603682&4294967295,y=E+(b<<7&4294967295|b>>>25),b=C+(A^y&(E^A))+w[13]+4254626195&4294967295,C=y+(b<<12&4294967295|b>>>20),b=A+(E^C&(y^E))+w[14]+2792965006&4294967295,A=C+(b<<17&4294967295|b>>>15),b=E+(y^A&(C^y))+w[15]+1236535329&4294967295,E=A+(b<<22&4294967295|b>>>10),b=y+(A^C&(E^A))+w[1]+4129170786&4294967295,y=E+(b<<5&4294967295|b>>>27),b=C+(E^A&(y^E))+w[6]+3225465664&4294967295,C=y+(b<<9&4294967295|b>>>23),b=A+(y^E&(C^y))+w[11]+643717713&4294967295,A=C+(b<<14&4294967295|b>>>18),b=E+(C^y&(A^C))+w[0]+3921069994&4294967295,E=A+(b<<20&4294967295|b>>>12),b=y+(A^C&(E^A))+w[5]+3593408605&4294967295,y=E+(b<<5&4294967295|b>>>27),b=C+(E^A&(y^E))+w[10]+38016083&4294967295,C=y+(b<<9&4294967295|b>>>23),b=A+(y^E&(C^y))+w[15]+3634488961&4294967295,A=C+(b<<14&4294967295|b>>>18),b=E+(C^y&(A^C))+w[4]+3889429448&4294967295,E=A+(b<<20&4294967295|b>>>12),b=y+(A^C&(E^A))+w[9]+568446438&4294967295,y=E+(b<<5&4294967295|b>>>27),b=C+(E^A&(y^E))+w[14]+3275163606&4294967295,C=y+(b<<9&4294967295|b>>>23),b=A+(y^E&(C^y))+w[3]+4107603335&4294967295,A=C+(b<<14&4294967295|b>>>18),b=E+(C^y&(A^C))+w[8]+1163531501&4294967295,E=A+(b<<20&4294967295|b>>>12),b=y+(A^C&(E^A))+w[13]+2850285829&4294967295,y=E+(b<<5&4294967295|b>>>27),b=C+(E^A&(y^E))+w[2]+4243563512&4294967295,C=y+(b<<9&4294967295|b>>>23),b=A+(y^E&(C^y))+w[7]+1735328473&4294967295,A=C+(b<<14&4294967295|b>>>18),b=E+(C^y&(A^C))+w[12]+2368359562&4294967295,E=A+(b<<20&4294967295|b>>>12),b=y+(E^A^C)+w[5]+4294588738&4294967295,y=E+(b<<4&4294967295|b>>>28),b=C+(y^E^A)+w[8]+2272392833&4294967295,C=y+(b<<11&4294967295|b>>>21),b=A+(C^y^E)+w[11]+1839030562&4294967295,A=C+(b<<16&4294967295|b>>>16),b=E+(A^C^y)+w[14]+4259657740&4294967295,E=A+(b<<23&4294967295|b>>>9),b=y+(E^A^C)+w[1]+2763975236&4294967295,y=E+(b<<4&4294967295|b>>>28),b=C+(y^E^A)+w[4]+1272893353&4294967295,C=y+(b<<11&4294967295|b>>>21),b=A+(C^y^E)+w[7]+4139469664&4294967295,A=C+(b<<16&4294967295|b>>>16),b=E+(A^C^y)+w[10]+3200236656&4294967295,E=A+(b<<23&4294967295|b>>>9),b=y+(E^A^C)+w[13]+681279174&4294967295,y=E+(b<<4&4294967295|b>>>28),b=C+(y^E^A)+w[0]+3936430074&4294967295,C=y+(b<<11&4294967295|b>>>21),b=A+(C^y^E)+w[3]+3572445317&4294967295,A=C+(b<<16&4294967295|b>>>16),b=E+(A^C^y)+w[6]+76029189&4294967295,E=A+(b<<23&4294967295|b>>>9),b=y+(E^A^C)+w[9]+3654602809&4294967295,y=E+(b<<4&4294967295|b>>>28),b=C+(y^E^A)+w[12]+3873151461&4294967295,C=y+(b<<11&4294967295|b>>>21),b=A+(C^y^E)+w[15]+530742520&4294967295,A=C+(b<<16&4294967295|b>>>16),b=E+(A^C^y)+w[2]+3299628645&4294967295,E=A+(b<<23&4294967295|b>>>9),b=y+(A^(E|~C))+w[0]+4096336452&4294967295,y=E+(b<<6&4294967295|b>>>26),b=C+(E^(y|~A))+w[7]+1126891415&4294967295,C=y+(b<<10&4294967295|b>>>22),b=A+(y^(C|~E))+w[14]+2878612391&4294967295,A=C+(b<<15&4294967295|b>>>17),b=E+(C^(A|~y))+w[5]+4237533241&4294967295,E=A+(b<<21&4294967295|b>>>11),b=y+(A^(E|~C))+w[12]+1700485571&4294967295,y=E+(b<<6&4294967295|b>>>26),b=C+(E^(y|~A))+w[3]+2399980690&4294967295,C=y+(b<<10&4294967295|b>>>22),b=A+(y^(C|~E))+w[10]+4293915773&4294967295,A=C+(b<<15&4294967295|b>>>17),b=E+(C^(A|~y))+w[1]+2240044497&4294967295,E=A+(b<<21&4294967295|b>>>11),b=y+(A^(E|~C))+w[8]+1873313359&4294967295,y=E+(b<<6&4294967295|b>>>26),b=C+(E^(y|~A))+w[15]+4264355552&4294967295,C=y+(b<<10&4294967295|b>>>22),b=A+(y^(C|~E))+w[6]+2734768916&4294967295,A=C+(b<<15&4294967295|b>>>17),b=E+(C^(A|~y))+w[13]+1309151649&4294967295,E=A+(b<<21&4294967295|b>>>11),b=y+(A^(E|~C))+w[4]+4149444226&4294967295,y=E+(b<<6&4294967295|b>>>26),b=C+(E^(y|~A))+w[11]+3174756917&4294967295,C=y+(b<<10&4294967295|b>>>22),b=A+(y^(C|~E))+w[2]+718787259&4294967295,A=C+(b<<15&4294967295|b>>>17),b=E+(C^(A|~y))+w[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(A+(b<<21&4294967295|b>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+C&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var E=y-this.blockSize,w=this.B,A=this.h,C=0;C<y;){if(A==0)for(;C<=E;)i(this,I,C),C+=this.blockSize;if(typeof I=="string"){for(;C<y;)if(w[A++]=I.charCodeAt(C++),A==this.blockSize){i(this,w),A=0;break}}else for(;C<y;)if(w[A++]=I[C++],A==this.blockSize){i(this,w),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var E=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=E&255,E/=256;for(this.u(I),I=Array(16),y=E=0;4>y;++y)for(var w=0;32>w;w+=8)I[E++]=this.g[y]>>>w&255;return I};function s(I,y){var E=l;return Object.prototype.hasOwnProperty.call(E,I)?E[I]:E[I]=y(I)}function o(I,y){this.h=y;for(var E=[],w=!0,A=I.length-1;0<=A;A--){var C=I[A]|0;w&&C==y||(E[A]=C,w=!1)}this.g=E}var l={};function u(I){return-128<=I&&128>I?s(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return k(c(-I));for(var y=[],E=1,w=0;I>=E;w++)y[w]=I/E|0,E*=4294967296;return new o(y,0)}function d(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return k(d(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(y,8)),w=p,A=0;A<I.length;A+=8){var C=Math.min(8,I.length-A),b=parseInt(I.substring(A,A+C),y);8>C?(C=c(Math.pow(y,C)),w=w.j(C).add(c(b))):(w=w.j(E),w=w.add(c(b)))}return w}var p=u(0),g=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-k(this).m();for(var I=0,y=1,E=0;E<this.g.length;E++){var w=this.i(E);I+=(0<=w?w:4294967296+w)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(L(this))return"0";if(D(this))return"-"+k(this).toString(I);for(var y=c(Math.pow(I,6)),E=this,w="";;){var A=F(E,y).g;E=U(E,A.j(y));var C=((0<E.g.length?E.g[0]:E.h)>>>0).toString(I);if(E=A,L(E))return C+w;for(;6>C.length;)C="0"+C;w=C+w}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function L(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function D(I){return I.h==-1}t.l=function(I){return I=U(this,I),D(I)?-1:L(I)?0:1};function k(I){for(var y=I.g.length,E=[],w=0;w<y;w++)E[w]=~I.g[w];return new o(E,~I.h).add(g)}t.abs=function(){return D(this)?k(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),E=[],w=0,A=0;A<=y;A++){var C=w+(this.i(A)&65535)+(I.i(A)&65535),b=(C>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);w=b>>>16,C&=65535,b&=65535,E[A]=b<<16|C}return new o(E,E[E.length-1]&-2147483648?-1:0)};function U(I,y){return I.add(k(y))}t.j=function(I){if(L(this)||L(I))return p;if(D(this))return D(I)?k(this).j(k(I)):k(k(this).j(I));if(D(I))return k(this.j(k(I)));if(0>this.l(_)&&0>I.l(_))return c(this.m()*I.m());for(var y=this.g.length+I.g.length,E=[],w=0;w<2*y;w++)E[w]=0;for(w=0;w<this.g.length;w++)for(var A=0;A<I.g.length;A++){var C=this.i(w)>>>16,b=this.i(w)&65535,At=I.i(A)>>>16,Ut=I.i(A)&65535;E[2*w+2*A]+=b*Ut,N(E,2*w+2*A),E[2*w+2*A+1]+=C*Ut,N(E,2*w+2*A+1),E[2*w+2*A+1]+=b*At,N(E,2*w+2*A+1),E[2*w+2*A+2]+=C*At,N(E,2*w+2*A+2)}for(w=0;w<y;w++)E[w]=E[2*w+1]<<16|E[2*w];for(w=y;w<2*y;w++)E[w]=0;return new o(E,0)};function N(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function O(I,y){this.g=I,this.h=y}function F(I,y){if(L(y))throw Error("division by zero");if(L(I))return new O(p,p);if(D(I))return y=F(k(I),y),new O(k(y.g),k(y.h));if(D(y))return y=F(I,k(y)),new O(k(y.g),y.h);if(30<I.g.length){if(D(I)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var E=g,w=y;0>=w.l(I);)E=ce(E),w=ce(w);var A=me(E,1),C=me(w,1);for(w=me(w,2),E=me(E,2);!L(w);){var b=C.add(w);0>=b.l(I)&&(A=A.add(E),C=b),w=me(w,1),E=me(E,1)}return y=U(I,A.j(y)),new O(A,y)}for(A=p;0<=I.l(y);){for(E=Math.max(1,Math.floor(I.m()/y.m())),w=Math.ceil(Math.log(E)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),C=c(E),b=C.j(y);D(b)||0<b.l(I);)E-=w,C=c(E),b=C.j(y);L(C)&&(C=g),A=A.add(C),I=U(I,b)}return new O(A,I)}t.A=function(I){return F(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),E=[],w=0;w<y;w++)E[w]=this.i(w)&I.i(w);return new o(E,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),E=[],w=0;w<y;w++)E[w]=this.i(w)|I.i(w);return new o(E,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),E=[],w=0;w<y;w++)E[w]=this.i(w)^I.i(w);return new o(E,this.h^I.h)};function ce(I){for(var y=I.g.length+1,E=[],w=0;w<y;w++)E[w]=I.i(w)<<1|I.i(w-1)>>>31;return new o(E,I.h)}function me(I,y){var E=y>>5;y%=32;for(var w=I.g.length-E,A=[],C=0;C<w;C++)A[C]=0<y?I.i(C+E)>>>y|I.i(C+E+1)<<32-y:I.i(C+E);return new o(A,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,hm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Pr=o}).apply(typeof tf<"u"?tf:typeof self<"u"?self:typeof window<"u"?window:{});var yo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dm,Xi,fm,Lo,eu,pm,gm,mm;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof yo=="object"&&yo];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var S=a[m];if(!(S in f))break e;f=f[S]}a=a[a.length-1],m=f[a],h=h(m),h!=m&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,m=!1,S={next:function(){if(!m&&f<a.length){var x=f++;return{value:h(x,a[x]),done:!1}}return m=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,m),a.apply(h,S)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function _(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function L(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,S,x){for(var W=Array(arguments.length-2),De=2;De<arguments.length;De++)W[De-2]=arguments[De];return h.prototype[S].apply(m,W)}}function D(a){const h=a.length;if(0<h){const f=Array(h);for(let m=0;m<h;m++)f[m]=a[m];return f}return[]}function k(a,h){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(u(m)){const S=a.length||0,x=m.length||0;a.length=S+x;for(let W=0;W<x;W++)a[S+W]=m[W]}else a.push(m)}}class U{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function N(a){return/^[\s\xa0]*$/.test(a)}function O(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function F(a){return F[" "](a),a}F[" "]=function(){};var ce=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function me(a,h,f){for(const m in a)h.call(f,a[m],m,a)}function I(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,h){let f,m;for(let S=1;S<arguments.length;S++){m=arguments[S];for(f in m)a[f]=m[f];for(let x=0;x<E.length;x++)f=E[x],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function A(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function C(a){l.setTimeout(()=>{throw a},0)}function b(){var a=Dt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class At{constructor(){this.h=this.g=null}add(h,f){const m=Ut.get();m.set(h,f),this.h?this.h.next=m:this.g=m,this.h=m}}var Ut=new U(()=>new Ke,a=>a.reset());class Ke{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,ye=!1,Dt=new At,zt=()=>{const a=l.Promise.resolve(void 0);Ee=()=>{a.then(Ht)}};var Ht=()=>{for(var a;a=b();){try{a.h.call(a.g)}catch(f){C(f)}var h=Ut;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ye=!1};function Ue(){this.s=this.s,this.C=this.C}Ue.prototype.s=!1,Ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function He(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}He.prototype.h=function(){this.defaultPrevented=!0};var Hn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function sn(a,h){if(He.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(ce){e:{try{F(h.nodeName);var S=!0;break e}catch{}S=!1}S||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:St[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&sn.aa.h.call(this)}}L(sn,He);var St={2:"touch",3:"pen",4:"mouse"};sn.prototype.h=function(){sn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),Y=0;function X(a,h,f,m,S){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!m,this.ha=S,this.key=++Y,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function we(a){this.src=a,this.g={},this.h=0}we.prototype.add=function(a,h,f,m,S){var x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);var W=T(a,h,m,S);return-1<W?(h=a[W],f||(h.fa=!1)):(h=new X(h,this.src,x,!!m,S),h.fa=f,a.push(h)),h};function v(a,h){var f=h.type;if(f in a.g){var m=a.g[f],S=Array.prototype.indexOf.call(m,h,void 0),x;(x=0<=S)&&Array.prototype.splice.call(m,S,1),x&&(Z(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function T(a,h,f,m){for(var S=0;S<a.length;++S){var x=a[S];if(!x.da&&x.listener==h&&x.capture==!!f&&x.ha==m)return S}return-1}var P="closure_lm_"+(1e6*Math.random()|0),M={};function B(a,h,f,m,S){if(Array.isArray(h)){for(var x=0;x<h.length;x++)B(a,h[x],f,m,S);return null}return f=he(f),a&&a[V]?a.K(h,f,c(m)?!!m.capture:!1,S):H(a,h,f,!1,m,S)}function H(a,h,f,m,S,x){if(!h)throw Error("Invalid event type");var W=c(S)?!!S.capture:!!S,De=Q(a);if(De||(a[P]=De=new we(a)),f=De.add(h,f,m,W,x),f.proxy)return f;if(m=z(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)Hn||(S=W),S===void 0&&(S=!1),a.addEventListener(h.toString(),m,S);else if(a.attachEvent)a.attachEvent(q(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function z(){function a(f){return h.call(a.src,a.listener,f)}const h=se;return a}function K(a,h,f,m,S){if(Array.isArray(h))for(var x=0;x<h.length;x++)K(a,h[x],f,m,S);else m=c(m)?!!m.capture:!!m,f=he(f),a&&a[V]?(a=a.i,h=String(h).toString(),h in a.g&&(x=a.g[h],f=T(x,f,m,S),-1<f&&(Z(x[f]),Array.prototype.splice.call(x,f,1),x.length==0&&(delete a.g[h],a.h--)))):a&&(a=Q(a))&&(h=a.g[h.toString()],a=-1,h&&(a=T(h,f,m,S)),(f=-1<a?h[a]:null)&&G(f))}function G(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[V])v(h.i,a);else{var f=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(f,m,a.capture):h.detachEvent?h.detachEvent(q(f),m):h.addListener&&h.removeListener&&h.removeListener(m),(f=Q(h))?(v(f,a),f.h==0&&(f.src=null,h[P]=null)):Z(a)}}}function q(a){return a in M?M[a]:M[a]="on"+a}function se(a,h){if(a.da)a=!0;else{h=new sn(h,this);var f=a.listener,m=a.ha||a.src;a.fa&&G(a),a=f.call(m,h)}return a}function Q(a){return a=a[P],a instanceof we?a:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function he(a){return typeof a=="function"?a:(a[te]||(a[te]=function(h){return a.handleEvent(h)}),a[te])}function oe(){Ue.call(this),this.i=new we(this),this.M=this,this.F=null}L(oe,Ue),oe.prototype[V]=!0,oe.prototype.removeEventListener=function(a,h,f,m){K(this,a,h,f,m)};function _e(a,h){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new He(h,a);else if(h instanceof He)h.target=h.target||a;else{var S=h;h=new He(m,a),w(h,S)}if(S=!0,f)for(var x=f.length-1;0<=x;x--){var W=h.g=f[x];S=be(W,m,!0,h)&&S}if(W=h.g=a,S=be(W,m,!0,h)&&S,S=be(W,m,!1,h)&&S,f)for(x=0;x<f.length;x++)W=h.g=f[x],S=be(W,m,!1,h)&&S}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],m=0;m<f.length;m++)Z(f[m]);delete a.g[h],a.h--}}this.F=null},oe.prototype.K=function(a,h,f,m){return this.i.add(String(a),h,!1,f,m)},oe.prototype.L=function(a,h,f,m){return this.i.add(String(a),h,!0,f,m)};function be(a,h,f,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var S=!0,x=0;x<h.length;++x){var W=h[x];if(W&&!W.da&&W.capture==f){var De=W.listener,nt=W.ha||W.src;W.fa&&v(a.i,W),S=De.call(nt,m)!==!1&&S}}return S&&!m.defaultPrevented}function ct(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function et(a){a.g=ct(()=>{a.g=null,a.i&&(a.i=!1,et(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class jt extends Ue{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:et(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ht(a){Ue.call(this),this.h=a,this.g={}}L(ht,Ue);var jn=[];function Si(a){me(a.g,function(h,f){this.g.hasOwnProperty(f)&&G(h)},a),a.g={}}ht.prototype.N=function(){ht.aa.N.call(this),Si(this)},ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tt=l.JSON.stringify,Bt=l.JSON.parse,Ys=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ga(){}Ga.prototype.h=null;function Uc(a){return a.h||(a.h=a.i())}function Hc(){}var Li={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ka(){He.call(this,"d")}L(Ka,He);function Wa(){He.call(this,"c")}L(Wa,He);var mr={},jc=null;function Js(){return jc=jc||new oe}mr.La="serverreachability";function Bc(a){He.call(this,mr.La,a)}L(Bc,He);function ki(a){const h=Js();_e(h,new Bc(h))}mr.STAT_EVENT="statevent";function $c(a,h){He.call(this,mr.STAT_EVENT,a),this.stat=h}L($c,He);function Rt(a){const h=Js();_e(h,new $c(h,a))}mr.Ma="timingevent";function qc(a,h){He.call(this,mr.Ma,a),this.size=h}L(qc,He);function Di(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function xi(){this.g=!0}xi.prototype.xa=function(){this.g=!1};function N_(a,h,f,m,S,x){a.info(function(){if(a.g)if(x)for(var W="",De=x.split("&"),nt=0;nt<De.length;nt++){var Ae=De[nt].split("=");if(1<Ae.length){var dt=Ae[0];Ae=Ae[1];var ft=dt.split("_");W=2<=ft.length&&ft[1]=="type"?W+(dt+"="+Ae+"&"):W+(dt+"=redacted&")}}else W=null;else W=x;return"XMLHTTP REQ ("+m+") [attempt "+S+"]: "+h+`
`+f+`
`+W})}function O_(a,h,f,m,S,x,W){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+S+"]: "+h+`
`+f+`
`+x+" "+W})}function jr(a,h,f,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+M_(a,f)+(m?" "+m:"")})}function V_(a,h){a.info(function(){return"TIMEOUT: "+h})}xi.prototype.info=function(){};function M_(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var S=m[1];if(Array.isArray(S)&&!(1>S.length)){var x=S[0];if(x!="noop"&&x!="stop"&&x!="close")for(var W=1;W<S.length;W++)S[W]=""}}}}return tt(f)}catch{return h}}var Zs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},za;function eo(){}L(eo,Ga),eo.prototype.g=function(){return new XMLHttpRequest},eo.prototype.i=function(){return{}},za=new eo;function Bn(a,h,f,m){this.j=a,this.i=h,this.l=f,this.R=m||1,this.U=new ht(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Kc}function Kc(){this.i=null,this.g="",this.h=!1}var Wc={},Xa={};function Qa(a,h,f){a.L=1,a.v=io(_n(h)),a.m=f,a.P=!0,zc(a,null)}function zc(a,h){a.F=Date.now(),to(a),a.A=_n(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),lh(f.i,"t",m),a.C=0,f=a.j.J,a.h=new Kc,a.g=Rh(a.j,f?h:null,!a.m),0<a.O&&(a.M=new jt(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,m=a.ca;var S="readystatechange";Array.isArray(S)||(S&&(jn[0]=S.toString()),S=jn);for(var x=0;x<S.length;x++){var W=B(f,S[x],m||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ki(),N_(a.i,a.u,a.A,a.l,a.R,a.m)}Bn.prototype.ca=function(a){a=a.target;const h=this.M;h&&yn(a)==3?h.j():this.Y(a)},Bn.prototype.Y=function(a){try{if(a==this.g)e:{const ft=yn(this.g);var h=this.g.Ba();const qr=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||gh(this.g)))){this.J||ft!=4||h==7||(h==8||0>=qr?ki(3):ki(2)),Ya(this);var f=this.g.Z();this.X=f;t:if(Xc(this)){var m=gh(this.g);a="";var S=m.length,x=yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_r(this),Ni(this);var W="";break t}this.h.i=new l.TextDecoder}for(h=0;h<S;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(x&&h==S-1)});m.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=f==200,O_(this.i,this.u,this.A,this.l,this.R,ft,f),this.o){if(this.T&&!this.K){t:{if(this.g){var De,nt=this.g;if((De=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(De)){var Ae=De;break t}}Ae=null}if(f=Ae)jr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ja(this,f);else{this.o=!1,this.s=3,Rt(12),_r(this),Ni(this);break e}}if(this.P){f=!0;let Xt;for(;!this.J&&this.C<W.length;)if(Xt=F_(this,W),Xt==Xa){ft==4&&(this.s=4,Rt(14),f=!1),jr(this.i,this.l,null,"[Incomplete Response]");break}else if(Xt==Wc){this.s=4,Rt(15),jr(this.i,this.l,W,"[Invalid Chunk]"),f=!1;break}else jr(this.i,this.l,Xt,null),Ja(this,Xt);if(Xc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||W.length!=0||this.h.h||(this.s=1,Rt(16),f=!1),this.o=this.o&&f,!f)jr(this.i,this.l,W,"[Invalid Chunked Response]"),_r(this),Ni(this);else if(0<W.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),il(dt),dt.M=!0,Rt(11))}}else jr(this.i,this.l,W,null),Ja(this,W);ft==4&&_r(this),this.o&&!this.J&&(ft==4?bh(this.j,this):(this.o=!1,to(this)))}else ty(this.g),f==400&&0<W.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),_r(this),Ni(this)}}}catch{}finally{}};function Xc(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function F_(a,h){var f=a.C,m=h.indexOf(`
`,f);return m==-1?Xa:(f=Number(h.substring(f,m)),isNaN(f)?Wc:(m+=1,m+f>h.length?Xa:(h=h.slice(m,m+f),a.C=m+f,h)))}Bn.prototype.cancel=function(){this.J=!0,_r(this)};function to(a){a.S=Date.now()+a.I,Qc(a,a.I)}function Qc(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Di(g(a.ba,a),h)}function Ya(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Bn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(V_(this.i,this.A),this.L!=2&&(ki(),Rt(17)),_r(this),this.s=2,Ni(this)):Qc(this,this.S-a)};function Ni(a){a.j.G==0||a.J||bh(a.j,a)}function _r(a){Ya(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Si(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Ja(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Za(f.h,a))){if(!a.K&&Za(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var S=m;if(S[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)co(f),lo(f);else break e;rl(f),Rt(18)}}else f.za=S[1],0<f.za-f.T&&37500>S[2]&&f.F&&f.v==0&&!f.C&&(f.C=Di(g(f.Za,f),6e3));if(1>=Zc(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else vr(f,11)}else if((a.K||f.g==a)&&co(f),!N(h))for(S=f.Da.g.parse(h),h=0;h<S.length;h++){let Ae=S[h];if(f.T=Ae[0],Ae=Ae[1],f.G==2)if(Ae[0]=="c"){f.K=Ae[1],f.ia=Ae[2];const dt=Ae[3];dt!=null&&(f.la=dt,f.j.info("VER="+f.la));const ft=Ae[4];ft!=null&&(f.Aa=ft,f.j.info("SVER="+f.Aa));const qr=Ae[5];qr!=null&&typeof qr=="number"&&0<qr&&(m=1.5*qr,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Xt=a.g;if(Xt){const fo=Xt.g?Xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fo){var x=m.h;x.g||fo.indexOf("spdy")==-1&&fo.indexOf("quic")==-1&&fo.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(el(x,x.h),x.h=null))}if(m.D){const sl=Xt.g?Xt.g.getResponseHeader("X-HTTP-Session-Id"):null;sl&&(m.ya=sl,Me(m.I,m.D,sl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var W=a;if(m.qa=Ah(m,m.J?m.ia:null,m.W),W.K){eh(m.h,W);var De=W,nt=m.L;nt&&(De.I=nt),De.B&&(Ya(De),to(De)),m.g=W}else Th(m);0<f.i.length&&uo(f)}else Ae[0]!="stop"&&Ae[0]!="close"||vr(f,7);else f.G==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?vr(f,7):nl(f):Ae[0]!="noop"&&f.l&&f.l.ta(Ae),f.v=0)}}ki(4)}catch{}}var U_=class{constructor(a,h){this.g=a,this.map=h}};function Yc(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jc(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Zc(a){return a.h?1:a.g?a.g.size:0}function Za(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function el(a,h){a.g?a.g.add(h):a.h=h}function eh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Yc.prototype.cancel=function(){if(this.i=th(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function th(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return D(a.i)}function H_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,m=0;m<f;m++)h.push(a[m]);return h}h=[],f=0;for(m in a)h[f++]=a[m];return h}function j_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const m in a)h[f++]=m;return h}}}function nh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=j_(a),m=H_(a),S=m.length,x=0;x<S;x++)h.call(void 0,m[x],f&&f[x],a)}var rh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function B_(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),S=null;if(0<=m){var x=a[f].substring(0,m);S=a[f].substring(m+1)}else x=a[f];h(x,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function yr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof yr){this.h=a.h,no(this,a.j),this.o=a.o,this.g=a.g,ro(this,a.s),this.l=a.l;var h=a.i,f=new Mi;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),ih(this,f),this.m=a.m}else a&&(h=String(a).match(rh))?(this.h=!1,no(this,h[1]||"",!0),this.o=Oi(h[2]||""),this.g=Oi(h[3]||"",!0),ro(this,h[4]),this.l=Oi(h[5]||"",!0),ih(this,h[6]||"",!0),this.m=Oi(h[7]||"")):(this.h=!1,this.i=new Mi(null,this.h))}yr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Vi(h,sh,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Vi(h,sh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Vi(f,f.charAt(0)=="/"?G_:q_,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Vi(f,W_)),a.join("")};function _n(a){return new yr(a)}function no(a,h,f){a.j=f?Oi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ro(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function ih(a,h,f){h instanceof Mi?(a.i=h,z_(a.i,a.h)):(f||(h=Vi(h,K_)),a.i=new Mi(h,a.h))}function Me(a,h,f){a.i.set(h,f)}function io(a){return Me(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Oi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Vi(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,$_),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function $_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var sh=/[#\/\?@]/g,q_=/[#\?:]/g,G_=/[#\?]/g,K_=/[#\?@]/g,W_=/#/g;function Mi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function $n(a){a.g||(a.g=new Map,a.h=0,a.i&&B_(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Mi.prototype,t.add=function(a,h){$n(this),this.i=null,a=Br(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function oh(a,h){$n(a),h=Br(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function ah(a,h){return $n(a),h=Br(a,h),a.g.has(h)}t.forEach=function(a,h){$n(this),this.g.forEach(function(f,m){f.forEach(function(S){a.call(h,S,m,this)},this)},this)},t.na=function(){$n(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let m=0;m<h.length;m++){const S=a[m];for(let x=0;x<S.length;x++)f.push(h[m])}return f},t.V=function(a){$n(this);let h=[];if(typeof a=="string")ah(this,a)&&(h=h.concat(this.g.get(Br(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return $n(this),this.i=null,a=Br(this,a),ah(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function lh(a,h,f){oh(a,h),0<f.length&&(a.i=null,a.g.set(Br(a,h),D(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var m=h[f];const x=encodeURIComponent(String(m)),W=this.V(m);for(m=0;m<W.length;m++){var S=x;W[m]!==""&&(S+="="+encodeURIComponent(String(W[m]))),a.push(S)}}return this.i=a.join("&")};function Br(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function z_(a,h){h&&!a.j&&($n(a),a.i=null,a.g.forEach(function(f,m){var S=m.toLowerCase();m!=S&&(oh(this,m),lh(this,S,f))},a)),a.j=h}function X_(a,h){const f=new xi;if(l.Image){const m=new Image;m.onload=_(qn,f,"TestLoadImage: loaded",!0,h,m),m.onerror=_(qn,f,"TestLoadImage: error",!1,h,m),m.onabort=_(qn,f,"TestLoadImage: abort",!1,h,m),m.ontimeout=_(qn,f,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function Q_(a,h){const f=new xi,m=new AbortController,S=setTimeout(()=>{m.abort(),qn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(x=>{clearTimeout(S),x.ok?qn(f,"TestPingServer: ok",!0,h):qn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(S),qn(f,"TestPingServer: error",!1,h)})}function qn(a,h,f,m,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),m(f)}catch{}}function Y_(){this.g=new Ys}function J_(a,h,f){const m=f||"";try{nh(a,function(S,x){let W=S;c(S)&&(W=tt(S)),h.push(m+x+"="+encodeURIComponent(W))})}catch(S){throw h.push(m+"type="+encodeURIComponent("_badmap")),S}}function so(a){this.l=a.Ub||null,this.j=a.eb||!1}L(so,Ga),so.prototype.g=function(){return new oo(this.l,this.j)},so.prototype.i=function(a){return function(){return a}}({});function oo(a,h){oe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}L(oo,oe),t=oo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ui(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ui(this)),this.g&&(this.readyState=3,Ui(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;uh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function uh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Fi(this):Ui(this),this.readyState==3&&uh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Fi(this))},t.Qa=function(a){this.g&&(this.response=a,Fi(this))},t.ga=function(){this.g&&Fi(this)};function Fi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ui(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Ui(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(oo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ch(a){let h="";return me(a,function(f,m){h+=m,h+=":",h+=f,h+=`\r
`}),h}function tl(a,h,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=ch(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Me(a,h,f))}function Be(a){oe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}L(Be,oe);var Z_=/^https?$/i,ey=["POST","PUT"];t=Be.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():za.g(),this.v=this.o?Uc(this.o):Uc(za),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(x){hh(this,x);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var S in m)f.set(S,m[S]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const x of m.keys())f.set(x,m.get(x));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(x=>x.toLowerCase()=="content-type"),S=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(ey,h,void 0))||m||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,W]of f)this.g.setRequestHeader(x,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ph(this),this.u=!0,this.g.send(a),this.u=!1}catch(x){hh(this,x)}};function hh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,dh(a),ao(a)}function dh(a){a.A||(a.A=!0,_e(a,"complete"),_e(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,_e(this,"complete"),_e(this,"abort"),ao(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ao(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?fh(this):this.bb())},t.bb=function(){fh(this)};function fh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||yn(a)!=4||a.Z()!=2)){if(a.u&&yn(a)==4)ct(a.Ea,0,a);else if(_e(a,"readystatechange"),yn(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var m;if(m=W===0){var S=String(a.D).match(rh)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),m=!Z_.test(S?S.toLowerCase():"")}f=m}if(f)_e(a,"complete"),_e(a,"success");else{a.m=6;try{var x=2<yn(a)?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.Z()+"]",dh(a)}}finally{ao(a)}}}}function ao(a,h){if(a.g){ph(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||_e(a,"ready");try{f.onreadystatechange=m}catch{}}}function ph(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function yn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<yn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Bt(h)}};function gh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ty(a){const h={};a=(a.g&&2<=yn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(N(a[m]))continue;var f=A(a[m]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const x=h[S]||[];h[S]=x,x.push(f)}I(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hi(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function mh(a){this.Aa=0,this.i=[],this.j=new xi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Hi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Hi("baseRetryDelayMs",5e3,a),this.cb=Hi("retryDelaySeedMs",1e4,a),this.Wa=Hi("forwardChannelMaxRetries",2,a),this.wa=Hi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Yc(a&&a.concurrentRequestLimit),this.Da=new Y_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=mh.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,m){Rt(0),this.W=a,this.H=h||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=Ah(this,null,this.W),uo(this)};function nl(a){if(_h(a),a.G==3){var h=a.U++,f=_n(a.I);if(Me(f,"SID",a.K),Me(f,"RID",h),Me(f,"TYPE","terminate"),ji(a,f),h=new Bn(a,a.j,h),h.L=2,h.v=io(_n(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Rh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),to(h)}wh(a)}function lo(a){a.g&&(il(a),a.g.cancel(),a.g=null)}function _h(a){lo(a),a.u&&(l.clearTimeout(a.u),a.u=null),co(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function uo(a){if(!Jc(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ee||zt(),ye||(Ee(),ye=!0),Dt.add(h,a),a.B=0}}function ny(a,h){return Zc(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Di(g(a.Ga,a,h),Ih(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const S=new Bn(this,this.j,a);let x=this.o;if(this.S&&(x?(x=y(x),w(x,this.S)):x=this.S),this.m!==null||this.O||(S.H=x,x=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=vh(this,S,h),f=_n(this.I),Me(f,"RID",a),Me(f,"CVER",22),this.D&&Me(f,"X-HTTP-Session-Id",this.D),ji(this,f),x&&(this.O?h="headers="+encodeURIComponent(String(ch(x)))+"&"+h:this.m&&tl(f,this.m,x)),el(this.h,S),this.Ua&&Me(f,"TYPE","init"),this.P?(Me(f,"$req",h),Me(f,"SID","null"),S.T=!0,Qa(S,f,null)):Qa(S,f,h),this.G=2}}else this.G==3&&(a?yh(this,a):this.i.length==0||Jc(this.h)||yh(this))};function yh(a,h){var f;h?f=h.l:f=a.U++;const m=_n(a.I);Me(m,"SID",a.K),Me(m,"RID",f),Me(m,"AID",a.T),ji(a,m),a.m&&a.o&&tl(m,a.m,a.o),f=new Bn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=vh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),el(a.h,f),Qa(f,m,h)}function ji(a,h){a.H&&me(a.H,function(f,m){Me(h,m,f)}),a.l&&nh({},function(f,m){Me(h,m,f)})}function vh(a,h,f){f=Math.min(a.i.length,f);var m=a.l?g(a.l.Na,a.l,a):null;e:{var S=a.i;let x=-1;for(;;){const W=["count="+f];x==-1?0<f?(x=S[0].g,W.push("ofs="+x)):x=0:W.push("ofs="+x);let De=!0;for(let nt=0;nt<f;nt++){let Ae=S[nt].g;const dt=S[nt].map;if(Ae-=x,0>Ae)x=Math.max(0,S[nt].g-100),De=!1;else try{J_(dt,W,"req"+Ae+"_")}catch{m&&m(dt)}}if(De){m=W.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,m}function Th(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ee||zt(),ye||(Ee(),ye=!0),Dt.add(h,a),a.v=0}}function rl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Di(g(a.Fa,a),Ih(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Eh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Di(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Rt(10),lo(this),Eh(this))};function il(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Eh(a){a.g=new Bn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=_n(a.qa);Me(h,"RID","rpc"),Me(h,"SID",a.K),Me(h,"AID",a.T),Me(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Me(h,"TO",a.ja),Me(h,"TYPE","xmlhttp"),ji(a,h),a.m&&a.o&&tl(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=io(_n(h)),f.m=null,f.P=!0,zc(f,a)}t.Za=function(){this.C!=null&&(this.C=null,lo(this),rl(this),Rt(19))};function co(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function bh(a,h){var f=null;if(a.g==h){co(a),il(a),a.g=null;var m=2}else if(Za(a.h,h))f=h.D,eh(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var S=a.B;m=Js(),_e(m,new qc(m,f)),uo(a)}else Th(a);else if(S=h.s,S==3||S==0&&0<h.X||!(m==1&&ny(a,h)||m==2&&rl(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),S){case 1:vr(a,5);break;case 4:vr(a,10);break;case 3:vr(a,6);break;default:vr(a,2)}}}function Ih(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function vr(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),m=a.Xa;const S=!m;m=new yr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||no(m,"https"),io(m),S?X_(m.toString(),f):Q_(m.toString(),f)}else Rt(2);a.G=0,a.l&&a.l.sa(h),wh(a),_h(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function wh(a){if(a.G=0,a.ka=[],a.l){const h=th(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ka,h),k(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function Ah(a,h,f){var m=f instanceof yr?_n(f):new yr(f);if(m.g!="")h&&(m.g=h+"."+m.g),ro(m,m.s);else{var S=l.location;m=S.protocol,h=h?h+"."+S.hostname:S.hostname,S=+S.port;var x=new yr(null);m&&no(x,m),h&&(x.g=h),S&&ro(x,S),f&&(x.l=f),m=x}return f=a.D,h=a.ya,f&&h&&Me(m,f,h),Me(m,"VER",a.la),ji(a,m),m}function Rh(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Be(new so({eb:f})):new Be(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ph(){}t=Ph.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ho(){}ho.prototype.g=function(a,h){return new xt(a,h)};function xt(a,h){oe.call(this),this.g=new mh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!N(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!N(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new $r(this)}L(xt,oe),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){nl(this.g)},xt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=tt(a),a=f);h.i.push(new U_(h.Ya++,a)),h.G==3&&uo(h)},xt.prototype.N=function(){this.g.l=null,delete this.j,nl(this.g),delete this.g,xt.aa.N.call(this)};function Ch(a){Ka.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}L(Ch,Ka);function Sh(){Wa.call(this),this.status=1}L(Sh,Wa);function $r(a){this.g=a}L($r,Ph),$r.prototype.ua=function(){_e(this.g,"a")},$r.prototype.ta=function(a){_e(this.g,new Ch(a))},$r.prototype.sa=function(a){_e(this.g,new Sh)},$r.prototype.ra=function(){_e(this.g,"b")},ho.prototype.createWebChannel=ho.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,mm=function(){return new ho},gm=function(){return Js()},pm=mr,eu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Zs.NO_ERROR=0,Zs.TIMEOUT=8,Zs.HTTP_ERROR=6,Lo=Zs,Gc.COMPLETE="complete",fm=Gc,Hc.EventType=Li,Li.OPEN="a",Li.CLOSE="b",Li.ERROR="c",Li.MESSAGE="d",oe.prototype.listen=oe.prototype.K,Xi=Hc,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,dm=Be}).apply(typeof yo<"u"?yo:typeof self<"u"?self:typeof window<"u"?window:{});const nf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ri="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new Hu("@firebase/firestore");function Gi(){return Dr.logLevel}function ee(t,...e){if(Dr.logLevel<=Te.DEBUG){const n=e.map(ec);Dr.debug(`Firestore (${Ri}): ${t}`,...n)}}function Nn(t,...e){if(Dr.logLevel<=Te.ERROR){const n=e.map(ec);Dr.error(`Firestore (${Ri}): ${t}`,...n)}}function gi(t,...e){if(Dr.logLevel<=Te.WARN){const n=e.map(ec);Dr.warn(`Firestore (${Ri}): ${t}`,...n)}}function ec(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t="Unexpected state"){const e=`FIRESTORE (${Ri}) INTERNAL ASSERTION FAILED: `+t;throw Nn(e),new Error(e)}function ke(t,e){t||de()}function pe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class EA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class bA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class IA{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ke(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ln;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ln,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ln)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ke(typeof r.accessToken=="string"),new _m(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string"),new gt(e)}}class wA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class AA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new wA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class RA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ke(this.o===void 0);const r=s=>{s.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ke(typeof n.token=="string"),this.R=n.token,new RA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=CA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Re(t,e){return t<e?-1:t>e?1:0}function mi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new J(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new fe(e)}static min(){return new fe(new Qe(0,0))}static max(){return new fe(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(),r===void 0?r=e.length-n:r>e.length-n&&de(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Rs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Rs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends Rs{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const SA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends Rs{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return SA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new J(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new J(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new J(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new J(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Fe.fromString(e))}static fromName(e){return new re(Fe.fromString(e).popFirst(5))}static empty(){return new re(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Fe(e.slice()))}}function LA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=fe.fromTimestamp(r===1e9?new Qe(n+1,0):new Qe(n,r));return new ar(i,re.empty(),e)}function kA(t){return new ar(t.readTime,t.key,-1)}class ar{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ar(fe.min(),re.empty(),-1)}static max(){return new ar(fe.max(),re.empty(),-1)}}function DA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:Re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==xA)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new $((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function OA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function $s(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}tc.oe=-1;function Ra(t){return t==null}function Yo(t){return t===0&&1/t==-1/0}function VA(t){return typeof t=="number"&&Number.isInteger(t)&&!Yo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function vm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vo(this.root,e,this.comparator,!1)}getReverseIterator(){return new vo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vo(this.root,e,this.comparator,!0)}}class vo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??rt.RED,this.left=i??rt.EMPTY,this.right=s??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new rt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return rt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,n,r,i,s){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new sf(this.data.getIterator())}getIteratorFrom(e){return new sf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new lt(this.comparator);return n.data=e,n}}class sf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new lt(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Tm("Invalid base64 string: "+s):s}}(e);return new ut(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const MA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function lr(t){if(ke(!!t),typeof t=="string"){let e=0;const n=MA.exec(t);if(ke(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function xr(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function rc(t){const e=t.mapValue.fields.__previous_value__;return nc(e)?rc(e):e}function Ps(t){const e=lr(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Cs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Cs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Cs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To={mapValue:{}};function Nr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?nc(t)?4:HA(t)?9007199254740991:UA(t)?10:11:de()}function mn(t,e){if(t===e)return!0;const n=Nr(t);if(n!==Nr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ps(t).isEqual(Ps(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=lr(i.timestampValue),l=lr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return xr(i.bytesValue).isEqual(xr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return qe(i.geoPointValue.latitude)===qe(s.geoPointValue.latitude)&&qe(i.geoPointValue.longitude)===qe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return qe(i.integerValue)===qe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=qe(i.doubleValue),l=qe(s.doubleValue);return o===l?Yo(o)===Yo(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return mi(t.arrayValue.values||[],e.arrayValue.values||[],mn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(rf(o)!==rf(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!mn(o[u],l[u])))return!1;return!0}(t,e);default:return de()}}function Ss(t,e){return(t.values||[]).find(n=>mn(n,e))!==void 0}function _i(t,e){if(t===e)return 0;const n=Nr(t),r=Nr(e);if(n!==r)return Re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Re(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=qe(s.integerValue||s.doubleValue),u=qe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return of(t.timestampValue,e.timestampValue);case 4:return of(Ps(t),Ps(e));case 5:return Re(t.stringValue,e.stringValue);case 6:return function(s,o){const l=xr(s),u=xr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=Re(l[c],u[c]);if(d!==0)return d}return Re(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=Re(qe(s.latitude),qe(o.latitude));return l!==0?l:Re(qe(s.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return af(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,d;const p=s.fields||{},g=o.fields||{},_=(l=p.value)===null||l===void 0?void 0:l.arrayValue,L=(u=g.value)===null||u===void 0?void 0:u.arrayValue,D=Re(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((d=L==null?void 0:L.values)===null||d===void 0?void 0:d.length)||0);return D!==0?D:af(_,L)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===To.mapValue&&o===To.mapValue)return 0;if(s===To.mapValue)return 1;if(o===To.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const g=Re(u[p],d[p]);if(g!==0)return g;const _=_i(l[u[p]],c[d[p]]);if(_!==0)return _}return Re(u.length,d.length)}(t.mapValue,e.mapValue);default:throw de()}}function of(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Re(t,e);const n=lr(t),r=lr(e),i=Re(n.seconds,r.seconds);return i!==0?i:Re(n.nanos,r.nanos)}function af(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=_i(n[i],r[i]);if(s)return s}return Re(n.length,r.length)}function yi(t){return tu(t)}function tu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=lr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return xr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=tu(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${tu(n.fields[o])}`;return i+"}"}(t.mapValue):de()}function lf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function nu(t){return!!t&&"integerValue"in t}function ic(t){return!!t&&"arrayValue"in t}function uf(t){return!!t&&"nullValue"in t}function cf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ko(t){return!!t&&"mapValue"in t}function UA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function us(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Fr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=us(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=us(t.arrayValue.values[n]);return e}return Object.assign({},t)}function HA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.value=e}static empty(){return new Lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ko(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=us(n)}setAll(e){let n=st.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=us(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ko(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ko(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Fr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Lt(us(this.value))}}function Em(t){const e=[];return Fr(t.fields,(n,r)=>{const i=new st([n]);if(ko(r)){const s=Em(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Mt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new yt(e,0,fe.min(),fe.min(),fe.min(),Lt.empty(),0)}static newFoundDocument(e,n,r,i){return new yt(e,1,n,fe.min(),r,i,0)}static newNoDocument(e,n){return new yt(e,2,n,fe.min(),fe.min(),Lt.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,fe.min(),fe.min(),Lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n){this.position=e,this.inclusive=n}}function hf(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=_i(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function df(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n="asc"){this.field=e,this.dir=n}}function jA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{}class ze extends bm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new $A(e,n,r):n==="array-contains"?new KA(e,r):n==="in"?new WA(e,r):n==="not-in"?new zA(e,r):n==="array-contains-any"?new XA(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new qA(e,r):new GA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_i(n,this.value)):n!==null&&Nr(this.value)===Nr(n)&&this.matchesComparison(_i(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rn extends bm{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new rn(e,n)}matches(e){return Im(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Im(t){return t.op==="and"}function wm(t){return BA(t)&&Im(t)}function BA(t){for(const e of t.filters)if(e instanceof rn)return!1;return!0}function ru(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+yi(t.value);if(wm(t))return t.filters.map(e=>ru(e)).join(",");{const e=t.filters.map(n=>ru(n)).join(",");return`${t.op}(${e})`}}function Am(t,e){return t instanceof ze?function(r,i){return i instanceof ze&&r.op===i.op&&r.field.isEqual(i.field)&&mn(r.value,i.value)}(t,e):t instanceof rn?function(r,i){return i instanceof rn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Am(o,i.filters[l]),!0):!1}(t,e):void de()}function Rm(t){return t instanceof ze?function(n){return`${n.field.canonicalString()} ${n.op} ${yi(n.value)}`}(t):t instanceof rn?function(n){return n.op.toString()+" {"+n.getFilters().map(Rm).join(" ,")+"}"}(t):"Filter"}class $A extends ze{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class qA extends ze{constructor(e,n){super(e,"in",n),this.keys=Pm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class GA extends ze{constructor(e,n){super(e,"not-in",n),this.keys=Pm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Pm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class KA extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ic(n)&&Ss(n.arrayValue,this.value)}}class WA extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ss(this.value.arrayValue,n)}}class zA extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ss(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ss(this.value.arrayValue,n)}}class XA extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ic(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ss(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function ff(t,e=null,n=[],r=[],i=null,s=null,o=null){return new QA(t,e,n,r,i,s,o)}function sc(t){const e=pe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ru(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ra(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>yi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>yi(r)).join(",")),e.ue=n}return e.ue}function oc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!jA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Am(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!df(t.startAt,e.startAt)&&df(t.endAt,e.endAt)}function iu(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function YA(t,e,n,r,i,s,o,l){return new qs(t,e,n,r,i,s,o,l)}function Pa(t){return new qs(t)}function pf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Cm(t){return t.collectionGroup!==null}function cs(t){const e=pe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new lt(st.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Zo(s,r))}),n.has(st.keyField().canonicalString())||e.ce.push(new Zo(st.keyField(),r))}return e.ce}function fn(t){const e=pe(t);return e.le||(e.le=JA(e,cs(t))),e.le}function JA(t,e){if(t.limitType==="F")return ff(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Zo(i.field,s)});const n=t.endAt?new Jo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Jo(t.startAt.position,t.startAt.inclusive):null;return ff(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function su(t,e){const n=t.filters.concat([e]);return new qs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ou(t,e,n){return new qs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ca(t,e){return oc(fn(t),fn(e))&&t.limitType===e.limitType}function Sm(t){return`${sc(fn(t))}|lt:${t.limitType}`}function zr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Rm(i)).join(", ")}]`),Ra(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>yi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>yi(i)).join(",")),`Target(${r})`}(fn(t))}; limitType=${t.limitType})`}function Sa(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):re.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of cs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=hf(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,cs(r),i)||r.endAt&&!function(o,l,u){const c=hf(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,cs(r),i))}(t,e)}function ZA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Lm(t){return(e,n)=>{let r=!1;for(const i of cs(t)){const s=e0(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function e0(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?_i(u,c):de()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Fr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return vm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0=new je(re.comparator);function On(){return t0}const km=new je(re.comparator);function Qi(...t){let e=km;for(const n of t)e=e.insert(n.key,n);return e}function Dm(t){let e=km;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ar(){return hs()}function xm(){return hs()}function hs(){return new Pi(t=>t.toString(),(t,e)=>t.isEqual(e))}const n0=new je(re.comparator),r0=new lt(re.comparator);function ve(...t){let e=r0;for(const n of t)e=e.add(n);return e}const i0=new lt(Re);function s0(){return i0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yo(e)?"-0":e}}function Nm(t){return{integerValue:""+t}}function o0(t,e){return VA(e)?Nm(e):ac(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(){this._=void 0}}function a0(t,e,n){return t instanceof Ls?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&nc(s)&&(s=rc(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ks?Vm(t,e):t instanceof Ds?Mm(t,e):function(i,s){const o=Om(i,s),l=gf(o)+gf(i.Pe);return nu(o)&&nu(i.Pe)?Nm(l):ac(i.serializer,l)}(t,e)}function l0(t,e,n){return t instanceof ks?Vm(t,e):t instanceof Ds?Mm(t,e):n}function Om(t,e){return t instanceof ea?function(r){return nu(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ls extends La{}class ks extends La{constructor(e){super(),this.elements=e}}function Vm(t,e){const n=Fm(e);for(const r of t.elements)n.some(i=>mn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ds extends La{constructor(e){super(),this.elements=e}}function Mm(t,e){let n=Fm(e);for(const r of t.elements)n=n.filter(i=>!mn(i,r));return{arrayValue:{values:n}}}class ea extends La{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function gf(t){return qe(t.integerValue||t.doubleValue)}function Fm(t){return ic(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e,n){this.field=e,this.transform=n}}function c0(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ks&&i instanceof ks||r instanceof Ds&&i instanceof Ds?mi(r.elements,i.elements,mn):r instanceof ea&&i instanceof ea?mn(r.Pe,i.Pe):r instanceof Ls&&i instanceof Ls}(t.transform,e.transform)}class h0{constructor(e,n){this.version=e,this.transformResults=n}}class qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Do(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ka{}function Um(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new lc(t.key,qt.none()):new Gs(t.key,t.data,qt.none());{const n=t.data,r=Lt.empty();let i=new lt(st.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new gr(t.key,r,new Mt(i.toArray()),qt.none())}}function d0(t,e,n){t instanceof Gs?function(i,s,o){const l=i.value.clone(),u=_f(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof gr?function(i,s,o){if(!Do(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=_f(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Hm(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ds(t,e,n,r){return t instanceof Gs?function(s,o,l,u){if(!Do(s.precondition,o))return l;const c=s.value.clone(),d=yf(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof gr?function(s,o,l,u){if(!Do(s.precondition,o))return l;const c=yf(s.fieldTransforms,u,o),d=o.data;return d.setAll(Hm(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Do(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function f0(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Om(r.transform,i||null);s!=null&&(n===null&&(n=Lt.empty()),n.set(r.field,s))}return n||null}function mf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&mi(r,i,(s,o)=>c0(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Gs extends ka{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class gr extends ka{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Hm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function _f(t,e,n){const r=new Map;ke(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,l0(o,l,n[i]))}return r}function yf(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,a0(s,o,e))}return r}class lc extends ka{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class p0 extends ka{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&d0(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ds(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ds(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=xm();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Um(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(fe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&mi(this.mutations,e.mutations,(n,r)=>mf(n,r))&&mi(this.baseMutations,e.baseMutations,(n,r)=>mf(n,r))}}class uc{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ke(e.mutations.length===r.length);let i=function(){return n0}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new uc(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,Ie;function y0(t){switch(t){default:return de();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function jm(t){if(t===void 0)return Nn("GRPC error has no .code"),j.UNKNOWN;switch(t){case We.OK:return j.OK;case We.CANCELLED:return j.CANCELLED;case We.UNKNOWN:return j.UNKNOWN;case We.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case We.INTERNAL:return j.INTERNAL;case We.UNAVAILABLE:return j.UNAVAILABLE;case We.UNAUTHENTICATED:return j.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case We.NOT_FOUND:return j.NOT_FOUND;case We.ALREADY_EXISTS:return j.ALREADY_EXISTS;case We.PERMISSION_DENIED:return j.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case We.ABORTED:return j.ABORTED;case We.OUT_OF_RANGE:return j.OUT_OF_RANGE;case We.UNIMPLEMENTED:return j.UNIMPLEMENTED;case We.DATA_LOSS:return j.DATA_LOSS;default:return de()}}(Ie=We||(We={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0=new Pr([4294967295,4294967295],0);function vf(t){const e=v0().encode(t),n=new hm;return n.update(e),new Uint8Array(n.digest())}function Tf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Pr([n,r],0),new Pr([i,s],0)]}class cc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Yi(`Invalid padding: ${n}`);if(r<0)throw new Yi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Yi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Yi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Pr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Pr.fromNumber(r)));return i.compare(T0)===1&&(i=new Pr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=vf(e),[r,i]=Tf(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new cc(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=vf(e),[r,i]=Tf(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Yi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ks.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Da(fe.min(),i,new je(Re),On(),ve())}}class Ks{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ks(r,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Bm{constructor(e,n){this.targetId=e,this.me=n}}class $m{constructor(e,n,r=ut.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ef{constructor(){this.fe=0,this.ge=If(),this.pe=ut.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ve(),n=ve(),r=ve();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:de()}}),new Ks(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=If()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ke(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class E0{constructor(e){this.Le=e,this.Be=new Map,this.ke=On(),this.qe=bf(),this.Qe=new je(Re)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:de()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(iu(s))if(r===0){const o=new re(s.path);this.Ue(n,o,yt.newNoDocument(o,fe.min()))}else ke(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=xr(r).toUint8Array()}catch(u){if(u instanceof Tm)return gi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new cc(o,i,s)}catch(u){return gi(u instanceof Yi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&iu(l.target)){const u=new re(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,yt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ve();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Da(e,n,this.Qe,this.ke,r);return this.ke=On(),this.qe=bf(),this.Qe=new je(Re),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Ef,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new lt(Re),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ef),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function bf(){return new je(re.comparator)}function If(){return new je(re.comparator)}const b0={asc:"ASCENDING",desc:"DESCENDING"},I0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},w0={and:"AND",or:"OR"};class A0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function au(t,e){return t.useProto3Json||Ra(e)?e:{value:e}}function ta(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function R0(t,e){return ta(t,e.toTimestamp())}function pn(t){return ke(!!t),fe.fromTimestamp(function(n){const r=lr(n);return new Qe(r.seconds,r.nanos)}(t))}function hc(t,e){return lu(t,e).canonicalString()}function lu(t,e){const n=function(i){return new Fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Gm(t){const e=Fe.fromString(t);return ke(Qm(e)),e}function uu(t,e){return hc(t.databaseId,e.path)}function Al(t,e){const n=Gm(e);if(n.get(1)!==t.databaseId.projectId)throw new J(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(Wm(n))}function Km(t,e){return hc(t.databaseId,e)}function P0(t){const e=Gm(t);return e.length===4?Fe.emptyPath():Wm(e)}function cu(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Wm(t){return ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function wf(t,e,n){return{name:uu(t,e),fields:n.value.mapValue.fields}}function C0(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:de()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ke(d===void 0||typeof d=="string"),ut.fromBase64String(d||"")):(ke(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ut.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?j.UNKNOWN:jm(c.code);return new J(d,c.message||"")}(o);n=new $m(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Al(t,r.document.name),s=pn(r.document.updateTime),o=r.document.createTime?pn(r.document.createTime):fe.min(),l=new Lt({mapValue:{fields:r.document.fields}}),u=yt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new xo(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Al(t,r.document),s=r.readTime?pn(r.readTime):fe.min(),o=yt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new xo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Al(t,r.document),s=r.removedTargetIds||[];n=new xo([],s,i,null)}else{if(!("filter"in e))return de();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new _0(i,s),l=r.targetId;n=new Bm(l,o)}}return n}function S0(t,e){let n;if(e instanceof Gs)n={update:wf(t,e.key,e.value)};else if(e instanceof lc)n={delete:uu(t,e.key)};else if(e instanceof gr)n={update:wf(t,e.key,e.data),updateMask:F0(e.fieldMask)};else{if(!(e instanceof p0))return de();n={verify:uu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Ls)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ks)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ds)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ea)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw de()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:R0(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:de()}(t,e.precondition)),n}function L0(t,e){return t&&t.length>0?(ke(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?pn(i.updateTime):pn(s);return o.isEqual(fe.min())&&(o=pn(s)),new h0(o,i.transformResults||[])}(n,e))):[]}function k0(t,e){return{documents:[Km(t,e.path)]}}function D0(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Km(t,i);const s=function(c){if(c.length!==0)return Xm(rn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(g){return{field:Xr(g.field),direction:O0(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=au(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function x0(t){let e=P0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ke(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const g=zm(p);return g instanceof rn&&wm(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(L){return new Zo(Qr(L.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(L.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Ra(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,_=p.values||[];return new Jo(_,g)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const g=!p.before,_=p.values||[];return new Jo(_,g)}(n.endAt)),YA(e,i,o,s,l,"F",u,c)}function N0(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function zm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qr(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Qr(n.unaryFilter.field);return ze.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Qr(n.unaryFilter.field);return ze.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qr(n.unaryFilter.field);return ze.create(o,"!=",{nullValue:"NULL_VALUE"});default:return de()}}(t):t.fieldFilter!==void 0?function(n){return ze.create(Qr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return rn.create(n.compositeFilter.filters.map(r=>zm(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return de()}}(n.compositeFilter.op))}(t):de()}function O0(t){return b0[t]}function V0(t){return I0[t]}function M0(t){return w0[t]}function Xr(t){return{fieldPath:t.canonicalString()}}function Qr(t){return st.fromServerFormat(t.fieldPath)}function Xm(t){return t instanceof ze?function(n){if(n.op==="=="){if(cf(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NAN"}};if(uf(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(cf(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NOT_NAN"}};if(uf(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xr(n.field),op:V0(n.op),value:n.value}}}(t):t instanceof rn?function(n){const r=n.getFilters().map(i=>Xm(i));return r.length===1?r[0]:{compositeFilter:{op:M0(n.op),filters:r}}}(t):de()}function F0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Qm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n,r,i,s=fe.min(),o=fe.min(),l=ut.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e){this.ct=e}}function H0(t){const e=x0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ou(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(){this.un=new B0}addToCollectionParentIndex(e,n){return this.un.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(ar.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(ar.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class B0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new lt(Fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new lt(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new vi(0)}static kn(){return new vi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(){this.changes=new Pi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ds(r.mutation,i,Mt.empty(),Qe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const i=Ar();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Qi();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ar();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=On();const o=hs(),l=function(){return hs()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof gr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),ds(d.mutation,c,d.mutation.getFieldMask(),Qe.now())):o.set(c.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new q0(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=hs();let i=new je((o,l)=>o-l),s=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Mt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||ve()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=xm();d.forEach(g=>{if(!s.has(g)){const _=Um(n.get(g),r.get(g));_!==null&&p.set(g,_),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Cm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):$.resolve(Ar());let l=-1,u=s;return o.next(c=>$.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?$.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{u=u.insert(d,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ve())).next(d=>({batchId:l,changes:Dm(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let i=Qi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Qi();return this.indexManager.getCollectionParents(e,s).next(l=>$.forEach(l,u=>{const c=function(p,g){return new qs(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,yt.newInvalidDocument(d)))});let l=Qi();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&ds(d.mutation,c,Mt.empty(),Qe.now()),Sa(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:pn(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:H0(i.bundledQuery),readTime:pn(i.readTime)}}(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(){this.overlays=new je(re.comparator),this.Ir=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ar();return $.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=Ar(),s=n.length+1,o=new re(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new je((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Ar(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Ar(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return $.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new m0(n,r));let s=this.Ir.get(n);s===void 0&&(s=ve(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(){this.Tr=new lt(Ye.Er),this.dr=new lt(Ye.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ye(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new re(new Fe([])),r=new Ye(n,e),i=new Ye(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new re(new Fe([])),r=new Ye(n,e),i=new Ye(n,e+1);let s=ve();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ye(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return re.comparator(e.key,n.key)||Re(e.wr,n.wr)}static Ar(e,n){return Re(e.wr,n.wr)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new lt(Ye.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new g0(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ye(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return $.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),i=new Ye(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),$.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new lt(Re);return n.forEach(i=>{const s=new Ye(i,0),o=new Ye(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),$.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;re.isDocumentKey(s)||(s=s.child(""));const o=new Ye(new re(s),0);let l=new lt(Re);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),$.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ke(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return $.forEach(n.mutations,i=>{const s=new Ye(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ye(n,0),i=this.br.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e){this.Mr=e,this.docs=function(){return new je(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let r=On();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():yt.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=On();const o=n.path,l=new re(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||DA(kA(d),r)<=0||(i.has(d.key)||Sa(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return $.resolve(s)}getAllFromCollectionGroup(e,n,r,i){de()}Or(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Y0(this)}getSize(e){return $.resolve(this.size)}}class Y0 extends $0{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e){this.persistence=e,this.Nr=new Pi(n=>sc(n),oc),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new dc,this.targetCount=0,this.kr=vi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new vi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Kn(n),$.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),$.waitFor(s).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),$.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e,n){this.qr={},this.overlays={},this.Qr=new tc(0),this.Kr=!1,this.Kr=!0,this.$r=new z0,this.referenceDelegate=e(this),this.Ur=new J0(this),this.indexManager=new j0,this.remoteDocumentCache=function(i){return new Q0(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new U0(n),this.Gr=new K0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new W0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new X0(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const i=new eR(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return $.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class eR extends NA{constructor(e){super(),this.currentSequenceNumber=e}}class fc{constructor(e){this.persistence=e,this.Jr=new dc,this.Yr=null}static Zr(e){return new fc(e)}get Xr(){if(this.Yr)return this.Yr;throw de()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,r=>{const i=re.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,fe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ve(),i=ve();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new pc(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return GE()?8:OA(wt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new tR;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Gi()<=Te.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",zr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(Gi()<=Te.DEBUG&&ee("QueryEngine","Query:",zr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Gi()<=Te.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",zr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fn(n))):$.resolve())}Yi(e,n){if(pf(n))return $.resolve(null);let r=fn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ou(n,null,"F"),r=fn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ve(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,ou(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return pf(n)||i.isEqual(fe.min())?$.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?$.resolve(null):(Gi()<=Te.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),zr(n)),this.rs(e,o,n,LA(i,-1)).next(l=>l))})}ts(e,n){let r=new lt(Lm(e));return n.forEach((i,s)=>{Sa(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Gi()<=Te.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",zr(n)),this.Ji.getDocumentsMatchingQuery(e,n,ar.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new je(Re),this._s=new Pi(s=>sc(s),oc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new G0(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function iR(t,e,n,r){return new rR(t,e,n,r)}async function Ym(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ve();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function sR(t,e){const n=pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,g=p.keys();let _=$.resolve();return g.forEach(L=>{_=_.next(()=>d.getEntry(u,L)).next(D=>{const k=c.docVersions.get(L);ke(k!==null),D.version.compareTo(k)<0&&(p.applyToRemoteDocument(D,c),D.isValidDocument()&&(D.setReadTime(c.commitVersion),d.addEntry(D)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ve();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Jm(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function oR(t,e){const n=pe(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const g=i.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,p)));let _=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(ut.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),i=i.insert(p,_),function(D,k,U){return D.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(g,_,d)&&l.push(n.Ur.updateTargetData(s,_))});let u=On(),c=ve();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(aR(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(fe.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return $.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function aR(t,e,n){let r=ve(),i=ve();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=On();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(fe.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):ee("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function lR(t,e){const n=pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function uR(t,e){const n=pe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,$.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function hu(t,e,n){const r=pe(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$s(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Af(t,e,n){const r=pe(t);let i=fe.min(),s=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=pe(u),g=p._s.get(d);return g!==void 0?$.resolve(p.os.get(g)):p.Ur.getTargetData(c,d)}(r,o,fn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:fe.min(),n?s:ve())).next(l=>(cR(r,ZA(e),l),{documents:l,Ts:s})))}function cR(t,e,n){let r=t.us.get(e)||fe.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Rf{constructor(){this.activeTargetIds=s0()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hR{constructor(){this.so=new Rf,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Rf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eo=null;function Rl(){return Eo===null?Eo=function(){return 268435456+Math.round(2147483648*Math.random())}():Eo++,"0x"+Eo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class gR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Rl(),u=this.xo(n,r.toUriEncodedString());ee("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(ee("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw gi("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ri}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=fR[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Rl();return new Promise((o,l)=>{const u=new dm;u.setWithCredentials(!0),u.listenOnce(fm.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Lo.NO_ERROR:const d=u.getResponseJson();ee(pt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Lo.TIMEOUT:ee(pt,`RPC '${e}' ${s} timed out`),l(new J(j.DEADLINE_EXCEEDED,"Request time out"));break;case Lo.HTTP_ERROR:const p=u.getStatus();if(ee(pt,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g==null?void 0:g.error;if(_&&_.status&&_.message){const L=function(k){const U=k.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(U)>=0?U:j.UNKNOWN}(_.status);l(new J(L,_.message))}else l(new J(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new J(j.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{ee(pt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);ee(pt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Rl(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=mm(),l=gm(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");ee(pt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let g=!1,_=!1;const L=new pR({Io:k=>{_?ee(pt,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(g||(ee(pt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),ee(pt,`RPC '${e}' stream ${i} sending:`,k),p.send(k))},To:()=>p.close()}),D=(k,U,N)=>{k.listen(U,O=>{try{N(O)}catch(F){setTimeout(()=>{throw F},0)}})};return D(p,Xi.EventType.OPEN,()=>{_||(ee(pt,`RPC '${e}' stream ${i} transport opened.`),L.yo())}),D(p,Xi.EventType.CLOSE,()=>{_||(_=!0,ee(pt,`RPC '${e}' stream ${i} transport closed`),L.So())}),D(p,Xi.EventType.ERROR,k=>{_||(_=!0,gi(pt,`RPC '${e}' stream ${i} transport errored:`,k),L.So(new J(j.UNAVAILABLE,"The operation could not be completed")))}),D(p,Xi.EventType.MESSAGE,k=>{var U;if(!_){const N=k.data[0];ke(!!N);const O=N,F=O.error||((U=O[0])===null||U===void 0?void 0:U.error);if(F){ee(pt,`RPC '${e}' stream ${i} received error:`,F);const ce=F.status;let me=function(E){const w=We[E];if(w!==void 0)return jm(w)}(ce),I=F.message;me===void 0&&(me=j.INTERNAL,I="Unknown error status: "+ce+" with message "+F.message),_=!0,L.So(new J(me,I)),p.close()}else ee(pt,`RPC '${e}' stream ${i} received:`,N),L.bo(N)}}),D(l,pm.STAT_EVENT,k=>{k.stat===eu.PROXY?ee(pt,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===eu.NOPROXY&&ee(pt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{L.wo()},0),L}}function Pl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t){return new A0(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&ee("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Zm(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Nn(n.toString()),Nn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new J(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mR extends e_{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=C0(this.serializer,e),r=function(s){if(!("targetChange"in s))return fe.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?pn(o.readTime):fe.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=cu(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=iu(u)?{documents:k0(s,u)}:{query:D0(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=qm(s,o.resumeToken);const c=au(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(fe.min())>0){l.readTime=ta(s,o.snapshotVersion.toTimestamp());const c=au(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=N0(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=cu(this.serializer),n.removeTarget=e,this.a_(n)}}class _R extends e_{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ke(!!e.streamToken),this.lastStreamToken=e.streamToken,ke(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=L0(e.writeResults,e.commitTime),r=pn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=cu(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>S0(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new J(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,lu(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new J(j.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,lu(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class vR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Nn(n),this.D_=!1):ee("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ur(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=pe(u);c.L_.add(4),await Ws(c),c.q_.set("Unknown"),c.L_.delete(4),await Na(c)}(this))})}),this.q_=new vR(r,i)}}async function Na(t){if(Ur(t))for(const e of t.B_)await e(!0)}async function Ws(t){for(const e of t.B_)await e(!1)}function t_(t,e){const n=pe(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),yc(n)?_c(n):Ci(n).r_()&&mc(n,e))}function gc(t,e){const n=pe(t),r=Ci(n);n.N_.delete(e),r.r_()&&n_(n,e),n.N_.size===0&&(r.r_()?r.o_():Ur(n)&&n.q_.set("Unknown"))}function mc(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ci(t).A_(e)}function n_(t,e){t.Q_.xe(e),Ci(t).R_(e)}function _c(t){t.Q_=new E0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ci(t).start(),t.q_.v_()}function yc(t){return Ur(t)&&!Ci(t).n_()&&t.N_.size>0}function Ur(t){return pe(t).L_.size===0}function r_(t){t.Q_=void 0}async function ER(t){t.q_.set("Online")}async function bR(t){t.N_.forEach((e,n)=>{mc(t,e)})}async function IR(t,e){r_(t),yc(t)?(t.q_.M_(e),_c(t)):t.q_.set("Unknown")}async function wR(t,e,n){if(t.q_.set("Online"),e instanceof $m&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await na(t,r)}else if(e instanceof xo?t.Q_.Ke(e):e instanceof Bm?t.Q_.He(e):t.Q_.We(e),!n.isEqual(fe.min()))try{const r=await Jm(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(ut.EMPTY_BYTE_STRING,d.snapshotVersion)),n_(s,u);const p=new er(d.target,u,c,d.sequenceNumber);mc(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await na(t,r)}}async function na(t,e,n){if(!$s(e))throw e;t.L_.add(1),await Ws(t),t.q_.set("Offline"),n||(n=()=>Jm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Na(t)})}function i_(t,e){return e().catch(n=>na(t,n,e))}async function Oa(t){const e=pe(t),n=ur(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;AR(e);)try{const i=await lR(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,RR(e,i)}catch(i){await na(e,i)}s_(e)&&o_(e)}function AR(t){return Ur(t)&&t.O_.length<10}function RR(t,e){t.O_.push(e);const n=ur(t);n.r_()&&n.V_&&n.m_(e.mutations)}function s_(t){return Ur(t)&&!ur(t).n_()&&t.O_.length>0}function o_(t){ur(t).start()}async function PR(t){ur(t).p_()}async function CR(t){const e=ur(t);for(const n of t.O_)e.m_(n.mutations)}async function SR(t,e,n){const r=t.O_.shift(),i=uc.from(r,e,n);await i_(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Oa(t)}async function LR(t,e){e&&ur(t).V_&&await async function(r,i){if(function(o){return y0(o)&&o!==j.ABORTED}(i.code)){const s=r.O_.shift();ur(r).s_(),await i_(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Oa(r)}}(t,e),s_(t)&&o_(t)}async function Cf(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=Ur(n);n.L_.add(3),await Ws(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Na(n)}async function kR(t,e){const n=pe(t);e?(n.L_.delete(2),await Na(n)):e||(n.L_.add(2),await Ws(n),n.q_.set("Unknown"))}function Ci(t){return t.K_||(t.K_=function(n,r,i){const s=pe(n);return s.w_(),new mR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:ER.bind(null,t),Ro:bR.bind(null,t),mo:IR.bind(null,t),d_:wR.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),yc(t)?_c(t):t.q_.set("Unknown")):(await t.K_.stop(),r_(t))})),t.K_}function ur(t){return t.U_||(t.U_=function(n,r,i){const s=pe(n);return s.w_(),new _R(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:PR.bind(null,t),mo:LR.bind(null,t),f_:CR.bind(null,t),g_:SR.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Oa(t)):(await t.U_.stop(),t.O_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ln,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new vc(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tc(t,e){if(Nn("AsyncQueue",`${e}: ${t}`),$s(t))return new J(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=Qi(),this.sortedSet=new je(this.comparator)}static emptySet(e){return new li(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof li)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new li;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(){this.W_=new je(re.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):de():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ti{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ti(e,n,li.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ca(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class xR{constructor(){this.queries=Lf(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=pe(n),s=i.queries;i.queries=Lf(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new J(j.ABORTED,"Firestore shutting down"))}}function Lf(){return new Pi(t=>Sm(t),Ca)}async function Ec(t,e){const n=pe(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new DR,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Tc(o,`Initialization of query '${zr(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Ic(n)}async function bc(t,e){const n=pe(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function NR(t,e){const n=pe(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Ic(n)}function OR(t,e,n){const r=pe(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Ic(t){t.Y_.forEach(e=>{e.next()})}var du,kf;(kf=du||(du={})).ea="default",kf.Cache="cache";class wc{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ti(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ti.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==du.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e){this.key=e}}class l_{constructor(e){this.key=e}}class VR{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ve(),this.mutatedKeys=ve(),this.Aa=Lm(e),this.Ra=new li(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Sf,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const g=i.get(d),_=Sa(this.query,p)?p:null,L=!!g&&this.mutatedKeys.has(g.key),D=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let k=!1;g&&_?g.data.isEqual(_.data)?L!==D&&(r.track({type:3,doc:_}),k=!0):this.ga(g,_)||(r.track({type:2,doc:_}),k=!0,(u&&this.Aa(_,u)>0||c&&this.Aa(_,c)<0)&&(l=!0)):!g&&_?(r.track({type:0,doc:_}),k=!0):g&&!_&&(r.track({type:1,doc:g}),k=!0,(u||c)&&(l=!0)),k&&(_?(o=o.add(_),s=D?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(_,L){const D=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de()}};return D(_)-D(L)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Ti(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Sf,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ve(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new l_(r))}),this.da.forEach(r=>{e.has(r)||n.push(new a_(r))}),n}ba(e){this.Ta=e.Ts,this.da=ve();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ti.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class MR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class FR{constructor(e){this.key=e,this.va=!1}}class UR{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Pi(l=>Sm(l),Ca),this.Ma=new Map,this.xa=new Set,this.Oa=new je(re.comparator),this.Na=new Map,this.La=new dc,this.Ba={},this.ka=new Map,this.qa=vi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function HR(t,e,n=!0){const r=p_(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await u_(r,e,n,!0),i}async function jR(t,e){const n=p_(t);await u_(n,e,!0,!1)}async function u_(t,e,n,r){const i=await uR(t.localStore,fn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await BR(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&t_(t.remoteStore,i),l}async function BR(t,e,n,r,i){t.Ka=(p,g,_)=>async function(D,k,U,N){let O=k.view.ma(U);O.ns&&(O=await Af(D.localStore,k.query,!1).then(({documents:I})=>k.view.ma(I,O)));const F=N&&N.targetChanges.get(k.targetId),ce=N&&N.targetMismatches.get(k.targetId)!=null,me=k.view.applyChanges(O,D.isPrimaryClient,F,ce);return xf(D,k.targetId,me.wa),me.snapshot}(t,p,g,_);const s=await Af(t.localStore,e,!0),o=new VR(e,s.Ts),l=o.ma(s.documents),u=Ks.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);xf(t,n,c.wa);const d=new MR(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function $R(t,e,n){const r=pe(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Ca(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await hu(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&gc(r.remoteStore,i.targetId),fu(r,i.targetId)}).catch(Bs)):(fu(r,i.targetId),await hu(r.localStore,i.targetId,!0))}async function qR(t,e){const n=pe(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),gc(n.remoteStore,r.targetId))}async function GR(t,e,n){const r=JR(t);try{const i=await function(o,l){const u=pe(o),c=Qe.now(),d=l.reduce((_,L)=>_.add(L.key),ve());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let L=On(),D=ve();return u.cs.getEntries(_,d).next(k=>{L=k,L.forEach((U,N)=>{N.isValidDocument()||(D=D.add(U))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,L)).next(k=>{p=k;const U=[];for(const N of l){const O=f0(N,p.get(N.key).overlayedDocument);O!=null&&U.push(new gr(N.key,O,Em(O.value.mapValue),qt.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,U,l)}).next(k=>{g=k;const U=k.applyToLocalDocumentSet(p,D);return u.documentOverlayCache.saveOverlays(_,k.batchId,U)})}).then(()=>({batchId:g.batchId,changes:Dm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new je(Re)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await zs(r,i.changes),await Oa(r.remoteStore)}catch(i){const s=Tc(i,"Failed to persist write");n.reject(s)}}async function c_(t,e){const n=pe(t);try{const r=await oR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ke(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ke(o.va):i.removedDocuments.size>0&&(ke(o.va),o.va=!1))}),await zs(n,r,e)}catch(r){await Bs(r)}}function Df(t,e,n){const r=pe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=pe(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const g of p.j_)g.Z_(l)&&(c=!0)}),c&&Ic(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function KR(t,e,n){const r=pe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new je(re.comparator);o=o.insert(s,yt.newNoDocument(s,fe.min()));const l=ve().add(s),u=new Da(fe.min(),new Map,new je(Re),o,l);await c_(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Ac(r)}else await hu(r.localStore,e,!1).then(()=>fu(r,e,n)).catch(Bs)}async function WR(t,e){const n=pe(t),r=e.batch.batchId;try{const i=await sR(n.localStore,e);d_(n,r,null),h_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zs(n,i)}catch(i){await Bs(i)}}async function zR(t,e,n){const r=pe(t);try{const i=await function(o,l){const u=pe(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ke(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);d_(r,e,n),h_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await zs(r,i)}catch(i){await Bs(i)}}function h_(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function d_(t,e,n){const r=pe(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function fu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||f_(t,r)})}function f_(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(gc(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Ac(t))}function xf(t,e,n){for(const r of n)r instanceof a_?(t.La.addReference(r.key,e),XR(t,r)):r instanceof l_?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||f_(t,r.key)):de()}function XR(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.xa.add(r),Ac(t))}function Ac(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new re(Fe.fromString(e)),r=t.qa.next();t.Na.set(r,new FR(n)),t.Oa=t.Oa.insert(n,r),t_(t.remoteStore,new er(fn(Pa(n.path)),r,"TargetPurposeLimboResolution",tc.oe))}}async function zs(t,e,n){const r=pe(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=pc.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=pe(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>$.forEach(c,g=>$.forEach(g.$i,_=>d.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>$.forEach(g.Ui,_=>d.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!$s(p))throw p;ee("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const g=p.targetId;if(!p.fromCache){const _=d.os.get(g),L=_.snapshotVersion,D=_.withLastLimboFreeSnapshotVersion(L);d.os=d.os.insert(g,D)}}}(r.localStore,s))}async function QR(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await Ym(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new J(j.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zs(n,r.hs)}}function YR(t,e){const n=pe(t),r=n.Na.get(e);if(r&&r.va)return ve().add(r.key);{let i=ve();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function p_(t){const e=pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=c_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KR.bind(null,e),e.Ca.d_=NR.bind(null,e.eventManager),e.Ca.$a=OR.bind(null,e.eventManager),e}function JR(t){const e=pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=WR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zR.bind(null,e),e}class ra{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=xa(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return iR(this.persistence,new nR,e.initialUser,this.serializer)}Ga(e){return new Z0(fc.Zr,this.serializer)}Wa(e){return new hR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ra.provider={build:()=>new ra};class pu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Df(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=QR.bind(null,this.syncEngine),await kR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new xR}()}createDatastore(e){const n=xa(e.databaseInfo.databaseId),r=function(s){return new gR(s)}(e.databaseInfo);return function(s,o,l,u){return new yR(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new TR(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Df(this.syncEngine,n,0),function(){return Pf.D()?new Pf:new dR}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new UR(i,s,o,l,u,c);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=pe(i);ee("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Ws(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}pu.provider={build:()=>new pu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Nn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=ym.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{ee("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ln;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Tc(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Cl(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Ym(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Nf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await eP(t);ee("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Cf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Cf(e.remoteStore,i)),t._onlineComponents=e}async function eP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await Cl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;gi("Error using user provided cache. Falling back to memory cache: "+n),await Cl(t,new ra)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await Cl(t,new ra);return t._offlineComponents}async function g_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await Nf(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await Nf(t,new pu))),t._onlineComponents}function tP(t){return g_(t).then(e=>e.syncEngine)}async function ia(t){const e=await g_(t),n=e.eventManager;return n.onListen=HR.bind(null,e.syncEngine),n.onUnlisten=$R.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=jR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=qR.bind(null,e.syncEngine),n}function nP(t,e,n={}){const r=new Ln;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Rc({next:g=>{d.Za(),o.enqueueAndForget(()=>bc(s,p));const _=g.docs.has(l);!_&&g.fromCache?c.reject(new J(j.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&u&&u.source==="server"?c.reject(new J(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new wc(Pa(l.path),d,{includeMetadataChanges:!0,_a:!0});return Ec(s,p)}(await ia(t),t.asyncQueue,e,n,r)),r.promise}function rP(t,e,n={}){const r=new Ln;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Rc({next:g=>{d.Za(),o.enqueueAndForget(()=>bc(s,p)),g.fromCache&&u.source==="server"?c.reject(new J(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new wc(l,d,{includeMetadataChanges:!0,_a:!0});return Ec(s,p)}(await ia(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(t,e,n){if(!n)throw new J(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function iP(t,e,n,r){if(e===!0&&r===!0)throw new J(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vf(t){if(!re.isDocumentKey(t))throw new J(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Mf(t){if(re.isDocumentKey(t))throw new J(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Va(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function kt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Va(t);throw new J(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new J(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}iP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=m_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new J(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new J(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new J(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ma{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ff({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ff(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new EA;switch(r.type){case"firstParty":return new AA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Of.get(n);r&&(ee("ComponentProvider","Removing Datastore"),Of.delete(n),r.terminate())}(this),Promise.resolve()}}function sP(t,e,n,r={}){var i;const s=(t=kt(t,Ma))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&gi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=gt.MOCK_USER;else{l=FE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new J(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new gt(c)}t._authCredentials=new bA(new _m(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hr(this.firestore,e,this._query)}}class bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bt(this.firestore,e,this._key)}}class sr extends Hr{constructor(e,n,r){super(e,n,Pa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bt(this.firestore,null,new re(e))}withConverter(e){return new sr(this.firestore,e,this._path)}}function fs(t,e,...n){if(t=Xe(t),__("collection","path",e),t instanceof Ma){const r=Fe.fromString(e,...n);return Mf(r),new sr(t,null,r)}{if(!(t instanceof bt||t instanceof sr))throw new J(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return Mf(r),new sr(t.firestore,null,r)}}function Yt(t,e,...n){if(t=Xe(t),arguments.length===1&&(e=ym.newId()),__("doc","path",e),t instanceof Ma){const r=Fe.fromString(e,...n);return Vf(r),new bt(t,null,new re(r))}{if(!(t instanceof bt||t instanceof sr))throw new J(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return Vf(r),new bt(t.firestore,t instanceof sr?t.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Zm(this,"async_queue_retry"),this.Vu=()=>{const r=Pl();r&&ee("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Pl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Pl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Ln;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!$s(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Nn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=vc.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&de()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Hf(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Vn extends Ma{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Uf,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Uf(e),this._firestoreClient=void 0,await e}}}function Pc(t,e){const n=typeof t=="object"?t:Pg(),r=typeof t=="string"?t:"(default)",i=Bu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=VE("firestore");s&&sP(i,...s)}return i}function Fa(t){if(t._terminated)throw new J(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||oP(t),t._firestoreClient}function oP(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new FA(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,m_(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new ZR(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ei(ut.fromBase64String(e))}catch(n){throw new J(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ei(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP=/^__.*__$/;class lP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new gr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Gs(e,this.data,n,this.fieldTransforms)}}class y_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new gr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function v_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class Lc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Lc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return sa(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(v_(this.Cu)&&aP.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class uP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||xa(e)}Qu(e,n,r,i=!1){return new Lc({Cu:e,methodName:n,qu:r,path:st.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ja(t){const e=t._freezeSettings(),n=xa(t._databaseId);return new uP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function T_(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Dc("Data must be an object, but it was:",o,r);const l=E_(r,o);let u,c;if(s.merge)u=new Mt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const g=gu(e,p,n);if(!o.contains(g))throw new J(j.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);I_(d,g)||d.push(g)}u=new Mt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new lP(new Lt(l),u,c)}class Ba extends Ha{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ba}}class kc extends Ha{_toFieldTransform(e){return new u0(e.path,new Ls)}isEqual(e){return e instanceof kc}}function cP(t,e,n,r){const i=t.Qu(1,e,n);Dc("Data must be an object, but it was:",i,r);const s=[],o=Lt.empty();Fr(r,(u,c)=>{const d=xc(e,u,n);c=Xe(c);const p=i.Nu(d);if(c instanceof Ba)s.push(d);else{const g=Xs(c,p);g!=null&&(s.push(d),o.set(d,g))}});const l=new Mt(s);return new y_(o,l,i.fieldTransforms)}function hP(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[gu(e,r,n)],u=[i];if(s.length%2!=0)throw new J(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(gu(e,s[g])),u.push(s[g+1]);const c=[],d=Lt.empty();for(let g=l.length-1;g>=0;--g)if(!I_(c,l[g])){const _=l[g];let L=u[g];L=Xe(L);const D=o.Nu(_);if(L instanceof Ba)c.push(_);else{const k=Xs(L,D);k!=null&&(c.push(_),d.set(_,k))}}const p=new Mt(c);return new y_(d,p,o.fieldTransforms)}function dP(t,e,n,r=!1){return Xs(n,t.Qu(r?4:3,e))}function Xs(t,e){if(b_(t=Xe(t)))return Dc("Unsupported field value:",e,t),E_(t,e);if(t instanceof Ha)return function(r,i){if(!v_(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Xs(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return o0(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Qe.fromDate(r);return{timestampValue:ta(i.serializer,s)}}if(r instanceof Qe){const s=new Qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ta(i.serializer,s)}}if(r instanceof Cc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ei)return{bytesValue:qm(i.serializer,r._byteString)};if(r instanceof bt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:hc(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Sc)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return ac(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Va(r)}`)}(t,e)}function E_(t,e){const n={};return vm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fr(t,(r,i)=>{const s=Xs(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function b_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof Cc||t instanceof Ei||t instanceof bt||t instanceof Ha||t instanceof Sc)}function Dc(t,e,n){if(!b_(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Va(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function gu(t,e,n){if((e=Xe(e))instanceof Ua)return e._internalPath;if(typeof e=="string")return xc(t,e);throw sa("Field path arguments must be of type string or ",t,!1,void 0,n)}const fP=new RegExp("[~\\*/\\[\\]]");function xc(t,e,n){if(e.search(fP)>=0)throw sa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ua(...e.split("."))._internalPath}catch{throw sa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function sa(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new J(j.INVALID_ARGUMENT,l+t+u)}function I_(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Nc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pP extends w_{data(){return super.data()}}function Nc(t,e){return typeof e=="string"?xc(t,e):e instanceof Ua?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Oc{}class gP extends Oc{}function jf(t,e,...n){let r=[];e instanceof Oc&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Vc).length,l=s.filter(u=>u instanceof $a).length;if(o>1||o>0&&l>0)throw new J(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class $a extends gP{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new $a(e,n,r)}_apply(e){const n=this._parse(e);return R_(e._query,n),new Hr(e.firestore,e.converter,su(e._query,n))}_parse(e){const n=ja(e.firestore);return function(s,o,l,u,c,d,p){let g;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new J(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){qf(p,d);const _=[];for(const L of p)_.push($f(u,s,L));g={arrayValue:{values:_}}}else g=$f(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||qf(p,d),g=dP(l,o,p,d==="in"||d==="not-in");return ze.create(c,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Bf(t,e,n){const r=e,i=Nc("where",t);return $a._create(i,r,n)}class Vc extends Oc{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Vc(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:rn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)R_(o,u),o=su(o,u)}(e._query,n),new Hr(e.firestore,e.converter,su(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function $f(t,e,n){if(typeof(n=Xe(n))=="string"){if(n==="")throw new J(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Cm(e)&&n.indexOf("/")!==-1)throw new J(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Fe.fromString(n));if(!re.isDocumentKey(r))throw new J(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return lf(t,new re(r))}if(n instanceof bt)return lf(t,n._key);throw new J(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Va(n)}.`)}function qf(t,e){if(!Array.isArray(t)||t.length===0)throw new J(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function R_(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new J(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class mP{convertValue(e,n="none"){switch(Nr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(xr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw de()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Fr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>qe(o.doubleValue));return new Sc(s)}convertGeoPoint(e){return new Cc(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=rc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ps(e));default:return null}}convertTimestamp(e){const n=lr(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Fe.fromString(e);ke(Qm(r));const i=new Cs(r.get(1),r.get(3)),s=new re(r.popFirst(5));return i.isEqual(n)||Nn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class C_ extends w_{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new No(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Nc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class No extends C_{data(e={}){return super.data(e)}}class S_{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ji(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new No(this._firestore,this._userDataWriter,r.key,r,new Ji(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new No(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ji(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new No(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ji(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:_P(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function _P(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t){t=kt(t,bt);const e=kt(t.firestore,Vn);return nP(Fa(e),t._key).then(n=>k_(e,t,n))}class Mc extends mP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ei(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new bt(this.firestore,null,n)}}function mu(t){t=kt(t,Hr);const e=kt(t.firestore,Vn),n=Fa(e),r=new Mc(e);return A_(t._query),rP(n,t._query).then(i=>new S_(e,r,t,i))}function Gf(t,e,n){t=kt(t,bt);const r=kt(t.firestore,Vn),i=P_(t.converter,e);return qa(r,[T_(ja(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,qt.none())])}function yP(t,e,n,...r){t=kt(t,bt);const i=kt(t.firestore,Vn),s=ja(i);let o;return o=typeof(e=Xe(e))=="string"||e instanceof Ua?hP(s,"updateDoc",t._key,e,n,r):cP(s,"updateDoc",t._key,e),qa(i,[o.toMutation(t._key,qt.exists(!0))])}function L_(t){return qa(kt(t.firestore,Vn),[new lc(t._key,qt.none())])}function vP(t,e){const n=kt(t.firestore,Vn),r=Yt(t),i=P_(t.converter,e);return qa(n,[T_(ja(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,qt.exists(!1))]).then(()=>r)}function TP(t,...e){var n,r,i;t=Xe(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Hf(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Hf(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,d;if(t instanceof bt)c=kt(t.firestore,Vn),d=Pa(t._key.path),u={next:p=>{e[o]&&e[o](k_(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=kt(t,Hr);c=kt(p.firestore,Vn),d=p._query;const g=new Mc(c);u={next:_=>{e[o]&&e[o](new S_(c,g,p,_))},error:e[o+1],complete:e[o+2]},A_(t._query)}return function(g,_,L,D){const k=new Rc(D),U=new wc(_,k,L);return g.asyncQueue.enqueueAndForget(async()=>Ec(await ia(g),U)),()=>{k.Za(),g.asyncQueue.enqueueAndForget(async()=>bc(await ia(g),U))}}(Fa(c),d,l,u)}function qa(t,e){return function(r,i){const s=new Ln;return r.asyncQueue.enqueueAndForget(async()=>GR(await tP(r),i,s)),s.promise}(Fa(t),e)}function k_(t,e,n){const r=n.docs.get(e._key),i=new Mc(t);return new C_(t,i,e._key,r,new Ji(n.hasPendingWrites,n.fromCache),e.converter)}function EP(){return new kc("serverTimestamp")}(function(e,n=!0){(function(i){Ri=i})(Ii),fi(new Lr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Vn(new IA(r.getProvider("auth-internal")),new PA(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new J(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cs(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),ir(nf,"4.7.3",e),ir(nf,"4.7.3","esm2017")})();const bP={apiKey:"AIzaSyARxX9KlWhlcZ7OeY_NN1WfqMwUxx5KZ1s",authDomain:"tooling-hero-dang.firebaseapp.com",projectId:"tooling-hero-dang",storageBucket:"tooling-hero-dang.firebasestorage.app",messagingSenderId:"937312439116",appId:"1:937312439116:web:8b745d17d8cb2e4f4b5de9"},D_=Dd().length===0?Rg(bP):Dd()[0],cr=en(D_),wn=Pc(D_),Wt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},IP={class:"fixed top-0 inset-x-0 z-50 bg-white dark:bg-gray-900 shadow-md flex items-center justify-between px-4 py-2"},wP={class:"flex items-center gap-2 sm:gap-4"},AP={class:"hidden sm:flex border rounded overflow-hidden text-sm font-medium",role:"group"},RP={class:"relative"},PP=["aria-expanded"],CP={key:0,class:"absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border dark:border-gray-600 rounded shadow-lg z-50"},Kf="bg-blue-600 text-white px-2 py-1",Wf="bg-white text-gray-700 dark:bg-gray-700 dark:text-gray-200 px-2 py-1",SP={__name:"Navbar",setup(t){const e=Ta(),n=Et("loginModalRef"),r=ie(localStorage.getItem("unit")||"inch"),i=ie(!1),s=ie(null),o=()=>{i.value=!i.value},l=()=>{i.value=!1},u=g=>{r.value=g,localStorage.setItem("unit",g)},c=async()=>{await lw(cr),s.value=null,l(),e.push("/")},d=g=>{s.value?e.push(g):n==null||n.openLogin()},p=()=>{l(),n==null||n.openLogin()};return Vr(()=>{Ia(cr,g=>{s.value=g}),document.addEventListener("keydown",g=>{g.key==="Escape"&&l()})}),pa(()=>{document.removeEventListener("keydown",g=>{g.key==="Escape"&&l()})}),(g,_)=>{const L=Mr("router-link"),D=av("click-outside");return ne(),ae("nav",IP,[R("button",{onClick:_[0]||(_[0]=k=>g.$emit("toggleDrawer")),class:"text-xl text-gray-700 dark:text-gray-200 sm:hidden"},_[8]||(_[8]=[R("i",{class:"fas fa-bars"},null,-1)])),Ne(L,{to:"/",class:"absolute left-1/2 transform -translate-x-1/2","aria-label":"Home"},{default:hn(()=>_[9]||(_[9]=[R("img",{src:_g,alt:"Logo",class:"h-8"},null,-1)])),_:1}),R("div",wP,[R("div",AP,[R("button",{onClick:_[1]||(_[1]=k=>u("inch")),class:Cr(r.value==="inch"?Kf:Wf)},"Inch",2),R("button",{onClick:_[2]||(_[2]=k=>u("metric")),class:Cr(r.value==="metric"?Kf:Wf)},"Metric",2)]),R("button",{onClick:_[3]||(_[3]=k=>d("/DANG")),class:"hidden sm:inline text-sm px-3 py-2 rounded hover:bg-blue-100 dark:hover:bg-gray-700"}," 🧰 Create Tool "),R("button",{onClick:_[4]||(_[4]=k=>d("/library")),class:"hidden sm:inline text-sm px-3 py-2 rounded hover:bg-blue-100 dark:hover:bg-gray-700"}," 📂 Library "),R("button",{onClick:_[5]||(_[5]=k=>d("/dashboard")),class:"bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded shadow hover:bg-blue-700"}," Start App "),Ze((ne(),ae("div",RP,[R("button",{onClick:o,class:"text-gray-700 dark:text-gray-200 flex items-center gap-1","aria-haspopup":"true","aria-expanded":i.value.toString()},_[10]||(_[10]=[R("i",{class:"fas fa-user-circle text-2xl"},null,-1),R("span",{class:"hidden sm:inline text-sm"},"Account",-1)]),8,PP),i.value?(ne(),ae("div",CP,[s.value?(ne(),ae(it,{key:0},[R("button",{onClick:_[6]||(_[6]=k=>d("/account")),class:"block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"}," 👤 My Account "),R("button",{onClick:_[7]||(_[7]=k=>d("/settings")),class:"block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"}," ⚙️ Settings "),R("button",{onClick:c,class:"w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"}," 🚪 Logout ")],64)):(ne(),ae("button",{key:1,onClick:p,class:"block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"}," 🔐 Login / Register "))])):$e("",!0)])),[[D,l]])])])}}},LP=Wt(SP,[["__scopeId","data-v-f2c8fc54"]]),kP={class:"min-h-screen bg-gray-50 dark:bg-gray-900"},DP={class:"pt-16"},xP={class:"max-w-5xl w-full mx-auto px-4"},NP={__name:"DefaultLayout",setup(t){return(e,n)=>(ne(),ae("div",kP,[Ne(LP),R("main",DP,[R("div",xP,[Ou(e.$slots,"default")])])]))}},OP={class:"min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"},VP={class:"w-full max-w-md p-6"},MP={__name:"AuthLayout",setup(t){return(e,n)=>(ne(),ae("div",OP,[R("main",VP,[Ou(e.$slots,"default",{},void 0,!0)])]))}},FP=Wt(MP,[["__scopeId","data-v-e3efb924"]]),UP={class:"min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white flex flex-col"},HP={class:"flex items-center justify-between px-6 py-4 shadow sticky top-0 bg-white dark:bg-gray-900 z-50"},jP={class:"flex-1"},BP={class:"text-center text-sm text-gray-500 dark:text-gray-400 py-6 border-t dark:border-gray-700 mt-8"},$P={__name:"MarketingLayout",setup(t){const e=Ta(),n=Et("loginModalRef"),r=Et("demoModalRef"),i=()=>{en().currentUser?e.push("/dashboard"):n==null||n.openLogin()},s=()=>{r==null||r.open()};return(o,l)=>{const u=Mr("router-link");return ne(),ae("div",UP,[R("nav",HP,[Ne(u,{to:"/","aria-label":"Tooling Hero Home",class:"text-xl font-bold flex items-center gap-2"},{default:hn(()=>l[0]||(l[0]=[R("img",{src:_g,alt:"Tooling Hero Logo",class:"h-8"},null,-1),R("span",null,"Tooling Hero",-1)])),_:1}),R("div",{class:"flex items-center gap-4"},[R("button",{onClick:i,class:"bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded shadow transition duration-200","aria-label":"Start App"}," 🚀 Start App "),R("button",{onClick:s,class:"text-blue-600 hover:underline hidden sm:inline text-sm","aria-label":"Request Demo"}," 🎯 Request a Demo ")])]),R("main",jP,[Ou(o.$slots,"default",{},void 0,!0)]),R("footer",BP," © "+Le(new Date().getFullYear())+" Tooling Hero. All rights reserved. ",1)])}}},qP=Wt($P,[["__scopeId","data-v-d3d8cb8e"]]),GP={key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"},KP={class:"bg-white dark:bg-gray-900 p-8 rounded-lg w-full max-w-sm mx-4 relative"},WP={class:"text-center mb-6"},zP={class:"text-2xl font-bold text-[#1B2A41] dark:text-white"},XP={class:"space-y-4"},QP={type:"submit",class:"btn bg-[#0077B6] hover:bg-[#0096C7] mt-6"},YP={key:0,class:"text-red-500 text-sm text-center mt-4"},JP={class:"text-center text-sm mt-6 text-gray-500 dark:text-gray-400"},ZP={__name:"LoginRegisterModal",setup(t,{expose:e}){const n=Et("toastRef"),r=ie(!1),i=ie("login"),s=ie(""),o=ie(""),l=ie(""),u=()=>{r.value=!1,s.value="",o.value="",l.value=""},c=()=>{i.value="login",r.value=!0},d=()=>{i.value="register",r.value=!0},p=()=>{i.value=i.value==="login"?"register":"login"},g=async()=>{try{i.value==="login"?(await Zg(cr,s.value,o.value),n==null||n.show("✅ Welcome back!")):(await Jg(cr,s.value,o.value),n==null||n.show("✅ Account created!")),u()}catch(_){console.error(_),l.value=_.message}};return e({open:r,openLogin:c,openRegister:d,close:u}),(_,L)=>r.value?(ne(),ae("div",GP,[R("div",KP,[R("button",{onClick:u,class:"absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-white"},L[2]||(L[2]=[R("i",{class:"fas fa-times"},null,-1)])),R("div",WP,[R("h2",zP,Le(i.value==="login"?"Sign In":"Create Account"),1)]),R("form",{onSubmit:ig(g,["prevent"])},[R("div",XP,[Ze(R("input",{"onUpdate:modelValue":L[0]||(L[0]=D=>s.value=D),type:"email",placeholder:"Email",class:"input",required:""},null,512),[[Ft,s.value]]),Ze(R("input",{"onUpdate:modelValue":L[1]||(L[1]=D=>o.value=D),type:"password",placeholder:"Password",class:"input",required:""},null,512),[[Ft,o.value]])]),R("button",QP,Le(i.value==="login"?"Sign In":"Register"),1),l.value?(ne(),ae("p",YP,Le(l.value),1)):$e("",!0),R("p",JP,[at(Le(i.value==="login"?"Don't have an account?":"Already have an account?")+" ",1),R("button",{type:"button",onClick:p,class:"text-blue-600 hover:underline"},Le(i.value==="login"?"Register":"Login"),1)])],32)])])):$e("",!0)}},eC=Wt(ZP,[["__scopeId","data-v-13883add"]]),tC={key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-4"},nC={class:"bg-white dark:bg-gray-900 p-8 rounded-lg max-w-md w-full relative shadow-lg transition-all duration-300"},rC={key:0,class:"text-green-600 text-sm text-center mt-4"},iC={__name:"DemoModal",setup(t,{expose:e}){const n=ie(!1),r=ie(""),i=ie(""),s=ie(""),o=ie(""),l=()=>{n.value=!0},u=()=>{n.value=!1,r.value="",i.value="",s.value="",o.value=""},c=()=>{o.value="✅ Request sent successfully! We will contact you shortly.",setTimeout(u,2500)};return e({open:l,close:u}),(d,p)=>n.value?(ne(),ae("div",tC,[R("div",nC,[R("button",{onClick:u,class:"absolute top-2 right-2 text-gray-400 hover:text-gray-700 dark:hover:text-white transition","aria-label":"Close"},p[3]||(p[3]=[R("i",{class:"fas fa-times"},null,-1)])),p[5]||(p[5]=R("div",{class:"text-center mb-6"},[R("h2",{class:"text-3xl font-extrabold text-[#1B2A41] dark:text-white"}," 🎯 Request a Demo "),R("p",{class:"text-gray-500 dark:text-gray-400 text-sm mt-2"}," Let's help you streamline your tooling workflow! ")],-1)),R("form",{onSubmit:ig(c,["prevent"]),class:"space-y-4"},[Ze(R("input",{"onUpdate:modelValue":p[0]||(p[0]=g=>r.value=g),type:"text",placeholder:"Your Name",class:"input",required:""},null,512),[[Ft,r.value]]),Ze(R("input",{"onUpdate:modelValue":p[1]||(p[1]=g=>i.value=g),type:"email",placeholder:"Your Email",class:"input",required:""},null,512),[[Ft,i.value]]),Ze(R("textarea",{"onUpdate:modelValue":p[2]||(p[2]=g=>s.value=g),placeholder:"Tell us what you're looking for...",class:"input h-24",required:""},null,512),[[Ft,s.value]]),p[4]||(p[4]=R("button",{type:"submit",class:"btn bg-[#0077B6] hover:bg-[#0096C7] mt-4"}," 📩 Send Request ",-1)),o.value?(ne(),ae("p",rC,Le(o.value),1)):$e("",!0)],32)])])):$e("",!0)}},sC=Wt(iC,[["__scopeId","data-v-68b225ef"]]),oC={__name:"App",setup(t){const e=CE(),n=ie(null),r=ie(null);ii("loginModalRef",n),ii("demoModalRef",r);const i=Je(()=>{const s=e.meta.layout;return s==="AuthLayout"?FP:s==="MarketingLayout"?qP:NP});return(s,o)=>{const l=Mr("router-view");return ne(),ae("div",null,[Ne(eC,{ref_key:"loginModalRef",ref:n},null,512),Ne(sC,{ref_key:"demoModalRef",ref:r},null,512),(ne(),Bo(ov(i.value),null,{default:hn(()=>[Ne(l)]),_:1}))])}}},aC={class:"bg-white pt-24 pb-32 text-center fade-in"},lC={class:"container mx-auto px-6"},uC={class:"mb-20"},cC=["disabled"],hC={key:0,class:"animate-spin mr-2"},dC={class:"bg-gray-50 border border-blue-100 p-10 rounded-xl shadow-md max-w-3xl mx-auto text-left"},fC={class:"flex flex-col sm:flex-row justify-center gap-4"},pC=["disabled"],gC={__name:"Home",setup(t){const e=Et("loginModalRef"),n=ie(!1),r=()=>{const i=en();n.value=!0,Ia(i,s=>{s?window.location.href="https://dang.toolinghero.us/dashboard":(n.value=!1,e==null||e.openLogin())})};return(i,s)=>{const o=Mr("router-link");return ne(),ae("section",aC,[R("div",lC,[s[3]||(s[3]=R("h1",{class:"text-5xl font-extrabold text-gray-900 leading-tight mb-4"},[at(" Welcome to "),R("span",{class:"text-blue-600"},"Tooling Hero")],-1)),s[4]||(s[4]=R("p",{class:"text-lg text-gray-600 max-w-xl mx-auto mb-12"}," Empowering manufacturers with smarter tooling workflows — from shop floor to digital twin. ",-1)),R("div",uC,[R("button",{onClick:r,class:"btn-primary inline-flex items-center justify-center",disabled:n.value},[n.value?(ne(),ae("span",hC,"🔄")):$e("",!0),R("span",null,Le(n.value?"Loading...":"🚀 Start App"),1)],8,cC)]),R("div",dC,[s[1]||(s[1]=R("h2",{class:"text-3xl font-bold text-blue-800 mb-4 text-center"},"🔥 Meet DANG",-1)),s[2]||(s[2]=R("p",{class:"text-gray-700 mb-8 leading-relaxed text-center"},[R("strong",null,"DANG"),at(" (Description And Naming Generator) standardizes your tooling language across Zoller, Mastercam, and ERP systems — cutting confusion and boosting productivity. ")],-1)),R("div",fC,[R("button",{onClick:r,class:"btn-primary",disabled:n.value}," ⚙️ Launch DANG ",8,pC),Ne(o,{to:"/about",class:"btn-secondary"},{default:hn(()=>s[0]||(s[0]=[at(" 📘 Learn More ")])),_:1})])])]),s[5]||(s[5]=R("footer",{class:"text-center text-sm text-gray-400 mt-24"}," © 2025 Tooling Hero by WeCr8 Solutions · All rights reserved ",-1))])}}},mC=Wt(gC,[["__scopeId","data-v-24acdb9c"]]),_C={class:"pt-20 px-4 max-w-6xl mx-auto space-y-10"},yC={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"},vC={__name:"Dashboard",setup(t){return(e,n)=>{const r=Mr("router-link");return ne(),ae("section",_C,[n[3]||(n[3]=R("div",{class:"text-center"},[R("h1",{class:"text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white"},[at(" 🛠️ Welcome to "),R("span",{class:"text-blue-600 dark:text-blue-400"},"Tooling Hero: DANG")]),R("p",{class:"text-gray-600 dark:text-gray-300 mt-4 text-lg"}," Intelligent Tool ID & Description Generation — ready to boost your workflow. ")],-1)),R("div",yC,[Ne(r,{to:"/DANG",class:"group bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-6 flex flex-col items-center justify-center text-center shadow transition transform hover:-translate-y-1 hover:shadow-lg"},{default:hn(()=>n[0]||(n[0]=[R("div",{class:"text-4xl mb-3 group-hover:animate-bounce"},"🆕",-1),R("h2",{class:"text-lg font-semibold"},"Create New Tool ID",-1),R("p",{class:"text-sm opacity-80 mt-2"},"Start generating IDs and descriptions intelligently.",-1)])),_:1}),Ne(r,{to:"/library",class:"group bg-green-600 hover:bg-green-700 text-white rounded-lg p-6 flex flex-col items-center justify-center text-center shadow transition transform hover:-translate-y-1 hover:shadow-lg"},{default:hn(()=>n[1]||(n[1]=[R("div",{class:"text-4xl mb-3 group-hover:animate-bounce"},"📚",-1),R("h2",{class:"text-lg font-semibold"},"View Tool Library",-1),R("p",{class:"text-sm opacity-80 mt-2"},"Browse, search, and export your saved tools.",-1)])),_:1}),Ne(r,{to:"/settings",class:"group bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-lg p-6 flex flex-col items-center justify-center text-center shadow transition transform hover:-translate-y-1 hover:shadow-lg"},{default:hn(()=>n[2]||(n[2]=[R("div",{class:"text-4xl mb-3 group-hover:animate-spin"},"⚙️",-1),R("h2",{class:"text-lg font-semibold"},"Settings",-1),R("p",{class:"text-sm opacity-80 mt-2"},"Manage your account, team, and preferences.",-1)])),_:1})])])}}},TC=Wt(vC,[["__scopeId","data-v-d51a36d1"]]),EC={class:"max-w-md mx-auto mt-20 space-y-4 text-center"},bC={class:"text-sm mt-2 text-gray-500"},IC={key:0,class:"text-red-500"},wC={__name:"Login",setup(t){const e=ie(""),n=ie(""),r=ie(""),i=Ta(),s=async()=>{try{const l=en();await Zg(l,e.value,n.value),i.push("/")}catch(l){r.value=l.message}},o=async()=>{try{const l=en(),u=new un;await Zl(l,u),i.push("/")}catch(l){r.value=l.message}};return Vr(()=>{Ia(en(),l=>{l&&i.push("/")})}),(l,u)=>{const c=Mr("router-link");return ne(),ae("div",EC,[u[4]||(u[4]=R("h1",{class:"text-2xl font-bold"},"Login to DANG",-1)),Ze(R("input",{"onUpdate:modelValue":u[0]||(u[0]=d=>e.value=d),type:"email",placeholder:"Email",class:"input"},null,512),[[Ft,e.value]]),Ze(R("input",{"onUpdate:modelValue":u[1]||(u[1]=d=>n.value=d),type:"password",placeholder:"Password",class:"input"},null,512),[[Ft,n.value]]),R("button",{onClick:s,class:"btn bg-blue-600"},"Login"),u[5]||(u[5]=R("div",{class:"my-4 text-gray-500"},"or",-1)),R("button",{onClick:o,class:"btn bg-red-500"},"Sign in with Google"),R("p",bC,[u[3]||(u[3]=at(" Don’t have an account? ")),Ne(c,{class:"underline text-blue-600",to:"/register"},{default:hn(()=>u[2]||(u[2]=[at("Register")])),_:1})]),r.value?(ne(),ae("p",IC,Le(r.value),1)):$e("",!0)])}}},AC=Wt(wC,[["__scopeId","data-v-5efdc419"]]),RC={class:"max-w-md mx-auto mt-20 px-6 py-8 bg-[#F5F7FA] shadow-xl rounded-lg space-y-6 text-center border border-[#1B2A41]/10"},PC={class:"space-y-3 text-left"},CC={class:"text-sm mt-4 text-gray-500"},SC={key:0,class:"text-[#D62828] text-sm"},LC={__name:"Register",setup(t){const e=ie(""),n=ie(""),r=ie(""),i=Ta(),s=async()=>{try{const u=en();await Jg(u,e.value,n.value),i.push("/")}catch(u){r.value=u.message}},o=async()=>{try{const u=en(),c=new un;await Zl(u,c),i.push("/")}catch(u){r.value=u.message}},l=async()=>{try{const u=en(),c=new ls("apple.com");await Zl(u,c),i.push("/")}catch(u){r.value=u.message}};return(u,c)=>{const d=Mr("router-link");return ne(),ae("div",RC,[c[4]||(c[4]=R("div",null,[R("h1",{class:"text-3xl font-extrabold text-[#1B2A41]"},"Tooling Hero"),R("p",{class:"text-sm text-[#0077B6] tracking-wide"},"Register your DANG account")],-1)),R("div",PC,[Ze(R("input",{"onUpdate:modelValue":c[0]||(c[0]=p=>e.value=p),type:"email",placeholder:"Email",class:"input"},null,512),[[Ft,e.value]]),Ze(R("input",{"onUpdate:modelValue":c[1]||(c[1]=p=>n.value=p),type:"password",placeholder:"Password",class:"input"},null,512),[[Ft,n.value]]),R("button",{onClick:s,class:"btn bg-[#0077B6] hover:bg-[#0096C7]"}," Register with Email ")]),c[5]||(c[5]=R("div",{class:"flex items-center gap-2 text-gray-400 text-sm"},[R("div",{class:"flex-1 border-t"}),at(" or "),R("div",{class:"flex-1 border-t"})],-1)),R("div",{class:"space-y-3"},[R("button",{onClick:o,class:"btn bg-[#D62828] hover:bg-red-700"}," 🔴 Register with Google "),R("button",{onClick:l,class:"btn bg-[#1B2A41] hover:bg-gray-900"},"  Register with Apple ")]),R("p",CC,[c[3]||(c[3]=at(" Already have an account? ")),Ne(d,{class:"underline text-[#0077B6] hover:text-[#0096C7]",to:"/login"},{default:hn(()=>c[2]||(c[2]=[at("Login here")])),_:1})]),r.value?(ne(),ae("p",SC,Le(r.value),1)):$e("",!0)])}}},kC=Wt(LC,[["__scopeId","data-v-17e40941"]]),DC={class:"max-w-5xl mx-auto mt-16 p-6 space-y-6"},xC={key:0,class:"text-center text-gray-400 mt-10"},NC={key:1,class:"grid grid-cols-1 sm:grid-cols-2 gap-6"},OC={class:"text-lg font-bold text-blue-600 dark:text-blue-400"},VC={class:"text-sm text-gray-500 dark:text-gray-300 mb-2"},MC={class:"text-xs text-gray-400 space-y-1 mb-4"},FC={class:"flex gap-2 mt-auto"},UC=["onClick"],HC=["onClick"],jC={__name:"Library",setup(t){const e=ie([]),n=ie(null),r=ie(""),i=ie(!1);Vr(async()=>{var u,c;const l=cr.currentUser;if(l)try{const d=await Qs(Yt(wn,"users",l.uid));if(r.value=(u=d.data())==null?void 0:u.teamId,i.value=((c=d.data())==null?void 0:c.role)==="admin",!r.value){console.warn("⚠️ No team assigned.");return}const p=fs(wn,`teams/${r.value}/tools`);n.value=TP(p,g=>{e.value=g.docs.map(_=>({id:_.id,..._.data()}))})}catch(d){console.error("Error loading tools:",d)}}),pa(()=>{n.value&&n.value()});const s=l=>{var g;const u=`
  <tool>
    <toolId>${l.toolId}</toolId>
    <description>${l.description}</description>
    <type>${l.tool_type}</type>
    <material>${((g=l.fields)==null?void 0:g.Material)||"Unknown"}</material>
    <holder>${l.holder_platform||"Unknown"}</holder>
  </tool>`.trim(),c=new Blob([u],{type:"application/xml"}),d=URL.createObjectURL(c),p=document.createElement("a");p.href=d,p.download=`${l.toolId}.xml`,p.click(),URL.revokeObjectURL(d)},o=async l=>{if(confirm("Are you sure you want to delete this tool?"))try{await L_(Yt(wn,`teams/${r.value}/tools/${l}`)),console.log("✅ Tool deleted successfully")}catch(u){console.error("Error deleting tool:",u)}};return(l,u)=>(ne(),ae("div",DC,[u[3]||(u[3]=R("h1",{class:"text-3xl font-extrabold text-center text-gray-900 dark:text-white"}," 📚 Tool Library ",-1)),u[4]||(u[4]=R("p",{class:"text-center text-gray-600 dark:text-gray-300"}," View and manage your team's saved tools. ",-1)),e.value.length===0?(ne(),ae("div",xC," No tools found yet. Start creating in the DANG Generator! ")):(ne(),ae("div",NC,[(ne(!0),ae(it,null,Ho(e.value,c=>{var d;return ne(),ae("div",{key:c.toolId,class:"p-4 bg-white dark:bg-gray-800 rounded shadow border dark:border-gray-700 flex flex-col gap-2"},[R("h2",OC,Le(c.toolId),1),R("p",VC,Le(c.description),1),R("div",MC,[R("div",null,[u[0]||(u[0]=R("strong",null,"Type:",-1)),at(" "+Le(c.tool_type),1)]),R("div",null,[u[1]||(u[1]=R("strong",null,"Material:",-1)),at(" "+Le(((d=c.fields)==null?void 0:d.Material)||"N/A"),1)]),R("div",null,[u[2]||(u[2]=R("strong",null,"Holder:",-1)),at(" "+Le(c.holder_platform||"N/A"),1)])]),R("div",FC,[R("button",{onClick:p=>s(c),class:"flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-xs"}," 📥 Download XML ",8,UC),i.value?(ne(),ae("button",{key:0,onClick:p=>o(c.id),class:"flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700 text-xs"}," 🗑️ Delete ",8,HC)):$e("",!0)])])}),128))]))]))}},BC={class:"max-w-xl mx-auto mt-20 p-6 bg-white dark:bg-gray-800 shadow-md rounded space-y-6"},$C={class:"space-y-4"},qC=["value"],GC=["value"],KC=["value"],WC={key:0,class:"text-green-600 text-sm text-center"},zC={key:1,class:"text-red-600 text-sm text-center"},XC={__name:"Account",setup(t){const e=ie(""),n=ie(""),r=ie(""),i=ie(""),s=ie(""),o=ie(""),l=ie(""),u=en(),c=Pc();Vr(async()=>{const p=u.currentUser;if(p){n.value=p.email||"";try{const g=await Qs(Yt(c,"users",p.uid));if(g.exists()){const _=g.data();e.value=_.displayName||"",r.value=_.phone||"",i.value=_.role||"viewer",s.value=_.teamId||""}}catch(g){console.error("Failed to load user profile:",g),l.value="Failed to load profile."}localStorage.getItem("theme")==="dark"&&document.documentElement.classList.add("dark")}});const d=async()=>{const p=u.currentUser;if(p)try{await sw(p,{displayName:e.value}),await yP(Yt(c,"users",p.uid),{displayName:e.value,phone:r.value}),o.value="✅ Profile updated successfully!",l.value=""}catch(g){console.error("Save profile failed:",g),l.value=g.message,o.value=""}};return(p,g)=>(ne(),ae("div",BC,[g[7]||(g[7]=R("h1",{class:"text-3xl font-extrabold text-center text-[#1B2A41] dark:text-white"}," 👤 My Account ",-1)),R("div",$C,[R("div",null,[g[2]||(g[2]=R("label",{class:"block font-medium text-sm mb-1"},"Email",-1)),R("input",{value:n.value,type:"email",class:"input opacity-60 cursor-not-allowed",disabled:""},null,8,qC)]),R("div",null,[g[3]||(g[3]=R("label",{class:"block font-medium text-sm mb-1"},"Display Name",-1)),Ze(R("input",{"onUpdate:modelValue":g[0]||(g[0]=_=>e.value=_),type:"text",class:"input"},null,512),[[Ft,e.value]])]),R("div",null,[g[4]||(g[4]=R("label",{class:"block font-medium text-sm mb-1"},"Phone",-1)),Ze(R("input",{"onUpdate:modelValue":g[1]||(g[1]=_=>r.value=_),type:"text",class:"input"},null,512),[[Ft,r.value]])]),R("div",null,[g[5]||(g[5]=R("label",{class:"block font-medium text-sm mb-1"},"Role",-1)),R("input",{value:i.value,type:"text",class:"input opacity-60 cursor-not-allowed",disabled:""},null,8,GC)]),R("div",null,[g[6]||(g[6]=R("label",{class:"block font-medium text-sm mb-1"},"Team ID",-1)),R("input",{value:s.value,type:"text",class:"input opacity-60 cursor-not-allowed",disabled:""},null,8,KC)]),R("button",{onClick:d,class:"btn bg-[#0077B6] hover:bg-[#0096C7]"}," 💾 Save Changes "),o.value?(ne(),ae("p",WC,Le(o.value),1)):$e("",!0),l.value?(ne(),ae("p",zC,Le(l.value),1)):$e("",!0)])]))}},QC=Wt(XC,[["__scopeId","data-v-0de60239"]]),YC={class:"max-w-5xl mx-auto mt-16 p-6 space-y-8"},JC={key:0,class:"text-gray-400 text-sm"},ZC={key:1,class:"space-y-4"},eS={class:"font-semibold"},tS={class:"text-xs text-gray-400 capitalize"},nS={key:0,class:"flex gap-2"},rS=["onClick"],iS=["onClick"],sS={key:0,class:"pt-8 border-t dark:border-gray-700"},oS={class:"space-y-4"},aS={key:0,class:"text-green-600 text-sm"},lS={key:1,class:"text-red-600 text-sm"},uS={class:"pt-8 border-t dark:border-gray-700"},cS={class:"flex items-center gap-4"},hS={__name:"Settings",setup(t){const e=ie([]),n=ie(""),r=ie("viewer"),i=ie(""),s=ie(""),o=ie(""),l=ie(""),u=ie(""),c=ie(localStorage.getItem("theme")==="dark"),d=Je(()=>l.value==="admin");Vr(async()=>{var N,O;const k=cr.currentUser;if(!k)return;u.value=k.uid;const U=await Qs(Yt(wn,"users",k.uid));o.value=(N=U.data())==null?void 0:N.teamId,l.value=(O=U.data())==null?void 0:O.role,o.value&&(await p(),c.value&&document.documentElement.classList.add("dark"))});const p=async()=>{const k=await mu(fs(wn,`teams/${o.value}/members`));e.value=k.docs.map(U=>({id:U.id,...U.data()}))},g=async()=>{if(!(!n.value||!r.value))try{const k=n.value.replace(/[^a-zA-Z0-9]/g,"_");await Gf(Yt(wn,`teams/${o.value}/members/${k}`),{email:n.value,role:r.value,invitedAt:new Date}),i.value="✅ Invite sent!",s.value="",n.value="",r.value="viewer",await p()}catch(k){console.error("Error inviting member:",k),s.value=k.message,i.value=""}},_=async k=>{confirm(`Remove ${k.email} from team?`)&&(await L_(Yt(wn,`teams/${o.value}/members/${k.id}`)),await p())},L=async k=>{await Gf(Yt(wn,`teams/${o.value}/members/${k.id}`),{...k,role:"admin"}),await p()},D=()=>{c.value?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))};return(k,U)=>(ne(),ae("div",YC,[U[8]||(U[8]=R("h1",{class:"text-3xl font-extrabold text-center text-gray-900 dark:text-white"}," ⚙️ Settings ",-1)),R("section",null,[U[3]||(U[3]=R("h2",{class:"text-xl font-semibold mb-4"},"Team Members",-1)),e.value.length===0?(ne(),ae("div",JC," No team members yet. ")):(ne(),ae("ul",ZC,[(ne(!0),ae(it,null,Ho(e.value,N=>(ne(),ae("li",{key:N.id,class:"flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded shadow border dark:border-gray-700"},[R("div",null,[R("div",eS,Le(N.email),1),R("div",tS," Role: "+Le(N.role),1)]),d.value&&N.id!==u.value?(ne(),ae("div",nS,[N.role!=="admin"?(ne(),ae("button",{key:0,onClick:O=>L(N),class:"bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600"}," Promote ",8,rS)):$e("",!0),R("button",{onClick:O=>_(N),class:"bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600"}," Remove ",8,iS)])):$e("",!0)]))),128))]))]),d.value?(ne(),ae("section",sS,[U[5]||(U[5]=R("h2",{class:"text-xl font-semibold mb-4"},"Invite New Member",-1)),R("div",oS,[Ze(R("input",{"onUpdate:modelValue":U[0]||(U[0]=N=>n.value=N),placeholder:"Enter Email",class:"input"},null,512),[[Ft,n.value]]),Ze(R("select",{"onUpdate:modelValue":U[1]||(U[1]=N=>r.value=N),class:"input"},U[4]||(U[4]=[R("option",{value:"viewer"},"Viewer",-1),R("option",{value:"editor"},"Editor",-1),R("option",{value:"admin"},"Admin",-1)]),512),[[Hl,r.value]]),R("button",{onClick:g,class:"btn bg-[#0077B6] hover:bg-[#0096C7]"}," Invite "),i.value?(ne(),ae("p",aS,Le(i.value),1)):$e("",!0),s.value?(ne(),ae("p",lS,Le(s.value),1)):$e("",!0)])])):$e("",!0),R("section",uS,[U[7]||(U[7]=R("h2",{class:"text-xl font-semibold mb-4"},"Appearance",-1)),R("div",cS,[U[6]||(U[6]=R("label",{class:"text-sm"},"Dark Mode",-1)),Ze(R("input",{type:"checkbox","onUpdate:modelValue":U[2]||(U[2]=N=>c.value=N),onChange:D},null,544),[[_T,c.value]])])])]))}},dS=Wt(hS,[["__scopeId","data-v-53f525f2"]]),fS=JSON.parse('[{"tool_name":"SHARP END MILL","abbreviation":"EM","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Length Of Cut} X {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Cut Diameter","Grade","Holder","Holder Length","Length Of Cut","Num of Flutes","OAL","Projection Length","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"SHARP END MILL W/NECK","abbreviation":"EM","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Length Of Cut} X {Neck Length}NK X {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Cut Diameter","Grade","Holder","Holder Length","Length Of Cut","Neck Length","Num of Flutes","OAL","Projection Length","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"BALL END MILL","abbreviation":"BEM","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Length Of Cut} X {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Cut Diameter","Grade","Holder","Holder Length","Length Of Cut","Num of Flutes","OAL","Projection Length","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"BALL END MILL W/NECK","abbreviation":"BEM","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Length Of Cut} X {Neck Length}NK X {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Cut Diameter","Grade","Holder","Holder Length","Length Of Cut","Neck Length","Num of Flutes","OAL","Projection Length","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"BULL NOSE END MILL","abbreviation":"BNE","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Length Of Cut} X {OAL} X {Radius}R {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Cut Diameter","Grade","Holder","Holder Length","Length Of Cut","Num of Flutes","OAL","Projection Length","Radius","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"BULL NOSE END MILL W/NECK","abbreviation":"BNE","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Length Of Cut} X {Neck Length}NK X {OAL} X {Radius}R {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Cut Diameter","Grade","Holder","Holder Length","Length Of Cut","Neck Length","Num of Flutes","OAL","Projection Length","Radius","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"CHIP SURFER SHARP END MILL W/NECK","abbreviation":"CSEM","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Length Of Cut} X {Neck Length}NK X {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Cut Diameter","Grade","Holder","Holder Length","Length Of Cut","Neck Length","Num of Flutes","OAL","Projection Length","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"CHIP SURFER BALL END MILL W/NECK","abbreviation":"CSBEM","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Length Of Cut} X {Neck Length}NK X {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Cut Diameter","Grade","Holder","Holder Length","Length Of Cut","Neck Length","Num of Flutes","OAL","Projection Length","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"CHIP SURFER BULL NOSE END MILL W/NECK","abbreviation":"CSBNE","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Length Of Cut} X {Neck Length}NK X {OAL} X {Radius}R {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Cut Diameter","Grade","Holder","Holder Length","Length Of Cut","Neck Length","Num of Flutes","OAL","Projection Length","Radius","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"CHAMFER MILL","abbreviation":"CM","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Angle}°  X {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Angle","Cut Diameter","Grade","Holder","Holder Length","Num of Flutes","OAL","Projection Length","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"CHAMFER MILL INSERTED","abbreviation":"CMI","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Angle}°  X {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Angle","Cut Diameter","Grade","Holder","Holder Length","Num of Flutes","OAL","Projection Length","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"TAPER END MILL","abbreviation":"TEM","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Taper Angle}° X {Length Of Cut} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Cut Diameter","Grade","Holder","Holder Length","Length Of Cut","Num of Flutes","Projection Length","Taper Angle","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"COBALT STEEL DRILL SCREW MACHINE","abbreviation":"DRCOS","description_formula":"{Tool Type Abbreviation}{Decimal Equivalent}({Drill Size}) X {Tip Angle}° {Holder}X{Holder Length} {Projection Length}PL","fields":["Decimal Equivalent","Drill Size","Holder","Holder Length","Projection Length","Tip Angle","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"COBALT STEEL DRILL JOBBER","abbreviation":"DRCOS","description_formula":"{Tool Type Abbreviation}{Decimal Equivalent}({Drill Size})-J X {Tip Angle}° {Holder}X{Holder Length} {Projection Length}PL","fields":["Decimal Equivalent","Drill Size","Holder","Holder Length","Projection Length","Tip Angle","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"COBALT STEEL DRILL EXTENDED LENGTH DRILL","abbreviation":"DRCOS","description_formula":"{Tool Type Abbreviation}{Decimal Equivalent}({Drill Size})-EL X {Tip Angle}° {Holder}X{Holder Length} {Projection Length}PL","fields":["Decimal Equivalent","Drill Size","Holder","Holder Length","Projection Length","Tip Angle","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"COBALT STEEL DRILL TAPER LENGTH DRILL","abbreviation":"DRCOS","description_formula":"{Tool Type Abbreviation}{Decimal Equivalent}({Drill Size})-TL X {Tip Angle}° {Holder}X{Holder Length} {Projection Length}PL","fields":["Decimal Equivalent","Drill Size","Holder","Holder Length","Projection Length","Tip Angle","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"COBALT STEEL DRILL AIRCRAFT LENGTH DRILL","abbreviation":"DRCOS","description_formula":"{Tool Type Abbreviation}{Decimal Equivalent}({Drill Size})-ACD X {Tip Angle}° {Holder}X{Holder Length} {Projection Length}PL","fields":["Decimal Equivalent","Drill Size","Holder","Holder Length","Projection Length","Tip Angle","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"SOLID CARBIDE DRILL","abbreviation":"DRSC","description_formula":"{Tool Type Abbreviation}{Decimal Equivalent}({Drill Size}) X {Tip Angle}° {Holder}X{Holder Length} {Projection Length}PL","fields":["Decimal Equivalent","Drill Size","Holder","Holder Length","Projection Length","Tip Angle","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"SOLID CARBIDE COOLANT THRU DRILL","abbreviation":"DRSC","description_formula":"{Tool Type Abbreviation}{Decimal Equivalent}({Drill Size})CLNT X {Tip Angle}° {Holder}X{Holder Length} {Projection Length}PL","fields":["Decimal Equivalent","Drill Size","Holder","Holder Length","Projection Length","Tip Angle","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"POWDERED METAL DRILL","abbreviation":"DRPM","description_formula":"{Tool Type Abbreviation}{Decimal Equivalent}({Drill Size}) X {Tip Angle}° {Holder}X{Holder Length} {Projection Length}PL","fields":["Decimal Equivalent","Drill Size","Holder","Holder Length","Projection Length","Tip Angle","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"POWDERED METAL COOLANT THRU DRILL","abbreviation":"DRPM","description_formula":"{Tool Type Abbreviation}{Decimal Equivalent}({Drill Size})CLNT X {Tip Angle}° {Holder}X{Holder Length} {Projection Length}PL","fields":["Decimal Equivalent","Drill Size","Holder","Holder Length","Projection Length","Tip Angle","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"INSERT DRILL","abbreviation":"ID","description_formula":"{Tool Type Abbreviation}{Decimal Equivalent} X {Radius} X {Tip Angle}{Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Decimal Equivalent","Grade","Holder","Holder Length","Projection Length","Radius","Tip Angle","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"DOVETAIL CUTTER","abbreviation":"DT","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Length Of Cut} X {Neck Length}nk X {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Cut Diameter","Grade","Holder","Holder Length","Length Of Cut","Neck Length","Num of Flutes","OAL","Projection Length","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"DOUBLE ANGLE","abbreviation":"DA","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Angle}°  X {Neck Length}NK X {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Angle","Cut Diameter","Grade","Holder","Holder Length","Neck Length","Num of Flutes","OAL","Projection Length","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"DOUBLE ANGLE INSERTED","abbreviation":"DAI","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Angle}°  X {Neck Length}NK X {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Angle","Cut Diameter","Grade","Holder","Holder Length","Neck Length","Num of Flutes","OAL","Projection Length","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"INSERT MILL","abbreviation":"IM","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Length Of Cut} X {Neck Length}NK X {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Cut Diameter","Grade","Holder","Holder Length","Length Of Cut","Neck Length","Num of Flutes","OAL","Projection Length","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"FACE MILL","abbreviation":"FM","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Length Of Cut} {Grade}","fields":["Cut Diameter","Grade","Length Of Cut","Num of Flutes","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"ENGRAVER","abbreviation":"ENG","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Tip Angle}° {Holder}X{Holder Length} {Projection Length}PL","fields":["Cut Diameter","Holder","Holder Length","Num of Flutes","Projection Length","Tip Angle","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"BACKDRAFT CUTTER","abbreviation":"BC","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Length Of Cut} X {Tip Angle}° {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Cut Diameter","Grade","Holder","Holder Length","Length Of Cut","Num of Flutes","OAL","Projection Length","Tip Angle","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"BACKDRAFT CUTTER CORNER RADIUS","abbreviation":"BCCR","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Length Of Cut} X {Tip Angle}° X {Radius}R {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Cut Diameter","Grade","Holder","Holder Length","Length Of Cut","Num of Flutes","OAL","Projection Length","Radius","Tip Angle","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"HIGH SPEED FEED MILL","abbreviation":"HSFM","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Length Of Cut} X {Neck Length}NK X {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Cut Diameter","Grade","Holder","Holder Length","Length Of Cut","Neck Length","Num of Flutes","OAL","Projection Length","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"CENTER DRILL SHORT","abbreviation":"CD","description_formula":"{Tool Type Abbreviation} #{Center Drill Num} SHORT {Holder}X{Holder Length} {Projection Length}PL","fields":["Center Drill Num","Holder","Holder Length","Projection Length","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"CENTER DRILL LONG","abbreviation":"CD","description_formula":"{Tool Type Abbreviation} #{Center Drill Num} LONG {Holder}X{Holder Length} {Projection Length}PL","fields":["Center Drill Num","Holder","Holder Length","Projection Length","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"CARBIDE CENTER DRILL SHORT","abbreviation":"CDSC","description_formula":"{Tool Type Abbreviation} #{Center Drill Num} SHORT {Holder}X{Holder Length} {Projection Length}PL","fields":["Center Drill Num","Holder","Holder Length","Projection Length","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"CARBIDE CENTER DRILL LONG","abbreviation":"CDSC","description_formula":"{Tool Type Abbreviation} #{Center Drill Num} LONG {Holder}X{Holder Length} {Projection Length}PL","fields":["Center Drill Num","Holder","Holder Length","Projection Length","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"KEY CUTTER","abbreviation":"KC","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Length Of Cut} X {Neck Length}NK X {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Cut Diameter","Grade","Holder","Holder Length","Length Of Cut","Neck Length","Num of Flutes","OAL","Projection Length","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"SOLID CARBIDE KEY CUTTER","abbreviation":"KCSC","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Length Of Cut} X {Neck Length}NK X {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Cut Diameter","Grade","Holder","Holder Length","Length Of Cut","Neck Length","Num of Flutes","OAL","Projection Length","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"KEY CUTTER INSERTED","abbreviation":"KCI","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Length Of Cut} X {Neck Length}NK X {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Cut Diameter","Grade","Holder","Holder Length","Length Of Cut","Neck Length","Num of Flutes","OAL","Projection Length","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"Lathe Boring","abbreviation":"BB","description_formula":"{Tool Type Abbreviation} {Bar Diameter} X {Tip Radius}R X {Max Depth}D X {OAL} {Grade} {Projection Length}PL","fields":["Bar Diameter","Grade","Max Depth","OAL","Projection Length","Tip Radius","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"Lathe ID Grooving","abbreviation":"IDG","description_formula":"{Tool Type Abbreviation} {Bar Diameter} X {Width of Cut} X {Tip Radius}R X {Max Depth}D X {OAL} {Grade} {Projection Length}PL","fields":["Bar Diameter","Grade","Max Depth","OAL","Projection Length","Tip Radius","Tool Type Abbreviation","Width of Cut"],"category":"","unit":"imperial","enabled":true},{"tool_name":"Lathe OD Grooving","abbreviation":"ODG","description_formula":"{Tool Type Abbreviation} X {Width of Cut} X {Tip Radius}R X {Max Depth}D X {OAL} {Grade} {Projection Length}PL","fields":["Grade","Max Depth","OAL","Projection Length","Tip Radius","Tool Type Abbreviation","Width of Cut"],"category":"","unit":"imperial","enabled":true},{"tool_name":"Lathe ID Threading","abbreviation":"IDTH","description_formula":"{Tool Type Abbreviation} {Bar Diameter} X {Thread Type} X {Max Depth}D X {OAL} {Grade} {Projection Length}PL","fields":["Bar Diameter","Grade","Max Depth","OAL","Projection Length","Thread Type","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"Lathe OD Threading","abbreviation":"ODTH","description_formula":"{Tool Type Abbreviation} {Thread Type} {Grade} {Projection Length}PL","fields":["Grade","Projection Length","Thread Type","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"RUNNER CUTTER","abbreviation":"RC","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Shank Diameter} X {Length Of Cut} X {Tip Angle}° {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Grade","Holder","Holder Length","Length Of Cut","Num of Flutes","OAL","Projection Length","Shank Diameter","Tip Angle","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"PICATINNY FORM ATTACHMENT CUTTER","abbreviation":"PFAC","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Length Of Cut} X {Angle}° X {Neck Length}NK X {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Angle","Cut Diameter","Grade","Holder","Holder Length","Length Of Cut","Neck Length","Num of Flutes","OAL","Projection Length","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"PICATINNY RAIL FORM CUTTER","abbreviation":"PFRC","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Length Of Cut} X {Minor Cut Diameter} X {Minor Diameter Length} X {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Cut Diameter","Grade","Holder","Holder Length","Length Of Cut","Minor Cut Diameter","Minor Diameter Length","Num of Flutes","OAL","Projection Length","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"PICATINNY FORM RECOIL GROOVE","abbreviation":"PFRG","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Length Of Cut} X {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Cut Diameter","Grade","Holder","Holder Length","Length Of Cut","Num of Flutes","OAL","Projection Length","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"PICATINNY FORM RECOIL GROOVE RADIUS","abbreviation":"PFRG","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Length Of Cut} X {OAL} X {Radius}R {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Cut Diameter","Grade","Holder","Holder Length","Length Of Cut","Num of Flutes","OAL","Projection Length","Radius","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"REAMER","abbreviation":"REAM","description_formula":"{Tool Type Abbreviation}{Decimal Equivalent} {Holder}X{Holder Length} {Projection Length}PL","fields":["Decimal Equivalent","Holder","Holder Length","Projection Length","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"SLITTING SAW","abbreviation":"SAW","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Cut Diameter} X {Length Of Cut} X {Neck Length}NK X {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Cut Diameter","Grade","Holder","Holder Length","Length Of Cut","Neck Length","Num of Flutes","OAL","Projection Length","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"SPOT DRILL","abbreviation":"SD","description_formula":"{Tool Type Abbreviation} {Cut Diameter} X {Tip Angle}° {Holder}X{Holder Length} {Projection Length}PL","fields":["Cut Diameter","Holder","Holder Length","Projection Length","Tip Angle","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"SPOT DRILL INSERTED","abbreviation":"SDI","description_formula":"{Tool Type Abbreviation} {Cut Diameter} X {Tip Angle}° {Holder}X{Holder Length} {Projection Length}PL","fields":["Cut Diameter","Holder","Holder Length","Projection Length","Tip Angle","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"SOLID CARBIDE SPOT DRILL","abbreviation":"SDSC","description_formula":"{Tool Type Abbreviation} {Cut Diameter} X {Tip Angle}° {Holder}X{Holder Length} {Projection Length}PL","fields":["Cut Diameter","Holder","Holder Length","Projection Length","Tip Angle","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"SPIRAL FLUTE","abbreviation":"SF","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Tap Sizes} {Class Fit} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Class Fit","Grade","Holder","Holder Length","Num of Flutes","Projection Length","Tap Sizes","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"SPIRAL POINT","abbreviation":"SP","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Tap Sizes} {Class Fit} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Class Fit","Grade","Holder","Holder Length","Num of Flutes","Projection Length","Tap Sizes","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"FORM/ROLL TAP","abbreviation":"RT","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Tap Sizes} {Class Fit} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Class Fit","Grade","Holder","Holder Length","Num of Flutes","Projection Length","Tap Sizes","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"SPIRAL FLUTE BOTTOM TAP","abbreviation":"SF","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Tap Sizes}BTM {Class Fit} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Class Fit","Grade","Holder","Holder Length","Num of Flutes","Projection Length","Tap Sizes","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"FORM/ROLL BOTTOM TAP","abbreviation":"RT","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Tap Sizes}BTM {Class Fit} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Class Fit","Grade","Holder","Holder Length","Num of Flutes","Projection Length","Tap Sizes","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"CIRCLE SEGMENT CUTTER","abbreviation":"CSC","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Shank Diameter} X {Length Of Cut} X {Tip Angle}° {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Grade","Holder","Holder Length","Length Of Cut","Num of Flutes","OAL","Projection Length","Shank Diameter","Tip Angle","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"CIRCLE SEGMENT CUTTER BARREL","abbreviation":"CSCB","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Shank Diameter} X {Length Of Cut} X {Tip Angle}° {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Grade","Holder","Holder Length","Length Of Cut","Num of Flutes","OAL","Projection Length","Shank Diameter","Tip Angle","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"CIRCLE SEGMENT CUTTER OVAL","abbreviation":"CSCO","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Shank Diameter} X {Length Of Cut} X {Tip Angle}° {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Grade","Holder","Holder Length","Length Of Cut","Num of Flutes","OAL","Projection Length","Shank Diameter","Tip Angle","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"CIRCLE SEGMENT CUTTER TAPER","abbreviation":"CSCT","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Shank Diameter} X {Length Of Cut} X {Tip Angle}° {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Grade","Holder","Holder Length","Length Of Cut","Num of Flutes","OAL","Projection Length","Shank Diameter","Tip Angle","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"CIRCLE SEGMENT CUTTER LENS","abbreviation":"CSCL","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Shank Diameter} X {Length Of Cut} X {Tip Angle}° {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Grade","Holder","Holder Length","Length Of Cut","Num of Flutes","OAL","Projection Length","Shank Diameter","Tip Angle","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true},{"tool_name":"UNDERCUT END MILL","abbreviation":"UE","description_formula":"{Tool Type Abbreviation} {Num of Flutes}FL {Shank Diameter} X {Length Of Cut} X {Neck Length}NK X {OAL} {Grade} {Holder}X{Holder Length} {Projection Length}PL","fields":["Grade","Holder","Holder Length","Length Of Cut","Neck Length","Num of Flutes","OAL","Projection Length","Shank Diameter","Tool Type Abbreviation"],"category":"","unit":"imperial","enabled":true}]'),pS={tool_definitions:fS},gS={class:"max-w-4xl mx-auto mt-16 p-6 bg-white dark:bg-gray-800 rounded shadow space-y-6"},mS=["value"],_S={key:0,class:"grid grid-cols-1 md:grid-cols-2 gap-4"},yS=["value"],vS={class:"flex gap-2"},TS={key:1,class:"mt-4"},ES={key:2,class:"space-y-4 mt-4"},bS={class:"block text-sm font-medium mb-1"},IS={class:"text-gray-400 text-xs"},wS=["onUpdate:modelValue","placeholder"],AS={key:3,class:"p-4 bg-blue-50 dark:bg-gray-700 rounded border-l-4 border-blue-400 dark:border-blue-500"},RS={class:"text-md font-mono text-blue-700 dark:text-blue-400"},PS={key:4,class:"p-4 bg-gray-100 dark:bg-gray-700 rounded border-l-4 border-blue-600 dark:border-blue-500"},CS={class:"text-md font-mono text-blue-700 dark:text-blue-400"},SS={key:5,class:"flex items-center gap-4"},LS=["disabled"],kS={class:"text-sm text-gray-700 dark:text-gray-300"},zf="bg-blue-600 text-white px-2 py-1",Xf="bg-white text-gray-700 dark:bg-gray-700 dark:text-gray-200 px-2 py-1",DS={__name:"DANG",setup(t){const e=Pc(),n=ie(pS.tool_definitions),r=ie(""),i=ie({}),s=ie("imperial"),o=ie("1"),l=ie("000"),u=ie(""),c=Je(()=>n.value.find(N=>N.tool_name===r.value)),d=N=>(N.match(/{(.*?)}/g)||[]).map(F=>F.replace(/[{}]/g,"")).filter(F=>F!=="Tool Type Abbreviation"),p=Je(()=>c.value?d(c.value.description_formula):[]),g=Je(()=>{if(!c.value)return"";let N=c.value.description_formula;N=N.replaceAll("{Tool Type Abbreviation}",c.value.abbreviation);for(const O of p.value){let F=i.value[O]||"";if(O.toLowerCase()==="projection length"){const ce=parseFloat(F);F=isNaN(ce)?"":ce.toFixed(3)}N=N.replaceAll(`{${O}}`,F)}return N}),_=Je(()=>{const N=i.value["Cut Diameter"];return N&&!isNaN(N)?Number.parseFloat(N).toFixed(3):"0.000"}),L=Je(()=>c.value?`${c.value.abbreviation}-${o.value}-${_.value}-${l.value}`:"");rs(c,async N=>{if(N!=null&&N.unit&&(s.value=N.unit),u.value&&N){const O=`${N.abbreviation}-${o.value}-${_.value}`,F=jf(fs(e,`teams/${u.value}/tools`),Bf("tool_id",">=",O)),me=(await mu(F)).docs.map(I=>I.data().tool_id).filter(I=>I.startsWith(O));if(me.length>0){const I=me.map(E=>parseInt(E.split("-").pop())).filter(E=>!isNaN(E)),y=Math.max(...I);l.value=String(y+1).padStart(3,"0")}else l.value="000"}});const D=ie(""),k=ie(!1),U=async()=>{var O;if(!u.value){D.value="❌ Team not found.";return}k.value=!0,D.value="";const N=L.value;try{const F=jf(fs(e,`teams/${u.value}/tools`),Bf("tool_id","==",N)),ce=await mu(F);if(!N||!g.value||ce.size>0){D.value=ce.size>0?"❌ Tool ID already exists.":"❌ Incomplete tool info.",k.value=!1;return}await vP(fs(e,`teams/${u.value}/tools`),{tool_id:N,description:g.value,tool_type:r.value,abbreviation:c.value.abbreviation,fields:{...i.value},unit:s.value,holder_platform:o.value,created_at:EP(),created_by:((O=cr.currentUser)==null?void 0:O.email)||"anonymous"}),D.value="✅ Tool saved!"}catch(F){console.error(F),D.value="❌ Save failed."}finally{k.value=!1}};return Vr(async()=>{const N=cr.currentUser;if(N){const O=Yt(e,"users",N.uid),F=await Qs(O);F.exists()&&(u.value=F.data().teamId)}}),(N,O)=>(ne(),ae("div",gS,[O[12]||(O[12]=R("h1",{class:"text-3xl font-extrabold text-center text-[#1B2A41] dark:text-white"},[at(" Create New "),R("span",{class:"text-[#0077B6]"},"DANG"),at(" Tool ID & Description 🔧 ")],-1)),O[13]||(O[13]=R("p",{class:"text-sm text-gray-500 dark:text-gray-300 text-center"}," Fill it out like a pro, or just guess and let DANG help you look smart. ",-1)),R("div",null,[O[5]||(O[5]=R("label",{class:"block font-semibold mb-1"},"Tool Type",-1)),Ze(R("select",{"onUpdate:modelValue":O[0]||(O[0]=F=>r.value=F),class:"input"},[O[4]||(O[4]=R("option",{value:"",disabled:""},"Select a tool",-1)),(ne(!0),ae(it,null,Ho(n.value,F=>(ne(),ae("option",{key:F.tool_name,value:F.tool_name}," ["+Le(F.abbreviation)+"] "+Le(F.tool_name),9,mS))),128))],512),[[Hl,r.value]])]),c.value?(ne(),ae("div",_S,[R("div",null,[O[6]||(O[6]=R("label",{class:"block font-semibold mb-1"},"Tool Abbreviation",-1)),R("input",{value:c.value.abbreviation,class:"input bg-gray-100",disabled:""},null,8,yS)]),R("div",null,[O[7]||(O[7]=R("label",{class:"block font-semibold mb-1"},"Unit System",-1)),R("div",vS,[R("button",{class:Cr(s.value==="imperial"?zf:Xf),onClick:O[1]||(O[1]=F=>s.value="imperial")},"Inch (in)",2),R("button",{class:Cr(s.value==="metric"?zf:Xf),onClick:O[2]||(O[2]=F=>s.value="metric")},"Metric (mm)",2)])])])):$e("",!0),c.value?(ne(),ae("div",TS,[O[9]||(O[9]=R("label",{class:"block font-semibold mb-1"},"Holder Platform",-1)),Ze(R("select",{"onUpdate:modelValue":O[3]||(O[3]=F=>o.value=F),class:"input"},O[8]||(O[8]=[Uv('<option value="1" data-v-0fdee75c>CAT40</option><option value="2" data-v-0fdee75c>CAT50</option><option value="3" data-v-0fdee75c>BT40</option><option value="4" data-v-0fdee75c>HSK63</option><option value="5" data-v-0fdee75c>HSK100</option>',5)]),512),[[Hl,o.value]])])):$e("",!0),c.value?(ne(),ae("div",ES,[(ne(!0),ae(it,null,Ho(p.value,F=>(ne(),ae("div",{key:F},[R("label",bS,[at(Le(F)+" ",1),R("span",IS,Le(s.value==="imperial"?"(in)":"(mm)"),1)]),Ze(R("input",{"onUpdate:modelValue":ce=>i.value[F]=ce,class:"input",placeholder:`Enter ${F}`},null,8,wS),[[Ft,i.value[F]]])]))),128))])):$e("",!0),L.value?(ne(),ae("div",AS,[O[10]||(O[10]=R("p",{class:"font-bold text-sm text-gray-600 dark:text-gray-300 mb-1"},"Generated Tool ID:",-1)),R("p",RS,Le(L.value),1)])):$e("",!0),g.value?(ne(),ae("div",PS,[O[11]||(O[11]=R("p",{class:"font-bold text-sm text-gray-600 dark:text-gray-300 mb-1"},"Generated Description:",-1)),R("p",CS,Le(g.value),1)])):$e("",!0),L.value&&g.value?(ne(),ae("div",SS,[R("button",{onClick:U,disabled:k.value,class:"bg-green-600 text-white font-semibold px-4 py-2 rounded hover:bg-green-700"}," 💾 Save to Tool Library ",8,LS),R("span",kS,Le(D.value),1)])):$e("",!0)]))}},xS=Wt(DS,[["__scopeId","data-v-0fdee75c"]]),NS=[{path:"/",name:"Home",component:mC,meta:{layout:"MarketingLayout"}},{path:"/dashboard",name:"Dashboard",component:TC,meta:{layout:"DefaultLayout",requiresAuth:!0}},{path:"/DANG",name:"DANG",component:xS,meta:{layout:"DefaultLayout",requiresAuth:!0}},{path:"/library",name:"Library",component:jC,meta:{layout:"DefaultLayout",requiresAuth:!0,requiresSubscription:!0}},{path:"/account",name:"Account",component:QC,meta:{layout:"DefaultLayout",requiresAuth:!0}},{path:"/settings",name:"Settings",component:dS,meta:{layout:"DefaultLayout",requiresAuth:!0}},{path:"/login",name:"Login",component:AC,meta:{layout:"AuthLayout",guestOnly:!0}},{path:"/register",name:"Register",component:kC,meta:{layout:"AuthLayout",guestOnly:!0}},{path:"/:pathMatch(.*)*",redirect:"/"}],x_=RE({history:tE(),routes:NS});let Qf=!1;x_.beforeEach(async(t,e,n)=>{const r=t.matched.some(u=>u.meta.requiresAuth),i=t.matched.some(u=>u.meta.guestOnly),s=t.matched.some(u=>u.meta.requiresSubscription),o=async u=>{var c;if(r&&!u)return n({name:"Login"});if(i&&u)return n({name:"Dashboard"});if(s&&u){const p=(c=(await Qs(Yt(wn,"users",u.uid))).data())==null?void 0:c.subscription;if(!p||p.status!=="active")return alert("⚠️ You need an active subscription to access the Library!"),n({name:"Dashboard"})}return n()},l=en();Qf?await o(l.currentUser):Ia(l,async u=>{Qf=!0,await o(u)})});const OS={beforeMount(t,e){t.clickOutsideEvent=n=>{t===n.target||t.contains(n.target)||e.value(n)},document.addEventListener("click",t.clickOutsideEvent)},unmounted(t){document.removeEventListener("click",t.clickOutsideEvent)}},Fc=bT(oC);Fc.directive("click-outside",OS);Fc.use(x_);Fc.mount("#app");
