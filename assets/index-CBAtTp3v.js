function uR(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function cR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var aE={exports:{}},Xc={},lE={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ul=Symbol.for("react.element"),hR=Symbol.for("react.portal"),dR=Symbol.for("react.fragment"),fR=Symbol.for("react.strict_mode"),pR=Symbol.for("react.profiler"),mR=Symbol.for("react.provider"),gR=Symbol.for("react.context"),_R=Symbol.for("react.forward_ref"),yR=Symbol.for("react.suspense"),vR=Symbol.for("react.memo"),wR=Symbol.for("react.lazy"),Fy=Symbol.iterator;function ER(t){return t===null||typeof t!="object"?null:(t=Fy&&t[Fy]||t["@@iterator"],typeof t=="function"?t:null)}var uE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cE=Object.assign,hE={};function no(t,e,n){this.props=t,this.context=e,this.refs=hE,this.updater=n||uE}no.prototype.isReactComponent={};no.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};no.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function dE(){}dE.prototype=no.prototype;function tm(t,e,n){this.props=t,this.context=e,this.refs=hE,this.updater=n||uE}var nm=tm.prototype=new dE;nm.constructor=tm;cE(nm,no.prototype);nm.isPureReactComponent=!0;var Uy=Array.isArray,fE=Object.prototype.hasOwnProperty,rm={current:null},pE={key:!0,ref:!0,__self:!0,__source:!0};function mE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)fE.call(e,r)&&!pE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ul,type:t,key:s,ref:o,props:i,_owner:rm.current}}function TR(t,e){return{$$typeof:ul,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function im(t){return typeof t=="object"&&t!==null&&t.$$typeof===ul}function IR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jy=/\/+/g;function Sd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?IR(""+t.key):e.toString(36)}function Tu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ul:case hR:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Sd(o,0):r,Uy(i)?(n="",t!=null&&(n=t.replace(jy,"$&/")+"/"),Tu(i,e,n,"",function(c){return c})):i!=null&&(im(i)&&(i=TR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(jy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Uy(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Sd(s,a);o+=Tu(s,e,n,u,i)}else if(u=ER(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Sd(s,a++),o+=Tu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Yl(t,e,n){if(t==null)return t;var r=[],i=0;return Tu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function SR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var kt={current:null},Iu={transition:null},CR={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:Iu,ReactCurrentOwner:rm};function gE(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:Yl,forEach:function(t,e,n){Yl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Yl(t,function(){e++}),e},toArray:function(t){return Yl(t,function(e){return e})||[]},only:function(t){if(!im(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=no;oe.Fragment=dR;oe.Profiler=pR;oe.PureComponent=tm;oe.StrictMode=fR;oe.Suspense=yR;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CR;oe.act=gE;oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=cE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=rm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)fE.call(e,u)&&!pE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ul,type:t.type,key:i,ref:s,props:r,_owner:o}};oe.createContext=function(t){return t={$$typeof:gR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:mR,_context:t},t.Consumer=t};oe.createElement=mE;oe.createFactory=function(t){var e=mE.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:_R,render:t}};oe.isValidElement=im;oe.lazy=function(t){return{$$typeof:wR,_payload:{_status:-1,_result:t},_init:SR}};oe.memo=function(t,e){return{$$typeof:vR,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=Iu.transition;Iu.transition={};try{t()}finally{Iu.transition=e}};oe.unstable_act=gE;oe.useCallback=function(t,e){return kt.current.useCallback(t,e)};oe.useContext=function(t){return kt.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return kt.current.useDeferredValue(t)};oe.useEffect=function(t,e){return kt.current.useEffect(t,e)};oe.useId=function(){return kt.current.useId()};oe.useImperativeHandle=function(t,e,n){return kt.current.useImperativeHandle(t,e,n)};oe.useInsertionEffect=function(t,e){return kt.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return kt.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return kt.current.useMemo(t,e)};oe.useReducer=function(t,e,n){return kt.current.useReducer(t,e,n)};oe.useRef=function(t){return kt.current.useRef(t)};oe.useState=function(t){return kt.current.useState(t)};oe.useSyncExternalStore=function(t,e,n){return kt.current.useSyncExternalStore(t,e,n)};oe.useTransition=function(){return kt.current.useTransition()};oe.version="18.3.1";lE.exports=oe;var L=lE.exports;const Dr=cR(L),xR=uR({__proto__:null,default:Dr},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RR=L,AR=Symbol.for("react.element"),NR=Symbol.for("react.fragment"),kR=Object.prototype.hasOwnProperty,PR=RR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bR={key:!0,ref:!0,__self:!0,__source:!0};function _E(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)kR.call(e,r)&&!bR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:AR,type:t,key:s,ref:o,props:i,_owner:PR.current}}Xc.Fragment=NR;Xc.jsx=_E;Xc.jsxs=_E;aE.exports=Xc;var g=aE.exports,yE={exports:{}},Xt={},vE={exports:{}},wE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,Q){var ne=W.length;W.push(Q);e:for(;0<ne;){var Ne=ne-1>>>1,ge=W[Ne];if(0<i(ge,Q))W[Ne]=Q,W[ne]=ge,ne=Ne;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var Q=W[0],ne=W.pop();if(ne!==Q){W[0]=ne;e:for(var Ne=0,ge=W.length,Ue=ge>>>1;Ne<Ue;){var Fn=2*(Ne+1)-1,Un=W[Fn],jn=Fn+1,Bn=W[jn];if(0>i(Un,ne))jn<ge&&0>i(Bn,Un)?(W[Ne]=Bn,W[jn]=ne,Ne=jn):(W[Ne]=Un,W[Fn]=ne,Ne=Fn);else if(jn<ge&&0>i(Bn,ne))W[Ne]=Bn,W[jn]=ne,Ne=jn;else break e}}return Q}function i(W,Q){var ne=W.sortIndex-Q.sortIndex;return ne!==0?ne:W.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,p=3,v=!1,T=!1,A=!1,N=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(W){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=W)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function D(W){if(A=!1,x(W),!T)if(n(u)!==null)T=!0,we(O);else{var Q=n(c);Q!==null&&Xe(D,Q.startTime-W)}}function O(W,Q){T=!1,A&&(A=!1,I(_),_=-1),v=!0;var ne=p;try{for(x(Q),f=n(u);f!==null&&(!(f.expirationTime>Q)||W&&!k());){var Ne=f.callback;if(typeof Ne=="function"){f.callback=null,p=f.priorityLevel;var ge=Ne(f.expirationTime<=Q);Q=t.unstable_now(),typeof ge=="function"?f.callback=ge:f===n(u)&&r(u),x(Q)}else r(u);f=n(u)}if(f!==null)var Ue=!0;else{var Fn=n(c);Fn!==null&&Xe(D,Fn.startTime-Q),Ue=!1}return Ue}finally{f=null,p=ne,v=!1}}var F=!1,S=null,_=-1,E=5,C=-1;function k(){return!(t.unstable_now()-C<E)}function P(){if(S!==null){var W=t.unstable_now();C=W;var Q=!0;try{Q=S(!0,W)}finally{Q?R():(F=!1,S=null)}}else F=!1}var R;if(typeof w=="function")R=function(){w(P)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,J=q.port2;q.port1.onmessage=P,R=function(){J.postMessage(null)}}else R=function(){N(P,0)};function we(W){S=W,F||(F=!0,R())}function Xe(W,Q){_=N(function(){W(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){T||v||(T=!0,we(O))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(p){case 1:case 2:case 3:var Q=3;break;default:Q=p}var ne=p;p=Q;try{return W()}finally{p=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,Q){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ne=p;p=W;try{return Q()}finally{p=ne}},t.unstable_scheduleCallback=function(W,Q,ne){var Ne=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?Ne+ne:Ne):ne=Ne,W){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=ne+ge,W={id:d++,callback:Q,priorityLevel:W,startTime:ne,expirationTime:ge,sortIndex:-1},ne>Ne?(W.sortIndex=ne,e(c,W),n(u)===null&&W===n(c)&&(A?(I(_),_=-1):A=!0,Xe(D,ne-Ne))):(W.sortIndex=ge,e(u,W),T||v||(T=!0,we(O))),W},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(W){var Q=p;return function(){var ne=p;p=Q;try{return W.apply(this,arguments)}finally{p=ne}}}})(wE);vE.exports=wE;var DR=vE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OR=L,Yt=DR;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var EE=new Set,Ia={};function Hi(t,e){Ms(t,e),Ms(t+"Capture",e)}function Ms(t,e){for(Ia[t]=e,t=0;t<e.length;t++)EE.add(e[t])}var ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yf=Object.prototype.hasOwnProperty,LR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,By={},zy={};function MR(t){return yf.call(zy,t)?!0:yf.call(By,t)?!1:LR.test(t)?zy[t]=!0:(By[t]=!0,!1)}function VR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function FR(t,e,n,r){if(e===null||typeof e>"u"||VR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ct[t]=new Pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ct[e]=new Pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ct[t]=new Pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ct[t]=new Pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ct[t]=new Pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ct[t]=new Pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ct[t]=new Pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ct[t]=new Pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ct[t]=new Pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var sm=/[\-:]([a-z])/g;function om(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(sm,om);ct[e]=new Pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(sm,om);ct[e]=new Pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(sm,om);ct[e]=new Pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ct[t]=new Pt(t,1,!1,t.toLowerCase(),null,!1,!1)});ct.xlinkHref=new Pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ct[t]=new Pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function am(t,e,n,r){var i=ct.hasOwnProperty(e)?ct[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(FR(e,n,i,r)&&(n=null),r||i===null?MR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var pr=OR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xl=Symbol.for("react.element"),ls=Symbol.for("react.portal"),us=Symbol.for("react.fragment"),lm=Symbol.for("react.strict_mode"),vf=Symbol.for("react.profiler"),TE=Symbol.for("react.provider"),IE=Symbol.for("react.context"),um=Symbol.for("react.forward_ref"),wf=Symbol.for("react.suspense"),Ef=Symbol.for("react.suspense_list"),cm=Symbol.for("react.memo"),Er=Symbol.for("react.lazy"),SE=Symbol.for("react.offscreen"),$y=Symbol.iterator;function Do(t){return t===null||typeof t!="object"?null:(t=$y&&t[$y]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,Cd;function Ko(t){if(Cd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cd=e&&e[1]||""}return`
`+Cd+t}var xd=!1;function Rd(t,e){if(!t||xd)return"";xd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{xd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ko(t):""}function UR(t){switch(t.tag){case 5:return Ko(t.type);case 16:return Ko("Lazy");case 13:return Ko("Suspense");case 19:return Ko("SuspenseList");case 0:case 2:case 15:return t=Rd(t.type,!1),t;case 11:return t=Rd(t.type.render,!1),t;case 1:return t=Rd(t.type,!0),t;default:return""}}function Tf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case us:return"Fragment";case ls:return"Portal";case vf:return"Profiler";case lm:return"StrictMode";case wf:return"Suspense";case Ef:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case IE:return(t.displayName||"Context")+".Consumer";case TE:return(t._context.displayName||"Context")+".Provider";case um:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case cm:return e=t.displayName||null,e!==null?e:Tf(t.type)||"Memo";case Er:e=t._payload,t=t._init;try{return Tf(t(e))}catch{}}return null}function jR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tf(e);case 8:return e===lm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function CE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function BR(t){var e=CE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Jl(t){t._valueTracker||(t._valueTracker=BR(t))}function xE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=CE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Wu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function If(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function RE(t,e){e=e.checked,e!=null&&am(t,"checked",e,!1)}function Sf(t,e){RE(t,e);var n=Gr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cf(t,e.type,Gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cf(t,e,n){(e!=="number"||Wu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Qo=Array.isArray;function Ts(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Gr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function xf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(Qo(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gr(n)}}function AE(t,e){var n=Gr(e.value),r=Gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Gy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function NE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?NE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Zl,kE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Zl=Zl||document.createElement("div"),Zl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Zl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Sa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ia={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zR=["Webkit","ms","Moz","O"];Object.keys(ia).forEach(function(t){zR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ia[e]=ia[t]})});function PE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ia.hasOwnProperty(t)&&ia[t]?(""+e).trim():e+"px"}function bE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=PE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var $R=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Af(t,e){if(e){if($R[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Nf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kf=null;function hm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pf=null,Is=null,Ss=null;function Ky(t){if(t=dl(t)){if(typeof Pf!="function")throw Error(j(280));var e=t.stateNode;e&&(e=nh(e),Pf(t.stateNode,t.type,e))}}function DE(t){Is?Ss?Ss.push(t):Ss=[t]:Is=t}function OE(){if(Is){var t=Is,e=Ss;if(Ss=Is=null,Ky(t),e)for(t=0;t<e.length;t++)Ky(e[t])}}function LE(t,e){return t(e)}function ME(){}var Ad=!1;function VE(t,e,n){if(Ad)return t(e,n);Ad=!0;try{return LE(t,e,n)}finally{Ad=!1,(Is!==null||Ss!==null)&&(ME(),OE())}}function Ca(t,e){var n=t.stateNode;if(n===null)return null;var r=nh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var bf=!1;if(ir)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){bf=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{bf=!1}function WR(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var sa=!1,qu=null,Hu=!1,Df=null,qR={onError:function(t){sa=!0,qu=t}};function HR(t,e,n,r,i,s,o,a,u){sa=!1,qu=null,WR.apply(qR,arguments)}function GR(t,e,n,r,i,s,o,a,u){if(HR.apply(this,arguments),sa){if(sa){var c=qu;sa=!1,qu=null}else throw Error(j(198));Hu||(Hu=!0,Df=c)}}function Gi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function FE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Qy(t){if(Gi(t)!==t)throw Error(j(188))}function KR(t){var e=t.alternate;if(!e){if(e=Gi(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Qy(i),t;if(s===r)return Qy(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function UE(t){return t=KR(t),t!==null?jE(t):null}function jE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jE(t);if(e!==null)return e;t=t.sibling}return null}var BE=Yt.unstable_scheduleCallback,Yy=Yt.unstable_cancelCallback,QR=Yt.unstable_shouldYield,YR=Yt.unstable_requestPaint,je=Yt.unstable_now,XR=Yt.unstable_getCurrentPriorityLevel,dm=Yt.unstable_ImmediatePriority,zE=Yt.unstable_UserBlockingPriority,Gu=Yt.unstable_NormalPriority,JR=Yt.unstable_LowPriority,$E=Yt.unstable_IdlePriority,Jc=null,An=null;function ZR(t){if(An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(Jc,t,void 0,(t.current.flags&128)===128)}catch{}}var gn=Math.clz32?Math.clz32:nA,eA=Math.log,tA=Math.LN2;function nA(t){return t>>>=0,t===0?32:31-(eA(t)/tA|0)|0}var eu=64,tu=4194304;function Yo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ku(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Yo(a):(s&=o,s!==0&&(r=Yo(s)))}else o=n&~i,o!==0?r=Yo(o):s!==0&&(r=Yo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-gn(e),i=1<<n,r|=t[n],e&=~i;return r}function rA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-gn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=rA(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Of(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function WE(){var t=eu;return eu<<=1,!(eu&4194240)&&(eu=64),t}function Nd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function cl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-gn(e),t[e]=n}function sA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-gn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function fm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-gn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var pe=0;function qE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var HE,pm,GE,KE,QE,Lf=!1,nu=[],Or=null,Lr=null,Mr=null,xa=new Map,Ra=new Map,Ir=[],oA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xy(t,e){switch(t){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":xa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ra.delete(e.pointerId)}}function Lo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=dl(e),e!==null&&pm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function aA(t,e,n,r,i){switch(e){case"focusin":return Or=Lo(Or,t,e,n,r,i),!0;case"dragenter":return Lr=Lo(Lr,t,e,n,r,i),!0;case"mouseover":return Mr=Lo(Mr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return xa.set(s,Lo(xa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ra.set(s,Lo(Ra.get(s)||null,t,e,n,r,i)),!0}return!1}function YE(t){var e=yi(t.target);if(e!==null){var n=Gi(e);if(n!==null){if(e=n.tag,e===13){if(e=FE(n),e!==null){t.blockedOn=e,QE(t.priority,function(){GE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Su(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);kf=r,n.target.dispatchEvent(r),kf=null}else return e=dl(n),e!==null&&pm(e),t.blockedOn=n,!1;e.shift()}return!0}function Jy(t,e,n){Su(t)&&n.delete(e)}function lA(){Lf=!1,Or!==null&&Su(Or)&&(Or=null),Lr!==null&&Su(Lr)&&(Lr=null),Mr!==null&&Su(Mr)&&(Mr=null),xa.forEach(Jy),Ra.forEach(Jy)}function Mo(t,e){t.blockedOn===e&&(t.blockedOn=null,Lf||(Lf=!0,Yt.unstable_scheduleCallback(Yt.unstable_NormalPriority,lA)))}function Aa(t){function e(i){return Mo(i,t)}if(0<nu.length){Mo(nu[0],t);for(var n=1;n<nu.length;n++){var r=nu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Or!==null&&Mo(Or,t),Lr!==null&&Mo(Lr,t),Mr!==null&&Mo(Mr,t),xa.forEach(e),Ra.forEach(e),n=0;n<Ir.length;n++)r=Ir[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ir.length&&(n=Ir[0],n.blockedOn===null);)YE(n),n.blockedOn===null&&Ir.shift()}var Cs=pr.ReactCurrentBatchConfig,Qu=!0;function uA(t,e,n,r){var i=pe,s=Cs.transition;Cs.transition=null;try{pe=1,mm(t,e,n,r)}finally{pe=i,Cs.transition=s}}function cA(t,e,n,r){var i=pe,s=Cs.transition;Cs.transition=null;try{pe=4,mm(t,e,n,r)}finally{pe=i,Cs.transition=s}}function mm(t,e,n,r){if(Qu){var i=Mf(t,e,n,r);if(i===null)Ud(t,e,r,Yu,n),Xy(t,r);else if(aA(i,t,e,n,r))r.stopPropagation();else if(Xy(t,r),e&4&&-1<oA.indexOf(t)){for(;i!==null;){var s=dl(i);if(s!==null&&HE(s),s=Mf(t,e,n,r),s===null&&Ud(t,e,r,Yu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ud(t,e,r,null,n)}}var Yu=null;function Mf(t,e,n,r){if(Yu=null,t=hm(r),t=yi(t),t!==null)if(e=Gi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=FE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yu=t,null}function XE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(XR()){case dm:return 1;case zE:return 4;case Gu:case JR:return 16;case $E:return 536870912;default:return 16}default:return 16}}var Nr=null,gm=null,Cu=null;function JE(){if(Cu)return Cu;var t,e=gm,n=e.length,r,i="value"in Nr?Nr.value:Nr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Cu=i.slice(t,1<r?1-r:void 0)}function xu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ru(){return!0}function Zy(){return!1}function Jt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ru:Zy,this.isPropagationStopped=Zy,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ru)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ru)},persist:function(){},isPersistent:ru}),e}var ro={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_m=Jt(ro),hl=De({},ro,{view:0,detail:0}),hA=Jt(hl),kd,Pd,Vo,Zc=De({},hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ym,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vo&&(Vo&&t.type==="mousemove"?(kd=t.screenX-Vo.screenX,Pd=t.screenY-Vo.screenY):Pd=kd=0,Vo=t),kd)},movementY:function(t){return"movementY"in t?t.movementY:Pd}}),ev=Jt(Zc),dA=De({},Zc,{dataTransfer:0}),fA=Jt(dA),pA=De({},hl,{relatedTarget:0}),bd=Jt(pA),mA=De({},ro,{animationName:0,elapsedTime:0,pseudoElement:0}),gA=Jt(mA),_A=De({},ro,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yA=Jt(_A),vA=De({},ro,{data:0}),tv=Jt(vA),wA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},EA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function IA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=TA[t])?!!e[t]:!1}function ym(){return IA}var SA=De({},hl,{key:function(t){if(t.key){var e=wA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?EA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ym,charCode:function(t){return t.type==="keypress"?xu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),CA=Jt(SA),xA=De({},Zc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nv=Jt(xA),RA=De({},hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ym}),AA=Jt(RA),NA=De({},ro,{propertyName:0,elapsedTime:0,pseudoElement:0}),kA=Jt(NA),PA=De({},Zc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bA=Jt(PA),DA=[9,13,27,32],vm=ir&&"CompositionEvent"in window,oa=null;ir&&"documentMode"in document&&(oa=document.documentMode);var OA=ir&&"TextEvent"in window&&!oa,ZE=ir&&(!vm||oa&&8<oa&&11>=oa),rv=" ",iv=!1;function eT(t,e){switch(t){case"keyup":return DA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cs=!1;function LA(t,e){switch(t){case"compositionend":return tT(e);case"keypress":return e.which!==32?null:(iv=!0,rv);case"textInput":return t=e.data,t===rv&&iv?null:t;default:return null}}function MA(t,e){if(cs)return t==="compositionend"||!vm&&eT(t,e)?(t=JE(),Cu=gm=Nr=null,cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ZE&&e.locale!=="ko"?null:e.data;default:return null}}var VA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!VA[t.type]:e==="textarea"}function nT(t,e,n,r){DE(r),e=Xu(e,"onChange"),0<e.length&&(n=new _m("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var aa=null,Na=null;function FA(t){fT(t,0)}function eh(t){var e=fs(t);if(xE(e))return t}function UA(t,e){if(t==="change")return e}var rT=!1;if(ir){var Dd;if(ir){var Od="oninput"in document;if(!Od){var ov=document.createElement("div");ov.setAttribute("oninput","return;"),Od=typeof ov.oninput=="function"}Dd=Od}else Dd=!1;rT=Dd&&(!document.documentMode||9<document.documentMode)}function av(){aa&&(aa.detachEvent("onpropertychange",iT),Na=aa=null)}function iT(t){if(t.propertyName==="value"&&eh(Na)){var e=[];nT(e,Na,t,hm(t)),VE(FA,e)}}function jA(t,e,n){t==="focusin"?(av(),aa=e,Na=n,aa.attachEvent("onpropertychange",iT)):t==="focusout"&&av()}function BA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return eh(Na)}function zA(t,e){if(t==="click")return eh(e)}function $A(t,e){if(t==="input"||t==="change")return eh(e)}function WA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var wn=typeof Object.is=="function"?Object.is:WA;function ka(t,e){if(wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!yf.call(e,i)||!wn(t[i],e[i]))return!1}return!0}function lv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function uv(t,e){var n=lv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lv(n)}}function sT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?sT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function oT(){for(var t=window,e=Wu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wu(t.document)}return e}function wm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function qA(t){var e=oT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&sT(n.ownerDocument.documentElement,n)){if(r!==null&&wm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=uv(n,s);var o=uv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var HA=ir&&"documentMode"in document&&11>=document.documentMode,hs=null,Vf=null,la=null,Ff=!1;function cv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ff||hs==null||hs!==Wu(r)||(r=hs,"selectionStart"in r&&wm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),la&&ka(la,r)||(la=r,r=Xu(Vf,"onSelect"),0<r.length&&(e=new _m("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=hs)))}function iu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ds={animationend:iu("Animation","AnimationEnd"),animationiteration:iu("Animation","AnimationIteration"),animationstart:iu("Animation","AnimationStart"),transitionend:iu("Transition","TransitionEnd")},Ld={},aT={};ir&&(aT=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function th(t){if(Ld[t])return Ld[t];if(!ds[t])return t;var e=ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in aT)return Ld[t]=e[n];return t}var lT=th("animationend"),uT=th("animationiteration"),cT=th("animationstart"),hT=th("transitionend"),dT=new Map,hv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ni(t,e){dT.set(t,e),Hi(e,[t])}for(var Md=0;Md<hv.length;Md++){var Vd=hv[Md],GA=Vd.toLowerCase(),KA=Vd[0].toUpperCase()+Vd.slice(1);ni(GA,"on"+KA)}ni(lT,"onAnimationEnd");ni(uT,"onAnimationIteration");ni(cT,"onAnimationStart");ni("dblclick","onDoubleClick");ni("focusin","onFocus");ni("focusout","onBlur");ni(hT,"onTransitionEnd");Ms("onMouseEnter",["mouseout","mouseover"]);Ms("onMouseLeave",["mouseout","mouseover"]);Ms("onPointerEnter",["pointerout","pointerover"]);Ms("onPointerLeave",["pointerout","pointerover"]);Hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xo));function dv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,GR(r,e,void 0,t),t.currentTarget=null}function fT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;dv(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;dv(i,a,c),s=u}}}if(Hu)throw t=Df,Hu=!1,Df=null,t}function Ce(t,e){var n=e[$f];n===void 0&&(n=e[$f]=new Set);var r=t+"__bubble";n.has(r)||(pT(e,t,2,!1),n.add(r))}function Fd(t,e,n){var r=0;e&&(r|=4),pT(n,t,r,e)}var su="_reactListening"+Math.random().toString(36).slice(2);function Pa(t){if(!t[su]){t[su]=!0,EE.forEach(function(n){n!=="selectionchange"&&(QA.has(n)||Fd(n,!1,t),Fd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[su]||(e[su]=!0,Fd("selectionchange",!1,e))}}function pT(t,e,n,r){switch(XE(e)){case 1:var i=uA;break;case 4:i=cA;break;default:i=mm}n=i.bind(null,e,n,t),i=void 0,!bf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ud(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=yi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}VE(function(){var c=s,d=hm(n),f=[];e:{var p=dT.get(t);if(p!==void 0){var v=_m,T=t;switch(t){case"keypress":if(xu(n)===0)break e;case"keydown":case"keyup":v=CA;break;case"focusin":T="focus",v=bd;break;case"focusout":T="blur",v=bd;break;case"beforeblur":case"afterblur":v=bd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ev;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=fA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=AA;break;case lT:case uT:case cT:v=gA;break;case hT:v=kA;break;case"scroll":v=hA;break;case"wheel":v=bA;break;case"copy":case"cut":case"paste":v=yA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=nv}var A=(e&4)!==0,N=!A&&t==="scroll",I=A?p!==null?p+"Capture":null:p;A=[];for(var w=c,x;w!==null;){x=w;var D=x.stateNode;if(x.tag===5&&D!==null&&(x=D,I!==null&&(D=Ca(w,I),D!=null&&A.push(ba(w,D,x)))),N)break;w=w.return}0<A.length&&(p=new v(p,T,null,n,d),f.push({event:p,listeners:A}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",p&&n!==kf&&(T=n.relatedTarget||n.fromElement)&&(yi(T)||T[sr]))break e;if((v||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,v?(T=n.relatedTarget||n.toElement,v=c,T=T?yi(T):null,T!==null&&(N=Gi(T),T!==N||T.tag!==5&&T.tag!==6)&&(T=null)):(v=null,T=c),v!==T)){if(A=ev,D="onMouseLeave",I="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(A=nv,D="onPointerLeave",I="onPointerEnter",w="pointer"),N=v==null?p:fs(v),x=T==null?p:fs(T),p=new A(D,w+"leave",v,n,d),p.target=N,p.relatedTarget=x,D=null,yi(d)===c&&(A=new A(I,w+"enter",T,n,d),A.target=x,A.relatedTarget=N,D=A),N=D,v&&T)t:{for(A=v,I=T,w=0,x=A;x;x=rs(x))w++;for(x=0,D=I;D;D=rs(D))x++;for(;0<w-x;)A=rs(A),w--;for(;0<x-w;)I=rs(I),x--;for(;w--;){if(A===I||I!==null&&A===I.alternate)break t;A=rs(A),I=rs(I)}A=null}else A=null;v!==null&&fv(f,p,v,A,!1),T!==null&&N!==null&&fv(f,N,T,A,!0)}}e:{if(p=c?fs(c):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var O=UA;else if(sv(p))if(rT)O=$A;else{O=BA;var F=jA}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(O=zA);if(O&&(O=O(t,c))){nT(f,O,n,d);break e}F&&F(t,p,c),t==="focusout"&&(F=p._wrapperState)&&F.controlled&&p.type==="number"&&Cf(p,"number",p.value)}switch(F=c?fs(c):window,t){case"focusin":(sv(F)||F.contentEditable==="true")&&(hs=F,Vf=c,la=null);break;case"focusout":la=Vf=hs=null;break;case"mousedown":Ff=!0;break;case"contextmenu":case"mouseup":case"dragend":Ff=!1,cv(f,n,d);break;case"selectionchange":if(HA)break;case"keydown":case"keyup":cv(f,n,d)}var S;if(vm)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else cs?eT(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(ZE&&n.locale!=="ko"&&(cs||_!=="onCompositionStart"?_==="onCompositionEnd"&&cs&&(S=JE()):(Nr=d,gm="value"in Nr?Nr.value:Nr.textContent,cs=!0)),F=Xu(c,_),0<F.length&&(_=new tv(_,t,null,n,d),f.push({event:_,listeners:F}),S?_.data=S:(S=tT(n),S!==null&&(_.data=S)))),(S=OA?LA(t,n):MA(t,n))&&(c=Xu(c,"onBeforeInput"),0<c.length&&(d=new tv("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=S))}fT(f,e)})}function ba(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ca(t,n),s!=null&&r.unshift(ba(t,s,i)),s=Ca(t,e),s!=null&&r.push(ba(t,s,i))),t=t.return}return r}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function fv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Ca(n,s),u!=null&&o.unshift(ba(n,u,a))):i||(u=Ca(n,s),u!=null&&o.push(ba(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var YA=/\r\n?/g,XA=/\u0000|\uFFFD/g;function pv(t){return(typeof t=="string"?t:""+t).replace(YA,`
`).replace(XA,"")}function ou(t,e,n){if(e=pv(e),pv(t)!==e&&n)throw Error(j(425))}function Ju(){}var Uf=null,jf=null;function Bf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zf=typeof setTimeout=="function"?setTimeout:void 0,JA=typeof clearTimeout=="function"?clearTimeout:void 0,mv=typeof Promise=="function"?Promise:void 0,ZA=typeof queueMicrotask=="function"?queueMicrotask:typeof mv<"u"?function(t){return mv.resolve(null).then(t).catch(eN)}:zf;function eN(t){setTimeout(function(){throw t})}function jd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Aa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Aa(e)}function Vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function gv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var io=Math.random().toString(36).slice(2),Cn="__reactFiber$"+io,Da="__reactProps$"+io,sr="__reactContainer$"+io,$f="__reactEvents$"+io,tN="__reactListeners$"+io,nN="__reactHandles$"+io;function yi(t){var e=t[Cn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[sr]||n[Cn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=gv(t);t!==null;){if(n=t[Cn])return n;t=gv(t)}return e}t=n,n=t.parentNode}return null}function dl(t){return t=t[Cn]||t[sr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function nh(t){return t[Da]||null}var Wf=[],ps=-1;function ri(t){return{current:t}}function Re(t){0>ps||(t.current=Wf[ps],Wf[ps]=null,ps--)}function Ie(t,e){ps++,Wf[ps]=t.current,t.current=e}var Kr={},It=ri(Kr),Vt=ri(!1),Ni=Kr;function Vs(t,e){var n=t.type.contextTypes;if(!n)return Kr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ft(t){return t=t.childContextTypes,t!=null}function Zu(){Re(Vt),Re(It)}function _v(t,e,n){if(It.current!==Kr)throw Error(j(168));Ie(It,e),Ie(Vt,n)}function mT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,jR(t)||"Unknown",i));return De({},n,r)}function ec(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Kr,Ni=It.current,Ie(It,t),Ie(Vt,Vt.current),!0}function yv(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=mT(t,e,Ni),r.__reactInternalMemoizedMergedChildContext=t,Re(Vt),Re(It),Ie(It,t)):Re(Vt),Ie(Vt,n)}var Hn=null,rh=!1,Bd=!1;function gT(t){Hn===null?Hn=[t]:Hn.push(t)}function rN(t){rh=!0,gT(t)}function ii(){if(!Bd&&Hn!==null){Bd=!0;var t=0,e=pe;try{var n=Hn;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Hn=null,rh=!1}catch(i){throw Hn!==null&&(Hn=Hn.slice(t+1)),BE(dm,ii),i}finally{pe=e,Bd=!1}}return null}var ms=[],gs=0,tc=null,nc=0,Zt=[],en=0,ki=null,Kn=1,Qn="";function pi(t,e){ms[gs++]=nc,ms[gs++]=tc,tc=t,nc=e}function _T(t,e,n){Zt[en++]=Kn,Zt[en++]=Qn,Zt[en++]=ki,ki=t;var r=Kn;t=Qn;var i=32-gn(r)-1;r&=~(1<<i),n+=1;var s=32-gn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Kn=1<<32-gn(e)+i|n<<i|r,Qn=s+t}else Kn=1<<s|n<<i|r,Qn=t}function Em(t){t.return!==null&&(pi(t,1),_T(t,1,0))}function Tm(t){for(;t===tc;)tc=ms[--gs],ms[gs]=null,nc=ms[--gs],ms[gs]=null;for(;t===ki;)ki=Zt[--en],Zt[en]=null,Qn=Zt[--en],Zt[en]=null,Kn=Zt[--en],Zt[en]=null}var Qt=null,Ht=null,Ae=!1,dn=null;function yT(t,e){var n=tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function vv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Qt=t,Ht=Vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Qt=t,Ht=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ki!==null?{id:Kn,overflow:Qn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Qt=t,Ht=null,!0):!1;default:return!1}}function qf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hf(t){if(Ae){var e=Ht;if(e){var n=e;if(!vv(t,e)){if(qf(t))throw Error(j(418));e=Vr(n.nextSibling);var r=Qt;e&&vv(t,e)?yT(r,n):(t.flags=t.flags&-4097|2,Ae=!1,Qt=t)}}else{if(qf(t))throw Error(j(418));t.flags=t.flags&-4097|2,Ae=!1,Qt=t}}}function wv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qt=t}function au(t){if(t!==Qt)return!1;if(!Ae)return wv(t),Ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bf(t.type,t.memoizedProps)),e&&(e=Ht)){if(qf(t))throw vT(),Error(j(418));for(;e;)yT(t,e),e=Vr(e.nextSibling)}if(wv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ht=Vr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ht=null}}else Ht=Qt?Vr(t.stateNode.nextSibling):null;return!0}function vT(){for(var t=Ht;t;)t=Vr(t.nextSibling)}function Fs(){Ht=Qt=null,Ae=!1}function Im(t){dn===null?dn=[t]:dn.push(t)}var iN=pr.ReactCurrentBatchConfig;function Fo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function lu(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ev(t){var e=t._init;return e(t._payload)}function wT(t){function e(I,w){if(t){var x=I.deletions;x===null?(I.deletions=[w],I.flags|=16):x.push(w)}}function n(I,w){if(!t)return null;for(;w!==null;)e(I,w),w=w.sibling;return null}function r(I,w){for(I=new Map;w!==null;)w.key!==null?I.set(w.key,w):I.set(w.index,w),w=w.sibling;return I}function i(I,w){return I=Br(I,w),I.index=0,I.sibling=null,I}function s(I,w,x){return I.index=x,t?(x=I.alternate,x!==null?(x=x.index,x<w?(I.flags|=2,w):x):(I.flags|=2,w)):(I.flags|=1048576,w)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function a(I,w,x,D){return w===null||w.tag!==6?(w=Kd(x,I.mode,D),w.return=I,w):(w=i(w,x),w.return=I,w)}function u(I,w,x,D){var O=x.type;return O===us?d(I,w,x.props.children,D,x.key):w!==null&&(w.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Er&&Ev(O)===w.type)?(D=i(w,x.props),D.ref=Fo(I,w,x),D.return=I,D):(D=Du(x.type,x.key,x.props,null,I.mode,D),D.ref=Fo(I,w,x),D.return=I,D)}function c(I,w,x,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==x.containerInfo||w.stateNode.implementation!==x.implementation?(w=Qd(x,I.mode,D),w.return=I,w):(w=i(w,x.children||[]),w.return=I,w)}function d(I,w,x,D,O){return w===null||w.tag!==7?(w=Ci(x,I.mode,D,O),w.return=I,w):(w=i(w,x),w.return=I,w)}function f(I,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Kd(""+w,I.mode,x),w.return=I,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Xl:return x=Du(w.type,w.key,w.props,null,I.mode,x),x.ref=Fo(I,null,w),x.return=I,x;case ls:return w=Qd(w,I.mode,x),w.return=I,w;case Er:var D=w._init;return f(I,D(w._payload),x)}if(Qo(w)||Do(w))return w=Ci(w,I.mode,x,null),w.return=I,w;lu(I,w)}return null}function p(I,w,x,D){var O=w!==null?w.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return O!==null?null:a(I,w,""+x,D);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Xl:return x.key===O?u(I,w,x,D):null;case ls:return x.key===O?c(I,w,x,D):null;case Er:return O=x._init,p(I,w,O(x._payload),D)}if(Qo(x)||Do(x))return O!==null?null:d(I,w,x,D,null);lu(I,x)}return null}function v(I,w,x,D,O){if(typeof D=="string"&&D!==""||typeof D=="number")return I=I.get(x)||null,a(w,I,""+D,O);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Xl:return I=I.get(D.key===null?x:D.key)||null,u(w,I,D,O);case ls:return I=I.get(D.key===null?x:D.key)||null,c(w,I,D,O);case Er:var F=D._init;return v(I,w,x,F(D._payload),O)}if(Qo(D)||Do(D))return I=I.get(x)||null,d(w,I,D,O,null);lu(w,D)}return null}function T(I,w,x,D){for(var O=null,F=null,S=w,_=w=0,E=null;S!==null&&_<x.length;_++){S.index>_?(E=S,S=null):E=S.sibling;var C=p(I,S,x[_],D);if(C===null){S===null&&(S=E);break}t&&S&&C.alternate===null&&e(I,S),w=s(C,w,_),F===null?O=C:F.sibling=C,F=C,S=E}if(_===x.length)return n(I,S),Ae&&pi(I,_),O;if(S===null){for(;_<x.length;_++)S=f(I,x[_],D),S!==null&&(w=s(S,w,_),F===null?O=S:F.sibling=S,F=S);return Ae&&pi(I,_),O}for(S=r(I,S);_<x.length;_++)E=v(S,I,_,x[_],D),E!==null&&(t&&E.alternate!==null&&S.delete(E.key===null?_:E.key),w=s(E,w,_),F===null?O=E:F.sibling=E,F=E);return t&&S.forEach(function(k){return e(I,k)}),Ae&&pi(I,_),O}function A(I,w,x,D){var O=Do(x);if(typeof O!="function")throw Error(j(150));if(x=O.call(x),x==null)throw Error(j(151));for(var F=O=null,S=w,_=w=0,E=null,C=x.next();S!==null&&!C.done;_++,C=x.next()){S.index>_?(E=S,S=null):E=S.sibling;var k=p(I,S,C.value,D);if(k===null){S===null&&(S=E);break}t&&S&&k.alternate===null&&e(I,S),w=s(k,w,_),F===null?O=k:F.sibling=k,F=k,S=E}if(C.done)return n(I,S),Ae&&pi(I,_),O;if(S===null){for(;!C.done;_++,C=x.next())C=f(I,C.value,D),C!==null&&(w=s(C,w,_),F===null?O=C:F.sibling=C,F=C);return Ae&&pi(I,_),O}for(S=r(I,S);!C.done;_++,C=x.next())C=v(S,I,_,C.value,D),C!==null&&(t&&C.alternate!==null&&S.delete(C.key===null?_:C.key),w=s(C,w,_),F===null?O=C:F.sibling=C,F=C);return t&&S.forEach(function(P){return e(I,P)}),Ae&&pi(I,_),O}function N(I,w,x,D){if(typeof x=="object"&&x!==null&&x.type===us&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Xl:e:{for(var O=x.key,F=w;F!==null;){if(F.key===O){if(O=x.type,O===us){if(F.tag===7){n(I,F.sibling),w=i(F,x.props.children),w.return=I,I=w;break e}}else if(F.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Er&&Ev(O)===F.type){n(I,F.sibling),w=i(F,x.props),w.ref=Fo(I,F,x),w.return=I,I=w;break e}n(I,F);break}else e(I,F);F=F.sibling}x.type===us?(w=Ci(x.props.children,I.mode,D,x.key),w.return=I,I=w):(D=Du(x.type,x.key,x.props,null,I.mode,D),D.ref=Fo(I,w,x),D.return=I,I=D)}return o(I);case ls:e:{for(F=x.key;w!==null;){if(w.key===F)if(w.tag===4&&w.stateNode.containerInfo===x.containerInfo&&w.stateNode.implementation===x.implementation){n(I,w.sibling),w=i(w,x.children||[]),w.return=I,I=w;break e}else{n(I,w);break}else e(I,w);w=w.sibling}w=Qd(x,I.mode,D),w.return=I,I=w}return o(I);case Er:return F=x._init,N(I,w,F(x._payload),D)}if(Qo(x))return T(I,w,x,D);if(Do(x))return A(I,w,x,D);lu(I,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,w!==null&&w.tag===6?(n(I,w.sibling),w=i(w,x),w.return=I,I=w):(n(I,w),w=Kd(x,I.mode,D),w.return=I,I=w),o(I)):n(I,w)}return N}var Us=wT(!0),ET=wT(!1),rc=ri(null),ic=null,_s=null,Sm=null;function Cm(){Sm=_s=ic=null}function xm(t){var e=rc.current;Re(rc),t._currentValue=e}function Gf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function xs(t,e){ic=t,Sm=_s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ot=!0),t.firstContext=null)}function on(t){var e=t._currentValue;if(Sm!==t)if(t={context:t,memoizedValue:e,next:null},_s===null){if(ic===null)throw Error(j(308));_s=t,ic.dependencies={lanes:0,firstContext:t}}else _s=_s.next=t;return e}var vi=null;function Rm(t){vi===null?vi=[t]:vi.push(t)}function TT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Rm(e)):(n.next=i.next,i.next=n),e.interleaved=n,or(t,r)}function or(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Tr=!1;function Am(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function IT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function er(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,or(t,n)}return i=r.interleaved,i===null?(e.next=e,Rm(r)):(e.next=i.next,i.next=e),r.interleaved=e,or(t,n)}function Ru(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,fm(t,n)}}function Tv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function sc(t,e,n,r){var i=t.updateQueue;Tr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var p=a.lane,v=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,A=a;switch(p=e,v=n,A.tag){case 1:if(T=A.payload,typeof T=="function"){f=T.call(v,f,p);break e}f=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=A.payload,p=typeof T=="function"?T.call(v,f,p):T,p==null)break e;f=De({},f,p);break e;case 2:Tr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else v={eventTime:v,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=v,u=f):d=d.next=v,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);bi|=o,t.lanes=o,t.memoizedState=f}}function Iv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var fl={},Nn=ri(fl),Oa=ri(fl),La=ri(fl);function wi(t){if(t===fl)throw Error(j(174));return t}function Nm(t,e){switch(Ie(La,e),Ie(Oa,t),Ie(Nn,fl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rf(e,t)}Re(Nn),Ie(Nn,e)}function js(){Re(Nn),Re(Oa),Re(La)}function ST(t){wi(La.current);var e=wi(Nn.current),n=Rf(e,t.type);e!==n&&(Ie(Oa,t),Ie(Nn,n))}function km(t){Oa.current===t&&(Re(Nn),Re(Oa))}var ke=ri(0);function oc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zd=[];function Pm(){for(var t=0;t<zd.length;t++)zd[t]._workInProgressVersionPrimary=null;zd.length=0}var Au=pr.ReactCurrentDispatcher,$d=pr.ReactCurrentBatchConfig,Pi=0,be=null,He=null,et=null,ac=!1,ua=!1,Ma=0,sN=0;function gt(){throw Error(j(321))}function bm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!wn(t[n],e[n]))return!1;return!0}function Dm(t,e,n,r,i,s){if(Pi=s,be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Au.current=t===null||t.memoizedState===null?uN:cN,t=n(r,i),ua){s=0;do{if(ua=!1,Ma=0,25<=s)throw Error(j(301));s+=1,et=He=null,e.updateQueue=null,Au.current=hN,t=n(r,i)}while(ua)}if(Au.current=lc,e=He!==null&&He.next!==null,Pi=0,et=He=be=null,ac=!1,e)throw Error(j(300));return t}function Om(){var t=Ma!==0;return Ma=0,t}function Sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?be.memoizedState=et=t:et=et.next=t,et}function an(){if(He===null){var t=be.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var e=et===null?be.memoizedState:et.next;if(e!==null)et=e,He=t;else{if(t===null)throw Error(j(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},et===null?be.memoizedState=et=t:et=et.next=t}return et}function Va(t,e){return typeof e=="function"?e(t):e}function Wd(t){var e=an(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=He,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((Pi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,be.lanes|=d,bi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,wn(r,e.memoizedState)||(Ot=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,be.lanes|=s,bi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qd(t){var e=an(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);wn(s,e.memoizedState)||(Ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function CT(){}function xT(t,e){var n=be,r=an(),i=e(),s=!wn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ot=!0),r=r.queue,Lm(NT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,Fa(9,AT.bind(null,n,r,i,e),void 0,null),rt===null)throw Error(j(349));Pi&30||RT(n,e,i)}return i}function RT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function AT(t,e,n,r){e.value=n,e.getSnapshot=r,kT(e)&&PT(t)}function NT(t,e,n){return n(function(){kT(e)&&PT(t)})}function kT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!wn(t,n)}catch{return!0}}function PT(t){var e=or(t,1);e!==null&&_n(e,t,1,-1)}function Sv(t){var e=Sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:t},e.queue=t,t=t.dispatch=lN.bind(null,be,t),[e.memoizedState,t]}function Fa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function bT(){return an().memoizedState}function Nu(t,e,n,r){var i=Sn();be.flags|=t,i.memoizedState=Fa(1|e,n,void 0,r===void 0?null:r)}function ih(t,e,n,r){var i=an();r=r===void 0?null:r;var s=void 0;if(He!==null){var o=He.memoizedState;if(s=o.destroy,r!==null&&bm(r,o.deps)){i.memoizedState=Fa(e,n,s,r);return}}be.flags|=t,i.memoizedState=Fa(1|e,n,s,r)}function Cv(t,e){return Nu(8390656,8,t,e)}function Lm(t,e){return ih(2048,8,t,e)}function DT(t,e){return ih(4,2,t,e)}function OT(t,e){return ih(4,4,t,e)}function LT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function MT(t,e,n){return n=n!=null?n.concat([t]):null,ih(4,4,LT.bind(null,e,t),n)}function Mm(){}function VT(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&bm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function FT(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&bm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function UT(t,e,n){return Pi&21?(wn(n,e)||(n=WE(),be.lanes|=n,bi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ot=!0),t.memoizedState=n)}function oN(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=$d.transition;$d.transition={};try{t(!1),e()}finally{pe=n,$d.transition=r}}function jT(){return an().memoizedState}function aN(t,e,n){var r=jr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},BT(t))zT(e,n);else if(n=TT(t,e,n,r),n!==null){var i=At();_n(n,t,r,i),$T(n,e,r)}}function lN(t,e,n){var r=jr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(BT(t))zT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,wn(a,o)){var u=e.interleaved;u===null?(i.next=i,Rm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=TT(t,e,i,r),n!==null&&(i=At(),_n(n,t,r,i),$T(n,e,r))}}function BT(t){var e=t.alternate;return t===be||e!==null&&e===be}function zT(t,e){ua=ac=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $T(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,fm(t,n)}}var lc={readContext:on,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useInsertionEffect:gt,useLayoutEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,useSyncExternalStore:gt,useId:gt,unstable_isNewReconciler:!1},uN={readContext:on,useCallback:function(t,e){return Sn().memoizedState=[t,e===void 0?null:e],t},useContext:on,useEffect:Cv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nu(4194308,4,LT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nu(4,2,t,e)},useMemo:function(t,e){var n=Sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=aN.bind(null,be,t),[r.memoizedState,t]},useRef:function(t){var e=Sn();return t={current:t},e.memoizedState=t},useState:Sv,useDebugValue:Mm,useDeferredValue:function(t){return Sn().memoizedState=t},useTransition:function(){var t=Sv(!1),e=t[0];return t=oN.bind(null,t[1]),Sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=be,i=Sn();if(Ae){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),rt===null)throw Error(j(349));Pi&30||RT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Cv(NT.bind(null,r,s,t),[t]),r.flags|=2048,Fa(9,AT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Sn(),e=rt.identifierPrefix;if(Ae){var n=Qn,r=Kn;n=(r&~(1<<32-gn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ma++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sN++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cN={readContext:on,useCallback:VT,useContext:on,useEffect:Lm,useImperativeHandle:MT,useInsertionEffect:DT,useLayoutEffect:OT,useMemo:FT,useReducer:Wd,useRef:bT,useState:function(){return Wd(Va)},useDebugValue:Mm,useDeferredValue:function(t){var e=an();return UT(e,He.memoizedState,t)},useTransition:function(){var t=Wd(Va)[0],e=an().memoizedState;return[t,e]},useMutableSource:CT,useSyncExternalStore:xT,useId:jT,unstable_isNewReconciler:!1},hN={readContext:on,useCallback:VT,useContext:on,useEffect:Lm,useImperativeHandle:MT,useInsertionEffect:DT,useLayoutEffect:OT,useMemo:FT,useReducer:qd,useRef:bT,useState:function(){return qd(Va)},useDebugValue:Mm,useDeferredValue:function(t){var e=an();return He===null?e.memoizedState=t:UT(e,He.memoizedState,t)},useTransition:function(){var t=qd(Va)[0],e=an().memoizedState;return[t,e]},useMutableSource:CT,useSyncExternalStore:xT,useId:jT,unstable_isNewReconciler:!1};function cn(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Kf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var sh={isMounted:function(t){return(t=t._reactInternals)?Gi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=At(),i=jr(t),s=er(r,i);s.payload=e,n!=null&&(s.callback=n),e=Fr(t,s,i),e!==null&&(_n(e,t,i,r),Ru(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=At(),i=jr(t),s=er(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Fr(t,s,i),e!==null&&(_n(e,t,i,r),Ru(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=At(),r=jr(t),i=er(n,r);i.tag=2,e!=null&&(i.callback=e),e=Fr(t,i,r),e!==null&&(_n(e,t,r,n),Ru(e,t,r))}};function xv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ka(n,r)||!ka(i,s):!0}function WT(t,e,n){var r=!1,i=Kr,s=e.contextType;return typeof s=="object"&&s!==null?s=on(s):(i=Ft(e)?Ni:It.current,r=e.contextTypes,s=(r=r!=null)?Vs(t,i):Kr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=sh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&sh.enqueueReplaceState(e,e.state,null)}function Qf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Am(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=on(s):(s=Ft(e)?Ni:It.current,i.context=Vs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Kf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&sh.enqueueReplaceState(i,i.state,null),sc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Bs(t,e){try{var n="",r=e;do n+=UR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Hd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Yf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var dN=typeof WeakMap=="function"?WeakMap:Map;function qT(t,e,n){n=er(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){cc||(cc=!0,op=r),Yf(t,e)},n}function HT(t,e,n){n=er(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Yf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Yf(t,e),typeof r!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Av(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new dN;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=xN.bind(null,t,e,n),e.then(t,t))}function Nv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function kv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=er(-1,1),e.tag=2,Fr(n,e,1))),n.lanes|=1),t)}var fN=pr.ReactCurrentOwner,Ot=!1;function Rt(t,e,n,r){e.child=t===null?ET(e,null,n,r):Us(e,t.child,n,r)}function Pv(t,e,n,r,i){n=n.render;var s=e.ref;return xs(e,i),r=Dm(t,e,n,r,s,i),n=Om(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ar(t,e,i)):(Ae&&n&&Em(e),e.flags|=1,Rt(t,e,r,i),e.child)}function bv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Wm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,GT(t,e,s,r,i)):(t=Du(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ka,n(o,r)&&t.ref===e.ref)return ar(t,e,i)}return e.flags|=1,t=Br(s,r),t.ref=e.ref,t.return=e,e.child=t}function GT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ka(s,r)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ot=!0);else return e.lanes=t.lanes,ar(t,e,i)}return Xf(t,e,n,r,i)}function KT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(vs,Wt),Wt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(vs,Wt),Wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ie(vs,Wt),Wt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ie(vs,Wt),Wt|=r;return Rt(t,e,i,n),e.child}function QT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xf(t,e,n,r,i){var s=Ft(n)?Ni:It.current;return s=Vs(e,s),xs(e,i),n=Dm(t,e,n,r,s,i),r=Om(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ar(t,e,i)):(Ae&&r&&Em(e),e.flags|=1,Rt(t,e,n,i),e.child)}function Dv(t,e,n,r,i){if(Ft(n)){var s=!0;ec(e)}else s=!1;if(xs(e,i),e.stateNode===null)ku(t,e),WT(e,n,r),Qf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=on(c):(c=Ft(n)?Ni:It.current,c=Vs(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Rv(e,o,r,c),Tr=!1;var p=e.memoizedState;o.state=p,sc(e,r,o,i),u=e.memoizedState,a!==r||p!==u||Vt.current||Tr?(typeof d=="function"&&(Kf(e,n,d,r),u=e.memoizedState),(a=Tr||xv(e,n,a,r,p,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,IT(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:cn(e.type,a),o.props=c,f=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=on(u):(u=Ft(n)?Ni:It.current,u=Vs(e,u));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==u)&&Rv(e,o,r,u),Tr=!1,p=e.memoizedState,o.state=p,sc(e,r,o,i);var T=e.memoizedState;a!==f||p!==T||Vt.current||Tr?(typeof v=="function"&&(Kf(e,n,v,r),T=e.memoizedState),(c=Tr||xv(e,n,c,r,p,T,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Jf(t,e,n,r,s,i)}function Jf(t,e,n,r,i,s){QT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&yv(e,n,!1),ar(t,e,s);r=e.stateNode,fN.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Us(e,t.child,null,s),e.child=Us(e,null,a,s)):Rt(t,e,a,s),e.memoizedState=r.state,i&&yv(e,n,!0),e.child}function YT(t){var e=t.stateNode;e.pendingContext?_v(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_v(t,e.context,!1),Nm(t,e.containerInfo)}function Ov(t,e,n,r,i){return Fs(),Im(i),e.flags|=256,Rt(t,e,n,r),e.child}var Zf={dehydrated:null,treeContext:null,retryLane:0};function ep(t){return{baseLanes:t,cachePool:null,transitions:null}}function XT(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ie(ke,i&1),t===null)return Hf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=lh(o,r,0,null),t=Ci(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ep(n),e.memoizedState=Zf,t):Vm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return pN(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Br(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Br(a,s):(s=Ci(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ep(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Zf,r}return s=t.child,t=s.sibling,r=Br(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Vm(t,e){return e=lh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function uu(t,e,n,r){return r!==null&&Im(r),Us(e,t.child,null,n),t=Vm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function pN(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Hd(Error(j(422))),uu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=lh({mode:"visible",children:r.children},i,0,null),s=Ci(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Us(e,t.child,null,o),e.child.memoizedState=ep(o),e.memoizedState=Zf,s);if(!(e.mode&1))return uu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(j(419)),r=Hd(s,r,void 0),uu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ot||a){if(r=rt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,or(t,i),_n(r,t,i,-1))}return $m(),r=Hd(Error(j(421))),uu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=RN.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ht=Vr(i.nextSibling),Qt=e,Ae=!0,dn=null,t!==null&&(Zt[en++]=Kn,Zt[en++]=Qn,Zt[en++]=ki,Kn=t.id,Qn=t.overflow,ki=e),e=Vm(e,r.children),e.flags|=4096,e)}function Lv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Gf(t.return,e,n)}function Gd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function JT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Rt(t,e,r.children,n),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lv(t,n,e);else if(t.tag===19)Lv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&oc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Gd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&oc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Gd(e,!0,n,null,s);break;case"together":Gd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ku(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ar(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),bi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=Br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function mN(t,e,n){switch(e.tag){case 3:YT(e),Fs();break;case 5:ST(e);break;case 1:Ft(e.type)&&ec(e);break;case 4:Nm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ie(rc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(ke,ke.current&1),e.flags|=128,null):n&e.child.childLanes?XT(t,e,n):(Ie(ke,ke.current&1),t=ar(t,e,n),t!==null?t.sibling:null);Ie(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return JT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,KT(t,e,n)}return ar(t,e,n)}var ZT,tp,eI,tI;ZT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tp=function(){};eI=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,wi(Nn.current);var s=null;switch(n){case"input":i=If(t,i),r=If(t,r),s=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),s=[];break;case"textarea":i=xf(t,i),r=xf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ju)}Af(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ia.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ia.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ce("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};tI=function(t,e,n,r){n!==r&&(e.flags|=4)};function Uo(t,e){if(!Ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function gN(t,e,n){var r=e.pendingProps;switch(Tm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(e),null;case 1:return Ft(e.type)&&Zu(),_t(e),null;case 3:return r=e.stateNode,js(),Re(Vt),Re(It),Pm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(au(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,dn!==null&&(up(dn),dn=null))),tp(t,e),_t(e),null;case 5:km(e);var i=wi(La.current);if(n=e.type,t!==null&&e.stateNode!=null)eI(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return _t(e),null}if(t=wi(Nn.current),au(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Cn]=e,r[Da]=s,t=(e.mode&1)!==0,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(i=0;i<Xo.length;i++)Ce(Xo[i],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":Wy(r,s),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ce("invalid",r);break;case"textarea":Hy(r,s),Ce("invalid",r)}Af(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ou(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ou(r.textContent,a,t),i=["children",""+a]):Ia.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ce("scroll",r)}switch(n){case"input":Jl(r),qy(r,s,!0);break;case"textarea":Jl(r),Gy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ju)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=NE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Cn]=e,t[Da]=r,ZT(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nf(n,r),n){case"dialog":Ce("cancel",t),Ce("close",t),i=r;break;case"iframe":case"object":case"embed":Ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<Xo.length;i++)Ce(Xo[i],t);i=r;break;case"source":Ce("error",t),i=r;break;case"img":case"image":case"link":Ce("error",t),Ce("load",t),i=r;break;case"details":Ce("toggle",t),i=r;break;case"input":Wy(t,r),i=If(t,r),Ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),Ce("invalid",t);break;case"textarea":Hy(t,r),i=xf(t,r),Ce("invalid",t);break;default:i=r}Af(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?bE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&kE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Sa(t,u):typeof u=="number"&&Sa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ia.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ce("scroll",t):u!=null&&am(t,s,u,o))}switch(n){case"input":Jl(t),qy(t,r,!1);break;case"textarea":Jl(t),Gy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Gr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ts(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ts(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ju)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return _t(e),null;case 6:if(t&&e.stateNode!=null)tI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=wi(La.current),wi(Nn.current),au(e)){if(r=e.stateNode,n=e.memoizedProps,r[Cn]=e,(s=r.nodeValue!==n)&&(t=Qt,t!==null))switch(t.tag){case 3:ou(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ou(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Cn]=e,e.stateNode=r}return _t(e),null;case 13:if(Re(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&Ht!==null&&e.mode&1&&!(e.flags&128))vT(),Fs(),e.flags|=98560,s=!1;else if(s=au(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[Cn]=e}else Fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;_t(e),s=!1}else dn!==null&&(up(dn),dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ke.current&1?Ke===0&&(Ke=3):$m())),e.updateQueue!==null&&(e.flags|=4),_t(e),null);case 4:return js(),tp(t,e),t===null&&Pa(e.stateNode.containerInfo),_t(e),null;case 10:return xm(e.type._context),_t(e),null;case 17:return Ft(e.type)&&Zu(),_t(e),null;case 19:if(Re(ke),s=e.memoizedState,s===null)return _t(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Uo(s,!1);else{if(Ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=oc(t),o!==null){for(e.flags|=128,Uo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(ke,ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&je()>zs&&(e.flags|=128,r=!0,Uo(s,!1),e.lanes=4194304)}else{if(!r)if(t=oc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ae)return _t(e),null}else 2*je()-s.renderingStartTime>zs&&n!==1073741824&&(e.flags|=128,r=!0,Uo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=je(),e.sibling=null,n=ke.current,Ie(ke,r?n&1|2:n&1),e):(_t(e),null);case 22:case 23:return zm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Wt&1073741824&&(_t(e),e.subtreeFlags&6&&(e.flags|=8192)):_t(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function _N(t,e){switch(Tm(e),e.tag){case 1:return Ft(e.type)&&Zu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return js(),Re(Vt),Re(It),Pm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return km(e),null;case 13:if(Re(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(ke),null;case 4:return js(),null;case 10:return xm(e.type._context),null;case 22:case 23:return zm(),null;case 24:return null;default:return null}}var cu=!1,wt=!1,yN=typeof WeakSet=="function"?WeakSet:Set,H=null;function ys(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function np(t,e,n){try{n()}catch(r){Le(t,e,r)}}var Mv=!1;function vN(t,e){if(Uf=Qu,t=oT(),wm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,p=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)p=f,f=v;for(;;){if(f===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++d===r&&(u=o),(v=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=v}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(jf={focusedElem:t,selectionRange:n},Qu=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var A=T.memoizedProps,N=T.memoizedState,I=e.stateNode,w=I.getSnapshotBeforeUpdate(e.elementType===e.type?A:cn(e.type,A),N);I.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(D){Le(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return T=Mv,Mv=!1,T}function ca(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&np(e,n,s)}i=i.next}while(i!==r)}}function oh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function rp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function nI(t){var e=t.alternate;e!==null&&(t.alternate=null,nI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Cn],delete e[Da],delete e[$f],delete e[tN],delete e[nN])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function rI(t){return t.tag===5||t.tag===3||t.tag===4}function Vv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||rI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ip(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ju));else if(r!==4&&(t=t.child,t!==null))for(ip(t,e,n),t=t.sibling;t!==null;)ip(t,e,n),t=t.sibling}function sp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(sp(t,e,n),t=t.sibling;t!==null;)sp(t,e,n),t=t.sibling}var st=null,hn=!1;function vr(t,e,n){for(n=n.child;n!==null;)iI(t,e,n),n=n.sibling}function iI(t,e,n){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(Jc,n)}catch{}switch(n.tag){case 5:wt||ys(n,e);case 6:var r=st,i=hn;st=null,vr(t,e,n),st=r,hn=i,st!==null&&(hn?(t=st,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):st.removeChild(n.stateNode));break;case 18:st!==null&&(hn?(t=st,n=n.stateNode,t.nodeType===8?jd(t.parentNode,n):t.nodeType===1&&jd(t,n),Aa(t)):jd(st,n.stateNode));break;case 4:r=st,i=hn,st=n.stateNode.containerInfo,hn=!0,vr(t,e,n),st=r,hn=i;break;case 0:case 11:case 14:case 15:if(!wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&np(n,e,o),i=i.next}while(i!==r)}vr(t,e,n);break;case 1:if(!wt&&(ys(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Le(n,e,a)}vr(t,e,n);break;case 21:vr(t,e,n);break;case 22:n.mode&1?(wt=(r=wt)||n.memoizedState!==null,vr(t,e,n),wt=r):vr(t,e,n);break;default:vr(t,e,n)}}function Fv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new yN),e.forEach(function(r){var i=AN.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function un(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:st=a.stateNode,hn=!1;break e;case 3:st=a.stateNode.containerInfo,hn=!0;break e;case 4:st=a.stateNode.containerInfo,hn=!0;break e}a=a.return}if(st===null)throw Error(j(160));iI(s,o,i),st=null,hn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Le(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)sI(e,t),e=e.sibling}function sI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(un(e,t),In(t),r&4){try{ca(3,t,t.return),oh(3,t)}catch(A){Le(t,t.return,A)}try{ca(5,t,t.return)}catch(A){Le(t,t.return,A)}}break;case 1:un(e,t),In(t),r&512&&n!==null&&ys(n,n.return);break;case 5:if(un(e,t),In(t),r&512&&n!==null&&ys(n,n.return),t.flags&32){var i=t.stateNode;try{Sa(i,"")}catch(A){Le(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&RE(i,s),Nf(a,o);var c=Nf(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?bE(i,f):d==="dangerouslySetInnerHTML"?kE(i,f):d==="children"?Sa(i,f):am(i,d,f,c)}switch(a){case"input":Sf(i,s);break;case"textarea":AE(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Ts(i,!!s.multiple,v,!1):p!==!!s.multiple&&(s.defaultValue!=null?Ts(i,!!s.multiple,s.defaultValue,!0):Ts(i,!!s.multiple,s.multiple?[]:"",!1))}i[Da]=s}catch(A){Le(t,t.return,A)}}break;case 6:if(un(e,t),In(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(A){Le(t,t.return,A)}}break;case 3:if(un(e,t),In(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Aa(e.containerInfo)}catch(A){Le(t,t.return,A)}break;case 4:un(e,t),In(t);break;case 13:un(e,t),In(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(jm=je())),r&4&&Fv(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(wt=(c=wt)||d,un(e,t),wt=c):un(e,t),In(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(H=t,d=t.child;d!==null;){for(f=H=d;H!==null;){switch(p=H,v=p.child,p.tag){case 0:case 11:case 14:case 15:ca(4,p,p.return);break;case 1:ys(p,p.return);var T=p.stateNode;if(typeof T.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(A){Le(r,n,A)}}break;case 5:ys(p,p.return);break;case 22:if(p.memoizedState!==null){jv(f);continue}}v!==null?(v.return=p,H=v):jv(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=PE("display",o))}catch(A){Le(t,t.return,A)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(A){Le(t,t.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:un(e,t),In(t),r&4&&Fv(t);break;case 21:break;default:un(e,t),In(t)}}function In(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(rI(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Sa(i,""),r.flags&=-33);var s=Vv(t);sp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Vv(t);ip(t,a,o);break;default:throw Error(j(161))}}catch(u){Le(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wN(t,e,n){H=t,oI(t)}function oI(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||cu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||wt;a=cu;var c=wt;if(cu=o,(wt=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?Bv(i):u!==null?(u.return=o,H=u):Bv(i);for(;s!==null;)H=s,oI(s),s=s.sibling;H=i,cu=a,wt=c}Uv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Uv(t)}}function Uv(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:wt||oh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!wt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:cn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Iv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Iv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Aa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}wt||e.flags&512&&rp(e)}catch(p){Le(e,e.return,p)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function jv(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Bv(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{oh(4,e)}catch(u){Le(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Le(e,i,u)}}var s=e.return;try{rp(e)}catch(u){Le(e,s,u)}break;case 5:var o=e.return;try{rp(e)}catch(u){Le(e,o,u)}}}catch(u){Le(e,e.return,u)}if(e===t){H=null;break}var a=e.sibling;if(a!==null){a.return=e.return,H=a;break}H=e.return}}var EN=Math.ceil,uc=pr.ReactCurrentDispatcher,Fm=pr.ReactCurrentOwner,nn=pr.ReactCurrentBatchConfig,ce=0,rt=null,$e=null,lt=0,Wt=0,vs=ri(0),Ke=0,Ua=null,bi=0,ah=0,Um=0,ha=null,bt=null,jm=0,zs=1/0,qn=null,cc=!1,op=null,Ur=null,hu=!1,kr=null,hc=0,da=0,ap=null,Pu=-1,bu=0;function At(){return ce&6?je():Pu!==-1?Pu:Pu=je()}function jr(t){return t.mode&1?ce&2&&lt!==0?lt&-lt:iN.transition!==null?(bu===0&&(bu=WE()),bu):(t=pe,t!==0||(t=window.event,t=t===void 0?16:XE(t.type)),t):1}function _n(t,e,n,r){if(50<da)throw da=0,ap=null,Error(j(185));cl(t,n,r),(!(ce&2)||t!==rt)&&(t===rt&&(!(ce&2)&&(ah|=n),Ke===4&&Sr(t,lt)),Ut(t,r),n===1&&ce===0&&!(e.mode&1)&&(zs=je()+500,rh&&ii()))}function Ut(t,e){var n=t.callbackNode;iA(t,e);var r=Ku(t,t===rt?lt:0);if(r===0)n!==null&&Yy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Yy(n),e===1)t.tag===0?rN(zv.bind(null,t)):gT(zv.bind(null,t)),ZA(function(){!(ce&6)&&ii()}),n=null;else{switch(qE(r)){case 1:n=dm;break;case 4:n=zE;break;case 16:n=Gu;break;case 536870912:n=$E;break;default:n=Gu}n=pI(n,aI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function aI(t,e){if(Pu=-1,bu=0,ce&6)throw Error(j(327));var n=t.callbackNode;if(Rs()&&t.callbackNode!==n)return null;var r=Ku(t,t===rt?lt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=dc(t,r);else{e=r;var i=ce;ce|=2;var s=uI();(rt!==t||lt!==e)&&(qn=null,zs=je()+500,Si(t,e));do try{SN();break}catch(a){lI(t,a)}while(!0);Cm(),uc.current=s,ce=i,$e!==null?e=0:(rt=null,lt=0,e=Ke)}if(e!==0){if(e===2&&(i=Of(t),i!==0&&(r=i,e=lp(t,i))),e===1)throw n=Ua,Si(t,0),Sr(t,r),Ut(t,je()),n;if(e===6)Sr(t,r);else{if(i=t.current.alternate,!(r&30)&&!TN(i)&&(e=dc(t,r),e===2&&(s=Of(t),s!==0&&(r=s,e=lp(t,s))),e===1))throw n=Ua,Si(t,0),Sr(t,r),Ut(t,je()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:mi(t,bt,qn);break;case 3:if(Sr(t,r),(r&130023424)===r&&(e=jm+500-je(),10<e)){if(Ku(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){At(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=zf(mi.bind(null,t,bt,qn),e);break}mi(t,bt,qn);break;case 4:if(Sr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-gn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*EN(r/1960))-r,10<r){t.timeoutHandle=zf(mi.bind(null,t,bt,qn),r);break}mi(t,bt,qn);break;case 5:mi(t,bt,qn);break;default:throw Error(j(329))}}}return Ut(t,je()),t.callbackNode===n?aI.bind(null,t):null}function lp(t,e){var n=ha;return t.current.memoizedState.isDehydrated&&(Si(t,e).flags|=256),t=dc(t,e),t!==2&&(e=bt,bt=n,e!==null&&up(e)),t}function up(t){bt===null?bt=t:bt.push.apply(bt,t)}function TN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!wn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sr(t,e){for(e&=~Um,e&=~ah,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-gn(e),r=1<<n;t[n]=-1,e&=~r}}function zv(t){if(ce&6)throw Error(j(327));Rs();var e=Ku(t,0);if(!(e&1))return Ut(t,je()),null;var n=dc(t,e);if(t.tag!==0&&n===2){var r=Of(t);r!==0&&(e=r,n=lp(t,r))}if(n===1)throw n=Ua,Si(t,0),Sr(t,e),Ut(t,je()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,mi(t,bt,qn),Ut(t,je()),null}function Bm(t,e){var n=ce;ce|=1;try{return t(e)}finally{ce=n,ce===0&&(zs=je()+500,rh&&ii())}}function Di(t){kr!==null&&kr.tag===0&&!(ce&6)&&Rs();var e=ce;ce|=1;var n=nn.transition,r=pe;try{if(nn.transition=null,pe=1,t)return t()}finally{pe=r,nn.transition=n,ce=e,!(ce&6)&&ii()}}function zm(){Wt=vs.current,Re(vs)}function Si(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,JA(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(Tm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zu();break;case 3:js(),Re(Vt),Re(It),Pm();break;case 5:km(r);break;case 4:js();break;case 13:Re(ke);break;case 19:Re(ke);break;case 10:xm(r.type._context);break;case 22:case 23:zm()}n=n.return}if(rt=t,$e=t=Br(t.current,null),lt=Wt=e,Ke=0,Ua=null,Um=ah=bi=0,bt=ha=null,vi!==null){for(e=0;e<vi.length;e++)if(n=vi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}vi=null}return t}function lI(t,e){do{var n=$e;try{if(Cm(),Au.current=lc,ac){for(var r=be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ac=!1}if(Pi=0,et=He=be=null,ua=!1,Ma=0,Fm.current=null,n===null||n.return===null){Ke=1,Ua=e,$e=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=lt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Nv(o);if(v!==null){v.flags&=-257,kv(v,o,a,s,e),v.mode&1&&Av(s,c,e),e=v,u=c;var T=e.updateQueue;if(T===null){var A=new Set;A.add(u),e.updateQueue=A}else T.add(u);break e}else{if(!(e&1)){Av(s,c,e),$m();break e}u=Error(j(426))}}else if(Ae&&a.mode&1){var N=Nv(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),kv(N,o,a,s,e),Im(Bs(u,a));break e}}s=u=Bs(u,a),Ke!==4&&(Ke=2),ha===null?ha=[s]:ha.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=qT(s,u,e);Tv(s,I);break e;case 1:a=u;var w=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ur===null||!Ur.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=HT(s,a,e);Tv(s,D);break e}}s=s.return}while(s!==null)}hI(n)}catch(O){e=O,$e===n&&n!==null&&($e=n=n.return);continue}break}while(!0)}function uI(){var t=uc.current;return uc.current=lc,t===null?lc:t}function $m(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),rt===null||!(bi&268435455)&&!(ah&268435455)||Sr(rt,lt)}function dc(t,e){var n=ce;ce|=2;var r=uI();(rt!==t||lt!==e)&&(qn=null,Si(t,e));do try{IN();break}catch(i){lI(t,i)}while(!0);if(Cm(),ce=n,uc.current=r,$e!==null)throw Error(j(261));return rt=null,lt=0,Ke}function IN(){for(;$e!==null;)cI($e)}function SN(){for(;$e!==null&&!QR();)cI($e)}function cI(t){var e=fI(t.alternate,t,Wt);t.memoizedProps=t.pendingProps,e===null?hI(t):$e=e,Fm.current=null}function hI(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_N(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ke=6,$e=null;return}}else if(n=gN(n,e,Wt),n!==null){$e=n;return}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);Ke===0&&(Ke=5)}function mi(t,e,n){var r=pe,i=nn.transition;try{nn.transition=null,pe=1,CN(t,e,n,r)}finally{nn.transition=i,pe=r}return null}function CN(t,e,n,r){do Rs();while(kr!==null);if(ce&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(sA(t,s),t===rt&&($e=rt=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hu||(hu=!0,pI(Gu,function(){return Rs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=nn.transition,nn.transition=null;var o=pe;pe=1;var a=ce;ce|=4,Fm.current=null,vN(t,n),sI(n,t),qA(jf),Qu=!!Uf,jf=Uf=null,t.current=n,wN(n),YR(),ce=a,pe=o,nn.transition=s}else t.current=n;if(hu&&(hu=!1,kr=t,hc=i),s=t.pendingLanes,s===0&&(Ur=null),ZR(n.stateNode),Ut(t,je()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(cc)throw cc=!1,t=op,op=null,t;return hc&1&&t.tag!==0&&Rs(),s=t.pendingLanes,s&1?t===ap?da++:(da=0,ap=t):da=0,ii(),null}function Rs(){if(kr!==null){var t=qE(hc),e=nn.transition,n=pe;try{if(nn.transition=null,pe=16>t?16:t,kr===null)var r=!1;else{if(t=kr,kr=null,hc=0,ce&6)throw Error(j(331));var i=ce;for(ce|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(H=c;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:ca(8,d,s)}var f=d.child;if(f!==null)f.return=d,H=f;else for(;H!==null;){d=H;var p=d.sibling,v=d.return;if(nI(d),d===c){H=null;break}if(p!==null){p.return=v,H=p;break}H=v}}}var T=s.alternate;if(T!==null){var A=T.child;if(A!==null){T.child=null;do{var N=A.sibling;A.sibling=null,A=N}while(A!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ca(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,H=I;break e}H=s.return}}var w=t.current;for(H=w;H!==null;){o=H;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,H=x;else e:for(o=w;H!==null;){if(a=H,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:oh(9,a)}}catch(O){Le(a,a.return,O)}if(a===o){H=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,H=D;break e}H=a.return}}if(ce=i,ii(),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(Jc,t)}catch{}r=!0}return r}finally{pe=n,nn.transition=e}}return!1}function $v(t,e,n){e=Bs(n,e),e=qT(t,e,1),t=Fr(t,e,1),e=At(),t!==null&&(cl(t,1,e),Ut(t,e))}function Le(t,e,n){if(t.tag===3)$v(t,t,n);else for(;e!==null;){if(e.tag===3){$v(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ur===null||!Ur.has(r))){t=Bs(n,t),t=HT(e,t,1),e=Fr(e,t,1),t=At(),e!==null&&(cl(e,1,t),Ut(e,t));break}}e=e.return}}function xN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=At(),t.pingedLanes|=t.suspendedLanes&n,rt===t&&(lt&n)===n&&(Ke===4||Ke===3&&(lt&130023424)===lt&&500>je()-jm?Si(t,0):Um|=n),Ut(t,e)}function dI(t,e){e===0&&(t.mode&1?(e=tu,tu<<=1,!(tu&130023424)&&(tu=4194304)):e=1);var n=At();t=or(t,e),t!==null&&(cl(t,e,n),Ut(t,n))}function RN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),dI(t,n)}function AN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),dI(t,n)}var fI;fI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Vt.current)Ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ot=!1,mN(t,e,n);Ot=!!(t.flags&131072)}else Ot=!1,Ae&&e.flags&1048576&&_T(e,nc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ku(t,e),t=e.pendingProps;var i=Vs(e,It.current);xs(e,n),i=Dm(null,e,r,t,i,n);var s=Om();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ft(r)?(s=!0,ec(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Am(e),i.updater=sh,e.stateNode=i,i._reactInternals=e,Qf(e,r,t,n),e=Jf(null,e,r,!0,s,n)):(e.tag=0,Ae&&s&&Em(e),Rt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ku(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=kN(r),t=cn(r,t),i){case 0:e=Xf(null,e,r,t,n);break e;case 1:e=Dv(null,e,r,t,n);break e;case 11:e=Pv(null,e,r,t,n);break e;case 14:e=bv(null,e,r,cn(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),Xf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),Dv(t,e,r,i,n);case 3:e:{if(YT(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,IT(t,e),sc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Bs(Error(j(423)),e),e=Ov(t,e,r,n,i);break e}else if(r!==i){i=Bs(Error(j(424)),e),e=Ov(t,e,r,n,i);break e}else for(Ht=Vr(e.stateNode.containerInfo.firstChild),Qt=e,Ae=!0,dn=null,n=ET(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fs(),r===i){e=ar(t,e,n);break e}Rt(t,e,r,n)}e=e.child}return e;case 5:return ST(e),t===null&&Hf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Bf(r,i)?o=null:s!==null&&Bf(r,s)&&(e.flags|=32),QT(t,e),Rt(t,e,o,n),e.child;case 6:return t===null&&Hf(e),null;case 13:return XT(t,e,n);case 4:return Nm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Us(e,null,r,n):Rt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),Pv(t,e,r,i,n);case 7:return Rt(t,e,e.pendingProps,n),e.child;case 8:return Rt(t,e,e.pendingProps.children,n),e.child;case 12:return Rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ie(rc,r._currentValue),r._currentValue=o,s!==null)if(wn(s.value,o)){if(s.children===i.children&&!Vt.current){e=ar(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=er(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Gf(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Gf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Rt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,xs(e,n),i=on(i),r=r(i),e.flags|=1,Rt(t,e,r,n),e.child;case 14:return r=e.type,i=cn(r,e.pendingProps),i=cn(r.type,i),bv(t,e,r,i,n);case 15:return GT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),ku(t,e),e.tag=1,Ft(r)?(t=!0,ec(e)):t=!1,xs(e,n),WT(e,r,i),Qf(e,r,i,n),Jf(null,e,r,!0,t,n);case 19:return JT(t,e,n);case 22:return KT(t,e,n)}throw Error(j(156,e.tag))};function pI(t,e){return BE(t,e)}function NN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(t,e,n,r){return new NN(t,e,n,r)}function Wm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kN(t){if(typeof t=="function")return Wm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===um)return 11;if(t===cm)return 14}return 2}function Br(t,e){var n=t.alternate;return n===null?(n=tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Du(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Wm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case us:return Ci(n.children,i,s,e);case lm:o=8,i|=8;break;case vf:return t=tn(12,n,e,i|2),t.elementType=vf,t.lanes=s,t;case wf:return t=tn(13,n,e,i),t.elementType=wf,t.lanes=s,t;case Ef:return t=tn(19,n,e,i),t.elementType=Ef,t.lanes=s,t;case SE:return lh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case TE:o=10;break e;case IE:o=9;break e;case um:o=11;break e;case cm:o=14;break e;case Er:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=tn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ci(t,e,n,r){return t=tn(7,t,r,e),t.lanes=n,t}function lh(t,e,n,r){return t=tn(22,t,r,e),t.elementType=SE,t.lanes=n,t.stateNode={isHidden:!1},t}function Kd(t,e,n){return t=tn(6,t,null,e),t.lanes=n,t}function Qd(t,e,n){return e=tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function PN(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nd(0),this.expirationTimes=Nd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function qm(t,e,n,r,i,s,o,a,u){return t=new PN(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Am(s),t}function bN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ls,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function mI(t){if(!t)return Kr;t=t._reactInternals;e:{if(Gi(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(Ft(n))return mT(t,n,e)}return e}function gI(t,e,n,r,i,s,o,a,u){return t=qm(n,r,!0,t,i,s,o,a,u),t.context=mI(null),n=t.current,r=At(),i=jr(n),s=er(r,i),s.callback=e??null,Fr(n,s,i),t.current.lanes=i,cl(t,i,r),Ut(t,r),t}function uh(t,e,n,r){var i=e.current,s=At(),o=jr(i);return n=mI(n),e.context===null?e.context=n:e.pendingContext=n,e=er(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Fr(i,e,o),t!==null&&(_n(t,i,o,s),Ru(t,i,o)),o}function fc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Hm(t,e){Wv(t,e),(t=t.alternate)&&Wv(t,e)}function DN(){return null}var _I=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gm(t){this._internalRoot=t}ch.prototype.render=Gm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));uh(t,e,null,null)};ch.prototype.unmount=Gm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Di(function(){uh(null,t,null,null)}),e[sr]=null}};function ch(t){this._internalRoot=t}ch.prototype.unstable_scheduleHydration=function(t){if(t){var e=KE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ir.length&&e!==0&&e<Ir[n].priority;n++);Ir.splice(n,0,t),n===0&&YE(t)}};function Km(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function hh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qv(){}function ON(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=fc(o);s.call(c)}}var o=gI(e,r,t,0,null,!1,!1,"",qv);return t._reactRootContainer=o,t[sr]=o.current,Pa(t.nodeType===8?t.parentNode:t),Di(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=fc(u);a.call(c)}}var u=qm(t,0,!1,null,null,!1,!1,"",qv);return t._reactRootContainer=u,t[sr]=u.current,Pa(t.nodeType===8?t.parentNode:t),Di(function(){uh(e,u,n,r)}),u}function dh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=fc(o);a.call(u)}}uh(e,o,t,i)}else o=ON(n,e,t,i,r);return fc(o)}HE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Yo(e.pendingLanes);n!==0&&(fm(e,n|1),Ut(e,je()),!(ce&6)&&(zs=je()+500,ii()))}break;case 13:Di(function(){var r=or(t,1);if(r!==null){var i=At();_n(r,t,1,i)}}),Hm(t,1)}};pm=function(t){if(t.tag===13){var e=or(t,134217728);if(e!==null){var n=At();_n(e,t,134217728,n)}Hm(t,134217728)}};GE=function(t){if(t.tag===13){var e=jr(t),n=or(t,e);if(n!==null){var r=At();_n(n,t,e,r)}Hm(t,e)}};KE=function(){return pe};QE=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};Pf=function(t,e,n){switch(e){case"input":if(Sf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=nh(r);if(!i)throw Error(j(90));xE(r),Sf(r,i)}}}break;case"textarea":AE(t,n);break;case"select":e=n.value,e!=null&&Ts(t,!!n.multiple,e,!1)}};LE=Bm;ME=Di;var LN={usingClientEntryPoint:!1,Events:[dl,fs,nh,DE,OE,Bm]},jo={findFiberByHostInstance:yi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},MN={bundleType:jo.bundleType,version:jo.version,rendererPackageName:jo.rendererPackageName,rendererConfig:jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=UE(t),t===null?null:t.stateNode},findFiberByHostInstance:jo.findFiberByHostInstance||DN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!du.isDisabled&&du.supportsFiber)try{Jc=du.inject(MN),An=du}catch{}}Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=LN;Xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Km(e))throw Error(j(200));return bN(t,e,null,n)};Xt.createRoot=function(t,e){if(!Km(t))throw Error(j(299));var n=!1,r="",i=_I;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=qm(t,1,!1,null,null,n,!1,r,i),t[sr]=e.current,Pa(t.nodeType===8?t.parentNode:t),new Gm(e)};Xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=UE(e),t=t===null?null:t.stateNode,t};Xt.flushSync=function(t){return Di(t)};Xt.hydrate=function(t,e,n){if(!hh(e))throw Error(j(200));return dh(null,t,e,!0,n)};Xt.hydrateRoot=function(t,e,n){if(!Km(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=_I;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=gI(e,null,t,1,n??null,i,!1,s,o),t[sr]=e.current,Pa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ch(e)};Xt.render=function(t,e,n){if(!hh(e))throw Error(j(200));return dh(null,t,e,!1,n)};Xt.unmountComponentAtNode=function(t){if(!hh(t))throw Error(j(40));return t._reactRootContainer?(Di(function(){dh(null,null,t,!1,function(){t._reactRootContainer=null,t[sr]=null})}),!0):!1};Xt.unstable_batchedUpdates=Bm;Xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!hh(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return dh(t,e,n,!1,r)};Xt.version="18.3.1-next-f1338f8080-20240426";function yI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yI)}catch(t){console.error(t)}}yI(),yE.exports=Xt;var VN=yE.exports,vI,Hv=VN;vI=Hv.createRoot,Hv.hydrateRoot;/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ja(){return ja=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ja.apply(this,arguments)}var Pr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Pr||(Pr={}));const Gv="popstate";function FN(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return cp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:EI(i)}return jN(e,n,null,t)}function Qe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function wI(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function UN(){return Math.random().toString(36).substr(2,8)}function Kv(t,e){return{usr:t.state,key:t.key,idx:e}}function cp(t,e,n,r){return n===void 0&&(n=null),ja({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?so(e):e,{state:n,key:e&&e.key||r||UN()})}function EI(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function so(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function jN(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Pr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(ja({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=Pr.Pop;let N=d(),I=N==null?null:N-c;c=N,u&&u({action:a,location:A.location,delta:I})}function p(N,I){a=Pr.Push;let w=cp(A.location,N,I);c=d()+1;let x=Kv(w,c),D=A.createHref(w);try{o.pushState(x,"",D)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;i.location.assign(D)}s&&u&&u({action:a,location:A.location,delta:1})}function v(N,I){a=Pr.Replace;let w=cp(A.location,N,I);c=d();let x=Kv(w,c),D=A.createHref(w);o.replaceState(x,"",D),s&&u&&u({action:a,location:A.location,delta:0})}function T(N){let I=i.location.origin!=="null"?i.location.origin:i.location.href,w=typeof N=="string"?N:EI(N);return w=w.replace(/ $/,"%20"),Qe(I,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,I)}let A={get action(){return a},get location(){return t(i,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Gv,f),u=N,()=>{i.removeEventListener(Gv,f),u=null}},createHref(N){return e(i,N)},createURL:T,encodeLocation(N){let I=T(N);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:p,replace:v,go(N){return o.go(N)}};return A}var Qv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Qv||(Qv={}));function BN(t,e,n){return n===void 0&&(n="/"),zN(t,e,n,!1)}function zN(t,e,n,r){let i=typeof e=="string"?so(e):e,s=SI(i.pathname||"/",n);if(s==null)return null;let o=TI(t);$N(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=ek(s);a=JN(o[u],c,r)}return a}function TI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Qe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=xi([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Qe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),TI(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:YN(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of II(s.path))i(s,o,u)}),e}function II(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=II(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function $N(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:XN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const WN=/^:[\w-]+$/,qN=3,HN=2,GN=1,KN=10,QN=-2,Yv=t=>t==="*";function YN(t,e){let n=t.split("/"),r=n.length;return n.some(Yv)&&(r+=QN),e&&(r+=HN),n.filter(i=>!Yv(i)).reduce((i,s)=>i+(WN.test(s)?qN:s===""?GN:KN),r)}function XN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function JN(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=Xv({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),p=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=Xv({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:xi([s,f.pathname]),pathnameBase:ok(xi([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=xi([s,f.pathnameBase]))}return o}function Xv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=ZN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:p,isOptional:v}=d;if(p==="*"){let A=a[f]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const T=a[f];return v&&!T?c[p]=void 0:c[p]=(T||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function ZN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),wI(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ek(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return wI(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function SI(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function tk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?so(t):t;return{pathname:n?n.startsWith("/")?n:nk(n,e):e,search:ak(r),hash:lk(i)}}function nk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Yd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rk(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ik(t,e){let n=rk(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function sk(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=so(t):(i=ja({},t),Qe(!i.pathname||!i.pathname.includes("?"),Yd("?","pathname","search",i)),Qe(!i.pathname||!i.pathname.includes("#"),Yd("#","pathname","hash",i)),Qe(!i.search||!i.search.includes("#"),Yd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?e[f]:"/"}let u=tk(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const xi=t=>t.join("/").replace(/\/\/+/g,"/"),ok=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ak=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,lk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function uk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const CI=["post","put","patch","delete"];new Set(CI);const ck=["get",...CI];new Set(ck);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ba(){return Ba=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ba.apply(this,arguments)}const Qm=L.createContext(null),hk=L.createContext(null),fh=L.createContext(null),ph=L.createContext(null),oo=L.createContext({outlet:null,matches:[],isDataRoute:!1}),xI=L.createContext(null);function mh(){return L.useContext(ph)!=null}function Ym(){return mh()||Qe(!1),L.useContext(ph).location}function RI(t){L.useContext(fh).static||L.useLayoutEffect(t)}function dk(){let{isDataRoute:t}=L.useContext(oo);return t?Ck():fk()}function fk(){mh()||Qe(!1);let t=L.useContext(Qm),{basename:e,future:n,navigator:r}=L.useContext(fh),{matches:i}=L.useContext(oo),{pathname:s}=Ym(),o=JSON.stringify(ik(i,n.v7_relativeSplatPath)),a=L.useRef(!1);return RI(()=>{a.current=!0}),L.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=sk(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:xi([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}function pk(t,e){return mk(t,e)}function mk(t,e,n,r){mh()||Qe(!1);let{navigator:i}=L.useContext(fh),{matches:s}=L.useContext(oo),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Ym(),d;if(e){var f;let N=typeof e=="string"?so(e):e;u==="/"||(f=N.pathname)!=null&&f.startsWith(u)||Qe(!1),d=N}else d=c;let p=d.pathname||"/",v=p;if(u!=="/"){let N=u.replace(/^\//,"").split("/");v="/"+p.replace(/^\//,"").split("/").slice(N.length).join("/")}let T=BN(t,{pathname:v}),A=wk(T&&T.map(N=>Object.assign({},N,{params:Object.assign({},a,N.params),pathname:xi([u,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:xi([u,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return e&&A?L.createElement(ph.Provider,{value:{location:Ba({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Pr.Pop}},A):A}function gk(){let t=Sk(),e=uk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:i},n):null,null)}const _k=L.createElement(gk,null);class yk extends L.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?L.createElement(oo.Provider,{value:this.props.routeContext},L.createElement(xI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vk(t){let{routeContext:e,match:n,children:r}=t,i=L.useContext(Qm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(oo.Provider,{value:e},r)}function wk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||Qe(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:p,errors:v}=n,T=f.route.loader&&p[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||T){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,p)=>{let v,T=!1,A=null,N=null;n&&(v=a&&f.route.id?a[f.route.id]:void 0,A=f.route.errorElement||_k,u&&(c<0&&p===0?(T=!0,N=null):c===p&&(T=!0,N=f.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,p+1)),w=()=>{let x;return v?x=A:T?x=N:f.route.Component?x=L.createElement(f.route.Component,null):f.route.element?x=f.route.element:x=d,L.createElement(vk,{match:f,routeContext:{outlet:d,matches:I,isDataRoute:n!=null},children:x})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?L.createElement(yk,{location:n.location,revalidation:n.revalidation,component:A,error:v,children:w(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):w()},null)}var AI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(AI||{}),pc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(pc||{});function Ek(t){let e=L.useContext(Qm);return e||Qe(!1),e}function Tk(t){let e=L.useContext(hk);return e||Qe(!1),e}function Ik(t){let e=L.useContext(oo);return e||Qe(!1),e}function NI(t){let e=Ik(),n=e.matches[e.matches.length-1];return n.route.id||Qe(!1),n.route.id}function Sk(){var t;let e=L.useContext(xI),n=Tk(pc.UseRouteError),r=NI(pc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Ck(){let{router:t}=Ek(AI.UseNavigateStable),e=NI(pc.UseNavigateStable),n=L.useRef(!1);return RI(()=>{n.current=!0}),L.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ba({fromRouteId:e},s)))},[t,e])}function hp(t){Qe(!1)}function xk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Pr.Pop,navigator:s,static:o=!1,future:a}=t;mh()&&Qe(!1);let u=e.replace(/^\/*/,"/"),c=L.useMemo(()=>({basename:u,navigator:s,static:o,future:Ba({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=so(r));let{pathname:d="/",search:f="",hash:p="",state:v=null,key:T="default"}=r,A=L.useMemo(()=>{let N=SI(d,u);return N==null?null:{location:{pathname:N,search:f,hash:p,state:v,key:T},navigationType:i}},[u,d,f,p,v,T,i]);return A==null?null:L.createElement(fh.Provider,{value:c},L.createElement(ph.Provider,{children:n,value:A}))}function Rk(t){let{children:e,location:n}=t;return pk(dp(e),n)}new Promise(()=>{});function dp(t,e){e===void 0&&(e=[]);let n=[];return L.Children.forEach(t,(r,i)=>{if(!L.isValidElement(r))return;let s=[...e,i];if(r.type===L.Fragment){n.push.apply(n,dp(r.props.children,s));return}r.type!==hp&&Qe(!1),!r.props.index||!r.props.children||Qe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=dp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Ak="6";try{window.__reactRouterVersion=Ak}catch{}const Nk="startTransition",Jv=xR[Nk];function kk(t){let{basename:e,children:n,future:r,window:i}=t,s=L.useRef();s.current==null&&(s.current=FN({window:i,v5Compat:!0}));let o=s.current,[a,u]=L.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=L.useCallback(f=>{c&&Jv?Jv(()=>u(f)):u(f)},[u,c]);return L.useLayoutEffect(()=>o.listen(d),[o,d]),L.createElement(xk,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var Zv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Zv||(Zv={}));var e0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(e0||(e0={}));const Pk=[{name:"About Us",id:"AboutUs"},{name:"Service",id:"service"},{name:"Newsletter",id:"newsletter"},{name:"Events",id:"events"}],kI="/SkWeb/assets/LOGO_SK-removebg-preview-BoIiuiyF.png";var t0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=function(t,e){if(!t)throw ao(e)},ao=function(t){return new Error("Firebase Database ("+PI.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},bk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Xm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,v=c&63;u||(v=64,o||(p=64)),r.push(n[d],n[f],n[p],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new Dk;const p=s<<2|a>>4;if(r.push(p),c!==64){const v=a<<4&240|c>>2;if(r.push(v),f!==64){const T=c<<6&192|f;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Dk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DI=function(t){const e=bI(t);return Xm.encodeByteArray(e,!0)},mc=function(t){return DI(t).replace(/\./g,"")},gc=function(t){try{return Xm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(t){return OI(void 0,t)}function OI(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Lk(n)||(t[n]=OI(t[n],e[n]));return t}function Lk(t){return t!=="__proto__"}/**
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
 */function Mk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vk=()=>Mk().__FIREBASE_DEFAULTS__,Fk=()=>{if(typeof process>"u"||typeof t0>"u")return;const t=t0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Uk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gc(t[1]);return e&&JSON.parse(e)},gh=()=>{try{return Vk()||Fk()||Uk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},LI=t=>{var e,n;return(n=(e=gh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Jm=t=>{const e=LI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},MI=()=>{var t;return(t=gh())===null||t===void 0?void 0:t.config},VI=t=>{var e;return(e=gh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Zm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[mc(JSON.stringify(n)),mc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function jk(){var t;const e=(t=gh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Bk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function FI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zk(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function UI(){return PI.NODE_ADMIN===!0}function $k(){return!jk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Wk(){try{return typeof indexedDB=="object"}catch{return!1}}function qk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk="FirebaseError";class Mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Hk,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pl.prototype.create)}}class pl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Gk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Mn(i,a,r)}}function Gk(t,e){return t.replace(Kk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Kk=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t){return JSON.parse(t)}function nt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=za(gc(s[0])||""),n=za(gc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Qk=function(t){const e=jI(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Yk=function(t){const e=jI(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function $s(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function fp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _c(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function yc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(n0(s)&&n0(o)){if(!yc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function n0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Jo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Zo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const p=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,d;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):f<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const p=(i<<5|i>>>27)+c+u+d+r[f]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Jk(t,e){const n=new Zk(t,e);return n.subscribe.bind(n)}class Zk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Xd),i.error===void 0&&(i.error=Xd),i.complete===void 0&&(i.complete=Xd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xd(){}function tg(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,B(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},yh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function me(t){return t&&t._delegate?t._delegate:t}class lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class nP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _h;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iP(e))try{this.getOrInitializeService({instanceIdentifier:gi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=gi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gi){return this.instances.has(e)}getOptions(e=gi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=gi){return this.component?this.component.multipleInstances?e:gi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rP(t){return t===gi?void 0:t}function iP(t){return t.instantiationMode==="EAGER"}/**
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
 */class sP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const oP={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},aP=ae.INFO,lP={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},uP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=lP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vh{constructor(e){this.name=e,this._logLevel=aP,this._logHandler=uP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const cP=(t,e)=>e.some(n=>t instanceof n);let r0,i0;function hP(){return r0||(r0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dP(){return i0||(i0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const BI=new WeakMap,pp=new WeakMap,zI=new WeakMap,Jd=new WeakMap,ng=new WeakMap;function fP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(zr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&BI.set(n,t)}).catch(()=>{}),ng.set(e,t),e}function pP(t){if(pp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});pp.set(t,e)}let mp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mP(t){mp=t(mp)}function gP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zd(this),e,...n);return zI.set(r,e.sort?e.sort():[e]),zr(r)}:dP().includes(t)?function(...e){return t.apply(Zd(this),e),zr(BI.get(this))}:function(...e){return zr(t.apply(Zd(this),e))}}function _P(t){return typeof t=="function"?gP(t):(t instanceof IDBTransaction&&pP(t),cP(t,hP())?new Proxy(t,mp):t)}function zr(t){if(t instanceof IDBRequest)return fP(t);if(Jd.has(t))return Jd.get(t);const e=_P(t);return e!==t&&(Jd.set(t,e),ng.set(e,t)),e}const Zd=t=>ng.get(t);function yP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=zr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(zr(o.result),u.oldVersion,u.newVersion,zr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const vP=["get","getKey","getAll","getAllKeys","count"],wP=["put","add","delete","clear"],ef=new Map;function s0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ef.get(e))return ef.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=wP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||vP.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return ef.set(e,s),s}mP(t=>({...t,get:(e,n,r)=>s0(e,n)||t.get(e,n,r),has:(e,n)=>!!s0(e,n)||t.has(e,n)}));/**
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
 */class EP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(TP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function TP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gp="@firebase/app",o0="0.10.8";/**
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
 */const Oi=new vh("@firebase/app"),IP="@firebase/app-compat",SP="@firebase/analytics-compat",CP="@firebase/analytics",xP="@firebase/app-check-compat",RP="@firebase/app-check",AP="@firebase/auth",NP="@firebase/auth-compat",kP="@firebase/database",PP="@firebase/database-compat",bP="@firebase/functions",DP="@firebase/functions-compat",OP="@firebase/installations",LP="@firebase/installations-compat",MP="@firebase/messaging",VP="@firebase/messaging-compat",FP="@firebase/performance",UP="@firebase/performance-compat",jP="@firebase/remote-config",BP="@firebase/remote-config-compat",zP="@firebase/storage",$P="@firebase/storage-compat",WP="@firebase/firestore",qP="@firebase/vertexai-preview",HP="@firebase/firestore-compat",GP="firebase",KP="10.12.5";/**
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
 */const _p="[DEFAULT]",QP={[gp]:"fire-core",[IP]:"fire-core-compat",[CP]:"fire-analytics",[SP]:"fire-analytics-compat",[RP]:"fire-app-check",[xP]:"fire-app-check-compat",[AP]:"fire-auth",[NP]:"fire-auth-compat",[kP]:"fire-rtdb",[PP]:"fire-rtdb-compat",[bP]:"fire-fn",[DP]:"fire-fn-compat",[OP]:"fire-iid",[LP]:"fire-iid-compat",[MP]:"fire-fcm",[VP]:"fire-fcm-compat",[FP]:"fire-perf",[UP]:"fire-perf-compat",[jP]:"fire-rc",[BP]:"fire-rc-compat",[zP]:"fire-gcs",[$P]:"fire-gcs-compat",[WP]:"fire-fst",[HP]:"fire-fst-compat",[qP]:"fire-vertex","fire-js":"fire-js",[GP]:"fire-js-all"};/**
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
 */const vc=new Map,YP=new Map,yp=new Map;function a0(t,e){try{t.container.addComponent(e)}catch(n){Oi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qr(t){const e=t.name;if(yp.has(e))return Oi.debug(`There were multiple attempts to register component ${e}.`),!1;yp.set(e,t);for(const n of vc.values())a0(n,t);for(const n of YP.values())a0(n,t);return!0}function ml(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xn(t){return t.settings!==void 0}/**
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
 */const XP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$r=new pl("app","Firebase",XP);/**
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
 */class JP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $r.create("app-deleted",{appName:this._name})}}/**
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
 */const si=KP;function $I(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_p,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw $r.create("bad-app-name",{appName:String(i)});if(n||(n=MI()),!n)throw $r.create("no-options");const s=vc.get(i);if(s){if(yc(n,s.options)&&yc(r,s.config))return s;throw $r.create("duplicate-app",{appName:i})}const o=new sP(i);for(const u of yp.values())o.addComponent(u);const a=new JP(n,r,o);return vc.set(i,a),a}function wh(t=_p){const e=vc.get(t);if(!e&&t===_p&&MI())return $I();if(!e)throw $r.create("no-app",{appName:t});return e}function rn(t,e,n){var r;let i=(r=QP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Oi.warn(a.join(" "));return}Qr(new lr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ZP="firebase-heartbeat-database",eb=1,$a="firebase-heartbeat-store";let tf=null;function WI(){return tf||(tf=yP(ZP,eb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($a)}catch(n){console.warn(n)}}}}).catch(t=>{throw $r.create("idb-open",{originalErrorMessage:t.message})})),tf}async function tb(t){try{const n=(await WI()).transaction($a),r=await n.objectStore($a).get(qI(t));return await n.done,r}catch(e){if(e instanceof Mn)Oi.warn(e.message);else{const n=$r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Oi.warn(n.message)}}}async function l0(t,e){try{const r=(await WI()).transaction($a,"readwrite");await r.objectStore($a).put(e,qI(t)),await r.done}catch(n){if(n instanceof Mn)Oi.warn(n.message);else{const r=$r.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Oi.warn(r.message)}}}function qI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const nb=1024,rb=30*24*60*60*1e3;class ib{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ob(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=u0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=rb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=u0(),{heartbeatsToSend:r,unsentEntries:i}=sb(this._heartbeatsCache.heartbeats),s=mc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function u0(){return new Date().toISOString().substring(0,10)}function sb(t,e=nb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),c0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),c0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ob{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wk()?qk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return l0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return l0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function c0(t){return mc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function ab(t){Qr(new lr("platform-logger",e=>new EP(e),"PRIVATE")),Qr(new lr("heartbeat",e=>new ib(e),"PRIVATE")),rn(gp,o0,t),rn(gp,o0,"esm2017"),rn("fire-js","")}ab("");var lb="firebase",ub="10.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn(lb,ub,"app");function rg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function HI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cb=HI,GI=new pl("auth","Firebase",HI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=new vh("@firebase/auth");function hb(t,...e){wc.logLevel<=ae.WARN&&wc.warn(`Auth (${si}): ${t}`,...e)}function Ou(t,...e){wc.logLevel<=ae.ERROR&&wc.error(`Auth (${si}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,...e){throw ig(t,...e)}function kn(t,...e){return ig(t,...e)}function KI(t,e,n){const r=Object.assign(Object.assign({},cb()),{[e]:n});return new pl("auth","Firebase",r).create(e,{appName:t.name})}function tr(t){return KI(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ig(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return GI.create(t,...e)}function Y(t,e,...n){if(!t)throw ig(e,...n)}function Yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ou(e),new Error(e)}function ur(t,e){t||Yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function db(){return h0()==="http:"||h0()==="https:"}function h0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(db()||Bk()||"connection"in navigator)?navigator.onLine:!0}function pb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n){this.shortDelay=e,this.longDelay=n,ur(n>e,"Short delay should be less than long delay!"),this.isMobile=eg()||FI()}get(){return fb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(t,e){ur(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=new gl(3e4,6e4);function oi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ai(t,e,n,r,i={}){return YI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=lo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),QI.fetch()(XI(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function YI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},mb),e);try{const i=new yb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw fu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw fu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw fu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw fu(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw KI(t,d,c);En(t,d)}}catch(i){if(i instanceof Mn)throw i;En(t,"network-request-failed",{message:String(i)})}}async function _l(t,e,n,r,i={}){const s=await ai(t,e,n,r,i);return"mfaPendingCredential"in s&&En(t,"multi-factor-auth-required",{_serverResponse:s}),s}function XI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?sg(t.config,i):`${t.config.apiScheme}://${i}`}function _b(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kn(this.auth,"network-request-failed")),gb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=kn(t,e,r);return i.customData._tokenResponse=n,i}function d0(t){return t!==void 0&&t.enterprise!==void 0}class vb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return _b(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function wb(t,e){return ai(t,"GET","/v2/recaptchaConfig",oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eb(t,e){return ai(t,"POST","/v1/accounts:delete",e)}async function JI(t,e){return ai(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Tb(t,e=!1){const n=me(t),r=await n.getIdToken(e),i=og(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:fa(nf(i.auth_time)),issuedAtTime:fa(nf(i.iat)),expirationTime:fa(nf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function nf(t){return Number(t)*1e3}function og(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ou("JWT malformed, contained fewer than 3 sections"),null;try{const i=gc(n);return i?JSON.parse(i):(Ou("Failed to decode base64 JWT payload"),null)}catch(i){return Ou("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function f0(t){const e=og(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mn&&Ib(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ib({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fa(this.lastLoginAt),this.creationTime=fa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ec(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Wa(t,JI(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ZI(s.providerUserInfo):[],a=xb(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new wp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function Cb(t){const e=me(t);await Ec(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xb(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ZI(t){return t.map(e=>{var{providerId:n}=e,r=rg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rb(t,e){const n=await YI(t,{},async()=>{const r=lo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=XI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",QI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ab(t,e){return ai(t,"POST","/v2/accounts:revokeToken",oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):f0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=f0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Rb(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new As;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new As,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=rg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new wp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Wa(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Tb(this,e)}reload(){return Cb(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ec(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xn(this.auth.app))return Promise.reject(tr(this.auth));const e=await this.getIdToken();return await Wa(this,Eb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:x,emailVerified:D,isAnonymous:O,providerData:F,stsTokenManager:S}=n;Y(x&&S,e,"internal-error");const _=As.fromJSON(this.name,S);Y(typeof x=="string",e,"internal-error"),wr(f,e.name),wr(p,e.name),Y(typeof D=="boolean",e,"internal-error"),Y(typeof O=="boolean",e,"internal-error"),wr(v,e.name),wr(T,e.name),wr(A,e.name),wr(N,e.name),wr(I,e.name),wr(w,e.name);const E=new Xn({uid:x,auth:e,email:p,emailVerified:D,displayName:f,isAnonymous:O,photoURL:T,phoneNumber:v,tenantId:A,stsTokenManager:_,createdAt:I,lastLoginAt:w});return F&&Array.isArray(F)&&(E.providerData=F.map(C=>Object.assign({},C))),N&&(E._redirectEventId=N),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new As;i.updateFromServerResponse(n);const s=new Xn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ec(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ZI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new As;a.updateFromIdToken(r);const u=new Xn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new wp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0=new Map;function Jn(t){ur(t instanceof Function,"Expected a class definition");let e=p0.get(t);return e?(ur(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,p0.set(t,e),e)}/**
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
 */class eS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}eS.type="NONE";const m0=eS;/**
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
 */function Lu(t,e,n){return`firebase:${t}:${e}:${n}`}class Ns{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Lu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Lu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ns(Jn(m0),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Jn(m0);const o=Lu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=Xn._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ns(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ns(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sS(e))return"Blackberry";if(oS(e))return"Webos";if(ag(e))return"Safari";if((e.includes("chrome/")||nS(e))&&!e.includes("edge/"))return"Chrome";if(iS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tS(t=ht()){return/firefox\//i.test(t)}function ag(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nS(t=ht()){return/crios\//i.test(t)}function rS(t=ht()){return/iemobile/i.test(t)}function iS(t=ht()){return/android/i.test(t)}function sS(t=ht()){return/blackberry/i.test(t)}function oS(t=ht()){return/webos/i.test(t)}function Eh(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Nb(t=ht()){var e;return Eh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kb(){return zk()&&document.documentMode===10}function aS(t=ht()){return Eh(t)||iS(t)||oS(t)||sS(t)||/windows phone/i.test(t)||rS(t)}function Pb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(t,e=[]){let n;switch(t){case"Browser":n=g0(ht());break;case"Worker":n=`${g0(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${si}/${r}`}/**
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
 */class bb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Db(t,e={}){return ai(t,"GET","/v2/passwordPolicy",oi(t,e))}/**
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
 */const Ob=6;class Lb{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Ob,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _0(this),this.idTokenSubscription=new _0(this),this.beforeStateQueue=new bb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=GI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ns.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await JI(this,{idToken:e}),r=await Xn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(xn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ec(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xn(this.app))return Promise.reject(tr(this));const n=e?me(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xn(this.app)?Promise.reject(tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xn(this.app)?Promise.reject(tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Db(this),n=new Lb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ab(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Ns.create(this,[Jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&hb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ki(t){return me(t)}class _0{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jk(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Th={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Vb(t){Th=t}function uS(t){return Th.loadJS(t)}function Fb(){return Th.recaptchaEnterpriseScript}function Ub(){return Th.gapiScript}function jb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Bb="recaptcha-enterprise",zb="NO_RECAPTCHA";class $b{constructor(e){this.type=Bb,this.auth=Ki(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{wb(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new vb(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;d0(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(zb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&d0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Fb();u.length!==0&&(u+=a),uS(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function y0(t,e,n,r=!1){const i=new $b(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ep(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await y0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await y0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wb(t,e){const n=ml(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(yc(s,e??{}))return i;En(i,"already-initialized")}return n.initialize({options:e})}function qb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Hb(t,e,n){const r=Ki(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=cS(e),{host:o,port:a}=Gb(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Kb()}function cS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Gb(t){const e=cS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:v0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:v0(o)}}}function v0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Kb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,n){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}async function Qb(t,e){return ai(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yb(t,e){return _l(t,"POST","/v1/accounts:signInWithPassword",oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xb(t,e){return _l(t,"POST","/v1/accounts:signInWithEmailLink",oi(t,e))}async function Jb(t,e){return _l(t,"POST","/v1/accounts:signInWithEmailLink",oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends lg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new qa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new qa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ep(e,n,"signInWithPassword",Yb);case"emailLink":return Xb(e,{email:this._email,oobCode:this._password});default:En(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ep(e,r,"signUpPassword",Qb);case"emailLink":return Jb(e,{idToken:n,email:this._email,oobCode:this._password});default:En(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ks(t,e){return _l(t,"POST","/v1/accounts:signInWithIdp",oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb="http://localhost";class Li extends lg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Li(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):En("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=rg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Li(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ks(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ks(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ks(e,n)}buildRequest(){const e={requestUri:Zb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=lo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function t2(t){const e=Jo(Zo(t)).link,n=e?Jo(Zo(e)).deep_link_id:null,r=Jo(Zo(t)).deep_link_id;return(r?Jo(Zo(r)).link:null)||r||n||e||t}class ug{constructor(e){var n,r,i,s,o,a;const u=Jo(Zo(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,f=e2((i=u.mode)!==null&&i!==void 0?i:null);Y(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=t2(e);try{return new ug(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this.providerId=uo.PROVIDER_ID}static credential(e,n){return qa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ug.parseLink(n);return Y(r,"argument-error"),qa._fromEmailAndCode(e,r.code,r.tenantId)}}uo.PROVIDER_ID="password";uo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";uo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yl extends hS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends yl{constructor(){super("facebook.com")}static credential(e){return Li._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends yl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Li._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.GOOGLE_SIGN_IN_METHOD="google.com";Gn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends yl{constructor(){super("github.com")}static credential(e){return Li._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.GITHUB_SIGN_IN_METHOD="github.com";xr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends yl{constructor(){super("twitter.com")}static credential(e,n){return Li._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Rr.credential(n,r)}catch{return null}}}Rr.TWITTER_SIGN_IN_METHOD="twitter.com";Rr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n2(t,e){return _l(t,"POST","/v1/accounts:signUp",oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Xn._fromIdTokenResponse(e,r,i),o=w0(r);return new Mi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=w0(r);return new Mi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function w0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc extends Mn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Tc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Tc(e,n,r,i)}}function dS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Tc._fromErrorAndOperation(t,s,e,r):s})}async function r2(t,e,n=!1){const r=await Wa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mi._forOperation(t,"link",r)}/**
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
 */async function i2(t,e,n=!1){const{auth:r}=t;if(xn(r.app))return Promise.reject(tr(r));const i="reauthenticate";try{const s=await Wa(t,dS(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=og(s.idToken);Y(o,r,"internal-error");const{sub:a}=o;return Y(t.uid===a,r,"user-mismatch"),Mi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&En(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fS(t,e,n=!1){if(xn(t.app))return Promise.reject(tr(t));const r="signIn",i=await dS(t,r,e),s=await Mi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function s2(t,e){return fS(Ki(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pS(t){const e=Ki(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function o2(t,e,n){if(xn(t.app))return Promise.reject(tr(t));const r=Ki(t),o=await Ep(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",n2).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&pS(t),u}),a=await Mi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function a2(t,e,n){return xn(t.app)?Promise.reject(tr(t)):s2(me(t),uo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&pS(t),r})}function l2(t,e,n,r){return me(t).onIdTokenChanged(e,n,r)}function u2(t,e,n){return me(t).beforeAuthStateChanged(e,n)}function cg(t,e,n,r){return me(t).onAuthStateChanged(e,n,r)}function c2(t){return me(t).signOut()}const Ic="__sak";/**
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
 */class mS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ic,"1"),this.storage.removeItem(Ic),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h2(){const t=ht();return ag(t)||Eh(t)}const d2=1e3,f2=10;class gS extends mS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=h2()&&Pb(),this.fallbackToPolling=aS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);kb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,f2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},d2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gS.type="LOCAL";const p2=gS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S extends mS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_S.type="SESSION";const yS=_S;/**
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
 */function m2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ih{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ih(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await m2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ih.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class g2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=hg("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(){return window}function _2(t){Pn().location.href=t}/**
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
 */function vS(){return typeof Pn().WorkerGlobalScope<"u"&&typeof Pn().importScripts=="function"}async function y2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function v2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function w2(){return vS()?self:null}/**
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
 */const wS="firebaseLocalStorageDb",E2=1,Sc="firebaseLocalStorage",ES="fbase_key";class vl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sh(t,e){return t.transaction([Sc],e?"readwrite":"readonly").objectStore(Sc)}function T2(){const t=indexedDB.deleteDatabase(wS);return new vl(t).toPromise()}function Tp(){const t=indexedDB.open(wS,E2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Sc,{keyPath:ES})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Sc)?e(r):(r.close(),await T2(),e(await Tp()))})})}async function E0(t,e,n){const r=Sh(t,!0).put({[ES]:e,value:n});return new vl(r).toPromise()}async function I2(t,e){const n=Sh(t,!1).get(e),r=await new vl(n).toPromise();return r===void 0?null:r.value}function T0(t,e){const n=Sh(t,!0).delete(e);return new vl(n).toPromise()}const S2=800,C2=3;class TS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>C2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ih._getInstance(w2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await y2(),!this.activeServiceWorker)return;this.sender=new g2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||v2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tp();return await E0(e,Ic,"1"),await T0(e,Ic),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>E0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>I2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>T0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Sh(i,!1).getAll();return new vl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),S2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}TS.type="LOCAL";const x2=TS;new gl(3e4,6e4);/**
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
 */function R2(t,e){return e?Jn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class dg extends lg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ks(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ks(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ks(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function A2(t){return fS(t.auth,new dg(t),t.bypassAuthState)}function N2(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),i2(n,new dg(t),t.bypassAuthState)}async function k2(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),r2(n,new dg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return A2;case"linkViaPopup":case"linkViaRedirect":return k2;case"reauthViaPopup":case"reauthViaRedirect":return N2;default:En(this.auth,"internal-error")}}resolve(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2=new gl(2e3,1e4);class ws extends IS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ws.currentPopupAction&&ws.currentPopupAction.cancel(),ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){ur(this.filter.length===1,"Popup operations only handle one event");const e=hg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,P2.get())};e()}}ws.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2="pendingRedirect",Mu=new Map;class D2 extends IS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Mu.get(this.auth._key());if(!e){try{const r=await O2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Mu.set(this.auth._key(),e)}return this.bypassAuthState||Mu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function O2(t,e){const n=V2(e),r=M2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function L2(t,e){Mu.set(t._key(),e)}function M2(t){return Jn(t._redirectPersistence)}function V2(t){return Lu(b2,t.config.apiKey,t.name)}async function F2(t,e,n=!1){if(xn(t.app))return Promise.reject(tr(t));const r=Ki(t),i=R2(r,e),o=await new D2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U2=10*60*1e3;class j2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!B2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!SS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=U2&&this.cachedEventUids.clear(),this.cachedEventUids.has(I0(e))}saveEventToCache(e){this.cachedEventUids.add(I0(e)),this.lastProcessedEventTime=Date.now()}}function I0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function SS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function B2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return SS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z2(t,e={}){return ai(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,W2=/^https?/;async function q2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await z2(t);for(const n of e)try{if(H2(n))return}catch{}En(t,"unauthorized-domain")}function H2(t){const e=vp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!W2.test(n))return!1;if($2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const G2=new gl(3e4,6e4);function S0(){const t=Pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function K2(t){return new Promise((e,n)=>{var r,i,s;function o(){S0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{S0(),n(kn(t,"network-request-failed"))},timeout:G2.get()})}if(!((i=(r=Pn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Pn().gapi)===null||s===void 0)&&s.load)o();else{const a=jb("iframefcb");return Pn()[a]=()=>{gapi.load?o():n(kn(t,"network-request-failed"))},uS(`${Ub()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Vu=null,e})}let Vu=null;function Q2(t){return Vu=Vu||K2(t),Vu}/**
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
 */const Y2=new gl(5e3,15e3),X2="__/auth/iframe",J2="emulator/auth/iframe",Z2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tD(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?sg(e,J2):`https://${t.config.authDomain}/${X2}`,r={apiKey:e.apiKey,appName:t.name,v:si},i=eD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${lo(r).slice(1)}`}async function nD(t){const e=await Q2(t),n=Pn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:tD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Z2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=kn(t,"network-request-failed"),a=Pn().setTimeout(()=>{s(o)},Y2.get());function u(){Pn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const rD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iD=500,sD=600,oD="_blank",aD="http://localhost";class C0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lD(t,e,n,r=iD,i=sD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},rD),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ht().toLowerCase();n&&(a=nS(c)?oD:n),tS(c)&&(e=e||aD,u.scrollbars="yes");const d=Object.entries(u).reduce((p,[v,T])=>`${p}${v}=${T},`,"");if(Nb(c)&&a!=="_self")return uD(e||"",a),new C0(null);const f=window.open(e||"",a,d);Y(f,t,"popup-blocked");try{f.focus()}catch{}return new C0(f)}function uD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const cD="__/auth/handler",hD="emulator/auth/handler",dD=encodeURIComponent("fac");async function x0(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:si,eventId:i};if(e instanceof hS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof yl){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${dD}=${encodeURIComponent(u)}`:"";return`${fD(t)}?${lo(a).slice(1)}${c}`}function fD({config:t}){return t.emulator?sg(t,hD):`https://${t.authDomain}/${cD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="webStorageSupport";class pD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yS,this._completeRedirectFn=F2,this._overrideRedirectResult=L2}async _openPopup(e,n,r,i){var s;ur((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await x0(e,n,r,vp(),i);return lD(e,o,hg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await x0(e,n,r,vp(),i);return _2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ur(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await nD(e),r=new j2(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rf,{type:rf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[rf];o!==void 0&&n(!!o),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=q2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return aS()||ag()||Eh()}}const mD=pD;var R0="@firebase/auth",A0="1.7.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _D(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yD(t){Qr(new lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lS(t)},c=new Mb(r,i,s,u);return qb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qr(new lr("auth-internal",e=>{const n=Ki(e.getProvider("auth").getImmediate());return(r=>new gD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(R0,A0,_D(t)),rn(R0,A0,"esm2017")}/**
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
 */const vD=5*60,wD=VI("authIdTokenMaxAge")||vD;let N0=null;const ED=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wD)return;const i=n==null?void 0:n.token;N0!==i&&(N0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ch(t=wh()){const e=ml(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Wb(t,{popupRedirectResolver:mD,persistence:[x2,p2,yS]}),r=VI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=ED(s.toString());u2(n,o,()=>o(n.currentUser)),l2(n,a=>o(a))}}const i=LI("auth");return i&&Hb(n,`http://${i}`),n}function TD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Vb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=kn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",TD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yD("Browser");var k0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ri,CS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,_){function E(){}E.prototype=_.prototype,S.D=_.prototype,S.prototype=new E,S.prototype.constructor=S,S.C=function(C,k,P){for(var R=Array(arguments.length-2),q=2;q<arguments.length;q++)R[q-2]=arguments[q];return _.prototype[k].apply(C,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,_,E){E||(E=0);var C=Array(16);if(typeof _=="string")for(var k=0;16>k;++k)C[k]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(k=0;16>k;++k)C[k]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=S.g[0],E=S.g[1],k=S.g[2];var P=S.g[3],R=_+(P^E&(k^P))+C[0]+3614090360&4294967295;_=E+(R<<7&4294967295|R>>>25),R=P+(k^_&(E^k))+C[1]+3905402710&4294967295,P=_+(R<<12&4294967295|R>>>20),R=k+(E^P&(_^E))+C[2]+606105819&4294967295,k=P+(R<<17&4294967295|R>>>15),R=E+(_^k&(P^_))+C[3]+3250441966&4294967295,E=k+(R<<22&4294967295|R>>>10),R=_+(P^E&(k^P))+C[4]+4118548399&4294967295,_=E+(R<<7&4294967295|R>>>25),R=P+(k^_&(E^k))+C[5]+1200080426&4294967295,P=_+(R<<12&4294967295|R>>>20),R=k+(E^P&(_^E))+C[6]+2821735955&4294967295,k=P+(R<<17&4294967295|R>>>15),R=E+(_^k&(P^_))+C[7]+4249261313&4294967295,E=k+(R<<22&4294967295|R>>>10),R=_+(P^E&(k^P))+C[8]+1770035416&4294967295,_=E+(R<<7&4294967295|R>>>25),R=P+(k^_&(E^k))+C[9]+2336552879&4294967295,P=_+(R<<12&4294967295|R>>>20),R=k+(E^P&(_^E))+C[10]+4294925233&4294967295,k=P+(R<<17&4294967295|R>>>15),R=E+(_^k&(P^_))+C[11]+2304563134&4294967295,E=k+(R<<22&4294967295|R>>>10),R=_+(P^E&(k^P))+C[12]+1804603682&4294967295,_=E+(R<<7&4294967295|R>>>25),R=P+(k^_&(E^k))+C[13]+4254626195&4294967295,P=_+(R<<12&4294967295|R>>>20),R=k+(E^P&(_^E))+C[14]+2792965006&4294967295,k=P+(R<<17&4294967295|R>>>15),R=E+(_^k&(P^_))+C[15]+1236535329&4294967295,E=k+(R<<22&4294967295|R>>>10),R=_+(k^P&(E^k))+C[1]+4129170786&4294967295,_=E+(R<<5&4294967295|R>>>27),R=P+(E^k&(_^E))+C[6]+3225465664&4294967295,P=_+(R<<9&4294967295|R>>>23),R=k+(_^E&(P^_))+C[11]+643717713&4294967295,k=P+(R<<14&4294967295|R>>>18),R=E+(P^_&(k^P))+C[0]+3921069994&4294967295,E=k+(R<<20&4294967295|R>>>12),R=_+(k^P&(E^k))+C[5]+3593408605&4294967295,_=E+(R<<5&4294967295|R>>>27),R=P+(E^k&(_^E))+C[10]+38016083&4294967295,P=_+(R<<9&4294967295|R>>>23),R=k+(_^E&(P^_))+C[15]+3634488961&4294967295,k=P+(R<<14&4294967295|R>>>18),R=E+(P^_&(k^P))+C[4]+3889429448&4294967295,E=k+(R<<20&4294967295|R>>>12),R=_+(k^P&(E^k))+C[9]+568446438&4294967295,_=E+(R<<5&4294967295|R>>>27),R=P+(E^k&(_^E))+C[14]+3275163606&4294967295,P=_+(R<<9&4294967295|R>>>23),R=k+(_^E&(P^_))+C[3]+4107603335&4294967295,k=P+(R<<14&4294967295|R>>>18),R=E+(P^_&(k^P))+C[8]+1163531501&4294967295,E=k+(R<<20&4294967295|R>>>12),R=_+(k^P&(E^k))+C[13]+2850285829&4294967295,_=E+(R<<5&4294967295|R>>>27),R=P+(E^k&(_^E))+C[2]+4243563512&4294967295,P=_+(R<<9&4294967295|R>>>23),R=k+(_^E&(P^_))+C[7]+1735328473&4294967295,k=P+(R<<14&4294967295|R>>>18),R=E+(P^_&(k^P))+C[12]+2368359562&4294967295,E=k+(R<<20&4294967295|R>>>12),R=_+(E^k^P)+C[5]+4294588738&4294967295,_=E+(R<<4&4294967295|R>>>28),R=P+(_^E^k)+C[8]+2272392833&4294967295,P=_+(R<<11&4294967295|R>>>21),R=k+(P^_^E)+C[11]+1839030562&4294967295,k=P+(R<<16&4294967295|R>>>16),R=E+(k^P^_)+C[14]+4259657740&4294967295,E=k+(R<<23&4294967295|R>>>9),R=_+(E^k^P)+C[1]+2763975236&4294967295,_=E+(R<<4&4294967295|R>>>28),R=P+(_^E^k)+C[4]+1272893353&4294967295,P=_+(R<<11&4294967295|R>>>21),R=k+(P^_^E)+C[7]+4139469664&4294967295,k=P+(R<<16&4294967295|R>>>16),R=E+(k^P^_)+C[10]+3200236656&4294967295,E=k+(R<<23&4294967295|R>>>9),R=_+(E^k^P)+C[13]+681279174&4294967295,_=E+(R<<4&4294967295|R>>>28),R=P+(_^E^k)+C[0]+3936430074&4294967295,P=_+(R<<11&4294967295|R>>>21),R=k+(P^_^E)+C[3]+3572445317&4294967295,k=P+(R<<16&4294967295|R>>>16),R=E+(k^P^_)+C[6]+76029189&4294967295,E=k+(R<<23&4294967295|R>>>9),R=_+(E^k^P)+C[9]+3654602809&4294967295,_=E+(R<<4&4294967295|R>>>28),R=P+(_^E^k)+C[12]+3873151461&4294967295,P=_+(R<<11&4294967295|R>>>21),R=k+(P^_^E)+C[15]+530742520&4294967295,k=P+(R<<16&4294967295|R>>>16),R=E+(k^P^_)+C[2]+3299628645&4294967295,E=k+(R<<23&4294967295|R>>>9),R=_+(k^(E|~P))+C[0]+4096336452&4294967295,_=E+(R<<6&4294967295|R>>>26),R=P+(E^(_|~k))+C[7]+1126891415&4294967295,P=_+(R<<10&4294967295|R>>>22),R=k+(_^(P|~E))+C[14]+2878612391&4294967295,k=P+(R<<15&4294967295|R>>>17),R=E+(P^(k|~_))+C[5]+4237533241&4294967295,E=k+(R<<21&4294967295|R>>>11),R=_+(k^(E|~P))+C[12]+1700485571&4294967295,_=E+(R<<6&4294967295|R>>>26),R=P+(E^(_|~k))+C[3]+2399980690&4294967295,P=_+(R<<10&4294967295|R>>>22),R=k+(_^(P|~E))+C[10]+4293915773&4294967295,k=P+(R<<15&4294967295|R>>>17),R=E+(P^(k|~_))+C[1]+2240044497&4294967295,E=k+(R<<21&4294967295|R>>>11),R=_+(k^(E|~P))+C[8]+1873313359&4294967295,_=E+(R<<6&4294967295|R>>>26),R=P+(E^(_|~k))+C[15]+4264355552&4294967295,P=_+(R<<10&4294967295|R>>>22),R=k+(_^(P|~E))+C[6]+2734768916&4294967295,k=P+(R<<15&4294967295|R>>>17),R=E+(P^(k|~_))+C[13]+1309151649&4294967295,E=k+(R<<21&4294967295|R>>>11),R=_+(k^(E|~P))+C[4]+4149444226&4294967295,_=E+(R<<6&4294967295|R>>>26),R=P+(E^(_|~k))+C[11]+3174756917&4294967295,P=_+(R<<10&4294967295|R>>>22),R=k+(_^(P|~E))+C[2]+718787259&4294967295,k=P+(R<<15&4294967295|R>>>17),R=E+(P^(k|~_))+C[9]+3951481745&4294967295,S.g[0]=S.g[0]+_&4294967295,S.g[1]=S.g[1]+(k+(R<<21&4294967295|R>>>11))&4294967295,S.g[2]=S.g[2]+k&4294967295,S.g[3]=S.g[3]+P&4294967295}r.prototype.u=function(S,_){_===void 0&&(_=S.length);for(var E=_-this.blockSize,C=this.B,k=this.h,P=0;P<_;){if(k==0)for(;P<=E;)i(this,S,P),P+=this.blockSize;if(typeof S=="string"){for(;P<_;)if(C[k++]=S.charCodeAt(P++),k==this.blockSize){i(this,C),k=0;break}}else for(;P<_;)if(C[k++]=S[P++],k==this.blockSize){i(this,C),k=0;break}}this.h=k,this.o+=_},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var _=1;_<S.length-8;++_)S[_]=0;var E=8*this.o;for(_=S.length-8;_<S.length;++_)S[_]=E&255,E/=256;for(this.u(S),S=Array(16),_=E=0;4>_;++_)for(var C=0;32>C;C+=8)S[E++]=this.g[_]>>>C&255;return S};function s(S,_){var E=a;return Object.prototype.hasOwnProperty.call(E,S)?E[S]:E[S]=_(S)}function o(S,_){this.h=_;for(var E=[],C=!0,k=S.length-1;0<=k;k--){var P=S[k]|0;C&&P==_||(E[k]=P,C=!1)}this.g=E}var a={};function u(S){return-128<=S&&128>S?s(S,function(_){return new o([_|0],0>_?-1:0)}):new o([S|0],0>S?-1:0)}function c(S){if(isNaN(S)||!isFinite(S))return f;if(0>S)return N(c(-S));for(var _=[],E=1,C=0;S>=E;C++)_[C]=S/E|0,E*=4294967296;return new o(_,0)}function d(S,_){if(S.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(S.charAt(0)=="-")return N(d(S.substring(1),_));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(_,8)),C=f,k=0;k<S.length;k+=8){var P=Math.min(8,S.length-k),R=parseInt(S.substring(k,k+P),_);8>P?(P=c(Math.pow(_,P)),C=C.j(P).add(c(R))):(C=C.j(E),C=C.add(c(R)))}return C}var f=u(0),p=u(1),v=u(16777216);t=o.prototype,t.m=function(){if(A(this))return-N(this).m();for(var S=0,_=1,E=0;E<this.g.length;E++){var C=this.i(E);S+=(0<=C?C:4294967296+C)*_,_*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(T(this))return"0";if(A(this))return"-"+N(this).toString(S);for(var _=c(Math.pow(S,6)),E=this,C="";;){var k=D(E,_).g;E=I(E,k.j(_));var P=((0<E.g.length?E.g[0]:E.h)>>>0).toString(S);if(E=k,T(E))return P+C;for(;6>P.length;)P="0"+P;C=P+C}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function T(S){if(S.h!=0)return!1;for(var _=0;_<S.g.length;_++)if(S.g[_]!=0)return!1;return!0}function A(S){return S.h==-1}t.l=function(S){return S=I(this,S),A(S)?-1:T(S)?0:1};function N(S){for(var _=S.g.length,E=[],C=0;C<_;C++)E[C]=~S.g[C];return new o(E,~S.h).add(p)}t.abs=function(){return A(this)?N(this):this},t.add=function(S){for(var _=Math.max(this.g.length,S.g.length),E=[],C=0,k=0;k<=_;k++){var P=C+(this.i(k)&65535)+(S.i(k)&65535),R=(P>>>16)+(this.i(k)>>>16)+(S.i(k)>>>16);C=R>>>16,P&=65535,R&=65535,E[k]=R<<16|P}return new o(E,E[E.length-1]&-2147483648?-1:0)};function I(S,_){return S.add(N(_))}t.j=function(S){if(T(this)||T(S))return f;if(A(this))return A(S)?N(this).j(N(S)):N(N(this).j(S));if(A(S))return N(this.j(N(S)));if(0>this.l(v)&&0>S.l(v))return c(this.m()*S.m());for(var _=this.g.length+S.g.length,E=[],C=0;C<2*_;C++)E[C]=0;for(C=0;C<this.g.length;C++)for(var k=0;k<S.g.length;k++){var P=this.i(C)>>>16,R=this.i(C)&65535,q=S.i(k)>>>16,J=S.i(k)&65535;E[2*C+2*k]+=R*J,w(E,2*C+2*k),E[2*C+2*k+1]+=P*J,w(E,2*C+2*k+1),E[2*C+2*k+1]+=R*q,w(E,2*C+2*k+1),E[2*C+2*k+2]+=P*q,w(E,2*C+2*k+2)}for(C=0;C<_;C++)E[C]=E[2*C+1]<<16|E[2*C];for(C=_;C<2*_;C++)E[C]=0;return new o(E,0)};function w(S,_){for(;(S[_]&65535)!=S[_];)S[_+1]+=S[_]>>>16,S[_]&=65535,_++}function x(S,_){this.g=S,this.h=_}function D(S,_){if(T(_))throw Error("division by zero");if(T(S))return new x(f,f);if(A(S))return _=D(N(S),_),new x(N(_.g),N(_.h));if(A(_))return _=D(S,N(_)),new x(N(_.g),_.h);if(30<S.g.length){if(A(S)||A(_))throw Error("slowDivide_ only works with positive integers.");for(var E=p,C=_;0>=C.l(S);)E=O(E),C=O(C);var k=F(E,1),P=F(C,1);for(C=F(C,2),E=F(E,2);!T(C);){var R=P.add(C);0>=R.l(S)&&(k=k.add(E),P=R),C=F(C,1),E=F(E,1)}return _=I(S,k.j(_)),new x(k,_)}for(k=f;0<=S.l(_);){for(E=Math.max(1,Math.floor(S.m()/_.m())),C=Math.ceil(Math.log(E)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),P=c(E),R=P.j(_);A(R)||0<R.l(S);)E-=C,P=c(E),R=P.j(_);T(P)&&(P=p),k=k.add(P),S=I(S,R)}return new x(k,S)}t.A=function(S){return D(this,S).h},t.and=function(S){for(var _=Math.max(this.g.length,S.g.length),E=[],C=0;C<_;C++)E[C]=this.i(C)&S.i(C);return new o(E,this.h&S.h)},t.or=function(S){for(var _=Math.max(this.g.length,S.g.length),E=[],C=0;C<_;C++)E[C]=this.i(C)|S.i(C);return new o(E,this.h|S.h)},t.xor=function(S){for(var _=Math.max(this.g.length,S.g.length),E=[],C=0;C<_;C++)E[C]=this.i(C)^S.i(C);return new o(E,this.h^S.h)};function O(S){for(var _=S.g.length+1,E=[],C=0;C<_;C++)E[C]=S.i(C)<<1|S.i(C-1)>>>31;return new o(E,S.h)}function F(S,_){var E=_>>5;_%=32;for(var C=S.g.length-E,k=[],P=0;P<C;P++)k[P]=0<_?S.i(P+E)>>>_|S.i(P+E+1)<<32-_:S.i(P+E);return new o(k,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,CS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Ri=o}).apply(typeof k0<"u"?k0:typeof self<"u"?self:typeof window<"u"?window:{});var pu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xS,RS,ea,AS,Fu,Ip,NS,kS,PS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,m){return l==Array.prototype||l==Object.prototype||(l[h]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof pu=="object"&&pu];for(var h=0;h<l.length;++h){var m=l[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var m=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var b=l[y];if(!(b in m))break e;m=m[b]}l=l[l.length-1],y=m[l],h=h(y),h!=y&&h!=null&&e(m,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var m=0,y=!1,b={next:function(){if(!y&&m<l.length){var M=m++;return{value:h(M,l[M]),done:!1}}return y=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,m){return l.call.apply(l.bind,arguments)}function f(l,h,m){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,y),l.apply(h,b)}}return function(){return l.apply(h,arguments)}}function p(l,h,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,p.apply(null,arguments)}function v(l,h){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function T(l,h){function m(){}m.prototype=h.prototype,l.aa=h.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(y,b,M){for(var z=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)z[_e-2]=arguments[_e];return h.prototype[b].apply(y,z)}}function A(l){const h=l.length;if(0<h){const m=Array(h);for(let y=0;y<h;y++)m[y]=l[y];return m}return[]}function N(l,h){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(u(y)){const b=l.length||0,M=y.length||0;l.length=b+M;for(let z=0;z<M;z++)l[b+z]=y[z]}else l.push(y)}}class I{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function w(l){return/^[\s\xa0]*$/.test(l)}function x(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function D(l){return D[" "](l),l}D[" "]=function(){};var O=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function F(l,h,m){for(const y in l)h.call(m,l[y],y,l)}function S(l,h){for(const m in l)h.call(void 0,l[m],m,l)}function _(l){const h={};for(const m in l)h[m]=l[m];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,h){let m,y;for(let b=1;b<arguments.length;b++){y=arguments[b];for(m in y)l[m]=y[m];for(let M=0;M<E.length;M++)m=E[M],Object.prototype.hasOwnProperty.call(y,m)&&(l[m]=y[m])}}function k(l){var h=1;l=l.split(":");const m=[];for(;0<h&&l.length;)m.push(l.shift()),h--;return l.length&&m.push(l.join(":")),m}function P(l){a.setTimeout(()=>{throw l},0)}function R(){var l=Q;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class q{constructor(){this.h=this.g=null}add(h,m){const y=J.get();y.set(h,m),this.h?this.h.next=y:this.g=y,this.h=y}}var J=new I(()=>new we,l=>l.reset());class we{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Xe,W=!1,Q=new q,ne=()=>{const l=a.Promise.resolve(void 0);Xe=()=>{l.then(Ne)}};var Ne=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(m){P(m)}var h=J;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}W=!1};function ge(){this.s=this.s,this.C=this.C}ge.prototype.s=!1,ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var Fn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,h),a.removeEventListener("test",m,h)}catch{}return l}();function Un(l,h){if(Ue.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(O){e:{try{D(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else m=="mouseover"?h=l.fromElement:m=="mouseout"&&(h=l.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:jn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Un.aa.h.call(this)}}T(Un,Ue);var jn={2:"touch",3:"pen",4:"mouse"};Un.prototype.h=function(){Un.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Bn="closure_listenable_"+(1e6*Math.random()|0),bx=0;function Dx(l,h,m,y,b){this.listener=l,this.proxy=null,this.src=h,this.type=m,this.capture=!!y,this.ha=b,this.key=++bx,this.da=this.fa=!1}function Dl(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ol(l){this.src=l,this.g={},this.h=0}Ol.prototype.add=function(l,h,m,y,b){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var z=nd(l,h,y,b);return-1<z?(h=l[z],m||(h.fa=!1)):(h=new Dx(h,this.src,M,!!y,b),h.fa=m,l.push(h)),h};function td(l,h){var m=h.type;if(m in l.g){var y=l.g[m],b=Array.prototype.indexOf.call(y,h,void 0),M;(M=0<=b)&&Array.prototype.splice.call(y,b,1),M&&(Dl(h),l.g[m].length==0&&(delete l.g[m],l.h--))}}function nd(l,h,m,y){for(var b=0;b<l.length;++b){var M=l[b];if(!M.da&&M.listener==h&&M.capture==!!m&&M.ha==y)return b}return-1}var rd="closure_lm_"+(1e6*Math.random()|0),id={};function U_(l,h,m,y,b){if(Array.isArray(h)){for(var M=0;M<h.length;M++)U_(l,h[M],m,y,b);return null}return m=z_(m),l&&l[Bn]?l.K(h,m,c(y)?!!y.capture:!!y,b):Ox(l,h,m,!1,y,b)}function Ox(l,h,m,y,b,M){if(!h)throw Error("Invalid event type");var z=c(b)?!!b.capture:!!b,_e=od(l);if(_e||(l[rd]=_e=new Ol(l)),m=_e.add(h,m,y,z,M),m.proxy)return m;if(y=Lx(),m.proxy=y,y.src=l,y.listener=m,l.addEventListener)Fn||(b=z),b===void 0&&(b=!1),l.addEventListener(h.toString(),y,b);else if(l.attachEvent)l.attachEvent(B_(h.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Lx(){function l(m){return h.call(l.src,l.listener,m)}const h=Mx;return l}function j_(l,h,m,y,b){if(Array.isArray(h))for(var M=0;M<h.length;M++)j_(l,h[M],m,y,b);else y=c(y)?!!y.capture:!!y,m=z_(m),l&&l[Bn]?(l=l.i,h=String(h).toString(),h in l.g&&(M=l.g[h],m=nd(M,m,y,b),-1<m&&(Dl(M[m]),Array.prototype.splice.call(M,m,1),M.length==0&&(delete l.g[h],l.h--)))):l&&(l=od(l))&&(h=l.g[h.toString()],l=-1,h&&(l=nd(h,m,y,b)),(m=-1<l?h[l]:null)&&sd(m))}function sd(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[Bn])td(h.i,l);else{var m=l.type,y=l.proxy;h.removeEventListener?h.removeEventListener(m,y,l.capture):h.detachEvent?h.detachEvent(B_(m),y):h.addListener&&h.removeListener&&h.removeListener(y),(m=od(h))?(td(m,l),m.h==0&&(m.src=null,h[rd]=null)):Dl(l)}}}function B_(l){return l in id?id[l]:id[l]="on"+l}function Mx(l,h){if(l.da)l=!0;else{h=new Un(h,this);var m=l.listener,y=l.ha||l.src;l.fa&&sd(l),l=m.call(y,h)}return l}function od(l){return l=l[rd],l instanceof Ol?l:null}var ad="__closure_events_fn_"+(1e9*Math.random()>>>0);function z_(l){return typeof l=="function"?l:(l[ad]||(l[ad]=function(h){return l.handleEvent(h)}),l[ad])}function ft(){ge.call(this),this.i=new Ol(this),this.M=this,this.F=null}T(ft,ge),ft.prototype[Bn]=!0,ft.prototype.removeEventListener=function(l,h,m,y){j_(this,l,h,m,y)};function St(l,h){var m,y=l.F;if(y)for(m=[];y;y=y.F)m.push(y);if(l=l.M,y=h.type||h,typeof h=="string")h=new Ue(h,l);else if(h instanceof Ue)h.target=h.target||l;else{var b=h;h=new Ue(y,l),C(h,b)}if(b=!0,m)for(var M=m.length-1;0<=M;M--){var z=h.g=m[M];b=Ll(z,y,!0,h)&&b}if(z=h.g=l,b=Ll(z,y,!0,h)&&b,b=Ll(z,y,!1,h)&&b,m)for(M=0;M<m.length;M++)z=h.g=m[M],b=Ll(z,y,!1,h)&&b}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var m=l.g[h],y=0;y<m.length;y++)Dl(m[y]);delete l.g[h],l.h--}}this.F=null},ft.prototype.K=function(l,h,m,y){return this.i.add(String(l),h,!1,m,y)},ft.prototype.L=function(l,h,m,y){return this.i.add(String(l),h,!0,m,y)};function Ll(l,h,m,y){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,M=0;M<h.length;++M){var z=h[M];if(z&&!z.da&&z.capture==m){var _e=z.listener,it=z.ha||z.src;z.fa&&td(l.i,z),b=_e.call(it,y)!==!1&&b}}return b&&!y.defaultPrevented}function $_(l,h,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function W_(l){l.g=$_(()=>{l.g=null,l.i&&(l.i=!1,W_(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class Vx extends ge{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:W_(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vo(l){ge.call(this),this.h=l,this.g={}}T(vo,ge);var q_=[];function H_(l){F(l.g,function(h,m){this.g.hasOwnProperty(m)&&sd(h)},l),l.g={}}vo.prototype.N=function(){vo.aa.N.call(this),H_(this)},vo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ld=a.JSON.stringify,Fx=a.JSON.parse,Ux=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function ud(){}ud.prototype.h=null;function G_(l){return l.h||(l.h=l.i())}function K_(){}var wo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cd(){Ue.call(this,"d")}T(cd,Ue);function hd(){Ue.call(this,"c")}T(hd,Ue);var ci={},Q_=null;function Ml(){return Q_=Q_||new ft}ci.La="serverreachability";function Y_(l){Ue.call(this,ci.La,l)}T(Y_,Ue);function Eo(l){const h=Ml();St(h,new Y_(h))}ci.STAT_EVENT="statevent";function X_(l,h){Ue.call(this,ci.STAT_EVENT,l),this.stat=h}T(X_,Ue);function Ct(l){const h=Ml();St(h,new X_(h,l))}ci.Ma="timingevent";function J_(l,h){Ue.call(this,ci.Ma,l),this.size=h}T(J_,Ue);function To(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function Io(){this.g=!0}Io.prototype.xa=function(){this.g=!1};function jx(l,h,m,y,b,M){l.info(function(){if(l.g)if(M)for(var z="",_e=M.split("&"),it=0;it<_e.length;it++){var he=_e[it].split("=");if(1<he.length){var pt=he[0];he=he[1];var mt=pt.split("_");z=2<=mt.length&&mt[1]=="type"?z+(pt+"="+he+"&"):z+(pt+"=redacted&")}}else z=null;else z=M;return"XMLHTTP REQ ("+y+") [attempt "+b+"]: "+h+`
`+m+`
`+z})}function Bx(l,h,m,y,b,M,z){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+b+"]: "+h+`
`+m+`
`+M+" "+z})}function Zi(l,h,m,y){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+$x(l,m)+(y?" "+y:"")})}function zx(l,h){l.info(function(){return"TIMEOUT: "+h})}Io.prototype.info=function(){};function $x(l,h){if(!l.g)return h;if(!h)return null;try{var m=JSON.parse(h);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var y=m[l];if(!(2>y.length)){var b=y[1];if(Array.isArray(b)&&!(1>b.length)){var M=b[0];if(M!="noop"&&M!="stop"&&M!="close")for(var z=1;z<b.length;z++)b[z]=""}}}}return ld(m)}catch{return h}}var Vl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Z_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},dd;function Fl(){}T(Fl,ud),Fl.prototype.g=function(){return new XMLHttpRequest},Fl.prototype.i=function(){return{}},dd=new Fl;function gr(l,h,m,y){this.j=l,this.i=h,this.l=m,this.R=y||1,this.U=new vo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ey}function ey(){this.i=null,this.g="",this.h=!1}var ty={},fd={};function pd(l,h,m){l.L=1,l.v=zl(zn(h)),l.m=m,l.P=!0,ny(l,null)}function ny(l,h){l.F=Date.now(),Ul(l),l.A=zn(l.v);var m=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),gy(m.i,"t",y),l.C=0,m=l.j.J,l.h=new ey,l.g=Oy(l.j,m?h:null,!l.m),0<l.O&&(l.M=new Vx(p(l.Y,l,l.g),l.O)),h=l.U,m=l.g,y=l.ca;var b="readystatechange";Array.isArray(b)||(b&&(q_[0]=b.toString()),b=q_);for(var M=0;M<b.length;M++){var z=U_(m,b[M],y||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),Eo(),jx(l.i,l.u,l.A,l.l,l.R,l.m)}gr.prototype.ca=function(l){l=l.target;const h=this.M;h&&$n(l)==3?h.j():this.Y(l)},gr.prototype.Y=function(l){try{if(l==this.g)e:{const mt=$n(this.g);var h=this.g.Ba();const ns=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||Iy(this.g)))){this.J||mt!=4||h==7||(h==8||0>=ns?Eo(3):Eo(2)),md(this);var m=this.g.Z();this.X=m;t:if(ry(this)){var y=Iy(this.g);l="";var b=y.length,M=$n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hi(this),So(this);var z="";break t}this.h.i=new a.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,l+=this.h.i.decode(y[h],{stream:!(M&&h==b-1)});y.length=0,this.h.g+=l,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=m==200,Bx(this.i,this.u,this.A,this.l,this.R,mt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var _e,it=this.g;if((_e=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(_e)){var he=_e;break t}}he=null}if(m=he)Zi(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gd(this,m);else{this.o=!1,this.s=3,Ct(12),hi(this),So(this);break e}}if(this.P){m=!0;let ln;for(;!this.J&&this.C<z.length;)if(ln=Wx(this,z),ln==fd){mt==4&&(this.s=4,Ct(14),m=!1),Zi(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==ty){this.s=4,Ct(15),Zi(this.i,this.l,z,"[Invalid Chunk]"),m=!1;break}else Zi(this.i,this.l,ln,null),gd(this,ln);if(ry(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||z.length!=0||this.h.h||(this.s=1,Ct(16),m=!1),this.o=this.o&&m,!m)Zi(this.i,this.l,z,"[Invalid Chunked Response]"),hi(this),So(this);else if(0<z.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Td(pt),pt.M=!0,Ct(11))}}else Zi(this.i,this.l,z,null),gd(this,z);mt==4&&hi(this),this.o&&!this.J&&(mt==4?ky(this.j,this):(this.o=!1,Ul(this)))}else aR(this.g),m==400&&0<z.indexOf("Unknown SID")?(this.s=3,Ct(12)):(this.s=0,Ct(13)),hi(this),So(this)}}}catch{}finally{}};function ry(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Wx(l,h){var m=l.C,y=h.indexOf(`
`,m);return y==-1?fd:(m=Number(h.substring(m,y)),isNaN(m)?ty:(y+=1,y+m>h.length?fd:(h=h.slice(y,y+m),l.C=y+m,h)))}gr.prototype.cancel=function(){this.J=!0,hi(this)};function Ul(l){l.S=Date.now()+l.I,iy(l,l.I)}function iy(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=To(p(l.ba,l),h)}function md(l){l.B&&(a.clearTimeout(l.B),l.B=null)}gr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(zx(this.i,this.A),this.L!=2&&(Eo(),Ct(17)),hi(this),this.s=2,So(this)):iy(this,this.S-l)};function So(l){l.j.G==0||l.J||ky(l.j,l)}function hi(l){md(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,H_(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function gd(l,h){try{var m=l.j;if(m.G!=0&&(m.g==l||_d(m.h,l))){if(!l.K&&_d(m.h,l)&&m.G==3){try{var y=m.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var b=y;if(b[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Gl(m),ql(m);else break e;Ed(m),Ct(18)}}else m.za=b[1],0<m.za-m.T&&37500>b[2]&&m.F&&m.v==0&&!m.C&&(m.C=To(p(m.Za,m),6e3));if(1>=ay(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else fi(m,11)}else if((l.K||m.g==l)&&Gl(m),!w(h))for(b=m.Da.g.parse(h),h=0;h<b.length;h++){let he=b[h];if(m.T=he[0],he=he[1],m.G==2)if(he[0]=="c"){m.K=he[1],m.ia=he[2];const pt=he[3];pt!=null&&(m.la=pt,m.j.info("VER="+m.la));const mt=he[4];mt!=null&&(m.Aa=mt,m.j.info("SVER="+m.Aa));const ns=he[5];ns!=null&&typeof ns=="number"&&0<ns&&(y=1.5*ns,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const ln=l.g;if(ln){const Ql=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ql){var M=y.h;M.g||Ql.indexOf("spdy")==-1&&Ql.indexOf("quic")==-1&&Ql.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(yd(M,M.h),M.h=null))}if(y.D){const Id=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;Id&&(y.ya=Id,Se(y.I,y.D,Id))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var z=l;if(y.qa=Dy(y,y.J?y.ia:null,y.W),z.K){ly(y.h,z);var _e=z,it=y.L;it&&(_e.I=it),_e.B&&(md(_e),Ul(_e)),y.g=z}else Ay(y);0<m.i.length&&Hl(m)}else he[0]!="stop"&&he[0]!="close"||fi(m,7);else m.G==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?fi(m,7):wd(m):he[0]!="noop"&&m.l&&m.l.ta(he),m.v=0)}}Eo(4)}catch{}}var qx=class{constructor(l,h){this.g=l,this.map=h}};function sy(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function oy(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ay(l){return l.h?1:l.g?l.g.size:0}function _d(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function yd(l,h){l.g?l.g.add(h):l.h=h}function ly(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}sy.prototype.cancel=function(){if(this.i=uy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function uy(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const m of l.g.values())h=h.concat(m.D);return h}return A(l.i)}function Hx(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],m=l.length,y=0;y<m;y++)h.push(l[y]);return h}h=[],m=0;for(y in l)h[m++]=l[y];return h}function Gx(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var m=0;m<l;m++)h.push(m);return h}h=[],m=0;for(const y in l)h[m++]=y;return h}}}function cy(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var m=Gx(l),y=Hx(l),b=y.length,M=0;M<b;M++)h.call(void 0,y[M],m&&m[M],l)}var hy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kx(l,h){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var y=l[m].indexOf("="),b=null;if(0<=y){var M=l[m].substring(0,y);b=l[m].substring(y+1)}else M=l[m];h(M,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function di(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof di){this.h=l.h,jl(this,l.j),this.o=l.o,this.g=l.g,Bl(this,l.s),this.l=l.l;var h=l.i,m=new Ro;m.i=h.i,h.g&&(m.g=new Map(h.g),m.h=h.h),dy(this,m),this.m=l.m}else l&&(h=String(l).match(hy))?(this.h=!1,jl(this,h[1]||"",!0),this.o=Co(h[2]||""),this.g=Co(h[3]||"",!0),Bl(this,h[4]),this.l=Co(h[5]||"",!0),dy(this,h[6]||"",!0),this.m=Co(h[7]||"")):(this.h=!1,this.i=new Ro(null,this.h))}di.prototype.toString=function(){var l=[],h=this.j;h&&l.push(xo(h,fy,!0),":");var m=this.g;return(m||h=="file")&&(l.push("//"),(h=this.o)&&l.push(xo(h,fy,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(xo(m,m.charAt(0)=="/"?Xx:Yx,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",xo(m,Zx)),l.join("")};function zn(l){return new di(l)}function jl(l,h,m){l.j=m?Co(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Bl(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function dy(l,h,m){h instanceof Ro?(l.i=h,eR(l.i,l.h)):(m||(h=xo(h,Jx)),l.i=new Ro(h,l.h))}function Se(l,h,m){l.i.set(h,m)}function zl(l){return Se(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Co(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function xo(l,h,m){return typeof l=="string"?(l=encodeURI(l).replace(h,Qx),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Qx(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var fy=/[#\/\?@]/g,Yx=/[#\?:]/g,Xx=/[#\?]/g,Jx=/[#\?@]/g,Zx=/#/g;function Ro(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function _r(l){l.g||(l.g=new Map,l.h=0,l.i&&Kx(l.i,function(h,m){l.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=Ro.prototype,t.add=function(l,h){_r(this),this.i=null,l=es(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(h),this.h+=1,this};function py(l,h){_r(l),h=es(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function my(l,h){return _r(l),h=es(l,h),l.g.has(h)}t.forEach=function(l,h){_r(this),this.g.forEach(function(m,y){m.forEach(function(b){l.call(h,b,y,this)},this)},this)},t.na=function(){_r(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),m=[];for(let y=0;y<h.length;y++){const b=l[y];for(let M=0;M<b.length;M++)m.push(h[y])}return m},t.V=function(l){_r(this);let h=[];if(typeof l=="string")my(this,l)&&(h=h.concat(this.g.get(es(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)h=h.concat(l[m])}return h},t.set=function(l,h){return _r(this),this.i=null,l=es(this,l),my(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function gy(l,h,m){py(l,h),0<m.length&&(l.i=null,l.g.set(es(l,h),A(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var m=0;m<h.length;m++){var y=h[m];const M=encodeURIComponent(String(y)),z=this.V(y);for(y=0;y<z.length;y++){var b=M;z[y]!==""&&(b+="="+encodeURIComponent(String(z[y]))),l.push(b)}}return this.i=l.join("&")};function es(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function eR(l,h){h&&!l.j&&(_r(l),l.i=null,l.g.forEach(function(m,y){var b=y.toLowerCase();y!=b&&(py(this,y),gy(this,b,m))},l)),l.j=h}function tR(l,h){const m=new Io;if(a.Image){const y=new Image;y.onload=v(yr,m,"TestLoadImage: loaded",!0,h,y),y.onerror=v(yr,m,"TestLoadImage: error",!1,h,y),y.onabort=v(yr,m,"TestLoadImage: abort",!1,h,y),y.ontimeout=v(yr,m,"TestLoadImage: timeout",!1,h,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else h(!1)}function nR(l,h){const m=new Io,y=new AbortController,b=setTimeout(()=>{y.abort(),yr(m,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:y.signal}).then(M=>{clearTimeout(b),M.ok?yr(m,"TestPingServer: ok",!0,h):yr(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),yr(m,"TestPingServer: error",!1,h)})}function yr(l,h,m,y,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),y(m)}catch{}}function rR(){this.g=new Ux}function iR(l,h,m){const y=m||"";try{cy(l,function(b,M){let z=b;c(b)&&(z=ld(b)),h.push(y+M+"="+encodeURIComponent(z))})}catch(b){throw h.push(y+"type="+encodeURIComponent("_badmap")),b}}function Ao(l){this.l=l.Ub||null,this.j=l.eb||!1}T(Ao,ud),Ao.prototype.g=function(){return new $l(this.l,this.j)},Ao.prototype.i=function(l){return function(){return l}}({});function $l(l,h){ft.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T($l,ft),t=$l.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,ko(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,No(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,ko(this)),this.g&&(this.readyState=3,ko(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;_y(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function _y(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?No(this):ko(this),this.readyState==3&&_y(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,No(this))},t.Qa=function(l){this.g&&(this.response=l,No(this))},t.ga=function(){this.g&&No(this)};function No(l){l.readyState=4,l.l=null,l.j=null,l.v=null,ko(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=h.next();return l.join(`\r
`)};function ko(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty($l.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function yy(l){let h="";return F(l,function(m,y){h+=y,h+=":",h+=m,h+=`\r
`}),h}function vd(l,h,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=yy(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):Se(l,h,m))}function Oe(l){ft.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Oe,ft);var sR=/^https?$/i,oR=["POST","PUT"];t=Oe.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():dd.g(),this.v=this.o?G_(this.o):G_(dd),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(M){vy(this,M);return}if(l=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var b in y)m.set(b,y[b]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const M of y.keys())m.set(M,y.get(M));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(M=>M.toLowerCase()=="content-type"),b=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(oR,h,void 0))||y||b||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,z]of m)this.g.setRequestHeader(M,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ty(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){vy(this,M)}};function vy(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,wy(l),Wl(l)}function wy(l){l.A||(l.A=!0,St(l,"complete"),St(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,St(this,"complete"),St(this,"abort"),Wl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wl(this,!0)),Oe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ey(this):this.bb())},t.bb=function(){Ey(this)};function Ey(l){if(l.h&&typeof o<"u"&&(!l.v[1]||$n(l)!=4||l.Z()!=2)){if(l.u&&$n(l)==4)$_(l.Ea,0,l);else if(St(l,"readystatechange"),$n(l)==4){l.h=!1;try{const z=l.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var y;if(y=z===0){var b=String(l.D).match(hy)[1]||null;!b&&a.self&&a.self.location&&(b=a.self.location.protocol.slice(0,-1)),y=!sR.test(b?b.toLowerCase():"")}m=y}if(m)St(l,"complete"),St(l,"success");else{l.m=6;try{var M=2<$n(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",wy(l)}}finally{Wl(l)}}}}function Wl(l,h){if(l.g){Ty(l);const m=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||St(l,"ready");try{m.onreadystatechange=y}catch{}}}function Ty(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function $n(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<$n(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),Fx(h)}};function Iy(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function aR(l){const h={};l=(l.g&&2<=$n(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(w(l[y]))continue;var m=k(l[y]);const b=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const M=h[b]||[];h[b]=M,M.push(m)}S(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Po(l,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||h}function Sy(l){this.Aa=0,this.i=[],this.j=new Io,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Po("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Po("baseRetryDelayMs",5e3,l),this.cb=Po("retryDelaySeedMs",1e4,l),this.Wa=Po("forwardChannelMaxRetries",2,l),this.wa=Po("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new sy(l&&l.concurrentRequestLimit),this.Da=new rR,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Sy.prototype,t.la=8,t.G=1,t.connect=function(l,h,m,y){Ct(0),this.W=l,this.H=h||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=Dy(this,null,this.W),Hl(this)};function wd(l){if(Cy(l),l.G==3){var h=l.U++,m=zn(l.I);if(Se(m,"SID",l.K),Se(m,"RID",h),Se(m,"TYPE","terminate"),bo(l,m),h=new gr(l,l.j,h),h.L=2,h.v=zl(zn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=h.v,m=!0),m||(h.g=Oy(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ul(h)}by(l)}function ql(l){l.g&&(Td(l),l.g.cancel(),l.g=null)}function Cy(l){ql(l),l.u&&(a.clearTimeout(l.u),l.u=null),Gl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Hl(l){if(!oy(l.h)&&!l.s){l.s=!0;var h=l.Ga;Xe||ne(),W||(Xe(),W=!0),Q.add(h,l),l.B=0}}function lR(l,h){return ay(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=To(p(l.Ga,l,h),Py(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const b=new gr(this,this.j,l);let M=this.o;if(this.S&&(M?(M=_(M),C(M,this.S)):M=this.S),this.m!==null||this.O||(b.H=M,M=null),this.P)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=Ry(this,b,h),m=zn(this.I),Se(m,"RID",l),Se(m,"CVER",22),this.D&&Se(m,"X-HTTP-Session-Id",this.D),bo(this,m),M&&(this.O?h="headers="+encodeURIComponent(String(yy(M)))+"&"+h:this.m&&vd(m,this.m,M)),yd(this.h,b),this.Ua&&Se(m,"TYPE","init"),this.P?(Se(m,"$req",h),Se(m,"SID","null"),b.T=!0,pd(b,m,null)):pd(b,m,h),this.G=2}}else this.G==3&&(l?xy(this,l):this.i.length==0||oy(this.h)||xy(this))};function xy(l,h){var m;h?m=h.l:m=l.U++;const y=zn(l.I);Se(y,"SID",l.K),Se(y,"RID",m),Se(y,"AID",l.T),bo(l,y),l.m&&l.o&&vd(y,l.m,l.o),m=new gr(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),h&&(l.i=h.D.concat(l.i)),h=Ry(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),yd(l.h,m),pd(m,y,h)}function bo(l,h){l.H&&F(l.H,function(m,y){Se(h,y,m)}),l.l&&cy({},function(m,y){Se(h,y,m)})}function Ry(l,h,m){m=Math.min(l.i.length,m);var y=l.l?p(l.l.Na,l.l,l):null;e:{var b=l.i;let M=-1;for(;;){const z=["count="+m];M==-1?0<m?(M=b[0].g,z.push("ofs="+M)):M=0:z.push("ofs="+M);let _e=!0;for(let it=0;it<m;it++){let he=b[it].g;const pt=b[it].map;if(he-=M,0>he)M=Math.max(0,b[it].g-100),_e=!1;else try{iR(pt,z,"req"+he+"_")}catch{y&&y(pt)}}if(_e){y=z.join("&");break e}}}return l=l.i.splice(0,m),h.D=l,y}function Ay(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;Xe||ne(),W||(Xe(),W=!0),Q.add(h,l),l.v=0}}function Ed(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=To(p(l.Fa,l),Py(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Ny(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=To(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ct(10),ql(this),Ny(this))};function Td(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Ny(l){l.g=new gr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=zn(l.qa);Se(h,"RID","rpc"),Se(h,"SID",l.K),Se(h,"AID",l.T),Se(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&Se(h,"TO",l.ja),Se(h,"TYPE","xmlhttp"),bo(l,h),l.m&&l.o&&vd(h,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=zl(zn(h)),m.m=null,m.P=!0,ny(m,l)}t.Za=function(){this.C!=null&&(this.C=null,ql(this),Ed(this),Ct(19))};function Gl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function ky(l,h){var m=null;if(l.g==h){Gl(l),Td(l),l.g=null;var y=2}else if(_d(l.h,h))m=h.D,ly(l.h,h),y=1;else return;if(l.G!=0){if(h.o)if(y==1){m=h.m?h.m.length:0,h=Date.now()-h.F;var b=l.B;y=Ml(),St(y,new J_(y,m)),Hl(l)}else Ay(l);else if(b=h.s,b==3||b==0&&0<h.X||!(y==1&&lR(l,h)||y==2&&Ed(l)))switch(m&&0<m.length&&(h=l.h,h.i=h.i.concat(m)),b){case 1:fi(l,5);break;case 4:fi(l,10);break;case 3:fi(l,6);break;default:fi(l,2)}}}function Py(l,h){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*h}function fi(l,h){if(l.j.info("Error code "+h),h==2){var m=p(l.fb,l),y=l.Xa;const b=!y;y=new di(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||jl(y,"https"),zl(y),b?tR(y.toString(),m):nR(y.toString(),m)}else Ct(2);l.G=0,l.l&&l.l.sa(h),by(l),Cy(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function by(l){if(l.G=0,l.ka=[],l.l){const h=uy(l.h);(h.length!=0||l.i.length!=0)&&(N(l.ka,h),N(l.ka,l.i),l.h.i.length=0,A(l.i),l.i.length=0),l.l.ra()}}function Dy(l,h,m){var y=m instanceof di?zn(m):new di(m);if(y.g!="")h&&(y.g=h+"."+y.g),Bl(y,y.s);else{var b=a.location;y=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var M=new di(null);y&&jl(M,y),h&&(M.g=h),b&&Bl(M,b),m&&(M.l=m),y=M}return m=l.D,h=l.ya,m&&h&&Se(y,m,h),Se(y,"VER",l.la),bo(l,y),y}function Oy(l,h,m){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Oe(new Ao({eb:m})):new Oe(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ly(){}t=Ly.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Kl(){}Kl.prototype.g=function(l,h){return new $t(l,h)};function $t(l,h){ft.call(this),this.g=new Sy(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!w(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new ts(this)}T($t,ft),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){wd(this.g)},$t.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=ld(l),l=m);h.i.push(new qx(h.Ya++,l)),h.G==3&&Hl(h)},$t.prototype.N=function(){this.g.l=null,delete this.j,wd(this.g),delete this.g,$t.aa.N.call(this)};function My(l){cd.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const m in h){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}T(My,cd);function Vy(){hd.call(this),this.status=1}T(Vy,hd);function ts(l){this.g=l}T(ts,Ly),ts.prototype.ua=function(){St(this.g,"a")},ts.prototype.ta=function(l){St(this.g,new My(l))},ts.prototype.sa=function(l){St(this.g,new Vy)},ts.prototype.ra=function(){St(this.g,"b")},Kl.prototype.createWebChannel=Kl.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,PS=function(){return new Kl},kS=function(){return Ml()},NS=ci,Ip={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vl.NO_ERROR=0,Vl.TIMEOUT=8,Vl.HTTP_ERROR=6,Fu=Vl,Z_.COMPLETE="complete",AS=Z_,K_.EventType=wo,wo.OPEN="a",wo.CLOSE="b",wo.ERROR="c",wo.MESSAGE="d",ft.prototype.listen=ft.prototype.K,ea=K_,RS=Ao,Oe.prototype.listenOnce=Oe.prototype.L,Oe.prototype.getLastError=Oe.prototype.Ka,Oe.prototype.getLastErrorCode=Oe.prototype.Ba,Oe.prototype.getStatus=Oe.prototype.Z,Oe.prototype.getResponseJson=Oe.prototype.Oa,Oe.prototype.getResponseText=Oe.prototype.oa,Oe.prototype.send=Oe.prototype.ea,Oe.prototype.setWithCredentials=Oe.prototype.Ha,xS=Oe}).apply(typeof pu<"u"?pu:typeof self<"u"?self:typeof window<"u"?window:{});const P0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Vi=new vh("@firebase/firestore");function Bo(){return Vi.logLevel}function G(t,...e){if(Vi.logLevel<=ae.DEBUG){const n=e.map(fg);Vi.debug(`Firestore (${co}): ${t}`,...n)}}function cr(t,...e){if(Vi.logLevel<=ae.ERROR){const n=e.map(fg);Vi.error(`Firestore (${co}): ${t}`,...n)}}function Ws(t,...e){if(Vi.logLevel<=ae.WARN){const n=e.map(fg);Vi.warn(`Firestore (${co}): ${t}`,...n)}}function fg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${co}) INTERNAL ASSERTION FAILED: `+t;throw cr(e),new Error(e)}function ye(t,e){t||Z()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ID{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class SD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class CD{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new nr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new nr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new nr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new bS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new vt(e)}}class xD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class RD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new xD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class AD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ND{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string"),this.R=n.token,new AD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=kD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function qs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Ye(0,0))}static max(){return new ee(new Ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ha.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ha?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends Ha{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const PD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends Ha{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return PD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new $(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new $(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Te.fromString(e))}static fromName(e){return new K(Te.fromString(e).popFirst(5))}static empty(){return new K(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Te(e.slice()))}}function bD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new Ye(n+1,0):new Ye(n,r));return new Yr(i,K.empty(),e)}function DD(t){return new Yr(t.readTime,t.key,-1)}class Yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yr(ee.min(),K.empty(),-1)}static max(){return new Yr(ee.max(),K.empty(),-1)}}function OD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wl(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==LD)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function VD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function El(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class pg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}pg.oe=-1;function xh(t){return t==null}function Cc(t){return t===0&&1/t==-1/0}function FD(t){return typeof t=="number"&&Number.isInteger(t)&&!Cc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function OS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qe=class Sp{constructor(e,n){this.comparator=e,this.root=n||Wr.EMPTY}insert(e,n){return new Sp(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Wr.BLACK,null,null))}remove(e){return new Sp(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Wr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mu(this.root,e,this.comparator,!1)}getReverseIterator(){return new mu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mu(this.root,e,this.comparator,!0)}},mu=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Wr=class Wn{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Wn.RED,this.left=i??Wn.EMPTY,this.right=s??Wn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Wn(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Wn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Wn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Wn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Wn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}};Wr.EMPTY=null,Wr.RED=!0,Wr.BLACK=!1;Wr.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Wr(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new D0(this.data.getIterator())}getIteratorFrom(e){return new D0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class D0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Gt([])}unionWith(e){let n=new ut(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class LS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new LS("Invalid base64 string: "+s):s}}(e);return new dt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const UD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xr(t){if(ye(!!t),typeof t=="string"){let e=0;const n=UD.exec(t);if(ye(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fi(t){return typeof t=="string"?dt.fromBase64String(t):dt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function mg(t){const e=t.mapValue.fields.__previous_value__;return Rh(e)?mg(e):e}function Ga(t){const e=Xr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Ka{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ka("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ka&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ui(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Rh(t)?4:BD(t)?9007199254740991:10:Z()}function On(t,e){if(t===e)return!0;const n=Ui(t);if(n!==Ui(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ga(t).isEqual(Ga(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Xr(i.timestampValue),a=Xr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Fi(i.bytesValue).isEqual(Fi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ze(i.geoPointValue.latitude)===ze(s.geoPointValue.latitude)&&ze(i.geoPointValue.longitude)===ze(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ze(i.integerValue)===ze(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ze(i.doubleValue),a=ze(s.doubleValue);return o===a?Cc(o)===Cc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return qs(t.arrayValue.values||[],e.arrayValue.values||[],On);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(b0(o)!==b0(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!On(o[u],a[u])))return!1;return!0}(t,e);default:return Z()}}function Qa(t,e){return(t.values||[]).find(n=>On(n,e))!==void 0}function Hs(t,e){if(t===e)return 0;const n=Ui(t),r=Ui(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ze(s.integerValue||s.doubleValue),u=ze(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return O0(t.timestampValue,e.timestampValue);case 4:return O0(Ga(t),Ga(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Fi(s),u=Fi(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=de(a[c],u[c]);if(d!==0)return d}return de(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=de(ze(s.latitude),ze(o.latitude));return a!==0?a:de(ze(s.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const d=Hs(a[c],u[c]);if(d)return d}return de(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===gu.mapValue&&o===gu.mapValue)return 0;if(s===gu.mapValue)return 1;if(o===gu.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const p=de(u[f],d[f]);if(p!==0)return p;const v=Hs(a[u[f]],c[d[f]]);if(v!==0)return v}return de(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Z()}}function O0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=Xr(t),r=Xr(e),i=de(n.seconds,r.seconds);return i!==0?i:de(n.nanos,r.nanos)}function Gs(t){return Cp(t)}function Cp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Xr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Cp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Cp(n.fields[o])}`;return i+"}"}(t.mapValue):Z()}function xc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function xp(t){return!!t&&"integerValue"in t}function gg(t){return!!t&&"arrayValue"in t}function L0(t){return!!t&&"nullValue"in t}function M0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Uu(t){return!!t&&"mapValue"in t}function pa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=pa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=pa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function BD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Uu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=pa(n)}setAll(e){let n=at.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=pa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Uu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return On(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Uu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Qi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Dt(pa(this.value))}}function MS(t){const e=[];return Qi(t.fields,(n,r)=>{const i=new at([n]);if(Uu(r)){const s=MS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Gt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ks{constructor(e,n){this.position=e,this.inclusive=n}}function V0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Hs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function F0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!On(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ya{constructor(e,n="asc"){this.field=e,this.dir=n}}function zD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class VS{}class We extends VS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new WD(e,n,r):n==="array-contains"?new GD(e,r):n==="in"?new KD(e,r):n==="not-in"?new QD(e,r):n==="array-contains-any"?new YD(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new qD(e,r):new HD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Hs(n,this.value)):n!==null&&Ui(this.value)===Ui(n)&&this.matchesComparison(Hs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tn extends VS{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Tn(e,n)}matches(e){return FS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function FS(t){return t.op==="and"}function US(t){return $D(t)&&FS(t)}function $D(t){for(const e of t.filters)if(e instanceof Tn)return!1;return!0}function Rp(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+Gs(t.value);if(US(t))return t.filters.map(e=>Rp(e)).join(",");{const e=t.filters.map(n=>Rp(n)).join(",");return`${t.op}(${e})`}}function jS(t,e){return t instanceof We?function(r,i){return i instanceof We&&r.op===i.op&&r.field.isEqual(i.field)&&On(r.value,i.value)}(t,e):t instanceof Tn?function(r,i){return i instanceof Tn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&jS(o,i.filters[a]),!0):!1}(t,e):void Z()}function BS(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${Gs(n.value)}`}(t):t instanceof Tn?function(n){return n.op.toString()+" {"+n.getFilters().map(BS).join(" ,")+"}"}(t):"Filter"}class WD extends We{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class qD extends We{constructor(e,n){super(e,"in",n),this.keys=zS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class HD extends We{constructor(e,n){super(e,"not-in",n),this.keys=zS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function zS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class GD extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return gg(n)&&Qa(n.arrayValue,this.value)}}class KD extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qa(this.value.arrayValue,n)}}class QD extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Qa(this.value.arrayValue,n)}}class YD extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!gg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Qa(this.value.arrayValue,r))}}/**
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
 */class XD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function U0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new XD(t,e,n,r,i,s,o)}function _g(t){const e=te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Rp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),xh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Gs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Gs(r)).join(",")),e.ue=n}return e.ue}function yg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!jS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!F0(t.startAt,e.startAt)&&F0(t.endAt,e.endAt)}function Ap(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function JD(t,e,n,r,i,s,o,a){return new Yi(t,e,n,r,i,s,o,a)}function Ah(t){return new Yi(t)}function j0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function vg(t){return t.collectionGroup!==null}function Ps(t){const e=te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ut(at.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ya(s,r))}),n.has(at.keyField().canonicalString())||e.ce.push(new Ya(at.keyField(),r))}return e.ce}function bn(t){const e=te(t);return e.le||(e.le=ZD(e,Ps(t))),e.le}function ZD(t,e){if(t.limitType==="F")return U0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ya(i.field,s)});const n=t.endAt?new Ks(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ks(t.startAt.position,t.startAt.inclusive):null;return U0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Np(t,e){const n=t.filters.concat([e]);return new Yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Rc(t,e,n){return new Yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Nh(t,e){return yg(bn(t),bn(e))&&t.limitType===e.limitType}function $S(t){return`${_g(bn(t))}|lt:${t.limitType}`}function ss(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>BS(i)).join(", ")}]`),xh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Gs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Gs(i)).join(",")),`Target(${r})`}(bn(t))}; limitType=${t.limitType})`}function kh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ps(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=V0(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Ps(r),i)||r.endAt&&!function(o,a,u){const c=V0(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Ps(r),i))}(t,e)}function eO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function WS(t){return(e,n)=>{let r=!1;for(const i of Ps(t)){const s=tO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function tO(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Hs(u,c):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Qi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return OS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nO=new qe(K.comparator);function hr(){return nO}const qS=new qe(K.comparator);function ta(...t){let e=qS;for(const n of t)e=e.insert(n.key,n);return e}function HS(t){let e=qS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ei(){return ma()}function GS(){return ma()}function ma(){return new ho(t=>t.toString(),(t,e)=>t.isEqual(e))}const rO=new qe(K.comparator),iO=new ut(K.comparator);function le(...t){let e=iO;for(const n of t)e=e.add(n);return e}const sO=new ut(de);function oO(){return sO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KS(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cc(e)?"-0":e}}function QS(t){return{integerValue:""+t}}function aO(t,e){return FD(e)?QS(e):KS(t,e)}/**
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
 */class Ph{constructor(){this._=void 0}}function lO(t,e,n){return t instanceof Xa?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Rh(s)&&(s=mg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ja?XS(t,e):t instanceof Za?JS(t,e):function(i,s){const o=YS(i,s),a=B0(o)+B0(i.Pe);return xp(o)&&xp(i.Pe)?QS(a):KS(i.serializer,a)}(t,e)}function uO(t,e,n){return t instanceof Ja?XS(t,e):t instanceof Za?JS(t,e):n}function YS(t,e){return t instanceof Ac?function(r){return xp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Xa extends Ph{}class Ja extends Ph{constructor(e){super(),this.elements=e}}function XS(t,e){const n=ZS(e);for(const r of t.elements)n.some(i=>On(i,r))||n.push(r);return{arrayValue:{values:n}}}class Za extends Ph{constructor(e){super(),this.elements=e}}function JS(t,e){let n=ZS(e);for(const r of t.elements)n=n.filter(i=>!On(i,r));return{arrayValue:{values:n}}}class Ac extends Ph{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function B0(t){return ze(t.integerValue||t.doubleValue)}function ZS(t){return gg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e,n){this.field=e,this.transform=n}}function hO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ja&&i instanceof Ja||r instanceof Za&&i instanceof Za?qs(r.elements,i.elements,On):r instanceof Ac&&i instanceof Ac?On(r.Pe,i.Pe):r instanceof Xa&&i instanceof Xa}(t.transform,e.transform)}class dO{constructor(e,n){this.version=e,this.transformResults=n}}class yn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yn}static exists(e){return new yn(void 0,e)}static updateTime(e){return new yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ju(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class bh{}function e1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wg(t.key,yn.none()):new Tl(t.key,t.data,yn.none());{const n=t.data,r=Dt.empty();let i=new ut(at.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new li(t.key,r,new Gt(i.toArray()),yn.none())}}function fO(t,e,n){t instanceof Tl?function(i,s,o){const a=i.value.clone(),u=$0(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof li?function(i,s,o){if(!ju(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=$0(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(t1(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ga(t,e,n,r){return t instanceof Tl?function(s,o,a,u){if(!ju(s.precondition,o))return a;const c=s.value.clone(),d=W0(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof li?function(s,o,a,u){if(!ju(s.precondition,o))return a;const c=W0(s.fieldTransforms,u,o),d=o.data;return d.setAll(t1(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return ju(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function pO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=YS(r.transform,i||null);s!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,s))}return n||null}function z0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&qs(r,i,(s,o)=>hO(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Tl extends bh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class li extends bh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function t1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $0(t,e,n){const r=new Map;ye(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,uO(o,a,n[i]))}return r}function W0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,lO(s,o,e))}return r}class wg extends bh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mO extends bh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&fO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ga(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ga(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=GS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=e1(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&qs(this.mutations,e.mutations,(n,r)=>z0(n,r))&&qs(this.baseMutations,e.baseMutations,(n,r)=>z0(n,r))}}class Eg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ye(e.mutations.length===r.length);let i=function(){return rO}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Eg(e,n,r,i)}}/**
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
 */class _O{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class yO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,ue;function vO(t){switch(t){default:return Z();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function n1(t){if(t===void 0)return cr("GRPC error has no .code"),V.UNKNOWN;switch(t){case Be.OK:return V.OK;case Be.CANCELLED:return V.CANCELLED;case Be.UNKNOWN:return V.UNKNOWN;case Be.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Be.INTERNAL:return V.INTERNAL;case Be.UNAVAILABLE:return V.UNAVAILABLE;case Be.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Be.NOT_FOUND:return V.NOT_FOUND;case Be.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Be.ABORTED:return V.ABORTED;case Be.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Be.DATA_LOSS:return V.DATA_LOSS;default:return Z()}}(ue=Be||(Be={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function wO(){return new TextEncoder}/**
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
 */const EO=new Ri([4294967295,4294967295],0);function q0(t){const e=wO().encode(t),n=new CS;return n.update(e),new Uint8Array(n.digest())}function H0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ri([n,r],0),new Ri([i,s],0)]}class Tg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new na(`Invalid padding: ${n}`);if(r<0)throw new na(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new na(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new na(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ri.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Ri.fromNumber(r)));return i.compare(EO)===1&&(i=new Ri([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=q0(e),[r,i]=H0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Tg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=q0(e),[r,i]=H0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class na extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Il.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Dh(ee.min(),i,new qe(de),hr(),le())}}class Il{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Il(r,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class r1{constructor(e,n){this.targetId=e,this.me=n}}class i1{constructor(e,n,r=dt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class G0{constructor(){this.fe=0,this.ge=Q0(),this.pe=dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=le(),n=le(),r=le();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Z()}}),new Il(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Q0()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ye(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class TO{constructor(e){this.Le=e,this.Be=new Map,this.ke=hr(),this.qe=K0(),this.Qe=new qe(de)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Ap(s))if(r===0){const o=new K(s.path);this.Ue(n,o,Et.newNoDocument(o,ee.min()))}else ye(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Fi(r).toUint8Array()}catch(u){if(u instanceof LS)return Ws("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Tg(o,i,s)}catch(u){return Ws(u instanceof na?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Ap(a.target)){const u=new K(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Et.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=le();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Dh(e,n,this.Qe,this.ke,r);return this.ke=hr(),this.qe=K0(),this.Qe=new qe(de),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new G0,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ut(de),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new G0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function K0(){return new qe(K.comparator)}function Q0(){return new qe(K.comparator)}const IO={asc:"ASCENDING",desc:"DESCENDING"},SO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},CO={and:"AND",or:"OR"};class xO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kp(t,e){return t.useProto3Json||xh(e)?e:{value:e}}function Nc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function s1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function RO(t,e){return Nc(t,e.toTimestamp())}function Dn(t){return ye(!!t),ee.fromTimestamp(function(n){const r=Xr(n);return new Ye(r.seconds,r.nanos)}(t))}function Ig(t,e){return Pp(t,e).canonicalString()}function Pp(t,e){const n=function(i){return new Te(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function o1(t){const e=Te.fromString(t);return ye(h1(e)),e}function bp(t,e){return Ig(t.databaseId,e.path)}function sf(t,e){const n=o1(e);if(n.get(1)!==t.databaseId.projectId)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(l1(n))}function a1(t,e){return Ig(t.databaseId,e)}function AO(t){const e=o1(t);return e.length===4?Te.emptyPath():l1(e)}function Dp(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function l1(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Y0(t,e,n){return{name:bp(t,e),fields:n.value.mapValue.fields}}function NO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ye(d===void 0||typeof d=="string"),dt.fromBase64String(d||"")):(ye(d===void 0||d instanceof Buffer||d instanceof Uint8Array),dt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?V.UNKNOWN:n1(c.code);return new $(d,c.message||"")}(o);n=new i1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=sf(t,r.document.name),s=Dn(r.document.updateTime),o=r.document.createTime?Dn(r.document.createTime):ee.min(),a=new Dt({mapValue:{fields:r.document.fields}}),u=Et.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Bu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=sf(t,r.document),s=r.readTime?Dn(r.readTime):ee.min(),o=Et.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Bu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=sf(t,r.document),s=r.removedTargetIds||[];n=new Bu([],s,i,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new yO(i,s),a=r.targetId;n=new r1(a,o)}}return n}function kO(t,e){let n;if(e instanceof Tl)n={update:Y0(t,e.key,e.value)};else if(e instanceof wg)n={delete:bp(t,e.key)};else if(e instanceof li)n={update:Y0(t,e.key,e.data),updateMask:UO(e.fieldMask)};else{if(!(e instanceof mO))return Z();n={verify:bp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Xa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ja)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Za)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ac)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:RO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z()}(t,e.precondition)),n}function PO(t,e){return t&&t.length>0?(ye(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Dn(i.updateTime):Dn(s);return o.isEqual(ee.min())&&(o=Dn(s)),new dO(o,i.transformResults||[])}(n,e))):[]}function bO(t,e){return{documents:[a1(t,e.path)]}}function DO(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=a1(t,i);const s=function(c){if(c.length!==0)return c1(Tn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(p){return{field:os(p.field),direction:MO(p.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=kp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function OO(t){let e=AO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ye(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const p=u1(f);return p instanceof Tn&&US(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(T){return new Ya(as(T.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,xh(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(f){const p=!!f.before,v=f.values||[];return new Ks(v,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,v=f.values||[];return new Ks(v,p)}(n.endAt)),JD(e,i,o,s,a,"F",u,c)}function LO(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function u1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=as(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=as(n.unaryFilter.field);return We.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=as(n.unaryFilter.field);return We.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=as(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return We.create(as(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Tn.create(n.compositeFilter.filters.map(r=>u1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function MO(t){return IO[t]}function VO(t){return SO[t]}function FO(t){return CO[t]}function os(t){return{fieldPath:t.canonicalString()}}function as(t){return at.fromServerFormat(t.fieldPath)}function c1(t){return t instanceof We?function(n){if(n.op==="=="){if(M0(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NAN"}};if(L0(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(M0(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NOT_NAN"}};if(L0(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:os(n.field),op:VO(n.op),value:n.value}}}(t):t instanceof Tn?function(n){const r=n.getFilters().map(i=>c1(i));return r.length===1?r[0]:{compositeFilter:{op:FO(n.op),filters:r}}}(t):Z()}function UO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function h1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n,r,i,s=ee.min(),o=ee.min(),a=dt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new br(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e){this.ct=e}}function BO(t){const e=OO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Rc(e,e.limit,"L"):e}/**
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
 */class zO{constructor(){this.an=new $O}addToCollectionParentIndex(e,n){return this.an.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Yr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Yr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class $O{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ut(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ut(Te.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class WO{constructor(){this.changes=new ho(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ga(r.mutation,i,Gt.empty(),Ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const i=Ei();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ta();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ei();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=hr();const o=ma(),a=function(){return ma()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof li)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),ga(d.mutation,c,d.mutation.getFieldMask(),Ye.now())):o.set(c.key,Gt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new qO(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ma();let i=new qe((o,a)=>o-a),s=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Gt.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(i.get(a.batchId)||le()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=GS();d.forEach(p=>{if(!s.has(p)){const v=e1(n.get(p),r.get(p));v!==null&&f.set(p,v),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(Ei());let a=-1,u=s;return o.next(c=>U.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?U.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{u=u.insert(d,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,le())).next(d=>({batchId:a,changes:HS(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=ta();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ta();return this.indexManager.getCollectionParents(e,s).next(a=>U.forEach(a,u=>{const c=function(f,p){return new Yi(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Et.newInvalidDocument(d)))});let a=ta();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&ga(d.mutation,c,Gt.empty(),Ye.now()),kh(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return U.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Dn(i.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(i){return{name:i.name,query:BO(i.bundledQuery),readTime:Dn(i.readTime)}}(n)),U.resolve()}}/**
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
 */class KO{constructor(){this.overlays=new qe(K.comparator),this.Pr=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ei();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=Ei(),s=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new qe((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Ei(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=Ei(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return U.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new _O(n,r));let s=this.Pr.get(n);s===void 0&&(s=le(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
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
 */class QO{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(){this.Ir=new ut(Ze.Tr),this.Er=new ut(Ze.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Ir=this.Ir.add(r),this.Er=this.Er.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new Ze(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new K(new Te([])),r=new Ze(n,e),i=new Ze(n,e+1),s=[];return this.Er.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Er=this.Er.delete(e)}pr(e){const n=new K(new Te([])),r=new Ze(n,e),i=new Ze(n,e+1);let s=le();return this.Er.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ze(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.yr=n}static Tr(e,n){return K.comparator(e.key,n.key)||de(e.yr,n.yr)}static dr(e,n){return de(e.yr,n.yr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new ut(Ze.Tr)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gO(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Sr=this.Sr.add(new Ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),i=new Ze(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const a=this.br(o.yr);s.push(a)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(de);return n.forEach(i=>{const s=new Ze(i,0),o=new Ze(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{r=r.add(a.yr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Ze(new K(s),0);let a=new ut(de);return this.Sr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.yr)),!0)},o),U.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ye(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return U.forEach(n.mutations,i=>{const s=new Ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new Ze(n,0),i=this.Sr.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e){this.Fr=e,this.docs=function(){return new qe(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=hr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Et.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=hr();const o=n.path,a=new K(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||OD(DD(d),r)<=0||(i.has(d.key)||kh(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Z()}Mr(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new JO(this)}getSize(e){return U.resolve(this.size)}}class JO extends WO{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(e){this.persistence=e,this.Or=new ho(n=>_g(n),yg),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new Sg,this.targetCount=0,this.Br=Qs.Ln()}forEachTarget(e,n){return this.Or.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),U.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new Qs(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Qn(n),U.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Lr.mr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Lr.Ar(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Lr.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Lr.mr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Lr.pr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Lr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(e,n){this.kr={},this.overlays={},this.qr=new pg(0),this.Qr=!1,this.Qr=!0,this.Kr=new QO,this.referenceDelegate=e(this),this.$r=new ZO(this),this.indexManager=new zO,this.remoteDocumentCache=function(i){return new XO(i)}(r=>this.referenceDelegate.Ur(r)),this.serializer=new jO(n),this.Wr=new GO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new KO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new YO(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const i=new tL(this.qr.next());return this.referenceDelegate.Gr(),r(i).next(s=>this.referenceDelegate.zr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}jr(e,n){return U.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class tL extends MD{constructor(e){super(),this.currentSequenceNumber=e}}class Cg{constructor(e){this.persistence=e,this.Hr=new Sg,this.Jr=null}static Yr(e){return new Cg(e)}get Zr(){if(this.Jr)return this.Jr;throw Z()}addReference(e,n,r){return this.Hr.addReference(r,n),this.Zr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Hr.removeReference(r,n),this.Zr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Zr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Hr.mr(n.targetId).forEach(i=>this.Zr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Zr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Gr(){this.Jr=new Set}zr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Zr,r=>{const i=K.fromPath(r);return this.Xr(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.Jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Xr(e,n).next(r=>{r?this.Zr.delete(n.toString()):this.Zr.add(n.toString())})}Ur(e){return 0}Xr(e,n){return U.or([()=>U.resolve(this.Hr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.jr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ki=r,this.$i=i}static Ui(e,n){let r=le(),i=le();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new xg(e,n.fromCache,r,i)}}/**
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
 */class nL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class rL{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return $k()?8:VD(ht())>0?6:4}()}initialize(e,n){this.Hi=e,this.indexManager=n,this.Wi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Yi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new nL;return this.Zi(e,n,o).next(a=>{if(s.result=a,this.Gi)return this.Xi(e,n,o,a.size)})}).next(()=>s.result)}Xi(e,n,r,i){return r.documentReadCount<this.zi?(Bo()<=ae.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",ss(n),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),U.resolve()):(Bo()<=ae.DEBUG&&G("QueryEngine","Query:",ss(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ji*i?(Bo()<=ae.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",ss(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,bn(n))):U.resolve())}Ji(e,n){if(j0(n))return U.resolve(null);let r=bn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Rc(n,null,"F"),r=bn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=le(...s);return this.Hi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.es(n,a);return this.ts(n,c,o,u.readTime)?this.Ji(e,Rc(n,null,"F")):this.ns(e,c,n,u)}))})))}Yi(e,n,r,i){return j0(n)||i.isEqual(ee.min())?U.resolve(null):this.Hi.getDocuments(e,r).next(s=>{const o=this.es(n,s);return this.ts(n,o,r,i)?U.resolve(null):(Bo()<=ae.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ss(n)),this.ns(e,o,n,bD(i,-1)).next(a=>a))})}es(e,n){let r=new ut(WS(e));return n.forEach((i,s)=>{kh(e,s)&&(r=r.add(s))}),r}ts(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Zi(e,n,r){return Bo()<=ae.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",ss(n)),this.Hi.getDocumentsMatchingQuery(e,n,Yr.min(),r)}ns(e,n,r,i){return this.Hi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{constructor(e,n,r,i){this.persistence=e,this.rs=n,this.serializer=i,this.ss=new qe(de),this.os=new ho(s=>_g(s),yg),this._s=new Map,this.us=e.getRemoteDocumentCache(),this.$r=e.getTargetCache(),this.Wr=e.getBundleCache(),this.cs(r)}cs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HO(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ss))}}function sL(t,e,n,r){return new iL(t,e,n,r)}async function d1(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.cs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=le();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({ls:c,removedBatchIds:o,addedBatchIds:a}))})})}function oL(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.us.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,p=f.keys();let v=U.resolve();return p.forEach(T=>{v=v.next(()=>d.getEntry(u,T)).next(A=>{const N=c.docVersions.get(T);ye(N!==null),A.version.compareTo(N)<0&&(f.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),d.addEntry(A)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=le();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function f1(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.$r.getLastRemoteSnapshotVersion(n))}function aL(t,e){const n=te(t),r=e.snapshotVersion;let i=n.ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.us.newChangeBuffer({trackRemovals:!0});i=n.ss;const a=[];e.targetChanges.forEach((d,f)=>{const p=i.get(f);if(!p)return;a.push(n.$r.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.$r.addMatchingKeys(s,d.addedDocuments,f)));let v=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?v=v.withResumeToken(dt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),i=i.insert(f,v),function(A,N,I){return A.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(p,v,d)&&a.push(n.$r.updateTargetData(s,v))});let u=hr(),c=le();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(lL(s,o,e.documentUpdates).next(d=>{u=d.hs,c=d.Ps})),!r.isEqual(ee.min())){const d=n.$r.getLastRemoteSnapshotVersion(s).next(f=>n.$r.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return U.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ss=i,s))}function lL(t,e,n){let r=le(),i=le();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=hr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):G("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{hs:o,Ps:i}})}function uL(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function cL(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.$r.getTargetData(r,e).next(s=>s?(i=s,U.resolve(i)):n.$r.allocateTargetId(r).next(o=>(i=new br(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.$r.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ss.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ss=n.ss.insert(r.targetId,r),n.os.set(e,r.targetId)),r})}async function Op(t,e,n){const r=te(t),i=r.ss.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!El(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ss=r.ss.remove(e),r.os.delete(i.target)}function X0(t,e,n){const r=te(t);let i=ee.min(),s=le();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=te(u),p=f.os.get(d);return p!==void 0?U.resolve(f.ss.get(p)):f.$r.getTargetData(c,d)}(r,o,bn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.$r.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.rs.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:le())).next(a=>(hL(r,eO(e),a),{documents:a,Is:s})))}function hL(t,e,n){let r=t._s.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t._s.set(e,r)}class J0{constructor(){this.activeTargetIds=oO()}Vs(e){this.activeTargetIds=this.activeTargetIds.add(e)}fs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Rs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dL{constructor(){this.io=new J0,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.io.Vs(e),this.so[e]||"not-current"}updateQueryState(e,n,r){this.so[e]=n}removeLocalQueryTarget(e){this.io.fs(e)}isLocalQueryTarget(e){return this.io.activeTargetIds.has(e)}clearQueryState(e){delete this.so[e]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(e){return this.io.activeTargetIds.has(e)}start(){return this.io=new J0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class fL{oo(e){}shutdown(){}}/**
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
 */class Z0{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(e){this.lo.push(e)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.lo)e(0)}co(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.lo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _u=null;function of(){return _u===null?_u=function(){return 268435456+Math.round(2147483648*Math.random())}():_u++,"0x"+_u.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mL{constructor(e){this.Po=e.Po,this.Io=e.Io}To(e){this.Eo=e}Ao(e){this.Ro=e}Vo(e){this.mo=e}onMessage(e){this.fo=e}close(){this.Io()}send(e){this.Po(e)}po(){this.Eo()}yo(){this.Ro()}wo(e){this.mo(e)}So(e){this.fo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection";class gL extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.bo=r+"://"+n.host,this.Do=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get vo(){return!1}Fo(n,r,i,s,o){const a=of(),u=this.Mo(n,r.toUriEncodedString());G("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(c,s,o),this.Oo(n,u,c,i).then(d=>(G("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Ws("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}No(n,r,i,s,o,a){return this.Fo(n,r,i,s,o)}xo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+co}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Mo(n,r){const i=pL[n];return`${this.bo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Oo(e,n,r,i){const s=of();return new Promise((o,a)=>{const u=new xS;u.setWithCredentials(!0),u.listenOnce(AS.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Fu.NO_ERROR:const d=u.getResponseJson();G(yt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Fu.TIMEOUT:G(yt,`RPC '${e}' ${s} timed out`),a(new $(V.DEADLINE_EXCEEDED,"Request time out"));break;case Fu.HTTP_ERROR:const f=u.getStatus();if(G(yt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const v=p==null?void 0:p.error;if(v&&v.status&&v.message){const T=function(N){const I=N.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(I)>=0?I:V.UNKNOWN}(v.status);a(new $(T,v.message))}else a(new $(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new $(V.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{G(yt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);G(yt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Lo(e,n,r){const i=of(),s=[this.bo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=PS(),a=kS(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new RS({})),this.xo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");G(yt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let p=!1,v=!1;const T=new mL({Po:N=>{v?G(yt,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(p||(G(yt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),G(yt,`RPC '${e}' stream ${i} sending:`,N),f.send(N))},Io:()=>f.close()}),A=(N,I,w)=>{N.listen(I,x=>{try{w(x)}catch(D){setTimeout(()=>{throw D},0)}})};return A(f,ea.EventType.OPEN,()=>{v||(G(yt,`RPC '${e}' stream ${i} transport opened.`),T.po())}),A(f,ea.EventType.CLOSE,()=>{v||(v=!0,G(yt,`RPC '${e}' stream ${i} transport closed`),T.wo())}),A(f,ea.EventType.ERROR,N=>{v||(v=!0,Ws(yt,`RPC '${e}' stream ${i} transport errored:`,N),T.wo(new $(V.UNAVAILABLE,"The operation could not be completed")))}),A(f,ea.EventType.MESSAGE,N=>{var I;if(!v){const w=N.data[0];ye(!!w);const x=w,D=x.error||((I=x[0])===null||I===void 0?void 0:I.error);if(D){G(yt,`RPC '${e}' stream ${i} received error:`,D);const O=D.status;let F=function(E){const C=Be[E];if(C!==void 0)return n1(C)}(O),S=D.message;F===void 0&&(F=V.INTERNAL,S="Unknown error status: "+O+" with message "+D.message),v=!0,T.wo(new $(F,S)),f.close()}else G(yt,`RPC '${e}' stream ${i} received:`,w),T.So(w)}}),A(a,NS.STAT_EVENT,N=>{N.stat===Ip.PROXY?G(yt,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===Ip.NOPROXY&&G(yt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.yo()},0),T}}function af(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(t){return new xO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ai=e,this.timerId=n,this.Bo=r,this.ko=i,this.qo=s,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(e){this.cancel();const n=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),i=Math.max(0,n-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Qo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,i,()=>(this.$o=Date.now(),e())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e,n,r,i,s,o,a,u){this.ai=e,this.jo=r,this.Ho=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new p1(e,n)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(e){this.a_(),this.stream.send(e)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(e,n){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,e!==4?this.e_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(cr(n.toString()),cr("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Vo(n)}c_(){}auth(){this.state=1;const e=this.l_(this.Jo),n=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Jo===n&&this.h_(r,i)},r=>{e(()=>{const i=new $(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.P_(i)})})}h_(e,n){const r=this.l_(this.Jo);this.stream=this.I_(e,n),this.stream.To(()=>{r(()=>this.listener.To())}),this.stream.Ao(()=>{r(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(i=>{r(()=>this.P_(i))}),this.stream.onMessage(i=>{r(()=>++this.Xo==1?this.T_(i):this.onNext(i))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}l_(e){return n=>{this.ai.enqueueAndForget(()=>this.Jo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _L extends m1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}I_(e,n){return this.connection.Lo("Listen",e,n)}T_(e){return this.onNext(e)}onNext(e){this.e_.reset();const n=NO(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?Dn(o.readTime):ee.min()}(e);return this.listener.E_(n,r)}d_(e){const n={};n.database=Dp(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Ap(u)?{documents:bO(s,u)}:{query:DO(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=s1(s,o.resumeToken);const c=kp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=Nc(s,o.snapshotVersion.toTimestamp());const c=kp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=LO(this.serializer,e);r&&(n.labels=r),this.__(n)}A_(e){const n={};n.database=Dp(this.serializer),n.removeTarget=e,this.__(n)}}class yL extends m1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get R_(){return this.Xo>0}start(){this.lastStreamToken=void 0,super.start()}c_(){this.R_&&this.V_([])}I_(e,n){return this.connection.Lo("Write",e,n)}T_(e){return ye(!!e.streamToken),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0),this.listener.m_()}onNext(e){ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.e_.reset();const n=PO(e.writeResults,e.commitTime),r=Dn(e.commitTime);return this.listener.f_(r,n)}g_(){const e={};e.database=Dp(this.serializer),this.__(e)}V_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>kO(this.serializer,r))};this.__(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vL extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.p_=!1}y_(){if(this.p_)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(e,n,r,i){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,Pp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(V.UNKNOWN,s.toString())})}No(e,n,r,i,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.No(e,Pp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(V.UNKNOWN,o.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class wL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(e){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.M_(),this.w_=0,e==="Online"&&(this.b_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}v_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(cr(n),this.b_=!1):G("OnlineStateTracker",n)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=s,this.B_.oo(o=>{r.enqueueAndForget(async()=>{Xi(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=te(u);c.N_.add(4),await Sl(c),c.k_.set("Unknown"),c.N_.delete(4),await Lh(c)}(this))})}),this.k_=new wL(r,i)}}async function Lh(t){if(Xi(t))for(const e of t.L_)await e(!0)}async function Sl(t){for(const e of t.L_)await e(!1)}function g1(t,e){const n=te(t);n.O_.has(e.targetId)||(n.O_.set(e.targetId,e),kg(n)?Ng(n):fo(n).n_()&&Ag(n,e))}function Rg(t,e){const n=te(t),r=fo(n);n.O_.delete(e),r.n_()&&_1(n,e),n.O_.size===0&&(r.n_()?r.s_():Xi(n)&&n.k_.set("Unknown"))}function Ag(t,e){if(t.q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}fo(t).d_(e)}function _1(t,e){t.q_.xe(e),fo(t).A_(e)}function Ng(t){t.q_=new TO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.O_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),fo(t).start(),t.k_.D_()}function kg(t){return Xi(t)&&!fo(t).t_()&&t.O_.size>0}function Xi(t){return te(t).N_.size===0}function y1(t){t.q_=void 0}async function TL(t){t.k_.set("Online")}async function IL(t){t.O_.forEach((e,n)=>{Ag(t,e)})}async function SL(t,e){y1(t),kg(t)?(t.k_.F_(e),Ng(t)):t.k_.set("Unknown")}async function CL(t,e,n){if(t.k_.set("Online"),e instanceof i1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.O_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.O_.delete(a),i.q_.removeTarget(a))}(t,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await kc(t,r)}else if(e instanceof Bu?t.q_.Ke(e):e instanceof r1?t.q_.He(e):t.q_.We(e),!n.isEqual(ee.min()))try{const r=await f1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.O_.get(c);d&&s.O_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.O_.get(u);if(!d)return;s.O_.set(u,d.withResumeToken(dt.EMPTY_BYTE_STRING,d.snapshotVersion)),_1(s,u);const f=new br(d.target,u,c,d.sequenceNumber);Ag(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await kc(t,r)}}async function kc(t,e,n){if(!El(e))throw e;t.N_.add(1),await Sl(t),t.k_.set("Offline"),n||(n=()=>f1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.N_.delete(1),await Lh(t)})}function v1(t,e){return e().catch(n=>kc(t,n,e))}async function Mh(t){const e=te(t),n=Jr(e);let r=e.x_.length>0?e.x_[e.x_.length-1].batchId:-1;for(;xL(e);)try{const i=await uL(e.localStore,r);if(i===null){e.x_.length===0&&n.s_();break}r=i.batchId,RL(e,i)}catch(i){await kc(e,i)}w1(e)&&E1(e)}function xL(t){return Xi(t)&&t.x_.length<10}function RL(t,e){t.x_.push(e);const n=Jr(t);n.n_()&&n.R_&&n.V_(e.mutations)}function w1(t){return Xi(t)&&!Jr(t).t_()&&t.x_.length>0}function E1(t){Jr(t).start()}async function AL(t){Jr(t).g_()}async function NL(t){const e=Jr(t);for(const n of t.x_)e.V_(n.mutations)}async function kL(t,e,n){const r=t.x_.shift(),i=Eg.from(r,e,n);await v1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Mh(t)}async function PL(t,e){e&&Jr(t).R_&&await async function(r,i){if(function(o){return vO(o)&&o!==V.ABORTED}(i.code)){const s=r.x_.shift();Jr(r).i_(),await v1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Mh(r)}}(t,e),w1(t)&&E1(t)}async function ew(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=Xi(n);n.N_.add(3),await Sl(n),r&&n.k_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.N_.delete(3),await Lh(n)}async function bL(t,e){const n=te(t);e?(n.N_.delete(2),await Lh(n)):e||(n.N_.add(2),await Sl(n),n.k_.set("Unknown"))}function fo(t){return t.Q_||(t.Q_=function(n,r,i){const s=te(n);return s.y_(),new _L(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{To:TL.bind(null,t),Ao:IL.bind(null,t),Vo:SL.bind(null,t),E_:CL.bind(null,t)}),t.L_.push(async e=>{e?(t.Q_.i_(),kg(t)?Ng(t):t.k_.set("Unknown")):(await t.Q_.stop(),y1(t))})),t.Q_}function Jr(t){return t.K_||(t.K_=function(n,r,i){const s=te(n);return s.y_(),new yL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{To:()=>Promise.resolve(),Ao:AL.bind(null,t),Vo:PL.bind(null,t),m_:NL.bind(null,t),f_:kL.bind(null,t)}),t.L_.push(async e=>{e?(t.K_.i_(),await Mh(t)):(await t.K_.stop(),t.x_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.x_.length} pending writes`),t.x_=[]))})),t.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Pg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bg(t,e){if(cr("AsyncQueue",`${e}: ${t}`),El(t))return new $(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=ta(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new bs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class tw{constructor(){this.U_=new qe(K.comparator)}track(e){const n=e.doc.key,r=this.U_.get(n);r?e.type!==0&&r.type===3?this.U_=this.U_.insert(n,e):e.type===3&&r.type!==1?this.U_=this.U_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.U_=this.U_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.U_=this.U_.remove(n):e.type===1&&r.type===2?this.U_=this.U_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):Z():this.U_=this.U_.insert(n,e)}W_(){const e=[];return this.U_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ys{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ys(e,n,bs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DL{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(e=>e.H_())}}class OL{constructor(){this.queries=nw(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=nw(),s.forEach((o,a)=>{for(const u of a.z_)u.onError(r)})})(this,new $(V.ABORTED,"Firestore shutting down"))}}function nw(){return new ho(t=>$S(t),Nh)}async function Dg(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.j_()&&e.H_()&&(r=2):(s=new DL,r=e.H_()?0:1);try{switch(r){case 0:s.G_=await n.onListen(i,!0);break;case 1:s.G_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=bg(o,`Initialization of query '${ss(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.z_.push(e),e.Y_(n.onlineState),s.G_&&e.Z_(s.G_)&&Lg(n)}async function Og(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.z_.indexOf(e);o>=0&&(s.z_.splice(o,1),s.z_.length===0?i=e.H_()?0:1:!s.j_()&&e.H_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function LL(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.z_)a.Z_(i)&&(r=!0);o.G_=i}}r&&Lg(n)}function ML(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.z_)s.onError(n);r.queries.delete(e)}function Lg(t){t.J_.forEach(e=>{e.next()})}var Lp,rw;(rw=Lp||(Lp={})).X_="default",rw.Cache="cache";class Mg{constructor(e,n,r){this.query=e,this.ea=n,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=r||{}}Z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ys(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ta?this.ra(e)&&(this.ea.next(e),n=!0):this.ia(e,this.onlineState)&&(this.sa(e),n=!0),this.na=e,n}onError(e){this.ea.error(e)}Y_(e){this.onlineState=e;let n=!1;return this.na&&!this.ta&&this.ia(this.na,e)&&(this.sa(this.na),n=!0),n}ia(e,n){if(!e.fromCache||!this.H_())return!0;const r=n!=="Offline";return(!this.options.oa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ra(e){if(e.docChanges.length>0)return!0;const n=this.na&&this.na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}sa(e){e=Ys.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ta=!0,this.ea.next(e)}H_(){return this.options.source!==Lp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e){this.key=e}}class I1{constructor(e){this.key=e}}class VL{constructor(e,n){this.query=e,this.Ia=n,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=le(),this.mutatedKeys=le(),this.da=WS(e),this.Aa=new bs(this.da)}get Ra(){return this.Ia}Va(e,n){const r=n?n.ma:new tw,i=n?n.Aa:this.Aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const p=i.get(d),v=kh(this.query,f)?f:null,T=!!p&&this.mutatedKeys.has(p.key),A=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let N=!1;p&&v?p.data.isEqual(v.data)?T!==A&&(r.track({type:3,doc:v}),N=!0):this.fa(p,v)||(r.track({type:2,doc:v}),N=!0,(u&&this.da(v,u)>0||c&&this.da(v,c)<0)&&(a=!0)):!p&&v?(r.track({type:0,doc:v}),N=!0):p&&!v&&(r.track({type:1,doc:p}),N=!0,(u||c)&&(a=!0)),N&&(v?(o=o.add(v),s=A?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Aa:o,ma:r,ts:a,mutatedKeys:s}}fa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Aa;this.Aa=e.Aa,this.mutatedKeys=e.mutatedKeys;const o=e.ma.W_();o.sort((d,f)=>function(v,T){const A=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return A(v)-A(T)}(d.type,f.type)||this.da(d.doc,f.doc)),this.ga(r),i=i!=null&&i;const a=n&&!i?this.pa():[],u=this.Ea.size===0&&this.current&&!i?1:0,c=u!==this.Ta;return this.Ta=u,o.length!==0||c?{snapshot:new Ys(this.query,e.Aa,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ya:a}:{ya:a}}Y_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new tw,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(e){return!this.Ia.has(e)&&!!this.Aa.has(e)&&!this.Aa.get(e).hasLocalMutations}ga(e){e&&(e.addedDocuments.forEach(n=>this.Ia=this.Ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ia=this.Ia.delete(n)),this.current=e.current)}pa(){if(!this.current)return[];const e=this.Ea;this.Ea=le(),this.Aa.forEach(r=>{this.wa(r.key)&&(this.Ea=this.Ea.add(r.key))});const n=[];return e.forEach(r=>{this.Ea.has(r)||n.push(new I1(r))}),this.Ea.forEach(r=>{e.has(r)||n.push(new T1(r))}),n}Sa(e){this.Ia=e.Is,this.Ea=le();const n=this.Va(e.documents);return this.applyChanges(n,!0)}ba(){return Ys.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class FL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class UL{constructor(e){this.key=e,this.Da=!1}}class jL{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.va=new ho(a=>$S(a),Nh),this.Fa=new Map,this.Ma=new Set,this.xa=new qe(K.comparator),this.Oa=new Map,this.Na=new Sg,this.La={},this.Ba=new Map,this.ka=Qs.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function BL(t,e,n=!0){const r=N1(t);let i;const s=r.va.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ba()):i=await S1(r,e,n,!0),i}async function zL(t,e){const n=N1(t);await S1(n,e,!0,!1)}async function S1(t,e,n,r){const i=await cL(t.localStore,bn(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await $L(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&g1(t.remoteStore,i),a}async function $L(t,e,n,r,i){t.Qa=(f,p,v)=>async function(A,N,I,w){let x=N.view.Va(I);x.ts&&(x=await X0(A.localStore,N.query,!1).then(({documents:S})=>N.view.Va(S,x)));const D=w&&w.targetChanges.get(N.targetId),O=w&&w.targetMismatches.get(N.targetId)!=null,F=N.view.applyChanges(x,A.isPrimaryClient,D,O);return sw(A,N.targetId,F.ya),F.snapshot}(t,f,p,v);const s=await X0(t.localStore,e,!0),o=new VL(e,s.Is),a=o.Va(s.documents),u=Il.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);sw(t,n,c.ya);const d=new FL(e,n,o);return t.va.set(e,d),t.Fa.has(n)?t.Fa.get(n).push(e):t.Fa.set(n,[e]),c.snapshot}async function WL(t,e,n){const r=te(t),i=r.va.get(e),s=r.Fa.get(i.targetId);if(s.length>1)return r.Fa.set(i.targetId,s.filter(o=>!Nh(o,e))),void r.va.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Op(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Rg(r.remoteStore,i.targetId),Mp(r,i.targetId)}).catch(wl)):(Mp(r,i.targetId),await Op(r.localStore,i.targetId,!0))}async function qL(t,e){const n=te(t),r=n.va.get(e),i=n.Fa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Rg(n.remoteStore,r.targetId))}async function HL(t,e,n){const r=ZL(t);try{const i=await function(o,a){const u=te(o),c=Ye.now(),d=a.reduce((v,T)=>v.add(T.key),le());let f,p;return u.persistence.runTransaction("Locally write mutations","readwrite",v=>{let T=hr(),A=le();return u.us.getEntries(v,d).next(N=>{T=N,T.forEach((I,w)=>{w.isValidDocument()||(A=A.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(v,T)).next(N=>{f=N;const I=[];for(const w of a){const x=pO(w,f.get(w.key).overlayedDocument);x!=null&&I.push(new li(w.key,x,MS(x.value.mapValue),yn.exists(!0)))}return u.mutationQueue.addMutationBatch(v,c,I,a)}).next(N=>{p=N;const I=N.applyToLocalDocumentSet(f,A);return u.documentOverlayCache.saveOverlays(v,N.batchId,I)})}).then(()=>({batchId:p.batchId,changes:HS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.La[o.currentUser.toKey()];c||(c=new qe(de)),c=c.insert(a,u),o.La[o.currentUser.toKey()]=c}(r,i.batchId,n),await Cl(r,i.changes),await Mh(r.remoteStore)}catch(i){const s=bg(i,"Failed to persist write");n.reject(s)}}async function C1(t,e){const n=te(t);try{const r=await aL(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Oa.get(s);o&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Da=!0:i.modifiedDocuments.size>0?ye(o.Da):i.removedDocuments.size>0&&(ye(o.Da),o.Da=!1))}),await Cl(n,r,e)}catch(r){await wl(r)}}function iw(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.va.forEach((s,o)=>{const a=o.view.Y_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=te(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const p of f.z_)p.Y_(a)&&(c=!0)}),c&&Lg(u)}(r.eventManager,e),i.length&&r.Ca.E_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function GL(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Oa.get(e),s=i&&i.key;if(s){let o=new qe(K.comparator);o=o.insert(s,Et.newNoDocument(s,ee.min()));const a=le().add(s),u=new Dh(ee.min(),new Map,new qe(de),o,a);await C1(r,u),r.xa=r.xa.remove(s),r.Oa.delete(e),Vg(r)}else await Op(r.localStore,e,!1).then(()=>Mp(r,e,n)).catch(wl)}async function KL(t,e){const n=te(t),r=e.batch.batchId;try{const i=await oL(n.localStore,e);R1(n,r,null),x1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Cl(n,i)}catch(i){await wl(i)}}async function QL(t,e,n){const r=te(t);try{const i=await function(o,a){const u=te(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(ye(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);R1(r,e,n),x1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Cl(r,i)}catch(i){await wl(i)}}function x1(t,e){(t.Ba.get(e)||[]).forEach(n=>{n.resolve()}),t.Ba.delete(e)}function R1(t,e,n){const r=te(t);let i=r.La[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.La[r.currentUser.toKey()]=i}}function Mp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fa.get(e))t.va.delete(r),n&&t.Ca.Ka(r,n);t.Fa.delete(e),t.isPrimaryClient&&t.Na.mr(e).forEach(r=>{t.Na.containsKey(r)||A1(t,r)})}function A1(t,e){t.Ma.delete(e.path.canonicalString());const n=t.xa.get(e);n!==null&&(Rg(t.remoteStore,n),t.xa=t.xa.remove(e),t.Oa.delete(n),Vg(t))}function sw(t,e,n){for(const r of n)r instanceof T1?(t.Na.addReference(r.key,e),YL(t,r)):r instanceof I1?(G("SyncEngine","Document no longer in limbo: "+r.key),t.Na.removeReference(r.key,e),t.Na.containsKey(r.key)||A1(t,r.key)):Z()}function YL(t,e){const n=e.key,r=n.path.canonicalString();t.xa.get(n)||t.Ma.has(r)||(G("SyncEngine","New document in limbo: "+n),t.Ma.add(r),Vg(t))}function Vg(t){for(;t.Ma.size>0&&t.xa.size<t.maxConcurrentLimboResolutions;){const e=t.Ma.values().next().value;t.Ma.delete(e);const n=new K(Te.fromString(e)),r=t.ka.next();t.Oa.set(r,new UL(n)),t.xa=t.xa.insert(n,r),g1(t.remoteStore,new br(bn(Ah(n.path)),r,"TargetPurposeLimboResolution",pg.oe))}}async function Cl(t,e,n){const r=te(t),i=[],s=[],o=[];r.va.isEmpty()||(r.va.forEach((a,u)=>{o.push(r.Qa(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=xg.Ui(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.E_(i),await async function(u,c){const d=te(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>U.forEach(c,p=>U.forEach(p.Ki,v=>d.persistence.referenceDelegate.addReference(f,p.targetId,v)).next(()=>U.forEach(p.$i,v=>d.persistence.referenceDelegate.removeReference(f,p.targetId,v)))))}catch(f){if(!El(f))throw f;G("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const v=d.ss.get(p),T=v.snapshotVersion,A=v.withLastLimboFreeSnapshotVersion(T);d.ss=d.ss.insert(p,A)}}}(r.localStore,s))}async function XL(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await d1(n.localStore,e);n.currentUser=e,function(s,o){s.Ba.forEach(a=>{a.forEach(u=>{u.reject(new $(V.CANCELLED,o))})}),s.Ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Cl(n,r.ls)}}function JL(t,e){const n=te(t),r=n.Oa.get(e);if(r&&r.Da)return le().add(r.key);{let i=le();const s=n.Fa.get(e);if(!s)return i;for(const o of s){const a=n.va.get(o);i=i.unionWith(a.view.Ra)}return i}}function N1(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=C1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GL.bind(null,e),e.Ca.E_=LL.bind(null,e.eventManager),e.Ca.Ka=ML.bind(null,e.eventManager),e}function ZL(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=QL.bind(null,e),e}class ow{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Oh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return sL(this.persistence,new rL,e.initialUser,this.serializer)}createPersistence(e){return new eL(Cg.Yr,this.serializer)}createSharedClientState(e){return new dL}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class eM{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>iw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=XL.bind(null,this.syncEngine),await bL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new OL}()}createDatastore(e){const n=Oh(e.databaseInfo.databaseId),r=function(s){return new gL(s)}(e.databaseInfo);return function(s,o,a,u){return new vL(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new EL(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>iw(this.syncEngine,n,0),function(){return Z0.D()?new Z0:new fL}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const f=new jL(i,s,o,a,u,c);return d&&(f.qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);G("RemoteStore","RemoteStore shutting down."),s.N_.add(5),await Sl(s),s.B_.shutdown(),s.k_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Fg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Wa(this.observer.next,e)}error(e){this.observer.error?this.Wa(this.observer.error,e):cr("Uncaught Error in snapshot listener:",e.toString())}Ga(){this.muted=!0}Wa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=vt.UNAUTHENTICATED,this.clientId=DS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{G("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(G("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=bg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function lf(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await d1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function aw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rM(t);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ew(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>ew(e.remoteStore,i)),t._onlineComponents=e}function nM(t){return t.name==="FirebaseError"?t.code===V.FAILED_PRECONDITION||t.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function rM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await lf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!nM(n))throw n;Ws("Error using user provided cache. Falling back to memory cache: "+n),await lf(t,new ow)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await lf(t,new ow);return t._offlineComponents}async function k1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await aw(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await aw(t,new eM))),t._onlineComponents}function iM(t){return k1(t).then(e=>e.syncEngine)}async function Pc(t){const e=await k1(t),n=e.eventManager;return n.onListen=BL.bind(null,e.syncEngine),n.onUnlisten=WL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=zL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=qL.bind(null,e.syncEngine),n}function sM(t,e,n={}){const r=new nr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new Fg({next:p=>{o.enqueueAndForget(()=>Og(s,f));const v=p.docs.has(a);!v&&p.fromCache?c.reject(new $(V.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&p.fromCache&&u&&u.source==="server"?c.reject(new $(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new Mg(Ah(a.path),d,{includeMetadataChanges:!0,oa:!0});return Dg(s,f)}(await Pc(t),t.asyncQueue,e,n,r)),r.promise}function oM(t,e,n={}){const r=new nr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new Fg({next:p=>{o.enqueueAndForget(()=>Og(s,f)),p.fromCache&&u.source==="server"?c.reject(new $(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new Mg(a,d,{includeMetadataChanges:!0,oa:!0});return Dg(s,f)}(await Pc(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function P1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(t,e,n){if(!n)throw new $(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function aM(t,e,n,r){if(e===!0&&r===!0)throw new $(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function uw(t){if(!K.isDocumentKey(t))throw new $(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cw(t){if(K.isDocumentKey(t))throw new $(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function sn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vh(t);throw new $(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function lM(t,e){if(e<=0)throw new $(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=P1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hw(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ID;switch(r.type){case"firstParty":return new RD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=lw.get(n);r&&(G("ComponentProvider","Removing Datastore"),lw.delete(n),r.terminate())}(this),Promise.resolve()}}function uM(t,e,n,r={}){var i;const s=(t=sn(t,Fh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ws("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=vt.MOCK_USER;else{a=Zm(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new $(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new vt(c)}t._authCredentials=new SD(new bS(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vn(this.firestore,e,this._query)}}class Nt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}}class qr extends Vn{constructor(e,n,r){super(e,n,Ah(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new K(e))}withConverter(e){return new qr(this.firestore,e,this._path)}}function jt(t,e,...n){if(t=me(t),b1("collection","path",e),t instanceof Fh){const r=Te.fromString(e,...n);return cw(r),new qr(t,null,r)}{if(!(t instanceof Nt||t instanceof qr))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return cw(r),new qr(t.firestore,null,r)}}function Ln(t,e,...n){if(t=me(t),arguments.length===1&&(e=DS.newId()),b1("doc","path",e),t instanceof Fh){const r=Te.fromString(e,...n);return uw(r),new Nt(t,null,new K(r))}{if(!(t instanceof Nt||t instanceof qr))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return uw(r),new Nt(t.firestore,t instanceof qr?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cM{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new p1(this,"async_queue_retry"),this.Tu=()=>{const n=af();n&&G("AsyncQueue","Visibility state changed to "+n.visibilityState),this.e_.zo()};const e=af();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Eu(),this.du(e)}enterRestrictedMode(e){if(!this.uu){this.uu=!0,this.Pu=e||!1;const n=af();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Tu)}}enqueue(e){if(this.Eu(),this.uu)return new Promise(()=>{});const n=new nr;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.au.push(e),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(e){if(!El(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(e){const n=this._u.then(()=>(this.hu=!0,e().catch(r=>{this.lu=r,this.hu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw cr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.hu=!1,r))));return this._u=n,n}enqueueAfterDelay(e,n,r){this.Eu(),this.Iu.indexOf(e)>-1&&(n=0);const i=Pg.createAndSchedule(this,e,n,r,s=>this.Ru(s));return this.cu.push(i),i}Eu(){this.lu&&Z()}verifyOperationInProgress(){}async Vu(){let e;do e=this._u,await e;while(e!==this._u)}mu(e){for(const n of this.cu)if(n.timerId===e)return!0;return!1}fu(e){return this.Vu().then(()=>{this.cu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.cu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Vu()})}gu(e){this.Iu.push(e)}Ru(e){const n=this.cu.indexOf(e);this.cu.splice(n,1)}}function dw(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Zr extends Fh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new cM}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||D1(this),this._firestoreClient.terminate()}}function hM(t,e){const n=typeof t=="object"?t:wh(),r=typeof t=="string"?t:"(default)",i=ml(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Jm("firestore");s&&uM(i,...s)}return i}function Uh(t){return t._firestoreClient||D1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function D1(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new jD(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,P1(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new tM(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xs(dt.fromBase64String(e))}catch(n){throw new $(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xs(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dM=/^__.*__$/;class fM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new li(e,this.data,this.fieldMask,n,this.fieldTransforms):new Tl(e,this.data,n,this.fieldTransforms)}}class O1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new li(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function L1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class jg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get yu(){return this.settings.yu}wu(e){return new jg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.wu({path:r,bu:!1});return i.Du(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.wu({path:r,bu:!1});return i.pu(),i}vu(e){return this.wu({path:void 0,bu:!0})}Fu(e){return bc(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.xu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Du(this.path.get(e))}Du(e){if(e.length===0)throw this.Fu("Document fields must not be empty");if(L1(this.yu)&&dM.test(e))throw this.Fu('Document fields cannot begin and end with "__"')}}class pM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Oh(e)}Ou(e,n,r,i=!1){return new jg({yu:e,methodName:n,xu:r,path:at.emptyPath(),bu:!1,Mu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zh(t){const e=t._freezeSettings(),n=Oh(t._databaseId);return new pM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function mM(t,e,n,r,i,s={}){const o=t.Ou(s.merge||s.mergeFields?2:0,e,n,i);zg("Data must be an object, but it was:",o,r);const a=V1(r,o);let u,c;if(s.merge)u=new Gt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const p=Vp(e,f,n);if(!o.contains(p))throw new $(V.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);U1(d,p)||d.push(p)}u=new Gt(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new fM(new Dt(a),u,c)}class $h extends Bh{_toFieldTransform(e){if(e.yu!==2)throw e.yu===1?e.Fu(`${this._methodName}() can only appear at the top level of your update data`):e.Fu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $h}}class Bg extends Bh{_toFieldTransform(e){return new cO(e.path,new Xa)}isEqual(e){return e instanceof Bg}}function gM(t,e,n,r){const i=t.Ou(1,e,n);zg("Data must be an object, but it was:",i,r);const s=[],o=Dt.empty();Qi(r,(u,c)=>{const d=$g(e,u,n);c=me(c);const f=i.Cu(d);if(c instanceof $h)s.push(d);else{const p=xl(c,f);p!=null&&(s.push(d),o.set(d,p))}});const a=new Gt(s);return new O1(o,a,i.fieldTransforms)}function _M(t,e,n,r,i,s){const o=t.Ou(1,e,n),a=[Vp(e,r,n)],u=[i];if(s.length%2!=0)throw new $(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(Vp(e,s[p])),u.push(s[p+1]);const c=[],d=Dt.empty();for(let p=a.length-1;p>=0;--p)if(!U1(c,a[p])){const v=a[p];let T=u[p];T=me(T);const A=o.Cu(v);if(T instanceof $h)c.push(v);else{const N=xl(T,A);N!=null&&(c.push(v),d.set(v,N))}}const f=new Gt(c);return new O1(d,f,o.fieldTransforms)}function M1(t,e,n,r=!1){return xl(n,t.Ou(r?4:3,e))}function xl(t,e){if(F1(t=me(t)))return zg("Unsupported field value:",e,t),V1(t,e);if(t instanceof Bh)return function(r,i){if(!L1(i.yu))throw i.Fu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Fu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.bu&&e.yu!==4)throw e.Fu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=xl(a,i.vu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return aO(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ye.fromDate(r);return{timestampValue:Nc(i.serializer,s)}}if(r instanceof Ye){const s=new Ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Nc(i.serializer,s)}}if(r instanceof Ug)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xs)return{bytesValue:s1(i.serializer,r._byteString)};if(r instanceof Nt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Fu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ig(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Fu(`Unsupported field value: ${Vh(r)}`)}(t,e)}function V1(t,e){const n={};return OS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qi(t,(r,i)=>{const s=xl(i,e.Su(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function F1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ye||t instanceof Ug||t instanceof Xs||t instanceof Nt||t instanceof Bh)}function zg(t,e,n){if(!F1(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Vh(n);throw r==="an object"?e.Fu(t+" a custom object"):e.Fu(t+" "+r)}}function Vp(t,e,n){if((e=me(e))instanceof jh)return e._internalPath;if(typeof e=="string")return $g(t,e);throw bc("Field path arguments must be of type string or ",t,!1,void 0,n)}const yM=new RegExp("[~\\*/\\[\\]]");function $g(t,e,n){if(e.search(yM)>=0)throw bc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new jh(...e.split("."))._internalPath}catch{throw bc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(V.INVALID_ARGUMENT,a+t+u)}function U1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(qg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class vM extends Wg{data(){return super.data()}}function qg(t,e){return typeof e=="string"?$g(t,e):e instanceof jh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hg{}class Wh extends Hg{}function Dc(t,e,...n){let r=[];e instanceof Hg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Kg).length,a=s.filter(u=>u instanceof Gg).length;if(o>1||o>0&&a>0)throw new $(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Gg extends Wh{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Gg(e,n,r)}_apply(e){const n=this._parse(e);return z1(e._query,n),new Vn(e.firestore,e.converter,Np(e._query,n))}_parse(e){const n=zh(e.firestore);return function(s,o,a,u,c,d,f){let p;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new $(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){pw(f,d);const v=[];for(const T of f)v.push(fw(u,s,T));p={arrayValue:{values:v}}}else p=fw(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||pw(f,d),p=M1(a,o,f,d==="in"||d==="not-in");return We.create(c,d,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Kg extends Hg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Kg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Tn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)z1(o,u),o=Np(o,u)}(e._query,n),new Vn(e.firestore,e.converter,Np(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qg extends Wh{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Qg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new $(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ya(s,o)}(e._query,this._field,this._direction);return new Vn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Yi(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function wM(t,e="asc"){const n=e,r=qg("orderBy",t);return Qg._create(r,n)}class Yg extends Wh{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Yg(e,n,r)}_apply(e){return new Vn(e.firestore,e.converter,Rc(e._query,this._limit,this._limitType))}}function Fp(t){return lM("limit",t),Yg._create("limit",t,"F")}class Xg extends Wh{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Xg(e,n,r)}_apply(e){const n=EM(e,this.type,this._docOrFields,this._inclusive);return new Vn(e.firestore,e.converter,function(i,s){return new Yi(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function B1(...t){return Xg._create("startAfter",t,!1)}function EM(t,e,n,r){if(n[0]=me(n[0]),n[0]instanceof Wg)return function(s,o,a,u,c){if(!u)throw new $(V.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const f of Ps(s))if(f.field.isKeyField())d.push(xc(o,u.key));else{const p=u.data.field(f.field);if(Rh(p))throw new $(V.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(p===null){const v=f.field.canonicalString();throw new $(V.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${v}' (used as the orderBy) does not exist.`)}d.push(p)}return new Ks(d,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=zh(t.firestore);return function(o,a,u,c,d,f){const p=o.explicitOrderBy;if(d.length>p.length)throw new $(V.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const v=[];for(let T=0;T<d.length;T++){const A=d[T];if(p[T].field.isKeyField()){if(typeof A!="string")throw new $(V.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof A}`);if(!vg(o)&&A.indexOf("/")!==-1)throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${A}' contains a slash.`);const N=o.path.child(Te.fromString(A));if(!K.isDocumentKey(N))throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${N}' is not because it contains an odd number of segments.`);const I=new K(N);v.push(xc(a,I))}else{const N=M1(u,c,A);v.push(N)}}return new Ks(v,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function fw(t,e,n){if(typeof(n=me(n))=="string"){if(n==="")throw new $(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vg(e)&&n.indexOf("/")!==-1)throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!K.isDocumentKey(r))throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return xc(t,new K(r))}if(n instanceof Nt)return xc(t,n._key);throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vh(n)}.`)}function pw(t,e){if(!Array.isArray(t)||t.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function z1(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class TM{convertValue(e,n="none"){switch(Ui(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Qi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Ug(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=mg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ga(e));default:return null}}convertTimestamp(e){const n=Xr(e);return new Ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);ye(h1(r));const i=new Ka(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||cr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IM(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $1 extends Wg{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(qg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class zu extends $1{data(e={}){return super.data(e)}}class W1{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ra(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new zu(this._firestore,this._userDataWriter,r.key,r,new ra(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new zu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ra(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new zu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ra(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:SM(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function SM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CM(t){t=sn(t,Nt);const e=sn(t.firestore,Zr);return sM(Uh(e),t._key).then(n=>q1(e,t,n))}class Jg extends TM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}function ji(t){t=sn(t,Vn);const e=sn(t.firestore,Zr),n=Uh(e),r=new Jg(e);return j1(t._query),oM(n,t._query).then(i=>new W1(e,r,t,i))}function qh(t,e,n,...r){t=sn(t,Nt);const i=sn(t.firestore,Zr),s=zh(i);let o;return o=typeof(e=me(e))=="string"||e instanceof jh?_M(s,"updateDoc",t._key,e,n,r):gM(s,"updateDoc",t._key,e),Zg(i,[o.toMutation(t._key,yn.exists(!0))])}function Js(t){return Zg(sn(t.firestore,Zr),[new wg(t._key,yn.none())])}function po(t,e){const n=sn(t.firestore,Zr),r=Ln(t),i=IM(t.converter,e);return Zg(n,[mM(zh(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,yn.exists(!1))]).then(()=>r)}function Up(t,...e){var n,r,i;t=me(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||dw(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(dw(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,d;if(t instanceof Nt)c=sn(t.firestore,Zr),d=Ah(t._key.path),u={next:f=>{e[o]&&e[o](q1(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=sn(t,Vn);c=sn(f.firestore,Zr),d=f._query;const p=new Jg(c);u={next:v=>{e[o]&&e[o](new W1(c,p,f,v))},error:e[o+1],complete:e[o+2]},j1(t._query)}return function(p,v,T,A){const N=new Fg(A),I=new Mg(v,N,T);return p.asyncQueue.enqueueAndForget(async()=>Dg(await Pc(p),I)),()=>{N.Ga(),p.asyncQueue.enqueueAndForget(async()=>Og(await Pc(p),I))}}(Uh(c),d,a,u)}function Zg(t,e){return function(r,i){const s=new nr;return r.asyncQueue.enqueueAndForget(async()=>HL(await iM(r),i,s)),s.promise}(Uh(t),e)}function q1(t,e,n){const r=n.docs.get(e._key),i=new Jg(t);return new $1(t,i,e._key,r,new ra(n.hasPendingWrites,n.fromCache),e.converter)}function H1(){return new Bg("serverTimestamp")}(function(e,n=!0){(function(i){co=i})(si),Qr(new lr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Zr(new CD(r.getProvider("auth-internal")),new ND(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new $(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ka(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),rn(P0,"4.6.5",e),rn(P0,"4.6.5","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1="firebasestorage.googleapis.com",K1="storageBucket",xM=2*60*1e3,RM=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends Mn{constructor(e,n,r=0){super(uf(e),`Firebase Storage: ${n} (${uf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Fe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return uf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ve;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ve||(Ve={}));function uf(t){return"storage/"+t}function e_(){const t="An unknown error occurred, please check the error payload for server response.";return new Fe(Ve.UNKNOWN,t)}function AM(t){return new Fe(Ve.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function NM(t){return new Fe(Ve.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function kM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Fe(Ve.UNAUTHENTICATED,t)}function PM(){return new Fe(Ve.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function bM(t){return new Fe(Ve.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function DM(){return new Fe(Ve.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function OM(){return new Fe(Ve.CANCELED,"User canceled the upload/download.")}function LM(t){return new Fe(Ve.INVALID_URL,"Invalid URL '"+t+"'.")}function MM(t){return new Fe(Ve.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function VM(){return new Fe(Ve.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+K1+"' property when initializing the app?")}function FM(){return new Fe(Ve.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function UM(){return new Fe(Ve.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function jM(t){return new Fe(Ve.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function jp(t){return new Fe(Ve.INVALID_ARGUMENT,t)}function Q1(){return new Fe(Ve.APP_DELETED,"The Firebase app was deleted.")}function BM(t){return new Fe(Ve.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function _a(t,e){return new Fe(Ve.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function zo(t){throw new Fe(Ve.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Kt.makeFromUrl(e,n)}catch{return new Kt(e,"")}if(r.path==="")return r;throw MM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",v=new RegExp(`^https?://${f}/${d}/b/${i}/o${p}`,"i"),T={bucket:1,path:3},A=n===G1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",I=new RegExp(`^https?://${A}/${i}/${N}`,"i"),x=[{regex:a,indices:u,postModify:s},{regex:v,indices:T,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<x.length;D++){const O=x[D],F=O.regex.exec(e);if(F){const S=F[O.indices.bucket];let _=F[O.indices.path];_||(_=""),r=new Kt(S,_),O.postModify(r);break}}if(r==null)throw LM(e);return r}}class zM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $M(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function d(...N){c||(c=!0,e.apply(null,N))}function f(N){i=setTimeout(()=>{i=null,t(v,u())},N)}function p(){s&&clearTimeout(s)}function v(N,...I){if(c){p();return}if(N){p(),d.call(null,N,...I);return}if(u()||o){p(),d.call(null,N,...I);return}r<64&&(r*=2);let x;a===1?(a=2,x=0):x=(r+Math.random())*1e3,f(x)}let T=!1;function A(N){T||(T=!0,p(),!c&&(i!==null?(N||(a=2),clearTimeout(i),f(0)):N||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,A(!0)},n),A}function WM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qM(t){return t!==void 0}function HM(t){return typeof t=="object"&&!Array.isArray(t)}function t_(t){return typeof t=="string"||t instanceof String}function mw(t){return n_()&&t instanceof Blob}function n_(){return typeof Blob<"u"}function gw(t,e,n,r){if(r<e)throw jp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw jp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Y1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function GM(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{constructor(e,n,r,i,s,o,a,u,c,d,f,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,T)=>{this.resolve_=v,this.reject_=T,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new yu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Ai.NO_ERROR,u=s.getStatus();if(!a||GM(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Ai.ABORT;r(!1,new yu(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new yu(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());qM(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=e_();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?Q1():OM();o(u)}else{const u=DM();o(u)}};this.canceled_?n(!1,new yu(!1,null,!0)):this.backoffId_=$M(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&WM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class yu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function QM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function YM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function XM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function JM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ZM(t,e,n,r,i,s,o=!0){const a=Y1(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return XM(c,e),QM(c,n),YM(c,s),JM(c,r),new KM(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e4(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function t4(...t){const e=e4();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(n_())return new Blob(t);throw new Fe(Ve.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function n4(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function r4(t){if(typeof atob>"u")throw jM("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class cf{constructor(e,n){this.data=e,this.contentType=n||null}}function i4(t,e){switch(t){case Rn.RAW:return new cf(X1(e));case Rn.BASE64:case Rn.BASE64URL:return new cf(J1(t,e));case Rn.DATA_URL:return new cf(o4(e),a4(e))}throw e_()}function X1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function s4(t){let e;try{e=decodeURIComponent(t)}catch{throw _a(Rn.DATA_URL,"Malformed data URL.")}return X1(e)}function J1(t,e){switch(t){case Rn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw _a(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Rn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw _a(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=r4(e)}catch(i){throw i.message.includes("polyfill")?i:_a(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Z1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw _a(Rn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=l4(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function o4(t){const e=new Z1(t);return e.base64?J1(Rn.BASE64,e.rest):s4(e.rest)}function a4(t){return new Z1(t).contentType}function l4(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n){let r=0,i="";mw(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(mw(this.data_)){const r=this.data_,i=n4(r,e,n);return i===null?null:new Ar(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Ar(r,!0)}}static getBlob(...e){if(n_()){const n=e.map(r=>r instanceof Ar?r.data_:r);return new Ar(t4.apply(null,n))}else{const n=e.map(o=>t_(o)?i4(Rn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Ar(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(t){let e;try{e=JSON.parse(t)}catch{return null}return HM(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function c4(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function tC(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h4(t,e){return e}class xt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||h4}}let vu=null;function d4(t){return!t_(t)||t.length<2?t:tC(t)}function nC(){if(vu)return vu;const t=[];t.push(new xt("bucket")),t.push(new xt("generation")),t.push(new xt("metageneration")),t.push(new xt("name","fullPath",!0));function e(s,o){return d4(o)}const n=new xt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new xt("size");return i.xform=r,t.push(i),t.push(new xt("timeCreated")),t.push(new xt("updated")),t.push(new xt("md5Hash",null,!0)),t.push(new xt("cacheControl",null,!0)),t.push(new xt("contentDisposition",null,!0)),t.push(new xt("contentEncoding",null,!0)),t.push(new xt("contentLanguage",null,!0)),t.push(new xt("contentType",null,!0)),t.push(new xt("metadata","customMetadata",!0)),vu=t,vu}function f4(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Kt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function p4(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return f4(r,t),r}function rC(t,e,n){const r=eC(e);return r===null?null:p4(t,r,n)}function m4(t,e,n,r){const i=eC(e);if(i===null||!t_(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,f=t.fullPath,p="/b/"+o(d)+"/o/"+o(f),v=r_(p,n,r),T=Y1({alt:"media",token:c});return v+T})[0]}function g4(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class iC{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(t){if(!t)throw e_()}function _4(t,e){function n(r,i){const s=rC(t,i,e);return sC(s!==null),s}return n}function y4(t,e){function n(r,i){const s=rC(t,i,e);return sC(s!==null),m4(s,i,t.host,t._protocol)}return n}function oC(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=PM():i=kM():n.getStatus()===402?i=NM(t.bucket):n.getStatus()===403?i=bM(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function v4(t){const e=oC(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=AM(t.path)),s.serverResponse=i.serverResponse,s}return n}function w4(t,e,n){const r=e.fullServerUrl(),i=r_(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new iC(i,s,y4(t,n),o);return a.errorHandler=v4(e),a}function E4(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function T4(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=E4(null,e)),r}function I4(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let x="";for(let D=0;D<2;D++)x=x+Math.random().toString().slice(2);return x}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=T4(e,r,i),d=g4(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,p=`\r
--`+u+"--",v=Ar.getBlob(f,r,p);if(v===null)throw FM();const T={name:c.fullPath},A=r_(s,t.host,t._protocol),N="POST",I=t.maxUploadRetryTime,w=new iC(A,N,_4(t,n),I);return w.urlParams=T,w.headers=o,w.body=v.uploadData(),w.errorHandler=oC(e),w}class S4{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ai.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ai.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ai.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw zo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw zo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw zo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw zo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw zo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class C4 extends S4{initXhr(){this.xhr_.responseType="text"}}function aC(){return new C4}/**
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
 */class Bi{constructor(e,n){this._service=e,n instanceof Kt?this._location=n:this._location=Kt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Bi(e,n)}get root(){const e=new Kt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return tC(this._location.path)}get storage(){return this._service}get parent(){const e=u4(this._location.path);if(e===null)return null;const n=new Kt(this._location.bucket,e);return new Bi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw BM(e)}}function x4(t,e,n){t._throwIfRoot("uploadBytes");const r=I4(t.storage,t._location,nC(),new Ar(e,!0),n);return t.storage.makeRequestWithTokens(r,aC).then(i=>({metadata:i,ref:t}))}function R4(t){t._throwIfRoot("getDownloadURL");const e=w4(t.storage,t._location,nC());return t.storage.makeRequestWithTokens(e,aC).then(n=>{if(n===null)throw UM();return n})}function A4(t,e){const n=c4(t._location.path,e),r=new Kt(t._location.bucket,n);return new Bi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N4(t){return/^[A-Za-z]+:\/\//.test(t)}function k4(t,e){return new Bi(t,e)}function lC(t,e){if(t instanceof i_){const n=t;if(n._bucket==null)throw VM();const r=new Bi(n,n._bucket);return e!=null?lC(r,e):r}else return e!==void 0?A4(t,e):t}function P4(t,e){if(e&&N4(e)){if(t instanceof i_)return k4(t,e);throw jp("To use ref(service, url), the first argument must be a Storage instance.")}else return lC(t,e)}function _w(t,e){const n=e==null?void 0:e[K1];return n==null?null:Kt.makeFromBucketSpec(n,t)}function b4(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Zm(i,t.app.options.projectId))}class i_{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=G1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=xM,this._maxUploadRetryTime=RM,this._requests=new Set,i!=null?this._bucket=Kt.makeFromBucketSpec(i,this._host):this._bucket=_w(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Kt.makeFromBucketSpec(this._url,e):this._bucket=_w(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){gw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){gw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Bi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new zM(Q1());{const o=ZM(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const yw="@firebase/storage",vw="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC="storage";function el(t,e,n){return t=me(t),x4(t,e,n)}function tl(t){return t=me(t),R4(t)}function nl(t,e){return t=me(t),P4(t,e)}function cC(t=wh(),e){t=me(t);const r=ml(t,uC).getImmediate({identifier:e}),i=Jm("storage");return i&&D4(r,...i),r}function D4(t,e,n,r={}){b4(t,e,n,r)}function O4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new i_(n,r,i,e,si)}function L4(){Qr(new lr(uC,O4,"PUBLIC").setMultipleInstances(!0)),rn(yw,vw,""),rn(yw,vw,"esm2017")}L4();var ww={};const Ew="@firebase/database",Tw="1.0.7";/**
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
 */let hC="";function M4(t){hC=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V4{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),nt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:za(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F4{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return mr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new V4(e)}}catch{}return new F4},Ti=dC("localStorage"),U4=dC("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=new vh("@firebase/database"),j4=function(){let t=1;return function(){return t++}}(),fC=function(t){const e=tP(t),n=new Xk;n.update(e);const r=n.digest();return Xm.encodeByteArray(r)},Rl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Rl.apply(null,r):typeof r=="object"?e+=nt(r):e+=r,e+=" "}return e};let ya=null,Iw=!0;const B4=function(t,e){B(!e,"Can't turn on custom loggers persistently."),Ds.logLevel=ae.VERBOSE,ya=Ds.log.bind(Ds)},Tt=function(...t){if(Iw===!0&&(Iw=!1,ya===null&&U4.get("logging_enabled")===!0&&B4()),ya){const e=Rl.apply(null,t);ya(e)}},Al=function(t){return function(...e){Tt(t,...e)}},Bp=function(...t){const e="FIREBASE INTERNAL ERROR: "+Rl(...t);Ds.error(e)},dr=function(...t){const e=`FIREBASE FATAL ERROR: ${Rl(...t)}`;throw Ds.error(e),new Error(e)},Bt=function(...t){const e="FIREBASE WARNING: "+Rl(...t);Ds.warn(e)},z4=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Bt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},pC=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},$4=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Zs="[MIN_NAME]",zi="[MAX_NAME]",mo=function(t,e){if(t===e)return 0;if(t===Zs||e===zi)return-1;if(e===Zs||t===zi)return 1;{const n=Sw(t),r=Sw(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},W4=function(t,e){return t===e?0:t<e?-1:1},$o=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+nt(e))},s_=function(t){if(typeof t!="object"||t===null)return nt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=nt(e[r]),n+=":",n+=s_(t[e[r]]);return n+="}",n},mC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function zt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const gC=function(t){B(!pC(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let f="";for(u=0;u<64;u+=8){let p=parseInt(d.substr(u,8),2).toString(16);p.length===1&&(p="0"+p),f=f+p}return f.toLowerCase()},q4=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},H4=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function G4(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const K4=new RegExp("^-?(0*)\\d{1,10}$"),Q4=-2147483648,Y4=2147483647,Sw=function(t){if(K4.test(t)){const e=Number(t);if(e>=Q4&&e<=Y4)return e}return null},go=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Bt("Exception was thrown by user callback.",n),e},Math.floor(0))}},X4=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},va=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class J4{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Bt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z4{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Tt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Bt(e)}}class $u{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}$u.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_="5",_C="v",yC="s",vC="r",wC="f",EC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,TC="ls",IC="p",zp="ac",SC="websocket",CC="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ti.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ti.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function eV(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function RC(t,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let r;if(e===SC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===CC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);eV(t)&&(n.ns=t.namespace);const i=[];return zt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(){this.counters_={}}incrementCounter(e,n=1){mr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Ok(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf={},df={};function a_(t){const e=t.toString();return hf[e]||(hf[e]=new tV),hf[e]}function nV(t,e){const n=t.toString();return df[n]||(df[n]=e()),df[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&go(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw="start",iV="close",sV="pLPCommand",oV="pRTLPCB",AC="id",NC="pw",kC="ser",aV="cb",lV="seg",uV="ts",cV="d",hV="dframe",PC=1870,bC=30,dV=PC-bC,fV=25e3,pV=3e4;class Es{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Al(e),this.stats_=a_(n),this.urlFn=u=>(this.appCheckToken&&(u[zp]=this.appCheckToken),RC(n,CC,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new rV(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(pV)),$4(()=>{if(this.isClosed_)return;this.scriptTagHolder=new l_((...s)=>{const[o,a,u,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Cw)this.id=a,this.password=u;else if(o===iV)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Cw]="t",r[kC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[aV]=this.scriptTagHolder.uniqueCallbackIdentifier),r[_C]=o_,this.transportSessionId&&(r[yC]=this.transportSessionId),this.lastSessionId&&(r[TC]=this.lastSessionId),this.applicationId&&(r[IC]=this.applicationId),this.appCheckToken&&(r[zp]=this.appCheckToken),typeof location<"u"&&location.hostname&&EC.test(location.hostname)&&(r[vC]=wC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Es.forceAllow_=!0}static forceDisallow(){Es.forceDisallow_=!0}static isAvailable(){return Es.forceAllow_?!0:!Es.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!q4()&&!H4()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=DI(n),i=mC(r,dV);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[hV]="t",r[AC]=e,r[NC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=nt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class l_{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=j4(),window[sV+this.uniqueCallbackIdentifier]=e,window[oV+this.uniqueCallbackIdentifier]=n,this.myIFrame=l_.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Tt("frame writing exception"),a.stack&&Tt(a.stack),Tt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Tt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[AC]=this.myID,e[NC]=this.myPW,e[kC]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+bC+r.length<=PC;){const o=this.pendingSegs.shift();r=r+"&"+lV+i+"="+o.seg+"&"+uV+i+"="+o.ts+"&"+cV+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(fV)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Tt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mV=16384,gV=45e3;let Oc=null;typeof MozWebSocket<"u"?Oc=MozWebSocket:typeof WebSocket<"u"&&(Oc=WebSocket);class fn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Al(this.connId),this.stats_=a_(n),this.connURL=fn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[_C]=o_,typeof location<"u"&&location.hostname&&EC.test(location.hostname)&&(o[vC]=wC),n&&(o[yC]=n),r&&(o[TC]=r),i&&(o[zp]=i),s&&(o[IC]=s),RC(e,SC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ti.set("previous_websocket_failure",!0);try{let r;UI(),this.mySock=new Oc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){fn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Oc!==null&&!fn.forceDisallow_}static previouslyFailed(){return Ti.isInMemoryStorage||Ti.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ti.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=za(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=mC(n,mV);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(gV))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}fn.responsesRequiredToBeHealthy=2;fn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Es,fn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=fn&&fn.isAvailable();let r=n&&!fn.previouslyFailed();if(e.webSocketOnly&&(n||Bt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[fn];else{const i=this.transports_=[];for(const s of rl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);rl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}rl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _V=6e4,yV=5e3,vV=10*1024,wV=100*1024,ff="t",xw="d",EV="s",Rw="r",TV="e",Aw="o",Nw="a",kw="n",Pw="p",IV="h";class SV{constructor(e,n,r,i,s,o,a,u,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Al("c:"+this.id+":"),this.transportManager_=new rl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=va(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>wV?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>vV?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ff in e){const n=e[ff];n===Nw?this.upgradeIfSecondaryHealthy_():n===Rw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Aw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=$o("t",e),r=$o("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Pw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Nw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:kw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=$o("t",e),r=$o("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=$o(ff,e);if(xw in e){const r=e[xw];if(n===IV){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===kw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===EV?this.onConnectionShutdown_(r):n===Rw?this.onReset_(r):n===TV?Bp("Server Error: "+r):n===Aw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Bp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),o_!==r&&Bt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),va(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(_V))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):va(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(yV))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Pw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ti.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc extends OC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!eg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Lc}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw=32,Dw=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function fe(){return new ve("")}function re(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ei(t){return t.pieces_.length-t.pieceNum_}function Ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ve(t.pieces_,e)}function LC(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function CV(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function MC(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function VC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ve(e,0)}function Ge(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ve)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ve(n,0)}function se(t){return t.pieceNum_>=t.pieces_.length}function Lt(t,e){const n=re(t),r=re(e);if(n===null)return e;if(n===r)return Lt(Ee(t),Ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function u_(t,e){if(ei(t)!==ei(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function pn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(ei(t)>ei(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class xV{constructor(e,n){this.errorPrefix_=n,this.parts_=MC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=yh(this.parts_[r]);FC(this)}}function RV(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=yh(e),FC(t)}function AV(t){const e=t.parts_.pop();t.byteLength_-=yh(e),t.parts_.length>0&&(t.byteLength_-=1)}function FC(t){if(t.byteLength_>Dw)throw new Error(t.errorPrefix_+"has a key path longer than "+Dw+" bytes ("+t.byteLength_+").");if(t.parts_.length>bw)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+bw+") or object contains a cycle "+_i(t))}function _i(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_ extends OC{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new c_}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=1e3,NV=60*5*1e3,Ow=30*1e3,kV=1.3,PV=3e4,bV="server_kill",Lw=3;class rr extends DC{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=rr.nextPersistentConnectionId_++,this.log_=Al("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Wo,this.maxReconnectDelay_=NV,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!UI())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");c_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Lc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(nt(s)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new _h,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,c=a.s;rr.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&mr(e,"w")){const r=$s(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Bt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Yk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ow)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Qk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+nt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Bp("Unrecognized action received from server: "+nt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Wo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Wo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>PV&&(this.reconnectDelay_=Wo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*kV)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+rr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(f){B(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,p]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Tt("getToken() completed but was canceled"):(Tt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=p&&p.token,a=new SV(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{Bt(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(bV)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Bt(f),u())}}}interrupt(e){Tt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Tt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],fp(this.interruptReasons_)&&(this.reconnectDelay_=Wo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>s_(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ve(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Tt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Lw&&(this.reconnectDelay_=Ow,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Tt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Lw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+hC.replace(/\./g,"-")]=1,eg()?e["framework.cordova"]=1:FI()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Lc.getInstance().currentlyOnline();return fp(this.interruptReasons_)&&e}}rr.nextPersistentConnectionId_=0;rr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Hh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ie(Zs,e),i=new ie(Zs,n);return this.compare(r,i)!==0}minPost(){return ie.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wu;class UC extends Hh{static get __EMPTY_NODE(){return wu}static set __EMPTY_NODE(e){wu=e}compare(e,n){return mo(e.name,n.name)}isDefinedOn(e){throw ao("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ie.MIN}maxPost(){return new ie(zi,wu)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new ie(e,wu)}toString(){return".key"}}const Os=new UC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class tt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??tt.RED,this.left=i??Mt.EMPTY_NODE,this.right=s??Mt.EMPTY_NODE}copy(e,n,r,i,s){return new tt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Mt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Mt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}tt.RED=!0;tt.BLACK=!1;class DV{copy(e,n,r,i,s){return this}insert(e,n,r){return new tt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Mt{constructor(e,n=Mt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Mt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,tt.BLACK,null,null))}remove(e){return new Mt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,tt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Eu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Eu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Eu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Eu(this.root_,null,this.comparator_,!0,e)}}Mt.EMPTY_NODE=new DV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OV(t,e){return mo(t.name,e.name)}function h_(t,e){return mo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $p;function LV(t){$p=t}const jC=function(t){return typeof t=="number"?"number:"+gC(t):"string:"+t},BC=function(t){if(t.isLeafNode()){const e=t.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&mr(e,".sv"),"Priority must be a string or number.")}else B(t===$p||t.isEmpty(),"priority of unexpected type.");B(t===$p||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mw;class Je{constructor(e,n=Je.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),BC(this.priorityNode_)}static set __childrenNodeConstructor(e){Mw=e}static get __childrenNodeConstructor(){return Mw}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Je(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:re(e)===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Je.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=re(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(B(r!==".priority"||ei(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Je.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+jC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=gC(this.value_):e+=this.value_,this.lazyHash_=fC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Je.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Je.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Je.VALUE_TYPE_ORDER.indexOf(n),s=Je.VALUE_TYPE_ORDER.indexOf(r);return B(i>=0,"Unknown leaf type: "+n),B(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Je.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zC,$C;function MV(t){zC=t}function VV(t){$C=t}class FV extends Hh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?mo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ie.MIN}maxPost(){return new ie(zi,new Je("[PRIORITY-POST]",$C))}makePost(e,n){const r=zC(e);return new ie(n,new Je("[PRIORITY-POST]",r))}toString(){return".priority"}}const Me=new FV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UV=Math.log(2);class jV{constructor(e){const n=s=>parseInt(Math.log(s)/UV,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Mc=function(t,e,n,r){t.sort(e);const i=function(u,c){const d=c-u;let f,p;if(d===0)return null;if(d===1)return f=t[u],p=n?n(f):f,new tt(p,f.node,tt.BLACK,null,null);{const v=parseInt(d/2,10)+u,T=i(u,v),A=i(v+1,c);return f=t[v],p=n?n(f):f,new tt(p,f.node,tt.BLACK,T,A)}},s=function(u){let c=null,d=null,f=t.length;const p=function(T,A){const N=f-T,I=f;f-=T;const w=i(N+1,I),x=t[N],D=n?n(x):x;v(new tt(D,x.node,A,null,w))},v=function(T){c?(c.left=T,c=T):(d=T,c=T)};for(let T=0;T<u.count;++T){const A=u.nextBitIsOne(),N=Math.pow(2,u.count-(T+1));A?p(N,tt.BLACK):(p(N,tt.BLACK),p(N,tt.RED))}return d},o=new jV(t.length),a=s(o);return new Mt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pf;const is={};class Zn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return B(is&&Me,"ChildrenNode.ts has not been loaded"),pf=pf||new Zn({".priority":is},{".priority":Me}),pf}get(e){const n=$s(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Mt?n:null}hasIndex(e){return mr(this.indexSet_,e.toString())}addIndex(e,n){B(e!==Os,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ie.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Mc(r,e.getCompare()):a=is;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const d=Object.assign({},this.indexes_);return d[u]=a,new Zn(d,c)}addToIndexes(e,n){const r=_c(this.indexes_,(i,s)=>{const o=$s(this.indexSet_,s);if(B(o,"Missing index implementation for "+s),i===is)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(ie.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),Mc(a,o.getCompare())}else return is;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new ie(e.name,a))),u.insert(e,e.node)}});return new Zn(r,this.indexSet_)}removeFromIndexes(e,n){const r=_c(this.indexes_,i=>{if(i===is)return i;{const s=n.get(e.name);return s?i.remove(new ie(e.name,s)):i}});return new Zn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qo;class X{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&BC(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return qo||(qo=new X(new Mt(h_),null,Zn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||qo}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?qo:n}}getChild(e){const n=re(e);return n===null?this:this.getImmediateChild(n).getChild(Ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ie(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?qo:this.priorityNode_;return new X(i,o,s)}}updateChild(e,n){const r=re(e);if(r===null)return n;{B(re(e)!==".priority"||ei(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ee(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Me,(o,a)=>{n[o]=a.val(e),r++,s&&X.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+jC(this.getPriority().val())+":"),this.forEachChild(Me,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":fC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ie(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ie(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ie(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ie.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ie.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Nl?-1:0}withIndex(e){if(e===Os||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Os||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Me),i=n.getIterator(Me);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Os?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class BV extends X{constructor(){super(new Mt(h_),X.EMPTY_NODE,Zn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const Nl=new BV;Object.defineProperties(ie,{MIN:{value:new ie(Zs,X.EMPTY_NODE)},MAX:{value:new ie(zi,Nl)}});UC.__EMPTY_NODE=X.EMPTY_NODE;Je.__childrenNodeConstructor=X;LV(Nl);VV(Nl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zV=!0;function ot(t,e=null){if(t===null)return X.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Je(n,ot(e))}if(!(t instanceof Array)&&zV){const n=[];let r=!1;if(zt(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=ot(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new ie(o,u)))}}),n.length===0)return X.EMPTY_NODE;const s=Mc(n,OV,o=>o.name,h_);if(r){const o=Mc(n,Me.getCompare());return new X(s,ot(e),new Zn({".priority":o},{".priority":Me}))}else return new X(s,ot(e),Zn.Default)}else{let n=X.EMPTY_NODE;return zt(t,(r,i)=>{if(mr(t,r)&&r.substring(0,1)!=="."){const s=ot(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ot(e))}}MV(ot);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $V extends Hh{constructor(e){super(),this.indexPath_=e,B(!se(e)&&re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?mo(e.name,n.name):s}makePost(e,n){const r=ot(e),i=X.EMPTY_NODE.updateChild(this.indexPath_,r);return new ie(n,i)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,Nl);return new ie(zi,e)}toString(){return MC(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WV extends Hh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?mo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ie.MIN}maxPost(){return ie.MAX}makePost(e,n){const r=ot(e);return new ie(n,r)}toString(){return".value"}}const qV=new WV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WC(t){return{type:"value",snapshotNode:t}}function eo(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function il(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function sl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function HV(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){B(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(il(n,a)):B(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(eo(n,r)):o.trackChildChange(sl(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Me,(i,s)=>{n.hasChild(i)||r.trackChildChange(il(i,s))}),n.isLeafNode()||n.forEachChild(Me,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(sl(i,s,o))}else r.trackChildChange(eo(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e){this.indexedFilter_=new d_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ol.getStartPost_(e),this.endPost_=ol.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new ie(n,r))||(r=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=X.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(X.EMPTY_NODE);const s=this;return n.forEachChild(Me,(o,a)=>{s.matches(new ie(o,a))||(i=i.updateImmediateChild(o,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GV{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ol(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ie(n,r))||(r=X.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=X.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(X.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(p,v)=>f(v,p)}else o=this.index_.getCompare();const a=e;B(a.numChildren()===this.limit_,"");const u=new ie(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(u);if(a.hasChild(n)){const f=a.getImmediateChild(n);let p=i.getChildAfterChild(this.index_,c,this.reverse_);for(;p!=null&&(p.name===n||a.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);const v=p==null?1:o(p,u);if(d&&!r.isEmpty()&&v>=0)return s!=null&&s.trackChildChange(sl(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(il(n,f));const A=a.updateImmediateChild(n,X.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(s!=null&&s.trackChildChange(eo(p.name,p.node)),A.updateImmediateChild(p.name,p.node)):A}}else return r.isEmpty()?e:d&&o(c,u)>=0?(s!=null&&(s.trackChildChange(il(c.name,c.node)),s.trackChildChange(eo(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,X.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Zs}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:zi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Me}copy(){const e=new f_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function KV(t){return t.loadsAllData()?new d_(t.getIndex()):t.hasLimit()?new GV(t):new ol(t)}function Vw(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Me?n="$priority":t.index_===qV?n="$value":t.index_===Os?n="$key":(B(t.index_ instanceof $V,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=nt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=nt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+nt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=nt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+nt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Fw(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Me&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc extends DC{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Al("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Vc.getListenId_(e,r),a={};this.listens_[o]=a;const u=Vw(e._queryParams);this.restRequest_(s+".json",u,(c,d)=>{let f=d;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),$s(this.listens_,o)===a){let p;c?c===401?p="permission_denied":p="rest_error:"+c:p="ok",i(p,null)}})}unlisten(e,n){const r=Vc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Vw(e._queryParams),r=e._path.toString(),i=new _h;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+lo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=za(a.responseText)}catch{Bt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&Bt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QV{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(){return{value:null,children:new Map}}function qC(t,e,n){if(se(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=re(e);t.children.has(r)||t.children.set(r,Fc());const i=t.children.get(r);e=Ee(e),qC(i,e,n)}}function Wp(t,e,n){t.value!==null?n(e,t.value):YV(t,(r,i)=>{const s=new ve(e.toString()+"/"+r);Wp(i,s,n)})}function YV(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XV{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&zt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=10*1e3,JV=30*1e3,ZV=5*60*1e3;class eF{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new XV(e);const r=Uw+(JV-Uw)*Math.random();va(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;zt(e,(i,s)=>{s>0&&mr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),va(this.reportStats_.bind(this),Math.floor(Math.random()*2*ZV))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(mn||(mn={}));function HC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function p_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function m_(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=mn.ACK_USER_WRITE,this.source=HC()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new Uc(fe(),n,this.revert)}}else return B(re(this.path)===e,"operationForChild called for unrelated child."),new Uc(Ee(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n){this.source=e,this.path=n,this.type=mn.LISTEN_COMPLETE}operationForChild(e){return se(this.path)?new al(this.source,fe()):new al(this.source,Ee(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=mn.OVERWRITE}operationForChild(e){return se(this.path)?new $i(this.source,fe(),this.snap.getImmediateChild(e)):new $i(this.source,Ee(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=mn.MERGE}operationForChild(e){if(se(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new $i(this.source,fe(),n.value):new ll(this.source,fe(),n)}else return B(re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ll(this.source,Ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(se(e))return this.isFullyInitialized()&&!this.filtered_;const n=re(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function nF(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(HV(o.childName,o.snapshotNode))}),Ho(t,i,"child_removed",e,r,n),Ho(t,i,"child_added",e,r,n),Ho(t,i,"child_moved",s,r,n),Ho(t,i,"child_changed",e,r,n),Ho(t,i,"value",e,r,n),i}function Ho(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>iF(t,a,u)),o.forEach(a=>{const u=rF(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function rF(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function iF(t,e,n){if(e.childName==null||n.childName==null)throw ao("Should only compare child_ events.");const r=new ie(e.childName,e.snapshotNode),i=new ie(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(t,e){return{eventCache:t,serverCache:e}}function wa(t,e,n,r){return Gh(new Wi(e,n,r),t.serverCache)}function GC(t,e,n,r){return Gh(t.eventCache,new Wi(e,n,r))}function qp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function qi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mf;const sF=()=>(mf||(mf=new Mt(W4)),mf);class xe{constructor(e,n=sF()){this.value=e,this.children=n}static fromObject(e){let n=new xe(null);return zt(e,(r,i)=>{n=n.set(new ve(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:fe(),value:this.value};if(se(e))return null;{const r=re(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ee(e),n);return s!=null?{path:Ge(new ve(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const n=re(e),r=this.children.get(n);return r!==null?r.subtree(Ee(e)):new xe(null)}}set(e,n){if(se(e))return new xe(n,this.children);{const r=re(e),s=(this.children.get(r)||new xe(null)).set(Ee(e),n),o=this.children.insert(r,s);return new xe(this.value,o)}}remove(e){if(se(e))return this.children.isEmpty()?new xe(null):new xe(null,this.children);{const n=re(e),r=this.children.get(n);if(r){const i=r.remove(Ee(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new xe(null):new xe(this.value,s)}else return this}}get(e){if(se(e))return this.value;{const n=re(e),r=this.children.get(n);return r?r.get(Ee(e)):null}}setTree(e,n){if(se(e))return n;{const r=re(e),s=(this.children.get(r)||new xe(null)).setTree(Ee(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new xe(this.value,o)}}fold(e){return this.fold_(fe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ge(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,fe(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(se(e))return null;{const s=re(e),o=this.children.get(s);return o?o.findOnPath_(Ee(e),Ge(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,fe(),n)}foreachOnPath_(e,n,r){if(se(e))return this;{this.value&&r(n,this.value);const i=re(e),s=this.children.get(i);return s?s.foreachOnPath_(Ee(e),Ge(n,i),r):new xe(null)}}foreach(e){this.foreach_(fe(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ge(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.writeTree_=e}static empty(){return new vn(new xe(null))}}function Ea(t,e,n){if(se(e))return new vn(new xe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Lt(i,e);return s=s.updateChild(o,n),new vn(t.writeTree_.set(i,s))}else{const i=new xe(n),s=t.writeTree_.setTree(e,i);return new vn(s)}}}function jw(t,e,n){let r=t;return zt(n,(i,s)=>{r=Ea(r,Ge(e,i),s)}),r}function Bw(t,e){if(se(e))return vn.empty();{const n=t.writeTree_.setTree(e,new xe(null));return new vn(n)}}function Hp(t,e){return Ji(t,e)!=null}function Ji(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Lt(n.path,e)):null}function zw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Me,(r,i)=>{e.push(new ie(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ie(r,i.value))}),e}function Hr(t,e){if(se(e))return t;{const n=Ji(t,e);return n!=null?new vn(new xe(n)):new vn(t.writeTree_.subtree(e))}}function Gp(t){return t.writeTree_.isEmpty()}function to(t,e){return KC(fe(),t.writeTree_,e)}function KC(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(B(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=KC(Ge(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ge(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(t,e){return JC(e,t)}function oF(t,e,n,r,i){B(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ea(t.visibleWrites,e,n)),t.lastWriteId=r}function aF(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function lF(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&uF(a,r.path)?i=!1:pn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return cF(t),!0;if(r.snap)t.visibleWrites=Bw(t.visibleWrites,r.path);else{const a=r.children;zt(a,u=>{t.visibleWrites=Bw(t.visibleWrites,Ge(r.path,u))})}return!0}else return!1}function uF(t,e){if(t.snap)return pn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&pn(Ge(t.path,n),e))return!0;return!1}function cF(t){t.visibleWrites=QC(t.allWrites,hF,fe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function hF(t){return t.visible}function QC(t,e,n){let r=vn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)pn(n,o)?(a=Lt(n,o),r=Ea(r,a,s.snap)):pn(o,n)&&(a=Lt(o,n),r=Ea(r,fe(),s.snap.getChild(a)));else if(s.children){if(pn(n,o))a=Lt(n,o),r=jw(r,a,s.children);else if(pn(o,n))if(a=Lt(o,n),se(a))r=jw(r,fe(),s.children);else{const u=$s(s.children,re(a));if(u){const c=u.getChild(Ee(a));r=Ea(r,fe(),c)}}}else throw ao("WriteRecord should have .snap or .children")}}return r}function YC(t,e,n,r,i){if(!r&&!i){const s=Ji(t.visibleWrites,e);if(s!=null)return s;{const o=Hr(t.visibleWrites,e);if(Gp(o))return n;if(n==null&&!Hp(o,fe()))return null;{const a=n||X.EMPTY_NODE;return to(o,a)}}}else{const s=Hr(t.visibleWrites,e);if(!i&&Gp(s))return n;if(!i&&n==null&&!Hp(s,fe()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(pn(c.path,e)||pn(e,c.path))},a=QC(t.allWrites,o,e),u=n||X.EMPTY_NODE;return to(a,u)}}}function dF(t,e,n){let r=X.EMPTY_NODE;const i=Ji(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Me,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Hr(t.visibleWrites,e);return n.forEachChild(Me,(o,a)=>{const u=to(Hr(s,new ve(o)),a);r=r.updateImmediateChild(o,u)}),zw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Hr(t.visibleWrites,e);return zw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function fF(t,e,n,r,i){B(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ge(e,n);if(Hp(t.visibleWrites,s))return null;{const o=Hr(t.visibleWrites,s);return Gp(o)?i.getChild(n):to(o,i.getChild(n))}}function pF(t,e,n,r){const i=Ge(e,n),s=Ji(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Hr(t.visibleWrites,i);return to(o,r.getNode().getImmediateChild(n))}else return null}function mF(t,e){return Ji(t.visibleWrites,e)}function gF(t,e,n,r,i,s,o){let a;const u=Hr(t.visibleWrites,e),c=Ji(u,fe());if(c!=null)a=c;else if(n!=null)a=to(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),p=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let v=p.getNext();for(;v&&d.length<i;)f(v,r)!==0&&d.push(v),v=p.getNext();return d}else return[]}function _F(){return{visibleWrites:vn.empty(),allWrites:[],lastWriteId:-1}}function jc(t,e,n,r){return YC(t.writeTree,t.treePath,e,n,r)}function __(t,e){return dF(t.writeTree,t.treePath,e)}function $w(t,e,n,r){return fF(t.writeTree,t.treePath,e,n,r)}function Bc(t,e){return mF(t.writeTree,Ge(t.treePath,e))}function yF(t,e,n,r,i,s){return gF(t.writeTree,t.treePath,e,n,r,i,s)}function y_(t,e,n){return pF(t.writeTree,t.treePath,e,n)}function XC(t,e){return JC(Ge(t.treePath,e),t.writeTree)}function JC(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vF{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,sl(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,il(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,eo(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,sl(r,e.snapshotNode,i.oldSnap));else throw ao("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wF{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const ZC=new wF;class v_{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Wi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return y_(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qi(this.viewCache_),s=yF(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EF(t){return{filter:t}}function TF(t,e){B(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function IF(t,e,n,r,i){const s=new vF;let o,a;if(n.type===mn.OVERWRITE){const c=n;c.source.fromUser?o=Kp(t,e,c.path,c.snap,r,i,s):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!se(c.path),o=zc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===mn.MERGE){const c=n;c.source.fromUser?o=CF(t,e,c.path,c.children,r,i,s):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Qp(t,e,c.path,c.children,r,i,a,s))}else if(n.type===mn.ACK_USER_WRITE){const c=n;c.revert?o=AF(t,e,c.path,r,i,s):o=xF(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===mn.LISTEN_COMPLETE)o=RF(t,e,n.path,r,s);else throw ao("Unknown operation type: "+n.type);const u=s.getChanges();return SF(e,o,u),{viewCache:o,changes:u}}function SF(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=qp(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(WC(qp(e)))}}function ex(t,e,n,r,i,s){const o=e.eventCache;if(Bc(r,n)!=null)return e;{let a,u;if(se(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=qi(e),d=c instanceof X?c:X.EMPTY_NODE,f=__(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=jc(r,qi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=re(n);if(c===".priority"){B(ei(n)===1,"Can't have a priority with additional path components");const d=o.getNode();u=e.serverCache.getNode();const f=$w(r,n,d,u);f!=null?a=t.filter.updatePriority(d,f):a=o.getNode()}else{const d=Ee(n);let f;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const p=$w(r,n,o.getNode(),u);p!=null?f=o.getNode().getImmediateChild(c).updateChild(d,p):f=o.getNode().getImmediateChild(c)}else f=y_(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,d,i,s):a=o.getNode()}}return wa(e,a,o.isFullyInitialized()||se(n),t.filter.filtersNodes())}}function zc(t,e,n,r,i,s,o,a){const u=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(se(n))c=d.updateFullNode(u.getNode(),r,null);else if(d.filtersNodes()&&!u.isFiltered()){const v=u.getNode().updateChild(n,r);c=d.updateFullNode(u.getNode(),v,null)}else{const v=re(n);if(!u.isCompleteForPath(n)&&ei(n)>1)return e;const T=Ee(n),N=u.getNode().getImmediateChild(v).updateChild(T,r);v===".priority"?c=d.updatePriority(u.getNode(),N):c=d.updateChild(u.getNode(),v,N,T,ZC,null)}const f=GC(e,c,u.isFullyInitialized()||se(n),d.filtersNodes()),p=new v_(i,f,s);return ex(t,f,n,i,p,a)}function Kp(t,e,n,r,i,s,o){const a=e.eventCache;let u,c;const d=new v_(i,e,s);if(se(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=wa(e,c,!0,t.filter.filtersNodes());else{const f=re(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=wa(e,c,a.isFullyInitialized(),a.isFiltered());else{const p=Ee(n),v=a.getNode().getImmediateChild(f);let T;if(se(p))T=r;else{const A=d.getCompleteChild(f);A!=null?LC(p)===".priority"&&A.getChild(VC(p)).isEmpty()?T=A:T=A.updateChild(p,r):T=X.EMPTY_NODE}if(v.equals(T))u=e;else{const A=t.filter.updateChild(a.getNode(),f,T,p,d,o);u=wa(e,A,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function Ww(t,e){return t.eventCache.isCompleteForChild(e)}function CF(t,e,n,r,i,s,o){let a=e;return r.foreach((u,c)=>{const d=Ge(n,u);Ww(e,re(d))&&(a=Kp(t,a,d,c,i,s,o))}),r.foreach((u,c)=>{const d=Ge(n,u);Ww(e,re(d))||(a=Kp(t,a,d,c,i,s,o))}),a}function qw(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Qp(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;se(n)?c=r:c=new xe(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((f,p)=>{if(d.hasChild(f)){const v=e.serverCache.getNode().getImmediateChild(f),T=qw(t,v,p);u=zc(t,u,new ve(f),T,i,s,o,a)}}),c.children.inorderTraversal((f,p)=>{const v=!e.serverCache.isCompleteForChild(f)&&p.value===null;if(!d.hasChild(f)&&!v){const T=e.serverCache.getNode().getImmediateChild(f),A=qw(t,T,p);u=zc(t,u,new ve(f),A,i,s,o,a)}}),u}function xF(t,e,n,r,i,s,o){if(Bc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(se(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return zc(t,e,n,u.getNode().getChild(n),i,s,a,o);if(se(n)){let c=new xe(null);return u.getNode().forEachChild(Os,(d,f)=>{c=c.set(new ve(d),f)}),Qp(t,e,n,c,i,s,a,o)}else return e}else{let c=new xe(null);return r.foreach((d,f)=>{const p=Ge(n,d);u.isCompleteForPath(p)&&(c=c.set(d,u.getNode().getChild(p)))}),Qp(t,e,n,c,i,s,a,o)}}function RF(t,e,n,r,i){const s=e.serverCache,o=GC(e,s.getNode(),s.isFullyInitialized()||se(n),s.isFiltered());return ex(t,o,n,r,ZC,i)}function AF(t,e,n,r,i,s){let o;if(Bc(r,n)!=null)return e;{const a=new v_(r,e,i),u=e.eventCache.getNode();let c;if(se(n)||re(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=jc(r,qi(e));else{const f=e.serverCache.getNode();B(f instanceof X,"serverChildren would be complete if leaf node"),d=__(r,f)}d=d,c=t.filter.updateFullNode(u,d,s)}else{const d=re(n);let f=y_(r,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=u.getImmediateChild(d)),f!=null?c=t.filter.updateChild(u,d,f,Ee(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(u,d,X.EMPTY_NODE,Ee(n),a,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=jc(r,qi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Bc(r,fe())!=null,wa(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NF{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new d_(r.getIndex()),s=KV(r);this.processor_=EF(s);const o=n.serverCache,a=n.eventCache,u=i.updateFullNode(X.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(X.EMPTY_NODE,a.getNode(),null),d=new Wi(u,o.isFullyInitialized(),i.filtersNodes()),f=new Wi(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Gh(f,d),this.eventGenerator_=new tF(this.query_)}get query(){return this.query_}}function kF(t){return t.viewCache_.serverCache.getNode()}function PF(t,e){const n=qi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!se(e)&&!n.getImmediateChild(re(e)).isEmpty())?n.getChild(e):null}function Hw(t){return t.eventRegistrations_.length===0}function bF(t,e){t.eventRegistrations_.push(e)}function Gw(t,e,n){const r=[];if(n){B(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Kw(t,e,n,r){e.type===mn.MERGE&&e.source.queryId!==null&&(B(qi(t.viewCache_),"We should always have a full cache before handling merges"),B(qp(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=IF(t.processor_,i,e,n,r);return TF(t.processor_,s.viewCache),B(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,tx(t,s.changes,s.viewCache.eventCache.getNode(),null)}function DF(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Me,(s,o)=>{r.push(eo(s,o))}),n.isFullyInitialized()&&r.push(WC(n.getNode())),tx(t,r,n.getNode(),e)}function tx(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return nF(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $c;class OF{constructor(){this.views=new Map}}function LF(t){B(!$c,"__referenceConstructor has already been defined"),$c=t}function MF(){return B($c,"Reference.ts has not been loaded"),$c}function VF(t){return t.views.size===0}function w_(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return B(s!=null,"SyncTree gave us an op for an invalid query."),Kw(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Kw(o,e,n,r));return s}}function FF(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=jc(n,i?r:null),u=!1;a?u=!0:r instanceof X?(a=__(n,r),u=!1):(a=X.EMPTY_NODE,u=!1);const c=Gh(new Wi(a,u,!1),new Wi(r,i,!1));return new NF(e,c)}return o}function UF(t,e,n,r,i,s){const o=FF(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),bF(o,n),DF(o,n)}function jF(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=ti(t);if(i==="default")for(const[u,c]of t.views.entries())o=o.concat(Gw(c,n,r)),Hw(c)&&(t.views.delete(u),c.query._queryParams.loadsAllData()||s.push(c.query));else{const u=t.views.get(i);u&&(o=o.concat(Gw(u,n,r)),Hw(u)&&(t.views.delete(i),u.query._queryParams.loadsAllData()||s.push(u.query)))}return a&&!ti(t)&&s.push(new(MF())(e._repo,e._path)),{removed:s,events:o}}function nx(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ls(t,e){let n=null;for(const r of t.views.values())n=n||PF(r,e);return n}function rx(t,e){if(e._queryParams.loadsAllData())return Kh(t);{const r=e._queryIdentifier;return t.views.get(r)}}function ix(t,e){return rx(t,e)!=null}function ti(t){return Kh(t)!=null}function Kh(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wc;function BF(t){B(!Wc,"__referenceConstructor has already been defined"),Wc=t}function zF(){return B(Wc,"Reference.ts has not been loaded"),Wc}let $F=1;class Qw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new xe(null),this.pendingWriteTree_=_F(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sx(t,e,n,r,i){return oF(t.pendingWriteTree_,e,n,r,i),i?kl(t,new $i(HC(),e,n)):[]}function Ii(t,e,n=!1){const r=aF(t.pendingWriteTree_,e);if(lF(t.pendingWriteTree_,e)){let s=new xe(null);return r.snap!=null?s=s.set(fe(),!0):zt(r.children,o=>{s=s.set(new ve(o),!0)}),kl(t,new Uc(r.path,s,n))}else return[]}function Qh(t,e,n){return kl(t,new $i(p_(),e,n))}function WF(t,e,n){const r=xe.fromObject(n);return kl(t,new ll(p_(),e,r))}function qF(t,e){return kl(t,new al(p_(),e))}function HF(t,e,n){const r=T_(t,n);if(r){const i=I_(r),s=i.path,o=i.queryId,a=Lt(s,e),u=new al(m_(o),a);return S_(t,s,u)}else return[]}function Yp(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||ix(o,e))){const u=jF(o,e,n,r);VF(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=u.removed;if(a=u.events,!i){const d=c.findIndex(p=>p._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(p,v)=>ti(v));if(d&&!f){const p=t.syncPointTree_.subtree(s);if(!p.isEmpty()){const v=QF(p);for(let T=0;T<v.length;++T){const A=v[T],N=A.query,I=lx(t,A);t.listenProvider_.startListening(Ta(N),qc(t,N),I.hashFn,I.onComplete)}}}!f&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(Ta(e),null):c.forEach(p=>{const v=t.queryToTagMap.get(Yh(p));t.listenProvider_.stopListening(Ta(p),v)}))}YF(t,c)}return a}function GF(t,e,n,r){const i=T_(t,r);if(i!=null){const s=I_(i),o=s.path,a=s.queryId,u=Lt(o,e),c=new $i(m_(a),u,n);return S_(t,o,c)}else return[]}function KF(t,e,n,r){const i=T_(t,r);if(i){const s=I_(i),o=s.path,a=s.queryId,u=Lt(o,e),c=xe.fromObject(n),d=new ll(m_(a),u,c);return S_(t,o,d)}else return[]}function Yw(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(p,v)=>{const T=Lt(p,i);s=s||Ls(v,T),o=o||ti(v)});let a=t.syncPointTree_.get(i);a?(o=o||ti(a),s=s||Ls(a,fe())):(a=new OF,t.syncPointTree_=t.syncPointTree_.set(i,a));let u;s!=null?u=!0:(u=!1,s=X.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((v,T)=>{const A=Ls(T,fe());A&&(s=s.updateImmediateChild(v,A))}));const c=ix(a,e);if(!c&&!e._queryParams.loadsAllData()){const p=Yh(e);B(!t.queryToTagMap.has(p),"View does not exist, but we have a tag");const v=XF();t.queryToTagMap.set(p,v),t.tagToQueryMap.set(v,p)}const d=g_(t.pendingWriteTree_,i);let f=UF(a,e,n,d,s,u);if(!c&&!o&&!r){const p=rx(a,e);f=f.concat(JF(t,e,p))}return f}function E_(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=Lt(o,e),c=Ls(a,u);if(c)return c});return YC(i,e,s,n,!0)}function kl(t,e){return ox(e,t.syncPointTree_,null,g_(t.pendingWriteTree_,fe()))}function ox(t,e,n,r){if(se(t.path))return ax(t,e,n,r);{const i=e.get(fe());n==null&&i!=null&&(n=Ls(i,fe()));let s=[];const o=re(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,d=XC(r,o);s=s.concat(ox(a,u,c,d))}return i&&(s=s.concat(w_(i,t,r,n))),s}}function ax(t,e,n,r){const i=e.get(fe());n==null&&i!=null&&(n=Ls(i,fe()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=XC(r,o),d=t.operationForChild(o);d&&(s=s.concat(ax(d,a,u,c)))}),i&&(s=s.concat(w_(i,t,r,n))),s}function lx(t,e){const n=e.query,r=qc(t,n);return{hashFn:()=>(kF(e)||X.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?HF(t,n._path,r):qF(t,n._path);{const s=G4(i,n);return Yp(t,n,null,s)}}}}function qc(t,e){const n=Yh(e);return t.queryToTagMap.get(n)}function Yh(t){return t._path.toString()+"$"+t._queryIdentifier}function T_(t,e){return t.tagToQueryMap.get(e)}function I_(t){const e=t.indexOf("$");return B(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ve(t.substr(0,e))}}function S_(t,e,n){const r=t.syncPointTree_.get(e);B(r,"Missing sync point for query tag that we're tracking");const i=g_(t.pendingWriteTree_,e);return w_(r,n,i,null)}function QF(t){return t.fold((e,n,r)=>{if(n&&ti(n))return[Kh(n)];{let i=[];return n&&(i=nx(n)),zt(r,(s,o)=>{i=i.concat(o)}),i}})}function Ta(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(zF())(t._repo,t._path):t}function YF(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Yh(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function XF(){return $F++}function JF(t,e,n){const r=e._path,i=qc(t,e),s=lx(t,n),o=t.listenProvider_.startListening(Ta(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)B(!ti(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((c,d,f)=>{if(!se(c)&&d&&ti(d))return[Kh(d).query];{let p=[];return d&&(p=p.concat(nx(d).map(v=>v.query))),zt(f,(v,T)=>{p=p.concat(T)}),p}});for(let c=0;c<u.length;++c){const d=u[c];t.listenProvider_.stopListening(Ta(d),qc(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new C_(n)}node(){return this.node_}}class x_{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ge(this.path_,e);return new x_(this.syncTree_,n)}node(){return E_(this.syncTree_,this.path_)}}const ZF=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Xw=function(t,e,n){if(!t||typeof t!="object")return t;if(B(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return eU(t[".sv"],e,n);if(typeof t[".sv"]=="object")return tU(t[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},eU=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+t)}},tU=function(t,e,n){t.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&B(!1,"Unexpected increment value: "+r);const i=e.node();if(B(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},nU=function(t,e,n,r){return R_(e,new x_(n,t),r)},ux=function(t,e,n){return R_(t,new C_(e),n)};function R_(t,e,n){const r=t.getPriority().val(),i=Xw(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Xw(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Je(a,ot(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Je(i))),o.forEachChild(Me,(a,u)=>{const c=R_(u,e.getImmediateChild(a),n);c!==u&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function N_(t,e){let n=e instanceof ve?e:new ve(e),r=t,i=re(n);for(;i!==null;){const s=$s(r.node.children,i)||{children:{},childCount:0};r=new A_(i,r,s),n=Ee(n),i=re(n)}return r}function _o(t){return t.node.value}function cx(t,e){t.node.value=e,Xp(t)}function hx(t){return t.node.childCount>0}function rU(t){return _o(t)===void 0&&!hx(t)}function Xh(t,e){zt(t.node.children,(n,r)=>{e(new A_(n,t,r))})}function dx(t,e,n,r){n&&!r&&e(t),Xh(t,i=>{dx(i,e,!0,r)}),n&&r&&e(t)}function iU(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Pl(t){return new ve(t.parent===null?t.name:Pl(t.parent)+"/"+t.name)}function Xp(t){t.parent!==null&&sU(t.parent,t.name,t)}function sU(t,e,n){const r=rU(n),i=mr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Xp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Xp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oU=/[\[\].#$\/\u0000-\u001F\u007F]/,aU=/[\[\].#$\u0000-\u001F\u007F]/,gf=10*1024*1024,fx=function(t){return typeof t=="string"&&t.length!==0&&!oU.test(t)},px=function(t){return typeof t=="string"&&t.length!==0&&!aU.test(t)},lU=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),px(t)},uU=function(t,e,n,r){k_(tg(t,"value"),e,n)},k_=function(t,e,n){const r=n instanceof ve?new xV(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+_i(r));if(typeof e=="function")throw new Error(t+"contains a function "+_i(r)+" with contents = "+e.toString());if(pC(e))throw new Error(t+"contains "+e.toString()+" "+_i(r));if(typeof e=="string"&&e.length>gf/3&&yh(e)>gf)throw new Error(t+"contains a string greater than "+gf+" utf8 bytes "+_i(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(zt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!fx(o)))throw new Error(t+" contains an invalid key ("+o+") "+_i(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);RV(r,o),k_(t,a,r),AV(r)}),i&&s)throw new Error(t+' contains ".value" child '+_i(r)+" in addition to actual children.")}},mx=function(t,e,n,r){if(!px(n))throw new Error(tg(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},cU=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),mx(t,e,n)},hU=function(t,e){if(re(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},dU=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!fx(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!lU(n))throw new Error(tg(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fU{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function P_(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!u_(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function gx(t,e,n){P_(t,n),_x(t,r=>u_(r,e))}function fr(t,e,n){P_(t,n),_x(t,r=>pn(r,e)||pn(e,r))}function _x(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(pU(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function pU(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ya&&Tt("event: "+n.toString()),go(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mU="repo_interrupt",gU=25;class _U{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new fU,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Fc(),this.transactionQueueTree_=new A_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function yU(t,e,n){if(t.stats_=a_(t.repoInfo_),t.forceRestClient_||X4())t.server_=new Vc(t.repoInfo_,(r,i,s,o)=>{Jw(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Zw(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{nt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new rr(t.repoInfo_,e,(r,i,s,o)=>{Jw(t,r,i,s,o)},r=>{Zw(t,r)},r=>{wU(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=nV(t.repoInfo_,()=>new eF(t.stats_,t.server_)),t.infoData_=new QV,t.infoSyncTree_=new Qw({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=Qh(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),D_(t,"connected",!1),t.serverSyncTree_=new Qw({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const c=o(a,u);fr(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function vU(t){const n=t.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function b_(t){return ZF({timestamp:vU(t)})}function Jw(t,e,n,r,i){t.dataUpdateCount++;const s=new ve(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=_c(n,c=>ot(c));o=KF(t.serverSyncTree_,s,u,i)}else{const u=ot(n);o=GF(t.serverSyncTree_,s,u,i)}else if(r){const u=_c(n,c=>ot(c));o=WF(t.serverSyncTree_,s,u)}else{const u=ot(n);o=Qh(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=Jh(t,s)),fr(t.eventQueue_,a,o)}function Zw(t,e){D_(t,"connected",e),e===!1&&TU(t)}function wU(t,e){zt(e,(n,r)=>{D_(t,n,r)})}function D_(t,e,n){const r=new ve("/.info/"+e),i=ot(n);t.infoData_.updateSnapshot(r,i);const s=Qh(t.infoSyncTree_,r,i);fr(t.eventQueue_,r,s)}function yx(t){return t.nextWriteId_++}function EU(t,e,n,r,i){O_(t,"set",{path:e.toString(),value:n,priority:r});const s=b_(t),o=ot(n,r),a=E_(t.serverSyncTree_,e),u=ux(o,a,s),c=yx(t),d=sx(t.serverSyncTree_,e,u,c,!0);P_(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(p,v)=>{const T=p==="ok";T||Bt("set at "+e+" failed: "+p);const A=Ii(t.serverSyncTree_,c,!T);fr(t.eventQueue_,e,A),xU(t,i,p,v)});const f=Ix(t,e);Jh(t,f),fr(t.eventQueue_,f,[])}function TU(t){O_(t,"onDisconnectEvents");const e=b_(t),n=Fc();Wp(t.onDisconnect_,fe(),(i,s)=>{const o=nU(i,s,t.serverSyncTree_,e);qC(n,i,o)});let r=[];Wp(n,fe(),(i,s)=>{r=r.concat(Qh(t.serverSyncTree_,i,s));const o=Ix(t,i);Jh(t,o)}),t.onDisconnect_=Fc(),fr(t.eventQueue_,fe(),r)}function IU(t,e,n){let r;re(e._path)===".info"?r=Yw(t.infoSyncTree_,e,n):r=Yw(t.serverSyncTree_,e,n),gx(t.eventQueue_,e._path,r)}function SU(t,e,n){let r;re(e._path)===".info"?r=Yp(t.infoSyncTree_,e,n):r=Yp(t.serverSyncTree_,e,n),gx(t.eventQueue_,e._path,r)}function CU(t){t.persistentConnection_&&t.persistentConnection_.interrupt(mU)}function O_(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Tt(n,...e)}function xU(t,e,n,r){e&&go(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function vx(t,e,n){return E_(t.serverSyncTree_,e,n)||X.EMPTY_NODE}function L_(t,e=t.transactionQueueTree_){if(e||Zh(t,e),_o(e)){const n=Ex(t,e);B(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&RU(t,Pl(e),n)}else hx(e)&&Xh(e,n=>{L_(t,n)})}function RU(t,e,n){const r=n.map(c=>c.currentWriteId),i=vx(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];B(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=Lt(e,d.path);s=s.updateChild(f,d.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,c=>{O_(t,"transaction put response",{path:u.toString(),status:c});let d=[];if(c==="ok"){const f=[];for(let p=0;p<n.length;p++)n[p].status=2,d=d.concat(Ii(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&f.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();Zh(t,N_(t.transactionQueueTree_,e)),L_(t,t.transactionQueueTree_),fr(t.eventQueue_,e,d);for(let p=0;p<f.length;p++)go(f[p])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Bt("transaction at "+u.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Jh(t,e)}},o)}function Jh(t,e){const n=wx(t,e),r=Pl(n),i=Ex(t,n);return AU(t,i,r),r}function AU(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=Lt(n,u.path);let d=!1,f;if(B(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)d=!0,f=u.abortReason,i=i.concat(Ii(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=gU)d=!0,f="maxretry",i=i.concat(Ii(t.serverSyncTree_,u.currentWriteId,!0));else{const p=vx(t,u.path,o);u.currentInputSnapshot=p;const v=e[a].update(p.val());if(v!==void 0){k_("transaction failed: Data returned ",v,u.path);let T=ot(v);typeof v=="object"&&v!=null&&mr(v,".priority")||(T=T.updatePriority(p.getPriority()));const N=u.currentWriteId,I=b_(t),w=ux(T,p,I);u.currentOutputSnapshotRaw=T,u.currentOutputSnapshotResolved=w,u.currentWriteId=yx(t),o.splice(o.indexOf(N),1),i=i.concat(sx(t.serverSyncTree_,u.path,w,u.currentWriteId,u.applyLocally)),i=i.concat(Ii(t.serverSyncTree_,N,!0))}else d=!0,f="nodata",i=i.concat(Ii(t.serverSyncTree_,u.currentWriteId,!0))}fr(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Zh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)go(r[a]);L_(t,t.transactionQueueTree_)}function wx(t,e){let n,r=t.transactionQueueTree_;for(n=re(e);n!==null&&_o(r)===void 0;)r=N_(r,n),e=Ee(e),n=re(e);return r}function Ex(t,e){const n=[];return Tx(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Tx(t,e,n){const r=_o(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Xh(e,i=>{Tx(t,i,n)})}function Zh(t,e){const n=_o(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,cx(e,n.length>0?n:void 0)}Xh(e,r=>{Zh(t,r)})}function Ix(t,e){const n=Pl(wx(t,e)),r=N_(t.transactionQueueTree_,e);return iU(r,i=>{_f(t,i)}),_f(t,r),dx(r,i=>{_f(t,i)}),n}function _f(t,e){const n=_o(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(B(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(B(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ii(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?cx(e,void 0):n.length=s+1,fr(t.eventQueue_,Pl(e),i);for(let o=0;o<r.length;o++)go(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NU(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function kU(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Bt(`Invalid query segment '${n}' in query '${t}'`)}return e}const eE=function(t,e){const n=PU(t),r=n.namespace;n.domain==="firebase.com"&&dr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&dr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||z4();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new xC(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ve(n.pathString)}},PU=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(d,f)),d<f&&(i=NU(t.substring(d,f)));const p=kU(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const v=e.slice(0,c);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const T=e.indexOf(".");r=e.substring(0,T).toLowerCase(),n=e.substring(T+1),s=r}"ns"in p&&(s=p.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bU{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+nt(this.snapshot.exportVal())}}class DU{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OU{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return B(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return se(this._path)?null:LC(this._path)}get ref(){return new ui(this._repo,this._path)}get _queryIdentifier(){const e=Fw(this._queryParams),n=s_(e);return n==="{}"?"default":n}get _queryObject(){return Fw(this._queryParams)}isEqual(e){if(e=me(e),!(e instanceof M_))return!1;const n=this._repo===e._repo,r=u_(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+CV(this._path)}}class ui extends M_{constructor(e,n){super(e,n,new f_,!1)}get parent(){const e=VC(this._path);return e===null?null:new ui(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Hc{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ve(e),r=Jp(this.ref,e);return new Hc(this._node.getChild(n),r,Me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Hc(i,Jp(this.ref,r),Me)))}hasChild(e){const n=new ve(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function tE(t,e){return t=me(t),t._checkNotDeleted("ref"),e!==void 0?Jp(t._root,e):t._root}function Jp(t,e){return t=me(t),re(t._path)===null?cU("child","path",e):mx("child","path",e),new ui(t._repo,Ge(t._path,e))}function LU(t,e){t=me(t),hU("set",t._path),uU("set",e,t._path);const n=new _h;return EU(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class V_{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new bU("value",this,new Hc(e.snapshotNode,new ui(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new DU(this,e,n):null}matches(e){return e instanceof V_?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function MU(t,e,n,r,i){const s=new OU(n,void 0),o=new V_(s);return IU(t._repo,t,o),()=>SU(t._repo,t,o)}function VU(t,e,n,r){return MU(t,"value",e)}LF(ui);BF(ui);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FU="FIREBASE_DATABASE_EMULATOR_HOST",Zp={};let UU=!1;function jU(t,e,n,r){t.repoInfo_=new xC(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function BU(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||dr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Tt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=eE(s,i),a=o.repoInfo,u;typeof process<"u"&&ww&&(u=ww[FU]),u?(s=`http://${u}?ns=${a.namespace}`,o=eE(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new Z4(t.name,t.options,e);dU("Invalid Firebase Database URL",o),se(o.path)||dr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=$U(a,t,c,new J4(t.name,n));return new WU(d,t)}function zU(t,e){const n=Zp[e];(!n||n[t.key]!==t)&&dr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),CU(t),delete n[t.key]}function $U(t,e,n,r){let i=Zp[e.name];i||(i={},Zp[e.name]=i);let s=i[t.toURLString()];return s&&dr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new _U(t,UU,n,r),i[t.toURLString()]=s,s}class WU{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(yU(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ui(this._repo,fe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(zU(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&dr("Cannot call "+e+" on a deleted database.")}}function qU(t=wh(),e){const n=ml(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Jm("database");r&&HU(n,...r)}return n}function HU(t,e,n,r={}){t=me(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&dr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&dr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new $u($u.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Zm(r.mockUserToken,t.app.options.projectId);s=new $u(o)}jU(i,e,n,s)}/**
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
 */function GU(t){M4(si),Qr(new lr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return BU(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),rn(Ew,Tw,t),rn(Ew,Tw,"esm2017")}rr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};rr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};GU();const KU={apiKey:"AIzaSyC_G-cV2z_RbVO7rjGB9o7e9pZ0nsavtTQ",authDomain:"skwebsite-df527.firebaseapp.com",databaseURL:"https://skwebsite-df527-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"skwebsite-df527",storageBucket:"skwebsite-df527.appspot.com",messagingSenderId:"950246300063",appId:"1:950246300063:web:1d3dacc9f19b89e84205aa",measurementId:"G-NZPHQLT27P"},ed=$I(KU),Pe=hM(ed),Gc=Ch(ed);new Gn;const Kc=cC(ed),nE=qU(ed),QU=({onClose:t})=>{const[e,n]=L.useState(""),[r,i]=L.useState(""),[s,o]=L.useState(!0),[a,u]=L.useState(null),c=async()=>{try{await o2(Gc,e,r),alert("Sign up successful!"),t()}catch(f){f instanceof Error?u(f.message):u("An unknown error occurred"),console.error("Error signing up:",f)}},d=async()=>{try{await a2(Gc,e,r),alert("Sign in successful!"),t()}catch(f){f instanceof Error?u(f.message):u("An unknown error occurred"),console.error("Error signing in:",f)}};return g.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center",children:g.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative",children:[g.jsx("button",{onClick:t,className:"absolute top-2 right-2 text-gray-600 hover:text-gray-900",children:"×"}),g.jsx("h2",{className:"text-xl font-bold mb-4 text-center",children:s?"Sign Up":"Sign In"}),g.jsx("input",{type:"email",placeholder:"Email",value:e,onChange:f=>n(f.target.value),className:"border p-2 mb-2 rounded w-full"}),g.jsx("input",{type:"password",placeholder:"Password",value:r,onChange:f=>i(f.target.value),className:"border p-2 mb-4 rounded w-full"}),g.jsxs("div",{className:"flex flex-col items-center",children:[s?g.jsx("button",{onClick:c,className:"bg-slate-950 border rounded-full text-white px-4 py-2 transition-transform duration-300 ease-in-out hover:bg-[#2a2388] hover:scale-105",children:"Sign Up"}):g.jsx("button",{onClick:d,className:"bg-slate-950 border rounded-full text-white px-4 py-2 transition-transform duration-300 ease-in-out hover:bg-[#2a2388] hover:scale-105",children:"Sign In"}),a&&g.jsx("p",{className:"text-red-500 mt-2",children:a}),g.jsx("button",{onClick:()=>o(!s),className:"mt-4 text-blue-500 underline",children:s?"Already have an account? Sign In":"Need an account? Sign Up"})]})]})})},YU=()=>{const{closeAuthModal:t}=Cx();return g.jsxs("div",{children:[g.jsx("button",{onClick:t,className:"bg-slate-950 text-white px-4 py-2 rounded",children:"Close Auth Modal"}),g.jsx(QU,{onClose:t})]})},Sx=L.createContext(void 0),XU=({children:t})=>{const[e,n]=L.useState(null),[r,i]=L.useState(!1);L.useEffect(()=>{const u=cg(Gc,c=>{n(c),c&&sessionStorage.getItem("shouldReload")==="true"&&(sessionStorage.removeItem("shouldReload"),window.location.reload())});return()=>u()},[]);const s=()=>i(!0),o=()=>i(!1),a=async()=>{try{sessionStorage.setItem("shouldReload","true"),await c2(Gc),window.location.reload()}catch(u){console.error("Error signing out:",u)}};return g.jsxs(Sx.Provider,{value:{user:e,isAuthOpen:r,openAuthModal:s,closeAuthModal:o,signOut:a},children:[t,r&&g.jsx(YU,{})]})},Cx=()=>{const t=L.useContext(Sx);if(t===void 0)throw new Error("useAuth must be used within an AuthProvider");return t},rE=({label:t,onClick:e,className:n})=>g.jsx("button",{onClick:e,className:`${n} px-4 py-2 transition-transform duration-300 ease-in-out hover:scale-105`,children:t}),F_=({transparent:t})=>{const{user:e,openAuthModal:n,signOut:r}=Cx();return g.jsx("div",{children:e?g.jsx(rE,{label:"Sign Out",onClick:r,className:"bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"}):g.jsx(rE,{label:"Sign Up",onClick:n,className:`${t?"bg-transparent border border-black text-black":"bg-slate-950 text-white"}`})})},JU=()=>g.jsx("button",{className:"bg-slate-950 border text-white px-4 py-2 transition-transform duration-300 ease-in-out hover:bg-[#2a2388] hover:scale-105 cursor-pointer mb-4",children:"Learn More"});var xx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},iE=Dr.createContext&&Dr.createContext(xx),ZU=["attr","size","title"];function ej(t,e){if(t==null)return{};var n=tj(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function tj(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Qc(){return Qc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qc.apply(this,arguments)}function sE(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Yc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?sE(Object(n),!0).forEach(function(r){nj(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):sE(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function nj(t,e,n){return e=rj(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function rj(t){var e=ij(t,"string");return typeof e=="symbol"?e:e+""}function ij(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Rx(t){return t&&t.map((e,n)=>Dr.createElement(e.tag,Yc({key:n},e.attr),Rx(e.child)))}function yo(t){return e=>Dr.createElement(sj,Qc({attr:Yc({},t.attr)},e),Rx(t.child))}function sj(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=ej(t,ZU),a=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),Dr.createElement("svg",Qc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:Yc(Yc({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Dr.createElement("title",null,s),t.children)};return iE!==void 0?Dr.createElement(iE.Consumer,null,n=>e(n)):e(xx)}function oj(t){return yo({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(t)}function aj(t){return yo({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"},child:[]}]})(t)}function lj(t){return yo({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(t)}function uj(t){return yo({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(t)}function cj(t){return yo({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z"},child:[]}]})(t)}function oE(t){return yo({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z"},child:[]}]})(t)}const Ax=()=>{const[t,e]=L.useState(!1),[n,r]=L.useState(!1),i=dk(),s=Ym();L.useEffect(()=>{const f=localStorage.getItem("isAdminLoggedIn");r(f==="true")},[]);const o=f=>{const p=document.getElementById(f);if(p){const v=window.innerWidth>=768?75:0,A=p.getBoundingClientRect().top+window.pageYOffset-v;window.scrollTo({top:A,behavior:"smooth"})}},a=()=>{r(!1),localStorage.removeItem("isAdminLoggedIn"),i("/")},u=[...Pk,...n?[{name:"Admin",id:"admin"}]:[]],c=f=>{f.id==="admin"?i("/admin"):s.pathname==="/admin"?i("/"):o(f.id)},d=[{name:"Home",id:"home",icon:lj},{name:"About",id:"AboutUs",icon:uj},{name:"Services",id:"service",icon:aj},{name:"News",id:"newsletter",icon:cj},{name:"Events",id:"events",icon:oj}];return g.jsxs(g.Fragment,{children:[g.jsx("div",{className:`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${t?"block":"hidden"}`}),g.jsxs("nav",{className:"bg-white fixed top-auto bottom-0 md:top-0 md:bottom-auto w-full z-30 flex items-center justify-between h-[68px] md:h-[75px] px-3 md:p-4 shadow-[0_-2px_10px_rgba(0,0,0,0.08)] md:shadow-md",children:[g.jsx("div",{className:"hidden md:flex items-center",children:g.jsx("img",{src:kI,alt:"Logo",className:"cursor-pointer h-12 md:h-16",onClick:()=>o("home")})}),g.jsxs("div",{className:"flex w-full items-center md:w-auto",children:[g.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[g.jsx("ul",{className:"flex items-center space-x-4 md:space-x-8",children:u.map((f,p)=>g.jsx("li",{className:"text-black font-bold cursor-pointer font-serif hover:bg-gradient-to-r hover:from-orange-400 hover:to-blue-900 hover:text-transparent hover:bg-clip-text transition duration-300 ease-in-out",onClick:()=>c(f),children:f.name},p))}),g.jsxs("div",{className:"flex items-center space-x-4",children:[g.jsx(F_,{transparent:!0}),n?g.jsxs("button",{onClick:a,className:"flex items-center bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-300 ease-in-out",children:[g.jsx(oE,{className:"mr-2"})," Log Out"]}):g.jsxs("button",{onClick:()=>e(!0),className:"flex items-center bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out",children:[g.jsx(oE,{className:"mr-2"})," Admin"]})]})]}),g.jsx("div",{className:"flex md:hidden w-full items-center justify-around gap-1",children:d.map(({name:f,id:p,icon:v})=>g.jsxs("button",{type:"button",className:"flex min-w-0 flex-1 flex-col items-center gap-1 py-1 text-[10px] font-semibold text-gray-600 transition-colors hover:text-blue-700","aria-label":f,onClick:()=>c({name:f,id:p}),children:[g.jsx(v,{className:"text-base","aria-hidden":"true"}),g.jsx("span",{className:"truncate",children:f})]},p))})]})]}),g.jsx("div",{className:"hidden md:block md:h-[75px]"})]})},hj="/SkWeb/assets/bg-DjAPkPKg.jpg",dj=()=>{const[t,e]=L.useState(!1);return L.useEffect(()=>{const n=Ch(),r=cg(n,i=>{e(!!i)});return()=>r()},[]),g.jsxs("div",{className:"relative w-full h-screen",id:"home",children:[g.jsx("div",{className:"absolute inset-0 bg-cover bg-center",style:{backgroundImage:`url(${hj})`,backgroundRepeat:"no-repeat"},children:g.jsx("div",{className:"absolute inset-0 bg-blue-800 opacity-50"})}),g.jsxs("div",{className:"relative flex flex-col items-center justify-center h-full max-w-4xl mx-auto text-center text-white p-4 md:p-8",children:[g.jsxs("div",{className:"mb-4",children:[g.jsx("h1",{className:"font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl p-2",children:"Empowerment Youth for a Better Future"}),g.jsx("p",{className:"text-base md:text-xl",children:"Welcome to the official website of Sangguniang Kabataan, where we aim to provide opportunities, support, and representation for the youth in our community."})]}),!t&&g.jsxs("div",{className:"flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 mt-4",children:[g.jsx(JU,{}),g.jsx(F_,{})]})]})]})},fj=({service:t,formData:e,handleInputChange:n,handleFileChange:r,handleSubmit:i,closeForm:s})=>{const o=u=>e&&e[u]!==void 0?e[u]:"",a=()=>t.formFields.map((u,c)=>{const d=o(u.label);switch(u.type){case"textarea":return g.jsx("textarea",{placeholder:u.label,className:"block w-full mb-2 p-2 border border-gray-300 rounded",value:d,onChange:f=>n(u.label,f.target.value)},c);case"file":return g.jsx("input",{type:"file",className:"block w-full mb-2",onChange:f=>r(u.label,f.target.files?f.target.files[0]:null)},c);default:return g.jsx("input",{type:u.type,placeholder:u.label,className:"block w-full mb-2 p-2 border border-gray-300 rounded",value:d,onChange:f=>n(u.label,f.target.value)},c)}});return g.jsxs("div",{className:"p-6",children:[g.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Service Form"}),g.jsxs("form",{onSubmit:u=>{u.preventDefault(),i()},children:[a(),g.jsx("button",{type:"submit",className:"bg-green-500 text-white p-3 rounded w-full",children:"Submit"}),g.jsx("button",{type:"button",onClick:s,className:"mt-2 bg-gray-500 text-white p-3 rounded w-full",children:"Cancel"})]})]})},pj=({service:t,onClose:e,openServiceForm:n})=>{const[r,i]=L.useState(0),s=t.imageUrl.split(",").map(u=>u.trim()),o=()=>{i(u=>u>0?u-1:s.length-1)},a=()=>{i(u=>u<s.length-1?u+1:0)};return s.length===0?g.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50",children:g.jsxs("div",{className:"bg-white p-4 sm:p-5 rounded-lg w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 max-w-md relative h-[600px] overflow-y-auto",children:[g.jsx("button",{onClick:e,className:"absolute top-2 right-2 text-gray-600 text-2xl sm:text-3xl font-bold focus:outline-none",children:"×"}),g.jsx("h2",{className:"text-xl sm:text-2xl font-bold mb-2 sm:mb-3",children:t.title}),g.jsx("p",{className:"text-sm sm:text-base mb-2 sm:mb-3",children:t.description}),g.jsx("p",{className:"text-sm sm:text-base",children:"No images available"}),g.jsx("button",{onClick:n,className:"bg-blue-500 text-white p-2 sm:p-3 rounded w-full mt-4",children:"Open Service Form"})]})}):g.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50",children:g.jsxs("div",{className:"bg-white p-4 sm:p-6 rounded-lg w-[80%] sm:w-[60%] md:w-2/3 lg:w-1/2 max-w-md relative h-[600px] overflow-y-auto",children:[g.jsx("button",{onClick:e,className:"absolute top-2 right-2 text-gray-600 text-2xl sm:text-3xl font-bold focus:outline-none",children:"×"}),g.jsxs("div",{className:"relative mb-6 mt-10",children:[" ",g.jsx("img",{src:s[r],alt:`Service Image ${r+1}`,className:"w-[250px] h-[250px] max-w-full max-h-[250px] rounded-lg mx-auto"}),s.length>1&&g.jsxs("div",{className:"absolute inset-0 flex justify-between items-center",children:[g.jsx("button",{onClick:o,className:"bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100 text-lg sm:text-xl",children:"◀"}),g.jsx("button",{onClick:a,className:"bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100 text-lg sm:text-xl",children:"▶"})]})]}),g.jsx("h2",{className:"text-xl sm:text-2xl font-bold mb-2 sm:mb-3",children:t.title}),g.jsx("p",{className:"text-sm sm:text-base mb-2 sm:mb-3",children:t.description}),g.jsx("button",{onClick:n,className:"bg-blue-500 text-white p-2 sm:p-3 rounded w-full mt-4",children:"Open Service Form"})]})})},qt=t=>typeof t=="string"?t:"",mj=t=>Array.isArray(t)?t.filter(e=>typeof e=="string"&&e.length>0):typeof t=="string"&&t.trim()?t.split(",").map(e=>e.trim()).filter(Boolean):[],em=t=>{const e=t.data()??{};return{id:t.id,title:qt(e.title),date:qt(e.date),location:qt(e.location),description:qt(e.description),image:mj(e.image),category:qt(e.category)}},Nx=t=>{const e=t.data()??{};return{id:t.id,title:qt(e.title),description:qt(e.description),imageUrl:qt(e.imageUrl),link:qt(e.link)||void 0,fullContent:qt(e.fullContent)}},kx=t=>{const e=t.data()??{},n=Array.isArray(e.formFields)?e.formFields:[];return{id:t.id,title:qt(e.title),description:qt(e.description),imageUrl:qt(e.imageUrl),formFields:n.filter(r=>typeof(r==null?void 0:r.label)=="string"&&["text","email","date","number","textarea","file"].includes(r.type))}},gj=()=>{const[t,e]=L.useState([]),[n,r]=L.useState(null),[i,s]=L.useState(!1),[o,a]=L.useState({}),[u,c]=L.useState({}),[d,f]=L.useState(!0),[p,v]=L.useState(!1),T=jt(Pe,"services"),A=jt(Pe,"applications"),N=async()=>{try{f(!0);const E=(await ji(T)).docs.map(kx);e(E),v(!0),f(!1)}catch(_){console.error("Error fetching services:",_),f(!1)}};L.useEffect(()=>{p||N()},[p]);const I=(_,E)=>{c({...u,[_]:E})},w=async _=>{try{let E={serviceId:_,...o[_],status:"pending",createdAt:H1()};if(u[_]){const C=nl(Kc,`applications/${_}/${u[_].name}`);await el(C,u[_]);const k=await tl(C);E={...E,fileURL:k}}await po(A,E),alert("Application submitted!"),r(null),a(C=>({...C,[_]:{}})),c(C=>({...C,[_]:null}))}catch(E){console.error("Error submitting application:",E)}},x=(_,E,C)=>{a({...o,[_]:{...o[_],[E]:C}})},D=_=>{r(_)},O=()=>{r(null)},F=()=>{s(!0)},S=()=>{s(!1)};return g.jsxs("div",{className:"grid min-w-0 grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3",children:[d?g.jsx("p",{children:"Loading services..."}):t.length===0?g.jsx("p",{children:"No services available."}):t.map(_=>g.jsxs("div",{className:"flex min-w-0 cursor-pointer flex-col items-center rounded-lg border-2 border-gray-200 p-4 text-center shadow-lg transition-transform duration-300 hover:scale-105",onClick:()=>D(_),children:[g.jsx("div",{className:"w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-300 bg-gray-200",style:{backgroundImage:`url(${_.imageUrl})`,backgroundSize:"cover",backgroundPosition:"center"}}),g.jsxs("div",{className:"mt-4 min-w-0 max-w-full",children:[g.jsx("h3",{className:"text-lg md:text-xl font-bold",children:_.title}),g.jsx("p",{className:"text-sm md:text-base mt-2",children:_.description})]})]},_.id)),n&&g.jsx(pj,{service:n,onClose:O,openServiceForm:F}),i&&n&&g.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50",children:g.jsx("div",{className:"bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3 max-w-lg relative",children:g.jsx(fj,{service:n,formData:o[n.id]||{},handleInputChange:(_,E)=>x(n.id,_,E),handleFileChange:(_,E)=>I(n.id,E),handleSubmit:()=>w(n.id),closeForm:S})})})]})},_j=()=>g.jsxs("div",{className:"p-4 md:p-8 min-h-screen bg-gray-100",children:[g.jsxs("div",{className:"  p-8 rounded-lg  mb-8",children:[g.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-center mb-4",children:"Services and Programs that Make a Difference"}),g.jsx("p",{className:"text-lg text-center max-w-5xl mx-auto",children:"Welcome to the Sangguniang Kabataan Website. We are dedicated to empowering the youth and creating positive change in our community. Explore our initiatives and programs to learn how you can get involved."})]}),g.jsx(gj,{})]}),yj=({isOpen:t,onClose:e,children:n})=>t?g.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",children:g.jsxs("div",{className:"bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-sm md:max-w-lg relative h-[600px]",children:[" ",g.jsx("button",{className:"absolute top-2 right-2 text-gray-600 text-2xl md:text-2xl font-bold focus:outline-none z-60",onClick:e,children:"×"}),g.jsx("div",{className:"p-4 md:p-6 h-full overflow-auto",children:n})]})}):null,vj=({newsletter:t})=>{const[e,n]=L.useState(!1),r=()=>{n(!0)},i=()=>{n(!1)},s=(o,a)=>o.length>a?`${o.substring(0,a)}...`:o;return g.jsxs(g.Fragment,{children:[g.jsxs("div",{onClick:r,className:"bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer",children:[g.jsx("img",{src:t.imageUrl,alt:t.title,className:"w-full h-32 sm:h-48 object-cover"}),g.jsxs("div",{className:"p-4",children:[g.jsx("h2",{className:"text-lg sm:text-xl font-bold mb-2",children:t.title}),g.jsx("p",{className:"text-gray-700 mb-4",children:s(t.description,window.innerWidth<640?50:100)}),t.link&&g.jsx("a",{href:t.link,className:"text-blue-500 hover:underline cursor-pointer",children:"Read More →"})]})]}),g.jsxs(yj,{isOpen:e,onClose:i,children:[g.jsx("img",{src:t.imageUrl,alt:t.title,className:"w-full h-64 object-cover mb-4"}),g.jsx("h2",{className:"text-xl font-bold mb-2",children:t.title}),g.jsx("p",{className:"text-gray-700 mb-4",children:t.description}),g.jsx("p",{className:"text-gray-700 mb-4",children:t.fullContent})]})]})},wj=()=>{const[t,e]=L.useState([]),n=jt(Pe,"newsletters");return L.useEffect(()=>{(async()=>{try{const i=await ji(n);e(i.docs.map(Nx))}catch(i){console.error("Error fetching newsletters:",i)}})()},[]),g.jsxs("div",{className:"p-4 md:p-8 min-h-screen bg-gray-100",children:[g.jsx("h1",{className:"text-2xl md:text-3xl font-bold mb-4",children:"Stay Updated with Us"}),g.jsx("p",{className:"text-base md:text-lg mb-8",children:"Get the latest news and updates on youth and community initiatives."}),g.jsx("div",{className:"grid min-w-0 grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3",children:t.map(r=>g.jsx(vj,{newsletter:r},r.id))})]})},Ej=({eventName:t,onClose:e})=>{const[n,r]=L.useState(""),[i,s]=L.useState(""),[o,a]=L.useState(""),[u,c]=L.useState(""),d=async f=>{if(f.preventDefault(),!t){console.error("Event name is missing"),alert("Event name is required.");return}try{await po(jt(Pe,"attendance"),{eventName:t,email:n,fullName:i,age:o,address:u,createdAt:H1()}),alert("Attendance recorded successfully!"),e()}catch(p){console.error("Error recording attendance:",p),alert("Failed to record attendance.")}};return g.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50",children:g.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg w-96",children:[g.jsxs("h3",{className:"text-xl font-semibold mb-4",children:["Attendance Form for ",t]}),g.jsxs("form",{onSubmit:d,children:[g.jsxs("div",{className:"space-y-4",children:[g.jsx("input",{type:"email",placeholder:"Email",value:n,onChange:f=>r(f.target.value),className:"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0}),g.jsx("input",{type:"text",placeholder:"Full Name",value:i,onChange:f=>s(f.target.value),className:"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0}),g.jsx("input",{type:"number",placeholder:"Age",value:o,onChange:f=>a(f.target.value),className:"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0}),g.jsx("input",{type:"text",placeholder:"Address",value:u,onChange:f=>c(f.target.value),className:"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),g.jsxs("div",{className:"flex justify-between mt-4",children:[g.jsx("button",{type:"submit",className:"bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300",children:"Submit"}),g.jsx("button",{type:"button",onClick:e,className:"bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300",children:"Close"})]})]})]})})},Tj=({isOpen:t,onClose:e,event:n})=>{const[r,i]=L.useState(!1),[s,o]=L.useState(0);if(!t||!n)return null;const a=new Date().toISOString().split("T")[0],u=()=>{i(!0)},c=()=>{i(!1)},d=()=>{o(p=>p>0?p-1:n.image.length-1)},f=()=>{o(p=>p<n.image.length-1?p+1:0)};return g.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50",children:g.jsxs("div",{className:"bg-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-sm md:max-w-lg relative h-[600px] flex flex-col",children:[g.jsx("button",{onClick:e,className:"absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl md:text-2xl",children:"×"}),g.jsx("h3",{className:"text-lg md:text-xl font-semibold mb-4",children:n.title}),n.image.length>0&&g.jsxs("div",{className:"relative w-full h-40 md:h-60 max-h-60 overflow-hidden mb-4",children:[g.jsx("img",{src:n.image[s],alt:n.title,className:"w-full h-full object-cover rounded-lg"}),n.image.length>1&&g.jsxs("div",{className:"absolute inset-0 flex justify-between items-center",children:[g.jsx("button",{onClick:d,className:"bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100 text-xl md:text-2xl",children:"◀"}),g.jsx("button",{onClick:f,className:"bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100 text-xl md:text-2xl",children:"▶"})]})]}),g.jsxs("div",{className:"flex-1 overflow-auto",children:[g.jsxs("div",{className:"mb-4",children:[g.jsx("p",{className:"text-gray-600 mt-2 text-xs md:text-sm",children:n.date}),g.jsx("p",{className:"text-gray-600 text-xs md:text-sm",children:n.location}),g.jsx("p",{className:"text-gray-600 text-xs md:text-sm",children:n.description})]}),g.jsxs("div",{className:"mt-4 flex flex-col space-y-2",children:[n.date===a?g.jsxs(g.Fragment,{children:[g.jsx("button",{onClick:u,className:"bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 text-xs md:text-sm",children:"Open Attendance Form"}),r&&g.jsx(Ej,{onClose:c,eventName:n.title})]}):g.jsx("p",{className:"text-red-500 text-xs md:text-sm",children:"Attendance form is not available yet."}),g.jsx("button",{type:"button",onClick:e,className:"bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 text-xs md:text-sm",children:"Close"})]})]})]})})},Ij=()=>{const[t,e]=L.useState([]),[n,r]=L.useState(null),[i,s]=L.useState(!1);L.useEffect(()=>{(async()=>{try{const c=(await ji(jt(Pe,"events"))).docs.map(em);e(c)}catch(c){console.error("Error fetching events:",c)}})()},[]);const o=u=>{r(u),s(!0)},a=()=>{s(!1),r(null)};return g.jsxs("div",{className:"p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen",children:[g.jsx("h2",{className:"text-2xl sm:text-3xl font-bold mb-4 sm:mb-6",children:"Upcoming Events"}),t.length===0?g.jsx("p",{className:"text-base sm:text-lg text-gray-600",children:"No upcoming events available at the moment."}):g.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6",children:t.map(u=>g.jsxs("div",{className:"bg-white p-4 sm:p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow flex flex-col",onClick:()=>o(u),children:[g.jsx("img",{src:u.image[0]||"/default-image.jpg",alt:u.title,className:"w-full h-32 sm:h-40 object-cover rounded-lg mb-4"}),g.jsxs("div",{className:"flex flex-col flex-grow",children:[g.jsx("h3",{className:"text-base sm:text-lg font-semibold mb-2 truncate",children:u.title}),g.jsx("p",{className:"text-gray-600 text-xs sm:text-sm truncate",children:u.date})]})]},u.id))}),n&&g.jsx(Tj,{isOpen:i,onClose:a,event:n})]})},Sj=()=>g.jsx("div",{className:"bg-slate-50",children:g.jsx(Ij,{})}),Go=({title:t,description:e,actions:n,image:r,imagePlaceholder:i=!0})=>g.jsxs("div",{className:"bg-white p-6 border rounded-lg shadow-md",children:[r?g.jsx("img",{src:r,alt:t,className:"w-full h-48 object-cover rounded-md mb-4"}):i&&g.jsx("div",{className:"mt-6 bg-gray-200 h-48"}),g.jsx("h3",{className:"text-xl font-bold",children:t}),g.jsx("p",{className:"text-gray-600 mt-2",children:e}),g.jsx("div",{className:"mt-4",children:n.map((s,o)=>g.jsx("button",{className:"text-blue-600 hover:underline mr-4",onClick:()=>window.location.href=s.href,children:s.label},o))})]}),Cj="/SkWeb/assets/CAll%20for%20mebeerrs-C5cQG7Ea.jpg",xj="/SkWeb/assets/PROFILINGGGGGG-D9GIBTWj.jpg",Rj="/SkWeb/assets/KK%20ASSEMBLY-DF9zpvKA.jpg",Aj=()=>g.jsxs("div",{className:"max-w-7xl mx-auto py-12 px-6",children:[g.jsxs("header",{className:"text-center",children:[g.jsx("h2",{className:"text-gray-500 uppercase mb-4",children:"Discover"}),g.jsx("h1",{className:"text-4xl font-bold mb-2",children:"Get Involved Today"}),g.jsx("p",{className:"text-gray-600",children:"Learn how you can make a difference in your community"})]}),g.jsxs("section",{className:"mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8",children:[g.jsx(Go,{title:"Become a Youth Leader",description:"Join Sangguniang Kabataan and contribute to positive change in your area",actions:[{label:"Learn More",href:"#learn-more"},{label:"Sign Up",href:"#sign-up"}],image:Cj}),g.jsx(Go,{title:"Lead with Passion",description:"Motivate others to create positive change in their communities",actions:[{label:"Join Us",href:"#join-us"}],image:xj}),g.jsx(Go,{title:"Network with Other Youth Leaders",description:"Build relationships and collaborate with like-minded individuals",actions:[{label:"Learn More",href:"#learn-more"},{label:"Sign Up",href:"#sign-up"}],image:Rj}),g.jsxs("div",{className:"flex flex-col space-y-4",children:[g.jsx(Go,{title:"Attend Events",description:"Participate in community activities and connect with other youth",actions:[{label:"Join Now",href:"#join-now"}],imagePlaceholder:!1}),g.jsx(Go,{title:"Volunteer Opportunities",description:"Make a difference by giving back to your community",actions:[{label:"Get Involved",href:"#get-involved"}],imagePlaceholder:!1})]})]})]}),Nj=({closeChat:t})=>{const[e,n]=L.useState(""),[r,i]=L.useState({}),s=Ch(),o=tE(nE,"messages/");L.useEffect(()=>{const u=VU(o,c=>{const d=c.val();i(d||{})});return()=>u()},[o]);const a=()=>{if(e.trim()){const u=s.currentUser;if(u){const c={content:e,sender:u.email||"Anonymous"},d=tE(nE,"messages/"+Date.now());LU(d,c).then(()=>n("")).catch(f=>{console.error("Error sending message:",f),alert("Failed to send message")})}else alert("You must be authenticated to send a message.")}};return g.jsxs("div",{className:"fixed bottom-[84px] right-4 w-80 bg-white border border-gray-300 rounded-lg shadow-lg p-4 md:bottom-16",style:{zIndex:1e3},children:[g.jsxs("div",{className:"flex justify-between items-center border-b border-gray-300 pb-2 mb-2",children:[g.jsx("h4",{className:"text-lg font-semibold",children:"Live Chat"}),g.jsx("button",{onClick:t,className:"text-gray-500 hover:text-gray-700",children:"×"})]}),g.jsx("div",{className:"overflow-y-auto h-60 border border-gray-200 p-2 mb-2",children:Object.entries(r).map(([u,{content:c,sender:d}])=>{var p;const f=((p=s.currentUser)==null?void 0:p.email)===d;return g.jsxs("div",{className:`mb-2 p-2 rounded-md ${f?"bg-blue-600 text-white":"bg-gray-100 text-black"}`,children:[g.jsx("p",{className:"text-sm font-semibold",children:d}),g.jsx("p",{children:c})]},u)})}),g.jsxs("div",{className:"flex",children:[g.jsx("input",{type:"text",value:e,onChange:u=>n(u.target.value),placeholder:"Type your message...",className:"flex-1 border border-gray-300 rounded-lg p-2 mr-2"}),g.jsx("button",{onClick:a,className:"bg-blue-600 text-white rounded-lg px-4 py-2",children:"Send"})]})]})},kj=()=>{const[t,e]=L.useState(!1),n=()=>{e(!t)};return g.jsxs("div",{children:[g.jsx("button",{onClick:n,className:"fixed bottom-[84px] right-4 z-40 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 md:bottom-4",children:"💬"}),t&&g.jsx(Nj,{closeChat:()=>e(!1)})]})},Pj=({isOpen:t,onClose:e,title:n,message:r})=>t?g.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:g.jsxs("div",{className:"bg-white rounded-lg shadow-2xl p-6 w-full max-w-md mx-auto",children:[g.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:n}),g.jsx("p",{className:"text-gray-600 mb-6",children:r}),g.jsx("div",{className:"flex justify-end",children:g.jsx("button",{onClick:e,className:"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out",children:"Close"})})]})}):null,Px=L.createContext(void 0),bl=()=>{const t=L.useContext(Px);if(!t)throw new Error("useModal must be used within a ModalProvider");return t},bj=({children:t})=>{const[e,n]=L.useState(!1),[r,i]=L.useState({title:"",message:""}),s=(a,u)=>{i({title:a,message:u}),n(!0)},o=()=>{n(!1),i({title:"",message:""})};return g.jsxs(Px.Provider,{value:{showModal:s,hideModal:o},children:[t,g.jsx(Pj,{isOpen:e,onClose:o,title:r.title,message:r.message})]})},Dj=()=>{const[t,e]=L.useState([]),[n,r]=L.useState({id:"",title:"",date:"",location:"",description:"",image:[],category:""}),[i,s]=L.useState([]),[o,a]=L.useState([0]),[u,c]=L.useState(null),[d,f]=L.useState(!1),[p,v]=L.useState(null),[T,A]=L.useState(!1),N=cC(),I=5,{showModal:w}=bl();L.useEffect(()=>{x()},[]);const x=async()=>{try{A(!0);const q=Dc(jt(Pe,"events"),Fp(I)),J=await ji(q),we=J.docs.map(em);e(we),v(J.docs[J.docs.length-1])}catch(q){console.error("Error fetching events:",q),w("Error","There was a problem fetching events.")}finally{A(!1)}},D=async()=>{try{if(A(!0),!p)return;const q=Dc(jt(Pe,"events"),B1(p),Fp(I)),J=await ji(q),we=J.docs.map(em);e(Xe=>[...Xe,...we]),v(J.docs[J.docs.length-1])}catch(q){console.error("Error fetching more events:",q),w("Error","Could not load more events.")}finally{A(!1)}},O=(q,J)=>{if(q.target.files){const Xe=Array.from(q.target.files)[0];if(Xe.size>1048576){w("File Too Large","File size exceeds 1 MB. Please upload a smaller file.");return}const W=[...i];W[J]=Xe,s(W)}},F=()=>{a([...o,o.length])},S=q=>{a(o.filter((J,we)=>we!==q)),s(i.filter((J,we)=>we!==q))},_=async()=>{const q=i.map(J=>new Promise((we,Xe)=>{const W=nl(N,`events/${J.name}`);el(W,J).then(async Q=>{const ne=await tl(Q.ref);we(ne)}).catch(Q=>{console.error("Error uploading file:",Q),Xe(Q)})}));try{return await Promise.all(q)}catch(J){return console.error("Error uploading images:",J),w("Upload Error","There was a problem uploading your images."),[]}},E=async()=>{try{const q=await _(),J=jt(Pe,"events");await po(J,{title:n.title,date:n.date,location:n.location,description:n.description,image:q,category:n.category}),r({id:"",title:"",date:"",location:"",description:"",image:[],category:""}),s([]),a([0]),x(),w("Success","Event added successfully!")}catch(q){console.error("Error adding document:",q),w("Error","Failed to add the event.")}},C=async q=>{try{const J=Ln(Pe,"events",q);await Js(J),x(),w("Success","Event deleted successfully!")}catch(J){console.error("Error deleting document:",J),w("Error","Failed to delete the event.")}},k=q=>{const J=t.find(we=>we.id===q);J?(r(J),s([]),a(J.image&&Array.isArray(J.image)?J.image.map((we,Xe)=>Xe):[0])):(console.error("Event not found for ID:",q),w("Error","Could not find the event to edit."))},P=async()=>{try{if(!n.id){w("Error","No event selected for updating.");return}const q=Ln(Pe,"events",n.id);if(!(await CM(q)).exists()){w("Error","The event you are trying to edit does not exist.");return}const we=i.length?await _():n.image;await qh(q,{title:n.title,date:n.date,location:n.location,description:n.description,image:we,category:n.category}),r({id:"",title:"",date:"",location:"",description:"",image:[],category:""}),s([]),a([0]),x(),w("Success","Event updated successfully!")}catch(q){console.error("Error updating document:",q),w("Error","Failed to update the event.")}},R=q=>{const J=new Date().toISOString().split("T")[0];q.date===J?(c(q),f(!0)):w("Attendance Unavailable","Attendance can only be marked on the day of the event.")};return g.jsxs("div",{className:"p-4 sm:p-6 lg:p-8 bg-gray-100 min-h-screen",children:[g.jsx("h2",{className:"text-2xl sm:text-3xl font-bold mb-4 sm:mb-6",children:"Manage Events"}),g.jsxs("div",{className:"bg-white shadow-md rounded-lg p-4 sm:p-6 mb-4 sm:mb-8",children:[g.jsx("h3",{className:"text-lg sm:text-xl font-semibold mb-2 sm:mb-4",children:n.id?"Edit Event":"Add New Event"}),g.jsxs("div",{className:"space-y-4",children:[g.jsx("input",{type:"text",placeholder:"Title",value:n.title,onChange:q=>r({...n,title:q.target.value}),className:"w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}),g.jsx("input",{type:"date",placeholder:"Date",value:n.date,onChange:q=>r({...n,date:q.target.value}),className:"w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}),g.jsx("input",{type:"text",placeholder:"Location",value:n.location,onChange:q=>r({...n,location:q.target.value}),className:"w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}),g.jsx("textarea",{placeholder:"Description",value:n.description,onChange:q=>r({...n,description:q.target.value}),className:"w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}),g.jsxs("select",{value:n.category,onChange:q=>r({...n,category:q.target.value}),className:"w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",children:[g.jsx("option",{value:"",children:"Select Category"}),g.jsx("option",{value:"Music",children:"Music"}),g.jsx("option",{value:"Sports",children:"Sports"}),g.jsx("option",{value:"Art",children:"Art"}),g.jsx("option",{value:"Party",children:"Party"}),g.jsx("option",{value:"Art",children:"Gathering"})]}),o.map((q,J)=>g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx("input",{type:"file",accept:"image/*",onChange:we=>O(we,J),className:"border border-gray-300 rounded-lg p-2"}),g.jsx("button",{type:"button",onClick:()=>S(J),className:"text-red-500 hover:text-red-700",children:"Remove"})]},J)),g.jsx("button",{type:"button",onClick:F,className:"text-blue-500 hover:text-blue-700",children:"Add Image"}),g.jsx("div",{className:"flex justify-end space-x-2 mt-4",children:n.id?g.jsxs(g.Fragment,{children:[g.jsx("button",{onClick:P,className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Save"}),g.jsx("button",{onClick:()=>r({id:"",title:"",date:"",location:"",description:"",image:[],category:""}),className:"px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600",children:"Cancel"})]}):g.jsx("button",{onClick:E,className:"px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600",children:"Add Event"})})]})]}),g.jsxs("div",{className:"bg-white shadow-md rounded-lg p-4 sm:p-6",children:[g.jsx("h3",{className:"text-lg sm:text-xl font-semibold mb-2 sm:mb-4",children:"Events List"}),T?g.jsx("p",{children:"Loading..."}):g.jsx("ul",{className:"space-y-4",children:t.map(q=>g.jsx("li",{className:"border-b border-gray-200 pb-4",children:g.jsxs("div",{className:"flex justify-between items-center",children:[g.jsxs("div",{children:[g.jsx("h4",{className:"text-lg font-semibold",children:q.title}),g.jsx("p",{className:"text-gray-600",children:q.date}),g.jsx("p",{className:"text-gray-600",children:q.location}),g.jsx("p",{className:"text-gray-600",children:q.description}),g.jsx("div",{className:"flex flex-wrap mt-2 space-x-2",children:q.image.map((J,we)=>g.jsx("img",{src:J,alt:`Event ${we}`,className:"w-24 h-24 object-cover rounded-lg"},we))})]}),g.jsxs("div",{className:"flex space-x-2",children:[g.jsx("button",{onClick:()=>k(q.id),className:"px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600",children:"Edit"}),g.jsx("button",{onClick:()=>C(q.id),className:"px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600",children:"Delete"}),g.jsx("button",{onClick:()=>R(q),className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Mark Attendance"})]})]})},q.id))}),p&&g.jsx("button",{onClick:D,className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",children:"Load More"})]}),d&&u&&g.jsx("div",{className:"fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center",children:g.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-lg w-full max-w-md",children:[g.jsxs("h3",{className:"text-lg font-semibold mb-4",children:["Mark Attendance for ",u.title]}),g.jsx("button",{onClick:()=>f(!1),className:"mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600",children:"Close"})]})})]})},Oj=()=>{const[t,e]=L.useState([]),[n,r]=L.useState(null),[i,s]=L.useState({title:"",description:"",imageUrl:""}),[o,a]=L.useState(null),[u,c]=L.useState(null),[d,f]=L.useState(!1),[p,v]=L.useState(!0),{showModal:T}=bl(),A=jt(Pe,"newsletters"),N=async()=>{if(d||!p)return;f(!0);let _=Dc(A,wM("title"),Fp(10));u&&(_=Dc(_,B1(u)));try{const E=await ji(_);if(E.empty)v(!1);else{const C=E.docs.map(Nx);e(k=>[...k,...C.filter(P=>!k.some(R=>R.id===P.id))]),c(E.docs[E.docs.length-1])}}catch(E){console.error("Error fetching newsletters:",E),T("Error","There was a problem fetching newsletters.")}f(!1)};L.useEffect(()=>{N()},[]);const I=async()=>{try{let _=i.imageUrl;if(o){const E=nl(Kc,`images/${Date.now()}_${o.name}`);await el(E,o),_=await tl(E)}await po(A,{...i,imageUrl:_}),s({title:"",description:"",imageUrl:""}),a(null),v(!0),N(),T("Success","Newsletter added successfully!")}catch(_){console.error("Error adding newsletter:",_),T("Error","Failed to add the newsletter.")}},w=async _=>{try{const E=Ln(Pe,"newsletters",_);let C=i.imageUrl;if(o){const k=nl(Kc,`images/${Date.now()}_${o.name}`);await el(k,o),C=await tl(k)}await qh(E,{...i,imageUrl:C}),r(null),a(null),N(),T("Success","Newsletter updated successfully!")}catch(E){console.error("Error updating newsletter:",E),T("Error","Failed to update the newsletter.")}},x=async _=>{try{const E=Ln(Pe,"newsletters",_);await Js(E),v(!0),N(),T("Success","Newsletter deleted successfully!")}catch(E){console.error("Error deleting newsletter:",E),T("Error","Failed to delete the newsletter.")}},D=_=>{r(_.id),s({title:_.title,description:_.description,imageUrl:_.imageUrl})},O=_=>{s({...i,[_.target.name]:_.target.value})},F=_=>{_.target.files&&a(_.target.files[0])},S=()=>{!d&&p&&N()};return g.jsxs("div",{className:"p-4",children:[g.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Manage Newsletters"}),g.jsxs("div",{className:"mb-6",children:[g.jsx("h2",{className:"text-xl font-semibold mb-4",children:n?"Edit Newsletter":"Add New Newsletter"}),g.jsxs("form",{onSubmit:_=>{_.preventDefault(),n?w(n):I()},children:[g.jsx("input",{type:"text",name:"title",placeholder:"Title",value:i.title,onChange:O,className:"block w-full mb-2 p-2 border border-gray-300 rounded"}),g.jsx("textarea",{name:"description",placeholder:"Description",value:i.description,onChange:O,className:"block w-full mb-2 p-2 border border-gray-300 rounded"}),g.jsx("input",{type:"file",name:"imageUrl",onChange:F,className:"block w-full mb-2"}),g.jsx("button",{type:"submit",className:"bg-blue-500 text-white p-2 rounded",children:n?"Update":"Add"})]})]}),g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",children:t.map(_=>g.jsxs("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden",children:[g.jsx("img",{src:_.imageUrl,alt:_.title,className:"w-full h-48 object-cover"}),g.jsxs("div",{className:"p-4",children:[g.jsx("h2",{className:"text-xl font-bold mb-2",children:_.title}),g.jsx("p",{className:"text-gray-700 mb-4",children:_.description}),g.jsx("button",{onClick:()=>D(_),className:"text-blue-500 hover:underline mr-4",children:"Edit"}),g.jsx("button",{onClick:()=>x(_.id),className:"text-red-500 hover:underline",children:"Delete"})]})]},_.id))}),d&&g.jsx("p",{children:"Loading more newsletters..."}),!d&&p&&g.jsx("button",{onClick:S,className:"mt-4 bg-blue-500 text-white p-2 rounded",children:"Load More"})]})},Lj=()=>{const[t,e]=L.useState([]),[n,r]=L.useState({title:"",description:"",imageUrl:"",formFields:[]}),[i,s]=L.useState(null),[o,a]=L.useState([{label:"",type:"text"}]),[u,c]=L.useState(!1),[d,f]=L.useState(null),{showModal:p}=bl(),v=jt(Pe,"services");L.useEffect(()=>{const O=Up(v,F=>{e(F.docs.map(kx))},F=>{console.error("Error fetching services:",F),p("Error","Failed to fetch services.")});return()=>O()},[]);const T=async O=>{if(O)try{const F=nl(Kc,`services/${O.name}`);return await el(F,O),await tl(F)}catch(F){console.error("Error uploading image:",F),p("Upload Error","Failed to upload the image.")}},A=async()=>{try{if(!n.title.trim()){p("Validation Error","Service title is required.");return}const O=i?await T(i):n.imageUrl;if(i&&!O)return;const F={title:n.title,description:n.description,imageUrl:O||"",formFields:o};if(u&&d){const _=Ln(Pe,"services",d);await qh(_,F),p("Success","Service updated successfully!"),c(!1),f(null)}else await po(v,F),p("Success","Service added successfully!");r({title:"",description:"",imageUrl:"",formFields:[]}),a([{label:"",type:"text"}]),s(null);const S=document.querySelector('input[type="file"]');S&&(S.value="")}catch(O){console.error("Error adding/updating service:",O),p("Error",`Failed to ${u?"update":"add"} the service.`)}},N=async O=>{try{const F=Ln(Pe,"services",O);await Js(F),p("Success","Service deleted successfully!")}catch(F){console.error("Error deleting service:",F),p("Error","Failed to delete the service.")}},I=()=>{a([...o,{label:"",type:"text"}])},w=(O,F,S)=>{const _=o.map((E,C)=>C===O?{...E,[F]:S}:E);a(_)},x=O=>{a(o.filter((F,S)=>S!==O))},D=O=>{r({title:O.title,description:O.description,imageUrl:O.imageUrl,formFields:O.formFields}),a(O.formFields||[]),c(!0),f(O.id)};return g.jsxs("div",{className:"p-6 max-w-screen mx-auto",children:[g.jsx("h1",{className:"text-3xl font-bold mb-6 text-center",children:"Admin Services Management"}),g.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md mb-8 max-w-[100%] mx-auto",children:[g.jsx("h2",{className:"text-2xl font-bold mb-4",children:u?"Edit Service":"Add New Service"}),g.jsx("input",{type:"text",placeholder:"Service Title",value:n.title,onChange:O=>r({...n,title:O.target.value}),className:"block w-full mb-4 p-2 border border-gray-300 rounded"}),g.jsx("textarea",{placeholder:"Service Description",value:n.description,onChange:O=>r({...n,description:O.target.value}),className:"block w-full mb-4 p-2 border border-gray-300 rounded"}),g.jsx("input",{type:"file",onChange:O=>s(O.target.files?O.target.files[0]:null),className:"block w-full mb-4"}),g.jsxs("div",{children:[g.jsx("h3",{className:"text-lg font-bold mb-2",children:"Custom Form Fields"}),o.map((O,F)=>g.jsxs("div",{className:"flex items-center mb-2",children:[g.jsx("input",{type:"text",placeholder:"Field Label",value:O.label,onChange:S=>w(F,"label",S.target.value),className:"block w-full p-2 border border-gray-300 rounded mr-2"}),g.jsxs("select",{value:O.type,onChange:S=>w(F,"type",S.target.value),className:"p-2 border border-gray-300 rounded",children:[g.jsx("option",{value:"text",children:"Text"}),g.jsx("option",{value:"email",children:"Email"}),g.jsx("option",{value:"number",children:"Number"}),g.jsx("option",{value:"textarea",children:"Textarea"})]}),g.jsx("button",{onClick:()=>x(F),className:"ml-2 bg-red-500 text-white p-2 rounded",children:"Remove"})]},F)),g.jsx("button",{onClick:I,className:"bg-blue-500 text-white p-2 rounded",children:"Add Field"})]}),g.jsx("button",{onClick:A,className:"mt-4 bg-green-500 text-white p-2 rounded",children:u?"Update Service":"Add Service"})]}),g.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md max-w-[100%] mx-auto",children:[g.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Existing Services"}),t.map(O=>g.jsxs("div",{className:"border-b border-gray-200 py-4",children:[g.jsx("h3",{className:"text-xl font-semibold",children:O.title}),g.jsx("p",{children:O.description}),O.imageUrl&&g.jsx("img",{src:O.imageUrl,alt:O.title,className:"w-32 h-32 object-cover my-2"}),g.jsx("button",{onClick:()=>D(O),className:"mr-2 bg-yellow-500 text-white p-2 rounded",children:"Edit"}),g.jsx("button",{onClick:()=>N(O.id),className:"bg-red-500 text-white p-2 rounded",children:"Delete"})]},O.id))]})]})},Mj=()=>{const[t,e]=L.useState([]),[n,r]=L.useState(!0),{showModal:i}=bl();L.useEffect(()=>{(async()=>{try{const c=(await ji(jt(Pe,"attendance"))).docs.map(d=>({id:d.id,...d.data()}));e(c)}catch(u){console.error("Error fetching attendance records:",u),i("Error","Failed to fetch attendance records.")}finally{r(!1)}})()},[]);const s=async()=>{if(t.length===0){i("Raffle Error","No records available for the raffle.");return}const a=Math.floor(Math.random()*t.length),u=t[a];try{await po(jt(Pe,"raffleWinners"),{fullName:u.fullName,eventName:u.eventName,timestamp:new Date().toISOString()}),await Js(Ln(Pe,"attendance",u.id)),e(c=>c.filter(d=>d.id!==u.id)),i("🎉 Raffle Winner! 🎉",`Congratulations to ${u.fullName}!`)}catch(c){console.error("Error during the raffle process:",c),i("Raffle Error","Failed to complete the raffle process.")}},o=a=>{var u;return(u=a.createdAt)!=null&&u.toDate?a.createdAt.toDate().toLocaleString():a.timestamp?new Date(a.timestamp).toLocaleString():"Not available"};return n?g.jsx("p",{children:"Loading attendance records..."}):g.jsxs("div",{className:"p-6",children:[g.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"User Attendance Records"}),t.length>0?g.jsx("div",{className:"overflow-x-auto mb-8",children:g.jsxs("table",{className:"min-w-full bg-white border border-gray-200",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{className:"py-2 px-4 border-b",children:"Event Name"}),g.jsx("th",{className:"py-2 px-4 border-b",children:"Email"}),g.jsx("th",{className:"py-2 px-4 border-b",children:"Full Name"}),g.jsx("th",{className:"py-2 px-4 border-b",children:"Age"}),g.jsx("th",{className:"py-2 px-4 border-b",children:"Address"}),g.jsx("th",{className:"py-2 px-4 border-b",children:"Timestamp"})]})}),g.jsx("tbody",{children:t.map(a=>g.jsxs("tr",{children:[g.jsx("td",{className:"py-2 px-4 border-b",children:a.eventName}),g.jsx("td",{className:"py-2 px-4 border-b",children:a.email}),g.jsx("td",{className:"py-2 px-4 border-b",children:a.fullName}),g.jsx("td",{className:"py-2 px-4 border-b",children:a.age}),g.jsx("td",{className:"py-2 px-4 border-b",children:a.address}),g.jsx("td",{className:"py-2 px-4 border-b",children:o(a)})]},a.id))})]})}):g.jsx("p",{children:"No attendance records found."}),g.jsx("div",{className:"my-6",children:g.jsx("button",{onClick:s,className:"bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300",children:"Raffle a Winner"})})]})},Vj=()=>{const[t,e]=L.useState([]),[n,r]=L.useState({}),[,i]=L.useState({}),[s,o]=L.useState(!1),{showModal:a}=bl();L.useEffect(()=>{const p=(()=>{const v=jt(Pe,"services");return Up(v,A=>{const N=A.docs.reduce((I,w)=>{const x=w.data();return I[w.id]=x.title,I},{});r(N),o(!0)},A=>{console.error("Error fetching services:",A),a("Error","Failed to fetch services.")})})();return()=>p()},[]),L.useEffect(()=>{if(!s)return;const f=jt(Pe,"applications"),p=Up(f,v=>{const T=[];v.forEach(async A=>{const N=A.data(),I=N.serviceId;(n[I]||"Unknown Service")==="Unknown Service"?await Js(A.ref):T.push({id:A.id,data:N})}),e(T)},v=>{console.error("Error fetching applications:",v),a("Error","Failed to fetch applications.")});return()=>p()},[s,n,a]);const u=(f,p,v)=>{i(T=>({...T,[f]:{...T[f],[p]:v}}))},c=async f=>{try{const p=Ln(Pe,"applications",f);await qh(p,{status:"qualified",qualified:!0}),e(v=>v.map(T=>T.id===f?{...T,data:{...T.data,status:"qualified",qualified:!0}}:T)),a("Success","Application marked as qualified.")}catch(p){console.error("Error marking as qualified:",p),a("Error","Failed to mark as qualified.")}},d=async f=>{try{const p=Ln(Pe,"applications",f);await Js(p),e(v=>v.filter(T=>T.id!==f)),a("Success","Application unqualified and removed.")}catch(p){console.error("Error marking as unqualified:",p),a("Error","Failed to unqualify application.")}};return g.jsxs("div",{className:"max-w-7xl mx-4 sm:mx-8 lg:mx-auto p-6 font-sans",children:[g.jsx("h1",{className:"text-2xl font-bold mb-6",children:"Service Results"}),t.length>0?g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:t.map((f,p)=>{const v=f.data.serviceId,T=n[v]||"Unknown Service",A=f.data.status==="qualified"||f.data.qualified===!0;return g.jsxs("div",{className:`bg-white shadow-md rounded-lg p-6 ${p<4?"w-full":""}`,children:[g.jsxs("h2",{className:"text-xl font-semibold mb-4",children:["Service Title: ",T]}),g.jsx("div",{className:"space-y-4",children:Object.entries(f.data).filter(([N])=>N!=="qualified"&&N!=="status"&&N!=="createdAt").sort(([N],[I])=>N.localeCompare(I)).map(([N,I],w)=>g.jsxs("div",{className:"mb-4",children:[g.jsx("label",{className:"block font-medium text-gray-600",children:N}),g.jsx("div",{className:"mt-1 text-gray-800",children:Fj(N,I,v,u)})]},w))}),g.jsx("div",{className:"mt-4",children:A?g.jsx("div",{className:"bg-green-500 text-white px-4 py-2 rounded-md text-center",children:"Qualified"}):g.jsxs("div",{children:[g.jsx("button",{className:"bg-blue-500 text-white px-4 py-2 rounded-md mr-2",onClick:()=>c(f.id),children:"Qualify"}),g.jsx("button",{className:"bg-red-500 text-white px-4 py-2 rounded-md",onClick:()=>d(f.id),children:"Unqualify"})]})})]},f.id)})}):g.jsx("p",{className:"text-gray-600",children:"No applications found."})]})},Fj=(t,e,n,r)=>typeof e=="string"?g.jsx("input",{type:"text",value:e,onChange:i=>r(n,t,i.target.value),className:"border border-gray-300 rounded px-3 py-2"}):typeof e=="number"?g.jsx("input",{type:"number",value:e,onChange:i=>r(n,t,parseFloat(i.target.value)),className:"border border-gray-300 rounded px-3 py-2"}):Array.isArray(e)?g.jsx("ul",{className:"list-disc list-inside",children:e.map((i,s)=>g.jsx("li",{children:g.jsx("input",{type:"text",value:i,onChange:o=>r(n,t,o.target.value),className:"border border-gray-300 rounded px-3 py-2"})},s))}):g.jsx("span",{children:"Unsupported type"}),Uj=()=>g.jsxs("div",{children:[g.jsx(Ax,{}),g.jsx(Dj,{}),g.jsx(Oj,{}),g.jsx(Lj,{}),g.jsx(Vj,{}),g.jsx(Mj,{})]}),jj="/SkWeb/assets/SK%20KABATAAANNNNN-XVd6BJoN.jpg",Bj=()=>{const[t,e]=L.useState(!1);return L.useEffect(()=>{const n=Ch(),r=cg(n,i=>{e(!!i)});return()=>r()},[]),g.jsx("div",{className:"min-h-screen w-full overflow-hidden pt-16 px-4 sm:px-8",children:g.jsxs("div",{className:"flex w-full max-w-full flex-col items-center justify-between gap-8 sm:flex-row sm:gap-4",children:[g.jsxs("div",{className:"flex w-full min-w-0 flex-col items-start space-y-4 p-5 sm:w-1/2",children:[g.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black font-serif",children:"Building a Brighter Future for Youth"}),g.jsx("p",{className:"text-base sm:text-lg md:text-xl lg:text-2xl text-black mb-5",children:"At Sangguniang Kabataan, our mission is to empower the youth by providing them with opportunities for growth, development, and active participation in their communities. We envision a future where every young person has the tools and support they need to succeed and make a positive impact."}),!t&&g.jsx(F_,{})]}),g.jsx("div",{className:"flex w-full min-w-0 justify-center sm:ml-0 sm:w-1/2",children:g.jsx("img",{src:jj,alt:"Card",className:"h-auto w-full max-w-full rounded-md object-contain shadow-md sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] lg:h-[550px] lg:w-[550px]"})})]})})},zj=()=>{const[t,e]=L.useState(null),n=[{question:"What is SK?",answer:"Sangguniang Kabataan (SK) is a youth council in the Philippines that represents the youth in the local government. It aims to empower the youth and address their concerns and needs."},{question:"How to join SK?",answer:"To join Sangguniang Kabataan (SK), you must be a Filipino citizen, aged 15 to 30 years old, and a resident of the barangay where you intend to run for a position. You must also meet the eligibility requirements set by the Commission on Elections (COMELEC)."},{question:"What are SK programs?",answer:"Sangguniang Kabataan (SK) implements various programs and projects for the youth, such as sports development, skills training, environmental initiatives, and community outreach activities. These programs aim to promote the holistic development of the youth and address their specific needs."},{question:"How can I contribute?",answer:"You can contribute to Sangguniang Kabataan (SK) by actively participating in its programs and projects, volunteering your time and skills, and providing feedback and suggestions to improve the youth council's initiatives. Your involvement can make a positive impact on the youth in your community."},{question:"How to contact SK?",answer:"To contact Sangguniang Kabataan (SK), you can reach out to your local SK officials or visit the SK office in your barangay. You can also contact the SK national office for inquiries and assistance."}],r=i=>{e(i===t?null:i)};return g.jsx("div",{className:"flex flex-col items-center p-8",children:g.jsxs("div",{className:"w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start",children:[g.jsxs("div",{className:"w-full lg:w-1/3 mb-8 lg:mb-0 lg:pr-8",children:[g.jsx("h1",{className:"text-3xl lg:text-5xl font-bold mb-4",children:"Frequently Asked Questions"}),g.jsx("p",{className:"text-base lg:text-lg mb-6",children:"Find answers to common questions about Sangguniang Kabataan and its programs."}),g.jsx("button",{className:"mt-4 px-6 py-2 border border-black bg-white hover:bg-gray-100 transition duration-300",children:"Contact"})]}),g.jsx("div",{className:"w-full lg:w-2/3",children:n.map((i,s)=>g.jsxs("div",{className:"border-t border-gray-300 mb-4",children:[g.jsxs("button",{className:"flex justify-between items-center w-full py-4 text-left",onClick:()=>r(s),children:[g.jsx("h3",{className:"text-lg lg:text-xl font-medium",children:i.question}),g.jsx("span",{className:"text-lg lg:text-xl",children:t===s?"▲":"▼"})]}),t===s&&g.jsx("div",{className:"py-2 text-gray-600 text-sm lg:text-base",children:g.jsx("p",{children:i.answer})})]},s))})]})})},$j=()=>g.jsx("footer",{className:"w-full bg-white mt-16 py-8 border-t border-gray-300",children:g.jsxs("div",{className:"container mx-auto px-4",children:[g.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center mb-8",children:[g.jsx("div",{className:"flex items-center mb-4 md:mb-0",children:g.jsx("img",{src:kI,alt:"Sangguniang Kabataan Logo",className:"h-20 w-20 object-contain ml-4"})}),g.jsx("div",{className:"w-full flex justify-center",children:g.jsxs("ul",{className:"flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 md:mb-0",children:[g.jsx("li",{children:g.jsx("a",{className:"text-gray-700 hover:text-black transition",children:"About us"})}),g.jsx("li",{children:g.jsx("a",{className:"text-gray-700 hover:text-black transition",children:"Contact Us"})}),g.jsx("li",{children:g.jsx("a",{className:"text-gray-700 hover:text-black transition",children:"FAQs"})}),g.jsx("li",{children:g.jsx("a",{className:"text-gray-700 hover:text-black transition",children:"Support"})}),g.jsx("li",{children:g.jsx("a",{className:"text-gray-700 hover:text-black transition",children:"Terms"})})]})})]}),g.jsxs("div",{className:"flex flex-col items-center text-sm",children:[g.jsx("p",{className:"text-gray-500",children:"© 2024 Sangguniang Kabataan. All rights reserved."}),g.jsxs("ul",{className:"flex flex-wrap justify-center gap-x-4 gap-y-2 mt-2",children:[g.jsx("li",{children:g.jsx("a",{href:"/privacy",className:"text-gray-700 hover:text-black transition",children:"Privacy Policy"})}),g.jsx("li",{children:g.jsx("a",{href:"/terms",className:"text-gray-700 hover:text-black transition",children:"Terms of Service"})}),g.jsx("li",{children:g.jsx("a",{href:"/cookies",className:"text-gray-700 hover:text-black transition",children:"Cookie Policy"})})]})]})]})});function Wj(){return g.jsxs(g.Fragment,{children:[g.jsx(Ax,{}),g.jsxs("div",{id:"home",children:[g.jsx(dj,{}),g.jsx(Bj,{})]}),g.jsx("div",{id:"service",children:g.jsx(_j,{})}),g.jsx("div",{id:"newsletter",children:g.jsx(wj,{})}),g.jsx("div",{id:"events",children:g.jsx(Sj,{})}),g.jsx(Aj,{}),g.jsx(kj,{}),g.jsx(zj,{}),g.jsx($j,{})]})}function qj(){return g.jsx(kk,{basename:"/SkWeb",children:g.jsx(XU,{children:g.jsx(bj,{children:g.jsxs(Rk,{children:[g.jsx(hp,{path:"/admin",element:g.jsx(Uj,{})}),g.jsx(hp,{path:"*",element:g.jsx(Wj,{})})]})})})})}vI(document.getElementById("root")).render(g.jsx(L.StrictMode,{children:g.jsx(qj,{})}));
