function nA(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function rA(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var rE={exports:{}},Yc={},iE={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ol=Symbol.for("react.element"),iA=Symbol.for("react.portal"),sA=Symbol.for("react.fragment"),oA=Symbol.for("react.strict_mode"),aA=Symbol.for("react.profiler"),lA=Symbol.for("react.provider"),uA=Symbol.for("react.context"),cA=Symbol.for("react.forward_ref"),hA=Symbol.for("react.suspense"),dA=Symbol.for("react.memo"),fA=Symbol.for("react.lazy"),Oy=Symbol.iterator;function pA(t){return t===null||typeof t!="object"?null:(t=Oy&&t[Oy]||t["@@iterator"],typeof t=="function"?t:null)}var sE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},oE=Object.assign,aE={};function to(t,e,n){this.props=t,this.context=e,this.refs=aE,this.updater=n||sE}to.prototype.isReactComponent={};to.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};to.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function lE(){}lE.prototype=to.prototype;function Jp(t,e,n){this.props=t,this.context=e,this.refs=aE,this.updater=n||sE}var Zp=Jp.prototype=new lE;Zp.constructor=Jp;oE(Zp,to.prototype);Zp.isPureReactComponent=!0;var Ly=Array.isArray,uE=Object.prototype.hasOwnProperty,em={current:null},cE={key:!0,ref:!0,__self:!0,__source:!0};function hE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)uE.call(e,r)&&!cE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ol,type:t,key:s,ref:o,props:i,_owner:em.current}}function mA(t,e){return{$$typeof:ol,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function tm(t){return typeof t=="object"&&t!==null&&t.$$typeof===ol}function gA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var My=/\/+/g;function Id(t,e){return typeof t=="object"&&t!==null&&t.key!=null?gA(""+t.key):e.toString(36)}function vu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ol:case iA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Id(o,0):r,Ly(i)?(n="",t!=null&&(n=t.replace(My,"$&/")+"/"),vu(i,e,n,"",function(c){return c})):i!=null&&(tm(i)&&(i=mA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(My,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ly(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Id(s,a);o+=vu(s,e,n,u,i)}else if(u=pA(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Id(s,a++),o+=vu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Gl(t,e,n){if(t==null)return t;var r=[],i=0;return vu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function _A(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var kt={current:null},wu={transition:null},yA={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:wu,ReactCurrentOwner:em};function dE(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:Gl,forEach:function(t,e,n){Gl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Gl(t,function(){e++}),e},toArray:function(t){return Gl(t,function(e){return e})||[]},only:function(t){if(!tm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=to;oe.Fragment=sA;oe.Profiler=aA;oe.PureComponent=Jp;oe.StrictMode=oA;oe.Suspense=hA;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yA;oe.act=dE;oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=oE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=em.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)uE.call(e,u)&&!cE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ol,type:t.type,key:i,ref:s,props:r,_owner:o}};oe.createContext=function(t){return t={$$typeof:uA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:lA,_context:t},t.Consumer=t};oe.createElement=hE;oe.createFactory=function(t){var e=hE.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:cA,render:t}};oe.isValidElement=tm;oe.lazy=function(t){return{$$typeof:fA,_payload:{_status:-1,_result:t},_init:_A}};oe.memo=function(t,e){return{$$typeof:dA,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=wu.transition;wu.transition={};try{t()}finally{wu.transition=e}};oe.unstable_act=dE;oe.useCallback=function(t,e){return kt.current.useCallback(t,e)};oe.useContext=function(t){return kt.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return kt.current.useDeferredValue(t)};oe.useEffect=function(t,e){return kt.current.useEffect(t,e)};oe.useId=function(){return kt.current.useId()};oe.useImperativeHandle=function(t,e,n){return kt.current.useImperativeHandle(t,e,n)};oe.useInsertionEffect=function(t,e){return kt.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return kt.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return kt.current.useMemo(t,e)};oe.useReducer=function(t,e,n){return kt.current.useReducer(t,e,n)};oe.useRef=function(t){return kt.current.useRef(t)};oe.useState=function(t){return kt.current.useState(t)};oe.useSyncExternalStore=function(t,e,n){return kt.current.useSyncExternalStore(t,e,n)};oe.useTransition=function(){return kt.current.useTransition()};oe.version="18.3.1";iE.exports=oe;var O=iE.exports;const br=rA(O),vA=nA({__proto__:null,default:br},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wA=O,EA=Symbol.for("react.element"),IA=Symbol.for("react.fragment"),TA=Object.prototype.hasOwnProperty,SA=wA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,CA={key:!0,ref:!0,__self:!0,__source:!0};function fE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)TA.call(e,r)&&!CA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:EA,type:t,key:s,ref:o,props:i,_owner:SA.current}}Yc.Fragment=IA;Yc.jsx=fE;Yc.jsxs=fE;rE.exports=Yc;var g=rE.exports,pE={exports:{}},Yt={},mE={exports:{}},gE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,Q){var ne=W.length;W.push(Q);e:for(;0<ne;){var ke=ne-1>>>1,_e=W[ke];if(0<i(_e,Q))W[ke]=Q,W[ne]=_e,ne=ke;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var Q=W[0],ne=W.pop();if(ne!==Q){W[0]=ne;e:for(var ke=0,_e=W.length,je=_e>>>1;ke<je;){var Vn=2*(ke+1)-1,Fn=W[Vn],Un=Vn+1,jn=W[Un];if(0>i(Fn,ne))Un<_e&&0>i(jn,Fn)?(W[ke]=jn,W[Un]=ne,ke=Un):(W[ke]=Fn,W[Vn]=ne,ke=Vn);else if(Un<_e&&0>i(jn,ne))W[ke]=jn,W[Un]=ne,ke=Un;else break e}}return Q}function i(W,Q){var ne=W.sortIndex-Q.sortIndex;return ne!==0?ne:W.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,p=3,y=!1,I=!1,A=!1,N=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(W){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=W)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function D(W){if(A=!1,x(W),!I)if(n(u)!==null)I=!0,ge(L);else{var Q=n(c);Q!==null&&Ae(D,Q.startTime-W)}}function L(W,Q){I=!1,A&&(A=!1,T(_),_=-1),y=!0;var ne=p;try{for(x(Q),f=n(u);f!==null&&(!(f.expirationTime>Q)||W&&!k());){var ke=f.callback;if(typeof ke=="function"){f.callback=null,p=f.priorityLevel;var _e=ke(f.expirationTime<=Q);Q=t.unstable_now(),typeof _e=="function"?f.callback=_e:f===n(u)&&r(u),x(Q)}else r(u);f=n(u)}if(f!==null)var je=!0;else{var Vn=n(c);Vn!==null&&Ae(D,Vn.startTime-Q),je=!1}return je}finally{f=null,p=ne,y=!1}}var F=!1,S=null,_=-1,E=5,C=-1;function k(){return!(t.unstable_now()-C<E)}function P(){if(S!==null){var W=t.unstable_now();C=W;var Q=!0;try{Q=S(!0,W)}finally{Q?R():(F=!1,S=null)}}else F=!1}var R;if(typeof w=="function")R=function(){w(P)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,Y=q.port2;q.port1.onmessage=P,R=function(){Y.postMessage(null)}}else R=function(){N(P,0)};function ge(W){S=W,F||(F=!0,R())}function Ae(W,Q){_=N(function(){W(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){I||y||(I=!0,ge(L))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(p){case 1:case 2:case 3:var Q=3;break;default:Q=p}var ne=p;p=Q;try{return W()}finally{p=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,Q){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ne=p;p=W;try{return Q()}finally{p=ne}},t.unstable_scheduleCallback=function(W,Q,ne){var ke=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ke+ne:ke):ne=ke,W){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=ne+_e,W={id:d++,callback:Q,priorityLevel:W,startTime:ne,expirationTime:_e,sortIndex:-1},ne>ke?(W.sortIndex=ne,e(c,W),n(u)===null&&W===n(c)&&(A?(T(_),_=-1):A=!0,Ae(D,ne-ke))):(W.sortIndex=_e,e(u,W),I||y||(I=!0,ge(L))),W},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(W){var Q=p;return function(){var ne=p;p=Q;try{return W.apply(this,arguments)}finally{p=ne}}}})(gE);mE.exports=gE;var xA=mE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RA=O,Qt=xA;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _E=new Set,Ea={};function qi(t,e){Ls(t,e),Ls(t+"Capture",e)}function Ls(t,e){for(Ea[t]=e,t=0;t<e.length;t++)_E.add(e[t])}var rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gf=Object.prototype.hasOwnProperty,AA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vy={},Fy={};function NA(t){return gf.call(Fy,t)?!0:gf.call(Vy,t)?!1:AA.test(t)?Fy[t]=!0:(Vy[t]=!0,!1)}function kA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function PA(t,e,n,r){if(e===null||typeof e>"u"||kA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ct[t]=new Pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ct[e]=new Pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ct[t]=new Pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ct[t]=new Pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ct[t]=new Pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ct[t]=new Pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ct[t]=new Pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ct[t]=new Pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ct[t]=new Pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var nm=/[\-:]([a-z])/g;function rm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nm,rm);ct[e]=new Pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nm,rm);ct[e]=new Pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nm,rm);ct[e]=new Pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ct[t]=new Pt(t,1,!1,t.toLowerCase(),null,!1,!1)});ct.xlinkHref=new Pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ct[t]=new Pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function im(t,e,n,r){var i=ct.hasOwnProperty(e)?ct[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(PA(e,n,i,r)&&(n=null),r||i===null?NA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var fr=RA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Kl=Symbol.for("react.element"),as=Symbol.for("react.portal"),ls=Symbol.for("react.fragment"),sm=Symbol.for("react.strict_mode"),_f=Symbol.for("react.profiler"),yE=Symbol.for("react.provider"),vE=Symbol.for("react.context"),om=Symbol.for("react.forward_ref"),yf=Symbol.for("react.suspense"),vf=Symbol.for("react.suspense_list"),am=Symbol.for("react.memo"),wr=Symbol.for("react.lazy"),wE=Symbol.for("react.offscreen"),Uy=Symbol.iterator;function Po(t){return t===null||typeof t!="object"?null:(t=Uy&&t[Uy]||t["@@iterator"],typeof t=="function"?t:null)}var Oe=Object.assign,Td;function Ho(t){if(Td===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Td=e&&e[1]||""}return`
`+Td+t}var Sd=!1;function Cd(t,e){if(!t||Sd)return"";Sd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Sd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ho(t):""}function bA(t){switch(t.tag){case 5:return Ho(t.type);case 16:return Ho("Lazy");case 13:return Ho("Suspense");case 19:return Ho("SuspenseList");case 0:case 2:case 15:return t=Cd(t.type,!1),t;case 11:return t=Cd(t.type.render,!1),t;case 1:return t=Cd(t.type,!0),t;default:return""}}function wf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ls:return"Fragment";case as:return"Portal";case _f:return"Profiler";case sm:return"StrictMode";case yf:return"Suspense";case vf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case vE:return(t.displayName||"Context")+".Consumer";case yE:return(t._context.displayName||"Context")+".Provider";case om:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case am:return e=t.displayName||null,e!==null?e:wf(t.type)||"Memo";case wr:e=t._payload,t=t._init;try{return wf(t(e))}catch{}}return null}function DA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wf(e);case 8:return e===sm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function EE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function OA(t){var e=EE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ql(t){t._valueTracker||(t._valueTracker=OA(t))}function IE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=EE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Bu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ef(t,e){var n=e.checked;return Oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function jy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function TE(t,e){e=e.checked,e!=null&&im(t,"checked",e,!1)}function If(t,e){TE(t,e);var n=Hr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Tf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Tf(t,e.type,Hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function By(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Tf(t,e,n){(e!=="number"||Bu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Go=Array.isArray;function Es(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Hr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Sf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(Go(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Hr(n)}}function SE(t,e){var n=Hr(e.value),r=Hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function $y(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function CE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?CE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Yl,xE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Yl=Yl||document.createElement("div"),Yl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Yl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ia(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var na={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},LA=["Webkit","ms","Moz","O"];Object.keys(na).forEach(function(t){LA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),na[e]=na[t]})});function RE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||na.hasOwnProperty(t)&&na[t]?(""+e).trim():e+"px"}function AE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=RE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var MA=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xf(t,e){if(e){if(MA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Rf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Af=null;function lm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nf=null,Is=null,Ts=null;function Wy(t){if(t=ul(t)){if(typeof Nf!="function")throw Error(j(280));var e=t.stateNode;e&&(e=th(e),Nf(t.stateNode,t.type,e))}}function NE(t){Is?Ts?Ts.push(t):Ts=[t]:Is=t}function kE(){if(Is){var t=Is,e=Ts;if(Ts=Is=null,Wy(t),e)for(t=0;t<e.length;t++)Wy(e[t])}}function PE(t,e){return t(e)}function bE(){}var xd=!1;function DE(t,e,n){if(xd)return t(e,n);xd=!0;try{return PE(t,e,n)}finally{xd=!1,(Is!==null||Ts!==null)&&(bE(),kE())}}function Ta(t,e){var n=t.stateNode;if(n===null)return null;var r=th(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var kf=!1;if(rr)try{var bo={};Object.defineProperty(bo,"passive",{get:function(){kf=!0}}),window.addEventListener("test",bo,bo),window.removeEventListener("test",bo,bo)}catch{kf=!1}function VA(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ra=!1,zu=null,$u=!1,Pf=null,FA={onError:function(t){ra=!0,zu=t}};function UA(t,e,n,r,i,s,o,a,u){ra=!1,zu=null,VA.apply(FA,arguments)}function jA(t,e,n,r,i,s,o,a,u){if(UA.apply(this,arguments),ra){if(ra){var c=zu;ra=!1,zu=null}else throw Error(j(198));$u||($u=!0,Pf=c)}}function Hi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function OE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qy(t){if(Hi(t)!==t)throw Error(j(188))}function BA(t){var e=t.alternate;if(!e){if(e=Hi(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qy(i),t;if(s===r)return qy(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function LE(t){return t=BA(t),t!==null?ME(t):null}function ME(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ME(t);if(e!==null)return e;t=t.sibling}return null}var VE=Qt.unstable_scheduleCallback,Hy=Qt.unstable_cancelCallback,zA=Qt.unstable_shouldYield,$A=Qt.unstable_requestPaint,Be=Qt.unstable_now,WA=Qt.unstable_getCurrentPriorityLevel,um=Qt.unstable_ImmediatePriority,FE=Qt.unstable_UserBlockingPriority,Wu=Qt.unstable_NormalPriority,qA=Qt.unstable_LowPriority,UE=Qt.unstable_IdlePriority,Xc=null,Rn=null;function HA(t){if(Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(Xc,t,void 0,(t.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:QA,GA=Math.log,KA=Math.LN2;function QA(t){return t>>>=0,t===0?32:31-(GA(t)/KA|0)|0}var Xl=64,Jl=4194304;function Ko(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function qu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ko(a):(s&=o,s!==0&&(r=Ko(s)))}else o=n&~i,o!==0?r=Ko(o):s!==0&&(r=Ko(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-mn(e),i=1<<n,r|=t[n],e&=~i;return r}function YA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function XA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-mn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=YA(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function bf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function jE(){var t=Xl;return Xl<<=1,!(Xl&4194240)&&(Xl=64),t}function Rd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function al(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mn(e),t[e]=n}function JA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-mn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function cm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-mn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var pe=0;function BE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var zE,hm,$E,WE,qE,Df=!1,Zl=[],Dr=null,Or=null,Lr=null,Sa=new Map,Ca=new Map,Ir=[],ZA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gy(t,e){switch(t){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":Sa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(e.pointerId)}}function Do(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ul(e),e!==null&&hm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function e1(t,e,n,r,i){switch(e){case"focusin":return Dr=Do(Dr,t,e,n,r,i),!0;case"dragenter":return Or=Do(Or,t,e,n,r,i),!0;case"mouseover":return Lr=Do(Lr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Sa.set(s,Do(Sa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ca.set(s,Do(Ca.get(s)||null,t,e,n,r,i)),!0}return!1}function HE(t){var e=_i(t.target);if(e!==null){var n=Hi(e);if(n!==null){if(e=n.tag,e===13){if(e=OE(n),e!==null){t.blockedOn=e,qE(t.priority,function(){$E(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Eu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Of(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Af=r,n.target.dispatchEvent(r),Af=null}else return e=ul(n),e!==null&&hm(e),t.blockedOn=n,!1;e.shift()}return!0}function Ky(t,e,n){Eu(t)&&n.delete(e)}function t1(){Df=!1,Dr!==null&&Eu(Dr)&&(Dr=null),Or!==null&&Eu(Or)&&(Or=null),Lr!==null&&Eu(Lr)&&(Lr=null),Sa.forEach(Ky),Ca.forEach(Ky)}function Oo(t,e){t.blockedOn===e&&(t.blockedOn=null,Df||(Df=!0,Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority,t1)))}function xa(t){function e(i){return Oo(i,t)}if(0<Zl.length){Oo(Zl[0],t);for(var n=1;n<Zl.length;n++){var r=Zl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Dr!==null&&Oo(Dr,t),Or!==null&&Oo(Or,t),Lr!==null&&Oo(Lr,t),Sa.forEach(e),Ca.forEach(e),n=0;n<Ir.length;n++)r=Ir[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ir.length&&(n=Ir[0],n.blockedOn===null);)HE(n),n.blockedOn===null&&Ir.shift()}var Ss=fr.ReactCurrentBatchConfig,Hu=!0;function n1(t,e,n,r){var i=pe,s=Ss.transition;Ss.transition=null;try{pe=1,dm(t,e,n,r)}finally{pe=i,Ss.transition=s}}function r1(t,e,n,r){var i=pe,s=Ss.transition;Ss.transition=null;try{pe=4,dm(t,e,n,r)}finally{pe=i,Ss.transition=s}}function dm(t,e,n,r){if(Hu){var i=Of(t,e,n,r);if(i===null)Vd(t,e,r,Gu,n),Gy(t,r);else if(e1(i,t,e,n,r))r.stopPropagation();else if(Gy(t,r),e&4&&-1<ZA.indexOf(t)){for(;i!==null;){var s=ul(i);if(s!==null&&zE(s),s=Of(t,e,n,r),s===null&&Vd(t,e,r,Gu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Vd(t,e,r,null,n)}}var Gu=null;function Of(t,e,n,r){if(Gu=null,t=lm(r),t=_i(t),t!==null)if(e=Hi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=OE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gu=t,null}function GE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(WA()){case um:return 1;case FE:return 4;case Wu:case qA:return 16;case UE:return 536870912;default:return 16}default:return 16}}var Ar=null,fm=null,Iu=null;function KE(){if(Iu)return Iu;var t,e=fm,n=e.length,r,i="value"in Ar?Ar.value:Ar.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Iu=i.slice(t,1<r?1-r:void 0)}function Tu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function eu(){return!0}function Qy(){return!1}function Xt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?eu:Qy,this.isPropagationStopped=Qy,this}return Oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=eu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=eu)},persist:function(){},isPersistent:eu}),e}var no={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pm=Xt(no),ll=Oe({},no,{view:0,detail:0}),i1=Xt(ll),Ad,Nd,Lo,Jc=Oe({},ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Lo&&(Lo&&t.type==="mousemove"?(Ad=t.screenX-Lo.screenX,Nd=t.screenY-Lo.screenY):Nd=Ad=0,Lo=t),Ad)},movementY:function(t){return"movementY"in t?t.movementY:Nd}}),Yy=Xt(Jc),s1=Oe({},Jc,{dataTransfer:0}),o1=Xt(s1),a1=Oe({},ll,{relatedTarget:0}),kd=Xt(a1),l1=Oe({},no,{animationName:0,elapsedTime:0,pseudoElement:0}),u1=Xt(l1),c1=Oe({},no,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),h1=Xt(c1),d1=Oe({},no,{data:0}),Xy=Xt(d1),f1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=m1[t])?!!e[t]:!1}function mm(){return g1}var _1=Oe({},ll,{key:function(t){if(t.key){var e=f1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?p1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mm,charCode:function(t){return t.type==="keypress"?Tu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),y1=Xt(_1),v1=Oe({},Jc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jy=Xt(v1),w1=Oe({},ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mm}),E1=Xt(w1),I1=Oe({},no,{propertyName:0,elapsedTime:0,pseudoElement:0}),T1=Xt(I1),S1=Oe({},Jc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),C1=Xt(S1),x1=[9,13,27,32],gm=rr&&"CompositionEvent"in window,ia=null;rr&&"documentMode"in document&&(ia=document.documentMode);var R1=rr&&"TextEvent"in window&&!ia,QE=rr&&(!gm||ia&&8<ia&&11>=ia),Zy=" ",ev=!1;function YE(t,e){switch(t){case"keyup":return x1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function XE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var us=!1;function A1(t,e){switch(t){case"compositionend":return XE(e);case"keypress":return e.which!==32?null:(ev=!0,Zy);case"textInput":return t=e.data,t===Zy&&ev?null:t;default:return null}}function N1(t,e){if(us)return t==="compositionend"||!gm&&YE(t,e)?(t=KE(),Iu=fm=Ar=null,us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return QE&&e.locale!=="ko"?null:e.data;default:return null}}var k1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!k1[t.type]:e==="textarea"}function JE(t,e,n,r){NE(r),e=Ku(e,"onChange"),0<e.length&&(n=new pm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var sa=null,Ra=null;function P1(t){uI(t,0)}function Zc(t){var e=ds(t);if(IE(e))return t}function b1(t,e){if(t==="change")return e}var ZE=!1;if(rr){var Pd;if(rr){var bd="oninput"in document;if(!bd){var nv=document.createElement("div");nv.setAttribute("oninput","return;"),bd=typeof nv.oninput=="function"}Pd=bd}else Pd=!1;ZE=Pd&&(!document.documentMode||9<document.documentMode)}function rv(){sa&&(sa.detachEvent("onpropertychange",eI),Ra=sa=null)}function eI(t){if(t.propertyName==="value"&&Zc(Ra)){var e=[];JE(e,Ra,t,lm(t)),DE(P1,e)}}function D1(t,e,n){t==="focusin"?(rv(),sa=e,Ra=n,sa.attachEvent("onpropertychange",eI)):t==="focusout"&&rv()}function O1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zc(Ra)}function L1(t,e){if(t==="click")return Zc(e)}function M1(t,e){if(t==="input"||t==="change")return Zc(e)}function V1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vn=typeof Object.is=="function"?Object.is:V1;function Aa(t,e){if(vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!gf.call(e,i)||!vn(t[i],e[i]))return!1}return!0}function iv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sv(t,e){var n=iv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=iv(n)}}function tI(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?tI(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function nI(){for(var t=window,e=Bu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bu(t.document)}return e}function _m(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function F1(t){var e=nI(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&tI(n.ownerDocument.documentElement,n)){if(r!==null&&_m(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=sv(n,s);var o=sv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var U1=rr&&"documentMode"in document&&11>=document.documentMode,cs=null,Lf=null,oa=null,Mf=!1;function ov(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mf||cs==null||cs!==Bu(r)||(r=cs,"selectionStart"in r&&_m(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oa&&Aa(oa,r)||(oa=r,r=Ku(Lf,"onSelect"),0<r.length&&(e=new pm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=cs)))}function tu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var hs={animationend:tu("Animation","AnimationEnd"),animationiteration:tu("Animation","AnimationIteration"),animationstart:tu("Animation","AnimationStart"),transitionend:tu("Transition","TransitionEnd")},Dd={},rI={};rr&&(rI=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function eh(t){if(Dd[t])return Dd[t];if(!hs[t])return t;var e=hs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in rI)return Dd[t]=e[n];return t}var iI=eh("animationend"),sI=eh("animationiteration"),oI=eh("animationstart"),aI=eh("transitionend"),lI=new Map,av="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ti(t,e){lI.set(t,e),qi(e,[t])}for(var Od=0;Od<av.length;Od++){var Ld=av[Od],j1=Ld.toLowerCase(),B1=Ld[0].toUpperCase()+Ld.slice(1);ti(j1,"on"+B1)}ti(iI,"onAnimationEnd");ti(sI,"onAnimationIteration");ti(oI,"onAnimationStart");ti("dblclick","onDoubleClick");ti("focusin","onFocus");ti("focusout","onBlur");ti(aI,"onTransitionEnd");Ls("onMouseEnter",["mouseout","mouseover"]);Ls("onMouseLeave",["mouseout","mouseover"]);Ls("onPointerEnter",["pointerout","pointerover"]);Ls("onPointerLeave",["pointerout","pointerover"]);qi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qi("onBeforeInput",["compositionend","keypress","textInput","paste"]);qi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qo));function lv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,jA(r,e,void 0,t),t.currentTarget=null}function uI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;lv(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;lv(i,a,c),s=u}}}if($u)throw t=Pf,$u=!1,Pf=null,t}function Ce(t,e){var n=e[Bf];n===void 0&&(n=e[Bf]=new Set);var r=t+"__bubble";n.has(r)||(cI(e,t,2,!1),n.add(r))}function Md(t,e,n){var r=0;e&&(r|=4),cI(n,t,r,e)}var nu="_reactListening"+Math.random().toString(36).slice(2);function Na(t){if(!t[nu]){t[nu]=!0,_E.forEach(function(n){n!=="selectionchange"&&(z1.has(n)||Md(n,!1,t),Md(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nu]||(e[nu]=!0,Md("selectionchange",!1,e))}}function cI(t,e,n,r){switch(GE(e)){case 1:var i=n1;break;case 4:i=r1;break;default:i=dm}n=i.bind(null,e,n,t),i=void 0,!kf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Vd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=_i(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}DE(function(){var c=s,d=lm(n),f=[];e:{var p=lI.get(t);if(p!==void 0){var y=pm,I=t;switch(t){case"keypress":if(Tu(n)===0)break e;case"keydown":case"keyup":y=y1;break;case"focusin":I="focus",y=kd;break;case"focusout":I="blur",y=kd;break;case"beforeblur":case"afterblur":y=kd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Yy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=o1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=E1;break;case iI:case sI:case oI:y=u1;break;case aI:y=T1;break;case"scroll":y=i1;break;case"wheel":y=C1;break;case"copy":case"cut":case"paste":y=h1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Jy}var A=(e&4)!==0,N=!A&&t==="scroll",T=A?p!==null?p+"Capture":null:p;A=[];for(var w=c,x;w!==null;){x=w;var D=x.stateNode;if(x.tag===5&&D!==null&&(x=D,T!==null&&(D=Ta(w,T),D!=null&&A.push(ka(w,D,x)))),N)break;w=w.return}0<A.length&&(p=new y(p,I,null,n,d),f.push({event:p,listeners:A}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",p&&n!==Af&&(I=n.relatedTarget||n.fromElement)&&(_i(I)||I[ir]))break e;if((y||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,y?(I=n.relatedTarget||n.toElement,y=c,I=I?_i(I):null,I!==null&&(N=Hi(I),I!==N||I.tag!==5&&I.tag!==6)&&(I=null)):(y=null,I=c),y!==I)){if(A=Yy,D="onMouseLeave",T="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(A=Jy,D="onPointerLeave",T="onPointerEnter",w="pointer"),N=y==null?p:ds(y),x=I==null?p:ds(I),p=new A(D,w+"leave",y,n,d),p.target=N,p.relatedTarget=x,D=null,_i(d)===c&&(A=new A(T,w+"enter",I,n,d),A.target=x,A.relatedTarget=N,D=A),N=D,y&&I)t:{for(A=y,T=I,w=0,x=A;x;x=ns(x))w++;for(x=0,D=T;D;D=ns(D))x++;for(;0<w-x;)A=ns(A),w--;for(;0<x-w;)T=ns(T),x--;for(;w--;){if(A===T||T!==null&&A===T.alternate)break t;A=ns(A),T=ns(T)}A=null}else A=null;y!==null&&uv(f,p,y,A,!1),I!==null&&N!==null&&uv(f,N,I,A,!0)}}e:{if(p=c?ds(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var L=b1;else if(tv(p))if(ZE)L=M1;else{L=O1;var F=D1}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(L=L1);if(L&&(L=L(t,c))){JE(f,L,n,d);break e}F&&F(t,p,c),t==="focusout"&&(F=p._wrapperState)&&F.controlled&&p.type==="number"&&Tf(p,"number",p.value)}switch(F=c?ds(c):window,t){case"focusin":(tv(F)||F.contentEditable==="true")&&(cs=F,Lf=c,oa=null);break;case"focusout":oa=Lf=cs=null;break;case"mousedown":Mf=!0;break;case"contextmenu":case"mouseup":case"dragend":Mf=!1,ov(f,n,d);break;case"selectionchange":if(U1)break;case"keydown":case"keyup":ov(f,n,d)}var S;if(gm)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else us?YE(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(QE&&n.locale!=="ko"&&(us||_!=="onCompositionStart"?_==="onCompositionEnd"&&us&&(S=KE()):(Ar=d,fm="value"in Ar?Ar.value:Ar.textContent,us=!0)),F=Ku(c,_),0<F.length&&(_=new Xy(_,t,null,n,d),f.push({event:_,listeners:F}),S?_.data=S:(S=XE(n),S!==null&&(_.data=S)))),(S=R1?A1(t,n):N1(t,n))&&(c=Ku(c,"onBeforeInput"),0<c.length&&(d=new Xy("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=S))}uI(f,e)})}function ka(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ku(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ta(t,n),s!=null&&r.unshift(ka(t,s,i)),s=Ta(t,e),s!=null&&r.push(ka(t,s,i))),t=t.return}return r}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function uv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Ta(n,s),u!=null&&o.unshift(ka(n,u,a))):i||(u=Ta(n,s),u!=null&&o.push(ka(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $1=/\r\n?/g,W1=/\u0000|\uFFFD/g;function cv(t){return(typeof t=="string"?t:""+t).replace($1,`
`).replace(W1,"")}function ru(t,e,n){if(e=cv(e),cv(t)!==e&&n)throw Error(j(425))}function Qu(){}var Vf=null,Ff=null;function Uf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jf=typeof setTimeout=="function"?setTimeout:void 0,q1=typeof clearTimeout=="function"?clearTimeout:void 0,hv=typeof Promise=="function"?Promise:void 0,H1=typeof queueMicrotask=="function"?queueMicrotask:typeof hv<"u"?function(t){return hv.resolve(null).then(t).catch(G1)}:jf;function G1(t){setTimeout(function(){throw t})}function Fd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),xa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xa(e)}function Mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ro=Math.random().toString(36).slice(2),Sn="__reactFiber$"+ro,Pa="__reactProps$"+ro,ir="__reactContainer$"+ro,Bf="__reactEvents$"+ro,K1="__reactListeners$"+ro,Q1="__reactHandles$"+ro;function _i(t){var e=t[Sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ir]||n[Sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dv(t);t!==null;){if(n=t[Sn])return n;t=dv(t)}return e}t=n,n=t.parentNode}return null}function ul(t){return t=t[Sn]||t[ir],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function th(t){return t[Pa]||null}var zf=[],fs=-1;function ni(t){return{current:t}}function Re(t){0>fs||(t.current=zf[fs],zf[fs]=null,fs--)}function Te(t,e){fs++,zf[fs]=t.current,t.current=e}var Gr={},Tt=ni(Gr),Vt=ni(!1),Ai=Gr;function Ms(t,e){var n=t.type.contextTypes;if(!n)return Gr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ft(t){return t=t.childContextTypes,t!=null}function Yu(){Re(Vt),Re(Tt)}function fv(t,e,n){if(Tt.current!==Gr)throw Error(j(168));Te(Tt,e),Te(Vt,n)}function hI(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,DA(t)||"Unknown",i));return Oe({},n,r)}function Xu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gr,Ai=Tt.current,Te(Tt,t),Te(Vt,Vt.current),!0}function pv(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=hI(t,e,Ai),r.__reactInternalMemoizedMergedChildContext=t,Re(Vt),Re(Tt),Te(Tt,t)):Re(Vt),Te(Vt,n)}var qn=null,nh=!1,Ud=!1;function dI(t){qn===null?qn=[t]:qn.push(t)}function Y1(t){nh=!0,dI(t)}function ri(){if(!Ud&&qn!==null){Ud=!0;var t=0,e=pe;try{var n=qn;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}qn=null,nh=!1}catch(i){throw qn!==null&&(qn=qn.slice(t+1)),VE(um,ri),i}finally{pe=e,Ud=!1}}return null}var ps=[],ms=0,Ju=null,Zu=0,Jt=[],Zt=0,Ni=null,Gn=1,Kn="";function fi(t,e){ps[ms++]=Zu,ps[ms++]=Ju,Ju=t,Zu=e}function fI(t,e,n){Jt[Zt++]=Gn,Jt[Zt++]=Kn,Jt[Zt++]=Ni,Ni=t;var r=Gn;t=Kn;var i=32-mn(r)-1;r&=~(1<<i),n+=1;var s=32-mn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Gn=1<<32-mn(e)+i|n<<i|r,Kn=s+t}else Gn=1<<s|n<<i|r,Kn=t}function ym(t){t.return!==null&&(fi(t,1),fI(t,1,0))}function vm(t){for(;t===Ju;)Ju=ps[--ms],ps[ms]=null,Zu=ps[--ms],ps[ms]=null;for(;t===Ni;)Ni=Jt[--Zt],Jt[Zt]=null,Kn=Jt[--Zt],Jt[Zt]=null,Gn=Jt[--Zt],Jt[Zt]=null}var Kt=null,qt=null,Ne=!1,hn=null;function pI(t,e){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Kt=t,qt=Mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Kt=t,qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ni!==null?{id:Gn,overflow:Kn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Kt=t,qt=null,!0):!1;default:return!1}}function $f(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wf(t){if(Ne){var e=qt;if(e){var n=e;if(!mv(t,e)){if($f(t))throw Error(j(418));e=Mr(n.nextSibling);var r=Kt;e&&mv(t,e)?pI(r,n):(t.flags=t.flags&-4097|2,Ne=!1,Kt=t)}}else{if($f(t))throw Error(j(418));t.flags=t.flags&-4097|2,Ne=!1,Kt=t}}}function gv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Kt=t}function iu(t){if(t!==Kt)return!1;if(!Ne)return gv(t),Ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Uf(t.type,t.memoizedProps)),e&&(e=qt)){if($f(t))throw mI(),Error(j(418));for(;e;)pI(t,e),e=Mr(e.nextSibling)}if(gv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){qt=Mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}qt=null}}else qt=Kt?Mr(t.stateNode.nextSibling):null;return!0}function mI(){for(var t=qt;t;)t=Mr(t.nextSibling)}function Vs(){qt=Kt=null,Ne=!1}function wm(t){hn===null?hn=[t]:hn.push(t)}var X1=fr.ReactCurrentBatchConfig;function Mo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function su(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _v(t){var e=t._init;return e(t._payload)}function gI(t){function e(T,w){if(t){var x=T.deletions;x===null?(T.deletions=[w],T.flags|=16):x.push(w)}}function n(T,w){if(!t)return null;for(;w!==null;)e(T,w),w=w.sibling;return null}function r(T,w){for(T=new Map;w!==null;)w.key!==null?T.set(w.key,w):T.set(w.index,w),w=w.sibling;return T}function i(T,w){return T=jr(T,w),T.index=0,T.sibling=null,T}function s(T,w,x){return T.index=x,t?(x=T.alternate,x!==null?(x=x.index,x<w?(T.flags|=2,w):x):(T.flags|=2,w)):(T.flags|=1048576,w)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function a(T,w,x,D){return w===null||w.tag!==6?(w=Hd(x,T.mode,D),w.return=T,w):(w=i(w,x),w.return=T,w)}function u(T,w,x,D){var L=x.type;return L===ls?d(T,w,x.props.children,D,x.key):w!==null&&(w.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===wr&&_v(L)===w.type)?(D=i(w,x.props),D.ref=Mo(T,w,x),D.return=T,D):(D=ku(x.type,x.key,x.props,null,T.mode,D),D.ref=Mo(T,w,x),D.return=T,D)}function c(T,w,x,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==x.containerInfo||w.stateNode.implementation!==x.implementation?(w=Gd(x,T.mode,D),w.return=T,w):(w=i(w,x.children||[]),w.return=T,w)}function d(T,w,x,D,L){return w===null||w.tag!==7?(w=Si(x,T.mode,D,L),w.return=T,w):(w=i(w,x),w.return=T,w)}function f(T,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Hd(""+w,T.mode,x),w.return=T,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Kl:return x=ku(w.type,w.key,w.props,null,T.mode,x),x.ref=Mo(T,null,w),x.return=T,x;case as:return w=Gd(w,T.mode,x),w.return=T,w;case wr:var D=w._init;return f(T,D(w._payload),x)}if(Go(w)||Po(w))return w=Si(w,T.mode,x,null),w.return=T,w;su(T,w)}return null}function p(T,w,x,D){var L=w!==null?w.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return L!==null?null:a(T,w,""+x,D);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Kl:return x.key===L?u(T,w,x,D):null;case as:return x.key===L?c(T,w,x,D):null;case wr:return L=x._init,p(T,w,L(x._payload),D)}if(Go(x)||Po(x))return L!==null?null:d(T,w,x,D,null);su(T,x)}return null}function y(T,w,x,D,L){if(typeof D=="string"&&D!==""||typeof D=="number")return T=T.get(x)||null,a(w,T,""+D,L);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Kl:return T=T.get(D.key===null?x:D.key)||null,u(w,T,D,L);case as:return T=T.get(D.key===null?x:D.key)||null,c(w,T,D,L);case wr:var F=D._init;return y(T,w,x,F(D._payload),L)}if(Go(D)||Po(D))return T=T.get(x)||null,d(w,T,D,L,null);su(w,D)}return null}function I(T,w,x,D){for(var L=null,F=null,S=w,_=w=0,E=null;S!==null&&_<x.length;_++){S.index>_?(E=S,S=null):E=S.sibling;var C=p(T,S,x[_],D);if(C===null){S===null&&(S=E);break}t&&S&&C.alternate===null&&e(T,S),w=s(C,w,_),F===null?L=C:F.sibling=C,F=C,S=E}if(_===x.length)return n(T,S),Ne&&fi(T,_),L;if(S===null){for(;_<x.length;_++)S=f(T,x[_],D),S!==null&&(w=s(S,w,_),F===null?L=S:F.sibling=S,F=S);return Ne&&fi(T,_),L}for(S=r(T,S);_<x.length;_++)E=y(S,T,_,x[_],D),E!==null&&(t&&E.alternate!==null&&S.delete(E.key===null?_:E.key),w=s(E,w,_),F===null?L=E:F.sibling=E,F=E);return t&&S.forEach(function(k){return e(T,k)}),Ne&&fi(T,_),L}function A(T,w,x,D){var L=Po(x);if(typeof L!="function")throw Error(j(150));if(x=L.call(x),x==null)throw Error(j(151));for(var F=L=null,S=w,_=w=0,E=null,C=x.next();S!==null&&!C.done;_++,C=x.next()){S.index>_?(E=S,S=null):E=S.sibling;var k=p(T,S,C.value,D);if(k===null){S===null&&(S=E);break}t&&S&&k.alternate===null&&e(T,S),w=s(k,w,_),F===null?L=k:F.sibling=k,F=k,S=E}if(C.done)return n(T,S),Ne&&fi(T,_),L;if(S===null){for(;!C.done;_++,C=x.next())C=f(T,C.value,D),C!==null&&(w=s(C,w,_),F===null?L=C:F.sibling=C,F=C);return Ne&&fi(T,_),L}for(S=r(T,S);!C.done;_++,C=x.next())C=y(S,T,_,C.value,D),C!==null&&(t&&C.alternate!==null&&S.delete(C.key===null?_:C.key),w=s(C,w,_),F===null?L=C:F.sibling=C,F=C);return t&&S.forEach(function(P){return e(T,P)}),Ne&&fi(T,_),L}function N(T,w,x,D){if(typeof x=="object"&&x!==null&&x.type===ls&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Kl:e:{for(var L=x.key,F=w;F!==null;){if(F.key===L){if(L=x.type,L===ls){if(F.tag===7){n(T,F.sibling),w=i(F,x.props.children),w.return=T,T=w;break e}}else if(F.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===wr&&_v(L)===F.type){n(T,F.sibling),w=i(F,x.props),w.ref=Mo(T,F,x),w.return=T,T=w;break e}n(T,F);break}else e(T,F);F=F.sibling}x.type===ls?(w=Si(x.props.children,T.mode,D,x.key),w.return=T,T=w):(D=ku(x.type,x.key,x.props,null,T.mode,D),D.ref=Mo(T,w,x),D.return=T,T=D)}return o(T);case as:e:{for(F=x.key;w!==null;){if(w.key===F)if(w.tag===4&&w.stateNode.containerInfo===x.containerInfo&&w.stateNode.implementation===x.implementation){n(T,w.sibling),w=i(w,x.children||[]),w.return=T,T=w;break e}else{n(T,w);break}else e(T,w);w=w.sibling}w=Gd(x,T.mode,D),w.return=T,T=w}return o(T);case wr:return F=x._init,N(T,w,F(x._payload),D)}if(Go(x))return I(T,w,x,D);if(Po(x))return A(T,w,x,D);su(T,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,w!==null&&w.tag===6?(n(T,w.sibling),w=i(w,x),w.return=T,T=w):(n(T,w),w=Hd(x,T.mode,D),w.return=T,T=w),o(T)):n(T,w)}return N}var Fs=gI(!0),_I=gI(!1),ec=ni(null),tc=null,gs=null,Em=null;function Im(){Em=gs=tc=null}function Tm(t){var e=ec.current;Re(ec),t._currentValue=e}function qf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Cs(t,e){tc=t,Em=gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ot=!0),t.firstContext=null)}function sn(t){var e=t._currentValue;if(Em!==t)if(t={context:t,memoizedValue:e,next:null},gs===null){if(tc===null)throw Error(j(308));gs=t,tc.dependencies={lanes:0,firstContext:t}}else gs=gs.next=t;return e}var yi=null;function Sm(t){yi===null?yi=[t]:yi.push(t)}function yI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Sm(e)):(n.next=i.next,i.next=n),e.interleaved=n,sr(t,r)}function sr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Er=!1;function Cm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,sr(t,n)}return i=r.interleaved,i===null?(e.next=e,Sm(r)):(e.next=i.next,i.next=e),r.interleaved=e,sr(t,n)}function Su(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cm(t,n)}}function yv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nc(t,e,n,r){var i=t.updateQueue;Er=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var p=a.lane,y=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var I=t,A=a;switch(p=e,y=n,A.tag){case 1:if(I=A.payload,typeof I=="function"){f=I.call(y,f,p);break e}f=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=A.payload,p=typeof I=="function"?I.call(y,f,p):I,p==null)break e;f=Oe({},f,p);break e;case 2:Er=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=y,u=f):d=d.next=y,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Pi|=o,t.lanes=o,t.memoizedState=f}}function vv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var cl={},An=ni(cl),ba=ni(cl),Da=ni(cl);function vi(t){if(t===cl)throw Error(j(174));return t}function xm(t,e){switch(Te(Da,e),Te(ba,t),Te(An,cl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Cf(e,t)}Re(An),Te(An,e)}function Us(){Re(An),Re(ba),Re(Da)}function wI(t){vi(Da.current);var e=vi(An.current),n=Cf(e,t.type);e!==n&&(Te(ba,t),Te(An,n))}function Rm(t){ba.current===t&&(Re(An),Re(ba))}var Pe=ni(0);function rc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jd=[];function Am(){for(var t=0;t<jd.length;t++)jd[t]._workInProgressVersionPrimary=null;jd.length=0}var Cu=fr.ReactCurrentDispatcher,Bd=fr.ReactCurrentBatchConfig,ki=0,De=null,Ge=null,et=null,ic=!1,aa=!1,Oa=0,J1=0;function gt(){throw Error(j(321))}function Nm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vn(t[n],e[n]))return!1;return!0}function km(t,e,n,r,i,s){if(ki=s,De=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cu.current=t===null||t.memoizedState===null?nN:rN,t=n(r,i),aa){s=0;do{if(aa=!1,Oa=0,25<=s)throw Error(j(301));s+=1,et=Ge=null,e.updateQueue=null,Cu.current=iN,t=n(r,i)}while(aa)}if(Cu.current=sc,e=Ge!==null&&Ge.next!==null,ki=0,et=Ge=De=null,ic=!1,e)throw Error(j(300));return t}function Pm(){var t=Oa!==0;return Oa=0,t}function Tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?De.memoizedState=et=t:et=et.next=t,et}function on(){if(Ge===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=et===null?De.memoizedState:et.next;if(e!==null)et=e,Ge=t;else{if(t===null)throw Error(j(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},et===null?De.memoizedState=et=t:et=et.next=t}return et}function La(t,e){return typeof e=="function"?e(t):e}function zd(t){var e=on(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((ki&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,De.lanes|=d,Pi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,vn(r,e.memoizedState)||(Ot=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,De.lanes|=s,Pi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $d(t){var e=on(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);vn(s,e.memoizedState)||(Ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function EI(){}function II(t,e){var n=De,r=on(),i=e(),s=!vn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ot=!0),r=r.queue,bm(CI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,Ma(9,SI.bind(null,n,r,i,e),void 0,null),rt===null)throw Error(j(349));ki&30||TI(n,e,i)}return i}function TI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function SI(t,e,n,r){e.value=n,e.getSnapshot=r,xI(e)&&RI(t)}function CI(t,e,n){return n(function(){xI(e)&&RI(t)})}function xI(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vn(t,n)}catch{return!0}}function RI(t){var e=sr(t,1);e!==null&&gn(e,t,1,-1)}function wv(t){var e=Tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:t},e.queue=t,t=t.dispatch=tN.bind(null,De,t),[e.memoizedState,t]}function Ma(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function AI(){return on().memoizedState}function xu(t,e,n,r){var i=Tn();De.flags|=t,i.memoizedState=Ma(1|e,n,void 0,r===void 0?null:r)}function rh(t,e,n,r){var i=on();r=r===void 0?null:r;var s=void 0;if(Ge!==null){var o=Ge.memoizedState;if(s=o.destroy,r!==null&&Nm(r,o.deps)){i.memoizedState=Ma(e,n,s,r);return}}De.flags|=t,i.memoizedState=Ma(1|e,n,s,r)}function Ev(t,e){return xu(8390656,8,t,e)}function bm(t,e){return rh(2048,8,t,e)}function NI(t,e){return rh(4,2,t,e)}function kI(t,e){return rh(4,4,t,e)}function PI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function bI(t,e,n){return n=n!=null?n.concat([t]):null,rh(4,4,PI.bind(null,e,t),n)}function Dm(){}function DI(t,e){var n=on();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Nm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function OI(t,e){var n=on();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Nm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function LI(t,e,n){return ki&21?(vn(n,e)||(n=jE(),De.lanes|=n,Pi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ot=!0),t.memoizedState=n)}function Z1(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=Bd.transition;Bd.transition={};try{t(!1),e()}finally{pe=n,Bd.transition=r}}function MI(){return on().memoizedState}function eN(t,e,n){var r=Ur(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},VI(t))FI(e,n);else if(n=yI(t,e,n,r),n!==null){var i=At();gn(n,t,r,i),UI(n,e,r)}}function tN(t,e,n){var r=Ur(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(VI(t))FI(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,vn(a,o)){var u=e.interleaved;u===null?(i.next=i,Sm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=yI(t,e,i,r),n!==null&&(i=At(),gn(n,t,r,i),UI(n,e,r))}}function VI(t){var e=t.alternate;return t===De||e!==null&&e===De}function FI(t,e){aa=ic=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function UI(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cm(t,n)}}var sc={readContext:sn,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useInsertionEffect:gt,useLayoutEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,useSyncExternalStore:gt,useId:gt,unstable_isNewReconciler:!1},nN={readContext:sn,useCallback:function(t,e){return Tn().memoizedState=[t,e===void 0?null:e],t},useContext:sn,useEffect:Ev,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xu(4194308,4,PI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xu(4194308,4,t,e)},useInsertionEffect:function(t,e){return xu(4,2,t,e)},useMemo:function(t,e){var n=Tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=eN.bind(null,De,t),[r.memoizedState,t]},useRef:function(t){var e=Tn();return t={current:t},e.memoizedState=t},useState:wv,useDebugValue:Dm,useDeferredValue:function(t){return Tn().memoizedState=t},useTransition:function(){var t=wv(!1),e=t[0];return t=Z1.bind(null,t[1]),Tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=De,i=Tn();if(Ne){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),rt===null)throw Error(j(349));ki&30||TI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ev(CI.bind(null,r,s,t),[t]),r.flags|=2048,Ma(9,SI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Tn(),e=rt.identifierPrefix;if(Ne){var n=Kn,r=Gn;n=(r&~(1<<32-mn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=J1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},rN={readContext:sn,useCallback:DI,useContext:sn,useEffect:bm,useImperativeHandle:bI,useInsertionEffect:NI,useLayoutEffect:kI,useMemo:OI,useReducer:zd,useRef:AI,useState:function(){return zd(La)},useDebugValue:Dm,useDeferredValue:function(t){var e=on();return LI(e,Ge.memoizedState,t)},useTransition:function(){var t=zd(La)[0],e=on().memoizedState;return[t,e]},useMutableSource:EI,useSyncExternalStore:II,useId:MI,unstable_isNewReconciler:!1},iN={readContext:sn,useCallback:DI,useContext:sn,useEffect:bm,useImperativeHandle:bI,useInsertionEffect:NI,useLayoutEffect:kI,useMemo:OI,useReducer:$d,useRef:AI,useState:function(){return $d(La)},useDebugValue:Dm,useDeferredValue:function(t){var e=on();return Ge===null?e.memoizedState=t:LI(e,Ge.memoizedState,t)},useTransition:function(){var t=$d(La)[0],e=on().memoizedState;return[t,e]},useMutableSource:EI,useSyncExternalStore:II,useId:MI,unstable_isNewReconciler:!1};function un(t,e){if(t&&t.defaultProps){e=Oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ih={isMounted:function(t){return(t=t._reactInternals)?Hi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=At(),i=Ur(t),s=Zn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Vr(t,s,i),e!==null&&(gn(e,t,i,r),Su(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=At(),i=Ur(t),s=Zn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Vr(t,s,i),e!==null&&(gn(e,t,i,r),Su(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=At(),r=Ur(t),i=Zn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Vr(t,i,r),e!==null&&(gn(e,t,r,n),Su(e,t,r))}};function Iv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Aa(n,r)||!Aa(i,s):!0}function jI(t,e,n){var r=!1,i=Gr,s=e.contextType;return typeof s=="object"&&s!==null?s=sn(s):(i=Ft(e)?Ai:Tt.current,r=e.contextTypes,s=(r=r!=null)?Ms(t,i):Gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ih,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Tv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ih.enqueueReplaceState(e,e.state,null)}function Gf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Cm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=sn(s):(s=Ft(e)?Ai:Tt.current,i.context=Ms(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ih.enqueueReplaceState(i,i.state,null),nc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function js(t,e){try{var n="",r=e;do n+=bA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Wd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Kf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var sN=typeof WeakMap=="function"?WeakMap:Map;function BI(t,e,n){n=Zn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ac||(ac=!0,ip=r),Kf(t,e)},n}function zI(t,e,n){n=Zn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Kf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Kf(t,e),typeof r!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Sv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new sN;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=vN.bind(null,t,e,n),e.then(t,t))}function Cv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Zn(-1,1),e.tag=2,Vr(n,e,1))),n.lanes|=1),t)}var oN=fr.ReactCurrentOwner,Ot=!1;function Rt(t,e,n,r){e.child=t===null?_I(e,null,n,r):Fs(e,t.child,n,r)}function Rv(t,e,n,r,i){n=n.render;var s=e.ref;return Cs(e,i),r=km(t,e,n,r,s,i),n=Pm(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,or(t,e,i)):(Ne&&n&&ym(e),e.flags|=1,Rt(t,e,r,i),e.child)}function Av(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Bm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,$I(t,e,s,r,i)):(t=ku(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Aa,n(o,r)&&t.ref===e.ref)return or(t,e,i)}return e.flags|=1,t=jr(s,r),t.ref=e.ref,t.return=e,e.child=t}function $I(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Aa(s,r)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ot=!0);else return e.lanes=t.lanes,or(t,e,i)}return Qf(t,e,n,r,i)}function WI(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(ys,Wt),Wt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Te(ys,Wt),Wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Te(ys,Wt),Wt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Te(ys,Wt),Wt|=r;return Rt(t,e,i,n),e.child}function qI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qf(t,e,n,r,i){var s=Ft(n)?Ai:Tt.current;return s=Ms(e,s),Cs(e,i),n=km(t,e,n,r,s,i),r=Pm(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,or(t,e,i)):(Ne&&r&&ym(e),e.flags|=1,Rt(t,e,n,i),e.child)}function Nv(t,e,n,r,i){if(Ft(n)){var s=!0;Xu(e)}else s=!1;if(Cs(e,i),e.stateNode===null)Ru(t,e),jI(e,n,r),Gf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=sn(c):(c=Ft(n)?Ai:Tt.current,c=Ms(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Tv(e,o,r,c),Er=!1;var p=e.memoizedState;o.state=p,nc(e,r,o,i),u=e.memoizedState,a!==r||p!==u||Vt.current||Er?(typeof d=="function"&&(Hf(e,n,d,r),u=e.memoizedState),(a=Er||Iv(e,n,a,r,p,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,vI(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:un(e.type,a),o.props=c,f=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=sn(u):(u=Ft(n)?Ai:Tt.current,u=Ms(e,u));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==u)&&Tv(e,o,r,u),Er=!1,p=e.memoizedState,o.state=p,nc(e,r,o,i);var I=e.memoizedState;a!==f||p!==I||Vt.current||Er?(typeof y=="function"&&(Hf(e,n,y,r),I=e.memoizedState),(c=Er||Iv(e,n,c,r,p,I,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,I,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,I,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),o.props=r,o.state=I,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Yf(t,e,n,r,s,i)}function Yf(t,e,n,r,i,s){qI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&pv(e,n,!1),or(t,e,s);r=e.stateNode,oN.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Fs(e,t.child,null,s),e.child=Fs(e,null,a,s)):Rt(t,e,a,s),e.memoizedState=r.state,i&&pv(e,n,!0),e.child}function HI(t){var e=t.stateNode;e.pendingContext?fv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&fv(t,e.context,!1),xm(t,e.containerInfo)}function kv(t,e,n,r,i){return Vs(),wm(i),e.flags|=256,Rt(t,e,n,r),e.child}var Xf={dehydrated:null,treeContext:null,retryLane:0};function Jf(t){return{baseLanes:t,cachePool:null,transitions:null}}function GI(t,e,n){var r=e.pendingProps,i=Pe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Te(Pe,i&1),t===null)return Wf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ah(o,r,0,null),t=Si(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Jf(n),e.memoizedState=Xf,t):Om(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return aN(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=jr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=jr(a,s):(s=Si(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Jf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Xf,r}return s=t.child,t=s.sibling,r=jr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Om(t,e){return e=ah({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ou(t,e,n,r){return r!==null&&wm(r),Fs(e,t.child,null,n),t=Om(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function aN(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Wd(Error(j(422))),ou(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ah({mode:"visible",children:r.children},i,0,null),s=Si(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Fs(e,t.child,null,o),e.child.memoizedState=Jf(o),e.memoizedState=Xf,s);if(!(e.mode&1))return ou(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(j(419)),r=Wd(s,r,void 0),ou(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ot||a){if(r=rt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,sr(t,i),gn(r,t,i,-1))}return jm(),r=Wd(Error(j(421))),ou(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=wN.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,qt=Mr(i.nextSibling),Kt=e,Ne=!0,hn=null,t!==null&&(Jt[Zt++]=Gn,Jt[Zt++]=Kn,Jt[Zt++]=Ni,Gn=t.id,Kn=t.overflow,Ni=e),e=Om(e,r.children),e.flags|=4096,e)}function Pv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),qf(t.return,e,n)}function qd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function KI(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Rt(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pv(t,n,e);else if(t.tag===19)Pv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Te(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&rc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),qd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&rc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}qd(e,!0,n,null,s);break;case"together":qd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ru(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function or(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=jr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=jr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function lN(t,e,n){switch(e.tag){case 3:HI(e),Vs();break;case 5:wI(e);break;case 1:Ft(e.type)&&Xu(e);break;case 4:xm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Te(ec,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Te(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?GI(t,e,n):(Te(Pe,Pe.current&1),t=or(t,e,n),t!==null?t.sibling:null);Te(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return KI(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Te(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,WI(t,e,n)}return or(t,e,n)}var QI,Zf,YI,XI;QI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zf=function(){};YI=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,vi(An.current);var s=null;switch(n){case"input":i=Ef(t,i),r=Ef(t,r),s=[];break;case"select":i=Oe({},i,{value:void 0}),r=Oe({},r,{value:void 0}),s=[];break;case"textarea":i=Sf(t,i),r=Sf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Qu)}xf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ea.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ea.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ce("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};XI=function(t,e,n,r){n!==r&&(e.flags|=4)};function Vo(t,e){if(!Ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function uN(t,e,n){var r=e.pendingProps;switch(vm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(e),null;case 1:return Ft(e.type)&&Yu(),_t(e),null;case 3:return r=e.stateNode,Us(),Re(Vt),Re(Tt),Am(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(iu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hn!==null&&(ap(hn),hn=null))),Zf(t,e),_t(e),null;case 5:Rm(e);var i=vi(Da.current);if(n=e.type,t!==null&&e.stateNode!=null)YI(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return _t(e),null}if(t=vi(An.current),iu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Sn]=e,r[Pa]=s,t=(e.mode&1)!==0,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(i=0;i<Qo.length;i++)Ce(Qo[i],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":jy(r,s),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ce("invalid",r);break;case"textarea":zy(r,s),Ce("invalid",r)}xf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ru(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ru(r.textContent,a,t),i=["children",""+a]):Ea.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ce("scroll",r)}switch(n){case"input":Ql(r),By(r,s,!0);break;case"textarea":Ql(r),$y(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Qu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=CE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Sn]=e,t[Pa]=r,QI(t,e,!1,!1),e.stateNode=t;e:{switch(o=Rf(n,r),n){case"dialog":Ce("cancel",t),Ce("close",t),i=r;break;case"iframe":case"object":case"embed":Ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<Qo.length;i++)Ce(Qo[i],t);i=r;break;case"source":Ce("error",t),i=r;break;case"img":case"image":case"link":Ce("error",t),Ce("load",t),i=r;break;case"details":Ce("toggle",t),i=r;break;case"input":jy(t,r),i=Ef(t,r),Ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Oe({},r,{value:void 0}),Ce("invalid",t);break;case"textarea":zy(t,r),i=Sf(t,r),Ce("invalid",t);break;default:i=r}xf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?AE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&xE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ia(t,u):typeof u=="number"&&Ia(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ea.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ce("scroll",t):u!=null&&im(t,s,u,o))}switch(n){case"input":Ql(t),By(t,r,!1);break;case"textarea":Ql(t),$y(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Hr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Es(t,!!r.multiple,s,!1):r.defaultValue!=null&&Es(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Qu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return _t(e),null;case 6:if(t&&e.stateNode!=null)XI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=vi(Da.current),vi(An.current),iu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Sn]=e,(s=r.nodeValue!==n)&&(t=Kt,t!==null))switch(t.tag){case 3:ru(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ru(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Sn]=e,e.stateNode=r}return _t(e),null;case 13:if(Re(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&qt!==null&&e.mode&1&&!(e.flags&128))mI(),Vs(),e.flags|=98560,s=!1;else if(s=iu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[Sn]=e}else Vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;_t(e),s=!1}else hn!==null&&(ap(hn),hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?Qe===0&&(Qe=3):jm())),e.updateQueue!==null&&(e.flags|=4),_t(e),null);case 4:return Us(),Zf(t,e),t===null&&Na(e.stateNode.containerInfo),_t(e),null;case 10:return Tm(e.type._context),_t(e),null;case 17:return Ft(e.type)&&Yu(),_t(e),null;case 19:if(Re(Pe),s=e.memoizedState,s===null)return _t(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Vo(s,!1);else{if(Qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=rc(t),o!==null){for(e.flags|=128,Vo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Te(Pe,Pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Be()>Bs&&(e.flags|=128,r=!0,Vo(s,!1),e.lanes=4194304)}else{if(!r)if(t=rc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Vo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ne)return _t(e),null}else 2*Be()-s.renderingStartTime>Bs&&n!==1073741824&&(e.flags|=128,r=!0,Vo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Be(),e.sibling=null,n=Pe.current,Te(Pe,r?n&1|2:n&1),e):(_t(e),null);case 22:case 23:return Um(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Wt&1073741824&&(_t(e),e.subtreeFlags&6&&(e.flags|=8192)):_t(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function cN(t,e){switch(vm(e),e.tag){case 1:return Ft(e.type)&&Yu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Us(),Re(Vt),Re(Tt),Am(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Rm(e),null;case 13:if(Re(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Vs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(Pe),null;case 4:return Us(),null;case 10:return Tm(e.type._context),null;case 22:case 23:return Um(),null;case 24:return null;default:return null}}var au=!1,wt=!1,hN=typeof WeakSet=="function"?WeakSet:Set,H=null;function _s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Me(t,e,r)}else n.current=null}function ep(t,e,n){try{n()}catch(r){Me(t,e,r)}}var bv=!1;function dN(t,e){if(Vf=Hu,t=nI(),_m(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,p=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)p=f,f=y;for(;;){if(f===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++d===r&&(u=o),(y=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ff={focusedElem:t,selectionRange:n},Hu=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var A=I.memoizedProps,N=I.memoizedState,T=e.stateNode,w=T.getSnapshotBeforeUpdate(e.elementType===e.type?A:un(e.type,A),N);T.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(D){Me(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return I=bv,bv=!1,I}function la(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ep(e,n,s)}i=i.next}while(i!==r)}}function sh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function tp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function JI(t){var e=t.alternate;e!==null&&(t.alternate=null,JI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Sn],delete e[Pa],delete e[Bf],delete e[K1],delete e[Q1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ZI(t){return t.tag===5||t.tag===3||t.tag===4}function Dv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ZI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function np(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Qu));else if(r!==4&&(t=t.child,t!==null))for(np(t,e,n),t=t.sibling;t!==null;)np(t,e,n),t=t.sibling}function rp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(rp(t,e,n),t=t.sibling;t!==null;)rp(t,e,n),t=t.sibling}var st=null,cn=!1;function yr(t,e,n){for(n=n.child;n!==null;)eT(t,e,n),n=n.sibling}function eT(t,e,n){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(Xc,n)}catch{}switch(n.tag){case 5:wt||_s(n,e);case 6:var r=st,i=cn;st=null,yr(t,e,n),st=r,cn=i,st!==null&&(cn?(t=st,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):st.removeChild(n.stateNode));break;case 18:st!==null&&(cn?(t=st,n=n.stateNode,t.nodeType===8?Fd(t.parentNode,n):t.nodeType===1&&Fd(t,n),xa(t)):Fd(st,n.stateNode));break;case 4:r=st,i=cn,st=n.stateNode.containerInfo,cn=!0,yr(t,e,n),st=r,cn=i;break;case 0:case 11:case 14:case 15:if(!wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ep(n,e,o),i=i.next}while(i!==r)}yr(t,e,n);break;case 1:if(!wt&&(_s(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Me(n,e,a)}yr(t,e,n);break;case 21:yr(t,e,n);break;case 22:n.mode&1?(wt=(r=wt)||n.memoizedState!==null,yr(t,e,n),wt=r):yr(t,e,n);break;default:yr(t,e,n)}}function Ov(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new hN),e.forEach(function(r){var i=EN.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ln(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:st=a.stateNode,cn=!1;break e;case 3:st=a.stateNode.containerInfo,cn=!0;break e;case 4:st=a.stateNode.containerInfo,cn=!0;break e}a=a.return}if(st===null)throw Error(j(160));eT(s,o,i),st=null,cn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Me(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)tT(e,t),e=e.sibling}function tT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ln(e,t),In(t),r&4){try{la(3,t,t.return),sh(3,t)}catch(A){Me(t,t.return,A)}try{la(5,t,t.return)}catch(A){Me(t,t.return,A)}}break;case 1:ln(e,t),In(t),r&512&&n!==null&&_s(n,n.return);break;case 5:if(ln(e,t),In(t),r&512&&n!==null&&_s(n,n.return),t.flags&32){var i=t.stateNode;try{Ia(i,"")}catch(A){Me(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&TE(i,s),Rf(a,o);var c=Rf(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?AE(i,f):d==="dangerouslySetInnerHTML"?xE(i,f):d==="children"?Ia(i,f):im(i,d,f,c)}switch(a){case"input":If(i,s);break;case"textarea":SE(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Es(i,!!s.multiple,y,!1):p!==!!s.multiple&&(s.defaultValue!=null?Es(i,!!s.multiple,s.defaultValue,!0):Es(i,!!s.multiple,s.multiple?[]:"",!1))}i[Pa]=s}catch(A){Me(t,t.return,A)}}break;case 6:if(ln(e,t),In(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(A){Me(t,t.return,A)}}break;case 3:if(ln(e,t),In(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xa(e.containerInfo)}catch(A){Me(t,t.return,A)}break;case 4:ln(e,t),In(t);break;case 13:ln(e,t),In(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Vm=Be())),r&4&&Ov(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(wt=(c=wt)||d,ln(e,t),wt=c):ln(e,t),In(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(H=t,d=t.child;d!==null;){for(f=H=d;H!==null;){switch(p=H,y=p.child,p.tag){case 0:case 11:case 14:case 15:la(4,p,p.return);break;case 1:_s(p,p.return);var I=p.stateNode;if(typeof I.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(A){Me(r,n,A)}}break;case 5:_s(p,p.return);break;case 22:if(p.memoizedState!==null){Mv(f);continue}}y!==null?(y.return=p,H=y):Mv(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=RE("display",o))}catch(A){Me(t,t.return,A)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(A){Me(t,t.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ln(e,t),In(t),r&4&&Ov(t);break;case 21:break;default:ln(e,t),In(t)}}function In(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ZI(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ia(i,""),r.flags&=-33);var s=Dv(t);rp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Dv(t);np(t,a,o);break;default:throw Error(j(161))}}catch(u){Me(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fN(t,e,n){H=t,nT(t)}function nT(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||au;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||wt;a=au;var c=wt;if(au=o,(wt=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?Vv(i):u!==null?(u.return=o,H=u):Vv(i);for(;s!==null;)H=s,nT(s),s=s.sibling;H=i,au=a,wt=c}Lv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Lv(t)}}function Lv(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:wt||sh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!wt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:un(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&xa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}wt||e.flags&512&&tp(e)}catch(p){Me(e,e.return,p)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Mv(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Vv(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{sh(4,e)}catch(u){Me(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Me(e,i,u)}}var s=e.return;try{tp(e)}catch(u){Me(e,s,u)}break;case 5:var o=e.return;try{tp(e)}catch(u){Me(e,o,u)}}}catch(u){Me(e,e.return,u)}if(e===t){H=null;break}var a=e.sibling;if(a!==null){a.return=e.return,H=a;break}H=e.return}}var pN=Math.ceil,oc=fr.ReactCurrentDispatcher,Lm=fr.ReactCurrentOwner,tn=fr.ReactCurrentBatchConfig,ce=0,rt=null,We=null,lt=0,Wt=0,ys=ni(0),Qe=0,Va=null,Pi=0,oh=0,Mm=0,ua=null,bt=null,Vm=0,Bs=1/0,Wn=null,ac=!1,ip=null,Fr=null,lu=!1,Nr=null,lc=0,ca=0,sp=null,Au=-1,Nu=0;function At(){return ce&6?Be():Au!==-1?Au:Au=Be()}function Ur(t){return t.mode&1?ce&2&&lt!==0?lt&-lt:X1.transition!==null?(Nu===0&&(Nu=jE()),Nu):(t=pe,t!==0||(t=window.event,t=t===void 0?16:GE(t.type)),t):1}function gn(t,e,n,r){if(50<ca)throw ca=0,sp=null,Error(j(185));al(t,n,r),(!(ce&2)||t!==rt)&&(t===rt&&(!(ce&2)&&(oh|=n),Qe===4&&Tr(t,lt)),Ut(t,r),n===1&&ce===0&&!(e.mode&1)&&(Bs=Be()+500,nh&&ri()))}function Ut(t,e){var n=t.callbackNode;XA(t,e);var r=qu(t,t===rt?lt:0);if(r===0)n!==null&&Hy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Hy(n),e===1)t.tag===0?Y1(Fv.bind(null,t)):dI(Fv.bind(null,t)),H1(function(){!(ce&6)&&ri()}),n=null;else{switch(BE(r)){case 1:n=um;break;case 4:n=FE;break;case 16:n=Wu;break;case 536870912:n=UE;break;default:n=Wu}n=cT(n,rT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function rT(t,e){if(Au=-1,Nu=0,ce&6)throw Error(j(327));var n=t.callbackNode;if(xs()&&t.callbackNode!==n)return null;var r=qu(t,t===rt?lt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=uc(t,r);else{e=r;var i=ce;ce|=2;var s=sT();(rt!==t||lt!==e)&&(Wn=null,Bs=Be()+500,Ti(t,e));do try{_N();break}catch(a){iT(t,a)}while(!0);Im(),oc.current=s,ce=i,We!==null?e=0:(rt=null,lt=0,e=Qe)}if(e!==0){if(e===2&&(i=bf(t),i!==0&&(r=i,e=op(t,i))),e===1)throw n=Va,Ti(t,0),Tr(t,r),Ut(t,Be()),n;if(e===6)Tr(t,r);else{if(i=t.current.alternate,!(r&30)&&!mN(i)&&(e=uc(t,r),e===2&&(s=bf(t),s!==0&&(r=s,e=op(t,s))),e===1))throw n=Va,Ti(t,0),Tr(t,r),Ut(t,Be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:pi(t,bt,Wn);break;case 3:if(Tr(t,r),(r&130023424)===r&&(e=Vm+500-Be(),10<e)){if(qu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){At(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=jf(pi.bind(null,t,bt,Wn),e);break}pi(t,bt,Wn);break;case 4:if(Tr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-mn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pN(r/1960))-r,10<r){t.timeoutHandle=jf(pi.bind(null,t,bt,Wn),r);break}pi(t,bt,Wn);break;case 5:pi(t,bt,Wn);break;default:throw Error(j(329))}}}return Ut(t,Be()),t.callbackNode===n?rT.bind(null,t):null}function op(t,e){var n=ua;return t.current.memoizedState.isDehydrated&&(Ti(t,e).flags|=256),t=uc(t,e),t!==2&&(e=bt,bt=n,e!==null&&ap(e)),t}function ap(t){bt===null?bt=t:bt.push.apply(bt,t)}function mN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!vn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Tr(t,e){for(e&=~Mm,e&=~oh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mn(e),r=1<<n;t[n]=-1,e&=~r}}function Fv(t){if(ce&6)throw Error(j(327));xs();var e=qu(t,0);if(!(e&1))return Ut(t,Be()),null;var n=uc(t,e);if(t.tag!==0&&n===2){var r=bf(t);r!==0&&(e=r,n=op(t,r))}if(n===1)throw n=Va,Ti(t,0),Tr(t,e),Ut(t,Be()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,pi(t,bt,Wn),Ut(t,Be()),null}function Fm(t,e){var n=ce;ce|=1;try{return t(e)}finally{ce=n,ce===0&&(Bs=Be()+500,nh&&ri())}}function bi(t){Nr!==null&&Nr.tag===0&&!(ce&6)&&xs();var e=ce;ce|=1;var n=tn.transition,r=pe;try{if(tn.transition=null,pe=1,t)return t()}finally{pe=r,tn.transition=n,ce=e,!(ce&6)&&ri()}}function Um(){Wt=ys.current,Re(ys)}function Ti(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,q1(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(vm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yu();break;case 3:Us(),Re(Vt),Re(Tt),Am();break;case 5:Rm(r);break;case 4:Us();break;case 13:Re(Pe);break;case 19:Re(Pe);break;case 10:Tm(r.type._context);break;case 22:case 23:Um()}n=n.return}if(rt=t,We=t=jr(t.current,null),lt=Wt=e,Qe=0,Va=null,Mm=oh=Pi=0,bt=ua=null,yi!==null){for(e=0;e<yi.length;e++)if(n=yi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}yi=null}return t}function iT(t,e){do{var n=We;try{if(Im(),Cu.current=sc,ic){for(var r=De.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ic=!1}if(ki=0,et=Ge=De=null,aa=!1,Oa=0,Lm.current=null,n===null||n.return===null){Qe=1,Va=e,We=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=lt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Cv(o);if(y!==null){y.flags&=-257,xv(y,o,a,s,e),y.mode&1&&Sv(s,c,e),e=y,u=c;var I=e.updateQueue;if(I===null){var A=new Set;A.add(u),e.updateQueue=A}else I.add(u);break e}else{if(!(e&1)){Sv(s,c,e),jm();break e}u=Error(j(426))}}else if(Ne&&a.mode&1){var N=Cv(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),xv(N,o,a,s,e),wm(js(u,a));break e}}s=u=js(u,a),Qe!==4&&(Qe=2),ua===null?ua=[s]:ua.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=BI(s,u,e);yv(s,T);break e;case 1:a=u;var w=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Fr===null||!Fr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=zI(s,a,e);yv(s,D);break e}}s=s.return}while(s!==null)}aT(n)}catch(L){e=L,We===n&&n!==null&&(We=n=n.return);continue}break}while(!0)}function sT(){var t=oc.current;return oc.current=sc,t===null?sc:t}function jm(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),rt===null||!(Pi&268435455)&&!(oh&268435455)||Tr(rt,lt)}function uc(t,e){var n=ce;ce|=2;var r=sT();(rt!==t||lt!==e)&&(Wn=null,Ti(t,e));do try{gN();break}catch(i){iT(t,i)}while(!0);if(Im(),ce=n,oc.current=r,We!==null)throw Error(j(261));return rt=null,lt=0,Qe}function gN(){for(;We!==null;)oT(We)}function _N(){for(;We!==null&&!zA();)oT(We)}function oT(t){var e=uT(t.alternate,t,Wt);t.memoizedProps=t.pendingProps,e===null?aT(t):We=e,Lm.current=null}function aT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=cN(n,e),n!==null){n.flags&=32767,We=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,We=null;return}}else if(n=uN(n,e,Wt),n!==null){We=n;return}if(e=e.sibling,e!==null){We=e;return}We=e=t}while(e!==null);Qe===0&&(Qe=5)}function pi(t,e,n){var r=pe,i=tn.transition;try{tn.transition=null,pe=1,yN(t,e,n,r)}finally{tn.transition=i,pe=r}return null}function yN(t,e,n,r){do xs();while(Nr!==null);if(ce&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(JA(t,s),t===rt&&(We=rt=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||lu||(lu=!0,cT(Wu,function(){return xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=tn.transition,tn.transition=null;var o=pe;pe=1;var a=ce;ce|=4,Lm.current=null,dN(t,n),tT(n,t),F1(Ff),Hu=!!Vf,Ff=Vf=null,t.current=n,fN(n),$A(),ce=a,pe=o,tn.transition=s}else t.current=n;if(lu&&(lu=!1,Nr=t,lc=i),s=t.pendingLanes,s===0&&(Fr=null),HA(n.stateNode),Ut(t,Be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ac)throw ac=!1,t=ip,ip=null,t;return lc&1&&t.tag!==0&&xs(),s=t.pendingLanes,s&1?t===sp?ca++:(ca=0,sp=t):ca=0,ri(),null}function xs(){if(Nr!==null){var t=BE(lc),e=tn.transition,n=pe;try{if(tn.transition=null,pe=16>t?16:t,Nr===null)var r=!1;else{if(t=Nr,Nr=null,lc=0,ce&6)throw Error(j(331));var i=ce;for(ce|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(H=c;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:la(8,d,s)}var f=d.child;if(f!==null)f.return=d,H=f;else for(;H!==null;){d=H;var p=d.sibling,y=d.return;if(JI(d),d===c){H=null;break}if(p!==null){p.return=y,H=p;break}H=y}}}var I=s.alternate;if(I!==null){var A=I.child;if(A!==null){I.child=null;do{var N=A.sibling;A.sibling=null,A=N}while(A!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:la(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,H=T;break e}H=s.return}}var w=t.current;for(H=w;H!==null;){o=H;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,H=x;else e:for(o=w;H!==null;){if(a=H,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:sh(9,a)}}catch(L){Me(a,a.return,L)}if(a===o){H=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,H=D;break e}H=a.return}}if(ce=i,ri(),Rn&&typeof Rn.onPostCommitFiberRoot=="function")try{Rn.onPostCommitFiberRoot(Xc,t)}catch{}r=!0}return r}finally{pe=n,tn.transition=e}}return!1}function Uv(t,e,n){e=js(n,e),e=BI(t,e,1),t=Vr(t,e,1),e=At(),t!==null&&(al(t,1,e),Ut(t,e))}function Me(t,e,n){if(t.tag===3)Uv(t,t,n);else for(;e!==null;){if(e.tag===3){Uv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fr===null||!Fr.has(r))){t=js(n,t),t=zI(e,t,1),e=Vr(e,t,1),t=At(),e!==null&&(al(e,1,t),Ut(e,t));break}}e=e.return}}function vN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=At(),t.pingedLanes|=t.suspendedLanes&n,rt===t&&(lt&n)===n&&(Qe===4||Qe===3&&(lt&130023424)===lt&&500>Be()-Vm?Ti(t,0):Mm|=n),Ut(t,e)}function lT(t,e){e===0&&(t.mode&1?(e=Jl,Jl<<=1,!(Jl&130023424)&&(Jl=4194304)):e=1);var n=At();t=sr(t,e),t!==null&&(al(t,e,n),Ut(t,n))}function wN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),lT(t,n)}function EN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),lT(t,n)}var uT;uT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Vt.current)Ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ot=!1,lN(t,e,n);Ot=!!(t.flags&131072)}else Ot=!1,Ne&&e.flags&1048576&&fI(e,Zu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ru(t,e),t=e.pendingProps;var i=Ms(e,Tt.current);Cs(e,n),i=km(null,e,r,t,i,n);var s=Pm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ft(r)?(s=!0,Xu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cm(e),i.updater=ih,e.stateNode=i,i._reactInternals=e,Gf(e,r,t,n),e=Yf(null,e,r,!0,s,n)):(e.tag=0,Ne&&s&&ym(e),Rt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ru(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=TN(r),t=un(r,t),i){case 0:e=Qf(null,e,r,t,n);break e;case 1:e=Nv(null,e,r,t,n);break e;case 11:e=Rv(null,e,r,t,n);break e;case 14:e=Av(null,e,r,un(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Qf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Nv(t,e,r,i,n);case 3:e:{if(HI(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,vI(t,e),nc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=js(Error(j(423)),e),e=kv(t,e,r,n,i);break e}else if(r!==i){i=js(Error(j(424)),e),e=kv(t,e,r,n,i);break e}else for(qt=Mr(e.stateNode.containerInfo.firstChild),Kt=e,Ne=!0,hn=null,n=_I(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vs(),r===i){e=or(t,e,n);break e}Rt(t,e,r,n)}e=e.child}return e;case 5:return wI(e),t===null&&Wf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Uf(r,i)?o=null:s!==null&&Uf(r,s)&&(e.flags|=32),qI(t,e),Rt(t,e,o,n),e.child;case 6:return t===null&&Wf(e),null;case 13:return GI(t,e,n);case 4:return xm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Fs(e,null,r,n):Rt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Rv(t,e,r,i,n);case 7:return Rt(t,e,e.pendingProps,n),e.child;case 8:return Rt(t,e,e.pendingProps.children,n),e.child;case 12:return Rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Te(ec,r._currentValue),r._currentValue=o,s!==null)if(vn(s.value,o)){if(s.children===i.children&&!Vt.current){e=or(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Zn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),qf(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),qf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Rt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Cs(e,n),i=sn(i),r=r(i),e.flags|=1,Rt(t,e,r,n),e.child;case 14:return r=e.type,i=un(r,e.pendingProps),i=un(r.type,i),Av(t,e,r,i,n);case 15:return $I(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Ru(t,e),e.tag=1,Ft(r)?(t=!0,Xu(e)):t=!1,Cs(e,n),jI(e,r,i),Gf(e,r,i,n),Yf(null,e,r,!0,t,n);case 19:return KI(t,e,n);case 22:return WI(t,e,n)}throw Error(j(156,e.tag))};function cT(t,e){return VE(t,e)}function IN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,n,r){return new IN(t,e,n,r)}function Bm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function TN(t){if(typeof t=="function")return Bm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===om)return 11;if(t===am)return 14}return 2}function jr(t,e){var n=t.alternate;return n===null?(n=en(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ku(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Bm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ls:return Si(n.children,i,s,e);case sm:o=8,i|=8;break;case _f:return t=en(12,n,e,i|2),t.elementType=_f,t.lanes=s,t;case yf:return t=en(13,n,e,i),t.elementType=yf,t.lanes=s,t;case vf:return t=en(19,n,e,i),t.elementType=vf,t.lanes=s,t;case wE:return ah(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case yE:o=10;break e;case vE:o=9;break e;case om:o=11;break e;case am:o=14;break e;case wr:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=en(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Si(t,e,n,r){return t=en(7,t,r,e),t.lanes=n,t}function ah(t,e,n,r){return t=en(22,t,r,e),t.elementType=wE,t.lanes=n,t.stateNode={isHidden:!1},t}function Hd(t,e,n){return t=en(6,t,null,e),t.lanes=n,t}function Gd(t,e,n){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function SN(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rd(0),this.expirationTimes=Rd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zm(t,e,n,r,i,s,o,a,u){return t=new SN(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=en(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cm(s),t}function CN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:as,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function hT(t){if(!t)return Gr;t=t._reactInternals;e:{if(Hi(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(Ft(n))return hI(t,n,e)}return e}function dT(t,e,n,r,i,s,o,a,u){return t=zm(n,r,!0,t,i,s,o,a,u),t.context=hT(null),n=t.current,r=At(),i=Ur(n),s=Zn(r,i),s.callback=e??null,Vr(n,s,i),t.current.lanes=i,al(t,i,r),Ut(t,r),t}function lh(t,e,n,r){var i=e.current,s=At(),o=Ur(i);return n=hT(n),e.context===null?e.context=n:e.pendingContext=n,e=Zn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Vr(i,e,o),t!==null&&(gn(t,i,o,s),Su(t,i,o)),o}function cc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $m(t,e){jv(t,e),(t=t.alternate)&&jv(t,e)}function xN(){return null}var fT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wm(t){this._internalRoot=t}uh.prototype.render=Wm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));lh(t,e,null,null)};uh.prototype.unmount=Wm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;bi(function(){lh(null,t,null,null)}),e[ir]=null}};function uh(t){this._internalRoot=t}uh.prototype.unstable_scheduleHydration=function(t){if(t){var e=WE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ir.length&&e!==0&&e<Ir[n].priority;n++);Ir.splice(n,0,t),n===0&&HE(t)}};function qm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ch(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bv(){}function RN(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=cc(o);s.call(c)}}var o=dT(e,r,t,0,null,!1,!1,"",Bv);return t._reactRootContainer=o,t[ir]=o.current,Na(t.nodeType===8?t.parentNode:t),bi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=cc(u);a.call(c)}}var u=zm(t,0,!1,null,null,!1,!1,"",Bv);return t._reactRootContainer=u,t[ir]=u.current,Na(t.nodeType===8?t.parentNode:t),bi(function(){lh(e,u,n,r)}),u}function hh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=cc(o);a.call(u)}}lh(e,o,t,i)}else o=RN(n,e,t,i,r);return cc(o)}zE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ko(e.pendingLanes);n!==0&&(cm(e,n|1),Ut(e,Be()),!(ce&6)&&(Bs=Be()+500,ri()))}break;case 13:bi(function(){var r=sr(t,1);if(r!==null){var i=At();gn(r,t,1,i)}}),$m(t,1)}};hm=function(t){if(t.tag===13){var e=sr(t,134217728);if(e!==null){var n=At();gn(e,t,134217728,n)}$m(t,134217728)}};$E=function(t){if(t.tag===13){var e=Ur(t),n=sr(t,e);if(n!==null){var r=At();gn(n,t,e,r)}$m(t,e)}};WE=function(){return pe};qE=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};Nf=function(t,e,n){switch(e){case"input":if(If(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=th(r);if(!i)throw Error(j(90));IE(r),If(r,i)}}}break;case"textarea":SE(t,n);break;case"select":e=n.value,e!=null&&Es(t,!!n.multiple,e,!1)}};PE=Fm;bE=bi;var AN={usingClientEntryPoint:!1,Events:[ul,ds,th,NE,kE,Fm]},Fo={findFiberByHostInstance:_i,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},NN={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=LE(t),t===null?null:t.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||xN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uu.isDisabled&&uu.supportsFiber)try{Xc=uu.inject(NN),Rn=uu}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AN;Yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qm(e))throw Error(j(200));return CN(t,e,null,n)};Yt.createRoot=function(t,e){if(!qm(t))throw Error(j(299));var n=!1,r="",i=fT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=zm(t,1,!1,null,null,n,!1,r,i),t[ir]=e.current,Na(t.nodeType===8?t.parentNode:t),new Wm(e)};Yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=LE(e),t=t===null?null:t.stateNode,t};Yt.flushSync=function(t){return bi(t)};Yt.hydrate=function(t,e,n){if(!ch(e))throw Error(j(200));return hh(null,t,e,!0,n)};Yt.hydrateRoot=function(t,e,n){if(!qm(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=fT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=dT(e,null,t,1,n??null,i,!1,s,o),t[ir]=e.current,Na(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new uh(e)};Yt.render=function(t,e,n){if(!ch(e))throw Error(j(200));return hh(null,t,e,!1,n)};Yt.unmountComponentAtNode=function(t){if(!ch(t))throw Error(j(40));return t._reactRootContainer?(bi(function(){hh(null,null,t,!1,function(){t._reactRootContainer=null,t[ir]=null})}),!0):!1};Yt.unstable_batchedUpdates=Fm;Yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ch(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return hh(t,e,n,!1,r)};Yt.version="18.3.1-next-f1338f8080-20240426";function pT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pT)}catch(t){console.error(t)}}pT(),pE.exports=Yt;var kN=pE.exports,mT,zv=kN;mT=zv.createRoot,zv.hydrateRoot;/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fa(){return Fa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fa.apply(this,arguments)}var kr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(kr||(kr={}));const $v="popstate";function PN(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return lp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:_T(i)}return DN(e,n,null,t)}function Ye(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function gT(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function bN(){return Math.random().toString(36).substr(2,8)}function Wv(t,e){return{usr:t.state,key:t.key,idx:e}}function lp(t,e,n,r){return n===void 0&&(n=null),Fa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?io(e):e,{state:n,key:e&&e.key||r||bN()})}function _T(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function io(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function DN(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=kr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Fa({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=kr.Pop;let N=d(),T=N==null?null:N-c;c=N,u&&u({action:a,location:A.location,delta:T})}function p(N,T){a=kr.Push;let w=lp(A.location,N,T);c=d()+1;let x=Wv(w,c),D=A.createHref(w);try{o.pushState(x,"",D)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(D)}s&&u&&u({action:a,location:A.location,delta:1})}function y(N,T){a=kr.Replace;let w=lp(A.location,N,T);c=d();let x=Wv(w,c),D=A.createHref(w);o.replaceState(x,"",D),s&&u&&u({action:a,location:A.location,delta:0})}function I(N){let T=i.location.origin!=="null"?i.location.origin:i.location.href,w=typeof N=="string"?N:_T(N);return w=w.replace(/ $/,"%20"),Ye(T,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,T)}let A={get action(){return a},get location(){return t(i,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener($v,f),u=N,()=>{i.removeEventListener($v,f),u=null}},createHref(N){return e(i,N)},createURL:I,encodeLocation(N){let T=I(N);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:p,replace:y,go(N){return o.go(N)}};return A}var qv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(qv||(qv={}));function ON(t,e,n){return n===void 0&&(n="/"),LN(t,e,n,!1)}function LN(t,e,n,r){let i=typeof e=="string"?io(e):e,s=wT(i.pathname||"/",n);if(s==null)return null;let o=yT(t);MN(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=GN(s);a=qN(o[u],c,r)}return a}function yT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ye(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ci([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Ye(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),yT(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:$N(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of vT(s.path))i(s,o,u)}),e}function vT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=vT(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function MN(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:WN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const VN=/^:[\w-]+$/,FN=3,UN=2,jN=1,BN=10,zN=-2,Hv=t=>t==="*";function $N(t,e){let n=t.split("/"),r=n.length;return n.some(Hv)&&(r+=zN),e&&(r+=UN),n.filter(i=>!Hv(i)).reduce((i,s)=>i+(VN.test(s)?FN:s===""?jN:BN),r)}function WN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function qN(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=Gv({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),p=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=Gv({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Ci([s,f.pathname]),pathnameBase:ZN(Ci([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=Ci([s,f.pathnameBase]))}return o}function Gv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=HN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:p,isOptional:y}=d;if(p==="*"){let A=a[f]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const I=a[f];return y&&!I?c[p]=void 0:c[p]=(I||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function HN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),gT(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function GN(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return gT(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function wT(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function KN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?io(t):t;return{pathname:n?n.startsWith("/")?n:QN(n,e):e,search:ek(r),hash:tk(i)}}function QN(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Kd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function YN(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function XN(t,e){let n=YN(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function JN(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=io(t):(i=Fa({},t),Ye(!i.pathname||!i.pathname.includes("?"),Kd("?","pathname","search",i)),Ye(!i.pathname||!i.pathname.includes("#"),Kd("#","pathname","hash",i)),Ye(!i.search||!i.search.includes("#"),Kd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?e[f]:"/"}let u=KN(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Ci=t=>t.join("/").replace(/\/\/+/g,"/"),ZN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ek=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,tk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function nk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const ET=["post","put","patch","delete"];new Set(ET);const rk=["get",...ET];new Set(rk);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ua(){return Ua=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ua.apply(this,arguments)}const Hm=O.createContext(null),ik=O.createContext(null),dh=O.createContext(null),fh=O.createContext(null),so=O.createContext({outlet:null,matches:[],isDataRoute:!1}),IT=O.createContext(null);function ph(){return O.useContext(fh)!=null}function Gm(){return ph()||Ye(!1),O.useContext(fh).location}function TT(t){O.useContext(dh).static||O.useLayoutEffect(t)}function sk(){let{isDataRoute:t}=O.useContext(so);return t?yk():ok()}function ok(){ph()||Ye(!1);let t=O.useContext(Hm),{basename:e,future:n,navigator:r}=O.useContext(dh),{matches:i}=O.useContext(so),{pathname:s}=Gm(),o=JSON.stringify(XN(i,n.v7_relativeSplatPath)),a=O.useRef(!1);return TT(()=>{a.current=!0}),O.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=JN(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Ci([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}function ak(t,e){return lk(t,e)}function lk(t,e,n,r){ph()||Ye(!1);let{navigator:i}=O.useContext(dh),{matches:s}=O.useContext(so),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Gm(),d;if(e){var f;let N=typeof e=="string"?io(e):e;u==="/"||(f=N.pathname)!=null&&f.startsWith(u)||Ye(!1),d=N}else d=c;let p=d.pathname||"/",y=p;if(u!=="/"){let N=u.replace(/^\//,"").split("/");y="/"+p.replace(/^\//,"").split("/").slice(N.length).join("/")}let I=ON(t,{pathname:y}),A=fk(I&&I.map(N=>Object.assign({},N,{params:Object.assign({},a,N.params),pathname:Ci([u,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:Ci([u,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return e&&A?O.createElement(fh.Provider,{value:{location:Ua({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:kr.Pop}},A):A}function uk(){let t=_k(),e=nk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:i},n):null,null)}const ck=O.createElement(uk,null);class hk extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(so.Provider,{value:this.props.routeContext},O.createElement(IT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function dk(t){let{routeContext:e,match:n,children:r}=t,i=O.useContext(Hm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(so.Provider,{value:e},r)}function fk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||Ye(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:p,errors:y}=n,I=f.route.loader&&p[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||I){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,p)=>{let y,I=!1,A=null,N=null;n&&(y=a&&f.route.id?a[f.route.id]:void 0,A=f.route.errorElement||ck,u&&(c<0&&p===0?(I=!0,N=null):c===p&&(I=!0,N=f.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,p+1)),w=()=>{let x;return y?x=A:I?x=N:f.route.Component?x=O.createElement(f.route.Component,null):f.route.element?x=f.route.element:x=d,O.createElement(dk,{match:f,routeContext:{outlet:d,matches:T,isDataRoute:n!=null},children:x})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?O.createElement(hk,{location:n.location,revalidation:n.revalidation,component:A,error:y,children:w(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):w()},null)}var ST=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ST||{}),hc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(hc||{});function pk(t){let e=O.useContext(Hm);return e||Ye(!1),e}function mk(t){let e=O.useContext(ik);return e||Ye(!1),e}function gk(t){let e=O.useContext(so);return e||Ye(!1),e}function CT(t){let e=gk(),n=e.matches[e.matches.length-1];return n.route.id||Ye(!1),n.route.id}function _k(){var t;let e=O.useContext(IT),n=mk(hc.UseRouteError),r=CT(hc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function yk(){let{router:t}=pk(ST.UseNavigateStable),e=CT(hc.UseNavigateStable),n=O.useRef(!1);return TT(()=>{n.current=!0}),O.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ua({fromRouteId:e},s)))},[t,e])}function up(t){Ye(!1)}function vk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=kr.Pop,navigator:s,static:o=!1,future:a}=t;ph()&&Ye(!1);let u=e.replace(/^\/*/,"/"),c=O.useMemo(()=>({basename:u,navigator:s,static:o,future:Ua({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=io(r));let{pathname:d="/",search:f="",hash:p="",state:y=null,key:I="default"}=r,A=O.useMemo(()=>{let N=wT(d,u);return N==null?null:{location:{pathname:N,search:f,hash:p,state:y,key:I},navigationType:i}},[u,d,f,p,y,I,i]);return A==null?null:O.createElement(dh.Provider,{value:c},O.createElement(fh.Provider,{children:n,value:A}))}function wk(t){let{children:e,location:n}=t;return ak(cp(e),n)}new Promise(()=>{});function cp(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,i)=>{if(!O.isValidElement(r))return;let s=[...e,i];if(r.type===O.Fragment){n.push.apply(n,cp(r.props.children,s));return}r.type!==up&&Ye(!1),!r.props.index||!r.props.children||Ye(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=cp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Ek="6";try{window.__reactRouterVersion=Ek}catch{}const Ik="startTransition",Kv=vA[Ik];function Tk(t){let{basename:e,children:n,future:r,window:i}=t,s=O.useRef();s.current==null&&(s.current=PN({window:i,v5Compat:!0}));let o=s.current,[a,u]=O.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=O.useCallback(f=>{c&&Kv?Kv(()=>u(f)):u(f)},[u,c]);return O.useLayoutEffect(()=>o.listen(d),[o,d]),O.createElement(vk,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var Qv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Qv||(Qv={}));var Yv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Yv||(Yv={}));const Sk=[{name:"About Us",id:"AboutUs"},{name:"Service",id:"service"},{name:"Newsletter",id:"newsletter"},{name:"Events",id:"events"}],xT="/SkWeb/assets/LOGO_SK-removebg-preview-BoIiuiyF.png";var Xv={};/**
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
 */const RT={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const B=function(t,e){if(!t)throw oo(e)},oo=function(t){return new Error("Firebase Database ("+RT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const AT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ck=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Km={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,y=c&63;u||(y=64,o||(p=64)),r.push(n[d],n[f],n[p],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(AT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ck(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new xk;const p=s<<2|a>>4;if(r.push(p),c!==64){const y=a<<4&240|c>>2;if(r.push(y),f!==64){const I=c<<6&192|f;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const NT=function(t){const e=AT(t);return Km.encodeByteArray(e,!0)},dc=function(t){return NT(t).replace(/\./g,"")},fc=function(t){try{return Km.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Rk(t){return kT(void 0,t)}function kT(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Ak(n)||(t[n]=kT(t[n],e[n]));return t}function Ak(t){return t!=="__proto__"}/**
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
 */function Nk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kk=()=>Nk().__FIREBASE_DEFAULTS__,Pk=()=>{if(typeof process>"u"||typeof Xv>"u")return;const t=Xv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fc(t[1]);return e&&JSON.parse(e)},mh=()=>{try{return kk()||Pk()||bk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},PT=t=>{var e,n;return(n=(e=mh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Qm=t=>{const e=PT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},bT=()=>{var t;return(t=mh())===null||t===void 0?void 0:t.config},DT=t=>{var e;return(e=mh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class gh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ym(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[dc(JSON.stringify(n)),dc(JSON.stringify(o)),""].join(".")}/**
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
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function Dk(){var t;const e=(t=mh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ok(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function OT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lk(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function LT(){return RT.NODE_ADMIN===!0}function Mk(){return!Dk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vk(){try{return typeof indexedDB=="object"}catch{return!1}}function Fk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Uk="FirebaseError";class Ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Uk,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hl.prototype.create)}}class hl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?jk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ln(i,a,r)}}function jk(t,e){return t.replace(Bk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Bk=/\{\$([^}]+)}/g;/**
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
 */function ja(t){return JSON.parse(t)}function nt(t){return JSON.stringify(t)}/**
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
 */const MT=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ja(fc(s[0])||""),n=ja(fc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},zk=function(t){const e=MT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},$k=function(t){const e=MT(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function pr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function zs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function hp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function mc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Jv(s)&&Jv(o)){if(!mc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Jv(t){return t!==null&&typeof t=="object"}/**
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
 */function ao(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Yo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Xo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Wk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const p=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,d;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):f<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const p=(i<<5|i>>>27)+c+u+d+r[f]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function qk(t,e){const n=new Hk(t,e);return n.subscribe.bind(n)}class Hk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Gk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Qd),i.error===void 0&&(i.error=Qd),i.complete===void 0&&(i.complete=Qd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qd(){}function Jm(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Kk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,B(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_h=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function me(t){return t&&t._delegate?t._delegate:t}class ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const mi="[DEFAULT]";/**
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
 */class Qk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new gh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xk(e))try{this.getOrInitializeService({instanceIdentifier:mi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=mi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mi){return this.instances.has(e)}getOptions(e=mi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=mi){return this.component?this.component.multipleInstances?e:mi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yk(t){return t===mi?void 0:t}function Xk(t){return t.instantiationMode==="EAGER"}/**
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
 */class Jk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Qk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const Zk={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},eP=ae.INFO,tP={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},nP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=tP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yh{constructor(e){this.name=e,this._logLevel=eP,this._logHandler=nP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const rP=(t,e)=>e.some(n=>t instanceof n);let Zv,ew;function iP(){return Zv||(Zv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sP(){return ew||(ew=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const VT=new WeakMap,dp=new WeakMap,FT=new WeakMap,Yd=new WeakMap,Zm=new WeakMap;function oP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Br(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&VT.set(n,t)}).catch(()=>{}),Zm.set(e,t),e}function aP(t){if(dp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});dp.set(t,e)}let fp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||FT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lP(t){fp=t(fp)}function uP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xd(this),e,...n);return FT.set(r,e.sort?e.sort():[e]),Br(r)}:sP().includes(t)?function(...e){return t.apply(Xd(this),e),Br(VT.get(this))}:function(...e){return Br(t.apply(Xd(this),e))}}function cP(t){return typeof t=="function"?uP(t):(t instanceof IDBTransaction&&aP(t),rP(t,iP())?new Proxy(t,fp):t)}function Br(t){if(t instanceof IDBRequest)return oP(t);if(Yd.has(t))return Yd.get(t);const e=cP(t);return e!==t&&(Yd.set(t,e),Zm.set(e,t)),e}const Xd=t=>Zm.get(t);function hP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Br(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Br(o.result),u.oldVersion,u.newVersion,Br(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const dP=["get","getKey","getAll","getAllKeys","count"],fP=["put","add","delete","clear"],Jd=new Map;function tw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Jd.get(e))return Jd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=fP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||dP.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Jd.set(e,s),s}lP(t=>({...t,get:(e,n,r)=>tw(e,n)||t.get(e,n,r),has:(e,n)=>!!tw(e,n)||t.has(e,n)}));/**
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
 */class pP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function mP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pp="@firebase/app",nw="0.10.8";/**
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
 */const Di=new yh("@firebase/app"),gP="@firebase/app-compat",_P="@firebase/analytics-compat",yP="@firebase/analytics",vP="@firebase/app-check-compat",wP="@firebase/app-check",EP="@firebase/auth",IP="@firebase/auth-compat",TP="@firebase/database",SP="@firebase/database-compat",CP="@firebase/functions",xP="@firebase/functions-compat",RP="@firebase/installations",AP="@firebase/installations-compat",NP="@firebase/messaging",kP="@firebase/messaging-compat",PP="@firebase/performance",bP="@firebase/performance-compat",DP="@firebase/remote-config",OP="@firebase/remote-config-compat",LP="@firebase/storage",MP="@firebase/storage-compat",VP="@firebase/firestore",FP="@firebase/vertexai-preview",UP="@firebase/firestore-compat",jP="firebase",BP="10.12.5";/**
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
 */const mp="[DEFAULT]",zP={[pp]:"fire-core",[gP]:"fire-core-compat",[yP]:"fire-analytics",[_P]:"fire-analytics-compat",[wP]:"fire-app-check",[vP]:"fire-app-check-compat",[EP]:"fire-auth",[IP]:"fire-auth-compat",[TP]:"fire-rtdb",[SP]:"fire-rtdb-compat",[CP]:"fire-fn",[xP]:"fire-fn-compat",[RP]:"fire-iid",[AP]:"fire-iid-compat",[NP]:"fire-fcm",[kP]:"fire-fcm-compat",[PP]:"fire-perf",[bP]:"fire-perf-compat",[DP]:"fire-rc",[OP]:"fire-rc-compat",[LP]:"fire-gcs",[MP]:"fire-gcs-compat",[VP]:"fire-fst",[UP]:"fire-fst-compat",[FP]:"fire-vertex","fire-js":"fire-js",[jP]:"fire-js-all"};/**
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
 */const gc=new Map,$P=new Map,gp=new Map;function rw(t,e){try{t.container.addComponent(e)}catch(n){Di.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kr(t){const e=t.name;if(gp.has(e))return Di.debug(`There were multiple attempts to register component ${e}.`),!1;gp.set(e,t);for(const n of gc.values())rw(n,t);for(const n of $P.values())rw(n,t);return!0}function dl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Cn(t){return t.settings!==void 0}/**
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
 */const WP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zr=new hl("app","Firebase",WP);/**
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
 */class qP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zr.create("app-deleted",{appName:this._name})}}/**
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
 */const ii=BP;function UT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw zr.create("bad-app-name",{appName:String(i)});if(n||(n=bT()),!n)throw zr.create("no-options");const s=gc.get(i);if(s){if(mc(n,s.options)&&mc(r,s.config))return s;throw zr.create("duplicate-app",{appName:i})}const o=new Jk(i);for(const u of gp.values())o.addComponent(u);const a=new qP(n,r,o);return gc.set(i,a),a}function vh(t=mp){const e=gc.get(t);if(!e&&t===mp&&bT())return UT();if(!e)throw zr.create("no-app",{appName:t});return e}function nn(t,e,n){var r;let i=(r=zP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Di.warn(a.join(" "));return}Kr(new ar(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const HP="firebase-heartbeat-database",GP=1,Ba="firebase-heartbeat-store";let Zd=null;function jT(){return Zd||(Zd=hP(HP,GP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ba)}catch(n){console.warn(n)}}}}).catch(t=>{throw zr.create("idb-open",{originalErrorMessage:t.message})})),Zd}async function KP(t){try{const n=(await jT()).transaction(Ba),r=await n.objectStore(Ba).get(BT(t));return await n.done,r}catch(e){if(e instanceof Ln)Di.warn(e.message);else{const n=zr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Di.warn(n.message)}}}async function iw(t,e){try{const r=(await jT()).transaction(Ba,"readwrite");await r.objectStore(Ba).put(e,BT(t)),await r.done}catch(n){if(n instanceof Ln)Di.warn(n.message);else{const r=zr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Di.warn(r.message)}}}function BT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const QP=1024,YP=30*24*60*60*1e3;class XP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ZP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=sw();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=YP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sw(),{heartbeatsToSend:r,unsentEntries:i}=JP(this._heartbeatsCache.heartbeats),s=dc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function sw(){return new Date().toISOString().substring(0,10)}function JP(t,e=QP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ow(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ow(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ZP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vk()?Fk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await KP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return iw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return iw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ow(t){return dc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function eb(t){Kr(new ar("platform-logger",e=>new pP(e),"PRIVATE")),Kr(new ar("heartbeat",e=>new XP(e),"PRIVATE")),nn(pp,nw,t),nn(pp,nw,"esm2017"),nn("fire-js","")}eb("");var tb="firebase",nb="10.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn(tb,nb,"app");function eg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function zT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rb=zT,$T=new hl("auth","Firebase",zT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=new yh("@firebase/auth");function ib(t,...e){_c.logLevel<=ae.WARN&&_c.warn(`Auth (${ii}): ${t}`,...e)}function Pu(t,...e){_c.logLevel<=ae.ERROR&&_c.error(`Auth (${ii}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,...e){throw tg(t,...e)}function Nn(t,...e){return tg(t,...e)}function WT(t,e,n){const r=Object.assign(Object.assign({},rb()),{[e]:n});return new hl("auth","Firebase",r).create(e,{appName:t.name})}function er(t){return WT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $T.create(t,...e)}function X(t,e,...n){if(!t)throw tg(e,...n)}function Qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pu(e),new Error(e)}function lr(t,e){t||Qn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sb(){return aw()==="http:"||aw()==="https:"}function aw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sb()||Ok()||"connection"in navigator)?navigator.onLine:!0}function ab(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n){this.shortDelay=e,this.longDelay=n,lr(n>e,"Short delay should be less than long delay!"),this.isMobile=Xm()||OT()}get(){return ob()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(t,e){lr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=new fl(3e4,6e4);function si(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function oi(t,e,n,r,i={}){return HT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ao(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),qT.fetch()(GT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function HT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lb),e);try{const i=new hb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw cu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw cu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw cu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw cu(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw WT(t,d,c);wn(t,d)}}catch(i){if(i instanceof Ln)throw i;wn(t,"network-request-failed",{message:String(i)})}}async function pl(t,e,n,r,i={}){const s=await oi(t,e,n,r,i);return"mfaPendingCredential"in s&&wn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function GT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ng(t.config,i):`${t.config.apiScheme}://${i}`}function cb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nn(this.auth,"network-request-failed")),ub.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function cu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Nn(t,e,r);return i.customData._tokenResponse=n,i}function lw(t){return t!==void 0&&t.enterprise!==void 0}class db{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return cb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function fb(t,e){return oi(t,"GET","/v2/recaptchaConfig",si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pb(t,e){return oi(t,"POST","/v1/accounts:delete",e)}async function KT(t,e){return oi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mb(t,e=!1){const n=me(t),r=await n.getIdToken(e),i=rg(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ha(ef(i.auth_time)),issuedAtTime:ha(ef(i.iat)),expirationTime:ha(ef(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ef(t){return Number(t)*1e3}function rg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Pu("JWT malformed, contained fewer than 3 sections"),null;try{const i=fc(n);return i?JSON.parse(i):(Pu("Failed to decode base64 JWT payload"),null)}catch(i){return Pu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function uw(t){const e=rg(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function za(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&gb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function gb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ha(this.lastLoginAt),this.creationTime=ha(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function yc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await za(t,KT(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?QT(s.providerUserInfo):[],a=vb(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new yp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function yb(t){const e=me(t);await yc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vb(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function QT(t){return t.map(e=>{var{providerId:n}=e,r=eg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wb(t,e){const n=await HT(t,{},async()=>{const r=ao({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=GT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",qT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Eb(t,e){return oi(t,"POST","/v2/accounts:revokeToken",si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=uw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await wb(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Rs;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rs,this.toJSON())}_performRefresh(){return Qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=eg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _b(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new yp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await za(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mb(this,e)}reload(){return yb(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Cn(this.auth.app))return Promise.reject(er(this.auth));const e=await this.getIdToken();return await za(this,pb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:x,emailVerified:D,isAnonymous:L,providerData:F,stsTokenManager:S}=n;X(x&&S,e,"internal-error");const _=Rs.fromJSON(this.name,S);X(typeof x=="string",e,"internal-error"),vr(f,e.name),vr(p,e.name),X(typeof D=="boolean",e,"internal-error"),X(typeof L=="boolean",e,"internal-error"),vr(y,e.name),vr(I,e.name),vr(A,e.name),vr(N,e.name),vr(T,e.name),vr(w,e.name);const E=new Yn({uid:x,auth:e,email:p,emailVerified:D,displayName:f,isAnonymous:L,photoURL:I,phoneNumber:y,tenantId:A,stsTokenManager:_,createdAt:T,lastLoginAt:w});return F&&Array.isArray(F)&&(E.providerData=F.map(C=>Object.assign({},C))),N&&(E._redirectEventId=N),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Rs;i.updateFromServerResponse(n);const s=new Yn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await yc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?QT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Rs;a.updateFromIdToken(r);const u=new Yn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new yp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw=new Map;function Xn(t){lr(t instanceof Function,"Expected a class definition");let e=cw.get(t);return e?(lr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cw.set(t,e),e)}/**
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
 */class YT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}YT.type="NONE";const hw=YT;/**
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
 */function bu(t,e,n){return`firebase:${t}:${e}:${n}`}class As{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=bu(this.userKey,i.apiKey,s),this.fullPersistenceKey=bu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new As(Xn(hw),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Xn(hw);const o=bu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=Yn._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new As(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new As(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ZT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(XT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tS(e))return"Blackberry";if(nS(e))return"Webos";if(ig(e))return"Safari";if((e.includes("chrome/")||JT(e))&&!e.includes("edge/"))return"Chrome";if(eS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function XT(t=ht()){return/firefox\//i.test(t)}function ig(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function JT(t=ht()){return/crios\//i.test(t)}function ZT(t=ht()){return/iemobile/i.test(t)}function eS(t=ht()){return/android/i.test(t)}function tS(t=ht()){return/blackberry/i.test(t)}function nS(t=ht()){return/webos/i.test(t)}function wh(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ib(t=ht()){var e;return wh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Tb(){return Lk()&&document.documentMode===10}function rS(t=ht()){return wh(t)||eS(t)||nS(t)||tS(t)||/windows phone/i.test(t)||ZT(t)}function Sb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(t,e=[]){let n;switch(t){case"Browser":n=dw(ht());break;case"Worker":n=`${dw(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ii}/${r}`}/**
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
 */class Cb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function xb(t,e={}){return oi(t,"GET","/v2/passwordPolicy",si(t,e))}/**
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
 */const Rb=6;class Ab{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Rb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fw(this),this.idTokenSubscription=new fw(this),this.beforeStateQueue=new Cb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$T,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await As.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await KT(this,{idToken:e}),r=await Yn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Cn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ab()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Cn(this.app))return Promise.reject(er(this));const n=e?me(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Cn(this.app)?Promise.reject(er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Cn(this.app)?Promise.reject(er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xb(this),n=new Ab(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Eb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await As.create(this,[Xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ib(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Gi(t){return me(t)}class fw{constructor(e){this.auth=e,this.observer=null,this.addObserver=qk(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kb(t){Eh=t}function sS(t){return Eh.loadJS(t)}function Pb(){return Eh.recaptchaEnterpriseScript}function bb(){return Eh.gapiScript}function Db(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Ob="recaptcha-enterprise",Lb="NO_RECAPTCHA";class Mb{constructor(e){this.type=Ob,this.auth=Gi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{fb(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new db(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;lw(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Lb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&lw(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Pb();u.length!==0&&(u+=a),sS(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function pw(t,e,n,r=!1){const i=new Mb(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function vp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await pw(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await pw(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(t,e){const n=dl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(mc(s,e??{}))return i;wn(i,"already-initialized")}return n.initialize({options:e})}function Fb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ub(t,e,n){const r=Gi(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=oS(e),{host:o,port:a}=jb(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Bb()}function oS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jb(t){const e=oS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:mw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:mw(o)}}}function mw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Bb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qn("not implemented")}_getIdTokenResponse(e){return Qn("not implemented")}_linkToIdToken(e,n){return Qn("not implemented")}_getReauthenticationResolver(e){return Qn("not implemented")}}async function zb(t,e){return oi(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $b(t,e){return pl(t,"POST","/v1/accounts:signInWithPassword",si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wb(t,e){return pl(t,"POST","/v1/accounts:signInWithEmailLink",si(t,e))}async function qb(t,e){return pl(t,"POST","/v1/accounts:signInWithEmailLink",si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a extends sg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new $a(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $a(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vp(e,n,"signInWithPassword",$b);case"emailLink":return Wb(e,{email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vp(e,r,"signUpPassword",zb);case"emailLink":return qb(e,{idToken:n,email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(t,e){return pl(t,"POST","/v1/accounts:signInWithIdp",si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb="http://localhost";class Oi extends sg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Oi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=eg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Oi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ns(e,n)}buildRequest(){const e={requestUri:Hb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ao(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Kb(t){const e=Yo(Xo(t)).link,n=e?Yo(Xo(e)).deep_link_id:null,r=Yo(Xo(t)).deep_link_id;return(r?Yo(Xo(r)).link:null)||r||n||e||t}class og{constructor(e){var n,r,i,s,o,a;const u=Yo(Xo(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,f=Gb((i=u.mode)!==null&&i!==void 0?i:null);X(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Kb(e);try{return new og(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(){this.providerId=lo.PROVIDER_ID}static credential(e,n){return $a._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=og.parseLink(n);return X(r,"argument-error"),$a._fromEmailAndCode(e,r.code,r.tenantId)}}lo.PROVIDER_ID="password";lo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";lo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ml extends aS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends ml{constructor(){super("facebook.com")}static credential(e){return Oi._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sr.credential(e.oauthAccessToken)}catch{return null}}}Sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends ml{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Oi._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends ml{constructor(){super("github.com")}static credential(e){return Oi._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.GITHUB_SIGN_IN_METHOD="github.com";Cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends ml{constructor(){super("twitter.com")}static credential(e,n){return Oi._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xr.credential(n,r)}catch{return null}}}xr.TWITTER_SIGN_IN_METHOD="twitter.com";xr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qb(t,e){return pl(t,"POST","/v1/accounts:signUp",si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Yn._fromIdTokenResponse(e,r,i),o=gw(r);return new Li({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=gw(r);return new Li({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function gw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc extends Ln{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,vc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new vc(e,n,r,i)}}function lS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?vc._fromErrorAndOperation(t,s,e,r):s})}async function Yb(t,e,n=!1){const r=await za(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Li._forOperation(t,"link",r)}/**
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
 */async function Xb(t,e,n=!1){const{auth:r}=t;if(Cn(r.app))return Promise.reject(er(r));const i="reauthenticate";try{const s=await za(t,lS(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=rg(s.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),Li._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&wn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uS(t,e,n=!1){if(Cn(t.app))return Promise.reject(er(t));const r="signIn",i=await lS(t,r,e),s=await Li._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Jb(t,e){return uS(Gi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cS(t){const e=Gi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Zb(t,e,n){if(Cn(t.app))return Promise.reject(er(t));const r=Gi(t),o=await vp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Qb).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&cS(t),u}),a=await Li._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function eD(t,e,n){return Cn(t.app)?Promise.reject(er(t)):Jb(me(t),lo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&cS(t),r})}function tD(t,e,n,r){return me(t).onIdTokenChanged(e,n,r)}function nD(t,e,n){return me(t).beforeAuthStateChanged(e,n)}function ag(t,e,n,r){return me(t).onAuthStateChanged(e,n,r)}function rD(t){return me(t).signOut()}const wc="__sak";/**
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
 */class hS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wc,"1"),this.storage.removeItem(wc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iD(){const t=ht();return ig(t)||wh(t)}const sD=1e3,oD=10;class dS extends hS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=iD()&&Sb(),this.fallbackToPolling=rS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Tb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,oD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},sD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}dS.type="LOCAL";const aD=dS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS extends hS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fS.type="SESSION";const pS=fS;/**
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
 */function lD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ih{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ih(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await lD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ih.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class uD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=lg("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(){return window}function cD(t){kn().location.href=t}/**
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
 */function mS(){return typeof kn().WorkerGlobalScope<"u"&&typeof kn().importScripts=="function"}async function hD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fD(){return mS()?self:null}/**
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
 */const gS="firebaseLocalStorageDb",pD=1,Ec="firebaseLocalStorage",_S="fbase_key";class gl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Th(t,e){return t.transaction([Ec],e?"readwrite":"readonly").objectStore(Ec)}function mD(){const t=indexedDB.deleteDatabase(gS);return new gl(t).toPromise()}function wp(){const t=indexedDB.open(gS,pD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ec,{keyPath:_S})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ec)?e(r):(r.close(),await mD(),e(await wp()))})})}async function _w(t,e,n){const r=Th(t,!0).put({[_S]:e,value:n});return new gl(r).toPromise()}async function gD(t,e){const n=Th(t,!1).get(e),r=await new gl(n).toPromise();return r===void 0?null:r.value}function yw(t,e){const n=Th(t,!0).delete(e);return new gl(n).toPromise()}const _D=800,yD=3;class yS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>yD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ih._getInstance(fD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hD(),!this.activeServiceWorker)return;this.sender=new uD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wp();return await _w(e,wc,"1"),await yw(e,wc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_w(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Th(i,!1).getAll();return new gl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_D)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yS.type="LOCAL";const vD=yS;new fl(3e4,6e4);/**
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
 */function wD(t,e){return e?Xn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ug extends sg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ED(t){return uS(t.auth,new ug(t),t.bypassAuthState)}function ID(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),Xb(n,new ug(t),t.bypassAuthState)}async function TD(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),Yb(n,new ug(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ED;case"linkViaPopup":case"linkViaRedirect":return TD;case"reauthViaPopup":case"reauthViaRedirect":return ID;default:wn(this.auth,"internal-error")}}resolve(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD=new fl(2e3,1e4);class vs extends vS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,vs.currentPopupAction&&vs.currentPopupAction.cancel(),vs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){lr(this.filter.length===1,"Popup operations only handle one event");const e=lg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SD.get())};e()}}vs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD="pendingRedirect",Du=new Map;class xD extends vS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Du.get(this.auth._key());if(!e){try{const r=await RD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Du.set(this.auth._key(),e)}return this.bypassAuthState||Du.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RD(t,e){const n=kD(e),r=ND(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function AD(t,e){Du.set(t._key(),e)}function ND(t){return Xn(t._redirectPersistence)}function kD(t){return bu(CD,t.config.apiKey,t.name)}async function PD(t,e,n=!1){if(Cn(t.app))return Promise.reject(er(t));const r=Gi(t),i=wD(r,e),o=await new xD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bD=10*60*1e3;class DD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!wS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bD&&this.cachedEventUids.clear(),this.cachedEventUids.has(vw(e))}saveEventToCache(e){this.cachedEventUids.add(vw(e)),this.lastProcessedEventTime=Date.now()}}function vw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function wS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LD(t,e={}){return oi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VD=/^https?/;async function FD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await LD(t);for(const n of e)try{if(UD(n))return}catch{}wn(t,"unauthorized-domain")}function UD(t){const e=_p(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!VD.test(n))return!1;if(MD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const jD=new fl(3e4,6e4);function ww(){const t=kn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function BD(t){return new Promise((e,n)=>{var r,i,s;function o(){ww(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ww(),n(Nn(t,"network-request-failed"))},timeout:jD.get()})}if(!((i=(r=kn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=kn().gapi)===null||s===void 0)&&s.load)o();else{const a=Db("iframefcb");return kn()[a]=()=>{gapi.load?o():n(Nn(t,"network-request-failed"))},sS(`${bb()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Ou=null,e})}let Ou=null;function zD(t){return Ou=Ou||BD(t),Ou}/**
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
 */const $D=new fl(5e3,15e3),WD="__/auth/iframe",qD="emulator/auth/iframe",HD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KD(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ng(e,qD):`https://${t.config.authDomain}/${WD}`,r={apiKey:e.apiKey,appName:t.name,v:ii},i=GD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ao(r).slice(1)}`}async function QD(t){const e=await zD(t),n=kn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:KD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Nn(t,"network-request-failed"),a=kn().setTimeout(()=>{s(o)},$D.get());function u(){kn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const YD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XD=500,JD=600,ZD="_blank",eO="http://localhost";class Ew{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tO(t,e,n,r=XD,i=JD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},YD),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ht().toLowerCase();n&&(a=JT(c)?ZD:n),XT(c)&&(e=e||eO,u.scrollbars="yes");const d=Object.entries(u).reduce((p,[y,I])=>`${p}${y}=${I},`,"");if(Ib(c)&&a!=="_self")return nO(e||"",a),new Ew(null);const f=window.open(e||"",a,d);X(f,t,"popup-blocked");try{f.focus()}catch{}return new Ew(f)}function nO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const rO="__/auth/handler",iO="emulator/auth/handler",sO=encodeURIComponent("fac");async function Iw(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ii,eventId:i};if(e instanceof aS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof ml){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${sO}=${encodeURIComponent(u)}`:"";return`${oO(t)}?${ao(a).slice(1)}${c}`}function oO({config:t}){return t.emulator?ng(t,iO):`https://${t.authDomain}/${rO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="webStorageSupport";class aO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pS,this._completeRedirectFn=PD,this._overrideRedirectResult=AD}async _openPopup(e,n,r,i){var s;lr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Iw(e,n,r,_p(),i);return tO(e,o,lg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Iw(e,n,r,_p(),i);return cD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(lr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await QD(e),r=new DD(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(tf,{type:tf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[tf];o!==void 0&&n(!!o),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rS()||ig()||wh()}}const lO=aO;var Tw="@firebase/auth",Sw="1.7.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hO(t){Kr(new ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iS(t)},c=new Nb(r,i,s,u);return Fb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Kr(new ar("auth-internal",e=>{const n=Gi(e.getProvider("auth").getImmediate());return(r=>new uO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(Tw,Sw,cO(t)),nn(Tw,Sw,"esm2017")}/**
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
 */const dO=5*60,fO=DT("authIdTokenMaxAge")||dO;let Cw=null;const pO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fO)return;const i=n==null?void 0:n.token;Cw!==i&&(Cw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Sh(t=vh()){const e=dl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Vb(t,{popupRedirectResolver:lO,persistence:[vD,aD,pS]}),r=DT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=pO(s.toString());nD(n,o,()=>o(n.currentUser)),tD(n,a=>o(a))}}const i=PT("auth");return i&&Ub(n,`http://${i}`),n}function mO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}kb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Nn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",mO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hO("Browser");var xw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xi,ES;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,_){function E(){}E.prototype=_.prototype,S.D=_.prototype,S.prototype=new E,S.prototype.constructor=S,S.C=function(C,k,P){for(var R=Array(arguments.length-2),q=2;q<arguments.length;q++)R[q-2]=arguments[q];return _.prototype[k].apply(C,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,_,E){E||(E=0);var C=Array(16);if(typeof _=="string")for(var k=0;16>k;++k)C[k]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(k=0;16>k;++k)C[k]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=S.g[0],E=S.g[1],k=S.g[2];var P=S.g[3],R=_+(P^E&(k^P))+C[0]+3614090360&4294967295;_=E+(R<<7&4294967295|R>>>25),R=P+(k^_&(E^k))+C[1]+3905402710&4294967295,P=_+(R<<12&4294967295|R>>>20),R=k+(E^P&(_^E))+C[2]+606105819&4294967295,k=P+(R<<17&4294967295|R>>>15),R=E+(_^k&(P^_))+C[3]+3250441966&4294967295,E=k+(R<<22&4294967295|R>>>10),R=_+(P^E&(k^P))+C[4]+4118548399&4294967295,_=E+(R<<7&4294967295|R>>>25),R=P+(k^_&(E^k))+C[5]+1200080426&4294967295,P=_+(R<<12&4294967295|R>>>20),R=k+(E^P&(_^E))+C[6]+2821735955&4294967295,k=P+(R<<17&4294967295|R>>>15),R=E+(_^k&(P^_))+C[7]+4249261313&4294967295,E=k+(R<<22&4294967295|R>>>10),R=_+(P^E&(k^P))+C[8]+1770035416&4294967295,_=E+(R<<7&4294967295|R>>>25),R=P+(k^_&(E^k))+C[9]+2336552879&4294967295,P=_+(R<<12&4294967295|R>>>20),R=k+(E^P&(_^E))+C[10]+4294925233&4294967295,k=P+(R<<17&4294967295|R>>>15),R=E+(_^k&(P^_))+C[11]+2304563134&4294967295,E=k+(R<<22&4294967295|R>>>10),R=_+(P^E&(k^P))+C[12]+1804603682&4294967295,_=E+(R<<7&4294967295|R>>>25),R=P+(k^_&(E^k))+C[13]+4254626195&4294967295,P=_+(R<<12&4294967295|R>>>20),R=k+(E^P&(_^E))+C[14]+2792965006&4294967295,k=P+(R<<17&4294967295|R>>>15),R=E+(_^k&(P^_))+C[15]+1236535329&4294967295,E=k+(R<<22&4294967295|R>>>10),R=_+(k^P&(E^k))+C[1]+4129170786&4294967295,_=E+(R<<5&4294967295|R>>>27),R=P+(E^k&(_^E))+C[6]+3225465664&4294967295,P=_+(R<<9&4294967295|R>>>23),R=k+(_^E&(P^_))+C[11]+643717713&4294967295,k=P+(R<<14&4294967295|R>>>18),R=E+(P^_&(k^P))+C[0]+3921069994&4294967295,E=k+(R<<20&4294967295|R>>>12),R=_+(k^P&(E^k))+C[5]+3593408605&4294967295,_=E+(R<<5&4294967295|R>>>27),R=P+(E^k&(_^E))+C[10]+38016083&4294967295,P=_+(R<<9&4294967295|R>>>23),R=k+(_^E&(P^_))+C[15]+3634488961&4294967295,k=P+(R<<14&4294967295|R>>>18),R=E+(P^_&(k^P))+C[4]+3889429448&4294967295,E=k+(R<<20&4294967295|R>>>12),R=_+(k^P&(E^k))+C[9]+568446438&4294967295,_=E+(R<<5&4294967295|R>>>27),R=P+(E^k&(_^E))+C[14]+3275163606&4294967295,P=_+(R<<9&4294967295|R>>>23),R=k+(_^E&(P^_))+C[3]+4107603335&4294967295,k=P+(R<<14&4294967295|R>>>18),R=E+(P^_&(k^P))+C[8]+1163531501&4294967295,E=k+(R<<20&4294967295|R>>>12),R=_+(k^P&(E^k))+C[13]+2850285829&4294967295,_=E+(R<<5&4294967295|R>>>27),R=P+(E^k&(_^E))+C[2]+4243563512&4294967295,P=_+(R<<9&4294967295|R>>>23),R=k+(_^E&(P^_))+C[7]+1735328473&4294967295,k=P+(R<<14&4294967295|R>>>18),R=E+(P^_&(k^P))+C[12]+2368359562&4294967295,E=k+(R<<20&4294967295|R>>>12),R=_+(E^k^P)+C[5]+4294588738&4294967295,_=E+(R<<4&4294967295|R>>>28),R=P+(_^E^k)+C[8]+2272392833&4294967295,P=_+(R<<11&4294967295|R>>>21),R=k+(P^_^E)+C[11]+1839030562&4294967295,k=P+(R<<16&4294967295|R>>>16),R=E+(k^P^_)+C[14]+4259657740&4294967295,E=k+(R<<23&4294967295|R>>>9),R=_+(E^k^P)+C[1]+2763975236&4294967295,_=E+(R<<4&4294967295|R>>>28),R=P+(_^E^k)+C[4]+1272893353&4294967295,P=_+(R<<11&4294967295|R>>>21),R=k+(P^_^E)+C[7]+4139469664&4294967295,k=P+(R<<16&4294967295|R>>>16),R=E+(k^P^_)+C[10]+3200236656&4294967295,E=k+(R<<23&4294967295|R>>>9),R=_+(E^k^P)+C[13]+681279174&4294967295,_=E+(R<<4&4294967295|R>>>28),R=P+(_^E^k)+C[0]+3936430074&4294967295,P=_+(R<<11&4294967295|R>>>21),R=k+(P^_^E)+C[3]+3572445317&4294967295,k=P+(R<<16&4294967295|R>>>16),R=E+(k^P^_)+C[6]+76029189&4294967295,E=k+(R<<23&4294967295|R>>>9),R=_+(E^k^P)+C[9]+3654602809&4294967295,_=E+(R<<4&4294967295|R>>>28),R=P+(_^E^k)+C[12]+3873151461&4294967295,P=_+(R<<11&4294967295|R>>>21),R=k+(P^_^E)+C[15]+530742520&4294967295,k=P+(R<<16&4294967295|R>>>16),R=E+(k^P^_)+C[2]+3299628645&4294967295,E=k+(R<<23&4294967295|R>>>9),R=_+(k^(E|~P))+C[0]+4096336452&4294967295,_=E+(R<<6&4294967295|R>>>26),R=P+(E^(_|~k))+C[7]+1126891415&4294967295,P=_+(R<<10&4294967295|R>>>22),R=k+(_^(P|~E))+C[14]+2878612391&4294967295,k=P+(R<<15&4294967295|R>>>17),R=E+(P^(k|~_))+C[5]+4237533241&4294967295,E=k+(R<<21&4294967295|R>>>11),R=_+(k^(E|~P))+C[12]+1700485571&4294967295,_=E+(R<<6&4294967295|R>>>26),R=P+(E^(_|~k))+C[3]+2399980690&4294967295,P=_+(R<<10&4294967295|R>>>22),R=k+(_^(P|~E))+C[10]+4293915773&4294967295,k=P+(R<<15&4294967295|R>>>17),R=E+(P^(k|~_))+C[1]+2240044497&4294967295,E=k+(R<<21&4294967295|R>>>11),R=_+(k^(E|~P))+C[8]+1873313359&4294967295,_=E+(R<<6&4294967295|R>>>26),R=P+(E^(_|~k))+C[15]+4264355552&4294967295,P=_+(R<<10&4294967295|R>>>22),R=k+(_^(P|~E))+C[6]+2734768916&4294967295,k=P+(R<<15&4294967295|R>>>17),R=E+(P^(k|~_))+C[13]+1309151649&4294967295,E=k+(R<<21&4294967295|R>>>11),R=_+(k^(E|~P))+C[4]+4149444226&4294967295,_=E+(R<<6&4294967295|R>>>26),R=P+(E^(_|~k))+C[11]+3174756917&4294967295,P=_+(R<<10&4294967295|R>>>22),R=k+(_^(P|~E))+C[2]+718787259&4294967295,k=P+(R<<15&4294967295|R>>>17),R=E+(P^(k|~_))+C[9]+3951481745&4294967295,S.g[0]=S.g[0]+_&4294967295,S.g[1]=S.g[1]+(k+(R<<21&4294967295|R>>>11))&4294967295,S.g[2]=S.g[2]+k&4294967295,S.g[3]=S.g[3]+P&4294967295}r.prototype.u=function(S,_){_===void 0&&(_=S.length);for(var E=_-this.blockSize,C=this.B,k=this.h,P=0;P<_;){if(k==0)for(;P<=E;)i(this,S,P),P+=this.blockSize;if(typeof S=="string"){for(;P<_;)if(C[k++]=S.charCodeAt(P++),k==this.blockSize){i(this,C),k=0;break}}else for(;P<_;)if(C[k++]=S[P++],k==this.blockSize){i(this,C),k=0;break}}this.h=k,this.o+=_},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var _=1;_<S.length-8;++_)S[_]=0;var E=8*this.o;for(_=S.length-8;_<S.length;++_)S[_]=E&255,E/=256;for(this.u(S),S=Array(16),_=E=0;4>_;++_)for(var C=0;32>C;C+=8)S[E++]=this.g[_]>>>C&255;return S};function s(S,_){var E=a;return Object.prototype.hasOwnProperty.call(E,S)?E[S]:E[S]=_(S)}function o(S,_){this.h=_;for(var E=[],C=!0,k=S.length-1;0<=k;k--){var P=S[k]|0;C&&P==_||(E[k]=P,C=!1)}this.g=E}var a={};function u(S){return-128<=S&&128>S?s(S,function(_){return new o([_|0],0>_?-1:0)}):new o([S|0],0>S?-1:0)}function c(S){if(isNaN(S)||!isFinite(S))return f;if(0>S)return N(c(-S));for(var _=[],E=1,C=0;S>=E;C++)_[C]=S/E|0,E*=4294967296;return new o(_,0)}function d(S,_){if(S.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(S.charAt(0)=="-")return N(d(S.substring(1),_));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(_,8)),C=f,k=0;k<S.length;k+=8){var P=Math.min(8,S.length-k),R=parseInt(S.substring(k,k+P),_);8>P?(P=c(Math.pow(_,P)),C=C.j(P).add(c(R))):(C=C.j(E),C=C.add(c(R)))}return C}var f=u(0),p=u(1),y=u(16777216);t=o.prototype,t.m=function(){if(A(this))return-N(this).m();for(var S=0,_=1,E=0;E<this.g.length;E++){var C=this.i(E);S+=(0<=C?C:4294967296+C)*_,_*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(I(this))return"0";if(A(this))return"-"+N(this).toString(S);for(var _=c(Math.pow(S,6)),E=this,C="";;){var k=D(E,_).g;E=T(E,k.j(_));var P=((0<E.g.length?E.g[0]:E.h)>>>0).toString(S);if(E=k,I(E))return P+C;for(;6>P.length;)P="0"+P;C=P+C}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function I(S){if(S.h!=0)return!1;for(var _=0;_<S.g.length;_++)if(S.g[_]!=0)return!1;return!0}function A(S){return S.h==-1}t.l=function(S){return S=T(this,S),A(S)?-1:I(S)?0:1};function N(S){for(var _=S.g.length,E=[],C=0;C<_;C++)E[C]=~S.g[C];return new o(E,~S.h).add(p)}t.abs=function(){return A(this)?N(this):this},t.add=function(S){for(var _=Math.max(this.g.length,S.g.length),E=[],C=0,k=0;k<=_;k++){var P=C+(this.i(k)&65535)+(S.i(k)&65535),R=(P>>>16)+(this.i(k)>>>16)+(S.i(k)>>>16);C=R>>>16,P&=65535,R&=65535,E[k]=R<<16|P}return new o(E,E[E.length-1]&-2147483648?-1:0)};function T(S,_){return S.add(N(_))}t.j=function(S){if(I(this)||I(S))return f;if(A(this))return A(S)?N(this).j(N(S)):N(N(this).j(S));if(A(S))return N(this.j(N(S)));if(0>this.l(y)&&0>S.l(y))return c(this.m()*S.m());for(var _=this.g.length+S.g.length,E=[],C=0;C<2*_;C++)E[C]=0;for(C=0;C<this.g.length;C++)for(var k=0;k<S.g.length;k++){var P=this.i(C)>>>16,R=this.i(C)&65535,q=S.i(k)>>>16,Y=S.i(k)&65535;E[2*C+2*k]+=R*Y,w(E,2*C+2*k),E[2*C+2*k+1]+=P*Y,w(E,2*C+2*k+1),E[2*C+2*k+1]+=R*q,w(E,2*C+2*k+1),E[2*C+2*k+2]+=P*q,w(E,2*C+2*k+2)}for(C=0;C<_;C++)E[C]=E[2*C+1]<<16|E[2*C];for(C=_;C<2*_;C++)E[C]=0;return new o(E,0)};function w(S,_){for(;(S[_]&65535)!=S[_];)S[_+1]+=S[_]>>>16,S[_]&=65535,_++}function x(S,_){this.g=S,this.h=_}function D(S,_){if(I(_))throw Error("division by zero");if(I(S))return new x(f,f);if(A(S))return _=D(N(S),_),new x(N(_.g),N(_.h));if(A(_))return _=D(S,N(_)),new x(N(_.g),_.h);if(30<S.g.length){if(A(S)||A(_))throw Error("slowDivide_ only works with positive integers.");for(var E=p,C=_;0>=C.l(S);)E=L(E),C=L(C);var k=F(E,1),P=F(C,1);for(C=F(C,2),E=F(E,2);!I(C);){var R=P.add(C);0>=R.l(S)&&(k=k.add(E),P=R),C=F(C,1),E=F(E,1)}return _=T(S,k.j(_)),new x(k,_)}for(k=f;0<=S.l(_);){for(E=Math.max(1,Math.floor(S.m()/_.m())),C=Math.ceil(Math.log(E)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),P=c(E),R=P.j(_);A(R)||0<R.l(S);)E-=C,P=c(E),R=P.j(_);I(P)&&(P=p),k=k.add(P),S=T(S,R)}return new x(k,S)}t.A=function(S){return D(this,S).h},t.and=function(S){for(var _=Math.max(this.g.length,S.g.length),E=[],C=0;C<_;C++)E[C]=this.i(C)&S.i(C);return new o(E,this.h&S.h)},t.or=function(S){for(var _=Math.max(this.g.length,S.g.length),E=[],C=0;C<_;C++)E[C]=this.i(C)|S.i(C);return new o(E,this.h|S.h)},t.xor=function(S){for(var _=Math.max(this.g.length,S.g.length),E=[],C=0;C<_;C++)E[C]=this.i(C)^S.i(C);return new o(E,this.h^S.h)};function L(S){for(var _=S.g.length+1,E=[],C=0;C<_;C++)E[C]=S.i(C)<<1|S.i(C-1)>>>31;return new o(E,S.h)}function F(S,_){var E=_>>5;_%=32;for(var C=S.g.length-E,k=[],P=0;P<C;P++)k[P]=0<_?S.i(P+E)>>>_|S.i(P+E+1)<<32-_:S.i(P+E);return new o(k,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ES=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,xi=o}).apply(typeof xw<"u"?xw:typeof self<"u"?self:typeof window<"u"?window:{});var hu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var IS,TS,Jo,SS,Lu,Ep,CS,xS,RS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,m){return l==Array.prototype||l==Object.prototype||(l[h]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof hu=="object"&&hu];for(var h=0;h<l.length;++h){var m=l[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var m=r;l=l.split(".");for(var v=0;v<l.length-1;v++){var b=l[v];if(!(b in m))break e;m=m[b]}l=l[l.length-1],v=m[l],h=h(v),h!=v&&h!=null&&e(m,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var m=0,v=!1,b={next:function(){if(!v&&m<l.length){var M=m++;return{value:h(M,l[M]),done:!1}}return v=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,m){return l.call.apply(l.bind,arguments)}function f(l,h,m){if(!l)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,v),l.apply(h,b)}}return function(){return l.apply(h,arguments)}}function p(l,h,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,p.apply(null,arguments)}function y(l,h){var m=Array.prototype.slice.call(arguments,1);return function(){var v=m.slice();return v.push.apply(v,arguments),l.apply(this,v)}}function I(l,h){function m(){}m.prototype=h.prototype,l.aa=h.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(v,b,M){for(var z=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)z[ye-2]=arguments[ye];return h.prototype[b].apply(v,z)}}function A(l){const h=l.length;if(0<h){const m=Array(h);for(let v=0;v<h;v++)m[v]=l[v];return m}return[]}function N(l,h){for(let m=1;m<arguments.length;m++){const v=arguments[m];if(u(v)){const b=l.length||0,M=v.length||0;l.length=b+M;for(let z=0;z<M;z++)l[b+z]=v[z]}else l.push(v)}}class T{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function w(l){return/^[\s\xa0]*$/.test(l)}function x(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function D(l){return D[" "](l),l}D[" "]=function(){};var L=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function F(l,h,m){for(const v in l)h.call(m,l[v],v,l)}function S(l,h){for(const m in l)h.call(void 0,l[m],m,l)}function _(l){const h={};for(const m in l)h[m]=l[m];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,h){let m,v;for(let b=1;b<arguments.length;b++){v=arguments[b];for(m in v)l[m]=v[m];for(let M=0;M<E.length;M++)m=E[M],Object.prototype.hasOwnProperty.call(v,m)&&(l[m]=v[m])}}function k(l){var h=1;l=l.split(":");const m=[];for(;0<h&&l.length;)m.push(l.shift()),h--;return l.length&&m.push(l.join(":")),m}function P(l){a.setTimeout(()=>{throw l},0)}function R(){var l=Q;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class q{constructor(){this.h=this.g=null}add(h,m){const v=Y.get();v.set(h,m),this.h?this.h.next=v:this.g=v,this.h=v}}var Y=new T(()=>new ge,l=>l.reset());class ge{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Ae,W=!1,Q=new q,ne=()=>{const l=a.Promise.resolve(void 0);Ae=()=>{l.then(ke)}};var ke=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(m){P(m)}var h=Y;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}W=!1};function _e(){this.s=this.s,this.C=this.C}_e.prototype.s=!1,_e.prototype.ma=function(){this.s||(this.s=!0,this.N())},_e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function je(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var Vn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,h),a.removeEventListener("test",m,h)}catch{}return l}();function Fn(l,h){if(je.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,v=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(L){e:{try{D(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else m=="mouseover"?h=l.fromElement:m=="mouseout"&&(h=l.toElement);this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Un[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Fn.aa.h.call(this)}}I(Fn,je);var Un={2:"touch",3:"pen",4:"mouse"};Fn.prototype.h=function(){Fn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var jn="closure_listenable_"+(1e6*Math.random()|0),CR=0;function xR(l,h,m,v,b){this.listener=l,this.proxy=null,this.src=h,this.type=m,this.capture=!!v,this.ha=b,this.key=++CR,this.da=this.fa=!1}function kl(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Pl(l){this.src=l,this.g={},this.h=0}Pl.prototype.add=function(l,h,m,v,b){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var z=ed(l,h,v,b);return-1<z?(h=l[z],m||(h.fa=!1)):(h=new xR(h,this.src,M,!!v,b),h.fa=m,l.push(h)),h};function Zh(l,h){var m=h.type;if(m in l.g){var v=l.g[m],b=Array.prototype.indexOf.call(v,h,void 0),M;(M=0<=b)&&Array.prototype.splice.call(v,b,1),M&&(kl(h),l.g[m].length==0&&(delete l.g[m],l.h--))}}function ed(l,h,m,v){for(var b=0;b<l.length;++b){var M=l[b];if(!M.da&&M.listener==h&&M.capture==!!m&&M.ha==v)return b}return-1}var td="closure_lm_"+(1e6*Math.random()|0),nd={};function L_(l,h,m,v,b){if(Array.isArray(h)){for(var M=0;M<h.length;M++)L_(l,h[M],m,v,b);return null}return m=F_(m),l&&l[jn]?l.K(h,m,c(v)?!!v.capture:!!v,b):RR(l,h,m,!1,v,b)}function RR(l,h,m,v,b,M){if(!h)throw Error("Invalid event type");var z=c(b)?!!b.capture:!!b,ye=id(l);if(ye||(l[td]=ye=new Pl(l)),m=ye.add(h,m,v,z,M),m.proxy)return m;if(v=AR(),m.proxy=v,v.src=l,v.listener=m,l.addEventListener)Vn||(b=z),b===void 0&&(b=!1),l.addEventListener(h.toString(),v,b);else if(l.attachEvent)l.attachEvent(V_(h.toString()),v);else if(l.addListener&&l.removeListener)l.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return m}function AR(){function l(m){return h.call(l.src,l.listener,m)}const h=NR;return l}function M_(l,h,m,v,b){if(Array.isArray(h))for(var M=0;M<h.length;M++)M_(l,h[M],m,v,b);else v=c(v)?!!v.capture:!!v,m=F_(m),l&&l[jn]?(l=l.i,h=String(h).toString(),h in l.g&&(M=l.g[h],m=ed(M,m,v,b),-1<m&&(kl(M[m]),Array.prototype.splice.call(M,m,1),M.length==0&&(delete l.g[h],l.h--)))):l&&(l=id(l))&&(h=l.g[h.toString()],l=-1,h&&(l=ed(h,m,v,b)),(m=-1<l?h[l]:null)&&rd(m))}function rd(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[jn])Zh(h.i,l);else{var m=l.type,v=l.proxy;h.removeEventListener?h.removeEventListener(m,v,l.capture):h.detachEvent?h.detachEvent(V_(m),v):h.addListener&&h.removeListener&&h.removeListener(v),(m=id(h))?(Zh(m,l),m.h==0&&(m.src=null,h[td]=null)):kl(l)}}}function V_(l){return l in nd?nd[l]:nd[l]="on"+l}function NR(l,h){if(l.da)l=!0;else{h=new Fn(h,this);var m=l.listener,v=l.ha||l.src;l.fa&&rd(l),l=m.call(v,h)}return l}function id(l){return l=l[td],l instanceof Pl?l:null}var sd="__closure_events_fn_"+(1e9*Math.random()>>>0);function F_(l){return typeof l=="function"?l:(l[sd]||(l[sd]=function(h){return l.handleEvent(h)}),l[sd])}function ft(){_e.call(this),this.i=new Pl(this),this.M=this,this.F=null}I(ft,_e),ft.prototype[jn]=!0,ft.prototype.removeEventListener=function(l,h,m,v){M_(this,l,h,m,v)};function St(l,h){var m,v=l.F;if(v)for(m=[];v;v=v.F)m.push(v);if(l=l.M,v=h.type||h,typeof h=="string")h=new je(h,l);else if(h instanceof je)h.target=h.target||l;else{var b=h;h=new je(v,l),C(h,b)}if(b=!0,m)for(var M=m.length-1;0<=M;M--){var z=h.g=m[M];b=bl(z,v,!0,h)&&b}if(z=h.g=l,b=bl(z,v,!0,h)&&b,b=bl(z,v,!1,h)&&b,m)for(M=0;M<m.length;M++)z=h.g=m[M],b=bl(z,v,!1,h)&&b}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var m=l.g[h],v=0;v<m.length;v++)kl(m[v]);delete l.g[h],l.h--}}this.F=null},ft.prototype.K=function(l,h,m,v){return this.i.add(String(l),h,!1,m,v)},ft.prototype.L=function(l,h,m,v){return this.i.add(String(l),h,!0,m,v)};function bl(l,h,m,v){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,M=0;M<h.length;++M){var z=h[M];if(z&&!z.da&&z.capture==m){var ye=z.listener,it=z.ha||z.src;z.fa&&Zh(l.i,z),b=ye.call(it,v)!==!1&&b}}return b&&!v.defaultPrevented}function U_(l,h,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function j_(l){l.g=U_(()=>{l.g=null,l.i&&(l.i=!1,j_(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class kR extends _e{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:j_(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _o(l){_e.call(this),this.h=l,this.g={}}I(_o,_e);var B_=[];function z_(l){F(l.g,function(h,m){this.g.hasOwnProperty(m)&&rd(h)},l),l.g={}}_o.prototype.N=function(){_o.aa.N.call(this),z_(this)},_o.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var od=a.JSON.stringify,PR=a.JSON.parse,bR=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function ad(){}ad.prototype.h=null;function $_(l){return l.h||(l.h=l.i())}function W_(){}var yo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ld(){je.call(this,"d")}I(ld,je);function ud(){je.call(this,"c")}I(ud,je);var ui={},q_=null;function Dl(){return q_=q_||new ft}ui.La="serverreachability";function H_(l){je.call(this,ui.La,l)}I(H_,je);function vo(l){const h=Dl();St(h,new H_(h))}ui.STAT_EVENT="statevent";function G_(l,h){je.call(this,ui.STAT_EVENT,l),this.stat=h}I(G_,je);function Ct(l){const h=Dl();St(h,new G_(h,l))}ui.Ma="timingevent";function K_(l,h){je.call(this,ui.Ma,l),this.size=h}I(K_,je);function wo(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function Eo(){this.g=!0}Eo.prototype.xa=function(){this.g=!1};function DR(l,h,m,v,b,M){l.info(function(){if(l.g)if(M)for(var z="",ye=M.split("&"),it=0;it<ye.length;it++){var he=ye[it].split("=");if(1<he.length){var pt=he[0];he=he[1];var mt=pt.split("_");z=2<=mt.length&&mt[1]=="type"?z+(pt+"="+he+"&"):z+(pt+"=redacted&")}}else z=null;else z=M;return"XMLHTTP REQ ("+v+") [attempt "+b+"]: "+h+`
`+m+`
`+z})}function OR(l,h,m,v,b,M,z){l.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+b+"]: "+h+`
`+m+`
`+M+" "+z})}function Ji(l,h,m,v){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+MR(l,m)+(v?" "+v:"")})}function LR(l,h){l.info(function(){return"TIMEOUT: "+h})}Eo.prototype.info=function(){};function MR(l,h){if(!l.g)return h;if(!h)return null;try{var m=JSON.parse(h);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var v=m[l];if(!(2>v.length)){var b=v[1];if(Array.isArray(b)&&!(1>b.length)){var M=b[0];if(M!="noop"&&M!="stop"&&M!="close")for(var z=1;z<b.length;z++)b[z]=""}}}}return od(m)}catch{return h}}var Ol={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Q_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},cd;function Ll(){}I(Ll,ad),Ll.prototype.g=function(){return new XMLHttpRequest},Ll.prototype.i=function(){return{}},cd=new Ll;function mr(l,h,m,v){this.j=l,this.i=h,this.l=m,this.R=v||1,this.U=new _o(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Y_}function Y_(){this.i=null,this.g="",this.h=!1}var X_={},hd={};function dd(l,h,m){l.L=1,l.v=Ul(Bn(h)),l.m=m,l.P=!0,J_(l,null)}function J_(l,h){l.F=Date.now(),Ml(l),l.A=Bn(l.v);var m=l.A,v=l.R;Array.isArray(v)||(v=[String(v)]),dy(m.i,"t",v),l.C=0,m=l.j.J,l.h=new Y_,l.g=ky(l.j,m?h:null,!l.m),0<l.O&&(l.M=new kR(p(l.Y,l,l.g),l.O)),h=l.U,m=l.g,v=l.ca;var b="readystatechange";Array.isArray(b)||(b&&(B_[0]=b.toString()),b=B_);for(var M=0;M<b.length;M++){var z=L_(m,b[M],v||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),vo(),DR(l.i,l.u,l.A,l.l,l.R,l.m)}mr.prototype.ca=function(l){l=l.target;const h=this.M;h&&zn(l)==3?h.j():this.Y(l)},mr.prototype.Y=function(l){try{if(l==this.g)e:{const mt=zn(this.g);var h=this.g.Ba();const ts=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||vy(this.g)))){this.J||mt!=4||h==7||(h==8||0>=ts?vo(3):vo(2)),fd(this);var m=this.g.Z();this.X=m;t:if(Z_(this)){var v=vy(this.g);l="";var b=v.length,M=zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ci(this),Io(this);var z="";break t}this.h.i=new a.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,l+=this.h.i.decode(v[h],{stream:!(M&&h==b-1)});v.length=0,this.h.g+=l,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=m==200,OR(this.i,this.u,this.A,this.l,this.R,mt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var ye,it=this.g;if((ye=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(ye)){var he=ye;break t}}he=null}if(m=he)Ji(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pd(this,m);else{this.o=!1,this.s=3,Ct(12),ci(this),Io(this);break e}}if(this.P){m=!0;let an;for(;!this.J&&this.C<z.length;)if(an=VR(this,z),an==hd){mt==4&&(this.s=4,Ct(14),m=!1),Ji(this.i,this.l,null,"[Incomplete Response]");break}else if(an==X_){this.s=4,Ct(15),Ji(this.i,this.l,z,"[Invalid Chunk]"),m=!1;break}else Ji(this.i,this.l,an,null),pd(this,an);if(Z_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||z.length!=0||this.h.h||(this.s=1,Ct(16),m=!1),this.o=this.o&&m,!m)Ji(this.i,this.l,z,"[Invalid Chunked Response]"),ci(this),Io(this);else if(0<z.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),wd(pt),pt.M=!0,Ct(11))}}else Ji(this.i,this.l,z,null),pd(this,z);mt==4&&ci(this),this.o&&!this.J&&(mt==4?xy(this.j,this):(this.o=!1,Ml(this)))}else eA(this.g),m==400&&0<z.indexOf("Unknown SID")?(this.s=3,Ct(12)):(this.s=0,Ct(13)),ci(this),Io(this)}}}catch{}finally{}};function Z_(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function VR(l,h){var m=l.C,v=h.indexOf(`
`,m);return v==-1?hd:(m=Number(h.substring(m,v)),isNaN(m)?X_:(v+=1,v+m>h.length?hd:(h=h.slice(v,v+m),l.C=v+m,h)))}mr.prototype.cancel=function(){this.J=!0,ci(this)};function Ml(l){l.S=Date.now()+l.I,ey(l,l.I)}function ey(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=wo(p(l.ba,l),h)}function fd(l){l.B&&(a.clearTimeout(l.B),l.B=null)}mr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(LR(this.i,this.A),this.L!=2&&(vo(),Ct(17)),ci(this),this.s=2,Io(this)):ey(this,this.S-l)};function Io(l){l.j.G==0||l.J||xy(l.j,l)}function ci(l){fd(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,z_(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function pd(l,h){try{var m=l.j;if(m.G!=0&&(m.g==l||md(m.h,l))){if(!l.K&&md(m.h,l)&&m.G==3){try{var v=m.Da.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var b=v;if(b[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Wl(m),zl(m);else break e;vd(m),Ct(18)}}else m.za=b[1],0<m.za-m.T&&37500>b[2]&&m.F&&m.v==0&&!m.C&&(m.C=wo(p(m.Za,m),6e3));if(1>=ry(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else di(m,11)}else if((l.K||m.g==l)&&Wl(m),!w(h))for(b=m.Da.g.parse(h),h=0;h<b.length;h++){let he=b[h];if(m.T=he[0],he=he[1],m.G==2)if(he[0]=="c"){m.K=he[1],m.ia=he[2];const pt=he[3];pt!=null&&(m.la=pt,m.j.info("VER="+m.la));const mt=he[4];mt!=null&&(m.Aa=mt,m.j.info("SVER="+m.Aa));const ts=he[5];ts!=null&&typeof ts=="number"&&0<ts&&(v=1.5*ts,m.L=v,m.j.info("backChannelRequestTimeoutMs_="+v)),v=m;const an=l.g;if(an){const Hl=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hl){var M=v.h;M.g||Hl.indexOf("spdy")==-1&&Hl.indexOf("quic")==-1&&Hl.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(gd(M,M.h),M.h=null))}if(v.D){const Ed=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;Ed&&(v.ya=Ed,Se(v.I,v.D,Ed))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),v=m;var z=l;if(v.qa=Ny(v,v.J?v.ia:null,v.W),z.K){iy(v.h,z);var ye=z,it=v.L;it&&(ye.I=it),ye.B&&(fd(ye),Ml(ye)),v.g=z}else Sy(v);0<m.i.length&&$l(m)}else he[0]!="stop"&&he[0]!="close"||di(m,7);else m.G==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?di(m,7):yd(m):he[0]!="noop"&&m.l&&m.l.ta(he),m.v=0)}}vo(4)}catch{}}var FR=class{constructor(l,h){this.g=l,this.map=h}};function ty(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ny(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ry(l){return l.h?1:l.g?l.g.size:0}function md(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function gd(l,h){l.g?l.g.add(h):l.h=h}function iy(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}ty.prototype.cancel=function(){if(this.i=sy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function sy(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const m of l.g.values())h=h.concat(m.D);return h}return A(l.i)}function UR(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],m=l.length,v=0;v<m;v++)h.push(l[v]);return h}h=[],m=0;for(v in l)h[m++]=l[v];return h}function jR(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var m=0;m<l;m++)h.push(m);return h}h=[],m=0;for(const v in l)h[m++]=v;return h}}}function oy(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var m=jR(l),v=UR(l),b=v.length,M=0;M<b;M++)h.call(void 0,v[M],m&&m[M],l)}var ay=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function BR(l,h){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var v=l[m].indexOf("="),b=null;if(0<=v){var M=l[m].substring(0,v);b=l[m].substring(v+1)}else M=l[m];h(M,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function hi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof hi){this.h=l.h,Vl(this,l.j),this.o=l.o,this.g=l.g,Fl(this,l.s),this.l=l.l;var h=l.i,m=new Co;m.i=h.i,h.g&&(m.g=new Map(h.g),m.h=h.h),ly(this,m),this.m=l.m}else l&&(h=String(l).match(ay))?(this.h=!1,Vl(this,h[1]||"",!0),this.o=To(h[2]||""),this.g=To(h[3]||"",!0),Fl(this,h[4]),this.l=To(h[5]||"",!0),ly(this,h[6]||"",!0),this.m=To(h[7]||"")):(this.h=!1,this.i=new Co(null,this.h))}hi.prototype.toString=function(){var l=[],h=this.j;h&&l.push(So(h,uy,!0),":");var m=this.g;return(m||h=="file")&&(l.push("//"),(h=this.o)&&l.push(So(h,uy,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(So(m,m.charAt(0)=="/"?WR:$R,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",So(m,HR)),l.join("")};function Bn(l){return new hi(l)}function Vl(l,h,m){l.j=m?To(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Fl(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function ly(l,h,m){h instanceof Co?(l.i=h,GR(l.i,l.h)):(m||(h=So(h,qR)),l.i=new Co(h,l.h))}function Se(l,h,m){l.i.set(h,m)}function Ul(l){return Se(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function To(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function So(l,h,m){return typeof l=="string"?(l=encodeURI(l).replace(h,zR),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function zR(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var uy=/[#\/\?@]/g,$R=/[#\?:]/g,WR=/[#\?]/g,qR=/[#\?@]/g,HR=/#/g;function Co(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function gr(l){l.g||(l.g=new Map,l.h=0,l.i&&BR(l.i,function(h,m){l.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=Co.prototype,t.add=function(l,h){gr(this),this.i=null,l=Zi(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(h),this.h+=1,this};function cy(l,h){gr(l),h=Zi(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function hy(l,h){return gr(l),h=Zi(l,h),l.g.has(h)}t.forEach=function(l,h){gr(this),this.g.forEach(function(m,v){m.forEach(function(b){l.call(h,b,v,this)},this)},this)},t.na=function(){gr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),m=[];for(let v=0;v<h.length;v++){const b=l[v];for(let M=0;M<b.length;M++)m.push(h[v])}return m},t.V=function(l){gr(this);let h=[];if(typeof l=="string")hy(this,l)&&(h=h.concat(this.g.get(Zi(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)h=h.concat(l[m])}return h},t.set=function(l,h){return gr(this),this.i=null,l=Zi(this,l),hy(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function dy(l,h,m){cy(l,h),0<m.length&&(l.i=null,l.g.set(Zi(l,h),A(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var m=0;m<h.length;m++){var v=h[m];const M=encodeURIComponent(String(v)),z=this.V(v);for(v=0;v<z.length;v++){var b=M;z[v]!==""&&(b+="="+encodeURIComponent(String(z[v]))),l.push(b)}}return this.i=l.join("&")};function Zi(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function GR(l,h){h&&!l.j&&(gr(l),l.i=null,l.g.forEach(function(m,v){var b=v.toLowerCase();v!=b&&(cy(this,v),dy(this,b,m))},l)),l.j=h}function KR(l,h){const m=new Eo;if(a.Image){const v=new Image;v.onload=y(_r,m,"TestLoadImage: loaded",!0,h,v),v.onerror=y(_r,m,"TestLoadImage: error",!1,h,v),v.onabort=y(_r,m,"TestLoadImage: abort",!1,h,v),v.ontimeout=y(_r,m,"TestLoadImage: timeout",!1,h,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=l}else h(!1)}function QR(l,h){const m=new Eo,v=new AbortController,b=setTimeout(()=>{v.abort(),_r(m,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:v.signal}).then(M=>{clearTimeout(b),M.ok?_r(m,"TestPingServer: ok",!0,h):_r(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),_r(m,"TestPingServer: error",!1,h)})}function _r(l,h,m,v,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),v(m)}catch{}}function YR(){this.g=new bR}function XR(l,h,m){const v=m||"";try{oy(l,function(b,M){let z=b;c(b)&&(z=od(b)),h.push(v+M+"="+encodeURIComponent(z))})}catch(b){throw h.push(v+"type="+encodeURIComponent("_badmap")),b}}function xo(l){this.l=l.Ub||null,this.j=l.eb||!1}I(xo,ad),xo.prototype.g=function(){return new jl(this.l,this.j)},xo.prototype.i=function(l){return function(){return l}}({});function jl(l,h){ft.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(jl,ft),t=jl.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,Ao(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ro(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Ao(this)),this.g&&(this.readyState=3,Ao(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;fy(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function fy(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?Ro(this):Ao(this),this.readyState==3&&fy(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Ro(this))},t.Qa=function(l){this.g&&(this.response=l,Ro(this))},t.ga=function(){this.g&&Ro(this)};function Ro(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Ao(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=h.next();return l.join(`\r
`)};function Ao(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(jl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function py(l){let h="";return F(l,function(m,v){h+=v,h+=":",h+=m,h+=`\r
`}),h}function _d(l,h,m){e:{for(v in m){var v=!1;break e}v=!0}v||(m=py(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):Se(l,h,m))}function Le(l){ft.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(Le,ft);var JR=/^https?$/i,ZR=["POST","PUT"];t=Le.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,m,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():cd.g(),this.v=this.o?$_(this.o):$_(cd),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(M){my(this,M);return}if(l=m||"",m=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var b in v)m.set(b,v[b]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const M of v.keys())m.set(M,v.get(M));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(m.keys()).find(M=>M.toLowerCase()=="content-type"),b=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(ZR,h,void 0))||v||b||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,z]of m)this.g.setRequestHeader(M,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{yy(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){my(this,M)}};function my(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,gy(l),Bl(l)}function gy(l){l.A||(l.A=!0,St(l,"complete"),St(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,St(this,"complete"),St(this,"abort"),Bl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bl(this,!0)),Le.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?_y(this):this.bb())},t.bb=function(){_y(this)};function _y(l){if(l.h&&typeof o<"u"&&(!l.v[1]||zn(l)!=4||l.Z()!=2)){if(l.u&&zn(l)==4)U_(l.Ea,0,l);else if(St(l,"readystatechange"),zn(l)==4){l.h=!1;try{const z=l.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var v;if(v=z===0){var b=String(l.D).match(ay)[1]||null;!b&&a.self&&a.self.location&&(b=a.self.location.protocol.slice(0,-1)),v=!JR.test(b?b.toLowerCase():"")}m=v}if(m)St(l,"complete"),St(l,"success");else{l.m=6;try{var M=2<zn(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",gy(l)}}finally{Bl(l)}}}}function Bl(l,h){if(l.g){yy(l);const m=l.g,v=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||St(l,"ready");try{m.onreadystatechange=v}catch{}}}function yy(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function zn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<zn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),PR(h)}};function vy(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function eA(l){const h={};l=(l.g&&2<=zn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<l.length;v++){if(w(l[v]))continue;var m=k(l[v]);const b=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const M=h[b]||[];h[b]=M,M.push(m)}S(h,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function No(l,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||h}function wy(l){this.Aa=0,this.i=[],this.j=new Eo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=No("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=No("baseRetryDelayMs",5e3,l),this.cb=No("retryDelaySeedMs",1e4,l),this.Wa=No("forwardChannelMaxRetries",2,l),this.wa=No("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new ty(l&&l.concurrentRequestLimit),this.Da=new YR,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=wy.prototype,t.la=8,t.G=1,t.connect=function(l,h,m,v){Ct(0),this.W=l,this.H=h||{},m&&v!==void 0&&(this.H.OSID=m,this.H.OAID=v),this.F=this.X,this.I=Ny(this,null,this.W),$l(this)};function yd(l){if(Ey(l),l.G==3){var h=l.U++,m=Bn(l.I);if(Se(m,"SID",l.K),Se(m,"RID",h),Se(m,"TYPE","terminate"),ko(l,m),h=new mr(l,l.j,h),h.L=2,h.v=Ul(Bn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=h.v,m=!0),m||(h.g=ky(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ml(h)}Ay(l)}function zl(l){l.g&&(wd(l),l.g.cancel(),l.g=null)}function Ey(l){zl(l),l.u&&(a.clearTimeout(l.u),l.u=null),Wl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function $l(l){if(!ny(l.h)&&!l.s){l.s=!0;var h=l.Ga;Ae||ne(),W||(Ae(),W=!0),Q.add(h,l),l.B=0}}function tA(l,h){return ry(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=wo(p(l.Ga,l,h),Ry(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const b=new mr(this,this.j,l);let M=this.o;if(this.S&&(M?(M=_(M),C(M,this.S)):M=this.S),this.m!==null||this.O||(b.H=M,M=null),this.P)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var v=this.i[m];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,4096<h){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=Ty(this,b,h),m=Bn(this.I),Se(m,"RID",l),Se(m,"CVER",22),this.D&&Se(m,"X-HTTP-Session-Id",this.D),ko(this,m),M&&(this.O?h="headers="+encodeURIComponent(String(py(M)))+"&"+h:this.m&&_d(m,this.m,M)),gd(this.h,b),this.Ua&&Se(m,"TYPE","init"),this.P?(Se(m,"$req",h),Se(m,"SID","null"),b.T=!0,dd(b,m,null)):dd(b,m,h),this.G=2}}else this.G==3&&(l?Iy(this,l):this.i.length==0||ny(this.h)||Iy(this))};function Iy(l,h){var m;h?m=h.l:m=l.U++;const v=Bn(l.I);Se(v,"SID",l.K),Se(v,"RID",m),Se(v,"AID",l.T),ko(l,v),l.m&&l.o&&_d(v,l.m,l.o),m=new mr(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),h&&(l.i=h.D.concat(l.i)),h=Ty(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),gd(l.h,m),dd(m,v,h)}function ko(l,h){l.H&&F(l.H,function(m,v){Se(h,v,m)}),l.l&&oy({},function(m,v){Se(h,v,m)})}function Ty(l,h,m){m=Math.min(l.i.length,m);var v=l.l?p(l.l.Na,l.l,l):null;e:{var b=l.i;let M=-1;for(;;){const z=["count="+m];M==-1?0<m?(M=b[0].g,z.push("ofs="+M)):M=0:z.push("ofs="+M);let ye=!0;for(let it=0;it<m;it++){let he=b[it].g;const pt=b[it].map;if(he-=M,0>he)M=Math.max(0,b[it].g-100),ye=!1;else try{XR(pt,z,"req"+he+"_")}catch{v&&v(pt)}}if(ye){v=z.join("&");break e}}}return l=l.i.splice(0,m),h.D=l,v}function Sy(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;Ae||ne(),W||(Ae(),W=!0),Q.add(h,l),l.v=0}}function vd(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=wo(p(l.Fa,l),Ry(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Cy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=wo(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ct(10),zl(this),Cy(this))};function wd(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Cy(l){l.g=new mr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Bn(l.qa);Se(h,"RID","rpc"),Se(h,"SID",l.K),Se(h,"AID",l.T),Se(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&Se(h,"TO",l.ja),Se(h,"TYPE","xmlhttp"),ko(l,h),l.m&&l.o&&_d(h,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Ul(Bn(h)),m.m=null,m.P=!0,J_(m,l)}t.Za=function(){this.C!=null&&(this.C=null,zl(this),vd(this),Ct(19))};function Wl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function xy(l,h){var m=null;if(l.g==h){Wl(l),wd(l),l.g=null;var v=2}else if(md(l.h,h))m=h.D,iy(l.h,h),v=1;else return;if(l.G!=0){if(h.o)if(v==1){m=h.m?h.m.length:0,h=Date.now()-h.F;var b=l.B;v=Dl(),St(v,new K_(v,m)),$l(l)}else Sy(l);else if(b=h.s,b==3||b==0&&0<h.X||!(v==1&&tA(l,h)||v==2&&vd(l)))switch(m&&0<m.length&&(h=l.h,h.i=h.i.concat(m)),b){case 1:di(l,5);break;case 4:di(l,10);break;case 3:di(l,6);break;default:di(l,2)}}}function Ry(l,h){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*h}function di(l,h){if(l.j.info("Error code "+h),h==2){var m=p(l.fb,l),v=l.Xa;const b=!v;v=new hi(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Vl(v,"https"),Ul(v),b?KR(v.toString(),m):QR(v.toString(),m)}else Ct(2);l.G=0,l.l&&l.l.sa(h),Ay(l),Ey(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function Ay(l){if(l.G=0,l.ka=[],l.l){const h=sy(l.h);(h.length!=0||l.i.length!=0)&&(N(l.ka,h),N(l.ka,l.i),l.h.i.length=0,A(l.i),l.i.length=0),l.l.ra()}}function Ny(l,h,m){var v=m instanceof hi?Bn(m):new hi(m);if(v.g!="")h&&(v.g=h+"."+v.g),Fl(v,v.s);else{var b=a.location;v=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var M=new hi(null);v&&Vl(M,v),h&&(M.g=h),b&&Fl(M,b),m&&(M.l=m),v=M}return m=l.D,h=l.ya,m&&h&&Se(v,m,h),Se(v,"VER",l.la),ko(l,v),v}function ky(l,h,m){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Le(new xo({eb:m})):new Le(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Py(){}t=Py.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ql(){}ql.prototype.g=function(l,h){return new $t(l,h)};function $t(l,h){ft.call(this),this.g=new wy(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!w(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new es(this)}I($t,ft),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){yd(this.g)},$t.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=od(l),l=m);h.i.push(new FR(h.Ya++,l)),h.G==3&&$l(h)},$t.prototype.N=function(){this.g.l=null,delete this.j,yd(this.g),delete this.g,$t.aa.N.call(this)};function by(l){ld.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const m in h){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}I(by,ld);function Dy(){ud.call(this),this.status=1}I(Dy,ud);function es(l){this.g=l}I(es,Py),es.prototype.ua=function(){St(this.g,"a")},es.prototype.ta=function(l){St(this.g,new by(l))},es.prototype.sa=function(l){St(this.g,new Dy)},es.prototype.ra=function(){St(this.g,"b")},ql.prototype.createWebChannel=ql.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,RS=function(){return new ql},xS=function(){return Dl()},CS=ui,Ep={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ol.NO_ERROR=0,Ol.TIMEOUT=8,Ol.HTTP_ERROR=6,Lu=Ol,Q_.COMPLETE="complete",SS=Q_,W_.EventType=yo,yo.OPEN="a",yo.CLOSE="b",yo.ERROR="c",yo.MESSAGE="d",ft.prototype.listen=ft.prototype.K,Jo=W_,TS=xo,Le.prototype.listenOnce=Le.prototype.L,Le.prototype.getLastError=Le.prototype.Ka,Le.prototype.getLastErrorCode=Le.prototype.Ba,Le.prototype.getStatus=Le.prototype.Z,Le.prototype.getResponseJson=Le.prototype.Oa,Le.prototype.getResponseText=Le.prototype.oa,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Ha,IS=Le}).apply(typeof hu<"u"?hu:typeof self<"u"?self:typeof window<"u"?window:{});const Rw="@firebase/firestore";/**
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
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
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
 */let uo="10.12.5";/**
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
 */const Mi=new yh("@firebase/firestore");function Uo(){return Mi.logLevel}function G(t,...e){if(Mi.logLevel<=ae.DEBUG){const n=e.map(cg);Mi.debug(`Firestore (${uo}): ${t}`,...n)}}function ur(t,...e){if(Mi.logLevel<=ae.ERROR){const n=e.map(cg);Mi.error(`Firestore (${uo}): ${t}`,...n)}}function $s(t,...e){if(Mi.logLevel<=ae.WARN){const n=e.map(cg);Mi.warn(`Firestore (${uo}): ${t}`,...n)}}function cg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${uo}) INTERNAL ASSERTION FAILED: `+t;throw ur(e),new Error(e)}function ve(t,e){t||Z()}function te(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class tr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class AS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class _O{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yO{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new tr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new tr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new tr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new AS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new vt(e)}}class vO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new vO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class EO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class IO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.R=n.token,new EO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class NS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=TO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function Ws(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Xe(0,0))}static max(){return new ee(new Xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Wa{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Wa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends Wa{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const SO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends Wa{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return SO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new $(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new $(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ie.fromString(e))}static fromName(e){return new K(Ie.fromString(e).popFirst(5))}static empty(){return new K(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ie(e.slice()))}}function CO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new Xe(n+1,0):new Xe(n,r));return new Qr(i,K.empty(),e)}function xO(t){return new Qr(t.readTime,t.key,-1)}class Qr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Qr(ee.min(),K.empty(),-1)}static max(){return new Qr(ee.max(),K.empty(),-1)}}function RO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function _l(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==AO)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function kO(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function yl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class hg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}hg.oe=-1;function Ch(t){return t==null}function Ic(t){return t===0&&1/t==-1/0}function PO(t){return typeof t=="number"&&Number.isInteger(t)&&!Ic(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Aw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ki(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let He=class Ip{constructor(e,n){this.comparator=e,this.root=n||$r.EMPTY}insert(e,n){return new Ip(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$r.BLACK,null,null))}remove(e){return new Ip(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$r.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new du(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new du(this.root,e,this.comparator,!1)}getReverseIterator(){return new du(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new du(this.root,e,this.comparator,!0)}},du=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},$r=class $n{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??$n.RED,this.left=i??$n.EMPTY,this.right=s??$n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new $n(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return $n.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}};$r.EMPTY=null,$r.RED=!0,$r.BLACK=!1;$r.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,i,s){return this}insert(e,n,r){return new $r(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ut{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Nw(this.data.getIterator())}getIteratorFrom(e){return new Nw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class Nw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new ut(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ws(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class PS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new PS("Invalid base64 string: "+s):s}}(e);return new dt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const bO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yr(t){if(ve(!!t),typeof t=="string"){let e=0;const n=bO.exec(t);if(ve(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$e(t.seconds),nanos:$e(t.nanos)}}function $e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vi(t){return typeof t=="string"?dt.fromBase64String(t):dt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function dg(t){const e=t.mapValue.fields.__previous_value__;return xh(e)?dg(e):e}function qa(t){const e=Yr(t.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
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
 */class DO{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Ha{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ha("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ha&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Fi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?xh(t)?4:OO(t)?9007199254740991:10:Z()}function Dn(t,e){if(t===e)return!0;const n=Fi(t);if(n!==Fi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qa(t).isEqual(qa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Yr(i.timestampValue),a=Yr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Vi(i.bytesValue).isEqual(Vi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return $e(i.geoPointValue.latitude)===$e(s.geoPointValue.latitude)&&$e(i.geoPointValue.longitude)===$e(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return $e(i.integerValue)===$e(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=$e(i.doubleValue),a=$e(s.doubleValue);return o===a?Ic(o)===Ic(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ws(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Aw(o)!==Aw(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Dn(o[u],a[u])))return!1;return!0}(t,e);default:return Z()}}function Ga(t,e){return(t.values||[]).find(n=>Dn(n,e))!==void 0}function qs(t,e){if(t===e)return 0;const n=Fi(t),r=Fi(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=$e(s.integerValue||s.doubleValue),u=$e(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return kw(t.timestampValue,e.timestampValue);case 4:return kw(qa(t),qa(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Vi(s),u=Vi(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=de(a[c],u[c]);if(d!==0)return d}return de(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=de($e(s.latitude),$e(o.latitude));return a!==0?a:de($e(s.longitude),$e(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const d=qs(a[c],u[c]);if(d)return d}return de(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===fu.mapValue&&o===fu.mapValue)return 0;if(s===fu.mapValue)return 1;if(o===fu.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const p=de(u[f],d[f]);if(p!==0)return p;const y=qs(a[u[f]],c[d[f]]);if(y!==0)return y}return de(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Z()}}function kw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=Yr(t),r=Yr(e),i=de(n.seconds,r.seconds);return i!==0?i:de(n.nanos,r.nanos)}function Hs(t){return Tp(t)}function Tp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Yr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Vi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Tp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Tp(n.fields[o])}`;return i+"}"}(t.mapValue):Z()}function Tc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Sp(t){return!!t&&"integerValue"in t}function fg(t){return!!t&&"arrayValue"in t}function Pw(t){return!!t&&"nullValue"in t}function bw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mu(t){return!!t&&"mapValue"in t}function da(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ki(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=da(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=da(t.arrayValue.values[n]);return e}return Object.assign({},t)}function OO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Mu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=da(n)}setAll(e){let n=at.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=da(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Mu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Mu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ki(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Dt(da(this.value))}}function bS(t){const e=[];return Ki(t.fields,(n,r)=>{const i=new at([n]);if(Mu(r)){const s=bS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ht(e)}/**
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
 */class Et{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Et(e,0,ee.min(),ee.min(),ee.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,i){return new Et(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new Et(e,2,n,ee.min(),ee.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,ee.min(),ee.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Gs{constructor(e,n){this.position=e,this.inclusive=n}}function Dw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=qs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ow(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ka{constructor(e,n="asc"){this.field=e,this.dir=n}}function LO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class DS{}class qe extends DS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new VO(e,n,r):n==="array-contains"?new jO(e,r):n==="in"?new BO(e,r):n==="not-in"?new zO(e,r):n==="array-contains-any"?new $O(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new FO(e,r):new UO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(qs(n,this.value)):n!==null&&Fi(this.value)===Fi(n)&&this.matchesComparison(qs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class En extends DS{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new En(e,n)}matches(e){return OS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function OS(t){return t.op==="and"}function LS(t){return MO(t)&&OS(t)}function MO(t){for(const e of t.filters)if(e instanceof En)return!1;return!0}function Cp(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+Hs(t.value);if(LS(t))return t.filters.map(e=>Cp(e)).join(",");{const e=t.filters.map(n=>Cp(n)).join(",");return`${t.op}(${e})`}}function MS(t,e){return t instanceof qe?function(r,i){return i instanceof qe&&r.op===i.op&&r.field.isEqual(i.field)&&Dn(r.value,i.value)}(t,e):t instanceof En?function(r,i){return i instanceof En&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&MS(o,i.filters[a]),!0):!1}(t,e):void Z()}function VS(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${Hs(n.value)}`}(t):t instanceof En?function(n){return n.op.toString()+" {"+n.getFilters().map(VS).join(" ,")+"}"}(t):"Filter"}class VO extends qe{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class FO extends qe{constructor(e,n){super(e,"in",n),this.keys=FS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class UO extends qe{constructor(e,n){super(e,"not-in",n),this.keys=FS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function FS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class jO extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return fg(n)&&Ga(n.arrayValue,this.value)}}class BO extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ga(this.value.arrayValue,n)}}class zO extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ga(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ga(this.value.arrayValue,n)}}class $O extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!fg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ga(this.value.arrayValue,r))}}/**
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
 */class WO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Lw(t,e=null,n=[],r=[],i=null,s=null,o=null){return new WO(t,e,n,r,i,s,o)}function pg(t){const e=te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Cp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ch(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Hs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Hs(r)).join(",")),e.ue=n}return e.ue}function mg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!LO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!MS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ow(t.startAt,e.startAt)&&Ow(t.endAt,e.endAt)}function xp(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Qi{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function qO(t,e,n,r,i,s,o,a){return new Qi(t,e,n,r,i,s,o,a)}function Rh(t){return new Qi(t)}function Mw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function gg(t){return t.collectionGroup!==null}function ks(t){const e=te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ut(at.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ka(s,r))}),n.has(at.keyField().canonicalString())||e.ce.push(new Ka(at.keyField(),r))}return e.ce}function Pn(t){const e=te(t);return e.le||(e.le=HO(e,ks(t))),e.le}function HO(t,e){if(t.limitType==="F")return Lw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ka(i.field,s)});const n=t.endAt?new Gs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Gs(t.startAt.position,t.startAt.inclusive):null;return Lw(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Rp(t,e){const n=t.filters.concat([e]);return new Qi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Sc(t,e,n){return new Qi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ah(t,e){return mg(Pn(t),Pn(e))&&t.limitType===e.limitType}function US(t){return`${pg(Pn(t))}|lt:${t.limitType}`}function is(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>VS(i)).join(", ")}]`),Ch(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Hs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Hs(i)).join(",")),`Target(${r})`}(Pn(t))}; limitType=${t.limitType})`}function Nh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ks(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=Dw(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,ks(r),i)||r.endAt&&!function(o,a,u){const c=Dw(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,ks(r),i))}(t,e)}function GO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function jS(t){return(e,n)=>{let r=!1;for(const i of ks(t)){const s=KO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function KO(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?qs(u,c):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
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
 */class co{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ki(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return kS(this.inner)}size(){return this.innerSize}}/**
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
 */const QO=new He(K.comparator);function cr(){return QO}const BS=new He(K.comparator);function Zo(...t){let e=BS;for(const n of t)e=e.insert(n.key,n);return e}function zS(t){let e=BS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function wi(){return fa()}function $S(){return fa()}function fa(){return new co(t=>t.toString(),(t,e)=>t.isEqual(e))}const YO=new He(K.comparator),XO=new ut(K.comparator);function le(...t){let e=XO;for(const n of t)e=e.add(n);return e}const JO=new ut(de);function ZO(){return JO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ic(e)?"-0":e}}function qS(t){return{integerValue:""+t}}function e2(t,e){return PO(e)?qS(e):WS(t,e)}/**
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
 */class kh{constructor(){this._=void 0}}function t2(t,e,n){return t instanceof Cc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&xh(s)&&(s=dg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Qa?GS(t,e):t instanceof Ya?KS(t,e):function(i,s){const o=HS(i,s),a=Vw(o)+Vw(i.Pe);return Sp(o)&&Sp(i.Pe)?qS(a):WS(i.serializer,a)}(t,e)}function n2(t,e,n){return t instanceof Qa?GS(t,e):t instanceof Ya?KS(t,e):n}function HS(t,e){return t instanceof xc?function(r){return Sp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Cc extends kh{}class Qa extends kh{constructor(e){super(),this.elements=e}}function GS(t,e){const n=QS(e);for(const r of t.elements)n.some(i=>Dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ya extends kh{constructor(e){super(),this.elements=e}}function KS(t,e){let n=QS(e);for(const r of t.elements)n=n.filter(i=>!Dn(i,r));return{arrayValue:{values:n}}}class xc extends kh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Vw(t){return $e(t.integerValue||t.doubleValue)}function QS(t){return fg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function r2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Qa&&i instanceof Qa||r instanceof Ya&&i instanceof Ya?Ws(r.elements,i.elements,Dn):r instanceof xc&&i instanceof xc?Dn(r.Pe,i.Pe):r instanceof Cc&&i instanceof Cc}(t.transform,e.transform)}class i2{constructor(e,n){this.version=e,this.transformResults=n}}class _n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _n}static exists(e){return new _n(void 0,e)}static updateTime(e){return new _n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ph{}function YS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _g(t.key,_n.none()):new vl(t.key,t.data,_n.none());{const n=t.data,r=Dt.empty();let i=new ut(at.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ai(t.key,r,new Ht(i.toArray()),_n.none())}}function s2(t,e,n){t instanceof vl?function(i,s,o){const a=i.value.clone(),u=Uw(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ai?function(i,s,o){if(!Vu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Uw(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(XS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function pa(t,e,n,r){return t instanceof vl?function(s,o,a,u){if(!Vu(s.precondition,o))return a;const c=s.value.clone(),d=jw(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ai?function(s,o,a,u){if(!Vu(s.precondition,o))return a;const c=jw(s.fieldTransforms,u,o),d=o.data;return d.setAll(XS(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Vu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function o2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=HS(r.transform,i||null);s!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,s))}return n||null}function Fw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ws(r,i,(s,o)=>r2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class vl extends Ph{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ai extends Ph{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function XS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Uw(t,e,n){const r=new Map;ve(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,n2(o,a,n[i]))}return r}function jw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,t2(s,o,e))}return r}class _g extends Ph{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class a2 extends Ph{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class l2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&s2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=pa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=pa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=$S();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=YS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&Ws(this.mutations,e.mutations,(n,r)=>Fw(n,r))&&Ws(this.baseMutations,e.baseMutations,(n,r)=>Fw(n,r))}}class yg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ve(e.mutations.length===r.length);let i=function(){return YO}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new yg(e,n,r,i)}}/**
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
 */class u2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class c2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ze,ue;function h2(t){switch(t){default:return Z();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function JS(t){if(t===void 0)return ur("GRPC error has no .code"),V.UNKNOWN;switch(t){case ze.OK:return V.OK;case ze.CANCELLED:return V.CANCELLED;case ze.UNKNOWN:return V.UNKNOWN;case ze.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case ze.INTERNAL:return V.INTERNAL;case ze.UNAVAILABLE:return V.UNAVAILABLE;case ze.UNAUTHENTICATED:return V.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case ze.NOT_FOUND:return V.NOT_FOUND;case ze.ALREADY_EXISTS:return V.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return V.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case ze.ABORTED:return V.ABORTED;case ze.OUT_OF_RANGE:return V.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return V.UNIMPLEMENTED;case ze.DATA_LOSS:return V.DATA_LOSS;default:return Z()}}(ue=ze||(ze={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function d2(){return new TextEncoder}/**
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
 */const f2=new xi([4294967295,4294967295],0);function Bw(t){const e=d2().encode(t),n=new ES;return n.update(e),new Uint8Array(n.digest())}function zw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new xi([n,r],0),new xi([i,s],0)]}class vg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ea(`Invalid padding: ${n}`);if(r<0)throw new ea(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ea(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ea(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=xi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(xi.fromNumber(r)));return i.compare(f2)===1&&(i=new xi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Bw(e),[r,i]=zw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new vg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Bw(e),[r,i]=zw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ea extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class bh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,wl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new bh(ee.min(),i,new He(de),cr(),le())}}class wl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new wl(r,n,le(),le(),le())}}/**
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
 */class Fu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class ZS{constructor(e,n){this.targetId=e,this.me=n}}class eC{constructor(e,n,r=dt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class $w{constructor(){this.fe=0,this.ge=qw(),this.pe=dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=le(),n=le(),r=le();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Z()}}),new wl(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=qw()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class p2{constructor(e){this.Le=e,this.Be=new Map,this.ke=cr(),this.qe=Ww(),this.Qe=new He(de)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(xp(s))if(r===0){const o=new K(s.path);this.Ue(n,o,Et.newNoDocument(o,ee.min()))}else ve(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Vi(r).toUint8Array()}catch(u){if(u instanceof PS)return $s("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new vg(o,i,s)}catch(u){return $s(u instanceof ea?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&xp(a.target)){const u=new K(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Et.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=le();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new bh(e,n,this.Qe,this.ke,r);return this.ke=cr(),this.qe=Ww(),this.Qe=new He(de),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new $w,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ut(de),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new $w),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Ww(){return new He(K.comparator)}function qw(){return new He(K.comparator)}const m2={asc:"ASCENDING",desc:"DESCENDING"},g2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_2={and:"AND",or:"OR"};class y2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ap(t,e){return t.useProto3Json||Ch(e)?e:{value:e}}function Rc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function v2(t,e){return Rc(t,e.toTimestamp())}function bn(t){return ve(!!t),ee.fromTimestamp(function(n){const r=Yr(n);return new Xe(r.seconds,r.nanos)}(t))}function wg(t,e){return Np(t,e).canonicalString()}function Np(t,e){const n=function(i){return new Ie(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function nC(t){const e=Ie.fromString(t);return ve(aC(e)),e}function kp(t,e){return wg(t.databaseId,e.path)}function nf(t,e){const n=nC(e);if(n.get(1)!==t.databaseId.projectId)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(iC(n))}function rC(t,e){return wg(t.databaseId,e)}function w2(t){const e=nC(t);return e.length===4?Ie.emptyPath():iC(e)}function Pp(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function iC(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Hw(t,e,n){return{name:kp(t,e),fields:n.value.mapValue.fields}}function E2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ve(d===void 0||typeof d=="string"),dt.fromBase64String(d||"")):(ve(d===void 0||d instanceof Buffer||d instanceof Uint8Array),dt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?V.UNKNOWN:JS(c.code);return new $(d,c.message||"")}(o);n=new eC(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=nf(t,r.document.name),s=bn(r.document.updateTime),o=r.document.createTime?bn(r.document.createTime):ee.min(),a=new Dt({mapValue:{fields:r.document.fields}}),u=Et.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Fu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=nf(t,r.document),s=r.readTime?bn(r.readTime):ee.min(),o=Et.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Fu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=nf(t,r.document),s=r.removedTargetIds||[];n=new Fu([],s,i,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new c2(i,s),a=r.targetId;n=new ZS(a,o)}}return n}function I2(t,e){let n;if(e instanceof vl)n={update:Hw(t,e.key,e.value)};else if(e instanceof _g)n={delete:kp(t,e.key)};else if(e instanceof ai)n={update:Hw(t,e.key,e.data),updateMask:P2(e.fieldMask)};else{if(!(e instanceof a2))return Z();n={verify:kp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Cc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Qa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ya)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof xc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:v2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z()}(t,e.precondition)),n}function T2(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?bn(i.updateTime):bn(s);return o.isEqual(ee.min())&&(o=bn(s)),new i2(o,i.transformResults||[])}(n,e))):[]}function S2(t,e){return{documents:[rC(t,e.path)]}}function C2(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=rC(t,i);const s=function(c){if(c.length!==0)return oC(En.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(p){return{field:ss(p.field),direction:A2(p.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Ap(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function x2(t){let e=w2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ve(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const p=sC(f);return p instanceof En&&LS(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(I){return new Ka(os(I.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,Ch(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(f){const p=!!f.before,y=f.values||[];return new Gs(y,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,y=f.values||[];return new Gs(y,p)}(n.endAt)),qO(e,i,o,s,a,"F",u,c)}function R2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function sC(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=os(n.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=os(n.unaryFilter.field);return qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=os(n.unaryFilter.field);return qe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=os(n.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return qe.create(os(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return En.create(n.compositeFilter.filters.map(r=>sC(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function A2(t){return m2[t]}function N2(t){return g2[t]}function k2(t){return _2[t]}function ss(t){return{fieldPath:t.canonicalString()}}function os(t){return at.fromServerFormat(t.fieldPath)}function oC(t){return t instanceof qe?function(n){if(n.op==="=="){if(bw(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NAN"}};if(Pw(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(bw(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NOT_NAN"}};if(Pw(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ss(n.field),op:N2(n.op),value:n.value}}}(t):t instanceof En?function(n){const r=n.getFilters().map(i=>oC(i));return r.length===1?r[0]:{compositeFilter:{op:k2(n.op),filters:r}}}(t):Z()}function P2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function aC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Pr{constructor(e,n,r,i,s=ee.min(),o=ee.min(),a=dt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class b2{constructor(e){this.ct=e}}function D2(t){const e=x2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Sc(e,e.limit,"L"):e}/**
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
 */class O2{constructor(){this.an=new L2}addToCollectionParentIndex(e,n){return this.an.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Qr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Qr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class L2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ut(Ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ut(Ie.comparator)).toArray()}}/**
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
 */class Ks{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Ln(){return new Ks(0)}static Bn(){return new Ks(-1)}}/**
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
 */class M2{constructor(){this.changes=new co(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class V2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class F2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&pa(r.mutation,i,Ht.empty(),Xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const i=wi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Zo();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=wi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=cr();const o=fa(),a=function(){return fa()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof ai)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),pa(d.mutation,c,d.mutation.getFieldMask(),Xe.now())):o.set(c.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new V2(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=fa();let i=new He((o,a)=>o-a),s=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Ht.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(i.get(a.batchId)||le()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=$S();d.forEach(p=>{if(!s.has(p)){const y=YS(n.get(p),r.get(p));y!==null&&f.set(p,y),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):gg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(wi());let a=-1,u=s;return o.next(c=>U.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?U.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{u=u.insert(d,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,le())).next(d=>({batchId:a,changes:zS(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Zo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Zo();return this.indexManager.getCollectionParents(e,s).next(a=>U.forEach(a,u=>{const c=function(f,p){return new Qi(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Et.newInvalidDocument(d)))});let a=Zo();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&pa(d.mutation,c,Ht.empty(),Xe.now()),Nh(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return U.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:bn(i.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(i){return{name:i.name,query:D2(i.bundledQuery),readTime:bn(i.readTime)}}(n)),U.resolve()}}/**
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
 */class j2{constructor(){this.overlays=new He(K.comparator),this.Pr=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=wi();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=wi(),s=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new He((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=wi(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=wi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return U.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new u2(n,r));let s=this.Pr.get(n);s===void 0&&(s=le(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
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
 */class B2{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
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
 */class Eg{constructor(){this.Ir=new ut(Ze.Tr),this.Er=new ut(Ze.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Ir=this.Ir.add(r),this.Er=this.Er.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new Ze(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new K(new Ie([])),r=new Ze(n,e),i=new Ze(n,e+1),s=[];return this.Er.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Er=this.Er.delete(e)}pr(e){const n=new K(new Ie([])),r=new Ze(n,e),i=new Ze(n,e+1);let s=le();return this.Er.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ze(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.yr=n}static Tr(e,n){return K.comparator(e.key,n.key)||de(e.yr,n.yr)}static dr(e,n){return de(e.yr,n.yr)||K.comparator(e.key,n.key)}}/**
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
 */class z2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new ut(Ze.Tr)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new l2(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Sr=this.Sr.add(new Ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),i=new Ze(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const a=this.br(o.yr);s.push(a)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(de);return n.forEach(i=>{const s=new Ze(i,0),o=new Ze(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{r=r.add(a.yr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Ze(new K(s),0);let a=new ut(de);return this.Sr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.yr)),!0)},o),U.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ve(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return U.forEach(n.mutations,i=>{const s=new Ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new Ze(n,0),i=this.Sr.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class $2{constructor(e){this.Fr=e,this.docs=function(){return new He(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=cr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Et.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=cr();const o=n.path,a=new K(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||RO(xO(d),r)<=0||(i.has(d.key)||Nh(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Z()}Mr(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new W2(this)}getSize(e){return U.resolve(this.size)}}class W2 extends M2{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
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
 */class q2{constructor(e){this.persistence=e,this.Or=new co(n=>pg(n),mg),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new Eg,this.targetCount=0,this.Br=Ks.Ln()}forEachTarget(e,n){return this.Or.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),U.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new Ks(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Qn(n),U.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Lr.mr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Lr.Ar(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Lr.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Lr.mr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Lr.pr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Lr.containsKey(n))}}/**
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
 */class H2{constructor(e,n){this.kr={},this.overlays={},this.qr=new hg(0),this.Qr=!1,this.Qr=!0,this.Kr=new B2,this.referenceDelegate=e(this),this.$r=new q2(this),this.indexManager=new O2,this.remoteDocumentCache=function(i){return new $2(i)}(r=>this.referenceDelegate.Ur(r)),this.serializer=new b2(n),this.Wr=new U2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new j2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new z2(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const i=new G2(this.qr.next());return this.referenceDelegate.Gr(),r(i).next(s=>this.referenceDelegate.zr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}jr(e,n){return U.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class G2 extends NO{constructor(e){super(),this.currentSequenceNumber=e}}class Ig{constructor(e){this.persistence=e,this.Hr=new Eg,this.Jr=null}static Yr(e){return new Ig(e)}get Zr(){if(this.Jr)return this.Jr;throw Z()}addReference(e,n,r){return this.Hr.addReference(r,n),this.Zr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Hr.removeReference(r,n),this.Zr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Zr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Hr.mr(n.targetId).forEach(i=>this.Zr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Zr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Gr(){this.Jr=new Set}zr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Zr,r=>{const i=K.fromPath(r);return this.Xr(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.Jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Xr(e,n).next(r=>{r?this.Zr.delete(n.toString()):this.Zr.add(n.toString())})}Ur(e){return 0}Xr(e,n){return U.or([()=>U.resolve(this.Hr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.jr(e,n)])}}/**
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
 */class Tg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ki=r,this.$i=i}static Ui(e,n){let r=le(),i=le();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Tg(e,n.fromCache,r,i)}}/**
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
 */class K2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Q2{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return Mk()?8:kO(ht())>0?6:4}()}initialize(e,n){this.Hi=e,this.indexManager=n,this.Wi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Yi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new K2;return this.Zi(e,n,o).next(a=>{if(s.result=a,this.Gi)return this.Xi(e,n,o,a.size)})}).next(()=>s.result)}Xi(e,n,r,i){return r.documentReadCount<this.zi?(Uo()<=ae.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",is(n),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),U.resolve()):(Uo()<=ae.DEBUG&&G("QueryEngine","Query:",is(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ji*i?(Uo()<=ae.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",is(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pn(n))):U.resolve())}Ji(e,n){if(Mw(n))return U.resolve(null);let r=Pn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Sc(n,null,"F"),r=Pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=le(...s);return this.Hi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.es(n,a);return this.ts(n,c,o,u.readTime)?this.Ji(e,Sc(n,null,"F")):this.ns(e,c,n,u)}))})))}Yi(e,n,r,i){return Mw(n)||i.isEqual(ee.min())?U.resolve(null):this.Hi.getDocuments(e,r).next(s=>{const o=this.es(n,s);return this.ts(n,o,r,i)?U.resolve(null):(Uo()<=ae.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),is(n)),this.ns(e,o,n,CO(i,-1)).next(a=>a))})}es(e,n){let r=new ut(jS(e));return n.forEach((i,s)=>{Nh(e,s)&&(r=r.add(s))}),r}ts(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Zi(e,n,r){return Uo()<=ae.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",is(n)),this.Hi.getDocumentsMatchingQuery(e,n,Qr.min(),r)}ns(e,n,r,i){return this.Hi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e,n,r,i){this.persistence=e,this.rs=n,this.serializer=i,this.ss=new He(de),this.os=new co(s=>pg(s),mg),this._s=new Map,this.us=e.getRemoteDocumentCache(),this.$r=e.getTargetCache(),this.Wr=e.getBundleCache(),this.cs(r)}cs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new F2(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ss))}}function X2(t,e,n,r){return new Y2(t,e,n,r)}async function lC(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.cs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=le();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({ls:c,removedBatchIds:o,addedBatchIds:a}))})})}function J2(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.us.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,p=f.keys();let y=U.resolve();return p.forEach(I=>{y=y.next(()=>d.getEntry(u,I)).next(A=>{const N=c.docVersions.get(I);ve(N!==null),A.version.compareTo(N)<0&&(f.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),d.addEntry(A)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=le();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function uC(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.$r.getLastRemoteSnapshotVersion(n))}function Z2(t,e){const n=te(t),r=e.snapshotVersion;let i=n.ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.us.newChangeBuffer({trackRemovals:!0});i=n.ss;const a=[];e.targetChanges.forEach((d,f)=>{const p=i.get(f);if(!p)return;a.push(n.$r.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.$r.addMatchingKeys(s,d.addedDocuments,f)));let y=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(dt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),i=i.insert(f,y),function(A,N,T){return A.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(p,y,d)&&a.push(n.$r.updateTargetData(s,y))});let u=cr(),c=le();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(eL(s,o,e.documentUpdates).next(d=>{u=d.hs,c=d.Ps})),!r.isEqual(ee.min())){const d=n.$r.getLastRemoteSnapshotVersion(s).next(f=>n.$r.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return U.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ss=i,s))}function eL(t,e,n){let r=le(),i=le();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=cr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):G("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{hs:o,Ps:i}})}function tL(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function nL(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.$r.getTargetData(r,e).next(s=>s?(i=s,U.resolve(i)):n.$r.allocateTargetId(r).next(o=>(i=new Pr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.$r.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ss.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ss=n.ss.insert(r.targetId,r),n.os.set(e,r.targetId)),r})}async function bp(t,e,n){const r=te(t),i=r.ss.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!yl(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ss=r.ss.remove(e),r.os.delete(i.target)}function Gw(t,e,n){const r=te(t);let i=ee.min(),s=le();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=te(u),p=f.os.get(d);return p!==void 0?U.resolve(f.ss.get(p)):f.$r.getTargetData(c,d)}(r,o,Pn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.$r.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.rs.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:le())).next(a=>(rL(r,GO(e),a),{documents:a,Is:s})))}function rL(t,e,n){let r=t._s.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t._s.set(e,r)}class Kw{constructor(){this.activeTargetIds=ZO()}Vs(e){this.activeTargetIds=this.activeTargetIds.add(e)}fs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Rs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iL{constructor(){this.io=new Kw,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.io.Vs(e),this.so[e]||"not-current"}updateQueryState(e,n,r){this.so[e]=n}removeLocalQueryTarget(e){this.io.fs(e)}isLocalQueryTarget(e){return this.io.activeTargetIds.has(e)}clearQueryState(e){delete this.so[e]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(e){return this.io.activeTargetIds.has(e)}start(){return this.io=new Kw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class sL{oo(e){}shutdown(){}}/**
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
 */class Qw{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(e){this.lo.push(e)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.lo)e(0)}co(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.lo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let pu=null;function rf(){return pu===null?pu=function(){return 268435456+Math.round(2147483648*Math.random())}():pu++,"0x"+pu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class aL{constructor(e){this.Po=e.Po,this.Io=e.Io}To(e){this.Eo=e}Ao(e){this.Ro=e}Vo(e){this.mo=e}onMessage(e){this.fo=e}close(){this.Io()}send(e){this.Po(e)}po(){this.Eo()}yo(){this.Ro()}wo(e){this.mo(e)}So(e){this.fo(e)}}/**
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
 */const yt="WebChannelConnection";class lL extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.bo=r+"://"+n.host,this.Do=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get vo(){return!1}Fo(n,r,i,s,o){const a=rf(),u=this.Mo(n,r.toUriEncodedString());G("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(c,s,o),this.Oo(n,u,c,i).then(d=>(G("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw $s("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}No(n,r,i,s,o,a){return this.Fo(n,r,i,s,o)}xo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+uo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Mo(n,r){const i=oL[n];return`${this.bo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Oo(e,n,r,i){const s=rf();return new Promise((o,a)=>{const u=new IS;u.setWithCredentials(!0),u.listenOnce(SS.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Lu.NO_ERROR:const d=u.getResponseJson();G(yt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Lu.TIMEOUT:G(yt,`RPC '${e}' ${s} timed out`),a(new $(V.DEADLINE_EXCEEDED,"Request time out"));break;case Lu.HTTP_ERROR:const f=u.getStatus();if(G(yt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const y=p==null?void 0:p.error;if(y&&y.status&&y.message){const I=function(N){const T=N.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(T)>=0?T:V.UNKNOWN}(y.status);a(new $(I,y.message))}else a(new $(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new $(V.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{G(yt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);G(yt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Lo(e,n,r){const i=rf(),s=[this.bo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=RS(),a=xS(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new TS({})),this.xo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");G(yt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let p=!1,y=!1;const I=new aL({Po:N=>{y?G(yt,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(p||(G(yt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),G(yt,`RPC '${e}' stream ${i} sending:`,N),f.send(N))},Io:()=>f.close()}),A=(N,T,w)=>{N.listen(T,x=>{try{w(x)}catch(D){setTimeout(()=>{throw D},0)}})};return A(f,Jo.EventType.OPEN,()=>{y||(G(yt,`RPC '${e}' stream ${i} transport opened.`),I.po())}),A(f,Jo.EventType.CLOSE,()=>{y||(y=!0,G(yt,`RPC '${e}' stream ${i} transport closed`),I.wo())}),A(f,Jo.EventType.ERROR,N=>{y||(y=!0,$s(yt,`RPC '${e}' stream ${i} transport errored:`,N),I.wo(new $(V.UNAVAILABLE,"The operation could not be completed")))}),A(f,Jo.EventType.MESSAGE,N=>{var T;if(!y){const w=N.data[0];ve(!!w);const x=w,D=x.error||((T=x[0])===null||T===void 0?void 0:T.error);if(D){G(yt,`RPC '${e}' stream ${i} received error:`,D);const L=D.status;let F=function(E){const C=ze[E];if(C!==void 0)return JS(C)}(L),S=D.message;F===void 0&&(F=V.INTERNAL,S="Unknown error status: "+L+" with message "+D.message),y=!0,I.wo(new $(F,S)),f.close()}else G(yt,`RPC '${e}' stream ${i} received:`,w),I.So(w)}}),A(a,CS.STAT_EVENT,N=>{N.stat===Ep.PROXY?G(yt,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===Ep.NOPROXY&&G(yt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.yo()},0),I}}function sf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(t){return new y2(t,!0)}/**
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
 */class cC{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ai=e,this.timerId=n,this.Bo=r,this.ko=i,this.qo=s,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(e){this.cancel();const n=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),i=Math.max(0,n-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Qo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,i,()=>(this.$o=Date.now(),e())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
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
 */class hC{constructor(e,n,r,i,s,o,a,u){this.ai=e,this.jo=r,this.Ho=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new cC(e,n)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(e){this.a_(),this.stream.send(e)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(e,n){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,e!==4?this.e_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(ur(n.toString()),ur("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Vo(n)}c_(){}auth(){this.state=1;const e=this.l_(this.Jo),n=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Jo===n&&this.h_(r,i)},r=>{e(()=>{const i=new $(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.P_(i)})})}h_(e,n){const r=this.l_(this.Jo);this.stream=this.I_(e,n),this.stream.To(()=>{r(()=>this.listener.To())}),this.stream.Ao(()=>{r(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(i=>{r(()=>this.P_(i))}),this.stream.onMessage(i=>{r(()=>++this.Xo==1?this.T_(i):this.onNext(i))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}l_(e){return n=>{this.ai.enqueueAndForget(()=>this.Jo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uL extends hC{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}I_(e,n){return this.connection.Lo("Listen",e,n)}T_(e){return this.onNext(e)}onNext(e){this.e_.reset();const n=E2(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?bn(o.readTime):ee.min()}(e);return this.listener.E_(n,r)}d_(e){const n={};n.database=Pp(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=xp(u)?{documents:S2(s,u)}:{query:C2(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=tC(s,o.resumeToken);const c=Ap(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=Rc(s,o.snapshotVersion.toTimestamp());const c=Ap(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=R2(this.serializer,e);r&&(n.labels=r),this.__(n)}A_(e){const n={};n.database=Pp(this.serializer),n.removeTarget=e,this.__(n)}}class cL extends hC{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get R_(){return this.Xo>0}start(){this.lastStreamToken=void 0,super.start()}c_(){this.R_&&this.V_([])}I_(e,n){return this.connection.Lo("Write",e,n)}T_(e){return ve(!!e.streamToken),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0),this.listener.m_()}onNext(e){ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.e_.reset();const n=T2(e.writeResults,e.commitTime),r=bn(e.commitTime);return this.listener.f_(r,n)}g_(){const e={};e.database=Pp(this.serializer),this.__(e)}V_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>I2(this.serializer,r))};this.__(n)}}/**
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
 */class hL extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.p_=!1}y_(){if(this.p_)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(e,n,r,i){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,Np(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(V.UNKNOWN,s.toString())})}No(e,n,r,i,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.No(e,Np(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(V.UNKNOWN,o.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class dL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(e){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.M_(),this.w_=0,e==="Online"&&(this.b_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}v_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(ur(n),this.b_=!1):G("OnlineStateTracker",n)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
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
 */class fL{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=s,this.B_.oo(o=>{r.enqueueAndForget(async()=>{Yi(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=te(u);c.N_.add(4),await El(c),c.k_.set("Unknown"),c.N_.delete(4),await Oh(c)}(this))})}),this.k_=new dL(r,i)}}async function Oh(t){if(Yi(t))for(const e of t.L_)await e(!0)}async function El(t){for(const e of t.L_)await e(!1)}function dC(t,e){const n=te(t);n.O_.has(e.targetId)||(n.O_.set(e.targetId,e),Rg(n)?xg(n):ho(n).n_()&&Cg(n,e))}function Sg(t,e){const n=te(t),r=ho(n);n.O_.delete(e),r.n_()&&fC(n,e),n.O_.size===0&&(r.n_()?r.s_():Yi(n)&&n.k_.set("Unknown"))}function Cg(t,e){if(t.q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ho(t).d_(e)}function fC(t,e){t.q_.xe(e),ho(t).A_(e)}function xg(t){t.q_=new p2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.O_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ho(t).start(),t.k_.D_()}function Rg(t){return Yi(t)&&!ho(t).t_()&&t.O_.size>0}function Yi(t){return te(t).N_.size===0}function pC(t){t.q_=void 0}async function pL(t){t.k_.set("Online")}async function mL(t){t.O_.forEach((e,n)=>{Cg(t,e)})}async function gL(t,e){pC(t),Rg(t)?(t.k_.F_(e),xg(t)):t.k_.set("Unknown")}async function _L(t,e,n){if(t.k_.set("Online"),e instanceof eC&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.O_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.O_.delete(a),i.q_.removeTarget(a))}(t,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ac(t,r)}else if(e instanceof Fu?t.q_.Ke(e):e instanceof ZS?t.q_.He(e):t.q_.We(e),!n.isEqual(ee.min()))try{const r=await uC(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.O_.get(c);d&&s.O_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.O_.get(u);if(!d)return;s.O_.set(u,d.withResumeToken(dt.EMPTY_BYTE_STRING,d.snapshotVersion)),fC(s,u);const f=new Pr(d.target,u,c,d.sequenceNumber);Cg(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await Ac(t,r)}}async function Ac(t,e,n){if(!yl(e))throw e;t.N_.add(1),await El(t),t.k_.set("Offline"),n||(n=()=>uC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.N_.delete(1),await Oh(t)})}function mC(t,e){return e().catch(n=>Ac(t,n,e))}async function Lh(t){const e=te(t),n=Xr(e);let r=e.x_.length>0?e.x_[e.x_.length-1].batchId:-1;for(;yL(e);)try{const i=await tL(e.localStore,r);if(i===null){e.x_.length===0&&n.s_();break}r=i.batchId,vL(e,i)}catch(i){await Ac(e,i)}gC(e)&&_C(e)}function yL(t){return Yi(t)&&t.x_.length<10}function vL(t,e){t.x_.push(e);const n=Xr(t);n.n_()&&n.R_&&n.V_(e.mutations)}function gC(t){return Yi(t)&&!Xr(t).t_()&&t.x_.length>0}function _C(t){Xr(t).start()}async function wL(t){Xr(t).g_()}async function EL(t){const e=Xr(t);for(const n of t.x_)e.V_(n.mutations)}async function IL(t,e,n){const r=t.x_.shift(),i=yg.from(r,e,n);await mC(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Lh(t)}async function TL(t,e){e&&Xr(t).R_&&await async function(r,i){if(function(o){return h2(o)&&o!==V.ABORTED}(i.code)){const s=r.x_.shift();Xr(r).i_(),await mC(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Lh(r)}}(t,e),gC(t)&&_C(t)}async function Yw(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=Yi(n);n.N_.add(3),await El(n),r&&n.k_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.N_.delete(3),await Oh(n)}async function SL(t,e){const n=te(t);e?(n.N_.delete(2),await Oh(n)):e||(n.N_.add(2),await El(n),n.k_.set("Unknown"))}function ho(t){return t.Q_||(t.Q_=function(n,r,i){const s=te(n);return s.y_(),new uL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{To:pL.bind(null,t),Ao:mL.bind(null,t),Vo:gL.bind(null,t),E_:_L.bind(null,t)}),t.L_.push(async e=>{e?(t.Q_.i_(),Rg(t)?xg(t):t.k_.set("Unknown")):(await t.Q_.stop(),pC(t))})),t.Q_}function Xr(t){return t.K_||(t.K_=function(n,r,i){const s=te(n);return s.y_(),new cL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{To:()=>Promise.resolve(),Ao:wL.bind(null,t),Vo:TL.bind(null,t),m_:EL.bind(null,t),f_:IL.bind(null,t)}),t.L_.push(async e=>{e?(t.K_.i_(),await Lh(t)):(await t.K_.stop(),t.x_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.x_.length} pending writes`),t.x_=[]))})),t.K_}/**
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
 */class Ag{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Ag(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ng(t,e){if(ur("AsyncQueue",`${e}: ${t}`),yl(t))return new $(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ps{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Zo(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new Ps(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ps)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ps;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Xw{constructor(){this.U_=new He(K.comparator)}track(e){const n=e.doc.key,r=this.U_.get(n);r?e.type!==0&&r.type===3?this.U_=this.U_.insert(n,e):e.type===3&&r.type!==1?this.U_=this.U_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.U_=this.U_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.U_=this.U_.remove(n):e.type===1&&r.type===2?this.U_=this.U_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):Z():this.U_=this.U_.insert(n,e)}W_(){const e=[];return this.U_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Qs{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Qs(e,n,Ps.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ah(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class CL{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(e=>e.H_())}}class xL{constructor(){this.queries=Jw(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=Jw(),s.forEach((o,a)=>{for(const u of a.z_)u.onError(r)})})(this,new $(V.ABORTED,"Firestore shutting down"))}}function Jw(){return new co(t=>US(t),Ah)}async function kg(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.j_()&&e.H_()&&(r=2):(s=new CL,r=e.H_()?0:1);try{switch(r){case 0:s.G_=await n.onListen(i,!0);break;case 1:s.G_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Ng(o,`Initialization of query '${is(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.z_.push(e),e.Y_(n.onlineState),s.G_&&e.Z_(s.G_)&&bg(n)}async function Pg(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.z_.indexOf(e);o>=0&&(s.z_.splice(o,1),s.z_.length===0?i=e.H_()?0:1:!s.j_()&&e.H_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function RL(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.z_)a.Z_(i)&&(r=!0);o.G_=i}}r&&bg(n)}function AL(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.z_)s.onError(n);r.queries.delete(e)}function bg(t){t.J_.forEach(e=>{e.next()})}var Dp,Zw;(Zw=Dp||(Dp={})).X_="default",Zw.Cache="cache";class Dg{constructor(e,n,r){this.query=e,this.ea=n,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=r||{}}Z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Qs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ta?this.ra(e)&&(this.ea.next(e),n=!0):this.ia(e,this.onlineState)&&(this.sa(e),n=!0),this.na=e,n}onError(e){this.ea.error(e)}Y_(e){this.onlineState=e;let n=!1;return this.na&&!this.ta&&this.ia(this.na,e)&&(this.sa(this.na),n=!0),n}ia(e,n){if(!e.fromCache||!this.H_())return!0;const r=n!=="Offline";return(!this.options.oa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ra(e){if(e.docChanges.length>0)return!0;const n=this.na&&this.na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}sa(e){e=Qs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ta=!0,this.ea.next(e)}H_(){return this.options.source!==Dp.Cache}}/**
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
 */class yC{constructor(e){this.key=e}}class vC{constructor(e){this.key=e}}class NL{constructor(e,n){this.query=e,this.Ia=n,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=le(),this.mutatedKeys=le(),this.da=jS(e),this.Aa=new Ps(this.da)}get Ra(){return this.Ia}Va(e,n){const r=n?n.ma:new Xw,i=n?n.Aa:this.Aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const p=i.get(d),y=Nh(this.query,f)?f:null,I=!!p&&this.mutatedKeys.has(p.key),A=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let N=!1;p&&y?p.data.isEqual(y.data)?I!==A&&(r.track({type:3,doc:y}),N=!0):this.fa(p,y)||(r.track({type:2,doc:y}),N=!0,(u&&this.da(y,u)>0||c&&this.da(y,c)<0)&&(a=!0)):!p&&y?(r.track({type:0,doc:y}),N=!0):p&&!y&&(r.track({type:1,doc:p}),N=!0,(u||c)&&(a=!0)),N&&(y?(o=o.add(y),s=A?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Aa:o,ma:r,ts:a,mutatedKeys:s}}fa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Aa;this.Aa=e.Aa,this.mutatedKeys=e.mutatedKeys;const o=e.ma.W_();o.sort((d,f)=>function(y,I){const A=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return A(y)-A(I)}(d.type,f.type)||this.da(d.doc,f.doc)),this.ga(r),i=i!=null&&i;const a=n&&!i?this.pa():[],u=this.Ea.size===0&&this.current&&!i?1:0,c=u!==this.Ta;return this.Ta=u,o.length!==0||c?{snapshot:new Qs(this.query,e.Aa,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ya:a}:{ya:a}}Y_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new Xw,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(e){return!this.Ia.has(e)&&!!this.Aa.has(e)&&!this.Aa.get(e).hasLocalMutations}ga(e){e&&(e.addedDocuments.forEach(n=>this.Ia=this.Ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ia=this.Ia.delete(n)),this.current=e.current)}pa(){if(!this.current)return[];const e=this.Ea;this.Ea=le(),this.Aa.forEach(r=>{this.wa(r.key)&&(this.Ea=this.Ea.add(r.key))});const n=[];return e.forEach(r=>{this.Ea.has(r)||n.push(new vC(r))}),this.Ea.forEach(r=>{e.has(r)||n.push(new yC(r))}),n}Sa(e){this.Ia=e.Is,this.Ea=le();const n=this.Va(e.documents);return this.applyChanges(n,!0)}ba(){return Qs.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class kL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class PL{constructor(e){this.key=e,this.Da=!1}}class bL{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.va=new co(a=>US(a),Ah),this.Fa=new Map,this.Ma=new Set,this.xa=new He(K.comparator),this.Oa=new Map,this.Na=new Eg,this.La={},this.Ba=new Map,this.ka=Ks.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function DL(t,e,n=!0){const r=CC(t);let i;const s=r.va.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ba()):i=await wC(r,e,n,!0),i}async function OL(t,e){const n=CC(t);await wC(n,e,!0,!1)}async function wC(t,e,n,r){const i=await nL(t.localStore,Pn(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await LL(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&dC(t.remoteStore,i),a}async function LL(t,e,n,r,i){t.Qa=(f,p,y)=>async function(A,N,T,w){let x=N.view.Va(T);x.ts&&(x=await Gw(A.localStore,N.query,!1).then(({documents:S})=>N.view.Va(S,x)));const D=w&&w.targetChanges.get(N.targetId),L=w&&w.targetMismatches.get(N.targetId)!=null,F=N.view.applyChanges(x,A.isPrimaryClient,D,L);return t0(A,N.targetId,F.ya),F.snapshot}(t,f,p,y);const s=await Gw(t.localStore,e,!0),o=new NL(e,s.Is),a=o.Va(s.documents),u=wl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);t0(t,n,c.ya);const d=new kL(e,n,o);return t.va.set(e,d),t.Fa.has(n)?t.Fa.get(n).push(e):t.Fa.set(n,[e]),c.snapshot}async function ML(t,e,n){const r=te(t),i=r.va.get(e),s=r.Fa.get(i.targetId);if(s.length>1)return r.Fa.set(i.targetId,s.filter(o=>!Ah(o,e))),void r.va.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await bp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Sg(r.remoteStore,i.targetId),Op(r,i.targetId)}).catch(_l)):(Op(r,i.targetId),await bp(r.localStore,i.targetId,!0))}async function VL(t,e){const n=te(t),r=n.va.get(e),i=n.Fa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Sg(n.remoteStore,r.targetId))}async function FL(t,e,n){const r=qL(t);try{const i=await function(o,a){const u=te(o),c=Xe.now(),d=a.reduce((y,I)=>y.add(I.key),le());let f,p;return u.persistence.runTransaction("Locally write mutations","readwrite",y=>{let I=cr(),A=le();return u.us.getEntries(y,d).next(N=>{I=N,I.forEach((T,w)=>{w.isValidDocument()||(A=A.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(y,I)).next(N=>{f=N;const T=[];for(const w of a){const x=o2(w,f.get(w.key).overlayedDocument);x!=null&&T.push(new ai(w.key,x,bS(x.value.mapValue),_n.exists(!0)))}return u.mutationQueue.addMutationBatch(y,c,T,a)}).next(N=>{p=N;const T=N.applyToLocalDocumentSet(f,A);return u.documentOverlayCache.saveOverlays(y,N.batchId,T)})}).then(()=>({batchId:p.batchId,changes:zS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.La[o.currentUser.toKey()];c||(c=new He(de)),c=c.insert(a,u),o.La[o.currentUser.toKey()]=c}(r,i.batchId,n),await Il(r,i.changes),await Lh(r.remoteStore)}catch(i){const s=Ng(i,"Failed to persist write");n.reject(s)}}async function EC(t,e){const n=te(t);try{const r=await Z2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Oa.get(s);o&&(ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Da=!0:i.modifiedDocuments.size>0?ve(o.Da):i.removedDocuments.size>0&&(ve(o.Da),o.Da=!1))}),await Il(n,r,e)}catch(r){await _l(r)}}function e0(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.va.forEach((s,o)=>{const a=o.view.Y_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=te(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const p of f.z_)p.Y_(a)&&(c=!0)}),c&&bg(u)}(r.eventManager,e),i.length&&r.Ca.E_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function UL(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Oa.get(e),s=i&&i.key;if(s){let o=new He(K.comparator);o=o.insert(s,Et.newNoDocument(s,ee.min()));const a=le().add(s),u=new bh(ee.min(),new Map,new He(de),o,a);await EC(r,u),r.xa=r.xa.remove(s),r.Oa.delete(e),Og(r)}else await bp(r.localStore,e,!1).then(()=>Op(r,e,n)).catch(_l)}async function jL(t,e){const n=te(t),r=e.batch.batchId;try{const i=await J2(n.localStore,e);TC(n,r,null),IC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Il(n,i)}catch(i){await _l(i)}}async function BL(t,e,n){const r=te(t);try{const i=await function(o,a){const u=te(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(ve(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);TC(r,e,n),IC(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Il(r,i)}catch(i){await _l(i)}}function IC(t,e){(t.Ba.get(e)||[]).forEach(n=>{n.resolve()}),t.Ba.delete(e)}function TC(t,e,n){const r=te(t);let i=r.La[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.La[r.currentUser.toKey()]=i}}function Op(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fa.get(e))t.va.delete(r),n&&t.Ca.Ka(r,n);t.Fa.delete(e),t.isPrimaryClient&&t.Na.mr(e).forEach(r=>{t.Na.containsKey(r)||SC(t,r)})}function SC(t,e){t.Ma.delete(e.path.canonicalString());const n=t.xa.get(e);n!==null&&(Sg(t.remoteStore,n),t.xa=t.xa.remove(e),t.Oa.delete(n),Og(t))}function t0(t,e,n){for(const r of n)r instanceof yC?(t.Na.addReference(r.key,e),zL(t,r)):r instanceof vC?(G("SyncEngine","Document no longer in limbo: "+r.key),t.Na.removeReference(r.key,e),t.Na.containsKey(r.key)||SC(t,r.key)):Z()}function zL(t,e){const n=e.key,r=n.path.canonicalString();t.xa.get(n)||t.Ma.has(r)||(G("SyncEngine","New document in limbo: "+n),t.Ma.add(r),Og(t))}function Og(t){for(;t.Ma.size>0&&t.xa.size<t.maxConcurrentLimboResolutions;){const e=t.Ma.values().next().value;t.Ma.delete(e);const n=new K(Ie.fromString(e)),r=t.ka.next();t.Oa.set(r,new PL(n)),t.xa=t.xa.insert(n,r),dC(t.remoteStore,new Pr(Pn(Rh(n.path)),r,"TargetPurposeLimboResolution",hg.oe))}}async function Il(t,e,n){const r=te(t),i=[],s=[],o=[];r.va.isEmpty()||(r.va.forEach((a,u)=>{o.push(r.Qa(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Tg.Ui(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.E_(i),await async function(u,c){const d=te(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>U.forEach(c,p=>U.forEach(p.Ki,y=>d.persistence.referenceDelegate.addReference(f,p.targetId,y)).next(()=>U.forEach(p.$i,y=>d.persistence.referenceDelegate.removeReference(f,p.targetId,y)))))}catch(f){if(!yl(f))throw f;G("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const y=d.ss.get(p),I=y.snapshotVersion,A=y.withLastLimboFreeSnapshotVersion(I);d.ss=d.ss.insert(p,A)}}}(r.localStore,s))}async function $L(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await lC(n.localStore,e);n.currentUser=e,function(s,o){s.Ba.forEach(a=>{a.forEach(u=>{u.reject(new $(V.CANCELLED,o))})}),s.Ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Il(n,r.ls)}}function WL(t,e){const n=te(t),r=n.Oa.get(e);if(r&&r.Da)return le().add(r.key);{let i=le();const s=n.Fa.get(e);if(!s)return i;for(const o of s){const a=n.va.get(o);i=i.unionWith(a.view.Ra)}return i}}function CC(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=EC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UL.bind(null,e),e.Ca.E_=RL.bind(null,e.eventManager),e.Ca.Ka=AL.bind(null,e.eventManager),e}function qL(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=BL.bind(null,e),e}class n0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Dh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return X2(this.persistence,new Q2,e.initialUser,this.serializer)}createPersistence(e){return new H2(Ig.Yr,this.serializer)}createSharedClientState(e){return new iL}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class HL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>e0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$L.bind(null,this.syncEngine),await SL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new xL}()}createDatastore(e){const n=Dh(e.databaseInfo.databaseId),r=function(s){return new lL(s)}(e.databaseInfo);return function(s,o,a,u){return new hL(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new fL(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>e0(this.syncEngine,n,0),function(){return Qw.D()?new Qw:new sL}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const f=new bL(i,s,o,a,u,c);return d&&(f.qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);G("RemoteStore","RemoteStore shutting down."),s.N_.add(5),await El(s),s.B_.shutdown(),s.k_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Lg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Wa(this.observer.next,e)}error(e){this.observer.error?this.Wa(this.observer.error,e):ur("Uncaught Error in snapshot listener:",e.toString())}Ga(){this.muted=!0}Wa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class GL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=vt.UNAUTHENTICATED,this.clientId=NS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{G("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(G("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ng(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function of(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await lC(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function r0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await QL(t);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Yw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Yw(e.remoteStore,i)),t._onlineComponents=e}function KL(t){return t.name==="FirebaseError"?t.code===V.FAILED_PRECONDITION||t.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function QL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await of(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!KL(n))throw n;$s("Error using user provided cache. Falling back to memory cache: "+n),await of(t,new n0)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await of(t,new n0);return t._offlineComponents}async function xC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await r0(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await r0(t,new HL))),t._onlineComponents}function YL(t){return xC(t).then(e=>e.syncEngine)}async function Nc(t){const e=await xC(t),n=e.eventManager;return n.onListen=DL.bind(null,e.syncEngine),n.onUnlisten=ML.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=OL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=VL.bind(null,e.syncEngine),n}function XL(t,e,n={}){const r=new tr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new Lg({next:p=>{o.enqueueAndForget(()=>Pg(s,f));const y=p.docs.has(a);!y&&p.fromCache?c.reject(new $(V.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&p.fromCache&&u&&u.source==="server"?c.reject(new $(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new Dg(Rh(a.path),d,{includeMetadataChanges:!0,oa:!0});return kg(s,f)}(await Nc(t),t.asyncQueue,e,n,r)),r.promise}function JL(t,e,n={}){const r=new tr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new Lg({next:p=>{o.enqueueAndForget(()=>Pg(s,f)),p.fromCache&&u.source==="server"?c.reject(new $(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new Dg(a,d,{includeMetadataChanges:!0,oa:!0});return kg(s,f)}(await Nc(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function RC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0=new Map;/**
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
 */function AC(t,e,n){if(!n)throw new $(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ZL(t,e,n,r){if(e===!0&&r===!0)throw new $(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function s0(t){if(!K.isDocumentKey(t))throw new $(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function o0(t){if(K.isDocumentKey(t))throw new $(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Mh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function rn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mh(t);throw new $(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function eM(t,e){if(e<=0)throw new $(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ZL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=RC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new a0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new a0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new gO;switch(r.type){case"firstParty":return new wO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=i0.get(n);r&&(G("ComponentProvider","Removing Datastore"),i0.delete(n),r.terminate())}(this),Promise.resolve()}}function tM(t,e,n,r={}){var i;const s=(t=rn(t,Vh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&$s("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=vt.MOCK_USER;else{a=Ym(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new $(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new vt(c)}t._authCredentials=new _O(new AS(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mn(this.firestore,e,this._query)}}class Nt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}}class Wr extends Mn{constructor(e,n,r){super(e,n,Rh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new K(e))}withConverter(e){return new Wr(this.firestore,e,this._path)}}function jt(t,e,...n){if(t=me(t),AC("collection","path",e),t instanceof Vh){const r=Ie.fromString(e,...n);return o0(r),new Wr(t,null,r)}{if(!(t instanceof Nt||t instanceof Wr))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return o0(r),new Wr(t.firestore,null,r)}}function On(t,e,...n){if(t=me(t),arguments.length===1&&(e=NS.newId()),AC("doc","path",e),t instanceof Vh){const r=Ie.fromString(e,...n);return s0(r),new Nt(t,null,new K(r))}{if(!(t instanceof Nt||t instanceof Wr))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return s0(r),new Nt(t.firestore,t instanceof Wr?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new cC(this,"async_queue_retry"),this.Tu=()=>{const n=sf();n&&G("AsyncQueue","Visibility state changed to "+n.visibilityState),this.e_.zo()};const e=sf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Eu(),this.du(e)}enterRestrictedMode(e){if(!this.uu){this.uu=!0,this.Pu=e||!1;const n=sf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Tu)}}enqueue(e){if(this.Eu(),this.uu)return new Promise(()=>{});const n=new tr;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.au.push(e),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(e){if(!yl(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(e){const n=this._u.then(()=>(this.hu=!0,e().catch(r=>{this.lu=r,this.hu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ur("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.hu=!1,r))));return this._u=n,n}enqueueAfterDelay(e,n,r){this.Eu(),this.Iu.indexOf(e)>-1&&(n=0);const i=Ag.createAndSchedule(this,e,n,r,s=>this.Ru(s));return this.cu.push(i),i}Eu(){this.lu&&Z()}verifyOperationInProgress(){}async Vu(){let e;do e=this._u,await e;while(e!==this._u)}mu(e){for(const n of this.cu)if(n.timerId===e)return!0;return!1}fu(e){return this.Vu().then(()=>{this.cu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.cu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Vu()})}gu(e){this.Iu.push(e)}Ru(e){const n=this.cu.indexOf(e);this.cu.splice(n,1)}}function l0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Jr extends Vh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new nM}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||NC(this),this._firestoreClient.terminate()}}function rM(t,e){const n=typeof t=="object"?t:vh(),r=typeof t=="string"?t:"(default)",i=dl(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Qm("firestore");s&&tM(i,...s)}return i}function Fh(t){return t._firestoreClient||NC(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function NC(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new DO(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,RC(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new GL(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ys(dt.fromBase64String(e))}catch(n){throw new $(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ys(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e){this._methodName=e}}/**
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
 */class Vg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
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
 */const iM=/^__.*__$/;class sM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ai(e,this.data,this.fieldMask,n,this.fieldTransforms):new vl(e,this.data,n,this.fieldTransforms)}}class kC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ai(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function PC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class Fg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get yu(){return this.settings.yu}wu(e){return new Fg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.wu({path:r,bu:!1});return i.Du(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.wu({path:r,bu:!1});return i.pu(),i}vu(e){return this.wu({path:void 0,bu:!0})}Fu(e){return kc(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.xu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Du(this.path.get(e))}Du(e){if(e.length===0)throw this.Fu("Document fields must not be empty");if(PC(this.yu)&&iM.test(e))throw this.Fu('Document fields cannot begin and end with "__"')}}class oM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Dh(e)}Ou(e,n,r,i=!1){return new Fg({yu:e,methodName:n,xu:r,path:at.emptyPath(),bu:!1,Mu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jh(t){const e=t._freezeSettings(),n=Dh(t._databaseId);return new oM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function aM(t,e,n,r,i,s={}){const o=t.Ou(s.merge||s.mergeFields?2:0,e,n,i);Ug("Data must be an object, but it was:",o,r);const a=DC(r,o);let u,c;if(s.merge)u=new Ht(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const p=Lp(e,f,n);if(!o.contains(p))throw new $(V.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);LC(d,p)||d.push(p)}u=new Ht(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new sM(new Dt(a),u,c)}class Bh extends Mg{_toFieldTransform(e){if(e.yu!==2)throw e.yu===1?e.Fu(`${this._methodName}() can only appear at the top level of your update data`):e.Fu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bh}}function lM(t,e,n,r){const i=t.Ou(1,e,n);Ug("Data must be an object, but it was:",i,r);const s=[],o=Dt.empty();Ki(r,(u,c)=>{const d=jg(e,u,n);c=me(c);const f=i.Cu(d);if(c instanceof Bh)s.push(d);else{const p=Tl(c,f);p!=null&&(s.push(d),o.set(d,p))}});const a=new Ht(s);return new kC(o,a,i.fieldTransforms)}function uM(t,e,n,r,i,s){const o=t.Ou(1,e,n),a=[Lp(e,r,n)],u=[i];if(s.length%2!=0)throw new $(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(Lp(e,s[p])),u.push(s[p+1]);const c=[],d=Dt.empty();for(let p=a.length-1;p>=0;--p)if(!LC(c,a[p])){const y=a[p];let I=u[p];I=me(I);const A=o.Cu(y);if(I instanceof Bh)c.push(y);else{const N=Tl(I,A);N!=null&&(c.push(y),d.set(y,N))}}const f=new Ht(c);return new kC(d,f,o.fieldTransforms)}function bC(t,e,n,r=!1){return Tl(n,t.Ou(r?4:3,e))}function Tl(t,e){if(OC(t=me(t)))return Ug("Unsupported field value:",e,t),DC(t,e);if(t instanceof Mg)return function(r,i){if(!PC(i.yu))throw i.Fu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Fu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.bu&&e.yu!==4)throw e.Fu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Tl(a,i.vu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return e2(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Xe.fromDate(r);return{timestampValue:Rc(i.serializer,s)}}if(r instanceof Xe){const s=new Xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Rc(i.serializer,s)}}if(r instanceof Vg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ys)return{bytesValue:tC(i.serializer,r._byteString)};if(r instanceof Nt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Fu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:wg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Fu(`Unsupported field value: ${Mh(r)}`)}(t,e)}function DC(t,e){const n={};return kS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ki(t,(r,i)=>{const s=Tl(i,e.Su(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function OC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof Vg||t instanceof Ys||t instanceof Nt||t instanceof Mg)}function Ug(t,e,n){if(!OC(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Mh(n);throw r==="an object"?e.Fu(t+" a custom object"):e.Fu(t+" "+r)}}function Lp(t,e,n){if((e=me(e))instanceof Uh)return e._internalPath;if(typeof e=="string")return jg(t,e);throw kc("Field path arguments must be of type string or ",t,!1,void 0,n)}const cM=new RegExp("[~\\*/\\[\\]]");function jg(t,e,n){if(e.search(cM)>=0)throw kc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Uh(...e.split("."))._internalPath}catch{throw kc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function kc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(V.INVALID_ARGUMENT,a+t+u)}function LC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(zg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hM extends Bg{data(){return super.data()}}function zg(t,e){return typeof e=="string"?jg(t,e):e instanceof Uh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $g{}class zh extends $g{}function Pc(t,e,...n){let r=[];e instanceof $g&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof qg).length,a=s.filter(u=>u instanceof Wg).length;if(o>1||o>0&&a>0)throw new $(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Wg extends zh{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Wg(e,n,r)}_apply(e){const n=this._parse(e);return FC(e._query,n),new Mn(e.firestore,e.converter,Rp(e._query,n))}_parse(e){const n=jh(e.firestore);return function(s,o,a,u,c,d,f){let p;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new $(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){c0(f,d);const y=[];for(const I of f)y.push(u0(u,s,I));p={arrayValue:{values:y}}}else p=u0(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||c0(f,d),p=bC(a,o,f,d==="in"||d==="not-in");return qe.create(c,d,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class qg extends $g{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new qg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:En.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)FC(o,u),o=Rp(o,u)}(e._query,n),new Mn(e.firestore,e.converter,Rp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hg extends zh{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Hg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new $(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ka(s,o)}(e._query,this._field,this._direction);return new Mn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Qi(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function dM(t,e="asc"){const n=e,r=zg("orderBy",t);return Hg._create(r,n)}class Gg extends zh{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Gg(e,n,r)}_apply(e){return new Mn(e.firestore,e.converter,Sc(e._query,this._limit,this._limitType))}}function Mp(t){return eM("limit",t),Gg._create("limit",t,"F")}class Kg extends zh{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Kg(e,n,r)}_apply(e){const n=fM(e,this.type,this._docOrFields,this._inclusive);return new Mn(e.firestore,e.converter,function(i,s){return new Qi(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function VC(...t){return Kg._create("startAfter",t,!1)}function fM(t,e,n,r){if(n[0]=me(n[0]),n[0]instanceof Bg)return function(s,o,a,u,c){if(!u)throw new $(V.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const f of ks(s))if(f.field.isKeyField())d.push(Tc(o,u.key));else{const p=u.data.field(f.field);if(xh(p))throw new $(V.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(p===null){const y=f.field.canonicalString();throw new $(V.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${y}' (used as the orderBy) does not exist.`)}d.push(p)}return new Gs(d,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=jh(t.firestore);return function(o,a,u,c,d,f){const p=o.explicitOrderBy;if(d.length>p.length)throw new $(V.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const y=[];for(let I=0;I<d.length;I++){const A=d[I];if(p[I].field.isKeyField()){if(typeof A!="string")throw new $(V.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof A}`);if(!gg(o)&&A.indexOf("/")!==-1)throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${A}' contains a slash.`);const N=o.path.child(Ie.fromString(A));if(!K.isDocumentKey(N))throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${N}' is not because it contains an odd number of segments.`);const T=new K(N);y.push(Tc(a,T))}else{const N=bC(u,c,A);y.push(N)}}return new Gs(y,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function u0(t,e,n){if(typeof(n=me(n))=="string"){if(n==="")throw new $(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gg(e)&&n.indexOf("/")!==-1)throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!K.isDocumentKey(r))throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Tc(t,new K(r))}if(n instanceof Nt)return Tc(t,n._key);throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mh(n)}.`)}function c0(t,e){if(!Array.isArray(t)||t.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function FC(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class pM{convertValue(e,n="none"){switch(Fi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ki(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Vg($e(e.latitude),$e(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=dg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(qa(e));default:return null}}convertTimestamp(e){const n=Yr(e);return new Xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);ve(aC(r));const i=new Ha(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||ur(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mM(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class UC extends Bg{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Uu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(zg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Uu extends UC{data(e={}){return super.data(e)}}class jC{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ta(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Uu(this._firestore,this._userDataWriter,r.key,r,new ta(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Uu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ta(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Uu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ta(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:gM(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function gM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _M(t){t=rn(t,Nt);const e=rn(t.firestore,Jr);return XL(Fh(e),t._key).then(n=>BC(e,t,n))}class Qg extends pM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ys(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}function Ui(t){t=rn(t,Mn);const e=rn(t.firestore,Jr),n=Fh(e),r=new Qg(e);return MC(t._query),JL(n,t._query).then(i=>new jC(e,r,t,i))}function $h(t,e,n,...r){t=rn(t,Nt);const i=rn(t.firestore,Jr),s=jh(i);let o;return o=typeof(e=me(e))=="string"||e instanceof Uh?uM(s,"updateDoc",t._key,e,n,r):lM(s,"updateDoc",t._key,e),Yg(i,[o.toMutation(t._key,_n.exists(!0))])}function Xs(t){return Yg(rn(t.firestore,Jr),[new _g(t._key,_n.none())])}function fo(t,e){const n=rn(t.firestore,Jr),r=On(t),i=mM(t.converter,e);return Yg(n,[aM(jh(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,_n.exists(!1))]).then(()=>r)}function Vp(t,...e){var n,r,i;t=me(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||l0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(l0(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,d;if(t instanceof Nt)c=rn(t.firestore,Jr),d=Rh(t._key.path),u={next:f=>{e[o]&&e[o](BC(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=rn(t,Mn);c=rn(f.firestore,Jr),d=f._query;const p=new Qg(c);u={next:y=>{e[o]&&e[o](new jC(c,p,f,y))},error:e[o+1],complete:e[o+2]},MC(t._query)}return function(p,y,I,A){const N=new Lg(A),T=new Dg(y,N,I);return p.asyncQueue.enqueueAndForget(async()=>kg(await Nc(p),T)),()=>{N.Ga(),p.asyncQueue.enqueueAndForget(async()=>Pg(await Nc(p),T))}}(Fh(c),d,a,u)}function Yg(t,e){return function(r,i){const s=new tr;return r.asyncQueue.enqueueAndForget(async()=>FL(await YL(r),i,s)),s.promise}(Fh(t),e)}function BC(t,e,n){const r=n.docs.get(e._key),i=new Qg(t);return new UC(t,i,e._key,r,new ta(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){uo=i})(ii),Kr(new ar("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Jr(new yO(r.getProvider("auth-internal")),new IO(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new $(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ha(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),nn(Rw,"4.6.5",e),nn(Rw,"4.6.5","esm2017")})();/**
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
 */const zC="firebasestorage.googleapis.com",$C="storageBucket",yM=2*60*1e3,vM=10*60*1e3;/**
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
 */class Ue extends Ln{constructor(e,n,r=0){super(af(e),`Firebase Storage: ${n} (${af(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return af(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Fe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Fe||(Fe={}));function af(t){return"storage/"+t}function Xg(){const t="An unknown error occurred, please check the error payload for server response.";return new Ue(Fe.UNKNOWN,t)}function wM(t){return new Ue(Fe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function EM(t){return new Ue(Fe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function IM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ue(Fe.UNAUTHENTICATED,t)}function TM(){return new Ue(Fe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function SM(t){return new Ue(Fe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function CM(){return new Ue(Fe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function xM(){return new Ue(Fe.CANCELED,"User canceled the upload/download.")}function RM(t){return new Ue(Fe.INVALID_URL,"Invalid URL '"+t+"'.")}function AM(t){return new Ue(Fe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function NM(){return new Ue(Fe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+$C+"' property when initializing the app?")}function kM(){return new Ue(Fe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function PM(){return new Ue(Fe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function bM(t){return new Ue(Fe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Fp(t){return new Ue(Fe.INVALID_ARGUMENT,t)}function WC(){return new Ue(Fe.APP_DELETED,"The Firebase app was deleted.")}function DM(t){return new Ue(Fe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ma(t,e){return new Ue(Fe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function jo(t){throw new Ue(Fe.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Gt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Gt.makeFromUrl(e,n)}catch{return new Gt(e,"")}if(r.path==="")return r;throw AM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",y=new RegExp(`^https?://${f}/${d}/b/${i}/o${p}`,"i"),I={bucket:1,path:3},A=n===zC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",T=new RegExp(`^https?://${A}/${i}/${N}`,"i"),x=[{regex:a,indices:u,postModify:s},{regex:y,indices:I,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<x.length;D++){const L=x[D],F=L.regex.exec(e);if(F){const S=F[L.indices.bucket];let _=F[L.indices.path];_||(_=""),r=new Gt(S,_),L.postModify(r);break}}if(r==null)throw RM(e);return r}}class OM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function LM(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function d(...N){c||(c=!0,e.apply(null,N))}function f(N){i=setTimeout(()=>{i=null,t(y,u())},N)}function p(){s&&clearTimeout(s)}function y(N,...T){if(c){p();return}if(N){p(),d.call(null,N,...T);return}if(u()||o){p(),d.call(null,N,...T);return}r<64&&(r*=2);let x;a===1?(a=2,x=0):x=(r+Math.random())*1e3,f(x)}let I=!1;function A(N){I||(I=!0,p(),!c&&(i!==null?(N||(a=2),clearTimeout(i),f(0)):N||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,A(!0)},n),A}function MM(t){t(!1)}/**
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
 */function VM(t){return t!==void 0}function FM(t){return typeof t=="object"&&!Array.isArray(t)}function Jg(t){return typeof t=="string"||t instanceof String}function h0(t){return Zg()&&t instanceof Blob}function Zg(){return typeof Blob<"u"}function d0(t,e,n,r){if(r<e)throw Fp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Fp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function e_(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function qC(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Ri;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ri||(Ri={}));/**
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
 */function UM(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class jM{constructor(e,n,r,i,s,o,a,u,c,d,f,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,I)=>{this.resolve_=y,this.reject_=I,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new mu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Ri.NO_ERROR,u=s.getStatus();if(!a||UM(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Ri.ABORT;r(!1,new mu(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new mu(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());VM(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=Xg();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?WC():xM();o(u)}else{const u=CM();o(u)}};this.canceled_?n(!1,new mu(!1,null,!0)):this.backoffId_=LM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&MM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class mu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function BM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function zM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function $M(t,e){e&&(t["X-Firebase-GMPID"]=e)}function WM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function qM(t,e,n,r,i,s,o=!0){const a=qC(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return $M(c,e),BM(c,n),zM(c,s),WM(c,r),new jM(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function HM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function GM(...t){const e=HM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Zg())return new Blob(t);throw new Ue(Fe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function KM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function QM(t){if(typeof atob>"u")throw bM("base-64");return atob(t)}/**
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
 */const xn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class lf{constructor(e,n){this.data=e,this.contentType=n||null}}function YM(t,e){switch(t){case xn.RAW:return new lf(HC(e));case xn.BASE64:case xn.BASE64URL:return new lf(GC(t,e));case xn.DATA_URL:return new lf(JM(e),ZM(e))}throw Xg()}function HC(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function XM(t){let e;try{e=decodeURIComponent(t)}catch{throw ma(xn.DATA_URL,"Malformed data URL.")}return HC(e)}function GC(t,e){switch(t){case xn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ma(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case xn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ma(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=QM(e)}catch(i){throw i.message.includes("polyfill")?i:ma(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class KC{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ma(xn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=eV(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function JM(t){const e=new KC(t);return e.base64?GC(xn.BASE64,e.rest):XM(e.rest)}function ZM(t){return new KC(t).contentType}function eV(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Rr{constructor(e,n){let r=0,i="";h0(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(h0(this.data_)){const r=this.data_,i=KM(r,e,n);return i===null?null:new Rr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Rr(r,!0)}}static getBlob(...e){if(Zg()){const n=e.map(r=>r instanceof Rr?r.data_:r);return new Rr(GM.apply(null,n))}else{const n=e.map(o=>Jg(o)?YM(xn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Rr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function QC(t){let e;try{e=JSON.parse(t)}catch{return null}return FM(e)?e:null}/**
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
 */function tV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function nV(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function YC(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function rV(t,e){return e}class xt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||rV}}let gu=null;function iV(t){return!Jg(t)||t.length<2?t:YC(t)}function XC(){if(gu)return gu;const t=[];t.push(new xt("bucket")),t.push(new xt("generation")),t.push(new xt("metageneration")),t.push(new xt("name","fullPath",!0));function e(s,o){return iV(o)}const n=new xt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new xt("size");return i.xform=r,t.push(i),t.push(new xt("timeCreated")),t.push(new xt("updated")),t.push(new xt("md5Hash",null,!0)),t.push(new xt("cacheControl",null,!0)),t.push(new xt("contentDisposition",null,!0)),t.push(new xt("contentEncoding",null,!0)),t.push(new xt("contentLanguage",null,!0)),t.push(new xt("contentType",null,!0)),t.push(new xt("metadata","customMetadata",!0)),gu=t,gu}function sV(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Gt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function oV(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return sV(r,t),r}function JC(t,e,n){const r=QC(e);return r===null?null:oV(t,r,n)}function aV(t,e,n,r){const i=QC(e);if(i===null||!Jg(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,f=t.fullPath,p="/b/"+o(d)+"/o/"+o(f),y=e_(p,n,r),I=qC({alt:"media",token:c});return y+I})[0]}function lV(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class ZC{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ex(t){if(!t)throw Xg()}function uV(t,e){function n(r,i){const s=JC(t,i,e);return ex(s!==null),s}return n}function cV(t,e){function n(r,i){const s=JC(t,i,e);return ex(s!==null),aV(s,i,t.host,t._protocol)}return n}function tx(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=TM():i=IM():n.getStatus()===402?i=EM(t.bucket):n.getStatus()===403?i=SM(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function hV(t){const e=tx(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=wM(t.path)),s.serverResponse=i.serverResponse,s}return n}function dV(t,e,n){const r=e.fullServerUrl(),i=e_(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new ZC(i,s,cV(t,n),o);return a.errorHandler=hV(e),a}function fV(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function pV(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=fV(null,e)),r}function mV(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let x="";for(let D=0;D<2;D++)x=x+Math.random().toString().slice(2);return x}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=pV(e,r,i),d=lV(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,p=`\r
--`+u+"--",y=Rr.getBlob(f,r,p);if(y===null)throw kM();const I={name:c.fullPath},A=e_(s,t.host,t._protocol),N="POST",T=t.maxUploadRetryTime,w=new ZC(A,N,uV(t,n),T);return w.urlParams=I,w.headers=o,w.body=y.uploadData(),w.errorHandler=tx(e),w}class gV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ri.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ri.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ri.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw jo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw jo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw jo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw jo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw jo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class _V extends gV{initXhr(){this.xhr_.responseType="text"}}function nx(){return new _V}/**
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
 */class ji{constructor(e,n){this._service=e,n instanceof Gt?this._location=n:this._location=Gt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ji(e,n)}get root(){const e=new Gt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return YC(this._location.path)}get storage(){return this._service}get parent(){const e=tV(this._location.path);if(e===null)return null;const n=new Gt(this._location.bucket,e);return new ji(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw DM(e)}}function yV(t,e,n){t._throwIfRoot("uploadBytes");const r=mV(t.storage,t._location,XC(),new Rr(e,!0),n);return t.storage.makeRequestWithTokens(r,nx).then(i=>({metadata:i,ref:t}))}function vV(t){t._throwIfRoot("getDownloadURL");const e=dV(t.storage,t._location,XC());return t.storage.makeRequestWithTokens(e,nx).then(n=>{if(n===null)throw PM();return n})}function wV(t,e){const n=nV(t._location.path,e),r=new Gt(t._location.bucket,n);return new ji(t.storage,r)}/**
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
 */function EV(t){return/^[A-Za-z]+:\/\//.test(t)}function IV(t,e){return new ji(t,e)}function rx(t,e){if(t instanceof t_){const n=t;if(n._bucket==null)throw NM();const r=new ji(n,n._bucket);return e!=null?rx(r,e):r}else return e!==void 0?wV(t,e):t}function TV(t,e){if(e&&EV(e)){if(t instanceof t_)return IV(t,e);throw Fp("To use ref(service, url), the first argument must be a Storage instance.")}else return rx(t,e)}function f0(t,e){const n=e==null?void 0:e[$C];return n==null?null:Gt.makeFromBucketSpec(n,t)}function SV(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Ym(i,t.app.options.projectId))}class t_{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=zC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=yM,this._maxUploadRetryTime=vM,this._requests=new Set,i!=null?this._bucket=Gt.makeFromBucketSpec(i,this._host):this._bucket=f0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Gt.makeFromBucketSpec(this._url,e):this._bucket=f0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){d0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){d0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ji(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new OM(WC());{const o=qM(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const p0="@firebase/storage",m0="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix="storage";function Xa(t,e,n){return t=me(t),yV(t,e,n)}function Ja(t){return t=me(t),vV(t)}function Za(t,e){return t=me(t),TV(t,e)}function sx(t=vh(),e){t=me(t);const r=dl(t,ix).getImmediate({identifier:e}),i=Qm("storage");return i&&CV(r,...i),r}function CV(t,e,n,r={}){SV(t,e,n,r)}function xV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new t_(n,r,i,e,ii)}function RV(){Kr(new ar(ix,xV,"PUBLIC").setMultipleInstances(!0)),nn(p0,m0,""),nn(p0,m0,"esm2017")}RV();var g0={};const _0="@firebase/database",y0="1.0.7";/**
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
 */let ox="";function AV(t){ox=t}/**
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
 */class NV{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),nt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ja(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class kV{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return pr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ax=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new NV(e)}}catch{}return new kV},Ei=ax("localStorage"),PV=ax("sessionStorage");/**
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
 */const bs=new yh("@firebase/database"),bV=function(){let t=1;return function(){return t++}}(),lx=function(t){const e=Kk(t),n=new Wk;n.update(e);const r=n.digest();return Km.encodeByteArray(r)},Sl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Sl.apply(null,r):typeof r=="object"?e+=nt(r):e+=r,e+=" "}return e};let ga=null,v0=!0;const DV=function(t,e){B(!e,"Can't turn on custom loggers persistently."),bs.logLevel=ae.VERBOSE,ga=bs.log.bind(bs)},It=function(...t){if(v0===!0&&(v0=!1,ga===null&&PV.get("logging_enabled")===!0&&DV()),ga){const e=Sl.apply(null,t);ga(e)}},Cl=function(t){return function(...e){It(t,...e)}},Up=function(...t){const e="FIREBASE INTERNAL ERROR: "+Sl(...t);bs.error(e)},hr=function(...t){const e=`FIREBASE FATAL ERROR: ${Sl(...t)}`;throw bs.error(e),new Error(e)},Bt=function(...t){const e="FIREBASE WARNING: "+Sl(...t);bs.warn(e)},OV=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Bt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ux=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},LV=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Js="[MIN_NAME]",Bi="[MAX_NAME]",po=function(t,e){if(t===e)return 0;if(t===Js||e===Bi)return-1;if(e===Js||t===Bi)return 1;{const n=w0(t),r=w0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},MV=function(t,e){return t===e?0:t<e?-1:1},Bo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+nt(e))},n_=function(t){if(typeof t!="object"||t===null)return nt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=nt(e[r]),n+=":",n+=n_(t[e[r]]);return n+="}",n},cx=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function zt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const hx=function(t){B(!ux(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let f="";for(u=0;u<64;u+=8){let p=parseInt(d.substr(u,8),2).toString(16);p.length===1&&(p="0"+p),f=f+p}return f.toLowerCase()},VV=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},FV=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function UV(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const jV=new RegExp("^-?(0*)\\d{1,10}$"),BV=-2147483648,zV=2147483647,w0=function(t){if(jV.test(t)){const e=Number(t);if(e>=BV&&e<=zV)return e}return null},mo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Bt("Exception was thrown by user callback.",n),e},Math.floor(0))}},$V=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},_a=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class WV{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Bt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class qV{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(It("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Bt(e)}}class ju{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ju.OWNER="owner";/**
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
 */const r_="5",dx="v",fx="s",px="r",mx="f",gx=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,_x="ls",yx="p",jp="ac",vx="websocket",wx="long_polling";/**
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
 */class Ex{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ei.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ei.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function HV(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ix(t,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let r;if(e===vx)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===wx)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);HV(t)&&(n.ns=t.namespace);const i=[];return zt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class GV{constructor(){this.counters_={}}incrementCounter(e,n=1){pr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Rk(this.counters_)}}/**
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
 */const uf={},cf={};function i_(t){const e=t.toString();return uf[e]||(uf[e]=new GV),uf[e]}function KV(t,e){const n=t.toString();return cf[n]||(cf[n]=e()),cf[n]}/**
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
 */class QV{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&mo(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const E0="start",YV="close",XV="pLPCommand",JV="pRTLPCB",Tx="id",Sx="pw",Cx="ser",ZV="cb",eF="seg",tF="ts",nF="d",rF="dframe",xx=1870,Rx=30,iF=xx-Rx,sF=25e3,oF=3e4;class ws{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Cl(e),this.stats_=i_(n),this.urlFn=u=>(this.appCheckToken&&(u[jp]=this.appCheckToken),Ix(n,wx,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new QV(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(oF)),LV(()=>{if(this.isClosed_)return;this.scriptTagHolder=new s_((...s)=>{const[o,a,u,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===E0)this.id=a,this.password=u;else if(o===YV)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[E0]="t",r[Cx]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[ZV]=this.scriptTagHolder.uniqueCallbackIdentifier),r[dx]=r_,this.transportSessionId&&(r[fx]=this.transportSessionId),this.lastSessionId&&(r[_x]=this.lastSessionId),this.applicationId&&(r[yx]=this.applicationId),this.appCheckToken&&(r[jp]=this.appCheckToken),typeof location<"u"&&location.hostname&&gx.test(location.hostname)&&(r[px]=mx);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ws.forceAllow_=!0}static forceDisallow(){ws.forceDisallow_=!0}static isAvailable(){return ws.forceAllow_?!0:!ws.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!VV()&&!FV()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=NT(n),i=cx(r,iF);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[rF]="t",r[Tx]=e,r[Sx]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=nt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class s_{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=bV(),window[XV+this.uniqueCallbackIdentifier]=e,window[JV+this.uniqueCallbackIdentifier]=n,this.myIFrame=s_.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){It("frame writing exception"),a.stack&&It(a.stack),It(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||It("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Tx]=this.myID,e[Sx]=this.myPW,e[Cx]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Rx+r.length<=xx;){const o=this.pendingSegs.shift();r=r+"&"+eF+i+"="+o.seg+"&"+tF+i+"="+o.ts+"&"+nF+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(sF)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{It("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const aF=16384,lF=45e3;let bc=null;typeof MozWebSocket<"u"?bc=MozWebSocket:typeof WebSocket<"u"&&(bc=WebSocket);class dn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Cl(this.connId),this.stats_=i_(n),this.connURL=dn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[dx]=r_,typeof location<"u"&&location.hostname&&gx.test(location.hostname)&&(o[px]=mx),n&&(o[fx]=n),r&&(o[_x]=r),i&&(o[jp]=i),s&&(o[yx]=s),Ix(e,vx,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ei.set("previous_websocket_failure",!0);try{let r;LT(),this.mySock=new bc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){dn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&bc!==null&&!dn.forceDisallow_}static previouslyFailed(){return Ei.isInMemoryStorage||Ei.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ei.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ja(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=cx(n,aF);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(lF))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dn.responsesRequiredToBeHealthy=2;dn.healthyTimeout=3e4;/**
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
 */class el{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ws,dn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=dn&&dn.isAvailable();let r=n&&!dn.previouslyFailed();if(e.webSocketOnly&&(n||Bt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[dn];else{const i=this.transports_=[];for(const s of el.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);el.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}el.globalTransportInitialized_=!1;/**
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
 */const uF=6e4,cF=5e3,hF=10*1024,dF=100*1024,hf="t",I0="d",fF="s",T0="r",pF="e",S0="o",C0="a",x0="n",R0="p",mF="h";class gF{constructor(e,n,r,i,s,o,a,u,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Cl("c:"+this.id+":"),this.transportManager_=new el(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=_a(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>dF?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>hF?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(hf in e){const n=e[hf];n===C0?this.upgradeIfSecondaryHealthy_():n===T0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===S0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Bo("t",e),r=Bo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:R0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:C0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:x0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Bo("t",e),r=Bo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Bo(hf,e);if(I0 in e){const r=e[I0];if(n===mF){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===x0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===fF?this.onConnectionShutdown_(r):n===T0?this.onReset_(r):n===pF?Up("Server Error: "+r):n===S0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Up("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),r_!==r&&Bt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),_a(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(uF))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):_a(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(cF))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:R0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ei.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ax{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Nx{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Dc extends Nx{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Xm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Dc}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const A0=32,N0=768;class we{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function fe(){return new we("")}function re(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Zr(t){return t.pieces_.length-t.pieceNum_}function Ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new we(t.pieces_,e)}function kx(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function _F(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Px(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function bx(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new we(e,0)}function Ke(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof we)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new we(n,0)}function se(t){return t.pieceNum_>=t.pieces_.length}function Lt(t,e){const n=re(t),r=re(e);if(n===null)return e;if(n===r)return Lt(Ee(t),Ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function o_(t,e){if(Zr(t)!==Zr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function fn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Zr(t)>Zr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class yF{constructor(e,n){this.errorPrefix_=n,this.parts_=Px(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=_h(this.parts_[r]);Dx(this)}}function vF(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=_h(e),Dx(t)}function wF(t){const e=t.parts_.pop();t.byteLength_-=_h(e),t.parts_.length>0&&(t.byteLength_-=1)}function Dx(t){if(t.byteLength_>N0)throw new Error(t.errorPrefix_+"has a key path longer than "+N0+" bytes ("+t.byteLength_+").");if(t.parts_.length>A0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+A0+") or object contains a cycle "+gi(t))}function gi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class a_ extends Nx{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new a_}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const zo=1e3,EF=60*5*1e3,k0=30*1e3,IF=1.3,TF=3e4,SF="server_kill",P0=3;class nr extends Ax{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=nr.nextPersistentConnectionId_++,this.log_=Cl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zo,this.maxReconnectDelay_=EF,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!LT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");a_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Dc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(nt(s)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new gh,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,c=a.s;nr.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&pr(e,"w")){const r=zs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Bt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||$k(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=k0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=zk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+nt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Up("Unrecognized action received from server: "+nt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=zo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>TF&&(this.reconnectDelay_=zo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*IF)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+nr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(f){B(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,p]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?It("getToken() completed but was canceled"):(It("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=p&&p.token,a=new gF(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,y=>{Bt(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(SF)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Bt(f),u())}}}interrupt(e){It("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){It("Resuming connection for reason: "+e),delete this.interruptReasons_[e],hp(this.interruptReasons_)&&(this.reconnectDelay_=zo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>n_(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new we(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){It("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=P0&&(this.reconnectDelay_=k0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){It("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=P0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ox.replace(/\./g,"-")]=1,Xm()?e["framework.cordova"]=1:OT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Dc.getInstance().currentlyOnline();return hp(this.interruptReasons_)&&e}}nr.nextPersistentConnectionId_=0;nr.nextConnectionId_=0;/**
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
 */class ie{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ie(e,n)}}/**
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
 */class Wh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ie(Js,e),i=new ie(Js,n);return this.compare(r,i)!==0}minPost(){return ie.MIN}}/**
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
 */let _u;class Ox extends Wh{static get __EMPTY_NODE(){return _u}static set __EMPTY_NODE(e){_u=e}compare(e,n){return po(e.name,n.name)}isDefinedOn(e){throw oo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ie.MIN}maxPost(){return new ie(Bi,_u)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new ie(e,_u)}toString(){return".key"}}const Ds=new Ox;/**
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
 */class yu{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class tt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??tt.RED,this.left=i??Mt.EMPTY_NODE,this.right=s??Mt.EMPTY_NODE}copy(e,n,r,i,s){return new tt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Mt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Mt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}tt.RED=!0;tt.BLACK=!1;class CF{copy(e,n,r,i,s){return this}insert(e,n,r){return new tt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Mt{constructor(e,n=Mt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Mt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,tt.BLACK,null,null))}remove(e){return new Mt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,tt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new yu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new yu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new yu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new yu(this.root_,null,this.comparator_,!0,e)}}Mt.EMPTY_NODE=new CF;/**
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
 */function xF(t,e){return po(t.name,e.name)}function l_(t,e){return po(t,e)}/**
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
 */let Bp;function RF(t){Bp=t}const Lx=function(t){return typeof t=="number"?"number:"+hx(t):"string:"+t},Mx=function(t){if(t.isLeafNode()){const e=t.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&pr(e,".sv"),"Priority must be a string or number.")}else B(t===Bp||t.isEmpty(),"priority of unexpected type.");B(t===Bp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let b0;class Je{constructor(e,n=Je.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Mx(this.priorityNode_)}static set __childrenNodeConstructor(e){b0=e}static get __childrenNodeConstructor(){return b0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Je(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:re(e)===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Je.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=re(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(B(r!==".priority"||Zr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Je.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Lx(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=hx(this.value_):e+=this.value_,this.lazyHash_=lx(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Je.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Je.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Je.VALUE_TYPE_ORDER.indexOf(n),s=Je.VALUE_TYPE_ORDER.indexOf(r);return B(i>=0,"Unknown leaf type: "+n),B(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Je.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Vx,Fx;function AF(t){Vx=t}function NF(t){Fx=t}class kF extends Wh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?po(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ie.MIN}maxPost(){return new ie(Bi,new Je("[PRIORITY-POST]",Fx))}makePost(e,n){const r=Vx(e);return new ie(n,new Je("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ve=new kF;/**
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
 */const PF=Math.log(2);class bF{constructor(e){const n=s=>parseInt(Math.log(s)/PF,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Oc=function(t,e,n,r){t.sort(e);const i=function(u,c){const d=c-u;let f,p;if(d===0)return null;if(d===1)return f=t[u],p=n?n(f):f,new tt(p,f.node,tt.BLACK,null,null);{const y=parseInt(d/2,10)+u,I=i(u,y),A=i(y+1,c);return f=t[y],p=n?n(f):f,new tt(p,f.node,tt.BLACK,I,A)}},s=function(u){let c=null,d=null,f=t.length;const p=function(I,A){const N=f-I,T=f;f-=I;const w=i(N+1,T),x=t[N],D=n?n(x):x;y(new tt(D,x.node,A,null,w))},y=function(I){c?(c.left=I,c=I):(d=I,c=I)};for(let I=0;I<u.count;++I){const A=u.nextBitIsOne(),N=Math.pow(2,u.count-(I+1));A?p(N,tt.BLACK):(p(N,tt.BLACK),p(N,tt.RED))}return d},o=new bF(t.length),a=s(o);return new Mt(r||e,a)};/**
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
 */let df;const rs={};class Jn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return B(rs&&Ve,"ChildrenNode.ts has not been loaded"),df=df||new Jn({".priority":rs},{".priority":Ve}),df}get(e){const n=zs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Mt?n:null}hasIndex(e){return pr(this.indexSet_,e.toString())}addIndex(e,n){B(e!==Ds,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ie.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Oc(r,e.getCompare()):a=rs;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const d=Object.assign({},this.indexes_);return d[u]=a,new Jn(d,c)}addToIndexes(e,n){const r=pc(this.indexes_,(i,s)=>{const o=zs(this.indexSet_,s);if(B(o,"Missing index implementation for "+s),i===rs)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(ie.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),Oc(a,o.getCompare())}else return rs;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new ie(e.name,a))),u.insert(e,e.node)}});return new Jn(r,this.indexSet_)}removeFromIndexes(e,n){const r=pc(this.indexes_,i=>{if(i===rs)return i;{const s=n.get(e.name);return s?i.remove(new ie(e.name,s)):i}});return new Jn(r,this.indexSet_)}}/**
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
 */let $o;class J{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Mx(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $o||($o=new J(new Mt(l_),null,Jn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$o}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?$o:n}}getChild(e){const n=re(e);return n===null?this:this.getImmediateChild(n).getChild(Ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ie(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?$o:this.priorityNode_;return new J(i,o,s)}}updateChild(e,n){const r=re(e);if(r===null)return n;{B(re(e)!==".priority"||Zr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ee(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ve,(o,a)=>{n[o]=a.val(e),r++,s&&J.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Lx(this.getPriority().val())+":"),this.forEachChild(Ve,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":lx(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ie(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ie(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ie(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ie.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ie.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===xl?-1:0}withIndex(e){if(e===Ds||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ds||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ve),i=n.getIterator(Ve);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ds?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class DF extends J{constructor(){super(new Mt(l_),J.EMPTY_NODE,Jn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const xl=new DF;Object.defineProperties(ie,{MIN:{value:new ie(Js,J.EMPTY_NODE)},MAX:{value:new ie(Bi,xl)}});Ox.__EMPTY_NODE=J.EMPTY_NODE;Je.__childrenNodeConstructor=J;RF(xl);NF(xl);/**
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
 */const OF=!0;function ot(t,e=null){if(t===null)return J.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Je(n,ot(e))}if(!(t instanceof Array)&&OF){const n=[];let r=!1;if(zt(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=ot(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new ie(o,u)))}}),n.length===0)return J.EMPTY_NODE;const s=Oc(n,xF,o=>o.name,l_);if(r){const o=Oc(n,Ve.getCompare());return new J(s,ot(e),new Jn({".priority":o},{".priority":Ve}))}else return new J(s,ot(e),Jn.Default)}else{let n=J.EMPTY_NODE;return zt(t,(r,i)=>{if(pr(t,r)&&r.substring(0,1)!=="."){const s=ot(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ot(e))}}AF(ot);/**
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
 */class LF extends Wh{constructor(e){super(),this.indexPath_=e,B(!se(e)&&re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?po(e.name,n.name):s}makePost(e,n){const r=ot(e),i=J.EMPTY_NODE.updateChild(this.indexPath_,r);return new ie(n,i)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,xl);return new ie(Bi,e)}toString(){return Px(this.indexPath_,0).join("/")}}/**
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
 */class MF extends Wh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?po(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ie.MIN}maxPost(){return ie.MAX}makePost(e,n){const r=ot(e);return new ie(n,r)}toString(){return".value"}}const VF=new MF;/**
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
 */function Ux(t){return{type:"value",snapshotNode:t}}function Zs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function tl(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function nl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function FF(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class u_{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){B(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(tl(n,a)):B(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Zs(n,r)):o.trackChildChange(nl(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ve,(i,s)=>{n.hasChild(i)||r.trackChildChange(tl(i,s))}),n.isLeafNode()||n.forEachChild(Ve,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(nl(i,s,o))}else r.trackChildChange(Zs(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?J.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class rl{constructor(e){this.indexedFilter_=new u_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=rl.getStartPost_(e),this.endPost_=rl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new ie(n,r))||(r=J.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=J.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(J.EMPTY_NODE);const s=this;return n.forEachChild(Ve,(o,a)=>{s.matches(new ie(o,a))||(i=i.updateImmediateChild(o,J.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class UF{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new rl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ie(n,r))||(r=J.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=J.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=J.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(J.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,J.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(p,y)=>f(y,p)}else o=this.index_.getCompare();const a=e;B(a.numChildren()===this.limit_,"");const u=new ie(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(u);if(a.hasChild(n)){const f=a.getImmediateChild(n);let p=i.getChildAfterChild(this.index_,c,this.reverse_);for(;p!=null&&(p.name===n||a.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);const y=p==null?1:o(p,u);if(d&&!r.isEmpty()&&y>=0)return s!=null&&s.trackChildChange(nl(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(tl(n,f));const A=a.updateImmediateChild(n,J.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(s!=null&&s.trackChildChange(Zs(p.name,p.node)),A.updateImmediateChild(p.name,p.node)):A}}else return r.isEmpty()?e:d&&o(c,u)>=0?(s!=null&&(s.trackChildChange(tl(c.name,c.node)),s.trackChildChange(Zs(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,J.EMPTY_NODE)):e}}/**
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
 */class c_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Js}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Bi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ve}copy(){const e=new c_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jF(t){return t.loadsAllData()?new u_(t.getIndex()):t.hasLimit()?new UF(t):new rl(t)}function D0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ve?n="$priority":t.index_===VF?n="$value":t.index_===Ds?n="$key":(B(t.index_ instanceof LF,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=nt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=nt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+nt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=nt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+nt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function O0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ve&&(e.i=t.index_.toString()),e}/**
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
 */class Lc extends Ax{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Cl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Lc.getListenId_(e,r),a={};this.listens_[o]=a;const u=D0(e._queryParams);this.restRequest_(s+".json",u,(c,d)=>{let f=d;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),zs(this.listens_,o)===a){let p;c?c===401?p="permission_denied":p="rest_error:"+c:p="ok",i(p,null)}})}unlisten(e,n){const r=Lc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=D0(e._queryParams),r=e._path.toString(),i=new gh;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ao(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=ja(a.responseText)}catch{Bt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&Bt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class BF{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Mc(){return{value:null,children:new Map}}function jx(t,e,n){if(se(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=re(e);t.children.has(r)||t.children.set(r,Mc());const i=t.children.get(r);e=Ee(e),jx(i,e,n)}}function zp(t,e,n){t.value!==null?n(e,t.value):zF(t,(r,i)=>{const s=new we(e.toString()+"/"+r);zp(i,s,n)})}function zF(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class $F{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&zt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const L0=10*1e3,WF=30*1e3,qF=5*60*1e3;class HF{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new $F(e);const r=L0+(WF-L0)*Math.random();_a(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;zt(e,(i,s)=>{s>0&&pr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),_a(this.reportStats_.bind(this),Math.floor(Math.random()*2*qF))}}/**
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
 */var pn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pn||(pn={}));function Bx(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function h_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function d_(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Vc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=pn.ACK_USER_WRITE,this.source=Bx()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new we(e));return new Vc(fe(),n,this.revert)}}else return B(re(this.path)===e,"operationForChild called for unrelated child."),new Vc(Ee(this.path),this.affectedTree,this.revert)}}/**
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
 */class il{constructor(e,n){this.source=e,this.path=n,this.type=pn.LISTEN_COMPLETE}operationForChild(e){return se(this.path)?new il(this.source,fe()):new il(this.source,Ee(this.path))}}/**
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
 */class zi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=pn.OVERWRITE}operationForChild(e){return se(this.path)?new zi(this.source,fe(),this.snap.getImmediateChild(e)):new zi(this.source,Ee(this.path),this.snap)}}/**
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
 */class sl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=pn.MERGE}operationForChild(e){if(se(this.path)){const n=this.children.subtree(new we(e));return n.isEmpty()?null:n.value?new zi(this.source,fe(),n.value):new sl(this.source,fe(),n)}else return B(re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new sl(this.source,Ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class $i{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(se(e))return this.isFullyInitialized()&&!this.filtered_;const n=re(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class GF{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function KF(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(FF(o.childName,o.snapshotNode))}),Wo(t,i,"child_removed",e,r,n),Wo(t,i,"child_added",e,r,n),Wo(t,i,"child_moved",s,r,n),Wo(t,i,"child_changed",e,r,n),Wo(t,i,"value",e,r,n),i}function Wo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>YF(t,a,u)),o.forEach(a=>{const u=QF(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function QF(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function YF(t,e,n){if(e.childName==null||n.childName==null)throw oo("Should only compare child_ events.");const r=new ie(e.childName,e.snapshotNode),i=new ie(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function qh(t,e){return{eventCache:t,serverCache:e}}function ya(t,e,n,r){return qh(new $i(e,n,r),t.serverCache)}function zx(t,e,n,r){return qh(t.eventCache,new $i(e,n,r))}function $p(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Wi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let ff;const XF=()=>(ff||(ff=new Mt(MV)),ff);class xe{constructor(e,n=XF()){this.value=e,this.children=n}static fromObject(e){let n=new xe(null);return zt(e,(r,i)=>{n=n.set(new we(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:fe(),value:this.value};if(se(e))return null;{const r=re(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ee(e),n);return s!=null?{path:Ke(new we(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const n=re(e),r=this.children.get(n);return r!==null?r.subtree(Ee(e)):new xe(null)}}set(e,n){if(se(e))return new xe(n,this.children);{const r=re(e),s=(this.children.get(r)||new xe(null)).set(Ee(e),n),o=this.children.insert(r,s);return new xe(this.value,o)}}remove(e){if(se(e))return this.children.isEmpty()?new xe(null):new xe(null,this.children);{const n=re(e),r=this.children.get(n);if(r){const i=r.remove(Ee(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new xe(null):new xe(this.value,s)}else return this}}get(e){if(se(e))return this.value;{const n=re(e),r=this.children.get(n);return r?r.get(Ee(e)):null}}setTree(e,n){if(se(e))return n;{const r=re(e),s=(this.children.get(r)||new xe(null)).setTree(Ee(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new xe(this.value,o)}}fold(e){return this.fold_(fe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ke(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,fe(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(se(e))return null;{const s=re(e),o=this.children.get(s);return o?o.findOnPath_(Ee(e),Ke(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,fe(),n)}foreachOnPath_(e,n,r){if(se(e))return this;{this.value&&r(n,this.value);const i=re(e),s=this.children.get(i);return s?s.foreachOnPath_(Ee(e),Ke(n,i),r):new xe(null)}}foreach(e){this.foreach_(fe(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ke(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class yn{constructor(e){this.writeTree_=e}static empty(){return new yn(new xe(null))}}function va(t,e,n){if(se(e))return new yn(new xe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Lt(i,e);return s=s.updateChild(o,n),new yn(t.writeTree_.set(i,s))}else{const i=new xe(n),s=t.writeTree_.setTree(e,i);return new yn(s)}}}function M0(t,e,n){let r=t;return zt(n,(i,s)=>{r=va(r,Ke(e,i),s)}),r}function V0(t,e){if(se(e))return yn.empty();{const n=t.writeTree_.setTree(e,new xe(null));return new yn(n)}}function Wp(t,e){return Xi(t,e)!=null}function Xi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Lt(n.path,e)):null}function F0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ve,(r,i)=>{e.push(new ie(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ie(r,i.value))}),e}function qr(t,e){if(se(e))return t;{const n=Xi(t,e);return n!=null?new yn(new xe(n)):new yn(t.writeTree_.subtree(e))}}function qp(t){return t.writeTree_.isEmpty()}function eo(t,e){return $x(fe(),t.writeTree_,e)}function $x(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(B(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=$x(Ke(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ke(t,".priority"),r)),n}}/**
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
 */function f_(t,e){return Gx(e,t)}function JF(t,e,n,r,i){B(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=va(t.visibleWrites,e,n)),t.lastWriteId=r}function ZF(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function e4(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&t4(a,r.path)?i=!1:fn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return n4(t),!0;if(r.snap)t.visibleWrites=V0(t.visibleWrites,r.path);else{const a=r.children;zt(a,u=>{t.visibleWrites=V0(t.visibleWrites,Ke(r.path,u))})}return!0}else return!1}function t4(t,e){if(t.snap)return fn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&fn(Ke(t.path,n),e))return!0;return!1}function n4(t){t.visibleWrites=Wx(t.allWrites,r4,fe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function r4(t){return t.visible}function Wx(t,e,n){let r=yn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)fn(n,o)?(a=Lt(n,o),r=va(r,a,s.snap)):fn(o,n)&&(a=Lt(o,n),r=va(r,fe(),s.snap.getChild(a)));else if(s.children){if(fn(n,o))a=Lt(n,o),r=M0(r,a,s.children);else if(fn(o,n))if(a=Lt(o,n),se(a))r=M0(r,fe(),s.children);else{const u=zs(s.children,re(a));if(u){const c=u.getChild(Ee(a));r=va(r,fe(),c)}}}else throw oo("WriteRecord should have .snap or .children")}}return r}function qx(t,e,n,r,i){if(!r&&!i){const s=Xi(t.visibleWrites,e);if(s!=null)return s;{const o=qr(t.visibleWrites,e);if(qp(o))return n;if(n==null&&!Wp(o,fe()))return null;{const a=n||J.EMPTY_NODE;return eo(o,a)}}}else{const s=qr(t.visibleWrites,e);if(!i&&qp(s))return n;if(!i&&n==null&&!Wp(s,fe()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(fn(c.path,e)||fn(e,c.path))},a=Wx(t.allWrites,o,e),u=n||J.EMPTY_NODE;return eo(a,u)}}}function i4(t,e,n){let r=J.EMPTY_NODE;const i=Xi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ve,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=qr(t.visibleWrites,e);return n.forEachChild(Ve,(o,a)=>{const u=eo(qr(s,new we(o)),a);r=r.updateImmediateChild(o,u)}),F0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=qr(t.visibleWrites,e);return F0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function s4(t,e,n,r,i){B(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ke(e,n);if(Wp(t.visibleWrites,s))return null;{const o=qr(t.visibleWrites,s);return qp(o)?i.getChild(n):eo(o,i.getChild(n))}}function o4(t,e,n,r){const i=Ke(e,n),s=Xi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=qr(t.visibleWrites,i);return eo(o,r.getNode().getImmediateChild(n))}else return null}function a4(t,e){return Xi(t.visibleWrites,e)}function l4(t,e,n,r,i,s,o){let a;const u=qr(t.visibleWrites,e),c=Xi(u,fe());if(c!=null)a=c;else if(n!=null)a=eo(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),p=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let y=p.getNext();for(;y&&d.length<i;)f(y,r)!==0&&d.push(y),y=p.getNext();return d}else return[]}function u4(){return{visibleWrites:yn.empty(),allWrites:[],lastWriteId:-1}}function Fc(t,e,n,r){return qx(t.writeTree,t.treePath,e,n,r)}function p_(t,e){return i4(t.writeTree,t.treePath,e)}function U0(t,e,n,r){return s4(t.writeTree,t.treePath,e,n,r)}function Uc(t,e){return a4(t.writeTree,Ke(t.treePath,e))}function c4(t,e,n,r,i,s){return l4(t.writeTree,t.treePath,e,n,r,i,s)}function m_(t,e,n){return o4(t.writeTree,t.treePath,e,n)}function Hx(t,e){return Gx(Ke(t.treePath,e),t.writeTree)}function Gx(t,e){return{treePath:t,writeTree:e}}/**
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
 */class h4{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,nl(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,tl(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Zs(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,nl(r,e.snapshotNode,i.oldSnap));else throw oo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class d4{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Kx=new d4;class g_{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new $i(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return m_(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Wi(this.viewCache_),s=c4(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function f4(t){return{filter:t}}function p4(t,e){B(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function m4(t,e,n,r,i){const s=new h4;let o,a;if(n.type===pn.OVERWRITE){const c=n;c.source.fromUser?o=Hp(t,e,c.path,c.snap,r,i,s):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!se(c.path),o=jc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===pn.MERGE){const c=n;c.source.fromUser?o=_4(t,e,c.path,c.children,r,i,s):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Gp(t,e,c.path,c.children,r,i,a,s))}else if(n.type===pn.ACK_USER_WRITE){const c=n;c.revert?o=w4(t,e,c.path,r,i,s):o=y4(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===pn.LISTEN_COMPLETE)o=v4(t,e,n.path,r,s);else throw oo("Unknown operation type: "+n.type);const u=s.getChanges();return g4(e,o,u),{viewCache:o,changes:u}}function g4(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=$p(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Ux($p(e)))}}function Qx(t,e,n,r,i,s){const o=e.eventCache;if(Uc(r,n)!=null)return e;{let a,u;if(se(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Wi(e),d=c instanceof J?c:J.EMPTY_NODE,f=p_(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Fc(r,Wi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=re(n);if(c===".priority"){B(Zr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();u=e.serverCache.getNode();const f=U0(r,n,d,u);f!=null?a=t.filter.updatePriority(d,f):a=o.getNode()}else{const d=Ee(n);let f;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const p=U0(r,n,o.getNode(),u);p!=null?f=o.getNode().getImmediateChild(c).updateChild(d,p):f=o.getNode().getImmediateChild(c)}else f=m_(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,d,i,s):a=o.getNode()}}return ya(e,a,o.isFullyInitialized()||se(n),t.filter.filtersNodes())}}function jc(t,e,n,r,i,s,o,a){const u=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(se(n))c=d.updateFullNode(u.getNode(),r,null);else if(d.filtersNodes()&&!u.isFiltered()){const y=u.getNode().updateChild(n,r);c=d.updateFullNode(u.getNode(),y,null)}else{const y=re(n);if(!u.isCompleteForPath(n)&&Zr(n)>1)return e;const I=Ee(n),N=u.getNode().getImmediateChild(y).updateChild(I,r);y===".priority"?c=d.updatePriority(u.getNode(),N):c=d.updateChild(u.getNode(),y,N,I,Kx,null)}const f=zx(e,c,u.isFullyInitialized()||se(n),d.filtersNodes()),p=new g_(i,f,s);return Qx(t,f,n,i,p,a)}function Hp(t,e,n,r,i,s,o){const a=e.eventCache;let u,c;const d=new g_(i,e,s);if(se(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=ya(e,c,!0,t.filter.filtersNodes());else{const f=re(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=ya(e,c,a.isFullyInitialized(),a.isFiltered());else{const p=Ee(n),y=a.getNode().getImmediateChild(f);let I;if(se(p))I=r;else{const A=d.getCompleteChild(f);A!=null?kx(p)===".priority"&&A.getChild(bx(p)).isEmpty()?I=A:I=A.updateChild(p,r):I=J.EMPTY_NODE}if(y.equals(I))u=e;else{const A=t.filter.updateChild(a.getNode(),f,I,p,d,o);u=ya(e,A,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function j0(t,e){return t.eventCache.isCompleteForChild(e)}function _4(t,e,n,r,i,s,o){let a=e;return r.foreach((u,c)=>{const d=Ke(n,u);j0(e,re(d))&&(a=Hp(t,a,d,c,i,s,o))}),r.foreach((u,c)=>{const d=Ke(n,u);j0(e,re(d))||(a=Hp(t,a,d,c,i,s,o))}),a}function B0(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Gp(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;se(n)?c=r:c=new xe(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((f,p)=>{if(d.hasChild(f)){const y=e.serverCache.getNode().getImmediateChild(f),I=B0(t,y,p);u=jc(t,u,new we(f),I,i,s,o,a)}}),c.children.inorderTraversal((f,p)=>{const y=!e.serverCache.isCompleteForChild(f)&&p.value===null;if(!d.hasChild(f)&&!y){const I=e.serverCache.getNode().getImmediateChild(f),A=B0(t,I,p);u=jc(t,u,new we(f),A,i,s,o,a)}}),u}function y4(t,e,n,r,i,s,o){if(Uc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(se(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return jc(t,e,n,u.getNode().getChild(n),i,s,a,o);if(se(n)){let c=new xe(null);return u.getNode().forEachChild(Ds,(d,f)=>{c=c.set(new we(d),f)}),Gp(t,e,n,c,i,s,a,o)}else return e}else{let c=new xe(null);return r.foreach((d,f)=>{const p=Ke(n,d);u.isCompleteForPath(p)&&(c=c.set(d,u.getNode().getChild(p)))}),Gp(t,e,n,c,i,s,a,o)}}function v4(t,e,n,r,i){const s=e.serverCache,o=zx(e,s.getNode(),s.isFullyInitialized()||se(n),s.isFiltered());return Qx(t,o,n,r,Kx,i)}function w4(t,e,n,r,i,s){let o;if(Uc(r,n)!=null)return e;{const a=new g_(r,e,i),u=e.eventCache.getNode();let c;if(se(n)||re(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Fc(r,Wi(e));else{const f=e.serverCache.getNode();B(f instanceof J,"serverChildren would be complete if leaf node"),d=p_(r,f)}d=d,c=t.filter.updateFullNode(u,d,s)}else{const d=re(n);let f=m_(r,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=u.getImmediateChild(d)),f!=null?c=t.filter.updateChild(u,d,f,Ee(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(u,d,J.EMPTY_NODE,Ee(n),a,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Fc(r,Wi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Uc(r,fe())!=null,ya(e,c,o,t.filter.filtersNodes())}}/**
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
 */class E4{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new u_(r.getIndex()),s=jF(r);this.processor_=f4(s);const o=n.serverCache,a=n.eventCache,u=i.updateFullNode(J.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(J.EMPTY_NODE,a.getNode(),null),d=new $i(u,o.isFullyInitialized(),i.filtersNodes()),f=new $i(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=qh(f,d),this.eventGenerator_=new GF(this.query_)}get query(){return this.query_}}function I4(t){return t.viewCache_.serverCache.getNode()}function T4(t,e){const n=Wi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!se(e)&&!n.getImmediateChild(re(e)).isEmpty())?n.getChild(e):null}function z0(t){return t.eventRegistrations_.length===0}function S4(t,e){t.eventRegistrations_.push(e)}function $0(t,e,n){const r=[];if(n){B(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function W0(t,e,n,r){e.type===pn.MERGE&&e.source.queryId!==null&&(B(Wi(t.viewCache_),"We should always have a full cache before handling merges"),B($p(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=m4(t.processor_,i,e,n,r);return p4(t.processor_,s.viewCache),B(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Yx(t,s.changes,s.viewCache.eventCache.getNode(),null)}function C4(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ve,(s,o)=>{r.push(Zs(s,o))}),n.isFullyInitialized()&&r.push(Ux(n.getNode())),Yx(t,r,n.getNode(),e)}function Yx(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return KF(t.eventGenerator_,e,n,i)}/**
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
 */let Bc;class x4{constructor(){this.views=new Map}}function R4(t){B(!Bc,"__referenceConstructor has already been defined"),Bc=t}function A4(){return B(Bc,"Reference.ts has not been loaded"),Bc}function N4(t){return t.views.size===0}function __(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return B(s!=null,"SyncTree gave us an op for an invalid query."),W0(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(W0(o,e,n,r));return s}}function k4(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Fc(n,i?r:null),u=!1;a?u=!0:r instanceof J?(a=p_(n,r),u=!1):(a=J.EMPTY_NODE,u=!1);const c=qh(new $i(a,u,!1),new $i(r,i,!1));return new E4(e,c)}return o}function P4(t,e,n,r,i,s){const o=k4(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),S4(o,n),C4(o,n)}function b4(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=ei(t);if(i==="default")for(const[u,c]of t.views.entries())o=o.concat($0(c,n,r)),z0(c)&&(t.views.delete(u),c.query._queryParams.loadsAllData()||s.push(c.query));else{const u=t.views.get(i);u&&(o=o.concat($0(u,n,r)),z0(u)&&(t.views.delete(i),u.query._queryParams.loadsAllData()||s.push(u.query)))}return a&&!ei(t)&&s.push(new(A4())(e._repo,e._path)),{removed:s,events:o}}function Xx(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Os(t,e){let n=null;for(const r of t.views.values())n=n||T4(r,e);return n}function Jx(t,e){if(e._queryParams.loadsAllData())return Hh(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Zx(t,e){return Jx(t,e)!=null}function ei(t){return Hh(t)!=null}function Hh(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let zc;function D4(t){B(!zc,"__referenceConstructor has already been defined"),zc=t}function O4(){return B(zc,"Reference.ts has not been loaded"),zc}let L4=1;class q0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new xe(null),this.pendingWriteTree_=u4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function eR(t,e,n,r,i){return JF(t.pendingWriteTree_,e,n,r,i),i?Rl(t,new zi(Bx(),e,n)):[]}function Ii(t,e,n=!1){const r=ZF(t.pendingWriteTree_,e);if(e4(t.pendingWriteTree_,e)){let s=new xe(null);return r.snap!=null?s=s.set(fe(),!0):zt(r.children,o=>{s=s.set(new we(o),!0)}),Rl(t,new Vc(r.path,s,n))}else return[]}function Gh(t,e,n){return Rl(t,new zi(h_(),e,n))}function M4(t,e,n){const r=xe.fromObject(n);return Rl(t,new sl(h_(),e,r))}function V4(t,e){return Rl(t,new il(h_(),e))}function F4(t,e,n){const r=v_(t,n);if(r){const i=w_(r),s=i.path,o=i.queryId,a=Lt(s,e),u=new il(d_(o),a);return E_(t,s,u)}else return[]}function Kp(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Zx(o,e))){const u=b4(o,e,n,r);N4(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=u.removed;if(a=u.events,!i){const d=c.findIndex(p=>p._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(p,y)=>ei(y));if(d&&!f){const p=t.syncPointTree_.subtree(s);if(!p.isEmpty()){const y=B4(p);for(let I=0;I<y.length;++I){const A=y[I],N=A.query,T=rR(t,A);t.listenProvider_.startListening(wa(N),$c(t,N),T.hashFn,T.onComplete)}}}!f&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(wa(e),null):c.forEach(p=>{const y=t.queryToTagMap.get(Kh(p));t.listenProvider_.stopListening(wa(p),y)}))}z4(t,c)}return a}function U4(t,e,n,r){const i=v_(t,r);if(i!=null){const s=w_(i),o=s.path,a=s.queryId,u=Lt(o,e),c=new zi(d_(a),u,n);return E_(t,o,c)}else return[]}function j4(t,e,n,r){const i=v_(t,r);if(i){const s=w_(i),o=s.path,a=s.queryId,u=Lt(o,e),c=xe.fromObject(n),d=new sl(d_(a),u,c);return E_(t,o,d)}else return[]}function H0(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(p,y)=>{const I=Lt(p,i);s=s||Os(y,I),o=o||ei(y)});let a=t.syncPointTree_.get(i);a?(o=o||ei(a),s=s||Os(a,fe())):(a=new x4,t.syncPointTree_=t.syncPointTree_.set(i,a));let u;s!=null?u=!0:(u=!1,s=J.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((y,I)=>{const A=Os(I,fe());A&&(s=s.updateImmediateChild(y,A))}));const c=Zx(a,e);if(!c&&!e._queryParams.loadsAllData()){const p=Kh(e);B(!t.queryToTagMap.has(p),"View does not exist, but we have a tag");const y=$4();t.queryToTagMap.set(p,y),t.tagToQueryMap.set(y,p)}const d=f_(t.pendingWriteTree_,i);let f=P4(a,e,n,d,s,u);if(!c&&!o&&!r){const p=Jx(a,e);f=f.concat(W4(t,e,p))}return f}function y_(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=Lt(o,e),c=Os(a,u);if(c)return c});return qx(i,e,s,n,!0)}function Rl(t,e){return tR(e,t.syncPointTree_,null,f_(t.pendingWriteTree_,fe()))}function tR(t,e,n,r){if(se(t.path))return nR(t,e,n,r);{const i=e.get(fe());n==null&&i!=null&&(n=Os(i,fe()));let s=[];const o=re(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,d=Hx(r,o);s=s.concat(tR(a,u,c,d))}return i&&(s=s.concat(__(i,t,r,n))),s}}function nR(t,e,n,r){const i=e.get(fe());n==null&&i!=null&&(n=Os(i,fe()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=Hx(r,o),d=t.operationForChild(o);d&&(s=s.concat(nR(d,a,u,c)))}),i&&(s=s.concat(__(i,t,r,n))),s}function rR(t,e){const n=e.query,r=$c(t,n);return{hashFn:()=>(I4(e)||J.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?F4(t,n._path,r):V4(t,n._path);{const s=UV(i,n);return Kp(t,n,null,s)}}}}function $c(t,e){const n=Kh(e);return t.queryToTagMap.get(n)}function Kh(t){return t._path.toString()+"$"+t._queryIdentifier}function v_(t,e){return t.tagToQueryMap.get(e)}function w_(t){const e=t.indexOf("$");return B(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new we(t.substr(0,e))}}function E_(t,e,n){const r=t.syncPointTree_.get(e);B(r,"Missing sync point for query tag that we're tracking");const i=f_(t.pendingWriteTree_,e);return __(r,n,i,null)}function B4(t){return t.fold((e,n,r)=>{if(n&&ei(n))return[Hh(n)];{let i=[];return n&&(i=Xx(n)),zt(r,(s,o)=>{i=i.concat(o)}),i}})}function wa(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(O4())(t._repo,t._path):t}function z4(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Kh(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function $4(){return L4++}function W4(t,e,n){const r=e._path,i=$c(t,e),s=rR(t,n),o=t.listenProvider_.startListening(wa(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)B(!ei(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((c,d,f)=>{if(!se(c)&&d&&ei(d))return[Hh(d).query];{let p=[];return d&&(p=p.concat(Xx(d).map(y=>y.query))),zt(f,(y,I)=>{p=p.concat(I)}),p}});for(let c=0;c<u.length;++c){const d=u[c];t.listenProvider_.stopListening(wa(d),$c(t,d))}}return o}/**
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
 */class I_{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new I_(n)}node(){return this.node_}}class T_{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ke(this.path_,e);return new T_(this.syncTree_,n)}node(){return y_(this.syncTree_,this.path_)}}const q4=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},G0=function(t,e,n){if(!t||typeof t!="object")return t;if(B(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return H4(t[".sv"],e,n);if(typeof t[".sv"]=="object")return G4(t[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},H4=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+t)}},G4=function(t,e,n){t.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&B(!1,"Unexpected increment value: "+r);const i=e.node();if(B(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},K4=function(t,e,n,r){return S_(e,new T_(n,t),r)},iR=function(t,e,n){return S_(t,new I_(e),n)};function S_(t,e,n){const r=t.getPriority().val(),i=G0(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=G0(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Je(a,ot(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Je(i))),o.forEachChild(Ve,(a,u)=>{const c=S_(u,e.getImmediateChild(a),n);c!==u&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class C_{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function x_(t,e){let n=e instanceof we?e:new we(e),r=t,i=re(n);for(;i!==null;){const s=zs(r.node.children,i)||{children:{},childCount:0};r=new C_(i,r,s),n=Ee(n),i=re(n)}return r}function go(t){return t.node.value}function sR(t,e){t.node.value=e,Qp(t)}function oR(t){return t.node.childCount>0}function Q4(t){return go(t)===void 0&&!oR(t)}function Qh(t,e){zt(t.node.children,(n,r)=>{e(new C_(n,t,r))})}function aR(t,e,n,r){n&&!r&&e(t),Qh(t,i=>{aR(i,e,!0,r)}),n&&r&&e(t)}function Y4(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Al(t){return new we(t.parent===null?t.name:Al(t.parent)+"/"+t.name)}function Qp(t){t.parent!==null&&X4(t.parent,t.name,t)}function X4(t,e,n){const r=Q4(n),i=pr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Qp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Qp(t))}/**
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
 */const J4=/[\[\].#$\/\u0000-\u001F\u007F]/,Z4=/[\[\].#$\u0000-\u001F\u007F]/,pf=10*1024*1024,lR=function(t){return typeof t=="string"&&t.length!==0&&!J4.test(t)},uR=function(t){return typeof t=="string"&&t.length!==0&&!Z4.test(t)},eU=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),uR(t)},tU=function(t,e,n,r){R_(Jm(t,"value"),e,n)},R_=function(t,e,n){const r=n instanceof we?new yF(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+gi(r));if(typeof e=="function")throw new Error(t+"contains a function "+gi(r)+" with contents = "+e.toString());if(ux(e))throw new Error(t+"contains "+e.toString()+" "+gi(r));if(typeof e=="string"&&e.length>pf/3&&_h(e)>pf)throw new Error(t+"contains a string greater than "+pf+" utf8 bytes "+gi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(zt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!lR(o)))throw new Error(t+" contains an invalid key ("+o+") "+gi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);vF(r,o),R_(t,a,r),wF(r)}),i&&s)throw new Error(t+' contains ".value" child '+gi(r)+" in addition to actual children.")}},cR=function(t,e,n,r){if(!uR(n))throw new Error(Jm(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},nU=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),cR(t,e,n)},rU=function(t,e){if(re(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},iU=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!lR(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!eU(n))throw new Error(Jm(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class sU{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function A_(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!o_(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function hR(t,e,n){A_(t,n),dR(t,r=>o_(r,e))}function dr(t,e,n){A_(t,n),dR(t,r=>fn(r,e)||fn(e,r))}function dR(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(oU(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function oU(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ga&&It("event: "+n.toString()),mo(r)}}}/**
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
 */const aU="repo_interrupt",lU=25;class uU{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new sU,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Mc(),this.transactionQueueTree_=new C_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function cU(t,e,n){if(t.stats_=i_(t.repoInfo_),t.forceRestClient_||$V())t.server_=new Lc(t.repoInfo_,(r,i,s,o)=>{K0(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Q0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{nt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new nr(t.repoInfo_,e,(r,i,s,o)=>{K0(t,r,i,s,o)},r=>{Q0(t,r)},r=>{dU(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=KV(t.repoInfo_,()=>new HF(t.stats_,t.server_)),t.infoData_=new BF,t.infoSyncTree_=new q0({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=Gh(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),k_(t,"connected",!1),t.serverSyncTree_=new q0({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const c=o(a,u);dr(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function hU(t){const n=t.infoData_.getNode(new we(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function N_(t){return q4({timestamp:hU(t)})}function K0(t,e,n,r,i){t.dataUpdateCount++;const s=new we(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=pc(n,c=>ot(c));o=j4(t.serverSyncTree_,s,u,i)}else{const u=ot(n);o=U4(t.serverSyncTree_,s,u,i)}else if(r){const u=pc(n,c=>ot(c));o=M4(t.serverSyncTree_,s,u)}else{const u=ot(n);o=Gh(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=Yh(t,s)),dr(t.eventQueue_,a,o)}function Q0(t,e){k_(t,"connected",e),e===!1&&pU(t)}function dU(t,e){zt(e,(n,r)=>{k_(t,n,r)})}function k_(t,e,n){const r=new we("/.info/"+e),i=ot(n);t.infoData_.updateSnapshot(r,i);const s=Gh(t.infoSyncTree_,r,i);dr(t.eventQueue_,r,s)}function fR(t){return t.nextWriteId_++}function fU(t,e,n,r,i){P_(t,"set",{path:e.toString(),value:n,priority:r});const s=N_(t),o=ot(n,r),a=y_(t.serverSyncTree_,e),u=iR(o,a,s),c=fR(t),d=eR(t.serverSyncTree_,e,u,c,!0);A_(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(p,y)=>{const I=p==="ok";I||Bt("set at "+e+" failed: "+p);const A=Ii(t.serverSyncTree_,c,!I);dr(t.eventQueue_,e,A),yU(t,i,p,y)});const f=yR(t,e);Yh(t,f),dr(t.eventQueue_,f,[])}function pU(t){P_(t,"onDisconnectEvents");const e=N_(t),n=Mc();zp(t.onDisconnect_,fe(),(i,s)=>{const o=K4(i,s,t.serverSyncTree_,e);jx(n,i,o)});let r=[];zp(n,fe(),(i,s)=>{r=r.concat(Gh(t.serverSyncTree_,i,s));const o=yR(t,i);Yh(t,o)}),t.onDisconnect_=Mc(),dr(t.eventQueue_,fe(),r)}function mU(t,e,n){let r;re(e._path)===".info"?r=H0(t.infoSyncTree_,e,n):r=H0(t.serverSyncTree_,e,n),hR(t.eventQueue_,e._path,r)}function gU(t,e,n){let r;re(e._path)===".info"?r=Kp(t.infoSyncTree_,e,n):r=Kp(t.serverSyncTree_,e,n),hR(t.eventQueue_,e._path,r)}function _U(t){t.persistentConnection_&&t.persistentConnection_.interrupt(aU)}function P_(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),It(n,...e)}function yU(t,e,n,r){e&&mo(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function pR(t,e,n){return y_(t.serverSyncTree_,e,n)||J.EMPTY_NODE}function b_(t,e=t.transactionQueueTree_){if(e||Xh(t,e),go(e)){const n=gR(t,e);B(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&vU(t,Al(e),n)}else oR(e)&&Qh(e,n=>{b_(t,n)})}function vU(t,e,n){const r=n.map(c=>c.currentWriteId),i=pR(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];B(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=Lt(e,d.path);s=s.updateChild(f,d.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,c=>{P_(t,"transaction put response",{path:u.toString(),status:c});let d=[];if(c==="ok"){const f=[];for(let p=0;p<n.length;p++)n[p].status=2,d=d.concat(Ii(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&f.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();Xh(t,x_(t.transactionQueueTree_,e)),b_(t,t.transactionQueueTree_),dr(t.eventQueue_,e,d);for(let p=0;p<f.length;p++)mo(f[p])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Bt("transaction at "+u.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Yh(t,e)}},o)}function Yh(t,e){const n=mR(t,e),r=Al(n),i=gR(t,n);return wU(t,i,r),r}function wU(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=Lt(n,u.path);let d=!1,f;if(B(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)d=!0,f=u.abortReason,i=i.concat(Ii(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=lU)d=!0,f="maxretry",i=i.concat(Ii(t.serverSyncTree_,u.currentWriteId,!0));else{const p=pR(t,u.path,o);u.currentInputSnapshot=p;const y=e[a].update(p.val());if(y!==void 0){R_("transaction failed: Data returned ",y,u.path);let I=ot(y);typeof y=="object"&&y!=null&&pr(y,".priority")||(I=I.updatePriority(p.getPriority()));const N=u.currentWriteId,T=N_(t),w=iR(I,p,T);u.currentOutputSnapshotRaw=I,u.currentOutputSnapshotResolved=w,u.currentWriteId=fR(t),o.splice(o.indexOf(N),1),i=i.concat(eR(t.serverSyncTree_,u.path,w,u.currentWriteId,u.applyLocally)),i=i.concat(Ii(t.serverSyncTree_,N,!0))}else d=!0,f="nodata",i=i.concat(Ii(t.serverSyncTree_,u.currentWriteId,!0))}dr(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Xh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)mo(r[a]);b_(t,t.transactionQueueTree_)}function mR(t,e){let n,r=t.transactionQueueTree_;for(n=re(e);n!==null&&go(r)===void 0;)r=x_(r,n),e=Ee(e),n=re(e);return r}function gR(t,e){const n=[];return _R(t,e,n),n.sort((r,i)=>r.order-i.order),n}function _R(t,e,n){const r=go(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Qh(e,i=>{_R(t,i,n)})}function Xh(t,e){const n=go(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,sR(e,n.length>0?n:void 0)}Qh(e,r=>{Xh(t,r)})}function yR(t,e){const n=Al(mR(t,e)),r=x_(t.transactionQueueTree_,e);return Y4(r,i=>{mf(t,i)}),mf(t,r),aR(r,i=>{mf(t,i)}),n}function mf(t,e){const n=go(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(B(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(B(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ii(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?sR(e,void 0):n.length=s+1,dr(t.eventQueue_,Al(e),i);for(let o=0;o<r.length;o++)mo(r[o])}}/**
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
 */function EU(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function IU(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Bt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Y0=function(t,e){const n=TU(t),r=n.namespace;n.domain==="firebase.com"&&hr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&hr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||OV();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ex(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new we(n.pathString)}},TU=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(d,f)),d<f&&(i=EU(t.substring(d,f)));const p=IU(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const y=e.slice(0,c);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const I=e.indexOf(".");r=e.substring(0,I).toLowerCase(),n=e.substring(I+1),s=r}"ns"in p&&(s=p.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class SU{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+nt(this.snapshot.exportVal())}}class CU{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class xU{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return B(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return se(this._path)?null:kx(this._path)}get ref(){return new li(this._repo,this._path)}get _queryIdentifier(){const e=O0(this._queryParams),n=n_(e);return n==="{}"?"default":n}get _queryObject(){return O0(this._queryParams)}isEqual(e){if(e=me(e),!(e instanceof D_))return!1;const n=this._repo===e._repo,r=o_(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+_F(this._path)}}class li extends D_{constructor(e,n){super(e,n,new c_,!1)}get parent(){const e=bx(this._path);return e===null?null:new li(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Wc{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new we(e),r=Yp(this.ref,e);return new Wc(this._node.getChild(n),r,Ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Wc(i,Yp(this.ref,r),Ve)))}hasChild(e){const n=new we(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function X0(t,e){return t=me(t),t._checkNotDeleted("ref"),e!==void 0?Yp(t._root,e):t._root}function Yp(t,e){return t=me(t),re(t._path)===null?nU("child","path",e):cR("child","path",e),new li(t._repo,Ke(t._path,e))}function RU(t,e){t=me(t),rU("set",t._path),tU("set",e,t._path);const n=new gh;return fU(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class O_{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new SU("value",this,new Wc(e.snapshotNode,new li(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new CU(this,e,n):null}matches(e){return e instanceof O_?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function AU(t,e,n,r,i){const s=new xU(n,void 0),o=new O_(s);return mU(t._repo,t,o),()=>gU(t._repo,t,o)}function NU(t,e,n,r){return AU(t,"value",e)}R4(li);D4(li);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kU="FIREBASE_DATABASE_EMULATOR_HOST",Xp={};let PU=!1;function bU(t,e,n,r){t.repoInfo_=new Ex(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function DU(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||hr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),It("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Y0(s,i),a=o.repoInfo,u;typeof process<"u"&&g0&&(u=g0[kU]),u?(s=`http://${u}?ns=${a.namespace}`,o=Y0(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new qV(t.name,t.options,e);iU("Invalid Firebase Database URL",o),se(o.path)||hr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=LU(a,t,c,new WV(t.name,n));return new MU(d,t)}function OU(t,e){const n=Xp[e];(!n||n[t.key]!==t)&&hr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),_U(t),delete n[t.key]}function LU(t,e,n,r){let i=Xp[e.name];i||(i={},Xp[e.name]=i);let s=i[t.toURLString()];return s&&hr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new uU(t,PU,n,r),i[t.toURLString()]=s,s}class MU{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(cU(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new li(this._repo,fe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(OU(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&hr("Cannot call "+e+" on a deleted database.")}}function VU(t=vh(),e){const n=dl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Qm("database");r&&FU(n,...r)}return n}function FU(t,e,n,r={}){t=me(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&hr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&hr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ju(ju.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Ym(r.mockUserToken,t.app.options.projectId);s=new ju(o)}bU(i,e,n,s)}/**
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
 */function UU(t){AV(ii),Kr(new ar("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return DU(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),nn(_0,y0,t),nn(_0,y0,"esm2017")}nr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};nr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};UU();const jU={apiKey:"AIzaSyC_G-cV2z_RbVO7rjGB9o7e9pZ0nsavtTQ",authDomain:"skwebsite-df527.firebaseapp.com",databaseURL:"https://skwebsite-df527-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"skwebsite-df527",storageBucket:"skwebsite-df527.appspot.com",messagingSenderId:"950246300063",appId:"1:950246300063:web:1d3dacc9f19b89e84205aa",measurementId:"G-NZPHQLT27P"},Jh=UT(jU),be=rM(Jh),qc=Sh(Jh);new Hn;const Hc=sx(Jh),J0=VU(Jh),BU=({onClose:t})=>{const[e,n]=O.useState(""),[r,i]=O.useState(""),[s,o]=O.useState(!0),[a,u]=O.useState(null),c=async()=>{try{await Zb(qc,e,r),alert("Sign up successful!"),t()}catch(f){f instanceof Error?u(f.message):u("An unknown error occurred"),console.error("Error signing up:",f)}},d=async()=>{try{await eD(qc,e,r),alert("Sign in successful!"),t()}catch(f){f instanceof Error?u(f.message):u("An unknown error occurred"),console.error("Error signing in:",f)}};return g.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center",children:g.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative",children:[g.jsx("button",{onClick:t,className:"absolute top-2 right-2 text-gray-600 hover:text-gray-900",children:"×"}),g.jsx("h2",{className:"text-xl font-bold mb-4 text-center",children:s?"Sign Up":"Sign In"}),g.jsx("input",{type:"email",placeholder:"Email",value:e,onChange:f=>n(f.target.value),className:"border p-2 mb-2 rounded w-full"}),g.jsx("input",{type:"password",placeholder:"Password",value:r,onChange:f=>i(f.target.value),className:"border p-2 mb-4 rounded w-full"}),g.jsxs("div",{className:"flex flex-col items-center",children:[s?g.jsx("button",{onClick:c,className:"bg-slate-950 border rounded-full text-white px-4 py-2 transition-transform duration-300 ease-in-out hover:bg-[#2a2388] hover:scale-105",children:"Sign Up"}):g.jsx("button",{onClick:d,className:"bg-slate-950 border rounded-full text-white px-4 py-2 transition-transform duration-300 ease-in-out hover:bg-[#2a2388] hover:scale-105",children:"Sign In"}),a&&g.jsx("p",{className:"text-red-500 mt-2",children:a}),g.jsx("button",{onClick:()=>o(!s),className:"mt-4 text-blue-500 underline",children:s?"Already have an account? Sign In":"Need an account? Sign Up"})]})]})})},zU=()=>{const{closeAuthModal:t}=wR();return g.jsxs("div",{children:[g.jsx("button",{onClick:t,className:"bg-slate-950 text-white px-4 py-2 rounded",children:"Close Auth Modal"}),g.jsx(BU,{onClose:t})]})},vR=O.createContext(void 0),$U=({children:t})=>{const[e,n]=O.useState(null),[r,i]=O.useState(!1);O.useEffect(()=>{const u=ag(qc,c=>{n(c),c&&sessionStorage.getItem("shouldReload")==="true"&&(sessionStorage.removeItem("shouldReload"),window.location.reload())});return()=>u()},[]);const s=()=>i(!0),o=()=>i(!1),a=async()=>{try{sessionStorage.setItem("shouldReload","true"),await rD(qc),window.location.reload()}catch(u){console.error("Error signing out:",u)}};return g.jsxs(vR.Provider,{value:{user:e,isAuthOpen:r,openAuthModal:s,closeAuthModal:o,signOut:a},children:[t,r&&g.jsx(zU,{})]})},wR=()=>{const t=O.useContext(vR);if(t===void 0)throw new Error("useAuth must be used within an AuthProvider");return t},Z0=({label:t,onClick:e,className:n})=>g.jsx("button",{onClick:e,className:`${n} px-4 py-2 transition-transform duration-300 ease-in-out hover:scale-105`,children:t}),Gc=({transparent:t})=>{const{user:e,openAuthModal:n,signOut:r}=wR();return g.jsx("div",{children:e?g.jsx(Z0,{label:"Sign Out",onClick:r,className:"bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"}):g.jsx(Z0,{label:"Sign Up",onClick:n,className:`${t?"bg-transparent border border-black text-black":"bg-slate-950 text-white"}`})})},WU=()=>g.jsx("button",{className:"bg-slate-950 border text-white px-4 py-2 transition-transform duration-300 ease-in-out hover:bg-[#2a2388] hover:scale-105 cursor-pointer mb-4",children:"Learn More"});var ER={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},eE=br.createContext&&br.createContext(ER),qU=["attr","size","title"];function HU(t,e){if(t==null)return{};var n=GU(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function GU(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Kc(){return Kc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Kc.apply(this,arguments)}function tE(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Qc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?tE(Object(n),!0).forEach(function(r){KU(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):tE(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function KU(t,e,n){return e=QU(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function QU(t){var e=YU(t,"string");return typeof e=="symbol"?e:e+""}function YU(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function IR(t){return t&&t.map((e,n)=>br.createElement(e.tag,Qc({key:n},e.attr),IR(e.child)))}function XU(t){return e=>br.createElement(JU,Kc({attr:Qc({},t.attr)},e),IR(t.child))}function JU(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=HU(t,qU),a=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),br.createElement("svg",Kc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:Qc(Qc({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&br.createElement("title",null,s),t.children)};return eE!==void 0?br.createElement(eE.Consumer,null,n=>e(n)):e(ER)}function nE(t){return XU({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z"},child:[]}]})(t)}const TR=()=>{const[t,e]=O.useState(!1),[n,r]=O.useState(!1),[i,s]=O.useState(!1),o=sk(),a=Gm();O.useEffect(()=>{const y=localStorage.getItem("isAdminLoggedIn");s(y==="true")},[]);const u=()=>{e(!t)},c=y=>{const I=document.getElementById(y);if(I){const T=I.getBoundingClientRect().top+window.pageYOffset-75;window.scrollTo({top:T,behavior:"smooth"})}t&&u()},d=()=>{s(!1),localStorage.removeItem("isAdminLoggedIn"),o("/")},f=[...Sk,...i?[{name:"Admin",id:"admin"}]:[]],p=y=>{y.id==="admin"?o("/admin"):a.pathname==="/admin"?o("/"):c(y.id),t&&u()};return g.jsxs(g.Fragment,{children:[g.jsx("div",{className:`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${n?"block":"hidden"}`}),g.jsx("div",{className:`fixed inset-0 bg-black bg-opacity-50 z-40 transform ${t?"translate-x-0":"-translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`,children:g.jsxs("div",{className:"w-64 h-full bg-gradient-to-r from-[#e3f9ff] to-[#b5e8ff] p-4 relative flex flex-col",children:[g.jsx("button",{className:"text-black font-bold text-2xl self-end",onClick:u,children:"×"}),g.jsx("ul",{className:"mt-12 flex flex-col space-y-4",children:f.map((y,I)=>g.jsx("li",{className:"text-black font-bold cursor-pointer font-serif hover:bg-gradient-to-r hover:from-orange-400 hover:to-blue-900 hover:text-transparent hover:bg-clip-text transition duration-300 ease-in-out",onClick:()=>p(y),children:y.name},I))}),g.jsx("div",{className:"mt-8",children:g.jsx(Gc,{transparent:!0})})]})}),g.jsxs("nav",{className:"bg-white p-4 fixed w-full z-30 flex items-center justify-between h-[75px]",children:[g.jsx("div",{className:"flex items-center",children:g.jsx("img",{src:xT,alt:"Logo",className:"cursor-pointer h-12 md:h-16",onClick:()=>c("home")})}),g.jsxs("div",{className:"flex items-center",children:[g.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[g.jsx("ul",{className:"flex items-center space-x-4 md:space-x-8",children:f.map((y,I)=>g.jsx("li",{className:"text-black font-bold cursor-pointer font-serif hover:bg-gradient-to-r hover:from-orange-400 hover:to-blue-900 hover:text-transparent hover:bg-clip-text transition duration-300 ease-in-out",onClick:()=>p(y),children:y.name},I))}),g.jsxs("div",{className:"flex items-center space-x-4",children:[g.jsx(Gc,{transparent:!0}),i?g.jsxs("button",{onClick:d,className:"flex items-center bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-300 ease-in-out",children:[g.jsx(nE,{className:"mr-2"})," Log Out"]}):g.jsxs("button",{onClick:()=>r(!0),className:"flex items-center bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out",children:[g.jsx(nE,{className:"mr-2"})," Admin"]})]})]}),g.jsx("div",{className:"md:hidden",children:g.jsx("button",{className:"text-black font-bold text-2xl","aria-label":"Open Sidebar",onClick:u,children:"☰"})})]})]}),g.jsx("div",{className:"pt-[75px]"})]})},ZU="/SkWeb/assets/bg-DjAPkPKg.jpg",ej=()=>{const[t,e]=O.useState(!1);return O.useEffect(()=>{const n=Sh(),r=ag(n,i=>{e(!!i)});return()=>r()},[]),g.jsxs("div",{className:"relative w-full h-screen",id:"home",children:[g.jsx("div",{className:"absolute inset-0 bg-cover bg-center",style:{backgroundImage:`url(${ZU})`,backgroundRepeat:"no-repeat"},children:g.jsx("div",{className:"absolute inset-0 bg-blue-800 opacity-50"})}),g.jsxs("div",{className:"relative flex flex-col items-center justify-center h-full max-w-4xl mx-auto text-center text-white p-4 md:p-8",children:[g.jsxs("div",{className:"mb-4",children:[g.jsx("h1",{className:"font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl p-2",children:"Empowerment Youth for a Better Future"}),g.jsx("p",{className:"text-base md:text-xl",children:"Welcome to the official website of Sangguniang Kabataan, where we aim to provide opportunities, support, and representation for the youth in our community."})]}),!t&&g.jsxs("div",{className:"flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 mt-4",children:[g.jsx(WU,{}),g.jsx(Gc,{})]})]})]})},tj=({service:t,formData:e,handleInputChange:n,handleFileChange:r,handleSubmit:i,closeForm:s})=>{const o=u=>e&&e[u]!==void 0?e[u]:"",a=()=>t.formFields.map((u,c)=>{const d=o(u.label);switch(u.type){case"textarea":return g.jsx("textarea",{placeholder:u.label,className:"block w-full mb-2 p-2 border border-gray-300 rounded",value:d,onChange:f=>n(u.label,f.target.value)},c);case"file":return g.jsx("input",{type:"file",className:"block w-full mb-2",onChange:f=>r(u.label,f.target.files?f.target.files[0]:null)},c);default:return g.jsx("input",{type:u.type,placeholder:u.label,className:"block w-full mb-2 p-2 border border-gray-300 rounded",value:d,onChange:f=>n(u.label,f.target.value)},c)}});return g.jsxs("div",{className:"p-6",children:[g.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Service Form"}),g.jsxs("form",{onSubmit:u=>{u.preventDefault(),i()},children:[a(),g.jsx("button",{type:"submit",className:"bg-green-500 text-white p-3 rounded w-full",children:"Submit"}),g.jsx("button",{type:"button",onClick:s,className:"mt-2 bg-gray-500 text-white p-3 rounded w-full",children:"Cancel"})]})]})},nj=({service:t,onClose:e,openServiceForm:n})=>{const[r,i]=O.useState(0),s=t.imageUrl.split(",").map(u=>u.trim()),o=()=>{i(u=>u>0?u-1:s.length-1)},a=()=>{i(u=>u<s.length-1?u+1:0)};return s.length===0?g.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50",children:g.jsxs("div",{className:"bg-white p-4 sm:p-5 rounded-lg w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 max-w-md relative h-[600px] overflow-y-auto",children:[g.jsx("button",{onClick:e,className:"absolute top-2 right-2 text-gray-600 text-2xl sm:text-3xl font-bold focus:outline-none",children:"×"}),g.jsx("h2",{className:"text-xl sm:text-2xl font-bold mb-2 sm:mb-3",children:t.title}),g.jsx("p",{className:"text-sm sm:text-base mb-2 sm:mb-3",children:t.description}),g.jsx("p",{className:"text-sm sm:text-base",children:"No images available"}),g.jsx("button",{onClick:n,className:"bg-blue-500 text-white p-2 sm:p-3 rounded w-full mt-4",children:"Open Service Form"})]})}):g.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50",children:g.jsxs("div",{className:"bg-white p-4 sm:p-6 rounded-lg w-[80%] sm:w-[60%] md:w-2/3 lg:w-1/2 max-w-md relative h-[600px] overflow-y-auto",children:[g.jsx("button",{onClick:e,className:"absolute top-2 right-2 text-gray-600 text-2xl sm:text-3xl font-bold focus:outline-none",children:"×"}),g.jsxs("div",{className:"relative mb-6 mt-10",children:[" ",g.jsx("img",{src:s[r],alt:`Service Image ${r+1}`,className:"w-[250px] h-[250px] max-w-full max-h-[250px] rounded-lg mx-auto"}),s.length>1&&g.jsxs("div",{className:"absolute inset-0 flex justify-between items-center",children:[g.jsx("button",{onClick:o,className:"bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100 text-lg sm:text-xl",children:"◀"}),g.jsx("button",{onClick:a,className:"bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100 text-lg sm:text-xl",children:"▶"})]})]}),g.jsx("h2",{className:"text-xl sm:text-2xl font-bold mb-2 sm:mb-3",children:t.title}),g.jsx("p",{className:"text-sm sm:text-base mb-2 sm:mb-3",children:t.description}),g.jsx("button",{onClick:n,className:"bg-blue-500 text-white p-2 sm:p-3 rounded w-full mt-4",children:"Open Service Form"})]})})},rj=()=>{const[t,e]=O.useState([]),[n,r]=O.useState(null),[i,s]=O.useState(!1),[o,a]=O.useState({}),[u,c]=O.useState({}),[d,f]=O.useState(!0),[p,y]=O.useState(!1),I=jt(be,"services"),A=jt(be,"applications"),N=async()=>{try{f(!0);const E=(await Ui(I)).docs.map(C=>({...C.data(),id:C.id}));e(E),y(!0),f(!1)}catch(_){console.error("Error fetching services:",_),f(!1)}};O.useEffect(()=>{p||N()},[p]);const T=(_,E)=>{c({...u,[_]:E})},w=async _=>{try{let E={serviceId:_,...o[_]};if(u[_]){const C=Za(Hc,`applications/${_}/${u[_].name}`);await Xa(C,u[_]);const k=await Ja(C);E={...E,fileURL:k}}await fo(A,E),alert("Application submitted!"),r(null),a(C=>({...C,[_]:{}})),c(C=>({...C,[_]:null}))}catch(E){console.error("Error submitting application:",E)}},x=(_,E,C)=>{a({...o,[_]:{...o[_],[E]:C}})},D=_=>{r(_)},L=()=>{r(null)},F=()=>{s(!0)},S=()=>{s(!1)};return g.jsxs("div",{className:"p-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:[d?g.jsx("p",{children:"Loading services..."}):t.length===0?g.jsx("p",{children:"No services available."}):t.map(_=>g.jsxs("div",{className:"flex flex-col items-center text-center border-2 border-gray-200 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer",onClick:()=>D(_),children:[g.jsx("div",{className:"w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-300 bg-gray-200",style:{backgroundImage:`url(${_.imageUrl})`,backgroundSize:"cover",backgroundPosition:"center"}}),g.jsxs("div",{className:"mt-4",children:[g.jsx("h3",{className:"text-lg md:text-xl font-bold",children:_.title}),g.jsx("p",{className:"text-sm md:text-base mt-2",children:_.description})]})]},_.id)),n&&g.jsx(nj,{service:n,onClose:L,openServiceForm:F}),i&&n&&g.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50",children:g.jsx("div",{className:"bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3 max-w-lg relative",children:g.jsx(tj,{service:n,formData:o[n.id]||{},handleInputChange:(_,E)=>x(n.id,_,E),handleFileChange:(_,E)=>T(n.id,E),handleSubmit:()=>w(n.id),closeForm:S})})})]})},ij=()=>g.jsxs("div",{className:"p-4 md:p-8 min-h-screen bg-gray-100",children:[g.jsxs("div",{className:"  p-8 rounded-lg  mb-8",children:[g.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-center mb-4",children:"Services and Programs that Make a Difference"}),g.jsx("p",{className:"text-lg text-center max-w-5xl mx-auto",children:"Welcome to the Sangguniang Kabataan Website. We are dedicated to empowering the youth and creating positive change in our community. Explore our initiatives and programs to learn how you can get involved."})]}),g.jsx(rj,{})]}),sj=({isOpen:t,onClose:e,children:n})=>t?g.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",children:g.jsxs("div",{className:"bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-sm md:max-w-lg relative h-[600px]",children:[" ",g.jsx("button",{className:"absolute top-2 right-2 text-gray-600 text-2xl md:text-2xl font-bold focus:outline-none z-60",onClick:e,children:"×"}),g.jsx("div",{className:"p-4 md:p-6 h-full overflow-auto",children:n})]})}):null,oj=({newsletter:t})=>{const[e,n]=O.useState(!1),r=()=>{n(!0)},i=()=>{n(!1)},s=(o,a)=>o.length>a?`${o.substring(0,a)}...`:o;return g.jsxs(g.Fragment,{children:[g.jsxs("div",{onClick:r,className:"bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer",children:[g.jsx("img",{src:t.imageUrl,alt:t.title,className:"w-full h-32 sm:h-48 object-cover"}),g.jsxs("div",{className:"p-4",children:[g.jsx("h2",{className:"text-lg sm:text-xl font-bold mb-2",children:t.title}),g.jsx("p",{className:"text-gray-700 mb-4",children:s(t.description,window.innerWidth<640?50:100)}),t.link&&g.jsx("a",{href:t.link,className:"text-blue-500 hover:underline cursor-pointer",children:"Read More →"})]})]}),g.jsxs(sj,{isOpen:e,onClose:i,children:[g.jsx("img",{src:t.imageUrl,alt:t.title,className:"w-full h-64 object-cover mb-4"}),g.jsx("h2",{className:"text-xl font-bold mb-2",children:t.title}),g.jsx("p",{className:"text-gray-700 mb-4",children:t.description}),g.jsx("p",{className:"text-gray-700 mb-4",children:t.fullContent})]})]})},aj=()=>{const[t,e]=O.useState([]),[n,r]=O.useState(!1),i=jt(be,"newsletters");return O.useEffect(()=>{(async()=>{try{if(n)return;const o=await Ui(i);e(o.docs.map(a=>({...a.data(),id:a.id}))),r(!0)}catch(o){console.error("Error fetching newsletters:",o)}})()},[n,i]),g.jsxs("div",{className:"p-4 md:p-8 min-h-screen bg-gray-100",children:[g.jsx("h1",{className:"text-2xl md:text-3xl font-bold mb-4",children:"Stay Updated with Us"}),g.jsx("p",{className:"text-base md:text-lg mb-8",children:"Get the latest news and updates on youth and community initiatives."}),g.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8",children:["  ",t.map(s=>g.jsx(oj,{newsletter:s},s.id))]})]})},lj=({eventName:t,onClose:e})=>{const[n,r]=O.useState(""),[i,s]=O.useState(""),[o,a]=O.useState(""),[u,c]=O.useState(""),d=async f=>{if(f.preventDefault(),!t){console.error("Event name is missing"),alert("Event name is required.");return}try{await fo(jt(be,"attendance"),{eventName:t,email:n,fullName:i,age:o,address:u,timestamp:new Date().toISOString()}),alert("Attendance recorded successfully!"),e()}catch(p){console.error("Error recording attendance:",p),alert("Failed to record attendance.")}};return g.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50",children:g.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg w-96",children:[g.jsxs("h3",{className:"text-xl font-semibold mb-4",children:["Attendance Form for ",t]}),g.jsxs("form",{onSubmit:d,children:[g.jsxs("div",{className:"space-y-4",children:[g.jsx("input",{type:"email",placeholder:"Email",value:n,onChange:f=>r(f.target.value),className:"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0}),g.jsx("input",{type:"text",placeholder:"Full Name",value:i,onChange:f=>s(f.target.value),className:"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0}),g.jsx("input",{type:"number",placeholder:"Age",value:o,onChange:f=>a(f.target.value),className:"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0}),g.jsx("input",{type:"text",placeholder:"Address",value:u,onChange:f=>c(f.target.value),className:"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),g.jsxs("div",{className:"flex justify-between mt-4",children:[g.jsx("button",{type:"submit",className:"bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300",children:"Submit"}),g.jsx("button",{type:"button",onClick:e,className:"bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300",children:"Close"})]})]})]})})},uj=({isOpen:t,onClose:e,event:n})=>{const[r,i]=O.useState(!1),[s,o]=O.useState(0);if(!t||!n)return null;const a=new Date().toISOString().split("T")[0],u=()=>{i(!0)},c=()=>{i(!1)},d=()=>{o(p=>p>0?p-1:n.image.length-1)},f=()=>{o(p=>p<n.image.length-1?p+1:0)};return g.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50",children:g.jsxs("div",{className:"bg-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-sm md:max-w-lg relative h-[600px] flex flex-col",children:[g.jsx("button",{onClick:e,className:"absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl md:text-2xl",children:"×"}),g.jsx("h3",{className:"text-lg md:text-xl font-semibold mb-4",children:n.title}),n.image.length>0&&g.jsxs("div",{className:"relative w-full h-40 md:h-60 max-h-60 overflow-hidden mb-4",children:[g.jsx("img",{src:n.image[s],alt:n.title,className:"w-full h-full object-cover rounded-lg"}),n.image.length>1&&g.jsxs("div",{className:"absolute inset-0 flex justify-between items-center",children:[g.jsx("button",{onClick:d,className:"bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100 text-xl md:text-2xl",children:"◀"}),g.jsx("button",{onClick:f,className:"bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100 text-xl md:text-2xl",children:"▶"})]})]}),g.jsxs("div",{className:"flex-1 overflow-auto",children:[g.jsxs("div",{className:"mb-4",children:[g.jsx("p",{className:"text-gray-600 mt-2 text-xs md:text-sm",children:n.date}),g.jsx("p",{className:"text-gray-600 text-xs md:text-sm",children:n.location}),g.jsx("p",{className:"text-gray-600 text-xs md:text-sm",children:n.description})]}),g.jsxs("div",{className:"mt-4 flex flex-col space-y-2",children:[n.date===a?g.jsxs(g.Fragment,{children:[g.jsx("button",{onClick:u,className:"bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 text-xs md:text-sm",children:"Open Attendance Form"}),r&&g.jsx(lj,{onClose:c,eventName:n.title})]}):g.jsx("p",{className:"text-red-500 text-xs md:text-sm",children:"Attendance form is not available yet."}),g.jsx("button",{type:"button",onClick:e,className:"bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 text-xs md:text-sm",children:"Close"})]})]})]})})},cj=()=>{const[t,e]=O.useState([]),[n,r]=O.useState(null),[i,s]=O.useState(!1);O.useEffect(()=>{(async()=>{try{const c=(await Ui(jt(be,"events"))).docs.map(d=>({id:d.id,...d.data()}));e(c)}catch(c){console.error("Error fetching events:",c)}})()},[]);const o=u=>{r(u),s(!0)},a=()=>{s(!1),r(null)};return g.jsxs("div",{className:"p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen",children:[g.jsx("h2",{className:"text-2xl sm:text-3xl font-bold mb-4 sm:mb-6",children:"Upcoming Events"}),t.length===0?g.jsx("p",{className:"text-base sm:text-lg text-gray-600",children:"No upcoming events available at the moment."}):g.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6",children:t.map(u=>g.jsxs("div",{className:"bg-white p-4 sm:p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow flex flex-col",onClick:()=>o(u),children:[g.jsx("img",{src:u.image[0]||"/default-image.jpg",alt:u.title,className:"w-full h-32 sm:h-40 object-cover rounded-lg mb-4"}),g.jsxs("div",{className:"flex flex-col flex-grow",children:[g.jsx("h3",{className:"text-base sm:text-lg font-semibold mb-2 truncate",children:u.title}),g.jsx("p",{className:"text-gray-600 text-xs sm:text-sm truncate",children:u.date})]})]},u.id))}),n&&g.jsx(uj,{isOpen:i,onClose:a,event:n})]})},hj=()=>g.jsx("div",{className:"bg-slate-50",children:g.jsx(cj,{})}),qo=({title:t,description:e,actions:n,image:r,imagePlaceholder:i=!0})=>g.jsxs("div",{className:"bg-white p-6 border rounded-lg shadow-md",children:[r?g.jsx("img",{src:r,alt:t,className:"w-full h-48 object-cover rounded-md mb-4"}):i&&g.jsx("div",{className:"mt-6 bg-gray-200 h-48"}),g.jsx("h3",{className:"text-xl font-bold",children:t}),g.jsx("p",{className:"text-gray-600 mt-2",children:e}),g.jsx("div",{className:"mt-4",children:n.map((s,o)=>g.jsx("button",{className:"text-blue-600 hover:underline mr-4",onClick:()=>window.location.href=s.href,children:s.label},o))})]}),dj="/SkWeb/assets/CAll%20for%20mebeerrs-C5cQG7Ea.jpg",fj="/SkWeb/assets/PROFILINGGGGGG-D9GIBTWj.jpg",pj="/SkWeb/assets/KK%20ASSEMBLY-DF9zpvKA.jpg",mj=()=>g.jsxs("div",{className:"max-w-7xl mx-auto py-12 px-6",children:[g.jsxs("header",{className:"text-center",children:[g.jsx("h2",{className:"text-gray-500 uppercase mb-4",children:"Discover"}),g.jsx("h1",{className:"text-4xl font-bold mb-2",children:"Get Involved Today"}),g.jsx("p",{className:"text-gray-600",children:"Learn how you can make a difference in your community"})]}),g.jsxs("section",{className:"mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8",children:[g.jsx(qo,{title:"Become a Youth Leader",description:"Join Sangguniang Kabataan and contribute to positive change in your area",actions:[{label:"Learn More",href:"#learn-more"},{label:"Sign Up",href:"#sign-up"}],image:dj}),g.jsx(qo,{title:"Lead with Passion",description:"Motivate others to create positive change in their communities",actions:[{label:"Join Us",href:"#join-us"}],image:fj}),g.jsx(qo,{title:"Network with Other Youth Leaders",description:"Build relationships and collaborate with like-minded individuals",actions:[{label:"Learn More",href:"#learn-more"},{label:"Sign Up",href:"#sign-up"}],image:pj}),g.jsxs("div",{className:"flex flex-col space-y-4",children:[g.jsx(qo,{title:"Attend Events",description:"Participate in community activities and connect with other youth",actions:[{label:"Join Now",href:"#join-now"}],imagePlaceholder:!1}),g.jsx(qo,{title:"Volunteer Opportunities",description:"Make a difference by giving back to your community",actions:[{label:"Get Involved",href:"#get-involved"}],imagePlaceholder:!1})]})]})]}),gj=({closeChat:t})=>{const[e,n]=O.useState(""),[r,i]=O.useState({}),s=Sh(),o=X0(J0,"messages/");O.useEffect(()=>{const u=NU(o,c=>{const d=c.val();i(d||{})});return()=>u()},[o]);const a=()=>{if(e.trim()){const u=s.currentUser;if(u){const c={content:e,sender:u.email||"Anonymous"},d=X0(J0,"messages/"+Date.now());RU(d,c).then(()=>n("")).catch(f=>{console.error("Error sending message:",f),alert("Failed to send message")})}else alert("You must be authenticated to send a message.")}};return g.jsxs("div",{className:"fixed bottom-16 right-4 w-80 bg-white border border-gray-300 rounded-lg shadow-lg p-4",style:{zIndex:1e3},children:[g.jsxs("div",{className:"flex justify-between items-center border-b border-gray-300 pb-2 mb-2",children:[g.jsx("h4",{className:"text-lg font-semibold",children:"Live Chat"}),g.jsx("button",{onClick:t,className:"text-gray-500 hover:text-gray-700",children:"×"})]}),g.jsx("div",{className:"overflow-y-auto h-60 border border-gray-200 p-2 mb-2",children:Object.entries(r).map(([u,{content:c,sender:d}])=>{var p;const f=((p=s.currentUser)==null?void 0:p.email)===d;return g.jsxs("div",{className:`mb-2 p-2 rounded-md ${f?"bg-blue-600 text-white":"bg-gray-100 text-black"}`,children:[g.jsx("p",{className:"text-sm font-semibold",children:d}),g.jsx("p",{children:c})]},u)})}),g.jsxs("div",{className:"flex",children:[g.jsx("input",{type:"text",value:e,onChange:u=>n(u.target.value),placeholder:"Type your message...",className:"flex-1 border border-gray-300 rounded-lg p-2 mr-2"}),g.jsx("button",{onClick:a,className:"bg-blue-600 text-white rounded-lg px-4 py-2",children:"Send"})]})]})},_j=()=>{const[t,e]=O.useState(!1),n=()=>{e(!t)};return g.jsxs("div",{children:[g.jsx("button",{onClick:n,className:"fixed bottom-4 right-4 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105",children:"💬"}),t&&g.jsx(gj,{closeChat:()=>e(!1)})]})},yj=({isOpen:t,onClose:e,title:n,message:r})=>t?g.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:g.jsxs("div",{className:"bg-white rounded-lg shadow-2xl p-6 w-full max-w-md mx-auto",children:[g.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:n}),g.jsx("p",{className:"text-gray-600 mb-6",children:r}),g.jsx("div",{className:"flex justify-end",children:g.jsx("button",{onClick:e,className:"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out",children:"Close"})})]})}):null,SR=O.createContext(void 0),Nl=()=>{const t=O.useContext(SR);if(!t)throw new Error("useModal must be used within a ModalProvider");return t},vj=({children:t})=>{const[e,n]=O.useState(!1),[r,i]=O.useState({title:"",message:""}),s=(a,u)=>{i({title:a,message:u}),n(!0)},o=()=>{n(!1),i({title:"",message:""})};return g.jsxs(SR.Provider,{value:{showModal:s,hideModal:o},children:[t,g.jsx(yj,{isOpen:e,onClose:o,title:r.title,message:r.message})]})},wj=()=>{const[t,e]=O.useState([]),[n,r]=O.useState({id:"",title:"",date:"",location:"",description:"",image:[],category:""}),[i,s]=O.useState([]),[o,a]=O.useState([0]),[u,c]=O.useState(null),[d,f]=O.useState(!1),[p,y]=O.useState(null),[I,A]=O.useState(!1),N=sx(),T=5,{showModal:w}=Nl();O.useEffect(()=>{x()},[]);const x=async()=>{try{A(!0);const q=Pc(jt(be,"events"),Mp(T)),Y=await Ui(q),ge=Y.docs.map(Ae=>({id:Ae.id,...Ae.data()}));e(ge),y(Y.docs[Y.docs.length-1])}catch(q){console.error("Error fetching events:",q),w("Error","There was a problem fetching events.")}finally{A(!1)}},D=async()=>{try{if(A(!0),!p)return;const q=Pc(jt(be,"events"),VC(p),Mp(T)),Y=await Ui(q),ge=Y.docs.map(Ae=>({id:Ae.id,...Ae.data()}));e(Ae=>[...Ae,...ge]),y(Y.docs[Y.docs.length-1])}catch(q){console.error("Error fetching more events:",q),w("Error","Could not load more events.")}finally{A(!1)}},L=(q,Y)=>{if(q.target.files){const Ae=Array.from(q.target.files)[0];if(Ae.size>1048576){w("File Too Large","File size exceeds 1 MB. Please upload a smaller file.");return}const W=[...i];W[Y]=Ae,s(W)}},F=()=>{a([...o,o.length])},S=q=>{a(o.filter((Y,ge)=>ge!==q)),s(i.filter((Y,ge)=>ge!==q))},_=async()=>{const q=i.map(Y=>new Promise((ge,Ae)=>{const W=Za(N,`events/${Y.name}`);Xa(W,Y).then(async Q=>{const ne=await Ja(Q.ref);ge(ne)}).catch(Q=>{console.error("Error uploading file:",Q),Ae(Q)})}));try{return await Promise.all(q)}catch(Y){return console.error("Error uploading images:",Y),w("Upload Error","There was a problem uploading your images."),[]}},E=async()=>{try{const q=await _(),Y=jt(be,"events");await fo(Y,{title:n.title,date:n.date,location:n.location,description:n.description,image:q,category:n.category}),r({id:"",title:"",date:"",location:"",description:"",image:[],category:""}),s([]),a([0]),x(),w("Success","Event added successfully!")}catch(q){console.error("Error adding document:",q),w("Error","Failed to add the event.")}},C=async q=>{try{const Y=On(be,"events",q);await Xs(Y),x(),w("Success","Event deleted successfully!")}catch(Y){console.error("Error deleting document:",Y),w("Error","Failed to delete the event.")}},k=q=>{const Y=t.find(ge=>ge.id===q);Y?(r(Y),s(Array.isArray(Y.image)?Y.image.map(ge=>ge):[]),a(Y.image&&Array.isArray(Y.image)?Y.image.map((ge,Ae)=>Ae):[0])):(console.error("Event not found for ID:",q),w("Error","Could not find the event to edit."))},P=async()=>{try{if(!n.id){w("Error","No event selected for updating.");return}const q=On(be,"events",n.id);if(!(await _M(q)).exists()){w("Error","The event you are trying to edit does not exist.");return}const ge=i.length?await _():n.image;await $h(q,{title:n.title,date:n.date,location:n.location,description:n.description,image:ge,category:n.category}),r({id:"",title:"",date:"",location:"",description:"",image:[],category:""}),s([]),a([0]),x(),w("Success","Event updated successfully!")}catch(q){console.error("Error updating document:",q),w("Error","Failed to update the event.")}},R=q=>{const Y=new Date().toISOString().split("T")[0];q.date===Y?(c(q),f(!0)):w("Attendance Unavailable","Attendance can only be marked on the day of the event.")};return g.jsxs("div",{className:"p-4 sm:p-6 lg:p-8 bg-gray-100 min-h-screen",children:[g.jsx("h2",{className:"text-2xl sm:text-3xl font-bold mb-4 sm:mb-6",children:"Manage Events"}),g.jsxs("div",{className:"bg-white shadow-md rounded-lg p-4 sm:p-6 mb-4 sm:mb-8",children:[g.jsx("h3",{className:"text-lg sm:text-xl font-semibold mb-2 sm:mb-4",children:n.id?"Edit Event":"Add New Event"}),g.jsxs("div",{className:"space-y-4",children:[g.jsx("input",{type:"text",placeholder:"Title",value:n.title,onChange:q=>r({...n,title:q.target.value}),className:"w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}),g.jsx("input",{type:"date",placeholder:"Date",value:n.date,onChange:q=>r({...n,date:q.target.value}),className:"w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}),g.jsx("input",{type:"text",placeholder:"Location",value:n.location,onChange:q=>r({...n,location:q.target.value}),className:"w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}),g.jsx("textarea",{placeholder:"Description",value:n.description,onChange:q=>r({...n,description:q.target.value}),className:"w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}),g.jsxs("select",{value:n.category,onChange:q=>r({...n,category:q.target.value}),className:"w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",children:[g.jsx("option",{value:"",children:"Select Category"}),g.jsx("option",{value:"Music",children:"Music"}),g.jsx("option",{value:"Sports",children:"Sports"}),g.jsx("option",{value:"Art",children:"Art"}),g.jsx("option",{value:"Party",children:"Party"}),g.jsx("option",{value:"Art",children:"Gathering"})]}),o.map((q,Y)=>g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx("input",{type:"file",accept:"image/*",onChange:ge=>L(ge,Y),className:"border border-gray-300 rounded-lg p-2"}),g.jsx("button",{type:"button",onClick:()=>S(Y),className:"text-red-500 hover:text-red-700",children:"Remove"})]},Y)),g.jsx("button",{type:"button",onClick:F,className:"text-blue-500 hover:text-blue-700",children:"Add Image"}),g.jsx("div",{className:"flex justify-end space-x-2 mt-4",children:n.id?g.jsxs(g.Fragment,{children:[g.jsx("button",{onClick:P,className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Save"}),g.jsx("button",{onClick:()=>r({id:"",title:"",date:"",location:"",description:"",image:[],category:""}),className:"px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600",children:"Cancel"})]}):g.jsx("button",{onClick:E,className:"px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600",children:"Add Event"})})]})]}),g.jsxs("div",{className:"bg-white shadow-md rounded-lg p-4 sm:p-6",children:[g.jsx("h3",{className:"text-lg sm:text-xl font-semibold mb-2 sm:mb-4",children:"Events List"}),I?g.jsx("p",{children:"Loading..."}):g.jsx("ul",{className:"space-y-4",children:t.map(q=>g.jsx("li",{className:"border-b border-gray-200 pb-4",children:g.jsxs("div",{className:"flex justify-between items-center",children:[g.jsxs("div",{children:[g.jsx("h4",{className:"text-lg font-semibold",children:q.title}),g.jsx("p",{className:"text-gray-600",children:q.date}),g.jsx("p",{className:"text-gray-600",children:q.location}),g.jsx("p",{className:"text-gray-600",children:q.description}),g.jsx("div",{className:"flex flex-wrap mt-2 space-x-2",children:q.image.map((Y,ge)=>g.jsx("img",{src:Y,alt:`Event ${ge}`,className:"w-24 h-24 object-cover rounded-lg"},ge))})]}),g.jsxs("div",{className:"flex space-x-2",children:[g.jsx("button",{onClick:()=>k(q.id),className:"px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600",children:"Edit"}),g.jsx("button",{onClick:()=>C(q.id),className:"px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600",children:"Delete"}),g.jsx("button",{onClick:()=>R(q),className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Mark Attendance"})]})]})},q.id))}),p&&g.jsx("button",{onClick:D,className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Load More"})]}),d&&u&&g.jsx("div",{className:"fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center",children:g.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-lg w-full max-w-md",children:[g.jsxs("h3",{className:"text-lg font-semibold mb-4",children:["Mark Attendance for ",u.title]}),g.jsx("button",{onClick:()=>f(!1),className:"mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600",children:"Close"})]})})]})},Ej=()=>{const[t,e]=O.useState([]),[n,r]=O.useState(null),[i,s]=O.useState({title:"",description:"",imageUrl:""}),[o,a]=O.useState(null),[u,c]=O.useState(null),[d,f]=O.useState(!1),[p,y]=O.useState(!0),{showModal:I}=Nl(),A=jt(be,"newsletters"),N=async()=>{if(d||!p)return;f(!0);let _=Pc(A,dM("title"),Mp(10));u&&(_=Pc(_,VC(u)));try{const E=await Ui(_);if(E.empty)y(!1);else{const C=E.docs.map(k=>({...k.data(),id:k.id}));e(k=>[...k,...C.filter(P=>!k.some(R=>R.id===P.id))]),c(E.docs[E.docs.length-1])}}catch(E){console.error("Error fetching newsletters:",E),I("Error","There was a problem fetching newsletters.")}f(!1)};O.useEffect(()=>{N()},[]);const T=async()=>{try{let _=i.imageUrl;if(o){const E=Za(Hc,`images/${Date.now()}_${o.name}`);await Xa(E,o),_=await Ja(E)}await fo(A,{...i,imageUrl:_}),s({title:"",description:"",imageUrl:""}),a(null),y(!0),N(),I("Success","Newsletter added successfully!")}catch(_){console.error("Error adding newsletter:",_),I("Error","Failed to add the newsletter.")}},w=async _=>{try{const E=On(be,"newsletters",_);let C=i.imageUrl;if(o){const k=Za(Hc,`images/${Date.now()}_${o.name}`);await Xa(k,o),C=await Ja(k)}await $h(E,{...i,imageUrl:C}),r(null),a(null),N(),I("Success","Newsletter updated successfully!")}catch(E){console.error("Error updating newsletter:",E),I("Error","Failed to update the newsletter.")}},x=async _=>{try{const E=On(be,"newsletters",_);await Xs(E),y(!0),N(),I("Success","Newsletter deleted successfully!")}catch(E){console.error("Error deleting newsletter:",E),I("Error","Failed to delete the newsletter.")}},D=_=>{r(_.id),s({title:_.title,description:_.description,imageUrl:_.imageUrl})},L=_=>{s({...i,[_.target.name]:_.target.value})},F=_=>{_.target.files&&a(_.target.files[0])},S=()=>{!d&&p&&N()};return g.jsxs("div",{className:"p-4",children:[g.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Manage Newsletters"}),g.jsxs("div",{className:"mb-6",children:[g.jsx("h2",{className:"text-xl font-semibold mb-4",children:n?"Edit Newsletter":"Add New Newsletter"}),g.jsxs("form",{onSubmit:_=>{_.preventDefault(),n?w(n):T()},children:[g.jsx("input",{type:"text",name:"title",placeholder:"Title",value:i.title,onChange:L,className:"block w-full mb-2 p-2 border border-gray-300 rounded"}),g.jsx("textarea",{name:"description",placeholder:"Description",value:i.description,onChange:L,className:"block w-full mb-2 p-2 border border-gray-300 rounded"}),g.jsx("input",{type:"file",name:"imageUrl",onChange:F,className:"block w-full mb-2"}),g.jsx("button",{type:"submit",className:"bg-blue-500 text-white p-2 rounded",children:n?"Update":"Add"})]})]}),g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",children:t.map(_=>g.jsxs("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden",children:[g.jsx("img",{src:_.imageUrl,alt:_.title,className:"w-full h-48 object-cover"}),g.jsxs("div",{className:"p-4",children:[g.jsx("h2",{className:"text-xl font-bold mb-2",children:_.title}),g.jsx("p",{className:"text-gray-700 mb-4",children:_.description}),g.jsx("button",{onClick:()=>D(_),className:"text-blue-500 hover:underline mr-4",children:"Edit"}),g.jsx("button",{onClick:()=>x(_.id),className:"text-red-500 hover:underline",children:"Delete"})]})]},_.id))}),d&&g.jsx("p",{children:"Loading more newsletters..."}),!d&&p&&g.jsx("button",{onClick:S,className:"mt-4 bg-blue-500 text-white p-2 rounded",children:"Load More"})]})},Ij=()=>{const[t,e]=O.useState([]),[n,r]=O.useState({title:"",description:"",imageUrl:"",formFields:[]}),[i,s]=O.useState(null),[o,a]=O.useState([{label:"",type:"text"}]),[u,c]=O.useState(!1),[d,f]=O.useState(null),{showModal:p}=Nl(),y=jt(be,"services");O.useEffect(()=>{const L=Vp(y,F=>{e(F.docs.map(S=>({...S.data(),id:S.id})))},F=>{console.error("Error fetching services:",F),p("Error","Failed to fetch services.")});return()=>L()},[]);const I=async L=>{if(L)try{const F=Za(Hc,`services/${L.name}`);return await Xa(F,L),await Ja(F)}catch(F){console.error("Error uploading image:",F),p("Upload Error","Failed to upload the image.")}},A=async()=>{try{if(!n.title.trim()){p("Validation Error","Service title is required.");return}const L=i?await I(i):n.imageUrl;if(i&&!L)return;const F={title:n.title,description:n.description,imageUrl:L||"",formFields:o};if(u&&d){const _=On(be,"services",d);await $h(_,F),p("Success","Service updated successfully!"),c(!1),f(null)}else await fo(y,F),p("Success","Service added successfully!");r({title:"",description:"",imageUrl:"",formFields:[]}),a([{label:"",type:"text"}]),s(null);const S=document.querySelector('input[type="file"]');S&&(S.value="")}catch(L){console.error("Error adding/updating service:",L),p("Error",`Failed to ${u?"update":"add"} the service.`)}},N=async L=>{try{const F=On(be,"services",L);await Xs(F),p("Success","Service deleted successfully!")}catch(F){console.error("Error deleting service:",F),p("Error","Failed to delete the service.")}},T=()=>{a([...o,{label:"",type:"text"}])},w=(L,F,S)=>{const _=o.map((E,C)=>C===L?{...E,[F]:S}:E);a(_)},x=L=>{a(o.filter((F,S)=>S!==L))},D=L=>{r({title:L.title,description:L.description,imageUrl:L.imageUrl,formFields:L.formFields}),a(L.formFields||[]),c(!0),f(L.id)};return g.jsxs("div",{className:"p-6 max-w-screen mx-auto",children:[g.jsx("h1",{className:"text-3xl font-bold mb-6 text-center",children:"Admin Services Management"}),g.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md mb-8 max-w-[100%] mx-auto",children:[g.jsx("h2",{className:"text-2xl font-bold mb-4",children:u?"Edit Service":"Add New Service"}),g.jsx("input",{type:"text",placeholder:"Service Title",value:n.title,onChange:L=>r({...n,title:L.target.value}),className:"block w-full mb-4 p-2 border border-gray-300 rounded"}),g.jsx("textarea",{placeholder:"Service Description",value:n.description,onChange:L=>r({...n,description:L.target.value}),className:"block w-full mb-4 p-2 border border-gray-300 rounded"}),g.jsx("input",{type:"file",onChange:L=>s(L.target.files?L.target.files[0]:null),className:"block w-full mb-4"}),g.jsxs("div",{children:[g.jsx("h3",{className:"text-lg font-bold mb-2",children:"Custom Form Fields"}),o.map((L,F)=>g.jsxs("div",{className:"flex items-center mb-2",children:[g.jsx("input",{type:"text",placeholder:"Field Label",value:L.label,onChange:S=>w(F,"label",S.target.value),className:"block w-full p-2 border border-gray-300 rounded mr-2"}),g.jsxs("select",{value:L.type,onChange:S=>w(F,"type",S.target.value),className:"p-2 border border-gray-300 rounded",children:[g.jsx("option",{value:"text",children:"Text"}),g.jsx("option",{value:"email",children:"Email"}),g.jsx("option",{value:"number",children:"Number"}),g.jsx("option",{value:"textarea",children:"Textarea"})]}),g.jsx("button",{onClick:()=>x(F),className:"ml-2 bg-red-500 text-white p-2 rounded",children:"Remove"})]},F)),g.jsx("button",{onClick:T,className:"bg-blue-500 text-white p-2 rounded",children:"Add Field"})]}),g.jsx("button",{onClick:A,className:"mt-4 bg-green-500 text-white p-2 rounded",children:u?"Update Service":"Add Service"})]}),g.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md max-w-[100%] mx-auto",children:[g.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Existing Services"}),t.map(L=>g.jsxs("div",{className:"border-b border-gray-200 py-4",children:[g.jsx("h3",{className:"text-xl font-semibold",children:L.title}),g.jsx("p",{children:L.description}),L.imageUrl&&g.jsx("img",{src:L.imageUrl,alt:L.title,className:"w-32 h-32 object-cover my-2"}),g.jsx("button",{onClick:()=>D(L),className:"mr-2 bg-yellow-500 text-white p-2 rounded",children:"Edit"}),g.jsx("button",{onClick:()=>N(L.id),className:"bg-red-500 text-white p-2 rounded",children:"Delete"})]},L.id))]})]})},Tj=()=>{const[t,e]=O.useState([]),[n,r]=O.useState(!0),{showModal:i}=Nl();O.useEffect(()=>{(async()=>{try{const u=(await Ui(jt(be,"attendance"))).docs.map(c=>({id:c.id,...c.data()}));e(u)}catch(a){console.error("Error fetching attendance records:",a),i("Error","Failed to fetch attendance records.")}finally{r(!1)}})()},[]);const s=async()=>{if(t.length===0){i("Raffle Error","No records available for the raffle.");return}const o=Math.floor(Math.random()*t.length),a=t[o];try{await fo(jt(be,"raffleWinners"),{fullName:a.fullName,eventName:a.eventName,timestamp:new Date().toISOString()}),await Xs(On(be,"attendance",a.id)),e(u=>u.filter(c=>c.id!==a.id)),i("🎉 Raffle Winner! 🎉",`Congratulations to ${a.fullName}!`)}catch(u){console.error("Error during the raffle process:",u),i("Raffle Error","Failed to complete the raffle process.")}};return n?g.jsx("p",{children:"Loading attendance records..."}):g.jsxs("div",{className:"p-6",children:[g.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"User Attendance Records"}),t.length>0?g.jsx("div",{className:"overflow-x-auto mb-8",children:g.jsxs("table",{className:"min-w-full bg-white border border-gray-200",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{className:"py-2 px-4 border-b",children:"Event Name"}),g.jsx("th",{className:"py-2 px-4 border-b",children:"Email"}),g.jsx("th",{className:"py-2 px-4 border-b",children:"Full Name"}),g.jsx("th",{className:"py-2 px-4 border-b",children:"Age"}),g.jsx("th",{className:"py-2 px-4 border-b",children:"Address"}),g.jsx("th",{className:"py-2 px-4 border-b",children:"Timestamp"})]})}),g.jsx("tbody",{children:t.map(o=>g.jsxs("tr",{children:[g.jsx("td",{className:"py-2 px-4 border-b",children:o.eventName}),g.jsx("td",{className:"py-2 px-4 border-b",children:o.email}),g.jsx("td",{className:"py-2 px-4 border-b",children:o.fullName}),g.jsx("td",{className:"py-2 px-4 border-b",children:o.age}),g.jsx("td",{className:"py-2 px-4 border-b",children:o.address}),g.jsx("td",{className:"py-2 px-4 border-b",children:new Date(o.timestamp).toLocaleString()})]},o.id))})]})}):g.jsx("p",{children:"No attendance records found."}),g.jsx("div",{className:"my-6",children:g.jsx("button",{onClick:s,className:"bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300",children:"Raffle a Winner"})})]})},Sj=()=>{const[t,e]=O.useState([]),[n,r]=O.useState({}),[,i]=O.useState({}),[s,o]=O.useState(!1),{showModal:a}=Nl();O.useEffect(()=>{const p=(()=>{const y=jt(be,"services");return Vp(y,A=>{const N=A.docs.reduce((T,w)=>{const x=w.data();return T[w.id]=x.title,T},{});r(N),o(!0)},A=>{console.error("Error fetching services:",A),a("Error","Failed to fetch services.")})})();return()=>p()},[]),O.useEffect(()=>{if(!s)return;const f=jt(be,"applications"),p=Vp(f,y=>{const I=[];y.forEach(async A=>{const N=A.data(),T=N.serviceId;(n[T]||"Unknown Service")==="Unknown Service"?await Xs(A.ref):I.push({id:A.id,data:N})}),e(I)},y=>{console.error("Error fetching applications:",y),a("Error","Failed to fetch applications.")});return()=>p()},[s,n,a]);const u=(f,p,y)=>{i(I=>({...I,[f]:{...I[f],[p]:y}}))},c=async f=>{try{const p=On(be,"applications",f);await $h(p,{qualified:!0}),e(y=>y.map(I=>I.id===f?{...I,data:{...I.data,qualified:!0}}:I)),a("Success","Application marked as qualified.")}catch(p){console.error("Error marking as qualified:",p),a("Error","Failed to mark as qualified.")}},d=async f=>{try{const p=On(be,"applications",f);await Xs(p),e(y=>y.filter(I=>I.id!==f)),a("Success","Application unqualified and removed.")}catch(p){console.error("Error marking as unqualified:",p),a("Error","Failed to unqualify application.")}};return g.jsxs("div",{className:"max-w-7xl mx-4 sm:mx-8 lg:mx-auto p-6 font-sans",children:[g.jsx("h1",{className:"text-2xl font-bold mb-6",children:"Service Results"}),t.length>0?g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:t.map((f,p)=>{const y=f.data.serviceId,I=n[y]||"Unknown Service",A=f.data.qualified||!1;return g.jsxs("div",{className:`bg-white shadow-md rounded-lg p-6 ${p<4?"w-full":""}`,children:[g.jsxs("h2",{className:"text-xl font-semibold mb-4",children:["Service Title: ",I]}),g.jsx("div",{className:"space-y-4",children:Object.entries(f.data).filter(([N])=>N!=="qualified").sort(([N],[T])=>N.localeCompare(T)).map(([N,T],w)=>g.jsxs("div",{className:"mb-4",children:[g.jsx("label",{className:"block font-medium text-gray-600",children:N}),g.jsx("div",{className:"mt-1 text-gray-800",children:Cj(N,T,y,u)})]},w))}),g.jsx("div",{className:"mt-4",children:A?g.jsx("div",{className:"bg-green-500 text-white px-4 py-2 rounded-md text-center",children:"Qualified"}):g.jsxs("div",{children:[g.jsx("button",{className:"bg-blue-500 text-white px-4 py-2 rounded-md mr-2",onClick:()=>c(f.id),children:"Qualify"}),g.jsx("button",{className:"bg-red-500 text-white px-4 py-2 rounded-md",onClick:()=>d(f.id),children:"Unqualify"})]})})]},f.id)})}):g.jsx("p",{className:"text-gray-600",children:"No applications found."})]})},Cj=(t,e,n,r)=>typeof e=="string"?g.jsx("input",{type:"text",value:e,onChange:i=>r(n,t,i.target.value),className:"border border-gray-300 rounded px-3 py-2"}):typeof e=="number"?g.jsx("input",{type:"number",value:e,onChange:i=>r(n,t,parseFloat(i.target.value)),className:"border border-gray-300 rounded px-3 py-2"}):Array.isArray(e)?g.jsx("ul",{className:"list-disc list-inside",children:e.map((i,s)=>g.jsx("li",{children:g.jsx("input",{type:"text",value:i,onChange:o=>r(n,t,o.target.value),className:"border border-gray-300 rounded px-3 py-2"})},s))}):g.jsx("span",{children:"Unsupported type"}),xj=()=>g.jsxs("div",{children:[g.jsx(TR,{}),g.jsx(wj,{}),g.jsx(Ej,{}),g.jsx(Ij,{}),g.jsx(Sj,{}),g.jsx(Tj,{})]}),Rj="/SkWeb/assets/SK%20KABATAAANNNNN-XVd6BJoN.jpg",Aj=()=>{const[t,e]=O.useState(!1);return O.useEffect(()=>{const n=Sh(),r=ag(n,i=>{e(!!i)});return()=>r()},[]),g.jsx("div",{className:"min-h-screen pt-16 px-4 sm:px-8",children:g.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between w-full max-w-[100%] gap-8 sm:gap-4",children:[g.jsxs("div",{className:"flex flex-col items-start space-y-4 p-5 w-full sm:w-1/2",children:[g.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black font-serif",children:"Building a Brighter Future for Youth"}),g.jsx("p",{className:"text-base sm:text-lg md:text-xl lg:text-2xl text-black mb-5",children:"At Sangguniang Kabataan, our mission is to empower the youth by providing them with opportunities for growth, development, and active participation in their communities. We envision a future where every young person has the tools and support they need to succeed and make a positive impact."}),!t&&g.jsx(Gc,{})]}),g.jsx("div",{className:"flex justify-center sm:ml-[-20px] w-full sm:w-1/2",children:g.jsx("img",{src:Rj,alt:"Card",className:"w-[80%] h-auto sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[550px] lg:h-[550px] rounded-md shadow-md object-contain"})})]})})},Nj=()=>{const[t,e]=O.useState(null),n=[{question:"What is SK?",answer:"Sangguniang Kabataan (SK) is a youth council in the Philippines that represents the youth in the local government. It aims to empower the youth and address their concerns and needs."},{question:"How to join SK?",answer:"To join Sangguniang Kabataan (SK), you must be a Filipino citizen, aged 15 to 30 years old, and a resident of the barangay where you intend to run for a position. You must also meet the eligibility requirements set by the Commission on Elections (COMELEC)."},{question:"What are SK programs?",answer:"Sangguniang Kabataan (SK) implements various programs and projects for the youth, such as sports development, skills training, environmental initiatives, and community outreach activities. These programs aim to promote the holistic development of the youth and address their specific needs."},{question:"How can I contribute?",answer:"You can contribute to Sangguniang Kabataan (SK) by actively participating in its programs and projects, volunteering your time and skills, and providing feedback and suggestions to improve the youth council's initiatives. Your involvement can make a positive impact on the youth in your community."},{question:"How to contact SK?",answer:"To contact Sangguniang Kabataan (SK), you can reach out to your local SK officials or visit the SK office in your barangay. You can also contact the SK national office for inquiries and assistance."}],r=i=>{e(i===t?null:i)};return g.jsx("div",{className:"flex flex-col items-center p-8",children:g.jsxs("div",{className:"w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start",children:[g.jsxs("div",{className:"w-full lg:w-1/3 mb-8 lg:mb-0 lg:pr-8",children:[g.jsx("h1",{className:"text-3xl lg:text-5xl font-bold mb-4",children:"Frequently Asked Questions"}),g.jsx("p",{className:"text-base lg:text-lg mb-6",children:"Find answers to common questions about Sangguniang Kabataan and its programs."}),g.jsx("button",{className:"mt-4 px-6 py-2 border border-black bg-white hover:bg-gray-100 transition duration-300",children:"Contact"})]}),g.jsx("div",{className:"w-full lg:w-2/3",children:n.map((i,s)=>g.jsxs("div",{className:"border-t border-gray-300 mb-4",children:[g.jsxs("button",{className:"flex justify-between items-center w-full py-4 text-left",onClick:()=>r(s),children:[g.jsx("h3",{className:"text-lg lg:text-xl font-medium",children:i.question}),g.jsx("span",{className:"text-lg lg:text-xl",children:t===s?"▲":"▼"})]}),t===s&&g.jsx("div",{className:"py-2 text-gray-600 text-sm lg:text-base",children:g.jsx("p",{children:i.answer})})]},s))})]})})},kj=()=>g.jsx("footer",{className:"w-full bg-white mt-16 py-8 border-t border-gray-300",children:g.jsxs("div",{className:"container mx-auto px-4",children:[g.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center mb-8",children:[g.jsx("div",{className:"flex items-center mb-4 md:mb-0",children:g.jsx("img",{src:xT,alt:"Sangguniang Kabataan Logo",className:"h-20 w-20 object-contain ml-4"})}),g.jsx("div",{className:"w-full flex justify-center",children:g.jsxs("ul",{className:"flex space-x-6 mb-4 md:mb-0",children:[g.jsx("li",{children:g.jsx("a",{className:"text-gray-700 hover:text-black transition",children:"About us"})}),g.jsx("li",{children:g.jsx("a",{className:"text-gray-700 hover:text-black transition",children:"Contact Us"})}),g.jsx("li",{children:g.jsx("a",{className:"text-gray-700 hover:text-black transition",children:"FAQs"})}),g.jsx("li",{children:g.jsx("a",{className:"text-gray-700 hover:text-black transition",children:"Support"})}),g.jsx("li",{children:g.jsx("a",{className:"text-gray-700 hover:text-black transition",children:"Terms"})})]})})]}),g.jsxs("div",{className:"flex flex-col items-center text-sm",children:[g.jsx("p",{className:"text-gray-500",children:"© 2024 Sangguniang Kabataan. All rights reserved."}),g.jsxs("ul",{className:"flex space-x-4 mt-2",children:[g.jsx("li",{children:g.jsx("a",{href:"/privacy",className:"text-gray-700 hover:text-black transition",children:"Privacy Policy"})}),g.jsx("li",{children:g.jsx("a",{href:"/terms",className:"text-gray-700 hover:text-black transition",children:"Terms of Service"})}),g.jsx("li",{children:g.jsx("a",{href:"/cookies",className:"text-gray-700 hover:text-black transition",children:"Cookie Policy"})})]})]})]})});function Pj(){return g.jsxs(g.Fragment,{children:[g.jsx(TR,{}),g.jsxs("div",{id:"home",children:[g.jsx(ej,{}),g.jsx(Aj,{})]}),g.jsx("div",{id:"service",children:g.jsx(ij,{})}),g.jsx("div",{id:"newsletter",children:g.jsx(aj,{})}),g.jsx("div",{id:"events",children:g.jsx(hj,{})}),g.jsx(mj,{}),g.jsx(_j,{}),g.jsx(Nj,{}),g.jsx(kj,{})]})}function bj(){return g.jsx(Tk,{basename:"/SkWeb",children:g.jsx($U,{children:g.jsx(vj,{children:g.jsxs(wk,{children:[g.jsx(up,{path:"/admin",element:g.jsx(xj,{})}),g.jsx(up,{path:"*",element:g.jsx(Pj,{})})]})})})})}mT(document.getElementById("root")).render(g.jsx(O.StrictMode,{children:g.jsx(bj,{})}));
