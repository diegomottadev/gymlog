var Jx=Object.defineProperty;var Zx=(t,e,n)=>e in t?Jx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Cv=(t,e,n)=>(Zx(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var JU=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function eC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var D={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fl=Symbol.for("react.element"),tC=Symbol.for("react.portal"),nC=Symbol.for("react.fragment"),rC=Symbol.for("react.strict_mode"),iC=Symbol.for("react.profiler"),sC=Symbol.for("react.provider"),oC=Symbol.for("react.context"),aC=Symbol.for("react.forward_ref"),lC=Symbol.for("react.suspense"),uC=Symbol.for("react.memo"),cC=Symbol.for("react.lazy"),bv=Symbol.iterator;function dC(t){return t===null||typeof t!="object"?null:(t=bv&&t[bv]||t["@@iterator"],typeof t=="function"?t:null)}var G1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H1=Object.assign,K1={};function xo(t,e,n){this.props=t,this.context=e,this.refs=K1,this.updater=n||G1}xo.prototype.isReactComponent={};xo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Q1(){}Q1.prototype=xo.prototype;function Am(t,e,n){this.props=t,this.context=e,this.refs=K1,this.updater=n||G1}var Nm=Am.prototype=new Q1;Nm.constructor=Am;H1(Nm,xo.prototype);Nm.isPureReactComponent=!0;var Av=Array.isArray,Y1=Object.prototype.hasOwnProperty,Dm={current:null},X1={key:!0,ref:!0,__self:!0,__source:!0};function J1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Y1.call(e,r)&&!X1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Fl,type:t,key:s,ref:o,props:i,_owner:Dm.current}}function hC(t,e){return{$$typeof:Fl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fl}function fC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Nv=/\/+/g;function Oh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?fC(""+t.key):e.toString(36)}function Xu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fl:case tC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Oh(o,0):r,Av(i)?(n="",t!=null&&(n=t.replace(Nv,"$&/")+"/"),Xu(i,e,n,"",function(u){return u})):i!=null&&(Rm(i)&&(i=hC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Nv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Av(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Oh(s,a);o+=Xu(s,e,n,l,i)}else if(l=dC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Oh(s,a++),o+=Xu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function _u(t,e,n){if(t==null)return t;var r=[],i=0;return Xu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function pC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Pt={current:null},Ju={transition:null},mC={ReactCurrentDispatcher:Pt,ReactCurrentBatchConfig:Ju,ReactCurrentOwner:Dm};function Z1(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:_u,forEach:function(t,e,n){_u(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _u(t,function(){e++}),e},toArray:function(t){return _u(t,function(e){return e})||[]},only:function(t){if(!Rm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=xo;te.Fragment=nC;te.Profiler=iC;te.PureComponent=Am;te.StrictMode=rC;te.Suspense=lC;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mC;te.act=Z1;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=H1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Dm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Y1.call(e,l)&&!X1.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Fl,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:oC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:sC,_context:t},t.Consumer=t};te.createElement=J1;te.createFactory=function(t){var e=J1.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:aC,render:t}};te.isValidElement=Rm;te.lazy=function(t){return{$$typeof:cC,_payload:{_status:-1,_result:t},_init:pC}};te.memo=function(t,e){return{$$typeof:uC,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=Ju.transition;Ju.transition={};try{t()}finally{Ju.transition=e}};te.unstable_act=Z1;te.useCallback=function(t,e){return Pt.current.useCallback(t,e)};te.useContext=function(t){return Pt.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return Pt.current.useDeferredValue(t)};te.useEffect=function(t,e){return Pt.current.useEffect(t,e)};te.useId=function(){return Pt.current.useId()};te.useImperativeHandle=function(t,e,n){return Pt.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return Pt.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return Pt.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return Pt.current.useMemo(t,e)};te.useReducer=function(t,e,n){return Pt.current.useReducer(t,e,n)};te.useRef=function(t){return Pt.current.useRef(t)};te.useState=function(t){return Pt.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return Pt.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return Pt.current.useTransition()};te.version="18.3.1";(function(t){t.exports=te})(D);const ZU=eC(D.exports);var Uf={},e_={exports:{}},nn={},t_={exports:{}},n_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,H){var X=V.length;V.push(H);e:for(;0<X;){var Ee=X-1>>>1,De=V[Ee];if(0<i(De,H))V[Ee]=H,V[X]=De,X=Ee;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var H=V[0],X=V.pop();if(X!==H){V[0]=X;e:for(var Ee=0,De=V.length,_i=De>>>1;Ee<_i;){var vt=2*(Ee+1)-1,Go=V[vt],pn=vt+1,_s=V[pn];if(0>i(Go,X))pn<De&&0>i(_s,Go)?(V[Ee]=_s,V[pn]=X,Ee=pn):(V[Ee]=Go,V[vt]=X,Ee=vt);else if(pn<De&&0>i(_s,X))V[Ee]=_s,V[pn]=X,Ee=pn;else break e}}return H}function i(V,H){var X=V.sortIndex-H.sortIndex;return X!==0?X:V.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,g=!1,v=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(V){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=V)r(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(u)}}function E(V){if(w=!1,y(V),!v)if(n(l)!==null)v=!0,Wo(T);else{var H=n(u);H!==null&&wi(E,H.startTime-V)}}function T(V,H){v=!1,w&&(w=!1,p(U),U=-1),g=!0;var X=h;try{for(y(H),d=n(l);d!==null&&(!(d.expirationTime>H)||V&&!Mt());){var Ee=d.callback;if(typeof Ee=="function"){d.callback=null,h=d.priorityLevel;var De=Ee(d.expirationTime<=H);H=t.unstable_now(),typeof De=="function"?d.callback=De:d===n(l)&&r(l),y(H)}else r(l);d=n(l)}if(d!==null)var _i=!0;else{var vt=n(u);vt!==null&&wi(E,vt.startTime-H),_i=!1}return _i}finally{d=null,h=X,g=!1}}var b=!1,P=null,U=-1,le=5,Z=-1;function Mt(){return!(t.unstable_now()-Z<le)}function Ne(){if(P!==null){var V=t.unstable_now();Z=V;var H=!0;try{H=P(!0,V)}finally{H?Ir():(b=!1,P=null)}}else b=!1}var Ir;if(typeof f=="function")Ir=function(){f(Ne)};else if(typeof MessageChannel<"u"){var qo=new MessageChannel,gu=qo.port2;qo.port1.onmessage=Ne,Ir=function(){gu.postMessage(null)}}else Ir=function(){k(Ne,0)};function Wo(V){P=V,b||(b=!0,Ir())}function wi(V,H){U=k(function(){V(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,Wo(T))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(V){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var X=h;h=H;try{return V()}finally{h=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,H){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var X=h;h=V;try{return H()}finally{h=X}},t.unstable_scheduleCallback=function(V,H,X){var Ee=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?Ee+X:Ee):X=Ee,V){case 1:var De=-1;break;case 2:De=250;break;case 5:De=1073741823;break;case 4:De=1e4;break;default:De=5e3}return De=X+De,V={id:c++,callback:H,priorityLevel:V,startTime:X,expirationTime:De,sortIndex:-1},X>Ee?(V.sortIndex=X,e(u,V),n(l)===null&&V===n(u)&&(w?(p(U),U=-1):w=!0,wi(E,X-Ee))):(V.sortIndex=De,e(l,V),v||g||(v=!0,Wo(T))),V},t.unstable_shouldYield=Mt,t.unstable_wrapCallback=function(V){var H=h;return function(){var X=h;h=H;try{return V.apply(this,arguments)}finally{h=X}}}})(n_);(function(t){t.exports=n_})(t_);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gC=D.exports,Zt=t_.exports;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r_=new Set,Ga={};function cs(t,e){ro(t,e),ro(t+"Capture",e)}function ro(t,e){for(Ga[t]=e,t=0;t<e.length;t++)r_.add(e[t])}var lr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vf=Object.prototype.hasOwnProperty,yC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dv={},Rv={};function vC(t){return Vf.call(Rv,t)?!0:Vf.call(Dv,t)?!1:yC.test(t)?Rv[t]=!0:(Dv[t]=!0,!1)}function wC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _C(t,e,n,r){if(e===null||typeof e>"u"||wC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ot(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){mt[t]=new Ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];mt[e]=new Ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){mt[t]=new Ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){mt[t]=new Ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){mt[t]=new Ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){mt[t]=new Ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){mt[t]=new Ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){mt[t]=new Ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){mt[t]=new Ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pm=/[\-:]([a-z])/g;function Om(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Pm,Om);mt[e]=new Ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Pm,Om);mt[e]=new Ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Pm,Om);mt[e]=new Ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){mt[t]=new Ot(t,1,!1,t.toLowerCase(),null,!1,!1)});mt.xlinkHref=new Ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){mt[t]=new Ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lm(t,e,n,r){var i=mt.hasOwnProperty(e)?mt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(_C(e,n,i,r)&&(n=null),r||i===null?vC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var mr=gC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Iu=Symbol.for("react.element"),As=Symbol.for("react.portal"),Ns=Symbol.for("react.fragment"),Mm=Symbol.for("react.strict_mode"),zf=Symbol.for("react.profiler"),i_=Symbol.for("react.provider"),s_=Symbol.for("react.context"),$m=Symbol.for("react.forward_ref"),Bf=Symbol.for("react.suspense"),jf=Symbol.for("react.suspense_list"),Fm=Symbol.for("react.memo"),br=Symbol.for("react.lazy"),o_=Symbol.for("react.offscreen"),Pv=Symbol.iterator;function Yo(t){return t===null||typeof t!="object"?null:(t=Pv&&t[Pv]||t["@@iterator"],typeof t=="function"?t:null)}var be=Object.assign,Lh;function ma(t){if(Lh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lh=e&&e[1]||""}return`
`+Lh+t}var Mh=!1;function $h(t,e){if(!t||Mh)return"";Mh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Mh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ma(t):""}function IC(t){switch(t.tag){case 5:return ma(t.type);case 16:return ma("Lazy");case 13:return ma("Suspense");case 19:return ma("SuspenseList");case 0:case 2:case 15:return t=$h(t.type,!1),t;case 11:return t=$h(t.type.render,!1),t;case 1:return t=$h(t.type,!0),t;default:return""}}function qf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ns:return"Fragment";case As:return"Portal";case zf:return"Profiler";case Mm:return"StrictMode";case Bf:return"Suspense";case jf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case s_:return(t.displayName||"Context")+".Consumer";case i_:return(t._context.displayName||"Context")+".Provider";case $m:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fm:return e=t.displayName||null,e!==null?e:qf(t.type)||"Memo";case br:e=t._payload,t=t._init;try{return qf(t(e))}catch{}}return null}function EC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qf(e);case 8:return e===Mm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function a_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function SC(t){var e=a_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Eu(t){t._valueTracker||(t._valueTracker=SC(t))}function l_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=a_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ic(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wf(t,e){var n=e.checked;return be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Ov(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function u_(t,e){e=e.checked,e!=null&&Lm(t,"checked",e,!1)}function Gf(t,e){u_(t,e);var n=Hr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Hf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Hf(t,e.type,Hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Hf(t,e,n){(e!=="number"||Ic(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ga=Array.isArray;function js(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Hr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Kf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Mv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(ga(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Hr(n)}}function c_(t,e){var n=Hr(e.value),r=Hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function $v(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function d_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?d_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Su,h_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Su=Su||document.createElement("div"),Su.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Su.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ha(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},TC=["Webkit","ms","Moz","O"];Object.keys(Ca).forEach(function(t){TC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ca[e]=Ca[t]})});function f_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ca.hasOwnProperty(t)&&Ca[t]?(""+e).trim():e+"px"}function p_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=f_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var kC=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yf(t,e){if(e){if(kC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function Xf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jf=null;function Um(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zf=null,qs=null,Ws=null;function Fv(t){if(t=zl(t)){if(typeof Zf!="function")throw Error(A(280));var e=t.stateNode;e&&(e=xd(e),Zf(t.stateNode,t.type,e))}}function m_(t){qs?Ws?Ws.push(t):Ws=[t]:qs=t}function g_(){if(qs){var t=qs,e=Ws;if(Ws=qs=null,Fv(t),e)for(t=0;t<e.length;t++)Fv(e[t])}}function y_(t,e){return t(e)}function v_(){}var Fh=!1;function w_(t,e,n){if(Fh)return t(e,n);Fh=!0;try{return y_(t,e,n)}finally{Fh=!1,(qs!==null||Ws!==null)&&(v_(),g_())}}function Ka(t,e){var n=t.stateNode;if(n===null)return null;var r=xd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var ep=!1;if(lr)try{var Xo={};Object.defineProperty(Xo,"passive",{get:function(){ep=!0}}),window.addEventListener("test",Xo,Xo),window.removeEventListener("test",Xo,Xo)}catch{ep=!1}function xC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ba=!1,Ec=null,Sc=!1,tp=null,CC={onError:function(t){ba=!0,Ec=t}};function bC(t,e,n,r,i,s,o,a,l){ba=!1,Ec=null,xC.apply(CC,arguments)}function AC(t,e,n,r,i,s,o,a,l){if(bC.apply(this,arguments),ba){if(ba){var u=Ec;ba=!1,Ec=null}else throw Error(A(198));Sc||(Sc=!0,tp=u)}}function ds(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function __(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Uv(t){if(ds(t)!==t)throw Error(A(188))}function NC(t){var e=t.alternate;if(!e){if(e=ds(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Uv(i),t;if(s===r)return Uv(i),e;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function I_(t){return t=NC(t),t!==null?E_(t):null}function E_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=E_(t);if(e!==null)return e;t=t.sibling}return null}var S_=Zt.unstable_scheduleCallback,Vv=Zt.unstable_cancelCallback,DC=Zt.unstable_shouldYield,RC=Zt.unstable_requestPaint,Ue=Zt.unstable_now,PC=Zt.unstable_getCurrentPriorityLevel,Vm=Zt.unstable_ImmediatePriority,T_=Zt.unstable_UserBlockingPriority,Tc=Zt.unstable_NormalPriority,OC=Zt.unstable_LowPriority,k_=Zt.unstable_IdlePriority,Ed=null,Bn=null;function LC(t){if(Bn&&typeof Bn.onCommitFiberRoot=="function")try{Bn.onCommitFiberRoot(Ed,t,void 0,(t.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:FC,MC=Math.log,$C=Math.LN2;function FC(t){return t>>>=0,t===0?32:31-(MC(t)/$C|0)|0}var Tu=64,ku=4194304;function ya(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function kc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ya(a):(s&=o,s!==0&&(r=ya(s)))}else o=n&~i,o!==0?r=ya(o):s!==0&&(r=ya(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-In(e),i=1<<n,r|=t[n],e&=~i;return r}function UC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function VC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-In(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=UC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function np(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function x_(){var t=Tu;return Tu<<=1,(Tu&4194240)===0&&(Tu=64),t}function Uh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ul(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-In(e),t[e]=n}function zC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-In(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function zm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-In(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function C_(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var b_,Bm,A_,N_,D_,rp=!1,xu=[],Fr=null,Ur=null,Vr=null,Qa=new Map,Ya=new Map,Nr=[],BC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zv(t,e){switch(t){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":Ur=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":Qa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ya.delete(e.pointerId)}}function Jo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=zl(e),e!==null&&Bm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function jC(t,e,n,r,i){switch(e){case"focusin":return Fr=Jo(Fr,t,e,n,r,i),!0;case"dragenter":return Ur=Jo(Ur,t,e,n,r,i),!0;case"mouseover":return Vr=Jo(Vr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Qa.set(s,Jo(Qa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ya.set(s,Jo(Ya.get(s)||null,t,e,n,r,i)),!0}return!1}function R_(t){var e=Ri(t.target);if(e!==null){var n=ds(e);if(n!==null){if(e=n.tag,e===13){if(e=__(n),e!==null){t.blockedOn=e,D_(t.priority,function(){A_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ip(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Jf=r,n.target.dispatchEvent(r),Jf=null}else return e=zl(n),e!==null&&Bm(e),t.blockedOn=n,!1;e.shift()}return!0}function Bv(t,e,n){Zu(t)&&n.delete(e)}function qC(){rp=!1,Fr!==null&&Zu(Fr)&&(Fr=null),Ur!==null&&Zu(Ur)&&(Ur=null),Vr!==null&&Zu(Vr)&&(Vr=null),Qa.forEach(Bv),Ya.forEach(Bv)}function Zo(t,e){t.blockedOn===e&&(t.blockedOn=null,rp||(rp=!0,Zt.unstable_scheduleCallback(Zt.unstable_NormalPriority,qC)))}function Xa(t){function e(i){return Zo(i,t)}if(0<xu.length){Zo(xu[0],t);for(var n=1;n<xu.length;n++){var r=xu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Fr!==null&&Zo(Fr,t),Ur!==null&&Zo(Ur,t),Vr!==null&&Zo(Vr,t),Qa.forEach(e),Ya.forEach(e),n=0;n<Nr.length;n++)r=Nr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Nr.length&&(n=Nr[0],n.blockedOn===null);)R_(n),n.blockedOn===null&&Nr.shift()}var Gs=mr.ReactCurrentBatchConfig,xc=!0;function WC(t,e,n,r){var i=he,s=Gs.transition;Gs.transition=null;try{he=1,jm(t,e,n,r)}finally{he=i,Gs.transition=s}}function GC(t,e,n,r){var i=he,s=Gs.transition;Gs.transition=null;try{he=4,jm(t,e,n,r)}finally{he=i,Gs.transition=s}}function jm(t,e,n,r){if(xc){var i=ip(t,e,n,r);if(i===null)Qh(t,e,r,Cc,n),zv(t,r);else if(jC(i,t,e,n,r))r.stopPropagation();else if(zv(t,r),e&4&&-1<BC.indexOf(t)){for(;i!==null;){var s=zl(i);if(s!==null&&b_(s),s=ip(t,e,n,r),s===null&&Qh(t,e,r,Cc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Qh(t,e,r,null,n)}}var Cc=null;function ip(t,e,n,r){if(Cc=null,t=Um(r),t=Ri(t),t!==null)if(e=ds(t),e===null)t=null;else if(n=e.tag,n===13){if(t=__(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cc=t,null}function P_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(PC()){case Vm:return 1;case T_:return 4;case Tc:case OC:return 16;case k_:return 536870912;default:return 16}default:return 16}}var Or=null,qm=null,ec=null;function O_(){if(ec)return ec;var t,e=qm,n=e.length,r,i="value"in Or?Or.value:Or.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ec=i.slice(t,1<r?1-r:void 0)}function tc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Cu(){return!0}function jv(){return!1}function rn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Cu:jv,this.isPropagationStopped=jv,this}return be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cu)},persist:function(){},isPersistent:Cu}),e}var Co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wm=rn(Co),Vl=be({},Co,{view:0,detail:0}),HC=rn(Vl),Vh,zh,ea,Sd=be({},Vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ea&&(ea&&t.type==="mousemove"?(Vh=t.screenX-ea.screenX,zh=t.screenY-ea.screenY):zh=Vh=0,ea=t),Vh)},movementY:function(t){return"movementY"in t?t.movementY:zh}}),qv=rn(Sd),KC=be({},Sd,{dataTransfer:0}),QC=rn(KC),YC=be({},Vl,{relatedTarget:0}),Bh=rn(YC),XC=be({},Co,{animationName:0,elapsedTime:0,pseudoElement:0}),JC=rn(XC),ZC=be({},Co,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),e2=rn(ZC),t2=be({},Co,{data:0}),Wv=rn(t2),n2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=i2[t])?!!e[t]:!1}function Gm(){return s2}var o2=be({},Vl,{key:function(t){if(t.key){var e=n2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=tc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?r2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gm,charCode:function(t){return t.type==="keypress"?tc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),a2=rn(o2),l2=be({},Sd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gv=rn(l2),u2=be({},Vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gm}),c2=rn(u2),d2=be({},Co,{propertyName:0,elapsedTime:0,pseudoElement:0}),h2=rn(d2),f2=be({},Sd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),p2=rn(f2),m2=[9,13,27,32],Hm=lr&&"CompositionEvent"in window,Aa=null;lr&&"documentMode"in document&&(Aa=document.documentMode);var g2=lr&&"TextEvent"in window&&!Aa,L_=lr&&(!Hm||Aa&&8<Aa&&11>=Aa),Hv=String.fromCharCode(32),Kv=!1;function M_(t,e){switch(t){case"keyup":return m2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ds=!1;function y2(t,e){switch(t){case"compositionend":return $_(e);case"keypress":return e.which!==32?null:(Kv=!0,Hv);case"textInput":return t=e.data,t===Hv&&Kv?null:t;default:return null}}function v2(t,e){if(Ds)return t==="compositionend"||!Hm&&M_(t,e)?(t=O_(),ec=qm=Or=null,Ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return L_&&e.locale!=="ko"?null:e.data;default:return null}}var w2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!w2[t.type]:e==="textarea"}function F_(t,e,n,r){m_(r),e=bc(e,"onChange"),0<e.length&&(n=new Wm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Na=null,Ja=null;function _2(t){Q_(t,0)}function Td(t){var e=Os(t);if(l_(e))return t}function I2(t,e){if(t==="change")return e}var U_=!1;if(lr){var jh;if(lr){var qh="oninput"in document;if(!qh){var Yv=document.createElement("div");Yv.setAttribute("oninput","return;"),qh=typeof Yv.oninput=="function"}jh=qh}else jh=!1;U_=jh&&(!document.documentMode||9<document.documentMode)}function Xv(){Na&&(Na.detachEvent("onpropertychange",V_),Ja=Na=null)}function V_(t){if(t.propertyName==="value"&&Td(Ja)){var e=[];F_(e,Ja,t,Um(t)),w_(_2,e)}}function E2(t,e,n){t==="focusin"?(Xv(),Na=e,Ja=n,Na.attachEvent("onpropertychange",V_)):t==="focusout"&&Xv()}function S2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Td(Ja)}function T2(t,e){if(t==="click")return Td(e)}function k2(t,e){if(t==="input"||t==="change")return Td(e)}function x2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Tn=typeof Object.is=="function"?Object.is:x2;function Za(t,e){if(Tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vf.call(e,i)||!Tn(t[i],e[i]))return!1}return!0}function Jv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zv(t,e){var n=Jv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jv(n)}}function z_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?z_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function B_(){for(var t=window,e=Ic();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ic(t.document)}return e}function Km(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function C2(t){var e=B_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&z_(n.ownerDocument.documentElement,n)){if(r!==null&&Km(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Zv(n,s);var o=Zv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var b2=lr&&"documentMode"in document&&11>=document.documentMode,Rs=null,sp=null,Da=null,op=!1;function e0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;op||Rs==null||Rs!==Ic(r)||(r=Rs,"selectionStart"in r&&Km(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Da&&Za(Da,r)||(Da=r,r=bc(sp,"onSelect"),0<r.length&&(e=new Wm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Rs)))}function bu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ps={animationend:bu("Animation","AnimationEnd"),animationiteration:bu("Animation","AnimationIteration"),animationstart:bu("Animation","AnimationStart"),transitionend:bu("Transition","TransitionEnd")},Wh={},j_={};lr&&(j_=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function kd(t){if(Wh[t])return Wh[t];if(!Ps[t])return t;var e=Ps[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in j_)return Wh[t]=e[n];return t}var q_=kd("animationend"),W_=kd("animationiteration"),G_=kd("animationstart"),H_=kd("transitionend"),K_=new Map,t0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function li(t,e){K_.set(t,e),cs(e,[t])}for(var Gh=0;Gh<t0.length;Gh++){var Hh=t0[Gh],A2=Hh.toLowerCase(),N2=Hh[0].toUpperCase()+Hh.slice(1);li(A2,"on"+N2)}li(q_,"onAnimationEnd");li(W_,"onAnimationIteration");li(G_,"onAnimationStart");li("dblclick","onDoubleClick");li("focusin","onFocus");li("focusout","onBlur");li(H_,"onTransitionEnd");ro("onMouseEnter",["mouseout","mouseover"]);ro("onMouseLeave",["mouseout","mouseover"]);ro("onPointerEnter",["pointerout","pointerover"]);ro("onPointerLeave",["pointerout","pointerover"]);cs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cs("onBeforeInput",["compositionend","keypress","textInput","paste"]);cs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D2=new Set("cancel close invalid load scroll toggle".split(" ").concat(va));function n0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,AC(r,e,void 0,t),t.currentTarget=null}function Q_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;n0(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;n0(i,a,u),s=l}}}if(Sc)throw t=tp,Sc=!1,tp=null,t}function ge(t,e){var n=e[dp];n===void 0&&(n=e[dp]=new Set);var r=t+"__bubble";n.has(r)||(Y_(e,t,2,!1),n.add(r))}function Kh(t,e,n){var r=0;e&&(r|=4),Y_(n,t,r,e)}var Au="_reactListening"+Math.random().toString(36).slice(2);function el(t){if(!t[Au]){t[Au]=!0,r_.forEach(function(n){n!=="selectionchange"&&(D2.has(n)||Kh(n,!1,t),Kh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Au]||(e[Au]=!0,Kh("selectionchange",!1,e))}}function Y_(t,e,n,r){switch(P_(e)){case 1:var i=WC;break;case 4:i=GC;break;default:i=jm}n=i.bind(null,e,n,t),i=void 0,!ep||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Qh(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ri(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}w_(function(){var u=s,c=Um(n),d=[];e:{var h=K_.get(t);if(h!==void 0){var g=Wm,v=t;switch(t){case"keypress":if(tc(n)===0)break e;case"keydown":case"keyup":g=a2;break;case"focusin":v="focus",g=Bh;break;case"focusout":v="blur",g=Bh;break;case"beforeblur":case"afterblur":g=Bh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=qv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=QC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=c2;break;case q_:case W_:case G_:g=JC;break;case H_:g=h2;break;case"scroll":g=HC;break;case"wheel":g=p2;break;case"copy":case"cut":case"paste":g=e2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Gv}var w=(e&4)!==0,k=!w&&t==="scroll",p=w?h!==null?h+"Capture":null:h;w=[];for(var f=u,y;f!==null;){y=f;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,p!==null&&(E=Ka(f,p),E!=null&&w.push(tl(f,E,y)))),k)break;f=f.return}0<w.length&&(h=new g(h,v,null,n,c),d.push({event:h,listeners:w}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Jf&&(v=n.relatedTarget||n.fromElement)&&(Ri(v)||v[ur]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Ri(v):null,v!==null&&(k=ds(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(w=qv,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=Gv,E="onPointerLeave",p="onPointerEnter",f="pointer"),k=g==null?h:Os(g),y=v==null?h:Os(v),h=new w(E,f+"leave",g,n,c),h.target=k,h.relatedTarget=y,E=null,Ri(c)===u&&(w=new w(p,f+"enter",v,n,c),w.target=y,w.relatedTarget=k,E=w),k=E,g&&v)t:{for(w=g,p=v,f=0,y=w;y;y=Is(y))f++;for(y=0,E=p;E;E=Is(E))y++;for(;0<f-y;)w=Is(w),f--;for(;0<y-f;)p=Is(p),y--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=Is(w),p=Is(p)}w=null}else w=null;g!==null&&r0(d,h,g,w,!1),v!==null&&k!==null&&r0(d,k,v,w,!0)}}e:{if(h=u?Os(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var T=I2;else if(Qv(h))if(U_)T=k2;else{T=S2;var b=E2}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=T2);if(T&&(T=T(t,u))){F_(d,T,n,c);break e}b&&b(t,h,u),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Hf(h,"number",h.value)}switch(b=u?Os(u):window,t){case"focusin":(Qv(b)||b.contentEditable==="true")&&(Rs=b,sp=u,Da=null);break;case"focusout":Da=sp=Rs=null;break;case"mousedown":op=!0;break;case"contextmenu":case"mouseup":case"dragend":op=!1,e0(d,n,c);break;case"selectionchange":if(b2)break;case"keydown":case"keyup":e0(d,n,c)}var P;if(Hm)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else Ds?M_(t,n)&&(U="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(L_&&n.locale!=="ko"&&(Ds||U!=="onCompositionStart"?U==="onCompositionEnd"&&Ds&&(P=O_()):(Or=c,qm="value"in Or?Or.value:Or.textContent,Ds=!0)),b=bc(u,U),0<b.length&&(U=new Wv(U,t,null,n,c),d.push({event:U,listeners:b}),P?U.data=P:(P=$_(n),P!==null&&(U.data=P)))),(P=g2?y2(t,n):v2(t,n))&&(u=bc(u,"onBeforeInput"),0<u.length&&(c=new Wv("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=P))}Q_(d,e)})}function tl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ka(t,n),s!=null&&r.unshift(tl(t,s,i)),s=Ka(t,e),s!=null&&r.push(tl(t,s,i))),t=t.return}return r}function Is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function r0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ka(n,s),l!=null&&o.unshift(tl(n,l,a))):i||(l=Ka(n,s),l!=null&&o.push(tl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var R2=/\r\n?/g,P2=/\u0000|\uFFFD/g;function i0(t){return(typeof t=="string"?t:""+t).replace(R2,`
`).replace(P2,"")}function Nu(t,e,n){if(e=i0(e),i0(t)!==e&&n)throw Error(A(425))}function Ac(){}var ap=null,lp=null;function up(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cp=typeof setTimeout=="function"?setTimeout:void 0,O2=typeof clearTimeout=="function"?clearTimeout:void 0,s0=typeof Promise=="function"?Promise:void 0,L2=typeof queueMicrotask=="function"?queueMicrotask:typeof s0<"u"?function(t){return s0.resolve(null).then(t).catch(M2)}:cp;function M2(t){setTimeout(function(){throw t})}function Yh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Xa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Xa(e)}function zr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function o0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var bo=Math.random().toString(36).slice(2),Dn="__reactFiber$"+bo,nl="__reactProps$"+bo,ur="__reactContainer$"+bo,dp="__reactEvents$"+bo,$2="__reactListeners$"+bo,F2="__reactHandles$"+bo;function Ri(t){var e=t[Dn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ur]||n[Dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=o0(t);t!==null;){if(n=t[Dn])return n;t=o0(t)}return e}t=n,n=t.parentNode}return null}function zl(t){return t=t[Dn]||t[ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function xd(t){return t[nl]||null}var hp=[],Ls=-1;function ui(t){return{current:t}}function we(t){0>Ls||(t.current=hp[Ls],hp[Ls]=null,Ls--)}function pe(t,e){Ls++,hp[Ls]=t.current,t.current=e}var Kr={},kt=ui(Kr),qt=ui(!1),Hi=Kr;function io(t,e){var n=t.type.contextTypes;if(!n)return Kr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Wt(t){return t=t.childContextTypes,t!=null}function Nc(){we(qt),we(kt)}function a0(t,e,n){if(kt.current!==Kr)throw Error(A(168));pe(kt,e),pe(qt,n)}function X_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(A(108,EC(t)||"Unknown",i));return be({},n,r)}function Dc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Kr,Hi=kt.current,pe(kt,t),pe(qt,qt.current),!0}function l0(t,e,n){var r=t.stateNode;if(!r)throw Error(A(169));n?(t=X_(t,e,Hi),r.__reactInternalMemoizedMergedChildContext=t,we(qt),we(kt),pe(kt,t)):we(qt),pe(qt,n)}var Jn=null,Cd=!1,Xh=!1;function J_(t){Jn===null?Jn=[t]:Jn.push(t)}function U2(t){Cd=!0,J_(t)}function ci(){if(!Xh&&Jn!==null){Xh=!0;var t=0,e=he;try{var n=Jn;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Jn=null,Cd=!1}catch(i){throw Jn!==null&&(Jn=Jn.slice(t+1)),S_(Vm,ci),i}finally{he=e,Xh=!1}}return null}var Ms=[],$s=0,Rc=null,Pc=0,sn=[],on=0,Ki=null,Zn=1,er="";function Si(t,e){Ms[$s++]=Pc,Ms[$s++]=Rc,Rc=t,Pc=e}function Z_(t,e,n){sn[on++]=Zn,sn[on++]=er,sn[on++]=Ki,Ki=t;var r=Zn;t=er;var i=32-In(r)-1;r&=~(1<<i),n+=1;var s=32-In(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Zn=1<<32-In(e)+i|n<<i|r,er=s+t}else Zn=1<<s|n<<i|r,er=t}function Qm(t){t.return!==null&&(Si(t,1),Z_(t,1,0))}function Ym(t){for(;t===Rc;)Rc=Ms[--$s],Ms[$s]=null,Pc=Ms[--$s],Ms[$s]=null;for(;t===Ki;)Ki=sn[--on],sn[on]=null,er=sn[--on],sn[on]=null,Zn=sn[--on],sn[on]=null}var Jt=null,Yt=null,Se=!1,wn=null;function eI(t,e){var n=ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function u0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Jt=t,Yt=zr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Jt=t,Yt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ki!==null?{id:Zn,overflow:er}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Jt=t,Yt=null,!0):!1;default:return!1}}function fp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pp(t){if(Se){var e=Yt;if(e){var n=e;if(!u0(t,e)){if(fp(t))throw Error(A(418));e=zr(n.nextSibling);var r=Jt;e&&u0(t,e)?eI(r,n):(t.flags=t.flags&-4097|2,Se=!1,Jt=t)}}else{if(fp(t))throw Error(A(418));t.flags=t.flags&-4097|2,Se=!1,Jt=t}}}function c0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Jt=t}function Du(t){if(t!==Jt)return!1;if(!Se)return c0(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!up(t.type,t.memoizedProps)),e&&(e=Yt)){if(fp(t))throw tI(),Error(A(418));for(;e;)eI(t,e),e=zr(e.nextSibling)}if(c0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Yt=zr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Yt=null}}else Yt=Jt?zr(t.stateNode.nextSibling):null;return!0}function tI(){for(var t=Yt;t;)t=zr(t.nextSibling)}function so(){Yt=Jt=null,Se=!1}function Xm(t){wn===null?wn=[t]:wn.push(t)}var V2=mr.ReactCurrentBatchConfig;function ta(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function Ru(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function d0(t){var e=t._init;return e(t._payload)}function nI(t){function e(p,f){if(t){var y=p.deletions;y===null?(p.deletions=[f],p.flags|=16):y.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Wr(p,f),p.index=0,p.sibling=null,p}function s(p,f,y){return p.index=y,t?(y=p.alternate,y!==null?(y=y.index,y<f?(p.flags|=2,f):y):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,y,E){return f===null||f.tag!==6?(f=sf(y,p.mode,E),f.return=p,f):(f=i(f,y),f.return=p,f)}function l(p,f,y,E){var T=y.type;return T===Ns?c(p,f,y.props.children,E,y.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===br&&d0(T)===f.type)?(E=i(f,y.props),E.ref=ta(p,f,y),E.return=p,E):(E=lc(y.type,y.key,y.props,null,p.mode,E),E.ref=ta(p,f,y),E.return=p,E)}function u(p,f,y,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=of(y,p.mode,E),f.return=p,f):(f=i(f,y.children||[]),f.return=p,f)}function c(p,f,y,E,T){return f===null||f.tag!==7?(f=zi(y,p.mode,E,T),f.return=p,f):(f=i(f,y),f.return=p,f)}function d(p,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=sf(""+f,p.mode,y),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Iu:return y=lc(f.type,f.key,f.props,null,p.mode,y),y.ref=ta(p,null,f),y.return=p,y;case As:return f=of(f,p.mode,y),f.return=p,f;case br:var E=f._init;return d(p,E(f._payload),y)}if(ga(f)||Yo(f))return f=zi(f,p.mode,y,null),f.return=p,f;Ru(p,f)}return null}function h(p,f,y,E){var T=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(p,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Iu:return y.key===T?l(p,f,y,E):null;case As:return y.key===T?u(p,f,y,E):null;case br:return T=y._init,h(p,f,T(y._payload),E)}if(ga(y)||Yo(y))return T!==null?null:c(p,f,y,E,null);Ru(p,y)}return null}function g(p,f,y,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(y)||null,a(f,p,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Iu:return p=p.get(E.key===null?y:E.key)||null,l(f,p,E,T);case As:return p=p.get(E.key===null?y:E.key)||null,u(f,p,E,T);case br:var b=E._init;return g(p,f,y,b(E._payload),T)}if(ga(E)||Yo(E))return p=p.get(y)||null,c(f,p,E,T,null);Ru(f,E)}return null}function v(p,f,y,E){for(var T=null,b=null,P=f,U=f=0,le=null;P!==null&&U<y.length;U++){P.index>U?(le=P,P=null):le=P.sibling;var Z=h(p,P,y[U],E);if(Z===null){P===null&&(P=le);break}t&&P&&Z.alternate===null&&e(p,P),f=s(Z,f,U),b===null?T=Z:b.sibling=Z,b=Z,P=le}if(U===y.length)return n(p,P),Se&&Si(p,U),T;if(P===null){for(;U<y.length;U++)P=d(p,y[U],E),P!==null&&(f=s(P,f,U),b===null?T=P:b.sibling=P,b=P);return Se&&Si(p,U),T}for(P=r(p,P);U<y.length;U++)le=g(P,p,U,y[U],E),le!==null&&(t&&le.alternate!==null&&P.delete(le.key===null?U:le.key),f=s(le,f,U),b===null?T=le:b.sibling=le,b=le);return t&&P.forEach(function(Mt){return e(p,Mt)}),Se&&Si(p,U),T}function w(p,f,y,E){var T=Yo(y);if(typeof T!="function")throw Error(A(150));if(y=T.call(y),y==null)throw Error(A(151));for(var b=T=null,P=f,U=f=0,le=null,Z=y.next();P!==null&&!Z.done;U++,Z=y.next()){P.index>U?(le=P,P=null):le=P.sibling;var Mt=h(p,P,Z.value,E);if(Mt===null){P===null&&(P=le);break}t&&P&&Mt.alternate===null&&e(p,P),f=s(Mt,f,U),b===null?T=Mt:b.sibling=Mt,b=Mt,P=le}if(Z.done)return n(p,P),Se&&Si(p,U),T;if(P===null){for(;!Z.done;U++,Z=y.next())Z=d(p,Z.value,E),Z!==null&&(f=s(Z,f,U),b===null?T=Z:b.sibling=Z,b=Z);return Se&&Si(p,U),T}for(P=r(p,P);!Z.done;U++,Z=y.next())Z=g(P,p,U,Z.value,E),Z!==null&&(t&&Z.alternate!==null&&P.delete(Z.key===null?U:Z.key),f=s(Z,f,U),b===null?T=Z:b.sibling=Z,b=Z);return t&&P.forEach(function(Ne){return e(p,Ne)}),Se&&Si(p,U),T}function k(p,f,y,E){if(typeof y=="object"&&y!==null&&y.type===Ns&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Iu:e:{for(var T=y.key,b=f;b!==null;){if(b.key===T){if(T=y.type,T===Ns){if(b.tag===7){n(p,b.sibling),f=i(b,y.props.children),f.return=p,p=f;break e}}else if(b.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===br&&d0(T)===b.type){n(p,b.sibling),f=i(b,y.props),f.ref=ta(p,b,y),f.return=p,p=f;break e}n(p,b);break}else e(p,b);b=b.sibling}y.type===Ns?(f=zi(y.props.children,p.mode,E,y.key),f.return=p,p=f):(E=lc(y.type,y.key,y.props,null,p.mode,E),E.ref=ta(p,f,y),E.return=p,p=E)}return o(p);case As:e:{for(b=y.key;f!==null;){if(f.key===b)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(p,f.sibling),f=i(f,y.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=of(y,p.mode,E),f.return=p,p=f}return o(p);case br:return b=y._init,k(p,f,b(y._payload),E)}if(ga(y))return v(p,f,y,E);if(Yo(y))return w(p,f,y,E);Ru(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,y),f.return=p,p=f):(n(p,f),f=sf(y,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return k}var oo=nI(!0),rI=nI(!1),Oc=ui(null),Lc=null,Fs=null,Jm=null;function Zm(){Jm=Fs=Lc=null}function eg(t){var e=Oc.current;we(Oc),t._currentValue=e}function mp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Hs(t,e){Lc=t,Jm=Fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Vt=!0),t.firstContext=null)}function dn(t){var e=t._currentValue;if(Jm!==t)if(t={context:t,memoizedValue:e,next:null},Fs===null){if(Lc===null)throw Error(A(308));Fs=t,Lc.dependencies={lanes:0,firstContext:t}}else Fs=Fs.next=t;return e}var Pi=null;function tg(t){Pi===null?Pi=[t]:Pi.push(t)}function iI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,tg(e)):(n.next=i.next,i.next=n),e.interleaved=n,cr(t,r)}function cr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ar=!1;function ng(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function sr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Br(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(oe&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,cr(t,n)}return i=r.interleaved,i===null?(e.next=e,tg(r)):(e.next=i.next,i.next=e),r.interleaved=e,cr(t,n)}function nc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zm(t,n)}}function h0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Mc(t,e,n,r){var i=t.updateQueue;Ar=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(h=e,g=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(g,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(g,d,h):v,h==null)break e;d=be({},d,h);break e;case 2:Ar=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yi|=o,t.lanes=o,t.memoizedState=d}}function f0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var Bl={},jn=ui(Bl),rl=ui(Bl),il=ui(Bl);function Oi(t){if(t===Bl)throw Error(A(174));return t}function rg(t,e){switch(pe(il,e),pe(rl,t),pe(jn,Bl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Qf(e,t)}we(jn),pe(jn,e)}function ao(){we(jn),we(rl),we(il)}function oI(t){Oi(il.current);var e=Oi(jn.current),n=Qf(e,t.type);e!==n&&(pe(rl,t),pe(jn,n))}function ig(t){rl.current===t&&(we(jn),we(rl))}var xe=ui(0);function $c(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jh=[];function sg(){for(var t=0;t<Jh.length;t++)Jh[t]._workInProgressVersionPrimary=null;Jh.length=0}var rc=mr.ReactCurrentDispatcher,Zh=mr.ReactCurrentBatchConfig,Qi=0,Ce=null,Ke=null,Ze=null,Fc=!1,Ra=!1,sl=0,z2=0;function wt(){throw Error(A(321))}function og(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Tn(t[n],e[n]))return!1;return!0}function ag(t,e,n,r,i,s){if(Qi=s,Ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,rc.current=t===null||t.memoizedState===null?W2:G2,t=n(r,i),Ra){s=0;do{if(Ra=!1,sl=0,25<=s)throw Error(A(301));s+=1,Ze=Ke=null,e.updateQueue=null,rc.current=H2,t=n(r,i)}while(Ra)}if(rc.current=Uc,e=Ke!==null&&Ke.next!==null,Qi=0,Ze=Ke=Ce=null,Fc=!1,e)throw Error(A(300));return t}function lg(){var t=sl!==0;return sl=0,t}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Ce.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function hn(){if(Ke===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var e=Ze===null?Ce.memoizedState:Ze.next;if(e!==null)Ze=e,Ke=t;else{if(t===null)throw Error(A(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Ze===null?Ce.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function ol(t,e){return typeof e=="function"?e(t):e}function ef(t){var e=hn(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=Ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Qi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Ce.lanes|=c,Yi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Tn(r,e.memoizedState)||(Vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ce.lanes|=s,Yi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tf(t){var e=hn(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Tn(s,e.memoizedState)||(Vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function aI(){}function lI(t,e){var n=Ce,r=hn(),i=e(),s=!Tn(r.memoizedState,i);if(s&&(r.memoizedState=i,Vt=!0),r=r.queue,ug(dI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,al(9,cI.bind(null,n,r,i,e),void 0,null),tt===null)throw Error(A(349));(Qi&30)!==0||uI(n,e,i)}return i}function uI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function cI(t,e,n,r){e.value=n,e.getSnapshot=r,hI(e)&&fI(t)}function dI(t,e,n){return n(function(){hI(e)&&fI(t)})}function hI(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Tn(t,n)}catch{return!0}}function fI(t){var e=cr(t,1);e!==null&&En(e,t,1,-1)}function p0(t){var e=Nn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ol,lastRenderedState:t},e.queue=t,t=t.dispatch=q2.bind(null,Ce,t),[e.memoizedState,t]}function al(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function pI(){return hn().memoizedState}function ic(t,e,n,r){var i=Nn();Ce.flags|=t,i.memoizedState=al(1|e,n,void 0,r===void 0?null:r)}function bd(t,e,n,r){var i=hn();r=r===void 0?null:r;var s=void 0;if(Ke!==null){var o=Ke.memoizedState;if(s=o.destroy,r!==null&&og(r,o.deps)){i.memoizedState=al(e,n,s,r);return}}Ce.flags|=t,i.memoizedState=al(1|e,n,s,r)}function m0(t,e){return ic(8390656,8,t,e)}function ug(t,e){return bd(2048,8,t,e)}function mI(t,e){return bd(4,2,t,e)}function gI(t,e){return bd(4,4,t,e)}function yI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function vI(t,e,n){return n=n!=null?n.concat([t]):null,bd(4,4,yI.bind(null,e,t),n)}function cg(){}function wI(t,e){var n=hn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&og(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function _I(t,e){var n=hn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&og(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function II(t,e,n){return(Qi&21)===0?(t.baseState&&(t.baseState=!1,Vt=!0),t.memoizedState=n):(Tn(n,e)||(n=x_(),Ce.lanes|=n,Yi|=n,t.baseState=!0),e)}function B2(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=Zh.transition;Zh.transition={};try{t(!1),e()}finally{he=n,Zh.transition=r}}function EI(){return hn().memoizedState}function j2(t,e,n){var r=qr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},SI(t))TI(e,n);else if(n=iI(t,e,n,r),n!==null){var i=Nt();En(n,t,r,i),kI(n,e,r)}}function q2(t,e,n){var r=qr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(SI(t))TI(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Tn(a,o)){var l=e.interleaved;l===null?(i.next=i,tg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=iI(t,e,i,r),n!==null&&(i=Nt(),En(n,t,r,i),kI(n,e,r))}}function SI(t){var e=t.alternate;return t===Ce||e!==null&&e===Ce}function TI(t,e){Ra=Fc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function kI(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zm(t,n)}}var Uc={readContext:dn,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useInsertionEffect:wt,useLayoutEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useMutableSource:wt,useSyncExternalStore:wt,useId:wt,unstable_isNewReconciler:!1},W2={readContext:dn,useCallback:function(t,e){return Nn().memoizedState=[t,e===void 0?null:e],t},useContext:dn,useEffect:m0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ic(4194308,4,yI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ic(4194308,4,t,e)},useInsertionEffect:function(t,e){return ic(4,2,t,e)},useMemo:function(t,e){var n=Nn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Nn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=j2.bind(null,Ce,t),[r.memoizedState,t]},useRef:function(t){var e=Nn();return t={current:t},e.memoizedState=t},useState:p0,useDebugValue:cg,useDeferredValue:function(t){return Nn().memoizedState=t},useTransition:function(){var t=p0(!1),e=t[0];return t=B2.bind(null,t[1]),Nn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ce,i=Nn();if(Se){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),tt===null)throw Error(A(349));(Qi&30)!==0||uI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,m0(dI.bind(null,r,s,t),[t]),r.flags|=2048,al(9,cI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Nn(),e=tt.identifierPrefix;if(Se){var n=er,r=Zn;n=(r&~(1<<32-In(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=sl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=z2++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},G2={readContext:dn,useCallback:wI,useContext:dn,useEffect:ug,useImperativeHandle:vI,useInsertionEffect:mI,useLayoutEffect:gI,useMemo:_I,useReducer:ef,useRef:pI,useState:function(){return ef(ol)},useDebugValue:cg,useDeferredValue:function(t){var e=hn();return II(e,Ke.memoizedState,t)},useTransition:function(){var t=ef(ol)[0],e=hn().memoizedState;return[t,e]},useMutableSource:aI,useSyncExternalStore:lI,useId:EI,unstable_isNewReconciler:!1},H2={readContext:dn,useCallback:wI,useContext:dn,useEffect:ug,useImperativeHandle:vI,useInsertionEffect:mI,useLayoutEffect:gI,useMemo:_I,useReducer:tf,useRef:pI,useState:function(){return tf(ol)},useDebugValue:cg,useDeferredValue:function(t){var e=hn();return Ke===null?e.memoizedState=t:II(e,Ke.memoizedState,t)},useTransition:function(){var t=tf(ol)[0],e=hn().memoizedState;return[t,e]},useMutableSource:aI,useSyncExternalStore:lI,useId:EI,unstable_isNewReconciler:!1};function yn(t,e){if(t&&t.defaultProps){e=be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ad={isMounted:function(t){return(t=t._reactInternals)?ds(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=qr(t),s=sr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Br(t,s,i),e!==null&&(En(e,t,i,r),nc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=qr(t),s=sr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Br(t,s,i),e!==null&&(En(e,t,i,r),nc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Nt(),r=qr(t),i=sr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Br(t,i,r),e!==null&&(En(e,t,r,n),nc(e,t,r))}};function g0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Za(n,r)||!Za(i,s):!0}function xI(t,e,n){var r=!1,i=Kr,s=e.contextType;return typeof s=="object"&&s!==null?s=dn(s):(i=Wt(e)?Hi:kt.current,r=e.contextTypes,s=(r=r!=null)?io(t,i):Kr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ad,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function y0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ad.enqueueReplaceState(e,e.state,null)}function yp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ng(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=dn(s):(s=Wt(e)?Hi:kt.current,i.context=io(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ad.enqueueReplaceState(i,i.state,null),Mc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function lo(t,e){try{var n="",r=e;do n+=IC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function nf(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function vp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var K2=typeof WeakMap=="function"?WeakMap:Map;function CI(t,e,n){n=sr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){zc||(zc=!0,bp=r),vp(t,e)},n}function bI(t,e,n){n=sr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){vp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vp(t,e),typeof r!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function v0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new K2;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=lb.bind(null,t,e,n),e.then(t,t))}function w0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _0(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=sr(-1,1),e.tag=2,Br(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var Q2=mr.ReactCurrentOwner,Vt=!1;function xt(t,e,n,r){e.child=t===null?rI(e,null,n,r):oo(e,t.child,n,r)}function I0(t,e,n,r,i){n=n.render;var s=e.ref;return Hs(e,i),r=ag(t,e,n,r,s,i),n=lg(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dr(t,e,i)):(Se&&n&&Qm(e),e.flags|=1,xt(t,e,r,i),e.child)}function E0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!vg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,AI(t,e,s,r,i)):(t=lc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Za,n(o,r)&&t.ref===e.ref)return dr(t,e,i)}return e.flags|=1,t=Wr(s,r),t.ref=e.ref,t.return=e,e.child=t}function AI(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Za(s,r)&&t.ref===e.ref)if(Vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Vt=!0);else return e.lanes=t.lanes,dr(t,e,i)}return wp(t,e,n,r,i)}function NI(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Vs,Kt),Kt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(Vs,Kt),Kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pe(Vs,Kt),Kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,pe(Vs,Kt),Kt|=r;return xt(t,e,i,n),e.child}function DI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function wp(t,e,n,r,i){var s=Wt(n)?Hi:kt.current;return s=io(e,s),Hs(e,i),n=ag(t,e,n,r,s,i),r=lg(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dr(t,e,i)):(Se&&r&&Qm(e),e.flags|=1,xt(t,e,n,i),e.child)}function S0(t,e,n,r,i){if(Wt(n)){var s=!0;Dc(e)}else s=!1;if(Hs(e,i),e.stateNode===null)sc(t,e),xI(e,n,r),yp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=dn(u):(u=Wt(n)?Hi:kt.current,u=io(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&y0(e,o,r,u),Ar=!1;var h=e.memoizedState;o.state=h,Mc(e,r,o,i),l=e.memoizedState,a!==r||h!==l||qt.current||Ar?(typeof c=="function"&&(gp(e,n,c,r),l=e.memoizedState),(a=Ar||g0(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,sI(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:yn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=dn(l):(l=Wt(n)?Hi:kt.current,l=io(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&y0(e,o,r,l),Ar=!1,h=e.memoizedState,o.state=h,Mc(e,r,o,i);var v=e.memoizedState;a!==d||h!==v||qt.current||Ar?(typeof g=="function"&&(gp(e,n,g,r),v=e.memoizedState),(u=Ar||g0(e,n,u,r,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return _p(t,e,n,r,s,i)}function _p(t,e,n,r,i,s){DI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&l0(e,n,!1),dr(t,e,s);r=e.stateNode,Q2.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=oo(e,t.child,null,s),e.child=oo(e,null,a,s)):xt(t,e,a,s),e.memoizedState=r.state,i&&l0(e,n,!0),e.child}function RI(t){var e=t.stateNode;e.pendingContext?a0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&a0(t,e.context,!1),rg(t,e.containerInfo)}function T0(t,e,n,r,i){return so(),Xm(i),e.flags|=256,xt(t,e,n,r),e.child}var Ip={dehydrated:null,treeContext:null,retryLane:0};function Ep(t){return{baseLanes:t,cachePool:null,transitions:null}}function PI(t,e,n){var r=e.pendingProps,i=xe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),pe(xe,i&1),t===null)return pp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Rd(o,r,0,null),t=zi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ep(n),e.memoizedState=Ip,t):dg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Y2(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Wr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Wr(a,s):(s=zi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ep(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ip,r}return s=t.child,t=s.sibling,r=Wr(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function dg(t,e){return e=Rd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Pu(t,e,n,r){return r!==null&&Xm(r),oo(e,t.child,null,n),t=dg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Y2(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=nf(Error(A(422))),Pu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Rd({mode:"visible",children:r.children},i,0,null),s=zi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&oo(e,t.child,null,o),e.child.memoizedState=Ep(o),e.memoizedState=Ip,s);if((e.mode&1)===0)return Pu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=nf(s,r,void 0),Pu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Vt||a){if(r=tt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,cr(t,i),En(r,t,i,-1))}return yg(),r=nf(Error(A(421))),Pu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ub.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Yt=zr(i.nextSibling),Jt=e,Se=!0,wn=null,t!==null&&(sn[on++]=Zn,sn[on++]=er,sn[on++]=Ki,Zn=t.id,er=t.overflow,Ki=e),e=dg(e,r.children),e.flags|=4096,e)}function k0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),mp(t.return,e,n)}function rf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function OI(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(xt(t,e,r.children,n),r=xe.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&k0(t,n,e);else if(t.tag===19)k0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(xe,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&$c(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),rf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&$c(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}rf(e,!0,n,null,s);break;case"together":rf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sc(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function dr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yi|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=Wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function X2(t,e,n){switch(e.tag){case 3:RI(e),so();break;case 5:oI(e);break;case 1:Wt(e.type)&&Dc(e);break;case 4:rg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pe(Oc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(xe,xe.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?PI(t,e,n):(pe(xe,xe.current&1),t=dr(t,e,n),t!==null?t.sibling:null);pe(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return OI(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,NI(t,e,n)}return dr(t,e,n)}var LI,Sp,MI,$I;LI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sp=function(){};MI=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Oi(jn.current);var s=null;switch(n){case"input":i=Wf(t,i),r=Wf(t,r),s=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),s=[];break;case"textarea":i=Kf(t,i),r=Kf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ac)}Yf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ga.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ga.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ge("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};$I=function(t,e,n,r){n!==r&&(e.flags|=4)};function na(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function J2(t,e,n){var r=e.pendingProps;switch(Ym(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(e),null;case 1:return Wt(e.type)&&Nc(),_t(e),null;case 3:return r=e.stateNode,ao(),we(qt),we(kt),sg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Du(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,wn!==null&&(Dp(wn),wn=null))),Sp(t,e),_t(e),null;case 5:ig(e);var i=Oi(il.current);if(n=e.type,t!==null&&e.stateNode!=null)MI(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(A(166));return _t(e),null}if(t=Oi(jn.current),Du(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Dn]=e,r[nl]=s,t=(e.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<va.length;i++)ge(va[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":Ov(r,s),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ge("invalid",r);break;case"textarea":Mv(r,s),ge("invalid",r)}Yf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Nu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Nu(r.textContent,a,t),i=["children",""+a]):Ga.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":Eu(r),Lv(r,s,!0);break;case"textarea":Eu(r),$v(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ac)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=d_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Dn]=e,t[nl]=r,LI(t,e,!1,!1),e.stateNode=t;e:{switch(o=Xf(n,r),n){case"dialog":ge("cancel",t),ge("close",t),i=r;break;case"iframe":case"object":case"embed":ge("load",t),i=r;break;case"video":case"audio":for(i=0;i<va.length;i++)ge(va[i],t);i=r;break;case"source":ge("error",t),i=r;break;case"img":case"image":case"link":ge("error",t),ge("load",t),i=r;break;case"details":ge("toggle",t),i=r;break;case"input":Ov(t,r),i=Wf(t,r),ge("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),ge("invalid",t);break;case"textarea":Mv(t,r),i=Kf(t,r),ge("invalid",t);break;default:i=r}Yf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?p_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&h_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ha(t,l):typeof l=="number"&&Ha(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ga.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ge("scroll",t):l!=null&&Lm(t,s,l,o))}switch(n){case"input":Eu(t),Lv(t,r,!1);break;case"textarea":Eu(t),$v(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Hr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?js(t,!!r.multiple,s,!1):r.defaultValue!=null&&js(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ac)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return _t(e),null;case 6:if(t&&e.stateNode!=null)$I(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(A(166));if(n=Oi(il.current),Oi(jn.current),Du(e)){if(r=e.stateNode,n=e.memoizedProps,r[Dn]=e,(s=r.nodeValue!==n)&&(t=Jt,t!==null))switch(t.tag){case 3:Nu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Nu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dn]=e,e.stateNode=r}return _t(e),null;case 13:if(we(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&Yt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)tI(),so(),e.flags|=98560,s=!1;else if(s=Du(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(A(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[Dn]=e}else so(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;_t(e),s=!1}else wn!==null&&(Dp(wn),wn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(xe.current&1)!==0?Qe===0&&(Qe=3):yg())),e.updateQueue!==null&&(e.flags|=4),_t(e),null);case 4:return ao(),Sp(t,e),t===null&&el(e.stateNode.containerInfo),_t(e),null;case 10:return eg(e.type._context),_t(e),null;case 17:return Wt(e.type)&&Nc(),_t(e),null;case 19:if(we(xe),s=e.memoizedState,s===null)return _t(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)na(s,!1);else{if(Qe!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=$c(t),o!==null){for(e.flags|=128,na(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(xe,xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ue()>uo&&(e.flags|=128,r=!0,na(s,!1),e.lanes=4194304)}else{if(!r)if(t=$c(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),na(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Se)return _t(e),null}else 2*Ue()-s.renderingStartTime>uo&&n!==1073741824&&(e.flags|=128,r=!0,na(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ue(),e.sibling=null,n=xe.current,pe(xe,r?n&1|2:n&1),e):(_t(e),null);case 22:case 23:return gg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Kt&1073741824)!==0&&(_t(e),e.subtreeFlags&6&&(e.flags|=8192)):_t(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function Z2(t,e){switch(Ym(e),e.tag){case 1:return Wt(e.type)&&Nc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ao(),we(qt),we(kt),sg(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return ig(e),null;case 13:if(we(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));so()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return we(xe),null;case 4:return ao(),null;case 10:return eg(e.type._context),null;case 22:case 23:return gg(),null;case 24:return null;default:return null}}var Ou=!1,Et=!1,eb=typeof WeakSet=="function"?WeakSet:Set,z=null;function Us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function Tp(t,e,n){try{n()}catch(r){Re(t,e,r)}}var x0=!1;function tb(t,e){if(ap=xc,t=B_(),Km(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lp={focusedElem:t,selectionRange:n},xc=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var v=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,k=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:yn(e.type,w),k);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(E){Re(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return v=x0,x0=!1,v}function Pa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Tp(e,n,s)}i=i.next}while(i!==r)}}function Nd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function kp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function FI(t){var e=t.alternate;e!==null&&(t.alternate=null,FI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Dn],delete e[nl],delete e[dp],delete e[$2],delete e[F2])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function UI(t){return t.tag===5||t.tag===3||t.tag===4}function C0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||UI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ac));else if(r!==4&&(t=t.child,t!==null))for(xp(t,e,n),t=t.sibling;t!==null;)xp(t,e,n),t=t.sibling}function Cp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Cp(t,e,n),t=t.sibling;t!==null;)Cp(t,e,n),t=t.sibling}var at=null,vn=!1;function Sr(t,e,n){for(n=n.child;n!==null;)VI(t,e,n),n=n.sibling}function VI(t,e,n){if(Bn&&typeof Bn.onCommitFiberUnmount=="function")try{Bn.onCommitFiberUnmount(Ed,n)}catch{}switch(n.tag){case 5:Et||Us(n,e);case 6:var r=at,i=vn;at=null,Sr(t,e,n),at=r,vn=i,at!==null&&(vn?(t=at,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(vn?(t=at,n=n.stateNode,t.nodeType===8?Yh(t.parentNode,n):t.nodeType===1&&Yh(t,n),Xa(t)):Yh(at,n.stateNode));break;case 4:r=at,i=vn,at=n.stateNode.containerInfo,vn=!0,Sr(t,e,n),at=r,vn=i;break;case 0:case 11:case 14:case 15:if(!Et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Tp(n,e,o),i=i.next}while(i!==r)}Sr(t,e,n);break;case 1:if(!Et&&(Us(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Re(n,e,a)}Sr(t,e,n);break;case 21:Sr(t,e,n);break;case 22:n.mode&1?(Et=(r=Et)||n.memoizedState!==null,Sr(t,e,n),Et=r):Sr(t,e,n);break;default:Sr(t,e,n)}}function b0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new eb),e.forEach(function(r){var i=cb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:at=a.stateNode,vn=!1;break e;case 3:at=a.stateNode.containerInfo,vn=!0;break e;case 4:at=a.stateNode.containerInfo,vn=!0;break e}a=a.return}if(at===null)throw Error(A(160));VI(s,o,i),at=null,vn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Re(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)zI(e,t),e=e.sibling}function zI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gn(e,t),An(t),r&4){try{Pa(3,t,t.return),Nd(3,t)}catch(w){Re(t,t.return,w)}try{Pa(5,t,t.return)}catch(w){Re(t,t.return,w)}}break;case 1:gn(e,t),An(t),r&512&&n!==null&&Us(n,n.return);break;case 5:if(gn(e,t),An(t),r&512&&n!==null&&Us(n,n.return),t.flags&32){var i=t.stateNode;try{Ha(i,"")}catch(w){Re(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&u_(i,s),Xf(a,o);var u=Xf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?p_(i,d):c==="dangerouslySetInnerHTML"?h_(i,d):c==="children"?Ha(i,d):Lm(i,c,d,u)}switch(a){case"input":Gf(i,s);break;case"textarea":c_(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?js(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?js(i,!!s.multiple,s.defaultValue,!0):js(i,!!s.multiple,s.multiple?[]:"",!1))}i[nl]=s}catch(w){Re(t,t.return,w)}}break;case 6:if(gn(e,t),An(t),r&4){if(t.stateNode===null)throw Error(A(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Re(t,t.return,w)}}break;case 3:if(gn(e,t),An(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xa(e.containerInfo)}catch(w){Re(t,t.return,w)}break;case 4:gn(e,t),An(t);break;case 13:gn(e,t),An(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(pg=Ue())),r&4&&b0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Et=(u=Et)||c,gn(e,t),Et=u):gn(e,t),An(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(z=t,c=t.child;c!==null;){for(d=z=c;z!==null;){switch(h=z,g=h.child,h.tag){case 0:case 11:case 14:case 15:Pa(4,h,h.return);break;case 1:Us(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){Re(r,n,w)}}break;case 5:Us(h,h.return);break;case 22:if(h.memoizedState!==null){N0(d);continue}}g!==null?(g.return=h,z=g):N0(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=f_("display",o))}catch(w){Re(t,t.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){Re(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:gn(e,t),An(t),r&4&&b0(t);break;case 21:break;default:gn(e,t),An(t)}}function An(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(UI(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ha(i,""),r.flags&=-33);var s=C0(t);Cp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=C0(t);xp(t,a,o);break;default:throw Error(A(161))}}catch(l){Re(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function nb(t,e,n){z=t,BI(t)}function BI(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ou;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Et;a=Ou;var u=Et;if(Ou=o,(Et=l)&&!u)for(z=i;z!==null;)o=z,l=o.child,o.tag===22&&o.memoizedState!==null?D0(i):l!==null?(l.return=o,z=l):D0(i);for(;s!==null;)z=s,BI(s),s=s.sibling;z=i,Ou=a,Et=u}A0(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,z=s):A0(t)}}function A0(t){for(;z!==null;){var e=z;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Et||Nd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:yn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&f0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}f0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Xa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Et||e.flags&512&&kp(e)}catch(h){Re(e,e.return,h)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function N0(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function D0(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nd(4,e)}catch(l){Re(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Re(e,i,l)}}var s=e.return;try{kp(e)}catch(l){Re(e,s,l)}break;case 5:var o=e.return;try{kp(e)}catch(l){Re(e,o,l)}}}catch(l){Re(e,e.return,l)}if(e===t){z=null;break}var a=e.sibling;if(a!==null){a.return=e.return,z=a;break}z=e.return}}var rb=Math.ceil,Vc=mr.ReactCurrentDispatcher,hg=mr.ReactCurrentOwner,cn=mr.ReactCurrentBatchConfig,oe=0,tt=null,Ge=null,ht=0,Kt=0,Vs=ui(0),Qe=0,ll=null,Yi=0,Dd=0,fg=0,Oa=null,Ut=null,pg=0,uo=1/0,Xn=null,zc=!1,bp=null,jr=null,Lu=!1,Lr=null,Bc=0,La=0,Ap=null,oc=-1,ac=0;function Nt(){return(oe&6)!==0?Ue():oc!==-1?oc:oc=Ue()}function qr(t){return(t.mode&1)===0?1:(oe&2)!==0&&ht!==0?ht&-ht:V2.transition!==null?(ac===0&&(ac=x_()),ac):(t=he,t!==0||(t=window.event,t=t===void 0?16:P_(t.type)),t)}function En(t,e,n,r){if(50<La)throw La=0,Ap=null,Error(A(185));Ul(t,n,r),((oe&2)===0||t!==tt)&&(t===tt&&((oe&2)===0&&(Dd|=n),Qe===4&&Dr(t,ht)),Gt(t,r),n===1&&oe===0&&(e.mode&1)===0&&(uo=Ue()+500,Cd&&ci()))}function Gt(t,e){var n=t.callbackNode;VC(t,e);var r=kc(t,t===tt?ht:0);if(r===0)n!==null&&Vv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Vv(n),e===1)t.tag===0?U2(R0.bind(null,t)):J_(R0.bind(null,t)),L2(function(){(oe&6)===0&&ci()}),n=null;else{switch(C_(r)){case 1:n=Vm;break;case 4:n=T_;break;case 16:n=Tc;break;case 536870912:n=k_;break;default:n=Tc}n=YI(n,jI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function jI(t,e){if(oc=-1,ac=0,(oe&6)!==0)throw Error(A(327));var n=t.callbackNode;if(Ks()&&t.callbackNode!==n)return null;var r=kc(t,t===tt?ht:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=jc(t,r);else{e=r;var i=oe;oe|=2;var s=WI();(tt!==t||ht!==e)&&(Xn=null,uo=Ue()+500,Vi(t,e));do try{ob();break}catch(a){qI(t,a)}while(1);Zm(),Vc.current=s,oe=i,Ge!==null?e=0:(tt=null,ht=0,e=Qe)}if(e!==0){if(e===2&&(i=np(t),i!==0&&(r=i,e=Np(t,i))),e===1)throw n=ll,Vi(t,0),Dr(t,r),Gt(t,Ue()),n;if(e===6)Dr(t,r);else{if(i=t.current.alternate,(r&30)===0&&!ib(i)&&(e=jc(t,r),e===2&&(s=np(t),s!==0&&(r=s,e=Np(t,s))),e===1))throw n=ll,Vi(t,0),Dr(t,r),Gt(t,Ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(A(345));case 2:Ti(t,Ut,Xn);break;case 3:if(Dr(t,r),(r&130023424)===r&&(e=pg+500-Ue(),10<e)){if(kc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Nt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=cp(Ti.bind(null,t,Ut,Xn),e);break}Ti(t,Ut,Xn);break;case 4:if(Dr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-In(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rb(r/1960))-r,10<r){t.timeoutHandle=cp(Ti.bind(null,t,Ut,Xn),r);break}Ti(t,Ut,Xn);break;case 5:Ti(t,Ut,Xn);break;default:throw Error(A(329))}}}return Gt(t,Ue()),t.callbackNode===n?jI.bind(null,t):null}function Np(t,e){var n=Oa;return t.current.memoizedState.isDehydrated&&(Vi(t,e).flags|=256),t=jc(t,e),t!==2&&(e=Ut,Ut=n,e!==null&&Dp(e)),t}function Dp(t){Ut===null?Ut=t:Ut.push.apply(Ut,t)}function ib(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Dr(t,e){for(e&=~fg,e&=~Dd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-In(e),r=1<<n;t[n]=-1,e&=~r}}function R0(t){if((oe&6)!==0)throw Error(A(327));Ks();var e=kc(t,0);if((e&1)===0)return Gt(t,Ue()),null;var n=jc(t,e);if(t.tag!==0&&n===2){var r=np(t);r!==0&&(e=r,n=Np(t,r))}if(n===1)throw n=ll,Vi(t,0),Dr(t,e),Gt(t,Ue()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ti(t,Ut,Xn),Gt(t,Ue()),null}function mg(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(uo=Ue()+500,Cd&&ci())}}function Xi(t){Lr!==null&&Lr.tag===0&&(oe&6)===0&&Ks();var e=oe;oe|=1;var n=cn.transition,r=he;try{if(cn.transition=null,he=1,t)return t()}finally{he=r,cn.transition=n,oe=e,(oe&6)===0&&ci()}}function gg(){Kt=Vs.current,we(Vs)}function Vi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,O2(n)),Ge!==null)for(n=Ge.return;n!==null;){var r=n;switch(Ym(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Nc();break;case 3:ao(),we(qt),we(kt),sg();break;case 5:ig(r);break;case 4:ao();break;case 13:we(xe);break;case 19:we(xe);break;case 10:eg(r.type._context);break;case 22:case 23:gg()}n=n.return}if(tt=t,Ge=t=Wr(t.current,null),ht=Kt=e,Qe=0,ll=null,fg=Dd=Yi=0,Ut=Oa=null,Pi!==null){for(e=0;e<Pi.length;e++)if(n=Pi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Pi=null}return t}function qI(t,e){do{var n=Ge;try{if(Zm(),rc.current=Uc,Fc){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fc=!1}if(Qi=0,Ze=Ke=Ce=null,Ra=!1,sl=0,hg.current=null,n===null||n.return===null){Qe=1,ll=e,Ge=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=w0(o);if(g!==null){g.flags&=-257,_0(g,o,a,s,e),g.mode&1&&v0(s,u,e),e=g,l=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if((e&1)===0){v0(s,u,e),yg();break e}l=Error(A(426))}}else if(Se&&a.mode&1){var k=w0(o);if(k!==null){(k.flags&65536)===0&&(k.flags|=256),_0(k,o,a,s,e),Xm(lo(l,a));break e}}s=l=lo(l,a),Qe!==4&&(Qe=2),Oa===null?Oa=[s]:Oa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=CI(s,l,e);h0(s,p);break e;case 1:a=l;var f=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(jr===null||!jr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=bI(s,a,e);h0(s,E);break e}}s=s.return}while(s!==null)}HI(n)}catch(T){e=T,Ge===n&&n!==null&&(Ge=n=n.return);continue}break}while(1)}function WI(){var t=Vc.current;return Vc.current=Uc,t===null?Uc:t}function yg(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),tt===null||(Yi&268435455)===0&&(Dd&268435455)===0||Dr(tt,ht)}function jc(t,e){var n=oe;oe|=2;var r=WI();(tt!==t||ht!==e)&&(Xn=null,Vi(t,e));do try{sb();break}catch(i){qI(t,i)}while(1);if(Zm(),oe=n,Vc.current=r,Ge!==null)throw Error(A(261));return tt=null,ht=0,Qe}function sb(){for(;Ge!==null;)GI(Ge)}function ob(){for(;Ge!==null&&!DC();)GI(Ge)}function GI(t){var e=QI(t.alternate,t,Kt);t.memoizedProps=t.pendingProps,e===null?HI(t):Ge=e,hg.current=null}function HI(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=J2(n,e,Kt),n!==null){Ge=n;return}}else{if(n=Z2(n,e),n!==null){n.flags&=32767,Ge=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,Ge=null;return}}if(e=e.sibling,e!==null){Ge=e;return}Ge=e=t}while(e!==null);Qe===0&&(Qe=5)}function Ti(t,e,n){var r=he,i=cn.transition;try{cn.transition=null,he=1,ab(t,e,n,r)}finally{cn.transition=i,he=r}return null}function ab(t,e,n,r){do Ks();while(Lr!==null);if((oe&6)!==0)throw Error(A(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(zC(t,s),t===tt&&(Ge=tt=null,ht=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Lu||(Lu=!0,YI(Tc,function(){return Ks(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=cn.transition,cn.transition=null;var o=he;he=1;var a=oe;oe|=4,hg.current=null,tb(t,n),zI(n,t),C2(lp),xc=!!ap,lp=ap=null,t.current=n,nb(n),RC(),oe=a,he=o,cn.transition=s}else t.current=n;if(Lu&&(Lu=!1,Lr=t,Bc=i),s=t.pendingLanes,s===0&&(jr=null),LC(n.stateNode),Gt(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zc)throw zc=!1,t=bp,bp=null,t;return(Bc&1)!==0&&t.tag!==0&&Ks(),s=t.pendingLanes,(s&1)!==0?t===Ap?La++:(La=0,Ap=t):La=0,ci(),null}function Ks(){if(Lr!==null){var t=C_(Bc),e=cn.transition,n=he;try{if(cn.transition=null,he=16>t?16:t,Lr===null)var r=!1;else{if(t=Lr,Lr=null,Bc=0,(oe&6)!==0)throw Error(A(331));var i=oe;for(oe|=4,z=t.current;z!==null;){var s=z,o=s.child;if((z.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(z=u;z!==null;){var c=z;switch(c.tag){case 0:case 11:case 15:Pa(8,c,s)}var d=c.child;if(d!==null)d.return=c,z=d;else for(;z!==null;){c=z;var h=c.sibling,g=c.return;if(FI(c),c===u){z=null;break}if(h!==null){h.return=g,z=h;break}z=g}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}z=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,z=o;else e:for(;z!==null;){if(s=z,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Pa(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,z=p;break e}z=s.return}}var f=t.current;for(z=f;z!==null;){o=z;var y=o.child;if((o.subtreeFlags&2064)!==0&&y!==null)y.return=o,z=y;else e:for(o=f;z!==null;){if(a=z,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Nd(9,a)}}catch(T){Re(a,a.return,T)}if(a===o){z=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,z=E;break e}z=a.return}}if(oe=i,ci(),Bn&&typeof Bn.onPostCommitFiberRoot=="function")try{Bn.onPostCommitFiberRoot(Ed,t)}catch{}r=!0}return r}finally{he=n,cn.transition=e}}return!1}function P0(t,e,n){e=lo(n,e),e=CI(t,e,1),t=Br(t,e,1),e=Nt(),t!==null&&(Ul(t,1,e),Gt(t,e))}function Re(t,e,n){if(t.tag===3)P0(t,t,n);else for(;e!==null;){if(e.tag===3){P0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jr===null||!jr.has(r))){t=lo(n,t),t=bI(e,t,1),e=Br(e,t,1),t=Nt(),e!==null&&(Ul(e,1,t),Gt(e,t));break}}e=e.return}}function lb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Nt(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(ht&n)===n&&(Qe===4||Qe===3&&(ht&130023424)===ht&&500>Ue()-pg?Vi(t,0):fg|=n),Gt(t,e)}function KI(t,e){e===0&&((t.mode&1)===0?e=1:(e=ku,ku<<=1,(ku&130023424)===0&&(ku=4194304)));var n=Nt();t=cr(t,e),t!==null&&(Ul(t,e,n),Gt(t,n))}function ub(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),KI(t,n)}function cb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(e),KI(t,n)}var QI;QI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||qt.current)Vt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Vt=!1,X2(t,e,n);Vt=(t.flags&131072)!==0}else Vt=!1,Se&&(e.flags&1048576)!==0&&Z_(e,Pc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;sc(t,e),t=e.pendingProps;var i=io(e,kt.current);Hs(e,n),i=ag(null,e,r,t,i,n);var s=lg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Wt(r)?(s=!0,Dc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ng(e),i.updater=Ad,e.stateNode=i,i._reactInternals=e,yp(e,r,t,n),e=_p(null,e,r,!0,s,n)):(e.tag=0,Se&&s&&Qm(e),xt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(sc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=hb(r),t=yn(r,t),i){case 0:e=wp(null,e,r,t,n);break e;case 1:e=S0(null,e,r,t,n);break e;case 11:e=I0(null,e,r,t,n);break e;case 14:e=E0(null,e,r,yn(r.type,t),n);break e}throw Error(A(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),wp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),S0(t,e,r,i,n);case 3:e:{if(RI(e),t===null)throw Error(A(387));r=e.pendingProps,s=e.memoizedState,i=s.element,sI(t,e),Mc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=lo(Error(A(423)),e),e=T0(t,e,r,n,i);break e}else if(r!==i){i=lo(Error(A(424)),e),e=T0(t,e,r,n,i);break e}else for(Yt=zr(e.stateNode.containerInfo.firstChild),Jt=e,Se=!0,wn=null,n=rI(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(so(),r===i){e=dr(t,e,n);break e}xt(t,e,r,n)}e=e.child}return e;case 5:return oI(e),t===null&&pp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,up(r,i)?o=null:s!==null&&up(r,s)&&(e.flags|=32),DI(t,e),xt(t,e,o,n),e.child;case 6:return t===null&&pp(e),null;case 13:return PI(t,e,n);case 4:return rg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=oo(e,null,r,n):xt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),I0(t,e,r,i,n);case 7:return xt(t,e,e.pendingProps,n),e.child;case 8:return xt(t,e,e.pendingProps.children,n),e.child;case 12:return xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pe(Oc,r._currentValue),r._currentValue=o,s!==null)if(Tn(s.value,o)){if(s.children===i.children&&!qt.current){e=dr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=sr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),mp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),mp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}xt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Hs(e,n),i=dn(i),r=r(i),e.flags|=1,xt(t,e,r,n),e.child;case 14:return r=e.type,i=yn(r,e.pendingProps),i=yn(r.type,i),E0(t,e,r,i,n);case 15:return AI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),sc(t,e),e.tag=1,Wt(r)?(t=!0,Dc(e)):t=!1,Hs(e,n),xI(e,r,i),yp(e,r,i,n),_p(null,e,r,!0,t,n);case 19:return OI(t,e,n);case 22:return NI(t,e,n)}throw Error(A(156,e.tag))};function YI(t,e){return S_(t,e)}function db(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ln(t,e,n,r){return new db(t,e,n,r)}function vg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hb(t){if(typeof t=="function")return vg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$m)return 11;if(t===Fm)return 14}return 2}function Wr(t,e){var n=t.alternate;return n===null?(n=ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function lc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")vg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ns:return zi(n.children,i,s,e);case Mm:o=8,i|=8;break;case zf:return t=ln(12,n,e,i|2),t.elementType=zf,t.lanes=s,t;case Bf:return t=ln(13,n,e,i),t.elementType=Bf,t.lanes=s,t;case jf:return t=ln(19,n,e,i),t.elementType=jf,t.lanes=s,t;case o_:return Rd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case i_:o=10;break e;case s_:o=9;break e;case $m:o=11;break e;case Fm:o=14;break e;case br:o=16,r=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=ln(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function zi(t,e,n,r){return t=ln(7,t,r,e),t.lanes=n,t}function Rd(t,e,n,r){return t=ln(22,t,r,e),t.elementType=o_,t.lanes=n,t.stateNode={isHidden:!1},t}function sf(t,e,n){return t=ln(6,t,null,e),t.lanes=n,t}function of(t,e,n){return e=ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fb(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uh(0),this.expirationTimes=Uh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wg(t,e,n,r,i,s,o,a,l){return t=new fb(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ng(s),t}function pb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:As,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function XI(t){if(!t)return Kr;t=t._reactInternals;e:{if(ds(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(Wt(n))return X_(t,n,e)}return e}function JI(t,e,n,r,i,s,o,a,l){return t=wg(n,r,!0,t,i,s,o,a,l),t.context=XI(null),n=t.current,r=Nt(),i=qr(n),s=sr(r,i),s.callback=e!=null?e:null,Br(n,s,i),t.current.lanes=i,Ul(t,i,r),Gt(t,r),t}function Pd(t,e,n,r){var i=e.current,s=Nt(),o=qr(i);return n=XI(n),e.context===null?e.context=n:e.pendingContext=n,e=sr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Br(i,e,o),t!==null&&(En(t,i,o,s),nc(t,i,o)),o}function qc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function O0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _g(t,e){O0(t,e),(t=t.alternate)&&O0(t,e)}function mb(){return null}var ZI=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ig(t){this._internalRoot=t}Od.prototype.render=Ig.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));Pd(t,e,null,null)};Od.prototype.unmount=Ig.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xi(function(){Pd(null,t,null,null)}),e[ur]=null}};function Od(t){this._internalRoot=t}Od.prototype.unstable_scheduleHydration=function(t){if(t){var e=N_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Nr.length&&e!==0&&e<Nr[n].priority;n++);Nr.splice(n,0,t),n===0&&R_(t)}};function Eg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ld(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function L0(){}function gb(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=qc(o);s.call(u)}}var o=JI(e,r,t,0,null,!1,!1,"",L0);return t._reactRootContainer=o,t[ur]=o.current,el(t.nodeType===8?t.parentNode:t),Xi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=qc(l);a.call(u)}}var l=wg(t,0,!1,null,null,!1,!1,"",L0);return t._reactRootContainer=l,t[ur]=l.current,el(t.nodeType===8?t.parentNode:t),Xi(function(){Pd(e,l,n,r)}),l}function Md(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=qc(o);a.call(l)}}Pd(e,o,t,i)}else o=gb(n,e,t,i,r);return qc(o)}b_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ya(e.pendingLanes);n!==0&&(zm(e,n|1),Gt(e,Ue()),(oe&6)===0&&(uo=Ue()+500,ci()))}break;case 13:Xi(function(){var r=cr(t,1);if(r!==null){var i=Nt();En(r,t,1,i)}}),_g(t,1)}};Bm=function(t){if(t.tag===13){var e=cr(t,134217728);if(e!==null){var n=Nt();En(e,t,134217728,n)}_g(t,134217728)}};A_=function(t){if(t.tag===13){var e=qr(t),n=cr(t,e);if(n!==null){var r=Nt();En(n,t,e,r)}_g(t,e)}};N_=function(){return he};D_=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};Zf=function(t,e,n){switch(e){case"input":if(Gf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=xd(r);if(!i)throw Error(A(90));l_(r),Gf(r,i)}}}break;case"textarea":c_(t,n);break;case"select":e=n.value,e!=null&&js(t,!!n.multiple,e,!1)}};y_=mg;v_=Xi;var yb={usingClientEntryPoint:!1,Events:[zl,Os,xd,m_,g_,mg]},ra={findFiberByHostInstance:Ri,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vb={bundleType:ra.bundleType,version:ra.version,rendererPackageName:ra.rendererPackageName,rendererConfig:ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=I_(t),t===null?null:t.stateNode},findFiberByHostInstance:ra.findFiberByHostInstance||mb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{Ed=Mu.inject(vb),Bn=Mu}catch{}}nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yb;nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eg(e))throw Error(A(200));return pb(t,e,null,n)};nn.createRoot=function(t,e){if(!Eg(t))throw Error(A(299));var n=!1,r="",i=ZI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=wg(t,1,!1,null,null,n,!1,r,i),t[ur]=e.current,el(t.nodeType===8?t.parentNode:t),new Ig(e)};nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=I_(e),t=t===null?null:t.stateNode,t};nn.flushSync=function(t){return Xi(t)};nn.hydrate=function(t,e,n){if(!Ld(e))throw Error(A(200));return Md(null,t,e,!0,n)};nn.hydrateRoot=function(t,e,n){if(!Eg(t))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ZI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=JI(e,null,t,1,n!=null?n:null,i,!1,s,o),t[ur]=e.current,el(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Od(e)};nn.render=function(t,e,n){if(!Ld(e))throw Error(A(200));return Md(null,t,e,!1,n)};nn.unmountComponentAtNode=function(t){if(!Ld(t))throw Error(A(40));return t._reactRootContainer?(Xi(function(){Md(null,null,t,!1,function(){t._reactRootContainer=null,t[ur]=null})}),!0):!1};nn.unstable_batchedUpdates=mg;nn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ld(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return Md(t,e,n,!1,r)};nn.version="18.3.1-next-f1338f8080-20240426";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=nn})(e_);var M0=e_.exports;Uf.createRoot=M0.createRoot,Uf.hydrateRoot=M0.hydrateRoot;const wb="modulepreload",_b=function(t){return"/gymlog/"+t},$0={},Lt=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=_b(s),s in $0)return;$0[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const d=i[c];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":wb,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=(...t)=>t.filter((e,n,r)=>Boolean(e)&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=t=>{const e=Eb(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var af={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},Tb=D.exports.createContext({}),kb=()=>D.exports.useContext(Tb),xb=D.exports.forwardRef(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>{var w,k,p;const{size:u=24,strokeWidth:c=2,absoluteStrokeWidth:d=!1,color:h="currentColor",className:g=""}=(w=kb())!=null?w:{},v=(r!=null?r:d)?Number(n!=null?n:c)*24/Number(e!=null?e:u):n!=null?n:c;return D.exports.createElement("svg",{ref:l,...af,width:(k=e!=null?e:u)!=null?k:af.width,height:(p=e!=null?e:u)!=null?p:af.height,stroke:t!=null?t:h,strokeWidth:v,className:eE("lucide",g,i),...!s&&!Sb(a)&&{"aria-hidden":"true"},...a},[...o.map(([f,y])=>D.exports.createElement(f,y)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=(t,e)=>{const n=D.exports.forwardRef(({className:r,...i},s)=>D.exports.createElement(xb,{ref:s,iconNode:e,className:eE(`lucide-${Ib(F0(t))}`,`lucide-${t}`,r),...i}));return n.displayName=F0(t),n};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]],bb=$e("app-window",Cb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],U0=$e("arrow-right",Ab);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Db=$e("bell",Nb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],Pb=$e("brain",Rb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],uc=$e("calendar",Ob);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],wa=$e("chart-column",Lb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],$b=$e("chevron-down",Mb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Ub=$e("chevron-up",Fb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],zb=$e("clipboard-list",Vb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],jb=$e("download",Bb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],tE=$e("dumbbell",qb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],lf=$e("house",Wb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"m14.5 8.5-5 5",key:"19tnj2"}],["path",{d:"m9.5 8.5 5 5",key:"1oa8ql"}]],Hb=$e("message-square-x",Gb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],Qb=$e("quote",Kb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Xb=$e("refresh-cw",Yb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],uf=$e("shield",Jb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],$u=$e("target",Zb);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],tA=$e("trending-down",eA);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],rA=$e("triangle-alert",nA);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],cf=$e("user",iA);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],nE=$e("users",sA);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],aA=$e("zap",oA),Sg="gymtracker_v1",B="#BBFF00",S={bg:"#0b0c08",card:"#141610",hi:"#1c1e16",border:"#282a20",muted:"#8a8e7a",text:"#eaeed8",sub:"#c0c4b0",danger:"#ff6b6b",warning:"#f0a030",font:"'Plus Jakarta Sans', sans-serif"},rE=["Lunes","Martes","Mi\xE9rcoles","Jueves","Viernes","S\xE1bado","Domingo"],iE={apiKey:"AIzaSyA4hUQYcaOfa6048GT_RFGblkLczKvyRhU",authDomain:"gymtrack-d3c1b.firebaseapp.com",projectId:"gymtrack-d3c1b",storageBucket:"gymtrack-d3c1b.firebasestorage.app",messagingSenderId:"1043912526777",appId:"1:1043912526777:web:e606d213a4ae6e6ab94468"},Rp=["diegomottadev@gmail.com","admin@admin.com"],Pp=["1-3","4-8","9-15","16+"],sE="https://us-central1-gymtrack-d3c1b.cloudfunctions.net",oE={athlete:{ars:5e3,usd:3,label:"Athlete"},trainer:{ars:13500,usd:9,label:"Trainer"}},Wc={workouts:[],objectives:[],completions:[],reminder:{enabled:!1,time:"09:00"}},lA=Object.freeze(Object.defineProperty({__proto__:null,KEY:Sg,A:B,C:S,DAY_NAMES:rE,FIREBASE_CONFIG:iE,ADMIN_EMAILS:Rp,STUDENT_COUNT_RANGES:Pp,FUNCTIONS_URL:sE,SUBSCRIPTION_PLANS:oE,EMPTY_DATA:Wc},Symbol.toStringTag,{value:"Module"})),aE=()=>Math.random().toString(36).slice(2,9)+Date.now().toString(36).slice(-4),V0=t=>String(t).padStart(2,"0"),Op=t=>`${t.getFullYear()}-${V0(t.getMonth()+1)}-${V0(t.getDate())}`,lE=()=>Op(new Date),uA=()=>{const t=new Date().getDay();return t===0?6:t-1},cA=()=>{try{const t=JSON.parse(localStorage.getItem(Sg)||"null")||{};return{workouts:t.workouts||[],objectives:t.objectives||[],completions:t.completions||[],reminder:t.reminder||{enabled:!1,time:"09:00"}}}catch{return{...Wc}}},df=t=>localStorage.setItem(Sg,JSON.stringify(t));function eV(){const t=new Date,e=t.getDay(),n=e===0?6:e-1,r=new Date(t);r.setDate(t.getDate()-n),r.setHours(12,0,0,0);const i=new Date(r.getFullYear(),r.getMonth(),r.getDate()+6,12,0,0);return{mon:Op(r),sun:Op(i)}}function dA(t){return{id:aE(),name:t,createdAt:lE(),days:rE.map((e,n)=>({dayNumber:n+1,label:"",exercises:[]}))}}/**
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
 */const uE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},hA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},cE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(h=64)),r.push(n[c],n[d],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new fA;const h=s<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pA=function(t){const e=uE(t);return cE.encodeByteArray(e,!0)},Gc=function(t){return pA(t).replace(/\./g,"")},dE=function(t){try{return cE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Hc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!mA(n)||(t[n]=Hc(t[n],e[n]));return t}function mA(t){return t!=="__proto__"}/**
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
 */function gA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yA=()=>gA().__FIREBASE_DEFAULTS__,vA=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},wA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dE(t[1]);return e&&JSON.parse(e)},Tg=()=>{try{return yA()||vA()||wA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hE=()=>{var t;return(t=Tg())===null||t===void 0?void 0:t.config},_A=t=>{var e;return(e=Tg())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class IA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function EA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Gc(JSON.stringify(n)),Gc(JSON.stringify(o)),a].join(".")}/**
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
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function SA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function kg(){var t;const e=(t=Tg())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function TA(){return typeof self=="object"&&self.self===self}function fE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pE(){const t=Ae();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function kA(){return!kg()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ul(){try{return typeof indexedDB=="object"}catch{return!1}}function xA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const CA="FirebaseError";class Dt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=CA,Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hs.prototype.create)}}class hs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?bA(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Dt(i,a,r)}}function bA(t,e){return t.replace(AA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const AA=/\{\$([^}]+)}/g;/**
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
 */function z0(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function NA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Lp(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(B0(s)&&B0(o)){if(!Lp(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function B0(t){return t!==null&&typeof t=="object"}/**
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
 */function Ao(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function _a(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function mE(t,e){const n=new DA(t,e);return n.subscribe.bind(n)}class DA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");RA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=hf),i.error===void 0&&(i.error=hf),i.complete===void 0&&(i.complete=hf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hf(){}/**
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
 */function W(t){return t&&t._delegate?t._delegate:t}class Hn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ki="[DEFAULT]";/**
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
 */class PA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new IA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LA(e))try{this.getOrInitializeService({instanceIdentifier:ki})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ki){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ki){return this.instances.has(e)}getOptions(e=ki){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:OA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ki){return this.component?this.component.multipleInstances?e:ki:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function OA(t){return t===ki?void 0:t}function LA(t){return t.instantiationMode==="EAGER"}/**
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
 */class MA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new PA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Cg=[];var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const gE={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},$A=ie.INFO,FA={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},UA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=FA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $d{constructor(e){this.name=e,this._logLevel=$A,this._logHandler=UA,this._userLogHandler=null,Cg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}function VA(t){Cg.forEach(e=>{e.setLogLevel(t)})}function zA(t,e){for(const n of Cg){let r=null;e&&e.level&&(r=gE[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:ie[s].toLowerCase(),message:a,args:o,type:i.name})}}}const BA=(t,e)=>e.some(n=>t instanceof n);let j0,q0;function jA(){return j0||(j0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qA(){return q0||(q0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yE=new WeakMap,Mp=new WeakMap,vE=new WeakMap,ff=new WeakMap,bg=new WeakMap;function WA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Gr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yE.set(n,t)}).catch(()=>{}),bg.set(e,t),e}function GA(t){if(Mp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Mp.set(t,e)}let $p={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function HA(t){$p=t($p)}function KA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(pf(this),e,...n);return vE.set(r,e.sort?e.sort():[e]),Gr(r)}:qA().includes(t)?function(...e){return t.apply(pf(this),e),Gr(yE.get(this))}:function(...e){return Gr(t.apply(pf(this),e))}}function QA(t){return typeof t=="function"?KA(t):(t instanceof IDBTransaction&&GA(t),BA(t,jA())?new Proxy(t,$p):t)}function Gr(t){if(t instanceof IDBRequest)return WA(t);if(ff.has(t))return ff.get(t);const e=QA(t);return e!==t&&(ff.set(t,e),bg.set(e,t)),e}const pf=t=>bg.get(t);function YA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Gr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Gr(o.result),l.oldVersion,l.newVersion,Gr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const XA=["get","getKey","getAll","getAllKeys","count"],JA=["put","add","delete","clear"],mf=new Map;function W0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mf.get(e))return mf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=JA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||XA.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return mf.set(e,s),s}HA(t=>({...t,get:(e,n,r)=>W0(e,n)||t.get(e,n,r),has:(e,n)=>!!W0(e,n)||t.has(e,n)}));/**
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
 */class ZA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function eN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fp="@firebase/app",G0="0.9.13";/**
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
 */const Ji=new $d("@firebase/app"),tN="@firebase/app-compat",nN="@firebase/analytics-compat",rN="@firebase/analytics",iN="@firebase/app-check-compat",sN="@firebase/app-check",oN="@firebase/auth",aN="@firebase/auth-compat",lN="@firebase/database",uN="@firebase/database-compat",cN="@firebase/functions",dN="@firebase/functions-compat",hN="@firebase/installations",fN="@firebase/installations-compat",pN="@firebase/messaging",mN="@firebase/messaging-compat",gN="@firebase/performance",yN="@firebase/performance-compat",vN="@firebase/remote-config",wN="@firebase/remote-config-compat",_N="@firebase/storage",IN="@firebase/storage-compat",EN="@firebase/firestore",SN="@firebase/firestore-compat",TN="firebase",kN="9.23.0";/**
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
 */const Qr="[DEFAULT]",xN={[Fp]:"fire-core",[tN]:"fire-core-compat",[rN]:"fire-analytics",[nN]:"fire-analytics-compat",[sN]:"fire-app-check",[iN]:"fire-app-check-compat",[oN]:"fire-auth",[aN]:"fire-auth-compat",[lN]:"fire-rtdb",[uN]:"fire-rtdb-compat",[cN]:"fire-fn",[dN]:"fire-fn-compat",[hN]:"fire-iid",[fN]:"fire-iid-compat",[pN]:"fire-fcm",[mN]:"fire-fcm-compat",[gN]:"fire-perf",[yN]:"fire-perf-compat",[vN]:"fire-rc",[wN]:"fire-rc-compat",[_N]:"fire-gcs",[IN]:"fire-gcs-compat",[EN]:"fire-fst",[SN]:"fire-fst-compat","fire-js":"fire-js",[TN]:"fire-js-all"};/**
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
 */const Yr=new Map,cl=new Map;function Kc(t,e){try{t.container.addComponent(e)}catch(n){Ji.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wE(t,e){t.container.addOrOverwriteComponent(e)}function Xr(t){const e=t.name;if(cl.has(e))return Ji.debug(`There were multiple attempts to register component ${e}.`),!1;cl.set(e,t);for(const n of Yr.values())Kc(n,t);return!0}function _E(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function CN(t,e,n=Qr){_E(t,e).clearInstance(n)}function bN(){cl.clear()}/**
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
 */const AN={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},or=new hs("app","Firebase",AN);/**
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
 */class NN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw or.create("app-deleted",{appName:this._name})}}/**
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
 */const di=kN;function Ag(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw or.create("bad-app-name",{appName:String(i)});if(n||(n=hE()),!n)throw or.create("no-options");const s=Yr.get(i);if(s){if(Lp(n,s.options)&&Lp(r,s.config))return s;throw or.create("duplicate-app",{appName:i})}const o=new MA(i);for(const l of cl.values())o.addComponent(l);const a=new NN(n,r,o);return Yr.set(i,a),a}function DN(t=Qr){const e=Yr.get(t);if(!e&&t===Qr&&hE())return Ag();if(!e)throw or.create("no-app",{appName:t});return e}function RN(){return Array.from(Yr.values())}async function IE(t){const e=t.name;Yr.has(e)&&(Yr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function qn(t,e,n){var r;let i=(r=xN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ji.warn(a.join(" "));return}Xr(new Hn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function EE(t,e){if(t!==null&&typeof t!="function")throw or.create("invalid-log-argument");zA(t,e)}function SE(t){VA(t)}/**
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
 */const PN="firebase-heartbeat-database",ON=1,dl="firebase-heartbeat-store";let gf=null;function TE(){return gf||(gf=YA(PN,ON,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(dl)}}}).catch(t=>{throw or.create("idb-open",{originalErrorMessage:t.message})})),gf}async function LN(t){try{return await(await TE()).transaction(dl).objectStore(dl).get(kE(t))}catch(e){if(e instanceof Dt)Ji.warn(e.message);else{const n=or.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ji.warn(n.message)}}}async function H0(t,e){try{const r=(await TE()).transaction(dl,"readwrite");await r.objectStore(dl).put(e,kE(t)),await r.done}catch(n){if(n instanceof Dt)Ji.warn(n.message);else{const r=or.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ji.warn(r.message)}}}function kE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const MN=1024,$N=30*24*60*60*1e3;class FN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=K0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=$N}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=K0(),{heartbeatsToSend:n,unsentEntries:r}=UN(this._heartbeatsCache.heartbeats),i=Gc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function K0(){return new Date().toISOString().substring(0,10)}function UN(t,e=MN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Q0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Q0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class VN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ul()?xA().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await LN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return H0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return H0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Q0(t){return Gc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function zN(t){Xr(new Hn("platform-logger",e=>new ZA(e),"PRIVATE")),Xr(new Hn("heartbeat",e=>new FN(e),"PRIVATE")),qn(Fp,G0,t),qn(Fp,G0,"esm2017"),qn("fire-js","")}zN("");const BN=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:di,_DEFAULT_ENTRY_NAME:Qr,_addComponent:Kc,_addOrOverwriteComponent:wE,_apps:Yr,_clearComponents:bN,_components:cl,_getProvider:_E,_registerComponent:Xr,_removeServiceInstance:CN,deleteApp:IE,getApp:DN,getApps:RN,initializeApp:Ag,onLog:EE,registerVersion:qn,setLogLevel:SE,FirebaseError:Dt},Symbol.toStringTag,{value:"Module"}));/**
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
 */class jN{constructor(e,n){this._delegate=e,this.firebase=n,Kc(e,new Hn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),IE(this._delegate)))}_getService(e,n=Qr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Qr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Kc(this._delegate,e)}_addOrOverwriteComponent(e){wE(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const qN={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Y0=new hs("app-compat","Firebase",qN);/**
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
 */function WN(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:qn,setLogLevel:SE,onLog:EE,apps:null,SDK_VERSION:di,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:BN}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Qr,!z0(e,u))throw Y0.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const d=Ag(u,c);if(z0(e,d.name))return e[d.name];const h=new t(d,n);return e[d.name]=h,h}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,d=c.replace("-compat","");if(Xr(u)&&u.type==="PUBLIC"){const h=(g=i())=>{if(typeof g[d]!="function")throw Y0.create("invalid-app-argument",{appName:c});return g[d]()};u.serviceProps!==void 0&&Hc(h,u.serviceProps),n[d]=h,t.prototype[d]=function(...g){return this._getService.bind(this,c).apply(this,u.multipleInstances?g:[])}}return u.type==="PUBLIC"?n[d]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
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
 */function xE(){const t=WN(jN);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:xE,extendNamespace:e,createSubscribe:mE,ErrorFactory:hs,deepExtend:Hc});function e(n){Hc(t,n)}return t}const GN=xE();/**
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
 */const X0=new $d("@firebase/app-compat"),HN="@firebase/app-compat",KN="0.2.13";/**
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
 */function QN(t){qn(HN,KN,t)}/**
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
 */if(TA()&&self.firebase!==void 0){X0.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&X0.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const ct=GN;QN();var YN="firebase",XN="9.23.0";/**
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
 */ct.registerVersion(YN,XN,"app-compat");var JN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,Ng=Ng||{},K=JN||self;function Fd(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function jl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ZN(t){return Object.prototype.hasOwnProperty.call(t,yf)&&t[yf]||(t[yf]=++eD)}var yf="closure_uid_"+(1e9*Math.random()>>>0),eD=0;function tD(t,e,n){return t.call.apply(t.bind,arguments)}function nD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function St(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?St=tD:St=nD,St.apply(null,arguments)}function Fu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function it(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function hi(){this.s=this.s,this.o=this.o}var rD=0;hi.prototype.s=!1;hi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),rD!=0)&&ZN(this)};hi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const CE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Dg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function J0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Fd(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Tt.prototype.h=function(){this.defaultPrevented=!0};var iD=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",()=>{},e),K.removeEventListener("test",()=>{},e)}catch{}return t}();function hl(t){return/^[\s\xa0]*$/.test(t)}function Ud(){var t=K.navigator;return t&&(t=t.userAgent)?t:""}function Rn(t){return Ud().indexOf(t)!=-1}function Rg(t){return Rg[" "](t),t}Rg[" "]=function(){};function sD(t,e){var n=XD;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var oD=Rn("Opera"),co=Rn("Trident")||Rn("MSIE"),bE=Rn("Edge"),Up=bE||co,AE=Rn("Gecko")&&!(Ud().toLowerCase().indexOf("webkit")!=-1&&!Rn("Edge"))&&!(Rn("Trident")||Rn("MSIE"))&&!Rn("Edge"),aD=Ud().toLowerCase().indexOf("webkit")!=-1&&!Rn("Edge");function NE(){var t=K.document;return t?t.documentMode:void 0}var Vp;e:{var vf="",wf=function(){var t=Ud();if(AE)return/rv:([^\);]+)(\)|;)/.exec(t);if(bE)return/Edge\/([\d\.]+)/.exec(t);if(co)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(aD)return/WebKit\/(\S+)/.exec(t);if(oD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(wf&&(vf=wf?wf[1]:""),co){var _f=NE();if(_f!=null&&_f>parseFloat(vf)){Vp=String(_f);break e}}Vp=vf}var zp;if(K.document&&co){var Z0=NE();zp=Z0||parseInt(Vp,10)||void 0}else zp=void 0;var lD=zp;function fl(t,e){if(Tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(AE){e:{try{Rg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:uD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&fl.$.h.call(this)}}it(fl,Tt);var uD={2:"touch",3:"pen",4:"mouse"};fl.prototype.h=function(){fl.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ql="closure_listenable_"+(1e6*Math.random()|0),cD=0;function dD(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++cD,this.fa=this.ia=!1}function Vd(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Pg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function hD(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function DE(t){const e={};for(const n in t)e[n]=t[n];return e}const ew="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function RE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<ew.length;s++)n=ew[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function zd(t){this.src=t,this.g={},this.h=0}zd.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=jp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new dD(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Bp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=CE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Vd(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function jp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Og="closure_lm_"+(1e6*Math.random()|0),If={};function PE(t,e,n,r,i){if(r&&r.once)return LE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)PE(t,e[s],n,r,i);return null}return n=$g(n),t&&t[ql]?t.O(e,n,jl(r)?!!r.capture:!!r,i):OE(t,e,n,!1,r,i)}function OE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=jl(i)?!!i.capture:!!i,a=Mg(t);if(a||(t[Og]=a=new zd(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=fD(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)iD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent($E(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function fD(){function t(n){return e.call(t.src,t.listener,n)}const e=pD;return t}function LE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)LE(t,e[s],n,r,i);return null}return n=$g(n),t&&t[ql]?t.P(e,n,jl(r)?!!r.capture:!!r,i):OE(t,e,n,!0,r,i)}function ME(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)ME(t,e[s],n,r,i);else r=jl(r)?!!r.capture:!!r,n=$g(n),t&&t[ql]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=jp(s,n,r,i),-1<n&&(Vd(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Mg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=jp(e,n,r,i)),(n=-1<t?e[t]:null)&&Lg(n))}function Lg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ql])Bp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent($E(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Mg(e))?(Bp(n,t),n.h==0&&(n.src=null,e[Og]=null)):Vd(t)}}}function $E(t){return t in If?If[t]:If[t]="on"+t}function pD(t,e){if(t.fa)t=!0;else{e=new fl(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Lg(t),t=n.call(r,e)}return t}function Mg(t){return t=t[Og],t instanceof zd?t:null}var Ef="__closure_events_fn_"+(1e9*Math.random()>>>0);function $g(t){return typeof t=="function"?t:(t[Ef]||(t[Ef]=function(e){return t.handleEvent(e)}),t[Ef])}function rt(){hi.call(this),this.i=new zd(this),this.S=this,this.J=null}it(rt,hi);rt.prototype[ql]=!0;rt.prototype.removeEventListener=function(t,e,n,r){ME(this,t,e,n,r)};function ft(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Tt(e,t);else if(e instanceof Tt)e.target=e.target||t;else{var i=e;e=new Tt(r,t),RE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Uu(o,r,!0,e)&&i}if(o=e.g=t,i=Uu(o,r,!0,e)&&i,i=Uu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Uu(o,r,!1,e)&&i}rt.prototype.N=function(){if(rt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Vd(n[r]);delete t.g[e],t.h--}}this.J=null};rt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};rt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Uu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Bp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Fg=K.JSON.stringify;class mD{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function gD(){var t=Ug;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class yD{constructor(){this.h=this.g=null}add(e,n){const r=FE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var FE=new mD(()=>new vD,t=>t.reset());class vD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function wD(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function _D(t){K.setTimeout(()=>{throw t},0)}let pl,ml=!1,Ug=new yD,UE=()=>{const t=K.Promise.resolve(void 0);pl=()=>{t.then(ID)}};var ID=()=>{for(var t;t=gD();){try{t.h.call(t.g)}catch(n){_D(n)}var e=FE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ml=!1};function Bd(t,e){rt.call(this),this.h=t||1,this.g=e||K,this.j=St(this.qb,this),this.l=Date.now()}it(Bd,rt);$=Bd.prototype;$.ga=!1;$.T=null;$.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ft(this,"tick"),this.ga&&(Vg(this),this.start()))}};$.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Vg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}$.N=function(){Bd.$.N.call(this),Vg(this),delete this.g};function zg(t,e,n){if(typeof t=="function")n&&(t=St(t,n));else if(t&&typeof t.handleEvent=="function")t=St(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function VE(t){t.g=zg(()=>{t.g=null,t.i&&(t.i=!1,VE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ED extends hi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:VE(this)}N(){super.N(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gl(t){hi.call(this),this.h=t,this.g={}}it(gl,hi);var tw=[];function zE(t,e,n,r){Array.isArray(n)||(n&&(tw[0]=n.toString()),n=tw);for(var i=0;i<n.length;i++){var s=PE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function BE(t){Pg(t.g,function(e,n){this.g.hasOwnProperty(n)&&Lg(e)},t),t.g={}}gl.prototype.N=function(){gl.$.N.call(this),BE(this)};gl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function jd(){this.g=!0}jd.prototype.Ea=function(){this.g=!1};function SD(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function TD(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Bs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+xD(t,n)+(r?" "+r:"")})}function kD(t,e){t.info(function(){return"TIMEOUT: "+e})}jd.prototype.info=function(){};function xD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Fg(n)}catch{return e}}var fs={},nw=null;function qd(){return nw=nw||new rt}fs.Ta="serverreachability";function jE(t){Tt.call(this,fs.Ta,t)}it(jE,Tt);function yl(t){const e=qd();ft(e,new jE(e))}fs.STAT_EVENT="statevent";function qE(t,e){Tt.call(this,fs.STAT_EVENT,t),this.stat=e}it(qE,Tt);function At(t){const e=qd();ft(e,new qE(e,t))}fs.Ua="timingevent";function WE(t,e){Tt.call(this,fs.Ua,t),this.size=e}it(WE,Tt);function Wl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var Wd={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},GE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Bg(){}Bg.prototype.h=null;function rw(t){return t.h||(t.h=t.i())}function HE(){}var Gl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function jg(){Tt.call(this,"d")}it(jg,Tt);function qg(){Tt.call(this,"c")}it(qg,Tt);var qp;function Gd(){}it(Gd,Bg);Gd.prototype.g=function(){return new XMLHttpRequest};Gd.prototype.i=function(){return{}};qp=new Gd;function Hl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new gl(this),this.P=CD,t=Up?125:void 0,this.V=new Bd(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new KE}function KE(){this.i=null,this.g="",this.h=!1}var CD=45e3,Wp={},Qc={};$=Hl.prototype;$.setTimeout=function(t){this.P=t};function Gp(t,e,n){t.L=1,t.v=Kd(hr(e)),t.s=n,t.S=!0,QE(t,null)}function QE(t,e){t.G=Date.now(),Kl(t),t.A=hr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),rS(n.i,"t",r),t.C=0,n=t.l.J,t.h=new KE,t.g=TS(t.l,n?e:null,!t.s),0<t.O&&(t.M=new ED(St(t.Pa,t,t.g),t.O)),zE(t.U,t.g,"readystatechange",t.nb),e=t.I?DE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),yl(),SD(t.j,t.u,t.A,t.m,t.W,t.s)}$.nb=function(t){t=t.target;const e=this.M;e&&$n(t)==3?e.l():this.Pa(t)};$.Pa=function(t){try{if(t==this.g)e:{const c=$n(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||Up||this.g&&(this.h.h||this.g.ja()||aw(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?yl(3):yl(2)),Hd(this);var n=this.g.da();this.ca=n;t:if(YE(this)){var r=aw(this.g);t="";var i=r.length,s=$n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Li(this),Ma(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,TD(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!hl(a)){var u=a;break t}}u=null}if(n=u)Bs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hp(this,n);else{this.i=!1,this.o=3,At(12),Li(this),Ma(this);break e}}this.S?(XE(this,c,o),Up&&this.i&&c==3&&(zE(this.U,this.V,"tick",this.mb),this.V.start())):(Bs(this.j,this.m,o,null),Hp(this,o)),c==4&&Li(this),this.i&&!this.J&&(c==4?_S(this.l,this):(this.i=!1,Kl(this)))}else KD(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,At(12)):(this.o=0,At(13)),Li(this),Ma(this)}}}catch{}finally{}};function YE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function XE(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=bD(t,n),i==Qc){e==4&&(t.o=4,At(14),r=!1),Bs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Wp){t.o=4,At(15),Bs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Bs(t.j,t.m,i,null),Hp(t,i);YE(t)&&i!=Qc&&i!=Wp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,At(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Yg(e),e.M=!0,At(11))):(Bs(t.j,t.m,n,"[Invalid Chunked Response]"),Li(t),Ma(t))}$.mb=function(){if(this.g){var t=$n(this.g),e=this.g.ja();this.C<e.length&&(Hd(this),XE(this,t,e),this.i&&t!=4&&Kl(this))}};function bD(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Qc:(n=Number(e.substring(n,r)),isNaN(n)?Wp:(r+=1,r+n>e.length?Qc:(e=e.slice(r,r+n),t.C=r+n,e)))}$.cancel=function(){this.J=!0,Li(this)};function Kl(t){t.Y=Date.now()+t.P,JE(t,t.P)}function JE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Wl(St(t.lb,t),e)}function Hd(t){t.B&&(K.clearTimeout(t.B),t.B=null)}$.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(kD(this.j,this.A),this.L!=2&&(yl(),At(17)),Li(this),this.o=2,Ma(this)):JE(this,this.Y-t)};function Ma(t){t.l.H==0||t.J||_S(t.l,t)}function Li(t){Hd(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Vg(t.V),BE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Hp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Kp(n.i,t))){if(!t.K&&Kp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Jc(n),Xd(n);else break e;Qg(n),At(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Wl(St(n.ib,n),6e3));if(1>=oS(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Mi(n,11)}else if((t.K||n.g==t)&&Jc(n),!hl(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Wg(s,s.h),s.h=null))}if(r.F){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,ye(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=SS(r,r.J?r.pa:null,r.Y),o.K){aS(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Hd(a),Kl(a)),r.g=o}else vS(r);0<n.j.length&&Jd(n)}else u[0]!="stop"&&u[0]!="close"||Mi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Mi(n,7):Kg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}yl(4)}catch{}}function AD(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Fd(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function ND(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Fd(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function ZE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Fd(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ND(t),r=AD(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var eS=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function DD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Bi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Bi){this.h=t.h,Yc(this,t.j),this.s=t.s,this.g=t.g,Xc(this,t.m),this.l=t.l;var e=t.i,n=new vl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),iw(this,n),this.o=t.o}else t&&(e=String(t).match(eS))?(this.h=!1,Yc(this,e[1]||"",!0),this.s=Ia(e[2]||""),this.g=Ia(e[3]||"",!0),Xc(this,e[4]),this.l=Ia(e[5]||"",!0),iw(this,e[6]||"",!0),this.o=Ia(e[7]||"")):(this.h=!1,this.i=new vl(null,this.h))}Bi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ea(e,sw,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ea(e,sw,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ea(n,n.charAt(0)=="/"?OD:PD,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ea(n,MD)),t.join("")};function hr(t){return new Bi(t)}function Yc(t,e,n){t.j=n?Ia(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Xc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function iw(t,e,n){e instanceof vl?(t.i=e,$D(t.i,t.h)):(n||(e=Ea(e,LD)),t.i=new vl(e,t.h))}function ye(t,e,n){t.i.set(e,n)}function Kd(t){return ye(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ia(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ea(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,RD),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function RD(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var sw=/[#\/\?@]/g,PD=/[#\?:]/g,OD=/[#\?]/g,LD=/[#\?@]/g,MD=/#/g;function vl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function fi(t){t.g||(t.g=new Map,t.h=0,t.i&&DD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=vl.prototype;$.add=function(t,e){fi(this),this.i=null,t=No(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function tS(t,e){fi(t),e=No(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function nS(t,e){return fi(t),e=No(t,e),t.g.has(e)}$.forEach=function(t,e){fi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};$.ta=function(){fi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};$.Z=function(t){fi(this);let e=[];if(typeof t=="string")nS(this,t)&&(e=e.concat(this.g.get(No(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};$.set=function(t,e){return fi(this),this.i=null,t=No(this,t),nS(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function rS(t,e,n){tS(t,e),0<n.length&&(t.i=null,t.g.set(No(t,e),Dg(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function No(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function $D(t,e){e&&!t.j&&(fi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(tS(this,r),rS(this,i,n))},t)),t.j=e}var FD=class{constructor(t,e){this.g=t,this.map=e}};function iS(t){this.l=t||UD,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ka&&K.g.Ka()&&K.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var UD=10;function sS(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function oS(t){return t.h?1:t.g?t.g.size:0}function Kp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Wg(t,e){t.g?t.g.add(e):t.h=e}function aS(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}iS.prototype.cancel=function(){if(this.i=lS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function lS(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Dg(t.i)}var VD=class{stringify(t){return K.JSON.stringify(t,void 0)}parse(t){return K.JSON.parse(t,void 0)}};function zD(){this.g=new VD}function BD(t,e,n){const r=n||"";try{ZE(t,function(i,s){let o=i;jl(i)&&(o=Fg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function jD(t,e){const n=new jd;if(K.Image){const r=new Image;r.onload=Fu(Vu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Fu(Vu,n,r,"TestLoadImage: error",!1,e),r.onabort=Fu(Vu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Fu(Vu,n,r,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Vu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ql(t){this.l=t.fc||null,this.j=t.ob||!1}it(Ql,Bg);Ql.prototype.g=function(){return new Qd(this.l,this.j)};Ql.prototype.i=function(t){return function(){return t}}({});function Qd(t,e){rt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Gg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}it(Qd,rt);var Gg=0;$=Qd.prototype;$.open=function(t,e){if(this.readyState!=Gg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,wl(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||K).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yl(this)),this.readyState=Gg};$.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,wl(this)),this.g&&(this.readyState=3,wl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;uS(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function uS(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}$.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Yl(this):wl(this),this.readyState==3&&uS(this)}};$.Za=function(t){this.g&&(this.response=this.responseText=t,Yl(this))};$.Ya=function(t){this.g&&(this.response=t,Yl(this))};$.ka=function(){this.g&&Yl(this)};function Yl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,wl(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function wl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Qd.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var qD=K.JSON.parse;function Oe(t){rt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=cS,this.L=this.M=!1}it(Oe,rt);var cS="",WD=/^https?$/i,GD=["POST","PUT"];$=Oe.prototype;$.Oa=function(t){this.M=t};$.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():qp.g(),this.C=this.u?rw(this.u):rw(qp),this.g.onreadystatechange=St(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){ow(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=K.FormData&&t instanceof K.FormData,!(0<=CE(GD,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{fS(this),0<this.B&&((this.L=HD(this.g))?(this.g.timeout=this.B,this.g.ontimeout=St(this.ua,this)):this.A=zg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){ow(this,s)}};function HD(t){return co&&typeof t.timeout=="number"&&t.ontimeout!==void 0}$.ua=function(){typeof Ng<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ft(this,"timeout"),this.abort(8))};function ow(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,dS(t),Yd(t)}function dS(t){t.F||(t.F=!0,ft(t,"complete"),ft(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ft(this,"complete"),ft(this,"abort"),Yd(this))};$.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yd(this,!0)),Oe.$.N.call(this)};$.La=function(){this.s||(this.G||this.v||this.l?hS(this):this.kb())};$.kb=function(){hS(this)};function hS(t){if(t.h&&typeof Ng<"u"&&(!t.C[1]||$n(t)!=4||t.da()!=2)){if(t.v&&$n(t)==4)zg(t.La,0,t);else if(ft(t,"readystatechange"),$n(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(eS)[1]||null;!i&&K.self&&K.self.location&&(i=K.self.location.protocol.slice(0,-1)),r=!WD.test(i?i.toLowerCase():"")}n=r}if(n)ft(t,"complete"),ft(t,"success");else{t.m=6;try{var s=2<$n(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",dS(t)}}finally{Yd(t)}}}}function Yd(t,e){if(t.g){fS(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ft(t,"ready");try{n.onreadystatechange=r}catch{}}}function fS(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}$.isActive=function(){return!!this.g};function $n(t){return t.g?t.g.readyState:0}$.da=function(){try{return 2<$n(this)?this.g.status:-1}catch{return-1}};$.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),qD(e)}};function aw(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case cS:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function KD(t){const e={};t=(t.g&&2<=$n(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(hl(t[r]))continue;var n=wD(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}hD(e,function(r){return r.join(", ")})}$.Ia=function(){return this.m};$.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function pS(t){let e="";return Pg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Hg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=pS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ye(t,e,n))}function ia(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function mS(t){this.Ga=0,this.j=[],this.l=new jd,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ia("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ia("baseRetryDelayMs",5e3,t),this.hb=ia("retryDelaySeedMs",1e4,t),this.eb=ia("forwardChannelMaxRetries",2,t),this.xa=ia("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new iS(t&&t.concurrentRequestLimit),this.Ja=new zD,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}$=mS.prototype;$.ra=8;$.H=1;function Kg(t){if(gS(t),t.H==3){var e=t.W++,n=hr(t.I);if(ye(n,"SID",t.K),ye(n,"RID",e),ye(n,"TYPE","terminate"),Xl(t,n),e=new Hl(t,t.l,e),e.L=2,e.v=Kd(hr(n)),n=!1,K.navigator&&K.navigator.sendBeacon)try{n=K.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=TS(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Kl(e)}ES(t)}function Xd(t){t.g&&(Yg(t),t.g.cancel(),t.g=null)}function gS(t){Xd(t),t.u&&(K.clearTimeout(t.u),t.u=null),Jc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function Jd(t){if(!sS(t.i)&&!t.m){t.m=!0;var e=t.Na;pl||UE(),ml||(pl(),ml=!0),Ug.add(e,t),t.C=0}}function QD(t,e){return oS(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Wl(St(t.Na,t,e),IS(t,t.C)),t.C++,!0)}$.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Hl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=DE(s),RE(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=yS(this,i,e),n=hr(this.I),ye(n,"RID",t),ye(n,"CVER",22),this.F&&ye(n,"X-HTTP-Session-Id",this.F),Xl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(pS(s)))+"&"+e:this.o&&Hg(n,this.o,s)),Wg(this.i,i),this.bb&&ye(n,"TYPE","init"),this.P?(ye(n,"$req",e),ye(n,"SID","null"),i.aa=!0,Gp(i,n,null)):Gp(i,n,e),this.H=2}}else this.H==3&&(t?lw(this,t):this.j.length==0||sS(this.i)||lw(this))};function lw(t,e){var n;e?n=e.m:n=t.W++;const r=hr(t.I);ye(r,"SID",t.K),ye(r,"RID",n),ye(r,"AID",t.V),Xl(t,r),t.o&&t.s&&Hg(r,t.o,t.s),n=new Hl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=yS(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Wg(t.i,n),Gp(n,r,e)}function Xl(t,e){t.na&&Pg(t.na,function(n,r){ye(e,r,n)}),t.h&&ZE({},function(n,r){ye(e,r,n)})}function yS(t,e,n){n=Math.min(t.j.length,n);var r=t.h?St(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{BD(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function vS(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;pl||UE(),ml||(pl(),ml=!0),Ug.add(e,t),t.A=0}}function Qg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Wl(St(t.Ma,t),IS(t,t.A)),t.A++,!0)}$.Ma=function(){if(this.u=null,wS(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Wl(St(this.jb,this),t)}};$.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,At(10),Xd(this),wS(this))};function Yg(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function wS(t){t.g=new Hl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=hr(t.wa);ye(e,"RID","rpc"),ye(e,"SID",t.K),ye(e,"AID",t.V),ye(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ye(e,"TO",t.qa),ye(e,"TYPE","xmlhttp"),Xl(t,e),t.o&&t.s&&Hg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Kd(hr(e)),n.s=null,n.S=!0,QE(n,t)}$.ib=function(){this.v!=null&&(this.v=null,Xd(this),Qg(this),At(19))};function Jc(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function _S(t,e){var n=null;if(t.g==e){Jc(t),Yg(t),t.g=null;var r=2}else if(Kp(t.i,e))n=e.F,aS(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=qd(),ft(r,new WE(r,n)),Jd(t)}else vS(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&QD(t,e)||r==2&&Qg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Mi(t,5);break;case 4:Mi(t,10);break;case 3:Mi(t,6);break;default:Mi(t,2)}}}function IS(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Mi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=St(t.pb,t);n||(n=new Bi("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||Yc(n,"https"),Kd(n)),jD(n.toString(),r)}else At(2);t.H=0,t.h&&t.h.za(e),ES(t),gS(t)}$.pb=function(t){t?(this.l.info("Successfully pinged google.com"),At(2)):(this.l.info("Failed to ping google.com"),At(1))};function ES(t){if(t.H=0,t.ma=[],t.h){const e=lS(t.i);(e.length!=0||t.j.length!=0)&&(J0(t.ma,e),J0(t.ma,t.j),t.i.i.length=0,Dg(t.j),t.j.length=0),t.h.ya()}}function SS(t,e,n){var r=n instanceof Bi?hr(n):new Bi(n);if(r.g!="")e&&(r.g=e+"."+r.g),Xc(r,r.m);else{var i=K.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Bi(null);r&&Yc(s,r),e&&(s.g=e),i&&Xc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ye(r,n,e),ye(r,"VER",t.ra),Xl(t,r),r}function TS(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Oe(new Ql({ob:!0})):new Oe(t.va),e.Oa(t.J),e}$.isActive=function(){return!!this.h&&this.h.isActive(this)};function kS(){}$=kS.prototype;$.Ba=function(){};$.Aa=function(){};$.za=function(){};$.ya=function(){};$.isActive=function(){return!0};$.Va=function(){};function Zc(){if(co&&!(10<=Number(lD)))throw Error("Environmental error: no available transport.")}Zc.prototype.g=function(t,e){return new en(t,e)};function en(t,e){rt.call(this),this.g=new mS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!hl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!hl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Do(this)}it(en,rt);en.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;At(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=SS(t,null,t.Y),Jd(t)};en.prototype.close=function(){Kg(this.g)};en.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Fg(t),t=n);e.j.push(new FD(e.fb++,t)),e.H==3&&Jd(e)};en.prototype.N=function(){this.g.h=null,delete this.j,Kg(this.g),delete this.g,en.$.N.call(this)};function xS(t){jg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}it(xS,jg);function CS(){qg.call(this),this.status=1}it(CS,qg);function Do(t){this.g=t}it(Do,kS);Do.prototype.Ba=function(){ft(this.g,"a")};Do.prototype.Aa=function(t){ft(this.g,new xS(t))};Do.prototype.za=function(t){ft(this.g,new CS)};Do.prototype.ya=function(){ft(this.g,"b")};function YD(){this.blockSize=-1}function kn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}it(kn,YD);kn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Sf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}kn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Sf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Sf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Sf(this,r),i=0;break}}this.h=i,this.i+=e};kn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function fe(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var XD={};function Xg(t){return-128<=t&&128>t?sD(t,function(e){return new fe([e|0],0>e?-1:0)}):new fe([t|0],0>t?-1:0)}function Fn(t){if(isNaN(t)||!isFinite(t))return Qs;if(0>t)return ut(Fn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Qp;return new fe(e,0)}function bS(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ut(bS(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Fn(Math.pow(e,8)),r=Qs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Fn(Math.pow(e,s)),r=r.R(s).add(Fn(o))):(r=r.R(n),r=r.add(Fn(o)))}return r}var Qp=4294967296,Qs=Xg(0),Yp=Xg(1),uw=Xg(16777216);$=fe.prototype;$.ea=function(){if(an(this))return-ut(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Qp+r)*e,e*=Qp}return t};$.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(tr(this))return"0";if(an(this))return"-"+ut(this).toString(t);for(var e=Fn(Math.pow(t,6)),n=this,r="";;){var i=td(n,e).g;n=ed(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,tr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};$.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function tr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function an(t){return t.h==-1}$.X=function(t){return t=ed(this,t),an(t)?-1:tr(t)?0:1};function ut(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new fe(n,~t.h).add(Yp)}$.abs=function(){return an(this)?ut(this):this};$.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new fe(n,n[n.length-1]&-2147483648?-1:0)};function ed(t,e){return t.add(ut(e))}$.R=function(t){if(tr(this)||tr(t))return Qs;if(an(this))return an(t)?ut(this).R(ut(t)):ut(ut(this).R(t));if(an(t))return ut(this.R(ut(t)));if(0>this.X(uw)&&0>t.X(uw))return Fn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,zu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,zu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,zu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,zu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new fe(n,0)};function zu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function sa(t,e){this.g=t,this.h=e}function td(t,e){if(tr(e))throw Error("division by zero");if(tr(t))return new sa(Qs,Qs);if(an(t))return e=td(ut(t),e),new sa(ut(e.g),ut(e.h));if(an(e))return e=td(t,ut(e)),new sa(ut(e.g),e.h);if(30<t.g.length){if(an(t)||an(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Yp,r=e;0>=r.X(t);)n=cw(n),r=cw(r);var i=Es(n,1),s=Es(r,1);for(r=Es(r,2),n=Es(n,2);!tr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Es(r,1),n=Es(n,1)}return e=ed(t,i.R(e)),new sa(i,e)}for(i=Qs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Fn(n),o=s.R(e);an(o)||0<o.X(t);)n-=r,s=Fn(n),o=s.R(e);tr(s)&&(s=Yp),i=i.add(s),t=ed(t,o)}return new sa(i,t)}$.gb=function(t){return td(this,t).h};$.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new fe(n,this.h&t.h)};$.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new fe(n,this.h|t.h)};$.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new fe(n,this.h^t.h)};function cw(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new fe(n,t.h)}function Es(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new fe(i,t.h)}Zc.prototype.createWebChannel=Zc.prototype.g;en.prototype.send=en.prototype.u;en.prototype.open=en.prototype.m;en.prototype.close=en.prototype.close;Wd.NO_ERROR=0;Wd.TIMEOUT=8;Wd.HTTP_ERROR=6;GE.COMPLETE="complete";HE.EventType=Gl;Gl.OPEN="a";Gl.CLOSE="b";Gl.ERROR="c";Gl.MESSAGE="d";rt.prototype.listen=rt.prototype.O;Oe.prototype.listenOnce=Oe.prototype.P;Oe.prototype.getLastError=Oe.prototype.Sa;Oe.prototype.getLastErrorCode=Oe.prototype.Ia;Oe.prototype.getStatus=Oe.prototype.da;Oe.prototype.getResponseJson=Oe.prototype.Wa;Oe.prototype.getResponseText=Oe.prototype.ja;Oe.prototype.send=Oe.prototype.ha;Oe.prototype.setWithCredentials=Oe.prototype.Oa;kn.prototype.digest=kn.prototype.l;kn.prototype.reset=kn.prototype.reset;kn.prototype.update=kn.prototype.j;fe.prototype.add=fe.prototype.add;fe.prototype.multiply=fe.prototype.R;fe.prototype.modulo=fe.prototype.gb;fe.prototype.compare=fe.prototype.X;fe.prototype.toNumber=fe.prototype.ea;fe.prototype.toString=fe.prototype.toString;fe.prototype.getBits=fe.prototype.D;fe.fromNumber=Fn;fe.fromString=bS;var JD=function(){return new Zc},ZD=function(){return qd()},Tf=Wd,eR=GE,tR=fs,dw={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},nR=Ql,Bu=HE,rR=Oe,iR=kn,Ys=fe;const hw="@firebase/firestore";/**
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
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
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
 */let Ro="9.23.0";/**
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
 */const Jr=new $d("@firebase/firestore");function Xp(){return Jr.logLevel}function sR(t){Jr.setLogLevel(t)}function C(t,...e){if(Jr.logLevel<=ie.DEBUG){const n=e.map(Jg);Jr.debug(`Firestore (${Ro}): ${t}`,...n)}}function Ve(t,...e){if(Jr.logLevel<=ie.ERROR){const n=e.map(Jg);Jr.error(`Firestore (${Ro}): ${t}`,...n)}}function xn(t,...e){if(Jr.logLevel<=ie.WARN){const n=e.map(Jg);Jr.warn(`Firestore (${Ro}): ${t}`,...n)}}function Jg(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function F(t="Unexpected state"){const e=`FIRESTORE (${Ro}) INTERNAL ASSERTION FAILED: `+t;throw Ve(e),new Error(e)}function q(t,e){t||F()}function oR(t,e){t||F()}function M(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Dt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class nt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class AS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class lR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class uR{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new nt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new nt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new nt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(q(typeof r.accessToken=="string"),new AS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return q(e===null||typeof e=="string"),new et(e)}}class cR{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class dR{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new cR(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fR{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,C("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(q(typeof n.token=="string"),this.T=n.token,new hR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function pR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class NS{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=pR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Y(t,e){return t<e?-1:t>e?1:0}function ho(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function DS(t){return t+"\0"}/**
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
 */class ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class j{constructor(e){this.timestamp=e}static fromTimestamp(e){return new j(e)}static min(){return new j(new ke(0,0))}static max(){return new j(new ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class _l{constructor(e,n,r){n===void 0?n=0:n>e.length&&F(),r===void 0?r=e.length-n:r>e.length-n&&F(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return _l.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _l?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class se extends _l{construct(e,n,r){return new se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new se(n)}static emptyPath(){return new se([])}}const mR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends _l{construct(e,n,r){return new ze(e,n,r)}static isValidIdentifier(e){return mR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new x(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new x(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new x(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
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
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(se.fromString(e))}static fromName(e){return new L(se.fromString(e).popFirst(5))}static empty(){return new L(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new se(e.slice()))}}/**
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
 */class RS{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Jp(t){return t.fields.find(e=>e.kind===2)}function xi(t){return t.fields.filter(e=>e.kind!==2)}RS.UNKNOWN_ID=-1;class gR{constructor(e,n){this.fieldPath=e,this.kind=n}}class nd{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new nd(0,tn.min())}}function PS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=j.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new tn(i,L.empty(),e)}function OS(t){return new tn(t.readTime,t.key,-1)}class tn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new tn(j.min(),L.empty(),-1)}static max(){return new tn(j.max(),L.empty(),-1)}}function Zg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:Y(t.largestBatchId,e.largestBatchId))}/**
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
 */const LS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function pi(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==LS)throw t;C("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new _((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):_.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):_.reject(n)}static resolve(e){return new _((n,r)=>{n(e)})}static reject(e){return new _((n,r)=>{r(e)})}static waitFor(e){return new _((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=_.resolve(!1);for(const r of e)n=n.next(i=>i?_.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new _((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new _((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class Zd{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.v=new nt,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{n.error?this.v.reject(new $a(e,n.error)):this.v.resolve()},this.transaction.onerror=r=>{const i=ey(r.target.error);this.v.reject(new $a(e,i))}}static open(e,n,r,i){try{return new Zd(n,e.transaction(i,r))}catch(s){throw new $a(n,s)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(C("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new vR(n)}}class _n{constructor(e,n,r){this.name=e,this.version=n,this.V=r,_n.S(Ae())===12.2&&Ve("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return C("SimpleDb","Removing database:",e),Ci(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!ul())return!1;if(_n.C())return!0;const e=Ae(),n=_n.S(e),r=0<n&&n<10,i=_n.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(C("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new $a(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new x(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new x(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new $a(e,o))},i.onupgradeneeded=s=>{C("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.O(o,i.transaction,s.oldVersion,this.version).next(()=>{C("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=n=>this.F(n)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=Zd.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.P(),u)).catch(u=>(a.abort(u),_.reject(u))).toPromise();return l.catch(()=>{}),await a.R,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(C("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class yR{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Ci(this.L.delete())}}class $a extends x{constructor(e,n){super(I.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function mi(t){return t.name==="IndexedDbTransactionError"}class vR{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(C("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(C("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ci(r)}add(e){return C("SimpleDb","ADD",this.store.name,e,e),Ci(this.store.add(e))}get(e){return Ci(this.store.get(e)).next(n=>(n===void 0&&(n=null),C("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return C("SimpleDb","DELETE",this.store.name,e),Ci(this.store.delete(e))}count(){return C("SimpleDb","COUNT",this.store.name),Ci(this.store.count())}j(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new _((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new _((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,n){C("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}X(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Z(e){const n=this.cursor({});return new _((r,i)=>{n.onerror=s=>{const o=ey(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new _((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new yR(a),u=n(a.primaryKey,a.value,l);if(u instanceof _){const c=u.catch(d=>(l.done(),_.reject(d)));r.push(c)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>_.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Ci(t){return new _((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=ey(r.target.error);n(i)}})}let fw=!1;function ey(t){const e=_n.S(Ae());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new x("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return fw||(fw=!0,setTimeout(()=>{throw r},0)),r}}return t}class wR{constructor(e,n){this.asyncQueue=e,this.tt=n,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){C("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{C("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(n){mi(n)?C("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await pi(n)}await this.et(6e4)})}}class _R{constructor(e,n){this.localStore=e,this.persistence=n}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.st(n,e))}st(e,n){const r=new Set;let i=n,s=!0;return _.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return C("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}it(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(C("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}rt(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=OS(s);Zg(o,r)>0&&(r=o)}),new tn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class zt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}zt.ct=-1;function Jl(t){return t==null}function Il(t){return t===0&&1/t==-1/0}function $S(t){return typeof t=="number"&&Number.isInteger(t)&&!Il(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Rt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=pw(e)),e=IR(t.get(n),e);return pw(e)}function IR(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function pw(t){return t+""}function Un(t){const e=t.length;if(q(e>=2),e===2)return q(t.charAt(0)===""&&t.charAt(1)===""),se.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&F(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:F()}s=o+2}return new se(r)}/**
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
 */const mw=["userId","batchId"];/**
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
 */function cc(t,e){return[t,Rt(e)]}function FS(t,e,n){return[t,Rt(e),n]}const ER={},SR=["prefixPath","collectionGroup","readTime","documentId"],TR=["prefixPath","collectionGroup","documentId"],kR=["collectionGroup","readTime","prefixPath","documentId"],xR=["canonicalId","targetId"],CR=["targetId","path"],bR=["path","targetId"],AR=["collectionId","parent"],NR=["indexId","uid"],DR=["uid","sequenceNumber"],RR=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],PR=["indexId","uid","orderedDocumentKey"],OR=["userId","collectionPath","documentId"],LR=["userId","collectionPath","largestBatchId"],MR=["userId","collectionGroup","largestBatchId"],US=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],$R=[...US,"documentOverlays"],VS=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],zS=VS,FR=[...zS,"indexConfiguration","indexState","indexEntries"];/**
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
 */class Zp extends MS{constructor(e,n){super(),this.ht=e,this.currentSequenceNumber=n}}function st(t,e){const n=M(t);return _n.M(n.ht,e)}/**
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
 */function gw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ps(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function BS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class me{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ju(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ju(this.root,e,this.comparator,!1)}getReverseIterator(){return new ju(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ju(this.root,e,this.comparator,!0)}}class ju{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:lt.RED,this.left=i!=null?i:lt.EMPTY,this.right=s!=null?s:lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new lt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,n,r,i){return this}insert(t,e,n){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _e{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new yw(this.data.getIterator())}getIteratorFrom(e){return new yw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _e(this.comparator);return n.data=e,n}}class yw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ss(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class Bt{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new _e(ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ho(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class jS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function UR(){return typeof atob<"u"}/**
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
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new jS("Invalid base64 string: "+i):i}}(e);return new Ye(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const VR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zr(t){if(q(!!t),typeof t=="string"){let e=0;const n=VR.exec(t);if(q(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ei(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
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
 */function eh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ty(t){const e=t.mapValue.fields.__previous_value__;return eh(e)?ty(e):e}function El(t){const e=Zr(t.mapValue.fields.__local_write_time__.timestampValue);return new ke(e.seconds,e.nanos)}/**
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
 */class zR{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ti{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ti("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ti&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Mr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},dc={nullValue:"NULL_VALUE"};function Zi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?eh(t)?4:qS(t)?9007199254740991:10:F()}function Kn(t,e){if(t===e)return!0;const n=Zi(t);if(n!==Zi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return El(t).isEqual(El(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Zr(r.timestampValue),o=Zr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ei(r.bytesValue).isEqual(ei(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Pe(r.geoPointValue.latitude)===Pe(i.geoPointValue.latitude)&&Pe(r.geoPointValue.longitude)===Pe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Pe(r.integerValue)===Pe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Pe(r.doubleValue),o=Pe(i.doubleValue);return s===o?Il(s)===Il(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ho(t.arrayValue.values||[],e.arrayValue.values||[],Kn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(gw(s)!==gw(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Kn(s[a],o[a])))return!1;return!0}(t,e);default:return F()}}function Sl(t,e){return(t.values||[]).find(n=>Kn(n,e))!==void 0}function ni(t,e){if(t===e)return 0;const n=Zi(t),r=Zi(e);if(n!==r)return Y(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Y(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Pe(i.integerValue||i.doubleValue),a=Pe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return vw(t.timestampValue,e.timestampValue);case 4:return vw(El(t),El(e));case 5:return Y(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ei(i),a=ei(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Y(o[l],a[l]);if(u!==0)return u}return Y(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Y(Pe(i.latitude),Pe(s.latitude));return o!==0?o:Y(Pe(i.longitude),Pe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=ni(o[l],a[l]);if(u)return u}return Y(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Mr.mapValue&&s===Mr.mapValue)return 0;if(i===Mr.mapValue)return 1;if(s===Mr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const d=Y(a[c],u[c]);if(d!==0)return d;const h=ni(o[a[c]],l[u[c]]);if(h!==0)return h}return Y(a.length,u.length)}(t.mapValue,e.mapValue);default:throw F()}}function vw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Y(t,e);const n=Zr(t),r=Zr(e),i=Y(n.seconds,r.seconds);return i!==0?i:Y(n.nanos,r.nanos)}function fo(t){return em(t)}function em(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Zr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ei(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,L.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=em(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${em(r.fields[a])}`;return s+"}"}(t.mapValue):F();var e,n}function es(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function tm(t){return!!t&&"integerValue"in t}function Tl(t){return!!t&&"arrayValue"in t}function ww(t){return!!t&&"nullValue"in t}function _w(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function hc(t){return!!t&&"mapValue"in t}function Fa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ps(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Fa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function qS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function BR(t){return"nullValue"in t?dc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?es(ti.empty(),L.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:F()}function jR(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?es(ti.empty(),L.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Mr:F()}function Iw(t,e){const n=ni(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Ew(t,e){const n=ni(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!hc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fa(n)}setAll(e){let n=ze.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Fa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());hc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];hc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ps(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new dt(Fa(this.value))}}function WS(t){const e=[];return ps(t.fields,(n,r)=>{const i=new ze([n]);if(hc(r)){const s=WS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Bt(e)}/**
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
 */class ve{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ve(e,0,j.min(),j.min(),j.min(),dt.empty(),0)}static newFoundDocument(e,n,r,i){return new ve(e,1,n,j.min(),r,i,0)}static newNoDocument(e,n){return new ve(e,2,n,j.min(),j.min(),dt.empty(),0)}static newUnknownDocument(e,n){return new ve(e,3,n,j.min(),j.min(),dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ri{constructor(e,n){this.position=e,this.inclusive=n}}function Sw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=ni(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Tw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Xs{constructor(e,n="asc"){this.field=e,this.dir=n}}function qR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class GS{}class ne extends GS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new WR(e,n,r):n==="array-contains"?new KR(e,r):n==="in"?new JS(e,r):n==="not-in"?new QR(e,r):n==="array-contains-any"?new YR(e,r):new ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new GR(e,r):new HR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ni(n,this.value)):n!==null&&Zi(this.value)===Zi(n)&&this.matchesComparison(ni(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class de extends GS{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new de(e,n)}matches(e){return po(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function po(t){return t.op==="and"}function nm(t){return t.op==="or"}function ny(t){return HS(t)&&po(t)}function HS(t){for(const e of t.filters)if(e instanceof de)return!1;return!0}function rm(t){if(t instanceof ne)return t.field.canonicalString()+t.op.toString()+fo(t.value);if(ny(t))return t.filters.map(e=>rm(e)).join(",");{const e=t.filters.map(n=>rm(n)).join(",");return`${t.op}(${e})`}}function KS(t,e){return t instanceof ne?function(n,r){return r instanceof ne&&n.op===r.op&&n.field.isEqual(r.field)&&Kn(n.value,r.value)}(t,e):t instanceof de?function(n,r){return r instanceof de&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&KS(s,r.filters[o]),!0):!1}(t,e):void F()}function QS(t,e){const n=t.filters.concat(e);return de.create(n,t.op)}function YS(t){return t instanceof ne?function(e){return`${e.field.canonicalString()} ${e.op} ${fo(e.value)}`}(t):t instanceof de?function(e){return e.op.toString()+" {"+e.getFilters().map(YS).join(" ,")+"}"}(t):"Filter"}class WR extends ne{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.matchesComparison(n)}}class GR extends ne{constructor(e,n){super(e,"in",n),this.keys=XS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class HR extends ne{constructor(e,n){super(e,"not-in",n),this.keys=XS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function XS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class KR extends ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Tl(n)&&Sl(n.arrayValue,this.value)}}class JS extends ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Sl(this.value.arrayValue,n)}}class QR extends ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(Sl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Sl(this.value.arrayValue,n)}}class YR extends ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Tl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Sl(this.value.arrayValue,r))}}/**
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
 */class XR{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function im(t,e=null,n=[],r=[],i=null,s=null,o=null){return new XR(t,e,n,r,i,s,o)}function ts(t){const e=M(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>rm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Jl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>fo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>fo(r)).join(",")),e.dt=n}return e.dt}function Zl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!KS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tw(t.startAt,e.startAt)&&Tw(t.endAt,e.endAt)}function rd(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function id(t,e){return t.filters.filter(n=>n instanceof ne&&n.field.isEqual(e))}function kw(t,e,n){let r=dc,i=!0;for(const s of id(t,e)){let o=dc,a=!0;switch(s.op){case"<":case"<=":o=BR(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=dc}Iw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Iw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function xw(t,e,n){let r=Mr,i=!0;for(const s of id(t,e)){let o=Mr,a=!0;switch(s.op){case">=":case">":o=jR(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Mr}Ew({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Ew({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class gr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function ZS(t,e,n,r,i,s,o,a){return new gr(t,e,n,r,i,s,o,a)}function Po(t){return new gr(t)}function Cw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ry(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function th(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function iy(t){return t.collectionGroup!==null}function ji(t){const e=M(t);if(e.wt===null){e.wt=[];const n=th(e),r=ry(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Xs(n)),e.wt.push(new Xs(ze.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Xs(ze.keyField(),s))}}}return e.wt}function Ht(t){const e=M(t);if(!e._t)if(e.limitType==="F")e._t=im(e.path,e.collectionGroup,ji(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ji(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Xs(s.field,o))}const r=e.endAt?new ri(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ri(e.startAt.position,e.startAt.inclusive):null;e._t=im(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function sm(t,e){e.getFirstInequalityField(),th(t);const n=t.filters.concat([e]);return new gr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function sd(t,e,n){return new gr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function eu(t,e){return Zl(Ht(t),Ht(e))&&t.limitType===e.limitType}function eT(t){return`${ts(Ht(t))}|lt:${t.limitType}`}function om(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>YS(r)).join(", ")}]`),Jl(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>fo(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>fo(r)).join(",")),`Target(${n})`}(Ht(t))}; limitType=${t.limitType})`}function tu(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):L.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of ji(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Sw(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,ji(n),r)||n.endAt&&!function(i,s,o){const a=Sw(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,ji(n),r))}(t,e)}function tT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function nT(t){return(e,n)=>{let r=!1;for(const i of ji(t)){const s=JR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function JR(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ni(a,l):F()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
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
 */class gi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ps(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return BS(this.inner)}size(){return this.innerSize}}/**
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
 */const ZR=new me(L.comparator);function jt(){return ZR}const rT=new me(L.comparator);function Sa(...t){let e=rT;for(const n of t)e=e.insert(n.key,n);return e}function iT(t){let e=rT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Vn(){return Ua()}function sT(){return Ua()}function Ua(){return new gi(t=>t.toString(),(t,e)=>t.isEqual(e))}const eP=new me(L.comparator),tP=new _e(L.comparator);function J(...t){let e=tP;for(const n of t)e=e.add(n);return e}const nP=new _e(Y);function sy(){return nP}/**
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
 */function oT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Il(e)?"-0":e}}function aT(t){return{integerValue:""+t}}function lT(t,e){return $S(e)?aT(e):oT(t,e)}/**
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
 */class nh{constructor(){this._=void 0}}function rP(t,e,n){return t instanceof mo?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&eh(i)&&(i=ty(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof ns?cT(t,e):t instanceof rs?dT(t,e):function(r,i){const s=uT(r,i),o=bw(s)+bw(r.gt);return tm(s)&&tm(r.gt)?aT(o):oT(r.serializer,o)}(t,e)}function iP(t,e,n){return t instanceof ns?cT(t,e):t instanceof rs?dT(t,e):n}function uT(t,e){return t instanceof go?tm(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class mo extends nh{}class ns extends nh{constructor(e){super(),this.elements=e}}function cT(t,e){const n=hT(e);for(const r of t.elements)n.some(i=>Kn(i,r))||n.push(r);return{arrayValue:{values:n}}}class rs extends nh{constructor(e){super(),this.elements=e}}function dT(t,e){let n=hT(e);for(const r of t.elements)n=n.filter(i=>!Kn(i,r));return{arrayValue:{values:n}}}class go extends nh{constructor(e,n){super(),this.serializer=e,this.gt=n}}function bw(t){return Pe(t.integerValue||t.doubleValue)}function hT(t){return Tl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class nu{constructor(e,n){this.field=e,this.transform=n}}function sP(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ns&&r instanceof ns||n instanceof rs&&r instanceof rs?ho(n.elements,r.elements,Kn):n instanceof go&&r instanceof go?Kn(n.gt,r.gt):n instanceof mo&&r instanceof mo}(t.transform,e.transform)}class oP{constructor(e,n){this.version=e,this.transformResults=n}}class Te{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Te}static exists(e){return new Te(void 0,e)}static updateTime(e){return new Te(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class rh{}function fT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Lo(t.key,Te.none()):new Oo(t.key,t.data,Te.none());{const n=t.data,r=dt.empty();let i=new _e(ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new yr(t.key,r,new Bt(i.toArray()),Te.none())}}function aP(t,e,n){t instanceof Oo?function(r,i,s){const o=r.value.clone(),a=Nw(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof yr?function(r,i,s){if(!fc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Nw(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(pT(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Va(t,e,n,r){return t instanceof Oo?function(i,s,o,a){if(!fc(i.precondition,s))return o;const l=i.value.clone(),u=Dw(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof yr?function(i,s,o,a){if(!fc(i.precondition,s))return o;const l=Dw(i.fieldTransforms,a,s),u=s.data;return u.setAll(pT(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return fc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function lP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=uT(r.transform,i||null);s!=null&&(n===null&&(n=dt.empty()),n.set(r.field,s))}return n||null}function Aw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ho(n,r,(i,s)=>sP(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oo extends rh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class yr extends rh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function pT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Nw(t,e,n){const r=new Map;q(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,iP(o,a,n[i]))}return r}function Dw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,rP(s,o,e))}return r}class Lo extends rh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class oy extends rh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ay{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&aP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Va(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Va(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=sT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=fT(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),J())}isEqual(e){return this.batchId===e.batchId&&ho(this.mutations,e.mutations,(n,r)=>Aw(n,r))&&ho(this.baseMutations,e.baseMutations,(n,r)=>Aw(n,r))}}class ly{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){q(e.mutations.length===r.length);let i=eP;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ly(e,n,r,i)}}/**
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
 */class uy{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class uP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var qe,re;function mT(t){switch(t){default:return F();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function gT(t){if(t===void 0)return Ve("GRPC error has no .code"),I.UNKNOWN;switch(t){case qe.OK:return I.OK;case qe.CANCELLED:return I.CANCELLED;case qe.UNKNOWN:return I.UNKNOWN;case qe.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case qe.INTERNAL:return I.INTERNAL;case qe.UNAVAILABLE:return I.UNAVAILABLE;case qe.UNAUTHENTICATED:return I.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case qe.NOT_FOUND:return I.NOT_FOUND;case qe.ALREADY_EXISTS:return I.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return I.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case qe.ABORTED:return I.ABORTED;case qe.OUT_OF_RANGE:return I.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return I.UNIMPLEMENTED;case qe.DATA_LOSS:return I.DATA_LOSS;default:return F()}}(re=qe||(qe={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class cy{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return qu}static getOrCreateInstance(){return qu===null&&(qu=new cy),qu}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let qu=null;/**
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
 */function yT(){return new TextEncoder}/**
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
 */const cP=new Ys([4294967295,4294967295],0);function Rw(t){const e=yT().encode(t),n=new iR;return n.update(e),new Uint8Array(n.digest())}function Pw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ys([n,r],0),new Ys([i,s],0)]}class dy{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ta(`Invalid padding: ${n}`);if(r<0)throw new Ta(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ta(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ta(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Ys.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(Ys.fromNumber(r)));return i.compare(cP)===1&&(i=new Ys([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Rw(e),[r,i]=Pw(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new dy(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Rw(e),[r,i]=Pw(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ta extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ru{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,iu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ru(j.min(),i,new me(Y),jt(),J())}}class iu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new iu(r,n,J(),J(),J())}}/**
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
 */class pc{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class vT{constructor(e,n){this.targetId=e,this.Vt=n}}class wT{constructor(e,n,r=Ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ow{constructor(){this.St=0,this.Dt=Mw(),this.Ct=Ye.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=J(),n=J(),r=J();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:F()}}),new iu(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=Mw()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class dP{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=jt(),this.zt=Lw(),this.Wt=new me(Y)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:F()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(rd(o))if(i===0){const a=new L(o.path);this.Yt(r,a,ve.newNoDocument(a,j.min()))}else q(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=cy.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,d){var h,g,v,w,k,p;const f={localCacheCount:c,existenceFilterCount:d.count},y=d.unchangedNames;return y&&(f.bloomFilter={applied:u===0,hashCount:(h=y==null?void 0:y.hashCount)!==null&&h!==void 0?h:0,bitmapLength:(w=(v=(g=y==null?void 0:y.bits)===null||g===void 0?void 0:g.bitmap)===null||v===void 0?void 0:v.length)!==null&&w!==void 0?w:0,padding:(p=(k=y==null?void 0:y.bits)===null||k===void 0?void 0:k.padding)!==null&&p!==void 0?p:0}),f}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=ei(s).toUint8Array()}catch(c){if(c instanceof jS)return xn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new dy(l,o,a)}catch(c){return xn(c instanceof Ta?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&rd(a.target)){const l=new L(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,ve.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=J();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new ru(e,n,this.Wt,this.jt,r);return this.jt=jt(),this.zt=Lw(),this.Wt=new me(Y),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new Ow,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new _e(Y),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||C("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Ow),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function Lw(){return new me(L.comparator)}function Mw(){return new me(L.comparator)}const hP=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),fP=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),pP=(()=>({and:"AND",or:"OR"}))();class mP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function am(t,e){return t.useProto3Json||Jl(e)?e:{value:e}}function yo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _T(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function gP(t,e){return yo(t,e.toTimestamp())}function Be(t){return q(!!t),j.fromTimestamp(function(e){const n=Zr(e);return new ke(n.seconds,n.nanos)}(t))}function hy(t,e){return function(n){return new se(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function IT(t){const e=se.fromString(t);return q(NT(e)),e}function kl(t,e){return hy(t.databaseId,e.path)}function Wn(t,e){const n=IT(e);if(n.get(1)!==t.databaseId.projectId)throw new x(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(ST(n))}function lm(t,e){return hy(t.databaseId,e)}function ET(t){const e=IT(t);return e.length===4?se.emptyPath():ST(e)}function xl(t){return new se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ST(t){return q(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function $w(t,e,n){return{name:kl(t,e),fields:n.value.mapValue.fields}}function TT(t,e,n){const r=Wn(t,e.name),i=Be(e.updateTime),s=e.createTime?Be(e.createTime):j.min(),o=new dt({mapValue:{fields:e.fields}}),a=ve.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function yP(t,e){return"found"in e?function(n,r){q(!!r.found),r.found.name,r.found.updateTime;const i=Wn(n,r.found.name),s=Be(r.found.updateTime),o=r.found.createTime?Be(r.found.createTime):j.min(),a=new dt({mapValue:{fields:r.found.fields}});return ve.newFoundDocument(i,s,o,a)}(t,e):"missing"in e?function(n,r){q(!!r.missing),q(!!r.readTime);const i=Wn(n,r.missing),s=Be(r.readTime);return ve.newNoDocument(i,s)}(t,e):F()}function vP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(q(u===void 0||typeof u=="string"),Ye.fromBase64String(u||"")):(q(u===void 0||u instanceof Uint8Array),Ye.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?I.UNKNOWN:gT(l.code);return new x(u,l.message||"")}(o);n=new wT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Wn(t,r.document.name),s=Be(r.document.updateTime),o=r.document.createTime?Be(r.document.createTime):j.min(),a=new dt({mapValue:{fields:r.document.fields}}),l=ve.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new pc(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Wn(t,r.document),s=r.readTime?Be(r.readTime):j.min(),o=ve.newNoDocument(i,s),a=r.removedTargetIds||[];n=new pc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Wn(t,r.document),s=r.removedTargetIds||[];n=new pc([],s,i,null)}else{if(!("filter"in e))return F();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new uP(i,s),a=r.targetId;n=new vT(a,o)}}return n}function Cl(t,e){let n;if(e instanceof Oo)n={update:$w(t,e.key,e.value)};else if(e instanceof Lo)n={delete:kl(t,e.key)};else if(e instanceof yr)n={update:$w(t,e.key,e.data),updateMask:TP(e.fieldMask)};else{if(!(e instanceof oy))return F();n={verify:kl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof mo)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ns)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof rs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof go)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw F()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:gP(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F()}(t,e.precondition)),n}function um(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?Te.updateTime(Be(i.updateTime)):i.exists!==void 0?Te.exists(i.exists):Te.none()}(e.currentDocument):Te.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)q(o.setToServerValue==="REQUEST_TIME"),a=new mo;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new ns(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new rs(u)}else"increment"in o?a=new go(s,o.increment):F();const l=ze.fromServerFormat(o.fieldPath);return new nu(l,a)}(t,i)):[];if(e.update){e.update.name;const i=Wn(t,e.update.name),s=new dt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const l=a.fieldPaths||[];return new Bt(l.map(u=>ze.fromServerFormat(u)))}(e.updateMask);return new yr(i,s,o,n,r)}return new Oo(i,s,n,r)}if(e.delete){const i=Wn(t,e.delete);return new Lo(i,n)}if(e.verify){const i=Wn(t,e.verify);return new oy(i,n)}return F()}function wP(t,e){return t&&t.length>0?(q(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Be(r.updateTime):Be(i);return s.isEqual(j.min())&&(s=Be(i)),new oP(s,r.transformResults||[])}(n,e))):[]}function kT(t,e){return{documents:[lm(t,e.path)]}}function xT(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=lm(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=lm(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return AT(de.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:xs(c.field),direction:IP(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=am(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function CT(t){let e=ET(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){q(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const d=bT(c);return d instanceof de&&ny(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(d){return new Xs(Cs(d.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(c)));let a=null;n.limit&&(a=function(c){let d;return d=typeof c=="object"?c.value:c,Jl(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(c){const d=!!c.before,h=c.values||[];return new ri(h,d)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const d=!c.before,h=c.values||[];return new ri(h,d)}(n.endAt)),ZS(e,i,o,s,a,"F",l,u)}function _P(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function bT(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Cs(e.unaryFilter.field);return ne.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Cs(e.unaryFilter.field);return ne.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Cs(e.unaryFilter.field);return ne.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Cs(e.unaryFilter.field);return ne.create(s,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(t):t.fieldFilter!==void 0?function(e){return ne.create(Cs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return de.create(e.compositeFilter.filters.map(n=>bT(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return F()}}(e.compositeFilter.op))}(t):F()}function IP(t){return hP[t]}function EP(t){return fP[t]}function SP(t){return pP[t]}function xs(t){return{fieldPath:t.canonicalString()}}function Cs(t){return ze.fromServerFormat(t.fieldPath)}function AT(t){return t instanceof ne?function(e){if(e.op==="=="){if(_w(e.value))return{unaryFilter:{field:xs(e.field),op:"IS_NAN"}};if(ww(e.value))return{unaryFilter:{field:xs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(_w(e.value))return{unaryFilter:{field:xs(e.field),op:"IS_NOT_NAN"}};if(ww(e.value))return{unaryFilter:{field:xs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xs(e.field),op:EP(e.op),value:e.value}}}(t):t instanceof de?function(e){const n=e.getFilters().map(r=>AT(r));return n.length===1?n[0]:{compositeFilter:{op:SP(e.op),filters:n}}}(t):F()}function TP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function NT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class nr{constructor(e,n,r,i,s=j.min(),o=j.min(),a=Ye.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class DT{constructor(e){this.fe=e}}function kP(t,e){let n;if(e.document)n=TT(t.fe,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=L.fromSegments(e.noDocument.path),i=ss(e.noDocument.readTime);n=ve.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return F();{const r=L.fromSegments(e.unknownDocument.path),i=ss(e.unknownDocument.version);n=ve.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new ke(r[0],r[1]);return j.fromTimestamp(i)}(e.readTime)),n}function Fw(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:od(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:kl(i,s.key),fields:s.data.value.mapValue.fields,updateTime:yo(i,s.version.toTimestamp()),createTime:yo(i,s.createTime.toTimestamp())}}(t.fe,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:is(e.version)};else{if(!e.isUnknownDocument())return F();r.unknownDocument={path:n.path.toArray(),version:is(e.version)}}return r}function od(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function is(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ss(t){const e=new ke(t.seconds,t.nanoseconds);return j.fromTimestamp(e)}function bi(t,e){const n=(e.baseMutations||[]).map(s=>um(t.fe,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>um(t.fe,s)),i=ke.fromMillis(e.localWriteTimeMs);return new ay(e.batchId,i,n,r)}function ka(t){const e=ss(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?ss(t.lastLimboFreeSnapshotVersion):j.min();let r;var i;return t.query.documents!==void 0?(q((i=t.query).documents.length===1),r=Ht(Po(ET(i.documents[0])))):r=function(s){return Ht(CT(s))}(t.query),new nr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Ye.fromBase64String(t.resumeToken))}function RT(t,e){const n=is(e.snapshotVersion),r=is(e.lastLimboFreeSnapshotVersion);let i;i=rd(e.target)?kT(t.fe,e.target):xT(t.fe,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ts(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function fy(t){const e=CT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?sd(e,e.limit,"L"):e}function kf(t,e){return new uy(e.largestBatchId,um(t.fe,e.overlayMutation))}function Uw(t,e){const n=e.path.lastSegment();return[t,Rt(e.path.popLast()),n]}function Vw(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:is(r.readTime),documentKey:Rt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class xP{getBundleMetadata(e,n){return zw(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:ss(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return zw(e).put({bundleId:(r=n).id,createTime:is(Be(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return Bw(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:fy(i.bundledQuery),readTime:ss(i.readTime)};var i})}saveNamedQuery(e,n){return Bw(e).put(function(r){return{name:r.name,readTime:is(Be(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function zw(t){return st(t,"bundles")}function Bw(t){return st(t,"namedQueries")}/**
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
 */class ih{constructor(e,n){this.serializer=e,this.userId=n}static de(e,n){const r=n.uid||"";return new ih(e,r)}getOverlay(e,n){return oa(e).get(Uw(this.userId,n)).next(r=>r?kf(this.serializer,r):null)}getOverlays(e,n){const r=Vn();return _.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new uy(n,o);i.push(this.we(e,a))}),_.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Rt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(oa(e).J("collectionPathOverlayIndex",a))}),_.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Vn(),s=Rt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return oa(e).j("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=kf(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Vn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return oa(e).X({index:"collectionGroupOverlayIndex",range:a},(l,u,c)=>{const d=kf(this.serializer,u);s.size()<i||d.largestBatchId===o?(s.set(d.getKey(),d),o=d.largestBatchId):c.done()}).next(()=>s)}we(e,n){return oa(e).put(function(r,i,s){const[o,a,l]=Uw(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:l,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:Cl(r.fe,s.mutation)}}(this.serializer,this.userId,n))}}function oa(t){return st(t,"documentOverlays")}/**
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
 */class Ai{constructor(){}_e(e,n){this.me(e,n),n.ge()}me(e,n){if("nullValue"in e)this.ye(n,5);else if("booleanValue"in e)this.ye(n,10),n.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(n,15),n.pe(Pe(e.integerValue));else if("doubleValue"in e){const r=Pe(e.doubleValue);isNaN(r)?this.ye(n,13):(this.ye(n,15),Il(r)?n.pe(0):n.pe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ye(n,20),typeof r=="string"?n.Ie(r):(n.Ie(`${r.seconds||""}`),n.pe(r.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,n),this.Ee(n);else if("bytesValue"in e)this.ye(n,30),n.Ae(ei(e.bytesValue)),this.Ee(n);else if("referenceValue"in e)this.ve(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.ye(n,45),n.pe(r.latitude||0),n.pe(r.longitude||0)}else"mapValue"in e?qS(e)?this.ye(n,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,n),this.Ee(n)):"arrayValue"in e?(this.Pe(e.arrayValue,n),this.Ee(n)):F()}Te(e,n){this.ye(n,25),this.be(e,n)}be(e,n){n.Ie(e)}Re(e,n){const r=e.fields||{};this.ye(n,55);for(const i of Object.keys(r))this.Te(i,n),this.me(r[i],n)}Pe(e,n){const r=e.values||[];this.ye(n,50);for(const i of r)this.me(i,n)}ve(e,n){this.ye(n,37),L.fromName(e).path.forEach(r=>{this.ye(n,60),this.be(r,n)})}ye(e,n){e.pe(n)}Ee(e){e.pe(2)}}Ai.Ve=new Ai;function CP(t){if(t===0)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function jw(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=CP(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class bP{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.De(r.value),r=n.next();this.Ce()}xe(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ne(r.value),r=n.next();this.ke()}Me(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.De(r);else if(r<2048)this.De(960|r>>>6),this.De(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.De(480|r>>>12),this.De(128|63&r>>>6),this.De(128|63&r);else{const i=n.codePointAt(0);this.De(240|i>>>18),this.De(128|63&i>>>12),this.De(128|63&i>>>6),this.De(128|63&i)}}this.Ce()}$e(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ne(r);else if(r<2048)this.Ne(960|r>>>6),this.Ne(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ne(480|r>>>12),this.Ne(128|63&r>>>6),this.Ne(128|63&r);else{const i=n.codePointAt(0);this.Ne(240|i>>>18),this.Ne(128|63&i>>>12),this.Ne(128|63&i>>>6),this.Ne(128|63&i)}}this.ke()}Oe(e){const n=this.Fe(e),r=jw(n);this.Be(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Le(e){const n=this.Fe(e),r=jw(n);this.Be(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}De(e){const n=255&e;n===0?(this.Ue(0),this.Ue(255)):n===255?(this.Ue(255),this.Ue(0)):this.Ue(n)}Ne(e){const n=255&e;n===0?(this.Ge(0),this.Ge(255)):n===255?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class AP{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class NP{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class aa{constructor(){this.je=new bP,this.ze=new AP(this.je),this.We=new NP(this.je)}seed(e){this.je.seed(e)}He(e){return e===0?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}/**
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
 */class Ni{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Je(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Ni(this.indexId,this.documentKey,this.arrayValue,r)}}function Tr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=qw(t.arrayValue,e.arrayValue),n!==0?n:(n=qw(t.directionalValue,e.directionalValue),n!==0?n:L.comparator(t.documentKey,e.documentKey)))}function qw(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class DP{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const n of e.filters){const r=n;r.isInequality()?this.Ze=r:this.Xe.push(r)}}tn(e){q(e.collectionGroup===this.collectionId);const n=Jp(e);if(n!==void 0&&!this.en(n))return!1;const r=xi(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.en(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Ze!==void 0){if(!i.has(this.Ze.field.canonicalString())){const a=r[s];if(!this.nn(this.Ze,a)||!this.sn(this.Ye[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Ye.length||!this.sn(this.Ye[o++],a))return!1}return!0}en(e){for(const n of this.Xe)if(this.nn(n,e))return!0;return!1}nn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function PT(t){var e,n;if(q(t instanceof ne||t instanceof de),t instanceof ne){if(t instanceof JS){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>ne.create(t.field,"==",s)))||[];return de.create(i,"or")}return t}const r=t.filters.map(i=>PT(i));return de.create(r,t.op)}function RP(t){if(t.getFilters().length===0)return[];const e=hm(PT(t));return q(OT(e)),cm(e)||dm(e)?[e]:e.getFilters()}function cm(t){return t instanceof ne}function dm(t){return t instanceof de&&ny(t)}function OT(t){return cm(t)||dm(t)||function(e){if(e instanceof de&&nm(e)){for(const n of e.getFilters())if(!cm(n)&&!dm(n))return!1;return!0}return!1}(t)}function hm(t){if(q(t instanceof ne||t instanceof de),t instanceof ne)return t;if(t.filters.length===1)return hm(t.filters[0]);const e=t.filters.map(r=>hm(r));let n=de.create(e,t.op);return n=ad(n),OT(n)?n:(q(n instanceof de),q(po(n)),q(n.filters.length>1),n.filters.reduce((r,i)=>py(r,i)))}function py(t,e){let n;return q(t instanceof ne||t instanceof de),q(e instanceof ne||e instanceof de),n=t instanceof ne?e instanceof ne?function(r,i){return de.create([r,i],"and")}(t,e):Ww(t,e):e instanceof ne?Ww(e,t):function(r,i){if(q(r.filters.length>0&&i.filters.length>0),po(r)&&po(i))return QS(r,i.getFilters());const s=nm(r)?r:i,o=nm(r)?i:r,a=s.filters.map(l=>py(l,o));return de.create(a,"or")}(t,e),ad(n)}function Ww(t,e){if(po(e))return QS(e,t.getFilters());{const n=e.filters.map(r=>py(t,r));return de.create(n,"or")}}function ad(t){if(q(t instanceof ne||t instanceof de),t instanceof ne)return t;const e=t.getFilters();if(e.length===1)return ad(e[0]);if(HS(t))return t;const n=e.map(i=>ad(i)),r=[];return n.forEach(i=>{i instanceof ne?r.push(i):i instanceof de&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:de.create(r,t.op)}/**
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
 */class PP{constructor(){this.rn=new my}addToCollectionParentIndex(e,n){return this.rn.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getIndexType(e,n){return _.resolve(0)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,n){return _.resolve(tn.min())}getMinOffsetFromCollectionGroup(e,n){return _.resolve(tn.min())}updateCollectionGroup(e,n,r){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class my{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new _e(se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new _e(se.comparator)).toArray()}}/**
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
 */const Wu=new Uint8Array(0);class OP{constructor(e,n){this.user=e,this.databaseId=n,this.on=new my,this.un=new gi(r=>ts(r),(r,i)=>Zl(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.on.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.on.add(n)});const s={collectionId:r,parent:Rt(i)};return Gw(e).put(s)}return _.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[DS(n),""],!1,!0);return Gw(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Un(o.parent))}return r})}addFieldIndex(e,n){const r=Gu(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=ua(e);return s.next(a=>{o.put(Vw(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Gu(e),i=ua(e),s=la(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=la(e);let i=!0;const s=new Map;return _.forEach(this.cn(n),o=>this.an(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=J();const a=[];return _.forEach(s,(l,u)=>{var c;C("IndexedDbIndexManager",`Using index ${c=l,`id=${c.indexId}|cg=${c.collectionGroup}|f=${c.fields.map(y=>`${y.fieldPath}:${y.kind}`).join(",")}`} to execute ${ts(n)}`);const d=function(y,E){const T=Jp(E);if(T===void 0)return null;for(const b of id(y,T.fieldPath))switch(b.op){case"array-contains-any":return b.value.arrayValue.values||[];case"array-contains":return[b.value]}return null}(u,l),h=function(y,E){const T=new Map;for(const b of xi(E))for(const P of id(y,b.fieldPath))switch(P.op){case"==":case"in":T.set(b.fieldPath.canonicalString(),P.value);break;case"not-in":case"!=":return T.set(b.fieldPath.canonicalString(),P.value),Array.from(T.values())}return null}(u,l),g=function(y,E){const T=[];let b=!0;for(const P of xi(E)){const U=P.kind===0?kw(y,P.fieldPath,y.startAt):xw(y,P.fieldPath,y.startAt);T.push(U.value),b&&(b=U.inclusive)}return new ri(T,b)}(u,l),v=function(y,E){const T=[];let b=!0;for(const P of xi(E)){const U=P.kind===0?xw(y,P.fieldPath,y.endAt):kw(y,P.fieldPath,y.endAt);T.push(U.value),b&&(b=U.inclusive)}return new ri(T,b)}(u,l),w=this.hn(l,u,g),k=this.hn(l,u,v),p=this.ln(l,u,h),f=this.fn(l.indexId,d,w,g.inclusive,k,v.inclusive,p);return _.forEach(f,y=>r.H(y,n.limit).next(E=>{E.forEach(T=>{const b=L.fromSegments(T.documentKey);o.has(b)||(o=o.add(b),a.push(b))})}))}).next(()=>a)}return _.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=RP(de.create(e.filters,"and")).map(r=>im(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}fn(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),u=l/(n!=null?n.length:1),c=[];for(let d=0;d<l;++d){const h=n?this.dn(n[d/u]):Wu,g=this.wn(e,h,r[d%u],i),v=this._n(e,h,s[d%u],o),w=a.map(k=>this.wn(e,h,k,!0));c.push(...this.createRange(g,v,w))}return c}wn(e,n,r,i){const s=new Ni(e,L.empty(),n,r);return i?s:s.Je()}_n(e,n,r,i){const s=new Ni(e,L.empty(),n,r);return i?s.Je():s}an(e,n){const r=new DP(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return _.forEach(i,s=>this.an(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let l=new _e(ze.comparator),u=!1;for(const c of a.filters)for(const d of c.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?u=!0:l=l.add(d.field));for(const c of a.orderBy)c.field.isKeyField()||(l=l.add(c.field));return l.size+(u?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(n)&&i.length>1&&r===2?1:r)}mn(e,n){const r=new aa;for(const i of xi(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.He(i.kind);Ai.Ve._e(s,o)}return r.Qe()}dn(e){const n=new aa;return Ai.Ve._e(e,n.He(0)),n.Qe()}gn(e,n){const r=new aa;return Ai.Ve._e(es(this.databaseId,n),r.He(function(i){const s=xi(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Qe()}ln(e,n,r){if(r===null)return[];let i=[];i.push(new aa);let s=0;for(const o of xi(e)){const a=r[s++];for(const l of i)if(this.yn(n,o.fieldPath)&&Tl(a))i=this.pn(i,o,a);else{const u=l.He(o.kind);Ai.Ve._e(a,u)}}return this.In(i)}hn(e,n,r){return this.ln(e,n,r.position)}In(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Qe();return n}pn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new aa;l.seed(a.Qe()),Ai.Ve._e(o,l.He(n.kind)),s.push(l)}return s}yn(e,n){return!!e.filters.find(r=>r instanceof ne&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Gu(e),i=ua(e);return(n?r.j("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.j()).next(s=>{const o=[];return _.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(u,c){const d=c?new nd(c.sequenceNumber,new tn(ss(c.readTime),new L(Un(c.documentKey)),c.largestBatchId)):nd.empty(),h=u.fields.map(([g,v])=>new gR(ze.fromServerFormat(g),v));return new RS(u.indexId,u.collectionGroup,h,d)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:Y(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Gu(e),s=ua(e);return this.Tn(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>_.forEach(a,l=>s.put(Vw(l.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return _.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?_.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),_.forEach(a,l=>this.En(e,i,l).next(u=>{const c=this.An(s,l);return u.isEqual(c)?_.resolve():this.vn(e,s,l,u,c)}))))})}Rn(e,n,r,i){return la(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.gn(r,n.key),documentKey:n.key.path.toArray()})}Pn(e,n,r,i){return la(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.gn(r,n.key),n.key.path.toArray()])}En(e,n,r){const i=la(e);let s=new _e(Tr);return i.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.gn(r,n)])},(o,a)=>{s=s.add(new Ni(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}An(e,n){let r=new _e(Tr);const i=this.mn(n,e);if(i==null)return r;const s=Jp(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Tl(o))for(const a of o.arrayValue.values||[])r=r.add(new Ni(n.indexId,e.key,this.dn(a),i))}else r=r.add(new Ni(n.indexId,e.key,Wu,i));return r}vn(e,n,r,i,s){C("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,l,u,c,d){const h=a.getIterator(),g=l.getIterator();let v=Ss(h),w=Ss(g);for(;v||w;){let k=!1,p=!1;if(v&&w){const f=u(v,w);f<0?p=!0:f>0&&(k=!0)}else v!=null?p=!0:k=!0;k?(c(w),w=Ss(g)):p?(d(v),v=Ss(h)):(v=Ss(h),w=Ss(g))}}(i,s,Tr,a=>{o.push(this.Rn(e,n,r,a))},a=>{o.push(this.Pn(e,n,r,a))}),_.waitFor(o)}Tn(e){let n=1;return ua(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Tr(o,a)).filter((o,a,l)=>!a||Tr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Tr(o,e),l=Tr(o,n);if(a===0)i[0]=e.Je();else if(a>0&&l<0)i.push(o),i.push(o.Je());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Wu,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Wu,[]];s.push(IDBKeyRange.bound(a,l))}return s}bn(e,n){return Tr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(Hw)}getMinOffset(e,n){return _.mapArray(this.cn(n),r=>this.an(e,r).next(i=>i||F())).next(Hw)}}function Gw(t){return st(t,"collectionParents")}function la(t){return st(t,"indexEntries")}function Gu(t){return st(t,"indexConfiguration")}function ua(t){return st(t,"indexState")}function Hw(t){q(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Zg(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new tn(e.readTime,e.documentKey,n)}/**
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
 */const Kw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class $t{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new $t(e,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function LT(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.X({range:o},(c,d,h)=>(a++,h.delete()));s.push(l.next(()=>{q(a===1)}));const u=[];for(const c of n.mutations){const d=FS(e,c.key.path,n.batchId);s.push(i.delete(d)),u.push(c.key)}return _.waitFor(s).next(()=>u)}function ld(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw F();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */$t.DEFAULT_COLLECTION_PERCENTILE=10,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$t.DEFAULT=new $t(41943040,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$t.DISABLED=new $t(-1,0,0);class sh{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Vn={}}static de(e,n,r,i){q(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new sh(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return kr(e).X({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=bs(e),o=kr(e);return o.add({}).next(a=>{q(typeof a=="number");const l=new ay(a,n,r,i),u=function(h,g,v){const w=v.baseMutations.map(p=>Cl(h.fe,p)),k=v.mutations.map(p=>Cl(h.fe,p));return{userId:g,batchId:v.batchId,localWriteTimeMs:v.localWriteTime.toMillis(),baseMutations:w,mutations:k}}(this.serializer,this.userId,l),c=[];let d=new _e((h,g)=>Y(h.canonicalString(),g.canonicalString()));for(const h of i){const g=FS(this.userId,h.key.path,a);d=d.add(h.key.path.popLast()),c.push(o.put(u)),c.push(s.put(g,ER))}return d.forEach(h=>{c.push(this.indexManager.addToCollectionParentIndex(e,h))}),e.addOnCommittedListener(()=>{this.Vn[a]=l.keys()}),_.waitFor(c).next(()=>l)})}lookupMutationBatch(e,n){return kr(e).get(n).next(r=>r?(q(r.userId===this.userId),bi(this.serializer,r)):null)}Sn(e,n){return this.Vn[n]?_.resolve(this.Vn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Vn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return kr(e).X({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(q(a.batchId>=r),s=bi(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return kr(e).X({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return kr(e).j("userMutationsIndex",n).next(r=>r.map(i=>bi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=cc(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return bs(e).X({range:i},(o,a,l)=>{const[u,c,d]=o,h=Un(c);if(u===this.userId&&n.path.isEqual(h))return kr(e).get(d).next(g=>{if(!g)throw F();q(g.userId===this.userId),s.push(bi(this.serializer,g))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _e(Y);const i=[];return n.forEach(s=>{const o=cc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=bs(e).X({range:a},(u,c,d)=>{const[h,g,v]=u,w=Un(g);h===this.userId&&s.path.isEqual(w)?r=r.add(v):d.done()});i.push(l)}),_.waitFor(i).next(()=>this.Dn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=cc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new _e(Y);return bs(e).X({range:o},(l,u,c)=>{const[d,h,g]=l,v=Un(h);d===this.userId&&r.isPrefixOf(v)?v.length===i&&(a=a.add(g)):c.done()}).next(()=>this.Dn(e,a))}Dn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(kr(e).get(s).next(o=>{if(o===null)throw F();q(o.userId===this.userId),r.push(bi(this.serializer,o))}))}),_.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return LT(e.ht,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Cn(n.batchId)}),_.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return _.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return bs(e).X({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=Un(s[1]);i.push(l)}else a.done()}).next(()=>{q(i.length===0)})})}containsKey(e,n){return MT(e,this.userId,n)}xn(e){return $T(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function MT(t,e,n){const r=cc(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return bs(t).X({range:s,Y:!0},(a,l,u)=>{const[c,d,h]=a;c===e&&d===i&&(o=!0),u.done()}).next(()=>o)}function kr(t){return st(t,"mutations")}function bs(t){return st(t,"documentMutations")}function $T(t){return st(t,"mutationQueues")}/**
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
 */class os{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new os(0)}static Mn(){return new os(-1)}}/**
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
 */class LP{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.$n(e).next(n=>{const r=new os(n.highestTargetId);return n.highestTargetId=r.next(),this.On(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(n=>j.fromTimestamp(new ke(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.$n(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.On(e,i)))}addTargetData(e,n){return this.Fn(e,n).next(()=>this.$n(e).next(r=>(r.targetCount+=1,this.Bn(n,r),this.On(e,r))))}updateTargetData(e,n){return this.Fn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Ts(e).delete(n.targetId)).next(()=>this.$n(e)).next(r=>(q(r.targetCount>0),r.targetCount-=1,this.On(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Ts(e).X((o,a)=>{const l=ka(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>_.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Ts(e).X((r,i)=>{const s=ka(i);n(s)})}$n(e){return Qw(e).get("targetGlobalKey").next(n=>(q(n!==null),n))}On(e,n){return Qw(e).put("targetGlobalKey",n)}Fn(e,n){return Ts(e).put(RT(this.serializer,n))}Bn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.$n(e).next(n=>n.targetCount)}getTargetData(e,n){const r=ts(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Ts(e).X({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=ka(a);Zl(n,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Rr(e);return n.forEach(o=>{const a=Rt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),_.waitFor(i)}removeMatchingKeys(e,n,r){const i=Rr(e);return _.forEach(n,s=>{const o=Rt(s.path);return _.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Rr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Rr(e);let s=J();return i.X({range:r,Y:!0},(o,a,l)=>{const u=Un(o[1]),c=new L(u);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=Rt(n.path),i=IDBKeyRange.bound([r],[DS(r)],!1,!0);let s=0;return Rr(e).X({index:"documentTargetsIndex",Y:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}le(e,n){return Ts(e).get(n).next(r=>r?ka(r):null)}}function Ts(t){return st(t,"targets")}function Qw(t){return st(t,"targetGlobal")}function Rr(t){return st(t,"targetDocuments")}/**
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
 */function Yw([t,e],[n,r]){const i=Y(t,n);return i===0?Y(e,r):i}class MP{constructor(e){this.Ln=e,this.buffer=new _e(Yw),this.qn=0}Un(){return++this.qn}Kn(e){const n=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Yw(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class $P{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}Qn(e){C("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){mi(n)?C("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await pi(n)}await this.Qn(3e5)})}}class FP{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.zn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return _.resolve(zt.ct);const r=new MP(n);return this.jn.forEachTarget(e,i=>r.Kn(i.sequenceNumber)).next(()=>this.jn.Wn(e,i=>r.Kn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(C("LruGarbageCollector","Garbage collection skipped; disabled"),_.resolve(Kw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Kw):this.Hn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,n){let r,i,s,o,a,l,u;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),i=this.params.maximumSequenceNumbersToCollect):i=d,o=Date.now(),this.nthSequenceNumber(e,i))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(s=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),Xp()<=ie.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-c}ms`),_.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:d})))}}function UP(t,e){return new FP(t,e)}/**
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
 */class VP{constructor(e,n){this.db=e,this.garbageCollector=UP(this,n)}zn(e){const n=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Jn(e){let n=0;return this.Wn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Wn(e,n){return this.Yn(e,(r,i)=>n(i))}addReference(e,n,r){return Hu(e,r)}removeReference(e,n,r){return Hu(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Hu(e,n)}Xn(e,n){return function(r,i){let s=!1;return $T(r).Z(o=>MT(r,o,i).next(a=>(a&&(s=!0),_.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Yn(e,(o,a)=>{if(a<=n){const l=this.Xn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,j.min()),Rr(e).delete([0,Rt(o.path)])))});i.push(l)}}).next(()=>_.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Hu(e,n)}Yn(e,n){const r=Rr(e);let i,s=zt.ct;return r.X({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==zt.ct&&n(new L(Un(i)),s),s=u,i=l):s=zt.ct}).next(()=>{s!==zt.ct&&n(new L(Un(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Hu(t,e){return Rr(t).put(function(n,r){return{targetId:0,path:Rt(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
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
 */class FT{constructor(){this.changes=new gi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ve.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?_.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class zP{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Ei(e).put(r)}removeEntry(e,n,r){return Ei(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],od(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Zn(e,r)))}getEntry(e,n){let r=ve.newInvalidDocument(n);return Ei(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(ca(n))},(i,s)=>{r=this.ts(n,s)}).next(()=>r)}es(e,n){let r={size:0,document:ve.newInvalidDocument(n)};return Ei(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(ca(n))},(i,s)=>{r={document:this.ts(n,s),size:ld(s)}}).next(()=>r)}getEntries(e,n){let r=jt();return this.ns(e,n,(i,s)=>{const o=this.ts(i,s);r=r.insert(i,o)}).next(()=>r)}ss(e,n){let r=jt(),i=new me(L.comparator);return this.ns(e,n,(s,o)=>{const a=this.ts(s,o);r=r.insert(s,a),i=i.insert(s,ld(o))}).next(()=>({documents:r,rs:i}))}ns(e,n,r){if(n.isEmpty())return _.resolve();let i=new _e(Zw);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(ca(i.first()),ca(i.last())),o=i.getIterator();let a=o.getNext();return Ei(e).X({index:"documentKeyIndex",range:s},(l,u,c)=>{const d=L.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&Zw(a,d)<0;)r(a,null),a=o.getNext();a&&a.isEqual(d)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?c.G(ca(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i){const s=n.path,o=[s.popLast().toArray(),s.lastSegment(),od(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ei(e).j(IDBKeyRange.bound(o,a,!0)).next(l=>{let u=jt();for(const c of l){const d=this.ts(L.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);d.isFoundDocument()&&(tu(n,d)||i.has(d.key))&&(u=u.insert(d.key,d))}return u})}getAllFromCollectionGroup(e,n,r,i){let s=jt();const o=Jw(n,r),a=Jw(n,tn.max());return Ei(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,c)=>{const d=this.ts(L.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(d.key,d),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new BP(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return Xw(e).get("remoteDocumentGlobalKey").next(n=>(q(!!n),n))}Zn(e,n){return Xw(e).put("remoteDocumentGlobalKey",n)}ts(e,n){if(n){const r=kP(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(j.min())))return r}return ve.newInvalidDocument(e)}}function UT(t){return new zP(t)}class BP extends FT{constructor(e,n){super(),this.os=e,this.trackRemovals=n,this.us=new gi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new _e((s,o)=>Y(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.us.get(s);if(n.push(this.os.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=Fw(this.os.serializer,o);i=i.add(s.path.popLast());const u=ld(l);r+=u-a.size,n.push(this.os.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=Fw(this.os.serializer,o.convertToNoDocument(j.min()));n.push(this.os.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.os.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.os.updateMetadata(e,r)),_.waitFor(n)}getFromCache(e,n){return this.os.es(e,n).next(r=>(this.us.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.os.ss(e,n).next(({documents:r,rs:i})=>(i.forEach((s,o)=>{this.us.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Xw(t){return st(t,"remoteDocumentGlobal")}function Ei(t){return st(t,"remoteDocumentsV14")}function ca(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Jw(t,e){const n=e.documentKey.path.toArray();return[t,od(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Zw(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=Y(n[s],r[s]),i)return i;return i=Y(n.length,r.length),i||(i=Y(n[n.length-2],r[r.length-2]),i||Y(n[n.length-1],r[r.length-1]))}/**
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
 */class jP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class VT{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Va(r.mutation,i,Bt.empty(),ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,J()).next(()=>r))}getLocalViewOfDocuments(e,n,r=J()){const i=Vn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Sa();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Vn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,J()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=jt();const o=Ua(),a=Ua();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof yr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Va(c.mutation,u,c.mutation.getFieldMask(),ke.now())):o.set(u.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new jP(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ua();let i=new me((o,a)=>o-a),s=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Bt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||J()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=sT();c.forEach(h=>{if(!s.has(h)){const g=fT(n.get(h),r.get(h));g!==null&&d.set(h,g),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return L.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):iy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):_.resolve(Vn());let a=-1,l=s;return o.next(u=>_.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?_.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,J())).next(c=>({batchId:a,changes:iT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=Sa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Sa();return this.indexManager.getCollectionParents(e,i).next(o=>_.forEach(o,a=>{const l=function(u,c){return new gr(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,d)=>{s=s.insert(c,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,ve.newInvalidDocument(u)))});let o=Sa();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Va(u.mutation,l,Bt.empty(),ke.now()),tu(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class qP{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return _.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:Be(r.createTime)}),_.resolve()}getNamedQuery(e,n){return _.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:fy(r.bundledQuery),readTime:Be(r.readTime)}}(n)),_.resolve()}}/**
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
 */class WP{constructor(){this.overlays=new me(L.comparator),this.ls=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Vn();return _.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),_.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),_.resolve()}getOverlaysForCollection(e,n,r){const i=Vn(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return _.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new me((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Vn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Vn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return _.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new uy(n,r));let s=this.ls.get(n);s===void 0&&(s=J(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
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
 */class gy{constructor(){this.fs=new _e(Je.ds),this.ws=new _e(Je._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new Je(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new Je(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new L(new se([])),r=new Je(n,e),i=new Je(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new L(new se([])),r=new Je(n,e),i=new Je(n,e+1);let s=J();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Je(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return L.comparator(e.key,n.key)||Y(e.As,n.As)}static _s(e,n){return Y(e.As,n.As)||L.comparator(e.key,n.key)}}/**
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
 */class GP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new _e(Je.ds)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ay(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Je(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return _.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),i=new Je(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),_.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _e(Y);return n.forEach(i=>{const s=new Je(i,0),o=new Je(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),_.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new Je(new L(s),0);let a=new _e(Y);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),_.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){q(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return _.forEach(n.mutations,i=>{const s=new Je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new Je(n,0),i=this.Rs.firstAfterOrEqual(r);return _.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class HP{constructor(e){this.Ds=e,this.docs=new me(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return _.resolve(r?r.document.mutableCopy():ve.newInvalidDocument(n))}getEntries(e,n){let r=jt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ve.newInvalidDocument(i))}),_.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=jt();const o=n.path,a=new L(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Zg(OS(c),r)<=0||(i.has(c.key)||tu(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return _.resolve(s)}getAllFromCollectionGroup(e,n,r,i){F()}Cs(e,n){return _.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new KP(this)}getSize(e){return _.resolve(this.size)}}class KP extends FT{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),_.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class QP{constructor(e){this.persistence=e,this.xs=new gi(n=>ts(n),Zl),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.Ns=0,this.ks=new gy,this.targetCount=0,this.Ms=os.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),_.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new os(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.Fn(n),_.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),_.waitFor(s).next(()=>i)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return _.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),_.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),_.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),_.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return _.resolve(r)}containsKey(e,n){return _.resolve(this.ks.containsKey(n))}}/**
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
 */class zT{constructor(e,n){this.$s={},this.overlays={},this.Os=new zt(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new QP(this),this.indexManager=new PP,this.remoteDocumentCache=function(r){return new HP(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new DT(n),this.qs=new qP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new WP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new GP(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){C("MemoryPersistence","Starting transaction:",e);const i=new YP(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return _.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class YP extends MS{constructor(e){super(),this.currentSequenceNumber=e}}class oh{constructor(e){this.persistence=e,this.Qs=new gy,this.js=null}static zs(e){return new oh(e)}get Ws(){if(this.js)return this.js;throw F()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),_.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),_.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Ws,r=>{const i=L.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,j.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return _.or([()=>_.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class XP{constructor(e){this.serializer=e}O(e,n,r,i){const s=new Zd("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",mw,{unique:!0}),a.createObjectStore("documentMutations")}(e),e1(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=_.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),e1(e)),o=o.next(()=>function(a){const l=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:j.min().toTimestamp(),targetCount:0};return l.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,l){return l.store("mutations").j().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",mw,{unique:!0});const c=l.store("mutations"),d=u.map(h=>c.put(h));return _.waitFor(d)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Ys(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(s)))),r<7&&i>=7&&(o=o.next(()=>this.Zs(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ei(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const l=a.createObjectStore("documentOverlays",{keyPath:OR});l.createIndex("collectionPathOverlayIndex",LR,{unique:!1}),l.createIndex("collectionGroupOverlayIndex",MR,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const l=a.createObjectStore("remoteDocumentsV14",{keyPath:SR});l.createIndex("documentKeyIndex",TR),l.createIndex("collectionGroupIndex",kR)}(e)).next(()=>this.ni(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:NR}).createIndex("sequenceNumberIndex",DR,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:RR}).createIndex("documentKeyIndex",PR,{unique:!1})}(e))),o}Xs(e){let n=0;return e.store("remoteDocuments").X((r,i)=>{n+=ld(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Ys(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.j().next(i=>_.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>_.forEach(a,l=>{q(l.userId===s.userId);const u=bi(this.serializer,l);return LT(e,s.userId,u).next(()=>{})}))}))}Zs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.X((o,a)=>{const l=new se(o),u=function(c){return[0,Rt(c)]}(l);s.push(n.get(u).next(c=>c?_.resolve():(d=>n.put({targetId:0,path:Rt(d),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>_.waitFor(s))})}ti(e,n){e.createObjectStore("collectionParents",{keyPath:AR});const r=n.store("collectionParents"),i=new my,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Rt(l)})}};return n.store("remoteDocuments").X({Y:!0},(o,a)=>{const l=new se(o);return s(l.popLast())}).next(()=>n.store("documentMutations").X({Y:!0},([o,a,l],u)=>{const c=Un(a);return s(c.popLast())}))}ei(e){const n=e.store("targets");return n.X((r,i)=>{const s=ka(i),o=RT(this.serializer,s);return n.put(o)})}ni(e,n){const r=n.store("remoteDocuments"),i=[];return r.X((s,o)=>{const a=n.store("remoteDocumentsV14"),l=(u=o,u.document?new L(se.fromString(u.document.name).popFirst(5)):u.noDocument?L.fromSegments(u.noDocument.path):u.unknownDocument?L.fromSegments(u.unknownDocument.path):F()).path.toArray();var u;/**
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
*/const c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>_.waitFor(i))}si(e,n){const r=n.store("mutations"),i=UT(this.serializer),s=new zT(oh.zs,this.serializer.fe);return r.j().next(o=>{const a=new Map;return o.forEach(l=>{var u;let c=(u=a.get(l.userId))!==null&&u!==void 0?u:J();bi(this.serializer,l).keys().forEach(d=>c=c.add(d)),a.set(l.userId,c)}),_.forEach(a,(l,u)=>{const c=new et(u),d=ih.de(this.serializer,c),h=s.getIndexManager(c),g=sh.de(c,this.serializer,h,s.referenceDelegate);return new VT(i,g,d,h).recalculateAndSaveOverlaysForDocumentKeys(new Zp(n,zt.ct),l).next()})})}}function e1(t){t.createObjectStore("targetDocuments",{keyPath:CR}).createIndex("documentTargetsIndex",bR,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",xR,{unique:!0}),t.createObjectStore("targetGlobal")}const xf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class yy{constructor(e,n,r,i,s,o,a,l,u,c,d=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ii=s,this.window=o,this.document=a,this.ri=u,this.oi=c,this.ui=d,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=h=>Promise.resolve(),!yy.D())throw new x(I.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new VP(this,i),this.di=n+"main",this.serializer=new DT(l),this.wi=new _n(this.di,this.ui,new XP(this.serializer)),this.Bs=new LP(this.referenceDelegate,this.serializer),this.remoteDocumentCache=UT(this.serializer),this.qs=new xP,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,c===!1&&Ve("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new x(I.FAILED_PRECONDITION,xf);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new zt(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ku(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(n=>{n||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(n=>this.isPrimary&&!n?this.Ai(e).next(()=>!1):!!n&&this.vi(e).next(()=>!0))).catch(e=>{if(mi(e))return C("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return C("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return da(e).get("owner").next(n=>_.resolve(this.Ri(n)))}Pi(e){return Ku(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=st(n,"clientMetadata");return r.j().next(i=>{const s=this.Si(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return _.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const n of e)this._i.removeItem(this.Di(n.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?_.resolve(!0):da(e).get("owner").next(n=>{if(n!==null&&this.Vi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)){if(this.Ri(n)&&this.networkEnabled)return!0;if(!this.Ri(n)){if(!n.allowTabSynchronization)throw new x(I.FAILED_PRECONDITION,xf);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ku(e).j().next(r=>this.Si(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&C("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Zp(e,zt.ct);return this.Ai(n).next(()=>this.Pi(n))}),this.wi.close(),this.Mi()}Si(e,n){return e.filter(r=>this.Vi(r.updateTimeMs,n)&&!this.Ci(r.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>Ku(e).j().next(n=>this.Si(n,18e5).map(r=>r.clientId)))}get started(){return this.Fs}getMutationQueue(e,n){return sh.de(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new OP(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return ih.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,n,r){C("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.ui)===15?FR:o===14?zS:o===13?VS:o===12?$R:o===11?US:void F();var o;let a;return this.wi.runTransaction(e,i,s,l=>(a=new Zp(l,this.Os?this.Os.next():zt.ct),n==="readwrite-primary"?this.Ti(a).next(u=>!!u||this.Ei(a)).next(u=>{if(!u)throw Ve(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new x(I.FAILED_PRECONDITION,LS);return r(a)}).next(u=>this.vi(a).next(()=>u)):this.Oi(a).next(()=>r(a)))).then(l=>(a.raiseOnCommittedEvent(),l))}Oi(e){return da(e).get("owner").next(n=>{if(n!==null&&this.Vi(n.leaseTimestampMs,5e3)&&!this.Ci(n.ownerId)&&!this.Ri(n)&&!(this.oi||this.allowTabSynchronization&&n.allowTabSynchronization))throw new x(I.FAILED_PRECONDITION,xf)})}vi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return da(e).put("owner",n)}static D(){return _n.D()}Ai(e){const n=da(e);return n.get("owner").next(r=>this.Ri(r)?(C("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):_.resolve())}Vi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Ve(`Detected an update time that is in the future: ${e} > ${r}`),!1))}gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;kA()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var n;try{const r=((n=this._i)===null||n===void 0?void 0:n.getItem(this.Di(e)))!==null;return C("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ve("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){Ve("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch{}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function da(t){return st(t,"owner")}function Ku(t){return st(t,"clientMetadata")}function vy(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class wy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=J(),i=J();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new wy(e,n.fromCache,r,i)}}/**
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
 */class BT{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(Cw(n))return _.resolve(null);let r=Ht(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=sd(n,null,"F"),r=Ht(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=J(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,sd(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return Cw(n)||i.isEqual(j.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(Xp()<=ie.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),om(n)),this.Wi(e,o,n,PS(i,-1)))})}ji(e,n){let r=new _e(nT(e));return n.forEach((i,s)=>{tu(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return Xp()<=ie.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",om(n)),this.Ui.getDocumentsMatchingQuery(e,n,tn.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class JP{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new me(Y),this.Yi=new gi(s=>ts(s),Zl),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new VT(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function jT(t,e,n,r){return new JP(t,e,n,r)}async function qT(t,e){const n=M(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=J();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function ZP(t,e){const n=M(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,d=c.keys();let h=_.resolve();return d.forEach(g=>{h=h.next(()=>u.getEntry(a,g)).next(v=>{const w=l.docVersions.get(g);q(w!==null),v.version.compareTo(w)<0&&(c.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),h.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=J();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function WT(t){const e=M(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function eO(t,e){const n=M(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,d)=>{const h=i.get(d);if(!h)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,d)));let g=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(Ye.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(d,g),function(v,w,k){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(h,g,c)&&a.push(n.Bs.updateTargetData(s,g))});let l=jt(),u=J();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(GT(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual(j.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(d=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return _.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function GT(t,e,n){let r=J(),i=J();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=jt();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(j.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):C("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function tO(t,e){const n=M(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vo(t,e){const n=M(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,_.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function wo(t,e,n){const r=M(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!mi(o))throw o;C("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function ud(t,e,n){const r=M(t);let i=j.min(),s=J();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=M(a),d=c.Yi.get(u);return d!==void 0?_.resolve(c.Ji.get(d)):c.Bs.getTargetData(l,u)}(r,o,Ht(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:j.min(),n?s:J())).next(a=>(QT(r,tT(e),a),{documents:a,ir:s})))}function HT(t,e){const n=M(t),r=M(n.Bs),i=n.Ji.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.le(s,e).next(o=>o?o.target:null))}function KT(t,e){const n=M(t),r=n.Xi.get(e)||j.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Zi.getAllFromCollectionGroup(i,e,PS(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(QT(n,e,i),i))}function QT(t,e,n){let r=t.Xi.get(e)||j.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}async function nO(t,e,n,r){const i=M(t);let s=J(),o=jt();for(const u of n){const c=e.rr(u.metadata.name);u.document&&(s=s.add(c));const d=e.ur(u);d.setReadTime(e.cr(u.metadata.readTime)),o=o.insert(c,d)}const a=i.Zi.newChangeBuffer({trackRemovals:!0}),l=await vo(i,function(u){return Ht(Po(se.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>GT(u,a,o).next(c=>(a.apply(u),c)).next(c=>i.Bs.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.Bs.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,c.nr,c.sr)).next(()=>c.nr)))}async function rO(t,e,n=J()){const r=await vo(t,Ht(fy(e.bundledQuery))),i=M(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Be(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.qs.saveNamedQuery(s,e);const a=r.withResumeToken(Ye.EMPTY_BYTE_STRING,o);return i.Ji=i.Ji.insert(a.targetId,a),i.Bs.updateTargetData(s,a).next(()=>i.Bs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Bs.addMatchingKeys(s,n,r.targetId)).next(()=>i.qs.saveNamedQuery(s,e))})}function t1(t,e){return`firestore_clients_${t}_${e}`}function n1(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Cf(t,e){return`firestore_targets_${t}_${e}`}class cd{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static ar(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new x(i.error.code,i.error.message))),o?new cd(e,n,i.state,s):(Ve("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class za{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static ar(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new x(r.error.code,r.error.message))),s?new za(e,r.state,i):(Ve("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class dd{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static ar(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=sy();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=$S(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new dd(e,s):(Ve("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class _y{constructor(e,n){this.clientId=e,this.onlineState=n}static ar(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new _y(n.clientId,n.onlineState):(Ve("SharedClientState",`Failed to parse online state: ${e}`),null)}}class fm{constructor(){this.activeTargetIds=sy()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bf{constructor(e,n,r,i,s){this.window=e,this.ii=n,this.persistenceKey=r,this.wr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new me(Y),this.started=!1,this.yr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.pr=t1(this.persistenceKey,this.wr),this.Ir=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.gr=this.gr.insert(this.wr,new fm),this.Tr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const r of e){if(r===this.wr)continue;const i=this.getItem(t1(this.persistenceKey,r));if(i){const s=dd.ar(r,i);s&&(this.gr=this.gr.insert(s.clientId,s))}}this.Pr();const n=this.storage.getItem(this.vr);if(n){const r=this.br(n);r&&this.Vr(r)}for(const r of this.yr)this.mr(r);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let n=!1;return this.gr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,n,r){this.Dr(e,n,r),this.Cr(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Cf(this.persistenceKey,e));if(r){const i=za.ar(e,r);i&&(n=i.state)}}return this.Nr.lr(e),this.Pr(),n}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Cf(this.persistenceKey,e))}updateQueryState(e,n,r){this.kr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Cr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return C("SharedClientState","READ",e,n),n}setItem(e,n){C("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){C("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const n=e;if(n.storageArea===this.storage){if(C("SharedClientState","EVENT",n.key,n.newValue),n.key===this.pr)return void Ve("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Tr.test(n.key)){if(n.newValue==null){const r=this.Or(n.key);return this.Fr(r,null)}{const r=this.Br(n.key,n.newValue);if(r)return this.Fr(r.clientId,r)}}else if(this.Er.test(n.key)){if(n.newValue!==null){const r=this.Lr(n.key,n.newValue);if(r)return this.qr(r)}}else if(this.Ar.test(n.key)){if(n.newValue!==null){const r=this.Ur(n.key,n.newValue);if(r)return this.Kr(r)}}else if(n.key===this.vr){if(n.newValue!==null){const r=this.br(n.newValue);if(r)return this.Vr(r)}}else if(n.key===this.Ir){const r=function(i){let s=zt.ct;if(i!=null)try{const o=JSON.parse(i);q(typeof o=="number"),s=o}catch(o){Ve("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==zt.ct&&this.sequenceNumberHandler(r)}else if(n.key===this.Rr){const r=this.Gr(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Qr(i)))}}}else this.yr.push(n)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,n,r){const i=new cd(this.currentUser,e,n,r),s=n1(this.persistenceKey,this.currentUser,e);this.setItem(s,i.hr())}Cr(e){const n=n1(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Mr(e){const n={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(n))}kr(e,n,r){const i=Cf(this.persistenceKey,e),s=new za(e,n,r);this.setItem(i,s.hr())}$r(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Rr,n)}Or(e){const n=this.Tr.exec(e);return n?n[1]:null}Br(e,n){const r=this.Or(e);return dd.ar(r,n)}Lr(e,n){const r=this.Er.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return cd.ar(new et(s),i,n)}Ur(e,n){const r=this.Ar.exec(e),i=Number(r[1]);return za.ar(i,n)}br(e){return _y.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);C("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,n){const r=n?this.gr.insert(e,n):this.gr.remove(e),i=this.Sr(this.gr),s=this.Sr(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.Wr(o,a).then(()=>{this.gr=r})}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let n=sy();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class YT{constructor(){this.Hr=new fm,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new fm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class iO{Yr(e){}shutdown(){}}/**
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
 */class r1{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Qu=null;function Af(){return Qu===null?Qu=268435456+Math.round(2147483648*Math.random()):Qu++,"0x"+Qu.toString(16)}/**
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
 */const sO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class oO{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const It="WebChannelConnection";class aO extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=Af(),a=this.To(e,n);C("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(C("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw xn("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ro,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=sO[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=Af();return new Promise((o,a)=>{const l=new rR;l.setWithCredentials(!0),l.listenOnce(eR.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Tf.NO_ERROR:const c=l.getResponseJson();C(It,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Tf.TIMEOUT:C(It,`RPC '${e}' ${s} timed out`),a(new x(I.DEADLINE_EXCEEDED,"Request time out"));break;case Tf.HTTP_ERROR:const d=l.getStatus();if(C(It,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const g=h==null?void 0:h.error;if(g&&g.status&&g.message){const v=function(w){const k=w.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(k)>=0?k:I.UNKNOWN}(g.status);a(new x(v,g.message))}else a(new x(I.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new x(I.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{C(It,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);C(It,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=Af(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=JD(),a=ZD(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new nR({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");C(It,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);let h=!1,g=!1;const v=new oO({ro:k=>{g?C(It,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(h||(C(It,`Opening RPC '${e}' stream ${i} transport.`),d.open(),h=!0),C(It,`RPC '${e}' stream ${i} sending:`,k),d.send(k))},oo:()=>d.close()}),w=(k,p,f)=>{k.listen(p,y=>{try{f(y)}catch(E){setTimeout(()=>{throw E},0)}})};return w(d,Bu.EventType.OPEN,()=>{g||C(It,`RPC '${e}' stream ${i} transport opened.`)}),w(d,Bu.EventType.CLOSE,()=>{g||(g=!0,C(It,`RPC '${e}' stream ${i} transport closed`),v.wo())}),w(d,Bu.EventType.ERROR,k=>{g||(g=!0,xn(It,`RPC '${e}' stream ${i} transport errored:`,k),v.wo(new x(I.UNAVAILABLE,"The operation could not be completed")))}),w(d,Bu.EventType.MESSAGE,k=>{var p;if(!g){const f=k.data[0];q(!!f);const y=f,E=y.error||((p=y[0])===null||p===void 0?void 0:p.error);if(E){C(It,`RPC '${e}' stream ${i} received error:`,E);const T=E.status;let b=function(U){const le=qe[U];if(le!==void 0)return gT(le)}(T),P=E.message;b===void 0&&(b=I.INTERNAL,P="Unknown error status: "+T+" with message "+E.message),g=!0,v.wo(new x(b,P)),d.close()}else C(It,`RPC '${e}' stream ${i} received:`,f),v._o(f)}}),w(a,tR.STAT_EVENT,k=>{k.stat===dw.PROXY?C(It,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===dw.NOPROXY&&C(It,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.fo()},0),v}}/**
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
 */function XT(){return typeof window<"u"?window:null}function mc(){return typeof document<"u"?document:null}/**
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
 */function su(t){return new mP(t,!0)}/**
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
 */class Iy{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&C("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class JT{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Iy(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(Ve(n.toString()),Ve("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new x(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return C("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lO extends JT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=vP(this.serializer,e),r=function(i){if(!("targetChange"in i))return j.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?j.min():s.readTime?Be(s.readTime):j.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=xl(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=rd(a)?{documents:kT(i,a)}:{query:xT(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=_T(i,s.resumeToken);const l=am(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(j.min())>0){o.readTime=yo(i,s.snapshotVersion.toTimestamp());const l=am(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=_P(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=xl(this.serializer),n.removeTarget=e,this.Wo(n)}}class uO extends JT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(q(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=wP(e.writeResults,e.commitTime),r=Be(e.commitTime);return this.listener.cu(r,n)}return q(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=xl(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Cl(this.serializer,r))};this.Wo(n)}}/**
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
 */class cO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new x(I.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(I.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(I.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class dO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Ve(n),this.mu=!1):C("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class hO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{yi(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=M(a);l.vu.add(4),await Mo(l),l.bu.set("Unknown"),l.vu.delete(4),await ou(l)}(this))})}),this.bu=new dO(r,i)}}async function ou(t){if(yi(t))for(const e of t.Ru)await e(!0)}async function Mo(t){for(const e of t.Ru)await e(!1)}function ah(t,e){const n=M(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Ty(n)?Sy(n):Fo(n).Ko()&&Ey(n,e))}function bl(t,e){const n=M(t),r=Fo(n);n.Au.delete(e),r.Ko()&&ZT(n,e),n.Au.size===0&&(r.Ko()?r.jo():yi(n)&&n.bu.set("Unknown"))}function Ey(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Fo(t).su(e)}function ZT(t,e){t.Vu.qt(e),Fo(t).iu(e)}function Sy(t){t.Vu=new dP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Fo(t).start(),t.bu.gu()}function Ty(t){return yi(t)&&!Fo(t).Uo()&&t.Au.size>0}function yi(t){return M(t).vu.size===0}function ek(t){t.Vu=void 0}async function fO(t){t.Au.forEach((e,n)=>{Ey(t,e)})}async function pO(t,e){ek(t),Ty(t)?(t.bu.Iu(e),Sy(t)):t.bu.set("Unknown")}async function mO(t,e,n){if(t.bu.set("Online"),e instanceof wT&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){C("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await hd(t,r)}else if(e instanceof pc?t.Vu.Ht(e):e instanceof vT?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(j.min()))try{const r=await WT(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(Ye.EMPTY_BYTE_STRING,u.snapshotVersion)),ZT(i,a);const c=new nr(u.target,a,l,u.sequenceNumber);Ey(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){C("RemoteStore","Failed to raise snapshot:",r),await hd(t,r)}}async function hd(t,e,n){if(!mi(e))throw e;t.vu.add(1),await Mo(t),t.bu.set("Offline"),n||(n=()=>WT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await ou(t)})}function tk(t,e){return e().catch(n=>hd(t,n,e))}async function $o(t){const e=M(t),n=ii(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;gO(e);)try{const i=await tO(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,yO(e,i)}catch(i){await hd(e,i)}nk(e)&&rk(e)}function gO(t){return yi(t)&&t.Eu.length<10}function yO(t,e){t.Eu.push(e);const n=ii(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function nk(t){return yi(t)&&!ii(t).Uo()&&t.Eu.length>0}function rk(t){ii(t).start()}async function vO(t){ii(t).hu()}async function wO(t){const e=ii(t);for(const n of t.Eu)e.uu(n.mutations)}async function _O(t,e,n){const r=t.Eu.shift(),i=ly.from(r,e,n);await tk(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await $o(t)}async function IO(t,e){e&&ii(t).ou&&await async function(n,r){if(i=r.code,mT(i)&&i!==I.ABORTED){const s=n.Eu.shift();ii(n).Qo(),await tk(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await $o(n)}var i}(t,e),nk(t)&&rk(t)}async function i1(t,e){const n=M(t);n.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const r=yi(n);n.vu.add(3),await Mo(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await ou(n)}async function pm(t,e){const n=M(t);e?(n.vu.delete(2),await ou(n)):e||(n.vu.add(2),await Mo(n),n.bu.set("Unknown"))}function Fo(t){return t.Su||(t.Su=function(e,n,r){const i=M(e);return i.fu(),new lO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:fO.bind(null,t),ao:pO.bind(null,t),nu:mO.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Ty(t)?Sy(t):t.bu.set("Unknown")):(await t.Su.stop(),ek(t))})),t.Su}function ii(t){return t.Du||(t.Du=function(e,n,r){const i=M(e);return i.fu(),new uO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:vO.bind(null,t),ao:IO.bind(null,t),au:wO.bind(null,t),cu:_O.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await $o(t)):(await t.Du.stop(),t.Eu.length>0&&(C("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class ky{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ky(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uo(t,e){if(Ve("AsyncQueue",`${e}: ${t}`),mi(t))return new x(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Js{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=Sa(),this.sortedSet=new me(this.comparator)}static emptySet(e){return new Js(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Js)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Js;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class s1{constructor(){this.Cu=new me(L.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):F():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class _o{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new _o(e,n,Js.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&eu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class EO{constructor(){this.Nu=void 0,this.listeners=[]}}class SO{constructor(){this.queries=new gi(e=>eT(e),eu),this.onlineState="Unknown",this.ku=new Set}}async function xy(t,e){const n=M(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new EO),i)try{s.Nu=await n.onListen(r)}catch(o){const a=Uo(o,`Initialization of query '${om(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&by(n)}async function Cy(t,e){const n=M(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function TO(t,e){const n=M(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&by(n)}function kO(t,e,n){const r=M(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function by(t){t.ku.forEach(e=>{e.next()})}class Ay{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new _o(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=_o.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class xO{constructor(e,n){this.Gu=e,this.byteLength=n}Qu(){return"metadata"in this.Gu}}/**
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
 */class o1{constructor(e){this.serializer=e}rr(e){return Wn(this.serializer,e)}ur(e){return e.metadata.exists?TT(this.serializer,e.document,!1):ve.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return Be(e)}}class CO{constructor(e,n,r){this.ju=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=ik(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++n;const r=se.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}Wu(e){const n=new Map,r=new o1(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.rr(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||J()).add(s);n.set(o,a)}}return n}async complete(){const e=await nO(this.localStore,new o1(this.serializer),this.documents,this.ju.id),n=this.Wu(this.documents);for(const r of this.queries)await rO(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function ik(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class sk{constructor(e){this.key=e}}class ok{constructor(e){this.key=e}}class ak{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=J(),this.mutatedKeys=J(),this.tc=nT(e),this.ec=new Js(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new s1,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const h=i.get(c),g=tu(this.query,d)?d:null,v=!!h&&this.mutatedKeys.has(h.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;h&&g?h.data.isEqual(g.data)?v!==w&&(r.track({type:3,doc:g}),k=!0):this.rc(h,g)||(r.track({type:2,doc:g}),k=!0,(l&&this.tc(g,l)>0||u&&this.tc(g,u)<0)&&(a=!0)):!h&&g?(r.track({type:0,doc:g}),k=!0):h&&!g&&(r.track({type:1,doc:h}),k=!0,(l||u)&&(a=!0)),k&&(g?(o=o.add(g),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(d,h){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return g(d)-g(h)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new _o(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new s1,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=J(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new ok(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new sk(r))}),n}hc(e){this.Yu=e.ir,this.Zu=J();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return _o.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class bO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class AO{constructor(e){this.key=e,this.fc=!1}}class NO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new gi(a=>eT(a),eu),this._c=new Map,this.mc=new Set,this.gc=new me(L.comparator),this.yc=new Map,this.Ic=new gy,this.Tc={},this.Ec=new Map,this.Ac=os.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function DO(t,e){const n=Oy(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await vo(n.localStore,Ht(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Ny(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&ah(n.remoteStore,o)}return i}async function Ny(t,e,n,r,i){t.Rc=(d,h,g)=>async function(v,w,k,p){let f=w.view.sc(k);f.zi&&(f=await ud(v.localStore,w.query,!1).then(({documents:T})=>w.view.sc(T,f)));const y=p&&p.targetChanges.get(w.targetId),E=w.view.applyChanges(f,v.isPrimaryClient,y);return mm(v,w.targetId,E.cc),E.snapshot}(t,d,h,g);const s=await ud(t.localStore,e,!0),o=new ak(e,s.ir),a=o.sc(s.documents),l=iu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);mm(t,n,u.cc);const c=new bO(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function RO(t,e){const n=M(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!eu(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await wo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),bl(n.remoteStore,r.targetId),Io(n,r.targetId)}).catch(pi)):(Io(n,r.targetId),await wo(n.localStore,r.targetId,!0))}async function PO(t,e,n){const r=Ly(t);try{const i=await function(s,o){const a=M(s),l=ke.now(),u=o.reduce((h,g)=>h.add(g.key),J());let c,d;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>{let g=jt(),v=J();return a.Zi.getEntries(h,u).next(w=>{g=w,g.forEach((k,p)=>{p.isValidDocument()||(v=v.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(h,g)).next(w=>{c=w;const k=[];for(const p of o){const f=lP(p,c.get(p.key).overlayedDocument);f!=null&&k.push(new yr(p.key,f,WS(f.value.mapValue),Te.exists(!0)))}return a.mutationQueue.addMutationBatch(h,l,k,o)}).next(w=>{d=w;const k=w.applyToLocalDocumentSet(c,v);return a.documentOverlayCache.saveOverlays(h,w.batchId,k)})}).then(()=>({batchId:d.batchId,changes:iT(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new me(Y)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await vr(r,i.changes),await $o(r.remoteStore)}catch(i){const s=Uo(i,"Failed to persist write");n.reject(s)}}async function lk(t,e){const n=M(t);try{const r=await eO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?q(o.fc):i.removedDocuments.size>0&&(q(o.fc),o.fc=!1))}),await vr(n,r,e)}catch(r){await pi(r)}}function a1(t,e,n){const r=M(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=M(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const d of c.listeners)d.Mu(o)&&(l=!0)}),l&&by(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function OO(t,e,n){const r=M(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new me(L.comparator);o=o.insert(s,ve.newNoDocument(s,j.min()));const a=J().add(s),l=new ru(j.min(),new Map,new me(Y),o,a);await lk(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),Py(r)}else await wo(r.localStore,e,!1).then(()=>Io(r,e,n)).catch(pi)}async function LO(t,e){const n=M(t),r=e.batch.batchId;try{const i=await ZP(n.localStore,e);Ry(n,r,null),Dy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await vr(n,i)}catch(i){await pi(i)}}async function MO(t,e,n){const r=M(t);try{const i=await function(s,o){const a=M(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(q(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);Ry(r,e,n),Dy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await vr(r,i)}catch(i){await pi(i)}}async function $O(t,e){const n=M(t);yi(n.remoteStore)||C("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=M(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Ec.get(r)||[];i.push(e),n.Ec.set(r,i)}catch(r){const i=Uo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Dy(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function Ry(t,e,n){const r=M(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function Io(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||uk(t,r)})}function uk(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(bl(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Py(t))}function mm(t,e,n){for(const r of n)r instanceof sk?(t.Ic.addReference(r.key,e),FO(t,r)):r instanceof ok?(C("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||uk(t,r.key)):F()}function FO(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(C("SyncEngine","New document in limbo: "+n),t.mc.add(r),Py(t))}function Py(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new L(se.fromString(e)),r=t.Ac.next();t.yc.set(r,new AO(n)),t.gc=t.gc.insert(n,r),ah(t.remoteStore,new nr(Ht(Po(n.path)),r,"TargetPurposeLimboResolution",zt.ct))}}async function vr(t,e,n){const r=M(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=wy.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=M(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>_.forEach(l,d=>_.forEach(d.Fi,h=>u.persistence.referenceDelegate.addReference(c,d.targetId,h)).next(()=>_.forEach(d.Bi,h=>u.persistence.referenceDelegate.removeReference(c,d.targetId,h)))))}catch(c){if(!mi(c))throw c;C("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const d=c.targetId;if(!c.fromCache){const h=u.Ji.get(d),g=h.snapshotVersion,v=h.withLastLimboFreeSnapshotVersion(g);u.Ji=u.Ji.insert(d,v)}}}(r.localStore,s))}async function UO(t,e){const n=M(t);if(!n.currentUser.isEqual(e)){C("SyncEngine","User change. New user:",e.toKey());const r=await qT(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new x(I.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await vr(n,r.er)}}function VO(t,e){const n=M(t),r=n.yc.get(e);if(r&&r.fc)return J().add(r.key);{let i=J();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}async function zO(t,e){const n=M(t),r=await ud(n.localStore,e.query,!0),i=e.view.hc(r);return n.isPrimaryClient&&mm(n,e.targetId,i.cc),i}async function BO(t,e){const n=M(t);return KT(n.localStore,e).then(r=>vr(n,r))}async function jO(t,e,n,r){const i=M(t),s=await function(o,a){const l=M(o),u=M(l.mutationQueue);return l.persistence.runTransaction("Lookup mutation documents","readonly",c=>u.Sn(c,a).next(d=>d?l.localDocuments.getDocuments(c,d):_.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await $o(i.remoteStore):n==="acknowledged"||n==="rejected"?(Ry(i,e,r||null),Dy(i,e),function(o,a){M(M(o).mutationQueue).Cn(a)}(i.localStore,e)):F(),await vr(i,s)):C("SyncEngine","Cannot apply mutation batch with id: "+e)}async function qO(t,e){const n=M(t);if(Oy(n),Ly(n),e===!0&&n.vc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await l1(n,r.toArray());n.vc=!0,await pm(n.remoteStore,!0);for(const s of i)ah(n.remoteStore,s)}else if(e===!1&&n.vc!==!1){const r=[];let i=Promise.resolve();n._c.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Io(n,o),wo(n.localStore,o,!0))),bl(n.remoteStore,o)}),await i,await l1(n,r),function(s){const o=M(s);o.yc.forEach((a,l)=>{bl(o.remoteStore,l)}),o.Ic.Ts(),o.yc=new Map,o.gc=new me(L.comparator)}(n),n.vc=!1,await pm(n.remoteStore,!1)}}async function l1(t,e,n){const r=M(t),i=[],s=[];for(const o of e){let a;const l=r._c.get(o);if(l&&l.length!==0){a=await vo(r.localStore,Ht(l[0]));for(const u of l){const c=r.wc.get(u),d=await zO(r,c);d.snapshot&&s.push(d.snapshot)}}else{const u=await HT(r.localStore,o);a=await vo(r.localStore,u),await Ny(r,ck(u),o,!1,a.resumeToken)}i.push(a)}return r.dc.nu(s),i}function ck(t){return ZS(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function WO(t){const e=M(t);return M(M(e.localStore).persistence).$i()}async function GO(t,e,n,r){const i=M(t);if(i.vc)return void C("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await KT(i.localStore,tT(s[0])),a=ru.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Ye.EMPTY_BYTE_STRING);await vr(i,o,a);break}case"rejected":await wo(i.localStore,e,!0),Io(i,e,r);break;default:F()}}async function HO(t,e,n){const r=Oy(t);if(r.vc){for(const i of e){if(r._c.has(i)){C("SyncEngine","Adding an already active target "+i);continue}const s=await HT(r.localStore,i),o=await vo(r.localStore,s);await Ny(r,ck(s),o.targetId,!1,o.resumeToken),ah(r.remoteStore,o)}for(const i of n)r._c.has(i)&&await wo(r.localStore,i,!1).then(()=>{bl(r.remoteStore,i),Io(r,i)}).catch(pi)}}function Oy(t){const e=M(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=lk.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=OO.bind(null,e),e.dc.nu=TO.bind(null,e.eventManager),e.dc.Pc=kO.bind(null,e.eventManager),e}function Ly(t){const e=M(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=MO.bind(null,e),e}function KO(t,e,n){const r=M(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(d,h){const g=M(d),v=Be(h.createTime);return g.persistence.runTransaction("hasNewerBundle","readonly",w=>g.qs.getBundleMetadata(w,h.id)).then(w=>!!w&&w.createTime.compareTo(v)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(d){return{taskState:"Success",documentsLoaded:d.totalDocuments,bytesLoaded:d.totalBytes,totalDocuments:d.totalDocuments,totalBytes:d.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(ik(a));const l=new CO(a,i.localStore,s.serializer);let u=await s.bc();for(;u;){const d=await l.zu(u);d&&o._updateProgress(d),u=await s.bc()}const c=await l.complete();return await vr(i,c.Ju,void 0),await function(d,h){const g=M(d);return g.persistence.runTransaction("Save bundle","readwrite",v=>g.qs.saveBundleMetadata(v,h))}(i.localStore,a),o._completeWith(c.progress),Promise.resolve(c.Hu)}catch(a){return xn("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class gm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=su(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return jT(this.persistence,new BT,e.initialUser,this.serializer)}createPersistence(e){return new zT(oh.zs,this.serializer)}createSharedClientState(e){return new YT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class dk extends gm{constructor(e,n,r){super(),this.Vc=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await Ly(this.Vc.syncEngine),await $o(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return jT(this.persistence,new BT,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new $P(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new _R(n,this.persistence);return new wR(e.asyncQueue,r)}createPersistence(e){const n=vy(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?$t.withCacheSize(this.cacheSizeBytes):$t.DEFAULT;return new yy(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,XT(),mc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new YT}}class QO extends dk{constructor(e,n){super(e,n,!1),this.Vc=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Vc.syncEngine;this.sharedClientState instanceof bf&&(this.sharedClientState.syncEngine={jr:jO.bind(null,n),zr:GO.bind(null,n),Wr:HO.bind(null,n),$i:WO.bind(null,n),Qr:BO.bind(null,n)},await this.sharedClientState.start()),await this.persistence.Ii(async r=>{await qO(this.Vc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=XT();if(!bf.D(n))throw new x(I.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=vy(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new bf(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class My{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>a1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=UO.bind(null,this.syncEngine),await pm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new SO}createDatastore(e){const n=su(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new aO(i));var i;return function(s,o,a,l){return new cO(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>a1(this.syncEngine,a,0),o=r1.D()?new r1:new iO,new hO(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new NO(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=M(e);C("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Mo(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */function u1(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class lh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Ve("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class YO{constructor(e,n){this.Cc=e,this.serializer=n,this.metadata=new nt,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then(r=>{r&&r.Qu()?this.metadata.resolve(r.Gu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Gu)}`))},r=>this.metadata.reject(r))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(e===null)return null;const n=this.xc.decode(e),r=Number(n);isNaN(r)&&this.Mc(`length string (${n}) is not valid number`);const i=await this.$c(r);return new xO(JSON.parse(i),e.length+r)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async kc(){for(;this.Oc()<0&&!await this.Fc(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const n=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Mc(e){throw this.Cc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Fc(){const e=await this.Cc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class XO{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new x(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=M(r),o=xl(s.serializer)+"/documents",a={documents:i.map(d=>kl(s.serializer,d))},l=await s.vo("BatchGetDocuments",o,a,i.length),u=new Map;l.forEach(d=>{const h=yP(s.serializer,d);u.set(h.key.toString(),h)});const c=[];return i.forEach(d=>{const h=u.get(d.toString());q(!!h),c.push(h)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Lo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=L.fromPath(r);this.mutations.push(new oy(i,this.precondition(i)))}),await async function(n,r){const i=M(n),s=xl(i.serializer)+"/documents",o={writes:r.map(a=>Cl(i.serializer,a))};await i.Io("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw F();n=j.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new x(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(j.min())?Te.exists(!1):Te.updateTime(n):Te.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(j.min()))throw new x(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Te.updateTime(n)}return Te.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class JO{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Bc=r.maxAttempts,this.qo=new Iy(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{const e=new XO(this.datastore),n=this.qc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Uc(i)}))}).catch(r=>{this.Uc(r)})})}qc(e){try{const n=this.updateFunction(e);return!Jl(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!mT(n)}return!1}}/**
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
 */class ZO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=NS.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{C("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(C("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Uo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gc(t,e){t.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await qT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ym(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $y(t);C("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>i1(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>i1(e.remoteStore,s)),t._onlineComponents=e}function hk(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function $y(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){C("FirestoreClient","Using user provided OfflineComponentProvider");try{await gc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!hk(n))throw n;xn("Error using user provided cache. Falling back to memory cache: "+n),await gc(t,new gm)}}else C("FirestoreClient","Using default OfflineComponentProvider"),await gc(t,new gm);return t._offlineComponents}async function uh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(C("FirestoreClient","Using user provided OnlineComponentProvider"),await ym(t,t._uninitializedComponentsProvider._online)):(C("FirestoreClient","Using default OnlineComponentProvider"),await ym(t,new My))),t._onlineComponents}function fk(t){return $y(t).then(e=>e.persistence)}function Fy(t){return $y(t).then(e=>e.localStore)}function pk(t){return uh(t).then(e=>e.remoteStore)}function Uy(t){return uh(t).then(e=>e.syncEngine)}function eL(t){return uh(t).then(e=>e.datastore)}async function Eo(t){const e=await uh(t),n=e.eventManager;return n.onListen=DO.bind(null,e.syncEngine),n.onUnlisten=RO.bind(null,e.syncEngine),n}function tL(t){return t.asyncQueue.enqueue(async()=>{const e=await fk(t),n=await pk(t);return e.setNetworkEnabled(!0),function(r){const i=M(r);return i.vu.delete(0),ou(i)}(n)})}function nL(t){return t.asyncQueue.enqueue(async()=>{const e=await fk(t),n=await pk(t);return e.setNetworkEnabled(!1),async function(r){const i=M(r);i.vu.add(0),await Mo(i),i.bu.set("Offline")}(n)})}function rL(t,e){const n=new nt;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,l){const u=M(a);return u.persistence.runTransaction("read document","readonly",c=>u.localDocuments.getDocument(c,l))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new x(I.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Uo(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await Fy(t),e,n)),n.promise}function mk(t,e,n={}){const r=new nt;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new lh({next:d=>{s.enqueueAndForget(()=>Cy(i,c));const h=d.docs.has(o);!h&&d.fromCache?l.reject(new x(I.UNAVAILABLE,"Failed to get document because the client is offline.")):h&&d.fromCache&&a&&a.source==="server"?l.reject(new x(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),c=new Ay(Po(o.path),u,{includeMetadataChanges:!0,Ku:!0});return xy(i,c)}(await Eo(t),t.asyncQueue,e,n,r)),r.promise}function iL(t,e){const n=new nt;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await ud(r,i,!0),a=new ak(i,o.ir),l=a.sc(o.documents),u=a.applyChanges(l,!1);s.resolve(u.snapshot)}catch(o){const a=Uo(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await Fy(t),e,n)),n.promise}function gk(t,e,n={}){const r=new nt;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new lh({next:d=>{s.enqueueAndForget(()=>Cy(i,c)),d.fromCache&&a.source==="server"?l.reject(new x(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),c=new Ay(o,u,{includeMetadataChanges:!0,Ku:!0});return xy(i,c)}(await Eo(t),t.asyncQueue,e,n,r)),r.promise}function sL(t,e){const n=new lh(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){M(r).ku.add(i),i.next()}(await Eo(t),n)),()=>{n.Dc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){M(r).ku.delete(i)}(await Eo(t),n))}}function oL(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?yT().encode(s):s,function(l,u){return new YO(l,u)}(function(l,u){if(l instanceof Uint8Array)return u1(l,u);if(l instanceof ArrayBuffer)return u1(new Uint8Array(l),u);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,su(e));t.asyncQueue.enqueueAndForget(async()=>{KO(await Uy(t),i,r)})}function aL(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=M(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.qs.getNamedQuery(s,r))}(await Fy(t),e))}/**
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
 */function yk(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const c1=new Map;/**
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
 */function Vy(t,e,n){if(!n)throw new x(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vk(t,e,n,r){if(e===!0&&r===!0)throw new x(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function d1(t){if(!L.isDocumentKey(t))throw new x(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function h1(t){if(L.isDocumentKey(t))throw new x(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ch(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":F()}function ae(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ch(t);throw new x(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function wk(t,e){if(e<=0)throw new x(I.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class f1{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yk((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new x(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new x(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new x(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class au{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new f1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new f1(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new aR;switch(n.type){case"firstParty":return new dR(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=c1.get(e);n&&(C("ComponentProvider","Removing Datastore"),c1.delete(e),n.terminate())}(this),Promise.resolve()}}function lL(t,e,n,r={}){var i;const s=(t=ae(t,au))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&xn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=et.MOCK_USER;else{a=EA(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new x(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new et(u)}t._authCredentials=new lR(new AS(a,l))}}/**
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
 */class Ie{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ie(this.firestore,e,this._key)}}class gt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new gt(this.firestore,e,this._query)}}class Gn extends gt{constructor(e,n,r){super(e,n,Po(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ie(this.firestore,null,new L(e))}withConverter(e){return new Gn(this.firestore,e,this._path)}}function _k(t,e,...n){if(t=W(t),Vy("collection","path",e),t instanceof au){const r=se.fromString(e,...n);return h1(r),new Gn(t,null,r)}{if(!(t instanceof Ie||t instanceof Gn))throw new x(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return h1(r),new Gn(t.firestore,null,r)}}function uL(t,e){if(t=ae(t,au),Vy("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new x(I.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new gt(t,null,function(n){return new gr(se.emptyPath(),n)}(e))}function fd(t,e,...n){if(t=W(t),arguments.length===1&&(e=NS.A()),Vy("doc","path",e),t instanceof au){const r=se.fromString(e,...n);return d1(r),new Ie(t,null,new L(r))}{if(!(t instanceof Ie||t instanceof Gn))throw new x(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return d1(r),new Ie(t.firestore,t instanceof Gn?t.converter:null,new L(r))}}function Ik(t,e){return t=W(t),e=W(e),(t instanceof Ie||t instanceof Gn)&&(e instanceof Ie||e instanceof Gn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function Ek(t,e){return t=W(t),e=W(e),t instanceof gt&&e instanceof gt&&t.firestore===e.firestore&&eu(t._query,e._query)&&t.converter===e.converter}/**
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
 */class cL{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Iy(this,"async_queue_retry"),this.Xc=()=>{const n=mc();n&&C("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=mc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=mc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new nt;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!mi(e))throw e;C("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Ve("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=ky.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&F()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function vm(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class dL{constructor(){this._progressObserver={},this._taskCompletionResolver=new nt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const hL=-1;class Le extends au{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new cL,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Sk(this),this._firestoreClient.terminate()}}function ot(t){return t._firestoreClient||Sk(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Sk(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new zR(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,yk(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new ZO(t._authCredentials,t._appCheckCredentials,t._queue,s),((n=i.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.cache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function fL(t,e){kk(t=ae(t,Le));const n=ot(t);if(n._uninitializedComponentsProvider)throw new x(I.FAILED_PRECONDITION,"SDK cache is already specified.");xn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new My;return Tk(n,i,new dk(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function pL(t){kk(t=ae(t,Le));const e=ot(t);if(e._uninitializedComponentsProvider)throw new x(I.FAILED_PRECONDITION,"SDK cache is already specified.");xn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new My;return Tk(e,r,new QO(r,n.cacheSizeBytes))}function Tk(t,e,n){const r=new nt;return t.asyncQueue.enqueue(async()=>{try{await gc(t,n),await ym(t,e),r.resolve()}catch(i){const s=i;if(!hk(s))throw s;xn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function mL(t){if(t._initialized&&!t._terminated)throw new x(I.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new nt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!_n.D())return Promise.resolve();const r=n+"main";await _n.delete(r)}(vy(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function gL(t){return function(e){const n=new nt;return e.asyncQueue.enqueueAndForget(async()=>$O(await Uy(e),n)),n.promise}(ot(t=ae(t,Le)))}function yL(t){return tL(ot(t=ae(t,Le)))}function vL(t){return nL(ot(t=ae(t,Le)))}function wL(t,e){const n=ot(t=ae(t,Le)),r=new dL;return oL(n,t._databaseId,e,r),r}function _L(t,e){return aL(ot(t=ae(t,Le)),e).then(n=>n?new gt(t,null,n.query):null)}function kk(t){if(t._initialized||t._terminated)throw new x(I.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class Qn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qn(Ye.fromBase64String(e))}catch(n){throw new x(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qn(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class si{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ms{constructor(e){this._methodName=e}}/**
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
 */class dh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
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
 */const IL=/^__.*__$/;class EL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new yr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oo(e,this.data,n,this.fieldTransforms)}}class xk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new yr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ck(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class hh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new hh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return pd(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Ck(this.ca)&&IL.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class SL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||su(e)}ya(e,n,r,i=!1){return new hh({ca:e,methodName:n,ga:r,path:ze.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gs(t){const e=t._freezeSettings(),n=su(t._databaseId);return new SL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fh(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);qy("Data must be an object, but it was:",o,r);const a=Nk(r,o);let l,u;if(s.merge)l=new Bt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=wm(e,d,n);if(!o.contains(h))throw new x(I.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);Rk(c,h)||c.push(h)}l=new Bt(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new EL(new dt(a),l,u)}class lu extends ms{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lu}}function bk(t,e,n){return new hh({ca:3,ga:e.settings.ga,methodName:t._methodName,la:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class zy extends ms{_toFieldTransform(e){return new nu(e.path,new mo)}isEqual(e){return e instanceof zy}}class TL extends ms{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=bk(this,e,!0),r=this.pa.map(s=>ys(s,n)),i=new ns(r);return new nu(e.path,i)}isEqual(e){return this===e}}class kL extends ms{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=bk(this,e,!0),r=this.pa.map(s=>ys(s,n)),i=new rs(r);return new nu(e.path,i)}isEqual(e){return this===e}}class xL extends ms{constructor(e,n){super(e),this.Ia=n}_toFieldTransform(e){const n=new go(e.serializer,lT(e.serializer,this.Ia));return new nu(e.path,n)}isEqual(e){return this===e}}function By(t,e,n,r){const i=t.ya(1,e,n);qy("Data must be an object, but it was:",i,r);const s=[],o=dt.empty();ps(r,(l,u)=>{const c=Wy(e,l,n);u=W(u);const d=i.da(c);if(u instanceof lu)s.push(c);else{const h=ys(u,d);h!=null&&(s.push(c),o.set(c,h))}});const a=new Bt(s);return new xk(o,a,i.fieldTransforms)}function jy(t,e,n,r,i,s){const o=t.ya(1,e,n),a=[wm(e,r,n)],l=[i];if(s.length%2!=0)throw new x(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(wm(e,s[h])),l.push(s[h+1]);const u=[],c=dt.empty();for(let h=a.length-1;h>=0;--h)if(!Rk(u,a[h])){const g=a[h];let v=l[h];v=W(v);const w=o.da(g);if(v instanceof lu)u.push(g);else{const k=ys(v,w);k!=null&&(u.push(g),c.set(g,k))}}const d=new Bt(u);return new xk(c,d,o.fieldTransforms)}function Ak(t,e,n,r=!1){return ys(n,t.ya(r?4:3,e))}function ys(t,e){if(Dk(t=W(t)))return qy("Unsupported field value:",e,t),Nk(t,e);if(t instanceof ms)return function(n,r){if(!Ck(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=ys(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=W(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return lT(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ke.fromDate(n);return{timestampValue:yo(r.serializer,i)}}if(n instanceof ke){const i=new ke(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:yo(r.serializer,i)}}if(n instanceof dh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Qn)return{bytesValue:_T(r.serializer,n._byteString)};if(n instanceof Ie){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:hy(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${ch(n)}`)}(t,e)}function Nk(t,e){const n={};return BS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ps(t,(r,i)=>{const s=ys(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Dk(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof dh||t instanceof Qn||t instanceof Ie||t instanceof ms)}function qy(t,e,n){if(!Dk(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=ch(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function wm(t,e,n){if((e=W(e))instanceof si)return e._internalPath;if(typeof e=="string")return Wy(t,e);throw pd("Field path arguments must be of type string or ",t,!1,void 0,n)}const CL=new RegExp("[~\\*/\\[\\]]");function Wy(t,e,n){if(e.search(CL)>=0)throw pd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new si(...e.split("."))._internalPath}catch{throw pd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new x(I.INVALID_ARGUMENT,a+t+l)}function Rk(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Al{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ph("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bL extends Al{data(){return super.data()}}function ph(t,e){return typeof e=="string"?Wy(t,e):e instanceof si?e._internalPath:e._delegate._internalPath}/**
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
 */function Pk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new x(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gy{}class uu extends Gy{}function xr(t,e,...n){let r=[];e instanceof Gy&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Hy).length,o=i.filter(a=>a instanceof mh).length;if(s>1||s>0&&o>0)throw new x(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class mh extends uu{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new mh(e,n,r)}_apply(e){const n=this._parse(e);return Lk(e._query,n),new gt(e.firestore,e.converter,sm(e._query,n))}_parse(e){const n=gs(e.firestore);return function(i,s,o,a,l,u,c){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new x(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){m1(c,u);const h=[];for(const g of c)h.push(p1(a,i,g));d={arrayValue:{values:h}}}else d=p1(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||m1(c,u),d=Ak(o,s,c,u==="in"||u==="not-in");return ne.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function AL(t,e,n){const r=e,i=ph("where",t);return mh._create(i,r,n)}class Hy extends Gy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Hy(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:de.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)Lk(s,a),s=sm(s,a)}(e._query,n),new gt(e.firestore,e.converter,sm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ky extends uu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ky(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new x(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new x(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Xs(i,s);return function(a,l){if(ry(a)===null){const u=th(a);u!==null&&Mk(a,u,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new gt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new gr(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function NL(t,e="asc"){const n=e,r=ph("orderBy",t);return Ky._create(r,n)}class gh extends uu{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new gh(e,n,r)}_apply(e){return new gt(e.firestore,e.converter,sd(e._query,this._limit,this._limitType))}}function DL(t){return wk("limit",t),gh._create("limit",t,"F")}function RL(t){return wk("limitToLast",t),gh._create("limitToLast",t,"L")}class yh extends uu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new yh(e,n,r)}_apply(e){const n=Ok(e,this.type,this._docOrFields,this._inclusive);return new gt(e.firestore,e.converter,function(r,i){return new gr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function PL(...t){return yh._create("startAt",t,!0)}function OL(...t){return yh._create("startAfter",t,!1)}class vh extends uu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new vh(e,n,r)}_apply(e){const n=Ok(e,this.type,this._docOrFields,this._inclusive);return new gt(e.firestore,e.converter,function(r,i){return new gr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function LL(...t){return vh._create("endBefore",t,!1)}function ML(...t){return vh._create("endAt",t,!0)}function Ok(t,e,n,r){if(n[0]=W(n[0]),n[0]instanceof Al)return function(i,s,o,a,l){if(!a)throw new x(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const c of ji(i))if(c.field.isKeyField())u.push(es(s,a.key));else{const d=a.data.field(c.field);if(eh(d))throw new x(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const h=c.field.canonicalString();throw new x(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${h}' (used as the orderBy) does not exist.`)}u.push(d)}return new ri(u,l)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=gs(t.firestore);return function(s,o,a,l,u,c){const d=s.explicitOrderBy;if(u.length>d.length)throw new x(I.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const h=[];for(let g=0;g<u.length;g++){const v=u[g];if(d[g].field.isKeyField()){if(typeof v!="string")throw new x(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof v}`);if(!iy(s)&&v.indexOf("/")!==-1)throw new x(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${v}' contains a slash.`);const w=s.path.child(se.fromString(v));if(!L.isDocumentKey(w))throw new x(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const k=new L(w);h.push(es(o,k))}else{const w=Ak(a,l,v);h.push(w)}}return new ri(h,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function p1(t,e,n){if(typeof(n=W(n))=="string"){if(n==="")throw new x(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!iy(e)&&n.indexOf("/")!==-1)throw new x(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(se.fromString(n));if(!L.isDocumentKey(r))throw new x(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return es(t,new L(r))}if(n instanceof Ie)return es(t,n._key);throw new x(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ch(n)}.`)}function m1(t,e){if(!Array.isArray(t)||t.length===0)throw new x(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Lk(t,e){if(e.isInequality()){const r=th(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new x(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=ry(t);s!==null&&Mk(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new x(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Mk(t,e,n){if(!n.isEqual(e))throw new x(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Qy{convertValue(e,n="none"){switch(Zi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ei(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw F()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ps(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new dh(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ty(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(El(e));default:return null}}convertTimestamp(e){const n=Zr(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=se.fromString(e);q(NT(r));const i=new ti(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||Ve(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function wh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class $L extends Qy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ie(this.firestore,null,n)}}/**
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
 */class $i{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fr extends Al{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ba(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ph("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ba extends fr{data(e={}){return super.data(e)}}class oi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new $i(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ba(this._firestore,this._userDataWriter,r.key,r,new $i(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Ba(r._firestore,r._userDataWriter,o.doc.key,o.doc,new $i(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ba(r._firestore,r._userDataWriter,o.doc.key,o.doc,new $i(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:FL(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function FL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}function $k(t,e){return t instanceof fr&&e instanceof fr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof oi&&e instanceof oi&&t._firestore===e._firestore&&Ek(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function UL(t){t=ae(t,Ie);const e=ae(t.firestore,Le);return mk(ot(e),t._key).then(n=>Yy(e,t,n))}class vs extends Qy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ie(this.firestore,null,n)}}function VL(t){t=ae(t,Ie);const e=ae(t.firestore,Le),n=ot(e),r=new vs(e);return rL(n,t._key).then(i=>new fr(e,r,t._key,i,new $i(i!==null&&i.hasLocalMutations,!0),t.converter))}function zL(t){t=ae(t,Ie);const e=ae(t.firestore,Le);return mk(ot(e),t._key,{source:"server"}).then(n=>Yy(e,t,n))}function BL(t){t=ae(t,gt);const e=ae(t.firestore,Le),n=ot(e),r=new vs(e);return Pk(t._query),gk(n,t._query).then(i=>new oi(e,r,t,i))}function jL(t){t=ae(t,gt);const e=ae(t.firestore,Le),n=ot(e),r=new vs(e);return iL(n,t._query).then(i=>new oi(e,r,t,i))}function qL(t){t=ae(t,gt);const e=ae(t.firestore,Le),n=ot(e),r=new vs(e);return gk(n,t._query,{source:"server"}).then(i=>new oi(e,r,t,i))}function g1(t,e,n){t=ae(t,Ie);const r=ae(t.firestore,Le),i=wh(t.converter,e,n);return cu(r,[fh(gs(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Te.none())])}function y1(t,e,n,...r){t=ae(t,Ie);const i=ae(t.firestore,Le),s=gs(i);let o;return o=typeof(e=W(e))=="string"||e instanceof si?jy(s,"updateDoc",t._key,e,n,r):By(s,"updateDoc",t._key,e),cu(i,[o.toMutation(t._key,Te.exists(!0))])}function WL(t){return cu(ae(t.firestore,Le),[new Lo(t._key,Te.none())])}function GL(t,e){const n=ae(t.firestore,Le),r=fd(t),i=wh(t.converter,e);return cu(n,[fh(gs(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Te.exists(!1))]).then(()=>r)}function Fk(t,...e){var n,r,i;t=W(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||vm(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(vm(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,u,c;if(t instanceof Ie)u=ae(t.firestore,Le),c=Po(t._key.path),l={next:d=>{e[o]&&e[o](Yy(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=ae(t,gt);u=ae(d.firestore,Le),c=d._query;const h=new vs(u);l={next:g=>{e[o]&&e[o](new oi(u,h,d,g))},error:e[o+1],complete:e[o+2]},Pk(t._query)}return function(d,h,g,v){const w=new lh(v),k=new Ay(h,w,g);return d.asyncQueue.enqueueAndForget(async()=>xy(await Eo(d),k)),()=>{w.Dc(),d.asyncQueue.enqueueAndForget(async()=>Cy(await Eo(d),k))}}(ot(u),c,a,l)}function HL(t,e){return sL(ot(t=ae(t,Le)),vm(e)?e:{next:e})}function cu(t,e){return function(n,r){const i=new nt;return n.asyncQueue.enqueueAndForget(async()=>PO(await Uy(n),r,i)),i.promise}(ot(t),e)}function Yy(t,e,n){const r=n.docs.get(e._key),i=new vs(t);return new fr(t,i,e._key,r,new $i(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const KL={maxAttempts:5};/**
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
 */class QL{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=gs(e)}set(e,n,r){this._verifyNotCommitted();const i=Pr(e,this._firestore),s=wh(i.converter,n,r),o=fh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Te.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Pr(e,this._firestore);let o;return o=typeof(n=W(n))=="string"||n instanceof si?jy(this._dataReader,"WriteBatch.update",s._key,n,r,i):By(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Te.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Pr(e,this._firestore);return this._mutations=this._mutations.concat(new Lo(n._key,Te.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new x(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Pr(t,e){if((t=W(t)).firestore!==e)throw new x(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class YL extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=gs(e)}get(e){const n=Pr(e,this._firestore),r=new $L(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return F();const s=i[0];if(s.isFoundDocument())return new Al(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new Al(this._firestore,r,n._key,null,n.converter);throw F()})}set(e,n,r){const i=Pr(e,this._firestore),s=wh(i.converter,n,r),o=fh(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=Pr(e,this._firestore);let o;return o=typeof(n=W(n))=="string"||n instanceof si?jy(this._dataReader,"Transaction.update",s._key,n,r,i):By(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=Pr(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Pr(e,this._firestore),r=new vs(this._firestore);return super.get(e).then(i=>new fr(this._firestore,r,n._key,i._document,new $i(!1,!1),n.converter))}}function XL(t,e,n){t=ae(t,Le);const r=Object.assign(Object.assign({},KL),n);return function(i){if(i.maxAttempts<1)throw new x(I.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new nt;return i.asyncQueue.enqueueAndForget(async()=>{const l=await eL(i);new JO(i.asyncQueue,l,o,s,a).run()}),a.promise}(ot(t),i=>e(new YL(t,i)),r)}/**
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
 */function JL(){return new lu("deleteField")}function ZL(){return new zy("serverTimestamp")}function eM(...t){return new TL("arrayUnion",t)}function tM(...t){return new kL("arrayRemove",t)}function nM(t){return new xL("increment",t)}(function(t,e=!0){(function(n){Ro=n})(di),Xr(new Hn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Le(new uR(n.getProvider("auth-internal")),new fR(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new x(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ti(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),qn(hw,"3.13.0",t),qn(hw,"3.13.0","esm2017")})();const rM="@firebase/firestore-compat",iM="0.3.12";/**
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
 */function Xy(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new x("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function v1(){if(typeof Uint8Array>"u")throw new x("unimplemented","Uint8Arrays are not available in this environment.")}function w1(){if(!UR())throw new x("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Nl{constructor(e){this._delegate=e}static fromBase64String(e){return w1(),new Nl(Qn.fromBase64String(e))}static fromUint8Array(e){return v1(),new Nl(Qn.fromUint8Array(e))}toBase64(){return w1(),this._delegate.toBase64()}toUint8Array(){return v1(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function _m(t){return sM(t,["next","error","complete"])}function sM(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class oM{enableIndexedDbPersistence(e,n){return fL(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return pL(e._delegate)}clearIndexedDbPersistence(e){return mL(e._delegate)}}class Uk{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ti||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&xn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){lL(this._delegate,e,n,r)}enableNetwork(){return yL(this._delegate)}disableNetwork(){return vL(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,vk("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return gL(this._delegate)}onSnapshotsInSync(e){return HL(this._delegate,e)}get app(){if(!this._appCompat)throw new x("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new So(this,_k(this._delegate,e))}catch(n){throw bt(n,"collection()","Firestore.collection()")}}doc(e){try{return new un(this,fd(this._delegate,e))}catch(n){throw bt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Ct(this,uL(this._delegate,e))}catch(n){throw bt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return XL(this._delegate,n=>e(new Vk(this,n)))}batch(){return ot(this._delegate),new zk(new QL(this._delegate,e=>cu(this._delegate,e)))}loadBundle(e){return wL(this._delegate,e)}namedQuery(e){return _L(this._delegate,e).then(n=>n?new Ct(this,n):null)}}class _h extends Qy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nl(new Qn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return un.forKey(n,this.firestore,null)}}function aM(t){sR(t)}class Vk{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new _h(e)}get(e){const n=Fi(e);return this._delegate.get(n).then(r=>new Dl(this._firestore,new fr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Fi(e);return r?(Xy("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Fi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Fi(e);return this._delegate.delete(n),this}}class zk{constructor(e){this._delegate=e}set(e,n,r){const i=Fi(e);return r?(Xy("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Fi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Fi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class as{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Ba(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Rl(this._firestore,r),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=as.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new as(e,new _h(e),n),i.set(n,s)),s}}as.INSTANCES=new WeakMap;class un{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new _h(e)}static forPath(e,n,r){if(e.length%2!==0)throw new x("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new un(n,new Ie(n._delegate,r,new L(e)))}static forKey(e,n,r){return new un(n,new Ie(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new So(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new So(this.firestore,_k(this._delegate,e))}catch(n){throw bt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=W(e),e instanceof Ie?Ik(this._delegate,e):!1}set(e,n){n=Xy("DocumentReference.set",n);try{return n?g1(this._delegate,e,n):g1(this._delegate,e)}catch(r){throw bt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?y1(this._delegate,e):y1(this._delegate,e,n,...r)}catch(i){throw bt(i,"updateDoc()","DocumentReference.update()")}}delete(){return WL(this._delegate)}onSnapshot(...e){const n=Bk(e),r=jk(e,i=>new Dl(this.firestore,new fr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return Fk(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=VL(this._delegate):(e==null?void 0:e.source)==="server"?n=zL(this._delegate):n=UL(this._delegate),n.then(r=>new Dl(this.firestore,new fr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new un(this.firestore,e?this._delegate.withConverter(as.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function bt(t,e,n){return t.message=t.message.replace(e,n),t}function Bk(t){for(const e of t)if(typeof e=="object"&&!_m(e))return e;return{}}function jk(t,e){var n,r;let i;return _m(t[0])?i=t[0]:_m(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Dl{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new un(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return $k(this._delegate,e._delegate)}}class Rl extends Dl{data(e){const n=this._delegate.data(e);return oR(n!==void 0),n}}class Ct{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new _h(e)}where(e,n,r){try{return new Ct(this.firestore,xr(this._delegate,AL(e,n,r)))}catch(i){throw bt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Ct(this.firestore,xr(this._delegate,NL(e,n)))}catch(r){throw bt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Ct(this.firestore,xr(this._delegate,DL(e)))}catch(n){throw bt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Ct(this.firestore,xr(this._delegate,RL(e)))}catch(n){throw bt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Ct(this.firestore,xr(this._delegate,PL(...e)))}catch(n){throw bt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Ct(this.firestore,xr(this._delegate,OL(...e)))}catch(n){throw bt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Ct(this.firestore,xr(this._delegate,LL(...e)))}catch(n){throw bt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Ct(this.firestore,xr(this._delegate,ML(...e)))}catch(n){throw bt(n,"endAt()","Query.endAt()")}}isEqual(e){return Ek(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=jL(this._delegate):(e==null?void 0:e.source)==="server"?n=qL(this._delegate):n=BL(this._delegate),n.then(r=>new Im(this.firestore,new oi(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=Bk(e),r=jk(e,i=>new Im(this.firestore,new oi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return Fk(this._delegate,n,r)}withConverter(e){return new Ct(this.firestore,e?this._delegate.withConverter(as.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class lM{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Rl(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Im{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Ct(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Rl(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new lM(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Rl(this._firestore,r))})}isEqual(e){return $k(this._delegate,e._delegate)}}class So extends Ct{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new un(this.firestore,e):null}doc(e){try{return e===void 0?new un(this.firestore,fd(this._delegate)):new un(this.firestore,fd(this._delegate,e))}catch(n){throw bt(n,"doc()","CollectionReference.doc()")}}add(e){return GL(this._delegate,e).then(n=>new un(this.firestore,n))}isEqual(e){return Ik(this._delegate,e._delegate)}withConverter(e){return new So(this.firestore,e?this._delegate.withConverter(as.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Fi(t){return ae(t,Ie)}/**
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
 */class Jy{constructor(...e){this._delegate=new si(...e)}static documentId(){return new Jy(ze.keyField().canonicalString())}isEqual(e){return e=W(e),e instanceof si?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class Di{constructor(e){this._delegate=e}static serverTimestamp(){const e=ZL();return e._methodName="FieldValue.serverTimestamp",new Di(e)}static delete(){const e=JL();return e._methodName="FieldValue.delete",new Di(e)}static arrayUnion(...e){const n=eM(...e);return n._methodName="FieldValue.arrayUnion",new Di(n)}static arrayRemove(...e){const n=tM(...e);return n._methodName="FieldValue.arrayRemove",new Di(n)}static increment(e){const n=nM(e);return n._methodName="FieldValue.increment",new Di(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const uM={Firestore:Uk,GeoPoint:dh,Timestamp:ke,Blob:Nl,Transaction:Vk,WriteBatch:zk,DocumentReference:un,DocumentSnapshot:Dl,Query:Ct,QueryDocumentSnapshot:Rl,QuerySnapshot:Im,CollectionReference:So,FieldPath:Jy,FieldValue:Di,setLogLevel:aM,CACHE_SIZE_UNLIMITED:hL};function cM(t,e){t.INTERNAL.registerComponent(new Hn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},uM)))}/**
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
 */function dM(t){cM(t,(e,n)=>new Uk(e,n,new oM)),t.registerVersion(rM,iM)}dM(ct);function Zy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const ha={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},ks={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function hM(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function qk(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fM=hM,pM=qk,Wk=new hs("auth","Firebase",qk());/**
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
 */const md=new $d("@firebase/auth");function mM(t,...e){md.logLevel<=ie.WARN&&md.warn(`Auth (${di}): ${t}`,...e)}function yc(t,...e){md.logLevel<=ie.ERROR&&md.error(`Auth (${di}): ${t}`,...e)}/**
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
 */function yt(t,...e){throw ev(t,...e)}function pt(t,...e){return ev(t,...e)}function Gk(t,e,n){const r=Object.assign(Object.assign({},pM()),{[e]:n});return new hs("auth","Firebase",r).create(e,{appName:t.name})}function Vo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&yt(t,"argument-error"),Gk(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ev(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Wk.create(t,...e)}function N(t,e,...n){if(!t)throw ev(e,...n)}function zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yc(e),new Error(e)}function Cn(t,e){t||zn(e)}/**
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
 */function Pl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tv(){return _1()==="http:"||_1()==="https:"}function _1(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function gM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tv()||fE()||"connection"in navigator)?navigator.onLine:!0}function yM(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class du{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cn(n>e,"Short delay should be less than long delay!"),this.isMobile=SA()||xg()}get(){return gM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function nv(t,e){Cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Hk{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const vM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const wM=new du(3e4,6e4);function He(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xe(t,e,n,r,i={}){return Kk(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ao(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Hk.fetch()(Qk(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Kk(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},vM),e);try{const i=new _M(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw xa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw xa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw xa(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Gk(t,c,u);yt(t,c)}}catch(i){if(i instanceof Dt)throw i;yt(t,"network-request-failed",{message:String(i)})}}async function wr(t,e,n,r,i={}){const s=await Xe(t,e,n,r,i);return"mfaPendingCredential"in s&&yt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Qk(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?nv(t.config,i):`${t.config.apiScheme}://${i}`}class _M{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pt(this.auth,"network-request-failed")),wM.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=pt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function IM(t,e){return Xe(t,"POST","/v1/accounts:delete",e)}async function EM(t,e){return Xe(t,"POST","/v1/accounts:update",e)}async function SM(t,e){return Xe(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ja(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TM(t,e=!1){const n=W(t),r=await n.getIdToken(e),i=Ih(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ja(Nf(i.auth_time)),issuedAtTime:ja(Nf(i.iat)),expirationTime:ja(Nf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Nf(t){return Number(t)*1e3}function Ih(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return yc("JWT malformed, contained fewer than 3 sections"),null;try{const i=dE(n);return i?JSON.parse(i):(yc("Failed to decode base64 JWT payload"),null)}catch(i){return yc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function kM(t){const e=Ih(t);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function pr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dt&&xM(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function xM({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class CM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Yk{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ja(this.lastLoginAt),this.creationTime=ja(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ol(t){var e;const n=t.auth,r=await t.getIdToken(),i=await pr(t,SM(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?NM(s.providerUserInfo):[],a=AM(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Yk(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function bM(t){const e=W(t);await Ol(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AM(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function NM(t){return t.map(e=>{var{providerId:n}=e,r=Zy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function DM(t,e){const n=await Kk(t,{},async()=>{const r=Ao({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Qk(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Hk.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ll{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kM(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return N(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await DM(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ll;return r&&(N(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(N(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ll,this.toJSON())}_performRefresh(){return zn("not implemented")}}/**
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
 */function Cr(t,e){N(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Zy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new CM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Yk(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await pr(this,this.stsTokenManager.getToken(this.auth,e));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TM(this,e)}reload(){return bM(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ol(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await pr(this,IM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:E,isAnonymous:T,providerData:b,stsTokenManager:P}=n;N(y&&P,e,"internal-error");const U=Ll.fromJSON(this.name,P);N(typeof y=="string",e,"internal-error"),Cr(d,e.name),Cr(h,e.name),N(typeof E=="boolean",e,"internal-error"),N(typeof T=="boolean",e,"internal-error"),Cr(g,e.name),Cr(v,e.name),Cr(w,e.name),Cr(k,e.name),Cr(p,e.name),Cr(f,e.name);const le=new qi({uid:y,auth:e,email:h,emailVerified:E,displayName:d,isAnonymous:T,photoURL:v,phoneNumber:g,tenantId:w,stsTokenManager:U,createdAt:p,lastLoginAt:f});return b&&Array.isArray(b)&&(le.providerData=b.map(Z=>Object.assign({},Z))),k&&(le._redirectEventId=k),le}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ll;i.updateFromServerResponse(n);const s=new qi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ol(s),s}}/**
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
 */const I1=new Map;function Xt(t){Cn(t instanceof Function,"Expected a class definition");let e=I1.get(t);return e?(Cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,I1.set(t,e),e)}/**
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
 */class Xk{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Xk.type="NONE";const To=Xk;/**
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
 */function Wi(t,e,n){return`firebase:${t}:${e}:${n}`}class Zs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Wi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Wi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zs(Xt(To),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Xt(To);const o=Wi(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=qi._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Zs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Zs(s,e,r))}}/**
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
 */function E1(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ex(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jk(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tx(e))return"Blackberry";if(nx(e))return"Webos";if(rv(e))return"Safari";if((e.includes("chrome/")||Zk(e))&&!e.includes("edge/"))return"Chrome";if(hu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jk(t=Ae()){return/firefox\//i.test(t)}function rv(t=Ae()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zk(t=Ae()){return/crios\//i.test(t)}function ex(t=Ae()){return/iemobile/i.test(t)}function hu(t=Ae()){return/android/i.test(t)}function tx(t=Ae()){return/blackberry/i.test(t)}function nx(t=Ae()){return/webos/i.test(t)}function zo(t=Ae()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function RM(t=Ae()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function PM(t=Ae()){var e;return zo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function OM(){return pE()&&document.documentMode===10}function rx(t=Ae()){return zo(t)||hu(t)||nx(t)||tx(t)||/windows phone/i.test(t)||ex(t)}function LM(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ix(t,e=[]){let n;switch(t){case"Browser":n=E1(Ae());break;case"Worker":n=`${E1(Ae())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${di}/${r}`}/**
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
 */async function MM(t){return(await Xe(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function sx(t,e){return Xe(t,"GET","/v2/recaptchaConfig",He(t,e))}/**
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
 */function S1(t){return t!==void 0&&t.getResponse!==void 0}function T1(t){return t!==void 0&&t.enterprise!==void 0}class ox{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function $M(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function iv(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=pt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",$M().appendChild(r)})}function ax(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const FM="https://www.google.com/recaptcha/enterprise.js?render=",UM="recaptcha-enterprise",VM="NO_RECAPTCHA";class lx{constructor(e){this.type=UM,this.auth=je(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{sx(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new ox(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;T1(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(VM)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&T1(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}iv(FM+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function ai(t,e,n,r=!1){const i=new lx(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class zM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class BM{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new k1(this),this.idTokenSubscription=new k1(this),this.beforeStateQueue=new zM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wk,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Zs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ol(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?W(e):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(e))})}async initializeRecaptchaConfig(){const e=await sx(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new ox(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new lx(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xt(e)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await Zs.create(this,[Xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return N(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ix(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&mM(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function je(t){return W(t)}class k1{constructor(e){this.auth=e,this.observer=null,this.addObserver=mE(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function jM(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function qM(t,e,n){const r=je(t);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=ux(e),{host:o,port:a}=WM(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||GM()}function ux(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function WM(t){const e=ux(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:x1(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:x1(o)}}}function x1(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function GM(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Bo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zn("not implemented")}_getIdTokenResponse(e){return zn("not implemented")}_linkToIdToken(e,n){return zn("not implemented")}_getReauthenticationResolver(e){return zn("not implemented")}}/**
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
 */async function cx(t,e){return Xe(t,"POST","/v1/accounts:resetPassword",He(t,e))}async function dx(t,e){return Xe(t,"POST","/v1/accounts:update",e)}async function HM(t,e){return Xe(t,"POST","/v1/accounts:update",He(t,e))}/**
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
 */async function Df(t,e){return wr(t,"POST","/v1/accounts:signInWithPassword",He(t,e))}async function Eh(t,e){return Xe(t,"POST","/v1/accounts:sendOobCode",He(t,e))}async function KM(t,e){return Eh(t,e)}async function Rf(t,e){return Eh(t,e)}async function Pf(t,e){return Eh(t,e)}async function QM(t,e){return Eh(t,e)}/**
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
 */async function YM(t,e){return wr(t,"POST","/v1/accounts:signInWithEmailLink",He(t,e))}async function XM(t,e){return wr(t,"POST","/v1/accounts:signInWithEmailLink",He(t,e))}/**
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
 */class Ml extends Bo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ml(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ml(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await ai(e,r,"signInWithPassword");return Df(e,i)}else return Df(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await ai(e,r,"signInWithPassword");return Df(e,s)}else return Promise.reject(i)});case"emailLink":return YM(e,{email:this._email,oobCode:this._password});default:yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return dx(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return XM(e,{idToken:n,email:this._email,oobCode:this._password});default:yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ar(t,e){return wr(t,"POST","/v1/accounts:signInWithIdp",He(t,e))}/**
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
 */const JM="http://localhost";class Yn extends Bo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Zy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ar(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ar(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ar(e,n)}buildRequest(){const e={requestUri:JM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ao(n)}return e}}/**
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
 */async function ZM(t,e){return Xe(t,"POST","/v1/accounts:sendVerificationCode",He(t,e))}async function e$(t,e){return wr(t,"POST","/v1/accounts:signInWithPhoneNumber",He(t,e))}async function t$(t,e){const n=await wr(t,"POST","/v1/accounts:signInWithPhoneNumber",He(t,e));if(n.temporaryProof)throw xa(t,"account-exists-with-different-credential",n);return n}const n$={USER_NOT_FOUND:"user-not-found"};async function r$(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return wr(t,"POST","/v1/accounts:signInWithPhoneNumber",He(t,n),n$)}/**
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
 */class Gi extends Bo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Gi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Gi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return e$(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return t$(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return r$(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Gi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function i$(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function s$(t){const e=zs(_a(t)).link,n=e?zs(_a(e)).deep_link_id:null,r=zs(_a(t)).deep_link_id;return(r?zs(_a(r)).link:null)||r||n||e||t}class Sh{constructor(e){var n,r,i,s,o,a;const l=zs(_a(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=i$((i=l.mode)!==null&&i!==void 0?i:null);N(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=s$(e);try{return new Sh(n)}catch{return null}}}/**
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
 */class vi{constructor(){this.providerId=vi.PROVIDER_ID}static credential(e,n){return Ml._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Sh.parseLink(n);return N(r,"argument-error"),Ml._fromEmailAndCode(e,r.code,r.tenantId)}}vi.PROVIDER_ID="password";vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class _r{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jo extends _r{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class eo extends jo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return N("providerId"in n&&"signInMethod"in n,"argument-error"),Yn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return N(e.idToken||e.accessToken,"argument-error"),Yn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return eo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return eo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new eo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Pn extends jo{constructor(){super("facebook.com")}static credential(e){return Yn._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pn.PROVIDER_ID="facebook.com";/**
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
 */class On extends jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yn._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return On.credential(n,r)}catch{return null}}}On.GOOGLE_SIGN_IN_METHOD="google.com";On.PROVIDER_ID="google.com";/**
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
 */class Ln extends jo{constructor(){super("github.com")}static credential(e){return Yn._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.GITHUB_SIGN_IN_METHOD="github.com";Ln.PROVIDER_ID="github.com";/**
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
 */const o$="http://localhost";class ko extends Bo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return ar(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ar(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ar(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new ko(r,s)}static _create(e,n){return new ko(e,n)}buildRequest(){return{requestUri:o$,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const a$="saml.";class gd extends _r{constructor(e){N(e.startsWith(a$),"argument-error"),super(e)}static credentialFromResult(e){return gd.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return gd.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=ko.fromJSON(e);return N(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return ko._create(r,n)}catch{return null}}}/**
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
 */class Mn extends jo{constructor(){super("twitter.com")}static credential(e,n){return Yn._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
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
 */async function vc(t,e){return wr(t,"POST","/v1/accounts:signUp",He(t,e))}/**
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
 */class fn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await qi._fromIdTokenResponse(e,r,i),o=C1(r);return new fn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=C1(r);return new fn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function C1(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function l$(t){var e;const n=je(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new fn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await vc(n,{returnSecureToken:!0}),i=await fn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class yd extends Dt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,yd.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new yd(e,n,r,i)}}function hx(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?yd._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function fx(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function u$(t,e){const n=W(t);await Th(!0,n,e);const{providerUserInfo:r}=await EM(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=fx(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function sv(t,e,n=!1){const r=await pr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fn._forOperation(t,"link",r)}async function Th(t,e,n){await Ol(e);const r=fx(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";N(r.has(n)===t,e.auth,i)}/**
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
 */async function px(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await pr(t,hx(r,i,e,t),n);N(s.idToken,r,"internal-error");const o=Ih(s.idToken);N(o,r,"internal-error");const{sub:a}=o;return N(t.uid===a,r,"user-mismatch"),fn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&yt(r,"user-mismatch"),s}}/**
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
 */async function mx(t,e,n=!1){const r="signIn",i=await hx(t,r,e),s=await fn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function kh(t,e){return mx(je(t),e)}async function gx(t,e){const n=W(t);return await Th(!1,n,e.providerId),sv(n,e)}async function yx(t,e){return px(W(t),e)}/**
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
 */async function c$(t,e){return wr(t,"POST","/v1/accounts:signInWithCustomToken",He(t,e))}/**
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
 */async function d$(t,e){const n=je(t),r=await c$(n,{token:e,returnSecureToken:!0}),i=await fn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class fu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?ov._fromServerResponse(e,n):"totpInfo"in n?av._fromServerResponse(e,n):yt(e,"internal-error")}}class ov extends fu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new ov(n)}}class av extends fu{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new av(n)}}/**
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
 */function to(t,e,n){var r;N(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),N(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(N(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(N(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function h$(t,e,n){var r;const i=je(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await ai(i,s,"getOobCode",!0);n&&to(i,o,n),await Rf(i,o)}else n&&to(i,s,n),await Rf(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await ai(i,s,"getOobCode",!0);n&&to(i,a,n),await Rf(i,a)}else return Promise.reject(o)})}async function f$(t,e,n){await cx(W(t),{oobCode:e,newPassword:n})}async function p$(t,e){await HM(W(t),{oobCode:e})}async function vx(t,e){const n=W(t),r=await cx(n,{oobCode:e}),i=r.requestType;switch(N(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":N(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":N(r.mfaInfo,n,"internal-error");default:N(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=fu._fromServerResponse(je(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function m$(t,e){const{data:n}=await vx(W(t),e);return n.email}async function g$(t,e,n){var r;const i=je(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await ai(i,s,"signUpPassword");o=vc(i,u)}else o=vc(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await ai(i,s,"signUpPassword");return vc(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await fn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function y$(t,e,n){return kh(W(t),vi.credential(e,n))}/**
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
 */async function v$(t,e,n){var r;const i=je(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,l){N(l.handleCodeInApp,i,"argument-error"),l&&to(i,a,l)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await ai(i,s,"getOobCode",!0);o(a,n),await Pf(i,a)}else o(s,n),await Pf(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const l=await ai(i,s,"getOobCode",!0);o(l,n),await Pf(i,l)}else return Promise.reject(a)})}function w$(t,e){const n=Sh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function _$(t,e,n){const r=W(t),i=vi.credentialWithLink(e,n||Pl());return N(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),kh(r,i)}/**
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
 */async function I$(t,e){return Xe(t,"POST","/v1/accounts:createAuthUri",He(t,e))}/**
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
 */async function E$(t,e){const n=tv()?Pl():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await I$(W(t),r);return i||[]}async function S$(t,e){const n=W(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&to(n.auth,i,e);const{email:s}=await KM(n.auth,i);s!==t.email&&await t.reload()}async function T$(t,e,n){const r=W(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&to(r.auth,s,n);const{email:o}=await QM(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function k$(t,e){return Xe(t,"POST","/v1/accounts:update",e)}/**
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
 */async function x$(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=W(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await pr(r,k$(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function C$(t,e){return wx(W(t),e,null)}function b$(t,e){return wx(W(t),null,e)}async function wx(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await pr(t,dx(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function A$(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=Ih(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new no(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new N$(s,i);case"github.com":return new D$(s,i);case"google.com":return new R$(s,i);case"twitter.com":return new P$(s,i,t.screenName||null);case"custom":case"anonymous":return new no(s,null);default:return new no(s,r,i)}}class no{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class _x extends no{constructor(e,n,r,i){super(e,n,r),this.username=i}}class N$ extends no{constructor(e,n){super(e,"facebook.com",n)}}class D$ extends _x{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class R$ extends no{constructor(e,n){super(e,"google.com",n)}}class P$ extends _x{constructor(e,n,r){super(e,"twitter.com",n,r)}}function O$(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:A$(n)}class Ui{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new Ui("enroll",e,n)}static _fromMfaPendingCredential(e){return new Ui("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Ui._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Ui._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class lv{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=je(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>fu._fromServerResponse(r,a));N(i.mfaPendingCredential,r,"internal-error");const o=Ui._fromMfaPendingCredential(i.mfaPendingCredential);return new lv(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await fn._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return N(n.user,r,"internal-error"),fn._forOperation(n.user,n.operationType,u);default:yt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function L$(t,e){var n;const r=W(t),i=e;return N(e.customData.operationType,r,"argument-error"),N((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),lv._fromError(r,i)}/**
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
 */function M$(t,e){return Xe(t,"POST","/v2/accounts/mfaEnrollment:start",He(t,e))}function $$(t,e){return Xe(t,"POST","/v2/accounts/mfaEnrollment:finalize",He(t,e))}function F$(t,e){return Xe(t,"POST","/v2/accounts/mfaEnrollment:withdraw",He(t,e))}class uv{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>fu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new uv(e)}async getSession(){return Ui._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await pr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await pr(this.user,F$(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Of=new WeakMap;function U$(t){const e=W(t);return Of.has(e)||Of.set(e,uv._fromUser(e)),Of.get(e)}const vd="__sak";/**
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
 */class Ix{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vd,"1"),this.storage.removeItem(vd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function V$(){const t=Ae();return rv(t)||zo(t)}const z$=1e3,B$=10;class Ex extends Ix{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=V$()&&LM(),this.fallbackToPolling=rx(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);OM()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,B$):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},z$)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ex.type="LOCAL";const cv=Ex;/**
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
 */class Sx extends Ix{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Sx.type="SESSION";const ls=Sx;/**
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
 */function j$(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class xh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new xh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await j$(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xh.receivers=[];/**
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
 */function pu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class q${constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=pu("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function We(){return window}function W$(t){We().location.href=t}/**
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
 */function dv(){return typeof We().WorkerGlobalScope<"u"&&typeof We().importScripts=="function"}async function G$(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function H$(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function K$(){return dv()?self:null}/**
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
 */const Tx="firebaseLocalStorageDb",Q$=1,wd="firebaseLocalStorage",kx="fbase_key";class mu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ch(t,e){return t.transaction([wd],e?"readwrite":"readonly").objectStore(wd)}function Y$(){const t=indexedDB.deleteDatabase(Tx);return new mu(t).toPromise()}function Em(){const t=indexedDB.open(Tx,Q$);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wd,{keyPath:kx})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wd)?e(r):(r.close(),await Y$(),e(await Em()))})})}async function b1(t,e,n){const r=Ch(t,!0).put({[kx]:e,value:n});return new mu(r).toPromise()}async function X$(t,e){const n=Ch(t,!1).get(e),r=await new mu(n).toPromise();return r===void 0?null:r.value}function A1(t,e){const n=Ch(t,!0).delete(e);return new mu(n).toPromise()}const J$=800,Z$=3;class xx{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Em(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Z$)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xh._getInstance(K$()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await G$(),!this.activeServiceWorker)return;this.sender=new q$(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||H$()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Em();return await b1(e,vd,"1"),await A1(e,vd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>b1(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>X$(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>A1(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ch(i,!1).getAll();return new mu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),J$)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xx.type="LOCAL";const $l=xx;/**
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
 */function e4(t,e){return Xe(t,"POST","/v2/accounts/mfaSignIn:start",He(t,e))}function t4(t,e){return Xe(t,"POST","/v2/accounts/mfaSignIn:finalize",He(t,e))}/**
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
 */const n4=500,r4=6e4,Yu=1e12;class i4{constructor(e){this.auth=e,this.counter=Yu,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new s4(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Yu;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Yu;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Yu;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class s4{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;N(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=o4(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},r4)},n4))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function o4(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Lf=ax("rcb"),a4=new du(3e4,6e4),l4="https://www.google.com/recaptcha/api.js?";class u4{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=We().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return N(c4(n),e,"argument-error"),this.shouldResolveImmediately(n)&&S1(We().grecaptcha)?Promise.resolve(We().grecaptcha):new Promise((r,i)=>{const s=We().setTimeout(()=>{i(pt(e,"network-request-failed"))},a4.get());We()[Lf]=()=>{We().clearTimeout(s),delete We()[Lf];const a=We().grecaptcha;if(!a||!S1(a)){i(pt(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const d=l(u,c);return this.counter++,d},this.hostLanguage=n,r(a)};const o=`${l4}?${Ao({onload:Lf,render:"explicit",hl:n})}`;iv(o).catch(()=>{clearTimeout(s),i(pt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=We().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function c4(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class d4{async load(e){return new i4(e)}clearedOneInstance(){}}/**
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
 */const Cx="recaptcha",h4={theme:"light",type:"image"};class f4{constructor(e,n=Object.assign({},h4),r){this.parameters=n,this.type=Cx,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=je(r),this.isInvisible=this.parameters.size==="invisible",N(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;N(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new d4:new u4,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){N(!this.parameters.sitekey,this.auth,"argument-error"),N(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),N(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=We()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){N(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){N(tv()&&!dv(),this.auth,"internal-error"),await p4(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await MM(this.auth);N(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return N(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function p4(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class hv{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Gi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function m4(t,e,n){const r=je(t),i=await bh(r,e,W(n));return new hv(i,s=>kh(r,s))}async function g4(t,e,n){const r=W(t);await Th(!1,r,"phone");const i=await bh(r.auth,e,W(n));return new hv(i,s=>gx(r,s))}async function y4(t,e,n){const r=W(t),i=await bh(r.auth,e,W(n));return new hv(i,s=>yx(r,s))}async function bh(t,e,n){var r;const i=await n.verify();try{N(typeof i=="string",t,"argument-error"),N(n.type===Cx,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return N(o.type==="enroll",t,"internal-error"),(await M$(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{N(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return N(a,t,"missing-multi-factor-info"),(await e4(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await ZM(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function v4(t,e){await sv(W(t),e)}/**
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
 */class Sn{constructor(e){this.providerId=Sn.PROVIDER_ID,this.auth=je(e)}verifyPhoneNumber(e,n){return bh(this.auth,e,W(n))}static credential(e,n){return Gi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Sn.credentialFromTaggedObject(n)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Gi._fromTokenResponse(n,r):null}}Sn.PROVIDER_ID="phone";Sn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function ws(t,e){return e?Xt(e):(N(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class fv extends Bo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ar(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ar(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ar(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function w4(t){return mx(t.auth,new fv(t),t.bypassAuthState)}function _4(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),px(n,new fv(t),t.bypassAuthState)}async function I4(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),sv(n,new fv(t),t.bypassAuthState)}/**
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
 */class bx{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return w4;case"linkViaPopup":case"linkViaRedirect":return I4;case"reauthViaPopup":case"reauthViaRedirect":return _4;default:yt(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const E4=new du(2e3,1e4);async function S4(t,e,n){const r=je(t);Vo(t,e,_r);const i=ws(r,n);return new rr(r,"signInViaPopup",e,i).executeNotNull()}async function T4(t,e,n){const r=W(t);Vo(r.auth,e,_r);const i=ws(r.auth,n);return new rr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function k4(t,e,n){const r=W(t);Vo(r.auth,e,_r);const i=ws(r.auth,n);return new rr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class rr extends bx{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,rr.currentPopupAction&&rr.currentPopupAction.cancel(),rr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=pu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,E4.get())};e()}}rr.currentPopupAction=null;/**
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
 */const x4="pendingRedirect",qa=new Map;class C4 extends bx{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=qa.get(this.auth._key());if(!e){try{const r=await b4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}qa.set(this.auth._key(),e)}return this.bypassAuthState||qa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function b4(t,e){const n=Nx(e),r=Ax(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function pv(t,e){return Ax(t)._set(Nx(e),"true")}function A4(){qa.clear()}function mv(t,e){qa.set(t._key(),e)}function Ax(t){return Xt(t._redirectPersistence)}function Nx(t){return Wi(x4,t.config.apiKey,t.name)}/**
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
 */function N4(t,e,n){return D4(t,e,n)}async function D4(t,e,n){const r=je(t);Vo(t,e,_r),await r._initializationPromise;const i=ws(r,n);return await pv(i,r),i._openRedirect(r,e,"signInViaRedirect")}function R4(t,e,n){return P4(t,e,n)}async function P4(t,e,n){const r=W(t);Vo(r.auth,e,_r),await r.auth._initializationPromise;const i=ws(r.auth,n);await pv(i,r.auth);const s=await Dx(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function O4(t,e,n){return L4(t,e,n)}async function L4(t,e,n){const r=W(t);Vo(r.auth,e,_r),await r.auth._initializationPromise;const i=ws(r.auth,n);await Th(!1,r,e.providerId),await pv(i,r.auth);const s=await Dx(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function M4(t,e){return await je(t)._initializationPromise,Ah(t,e,!1)}async function Ah(t,e,n=!1){const r=je(t),i=ws(r,e),o=await new C4(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Dx(t){const e=pu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const $4=10*60*1e3;class Rx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!F4(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Px(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$4&&this.cachedEventUids.clear(),this.cachedEventUids.has(N1(e))}saveEventToCache(e){this.cachedEventUids.add(N1(e)),this.lastProcessedEventTime=Date.now()}}function N1(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Px({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function F4(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Px(t);default:return!1}}/**
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
 */async function Ox(t,e={}){return Xe(t,"GET","/v1/projects",e)}/**
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
 */const U4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,V4=/^https?/;async function z4(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ox(t);for(const n of e)try{if(B4(n))return}catch{}yt(t,"unauthorized-domain")}function B4(t){const e=Pl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!V4.test(n))return!1;if(U4.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const j4=new du(3e4,6e4);function D1(){const t=We().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function q4(t){return new Promise((e,n)=>{var r,i,s;function o(){D1(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{D1(),n(pt(t,"network-request-failed"))},timeout:j4.get()})}if(!((i=(r=We().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=We().gapi)===null||s===void 0)&&s.load)o();else{const a=ax("iframefcb");return We()[a]=()=>{gapi.load?o():n(pt(t,"network-request-failed"))},iv(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw wc=null,e})}let wc=null;function W4(t){return wc=wc||q4(t),wc}/**
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
 */const G4=new du(5e3,15e3),H4="__/auth/iframe",K4="emulator/auth/iframe",Q4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Y4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function X4(t){const e=t.config;N(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nv(e,K4):`https://${t.config.authDomain}/${H4}`,r={apiKey:e.apiKey,appName:t.name,v:di},i=Y4.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ao(r).slice(1)}`}async function J4(t){const e=await W4(t),n=We().gapi;return N(n,t,"internal-error"),e.open({where:document.body,url:X4(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Q4,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=pt(t,"network-request-failed"),a=We().setTimeout(()=>{s(o)},G4.get());function l(){We().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Z4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eF=500,tF=600,nF="_blank",rF="http://localhost";class R1{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iF(t,e,n,r=eF,i=tF){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Z4),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ae().toLowerCase();n&&(a=Zk(u)?nF:n),Jk(u)&&(e=e||rF,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[g,v])=>`${h}${g}=${v},`,"");if(PM(u)&&a!=="_self")return sF(e||"",a),new R1(null);const d=window.open(e||"",a,c);N(d,t,"popup-blocked");try{d.focus()}catch{}return new R1(d)}function sF(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const oF="__/auth/handler",aF="emulator/auth/handler",lF=encodeURIComponent("fac");async function Sm(t,e,n,r,i,s){N(t.config.authDomain,t,"auth-domain-config-required"),N(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:di,eventId:i};if(e instanceof _r){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",NA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof jo){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${lF}=${encodeURIComponent(l)}`:"";return`${uF(t)}?${Ao(a).slice(1)}${u}`}function uF({config:t}){return t.emulator?nv(t,aF):`https://${t.authDomain}/${oF}`}/**
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
 */const Mf="webStorageSupport";class cF{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ls,this._completeRedirectFn=Ah,this._overrideRedirectResult=mv}async _openPopup(e,n,r,i){var s;Cn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Sm(e,n,r,Pl(),i);return iF(e,o,pu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Sm(e,n,r,Pl(),i);return W$(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Cn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await J4(e),r=new Rx(e);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mf,{type:Mf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Mf];o!==void 0&&n(!!o),yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=z4(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rx()||rv()||zo()}}const dF=cF;class hF{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return zn("unexpected MultiFactorSessionType")}}}class gv extends hF{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new gv(e)}_finalizeEnroll(e,n,r){return $$(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return t4(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Lx{constructor(){}static assertion(e){return gv._fromCredential(e)}}Lx.FACTOR_ID="phone";var P1="@firebase/auth",O1="0.23.2";/**
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
 */class fF{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function pF(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mF(t){Xr(new Hn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;N(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ix(t)},u=new BM(r,i,s,l);return jM(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xr(new Hn("auth-internal",e=>{const n=je(e.getProvider("auth").getImmediate());return(r=>new fF(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qn(P1,O1,pF(t)),qn(P1,O1,"esm2017")}/**
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
 */const gF=5*60;_A("authIdTokenMaxAge");mF("Browser");/**
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
 */function us(){return window}/**
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
 */const yF=2e3;async function vF(t,e,n){var r;const{BuildInfo:i}=us();Cn(e.sessionId,"AuthEvent did not contain a session ID");const s=await SF(e.sessionId),o={};return zo()?o.ibi=i.packageName:hu()?o.apn=i.packageName:yt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Sm(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function wF(t){const{BuildInfo:e}=us(),n={};zo()?n.iosBundleId=e.packageName:hu()?n.androidPackageName=e.packageName:yt(t,"operation-not-supported-in-this-environment"),await Ox(t,n)}function _F(t){const{cordova:e}=us();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,RM()?"_blank":"_system","location=yes"),n(i)})})}async function IF(t,e,n){const{cordova:r}=us();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var d;s();const h=(d=r.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof h=="function"&&h(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(pt(t,"redirect-cancelled-by-user"))},yF))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),hu()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function EF(t){var e,n,r,i,s,o,a,l,u,c;const d=us();N(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),N(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),N(typeof((s=(i=(r=d==null?void 0:d.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((l=(a=(o=d==null?void 0:d.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((c=(u=d==null?void 0:d.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function SF(t){const e=TF(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function TF(t){if(Cn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const kF=20;class xF extends Rx{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function CF(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:NF(),postBody:null,tenantId:t.tenantId,error:pt(t,"no-auth-event")}}function bF(t,e){return Tm()._set(km(t),e)}async function L1(t){const e=await Tm()._get(km(t));return e&&await Tm()._remove(km(t)),e}function AF(t,e){var n,r;const i=RF(e);if(i.includes("/__/auth/callback")){const s=_c(i),o=s.firebaseError?DF(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?pt(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function NF(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<kF;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Tm(){return Xt(cv)}function km(t){return Wi("authEvent",t.config.apiKey,t.name)}function DF(t){try{return JSON.parse(t)}catch{return null}}function RF(t){const e=_c(t),n=e.link?decodeURIComponent(e.link):void 0,r=_c(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return _c(i).link||i||r||n||t}function _c(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return zs(n.join("?"))}/**
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
 */const PF=500;class OF{constructor(){this._redirectPersistence=ls,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Ah,this._overrideRedirectResult=mv}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new xF(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){yt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){EF(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),A4(),await this._originValidation(e);const o=CF(e,r,i);await bF(e,o);const a=await vF(e,o,n),l=await _F(a);return IF(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wF(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=us(),o=setTimeout(async()=>{await L1(e),n.onEvent(M1())},PF),a=async c=>{clearTimeout(o);const d=await L1(e);let h=null;d&&(c==null?void 0:c.url)&&(h=AF(d,c.url)),n.onEvent(h||M1())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;us().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(d){console.error(d)}}}}const LF=OF;function M1(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:pt("no-auth-event")}}/**
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
 */function MF(t,e){je(t)._logFramework(e)}var $F="@firebase/auth-compat",FF="0.4.2";/**
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
 */const UF=1e3;function Wa(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function VF(){return Wa()==="http:"||Wa()==="https:"}function Mx(t=Ae()){return!!((Wa()==="file:"||Wa()==="ionic:"||Wa()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function zF(){return xg()||kg()}function BF(){return pE()&&(document==null?void 0:document.documentMode)===11}function jF(t=Ae()){return/Edge\/\d+/.test(t)}function qF(t=Ae()){return BF()||jF(t)}function $x(){try{const t=self.localStorage,e=pu();if(t)return t.setItem(e,"1"),t.removeItem(e),qF()?ul():!0}catch{return yv()&&ul()}return!1}function yv(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function $f(){return(VF()||fE()||Mx())&&!zF()&&$x()&&!yv()}function Fx(){return Mx()&&typeof document<"u"}async function WF(){return Fx()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},UF);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function GF(){return typeof window<"u"?window:null}/**
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
 */const Qt={LOCAL:"local",NONE:"none",SESSION:"session"},fa=N,Ux="persistence";function HF(t,e){if(fa(Object.values(Qt).includes(e),t,"invalid-persistence-type"),xg()){fa(e!==Qt.SESSION,t,"unsupported-persistence-type");return}if(kg()){fa(e===Qt.NONE,t,"unsupported-persistence-type");return}if(yv()){fa(e===Qt.NONE||e===Qt.LOCAL&&ul(),t,"unsupported-persistence-type");return}fa(e===Qt.NONE||$x(),t,"unsupported-persistence-type")}async function xm(t){await t._initializationPromise;const e=Vx(),n=Wi(Ux,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function KF(t,e){const n=Vx();if(!n)return[];const r=Wi(Ux,t,e);switch(n.getItem(r)){case Qt.NONE:return[To];case Qt.LOCAL:return[$l,ls];case Qt.SESSION:return[ls];default:return[]}}function Vx(){var t;try{return((t=GF())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const QF=N;class $r{constructor(){this.browserResolver=Xt(dF),this.cordovaResolver=Xt(LF),this.underlyingResolver=null,this._redirectPersistence=ls,this._completeRedirectFn=Ah,this._overrideRedirectResult=mv}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Fx()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return QF(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await WF();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function zx(t){return t.unwrap()}function YF(t){return t.wrapped()}/**
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
 */function XF(t){return Bx(t)}function JF(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new ZF(t,L$(t,e))}else if(r){const i=Bx(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Bx(t){const{_tokenResponse:e}=t instanceof Dt?t.customData:t;if(!e)return null;if(!(t instanceof Dt)&&"temporaryProof"in e&&"phoneNumber"in e)return Sn.credentialFromResult(t);const n=e.providerId;if(!n||n===ha.PASSWORD)return null;let r;switch(n){case ha.GOOGLE:r=On;break;case ha.FACEBOOK:r=Pn;break;case ha.GITHUB:r=Ln;break;case ha.TWITTER:r=Mn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?ko._create(n,a):Yn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new eo(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof Dt?r.credentialFromError(t):r.credentialFromResult(t)}function Ft(t,e){return e.catch(n=>{throw n instanceof Dt&&JF(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:XF(n),additionalUserInfo:O$(n),user:ir.getOrCreate(i)}})}async function Cm(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Ft(t,n.confirm(r))}}class ZF{constructor(e,n){this.resolver=n,this.auth=YF(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ft(zx(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class ir{constructor(e){this._delegate=e,this.multiFactor=U$(e)}static getOrCreate(e){return ir.USER_MAP.has(e)||ir.USER_MAP.set(e,new ir(e)),ir.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ft(this.auth,gx(this._delegate,e))}async linkWithPhoneNumber(e,n){return Cm(this.auth,g4(this._delegate,e,n))}async linkWithPopup(e){return Ft(this.auth,k4(this._delegate,e,$r))}async linkWithRedirect(e){return await xm(je(this.auth)),O4(this._delegate,e,$r)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ft(this.auth,yx(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Cm(this.auth,y4(this._delegate,e,n))}reauthenticateWithPopup(e){return Ft(this.auth,T4(this._delegate,e,$r))}async reauthenticateWithRedirect(e){return await xm(je(this.auth)),R4(this._delegate,e,$r)}sendEmailVerification(e){return S$(this._delegate,e)}async unlink(e){return await u$(this._delegate,e),this}updateEmail(e){return C$(this._delegate,e)}updatePassword(e){return b$(this._delegate,e)}updatePhoneNumber(e){return v4(this._delegate,e)}updateProfile(e){return x$(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return T$(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}ir.USER_MAP=new WeakMap;/**
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
 */const pa=N;class bm{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;pa(r,"invalid-api-key",{appName:e.name}),pa(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?$r:void 0;this._delegate=n.initialize({options:{persistence:eU(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(fM),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ir.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){qM(this._delegate,e,n)}applyActionCode(e){return p$(this._delegate,e)}checkActionCode(e){return vx(this._delegate,e)}confirmPasswordReset(e,n){return f$(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Ft(this._delegate,g$(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return E$(this._delegate,e)}isSignInWithEmailLink(e){return w$(this._delegate,e)}async getRedirectResult(){pa($f(),this._delegate,"operation-not-supported-in-this-environment");const e=await M4(this._delegate,$r);return e?Ft(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){MF(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=$1(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=$1(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return v$(this._delegate,e,n)}sendPasswordResetEmail(e,n){return h$(this._delegate,e,n||void 0)}async setPersistence(e){HF(this._delegate,e);let n;switch(e){case Qt.SESSION:n=ls;break;case Qt.LOCAL:n=await Xt($l)._isAvailable()?$l:cv;break;case Qt.NONE:n=To;break;default:return yt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ft(this._delegate,l$(this._delegate))}signInWithCredential(e){return Ft(this._delegate,kh(this._delegate,e))}signInWithCustomToken(e){return Ft(this._delegate,d$(this._delegate,e))}signInWithEmailAndPassword(e,n){return Ft(this._delegate,y$(this._delegate,e,n))}signInWithEmailLink(e,n){return Ft(this._delegate,_$(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Cm(this._delegate,m4(this._delegate,e,n))}async signInWithPopup(e){return pa($f(),this._delegate,"operation-not-supported-in-this-environment"),Ft(this._delegate,S4(this._delegate,e,$r))}async signInWithRedirect(e){return pa($f(),this._delegate,"operation-not-supported-in-this-environment"),await xm(this._delegate),N4(this._delegate,e,$r)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return m$(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}bm.Persistence=Qt;function $1(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&ir.getOrCreate(o)),error:e,complete:n}}function eU(t,e){const n=KF(t,e);if(typeof self<"u"&&!n.includes($l)&&n.push($l),typeof window<"u")for(const r of[cv,ls])n.includes(r)||n.push(r);return n.includes(To)||n.push(To),n}/**
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
 */class vv{constructor(){this.providerId="phone",this._delegate=new Sn(zx(ct.auth()))}static credential(e,n){return Sn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}vv.PHONE_SIGN_IN_METHOD=Sn.PHONE_SIGN_IN_METHOD;vv.PROVIDER_ID=Sn.PROVIDER_ID;/**
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
 */const tU=N;class nU{constructor(e,n,r=ct.app()){var i;tU((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new f4(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const rU="auth-compat";function iU(t){t.INTERNAL.registerComponent(new Hn(rU,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new bm(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ks.EMAIL_SIGNIN,PASSWORD_RESET:ks.PASSWORD_RESET,RECOVER_EMAIL:ks.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ks.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ks.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ks.VERIFY_EMAIL}},EmailAuthProvider:vi,FacebookAuthProvider:Pn,GithubAuthProvider:Ln,GoogleAuthProvider:On,OAuthProvider:eo,SAMLAuthProvider:gd,PhoneAuthProvider:vv,PhoneMultiFactorGenerator:Lx,RecaptchaVerifier:nU,TwitterAuthProvider:Mn,Auth:bm,AuthCredential:Bo,Error:Dt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion($F,FF)}iU(ct);let ee=null,Me=null;function jx(t){ct.apps.length?ee=ct.firestore():(ct.initializeApp(t),ee=ct.firestore(),ee.settings({cacheSizeBytes:ct.firestore.CACHE_SIZE_UNLIMITED,merge:!0}),ee.enablePersistence({synchronizeTabs:!0}).catch(()=>{}))}async function sU(t,e){Me=(await ct.auth().signInWithEmailAndPassword(t,e)).user.uid}const qx={url:"https://diegomottadev.github.io/gymlog/",handleCodeInApp:!1};async function oU(t,e){const n=await ct.auth().createUserWithEmailAndPassword(t,e);return Me=n.user.uid,await n.user.sendEmailVerification(qx),n.user}async function aU(){const t=ct.auth().currentUser;t&&!t.emailVerified&&await t.sendEmailVerification(qx)}async function lU(){const t=ct.auth().currentUser;return t?(await t.reload(),ct.auth().currentUser):null}async function wv(){await ct.auth().signOut(),Me=null}function uU(t){ct.auth().onAuthStateChanged(t)}function cU(t){Me=t}async function dU(){if(!ee||!Me)return null;try{const t=await ee.collection("users").doc(Me).get();return t.exists?t.data():null}catch(t){return console.error("fbLoad",t),null}}function hU(t){return JSON.parse(JSON.stringify(t))}async function Ff(t){if(!(!ee||!Me))try{await ee.collection("users").doc(Me).set(hU(t),{merge:!0})}catch(e){console.error("fbSave",e)}}async function F1(t,e={}){!ee||!Me||await ee.collection("users").doc(Me).set({role:t,profile:e},{merge:!0})}async function U1(){if(!ee||!Me)return"athlete";try{const t=await ee.collection("users").doc(Me).get();return t.exists&&t.data().role?t.data().role:"athlete"}catch(t){return console.error("fbLoadUserRole",t),"athlete"}}async function fU(){if(!ee||!Me)return null;try{const t=await ee.collection("users").doc(Me).get();return t.exists&&t.data().profile||null}catch(t){return console.error("fbLoadUserProfile",t),null}}async function tV(t){!ee||!Me||await ee.collection("users").doc(Me).set({profile:t},{merge:!0})}async function pU(t){if(!ee){const r=await Lt(()=>Promise.resolve().then(()=>lA),void 0).then(i=>i.FIREBASE_CONFIG);jx(r)}const e=t.email.replace(/[^a-zA-Z0-9]/g,"_");if((await ee.collection("trainerRequests").doc(e).get()).exists)throw new Error("Ya existe una solicitud con este email.");await ee.collection("trainerRequests").doc(e).set({...t,status:"pending",createdAt:new Date().toISOString()})}async function Wx(){if(!ee||!Me)return null;try{const t=await ee.collection("trainerRequests").doc(Me).get();return t.exists?t.data():null}catch(t){return console.error("fbLoadTrainerRequest",t),null}}async function nV(){if(!ee)return[];try{return(await ee.collection("trainerRequests").where("status","==","pending").get()).docs.map(e=>({id:e.id,...e.data()}))}catch(t){return console.error("fbLoadPendingRequests",t),[]}}async function rV(t){!ee||await ee.collection("trainerRequests").doc(t).update({status:"rejected"})}async function mU(t){if(!ee||!Me)return;const e=t.id?ee.collection("sharedObjectives").doc(t.id):ee.collection("sharedObjectives").doc(),n={trainerId:Me,trainerEmail:t.trainerEmail,studentEmail:t.studentEmail,objective:t.objective,updatedAt:new Date().toISOString()};return t.studentProfile&&(n.studentProfile=t.studentProfile),t.id||(n.createdAt=new Date().toISOString()),await e.set(n,{merge:!0}),e.id}async function V1(){if(!ee||!Me)return[];try{return(await ee.collection("sharedObjectives").where("trainerId","==",Me).get()).docs.map(e=>({id:e.id,...e.data()}))}catch(t){return console.error("fbLoadSharedByTrainer",t),[]}}async function z1(t){if(!ee)return[];try{return(await ee.collection("sharedObjectives").where("studentEmail","==",t).get()).docs.map(n=>({id:n.id,...n.data()}))}catch(e){return console.error("fbLoadSharedByStudent",e),[]}}async function gU(t,e){!ee||await ee.collection("sharedObjectives").doc(t).update({objective:e,updatedAt:new Date().toISOString()})}async function yU(t){!ee||await ee.collection("sharedObjectives").doc(t).delete()}async function iV(t,e,n){if(!ee)return null;const r=ee.collection("sharedObjectives").doc(t),i=await r.get();if(!i.exists)return null;const o=i.data().completions||[],a=new Date,l=a.getDay(),u=l===0?6:l-1,c=new Date(a);c.setDate(a.getDate()-u),c.setHours(12,0,0,0);const d=new Date(c.getFullYear(),c.getMonth(),c.getDate()+6,12,0,0),h=p=>String(p).padStart(2,"0"),g=`${c.getFullYear()}-${h(c.getMonth()+1)}-${h(c.getDate())}`,v=`${d.getFullYear()}-${h(d.getMonth()+1)}-${h(d.getDate())}`,w=o.find(p=>p.dayIndex===e&&p.date>=g&&p.date<=v);let k;if(w)k=o.filter(p=>p.id!==w.id);else{const p=Math.random().toString(36).slice(2,9)+Date.now().toString(36).slice(-4);k=[...o,{id:p,dayIndex:e,date:n,completedAt:new Date().toISOString()}]}return await r.update({completions:k}),k}async function sV(){return"Notification"in window?await Notification.requestPermission():"denied"}function vU(t,e){"Notification"in window&&Notification.permission==="granted"&&new Notification(t,{body:e,icon:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>\u{1F4AA}</text></svg>"})}var Nh={exports:{}},Dh={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wU=D.exports,_U=Symbol.for("react.element"),IU=Symbol.for("react.fragment"),EU=Object.prototype.hasOwnProperty,SU=wU.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,TU={key:!0,ref:!0,__self:!0,__source:!0};function Gx(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)EU.call(e,r)&&!TU.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:_U,type:t,key:s,ref:o,props:i,_owner:SU.current}}Dh.Fragment=IU;Dh.jsx=Gx;Dh.jsxs=Gx;(function(t){t.exports=Dh})(Nh);const B1=Nh.exports.Fragment,m=Nh.exports.jsx,O=Nh.exports.jsxs,kU=["diegomottadev@gmail.com","diegomotta18@gmail.com"];function xU({subscription:t,role:e,email:n,currentView:r,onRenew:i,onLogout:s}){const[o,a]=D.exports.useState(!1);if(D.exports.useEffect(()=>{r!=="premium"&&o&&a(!1)},[r]),o||e==="admin"||n&&kU.includes(n.toLowerCase())||!t||t.status==="none")return null;let l;{let T;if(t.status==="trial")T=t.trialEnd;else if(t.status==="active")T=t.currentPeriodEnd;else if(t.status==="expired")T=t.currentPeriodEnd||t.trialEnd;else return null;if(!T)return null;const b=new Date,P=T instanceof Date?T:new Date(T!=null&&T.seconds?T.seconds*1e3:T);l=Math.ceil((P-b)/(1e3*60*60*24))}let u=null;if(l<=0?u="expired":l<=1?u="urgent":l<=3&&(u="warning"),!u||o)return null;const c=u==="expired",h={warning:{icon:"\u26A0\uFE0F",title:"Tu suscripci\xF3n vence pronto",message:`Te quedan ${l} d\xEDa${l!==1?"s":""}. Renov\xE1 a tiempo para no perder el acceso.`,borderColor:`${B}88`,renewLabel:"Renovar ahora"},urgent:{icon:"\u{1F534}",title:"\xA1\xDAltimo d\xEDa de suscripci\xF3n!",message:"Tu acceso se desactiva hoy. Renov\xE1 ahora para seguir entrenando sin interrupciones.",borderColor:B,renewLabel:"Renovar ahora"},expired:{icon:"\u{1F6AB}",title:"Suscripci\xF3n vencida",message:"Tu suscripci\xF3n expir\xF3. Para seguir usando Gym Tracker, renov\xE1la desde ac\xE1.",borderColor:S.danger,renewLabel:"Renovar suscripci\xF3n"}}[u],g={position:"fixed",inset:0,background:"rgba(0,0,0,.85)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center"},v={background:S.card,borderRadius:20,padding:"32px 24px",maxWidth:400,width:"100%",border:`1px solid ${h.borderColor}`},w={fontSize:48,textAlign:"center",marginBottom:12},k={fontSize:20,fontWeight:800,marginBottom:8,textAlign:"center",color:"#fff"},p={fontSize:14,color:"#ccc",textAlign:"center",marginBottom:24,lineHeight:1.5},f={width:"100%",padding:14,borderRadius:14,background:B,color:"#111",fontWeight:700,fontSize:15,border:"none",cursor:"pointer"},y={width:"100%",marginTop:10,padding:12,background:"transparent",border:`1px solid ${S.border}`,borderRadius:14,color:S.muted,fontSize:13,cursor:"pointer"},E={marginTop:16,textAlign:"center",color:S.muted,fontSize:13,cursor:"pointer"};return m("div",{style:g,onClick:c?void 0:()=>a(!0),children:O("div",{style:v,onClick:T=>T.stopPropagation(),children:[m("div",{style:w,children:h.icon}),m("div",{style:k,children:h.title}),m("div",{style:p,children:h.message}),m("button",{style:f,onClick:()=>{a(!0),i()},children:h.renewLabel}),!c&&m("button",{style:y,onClick:()=>a(!0),children:"Despues"}),c&&m("div",{style:E,onClick:s,children:"Cerrar sesion"})]})})}function CU({size:t=90}){return O("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[m("style",{children:`
        @keyframes bicep-curl {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-55deg); }
        }
        .bicep-forearm {
          animation: bicep-curl 1.2s ease-in-out infinite;
          transform-origin: 50px 58px;
        }
      `}),O("svg",{viewBox:"-10 -30 140 140",width:t,height:t,overflow:"visible",children:[m("path",{d:"M6 60 C6 50, 16 45, 28 48 L50 54 C52 55, 52 62, 50 63 L28 66 C16 67, 6 66, 6 60Z",fill:"#FFBD4F"}),m("ellipse",{cx:"32",cy:"52",rx:"9",ry:"4.5",fill:"#E8A230",opacity:"0.4"}),O("g",{className:"bicep-forearm",children:[m("path",{d:"M50 54 C55 50, 62 44, 68 36 L72 28 C74 24, 78 24, 78 28 L76 42 C73 52, 62 62, 50 63Z",fill:"#FFBD4F"}),m("rect",{x:"56",y:"20",width:"34",height:"4",rx:"2",fill:"#999"}),m("circle",{cx:"56",cy:"22",r:"9",fill:"#555",stroke:"#666",strokeWidth:"1.2"}),m("circle",{cx:"56",cy:"22",r:"6",fill:"#4a4a4a"}),m("circle",{cx:"56",cy:"22",r:"2.5",fill:"#555"}),m("circle",{cx:"90",cy:"22",r:"9",fill:"#555",stroke:"#666",strokeWidth:"1.2"}),m("circle",{cx:"90",cy:"22",r:"6",fill:"#4a4a4a"}),m("circle",{cx:"90",cy:"22",r:"2.5",fill:"#555"}),m("rect",{x:"67",y:"18",width:"12",height:"12",rx:"3",fill:"#D4912A"}),m("rect",{x:"67",y:"16",width:"3.5",height:"10",rx:"1.8",fill:"#FFBD4F"}),m("rect",{x:"71",y:"15.5",width:"3.5",height:"11",rx:"1.8",fill:"#FFBD4F"}),m("rect",{x:"75",y:"16",width:"3.5",height:"10",rx:"1.8",fill:"#FFBD4F"}),m("rect",{x:"79",y:"17",width:"3",height:"9",rx:"1.5",fill:"#FFBD4F"}),m("circle",{cx:"68.7",cy:"26",r:"2",fill:"#E8A230"}),m("circle",{cx:"72.7",cy:"26.5",r:"2",fill:"#E8A230"}),m("circle",{cx:"76.7",cy:"26",r:"2",fill:"#E8A230"}),m("circle",{cx:"80.5",cy:"26",r:"1.8",fill:"#E8A230"}),m("ellipse",{cx:"66.5",cy:"24",rx:"3",ry:"2.2",fill:"#FFBD4F"})]})]}),m("div",{style:{fontSize:15,color:"#bbb"},children:"Cargando..."})]})}const bU=[{icon:Pb,title:"Lleg\xE1s al gym y no sab\xE9s qu\xE9 te toca",desc:"Improvis\xE1s ejercicios, perd\xE9s tiempo mirando el celular y no segu\xEDs ning\xFAn plan real.",solution:"Tu rutina del d\xEDa lista al abrir la app. Sin pensar."},{icon:tA,title:"No sab\xE9s si est\xE1s progresando",desc:"Sin registro de pesos, series ni repeticiones. Sent\xEDs que est\xE1s estancado hace meses.",solution:"Historial completo con estad\xEDsticas semanales de tu progreso."},{icon:Hb,title:"La rutina se pierde en WhatsApp",desc:"Tu entrenador te la manda por mensaje y ten\xE9s que scrollear 200 chats para encontrarla.",solution:"Tu entrenador carga la rutina directo en tu app. Siempre actualizada."},{icon:aA,title:"Empez\xE1s motivado y a las 2 semanas abandon\xE1s",desc:"Sin seguimiento, sin recordatorios. Nadie te empuja. La motivaci\xF3n se esfuma.",solution:"Frases motivacionales diarias, recordatorios y calendario de completaci\xF3n."},{icon:bb,title:"Us\xE1s 3 apps y ninguna es simple",desc:"Apps complicadas, llenas de funciones in\xFAtiles, con publicidad que interrumpe.",solution:"Una sola app. Simple. Sin publicidad. Todo en un lugar."}],AU=[{icon:uc,title:"Calendario semanal",desc:"Visualiz\xE1 tu semana completa y marc\xE1 cada d\xEDa como completado."},{icon:tE,title:"Rutinas personalizadas",desc:"Cre\xE1 tus propias rutinas o recibilas de tu entrenador."},{icon:wa,title:"Estad\xEDsticas claras",desc:"Tu progreso en n\xFAmeros: series, repeticiones, peso, adherencia."},{icon:nE,title:"Conexi\xF3n con tu entrenador",desc:"Tu coach edita tu rutina y vos la ves al instante."},{icon:Db,title:"Recordatorios",desc:"Notificaciones para que no te saltees ning\xFAn d\xEDa."},{icon:Qb,title:"Motivaci\xF3n diaria",desc:"Frases de los mejores culturistas para arrancar cada d\xEDa."}],NU=[{q:"\xBFEs gratis?",a:"Ten\xE9s 3 d\xEDas de prueba gratuita con acceso a todas las funcionalidades. Despu\xE9s pod\xE9s elegir un plan mensual accesible."},{q:"\xBFFunciona sin internet?",a:"S\xED. La app guarda tus datos localmente y sincroniza cuando ten\xE9s conexi\xF3n."},{q:"\xBFMi entrenador puede usarla?",a:"S\xED. Hay un plan especial para entrenadores donde pueden gestionar las rutinas de todos sus alumnos."},{q:"\xBFPuedo usarla en cualquier celular?",a:"S\xED. Es una app web progresiva (PWA) que funciona en cualquier navegador. Pod\xE9s instalarla como app desde el men\xFA del navegador."},{q:"\xBFMis datos est\xE1n seguros?",a:"Tus datos se guardan encriptados en Firebase (Google Cloud). Solo vos ten\xE9s acceso a tu cuenta."}];function DU({q:t,a:e}){const[n,r]=D.exports.useState(!1);return O("div",{style:{borderBottom:`1px solid ${S.border}`},children:[O("button",{onClick:()=>r(!n),style:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"16px 0",background:"none",border:"none",color:S.text,cursor:"pointer",fontSize:15,fontWeight:600,textAlign:"left"},children:[t,n?m(Ub,{size:18,color:S.muted}):m($b,{size:18,color:S.muted})]}),n&&m("div",{style:{fontSize:14,color:S.sub,paddingBottom:16,lineHeight:1.6},children:e})]})}function RU({onStart:t}){const[e,n]=D.exports.useState(null),[r,i]=D.exports.useState(!1),[s,o]=D.exports.useState(!1),a=/iPad|iPhone|iPod/.test(navigator.userAgent);D.exports.useEffect(()=>{const u=c=>{c.preventDefault(),n(c)};return window.addEventListener("beforeinstallprompt",u),window.addEventListener("appinstalled",()=>i(!0)),window.matchMedia("(display-mode: standalone)").matches&&i(!0),()=>window.removeEventListener("beforeinstallprompt",u)},[]);const l=async()=>{if(!e)return;e.prompt(),(await e.userChoice).outcome==="accepted"&&i(!0),n(null)};return O("div",{style:{background:S.bg,color:S.text,fontFamily:S.font,overflowX:"hidden"},children:[O("section",{style:{maxWidth:480,margin:"0 auto",padding:"48px 24px 40px",textAlign:"center"},children:[m("div",{style:{display:"flex",justifyContent:"center",marginBottom:24},children:m("div",{style:{background:`${B}15`,borderRadius:12,padding:16},children:m(tE,{size:40,color:B})})}),m("div",{style:{fontSize:11,color:B,letterSpacing:"3px",fontWeight:700,marginBottom:12},children:"GYM TRACKER"}),O("h1",{style:{fontSize:32,fontWeight:900,lineHeight:1.2,marginBottom:16},children:["Dej\xE1 de improvisar.",m("br",{}),m("span",{style:{color:B},children:"Empez\xE1 a progresar."})]}),m("p",{style:{fontSize:16,color:S.sub,lineHeight:1.6,marginBottom:32,maxWidth:360,margin:"0 auto 32px"},children:"La app m\xE1s simple para organizar tus rutinas, registrar tu progreso y no faltar nunca m\xE1s al gym."}),O("button",{onClick:t,style:{display:"inline-flex",alignItems:"center",gap:8,background:B,color:"#111",border:"none",borderRadius:12,padding:"16px 32px",fontSize:17,fontWeight:800,cursor:"pointer",boxShadow:`0 0 30px ${B}33`},children:["Prob\xE1 gratis 3 d\xEDas ",m(U0,{size:18})]}),m("div",{style:{fontSize:12,color:S.muted,marginTop:12},children:"Sin tarjeta. Sin compromiso."}),!r&&O("button",{onClick:()=>{e?l():o(!0)},style:{display:"inline-flex",alignItems:"center",gap:8,marginTop:16,background:"transparent",color:B,border:`1px solid ${B}55`,borderRadius:12,padding:"12px 24px",fontSize:14,fontWeight:700,cursor:"pointer"},children:[m(jb,{size:16})," Descargar app"]}),r&&m("div",{style:{marginTop:16,fontSize:13,color:B,fontWeight:600},children:"\u2713 App instalada"})]}),O("section",{style:{maxWidth:480,margin:"0 auto",padding:"0 24px 48px"},children:[m("div",{style:{fontSize:11,color:B,letterSpacing:"2px",fontWeight:700,marginBottom:8},children:"\xBFTE PASA ESTO?"}),m("h2",{style:{fontSize:24,fontWeight:800,marginBottom:32},children:"5 se\xF1ales de que necesit\xE1s GymTracker"}),bU.map((u,c)=>m("div",{style:{marginBottom:24,padding:20,background:S.card,borderRadius:12,border:`1px solid ${S.border}`},children:O("div",{style:{display:"flex",alignItems:"flex-start",gap:16},children:[m("div",{style:{background:`${B}15`,borderRadius:10,padding:10,flexShrink:0},children:m(u.icon,{size:22,color:B})}),O("div",{children:[m("div",{style:{fontSize:16,fontWeight:700,marginBottom:6},children:u.title}),m("div",{style:{fontSize:14,color:S.sub,lineHeight:1.5,marginBottom:10},children:u.desc}),O("div",{style:{fontSize:13,color:B,fontWeight:600},children:["\u2192 ",u.solution]})]})]})},c))]}),O("section",{style:{maxWidth:480,margin:"0 auto",padding:"0 24px 48px"},children:[m("div",{style:{fontSize:11,color:B,letterSpacing:"2px",fontWeight:700,marginBottom:8},children:"FUNCIONALIDADES"}),m("h2",{style:{fontSize:24,fontWeight:800,marginBottom:32},children:"Todo lo que necesit\xE1s, nada que no"}),m("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:AU.map((u,c)=>O("div",{style:{padding:16,background:S.card,borderRadius:12,border:`1px solid ${S.border}`},children:[m(u.icon,{size:24,color:B,style:{marginBottom:10}}),m("div",{style:{fontSize:14,fontWeight:700,marginBottom:4},children:u.title}),m("div",{style:{fontSize:12,color:S.sub,lineHeight:1.4},children:u.desc})]},c))})]}),m("section",{style:{maxWidth:480,margin:"0 auto",padding:"0 24px 48px",textAlign:"center"},children:O("div",{style:{display:"flex",justifyContent:"center",gap:32},children:[O("div",{children:[m("div",{style:{fontSize:32,fontWeight:900,color:B,fontFamily:"monospace"},children:"7"}),m("div",{style:{fontSize:12,color:S.sub},children:"D\xEDas de la semana cubiertos"})]}),m("div",{style:{width:1,background:S.border}}),O("div",{children:[m("div",{style:{fontSize:32,fontWeight:900,color:B,fontFamily:"monospace"},children:"0"}),m("div",{style:{fontSize:12,color:S.sub},children:"Publicidad"})]})]})}),O("section",{style:{maxWidth:480,margin:"0 auto",padding:"0 24px 48px"},children:[m("div",{style:{fontSize:11,color:B,letterSpacing:"2px",fontWeight:700,marginBottom:8},children:"PLANES"}),m("h2",{style:{fontSize:24,fontWeight:800,marginBottom:32},children:"Simple y accesible"}),O("div",{style:{padding:24,background:`${B}10`,borderRadius:12,border:`2px solid ${B}`,marginBottom:16},children:[O("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[O("div",{children:[m("div",{style:{fontSize:18,fontWeight:800},children:"Trial Gratuito"}),m("div",{style:{fontSize:13,color:S.sub},children:"3 d\xEDas de acceso completo"})]}),m("div",{style:{fontSize:28,fontWeight:900,color:B},children:"$0"})]}),m("div",{style:{display:"flex",flexDirection:"column",gap:6,marginBottom:16},children:["Todas las funcionalidades","Sin tarjeta de cr\xE9dito","Cancel\xE1 cuando quieras"].map((u,c)=>O("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13,color:S.sub},children:[m(uf,{size:14,color:B})," ",u]},c))}),m("button",{onClick:t,style:{width:"100%",background:B,color:"#111",border:"none",borderRadius:12,padding:"14px 0",fontSize:16,fontWeight:800,cursor:"pointer"},children:"Empezar gratis"})]}),O("div",{style:{padding:24,background:S.card,borderRadius:12,border:`1px solid ${S.border}`,marginBottom:16},children:[O("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[O("div",{children:[m("div",{style:{fontSize:18,fontWeight:800},children:"Plan Athlete"}),m("div",{style:{fontSize:13,color:S.sub},children:"Para entrenar en serio"})]}),O("div",{style:{textAlign:"right"},children:[O("div",{style:{fontSize:24,fontWeight:900,color:B},children:["$5.000",m("span",{style:{fontSize:13,fontWeight:500},children:"/mes"})]}),m("div",{style:{fontSize:11,color:S.muted},children:"o USD $3/mes"})]})]}),m("div",{style:{display:"flex",flexDirection:"column",gap:6,marginBottom:16},children:["Rutinas ilimitadas","Calendario de entrenamientos","Estad\xEDsticas detalladas","Recordatorios diarios","Sincronizaci\xF3n en la nube"].map((u,c)=>O("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13,color:S.sub},children:[m(uf,{size:14,color:B})," ",u]},c))}),m("button",{onClick:t,style:{width:"100%",background:S.hi,color:S.text,border:`1px solid ${S.border}`,borderRadius:12,padding:"14px 0",fontSize:16,fontWeight:700,cursor:"pointer"},children:"Empezar con trial gratis"})]}),O("div",{style:{padding:24,background:S.card,borderRadius:12,border:`1px solid ${S.border}`},children:[O("div",{style:{marginBottom:12},children:[m("div",{style:{fontSize:18,fontWeight:800},children:"Plan Trainer"}),m("div",{style:{fontSize:13,color:S.sub},children:"Para entrenadores y coaches"})]}),m("div",{style:{display:"flex",flexDirection:"column",gap:6,marginBottom:16},children:["Gesti\xF3n de alumnos ilimitados","Asign\xE1 rutinas a cada alumno","Seguimiento de progreso en tiempo real","Todo lo del Plan Athlete incluido"].map((u,c)=>O("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13,color:S.sub},children:[m(uf,{size:14,color:B})," ",u]},c))}),m("a",{href:"https://wa.me/543764278402?text=Hola%2C%20quiero%20consultar%20por%20el%20Plan%20Trainer%20de%20GymTracker",target:"_blank",rel:"noopener noreferrer",style:{display:"block",width:"100%",background:S.hi,color:B,border:`1px solid ${B}55`,borderRadius:12,padding:"14px 0",fontSize:16,fontWeight:700,cursor:"pointer",textAlign:"center",textDecoration:"none"},children:"Consultar"})]})]}),O("section",{style:{maxWidth:480,margin:"0 auto",padding:"0 24px 48px"},children:[m("div",{style:{fontSize:11,color:B,letterSpacing:"2px",fontWeight:700,marginBottom:8},children:"PREGUNTAS FRECUENTES"}),m("h2",{style:{fontSize:24,fontWeight:800,marginBottom:24},children:"\xBFDudas?"}),NU.map((u,c)=>m(DU,{q:u.q,a:u.a},c))]}),m("section",{style:{maxWidth:480,margin:"0 auto",padding:"0 24px 64px",textAlign:"center"},children:O("div",{style:{padding:32,background:`${B}10`,borderRadius:12,border:`1px solid ${B}33`},children:[m("h2",{style:{fontSize:22,fontWeight:800,marginBottom:8},children:"\xBFListo para dejar de improvisar?"}),m("p",{style:{fontSize:14,color:S.sub,marginBottom:24},children:"Empez\xE1 hoy. 3 d\xEDas gratis. Sin excusas."}),O("button",{onClick:t,style:{display:"inline-flex",alignItems:"center",gap:8,background:B,color:"#111",border:"none",borderRadius:12,padding:"16px 32px",fontSize:17,fontWeight:800,cursor:"pointer"},children:["Crear mi cuenta gratis ",m(U0,{size:18})]})]})}),O("footer",{style:{maxWidth:480,margin:"0 auto",padding:"24px",borderTop:`1px solid ${S.border}`,textAlign:"center"},children:[m("div",{style:{fontSize:11,color:S.muted,letterSpacing:"2px"},children:"GYM TRACKER"}),m("div",{style:{fontSize:12,color:S.muted,marginTop:8},children:"\xA9 2026 \xB7 Hecho para los que entrenan en serio."})]}),s&&m("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,.8)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:999,padding:24},onClick:()=>o(!1),children:O("div",{style:{background:S.card,border:`1px solid ${S.border}`,borderRadius:12,padding:24,maxWidth:340,width:"100%"},onClick:u=>u.stopPropagation(),children:[m("div",{style:{fontSize:18,fontWeight:800,marginBottom:16},children:"Instalar GymTracker"}),a?O("div",{children:[m("div",{style:{fontSize:14,color:S.sub,lineHeight:1.6,marginBottom:12},children:"En tu iPhone/iPad segu\xED estos pasos:"}),O("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[O("div",{style:{display:"flex",gap:12,alignItems:"flex-start"},children:[m("div",{style:{background:B,color:"#111",borderRadius:8,width:28,height:28,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:14,flexShrink:0},children:"1"}),O("div",{style:{fontSize:14,color:S.sub},children:["Toc\xE1 el bot\xF3n ",m("strong",{style:{color:S.text},children:"Compartir"})," (el cuadrado con flecha hacia arriba) en Safari"]})]}),O("div",{style:{display:"flex",gap:12,alignItems:"flex-start"},children:[m("div",{style:{background:B,color:"#111",borderRadius:8,width:28,height:28,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:14,flexShrink:0},children:"2"}),O("div",{style:{fontSize:14,color:S.sub},children:["Busc\xE1 y toc\xE1 ",m("strong",{style:{color:S.text},children:"Agregar a pantalla de inicio"})]})]}),O("div",{style:{display:"flex",gap:12,alignItems:"flex-start"},children:[m("div",{style:{background:B,color:"#111",borderRadius:8,width:28,height:28,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:14,flexShrink:0},children:"3"}),O("div",{style:{fontSize:14,color:S.sub},children:["Toc\xE1 ",m("strong",{style:{color:S.text},children:"Agregar"})," y listo"]})]})]})]}):O("div",{children:[m("div",{style:{fontSize:14,color:S.sub,lineHeight:1.6,marginBottom:12},children:"En tu navegador segu\xED estos pasos:"}),O("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[O("div",{style:{display:"flex",gap:12,alignItems:"flex-start"},children:[m("div",{style:{background:B,color:"#111",borderRadius:8,width:28,height:28,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:14,flexShrink:0},children:"1"}),O("div",{style:{fontSize:14,color:S.sub},children:["Toc\xE1 el men\xFA ",m("strong",{style:{color:S.text},children:"\u22EE"})," (tres puntos) de tu navegador"]})]}),O("div",{style:{display:"flex",gap:12,alignItems:"flex-start"},children:[m("div",{style:{background:B,color:"#111",borderRadius:8,width:28,height:28,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:14,flexShrink:0},children:"2"}),O("div",{style:{fontSize:14,color:S.sub},children:["Toc\xE1 ",m("strong",{style:{color:S.text},children:"Instalar app"})," o ",m("strong",{style:{color:S.text},children:"Agregar a pantalla de inicio"})]})]})]})]}),m("button",{onClick:()=>o(!1),style:{width:"100%",marginTop:20,background:B,color:"#111",border:"none",borderRadius:12,padding:"12px 0",fontSize:15,fontWeight:700,cursor:"pointer"},children:"Entendido"})]})})]})}function _d({onClick:t,children:e,variant:n="primary",style:r={},disabled:i=!1}){const s={primary:{background:B,color:"#111"},ghost:{background:"transparent",color:S.muted,border:`1px solid ${S.border}`},danger:{background:"transparent",color:S.danger,border:`1px solid ${S.danger}`}};return m("button",{onClick:i?void 0:t,style:{padding:"10px 20px",borderRadius:10,fontWeight:700,fontSize:14,cursor:i?"not-allowed":"pointer",border:"none",transition:"opacity .15s",opacity:i?.4:1,...s[n],...r},children:e})}function Id({value:t,onChange:e,placeholder:n,type:r="text",step:i,min:s,style:o={},onKeyDown:a}){return m("input",{type:r,value:t,onChange:e,placeholder:n,step:i,min:s,onKeyDown:a,style:{width:"100%",background:S.hi,border:`1px solid ${S.border}`,borderRadius:12,padding:"12px 16px",color:S.text,fontSize:14,outline:"none",marginBottom:10,...o}})}function PU({onDone:t,onTrainerRegister:e}){const[n,r]=D.exports.useState("login"),[i,s]=D.exports.useState(""),[o,a]=D.exports.useState(""),[l,u]=D.exports.useState(""),[c,d]=D.exports.useState(!1),[h,g]=D.exports.useState(!1),[v,w]=D.exports.useState(!1);D.exports.useEffect(()=>{if(!h)return;const y=setInterval(async()=>{const E=await lU();E&&E.emailVerified&&(g(!1),t())},3e3);return()=>clearInterval(y)},[h,t]);const k=async()=>{if(!i||!o){u("Complet\xE1 email y contrase\xF1a.");return}if(o.length<6){u("La contrase\xF1a debe tener al menos 6 caracteres.");return}d(!0),u("");try{n==="login"?(await sU(i,o),t()):(await oU(i,o),g(!0))}catch(y){u({"auth/user-not-found":"Usuario no encontrado. \xBFQuer\xE9s registrarte?","auth/wrong-password":"Contrase\xF1a incorrecta.","auth/email-already-in-use":"Ese email ya est\xE1 registrado.","auth/invalid-email":"Email inv\xE1lido.","auth/invalid-credential":"Email o contrase\xF1a incorrectos."}[y.code]||y.message)}d(!1)},p=async()=>{try{await aU(),w(!0),setTimeout(()=>w(!1),5e3)}catch{u("Error al reenviar. Intent\xE1 de nuevo en unos minutos.")}},f=async()=>{await wv(),g(!1),r("login"),s(""),a(""),u("")};return h?O("div",{style:{maxWidth:480,margin:"0 auto",padding:"32px 20px",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"},children:[m("div",{style:{fontSize:48,marginBottom:20},children:"\u{1F4E7}"}),m("div",{style:{fontSize:20,fontWeight:800,marginBottom:8},children:"Verific\xE1 tu email"}),m("div",{style:{fontSize:14,color:S.sub,marginBottom:8,lineHeight:1.5},children:"Enviamos un link de verificaci\xF3n a"}),m("div",{style:{fontSize:15,fontWeight:700,color:B,marginBottom:20},children:i}),m("div",{style:{fontSize:14,color:S.sub,marginBottom:24,lineHeight:1.5},children:"Abr\xED tu correo y hac\xE9 clic en el link. Esta p\xE1gina se actualizar\xE1 autom\xE1ticamente."}),v&&m("div",{style:{color:B,fontSize:13,marginBottom:16,padding:"10px 14px",background:`${B}22`,borderRadius:10,border:`1px solid ${B}44`},children:"Email reenviado correctamente"}),m(_d,{onClick:p,variant:"ghost",style:{padding:"12px 24px",borderRadius:12,marginBottom:12,fontSize:14},children:"Reenviar email"}),m("span",{onClick:f,style:{color:S.sub,cursor:"pointer",fontSize:13,marginTop:8},children:"\u2190 Volver al inicio de sesi\xF3n"})]}):O("div",{style:{maxWidth:480,margin:"0 auto",padding:"32px 20px",minHeight:"100vh"},children:[m("div",{style:{fontSize:12,color:S.sub,letterSpacing:"2px",marginBottom:24},children:"GYM TRACKER"}),m("div",{style:{fontSize:22,fontWeight:800,marginBottom:6},children:n==="login"?"Iniciar sesi\xF3n":"Crear cuenta"}),m("div",{style:{fontSize:14,color:S.sub,marginBottom:24},children:"Tus entrenamientos sincronizados en todos tus dispositivos."}),m("label",{style:{fontSize:14,color:S.sub,letterSpacing:"1px",display:"block",marginBottom:6},children:"EMAIL"}),m(Id,{value:i,onChange:y=>s(y.target.value),placeholder:"tu@email.com"}),m("label",{style:{fontSize:14,color:S.sub,letterSpacing:"1px",display:"block",marginBottom:6},children:"CONTRASE\xD1A"}),m(Id,{type:"password",value:o,onChange:y=>a(y.target.value),placeholder:"m\xEDnimo 6 caracteres"}),l&&m("div",{style:{color:S.danger,fontSize:13,marginBottom:12,padding:"10px 14px",background:"rgba(255,85,85,.1)",borderRadius:10,border:`1px solid ${S.danger}`},children:l}),m(_d,{onClick:k,disabled:c,style:{width:"100%",padding:14,fontSize:15,borderRadius:12,marginTop:4},children:c?"...":n==="login"?"Entrar \u2192":"Crear cuenta \u2192"}),O("div",{style:{textAlign:"center",marginTop:16,fontSize:14,color:S.sub},children:[n==="login"?"\xBFNo ten\xE9s cuenta? ":"\xBFYa ten\xE9s cuenta? ",m("span",{onClick:()=>{r(n==="login"?"register":"login"),u("")},style:{color:B,cursor:"pointer",fontWeight:700},children:n==="login"?"Registrate":"Inici\xE1 sesi\xF3n"})]}),e&&m("div",{style:{textAlign:"center",marginTop:12,fontSize:13},children:m("span",{onClick:e,style:{color:S.sub,cursor:"pointer",textDecoration:"underline"},children:"Registrarse como Personal Trainer"})})]})}function OU({onDone:t,onBack:e}){const[n,r]=D.exports.useState(""),[i,s]=D.exports.useState("+54"),[o,a]=D.exports.useState(""),[l,u]=D.exports.useState(""),[c,d]=D.exports.useState(""),[h,g]=D.exports.useState(Pp[0]),[v,w]=D.exports.useState(""),[k,p]=D.exports.useState(!1),[f,y]=D.exports.useState(!1),E=async()=>{if(!n.trim()||!c){w("Complet\xE1 todos los campos obligatorios.");return}p(!0),w("");try{await pU({email:c,fullName:n.trim(),phone:{countryCode:i,areaCode:o,number:l},studentCount:h}),y(!0)}catch(T){w(T.message||"Error al enviar solicitud.")}p(!1)};return f?O("div",{style:{maxWidth:480,margin:"0 auto",padding:"32px 20px",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"},children:[m("div",{style:{fontSize:48,marginBottom:20},children:"\u2705"}),m("div",{style:{fontSize:20,fontWeight:800,marginBottom:8},children:"Solicitud enviada"}),m("div",{style:{fontSize:14,color:S.sub,marginBottom:8,lineHeight:1.5},children:"Tu solicitud como Personal Trainer fue enviada correctamente."}),m("div",{style:{fontSize:15,fontWeight:700,color:B,marginBottom:20},children:c}),m("div",{style:{fontSize:14,color:S.sub,marginBottom:24,lineHeight:1.5},children:"Cuando un administrador apruebe tu solicitud, recibir\xE1s un email con tus credenciales de acceso."}),m("span",{onClick:e,style:{color:S.sub,cursor:"pointer",fontSize:14,marginTop:8},children:"\u2190 Volver al inicio de sesi\xF3n"})]}):O("div",{style:{maxWidth:480,margin:"0 auto",padding:"32px 20px",minHeight:"100vh"},children:[m("div",{style:{fontSize:12,color:S.sub,letterSpacing:"2px",marginBottom:24},children:"GYM TRACKER"}),m("div",{style:{fontSize:22,fontWeight:800,marginBottom:6},children:"Registro Personal Trainer"}),m("div",{style:{fontSize:14,color:S.sub,marginBottom:24},children:"Complet\xE1 tus datos para solicitar acceso como entrenador."}),m("label",{style:{fontSize:13,color:S.sub,letterSpacing:"1px",display:"block",marginBottom:6},children:"NOMBRE COMPLETO *"}),m(Id,{value:n,onChange:T=>r(T.target.value),placeholder:"Tu nombre completo"}),m("label",{style:{fontSize:13,color:S.sub,letterSpacing:"1px",display:"block",marginBottom:6},children:"TEL\xC9FONO"}),O("div",{style:{display:"flex",gap:8,marginBottom:16},children:[m("input",{value:i,onChange:T=>s(T.target.value),placeholder:"+54",style:{width:60,background:S.card,border:`1px solid ${S.border}`,borderRadius:12,padding:"12px 10px",color:S.text,fontSize:14,outline:"none"}}),m("input",{value:o,onChange:T=>a(T.target.value),placeholder:"11",style:{width:60,background:S.card,border:`1px solid ${S.border}`,borderRadius:12,padding:"12px 10px",color:S.text,fontSize:14,outline:"none"}}),m("input",{value:l,onChange:T=>u(T.target.value),placeholder:"12345678",style:{flex:1,background:S.card,border:`1px solid ${S.border}`,borderRadius:12,padding:"12px 14px",color:S.text,fontSize:14,outline:"none"}})]}),m("label",{style:{fontSize:13,color:S.sub,letterSpacing:"1px",display:"block",marginBottom:6},children:"RANGO DE ALUMNOS"}),m("div",{style:{display:"flex",gap:8,marginBottom:16},children:Pp.map(T=>m("button",{onClick:()=>g(T),style:{flex:1,padding:"10px 0",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",background:h===T?B:S.card,color:h===T?"#111":"#fff",border:`1px solid ${h===T?B:S.border}`},children:T},T))}),m("label",{style:{fontSize:13,color:S.sub,letterSpacing:"1px",display:"block",marginBottom:6},children:"EMAIL *"}),m(Id,{value:c,onChange:T=>d(T.target.value),placeholder:"tu@email.com"}),v&&m("div",{style:{color:S.danger,fontSize:14,marginBottom:12,padding:"10px 14px",background:"rgba(255,85,85,.1)",borderRadius:10,border:`1px solid ${S.danger}`},children:v}),m(_d,{onClick:E,disabled:k,style:{width:"100%",padding:14,fontSize:15,borderRadius:12,marginTop:4},children:k?"...":"Enviar solicitud \u2192"}),m("div",{style:{textAlign:"center",marginTop:16},children:m("span",{onClick:e,style:{color:S.sub,cursor:"pointer",fontSize:14},children:"\u2190 Volver al inicio de sesi\xF3n"})})]})}function LU({onApproved:t,onLogout:e}){const[n,r]=D.exports.useState("pending");D.exports.useEffect(()=>{const s=setInterval(async()=>{const o=await Wx();o&&o.status==="approved"?(r("approved"),clearInterval(s),t()):o&&o.status==="rejected"&&(r("rejected"),clearInterval(s))},1e4);return()=>clearInterval(s)},[t]);const i=async()=>{await wv(),e()};return O("div",{style:{maxWidth:480,margin:"0 auto",padding:"32px 20px",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"},children:[n==="pending"&&O(B1,{children:[m("div",{style:{fontSize:48,marginBottom:20},children:"\u23F3"}),m("div",{style:{fontSize:20,fontWeight:800,marginBottom:8},children:"Solicitud en revision"}),m("div",{style:{fontSize:14,color:S.muted,marginBottom:8,lineHeight:1.5},children:"Tu solicitud como Personal Trainer esta siendo revisada por un administrador."}),m("div",{style:{fontSize:13,color:S.muted,marginBottom:24,lineHeight:1.5},children:"Esta pagina se actualizara automaticamente cuando sea aprobada."}),m("div",{style:{width:40,height:40,border:`3px solid ${S.border}`,borderTopColor:B,borderRadius:"50%",animation:"spin 1s linear infinite",marginBottom:24}}),m("style",{children:"@keyframes spin { to { transform: rotate(360deg) } }"})]}),n==="rejected"&&O(B1,{children:[m("div",{style:{fontSize:48,marginBottom:20},children:"\u274C"}),m("div",{style:{fontSize:20,fontWeight:800,marginBottom:8},children:"Solicitud rechazada"}),m("div",{style:{fontSize:14,color:S.muted,marginBottom:24,lineHeight:1.5},children:"Tu solicitud como Personal Trainer fue rechazada. Contacta al administrador para mas informacion."})]}),m(_d,{onClick:i,variant:"ghost",style:{padding:"12px 24px",borderRadius:12,fontSize:14},children:"Cerrar sesion"})]})}const MU=D.exports.lazy(()=>Lt(()=>import("./AdminView.0f087a76.js"),["assets/AdminView.0f087a76.js","assets/Card.c912d434.js"])),$U=D.exports.lazy(()=>Lt(()=>import("./StudentsView.c404dcd0.js"),["assets/StudentsView.c404dcd0.js","assets/Card.c912d434.js","assets/check.b16190ab.js"])),FU=D.exports.lazy(()=>Lt(()=>import("./HomeView.06ee7ec7.js"),[])),UU=D.exports.lazy(()=>Lt(()=>import("./StatsView.c1110355.js"),["assets/StatsView.c1110355.js","assets/Card.c912d434.js"])),VU=D.exports.lazy(()=>Lt(()=>import("./ObjectivesView.6b9126f1.js"),["assets/ObjectivesView.6b9126f1.js","assets/Card.c912d434.js"])),j1=D.exports.lazy(()=>Lt(()=>import("./ObjectiveView.f4146cbd.js"),["assets/ObjectiveView.f4146cbd.js","assets/Card.c912d434.js","assets/check.b16190ab.js"])),q1=D.exports.lazy(()=>Lt(()=>import("./DayView.81e33d5f.js"),["assets/DayView.81e33d5f.js","assets/Card.c912d434.js","assets/BackHeader.f948154c.js","assets/check.b16190ab.js"])),zU=D.exports.lazy(()=>Lt(()=>import("./TodayRoutineView.d5d7bfad.js"),["assets/TodayRoutineView.d5d7bfad.js","assets/Card.c912d434.js","assets/BackHeader.f948154c.js","assets/check.b16190ab.js"])),BU=D.exports.lazy(()=>Lt(()=>import("./SharedDayView.f4440050.js"),["assets/SharedDayView.f4440050.js","assets/Card.c912d434.js","assets/BackHeader.f948154c.js","assets/check.b16190ab.js"])),jU=D.exports.lazy(()=>Lt(()=>import("./CalendarView.bb0d88e1.js"),["assets/CalendarView.bb0d88e1.js","assets/Card.c912d434.js","assets/check.b16190ab.js"])),W1=D.exports.lazy(()=>Lt(()=>import("./SubscriptionView.2156f722.js"),["assets/SubscriptionView.2156f722.js","assets/Card.c912d434.js"])),qU=D.exports.lazy(()=>Lt(()=>import("./AccountView.9a208da1.js"),["assets/AccountView.9a208da1.js","assets/Card.c912d434.js"])),WU=D.exports.lazy(()=>Lt(()=>import("./TrainerHomeView.7dc35b50.js"),["assets/TrainerHomeView.7dc35b50.js","assets/Card.c912d434.js"])),GU=D.exports.lazy(()=>Lt(()=>import("./StudentDetailView.f1ee79f2.js"),["assets/StudentDetailView.f1ee79f2.js","assets/Card.c912d434.js","assets/BackHeader.f948154c.js"])),HU=m("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"60vh"},children:m("div",{style:{fontSize:13,color:S.muted},children:"Cargando..."})});function KU(){const[t,e]=D.exports.useState("loading"),[n,r]=D.exports.useState(!0),[i,s]=D.exports.useState({...Wc}),[o,a]=D.exports.useState("home"),[l,u]=D.exports.useState("idle"),[c,d]=D.exports.useState(null),[h,g]=D.exports.useState(null),[v,w]=D.exports.useState("objectives"),[k,p]=D.exports.useState("athlete"),[f,y]=D.exports.useState(""),[E,T]=D.exports.useState([]),[b,P]=D.exports.useState(null),[U,le]=D.exports.useState(null),[Z,Mt]=D.exports.useState(null),[Ne,Ir]=D.exports.useState(null),[qo,gu]=D.exports.useState(null),[Wo,wi]=D.exports.useState(!1),[V,H]=D.exports.useState(null),[X,Ee]=D.exports.useState(null),De=D.exports.useRef(null),_i=D.exports.useCallback(R=>{De.current&&clearTimeout(De.current),u("syncing"),De.current=setTimeout(async()=>{await Ff(R),u("ok")},1e3)},[]);D.exports.useEffect(()=>{localStorage.removeItem("gymlog_v2_clean");try{jx(iE)}catch(R){console.error(R)}uU(async R=>{var Tv;if(!R){e("login");return}cU(R.uid),gu(R.uid),y(R.email||""),u("syncing");const Q=await dU(),G=cA();let ue;Q&&((Tv=G.objectives)==null?void 0:Tv.length)?ue={workouts:Q.workouts||G.workouts||[],objectives:Q.objectives||G.objectives||[],completions:G.completions||Q.completions||[],reminder:Q.reminder||G.reminder||{enabled:!1,time:"09:00"}}:Q?ue=Q:ue=G;const Er=new Set((ue.objectives||[]).map(ce=>ce.id)),Fe={};(ue.completions||[]).forEach(ce=>{if(!ce.objectiveId||!ce.date||!Er.has(ce.objectiveId))return;const kv=new Date(ce.date+"T12:00:00").getDay();if((kv===0?6:kv-1)!==ce.dayIndex)return;const wu=(ue.objectives||[]).find(Xx=>Xx.id===ce.objectiveId);if(wu&&wu.days&&wu.days[ce.dayIndex]&&wu.days[ce.dayIndex].rest)return;const xv=ce.objectiveId+"-"+ce.dayIndex+"-"+ce.date;Fe[xv]||(Fe[xv]=ce)}),console.log("[gymlog] completions cleanup:",ue.completions.length,"->",Object.keys(Fe).length),ue.completions=Object.values(Fe);const bn=new Date().toISOString().slice(0,10);ue.objectives=ue.objectives.map(ce=>ce.endDate&&ce.endDate<bn&&ce.active===void 0?{...ce,active:!1}:ce),df(ue),s(ue),await Ff(ue),u("ok");let mn="athlete";if(Rp.includes(R.email))mn="admin",p("admin"),await F1("admin");else{const ce=await U1();if(ce==="pending_trainer"){const Ii=await Wx();if(Ii&&Ii.status==="approved")mn="trainer",p("trainer"),await F1("trainer");else{p("pending_trainer"),e("pendingApproval");return}}else ce==="trainer"?(mn="trainer",p("trainer")):p("athlete")}if(mn!=="admin"&&!["diegomottadev@gmail.com","diegomotta18@gmail.com"].includes((R.email||"").toLowerCase()))try{const Ii=await(await fetch(`${sE}/initTrial`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uid:R.uid})})).json();if(Ir(Ii.subscription),Ii.subscription.status==="expired"||Ii.subscription.status==="none"){e("subscription");return}}catch(ce){console.error("subscription check failed:",ce)}e("app");const Qo=await fU();H(Qo),new URLSearchParams(window.location.search).get("subscription")==="success"&&(wi(!0),window.history.replaceState({},"",window.location.pathname));const Sv=Rp.includes(R.email)?"admin":await U1();if(Sv==="trainer"||Sv==="admin"){const ce=await V1();T(ce)}else{const ce=await z1(R.email);T(ce)}})},[]);const vt=D.exports.useCallback(R=>{s(Q=>{const G=R(Q);return df(G),_i(G),G})},[_i]),Go=D.exports.useCallback(R=>{const Q=dA(R);vt(G=>({...G,objectives:[...G.objectives,Q]}))},[vt]),pn=D.exports.useCallback(R=>{vt(Q=>({...Q,objectives:Q.objectives.map(G=>G.id===R.id?R:G)}))},[vt]),_s=D.exports.useCallback(R=>{vt(Q=>({...Q,objectives:Q.objectives.filter(G=>G.id!==R),completions:Q.completions.filter(G=>G.objectiveId!==R)}))},[vt]),Rh=D.exports.useCallback((R,Q,G)=>{s(ue=>{const Er=ue.completions.find(mn=>mn.objectiveId===R&&mn.dayIndex===Q&&mn.date===G),Fe=Er?ue.completions.filter(mn=>mn.id!==Er.id):[...ue.completions,{id:aE(),objectiveId:R,dayIndex:Q,date:G}],bn={...ue,completions:Fe};return df(bn),Ff(bn),bn})},[]),Hx=D.exports.useCallback(R=>{vt(Q=>({...Q,reminder:R}))},[vt]),Ho=D.exports.useCallback(async()=>{await wv(),s({...Wc}),a("home"),p("athlete"),T([]),y(""),gu(null),Ir(null),H(null),e("login")},[]),_v=D.exports.useCallback(async R=>{const Q=await mU(R),G=k==="trainer"||k==="admin"?await V1():await z1(f);return T(G),Q},[k,f]),Ph=D.exports.useCallback(async(R,Q)=>{await gU(R,Q),T(G=>G.map(ue=>ue.id===R?{...ue,objective:Q}:ue)),P(G=>G&&G.id===R?{...G,objective:Q}:G)},[]),Iv=D.exports.useCallback(async R=>{await yU(R),T(Q=>Q.filter(G=>G.id!==R))},[]),Ev=D.exports.useRef("");D.exports.useEffect(()=>{const R=setInterval(()=>{if(!i.reminder.enabled)return;const Q=new Date,G=String(Q.getHours()).padStart(2,"0"),ue=String(Q.getMinutes()).padStart(2,"0"),Er=G+":"+ue,Fe=lE();if(Er===i.reminder.time&&Ev.current!==Fe){Ev.current=Fe;const bn=uA();i.objectives.filter(Ko=>Ko.active!==!1).some(Ko=>{const Qo=Ko.days[bn];return!Qo||!Qo.label&&!Qo.exercises.length?!1:!i.completions.some(vu=>vu.objectiveId===Ko.id&&vu.dayIndex===bn&&vu.date===Fe)})&&vU("Gym Tracker","Tenes rutinas pendientes para hoy. A entrenar!")}},3e4);return()=>clearInterval(R)},[i.reminder,i.objectives,i.completions]);const Kx=D.exports.useMemo(()=>{const R={athlete:[{id:"home",label:"Inicio",Icon:lf},{id:"objectives",label:"Objetivos",Icon:$u},{id:"calendar",label:"Calendario",Icon:uc},{id:"stats",label:"Stats",Icon:wa},{id:"account",label:"Cuenta",Icon:cf}],trainer:[{id:"home",label:"Inicio",Icon:lf},{id:"students",label:"Alumnos",Icon:nE},{id:"objectives",label:"Objetivos",Icon:$u},{id:"calendar",label:"Calendario",Icon:uc},{id:"stats",label:"Stats",Icon:wa},{id:"account",label:"Cuenta",Icon:cf}],admin:[{id:"home",label:"Inicio",Icon:lf},{id:"admin",label:"Admin",Icon:zb},{id:"objectives",label:"Objetivos",Icon:$u},{id:"stats",label:"Stats",Icon:wa},{id:"account",label:"Cuenta",Icon:cf}]};return R[k]||R.athlete},[k]),Qx=D.exports.useCallback((R,Q)=>{T(G=>G.map(ue=>ue.id===R?{...ue,completions:Q}:ue)),P(G=>G&&G.id===R?{...G,completions:Q}:G)},[]);if(t==="loading")return m("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",flexDirection:"column",background:S.bg},children:m(CU,{size:80})});if(t==="login")return n?m(RU,{onStart:()=>r(!1)}):m(PU,{onDone:()=>{},onTrainerRegister:()=>e("trainerRegister"),onShowLanding:()=>r(!0)});if(t==="trainerRegister")return m(OU,{onDone:()=>e("pendingApproval"),onBack:()=>e("login")});if(t==="pendingApproval")return m(LU,{onApproved:()=>{p("trainer"),e("app")},onLogout:Ho});if(t==="subscription")return m(W1,{uid:qo,email:f,role:k,subscription:Ne,onLogout:Ho});const yu=["objective","day","todayRoutine","sharedObjective","sharedDay","premium","studentDetail"].includes(o),Yx=l==="syncing"?"\u27F3":l==="ok"?"\u2601\uFE0F":"\u26A0\uFE0F";return O("div",{style:{background:S.bg,minHeight:"100vh",color:S.text,maxWidth:480,margin:"0 auto",fontFamily:S.font,paddingBottom:yu?0:k!=="admin"&&(!Ne||Ne.status!=="active")?108:76},children:[!yu&&O("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"16px 20px 0"},children:[m("div",{style:{fontSize:11,color:"#fff",letterSpacing:"2px",fontWeight:700},children:"GYM TRACKER"}),O("div",{style:{display:"flex",alignItems:"center",gap:10},children:[m("span",{style:{fontSize:15},children:Yx}),k!=="athlete"&&m("span",{style:{fontSize:9,color:B,fontWeight:700,background:`${B}22`,padding:"2px 8px",borderRadius:6},children:k==="admin"?"ADMIN":"TRAINER"})]})]}),O(D.exports.Suspense,{fallback:HU,children:[o==="home"&&k==="athlete"&&m(FU,{data:i,sharedObjectives:E,onSelectObjective:R=>{d(R),w("home"),a("objective")},onSelectTodayRoutine:R=>{d(R),a("todayRoutine")},onUpdateReminder:Hx,onSelectShared:R=>{P(R),a("sharedObjective")}}),o==="home"&&(k==="trainer"||k==="admin")&&m(WU,{sharedObjectives:E,onSelectStudent:R=>{Ee(R),a("studentDetail")}}),o==="todayRoutine"&&m(zU,{objective:i.objectives.find(R=>R.id===c),completions:i.completions,onToggleCompletion:Rh,onBack:()=>a("home")}),o==="calendar"&&m(jU,{data:i,onSelectObjectiveDay:(R,Q,G)=>{d(R),g(Q),Mt(G||null),w("calendar"),a("day")},onToggleCompletion:Rh}),o==="stats"&&m(UU,{data:i}),o==="objectives"&&m(VU,{data:i,onCreate:Go,onSelect:R=>{d(R),w("objectives"),a("objective")},onDelete:_s,onUpdate:pn}),o==="objective"&&m(j1,{objective:i.objectives.find(R=>R.id===c),completions:i.completions,onBack:()=>a(v),onUpdate:pn,onSelectDay:R=>{g(R),a("day")}}),o==="day"&&m(q1,{objective:i.objectives.find(R=>R.id===c),dayIndex:h,selectedDate:Z,completions:i.completions,onToggleCompletion:Rh,onBack:()=>{Mt(null),a(v==="calendar"?"calendar":"objective")},onUpdate:pn}),o==="premium"&&m(W1,{uid:qo,email:f,role:k,subscription:Ne,onLogout:Ho,onBack:()=>a("home")}),o==="account"&&m(qU,{email:f,role:k,subscription:Ne,profile:V,onUpdateProfile:H,onLogout:Ho}),o==="admin"&&m(MU,{adminEmail:f}),o==="students"&&m($U,{sharedObjectives:E,trainerEmail:f,onSaveShared:_v,onDeleteShared:Iv,onSelectStudent:R=>{Ee(R),a("studentDetail")}}),o==="studentDetail"&&X&&m(GU,{studentEmail:X,sharedObjectives:E,trainerEmail:f,onSaveShared:_v,onDeleteShared:Iv,onSelectShared:R=>{P(R),a("sharedObjective")},onBack:()=>a("students")}),o==="sharedObjective"&&b&&m(j1,{objective:b.objective,completions:k==="athlete"?(b.completions||[]).map(R=>({...R,objectiveId:b.objective.id})):[],readOnly:k==="athlete",onBack:()=>a(k==="athlete"?"home":X?"studentDetail":"students"),onUpdate:R=>Ph(b.id,R),onSelectDay:R=>{le(R),a("sharedDay")}}),o==="sharedDay"&&b&&(k==="athlete"?m(BU,{sharedObjective:b,dayIndex:U,onBack:()=>a("sharedObjective"),onUpdateShared:Ph,onCompletionChanged:Qx}):m(q1,{objective:b.objective,dayIndex:U,completions:[],onToggleCompletion:()=>{},onBack:()=>a("sharedObjective"),onUpdate:R=>Ph(b.id,R)}))]}),!yu&&k!=="admin"&&(!Ne||Ne.status!=="active")&&m("div",{style:{position:"fixed",bottom:68,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:480,zIndex:101},children:O("button",{onClick:()=>a("premium"),style:{width:"100%",padding:"7px 0",background:"linear-gradient(135deg, #FFD700, #FFA500)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8},children:[m("span",{style:{fontSize:14},children:"\u2B50"}),m("span",{style:{fontSize:12,fontWeight:800,color:"#111"},children:"Premium"}),Ne&&Ne.status==="trial"&&m("span",{style:{fontSize:10,fontWeight:700,color:"#111",background:"rgba(0,0,0,.15)",padding:"2px 6px",borderRadius:6},children:"Trial activo"})]})}),!yu&&m("div",{style:{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:480,background:S.card,borderTop:`1px solid ${S.border}`,display:"flex",zIndex:100},children:Kx.map(R=>O("button",{onClick:()=>a(R.id),style:{flex:1,padding:"10px 0 14px",background:"none",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[m(R.Icon,{size:22,color:o===R.id?B:"#fff",strokeWidth:o===R.id?2.5:1.5}),m("span",{style:{fontSize:12,fontWeight:o===R.id?800:400,color:o===R.id?B:"#fff"},children:R.label}),o===R.id&&m("div",{style:{width:24,height:2,background:B,borderRadius:2}})]},R.id))}),m(xU,{subscription:Ne,role:k,email:f,currentView:o,onRenew:()=>a("premium"),onLogout:Ho}),Wo&&(()=>{const Q=oE[k==="trainer"?"trainer":"athlete"],G=Ne&&Ne.startDate?new Date(Ne.startDate).toLocaleDateString("es-AR",{day:"numeric",month:"long",year:"numeric"}):new Date().toLocaleDateString("es-AR",{day:"numeric",month:"long",year:"numeric"}),ue=Ne&&Ne.renewalDate?new Date(Ne.renewalDate).toLocaleDateString("es-AR",{day:"numeric",month:"long",year:"numeric"}):(()=>{const Fe=new Date;return Fe.setMonth(Fe.getMonth()+1),Fe.toLocaleDateString("es-AR",{day:"numeric",month:"long",year:"numeric"})})(),Er=[{Icon:$u,text:"Objetivos ilimitados"},{Icon:uc,text:"Calendario de entrenamientos"},{Icon:wa,text:"Estadisticas detalladas"},{ic:"\u{1F514}",text:"Recordatorios diarios"},{ic:"\u2601\uFE0F",text:"Sincronizacion en la nube"},...k==="trainer"?[{ic:"\u{1F465}",text:"Gestion de alumnos"},{ic:"\u{1F4CB}",text:"Rutinas compartidas"}]:[]];return m("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,.85)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:20},onClick:()=>wi(!1),children:O("div",{onClick:Fe=>Fe.stopPropagation(),style:{background:S.card,borderRadius:20,padding:"32px 24px",maxWidth:400,width:"100%",border:`1px solid ${B}44`,maxHeight:"90vh",overflowY:"auto"},children:[O("div",{style:{textAlign:"center",marginBottom:24},children:[m("div",{style:{fontSize:48,marginBottom:12},children:"\u{1F389}"}),m("div",{style:{fontSize:22,fontWeight:800,marginBottom:6},children:"Bienvenido a Premium!"}),m("div",{style:{fontSize:13,color:S.muted},children:"Tu suscripcion fue activada con exito"})]}),O("div",{style:{background:S.hi,borderRadius:14,padding:16,marginBottom:16,border:`1px solid ${S.border}`},children:[m("div",{style:{fontSize:10,color:S.muted,letterSpacing:"1px",marginBottom:12},children:"DETALLES DEL PLAN"}),O("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8},children:[m("span",{style:{fontSize:13,color:S.muted},children:"Plan"}),m("span",{style:{fontSize:13,fontWeight:700,color:B},children:Q.label})]}),O("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8},children:[m("span",{style:{fontSize:13,color:S.muted},children:"Precio"}),O("span",{style:{fontSize:13,fontWeight:700},children:["$",Q.ars.toLocaleString("es-AR")," ARS / $",Q.usd," USD"]})]}),O("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8},children:[m("span",{style:{fontSize:13,color:S.muted},children:"Inicio"}),m("span",{style:{fontSize:13,fontWeight:700},children:G})]}),O("div",{style:{display:"flex",justifyContent:"space-between"},children:[m("span",{style:{fontSize:13,color:S.muted},children:"Renovacion"}),m("span",{style:{fontSize:13,fontWeight:700},children:ue})]})]}),O("div",{style:{background:S.hi,borderRadius:14,padding:16,marginBottom:24,border:`1px solid ${S.border}`},children:[m("div",{style:{fontSize:10,color:S.muted,letterSpacing:"1px",marginBottom:12},children:"QUE INCLUYE"}),Er.map((Fe,bn)=>O("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"6px 0"},children:[Fe.Icon?m(Fe.Icon,{size:16,color:B}):m("span",{style:{fontSize:16},children:Fe.ic}),m("span",{style:{fontSize:13},children:Fe.text})]},bn))]}),m("button",{onClick:()=>wi(!1),style:{width:"100%",padding:14,fontSize:15,fontWeight:800,borderRadius:14,border:"none",cursor:"pointer",background:B,color:"#111"},children:"Comenzar"})]})})})()]})}class QU extends D.exports.Component{constructor(){super(...arguments);Cv(this,"state",{hasError:!1,error:null})}static getDerivedStateFromError(n){return{hasError:!0,error:n}}componentDidCatch(n,r){console.error("[gymlog] ErrorBoundary:",n,r)}render(){var n;return this.state.hasError?O("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:32,background:S.bg,color:S.text,fontFamily:S.font,textAlign:"center"},children:[m(rA,{size:48,color:S.warning,style:{marginBottom:16}}),m("div",{style:{fontSize:18,fontWeight:700,marginBottom:8},children:"Algo sali\xF3 mal"}),m("div",{style:{fontSize:14,color:S.sub,marginBottom:24,maxWidth:300},children:"Hubo un error inesperado. Intent\xE1 recargar la p\xE1gina."}),O("button",{onClick:()=>window.location.reload(),style:{display:"flex",alignItems:"center",gap:8,background:B,color:"#111",border:"none",borderRadius:12,padding:"12px 24px",fontSize:15,fontWeight:700,cursor:"pointer"},children:[m(Xb,{size:16})," Recargar"]}),m("div",{style:{fontSize:11,color:S.muted,marginTop:24,maxWidth:300,wordBreak:"break-all"},children:(n=this.state.error)==null?void 0:n.message})]}):this.props.children}}Uf.createRoot(document.getElementById("root")).render(m(QU,{children:m(KU,{})}));export{B as A,_d as B,S as C,tE as D,sE as F,Id as I,ZU as R,oE as S,$u as T,Lt as _,aE as a,m as b,dA as c,rV as d,B1 as e,nV as f,eV as g,$e as h,uA as i,O as j,rE as k,sV as l,JU as m,U0 as n,Op as o,Ub as p,$b as q,D as r,iV as s,lE as t,tV as u};
