function aA(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function lA(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var uE={exports:{}},Yc={},cE={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var al=Symbol.for("react.element"),uA=Symbol.for("react.portal"),cA=Symbol.for("react.fragment"),hA=Symbol.for("react.strict_mode"),dA=Symbol.for("react.profiler"),fA=Symbol.for("react.provider"),pA=Symbol.for("react.context"),mA=Symbol.for("react.forward_ref"),gA=Symbol.for("react.suspense"),_A=Symbol.for("react.memo"),yA=Symbol.for("react.lazy"),Dy=Symbol.iterator;function vA(t){return t===null||typeof t!="object"?null:(t=Dy&&t[Dy]||t["@@iterator"],typeof t=="function"?t:null)}var hE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dE=Object.assign,fE={};function no(t,e,n){this.props=t,this.context=e,this.refs=fE,this.updater=n||hE}no.prototype.isReactComponent={};no.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};no.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function pE(){}pE.prototype=no.prototype;function Xp(t,e,n){this.props=t,this.context=e,this.refs=fE,this.updater=n||hE}var Jp=Xp.prototype=new pE;Jp.constructor=Xp;dE(Jp,no.prototype);Jp.isPureReactComponent=!0;var Oy=Array.isArray,mE=Object.prototype.hasOwnProperty,Zp={current:null},gE={key:!0,ref:!0,__self:!0,__source:!0};function _E(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)mE.call(e,r)&&!gE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:al,type:t,key:s,ref:o,props:i,_owner:Zp.current}}function wA(t,e){return{$$typeof:al,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function em(t){return typeof t=="object"&&t!==null&&t.$$typeof===al}function EA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ly=/\/+/g;function Id(t,e){return typeof t=="object"&&t!==null&&t.key!=null?EA(""+t.key):e.toString(36)}function vu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case al:case uA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Id(o,0):r,Oy(i)?(n="",t!=null&&(n=t.replace(Ly,"$&/")+"/"),vu(i,e,n,"",function(c){return c})):i!=null&&(em(i)&&(i=wA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ly,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Oy(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Id(s,a);o+=vu(s,e,n,u,i)}else if(u=vA(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Id(s,a++),o+=vu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Gl(t,e,n){if(t==null)return t;var r=[],i=0;return vu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function IA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},wu={transition:null},TA={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:wu,ReactCurrentOwner:Zp};function yE(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:Gl,forEach:function(t,e,n){Gl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Gl(t,function(){e++}),e},toArray:function(t){return Gl(t,function(e){return e})||[]},only:function(t){if(!em(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=no;se.Fragment=cA;se.Profiler=dA;se.PureComponent=Xp;se.StrictMode=hA;se.Suspense=gA;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TA;se.act=yE;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=dE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)mE.call(e,u)&&!gE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:al,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:pA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:fA,_context:t},t.Consumer=t};se.createElement=_E;se.createFactory=function(t){var e=_E.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:mA,render:t}};se.isValidElement=em;se.lazy=function(t){return{$$typeof:yA,_payload:{_status:-1,_result:t},_init:IA}};se.memo=function(t,e){return{$$typeof:_A,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=wu.transition;wu.transition={};try{t()}finally{wu.transition=e}};se.unstable_act=yE;se.useCallback=function(t,e){return Nt.current.useCallback(t,e)};se.useContext=function(t){return Nt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};se.useEffect=function(t,e){return Nt.current.useEffect(t,e)};se.useId=function(){return Nt.current.useId()};se.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return Nt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};se.useRef=function(t){return Nt.current.useRef(t)};se.useState=function(t){return Nt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return Nt.current.useTransition()};se.version="18.3.1";cE.exports=se;var O=cE.exports;const Dr=lA(O),SA=aA({__proto__:null,default:Dr},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CA=O,xA=Symbol.for("react.element"),RA=Symbol.for("react.fragment"),AA=Object.prototype.hasOwnProperty,NA=CA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kA={key:!0,ref:!0,__self:!0,__source:!0};function vE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)AA.call(e,r)&&!kA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:xA,type:t,key:s,ref:o,props:i,_owner:NA.current}}Yc.Fragment=RA;Yc.jsx=vE;Yc.jsxs=vE;uE.exports=Yc;var g=uE.exports,wE={exports:{}},Yt={},EE={exports:{}},IE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,X){var te=W.length;W.push(X);e:for(;0<te;){var Ae=te-1>>>1,ge=W[Ae];if(0<i(ge,X))W[Ae]=X,W[te]=ge,te=Ae;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var X=W[0],te=W.pop();if(te!==X){W[0]=te;e:for(var Ae=0,ge=W.length,Fe=ge>>>1;Ae<Fe;){var Vn=2*(Ae+1)-1,Fn=W[Vn],jn=Vn+1,Un=W[jn];if(0>i(Fn,te))jn<ge&&0>i(Un,Fn)?(W[Ae]=Un,W[jn]=te,Ae=jn):(W[Ae]=Fn,W[Vn]=te,Ae=Vn);else if(jn<ge&&0>i(Un,te))W[Ae]=Un,W[jn]=te,Ae=jn;else break e}}return X}function i(W,X){var te=W.sortIndex-X.sortIndex;return te!==0?te:W.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,f=null,p=3,v=!1,C=!1,A=!1,k=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(W){for(var X=n(c);X!==null;){if(X.callback===null)r(c);else if(X.startTime<=W)r(c),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(c)}}function N(W){if(A=!1,R(W),!C)if(n(u)!==null)C=!0,Ue(M);else{var X=n(c);X!==null&&Pt(N,X.startTime-W)}}function M(W,X){C=!1,A&&(A=!1,S(_),_=-1),v=!0;var te=p;try{for(R(X),f=n(u);f!==null&&(!(f.expirationTime>X)||W&&!P());){var Ae=f.callback;if(typeof Ae=="function"){f.callback=null,p=f.priorityLevel;var ge=Ae(f.expirationTime<=X);X=t.unstable_now(),typeof ge=="function"?f.callback=ge:f===n(u)&&r(u),R(X)}else r(u);f=n(u)}if(f!==null)var Fe=!0;else{var Vn=n(c);Vn!==null&&Pt(N,Vn.startTime-X),Fe=!1}return Fe}finally{f=null,p=te,v=!1}}var F=!1,E=null,_=-1,T=5,x=-1;function P(){return!(t.unstable_now()-x<T)}function b(){if(E!==null){var W=t.unstable_now();x=W;var X=!0;try{X=E(!0,W)}finally{X?w():(F=!1,E=null)}}else F=!1}var w;if(typeof I=="function")w=function(){I(b)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,fe=K.port2;K.port1.onmessage=b,w=function(){fe.postMessage(null)}}else w=function(){k(b,0)};function Ue(W){E=W,F||(F=!0,w())}function Pt(W,X){_=k(function(){W(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){C||v||(C=!0,Ue(M))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(p){case 1:case 2:case 3:var X=3;break;default:X=p}var te=p;p=X;try{return W()}finally{p=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,X){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var te=p;p=W;try{return X()}finally{p=te}},t.unstable_scheduleCallback=function(W,X,te){var Ae=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?Ae+te:Ae):te=Ae,W){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=te+ge,W={id:h++,callback:X,priorityLevel:W,startTime:te,expirationTime:ge,sortIndex:-1},te>Ae?(W.sortIndex=te,e(c,W),n(u)===null&&W===n(c)&&(A?(S(_),_=-1):A=!0,Pt(N,te-Ae))):(W.sortIndex=ge,e(u,W),C||v||(C=!0,Ue(M))),W},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(W){var X=p;return function(){var te=p;p=X;try{return W.apply(this,arguments)}finally{p=te}}}})(IE);EE.exports=IE;var PA=EE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bA=O,Qt=PA;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var TE=new Set,Ia={};function Hi(t,e){Ms(t,e),Ms(t+"Capture",e)}function Ms(t,e){for(Ia[t]=e,t=0;t<e.length;t++)TE.add(e[t])}var rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gf=Object.prototype.hasOwnProperty,DA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,My={},Vy={};function OA(t){return gf.call(Vy,t)?!0:gf.call(My,t)?!1:DA.test(t)?Vy[t]=!0:(My[t]=!0,!1)}function LA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function MA(t,e,n,r){if(e===null||typeof e>"u"||LA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function kt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ut[t]=new kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ut[e]=new kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ut[t]=new kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ut[t]=new kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ut[t]=new kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ut[t]=new kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ut[t]=new kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ut[t]=new kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ut[t]=new kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var tm=/[\-:]([a-z])/g;function nm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(tm,nm);ut[e]=new kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(tm,nm);ut[e]=new kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(tm,nm);ut[e]=new kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ut[t]=new kt(t,1,!1,t.toLowerCase(),null,!1,!1)});ut.xlinkHref=new kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ut[t]=new kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function rm(t,e,n,r){var i=ut.hasOwnProperty(e)?ut[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(MA(e,n,i,r)&&(n=null),r||i===null?OA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var fr=bA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Kl=Symbol.for("react.element"),ls=Symbol.for("react.portal"),us=Symbol.for("react.fragment"),im=Symbol.for("react.strict_mode"),_f=Symbol.for("react.profiler"),SE=Symbol.for("react.provider"),CE=Symbol.for("react.context"),sm=Symbol.for("react.forward_ref"),yf=Symbol.for("react.suspense"),vf=Symbol.for("react.suspense_list"),om=Symbol.for("react.memo"),Er=Symbol.for("react.lazy"),xE=Symbol.for("react.offscreen"),Fy=Symbol.iterator;function bo(t){return t===null||typeof t!="object"?null:(t=Fy&&t[Fy]||t["@@iterator"],typeof t=="function"?t:null)}var be=Object.assign,Td;function Go(t){if(Td===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Td=e&&e[1]||""}return`
`+Td+t}var Sd=!1;function Cd(t,e){if(!t||Sd)return"";Sd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Sd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Go(t):""}function VA(t){switch(t.tag){case 5:return Go(t.type);case 16:return Go("Lazy");case 13:return Go("Suspense");case 19:return Go("SuspenseList");case 0:case 2:case 15:return t=Cd(t.type,!1),t;case 11:return t=Cd(t.type.render,!1),t;case 1:return t=Cd(t.type,!0),t;default:return""}}function wf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case us:return"Fragment";case ls:return"Portal";case _f:return"Profiler";case im:return"StrictMode";case yf:return"Suspense";case vf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case CE:return(t.displayName||"Context")+".Consumer";case SE:return(t._context.displayName||"Context")+".Provider";case sm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case om:return e=t.displayName||null,e!==null?e:wf(t.type)||"Memo";case Er:e=t._payload,t=t._init;try{return wf(t(e))}catch{}}return null}function FA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wf(e);case 8:return e===im?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function RE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jA(t){var e=RE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ql(t){t._valueTracker||(t._valueTracker=jA(t))}function AE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=RE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Bu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ef(t,e){var n=e.checked;return be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function jy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function NE(t,e){e=e.checked,e!=null&&rm(t,"checked",e,!1)}function If(t,e){NE(t,e);var n=Gr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Tf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Tf(t,e.type,Gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Uy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Tf(t,e,n){(e!=="number"||Bu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ko=Array.isArray;function Is(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Gr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Sf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function By(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Ko(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gr(n)}}function kE(t,e){var n=Gr(e.value),r=Gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function zy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function PE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?PE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Yl,bE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Yl=Yl||document.createElement("div"),Yl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Yl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ta(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},UA=["Webkit","ms","Moz","O"];Object.keys(ra).forEach(function(t){UA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ra[e]=ra[t]})});function DE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ra.hasOwnProperty(t)&&ra[t]?(""+e).trim():e+"px"}function OE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=DE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var BA=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xf(t,e){if(e){if(BA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Rf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Af=null;function am(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nf=null,Ts=null,Ss=null;function $y(t){if(t=cl(t)){if(typeof Nf!="function")throw Error(U(280));var e=t.stateNode;e&&(e=th(e),Nf(t.stateNode,t.type,e))}}function LE(t){Ts?Ss?Ss.push(t):Ss=[t]:Ts=t}function ME(){if(Ts){var t=Ts,e=Ss;if(Ss=Ts=null,$y(t),e)for(t=0;t<e.length;t++)$y(e[t])}}function VE(t,e){return t(e)}function FE(){}var xd=!1;function jE(t,e,n){if(xd)return t(e,n);xd=!0;try{return VE(t,e,n)}finally{xd=!1,(Ts!==null||Ss!==null)&&(FE(),ME())}}function Sa(t,e){var n=t.stateNode;if(n===null)return null;var r=th(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var kf=!1;if(rr)try{var Do={};Object.defineProperty(Do,"passive",{get:function(){kf=!0}}),window.addEventListener("test",Do,Do),window.removeEventListener("test",Do,Do)}catch{kf=!1}function zA(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var ia=!1,zu=null,$u=!1,Pf=null,$A={onError:function(t){ia=!0,zu=t}};function WA(t,e,n,r,i,s,o,a,u){ia=!1,zu=null,zA.apply($A,arguments)}function qA(t,e,n,r,i,s,o,a,u){if(WA.apply(this,arguments),ia){if(ia){var c=zu;ia=!1,zu=null}else throw Error(U(198));$u||($u=!0,Pf=c)}}function Gi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function UE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wy(t){if(Gi(t)!==t)throw Error(U(188))}function HA(t){var e=t.alternate;if(!e){if(e=Gi(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Wy(i),t;if(s===r)return Wy(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function BE(t){return t=HA(t),t!==null?zE(t):null}function zE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=zE(t);if(e!==null)return e;t=t.sibling}return null}var $E=Qt.unstable_scheduleCallback,qy=Qt.unstable_cancelCallback,GA=Qt.unstable_shouldYield,KA=Qt.unstable_requestPaint,je=Qt.unstable_now,QA=Qt.unstable_getCurrentPriorityLevel,lm=Qt.unstable_ImmediatePriority,WE=Qt.unstable_UserBlockingPriority,Wu=Qt.unstable_NormalPriority,YA=Qt.unstable_LowPriority,qE=Qt.unstable_IdlePriority,Xc=null,Rn=null;function XA(t){if(Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(Xc,t,void 0,(t.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:e1,JA=Math.log,ZA=Math.LN2;function e1(t){return t>>>=0,t===0?32:31-(JA(t)/ZA|0)|0}var Xl=64,Jl=4194304;function Qo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function qu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Qo(a):(s&=o,s!==0&&(r=Qo(s)))}else o=n&~i,o!==0?r=Qo(o):s!==0&&(r=Qo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-mn(e),i=1<<n,r|=t[n],e&=~i;return r}function t1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function n1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-mn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=t1(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function bf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function HE(){var t=Xl;return Xl<<=1,!(Xl&4194240)&&(Xl=64),t}function Rd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ll(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mn(e),t[e]=n}function r1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-mn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function um(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-mn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var pe=0;function GE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var KE,cm,QE,YE,XE,Df=!1,Zl=[],Or=null,Lr=null,Mr=null,Ca=new Map,xa=new Map,Tr=[],i1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hy(t,e){switch(t){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":Ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xa.delete(e.pointerId)}}function Oo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=cl(e),e!==null&&cm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function s1(t,e,n,r,i){switch(e){case"focusin":return Or=Oo(Or,t,e,n,r,i),!0;case"dragenter":return Lr=Oo(Lr,t,e,n,r,i),!0;case"mouseover":return Mr=Oo(Mr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ca.set(s,Oo(Ca.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,xa.set(s,Oo(xa.get(s)||null,t,e,n,r,i)),!0}return!1}function JE(t){var e=yi(t.target);if(e!==null){var n=Gi(e);if(n!==null){if(e=n.tag,e===13){if(e=UE(n),e!==null){t.blockedOn=e,XE(t.priority,function(){QE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Eu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Of(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Af=r,n.target.dispatchEvent(r),Af=null}else return e=cl(n),e!==null&&cm(e),t.blockedOn=n,!1;e.shift()}return!0}function Gy(t,e,n){Eu(t)&&n.delete(e)}function o1(){Df=!1,Or!==null&&Eu(Or)&&(Or=null),Lr!==null&&Eu(Lr)&&(Lr=null),Mr!==null&&Eu(Mr)&&(Mr=null),Ca.forEach(Gy),xa.forEach(Gy)}function Lo(t,e){t.blockedOn===e&&(t.blockedOn=null,Df||(Df=!0,Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority,o1)))}function Ra(t){function e(i){return Lo(i,t)}if(0<Zl.length){Lo(Zl[0],t);for(var n=1;n<Zl.length;n++){var r=Zl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Or!==null&&Lo(Or,t),Lr!==null&&Lo(Lr,t),Mr!==null&&Lo(Mr,t),Ca.forEach(e),xa.forEach(e),n=0;n<Tr.length;n++)r=Tr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Tr.length&&(n=Tr[0],n.blockedOn===null);)JE(n),n.blockedOn===null&&Tr.shift()}var Cs=fr.ReactCurrentBatchConfig,Hu=!0;function a1(t,e,n,r){var i=pe,s=Cs.transition;Cs.transition=null;try{pe=1,hm(t,e,n,r)}finally{pe=i,Cs.transition=s}}function l1(t,e,n,r){var i=pe,s=Cs.transition;Cs.transition=null;try{pe=4,hm(t,e,n,r)}finally{pe=i,Cs.transition=s}}function hm(t,e,n,r){if(Hu){var i=Of(t,e,n,r);if(i===null)Vd(t,e,r,Gu,n),Hy(t,r);else if(s1(i,t,e,n,r))r.stopPropagation();else if(Hy(t,r),e&4&&-1<i1.indexOf(t)){for(;i!==null;){var s=cl(i);if(s!==null&&KE(s),s=Of(t,e,n,r),s===null&&Vd(t,e,r,Gu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Vd(t,e,r,null,n)}}var Gu=null;function Of(t,e,n,r){if(Gu=null,t=am(r),t=yi(t),t!==null)if(e=Gi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=UE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gu=t,null}function ZE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(QA()){case lm:return 1;case WE:return 4;case Wu:case YA:return 16;case qE:return 536870912;default:return 16}default:return 16}}var Nr=null,dm=null,Iu=null;function eI(){if(Iu)return Iu;var t,e=dm,n=e.length,r,i="value"in Nr?Nr.value:Nr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Iu=i.slice(t,1<r?1-r:void 0)}function Tu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function eu(){return!0}function Ky(){return!1}function Xt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?eu:Ky,this.isPropagationStopped=Ky,this}return be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=eu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=eu)},persist:function(){},isPersistent:eu}),e}var ro={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fm=Xt(ro),ul=be({},ro,{view:0,detail:0}),u1=Xt(ul),Ad,Nd,Mo,Jc=be({},ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mo&&(Mo&&t.type==="mousemove"?(Ad=t.screenX-Mo.screenX,Nd=t.screenY-Mo.screenY):Nd=Ad=0,Mo=t),Ad)},movementY:function(t){return"movementY"in t?t.movementY:Nd}}),Qy=Xt(Jc),c1=be({},Jc,{dataTransfer:0}),h1=Xt(c1),d1=be({},ul,{relatedTarget:0}),kd=Xt(d1),f1=be({},ro,{animationName:0,elapsedTime:0,pseudoElement:0}),p1=Xt(f1),m1=be({},ro,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),g1=Xt(m1),_1=be({},ro,{data:0}),Yy=Xt(_1),y1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},v1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},w1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=w1[t])?!!e[t]:!1}function pm(){return E1}var I1=be({},ul,{key:function(t){if(t.key){var e=y1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?v1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pm,charCode:function(t){return t.type==="keypress"?Tu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),T1=Xt(I1),S1=be({},Jc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xy=Xt(S1),C1=be({},ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pm}),x1=Xt(C1),R1=be({},ro,{propertyName:0,elapsedTime:0,pseudoElement:0}),A1=Xt(R1),N1=be({},Jc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),k1=Xt(N1),P1=[9,13,27,32],mm=rr&&"CompositionEvent"in window,sa=null;rr&&"documentMode"in document&&(sa=document.documentMode);var b1=rr&&"TextEvent"in window&&!sa,tI=rr&&(!mm||sa&&8<sa&&11>=sa),Jy=" ",Zy=!1;function nI(t,e){switch(t){case"keyup":return P1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rI(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cs=!1;function D1(t,e){switch(t){case"compositionend":return rI(e);case"keypress":return e.which!==32?null:(Zy=!0,Jy);case"textInput":return t=e.data,t===Jy&&Zy?null:t;default:return null}}function O1(t,e){if(cs)return t==="compositionend"||!mm&&nI(t,e)?(t=eI(),Iu=dm=Nr=null,cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return tI&&e.locale!=="ko"?null:e.data;default:return null}}var L1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ev(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!L1[t.type]:e==="textarea"}function iI(t,e,n,r){LE(r),e=Ku(e,"onChange"),0<e.length&&(n=new fm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var oa=null,Aa=null;function M1(t){mI(t,0)}function Zc(t){var e=fs(t);if(AE(e))return t}function V1(t,e){if(t==="change")return e}var sI=!1;if(rr){var Pd;if(rr){var bd="oninput"in document;if(!bd){var tv=document.createElement("div");tv.setAttribute("oninput","return;"),bd=typeof tv.oninput=="function"}Pd=bd}else Pd=!1;sI=Pd&&(!document.documentMode||9<document.documentMode)}function nv(){oa&&(oa.detachEvent("onpropertychange",oI),Aa=oa=null)}function oI(t){if(t.propertyName==="value"&&Zc(Aa)){var e=[];iI(e,Aa,t,am(t)),jE(M1,e)}}function F1(t,e,n){t==="focusin"?(nv(),oa=e,Aa=n,oa.attachEvent("onpropertychange",oI)):t==="focusout"&&nv()}function j1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zc(Aa)}function U1(t,e){if(t==="click")return Zc(e)}function B1(t,e){if(t==="input"||t==="change")return Zc(e)}function z1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vn=typeof Object.is=="function"?Object.is:z1;function Na(t,e){if(vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!gf.call(e,i)||!vn(t[i],e[i]))return!1}return!0}function rv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function iv(t,e){var n=rv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rv(n)}}function aI(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?aI(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function lI(){for(var t=window,e=Bu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bu(t.document)}return e}function gm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $1(t){var e=lI(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&aI(n.ownerDocument.documentElement,n)){if(r!==null&&gm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=iv(n,s);var o=iv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var W1=rr&&"documentMode"in document&&11>=document.documentMode,hs=null,Lf=null,aa=null,Mf=!1;function sv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mf||hs==null||hs!==Bu(r)||(r=hs,"selectionStart"in r&&gm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),aa&&Na(aa,r)||(aa=r,r=Ku(Lf,"onSelect"),0<r.length&&(e=new fm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=hs)))}function tu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ds={animationend:tu("Animation","AnimationEnd"),animationiteration:tu("Animation","AnimationIteration"),animationstart:tu("Animation","AnimationStart"),transitionend:tu("Transition","TransitionEnd")},Dd={},uI={};rr&&(uI=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function eh(t){if(Dd[t])return Dd[t];if(!ds[t])return t;var e=ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in uI)return Dd[t]=e[n];return t}var cI=eh("animationend"),hI=eh("animationiteration"),dI=eh("animationstart"),fI=eh("transitionend"),pI=new Map,ov="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ni(t,e){pI.set(t,e),Hi(e,[t])}for(var Od=0;Od<ov.length;Od++){var Ld=ov[Od],q1=Ld.toLowerCase(),H1=Ld[0].toUpperCase()+Ld.slice(1);ni(q1,"on"+H1)}ni(cI,"onAnimationEnd");ni(hI,"onAnimationIteration");ni(dI,"onAnimationStart");ni("dblclick","onDoubleClick");ni("focusin","onFocus");ni("focusout","onBlur");ni(fI,"onTransitionEnd");Ms("onMouseEnter",["mouseout","mouseover"]);Ms("onMouseLeave",["mouseout","mouseover"]);Ms("onPointerEnter",["pointerout","pointerover"]);Ms("onPointerLeave",["pointerout","pointerover"]);Hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yo));function av(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,qA(r,e,void 0,t),t.currentTarget=null}function mI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;av(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;av(i,a,c),s=u}}}if($u)throw t=Pf,$u=!1,Pf=null,t}function Se(t,e){var n=e[Bf];n===void 0&&(n=e[Bf]=new Set);var r=t+"__bubble";n.has(r)||(gI(e,t,2,!1),n.add(r))}function Md(t,e,n){var r=0;e&&(r|=4),gI(n,t,r,e)}var nu="_reactListening"+Math.random().toString(36).slice(2);function ka(t){if(!t[nu]){t[nu]=!0,TE.forEach(function(n){n!=="selectionchange"&&(G1.has(n)||Md(n,!1,t),Md(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nu]||(e[nu]=!0,Md("selectionchange",!1,e))}}function gI(t,e,n,r){switch(ZE(e)){case 1:var i=a1;break;case 4:i=l1;break;default:i=hm}n=i.bind(null,e,n,t),i=void 0,!kf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Vd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=yi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}jE(function(){var c=s,h=am(n),f=[];e:{var p=pI.get(t);if(p!==void 0){var v=fm,C=t;switch(t){case"keypress":if(Tu(n)===0)break e;case"keydown":case"keyup":v=T1;break;case"focusin":C="focus",v=kd;break;case"focusout":C="blur",v=kd;break;case"beforeblur":case"afterblur":v=kd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Qy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=h1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=x1;break;case cI:case hI:case dI:v=p1;break;case fI:v=A1;break;case"scroll":v=u1;break;case"wheel":v=k1;break;case"copy":case"cut":case"paste":v=g1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Xy}var A=(e&4)!==0,k=!A&&t==="scroll",S=A?p!==null?p+"Capture":null:p;A=[];for(var I=c,R;I!==null;){R=I;var N=R.stateNode;if(R.tag===5&&N!==null&&(R=N,S!==null&&(N=Sa(I,S),N!=null&&A.push(Pa(I,N,R)))),k)break;I=I.return}0<A.length&&(p=new v(p,C,null,n,h),f.push({event:p,listeners:A}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",p&&n!==Af&&(C=n.relatedTarget||n.fromElement)&&(yi(C)||C[ir]))break e;if((v||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,v?(C=n.relatedTarget||n.toElement,v=c,C=C?yi(C):null,C!==null&&(k=Gi(C),C!==k||C.tag!==5&&C.tag!==6)&&(C=null)):(v=null,C=c),v!==C)){if(A=Qy,N="onMouseLeave",S="onMouseEnter",I="mouse",(t==="pointerout"||t==="pointerover")&&(A=Xy,N="onPointerLeave",S="onPointerEnter",I="pointer"),k=v==null?p:fs(v),R=C==null?p:fs(C),p=new A(N,I+"leave",v,n,h),p.target=k,p.relatedTarget=R,N=null,yi(h)===c&&(A=new A(S,I+"enter",C,n,h),A.target=R,A.relatedTarget=k,N=A),k=N,v&&C)t:{for(A=v,S=C,I=0,R=A;R;R=rs(R))I++;for(R=0,N=S;N;N=rs(N))R++;for(;0<I-R;)A=rs(A),I--;for(;0<R-I;)S=rs(S),R--;for(;I--;){if(A===S||S!==null&&A===S.alternate)break t;A=rs(A),S=rs(S)}A=null}else A=null;v!==null&&lv(f,p,v,A,!1),C!==null&&k!==null&&lv(f,k,C,A,!0)}}e:{if(p=c?fs(c):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var M=V1;else if(ev(p))if(sI)M=B1;else{M=j1;var F=F1}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(M=U1);if(M&&(M=M(t,c))){iI(f,M,n,h);break e}F&&F(t,p,c),t==="focusout"&&(F=p._wrapperState)&&F.controlled&&p.type==="number"&&Tf(p,"number",p.value)}switch(F=c?fs(c):window,t){case"focusin":(ev(F)||F.contentEditable==="true")&&(hs=F,Lf=c,aa=null);break;case"focusout":aa=Lf=hs=null;break;case"mousedown":Mf=!0;break;case"contextmenu":case"mouseup":case"dragend":Mf=!1,sv(f,n,h);break;case"selectionchange":if(W1)break;case"keydown":case"keyup":sv(f,n,h)}var E;if(mm)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else cs?nI(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(tI&&n.locale!=="ko"&&(cs||_!=="onCompositionStart"?_==="onCompositionEnd"&&cs&&(E=eI()):(Nr=h,dm="value"in Nr?Nr.value:Nr.textContent,cs=!0)),F=Ku(c,_),0<F.length&&(_=new Yy(_,t,null,n,h),f.push({event:_,listeners:F}),E?_.data=E:(E=rI(n),E!==null&&(_.data=E)))),(E=b1?D1(t,n):O1(t,n))&&(c=Ku(c,"onBeforeInput"),0<c.length&&(h=new Yy("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=E))}mI(f,e)})}function Pa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ku(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Sa(t,n),s!=null&&r.unshift(Pa(t,s,i)),s=Sa(t,e),s!=null&&r.push(Pa(t,s,i))),t=t.return}return r}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Sa(n,s),u!=null&&o.unshift(Pa(n,u,a))):i||(u=Sa(n,s),u!=null&&o.push(Pa(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var K1=/\r\n?/g,Q1=/\u0000|\uFFFD/g;function uv(t){return(typeof t=="string"?t:""+t).replace(K1,`
`).replace(Q1,"")}function ru(t,e,n){if(e=uv(e),uv(t)!==e&&n)throw Error(U(425))}function Qu(){}var Vf=null,Ff=null;function jf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uf=typeof setTimeout=="function"?setTimeout:void 0,Y1=typeof clearTimeout=="function"?clearTimeout:void 0,cv=typeof Promise=="function"?Promise:void 0,X1=typeof queueMicrotask=="function"?queueMicrotask:typeof cv<"u"?function(t){return cv.resolve(null).then(t).catch(J1)}:Uf;function J1(t){setTimeout(function(){throw t})}function Fd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ra(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ra(e)}function Vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var io=Math.random().toString(36).slice(2),Sn="__reactFiber$"+io,ba="__reactProps$"+io,ir="__reactContainer$"+io,Bf="__reactEvents$"+io,Z1="__reactListeners$"+io,eN="__reactHandles$"+io;function yi(t){var e=t[Sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ir]||n[Sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hv(t);t!==null;){if(n=t[Sn])return n;t=hv(t)}return e}t=n,n=t.parentNode}return null}function cl(t){return t=t[Sn]||t[ir],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function th(t){return t[ba]||null}var zf=[],ps=-1;function ri(t){return{current:t}}function xe(t){0>ps||(t.current=zf[ps],zf[ps]=null,ps--)}function Ie(t,e){ps++,zf[ps]=t.current,t.current=e}var Kr={},It=ri(Kr),Vt=ri(!1),Ni=Kr;function Vs(t,e){var n=t.type.contextTypes;if(!n)return Kr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ft(t){return t=t.childContextTypes,t!=null}function Yu(){xe(Vt),xe(It)}function dv(t,e,n){if(It.current!==Kr)throw Error(U(168));Ie(It,e),Ie(Vt,n)}function _I(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,FA(t)||"Unknown",i));return be({},n,r)}function Xu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Kr,Ni=It.current,Ie(It,t),Ie(Vt,Vt.current),!0}function fv(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=_I(t,e,Ni),r.__reactInternalMemoizedMergedChildContext=t,xe(Vt),xe(It),Ie(It,t)):xe(Vt),Ie(Vt,n)}var qn=null,nh=!1,jd=!1;function yI(t){qn===null?qn=[t]:qn.push(t)}function tN(t){nh=!0,yI(t)}function ii(){if(!jd&&qn!==null){jd=!0;var t=0,e=pe;try{var n=qn;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}qn=null,nh=!1}catch(i){throw qn!==null&&(qn=qn.slice(t+1)),$E(lm,ii),i}finally{pe=e,jd=!1}}return null}var ms=[],gs=0,Ju=null,Zu=0,Jt=[],Zt=0,ki=null,Gn=1,Kn="";function pi(t,e){ms[gs++]=Zu,ms[gs++]=Ju,Ju=t,Zu=e}function vI(t,e,n){Jt[Zt++]=Gn,Jt[Zt++]=Kn,Jt[Zt++]=ki,ki=t;var r=Gn;t=Kn;var i=32-mn(r)-1;r&=~(1<<i),n+=1;var s=32-mn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Gn=1<<32-mn(e)+i|n<<i|r,Kn=s+t}else Gn=1<<s|n<<i|r,Kn=t}function _m(t){t.return!==null&&(pi(t,1),vI(t,1,0))}function ym(t){for(;t===Ju;)Ju=ms[--gs],ms[gs]=null,Zu=ms[--gs],ms[gs]=null;for(;t===ki;)ki=Jt[--Zt],Jt[Zt]=null,Kn=Jt[--Zt],Jt[Zt]=null,Gn=Jt[--Zt],Jt[Zt]=null}var Kt=null,qt=null,Re=!1,hn=null;function wI(t,e){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Kt=t,qt=Vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Kt=t,qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ki!==null?{id:Gn,overflow:Kn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Kt=t,qt=null,!0):!1;default:return!1}}function $f(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wf(t){if(Re){var e=qt;if(e){var n=e;if(!pv(t,e)){if($f(t))throw Error(U(418));e=Vr(n.nextSibling);var r=Kt;e&&pv(t,e)?wI(r,n):(t.flags=t.flags&-4097|2,Re=!1,Kt=t)}}else{if($f(t))throw Error(U(418));t.flags=t.flags&-4097|2,Re=!1,Kt=t}}}function mv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Kt=t}function iu(t){if(t!==Kt)return!1;if(!Re)return mv(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!jf(t.type,t.memoizedProps)),e&&(e=qt)){if($f(t))throw EI(),Error(U(418));for(;e;)wI(t,e),e=Vr(e.nextSibling)}if(mv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){qt=Vr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}qt=null}}else qt=Kt?Vr(t.stateNode.nextSibling):null;return!0}function EI(){for(var t=qt;t;)t=Vr(t.nextSibling)}function Fs(){qt=Kt=null,Re=!1}function vm(t){hn===null?hn=[t]:hn.push(t)}var nN=fr.ReactCurrentBatchConfig;function Vo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function su(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gv(t){var e=t._init;return e(t._payload)}function II(t){function e(S,I){if(t){var R=S.deletions;R===null?(S.deletions=[I],S.flags|=16):R.push(I)}}function n(S,I){if(!t)return null;for(;I!==null;)e(S,I),I=I.sibling;return null}function r(S,I){for(S=new Map;I!==null;)I.key!==null?S.set(I.key,I):S.set(I.index,I),I=I.sibling;return S}function i(S,I){return S=Br(S,I),S.index=0,S.sibling=null,S}function s(S,I,R){return S.index=R,t?(R=S.alternate,R!==null?(R=R.index,R<I?(S.flags|=2,I):R):(S.flags|=2,I)):(S.flags|=1048576,I)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function a(S,I,R,N){return I===null||I.tag!==6?(I=Hd(R,S.mode,N),I.return=S,I):(I=i(I,R),I.return=S,I)}function u(S,I,R,N){var M=R.type;return M===us?h(S,I,R.props.children,N,R.key):I!==null&&(I.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Er&&gv(M)===I.type)?(N=i(I,R.props),N.ref=Vo(S,I,R),N.return=S,N):(N=ku(R.type,R.key,R.props,null,S.mode,N),N.ref=Vo(S,I,R),N.return=S,N)}function c(S,I,R,N){return I===null||I.tag!==4||I.stateNode.containerInfo!==R.containerInfo||I.stateNode.implementation!==R.implementation?(I=Gd(R,S.mode,N),I.return=S,I):(I=i(I,R.children||[]),I.return=S,I)}function h(S,I,R,N,M){return I===null||I.tag!==7?(I=Ci(R,S.mode,N,M),I.return=S,I):(I=i(I,R),I.return=S,I)}function f(S,I,R){if(typeof I=="string"&&I!==""||typeof I=="number")return I=Hd(""+I,S.mode,R),I.return=S,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Kl:return R=ku(I.type,I.key,I.props,null,S.mode,R),R.ref=Vo(S,null,I),R.return=S,R;case ls:return I=Gd(I,S.mode,R),I.return=S,I;case Er:var N=I._init;return f(S,N(I._payload),R)}if(Ko(I)||bo(I))return I=Ci(I,S.mode,R,null),I.return=S,I;su(S,I)}return null}function p(S,I,R,N){var M=I!==null?I.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return M!==null?null:a(S,I,""+R,N);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Kl:return R.key===M?u(S,I,R,N):null;case ls:return R.key===M?c(S,I,R,N):null;case Er:return M=R._init,p(S,I,M(R._payload),N)}if(Ko(R)||bo(R))return M!==null?null:h(S,I,R,N,null);su(S,R)}return null}function v(S,I,R,N,M){if(typeof N=="string"&&N!==""||typeof N=="number")return S=S.get(R)||null,a(I,S,""+N,M);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Kl:return S=S.get(N.key===null?R:N.key)||null,u(I,S,N,M);case ls:return S=S.get(N.key===null?R:N.key)||null,c(I,S,N,M);case Er:var F=N._init;return v(S,I,R,F(N._payload),M)}if(Ko(N)||bo(N))return S=S.get(R)||null,h(I,S,N,M,null);su(I,N)}return null}function C(S,I,R,N){for(var M=null,F=null,E=I,_=I=0,T=null;E!==null&&_<R.length;_++){E.index>_?(T=E,E=null):T=E.sibling;var x=p(S,E,R[_],N);if(x===null){E===null&&(E=T);break}t&&E&&x.alternate===null&&e(S,E),I=s(x,I,_),F===null?M=x:F.sibling=x,F=x,E=T}if(_===R.length)return n(S,E),Re&&pi(S,_),M;if(E===null){for(;_<R.length;_++)E=f(S,R[_],N),E!==null&&(I=s(E,I,_),F===null?M=E:F.sibling=E,F=E);return Re&&pi(S,_),M}for(E=r(S,E);_<R.length;_++)T=v(E,S,_,R[_],N),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?_:T.key),I=s(T,I,_),F===null?M=T:F.sibling=T,F=T);return t&&E.forEach(function(P){return e(S,P)}),Re&&pi(S,_),M}function A(S,I,R,N){var M=bo(R);if(typeof M!="function")throw Error(U(150));if(R=M.call(R),R==null)throw Error(U(151));for(var F=M=null,E=I,_=I=0,T=null,x=R.next();E!==null&&!x.done;_++,x=R.next()){E.index>_?(T=E,E=null):T=E.sibling;var P=p(S,E,x.value,N);if(P===null){E===null&&(E=T);break}t&&E&&P.alternate===null&&e(S,E),I=s(P,I,_),F===null?M=P:F.sibling=P,F=P,E=T}if(x.done)return n(S,E),Re&&pi(S,_),M;if(E===null){for(;!x.done;_++,x=R.next())x=f(S,x.value,N),x!==null&&(I=s(x,I,_),F===null?M=x:F.sibling=x,F=x);return Re&&pi(S,_),M}for(E=r(S,E);!x.done;_++,x=R.next())x=v(E,S,_,x.value,N),x!==null&&(t&&x.alternate!==null&&E.delete(x.key===null?_:x.key),I=s(x,I,_),F===null?M=x:F.sibling=x,F=x);return t&&E.forEach(function(b){return e(S,b)}),Re&&pi(S,_),M}function k(S,I,R,N){if(typeof R=="object"&&R!==null&&R.type===us&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case Kl:e:{for(var M=R.key,F=I;F!==null;){if(F.key===M){if(M=R.type,M===us){if(F.tag===7){n(S,F.sibling),I=i(F,R.props.children),I.return=S,S=I;break e}}else if(F.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Er&&gv(M)===F.type){n(S,F.sibling),I=i(F,R.props),I.ref=Vo(S,F,R),I.return=S,S=I;break e}n(S,F);break}else e(S,F);F=F.sibling}R.type===us?(I=Ci(R.props.children,S.mode,N,R.key),I.return=S,S=I):(N=ku(R.type,R.key,R.props,null,S.mode,N),N.ref=Vo(S,I,R),N.return=S,S=N)}return o(S);case ls:e:{for(F=R.key;I!==null;){if(I.key===F)if(I.tag===4&&I.stateNode.containerInfo===R.containerInfo&&I.stateNode.implementation===R.implementation){n(S,I.sibling),I=i(I,R.children||[]),I.return=S,S=I;break e}else{n(S,I);break}else e(S,I);I=I.sibling}I=Gd(R,S.mode,N),I.return=S,S=I}return o(S);case Er:return F=R._init,k(S,I,F(R._payload),N)}if(Ko(R))return C(S,I,R,N);if(bo(R))return A(S,I,R,N);su(S,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,I!==null&&I.tag===6?(n(S,I.sibling),I=i(I,R),I.return=S,S=I):(n(S,I),I=Hd(R,S.mode,N),I.return=S,S=I),o(S)):n(S,I)}return k}var js=II(!0),TI=II(!1),ec=ri(null),tc=null,_s=null,wm=null;function Em(){wm=_s=tc=null}function Im(t){var e=ec.current;xe(ec),t._currentValue=e}function qf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function xs(t,e){tc=t,wm=_s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ot=!0),t.firstContext=null)}function sn(t){var e=t._currentValue;if(wm!==t)if(t={context:t,memoizedValue:e,next:null},_s===null){if(tc===null)throw Error(U(308));_s=t,tc.dependencies={lanes:0,firstContext:t}}else _s=_s.next=t;return e}var vi=null;function Tm(t){vi===null?vi=[t]:vi.push(t)}function SI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Tm(e)):(n.next=i.next,i.next=n),e.interleaved=n,sr(t,r)}function sr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ir=!1;function Sm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function CI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,sr(t,n)}return i=r.interleaved,i===null?(e.next=e,Tm(r)):(e.next=i.next,i.next=e),r.interleaved=e,sr(t,n)}function Su(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,um(t,n)}}function _v(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nc(t,e,n,r){var i=t.updateQueue;Ir=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,h=c=u=null,a=s;do{var p=a.lane,v=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var C=t,A=a;switch(p=e,v=n,A.tag){case 1:if(C=A.payload,typeof C=="function"){f=C.call(v,f,p);break e}f=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=A.payload,p=typeof C=="function"?C.call(v,f,p):C,p==null)break e;f=be({},f,p);break e;case 2:Ir=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else v={eventTime:v,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=v,u=f):h=h.next=v,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);bi|=o,t.lanes=o,t.memoizedState=f}}function yv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var hl={},An=ri(hl),Da=ri(hl),Oa=ri(hl);function wi(t){if(t===hl)throw Error(U(174));return t}function Cm(t,e){switch(Ie(Oa,e),Ie(Da,t),Ie(An,hl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Cf(e,t)}xe(An),Ie(An,e)}function Us(){xe(An),xe(Da),xe(Oa)}function xI(t){wi(Oa.current);var e=wi(An.current),n=Cf(e,t.type);e!==n&&(Ie(Da,t),Ie(An,n))}function xm(t){Da.current===t&&(xe(An),xe(Da))}var Ne=ri(0);function rc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ud=[];function Rm(){for(var t=0;t<Ud.length;t++)Ud[t]._workInProgressVersionPrimary=null;Ud.length=0}var Cu=fr.ReactCurrentDispatcher,Bd=fr.ReactCurrentBatchConfig,Pi=0,Pe=null,He=null,Ze=null,ic=!1,la=!1,La=0,rN=0;function mt(){throw Error(U(321))}function Am(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vn(t[n],e[n]))return!1;return!0}function Nm(t,e,n,r,i,s){if(Pi=s,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cu.current=t===null||t.memoizedState===null?aN:lN,t=n(r,i),la){s=0;do{if(la=!1,La=0,25<=s)throw Error(U(301));s+=1,Ze=He=null,e.updateQueue=null,Cu.current=uN,t=n(r,i)}while(la)}if(Cu.current=sc,e=He!==null&&He.next!==null,Pi=0,Ze=He=Pe=null,ic=!1,e)throw Error(U(300));return t}function km(){var t=La!==0;return La=0,t}function Tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Pe.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function on(){if(He===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var e=Ze===null?Pe.memoizedState:Ze.next;if(e!==null)Ze=e,He=t;else{if(t===null)throw Error(U(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Ze===null?Pe.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function Ma(t,e){return typeof e=="function"?e(t):e}function zd(t){var e=on(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=He,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((Pi&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Pe.lanes|=h,bi|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,vn(r,e.memoizedState)||(Ot=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Pe.lanes|=s,bi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $d(t){var e=on(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);vn(s,e.memoizedState)||(Ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function RI(){}function AI(t,e){var n=Pe,r=on(),i=e(),s=!vn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ot=!0),r=r.queue,Pm(PI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,Va(9,kI.bind(null,n,r,i,e),void 0,null),nt===null)throw Error(U(349));Pi&30||NI(n,e,i)}return i}function NI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function kI(t,e,n,r){e.value=n,e.getSnapshot=r,bI(e)&&DI(t)}function PI(t,e,n){return n(function(){bI(e)&&DI(t)})}function bI(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vn(t,n)}catch{return!0}}function DI(t){var e=sr(t,1);e!==null&&gn(e,t,1,-1)}function vv(t){var e=Tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:t},e.queue=t,t=t.dispatch=oN.bind(null,Pe,t),[e.memoizedState,t]}function Va(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function OI(){return on().memoizedState}function xu(t,e,n,r){var i=Tn();Pe.flags|=t,i.memoizedState=Va(1|e,n,void 0,r===void 0?null:r)}function rh(t,e,n,r){var i=on();r=r===void 0?null:r;var s=void 0;if(He!==null){var o=He.memoizedState;if(s=o.destroy,r!==null&&Am(r,o.deps)){i.memoizedState=Va(e,n,s,r);return}}Pe.flags|=t,i.memoizedState=Va(1|e,n,s,r)}function wv(t,e){return xu(8390656,8,t,e)}function Pm(t,e){return rh(2048,8,t,e)}function LI(t,e){return rh(4,2,t,e)}function MI(t,e){return rh(4,4,t,e)}function VI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function FI(t,e,n){return n=n!=null?n.concat([t]):null,rh(4,4,VI.bind(null,e,t),n)}function bm(){}function jI(t,e){var n=on();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Am(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function UI(t,e){var n=on();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Am(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function BI(t,e,n){return Pi&21?(vn(n,e)||(n=HE(),Pe.lanes|=n,bi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ot=!0),t.memoizedState=n)}function iN(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=Bd.transition;Bd.transition={};try{t(!1),e()}finally{pe=n,Bd.transition=r}}function zI(){return on().memoizedState}function sN(t,e,n){var r=Ur(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$I(t))WI(e,n);else if(n=SI(t,e,n,r),n!==null){var i=Rt();gn(n,t,r,i),qI(n,e,r)}}function oN(t,e,n){var r=Ur(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($I(t))WI(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,vn(a,o)){var u=e.interleaved;u===null?(i.next=i,Tm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=SI(t,e,i,r),n!==null&&(i=Rt(),gn(n,t,r,i),qI(n,e,r))}}function $I(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function WI(t,e){la=ic=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function qI(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,um(t,n)}}var sc={readContext:sn,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useInsertionEffect:mt,useLayoutEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useMutableSource:mt,useSyncExternalStore:mt,useId:mt,unstable_isNewReconciler:!1},aN={readContext:sn,useCallback:function(t,e){return Tn().memoizedState=[t,e===void 0?null:e],t},useContext:sn,useEffect:wv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xu(4194308,4,VI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xu(4194308,4,t,e)},useInsertionEffect:function(t,e){return xu(4,2,t,e)},useMemo:function(t,e){var n=Tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=sN.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=Tn();return t={current:t},e.memoizedState=t},useState:vv,useDebugValue:bm,useDeferredValue:function(t){return Tn().memoizedState=t},useTransition:function(){var t=vv(!1),e=t[0];return t=iN.bind(null,t[1]),Tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,i=Tn();if(Re){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),nt===null)throw Error(U(349));Pi&30||NI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,wv(PI.bind(null,r,s,t),[t]),r.flags|=2048,Va(9,kI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Tn(),e=nt.identifierPrefix;if(Re){var n=Kn,r=Gn;n=(r&~(1<<32-mn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=La++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=rN++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},lN={readContext:sn,useCallback:jI,useContext:sn,useEffect:Pm,useImperativeHandle:FI,useInsertionEffect:LI,useLayoutEffect:MI,useMemo:UI,useReducer:zd,useRef:OI,useState:function(){return zd(Ma)},useDebugValue:bm,useDeferredValue:function(t){var e=on();return BI(e,He.memoizedState,t)},useTransition:function(){var t=zd(Ma)[0],e=on().memoizedState;return[t,e]},useMutableSource:RI,useSyncExternalStore:AI,useId:zI,unstable_isNewReconciler:!1},uN={readContext:sn,useCallback:jI,useContext:sn,useEffect:Pm,useImperativeHandle:FI,useInsertionEffect:LI,useLayoutEffect:MI,useMemo:UI,useReducer:$d,useRef:OI,useState:function(){return $d(Ma)},useDebugValue:bm,useDeferredValue:function(t){var e=on();return He===null?e.memoizedState=t:BI(e,He.memoizedState,t)},useTransition:function(){var t=$d(Ma)[0],e=on().memoizedState;return[t,e]},useMutableSource:RI,useSyncExternalStore:AI,useId:zI,unstable_isNewReconciler:!1};function un(t,e){if(t&&t.defaultProps){e=be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ih={isMounted:function(t){return(t=t._reactInternals)?Gi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Rt(),i=Ur(t),s=Zn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Fr(t,s,i),e!==null&&(gn(e,t,i,r),Su(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Rt(),i=Ur(t),s=Zn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Fr(t,s,i),e!==null&&(gn(e,t,i,r),Su(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Rt(),r=Ur(t),i=Zn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Fr(t,i,r),e!==null&&(gn(e,t,r,n),Su(e,t,r))}};function Ev(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Na(n,r)||!Na(i,s):!0}function HI(t,e,n){var r=!1,i=Kr,s=e.contextType;return typeof s=="object"&&s!==null?s=sn(s):(i=Ft(e)?Ni:It.current,r=e.contextTypes,s=(r=r!=null)?Vs(t,i):Kr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ih,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Iv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ih.enqueueReplaceState(e,e.state,null)}function Gf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Sm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=sn(s):(s=Ft(e)?Ni:It.current,i.context=Vs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ih.enqueueReplaceState(i,i.state,null),nc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Bs(t,e){try{var n="",r=e;do n+=VA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Wd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Kf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var cN=typeof WeakMap=="function"?WeakMap:Map;function GI(t,e,n){n=Zn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ac||(ac=!0,ip=r),Kf(t,e)},n}function KI(t,e,n){n=Zn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Kf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Kf(t,e),typeof r!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Tv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new cN;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=SN.bind(null,t,e,n),e.then(t,t))}function Sv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Cv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Zn(-1,1),e.tag=2,Fr(n,e,1))),n.lanes|=1),t)}var hN=fr.ReactCurrentOwner,Ot=!1;function xt(t,e,n,r){e.child=t===null?TI(e,null,n,r):js(e,t.child,n,r)}function xv(t,e,n,r,i){n=n.render;var s=e.ref;return xs(e,i),r=Nm(t,e,n,r,s,i),n=km(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,or(t,e,i)):(Re&&n&&_m(e),e.flags|=1,xt(t,e,r,i),e.child)}function Rv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Um(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,QI(t,e,s,r,i)):(t=ku(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Na,n(o,r)&&t.ref===e.ref)return or(t,e,i)}return e.flags|=1,t=Br(s,r),t.ref=e.ref,t.return=e,e.child=t}function QI(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Na(s,r)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ot=!0);else return e.lanes=t.lanes,or(t,e,i)}return Qf(t,e,n,r,i)}function YI(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(vs,Wt),Wt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(vs,Wt),Wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ie(vs,Wt),Wt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ie(vs,Wt),Wt|=r;return xt(t,e,i,n),e.child}function XI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qf(t,e,n,r,i){var s=Ft(n)?Ni:It.current;return s=Vs(e,s),xs(e,i),n=Nm(t,e,n,r,s,i),r=km(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,or(t,e,i)):(Re&&r&&_m(e),e.flags|=1,xt(t,e,n,i),e.child)}function Av(t,e,n,r,i){if(Ft(n)){var s=!0;Xu(e)}else s=!1;if(xs(e,i),e.stateNode===null)Ru(t,e),HI(e,n,r),Gf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=sn(c):(c=Ft(n)?Ni:It.current,c=Vs(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Iv(e,o,r,c),Ir=!1;var p=e.memoizedState;o.state=p,nc(e,r,o,i),u=e.memoizedState,a!==r||p!==u||Vt.current||Ir?(typeof h=="function"&&(Hf(e,n,h,r),u=e.memoizedState),(a=Ir||Ev(e,n,a,r,p,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,CI(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:un(e.type,a),o.props=c,f=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=sn(u):(u=Ft(n)?Ni:It.current,u=Vs(e,u));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==u)&&Iv(e,o,r,u),Ir=!1,p=e.memoizedState,o.state=p,nc(e,r,o,i);var C=e.memoizedState;a!==f||p!==C||Vt.current||Ir?(typeof v=="function"&&(Hf(e,n,v,r),C=e.memoizedState),(c=Ir||Ev(e,n,c,r,p,C,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Yf(t,e,n,r,s,i)}function Yf(t,e,n,r,i,s){XI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&fv(e,n,!1),or(t,e,s);r=e.stateNode,hN.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=js(e,t.child,null,s),e.child=js(e,null,a,s)):xt(t,e,a,s),e.memoizedState=r.state,i&&fv(e,n,!0),e.child}function JI(t){var e=t.stateNode;e.pendingContext?dv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dv(t,e.context,!1),Cm(t,e.containerInfo)}function Nv(t,e,n,r,i){return Fs(),vm(i),e.flags|=256,xt(t,e,n,r),e.child}var Xf={dehydrated:null,treeContext:null,retryLane:0};function Jf(t){return{baseLanes:t,cachePool:null,transitions:null}}function ZI(t,e,n){var r=e.pendingProps,i=Ne.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ie(Ne,i&1),t===null)return Wf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ah(o,r,0,null),t=Ci(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Jf(n),e.memoizedState=Xf,t):Dm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return dN(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Br(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Br(a,s):(s=Ci(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Jf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Xf,r}return s=t.child,t=s.sibling,r=Br(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Dm(t,e){return e=ah({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ou(t,e,n,r){return r!==null&&vm(r),js(e,t.child,null,n),t=Dm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function dN(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Wd(Error(U(422))),ou(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ah({mode:"visible",children:r.children},i,0,null),s=Ci(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&js(e,t.child,null,o),e.child.memoizedState=Jf(o),e.memoizedState=Xf,s);if(!(e.mode&1))return ou(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(U(419)),r=Wd(s,r,void 0),ou(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ot||a){if(r=nt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,sr(t,i),gn(r,t,i,-1))}return jm(),r=Wd(Error(U(421))),ou(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=CN.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,qt=Vr(i.nextSibling),Kt=e,Re=!0,hn=null,t!==null&&(Jt[Zt++]=Gn,Jt[Zt++]=Kn,Jt[Zt++]=ki,Gn=t.id,Kn=t.overflow,ki=e),e=Dm(e,r.children),e.flags|=4096,e)}function kv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),qf(t.return,e,n)}function qd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function eT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(xt(t,e,r.children,n),r=Ne.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kv(t,n,e);else if(t.tag===19)kv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(Ne,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&rc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),qd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&rc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}qd(e,!0,n,null,s);break;case"together":qd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ru(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function or(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),bi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=Br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function fN(t,e,n){switch(e.tag){case 3:JI(e),Fs();break;case 5:xI(e);break;case 1:Ft(e.type)&&Xu(e);break;case 4:Cm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ie(ec,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Ne,Ne.current&1),e.flags|=128,null):n&e.child.childLanes?ZI(t,e,n):(Ie(Ne,Ne.current&1),t=or(t,e,n),t!==null?t.sibling:null);Ie(Ne,Ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return eT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(Ne,Ne.current),r)break;return null;case 22:case 23:return e.lanes=0,YI(t,e,n)}return or(t,e,n)}var tT,Zf,nT,rT;tT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zf=function(){};nT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,wi(An.current);var s=null;switch(n){case"input":i=Ef(t,i),r=Ef(t,r),s=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),s=[];break;case"textarea":i=Sf(t,i),r=Sf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Qu)}xf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ia.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ia.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Se("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};rT=function(t,e,n,r){n!==r&&(e.flags|=4)};function Fo(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function pN(t,e,n){var r=e.pendingProps;switch(ym(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(e),null;case 1:return Ft(e.type)&&Yu(),gt(e),null;case 3:return r=e.stateNode,Us(),xe(Vt),xe(It),Rm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(iu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hn!==null&&(ap(hn),hn=null))),Zf(t,e),gt(e),null;case 5:xm(e);var i=wi(Oa.current);if(n=e.type,t!==null&&e.stateNode!=null)nT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return gt(e),null}if(t=wi(An.current),iu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Sn]=e,r[ba]=s,t=(e.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(i=0;i<Yo.length;i++)Se(Yo[i],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":jy(r,s),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Se("invalid",r);break;case"textarea":By(r,s),Se("invalid",r)}xf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ru(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ru(r.textContent,a,t),i=["children",""+a]):Ia.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Se("scroll",r)}switch(n){case"input":Ql(r),Uy(r,s,!0);break;case"textarea":Ql(r),zy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Qu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=PE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Sn]=e,t[ba]=r,tT(t,e,!1,!1),e.stateNode=t;e:{switch(o=Rf(n,r),n){case"dialog":Se("cancel",t),Se("close",t),i=r;break;case"iframe":case"object":case"embed":Se("load",t),i=r;break;case"video":case"audio":for(i=0;i<Yo.length;i++)Se(Yo[i],t);i=r;break;case"source":Se("error",t),i=r;break;case"img":case"image":case"link":Se("error",t),Se("load",t),i=r;break;case"details":Se("toggle",t),i=r;break;case"input":jy(t,r),i=Ef(t,r),Se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),Se("invalid",t);break;case"textarea":By(t,r),i=Sf(t,r),Se("invalid",t);break;default:i=r}xf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?OE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&bE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ta(t,u):typeof u=="number"&&Ta(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ia.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Se("scroll",t):u!=null&&rm(t,s,u,o))}switch(n){case"input":Ql(t),Uy(t,r,!1);break;case"textarea":Ql(t),zy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Gr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Is(t,!!r.multiple,s,!1):r.defaultValue!=null&&Is(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Qu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return gt(e),null;case 6:if(t&&e.stateNode!=null)rT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=wi(Oa.current),wi(An.current),iu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Sn]=e,(s=r.nodeValue!==n)&&(t=Kt,t!==null))switch(t.tag){case 3:ru(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ru(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Sn]=e,e.stateNode=r}return gt(e),null;case 13:if(xe(Ne),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&qt!==null&&e.mode&1&&!(e.flags&128))EI(),Fs(),e.flags|=98560,s=!1;else if(s=iu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[Sn]=e}else Fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;gt(e),s=!1}else hn!==null&&(ap(hn),hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ne.current&1?Ke===0&&(Ke=3):jm())),e.updateQueue!==null&&(e.flags|=4),gt(e),null);case 4:return Us(),Zf(t,e),t===null&&ka(e.stateNode.containerInfo),gt(e),null;case 10:return Im(e.type._context),gt(e),null;case 17:return Ft(e.type)&&Yu(),gt(e),null;case 19:if(xe(Ne),s=e.memoizedState,s===null)return gt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Fo(s,!1);else{if(Ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=rc(t),o!==null){for(e.flags|=128,Fo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(Ne,Ne.current&1|2),e.child}t=t.sibling}s.tail!==null&&je()>zs&&(e.flags|=128,r=!0,Fo(s,!1),e.lanes=4194304)}else{if(!r)if(t=rc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Re)return gt(e),null}else 2*je()-s.renderingStartTime>zs&&n!==1073741824&&(e.flags|=128,r=!0,Fo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=je(),e.sibling=null,n=Ne.current,Ie(Ne,r?n&1|2:n&1),e):(gt(e),null);case 22:case 23:return Fm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Wt&1073741824&&(gt(e),e.subtreeFlags&6&&(e.flags|=8192)):gt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function mN(t,e){switch(ym(e),e.tag){case 1:return Ft(e.type)&&Yu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Us(),xe(Vt),xe(It),Rm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xm(e),null;case 13:if(xe(Ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xe(Ne),null;case 4:return Us(),null;case 10:return Im(e.type._context),null;case 22:case 23:return Fm(),null;case 24:return null;default:return null}}var au=!1,vt=!1,gN=typeof WeakSet=="function"?WeakSet:Set,q=null;function ys(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function ep(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var Pv=!1;function _N(t,e){if(Vf=Hu,t=lI(),gm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,f=t,p=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)p=f,f=v;for(;;){if(f===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++h===r&&(u=o),(v=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=v}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ff={focusedElem:t,selectionRange:n},Hu=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var A=C.memoizedProps,k=C.memoizedState,S=e.stateNode,I=S.getSnapshotBeforeUpdate(e.elementType===e.type?A:un(e.type,A),k);S.__reactInternalSnapshotBeforeUpdate=I}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(N){Oe(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return C=Pv,Pv=!1,C}function ua(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ep(e,n,s)}i=i.next}while(i!==r)}}function sh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function tp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function iT(t){var e=t.alternate;e!==null&&(t.alternate=null,iT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Sn],delete e[ba],delete e[Bf],delete e[Z1],delete e[eN])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function sT(t){return t.tag===5||t.tag===3||t.tag===4}function bv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function np(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Qu));else if(r!==4&&(t=t.child,t!==null))for(np(t,e,n),t=t.sibling;t!==null;)np(t,e,n),t=t.sibling}function rp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(rp(t,e,n),t=t.sibling;t!==null;)rp(t,e,n),t=t.sibling}var it=null,cn=!1;function yr(t,e,n){for(n=n.child;n!==null;)oT(t,e,n),n=n.sibling}function oT(t,e,n){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(Xc,n)}catch{}switch(n.tag){case 5:vt||ys(n,e);case 6:var r=it,i=cn;it=null,yr(t,e,n),it=r,cn=i,it!==null&&(cn?(t=it,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):it.removeChild(n.stateNode));break;case 18:it!==null&&(cn?(t=it,n=n.stateNode,t.nodeType===8?Fd(t.parentNode,n):t.nodeType===1&&Fd(t,n),Ra(t)):Fd(it,n.stateNode));break;case 4:r=it,i=cn,it=n.stateNode.containerInfo,cn=!0,yr(t,e,n),it=r,cn=i;break;case 0:case 11:case 14:case 15:if(!vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ep(n,e,o),i=i.next}while(i!==r)}yr(t,e,n);break;case 1:if(!vt&&(ys(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Oe(n,e,a)}yr(t,e,n);break;case 21:yr(t,e,n);break;case 22:n.mode&1?(vt=(r=vt)||n.memoizedState!==null,yr(t,e,n),vt=r):yr(t,e,n);break;default:yr(t,e,n)}}function Dv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new gN),e.forEach(function(r){var i=xN.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ln(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:it=a.stateNode,cn=!1;break e;case 3:it=a.stateNode.containerInfo,cn=!0;break e;case 4:it=a.stateNode.containerInfo,cn=!0;break e}a=a.return}if(it===null)throw Error(U(160));oT(s,o,i),it=null,cn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Oe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)aT(e,t),e=e.sibling}function aT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ln(e,t),In(t),r&4){try{ua(3,t,t.return),sh(3,t)}catch(A){Oe(t,t.return,A)}try{ua(5,t,t.return)}catch(A){Oe(t,t.return,A)}}break;case 1:ln(e,t),In(t),r&512&&n!==null&&ys(n,n.return);break;case 5:if(ln(e,t),In(t),r&512&&n!==null&&ys(n,n.return),t.flags&32){var i=t.stateNode;try{Ta(i,"")}catch(A){Oe(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&NE(i,s),Rf(a,o);var c=Rf(a,s);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?OE(i,f):h==="dangerouslySetInnerHTML"?bE(i,f):h==="children"?Ta(i,f):rm(i,h,f,c)}switch(a){case"input":If(i,s);break;case"textarea":kE(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Is(i,!!s.multiple,v,!1):p!==!!s.multiple&&(s.defaultValue!=null?Is(i,!!s.multiple,s.defaultValue,!0):Is(i,!!s.multiple,s.multiple?[]:"",!1))}i[ba]=s}catch(A){Oe(t,t.return,A)}}break;case 6:if(ln(e,t),In(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(A){Oe(t,t.return,A)}}break;case 3:if(ln(e,t),In(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ra(e.containerInfo)}catch(A){Oe(t,t.return,A)}break;case 4:ln(e,t),In(t);break;case 13:ln(e,t),In(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Mm=je())),r&4&&Dv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(vt=(c=vt)||h,ln(e,t),vt=c):ln(e,t),In(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(q=t,h=t.child;h!==null;){for(f=q=h;q!==null;){switch(p=q,v=p.child,p.tag){case 0:case 11:case 14:case 15:ua(4,p,p.return);break;case 1:ys(p,p.return);var C=p.stateNode;if(typeof C.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(A){Oe(r,n,A)}}break;case 5:ys(p,p.return);break;case 22:if(p.memoizedState!==null){Lv(f);continue}}v!==null?(v.return=p,q=v):Lv(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=DE("display",o))}catch(A){Oe(t,t.return,A)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(A){Oe(t,t.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ln(e,t),In(t),r&4&&Dv(t);break;case 21:break;default:ln(e,t),In(t)}}function In(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(sT(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ta(i,""),r.flags&=-33);var s=bv(t);rp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=bv(t);np(t,a,o);break;default:throw Error(U(161))}}catch(u){Oe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yN(t,e,n){q=t,lT(t)}function lT(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||au;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||vt;a=au;var c=vt;if(au=o,(vt=u)&&!c)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?Mv(i):u!==null?(u.return=o,q=u):Mv(i);for(;s!==null;)q=s,lT(s),s=s.sibling;q=i,au=a,vt=c}Ov(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):Ov(t)}}function Ov(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:vt||sh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!vt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:un(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&yv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}yv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Ra(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}vt||e.flags&512&&tp(e)}catch(p){Oe(e,e.return,p)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Lv(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function Mv(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{sh(4,e)}catch(u){Oe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Oe(e,i,u)}}var s=e.return;try{tp(e)}catch(u){Oe(e,s,u)}break;case 5:var o=e.return;try{tp(e)}catch(u){Oe(e,o,u)}}}catch(u){Oe(e,e.return,u)}if(e===t){q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,q=a;break}q=e.return}}var vN=Math.ceil,oc=fr.ReactCurrentDispatcher,Om=fr.ReactCurrentOwner,tn=fr.ReactCurrentBatchConfig,ue=0,nt=null,$e=null,at=0,Wt=0,vs=ri(0),Ke=0,Fa=null,bi=0,oh=0,Lm=0,ca=null,bt=null,Mm=0,zs=1/0,Wn=null,ac=!1,ip=null,jr=null,lu=!1,kr=null,lc=0,ha=0,sp=null,Au=-1,Nu=0;function Rt(){return ue&6?je():Au!==-1?Au:Au=je()}function Ur(t){return t.mode&1?ue&2&&at!==0?at&-at:nN.transition!==null?(Nu===0&&(Nu=HE()),Nu):(t=pe,t!==0||(t=window.event,t=t===void 0?16:ZE(t.type)),t):1}function gn(t,e,n,r){if(50<ha)throw ha=0,sp=null,Error(U(185));ll(t,n,r),(!(ue&2)||t!==nt)&&(t===nt&&(!(ue&2)&&(oh|=n),Ke===4&&Sr(t,at)),jt(t,r),n===1&&ue===0&&!(e.mode&1)&&(zs=je()+500,nh&&ii()))}function jt(t,e){var n=t.callbackNode;n1(t,e);var r=qu(t,t===nt?at:0);if(r===0)n!==null&&qy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&qy(n),e===1)t.tag===0?tN(Vv.bind(null,t)):yI(Vv.bind(null,t)),X1(function(){!(ue&6)&&ii()}),n=null;else{switch(GE(r)){case 1:n=lm;break;case 4:n=WE;break;case 16:n=Wu;break;case 536870912:n=qE;break;default:n=Wu}n=gT(n,uT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function uT(t,e){if(Au=-1,Nu=0,ue&6)throw Error(U(327));var n=t.callbackNode;if(Rs()&&t.callbackNode!==n)return null;var r=qu(t,t===nt?at:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=uc(t,r);else{e=r;var i=ue;ue|=2;var s=hT();(nt!==t||at!==e)&&(Wn=null,zs=je()+500,Si(t,e));do try{IN();break}catch(a){cT(t,a)}while(!0);Em(),oc.current=s,ue=i,$e!==null?e=0:(nt=null,at=0,e=Ke)}if(e!==0){if(e===2&&(i=bf(t),i!==0&&(r=i,e=op(t,i))),e===1)throw n=Fa,Si(t,0),Sr(t,r),jt(t,je()),n;if(e===6)Sr(t,r);else{if(i=t.current.alternate,!(r&30)&&!wN(i)&&(e=uc(t,r),e===2&&(s=bf(t),s!==0&&(r=s,e=op(t,s))),e===1))throw n=Fa,Si(t,0),Sr(t,r),jt(t,je()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:mi(t,bt,Wn);break;case 3:if(Sr(t,r),(r&130023424)===r&&(e=Mm+500-je(),10<e)){if(qu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Rt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Uf(mi.bind(null,t,bt,Wn),e);break}mi(t,bt,Wn);break;case 4:if(Sr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-mn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vN(r/1960))-r,10<r){t.timeoutHandle=Uf(mi.bind(null,t,bt,Wn),r);break}mi(t,bt,Wn);break;case 5:mi(t,bt,Wn);break;default:throw Error(U(329))}}}return jt(t,je()),t.callbackNode===n?uT.bind(null,t):null}function op(t,e){var n=ca;return t.current.memoizedState.isDehydrated&&(Si(t,e).flags|=256),t=uc(t,e),t!==2&&(e=bt,bt=n,e!==null&&ap(e)),t}function ap(t){bt===null?bt=t:bt.push.apply(bt,t)}function wN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!vn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sr(t,e){for(e&=~Lm,e&=~oh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mn(e),r=1<<n;t[n]=-1,e&=~r}}function Vv(t){if(ue&6)throw Error(U(327));Rs();var e=qu(t,0);if(!(e&1))return jt(t,je()),null;var n=uc(t,e);if(t.tag!==0&&n===2){var r=bf(t);r!==0&&(e=r,n=op(t,r))}if(n===1)throw n=Fa,Si(t,0),Sr(t,e),jt(t,je()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,mi(t,bt,Wn),jt(t,je()),null}function Vm(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(zs=je()+500,nh&&ii())}}function Di(t){kr!==null&&kr.tag===0&&!(ue&6)&&Rs();var e=ue;ue|=1;var n=tn.transition,r=pe;try{if(tn.transition=null,pe=1,t)return t()}finally{pe=r,tn.transition=n,ue=e,!(ue&6)&&ii()}}function Fm(){Wt=vs.current,xe(vs)}function Si(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Y1(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(ym(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yu();break;case 3:Us(),xe(Vt),xe(It),Rm();break;case 5:xm(r);break;case 4:Us();break;case 13:xe(Ne);break;case 19:xe(Ne);break;case 10:Im(r.type._context);break;case 22:case 23:Fm()}n=n.return}if(nt=t,$e=t=Br(t.current,null),at=Wt=e,Ke=0,Fa=null,Lm=oh=bi=0,bt=ca=null,vi!==null){for(e=0;e<vi.length;e++)if(n=vi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}vi=null}return t}function cT(t,e){do{var n=$e;try{if(Em(),Cu.current=sc,ic){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ic=!1}if(Pi=0,Ze=He=Pe=null,la=!1,La=0,Om.current=null,n===null||n.return===null){Ke=1,Fa=e,$e=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=at,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=Sv(o);if(v!==null){v.flags&=-257,Cv(v,o,a,s,e),v.mode&1&&Tv(s,c,e),e=v,u=c;var C=e.updateQueue;if(C===null){var A=new Set;A.add(u),e.updateQueue=A}else C.add(u);break e}else{if(!(e&1)){Tv(s,c,e),jm();break e}u=Error(U(426))}}else if(Re&&a.mode&1){var k=Sv(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Cv(k,o,a,s,e),vm(Bs(u,a));break e}}s=u=Bs(u,a),Ke!==4&&(Ke=2),ca===null?ca=[s]:ca.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=GI(s,u,e);_v(s,S);break e;case 1:a=u;var I=s.type,R=s.stateNode;if(!(s.flags&128)&&(typeof I.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(jr===null||!jr.has(R)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=KI(s,a,e);_v(s,N);break e}}s=s.return}while(s!==null)}fT(n)}catch(M){e=M,$e===n&&n!==null&&($e=n=n.return);continue}break}while(!0)}function hT(){var t=oc.current;return oc.current=sc,t===null?sc:t}function jm(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),nt===null||!(bi&268435455)&&!(oh&268435455)||Sr(nt,at)}function uc(t,e){var n=ue;ue|=2;var r=hT();(nt!==t||at!==e)&&(Wn=null,Si(t,e));do try{EN();break}catch(i){cT(t,i)}while(!0);if(Em(),ue=n,oc.current=r,$e!==null)throw Error(U(261));return nt=null,at=0,Ke}function EN(){for(;$e!==null;)dT($e)}function IN(){for(;$e!==null&&!GA();)dT($e)}function dT(t){var e=mT(t.alternate,t,Wt);t.memoizedProps=t.pendingProps,e===null?fT(t):$e=e,Om.current=null}function fT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=mN(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ke=6,$e=null;return}}else if(n=pN(n,e,Wt),n!==null){$e=n;return}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);Ke===0&&(Ke=5)}function mi(t,e,n){var r=pe,i=tn.transition;try{tn.transition=null,pe=1,TN(t,e,n,r)}finally{tn.transition=i,pe=r}return null}function TN(t,e,n,r){do Rs();while(kr!==null);if(ue&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(r1(t,s),t===nt&&($e=nt=null,at=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||lu||(lu=!0,gT(Wu,function(){return Rs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=tn.transition,tn.transition=null;var o=pe;pe=1;var a=ue;ue|=4,Om.current=null,_N(t,n),aT(n,t),$1(Ff),Hu=!!Vf,Ff=Vf=null,t.current=n,yN(n),KA(),ue=a,pe=o,tn.transition=s}else t.current=n;if(lu&&(lu=!1,kr=t,lc=i),s=t.pendingLanes,s===0&&(jr=null),XA(n.stateNode),jt(t,je()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ac)throw ac=!1,t=ip,ip=null,t;return lc&1&&t.tag!==0&&Rs(),s=t.pendingLanes,s&1?t===sp?ha++:(ha=0,sp=t):ha=0,ii(),null}function Rs(){if(kr!==null){var t=GE(lc),e=tn.transition,n=pe;try{if(tn.transition=null,pe=16>t?16:t,kr===null)var r=!1;else{if(t=kr,kr=null,lc=0,ue&6)throw Error(U(331));var i=ue;for(ue|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(q=c;q!==null;){var h=q;switch(h.tag){case 0:case 11:case 15:ua(8,h,s)}var f=h.child;if(f!==null)f.return=h,q=f;else for(;q!==null;){h=q;var p=h.sibling,v=h.return;if(iT(h),h===c){q=null;break}if(p!==null){p.return=v,q=p;break}q=v}}}var C=s.alternate;if(C!==null){var A=C.child;if(A!==null){C.child=null;do{var k=A.sibling;A.sibling=null,A=k}while(A!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ua(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,q=S;break e}q=s.return}}var I=t.current;for(q=I;q!==null;){o=q;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,q=R;else e:for(o=I;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:sh(9,a)}}catch(M){Oe(a,a.return,M)}if(a===o){q=null;break e}var N=a.sibling;if(N!==null){N.return=a.return,q=N;break e}q=a.return}}if(ue=i,ii(),Rn&&typeof Rn.onPostCommitFiberRoot=="function")try{Rn.onPostCommitFiberRoot(Xc,t)}catch{}r=!0}return r}finally{pe=n,tn.transition=e}}return!1}function Fv(t,e,n){e=Bs(n,e),e=GI(t,e,1),t=Fr(t,e,1),e=Rt(),t!==null&&(ll(t,1,e),jt(t,e))}function Oe(t,e,n){if(t.tag===3)Fv(t,t,n);else for(;e!==null;){if(e.tag===3){Fv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jr===null||!jr.has(r))){t=Bs(n,t),t=KI(e,t,1),e=Fr(e,t,1),t=Rt(),e!==null&&(ll(e,1,t),jt(e,t));break}}e=e.return}}function SN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Rt(),t.pingedLanes|=t.suspendedLanes&n,nt===t&&(at&n)===n&&(Ke===4||Ke===3&&(at&130023424)===at&&500>je()-Mm?Si(t,0):Lm|=n),jt(t,e)}function pT(t,e){e===0&&(t.mode&1?(e=Jl,Jl<<=1,!(Jl&130023424)&&(Jl=4194304)):e=1);var n=Rt();t=sr(t,e),t!==null&&(ll(t,e,n),jt(t,n))}function CN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),pT(t,n)}function xN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),pT(t,n)}var mT;mT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Vt.current)Ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ot=!1,fN(t,e,n);Ot=!!(t.flags&131072)}else Ot=!1,Re&&e.flags&1048576&&vI(e,Zu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ru(t,e),t=e.pendingProps;var i=Vs(e,It.current);xs(e,n),i=Nm(null,e,r,t,i,n);var s=km();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ft(r)?(s=!0,Xu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sm(e),i.updater=ih,e.stateNode=i,i._reactInternals=e,Gf(e,r,t,n),e=Yf(null,e,r,!0,s,n)):(e.tag=0,Re&&s&&_m(e),xt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ru(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=AN(r),t=un(r,t),i){case 0:e=Qf(null,e,r,t,n);break e;case 1:e=Av(null,e,r,t,n);break e;case 11:e=xv(null,e,r,t,n);break e;case 14:e=Rv(null,e,r,un(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Qf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Av(t,e,r,i,n);case 3:e:{if(JI(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,CI(t,e),nc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Bs(Error(U(423)),e),e=Nv(t,e,r,n,i);break e}else if(r!==i){i=Bs(Error(U(424)),e),e=Nv(t,e,r,n,i);break e}else for(qt=Vr(e.stateNode.containerInfo.firstChild),Kt=e,Re=!0,hn=null,n=TI(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fs(),r===i){e=or(t,e,n);break e}xt(t,e,r,n)}e=e.child}return e;case 5:return xI(e),t===null&&Wf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,jf(r,i)?o=null:s!==null&&jf(r,s)&&(e.flags|=32),XI(t,e),xt(t,e,o,n),e.child;case 6:return t===null&&Wf(e),null;case 13:return ZI(t,e,n);case 4:return Cm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=js(e,null,r,n):xt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),xv(t,e,r,i,n);case 7:return xt(t,e,e.pendingProps,n),e.child;case 8:return xt(t,e,e.pendingProps.children,n),e.child;case 12:return xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ie(ec,r._currentValue),r._currentValue=o,s!==null)if(vn(s.value,o)){if(s.children===i.children&&!Vt.current){e=or(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Zn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),qf(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),qf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}xt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,xs(e,n),i=sn(i),r=r(i),e.flags|=1,xt(t,e,r,n),e.child;case 14:return r=e.type,i=un(r,e.pendingProps),i=un(r.type,i),Rv(t,e,r,i,n);case 15:return QI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),Ru(t,e),e.tag=1,Ft(r)?(t=!0,Xu(e)):t=!1,xs(e,n),HI(e,r,i),Gf(e,r,i,n),Yf(null,e,r,!0,t,n);case 19:return eT(t,e,n);case 22:return YI(t,e,n)}throw Error(U(156,e.tag))};function gT(t,e){return $E(t,e)}function RN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,n,r){return new RN(t,e,n,r)}function Um(t){return t=t.prototype,!(!t||!t.isReactComponent)}function AN(t){if(typeof t=="function")return Um(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sm)return 11;if(t===om)return 14}return 2}function Br(t,e){var n=t.alternate;return n===null?(n=en(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ku(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Um(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case us:return Ci(n.children,i,s,e);case im:o=8,i|=8;break;case _f:return t=en(12,n,e,i|2),t.elementType=_f,t.lanes=s,t;case yf:return t=en(13,n,e,i),t.elementType=yf,t.lanes=s,t;case vf:return t=en(19,n,e,i),t.elementType=vf,t.lanes=s,t;case xE:return ah(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case SE:o=10;break e;case CE:o=9;break e;case sm:o=11;break e;case om:o=14;break e;case Er:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=en(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ci(t,e,n,r){return t=en(7,t,r,e),t.lanes=n,t}function ah(t,e,n,r){return t=en(22,t,r,e),t.elementType=xE,t.lanes=n,t.stateNode={isHidden:!1},t}function Hd(t,e,n){return t=en(6,t,null,e),t.lanes=n,t}function Gd(t,e,n){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function NN(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rd(0),this.expirationTimes=Rd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bm(t,e,n,r,i,s,o,a,u){return t=new NN(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=en(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sm(s),t}function kN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ls,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function _T(t){if(!t)return Kr;t=t._reactInternals;e:{if(Gi(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(Ft(n))return _I(t,n,e)}return e}function yT(t,e,n,r,i,s,o,a,u){return t=Bm(n,r,!0,t,i,s,o,a,u),t.context=_T(null),n=t.current,r=Rt(),i=Ur(n),s=Zn(r,i),s.callback=e??null,Fr(n,s,i),t.current.lanes=i,ll(t,i,r),jt(t,r),t}function lh(t,e,n,r){var i=e.current,s=Rt(),o=Ur(i);return n=_T(n),e.context===null?e.context=n:e.pendingContext=n,e=Zn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Fr(i,e,o),t!==null&&(gn(t,i,o,s),Su(t,i,o)),o}function cc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zm(t,e){jv(t,e),(t=t.alternate)&&jv(t,e)}function PN(){return null}var vT=typeof reportError=="function"?reportError:function(t){console.error(t)};function $m(t){this._internalRoot=t}uh.prototype.render=$m.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));lh(t,e,null,null)};uh.prototype.unmount=$m.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Di(function(){lh(null,t,null,null)}),e[ir]=null}};function uh(t){this._internalRoot=t}uh.prototype.unstable_scheduleHydration=function(t){if(t){var e=YE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Tr.length&&e!==0&&e<Tr[n].priority;n++);Tr.splice(n,0,t),n===0&&JE(t)}};function Wm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ch(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Uv(){}function bN(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=cc(o);s.call(c)}}var o=yT(e,r,t,0,null,!1,!1,"",Uv);return t._reactRootContainer=o,t[ir]=o.current,ka(t.nodeType===8?t.parentNode:t),Di(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=cc(u);a.call(c)}}var u=Bm(t,0,!1,null,null,!1,!1,"",Uv);return t._reactRootContainer=u,t[ir]=u.current,ka(t.nodeType===8?t.parentNode:t),Di(function(){lh(e,u,n,r)}),u}function hh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=cc(o);a.call(u)}}lh(e,o,t,i)}else o=bN(n,e,t,i,r);return cc(o)}KE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qo(e.pendingLanes);n!==0&&(um(e,n|1),jt(e,je()),!(ue&6)&&(zs=je()+500,ii()))}break;case 13:Di(function(){var r=sr(t,1);if(r!==null){var i=Rt();gn(r,t,1,i)}}),zm(t,1)}};cm=function(t){if(t.tag===13){var e=sr(t,134217728);if(e!==null){var n=Rt();gn(e,t,134217728,n)}zm(t,134217728)}};QE=function(t){if(t.tag===13){var e=Ur(t),n=sr(t,e);if(n!==null){var r=Rt();gn(n,t,e,r)}zm(t,e)}};YE=function(){return pe};XE=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};Nf=function(t,e,n){switch(e){case"input":if(If(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=th(r);if(!i)throw Error(U(90));AE(r),If(r,i)}}}break;case"textarea":kE(t,n);break;case"select":e=n.value,e!=null&&Is(t,!!n.multiple,e,!1)}};VE=Vm;FE=Di;var DN={usingClientEntryPoint:!1,Events:[cl,fs,th,LE,ME,Vm]},jo={findFiberByHostInstance:yi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ON={bundleType:jo.bundleType,version:jo.version,rendererPackageName:jo.rendererPackageName,rendererConfig:jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=BE(t),t===null?null:t.stateNode},findFiberByHostInstance:jo.findFiberByHostInstance||PN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uu.isDisabled&&uu.supportsFiber)try{Xc=uu.inject(ON),Rn=uu}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DN;Yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wm(e))throw Error(U(200));return kN(t,e,null,n)};Yt.createRoot=function(t,e){if(!Wm(t))throw Error(U(299));var n=!1,r="",i=vT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Bm(t,1,!1,null,null,n,!1,r,i),t[ir]=e.current,ka(t.nodeType===8?t.parentNode:t),new $m(e)};Yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=BE(e),t=t===null?null:t.stateNode,t};Yt.flushSync=function(t){return Di(t)};Yt.hydrate=function(t,e,n){if(!ch(e))throw Error(U(200));return hh(null,t,e,!0,n)};Yt.hydrateRoot=function(t,e,n){if(!Wm(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=vT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=yT(e,null,t,1,n??null,i,!1,s,o),t[ir]=e.current,ka(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new uh(e)};Yt.render=function(t,e,n){if(!ch(e))throw Error(U(200));return hh(null,t,e,!1,n)};Yt.unmountComponentAtNode=function(t){if(!ch(t))throw Error(U(40));return t._reactRootContainer?(Di(function(){hh(null,null,t,!1,function(){t._reactRootContainer=null,t[ir]=null})}),!0):!1};Yt.unstable_batchedUpdates=Vm;Yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ch(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return hh(t,e,n,!1,r)};Yt.version="18.3.1-next-f1338f8080-20240426";function wT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wT)}catch(t){console.error(t)}}wT(),wE.exports=Yt;var LN=wE.exports,ET,Bv=LN;ET=Bv.createRoot,Bv.hydrateRoot;/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ja(){return ja=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ja.apply(this,arguments)}var Pr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Pr||(Pr={}));const zv="popstate";function MN(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return lp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:TT(i)}return FN(e,n,null,t)}function Qe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function IT(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function VN(){return Math.random().toString(36).substr(2,8)}function $v(t,e){return{usr:t.state,key:t.key,idx:e}}function lp(t,e,n,r){return n===void 0&&(n=null),ja({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?so(e):e,{state:n,key:e&&e.key||r||VN()})}function TT(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function so(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function FN(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Pr.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(ja({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=Pr.Pop;let k=h(),S=k==null?null:k-c;c=k,u&&u({action:a,location:A.location,delta:S})}function p(k,S){a=Pr.Push;let I=lp(A.location,k,S);c=h()+1;let R=$v(I,c),N=A.createHref(I);try{o.pushState(R,"",N)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(N)}s&&u&&u({action:a,location:A.location,delta:1})}function v(k,S){a=Pr.Replace;let I=lp(A.location,k,S);c=h();let R=$v(I,c),N=A.createHref(I);o.replaceState(R,"",N),s&&u&&u({action:a,location:A.location,delta:0})}function C(k){let S=i.location.origin!=="null"?i.location.origin:i.location.href,I=typeof k=="string"?k:TT(k);return I=I.replace(/ $/,"%20"),Qe(S,"No window.location.(origin|href) available to create URL for href: "+I),new URL(I,S)}let A={get action(){return a},get location(){return t(i,o)},listen(k){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(zv,f),u=k,()=>{i.removeEventListener(zv,f),u=null}},createHref(k){return e(i,k)},createURL:C,encodeLocation(k){let S=C(k);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:p,replace:v,go(k){return o.go(k)}};return A}var Wv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Wv||(Wv={}));function jN(t,e,n){return n===void 0&&(n="/"),UN(t,e,n,!1)}function UN(t,e,n,r){let i=typeof e=="string"?so(e):e,s=xT(i.pathname||"/",n);if(s==null)return null;let o=ST(t);BN(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=JN(s);a=YN(o[u],c,r)}return a}function ST(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Qe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=xi([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(Qe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),ST(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:KN(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of CT(s.path))i(s,o,u)}),e}function CT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=CT(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function BN(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:QN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const zN=/^:[\w-]+$/,$N=3,WN=2,qN=1,HN=10,GN=-2,qv=t=>t==="*";function KN(t,e){let n=t.split("/"),r=n.length;return n.some(qv)&&(r+=GN),e&&(r+=WN),n.filter(i=>!qv(i)).reduce((i,s)=>i+(zN.test(s)?$N:s===""?qN:HN),r)}function QN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function YN(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=Hv({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),p=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=Hv({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},h)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:xi([s,f.pathname]),pathnameBase:ik(xi([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=xi([s,f.pathnameBase]))}return o}function Hv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=XN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:p,isOptional:v}=h;if(p==="*"){let A=a[f]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const C=a[f];return v&&!C?c[p]=void 0:c[p]=(C||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function XN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),IT(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function JN(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return IT(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function xT(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function ZN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?so(t):t;return{pathname:n?n.startsWith("/")?n:ek(n,e):e,search:sk(r),hash:ok(i)}}function ek(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Kd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function tk(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function nk(t,e){let n=tk(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function rk(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=so(t):(i=ja({},t),Qe(!i.pathname||!i.pathname.includes("?"),Kd("?","pathname","search",i)),Qe(!i.pathname||!i.pathname.includes("#"),Kd("#","pathname","hash",i)),Qe(!i.search||!i.search.includes("#"),Kd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?e[f]:"/"}let u=ZN(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const xi=t=>t.join("/").replace(/\/\/+/g,"/"),ik=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),sk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ok=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ak(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const RT=["post","put","patch","delete"];new Set(RT);const lk=["get",...RT];new Set(lk);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ua(){return Ua=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ua.apply(this,arguments)}const qm=O.createContext(null),uk=O.createContext(null),dh=O.createContext(null),fh=O.createContext(null),oo=O.createContext({outlet:null,matches:[],isDataRoute:!1}),AT=O.createContext(null);function ph(){return O.useContext(fh)!=null}function Hm(){return ph()||Qe(!1),O.useContext(fh).location}function NT(t){O.useContext(dh).static||O.useLayoutEffect(t)}function ck(){let{isDataRoute:t}=O.useContext(oo);return t?Tk():hk()}function hk(){ph()||Qe(!1);let t=O.useContext(qm),{basename:e,future:n,navigator:r}=O.useContext(dh),{matches:i}=O.useContext(oo),{pathname:s}=Hm(),o=JSON.stringify(nk(i,n.v7_relativeSplatPath)),a=O.useRef(!1);return NT(()=>{a.current=!0}),O.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=rk(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:xi([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}function dk(t,e){return fk(t,e)}function fk(t,e,n,r){ph()||Qe(!1);let{navigator:i}=O.useContext(dh),{matches:s}=O.useContext(oo),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Hm(),h;if(e){var f;let k=typeof e=="string"?so(e):e;u==="/"||(f=k.pathname)!=null&&f.startsWith(u)||Qe(!1),h=k}else h=c;let p=h.pathname||"/",v=p;if(u!=="/"){let k=u.replace(/^\//,"").split("/");v="/"+p.replace(/^\//,"").split("/").slice(k.length).join("/")}let C=jN(t,{pathname:v}),A=yk(C&&C.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:xi([u,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:xi([u,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r);return e&&A?O.createElement(fh.Provider,{value:{location:Ua({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Pr.Pop}},A):A}function pk(){let t=Ik(),e=ak(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:i},n):null,null)}const mk=O.createElement(pk,null);class gk extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(oo.Provider,{value:this.props.routeContext},O.createElement(AT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _k(t){let{routeContext:e,match:n,children:r}=t,i=O.useContext(qm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(oo.Provider,{value:e},r)}function yk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||Qe(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:p,errors:v}=n,C=f.route.loader&&p[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||C){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,p)=>{let v,C=!1,A=null,k=null;n&&(v=a&&f.route.id?a[f.route.id]:void 0,A=f.route.errorElement||mk,u&&(c<0&&p===0?(C=!0,k=null):c===p&&(C=!0,k=f.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,p+1)),I=()=>{let R;return v?R=A:C?R=k:f.route.Component?R=O.createElement(f.route.Component,null):f.route.element?R=f.route.element:R=h,O.createElement(_k,{match:f,routeContext:{outlet:h,matches:S,isDataRoute:n!=null},children:R})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?O.createElement(gk,{location:n.location,revalidation:n.revalidation,component:A,error:v,children:I(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):I()},null)}var kT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(kT||{}),hc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(hc||{});function vk(t){let e=O.useContext(qm);return e||Qe(!1),e}function wk(t){let e=O.useContext(uk);return e||Qe(!1),e}function Ek(t){let e=O.useContext(oo);return e||Qe(!1),e}function PT(t){let e=Ek(),n=e.matches[e.matches.length-1];return n.route.id||Qe(!1),n.route.id}function Ik(){var t;let e=O.useContext(AT),n=wk(hc.UseRouteError),r=PT(hc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Tk(){let{router:t}=vk(kT.UseNavigateStable),e=PT(hc.UseNavigateStable),n=O.useRef(!1);return NT(()=>{n.current=!0}),O.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ua({fromRouteId:e},s)))},[t,e])}function wr(t){Qe(!1)}function Sk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Pr.Pop,navigator:s,static:o=!1,future:a}=t;ph()&&Qe(!1);let u=e.replace(/^\/*/,"/"),c=O.useMemo(()=>({basename:u,navigator:s,static:o,future:Ua({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=so(r));let{pathname:h="/",search:f="",hash:p="",state:v=null,key:C="default"}=r,A=O.useMemo(()=>{let k=xT(h,u);return k==null?null:{location:{pathname:k,search:f,hash:p,state:v,key:C},navigationType:i}},[u,h,f,p,v,C,i]);return A==null?null:O.createElement(dh.Provider,{value:c},O.createElement(fh.Provider,{children:n,value:A}))}function Gv(t){let{children:e,location:n}=t;return dk(up(e),n)}new Promise(()=>{});function up(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,i)=>{if(!O.isValidElement(r))return;let s=[...e,i];if(r.type===O.Fragment){n.push.apply(n,up(r.props.children,s));return}r.type!==wr&&Qe(!1),!r.props.index||!r.props.children||Qe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=up(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Ck="6";try{window.__reactRouterVersion=Ck}catch{}const xk="startTransition",Kv=SA[xk];function Rk(t){let{basename:e,children:n,future:r,window:i}=t,s=O.useRef();s.current==null&&(s.current=MN({window:i,v5Compat:!0}));let o=s.current,[a,u]=O.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=O.useCallback(f=>{c&&Kv?Kv(()=>u(f)):u(f)},[u,c]);return O.useLayoutEffect(()=>o.listen(h),[o,h]),O.createElement(Sk,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var Qv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Qv||(Qv={}));var Yv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Yv||(Yv={}));const Ak=[{name:"Home",id:"home"},{name:"About Us",id:"AboutUs"},{name:"Service",id:"service"},{name:"Newsletter",id:"newsletter"},{name:"Events",id:"events"}],bT="/SkWeb/assets/LOGO_SK-removebg-preview-BoIiuiyF.png";var Xv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=function(t,e){if(!t)throw ao(e)},ao=function(t){return new Error("Firebase Database ("+DT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Nk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Gm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,v=c&63;u||(v=64,o||(p=64)),r.push(n[h],n[f],n[p],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(OT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Nk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new kk;const p=s<<2|a>>4;if(r.push(p),c!==64){const v=a<<4&240|c>>2;if(r.push(v),f!==64){const C=c<<6&192|f;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const LT=function(t){const e=OT(t);return Gm.encodeByteArray(e,!0)},dc=function(t){return LT(t).replace(/\./g,"")},fc=function(t){try{return Gm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(t){return MT(void 0,t)}function MT(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!bk(n)||(t[n]=MT(t[n],e[n]));return t}function bk(t){return t!=="__proto__"}/**
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
 */function Dk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ok=()=>Dk().__FIREBASE_DEFAULTS__,Lk=()=>{if(typeof process>"u"||typeof Xv>"u")return;const t=Xv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Mk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fc(t[1]);return e&&JSON.parse(e)},mh=()=>{try{return Ok()||Lk()||Mk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},VT=t=>{var e,n;return(n=(e=mh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Km=t=>{const e=VT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},FT=()=>{var t;return(t=mh())===null||t===void 0?void 0:t.config},jT=t=>{var e;return(e=mh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Qm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[dc(JSON.stringify(n)),dc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ym(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function Vk(){var t;const e=(t=mh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Fk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function UT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jk(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function BT(){return DT.NODE_ADMIN===!0}function Uk(){return!Vk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bk(){try{return typeof indexedDB=="object"}catch{return!1}}function zk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k="FirebaseError";class Ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$k,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dl.prototype.create)}}class dl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Wk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ln(i,a,r)}}function Wk(t,e){return t.replace(qk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const qk=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(t){return JSON.parse(t)}function tt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ba(fc(s[0])||""),n=Ba(fc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Hk=function(t){const e=zT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Gk=function(t){const e=zT(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function $s(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function cp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function mc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Jv(s)&&Jv(o)){if(!mc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Jv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Jo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const p=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,h;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),h=1518500249):(c=s^o^a,h=1859775393):f<60?(c=s&o|a&(s|o),h=2400959708):(c=s^o^a,h=3395469782);const p=(i<<5|i>>>27)+c+u+h+r[f]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Qk(t,e){const n=new Yk(t,e);return n.subscribe.bind(n)}class Yk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Xk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Qd),i.error===void 0&&(i.error=Qd),i.complete===void 0&&(i.complete=Qd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qd(){}function Xm(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,B(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_h=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const gi="[DEFAULT]";/**
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
 */class Zk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new gh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tP(e))try{this.getOrInitializeService({instanceIdentifier:gi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=gi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gi){return this.instances.has(e)}getOptions(e=gi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:eP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=gi){return this.component?this.component.multipleInstances?e:gi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eP(t){return t===gi?void 0:t}function tP(t){return t.instantiationMode==="EAGER"}/**
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
 */class nP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Zk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const rP={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},iP=oe.INFO,sP={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},oP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=sP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yh{constructor(e){this.name=e,this._logLevel=iP,this._logHandler=oP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const aP=(t,e)=>e.some(n=>t instanceof n);let Zv,ew;function lP(){return Zv||(Zv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uP(){return ew||(ew=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $T=new WeakMap,hp=new WeakMap,WT=new WeakMap,Yd=new WeakMap,Jm=new WeakMap;function cP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(zr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$T.set(n,t)}).catch(()=>{}),Jm.set(e,t),e}function hP(t){if(hp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});hp.set(t,e)}let dp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||WT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dP(t){dp=t(dp)}function fP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xd(this),e,...n);return WT.set(r,e.sort?e.sort():[e]),zr(r)}:uP().includes(t)?function(...e){return t.apply(Xd(this),e),zr($T.get(this))}:function(...e){return zr(t.apply(Xd(this),e))}}function pP(t){return typeof t=="function"?fP(t):(t instanceof IDBTransaction&&hP(t),aP(t,lP())?new Proxy(t,dp):t)}function zr(t){if(t instanceof IDBRequest)return cP(t);if(Yd.has(t))return Yd.get(t);const e=pP(t);return e!==t&&(Yd.set(t,e),Jm.set(e,t)),e}const Xd=t=>Jm.get(t);function mP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=zr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(zr(o.result),u.oldVersion,u.newVersion,zr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const gP=["get","getKey","getAll","getAllKeys","count"],_P=["put","add","delete","clear"],Jd=new Map;function tw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Jd.get(e))return Jd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=_P.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||gP.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Jd.set(e,s),s}dP(t=>({...t,get:(e,n,r)=>tw(e,n)||t.get(e,n,r),has:(e,n)=>!!tw(e,n)||t.has(e,n)}));/**
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
 */class yP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fp="@firebase/app",nw="0.10.8";/**
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
 */const Oi=new yh("@firebase/app"),wP="@firebase/app-compat",EP="@firebase/analytics-compat",IP="@firebase/analytics",TP="@firebase/app-check-compat",SP="@firebase/app-check",CP="@firebase/auth",xP="@firebase/auth-compat",RP="@firebase/database",AP="@firebase/database-compat",NP="@firebase/functions",kP="@firebase/functions-compat",PP="@firebase/installations",bP="@firebase/installations-compat",DP="@firebase/messaging",OP="@firebase/messaging-compat",LP="@firebase/performance",MP="@firebase/performance-compat",VP="@firebase/remote-config",FP="@firebase/remote-config-compat",jP="@firebase/storage",UP="@firebase/storage-compat",BP="@firebase/firestore",zP="@firebase/vertexai-preview",$P="@firebase/firestore-compat",WP="firebase",qP="10.12.5";/**
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
 */const pp="[DEFAULT]",HP={[fp]:"fire-core",[wP]:"fire-core-compat",[IP]:"fire-analytics",[EP]:"fire-analytics-compat",[SP]:"fire-app-check",[TP]:"fire-app-check-compat",[CP]:"fire-auth",[xP]:"fire-auth-compat",[RP]:"fire-rtdb",[AP]:"fire-rtdb-compat",[NP]:"fire-fn",[kP]:"fire-fn-compat",[PP]:"fire-iid",[bP]:"fire-iid-compat",[DP]:"fire-fcm",[OP]:"fire-fcm-compat",[LP]:"fire-perf",[MP]:"fire-perf-compat",[VP]:"fire-rc",[FP]:"fire-rc-compat",[jP]:"fire-gcs",[UP]:"fire-gcs-compat",[BP]:"fire-fst",[$P]:"fire-fst-compat",[zP]:"fire-vertex","fire-js":"fire-js",[WP]:"fire-js-all"};/**
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
 */const gc=new Map,GP=new Map,mp=new Map;function rw(t,e){try{t.container.addComponent(e)}catch(n){Oi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qr(t){const e=t.name;if(mp.has(e))return Oi.debug(`There were multiple attempts to register component ${e}.`),!1;mp.set(e,t);for(const n of gc.values())rw(n,t);for(const n of GP.values())rw(n,t);return!0}function fl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Cn(t){return t.settings!==void 0}/**
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
 */const KP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$r=new dl("app","Firebase",KP);/**
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
 */class QP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $r.create("app-deleted",{appName:this._name})}}/**
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
 */const si=qP;function qT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw $r.create("bad-app-name",{appName:String(i)});if(n||(n=FT()),!n)throw $r.create("no-options");const s=gc.get(i);if(s){if(mc(n,s.options)&&mc(r,s.config))return s;throw $r.create("duplicate-app",{appName:i})}const o=new nP(i);for(const u of mp.values())o.addComponent(u);const a=new QP(n,r,o);return gc.set(i,a),a}function vh(t=pp){const e=gc.get(t);if(!e&&t===pp&&FT())return qT();if(!e)throw $r.create("no-app",{appName:t});return e}function nn(t,e,n){var r;let i=(r=HP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Oi.warn(a.join(" "));return}Qr(new ar(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const YP="firebase-heartbeat-database",XP=1,za="firebase-heartbeat-store";let Zd=null;function HT(){return Zd||(Zd=mP(YP,XP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(za)}catch(n){console.warn(n)}}}}).catch(t=>{throw $r.create("idb-open",{originalErrorMessage:t.message})})),Zd}async function JP(t){try{const n=(await HT()).transaction(za),r=await n.objectStore(za).get(GT(t));return await n.done,r}catch(e){if(e instanceof Ln)Oi.warn(e.message);else{const n=$r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Oi.warn(n.message)}}}async function iw(t,e){try{const r=(await HT()).transaction(za,"readwrite");await r.objectStore(za).put(e,GT(t)),await r.done}catch(n){if(n instanceof Ln)Oi.warn(n.message);else{const r=$r.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Oi.warn(r.message)}}}function GT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ZP=1024,eb=30*24*60*60*1e3;class tb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=sw();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=eb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sw(),{heartbeatsToSend:r,unsentEntries:i}=nb(this._heartbeatsCache.heartbeats),s=dc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function sw(){return new Date().toISOString().substring(0,10)}function nb(t,e=ZP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ow(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ow(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class rb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bk()?zk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await JP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return iw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return iw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ow(t){return dc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function ib(t){Qr(new ar("platform-logger",e=>new yP(e),"PRIVATE")),Qr(new ar("heartbeat",e=>new tb(e),"PRIVATE")),nn(fp,nw,t),nn(fp,nw,"esm2017"),nn("fire-js","")}ib("");var sb="firebase",ob="10.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn(sb,ob,"app");function Zm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function KT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ab=KT,QT=new dl("auth","Firebase",KT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=new yh("@firebase/auth");function lb(t,...e){_c.logLevel<=oe.WARN&&_c.warn(`Auth (${si}): ${t}`,...e)}function Pu(t,...e){_c.logLevel<=oe.ERROR&&_c.error(`Auth (${si}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,...e){throw eg(t,...e)}function Nn(t,...e){return eg(t,...e)}function YT(t,e,n){const r=Object.assign(Object.assign({},ab()),{[e]:n});return new dl("auth","Firebase",r).create(e,{appName:t.name})}function er(t){return YT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function eg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return QT.create(t,...e)}function Q(t,e,...n){if(!t)throw eg(e,...n)}function Qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pu(e),new Error(e)}function lr(t,e){t||Qn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ub(){return aw()==="http:"||aw()==="https:"}function aw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ub()||Fk()||"connection"in navigator)?navigator.onLine:!0}function hb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n){this.shortDelay=e,this.longDelay=n,lr(n>e,"Short delay should be less than long delay!"),this.isMobile=Ym()||UT()}get(){return cb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(t,e){lr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=new pl(3e4,6e4);function oi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ai(t,e,n,r,i={}){return JT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=lo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),XT.fetch()(ZT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function JT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},db),e);try{const i=new mb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw cu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw cu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw cu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw cu(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw YT(t,h,c);wn(t,h)}}catch(i){if(i instanceof Ln)throw i;wn(t,"network-request-failed",{message:String(i)})}}async function ml(t,e,n,r,i={}){const s=await ai(t,e,n,r,i);return"mfaPendingCredential"in s&&wn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ZT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?tg(t.config,i):`${t.config.apiScheme}://${i}`}function pb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class mb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nn(this.auth,"network-request-failed")),fb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function cu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Nn(t,e,r);return i.customData._tokenResponse=n,i}function lw(t){return t!==void 0&&t.enterprise!==void 0}class gb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return pb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function _b(t,e){return ai(t,"GET","/v2/recaptchaConfig",oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yb(t,e){return ai(t,"POST","/v1/accounts:delete",e)}async function eS(t,e){return ai(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vb(t,e=!1){const n=me(t),r=await n.getIdToken(e),i=ng(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:da(ef(i.auth_time)),issuedAtTime:da(ef(i.iat)),expirationTime:da(ef(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ef(t){return Number(t)*1e3}function ng(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Pu("JWT malformed, contained fewer than 3 sections"),null;try{const i=fc(n);return i?JSON.parse(i):(Pu("Failed to decode base64 JWT payload"),null)}catch(i){return Pu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function uw(t){const e=ng(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $a(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&wb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function wb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=da(this.lastLoginAt),this.creationTime=da(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function yc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await $a(t,eS(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?tS(s.providerUserInfo):[],a=Tb(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new _p(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function Ib(t){const e=me(t);await yc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Tb(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function tS(t){return t.map(e=>{var{providerId:n}=e,r=Zm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sb(t,e){const n=await JT(t,{},async()=>{const r=lo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ZT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",XT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Cb(t,e){return ai(t,"POST","/v2/accounts:revokeToken",oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=uw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Sb(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new As;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new As,this.toJSON())}_performRefresh(){return Qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Zm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Eb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new _p(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await $a(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vb(this,e)}reload(){return Ib(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Cn(this.auth.app))return Promise.reject(er(this.auth));const e=await this.getIdToken();return await $a(this,yb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,I=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:R,emailVerified:N,isAnonymous:M,providerData:F,stsTokenManager:E}=n;Q(R&&E,e,"internal-error");const _=As.fromJSON(this.name,E);Q(typeof R=="string",e,"internal-error"),vr(f,e.name),vr(p,e.name),Q(typeof N=="boolean",e,"internal-error"),Q(typeof M=="boolean",e,"internal-error"),vr(v,e.name),vr(C,e.name),vr(A,e.name),vr(k,e.name),vr(S,e.name),vr(I,e.name);const T=new Yn({uid:R,auth:e,email:p,emailVerified:N,displayName:f,isAnonymous:M,photoURL:C,phoneNumber:v,tenantId:A,stsTokenManager:_,createdAt:S,lastLoginAt:I});return F&&Array.isArray(F)&&(T.providerData=F.map(x=>Object.assign({},x))),k&&(T._redirectEventId=k),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new As;i.updateFromServerResponse(n);const s=new Yn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await yc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?tS(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new As;a.updateFromIdToken(r);const u=new Yn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new _p(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}nS.type="NONE";const hw=nS;/**
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
 */function bu(t,e,n){return`firebase:${t}:${e}:${n}`}class Ns{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=bu(this.userKey,i.apiKey,s),this.fullPersistenceKey=bu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ns(Xn(hw),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Xn(hw);const o=bu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Yn._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ns(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ns(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(aS(e))return"Blackberry";if(lS(e))return"Webos";if(rg(e))return"Safari";if((e.includes("chrome/")||iS(e))&&!e.includes("edge/"))return"Chrome";if(oS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rS(t=ct()){return/firefox\//i.test(t)}function rg(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function iS(t=ct()){return/crios\//i.test(t)}function sS(t=ct()){return/iemobile/i.test(t)}function oS(t=ct()){return/android/i.test(t)}function aS(t=ct()){return/blackberry/i.test(t)}function lS(t=ct()){return/webos/i.test(t)}function wh(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xb(t=ct()){var e;return wh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Rb(){return jk()&&document.documentMode===10}function uS(t=ct()){return wh(t)||oS(t)||lS(t)||aS(t)||/windows phone/i.test(t)||sS(t)}function Ab(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(t,e=[]){let n;switch(t){case"Browser":n=dw(ct());break;case"Worker":n=`${dw(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${si}/${r}`}/**
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
 */class Nb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function kb(t,e={}){return ai(t,"GET","/v2/passwordPolicy",oi(t,e))}/**
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
 */const Pb=6;class bb{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Pb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fw(this),this.idTokenSubscription=new fw(this),this.beforeStateQueue=new Nb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=QT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ns.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await eS(this,{idToken:e}),r=await Yn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Cn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Cn(this.app))return Promise.reject(er(this));const n=e?me(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Cn(this.app)?Promise.reject(er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Cn(this.app)?Promise.reject(er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kb(this),n=new bb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new dl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Cb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Ns.create(this,[Xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&lb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ki(t){return me(t)}class fw{constructor(e){this.auth=e,this.observer=null,this.addObserver=Qk(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ob(t){Eh=t}function hS(t){return Eh.loadJS(t)}function Lb(){return Eh.recaptchaEnterpriseScript}function Mb(){return Eh.gapiScript}function Vb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Fb="recaptcha-enterprise",jb="NO_RECAPTCHA";class Ub{constructor(e){this.type=Fb,this.auth=Ki(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{_b(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new gb(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;lw(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(jb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&lw(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Lb();u.length!==0&&(u+=a),hS(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function pw(t,e,n,r=!1){const i=new Ub(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function yp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await pw(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await pw(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(t,e){const n=fl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(mc(s,e??{}))return i;wn(i,"already-initialized")}return n.initialize({options:e})}function zb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $b(t,e,n){const r=Ki(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=dS(e),{host:o,port:a}=Wb(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),qb()}function dS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Wb(t){const e=dS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:mw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:mw(o)}}}function mw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qn("not implemented")}_getIdTokenResponse(e){return Qn("not implemented")}_linkToIdToken(e,n){return Qn("not implemented")}_getReauthenticationResolver(e){return Qn("not implemented")}}async function Hb(t,e){return ai(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gb(t,e){return ml(t,"POST","/v1/accounts:signInWithPassword",oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kb(t,e){return ml(t,"POST","/v1/accounts:signInWithEmailLink",oi(t,e))}async function Qb(t,e){return ml(t,"POST","/v1/accounts:signInWithEmailLink",oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa extends ig{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Wa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Wa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yp(e,n,"signInWithPassword",Gb);case"emailLink":return Kb(e,{email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yp(e,r,"signUpPassword",Hb);case"emailLink":return Qb(e,{idToken:n,email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ks(t,e){return ml(t,"POST","/v1/accounts:signInWithIdp",oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb="http://localhost";class Li extends ig{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Li(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Zm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Li(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ks(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ks(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ks(e,n)}buildRequest(){const e={requestUri:Yb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=lo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Jb(t){const e=Xo(Jo(t)).link,n=e?Xo(Jo(e)).deep_link_id:null,r=Xo(Jo(t)).deep_link_id;return(r?Xo(Jo(r)).link:null)||r||n||e||t}class sg{constructor(e){var n,r,i,s,o,a;const u=Xo(Jo(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,f=Xb((i=u.mode)!==null&&i!==void 0?i:null);Q(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Jb(e);try{return new sg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this.providerId=uo.PROVIDER_ID}static credential(e,n){return Wa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=sg.parseLink(n);return Q(r,"argument-error"),Wa._fromEmailAndCode(e,r.code,r.tenantId)}}uo.PROVIDER_ID="password";uo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";uo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class gl extends fS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends gl{constructor(){super("facebook.com")}static credential(e){return Li._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends gl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Li._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends gl{constructor(){super("github.com")}static credential(e){return Li._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.GITHUB_SIGN_IN_METHOD="github.com";xr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends gl{constructor(){super("twitter.com")}static credential(e,n){return Li._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Rr.credential(n,r)}catch{return null}}}Rr.TWITTER_SIGN_IN_METHOD="twitter.com";Rr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zb(t,e){return ml(t,"POST","/v1/accounts:signUp",oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Yn._fromIdTokenResponse(e,r,i),o=gw(r);return new Mi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=gw(r);return new Mi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function gw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc extends Ln{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,vc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new vc(e,n,r,i)}}function pS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?vc._fromErrorAndOperation(t,s,e,r):s})}async function eD(t,e,n=!1){const r=await $a(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mi._forOperation(t,"link",r)}/**
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
 */async function tD(t,e,n=!1){const{auth:r}=t;if(Cn(r.app))return Promise.reject(er(r));const i="reauthenticate";try{const s=await $a(t,pS(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=ng(s.idToken);Q(o,r,"internal-error");const{sub:a}=o;return Q(t.uid===a,r,"user-mismatch"),Mi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&wn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mS(t,e,n=!1){if(Cn(t.app))return Promise.reject(er(t));const r="signIn",i=await pS(t,r,e),s=await Mi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function nD(t,e){return mS(Ki(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gS(t){const e=Ki(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function rD(t,e,n){if(Cn(t.app))return Promise.reject(er(t));const r=Ki(t),o=await yp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Zb).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&gS(t),u}),a=await Mi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function iD(t,e,n){return Cn(t.app)?Promise.reject(er(t)):nD(me(t),uo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&gS(t),r})}function sD(t,e,n,r){return me(t).onIdTokenChanged(e,n,r)}function oD(t,e,n){return me(t).beforeAuthStateChanged(e,n)}function og(t,e,n,r){return me(t).onAuthStateChanged(e,n,r)}function aD(t){return me(t).signOut()}const wc="__sak";/**
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
 */class _S{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wc,"1"),this.storage.removeItem(wc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lD(){const t=ct();return rg(t)||wh(t)}const uD=1e3,cD=10;class yS extends _S{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lD()&&Ab(),this.fallbackToPolling=uS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Rb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yS.type="LOCAL";const hD=yS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS extends _S{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vS.type="SESSION";const wS=vS;/**
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
 */function dD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ih{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ih(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await dD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ih.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class fD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=ag("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(){return window}function pD(t){kn().location.href=t}/**
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
 */function ES(){return typeof kn().WorkerGlobalScope<"u"&&typeof kn().importScripts=="function"}async function mD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _D(){return ES()?self:null}/**
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
 */const IS="firebaseLocalStorageDb",yD=1,Ec="firebaseLocalStorage",TS="fbase_key";class _l{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Th(t,e){return t.transaction([Ec],e?"readwrite":"readonly").objectStore(Ec)}function vD(){const t=indexedDB.deleteDatabase(IS);return new _l(t).toPromise()}function vp(){const t=indexedDB.open(IS,yD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ec,{keyPath:TS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ec)?e(r):(r.close(),await vD(),e(await vp()))})})}async function _w(t,e,n){const r=Th(t,!0).put({[TS]:e,value:n});return new _l(r).toPromise()}async function wD(t,e){const n=Th(t,!1).get(e),r=await new _l(n).toPromise();return r===void 0?null:r.value}function yw(t,e){const n=Th(t,!0).delete(e);return new _l(n).toPromise()}const ED=800,ID=3;class SS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ID)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ES()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ih._getInstance(_D()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mD(),!this.activeServiceWorker)return;this.sender=new fD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vp();return await _w(e,wc,"1"),await yw(e,wc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_w(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Th(i,!1).getAll();return new _l(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ED)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}SS.type="LOCAL";const TD=SS;new pl(3e4,6e4);/**
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
 */function SD(t,e){return e?Xn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class lg extends ig{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ks(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ks(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ks(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function CD(t){return mS(t.auth,new lg(t),t.bypassAuthState)}function xD(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),tD(n,new lg(t),t.bypassAuthState)}async function RD(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),eD(n,new lg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CD;case"linkViaPopup":case"linkViaRedirect":return RD;case"reauthViaPopup":case"reauthViaRedirect":return xD;default:wn(this.auth,"internal-error")}}resolve(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD=new pl(2e3,1e4);class ws extends CS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ws.currentPopupAction&&ws.currentPopupAction.cancel(),ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){lr(this.filter.length===1,"Popup operations only handle one event");const e=ag();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AD.get())};e()}}ws.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ND="pendingRedirect",Du=new Map;class kD extends CS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Du.get(this.auth._key());if(!e){try{const r=await PD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Du.set(this.auth._key(),e)}return this.bypassAuthState||Du.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PD(t,e){const n=OD(e),r=DD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function bD(t,e){Du.set(t._key(),e)}function DD(t){return Xn(t._redirectPersistence)}function OD(t){return bu(ND,t.config.apiKey,t.name)}async function LD(t,e,n=!1){if(Cn(t.app))return Promise.reject(er(t));const r=Ki(t),i=SD(r,e),o=await new kD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD=10*60*1e3;class VD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!xS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MD&&this.cachedEventUids.clear(),this.cachedEventUids.has(vw(e))}saveEventToCache(e){this.cachedEventUids.add(vw(e)),this.lastProcessedEventTime=Date.now()}}function vw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jD(t,e={}){return ai(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BD=/^https?/;async function zD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jD(t);for(const n of e)try{if($D(n))return}catch{}wn(t,"unauthorized-domain")}function $D(t){const e=gp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!BD.test(n))return!1;if(UD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const WD=new pl(3e4,6e4);function ww(){const t=kn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qD(t){return new Promise((e,n)=>{var r,i,s;function o(){ww(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ww(),n(Nn(t,"network-request-failed"))},timeout:WD.get()})}if(!((i=(r=kn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=kn().gapi)===null||s===void 0)&&s.load)o();else{const a=Vb("iframefcb");return kn()[a]=()=>{gapi.load?o():n(Nn(t,"network-request-failed"))},hS(`${Mb()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Ou=null,e})}let Ou=null;function HD(t){return Ou=Ou||qD(t),Ou}/**
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
 */const GD=new pl(5e3,15e3),KD="__/auth/iframe",QD="emulator/auth/iframe",YD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JD(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tg(e,QD):`https://${t.config.authDomain}/${KD}`,r={apiKey:e.apiKey,appName:t.name,v:si},i=XD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${lo(r).slice(1)}`}async function ZD(t){const e=await HD(t),n=kn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:JD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Nn(t,"network-request-failed"),a=kn().setTimeout(()=>{s(o)},GD.get());function u(){kn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const eO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tO=500,nO=600,rO="_blank",iO="http://localhost";class Ew{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sO(t,e,n,r=tO,i=nO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},eO),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ct().toLowerCase();n&&(a=iS(c)?rO:n),rS(c)&&(e=e||iO,u.scrollbars="yes");const h=Object.entries(u).reduce((p,[v,C])=>`${p}${v}=${C},`,"");if(xb(c)&&a!=="_self")return oO(e||"",a),new Ew(null);const f=window.open(e||"",a,h);Q(f,t,"popup-blocked");try{f.focus()}catch{}return new Ew(f)}function oO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const aO="__/auth/handler",lO="emulator/auth/handler",uO=encodeURIComponent("fac");async function Iw(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:si,eventId:i};if(e instanceof fS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof gl){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${uO}=${encodeURIComponent(u)}`:"";return`${cO(t)}?${lo(a).slice(1)}${c}`}function cO({config:t}){return t.emulator?tg(t,lO):`https://${t.authDomain}/${aO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="webStorageSupport";class hO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wS,this._completeRedirectFn=LD,this._overrideRedirectResult=bD}async _openPopup(e,n,r,i){var s;lr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Iw(e,n,r,gp(),i);return sO(e,o,ag())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Iw(e,n,r,gp(),i);return pD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(lr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ZD(e),r=new VD(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(tf,{type:tf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[tf];o!==void 0&&n(!!o),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return uS()||rg()||wh()}}const dO=hO;var Tw="@firebase/auth",Sw="1.7.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mO(t){Qr(new ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cS(t)},c=new Db(r,i,s,u);return zb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qr(new ar("auth-internal",e=>{const n=Ki(e.getProvider("auth").getImmediate());return(r=>new fO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(Tw,Sw,pO(t)),nn(Tw,Sw,"esm2017")}/**
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
 */const gO=5*60,_O=jT("authIdTokenMaxAge")||gO;let Cw=null;const yO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_O)return;const i=n==null?void 0:n.token;Cw!==i&&(Cw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Sh(t=vh()){const e=fl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Bb(t,{popupRedirectResolver:dO,persistence:[TD,hD,wS]}),r=jT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=yO(s.toString());oD(n,o,()=>o(n.currentUser)),sD(n,a=>o(a))}}const i=VT("auth");return i&&$b(n,`http://${i}`),n}function vO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Ob({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Nn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",vO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mO("Browser");var xw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ri,RS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function T(){}T.prototype=_.prototype,E.D=_.prototype,E.prototype=new T,E.prototype.constructor=E,E.C=function(x,P,b){for(var w=Array(arguments.length-2),K=2;K<arguments.length;K++)w[K-2]=arguments[K];return _.prototype[P].apply(x,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,_,T){T||(T=0);var x=Array(16);if(typeof _=="string")for(var P=0;16>P;++P)x[P]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(P=0;16>P;++P)x[P]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=E.g[0],T=E.g[1],P=E.g[2];var b=E.g[3],w=_+(b^T&(P^b))+x[0]+3614090360&4294967295;_=T+(w<<7&4294967295|w>>>25),w=b+(P^_&(T^P))+x[1]+3905402710&4294967295,b=_+(w<<12&4294967295|w>>>20),w=P+(T^b&(_^T))+x[2]+606105819&4294967295,P=b+(w<<17&4294967295|w>>>15),w=T+(_^P&(b^_))+x[3]+3250441966&4294967295,T=P+(w<<22&4294967295|w>>>10),w=_+(b^T&(P^b))+x[4]+4118548399&4294967295,_=T+(w<<7&4294967295|w>>>25),w=b+(P^_&(T^P))+x[5]+1200080426&4294967295,b=_+(w<<12&4294967295|w>>>20),w=P+(T^b&(_^T))+x[6]+2821735955&4294967295,P=b+(w<<17&4294967295|w>>>15),w=T+(_^P&(b^_))+x[7]+4249261313&4294967295,T=P+(w<<22&4294967295|w>>>10),w=_+(b^T&(P^b))+x[8]+1770035416&4294967295,_=T+(w<<7&4294967295|w>>>25),w=b+(P^_&(T^P))+x[9]+2336552879&4294967295,b=_+(w<<12&4294967295|w>>>20),w=P+(T^b&(_^T))+x[10]+4294925233&4294967295,P=b+(w<<17&4294967295|w>>>15),w=T+(_^P&(b^_))+x[11]+2304563134&4294967295,T=P+(w<<22&4294967295|w>>>10),w=_+(b^T&(P^b))+x[12]+1804603682&4294967295,_=T+(w<<7&4294967295|w>>>25),w=b+(P^_&(T^P))+x[13]+4254626195&4294967295,b=_+(w<<12&4294967295|w>>>20),w=P+(T^b&(_^T))+x[14]+2792965006&4294967295,P=b+(w<<17&4294967295|w>>>15),w=T+(_^P&(b^_))+x[15]+1236535329&4294967295,T=P+(w<<22&4294967295|w>>>10),w=_+(P^b&(T^P))+x[1]+4129170786&4294967295,_=T+(w<<5&4294967295|w>>>27),w=b+(T^P&(_^T))+x[6]+3225465664&4294967295,b=_+(w<<9&4294967295|w>>>23),w=P+(_^T&(b^_))+x[11]+643717713&4294967295,P=b+(w<<14&4294967295|w>>>18),w=T+(b^_&(P^b))+x[0]+3921069994&4294967295,T=P+(w<<20&4294967295|w>>>12),w=_+(P^b&(T^P))+x[5]+3593408605&4294967295,_=T+(w<<5&4294967295|w>>>27),w=b+(T^P&(_^T))+x[10]+38016083&4294967295,b=_+(w<<9&4294967295|w>>>23),w=P+(_^T&(b^_))+x[15]+3634488961&4294967295,P=b+(w<<14&4294967295|w>>>18),w=T+(b^_&(P^b))+x[4]+3889429448&4294967295,T=P+(w<<20&4294967295|w>>>12),w=_+(P^b&(T^P))+x[9]+568446438&4294967295,_=T+(w<<5&4294967295|w>>>27),w=b+(T^P&(_^T))+x[14]+3275163606&4294967295,b=_+(w<<9&4294967295|w>>>23),w=P+(_^T&(b^_))+x[3]+4107603335&4294967295,P=b+(w<<14&4294967295|w>>>18),w=T+(b^_&(P^b))+x[8]+1163531501&4294967295,T=P+(w<<20&4294967295|w>>>12),w=_+(P^b&(T^P))+x[13]+2850285829&4294967295,_=T+(w<<5&4294967295|w>>>27),w=b+(T^P&(_^T))+x[2]+4243563512&4294967295,b=_+(w<<9&4294967295|w>>>23),w=P+(_^T&(b^_))+x[7]+1735328473&4294967295,P=b+(w<<14&4294967295|w>>>18),w=T+(b^_&(P^b))+x[12]+2368359562&4294967295,T=P+(w<<20&4294967295|w>>>12),w=_+(T^P^b)+x[5]+4294588738&4294967295,_=T+(w<<4&4294967295|w>>>28),w=b+(_^T^P)+x[8]+2272392833&4294967295,b=_+(w<<11&4294967295|w>>>21),w=P+(b^_^T)+x[11]+1839030562&4294967295,P=b+(w<<16&4294967295|w>>>16),w=T+(P^b^_)+x[14]+4259657740&4294967295,T=P+(w<<23&4294967295|w>>>9),w=_+(T^P^b)+x[1]+2763975236&4294967295,_=T+(w<<4&4294967295|w>>>28),w=b+(_^T^P)+x[4]+1272893353&4294967295,b=_+(w<<11&4294967295|w>>>21),w=P+(b^_^T)+x[7]+4139469664&4294967295,P=b+(w<<16&4294967295|w>>>16),w=T+(P^b^_)+x[10]+3200236656&4294967295,T=P+(w<<23&4294967295|w>>>9),w=_+(T^P^b)+x[13]+681279174&4294967295,_=T+(w<<4&4294967295|w>>>28),w=b+(_^T^P)+x[0]+3936430074&4294967295,b=_+(w<<11&4294967295|w>>>21),w=P+(b^_^T)+x[3]+3572445317&4294967295,P=b+(w<<16&4294967295|w>>>16),w=T+(P^b^_)+x[6]+76029189&4294967295,T=P+(w<<23&4294967295|w>>>9),w=_+(T^P^b)+x[9]+3654602809&4294967295,_=T+(w<<4&4294967295|w>>>28),w=b+(_^T^P)+x[12]+3873151461&4294967295,b=_+(w<<11&4294967295|w>>>21),w=P+(b^_^T)+x[15]+530742520&4294967295,P=b+(w<<16&4294967295|w>>>16),w=T+(P^b^_)+x[2]+3299628645&4294967295,T=P+(w<<23&4294967295|w>>>9),w=_+(P^(T|~b))+x[0]+4096336452&4294967295,_=T+(w<<6&4294967295|w>>>26),w=b+(T^(_|~P))+x[7]+1126891415&4294967295,b=_+(w<<10&4294967295|w>>>22),w=P+(_^(b|~T))+x[14]+2878612391&4294967295,P=b+(w<<15&4294967295|w>>>17),w=T+(b^(P|~_))+x[5]+4237533241&4294967295,T=P+(w<<21&4294967295|w>>>11),w=_+(P^(T|~b))+x[12]+1700485571&4294967295,_=T+(w<<6&4294967295|w>>>26),w=b+(T^(_|~P))+x[3]+2399980690&4294967295,b=_+(w<<10&4294967295|w>>>22),w=P+(_^(b|~T))+x[10]+4293915773&4294967295,P=b+(w<<15&4294967295|w>>>17),w=T+(b^(P|~_))+x[1]+2240044497&4294967295,T=P+(w<<21&4294967295|w>>>11),w=_+(P^(T|~b))+x[8]+1873313359&4294967295,_=T+(w<<6&4294967295|w>>>26),w=b+(T^(_|~P))+x[15]+4264355552&4294967295,b=_+(w<<10&4294967295|w>>>22),w=P+(_^(b|~T))+x[6]+2734768916&4294967295,P=b+(w<<15&4294967295|w>>>17),w=T+(b^(P|~_))+x[13]+1309151649&4294967295,T=P+(w<<21&4294967295|w>>>11),w=_+(P^(T|~b))+x[4]+4149444226&4294967295,_=T+(w<<6&4294967295|w>>>26),w=b+(T^(_|~P))+x[11]+3174756917&4294967295,b=_+(w<<10&4294967295|w>>>22),w=P+(_^(b|~T))+x[2]+718787259&4294967295,P=b+(w<<15&4294967295|w>>>17),w=T+(b^(P|~_))+x[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(P+(w<<21&4294967295|w>>>11))&4294967295,E.g[2]=E.g[2]+P&4294967295,E.g[3]=E.g[3]+b&4294967295}r.prototype.u=function(E,_){_===void 0&&(_=E.length);for(var T=_-this.blockSize,x=this.B,P=this.h,b=0;b<_;){if(P==0)for(;b<=T;)i(this,E,b),b+=this.blockSize;if(typeof E=="string"){for(;b<_;)if(x[P++]=E.charCodeAt(b++),P==this.blockSize){i(this,x),P=0;break}}else for(;b<_;)if(x[P++]=E[b++],P==this.blockSize){i(this,x),P=0;break}}this.h=P,this.o+=_},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;var T=8*this.o;for(_=E.length-8;_<E.length;++_)E[_]=T&255,T/=256;for(this.u(E),E=Array(16),_=T=0;4>_;++_)for(var x=0;32>x;x+=8)E[T++]=this.g[_]>>>x&255;return E};function s(E,_){var T=a;return Object.prototype.hasOwnProperty.call(T,E)?T[E]:T[E]=_(E)}function o(E,_){this.h=_;for(var T=[],x=!0,P=E.length-1;0<=P;P--){var b=E[P]|0;x&&b==_||(T[P]=b,x=!1)}this.g=T}var a={};function u(E){return-128<=E&&128>E?s(E,function(_){return new o([_|0],0>_?-1:0)}):new o([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return f;if(0>E)return k(c(-E));for(var _=[],T=1,x=0;E>=T;x++)_[x]=E/T|0,T*=4294967296;return new o(_,0)}function h(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return k(h(E.substring(1),_));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(_,8)),x=f,P=0;P<E.length;P+=8){var b=Math.min(8,E.length-P),w=parseInt(E.substring(P,P+b),_);8>b?(b=c(Math.pow(_,b)),x=x.j(b).add(c(w))):(x=x.j(T),x=x.add(c(w)))}return x}var f=u(0),p=u(1),v=u(16777216);t=o.prototype,t.m=function(){if(A(this))return-k(this).m();for(var E=0,_=1,T=0;T<this.g.length;T++){var x=this.i(T);E+=(0<=x?x:4294967296+x)*_,_*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(A(this))return"-"+k(this).toString(E);for(var _=c(Math.pow(E,6)),T=this,x="";;){var P=N(T,_).g;T=S(T,P.j(_));var b=((0<T.g.length?T.g[0]:T.h)>>>0).toString(E);if(T=P,C(T))return b+x;for(;6>b.length;)b="0"+b;x=b+x}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function A(E){return E.h==-1}t.l=function(E){return E=S(this,E),A(E)?-1:C(E)?0:1};function k(E){for(var _=E.g.length,T=[],x=0;x<_;x++)T[x]=~E.g[x];return new o(T,~E.h).add(p)}t.abs=function(){return A(this)?k(this):this},t.add=function(E){for(var _=Math.max(this.g.length,E.g.length),T=[],x=0,P=0;P<=_;P++){var b=x+(this.i(P)&65535)+(E.i(P)&65535),w=(b>>>16)+(this.i(P)>>>16)+(E.i(P)>>>16);x=w>>>16,b&=65535,w&=65535,T[P]=w<<16|b}return new o(T,T[T.length-1]&-2147483648?-1:0)};function S(E,_){return E.add(k(_))}t.j=function(E){if(C(this)||C(E))return f;if(A(this))return A(E)?k(this).j(k(E)):k(k(this).j(E));if(A(E))return k(this.j(k(E)));if(0>this.l(v)&&0>E.l(v))return c(this.m()*E.m());for(var _=this.g.length+E.g.length,T=[],x=0;x<2*_;x++)T[x]=0;for(x=0;x<this.g.length;x++)for(var P=0;P<E.g.length;P++){var b=this.i(x)>>>16,w=this.i(x)&65535,K=E.i(P)>>>16,fe=E.i(P)&65535;T[2*x+2*P]+=w*fe,I(T,2*x+2*P),T[2*x+2*P+1]+=b*fe,I(T,2*x+2*P+1),T[2*x+2*P+1]+=w*K,I(T,2*x+2*P+1),T[2*x+2*P+2]+=b*K,I(T,2*x+2*P+2)}for(x=0;x<_;x++)T[x]=T[2*x+1]<<16|T[2*x];for(x=_;x<2*_;x++)T[x]=0;return new o(T,0)};function I(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function R(E,_){this.g=E,this.h=_}function N(E,_){if(C(_))throw Error("division by zero");if(C(E))return new R(f,f);if(A(E))return _=N(k(E),_),new R(k(_.g),k(_.h));if(A(_))return _=N(E,k(_)),new R(k(_.g),_.h);if(30<E.g.length){if(A(E)||A(_))throw Error("slowDivide_ only works with positive integers.");for(var T=p,x=_;0>=x.l(E);)T=M(T),x=M(x);var P=F(T,1),b=F(x,1);for(x=F(x,2),T=F(T,2);!C(x);){var w=b.add(x);0>=w.l(E)&&(P=P.add(T),b=w),x=F(x,1),T=F(T,1)}return _=S(E,P.j(_)),new R(P,_)}for(P=f;0<=E.l(_);){for(T=Math.max(1,Math.floor(E.m()/_.m())),x=Math.ceil(Math.log(T)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),b=c(T),w=b.j(_);A(w)||0<w.l(E);)T-=x,b=c(T),w=b.j(_);C(b)&&(b=p),P=P.add(b),E=S(E,w)}return new R(P,E)}t.A=function(E){return N(this,E).h},t.and=function(E){for(var _=Math.max(this.g.length,E.g.length),T=[],x=0;x<_;x++)T[x]=this.i(x)&E.i(x);return new o(T,this.h&E.h)},t.or=function(E){for(var _=Math.max(this.g.length,E.g.length),T=[],x=0;x<_;x++)T[x]=this.i(x)|E.i(x);return new o(T,this.h|E.h)},t.xor=function(E){for(var _=Math.max(this.g.length,E.g.length),T=[],x=0;x<_;x++)T[x]=this.i(x)^E.i(x);return new o(T,this.h^E.h)};function M(E){for(var _=E.g.length+1,T=[],x=0;x<_;x++)T[x]=E.i(x)<<1|E.i(x-1)>>>31;return new o(T,E.h)}function F(E,_){var T=_>>5;_%=32;for(var x=E.g.length-T,P=[],b=0;b<x;b++)P[b]=0<_?E.i(b+T)>>>_|E.i(b+T+1)<<32-_:E.i(b+T);return new o(P,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,RS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Ri=o}).apply(typeof xw<"u"?xw:typeof self<"u"?self:typeof window<"u"?window:{});var hu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var AS,NS,Zo,kS,Lu,wp,PS,bS,DS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,m){return l==Array.prototype||l==Object.prototype||(l[d]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof hu=="object"&&hu];for(var d=0;d<l.length;++d){var m=l[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var m=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var D=l[y];if(!(D in m))break e;m=m[D]}l=l[l.length-1],y=m[l],d=d(y),d!=y&&d!=null&&e(m,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var m=0,y=!1,D={next:function(){if(!y&&m<l.length){var L=m++;return{value:d(L,l[L]),done:!1}}return y=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,m){return l.call.apply(l.bind,arguments)}function f(l,d,m){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,y),l.apply(d,D)}}return function(){return l.apply(d,arguments)}}function p(l,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function v(l,d){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function C(l,d){function m(){}m.prototype=d.prototype,l.aa=d.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(y,D,L){for(var z=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)z[_e-2]=arguments[_e];return d.prototype[D].apply(y,z)}}function A(l){const d=l.length;if(0<d){const m=Array(d);for(let y=0;y<d;y++)m[y]=l[y];return m}return[]}function k(l,d){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(u(y)){const D=l.length||0,L=y.length||0;l.length=D+L;for(let z=0;z<L;z++)l[D+z]=y[z]}else l.push(y)}}class S{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function I(l){return/^[\s\xa0]*$/.test(l)}function R(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function N(l){return N[" "](l),l}N[" "]=function(){};var M=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function F(l,d,m){for(const y in l)d.call(m,l[y],y,l)}function E(l,d){for(const m in l)d.call(void 0,l[m],m,l)}function _(l){const d={};for(const m in l)d[m]=l[m];return d}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(l,d){let m,y;for(let D=1;D<arguments.length;D++){y=arguments[D];for(m in y)l[m]=y[m];for(let L=0;L<T.length;L++)m=T[L],Object.prototype.hasOwnProperty.call(y,m)&&(l[m]=y[m])}}function P(l){var d=1;l=l.split(":");const m=[];for(;0<d&&l.length;)m.push(l.shift()),d--;return l.length&&m.push(l.join(":")),m}function b(l){a.setTimeout(()=>{throw l},0)}function w(){var l=X;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class K{constructor(){this.h=this.g=null}add(d,m){const y=fe.get();y.set(d,m),this.h?this.h.next=y:this.g=y,this.h=y}}var fe=new S(()=>new Ue,l=>l.reset());class Ue{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Pt,W=!1,X=new K,te=()=>{const l=a.Promise.resolve(void 0);Pt=()=>{l.then(Ae)}};var Ae=()=>{for(var l;l=w();){try{l.h.call(l.g)}catch(m){b(m)}var d=fe;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}W=!1};function ge(){this.s=this.s,this.C=this.C}ge.prototype.s=!1,ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Fe(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var Vn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return l}();function Fn(l,d){if(Fe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(M){e:{try{N(d.nodeName);var D=!0;break e}catch{}D=!1}D||(d=null)}}else m=="mouseover"?d=l.fromElement:m=="mouseout"&&(d=l.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:jn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Fn.aa.h.call(this)}}C(Fn,Fe);var jn={2:"touch",3:"pen",4:"mouse"};Fn.prototype.h=function(){Fn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Un="closure_listenable_"+(1e6*Math.random()|0),kR=0;function PR(l,d,m,y,D){this.listener=l,this.proxy=null,this.src=d,this.type=m,this.capture=!!y,this.ha=D,this.key=++kR,this.da=this.fa=!1}function kl(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Pl(l){this.src=l,this.g={},this.h=0}Pl.prototype.add=function(l,d,m,y,D){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var z=ed(l,d,y,D);return-1<z?(d=l[z],m||(d.fa=!1)):(d=new PR(d,this.src,L,!!y,D),d.fa=m,l.push(d)),d};function Zh(l,d){var m=d.type;if(m in l.g){var y=l.g[m],D=Array.prototype.indexOf.call(y,d,void 0),L;(L=0<=D)&&Array.prototype.splice.call(y,D,1),L&&(kl(d),l.g[m].length==0&&(delete l.g[m],l.h--))}}function ed(l,d,m,y){for(var D=0;D<l.length;++D){var L=l[D];if(!L.da&&L.listener==d&&L.capture==!!m&&L.ha==y)return D}return-1}var td="closure_lm_"+(1e6*Math.random()|0),nd={};function O_(l,d,m,y,D){if(Array.isArray(d)){for(var L=0;L<d.length;L++)O_(l,d[L],m,y,D);return null}return m=V_(m),l&&l[Un]?l.K(d,m,c(y)?!!y.capture:!!y,D):bR(l,d,m,!1,y,D)}function bR(l,d,m,y,D,L){if(!d)throw Error("Invalid event type");var z=c(D)?!!D.capture:!!D,_e=id(l);if(_e||(l[td]=_e=new Pl(l)),m=_e.add(d,m,y,z,L),m.proxy)return m;if(y=DR(),m.proxy=y,y.src=l,y.listener=m,l.addEventListener)Vn||(D=z),D===void 0&&(D=!1),l.addEventListener(d.toString(),y,D);else if(l.attachEvent)l.attachEvent(M_(d.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function DR(){function l(m){return d.call(l.src,l.listener,m)}const d=OR;return l}function L_(l,d,m,y,D){if(Array.isArray(d))for(var L=0;L<d.length;L++)L_(l,d[L],m,y,D);else y=c(y)?!!y.capture:!!y,m=V_(m),l&&l[Un]?(l=l.i,d=String(d).toString(),d in l.g&&(L=l.g[d],m=ed(L,m,y,D),-1<m&&(kl(L[m]),Array.prototype.splice.call(L,m,1),L.length==0&&(delete l.g[d],l.h--)))):l&&(l=id(l))&&(d=l.g[d.toString()],l=-1,d&&(l=ed(d,m,y,D)),(m=-1<l?d[l]:null)&&rd(m))}function rd(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[Un])Zh(d.i,l);else{var m=l.type,y=l.proxy;d.removeEventListener?d.removeEventListener(m,y,l.capture):d.detachEvent?d.detachEvent(M_(m),y):d.addListener&&d.removeListener&&d.removeListener(y),(m=id(d))?(Zh(m,l),m.h==0&&(m.src=null,d[td]=null)):kl(l)}}}function M_(l){return l in nd?nd[l]:nd[l]="on"+l}function OR(l,d){if(l.da)l=!0;else{d=new Fn(d,this);var m=l.listener,y=l.ha||l.src;l.fa&&rd(l),l=m.call(y,d)}return l}function id(l){return l=l[td],l instanceof Pl?l:null}var sd="__closure_events_fn_"+(1e9*Math.random()>>>0);function V_(l){return typeof l=="function"?l:(l[sd]||(l[sd]=function(d){return l.handleEvent(d)}),l[sd])}function dt(){ge.call(this),this.i=new Pl(this),this.M=this,this.F=null}C(dt,ge),dt.prototype[Un]=!0,dt.prototype.removeEventListener=function(l,d,m,y){L_(this,l,d,m,y)};function Tt(l,d){var m,y=l.F;if(y)for(m=[];y;y=y.F)m.push(y);if(l=l.M,y=d.type||d,typeof d=="string")d=new Fe(d,l);else if(d instanceof Fe)d.target=d.target||l;else{var D=d;d=new Fe(y,l),x(d,D)}if(D=!0,m)for(var L=m.length-1;0<=L;L--){var z=d.g=m[L];D=bl(z,y,!0,d)&&D}if(z=d.g=l,D=bl(z,y,!0,d)&&D,D=bl(z,y,!1,d)&&D,m)for(L=0;L<m.length;L++)z=d.g=m[L],D=bl(z,y,!1,d)&&D}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var m=l.g[d],y=0;y<m.length;y++)kl(m[y]);delete l.g[d],l.h--}}this.F=null},dt.prototype.K=function(l,d,m,y){return this.i.add(String(l),d,!1,m,y)},dt.prototype.L=function(l,d,m,y){return this.i.add(String(l),d,!0,m,y)};function bl(l,d,m,y){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var D=!0,L=0;L<d.length;++L){var z=d[L];if(z&&!z.da&&z.capture==m){var _e=z.listener,rt=z.ha||z.src;z.fa&&Zh(l.i,z),D=_e.call(rt,y)!==!1&&D}}return D&&!y.defaultPrevented}function F_(l,d,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function j_(l){l.g=F_(()=>{l.g=null,l.i&&(l.i=!1,j_(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class LR extends ge{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:j_(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yo(l){ge.call(this),this.h=l,this.g={}}C(yo,ge);var U_=[];function B_(l){F(l.g,function(d,m){this.g.hasOwnProperty(m)&&rd(d)},l),l.g={}}yo.prototype.N=function(){yo.aa.N.call(this),B_(this)},yo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var od=a.JSON.stringify,MR=a.JSON.parse,VR=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function ad(){}ad.prototype.h=null;function z_(l){return l.h||(l.h=l.i())}function $_(){}var vo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ld(){Fe.call(this,"d")}C(ld,Fe);function ud(){Fe.call(this,"c")}C(ud,Fe);var ci={},W_=null;function Dl(){return W_=W_||new dt}ci.La="serverreachability";function q_(l){Fe.call(this,ci.La,l)}C(q_,Fe);function wo(l){const d=Dl();Tt(d,new q_(d))}ci.STAT_EVENT="statevent";function H_(l,d){Fe.call(this,ci.STAT_EVENT,l),this.stat=d}C(H_,Fe);function St(l){const d=Dl();Tt(d,new H_(d,l))}ci.Ma="timingevent";function G_(l,d){Fe.call(this,ci.Ma,l),this.size=d}C(G_,Fe);function Eo(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Io(){this.g=!0}Io.prototype.xa=function(){this.g=!1};function FR(l,d,m,y,D,L){l.info(function(){if(l.g)if(L)for(var z="",_e=L.split("&"),rt=0;rt<_e.length;rt++){var ce=_e[rt].split("=");if(1<ce.length){var ft=ce[0];ce=ce[1];var pt=ft.split("_");z=2<=pt.length&&pt[1]=="type"?z+(ft+"="+ce+"&"):z+(ft+"=redacted&")}}else z=null;else z=L;return"XMLHTTP REQ ("+y+") [attempt "+D+"]: "+d+`
`+m+`
`+z})}function jR(l,d,m,y,D,L,z){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+D+"]: "+d+`
`+m+`
`+L+" "+z})}function Zi(l,d,m,y){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+BR(l,m)+(y?" "+y:"")})}function UR(l,d){l.info(function(){return"TIMEOUT: "+d})}Io.prototype.info=function(){};function BR(l,d){if(!l.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var y=m[l];if(!(2>y.length)){var D=y[1];if(Array.isArray(D)&&!(1>D.length)){var L=D[0];if(L!="noop"&&L!="stop"&&L!="close")for(var z=1;z<D.length;z++)D[z]=""}}}}return od(m)}catch{return d}}var Ol={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},K_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},cd;function Ll(){}C(Ll,ad),Ll.prototype.g=function(){return new XMLHttpRequest},Ll.prototype.i=function(){return{}},cd=new Ll;function mr(l,d,m,y){this.j=l,this.i=d,this.l=m,this.R=y||1,this.U=new yo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Q_}function Q_(){this.i=null,this.g="",this.h=!1}var Y_={},hd={};function dd(l,d,m){l.L=1,l.v=jl(Bn(d)),l.m=m,l.P=!0,X_(l,null)}function X_(l,d){l.F=Date.now(),Ml(l),l.A=Bn(l.v);var m=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),hy(m.i,"t",y),l.C=0,m=l.j.J,l.h=new Q_,l.g=Ny(l.j,m?d:null,!l.m),0<l.O&&(l.M=new LR(p(l.Y,l,l.g),l.O)),d=l.U,m=l.g,y=l.ca;var D="readystatechange";Array.isArray(D)||(D&&(U_[0]=D.toString()),D=U_);for(var L=0;L<D.length;L++){var z=O_(m,D[L],y||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),wo(),FR(l.i,l.u,l.A,l.l,l.R,l.m)}mr.prototype.ca=function(l){l=l.target;const d=this.M;d&&zn(l)==3?d.j():this.Y(l)},mr.prototype.Y=function(l){try{if(l==this.g)e:{const pt=zn(this.g);var d=this.g.Ba();const ns=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||yy(this.g)))){this.J||pt!=4||d==7||(d==8||0>=ns?wo(3):wo(2)),fd(this);var m=this.g.Z();this.X=m;t:if(J_(this)){var y=yy(this.g);l="";var D=y.length,L=zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hi(this),To(this);var z="";break t}this.h.i=new a.TextDecoder}for(d=0;d<D;d++)this.h.h=!0,l+=this.h.i.decode(y[d],{stream:!(L&&d==D-1)});y.length=0,this.h.g+=l,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=m==200,jR(this.i,this.u,this.A,this.l,this.R,pt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var _e,rt=this.g;if((_e=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(_e)){var ce=_e;break t}}ce=null}if(m=ce)Zi(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pd(this,m);else{this.o=!1,this.s=3,St(12),hi(this),To(this);break e}}if(this.P){m=!0;let an;for(;!this.J&&this.C<z.length;)if(an=zR(this,z),an==hd){pt==4&&(this.s=4,St(14),m=!1),Zi(this.i,this.l,null,"[Incomplete Response]");break}else if(an==Y_){this.s=4,St(15),Zi(this.i,this.l,z,"[Invalid Chunk]"),m=!1;break}else Zi(this.i,this.l,an,null),pd(this,an);if(J_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||z.length!=0||this.h.h||(this.s=1,St(16),m=!1),this.o=this.o&&m,!m)Zi(this.i,this.l,z,"[Invalid Chunked Response]"),hi(this),To(this);else if(0<z.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),wd(ft),ft.M=!0,St(11))}}else Zi(this.i,this.l,z,null),pd(this,z);pt==4&&hi(this),this.o&&!this.J&&(pt==4?Cy(this.j,this):(this.o=!1,Ml(this)))}else sA(this.g),m==400&&0<z.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),hi(this),To(this)}}}catch{}finally{}};function J_(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function zR(l,d){var m=l.C,y=d.indexOf(`
`,m);return y==-1?hd:(m=Number(d.substring(m,y)),isNaN(m)?Y_:(y+=1,y+m>d.length?hd:(d=d.slice(y,y+m),l.C=y+m,d)))}mr.prototype.cancel=function(){this.J=!0,hi(this)};function Ml(l){l.S=Date.now()+l.I,Z_(l,l.I)}function Z_(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Eo(p(l.ba,l),d)}function fd(l){l.B&&(a.clearTimeout(l.B),l.B=null)}mr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(UR(this.i,this.A),this.L!=2&&(wo(),St(17)),hi(this),this.s=2,To(this)):Z_(this,this.S-l)};function To(l){l.j.G==0||l.J||Cy(l.j,l)}function hi(l){fd(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,B_(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function pd(l,d){try{var m=l.j;if(m.G!=0&&(m.g==l||md(m.h,l))){if(!l.K&&md(m.h,l)&&m.G==3){try{var y=m.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var D=y;if(D[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Wl(m),zl(m);else break e;vd(m),St(18)}}else m.za=D[1],0<m.za-m.T&&37500>D[2]&&m.F&&m.v==0&&!m.C&&(m.C=Eo(p(m.Za,m),6e3));if(1>=ny(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else fi(m,11)}else if((l.K||m.g==l)&&Wl(m),!I(d))for(D=m.Da.g.parse(d),d=0;d<D.length;d++){let ce=D[d];if(m.T=ce[0],ce=ce[1],m.G==2)if(ce[0]=="c"){m.K=ce[1],m.ia=ce[2];const ft=ce[3];ft!=null&&(m.la=ft,m.j.info("VER="+m.la));const pt=ce[4];pt!=null&&(m.Aa=pt,m.j.info("SVER="+m.Aa));const ns=ce[5];ns!=null&&typeof ns=="number"&&0<ns&&(y=1.5*ns,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const an=l.g;if(an){const Hl=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hl){var L=y.h;L.g||Hl.indexOf("spdy")==-1&&Hl.indexOf("quic")==-1&&Hl.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(gd(L,L.h),L.h=null))}if(y.D){const Ed=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;Ed&&(y.ya=Ed,Te(y.I,y.D,Ed))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var z=l;if(y.qa=Ay(y,y.J?y.ia:null,y.W),z.K){ry(y.h,z);var _e=z,rt=y.L;rt&&(_e.I=rt),_e.B&&(fd(_e),Ml(_e)),y.g=z}else Ty(y);0<m.i.length&&$l(m)}else ce[0]!="stop"&&ce[0]!="close"||fi(m,7);else m.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?fi(m,7):yd(m):ce[0]!="noop"&&m.l&&m.l.ta(ce),m.v=0)}}wo(4)}catch{}}var $R=class{constructor(l,d){this.g=l,this.map=d}};function ey(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ty(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ny(l){return l.h?1:l.g?l.g.size:0}function md(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function gd(l,d){l.g?l.g.add(d):l.h=d}function ry(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}ey.prototype.cancel=function(){if(this.i=iy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function iy(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const m of l.g.values())d=d.concat(m.D);return d}return A(l.i)}function WR(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],m=l.length,y=0;y<m;y++)d.push(l[y]);return d}d=[],m=0;for(y in l)d[m++]=l[y];return d}function qR(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var m=0;m<l;m++)d.push(m);return d}d=[],m=0;for(const y in l)d[m++]=y;return d}}}function sy(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var m=qR(l),y=WR(l),D=y.length,L=0;L<D;L++)d.call(void 0,y[L],m&&m[L],l)}var oy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function HR(l,d){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var y=l[m].indexOf("="),D=null;if(0<=y){var L=l[m].substring(0,y);D=l[m].substring(y+1)}else L=l[m];d(L,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function di(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof di){this.h=l.h,Vl(this,l.j),this.o=l.o,this.g=l.g,Fl(this,l.s),this.l=l.l;var d=l.i,m=new xo;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),ay(this,m),this.m=l.m}else l&&(d=String(l).match(oy))?(this.h=!1,Vl(this,d[1]||"",!0),this.o=So(d[2]||""),this.g=So(d[3]||"",!0),Fl(this,d[4]),this.l=So(d[5]||"",!0),ay(this,d[6]||"",!0),this.m=So(d[7]||"")):(this.h=!1,this.i=new xo(null,this.h))}di.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Co(d,ly,!0),":");var m=this.g;return(m||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Co(d,ly,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(Co(m,m.charAt(0)=="/"?QR:KR,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",Co(m,XR)),l.join("")};function Bn(l){return new di(l)}function Vl(l,d,m){l.j=m?So(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Fl(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function ay(l,d,m){d instanceof xo?(l.i=d,JR(l.i,l.h)):(m||(d=Co(d,YR)),l.i=new xo(d,l.h))}function Te(l,d,m){l.i.set(d,m)}function jl(l){return Te(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function So(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Co(l,d,m){return typeof l=="string"?(l=encodeURI(l).replace(d,GR),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function GR(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ly=/[#\/\?@]/g,KR=/[#\?:]/g,QR=/[#\?]/g,YR=/[#\?@]/g,XR=/#/g;function xo(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function gr(l){l.g||(l.g=new Map,l.h=0,l.i&&HR(l.i,function(d,m){l.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=xo.prototype,t.add=function(l,d){gr(this),this.i=null,l=es(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(d),this.h+=1,this};function uy(l,d){gr(l),d=es(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function cy(l,d){return gr(l),d=es(l,d),l.g.has(d)}t.forEach=function(l,d){gr(this),this.g.forEach(function(m,y){m.forEach(function(D){l.call(d,D,y,this)},this)},this)},t.na=function(){gr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let y=0;y<d.length;y++){const D=l[y];for(let L=0;L<D.length;L++)m.push(d[y])}return m},t.V=function(l){gr(this);let d=[];if(typeof l=="string")cy(this,l)&&(d=d.concat(this.g.get(es(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)d=d.concat(l[m])}return d},t.set=function(l,d){return gr(this),this.i=null,l=es(this,l),cy(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function hy(l,d,m){uy(l,d),0<m.length&&(l.i=null,l.g.set(es(l,d),A(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var y=d[m];const L=encodeURIComponent(String(y)),z=this.V(y);for(y=0;y<z.length;y++){var D=L;z[y]!==""&&(D+="="+encodeURIComponent(String(z[y]))),l.push(D)}}return this.i=l.join("&")};function es(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function JR(l,d){d&&!l.j&&(gr(l),l.i=null,l.g.forEach(function(m,y){var D=y.toLowerCase();y!=D&&(uy(this,y),hy(this,D,m))},l)),l.j=d}function ZR(l,d){const m=new Io;if(a.Image){const y=new Image;y.onload=v(_r,m,"TestLoadImage: loaded",!0,d,y),y.onerror=v(_r,m,"TestLoadImage: error",!1,d,y),y.onabort=v(_r,m,"TestLoadImage: abort",!1,d,y),y.ontimeout=v(_r,m,"TestLoadImage: timeout",!1,d,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else d(!1)}function eA(l,d){const m=new Io,y=new AbortController,D=setTimeout(()=>{y.abort(),_r(m,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:y.signal}).then(L=>{clearTimeout(D),L.ok?_r(m,"TestPingServer: ok",!0,d):_r(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),_r(m,"TestPingServer: error",!1,d)})}function _r(l,d,m,y,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),y(m)}catch{}}function tA(){this.g=new VR}function nA(l,d,m){const y=m||"";try{sy(l,function(D,L){let z=D;c(D)&&(z=od(D)),d.push(y+L+"="+encodeURIComponent(z))})}catch(D){throw d.push(y+"type="+encodeURIComponent("_badmap")),D}}function Ro(l){this.l=l.Ub||null,this.j=l.eb||!1}C(Ro,ad),Ro.prototype.g=function(){return new Ul(this.l,this.j)},Ro.prototype.i=function(l){return function(){return l}}({});function Ul(l,d){dt.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Ul,dt),t=Ul.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,No(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ao(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,No(this)),this.g&&(this.readyState=3,No(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;dy(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function dy(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Ao(this):No(this),this.readyState==3&&dy(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Ao(this))},t.Qa=function(l){this.g&&(this.response=l,Ao(this))},t.ga=function(){this.g&&Ao(this)};function Ao(l){l.readyState=4,l.l=null,l.j=null,l.v=null,No(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=d.next();return l.join(`\r
`)};function No(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ul.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function fy(l){let d="";return F(l,function(m,y){d+=y,d+=":",d+=m,d+=`\r
`}),d}function _d(l,d,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=fy(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):Te(l,d,m))}function De(l){dt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(De,dt);var rA=/^https?$/i,iA=["POST","PUT"];t=De.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():cd.g(),this.v=this.o?z_(this.o):z_(cd),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(L){py(this,L);return}if(l=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var D in y)m.set(D,y[D]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())m.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(L=>L.toLowerCase()=="content-type"),D=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(iA,d,void 0))||y||D||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,z]of m)this.g.setRequestHeader(L,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{_y(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){py(this,L)}};function py(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,my(l),Bl(l)}function my(l){l.A||(l.A=!0,Tt(l,"complete"),Tt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Tt(this,"complete"),Tt(this,"abort"),Bl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bl(this,!0)),De.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?gy(this):this.bb())},t.bb=function(){gy(this)};function gy(l){if(l.h&&typeof o<"u"&&(!l.v[1]||zn(l)!=4||l.Z()!=2)){if(l.u&&zn(l)==4)F_(l.Ea,0,l);else if(Tt(l,"readystatechange"),zn(l)==4){l.h=!1;try{const z=l.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var y;if(y=z===0){var D=String(l.D).match(oy)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),y=!rA.test(D?D.toLowerCase():"")}m=y}if(m)Tt(l,"complete"),Tt(l,"success");else{l.m=6;try{var L=2<zn(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",my(l)}}finally{Bl(l)}}}}function Bl(l,d){if(l.g){_y(l);const m=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||Tt(l,"ready");try{m.onreadystatechange=y}catch{}}}function _y(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function zn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<zn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),MR(d)}};function yy(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function sA(l){const d={};l=(l.g&&2<=zn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(I(l[y]))continue;var m=P(l[y]);const D=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const L=d[D]||[];d[D]=L,L.push(m)}E(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ko(l,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||d}function vy(l){this.Aa=0,this.i=[],this.j=new Io,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ko("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ko("baseRetryDelayMs",5e3,l),this.cb=ko("retryDelaySeedMs",1e4,l),this.Wa=ko("forwardChannelMaxRetries",2,l),this.wa=ko("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new ey(l&&l.concurrentRequestLimit),this.Da=new tA,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=vy.prototype,t.la=8,t.G=1,t.connect=function(l,d,m,y){St(0),this.W=l,this.H=d||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=Ay(this,null,this.W),$l(this)};function yd(l){if(wy(l),l.G==3){var d=l.U++,m=Bn(l.I);if(Te(m,"SID",l.K),Te(m,"RID",d),Te(m,"TYPE","terminate"),Po(l,m),d=new mr(l,l.j,d),d.L=2,d.v=jl(Bn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=Ny(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ml(d)}Ry(l)}function zl(l){l.g&&(wd(l),l.g.cancel(),l.g=null)}function wy(l){zl(l),l.u&&(a.clearTimeout(l.u),l.u=null),Wl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function $l(l){if(!ty(l.h)&&!l.s){l.s=!0;var d=l.Ga;Pt||te(),W||(Pt(),W=!0),X.add(d,l),l.B=0}}function oA(l,d){return ny(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Eo(p(l.Ga,l,d),xy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const D=new mr(this,this.j,l);let L=this.o;if(this.S&&(L?(L=_(L),x(L,this.S)):L=this.S),this.m!==null||this.O||(D.H=L,L=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=Iy(this,D,d),m=Bn(this.I),Te(m,"RID",l),Te(m,"CVER",22),this.D&&Te(m,"X-HTTP-Session-Id",this.D),Po(this,m),L&&(this.O?d="headers="+encodeURIComponent(String(fy(L)))+"&"+d:this.m&&_d(m,this.m,L)),gd(this.h,D),this.Ua&&Te(m,"TYPE","init"),this.P?(Te(m,"$req",d),Te(m,"SID","null"),D.T=!0,dd(D,m,null)):dd(D,m,d),this.G=2}}else this.G==3&&(l?Ey(this,l):this.i.length==0||ty(this.h)||Ey(this))};function Ey(l,d){var m;d?m=d.l:m=l.U++;const y=Bn(l.I);Te(y,"SID",l.K),Te(y,"RID",m),Te(y,"AID",l.T),Po(l,y),l.m&&l.o&&_d(y,l.m,l.o),m=new mr(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Iy(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),gd(l.h,m),dd(m,y,d)}function Po(l,d){l.H&&F(l.H,function(m,y){Te(d,y,m)}),l.l&&sy({},function(m,y){Te(d,y,m)})}function Iy(l,d,m){m=Math.min(l.i.length,m);var y=l.l?p(l.l.Na,l.l,l):null;e:{var D=l.i;let L=-1;for(;;){const z=["count="+m];L==-1?0<m?(L=D[0].g,z.push("ofs="+L)):L=0:z.push("ofs="+L);let _e=!0;for(let rt=0;rt<m;rt++){let ce=D[rt].g;const ft=D[rt].map;if(ce-=L,0>ce)L=Math.max(0,D[rt].g-100),_e=!1;else try{nA(ft,z,"req"+ce+"_")}catch{y&&y(ft)}}if(_e){y=z.join("&");break e}}}return l=l.i.splice(0,m),d.D=l,y}function Ty(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;Pt||te(),W||(Pt(),W=!0),X.add(d,l),l.v=0}}function vd(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Eo(p(l.Fa,l),xy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Sy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Eo(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),zl(this),Sy(this))};function wd(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Sy(l){l.g=new mr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Bn(l.qa);Te(d,"RID","rpc"),Te(d,"SID",l.K),Te(d,"AID",l.T),Te(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Te(d,"TO",l.ja),Te(d,"TYPE","xmlhttp"),Po(l,d),l.m&&l.o&&_d(d,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=jl(Bn(d)),m.m=null,m.P=!0,X_(m,l)}t.Za=function(){this.C!=null&&(this.C=null,zl(this),vd(this),St(19))};function Wl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Cy(l,d){var m=null;if(l.g==d){Wl(l),wd(l),l.g=null;var y=2}else if(md(l.h,d))m=d.D,ry(l.h,d),y=1;else return;if(l.G!=0){if(d.o)if(y==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var D=l.B;y=Dl(),Tt(y,new G_(y,m)),$l(l)}else Ty(l);else if(D=d.s,D==3||D==0&&0<d.X||!(y==1&&oA(l,d)||y==2&&vd(l)))switch(m&&0<m.length&&(d=l.h,d.i=d.i.concat(m)),D){case 1:fi(l,5);break;case 4:fi(l,10);break;case 3:fi(l,6);break;default:fi(l,2)}}}function xy(l,d){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*d}function fi(l,d){if(l.j.info("Error code "+d),d==2){var m=p(l.fb,l),y=l.Xa;const D=!y;y=new di(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Vl(y,"https"),jl(y),D?ZR(y.toString(),m):eA(y.toString(),m)}else St(2);l.G=0,l.l&&l.l.sa(d),Ry(l),wy(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function Ry(l){if(l.G=0,l.ka=[],l.l){const d=iy(l.h);(d.length!=0||l.i.length!=0)&&(k(l.ka,d),k(l.ka,l.i),l.h.i.length=0,A(l.i),l.i.length=0),l.l.ra()}}function Ay(l,d,m){var y=m instanceof di?Bn(m):new di(m);if(y.g!="")d&&(y.g=d+"."+y.g),Fl(y,y.s);else{var D=a.location;y=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;var L=new di(null);y&&Vl(L,y),d&&(L.g=d),D&&Fl(L,D),m&&(L.l=m),y=L}return m=l.D,d=l.ya,m&&d&&Te(y,m,d),Te(y,"VER",l.la),Po(l,y),y}function Ny(l,d,m){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new De(new Ro({eb:m})):new De(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ky(){}t=ky.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ql(){}ql.prototype.g=function(l,d){return new $t(l,d)};function $t(l,d){dt.call(this),this.g=new vy(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!I(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!I(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new ts(this)}C($t,dt),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){yd(this.g)},$t.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=od(l),l=m);d.i.push(new $R(d.Ya++,l)),d.G==3&&$l(d)},$t.prototype.N=function(){this.g.l=null,delete this.j,yd(this.g),delete this.g,$t.aa.N.call(this)};function Py(l){ld.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const m in d){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}C(Py,ld);function by(){ud.call(this),this.status=1}C(by,ud);function ts(l){this.g=l}C(ts,ky),ts.prototype.ua=function(){Tt(this.g,"a")},ts.prototype.ta=function(l){Tt(this.g,new Py(l))},ts.prototype.sa=function(l){Tt(this.g,new by)},ts.prototype.ra=function(){Tt(this.g,"b")},ql.prototype.createWebChannel=ql.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,DS=function(){return new ql},bS=function(){return Dl()},PS=ci,wp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ol.NO_ERROR=0,Ol.TIMEOUT=8,Ol.HTTP_ERROR=6,Lu=Ol,K_.COMPLETE="complete",kS=K_,$_.EventType=vo,vo.OPEN="a",vo.CLOSE="b",vo.ERROR="c",vo.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Zo=$_,NS=Ro,De.prototype.listenOnce=De.prototype.L,De.prototype.getLastError=De.prototype.Ka,De.prototype.getLastErrorCode=De.prototype.Ba,De.prototype.getStatus=De.prototype.Z,De.prototype.getResponseJson=De.prototype.Oa,De.prototype.getResponseText=De.prototype.oa,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Ha,AS=De}).apply(typeof hu<"u"?hu:typeof self<"u"?self:typeof window<"u"?window:{});const Rw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let co="10.12.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=new yh("@firebase/firestore");function Uo(){return Vi.logLevel}function H(t,...e){if(Vi.logLevel<=oe.DEBUG){const n=e.map(ug);Vi.debug(`Firestore (${co}): ${t}`,...n)}}function ur(t,...e){if(Vi.logLevel<=oe.ERROR){const n=e.map(ug);Vi.error(`Firestore (${co}): ${t}`,...n)}}function Ws(t,...e){if(Vi.logLevel<=oe.WARN){const n=e.map(ug);Vi.warn(`Firestore (${co}): ${t}`,...n)}}function ug(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function J(t="Unexpected state"){const e=`FIRESTORE (${co}) INTERNAL ASSERTION FAILED: `+t;throw ur(e),new Error(e)}function ye(t,e){t||J()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class OS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class EO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class IO{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new tr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new tr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new tr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new OS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new yt(e)}}class TO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class SO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new TO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class CO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string"),this.R=n.token,new CO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=RO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function qs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Ye(0,0))}static max(){return new Z(new Ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return qa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof qa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends qa{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const AO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends qa{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return AO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new $(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new $(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Ee.fromString(e))}static fromName(e){return new G(Ee.fromString(e).popFirst(5))}static empty(){return new G(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Ee(e.slice()))}}function NO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new Ye(n+1,0):new Ye(n,r));return new Yr(i,G.empty(),e)}function kO(t){return new Yr(t.readTime,t.key,-1)}class Yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yr(Z.min(),G.empty(),-1)}static max(){return new Yr(Z.max(),G.empty(),-1)}}function PO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yl(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==bO)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function OO(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function vl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class cg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}cg.oe=-1;function Ch(t){return t==null}function Ic(t){return t===0&&1/t==-1/0}function LO(t){return typeof t=="number"&&Number.isInteger(t)&&!Ic(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function MS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qe=class Ep{constructor(e,n){this.comparator=e,this.root=n||Wr.EMPTY}insert(e,n){return new Ep(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Wr.BLACK,null,null))}remove(e){return new Ep(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Wr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new du(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new du(this.root,e,this.comparator,!1)}getReverseIterator(){return new du(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new du(this.root,e,this.comparator,!0)}},du=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Wr=class $n{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??$n.RED,this.left=i??$n.EMPTY,this.right=s??$n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new $n(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return $n.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}};Wr.EMPTY=null,Wr.RED=!0,Wr.BLACK=!1;Wr.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Wr(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Nw(this.data.getIterator())}getIteratorFrom(e){return new Nw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new lt(this.comparator);return n.data=e,n}}class Nw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new lt(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class VS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new VS("Invalid base64 string: "+s):s}}(e);return new ht(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const MO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xr(t){if(ye(!!t),typeof t=="string"){let e=0;const n=MO.exec(t);if(ye(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fi(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hg(t){const e=t.mapValue.fields.__previous_value__;return xh(e)?hg(e):e}function Ha(t){const e=Xr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Ga{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ga("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ga&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ji(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?xh(t)?4:FO(t)?9007199254740991:10:J()}function Dn(t,e){if(t===e)return!0;const n=ji(t);if(n!==ji(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ha(t).isEqual(Ha(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Xr(i.timestampValue),a=Xr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Fi(i.bytesValue).isEqual(Fi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ze(i.geoPointValue.latitude)===ze(s.geoPointValue.latitude)&&ze(i.geoPointValue.longitude)===ze(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ze(i.integerValue)===ze(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ze(i.doubleValue),a=ze(s.doubleValue);return o===a?Ic(o)===Ic(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return qs(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Aw(o)!==Aw(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Dn(o[u],a[u])))return!1;return!0}(t,e);default:return J()}}function Ka(t,e){return(t.values||[]).find(n=>Dn(n,e))!==void 0}function Hs(t,e){if(t===e)return 0;const n=ji(t),r=ji(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ze(s.integerValue||s.doubleValue),u=ze(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return kw(t.timestampValue,e.timestampValue);case 4:return kw(Ha(t),Ha(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Fi(s),u=Fi(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=he(a[c],u[c]);if(h!==0)return h}return he(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=he(ze(s.latitude),ze(o.latitude));return a!==0?a:he(ze(s.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const h=Hs(a[c],u[c]);if(h)return h}return he(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===fu.mapValue&&o===fu.mapValue)return 0;if(s===fu.mapValue)return 1;if(o===fu.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const p=he(u[f],h[f]);if(p!==0)return p;const v=Hs(a[u[f]],c[h[f]]);if(v!==0)return v}return he(u.length,h.length)}(t.mapValue,e.mapValue);default:throw J()}}function kw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=Xr(t),r=Xr(e),i=he(n.seconds,r.seconds);return i!==0?i:he(n.nanos,r.nanos)}function Gs(t){return Ip(t)}function Ip(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Xr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ip(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ip(n.fields[o])}`;return i+"}"}(t.mapValue):J()}function Tc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Tp(t){return!!t&&"integerValue"in t}function dg(t){return!!t&&"arrayValue"in t}function Pw(t){return!!t&&"nullValue"in t}function bw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mu(t){return!!t&&"mapValue"in t}function fa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=fa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function FO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Mu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=fa(n)}setAll(e){let n=ot.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=fa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Mu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Mu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Qi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Dt(fa(this.value))}}function FS(t){const e=[];return Qi(t.fields,(n,r)=>{const i=new ot([n]);if(Mu(r)){const s=FS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ht(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new wt(e,0,Z.min(),Z.min(),Z.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,i){return new wt(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new wt(e,2,n,Z.min(),Z.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new wt(e,3,n,Z.min(),Z.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ks{constructor(e,n){this.position=e,this.inclusive=n}}function Dw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=Hs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ow(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Qa{constructor(e,n="asc"){this.field=e,this.dir=n}}function jO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class jS{}class We extends jS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new BO(e,n,r):n==="array-contains"?new WO(e,r):n==="in"?new qO(e,r):n==="not-in"?new HO(e,r):n==="array-contains-any"?new GO(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new zO(e,r):new $O(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Hs(n,this.value)):n!==null&&ji(this.value)===ji(n)&&this.matchesComparison(Hs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class En extends jS{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new En(e,n)}matches(e){return US(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function US(t){return t.op==="and"}function BS(t){return UO(t)&&US(t)}function UO(t){for(const e of t.filters)if(e instanceof En)return!1;return!0}function Sp(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+Gs(t.value);if(BS(t))return t.filters.map(e=>Sp(e)).join(",");{const e=t.filters.map(n=>Sp(n)).join(",");return`${t.op}(${e})`}}function zS(t,e){return t instanceof We?function(r,i){return i instanceof We&&r.op===i.op&&r.field.isEqual(i.field)&&Dn(r.value,i.value)}(t,e):t instanceof En?function(r,i){return i instanceof En&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&zS(o,i.filters[a]),!0):!1}(t,e):void J()}function $S(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${Gs(n.value)}`}(t):t instanceof En?function(n){return n.op.toString()+" {"+n.getFilters().map($S).join(" ,")+"}"}(t):"Filter"}class BO extends We{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class zO extends We{constructor(e,n){super(e,"in",n),this.keys=WS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $O extends We{constructor(e,n){super(e,"not-in",n),this.keys=WS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function WS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class WO extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return dg(n)&&Ka(n.arrayValue,this.value)}}class qO extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ka(this.value.arrayValue,n)}}class HO extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ka(this.value.arrayValue,n)}}class GO extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!dg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ka(this.value.arrayValue,r))}}/**
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
 */class KO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Lw(t,e=null,n=[],r=[],i=null,s=null,o=null){return new KO(t,e,n,r,i,s,o)}function fg(t){const e=ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Sp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ch(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Gs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Gs(r)).join(",")),e.ue=n}return e.ue}function pg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!jO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!zS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ow(t.startAt,e.startAt)&&Ow(t.endAt,e.endAt)}function Cp(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function QO(t,e,n,r,i,s,o,a){return new Yi(t,e,n,r,i,s,o,a)}function Rh(t){return new Yi(t)}function Mw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function mg(t){return t.collectionGroup!==null}function Ps(t){const e=ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new lt(ot.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Qa(s,r))}),n.has(ot.keyField().canonicalString())||e.ce.push(new Qa(ot.keyField(),r))}return e.ce}function Pn(t){const e=ee(t);return e.le||(e.le=YO(e,Ps(t))),e.le}function YO(t,e){if(t.limitType==="F")return Lw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Qa(i.field,s)});const n=t.endAt?new Ks(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ks(t.startAt.position,t.startAt.inclusive):null;return Lw(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function xp(t,e){const n=t.filters.concat([e]);return new Yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Sc(t,e,n){return new Yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ah(t,e){return pg(Pn(t),Pn(e))&&t.limitType===e.limitType}function qS(t){return`${fg(Pn(t))}|lt:${t.limitType}`}function ss(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>$S(i)).join(", ")}]`),Ch(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Gs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Gs(i)).join(",")),`Target(${r})`}(Pn(t))}; limitType=${t.limitType})`}function Nh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ps(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=Dw(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Ps(r),i)||r.endAt&&!function(o,a,u){const c=Dw(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Ps(r),i))}(t,e)}function XO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function HS(t){return(e,n)=>{let r=!1;for(const i of Ps(t)){const s=JO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function JO(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Hs(u,c):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Qi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return MS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZO=new qe(G.comparator);function cr(){return ZO}const GS=new qe(G.comparator);function ea(...t){let e=GS;for(const n of t)e=e.insert(n.key,n);return e}function KS(t){let e=GS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ei(){return pa()}function QS(){return pa()}function pa(){return new ho(t=>t.toString(),(t,e)=>t.isEqual(e))}const e2=new qe(G.comparator),t2=new lt(G.comparator);function ae(...t){let e=t2;for(const n of t)e=e.add(n);return e}const n2=new lt(he);function r2(){return n2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ic(e)?"-0":e}}function XS(t){return{integerValue:""+t}}function i2(t,e){return LO(e)?XS(e):YS(t,e)}/**
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
 */class kh{constructor(){this._=void 0}}function s2(t,e,n){return t instanceof Cc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&xh(s)&&(s=hg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ya?ZS(t,e):t instanceof Xa?eC(t,e):function(i,s){const o=JS(i,s),a=Vw(o)+Vw(i.Pe);return Tp(o)&&Tp(i.Pe)?XS(a):YS(i.serializer,a)}(t,e)}function o2(t,e,n){return t instanceof Ya?ZS(t,e):t instanceof Xa?eC(t,e):n}function JS(t,e){return t instanceof xc?function(r){return Tp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Cc extends kh{}class Ya extends kh{constructor(e){super(),this.elements=e}}function ZS(t,e){const n=tC(e);for(const r of t.elements)n.some(i=>Dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Xa extends kh{constructor(e){super(),this.elements=e}}function eC(t,e){let n=tC(e);for(const r of t.elements)n=n.filter(i=>!Dn(i,r));return{arrayValue:{values:n}}}class xc extends kh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Vw(t){return ze(t.integerValue||t.doubleValue)}function tC(t){return dg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function a2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ya&&i instanceof Ya||r instanceof Xa&&i instanceof Xa?qs(r.elements,i.elements,Dn):r instanceof xc&&i instanceof xc?Dn(r.Pe,i.Pe):r instanceof Cc&&i instanceof Cc}(t.transform,e.transform)}class l2{constructor(e,n){this.version=e,this.transformResults=n}}class _n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _n}static exists(e){return new _n(void 0,e)}static updateTime(e){return new _n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ph{}function nC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gg(t.key,_n.none()):new wl(t.key,t.data,_n.none());{const n=t.data,r=Dt.empty();let i=new lt(ot.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new li(t.key,r,new Ht(i.toArray()),_n.none())}}function u2(t,e,n){t instanceof wl?function(i,s,o){const a=i.value.clone(),u=jw(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof li?function(i,s,o){if(!Vu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=jw(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(rC(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ma(t,e,n,r){return t instanceof wl?function(s,o,a,u){if(!Vu(s.precondition,o))return a;const c=s.value.clone(),h=Uw(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof li?function(s,o,a,u){if(!Vu(s.precondition,o))return a;const c=Uw(s.fieldTransforms,u,o),h=o.data;return h.setAll(rC(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Vu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function c2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=JS(r.transform,i||null);s!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,s))}return n||null}function Fw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&qs(r,i,(s,o)=>a2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class wl extends Ph{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class li extends Ph{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function rC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function jw(t,e,n){const r=new Map;ye(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,o2(o,a,n[i]))}return r}function Uw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,s2(s,o,e))}return r}class gg extends Ph{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class h2 extends Ph{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&u2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ma(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ma(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=QS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=nC(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&qs(this.mutations,e.mutations,(n,r)=>Fw(n,r))&&qs(this.baseMutations,e.baseMutations,(n,r)=>Fw(n,r))}}class _g{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ye(e.mutations.length===r.length);let i=function(){return e2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new _g(e,n,r,i)}}/**
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
 */class f2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class p2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,le;function m2(t){switch(t){default:return J();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function iC(t){if(t===void 0)return ur("GRPC error has no .code"),V.UNKNOWN;switch(t){case Be.OK:return V.OK;case Be.CANCELLED:return V.CANCELLED;case Be.UNKNOWN:return V.UNKNOWN;case Be.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Be.INTERNAL:return V.INTERNAL;case Be.UNAVAILABLE:return V.UNAVAILABLE;case Be.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Be.NOT_FOUND:return V.NOT_FOUND;case Be.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Be.ABORTED:return V.ABORTED;case Be.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Be.DATA_LOSS:return V.DATA_LOSS;default:return J()}}(le=Be||(Be={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function g2(){return new TextEncoder}/**
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
 */const _2=new Ri([4294967295,4294967295],0);function Bw(t){const e=g2().encode(t),n=new RS;return n.update(e),new Uint8Array(n.digest())}function zw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ri([n,r],0),new Ri([i,s],0)]}class yg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ta(`Invalid padding: ${n}`);if(r<0)throw new ta(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ta(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ta(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ri.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Ri.fromNumber(r)));return i.compare(_2)===1&&(i=new Ri([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Bw(e),[r,i]=zw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new yg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Bw(e),[r,i]=zw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ta extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,El.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new bh(Z.min(),i,new qe(he),cr(),ae())}}class El{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new El(r,n,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class sC{constructor(e,n){this.targetId=e,this.me=n}}class oC{constructor(e,n,r=ht.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class $w{constructor(){this.fe=0,this.ge=qw(),this.pe=ht.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ae(),n=ae(),r=ae();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J()}}),new El(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=qw()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ye(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class y2{constructor(e){this.Le=e,this.Be=new Map,this.ke=cr(),this.qe=Ww(),this.Qe=new qe(he)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Cp(s))if(r===0){const o=new G(s.path);this.Ue(n,o,wt.newNoDocument(o,Z.min()))}else ye(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Fi(r).toUint8Array()}catch(u){if(u instanceof VS)return Ws("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new yg(o,i,s)}catch(u){return Ws(u instanceof ta?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Cp(a.target)){const u=new G(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,wt.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=ae();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new bh(e,n,this.Qe,this.ke,r);return this.ke=cr(),this.qe=Ww(),this.Qe=new qe(he),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new $w,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new lt(he),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new $w),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Ww(){return new qe(G.comparator)}function qw(){return new qe(G.comparator)}const v2={asc:"ASCENDING",desc:"DESCENDING"},w2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},E2={and:"AND",or:"OR"};class I2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rp(t,e){return t.useProto3Json||Ch(e)?e:{value:e}}function Rc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function aC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function T2(t,e){return Rc(t,e.toTimestamp())}function bn(t){return ye(!!t),Z.fromTimestamp(function(n){const r=Xr(n);return new Ye(r.seconds,r.nanos)}(t))}function vg(t,e){return Ap(t,e).canonicalString()}function Ap(t,e){const n=function(i){return new Ee(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function lC(t){const e=Ee.fromString(t);return ye(fC(e)),e}function Np(t,e){return vg(t.databaseId,e.path)}function nf(t,e){const n=lC(e);if(n.get(1)!==t.databaseId.projectId)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(cC(n))}function uC(t,e){return vg(t.databaseId,e)}function S2(t){const e=lC(t);return e.length===4?Ee.emptyPath():cC(e)}function kp(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function cC(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Hw(t,e,n){return{name:Np(t,e),fields:n.value.mapValue.fields}}function C2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(ye(h===void 0||typeof h=="string"),ht.fromBase64String(h||"")):(ye(h===void 0||h instanceof Buffer||h instanceof Uint8Array),ht.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?V.UNKNOWN:iC(c.code);return new $(h,c.message||"")}(o);n=new oC(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=nf(t,r.document.name),s=bn(r.document.updateTime),o=r.document.createTime?bn(r.document.createTime):Z.min(),a=new Dt({mapValue:{fields:r.document.fields}}),u=wt.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Fu(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=nf(t,r.document),s=r.readTime?bn(r.readTime):Z.min(),o=wt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Fu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=nf(t,r.document),s=r.removedTargetIds||[];n=new Fu([],s,i,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new p2(i,s),a=r.targetId;n=new sC(a,o)}}return n}function x2(t,e){let n;if(e instanceof wl)n={update:Hw(t,e.key,e.value)};else if(e instanceof gg)n={delete:Np(t,e.key)};else if(e instanceof li)n={update:Hw(t,e.key,e.data),updateMask:L2(e.fieldMask)};else{if(!(e instanceof h2))return J();n={verify:Np(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Cc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ya)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Xa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof xc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:T2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J()}(t,e.precondition)),n}function R2(t,e){return t&&t.length>0?(ye(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?bn(i.updateTime):bn(s);return o.isEqual(Z.min())&&(o=bn(s)),new l2(o,i.transformResults||[])}(n,e))):[]}function A2(t,e){return{documents:[uC(t,e.path)]}}function N2(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=uC(t,i);const s=function(c){if(c.length!==0)return dC(En.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:os(p.field),direction:b2(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Rp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function k2(t){let e=S2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ye(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const p=hC(f);return p instanceof En&&BS(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(C){return new Qa(as(C.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,Ch(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(f){const p=!!f.before,v=f.values||[];return new Ks(v,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,v=f.values||[];return new Ks(v,p)}(n.endAt)),QO(e,i,o,s,a,"F",u,c)}function P2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function hC(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=as(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=as(n.unaryFilter.field);return We.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=as(n.unaryFilter.field);return We.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=as(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return We.create(as(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return En.create(n.compositeFilter.filters.map(r=>hC(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function b2(t){return v2[t]}function D2(t){return w2[t]}function O2(t){return E2[t]}function os(t){return{fieldPath:t.canonicalString()}}function as(t){return ot.fromServerFormat(t.fieldPath)}function dC(t){return t instanceof We?function(n){if(n.op==="=="){if(bw(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NAN"}};if(Pw(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(bw(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NOT_NAN"}};if(Pw(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:os(n.field),op:D2(n.op),value:n.value}}}(t):t instanceof En?function(n){const r=n.getFilters().map(i=>dC(i));return r.length===1?r[0]:{compositeFilter:{op:O2(n.op),filters:r}}}(t):J()}function L2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function fC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n,r,i,s=Z.min(),o=Z.min(),a=ht.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new br(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e){this.ct=e}}function V2(t){const e=k2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Sc(e,e.limit,"L"):e}/**
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
 */class F2{constructor(){this.an=new j2}addToCollectionParentIndex(e,n){return this.an.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Yr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Yr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class j2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new lt(Ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new lt(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Ln(){return new Qs(0)}static Bn(){return new Qs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(){this.changes=new ho(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,wt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class B2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ma(r.mutation,i,Ht.empty(),Ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ae()){const i=Ei();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ea();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ei();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ae()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=cr();const o=pa(),a=function(){return pa()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof li)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),ma(h.mutation,c,h.mutation.getFieldMask(),Ye.now())):o.set(c.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new B2(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=pa();let i=new qe((o,a)=>o-a),s=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||Ht.empty();h=a.applyToLocalView(c,h),r.set(u,h);const f=(i.get(a.batchId)||ae()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,f=QS();h.forEach(p=>{if(!s.has(p)){const v=nC(n.get(p),r.get(p));v!==null&&f.set(p,v),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):mg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(Ei());let a=-1,u=s;return o.next(c=>j.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?j.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{u=u.insert(h,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ae())).next(h=>({batchId:a,changes:KS(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=ea();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ea();return this.indexManager.getCollectionParents(e,s).next(a=>j.forEach(a,u=>{const c=function(f,p){return new Yi(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,wt.newInvalidDocument(h)))});let a=ea();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&ma(h.mutation,c,Ht.empty(),Ye.now()),Nh(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return j.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:bn(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(i){return{name:i.name,query:V2(i.bundledQuery),readTime:bn(i.readTime)}}(n)),j.resolve()}}/**
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
 */class W2{constructor(){this.overlays=new qe(G.comparator),this.Pr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ei();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=Ei(),s=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new qe((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Ei(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Ei(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return j.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new f2(n,r));let s=this.Pr.get(n);s===void 0&&(s=ae(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
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
 */class q2{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(){this.Ir=new lt(Je.Tr),this.Er=new lt(Je.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new Je(e,n);this.Ir=this.Ir.add(r),this.Er=this.Er.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new Je(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new G(new Ee([])),r=new Je(n,e),i=new Je(n,e+1),s=[];return this.Er.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Er=this.Er.delete(e)}pr(e){const n=new G(new Ee([])),r=new Je(n,e),i=new Je(n,e+1);let s=ae();return this.Er.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Je(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.yr=n}static Tr(e,n){return G.comparator(e.key,n.key)||he(e.yr,n.yr)}static dr(e,n){return he(e.yr,n.yr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new lt(Je.Tr)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new d2(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Sr=this.Sr.add(new Je(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),i=new Je(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const a=this.br(o.yr);s.push(a)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new lt(he);return n.forEach(i=>{const s=new Je(i,0),o=new Je(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{r=r.add(a.yr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new Je(new G(s),0);let a=new lt(he);return this.Sr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.yr)),!0)},o),j.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ye(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return j.forEach(n.mutations,i=>{const s=new Je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new Je(n,0),i=this.Sr.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(e){this.Fr=e,this.docs=function(){return new qe(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():wt.newInvalidDocument(n))}getEntries(e,n){let r=cr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():wt.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=cr();const o=n.path,a=new G(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||PO(kO(h),r)<=0||(i.has(h.key)||Nh(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J()}Mr(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new K2(this)}getSize(e){return j.resolve(this.size)}}class K2 extends U2{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(e){this.persistence=e,this.Or=new ho(n=>fg(n),pg),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new wg,this.targetCount=0,this.Br=Qs.Ln()}forEachTarget(e,n){return this.Or.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),j.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new Qs(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Qn(n),j.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Lr.mr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Lr.Ar(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Lr.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Lr.mr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Lr.pr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Lr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e,n){this.kr={},this.overlays={},this.qr=new cg(0),this.Qr=!1,this.Qr=!0,this.Kr=new q2,this.referenceDelegate=e(this),this.$r=new Q2(this),this.indexManager=new F2,this.remoteDocumentCache=function(i){return new G2(i)}(r=>this.referenceDelegate.Ur(r)),this.serializer=new M2(n),this.Wr=new $2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new W2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new H2(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new X2(this.qr.next());return this.referenceDelegate.Gr(),r(i).next(s=>this.referenceDelegate.zr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}jr(e,n){return j.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class X2 extends DO{constructor(e){super(),this.currentSequenceNumber=e}}class Eg{constructor(e){this.persistence=e,this.Hr=new wg,this.Jr=null}static Yr(e){return new Eg(e)}get Zr(){if(this.Jr)return this.Jr;throw J()}addReference(e,n,r){return this.Hr.addReference(r,n),this.Zr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Hr.removeReference(r,n),this.Zr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Zr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Hr.mr(n.targetId).forEach(i=>this.Zr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Zr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Gr(){this.Jr=new Set}zr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Zr,r=>{const i=G.fromPath(r);return this.Xr(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.Jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Xr(e,n).next(r=>{r?this.Zr.delete(n.toString()):this.Zr.add(n.toString())})}Ur(e){return 0}Xr(e,n){return j.or([()=>j.resolve(this.Hr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.jr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ki=r,this.$i=i}static Ui(e,n){let r=ae(),i=ae();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ig(e,n.fromCache,r,i)}}/**
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
 */class J2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Z2{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return Uk()?8:OO(ct())>0?6:4}()}initialize(e,n){this.Hi=e,this.indexManager=n,this.Wi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Yi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new J2;return this.Zi(e,n,o).next(a=>{if(s.result=a,this.Gi)return this.Xi(e,n,o,a.size)})}).next(()=>s.result)}Xi(e,n,r,i){return r.documentReadCount<this.zi?(Uo()<=oe.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",ss(n),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),j.resolve()):(Uo()<=oe.DEBUG&&H("QueryEngine","Query:",ss(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ji*i?(Uo()<=oe.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",ss(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pn(n))):j.resolve())}Ji(e,n){if(Mw(n))return j.resolve(null);let r=Pn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Sc(n,null,"F"),r=Pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ae(...s);return this.Hi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.es(n,a);return this.ts(n,c,o,u.readTime)?this.Ji(e,Sc(n,null,"F")):this.ns(e,c,n,u)}))})))}Yi(e,n,r,i){return Mw(n)||i.isEqual(Z.min())?j.resolve(null):this.Hi.getDocuments(e,r).next(s=>{const o=this.es(n,s);return this.ts(n,o,r,i)?j.resolve(null):(Uo()<=oe.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ss(n)),this.ns(e,o,n,NO(i,-1)).next(a=>a))})}es(e,n){let r=new lt(HS(e));return n.forEach((i,s)=>{Nh(e,s)&&(r=r.add(s))}),r}ts(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Zi(e,n,r){return Uo()<=oe.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",ss(n)),this.Hi.getDocumentsMatchingQuery(e,n,Yr.min(),r)}ns(e,n,r,i){return this.Hi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(e,n,r,i){this.persistence=e,this.rs=n,this.serializer=i,this.ss=new qe(he),this.os=new ho(s=>fg(s),pg),this._s=new Map,this.us=e.getRemoteDocumentCache(),this.$r=e.getTargetCache(),this.Wr=e.getBundleCache(),this.cs(r)}cs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new z2(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ss))}}function tL(t,e,n,r){return new eL(t,e,n,r)}async function pC(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.cs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=ae();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({ls:c,removedBatchIds:o,addedBatchIds:a}))})})}function nL(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.us.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const f=c.batch,p=f.keys();let v=j.resolve();return p.forEach(C=>{v=v.next(()=>h.getEntry(u,C)).next(A=>{const k=c.docVersions.get(C);ye(k!==null),A.version.compareTo(k)<0&&(f.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),h.addEntry(A)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ae();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function mC(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.$r.getLastRemoteSnapshotVersion(n))}function rL(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.us.newChangeBuffer({trackRemovals:!0});i=n.ss;const a=[];e.targetChanges.forEach((h,f)=>{const p=i.get(f);if(!p)return;a.push(n.$r.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.$r.addMatchingKeys(s,h.addedDocuments,f)));let v=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?v=v.withResumeToken(ht.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):h.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(h.resumeToken,r)),i=i.insert(f,v),function(A,k,S){return A.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(p,v,h)&&a.push(n.$r.updateTargetData(s,v))});let u=cr(),c=ae();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(iL(s,o,e.documentUpdates).next(h=>{u=h.hs,c=h.Ps})),!r.isEqual(Z.min())){const h=n.$r.getLastRemoteSnapshotVersion(s).next(f=>n.$r.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return j.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ss=i,s))}function iL(t,e,n){let r=ae(),i=ae();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=cr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(Z.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{hs:o,Ps:i}})}function sL(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function oL(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.$r.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.$r.allocateTargetId(r).next(o=>(i=new br(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.$r.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ss.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ss=n.ss.insert(r.targetId,r),n.os.set(e,r.targetId)),r})}async function Pp(t,e,n){const r=ee(t),i=r.ss.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!vl(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ss=r.ss.remove(e),r.os.delete(i.target)}function Gw(t,e,n){const r=ee(t);let i=Z.min(),s=ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=ee(u),p=f.os.get(h);return p!==void 0?j.resolve(f.ss.get(p)):f.$r.getTargetData(c,h)}(r,o,Pn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.$r.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.rs.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:ae())).next(a=>(aL(r,XO(e),a),{documents:a,Is:s})))}function aL(t,e,n){let r=t._s.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t._s.set(e,r)}class Kw{constructor(){this.activeTargetIds=r2()}Vs(e){this.activeTargetIds=this.activeTargetIds.add(e)}fs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Rs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lL{constructor(){this.io=new Kw,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.io.Vs(e),this.so[e]||"not-current"}updateQueryState(e,n,r){this.so[e]=n}removeLocalQueryTarget(e){this.io.fs(e)}isLocalQueryTarget(e){return this.io.activeTargetIds.has(e)}clearQueryState(e){delete this.so[e]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(e){return this.io.activeTargetIds.has(e)}start(){return this.io=new Kw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class uL{oo(e){}shutdown(){}}/**
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
 */class Qw{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(e){this.lo.push(e)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.lo)e(0)}co(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.lo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const cL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hL{constructor(e){this.Po=e.Po,this.Io=e.Io}To(e){this.Eo=e}Ao(e){this.Ro=e}Vo(e){this.mo=e}onMessage(e){this.fo=e}close(){this.Io()}send(e){this.Po(e)}po(){this.Eo()}yo(){this.Ro()}wo(e){this.mo(e)}So(e){this.fo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class dL extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.bo=r+"://"+n.host,this.Do=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get vo(){return!1}Fo(n,r,i,s,o){const a=rf(),u=this.Mo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(c,s,o),this.Oo(n,u,c,i).then(h=>(H("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Ws("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}No(n,r,i,s,o,a){return this.Fo(n,r,i,s,o)}xo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+co}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Mo(n,r){const i=cL[n];return`${this.bo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Oo(e,n,r,i){const s=rf();return new Promise((o,a)=>{const u=new AS;u.setWithCredentials(!0),u.listenOnce(kS.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Lu.NO_ERROR:const h=u.getResponseJson();H(_t,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Lu.TIMEOUT:H(_t,`RPC '${e}' ${s} timed out`),a(new $(V.DEADLINE_EXCEEDED,"Request time out"));break;case Lu.HTTP_ERROR:const f=u.getStatus();if(H(_t,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const v=p==null?void 0:p.error;if(v&&v.status&&v.message){const C=function(k){const S=k.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(S)>=0?S:V.UNKNOWN}(v.status);a(new $(C,v.message))}else a(new $(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new $(V.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{H(_t,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(_t,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Lo(e,n,r){const i=rf(),s=[this.bo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=DS(),a=bS(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new NS({})),this.xo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");H(_t,`Creating RPC '${e}' stream ${i}: ${h}`,u);const f=o.createWebChannel(h,u);let p=!1,v=!1;const C=new hL({Po:k=>{v?H(_t,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(p||(H(_t,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),H(_t,`RPC '${e}' stream ${i} sending:`,k),f.send(k))},Io:()=>f.close()}),A=(k,S,I)=>{k.listen(S,R=>{try{I(R)}catch(N){setTimeout(()=>{throw N},0)}})};return A(f,Zo.EventType.OPEN,()=>{v||(H(_t,`RPC '${e}' stream ${i} transport opened.`),C.po())}),A(f,Zo.EventType.CLOSE,()=>{v||(v=!0,H(_t,`RPC '${e}' stream ${i} transport closed`),C.wo())}),A(f,Zo.EventType.ERROR,k=>{v||(v=!0,Ws(_t,`RPC '${e}' stream ${i} transport errored:`,k),C.wo(new $(V.UNAVAILABLE,"The operation could not be completed")))}),A(f,Zo.EventType.MESSAGE,k=>{var S;if(!v){const I=k.data[0];ye(!!I);const R=I,N=R.error||((S=R[0])===null||S===void 0?void 0:S.error);if(N){H(_t,`RPC '${e}' stream ${i} received error:`,N);const M=N.status;let F=function(T){const x=Be[T];if(x!==void 0)return iC(x)}(M),E=N.message;F===void 0&&(F=V.INTERNAL,E="Unknown error status: "+M+" with message "+N.message),v=!0,C.wo(new $(F,E)),f.close()}else H(_t,`RPC '${e}' stream ${i} received:`,I),C.So(I)}}),A(a,PS.STAT_EVENT,k=>{k.stat===wp.PROXY?H(_t,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===wp.NOPROXY&&H(_t,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.yo()},0),C}}function sf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(t){return new I2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ai=e,this.timerId=n,this.Bo=r,this.ko=i,this.qo=s,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(e){this.cancel();const n=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Qo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,i,()=>(this.$o=Date.now(),e())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n,r,i,s,o,a,u){this.ai=e,this.jo=r,this.Ho=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new gC(e,n)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(e){this.a_(),this.stream.send(e)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(e,n){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,e!==4?this.e_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(ur(n.toString()),ur("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Vo(n)}c_(){}auth(){this.state=1;const e=this.l_(this.Jo),n=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Jo===n&&this.h_(r,i)},r=>{e(()=>{const i=new $(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.P_(i)})})}h_(e,n){const r=this.l_(this.Jo);this.stream=this.I_(e,n),this.stream.To(()=>{r(()=>this.listener.To())}),this.stream.Ao(()=>{r(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(i=>{r(()=>this.P_(i))}),this.stream.onMessage(i=>{r(()=>++this.Xo==1?this.T_(i):this.onNext(i))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}l_(e){return n=>{this.ai.enqueueAndForget(()=>this.Jo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fL extends _C{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}I_(e,n){return this.connection.Lo("Listen",e,n)}T_(e){return this.onNext(e)}onNext(e){this.e_.reset();const n=C2(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?bn(o.readTime):Z.min()}(e);return this.listener.E_(n,r)}d_(e){const n={};n.database=kp(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Cp(u)?{documents:A2(s,u)}:{query:N2(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=aC(s,o.resumeToken);const c=Rp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Z.min())>0){a.readTime=Rc(s,o.snapshotVersion.toTimestamp());const c=Rp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=P2(this.serializer,e);r&&(n.labels=r),this.__(n)}A_(e){const n={};n.database=kp(this.serializer),n.removeTarget=e,this.__(n)}}class pL extends _C{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get R_(){return this.Xo>0}start(){this.lastStreamToken=void 0,super.start()}c_(){this.R_&&this.V_([])}I_(e,n){return this.connection.Lo("Write",e,n)}T_(e){return ye(!!e.streamToken),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0),this.listener.m_()}onNext(e){ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.e_.reset();const n=R2(e.writeResults,e.commitTime),r=bn(e.commitTime);return this.listener.f_(r,n)}g_(){const e={};e.database=kp(this.serializer),this.__(e)}V_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>x2(this.serializer,r))};this.__(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mL extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.p_=!1}y_(){if(this.p_)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(e,n,r,i){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,Ap(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(V.UNKNOWN,s.toString())})}No(e,n,r,i,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.No(e,Ap(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(V.UNKNOWN,o.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class gL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(e){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.M_(),this.w_=0,e==="Online"&&(this.b_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}v_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(ur(n),this.b_=!1):H("OnlineStateTracker",n)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _L{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=s,this.B_.oo(o=>{r.enqueueAndForget(async()=>{Xi(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ee(u);c.N_.add(4),await Il(c),c.k_.set("Unknown"),c.N_.delete(4),await Oh(c)}(this))})}),this.k_=new gL(r,i)}}async function Oh(t){if(Xi(t))for(const e of t.L_)await e(!0)}async function Il(t){for(const e of t.L_)await e(!1)}function yC(t,e){const n=ee(t);n.O_.has(e.targetId)||(n.O_.set(e.targetId,e),xg(n)?Cg(n):fo(n).n_()&&Sg(n,e))}function Tg(t,e){const n=ee(t),r=fo(n);n.O_.delete(e),r.n_()&&vC(n,e),n.O_.size===0&&(r.n_()?r.s_():Xi(n)&&n.k_.set("Unknown"))}function Sg(t,e){if(t.q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}fo(t).d_(e)}function vC(t,e){t.q_.xe(e),fo(t).A_(e)}function Cg(t){t.q_=new y2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.O_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),fo(t).start(),t.k_.D_()}function xg(t){return Xi(t)&&!fo(t).t_()&&t.O_.size>0}function Xi(t){return ee(t).N_.size===0}function wC(t){t.q_=void 0}async function yL(t){t.k_.set("Online")}async function vL(t){t.O_.forEach((e,n)=>{Sg(t,e)})}async function wL(t,e){wC(t),xg(t)?(t.k_.F_(e),Cg(t)):t.k_.set("Unknown")}async function EL(t,e,n){if(t.k_.set("Online"),e instanceof oC&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.O_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.O_.delete(a),i.q_.removeTarget(a))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ac(t,r)}else if(e instanceof Fu?t.q_.Ke(e):e instanceof sC?t.q_.He(e):t.q_.We(e),!n.isEqual(Z.min()))try{const r=await mC(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.O_.get(c);h&&s.O_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.O_.get(u);if(!h)return;s.O_.set(u,h.withResumeToken(ht.EMPTY_BYTE_STRING,h.snapshotVersion)),vC(s,u);const f=new br(h.target,u,c,h.sequenceNumber);Sg(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Ac(t,r)}}async function Ac(t,e,n){if(!vl(e))throw e;t.N_.add(1),await Il(t),t.k_.set("Offline"),n||(n=()=>mC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.N_.delete(1),await Oh(t)})}function EC(t,e){return e().catch(n=>Ac(t,n,e))}async function Lh(t){const e=ee(t),n=Jr(e);let r=e.x_.length>0?e.x_[e.x_.length-1].batchId:-1;for(;IL(e);)try{const i=await sL(e.localStore,r);if(i===null){e.x_.length===0&&n.s_();break}r=i.batchId,TL(e,i)}catch(i){await Ac(e,i)}IC(e)&&TC(e)}function IL(t){return Xi(t)&&t.x_.length<10}function TL(t,e){t.x_.push(e);const n=Jr(t);n.n_()&&n.R_&&n.V_(e.mutations)}function IC(t){return Xi(t)&&!Jr(t).t_()&&t.x_.length>0}function TC(t){Jr(t).start()}async function SL(t){Jr(t).g_()}async function CL(t){const e=Jr(t);for(const n of t.x_)e.V_(n.mutations)}async function xL(t,e,n){const r=t.x_.shift(),i=_g.from(r,e,n);await EC(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Lh(t)}async function RL(t,e){e&&Jr(t).R_&&await async function(r,i){if(function(o){return m2(o)&&o!==V.ABORTED}(i.code)){const s=r.x_.shift();Jr(r).i_(),await EC(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Lh(r)}}(t,e),IC(t)&&TC(t)}async function Yw(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Xi(n);n.N_.add(3),await Il(n),r&&n.k_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.N_.delete(3),await Oh(n)}async function AL(t,e){const n=ee(t);e?(n.N_.delete(2),await Oh(n)):e||(n.N_.add(2),await Il(n),n.k_.set("Unknown"))}function fo(t){return t.Q_||(t.Q_=function(n,r,i){const s=ee(n);return s.y_(),new fL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{To:yL.bind(null,t),Ao:vL.bind(null,t),Vo:wL.bind(null,t),E_:EL.bind(null,t)}),t.L_.push(async e=>{e?(t.Q_.i_(),xg(t)?Cg(t):t.k_.set("Unknown")):(await t.Q_.stop(),wC(t))})),t.Q_}function Jr(t){return t.K_||(t.K_=function(n,r,i){const s=ee(n);return s.y_(),new pL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{To:()=>Promise.resolve(),Ao:SL.bind(null,t),Vo:RL.bind(null,t),m_:CL.bind(null,t),f_:xL.bind(null,t)}),t.L_.push(async e=>{e?(t.K_.i_(),await Lh(t)):(await t.K_.stop(),t.x_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.x_.length} pending writes`),t.x_=[]))})),t.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Rg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ag(t,e){if(ur("AsyncQueue",`${e}: ${t}`),vl(t))return new $(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=ea(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new bs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(){this.U_=new qe(G.comparator)}track(e){const n=e.doc.key,r=this.U_.get(n);r?e.type!==0&&r.type===3?this.U_=this.U_.insert(n,e):e.type===3&&r.type!==1?this.U_=this.U_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.U_=this.U_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.U_=this.U_.remove(n):e.type===1&&r.type===2?this.U_=this.U_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):J():this.U_=this.U_.insert(n,e)}W_(){const e=[];return this.U_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ys{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ys(e,n,bs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ah(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NL{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(e=>e.H_())}}class kL{constructor(){this.queries=Jw(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(n,r){const i=ee(n),s=i.queries;i.queries=Jw(),s.forEach((o,a)=>{for(const u of a.z_)u.onError(r)})})(this,new $(V.ABORTED,"Firestore shutting down"))}}function Jw(){return new ho(t=>qS(t),Ah)}async function Ng(t,e){const n=ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.j_()&&e.H_()&&(r=2):(s=new NL,r=e.H_()?0:1);try{switch(r){case 0:s.G_=await n.onListen(i,!0);break;case 1:s.G_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Ag(o,`Initialization of query '${ss(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.z_.push(e),e.Y_(n.onlineState),s.G_&&e.Z_(s.G_)&&Pg(n)}async function kg(t,e){const n=ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.z_.indexOf(e);o>=0&&(s.z_.splice(o,1),s.z_.length===0?i=e.H_()?0:1:!s.j_()&&e.H_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function PL(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.z_)a.Z_(i)&&(r=!0);o.G_=i}}r&&Pg(n)}function bL(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.z_)s.onError(n);r.queries.delete(e)}function Pg(t){t.J_.forEach(e=>{e.next()})}var bp,Zw;(Zw=bp||(bp={})).X_="default",Zw.Cache="cache";class bg{constructor(e,n,r){this.query=e,this.ea=n,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=r||{}}Z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ys(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ta?this.ra(e)&&(this.ea.next(e),n=!0):this.ia(e,this.onlineState)&&(this.sa(e),n=!0),this.na=e,n}onError(e){this.ea.error(e)}Y_(e){this.onlineState=e;let n=!1;return this.na&&!this.ta&&this.ia(this.na,e)&&(this.sa(this.na),n=!0),n}ia(e,n){if(!e.fromCache||!this.H_())return!0;const r=n!=="Offline";return(!this.options.oa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ra(e){if(e.docChanges.length>0)return!0;const n=this.na&&this.na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}sa(e){e=Ys.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ta=!0,this.ea.next(e)}H_(){return this.options.source!==bp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e){this.key=e}}class CC{constructor(e){this.key=e}}class DL{constructor(e,n){this.query=e,this.Ia=n,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=ae(),this.mutatedKeys=ae(),this.da=HS(e),this.Aa=new bs(this.da)}get Ra(){return this.Ia}Va(e,n){const r=n?n.ma:new Xw,i=n?n.Aa:this.Aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const p=i.get(h),v=Nh(this.query,f)?f:null,C=!!p&&this.mutatedKeys.has(p.key),A=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let k=!1;p&&v?p.data.isEqual(v.data)?C!==A&&(r.track({type:3,doc:v}),k=!0):this.fa(p,v)||(r.track({type:2,doc:v}),k=!0,(u&&this.da(v,u)>0||c&&this.da(v,c)<0)&&(a=!0)):!p&&v?(r.track({type:0,doc:v}),k=!0):p&&!v&&(r.track({type:1,doc:p}),k=!0,(u||c)&&(a=!0)),k&&(v?(o=o.add(v),s=A?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Aa:o,ma:r,ts:a,mutatedKeys:s}}fa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Aa;this.Aa=e.Aa,this.mutatedKeys=e.mutatedKeys;const o=e.ma.W_();o.sort((h,f)=>function(v,C){const A=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return A(v)-A(C)}(h.type,f.type)||this.da(h.doc,f.doc)),this.ga(r),i=i!=null&&i;const a=n&&!i?this.pa():[],u=this.Ea.size===0&&this.current&&!i?1:0,c=u!==this.Ta;return this.Ta=u,o.length!==0||c?{snapshot:new Ys(this.query,e.Aa,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ya:a}:{ya:a}}Y_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new Xw,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(e){return!this.Ia.has(e)&&!!this.Aa.has(e)&&!this.Aa.get(e).hasLocalMutations}ga(e){e&&(e.addedDocuments.forEach(n=>this.Ia=this.Ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ia=this.Ia.delete(n)),this.current=e.current)}pa(){if(!this.current)return[];const e=this.Ea;this.Ea=ae(),this.Aa.forEach(r=>{this.wa(r.key)&&(this.Ea=this.Ea.add(r.key))});const n=[];return e.forEach(r=>{this.Ea.has(r)||n.push(new CC(r))}),this.Ea.forEach(r=>{e.has(r)||n.push(new SC(r))}),n}Sa(e){this.Ia=e.Is,this.Ea=ae();const n=this.Va(e.documents);return this.applyChanges(n,!0)}ba(){return Ys.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class OL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class LL{constructor(e){this.key=e,this.Da=!1}}class ML{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.va=new ho(a=>qS(a),Ah),this.Fa=new Map,this.Ma=new Set,this.xa=new qe(G.comparator),this.Oa=new Map,this.Na=new wg,this.La={},this.Ba=new Map,this.ka=Qs.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function VL(t,e,n=!0){const r=PC(t);let i;const s=r.va.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ba()):i=await xC(r,e,n,!0),i}async function FL(t,e){const n=PC(t);await xC(n,e,!0,!1)}async function xC(t,e,n,r){const i=await oL(t.localStore,Pn(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await jL(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&yC(t.remoteStore,i),a}async function jL(t,e,n,r,i){t.Qa=(f,p,v)=>async function(A,k,S,I){let R=k.view.Va(S);R.ts&&(R=await Gw(A.localStore,k.query,!1).then(({documents:E})=>k.view.Va(E,R)));const N=I&&I.targetChanges.get(k.targetId),M=I&&I.targetMismatches.get(k.targetId)!=null,F=k.view.applyChanges(R,A.isPrimaryClient,N,M);return t0(A,k.targetId,F.ya),F.snapshot}(t,f,p,v);const s=await Gw(t.localStore,e,!0),o=new DL(e,s.Is),a=o.Va(s.documents),u=El.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);t0(t,n,c.ya);const h=new OL(e,n,o);return t.va.set(e,h),t.Fa.has(n)?t.Fa.get(n).push(e):t.Fa.set(n,[e]),c.snapshot}async function UL(t,e,n){const r=ee(t),i=r.va.get(e),s=r.Fa.get(i.targetId);if(s.length>1)return r.Fa.set(i.targetId,s.filter(o=>!Ah(o,e))),void r.va.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Pp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Tg(r.remoteStore,i.targetId),Dp(r,i.targetId)}).catch(yl)):(Dp(r,i.targetId),await Pp(r.localStore,i.targetId,!0))}async function BL(t,e){const n=ee(t),r=n.va.get(e),i=n.Fa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Tg(n.remoteStore,r.targetId))}async function zL(t,e,n){const r=QL(t);try{const i=await function(o,a){const u=ee(o),c=Ye.now(),h=a.reduce((v,C)=>v.add(C.key),ae());let f,p;return u.persistence.runTransaction("Locally write mutations","readwrite",v=>{let C=cr(),A=ae();return u.us.getEntries(v,h).next(k=>{C=k,C.forEach((S,I)=>{I.isValidDocument()||(A=A.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(v,C)).next(k=>{f=k;const S=[];for(const I of a){const R=c2(I,f.get(I.key).overlayedDocument);R!=null&&S.push(new li(I.key,R,FS(R.value.mapValue),_n.exists(!0)))}return u.mutationQueue.addMutationBatch(v,c,S,a)}).next(k=>{p=k;const S=k.applyToLocalDocumentSet(f,A);return u.documentOverlayCache.saveOverlays(v,k.batchId,S)})}).then(()=>({batchId:p.batchId,changes:KS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.La[o.currentUser.toKey()];c||(c=new qe(he)),c=c.insert(a,u),o.La[o.currentUser.toKey()]=c}(r,i.batchId,n),await Tl(r,i.changes),await Lh(r.remoteStore)}catch(i){const s=Ag(i,"Failed to persist write");n.reject(s)}}async function RC(t,e){const n=ee(t);try{const r=await rL(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Oa.get(s);o&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Da=!0:i.modifiedDocuments.size>0?ye(o.Da):i.removedDocuments.size>0&&(ye(o.Da),o.Da=!1))}),await Tl(n,r,e)}catch(r){await yl(r)}}function e0(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.va.forEach((s,o)=>{const a=o.view.Y_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=ee(o);u.onlineState=a;let c=!1;u.queries.forEach((h,f)=>{for(const p of f.z_)p.Y_(a)&&(c=!0)}),c&&Pg(u)}(r.eventManager,e),i.length&&r.Ca.E_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $L(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Oa.get(e),s=i&&i.key;if(s){let o=new qe(G.comparator);o=o.insert(s,wt.newNoDocument(s,Z.min()));const a=ae().add(s),u=new bh(Z.min(),new Map,new qe(he),o,a);await RC(r,u),r.xa=r.xa.remove(s),r.Oa.delete(e),Dg(r)}else await Pp(r.localStore,e,!1).then(()=>Dp(r,e,n)).catch(yl)}async function WL(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await nL(n.localStore,e);NC(n,r,null),AC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Tl(n,i)}catch(i){await yl(i)}}async function qL(t,e,n){const r=ee(t);try{const i=await function(o,a){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(ye(f!==null),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);NC(r,e,n),AC(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Tl(r,i)}catch(i){await yl(i)}}function AC(t,e){(t.Ba.get(e)||[]).forEach(n=>{n.resolve()}),t.Ba.delete(e)}function NC(t,e,n){const r=ee(t);let i=r.La[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.La[r.currentUser.toKey()]=i}}function Dp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fa.get(e))t.va.delete(r),n&&t.Ca.Ka(r,n);t.Fa.delete(e),t.isPrimaryClient&&t.Na.mr(e).forEach(r=>{t.Na.containsKey(r)||kC(t,r)})}function kC(t,e){t.Ma.delete(e.path.canonicalString());const n=t.xa.get(e);n!==null&&(Tg(t.remoteStore,n),t.xa=t.xa.remove(e),t.Oa.delete(n),Dg(t))}function t0(t,e,n){for(const r of n)r instanceof SC?(t.Na.addReference(r.key,e),HL(t,r)):r instanceof CC?(H("SyncEngine","Document no longer in limbo: "+r.key),t.Na.removeReference(r.key,e),t.Na.containsKey(r.key)||kC(t,r.key)):J()}function HL(t,e){const n=e.key,r=n.path.canonicalString();t.xa.get(n)||t.Ma.has(r)||(H("SyncEngine","New document in limbo: "+n),t.Ma.add(r),Dg(t))}function Dg(t){for(;t.Ma.size>0&&t.xa.size<t.maxConcurrentLimboResolutions;){const e=t.Ma.values().next().value;t.Ma.delete(e);const n=new G(Ee.fromString(e)),r=t.ka.next();t.Oa.set(r,new LL(n)),t.xa=t.xa.insert(n,r),yC(t.remoteStore,new br(Pn(Rh(n.path)),r,"TargetPurposeLimboResolution",cg.oe))}}async function Tl(t,e,n){const r=ee(t),i=[],s=[],o=[];r.va.isEmpty()||(r.va.forEach((a,u)=>{o.push(r.Qa(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Ig.Ui(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.E_(i),await async function(u,c){const h=ee(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>j.forEach(c,p=>j.forEach(p.Ki,v=>h.persistence.referenceDelegate.addReference(f,p.targetId,v)).next(()=>j.forEach(p.$i,v=>h.persistence.referenceDelegate.removeReference(f,p.targetId,v)))))}catch(f){if(!vl(f))throw f;H("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const v=h.ss.get(p),C=v.snapshotVersion,A=v.withLastLimboFreeSnapshotVersion(C);h.ss=h.ss.insert(p,A)}}}(r.localStore,s))}async function GL(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await pC(n.localStore,e);n.currentUser=e,function(s,o){s.Ba.forEach(a=>{a.forEach(u=>{u.reject(new $(V.CANCELLED,o))})}),s.Ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Tl(n,r.ls)}}function KL(t,e){const n=ee(t),r=n.Oa.get(e);if(r&&r.Da)return ae().add(r.key);{let i=ae();const s=n.Fa.get(e);if(!s)return i;for(const o of s){const a=n.va.get(o);i=i.unionWith(a.view.Ra)}return i}}function PC(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=RC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$L.bind(null,e),e.Ca.E_=PL.bind(null,e.eventManager),e.Ca.Ka=bL.bind(null,e.eventManager),e}function QL(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=WL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qL.bind(null,e),e}class n0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Dh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return tL(this.persistence,new Z2,e.initialUser,this.serializer)}createPersistence(e){return new Y2(Eg.Yr,this.serializer)}createSharedClientState(e){return new lL}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class YL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>e0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=GL.bind(null,this.syncEngine),await AL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kL}()}createDatastore(e){const n=Dh(e.databaseInfo.databaseId),r=function(s){return new dL(s)}(e.databaseInfo);return function(s,o,a,u){return new mL(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new _L(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>e0(this.syncEngine,n,0),function(){return Qw.D()?new Qw:new uL}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const f=new ML(i,s,o,a,u,c);return h&&(f.qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ee(i);H("RemoteStore","RemoteStore shutting down."),s.N_.add(5),await Il(s),s.B_.shutdown(),s.k_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Og{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Wa(this.observer.next,e)}error(e){this.observer.error?this.Wa(this.observer.error,e):ur("Uncaught Error in snapshot listener:",e.toString())}Ga(){this.muted=!0}Wa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=LS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{H("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(H("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ag(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function of(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await pC(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function r0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ZL(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Yw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Yw(e.remoteStore,i)),t._onlineComponents=e}function JL(t){return t.name==="FirebaseError"?t.code===V.FAILED_PRECONDITION||t.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function ZL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await of(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!JL(n))throw n;Ws("Error using user provided cache. Falling back to memory cache: "+n),await of(t,new n0)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await of(t,new n0);return t._offlineComponents}async function bC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await r0(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await r0(t,new YL))),t._onlineComponents}function eM(t){return bC(t).then(e=>e.syncEngine)}async function Nc(t){const e=await bC(t),n=e.eventManager;return n.onListen=VL.bind(null,e.syncEngine),n.onUnlisten=UL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=FL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=BL.bind(null,e.syncEngine),n}function tM(t,e,n={}){const r=new tr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new Og({next:p=>{o.enqueueAndForget(()=>kg(s,f));const v=p.docs.has(a);!v&&p.fromCache?c.reject(new $(V.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&p.fromCache&&u&&u.source==="server"?c.reject(new $(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new bg(Rh(a.path),h,{includeMetadataChanges:!0,oa:!0});return Ng(s,f)}(await Nc(t),t.asyncQueue,e,n,r)),r.promise}function nM(t,e,n={}){const r=new tr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new Og({next:p=>{o.enqueueAndForget(()=>kg(s,f)),p.fromCache&&u.source==="server"?c.reject(new $(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new bg(a,h,{includeMetadataChanges:!0,oa:!0});return Ng(s,f)}(await Nc(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function DC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function OC(t,e,n){if(!n)throw new $(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rM(t,e,n,r){if(e===!0&&r===!0)throw new $(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function s0(t){if(!G.isDocumentKey(t))throw new $(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function o0(t){if(G.isDocumentKey(t))throw new $(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Mh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function rn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mh(t);throw new $(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function iM(t,e){if(e<=0)throw new $(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=DC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new a0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new a0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wO;switch(r.type){case"firstParty":return new SO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=i0.get(n);r&&(H("ComponentProvider","Removing Datastore"),i0.delete(n),r.terminate())}(this),Promise.resolve()}}function sM(t,e,n,r={}){var i;const s=(t=rn(t,Vh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ws("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=yt.MOCK_USER;else{a=Qm(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new $(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new yt(c)}t._authCredentials=new EO(new OS(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mn(this.firestore,e,this._query)}}class At{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}}class qr extends Mn{constructor(e,n,r){super(e,n,Rh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new G(e))}withConverter(e){return new qr(this.firestore,e,this._path)}}function Ut(t,e,...n){if(t=me(t),OC("collection","path",e),t instanceof Vh){const r=Ee.fromString(e,...n);return o0(r),new qr(t,null,r)}{if(!(t instanceof At||t instanceof qr))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return o0(r),new qr(t.firestore,null,r)}}function On(t,e,...n){if(t=me(t),arguments.length===1&&(e=LS.newId()),OC("doc","path",e),t instanceof Vh){const r=Ee.fromString(e,...n);return s0(r),new At(t,null,new G(r))}{if(!(t instanceof At||t instanceof qr))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return s0(r),new At(t.firestore,t instanceof qr?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new gC(this,"async_queue_retry"),this.Tu=()=>{const n=sf();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.e_.zo()};const e=sf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Eu(),this.du(e)}enterRestrictedMode(e){if(!this.uu){this.uu=!0,this.Pu=e||!1;const n=sf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Tu)}}enqueue(e){if(this.Eu(),this.uu)return new Promise(()=>{});const n=new tr;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.au.push(e),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(e){if(!vl(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(e){const n=this._u.then(()=>(this.hu=!0,e().catch(r=>{this.lu=r,this.hu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ur("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.hu=!1,r))));return this._u=n,n}enqueueAfterDelay(e,n,r){this.Eu(),this.Iu.indexOf(e)>-1&&(n=0);const i=Rg.createAndSchedule(this,e,n,r,s=>this.Ru(s));return this.cu.push(i),i}Eu(){this.lu&&J()}verifyOperationInProgress(){}async Vu(){let e;do e=this._u,await e;while(e!==this._u)}mu(e){for(const n of this.cu)if(n.timerId===e)return!0;return!1}fu(e){return this.Vu().then(()=>{this.cu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.cu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Vu()})}gu(e){this.Iu.push(e)}Ru(e){const n=this.cu.indexOf(e);this.cu.splice(n,1)}}function l0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Zr extends Vh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new oM}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||LC(this),this._firestoreClient.terminate()}}function aM(t,e){const n=typeof t=="object"?t:vh(),r=typeof t=="string"?t:"(default)",i=fl(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Km("firestore");s&&sM(i,...s)}return i}function Fh(t){return t._firestoreClient||LC(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function LC(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new VO(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,DC(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new XL(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xs(ht.fromBase64String(e))}catch(n){throw new $(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xs(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lM=/^__.*__$/;class uM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new li(e,this.data,this.fieldMask,n,this.fieldTransforms):new wl(e,this.data,n,this.fieldTransforms)}}class MC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new li(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function VC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class Vg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get yu(){return this.settings.yu}wu(e){return new Vg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.wu({path:r,bu:!1});return i.Du(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.wu({path:r,bu:!1});return i.pu(),i}vu(e){return this.wu({path:void 0,bu:!0})}Fu(e){return kc(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.xu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Du(this.path.get(e))}Du(e){if(e.length===0)throw this.Fu("Document fields must not be empty");if(VC(this.yu)&&lM.test(e))throw this.Fu('Document fields cannot begin and end with "__"')}}class cM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Dh(e)}Ou(e,n,r,i=!1){return new Vg({yu:e,methodName:n,xu:r,path:ot.emptyPath(),bu:!1,Mu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Uh(t){const e=t._freezeSettings(),n=Dh(t._databaseId);return new cM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hM(t,e,n,r,i,s={}){const o=t.Ou(s.merge||s.mergeFields?2:0,e,n,i);Fg("Data must be an object, but it was:",o,r);const a=jC(r,o);let u,c;if(s.merge)u=new Ht(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const p=Op(e,f,n);if(!o.contains(p))throw new $(V.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);BC(h,p)||h.push(p)}u=new Ht(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new uM(new Dt(a),u,c)}class Bh extends Lg{_toFieldTransform(e){if(e.yu!==2)throw e.yu===1?e.Fu(`${this._methodName}() can only appear at the top level of your update data`):e.Fu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bh}}function dM(t,e,n,r){const i=t.Ou(1,e,n);Fg("Data must be an object, but it was:",i,r);const s=[],o=Dt.empty();Qi(r,(u,c)=>{const h=jg(e,u,n);c=me(c);const f=i.Cu(h);if(c instanceof Bh)s.push(h);else{const p=Sl(c,f);p!=null&&(s.push(h),o.set(h,p))}});const a=new Ht(s);return new MC(o,a,i.fieldTransforms)}function fM(t,e,n,r,i,s){const o=t.Ou(1,e,n),a=[Op(e,r,n)],u=[i];if(s.length%2!=0)throw new $(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(Op(e,s[p])),u.push(s[p+1]);const c=[],h=Dt.empty();for(let p=a.length-1;p>=0;--p)if(!BC(c,a[p])){const v=a[p];let C=u[p];C=me(C);const A=o.Cu(v);if(C instanceof Bh)c.push(v);else{const k=Sl(C,A);k!=null&&(c.push(v),h.set(v,k))}}const f=new Ht(c);return new MC(h,f,o.fieldTransforms)}function FC(t,e,n,r=!1){return Sl(n,t.Ou(r?4:3,e))}function Sl(t,e){if(UC(t=me(t)))return Fg("Unsupported field value:",e,t),jC(t,e);if(t instanceof Lg)return function(r,i){if(!VC(i.yu))throw i.Fu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Fu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.bu&&e.yu!==4)throw e.Fu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Sl(a,i.vu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return i2(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ye.fromDate(r);return{timestampValue:Rc(i.serializer,s)}}if(r instanceof Ye){const s=new Ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Rc(i.serializer,s)}}if(r instanceof Mg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xs)return{bytesValue:aC(i.serializer,r._byteString)};if(r instanceof At){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Fu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:vg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Fu(`Unsupported field value: ${Mh(r)}`)}(t,e)}function jC(t,e){const n={};return MS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qi(t,(r,i)=>{const s=Sl(i,e.Su(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function UC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ye||t instanceof Mg||t instanceof Xs||t instanceof At||t instanceof Lg)}function Fg(t,e,n){if(!UC(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Mh(n);throw r==="an object"?e.Fu(t+" a custom object"):e.Fu(t+" "+r)}}function Op(t,e,n){if((e=me(e))instanceof jh)return e._internalPath;if(typeof e=="string")return jg(t,e);throw kc("Field path arguments must be of type string or ",t,!1,void 0,n)}const pM=new RegExp("[~\\*/\\[\\]]");function jg(t,e,n){if(e.search(pM)>=0)throw kc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new jh(...e.split("."))._internalPath}catch{throw kc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function kc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(V.INVALID_ARGUMENT,a+t+u)}function BC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Bg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mM extends Ug{data(){return super.data()}}function Bg(t,e){return typeof e=="string"?jg(t,e):e instanceof jh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zg{}class zh extends zg{}function Pc(t,e,...n){let r=[];e instanceof zg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Wg).length,a=s.filter(u=>u instanceof $g).length;if(o>1||o>0&&a>0)throw new $(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class $g extends zh{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new $g(e,n,r)}_apply(e){const n=this._parse(e);return WC(e._query,n),new Mn(e.firestore,e.converter,xp(e._query,n))}_parse(e){const n=Uh(e.firestore);return function(s,o,a,u,c,h,f){let p;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new $(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){c0(f,h);const v=[];for(const C of f)v.push(u0(u,s,C));p={arrayValue:{values:v}}}else p=u0(u,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||c0(f,h),p=FC(a,o,f,h==="in"||h==="not-in");return We.create(c,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Wg extends zg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Wg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:En.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)WC(o,u),o=xp(o,u)}(e._query,n),new Mn(e.firestore,e.converter,xp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class qg extends zh{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new qg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new $(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Qa(s,o)}(e._query,this._field,this._direction);return new Mn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Yi(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function gM(t,e="asc"){const n=e,r=Bg("orderBy",t);return qg._create(r,n)}class Hg extends zh{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Hg(e,n,r)}_apply(e){return new Mn(e.firestore,e.converter,Sc(e._query,this._limit,this._limitType))}}function Lp(t){return iM("limit",t),Hg._create("limit",t,"F")}class Gg extends zh{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Gg(e,n,r)}_apply(e){const n=_M(e,this.type,this._docOrFields,this._inclusive);return new Mn(e.firestore,e.converter,function(i,s){return new Yi(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function $C(...t){return Gg._create("startAfter",t,!1)}function _M(t,e,n,r){if(n[0]=me(n[0]),n[0]instanceof Ug)return function(s,o,a,u,c){if(!u)throw new $(V.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const h=[];for(const f of Ps(s))if(f.field.isKeyField())h.push(Tc(o,u.key));else{const p=u.data.field(f.field);if(xh(p))throw new $(V.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(p===null){const v=f.field.canonicalString();throw new $(V.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${v}' (used as the orderBy) does not exist.`)}h.push(p)}return new Ks(h,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Uh(t.firestore);return function(o,a,u,c,h,f){const p=o.explicitOrderBy;if(h.length>p.length)throw new $(V.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const v=[];for(let C=0;C<h.length;C++){const A=h[C];if(p[C].field.isKeyField()){if(typeof A!="string")throw new $(V.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof A}`);if(!mg(o)&&A.indexOf("/")!==-1)throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${A}' contains a slash.`);const k=o.path.child(Ee.fromString(A));if(!G.isDocumentKey(k))throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${k}' is not because it contains an odd number of segments.`);const S=new G(k);v.push(Tc(a,S))}else{const k=FC(u,c,A);v.push(k)}}return new Ks(v,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function u0(t,e,n){if(typeof(n=me(n))=="string"){if(n==="")throw new $(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!mg(e)&&n.indexOf("/")!==-1)throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ee.fromString(n));if(!G.isDocumentKey(r))throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Tc(t,new G(r))}if(n instanceof At)return Tc(t,n._key);throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mh(n)}.`)}function c0(t,e){if(!Array.isArray(t)||t.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function WC(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class yM{convertValue(e,n="none"){switch(ji(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Qi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Mg(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=hg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ha(e));default:return null}}convertTimestamp(e){const n=Xr(e);return new Ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);ye(fC(r));const i=new Ga(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||ur(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vM(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qC extends Ug{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ju(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Bg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ju extends qC{data(e={}){return super.data(e)}}class HC{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new na(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ju(this._firestore,this._userDataWriter,r.key,r,new na(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new ju(i._firestore,i._userDataWriter,a.doc.key,a.doc,new na(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new ju(i._firestore,i._userDataWriter,a.doc.key,a.doc,new na(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:wM(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EM(t){t=rn(t,At);const e=rn(t.firestore,Zr);return tM(Fh(e),t._key).then(n=>GC(e,t,n))}class Kg extends yM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,n)}}function Ui(t){t=rn(t,Mn);const e=rn(t.firestore,Zr),n=Fh(e),r=new Kg(e);return zC(t._query),nM(n,t._query).then(i=>new HC(e,r,t,i))}function $h(t,e,n,...r){t=rn(t,At);const i=rn(t.firestore,Zr),s=Uh(i);let o;return o=typeof(e=me(e))=="string"||e instanceof jh?fM(s,"updateDoc",t._key,e,n,r):dM(s,"updateDoc",t._key,e),Qg(i,[o.toMutation(t._key,_n.exists(!0))])}function Js(t){return Qg(rn(t.firestore,Zr),[new gg(t._key,_n.none())])}function po(t,e){const n=rn(t.firestore,Zr),r=On(t),i=vM(t.converter,e);return Qg(n,[hM(Uh(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,_n.exists(!1))]).then(()=>r)}function Mp(t,...e){var n,r,i;t=me(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||l0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(l0(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,h;if(t instanceof At)c=rn(t.firestore,Zr),h=Rh(t._key.path),u={next:f=>{e[o]&&e[o](GC(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=rn(t,Mn);c=rn(f.firestore,Zr),h=f._query;const p=new Kg(c);u={next:v=>{e[o]&&e[o](new HC(c,p,f,v))},error:e[o+1],complete:e[o+2]},zC(t._query)}return function(p,v,C,A){const k=new Og(A),S=new bg(v,k,C);return p.asyncQueue.enqueueAndForget(async()=>Ng(await Nc(p),S)),()=>{k.Ga(),p.asyncQueue.enqueueAndForget(async()=>kg(await Nc(p),S))}}(Fh(c),h,a,u)}function Qg(t,e){return function(r,i){const s=new tr;return r.asyncQueue.enqueueAndForget(async()=>zL(await eM(r),i,s)),s.promise}(Fh(t),e)}function GC(t,e,n){const r=n.docs.get(e._key),i=new Kg(t);return new qC(t,i,e._key,r,new na(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){co=i})(si),Qr(new ar("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Zr(new IO(r.getProvider("auth-internal")),new xO(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new $(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ga(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),nn(Rw,"4.6.5",e),nn(Rw,"4.6.5","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC="firebasestorage.googleapis.com",QC="storageBucket",IM=2*60*1e3,TM=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends Ln{constructor(e,n,r=0){super(af(e),`Firebase Storage: ${n} (${af(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ve.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return af(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Me;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Me||(Me={}));function af(t){return"storage/"+t}function Yg(){const t="An unknown error occurred, please check the error payload for server response.";return new Ve(Me.UNKNOWN,t)}function SM(t){return new Ve(Me.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function CM(t){return new Ve(Me.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function xM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ve(Me.UNAUTHENTICATED,t)}function RM(){return new Ve(Me.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function AM(t){return new Ve(Me.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function NM(){return new Ve(Me.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function kM(){return new Ve(Me.CANCELED,"User canceled the upload/download.")}function PM(t){return new Ve(Me.INVALID_URL,"Invalid URL '"+t+"'.")}function bM(t){return new Ve(Me.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function DM(){return new Ve(Me.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+QC+"' property when initializing the app?")}function OM(){return new Ve(Me.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function LM(){return new Ve(Me.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function MM(t){return new Ve(Me.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Vp(t){return new Ve(Me.INVALID_ARGUMENT,t)}function YC(){return new Ve(Me.APP_DELETED,"The Firebase app was deleted.")}function VM(t){return new Ve(Me.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ga(t,e){return new Ve(Me.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Bo(t){throw new Ve(Me.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Gt.makeFromUrl(e,n)}catch{return new Gt(e,"")}if(r.path==="")return r;throw bM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",v=new RegExp(`^https?://${f}/${h}/b/${i}/o${p}`,"i"),C={bucket:1,path:3},A=n===KC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",S=new RegExp(`^https?://${A}/${i}/${k}`,"i"),R=[{regex:a,indices:u,postModify:s},{regex:v,indices:C,postModify:c},{regex:S,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<R.length;N++){const M=R[N],F=M.regex.exec(e);if(F){const E=F[M.indices.bucket];let _=F[M.indices.path];_||(_=""),r=new Gt(E,_),M.postModify(r);break}}if(r==null)throw PM(e);return r}}class FM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jM(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function h(...k){c||(c=!0,e.apply(null,k))}function f(k){i=setTimeout(()=>{i=null,t(v,u())},k)}function p(){s&&clearTimeout(s)}function v(k,...S){if(c){p();return}if(k){p(),h.call(null,k,...S);return}if(u()||o){p(),h.call(null,k,...S);return}r<64&&(r*=2);let R;a===1?(a=2,R=0):R=(r+Math.random())*1e3,f(R)}let C=!1;function A(k){C||(C=!0,p(),!c&&(i!==null?(k||(a=2),clearTimeout(i),f(0)):k||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,A(!0)},n),A}function UM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BM(t){return t!==void 0}function zM(t){return typeof t=="object"&&!Array.isArray(t)}function Xg(t){return typeof t=="string"||t instanceof String}function h0(t){return Jg()&&t instanceof Blob}function Jg(){return typeof Blob<"u"}function d0(t,e,n,r){if(r<e)throw Vp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Vp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function XC(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ai;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ai||(Ai={}));/**
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
 */function $M(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(e,n,r,i,s,o,a,u,c,h,f,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,C)=>{this.resolve_=v,this.reject_=C,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new mu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Ai.NO_ERROR,u=s.getStatus();if(!a||$M(u,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===Ai.ABORT;r(!1,new mu(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new mu(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());BM(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=Yg();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?YC():kM();o(u)}else{const u=NM();o(u)}};this.canceled_?n(!1,new mu(!1,null,!0)):this.backoffId_=jM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&UM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class mu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function qM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function HM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function GM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function KM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function QM(t,e,n,r,i,s,o=!0){const a=XC(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return GM(c,e),qM(c,n),HM(c,s),KM(c,r),new WM(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function XM(...t){const e=YM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Jg())return new Blob(t);throw new Ve(Me.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function JM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function ZM(t){if(typeof atob>"u")throw MM("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class lf{constructor(e,n){this.data=e,this.contentType=n||null}}function eV(t,e){switch(t){case xn.RAW:return new lf(JC(e));case xn.BASE64:case xn.BASE64URL:return new lf(ZC(t,e));case xn.DATA_URL:return new lf(nV(e),rV(e))}throw Yg()}function JC(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function tV(t){let e;try{e=decodeURIComponent(t)}catch{throw ga(xn.DATA_URL,"Malformed data URL.")}return JC(e)}function ZC(t,e){switch(t){case xn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ga(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case xn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ga(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ZM(e)}catch(i){throw i.message.includes("polyfill")?i:ga(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class ex{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ga(xn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=iV(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function nV(t){const e=new ex(t);return e.base64?ZC(xn.BASE64,e.rest):tV(e.rest)}function rV(t){return new ex(t).contentType}function iV(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n){let r=0,i="";h0(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(h0(this.data_)){const r=this.data_,i=JM(r,e,n);return i===null?null:new Ar(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Ar(r,!0)}}static getBlob(...e){if(Jg()){const n=e.map(r=>r instanceof Ar?r.data_:r);return new Ar(XM.apply(null,n))}else{const n=e.map(o=>Xg(o)?eV(xn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Ar(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tx(t){let e;try{e=JSON.parse(t)}catch{return null}return zM(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function oV(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function nx(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aV(t,e){return e}class Ct{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||aV}}let gu=null;function lV(t){return!Xg(t)||t.length<2?t:nx(t)}function rx(){if(gu)return gu;const t=[];t.push(new Ct("bucket")),t.push(new Ct("generation")),t.push(new Ct("metageneration")),t.push(new Ct("name","fullPath",!0));function e(s,o){return lV(o)}const n=new Ct("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ct("size");return i.xform=r,t.push(i),t.push(new Ct("timeCreated")),t.push(new Ct("updated")),t.push(new Ct("md5Hash",null,!0)),t.push(new Ct("cacheControl",null,!0)),t.push(new Ct("contentDisposition",null,!0)),t.push(new Ct("contentEncoding",null,!0)),t.push(new Ct("contentLanguage",null,!0)),t.push(new Ct("contentType",null,!0)),t.push(new Ct("metadata","customMetadata",!0)),gu=t,gu}function uV(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Gt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function cV(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return uV(r,t),r}function ix(t,e,n){const r=tx(e);return r===null?null:cV(t,r,n)}function hV(t,e,n,r){const i=tx(e);if(i===null||!Xg(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const h=t.bucket,f=t.fullPath,p="/b/"+o(h)+"/o/"+o(f),v=Zg(p,n,r),C=XC({alt:"media",token:c});return v+C})[0]}function dV(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class sx{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ox(t){if(!t)throw Yg()}function fV(t,e){function n(r,i){const s=ix(t,i,e);return ox(s!==null),s}return n}function pV(t,e){function n(r,i){const s=ix(t,i,e);return ox(s!==null),hV(s,i,t.host,t._protocol)}return n}function ax(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=RM():i=xM():n.getStatus()===402?i=CM(t.bucket):n.getStatus()===403?i=AM(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function mV(t){const e=ax(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=SM(t.path)),s.serverResponse=i.serverResponse,s}return n}function gV(t,e,n){const r=e.fullServerUrl(),i=Zg(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new sx(i,s,pV(t,n),o);return a.errorHandler=mV(e),a}function _V(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function yV(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=_V(null,e)),r}function vV(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let R="";for(let N=0;N<2;N++)R=R+Math.random().toString().slice(2);return R}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=yV(e,r,i),h=dV(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,p=`\r
--`+u+"--",v=Ar.getBlob(f,r,p);if(v===null)throw OM();const C={name:c.fullPath},A=Zg(s,t.host,t._protocol),k="POST",S=t.maxUploadRetryTime,I=new sx(A,k,fV(t,n),S);return I.urlParams=C,I.headers=o,I.body=v.uploadData(),I.errorHandler=ax(e),I}class wV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ai.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ai.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ai.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Bo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Bo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Bo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Bo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Bo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class EV extends wV{initXhr(){this.xhr_.responseType="text"}}function lx(){return new EV}/**
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
 */class Bi{constructor(e,n){this._service=e,n instanceof Gt?this._location=n:this._location=Gt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Bi(e,n)}get root(){const e=new Gt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return nx(this._location.path)}get storage(){return this._service}get parent(){const e=sV(this._location.path);if(e===null)return null;const n=new Gt(this._location.bucket,e);return new Bi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw VM(e)}}function IV(t,e,n){t._throwIfRoot("uploadBytes");const r=vV(t.storage,t._location,rx(),new Ar(e,!0),n);return t.storage.makeRequestWithTokens(r,lx).then(i=>({metadata:i,ref:t}))}function TV(t){t._throwIfRoot("getDownloadURL");const e=gV(t.storage,t._location,rx());return t.storage.makeRequestWithTokens(e,lx).then(n=>{if(n===null)throw LM();return n})}function SV(t,e){const n=oV(t._location.path,e),r=new Gt(t._location.bucket,n);return new Bi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CV(t){return/^[A-Za-z]+:\/\//.test(t)}function xV(t,e){return new Bi(t,e)}function ux(t,e){if(t instanceof e_){const n=t;if(n._bucket==null)throw DM();const r=new Bi(n,n._bucket);return e!=null?ux(r,e):r}else return e!==void 0?SV(t,e):t}function RV(t,e){if(e&&CV(e)){if(t instanceof e_)return xV(t,e);throw Vp("To use ref(service, url), the first argument must be a Storage instance.")}else return ux(t,e)}function f0(t,e){const n=e==null?void 0:e[QC];return n==null?null:Gt.makeFromBucketSpec(n,t)}function AV(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Qm(i,t.app.options.projectId))}class e_{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=KC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=IM,this._maxUploadRetryTime=TM,this._requests=new Set,i!=null?this._bucket=Gt.makeFromBucketSpec(i,this._host):this._bucket=f0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Gt.makeFromBucketSpec(this._url,e):this._bucket=f0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){d0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){d0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Bi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new FM(YC());{const o=QM(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const p0="@firebase/storage",m0="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx="storage";function Ja(t,e,n){return t=me(t),IV(t,e,n)}function Za(t){return t=me(t),TV(t)}function el(t,e){return t=me(t),RV(t,e)}function hx(t=vh(),e){t=me(t);const r=fl(t,cx).getImmediate({identifier:e}),i=Km("storage");return i&&NV(r,...i),r}function NV(t,e,n,r={}){AV(t,e,n,r)}function kV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new e_(n,r,i,e,si)}function PV(){Qr(new ar(cx,kV,"PUBLIC").setMultipleInstances(!0)),nn(p0,m0,""),nn(p0,m0,"esm2017")}PV();var g0={};const _0="@firebase/database",y0="1.0.7";/**
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
 */let dx="";function bV(t){dx=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DV{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),tt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ba(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OV{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return pr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new DV(e)}}catch{}return new OV},Ii=fx("localStorage"),LV=fx("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=new yh("@firebase/database"),MV=function(){let t=1;return function(){return t++}}(),px=function(t){const e=Jk(t),n=new Kk;n.update(e);const r=n.digest();return Gm.encodeByteArray(r)},Cl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Cl.apply(null,r):typeof r=="object"?e+=tt(r):e+=r,e+=" "}return e};let _a=null,v0=!0;const VV=function(t,e){B(!e,"Can't turn on custom loggers persistently."),Ds.logLevel=oe.VERBOSE,_a=Ds.log.bind(Ds)},Et=function(...t){if(v0===!0&&(v0=!1,_a===null&&LV.get("logging_enabled")===!0&&VV()),_a){const e=Cl.apply(null,t);_a(e)}},xl=function(t){return function(...e){Et(t,...e)}},Fp=function(...t){const e="FIREBASE INTERNAL ERROR: "+Cl(...t);Ds.error(e)},hr=function(...t){const e=`FIREBASE FATAL ERROR: ${Cl(...t)}`;throw Ds.error(e),new Error(e)},Bt=function(...t){const e="FIREBASE WARNING: "+Cl(...t);Ds.warn(e)},FV=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Bt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},mx=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},jV=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Zs="[MIN_NAME]",zi="[MAX_NAME]",mo=function(t,e){if(t===e)return 0;if(t===Zs||e===zi)return-1;if(e===Zs||t===zi)return 1;{const n=w0(t),r=w0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},UV=function(t,e){return t===e?0:t<e?-1:1},zo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+tt(e))},t_=function(t){if(typeof t!="object"||t===null)return tt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=tt(e[r]),n+=":",n+=t_(t[e[r]]);return n+="}",n},gx=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function zt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const _x=function(t){B(!mx(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const h=c.join("");let f="";for(u=0;u<64;u+=8){let p=parseInt(h.substr(u,8),2).toString(16);p.length===1&&(p="0"+p),f=f+p}return f.toLowerCase()},BV=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},zV=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function $V(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const WV=new RegExp("^-?(0*)\\d{1,10}$"),qV=-2147483648,HV=2147483647,w0=function(t){if(WV.test(t)){const e=Number(t);if(e>=qV&&e<=HV)return e}return null},go=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Bt("Exception was thrown by user callback.",n),e},Math.floor(0))}},GV=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ya=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class KV{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Bt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QV{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Et("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Bt(e)}}class Uu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Uu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="5",yx="v",vx="s",wx="r",Ex="f",Ix=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Tx="ls",Sx="p",jp="ac",Cx="websocket",xx="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ii.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ii.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function YV(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ax(t,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let r;if(e===Cx)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===xx)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);YV(t)&&(n.ns=t.namespace);const i=[];return zt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XV{constructor(){this.counters_={}}incrementCounter(e,n=1){pr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Pk(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf={},cf={};function r_(t){const e=t.toString();return uf[e]||(uf[e]=new XV),uf[e]}function JV(t,e){const n=t.toString();return cf[n]||(cf[n]=e()),cf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZV{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&go(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0="start",eF="close",tF="pLPCommand",nF="pRTLPCB",Nx="id",kx="pw",Px="ser",rF="cb",iF="seg",sF="ts",oF="d",aF="dframe",bx=1870,Dx=30,lF=bx-Dx,uF=25e3,cF=3e4;class Es{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=xl(e),this.stats_=r_(n),this.urlFn=u=>(this.appCheckToken&&(u[jp]=this.appCheckToken),Ax(n,xx,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ZV(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(cF)),jV(()=>{if(this.isClosed_)return;this.scriptTagHolder=new i_((...s)=>{const[o,a,u,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===E0)this.id=a,this.password=u;else if(o===eF)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[E0]="t",r[Px]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[rF]=this.scriptTagHolder.uniqueCallbackIdentifier),r[yx]=n_,this.transportSessionId&&(r[vx]=this.transportSessionId),this.lastSessionId&&(r[Tx]=this.lastSessionId),this.applicationId&&(r[Sx]=this.applicationId),this.appCheckToken&&(r[jp]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ix.test(location.hostname)&&(r[wx]=Ex);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Es.forceAllow_=!0}static forceDisallow(){Es.forceDisallow_=!0}static isAvailable(){return Es.forceAllow_?!0:!Es.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!BV()&&!zV()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=LT(n),i=gx(r,lF);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[aF]="t",r[Nx]=e,r[kx]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=tt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class i_{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=MV(),window[tF+this.uniqueCallbackIdentifier]=e,window[nF+this.uniqueCallbackIdentifier]=n,this.myIFrame=i_.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Et("frame writing exception"),a.stack&&Et(a.stack),Et(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Et("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Nx]=this.myID,e[kx]=this.myPW,e[Px]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Dx+r.length<=bx;){const o=this.pendingSegs.shift();r=r+"&"+iF+i+"="+o.seg+"&"+sF+i+"="+o.ts+"&"+oF+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(uF)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Et("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hF=16384,dF=45e3;let bc=null;typeof MozWebSocket<"u"?bc=MozWebSocket:typeof WebSocket<"u"&&(bc=WebSocket);class dn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=xl(this.connId),this.stats_=r_(n),this.connURL=dn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[yx]=n_,typeof location<"u"&&location.hostname&&Ix.test(location.hostname)&&(o[wx]=Ex),n&&(o[vx]=n),r&&(o[Tx]=r),i&&(o[jp]=i),s&&(o[Sx]=s),Ax(e,Cx,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ii.set("previous_websocket_failure",!0);try{let r;BT(),this.mySock=new bc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){dn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&bc!==null&&!dn.forceDisallow_}static previouslyFailed(){return Ii.isInMemoryStorage||Ii.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ii.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ba(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=gx(n,hF);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(dF))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dn.responsesRequiredToBeHealthy=2;dn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Es,dn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=dn&&dn.isAvailable();let r=n&&!dn.previouslyFailed();if(e.webSocketOnly&&(n||Bt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[dn];else{const i=this.transports_=[];for(const s of tl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);tl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}tl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fF=6e4,pF=5e3,mF=10*1024,gF=100*1024,hf="t",I0="d",_F="s",T0="r",yF="e",S0="o",C0="a",x0="n",R0="p",vF="h";class wF{constructor(e,n,r,i,s,o,a,u,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=xl("c:"+this.id+":"),this.transportManager_=new tl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ya(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>gF?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>mF?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(hf in e){const n=e[hf];n===C0?this.upgradeIfSecondaryHealthy_():n===T0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===S0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=zo("t",e),r=zo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:R0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:C0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:x0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=zo("t",e),r=zo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=zo(hf,e);if(I0 in e){const r=e[I0];if(n===vF){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===x0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===_F?this.onConnectionShutdown_(r):n===T0?this.onReset_(r):n===yF?Fp("Server Error: "+r):n===S0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),n_!==r&&Bt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ya(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(fF))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ya(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(pF))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:R0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ii.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc extends Lx{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ym()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Dc}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=32,N0=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function de(){return new ve("")}function ne(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ei(t){return t.pieces_.length-t.pieceNum_}function we(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ve(t.pieces_,e)}function Mx(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function EF(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Vx(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Fx(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ve(e,0)}function Ge(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ve)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ve(n,0)}function ie(t){return t.pieceNum_>=t.pieces_.length}function Lt(t,e){const n=ne(t),r=ne(e);if(n===null)return e;if(n===r)return Lt(we(t),we(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function s_(t,e){if(ei(t)!==ei(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function fn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(ei(t)>ei(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class IF{constructor(e,n){this.errorPrefix_=n,this.parts_=Vx(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=_h(this.parts_[r]);jx(this)}}function TF(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=_h(e),jx(t)}function SF(t){const e=t.parts_.pop();t.byteLength_-=_h(e),t.parts_.length>0&&(t.byteLength_-=1)}function jx(t){if(t.byteLength_>N0)throw new Error(t.errorPrefix_+"has a key path longer than "+N0+" bytes ("+t.byteLength_+").");if(t.parts_.length>A0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+A0+") or object contains a cycle "+_i(t))}function _i(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_ extends Lx{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new o_}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=1e3,CF=60*5*1e3,k0=30*1e3,xF=1.3,RF=3e4,AF="server_kill",P0=3;class nr extends Ox{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=nr.nextPersistentConnectionId_++,this.log_=xl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=$o,this.maxReconnectDelay_=CF,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!BT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");o_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Dc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(tt(s)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new gh,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,c=a.s;nr.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&pr(e,"w")){const r=$s(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Bt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Gk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=k0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Hk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+tt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Fp("Unrecognized action received from server: "+tt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=$o,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=$o,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>RF&&(this.reconnectDelay_=$o),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*xF)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+nr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(f){B(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Et("getToken() completed but was canceled"):(Et("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=p&&p.token,a=new wF(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{Bt(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(AF)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Bt(f),u())}}}interrupt(e){Et("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Et("Resuming connection for reason: "+e),delete this.interruptReasons_[e],cp(this.interruptReasons_)&&(this.reconnectDelay_=$o,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>t_(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ve(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Et("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=P0&&(this.reconnectDelay_=k0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Et("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=P0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+dx.replace(/\./g,"-")]=1,Ym()?e["framework.cordova"]=1:UT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Dc.getInstance().currentlyOnline();return cp(this.interruptReasons_)&&e}}nr.nextPersistentConnectionId_=0;nr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new re(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new re(Zs,e),i=new re(Zs,n);return this.compare(r,i)!==0}minPost(){return re.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _u;class Ux extends Wh{static get __EMPTY_NODE(){return _u}static set __EMPTY_NODE(e){_u=e}compare(e,n){return mo(e.name,n.name)}isDefinedOn(e){throw ao("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return re.MIN}maxPost(){return new re(zi,_u)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new re(e,_u)}toString(){return".key"}}const Os=new Ux;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class et{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??et.RED,this.left=i??Mt.EMPTY_NODE,this.right=s??Mt.EMPTY_NODE}copy(e,n,r,i,s){return new et(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Mt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Mt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}et.RED=!0;et.BLACK=!1;class NF{copy(e,n,r,i,s){return this}insert(e,n,r){return new et(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Mt{constructor(e,n=Mt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Mt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,et.BLACK,null,null))}remove(e){return new Mt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,et.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new yu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new yu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new yu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new yu(this.root_,null,this.comparator_,!0,e)}}Mt.EMPTY_NODE=new NF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kF(t,e){return mo(t.name,e.name)}function a_(t,e){return mo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Up;function PF(t){Up=t}const Bx=function(t){return typeof t=="number"?"number:"+_x(t):"string:"+t},zx=function(t){if(t.isLeafNode()){const e=t.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&pr(e,".sv"),"Priority must be a string or number.")}else B(t===Up||t.isEmpty(),"priority of unexpected type.");B(t===Up||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let b0;class Xe{constructor(e,n=Xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),zx(this.priorityNode_)}static set __childrenNodeConstructor(e){b0=e}static get __childrenNodeConstructor(){return b0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ie(e)?this:ne(e)===".priority"?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ne(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(B(r!==".priority"||ei(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(we(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Bx(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=_x(this.value_):e+=this.value_,this.lazyHash_=px(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Xe.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Xe.VALUE_TYPE_ORDER.indexOf(n),s=Xe.VALUE_TYPE_ORDER.indexOf(r);return B(i>=0,"Unknown leaf type: "+n),B(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $x,Wx;function bF(t){$x=t}function DF(t){Wx=t}class OF extends Wh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?mo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return re.MIN}maxPost(){return new re(zi,new Xe("[PRIORITY-POST]",Wx))}makePost(e,n){const r=$x(e);return new re(n,new Xe("[PRIORITY-POST]",r))}toString(){return".priority"}}const Le=new OF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LF=Math.log(2);class MF{constructor(e){const n=s=>parseInt(Math.log(s)/LF,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Oc=function(t,e,n,r){t.sort(e);const i=function(u,c){const h=c-u;let f,p;if(h===0)return null;if(h===1)return f=t[u],p=n?n(f):f,new et(p,f.node,et.BLACK,null,null);{const v=parseInt(h/2,10)+u,C=i(u,v),A=i(v+1,c);return f=t[v],p=n?n(f):f,new et(p,f.node,et.BLACK,C,A)}},s=function(u){let c=null,h=null,f=t.length;const p=function(C,A){const k=f-C,S=f;f-=C;const I=i(k+1,S),R=t[k],N=n?n(R):R;v(new et(N,R.node,A,null,I))},v=function(C){c?(c.left=C,c=C):(h=C,c=C)};for(let C=0;C<u.count;++C){const A=u.nextBitIsOne(),k=Math.pow(2,u.count-(C+1));A?p(k,et.BLACK):(p(k,et.BLACK),p(k,et.RED))}return h},o=new MF(t.length),a=s(o);return new Mt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let df;const is={};class Jn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return B(is&&Le,"ChildrenNode.ts has not been loaded"),df=df||new Jn({".priority":is},{".priority":Le}),df}get(e){const n=$s(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Mt?n:null}hasIndex(e){return pr(this.indexSet_,e.toString())}addIndex(e,n){B(e!==Os,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(re.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Oc(r,e.getCompare()):a=is;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const h=Object.assign({},this.indexes_);return h[u]=a,new Jn(h,c)}addToIndexes(e,n){const r=pc(this.indexes_,(i,s)=>{const o=$s(this.indexSet_,s);if(B(o,"Missing index implementation for "+s),i===is)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(re.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),Oc(a,o.getCompare())}else return is;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new re(e.name,a))),u.insert(e,e.node)}});return new Jn(r,this.indexSet_)}removeFromIndexes(e,n){const r=pc(this.indexes_,i=>{if(i===is)return i;{const s=n.get(e.name);return s?i.remove(new re(e.name,s)):i}});return new Jn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wo;class Y{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&zx(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Wo||(Wo=new Y(new Mt(a_),null,Jn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Wo}updatePriority(e){return this.children_.isEmpty()?this:new Y(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Wo:n}}getChild(e){const n=ne(e);return n===null?this:this.getImmediateChild(n).getChild(we(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new re(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Wo:this.priorityNode_;return new Y(i,o,s)}}updateChild(e,n){const r=ne(e);if(r===null)return n;{B(ne(e)!==".priority"||ei(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(we(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Le,(o,a)=>{n[o]=a.val(e),r++,s&&Y.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Bx(this.getPriority().val())+":"),this.forEachChild(Le,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":px(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new re(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new re(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new re(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,re.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,re.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Rl?-1:0}withIndex(e){if(e===Os||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Y(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Os||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Le),i=n.getIterator(Le);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Os?null:this.indexMap_.get(e.toString())}}Y.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class VF extends Y{constructor(){super(new Mt(a_),Y.EMPTY_NODE,Jn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Y.EMPTY_NODE}isEmpty(){return!1}}const Rl=new VF;Object.defineProperties(re,{MIN:{value:new re(Zs,Y.EMPTY_NODE)},MAX:{value:new re(zi,Rl)}});Ux.__EMPTY_NODE=Y.EMPTY_NODE;Xe.__childrenNodeConstructor=Y;PF(Rl);DF(Rl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FF=!0;function st(t,e=null){if(t===null)return Y.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Xe(n,st(e))}if(!(t instanceof Array)&&FF){const n=[];let r=!1;if(zt(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=st(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new re(o,u)))}}),n.length===0)return Y.EMPTY_NODE;const s=Oc(n,kF,o=>o.name,a_);if(r){const o=Oc(n,Le.getCompare());return new Y(s,st(e),new Jn({".priority":o},{".priority":Le}))}else return new Y(s,st(e),Jn.Default)}else{let n=Y.EMPTY_NODE;return zt(t,(r,i)=>{if(pr(t,r)&&r.substring(0,1)!=="."){const s=st(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(st(e))}}bF(st);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jF extends Wh{constructor(e){super(),this.indexPath_=e,B(!ie(e)&&ne(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?mo(e.name,n.name):s}makePost(e,n){const r=st(e),i=Y.EMPTY_NODE.updateChild(this.indexPath_,r);return new re(n,i)}maxPost(){const e=Y.EMPTY_NODE.updateChild(this.indexPath_,Rl);return new re(zi,e)}toString(){return Vx(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UF extends Wh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?mo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return re.MIN}maxPost(){return re.MAX}makePost(e,n){const r=st(e);return new re(n,r)}toString(){return".value"}}const BF=new UF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qx(t){return{type:"value",snapshotNode:t}}function eo(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function nl(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function rl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function zF(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){B(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(nl(n,a)):B(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(eo(n,r)):o.trackChildChange(rl(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Le,(i,s)=>{n.hasChild(i)||r.trackChildChange(nl(i,s))}),n.isLeafNode()||n.forEachChild(Le,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(rl(i,s,o))}else r.trackChildChange(eo(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Y.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e){this.indexedFilter_=new l_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=il.getStartPost_(e),this.endPost_=il.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new re(n,r))||(r=Y.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=Y.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(Y.EMPTY_NODE);const s=this;return n.forEachChild(Le,(o,a)=>{s.matches(new re(o,a))||(i=i.updateImmediateChild(o,Y.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $F{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new il(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new re(n,r))||(r=Y.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=Y.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=Y.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(Y.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,Y.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(p,v)=>f(v,p)}else o=this.index_.getCompare();const a=e;B(a.numChildren()===this.limit_,"");const u=new re(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(u);if(a.hasChild(n)){const f=a.getImmediateChild(n);let p=i.getChildAfterChild(this.index_,c,this.reverse_);for(;p!=null&&(p.name===n||a.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);const v=p==null?1:o(p,u);if(h&&!r.isEmpty()&&v>=0)return s!=null&&s.trackChildChange(rl(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(nl(n,f));const A=a.updateImmediateChild(n,Y.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(s!=null&&s.trackChildChange(eo(p.name,p.node)),A.updateImmediateChild(p.name,p.node)):A}}else return r.isEmpty()?e:h&&o(c,u)>=0?(s!=null&&(s.trackChildChange(nl(c.name,c.node)),s.trackChildChange(eo(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,Y.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Zs}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:zi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Le}copy(){const e=new u_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function WF(t){return t.loadsAllData()?new l_(t.getIndex()):t.hasLimit()?new $F(t):new il(t)}function D0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Le?n="$priority":t.index_===BF?n="$value":t.index_===Os?n="$key":(B(t.index_ instanceof jF,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=tt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=tt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+tt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=tt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+tt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function O0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Le&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc extends Ox{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=xl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Lc.getListenId_(e,r),a={};this.listens_[o]=a;const u=D0(e._queryParams);this.restRequest_(s+".json",u,(c,h)=>{let f=h;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),$s(this.listens_,o)===a){let p;c?c===401?p="permission_denied":p="rest_error:"+c:p="ok",i(p,null)}})}unlisten(e,n){const r=Lc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=D0(e._queryParams),r=e._path.toString(),i=new gh;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+lo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=Ba(a.responseText)}catch{Bt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&Bt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qF{constructor(){this.rootNode_=Y.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(){return{value:null,children:new Map}}function Hx(t,e,n){if(ie(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ne(e);t.children.has(r)||t.children.set(r,Mc());const i=t.children.get(r);e=we(e),Hx(i,e,n)}}function Bp(t,e,n){t.value!==null?n(e,t.value):HF(t,(r,i)=>{const s=new ve(e.toString()+"/"+r);Bp(i,s,n)})}function HF(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GF{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&zt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0=10*1e3,KF=30*1e3,QF=5*60*1e3;class YF{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new GF(e);const r=L0+(KF-L0)*Math.random();ya(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;zt(e,(i,s)=>{s>0&&pr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ya(this.reportStats_.bind(this),Math.floor(Math.random()*2*QF))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pn||(pn={}));function Gx(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function c_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function h_(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=pn.ACK_USER_WRITE,this.source=Gx()}operationForChild(e){if(ie(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new Vc(de(),n,this.revert)}}else return B(ne(this.path)===e,"operationForChild called for unrelated child."),new Vc(we(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n){this.source=e,this.path=n,this.type=pn.LISTEN_COMPLETE}operationForChild(e){return ie(this.path)?new sl(this.source,de()):new sl(this.source,we(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=pn.OVERWRITE}operationForChild(e){return ie(this.path)?new $i(this.source,de(),this.snap.getImmediateChild(e)):new $i(this.source,we(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=pn.MERGE}operationForChild(e){if(ie(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new $i(this.source,de(),n.value):new ol(this.source,de(),n)}else return B(ne(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ol(this.source,we(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ie(e))return this.isFullyInitialized()&&!this.filtered_;const n=ne(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XF{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function JF(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(zF(o.childName,o.snapshotNode))}),qo(t,i,"child_removed",e,r,n),qo(t,i,"child_added",e,r,n),qo(t,i,"child_moved",s,r,n),qo(t,i,"child_changed",e,r,n),qo(t,i,"value",e,r,n),i}function qo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>e4(t,a,u)),o.forEach(a=>{const u=ZF(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function ZF(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function e4(t,e,n){if(e.childName==null||n.childName==null)throw ao("Should only compare child_ events.");const r=new re(e.childName,e.snapshotNode),i=new re(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(t,e){return{eventCache:t,serverCache:e}}function va(t,e,n,r){return qh(new Wi(e,n,r),t.serverCache)}function Kx(t,e,n,r){return qh(t.eventCache,new Wi(e,n,r))}function zp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function qi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ff;const t4=()=>(ff||(ff=new Mt(UV)),ff);class Ce{constructor(e,n=t4()){this.value=e,this.children=n}static fromObject(e){let n=new Ce(null);return zt(e,(r,i)=>{n=n.set(new ve(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:de(),value:this.value};if(ie(e))return null;{const r=ne(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(we(e),n);return s!=null?{path:Ge(new ve(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ie(e))return this;{const n=ne(e),r=this.children.get(n);return r!==null?r.subtree(we(e)):new Ce(null)}}set(e,n){if(ie(e))return new Ce(n,this.children);{const r=ne(e),s=(this.children.get(r)||new Ce(null)).set(we(e),n),o=this.children.insert(r,s);return new Ce(this.value,o)}}remove(e){if(ie(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=ne(e),r=this.children.get(n);if(r){const i=r.remove(we(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ce(null):new Ce(this.value,s)}else return this}}get(e){if(ie(e))return this.value;{const n=ne(e),r=this.children.get(n);return r?r.get(we(e)):null}}setTree(e,n){if(ie(e))return n;{const r=ne(e),s=(this.children.get(r)||new Ce(null)).setTree(we(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ce(this.value,o)}}fold(e){return this.fold_(de(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ge(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,de(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ie(e))return null;{const s=ne(e),o=this.children.get(s);return o?o.findOnPath_(we(e),Ge(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,de(),n)}foreachOnPath_(e,n,r){if(ie(e))return this;{this.value&&r(n,this.value);const i=ne(e),s=this.children.get(i);return s?s.foreachOnPath_(we(e),Ge(n,i),r):new Ce(null)}}foreach(e){this.foreach_(de(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ge(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.writeTree_=e}static empty(){return new yn(new Ce(null))}}function wa(t,e,n){if(ie(e))return new yn(new Ce(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Lt(i,e);return s=s.updateChild(o,n),new yn(t.writeTree_.set(i,s))}else{const i=new Ce(n),s=t.writeTree_.setTree(e,i);return new yn(s)}}}function M0(t,e,n){let r=t;return zt(n,(i,s)=>{r=wa(r,Ge(e,i),s)}),r}function V0(t,e){if(ie(e))return yn.empty();{const n=t.writeTree_.setTree(e,new Ce(null));return new yn(n)}}function $p(t,e){return Ji(t,e)!=null}function Ji(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Lt(n.path,e)):null}function F0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Le,(r,i)=>{e.push(new re(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new re(r,i.value))}),e}function Hr(t,e){if(ie(e))return t;{const n=Ji(t,e);return n!=null?new yn(new Ce(n)):new yn(t.writeTree_.subtree(e))}}function Wp(t){return t.writeTree_.isEmpty()}function to(t,e){return Qx(de(),t.writeTree_,e)}function Qx(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(B(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Qx(Ge(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ge(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(t,e){return Zx(e,t)}function n4(t,e,n,r,i){B(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=wa(t.visibleWrites,e,n)),t.lastWriteId=r}function r4(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function i4(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&s4(a,r.path)?i=!1:fn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return o4(t),!0;if(r.snap)t.visibleWrites=V0(t.visibleWrites,r.path);else{const a=r.children;zt(a,u=>{t.visibleWrites=V0(t.visibleWrites,Ge(r.path,u))})}return!0}else return!1}function s4(t,e){if(t.snap)return fn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&fn(Ge(t.path,n),e))return!0;return!1}function o4(t){t.visibleWrites=Yx(t.allWrites,a4,de()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function a4(t){return t.visible}function Yx(t,e,n){let r=yn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)fn(n,o)?(a=Lt(n,o),r=wa(r,a,s.snap)):fn(o,n)&&(a=Lt(o,n),r=wa(r,de(),s.snap.getChild(a)));else if(s.children){if(fn(n,o))a=Lt(n,o),r=M0(r,a,s.children);else if(fn(o,n))if(a=Lt(o,n),ie(a))r=M0(r,de(),s.children);else{const u=$s(s.children,ne(a));if(u){const c=u.getChild(we(a));r=wa(r,de(),c)}}}else throw ao("WriteRecord should have .snap or .children")}}return r}function Xx(t,e,n,r,i){if(!r&&!i){const s=Ji(t.visibleWrites,e);if(s!=null)return s;{const o=Hr(t.visibleWrites,e);if(Wp(o))return n;if(n==null&&!$p(o,de()))return null;{const a=n||Y.EMPTY_NODE;return to(o,a)}}}else{const s=Hr(t.visibleWrites,e);if(!i&&Wp(s))return n;if(!i&&n==null&&!$p(s,de()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(fn(c.path,e)||fn(e,c.path))},a=Yx(t.allWrites,o,e),u=n||Y.EMPTY_NODE;return to(a,u)}}}function l4(t,e,n){let r=Y.EMPTY_NODE;const i=Ji(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Le,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Hr(t.visibleWrites,e);return n.forEachChild(Le,(o,a)=>{const u=to(Hr(s,new ve(o)),a);r=r.updateImmediateChild(o,u)}),F0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Hr(t.visibleWrites,e);return F0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function u4(t,e,n,r,i){B(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ge(e,n);if($p(t.visibleWrites,s))return null;{const o=Hr(t.visibleWrites,s);return Wp(o)?i.getChild(n):to(o,i.getChild(n))}}function c4(t,e,n,r){const i=Ge(e,n),s=Ji(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Hr(t.visibleWrites,i);return to(o,r.getNode().getImmediateChild(n))}else return null}function h4(t,e){return Ji(t.visibleWrites,e)}function d4(t,e,n,r,i,s,o){let a;const u=Hr(t.visibleWrites,e),c=Ji(u,de());if(c!=null)a=c;else if(n!=null)a=to(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),p=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let v=p.getNext();for(;v&&h.length<i;)f(v,r)!==0&&h.push(v),v=p.getNext();return h}else return[]}function f4(){return{visibleWrites:yn.empty(),allWrites:[],lastWriteId:-1}}function Fc(t,e,n,r){return Xx(t.writeTree,t.treePath,e,n,r)}function f_(t,e){return l4(t.writeTree,t.treePath,e)}function j0(t,e,n,r){return u4(t.writeTree,t.treePath,e,n,r)}function jc(t,e){return h4(t.writeTree,Ge(t.treePath,e))}function p4(t,e,n,r,i,s){return d4(t.writeTree,t.treePath,e,n,r,i,s)}function p_(t,e,n){return c4(t.writeTree,t.treePath,e,n)}function Jx(t,e){return Zx(Ge(t.treePath,e),t.writeTree)}function Zx(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m4{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,rl(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,nl(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,eo(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,rl(r,e.snapshotNode,i.oldSnap));else throw ao("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g4{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const eR=new g4;class m_{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Wi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return p_(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qi(this.viewCache_),s=p4(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _4(t){return{filter:t}}function y4(t,e){B(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function v4(t,e,n,r,i){const s=new m4;let o,a;if(n.type===pn.OVERWRITE){const c=n;c.source.fromUser?o=qp(t,e,c.path,c.snap,r,i,s):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ie(c.path),o=Uc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===pn.MERGE){const c=n;c.source.fromUser?o=E4(t,e,c.path,c.children,r,i,s):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Hp(t,e,c.path,c.children,r,i,a,s))}else if(n.type===pn.ACK_USER_WRITE){const c=n;c.revert?o=S4(t,e,c.path,r,i,s):o=I4(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===pn.LISTEN_COMPLETE)o=T4(t,e,n.path,r,s);else throw ao("Unknown operation type: "+n.type);const u=s.getChanges();return w4(e,o,u),{viewCache:o,changes:u}}function w4(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=zp(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(qx(zp(e)))}}function tR(t,e,n,r,i,s){const o=e.eventCache;if(jc(r,n)!=null)return e;{let a,u;if(ie(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=qi(e),h=c instanceof Y?c:Y.EMPTY_NODE,f=f_(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Fc(r,qi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=ne(n);if(c===".priority"){B(ei(n)===1,"Can't have a priority with additional path components");const h=o.getNode();u=e.serverCache.getNode();const f=j0(r,n,h,u);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=we(n);let f;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const p=j0(r,n,o.getNode(),u);p!=null?f=o.getNode().getImmediateChild(c).updateChild(h,p):f=o.getNode().getImmediateChild(c)}else f=p_(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,h,i,s):a=o.getNode()}}return va(e,a,o.isFullyInitialized()||ie(n),t.filter.filtersNodes())}}function Uc(t,e,n,r,i,s,o,a){const u=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(ie(n))c=h.updateFullNode(u.getNode(),r,null);else if(h.filtersNodes()&&!u.isFiltered()){const v=u.getNode().updateChild(n,r);c=h.updateFullNode(u.getNode(),v,null)}else{const v=ne(n);if(!u.isCompleteForPath(n)&&ei(n)>1)return e;const C=we(n),k=u.getNode().getImmediateChild(v).updateChild(C,r);v===".priority"?c=h.updatePriority(u.getNode(),k):c=h.updateChild(u.getNode(),v,k,C,eR,null)}const f=Kx(e,c,u.isFullyInitialized()||ie(n),h.filtersNodes()),p=new m_(i,f,s);return tR(t,f,n,i,p,a)}function qp(t,e,n,r,i,s,o){const a=e.eventCache;let u,c;const h=new m_(i,e,s);if(ie(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=va(e,c,!0,t.filter.filtersNodes());else{const f=ne(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=va(e,c,a.isFullyInitialized(),a.isFiltered());else{const p=we(n),v=a.getNode().getImmediateChild(f);let C;if(ie(p))C=r;else{const A=h.getCompleteChild(f);A!=null?Mx(p)===".priority"&&A.getChild(Fx(p)).isEmpty()?C=A:C=A.updateChild(p,r):C=Y.EMPTY_NODE}if(v.equals(C))u=e;else{const A=t.filter.updateChild(a.getNode(),f,C,p,h,o);u=va(e,A,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function U0(t,e){return t.eventCache.isCompleteForChild(e)}function E4(t,e,n,r,i,s,o){let a=e;return r.foreach((u,c)=>{const h=Ge(n,u);U0(e,ne(h))&&(a=qp(t,a,h,c,i,s,o))}),r.foreach((u,c)=>{const h=Ge(n,u);U0(e,ne(h))||(a=qp(t,a,h,c,i,s,o))}),a}function B0(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Hp(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;ie(n)?c=r:c=new Ce(null).setTree(n,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((f,p)=>{if(h.hasChild(f)){const v=e.serverCache.getNode().getImmediateChild(f),C=B0(t,v,p);u=Uc(t,u,new ve(f),C,i,s,o,a)}}),c.children.inorderTraversal((f,p)=>{const v=!e.serverCache.isCompleteForChild(f)&&p.value===null;if(!h.hasChild(f)&&!v){const C=e.serverCache.getNode().getImmediateChild(f),A=B0(t,C,p);u=Uc(t,u,new ve(f),A,i,s,o,a)}}),u}function I4(t,e,n,r,i,s,o){if(jc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(ie(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Uc(t,e,n,u.getNode().getChild(n),i,s,a,o);if(ie(n)){let c=new Ce(null);return u.getNode().forEachChild(Os,(h,f)=>{c=c.set(new ve(h),f)}),Hp(t,e,n,c,i,s,a,o)}else return e}else{let c=new Ce(null);return r.foreach((h,f)=>{const p=Ge(n,h);u.isCompleteForPath(p)&&(c=c.set(h,u.getNode().getChild(p)))}),Hp(t,e,n,c,i,s,a,o)}}function T4(t,e,n,r,i){const s=e.serverCache,o=Kx(e,s.getNode(),s.isFullyInitialized()||ie(n),s.isFiltered());return tR(t,o,n,r,eR,i)}function S4(t,e,n,r,i,s){let o;if(jc(r,n)!=null)return e;{const a=new m_(r,e,i),u=e.eventCache.getNode();let c;if(ie(n)||ne(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Fc(r,qi(e));else{const f=e.serverCache.getNode();B(f instanceof Y,"serverChildren would be complete if leaf node"),h=f_(r,f)}h=h,c=t.filter.updateFullNode(u,h,s)}else{const h=ne(n);let f=p_(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=u.getImmediateChild(h)),f!=null?c=t.filter.updateChild(u,h,f,we(n),a,s):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(u,h,Y.EMPTY_NODE,we(n),a,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Fc(r,qi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||jc(r,de())!=null,va(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C4{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new l_(r.getIndex()),s=WF(r);this.processor_=_4(s);const o=n.serverCache,a=n.eventCache,u=i.updateFullNode(Y.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(Y.EMPTY_NODE,a.getNode(),null),h=new Wi(u,o.isFullyInitialized(),i.filtersNodes()),f=new Wi(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=qh(f,h),this.eventGenerator_=new XF(this.query_)}get query(){return this.query_}}function x4(t){return t.viewCache_.serverCache.getNode()}function R4(t,e){const n=qi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ie(e)&&!n.getImmediateChild(ne(e)).isEmpty())?n.getChild(e):null}function z0(t){return t.eventRegistrations_.length===0}function A4(t,e){t.eventRegistrations_.push(e)}function $0(t,e,n){const r=[];if(n){B(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function W0(t,e,n,r){e.type===pn.MERGE&&e.source.queryId!==null&&(B(qi(t.viewCache_),"We should always have a full cache before handling merges"),B(zp(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=v4(t.processor_,i,e,n,r);return y4(t.processor_,s.viewCache),B(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,nR(t,s.changes,s.viewCache.eventCache.getNode(),null)}function N4(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Le,(s,o)=>{r.push(eo(s,o))}),n.isFullyInitialized()&&r.push(qx(n.getNode())),nR(t,r,n.getNode(),e)}function nR(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return JF(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bc;class k4{constructor(){this.views=new Map}}function P4(t){B(!Bc,"__referenceConstructor has already been defined"),Bc=t}function b4(){return B(Bc,"Reference.ts has not been loaded"),Bc}function D4(t){return t.views.size===0}function g_(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return B(s!=null,"SyncTree gave us an op for an invalid query."),W0(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(W0(o,e,n,r));return s}}function O4(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Fc(n,i?r:null),u=!1;a?u=!0:r instanceof Y?(a=f_(n,r),u=!1):(a=Y.EMPTY_NODE,u=!1);const c=qh(new Wi(a,u,!1),new Wi(r,i,!1));return new C4(e,c)}return o}function L4(t,e,n,r,i,s){const o=O4(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),A4(o,n),N4(o,n)}function M4(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=ti(t);if(i==="default")for(const[u,c]of t.views.entries())o=o.concat($0(c,n,r)),z0(c)&&(t.views.delete(u),c.query._queryParams.loadsAllData()||s.push(c.query));else{const u=t.views.get(i);u&&(o=o.concat($0(u,n,r)),z0(u)&&(t.views.delete(i),u.query._queryParams.loadsAllData()||s.push(u.query)))}return a&&!ti(t)&&s.push(new(b4())(e._repo,e._path)),{removed:s,events:o}}function rR(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ls(t,e){let n=null;for(const r of t.views.values())n=n||R4(r,e);return n}function iR(t,e){if(e._queryParams.loadsAllData())return Hh(t);{const r=e._queryIdentifier;return t.views.get(r)}}function sR(t,e){return iR(t,e)!=null}function ti(t){return Hh(t)!=null}function Hh(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zc;function V4(t){B(!zc,"__referenceConstructor has already been defined"),zc=t}function F4(){return B(zc,"Reference.ts has not been loaded"),zc}let j4=1;class q0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=f4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function oR(t,e,n,r,i){return n4(t.pendingWriteTree_,e,n,r,i),i?Al(t,new $i(Gx(),e,n)):[]}function Ti(t,e,n=!1){const r=r4(t.pendingWriteTree_,e);if(i4(t.pendingWriteTree_,e)){let s=new Ce(null);return r.snap!=null?s=s.set(de(),!0):zt(r.children,o=>{s=s.set(new ve(o),!0)}),Al(t,new Vc(r.path,s,n))}else return[]}function Gh(t,e,n){return Al(t,new $i(c_(),e,n))}function U4(t,e,n){const r=Ce.fromObject(n);return Al(t,new ol(c_(),e,r))}function B4(t,e){return Al(t,new sl(c_(),e))}function z4(t,e,n){const r=y_(t,n);if(r){const i=v_(r),s=i.path,o=i.queryId,a=Lt(s,e),u=new sl(h_(o),a);return w_(t,s,u)}else return[]}function Gp(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||sR(o,e))){const u=M4(o,e,n,r);D4(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=u.removed;if(a=u.events,!i){const h=c.findIndex(p=>p._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(p,v)=>ti(v));if(h&&!f){const p=t.syncPointTree_.subtree(s);if(!p.isEmpty()){const v=q4(p);for(let C=0;C<v.length;++C){const A=v[C],k=A.query,S=uR(t,A);t.listenProvider_.startListening(Ea(k),$c(t,k),S.hashFn,S.onComplete)}}}!f&&c.length>0&&!r&&(h?t.listenProvider_.stopListening(Ea(e),null):c.forEach(p=>{const v=t.queryToTagMap.get(Kh(p));t.listenProvider_.stopListening(Ea(p),v)}))}H4(t,c)}return a}function $4(t,e,n,r){const i=y_(t,r);if(i!=null){const s=v_(i),o=s.path,a=s.queryId,u=Lt(o,e),c=new $i(h_(a),u,n);return w_(t,o,c)}else return[]}function W4(t,e,n,r){const i=y_(t,r);if(i){const s=v_(i),o=s.path,a=s.queryId,u=Lt(o,e),c=Ce.fromObject(n),h=new ol(h_(a),u,c);return w_(t,o,h)}else return[]}function H0(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(p,v)=>{const C=Lt(p,i);s=s||Ls(v,C),o=o||ti(v)});let a=t.syncPointTree_.get(i);a?(o=o||ti(a),s=s||Ls(a,de())):(a=new k4,t.syncPointTree_=t.syncPointTree_.set(i,a));let u;s!=null?u=!0:(u=!1,s=Y.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((v,C)=>{const A=Ls(C,de());A&&(s=s.updateImmediateChild(v,A))}));const c=sR(a,e);if(!c&&!e._queryParams.loadsAllData()){const p=Kh(e);B(!t.queryToTagMap.has(p),"View does not exist, but we have a tag");const v=G4();t.queryToTagMap.set(p,v),t.tagToQueryMap.set(v,p)}const h=d_(t.pendingWriteTree_,i);let f=L4(a,e,n,h,s,u);if(!c&&!o&&!r){const p=iR(a,e);f=f.concat(K4(t,e,p))}return f}function __(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=Lt(o,e),c=Ls(a,u);if(c)return c});return Xx(i,e,s,n,!0)}function Al(t,e){return aR(e,t.syncPointTree_,null,d_(t.pendingWriteTree_,de()))}function aR(t,e,n,r){if(ie(t.path))return lR(t,e,n,r);{const i=e.get(de());n==null&&i!=null&&(n=Ls(i,de()));let s=[];const o=ne(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,h=Jx(r,o);s=s.concat(aR(a,u,c,h))}return i&&(s=s.concat(g_(i,t,r,n))),s}}function lR(t,e,n,r){const i=e.get(de());n==null&&i!=null&&(n=Ls(i,de()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=Jx(r,o),h=t.operationForChild(o);h&&(s=s.concat(lR(h,a,u,c)))}),i&&(s=s.concat(g_(i,t,r,n))),s}function uR(t,e){const n=e.query,r=$c(t,n);return{hashFn:()=>(x4(e)||Y.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?z4(t,n._path,r):B4(t,n._path);{const s=$V(i,n);return Gp(t,n,null,s)}}}}function $c(t,e){const n=Kh(e);return t.queryToTagMap.get(n)}function Kh(t){return t._path.toString()+"$"+t._queryIdentifier}function y_(t,e){return t.tagToQueryMap.get(e)}function v_(t){const e=t.indexOf("$");return B(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ve(t.substr(0,e))}}function w_(t,e,n){const r=t.syncPointTree_.get(e);B(r,"Missing sync point for query tag that we're tracking");const i=d_(t.pendingWriteTree_,e);return g_(r,n,i,null)}function q4(t){return t.fold((e,n,r)=>{if(n&&ti(n))return[Hh(n)];{let i=[];return n&&(i=rR(n)),zt(r,(s,o)=>{i=i.concat(o)}),i}})}function Ea(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(F4())(t._repo,t._path):t}function H4(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Kh(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function G4(){return j4++}function K4(t,e,n){const r=e._path,i=$c(t,e),s=uR(t,n),o=t.listenProvider_.startListening(Ea(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)B(!ti(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((c,h,f)=>{if(!ie(c)&&h&&ti(h))return[Hh(h).query];{let p=[];return h&&(p=p.concat(rR(h).map(v=>v.query))),zt(f,(v,C)=>{p=p.concat(C)}),p}});for(let c=0;c<u.length;++c){const h=u[c];t.listenProvider_.stopListening(Ea(h),$c(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new E_(n)}node(){return this.node_}}class I_{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ge(this.path_,e);return new I_(this.syncTree_,n)}node(){return __(this.syncTree_,this.path_)}}const Q4=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},G0=function(t,e,n){if(!t||typeof t!="object")return t;if(B(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Y4(t[".sv"],e,n);if(typeof t[".sv"]=="object")return X4(t[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Y4=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+t)}},X4=function(t,e,n){t.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&B(!1,"Unexpected increment value: "+r);const i=e.node();if(B(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},J4=function(t,e,n,r){return T_(e,new I_(n,t),r)},cR=function(t,e,n){return T_(t,new E_(e),n)};function T_(t,e,n){const r=t.getPriority().val(),i=G0(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=G0(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Xe(a,st(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Xe(i))),o.forEachChild(Le,(a,u)=>{const c=T_(u,e.getImmediateChild(a),n);c!==u&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function C_(t,e){let n=e instanceof ve?e:new ve(e),r=t,i=ne(n);for(;i!==null;){const s=$s(r.node.children,i)||{children:{},childCount:0};r=new S_(i,r,s),n=we(n),i=ne(n)}return r}function _o(t){return t.node.value}function hR(t,e){t.node.value=e,Kp(t)}function dR(t){return t.node.childCount>0}function Z4(t){return _o(t)===void 0&&!dR(t)}function Qh(t,e){zt(t.node.children,(n,r)=>{e(new S_(n,t,r))})}function fR(t,e,n,r){n&&!r&&e(t),Qh(t,i=>{fR(i,e,!0,r)}),n&&r&&e(t)}function ej(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Nl(t){return new ve(t.parent===null?t.name:Nl(t.parent)+"/"+t.name)}function Kp(t){t.parent!==null&&tj(t.parent,t.name,t)}function tj(t,e,n){const r=Z4(n),i=pr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Kp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Kp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nj=/[\[\].#$\/\u0000-\u001F\u007F]/,rj=/[\[\].#$\u0000-\u001F\u007F]/,pf=10*1024*1024,pR=function(t){return typeof t=="string"&&t.length!==0&&!nj.test(t)},mR=function(t){return typeof t=="string"&&t.length!==0&&!rj.test(t)},ij=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),mR(t)},sj=function(t,e,n,r){x_(Xm(t,"value"),e,n)},x_=function(t,e,n){const r=n instanceof ve?new IF(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+_i(r));if(typeof e=="function")throw new Error(t+"contains a function "+_i(r)+" with contents = "+e.toString());if(mx(e))throw new Error(t+"contains "+e.toString()+" "+_i(r));if(typeof e=="string"&&e.length>pf/3&&_h(e)>pf)throw new Error(t+"contains a string greater than "+pf+" utf8 bytes "+_i(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(zt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!pR(o)))throw new Error(t+" contains an invalid key ("+o+") "+_i(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);TF(r,o),x_(t,a,r),SF(r)}),i&&s)throw new Error(t+' contains ".value" child '+_i(r)+" in addition to actual children.")}},gR=function(t,e,n,r){if(!mR(n))throw new Error(Xm(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},oj=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),gR(t,e,n)},aj=function(t,e){if(ne(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},lj=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!pR(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ij(n))throw new Error(Xm(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uj{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function R_(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!s_(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function _R(t,e,n){R_(t,n),yR(t,r=>s_(r,e))}function dr(t,e,n){R_(t,n),yR(t,r=>fn(r,e)||fn(e,r))}function yR(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(cj(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function cj(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();_a&&Et("event: "+n.toString()),go(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hj="repo_interrupt",dj=25;class fj{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new uj,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Mc(),this.transactionQueueTree_=new S_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function pj(t,e,n){if(t.stats_=r_(t.repoInfo_),t.forceRestClient_||GV())t.server_=new Lc(t.repoInfo_,(r,i,s,o)=>{K0(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Q0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{tt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new nr(t.repoInfo_,e,(r,i,s,o)=>{K0(t,r,i,s,o)},r=>{Q0(t,r)},r=>{gj(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=JV(t.repoInfo_,()=>new YF(t.stats_,t.server_)),t.infoData_=new qF,t.infoSyncTree_=new q0({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=Gh(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),N_(t,"connected",!1),t.serverSyncTree_=new q0({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const c=o(a,u);dr(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function mj(t){const n=t.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function A_(t){return Q4({timestamp:mj(t)})}function K0(t,e,n,r,i){t.dataUpdateCount++;const s=new ve(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=pc(n,c=>st(c));o=W4(t.serverSyncTree_,s,u,i)}else{const u=st(n);o=$4(t.serverSyncTree_,s,u,i)}else if(r){const u=pc(n,c=>st(c));o=U4(t.serverSyncTree_,s,u)}else{const u=st(n);o=Gh(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=Yh(t,s)),dr(t.eventQueue_,a,o)}function Q0(t,e){N_(t,"connected",e),e===!1&&yj(t)}function gj(t,e){zt(e,(n,r)=>{N_(t,n,r)})}function N_(t,e,n){const r=new ve("/.info/"+e),i=st(n);t.infoData_.updateSnapshot(r,i);const s=Gh(t.infoSyncTree_,r,i);dr(t.eventQueue_,r,s)}function vR(t){return t.nextWriteId_++}function _j(t,e,n,r,i){k_(t,"set",{path:e.toString(),value:n,priority:r});const s=A_(t),o=st(n,r),a=__(t.serverSyncTree_,e),u=cR(o,a,s),c=vR(t),h=oR(t.serverSyncTree_,e,u,c,!0);R_(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(p,v)=>{const C=p==="ok";C||Bt("set at "+e+" failed: "+p);const A=Ti(t.serverSyncTree_,c,!C);dr(t.eventQueue_,e,A),Ij(t,i,p,v)});const f=SR(t,e);Yh(t,f),dr(t.eventQueue_,f,[])}function yj(t){k_(t,"onDisconnectEvents");const e=A_(t),n=Mc();Bp(t.onDisconnect_,de(),(i,s)=>{const o=J4(i,s,t.serverSyncTree_,e);Hx(n,i,o)});let r=[];Bp(n,de(),(i,s)=>{r=r.concat(Gh(t.serverSyncTree_,i,s));const o=SR(t,i);Yh(t,o)}),t.onDisconnect_=Mc(),dr(t.eventQueue_,de(),r)}function vj(t,e,n){let r;ne(e._path)===".info"?r=H0(t.infoSyncTree_,e,n):r=H0(t.serverSyncTree_,e,n),_R(t.eventQueue_,e._path,r)}function wj(t,e,n){let r;ne(e._path)===".info"?r=Gp(t.infoSyncTree_,e,n):r=Gp(t.serverSyncTree_,e,n),_R(t.eventQueue_,e._path,r)}function Ej(t){t.persistentConnection_&&t.persistentConnection_.interrupt(hj)}function k_(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Et(n,...e)}function Ij(t,e,n,r){e&&go(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function wR(t,e,n){return __(t.serverSyncTree_,e,n)||Y.EMPTY_NODE}function P_(t,e=t.transactionQueueTree_){if(e||Xh(t,e),_o(e)){const n=IR(t,e);B(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Tj(t,Nl(e),n)}else dR(e)&&Qh(e,n=>{P_(t,n)})}function Tj(t,e,n){const r=n.map(c=>c.currentWriteId),i=wR(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];B(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=Lt(e,h.path);s=s.updateChild(f,h.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,c=>{k_(t,"transaction put response",{path:u.toString(),status:c});let h=[];if(c==="ok"){const f=[];for(let p=0;p<n.length;p++)n[p].status=2,h=h.concat(Ti(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&f.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();Xh(t,C_(t.transactionQueueTree_,e)),P_(t,t.transactionQueueTree_),dr(t.eventQueue_,e,h);for(let p=0;p<f.length;p++)go(f[p])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Bt("transaction at "+u.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Yh(t,e)}},o)}function Yh(t,e){const n=ER(t,e),r=Nl(n),i=IR(t,n);return Sj(t,i,r),r}function Sj(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=Lt(n,u.path);let h=!1,f;if(B(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)h=!0,f=u.abortReason,i=i.concat(Ti(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=dj)h=!0,f="maxretry",i=i.concat(Ti(t.serverSyncTree_,u.currentWriteId,!0));else{const p=wR(t,u.path,o);u.currentInputSnapshot=p;const v=e[a].update(p.val());if(v!==void 0){x_("transaction failed: Data returned ",v,u.path);let C=st(v);typeof v=="object"&&v!=null&&pr(v,".priority")||(C=C.updatePriority(p.getPriority()));const k=u.currentWriteId,S=A_(t),I=cR(C,p,S);u.currentOutputSnapshotRaw=C,u.currentOutputSnapshotResolved=I,u.currentWriteId=vR(t),o.splice(o.indexOf(k),1),i=i.concat(oR(t.serverSyncTree_,u.path,I,u.currentWriteId,u.applyLocally)),i=i.concat(Ti(t.serverSyncTree_,k,!0))}else h=!0,f="nodata",i=i.concat(Ti(t.serverSyncTree_,u.currentWriteId,!0))}dr(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Xh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)go(r[a]);P_(t,t.transactionQueueTree_)}function ER(t,e){let n,r=t.transactionQueueTree_;for(n=ne(e);n!==null&&_o(r)===void 0;)r=C_(r,n),e=we(e),n=ne(e);return r}function IR(t,e){const n=[];return TR(t,e,n),n.sort((r,i)=>r.order-i.order),n}function TR(t,e,n){const r=_o(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Qh(e,i=>{TR(t,i,n)})}function Xh(t,e){const n=_o(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,hR(e,n.length>0?n:void 0)}Qh(e,r=>{Xh(t,r)})}function SR(t,e){const n=Nl(ER(t,e)),r=C_(t.transactionQueueTree_,e);return ej(r,i=>{mf(t,i)}),mf(t,r),fR(r,i=>{mf(t,i)}),n}function mf(t,e){const n=_o(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(B(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(B(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ti(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?hR(e,void 0):n.length=s+1,dr(t.eventQueue_,Nl(e),i);for(let o=0;o<r.length;o++)go(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cj(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function xj(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Bt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Y0=function(t,e){const n=Rj(t),r=n.namespace;n.domain==="firebase.com"&&hr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&hr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||FV();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Rx(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ve(n.pathString)}},Rj=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(i=Cj(t.substring(h,f)));const p=xj(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const v=e.slice(0,c);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const C=e.indexOf(".");r=e.substring(0,C).toLowerCase(),n=e.substring(C+1),s=r}"ns"in p&&(s=p.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aj{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+tt(this.snapshot.exportVal())}}class Nj{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kj{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return B(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ie(this._path)?null:Mx(this._path)}get ref(){return new ui(this._repo,this._path)}get _queryIdentifier(){const e=O0(this._queryParams),n=t_(e);return n==="{}"?"default":n}get _queryObject(){return O0(this._queryParams)}isEqual(e){if(e=me(e),!(e instanceof b_))return!1;const n=this._repo===e._repo,r=s_(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+EF(this._path)}}class ui extends b_{constructor(e,n){super(e,n,new u_,!1)}get parent(){const e=Fx(this._path);return e===null?null:new ui(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Wc{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ve(e),r=Qp(this.ref,e);return new Wc(this._node.getChild(n),r,Le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Wc(i,Qp(this.ref,r),Le)))}hasChild(e){const n=new ve(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function X0(t,e){return t=me(t),t._checkNotDeleted("ref"),e!==void 0?Qp(t._root,e):t._root}function Qp(t,e){return t=me(t),ne(t._path)===null?oj("child","path",e):gR("child","path",e),new ui(t._repo,Ge(t._path,e))}function Pj(t,e){t=me(t),aj("set",t._path),sj("set",e,t._path);const n=new gh;return _j(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class D_{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Aj("value",this,new Wc(e.snapshotNode,new ui(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Nj(this,e,n):null}matches(e){return e instanceof D_?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function bj(t,e,n,r,i){const s=new kj(n,void 0),o=new D_(s);return vj(t._repo,t,o),()=>wj(t._repo,t,o)}function Dj(t,e,n,r){return bj(t,"value",e)}P4(ui);V4(ui);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oj="FIREBASE_DATABASE_EMULATOR_HOST",Yp={};let Lj=!1;function Mj(t,e,n,r){t.repoInfo_=new Rx(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function Vj(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||hr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Et("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Y0(s,i),a=o.repoInfo,u;typeof process<"u"&&g0&&(u=g0[Oj]),u?(s=`http://${u}?ns=${a.namespace}`,o=Y0(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new QV(t.name,t.options,e);lj("Invalid Firebase Database URL",o),ie(o.path)||hr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=jj(a,t,c,new KV(t.name,n));return new Uj(h,t)}function Fj(t,e){const n=Yp[e];(!n||n[t.key]!==t)&&hr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Ej(t),delete n[t.key]}function jj(t,e,n,r){let i=Yp[e.name];i||(i={},Yp[e.name]=i);let s=i[t.toURLString()];return s&&hr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new fj(t,Lj,n,r),i[t.toURLString()]=s,s}class Uj{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(pj(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ui(this._repo,de())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Fj(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&hr("Cannot call "+e+" on a deleted database.")}}function Bj(t=vh(),e){const n=fl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Km("database");r&&zj(n,...r)}return n}function zj(t,e,n,r={}){t=me(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&hr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&hr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Uu(Uu.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Qm(r.mockUserToken,t.app.options.projectId);s=new Uu(o)}Mj(i,e,n,s)}/**
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
 */function $j(t){bV(si),Qr(new ar("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Vj(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),nn(_0,y0,t),nn(_0,y0,"esm2017")}nr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};nr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};$j();const Wj={apiKey:"AIzaSyC_G-cV2z_RbVO7rjGB9o7e9pZ0nsavtTQ",authDomain:"skwebsite-df527.firebaseapp.com",databaseURL:"https://skwebsite-df527-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"skwebsite-df527",storageBucket:"skwebsite-df527.appspot.com",messagingSenderId:"950246300063",appId:"1:950246300063:web:1d3dacc9f19b89e84205aa",measurementId:"G-NZPHQLT27P"},Jh=qT(Wj),ke=aM(Jh),qc=Sh(Jh);new Hn;const Hc=hx(Jh),J0=Bj(Jh),qj=({onClose:t})=>{const[e,n]=O.useState(""),[r,i]=O.useState(""),[s,o]=O.useState(!0),[a,u]=O.useState(null),c=async()=>{try{await rD(qc,e,r),alert("Sign up successful!"),t()}catch(f){f instanceof Error?u(f.message):u("An unknown error occurred"),console.error("Error signing up:",f)}},h=async()=>{try{await iD(qc,e,r),alert("Sign in successful!"),t()}catch(f){f instanceof Error?u(f.message):u("An unknown error occurred"),console.error("Error signing in:",f)}};return g.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center",children:g.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative",children:[g.jsx("button",{onClick:t,className:"absolute top-2 right-2 text-gray-600 hover:text-gray-900",children:"×"}),g.jsx("h2",{className:"text-xl font-bold mb-4 text-center",children:s?"Sign Up":"Sign In"}),g.jsx("input",{type:"email",placeholder:"Email",value:e,onChange:f=>n(f.target.value),className:"border p-2 mb-2 rounded w-full"}),g.jsx("input",{type:"password",placeholder:"Password",value:r,onChange:f=>i(f.target.value),className:"border p-2 mb-4 rounded w-full"}),g.jsxs("div",{className:"flex flex-col items-center",children:[s?g.jsx("button",{onClick:c,className:"bg-slate-950 border rounded-full text-white px-4 py-2 transition-transform duration-300 ease-in-out hover:bg-[#2a2388] hover:scale-105",children:"Sign Up"}):g.jsx("button",{onClick:h,className:"bg-slate-950 border rounded-full text-white px-4 py-2 transition-transform duration-300 ease-in-out hover:bg-[#2a2388] hover:scale-105",children:"Sign In"}),a&&g.jsx("p",{className:"text-red-500 mt-2",children:a}),g.jsx("button",{onClick:()=>o(!s),className:"mt-4 text-blue-500 underline",children:s?"Already have an account? Sign In":"Need an account? Sign Up"})]})]})})},Hj=()=>{const{closeAuthModal:t}=xR();return g.jsxs("div",{children:[g.jsx("button",{onClick:t,className:"bg-slate-950 text-white px-4 py-2 rounded",children:"Close Auth Modal"}),g.jsx(qj,{onClose:t})]})},CR=O.createContext(void 0),Gj=({children:t})=>{const[e,n]=O.useState(null),[r,i]=O.useState(!1);O.useEffect(()=>{const u=og(qc,c=>{n(c),c&&sessionStorage.getItem("shouldReload")==="true"&&(sessionStorage.removeItem("shouldReload"),window.location.reload())});return()=>u()},[]);const s=()=>i(!0),o=()=>i(!1),a=async()=>{try{sessionStorage.setItem("shouldReload","true"),await aD(qc),window.location.reload()}catch(u){console.error("Error signing out:",u)}};return g.jsxs(CR.Provider,{value:{user:e,isAuthOpen:r,openAuthModal:s,closeAuthModal:o,signOut:a},children:[t,r&&g.jsx(Hj,{})]})},xR=()=>{const t=O.useContext(CR);if(t===void 0)throw new Error("useAuth must be used within an AuthProvider");return t},Z0=({label:t,onClick:e,className:n})=>g.jsx("button",{onClick:e,className:`${n} px-4 py-2 transition-transform duration-300 ease-in-out hover:scale-105`,children:t}),Gc=({transparent:t})=>{const{user:e,openAuthModal:n,signOut:r}=xR();return g.jsx("div",{children:e?g.jsx(Z0,{label:"Sign Out",onClick:r,className:"bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"}):g.jsx(Z0,{label:"Sign Up",onClick:n,className:`${t?"bg-transparent border border-black text-black":"bg-slate-950 text-white"}`})})},Kj=()=>g.jsx("button",{className:"bg-slate-950 border text-white px-4 py-2 transition-transform duration-300 ease-in-out hover:bg-[#2a2388] hover:scale-105 cursor-pointer mb-4",children:"Learn More"});var RR={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},eE=Dr.createContext&&Dr.createContext(RR),Qj=["attr","size","title"];function Yj(t,e){if(t==null)return{};var n=Xj(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Xj(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Kc(){return Kc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Kc.apply(this,arguments)}function tE(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Qc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?tE(Object(n),!0).forEach(function(r){Jj(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):tE(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Jj(t,e,n){return e=Zj(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Zj(t){var e=eU(t,"string");return typeof e=="symbol"?e:e+""}function eU(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function AR(t){return t&&t.map((e,n)=>Dr.createElement(e.tag,Qc({key:n},e.attr),AR(e.child)))}function tU(t){return e=>Dr.createElement(nU,Kc({attr:Qc({},t.attr)},e),AR(t.child))}function nU(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=Yj(t,Qj),a=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),Dr.createElement("svg",Kc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:Qc(Qc({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Dr.createElement("title",null,s),t.children)};return eE!==void 0?Dr.createElement(eE.Consumer,null,n=>e(n)):e(RR)}function nE(t){return tU({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z"},child:[]}]})(t)}var rE={};const NR=()=>{const[t,e]=O.useState(!1),[n,r]=O.useState(!1),[i,s]=O.useState(""),[o,a]=O.useState(""),[u,c]=O.useState(""),[h,f]=O.useState(!1),p=ck(),v=Hm();O.useEffect(()=>{const N=localStorage.getItem("isAdminLoggedIn");f(N==="true")},[]);const C=()=>{e(!t)},A=N=>{const M=document.getElementById(N);if(M){const _=M.getBoundingClientRect().top+window.pageYOffset-60;window.scrollTo({top:_,behavior:"smooth"})}t&&C()},k=()=>{const N=rE.REACT_APP_ADMIN_EMAIL||"camohguain@gmail.com",M=rE.REACT_APP_ADMIN_PASSWORD||"password";i===N&&o===M?(c(""),r(!1),f(!0),localStorage.setItem("isAdminLoggedIn","true")):c("Invalid email or password")},S=()=>{f(!1),localStorage.removeItem("isAdminLoggedIn"),p("/")},I=[...Ak,...h?[{name:"Admin",id:"admin"}]:[]],R=N=>{N.id==="admin"?p("/admin"):v.pathname==="/admin"?p("/"):A(N.id)};return g.jsxs(g.Fragment,{children:[g.jsx("div",{className:`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${n?"block":"hidden"}`,children:g.jsxs("div",{className:"bg-white p-6 rounded shadow-lg w-full max-w-md",children:[g.jsx("h2",{className:"text-lg font-bold mb-4",children:"Admin Log In"}),u&&g.jsx("p",{className:"text-red-500",children:u}),g.jsx("input",{type:"text",placeholder:"Email/Username",value:i,onChange:N=>s(N.target.value),className:"border border-gray-300 p-2 w-full mb-2"}),g.jsx("input",{type:"password",placeholder:"Password",value:o,onChange:N=>a(N.target.value),className:"border border-gray-300 p-2 w-full mb-4"}),g.jsx("button",{onClick:k,className:"bg-blue-500 text-white px-4 py-2 rounded w-full",children:"Log In"}),g.jsx("button",{onClick:()=>r(!1),className:"mt-2 text-gray-500 underline w-full text-left",children:"Close"})]})}),g.jsx("div",{className:`fixed inset-0 bg-black bg-opacity-50 z-40 transform ${t?"translate-x-0":"-translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`,children:g.jsxs("div",{className:"w-64 h-full bg-gradient-to-r from-[#e3f9ff] to-[#b5e8ff] p-4 relative flex flex-col",children:[g.jsx("button",{className:"text-black font-bold text-2xl self-end",onClick:C,children:"×"}),g.jsx("ul",{className:"mt-12 flex flex-col space-y-4",children:I.map((N,M)=>g.jsx("li",{className:"text-black font-bold cursor-pointer font-serif hover:bg-gradient-to-r hover:from-orange-400 hover:to-blue-900 hover:text-transparent hover:bg-clip-text transition duration-300 ease-in-out",onClick:()=>R(N),children:N.name},M))}),g.jsx("div",{className:"mt-8",children:g.jsx(Gc,{transparent:!0})})]})}),g.jsxs("nav",{className:"bg-white p-4 fixed w-full z-30 flex flex-col md:flex-row items-center justify-between max-h-[75px]",children:[g.jsxs("div",{className:"flex items-center w-full justify-center md:w-auto md:justify-start",children:[g.jsx("img",{src:bT,alt:"Logo",className:"cursor-pointer max-w-[150px] max-h-[70px] md:max-w-[200px] md:max-h-[90px] mr-6 transition duration-300 ease-in-out",onClick:()=>A("/")}),g.jsx("button",{className:"md:hidden text-black font-bold text-2xl ml-auto","aria-label":"Open Sidebar",onClick:C,children:"☰"})]}),g.jsx("ul",{className:"hidden md:flex flex-row space-x-4 md:gap-32 mt-4 md:mt-0 justify-center",children:I.map((N,M)=>g.jsx("li",{className:"text-black font-bold cursor-pointer font-serif hover:bg-gradient-to-r hover:from-orange-400 hover:to-blue-900 hover:text-transparent hover:bg-clip-text transition duration-300 ease-in-out",onClick:()=>R(N),children:N.name},M))}),g.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[g.jsx(Gc,{transparent:!0}),h?g.jsxs("button",{onClick:S,className:"flex items-center bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-300 ease-in-out",children:[g.jsx(nE,{className:"mr-2"}),"Log Out"]}):g.jsxs("button",{onClick:()=>r(!0),className:"flex items-center bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out",children:[g.jsx(nE,{className:"mr-2"}),"Admin"]})]})]})]})},rU="/SkWeb/assets/bg-DjAPkPKg.jpg",iE=()=>{const[t,e]=O.useState(!1);return O.useEffect(()=>{const n=Sh(),r=og(n,i=>{e(!!i)});return()=>r()},[]),g.jsxs("div",{className:"relative w-full h-[700px]",children:[g.jsx("div",{className:"absolute inset-0 bg-cover bg-center",style:{backgroundImage:`url(${rU})`},children:g.jsx("div",{className:"absolute inset-0 bg-blue-800 opacity-50"})}),g.jsxs("div",{className:"relative flex flex-col items-center justify-center h-full w-full text-center text-white",children:[g.jsxs("div",{className:"mb-4",children:[g.jsxs("h1",{className:"font-serif font-bold text-5xl p-5",children:["Empowerment Youth for a ",g.jsx("br",{})," Better Future"]}),g.jsxs("p",{className:"text-xl",children:["Welcome to the official website of Sangguniang Kabataan, where we aim to provide ",g.jsx("br",{})," opportunities, support, and representation for the youth in our community."]})]}),!t&&g.jsxs("div",{className:"flex space-x-4",children:[g.jsx(Kj,{}),g.jsx(Gc,{})]})]})]})},iU=({service:t,formData:e,handleInputChange:n,handleFileChange:r,handleSubmit:i,closeForm:s})=>{const o=u=>e&&e[u]!==void 0?e[u]:"",a=()=>t.formFields.map((u,c)=>{const h=o(u.label);switch(u.type){case"textarea":return g.jsx("textarea",{placeholder:u.label,className:"block w-full mb-2 p-2 border border-gray-300 rounded",value:h,onChange:f=>n(u.label,f.target.value)},c);case"file":return g.jsx("input",{type:"file",className:"block w-full mb-2",onChange:f=>r(u.label,f.target.files?f.target.files[0]:null)},c);default:return g.jsx("input",{type:u.type,placeholder:u.label,className:"block w-full mb-2 p-2 border border-gray-300 rounded",value:h,onChange:f=>n(u.label,f.target.value)},c)}});return g.jsxs("div",{className:"p-6",children:[g.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Service Form"}),g.jsxs("form",{onSubmit:u=>{u.preventDefault(),i()},children:[a(),g.jsx("button",{type:"submit",className:"bg-green-500 text-white p-3 rounded w-full",children:"Submit"}),g.jsx("button",{type:"button",onClick:s,className:"mt-2 bg-gray-500 text-white p-3 rounded w-full",children:"Cancel"})]})]})},sU=({service:t,onClose:e,openServiceForm:n})=>{const[r,i]=O.useState(0),s=t.imageUrl.split(",").map(u=>u.trim()),o=()=>{i(u=>u>0?u-1:s.length-1)},a=()=>{i(u=>u<s.length-1?u+1:0)};return s.length===0?g.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50",children:g.jsxs("div",{className:"bg-white p-4 sm:p-5 rounded-lg w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 max-w-md relative h-[600px] overflow-y-auto",children:[g.jsx("button",{onClick:e,className:"absolute top-2 right-2 text-gray-600 text-2xl sm:text-3xl font-bold focus:outline-none",children:"×"}),g.jsx("h2",{className:"text-xl sm:text-2xl font-bold mb-2 sm:mb-3",children:t.title}),g.jsx("p",{className:"text-sm sm:text-base mb-2 sm:mb-3",children:t.description}),g.jsx("p",{className:"text-sm sm:text-base",children:"No images available"}),g.jsx("button",{onClick:n,className:"bg-blue-500 text-white p-2 sm:p-3 rounded w-full mt-4",children:"Open Service Form"})]})}):g.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50",children:g.jsxs("div",{className:"bg-white p-4 sm:p-6 rounded-lg w-[80%] sm:w-[60%] md:w-2/3 lg:w-1/2 max-w-md relative h-[600px] overflow-y-auto",children:[g.jsx("button",{onClick:e,className:"absolute top-2 right-2 text-gray-600 text-2xl sm:text-3xl font-bold focus:outline-none",children:"×"}),g.jsxs("div",{className:"relative mb-6 mt-10",children:[" ",g.jsx("img",{src:s[r],alt:`Service Image ${r+1}`,className:"w-[250px] h-[250px] max-w-full max-h-[250px] rounded-lg mx-auto"}),s.length>1&&g.jsxs("div",{className:"absolute inset-0 flex justify-between items-center",children:[g.jsx("button",{onClick:o,className:"bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100 text-lg sm:text-xl",children:"◀"}),g.jsx("button",{onClick:a,className:"bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100 text-lg sm:text-xl",children:"▶"})]})]}),g.jsx("h2",{className:"text-xl sm:text-2xl font-bold mb-2 sm:mb-3",children:t.title}),g.jsx("p",{className:"text-sm sm:text-base mb-2 sm:mb-3",children:t.description}),g.jsx("button",{onClick:n,className:"bg-blue-500 text-white p-2 sm:p-3 rounded w-full mt-4",children:"Open Service Form"})]})})},oU=()=>{const[t,e]=O.useState([]),[n,r]=O.useState(null),[i,s]=O.useState(!1),[o,a]=O.useState({}),[u,c]=O.useState({}),[h,f]=O.useState(!0),[p,v]=O.useState(!1),C=Ut(ke,"services"),A=Ut(ke,"applications"),k=async()=>{try{f(!0);const T=(await Ui(C)).docs.map(x=>({...x.data(),id:x.id}));e(T),v(!0),f(!1)}catch(_){console.error("Error fetching services:",_),f(!1)}};O.useEffect(()=>{p||k()},[p]);const S=(_,T)=>{c({...u,[_]:T})},I=async _=>{try{let T={serviceId:_,...o[_]};if(u[_]){const x=el(Hc,`applications/${_}/${u[_].name}`);await Ja(x,u[_]);const P=await Za(x);T={...T,fileURL:P}}await po(A,T),alert("Application submitted!"),r(null),a(x=>({...x,[_]:{}})),c(x=>({...x,[_]:null}))}catch(T){console.error("Error submitting application:",T)}},R=(_,T,x)=>{a({...o,[_]:{...o[_],[T]:x}})},N=_=>{r(_)},M=()=>{r(null)},F=()=>{s(!0)},E=()=>{s(!1)};return g.jsxs("div",{className:"p-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:[h?g.jsx("p",{children:"Loading services..."}):t.length===0?g.jsx("p",{children:"No services available."}):t.map(_=>g.jsxs("div",{className:"flex flex-col items-center text-center border-2 border-gray-200 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer",onClick:()=>N(_),children:[g.jsx("div",{className:"w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-300 bg-gray-200",style:{backgroundImage:`url(${_.imageUrl})`,backgroundSize:"cover",backgroundPosition:"center"}}),g.jsxs("div",{className:"mt-4",children:[g.jsx("h3",{className:"text-lg md:text-xl font-bold",children:_.title}),g.jsx("p",{className:"text-sm md:text-base mt-2",children:_.description})]})]},_.id)),n&&g.jsx(sU,{service:n,onClose:M,openServiceForm:F}),i&&n&&g.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50",children:g.jsx("div",{className:"bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3 max-w-lg relative",children:g.jsx(iU,{service:n,formData:o[n.id]||{},handleInputChange:(_,T)=>R(n.id,_,T),handleFileChange:(_,T)=>S(n.id,T),handleSubmit:()=>I(n.id),closeForm:E})})})]})},sE=()=>g.jsxs("div",{className:"p-4 md:p-8 min-h-screen bg-gray-100",children:[g.jsxs("div",{className:"  p-8 rounded-lg  mb-8",children:[g.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-center mb-4",children:"Services and Programs that Make a Difference"}),g.jsx("p",{className:"text-lg text-center max-w-5xl mx-auto",children:"Welcome to the Sangguniang Kabataan Website. We are dedicated to empowering the youth and creating positive change in our community. Explore our initiatives and programs to learn how you can get involved."})]}),g.jsx(oU,{})]}),aU=({isOpen:t,onClose:e,children:n})=>t?g.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",children:g.jsxs("div",{className:"bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-sm md:max-w-lg relative h-[600px]",children:[" ",g.jsx("button",{className:"absolute top-2 right-2 text-gray-600 text-2xl md:text-2xl font-bold focus:outline-none z-60",onClick:e,children:"×"}),g.jsx("div",{className:"p-4 md:p-6 h-full overflow-auto",children:n})]})}):null,lU=({newsletter:t})=>{const[e,n]=O.useState(!1),r=()=>{n(!0)},i=()=>{n(!1)},s=(o,a)=>o.length>a?`${o.substring(0,a)}...`:o;return g.jsxs(g.Fragment,{children:[g.jsxs("div",{onClick:r,className:"bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer",children:[g.jsx("img",{src:t.imageUrl,alt:t.title,className:"w-full h-32 sm:h-48 object-cover"}),g.jsxs("div",{className:"p-4",children:[g.jsx("h2",{className:"text-lg sm:text-xl font-bold mb-2",children:t.title}),g.jsx("p",{className:"text-gray-700 mb-4",children:s(t.description,window.innerWidth<640?50:100)}),t.link&&g.jsx("a",{href:t.link,className:"text-blue-500 hover:underline cursor-pointer",children:"Read More →"})]})]}),g.jsxs(aU,{isOpen:e,onClose:i,children:[g.jsx("img",{src:t.imageUrl,alt:t.title,className:"w-full h-64 object-cover mb-4"}),g.jsx("h2",{className:"text-xl font-bold mb-2",children:t.title}),g.jsx("p",{className:"text-gray-700 mb-4",children:t.description}),g.jsx("p",{className:"text-gray-700 mb-4",children:t.fullContent})]})]})},oE=()=>{const[t,e]=O.useState([]),[n,r]=O.useState(!1),i=Ut(ke,"newsletters");return O.useEffect(()=>{(async()=>{try{if(n)return;const o=await Ui(i);e(o.docs.map(a=>({...a.data(),id:a.id}))),r(!0)}catch(o){console.error("Error fetching newsletters:",o)}})()},[n,i]),g.jsxs("div",{className:"p-4 md:p-8 min-h-screen bg-gray-100",children:[g.jsx("h1",{className:"text-2xl md:text-3xl font-bold mb-4",children:"Stay Updated with Us"}),g.jsx("p",{className:"text-base md:text-lg mb-8",children:"Get the latest news and updates on youth and community initiatives."}),g.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8",children:["  ",t.map(s=>g.jsx(lU,{newsletter:s},s.id))]})]})},uU=({eventName:t,onClose:e})=>{const[n,r]=O.useState(""),[i,s]=O.useState(""),[o,a]=O.useState(""),[u,c]=O.useState(""),h=async f=>{if(f.preventDefault(),!t){console.error("Event name is missing"),alert("Event name is required.");return}try{await po(Ut(ke,"attendance"),{eventName:t,email:n,fullName:i,age:o,address:u,timestamp:new Date().toISOString()}),alert("Attendance recorded successfully!"),e()}catch(p){console.error("Error recording attendance:",p),alert("Failed to record attendance.")}};return g.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50",children:g.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg w-96",children:[g.jsxs("h3",{className:"text-xl font-semibold mb-4",children:["Attendance Form for ",t]}),g.jsxs("form",{onSubmit:h,children:[g.jsxs("div",{className:"space-y-4",children:[g.jsx("input",{type:"email",placeholder:"Email",value:n,onChange:f=>r(f.target.value),className:"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0}),g.jsx("input",{type:"text",placeholder:"Full Name",value:i,onChange:f=>s(f.target.value),className:"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0}),g.jsx("input",{type:"number",placeholder:"Age",value:o,onChange:f=>a(f.target.value),className:"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0}),g.jsx("input",{type:"text",placeholder:"Address",value:u,onChange:f=>c(f.target.value),className:"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),g.jsxs("div",{className:"flex justify-between mt-4",children:[g.jsx("button",{type:"submit",className:"bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300",children:"Submit"}),g.jsx("button",{type:"button",onClick:e,className:"bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300",children:"Close"})]})]})]})})},cU=({isOpen:t,onClose:e,event:n})=>{const[r,i]=O.useState(!1),[s,o]=O.useState(0);if(!t||!n)return null;const a=new Date().toISOString().split("T")[0],u=()=>{i(!0)},c=()=>{i(!1)},h=()=>{o(p=>p>0?p-1:n.image.length-1)},f=()=>{o(p=>p<n.image.length-1?p+1:0)};return g.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50",children:g.jsxs("div",{className:"bg-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-sm md:max-w-lg relative h-[600px] flex flex-col",children:[g.jsx("button",{onClick:e,className:"absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl md:text-2xl",children:"×"}),g.jsx("h3",{className:"text-lg md:text-xl font-semibold mb-4",children:n.title}),n.image.length>0&&g.jsxs("div",{className:"relative w-full h-40 md:h-60 max-h-60 overflow-hidden mb-4",children:[g.jsx("img",{src:n.image[s],alt:n.title,className:"w-full h-full object-cover rounded-lg"}),n.image.length>1&&g.jsxs("div",{className:"absolute inset-0 flex justify-between items-center",children:[g.jsx("button",{onClick:h,className:"bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100 text-xl md:text-2xl",children:"◀"}),g.jsx("button",{onClick:f,className:"bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100 text-xl md:text-2xl",children:"▶"})]})]}),g.jsxs("div",{className:"flex-1 overflow-auto",children:[g.jsxs("div",{className:"mb-4",children:[g.jsx("p",{className:"text-gray-600 mt-2 text-xs md:text-sm",children:n.date}),g.jsx("p",{className:"text-gray-600 text-xs md:text-sm",children:n.location}),g.jsx("p",{className:"text-gray-600 text-xs md:text-sm",children:n.description})]}),g.jsxs("div",{className:"mt-4 flex flex-col space-y-2",children:[n.date===a?g.jsxs(g.Fragment,{children:[g.jsx("button",{onClick:u,className:"bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 text-xs md:text-sm",children:"Open Attendance Form"}),r&&g.jsx(uU,{onClose:c,eventName:n.title})]}):g.jsx("p",{className:"text-red-500 text-xs md:text-sm",children:"Attendance form is not available yet."}),g.jsx("button",{type:"button",onClick:e,className:"bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 text-xs md:text-sm",children:"Close"})]})]})]})})},hU=()=>{const[t,e]=O.useState([]),[n,r]=O.useState(null),[i,s]=O.useState(!1);O.useEffect(()=>{(async()=>{try{const c=(await Ui(Ut(ke,"events"))).docs.map(h=>({id:h.id,...h.data()}));e(c)}catch(c){console.error("Error fetching events:",c)}})()},[]);const o=u=>{r(u),s(!0)},a=()=>{s(!1),r(null)};return g.jsxs("div",{className:"p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen",children:[g.jsx("h2",{className:"text-2xl sm:text-3xl font-bold mb-4 sm:mb-6",children:"Upcoming Events"}),t.length===0?g.jsx("p",{className:"text-base sm:text-lg text-gray-600",children:"No upcoming events available at the moment."}):g.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6",children:t.map(u=>g.jsxs("div",{className:"bg-white p-4 sm:p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow flex flex-col",onClick:()=>o(u),children:[g.jsx("img",{src:u.image[0]||"/default-image.jpg",alt:u.title,className:"w-full h-32 sm:h-40 object-cover rounded-lg mb-4"}),g.jsxs("div",{className:"flex flex-col flex-grow",children:[g.jsx("h3",{className:"text-base sm:text-lg font-semibold mb-2 truncate",children:u.title}),g.jsx("p",{className:"text-gray-600 text-xs sm:text-sm truncate",children:u.date})]})]},u.id))}),n&&g.jsx(cU,{isOpen:i,onClose:a,event:n})]})},aE=()=>g.jsx("div",{className:"bg-slate-50",children:g.jsx(hU,{})}),Ho=({title:t,description:e,actions:n,image:r,imagePlaceholder:i=!0})=>g.jsxs("div",{className:"bg-white p-6 border rounded-lg shadow-md",children:[r?g.jsx("img",{src:r,alt:t,className:"w-full h-48 object-cover rounded-md mb-4"}):i&&g.jsx("div",{className:"mt-6 bg-gray-200 h-48"}),g.jsx("h3",{className:"text-xl font-bold",children:t}),g.jsx("p",{className:"text-gray-600 mt-2",children:e}),g.jsx("div",{className:"mt-4",children:n.map((s,o)=>g.jsx("button",{className:"text-blue-600 hover:underline mr-4",onClick:()=>window.location.href=s.href,children:s.label},o))})]}),dU="/SkWeb/assets/CAll%20for%20mebeerrs-C5cQG7Ea.jpg",fU="/SkWeb/assets/PROFILINGGGGGG-D9GIBTWj.jpg",pU="/SkWeb/assets/KK%20ASSEMBLY-DF9zpvKA.jpg",lE=()=>g.jsxs("div",{className:"max-w-7xl mx-auto py-12 px-6",children:[g.jsxs("header",{className:"text-center",children:[g.jsx("h2",{className:"text-gray-500 uppercase mb-4",children:"Discover"}),g.jsx("h1",{className:"text-4xl font-bold mb-2",children:"Get Involved Today"}),g.jsx("p",{className:"text-gray-600",children:"Learn how you can make a difference in your community"})]}),g.jsxs("section",{className:"mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8",children:[g.jsx(Ho,{title:"Become a Youth Leader",description:"Join Sangguniang Kabataan and contribute to positive change in your area",actions:[{label:"Learn More",href:"#learn-more"},{label:"Sign Up",href:"#sign-up"}],image:dU}),g.jsx(Ho,{title:"Lead with Passion",description:"Motivate others to create positive change in their communities",actions:[{label:"Join Us",href:"#join-us"}],image:fU}),g.jsx(Ho,{title:"Network with Other Youth Leaders",description:"Build relationships and collaborate with like-minded individuals",actions:[{label:"Learn More",href:"#learn-more"},{label:"Sign Up",href:"#sign-up"}],image:pU}),g.jsxs("div",{className:"flex flex-col space-y-4",children:[g.jsx(Ho,{title:"Attend Events",description:"Participate in community activities and connect with other youth",actions:[{label:"Join Now",href:"#join-now"}],imagePlaceholder:!1}),g.jsx(Ho,{title:"Volunteer Opportunities",description:"Make a difference by giving back to your community",actions:[{label:"Get Involved",href:"#get-involved"}],imagePlaceholder:!1})]})]})]}),mU=({closeChat:t})=>{const[e,n]=O.useState(""),[r,i]=O.useState({}),s=Sh(),o=X0(J0,"messages/");O.useEffect(()=>{const u=Dj(o,c=>{const h=c.val();i(h||{})});return()=>u()},[o]);const a=()=>{if(e.trim()){const u=s.currentUser;if(u){const c={content:e,sender:u.email||"Anonymous"},h=X0(J0,"messages/"+Date.now());Pj(h,c).then(()=>n("")).catch(f=>{console.error("Error sending message:",f),alert("Failed to send message")})}else alert("You must be authenticated to send a message.")}};return g.jsxs("div",{className:"fixed bottom-16 right-4 w-80 bg-white border border-gray-300 rounded-lg shadow-lg p-4",style:{zIndex:1e3},children:[g.jsxs("div",{className:"flex justify-between items-center border-b border-gray-300 pb-2 mb-2",children:[g.jsx("h4",{className:"text-lg font-semibold",children:"Live Chat"}),g.jsx("button",{onClick:t,className:"text-gray-500 hover:text-gray-700",children:"×"})]}),g.jsx("div",{className:"overflow-y-auto h-60 border border-gray-200 p-2 mb-2",children:Object.entries(r).map(([u,{content:c,sender:h}])=>{var p;const f=((p=s.currentUser)==null?void 0:p.email)===h;return g.jsxs("div",{className:`mb-2 p-2 rounded-md ${f?"bg-blue-600 text-white":"bg-gray-100 text-black"}`,children:[g.jsx("p",{className:"text-sm font-semibold",children:h}),g.jsx("p",{children:c})]},u)})}),g.jsxs("div",{className:"flex",children:[g.jsx("input",{type:"text",value:e,onChange:u=>n(u.target.value),placeholder:"Type your message...",className:"flex-1 border border-gray-300 rounded-lg p-2 mr-2"}),g.jsx("button",{onClick:a,className:"bg-blue-600 text-white rounded-lg px-4 py-2",children:"Send"})]})]})},gU=()=>{const[t,e]=O.useState(!1),n=()=>{e(!t)};return g.jsxs("div",{children:[g.jsx("button",{onClick:n,className:"fixed bottom-4 right-4 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105",children:"💬"}),t&&g.jsx(mU,{closeChat:()=>e(!1)})]})},_U=()=>{const[t,e]=O.useState([]),[n,r]=O.useState({id:"",title:"",date:"",location:"",description:"",image:[],category:""}),[i,s]=O.useState([]),[o,a]=O.useState([0]),[u,c]=O.useState(null),[h,f]=O.useState(!1),[p,v]=O.useState(null),[C,A]=O.useState(!1),k=hx(),S=5;O.useEffect(()=>{I()},[]);const I=async()=>{try{A(!0);const w=Pc(Ut(ke,"events"),Lp(S)),K=await Ui(w),fe=K.docs.map(Ue=>({id:Ue.id,...Ue.data()}));e(fe),v(K.docs[K.docs.length-1])}catch(w){console.error("Error fetching events:",w)}finally{A(!1)}},R=async()=>{try{if(A(!0),!p)return;const w=Pc(Ut(ke,"events"),$C(p),Lp(S)),K=await Ui(w),fe=K.docs.map(Ue=>({id:Ue.id,...Ue.data()}));e(Ue=>[...Ue,...fe]),v(K.docs[K.docs.length-1])}catch(w){console.error("Error fetching more events:",w)}finally{A(!1)}},N=(w,K)=>{if(w.target.files){const Ue=Array.from(w.target.files)[0];if(Ue.size>1048576){alert("File size exceeds 1 MB. Please upload a smaller file.");return}const Pt=[...i];Pt[K]=Ue,s(Pt)}},M=()=>{a([...o,o.length])},F=w=>{a(o.filter((K,fe)=>fe!==w)),s(i.filter((K,fe)=>fe!==w))},E=async()=>{const w=i.map(K=>new Promise((fe,Ue)=>{const Pt=el(k,`events/${K.name}`);Ja(Pt,K).then(async W=>{const X=await Za(W.ref);fe(X)}).catch(W=>{console.error("Error uploading file:",W),Ue(W)})}));try{return await Promise.all(w)}catch(K){return console.error("Error uploading images:",K),[]}},_=async()=>{try{const w=await E(),K=Ut(ke,"events");await po(K,{title:n.title,date:n.date,location:n.location,description:n.description,image:w,category:n.category}),r({id:"",title:"",date:"",location:"",description:"",image:[],category:""}),s([]),a([0]),I()}catch(w){console.error("Error adding document:",w)}},T=async w=>{try{const K=On(ke,"events",w);await Js(K),I()}catch(K){console.error("Error deleting document:",K)}},x=w=>{const K=t.find(fe=>fe.id===w);K?(r(K),s(Array.isArray(K.image)?K.image.map(fe=>fe):[]),a(K.image&&Array.isArray(K.image)?K.image.map((fe,Ue)=>Ue):[0])):console.error("Event not found for ID:",w)},P=async()=>{try{if(!n.id){console.error("No event ID specified for update.");return}const w=On(ke,"events",n.id);if(!(await EM(w)).exists()){console.error("No such document!");return}const fe=i.length?await E():n.image;await $h(w,{title:n.title,date:n.date,location:n.location,description:n.description,image:fe,category:n.category}),r({id:"",title:"",date:"",location:"",description:"",image:[],category:""}),s([]),a([0]),I()}catch(w){console.error("Error updating document:",w)}},b=w=>{const K=new Date().toISOString().split("T")[0];w.date===K?(c(w),f(!0)):alert("Attendance form is only available on the event date.")};return g.jsxs("div",{className:"p-4 sm:p-6 lg:p-8 bg-gray-100 min-h-screen",children:[g.jsx("h2",{className:"text-2xl sm:text-3xl font-bold mb-4 sm:mb-6",children:"Manage Events"}),g.jsxs("div",{className:"bg-white shadow-md rounded-lg p-4 sm:p-6 mb-4 sm:mb-8",children:[g.jsx("h3",{className:"text-lg sm:text-xl font-semibold mb-2 sm:mb-4",children:n.id?"Edit Event":"Add New Event"}),g.jsxs("div",{className:"space-y-4",children:[g.jsx("input",{type:"text",placeholder:"Title",value:n.title,onChange:w=>r({...n,title:w.target.value}),className:"w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}),g.jsx("input",{type:"date",placeholder:"Date",value:n.date,onChange:w=>r({...n,date:w.target.value}),className:"w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}),g.jsx("input",{type:"text",placeholder:"Location",value:n.location,onChange:w=>r({...n,location:w.target.value}),className:"w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}),g.jsx("textarea",{placeholder:"Description",value:n.description,onChange:w=>r({...n,description:w.target.value}),className:"w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}),g.jsxs("select",{value:n.category,onChange:w=>r({...n,category:w.target.value}),className:"w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",children:[g.jsx("option",{value:"",children:"Select Category"}),g.jsx("option",{value:"Music",children:"Music"}),g.jsx("option",{value:"Sports",children:"Sports"}),g.jsx("option",{value:"Art",children:"Art"}),g.jsx("option",{value:"Party",children:"Party"}),g.jsx("option",{value:"Art",children:"Gathering"})]}),o.map((w,K)=>g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx("input",{type:"file",accept:"image/*",onChange:fe=>N(fe,K),className:"border border-gray-300 rounded-lg p-2"}),g.jsx("button",{type:"button",onClick:()=>F(K),className:"text-red-500 hover:text-red-700",children:"Remove"})]},K)),g.jsx("button",{type:"button",onClick:M,className:"text-blue-500 hover:text-blue-700",children:"Add Image"}),g.jsx("div",{className:"flex justify-end space-x-2 mt-4",children:n.id?g.jsxs(g.Fragment,{children:[g.jsx("button",{onClick:P,className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Save"}),g.jsx("button",{onClick:()=>r({id:"",title:"",date:"",location:"",description:"",image:[],category:""}),className:"px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600",children:"Cancel"})]}):g.jsx("button",{onClick:_,className:"px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600",children:"Add Event"})})]})]}),g.jsxs("div",{className:"bg-white shadow-md rounded-lg p-4 sm:p-6",children:[g.jsx("h3",{className:"text-lg sm:text-xl font-semibold mb-2 sm:mb-4",children:"Events List"}),C?g.jsx("p",{children:"Loading..."}):g.jsx("ul",{className:"space-y-4",children:t.map(w=>g.jsx("li",{className:"border-b border-gray-200 pb-4",children:g.jsxs("div",{className:"flex justify-between items-center",children:[g.jsxs("div",{children:[g.jsx("h4",{className:"text-lg font-semibold",children:w.title}),g.jsx("p",{className:"text-gray-600",children:w.date}),g.jsx("p",{className:"text-gray-600",children:w.location}),g.jsx("p",{className:"text-gray-600",children:w.description}),g.jsx("div",{className:"flex flex-wrap mt-2 space-x-2",children:w.image.map((K,fe)=>g.jsx("img",{src:K,alt:`Event ${fe}`,className:"w-24 h-24 object-cover rounded-lg"},fe))})]}),g.jsxs("div",{className:"flex space-x-2",children:[g.jsx("button",{onClick:()=>x(w.id),className:"px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600",children:"Edit"}),g.jsx("button",{onClick:()=>T(w.id),className:"px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600",children:"Delete"}),g.jsx("button",{onClick:()=>b(w),className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Mark Attendance"})]})]})},w.id))}),p&&g.jsx("button",{onClick:R,className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Load More"})]}),h&&u&&g.jsx("div",{className:"fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center",children:g.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-lg w-full max-w-md",children:[g.jsxs("h3",{className:"text-lg font-semibold mb-4",children:["Mark Attendance for ",u.title]}),g.jsx("button",{onClick:()=>f(!1),className:"mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600",children:"Close"})]})})]})},yU=()=>{const[t,e]=O.useState([]),[n,r]=O.useState(null),[i,s]=O.useState({title:"",description:"",imageUrl:""}),[o,a]=O.useState(null),[u,c]=O.useState(null),[h,f]=O.useState(!1),[p,v]=O.useState(!0),C=Ut(ke,"newsletters"),A=async()=>{if(h||!p)return;f(!0);let E=Pc(C,gM("title"),Lp(10));u&&(E=Pc(E,$C(u)));try{const _=await Ui(E);if(_.empty)v(!1);else{const T=_.docs.map(x=>({...x.data(),id:x.id}));e(x=>[...x,...T.filter(P=>!x.some(b=>b.id===P.id))]),c(_.docs[_.docs.length-1])}}catch(_){console.error("Error fetching newsletters:",_)}f(!1)};O.useEffect(()=>{A()},[]);const k=async()=>{let E=i.imageUrl;if(o){const _=el(Hc,`images/${Date.now()}_${o.name}`);await Ja(_,o),E=await Za(_)}await po(C,{...i,imageUrl:E}),s({title:"",description:"",imageUrl:""}),a(null),v(!0),A()},S=async E=>{const _=On(ke,"newsletters",E);let T=i.imageUrl;if(o){const x=el(Hc,`images/${Date.now()}_${o.name}`);await Ja(x,o),T=await Za(x)}await $h(_,{...i,imageUrl:T}),r(null),a(null),A()},I=async E=>{const _=On(ke,"newsletters",E);await Js(_),v(!0),A()},R=E=>{r(E.id),s({title:E.title,description:E.description,imageUrl:E.imageUrl})},N=E=>{s({...i,[E.target.name]:E.target.value})},M=E=>{E.target.files&&a(E.target.files[0])},F=()=>{!h&&p&&A()};return g.jsxs("div",{className:"p-4",children:[g.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Manage Newsletters"}),g.jsxs("div",{className:"mb-6",children:[g.jsx("h2",{className:"text-xl font-semibold mb-4",children:n?"Edit Newsletter":"Add New Newsletter"}),g.jsxs("form",{onSubmit:E=>{E.preventDefault(),n?S(n):k()},children:[g.jsx("input",{type:"text",name:"title",placeholder:"Title",value:i.title,onChange:N,className:"block w-full mb-2 p-2 border border-gray-300 rounded"}),g.jsx("textarea",{name:"description",placeholder:"Description",value:i.description,onChange:N,className:"block w-full mb-2 p-2 border border-gray-300 rounded"}),g.jsx("input",{type:"file",name:"imageUrl",onChange:M,className:"block w-full mb-2"}),g.jsx("button",{type:"submit",className:"bg-blue-500 text-white p-2 rounded",children:n?"Update":"Add"})]})]}),g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",children:t.map(E=>g.jsxs("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden",children:[g.jsx("img",{src:E.imageUrl,alt:E.title,className:"w-full h-48 object-cover"}),g.jsxs("div",{className:"p-4",children:[g.jsx("h2",{className:"text-xl font-bold mb-2",children:E.title}),g.jsx("p",{className:"text-gray-700 mb-4",children:E.description}),g.jsx("button",{onClick:()=>R(E),className:"text-blue-500 hover:underline mr-4",children:"Edit"}),g.jsx("button",{onClick:()=>I(E.id),className:"text-red-500 hover:underline",children:"Delete"})]})]},E.id))}),h&&g.jsx("p",{children:"Loading more newsletters..."}),!h&&p&&g.jsx("button",{onClick:F,className:"mt-4 bg-blue-500 text-white p-2 rounded",children:"Load More"})]})},vU=()=>{const[t,e]=O.useState([]),[n,r]=O.useState({title:"",description:"",imageUrl:"",formFields:[]}),[i,s]=O.useState(null),[o,a]=O.useState([{label:"",type:"text"}]),[u,c]=O.useState(!1),[h,f]=O.useState(null),p=Ut(ke,"services");O.useEffect(()=>{const N=Mp(p,M=>{e(M.docs.map(F=>({...F.data(),id:F.id})))},M=>{console.error("Error fetching services:",M)});return()=>N()},[p]);const v=async N=>{if(N)try{const M=el(Hc,`services/${N.name}`);return await Ja(M,N),await Za(M)}catch(M){console.error("Error uploading image:",M)}},C=async()=>{try{const N=i?await v(i):n.imageUrl;if(N===void 0)throw new Error("Failed to upload image.");const M={title:n.title,description:n.description,imageUrl:N,formFields:o};if(u&&h){const F=On(ke,"services",h);await $h(F,M),c(!1),f(null)}else await po(p,M);r({title:"",description:"",imageUrl:"",formFields:[]}),a([{label:"",type:"text"}]),s(null)}catch(N){console.error("Error adding/updating service:",N)}},A=async N=>{try{const M=On(ke,"services",N);await Js(M)}catch(M){console.error("Error deleting service:",M)}},k=()=>{a([...o,{label:"",type:"text"}])},S=(N,M,F)=>{const E=o.map((_,T)=>T===N?{..._,[M]:F}:_);a(E)},I=N=>{a(o.filter((M,F)=>F!==N))},R=N=>{r({title:N.title,description:N.description,imageUrl:N.imageUrl,formFields:N.formFields}),a(N.formFields),c(!0),f(N.id)};return g.jsxs("div",{className:"p-6 max-w-screen mx-auto",children:[g.jsx("h1",{className:"text-3xl font-bold mb-6 text-center",children:"Admin Services Management"}),g.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md mb-8 max-w-[100%] mx-auto",children:[g.jsx("h2",{className:"text-2xl font-bold mb-4",children:u?"Edit Service":"Add New Service"}),g.jsx("input",{type:"text",placeholder:"Service Title",value:n.title,onChange:N=>r({...n,title:N.target.value}),className:"block w-full mb-4 p-2 border border-gray-300 rounded"}),g.jsx("textarea",{placeholder:"Service Description",value:n.description,onChange:N=>r({...n,description:N.target.value}),className:"block w-full mb-4 p-2 border border-gray-300 rounded"}),g.jsx("input",{type:"file",onChange:N=>s(N.target.files?N.target.files[0]:null),className:"block w-full mb-4"}),g.jsxs("div",{children:[g.jsx("h3",{className:"text-lg font-bold mb-2",children:"Custom Form Fields"}),o.map((N,M)=>g.jsxs("div",{className:"flex items-center mb-2",children:[g.jsx("input",{type:"text",placeholder:"Field Label",value:N.label,onChange:F=>S(M,"label",F.target.value),className:"block w-full p-2 border border-gray-300 rounded mr-2"}),g.jsxs("select",{value:N.type,onChange:F=>S(M,"type",F.target.value),className:"p-2 border border-gray-300 rounded",children:[g.jsx("option",{value:"text",children:"Text"}),g.jsx("option",{value:"email",children:"Email"}),g.jsx("option",{value:"number",children:"Number"}),g.jsx("option",{value:"textarea",children:"Textarea"})]}),g.jsx("button",{onClick:()=>I(M),className:"ml-2 bg-red-500 text-white p-2 rounded",children:"Remove"})]},M)),g.jsx("button",{onClick:k,className:"bg-blue-500 text-white p-2 rounded",children:"Add Field"})]}),g.jsx("button",{onClick:C,className:"mt-4 bg-green-500 text-white p-2 rounded",children:u?"Update Service":"Add Service"})]}),g.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md max-w-[100%] mx-auto",children:[g.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Existing Services"}),t.map(N=>g.jsxs("div",{className:"border-b border-gray-200 py-4",children:[g.jsx("h3",{className:"text-xl font-semibold",children:N.title}),g.jsx("p",{children:N.description}),g.jsx("img",{src:N.imageUrl,alt:N.title,className:"w-32 h-32 object-cover my-2"}),g.jsx("button",{onClick:()=>R(N),className:"mr-2 bg-yellow-500 text-white p-2 rounded",children:"Edit"}),g.jsx("button",{onClick:()=>A(N.id),className:"bg-red-500 text-white p-2 rounded",children:"Delete"})]},N.id))]})]})},wU=()=>{const[t,e]=O.useState([]),[n,r]=O.useState(!0),[i,s]=O.useState(null),[o,a]=O.useState(!1);O.useEffect(()=>{(async()=>{try{const p=(await Ui(Ut(ke,"attendance"))).docs.map(v=>({id:v.id,...v.data()}));e(p)}catch(f){console.error("Error fetching attendance records:",f)}finally{r(!1)}})()},[]);const u=async()=>{if(t.length===0){alert("No records available for the raffle.");return}const h=Math.floor(Math.random()*t.length),f=t[h];try{await po(Ut(ke,"raffleWinners"),{fullName:f.fullName,eventName:f.eventName,timestamp:new Date().toISOString()}),await Js(On(ke,"attendance",f.id)),e(p=>p.filter(v=>v.id!==f.id)),s(f.fullName),a(!0)}catch(p){console.error("Error during the raffle process:",p),alert("Failed to complete the raffle process.")}},c=()=>{a(!1)};return n?g.jsx("p",{children:"Loading attendance records..."}):g.jsxs("div",{className:"p-6",children:[g.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"User Attendance Records"}),t.length>0?g.jsx("div",{className:"overflow-x-auto mb-8",children:g.jsxs("table",{className:"min-w-full bg-white border border-gray-200",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{className:"py-2 px-4 border-b",children:"Event Name"}),g.jsx("th",{className:"py-2 px-4 border-b",children:"Email"}),g.jsx("th",{className:"py-2 px-4 border-b",children:"Full Name"}),g.jsx("th",{className:"py-2 px-4 border-b",children:"Age"}),g.jsx("th",{className:"py-2 px-4 border-b",children:"Address"}),g.jsx("th",{className:"py-2 px-4 border-b",children:"Timestamp"})]})}),g.jsx("tbody",{children:t.map(h=>g.jsxs("tr",{children:[g.jsx("td",{className:"py-2 px-4 border-b",children:h.eventName}),g.jsx("td",{className:"py-2 px-4 border-b",children:h.email}),g.jsx("td",{className:"py-2 px-4 border-b",children:h.fullName}),g.jsx("td",{className:"py-2 px-4 border-b",children:h.age}),g.jsx("td",{className:"py-2 px-4 border-b",children:h.address}),g.jsx("td",{className:"py-2 px-4 border-b",children:new Date(h.timestamp).toLocaleString()})]},h.id))})]})}):g.jsx("p",{children:"No attendance records found."}),g.jsx("div",{className:"my-6",children:g.jsx("button",{onClick:u,className:"bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300",children:"Raffle a Winner"})}),o&&i&&g.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",children:g.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg text-center",children:[g.jsx("h3",{className:"text-xl font-bold mb-4",children:"🎉 Raffle Winner 🎉"}),g.jsxs("p",{className:"text-lg",children:["Congratulations to ",g.jsxs("h1",{className:"font-bold text-5xl",children:[" ",i," !🎉"]})]}),g.jsx("button",{onClick:c,className:"mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300",children:"Close"})]})})]})},EU=()=>{const[t,e]=O.useState([]),[n,r]=O.useState({}),[,i]=O.useState({}),[s,o]=O.useState(!1);O.useEffect(()=>{const f=(()=>{const p=Ut(ke,"services");return Mp(p,C=>{const A=C.docs.reduce((k,S)=>{const I=S.data();return k[S.id]=I.title,k},{});r(A),o(!0)},C=>{console.error("Error fetching services:",C)})})();return()=>f()},[]),O.useEffect(()=>{if(!s)return;const h=Ut(ke,"applications"),f=Mp(h,p=>{const v=[];p.forEach(async C=>{const A=C.data(),k=A.serviceId;(n[k]||"Unknown Service")==="Unknown Service"?await Js(C.ref):v.push({id:C.id,data:A})}),e(v)},p=>{console.error("Error fetching applications:",p)});return()=>f()},[s,n]);const a=(h,f,p)=>{i(v=>({...v,[h]:{...v[h],[f]:p}}))},u=async h=>{try{const f=On(ke,"applications",h);await $h(f,{qualified:!0}),e(p=>p.map(v=>v.id===h?{...v,data:{...v.data,qualified:!0}}:v))}catch(f){console.error("Error marking as qualified:",f)}},c=async h=>{try{const f=On(ke,"applications",h);await Js(f),e(p=>p.filter(v=>v.id!==h))}catch(f){console.error("Error marking as unqualified:",f)}};return g.jsxs("div",{className:"max-w-7xl mx-4 sm:mx-8 lg:mx-auto p-6 font-sans",children:[g.jsx("h1",{className:"text-2xl font-bold mb-6",children:"Service Results"}),t.length>0?g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:t.map((h,f)=>{const p=h.data.serviceId,v=n[p]||"Unknown Service",C=h.data.qualified||!1;return g.jsxs("div",{className:`bg-white shadow-md rounded-lg p-6 ${f<4?"w-full":""}`,children:[g.jsxs("h2",{className:"text-xl font-semibold mb-4",children:["Service Title: ",v]}),g.jsx("div",{className:"space-y-4",children:Object.entries(h.data).filter(([A])=>A!=="qualified").sort(([A],[k])=>A.localeCompare(k)).map(([A,k],S)=>g.jsxs("div",{className:"mb-4",children:[g.jsx("label",{className:"block font-medium text-gray-600",children:A}),g.jsx("div",{className:"mt-1 text-gray-800",children:IU(A,k,p,a)})]},S))}),g.jsx("div",{className:"mt-4",children:C?g.jsx("div",{className:"bg-green-500 text-white px-4 py-2 rounded-md text-center",children:"Qualified"}):g.jsxs("div",{children:[g.jsx("button",{className:"bg-blue-500 text-white px-4 py-2 rounded-md mr-2",onClick:()=>u(h.id),children:"Qualify"}),g.jsx("button",{className:"bg-red-500 text-white px-4 py-2 rounded-md",onClick:()=>c(h.id),children:"Unqualify"})]})})]},h.id)})}):g.jsx("p",{className:"text-gray-600",children:"No applications found."})]})},IU=(t,e,n,r)=>typeof e=="string"?g.jsx("input",{type:"text",value:e,onChange:i=>r(n,t,i.target.value),className:"border border-gray-300 rounded px-3 py-2"}):typeof e=="number"?g.jsx("input",{type:"number",value:e,onChange:i=>r(n,t,parseFloat(i.target.value)),className:"border border-gray-300 rounded px-3 py-2"}):Array.isArray(e)?g.jsx("ul",{className:"list-disc list-inside",children:e.map((i,s)=>g.jsx("li",{children:g.jsx("input",{type:"text",value:i,onChange:o=>r(n,t,o.target.value),className:"border border-gray-300 rounded px-3 py-2"})},s))}):g.jsx("span",{children:"Unsupported type"}),TU=()=>g.jsxs("div",{children:[g.jsx(NR,{}),g.jsx(_U,{}),g.jsx(yU,{}),g.jsx(vU,{}),g.jsx(EU,{}),g.jsx(wU,{})]}),SU="/SkWeb/assets/SK%20KABATAAANNNNN-XVd6BJoN.jpg",CU=()=>{const[t,e]=O.useState(!1);return O.useEffect(()=>{const n=Sh(),r=og(n,i=>{e(!!i)});return()=>r()},[]),g.jsx("div",{className:"min-h-screen pt-16 px-4 sm:px-8",children:g.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between w-full max-w-[100%] gap-8 sm:gap-4",children:[g.jsxs("div",{className:"flex flex-col items-start space-y-4 p-5 w-full sm:w-1/2",children:[g.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black font-serif",children:"Building a Brighter Future for Youth"}),g.jsx("p",{className:"text-base sm:text-lg md:text-xl lg:text-2xl text-black mb-5",children:"At Sangguniang Kabataan, our mission is to empower the youth by providing them with opportunities for growth, development, and active participation in their communities. We envision a future where every young person has the tools and support they need to succeed and make a positive impact."}),!t&&g.jsx(Gc,{})]}),g.jsx("div",{className:"flex justify-center sm:ml-[-20px] w-full sm:w-1/2",children:g.jsx("img",{src:SU,alt:"Card",className:"w-[80%] h-auto sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[550px] lg:h-[550px] rounded-md shadow-md object-contain"})})]})})},xU=()=>{const[t,e]=O.useState(null),n=[{question:"What is SK?",answer:"Sangguniang Kabataan (SK) is a youth council in the Philippines that represents the youth in the local government. It aims to empower the youth and address their concerns and needs."},{question:"How to join SK?",answer:"To join Sangguniang Kabataan (SK), you must be a Filipino citizen, aged 15 to 30 years old, and a resident of the barangay where you intend to run for a position. You must also meet the eligibility requirements set by the Commission on Elections (COMELEC)."},{question:"What are SK programs?",answer:"Sangguniang Kabataan (SK) implements various programs and projects for the youth, such as sports development, skills training, environmental initiatives, and community outreach activities. These programs aim to promote the holistic development of the youth and address their specific needs."},{question:"How can I contribute?",answer:"You can contribute to Sangguniang Kabataan (SK) by actively participating in its programs and projects, volunteering your time and skills, and providing feedback and suggestions to improve the youth council's initiatives. Your involvement can make a positive impact on the youth in your community."},{question:"How to contact SK?",answer:"To contact Sangguniang Kabataan (SK), you can reach out to your local SK officials or visit the SK office in your barangay. You can also contact the SK national office for inquiries and assistance."}],r=i=>{e(i===t?null:i)};return g.jsx("div",{className:"flex flex-col items-center p-8",children:g.jsxs("div",{className:"w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start",children:[g.jsxs("div",{className:"w-full lg:w-1/3 mb-8 lg:mb-0 lg:pr-8",children:[g.jsx("h1",{className:"text-3xl lg:text-5xl font-bold mb-4",children:"Frequently Asked Questions"}),g.jsx("p",{className:"text-base lg:text-lg mb-6",children:"Find answers to common questions about Sangguniang Kabataan and its programs."}),g.jsx("button",{className:"mt-4 px-6 py-2 border border-black bg-white hover:bg-gray-100 transition duration-300",children:"Contact"})]}),g.jsx("div",{className:"w-full lg:w-2/3",children:n.map((i,s)=>g.jsxs("div",{className:"border-t border-gray-300 mb-4",children:[g.jsxs("button",{className:"flex justify-between items-center w-full py-4 text-left",onClick:()=>r(s),children:[g.jsx("h3",{className:"text-lg lg:text-xl font-medium",children:i.question}),g.jsx("span",{className:"text-lg lg:text-xl",children:t===s?"▲":"▼"})]}),t===s&&g.jsx("div",{className:"py-2 text-gray-600 text-sm lg:text-base",children:g.jsx("p",{children:i.answer})})]},s))})]})})},RU=()=>g.jsx("footer",{className:"w-full bg-white mt-16 py-8 border-t border-gray-300",children:g.jsxs("div",{className:"container mx-auto px-4",children:[g.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center mb-8",children:[g.jsx("div",{className:"flex items-center mb-4 md:mb-0",children:g.jsx("img",{src:bT,alt:"Sangguniang Kabataan Logo",className:"h-20 w-20 object-contain ml-4"})}),g.jsx("div",{className:"w-full flex justify-center",children:g.jsxs("ul",{className:"flex space-x-6 mb-4 md:mb-0",children:[g.jsx("li",{children:g.jsx("a",{className:"text-gray-700 hover:text-black transition",children:"About us"})}),g.jsx("li",{children:g.jsx("a",{className:"text-gray-700 hover:text-black transition",children:"Contact Us"})}),g.jsx("li",{children:g.jsx("a",{className:"text-gray-700 hover:text-black transition",children:"FAQs"})}),g.jsx("li",{children:g.jsx("a",{className:"text-gray-700 hover:text-black transition",children:"Support"})}),g.jsx("li",{children:g.jsx("a",{className:"text-gray-700 hover:text-black transition",children:"Terms"})})]})})]}),g.jsxs("div",{className:"flex flex-col items-center text-sm",children:[g.jsx("p",{className:"text-gray-500",children:"© 2024 Sangguniang Kabataan. All rights reserved."}),g.jsxs("ul",{className:"flex space-x-4 mt-2",children:[g.jsx("li",{children:g.jsx("a",{href:"/privacy",className:"text-gray-700 hover:text-black transition",children:"Privacy Policy"})}),g.jsx("li",{children:g.jsx("a",{href:"/terms",className:"text-gray-700 hover:text-black transition",children:"Terms of Service"})}),g.jsx("li",{children:g.jsx("a",{href:"/cookies",className:"text-gray-700 hover:text-black transition",children:"Cookie Policy"})})]})]})]})});function AU(){return g.jsx(Rk,{basename:"/SkWeb",children:g.jsx(Gj,{children:g.jsxs(Gv,{children:[g.jsx(wr,{path:"/admin",element:g.jsx(TU,{})}),g.jsx(wr,{path:"*",element:g.jsxs(g.Fragment,{children:[g.jsx(NR,{}),g.jsxs(Gv,{children:[g.jsx(wr,{path:"/home",element:g.jsx(iE,{})}),g.jsx(wr,{path:"/service",element:g.jsx(sE,{})}),g.jsx(wr,{path:"/newsletter",element:g.jsx(oE,{})}),g.jsx(wr,{path:"/events",element:g.jsx(aE,{})}),g.jsx(wr,{path:"/involvement",element:g.jsx(lE,{})})]}),g.jsxs("div",{id:"home",children:[g.jsx(iE,{}),g.jsx(CU,{})]}),g.jsx("div",{id:"service",children:g.jsx(sE,{})}),g.jsx("div",{id:"newsletter",children:g.jsx(oE,{})}),g.jsx("div",{id:"events",children:g.jsx(aE,{})}),g.jsx(lE,{}),g.jsx(gU,{}),g.jsx(xU,{}),g.jsx(RU,{})]})})]})})})}ET(document.getElementById("root")).render(g.jsx(O.StrictMode,{children:g.jsx(AU,{})}));
