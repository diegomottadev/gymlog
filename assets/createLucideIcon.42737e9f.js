import{r as a}from"./index.a4556ef5.js";/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=(...e)=>e.filter((t,r,o)=>Boolean(t)&&t.trim()!==""&&o.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,o)=>o?o.toUpperCase():r.toLowerCase());/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=e=>{const t=b(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},j=a.exports.createContext({}),B=()=>a.exports.useContext(j),I=a.exports.forwardRef(({color:e,size:t,strokeWidth:r,absoluteStrokeWidth:o,className:c="",children:n,iconNode:i,...u},d)=>{var x,C,m;const{size:s=24,strokeWidth:p=2,absoluteStrokeWidth:g=!1,color:A="currentColor",className:L=""}=(x=B())!=null?x:{},h=(o!=null?o:g)?Number(r!=null?r:p)*24/Number(t!=null?t:s):r!=null?r:p;return a.exports.createElement("svg",{ref:d,...l,width:(C=t!=null?t:s)!=null?C:l.width,height:(m=t!=null?t:s)!=null?m:l.height,stroke:e!=null?e:A,strokeWidth:h,className:w("lucide",L,c),...!n&&!E(u)&&{"aria-hidden":"true"},...u},[...i.map(([v,y])=>a.exports.createElement(v,y)),...Array.isArray(n)?n:[n]])});/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=(e,t)=>{const r=a.exports.forwardRef(({className:o,...c},n)=>a.exports.createElement(I,{ref:n,iconNode:t,className:w(`lucide-${$(f(e))}`,`lucide-${e}`,o),...c}));return r.displayName=f(e),r};export{P as c};
