(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var D4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function NC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var L={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ol=Symbol.for("react.element"),DC=Symbol.for("react.portal"),bC=Symbol.for("react.fragment"),RC=Symbol.for("react.strict_mode"),PC=Symbol.for("react.profiler"),OC=Symbol.for("react.provider"),LC=Symbol.for("react.context"),MC=Symbol.for("react.forward_ref"),$C=Symbol.for("react.suspense"),FC=Symbol.for("react.memo"),UC=Symbol.for("react.lazy"),cv=Symbol.iterator;function VC(t){return t===null||typeof t!="object"?null:(t=cv&&t[cv]||t["@@iterator"],typeof t=="function"?t:null)}var x1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N1=Object.assign,D1={};function ko(t,e,n){this.props=t,this.context=e,this.refs=D1,this.updater=n||x1}ko.prototype.isReactComponent={};ko.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ko.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function b1(){}b1.prototype=ko.prototype;function mm(t,e,n){this.props=t,this.context=e,this.refs=D1,this.updater=n||x1}var gm=mm.prototype=new b1;gm.constructor=mm;N1(gm,ko.prototype);gm.isPureReactComponent=!0;var hv=Array.isArray,R1=Object.prototype.hasOwnProperty,ym={current:null},P1={key:!0,ref:!0,__self:!0,__source:!0};function O1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)R1.call(e,r)&&!P1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ol,type:t,key:s,ref:o,props:i,_owner:ym.current}}function zC(t,e){return{$$typeof:Ol,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ol}function BC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var dv=/\/+/g;function Cd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?BC(""+t.key):e.toString(36)}function Wu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ol:case DC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Cd(o,0):r,hv(i)?(n="",t!=null&&(n=t.replace(dv,"$&/")+"/"),Wu(i,e,n,"",function(u){return u})):i!=null&&(vm(i)&&(i=zC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(dv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",hv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Cd(s,a);o+=Wu(s,e,n,l,i)}else if(l=VC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Cd(s,a++),o+=Wu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function mu(t,e,n){if(t==null)return t;var r=[],i=0;return Wu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function jC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var bt={current:null},Gu={transition:null},qC={ReactCurrentDispatcher:bt,ReactCurrentBatchConfig:Gu,ReactCurrentOwner:ym};function L1(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:mu,forEach:function(t,e,n){mu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return mu(t,function(){e++}),e},toArray:function(t){return mu(t,function(e){return e})||[]},only:function(t){if(!vm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=ko;Z.Fragment=bC;Z.Profiler=PC;Z.PureComponent=mm;Z.StrictMode=RC;Z.Suspense=$C;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qC;Z.act=L1;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=N1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ym.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)R1.call(e,l)&&!P1.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ol,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:LC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:OC,_context:t},t.Consumer=t};Z.createElement=O1;Z.createFactory=function(t){var e=O1.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:MC,render:t}};Z.isValidElement=vm;Z.lazy=function(t){return{$$typeof:UC,_payload:{_status:-1,_result:t},_init:jC}};Z.memo=function(t,e){return{$$typeof:FC,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=Gu.transition;Gu.transition={};try{t()}finally{Gu.transition=e}};Z.unstable_act=L1;Z.useCallback=function(t,e){return bt.current.useCallback(t,e)};Z.useContext=function(t){return bt.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return bt.current.useDeferredValue(t)};Z.useEffect=function(t,e){return bt.current.useEffect(t,e)};Z.useId=function(){return bt.current.useId()};Z.useImperativeHandle=function(t,e,n){return bt.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return bt.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return bt.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return bt.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return bt.current.useReducer(t,e,n)};Z.useRef=function(t){return bt.current.useRef(t)};Z.useState=function(t){return bt.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return bt.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return bt.current.useTransition()};Z.version="18.3.1";(function(t){t.exports=Z})(L);const b4=NC(L.exports);var kf={},M1={exports:{}},en={},$1={exports:{}},F1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(M,G){var Q=M.length;M.push(G);e:for(;0<Q;){var Ie=Q-1>>>1,ae=M[Ie];if(0<i(ae,G))M[Ie]=G,M[Q]=ae,Q=Ie;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var G=M[0],Q=M.pop();if(Q!==G){M[0]=Q;e:for(var Ie=0,ae=M.length,ys=ae>>>1;Ie<ys;){var dn=2*(Ie+1)-1,Wo=M[dn],fn=dn+1,vs=M[fn];if(0>i(Wo,Q))fn<ae&&0>i(vs,Wo)?(M[Ie]=vs,M[fn]=Q,Ie=fn):(M[Ie]=Wo,M[dn]=Q,Ie=dn);else if(fn<ae&&0>i(vs,Q))M[Ie]=vs,M[fn]=Q,Ie=fn;else break e}}return G}function i(M,G){var Q=M.sortIndex-G.sortIndex;return Q!==0?Q:M.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,y=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(M){for(var G=n(u);G!==null;){if(G.callback===null)r(u);else if(G.startTime<=M)r(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(u)}}function I(M){if(v=!1,m(M),!y)if(n(l)!==null)y=!0,qo(E);else{var G=n(u);G!==null&&vi(I,G.startTime-M)}}function E(M,G){y=!1,v&&(v=!1,g(U),U=-1),p=!0;var Q=d;try{for(m(G),h=n(l);h!==null&&(!(h.expirationTime>G)||M&&!Ot());){var Ie=h.callback;if(typeof Ie=="function"){h.callback=null,d=h.priorityLevel;var ae=Ie(h.expirationTime<=G);G=t.unstable_now(),typeof ae=="function"?h.callback=ae:h===n(l)&&r(l),m(G)}else r(l);h=n(l)}if(h!==null)var ys=!0;else{var dn=n(u);dn!==null&&vi(I,dn.startTime-G),ys=!1}return ys}finally{h=null,d=Q,p=!1}}var N=!1,R=null,U=-1,oe=5,B=-1;function Ot(){return!(t.unstable_now()-B<oe)}function _r(){if(R!==null){var M=t.unstable_now();B=M;var G=!0;try{G=R(!0,M)}finally{G?Ir():(N=!1,R=null)}}else N=!1}var Ir;if(typeof f=="function")Ir=function(){f(_r)};else if(typeof MessageChannel<"u"){var du=new MessageChannel,jo=du.port2;du.port1.onmessage=_r,Ir=function(){jo.postMessage(null)}}else Ir=function(){k(_r,0)};function qo(M){R=M,N||(N=!0,Ir())}function vi(M,G){U=k(function(){M(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,qo(E))},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):oe=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(M){switch(d){case 1:case 2:case 3:var G=3;break;default:G=d}var Q=d;d=G;try{return M()}finally{d=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(M,G){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var Q=d;d=M;try{return G()}finally{d=Q}},t.unstable_scheduleCallback=function(M,G,Q){var Ie=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?Ie+Q:Ie):Q=Ie,M){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=Q+ae,M={id:c++,callback:G,priorityLevel:M,startTime:Q,expirationTime:ae,sortIndex:-1},Q>Ie?(M.sortIndex=Q,e(u,M),n(l)===null&&M===n(u)&&(v?(g(U),U=-1):v=!0,vi(I,Q-Ie))):(M.sortIndex=ae,e(l,M),y||p||(y=!0,qo(E))),M},t.unstable_shouldYield=Ot,t.unstable_wrapCallback=function(M){var G=d;return function(){var Q=d;d=G;try{return M.apply(this,arguments)}finally{d=Q}}}})(F1);(function(t){t.exports=F1})($1);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WC=L.exports,Xt=$1.exports;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var U1=new Set,Ba={};function as(t,e){no(t,e),no(t+"Capture",e)}function no(t,e){for(Ba[t]=e,t=0;t<e.length;t++)U1.add(e[t])}var ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cf=Object.prototype.hasOwnProperty,GC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fv={},pv={};function HC(t){return Cf.call(pv,t)?!0:Cf.call(fv,t)?!1:GC.test(t)?pv[t]=!0:(fv[t]=!0,!1)}function KC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function QC(t,e,n,r){if(e===null||typeof e>"u"||KC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Rt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){dt[t]=new Rt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];dt[e]=new Rt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){dt[t]=new Rt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){dt[t]=new Rt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){dt[t]=new Rt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){dt[t]=new Rt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){dt[t]=new Rt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){dt[t]=new Rt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){dt[t]=new Rt(t,5,!1,t.toLowerCase(),null,!1,!1)});var wm=/[\-:]([a-z])/g;function _m(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wm,_m);dt[e]=new Rt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wm,_m);dt[e]=new Rt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wm,_m);dt[e]=new Rt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){dt[t]=new Rt(t,1,!1,t.toLowerCase(),null,!1,!1)});dt.xlinkHref=new Rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){dt[t]=new Rt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Im(t,e,n,r){var i=dt.hasOwnProperty(e)?dt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(QC(e,n,i,r)&&(n=null),r||i===null?HC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var pr=WC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gu=Symbol.for("react.element"),xs=Symbol.for("react.portal"),Ns=Symbol.for("react.fragment"),Em=Symbol.for("react.strict_mode"),Af=Symbol.for("react.profiler"),V1=Symbol.for("react.provider"),z1=Symbol.for("react.context"),Sm=Symbol.for("react.forward_ref"),xf=Symbol.for("react.suspense"),Nf=Symbol.for("react.suspense_list"),Tm=Symbol.for("react.memo"),Ar=Symbol.for("react.lazy"),B1=Symbol.for("react.offscreen"),mv=Symbol.iterator;function Ho(t){return t===null||typeof t!="object"?null:(t=mv&&t[mv]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,Ad;function da(t){if(Ad===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ad=e&&e[1]||""}return`
`+Ad+t}var xd=!1;function Nd(t,e){if(!t||xd)return"";xd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{xd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?da(t):""}function YC(t){switch(t.tag){case 5:return da(t.type);case 16:return da("Lazy");case 13:return da("Suspense");case 19:return da("SuspenseList");case 0:case 2:case 15:return t=Nd(t.type,!1),t;case 11:return t=Nd(t.type.render,!1),t;case 1:return t=Nd(t.type,!0),t;default:return""}}function Df(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ns:return"Fragment";case xs:return"Portal";case Af:return"Profiler";case Em:return"StrictMode";case xf:return"Suspense";case Nf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z1:return(t.displayName||"Context")+".Consumer";case V1:return(t._context.displayName||"Context")+".Provider";case Sm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tm:return e=t.displayName||null,e!==null?e:Df(t.type)||"Memo";case Ar:e=t._payload,t=t._init;try{return Df(t(e))}catch{}}return null}function XC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Df(e);case 8:return e===Em?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function j1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function JC(t){var e=j1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function yu(t){t._valueTracker||(t._valueTracker=JC(t))}function q1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=j1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function pc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bf(t,e){var n=e.checked;return xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function gv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function W1(t,e){e=e.checked,e!=null&&Im(t,"checked",e,!1)}function Rf(t,e){W1(t,e);var n=Gr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Pf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Pf(t,e.type,Gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function yv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Pf(t,e,n){(e!=="number"||pc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var fa=Array.isArray;function Bs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Gr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Of(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(fa(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gr(n)}}function G1(t,e){var n=Gr(e.value),r=Gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function wv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function H1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?H1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var vu,K1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(vu=vu||document.createElement("div"),vu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=vu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ja(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ZC=["Webkit","ms","Moz","O"];Object.keys(Sa).forEach(function(t){ZC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Sa[e]=Sa[t]})});function Q1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Sa.hasOwnProperty(t)&&Sa[t]?(""+e).trim():e+"px"}function Y1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Q1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var eA=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mf(t,e){if(e){if(eA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function $f(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ff=null;function km(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Uf=null,js=null,qs=null;function _v(t){if(t=$l(t)){if(typeof Uf!="function")throw Error(A(280));var e=t.stateNode;e&&(e=wh(e),Uf(t.stateNode,t.type,e))}}function X1(t){js?qs?qs.push(t):qs=[t]:js=t}function J1(){if(js){var t=js,e=qs;if(qs=js=null,_v(t),e)for(t=0;t<e.length;t++)_v(e[t])}}function Z1(t,e){return t(e)}function e_(){}var Dd=!1;function t_(t,e,n){if(Dd)return t(e,n);Dd=!0;try{return Z1(t,e,n)}finally{Dd=!1,(js!==null||qs!==null)&&(e_(),J1())}}function qa(t,e){var n=t.stateNode;if(n===null)return null;var r=wh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var Vf=!1;if(ar)try{var Ko={};Object.defineProperty(Ko,"passive",{get:function(){Vf=!0}}),window.addEventListener("test",Ko,Ko),window.removeEventListener("test",Ko,Ko)}catch{Vf=!1}function tA(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ta=!1,mc=null,gc=!1,zf=null,nA={onError:function(t){Ta=!0,mc=t}};function rA(t,e,n,r,i,s,o,a,l){Ta=!1,mc=null,tA.apply(nA,arguments)}function iA(t,e,n,r,i,s,o,a,l){if(rA.apply(this,arguments),Ta){if(Ta){var u=mc;Ta=!1,mc=null}else throw Error(A(198));gc||(gc=!0,zf=u)}}function ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function n_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Iv(t){if(ls(t)!==t)throw Error(A(188))}function sA(t){var e=t.alternate;if(!e){if(e=ls(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Iv(i),t;if(s===r)return Iv(i),e;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function r_(t){return t=sA(t),t!==null?i_(t):null}function i_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=i_(t);if(e!==null)return e;t=t.sibling}return null}var s_=Xt.unstable_scheduleCallback,Ev=Xt.unstable_cancelCallback,oA=Xt.unstable_shouldYield,aA=Xt.unstable_requestPaint,Le=Xt.unstable_now,lA=Xt.unstable_getCurrentPriorityLevel,Cm=Xt.unstable_ImmediatePriority,o_=Xt.unstable_UserBlockingPriority,yc=Xt.unstable_NormalPriority,uA=Xt.unstable_LowPriority,a_=Xt.unstable_IdlePriority,mh=null,Vn=null;function cA(t){if(Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot(mh,t,void 0,(t.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:fA,hA=Math.log,dA=Math.LN2;function fA(t){return t>>>=0,t===0?32:31-(hA(t)/dA|0)|0}var wu=64,_u=4194304;function pa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=pa(a):(s&=o,s!==0&&(r=pa(s)))}else o=n&~i,o!==0?r=pa(o):s!==0&&(r=pa(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-wn(e),i=1<<n,r|=t[n],e&=~i;return r}function pA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-wn(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=pA(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Bf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function l_(){var t=wu;return wu<<=1,(wu&4194240)===0&&(wu=64),t}function bd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ll(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wn(e),t[e]=n}function gA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-wn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Am(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-wn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ue=0;function u_(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var c_,xm,h_,d_,f_,jf=!1,Iu=[],$r=null,Fr=null,Ur=null,Wa=new Map,Ga=new Map,Nr=[],yA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sv(t,e){switch(t){case"focusin":case"focusout":$r=null;break;case"dragenter":case"dragleave":Fr=null;break;case"mouseover":case"mouseout":Ur=null;break;case"pointerover":case"pointerout":Wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ga.delete(e.pointerId)}}function Qo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=$l(e),e!==null&&xm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function vA(t,e,n,r,i){switch(e){case"focusin":return $r=Qo($r,t,e,n,r,i),!0;case"dragenter":return Fr=Qo(Fr,t,e,n,r,i),!0;case"mouseover":return Ur=Qo(Ur,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Wa.set(s,Qo(Wa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ga.set(s,Qo(Ga.get(s)||null,t,e,n,r,i)),!0}return!1}function p_(t){var e=Ni(t.target);if(e!==null){var n=ls(e);if(n!==null){if(e=n.tag,e===13){if(e=n_(n),e!==null){t.blockedOn=e,f_(t.priority,function(){h_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ff=r,n.target.dispatchEvent(r),Ff=null}else return e=$l(n),e!==null&&xm(e),t.blockedOn=n,!1;e.shift()}return!0}function Tv(t,e,n){Hu(t)&&n.delete(e)}function wA(){jf=!1,$r!==null&&Hu($r)&&($r=null),Fr!==null&&Hu(Fr)&&(Fr=null),Ur!==null&&Hu(Ur)&&(Ur=null),Wa.forEach(Tv),Ga.forEach(Tv)}function Yo(t,e){t.blockedOn===e&&(t.blockedOn=null,jf||(jf=!0,Xt.unstable_scheduleCallback(Xt.unstable_NormalPriority,wA)))}function Ha(t){function e(i){return Yo(i,t)}if(0<Iu.length){Yo(Iu[0],t);for(var n=1;n<Iu.length;n++){var r=Iu[n];r.blockedOn===t&&(r.blockedOn=null)}}for($r!==null&&Yo($r,t),Fr!==null&&Yo(Fr,t),Ur!==null&&Yo(Ur,t),Wa.forEach(e),Ga.forEach(e),n=0;n<Nr.length;n++)r=Nr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Nr.length&&(n=Nr[0],n.blockedOn===null);)p_(n),n.blockedOn===null&&Nr.shift()}var Ws=pr.ReactCurrentBatchConfig,wc=!0;function _A(t,e,n,r){var i=ue,s=Ws.transition;Ws.transition=null;try{ue=1,Nm(t,e,n,r)}finally{ue=i,Ws.transition=s}}function IA(t,e,n,r){var i=ue,s=Ws.transition;Ws.transition=null;try{ue=4,Nm(t,e,n,r)}finally{ue=i,Ws.transition=s}}function Nm(t,e,n,r){if(wc){var i=qf(t,e,n,r);if(i===null)zd(t,e,r,_c,n),Sv(t,r);else if(vA(i,t,e,n,r))r.stopPropagation();else if(Sv(t,r),e&4&&-1<yA.indexOf(t)){for(;i!==null;){var s=$l(i);if(s!==null&&c_(s),s=qf(t,e,n,r),s===null&&zd(t,e,r,_c,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else zd(t,e,r,null,n)}}var _c=null;function qf(t,e,n,r){if(_c=null,t=km(r),t=Ni(t),t!==null)if(e=ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=n_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _c=t,null}function m_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lA()){case Cm:return 1;case o_:return 4;case yc:case uA:return 16;case a_:return 536870912;default:return 16}default:return 16}}var Pr=null,Dm=null,Ku=null;function g_(){if(Ku)return Ku;var t,e=Dm,n=e.length,r,i="value"in Pr?Pr.value:Pr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ku=i.slice(t,1<r?1-r:void 0)}function Qu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Eu(){return!0}function kv(){return!1}function tn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Eu:kv,this.isPropagationStopped=kv,this}return xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Eu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Eu)},persist:function(){},isPersistent:Eu}),e}var Co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bm=tn(Co),Ml=xe({},Co,{view:0,detail:0}),EA=tn(Ml),Rd,Pd,Xo,gh=xe({},Ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xo&&(Xo&&t.type==="mousemove"?(Rd=t.screenX-Xo.screenX,Pd=t.screenY-Xo.screenY):Pd=Rd=0,Xo=t),Rd)},movementY:function(t){return"movementY"in t?t.movementY:Pd}}),Cv=tn(gh),SA=xe({},gh,{dataTransfer:0}),TA=tn(SA),kA=xe({},Ml,{relatedTarget:0}),Od=tn(kA),CA=xe({},Co,{animationName:0,elapsedTime:0,pseudoElement:0}),AA=tn(CA),xA=xe({},Co,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),NA=tn(xA),DA=xe({},Co,{data:0}),Av=tn(DA),bA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function OA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=PA[t])?!!e[t]:!1}function Rm(){return OA}var LA=xe({},Ml,{key:function(t){if(t.key){var e=bA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?RA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rm,charCode:function(t){return t.type==="keypress"?Qu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),MA=tn(LA),$A=xe({},gh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xv=tn($A),FA=xe({},Ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rm}),UA=tn(FA),VA=xe({},Co,{propertyName:0,elapsedTime:0,pseudoElement:0}),zA=tn(VA),BA=xe({},gh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jA=tn(BA),qA=[9,13,27,32],Pm=ar&&"CompositionEvent"in window,ka=null;ar&&"documentMode"in document&&(ka=document.documentMode);var WA=ar&&"TextEvent"in window&&!ka,y_=ar&&(!Pm||ka&&8<ka&&11>=ka),Nv=String.fromCharCode(32),Dv=!1;function v_(t,e){switch(t){case"keyup":return qA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function w_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ds=!1;function GA(t,e){switch(t){case"compositionend":return w_(e);case"keypress":return e.which!==32?null:(Dv=!0,Nv);case"textInput":return t=e.data,t===Nv&&Dv?null:t;default:return null}}function HA(t,e){if(Ds)return t==="compositionend"||!Pm&&v_(t,e)?(t=g_(),Ku=Dm=Pr=null,Ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return y_&&e.locale!=="ko"?null:e.data;default:return null}}var KA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!KA[t.type]:e==="textarea"}function __(t,e,n,r){X1(r),e=Ic(e,"onChange"),0<e.length&&(n=new bm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ca=null,Ka=null;function QA(t){b_(t,0)}function yh(t){var e=Ps(t);if(q1(e))return t}function YA(t,e){if(t==="change")return e}var I_=!1;if(ar){var Ld;if(ar){var Md="oninput"in document;if(!Md){var Rv=document.createElement("div");Rv.setAttribute("oninput","return;"),Md=typeof Rv.oninput=="function"}Ld=Md}else Ld=!1;I_=Ld&&(!document.documentMode||9<document.documentMode)}function Pv(){Ca&&(Ca.detachEvent("onpropertychange",E_),Ka=Ca=null)}function E_(t){if(t.propertyName==="value"&&yh(Ka)){var e=[];__(e,Ka,t,km(t)),t_(QA,e)}}function XA(t,e,n){t==="focusin"?(Pv(),Ca=e,Ka=n,Ca.attachEvent("onpropertychange",E_)):t==="focusout"&&Pv()}function JA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yh(Ka)}function ZA(t,e){if(t==="click")return yh(e)}function ex(t,e){if(t==="input"||t==="change")return yh(e)}function tx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var En=typeof Object.is=="function"?Object.is:tx;function Qa(t,e){if(En(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Cf.call(e,i)||!En(t[i],e[i]))return!1}return!0}function Ov(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lv(t,e){var n=Ov(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ov(n)}}function S_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?S_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function T_(){for(var t=window,e=pc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pc(t.document)}return e}function Om(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nx(t){var e=T_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&S_(n.ownerDocument.documentElement,n)){if(r!==null&&Om(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Lv(n,s);var o=Lv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rx=ar&&"documentMode"in document&&11>=document.documentMode,bs=null,Wf=null,Aa=null,Gf=!1;function Mv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gf||bs==null||bs!==pc(r)||(r=bs,"selectionStart"in r&&Om(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Aa&&Qa(Aa,r)||(Aa=r,r=Ic(Wf,"onSelect"),0<r.length&&(e=new bm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=bs)))}function Su(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Rs={animationend:Su("Animation","AnimationEnd"),animationiteration:Su("Animation","AnimationIteration"),animationstart:Su("Animation","AnimationStart"),transitionend:Su("Transition","TransitionEnd")},$d={},k_={};ar&&(k_=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function vh(t){if($d[t])return $d[t];if(!Rs[t])return t;var e=Rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in k_)return $d[t]=e[n];return t}var C_=vh("animationend"),A_=vh("animationiteration"),x_=vh("animationstart"),N_=vh("transitionend"),D_=new Map,$v="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ai(t,e){D_.set(t,e),as(e,[t])}for(var Fd=0;Fd<$v.length;Fd++){var Ud=$v[Fd],ix=Ud.toLowerCase(),sx=Ud[0].toUpperCase()+Ud.slice(1);ai(ix,"on"+sx)}ai(C_,"onAnimationEnd");ai(A_,"onAnimationIteration");ai(x_,"onAnimationStart");ai("dblclick","onDoubleClick");ai("focusin","onFocus");ai("focusout","onBlur");ai(N_,"onTransitionEnd");no("onMouseEnter",["mouseout","mouseover"]);no("onMouseLeave",["mouseout","mouseover"]);no("onPointerEnter",["pointerout","pointerover"]);no("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ox=new Set("cancel close invalid load scroll toggle".split(" ").concat(ma));function Fv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,iA(r,e,void 0,t),t.currentTarget=null}function b_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Fv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Fv(i,a,u),s=l}}}if(gc)throw t=zf,gc=!1,zf=null,t}function pe(t,e){var n=e[Xf];n===void 0&&(n=e[Xf]=new Set);var r=t+"__bubble";n.has(r)||(R_(e,t,2,!1),n.add(r))}function Vd(t,e,n){var r=0;e&&(r|=4),R_(n,t,r,e)}var Tu="_reactListening"+Math.random().toString(36).slice(2);function Ya(t){if(!t[Tu]){t[Tu]=!0,U1.forEach(function(n){n!=="selectionchange"&&(ox.has(n)||Vd(n,!1,t),Vd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Tu]||(e[Tu]=!0,Vd("selectionchange",!1,e))}}function R_(t,e,n,r){switch(m_(e)){case 1:var i=_A;break;case 4:i=IA;break;default:i=Nm}n=i.bind(null,e,n,t),i=void 0,!Vf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function zd(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ni(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}t_(function(){var u=s,c=km(n),h=[];e:{var d=D_.get(t);if(d!==void 0){var p=bm,y=t;switch(t){case"keypress":if(Qu(n)===0)break e;case"keydown":case"keyup":p=MA;break;case"focusin":y="focus",p=Od;break;case"focusout":y="blur",p=Od;break;case"beforeblur":case"afterblur":p=Od;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Cv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=TA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=UA;break;case C_:case A_:case x_:p=AA;break;case N_:p=zA;break;case"scroll":p=EA;break;case"wheel":p=jA;break;case"copy":case"cut":case"paste":p=NA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=xv}var v=(e&4)!==0,k=!v&&t==="scroll",g=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,m;f!==null;){m=f;var I=m.stateNode;if(m.tag===5&&I!==null&&(m=I,g!==null&&(I=qa(f,g),I!=null&&v.push(Xa(f,I,m)))),k)break;f=f.return}0<v.length&&(d=new p(d,y,null,n,c),h.push({event:d,listeners:v}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Ff&&(y=n.relatedTarget||n.fromElement)&&(Ni(y)||y[lr]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?Ni(y):null,y!==null&&(k=ls(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(v=Cv,I="onMouseLeave",g="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=xv,I="onPointerLeave",g="onPointerEnter",f="pointer"),k=p==null?d:Ps(p),m=y==null?d:Ps(y),d=new v(I,f+"leave",p,n,c),d.target=k,d.relatedTarget=m,I=null,Ni(c)===u&&(v=new v(g,f+"enter",y,n,c),v.target=m,v.relatedTarget=k,I=v),k=I,p&&y)t:{for(v=p,g=y,f=0,m=v;m;m=_s(m))f++;for(m=0,I=g;I;I=_s(I))m++;for(;0<f-m;)v=_s(v),f--;for(;0<m-f;)g=_s(g),m--;for(;f--;){if(v===g||g!==null&&v===g.alternate)break t;v=_s(v),g=_s(g)}v=null}else v=null;p!==null&&Uv(h,d,p,v,!1),y!==null&&k!==null&&Uv(h,k,y,v,!0)}}e:{if(d=u?Ps(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var E=YA;else if(bv(d))if(I_)E=ex;else{E=JA;var N=XA}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=ZA);if(E&&(E=E(t,u))){__(h,E,n,c);break e}N&&N(t,d,u),t==="focusout"&&(N=d._wrapperState)&&N.controlled&&d.type==="number"&&Pf(d,"number",d.value)}switch(N=u?Ps(u):window,t){case"focusin":(bv(N)||N.contentEditable==="true")&&(bs=N,Wf=u,Aa=null);break;case"focusout":Aa=Wf=bs=null;break;case"mousedown":Gf=!0;break;case"contextmenu":case"mouseup":case"dragend":Gf=!1,Mv(h,n,c);break;case"selectionchange":if(rx)break;case"keydown":case"keyup":Mv(h,n,c)}var R;if(Pm)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else Ds?v_(t,n)&&(U="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(y_&&n.locale!=="ko"&&(Ds||U!=="onCompositionStart"?U==="onCompositionEnd"&&Ds&&(R=g_()):(Pr=c,Dm="value"in Pr?Pr.value:Pr.textContent,Ds=!0)),N=Ic(u,U),0<N.length&&(U=new Av(U,t,null,n,c),h.push({event:U,listeners:N}),R?U.data=R:(R=w_(n),R!==null&&(U.data=R)))),(R=WA?GA(t,n):HA(t,n))&&(u=Ic(u,"onBeforeInput"),0<u.length&&(c=new Av("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=R))}b_(h,e)})}function Xa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ic(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=qa(t,n),s!=null&&r.unshift(Xa(t,s,i)),s=qa(t,e),s!=null&&r.push(Xa(t,s,i))),t=t.return}return r}function _s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Uv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=qa(n,s),l!=null&&o.unshift(Xa(n,l,a))):i||(l=qa(n,s),l!=null&&o.push(Xa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ax=/\r\n?/g,lx=/\u0000|\uFFFD/g;function Vv(t){return(typeof t=="string"?t:""+t).replace(ax,`
`).replace(lx,"")}function ku(t,e,n){if(e=Vv(e),Vv(t)!==e&&n)throw Error(A(425))}function Ec(){}var Hf=null,Kf=null;function Qf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yf=typeof setTimeout=="function"?setTimeout:void 0,ux=typeof clearTimeout=="function"?clearTimeout:void 0,zv=typeof Promise=="function"?Promise:void 0,cx=typeof queueMicrotask=="function"?queueMicrotask:typeof zv<"u"?function(t){return zv.resolve(null).then(t).catch(hx)}:Yf;function hx(t){setTimeout(function(){throw t})}function Bd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ha(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ha(e)}function Vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ao=Math.random().toString(36).slice(2),Nn="__reactFiber$"+Ao,Ja="__reactProps$"+Ao,lr="__reactContainer$"+Ao,Xf="__reactEvents$"+Ao,dx="__reactListeners$"+Ao,fx="__reactHandles$"+Ao;function Ni(t){var e=t[Nn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[lr]||n[Nn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bv(t);t!==null;){if(n=t[Nn])return n;t=Bv(t)}return e}t=n,n=t.parentNode}return null}function $l(t){return t=t[Nn]||t[lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function wh(t){return t[Ja]||null}var Jf=[],Os=-1;function li(t){return{current:t}}function ve(t){0>Os||(t.current=Jf[Os],Jf[Os]=null,Os--)}function de(t,e){Os++,Jf[Os]=t.current,t.current=e}var Hr={},Et=li(Hr),Bt=li(!1),qi=Hr;function ro(t,e){var n=t.type.contextTypes;if(!n)return Hr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function jt(t){return t=t.childContextTypes,t!=null}function Sc(){ve(Bt),ve(Et)}function jv(t,e,n){if(Et.current!==Hr)throw Error(A(168));de(Et,e),de(Bt,n)}function P_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(A(108,XC(t)||"Unknown",i));return xe({},n,r)}function Tc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Hr,qi=Et.current,de(Et,t),de(Bt,Bt.current),!0}function qv(t,e,n){var r=t.stateNode;if(!r)throw Error(A(169));n?(t=P_(t,e,qi),r.__reactInternalMemoizedMergedChildContext=t,ve(Bt),ve(Et),de(Et,t)):ve(Bt),de(Bt,n)}var Xn=null,_h=!1,jd=!1;function O_(t){Xn===null?Xn=[t]:Xn.push(t)}function px(t){_h=!0,O_(t)}function ui(){if(!jd&&Xn!==null){jd=!0;var t=0,e=ue;try{var n=Xn;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Xn=null,_h=!1}catch(i){throw Xn!==null&&(Xn=Xn.slice(t+1)),s_(Cm,ui),i}finally{ue=e,jd=!1}}return null}var Ls=[],Ms=0,kc=null,Cc=0,nn=[],rn=0,Wi=null,Jn=1,Zn="";function _i(t,e){Ls[Ms++]=Cc,Ls[Ms++]=kc,kc=t,Cc=e}function L_(t,e,n){nn[rn++]=Jn,nn[rn++]=Zn,nn[rn++]=Wi,Wi=t;var r=Jn;t=Zn;var i=32-wn(r)-1;r&=~(1<<i),n+=1;var s=32-wn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Jn=1<<32-wn(e)+i|n<<i|r,Zn=s+t}else Jn=1<<s|n<<i|r,Zn=t}function Lm(t){t.return!==null&&(_i(t,1),L_(t,1,0))}function Mm(t){for(;t===kc;)kc=Ls[--Ms],Ls[Ms]=null,Cc=Ls[--Ms],Ls[Ms]=null;for(;t===Wi;)Wi=nn[--rn],nn[rn]=null,Zn=nn[--rn],nn[rn]=null,Jn=nn[--rn],nn[rn]=null}var Yt=null,Kt=null,Se=!1,yn=null;function M_(t,e){var n=on(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Yt=t,Kt=Vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Yt=t,Kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wi!==null?{id:Jn,overflow:Zn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=on(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Yt=t,Kt=null,!0):!1;default:return!1}}function Zf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ep(t){if(Se){var e=Kt;if(e){var n=e;if(!Wv(t,e)){if(Zf(t))throw Error(A(418));e=Vr(n.nextSibling);var r=Yt;e&&Wv(t,e)?M_(r,n):(t.flags=t.flags&-4097|2,Se=!1,Yt=t)}}else{if(Zf(t))throw Error(A(418));t.flags=t.flags&-4097|2,Se=!1,Yt=t}}}function Gv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Yt=t}function Cu(t){if(t!==Yt)return!1;if(!Se)return Gv(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qf(t.type,t.memoizedProps)),e&&(e=Kt)){if(Zf(t))throw $_(),Error(A(418));for(;e;)M_(t,e),e=Vr(e.nextSibling)}if(Gv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Kt=Vr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Kt=null}}else Kt=Yt?Vr(t.stateNode.nextSibling):null;return!0}function $_(){for(var t=Kt;t;)t=Vr(t.nextSibling)}function io(){Kt=Yt=null,Se=!1}function $m(t){yn===null?yn=[t]:yn.push(t)}var mx=pr.ReactCurrentBatchConfig;function Jo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function Au(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hv(t){var e=t._init;return e(t._payload)}function F_(t){function e(g,f){if(t){var m=g.deletions;m===null?(g.deletions=[f],g.flags|=16):m.push(f)}}function n(g,f){if(!t)return null;for(;f!==null;)e(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=qr(g,f),g.index=0,g.sibling=null,g}function s(g,f,m){return g.index=m,t?(m=g.alternate,m!==null?(m=m.index,m<f?(g.flags|=2,f):m):(g.flags|=2,f)):(g.flags|=1048576,f)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,f,m,I){return f===null||f.tag!==6?(f=Yd(m,g.mode,I),f.return=g,f):(f=i(f,m),f.return=g,f)}function l(g,f,m,I){var E=m.type;return E===Ns?c(g,f,m.props.children,I,m.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ar&&Hv(E)===f.type)?(I=i(f,m.props),I.ref=Jo(g,f,m),I.return=g,I):(I=nc(m.type,m.key,m.props,null,g.mode,I),I.ref=Jo(g,f,m),I.return=g,I)}function u(g,f,m,I){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Xd(m,g.mode,I),f.return=g,f):(f=i(f,m.children||[]),f.return=g,f)}function c(g,f,m,I,E){return f===null||f.tag!==7?(f=Fi(m,g.mode,I,E),f.return=g,f):(f=i(f,m),f.return=g,f)}function h(g,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Yd(""+f,g.mode,m),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case gu:return m=nc(f.type,f.key,f.props,null,g.mode,m),m.ref=Jo(g,null,f),m.return=g,m;case xs:return f=Xd(f,g.mode,m),f.return=g,f;case Ar:var I=f._init;return h(g,I(f._payload),m)}if(fa(f)||Ho(f))return f=Fi(f,g.mode,m,null),f.return=g,f;Au(g,f)}return null}function d(g,f,m,I){var E=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:a(g,f,""+m,I);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case gu:return m.key===E?l(g,f,m,I):null;case xs:return m.key===E?u(g,f,m,I):null;case Ar:return E=m._init,d(g,f,E(m._payload),I)}if(fa(m)||Ho(m))return E!==null?null:c(g,f,m,I,null);Au(g,m)}return null}function p(g,f,m,I,E){if(typeof I=="string"&&I!==""||typeof I=="number")return g=g.get(m)||null,a(f,g,""+I,E);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case gu:return g=g.get(I.key===null?m:I.key)||null,l(f,g,I,E);case xs:return g=g.get(I.key===null?m:I.key)||null,u(f,g,I,E);case Ar:var N=I._init;return p(g,f,m,N(I._payload),E)}if(fa(I)||Ho(I))return g=g.get(m)||null,c(f,g,I,E,null);Au(f,I)}return null}function y(g,f,m,I){for(var E=null,N=null,R=f,U=f=0,oe=null;R!==null&&U<m.length;U++){R.index>U?(oe=R,R=null):oe=R.sibling;var B=d(g,R,m[U],I);if(B===null){R===null&&(R=oe);break}t&&R&&B.alternate===null&&e(g,R),f=s(B,f,U),N===null?E=B:N.sibling=B,N=B,R=oe}if(U===m.length)return n(g,R),Se&&_i(g,U),E;if(R===null){for(;U<m.length;U++)R=h(g,m[U],I),R!==null&&(f=s(R,f,U),N===null?E=R:N.sibling=R,N=R);return Se&&_i(g,U),E}for(R=r(g,R);U<m.length;U++)oe=p(R,g,U,m[U],I),oe!==null&&(t&&oe.alternate!==null&&R.delete(oe.key===null?U:oe.key),f=s(oe,f,U),N===null?E=oe:N.sibling=oe,N=oe);return t&&R.forEach(function(Ot){return e(g,Ot)}),Se&&_i(g,U),E}function v(g,f,m,I){var E=Ho(m);if(typeof E!="function")throw Error(A(150));if(m=E.call(m),m==null)throw Error(A(151));for(var N=E=null,R=f,U=f=0,oe=null,B=m.next();R!==null&&!B.done;U++,B=m.next()){R.index>U?(oe=R,R=null):oe=R.sibling;var Ot=d(g,R,B.value,I);if(Ot===null){R===null&&(R=oe);break}t&&R&&Ot.alternate===null&&e(g,R),f=s(Ot,f,U),N===null?E=Ot:N.sibling=Ot,N=Ot,R=oe}if(B.done)return n(g,R),Se&&_i(g,U),E;if(R===null){for(;!B.done;U++,B=m.next())B=h(g,B.value,I),B!==null&&(f=s(B,f,U),N===null?E=B:N.sibling=B,N=B);return Se&&_i(g,U),E}for(R=r(g,R);!B.done;U++,B=m.next())B=p(R,g,U,B.value,I),B!==null&&(t&&B.alternate!==null&&R.delete(B.key===null?U:B.key),f=s(B,f,U),N===null?E=B:N.sibling=B,N=B);return t&&R.forEach(function(_r){return e(g,_r)}),Se&&_i(g,U),E}function k(g,f,m,I){if(typeof m=="object"&&m!==null&&m.type===Ns&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case gu:e:{for(var E=m.key,N=f;N!==null;){if(N.key===E){if(E=m.type,E===Ns){if(N.tag===7){n(g,N.sibling),f=i(N,m.props.children),f.return=g,g=f;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ar&&Hv(E)===N.type){n(g,N.sibling),f=i(N,m.props),f.ref=Jo(g,N,m),f.return=g,g=f;break e}n(g,N);break}else e(g,N);N=N.sibling}m.type===Ns?(f=Fi(m.props.children,g.mode,I,m.key),f.return=g,g=f):(I=nc(m.type,m.key,m.props,null,g.mode,I),I.ref=Jo(g,f,m),I.return=g,g=I)}return o(g);case xs:e:{for(N=m.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(g,f.sibling),f=i(f,m.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else e(g,f);f=f.sibling}f=Xd(m,g.mode,I),f.return=g,g=f}return o(g);case Ar:return N=m._init,k(g,f,N(m._payload),I)}if(fa(m))return y(g,f,m,I);if(Ho(m))return v(g,f,m,I);Au(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(g,f.sibling),f=i(f,m),f.return=g,g=f):(n(g,f),f=Yd(m,g.mode,I),f.return=g,g=f),o(g)):n(g,f)}return k}var so=F_(!0),U_=F_(!1),Ac=li(null),xc=null,$s=null,Fm=null;function Um(){Fm=$s=xc=null}function Vm(t){var e=Ac.current;ve(Ac),t._currentValue=e}function tp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Gs(t,e){xc=t,Fm=$s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Ft=!0),t.firstContext=null)}function un(t){var e=t._currentValue;if(Fm!==t)if(t={context:t,memoizedValue:e,next:null},$s===null){if(xc===null)throw Error(A(308));$s=t,xc.dependencies={lanes:0,firstContext:t}}else $s=$s.next=t;return e}var Di=null;function zm(t){Di===null?Di=[t]:Di.push(t)}function V_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,zm(e)):(n.next=i.next,i.next=n),e.interleaved=n,ur(t,r)}function ur(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xr=!1;function Bm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function z_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ir(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(ie&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ur(t,n)}return i=r.interleaved,i===null?(e.next=e,zm(r)):(e.next=i.next,i.next=e),r.interleaved=e,ur(t,n)}function Yu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Am(t,n)}}function Kv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nc(t,e,n,r){var i=t.updateQueue;xr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(p,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(p,h,d):y,d==null)break e;h=xe({},h,d);break e;case 2:xr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Hi|=o,t.lanes=o,t.memoizedState=h}}function Qv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var Fl={},zn=li(Fl),Za=li(Fl),el=li(Fl);function bi(t){if(t===Fl)throw Error(A(174));return t}function jm(t,e){switch(de(el,e),de(Za,t),de(zn,Fl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Lf(e,t)}ve(zn),de(zn,e)}function oo(){ve(zn),ve(Za),ve(el)}function B_(t){bi(el.current);var e=bi(zn.current),n=Lf(e,t.type);e!==n&&(de(Za,t),de(zn,n))}function qm(t){Za.current===t&&(ve(zn),ve(Za))}var Ce=li(0);function Dc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qd=[];function Wm(){for(var t=0;t<qd.length;t++)qd[t]._workInProgressVersionPrimary=null;qd.length=0}var Xu=pr.ReactCurrentDispatcher,Wd=pr.ReactCurrentBatchConfig,Gi=0,Ae=null,qe=null,Qe=null,bc=!1,xa=!1,tl=0,gx=0;function gt(){throw Error(A(321))}function Gm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!En(t[n],e[n]))return!1;return!0}function Hm(t,e,n,r,i,s){if(Gi=s,Ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xu.current=t===null||t.memoizedState===null?_x:Ix,t=n(r,i),xa){s=0;do{if(xa=!1,tl=0,25<=s)throw Error(A(301));s+=1,Qe=qe=null,e.updateQueue=null,Xu.current=Ex,t=n(r,i)}while(xa)}if(Xu.current=Rc,e=qe!==null&&qe.next!==null,Gi=0,Qe=qe=Ae=null,bc=!1,e)throw Error(A(300));return t}function Km(){var t=tl!==0;return tl=0,t}function xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Ae.memoizedState=Qe=t:Qe=Qe.next=t,Qe}function cn(){if(qe===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=qe.next;var e=Qe===null?Ae.memoizedState:Qe.next;if(e!==null)Qe=e,qe=t;else{if(t===null)throw Error(A(310));qe=t,t={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Qe===null?Ae.memoizedState=Qe=t:Qe=Qe.next=t}return Qe}function nl(t,e){return typeof e=="function"?e(t):e}function Gd(t){var e=cn(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Gi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Ae.lanes|=c,Hi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,En(r,e.memoizedState)||(Ft=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ae.lanes|=s,Hi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hd(t){var e=cn(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);En(s,e.memoizedState)||(Ft=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function j_(){}function q_(t,e){var n=Ae,r=cn(),i=e(),s=!En(r.memoizedState,i);if(s&&(r.memoizedState=i,Ft=!0),r=r.queue,Qm(H_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,rl(9,G_.bind(null,n,r,i,e),void 0,null),Je===null)throw Error(A(349));(Gi&30)!==0||W_(n,e,i)}return i}function W_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function G_(t,e,n,r){e.value=n,e.getSnapshot=r,K_(e)&&Q_(t)}function H_(t,e,n){return n(function(){K_(e)&&Q_(t)})}function K_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!En(t,n)}catch{return!0}}function Q_(t){var e=ur(t,1);e!==null&&_n(e,t,1,-1)}function Yv(t){var e=xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nl,lastRenderedState:t},e.queue=t,t=t.dispatch=wx.bind(null,Ae,t),[e.memoizedState,t]}function rl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Y_(){return cn().memoizedState}function Ju(t,e,n,r){var i=xn();Ae.flags|=t,i.memoizedState=rl(1|e,n,void 0,r===void 0?null:r)}function Ih(t,e,n,r){var i=cn();r=r===void 0?null:r;var s=void 0;if(qe!==null){var o=qe.memoizedState;if(s=o.destroy,r!==null&&Gm(r,o.deps)){i.memoizedState=rl(e,n,s,r);return}}Ae.flags|=t,i.memoizedState=rl(1|e,n,s,r)}function Xv(t,e){return Ju(8390656,8,t,e)}function Qm(t,e){return Ih(2048,8,t,e)}function X_(t,e){return Ih(4,2,t,e)}function J_(t,e){return Ih(4,4,t,e)}function Z_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function eI(t,e,n){return n=n!=null?n.concat([t]):null,Ih(4,4,Z_.bind(null,e,t),n)}function Ym(){}function tI(t,e){var n=cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function nI(t,e){var n=cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function rI(t,e,n){return(Gi&21)===0?(t.baseState&&(t.baseState=!1,Ft=!0),t.memoizedState=n):(En(n,e)||(n=l_(),Ae.lanes|=n,Hi|=n,t.baseState=!0),e)}function yx(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=Wd.transition;Wd.transition={};try{t(!1),e()}finally{ue=n,Wd.transition=r}}function iI(){return cn().memoizedState}function vx(t,e,n){var r=jr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sI(t))oI(e,n);else if(n=V_(t,e,n,r),n!==null){var i=xt();_n(n,t,r,i),aI(n,e,r)}}function wx(t,e,n){var r=jr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sI(t))oI(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,En(a,o)){var l=e.interleaved;l===null?(i.next=i,zm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=V_(t,e,i,r),n!==null&&(i=xt(),_n(n,t,r,i),aI(n,e,r))}}function sI(t){var e=t.alternate;return t===Ae||e!==null&&e===Ae}function oI(t,e){xa=bc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function aI(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Am(t,n)}}var Rc={readContext:un,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useInsertionEffect:gt,useLayoutEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,useSyncExternalStore:gt,useId:gt,unstable_isNewReconciler:!1},_x={readContext:un,useCallback:function(t,e){return xn().memoizedState=[t,e===void 0?null:e],t},useContext:un,useEffect:Xv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ju(4194308,4,Z_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ju(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ju(4,2,t,e)},useMemo:function(t,e){var n=xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=xn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=vx.bind(null,Ae,t),[r.memoizedState,t]},useRef:function(t){var e=xn();return t={current:t},e.memoizedState=t},useState:Yv,useDebugValue:Ym,useDeferredValue:function(t){return xn().memoizedState=t},useTransition:function(){var t=Yv(!1),e=t[0];return t=yx.bind(null,t[1]),xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ae,i=xn();if(Se){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),Je===null)throw Error(A(349));(Gi&30)!==0||W_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Xv(H_.bind(null,r,s,t),[t]),r.flags|=2048,rl(9,G_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=xn(),e=Je.identifierPrefix;if(Se){var n=Zn,r=Jn;n=(r&~(1<<32-wn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=tl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ix={readContext:un,useCallback:tI,useContext:un,useEffect:Qm,useImperativeHandle:eI,useInsertionEffect:X_,useLayoutEffect:J_,useMemo:nI,useReducer:Gd,useRef:Y_,useState:function(){return Gd(nl)},useDebugValue:Ym,useDeferredValue:function(t){var e=cn();return rI(e,qe.memoizedState,t)},useTransition:function(){var t=Gd(nl)[0],e=cn().memoizedState;return[t,e]},useMutableSource:j_,useSyncExternalStore:q_,useId:iI,unstable_isNewReconciler:!1},Ex={readContext:un,useCallback:tI,useContext:un,useEffect:Qm,useImperativeHandle:eI,useInsertionEffect:X_,useLayoutEffect:J_,useMemo:nI,useReducer:Hd,useRef:Y_,useState:function(){return Hd(nl)},useDebugValue:Ym,useDeferredValue:function(t){var e=cn();return qe===null?e.memoizedState=t:rI(e,qe.memoizedState,t)},useTransition:function(){var t=Hd(nl)[0],e=cn().memoizedState;return[t,e]},useMutableSource:j_,useSyncExternalStore:q_,useId:iI,unstable_isNewReconciler:!1};function mn(t,e){if(t&&t.defaultProps){e=xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function np(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Eh={isMounted:function(t){return(t=t._reactInternals)?ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=xt(),i=jr(t),s=ir(r,i);s.payload=e,n!=null&&(s.callback=n),e=zr(t,s,i),e!==null&&(_n(e,t,i,r),Yu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=xt(),i=jr(t),s=ir(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zr(t,s,i),e!==null&&(_n(e,t,i,r),Yu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xt(),r=jr(t),i=ir(n,r);i.tag=2,e!=null&&(i.callback=e),e=zr(t,i,r),e!==null&&(_n(e,t,r,n),Yu(e,t,r))}};function Jv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Qa(n,r)||!Qa(i,s):!0}function lI(t,e,n){var r=!1,i=Hr,s=e.contextType;return typeof s=="object"&&s!==null?s=un(s):(i=jt(e)?qi:Et.current,r=e.contextTypes,s=(r=r!=null)?ro(t,i):Hr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Eh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Eh.enqueueReplaceState(e,e.state,null)}function rp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Bm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=un(s):(s=jt(e)?qi:Et.current,i.context=ro(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(np(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Eh.enqueueReplaceState(i,i.state,null),Nc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ao(t,e){try{var n="",r=e;do n+=YC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Kd(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function ip(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Sx=typeof WeakMap=="function"?WeakMap:Map;function uI(t,e,n){n=ir(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Oc||(Oc=!0,pp=r),ip(t,e)},n}function cI(t,e,n){n=ir(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ip(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ip(t,e),typeof r!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ew(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Sx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=$x.bind(null,t,e,n),e.then(t,t))}function tw(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function nw(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ir(-1,1),e.tag=2,zr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var Tx=pr.ReactCurrentOwner,Ft=!1;function Tt(t,e,n,r){e.child=t===null?U_(e,null,n,r):so(e,t.child,n,r)}function rw(t,e,n,r,i){n=n.render;var s=e.ref;return Gs(e,i),r=Hm(t,e,n,r,s,i),n=Km(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cr(t,e,i)):(Se&&n&&Lm(e),e.flags|=1,Tt(t,e,r,i),e.child)}function iw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ig(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,hI(t,e,s,r,i)):(t=nc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qa,n(o,r)&&t.ref===e.ref)return cr(t,e,i)}return e.flags|=1,t=qr(s,r),t.ref=e.ref,t.return=e,e.child=t}function hI(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Qa(s,r)&&t.ref===e.ref)if(Ft=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Ft=!0);else return e.lanes=t.lanes,cr(t,e,i)}return sp(t,e,n,r,i)}function dI(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Us,Gt),Gt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(Us,Gt),Gt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(Us,Gt),Gt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(Us,Gt),Gt|=r;return Tt(t,e,i,n),e.child}function fI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sp(t,e,n,r,i){var s=jt(n)?qi:Et.current;return s=ro(e,s),Gs(e,i),n=Hm(t,e,n,r,s,i),r=Km(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cr(t,e,i)):(Se&&r&&Lm(e),e.flags|=1,Tt(t,e,n,i),e.child)}function sw(t,e,n,r,i){if(jt(n)){var s=!0;Tc(e)}else s=!1;if(Gs(e,i),e.stateNode===null)Zu(t,e),lI(e,n,r),rp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=un(u):(u=jt(n)?qi:Et.current,u=ro(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Zv(e,o,r,u),xr=!1;var d=e.memoizedState;o.state=d,Nc(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Bt.current||xr?(typeof c=="function"&&(np(e,n,c,r),l=e.memoizedState),(a=xr||Jv(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,z_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:mn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=un(l):(l=jt(n)?qi:Et.current,l=ro(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Zv(e,o,r,l),xr=!1,d=e.memoizedState,o.state=d,Nc(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||Bt.current||xr?(typeof p=="function"&&(np(e,n,p,r),y=e.memoizedState),(u=xr||Jv(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return op(t,e,n,r,s,i)}function op(t,e,n,r,i,s){fI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&qv(e,n,!1),cr(t,e,s);r=e.stateNode,Tx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=so(e,t.child,null,s),e.child=so(e,null,a,s)):Tt(t,e,a,s),e.memoizedState=r.state,i&&qv(e,n,!0),e.child}function pI(t){var e=t.stateNode;e.pendingContext?jv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jv(t,e.context,!1),jm(t,e.containerInfo)}function ow(t,e,n,r,i){return io(),$m(i),e.flags|=256,Tt(t,e,n,r),e.child}var ap={dehydrated:null,treeContext:null,retryLane:0};function lp(t){return{baseLanes:t,cachePool:null,transitions:null}}function mI(t,e,n){var r=e.pendingProps,i=Ce.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(Ce,i&1),t===null)return ep(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=kh(o,r,0,null),t=Fi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=lp(n),e.memoizedState=ap,t):Xm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return kx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=qr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=qr(a,s):(s=Fi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?lp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ap,r}return s=t.child,t=s.sibling,r=qr(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Xm(t,e){return e=kh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xu(t,e,n,r){return r!==null&&$m(r),so(e,t.child,null,n),t=Xm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Kd(Error(A(422))),xu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=kh({mode:"visible",children:r.children},i,0,null),s=Fi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&so(e,t.child,null,o),e.child.memoizedState=lp(o),e.memoizedState=ap,s);if((e.mode&1)===0)return xu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=Kd(s,r,void 0),xu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ft||a){if(r=Je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ur(t,i),_n(r,t,i,-1))}return rg(),r=Kd(Error(A(421))),xu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Fx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Kt=Vr(i.nextSibling),Yt=e,Se=!0,yn=null,t!==null&&(nn[rn++]=Jn,nn[rn++]=Zn,nn[rn++]=Wi,Jn=t.id,Zn=t.overflow,Wi=e),e=Xm(e,r.children),e.flags|=4096,e)}function aw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),tp(t.return,e,n)}function Qd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function gI(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Tt(t,e,r.children,n),r=Ce.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&aw(t,n,e);else if(t.tag===19)aw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(Ce,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Dc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Qd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Dc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Qd(e,!0,n,null,s);break;case"together":Qd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zu(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function cr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hi|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=qr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=qr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Cx(t,e,n){switch(e.tag){case 3:pI(e),io();break;case 5:B_(e);break;case 1:jt(e.type)&&Tc(e);break;case 4:jm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(Ac,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(Ce,Ce.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?mI(t,e,n):(de(Ce,Ce.current&1),t=cr(t,e,n),t!==null?t.sibling:null);de(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return gI(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,dI(t,e,n)}return cr(t,e,n)}var yI,up,vI,wI;yI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};up=function(){};vI=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,bi(zn.current);var s=null;switch(n){case"input":i=bf(t,i),r=bf(t,r),s=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),s=[];break;case"textarea":i=Of(t,i),r=Of(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ec)}Mf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ba.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ba.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&pe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};wI=function(t,e,n,r){n!==r&&(e.flags|=4)};function Zo(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ax(t,e,n){var r=e.pendingProps;switch(Mm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(e),null;case 1:return jt(e.type)&&Sc(),yt(e),null;case 3:return r=e.stateNode,oo(),ve(Bt),ve(Et),Wm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Cu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,yn!==null&&(yp(yn),yn=null))),up(t,e),yt(e),null;case 5:qm(e);var i=bi(el.current);if(n=e.type,t!==null&&e.stateNode!=null)vI(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(A(166));return yt(e),null}if(t=bi(zn.current),Cu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Nn]=e,r[Ja]=s,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<ma.length;i++)pe(ma[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":gv(r,s),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},pe("invalid",r);break;case"textarea":vv(r,s),pe("invalid",r)}Mf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ku(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ku(r.textContent,a,t),i=["children",""+a]):Ba.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":yu(r),yv(r,s,!0);break;case"textarea":yu(r),wv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ec)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=H1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Nn]=e,t[Ja]=r,yI(t,e,!1,!1),e.stateNode=t;e:{switch(o=$f(n,r),n){case"dialog":pe("cancel",t),pe("close",t),i=r;break;case"iframe":case"object":case"embed":pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<ma.length;i++)pe(ma[i],t);i=r;break;case"source":pe("error",t),i=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),i=r;break;case"details":pe("toggle",t),i=r;break;case"input":gv(t,r),i=bf(t,r),pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),pe("invalid",t);break;case"textarea":vv(t,r),i=Of(t,r),pe("invalid",t);break;default:i=r}Mf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Y1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&K1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ja(t,l):typeof l=="number"&&ja(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ba.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pe("scroll",t):l!=null&&Im(t,s,l,o))}switch(n){case"input":yu(t),yv(t,r,!1);break;case"textarea":yu(t),wv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Gr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Bs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Bs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ec)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yt(e),null;case 6:if(t&&e.stateNode!=null)wI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(A(166));if(n=bi(el.current),bi(zn.current),Cu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Nn]=e,(s=r.nodeValue!==n)&&(t=Yt,t!==null))switch(t.tag){case 3:ku(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ku(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nn]=e,e.stateNode=r}return yt(e),null;case 13:if(ve(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&Kt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)$_(),io(),e.flags|=98560,s=!1;else if(s=Cu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(A(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[Nn]=e}else io(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;yt(e),s=!1}else yn!==null&&(yp(yn),yn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Ce.current&1)!==0?We===0&&(We=3):rg())),e.updateQueue!==null&&(e.flags|=4),yt(e),null);case 4:return oo(),up(t,e),t===null&&Ya(e.stateNode.containerInfo),yt(e),null;case 10:return Vm(e.type._context),yt(e),null;case 17:return jt(e.type)&&Sc(),yt(e),null;case 19:if(ve(Ce),s=e.memoizedState,s===null)return yt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Zo(s,!1);else{if(We!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Dc(t),o!==null){for(e.flags|=128,Zo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(Ce,Ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&Le()>lo&&(e.flags|=128,r=!0,Zo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Dc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Se)return yt(e),null}else 2*Le()-s.renderingStartTime>lo&&n!==1073741824&&(e.flags|=128,r=!0,Zo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Le(),e.sibling=null,n=Ce.current,de(Ce,r?n&1|2:n&1),e):(yt(e),null);case 22:case 23:return ng(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Gt&1073741824)!==0&&(yt(e),e.subtreeFlags&6&&(e.flags|=8192)):yt(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function xx(t,e){switch(Mm(e),e.tag){case 1:return jt(e.type)&&Sc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return oo(),ve(Bt),ve(Et),Wm(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return qm(e),null;case 13:if(ve(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));io()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ve(Ce),null;case 4:return oo(),null;case 10:return Vm(e.type._context),null;case 22:case 23:return ng(),null;case 24:return null;default:return null}}var Nu=!1,wt=!1,Nx=typeof WeakSet=="function"?WeakSet:Set,F=null;function Fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function cp(t,e,n){try{n()}catch(r){De(t,e,r)}}var lw=!1;function Dx(t,e){if(Hf=wc,t=T_(),Om(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kf={focusedElem:t,selectionRange:n},wc=!1,F=e;F!==null;)if(e=F,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,F=t;else for(;F!==null;){e=F;try{var y=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,k=y.memoizedState,g=e.stateNode,f=g.getSnapshotBeforeUpdate(e.elementType===e.type?v:mn(e.type,v),k);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(I){De(e,e.return,I)}if(t=e.sibling,t!==null){t.return=e.return,F=t;break}F=e.return}return y=lw,lw=!1,y}function Na(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&cp(e,n,s)}i=i.next}while(i!==r)}}function Sh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function hp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _I(t){var e=t.alternate;e!==null&&(t.alternate=null,_I(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Nn],delete e[Ja],delete e[Xf],delete e[dx],delete e[fx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function II(t){return t.tag===5||t.tag===3||t.tag===4}function uw(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||II(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ec));else if(r!==4&&(t=t.child,t!==null))for(dp(t,e,n),t=t.sibling;t!==null;)dp(t,e,n),t=t.sibling}function fp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(fp(t,e,n),t=t.sibling;t!==null;)fp(t,e,n),t=t.sibling}var it=null,gn=!1;function Er(t,e,n){for(n=n.child;n!==null;)EI(t,e,n),n=n.sibling}function EI(t,e,n){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount(mh,n)}catch{}switch(n.tag){case 5:wt||Fs(n,e);case 6:var r=it,i=gn;it=null,Er(t,e,n),it=r,gn=i,it!==null&&(gn?(t=it,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):it.removeChild(n.stateNode));break;case 18:it!==null&&(gn?(t=it,n=n.stateNode,t.nodeType===8?Bd(t.parentNode,n):t.nodeType===1&&Bd(t,n),Ha(t)):Bd(it,n.stateNode));break;case 4:r=it,i=gn,it=n.stateNode.containerInfo,gn=!0,Er(t,e,n),it=r,gn=i;break;case 0:case 11:case 14:case 15:if(!wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&cp(n,e,o),i=i.next}while(i!==r)}Er(t,e,n);break;case 1:if(!wt&&(Fs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){De(n,e,a)}Er(t,e,n);break;case 21:Er(t,e,n);break;case 22:n.mode&1?(wt=(r=wt)||n.memoizedState!==null,Er(t,e,n),wt=r):Er(t,e,n);break;default:Er(t,e,n)}}function cw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Nx),e.forEach(function(r){var i=Ux.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:it=a.stateNode,gn=!1;break e;case 3:it=a.stateNode.containerInfo,gn=!0;break e;case 4:it=a.stateNode.containerInfo,gn=!0;break e}a=a.return}if(it===null)throw Error(A(160));EI(s,o,i),it=null,gn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){De(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)SI(e,t),e=e.sibling}function SI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(pn(e,t),An(t),r&4){try{Na(3,t,t.return),Sh(3,t)}catch(v){De(t,t.return,v)}try{Na(5,t,t.return)}catch(v){De(t,t.return,v)}}break;case 1:pn(e,t),An(t),r&512&&n!==null&&Fs(n,n.return);break;case 5:if(pn(e,t),An(t),r&512&&n!==null&&Fs(n,n.return),t.flags&32){var i=t.stateNode;try{ja(i,"")}catch(v){De(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&W1(i,s),$f(a,o);var u=$f(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Y1(i,h):c==="dangerouslySetInnerHTML"?K1(i,h):c==="children"?ja(i,h):Im(i,c,h,u)}switch(a){case"input":Rf(i,s);break;case"textarea":G1(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Bs(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Bs(i,!!s.multiple,s.defaultValue,!0):Bs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ja]=s}catch(v){De(t,t.return,v)}}break;case 6:if(pn(e,t),An(t),r&4){if(t.stateNode===null)throw Error(A(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){De(t,t.return,v)}}break;case 3:if(pn(e,t),An(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ha(e.containerInfo)}catch(v){De(t,t.return,v)}break;case 4:pn(e,t),An(t);break;case 13:pn(e,t),An(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(eg=Le())),r&4&&cw(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(wt=(u=wt)||c,pn(e,t),wt=u):pn(e,t),An(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(F=t,c=t.child;c!==null;){for(h=F=c;F!==null;){switch(d=F,p=d.child,d.tag){case 0:case 11:case 14:case 15:Na(4,d,d.return);break;case 1:Fs(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){De(r,n,v)}}break;case 5:Fs(d,d.return);break;case 22:if(d.memoizedState!==null){dw(h);continue}}p!==null?(p.return=d,F=p):dw(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Q1("display",o))}catch(v){De(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){De(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:pn(e,t),An(t),r&4&&cw(t);break;case 21:break;default:pn(e,t),An(t)}}function An(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(II(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ja(i,""),r.flags&=-33);var s=uw(t);fp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=uw(t);dp(t,a,o);break;default:throw Error(A(161))}}catch(l){De(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function bx(t,e,n){F=t,TI(t)}function TI(t,e,n){for(var r=(t.mode&1)!==0;F!==null;){var i=F,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Nu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||wt;a=Nu;var u=wt;if(Nu=o,(wt=l)&&!u)for(F=i;F!==null;)o=F,l=o.child,o.tag===22&&o.memoizedState!==null?fw(i):l!==null?(l.return=o,F=l):fw(i);for(;s!==null;)F=s,TI(s),s=s.sibling;F=i,Nu=a,wt=u}hw(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,F=s):hw(t)}}function hw(t){for(;F!==null;){var e=F;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:wt||Sh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!wt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:mn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Qv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ha(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}wt||e.flags&512&&hp(e)}catch(d){De(e,e.return,d)}}if(e===t){F=null;break}if(n=e.sibling,n!==null){n.return=e.return,F=n;break}F=e.return}}function dw(t){for(;F!==null;){var e=F;if(e===t){F=null;break}var n=e.sibling;if(n!==null){n.return=e.return,F=n;break}F=e.return}}function fw(t){for(;F!==null;){var e=F;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Sh(4,e)}catch(l){De(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){De(e,i,l)}}var s=e.return;try{hp(e)}catch(l){De(e,s,l)}break;case 5:var o=e.return;try{hp(e)}catch(l){De(e,o,l)}}}catch(l){De(e,e.return,l)}if(e===t){F=null;break}var a=e.sibling;if(a!==null){a.return=e.return,F=a;break}F=e.return}}var Rx=Math.ceil,Pc=pr.ReactCurrentDispatcher,Jm=pr.ReactCurrentOwner,ln=pr.ReactCurrentBatchConfig,ie=0,Je=null,Be=null,ut=0,Gt=0,Us=li(0),We=0,il=null,Hi=0,Th=0,Zm=0,Da=null,$t=null,eg=0,lo=1/0,Yn=null,Oc=!1,pp=null,Br=null,Du=!1,Or=null,Lc=0,ba=0,mp=null,ec=-1,tc=0;function xt(){return(ie&6)!==0?Le():ec!==-1?ec:ec=Le()}function jr(t){return(t.mode&1)===0?1:(ie&2)!==0&&ut!==0?ut&-ut:mx.transition!==null?(tc===0&&(tc=l_()),tc):(t=ue,t!==0||(t=window.event,t=t===void 0?16:m_(t.type)),t)}function _n(t,e,n,r){if(50<ba)throw ba=0,mp=null,Error(A(185));Ll(t,n,r),((ie&2)===0||t!==Je)&&(t===Je&&((ie&2)===0&&(Th|=n),We===4&&Dr(t,ut)),qt(t,r),n===1&&ie===0&&(e.mode&1)===0&&(lo=Le()+500,_h&&ui()))}function qt(t,e){var n=t.callbackNode;mA(t,e);var r=vc(t,t===Je?ut:0);if(r===0)n!==null&&Ev(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ev(n),e===1)t.tag===0?px(pw.bind(null,t)):O_(pw.bind(null,t)),cx(function(){(ie&6)===0&&ui()}),n=null;else{switch(u_(r)){case 1:n=Cm;break;case 4:n=o_;break;case 16:n=yc;break;case 536870912:n=a_;break;default:n=yc}n=RI(n,kI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kI(t,e){if(ec=-1,tc=0,(ie&6)!==0)throw Error(A(327));var n=t.callbackNode;if(Hs()&&t.callbackNode!==n)return null;var r=vc(t,t===Je?ut:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Mc(t,r);else{e=r;var i=ie;ie|=2;var s=AI();(Je!==t||ut!==e)&&(Yn=null,lo=Le()+500,$i(t,e));do try{Lx();break}catch(a){CI(t,a)}while(1);Um(),Pc.current=s,ie=i,Be!==null?e=0:(Je=null,ut=0,e=We)}if(e!==0){if(e===2&&(i=Bf(t),i!==0&&(r=i,e=gp(t,i))),e===1)throw n=il,$i(t,0),Dr(t,r),qt(t,Le()),n;if(e===6)Dr(t,r);else{if(i=t.current.alternate,(r&30)===0&&!Px(i)&&(e=Mc(t,r),e===2&&(s=Bf(t),s!==0&&(r=s,e=gp(t,s))),e===1))throw n=il,$i(t,0),Dr(t,r),qt(t,Le()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(A(345));case 2:Ii(t,$t,Yn);break;case 3:if(Dr(t,r),(r&130023424)===r&&(e=eg+500-Le(),10<e)){if(vc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){xt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Yf(Ii.bind(null,t,$t,Yn),e);break}Ii(t,$t,Yn);break;case 4:if(Dr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-wn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rx(r/1960))-r,10<r){t.timeoutHandle=Yf(Ii.bind(null,t,$t,Yn),r);break}Ii(t,$t,Yn);break;case 5:Ii(t,$t,Yn);break;default:throw Error(A(329))}}}return qt(t,Le()),t.callbackNode===n?kI.bind(null,t):null}function gp(t,e){var n=Da;return t.current.memoizedState.isDehydrated&&($i(t,e).flags|=256),t=Mc(t,e),t!==2&&(e=$t,$t=n,e!==null&&yp(e)),t}function yp(t){$t===null?$t=t:$t.push.apply($t,t)}function Px(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!En(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Dr(t,e){for(e&=~Zm,e&=~Th,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wn(e),r=1<<n;t[n]=-1,e&=~r}}function pw(t){if((ie&6)!==0)throw Error(A(327));Hs();var e=vc(t,0);if((e&1)===0)return qt(t,Le()),null;var n=Mc(t,e);if(t.tag!==0&&n===2){var r=Bf(t);r!==0&&(e=r,n=gp(t,r))}if(n===1)throw n=il,$i(t,0),Dr(t,e),qt(t,Le()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ii(t,$t,Yn),qt(t,Le()),null}function tg(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(lo=Le()+500,_h&&ui())}}function Ki(t){Or!==null&&Or.tag===0&&(ie&6)===0&&Hs();var e=ie;ie|=1;var n=ln.transition,r=ue;try{if(ln.transition=null,ue=1,t)return t()}finally{ue=r,ln.transition=n,ie=e,(ie&6)===0&&ui()}}function ng(){Gt=Us.current,ve(Us)}function $i(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ux(n)),Be!==null)for(n=Be.return;n!==null;){var r=n;switch(Mm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sc();break;case 3:oo(),ve(Bt),ve(Et),Wm();break;case 5:qm(r);break;case 4:oo();break;case 13:ve(Ce);break;case 19:ve(Ce);break;case 10:Vm(r.type._context);break;case 22:case 23:ng()}n=n.return}if(Je=t,Be=t=qr(t.current,null),ut=Gt=e,We=0,il=null,Zm=Th=Hi=0,$t=Da=null,Di!==null){for(e=0;e<Di.length;e++)if(n=Di[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Di=null}return t}function CI(t,e){do{var n=Be;try{if(Um(),Xu.current=Rc,bc){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}bc=!1}if(Gi=0,Qe=qe=Ae=null,xa=!1,tl=0,Jm.current=null,n===null||n.return===null){We=1,il=e,Be=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=tw(o);if(p!==null){p.flags&=-257,nw(p,o,a,s,e),p.mode&1&&ew(s,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if((e&1)===0){ew(s,u,e),rg();break e}l=Error(A(426))}}else if(Se&&a.mode&1){var k=tw(o);if(k!==null){(k.flags&65536)===0&&(k.flags|=256),nw(k,o,a,s,e),$m(ao(l,a));break e}}s=l=ao(l,a),We!==4&&(We=2),Da===null?Da=[s]:Da.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=uI(s,l,e);Kv(s,g);break e;case 1:a=l;var f=s.type,m=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Br===null||!Br.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var I=cI(s,a,e);Kv(s,I);break e}}s=s.return}while(s!==null)}NI(n)}catch(E){e=E,Be===n&&n!==null&&(Be=n=n.return);continue}break}while(1)}function AI(){var t=Pc.current;return Pc.current=Rc,t===null?Rc:t}function rg(){(We===0||We===3||We===2)&&(We=4),Je===null||(Hi&268435455)===0&&(Th&268435455)===0||Dr(Je,ut)}function Mc(t,e){var n=ie;ie|=2;var r=AI();(Je!==t||ut!==e)&&(Yn=null,$i(t,e));do try{Ox();break}catch(i){CI(t,i)}while(1);if(Um(),ie=n,Pc.current=r,Be!==null)throw Error(A(261));return Je=null,ut=0,We}function Ox(){for(;Be!==null;)xI(Be)}function Lx(){for(;Be!==null&&!oA();)xI(Be)}function xI(t){var e=bI(t.alternate,t,Gt);t.memoizedProps=t.pendingProps,e===null?NI(t):Be=e,Jm.current=null}function NI(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=Ax(n,e,Gt),n!==null){Be=n;return}}else{if(n=xx(n,e),n!==null){n.flags&=32767,Be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{We=6,Be=null;return}}if(e=e.sibling,e!==null){Be=e;return}Be=e=t}while(e!==null);We===0&&(We=5)}function Ii(t,e,n){var r=ue,i=ln.transition;try{ln.transition=null,ue=1,Mx(t,e,n,r)}finally{ln.transition=i,ue=r}return null}function Mx(t,e,n,r){do Hs();while(Or!==null);if((ie&6)!==0)throw Error(A(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(gA(t,s),t===Je&&(Be=Je=null,ut=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Du||(Du=!0,RI(yc,function(){return Hs(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=ln.transition,ln.transition=null;var o=ue;ue=1;var a=ie;ie|=4,Jm.current=null,Dx(t,n),SI(n,t),nx(Kf),wc=!!Hf,Kf=Hf=null,t.current=n,bx(n),aA(),ie=a,ue=o,ln.transition=s}else t.current=n;if(Du&&(Du=!1,Or=t,Lc=i),s=t.pendingLanes,s===0&&(Br=null),cA(n.stateNode),qt(t,Le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Oc)throw Oc=!1,t=pp,pp=null,t;return(Lc&1)!==0&&t.tag!==0&&Hs(),s=t.pendingLanes,(s&1)!==0?t===mp?ba++:(ba=0,mp=t):ba=0,ui(),null}function Hs(){if(Or!==null){var t=u_(Lc),e=ln.transition,n=ue;try{if(ln.transition=null,ue=16>t?16:t,Or===null)var r=!1;else{if(t=Or,Or=null,Lc=0,(ie&6)!==0)throw Error(A(331));var i=ie;for(ie|=4,F=t.current;F!==null;){var s=F,o=s.child;if((F.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(F=u;F!==null;){var c=F;switch(c.tag){case 0:case 11:case 15:Na(8,c,s)}var h=c.child;if(h!==null)h.return=c,F=h;else for(;F!==null;){c=F;var d=c.sibling,p=c.return;if(_I(c),c===u){F=null;break}if(d!==null){d.return=p,F=d;break}F=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}F=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,F=o;else e:for(;F!==null;){if(s=F,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Na(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,F=g;break e}F=s.return}}var f=t.current;for(F=f;F!==null;){o=F;var m=o.child;if((o.subtreeFlags&2064)!==0&&m!==null)m.return=o,F=m;else e:for(o=f;F!==null;){if(a=F,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Sh(9,a)}}catch(E){De(a,a.return,E)}if(a===o){F=null;break e}var I=a.sibling;if(I!==null){I.return=a.return,F=I;break e}F=a.return}}if(ie=i,ui(),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot(mh,t)}catch{}r=!0}return r}finally{ue=n,ln.transition=e}}return!1}function mw(t,e,n){e=ao(n,e),e=uI(t,e,1),t=zr(t,e,1),e=xt(),t!==null&&(Ll(t,1,e),qt(t,e))}function De(t,e,n){if(t.tag===3)mw(t,t,n);else for(;e!==null;){if(e.tag===3){mw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Br===null||!Br.has(r))){t=ao(n,t),t=cI(e,t,1),e=zr(e,t,1),t=xt(),e!==null&&(Ll(e,1,t),qt(e,t));break}}e=e.return}}function $x(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=xt(),t.pingedLanes|=t.suspendedLanes&n,Je===t&&(ut&n)===n&&(We===4||We===3&&(ut&130023424)===ut&&500>Le()-eg?$i(t,0):Zm|=n),qt(t,e)}function DI(t,e){e===0&&((t.mode&1)===0?e=1:(e=_u,_u<<=1,(_u&130023424)===0&&(_u=4194304)));var n=xt();t=ur(t,e),t!==null&&(Ll(t,e,n),qt(t,n))}function Fx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),DI(t,n)}function Ux(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(e),DI(t,n)}var bI;bI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Bt.current)Ft=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Ft=!1,Cx(t,e,n);Ft=(t.flags&131072)!==0}else Ft=!1,Se&&(e.flags&1048576)!==0&&L_(e,Cc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Zu(t,e),t=e.pendingProps;var i=ro(e,Et.current);Gs(e,n),i=Hm(null,e,r,t,i,n);var s=Km();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,jt(r)?(s=!0,Tc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bm(e),i.updater=Eh,e.stateNode=i,i._reactInternals=e,rp(e,r,t,n),e=op(null,e,r,!0,s,n)):(e.tag=0,Se&&s&&Lm(e),Tt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Zu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=zx(r),t=mn(r,t),i){case 0:e=sp(null,e,r,t,n);break e;case 1:e=sw(null,e,r,t,n);break e;case 11:e=rw(null,e,r,t,n);break e;case 14:e=iw(null,e,r,mn(r.type,t),n);break e}throw Error(A(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),sp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),sw(t,e,r,i,n);case 3:e:{if(pI(e),t===null)throw Error(A(387));r=e.pendingProps,s=e.memoizedState,i=s.element,z_(t,e),Nc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ao(Error(A(423)),e),e=ow(t,e,r,n,i);break e}else if(r!==i){i=ao(Error(A(424)),e),e=ow(t,e,r,n,i);break e}else for(Kt=Vr(e.stateNode.containerInfo.firstChild),Yt=e,Se=!0,yn=null,n=U_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(io(),r===i){e=cr(t,e,n);break e}Tt(t,e,r,n)}e=e.child}return e;case 5:return B_(e),t===null&&ep(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Qf(r,i)?o=null:s!==null&&Qf(r,s)&&(e.flags|=32),fI(t,e),Tt(t,e,o,n),e.child;case 6:return t===null&&ep(e),null;case 13:return mI(t,e,n);case 4:return jm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=so(e,null,r,n):Tt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),rw(t,e,r,i,n);case 7:return Tt(t,e,e.pendingProps,n),e.child;case 8:return Tt(t,e,e.pendingProps.children,n),e.child;case 12:return Tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(Ac,r._currentValue),r._currentValue=o,s!==null)if(En(s.value,o)){if(s.children===i.children&&!Bt.current){e=cr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=ir(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),tp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),tp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Tt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Gs(e,n),i=un(i),r=r(i),e.flags|=1,Tt(t,e,r,n),e.child;case 14:return r=e.type,i=mn(r,e.pendingProps),i=mn(r.type,i),iw(t,e,r,i,n);case 15:return hI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),Zu(t,e),e.tag=1,jt(r)?(t=!0,Tc(e)):t=!1,Gs(e,n),lI(e,r,i),rp(e,r,i,n),op(null,e,r,!0,t,n);case 19:return gI(t,e,n);case 22:return dI(t,e,n)}throw Error(A(156,e.tag))};function RI(t,e){return s_(t,e)}function Vx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(t,e,n,r){return new Vx(t,e,n,r)}function ig(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zx(t){if(typeof t=="function")return ig(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sm)return 11;if(t===Tm)return 14}return 2}function qr(t,e){var n=t.alternate;return n===null?(n=on(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ig(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ns:return Fi(n.children,i,s,e);case Em:o=8,i|=8;break;case Af:return t=on(12,n,e,i|2),t.elementType=Af,t.lanes=s,t;case xf:return t=on(13,n,e,i),t.elementType=xf,t.lanes=s,t;case Nf:return t=on(19,n,e,i),t.elementType=Nf,t.lanes=s,t;case B1:return kh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case V1:o=10;break e;case z1:o=9;break e;case Sm:o=11;break e;case Tm:o=14;break e;case Ar:o=16,r=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=on(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Fi(t,e,n,r){return t=on(7,t,r,e),t.lanes=n,t}function kh(t,e,n,r){return t=on(22,t,r,e),t.elementType=B1,t.lanes=n,t.stateNode={isHidden:!1},t}function Yd(t,e,n){return t=on(6,t,null,e),t.lanes=n,t}function Xd(t,e,n){return e=on(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Bx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bd(0),this.expirationTimes=bd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function sg(t,e,n,r,i,s,o,a,l){return t=new Bx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=on(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bm(s),t}function jx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function PI(t){if(!t)return Hr;t=t._reactInternals;e:{if(ls(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(jt(n))return P_(t,n,e)}return e}function OI(t,e,n,r,i,s,o,a,l){return t=sg(n,r,!0,t,i,s,o,a,l),t.context=PI(null),n=t.current,r=xt(),i=jr(n),s=ir(r,i),s.callback=e!=null?e:null,zr(n,s,i),t.current.lanes=i,Ll(t,i,r),qt(t,r),t}function Ch(t,e,n,r){var i=e.current,s=xt(),o=jr(i);return n=PI(n),e.context===null?e.context=n:e.pendingContext=n,e=ir(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=zr(i,e,o),t!==null&&(_n(t,i,o,s),Yu(t,i,o)),o}function $c(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function og(t,e){gw(t,e),(t=t.alternate)&&gw(t,e)}function qx(){return null}var LI=typeof reportError=="function"?reportError:function(t){console.error(t)};function ag(t){this._internalRoot=t}Ah.prototype.render=ag.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));Ch(t,e,null,null)};Ah.prototype.unmount=ag.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ki(function(){Ch(null,t,null,null)}),e[lr]=null}};function Ah(t){this._internalRoot=t}Ah.prototype.unstable_scheduleHydration=function(t){if(t){var e=d_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Nr.length&&e!==0&&e<Nr[n].priority;n++);Nr.splice(n,0,t),n===0&&p_(t)}};function lg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function xh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function yw(){}function Wx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=$c(o);s.call(u)}}var o=OI(e,r,t,0,null,!1,!1,"",yw);return t._reactRootContainer=o,t[lr]=o.current,Ya(t.nodeType===8?t.parentNode:t),Ki(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=$c(l);a.call(u)}}var l=sg(t,0,!1,null,null,!1,!1,"",yw);return t._reactRootContainer=l,t[lr]=l.current,Ya(t.nodeType===8?t.parentNode:t),Ki(function(){Ch(e,l,n,r)}),l}function Nh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=$c(o);a.call(l)}}Ch(e,o,t,i)}else o=Wx(n,e,t,i,r);return $c(o)}c_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=pa(e.pendingLanes);n!==0&&(Am(e,n|1),qt(e,Le()),(ie&6)===0&&(lo=Le()+500,ui()))}break;case 13:Ki(function(){var r=ur(t,1);if(r!==null){var i=xt();_n(r,t,1,i)}}),og(t,1)}};xm=function(t){if(t.tag===13){var e=ur(t,134217728);if(e!==null){var n=xt();_n(e,t,134217728,n)}og(t,134217728)}};h_=function(t){if(t.tag===13){var e=jr(t),n=ur(t,e);if(n!==null){var r=xt();_n(n,t,e,r)}og(t,e)}};d_=function(){return ue};f_=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};Uf=function(t,e,n){switch(e){case"input":if(Rf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=wh(r);if(!i)throw Error(A(90));q1(r),Rf(r,i)}}}break;case"textarea":G1(t,n);break;case"select":e=n.value,e!=null&&Bs(t,!!n.multiple,e,!1)}};Z1=tg;e_=Ki;var Gx={usingClientEntryPoint:!1,Events:[$l,Ps,wh,X1,J1,tg]},ea={findFiberByHostInstance:Ni,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hx={bundleType:ea.bundleType,version:ea.version,rendererPackageName:ea.rendererPackageName,rendererConfig:ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=r_(t),t===null?null:t.stateNode},findFiberByHostInstance:ea.findFiberByHostInstance||qx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bu.isDisabled&&bu.supportsFiber)try{mh=bu.inject(Hx),Vn=bu}catch{}}en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gx;en.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lg(e))throw Error(A(200));return jx(t,e,null,n)};en.createRoot=function(t,e){if(!lg(t))throw Error(A(299));var n=!1,r="",i=LI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=sg(t,1,!1,null,null,n,!1,r,i),t[lr]=e.current,Ya(t.nodeType===8?t.parentNode:t),new ag(e)};en.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=r_(e),t=t===null?null:t.stateNode,t};en.flushSync=function(t){return Ki(t)};en.hydrate=function(t,e,n){if(!xh(e))throw Error(A(200));return Nh(null,t,e,!0,n)};en.hydrateRoot=function(t,e,n){if(!lg(t))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=LI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=OI(e,null,t,1,n!=null?n:null,i,!1,s,o),t[lr]=e.current,Ya(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ah(e)};en.render=function(t,e,n){if(!xh(e))throw Error(A(200));return Nh(null,t,e,!1,n)};en.unmountComponentAtNode=function(t){if(!xh(t))throw Error(A(40));return t._reactRootContainer?(Ki(function(){Nh(null,null,t,!1,function(){t._reactRootContainer=null,t[lr]=null})}),!0):!1};en.unstable_batchedUpdates=tg;en.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!xh(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return Nh(t,e,n,!1,r)};en.version="18.3.1-next-f1338f8080-20240426";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=en})(M1);var vw=M1.exports;kf.createRoot=vw.createRoot,kf.hydrateRoot=vw.hydrateRoot;const Kx="modulepreload",Qx=function(t){return"/gymlog/"+t},ww={},Pt=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Qx(s),s in ww)return;ww[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const h=i[c];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Kx,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,h)=>{u.addEventListener("load",c),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},ug="gymtracker_v1",Xe="#BBFF00",q={bg:"#0a0a0a",card:"#141414",hi:"#1e1e1e",border:"#252525",muted:"#555",text:"#f0f0f0",danger:"#ff5555"},MI=["Lunes","Martes","Mi\xE9rcoles","Jueves","Viernes","S\xE1bado","Domingo"],$I={apiKey:"AIzaSyA4hUQYcaOfa6048GT_RFGblkLczKvyRhU",authDomain:"gymtrack-d3c1b.firebaseapp.com",projectId:"gymtrack-d3c1b",storageBucket:"gymtrack-d3c1b.firebasestorage.app",messagingSenderId:"1043912526777",appId:"1:1043912526777:web:e606d213a4ae6e6ab94468"},vp=["diegomottadev@gmail.com","admin@admin.com"],wp=["1-3","4-8","9-15","16+"],FI="https://us-central1-gymtrack-d3c1b.cloudfunctions.net",UI={athlete:{ars:5e3,usd:3,label:"Athlete"},trainer:{ars:13500,usd:9,label:"Trainer"}},Fc={workouts:[],objectives:[],completions:[],reminder:{enabled:!1,time:"09:00"}},Yx=Object.freeze(Object.defineProperty({__proto__:null,KEY:ug,A:Xe,C:q,DAY_NAMES:MI,FIREBASE_CONFIG:$I,ADMIN_EMAILS:vp,STUDENT_COUNT_RANGES:wp,FUNCTIONS_URL:FI,SUBSCRIPTION_PLANS:UI,EMPTY_DATA:Fc},Symbol.toStringTag,{value:"Module"})),VI=()=>Math.random().toString(36).slice(2,9)+Date.now().toString(36).slice(-4),_w=t=>String(t).padStart(2,"0"),_p=t=>`${t.getFullYear()}-${_w(t.getMonth()+1)}-${_w(t.getDate())}`,zI=()=>_p(new Date),Xx=()=>{const t=new Date().getDay();return t===0?6:t-1},Jx=()=>{try{const t=JSON.parse(localStorage.getItem(ug)||"null")||{};return{workouts:t.workouts||[],objectives:t.objectives||[],completions:t.completions||[],reminder:t.reminder||{enabled:!1,time:"09:00"}}}catch{return{...Fc}}},Iw=t=>localStorage.setItem(ug,JSON.stringify(t));function R4(){const t=new Date,e=t.getDay(),n=e===0?6:e-1,r=new Date(t);r.setDate(t.getDate()-n),r.setHours(12,0,0,0);const i=new Date(r.getFullYear(),r.getMonth(),r.getDate()+6,12,0,0);return{mon:_p(r),sun:_p(i)}}function Zx(t,e){const n={};(t.workouts||[]).forEach(s=>n[s.id]=s),(e.workouts||[]).forEach(s=>n[s.id]=s);const r={};(t.objectives||[]).forEach(s=>r[s.id]=s),(e.objectives||[]).forEach(s=>r[s.id]=s);const i={};return(t.completions||[]).forEach(s=>i[s.id]=s),(e.completions||[]).forEach(s=>i[s.id]=s),{workouts:Object.values(n).sort((s,o)=>o.date.localeCompare(s.date)),objectives:Object.values(r),completions:Object.values(i),reminder:e.reminder||t.reminder||{enabled:!1,time:"09:00"}}}function eN(t){return{id:VI(),name:t,createdAt:zI(),days:MI.map((e,n)=>({dayNumber:n+1,label:"",exercises:[]}))}}/**
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
 */const BI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},jI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(BI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new nN;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rN=function(t){const e=BI(t);return jI.encodeByteArray(e,!0)},Uc=function(t){return rN(t).replace(/\./g,"")},qI=function(t){try{return jI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Vc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!iN(n)||(t[n]=Vc(t[n],e[n]));return t}function iN(t){return t!=="__proto__"}/**
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
 */function sN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const oN=()=>sN().__FIREBASE_DEFAULTS__,aN=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qI(t[1]);return e&&JSON.parse(e)},cg=()=>{try{return oN()||aN()||lN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},WI=()=>{var t;return(t=cg())===null||t===void 0?void 0:t.config},uN=t=>{var e;return(e=cg())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class cN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function hN(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Uc(JSON.stringify(n)),Uc(JSON.stringify(o)),a].join(".")}/**
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
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function hg(){var t;const e=(t=cg())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fN(){return typeof self=="object"&&self.self===self}function GI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HI(){const t=Ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pN(){return!hg()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sl(){try{return typeof indexedDB=="object"}catch{return!1}}function mN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const gN="FirebaseError";class Nt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gN,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,us.prototype.create)}}class us{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?yN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Nt(i,a,r)}}function yN(t,e){return t.replace(vN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const vN=/\{\$([^}]+)}/g;/**
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
 */function Ew(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function wN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ip(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Sw(s)&&Sw(o)){if(!Ip(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Sw(t){return t!==null&&typeof t=="object"}/**
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
 */function xo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ga(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function KI(t,e){const n=new _N(t,e);return n.subscribe.bind(n)}class _N{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");IN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Jd),i.error===void 0&&(i.error=Jd),i.complete===void 0&&(i.complete=Jd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jd(){}/**
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
 */function j(t){return t&&t._delegate?t._delegate:t}class Wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ei="[DEFAULT]";/**
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
 */class EN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(TN(e))try{this.getOrInitializeService({instanceIdentifier:Ei})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ei){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ei){return this.instances.has(e)}getOptions(e=Ei){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:SN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ei){return this.component?this.component.multipleInstances?e:Ei:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function SN(t){return t===Ei?void 0:t}function TN(t){return t.instantiationMode==="EAGER"}/**
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
 */class kN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new EN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const fg=[];var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const QI={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},CN=ne.INFO,AN={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},xN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=AN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dh{constructor(e){this.name=e,this._logLevel=CN,this._logHandler=xN,this._userLogHandler=null,fg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?QI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}function NN(t){fg.forEach(e=>{e.setLogLevel(t)})}function DN(t,e){for(const n of fg){let r=null;e&&e.level&&(r=QI[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:ne[s].toLowerCase(),message:a,args:o,type:i.name})}}}const bN=(t,e)=>e.some(n=>t instanceof n);let Tw,kw;function RN(){return Tw||(Tw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function PN(){return kw||(kw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const YI=new WeakMap,Ep=new WeakMap,XI=new WeakMap,Zd=new WeakMap,pg=new WeakMap;function ON(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Wr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&YI.set(n,t)}).catch(()=>{}),pg.set(e,t),e}function LN(t){if(Ep.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ep.set(t,e)}let Sp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ep.get(t);if(e==="objectStoreNames")return t.objectStoreNames||XI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function MN(t){Sp=t(Sp)}function $N(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ef(this),e,...n);return XI.set(r,e.sort?e.sort():[e]),Wr(r)}:PN().includes(t)?function(...e){return t.apply(ef(this),e),Wr(YI.get(this))}:function(...e){return Wr(t.apply(ef(this),e))}}function FN(t){return typeof t=="function"?$N(t):(t instanceof IDBTransaction&&LN(t),bN(t,RN())?new Proxy(t,Sp):t)}function Wr(t){if(t instanceof IDBRequest)return ON(t);if(Zd.has(t))return Zd.get(t);const e=FN(t);return e!==t&&(Zd.set(t,e),pg.set(e,t)),e}const ef=t=>pg.get(t);function UN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Wr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Wr(o.result),l.oldVersion,l.newVersion,Wr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const VN=["get","getKey","getAll","getAllKeys","count"],zN=["put","add","delete","clear"],tf=new Map;function Cw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tf.get(e))return tf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=zN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||VN.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return tf.set(e,s),s}MN(t=>({...t,get:(e,n,r)=>Cw(e,n)||t.get(e,n,r),has:(e,n)=>!!Cw(e,n)||t.has(e,n)}));/**
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
 */class BN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Tp="@firebase/app",Aw="0.9.13";/**
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
 */const Qi=new Dh("@firebase/app"),qN="@firebase/app-compat",WN="@firebase/analytics-compat",GN="@firebase/analytics",HN="@firebase/app-check-compat",KN="@firebase/app-check",QN="@firebase/auth",YN="@firebase/auth-compat",XN="@firebase/database",JN="@firebase/database-compat",ZN="@firebase/functions",eD="@firebase/functions-compat",tD="@firebase/installations",nD="@firebase/installations-compat",rD="@firebase/messaging",iD="@firebase/messaging-compat",sD="@firebase/performance",oD="@firebase/performance-compat",aD="@firebase/remote-config",lD="@firebase/remote-config-compat",uD="@firebase/storage",cD="@firebase/storage-compat",hD="@firebase/firestore",dD="@firebase/firestore-compat",fD="firebase",pD="9.23.0";/**
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
 */const Kr="[DEFAULT]",mD={[Tp]:"fire-core",[qN]:"fire-core-compat",[GN]:"fire-analytics",[WN]:"fire-analytics-compat",[KN]:"fire-app-check",[HN]:"fire-app-check-compat",[QN]:"fire-auth",[YN]:"fire-auth-compat",[XN]:"fire-rtdb",[JN]:"fire-rtdb-compat",[ZN]:"fire-fn",[eD]:"fire-fn-compat",[tD]:"fire-iid",[nD]:"fire-iid-compat",[rD]:"fire-fcm",[iD]:"fire-fcm-compat",[sD]:"fire-perf",[oD]:"fire-perf-compat",[aD]:"fire-rc",[lD]:"fire-rc-compat",[uD]:"fire-gcs",[cD]:"fire-gcs-compat",[hD]:"fire-fst",[dD]:"fire-fst-compat","fire-js":"fire-js",[fD]:"fire-js-all"};/**
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
 */const Qr=new Map,ol=new Map;function zc(t,e){try{t.container.addComponent(e)}catch(n){Qi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function JI(t,e){t.container.addOrOverwriteComponent(e)}function Yr(t){const e=t.name;if(ol.has(e))return Qi.debug(`There were multiple attempts to register component ${e}.`),!1;ol.set(e,t);for(const n of Qr.values())zc(n,t);return!0}function ZI(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gD(t,e,n=Kr){ZI(t,e).clearInstance(n)}function yD(){ol.clear()}/**
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
 */const vD={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},sr=new us("app","Firebase",vD);/**
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
 */class wD{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sr.create("app-deleted",{appName:this._name})}}/**
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
 */const ci=pD;function mg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Kr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw sr.create("bad-app-name",{appName:String(i)});if(n||(n=WI()),!n)throw sr.create("no-options");const s=Qr.get(i);if(s){if(Ip(n,s.options)&&Ip(r,s.config))return s;throw sr.create("duplicate-app",{appName:i})}const o=new kN(i);for(const l of ol.values())o.addComponent(l);const a=new wD(n,r,o);return Qr.set(i,a),a}function _D(t=Kr){const e=Qr.get(t);if(!e&&t===Kr&&WI())return mg();if(!e)throw sr.create("no-app",{appName:t});return e}function ID(){return Array.from(Qr.values())}async function eE(t){const e=t.name;Qr.has(e)&&(Qr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Bn(t,e,n){var r;let i=(r=mD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qi.warn(a.join(" "));return}Yr(new Wn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function tE(t,e){if(t!==null&&typeof t!="function")throw sr.create("invalid-log-argument");DN(t,e)}function nE(t){NN(t)}/**
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
 */const ED="firebase-heartbeat-database",SD=1,al="firebase-heartbeat-store";let nf=null;function rE(){return nf||(nf=UN(ED,SD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(al)}}}).catch(t=>{throw sr.create("idb-open",{originalErrorMessage:t.message})})),nf}async function TD(t){try{return await(await rE()).transaction(al).objectStore(al).get(iE(t))}catch(e){if(e instanceof Nt)Qi.warn(e.message);else{const n=sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qi.warn(n.message)}}}async function xw(t,e){try{const r=(await rE()).transaction(al,"readwrite");await r.objectStore(al).put(e,iE(t)),await r.done}catch(n){if(n instanceof Nt)Qi.warn(n.message);else{const r=sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qi.warn(r.message)}}}function iE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const kD=1024,CD=30*24*60*60*1e3;class AD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ND(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Nw();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=CD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Nw(),{heartbeatsToSend:n,unsentEntries:r}=xD(this._heartbeatsCache.heartbeats),i=Uc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Nw(){return new Date().toISOString().substring(0,10)}function xD(t,e=kD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Dw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ND{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sl()?mN().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await TD(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Dw(t){return Uc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function DD(t){Yr(new Wn("platform-logger",e=>new BN(e),"PRIVATE")),Yr(new Wn("heartbeat",e=>new AD(e),"PRIVATE")),Bn(Tp,Aw,t),Bn(Tp,Aw,"esm2017"),Bn("fire-js","")}DD("");const bD=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:ci,_DEFAULT_ENTRY_NAME:Kr,_addComponent:zc,_addOrOverwriteComponent:JI,_apps:Qr,_clearComponents:yD,_components:ol,_getProvider:ZI,_registerComponent:Yr,_removeServiceInstance:gD,deleteApp:eE,getApp:_D,getApps:ID,initializeApp:mg,onLog:tE,registerVersion:Bn,setLogLevel:nE,FirebaseError:Nt},Symbol.toStringTag,{value:"Module"}));/**
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
 */class RD{constructor(e,n){this._delegate=e,this.firebase=n,zc(e,new Wn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),eE(this._delegate)))}_getService(e,n=Kr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Kr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){zc(this._delegate,e)}_addOrOverwriteComponent(e){JI(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const PD={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},bw=new us("app-compat","Firebase",PD);/**
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
 */function OD(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Bn,setLogLevel:nE,onLog:tE,apps:null,SDK_VERSION:ci,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:bD}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Kr,!Ew(e,u))throw bw.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const h=mg(u,c);if(Ew(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,h=c.replace("-compat","");if(Yr(u)&&u.type==="PUBLIC"){const d=(p=i())=>{if(typeof p[h]!="function")throw bw.create("invalid-app-argument",{appName:c});return p[h]()};u.serviceProps!==void 0&&Vc(d,u.serviceProps),n[h]=d,t.prototype[h]=function(...p){return this._getService.bind(this,c).apply(this,u.multipleInstances?p:[])}}return u.type==="PUBLIC"?n[h]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
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
 */function sE(){const t=OD(RD);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:sE,extendNamespace:e,createSubscribe:KI,ErrorFactory:us,deepExtend:Vc});function e(n){Vc(t,n)}return t}const LD=sE();/**
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
 */const Rw=new Dh("@firebase/app-compat"),MD="@firebase/app-compat",$D="0.2.13";/**
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
 */function FD(t){Bn(MD,$D,t)}/**
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
 */if(fN()&&self.firebase!==void 0){Rw.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Rw.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const at=LD;FD();var UD="firebase",VD="9.23.0";/**
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
 */at.registerVersion(UD,VD,"app-compat");var zD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,gg=gg||{},W=zD||self;function bh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ul(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function BD(t){return Object.prototype.hasOwnProperty.call(t,rf)&&t[rf]||(t[rf]=++jD)}var rf="closure_uid_"+(1e9*Math.random()>>>0),jD=0;function qD(t,e,n){return t.call.apply(t.bind,arguments)}function WD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function _t(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_t=qD:_t=WD,_t.apply(null,arguments)}function Ru(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function tt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function hi(){this.s=this.s,this.o=this.o}var GD=0;hi.prototype.s=!1;hi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),GD!=0)&&BD(this)};hi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const oE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function yg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Pw(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(bh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function It(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}It.prototype.h=function(){this.defaultPrevented=!0};var HD=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",()=>{},e),W.removeEventListener("test",()=>{},e)}catch{}return t}();function ll(t){return/^[\s\xa0]*$/.test(t)}function Rh(){var t=W.navigator;return t&&(t=t.userAgent)?t:""}function Dn(t){return Rh().indexOf(t)!=-1}function vg(t){return vg[" "](t),t}vg[" "]=function(){};function KD(t,e){var n=Vb;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var QD=Dn("Opera"),uo=Dn("Trident")||Dn("MSIE"),aE=Dn("Edge"),kp=aE||uo,lE=Dn("Gecko")&&!(Rh().toLowerCase().indexOf("webkit")!=-1&&!Dn("Edge"))&&!(Dn("Trident")||Dn("MSIE"))&&!Dn("Edge"),YD=Rh().toLowerCase().indexOf("webkit")!=-1&&!Dn("Edge");function uE(){var t=W.document;return t?t.documentMode:void 0}var Cp;e:{var sf="",of=function(){var t=Rh();if(lE)return/rv:([^\);]+)(\)|;)/.exec(t);if(aE)return/Edge\/([\d\.]+)/.exec(t);if(uo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(YD)return/WebKit\/(\S+)/.exec(t);if(QD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(of&&(sf=of?of[1]:""),uo){var af=uE();if(af!=null&&af>parseFloat(sf)){Cp=String(af);break e}}Cp=sf}var Ap;if(W.document&&uo){var Ow=uE();Ap=Ow||parseInt(Cp,10)||void 0}else Ap=void 0;var XD=Ap;function ul(t,e){if(It.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(lE){e:{try{vg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:JD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ul.$.h.call(this)}}tt(ul,It);var JD={2:"touch",3:"pen",4:"mouse"};ul.prototype.h=function(){ul.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Vl="closure_listenable_"+(1e6*Math.random()|0),ZD=0;function eb(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++ZD,this.fa=this.ia=!1}function Ph(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function wg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function tb(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function cE(t){const e={};for(const n in t)e[n]=t[n];return e}const Lw="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Lw.length;s++)n=Lw[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Oh(t){this.src=t,this.g={},this.h=0}Oh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Np(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new eb(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function xp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=oE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ph(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Np(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var _g="closure_lm_"+(1e6*Math.random()|0),lf={};function dE(t,e,n,r,i){if(r&&r.once)return pE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)dE(t,e[s],n,r,i);return null}return n=Sg(n),t&&t[Vl]?t.O(e,n,Ul(r)?!!r.capture:!!r,i):fE(t,e,n,!1,r,i)}function fE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ul(i)?!!i.capture:!!i,a=Eg(t);if(a||(t[_g]=a=new Oh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=nb(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)HD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(gE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function nb(){function t(n){return e.call(t.src,t.listener,n)}const e=rb;return t}function pE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)pE(t,e[s],n,r,i);return null}return n=Sg(n),t&&t[Vl]?t.P(e,n,Ul(r)?!!r.capture:!!r,i):fE(t,e,n,!0,r,i)}function mE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)mE(t,e[s],n,r,i);else r=Ul(r)?!!r.capture:!!r,n=Sg(n),t&&t[Vl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Np(s,n,r,i),-1<n&&(Ph(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Eg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Np(e,n,r,i)),(n=-1<t?e[t]:null)&&Ig(n))}function Ig(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Vl])xp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(gE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Eg(e))?(xp(n,t),n.h==0&&(n.src=null,e[_g]=null)):Ph(t)}}}function gE(t){return t in lf?lf[t]:lf[t]="on"+t}function rb(t,e){if(t.fa)t=!0;else{e=new ul(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Ig(t),t=n.call(r,e)}return t}function Eg(t){return t=t[_g],t instanceof Oh?t:null}var uf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sg(t){return typeof t=="function"?t:(t[uf]||(t[uf]=function(e){return t.handleEvent(e)}),t[uf])}function et(){hi.call(this),this.i=new Oh(this),this.S=this,this.J=null}tt(et,hi);et.prototype[Vl]=!0;et.prototype.removeEventListener=function(t,e,n,r){mE(this,t,e,n,r)};function ct(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new It(e,t);else if(e instanceof It)e.target=e.target||t;else{var i=e;e=new It(r,t),hE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Pu(o,r,!0,e)&&i}if(o=e.g=t,i=Pu(o,r,!0,e)&&i,i=Pu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Pu(o,r,!1,e)&&i}et.prototype.N=function(){if(et.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ph(n[r]);delete t.g[e],t.h--}}this.J=null};et.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};et.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Pu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&xp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Tg=W.JSON.stringify;class ib{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function sb(){var t=kg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ob{constructor(){this.h=this.g=null}add(e,n){const r=yE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var yE=new ib(()=>new ab,t=>t.reset());class ab{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function lb(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function ub(t){W.setTimeout(()=>{throw t},0)}let cl,hl=!1,kg=new ob,vE=()=>{const t=W.Promise.resolve(void 0);cl=()=>{t.then(cb)}};var cb=()=>{for(var t;t=sb();){try{t.h.call(t.g)}catch(n){ub(n)}var e=yE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}hl=!1};function Lh(t,e){et.call(this),this.h=t||1,this.g=e||W,this.j=_t(this.qb,this),this.l=Date.now()}tt(Lh,et);O=Lh.prototype;O.ga=!1;O.T=null;O.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ct(this,"tick"),this.ga&&(Cg(this),this.start()))}};O.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Cg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}O.N=function(){Lh.$.N.call(this),Cg(this),delete this.g};function Ag(t,e,n){if(typeof t=="function")n&&(t=_t(t,n));else if(t&&typeof t.handleEvent=="function")t=_t(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function wE(t){t.g=Ag(()=>{t.g=null,t.i&&(t.i=!1,wE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class hb extends hi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:wE(this)}N(){super.N(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dl(t){hi.call(this),this.h=t,this.g={}}tt(dl,hi);var Mw=[];function _E(t,e,n,r){Array.isArray(n)||(n&&(Mw[0]=n.toString()),n=Mw);for(var i=0;i<n.length;i++){var s=dE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function IE(t){wg(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ig(e)},t),t.g={}}dl.prototype.N=function(){dl.$.N.call(this),IE(this)};dl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Mh(){this.g=!0}Mh.prototype.Ea=function(){this.g=!1};function db(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function fb(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function zs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+mb(t,n)+(r?" "+r:"")})}function pb(t,e){t.info(function(){return"TIMEOUT: "+e})}Mh.prototype.info=function(){};function mb(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Tg(n)}catch{return e}}var cs={},$w=null;function $h(){return $w=$w||new et}cs.Ta="serverreachability";function EE(t){It.call(this,cs.Ta,t)}tt(EE,It);function fl(t){const e=$h();ct(e,new EE(e))}cs.STAT_EVENT="statevent";function SE(t,e){It.call(this,cs.STAT_EVENT,t),this.stat=e}tt(SE,It);function At(t){const e=$h();ct(e,new SE(e,t))}cs.Ua="timingevent";function TE(t,e){It.call(this,cs.Ua,t),this.size=e}tt(TE,It);function zl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var Fh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},kE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function xg(){}xg.prototype.h=null;function Fw(t){return t.h||(t.h=t.i())}function CE(){}var Bl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ng(){It.call(this,"d")}tt(Ng,It);function Dg(){It.call(this,"c")}tt(Dg,It);var Dp;function Uh(){}tt(Uh,xg);Uh.prototype.g=function(){return new XMLHttpRequest};Uh.prototype.i=function(){return{}};Dp=new Uh;function jl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new dl(this),this.P=gb,t=kp?125:void 0,this.V=new Lh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new AE}function AE(){this.i=null,this.g="",this.h=!1}var gb=45e3,bp={},Bc={};O=jl.prototype;O.setTimeout=function(t){this.P=t};function Rp(t,e,n){t.L=1,t.v=zh(hr(e)),t.s=n,t.S=!0,xE(t,null)}function xE(t,e){t.G=Date.now(),ql(t),t.A=hr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),ME(n.i,"t",r),t.C=0,n=t.l.J,t.h=new AE,t.g=rS(t.l,n?e:null,!t.s),0<t.O&&(t.M=new hb(_t(t.Pa,t,t.g),t.O)),_E(t.U,t.g,"readystatechange",t.nb),e=t.I?cE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),fl(),db(t.j,t.u,t.A,t.m,t.W,t.s)}O.nb=function(t){t=t.target;const e=this.M;e&&Ln(t)==3?e.l():this.Pa(t)};O.Pa=function(t){try{if(t==this.g)e:{const c=Ln(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||kp||this.g&&(this.h.h||this.g.ja()||Bw(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?fl(3):fl(2)),Vh(this);var n=this.g.da();this.ca=n;t:if(NE(this)){var r=Bw(this.g);t="";var i=r.length,s=Ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ri(this),Ra(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,fb(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ll(a)){var u=a;break t}}u=null}if(n=u)zs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pp(this,n);else{this.i=!1,this.o=3,At(12),Ri(this),Ra(this);break e}}this.S?(DE(this,c,o),kp&&this.i&&c==3&&(_E(this.U,this.V,"tick",this.mb),this.V.start())):(zs(this.j,this.m,o,null),Pp(this,o)),c==4&&Ri(this),this.i&&!this.J&&(c==4?ZE(this.l,this):(this.i=!1,ql(this)))}else $b(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,At(12)):(this.o=0,At(13)),Ri(this),Ra(this)}}}catch{}finally{}};function NE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function DE(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=yb(t,n),i==Bc){e==4&&(t.o=4,At(14),r=!1),zs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==bp){t.o=4,At(15),zs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else zs(t.j,t.m,i,null),Pp(t,i);NE(t)&&i!=Bc&&i!=bp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,At(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Mg(e),e.M=!0,At(11))):(zs(t.j,t.m,n,"[Invalid Chunked Response]"),Ri(t),Ra(t))}O.mb=function(){if(this.g){var t=Ln(this.g),e=this.g.ja();this.C<e.length&&(Vh(this),DE(this,t,e),this.i&&t!=4&&ql(this))}};function yb(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Bc:(n=Number(e.substring(n,r)),isNaN(n)?bp:(r+=1,r+n>e.length?Bc:(e=e.slice(r,r+n),t.C=r+n,e)))}O.cancel=function(){this.J=!0,Ri(this)};function ql(t){t.Y=Date.now()+t.P,bE(t,t.P)}function bE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=zl(_t(t.lb,t),e)}function Vh(t){t.B&&(W.clearTimeout(t.B),t.B=null)}O.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(pb(this.j,this.A),this.L!=2&&(fl(),At(17)),Ri(this),this.o=2,Ra(this)):bE(this,this.Y-t)};function Ra(t){t.l.H==0||t.J||ZE(t.l,t)}function Ri(t){Vh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Cg(t.V),IE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Pp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Op(n.i,t))){if(!t.K&&Op(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Wc(n),qh(n);else break e;Lg(n),At(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=zl(_t(n.ib,n),6e3));if(1>=UE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Pi(n,11)}else if((t.K||n.g==t)&&Wc(n),!ll(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(bg(s,s.h),s.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,ge(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=nS(r,r.J?r.pa:null,r.Y),o.K){VE(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Vh(a),ql(a)),r.g=o}else XE(r);0<n.j.length&&Wh(n)}else u[0]!="stop"&&u[0]!="close"||Pi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Pi(n,7):Og(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}fl(4)}catch{}}function vb(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(bh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function wb(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(bh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function RE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(bh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=wb(t),r=vb(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var PE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _b(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ui(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ui){this.h=t.h,jc(this,t.j),this.s=t.s,this.g=t.g,qc(this,t.m),this.l=t.l;var e=t.i,n=new pl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Uw(this,n),this.o=t.o}else t&&(e=String(t).match(PE))?(this.h=!1,jc(this,e[1]||"",!0),this.s=ya(e[2]||""),this.g=ya(e[3]||"",!0),qc(this,e[4]),this.l=ya(e[5]||"",!0),Uw(this,e[6]||"",!0),this.o=ya(e[7]||"")):(this.h=!1,this.i=new pl(null,this.h))}Ui.prototype.toString=function(){var t=[],e=this.j;e&&t.push(va(e,Vw,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(va(e,Vw,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(va(n,n.charAt(0)=="/"?Sb:Eb,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",va(n,kb)),t.join("")};function hr(t){return new Ui(t)}function jc(t,e,n){t.j=n?ya(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function qc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Uw(t,e,n){e instanceof pl?(t.i=e,Cb(t.i,t.h)):(n||(e=va(e,Tb)),t.i=new pl(e,t.h))}function ge(t,e,n){t.i.set(e,n)}function zh(t){return ge(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ya(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function va(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Ib),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ib(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Vw=/[#\/\?@]/g,Eb=/[#\?:]/g,Sb=/[#\?]/g,Tb=/[#\?@]/g,kb=/#/g;function pl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function di(t){t.g||(t.g=new Map,t.h=0,t.i&&_b(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=pl.prototype;O.add=function(t,e){di(this),this.i=null,t=No(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function OE(t,e){di(t),e=No(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function LE(t,e){return di(t),e=No(t,e),t.g.has(e)}O.forEach=function(t,e){di(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};O.ta=function(){di(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};O.Z=function(t){di(this);let e=[];if(typeof t=="string")LE(this,t)&&(e=e.concat(this.g.get(No(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};O.set=function(t,e){return di(this),this.i=null,t=No(this,t),LE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function ME(t,e,n){OE(t,e),0<n.length&&(t.i=null,t.g.set(No(t,e),yg(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function No(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Cb(t,e){e&&!t.j&&(di(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(OE(this,r),ME(this,i,n))},t)),t.j=e}var Ab=class{constructor(t,e){this.g=t,this.map=e}};function $E(t){this.l=t||xb,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ka&&W.g.Ka()&&W.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var xb=10;function FE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function UE(t){return t.h?1:t.g?t.g.size:0}function Op(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function bg(t,e){t.g?t.g.add(e):t.h=e}function VE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}$E.prototype.cancel=function(){if(this.i=zE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function zE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return yg(t.i)}var Nb=class{stringify(t){return W.JSON.stringify(t,void 0)}parse(t){return W.JSON.parse(t,void 0)}};function Db(){this.g=new Nb}function bb(t,e,n){const r=n||"";try{RE(t,function(i,s){let o=i;Ul(i)&&(o=Tg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Rb(t,e){const n=new Mh;if(W.Image){const r=new Image;r.onload=Ru(Ou,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ru(Ou,n,r,"TestLoadImage: error",!1,e),r.onabort=Ru(Ou,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ru(Ou,n,r,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ou(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Wl(t){this.l=t.fc||null,this.j=t.ob||!1}tt(Wl,xg);Wl.prototype.g=function(){return new Bh(this.l,this.j)};Wl.prototype.i=function(t){return function(){return t}}({});function Bh(t,e){et.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Rg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tt(Bh,et);var Rg=0;O=Bh.prototype;O.open=function(t,e){if(this.readyState!=Rg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ml(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||W).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gl(this)),this.readyState=Rg};O.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ml(this)),this.g&&(this.readyState=3,ml(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;BE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function BE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}O.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Gl(this):ml(this),this.readyState==3&&BE(this)}};O.Za=function(t){this.g&&(this.response=this.responseText=t,Gl(this))};O.Ya=function(t){this.g&&(this.response=t,Gl(this))};O.ka=function(){this.g&&Gl(this)};function Gl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ml(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ml(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Bh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Pb=W.JSON.parse;function Re(t){et.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=jE,this.L=this.M=!1}tt(Re,et);var jE="",Ob=/^https?$/i,Lb=["POST","PUT"];O=Re.prototype;O.Oa=function(t){this.M=t};O.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Dp.g(),this.C=this.u?Fw(this.u):Fw(Dp),this.g.onreadystatechange=_t(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){zw(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=W.FormData&&t instanceof W.FormData,!(0<=oE(Lb,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{GE(this),0<this.B&&((this.L=Mb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_t(this.ua,this)):this.A=Ag(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){zw(this,s)}};function Mb(t){return uo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}O.ua=function(){typeof gg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ct(this,"timeout"),this.abort(8))};function zw(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,qE(t),jh(t)}function qE(t){t.F||(t.F=!0,ct(t,"complete"),ct(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ct(this,"complete"),ct(this,"abort"),jh(this))};O.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),jh(this,!0)),Re.$.N.call(this)};O.La=function(){this.s||(this.G||this.v||this.l?WE(this):this.kb())};O.kb=function(){WE(this)};function WE(t){if(t.h&&typeof gg<"u"&&(!t.C[1]||Ln(t)!=4||t.da()!=2)){if(t.v&&Ln(t)==4)Ag(t.La,0,t);else if(ct(t,"readystatechange"),Ln(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(PE)[1]||null;!i&&W.self&&W.self.location&&(i=W.self.location.protocol.slice(0,-1)),r=!Ob.test(i?i.toLowerCase():"")}n=r}if(n)ct(t,"complete"),ct(t,"success");else{t.m=6;try{var s=2<Ln(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",qE(t)}}finally{jh(t)}}}}function jh(t,e){if(t.g){GE(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ct(t,"ready");try{n.onreadystatechange=r}catch{}}}function GE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}O.isActive=function(){return!!this.g};function Ln(t){return t.g?t.g.readyState:0}O.da=function(){try{return 2<Ln(this)?this.g.status:-1}catch{return-1}};O.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Pb(e)}};function Bw(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case jE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function $b(t){const e={};t=(t.g&&2<=Ln(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ll(t[r]))continue;var n=lb(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}tb(e,function(r){return r.join(", ")})}O.Ia=function(){return this.m};O.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function HE(t){let e="";return wg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Pg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=HE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ge(t,e,n))}function ta(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function KE(t){this.Ga=0,this.j=[],this.l=new Mh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ta("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ta("baseRetryDelayMs",5e3,t),this.hb=ta("retryDelaySeedMs",1e4,t),this.eb=ta("forwardChannelMaxRetries",2,t),this.xa=ta("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new $E(t&&t.concurrentRequestLimit),this.Ja=new Db,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}O=KE.prototype;O.ra=8;O.H=1;function Og(t){if(QE(t),t.H==3){var e=t.W++,n=hr(t.I);if(ge(n,"SID",t.K),ge(n,"RID",e),ge(n,"TYPE","terminate"),Hl(t,n),e=new jl(t,t.l,e),e.L=2,e.v=zh(hr(n)),n=!1,W.navigator&&W.navigator.sendBeacon)try{n=W.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&W.Image&&(new Image().src=e.v,n=!0),n||(e.g=rS(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ql(e)}tS(t)}function qh(t){t.g&&(Mg(t),t.g.cancel(),t.g=null)}function QE(t){qh(t),t.u&&(W.clearTimeout(t.u),t.u=null),Wc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function Wh(t){if(!FE(t.i)&&!t.m){t.m=!0;var e=t.Na;cl||vE(),hl||(cl(),hl=!0),kg.add(e,t),t.C=0}}function Fb(t,e){return UE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=zl(_t(t.Na,t,e),eS(t,t.C)),t.C++,!0)}O.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new jl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=cE(s),hE(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=YE(this,i,e),n=hr(this.I),ge(n,"RID",t),ge(n,"CVER",22),this.F&&ge(n,"X-HTTP-Session-Id",this.F),Hl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(HE(s)))+"&"+e:this.o&&Pg(n,this.o,s)),bg(this.i,i),this.bb&&ge(n,"TYPE","init"),this.P?(ge(n,"$req",e),ge(n,"SID","null"),i.aa=!0,Rp(i,n,null)):Rp(i,n,e),this.H=2}}else this.H==3&&(t?jw(this,t):this.j.length==0||FE(this.i)||jw(this))};function jw(t,e){var n;e?n=e.m:n=t.W++;const r=hr(t.I);ge(r,"SID",t.K),ge(r,"RID",n),ge(r,"AID",t.V),Hl(t,r),t.o&&t.s&&Pg(r,t.o,t.s),n=new jl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=YE(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),bg(t.i,n),Rp(n,r,e)}function Hl(t,e){t.na&&wg(t.na,function(n,r){ge(e,r,n)}),t.h&&RE({},function(n,r){ge(e,r,n)})}function YE(t,e,n){n=Math.min(t.j.length,n);var r=t.h?_t(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{bb(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function XE(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;cl||vE(),hl||(cl(),hl=!0),kg.add(e,t),t.A=0}}function Lg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=zl(_t(t.Ma,t),eS(t,t.A)),t.A++,!0)}O.Ma=function(){if(this.u=null,JE(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=zl(_t(this.jb,this),t)}};O.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,At(10),qh(this),JE(this))};function Mg(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function JE(t){t.g=new jl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=hr(t.wa);ge(e,"RID","rpc"),ge(e,"SID",t.K),ge(e,"AID",t.V),ge(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ge(e,"TO",t.qa),ge(e,"TYPE","xmlhttp"),Hl(t,e),t.o&&t.s&&Pg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=zh(hr(e)),n.s=null,n.S=!0,xE(n,t)}O.ib=function(){this.v!=null&&(this.v=null,qh(this),Lg(this),At(19))};function Wc(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function ZE(t,e){var n=null;if(t.g==e){Wc(t),Mg(t),t.g=null;var r=2}else if(Op(t.i,e))n=e.F,VE(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=$h(),ct(r,new TE(r,n)),Wh(t)}else XE(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&Fb(t,e)||r==2&&Lg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Pi(t,5);break;case 4:Pi(t,10);break;case 3:Pi(t,6);break;default:Pi(t,2)}}}function eS(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Pi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=_t(t.pb,t);n||(n=new Ui("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||jc(n,"https"),zh(n)),Rb(n.toString(),r)}else At(2);t.H=0,t.h&&t.h.za(e),tS(t),QE(t)}O.pb=function(t){t?(this.l.info("Successfully pinged google.com"),At(2)):(this.l.info("Failed to ping google.com"),At(1))};function tS(t){if(t.H=0,t.ma=[],t.h){const e=zE(t.i);(e.length!=0||t.j.length!=0)&&(Pw(t.ma,e),Pw(t.ma,t.j),t.i.i.length=0,yg(t.j),t.j.length=0),t.h.ya()}}function nS(t,e,n){var r=n instanceof Ui?hr(n):new Ui(n);if(r.g!="")e&&(r.g=e+"."+r.g),qc(r,r.m);else{var i=W.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ui(null);r&&jc(s,r),e&&(s.g=e),i&&qc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ge(r,n,e),ge(r,"VER",t.ra),Hl(t,r),r}function rS(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Re(new Wl({ob:!0})):new Re(t.va),e.Oa(t.J),e}O.isActive=function(){return!!this.h&&this.h.isActive(this)};function iS(){}O=iS.prototype;O.Ba=function(){};O.Aa=function(){};O.za=function(){};O.ya=function(){};O.isActive=function(){return!0};O.Va=function(){};function Gc(){if(uo&&!(10<=Number(XD)))throw Error("Environmental error: no available transport.")}Gc.prototype.g=function(t,e){return new Jt(t,e)};function Jt(t,e){et.call(this),this.g=new KE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ll(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ll(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Do(this)}tt(Jt,et);Jt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;At(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=nS(t,null,t.Y),Wh(t)};Jt.prototype.close=function(){Og(this.g)};Jt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Tg(t),t=n);e.j.push(new Ab(e.fb++,t)),e.H==3&&Wh(e)};Jt.prototype.N=function(){this.g.h=null,delete this.j,Og(this.g),delete this.g,Jt.$.N.call(this)};function sS(t){Ng.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}tt(sS,Ng);function oS(){Dg.call(this),this.status=1}tt(oS,Dg);function Do(t){this.g=t}tt(Do,iS);Do.prototype.Ba=function(){ct(this.g,"a")};Do.prototype.Aa=function(t){ct(this.g,new sS(t))};Do.prototype.za=function(t){ct(this.g,new oS)};Do.prototype.ya=function(){ct(this.g,"b")};function Ub(){this.blockSize=-1}function Sn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}tt(Sn,Ub);Sn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function cf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Sn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)cf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){cf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){cf(this,r),i=0;break}}this.h=i,this.i+=e};Sn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ce(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var Vb={};function $g(t){return-128<=t&&128>t?KD(t,function(e){return new ce([e|0],0>e?-1:0)}):new ce([t|0],0>t?-1:0)}function Mn(t){if(isNaN(t)||!isFinite(t))return Ks;if(0>t)return ot(Mn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Lp;return new ce(e,0)}function aS(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ot(aS(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Mn(Math.pow(e,8)),r=Ks,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Mn(Math.pow(e,s)),r=r.R(s).add(Mn(o))):(r=r.R(n),r=r.add(Mn(o)))}return r}var Lp=4294967296,Ks=$g(0),Mp=$g(1),qw=$g(16777216);O=ce.prototype;O.ea=function(){if(sn(this))return-ot(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Lp+r)*e,e*=Lp}return t};O.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(er(this))return"0";if(sn(this))return"-"+ot(this).toString(t);for(var e=Mn(Math.pow(t,6)),n=this,r="";;){var i=Kc(n,e).g;n=Hc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,er(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};O.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function er(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function sn(t){return t.h==-1}O.X=function(t){return t=Hc(this,t),sn(t)?-1:er(t)?0:1};function ot(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ce(n,~t.h).add(Mp)}O.abs=function(){return sn(this)?ot(this):this};O.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ce(n,n[n.length-1]&-2147483648?-1:0)};function Hc(t,e){return t.add(ot(e))}O.R=function(t){if(er(this)||er(t))return Ks;if(sn(this))return sn(t)?ot(this).R(ot(t)):ot(ot(this).R(t));if(sn(t))return ot(this.R(ot(t)));if(0>this.X(qw)&&0>t.X(qw))return Mn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Lu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Lu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Lu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Lu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ce(n,0)};function Lu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function na(t,e){this.g=t,this.h=e}function Kc(t,e){if(er(e))throw Error("division by zero");if(er(t))return new na(Ks,Ks);if(sn(t))return e=Kc(ot(t),e),new na(ot(e.g),ot(e.h));if(sn(e))return e=Kc(t,ot(e)),new na(ot(e.g),e.h);if(30<t.g.length){if(sn(t)||sn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Mp,r=e;0>=r.X(t);)n=Ww(n),r=Ww(r);var i=Is(n,1),s=Is(r,1);for(r=Is(r,2),n=Is(n,2);!er(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Is(r,1),n=Is(n,1)}return e=Hc(t,i.R(e)),new na(i,e)}for(i=Ks;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Mn(n),o=s.R(e);sn(o)||0<o.X(t);)n-=r,s=Mn(n),o=s.R(e);er(s)&&(s=Mp),i=i.add(s),t=Hc(t,o)}return new na(i,t)}O.gb=function(t){return Kc(this,t).h};O.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ce(n,this.h&t.h)};O.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ce(n,this.h|t.h)};O.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ce(n,this.h^t.h)};function Ww(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ce(n,t.h)}function Is(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ce(i,t.h)}Gc.prototype.createWebChannel=Gc.prototype.g;Jt.prototype.send=Jt.prototype.u;Jt.prototype.open=Jt.prototype.m;Jt.prototype.close=Jt.prototype.close;Fh.NO_ERROR=0;Fh.TIMEOUT=8;Fh.HTTP_ERROR=6;kE.COMPLETE="complete";CE.EventType=Bl;Bl.OPEN="a";Bl.CLOSE="b";Bl.ERROR="c";Bl.MESSAGE="d";et.prototype.listen=et.prototype.O;Re.prototype.listenOnce=Re.prototype.P;Re.prototype.getLastError=Re.prototype.Sa;Re.prototype.getLastErrorCode=Re.prototype.Ia;Re.prototype.getStatus=Re.prototype.da;Re.prototype.getResponseJson=Re.prototype.Wa;Re.prototype.getResponseText=Re.prototype.ja;Re.prototype.send=Re.prototype.ha;Re.prototype.setWithCredentials=Re.prototype.Oa;Sn.prototype.digest=Sn.prototype.l;Sn.prototype.reset=Sn.prototype.reset;Sn.prototype.update=Sn.prototype.j;ce.prototype.add=ce.prototype.add;ce.prototype.multiply=ce.prototype.R;ce.prototype.modulo=ce.prototype.gb;ce.prototype.compare=ce.prototype.X;ce.prototype.toNumber=ce.prototype.ea;ce.prototype.toString=ce.prototype.toString;ce.prototype.getBits=ce.prototype.D;ce.fromNumber=Mn;ce.fromString=aS;var zb=function(){return new Gc},Bb=function(){return $h()},hf=Fh,jb=kE,qb=cs,Gw={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Wb=Wl,Mu=CE,Gb=Re,Hb=Sn,Qs=ce;const Hw="@firebase/firestore";/**
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
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
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
 */let bo="9.23.0";/**
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
 */const Xr=new Dh("@firebase/firestore");function $p(){return Xr.logLevel}function Kb(t){Xr.setLogLevel(t)}function C(t,...e){if(Xr.logLevel<=ne.DEBUG){const n=e.map(Fg);Xr.debug(`Firestore (${bo}): ${t}`,...n)}}function Me(t,...e){if(Xr.logLevel<=ne.ERROR){const n=e.map(Fg);Xr.error(`Firestore (${bo}): ${t}`,...n)}}function Tn(t,...e){if(Xr.logLevel<=ne.WARN){const n=e.map(Fg);Xr.warn(`Firestore (${bo}): ${t}`,...n)}}function Fg(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function $(t="Unexpected state"){const e=`FIRESTORE (${bo}) INTERNAL ASSERTION FAILED: `+t;throw Me(e),new Error(e)}function z(t,e){t||$()}function Qb(t,e){t||$()}function P(t,e){return t}/**
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
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends Nt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ze{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class lS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Yb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class Xb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Jb{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Ze;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ze,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ze)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(z(typeof r.accessToken=="string"),new lS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return z(e===null||typeof e=="string"),new Ye(e)}}class Zb{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class eR{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new Zb(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nR{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,C("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(z(typeof n.token=="string"),this.T=n.token,new tR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function rR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class uS{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=rR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function K(t,e){return t<e?-1:t>e?1:0}function co(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function cS(t){return t+"\0"}/**
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
 */class ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new T(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new T(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new T(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new T(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new ke(0,0))}static max(){return new V(new ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class gl{constructor(e,n,r){n===void 0?n=0:n>e.length&&$(),r===void 0?r=e.length-n:r>e.length-n&&$(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return gl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof gl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class re extends gl{construct(e,n,r){return new re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new T(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new re(n)}static emptyPath(){return new re([])}}const iR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends gl{construct(e,n,r){return new $e(e,n,r)}static isValidIdentifier(e){return iR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new T(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new T(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new T(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new T(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
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
 */class b{constructor(e){this.path=e}static fromPath(e){return new b(re.fromString(e))}static fromName(e){return new b(re.fromString(e).popFirst(5))}static empty(){return new b(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new b(new re(e.slice()))}}/**
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
 */class hS{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Fp(t){return t.fields.find(e=>e.kind===2)}function Si(t){return t.fields.filter(e=>e.kind!==2)}hS.UNKNOWN_ID=-1;class sR{constructor(e,n){this.fieldPath=e,this.kind=n}}class Qc{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Qc(0,Zt.min())}}function dS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=V.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new Zt(i,b.empty(),e)}function fS(t){return new Zt(t.readTime,t.key,-1)}class Zt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Zt(V.min(),b.empty(),-1)}static max(){return new Zt(V.max(),b.empty(),-1)}}function Ug(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=b.comparator(t.documentKey,e.documentKey),n!==0?n:K(t.largestBatchId,e.largestBatchId))}/**
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
 */const pS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function fi(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==pS)throw t;C("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,r)=>{n(e)})}static reject(e){return new w((n,r)=>{r(e)})}static waitFor(e){return new w((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=w.resolve(!1);for(const r of e)n=n.next(i=>i?w.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new w((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new w((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class Gh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.v=new Ze,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{n.error?this.v.reject(new Pa(e,n.error)):this.v.resolve()},this.transaction.onerror=r=>{const i=Vg(r.target.error);this.v.reject(new Pa(e,i))}}static open(e,n,r,i){try{return new Gh(n,e.transaction(i,r))}catch(s){throw new Pa(n,s)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(C("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new aR(n)}}class vn{constructor(e,n,r){this.name=e,this.version=n,this.V=r,vn.S(Ne())===12.2&&Me("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return C("SimpleDb","Removing database:",e),Ti(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!sl())return!1;if(vn.C())return!0;const e=Ne(),n=vn.S(e),r=0<n&&n<10,i=vn.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(C("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Pa(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new T(_.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new T(_.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Pa(e,o))},i.onupgradeneeded=s=>{C("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.O(o,i.transaction,s.oldVersion,this.version).next(()=>{C("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=n=>this.F(n)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=Gh.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.P(),u)).catch(u=>(a.abort(u),w.reject(u))).toPromise();return l.catch(()=>{}),await a.R,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(C("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class oR{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Ti(this.L.delete())}}class Pa extends T{constructor(e,n){super(_.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function pi(t){return t.name==="IndexedDbTransactionError"}class aR{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(C("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(C("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ti(r)}add(e){return C("SimpleDb","ADD",this.store.name,e,e),Ti(this.store.add(e))}get(e){return Ti(this.store.get(e)).next(n=>(n===void 0&&(n=null),C("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return C("SimpleDb","DELETE",this.store.name,e),Ti(this.store.delete(e))}count(){return C("SimpleDb","COUNT",this.store.name),Ti(this.store.count())}j(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new w((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new w((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,n){C("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}X(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Z(e){const n=this.cursor({});return new w((r,i)=>{n.onerror=s=>{const o=Vg(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new w((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new oR(a),u=n(a.primaryKey,a.value,l);if(u instanceof w){const c=u.catch(h=>(l.done(),w.reject(h)));r.push(c)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>w.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Ti(t){return new w((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Vg(r.target.error);n(i)}})}let Kw=!1;function Vg(t){const e=vn.S(Ne());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new T("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Kw||(Kw=!0,setTimeout(()=>{throw r},0)),r}}return t}class lR{constructor(e,n){this.asyncQueue=e,this.tt=n,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){C("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{C("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(n){pi(n)?C("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await fi(n)}await this.et(6e4)})}}class uR{constructor(e,n){this.localStore=e,this.persistence=n}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.st(n,e))}st(e,n){const r=new Set;let i=n,s=!0;return w.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return C("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}it(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(C("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}rt(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=fS(s);Ug(o,r)>0&&(r=o)}),new Zt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Ut{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Ut.ct=-1;function Kl(t){return t==null}function yl(t){return t===0&&1/t==-1/0}function gS(t){return typeof t=="number"&&Number.isInteger(t)&&!yl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Dt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Qw(e)),e=cR(t.get(n),e);return Qw(e)}function cR(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Qw(t){return t+""}function $n(t){const e=t.length;if(z(e>=2),e===2)return z(t.charAt(0)===""&&t.charAt(1)===""),re.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&$(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:$()}s=o+2}return new re(r)}/**
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
 */const Yw=["userId","batchId"];/**
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
 */function rc(t,e){return[t,Dt(e)]}function yS(t,e,n){return[t,Dt(e),n]}const hR={},dR=["prefixPath","collectionGroup","readTime","documentId"],fR=["prefixPath","collectionGroup","documentId"],pR=["collectionGroup","readTime","prefixPath","documentId"],mR=["canonicalId","targetId"],gR=["targetId","path"],yR=["path","targetId"],vR=["collectionId","parent"],wR=["indexId","uid"],_R=["uid","sequenceNumber"],IR=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],ER=["indexId","uid","orderedDocumentKey"],SR=["userId","collectionPath","documentId"],TR=["userId","collectionPath","largestBatchId"],kR=["userId","collectionGroup","largestBatchId"],vS=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],CR=[...vS,"documentOverlays"],wS=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],_S=wS,AR=[..._S,"indexConfiguration","indexState","indexEntries"];/**
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
 */class Up extends mS{constructor(e,n){super(),this.ht=e,this.currentSequenceNumber=n}}function nt(t,e){const n=P(t);return vn.M(n.ht,e)}/**
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
 */function Xw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function IS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class fe{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $u(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $u(this.root,e,this.comparator,!1)}getReverseIterator(){return new $u(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $u(this.root,e,this.comparator,!0)}}class $u{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:st.RED,this.left=i!=null?i:st.EMPTY,this.right=s!=null?s:st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new st(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return st.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(t,e,n,r,i){return this}insert(t,e,n){return new st(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class we{constructor(e){this.comparator=e,this.data=new fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Jw(this.data.getIterator())}getIteratorFrom(e){return new Jw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof we)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new we(this.comparator);return n.data=e,n}}class Jw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Es(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class Vt{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new Vt([])}unionWith(e){let n=new we($e.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return co(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ES extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function xR(){return typeof atob<"u"}/**
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
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ES("Invalid base64 string: "+i):i}}(e);return new Ge(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ge(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const NR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jr(t){if(z(!!t),typeof t=="string"){let e=0;const n=NR.exec(t);if(z(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zr(t){return typeof t=="string"?Ge.fromBase64String(t):Ge.fromUint8Array(t)}/**
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
 */function Hh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zg(t){const e=t.mapValue.fields.__previous_value__;return Hh(e)?zg(e):e}function vl(t){const e=Jr(t.mapValue.fields.__local_write_time__.timestampValue);return new ke(e.seconds,e.nanos)}/**
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
 */class DR{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ei{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ei("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ei&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Lr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ic={nullValue:"NULL_VALUE"};function Yi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hh(t)?4:SS(t)?9007199254740991:10:$()}function Gn(t,e){if(t===e)return!0;const n=Yi(t);if(n!==Yi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vl(t).isEqual(vl(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Jr(r.timestampValue),o=Jr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Zr(r.bytesValue).isEqual(Zr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return be(r.geoPointValue.latitude)===be(i.geoPointValue.latitude)&&be(r.geoPointValue.longitude)===be(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return be(r.integerValue)===be(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=be(r.doubleValue),o=be(i.doubleValue);return s===o?yl(s)===yl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return co(t.arrayValue.values||[],e.arrayValue.values||[],Gn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Xw(s)!==Xw(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Gn(s[a],o[a])))return!1;return!0}(t,e);default:return $()}}function wl(t,e){return(t.values||[]).find(n=>Gn(n,e))!==void 0}function ti(t,e){if(t===e)return 0;const n=Yi(t),r=Yi(e);if(n!==r)return K(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return K(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=be(i.integerValue||i.doubleValue),a=be(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Zw(t.timestampValue,e.timestampValue);case 4:return Zw(vl(t),vl(e));case 5:return K(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Zr(i),a=Zr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=K(o[l],a[l]);if(u!==0)return u}return K(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=K(be(i.latitude),be(s.latitude));return o!==0?o:K(be(i.longitude),be(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=ti(o[l],a[l]);if(u)return u}return K(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Lr.mapValue&&s===Lr.mapValue)return 0;if(i===Lr.mapValue)return 1;if(s===Lr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=K(a[c],u[c]);if(h!==0)return h;const d=ti(o[a[c]],l[u[c]]);if(d!==0)return d}return K(a.length,u.length)}(t.mapValue,e.mapValue);default:throw $()}}function Zw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return K(t,e);const n=Jr(t),r=Jr(e),i=K(n.seconds,r.seconds);return i!==0?i:K(n.nanos,r.nanos)}function ho(t){return Vp(t)}function Vp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Jr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Zr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,b.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Vp(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Vp(r.fields[a])}`;return s+"}"}(t.mapValue):$();var e,n}function Xi(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function zp(t){return!!t&&"integerValue"in t}function _l(t){return!!t&&"arrayValue"in t}function e0(t){return!!t&&"nullValue"in t}function t0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function sc(t){return!!t&&"mapValue"in t}function Oa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return hs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Oa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Oa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function SS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function bR(t){return"nullValue"in t?ic:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Xi(ei.empty(),b.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:$()}function RR(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Xi(ei.empty(),b.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Lr:$()}function n0(t,e){const n=ti(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function r0(t,e){const n=ti(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class lt{constructor(e){this.value=e}static empty(){return new lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!sc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Oa(n)}setAll(e){let n=$e.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Oa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());sc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];sc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){hs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new lt(Oa(this.value))}}function TS(t){const e=[];return hs(t.fields,(n,r)=>{const i=new $e([n]);if(sc(r)){const s=TS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Vt(e)}/**
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
 */class ye{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ye(e,0,V.min(),V.min(),V.min(),lt.empty(),0)}static newFoundDocument(e,n,r,i){return new ye(e,1,n,V.min(),r,i,0)}static newNoDocument(e,n){return new ye(e,2,n,V.min(),V.min(),lt.empty(),0)}static newUnknownDocument(e,n){return new ye(e,3,n,V.min(),V.min(),lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(V.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ni{constructor(e,n){this.position=e,this.inclusive=n}}function i0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=b.comparator(b.fromName(o.referenceValue),n.key):r=ti(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function s0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Gn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ys{constructor(e,n="asc"){this.field=e,this.dir=n}}function PR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class kS{}class ee extends kS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new OR(e,n,r):n==="array-contains"?new $R(e,r):n==="in"?new bS(e,r):n==="not-in"?new FR(e,r):n==="array-contains-any"?new UR(e,r):new ee(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new LR(e,r):new MR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ti(n,this.value)):n!==null&&Yi(this.value)===Yi(n)&&this.matchesComparison(ti(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class le extends kS{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new le(e,n)}matches(e){return fo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function fo(t){return t.op==="and"}function Bp(t){return t.op==="or"}function Bg(t){return CS(t)&&fo(t)}function CS(t){for(const e of t.filters)if(e instanceof le)return!1;return!0}function jp(t){if(t instanceof ee)return t.field.canonicalString()+t.op.toString()+ho(t.value);if(Bg(t))return t.filters.map(e=>jp(e)).join(",");{const e=t.filters.map(n=>jp(n)).join(",");return`${t.op}(${e})`}}function AS(t,e){return t instanceof ee?function(n,r){return r instanceof ee&&n.op===r.op&&n.field.isEqual(r.field)&&Gn(n.value,r.value)}(t,e):t instanceof le?function(n,r){return r instanceof le&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&AS(s,r.filters[o]),!0):!1}(t,e):void $()}function xS(t,e){const n=t.filters.concat(e);return le.create(n,t.op)}function NS(t){return t instanceof ee?function(e){return`${e.field.canonicalString()} ${e.op} ${ho(e.value)}`}(t):t instanceof le?function(e){return e.op.toString()+" {"+e.getFilters().map(NS).join(" ,")+"}"}(t):"Filter"}class OR extends ee{constructor(e,n,r){super(e,n,r),this.key=b.fromName(r.referenceValue)}matches(e){const n=b.comparator(e.key,this.key);return this.matchesComparison(n)}}class LR extends ee{constructor(e,n){super(e,"in",n),this.keys=DS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class MR extends ee{constructor(e,n){super(e,"not-in",n),this.keys=DS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function DS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>b.fromName(r.referenceValue))}class $R extends ee{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _l(n)&&wl(n.arrayValue,this.value)}}class bS extends ee{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wl(this.value.arrayValue,n)}}class FR extends ee{constructor(e,n){super(e,"not-in",n)}matches(e){if(wl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!wl(this.value.arrayValue,n)}}class UR extends ee{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_l(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>wl(this.value.arrayValue,r))}}/**
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
 */class VR{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function qp(t,e=null,n=[],r=[],i=null,s=null,o=null){return new VR(t,e,n,r,i,s,o)}function Ji(t){const e=P(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>jp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Kl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ho(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ho(r)).join(",")),e.dt=n}return e.dt}function Ql(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!PR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!AS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!s0(t.startAt,e.startAt)&&s0(t.endAt,e.endAt)}function Yc(t){return b.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Xc(t,e){return t.filters.filter(n=>n instanceof ee&&n.field.isEqual(e))}function o0(t,e,n){let r=ic,i=!0;for(const s of Xc(t,e)){let o=ic,a=!0;switch(s.op){case"<":case"<=":o=bR(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=ic}n0({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];n0({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function a0(t,e,n){let r=Lr,i=!0;for(const s of Xc(t,e)){let o=Lr,a=!0;switch(s.op){case">=":case">":o=RR(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Lr}r0({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];r0({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class mr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function RS(t,e,n,r,i,s,o,a){return new mr(t,e,n,r,i,s,o,a)}function Ro(t){return new mr(t)}function l0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Kh(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function qg(t){return t.collectionGroup!==null}function Vi(t){const e=P(t);if(e.wt===null){e.wt=[];const n=Kh(e),r=jg(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Ys(n)),e.wt.push(new Ys($e.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Ys($e.keyField(),s))}}}return e.wt}function Wt(t){const e=P(t);if(!e._t)if(e.limitType==="F")e._t=qp(e.path,e.collectionGroup,Vi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Vi(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ys(s.field,o))}const r=e.endAt?new ni(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ni(e.startAt.position,e.startAt.inclusive):null;e._t=qp(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Wp(t,e){e.getFirstInequalityField(),Kh(t);const n=t.filters.concat([e]);return new mr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Jc(t,e,n){return new mr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yl(t,e){return Ql(Wt(t),Wt(e))&&t.limitType===e.limitType}function PS(t){return`${Ji(Wt(t))}|lt:${t.limitType}`}function Gp(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>NS(r)).join(", ")}]`),Kl(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ho(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ho(r)).join(",")),`Target(${n})`}(Wt(t))}; limitType=${t.limitType})`}function Xl(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):b.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Vi(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=i0(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Vi(n),r)||n.endAt&&!function(i,s,o){const a=i0(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Vi(n),r))}(t,e)}function OS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function LS(t){return(e,n)=>{let r=!1;for(const i of Vi(t)){const s=zR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function zR(t,e,n){const r=t.field.isKeyField()?b.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ti(a,l):$()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
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
 */class mi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){hs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return IS(this.inner)}size(){return this.innerSize}}/**
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
 */const BR=new fe(b.comparator);function zt(){return BR}const MS=new fe(b.comparator);function wa(...t){let e=MS;for(const n of t)e=e.insert(n.key,n);return e}function $S(t){let e=MS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fn(){return La()}function FS(){return La()}function La(){return new mi(t=>t.toString(),(t,e)=>t.isEqual(e))}const jR=new fe(b.comparator),qR=new we(b.comparator);function Y(...t){let e=qR;for(const n of t)e=e.add(n);return e}const WR=new we(K);function Wg(){return WR}/**
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
 */function US(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yl(e)?"-0":e}}function VS(t){return{integerValue:""+t}}function zS(t,e){return gS(e)?VS(e):US(t,e)}/**
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
 */class Qh{constructor(){this._=void 0}}function GR(t,e,n){return t instanceof po?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Hh(i)&&(i=zg(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Zi?jS(t,e):t instanceof es?qS(t,e):function(r,i){const s=BS(r,i),o=u0(s)+u0(r.gt);return zp(s)&&zp(r.gt)?VS(o):US(r.serializer,o)}(t,e)}function HR(t,e,n){return t instanceof Zi?jS(t,e):t instanceof es?qS(t,e):n}function BS(t,e){return t instanceof mo?zp(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class po extends Qh{}class Zi extends Qh{constructor(e){super(),this.elements=e}}function jS(t,e){const n=WS(e);for(const r of t.elements)n.some(i=>Gn(i,r))||n.push(r);return{arrayValue:{values:n}}}class es extends Qh{constructor(e){super(),this.elements=e}}function qS(t,e){let n=WS(e);for(const r of t.elements)n=n.filter(i=>!Gn(i,r));return{arrayValue:{values:n}}}class mo extends Qh{constructor(e,n){super(),this.serializer=e,this.gt=n}}function u0(t){return be(t.integerValue||t.doubleValue)}function WS(t){return _l(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Jl{constructor(e,n){this.field=e,this.transform=n}}function KR(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Zi&&r instanceof Zi||n instanceof es&&r instanceof es?co(n.elements,r.elements,Gn):n instanceof mo&&r instanceof mo?Gn(n.gt,r.gt):n instanceof po&&r instanceof po}(t.transform,e.transform)}class QR{constructor(e,n){this.version=e,this.transformResults=n}}class Te{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Te}static exists(e){return new Te(void 0,e)}static updateTime(e){return new Te(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Yh{}function GS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Oo(t.key,Te.none()):new Po(t.key,t.data,Te.none());{const n=t.data,r=lt.empty();let i=new we($e.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new gr(t.key,r,new Vt(i.toArray()),Te.none())}}function YR(t,e,n){t instanceof Po?function(r,i,s){const o=r.value.clone(),a=h0(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof gr?function(r,i,s){if(!oc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=h0(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(HS(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ma(t,e,n,r){return t instanceof Po?function(i,s,o,a){if(!oc(i.precondition,s))return o;const l=i.value.clone(),u=d0(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof gr?function(i,s,o,a){if(!oc(i.precondition,s))return o;const l=d0(i.fieldTransforms,a,s),u=s.data;return u.setAll(HS(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return oc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function XR(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=BS(r.transform,i||null);s!=null&&(n===null&&(n=lt.empty()),n.set(r.field,s))}return n||null}function c0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&co(n,r,(i,s)=>KR(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Po extends Yh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class gr extends Yh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function HS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function h0(t,e,n){const r=new Map;z(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,HR(o,a,n[i]))}return r}function d0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,GR(s,o,e))}return r}class Oo extends Yh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Gg extends Yh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Hg{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&YR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ma(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ma(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=FS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=GS(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(V.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Y())}isEqual(e){return this.batchId===e.batchId&&co(this.mutations,e.mutations,(n,r)=>c0(n,r))&&co(this.baseMutations,e.baseMutations,(n,r)=>c0(n,r))}}class Kg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){z(e.mutations.length===r.length);let i=jR;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Kg(e,n,r,i)}}/**
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
 */class Qg{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class JR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ve,te;function KS(t){switch(t){default:return $();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function QS(t){if(t===void 0)return Me("GRPC error has no .code"),_.UNKNOWN;switch(t){case Ve.OK:return _.OK;case Ve.CANCELLED:return _.CANCELLED;case Ve.UNKNOWN:return _.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return _.INTERNAL;case Ve.UNAVAILABLE:return _.UNAVAILABLE;case Ve.UNAUTHENTICATED:return _.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case Ve.NOT_FOUND:return _.NOT_FOUND;case Ve.ALREADY_EXISTS:return _.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return _.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case Ve.ABORTED:return _.ABORTED;case Ve.OUT_OF_RANGE:return _.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return _.UNIMPLEMENTED;case Ve.DATA_LOSS:return _.DATA_LOSS;default:return $()}}(te=Ve||(Ve={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Yg{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Fu}static getOrCreateInstance(){return Fu===null&&(Fu=new Yg),Fu}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Fu=null;/**
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
 */function YS(){return new TextEncoder}/**
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
 */const ZR=new Qs([4294967295,4294967295],0);function f0(t){const e=YS().encode(t),n=new Hb;return n.update(e),new Uint8Array(n.digest())}function p0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Qs([n,r],0),new Qs([i,s],0)]}class Xg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new _a(`Invalid padding: ${n}`);if(r<0)throw new _a(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new _a(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new _a(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Qs.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(Qs.fromNumber(r)));return i.compare(ZR)===1&&(i=new Qs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=f0(e),[r,i]=p0(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Xg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=f0(e),[r,i]=p0(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class _a extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Zl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,eu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Zl(V.min(),i,new fe(K),zt(),Y())}}class eu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new eu(r,n,Y(),Y(),Y())}}/**
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
 */class ac{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class XS{constructor(e,n){this.targetId=e,this.Vt=n}}class JS{constructor(e,n,r=Ge.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class m0{constructor(){this.St=0,this.Dt=y0(),this.Ct=Ge.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=Y(),n=Y(),r=Y();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:$()}}),new eu(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=y0()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class eP{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=zt(),this.zt=g0(),this.Wt=new fe(K)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:$()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(Yc(o))if(i===0){const a=new b(o.path);this.Yt(r,a,ye.newNoDocument(a,V.min()))}else z(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=Yg.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var d,p,y,v,k,g;const f={localCacheCount:c,existenceFilterCount:h.count},m=h.unchangedNames;return m&&(f.bloomFilter={applied:u===0,hashCount:(d=m==null?void 0:m.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(y=(p=m==null?void 0:m.bits)===null||p===void 0?void 0:p.bitmap)===null||y===void 0?void 0:y.length)!==null&&v!==void 0?v:0,padding:(g=(k=m==null?void 0:m.bits)===null||k===void 0?void 0:k.padding)!==null&&g!==void 0?g:0}),f}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Zr(s).toUint8Array()}catch(c){if(c instanceof ES)return Tn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new Xg(l,o,a)}catch(c){return Tn(c instanceof _a?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Yc(a.target)){const l=new b(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,ye.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=Y();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new Zl(e,n,this.Wt,this.jt,r);return this.jt=zt(),this.zt=g0(),this.Wt=new fe(K),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new m0,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new we(K),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||C("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new m0),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function g0(){return new fe(b.comparator)}function y0(){return new fe(b.comparator)}const tP=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),nP=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),rP=(()=>({and:"AND",or:"OR"}))();class iP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Hp(t,e){return t.useProto3Json||Kl(e)?e:{value:e}}function go(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ZS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function sP(t,e){return go(t,e.toTimestamp())}function Fe(t){return z(!!t),V.fromTimestamp(function(e){const n=Jr(e);return new ke(n.seconds,n.nanos)}(t))}function Jg(t,e){return function(n){return new re(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function eT(t){const e=re.fromString(t);return z(uT(e)),e}function Il(t,e){return Jg(t.databaseId,e.path)}function jn(t,e){const n=eT(e);if(n.get(1)!==t.databaseId.projectId)throw new T(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new T(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new b(nT(n))}function Kp(t,e){return Jg(t.databaseId,e)}function tT(t){const e=eT(t);return e.length===4?re.emptyPath():nT(e)}function El(t){return new re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function nT(t){return z(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function v0(t,e,n){return{name:Il(t,e),fields:n.value.mapValue.fields}}function rT(t,e,n){const r=jn(t,e.name),i=Fe(e.updateTime),s=e.createTime?Fe(e.createTime):V.min(),o=new lt({mapValue:{fields:e.fields}}),a=ye.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function oP(t,e){return"found"in e?function(n,r){z(!!r.found),r.found.name,r.found.updateTime;const i=jn(n,r.found.name),s=Fe(r.found.updateTime),o=r.found.createTime?Fe(r.found.createTime):V.min(),a=new lt({mapValue:{fields:r.found.fields}});return ye.newFoundDocument(i,s,o,a)}(t,e):"missing"in e?function(n,r){z(!!r.missing),z(!!r.readTime);const i=jn(n,r.missing),s=Fe(r.readTime);return ye.newNoDocument(i,s)}(t,e):$()}function aP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(z(u===void 0||typeof u=="string"),Ge.fromBase64String(u||"")):(z(u===void 0||u instanceof Uint8Array),Ge.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?_.UNKNOWN:QS(l.code);return new T(u,l.message||"")}(o);n=new JS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=jn(t,r.document.name),s=Fe(r.document.updateTime),o=r.document.createTime?Fe(r.document.createTime):V.min(),a=new lt({mapValue:{fields:r.document.fields}}),l=ye.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ac(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=jn(t,r.document),s=r.readTime?Fe(r.readTime):V.min(),o=ye.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ac([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=jn(t,r.document),s=r.removedTargetIds||[];n=new ac([],s,i,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new JR(i,s),a=r.targetId;n=new XS(a,o)}}return n}function Sl(t,e){let n;if(e instanceof Po)n={update:v0(t,e.key,e.value)};else if(e instanceof Oo)n={delete:Il(t,e.key)};else if(e instanceof gr)n={update:v0(t,e.key,e.data),updateMask:fP(e.fieldMask)};else{if(!(e instanceof Gg))return $();n={verify:Il(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof po)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Zi)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof es)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof mo)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw $()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:sP(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$()}(t,e.precondition)),n}function Qp(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?Te.updateTime(Fe(i.updateTime)):i.exists!==void 0?Te.exists(i.exists):Te.none()}(e.currentDocument):Te.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)z(o.setToServerValue==="REQUEST_TIME"),a=new po;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Zi(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new es(u)}else"increment"in o?a=new mo(s,o.increment):$();const l=$e.fromServerFormat(o.fieldPath);return new Jl(l,a)}(t,i)):[];if(e.update){e.update.name;const i=jn(t,e.update.name),s=new lt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const l=a.fieldPaths||[];return new Vt(l.map(u=>$e.fromServerFormat(u)))}(e.updateMask);return new gr(i,s,o,n,r)}return new Po(i,s,n,r)}if(e.delete){const i=jn(t,e.delete);return new Oo(i,n)}if(e.verify){const i=jn(t,e.verify);return new Gg(i,n)}return $()}function lP(t,e){return t&&t.length>0?(z(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Fe(r.updateTime):Fe(i);return s.isEqual(V.min())&&(s=Fe(i)),new QR(s,r.transformResults||[])}(n,e))):[]}function iT(t,e){return{documents:[Kp(t,e.path)]}}function sT(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Kp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Kp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return lT(le.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:ks(c.field),direction:cP(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Hp(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function oT(t){let e=tT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){z(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=aT(c);return h instanceof le&&Bg(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Ys(Cs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Kl(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new ni(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new ni(d,h)}(n.endAt)),RS(e,i,o,s,a,"F",l,u)}function uP(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function aT(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Cs(e.unaryFilter.field);return ee.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Cs(e.unaryFilter.field);return ee.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Cs(e.unaryFilter.field);return ee.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Cs(e.unaryFilter.field);return ee.create(s,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(t):t.fieldFilter!==void 0?function(e){return ee.create(Cs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return le.create(e.compositeFilter.filters.map(n=>aT(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return $()}}(e.compositeFilter.op))}(t):$()}function cP(t){return tP[t]}function hP(t){return nP[t]}function dP(t){return rP[t]}function ks(t){return{fieldPath:t.canonicalString()}}function Cs(t){return $e.fromServerFormat(t.fieldPath)}function lT(t){return t instanceof ee?function(e){if(e.op==="=="){if(t0(e.value))return{unaryFilter:{field:ks(e.field),op:"IS_NAN"}};if(e0(e.value))return{unaryFilter:{field:ks(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(t0(e.value))return{unaryFilter:{field:ks(e.field),op:"IS_NOT_NAN"}};if(e0(e.value))return{unaryFilter:{field:ks(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ks(e.field),op:hP(e.op),value:e.value}}}(t):t instanceof le?function(e){const n=e.getFilters().map(r=>lT(r));return n.length===1?n[0]:{compositeFilter:{op:dP(e.op),filters:n}}}(t):$()}function fP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class tr{constructor(e,n,r,i,s=V.min(),o=V.min(),a=Ge.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class cT{constructor(e){this.fe=e}}function pP(t,e){let n;if(e.document)n=rT(t.fe,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=b.fromSegments(e.noDocument.path),i=ns(e.noDocument.readTime);n=ye.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return $();{const r=b.fromSegments(e.unknownDocument.path),i=ns(e.unknownDocument.version);n=ye.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new ke(r[0],r[1]);return V.fromTimestamp(i)}(e.readTime)),n}function w0(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Zc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:Il(i,s.key),fields:s.data.value.mapValue.fields,updateTime:go(i,s.version.toTimestamp()),createTime:go(i,s.createTime.toTimestamp())}}(t.fe,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:ts(e.version)};else{if(!e.isUnknownDocument())return $();r.unknownDocument={path:n.path.toArray(),version:ts(e.version)}}return r}function Zc(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function ts(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ns(t){const e=new ke(t.seconds,t.nanoseconds);return V.fromTimestamp(e)}function ki(t,e){const n=(e.baseMutations||[]).map(s=>Qp(t.fe,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Qp(t.fe,s)),i=ke.fromMillis(e.localWriteTimeMs);return new Hg(e.batchId,i,n,r)}function Ia(t){const e=ns(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?ns(t.lastLimboFreeSnapshotVersion):V.min();let r;var i;return t.query.documents!==void 0?(z((i=t.query).documents.length===1),r=Wt(Ro(tT(i.documents[0])))):r=function(s){return Wt(oT(s))}(t.query),new tr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Ge.fromBase64String(t.resumeToken))}function hT(t,e){const n=ts(e.snapshotVersion),r=ts(e.lastLimboFreeSnapshotVersion);let i;i=Yc(e.target)?iT(t.fe,e.target):sT(t.fe,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ji(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Zg(t){const e=oT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Jc(e,e.limit,"L"):e}function df(t,e){return new Qg(e.largestBatchId,Qp(t.fe,e.overlayMutation))}function _0(t,e){const n=e.path.lastSegment();return[t,Dt(e.path.popLast()),n]}function I0(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:ts(r.readTime),documentKey:Dt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class mP{getBundleMetadata(e,n){return E0(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:ns(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return E0(e).put({bundleId:(r=n).id,createTime:ts(Fe(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return S0(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:Zg(i.bundledQuery),readTime:ns(i.readTime)};var i})}saveNamedQuery(e,n){return S0(e).put(function(r){return{name:r.name,readTime:ts(Fe(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function E0(t){return nt(t,"bundles")}function S0(t){return nt(t,"namedQueries")}/**
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
 */class Xh{constructor(e,n){this.serializer=e,this.userId=n}static de(e,n){const r=n.uid||"";return new Xh(e,r)}getOverlay(e,n){return ra(e).get(_0(this.userId,n)).next(r=>r?df(this.serializer,r):null)}getOverlays(e,n){const r=Fn();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Qg(n,o);i.push(this.we(e,a))}),w.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Dt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(ra(e).J("collectionPathOverlayIndex",a))}),w.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Fn(),s=Dt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ra(e).j("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=df(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Fn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return ra(e).X({index:"collectionGroupOverlayIndex",range:a},(l,u,c)=>{const h=df(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):c.done()}).next(()=>s)}we(e,n){return ra(e).put(function(r,i,s){const[o,a,l]=_0(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:l,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:Sl(r.fe,s.mutation)}}(this.serializer,this.userId,n))}}function ra(t){return nt(t,"documentOverlays")}/**
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
 */class Ci{constructor(){}_e(e,n){this.me(e,n),n.ge()}me(e,n){if("nullValue"in e)this.ye(n,5);else if("booleanValue"in e)this.ye(n,10),n.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(n,15),n.pe(be(e.integerValue));else if("doubleValue"in e){const r=be(e.doubleValue);isNaN(r)?this.ye(n,13):(this.ye(n,15),yl(r)?n.pe(0):n.pe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ye(n,20),typeof r=="string"?n.Ie(r):(n.Ie(`${r.seconds||""}`),n.pe(r.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,n),this.Ee(n);else if("bytesValue"in e)this.ye(n,30),n.Ae(Zr(e.bytesValue)),this.Ee(n);else if("referenceValue"in e)this.ve(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.ye(n,45),n.pe(r.latitude||0),n.pe(r.longitude||0)}else"mapValue"in e?SS(e)?this.ye(n,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,n),this.Ee(n)):"arrayValue"in e?(this.Pe(e.arrayValue,n),this.Ee(n)):$()}Te(e,n){this.ye(n,25),this.be(e,n)}be(e,n){n.Ie(e)}Re(e,n){const r=e.fields||{};this.ye(n,55);for(const i of Object.keys(r))this.Te(i,n),this.me(r[i],n)}Pe(e,n){const r=e.values||[];this.ye(n,50);for(const i of r)this.me(i,n)}ve(e,n){this.ye(n,37),b.fromName(e).path.forEach(r=>{this.ye(n,60),this.be(r,n)})}ye(e,n){e.pe(n)}Ee(e){e.pe(2)}}Ci.Ve=new Ci;function gP(t){if(t===0)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function T0(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=gP(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class yP{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.De(r.value),r=n.next();this.Ce()}xe(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ne(r.value),r=n.next();this.ke()}Me(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.De(r);else if(r<2048)this.De(960|r>>>6),this.De(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.De(480|r>>>12),this.De(128|63&r>>>6),this.De(128|63&r);else{const i=n.codePointAt(0);this.De(240|i>>>18),this.De(128|63&i>>>12),this.De(128|63&i>>>6),this.De(128|63&i)}}this.Ce()}$e(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ne(r);else if(r<2048)this.Ne(960|r>>>6),this.Ne(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ne(480|r>>>12),this.Ne(128|63&r>>>6),this.Ne(128|63&r);else{const i=n.codePointAt(0);this.Ne(240|i>>>18),this.Ne(128|63&i>>>12),this.Ne(128|63&i>>>6),this.Ne(128|63&i)}}this.ke()}Oe(e){const n=this.Fe(e),r=T0(n);this.Be(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Le(e){const n=this.Fe(e),r=T0(n);this.Be(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}De(e){const n=255&e;n===0?(this.Ue(0),this.Ue(255)):n===255?(this.Ue(255),this.Ue(0)):this.Ue(n)}Ne(e){const n=255&e;n===0?(this.Ge(0),this.Ge(255)):n===255?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class vP{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class wP{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class ia{constructor(){this.je=new yP,this.ze=new vP(this.je),this.We=new wP(this.je)}seed(e){this.je.seed(e)}He(e){return e===0?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}/**
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
 */class Ai{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Je(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Ai(this.indexId,this.documentKey,this.arrayValue,r)}}function Sr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=k0(t.arrayValue,e.arrayValue),n!==0?n:(n=k0(t.directionalValue,e.directionalValue),n!==0?n:b.comparator(t.documentKey,e.documentKey)))}function k0(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class _P{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const n of e.filters){const r=n;r.isInequality()?this.Ze=r:this.Xe.push(r)}}tn(e){z(e.collectionGroup===this.collectionId);const n=Fp(e);if(n!==void 0&&!this.en(n))return!1;const r=Si(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.en(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Ze!==void 0){if(!i.has(this.Ze.field.canonicalString())){const a=r[s];if(!this.nn(this.Ze,a)||!this.sn(this.Ye[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Ye.length||!this.sn(this.Ye[o++],a))return!1}return!0}en(e){for(const n of this.Xe)if(this.nn(n,e))return!0;return!1}nn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function dT(t){var e,n;if(z(t instanceof ee||t instanceof le),t instanceof ee){if(t instanceof bS){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>ee.create(t.field,"==",s)))||[];return le.create(i,"or")}return t}const r=t.filters.map(i=>dT(i));return le.create(r,t.op)}function IP(t){if(t.getFilters().length===0)return[];const e=Jp(dT(t));return z(fT(e)),Yp(e)||Xp(e)?[e]:e.getFilters()}function Yp(t){return t instanceof ee}function Xp(t){return t instanceof le&&Bg(t)}function fT(t){return Yp(t)||Xp(t)||function(e){if(e instanceof le&&Bp(e)){for(const n of e.getFilters())if(!Yp(n)&&!Xp(n))return!1;return!0}return!1}(t)}function Jp(t){if(z(t instanceof ee||t instanceof le),t instanceof ee)return t;if(t.filters.length===1)return Jp(t.filters[0]);const e=t.filters.map(r=>Jp(r));let n=le.create(e,t.op);return n=eh(n),fT(n)?n:(z(n instanceof le),z(fo(n)),z(n.filters.length>1),n.filters.reduce((r,i)=>ey(r,i)))}function ey(t,e){let n;return z(t instanceof ee||t instanceof le),z(e instanceof ee||e instanceof le),n=t instanceof ee?e instanceof ee?function(r,i){return le.create([r,i],"and")}(t,e):C0(t,e):e instanceof ee?C0(e,t):function(r,i){if(z(r.filters.length>0&&i.filters.length>0),fo(r)&&fo(i))return xS(r,i.getFilters());const s=Bp(r)?r:i,o=Bp(r)?i:r,a=s.filters.map(l=>ey(l,o));return le.create(a,"or")}(t,e),eh(n)}function C0(t,e){if(fo(e))return xS(e,t.getFilters());{const n=e.filters.map(r=>ey(t,r));return le.create(n,"or")}}function eh(t){if(z(t instanceof ee||t instanceof le),t instanceof ee)return t;const e=t.getFilters();if(e.length===1)return eh(e[0]);if(CS(t))return t;const n=e.map(i=>eh(i)),r=[];return n.forEach(i=>{i instanceof ee?r.push(i):i instanceof le&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:le.create(r,t.op)}/**
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
 */class EP{constructor(){this.rn=new ty}addToCollectionParentIndex(e,n){return this.rn.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(Zt.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(Zt.min())}updateCollectionGroup(e,n,r){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class ty{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new we(re.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new we(re.comparator)).toArray()}}/**
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
 */const Uu=new Uint8Array(0);class SP{constructor(e,n){this.user=e,this.databaseId=n,this.on=new ty,this.un=new mi(r=>Ji(r),(r,i)=>Ql(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.on.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.on.add(n)});const s={collectionId:r,parent:Dt(i)};return A0(e).put(s)}return w.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[cS(n),""],!1,!0);return A0(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push($n(o.parent))}return r})}addFieldIndex(e,n){const r=Vu(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=oa(e);return s.next(a=>{o.put(I0(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Vu(e),i=oa(e),s=sa(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=sa(e);let i=!0;const s=new Map;return w.forEach(this.cn(n),o=>this.an(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=Y();const a=[];return w.forEach(s,(l,u)=>{var c;C("IndexedDbIndexManager",`Using index ${c=l,`id=${c.indexId}|cg=${c.collectionGroup}|f=${c.fields.map(m=>`${m.fieldPath}:${m.kind}`).join(",")}`} to execute ${Ji(n)}`);const h=function(m,I){const E=Fp(I);if(E===void 0)return null;for(const N of Xc(m,E.fieldPath))switch(N.op){case"array-contains-any":return N.value.arrayValue.values||[];case"array-contains":return[N.value]}return null}(u,l),d=function(m,I){const E=new Map;for(const N of Si(I))for(const R of Xc(m,N.fieldPath))switch(R.op){case"==":case"in":E.set(N.fieldPath.canonicalString(),R.value);break;case"not-in":case"!=":return E.set(N.fieldPath.canonicalString(),R.value),Array.from(E.values())}return null}(u,l),p=function(m,I){const E=[];let N=!0;for(const R of Si(I)){const U=R.kind===0?o0(m,R.fieldPath,m.startAt):a0(m,R.fieldPath,m.startAt);E.push(U.value),N&&(N=U.inclusive)}return new ni(E,N)}(u,l),y=function(m,I){const E=[];let N=!0;for(const R of Si(I)){const U=R.kind===0?a0(m,R.fieldPath,m.endAt):o0(m,R.fieldPath,m.endAt);E.push(U.value),N&&(N=U.inclusive)}return new ni(E,N)}(u,l),v=this.hn(l,u,p),k=this.hn(l,u,y),g=this.ln(l,u,d),f=this.fn(l.indexId,h,v,p.inclusive,k,y.inclusive,g);return w.forEach(f,m=>r.H(m,n.limit).next(I=>{I.forEach(E=>{const N=b.fromSegments(E.documentKey);o.has(N)||(o=o.add(N),a.push(N))})}))}).next(()=>a)}return w.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=IP(le.create(e.filters,"and")).map(r=>qp(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}fn(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),u=l/(n!=null?n.length:1),c=[];for(let h=0;h<l;++h){const d=n?this.dn(n[h/u]):Uu,p=this.wn(e,d,r[h%u],i),y=this._n(e,d,s[h%u],o),v=a.map(k=>this.wn(e,d,k,!0));c.push(...this.createRange(p,y,v))}return c}wn(e,n,r,i){const s=new Ai(e,b.empty(),n,r);return i?s:s.Je()}_n(e,n,r,i){const s=new Ai(e,b.empty(),n,r);return i?s.Je():s}an(e,n){const r=new _P(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return w.forEach(i,s=>this.an(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let l=new we($e.comparator),u=!1;for(const c of a.filters)for(const h of c.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:l=l.add(h.field));for(const c of a.orderBy)c.field.isKeyField()||(l=l.add(c.field));return l.size+(u?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(n)&&i.length>1&&r===2?1:r)}mn(e,n){const r=new ia;for(const i of Si(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.He(i.kind);Ci.Ve._e(s,o)}return r.Qe()}dn(e){const n=new ia;return Ci.Ve._e(e,n.He(0)),n.Qe()}gn(e,n){const r=new ia;return Ci.Ve._e(Xi(this.databaseId,n),r.He(function(i){const s=Si(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Qe()}ln(e,n,r){if(r===null)return[];let i=[];i.push(new ia);let s=0;for(const o of Si(e)){const a=r[s++];for(const l of i)if(this.yn(n,o.fieldPath)&&_l(a))i=this.pn(i,o,a);else{const u=l.He(o.kind);Ci.Ve._e(a,u)}}return this.In(i)}hn(e,n,r){return this.ln(e,n,r.position)}In(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Qe();return n}pn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new ia;l.seed(a.Qe()),Ci.Ve._e(o,l.He(n.kind)),s.push(l)}return s}yn(e,n){return!!e.filters.find(r=>r instanceof ee&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Vu(e),i=oa(e);return(n?r.j("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.j()).next(s=>{const o=[];return w.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(u,c){const h=c?new Qc(c.sequenceNumber,new Zt(ns(c.readTime),new b($n(c.documentKey)),c.largestBatchId)):Qc.empty(),d=u.fields.map(([p,y])=>new sR($e.fromServerFormat(p),y));return new hS(u.indexId,u.collectionGroup,d,h)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:K(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Vu(e),s=oa(e);return this.Tn(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>w.forEach(a,l=>s.put(I0(l.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return w.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?w.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),w.forEach(a,l=>this.En(e,i,l).next(u=>{const c=this.An(s,l);return u.isEqual(c)?w.resolve():this.vn(e,s,l,u,c)}))))})}Rn(e,n,r,i){return sa(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.gn(r,n.key),documentKey:n.key.path.toArray()})}Pn(e,n,r,i){return sa(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.gn(r,n.key),n.key.path.toArray()])}En(e,n,r){const i=sa(e);let s=new we(Sr);return i.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.gn(r,n)])},(o,a)=>{s=s.add(new Ai(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}An(e,n){let r=new we(Sr);const i=this.mn(n,e);if(i==null)return r;const s=Fp(n);if(s!=null){const o=e.data.field(s.fieldPath);if(_l(o))for(const a of o.arrayValue.values||[])r=r.add(new Ai(n.indexId,e.key,this.dn(a),i))}else r=r.add(new Ai(n.indexId,e.key,Uu,i));return r}vn(e,n,r,i,s){C("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,l,u,c,h){const d=a.getIterator(),p=l.getIterator();let y=Es(d),v=Es(p);for(;y||v;){let k=!1,g=!1;if(y&&v){const f=u(y,v);f<0?g=!0:f>0&&(k=!0)}else y!=null?g=!0:k=!0;k?(c(v),v=Es(p)):g?(h(y),y=Es(d)):(y=Es(d),v=Es(p))}}(i,s,Sr,a=>{o.push(this.Rn(e,n,r,a))},a=>{o.push(this.Pn(e,n,r,a))}),w.waitFor(o)}Tn(e){let n=1;return oa(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Sr(o,a)).filter((o,a,l)=>!a||Sr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Sr(o,e),l=Sr(o,n);if(a===0)i[0]=e.Je();else if(a>0&&l<0)i.push(o),i.push(o.Je());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Uu,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Uu,[]];s.push(IDBKeyRange.bound(a,l))}return s}bn(e,n){return Sr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(x0)}getMinOffset(e,n){return w.mapArray(this.cn(n),r=>this.an(e,r).next(i=>i||$())).next(x0)}}function A0(t){return nt(t,"collectionParents")}function sa(t){return nt(t,"indexEntries")}function Vu(t){return nt(t,"indexConfiguration")}function oa(t){return nt(t,"indexState")}function x0(t){z(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Ug(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Zt(e.readTime,e.documentKey,n)}/**
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
 */const N0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Lt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Lt(e,Lt.DEFAULT_COLLECTION_PERCENTILE,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function pT(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.X({range:o},(c,h,d)=>(a++,d.delete()));s.push(l.next(()=>{z(a===1)}));const u=[];for(const c of n.mutations){const h=yS(e,c.key.path,n.batchId);s.push(i.delete(h)),u.push(c.key)}return w.waitFor(s).next(()=>u)}function th(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw $();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Lt.DEFAULT_COLLECTION_PERCENTILE=10,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Lt.DEFAULT=new Lt(41943040,Lt.DEFAULT_COLLECTION_PERCENTILE,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Lt.DISABLED=new Lt(-1,0,0);class Jh{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Vn={}}static de(e,n,r,i){z(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Jh(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Tr(e).X({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=As(e),o=Tr(e);return o.add({}).next(a=>{z(typeof a=="number");const l=new Hg(a,n,r,i),u=function(d,p,y){const v=y.baseMutations.map(g=>Sl(d.fe,g)),k=y.mutations.map(g=>Sl(d.fe,g));return{userId:p,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:v,mutations:k}}(this.serializer,this.userId,l),c=[];let h=new we((d,p)=>K(d.canonicalString(),p.canonicalString()));for(const d of i){const p=yS(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(u)),c.push(s.put(p,hR))}return h.forEach(d=>{c.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Vn[a]=l.keys()}),w.waitFor(c).next(()=>l)})}lookupMutationBatch(e,n){return Tr(e).get(n).next(r=>r?(z(r.userId===this.userId),ki(this.serializer,r)):null)}Sn(e,n){return this.Vn[n]?w.resolve(this.Vn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Vn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Tr(e).X({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(z(a.batchId>=r),s=ki(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Tr(e).X({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Tr(e).j("userMutationsIndex",n).next(r=>r.map(i=>ki(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=rc(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return As(e).X({range:i},(o,a,l)=>{const[u,c,h]=o,d=$n(c);if(u===this.userId&&n.path.isEqual(d))return Tr(e).get(h).next(p=>{if(!p)throw $();z(p.userId===this.userId),s.push(ki(this.serializer,p))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new we(K);const i=[];return n.forEach(s=>{const o=rc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=As(e).X({range:a},(u,c,h)=>{const[d,p,y]=u,v=$n(p);d===this.userId&&s.path.isEqual(v)?r=r.add(y):h.done()});i.push(l)}),w.waitFor(i).next(()=>this.Dn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=rc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new we(K);return As(e).X({range:o},(l,u,c)=>{const[h,d,p]=l,y=$n(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(p)):c.done()}).next(()=>this.Dn(e,a))}Dn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Tr(e).get(s).next(o=>{if(o===null)throw $();z(o.userId===this.userId),r.push(ki(this.serializer,o))}))}),w.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return pT(e.ht,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Cn(n.batchId)}),w.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return w.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return As(e).X({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=$n(s[1]);i.push(l)}else a.done()}).next(()=>{z(i.length===0)})})}containsKey(e,n){return mT(e,this.userId,n)}xn(e){return gT(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function mT(t,e,n){const r=rc(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return As(t).X({range:s,Y:!0},(a,l,u)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function Tr(t){return nt(t,"mutations")}function As(t){return nt(t,"documentMutations")}function gT(t){return nt(t,"mutationQueues")}/**
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
 */class rs{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new rs(0)}static Mn(){return new rs(-1)}}/**
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
 */class TP{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.$n(e).next(n=>{const r=new rs(n.highestTargetId);return n.highestTargetId=r.next(),this.On(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(n=>V.fromTimestamp(new ke(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.$n(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.On(e,i)))}addTargetData(e,n){return this.Fn(e,n).next(()=>this.$n(e).next(r=>(r.targetCount+=1,this.Bn(n,r),this.On(e,r))))}updateTargetData(e,n){return this.Fn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Ss(e).delete(n.targetId)).next(()=>this.$n(e)).next(r=>(z(r.targetCount>0),r.targetCount-=1,this.On(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Ss(e).X((o,a)=>{const l=Ia(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>w.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Ss(e).X((r,i)=>{const s=Ia(i);n(s)})}$n(e){return D0(e).get("targetGlobalKey").next(n=>(z(n!==null),n))}On(e,n){return D0(e).put("targetGlobalKey",n)}Fn(e,n){return Ss(e).put(hT(this.serializer,n))}Bn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.$n(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Ji(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Ss(e).X({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=Ia(a);Ql(n,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=br(e);return n.forEach(o=>{const a=Dt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),w.waitFor(i)}removeMatchingKeys(e,n,r){const i=br(e);return w.forEach(n,s=>{const o=Dt(s.path);return w.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=br(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=br(e);let s=Y();return i.X({range:r,Y:!0},(o,a,l)=>{const u=$n(o[1]),c=new b(u);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=Dt(n.path),i=IDBKeyRange.bound([r],[cS(r)],!1,!0);let s=0;return br(e).X({index:"documentTargetsIndex",Y:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}le(e,n){return Ss(e).get(n).next(r=>r?Ia(r):null)}}function Ss(t){return nt(t,"targets")}function D0(t){return nt(t,"targetGlobal")}function br(t){return nt(t,"targetDocuments")}/**
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
 */function b0([t,e],[n,r]){const i=K(t,n);return i===0?K(e,r):i}class kP{constructor(e){this.Ln=e,this.buffer=new we(b0),this.qn=0}Un(){return++this.qn}Kn(e){const n=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();b0(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class CP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}Qn(e){C("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){pi(n)?C("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await fi(n)}await this.Qn(3e5)})}}class AP{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.zn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return w.resolve(Ut.ct);const r=new kP(n);return this.jn.forEachTarget(e,i=>r.Kn(i.sequenceNumber)).next(()=>this.jn.Wn(e,i=>r.Kn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(C("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(N0)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),N0):this.Hn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,n){let r,i,s,o,a,l,u;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),$p()<=ne.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${h} documents in `+(u-l)+`ms
Total Duration: ${u-c}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function xP(t,e){return new AP(t,e)}/**
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
 */class NP{constructor(e,n){this.db=e,this.garbageCollector=xP(this,n)}zn(e){const n=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Jn(e){let n=0;return this.Wn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Wn(e,n){return this.Yn(e,(r,i)=>n(i))}addReference(e,n,r){return zu(e,r)}removeReference(e,n,r){return zu(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return zu(e,n)}Xn(e,n){return function(r,i){let s=!1;return gT(r).Z(o=>mT(r,o,i).next(a=>(a&&(s=!0),w.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Yn(e,(o,a)=>{if(a<=n){const l=this.Xn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,V.min()),br(e).delete([0,Dt(o.path)])))});i.push(l)}}).next(()=>w.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return zu(e,n)}Yn(e,n){const r=br(e);let i,s=Ut.ct;return r.X({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==Ut.ct&&n(new b($n(i)),s),s=u,i=l):s=Ut.ct}).next(()=>{s!==Ut.ct&&n(new b($n(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function zu(t,e){return br(t).put(function(n,r){return{targetId:0,path:Dt(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
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
 */class yT{constructor(){this.changes=new mi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ye.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?w.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class DP{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return wi(e).put(r)}removeEntry(e,n,r){return wi(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Zc(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Zn(e,r)))}getEntry(e,n){let r=ye.newInvalidDocument(n);return wi(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(aa(n))},(i,s)=>{r=this.ts(n,s)}).next(()=>r)}es(e,n){let r={size:0,document:ye.newInvalidDocument(n)};return wi(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(aa(n))},(i,s)=>{r={document:this.ts(n,s),size:th(s)}}).next(()=>r)}getEntries(e,n){let r=zt();return this.ns(e,n,(i,s)=>{const o=this.ts(i,s);r=r.insert(i,o)}).next(()=>r)}ss(e,n){let r=zt(),i=new fe(b.comparator);return this.ns(e,n,(s,o)=>{const a=this.ts(s,o);r=r.insert(s,a),i=i.insert(s,th(o))}).next(()=>({documents:r,rs:i}))}ns(e,n,r){if(n.isEmpty())return w.resolve();let i=new we(O0);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(aa(i.first()),aa(i.last())),o=i.getIterator();let a=o.getNext();return wi(e).X({index:"documentKeyIndex",range:s},(l,u,c)=>{const h=b.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&O0(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?c.G(aa(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i){const s=n.path,o=[s.popLast().toArray(),s.lastSegment(),Zc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return wi(e).j(IDBKeyRange.bound(o,a,!0)).next(l=>{let u=zt();for(const c of l){const h=this.ts(b.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);h.isFoundDocument()&&(Xl(n,h)||i.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,n,r,i){let s=zt();const o=P0(n,r),a=P0(n,Zt.max());return wi(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,c)=>{const h=this.ts(b.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new bP(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return R0(e).get("remoteDocumentGlobalKey").next(n=>(z(!!n),n))}Zn(e,n){return R0(e).put("remoteDocumentGlobalKey",n)}ts(e,n){if(n){const r=pP(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(V.min())))return r}return ye.newInvalidDocument(e)}}function vT(t){return new DP(t)}class bP extends yT{constructor(e,n){super(),this.os=e,this.trackRemovals=n,this.us=new mi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new we((s,o)=>K(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.us.get(s);if(n.push(this.os.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=w0(this.os.serializer,o);i=i.add(s.path.popLast());const u=th(l);r+=u-a.size,n.push(this.os.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=w0(this.os.serializer,o.convertToNoDocument(V.min()));n.push(this.os.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.os.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.os.updateMetadata(e,r)),w.waitFor(n)}getFromCache(e,n){return this.os.es(e,n).next(r=>(this.us.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.os.ss(e,n).next(({documents:r,rs:i})=>(i.forEach((s,o)=>{this.us.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function R0(t){return nt(t,"remoteDocumentGlobal")}function wi(t){return nt(t,"remoteDocumentsV14")}function aa(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function P0(t,e){const n=e.documentKey.path.toArray();return[t,Zc(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function O0(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=K(n[s],r[s]),i)return i;return i=K(n.length,r.length),i||(i=K(n[n.length-2],r[r.length-2]),i||K(n[n.length-1],r[r.length-1]))}/**
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
 */class RP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class wT{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ma(r.mutation,i,Vt.empty(),ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Y()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Y()){const i=Fn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=wa();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Fn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Y()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=zt();const o=La(),a=La();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof gr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Ma(c.mutation,u,c.mutation.getFieldMask(),ke.now())):o.set(u.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new RP(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=La();let i=new fe((o,a)=>o-a),s=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Vt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||Y()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=FS();c.forEach(d=>{if(!s.has(d)){const p=GS(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return w.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return b.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):qg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):w.resolve(Fn());let a=-1,l=s;return o.next(u=>w.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?w.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,Y())).next(c=>({batchId:a,changes:$S(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new b(n)).next(r=>{let i=wa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=wa();return this.indexManager.getCollectionParents(e,i).next(o=>w.forEach(o,a=>{const l=function(u,c){return new mr(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,ye.newInvalidDocument(u)))});let o=wa();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Ma(u.mutation,l,Vt.empty(),ke.now()),Xl(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class PP{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return w.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:Fe(r.createTime)}),w.resolve()}getNamedQuery(e,n){return w.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:Zg(r.bundledQuery),readTime:Fe(r.readTime)}}(n)),w.resolve()}}/**
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
 */class OP{constructor(){this.overlays=new fe(b.comparator),this.ls=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fn();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),w.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),w.resolve()}getOverlaysForCollection(e,n,r){const i=Fn(),s=n.length+1,o=new b(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return w.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new fe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Fn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Fn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return w.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Qg(n,r));let s=this.ls.get(n);s===void 0&&(s=Y(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
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
 */class ny{constructor(){this.fs=new we(Ke.ds),this.ws=new we(Ke._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new Ke(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new b(new re([])),r=new Ke(n,e),i=new Ke(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new b(new re([])),r=new Ke(n,e),i=new Ke(n,e+1);let s=Y();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ke(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return b.comparator(e.key,n.key)||K(e.As,n.As)}static _s(e,n){return K(e.As,n.As)||b.comparator(e.key,n.key)}}/**
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
 */class LP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new we(Ke.ds)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Hg(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Ke(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return w.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),i=new Ke(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),w.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new we(K);return n.forEach(i=>{const s=new Ke(i,0),o=new Ke(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),w.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;b.isDocumentKey(s)||(s=s.child(""));const o=new Ke(new b(s),0);let a=new we(K);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),w.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){z(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return w.forEach(n.mutations,i=>{const s=new Ke(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new Ke(n,0),i=this.Rs.firstAfterOrEqual(r);return w.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class MP{constructor(e){this.Ds=e,this.docs=new fe(b.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return w.resolve(r?r.document.mutableCopy():ye.newInvalidDocument(n))}getEntries(e,n){let r=zt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ye.newInvalidDocument(i))}),w.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=zt();const o=n.path,a=new b(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Ug(fS(c),r)<=0||(i.has(c.key)||Xl(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return w.resolve(s)}getAllFromCollectionGroup(e,n,r,i){$()}Cs(e,n){return w.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new $P(this)}getSize(e){return w.resolve(this.size)}}class $P extends yT{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),w.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class FP{constructor(e){this.persistence=e,this.xs=new mi(n=>Ji(n),Ql),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.Ns=0,this.ks=new ny,this.targetCount=0,this.Ms=rs.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),w.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new rs(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.Fn(n),w.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),w.waitFor(s).next(()=>i)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return w.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),w.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),w.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),w.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return w.resolve(r)}containsKey(e,n){return w.resolve(this.ks.containsKey(n))}}/**
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
 */class _T{constructor(e,n){this.$s={},this.overlays={},this.Os=new Ut(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new FP(this),this.indexManager=new EP,this.remoteDocumentCache=function(r){return new MP(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new cT(n),this.qs=new PP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new OP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new LP(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){C("MemoryPersistence","Starting transaction:",e);const i=new UP(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return w.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class UP extends mS{constructor(e){super(),this.currentSequenceNumber=e}}class Zh{constructor(e){this.persistence=e,this.Qs=new ny,this.js=null}static zs(e){return new Zh(e)}get Ws(){if(this.js)return this.js;throw $()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),w.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),w.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Ws,r=>{const i=b.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,V.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return w.or([()=>w.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class VP{constructor(e){this.serializer=e}O(e,n,r,i){const s=new Gh("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Yw,{unique:!0}),a.createObjectStore("documentMutations")}(e),L0(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=w.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),L0(e)),o=o.next(()=>function(a){const l=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:V.min().toTimestamp(),targetCount:0};return l.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,l){return l.store("mutations").j().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Yw,{unique:!0});const c=l.store("mutations"),h=u.map(d=>c.put(d));return w.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Ys(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(s)))),r<7&&i>=7&&(o=o.next(()=>this.Zs(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ei(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const l=a.createObjectStore("documentOverlays",{keyPath:SR});l.createIndex("collectionPathOverlayIndex",TR,{unique:!1}),l.createIndex("collectionGroupOverlayIndex",kR,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const l=a.createObjectStore("remoteDocumentsV14",{keyPath:dR});l.createIndex("documentKeyIndex",fR),l.createIndex("collectionGroupIndex",pR)}(e)).next(()=>this.ni(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:wR}).createIndex("sequenceNumberIndex",_R,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:IR}).createIndex("documentKeyIndex",ER,{unique:!1})}(e))),o}Xs(e){let n=0;return e.store("remoteDocuments").X((r,i)=>{n+=th(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Ys(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.j().next(i=>w.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>w.forEach(a,l=>{z(l.userId===s.userId);const u=ki(this.serializer,l);return pT(e,s.userId,u).next(()=>{})}))}))}Zs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.X((o,a)=>{const l=new re(o),u=function(c){return[0,Dt(c)]}(l);s.push(n.get(u).next(c=>c?w.resolve():(h=>n.put({targetId:0,path:Dt(h),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>w.waitFor(s))})}ti(e,n){e.createObjectStore("collectionParents",{keyPath:vR});const r=n.store("collectionParents"),i=new ty,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Dt(l)})}};return n.store("remoteDocuments").X({Y:!0},(o,a)=>{const l=new re(o);return s(l.popLast())}).next(()=>n.store("documentMutations").X({Y:!0},([o,a,l],u)=>{const c=$n(a);return s(c.popLast())}))}ei(e){const n=e.store("targets");return n.X((r,i)=>{const s=Ia(i),o=hT(this.serializer,s);return n.put(o)})}ni(e,n){const r=n.store("remoteDocuments"),i=[];return r.X((s,o)=>{const a=n.store("remoteDocumentsV14"),l=(u=o,u.document?new b(re.fromString(u.document.name).popFirst(5)):u.noDocument?b.fromSegments(u.noDocument.path):u.unknownDocument?b.fromSegments(u.unknownDocument.path):$()).path.toArray();var u;/**
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
*/const c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>w.waitFor(i))}si(e,n){const r=n.store("mutations"),i=vT(this.serializer),s=new _T(Zh.zs,this.serializer.fe);return r.j().next(o=>{const a=new Map;return o.forEach(l=>{var u;let c=(u=a.get(l.userId))!==null&&u!==void 0?u:Y();ki(this.serializer,l).keys().forEach(h=>c=c.add(h)),a.set(l.userId,c)}),w.forEach(a,(l,u)=>{const c=new Ye(u),h=Xh.de(this.serializer,c),d=s.getIndexManager(c),p=Jh.de(c,this.serializer,d,s.referenceDelegate);return new wT(i,p,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Up(n,Ut.ct),l).next()})})}}function L0(t){t.createObjectStore("targetDocuments",{keyPath:gR}).createIndex("documentTargetsIndex",yR,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",mR,{unique:!0}),t.createObjectStore("targetGlobal")}const ff="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ry{constructor(e,n,r,i,s,o,a,l,u,c,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ii=s,this.window=o,this.document=a,this.ri=u,this.oi=c,this.ui=h,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=d=>Promise.resolve(),!ry.D())throw new T(_.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new NP(this,i),this.di=n+"main",this.serializer=new cT(l),this.wi=new vn(this.di,this.ui,new VP(this.serializer)),this.Bs=new TP(this.referenceDelegate,this.serializer),this.remoteDocumentCache=vT(this.serializer),this.qs=new mP,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,c===!1&&Me("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new T(_.FAILED_PRECONDITION,ff);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new Ut(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Bu(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(n=>{n||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(n=>this.isPrimary&&!n?this.Ai(e).next(()=>!1):!!n&&this.vi(e).next(()=>!0))).catch(e=>{if(pi(e))return C("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return C("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return la(e).get("owner").next(n=>w.resolve(this.Ri(n)))}Pi(e){return Bu(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=nt(n,"clientMetadata");return r.j().next(i=>{const s=this.Si(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return w.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const n of e)this._i.removeItem(this.Di(n.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?w.resolve(!0):la(e).get("owner").next(n=>{if(n!==null&&this.Vi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)){if(this.Ri(n)&&this.networkEnabled)return!0;if(!this.Ri(n)){if(!n.allowTabSynchronization)throw new T(_.FAILED_PRECONDITION,ff);return!1}}return!(!this.networkEnabled||!this.inForeground)||Bu(e).j().next(r=>this.Si(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&C("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Up(e,Ut.ct);return this.Ai(n).next(()=>this.Pi(n))}),this.wi.close(),this.Mi()}Si(e,n){return e.filter(r=>this.Vi(r.updateTimeMs,n)&&!this.Ci(r.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>Bu(e).j().next(n=>this.Si(n,18e5).map(r=>r.clientId)))}get started(){return this.Fs}getMutationQueue(e,n){return Jh.de(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new SP(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return Xh.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,n,r){C("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.ui)===15?AR:o===14?_S:o===13?wS:o===12?CR:o===11?vS:void $();var o;let a;return this.wi.runTransaction(e,i,s,l=>(a=new Up(l,this.Os?this.Os.next():Ut.ct),n==="readwrite-primary"?this.Ti(a).next(u=>!!u||this.Ei(a)).next(u=>{if(!u)throw Me(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new T(_.FAILED_PRECONDITION,pS);return r(a)}).next(u=>this.vi(a).next(()=>u)):this.Oi(a).next(()=>r(a)))).then(l=>(a.raiseOnCommittedEvent(),l))}Oi(e){return la(e).get("owner").next(n=>{if(n!==null&&this.Vi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)&&!this.Ri(n)&&!(this.oi||this.allowTabSynchronization&&n.allowTabSynchronization))throw new T(_.FAILED_PRECONDITION,ff)})}vi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return la(e).put("owner",n)}static D(){return vn.D()}Ai(e){const n=la(e);return n.get("owner").next(r=>this.Ri(r)?(C("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):w.resolve())}Vi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Me(`Detected an update time that is in the future: ${e} > ${r}`),!1))}gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;pN()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var n;try{const r=((n=this._i)===null||n===void 0?void 0:n.getItem(this.Di(e)))!==null;return C("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Me("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){Me("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch{}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function la(t){return nt(t,"owner")}function Bu(t){return nt(t,"clientMetadata")}function iy(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class sy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=Y(),i=Y();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new sy(e,n.fromCache,r,i)}}/**
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
 */class IT{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(l0(n))return w.resolve(null);let r=Wt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Jc(n,null,"F"),r=Wt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Y(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,Jc(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return l0(n)||i.isEqual(V.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):($p()<=ne.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Gp(n)),this.Wi(e,o,n,dS(i,-1)))})}ji(e,n){let r=new we(LS(e));return n.forEach((i,s)=>{Xl(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return $p()<=ne.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",Gp(n)),this.Ui.getDocumentsMatchingQuery(e,n,Zt.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class zP{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new fe(K),this.Yi=new mi(s=>Ji(s),Ql),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wT(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function ET(t,e,n,r){return new zP(t,e,n,r)}async function ST(t,e){const n=P(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Y();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function BP(t,e){const n=P(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=w.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(y=>{const v=l.docVersions.get(p);z(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Y();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function TT(t){const e=P(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function jP(t,e){const n=P(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(Ge.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(y,v,k){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(d,p,c)&&a.push(n.Bs.updateTargetData(s,p))});let l=zt(),u=Y();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(kT(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual(V.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return w.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function kT(t,e,n){let r=Y(),i=Y();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=zt();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(V.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):C("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function qP(t,e){const n=P(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function yo(t,e){const n=P(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,w.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function vo(t,e,n){const r=P(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!pi(o))throw o;C("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function nh(t,e,n){const r=P(t);let i=V.min(),s=Y();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=P(a),h=c.Yi.get(u);return h!==void 0?w.resolve(c.Ji.get(h)):c.Bs.getTargetData(l,u)}(r,o,Wt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:V.min(),n?s:Y())).next(a=>(xT(r,OS(e),a),{documents:a,ir:s})))}function CT(t,e){const n=P(t),r=P(n.Bs),i=n.Ji.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.le(s,e).next(o=>o?o.target:null))}function AT(t,e){const n=P(t),r=n.Xi.get(e)||V.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Zi.getAllFromCollectionGroup(i,e,dS(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(xT(n,e,i),i))}function xT(t,e,n){let r=t.Xi.get(e)||V.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}async function WP(t,e,n,r){const i=P(t);let s=Y(),o=zt();for(const u of n){const c=e.rr(u.metadata.name);u.document&&(s=s.add(c));const h=e.ur(u);h.setReadTime(e.cr(u.metadata.readTime)),o=o.insert(c,h)}const a=i.Zi.newChangeBuffer({trackRemovals:!0}),l=await yo(i,function(u){return Wt(Ro(re.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>kT(u,a,o).next(c=>(a.apply(u),c)).next(c=>i.Bs.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.Bs.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,c.nr,c.sr)).next(()=>c.nr)))}async function GP(t,e,n=Y()){const r=await yo(t,Wt(Zg(e.bundledQuery))),i=P(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Fe(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.qs.saveNamedQuery(s,e);const a=r.withResumeToken(Ge.EMPTY_BYTE_STRING,o);return i.Ji=i.Ji.insert(a.targetId,a),i.Bs.updateTargetData(s,a).next(()=>i.Bs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Bs.addMatchingKeys(s,n,r.targetId)).next(()=>i.qs.saveNamedQuery(s,e))})}function M0(t,e){return`firestore_clients_${t}_${e}`}function $0(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function pf(t,e){return`firestore_targets_${t}_${e}`}class rh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static ar(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new T(i.error.code,i.error.message))),o?new rh(e,n,i.state,s):(Me("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class $a{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static ar(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new T(r.error.code,r.error.message))),s?new $a(e,r.state,i):(Me("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ih{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static ar(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Wg();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=gS(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new ih(e,s):(Me("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class oy{constructor(e,n){this.clientId=e,this.onlineState=n}static ar(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new oy(n.clientId,n.onlineState):(Me("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Zp{constructor(){this.activeTargetIds=Wg()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mf{constructor(e,n,r,i,s){this.window=e,this.ii=n,this.persistenceKey=r,this.wr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new fe(K),this.started=!1,this.yr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.pr=M0(this.persistenceKey,this.wr),this.Ir=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.gr=this.gr.insert(this.wr,new Zp),this.Tr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const r of e){if(r===this.wr)continue;const i=this.getItem(M0(this.persistenceKey,r));if(i){const s=ih.ar(r,i);s&&(this.gr=this.gr.insert(s.clientId,s))}}this.Pr();const n=this.storage.getItem(this.vr);if(n){const r=this.br(n);r&&this.Vr(r)}for(const r of this.yr)this.mr(r);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let n=!1;return this.gr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,n,r){this.Dr(e,n,r),this.Cr(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(pf(this.persistenceKey,e));if(r){const i=$a.ar(e,r);i&&(n=i.state)}}return this.Nr.lr(e),this.Pr(),n}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(pf(this.persistenceKey,e))}updateQueryState(e,n,r){this.kr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Cr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return C("SharedClientState","READ",e,n),n}setItem(e,n){C("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){C("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const n=e;if(n.storageArea===this.storage){if(C("SharedClientState","EVENT",n.key,n.newValue),n.key===this.pr)return void Me("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Tr.test(n.key)){if(n.newValue==null){const r=this.Or(n.key);return this.Fr(r,null)}{const r=this.Br(n.key,n.newValue);if(r)return this.Fr(r.clientId,r)}}else if(this.Er.test(n.key)){if(n.newValue!==null){const r=this.Lr(n.key,n.newValue);if(r)return this.qr(r)}}else if(this.Ar.test(n.key)){if(n.newValue!==null){const r=this.Ur(n.key,n.newValue);if(r)return this.Kr(r)}}else if(n.key===this.vr){if(n.newValue!==null){const r=this.br(n.newValue);if(r)return this.Vr(r)}}else if(n.key===this.Ir){const r=function(i){let s=Ut.ct;if(i!=null)try{const o=JSON.parse(i);z(typeof o=="number"),s=o}catch(o){Me("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==Ut.ct&&this.sequenceNumberHandler(r)}else if(n.key===this.Rr){const r=this.Gr(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Qr(i)))}}}else this.yr.push(n)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,n,r){const i=new rh(this.currentUser,e,n,r),s=$0(this.persistenceKey,this.currentUser,e);this.setItem(s,i.hr())}Cr(e){const n=$0(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Mr(e){const n={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(n))}kr(e,n,r){const i=pf(this.persistenceKey,e),s=new $a(e,n,r);this.setItem(i,s.hr())}$r(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Rr,n)}Or(e){const n=this.Tr.exec(e);return n?n[1]:null}Br(e,n){const r=this.Or(e);return ih.ar(r,n)}Lr(e,n){const r=this.Er.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return rh.ar(new Ye(s),i,n)}Ur(e,n){const r=this.Ar.exec(e),i=Number(r[1]);return $a.ar(i,n)}br(e){return oy.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);C("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,n){const r=n?this.gr.insert(e,n):this.gr.remove(e),i=this.Sr(this.gr),s=this.Sr(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.Wr(o,a).then(()=>{this.gr=r})}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let n=Wg();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class NT{constructor(){this.Hr=new Zp,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Zp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class HP{Yr(e){}shutdown(){}}/**
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
 */class F0{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ju=null;function gf(){return ju===null?ju=268435456+Math.round(2147483648*Math.random()):ju++,"0x"+ju.toString(16)}/**
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
 */const KP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class QP{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const vt="WebChannelConnection";class YP extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=gf(),a=this.To(e,n);C("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(C("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Tn("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+bo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=KP[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=gf();return new Promise((o,a)=>{const l=new Gb;l.setWithCredentials(!0),l.listenOnce(jb.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case hf.NO_ERROR:const c=l.getResponseJson();C(vt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case hf.TIMEOUT:C(vt,`RPC '${e}' ${s} timed out`),a(new T(_.DEADLINE_EXCEEDED,"Request time out"));break;case hf.HTTP_ERROR:const h=l.getStatus();if(C(vt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const y=function(v){const k=v.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(k)>=0?k:_.UNKNOWN}(p.status);a(new T(y,p.message))}else a(new T(_.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new T(_.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{C(vt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);C(vt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=gf(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=zb(),a=Bb(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new Wb({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");C(vt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,p=!1;const y=new QP({ro:k=>{p?C(vt,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(d||(C(vt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),C(vt,`RPC '${e}' stream ${i} sending:`,k),h.send(k))},oo:()=>h.close()}),v=(k,g,f)=>{k.listen(g,m=>{try{f(m)}catch(I){setTimeout(()=>{throw I},0)}})};return v(h,Mu.EventType.OPEN,()=>{p||C(vt,`RPC '${e}' stream ${i} transport opened.`)}),v(h,Mu.EventType.CLOSE,()=>{p||(p=!0,C(vt,`RPC '${e}' stream ${i} transport closed`),y.wo())}),v(h,Mu.EventType.ERROR,k=>{p||(p=!0,Tn(vt,`RPC '${e}' stream ${i} transport errored:`,k),y.wo(new T(_.UNAVAILABLE,"The operation could not be completed")))}),v(h,Mu.EventType.MESSAGE,k=>{var g;if(!p){const f=k.data[0];z(!!f);const m=f,I=m.error||((g=m[0])===null||g===void 0?void 0:g.error);if(I){C(vt,`RPC '${e}' stream ${i} received error:`,I);const E=I.status;let N=function(U){const oe=Ve[U];if(oe!==void 0)return QS(oe)}(E),R=I.message;N===void 0&&(N=_.INTERNAL,R="Unknown error status: "+E+" with message "+I.message),p=!0,y.wo(new T(N,R)),h.close()}else C(vt,`RPC '${e}' stream ${i} received:`,f),y._o(f)}}),v(a,qb.STAT_EVENT,k=>{k.stat===Gw.PROXY?C(vt,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===Gw.NOPROXY&&C(vt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.fo()},0),y}}/**
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
 */function DT(){return typeof window<"u"?window:null}function lc(){return typeof document<"u"?document:null}/**
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
 */function tu(t){return new iP(t,!0)}/**
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
 */class ay{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&C("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class bT{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new ay(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Me(n.toString()),Me("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new T(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return C("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class XP extends bT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=aP(this.serializer,e),r=function(i){if(!("targetChange"in i))return V.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?V.min():s.readTime?Fe(s.readTime):V.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=El(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Yc(a)?{documents:iT(i,a)}:{query:sT(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=ZS(i,s.resumeToken);const l=Hp(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(V.min())>0){o.readTime=go(i,s.snapshotVersion.toTimestamp());const l=Hp(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=uP(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=El(this.serializer),n.removeTarget=e,this.Wo(n)}}class JP extends bT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=lP(e.writeResults,e.commitTime),r=Fe(e.commitTime);return this.listener.cu(r,n)}return z(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=El(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Sl(this.serializer,r))};this.Wo(n)}}/**
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
 */class ZP extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new T(_.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new T(_.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new T(_.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class eO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Me(n),this.mu=!1):C("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class tO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{gi(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=P(a);l.vu.add(4),await Lo(l),l.bu.set("Unknown"),l.vu.delete(4),await nu(l)}(this))})}),this.bu=new eO(r,i)}}async function nu(t){if(gi(t))for(const e of t.Ru)await e(!0)}async function Lo(t){for(const e of t.Ru)await e(!1)}function ed(t,e){const n=P(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),cy(n)?uy(n):$o(n).Ko()&&ly(n,e))}function Tl(t,e){const n=P(t),r=$o(n);n.Au.delete(e),r.Ko()&&RT(n,e),n.Au.size===0&&(r.Ko()?r.jo():gi(n)&&n.bu.set("Unknown"))}function ly(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(V.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}$o(t).su(e)}function RT(t,e){t.Vu.qt(e),$o(t).iu(e)}function uy(t){t.Vu=new eP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),$o(t).start(),t.bu.gu()}function cy(t){return gi(t)&&!$o(t).Uo()&&t.Au.size>0}function gi(t){return P(t).vu.size===0}function PT(t){t.Vu=void 0}async function nO(t){t.Au.forEach((e,n)=>{ly(t,e)})}async function rO(t,e){PT(t),cy(t)?(t.bu.Iu(e),uy(t)):t.bu.set("Unknown")}async function iO(t,e,n){if(t.bu.set("Online"),e instanceof JS&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){C("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await sh(t,r)}else if(e instanceof ac?t.Vu.Ht(e):e instanceof XS?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(V.min()))try{const r=await TT(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(Ge.EMPTY_BYTE_STRING,u.snapshotVersion)),RT(i,a);const c=new tr(u.target,a,l,u.sequenceNumber);ly(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){C("RemoteStore","Failed to raise snapshot:",r),await sh(t,r)}}async function sh(t,e,n){if(!pi(e))throw e;t.vu.add(1),await Lo(t),t.bu.set("Offline"),n||(n=()=>TT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await nu(t)})}function OT(t,e){return e().catch(n=>sh(t,n,e))}async function Mo(t){const e=P(t),n=ri(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;sO(e);)try{const i=await qP(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,oO(e,i)}catch(i){await sh(e,i)}LT(e)&&MT(e)}function sO(t){return gi(t)&&t.Eu.length<10}function oO(t,e){t.Eu.push(e);const n=ri(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function LT(t){return gi(t)&&!ri(t).Uo()&&t.Eu.length>0}function MT(t){ri(t).start()}async function aO(t){ri(t).hu()}async function lO(t){const e=ri(t);for(const n of t.Eu)e.uu(n.mutations)}async function uO(t,e,n){const r=t.Eu.shift(),i=Kg.from(r,e,n);await OT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Mo(t)}async function cO(t,e){e&&ri(t).ou&&await async function(n,r){if(i=r.code,KS(i)&&i!==_.ABORTED){const s=n.Eu.shift();ri(n).Qo(),await OT(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Mo(n)}var i}(t,e),LT(t)&&MT(t)}async function U0(t,e){const n=P(t);n.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const r=gi(n);n.vu.add(3),await Lo(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await nu(n)}async function em(t,e){const n=P(t);e?(n.vu.delete(2),await nu(n)):e||(n.vu.add(2),await Lo(n),n.bu.set("Unknown"))}function $o(t){return t.Su||(t.Su=function(e,n,r){const i=P(e);return i.fu(),new XP(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:nO.bind(null,t),ao:rO.bind(null,t),nu:iO.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),cy(t)?uy(t):t.bu.set("Unknown")):(await t.Su.stop(),PT(t))})),t.Su}function ri(t){return t.Du||(t.Du=function(e,n,r){const i=P(e);return i.fu(),new JP(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:aO.bind(null,t),ao:cO.bind(null,t),au:lO.bind(null,t),cu:uO.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Mo(t)):(await t.Du.stop(),t.Eu.length>0&&(C("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class hy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ze,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new hy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new T(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fo(t,e){if(Me("AsyncQueue",`${e}: ${t}`),pi(t))return new T(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Xs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||b.comparator(n.key,r.key):(n,r)=>b.comparator(n.key,r.key),this.keyedMap=wa(),this.sortedSet=new fe(this.comparator)}static emptySet(e){return new Xs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Xs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class V0{constructor(){this.Cu=new fe(b.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):$():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class wo{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new wo(e,n,Xs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class hO{constructor(){this.Nu=void 0,this.listeners=[]}}class dO{constructor(){this.queries=new mi(e=>PS(e),Yl),this.onlineState="Unknown",this.ku=new Set}}async function dy(t,e){const n=P(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new hO),i)try{s.Nu=await n.onListen(r)}catch(o){const a=Fo(o,`Initialization of query '${Gp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&py(n)}async function fy(t,e){const n=P(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function fO(t,e){const n=P(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&py(n)}function pO(t,e,n){const r=P(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function py(t){t.ku.forEach(e=>{e.next()})}class my{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new wo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=wo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class mO{constructor(e,n){this.Gu=e,this.byteLength=n}Qu(){return"metadata"in this.Gu}}/**
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
 */class z0{constructor(e){this.serializer=e}rr(e){return jn(this.serializer,e)}ur(e){return e.metadata.exists?rT(this.serializer,e.document,!1):ye.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return Fe(e)}}class gO{constructor(e,n,r){this.ju=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=$T(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++n;const r=re.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}Wu(e){const n=new Map,r=new z0(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.rr(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||Y()).add(s);n.set(o,a)}}return n}async complete(){const e=await WP(this.localStore,new z0(this.serializer),this.documents,this.ju.id),n=this.Wu(this.documents);for(const r of this.queries)await GP(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function $T(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class FT{constructor(e){this.key=e}}class UT{constructor(e){this.key=e}}class VT{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Y(),this.mutatedKeys=Y(),this.tc=LS(e),this.ec=new Xs(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new V0,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=Xl(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let k=!1;d&&p?d.data.isEqual(p.data)?y!==v&&(r.track({type:3,doc:p}),k=!0):this.rc(d,p)||(r.track({type:2,doc:p}),k=!0,(l&&this.tc(p,l)>0||u&&this.tc(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),k=!0):d&&!p&&(r.track({type:1,doc:d}),k=!0,(l||u)&&(a=!0)),k&&(p?(o=o.add(p),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(h,d){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return p(h)-p(d)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new wo(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new V0,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=Y(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new UT(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new FT(r))}),n}hc(e){this.Yu=e.ir,this.Zu=Y();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return wo.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class yO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class vO{constructor(e){this.key=e,this.fc=!1}}class wO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new mi(a=>PS(a),Yl),this._c=new Map,this.mc=new Set,this.gc=new fe(b.comparator),this.yc=new Map,this.Ic=new ny,this.Tc={},this.Ec=new Map,this.Ac=rs.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function _O(t,e){const n=_y(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await yo(n.localStore,Wt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await gy(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&ed(n.remoteStore,o)}return i}async function gy(t,e,n,r,i){t.Rc=(h,d,p)=>async function(y,v,k,g){let f=v.view.sc(k);f.zi&&(f=await nh(y.localStore,v.query,!1).then(({documents:E})=>v.view.sc(E,f)));const m=g&&g.targetChanges.get(v.targetId),I=v.view.applyChanges(f,y.isPrimaryClient,m);return tm(y,v.targetId,I.cc),I.snapshot}(t,h,d,p);const s=await nh(t.localStore,e,!0),o=new VT(e,s.ir),a=o.sc(s.documents),l=eu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);tm(t,n,u.cc);const c=new yO(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function IO(t,e){const n=P(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Yl(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await vo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Tl(n.remoteStore,r.targetId),_o(n,r.targetId)}).catch(fi)):(_o(n,r.targetId),await vo(n.localStore,r.targetId,!0))}async function EO(t,e,n){const r=Iy(t);try{const i=await function(s,o){const a=P(s),l=ke.now(),u=o.reduce((d,p)=>d.add(p.key),Y());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=zt(),y=Y();return a.Zi.getEntries(d,u).next(v=>{p=v,p.forEach((k,g)=>{g.isValidDocument()||(y=y.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(v=>{c=v;const k=[];for(const g of o){const f=XR(g,c.get(g.key).overlayedDocument);f!=null&&k.push(new gr(g.key,f,TS(f.value.mapValue),Te.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,k,o)}).next(v=>{h=v;const k=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,v.batchId,k)})}).then(()=>({batchId:h.batchId,changes:$S(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new fe(K)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await yr(r,i.changes),await Mo(r.remoteStore)}catch(i){const s=Fo(i,"Failed to persist write");n.reject(s)}}async function zT(t,e){const n=P(t);try{const r=await jP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?z(o.fc):i.removedDocuments.size>0&&(z(o.fc),o.fc=!1))}),await yr(n,r,e)}catch(r){await fi(r)}}function B0(t,e,n){const r=P(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=P(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Mu(o)&&(l=!0)}),l&&py(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function SO(t,e,n){const r=P(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new fe(b.comparator);o=o.insert(s,ye.newNoDocument(s,V.min()));const a=Y().add(s),l=new Zl(V.min(),new Map,new fe(K),o,a);await zT(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),wy(r)}else await vo(r.localStore,e,!1).then(()=>_o(r,e,n)).catch(fi)}async function TO(t,e){const n=P(t),r=e.batch.batchId;try{const i=await BP(n.localStore,e);vy(n,r,null),yy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await yr(n,i)}catch(i){await fi(i)}}async function kO(t,e,n){const r=P(t);try{const i=await function(s,o){const a=P(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(z(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);vy(r,e,n),yy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await yr(r,i)}catch(i){await fi(i)}}async function CO(t,e){const n=P(t);gi(n.remoteStore)||C("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=P(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Ec.get(r)||[];i.push(e),n.Ec.set(r,i)}catch(r){const i=Fo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function yy(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function vy(t,e,n){const r=P(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function _o(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||BT(t,r)})}function BT(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(Tl(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),wy(t))}function tm(t,e,n){for(const r of n)r instanceof FT?(t.Ic.addReference(r.key,e),AO(t,r)):r instanceof UT?(C("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||BT(t,r.key)):$()}function AO(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(C("SyncEngine","New document in limbo: "+n),t.mc.add(r),wy(t))}function wy(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new b(re.fromString(e)),r=t.Ac.next();t.yc.set(r,new vO(n)),t.gc=t.gc.insert(n,r),ed(t.remoteStore,new tr(Wt(Ro(n.path)),r,"TargetPurposeLimboResolution",Ut.ct))}}async function yr(t,e,n){const r=P(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=sy.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=P(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>w.forEach(l,h=>w.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>w.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!pi(c))throw c;C("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ji.get(h),p=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(p);u.Ji=u.Ji.insert(h,y)}}}(r.localStore,s))}async function xO(t,e){const n=P(t);if(!n.currentUser.isEqual(e)){C("SyncEngine","User change. New user:",e.toKey());const r=await ST(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new T(_.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await yr(n,r.er)}}function NO(t,e){const n=P(t),r=n.yc.get(e);if(r&&r.fc)return Y().add(r.key);{let i=Y();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}async function DO(t,e){const n=P(t),r=await nh(n.localStore,e.query,!0),i=e.view.hc(r);return n.isPrimaryClient&&tm(n,e.targetId,i.cc),i}async function bO(t,e){const n=P(t);return AT(n.localStore,e).then(r=>yr(n,r))}async function RO(t,e,n,r){const i=P(t),s=await function(o,a){const l=P(o),u=P(l.mutationQueue);return l.persistence.runTransaction("Lookup mutation documents","readonly",c=>u.Sn(c,a).next(h=>h?l.localDocuments.getDocuments(c,h):w.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Mo(i.remoteStore):n==="acknowledged"||n==="rejected"?(vy(i,e,r||null),yy(i,e),function(o,a){P(P(o).mutationQueue).Cn(a)}(i.localStore,e)):$(),await yr(i,s)):C("SyncEngine","Cannot apply mutation batch with id: "+e)}async function PO(t,e){const n=P(t);if(_y(n),Iy(n),e===!0&&n.vc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await j0(n,r.toArray());n.vc=!0,await em(n.remoteStore,!0);for(const s of i)ed(n.remoteStore,s)}else if(e===!1&&n.vc!==!1){const r=[];let i=Promise.resolve();n._c.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(_o(n,o),vo(n.localStore,o,!0))),Tl(n.remoteStore,o)}),await i,await j0(n,r),function(s){const o=P(s);o.yc.forEach((a,l)=>{Tl(o.remoteStore,l)}),o.Ic.Ts(),o.yc=new Map,o.gc=new fe(b.comparator)}(n),n.vc=!1,await em(n.remoteStore,!1)}}async function j0(t,e,n){const r=P(t),i=[],s=[];for(const o of e){let a;const l=r._c.get(o);if(l&&l.length!==0){a=await yo(r.localStore,Wt(l[0]));for(const u of l){const c=r.wc.get(u),h=await DO(r,c);h.snapshot&&s.push(h.snapshot)}}else{const u=await CT(r.localStore,o);a=await yo(r.localStore,u),await gy(r,jT(u),o,!1,a.resumeToken)}i.push(a)}return r.dc.nu(s),i}function jT(t){return RS(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function OO(t){const e=P(t);return P(P(e.localStore).persistence).$i()}async function LO(t,e,n,r){const i=P(t);if(i.vc)return void C("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await AT(i.localStore,OS(s[0])),a=Zl.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Ge.EMPTY_BYTE_STRING);await yr(i,o,a);break}case"rejected":await vo(i.localStore,e,!0),_o(i,e,r);break;default:$()}}async function MO(t,e,n){const r=_y(t);if(r.vc){for(const i of e){if(r._c.has(i)){C("SyncEngine","Adding an already active target "+i);continue}const s=await CT(r.localStore,i),o=await yo(r.localStore,s);await gy(r,jT(s),o.targetId,!1,o.resumeToken),ed(r.remoteStore,o)}for(const i of n)r._c.has(i)&&await vo(r.localStore,i,!1).then(()=>{Tl(r.remoteStore,i),_o(r,i)}).catch(fi)}}function _y(t){const e=P(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=zT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=SO.bind(null,e),e.dc.nu=fO.bind(null,e.eventManager),e.dc.Pc=pO.bind(null,e.eventManager),e}function Iy(t){const e=P(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kO.bind(null,e),e}function $O(t,e,n){const r=P(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const p=P(h),y=Fe(d.createTime);return p.persistence.runTransaction("hasNewerBundle","readonly",v=>p.qs.getBundleMetadata(v,d.id)).then(v=>!!v&&v.createTime.compareTo(y)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress($T(a));const l=new gO(a,i.localStore,s.serializer);let u=await s.bc();for(;u;){const h=await l.zu(u);h&&o._updateProgress(h),u=await s.bc()}const c=await l.complete();return await yr(i,c.Ju,void 0),await function(h,d){const p=P(h);return p.persistence.runTransaction("Save bundle","readwrite",y=>p.qs.saveBundleMetadata(y,d))}(i.localStore,a),o._completeWith(c.progress),Promise.resolve(c.Hu)}catch(a){return Tn("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class nm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=tu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return ET(this.persistence,new IT,e.initialUser,this.serializer)}createPersistence(e){return new _T(Zh.zs,this.serializer)}createSharedClientState(e){return new NT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class qT extends nm{constructor(e,n,r){super(),this.Vc=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await Iy(this.Vc.syncEngine),await Mo(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return ET(this.persistence,new IT,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new CP(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new uR(n,this.persistence);return new lR(e.asyncQueue,r)}createPersistence(e){const n=iy(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Lt.withCacheSize(this.cacheSizeBytes):Lt.DEFAULT;return new ry(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,DT(),lc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new NT}}class FO extends qT{constructor(e,n){super(e,n,!1),this.Vc=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Vc.syncEngine;this.sharedClientState instanceof mf&&(this.sharedClientState.syncEngine={jr:RO.bind(null,n),zr:LO.bind(null,n),Wr:MO.bind(null,n),$i:OO.bind(null,n),Qr:bO.bind(null,n)},await this.sharedClientState.start()),await this.persistence.Ii(async r=>{await PO(this.Vc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=DT();if(!mf.D(n))throw new T(_.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=iy(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new mf(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Ey{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>B0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xO.bind(null,this.syncEngine),await em(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new dO}createDatastore(e){const n=tu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new YP(i));var i;return function(s,o,a,l){return new ZP(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>B0(this.syncEngine,a,0),o=F0.D()?new F0:new HP,new tO(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new wO(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=P(e);C("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Lo(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */function q0(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class td{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Me("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class UO{constructor(e,n){this.Cc=e,this.serializer=n,this.metadata=new Ze,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then(r=>{r&&r.Qu()?this.metadata.resolve(r.Gu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Gu)}`))},r=>this.metadata.reject(r))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(e===null)return null;const n=this.xc.decode(e),r=Number(n);isNaN(r)&&this.Mc(`length string (${n}) is not valid number`);const i=await this.$c(r);return new mO(JSON.parse(i),e.length+r)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async kc(){for(;this.Oc()<0&&!await this.Fc(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const n=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Mc(e){throw this.Cc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Fc(){const e=await this.Cc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class VO{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(_.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=P(r),o=El(s.serializer)+"/documents",a={documents:i.map(h=>Il(s.serializer,h))},l=await s.vo("BatchGetDocuments",o,a,i.length),u=new Map;l.forEach(h=>{const d=oP(s.serializer,h);u.set(d.key.toString(),d)});const c=[];return i.forEach(h=>{const d=u.get(h.toString());z(!!d),c.push(d)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Oo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=b.fromPath(r);this.mutations.push(new Gg(i,this.precondition(i)))}),await async function(n,r){const i=P(n),s=El(i.serializer)+"/documents",o={writes:r.map(a=>Sl(i.serializer,a))};await i.Io("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw $();n=V.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new T(_.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(V.min())?Te.exists(!1):Te.updateTime(n):Te.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(V.min()))throw new T(_.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Te.updateTime(n)}return Te.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class zO{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Bc=r.maxAttempts,this.qo=new ay(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{const e=new VO(this.datastore),n=this.qc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Uc(i)}))}).catch(r=>{this.Uc(r)})})}qc(e){try{const n=this.updateFunction(e);return!Kl(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!KS(n)}return!1}}/**
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
 */class BO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ye.UNAUTHENTICATED,this.clientId=uS.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{C("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(C("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ze;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Fo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uc(t,e){t.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ST(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function rm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Sy(t);C("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>U0(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>U0(e.remoteStore,s)),t._onlineComponents=e}function WT(t){return t.name==="FirebaseError"?t.code===_.FAILED_PRECONDITION||t.code===_.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Sy(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){C("FirestoreClient","Using user provided OfflineComponentProvider");try{await uc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!WT(n))throw n;Tn("Error using user provided cache. Falling back to memory cache: "+n),await uc(t,new nm)}}else C("FirestoreClient","Using default OfflineComponentProvider"),await uc(t,new nm);return t._offlineComponents}async function nd(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(C("FirestoreClient","Using user provided OnlineComponentProvider"),await rm(t,t._uninitializedComponentsProvider._online)):(C("FirestoreClient","Using default OnlineComponentProvider"),await rm(t,new Ey))),t._onlineComponents}function GT(t){return Sy(t).then(e=>e.persistence)}function Ty(t){return Sy(t).then(e=>e.localStore)}function HT(t){return nd(t).then(e=>e.remoteStore)}function ky(t){return nd(t).then(e=>e.syncEngine)}function jO(t){return nd(t).then(e=>e.datastore)}async function Io(t){const e=await nd(t),n=e.eventManager;return n.onListen=_O.bind(null,e.syncEngine),n.onUnlisten=IO.bind(null,e.syncEngine),n}function qO(t){return t.asyncQueue.enqueue(async()=>{const e=await GT(t),n=await HT(t);return e.setNetworkEnabled(!0),function(r){const i=P(r);return i.vu.delete(0),nu(i)}(n)})}function WO(t){return t.asyncQueue.enqueue(async()=>{const e=await GT(t),n=await HT(t);return e.setNetworkEnabled(!1),async function(r){const i=P(r);i.vu.add(0),await Lo(i),i.bu.set("Offline")}(n)})}function GO(t,e){const n=new Ze;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,l){const u=P(a);return u.persistence.runTransaction("read document","readonly",c=>u.localDocuments.getDocument(c,l))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new T(_.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Fo(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await Ty(t),e,n)),n.promise}function KT(t,e,n={}){const r=new Ze;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new td({next:h=>{s.enqueueAndForget(()=>fy(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new T(_.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new T(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new my(Ro(o.path),u,{includeMetadataChanges:!0,Ku:!0});return dy(i,c)}(await Io(t),t.asyncQueue,e,n,r)),r.promise}function HO(t,e){const n=new Ze;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await nh(r,i,!0),a=new VT(i,o.ir),l=a.sc(o.documents),u=a.applyChanges(l,!1);s.resolve(u.snapshot)}catch(o){const a=Fo(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await Ty(t),e,n)),n.promise}function QT(t,e,n={}){const r=new Ze;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new td({next:h=>{s.enqueueAndForget(()=>fy(i,c)),h.fromCache&&a.source==="server"?l.reject(new T(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new my(o,u,{includeMetadataChanges:!0,Ku:!0});return dy(i,c)}(await Io(t),t.asyncQueue,e,n,r)),r.promise}function KO(t,e){const n=new td(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){P(r).ku.add(i),i.next()}(await Io(t),n)),()=>{n.Dc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){P(r).ku.delete(i)}(await Io(t),n))}}function QO(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?YS().encode(s):s,function(l,u){return new UO(l,u)}(function(l,u){if(l instanceof Uint8Array)return q0(l,u);if(l instanceof ArrayBuffer)return q0(new Uint8Array(l),u);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,tu(e));t.asyncQueue.enqueueAndForget(async()=>{$O(await ky(t),i,r)})}function YO(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=P(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.qs.getNamedQuery(s,r))}(await Ty(t),e))}/**
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
 */function YT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const W0=new Map;/**
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
 */function Cy(t,e,n){if(!n)throw new T(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function XT(t,e,n,r){if(e===!0&&r===!0)throw new T(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function G0(t){if(!b.isDocumentKey(t))throw new T(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function H0(t){if(b.isDocumentKey(t))throw new T(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function rd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$()}function se(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new T(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rd(t);throw new T(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function JT(t,e){if(e<=0)throw new T(_.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class K0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new T(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new T(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=YT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new T(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new T(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new T(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class ru{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new K0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new T(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new K0(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Yb;switch(n.type){case"firstParty":return new eR(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new T(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=W0.get(e);n&&(C("ComponentProvider","Removing Datastore"),W0.delete(e),n.terminate())}(this),Promise.resolve()}}function XO(t,e,n,r={}){var i;const s=(t=se(t,ru))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Tn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ye.MOCK_USER;else{a=hN(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new T(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ye(u)}t._authCredentials=new Xb(new lS(a,l))}}/**
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
 */class _e{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _e(this.firestore,e,this._key)}}class ft{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ft(this.firestore,e,this._query)}}class qn extends ft{constructor(e,n,r){super(e,n,Ro(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _e(this.firestore,null,new b(e))}withConverter(e){return new qn(this.firestore,e,this._path)}}function ZT(t,e,...n){if(t=j(t),Cy("collection","path",e),t instanceof ru){const r=re.fromString(e,...n);return H0(r),new qn(t,null,r)}{if(!(t instanceof _e||t instanceof qn))throw new T(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(re.fromString(e,...n));return H0(r),new qn(t.firestore,null,r)}}function JO(t,e){if(t=se(t,ru),Cy("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new T(_.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ft(t,null,function(n){return new mr(re.emptyPath(),n)}(e))}function oh(t,e,...n){if(t=j(t),arguments.length===1&&(e=uS.A()),Cy("doc","path",e),t instanceof ru){const r=re.fromString(e,...n);return G0(r),new _e(t,null,new b(r))}{if(!(t instanceof _e||t instanceof qn))throw new T(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(re.fromString(e,...n));return G0(r),new _e(t.firestore,t instanceof qn?t.converter:null,new b(r))}}function ek(t,e){return t=j(t),e=j(e),(t instanceof _e||t instanceof qn)&&(e instanceof _e||e instanceof qn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function tk(t,e){return t=j(t),e=j(e),t instanceof ft&&e instanceof ft&&t.firestore===e.firestore&&Yl(t._query,e._query)&&t.converter===e.converter}/**
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
 */class ZO{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new ay(this,"async_queue_retry"),this.Xc=()=>{const n=lc();n&&C("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=lc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=lc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Ze;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!pi(e))throw e;C("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Me("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=hy.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&$()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function im(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class e2{constructor(){this._progressObserver={},this._taskCompletionResolver=new Ze,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const t2=-1;class Pe extends ru{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new ZO,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||nk(this),this._firestoreClient.terminate()}}function rt(t){return t._firestoreClient||nk(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function nk(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new DR(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,YT(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new BO(t._authCredentials,t._appCheckCredentials,t._queue,s),((n=i.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.cache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function n2(t,e){ik(t=se(t,Pe));const n=rt(t);if(n._uninitializedComponentsProvider)throw new T(_.FAILED_PRECONDITION,"SDK cache is already specified.");Tn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new Ey;return rk(n,i,new qT(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function r2(t){ik(t=se(t,Pe));const e=rt(t);if(e._uninitializedComponentsProvider)throw new T(_.FAILED_PRECONDITION,"SDK cache is already specified.");Tn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new Ey;return rk(e,r,new FO(r,n.cacheSizeBytes))}function rk(t,e,n){const r=new Ze;return t.asyncQueue.enqueue(async()=>{try{await uc(t,n),await rm(t,e),r.resolve()}catch(i){const s=i;if(!WT(s))throw s;Tn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function i2(t){if(t._initialized&&!t._terminated)throw new T(_.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Ze;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!vn.D())return Promise.resolve();const r=n+"main";await vn.delete(r)}(iy(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function s2(t){return function(e){const n=new Ze;return e.asyncQueue.enqueueAndForget(async()=>CO(await ky(e),n)),n.promise}(rt(t=se(t,Pe)))}function o2(t){return qO(rt(t=se(t,Pe)))}function a2(t){return WO(rt(t=se(t,Pe)))}function l2(t,e){const n=rt(t=se(t,Pe)),r=new e2;return QO(n,t._databaseId,e,r),r}function u2(t,e){return YO(rt(t=se(t,Pe)),e).then(n=>n?new ft(t,null,n.query):null)}function ik(t){if(t._initialized||t._terminated)throw new T(_.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class Hn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hn(Ge.fromBase64String(e))}catch(n){throw new T(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Hn(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ii{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new T(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ds{constructor(e){this._methodName=e}}/**
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
 */class id{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new T(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new T(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}}/**
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
 */const c2=/^__.*__$/;class h2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new gr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Po(e,this.data,n,this.fieldTransforms)}}class sk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new gr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ok(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class sd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new sd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return ah(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(ok(this.ca)&&c2.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class d2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||tu(e)}ya(e,n,r,i=!1){return new sd({ca:e,methodName:n,ga:r,path:$e.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fs(t){const e=t._freezeSettings(),n=tu(t._databaseId);return new d2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function od(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);Dy("Data must be an object, but it was:",o,r);const a=uk(r,o);let l,u;if(s.merge)l=new Vt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=sm(e,h,n);if(!o.contains(d))throw new T(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);hk(c,d)||c.push(d)}l=new Vt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new h2(new lt(a),l,u)}class iu extends ds{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof iu}}function ak(t,e,n){return new sd({ca:3,ga:e.settings.ga,methodName:t._methodName,la:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ay extends ds{_toFieldTransform(e){return new Jl(e.path,new po)}isEqual(e){return e instanceof Ay}}class f2 extends ds{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=ak(this,e,!0),r=this.pa.map(s=>ps(s,n)),i=new Zi(r);return new Jl(e.path,i)}isEqual(e){return this===e}}class p2 extends ds{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=ak(this,e,!0),r=this.pa.map(s=>ps(s,n)),i=new es(r);return new Jl(e.path,i)}isEqual(e){return this===e}}class m2 extends ds{constructor(e,n){super(e),this.Ia=n}_toFieldTransform(e){const n=new mo(e.serializer,zS(e.serializer,this.Ia));return new Jl(e.path,n)}isEqual(e){return this===e}}function xy(t,e,n,r){const i=t.ya(1,e,n);Dy("Data must be an object, but it was:",i,r);const s=[],o=lt.empty();hs(r,(l,u)=>{const c=by(e,l,n);u=j(u);const h=i.da(c);if(u instanceof iu)s.push(c);else{const d=ps(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Vt(s);return new sk(o,a,i.fieldTransforms)}function Ny(t,e,n,r,i,s){const o=t.ya(1,e,n),a=[sm(e,r,n)],l=[i];if(s.length%2!=0)throw new T(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(sm(e,s[d])),l.push(s[d+1]);const u=[],c=lt.empty();for(let d=a.length-1;d>=0;--d)if(!hk(u,a[d])){const p=a[d];let y=l[d];y=j(y);const v=o.da(p);if(y instanceof iu)u.push(p);else{const k=ps(y,v);k!=null&&(u.push(p),c.set(p,k))}}const h=new Vt(u);return new sk(c,h,o.fieldTransforms)}function lk(t,e,n,r=!1){return ps(n,t.ya(r?4:3,e))}function ps(t,e){if(ck(t=j(t)))return Dy("Unsupported field value:",e,t),uk(t,e);if(t instanceof ds)return function(n,r){if(!ok(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=ps(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=j(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return zS(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ke.fromDate(n);return{timestampValue:go(r.serializer,i)}}if(n instanceof ke){const i=new ke(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:go(r.serializer,i)}}if(n instanceof id)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Hn)return{bytesValue:ZS(r.serializer,n._byteString)};if(n instanceof _e){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Jg(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${rd(n)}`)}(t,e)}function uk(t,e){const n={};return IS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hs(t,(r,i)=>{const s=ps(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function ck(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof id||t instanceof Hn||t instanceof _e||t instanceof ds)}function Dy(t,e,n){if(!ck(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=rd(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function sm(t,e,n){if((e=j(e))instanceof ii)return e._internalPath;if(typeof e=="string")return by(t,e);throw ah("Field path arguments must be of type string or ",t,!1,void 0,n)}const g2=new RegExp("[~\\*/\\[\\]]");function by(t,e,n){if(e.search(g2)>=0)throw ah(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ii(...e.split("."))._internalPath}catch{throw ah(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ah(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new T(_.INVALID_ARGUMENT,a+t+l)}function hk(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class kl{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new _e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new y2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ad("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class y2 extends kl{data(){return super.data()}}function ad(t,e){return typeof e=="string"?by(t,e):e instanceof ii?e._internalPath:e._delegate._internalPath}/**
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
 */function dk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new T(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ry{}class su extends Ry{}function kr(t,e,...n){let r=[];e instanceof Ry&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Py).length,o=i.filter(a=>a instanceof ld).length;if(s>1||s>0&&o>0)throw new T(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class ld extends su{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ld(e,n,r)}_apply(e){const n=this._parse(e);return pk(e._query,n),new ft(e.firestore,e.converter,Wp(e._query,n))}_parse(e){const n=fs(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new T(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Y0(c,u);const d=[];for(const p of c)d.push(Q0(a,i,p));h={arrayValue:{values:d}}}else h=Q0(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Y0(c,u),h=lk(o,s,c,u==="in"||u==="not-in");return ee.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function v2(t,e,n){const r=e,i=ad("where",t);return ld._create(i,r,n)}class Py extends Ry{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Py(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:le.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)pk(s,a),s=Wp(s,a)}(e._query,n),new ft(e.firestore,e.converter,Wp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Oy extends su{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Oy(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new T(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new T(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ys(i,s);return function(a,l){if(jg(a)===null){const u=Kh(a);u!==null&&mk(a,u,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new ft(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new mr(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function w2(t,e="asc"){const n=e,r=ad("orderBy",t);return Oy._create(r,n)}class ud extends su{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new ud(e,n,r)}_apply(e){return new ft(e.firestore,e.converter,Jc(e._query,this._limit,this._limitType))}}function _2(t){return JT("limit",t),ud._create("limit",t,"F")}function I2(t){return JT("limitToLast",t),ud._create("limitToLast",t,"L")}class cd extends su{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new cd(e,n,r)}_apply(e){const n=fk(e,this.type,this._docOrFields,this._inclusive);return new ft(e.firestore,e.converter,function(r,i){return new mr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function E2(...t){return cd._create("startAt",t,!0)}function S2(...t){return cd._create("startAfter",t,!1)}class hd extends su{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new hd(e,n,r)}_apply(e){const n=fk(e,this.type,this._docOrFields,this._inclusive);return new ft(e.firestore,e.converter,function(r,i){return new mr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function T2(...t){return hd._create("endBefore",t,!1)}function k2(...t){return hd._create("endAt",t,!0)}function fk(t,e,n,r){if(n[0]=j(n[0]),n[0]instanceof kl)return function(i,s,o,a,l){if(!a)throw new T(_.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const c of Vi(i))if(c.field.isKeyField())u.push(Xi(s,a.key));else{const h=a.data.field(c.field);if(Hh(h))throw new T(_.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new T(_.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new ni(u,l)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=fs(t.firestore);return function(s,o,a,l,u,c){const h=s.explicitOrderBy;if(u.length>h.length)throw new T(_.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let p=0;p<u.length;p++){const y=u[p];if(h[p].field.isKeyField()){if(typeof y!="string")throw new T(_.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof y}`);if(!qg(s)&&y.indexOf("/")!==-1)throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${y}' contains a slash.`);const v=s.path.child(re.fromString(y));if(!b.isDocumentKey(v))throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const k=new b(v);d.push(Xi(o,k))}else{const v=lk(a,l,y);d.push(v)}}return new ni(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function Q0(t,e,n){if(typeof(n=j(n))=="string"){if(n==="")throw new T(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qg(e)&&n.indexOf("/")!==-1)throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(re.fromString(n));if(!b.isDocumentKey(r))throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Xi(t,new b(r))}if(n instanceof _e)return Xi(t,n._key);throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${rd(n)}.`)}function Y0(t,e){if(!Array.isArray(t)||t.length===0)throw new T(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function pk(t,e){if(e.isInequality()){const r=Kh(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new T(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=jg(t);s!==null&&mk(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new T(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new T(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function mk(t,e,n){if(!n.isEqual(e))throw new T(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Ly{convertValue(e,n="none"){switch(Yi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw $()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return hs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new id(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vl(e));default:return null}}convertTimestamp(e){const n=Jr(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=re.fromString(e);z(uT(r));const i=new ei(r.get(1),r.get(3)),s=new b(r.popFirst(5));return i.isEqual(n)||Me(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function dd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class C2 extends Ly{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _e(this.firestore,null,n)}}/**
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
 */class Oi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dr extends kl{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ad("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Fa extends dr{data(e={}){return super.data(e)}}class si{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Oi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Fa(this._firestore,this._userDataWriter,r.key,r,new Oi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new T(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Fa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Oi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Fa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Oi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:A2(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function A2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}function gk(t,e){return t instanceof dr&&e instanceof dr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof si&&e instanceof si&&t._firestore===e._firestore&&tk(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function x2(t){t=se(t,_e);const e=se(t.firestore,Pe);return KT(rt(e),t._key).then(n=>My(e,t,n))}class ms extends Ly{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _e(this.firestore,null,n)}}function N2(t){t=se(t,_e);const e=se(t.firestore,Pe),n=rt(e),r=new ms(e);return GO(n,t._key).then(i=>new dr(e,r,t._key,i,new Oi(i!==null&&i.hasLocalMutations,!0),t.converter))}function D2(t){t=se(t,_e);const e=se(t.firestore,Pe);return KT(rt(e),t._key,{source:"server"}).then(n=>My(e,t,n))}function b2(t){t=se(t,ft);const e=se(t.firestore,Pe),n=rt(e),r=new ms(e);return dk(t._query),QT(n,t._query).then(i=>new si(e,r,t,i))}function R2(t){t=se(t,ft);const e=se(t.firestore,Pe),n=rt(e),r=new ms(e);return HO(n,t._query).then(i=>new si(e,r,t,i))}function P2(t){t=se(t,ft);const e=se(t.firestore,Pe),n=rt(e),r=new ms(e);return QT(n,t._query,{source:"server"}).then(i=>new si(e,r,t,i))}function X0(t,e,n){t=se(t,_e);const r=se(t.firestore,Pe),i=dd(t.converter,e,n);return ou(r,[od(fs(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Te.none())])}function J0(t,e,n,...r){t=se(t,_e);const i=se(t.firestore,Pe),s=fs(i);let o;return o=typeof(e=j(e))=="string"||e instanceof ii?Ny(s,"updateDoc",t._key,e,n,r):xy(s,"updateDoc",t._key,e),ou(i,[o.toMutation(t._key,Te.exists(!0))])}function O2(t){return ou(se(t.firestore,Pe),[new Oo(t._key,Te.none())])}function L2(t,e){const n=se(t.firestore,Pe),r=oh(t),i=dd(t.converter,e);return ou(n,[od(fs(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Te.exists(!1))]).then(()=>r)}function yk(t,...e){var n,r,i;t=j(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||im(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(im(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof _e)u=se(t.firestore,Pe),c=Ro(t._key.path),l={next:h=>{e[o]&&e[o](My(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=se(t,ft);u=se(h.firestore,Pe),c=h._query;const d=new ms(u);l={next:p=>{e[o]&&e[o](new si(u,d,h,p))},error:e[o+1],complete:e[o+2]},dk(t._query)}return function(h,d,p,y){const v=new td(y),k=new my(d,v,p);return h.asyncQueue.enqueueAndForget(async()=>dy(await Io(h),k)),()=>{v.Dc(),h.asyncQueue.enqueueAndForget(async()=>fy(await Io(h),k))}}(rt(u),c,a,l)}function M2(t,e){return KO(rt(t=se(t,Pe)),im(e)?e:{next:e})}function ou(t,e){return function(n,r){const i=new Ze;return n.asyncQueue.enqueueAndForget(async()=>EO(await ky(n),r,i)),i.promise}(rt(t),e)}function My(t,e,n){const r=n.docs.get(e._key),i=new ms(t);return new dr(t,i,e._key,r,new Oi(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const $2={maxAttempts:5};/**
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
 */class F2{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=fs(e)}set(e,n,r){this._verifyNotCommitted();const i=Rr(e,this._firestore),s=dd(i.converter,n,r),o=od(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Te.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Rr(e,this._firestore);let o;return o=typeof(n=j(n))=="string"||n instanceof ii?Ny(this._dataReader,"WriteBatch.update",s._key,n,r,i):xy(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Te.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Rr(e,this._firestore);return this._mutations=this._mutations.concat(new Oo(n._key,Te.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new T(_.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Rr(t,e){if((t=j(t)).firestore!==e)throw new T(_.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class U2 extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=fs(e)}get(e){const n=Rr(e,this._firestore),r=new C2(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return $();const s=i[0];if(s.isFoundDocument())return new kl(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new kl(this._firestore,r,n._key,null,n.converter);throw $()})}set(e,n,r){const i=Rr(e,this._firestore),s=dd(i.converter,n,r),o=od(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=Rr(e,this._firestore);let o;return o=typeof(n=j(n))=="string"||n instanceof ii?Ny(this._dataReader,"Transaction.update",s._key,n,r,i):xy(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=Rr(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Rr(e,this._firestore),r=new ms(this._firestore);return super.get(e).then(i=>new dr(this._firestore,r,n._key,i._document,new Oi(!1,!1),n.converter))}}function V2(t,e,n){t=se(t,Pe);const r=Object.assign(Object.assign({},$2),n);return function(i){if(i.maxAttempts<1)throw new T(_.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new Ze;return i.asyncQueue.enqueueAndForget(async()=>{const l=await jO(i);new zO(i.asyncQueue,l,o,s,a).run()}),a.promise}(rt(t),i=>e(new U2(t,i)),r)}/**
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
 */function z2(){return new iu("deleteField")}function B2(){return new Ay("serverTimestamp")}function j2(...t){return new f2("arrayUnion",t)}function q2(...t){return new p2("arrayRemove",t)}function W2(t){return new m2("increment",t)}(function(t,e=!0){(function(n){bo=n})(ci),Yr(new Wn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Pe(new Jb(n.getProvider("auth-internal")),new nR(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new T(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ei(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Bn(Hw,"3.13.0",t),Bn(Hw,"3.13.0","esm2017")})();const G2="@firebase/firestore-compat",H2="0.3.12";/**
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
 */function $y(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new T("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function Z0(){if(typeof Uint8Array>"u")throw new T("unimplemented","Uint8Arrays are not available in this environment.")}function e1(){if(!xR())throw new T("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Cl{constructor(e){this._delegate=e}static fromBase64String(e){return e1(),new Cl(Hn.fromBase64String(e))}static fromUint8Array(e){return Z0(),new Cl(Hn.fromUint8Array(e))}toBase64(){return e1(),this._delegate.toBase64()}toUint8Array(){return Z0(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function om(t){return K2(t,["next","error","complete"])}function K2(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class Q2{enableIndexedDbPersistence(e,n){return n2(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return r2(e._delegate)}clearIndexedDbPersistence(e){return i2(e._delegate)}}class vk{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ei||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Tn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){XO(this._delegate,e,n,r)}enableNetwork(){return o2(this._delegate)}disableNetwork(){return a2(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,XT("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return s2(this._delegate)}onSnapshotsInSync(e){return M2(this._delegate,e)}get app(){if(!this._appCompat)throw new T("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Eo(this,ZT(this._delegate,e))}catch(n){throw Ct(n,"collection()","Firestore.collection()")}}doc(e){try{return new an(this,oh(this._delegate,e))}catch(n){throw Ct(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new kt(this,JO(this._delegate,e))}catch(n){throw Ct(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return V2(this._delegate,n=>e(new wk(this,n)))}batch(){return rt(this._delegate),new _k(new F2(this._delegate,e=>ou(this._delegate,e)))}loadBundle(e){return l2(this._delegate,e)}namedQuery(e){return u2(this._delegate,e).then(n=>n?new kt(this,n):null)}}class fd extends Ly{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cl(new Hn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return an.forKey(n,this.firestore,null)}}function Y2(t){Kb(t)}class wk{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new fd(e)}get(e){const n=Li(e);return this._delegate.get(n).then(r=>new Al(this._firestore,new dr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Li(e);return r?($y("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Li(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Li(e);return this._delegate.delete(n),this}}class _k{constructor(e){this._delegate=e}set(e,n,r){const i=Li(e);return r?($y("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Li(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Li(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class is{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Fa(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new xl(this._firestore,r),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=is.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new is(e,new fd(e),n),i.set(n,s)),s}}is.INSTANCES=new WeakMap;class an{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new fd(e)}static forPath(e,n,r){if(e.length%2!==0)throw new T("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new an(n,new _e(n._delegate,r,new b(e)))}static forKey(e,n,r){return new an(n,new _e(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Eo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Eo(this.firestore,ZT(this._delegate,e))}catch(n){throw Ct(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=j(e),e instanceof _e?ek(this._delegate,e):!1}set(e,n){n=$y("DocumentReference.set",n);try{return n?X0(this._delegate,e,n):X0(this._delegate,e)}catch(r){throw Ct(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?J0(this._delegate,e):J0(this._delegate,e,n,...r)}catch(i){throw Ct(i,"updateDoc()","DocumentReference.update()")}}delete(){return O2(this._delegate)}onSnapshot(...e){const n=Ik(e),r=Ek(e,i=>new Al(this.firestore,new dr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return yk(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=N2(this._delegate):(e==null?void 0:e.source)==="server"?n=D2(this._delegate):n=x2(this._delegate),n.then(r=>new Al(this.firestore,new dr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new an(this.firestore,e?this._delegate.withConverter(is.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ct(t,e,n){return t.message=t.message.replace(e,n),t}function Ik(t){for(const e of t)if(typeof e=="object"&&!om(e))return e;return{}}function Ek(t,e){var n,r;let i;return om(t[0])?i=t[0]:om(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Al{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new an(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return gk(this._delegate,e._delegate)}}class xl extends Al{data(e){const n=this._delegate.data(e);return Qb(n!==void 0),n}}class kt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new fd(e)}where(e,n,r){try{return new kt(this.firestore,kr(this._delegate,v2(e,n,r)))}catch(i){throw Ct(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new kt(this.firestore,kr(this._delegate,w2(e,n)))}catch(r){throw Ct(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new kt(this.firestore,kr(this._delegate,_2(e)))}catch(n){throw Ct(n,"limit()","Query.limit()")}}limitToLast(e){try{return new kt(this.firestore,kr(this._delegate,I2(e)))}catch(n){throw Ct(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new kt(this.firestore,kr(this._delegate,E2(...e)))}catch(n){throw Ct(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new kt(this.firestore,kr(this._delegate,S2(...e)))}catch(n){throw Ct(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new kt(this.firestore,kr(this._delegate,T2(...e)))}catch(n){throw Ct(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new kt(this.firestore,kr(this._delegate,k2(...e)))}catch(n){throw Ct(n,"endAt()","Query.endAt()")}}isEqual(e){return tk(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=R2(this._delegate):(e==null?void 0:e.source)==="server"?n=P2(this._delegate):n=b2(this._delegate),n.then(r=>new am(this.firestore,new si(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=Ik(e),r=Ek(e,i=>new am(this.firestore,new si(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return yk(this._delegate,n,r)}withConverter(e){return new kt(this.firestore,e?this._delegate.withConverter(is.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class X2{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new xl(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class am{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new kt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new xl(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new X2(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new xl(this._firestore,r))})}isEqual(e){return gk(this._delegate,e._delegate)}}class Eo extends kt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new an(this.firestore,e):null}doc(e){try{return e===void 0?new an(this.firestore,oh(this._delegate)):new an(this.firestore,oh(this._delegate,e))}catch(n){throw Ct(n,"doc()","CollectionReference.doc()")}}add(e){return L2(this._delegate,e).then(n=>new an(this.firestore,n))}isEqual(e){return ek(this._delegate,e._delegate)}withConverter(e){return new Eo(this.firestore,e?this._delegate.withConverter(is.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Li(t){return se(t,_e)}/**
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
 */class Fy{constructor(...e){this._delegate=new ii(...e)}static documentId(){return new Fy($e.keyField().canonicalString())}isEqual(e){return e=j(e),e instanceof ii?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class xi{constructor(e){this._delegate=e}static serverTimestamp(){const e=B2();return e._methodName="FieldValue.serverTimestamp",new xi(e)}static delete(){const e=z2();return e._methodName="FieldValue.delete",new xi(e)}static arrayUnion(...e){const n=j2(...e);return n._methodName="FieldValue.arrayUnion",new xi(n)}static arrayRemove(...e){const n=q2(...e);return n._methodName="FieldValue.arrayRemove",new xi(n)}static increment(e){const n=W2(e);return n._methodName="FieldValue.increment",new xi(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const J2={Firestore:vk,GeoPoint:id,Timestamp:ke,Blob:Cl,Transaction:wk,WriteBatch:_k,DocumentReference:an,DocumentSnapshot:Al,Query:kt,QueryDocumentSnapshot:xl,QuerySnapshot:am,CollectionReference:Eo,FieldPath:Fy,FieldValue:xi,setLogLevel:Y2,CACHE_SIZE_UNLIMITED:t2};function Z2(t,e){t.INTERNAL.registerComponent(new Wn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},J2)))}/**
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
 */function eL(t){Z2(t,(e,n)=>new vk(e,n,new Q2)),t.registerVersion(G2,H2)}eL(at);function Uy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const ua={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Ts={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function tL(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function Sk(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nL=tL,rL=Sk,Tk=new us("auth","Firebase",Sk());/**
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
 */const lh=new Dh("@firebase/auth");function iL(t,...e){lh.logLevel<=ne.WARN&&lh.warn(`Auth (${ci}): ${t}`,...e)}function cc(t,...e){lh.logLevel<=ne.ERROR&&lh.error(`Auth (${ci}): ${t}`,...e)}/**
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
 */function pt(t,...e){throw Vy(t,...e)}function ht(t,...e){return Vy(t,...e)}function kk(t,e,n){const r=Object.assign(Object.assign({},rL()),{[e]:n});return new us("auth","Firebase",r).create(e,{appName:t.name})}function Uo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&pt(t,"argument-error"),kk(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Vy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Tk.create(t,...e)}function x(t,e,...n){if(!t)throw Vy(e,...n)}function Un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cc(e),new Error(e)}function kn(t,e){t||Un(e)}/**
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
 */function Nl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zy(){return t1()==="http:"||t1()==="https:"}function t1(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function sL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zy()||GI()||"connection"in navigator)?navigator.onLine:!0}function oL(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class au{constructor(e,n){this.shortDelay=e,this.longDelay=n,kn(n>e,"Short delay should be less than long delay!"),this.isMobile=dN()||dg()}get(){return sL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function By(t,e){kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ck{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const aL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lL=new au(3e4,6e4);function je(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function He(t,e,n,r,i={}){return Ak(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=xo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Ck.fetch()(xk(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Ak(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},aL),e);try{const i=new uL(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ea(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ea(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ea(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ea(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw kk(t,c,u);pt(t,c)}}catch(i){if(i instanceof Nt)throw i;pt(t,"network-request-failed",{message:String(i)})}}async function vr(t,e,n,r,i={}){const s=await He(t,e,n,r,i);return"mfaPendingCredential"in s&&pt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function xk(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?By(t.config,i):`${t.config.apiScheme}://${i}`}class uL{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ht(this.auth,"network-request-failed")),lL.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ea(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ht(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function cL(t,e){return He(t,"POST","/v1/accounts:delete",e)}async function hL(t,e){return He(t,"POST","/v1/accounts:update",e)}async function dL(t,e){return He(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ua(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fL(t,e=!1){const n=j(t),r=await n.getIdToken(e),i=pd(r);x(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ua(yf(i.auth_time)),issuedAtTime:Ua(yf(i.iat)),expirationTime:Ua(yf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function yf(t){return Number(t)*1e3}function pd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return cc("JWT malformed, contained fewer than 3 sections"),null;try{const i=qI(n);return i?JSON.parse(i):(cc("Failed to decode base64 JWT payload"),null)}catch(i){return cc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function pL(t){const e=pd(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function fr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nt&&mL(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class gL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Nk{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ua(this.lastLoginAt),this.creationTime=Ua(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Dl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await fr(t,dL(n,{idToken:r}));x(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?wL(s.providerUserInfo):[],a=vL(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Nk(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function yL(t){const e=j(t);await Dl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vL(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function wL(t){return t.map(e=>{var{providerId:n}=e,r=Uy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function _L(t,e){const n=await Ak(t,{},async()=>{const r=xo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=xk(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ck.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class bl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pL(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await _L(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new bl;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(x(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bl,this.toJSON())}_performRefresh(){return Un("not implemented")}}/**
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
 */function Cr(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Uy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Nk(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await fr(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fL(this,e)}reload(){return yL(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Dl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fr(this,cL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:I,isAnonymous:E,providerData:N,stsTokenManager:R}=n;x(m&&R,e,"internal-error");const U=bl.fromJSON(this.name,R);x(typeof m=="string",e,"internal-error"),Cr(h,e.name),Cr(d,e.name),x(typeof I=="boolean",e,"internal-error"),x(typeof E=="boolean",e,"internal-error"),Cr(p,e.name),Cr(y,e.name),Cr(v,e.name),Cr(k,e.name),Cr(g,e.name),Cr(f,e.name);const oe=new zi({uid:m,auth:e,email:d,emailVerified:I,displayName:h,isAnonymous:E,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:U,createdAt:g,lastLoginAt:f});return N&&Array.isArray(N)&&(oe.providerData=N.map(B=>Object.assign({},B))),k&&(oe._redirectEventId=k),oe}static async _fromIdTokenResponse(e,n,r=!1){const i=new bl;i.updateFromServerResponse(n);const s=new zi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Dl(s),s}}/**
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
 */const n1=new Map;function Qt(t){kn(t instanceof Function,"Expected a class definition");let e=n1.get(t);return e?(kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,n1.set(t,e),e)}/**
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
 */class Dk{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Dk.type="NONE";const So=Dk;/**
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
 */function Bi(t,e,n){return`firebase:${t}:${e}:${n}`}class Js{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Bi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Bi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Js(Qt(So),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Qt(So);const o=Bi(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=zi._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Js(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Js(s,e,r))}}/**
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
 */function r1(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pk(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bk(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ok(e))return"Blackberry";if(Lk(e))return"Webos";if(jy(e))return"Safari";if((e.includes("chrome/")||Rk(e))&&!e.includes("edge/"))return"Chrome";if(lu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bk(t=Ne()){return/firefox\//i.test(t)}function jy(t=Ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rk(t=Ne()){return/crios\//i.test(t)}function Pk(t=Ne()){return/iemobile/i.test(t)}function lu(t=Ne()){return/android/i.test(t)}function Ok(t=Ne()){return/blackberry/i.test(t)}function Lk(t=Ne()){return/webos/i.test(t)}function Vo(t=Ne()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function IL(t=Ne()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function EL(t=Ne()){var e;return Vo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function SL(){return HI()&&document.documentMode===10}function Mk(t=Ne()){return Vo(t)||lu(t)||Lk(t)||Ok(t)||/windows phone/i.test(t)||Pk(t)}function TL(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function $k(t,e=[]){let n;switch(t){case"Browser":n=r1(Ne());break;case"Worker":n=`${r1(Ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ci}/${r}`}/**
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
 */async function kL(t){return(await He(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Fk(t,e){return He(t,"GET","/v2/recaptchaConfig",je(t,e))}/**
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
 */function i1(t){return t!==void 0&&t.getResponse!==void 0}function s1(t){return t!==void 0&&t.enterprise!==void 0}class Uk{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function CL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function qy(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ht("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",CL().appendChild(r)})}function Vk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const AL="https://www.google.com/recaptcha/enterprise.js?render=",xL="recaptcha-enterprise",NL="NO_RECAPTCHA";class zk{constructor(e){this.type=xL,this.auth=Ue(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Fk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Uk(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;s1(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(NL)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&s1(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}qy(AL+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function oi(t,e,n,r=!1){const i=new zk(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class DL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class bL{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new o1(this),this.idTokenSubscription=new o1(this),this.beforeStateQueue=new DL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tk,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Js.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Dl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?j(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Qt(e))})}async initializeRecaptchaConfig(){const e=await Fk(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Uk(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new zk(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new us("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qt(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Js.create(this,[Qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return x(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$k(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&iL(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ue(t){return j(t)}class o1{constructor(e){this.auth=e,this.observer=null,this.addObserver=KI(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function RL(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Qt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function PL(t,e,n){const r=Ue(t);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Bk(e),{host:o,port:a}=OL(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||LL()}function Bk(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function OL(t){const e=Bk(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:a1(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:a1(o)}}}function a1(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LL(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class zo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Un("not implemented")}_getIdTokenResponse(e){return Un("not implemented")}_linkToIdToken(e,n){return Un("not implemented")}_getReauthenticationResolver(e){return Un("not implemented")}}/**
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
 */async function jk(t,e){return He(t,"POST","/v1/accounts:resetPassword",je(t,e))}async function qk(t,e){return He(t,"POST","/v1/accounts:update",e)}async function ML(t,e){return He(t,"POST","/v1/accounts:update",je(t,e))}/**
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
 */async function vf(t,e){return vr(t,"POST","/v1/accounts:signInWithPassword",je(t,e))}async function md(t,e){return He(t,"POST","/v1/accounts:sendOobCode",je(t,e))}async function $L(t,e){return md(t,e)}async function wf(t,e){return md(t,e)}async function _f(t,e){return md(t,e)}async function FL(t,e){return md(t,e)}/**
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
 */async function UL(t,e){return vr(t,"POST","/v1/accounts:signInWithEmailLink",je(t,e))}async function VL(t,e){return vr(t,"POST","/v1/accounts:signInWithEmailLink",je(t,e))}/**
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
 */class Rl extends zo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Rl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Rl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await oi(e,r,"signInWithPassword");return vf(e,i)}else return vf(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await oi(e,r,"signInWithPassword");return vf(e,s)}else return Promise.reject(i)});case"emailLink":return UL(e,{email:this._email,oobCode:this._password});default:pt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return qk(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return VL(e,{idToken:n,email:this._email,oobCode:this._password});default:pt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function or(t,e){return vr(t,"POST","/v1/accounts:signInWithIdp",je(t,e))}/**
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
 */const zL="http://localhost";class Kn extends zo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Uy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Kn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,or(e,n)}buildRequest(){const e={requestUri:zL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xo(n)}return e}}/**
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
 */async function BL(t,e){return He(t,"POST","/v1/accounts:sendVerificationCode",je(t,e))}async function jL(t,e){return vr(t,"POST","/v1/accounts:signInWithPhoneNumber",je(t,e))}async function qL(t,e){const n=await vr(t,"POST","/v1/accounts:signInWithPhoneNumber",je(t,e));if(n.temporaryProof)throw Ea(t,"account-exists-with-different-credential",n);return n}const WL={USER_NOT_FOUND:"user-not-found"};async function GL(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return vr(t,"POST","/v1/accounts:signInWithPhoneNumber",je(t,n),WL)}/**
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
 */class ji extends zo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new ji({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ji({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return jL(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return qL(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return GL(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new ji({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function HL(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function KL(t){const e=Vs(ga(t)).link,n=e?Vs(ga(e)).deep_link_id:null,r=Vs(ga(t)).deep_link_id;return(r?Vs(ga(r)).link:null)||r||n||e||t}class gd{constructor(e){var n,r,i,s,o,a;const l=Vs(ga(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=HL((i=l.mode)!==null&&i!==void 0?i:null);x(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=KL(e);try{return new gd(n)}catch{return null}}}/**
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
 */class yi{constructor(){this.providerId=yi.PROVIDER_ID}static credential(e,n){return Rl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gd.parseLink(n);return x(r,"argument-error"),Rl._fromEmailAndCode(e,r.code,r.tenantId)}}yi.PROVIDER_ID="password";yi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class wr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bo extends wr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Zs extends Bo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return x("providerId"in n&&"signInMethod"in n,"argument-error"),Kn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return x(e.idToken||e.accessToken,"argument-error"),Kn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Zs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Zs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Zs(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class bn extends Bo{constructor(){super("facebook.com")}static credential(e){return Kn._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";bn.PROVIDER_ID="facebook.com";/**
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
 */class Rn extends Bo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kn._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Rn.credential(n,r)}catch{return null}}}Rn.GOOGLE_SIGN_IN_METHOD="google.com";Rn.PROVIDER_ID="google.com";/**
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
 */class Pn extends Bo{constructor(){super("github.com")}static credential(e){return Kn._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.GITHUB_SIGN_IN_METHOD="github.com";Pn.PROVIDER_ID="github.com";/**
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
 */const QL="http://localhost";class To extends zo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,or(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new To(r,s)}static _create(e,n){return new To(e,n)}buildRequest(){return{requestUri:QL,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const YL="saml.";class uh extends wr{constructor(e){x(e.startsWith(YL),"argument-error"),super(e)}static credentialFromResult(e){return uh.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return uh.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=To.fromJSON(e);return x(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return To._create(r,n)}catch{return null}}}/**
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
 */class On extends Bo{constructor(){super("twitter.com")}static credential(e,n){return Kn._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return On.credential(n,r)}catch{return null}}}On.TWITTER_SIGN_IN_METHOD="twitter.com";On.PROVIDER_ID="twitter.com";/**
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
 */async function hc(t,e){return vr(t,"POST","/v1/accounts:signUp",je(t,e))}/**
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
 */class hn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await zi._fromIdTokenResponse(e,r,i),o=l1(r);return new hn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=l1(r);return new hn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function l1(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function XL(t){var e;const n=Ue(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new hn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await hc(n,{returnSecureToken:!0}),i=await hn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class ch extends Nt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ch.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ch(e,n,r,i)}}function Wk(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ch._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function Gk(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function JL(t,e){const n=j(t);await yd(!0,n,e);const{providerUserInfo:r}=await hL(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=Gk(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Wy(t,e,n=!1){const r=await fr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hn._forOperation(t,"link",r)}async function yd(t,e,n){await Dl(e);const r=Gk(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";x(r.has(n)===t,e.auth,i)}/**
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
 */async function Hk(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await fr(t,Wk(r,i,e,t),n);x(s.idToken,r,"internal-error");const o=pd(s.idToken);x(o,r,"internal-error");const{sub:a}=o;return x(t.uid===a,r,"user-mismatch"),hn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&pt(r,"user-mismatch"),s}}/**
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
 */async function Kk(t,e,n=!1){const r="signIn",i=await Wk(t,r,e),s=await hn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function vd(t,e){return Kk(Ue(t),e)}async function Qk(t,e){const n=j(t);return await yd(!1,n,e.providerId),Wy(n,e)}async function Yk(t,e){return Hk(j(t),e)}/**
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
 */async function ZL(t,e){return vr(t,"POST","/v1/accounts:signInWithCustomToken",je(t,e))}/**
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
 */async function eM(t,e){const n=Ue(t),r=await ZL(n,{token:e,returnSecureToken:!0}),i=await hn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class uu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Gy._fromServerResponse(e,n):"totpInfo"in n?Hy._fromServerResponse(e,n):pt(e,"internal-error")}}class Gy extends uu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Gy(n)}}class Hy extends uu{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Hy(n)}}/**
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
 */function eo(t,e,n){var r;x(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),x(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(x(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(x(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function tM(t,e,n){var r;const i=Ue(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await oi(i,s,"getOobCode",!0);n&&eo(i,o,n),await wf(i,o)}else n&&eo(i,s,n),await wf(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await oi(i,s,"getOobCode",!0);n&&eo(i,a,n),await wf(i,a)}else return Promise.reject(o)})}async function nM(t,e,n){await jk(j(t),{oobCode:e,newPassword:n})}async function rM(t,e){await ML(j(t),{oobCode:e})}async function Xk(t,e){const n=j(t),r=await jk(n,{oobCode:e}),i=r.requestType;switch(x(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":x(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":x(r.mfaInfo,n,"internal-error");default:x(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=uu._fromServerResponse(Ue(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function iM(t,e){const{data:n}=await Xk(j(t),e);return n.email}async function sM(t,e,n){var r;const i=Ue(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await oi(i,s,"signUpPassword");o=hc(i,u)}else o=hc(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await oi(i,s,"signUpPassword");return hc(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await hn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function oM(t,e,n){return vd(j(t),yi.credential(e,n))}/**
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
 */async function aM(t,e,n){var r;const i=Ue(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,l){x(l.handleCodeInApp,i,"argument-error"),l&&eo(i,a,l)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await oi(i,s,"getOobCode",!0);o(a,n),await _f(i,a)}else o(s,n),await _f(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const l=await oi(i,s,"getOobCode",!0);o(l,n),await _f(i,l)}else return Promise.reject(a)})}function lM(t,e){const n=gd.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function uM(t,e,n){const r=j(t),i=yi.credentialWithLink(e,n||Nl());return x(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),vd(r,i)}/**
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
 */async function cM(t,e){return He(t,"POST","/v1/accounts:createAuthUri",je(t,e))}/**
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
 */async function hM(t,e){const n=zy()?Nl():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await cM(j(t),r);return i||[]}async function dM(t,e){const n=j(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&eo(n.auth,i,e);const{email:s}=await $L(n.auth,i);s!==t.email&&await t.reload()}async function fM(t,e,n){const r=j(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&eo(r.auth,s,n);const{email:o}=await FL(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function pM(t,e){return He(t,"POST","/v1/accounts:update",e)}/**
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
 */async function mM(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=j(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await fr(r,pM(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function gM(t,e){return Jk(j(t),e,null)}function yM(t,e){return Jk(j(t),null,e)}async function Jk(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await fr(t,qk(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function vM(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=pd(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new to(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new wM(s,i);case"github.com":return new _M(s,i);case"google.com":return new IM(s,i);case"twitter.com":return new EM(s,i,t.screenName||null);case"custom":case"anonymous":return new to(s,null);default:return new to(s,r,i)}}class to{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class Zk extends to{constructor(e,n,r,i){super(e,n,r),this.username=i}}class wM extends to{constructor(e,n){super(e,"facebook.com",n)}}class _M extends Zk{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class IM extends to{constructor(e,n){super(e,"google.com",n)}}class EM extends Zk{constructor(e,n,r){super(e,"twitter.com",n,r)}}function SM(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:vM(n)}class Mi{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new Mi("enroll",e,n)}static _fromMfaPendingCredential(e){return new Mi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Mi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Mi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Ky{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Ue(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>uu._fromServerResponse(r,a));x(i.mfaPendingCredential,r,"internal-error");const o=Mi._fromMfaPendingCredential(i.mfaPendingCredential);return new Ky(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await hn._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return x(n.user,r,"internal-error"),hn._forOperation(n.user,n.operationType,u);default:pt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function TM(t,e){var n;const r=j(t),i=e;return x(e.customData.operationType,r,"argument-error"),x((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Ky._fromError(r,i)}/**
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
 */function kM(t,e){return He(t,"POST","/v2/accounts/mfaEnrollment:start",je(t,e))}function CM(t,e){return He(t,"POST","/v2/accounts/mfaEnrollment:finalize",je(t,e))}function AM(t,e){return He(t,"POST","/v2/accounts/mfaEnrollment:withdraw",je(t,e))}class Qy{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>uu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Qy(e)}async getSession(){return Mi._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await fr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await fr(this.user,AM(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const If=new WeakMap;function xM(t){const e=j(t);return If.has(e)||If.set(e,Qy._fromUser(e)),If.get(e)}const hh="__sak";/**
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
 */class eC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hh,"1"),this.storage.removeItem(hh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function NM(){const t=Ne();return jy(t)||Vo(t)}const DM=1e3,bM=10;class tC extends eC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=NM()&&TL(),this.fallbackToPolling=Mk(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);SL()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,bM):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},DM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tC.type="LOCAL";const Yy=tC;/**
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
 */class nC extends eC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nC.type="SESSION";const ss=nC;/**
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
 */function RM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class wd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new wd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await RM(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wd.receivers=[];/**
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
 */function cu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class PM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=cu("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ze(){return window}function OM(t){ze().location.href=t}/**
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
 */function Xy(){return typeof ze().WorkerGlobalScope<"u"&&typeof ze().importScripts=="function"}async function LM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $M(){return Xy()?self:null}/**
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
 */const rC="firebaseLocalStorageDb",FM=1,dh="firebaseLocalStorage",iC="fbase_key";class hu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _d(t,e){return t.transaction([dh],e?"readwrite":"readonly").objectStore(dh)}function UM(){const t=indexedDB.deleteDatabase(rC);return new hu(t).toPromise()}function lm(){const t=indexedDB.open(rC,FM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(dh,{keyPath:iC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(dh)?e(r):(r.close(),await UM(),e(await lm()))})})}async function u1(t,e,n){const r=_d(t,!0).put({[iC]:e,value:n});return new hu(r).toPromise()}async function VM(t,e){const n=_d(t,!1).get(e),r=await new hu(n).toPromise();return r===void 0?null:r.value}function c1(t,e){const n=_d(t,!0).delete(e);return new hu(n).toPromise()}const zM=800,BM=3;class sC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>BM)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wd._getInstance($M()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await LM(),!this.activeServiceWorker)return;this.sender=new PM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||MM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lm();return await u1(e,hh,"1"),await c1(e,hh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>u1(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>VM(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>c1(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=_d(i,!1).getAll();return new hu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sC.type="LOCAL";const Pl=sC;/**
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
 */function jM(t,e){return He(t,"POST","/v2/accounts/mfaSignIn:start",je(t,e))}function qM(t,e){return He(t,"POST","/v2/accounts/mfaSignIn:finalize",je(t,e))}/**
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
 */const WM=500,GM=6e4,qu=1e12;class HM{constructor(e){this.auth=e,this.counter=qu,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new KM(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||qu;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||qu;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||qu;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class KM{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;x(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=QM(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},GM)},WM))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function QM(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Ef=Vk("rcb"),YM=new au(3e4,6e4),XM="https://www.google.com/recaptcha/api.js?";class JM{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=ze().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return x(ZM(n),e,"argument-error"),this.shouldResolveImmediately(n)&&i1(ze().grecaptcha)?Promise.resolve(ze().grecaptcha):new Promise((r,i)=>{const s=ze().setTimeout(()=>{i(ht(e,"network-request-failed"))},YM.get());ze()[Ef]=()=>{ze().clearTimeout(s),delete ze()[Ef];const a=ze().grecaptcha;if(!a||!i1(a)){i(ht(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const h=l(u,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${XM}?${xo({onload:Ef,render:"explicit",hl:n})}`;qy(o).catch(()=>{clearTimeout(s),i(ht(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=ze().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function ZM(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class e${async load(e){return new HM(e)}clearedOneInstance(){}}/**
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
 */const oC="recaptcha",t$={theme:"light",type:"image"};class n${constructor(e,n=Object.assign({},t$),r){this.parameters=n,this.type=oC,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ue(r),this.isInvisible=this.parameters.size==="invisible",x(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;x(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new e$:new JM,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){x(!this.parameters.sitekey,this.auth,"argument-error"),x(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),x(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=ze()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){x(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){x(zy()&&!Xy(),this.auth,"internal-error"),await r$(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await kL(this.auth);x(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return x(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function r$(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Jy{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ji._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function i$(t,e,n){const r=Ue(t),i=await Id(r,e,j(n));return new Jy(i,s=>vd(r,s))}async function s$(t,e,n){const r=j(t);await yd(!1,r,"phone");const i=await Id(r.auth,e,j(n));return new Jy(i,s=>Qk(r,s))}async function o$(t,e,n){const r=j(t),i=await Id(r.auth,e,j(n));return new Jy(i,s=>Yk(r,s))}async function Id(t,e,n){var r;const i=await n.verify();try{x(typeof i=="string",t,"argument-error"),x(n.type===oC,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return x(o.type==="enroll",t,"internal-error"),(await kM(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{x(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return x(a,t,"missing-multi-factor-info"),(await jM(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await BL(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function a$(t,e){await Wy(j(t),e)}/**
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
 */class In{constructor(e){this.providerId=In.PROVIDER_ID,this.auth=Ue(e)}verifyPhoneNumber(e,n){return Id(this.auth,e,j(n))}static credential(e,n){return ji._fromVerification(e,n)}static credentialFromResult(e){const n=e;return In.credentialFromTaggedObject(n)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?ji._fromTokenResponse(n,r):null}}In.PROVIDER_ID="phone";In.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function gs(t,e){return e?Qt(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Zy extends zo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return or(e,this._buildIdpRequest())}_linkToIdToken(e,n){return or(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return or(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function l$(t){return Kk(t.auth,new Zy(t),t.bypassAuthState)}function u$(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Hk(n,new Zy(t),t.bypassAuthState)}async function c$(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Wy(n,new Zy(t),t.bypassAuthState)}/**
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
 */class aC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return l$;case"linkViaPopup":case"linkViaRedirect":return c$;case"reauthViaPopup":case"reauthViaRedirect":return u$;default:pt(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const h$=new au(2e3,1e4);async function d$(t,e,n){const r=Ue(t);Uo(t,e,wr);const i=gs(r,n);return new nr(r,"signInViaPopup",e,i).executeNotNull()}async function f$(t,e,n){const r=j(t);Uo(r.auth,e,wr);const i=gs(r.auth,n);return new nr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function p$(t,e,n){const r=j(t);Uo(r.auth,e,wr);const i=gs(r.auth,n);return new nr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class nr extends aC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,nr.currentPopupAction&&nr.currentPopupAction.cancel(),nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=cu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,h$.get())};e()}}nr.currentPopupAction=null;/**
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
 */const m$="pendingRedirect",Va=new Map;class g$ extends aC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Va.get(this.auth._key());if(!e){try{const r=await y$(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Va.set(this.auth._key(),e)}return this.bypassAuthState||Va.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function y$(t,e){const n=uC(e),r=lC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function ev(t,e){return lC(t)._set(uC(e),"true")}function v$(){Va.clear()}function tv(t,e){Va.set(t._key(),e)}function lC(t){return Qt(t._redirectPersistence)}function uC(t){return Bi(m$,t.config.apiKey,t.name)}/**
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
 */function w$(t,e,n){return _$(t,e,n)}async function _$(t,e,n){const r=Ue(t);Uo(t,e,wr),await r._initializationPromise;const i=gs(r,n);return await ev(i,r),i._openRedirect(r,e,"signInViaRedirect")}function I$(t,e,n){return E$(t,e,n)}async function E$(t,e,n){const r=j(t);Uo(r.auth,e,wr),await r.auth._initializationPromise;const i=gs(r.auth,n);await ev(i,r.auth);const s=await cC(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function S$(t,e,n){return T$(t,e,n)}async function T$(t,e,n){const r=j(t);Uo(r.auth,e,wr),await r.auth._initializationPromise;const i=gs(r.auth,n);await yd(!1,r,e.providerId),await ev(i,r.auth);const s=await cC(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function k$(t,e){return await Ue(t)._initializationPromise,Ed(t,e,!1)}async function Ed(t,e,n=!1){const r=Ue(t),i=gs(r,e),o=await new g$(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function cC(t){const e=cu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const C$=10*60*1e3;class hC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!A$(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!dC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ht(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=C$&&this.cachedEventUids.clear(),this.cachedEventUids.has(h1(e))}saveEventToCache(e){this.cachedEventUids.add(h1(e)),this.lastProcessedEventTime=Date.now()}}function h1(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function A$(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dC(t);default:return!1}}/**
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
 */async function fC(t,e={}){return He(t,"GET","/v1/projects",e)}/**
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
 */const x$=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,N$=/^https?/;async function D$(t){if(t.config.emulator)return;const{authorizedDomains:e}=await fC(t);for(const n of e)try{if(b$(n))return}catch{}pt(t,"unauthorized-domain")}function b$(t){const e=Nl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!N$.test(n))return!1;if(x$.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const R$=new au(3e4,6e4);function d1(){const t=ze().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function P$(t){return new Promise((e,n)=>{var r,i,s;function o(){d1(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{d1(),n(ht(t,"network-request-failed"))},timeout:R$.get()})}if(!((i=(r=ze().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ze().gapi)===null||s===void 0)&&s.load)o();else{const a=Vk("iframefcb");return ze()[a]=()=>{gapi.load?o():n(ht(t,"network-request-failed"))},qy(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw dc=null,e})}let dc=null;function O$(t){return dc=dc||P$(t),dc}/**
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
 */const L$=new au(5e3,15e3),M$="__/auth/iframe",$$="emulator/auth/iframe",F$={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},U$=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function V$(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?By(e,$$):`https://${t.config.authDomain}/${M$}`,r={apiKey:e.apiKey,appName:t.name,v:ci},i=U$.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${xo(r).slice(1)}`}async function z$(t){const e=await O$(t),n=ze().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:V$(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:F$,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ht(t,"network-request-failed"),a=ze().setTimeout(()=>{s(o)},L$.get());function l(){ze().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const B$={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},j$=500,q$=600,W$="_blank",G$="http://localhost";class f1{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function H$(t,e,n,r=j$,i=q$){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},B$),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ne().toLowerCase();n&&(a=Rk(u)?W$:n),bk(u)&&(e=e||G$,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(EL(u)&&a!=="_self")return K$(e||"",a),new f1(null);const h=window.open(e||"",a,c);x(h,t,"popup-blocked");try{h.focus()}catch{}return new f1(h)}function K$(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Q$="__/auth/handler",Y$="emulator/auth/handler",X$=encodeURIComponent("fac");async function um(t,e,n,r,i,s){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ci,eventId:i};if(e instanceof wr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",wN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Bo){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${X$}=${encodeURIComponent(l)}`:"";return`${J$(t)}?${xo(a).slice(1)}${u}`}function J$({config:t}){return t.emulator?By(t,Y$):`https://${t.authDomain}/${Q$}`}/**
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
 */const Sf="webStorageSupport";class Z${constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ss,this._completeRedirectFn=Ed,this._overrideRedirectResult=tv}async _openPopup(e,n,r,i){var s;kn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await um(e,n,r,Nl(),i);return H$(e,o,cu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await um(e,n,r,Nl(),i);return OM(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await z$(e),r=new hC(e);return n.register("authEvent",i=>(x(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sf,{type:Sf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Sf];o!==void 0&&n(!!o),pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=D$(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Mk()||jy()||Vo()}}const eF=Z$;class tF{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Un("unexpected MultiFactorSessionType")}}}class nv extends tF{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new nv(e)}_finalizeEnroll(e,n,r){return CM(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return qM(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class pC{constructor(){}static assertion(e){return nv._fromCredential(e)}}pC.FACTOR_ID="phone";var p1="@firebase/auth",m1="0.23.2";/**
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
 */class nF{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function rF(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function iF(t){Yr(new Wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$k(t)},u=new bL(r,i,s,l);return RL(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Yr(new Wn("auth-internal",e=>{const n=Ue(e.getProvider("auth").getImmediate());return(r=>new nF(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bn(p1,m1,rF(t)),Bn(p1,m1,"esm2017")}/**
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
 */const sF=5*60;uN("authIdTokenMaxAge");iF("Browser");/**
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
 */function os(){return window}/**
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
 */const oF=2e3;async function aF(t,e,n){var r;const{BuildInfo:i}=os();kn(e.sessionId,"AuthEvent did not contain a session ID");const s=await dF(e.sessionId),o={};return Vo()?o.ibi=i.packageName:lu()?o.apn=i.packageName:pt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,um(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function lF(t){const{BuildInfo:e}=os(),n={};Vo()?n.iosBundleId=e.packageName:lu()?n.androidPackageName=e.packageName:pt(t,"operation-not-supported-in-this-environment"),await fC(t,n)}function uF(t){const{cordova:e}=os();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,IL()?"_blank":"_system","location=yes"),n(i)})})}async function cF(t,e,n){const{cordova:r}=os();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(ht(t,"redirect-cancelled-by-user"))},oF))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),lu()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function hF(t){var e,n,r,i,s,o,a,l,u,c;const h=os();x(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),x(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),x(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),x(typeof((l=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),x(typeof((c=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function dF(t){const e=fF(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function fF(t){if(kn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const pF=20;class mF extends hC{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function gF(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:wF(),postBody:null,tenantId:t.tenantId,error:ht(t,"no-auth-event")}}function yF(t,e){return cm()._set(hm(t),e)}async function g1(t){const e=await cm()._get(hm(t));return e&&await cm()._remove(hm(t)),e}function vF(t,e){var n,r;const i=IF(e);if(i.includes("/__/auth/callback")){const s=fc(i),o=s.firebaseError?_F(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?ht(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function wF(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<pF;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function cm(){return Qt(Yy)}function hm(t){return Bi("authEvent",t.config.apiKey,t.name)}function _F(t){try{return JSON.parse(t)}catch{return null}}function IF(t){const e=fc(t),n=e.link?decodeURIComponent(e.link):void 0,r=fc(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return fc(i).link||i||r||n||t}function fc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Vs(n.join("?"))}/**
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
 */const EF=500;class SF{constructor(){this._redirectPersistence=ss,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Ed,this._overrideRedirectResult=tv}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new mF(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){pt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){hF(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),v$(),await this._originValidation(e);const o=gF(e,r,i);await yF(e,o);const a=await aF(e,o,n),l=await uF(a);return cF(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lF(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=os(),o=setTimeout(async()=>{await g1(e),n.onEvent(y1())},EF),a=async c=>{clearTimeout(o);const h=await g1(e);let d=null;h&&(c==null?void 0:c.url)&&(d=vF(h,c.url)),n.onEvent(d||y1())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;os().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(h){console.error(h)}}}}const TF=SF;function y1(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ht("no-auth-event")}}/**
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
 */function kF(t,e){Ue(t)._logFramework(e)}var CF="@firebase/auth-compat",AF="0.4.2";/**
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
 */const xF=1e3;function za(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function NF(){return za()==="http:"||za()==="https:"}function mC(t=Ne()){return!!((za()==="file:"||za()==="ionic:"||za()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function DF(){return dg()||hg()}function bF(){return HI()&&(document==null?void 0:document.documentMode)===11}function RF(t=Ne()){return/Edge\/\d+/.test(t)}function PF(t=Ne()){return bF()||RF(t)}function gC(){try{const t=self.localStorage,e=cu();if(t)return t.setItem(e,"1"),t.removeItem(e),PF()?sl():!0}catch{return rv()&&sl()}return!1}function rv(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Tf(){return(NF()||GI()||mC())&&!DF()&&gC()&&!rv()}function yC(){return mC()&&typeof document<"u"}async function OF(){return yC()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},xF);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function LF(){return typeof window<"u"?window:null}/**
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
 */const Ht={LOCAL:"local",NONE:"none",SESSION:"session"},ca=x,vC="persistence";function MF(t,e){if(ca(Object.values(Ht).includes(e),t,"invalid-persistence-type"),dg()){ca(e!==Ht.SESSION,t,"unsupported-persistence-type");return}if(hg()){ca(e===Ht.NONE,t,"unsupported-persistence-type");return}if(rv()){ca(e===Ht.NONE||e===Ht.LOCAL&&sl(),t,"unsupported-persistence-type");return}ca(e===Ht.NONE||gC(),t,"unsupported-persistence-type")}async function dm(t){await t._initializationPromise;const e=wC(),n=Bi(vC,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function $F(t,e){const n=wC();if(!n)return[];const r=Bi(vC,t,e);switch(n.getItem(r)){case Ht.NONE:return[So];case Ht.LOCAL:return[Pl,ss];case Ht.SESSION:return[ss];default:return[]}}function wC(){var t;try{return((t=LF())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const FF=x;class Mr{constructor(){this.browserResolver=Qt(eF),this.cordovaResolver=Qt(TF),this.underlyingResolver=null,this._redirectPersistence=ss,this._completeRedirectFn=Ed,this._overrideRedirectResult=tv}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return yC()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return FF(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await OF();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function _C(t){return t.unwrap()}function UF(t){return t.wrapped()}/**
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
 */function VF(t){return IC(t)}function zF(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new BF(t,TM(t,e))}else if(r){const i=IC(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function IC(t){const{_tokenResponse:e}=t instanceof Nt?t.customData:t;if(!e)return null;if(!(t instanceof Nt)&&"temporaryProof"in e&&"phoneNumber"in e)return In.credentialFromResult(t);const n=e.providerId;if(!n||n===ua.PASSWORD)return null;let r;switch(n){case ua.GOOGLE:r=Rn;break;case ua.FACEBOOK:r=bn;break;case ua.GITHUB:r=Pn;break;case ua.TWITTER:r=On;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?To._create(n,a):Kn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Zs(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof Nt?r.credentialFromError(t):r.credentialFromResult(t)}function Mt(t,e){return e.catch(n=>{throw n instanceof Nt&&zF(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:VF(n),additionalUserInfo:SM(n),user:rr.getOrCreate(i)}})}async function fm(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Mt(t,n.confirm(r))}}class BF{constructor(e,n){this.resolver=n,this.auth=UF(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Mt(_C(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class rr{constructor(e){this._delegate=e,this.multiFactor=xM(e)}static getOrCreate(e){return rr.USER_MAP.has(e)||rr.USER_MAP.set(e,new rr(e)),rr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Mt(this.auth,Qk(this._delegate,e))}async linkWithPhoneNumber(e,n){return fm(this.auth,s$(this._delegate,e,n))}async linkWithPopup(e){return Mt(this.auth,p$(this._delegate,e,Mr))}async linkWithRedirect(e){return await dm(Ue(this.auth)),S$(this._delegate,e,Mr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Mt(this.auth,Yk(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return fm(this.auth,o$(this._delegate,e,n))}reauthenticateWithPopup(e){return Mt(this.auth,f$(this._delegate,e,Mr))}async reauthenticateWithRedirect(e){return await dm(Ue(this.auth)),I$(this._delegate,e,Mr)}sendEmailVerification(e){return dM(this._delegate,e)}async unlink(e){return await JL(this._delegate,e),this}updateEmail(e){return gM(this._delegate,e)}updatePassword(e){return yM(this._delegate,e)}updatePhoneNumber(e){return a$(this._delegate,e)}updateProfile(e){return mM(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return fM(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}rr.USER_MAP=new WeakMap;/**
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
 */const ha=x;class pm{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;ha(r,"invalid-api-key",{appName:e.name}),ha(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Mr:void 0;this._delegate=n.initialize({options:{persistence:jF(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(nL),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?rr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){PL(this._delegate,e,n)}applyActionCode(e){return rM(this._delegate,e)}checkActionCode(e){return Xk(this._delegate,e)}confirmPasswordReset(e,n){return nM(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Mt(this._delegate,sM(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return hM(this._delegate,e)}isSignInWithEmailLink(e){return lM(this._delegate,e)}async getRedirectResult(){ha(Tf(),this._delegate,"operation-not-supported-in-this-environment");const e=await k$(this._delegate,Mr);return e?Mt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){kF(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=v1(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=v1(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return aM(this._delegate,e,n)}sendPasswordResetEmail(e,n){return tM(this._delegate,e,n||void 0)}async setPersistence(e){MF(this._delegate,e);let n;switch(e){case Ht.SESSION:n=ss;break;case Ht.LOCAL:n=await Qt(Pl)._isAvailable()?Pl:Yy;break;case Ht.NONE:n=So;break;default:return pt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Mt(this._delegate,XL(this._delegate))}signInWithCredential(e){return Mt(this._delegate,vd(this._delegate,e))}signInWithCustomToken(e){return Mt(this._delegate,eM(this._delegate,e))}signInWithEmailAndPassword(e,n){return Mt(this._delegate,oM(this._delegate,e,n))}signInWithEmailLink(e,n){return Mt(this._delegate,uM(this._delegate,e,n))}signInWithPhoneNumber(e,n){return fm(this._delegate,i$(this._delegate,e,n))}async signInWithPopup(e){return ha(Tf(),this._delegate,"operation-not-supported-in-this-environment"),Mt(this._delegate,d$(this._delegate,e,Mr))}async signInWithRedirect(e){return ha(Tf(),this._delegate,"operation-not-supported-in-this-environment"),await dm(this._delegate),w$(this._delegate,e,Mr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return iM(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}pm.Persistence=Ht;function v1(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&rr.getOrCreate(o)),error:e,complete:n}}function jF(t,e){const n=$F(t,e);if(typeof self<"u"&&!n.includes(Pl)&&n.push(Pl),typeof window<"u")for(const r of[Yy,ss])n.includes(r)||n.push(r);return n.includes(So)||n.push(So),n}/**
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
 */class iv{constructor(){this.providerId="phone",this._delegate=new In(_C(at.auth()))}static credential(e,n){return In.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}iv.PHONE_SIGN_IN_METHOD=In.PHONE_SIGN_IN_METHOD;iv.PROVIDER_ID=In.PROVIDER_ID;/**
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
 */const qF=x;class WF{constructor(e,n,r=at.app()){var i;qF((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new n$(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const GF="auth-compat";function HF(t){t.INTERNAL.registerComponent(new Wn(GF,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new pm(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ts.EMAIL_SIGNIN,PASSWORD_RESET:Ts.PASSWORD_RESET,RECOVER_EMAIL:Ts.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ts.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ts.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ts.VERIFY_EMAIL}},EmailAuthProvider:yi,FacebookAuthProvider:bn,GithubAuthProvider:Pn,GoogleAuthProvider:Rn,OAuthProvider:Zs,SAMLAuthProvider:uh,PhoneAuthProvider:iv,PhoneMultiFactorGenerator:pC,RecaptchaVerifier:WF,TwitterAuthProvider:On,Auth:pm,AuthCredential:zo,Error:Nt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(CF,AF)}HF(at);let J=null,Oe=null;function EC(t){at.apps.length?J=at.firestore():(at.initializeApp(t),J=at.firestore(),J.settings({cacheSizeBytes:at.firestore.CACHE_SIZE_UNLIMITED,merge:!0}),J.enablePersistence({synchronizeTabs:!0}).catch(()=>{}))}async function KF(t,e){Oe=(await at.auth().signInWithEmailAndPassword(t,e)).user.uid}const SC={url:"https://diegomottadev.github.io/gymlog/",handleCodeInApp:!1};async function QF(t,e){const n=await at.auth().createUserWithEmailAndPassword(t,e);return Oe=n.user.uid,await n.user.sendEmailVerification(SC),n.user}async function YF(){const t=at.auth().currentUser;t&&!t.emailVerified&&await t.sendEmailVerification(SC)}async function XF(){const t=at.auth().currentUser;return t?(await t.reload(),at.auth().currentUser):null}async function sv(){await at.auth().signOut(),Oe=null}function JF(t){at.auth().onAuthStateChanged(t)}function ZF(t){Oe=t}async function e4(){if(!J||!Oe)return null;try{const t=await J.collection("users").doc(Oe).get();return t.exists?t.data():null}catch(t){return console.error("fbLoad",t),null}}function t4(t){return JSON.parse(JSON.stringify(t))}async function w1(t){if(!(!J||!Oe))try{await J.collection("users").doc(Oe).set(t4(t),{merge:!0})}catch(e){console.error("fbSave",e)}}async function _1(t,e={}){!J||!Oe||await J.collection("users").doc(Oe).set({role:t,profile:e},{merge:!0})}async function I1(){if(!J||!Oe)return"athlete";try{const t=await J.collection("users").doc(Oe).get();return t.exists&&t.data().role?t.data().role:"athlete"}catch(t){return console.error("fbLoadUserRole",t),"athlete"}}async function n4(){if(!J||!Oe)return null;try{const t=await J.collection("users").doc(Oe).get();return t.exists&&t.data().profile||null}catch(t){return console.error("fbLoadUserProfile",t),null}}async function P4(t){!J||!Oe||await J.collection("users").doc(Oe).set({profile:t},{merge:!0})}async function r4(t){if(!J){const r=await Pt(()=>Promise.resolve().then(()=>Yx),void 0).then(i=>i.FIREBASE_CONFIG);EC(r)}const e=t.email.replace(/[^a-zA-Z0-9]/g,"_");if((await J.collection("trainerRequests").doc(e).get()).exists)throw new Error("Ya existe una solicitud con este email.");await J.collection("trainerRequests").doc(e).set({...t,status:"pending",createdAt:new Date().toISOString()})}async function TC(){if(!J||!Oe)return null;try{const t=await J.collection("trainerRequests").doc(Oe).get();return t.exists?t.data():null}catch(t){return console.error("fbLoadTrainerRequest",t),null}}async function O4(){if(!J)return[];try{return(await J.collection("trainerRequests").where("status","==","pending").get()).docs.map(e=>({id:e.id,...e.data()}))}catch(t){return console.error("fbLoadPendingRequests",t),[]}}async function L4(t){!J||await J.collection("trainerRequests").doc(t).update({status:"rejected"})}async function i4(t){if(!J||!Oe)return;const e=t.id?J.collection("sharedObjectives").doc(t.id):J.collection("sharedObjectives").doc(),n={trainerId:Oe,trainerEmail:t.trainerEmail,studentEmail:t.studentEmail,objective:t.objective,updatedAt:new Date().toISOString()};return t.studentProfile&&(n.studentProfile=t.studentProfile),t.id||(n.createdAt=new Date().toISOString()),await e.set(n,{merge:!0}),e.id}async function E1(){if(!J||!Oe)return[];try{return(await J.collection("sharedObjectives").where("trainerId","==",Oe).get()).docs.map(e=>({id:e.id,...e.data()}))}catch(t){return console.error("fbLoadSharedByTrainer",t),[]}}async function S1(t){if(!J)return[];try{return(await J.collection("sharedObjectives").where("studentEmail","==",t).get()).docs.map(n=>({id:n.id,...n.data()}))}catch(e){return console.error("fbLoadSharedByStudent",e),[]}}async function s4(t,e){!J||await J.collection("sharedObjectives").doc(t).update({objective:e,updatedAt:new Date().toISOString()})}async function o4(t){!J||await J.collection("sharedObjectives").doc(t).delete()}async function M4(t,e,n){if(!J)return null;const r=J.collection("sharedObjectives").doc(t),i=await r.get();if(!i.exists)return null;const o=i.data().completions||[],a=new Date,l=a.getDay(),u=l===0?6:l-1,c=new Date(a);c.setDate(a.getDate()-u),c.setHours(12,0,0,0);const h=new Date(c.getFullYear(),c.getMonth(),c.getDate()+6,12,0,0),d=g=>String(g).padStart(2,"0"),p=`${c.getFullYear()}-${d(c.getMonth()+1)}-${d(c.getDate())}`,y=`${h.getFullYear()}-${d(h.getMonth()+1)}-${d(h.getDate())}`,v=o.find(g=>g.dayIndex===e&&g.date>=p&&g.date<=y);let k;if(v)k=o.filter(g=>g.id!==v.id);else{const g=Math.random().toString(36).slice(2,9)+Date.now().toString(36).slice(-4);k=[...o,{id:g,dayIndex:e,date:n,completedAt:new Date().toISOString()}]}return await r.update({completions:k}),k}async function $4(){return"Notification"in window?await Notification.requestPermission():"denied"}function a4(t,e){"Notification"in window&&Notification.permission==="granted"&&new Notification(t,{body:e,icon:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>\u{1F4AA}</text></svg>"})}var Sd={exports:{}},Td={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l4=L.exports,u4=Symbol.for("react.element"),c4=Symbol.for("react.fragment"),h4=Object.prototype.hasOwnProperty,d4=l4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f4={key:!0,ref:!0,__self:!0,__source:!0};function kC(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)h4.call(e,r)&&!f4.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:u4,type:t,key:s,ref:o,props:i,_owner:d4.current}}Td.Fragment=c4;Td.jsx=kC;Td.jsxs=kC;(function(t){t.exports=Td})(Sd);const T1=Sd.exports.Fragment,S=Sd.exports.jsx,me=Sd.exports.jsxs;function fh({onClick:t,children:e,variant:n="primary",style:r={},disabled:i=!1}){const s={primary:{background:Xe,color:"#111"},ghost:{background:"transparent",color:q.muted,border:`1px solid ${q.border}`},danger:{background:"transparent",color:q.danger,border:`1px solid ${q.danger}`}};return S("button",{onClick:i?void 0:t,style:{padding:"10px 20px",borderRadius:10,fontWeight:700,fontSize:14,cursor:i?"not-allowed":"pointer",border:"none",transition:"opacity .15s",opacity:i?.4:1,...s[n],...r},children:e})}function ph({value:t,onChange:e,placeholder:n,type:r="text",step:i,min:s,style:o={},onKeyDown:a}){return S("input",{type:r,value:t,onChange:e,placeholder:n,step:i,min:s,onKeyDown:a,style:{width:"100%",background:q.hi,border:`1px solid ${q.border}`,borderRadius:12,padding:"12px 16px",color:q.text,fontSize:14,outline:"none",marginBottom:10,...o}})}function p4({onDone:t,onTrainerRegister:e}){const[n,r]=L.exports.useState("login"),[i,s]=L.exports.useState(""),[o,a]=L.exports.useState(""),[l,u]=L.exports.useState(""),[c,h]=L.exports.useState(!1),[d,p]=L.exports.useState(!1),[y,v]=L.exports.useState(!1);L.exports.useEffect(()=>{if(!d)return;const m=setInterval(async()=>{const I=await XF();I&&I.emailVerified&&(p(!1),t())},3e3);return()=>clearInterval(m)},[d,t]);const k=async()=>{if(!i||!o){u("Complet\xE1 email y contrase\xF1a.");return}if(o.length<6){u("La contrase\xF1a debe tener al menos 6 caracteres.");return}h(!0),u("");try{n==="login"?(await KF(i,o),t()):(await QF(i,o),p(!0))}catch(m){u({"auth/user-not-found":"Usuario no encontrado. \xBFQuer\xE9s registrarte?","auth/wrong-password":"Contrase\xF1a incorrecta.","auth/email-already-in-use":"Ese email ya est\xE1 registrado.","auth/invalid-email":"Email inv\xE1lido.","auth/invalid-credential":"Email o contrase\xF1a incorrectos."}[m.code]||m.message)}h(!1)},g=async()=>{try{await YF(),v(!0),setTimeout(()=>v(!1),5e3)}catch{u("Error al reenviar. Intent\xE1 de nuevo en unos minutos.")}},f=async()=>{await sv(),p(!1),r("login"),s(""),a(""),u("")};return d?me("div",{style:{maxWidth:480,margin:"0 auto",padding:"32px 20px",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"},children:[S("div",{style:{fontSize:48,marginBottom:20},children:"\u{1F4E7}"}),S("div",{style:{fontSize:20,fontWeight:800,marginBottom:8},children:"Verific\xE1 tu email"}),S("div",{style:{fontSize:14,color:"#fff",marginBottom:8,lineHeight:1.5},children:"Enviamos un link de verificaci\xF3n a"}),S("div",{style:{fontSize:15,fontWeight:700,color:Xe,marginBottom:20},children:i}),S("div",{style:{fontSize:14,color:"#fff",marginBottom:24,lineHeight:1.5},children:"Abr\xED tu correo y hac\xE9 clic en el link. Esta p\xE1gina se actualizar\xE1 autom\xE1ticamente."}),y&&S("div",{style:{color:Xe,fontSize:13,marginBottom:16,padding:"10px 14px",background:`${Xe}22`,borderRadius:10,border:`1px solid ${Xe}44`},children:"Email reenviado correctamente"}),S(fh,{onClick:g,variant:"ghost",style:{padding:"12px 24px",borderRadius:12,marginBottom:12,fontSize:14},children:"Reenviar email"}),S("span",{onClick:f,style:{color:"#fff",cursor:"pointer",fontSize:13,marginTop:8},children:"\u2190 Volver al inicio de sesi\xF3n"})]}):me("div",{style:{maxWidth:480,margin:"0 auto",padding:"32px 20px",minHeight:"100vh"},children:[S("div",{style:{fontSize:12,color:"#fff",letterSpacing:"2px",marginBottom:24},children:"GYM TRACKER"}),S("div",{style:{fontSize:22,fontWeight:800,marginBottom:6},children:n==="login"?"Iniciar sesi\xF3n \u{1F4AA}":"Crear cuenta \u{1F4AA}"}),S("div",{style:{fontSize:14,color:"#fff",marginBottom:24},children:"Tus entrenamientos sincronizados en todos tus dispositivos."}),S("label",{style:{fontSize:14,color:"#fff",letterSpacing:"1px",display:"block",marginBottom:6},children:"EMAIL"}),S(ph,{value:i,onChange:m=>s(m.target.value),placeholder:"tu@email.com"}),S("label",{style:{fontSize:14,color:"#fff",letterSpacing:"1px",display:"block",marginBottom:6},children:"CONTRASE\xD1A"}),S(ph,{type:"password",value:o,onChange:m=>a(m.target.value),placeholder:"m\xEDnimo 6 caracteres"}),l&&S("div",{style:{color:q.danger,fontSize:13,marginBottom:12,padding:"10px 14px",background:"rgba(255,85,85,.1)",borderRadius:10,border:`1px solid ${q.danger}`},children:l}),S(fh,{onClick:k,disabled:c,style:{width:"100%",padding:14,fontSize:15,borderRadius:14,marginTop:4},children:c?"...":n==="login"?"Entrar \u2192":"Crear cuenta \u2192"}),me("div",{style:{textAlign:"center",marginTop:16,fontSize:14,color:"#fff"},children:[n==="login"?"\xBFNo ten\xE9s cuenta? ":"\xBFYa ten\xE9s cuenta? ",S("span",{onClick:()=>{r(n==="login"?"register":"login"),u("")},style:{color:Xe,cursor:"pointer",fontWeight:700},children:n==="login"?"Registrate":"Inici\xE1 sesi\xF3n"})]}),e&&S("div",{style:{textAlign:"center",marginTop:12,fontSize:13},children:S("span",{onClick:e,style:{color:"#fff",cursor:"pointer",textDecoration:"underline"},children:"Registrarse como Personal Trainer"})})]})}function m4({onDone:t,onBack:e}){const[n,r]=L.exports.useState(""),[i,s]=L.exports.useState("+54"),[o,a]=L.exports.useState(""),[l,u]=L.exports.useState(""),[c,h]=L.exports.useState(""),[d,p]=L.exports.useState(wp[0]),[y,v]=L.exports.useState(""),[k,g]=L.exports.useState(!1),[f,m]=L.exports.useState(!1),I=async()=>{if(!n.trim()||!c){v("Complet\xE1 todos los campos obligatorios.");return}g(!0),v("");try{await r4({email:c,fullName:n.trim(),phone:{countryCode:i,areaCode:o,number:l},studentCount:d}),m(!0)}catch(E){v(E.message||"Error al enviar solicitud.")}g(!1)};return f?me("div",{style:{maxWidth:480,margin:"0 auto",padding:"32px 20px",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"},children:[S("div",{style:{fontSize:48,marginBottom:20},children:"\u2705"}),S("div",{style:{fontSize:20,fontWeight:800,marginBottom:8},children:"Solicitud enviada"}),S("div",{style:{fontSize:14,color:"#fff",marginBottom:8,lineHeight:1.5},children:"Tu solicitud como Personal Trainer fue enviada correctamente."}),S("div",{style:{fontSize:15,fontWeight:700,color:Xe,marginBottom:20},children:c}),S("div",{style:{fontSize:14,color:"#fff",marginBottom:24,lineHeight:1.5},children:"Cuando un administrador apruebe tu solicitud, recibir\xE1s un email con tus credenciales de acceso."}),S("span",{onClick:e,style:{color:"#fff",cursor:"pointer",fontSize:14,marginTop:8},children:"\u2190 Volver al inicio de sesi\xF3n"})]}):me("div",{style:{maxWidth:480,margin:"0 auto",padding:"32px 20px",minHeight:"100vh"},children:[S("div",{style:{fontSize:12,color:"#fff",letterSpacing:"2px",marginBottom:24},children:"GYM TRACKER"}),S("div",{style:{fontSize:22,fontWeight:800,marginBottom:6},children:"Registro Personal Trainer"}),S("div",{style:{fontSize:14,color:"#fff",marginBottom:24},children:"Complet\xE1 tus datos para solicitar acceso como entrenador."}),S("label",{style:{fontSize:13,color:"#fff",letterSpacing:"1px",display:"block",marginBottom:6},children:"NOMBRE COMPLETO *"}),S(ph,{value:n,onChange:E=>r(E.target.value),placeholder:"Tu nombre completo"}),S("label",{style:{fontSize:13,color:"#fff",letterSpacing:"1px",display:"block",marginBottom:6},children:"TEL\xC9FONO"}),me("div",{style:{display:"flex",gap:8,marginBottom:16},children:[S("input",{value:i,onChange:E=>s(E.target.value),placeholder:"+54",style:{width:60,background:q.card,border:`1px solid ${q.border}`,borderRadius:12,padding:"12px 10px",color:q.text,fontSize:14,outline:"none"}}),S("input",{value:o,onChange:E=>a(E.target.value),placeholder:"11",style:{width:60,background:q.card,border:`1px solid ${q.border}`,borderRadius:12,padding:"12px 10px",color:q.text,fontSize:14,outline:"none"}}),S("input",{value:l,onChange:E=>u(E.target.value),placeholder:"12345678",style:{flex:1,background:q.card,border:`1px solid ${q.border}`,borderRadius:12,padding:"12px 14px",color:q.text,fontSize:14,outline:"none"}})]}),S("label",{style:{fontSize:13,color:"#fff",letterSpacing:"1px",display:"block",marginBottom:6},children:"RANGO DE ALUMNOS"}),S("div",{style:{display:"flex",gap:8,marginBottom:16},children:wp.map(E=>S("button",{onClick:()=>p(E),style:{flex:1,padding:"10px 0",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",background:d===E?Xe:q.card,color:d===E?"#111":"#fff",border:`1px solid ${d===E?Xe:q.border}`},children:E},E))}),S("label",{style:{fontSize:13,color:"#fff",letterSpacing:"1px",display:"block",marginBottom:6},children:"EMAIL *"}),S(ph,{value:c,onChange:E=>h(E.target.value),placeholder:"tu@email.com"}),y&&S("div",{style:{color:q.danger,fontSize:14,marginBottom:12,padding:"10px 14px",background:"rgba(255,85,85,.1)",borderRadius:10,border:`1px solid ${q.danger}`},children:y}),S(fh,{onClick:I,disabled:k,style:{width:"100%",padding:14,fontSize:15,borderRadius:14,marginTop:4},children:k?"...":"Enviar solicitud \u2192"}),S("div",{style:{textAlign:"center",marginTop:16},children:S("span",{onClick:e,style:{color:"#fff",cursor:"pointer",fontSize:14},children:"\u2190 Volver al inicio de sesi\xF3n"})})]})}function g4({onApproved:t,onLogout:e}){const[n,r]=L.exports.useState("pending");L.exports.useEffect(()=>{const s=setInterval(async()=>{const o=await TC();o&&o.status==="approved"?(r("approved"),clearInterval(s),t()):o&&o.status==="rejected"&&(r("rejected"),clearInterval(s))},1e4);return()=>clearInterval(s)},[t]);const i=async()=>{await sv(),e()};return me("div",{style:{maxWidth:480,margin:"0 auto",padding:"32px 20px",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"},children:[n==="pending"&&me(T1,{children:[S("div",{style:{fontSize:48,marginBottom:20},children:"\u23F3"}),S("div",{style:{fontSize:20,fontWeight:800,marginBottom:8},children:"Solicitud en revision"}),S("div",{style:{fontSize:14,color:q.muted,marginBottom:8,lineHeight:1.5},children:"Tu solicitud como Personal Trainer esta siendo revisada por un administrador."}),S("div",{style:{fontSize:13,color:q.muted,marginBottom:24,lineHeight:1.5},children:"Esta pagina se actualizara automaticamente cuando sea aprobada."}),S("div",{style:{width:40,height:40,border:`3px solid ${q.border}`,borderTopColor:Xe,borderRadius:"50%",animation:"spin 1s linear infinite",marginBottom:24}}),S("style",{children:"@keyframes spin { to { transform: rotate(360deg) } }"})]}),n==="rejected"&&me(T1,{children:[S("div",{style:{fontSize:48,marginBottom:20},children:"\u274C"}),S("div",{style:{fontSize:20,fontWeight:800,marginBottom:8},children:"Solicitud rechazada"}),S("div",{style:{fontSize:14,color:q.muted,marginBottom:24,lineHeight:1.5},children:"Tu solicitud como Personal Trainer fue rechazada. Contacta al administrador para mas informacion."})]}),S(fh,{onClick:i,variant:"ghost",style:{padding:"12px 24px",borderRadius:12,fontSize:14},children:"Cerrar sesion"})]})}const y4=L.exports.lazy(()=>Pt(()=>import("./AdminView.98f63782.js"),["assets/AdminView.98f63782.js","assets/Card.064ddbc8.js"])),v4=L.exports.lazy(()=>Pt(()=>import("./StudentsView.3f3ec869.js"),["assets/StudentsView.3f3ec869.js","assets/Card.064ddbc8.js"])),w4=L.exports.lazy(()=>Pt(()=>import("./HomeView.54442d9d.js"),["assets/HomeView.54442d9d.js","assets/Card.064ddbc8.js"])),_4=L.exports.lazy(()=>Pt(()=>import("./StatsView.c860a38f.js"),["assets/StatsView.c860a38f.js","assets/Card.064ddbc8.js"])),I4=L.exports.lazy(()=>Pt(()=>import("./ObjectivesView.9524a26e.js"),["assets/ObjectivesView.9524a26e.js","assets/Card.064ddbc8.js"])),k1=L.exports.lazy(()=>Pt(()=>import("./ObjectiveView.3cef6741.js"),["assets/ObjectiveView.3cef6741.js","assets/Card.064ddbc8.js"])),C1=L.exports.lazy(()=>Pt(()=>import("./DayView.6754d26f.js"),["assets/DayView.6754d26f.js","assets/Card.064ddbc8.js","assets/BackHeader.6827a745.js"])),E4=L.exports.lazy(()=>Pt(()=>import("./TodayRoutineView.49ccbb0d.js"),["assets/TodayRoutineView.49ccbb0d.js","assets/Card.064ddbc8.js","assets/BackHeader.6827a745.js"])),S4=L.exports.lazy(()=>Pt(()=>import("./SharedDayView.22525af7.js"),["assets/SharedDayView.22525af7.js","assets/Card.064ddbc8.js","assets/BackHeader.6827a745.js"])),T4=L.exports.lazy(()=>Pt(()=>import("./CalendarView.f3498ba7.js"),["assets/CalendarView.f3498ba7.js","assets/Card.064ddbc8.js"])),A1=L.exports.lazy(()=>Pt(()=>import("./SubscriptionView.7360b9ce.js"),["assets/SubscriptionView.7360b9ce.js","assets/Card.064ddbc8.js"])),k4=L.exports.lazy(()=>Pt(()=>import("./AccountView.b21937f9.js"),["assets/AccountView.b21937f9.js","assets/Card.064ddbc8.js"])),C4=L.exports.lazy(()=>Pt(()=>import("./TrainerHomeView.36ce9b42.js"),["assets/TrainerHomeView.36ce9b42.js","assets/Card.064ddbc8.js"])),A4=L.exports.lazy(()=>Pt(()=>import("./StudentDetailView.b30ad238.js"),["assets/StudentDetailView.b30ad238.js","assets/Card.064ddbc8.js","assets/BackHeader.6827a745.js"])),x4=S("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"60vh"},children:S("div",{style:{fontSize:13,color:q.muted},children:"Cargando..."})});function N4(){const[t,e]=L.exports.useState("loading"),[n,r]=L.exports.useState({...Fc}),[i,s]=L.exports.useState("home"),[o,a]=L.exports.useState("idle"),[l,u]=L.exports.useState(null),[c,h]=L.exports.useState(null),[d,p]=L.exports.useState("objectives"),[y,v]=L.exports.useState("athlete"),[k,g]=L.exports.useState(""),[f,m]=L.exports.useState([]),[I,E]=L.exports.useState(null),[N,R]=L.exports.useState(null),[U,oe]=L.exports.useState(null),[B,Ot]=L.exports.useState(null),[_r,Ir]=L.exports.useState(null),[du,jo]=L.exports.useState(!1),[qo,vi]=L.exports.useState(null),[M,G]=L.exports.useState(null),Q=L.exports.useRef(null),Ie=L.exports.useCallback(D=>{Q.current&&clearTimeout(Q.current),a("syncing"),Q.current=setTimeout(async()=>{await w1(D),a("ok")},1e3)},[]);L.exports.useEffect(()=>{try{EC($I)}catch(D){console.error(D)}JF(async D=>{if(!D){e("login");return}ZF(D.uid),Ir(D.uid),g(D.email||""),a("syncing");const X=await e4(),H=Jx();let he;X?he=Zx(H,X):he=H;const Cn={};(he.completions||[]).forEach(Ee=>{const Qn=Ee.objectiveId+"-"+Ee.dayIndex+"-"+Ee.date;Cn[Qn]||(Cn[Qn]=Ee)}),he.completions=Object.values(Cn);const mt=new Date().toISOString().slice(0,10);he.objectives=he.objectives.map(Ee=>Ee.endDate&&Ee.endDate<mt&&Ee.active===void 0?{...Ee,active:!1}:Ee),Iw(he),r(he),await w1(he),a("ok");let St="athlete";if(vp.includes(D.email))St="admin",v("admin"),await _1("admin");else{const Ee=await I1();if(Ee==="pending_trainer"){const Qn=await TC();if(Qn&&Qn.status==="approved")St="trainer",v("trainer"),await _1("trainer");else{v("pending_trainer"),e("pendingApproval");return}}else Ee==="trainer"?(St="trainer",v("trainer")):v("athlete")}if(St!=="admin")try{const Qn=await(await fetch(`${FI}/initTrial`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uid:D.uid})})).json();if(Ot(Qn.subscription),Qn.subscription.status==="expired"||Qn.subscription.status==="none"){e("subscription");return}}catch(Ee){console.error("subscription check failed:",Ee)}e("app");const uv=await n4();vi(uv),new URLSearchParams(window.location.search).get("subscription")==="success"&&(jo(!0),window.history.replaceState({},"",window.location.pathname));const ws=vp.includes(D.email)?"admin":await I1();if(ws==="trainer"||ws==="admin"){const Ee=await E1();m(Ee)}else{const Ee=await S1(D.email);m(Ee)}})},[]);const ae=L.exports.useCallback(D=>{r(X=>{const H=D(X);return Iw(H),Ie(H),H})},[Ie]),ys=L.exports.useCallback(D=>{const X=eN(D);ae(H=>({...H,objectives:[...H.objectives,X]}))},[ae]),dn=L.exports.useCallback(D=>{ae(X=>({...X,objectives:X.objectives.map(H=>H.id===D.id?D:H)}))},[ae]),Wo=L.exports.useCallback(D=>{ae(X=>({...X,objectives:X.objectives.filter(H=>H.id!==D),completions:X.completions.filter(H=>H.objectiveId!==D)}))},[ae]),fn=L.exports.useCallback((D,X,H)=>{ae(he=>{const Cn=he.completions.find(St=>St.objectiveId===D&&St.dayIndex===X&&St.date===H),mt=Cn?he.completions.filter(St=>St.id!==Cn.id):[...he.completions,{id:VI(),objectiveId:D,dayIndex:X,date:H}];return{...he,completions:mt}})},[ae]),vs=L.exports.useCallback(D=>{ae(X=>({...X,reminder:D}))},[ae]),fu=L.exports.useCallback(async()=>{await sv(),r({...Fc}),s("home"),v("athlete"),m([]),g(""),Ir(null),Ot(null),vi(null),e("login")},[]),ov=L.exports.useCallback(async D=>{const X=await i4(D),H=y==="trainer"||y==="admin"?await E1():await S1(k);return m(H),X},[y,k]),kd=L.exports.useCallback(async(D,X)=>{await s4(D,X),m(H=>H.map(he=>he.id===D?{...he,objective:X}:he)),E(H=>H&&H.id===D?{...H,objective:X}:H)},[]),av=L.exports.useCallback(async D=>{await o4(D),m(X=>X.filter(H=>H.id!==D))},[]),lv=L.exports.useRef("");L.exports.useEffect(()=>{const D=setInterval(()=>{if(!n.reminder.enabled)return;const X=new Date,H=String(X.getHours()).padStart(2,"0"),he=String(X.getMinutes()).padStart(2,"0"),Cn=H+":"+he,mt=zI();if(Cn===n.reminder.time&&lv.current!==mt){lv.current=mt;const St=Xx();n.objectives.filter(Go=>Go.active!==!1).some(Go=>{const ws=Go.days[St];return!ws||!ws.label&&!ws.exercises.length?!1:!n.completions.some(Ee=>Ee.objectiveId===Go.id&&Ee.dayIndex===St&&Ee.date===mt)})&&a4("Gym Tracker","Tenes rutinas pendientes para hoy. A entrenar!")}},3e4);return()=>clearInterval(D)},[n.reminder,n.objectives,n.completions]);const CC=L.exports.useMemo(()=>{const D={athlete:[{id:"home",label:"Inicio",ic:"\u{1F3E0}"},{id:"objectives",label:"Objetivos",ic:"\u{1F3AF}"},{id:"calendar",label:"Calendario",ic:"\u{1F4C5}"},{id:"stats",label:"Stats",ic:"\u{1F4CA}"},{id:"account",label:"Cuenta",ic:"\u{1F464}"}],trainer:[{id:"home",label:"Inicio",ic:"\u{1F3E0}"},{id:"students",label:"Alumnos",ic:"\u{1F465}"},{id:"objectives",label:"Objetivos",ic:"\u{1F3AF}"},{id:"calendar",label:"Calendario",ic:"\u{1F4C5}"},{id:"stats",label:"Stats",ic:"\u{1F4CA}"},{id:"account",label:"Cuenta",ic:"\u{1F464}"}],admin:[{id:"home",label:"Inicio",ic:"\u{1F3E0}"},{id:"admin",label:"Admin",ic:"\u{1F4CB}"},{id:"objectives",label:"Objetivos",ic:"\u{1F3AF}"},{id:"stats",label:"Stats",ic:"\u{1F4CA}"},{id:"account",label:"Cuenta",ic:"\u{1F464}"}]};return D[y]||D.athlete},[y]),AC=L.exports.useCallback((D,X)=>{m(H=>H.map(he=>he.id===D?{...he,completions:X}:he)),E(H=>H&&H.id===D?{...H,completions:X}:H)},[]);if(t==="loading")return me("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",flexDirection:"column",gap:16},children:[S("div",{style:{fontSize:32},children:"\u{1F4AA}"}),S("div",{style:{fontSize:13,color:q.muted},children:"Cargando..."})]});if(t==="login")return S(p4,{onDone:()=>{},onTrainerRegister:()=>e("trainerRegister")});if(t==="trainerRegister")return S(m4,{onDone:()=>e("pendingApproval"),onBack:()=>e("login")});if(t==="pendingApproval")return S(g4,{onApproved:()=>{v("trainer"),e("app")},onLogout:fu});if(t==="subscription")return S(A1,{uid:_r,email:k,role:y,subscription:B,onLogout:fu});const pu=["objective","day","todayRoutine","sharedObjective","sharedDay","premium","studentDetail"].includes(i),xC=o==="syncing"?"\u27F3":o==="ok"?"\u2601\uFE0F":"\u26A0\uFE0F";return me("div",{style:{background:q.bg,minHeight:"100vh",color:q.text,maxWidth:480,margin:"0 auto",paddingBottom:pu?0:y!=="admin"&&(!B||B.status!=="active")?108:76},children:[!pu&&me("div",{style:{position:"absolute",top:24,right:20,display:"flex",alignItems:"center",gap:10,zIndex:50},children:[S("span",{style:{fontSize:15},children:xC}),y!=="athlete"&&S("span",{style:{fontSize:9,color:Xe,fontWeight:700,background:`${Xe}22`,padding:"2px 8px",borderRadius:6},children:y==="admin"?"ADMIN":"TRAINER"})]}),me(L.exports.Suspense,{fallback:x4,children:[i==="home"&&y==="athlete"&&S(w4,{data:n,sharedObjectives:f,onSelectObjective:D=>{u(D),p("home"),s("objective")},onSelectTodayRoutine:D=>{u(D),s("todayRoutine")},onUpdateReminder:vs,onSelectShared:D=>{E(D),s("sharedObjective")}}),i==="home"&&(y==="trainer"||y==="admin")&&S(C4,{sharedObjectives:f,onSelectStudent:D=>{G(D),s("studentDetail")}}),i==="todayRoutine"&&S(E4,{objective:n.objectives.find(D=>D.id===l),completions:n.completions,onToggleCompletion:fn,onBack:()=>s("home")}),i==="calendar"&&S(T4,{data:n,onSelectObjectiveDay:(D,X,H)=>{u(D),h(X),oe(H||null),p("calendar"),s("day")},onToggleCompletion:fn}),i==="stats"&&S(_4,{data:n}),i==="objectives"&&S(I4,{data:n,onCreate:ys,onSelect:D=>{u(D),p("objectives"),s("objective")},onDelete:Wo,onUpdate:dn}),i==="objective"&&S(k1,{objective:n.objectives.find(D=>D.id===l),completions:n.completions,onBack:()=>s(d),onUpdate:dn,onSelectDay:D=>{h(D),s("day")}}),i==="day"&&S(C1,{objective:n.objectives.find(D=>D.id===l),dayIndex:c,selectedDate:U,completions:n.completions,onToggleCompletion:fn,onBack:()=>{oe(null),s(d==="calendar"?"calendar":"objective")},onUpdate:dn}),i==="premium"&&S(A1,{uid:_r,email:k,role:y,subscription:B,onLogout:fu,onBack:()=>s("home")}),i==="account"&&S(k4,{email:k,role:y,subscription:B,profile:qo,onUpdateProfile:vi,onLogout:fu}),i==="admin"&&S(y4,{adminEmail:k}),i==="students"&&S(v4,{sharedObjectives:f,trainerEmail:k,onSaveShared:ov,onDeleteShared:av,onSelectStudent:D=>{G(D),s("studentDetail")}}),i==="studentDetail"&&M&&S(A4,{studentEmail:M,sharedObjectives:f,trainerEmail:k,onSaveShared:ov,onDeleteShared:av,onSelectShared:D=>{E(D),s("sharedObjective")},onBack:()=>s("students")}),i==="sharedObjective"&&I&&S(k1,{objective:I.objective,completions:y==="athlete"?(I.completions||[]).map(D=>({...D,objectiveId:I.objective.id})):[],readOnly:y==="athlete",onBack:()=>s(y==="athlete"?"home":M?"studentDetail":"students"),onUpdate:D=>kd(I.id,D),onSelectDay:D=>{R(D),s("sharedDay")}}),i==="sharedDay"&&I&&(y==="athlete"?S(S4,{sharedObjective:I,dayIndex:N,onBack:()=>s("sharedObjective"),onUpdateShared:kd,onCompletionChanged:AC}):S(C1,{objective:I.objective,dayIndex:N,completions:[],onToggleCompletion:()=>{},onBack:()=>s("sharedObjective"),onUpdate:D=>kd(I.id,D)}))]}),!pu&&y!=="admin"&&(!B||B.status!=="active")&&S("div",{style:{position:"fixed",bottom:68,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:480,zIndex:101},children:me("button",{onClick:()=>s("premium"),style:{width:"100%",padding:"7px 0",background:"linear-gradient(135deg, #FFD700, #FFA500)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8},children:[S("span",{style:{fontSize:14},children:"\u2B50"}),S("span",{style:{fontSize:12,fontWeight:800,color:"#111"},children:"Premium"}),B&&B.status==="trial"&&S("span",{style:{fontSize:10,fontWeight:700,color:"#111",background:"rgba(0,0,0,.15)",padding:"2px 6px",borderRadius:6},children:"Trial activo"})]})}),!pu&&S("div",{style:{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:480,background:q.card,borderTop:`1px solid ${q.border}`,display:"flex",zIndex:100},children:CC.map(D=>me("button",{onClick:()=>s(D.id),style:{flex:1,padding:"10px 0 14px",background:"none",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[S("span",{style:{fontSize:24},children:D.ic}),S("span",{style:{fontSize:12,fontWeight:i===D.id?800:400,color:i===D.id?Xe:"#fff"},children:D.label}),i===D.id&&S("div",{style:{width:24,height:2,background:Xe,borderRadius:2}})]},D.id))}),du&&(()=>{const X=UI[y==="trainer"?"trainer":"athlete"],H=B&&B.startDate?new Date(B.startDate).toLocaleDateString("es-AR",{day:"numeric",month:"long",year:"numeric"}):new Date().toLocaleDateString("es-AR",{day:"numeric",month:"long",year:"numeric"}),he=B&&B.renewalDate?new Date(B.renewalDate).toLocaleDateString("es-AR",{day:"numeric",month:"long",year:"numeric"}):(()=>{const mt=new Date;return mt.setMonth(mt.getMonth()+1),mt.toLocaleDateString("es-AR",{day:"numeric",month:"long",year:"numeric"})})(),Cn=[{ic:"\u{1F3AF}",text:"Objetivos ilimitados"},{ic:"\u{1F4C5}",text:"Calendario de entrenamientos"},{ic:"\u{1F4CA}",text:"Estadisticas detalladas"},{ic:"\u{1F514}",text:"Recordatorios diarios"},{ic:"\u2601\uFE0F",text:"Sincronizacion en la nube"},...y==="trainer"?[{ic:"\u{1F465}",text:"Gestion de alumnos"},{ic:"\u{1F4CB}",text:"Rutinas compartidas"}]:[]];return S("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,.85)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:20},onClick:()=>jo(!1),children:me("div",{onClick:mt=>mt.stopPropagation(),style:{background:q.card,borderRadius:20,padding:"32px 24px",maxWidth:400,width:"100%",border:`1px solid ${Xe}44`,maxHeight:"90vh",overflowY:"auto"},children:[me("div",{style:{textAlign:"center",marginBottom:24},children:[S("div",{style:{fontSize:48,marginBottom:12},children:"\u{1F389}"}),S("div",{style:{fontSize:22,fontWeight:800,marginBottom:6},children:"Bienvenido a Premium!"}),S("div",{style:{fontSize:13,color:q.muted},children:"Tu suscripcion fue activada con exito"})]}),me("div",{style:{background:q.hi,borderRadius:14,padding:16,marginBottom:16,border:`1px solid ${q.border}`},children:[S("div",{style:{fontSize:10,color:q.muted,letterSpacing:"1px",marginBottom:12},children:"DETALLES DEL PLAN"}),me("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8},children:[S("span",{style:{fontSize:13,color:q.muted},children:"Plan"}),S("span",{style:{fontSize:13,fontWeight:700,color:Xe},children:X.label})]}),me("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8},children:[S("span",{style:{fontSize:13,color:q.muted},children:"Precio"}),me("span",{style:{fontSize:13,fontWeight:700},children:["$",X.ars.toLocaleString("es-AR")," ARS / $",X.usd," USD"]})]}),me("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8},children:[S("span",{style:{fontSize:13,color:q.muted},children:"Inicio"}),S("span",{style:{fontSize:13,fontWeight:700},children:H})]}),me("div",{style:{display:"flex",justifyContent:"space-between"},children:[S("span",{style:{fontSize:13,color:q.muted},children:"Renovacion"}),S("span",{style:{fontSize:13,fontWeight:700},children:he})]})]}),me("div",{style:{background:q.hi,borderRadius:14,padding:16,marginBottom:24,border:`1px solid ${q.border}`},children:[S("div",{style:{fontSize:10,color:q.muted,letterSpacing:"1px",marginBottom:12},children:"QUE INCLUYE"}),Cn.map((mt,St)=>me("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"6px 0"},children:[S("span",{style:{fontSize:16},children:mt.ic}),S("span",{style:{fontSize:13},children:mt.text})]},St))]}),S("button",{onClick:()=>jo(!1),style:{width:"100%",padding:14,fontSize:15,fontWeight:800,borderRadius:14,border:"none",cursor:"pointer",background:Xe,color:"#111"},children:"Comenzar"})]})})})()]})}kf.createRoot(document.getElementById("root")).render(S(N4,{}));export{Xe as A,fh as B,q as C,MI as D,FI as F,ph as I,b4 as R,UI as S,Pt as _,VI as a,S as b,eN as c,L4 as d,Xx as e,O4 as f,R4 as g,$4 as h,D4 as i,me as j,T1 as k,_p as l,M4 as m,P4 as n,L as r,zI as t};
