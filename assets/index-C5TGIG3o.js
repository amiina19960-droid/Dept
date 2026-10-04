function T0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(r,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();function I0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wd={exports:{}},Vi={},Gd={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fr=Symbol.for("react.element"),L0=Symbol.for("react.portal"),P0=Symbol.for("react.fragment"),R0=Symbol.for("react.strict_mode"),M0=Symbol.for("react.profiler"),z0=Symbol.for("react.provider"),O0=Symbol.for("react.context"),D0=Symbol.for("react.forward_ref"),B0=Symbol.for("react.suspense"),F0=Symbol.for("react.memo"),U0=Symbol.for("react.lazy"),ul=Symbol.iterator;function _0(e){return e===null||typeof e!="object"?null:(e=ul&&e[ul]||e["@@iterator"],typeof e=="function"?e:null)}var Qd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hd=Object.assign,Vd={};function Vn(e,t,n){this.props=e,this.context=t,this.refs=Vd,this.updater=n||Qd}Vn.prototype.isReactComponent={};Vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kd(){}Kd.prototype=Vn.prototype;function es(e,t,n){this.props=e,this.context=t,this.refs=Vd,this.updater=n||Qd}var ts=es.prototype=new Kd;ts.constructor=es;Hd(ts,Vn.prototype);ts.isPureReactComponent=!0;var pl=Array.isArray,Yd=Object.prototype.hasOwnProperty,ns={current:null},qd={key:!0,ref:!0,__self:!0,__source:!0};function Jd(e,t,n){var r,a={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Yd.call(t,r)&&!qd.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){for(var d=Array(l),c=0;c<l;c++)d[c]=arguments[c+2];a.children=d}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)a[r]===void 0&&(a[r]=l[r]);return{$$typeof:Fr,type:e,key:o,ref:s,props:a,_owner:ns.current}}function W0(e,t){return{$$typeof:Fr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function rs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fr}function G0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var fl=/\/+/g;function $a(e,t){return typeof e=="object"&&e!==null&&e.key!=null?G0(""+e.key):t.toString(36)}function di(e,t,n,r,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Fr:case L0:s=!0}}if(s)return s=e,a=a(s),e=r===""?"."+$a(s,0):r,pl(a)?(n="",e!=null&&(n=e.replace(fl,"$&/")+"/"),di(a,t,n,"",function(c){return c})):a!=null&&(rs(a)&&(a=W0(a,n+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(fl,"$&/")+"/")+e)),t.push(a)),1;if(s=0,r=r===""?".":r+":",pl(e))for(var l=0;l<e.length;l++){o=e[l];var d=r+$a(o,l);s+=di(o,t,n,d,a)}else if(d=_0(e),typeof d=="function")for(e=d.call(e),l=0;!(o=e.next()).done;)o=o.value,d=r+$a(o,l++),s+=di(o,t,n,d,a);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Hr(e,t,n){if(e==null)return e;var r=[],a=0;return di(e,r,"","",function(o){return t.call(n,o,a++)}),r}function Q0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},ci={transition:null},H0={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:ci,ReactCurrentOwner:ns};function Xd(){throw Error("act(...) is not supported in production builds of React.")}_.Children={map:Hr,forEach:function(e,t,n){Hr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Hr(e,function(){t++}),t},toArray:function(e){return Hr(e,function(t){return t})||[]},only:function(e){if(!rs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=Vn;_.Fragment=P0;_.Profiler=M0;_.PureComponent=es;_.StrictMode=R0;_.Suspense=B0;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H0;_.act=Xd;_.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Hd({},e.props),a=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=ns.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)Yd.call(t,d)&&!qd.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&l!==void 0?l[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){l=Array(d);for(var c=0;c<d;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Fr,type:e.type,key:a,ref:o,props:r,_owner:s}};_.createContext=function(e){return e={$$typeof:O0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:z0,_context:e},e.Consumer=e};_.createElement=Jd;_.createFactory=function(e){var t=Jd.bind(null,e);return t.type=e,t};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:D0,render:e}};_.isValidElement=rs;_.lazy=function(e){return{$$typeof:U0,_payload:{_status:-1,_result:e},_init:Q0}};_.memo=function(e,t){return{$$typeof:F0,type:e,compare:t===void 0?null:t}};_.startTransition=function(e){var t=ci.transition;ci.transition={};try{e()}finally{ci.transition=t}};_.unstable_act=Xd;_.useCallback=function(e,t){return Ee.current.useCallback(e,t)};_.useContext=function(e){return Ee.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};_.useEffect=function(e,t){return Ee.current.useEffect(e,t)};_.useId=function(){return Ee.current.useId()};_.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};_.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};_.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};_.useMemo=function(e,t){return Ee.current.useMemo(e,t)};_.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};_.useRef=function(e){return Ee.current.useRef(e)};_.useState=function(e){return Ee.current.useState(e)};_.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};_.useTransition=function(){return Ee.current.useTransition()};_.version="18.3.1";Gd.exports=_;var h=Gd.exports;const Dn=I0(h),V0=T0({__proto__:null,default:Dn},[h]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0=h,Y0=Symbol.for("react.element"),q0=Symbol.for("react.fragment"),J0=Object.prototype.hasOwnProperty,X0=K0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Z0={key:!0,ref:!0,__self:!0,__source:!0};function Zd(e,t,n){var r,a={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)J0.call(t,r)&&!Z0.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Y0,type:e,key:o,ref:s,props:a,_owner:X0.current}}Vi.Fragment=q0;Vi.jsx=Zd;Vi.jsxs=Zd;Wd.exports=Vi;var i=Wd.exports,no={},ec={exports:{}},_e={},tc={exports:{}},nc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,O){var D=S.length;S.push(O);e:for(;0<D;){var Q=D-1>>>1,H=S[Q];if(0<a(H,O))S[Q]=O,S[D]=H,D=Q;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var O=S[0],D=S.pop();if(D!==O){S[0]=D;e:for(var Q=0,H=S.length,V=H>>>1;Q<V;){var ke=2*(Q+1)-1,Oe=S[ke],it=ke+1,$t=S[it];if(0>a(Oe,D))it<H&&0>a($t,Oe)?(S[Q]=$t,S[it]=D,Q=it):(S[Q]=Oe,S[ke]=D,Q=ke);else if(it<H&&0>a($t,D))S[Q]=$t,S[it]=D,Q=it;else break e}}return O}function a(S,O){var D=S.sortIndex-O.sortIndex;return D!==0?D:S.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var d=[],c=[],m=1,p=null,x=3,w=!1,y=!1,b=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(S){for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=S)r(c),O.sortIndex=O.expirationTime,t(d,O);else break;O=n(c)}}function $(S){if(b=!1,g(S),!y)if(n(d)!==null)y=!0,k(A);else{var O=n(c);O!==null&&z($,O.startTime-S)}}function A(S,O){y=!1,b&&(b=!1,f(v),v=-1),w=!0;var D=x;try{for(g(O),p=n(d);p!==null&&(!(p.expirationTime>O)||S&&!W());){var Q=p.callback;if(typeof Q=="function"){p.callback=null,x=p.priorityLevel;var H=Q(p.expirationTime<=O);O=e.unstable_now(),typeof H=="function"?p.callback=H:p===n(d)&&r(d),g(O)}else r(d);p=n(d)}if(p!==null)var V=!0;else{var ke=n(c);ke!==null&&z($,ke.startTime-O),V=!1}return V}finally{p=null,x=D,w=!1}}var E=!1,N=null,v=-1,I=5,L=-1;function W(){return!(e.unstable_now()-L<I)}function se(){if(N!==null){var S=e.unstable_now();L=S;var O=!0;try{O=N(!0,S)}finally{O?fe():(E=!1,N=null)}}else E=!1}var fe;if(typeof u=="function")fe=function(){u(se)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,yt=le.port2;le.port1.onmessage=se,fe=function(){yt.postMessage(null)}}else fe=function(){j(se,0)};function k(S){N=S,E||(E=!0,fe())}function z(S,O){v=j(function(){S(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,k(A))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(S){switch(x){case 1:case 2:case 3:var O=3;break;default:O=x}var D=x;x=O;try{return S()}finally{x=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,O){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var D=x;x=S;try{return O()}finally{x=D}},e.unstable_scheduleCallback=function(S,O,D){var Q=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?Q+D:Q):D=Q,S){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=D+H,S={id:m++,callback:O,priorityLevel:S,startTime:D,expirationTime:H,sortIndex:-1},D>Q?(S.sortIndex=D,t(c,S),n(d)===null&&S===n(c)&&(b?(f(v),v=-1):b=!0,z($,D-Q))):(S.sortIndex=H,t(d,S),y||w||(y=!0,k(A))),S},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(S){var O=x;return function(){var D=x;x=O;try{return S.apply(this,arguments)}finally{x=D}}}})(nc);tc.exports=nc;var ep=tc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp=h,Ue=ep;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rc=new Set,$r={};function pn(e,t){Bn(e,t),Bn(e+"Capture",t)}function Bn(e,t){for($r[e]=t,e=0;e<t.length;e++)rc.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ro=Object.prototype.hasOwnProperty,np=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hl={},ml={};function rp(e){return ro.call(ml,e)?!0:ro.call(hl,e)?!1:np.test(e)?ml[e]=!0:(hl[e]=!0,!1)}function ip(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ap(e,t,n,r){if(t===null||typeof t>"u"||ip(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,n,r,a,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ve[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var is=/[\-:]([a-z])/g;function as(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(is,as);ve[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(is,as);ve[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(is,as);ve[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function os(e,t,n,r){var a=ve.hasOwnProperty(t)?ve[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ap(t,n,a,r)&&(n=null),r||a===null?rp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var vt=tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vr=Symbol.for("react.element"),vn=Symbol.for("react.portal"),yn=Symbol.for("react.fragment"),ss=Symbol.for("react.strict_mode"),io=Symbol.for("react.profiler"),ic=Symbol.for("react.provider"),ac=Symbol.for("react.context"),ls=Symbol.for("react.forward_ref"),ao=Symbol.for("react.suspense"),oo=Symbol.for("react.suspense_list"),ds=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),oc=Symbol.for("react.offscreen"),gl=Symbol.iterator;function Xn(e){return e===null||typeof e!="object"?null:(e=gl&&e[gl]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,ba;function or(e){if(ba===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ba=t&&t[1]||""}return`
`+ba+e}var ja=!1;function ka(e,t){if(!e||ja)return"";ja=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var a=c.stack.split(`
`),o=r.stack.split(`
`),s=a.length-1,l=o.length-1;1<=s&&0<=l&&a[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(a[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||a[s]!==o[l]){var d=`
`+a[s].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=s&&0<=l);break}}}finally{ja=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?or(e):""}function op(e){switch(e.tag){case 5:return or(e.type);case 16:return or("Lazy");case 13:return or("Suspense");case 19:return or("SuspenseList");case 0:case 2:case 15:return e=ka(e.type,!1),e;case 11:return e=ka(e.type.render,!1),e;case 1:return e=ka(e.type,!0),e;default:return""}}function so(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yn:return"Fragment";case vn:return"Portal";case io:return"Profiler";case ss:return"StrictMode";case ao:return"Suspense";case oo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ac:return(e.displayName||"Context")+".Consumer";case ic:return(e._context.displayName||"Context")+".Provider";case ls:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ds:return t=e.displayName||null,t!==null?t:so(e.type)||"Memo";case kt:t=e._payload,e=e._init;try{return so(e(t))}catch{}}return null}function sp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return so(t);case 8:return t===ss?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lp(e){var t=sc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Kr(e){e._valueTracker||(e._valueTracker=lp(e))}function lc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=sc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function lo(e,t){var n=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function dc(e,t){t=t.checked,t!=null&&os(e,"checked",t,!1)}function co(e,t){dc(e,t);var n=Ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?uo(e,t.type,n):t.hasOwnProperty("defaultValue")&&uo(e,t.type,Ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function uo(e,t,n){(t!=="number"||$i(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var sr=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ft(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function po(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(sr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ft(n)}}function cc(e,t){var n=Ft(t.value),r=Ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function yl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function uc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?uc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yr,pc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yr=Yr||document.createElement("div"),Yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function br(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dp=["Webkit","ms","Moz","O"];Object.keys(ur).forEach(function(e){dp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ur[t]=ur[e]})});function fc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ur.hasOwnProperty(e)&&ur[e]?(""+t).trim():t+"px"}function hc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=fc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var cp=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ho(e,t){if(t){if(cp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function mo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var go=null;function cs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xo=null,Pn=null,Rn=null;function $l(e){if(e=Wr(e)){if(typeof xo!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Xi(t),xo(e.stateNode,e.type,t))}}function mc(e){Pn?Rn?Rn.push(e):Rn=[e]:Pn=e}function gc(){if(Pn){var e=Pn,t=Rn;if(Rn=Pn=null,$l(e),t)for(e=0;e<t.length;e++)$l(t[e])}}function xc(e,t){return e(t)}function wc(){}var Aa=!1;function vc(e,t,n){if(Aa)return e(t,n);Aa=!0;try{return xc(e,t,n)}finally{Aa=!1,(Pn!==null||Rn!==null)&&(wc(),gc())}}function jr(e,t){var n=e.stateNode;if(n===null)return null;var r=Xi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var wo=!1;if(mt)try{var Zn={};Object.defineProperty(Zn,"passive",{get:function(){wo=!0}}),window.addEventListener("test",Zn,Zn),window.removeEventListener("test",Zn,Zn)}catch{wo=!1}function up(e,t,n,r,a,o,s,l,d){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var pr=!1,bi=null,ji=!1,vo=null,pp={onError:function(e){pr=!0,bi=e}};function fp(e,t,n,r,a,o,s,l,d){pr=!1,bi=null,up.apply(pp,arguments)}function hp(e,t,n,r,a,o,s,l,d){if(fp.apply(this,arguments),pr){if(pr){var c=bi;pr=!1,bi=null}else throw Error(C(198));ji||(ji=!0,vo=c)}}function fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bl(e){if(fn(e)!==e)throw Error(C(188))}function mp(e){var t=e.alternate;if(!t){if(t=fn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return bl(a),e;if(o===r)return bl(a),t;o=o.sibling}throw Error(C(188))}if(n.return!==r.return)n=a,r=o;else{for(var s=!1,l=a.child;l;){if(l===n){s=!0,n=a,r=o;break}if(l===r){s=!0,r=a,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=a;break}if(l===r){s=!0,r=o,n=a;break}l=l.sibling}if(!s)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function $c(e){return e=mp(e),e!==null?bc(e):null}function bc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bc(e);if(t!==null)return t;e=e.sibling}return null}var jc=Ue.unstable_scheduleCallback,jl=Ue.unstable_cancelCallback,gp=Ue.unstable_shouldYield,xp=Ue.unstable_requestPaint,ae=Ue.unstable_now,wp=Ue.unstable_getCurrentPriorityLevel,us=Ue.unstable_ImmediatePriority,kc=Ue.unstable_UserBlockingPriority,ki=Ue.unstable_NormalPriority,vp=Ue.unstable_LowPriority,Ac=Ue.unstable_IdlePriority,Ki=null,lt=null;function yp(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Ki,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:jp,$p=Math.log,bp=Math.LN2;function jp(e){return e>>>=0,e===0?32:31-($p(e)/bp|0)|0}var qr=64,Jr=4194304;function lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ai(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~a;l!==0?r=lr(l):(o&=s,o!==0&&(r=lr(o)))}else s=n&~a,s!==0?r=lr(s):o!==0&&(r=lr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),a=1<<n,r|=e[n],t&=~a;return r}function kp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ap(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-tt(o),l=1<<s,d=a[s];d===-1?(!(l&n)||l&r)&&(a[s]=kp(l,t)):d<=t&&(e.expiredLanes|=l),o&=~l}}function yo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Sc(){var e=qr;return qr<<=1,!(qr&4194240)&&(qr=64),e}function Sa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ur(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function Sp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-tt(n),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~o}}function ps(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var K=0;function Nc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cc,fs,Ec,Tc,Ic,$o=!1,Xr=[],It=null,Lt=null,Pt=null,kr=new Map,Ar=new Map,St=[],Np="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kl(e,t){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ar.delete(t.pointerId)}}function er(e,t,n,r,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},t!==null&&(t=Wr(t),t!==null&&fs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Cp(e,t,n,r,a){switch(t){case"focusin":return It=er(It,e,t,n,r,a),!0;case"dragenter":return Lt=er(Lt,e,t,n,r,a),!0;case"mouseover":return Pt=er(Pt,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return kr.set(o,er(kr.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Ar.set(o,er(Ar.get(o)||null,e,t,n,r,a)),!0}return!1}function Lc(e){var t=tn(e.target);if(t!==null){var n=fn(t);if(n!==null){if(t=n.tag,t===13){if(t=yc(n),t!==null){e.blockedOn=t,Ic(e.priority,function(){Ec(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ui(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);go=r,n.target.dispatchEvent(r),go=null}else return t=Wr(n),t!==null&&fs(t),e.blockedOn=n,!1;t.shift()}return!0}function Al(e,t,n){ui(e)&&n.delete(t)}function Ep(){$o=!1,It!==null&&ui(It)&&(It=null),Lt!==null&&ui(Lt)&&(Lt=null),Pt!==null&&ui(Pt)&&(Pt=null),kr.forEach(Al),Ar.forEach(Al)}function tr(e,t){e.blockedOn===t&&(e.blockedOn=null,$o||($o=!0,Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority,Ep)))}function Sr(e){function t(a){return tr(a,e)}if(0<Xr.length){tr(Xr[0],e);for(var n=1;n<Xr.length;n++){var r=Xr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(It!==null&&tr(It,e),Lt!==null&&tr(Lt,e),Pt!==null&&tr(Pt,e),kr.forEach(t),Ar.forEach(t),n=0;n<St.length;n++)r=St[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<St.length&&(n=St[0],n.blockedOn===null);)Lc(n),n.blockedOn===null&&St.shift()}var Mn=vt.ReactCurrentBatchConfig,Si=!0;function Tp(e,t,n,r){var a=K,o=Mn.transition;Mn.transition=null;try{K=1,hs(e,t,n,r)}finally{K=a,Mn.transition=o}}function Ip(e,t,n,r){var a=K,o=Mn.transition;Mn.transition=null;try{K=4,hs(e,t,n,r)}finally{K=a,Mn.transition=o}}function hs(e,t,n,r){if(Si){var a=bo(e,t,n,r);if(a===null)za(e,t,r,Ni,n),kl(e,r);else if(Cp(a,e,t,n,r))r.stopPropagation();else if(kl(e,r),t&4&&-1<Np.indexOf(e)){for(;a!==null;){var o=Wr(a);if(o!==null&&Cc(o),o=bo(e,t,n,r),o===null&&za(e,t,r,Ni,n),o===a)break;a=o}a!==null&&r.stopPropagation()}else za(e,t,r,null,n)}}var Ni=null;function bo(e,t,n,r){if(Ni=null,e=cs(r),e=tn(e),e!==null)if(t=fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=yc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ni=e,null}function Pc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wp()){case us:return 1;case kc:return 4;case ki:case vp:return 16;case Ac:return 536870912;default:return 16}default:return 16}}var Ct=null,ms=null,pi=null;function Rc(){if(pi)return pi;var e,t=ms,n=t.length,r,a="value"in Ct?Ct.value:Ct.textContent,o=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===a[o-r];r++);return pi=a.slice(e,1<r?1-r:void 0)}function fi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zr(){return!0}function Sl(){return!1}function We(e){function t(n,r,a,o,s){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Zr:Sl,this.isPropagationStopped=Sl,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zr)},persist:function(){},isPersistent:Zr}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gs=We(Kn),_r=ne({},Kn,{view:0,detail:0}),Lp=We(_r),Na,Ca,nr,Yi=ne({},_r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nr&&(nr&&e.type==="mousemove"?(Na=e.screenX-nr.screenX,Ca=e.screenY-nr.screenY):Ca=Na=0,nr=e),Na)},movementY:function(e){return"movementY"in e?e.movementY:Ca}}),Nl=We(Yi),Pp=ne({},Yi,{dataTransfer:0}),Rp=We(Pp),Mp=ne({},_r,{relatedTarget:0}),Ea=We(Mp),zp=ne({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),Op=We(zp),Dp=ne({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bp=We(Dp),Fp=ne({},Kn,{data:0}),Cl=We(Fp),Up={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_p={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wp[e])?!!t[e]:!1}function xs(){return Gp}var Qp=ne({},_r,{key:function(e){if(e.key){var t=Up[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_p[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xs,charCode:function(e){return e.type==="keypress"?fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hp=We(Qp),Vp=ne({},Yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),El=We(Vp),Kp=ne({},_r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xs}),Yp=We(Kp),qp=ne({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jp=We(qp),Xp=ne({},Yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zp=We(Xp),ef=[9,13,27,32],ws=mt&&"CompositionEvent"in window,fr=null;mt&&"documentMode"in document&&(fr=document.documentMode);var tf=mt&&"TextEvent"in window&&!fr,Mc=mt&&(!ws||fr&&8<fr&&11>=fr),Tl=" ",Il=!1;function zc(e,t){switch(e){case"keyup":return ef.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function nf(e,t){switch(e){case"compositionend":return Oc(t);case"keypress":return t.which!==32?null:(Il=!0,Tl);case"textInput":return e=t.data,e===Tl&&Il?null:e;default:return null}}function rf(e,t){if($n)return e==="compositionend"||!ws&&zc(e,t)?(e=Rc(),pi=ms=Ct=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mc&&t.locale!=="ko"?null:t.data;default:return null}}var af={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ll(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!af[e.type]:t==="textarea"}function Dc(e,t,n,r){mc(r),t=Ci(t,"onChange"),0<t.length&&(n=new gs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var hr=null,Nr=null;function of(e){Yc(e,0)}function qi(e){var t=kn(e);if(lc(t))return e}function sf(e,t){if(e==="change")return t}var Bc=!1;if(mt){var Ta;if(mt){var Ia="oninput"in document;if(!Ia){var Pl=document.createElement("div");Pl.setAttribute("oninput","return;"),Ia=typeof Pl.oninput=="function"}Ta=Ia}else Ta=!1;Bc=Ta&&(!document.documentMode||9<document.documentMode)}function Rl(){hr&&(hr.detachEvent("onpropertychange",Fc),Nr=hr=null)}function Fc(e){if(e.propertyName==="value"&&qi(Nr)){var t=[];Dc(t,Nr,e,cs(e)),vc(of,t)}}function lf(e,t,n){e==="focusin"?(Rl(),hr=t,Nr=n,hr.attachEvent("onpropertychange",Fc)):e==="focusout"&&Rl()}function df(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qi(Nr)}function cf(e,t){if(e==="click")return qi(t)}function uf(e,t){if(e==="input"||e==="change")return qi(t)}function pf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:pf;function Cr(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!ro.call(t,a)||!rt(e[a],t[a]))return!1}return!0}function Ml(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zl(e,t){var n=Ml(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ml(n)}}function Uc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Uc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _c(){for(var e=window,t=$i();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$i(e.document)}return t}function vs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ff(e){var t=_c(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Uc(n.ownerDocument.documentElement,n)){if(r!==null&&vs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=r.end===void 0?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=zl(n,o);var s=zl(n,r);a&&s&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hf=mt&&"documentMode"in document&&11>=document.documentMode,bn=null,jo=null,mr=null,ko=!1;function Ol(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ko||bn==null||bn!==$i(r)||(r=bn,"selectionStart"in r&&vs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mr&&Cr(mr,r)||(mr=r,r=Ci(jo,"onSelect"),0<r.length&&(t=new gs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=bn)))}function ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jn={animationend:ei("Animation","AnimationEnd"),animationiteration:ei("Animation","AnimationIteration"),animationstart:ei("Animation","AnimationStart"),transitionend:ei("Transition","TransitionEnd")},La={},Wc={};mt&&(Wc=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function Ji(e){if(La[e])return La[e];if(!jn[e])return e;var t=jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wc)return La[e]=t[n];return e}var Gc=Ji("animationend"),Qc=Ji("animationiteration"),Hc=Ji("animationstart"),Vc=Ji("transitionend"),Kc=new Map,Dl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _t(e,t){Kc.set(e,t),pn(t,[e])}for(var Pa=0;Pa<Dl.length;Pa++){var Ra=Dl[Pa],mf=Ra.toLowerCase(),gf=Ra[0].toUpperCase()+Ra.slice(1);_t(mf,"on"+gf)}_t(Gc,"onAnimationEnd");_t(Qc,"onAnimationIteration");_t(Hc,"onAnimationStart");_t("dblclick","onDoubleClick");_t("focusin","onFocus");_t("focusout","onBlur");_t(Vc,"onTransitionEnd");Bn("onMouseEnter",["mouseout","mouseover"]);Bn("onMouseLeave",["mouseout","mouseover"]);Bn("onPointerEnter",["pointerout","pointerover"]);Bn("onPointerLeave",["pointerout","pointerover"]);pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xf=new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));function Bl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,hp(r,t,void 0,e),e.currentTarget=null}function Yc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],d=l.instance,c=l.currentTarget;if(l=l.listener,d!==o&&a.isPropagationStopped())break e;Bl(a,l,c),o=d}else for(s=0;s<r.length;s++){if(l=r[s],d=l.instance,c=l.currentTarget,l=l.listener,d!==o&&a.isPropagationStopped())break e;Bl(a,l,c),o=d}}}if(ji)throw e=vo,ji=!1,vo=null,e}function q(e,t){var n=t[Eo];n===void 0&&(n=t[Eo]=new Set);var r=e+"__bubble";n.has(r)||(qc(t,e,2,!1),n.add(r))}function Ma(e,t,n){var r=0;t&&(r|=4),qc(n,e,r,t)}var ti="_reactListening"+Math.random().toString(36).slice(2);function Er(e){if(!e[ti]){e[ti]=!0,rc.forEach(function(n){n!=="selectionchange"&&(xf.has(n)||Ma(n,!1,e),Ma(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ti]||(t[ti]=!0,Ma("selectionchange",!1,t))}}function qc(e,t,n,r){switch(Pc(t)){case 1:var a=Tp;break;case 4:a=Ip;break;default:a=hs}n=a.bind(null,t,n,e),a=void 0,!wo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function za(e,t,n,r,a){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(s===4)for(s=r.return;s!==null;){var d=s.tag;if((d===3||d===4)&&(d=s.stateNode.containerInfo,d===a||d.nodeType===8&&d.parentNode===a))return;s=s.return}for(;l!==null;){if(s=tn(l),s===null)return;if(d=s.tag,d===5||d===6){r=o=s;continue e}l=l.parentNode}}r=r.return}vc(function(){var c=o,m=cs(n),p=[];e:{var x=Kc.get(e);if(x!==void 0){var w=gs,y=e;switch(e){case"keypress":if(fi(n)===0)break e;case"keydown":case"keyup":w=Hp;break;case"focusin":y="focus",w=Ea;break;case"focusout":y="blur",w=Ea;break;case"beforeblur":case"afterblur":w=Ea;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Nl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Rp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Yp;break;case Gc:case Qc:case Hc:w=Op;break;case Vc:w=Jp;break;case"scroll":w=Lp;break;case"wheel":w=Zp;break;case"copy":case"cut":case"paste":w=Bp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=El}var b=(t&4)!==0,j=!b&&e==="scroll",f=b?x!==null?x+"Capture":null:x;b=[];for(var u=c,g;u!==null;){g=u;var $=g.stateNode;if(g.tag===5&&$!==null&&(g=$,f!==null&&($=jr(u,f),$!=null&&b.push(Tr(u,$,g)))),j)break;u=u.return}0<b.length&&(x=new w(x,y,null,n,m),p.push({event:x,listeners:b}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",x&&n!==go&&(y=n.relatedTarget||n.fromElement)&&(tn(y)||y[gt]))break e;if((w||x)&&(x=m.window===m?m:(x=m.ownerDocument)?x.defaultView||x.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=c,y=y?tn(y):null,y!==null&&(j=fn(y),y!==j||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=c),w!==y)){if(b=Nl,$="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(b=El,$="onPointerLeave",f="onPointerEnter",u="pointer"),j=w==null?x:kn(w),g=y==null?x:kn(y),x=new b($,u+"leave",w,n,m),x.target=j,x.relatedTarget=g,$=null,tn(m)===c&&(b=new b(f,u+"enter",y,n,m),b.target=g,b.relatedTarget=j,$=b),j=$,w&&y)t:{for(b=w,f=y,u=0,g=b;g;g=xn(g))u++;for(g=0,$=f;$;$=xn($))g++;for(;0<u-g;)b=xn(b),u--;for(;0<g-u;)f=xn(f),g--;for(;u--;){if(b===f||f!==null&&b===f.alternate)break t;b=xn(b),f=xn(f)}b=null}else b=null;w!==null&&Fl(p,x,w,b,!1),y!==null&&j!==null&&Fl(p,j,y,b,!0)}}e:{if(x=c?kn(c):window,w=x.nodeName&&x.nodeName.toLowerCase(),w==="select"||w==="input"&&x.type==="file")var A=sf;else if(Ll(x))if(Bc)A=uf;else{A=df;var E=lf}else(w=x.nodeName)&&w.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(A=cf);if(A&&(A=A(e,c))){Dc(p,A,n,m);break e}E&&E(e,x,c),e==="focusout"&&(E=x._wrapperState)&&E.controlled&&x.type==="number"&&uo(x,"number",x.value)}switch(E=c?kn(c):window,e){case"focusin":(Ll(E)||E.contentEditable==="true")&&(bn=E,jo=c,mr=null);break;case"focusout":mr=jo=bn=null;break;case"mousedown":ko=!0;break;case"contextmenu":case"mouseup":case"dragend":ko=!1,Ol(p,n,m);break;case"selectionchange":if(hf)break;case"keydown":case"keyup":Ol(p,n,m)}var N;if(ws)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else $n?zc(e,n)&&(v="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Mc&&n.locale!=="ko"&&($n||v!=="onCompositionStart"?v==="onCompositionEnd"&&$n&&(N=Rc()):(Ct=m,ms="value"in Ct?Ct.value:Ct.textContent,$n=!0)),E=Ci(c,v),0<E.length&&(v=new Cl(v,e,null,n,m),p.push({event:v,listeners:E}),N?v.data=N:(N=Oc(n),N!==null&&(v.data=N)))),(N=tf?nf(e,n):rf(e,n))&&(c=Ci(c,"onBeforeInput"),0<c.length&&(m=new Cl("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:c}),m.data=N))}Yc(p,t)})}function Tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ci(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=jr(e,n),o!=null&&r.unshift(Tr(e,o,a)),o=jr(e,t),o!=null&&r.push(Tr(e,o,a))),e=e.return}return r}function xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fl(e,t,n,r,a){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,d=l.alternate,c=l.stateNode;if(d!==null&&d===r)break;l.tag===5&&c!==null&&(l=c,a?(d=jr(n,o),d!=null&&s.unshift(Tr(n,d,l))):a||(d=jr(n,o),d!=null&&s.push(Tr(n,d,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var wf=/\r\n?/g,vf=/\u0000|\uFFFD/g;function Ul(e){return(typeof e=="string"?e:""+e).replace(wf,`
`).replace(vf,"")}function ni(e,t,n){if(t=Ul(t),Ul(e)!==t&&n)throw Error(C(425))}function Ei(){}var Ao=null,So=null;function No(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Co=typeof setTimeout=="function"?setTimeout:void 0,yf=typeof clearTimeout=="function"?clearTimeout:void 0,_l=typeof Promise=="function"?Promise:void 0,$f=typeof queueMicrotask=="function"?queueMicrotask:typeof _l<"u"?function(e){return _l.resolve(null).then(e).catch(bf)}:Co;function bf(e){setTimeout(function(){throw e})}function Oa(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Sr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Sr(t)}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yn=Math.random().toString(36).slice(2),st="__reactFiber$"+Yn,Ir="__reactProps$"+Yn,gt="__reactContainer$"+Yn,Eo="__reactEvents$"+Yn,jf="__reactListeners$"+Yn,kf="__reactHandles$"+Yn;function tn(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wl(e);e!==null;){if(n=e[st])return n;e=Wl(e)}return t}e=n,n=e.parentNode}return null}function Wr(e){return e=e[st]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Xi(e){return e[Ir]||null}var To=[],An=-1;function Wt(e){return{current:e}}function J(e){0>An||(e.current=To[An],To[An]=null,An--)}function Y(e,t){An++,To[An]=e.current,e.current=t}var Ut={},je=Wt(Ut),Pe=Wt(!1),sn=Ut;function Fn(e,t){var n=e.type.contextTypes;if(!n)return Ut;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in n)a[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Re(e){return e=e.childContextTypes,e!=null}function Ti(){J(Pe),J(je)}function Gl(e,t,n){if(je.current!==Ut)throw Error(C(168));Y(je,t),Y(Pe,n)}function Jc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(C(108,sp(e)||"Unknown",a));return ne({},n,r)}function Ii(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ut,sn=je.current,Y(je,e),Y(Pe,Pe.current),!0}function Ql(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Jc(e,t,sn),r.__reactInternalMemoizedMergedChildContext=e,J(Pe),J(je),Y(je,e)):J(Pe),Y(Pe,n)}var ut=null,Zi=!1,Da=!1;function Xc(e){ut===null?ut=[e]:ut.push(e)}function Af(e){Zi=!0,Xc(e)}function Gt(){if(!Da&&ut!==null){Da=!0;var e=0,t=K;try{var n=ut;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ut=null,Zi=!1}catch(a){throw ut!==null&&(ut=ut.slice(e+1)),jc(us,Gt),a}finally{K=t,Da=!1}}return null}var Sn=[],Nn=0,Li=null,Pi=0,Ge=[],Qe=0,ln=null,pt=1,ft="";function Zt(e,t){Sn[Nn++]=Pi,Sn[Nn++]=Li,Li=e,Pi=t}function Zc(e,t,n){Ge[Qe++]=pt,Ge[Qe++]=ft,Ge[Qe++]=ln,ln=e;var r=pt;e=ft;var a=32-tt(r)-1;r&=~(1<<a),n+=1;var o=32-tt(t)+a;if(30<o){var s=a-a%5;o=(r&(1<<s)-1).toString(32),r>>=s,a-=s,pt=1<<32-tt(t)+a|n<<a|r,ft=o+e}else pt=1<<o|n<<a|r,ft=e}function ys(e){e.return!==null&&(Zt(e,1),Zc(e,1,0))}function $s(e){for(;e===Li;)Li=Sn[--Nn],Sn[Nn]=null,Pi=Sn[--Nn],Sn[Nn]=null;for(;e===ln;)ln=Ge[--Qe],Ge[Qe]=null,ft=Ge[--Qe],Ge[Qe]=null,pt=Ge[--Qe],Ge[Qe]=null}var Fe=null,Be=null,X=!1,et=null;function eu(e,t){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Fe=e,Be=Rt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Fe=e,Be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ln!==null?{id:pt,overflow:ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Fe=e,Be=null,!0):!1;default:return!1}}function Io(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Lo(e){if(X){var t=Be;if(t){var n=t;if(!Hl(e,t)){if(Io(e))throw Error(C(418));t=Rt(n.nextSibling);var r=Fe;t&&Hl(e,t)?eu(r,n):(e.flags=e.flags&-4097|2,X=!1,Fe=e)}}else{if(Io(e))throw Error(C(418));e.flags=e.flags&-4097|2,X=!1,Fe=e}}}function Vl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function ri(e){if(e!==Fe)return!1;if(!X)return Vl(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!No(e.type,e.memoizedProps)),t&&(t=Be)){if(Io(e))throw tu(),Error(C(418));for(;t;)eu(e,t),t=Rt(t.nextSibling)}if(Vl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Be=Rt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Be=null}}else Be=Fe?Rt(e.stateNode.nextSibling):null;return!0}function tu(){for(var e=Be;e;)e=Rt(e.nextSibling)}function Un(){Be=Fe=null,X=!1}function bs(e){et===null?et=[e]:et.push(e)}var Sf=vt.ReactCurrentBatchConfig;function rr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var a=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=a.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function ii(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Kl(e){var t=e._init;return t(e._payload)}function nu(e){function t(f,u){if(e){var g=f.deletions;g===null?(f.deletions=[u],f.flags|=16):g.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function a(f,u){return f=Dt(f,u),f.index=0,f.sibling=null,f}function o(f,u,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<u?(f.flags|=2,u):g):(f.flags|=2,u)):(f.flags|=1048576,u)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,u,g,$){return u===null||u.tag!==6?(u=Qa(g,f.mode,$),u.return=f,u):(u=a(u,g),u.return=f,u)}function d(f,u,g,$){var A=g.type;return A===yn?m(f,u,g.props.children,$,g.key):u!==null&&(u.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===kt&&Kl(A)===u.type)?($=a(u,g.props),$.ref=rr(f,u,g),$.return=f,$):($=yi(g.type,g.key,g.props,null,f.mode,$),$.ref=rr(f,u,g),$.return=f,$)}function c(f,u,g,$){return u===null||u.tag!==4||u.stateNode.containerInfo!==g.containerInfo||u.stateNode.implementation!==g.implementation?(u=Ha(g,f.mode,$),u.return=f,u):(u=a(u,g.children||[]),u.return=f,u)}function m(f,u,g,$,A){return u===null||u.tag!==7?(u=on(g,f.mode,$,A),u.return=f,u):(u=a(u,g),u.return=f,u)}function p(f,u,g){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Qa(""+u,f.mode,g),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Vr:return g=yi(u.type,u.key,u.props,null,f.mode,g),g.ref=rr(f,null,u),g.return=f,g;case vn:return u=Ha(u,f.mode,g),u.return=f,u;case kt:var $=u._init;return p(f,$(u._payload),g)}if(sr(u)||Xn(u))return u=on(u,f.mode,g,null),u.return=f,u;ii(f,u)}return null}function x(f,u,g,$){var A=u!==null?u.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return A!==null?null:l(f,u,""+g,$);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Vr:return g.key===A?d(f,u,g,$):null;case vn:return g.key===A?c(f,u,g,$):null;case kt:return A=g._init,x(f,u,A(g._payload),$)}if(sr(g)||Xn(g))return A!==null?null:m(f,u,g,$,null);ii(f,g)}return null}function w(f,u,g,$,A){if(typeof $=="string"&&$!==""||typeof $=="number")return f=f.get(g)||null,l(u,f,""+$,A);if(typeof $=="object"&&$!==null){switch($.$$typeof){case Vr:return f=f.get($.key===null?g:$.key)||null,d(u,f,$,A);case vn:return f=f.get($.key===null?g:$.key)||null,c(u,f,$,A);case kt:var E=$._init;return w(f,u,g,E($._payload),A)}if(sr($)||Xn($))return f=f.get(g)||null,m(u,f,$,A,null);ii(u,$)}return null}function y(f,u,g,$){for(var A=null,E=null,N=u,v=u=0,I=null;N!==null&&v<g.length;v++){N.index>v?(I=N,N=null):I=N.sibling;var L=x(f,N,g[v],$);if(L===null){N===null&&(N=I);break}e&&N&&L.alternate===null&&t(f,N),u=o(L,u,v),E===null?A=L:E.sibling=L,E=L,N=I}if(v===g.length)return n(f,N),X&&Zt(f,v),A;if(N===null){for(;v<g.length;v++)N=p(f,g[v],$),N!==null&&(u=o(N,u,v),E===null?A=N:E.sibling=N,E=N);return X&&Zt(f,v),A}for(N=r(f,N);v<g.length;v++)I=w(N,f,v,g[v],$),I!==null&&(e&&I.alternate!==null&&N.delete(I.key===null?v:I.key),u=o(I,u,v),E===null?A=I:E.sibling=I,E=I);return e&&N.forEach(function(W){return t(f,W)}),X&&Zt(f,v),A}function b(f,u,g,$){var A=Xn(g);if(typeof A!="function")throw Error(C(150));if(g=A.call(g),g==null)throw Error(C(151));for(var E=A=null,N=u,v=u=0,I=null,L=g.next();N!==null&&!L.done;v++,L=g.next()){N.index>v?(I=N,N=null):I=N.sibling;var W=x(f,N,L.value,$);if(W===null){N===null&&(N=I);break}e&&N&&W.alternate===null&&t(f,N),u=o(W,u,v),E===null?A=W:E.sibling=W,E=W,N=I}if(L.done)return n(f,N),X&&Zt(f,v),A;if(N===null){for(;!L.done;v++,L=g.next())L=p(f,L.value,$),L!==null&&(u=o(L,u,v),E===null?A=L:E.sibling=L,E=L);return X&&Zt(f,v),A}for(N=r(f,N);!L.done;v++,L=g.next())L=w(N,f,v,L.value,$),L!==null&&(e&&L.alternate!==null&&N.delete(L.key===null?v:L.key),u=o(L,u,v),E===null?A=L:E.sibling=L,E=L);return e&&N.forEach(function(se){return t(f,se)}),X&&Zt(f,v),A}function j(f,u,g,$){if(typeof g=="object"&&g!==null&&g.type===yn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Vr:e:{for(var A=g.key,E=u;E!==null;){if(E.key===A){if(A=g.type,A===yn){if(E.tag===7){n(f,E.sibling),u=a(E,g.props.children),u.return=f,f=u;break e}}else if(E.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===kt&&Kl(A)===E.type){n(f,E.sibling),u=a(E,g.props),u.ref=rr(f,E,g),u.return=f,f=u;break e}n(f,E);break}else t(f,E);E=E.sibling}g.type===yn?(u=on(g.props.children,f.mode,$,g.key),u.return=f,f=u):($=yi(g.type,g.key,g.props,null,f.mode,$),$.ref=rr(f,u,g),$.return=f,f=$)}return s(f);case vn:e:{for(E=g.key;u!==null;){if(u.key===E)if(u.tag===4&&u.stateNode.containerInfo===g.containerInfo&&u.stateNode.implementation===g.implementation){n(f,u.sibling),u=a(u,g.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=Ha(g,f.mode,$),u.return=f,f=u}return s(f);case kt:return E=g._init,j(f,u,E(g._payload),$)}if(sr(g))return y(f,u,g,$);if(Xn(g))return b(f,u,g,$);ii(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,u!==null&&u.tag===6?(n(f,u.sibling),u=a(u,g),u.return=f,f=u):(n(f,u),u=Qa(g,f.mode,$),u.return=f,f=u),s(f)):n(f,u)}return j}var _n=nu(!0),ru=nu(!1),Ri=Wt(null),Mi=null,Cn=null,js=null;function ks(){js=Cn=Mi=null}function As(e){var t=Ri.current;J(Ri),e._currentValue=t}function Po(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zn(e,t){Mi=e,js=Cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Le=!0),e.firstContext=null)}function Ke(e){var t=e._currentValue;if(js!==e)if(e={context:e,memoizedValue:t,next:null},Cn===null){if(Mi===null)throw Error(C(308));Cn=e,Mi.dependencies={lanes:0,firstContext:e}}else Cn=Cn.next=e;return t}var nn=null;function Ss(e){nn===null?nn=[e]:nn.push(e)}function iu(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Ss(t)):(n.next=a.next,a.next=n),t.interleaved=n,xt(e,r)}function xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var At=!1;function Ns(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function au(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,xt(e,n)}return a=r.interleaved,a===null?(t.next=t,Ss(r)):(t.next=a.next,a.next=t),r.interleaved=t,xt(e,n)}function hi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ps(e,n)}}function Yl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?a=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?a=o=t:o=o.next=t}else a=o=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function zi(e,t,n,r){var a=e.updateQueue;At=!1;var o=a.firstBaseUpdate,s=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var d=l,c=d.next;d.next=null,s===null?o=c:s.next=c,s=d;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==s&&(l===null?m.firstBaseUpdate=c:l.next=c,m.lastBaseUpdate=d))}if(o!==null){var p=a.baseState;s=0,m=c=d=null,l=o;do{var x=l.lane,w=l.eventTime;if((r&x)===x){m!==null&&(m=m.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,b=l;switch(x=t,w=n,b.tag){case 1:if(y=b.payload,typeof y=="function"){p=y.call(w,p,x);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,x=typeof y=="function"?y.call(w,p,x):y,x==null)break e;p=ne({},p,x);break e;case 2:At=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,x=a.effects,x===null?a.effects=[l]:x.push(l))}else w={eventTime:w,lane:x,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(c=m=w,d=p):m=m.next=w,s|=x;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;x=l,l=x.next,x.next=null,a.lastBaseUpdate=x,a.shared.pending=null}}while(!0);if(m===null&&(d=p),a.baseState=d,a.firstBaseUpdate=c,a.lastBaseUpdate=m,t=a.shared.interleaved,t!==null){a=t;do s|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);cn|=s,e.lanes=s,e.memoizedState=p}}function ql(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(C(191,a));a.call(r)}}}var Gr={},dt=Wt(Gr),Lr=Wt(Gr),Pr=Wt(Gr);function rn(e){if(e===Gr)throw Error(C(174));return e}function Cs(e,t){switch(Y(Pr,t),Y(Lr,e),Y(dt,Gr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fo(t,e)}J(dt),Y(dt,t)}function Wn(){J(dt),J(Lr),J(Pr)}function ou(e){rn(Pr.current);var t=rn(dt.current),n=fo(t,e.type);t!==n&&(Y(Lr,e),Y(dt,n))}function Es(e){Lr.current===e&&(J(dt),J(Lr))}var ee=Wt(0);function Oi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ba=[];function Ts(){for(var e=0;e<Ba.length;e++)Ba[e]._workInProgressVersionPrimary=null;Ba.length=0}var mi=vt.ReactCurrentDispatcher,Fa=vt.ReactCurrentBatchConfig,dn=0,te=null,ce=null,he=null,Di=!1,gr=!1,Rr=0,Nf=0;function ye(){throw Error(C(321))}function Is(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rt(e[n],t[n]))return!1;return!0}function Ls(e,t,n,r,a,o){if(dn=o,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,mi.current=e===null||e.memoizedState===null?If:Lf,e=n(r,a),gr){o=0;do{if(gr=!1,Rr=0,25<=o)throw Error(C(301));o+=1,he=ce=null,t.updateQueue=null,mi.current=Pf,e=n(r,a)}while(gr)}if(mi.current=Bi,t=ce!==null&&ce.next!==null,dn=0,he=ce=te=null,Di=!1,t)throw Error(C(300));return e}function Ps(){var e=Rr!==0;return Rr=0,e}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?te.memoizedState=he=e:he=he.next=e,he}function Ye(){if(ce===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=he===null?te.memoizedState:he.next;if(t!==null)he=t,ce=e;else{if(e===null)throw Error(C(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},he===null?te.memoizedState=he=e:he=he.next=e}return he}function Mr(e,t){return typeof t=="function"?t(e):t}function Ua(e){var t=Ye(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=ce,a=r.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}r.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,r=r.baseState;var l=s=null,d=null,c=o;do{var m=c.lane;if((dn&m)===m)d!==null&&(d=d.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};d===null?(l=d=p,s=r):d=d.next=p,te.lanes|=m,cn|=m}c=c.next}while(c!==null&&c!==o);d===null?s=r:d.next=l,rt(r,t.memoizedState)||(Le=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do o=a.lane,te.lanes|=o,cn|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _a(e){var t=Ye(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);rt(o,t.memoizedState)||(Le=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function su(){}function lu(e,t){var n=te,r=Ye(),a=t(),o=!rt(r.memoizedState,a);if(o&&(r.memoizedState=a,Le=!0),r=r.queue,Rs(uu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,zr(9,cu.bind(null,n,r,a,t),void 0,null),me===null)throw Error(C(349));dn&30||du(n,t,a)}return a}function du(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cu(e,t,n,r){t.value=n,t.getSnapshot=r,pu(t)&&fu(e)}function uu(e,t,n){return n(function(){pu(t)&&fu(e)})}function pu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rt(e,n)}catch{return!0}}function fu(e){var t=xt(e,1);t!==null&&nt(t,e,1,-1)}function Jl(e){var t=ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mr,lastRenderedState:e},t.queue=e,e=e.dispatch=Tf.bind(null,te,e),[t.memoizedState,e]}function zr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hu(){return Ye().memoizedState}function gi(e,t,n,r){var a=ot();te.flags|=e,a.memoizedState=zr(1|t,n,void 0,r===void 0?null:r)}function ea(e,t,n,r){var a=Ye();r=r===void 0?null:r;var o=void 0;if(ce!==null){var s=ce.memoizedState;if(o=s.destroy,r!==null&&Is(r,s.deps)){a.memoizedState=zr(t,n,o,r);return}}te.flags|=e,a.memoizedState=zr(1|t,n,o,r)}function Xl(e,t){return gi(8390656,8,e,t)}function Rs(e,t){return ea(2048,8,e,t)}function mu(e,t){return ea(4,2,e,t)}function gu(e,t){return ea(4,4,e,t)}function xu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wu(e,t,n){return n=n!=null?n.concat([e]):null,ea(4,4,xu.bind(null,t,e),n)}function Ms(){}function vu(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Is(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function yu(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Is(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function $u(e,t,n){return dn&21?(rt(n,t)||(n=Sc(),te.lanes|=n,cn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Le=!0),e.memoizedState=n)}function Cf(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=Fa.transition;Fa.transition={};try{e(!1),t()}finally{K=n,Fa.transition=r}}function bu(){return Ye().memoizedState}function Ef(e,t,n){var r=Ot(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ju(e))ku(t,n);else if(n=iu(e,t,n,r),n!==null){var a=Ce();nt(n,e,r,a),Au(n,t,r)}}function Tf(e,t,n){var r=Ot(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ju(e))ku(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(a.hasEagerState=!0,a.eagerState=l,rt(l,s)){var d=t.interleaved;d===null?(a.next=a,Ss(t)):(a.next=d.next,d.next=a),t.interleaved=a;return}}catch{}finally{}n=iu(e,t,a,r),n!==null&&(a=Ce(),nt(n,e,r,a),Au(n,t,r))}}function ju(e){var t=e.alternate;return e===te||t!==null&&t===te}function ku(e,t){gr=Di=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Au(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ps(e,n)}}var Bi={readContext:Ke,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},If={readContext:Ke,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:Xl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,gi(4194308,4,xu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gi(4194308,4,e,t)},useInsertionEffect:function(e,t){return gi(4,2,e,t)},useMemo:function(e,t){var n=ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ot();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ef.bind(null,te,e),[r.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:Jl,useDebugValue:Ms,useDeferredValue:function(e){return ot().memoizedState=e},useTransition:function(){var e=Jl(!1),t=e[0];return e=Cf.bind(null,e[1]),ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=te,a=ot();if(X){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),me===null)throw Error(C(349));dn&30||du(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Xl(uu.bind(null,r,o,e),[e]),r.flags|=2048,zr(9,cu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ot(),t=me.identifierPrefix;if(X){var n=ft,r=pt;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Rr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Nf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Lf={readContext:Ke,useCallback:vu,useContext:Ke,useEffect:Rs,useImperativeHandle:wu,useInsertionEffect:mu,useLayoutEffect:gu,useMemo:yu,useReducer:Ua,useRef:hu,useState:function(){return Ua(Mr)},useDebugValue:Ms,useDeferredValue:function(e){var t=Ye();return $u(t,ce.memoizedState,e)},useTransition:function(){var e=Ua(Mr)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:su,useSyncExternalStore:lu,useId:bu,unstable_isNewReconciler:!1},Pf={readContext:Ke,useCallback:vu,useContext:Ke,useEffect:Rs,useImperativeHandle:wu,useInsertionEffect:mu,useLayoutEffect:gu,useMemo:yu,useReducer:_a,useRef:hu,useState:function(){return _a(Mr)},useDebugValue:Ms,useDeferredValue:function(e){var t=Ye();return ce===null?t.memoizedState=e:$u(t,ce.memoizedState,e)},useTransition:function(){var e=_a(Mr)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:su,useSyncExternalStore:lu,useId:bu,unstable_isNewReconciler:!1};function Xe(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ro(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ta={isMounted:function(e){return(e=e._reactInternals)?fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ce(),a=Ot(e),o=ht(r,a);o.payload=t,n!=null&&(o.callback=n),t=Mt(e,o,a),t!==null&&(nt(t,e,a,r),hi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ce(),a=Ot(e),o=ht(r,a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Mt(e,o,a),t!==null&&(nt(t,e,a,r),hi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ce(),r=Ot(e),a=ht(n,r);a.tag=2,t!=null&&(a.callback=t),t=Mt(e,a,r),t!==null&&(nt(t,e,r,n),hi(t,e,r))}};function Zl(e,t,n,r,a,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(a,o):!0}function Su(e,t,n){var r=!1,a=Ut,o=t.contextType;return typeof o=="object"&&o!==null?o=Ke(o):(a=Re(t)?sn:je.current,r=t.contextTypes,o=(r=r!=null)?Fn(e,a):Ut),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ta,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function ed(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ta.enqueueReplaceState(t,t.state,null)}function Mo(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Ns(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=Ke(o):(o=Re(t)?sn:je.current,a.context=Fn(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ro(e,t,o,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ta.enqueueReplaceState(a,a.state,null),zi(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Gn(e,t){try{var n="",r=t;do n+=op(r),r=r.return;while(r);var a=n}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function Wa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function zo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Rf=typeof WeakMap=="function"?WeakMap:Map;function Nu(e,t,n){n=ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ui||(Ui=!0,Ho=r),zo(e,t)},n}function Cu(e,t,n){n=ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){zo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){zo(e,t),typeof r!="function"&&(zt===null?zt=new Set([this]):zt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function td(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rf;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Kf.bind(null,e,t,n),t.then(e,e))}function nd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rd(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ht(-1,1),t.tag=2,Mt(n,t,1))),n.lanes|=1),e)}var Mf=vt.ReactCurrentOwner,Le=!1;function Ne(e,t,n,r){t.child=e===null?ru(t,null,n,r):_n(t,e.child,n,r)}function id(e,t,n,r,a){n=n.render;var o=t.ref;return zn(t,a),r=Ls(e,t,n,r,o,a),n=Ps(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,wt(e,t,a)):(X&&n&&ys(t),t.flags|=1,Ne(e,t,r,a),t.child)}function ad(e,t,n,r,a){if(e===null){var o=n.type;return typeof o=="function"&&!Ws(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Eu(e,t,o,r,a)):(e=yi(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&a)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Cr,n(s,r)&&e.ref===t.ref)return wt(e,t,a)}return t.flags|=1,e=Dt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Eu(e,t,n,r,a){if(e!==null){var o=e.memoizedProps;if(Cr(o,r)&&e.ref===t.ref)if(Le=!1,t.pendingProps=r=o,(e.lanes&a)!==0)e.flags&131072&&(Le=!0);else return t.lanes=e.lanes,wt(e,t,a)}return Oo(e,t,n,r,a)}function Tu(e,t,n){var r=t.pendingProps,a=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Tn,De),De|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(Tn,De),De|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Y(Tn,De),De|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Y(Tn,De),De|=r;return Ne(e,t,a,n),t.child}function Iu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Oo(e,t,n,r,a){var o=Re(n)?sn:je.current;return o=Fn(t,o),zn(t,a),n=Ls(e,t,n,r,o,a),r=Ps(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,wt(e,t,a)):(X&&r&&ys(t),t.flags|=1,Ne(e,t,n,a),t.child)}function od(e,t,n,r,a){if(Re(n)){var o=!0;Ii(t)}else o=!1;if(zn(t,a),t.stateNode===null)xi(e,t),Su(t,n,r),Mo(t,n,r,a),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var d=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ke(c):(c=Re(n)?sn:je.current,c=Fn(t,c));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||d!==c)&&ed(t,s,r,c),At=!1;var x=t.memoizedState;s.state=x,zi(t,r,s,a),d=t.memoizedState,l!==r||x!==d||Pe.current||At?(typeof m=="function"&&(Ro(t,n,m,r),d=t.memoizedState),(l=At||Zl(t,n,l,r,x,d,c))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),s.props=r,s.state=d,s.context=c,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,au(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Xe(t.type,l),s.props=c,p=t.pendingProps,x=s.context,d=n.contextType,typeof d=="object"&&d!==null?d=Ke(d):(d=Re(n)?sn:je.current,d=Fn(t,d));var w=n.getDerivedStateFromProps;(m=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||x!==d)&&ed(t,s,r,d),At=!1,x=t.memoizedState,s.state=x,zi(t,r,s,a);var y=t.memoizedState;l!==p||x!==y||Pe.current||At?(typeof w=="function"&&(Ro(t,n,w,r),y=t.memoizedState),(c=At||Zl(t,n,c,r,x,y,d)||!1)?(m||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,d),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,d)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=d,r=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return Do(e,t,n,r,o,a)}function Do(e,t,n,r,a,o){Iu(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return a&&Ql(t,n,!1),wt(e,t,o);r=t.stateNode,Mf.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=_n(t,e.child,null,o),t.child=_n(t,null,l,o)):Ne(e,t,l,o),t.memoizedState=r.state,a&&Ql(t,n,!0),t.child}function Lu(e){var t=e.stateNode;t.pendingContext?Gl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gl(e,t.context,!1),Cs(e,t.containerInfo)}function sd(e,t,n,r,a){return Un(),bs(a),t.flags|=256,Ne(e,t,n,r),t.child}var Bo={dehydrated:null,treeContext:null,retryLane:0};function Fo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Pu(e,t,n){var r=t.pendingProps,a=ee.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Y(ee,a&1),e===null)return Lo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ia(s,r,0,null),e=on(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Fo(n),t.memoizedState=Bo,e):zs(t,s));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return zf(e,t,s,r,l,a,n);if(o){o=r.fallback,s=t.mode,a=e.child,l=a.sibling;var d={mode:"hidden",children:r.children};return!(s&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Dt(a,d),r.subtreeFlags=a.subtreeFlags&14680064),l!==null?o=Dt(l,o):(o=on(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Fo(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Bo,r}return o=e.child,e=o.sibling,r=Dt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function zs(e,t){return t=ia({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ai(e,t,n,r){return r!==null&&bs(r),_n(t,e.child,null,n),e=zs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zf(e,t,n,r,a,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Wa(Error(C(422))),ai(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,a=t.mode,r=ia({mode:"visible",children:r.children},a,0,null),o=on(o,a,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&_n(t,e.child,null,s),t.child.memoizedState=Fo(s),t.memoizedState=Bo,o);if(!(t.mode&1))return ai(e,t,s,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(C(419)),r=Wa(o,r,void 0),ai(e,t,s,r)}if(l=(s&e.childLanes)!==0,Le||l){if(r=me,r!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|s)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,xt(e,a),nt(r,e,a,-1))}return _s(),r=Wa(Error(C(421))),ai(e,t,s,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Yf.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Be=Rt(a.nextSibling),Fe=t,X=!0,et=null,e!==null&&(Ge[Qe++]=pt,Ge[Qe++]=ft,Ge[Qe++]=ln,pt=e.id,ft=e.overflow,ln=t),t=zs(t,r.children),t.flags|=4096,t)}function ld(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Po(e.return,t,n)}function Ga(e,t,n,r,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function Ru(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(Ne(e,t,r.children,n),r=ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ld(e,n,t);else if(e.tag===19)ld(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(ee,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Oi(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ga(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Oi(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ga(t,!0,n,null,o);break;case"together":Ga(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Of(e,t,n){switch(t.tag){case 3:Lu(t),Un();break;case 5:ou(t);break;case 1:Re(t.type)&&Ii(t);break;case 4:Cs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Y(Ri,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(ee,ee.current&1),t.flags|=128,null):n&t.child.childLanes?Pu(e,t,n):(Y(ee,ee.current&1),e=wt(e,t,n),e!==null?e.sibling:null);Y(ee,ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ru(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Y(ee,ee.current),r)break;return null;case 22:case 23:return t.lanes=0,Tu(e,t,n)}return wt(e,t,n)}var Mu,Uo,zu,Ou;Mu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uo=function(){};zu=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,rn(dt.current);var o=null;switch(n){case"input":a=lo(e,a),r=lo(e,r),o=[];break;case"select":a=ne({},a,{value:void 0}),r=ne({},r,{value:void 0}),o=[];break;case"textarea":a=po(e,a),r=po(e,r),o=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ei)}ho(n,r);var s;n=null;for(c in a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&a[c]!=null)if(c==="style"){var l=a[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($r.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var d=r[c];if(l=a!=null?a[c]:void 0,r.hasOwnProperty(c)&&d!==l&&(d!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||d&&d.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in d)d.hasOwnProperty(s)&&l[s]!==d[s]&&(n||(n={}),n[s]=d[s])}else n||(o||(o=[]),o.push(c,n)),n=d;else c==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,l=l?l.__html:void 0,d!=null&&l!==d&&(o=o||[]).push(c,d)):c==="children"?typeof d!="string"&&typeof d!="number"||(o=o||[]).push(c,""+d):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($r.hasOwnProperty(c)?(d!=null&&c==="onScroll"&&q("scroll",e),o||l===d||(o=[])):(o=o||[]).push(c,d))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Ou=function(e,t,n,r){n!==r&&(t.flags|=4)};function ir(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Df(e,t,n){var r=t.pendingProps;switch($s(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return Re(t.type)&&Ti(),$e(t),null;case 3:return r=t.stateNode,Wn(),J(Pe),J(je),Ts(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ri(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,et!==null&&(Yo(et),et=null))),Uo(e,t),$e(t),null;case 5:Es(t);var a=rn(Pr.current);if(n=t.type,e!==null&&t.stateNode!=null)zu(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return $e(t),null}if(e=rn(dt.current),ri(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[st]=t,r[Ir]=o,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(a=0;a<dr.length;a++)q(dr[a],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":xl(r,o),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},q("invalid",r);break;case"textarea":vl(r,o),q("invalid",r)}ho(n,o),a=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&ni(r.textContent,l,e),a=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ni(r.textContent,l,e),a=["children",""+l]):$r.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&q("scroll",r)}switch(n){case"input":Kr(r),wl(r,o,!0);break;case"textarea":Kr(r),yl(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ei)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[st]=t,e[Ir]=r,Mu(e,t,!1,!1),t.stateNode=e;e:{switch(s=mo(n,r),n){case"dialog":q("cancel",e),q("close",e),a=r;break;case"iframe":case"object":case"embed":q("load",e),a=r;break;case"video":case"audio":for(a=0;a<dr.length;a++)q(dr[a],e);a=r;break;case"source":q("error",e),a=r;break;case"img":case"image":case"link":q("error",e),q("load",e),a=r;break;case"details":q("toggle",e),a=r;break;case"input":xl(e,r),a=lo(e,r),q("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=ne({},r,{value:void 0}),q("invalid",e);break;case"textarea":vl(e,r),a=po(e,r),q("invalid",e);break;default:a=r}ho(n,a),l=a;for(o in l)if(l.hasOwnProperty(o)){var d=l[o];o==="style"?hc(e,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&pc(e,d)):o==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&br(e,d):typeof d=="number"&&br(e,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&($r.hasOwnProperty(o)?d!=null&&o==="onScroll"&&q("scroll",e):d!=null&&os(e,o,d,s))}switch(n){case"input":Kr(e),wl(e,r,!1);break;case"textarea":Kr(e),yl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ft(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ln(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ei)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return $e(t),null;case 6:if(e&&t.stateNode!=null)Ou(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=rn(Pr.current),rn(dt.current),ri(t)){if(r=t.stateNode,n=t.memoizedProps,r[st]=t,(o=r.nodeValue!==n)&&(e=Fe,e!==null))switch(e.tag){case 3:ni(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ni(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[st]=t,t.stateNode=r}return $e(t),null;case 13:if(J(ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Be!==null&&t.mode&1&&!(t.flags&128))tu(),Un(),t.flags|=98560,o=!1;else if(o=ri(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[st]=t}else Un(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;$e(t),o=!1}else et!==null&&(Yo(et),et=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ee.current&1?ue===0&&(ue=3):_s())),t.updateQueue!==null&&(t.flags|=4),$e(t),null);case 4:return Wn(),Uo(e,t),e===null&&Er(t.stateNode.containerInfo),$e(t),null;case 10:return As(t.type._context),$e(t),null;case 17:return Re(t.type)&&Ti(),$e(t),null;case 19:if(J(ee),o=t.memoizedState,o===null)return $e(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)ir(o,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Oi(e),s!==null){for(t.flags|=128,ir(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(ee,ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&ae()>Qn&&(t.flags|=128,r=!0,ir(o,!1),t.lanes=4194304)}else{if(!r)if(e=Oi(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ir(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!X)return $e(t),null}else 2*ae()-o.renderingStartTime>Qn&&n!==1073741824&&(t.flags|=128,r=!0,ir(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ae(),t.sibling=null,n=ee.current,Y(ee,r?n&1|2:n&1),t):($e(t),null);case 22:case 23:return Us(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?De&1073741824&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Bf(e,t){switch($s(t),t.tag){case 1:return Re(t.type)&&Ti(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wn(),J(Pe),J(je),Ts(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Es(t),null;case 13:if(J(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(ee),null;case 4:return Wn(),null;case 10:return As(t.type._context),null;case 22:case 23:return Us(),null;case 24:return null;default:return null}}var oi=!1,be=!1,Ff=typeof WeakSet=="function"?WeakSet:Set,R=null;function En(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function _o(e,t,n){try{n()}catch(r){re(e,t,r)}}var dd=!1;function Uf(e,t){if(Ao=Si,e=_c(),vs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,d=-1,c=0,m=0,p=e,x=null;t:for(;;){for(var w;p!==n||a!==0&&p.nodeType!==3||(l=s+a),p!==o||r!==0&&p.nodeType!==3||(d=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(w=p.firstChild)!==null;)x=p,p=w;for(;;){if(p===e)break t;if(x===n&&++c===a&&(l=s),x===o&&++m===r&&(d=s),(w=p.nextSibling)!==null)break;p=x,x=p.parentNode}p=w}n=l===-1||d===-1?null:{start:l,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(So={focusedElem:e,selectionRange:n},Si=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var b=y.memoizedProps,j=y.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?b:Xe(t.type,b),j);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch($){re(t,t.return,$)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return y=dd,dd=!1,y}function xr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&_o(t,n,o)}a=a.next}while(a!==r)}}function na(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Du(e){var t=e.alternate;t!==null&&(e.alternate=null,Du(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[Ir],delete t[Eo],delete t[jf],delete t[kf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bu(e){return e.tag===5||e.tag===3||e.tag===4}function cd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Go(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ei));else if(r!==4&&(e=e.child,e!==null))for(Go(e,t,n),e=e.sibling;e!==null;)Go(e,t,n),e=e.sibling}function Qo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Qo(e,t,n),e=e.sibling;e!==null;)Qo(e,t,n),e=e.sibling}var xe=null,Ze=!1;function bt(e,t,n){for(n=n.child;n!==null;)Fu(e,t,n),n=n.sibling}function Fu(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Ki,n)}catch{}switch(n.tag){case 5:be||En(n,t);case 6:var r=xe,a=Ze;xe=null,bt(e,t,n),xe=r,Ze=a,xe!==null&&(Ze?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(Ze?(e=xe,n=n.stateNode,e.nodeType===8?Oa(e.parentNode,n):e.nodeType===1&&Oa(e,n),Sr(e)):Oa(xe,n.stateNode));break;case 4:r=xe,a=Ze,xe=n.stateNode.containerInfo,Ze=!0,bt(e,t,n),xe=r,Ze=a;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var o=a,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&_o(n,t,s),a=a.next}while(a!==r)}bt(e,t,n);break;case 1:if(!be&&(En(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){re(n,t,l)}bt(e,t,n);break;case 21:bt(e,t,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,bt(e,t,n),be=r):bt(e,t,n);break;default:bt(e,t,n)}}function ud(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ff),t.forEach(function(r){var a=qf.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:xe=l.stateNode,Ze=!1;break e;case 3:xe=l.stateNode.containerInfo,Ze=!0;break e;case 4:xe=l.stateNode.containerInfo,Ze=!0;break e}l=l.return}if(xe===null)throw Error(C(160));Fu(o,s,a),xe=null,Ze=!1;var d=a.alternate;d!==null&&(d.return=null),a.return=null}catch(c){re(a,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Uu(t,e),t=t.sibling}function Uu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(t,e),at(e),r&4){try{xr(3,e,e.return),na(3,e)}catch(b){re(e,e.return,b)}try{xr(5,e,e.return)}catch(b){re(e,e.return,b)}}break;case 1:qe(t,e),at(e),r&512&&n!==null&&En(n,n.return);break;case 5:if(qe(t,e),at(e),r&512&&n!==null&&En(n,n.return),e.flags&32){var a=e.stateNode;try{br(a,"")}catch(b){re(e,e.return,b)}}if(r&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&dc(a,o),mo(l,s);var c=mo(l,o);for(s=0;s<d.length;s+=2){var m=d[s],p=d[s+1];m==="style"?hc(a,p):m==="dangerouslySetInnerHTML"?pc(a,p):m==="children"?br(a,p):os(a,m,p,c)}switch(l){case"input":co(a,o);break;case"textarea":cc(a,o);break;case"select":var x=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Ln(a,!!o.multiple,w,!1):x!==!!o.multiple&&(o.defaultValue!=null?Ln(a,!!o.multiple,o.defaultValue,!0):Ln(a,!!o.multiple,o.multiple?[]:"",!1))}a[Ir]=o}catch(b){re(e,e.return,b)}}break;case 6:if(qe(t,e),at(e),r&4){if(e.stateNode===null)throw Error(C(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(b){re(e,e.return,b)}}break;case 3:if(qe(t,e),at(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Sr(t.containerInfo)}catch(b){re(e,e.return,b)}break;case 4:qe(t,e),at(e);break;case 13:qe(t,e),at(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(Bs=ae())),r&4&&ud(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(be=(c=be)||m,qe(t,e),be=c):qe(t,e),at(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(R=e,m=e.child;m!==null;){for(p=R=m;R!==null;){switch(x=R,w=x.child,x.tag){case 0:case 11:case 14:case 15:xr(4,x,x.return);break;case 1:En(x,x.return);var y=x.stateNode;if(typeof y.componentWillUnmount=="function"){r=x,n=x.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(b){re(r,n,b)}}break;case 5:En(x,x.return);break;case 22:if(x.memoizedState!==null){fd(p);continue}}w!==null?(w.return=x,R=w):fd(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{a=p.stateNode,c?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,d=p.memoizedProps.style,s=d!=null&&d.hasOwnProperty("display")?d.display:null,l.style.display=fc("display",s))}catch(b){re(e,e.return,b)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(b){re(e,e.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:qe(t,e),at(e),r&4&&ud(e);break;case 21:break;default:qe(t,e),at(e)}}function at(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bu(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(br(a,""),r.flags&=-33);var o=cd(e);Qo(e,o,a);break;case 3:case 4:var s=r.stateNode.containerInfo,l=cd(e);Go(e,l,s);break;default:throw Error(C(161))}}catch(d){re(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _f(e,t,n){R=e,_u(e)}function _u(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var a=R,o=a.child;if(a.tag===22&&r){var s=a.memoizedState!==null||oi;if(!s){var l=a.alternate,d=l!==null&&l.memoizedState!==null||be;l=oi;var c=be;if(oi=s,(be=d)&&!c)for(R=a;R!==null;)s=R,d=s.child,s.tag===22&&s.memoizedState!==null?hd(a):d!==null?(d.return=s,R=d):hd(a);for(;o!==null;)R=o,_u(o),o=o.sibling;R=a,oi=l,be=c}pd(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,R=o):pd(e)}}function pd(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:be||na(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!be)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Xe(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ql(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ql(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Sr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}be||t.flags&512&&Wo(t)}catch(x){re(t,t.return,x)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function fd(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function hd(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{na(4,t)}catch(d){re(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(d){re(t,a,d)}}var o=t.return;try{Wo(t)}catch(d){re(t,o,d)}break;case 5:var s=t.return;try{Wo(t)}catch(d){re(t,s,d)}}}catch(d){re(t,t.return,d)}if(t===e){R=null;break}var l=t.sibling;if(l!==null){l.return=t.return,R=l;break}R=t.return}}var Wf=Math.ceil,Fi=vt.ReactCurrentDispatcher,Os=vt.ReactCurrentOwner,Ve=vt.ReactCurrentBatchConfig,G=0,me=null,de=null,we=0,De=0,Tn=Wt(0),ue=0,Or=null,cn=0,ra=0,Ds=0,wr=null,Ie=null,Bs=0,Qn=1/0,ct=null,Ui=!1,Ho=null,zt=null,si=!1,Et=null,_i=0,vr=0,Vo=null,wi=-1,vi=0;function Ce(){return G&6?ae():wi!==-1?wi:wi=ae()}function Ot(e){return e.mode&1?G&2&&we!==0?we&-we:Sf.transition!==null?(vi===0&&(vi=Sc()),vi):(e=K,e!==0||(e=window.event,e=e===void 0?16:Pc(e.type)),e):1}function nt(e,t,n,r){if(50<vr)throw vr=0,Vo=null,Error(C(185));Ur(e,n,r),(!(G&2)||e!==me)&&(e===me&&(!(G&2)&&(ra|=n),ue===4&&Nt(e,we)),Me(e,r),n===1&&G===0&&!(t.mode&1)&&(Qn=ae()+500,Zi&&Gt()))}function Me(e,t){var n=e.callbackNode;Ap(e,t);var r=Ai(e,e===me?we:0);if(r===0)n!==null&&jl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&jl(n),t===1)e.tag===0?Af(md.bind(null,e)):Xc(md.bind(null,e)),$f(function(){!(G&6)&&Gt()}),n=null;else{switch(Nc(r)){case 1:n=us;break;case 4:n=kc;break;case 16:n=ki;break;case 536870912:n=Ac;break;default:n=ki}n=qu(n,Wu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wu(e,t){if(wi=-1,vi=0,G&6)throw Error(C(327));var n=e.callbackNode;if(On()&&e.callbackNode!==n)return null;var r=Ai(e,e===me?we:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Wi(e,r);else{t=r;var a=G;G|=2;var o=Qu();(me!==e||we!==t)&&(ct=null,Qn=ae()+500,an(e,t));do try{Hf();break}catch(l){Gu(e,l)}while(!0);ks(),Fi.current=o,G=a,de!==null?t=0:(me=null,we=0,t=ue)}if(t!==0){if(t===2&&(a=yo(e),a!==0&&(r=a,t=Ko(e,a))),t===1)throw n=Or,an(e,0),Nt(e,r),Me(e,ae()),n;if(t===6)Nt(e,r);else{if(a=e.current.alternate,!(r&30)&&!Gf(a)&&(t=Wi(e,r),t===2&&(o=yo(e),o!==0&&(r=o,t=Ko(e,o))),t===1))throw n=Or,an(e,0),Nt(e,r),Me(e,ae()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:en(e,Ie,ct);break;case 3:if(Nt(e,r),(r&130023424)===r&&(t=Bs+500-ae(),10<t)){if(Ai(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Ce(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Co(en.bind(null,e,Ie,ct),t);break}en(e,Ie,ct);break;case 4:if(Nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var s=31-tt(r);o=1<<s,s=t[s],s>a&&(a=s),r&=~o}if(r=a,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Wf(r/1960))-r,10<r){e.timeoutHandle=Co(en.bind(null,e,Ie,ct),r);break}en(e,Ie,ct);break;case 5:en(e,Ie,ct);break;default:throw Error(C(329))}}}return Me(e,ae()),e.callbackNode===n?Wu.bind(null,e):null}function Ko(e,t){var n=wr;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=Wi(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&Yo(t)),e}function Yo(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function Gf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!rt(o(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nt(e,t){for(t&=~Ds,t&=~ra,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function md(e){if(G&6)throw Error(C(327));On();var t=Ai(e,0);if(!(t&1))return Me(e,ae()),null;var n=Wi(e,t);if(e.tag!==0&&n===2){var r=yo(e);r!==0&&(t=r,n=Ko(e,r))}if(n===1)throw n=Or,an(e,0),Nt(e,t),Me(e,ae()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,en(e,Ie,ct),Me(e,ae()),null}function Fs(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(Qn=ae()+500,Zi&&Gt())}}function un(e){Et!==null&&Et.tag===0&&!(G&6)&&On();var t=G;G|=1;var n=Ve.transition,r=K;try{if(Ve.transition=null,K=1,e)return e()}finally{K=r,Ve.transition=n,G=t,!(G&6)&&Gt()}}function Us(){De=Tn.current,J(Tn)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,yf(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch($s(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ti();break;case 3:Wn(),J(Pe),J(je),Ts();break;case 5:Es(r);break;case 4:Wn();break;case 13:J(ee);break;case 19:J(ee);break;case 10:As(r.type._context);break;case 22:case 23:Us()}n=n.return}if(me=e,de=e=Dt(e.current,null),we=De=t,ue=0,Or=null,Ds=ra=cn=0,Ie=wr=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=a,r.next=s}n.pending=r}nn=null}return e}function Gu(e,t){do{var n=de;try{if(ks(),mi.current=Bi,Di){for(var r=te.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Di=!1}if(dn=0,he=ce=te=null,gr=!1,Rr=0,Os.current=null,n===null||n.return===null){ue=1,Or=t,de=null;break}e:{var o=e,s=n.return,l=n,d=t;if(t=we,l.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var c=d,m=l,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var x=m.alternate;x?(m.updateQueue=x.updateQueue,m.memoizedState=x.memoizedState,m.lanes=x.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=nd(s);if(w!==null){w.flags&=-257,rd(w,s,l,o,t),w.mode&1&&td(o,c,t),t=w,d=c;var y=t.updateQueue;if(y===null){var b=new Set;b.add(d),t.updateQueue=b}else y.add(d);break e}else{if(!(t&1)){td(o,c,t),_s();break e}d=Error(C(426))}}else if(X&&l.mode&1){var j=nd(s);if(j!==null){!(j.flags&65536)&&(j.flags|=256),rd(j,s,l,o,t),bs(Gn(d,l));break e}}o=d=Gn(d,l),ue!==4&&(ue=2),wr===null?wr=[o]:wr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Nu(o,d,t);Yl(o,f);break e;case 1:l=d;var u=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(zt===null||!zt.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var $=Cu(o,l,t);Yl(o,$);break e}}o=o.return}while(o!==null)}Vu(n)}catch(A){t=A,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function Qu(){var e=Fi.current;return Fi.current=Bi,e===null?Bi:e}function _s(){(ue===0||ue===3||ue===2)&&(ue=4),me===null||!(cn&268435455)&&!(ra&268435455)||Nt(me,we)}function Wi(e,t){var n=G;G|=2;var r=Qu();(me!==e||we!==t)&&(ct=null,an(e,t));do try{Qf();break}catch(a){Gu(e,a)}while(!0);if(ks(),G=n,Fi.current=r,de!==null)throw Error(C(261));return me=null,we=0,ue}function Qf(){for(;de!==null;)Hu(de)}function Hf(){for(;de!==null&&!gp();)Hu(de)}function Hu(e){var t=Yu(e.alternate,e,De);e.memoizedProps=e.pendingProps,t===null?Vu(e):de=t,Os.current=null}function Vu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Bf(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,de=null;return}}else if(n=Df(n,t,De),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);ue===0&&(ue=5)}function en(e,t,n){var r=K,a=Ve.transition;try{Ve.transition=null,K=1,Vf(e,t,n,r)}finally{Ve.transition=a,K=r}return null}function Vf(e,t,n,r){do On();while(Et!==null);if(G&6)throw Error(C(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Sp(e,o),e===me&&(de=me=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||si||(si=!0,qu(ki,function(){return On(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ve.transition,Ve.transition=null;var s=K;K=1;var l=G;G|=4,Os.current=null,Uf(e,n),Uu(n,e),ff(So),Si=!!Ao,So=Ao=null,e.current=n,_f(n),xp(),G=l,K=s,Ve.transition=o}else e.current=n;if(si&&(si=!1,Et=e,_i=a),o=e.pendingLanes,o===0&&(zt=null),yp(n.stateNode),Me(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Ui)throw Ui=!1,e=Ho,Ho=null,e;return _i&1&&e.tag!==0&&On(),o=e.pendingLanes,o&1?e===Vo?vr++:(vr=0,Vo=e):vr=0,Gt(),null}function On(){if(Et!==null){var e=Nc(_i),t=Ve.transition,n=K;try{if(Ve.transition=null,K=16>e?16:e,Et===null)var r=!1;else{if(e=Et,Et=null,_i=0,G&6)throw Error(C(331));var a=G;for(G|=4,R=e.current;R!==null;){var o=R,s=o.child;if(R.flags&16){var l=o.deletions;if(l!==null){for(var d=0;d<l.length;d++){var c=l[d];for(R=c;R!==null;){var m=R;switch(m.tag){case 0:case 11:case 15:xr(8,m,o)}var p=m.child;if(p!==null)p.return=m,R=p;else for(;R!==null;){m=R;var x=m.sibling,w=m.return;if(Du(m),m===c){R=null;break}if(x!==null){x.return=w,R=x;break}R=w}}}var y=o.alternate;if(y!==null){var b=y.child;if(b!==null){y.child=null;do{var j=b.sibling;b.sibling=null,b=j}while(b!==null)}}R=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,R=s;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:xr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,R=f;break e}R=o.return}}var u=e.current;for(R=u;R!==null;){s=R;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,R=g;else e:for(s=u;R!==null;){if(l=R,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:na(9,l)}}catch(A){re(l,l.return,A)}if(l===s){R=null;break e}var $=l.sibling;if($!==null){$.return=l.return,R=$;break e}R=l.return}}if(G=a,Gt(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Ki,e)}catch{}r=!0}return r}finally{K=n,Ve.transition=t}}return!1}function gd(e,t,n){t=Gn(n,t),t=Nu(e,t,1),e=Mt(e,t,1),t=Ce(),e!==null&&(Ur(e,1,t),Me(e,t))}function re(e,t,n){if(e.tag===3)gd(e,e,n);else for(;t!==null;){if(t.tag===3){gd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zt===null||!zt.has(r))){e=Gn(n,e),e=Cu(t,e,1),t=Mt(t,e,1),e=Ce(),t!==null&&(Ur(t,1,e),Me(t,e));break}}t=t.return}}function Kf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ce(),e.pingedLanes|=e.suspendedLanes&n,me===e&&(we&n)===n&&(ue===4||ue===3&&(we&130023424)===we&&500>ae()-Bs?an(e,0):Ds|=n),Me(e,t)}function Ku(e,t){t===0&&(e.mode&1?(t=Jr,Jr<<=1,!(Jr&130023424)&&(Jr=4194304)):t=1);var n=Ce();e=xt(e,t),e!==null&&(Ur(e,t,n),Me(e,n))}function Yf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ku(e,n)}function qf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Ku(e,n)}var Yu;Yu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)Le=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Le=!1,Of(e,t,n);Le=!!(e.flags&131072)}else Le=!1,X&&t.flags&1048576&&Zc(t,Pi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;xi(e,t),e=t.pendingProps;var a=Fn(t,je.current);zn(t,n),a=Ls(null,t,r,e,a,n);var o=Ps();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Re(r)?(o=!0,Ii(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ns(t),a.updater=ta,t.stateNode=a,a._reactInternals=t,Mo(t,r,e,n),t=Do(null,t,r,!0,o,n)):(t.tag=0,X&&o&&ys(t),Ne(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(xi(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=Xf(r),e=Xe(r,e),a){case 0:t=Oo(null,t,r,e,n);break e;case 1:t=od(null,t,r,e,n);break e;case 11:t=id(null,t,r,e,n);break e;case 14:t=ad(null,t,r,Xe(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Xe(r,a),Oo(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Xe(r,a),od(e,t,r,a,n);case 3:e:{if(Lu(t),e===null)throw Error(C(387));r=t.pendingProps,o=t.memoizedState,a=o.element,au(e,t),zi(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Gn(Error(C(423)),t),t=sd(e,t,r,n,a);break e}else if(r!==a){a=Gn(Error(C(424)),t),t=sd(e,t,r,n,a);break e}else for(Be=Rt(t.stateNode.containerInfo.firstChild),Fe=t,X=!0,et=null,n=ru(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Un(),r===a){t=wt(e,t,n);break e}Ne(e,t,r,n)}t=t.child}return t;case 5:return ou(t),e===null&&Lo(t),r=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,s=a.children,No(r,a)?s=null:o!==null&&No(r,o)&&(t.flags|=32),Iu(e,t),Ne(e,t,s,n),t.child;case 6:return e===null&&Lo(t),null;case 13:return Pu(e,t,n);case 4:return Cs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=_n(t,null,r,n):Ne(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Xe(r,a),id(e,t,r,a,n);case 7:return Ne(e,t,t.pendingProps,n),t.child;case 8:return Ne(e,t,t.pendingProps.children,n),t.child;case 12:return Ne(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,Y(Ri,r._currentValue),r._currentValue=s,o!==null)if(rt(o.value,s)){if(o.children===a.children&&!Pe.current){t=wt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var d=l.firstContext;d!==null;){if(d.context===r){if(o.tag===1){d=ht(-1,n&-n),d.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?d.next=d:(d.next=m.next,m.next=d),c.pending=d}}o.lanes|=n,d=o.alternate,d!==null&&(d.lanes|=n),Po(o.return,n,t),l.lanes|=n;break}d=d.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(C(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Po(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ne(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,zn(t,n),a=Ke(a),r=r(a),t.flags|=1,Ne(e,t,r,n),t.child;case 14:return r=t.type,a=Xe(r,t.pendingProps),a=Xe(r.type,a),ad(e,t,r,a,n);case 15:return Eu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Xe(r,a),xi(e,t),t.tag=1,Re(r)?(e=!0,Ii(t)):e=!1,zn(t,n),Su(t,r,a),Mo(t,r,a,n),Do(null,t,r,!0,e,n);case 19:return Ru(e,t,n);case 22:return Tu(e,t,n)}throw Error(C(156,t.tag))};function qu(e,t){return jc(e,t)}function Jf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,n,r){return new Jf(e,t,n,r)}function Ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xf(e){if(typeof e=="function")return Ws(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ls)return 11;if(e===ds)return 14}return 2}function Dt(e,t){var n=e.alternate;return n===null?(n=He(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function yi(e,t,n,r,a,o){var s=2;if(r=e,typeof e=="function")Ws(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case yn:return on(n.children,a,o,t);case ss:s=8,a|=8;break;case io:return e=He(12,n,t,a|2),e.elementType=io,e.lanes=o,e;case ao:return e=He(13,n,t,a),e.elementType=ao,e.lanes=o,e;case oo:return e=He(19,n,t,a),e.elementType=oo,e.lanes=o,e;case oc:return ia(n,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ic:s=10;break e;case ac:s=9;break e;case ls:s=11;break e;case ds:s=14;break e;case kt:s=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=He(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function on(e,t,n,r){return e=He(7,e,r,t),e.lanes=n,e}function ia(e,t,n,r){return e=He(22,e,r,t),e.elementType=oc,e.lanes=n,e.stateNode={isHidden:!1},e}function Qa(e,t,n){return e=He(6,e,null,t),e.lanes=n,e}function Ha(e,t,n){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zf(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sa(0),this.expirationTimes=Sa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sa(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Gs(e,t,n,r,a,o,s,l,d){return e=new Zf(e,t,n,l,d),t===1?(t=1,o===!0&&(t|=8)):t=0,o=He(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ns(o),e}function e1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ju(e){if(!e)return Ut;e=e._reactInternals;e:{if(fn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Re(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Re(n))return Jc(e,n,t)}return t}function Xu(e,t,n,r,a,o,s,l,d){return e=Gs(n,r,!0,e,a,o,s,l,d),e.context=Ju(null),n=e.current,r=Ce(),a=Ot(n),o=ht(r,a),o.callback=t??null,Mt(n,o,a),e.current.lanes=a,Ur(e,a,r),Me(e,r),e}function aa(e,t,n,r){var a=t.current,o=Ce(),s=Ot(a);return n=Ju(n),t.context===null?t.context=n:t.pendingContext=n,t=ht(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Mt(a,t,s),e!==null&&(nt(e,a,s,o),hi(e,a,s)),s}function Gi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qs(e,t){xd(e,t),(e=e.alternate)&&xd(e,t)}function t1(){return null}var Zu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hs(e){this._internalRoot=e}oa.prototype.render=Hs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));aa(e,t,null,null)};oa.prototype.unmount=Hs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;un(function(){aa(null,e,null,null)}),t[gt]=null}};function oa(e){this._internalRoot=e}oa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<St.length&&t!==0&&t<St[n].priority;n++);St.splice(n,0,e),n===0&&Lc(e)}};function Vs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function sa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wd(){}function n1(e,t,n,r,a){if(a){if(typeof r=="function"){var o=r;r=function(){var c=Gi(s);o.call(c)}}var s=Xu(t,r,e,0,null,!1,!1,"",wd);return e._reactRootContainer=s,e[gt]=s.current,Er(e.nodeType===8?e.parentNode:e),un(),s}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var l=r;r=function(){var c=Gi(d);l.call(c)}}var d=Gs(e,0,!1,null,null,!1,!1,"",wd);return e._reactRootContainer=d,e[gt]=d.current,Er(e.nodeType===8?e.parentNode:e),un(function(){aa(t,d,n,r)}),d}function la(e,t,n,r,a){var o=n._reactRootContainer;if(o){var s=o;if(typeof a=="function"){var l=a;a=function(){var d=Gi(s);l.call(d)}}aa(t,s,e,a)}else s=n1(n,t,e,a,r);return Gi(s)}Cc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=lr(t.pendingLanes);n!==0&&(ps(t,n|1),Me(t,ae()),!(G&6)&&(Qn=ae()+500,Gt()))}break;case 13:un(function(){var r=xt(e,1);if(r!==null){var a=Ce();nt(r,e,1,a)}}),Qs(e,1)}};fs=function(e){if(e.tag===13){var t=xt(e,134217728);if(t!==null){var n=Ce();nt(t,e,134217728,n)}Qs(e,134217728)}};Ec=function(e){if(e.tag===13){var t=Ot(e),n=xt(e,t);if(n!==null){var r=Ce();nt(n,e,t,r)}Qs(e,t)}};Tc=function(){return K};Ic=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};xo=function(e,t,n){switch(t){case"input":if(co(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Xi(r);if(!a)throw Error(C(90));lc(r),co(r,a)}}}break;case"textarea":cc(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}};xc=Fs;wc=un;var r1={usingClientEntryPoint:!1,Events:[Wr,kn,Xi,mc,gc,Fs]},ar={findFiberByHostInstance:tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},i1={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$c(e),e===null?null:e.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||t1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!li.isDisabled&&li.supportsFiber)try{Ki=li.inject(i1),lt=li}catch{}}_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r1;_e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vs(t))throw Error(C(200));return e1(e,t,null,n)};_e.createRoot=function(e,t){if(!Vs(e))throw Error(C(299));var n=!1,r="",a=Zu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Gs(e,1,!1,null,null,n,!1,r,a),e[gt]=t.current,Er(e.nodeType===8?e.parentNode:e),new Hs(t)};_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=$c(t),e=e===null?null:e.stateNode,e};_e.flushSync=function(e){return un(e)};_e.hydrate=function(e,t,n){if(!sa(t))throw Error(C(200));return la(null,e,t,!0,n)};_e.hydrateRoot=function(e,t,n){if(!Vs(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,a=!1,o="",s=Zu;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Xu(t,null,e,1,n??null,a,!1,o,s),e[gt]=t.current,Er(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new oa(t)};_e.render=function(e,t,n){if(!sa(t))throw Error(C(200));return la(null,e,t,!1,n)};_e.unmountComponentAtNode=function(e){if(!sa(e))throw Error(C(40));return e._reactRootContainer?(un(function(){la(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};_e.unstable_batchedUpdates=Fs;_e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!sa(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return la(e,t,n,!1,r)};_e.version="18.3.1-next-f1338f8080-20240426";function e0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e0)}catch(e){console.error(e)}}e0(),ec.exports=_e;var a1=ec.exports,vd=a1;no.createRoot=vd.createRoot,no.hydrateRoot=vd.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dr(){return Dr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Dr.apply(this,arguments)}var Tt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Tt||(Tt={}));const yd="popstate";function o1(e){e===void 0&&(e={});function t(a,o){let{pathname:s="/",search:l="",hash:d=""}=hn(a.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),qo("",{pathname:s,search:l,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(a,o){let s=a.document.querySelector("base"),l="";if(s&&s.getAttribute("href")){let d=a.location.href,c=d.indexOf("#");l=c===-1?d:d.slice(0,c)}return l+"#"+(typeof o=="string"?o:Qi(o))}function r(a,o){Ks(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return l1(t,n,r,e)}function oe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ks(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function s1(){return Math.random().toString(36).substr(2,8)}function $d(e,t){return{usr:e.state,key:e.key,idx:t}}function qo(e,t,n,r){return n===void 0&&(n=null),Dr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?hn(t):t,{state:n,key:t&&t.key||r||s1()})}function Qi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function hn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function l1(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:o=!1}=r,s=a.history,l=Tt.Pop,d=null,c=m();c==null&&(c=0,s.replaceState(Dr({},s.state,{idx:c}),""));function m(){return(s.state||{idx:null}).idx}function p(){l=Tt.Pop;let j=m(),f=j==null?null:j-c;c=j,d&&d({action:l,location:b.location,delta:f})}function x(j,f){l=Tt.Push;let u=qo(b.location,j,f);n&&n(u,j),c=m()+1;let g=$d(u,c),$=b.createHref(u);try{s.pushState(g,"",$)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;a.location.assign($)}o&&d&&d({action:l,location:b.location,delta:1})}function w(j,f){l=Tt.Replace;let u=qo(b.location,j,f);n&&n(u,j),c=m();let g=$d(u,c),$=b.createHref(u);s.replaceState(g,"",$),o&&d&&d({action:l,location:b.location,delta:0})}function y(j){let f=a.location.origin!=="null"?a.location.origin:a.location.href,u=typeof j=="string"?j:Qi(j);return u=u.replace(/ $/,"%20"),oe(f,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,f)}let b={get action(){return l},get location(){return e(a,s)},listen(j){if(d)throw new Error("A history only accepts one active listener");return a.addEventListener(yd,p),d=j,()=>{a.removeEventListener(yd,p),d=null}},createHref(j){return t(a,j)},createURL:y,encodeLocation(j){let f=y(j);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:x,replace:w,go(j){return s.go(j)}};return b}var bd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(bd||(bd={}));function d1(e,t,n){return n===void 0&&(n="/"),c1(e,t,n)}function c1(e,t,n,r){let a=typeof t=="string"?hn(t):t,o=Ys(a.pathname||"/",n);if(o==null)return null;let s=t0(e);u1(s);let l=null;for(let d=0;l==null&&d<s.length;++d){let c=j1(o);l=y1(s[d],c)}return l}function t0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(o,s,l)=>{let d={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};d.relativePath.startsWith("/")&&(oe(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let c=Bt([r,d.relativePath]),m=n.concat(d);o.children&&o.children.length>0&&(oe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),t0(o.children,t,m,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:w1(c,o.index),routesMeta:m})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))a(o,s);else for(let d of n0(o.path))a(o,s,d)}),t}function n0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return a?[o,""]:[o];let s=n0(r.join("/")),l=[];return l.push(...s.map(d=>d===""?o:[o,d].join("/"))),a&&l.push(...s),l.map(d=>e.startsWith("/")&&d===""?"/":d)}function u1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:v1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const p1=/^:[\w-]+$/,f1=3,h1=2,m1=1,g1=10,x1=-2,jd=e=>e==="*";function w1(e,t){let n=e.split("/"),r=n.length;return n.some(jd)&&(r+=x1),t&&(r+=h1),n.filter(a=>!jd(a)).reduce((a,o)=>a+(p1.test(o)?f1:o===""?m1:g1),r)}function v1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function y1(e,t,n){let{routesMeta:r}=e,a={},o="/",s=[];for(let l=0;l<r.length;++l){let d=r[l],c=l===r.length-1,m=o==="/"?t:t.slice(o.length)||"/",p=$1({path:d.relativePath,caseSensitive:d.caseSensitive,end:c},m),x=d.route;if(!p)return null;Object.assign(a,p.params),s.push({params:a,pathname:Bt([o,p.pathname]),pathnameBase:N1(Bt([o,p.pathnameBase])),route:x}),p.pathnameBase!=="/"&&(o=Bt([o,p.pathnameBase]))}return s}function $1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=b1(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],s=o.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((c,m,p)=>{let{paramName:x,isOptional:w}=m;if(x==="*"){let b=l[p]||"";s=o.slice(0,o.length-b.length).replace(/(.)\/+$/,"$1")}const y=l[p];return w&&!y?c[x]=void 0:c[x]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:e}}function b1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ks(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,d)=>(r.push({paramName:l,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function j1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ks(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ys(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function k1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?hn(e):e;return{pathname:n?n.startsWith("/")?n:A1(n,t):t,search:C1(r),hash:E1(a)}}function A1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Va(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function S1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function qs(e,t){let n=S1(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Js(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=hn(e):(a=Dr({},e),oe(!a.pathname||!a.pathname.includes("?"),Va("?","pathname","search",a)),oe(!a.pathname||!a.pathname.includes("#"),Va("#","pathname","hash",a)),oe(!a.search||!a.search.includes("#"),Va("#","search","hash",a)));let o=e===""||a.pathname==="",s=o?"/":a.pathname,l;if(s==null)l=n;else{let p=t.length-1;if(!r&&s.startsWith("..")){let x=s.split("/");for(;x[0]==="..";)x.shift(),p-=1;a.pathname=x.join("/")}l=p>=0?t[p]:"/"}let d=k1(a,l),c=s&&s!=="/"&&s.endsWith("/"),m=(o||s===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(c||m)&&(d.pathname+="/"),d}const Bt=e=>e.join("/").replace(/\/\/+/g,"/"),N1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),C1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,E1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function T1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const r0=["post","put","patch","delete"];new Set(r0);const I1=["get",...r0];new Set(I1);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Br(){return Br=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Br.apply(this,arguments)}const Xs=h.createContext(null),L1=h.createContext(null),Qt=h.createContext(null),da=h.createContext(null),Ht=h.createContext({outlet:null,matches:[],isDataRoute:!1}),i0=h.createContext(null);function P1(e,t){let{relative:n}=t===void 0?{}:t;qn()||oe(!1);let{basename:r,navigator:a}=h.useContext(Qt),{hash:o,pathname:s,search:l}=o0(e,{relative:n}),d=s;return r!=="/"&&(d=s==="/"?r:Bt([r,s])),a.createHref({pathname:d,search:l,hash:o})}function qn(){return h.useContext(da)!=null}function mn(){return qn()||oe(!1),h.useContext(da).location}function a0(e){h.useContext(Qt).static||h.useLayoutEffect(e)}function ie(){let{isDataRoute:e}=h.useContext(Ht);return e?H1():R1()}function R1(){qn()||oe(!1);let e=h.useContext(Xs),{basename:t,future:n,navigator:r}=h.useContext(Qt),{matches:a}=h.useContext(Ht),{pathname:o}=mn(),s=JSON.stringify(qs(a,n.v7_relativeSplatPath)),l=h.useRef(!1);return a0(()=>{l.current=!0}),h.useCallback(function(c,m){if(m===void 0&&(m={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=Js(c,JSON.parse(s),o,m.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Bt([t,p.pathname])),(m.replace?r.replace:r.push)(p,m.state,m)},[t,r,s,o,e])}function o0(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=h.useContext(Qt),{matches:a}=h.useContext(Ht),{pathname:o}=mn(),s=JSON.stringify(qs(a,r.v7_relativeSplatPath));return h.useMemo(()=>Js(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function M1(e,t){return z1(e,t)}function z1(e,t,n,r){qn()||oe(!1);let{navigator:a}=h.useContext(Qt),{matches:o}=h.useContext(Ht),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let d=s?s.pathnameBase:"/";s&&s.route;let c=mn(),m;if(t){var p;let j=typeof t=="string"?hn(t):t;d==="/"||(p=j.pathname)!=null&&p.startsWith(d)||oe(!1),m=j}else m=c;let x=m.pathname||"/",w=x;if(d!=="/"){let j=d.replace(/^\//,"").split("/");w="/"+x.replace(/^\//,"").split("/").slice(j.length).join("/")}let y=d1(e,{pathname:w}),b=U1(y&&y.map(j=>Object.assign({},j,{params:Object.assign({},l,j.params),pathname:Bt([d,a.encodeLocation?a.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?d:Bt([d,a.encodeLocation?a.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),o,n,r);return t&&b?h.createElement(da.Provider,{value:{location:Br({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Tt.Pop}},b):b}function O1(){let e=Q1(),t=T1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return h.createElement(h.Fragment,null,h.createElement("h2",null,"Unexpected Application Error!"),h.createElement("h3",{style:{fontStyle:"italic"}},t),n?h.createElement("pre",{style:a},n):null,null)}const D1=h.createElement(O1,null);class B1 extends h.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?h.createElement(Ht.Provider,{value:this.props.routeContext},h.createElement(i0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function F1(e){let{routeContext:t,match:n,children:r}=e,a=h.useContext(Xs);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),h.createElement(Ht.Provider,{value:t},r)}function U1(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(a=n)==null?void 0:a.errors;if(l!=null){let m=s.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);m>=0||oe(!1),s=s.slice(0,Math.min(s.length,m+1))}let d=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<s.length;m++){let p=s[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=m),p.route.id){let{loaderData:x,errors:w}=n,y=p.route.loader&&x[p.route.id]===void 0&&(!w||w[p.route.id]===void 0);if(p.route.lazy||y){d=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((m,p,x)=>{let w,y=!1,b=null,j=null;n&&(w=l&&p.route.id?l[p.route.id]:void 0,b=p.route.errorElement||D1,d&&(c<0&&x===0?(V1("route-fallback"),y=!0,j=null):c===x&&(y=!0,j=p.route.hydrateFallbackElement||null)));let f=t.concat(s.slice(0,x+1)),u=()=>{let g;return w?g=b:y?g=j:p.route.Component?g=h.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=m,h.createElement(F1,{match:p,routeContext:{outlet:m,matches:f,isDataRoute:n!=null},children:g})};return n&&(p.route.ErrorBoundary||p.route.errorElement||x===0)?h.createElement(B1,{location:n.location,revalidation:n.revalidation,component:b,error:w,children:u(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):u()},null)}var s0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(s0||{}),l0=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(l0||{});function _1(e){let t=h.useContext(Xs);return t||oe(!1),t}function W1(e){let t=h.useContext(L1);return t||oe(!1),t}function G1(e){let t=h.useContext(Ht);return t||oe(!1),t}function d0(e){let t=G1(),n=t.matches[t.matches.length-1];return n.route.id||oe(!1),n.route.id}function Q1(){var e;let t=h.useContext(i0),n=W1(),r=d0();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function H1(){let{router:e}=_1(s0.UseNavigateStable),t=d0(l0.UseNavigateStable),n=h.useRef(!1);return a0(()=>{n.current=!0}),h.useCallback(function(a,o){o===void 0&&(o={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Br({fromRouteId:t},o)))},[e,t])}const kd={};function V1(e,t,n){kd[e]||(kd[e]=!0)}function K1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Jo(e){let{to:t,replace:n,state:r,relative:a}=e;qn()||oe(!1);let{future:o,static:s}=h.useContext(Qt),{matches:l}=h.useContext(Ht),{pathname:d}=mn(),c=ie(),m=Js(t,qs(l,o.v7_relativeSplatPath),d,a==="path"),p=JSON.stringify(m);return h.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:a}),[c,p,a,n,r]),null}function Z(e){oe(!1)}function Y1(e){let{basename:t="/",children:n=null,location:r,navigationType:a=Tt.Pop,navigator:o,static:s=!1,future:l}=e;qn()&&oe(!1);let d=t.replace(/^\/*/,"/"),c=h.useMemo(()=>({basename:d,navigator:o,static:s,future:Br({v7_relativeSplatPath:!1},l)}),[d,l,o,s]);typeof r=="string"&&(r=hn(r));let{pathname:m="/",search:p="",hash:x="",state:w=null,key:y="default"}=r,b=h.useMemo(()=>{let j=Ys(m,d);return j==null?null:{location:{pathname:j,search:p,hash:x,state:w,key:y},navigationType:a}},[d,m,p,x,w,y,a]);return b==null?null:h.createElement(Qt.Provider,{value:c},h.createElement(da.Provider,{children:n,value:b}))}function q1(e){let{children:t,location:n}=e;return M1(Xo(t),n)}new Promise(()=>{});function Xo(e,t){t===void 0&&(t=[]);let n=[];return h.Children.forEach(e,(r,a)=>{if(!h.isValidElement(r))return;let o=[...t,a];if(r.type===h.Fragment){n.push.apply(n,Xo(r.props.children,o));return}r.type!==Z&&oe(!1),!r.props.index||!r.props.children||oe(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Xo(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zo(){return Zo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zo.apply(this,arguments)}function J1(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function X1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Z1(e,t){return e.button===0&&(!t||t==="_self")&&!X1(e)}const e2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],t2="6";try{window.__reactRouterVersion=t2}catch{}const n2="startTransition",Ad=V0[n2];function r2(e){let{basename:t,children:n,future:r,window:a}=e,o=h.useRef();o.current==null&&(o.current=o1({window:a,v5Compat:!0}));let s=o.current,[l,d]=h.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},m=h.useCallback(p=>{c&&Ad?Ad(()=>d(p)):d(p)},[d,c]);return h.useLayoutEffect(()=>s.listen(m),[s,m]),h.useEffect(()=>K1(r),[r]),h.createElement(Y1,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const i2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",a2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yr=h.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:o,replace:s,state:l,target:d,to:c,preventScrollReset:m,viewTransition:p}=t,x=J1(t,e2),{basename:w}=h.useContext(Qt),y,b=!1;if(typeof c=="string"&&a2.test(c)&&(y=c,i2))try{let g=new URL(window.location.href),$=c.startsWith("//")?new URL(g.protocol+c):new URL(c),A=Ys($.pathname,w);$.origin===g.origin&&A!=null?c=A+$.search+$.hash:b=!0}catch{}let j=P1(c,{relative:a}),f=o2(c,{replace:s,state:l,target:d,preventScrollReset:m,relative:a,viewTransition:p});function u(g){r&&r(g),g.defaultPrevented||f(g)}return h.createElement("a",Zo({},x,{href:y||j,onClick:b||o?r:u,ref:n,target:d}))});var Sd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Sd||(Sd={}));var Nd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Nd||(Nd={}));function o2(e,t){let{target:n,replace:r,state:a,preventScrollReset:o,relative:s,viewTransition:l}=t===void 0?{}:t,d=ie(),c=mn(),m=o0(e,{relative:s});return h.useCallback(p=>{if(Z1(p,n)){p.preventDefault();let x=r!==void 0?r:Qi(c)===Qi(m);d(e,{replace:x,state:a,preventScrollReset:o,relative:s,viewTransition:l})}},[c,d,m,r,a,n,e,o,s,l])}function ge({open:e,onClose:t}){const[n,r]=h.useState({telegram1:"",telegram2:"",customerService:""});if(h.useEffect(()=>{e&&fetch("https://stacks-admin.onrender.com/service-links.json?ts="+Date.now()).then(s=>s.json()).then(s=>{r({telegram1:s.telegram1||"",telegram2:s.telegram2||"",Signal:s.whatsapp||""})}).catch(()=>{r({telegram1:"",telegram2:"",Signal:""})})},[e]),!e)return null;const a=i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 18 18",style:{marginLeft:"auto"},"aria-hidden":!0,children:i.jsx("path",{d:"M6 4l4 5-4 5",stroke:"#D9D9D9",strokeWidth:"2.4",fill:"none",strokeLinecap:"round"})}),o=i.jsx("img",{src:"/assets/images/Cs.jpg",alt:"service","data-i18n-alt":"service",style:{width:44,height:44,borderRadius:"50%",marginRight:14,objectFit:"cover",background:"transparent",border:"2px solid #D9D9D9",boxShadow:"0 2px 8px rgba(217, 217, 217, 0.12)"}});return i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"fixed",inset:0,zIndex:1199,background:"rgba(0, 0, 0, 0.42)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,backdropFilter:"blur(2px)"},onClick:t,role:"presentation"}),i.jsx("div",{style:{position:"fixed",inset:0,zIndex:1200,display:"flex",alignItems:"center",justifyContent:"center",padding:16,pointerEvents:"none"},children:i.jsxs("div",{style:{background:"#1E1E1E",borderRadius:22,boxShadow:"0 10px 24px rgba(0, 0, 0, 0.35)",minWidth:360,maxWidth:520,width:"100%",padding:0,textAlign:"left",display:"flex",flexDirection:"column",justifyContent:"center",border:"1px solid rgba(217, 217, 217, 0.22)",color:"#F2F2F2",overflow:"hidden",pointerEvents:"auto",animation:"slideUp 0.25s ease-out"},children:[i.jsx("style",{children:`
            @keyframes slideUp {
              from {
                opacity: 0;
                transform: translateY(16px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}),i.jsxs("div",{style:{background:"#D9D9D9",padding:"24px 22px 16px 22px",color:"#111111",borderBottom:"1px solid rgba(17, 17, 17, 0.18)"},children:[i.jsx("div",{style:{fontSize:20,fontWeight:800,letterSpacing:.2},children:"Contact Us"}),i.jsx("div",{style:{fontSize:12,fontWeight:500,marginTop:4,opacity:.8},children:"Connect with our support team"})]}),i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:0,padding:"0"},children:[i.jsxs("button",{onClick:()=>{const s=localStorage.getItem("user");if(!s){alert("Username not found — user must be logged in.");return}const l=`https://signal.me/#eu/Nk_pk-Q1NGoyv4O8omidgk9Th-h57poEijqVtFuylog3mXaCcpRNnLSQx4j3byKc/?user=${encodeURIComponent(s)}`;window.open(l,"_blank"),t()},style:{display:"flex",alignItems:"center",width:"100%",background:"#1E1E1E",border:"none",padding:"16px 22px",cursor:"pointer",opacity:1,fontSize:15,fontWeight:600,color:"#F2F2F2",outline:"none",textAlign:"left",transition:"all 0.2s ease",borderBottom:"1px solid rgba(217, 217, 217, 0.12)"},onMouseEnter:s=>{s.currentTarget.style.background="#262626",s.currentTarget.style.paddingLeft="26px"},onMouseLeave:s=>{s.currentTarget.style.background="#1E1E1E",s.currentTarget.style.paddingLeft="22px"},children:[o,i.jsx("span",{style:{flex:"0 1 auto"},"data-i18n":"Signal",children:"Signal"}),a]}),i.jsxs("button",{onClick:()=>{n.telegram1&&(window.open(n.telegram1,"_blank"),t())},style:{display:"flex",alignItems:"center",width:"100%",background:"#1E1E1E",border:"none",padding:"16px 22px",cursor:n.telegram1?"pointer":"not-allowed",opacity:n.telegram1?1:.45,fontSize:15,fontWeight:600,color:"#F2F2F2",borderBottom:"1px solid rgba(217, 217, 217, 0.12)",outline:"none",textAlign:"left",transition:"all 0.2s ease"},onMouseEnter:s=>{n.telegram1&&(s.currentTarget.style.background="#262626",s.currentTarget.style.paddingLeft="26px")},onMouseLeave:s=>{s.currentTarget.style.background="#1E1E1E",s.currentTarget.style.paddingLeft="22px"},disabled:!n.telegram1,children:[o,i.jsx("span",{style:{flex:"0 1 auto"},"data-i18n":"Whatsapp",children:"Whatsapp"}),a]}),i.jsxs("button",{onClick:()=>{n.telegram2&&(window.open(n.telegram2,"_blank"),t())},style:{display:"flex",alignItems:"center",width:"100%",background:"#1E1E1E",border:"none",padding:"16px 22px",cursor:n.telegram2?"pointer":"not-allowed",opacity:n.telegram2?1:.45,fontSize:15,fontWeight:600,color:"#F2F2F2",outline:"none",textAlign:"left",transition:"all 0.2s ease"},onMouseEnter:s=>{n.telegram2&&(s.currentTarget.style.background="#262626",s.currentTarget.style.paddingLeft="26px")},onMouseLeave:s=>{s.currentTarget.style.background="#1E1E1E",s.currentTarget.style.paddingLeft="22px"},disabled:!n.telegram2,children:[o,i.jsx("span",{style:{flex:"0 1 auto"},"data-i18n":"Telegram",children:"Telegram"}),a]})]}),i.jsx("div",{style:{textAlign:"center",padding:"18px 22px 20px 22px",borderTop:"1px solid rgba(217, 217, 217, 0.12)",background:"#181818"},children:i.jsx("button",{onClick:t,style:{background:"transparent",border:"1px solid #D9D9D9",color:"#D9D9D9",fontSize:13,fontWeight:700,cursor:"pointer",letterSpacing:.4,outline:"none",transition:"all 0.2s ease",padding:"10px 26px",borderRadius:8},onMouseEnter:s=>{s.currentTarget.style.background="rgba(217, 217, 217, 0.08)",s.currentTarget.style.boxShadow="0 2px 10px rgba(217, 217, 217, 0.12)"},onMouseLeave:s=>{s.currentTarget.style.background="transparent",s.currentTarget.style.boxShadow="none"},children:i.jsx("span",{"data-i18n":"Cancel",children:"Cancel"})})})]})})]})}const pe="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1741'%20height='621'%20viewBox='116%20102%201741%20621'%3e%3ctitle%3eDEPT%20Logo%3c/title%3e%3cg%20fill='%23000000'%20fill-rule='evenodd'%3e%3cpath%20d='M%201806%20513%20Z'/%3e%3cpath%20d='M%201803%20486%20L%201790%20491%20L%201780%20500%20L%201774%20512%20L%201773%20526%20L%201778%20541%20L%201787%20551%20L%201795%20556%20L%201802%20558%20L%201817%20558%20L%201832%20551%20L%201842%20540%20L%201846%20530%20L%201846%20514%20L%201840%20501%20L%201835%20495%20L%201828%20490%20L%201817%20486%20Z%20M%201792%20543%20L%201793%20542%20L%201804%20542%20L%201804%20528%20L%201805%20527%20L%201810%20528%20L%201818%20542%20L%201826%20542%20L%201827%20543%20L%201820%20548%20L%201811%20550%20L%201799%20548%20Z%20M%201804%20518%20L%201804%20512%20L%201805%20511%20L%201815%20511%20L%201817%20515%20L%201814%20519%20L%201807%20519%20L%201806%20518%20L%201805%20519%20Z%20M%201792%20501%20L%201793%20502%20L%201793%20515%20L%201794%20516%20L%201794%20534%20L%201792%20543%20L%201790%20541%20L%201791%20540%20L%201790%20541%20L%201785%20535%20L%201782%20526%20L%201783%20514%20L%201787%20506%20L%201790%20503%20L%201791%20505%20L%201790%20503%20Z%20M%201794%20499%20L%201796%20500%20L%201795%20499%20L%201800%20496%20L%201812%20494%20L%201824%20498%20L%201832%20505%20L%201837%20516%20L%201837%20528%20L%201833%20537%20L%201830%20540%20L%201828%20539%20L%201823%20529%20L%201820%20526%20L%201827%20519%20L%201827%20510%20L%201826%20508%20L%201820%20503%20L%201816%20502%20L%201793%20502%20L%201792%20501%20Z'/%3e%3cpath%20d='M%20529%20416%20Z'/%3e%3cpath%20d='M%201651%20345%20Z'/%3e%3cpath%20d='M%201575%20279%20L%201574%20342%20L%201653%20344%20L%201653%20553%20L%201740%20553%20L%201740%20344%20L%201831%20343%20L%201831%20279%20Z'/%3e%3cpath%20d='M%201515%20291%20L%201487%20282%20L%201465%20279%20L%201310%20280%20L%201310%20553%20L%201396%20553%20L%201397%20474%20L%201467%20474%20L%201499%20468%20L%201523%20458%20L%201535%20450%20L%201550%20435%20L%201562%20416%20L%201568%20397%20L%201570%20384%20L%201568%20356%20L%201563%20339%20L%201552%20320%20L%201540%20307%20Z%20M%201396%20343%20L%201397%20342%20L%201449%20342%20L%201458%20344%20L%201466%20348%20L%201474%20355%20L%201480%20367%20L%201480%20385%20L%201477%20393%20L%201467%20404%20L%201456%20409%20L%201451%20410%20L%201397%20410%20L%201396%20409%20Z'/%3e%3cpath%20d='M%201063%20279%20L%201062%20552%20L%201291%20553%20L%201291%20491%20L%201147%20490%20L%201148%20444%20L%201276%20444%20L%201275%20383%20L%201148%20383%20L%201147%20342%20L%201284%20341%20L%201284%20279%20Z'/%3e%3cpath%20d='M%20770%20280%20L%20771%20553%20L%20914%20553%20L%20940%20550%20L%20969%20542%20L%20991%20531%20L%201004%20522%20L%201022%20504%20L%201034%20486%20L%201045%20459%20L%201050%20432%20L%201050%20400%20L%201047%20380%20L%201039%20355%20L%201028%20335%20L%201006%20311%20L%20992%20301%20L%20970%20290%20L%20933%20281%20L%20909%20279%20Z%20M%20857%20344%20L%20908%20344%20L%20918%20346%20L%20926%20349%20L%20938%20356%20L%20948%20366%20L%20956%20380%20L%20961%20399%20L%20961%20408%20L%20962%20409%20L%20961%20432%20L%20956%20451%20L%20951%20461%20L%20937%20476%20L%20931%20480%20L%20916%20486%20L%20905%20487%20L%20904%20488%20L%20857%20488%20L%20856%20487%20L%20856%20480%20L%20855%20479%20L%20856%20474%20L%20856%20431%20L%20855%20430%20L%20856%20426%20L%20855%20415%20L%20856%20414%20L%20856%20372%20L%20855%20371%20L%20855%20354%20Z'/%3e%3cpath%20d='M%20496%20112%20L%20440%20248%20L%20433%20281%20L%20436%20320%20L%20459%20367%20L%20494%20399%20L%20535%20416%20L%20497%20431%20L%20466%20456%20L%20443%20492%20L%20435%20519%20L%20437%20572%20L%20490%20712%20L%20574%20680%20L%20518%20525%20L%20654%20625%20L%20704%20558%20L%20569%20458%20L%20729%20456%20L%20729%20380%20L%20572%20378%20L%20709%20279%20L%20655%20205%20L%20516%20305%20L%20579%20143%20Z%20M%20515%20525%20L%20516%20524%20L%20517%20526%20L%20516%20527%20Z'/%3e%3cpath%20d='M%20363%20112%20L%20277%20142%20L%20335%20308%20L%20197%20207%20L%20142%20280%20L%20279%20380%20L%20126%20381%20L%20126%20458%20L%20276%20460%20L%20145%20558%20L%20193%20626%20L%20336%20524%20L%20276%20680%20L%20359%20712%20L%20413%20576%20L%20417%20521%20L%20409%20493%20L%20385%20456%20L%20353%20431%20L%20317%20417%20L%20353%20402%20L%20386%20375%20L%20410%20337%20L%20420%20296%20L%20415%20253%20Z%20M%20335%20523%20L%20336%20522%20L%20337%20523%20L%20336%20524%20Z'/%3e%3c/g%3e%3c/svg%3e",s2="https://stacks-admin.onrender.com",c0=h.createContext({profile:null,fetchProfile:async()=>null,setProfile:()=>{},isLoading:!1});async function u0(e,t=3e3,n=1){if(!e)return null;const r=new AbortController,a=setTimeout(()=>r.abort(),t);try{const o={"Content-Type":"application/json","X-Auth-Token":e,Authorization:`Bearer ${e}`},s=await fetch(`${s2}/api/user-profile`,{method:"GET",headers:o,signal:r.signal,cache:"no-store"});if(clearTimeout(a),s.status===401||s.status===403){try{localStorage.removeItem("authToken"),localStorage.removeItem("token"),localStorage.removeItem("userProfile"),localStorage.removeItem("currentUser"),window.dispatchEvent(new Event("auth:logout"))}catch{}return null}if(!s.ok)throw new Error(`Non-OK response: ${s.status}`);const l=await s.json();return l&&l.success&&l.user?l.user:null}catch{return clearTimeout(a),n<2?(await new Promise(s=>setTimeout(s,250)),u0(e,Math.min(t*1.5,5e3),n+1)):null}}function l2({children:e}){const[t,n]=h.useState(()=>{try{const m=localStorage.getItem("userProfile")||localStorage.getItem("currentUser");if(m)return JSON.parse(m)}catch{}return null}),[r,a]=h.useState(!1),o=h.useRef(!0),s=h.useRef(null);h.useEffect(()=>(o.current=!0,()=>{o.current=!1,s.current&&(clearTimeout(s.current),s.current=null)}),[]),h.useEffect(()=>{try{t?(localStorage.setItem("userProfile",JSON.stringify(t)),localStorage.setItem("currentUser",JSON.stringify(t)),localStorage.setItem("profileFetchedAt",String(Date.now()))):localStorage.removeItem("userProfile")}catch{}},[t]),h.useEffect(()=>{function m(x){try{const w=x==null?void 0:x.detail;if(w&&typeof w=="object")o.current&&n(w);else{const y=localStorage.getItem("userProfile")||localStorage.getItem("currentUser");y&&o.current&&n(JSON.parse(y))}}catch{}}function p(x){if(x){if(x.key==="userProfile"||x.key==="currentUser")try{const w=x.newValue;if(w){const y=JSON.parse(w);o.current&&n(y)}else o.current&&n(null)}catch{}x.key==="authToken"&&!x.newValue&&o.current&&n(null)}}return window.addEventListener("profile:updated",m),window.addEventListener("storage",p),()=>{window.removeEventListener("profile:updated",m),window.removeEventListener("storage",p)}},[]);const l=async(m=null,p=3e3)=>{const x=m||localStorage.getItem("authToken")||localStorage.getItem("token");if(!x)return o.current&&n(null),null;a(!0);try{const w=await u0(x,p);if(w&&o.current){n(w);try{window.dispatchEvent(new CustomEvent("profile:updated",{detail:w}))}catch{}}return w}finally{setTimeout(()=>{o.current&&a(!1)},80)}},d=m=>{if(o.current){n(m);try{m?(localStorage.setItem("userProfile",JSON.stringify(m)),localStorage.setItem("currentUser",JSON.stringify(m)),localStorage.setItem("profileFetchedAt",String(Date.now())),window.dispatchEvent(new CustomEvent("profile:updated",{detail:m}))):(localStorage.removeItem("userProfile"),localStorage.removeItem("currentUser"))}catch{}}};h.useEffect(()=>{function m(w=250){s.current&&clearTimeout(s.current),s.current=setTimeout(async()=>{s.current=null;try{await l(null,3e3)}catch{}},w)}const p=()=>m(200),x=()=>m(0);return window.addEventListener("balance:changed",p),window.addEventListener("profile:refresh",x),()=>{window.removeEventListener("balance:changed",p),window.removeEventListener("profile:refresh",x),s.current&&(clearTimeout(s.current),s.current=null)}},[]),h.useEffect(()=>{const m=localStorage.getItem("authToken")||localStorage.getItem("token");m&&(async()=>{try{await l(m,3e3)}catch{}})()},[]);const c={profile:t,fetchProfile:l,setProfile:d,isLoading:r};return i.jsx(c0.Provider,{value:c,children:e})}function Qr(){return h.useContext(c0)}function d2({message:e,onDone:t,duration:n=1e3}){return h.useEffect(()=>{const r=setTimeout(()=>{t&&t()},n);return()=>clearTimeout(r)},[t,n]),i.jsx("div",{className:"login-message-overlay",children:i.jsx("div",{className:"login-message",children:e})})}function c2({duration:e=500,onDone:t}){return h.useEffect(()=>{const n=setTimeout(()=>{t&&t()},e);return()=>clearTimeout(n)},[t,e]),i.jsx("div",{className:"login-spinner-overlay",children:i.jsx("div",{className:"login-spinner"})})}const u2="https://stacks-admin.onrender.com";function p2({refreshRecords:e}){const[t,n]=h.useState(""),[r,a]=h.useState(""),[o,s]=h.useState(""),[l,d]=h.useState(!1),[c,m]=h.useState(!1),[p,x]=h.useState(!1),w=ie(),{fetchProfile:y}=Qr(),b=async j=>{var f;j.preventDefault();try{const g=await(await fetch(`${u2}/api/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:t.trim(),password:r.trim()})})).json();if(g.success){const $=g.token||g.user&&(g.user.token||((f=g.user)==null?void 0:f.token))||null;if($){try{localStorage.setItem("authToken",$)}catch{}try{localStorage.setItem("token",$)}catch{}}if(g.user){try{localStorage.setItem("currentUser",JSON.stringify(g.user))}catch{}try{localStorage.setItem("user",g.user.username||"")}catch{}}try{typeof y=="function"&&await y()}catch(A){console.warn("Post-login fetchProfile failed:",A)}try{window.dispatchEvent(new Event("auth:login"))}catch{}try{window.dispatchEvent(new Event("profile:refresh"))}catch{}if(typeof e=="function")try{await e()}catch{}s("Login Success")}else s(g.message||"Login failed!")}catch(u){console.error("Login failed:",u),s("Server error. Please try again later.")}};return h.useEffect(()=>{if(o==="Login Success"){const j=setTimeout(()=>{s(""),d(!0)},1e3);return()=>clearTimeout(j)}if(o&&o!=="Login Success"){const j=setTimeout(()=>s(""),1e3);return()=>clearTimeout(j)}},[o]),h.useEffect(()=>{if(l){const j=setTimeout(()=>{d(!1),w("/dashboard")},500);return()=>clearTimeout(j)}},[l,w]),i.jsxs("div",{className:"login-page",children:[o&&i.jsx(d2,{message:o}),l&&i.jsx(c2,{}),i.jsxs("main",{className:"login-container",children:[i.jsx("div",{className:"login-logo-wrapper",children:i.jsx("img",{src:pe,alt:"DEPT",className:"login-logo"})}),i.jsx("h1",{className:"login-welcome",children:"WELCOME TO"}),i.jsx("h2",{className:"login-heading",children:"LOGIN TO CONTINUE"}),i.jsxs("form",{onSubmit:b,className:"login-form",children:[i.jsx("div",{className:"login-field",children:i.jsx("input",{name:"username",type:"text",placeholder:"Username/Phone",value:t,onChange:j=>n(j.target.value),required:!0,autoComplete:"username"})}),i.jsxs("div",{className:"login-field login-password-field",children:[i.jsx("input",{name:"password",type:c?"text":"password",placeholder:"Password",value:r,onChange:j=>a(j.target.value),required:!0,autoComplete:"current-password"}),i.jsx("button",{type:"button",className:"password-toggle",onClick:()=>m(j=>!j),"aria-label":c?"Hide password":"Show password",children:i.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[i.jsx("path",{d:"M1.7 12s3.4-7 10.3-7 10.3 7 10.3 7-3.4 7-10.3 7S1.7 12 1.7 12Z"}),i.jsx("circle",{cx:"12",cy:"12",r:"3.1"})]})})]}),i.jsxs("div",{className:"login-options",children:[i.jsxs("label",{className:"remember-password",children:[i.jsx("input",{type:"checkbox"}),i.jsx("span",{className:"custom-checkbox"}),i.jsx("span",{children:"Remember Password"})]}),i.jsx(yr,{to:"/forgot-password",className:"forgot-password",children:"Forgot your password?"})]}),i.jsx("button",{type:"submit",className:"login-button",children:"Login"})]}),i.jsxs("p",{className:"signup-text",children:["Don't have an account yet?"," ",i.jsx(yr,{to:"/register",children:"Sign Up"})]}),i.jsxs("p",{className:"support-text",children:["Can't sign in?"," ",i.jsx("button",{type:"button",onClick:()=>x(!0),children:"Contact our user support"})]})]}),i.jsx(ge,{open:p,onClose:()=>x(!1)})]})}const f2={version:4,country_calling_codes:{1:["US","AG","AI","AS","BB","BM","BS","CA","DM","DO","GD","GU","JM","KN","KY","LC","MP","MS","PR","SX","TC","TT","VC","VG","VI"],7:["RU","KZ"],20:["EG"],27:["ZA"],30:["GR"],31:["NL"],32:["BE"],33:["FR"],34:["ES"],36:["HU"],39:["IT","VA"],40:["RO"],41:["CH"],43:["AT"],44:["GB","GG","IM","JE"],45:["DK"],46:["SE"],47:["NO","SJ"],48:["PL"],49:["DE"],51:["PE"],52:["MX"],53:["CU"],54:["AR"],55:["BR"],56:["CL"],57:["CO"],58:["VE"],60:["MY"],61:["AU","CC","CX"],62:["ID"],63:["PH"],64:["NZ"],65:["SG"],66:["TH"],81:["JP"],82:["KR"],84:["VN"],86:["CN"],90:["TR"],91:["IN"],92:["PK"],93:["AF"],94:["LK"],95:["MM"],98:["IR"],211:["SS"],212:["MA","EH"],213:["DZ"],216:["TN"],218:["LY"],220:["GM"],221:["SN"],222:["MR"],223:["ML"],224:["GN"],225:["CI"],226:["BF"],227:["NE"],228:["TG"],229:["BJ"],230:["MU"],231:["LR"],232:["SL"],233:["GH"],234:["NG"],235:["TD"],236:["CF"],237:["CM"],238:["CV"],239:["ST"],240:["GQ"],241:["GA"],242:["CG"],243:["CD"],244:["AO"],245:["GW"],246:["IO"],247:["AC"],248:["SC"],249:["SD"],250:["RW"],251:["ET"],252:["SO"],253:["DJ"],254:["KE"],255:["TZ"],256:["UG"],257:["BI"],258:["MZ"],260:["ZM"],261:["MG"],262:["RE","YT"],263:["ZW"],264:["NA"],265:["MW"],266:["LS"],267:["BW"],268:["SZ"],269:["KM"],290:["SH","TA"],291:["ER"],297:["AW"],298:["FO"],299:["GL"],350:["GI"],351:["PT"],352:["LU"],353:["IE"],354:["IS"],355:["AL"],356:["MT"],357:["CY"],358:["FI","AX"],359:["BG"],370:["LT"],371:["LV"],372:["EE"],373:["MD"],374:["AM"],375:["BY"],376:["AD"],377:["MC"],378:["SM"],380:["UA"],381:["RS"],382:["ME"],383:["XK"],385:["HR"],386:["SI"],387:["BA"],389:["MK"],420:["CZ"],421:["SK"],423:["LI"],500:["FK"],501:["BZ"],502:["GT"],503:["SV"],504:["HN"],505:["NI"],506:["CR"],507:["PA"],508:["PM"],509:["HT"],590:["GP","BL","MF"],591:["BO"],592:["GY"],593:["EC"],594:["GF"],595:["PY"],596:["MQ"],597:["SR"],598:["UY"],599:["CW","BQ"],670:["TL"],672:["NF"],673:["BN"],674:["NR"],675:["PG"],676:["TO"],677:["SB"],678:["VU"],679:["FJ"],680:["PW"],681:["WF"],682:["CK"],683:["NU"],685:["WS"],686:["KI"],687:["NC"],688:["TV"],689:["PF"],690:["TK"],691:["FM"],692:["MH"],850:["KP"],852:["HK"],853:["MO"],855:["KH"],856:["LA"],880:["BD"],886:["TW"],960:["MV"],961:["LB"],962:["JO"],963:["SY"],964:["IQ"],965:["KW"],966:["SA"],967:["YE"],968:["OM"],970:["PS"],971:["AE"],972:["IL"],973:["BH"],974:["QA"],975:["BT"],976:["MN"],977:["NP"],992:["TJ"],993:["TM"],994:["AZ"],995:["GE"],996:["KG"],998:["UZ"]},countries:{AC:["247","00","(?:[01589]\\d|[2-467])\\d{4}",[5,6]],AD:["376","00","(?:1|6\\d)\\d{7}|[135-9]\\d{5}",[6,8,9],[["(\\d{3})(\\d{3})","$1 $2",["[135-9]"]],["(\\d{4})(\\d{4})","$1 $2",["1"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]]],AE:["971","00","(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",[5,6,7,8,9,10,11,12],[["(\\d{3})(\\d{2,9})","$1 $2",["60|8"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[236]|[479][2-8]"],"0$1"],["(\\d{3})(\\d)(\\d{5})","$1 $2 $3",["[479]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"]],"0"],AF:["93","00","[2-7]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"]],"0"],AG:["1","011","(?:268|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([457]\\d{6})$|1","268$1",0,"268"],AI:["1","011","(?:264|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2457]\\d{6})$|1","264$1",0,"264"],AL:["355","00","(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",[6,7,8,9],[["(\\d{3})(\\d{3,4})","$1 $2",["80|9"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["4[2-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2358][2-5]|4"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["[23578]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["6"],"0$1"]],"0"],AM:["374","00","(?:[1-489]\\d|55|60|77)\\d{6}",[8],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[89]0"],"0 $1"],["(\\d{3})(\\d{5})","$1 $2",["2|3[12]"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["1|47"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["[3-9]"],"0$1"]],"0"],AO:["244","00","[29]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[29]"]]]],AR:["54","00","(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}",[10,11],[["(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])","2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["1"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["[23]"],"0$1",1],["(\\d)(\\d{4})(\\d{2})(\\d{4})","$2 15-$3-$4",["9(?:2[2-469]|3[3-578])","9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))","9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",0,"$1 $2 $3-$4"],["(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 15-$3-$4",["91"],"0$1",0,"$1 $2 $3-$4"],["(\\d{3})(\\d{3})(\\d{5})","$1-$2-$3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 15-$3-$4",["9"],"0$1",0,"$1 $2 $3-$4"]],"0",0,"0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?","9$1"],AS:["1","011","(?:[58]\\d\\d|684|900)\\d{7}",[10],0,"1",0,"([267]\\d{6})$|1","684$1",0,"684"],AT:["43","00","1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",[4,5,6,7,8,9,10,11,12,13],[["(\\d)(\\d{3,12})","$1 $2",["1(?:11|[2-9])"],"0$1"],["(\\d{3})(\\d{2})","$1 $2",["517"],"0$1"],["(\\d{2})(\\d{3,5})","$1 $2",["5[079]"],"0$1"],["(\\d{3})(\\d{3,10})","$1 $2",["(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]","(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89]"],"0$1"],["(\\d{4})(\\d{3,9})","$1 $2",["[2-467]|5[2-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["5"],"0$1"],["(\\d{2})(\\d{4})(\\d{4,7})","$1 $2 $3",["5"],"0$1"]],"0"],AU:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",[5,6,7,8,9,10,12],[["(\\d{2})(\\d{3,4})","$1 $2",["16"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["14|4"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[2378]"],"(0$1)"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:30|[89])"]]],"0",0,"(183[12])|0",0,0,0,[["(?:(?:241|349)0\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|[34]\\d\\d)|91(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79]))))\\d{3}|(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8])|8(?:55|6[0-8]|[78]\\d|9[02-9]))\\d{6}",[9]],["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,["163\\d{2,6}",[5,6,7,8,9]],["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],AW:["297","00","(?:[25-79]\\d\\d|800)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[25-9]"]]]],AX:["358","00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",[5,6,7,8,9,10,11,12],0,"0",0,0,0,0,"18",0,"00"],AZ:["994","00","365\\d{6}|(?:[124579]\\d|60|88)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["90"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[28]|2|365|46","1[28]|2|365[45]|46","1[28]|2|365(?:4|5[02])|46"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[13-9]"],"0$1"]],"0"],BA:["387","00","6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["6[1-3]|[7-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2-$3",["[3-5]|6[56]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["6"],"0$1"]],"0"],BB:["1","011","(?:246|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","246$1",0,"246"],BD:["880","00","[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}",[6,7,8,9,10],[["(\\d{2})(\\d{4,6})","$1-$2",["31[5-8]|[459]1"],"0$1"],["(\\d{3})(\\d{3,7})","$1-$2",["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"],"0$1"],["(\\d{4})(\\d{3,6})","$1-$2",["[13-9]|2[23]"],"0$1"],["(\\d)(\\d{7,8})","$1-$2",["2"],"0$1"]],"0"],BE:["32","00","4\\d{8}|[1-9]\\d{7}",[8,9],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:80|9)0"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[239]|4[23]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[15-8]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4"],"0$1"]],"0"],BF:["226","00","[024-7]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[024-7]"]]]],BG:["359","00","00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",[6,7,8,9,12],[["(\\d)(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["2"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["43[1-6]|70[1-9]"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:70|8)0"],"0$1"],["(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["43[1-7]|7"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[48]|9[08]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"]],"0"],BH:["973","00","[136-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[13679]|8[02-4679]"]]]],BI:["257","00","(?:[267]\\d|31)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2367]"]]]],BJ:["229","00","(?:01\\d|8)\\d{7}",[8,10],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["0"]]]],BL:["590","00","7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}",[9],0,"0",0,0,0,0,0,[["(?:59(?:0(?:2[7-9]|3[3-7]|5[12]|87)|87\\d)|80[6-9]\\d\\d)\\d{4}"],["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"],["80[0-5]\\d{6}"],["8[129]\\d{7}"],0,0,0,0,["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]],BM:["1","011","(?:441|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","441$1",0,"441"],BN:["673","00","[2-578]\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-578]"]]]],BO:["591","00(?:1\\d)?","(?:[2-7]\\d\\d|8001)\\d{5}",[8,9],[["(\\d)(\\d{7})","$1 $2",["[23]|4[46]|50"]],["(\\d{8})","$1",["[5-7]"]],["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["8"]]],"0",0,"0(1\\d)?"],BQ:["599","00","(?:[34]1|7\\d)\\d{5}",[7],0,0,0,0,0,0,"[347]"],BR:["55","00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)","[1-467]\\d{9,10}|55[0-46-9]\\d{8}|[34]\\d{7}|55\\d{7,8}|(?:5[0-46-9]|[89]\\d)\\d{7,9}",[8,9,10,11],[["(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37|86)","300|4(?:0(?:0|20)|370|864)"]],["(\\d{3})(\\d{2,3})(\\d{4})","$1 $2 $3",["(?:[358]|90)0"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],"($1)"],["(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[16][1-9]|[2-57-9]"],"($1)"]],"0",0,"(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?","$2"],BS:["1","011","(?:242|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([3-8]\\d{6})$|1","242$1",0,"242"],BT:["975","00","[178]\\d{7}|[2-8]\\d{6}",[7,8],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[2-6]|7[246]|8[2-4]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[67]|[78]"]]]],BW:["267","00","(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}",[7,8,10],[["(\\d{2})(\\d{5})","$1 $2",["90"]],["(\\d{3})(\\d{4})","$1 $2",["[24-6]|3[15-9]"]],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37]"]],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["0"]],["(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["8"]]]],BY:["375","810","(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",[6,7,8,9,10,11],[["(\\d{3})(\\d{3})","$1 $2",["800"],"8 $1"],["(\\d{3})(\\d{2})(\\d{2,4})","$1 $2 $3",["800"],"8 $1"],["(\\d{4})(\\d{2})(\\d{3})","$1 $2-$3",["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])","1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"],"8 0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["1(?:[56]|7[467])|2[1-3]"],"8 0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-4]"],"8 0$1"],["(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["[89]"],"8 $1"]],"8",0,"0|80?",0,0,0,0,"8~10"],BZ:["501","00","(?:0800\\d|[2-8])\\d{6}",[7,11],[["(\\d{3})(\\d{4})","$1-$2",["[2-8]"]],["(\\d)(\\d{3})(\\d{4})(\\d{3})","$1-$2-$3-$4",["0"]]]],CA:["1","011","[2-9]\\d{9}|3\\d{6}",[7,10],0,"1",0,0,0,0,0,[["(?:2(?:04|[23]6|[48]9|5[07]|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}",[10]],["",[10]],["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",[10]],["900[2-9]\\d{6}",[10]],["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|3[23]|44|66|77|88)|6(?:22|33))[2-9]\\d{6}",[10]],0,["310\\d{4}",[7]],0,["600[2-9]\\d{6}",[10]]]],CC:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",[6,7,8,9,10,12],0,"0",0,"([59]\\d{7})$|0","8$1",0,0,[["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}",[9]],["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,0,["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],CD:["243","00","(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}",[7,8,9,10],[["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["88"],"0$1"],["(\\d{2})(\\d{5})","$1 $2",["[1-6]"],"0$1"],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["5"],"0$1"]],"0"],CF:["236","00","8776\\d{4}|(?:[27]\\d|61)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[26-8]"]]]],CG:["242","00","222\\d{6}|(?:0\\d|80)\\d{7}",[9],[["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["8"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[02]"]]]],CH:["41","00","8\\d{11}|[2-9]\\d{8}",[9,12],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8[047]|90"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-79]|81"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["8"],"0$1"]],"0"],CI:["225","00","[02]\\d{9}",[10],[["(\\d{2})(\\d{2})(\\d)(\\d{5})","$1 $2 $3 $4",["2"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3 $4",["0"]]]],CK:["682","00","[2-578]\\d{4}",[5],[["(\\d{2})(\\d{3})","$1 $2",["[2-578]"]]]],CL:["56","(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0","12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",[9,10,11],[["(\\d{5})(\\d{4})","$1 $2",["219","2196"],"($1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["60|809"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["44"]],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2[1-36]"],"($1)"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["9(?:10|[2-9])"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-8]|[1-9])"],"($1)"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["60|8"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{3})(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["60"]]]],CM:["237","00","[26]\\d{8}|88\\d{6,7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["88"]],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[26]|88"]]]],CN:["86","00|1(?:[12]\\d|79)\\d\\d00","(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}",[7,8,9,10,11,12],[["(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]","(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1","10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12","10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123","10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"],"0$1"],["(\\d{3})(\\d{5,6})","$1 $2",["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]","(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]","85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])","85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["(?:4|80)0"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|2(?:[02-57-9]|1[1-9])","10|2(?:[02-57-9]|1[1-9])","10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"],"0$1",1],["(\\d{3})(\\d{7,8})","$1 $2",["9"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["80"],"0$1",1],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[3-578]"],"0$1",1],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1[3-9]"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["[12]"],"0$1",1]],"0",0,"(1(?:[12]\\d|79)\\d\\d)|0",0,0,0,0,"00"],CO:["57","00(?:4(?:[14]4|56)|[579])","(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}",[8,10,11],[["(\\d{4})(\\d{4})","$1 $2",["46"]],["(\\d{3})(\\d{7})","$1 $2",["6|90"],"($1)"],["(\\d{3})(\\d{7})","$1 $2",["3[0-357]|9[14]"]],["(\\d)(\\d{3})(\\d{7})","$1-$2-$3",["1"],"0$1",0,"$1 $2 $3"]],"0",0,"0([3579]|4(?:[14]4|56))?"],CR:["506","00","(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}",[8,10],[["(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[3-9]"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[89]"]]],0,0,"(19(?:0[0-2468]|1[09]|20|66|77|99))"],CU:["53","119","(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}",[6,7,8,10],[["(\\d{2})(\\d{4,6})","$1 $2",["2[1-4]|[34]"],"(0$1)"],["(\\d)(\\d{6,7})","$1 $2",["7"],"(0$1)"],["(\\d)(\\d{7})","$1 $2",["[56]"],"0$1"],["(\\d{3})(\\d{7})","$1 $2",["8"],"0$1"]],"0"],CV:["238","0","(?:[2-59]\\d\\d|800)\\d{4}",[7],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2-589]"]]]],CW:["599","00","(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[3467]"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["9[4-8]"]]],0,0,0,0,0,"[69]"],CX:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",[6,7,8,9,10,12],0,"0",0,"([59]\\d{7})$|0","8$1",0,0,[["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",[9]],["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,0,["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],CY:["357","00","(?:[279]\\d|[58]0)\\d{6}",[8],[["(\\d{2})(\\d{6})","$1 $2",["[257-9]"]]]],CZ:["420","00","(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",[9,10,11,12],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]|9[015-7]"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3 $4",["96"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]]],DE:["49","00","[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}",[4,5,6,7,8,9,10,11,12,13,14,15],[["(\\d{2})(\\d{3,13})","$1 $2",["3[02]|40|[68]9"],"0$1"],["(\\d{3})(\\d{3,12})","$1 $2",["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1","2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"],"0$1"],["(\\d{4})(\\d{2,11})","$1 $2",["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]","[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["138"],"0$1"],["(\\d{5})(\\d{2,10})","$1 $2",["3"],"0$1"],["(\\d{3})(\\d{5,11})","$1 $2",["181"],"0$1"],["(\\d{3})(\\d)(\\d{4,10})","$1 $2 $3",["1(?:3|80)|9"],"0$1"],["(\\d{3})(\\d{7,8})","$1 $2",["1[67]"],"0$1"],["(\\d{3})(\\d{7,12})","$1 $2",["8"],"0$1"],["(\\d{5})(\\d{6})","$1 $2",["185","1850","18500"],"0$1"],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{4})(\\d{7})","$1 $2",["18[68]"],"0$1"],["(\\d{4})(\\d{7})","$1 $2",["15[1279]"],"0$1"],["(\\d{5})(\\d{6})","$1 $2",["15[03568]","15(?:[0568]|3[13])"],"0$1"],["(\\d{3})(\\d{8})","$1 $2",["18"],"0$1"],["(\\d{3})(\\d{2})(\\d{7,8})","$1 $2 $3",["1(?:6[023]|7)"],"0$1"],["(\\d{4})(\\d{2})(\\d{7})","$1 $2 $3",["15[279]"],"0$1"],["(\\d{3})(\\d{2})(\\d{8})","$1 $2 $3",["15"],"0$1"]],"0"],DJ:["253","00","(?:2\\d|77)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[27]"]]]],DK:["45","00","[2-9]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-9]"]]]],DM:["1","011","(?:[58]\\d\\d|767|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","767$1",0,"767"],DO:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,0,0,0,"8001|8[024]9"],DZ:["213","00","(?:[1-4]|[5-79]\\d|80)\\d{7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-4]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-8]"],"0$1"]],"0"],EC:["593","00","1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}",[8,9,10,11],[["(\\d)(\\d{3})(\\d{4})","$1 $2-$3",["[2-7]"],"(0$1)",0,"$1-$2-$3"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],["(\\d{4})(\\d{3})(\\d{3,4})","$1 $2 $3",["1"]]],"0"],EE:["372","00","8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}",[7,8,10],[["(\\d{3})(\\d{4})","$1 $2",["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88","[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]],["(\\d{4})(\\d{3,4})","$1 $2",["[45]|8(?:00|[1-49])","[45]|8(?:00[1-9]|[1-49])"]],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["7"]],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]]],EG:["20","00","[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",[8,9,10],[["(\\d)(\\d{7,8})","$1 $2",["[23]"],"0$1"],["(\\d{2})(\\d{6,7})","$1 $2",["1[35]|[4-6]|8[2468]|9[235-7]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{2})(\\d{8})","$1 $2",["1"],"0$1"]],"0"],EH:["212","00","[5-8]\\d{8}",[9],0,"0",0,0,0,0,0,[["528[89]\\d{5}"],["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[016-8]\\d|2[0-8]|3[01]|5[0-5]))\\d{6}"],["80[0-7]\\d{6}"],["89\\d{7}"],0,0,0,0,["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]],ER:["291","00","[178]\\d{6}",[7],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[178]"],"0$1"]],"0"],ES:["34","00","(?:400|[5-9]\\d\\d)\\d{6}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]00"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[4-9]"]]]],ET:["251","00","(?:11|[2-57-9]\\d)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-57-9]"],"0$1"]],"0"],FI:["358","00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}",[5,6,7,8,9,10,11,12],[["(\\d{5})","$1",["20[2-59]"],"0$1"],["(\\d{3})(\\d{3,7})","$1 $2",["(?:[1-3]0|[68])0|70[07-9]"],"0$1"],["(\\d{2})(\\d{4,8})","$1 $2",["[14]|2[09]|50|7[135]"],"0$1"],["(\\d{2})(\\d{6,10})","$1 $2",["7"],"0$1"],["(\\d)(\\d{4,9})","$1 $2",["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"],"0$1"]],"0",0,0,0,0,"1[03-79]|[2-9]",0,"00"],FJ:["679","0(?:0|52)","45\\d{5}|(?:0800\\d|[235-9])\\d{6}",[7,11],[["(\\d{3})(\\d{4})","$1 $2",["[235-9]|45"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]]],0,0,0,0,0,0,0,"00"],FK:["500","00","[2-7]\\d{4}",[5]],FM:["691","00","(?:[39]\\d\\d|820)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[389]"]]]],FO:["298","00","[2-9]\\d{5}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[2-9]"]]],0,0,"(10(?:01|[12]0|88))"],FR:["33","00","[1-9]\\d{8}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1"],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"],"0$1"]],"0"],GA:["241","00","(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}",[7,8],[["(\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-7]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["11|[67]"],"0$1"]],0,0,"0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})","$1"],GB:["44","00","[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",[7,9,10],[["(\\d{3})(\\d{4})","$1 $2",["800","8001","80011","800111","8001111"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["845","8454","84546","845464"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["800"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["1(?:[2-69][02-9]|[78])"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[25]|7(?:0|6[02-9])","[25]|7(?:0|6(?:[03-9]|2[356]))"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[1389]"],"0$1"]],"0",0,"0|180020",0,0,0,[["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-5])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|5[01]))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}",[9,10]],["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}",[10]],["80[08]\\d{7}|800\\d{6}|8001111"],["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d",[7,10]],["70\\d{8}",[10]],0,["(?:3[0347]|55)\\d{8}",[10]],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",[10]],["56\\d{8}",[10]]],0," x"],GD:["1","011","(?:473|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","473$1",0,"473"],GE:["995","00","(?:[3-57]\\d\\d|800)\\d{6}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["32"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[57]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[348]"],"0$1"]],"0"],GF:["594","00","(?:694\\d|7093)\\d{5}|(?:59|[89]\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]|80[6-9]|9[47]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[89]"],"0$1"]],"0"],GG:["44","00","(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",[7,9,10],0,"0",0,"([25-9]\\d{5})$|0|180020","1481$1",0,0,[["1481[25-9]\\d{5}",[10]],["7(?:(?:781|839)\\d|911[17])\\d{5}",[10]],["80[08]\\d{7}|800\\d{6}|8001111"],["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d",[7,10]],["70\\d{8}",[10]],0,["(?:3[0347]|55)\\d{8}",[10]],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",[10]],["56\\d{8}",[10]]]],GH:["233","00","[235]\\d{8}|800\\d{5,6}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["8"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2358]"],"0$1"]],"0"],GI:["350","00","(?:[25]\\d|60)\\d{6}",[8],[["(\\d{3})(\\d{5})","$1 $2",["2"]]]],GL:["299","00","(?:19|[2-689]\\d|70)\\d{4}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["19|[2-9]"]]]],GM:["220","00","[48]\\d{8}|[2-9]\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["[235-9]|4(?:[0-35]|4[16-9])"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[48]"]]]],GN:["224","00","722\\d{6}|(?:3|6\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["3"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[67]"]]]],GP:["590","00","7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-79]|80[6-9]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0",0,0,0,0,0,[["(?:59(?:0(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)|87\\d)|80[6-9]\\d\\d)\\d{4}"],["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"],["80[0-5]\\d{6}"],["8[129]\\d{7}"],0,0,0,0,["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]],GQ:["240","00","222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235]"]],["(\\d{3})(\\d{6})","$1 $2",["[89]"]]]],GR:["30","00","5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}",[10,11,12],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["21|7"]],["(\\d{4})(\\d{6})","$1 $2",["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2689]"]],["(\\d{3})(\\d{3,4})(\\d{5})","$1 $2 $3",["8"]]]],GT:["502","00","80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}",[8,11],[["(\\d{4})(\\d{4})","$1 $2",["[2-8]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]]],GU:["1","011","(?:[58]\\d\\d|671|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","671$1",0,"671"],GW:["245","00","[49]\\d{8}|4\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["40"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"]]]],GY:["592","001","(?:[2-8]\\d{3}|9008)\\d{3}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]]],HK:["852","00(?:30|5[09]|[126-9]?)","8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}",[5,6,7,8,9,11],[["(\\d{3})(\\d{2,5})","$1 $2",["900","9003"]],["(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],["(\\d{3})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]],0,0,0,0,0,0,0,"00"],HN:["504","00","8\\d{10}|[237-9]\\d{7}",[8,11],[["(\\d{4})(\\d{4})","$1-$2",["[237-9]"]]]],HR:["385","00","[2-69]\\d{8}|80\\d{5,7}|[1-79]\\d{7}|6\\d{6}",[7,8,9],[["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["6[01]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{4})(\\d{3})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["6|7[245]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-57]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"]],"0"],HT:["509","00","[2-589]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[2-589]"]]]],HU:["36","00","[235-7]\\d{8}|[1-9]\\d{7}",[8,9],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"(06 $1)"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"],"(06 $1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"06 $1"]],"06"],ID:["62","00[89]","00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}",[7,8,9,10,11,12,13,14,15,16,17],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["15"]],["(\\d{2})(\\d{5,9})","$1 $2",["2[124]|[36]1"],"(0$1)"],["(\\d{3})(\\d{5,7})","$1 $2",["800"],"0$1"],["(\\d{3})(\\d{5,8})","$1 $2",["[2-79]"],"(0$1)"],["(\\d{3})(\\d{3,4})(\\d{3})","$1-$2-$3",["8[1-35-9]"],"0$1"],["(\\d{3})(\\d{6,8})","$1 $2",["1"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["804"],"0$1"],["(\\d{3})(\\d)(\\d{3})(\\d{3})","$1 $2 $3 $4",["80"],"0$1"],["(\\d{3})(\\d{4})(\\d{4,5})","$1-$2-$3",["8"],"0$1"]],"0"],IE:["353","00","(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",[7,8,9,10],[["(\\d{2})(\\d{5})","$1 $2",["2[24-9]|47|58|6[237-9]|9[35-9]"],"(0$1)"],["(\\d{3})(\\d{5})","$1 $2",["[45]0"],"(0$1)"],["(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["1"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2569]|4[1-69]|7[14]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["81"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[78]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["4"],"(0$1)"],["(\\d{2})(\\d)(\\d{3})(\\d{4})","$1 $2 $3 $4",["8"],"0$1"]],"0"],IL:["972","0(?:0|1(?:05|[2-9]))","1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",[7,8,9,10,11,12],[["(\\d{4})(\\d{3})","$1-$2",["125"]],["(\\d{4})(\\d{2})(\\d{2})","$1-$2-$3",["121"]],["(\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[2-489]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1-$2-$3",["12"]],["(\\d{4})(\\d{6})","$1-$2",["159"]],["(\\d)(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3-$4",["1[7-9]"]],["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})","$1-$2 $3-$4",["15"]]],"0"],IM:["44","00","1624\\d{6}|(?:[3578]\\d|90)\\d{8}",[10],0,"0",0,"([25-8]\\d{5})$|0|180020","1624$1",0,"74576|(?:16|7[56])24"],IN:["91","00","(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}",[8,9,10,11,12,13],[["(\\d{8})","$1",["5(?:0|2[23]|3[03]|[67]1|88)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"],0,1],["(\\d{4})(\\d{4,5})","$1 $2",["180","1800"],0,1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["140"],0,1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79[1-6]|80[2-46]","11|2[02]|33|4[04]|79[1-6]|80(?:[2-4]|6[0-589])","11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9]))|80(?:[2-4]|6[0-589])"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67)[14]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31)|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:3171|5[15][2-6]|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|8(?:16|2[014]|3[126]|6[136]|7[78]|83)(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"],"0$1",1],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|3[129]|5[29]|6[02-5]|70)|807","1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7(?:[23569]|8[0-57-9])|8[1-6])|7(?:1(?:[013-8]|9[6-9])|3(?:17|2[0-49]|9[2-57])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]","1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|8(?:28[235-7]|3))|73179|807(?:1|9[1-3])|(?:1552|6(?:(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578])\\d|7(?:[23569]\\d|8[0-57-9])|8(?:[14-6]\\d|2[0-79]))|7(?:1(?:[013-8]\\d|9[6-9])|3(?:2[0-49]|9[2-57])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"],"0$1",1],["(\\d{5})(\\d{5})","$1 $2",["16|[6-9]"],"0$1",1],["(\\d{4})(\\d{2,4})(\\d{4})","$1 $2 $3",["18[06]","18[06]0"],0,1],["(\\d{4})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["18"],0,1]],"0"],IO:["246","00","3\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["3"]]]],IQ:["964","00","(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-6]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"]],"0"],IR:["98","00","[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",[4,5,6,7,10],[["(\\d{4,5})","$1",["96"],"0$1"],["(\\d{2})(\\d{4,5})","$1 $2",["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[1-8]"],"0$1"]],"0"],IS:["354","00|1(?:0(?:01|[12]0)|100)","(?:38\\d|[4-9])\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["[4-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["3"]]],0,0,0,0,0,0,0,"00"],IT:["39","00","0\\d{5,11}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?",[6,7,8,9,10,11,12],[["(\\d{2})(\\d{4,6})","$1 $2",["0[26]"]],["(\\d{3})(\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]],["(\\d{4})(\\d{2,6})","$1 $2",["0(?:[13-579][2-46-8]|8[236-8])"]],["(\\d{4})(\\d{4})","$1 $2",["894"]],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[26]|5"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["1(?:44|[679])|[378]|43"]],["(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[13-57-9][0159]|14"]],["(\\d{2})(\\d{4})(\\d{5})","$1 $2 $3",["0[26]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]],["(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["[03]"]]],0,0,0,0,0,0,[["0(?:669[0-79]\\d{1,6}|831\\d{2,8})|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[2356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"],["3[2-9]\\d{7,8}|(?:31|43)\\d{8}",[9,10]],["80(?:0\\d{3}|3)\\d{3}",[6,9]],["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}",[6,8,9,10]],["1(?:78\\d|99)\\d{6}",[9,10]],["3[2-8]\\d{9,10}",[11,12]],0,0,["55\\d{8}",[10]],["84(?:[08]\\d{3}|[17])\\d{3}",[6,9]]]],JE:["44","00","1534\\d{6}|(?:[3578]\\d|90)\\d{8}",[10],0,"0",0,"([0-24-8]\\d{5})$|0|180020","1534$1",0,0,[["1534[0-24-8]\\d{5}"],["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"],["80(?:07(?:35|81)|8901)\\d{4}"],["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"],["701511\\d{4}"],0,["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"],["56\\d{8}"]]],JM:["1","011","(?:[58]\\d\\d|658|900)\\d{7}",[10],0,"1",0,0,0,0,"658|876"],JO:["962","00","(?:(?:[2689]|7\\d)\\d|32|427|53)\\d{6}",[8,9],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2356]|87"],"(0$1)"],["(\\d{3})(\\d{5,6})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["70"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[47]"],"0$1"]],"0"],JP:["81","010","00[1-9]\\d{6,14}|[25-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",[8,9,10,11,12,13,14,15,16,17],[["(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],["(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["3|4(?:2[09]|7[01])|6[1-9]","3|4(?:2(?:0|9[02-69])|7(?:0[019]|1))|6[1-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"],"0$1"],["(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["[14]|[289][2-9]|5[3-9]|7[2-4679]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[25-9]"],"0$1"]],"0",0,"(000[2569]\\d{4,6})$|(?:(?:003768)0?)|0","$1"],KE:["254","000","(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",[7,8,9,10],[["(\\d{2})(\\d{5,7})","$1 $2",["[24-6]"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["[17]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],"0"],KG:["996","00","8\\d{9}|[235-9]\\d{8}",[9,10],[["(\\d{4})(\\d{5})","$1 $2",["3(?:1[346]|[24-79])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235-79]|88"],"0$1"],["(\\d{3})(\\d{3})(\\d)(\\d{2,3})","$1 $2 $3 $4",["8"],"0$1"]],"0"],KH:["855","00[14-9]","1\\d{9}|[1-9]\\d{7,8}",[8,9,10],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-9]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],KI:["686","00","(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",[5,8],0,"0"],KM:["269","00","[3478]\\d{6}",[7],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[3478]"]]]],KN:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","869$1",0,"869"],KP:["850","00|99","85\\d{6}|(?:19\\d|[2-7])\\d{7}",[8,10],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"]],"0"],KR:["82","00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))","00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",[5,6,8,9,10,11,12,13,14],[["(\\d{2})(\\d{3,4})","$1-$2",["(?:3[1-3]|[46][1-4]|5[1-5])1"],"0$1"],["(\\d{4})(\\d{4})","$1-$2",["1"]],["(\\d)(\\d{3,4})(\\d{4})","$1-$2-$3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[36]0|8"],"0$1"],["(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["[1346]|5[1-5]"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(\\d{2})(\\d{5})(\\d{4})","$1-$2-$3",["5"],"0$1"]],"0",0,"0(8(?:[1-46-8]|5\\d\\d))?"],KW:["965","00","18\\d{5}|(?:[2569]\\d|41)\\d{6}",[7,8],[["(\\d{4})(\\d{3,4})","$1 $2",["[169]|2(?:[235]|4[1-35-9])|52"]],["(\\d{3})(\\d{5})","$1 $2",["[245]"]]]],KY:["1","011","(?:345|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","345$1",0,"345"],KZ:["7","810","8\\d{13}|[78]\\d{9}",[10,14],0,"8",0,0,0,0,"7",0,"8~10"],LA:["856","00","[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}",[8,9,10],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2[13]|3[14]|[4-8]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["3"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[23]"],"0$1"]],"0"],LB:["961","00","[27-9]\\d{7}|[13-9]\\d{6}",[7,8],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[13-69]|7(?:[2-57]|62|8[0-6]|9[04-9])|8[02-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27-9]"]]],"0"],LC:["1","011","(?:[58]\\d\\d|758|900)\\d{7}",[10],0,"1",0,"([2-8]\\d{6})$|1","758$1",0,"758"],LI:["423","00","[68]\\d{8}|(?:[2378]\\d|90)\\d{5}",[7,9],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2379]|8(?:0[09]|7)","[2379]|8(?:0(?:02|9)|7)"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["69"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]],"0",0,"(1001)|0"],LK:["94","00","[1-9]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[1-689]"],"0$1"]],"0"],LR:["231","00","(?:[2457]\\d|33|88)\\d{7}|(?:2\\d|[4-6])\\d{6}",[7,8,9],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["4[67]|[56]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2-578]"],"0$1"]],"0"],LS:["266","00","(?:[256]\\d\\d|800)\\d{5}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[2568]"]]]],LT:["370","00","(?:[3469]\\d|52|[78]0)\\d{6}",[8],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["52[0-7]"],"(0-$1)",1],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[7-9]"],"0 $1",1],["(\\d{2})(\\d{6})","$1 $2",["37|4(?:[15]|6[1-8])"],"(0-$1)",1],["(\\d{3})(\\d{5})","$1 $2",["[3-6]"],"(0-$1)",1]],"0",0,"[08]"],LU:["352","00","35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",[4,5,6,7,8,9,10,11],[["(\\d{2})(\\d{3})","$1 $2",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["20[2-689]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4",["20"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})","$1 $2 $3 $4",["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["80[01]|90[015]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["20"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4 $5",["20"]]],0,0,"(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"],LV:["371","00","(?:[268]\\d|78|90)\\d{6}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2679]|8[01]"]]]],LY:["218","00","[2-9]\\d{8}",[9],[["(\\d{2})(\\d{7})","$1-$2",["[2-9]"],"0$1"]],"0"],MA:["212","00","[5-8]\\d{8}",[9],[["(\\d{4})(\\d{5})","$1-$2",["892"],"0$1"],["(\\d{2})(\\d{7})","$1-$2",["8(?:0[0-7]|9)"],"0$1"],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[5-8]"],"0$1"]],"0",0,0,0,0,"[5-8]"],MC:["377","00","(?:[3489]|[67]\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["4"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[389]"]],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[67]"],"0$1"]],"0"],MD:["373","00","(?:[235-7]\\d|[89]0)\\d{6}",[8],[["(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["22|3"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[25-7]"],"0$1"]],"0"],ME:["382","00","(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"0$1"]],"0"],MF:["590","00","7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}",[9],0,"0",0,0,0,0,0,[["(?:59(?:0(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)|87\\d)|80[6-9]\\d\\d)\\d{4}"],["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"],["80[0-5]\\d{6}"],["8[129]\\d{7}"],0,0,0,0,["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]],MG:["261","00","[23]\\d{8}",[9],[["(\\d{2})(\\d{2})(\\d{3})(\\d{2})","$1 $2 $3 $4",["[23]"],"0$1"]],"0",0,"([24-9]\\d{6})$|0","20$1"],MH:["692","011","329\\d{4}|(?:[256]\\d|45)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1-$2",["[2-6]"]]],"1"],MK:["389","00","[2-578]\\d{7}",[8],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2|34[47]|4(?:[37]7|5[47]|64)"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[347]"],"0$1"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["[58]"],"0$1"]],"0"],ML:["223","00","[24-9]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-9]"]]]],MM:["95","00","1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",[6,7,8,9,10],[["(\\d)(\\d{2})(\\d{3})","$1 $2 $3",["16|2"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]|452|678|86","[12]|452|6788|86"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[4-7]|8[1-35]"],"0$1"],["(\\d)(\\d{3})(\\d{4,6})","$1 $2 $3",["9(?:2[0-4]|[35-9]|4[137-9])"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["92"],"0$1"],["(\\d)(\\d{5})(\\d{4})","$1 $2 $3",["9"],"0$1"]],"0"],MN:["976","001","[12]\\d{7,9}|[5-9]\\d{7}",[8,9,10],[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["11|2[16]"],"0$1"],["(\\d{4})(\\d{4})","$1 $2",["[5-9]"]],["(\\d{3})(\\d{5,6})","$1 $2",["[12]2[1-3]"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["[12](?:27|3[2-8]|4[2-68]|5[1-4689])","[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["[12]"],"0$1"]],"0"],MO:["853","00","0800\\d{3}|(?:28|[68]\\d)\\d{6}",[7,8],[["(\\d{4})(\\d{3})","$1 $2",["0"]],["(\\d{4})(\\d{4})","$1 $2",["[268]"]]]],MP:["1","011","[58]\\d{9}|(?:67|90)0\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","670$1",0,"670"],MQ:["596","00","7091\\d{5}|(?:[56]9|[89]\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-79]|8(?:0[6-9]|[36])"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0"],MR:["222","00","(?:[2-4]\\d\\d|800)\\d{5}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-48]"]]]],MS:["1","011","(?:[58]\\d\\d|664|900)\\d{7}",[10],0,"1",0,"([34]\\d{6})$|1","664$1",0,"664"],MT:["356","00","3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[2357-9]"]]]],MU:["230","0(?:0|[24-7]0|3[03])","(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}",[7,8,10],[["(\\d{3})(\\d{4})","$1 $2",["[2-46]|8[013]"]],["(\\d{4})(\\d{4})","$1 $2",["[57]"]],["(\\d{5})(\\d{5})","$1 $2",["8"]]],0,0,0,0,0,0,0,"020"],MV:["960","0(?:0|19)","(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",[7,10],[["(\\d{3})(\\d{4})","$1-$2",["[34679]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"]]],0,0,0,0,0,0,0,"00"],MW:["265","00","(?:[1289]\\d|31|77)\\d{7}|1\\d{6}",[7,9],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["1[2-9]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-37-9]"],"0$1"]],"0"],MX:["52","0[09]","[2-9]\\d{9}",[10],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["33|5[56]|81"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2-9]"]]],0,0,0,0,0,0,0,"00"],MY:["60","00","1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1-$2 $3",["[4-79]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1-$2 $3",["1(?:[02469]|[378][1-9]|53)|8","1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1-$2 $3",["3"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3-$4",["1(?:[367]|80)"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2 $3",["15"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2 $3",["1"],"0$1"]],"0"],MZ:["258","00","(?:2|8\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2|8[2-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]]],NA:["264","00","[68]\\d{7,8}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["88"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["6"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["87"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],"0"],NC:["687","00","(?:050|[2-57-9]\\d\\d)\\d{3}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1.$2.$3",["[02-57-9]"]]]],NE:["227","00","[027-9]\\d{7}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["08"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[089]|2[013]|7[0467]"]]]],NF:["672","00","[13]\\d{5}",[6],[["(\\d{2})(\\d{4})","$1 $2",["1[0-3]"]],["(\\d)(\\d{5})","$1 $2",["[13]"]]],0,0,"([0-258]\\d{4})$","3$1"],NG:["234","009","(?:20|9\\d)\\d{8}|[78]\\d{9,13}",[10,11,12,13,14],[["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[7-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["20[129]"],"0$1"],["(\\d{4})(\\d{2})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["[78]"],"0$1"],["(\\d{3})(\\d{5})(\\d{5,6})","$1 $2 $3",["[78]"],"0$1"]],"0"],NI:["505","00","(?:1800|[25-8]\\d{3})\\d{4}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[125-8]"]]]],NL:["31","00","(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}",[5,6,7,8,9,10,11],[["(\\d{3})(\\d{4,7})","$1 $2",["[89]0"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["66"],"0$1"],["(\\d)(\\d{8})","$1 $2",["6"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-578]|91"],"0$1"],["(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3",["9"],"0$1"]],"0"],NO:["47","00","(?:0|[2-9]\\d{3})\\d{4}",[5,8],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["8"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-79]"]]],0,0,0,0,0,"[02-689]|7[0-8]"],NP:["977","00","(?:1\\d|9)\\d{9}|[1-9]\\d{7}",[8,10,11],[["(\\d)(\\d{7})","$1-$2",["1[2-6]"],"0$1"],["(\\d{2})(\\d{6})","$1-$2",["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"],"0$1"],["(\\d{3})(\\d{7})","$1-$2",["9"]]],"0"],NR:["674","00","(?:222|444|(?:55|8\\d)\\d|666|777|999)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[24-9]"]]]],NU:["683","00","(?:[4-7]|888\\d)\\d{3}",[4,7],[["(\\d{3})(\\d{4})","$1 $2",["8"]]]],NZ:["64","0(?:0|161)","[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}",[5,6,7,8,9,10],[["(\\d{2})(\\d{3,8})","$1 $2",["8[1-79]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["50[036-8]|8|90","50(?:[0367]|88)|8|90"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["24|[346]|7[2-57-9]|9[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:10|74)|[589]"],"0$1"],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["1|2[028]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,5})","$1 $2 $3",["2(?:[169]|7[0-35-9])|7"],"0$1"]],"0",0,0,0,0,0,0,"00"],OM:["968","00","(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}",[7,8,9],[["(\\d{3})(\\d{4,6})","$1 $2",["[58]"]],["(\\d{2})(\\d{6})","$1 $2",["2"]],["(\\d{4})(\\d{4})","$1 $2",["[179]"]]]],PA:["507","00","(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}",[7,8,10,11],[["(\\d{3})(\\d{4})","$1-$2",["[1-57-9]"]],["(\\d{4})(\\d{4})","$1-$2",["[68]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]]],PE:["51","00|19(?:1[124]|77|90)00","(?:[14-8]|9\\d)\\d{7}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["80"],"(0$1)"],["(\\d)(\\d{7})","$1 $2",["1"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["[4-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"]]],"0",0,0,0,0,0,0,"00"," Anexo "],PF:["689","00","4\\d{5}(?:\\d{2})?|8\\d{7,8}",[6,8,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["44"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4|8[7-9]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]]],PG:["675","00|140[1-3]","(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["18|[2-69]|85[02-46-9]"]],["(\\d{4})(\\d{4})","$1 $2",["[78]"]]],0,0,0,0,0,0,0,"00"],PH:["63","00","(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}",[6,8,9,10,11,12,13],[["(\\d)(\\d{5})","$1 $2",["2"],"(0$1)"],["(\\d{4})(\\d{4,6})","$1 $2",["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2","3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],"(0$1)"],["(\\d{5})(\\d{4})","$1 $2",["346|4(?:27|9[35])|883","3469|4(?:279|9(?:30|56))|8834"],"(0$1)"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-7]|8[2-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["1"]]],"0"],PK:["92","00","122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",[8,9,10,11,12],[["(\\d{3})(\\d{3})(\\d{2,7})","$1 $2 $3",["[89]0"],"0$1"],["(\\d{4})(\\d{5})","$1 $2",["1"]],["(\\d{3})(\\d{6,7})","$1 $2",["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])","9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"],"(0$1)"],["(\\d{2})(\\d{7,8})","$1 $2",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],"(0$1)"],["(\\d{5})(\\d{5})","$1 $2",["58"],"(0$1)"],["(\\d{3})(\\d{7})","$1 $2",["3"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[24-9]"],"(0$1)"]],"0"],PL:["48","00","(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}",[6,7,8,9,10],[["(\\d{5})","$1",["19"]],["(\\d{3})(\\d{3})","$1 $2",["11|20|64"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["30|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1","30|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["64"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[2-8]|[2-7]|8[1-79]|9[145]"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["8"]]]],PM:["508","00","[78]\\d{8}|[2-9]\\d{5}",[6,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0"],PR:["1","011","(?:[589]\\d\\d|787)\\d{7}",[10],0,"1",0,0,0,0,"787|939"],PS:["970","00","[2489]2\\d{6}|(?:1\\d|5)\\d{8}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2489]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["5"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],PT:["351","00","1693\\d{5}|(?:[26-9]\\d|30)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["2[12]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["16|[236-9]"]]]],PW:["680","01[12]","(?:[24-8]\\d\\d|345|900)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]]],PY:["595","00","[36-8]\\d{5,8}|4\\d{6,8}|59\\d{6}|9\\d{5,10}|(?:2\\d|5[0-8])\\d{6,7}",[6,7,8,9,10,11],[["(\\d{3})(\\d{3,6})","$1 $2",["[2-9]0"],"0$1"],["(\\d{2})(\\d{5})","$1 $2",["3[289]|4[246-8]|61|7[1-3]|8[1-36]"],"(0$1)"],["(\\d{3})(\\d{4,5})","$1 $2",["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["87"]],["(\\d{3})(\\d{6})","$1 $2",["9(?:[5-79]|8[1-7])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]"],"0$1"],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["9"]]],"0"],QA:["974","00","800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}",[7,8,9,11],[["(\\d{3})(\\d{4})","$1 $2",["2[136]|8"]],["(\\d{4})(\\d{4})","$1 $2",["[3-7]"]]]],RE:["262","00","709\\d{6}|(?:26|[689]\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[26-9]"],"0$1"]],"0",0,0,0,0,0,[["2631[0-6]\\d{4}|26(?:2\\d|30|88)\\d{5}"],["(?:69(?:2\\d\\d|3(?:[06][0-6]|1[0-3]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}"],["80\\d{7}"],["89[1-37-9]\\d{6}"],0,0,0,0,["9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}"],["8(?:1[019]|2[0156]|84|90)\\d{6}"]]],RO:["40","00","(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}",[6,9],[["(\\d{3})(\\d{3})","$1 $2",["2[3-6]","2[3-6]\\d9"],"0$1"],["(\\d{2})(\\d{4})","$1 $2",["219|31"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23]1"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[236-9]"],"0$1"]],"0",0,0,0,0,0,0,0," int "],RS:["381","00","38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",[6,7,8,9,10,11,12],[["(\\d{3})(\\d{3,9})","$1 $2",["(?:2[389]|39)0|[7-9]"],"0$1"],["(\\d{2})(\\d{5,10})","$1 $2",["[1-36]"],"0$1"]],"0"],RU:["7","810","8\\d{13}|[347-9]\\d{9}",[10,14],[["(\\d{4})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-8]|2[1-9])","7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))","7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"],"8 ($1)",1],["(\\d{5})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-68]|2[1-9])","7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))","7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"],"8 ($1)",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"8 ($1)",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[349]|8(?:[02-7]|1[1-8])"],"8 ($1)",1],["(\\d{4})(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3 $4",["8"],"8 ($1)"]],"8",0,0,0,0,"[3489]",0,"8~10"],RW:["250","00","(?:06|[27]\\d\\d|[89]00)\\d{6}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[7-9]"],"0$1"]],"0"],SA:["966","00","(?:[15]\\d|800|92)\\d{7}",[9,10],[["(\\d{4})(\\d{5})","$1 $2",["9"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]],"0"],SB:["677","0[01]","[6-9]\\d{6}|[1-6]\\d{4}",[5,7],[["(\\d{2})(\\d{5})","$1 $2",["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]]],SC:["248","010|0[0-2]","(?:[2489]\\d|64)\\d{5}",[7],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[246]|9[57]"]]],0,0,0,0,0,0,0,"00"],SD:["249","00","[19]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[19]"],"0$1"]],"0"],SE:["46","00","(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",[6,7,8,9,10,12],[["(\\d{2})(\\d{2,3})(\\d{2})","$1-$2 $3",["20"],"0$1",0,"$1 $2 $3"],["(\\d{3})(\\d{4})","$1-$2",["9(?:00|39|44|9)"],"0$1",0,"$1 $2"],["(\\d{2})(\\d{3})(\\d{2})","$1-$2 $3",["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],"0$1",0,"$1 $2 $3"],["(\\d)(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["8"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2,3})(\\d{2})","$1-$2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1",0,"$1 $2 $3"],["(\\d{3})(\\d{2,3})(\\d{3})","$1-$2 $3",["9(?:00|39|44)"],"0$1",0,"$1 $2 $3"],["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"],"0$1",0,"$1 $2 $3 $4"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["10|7"],"0$1",0,"$1 $2 $3 $4"],["(\\d)(\\d{3})(\\d{3})(\\d{2})","$1-$2 $3 $4",["8"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1-$2 $3 $4",["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{2})(\\d{3})","$1-$2 $3 $4",["9"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4 $5",["[26]"],"0$1",0,"$1 $2 $3 $4 $5"]],"0"],SG:["65","0[0-3]\\d","(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",[8,10,11],[["(\\d{4})(\\d{4})","$1 $2",["[369]|8(?:0[1-9]|[1-9])"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]],["(\\d{4})(\\d{4})(\\d{3})","$1 $2 $3",["7"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]]],SH:["290","00","(?:[256]\\d|8)\\d{3}",[4,5],0,0,0,0,0,0,"[256]"],SI:["386","00|10(?:22|66|88|99)","[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",[5,6,7,8],[["(\\d{2})(\\d{3,6})","$1 $2",["8[09]|9"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["59|8"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37][01]|4[013]|51|6"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-57]"],"(0$1)"]],"0",0,0,0,0,0,0,"00"],SJ:["47","00","0\\d{4}|(?:[489]\\d|79)\\d{6}",[5,8],0,0,0,0,0,0,"79"],SK:["421","00","[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",[6,7,9],[["(\\d)(\\d{2})(\\d{3,4})","$1 $2 $3",["21"],"0$1"],["(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["[3-5][1-8]1","[3-5][1-8]1[67]"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3 $4",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[689]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[3-5]"],"0$1"]],"0"],SL:["232","00","(?:[237-9]\\d|66)\\d{6}",[8],[["(\\d{2})(\\d{6})","$1 $2",["[236-9]"],"(0$1)"]],"0"],SM:["378","00","(?:0549|[5-7]\\d)\\d{6}",[8,10],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"]],["(\\d{4})(\\d{6})","$1 $2",["0"]]],0,0,"([89]\\d{5})$","0549$1"],SN:["221","00","(?:[378]\\d|93)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[379]"]]]],SO:["252","00","[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}",[6,7,8,9],[["(\\d{2})(\\d{4})","$1 $2",["8[125]"]],["(\\d{6})","$1",["[134]"]],["(\\d)(\\d{6})","$1 $2",["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],["(\\d{2})(\\d{5,7})","$1 $2",["1|28|9[2-9]"]],["(\\d)(\\d{7})","$1 $2",["[267]|904"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[346-9]"]]],"0"],SR:["597","00","(?:[2-5]|[6-9]\\d)\\d{5}",[6,7],[["(\\d{2})(\\d{2})(\\d{2})","$1-$2-$3",["56"]],["(\\d{3})(\\d{3})","$1-$2",["[2-5]"]],["(\\d{3})(\\d{4})","$1-$2",["[6-9]"]]]],SS:["211","00","[19]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[19]"],"0$1"]],"0"],ST:["239","00","(?:22|9\\d)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[29]"]]]],SV:["503","00","[25-7]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?",[7,8,11],[["(\\d{3})(\\d{4})","$1 $2",["[89]"]],["(\\d{4})(\\d{4})","$1 $2",["[25-7]"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[89]"]]]],SX:["1","011","7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"(5\\d{6})$|1","721$1",0,"721"],SY:["963","00","[1-359]\\d{8}|[1-5]\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-4]|5[1-3]"],"0$1",1],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[59]"],"0$1",1]],"0"],SZ:["268","00","0800\\d{4}|(?:[237]\\d|900)\\d{6}",[8,9],[["(\\d{4})(\\d{4})","$1 $2",["[0237]"]],["(\\d{5})(\\d{4})","$1 $2",["9"]]]],TA:["290","00","8\\d{3}",[4],0,0,0,0,0,0,"8"],TC:["1","011","(?:[58]\\d\\d|649|900)\\d{7}",[10],0,"1",0,"([2-479]\\d{6})$|1","649$1",0,"649"],TD:["235","00|16","(?:22|[3689]\\d|77)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[236-9]"]]],0,0,0,0,0,0,0,"00"],TG:["228","00","[279]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[279]"]]]],TH:["66","00[1-9]","(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}",[8,9,10,13],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[13-9]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],TJ:["992","810","(?:[0-57-9]\\d|66)\\d{7}",[9],[["(\\d{6})(\\d)(\\d{2})","$1 $2 $3",["331","3317"]],["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["44[02-479]|[34]7"]],["(\\d{4})(\\d)(\\d{4})","$1 $2 $3",["3(?:[1245]|3[12])"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["\\d"]]],0,0,0,0,0,0,0,"8~10"],TK:["690","00","[2-47]\\d{3,6}",[4,5,6,7]],TL:["670","00","7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[2-489]|70"]],["(\\d{4})(\\d{4})","$1 $2",["7"]]]],TM:["993","810","[1-7]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["12"],"(8 $1)"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-5]"],"(8 $1)"],["(\\d{2})(\\d{6})","$1 $2",["[67]"],"8 $1"]],"8",0,0,0,0,0,0,"8~10"],TN:["216","00","[2-57-9]\\d{7}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-57-9]"]]]],TO:["676","00","(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}",[5,7],[["(\\d{2})(\\d{3})","$1-$2",["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],["(\\d{4})(\\d{3})","$1 $2",["0"]],["(\\d{3})(\\d{4})","$1 $2",["[5-9]"]]]],TR:["90","00","4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}",[7,10,12,13],[["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["512|8[01589]|90"],"0$1",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5"],"0$1",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24][1-8]|3[1-9]"],"(0$1)",1],["(\\d{3})(\\d{3})(\\d{6,7})","$1 $2 $3",["80"],"0$1",1]],"0"],TT:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-46-8]\\d{6})$|1","868$1",0,"868"],TV:["688","00","(?:2|7\\d\\d|90)\\d{4}",[5,6,7],[["(\\d{2})(\\d{3})","$1 $2",["2"]],["(\\d{2})(\\d{4})","$1 $2",["90"]],["(\\d{2})(\\d{5})","$1 $2",["7"]]]],TW:["886","0(?:0[25-79]|19)","[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",[7,8,9,10,11],[["(\\d{2})(\\d)(\\d{4})","$1 $2 $3",["202"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["826"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["83"],"0$1"],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["82"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[25]0|37|49|8[09]"],"0$1"],["(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["[23568]|4(?:0[02-48]|[1-478])|7[1-9]","[23568]|4(?:0[2-48]|[1-478])|(?:400|7)[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"],"0$1"],["(\\d{2})(\\d{4})(\\d{4,5})","$1 $2 $3",["7"],"0$1"]],"0",0,0,0,0,0,0,0,"#"],TZ:["255","00[056]","(?:[25-8]\\d|41|90)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[24]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["5"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[67]"],"0$1"]],"0"],UA:["380","00","[89]\\d{9}|[3-9]\\d{8}",[9,10],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]","6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"],"0$1"],["(\\d{4})(\\d{5})","$1 $2",["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])","3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-7]|89|9[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],"0",0,0,0,0,0,0,"0~0"],UG:["256","00[057]","800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",[9],[["(\\d{4})(\\d{5})","$1 $2",["202","2024","20240"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["20[0-35-7]|4(?:6[45]|[7-9])|[7-9]","20(?:[0135-7]|2[5-9])|4(?:6[45]|[7-9])|[7-9]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[2-4]"],"0$1"]],"0"],US:["1","011","[2-9]\\d{9}|3\\d{6}",[10],[["(\\d{3})(\\d{4})","$1-$2",["310"],0,1],["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",["[2-9]"],0,1,"$1-$2-$3"]],"1",0,0,0,0,0,[["(?:472[2-47-9]|983[2-57-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[02469]|8[13])|3(?:0[1-57-9]|1[02-9]|2[013-79]|3[0-24679]|4[167]|5[0-3]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-269])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-2478]|4[0378]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}"],[""],["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],["900[2-9]\\d{6}"],["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|3[23]|44|66|77|88)[2-9]\\d{6}"]]],UY:["598","0(?:0|1[3-9]\\d)","0004\\d{2,9}|[1249]\\d{7}|2\\d{3,4}|(?:[49]\\d|80)\\d{5}",[4,5,6,7,8,9,10,11,12,13],[["(\\d{4,5})","$1",["21"]],["(\\d{3})(\\d{3,4})","$1 $2",["0"]],["(\\d{3})(\\d{4})","$1 $2",["[49]0|8"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"],["(\\d{4})(\\d{4})","$1 $2",["[124]"]],["(\\d{3})(\\d{3})(\\d{2,4})","$1 $2 $3",["0"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})","$1 $2 $3 $4",["0"]]],"0",0,0,0,0,0,0,"00"," int. "],UZ:["998","00","(?:20|33|[5-9]\\d)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[235-9]"]]]],VA:["39","00","0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",[6,7,8,9,10,11,12],0,0,0,0,0,0,"06698"],VC:["1","011","(?:[58]\\d\\d|784|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","784$1",0,"784"],VE:["58","00","[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}",[10],[["(\\d{3})(\\d{7})","$1-$2",["[24-689]"],"0$1"]],"0"],VG:["1","011","(?:284|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-578]\\d{6})$|1","284$1",0,"284"],VI:["1","011","[58]\\d{9}|(?:34|90)0\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","340$1",0,"340"],VN:["84","00","[12]\\d{9}|[135-9]\\d{8}|[16]\\d{6,7}|7\\d{6}",[7,8,9,10],[["(\\d{4})(\\d{4,6})","$1 $2",["1(?:2[02]|[89])"],0,1],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[26]|6"],"0$1",1],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[357-9]"],"0$1",1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2[48]"],"0$1",1],["(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["2"],"0$1",1]],"0"],VU:["678","00","[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}",[5,7],[["(\\d{3})(\\d{4})","$1 $2",["[57-9]"]]]],WF:["681","00","(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}",[6,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[47-9]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]]],WS:["685","0","(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}",[5,6,7,10],[["(\\d{5})","$1",["[2-5]|6[1-9]"]],["(\\d{3})(\\d{3,7})","$1 $2",["[68]"]],["(\\d{2})(\\d{5})","$1 $2",["7"]]]],XK:["383","00","2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}",[8,9,10,11,12],[["(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-4]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2|39"],"0$1"],["(\\d{2})(\\d{7,10})","$1 $2",["3"],"0$1"]],"0"],YE:["967","00","(?:1|7\\d)\\d{7}|[1-7]\\d{6}",[7,8,9],[["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-6]|7(?:[24-6]|8[0-7])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"],"0$1"]],"0"],YT:["262","00","(?:639\\d|7093)\\d{5}|(?:26|80|9\\d)\\d{7}",[9],0,"0",0,0,0,0,0,[["26(?:89\\d|9(?:0[0-467]|15|5[0-4]|6\\d|[78]0))\\d{4}"],["(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}"],["80\\d{7}"],0,0,0,0,0,["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]],ZA:["27","00","[1-79]\\d{8}|8\\d{4,9}",[5,6,7,8,9,10],[["(\\d{2})(\\d{3,4})","$1 $2",["8[1-4]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["8[1-4]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["860"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],"0"],ZM:["260","00","800\\d{6}|(?:21|[579]\\d|63)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[28]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[579]"],"0$1"]],"0"],ZW:["263","00","(?:13|8\\d{4})\\d{5}|[235-8]\\d{8}|[2-689]\\d{6}",[7,9,10],[["(\\d{2})(\\d{3,5})","$1 $2",["1|2(?:0[0-36-9]|29|58)|67[0-46-9]|(?:55|68)[0-69]"],"0$1"],["(\\d{3})(\\d{3,5})","$1 $2",["2(?:0[45]|[27]|48)|37|675|(?:55|68)[78]"],"0$1"],["(\\d)(\\d{3})(\\d{2,4})","$1 $2 $3",["[49]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["80"],"0$1"],["(\\d{4})(\\d{3,5})","$1 $2",["548"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["29[013-9]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[256]|39|8[13-59]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["3"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["8"],"0$1"]],"0"]},nonGeographic:{800:["800",0,"(?:00|[1-9]\\d)\\d{6}",[8],[["(\\d{4})(\\d{4})","$1 $2",["\\d"]]],0,0,0,0,0,0,[0,0,["(?:00|[1-9]\\d)\\d{6}"]]],808:["808",0,"[1-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[1-9]"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,0,["[1-9]\\d{7}"]]],870:["870",0,"7\\d{11}|[235-7]\\d{8}",[9,12],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235-7]"]]],0,0,0,0,0,0,[0,["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"],0,0,0,0,0,0,["2\\d{8}",[9]]]],878:["878",0,"10\\d{10}",[12],[["(\\d{2})(\\d{5})(\\d{5})","$1 $2 $3",["1"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,["10\\d{10}"]]],881:["881",0,"6\\d{9}|[0-36-9]\\d{8}",[9,10],[["(\\d)(\\d{3})(\\d{5})","$1 $2 $3",["[0-37-9]"]],["(\\d)(\\d{3})(\\d{5,6})","$1 $2 $3",["6"]]],0,0,0,0,0,0,[0,["6\\d{9}|[0-36-9]\\d{8}"]]],882:["882",0,"[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?",[7,8,9,10,11,12],[["(\\d{2})(\\d{5})","$1 $2",["16|342"]],["(\\d{2})(\\d{6})","$1 $2",["49"]],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["1[36]|9"]],["(\\d{2})(\\d{4})(\\d{3})","$1 $2 $3",["3[23]"]],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["16"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|23|3(?:[15]|4[57])|4|5[12]"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["34"]],["(\\d{2})(\\d{4,5})(\\d{5})","$1 $2 $3",["[1-35]"]]],0,0,0,0,0,0,[0,["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|5(?:0\\d{3}|2[0-2]))\\d{7}",[7,8,9,10,12]],0,0,0,["348[57]\\d{7}",[11]],0,0,["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]],883:["883",0,"(?:[1-4]\\d|51)\\d{6,10}",[8,9,10,11,12],[["(\\d{3})(\\d{3})(\\d{2,8})","$1 $2 $3",["[14]|2[24-689]|3[02-689]|51[24-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["510"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["21"]],["(\\d{4})(\\d{4})(\\d{4})","$1 $2 $3",["51[13]"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[235]"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]],888:["888",0,"\\d{11}",[11],[["(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3"]],0,0,0,0,0,0,[0,0,0,0,0,0,["\\d{11}"]]],979:["979",0,"[1359]\\d{8}",[9],[["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[1359]"]]],0,0,0,0,0,0,[0,0,0,["[1359]\\d{8}"]]]}};function p0(e,t){var n=Array.prototype.slice.call(t);return n.push(f2),e.apply(this,n)}function Cd(e,t){e=e.split("-"),t=t.split("-");for(var n=e[0].split("."),r=t[0].split("."),a=0;a<3;a++){var o=Number(n[a]),s=Number(r[a]);if(o>s)return 1;if(s>o)return-1;if(!isNaN(o)&&isNaN(s))return 1;if(isNaN(o)&&!isNaN(s))return-1}return e[1]&&t[1]?e[1]>t[1]?1:e[1]<t[1]?-1:0:!e[1]&&t[1]?1:e[1]&&!t[1]?-1:0}var h2={}.constructor;function Ka(e){return e!=null&&e.constructor===h2}var m2=/^\d+$/;function g2(e){return m2.test(e)}function Hn(e){"@babel/helpers - typeof";return Hn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hn(e)}function ca(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x2(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,w2(r.key),r)}}function ua(e,t,n){return t&&x2(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function w2(e){var t=v2(e,"string");return Hn(t)=="symbol"?t:t+""}function v2(e,t){if(Hn(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Hn(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var y2="1.2.0",$2="1.7.35",Ed=" ext. ",f0=function(){function e(t){ca(this,e),A2(t),this.metadata=t,h0.call(this,t)}return ua(e,[{key:"getCountries",value:function(){return Object.keys(this.metadata.countries).filter(function(n){return n!=="001"})}},{key:"getCountryMetadata",value:function(n){return this.metadata.countries[n]}},{key:"nonGeographic",value:function(){if(!(this.v1||this.v2||this.v3))return this.metadata.nonGeographic||this.metadata.nonGeographical}},{key:"hasCountry",value:function(n){return this.getCountryMetadata(n)!==void 0}},{key:"hasCallingCode",value:function(n){if(this.getCountryCodesForCallingCode(n))return!0;if(this.nonGeographic()){if(this.nonGeographic()[n])return!0}else{var r=this.countryCallingCodes()[n];if(r&&r.length===1&&r[0]==="001")return!0}}},{key:"isNonGeographicCallingCode",value:function(n){return this.nonGeographic()?!!this.nonGeographic()[n]:!this.getCountryCodesForCallingCode(n)}},{key:"country",value:function(n){return this.selectNumberingPlan(n)}},{key:"selectNumberingPlan",value:function(n,r){var a,o;if(n&&(g2(n)?o=n:a=n),r&&(o=r),a&&a!=="001"){var s=this.getCountryMetadata(a);if(!s)throw new Error("Unknown country: ".concat(a));this.numberingPlan=new Td(s,this)}else if(o){if(!this.hasCallingCode(o))throw new Error("Unknown calling code: ".concat(o));this.numberingPlan=new Td(this.getNumberingPlanMetadata(o),this)}else this.numberingPlan=void 0;return this}},{key:"getCountryCodesForCallingCode",value:function(n){var r=this.countryCallingCodes()[n];if(r)return r.length===1&&r[0].length===3?void 0:r}},{key:"getCountryCodeForCallingCode",value:function(n){var r=this.getCountryCodesForCallingCode(n);if(r)return r[0]}},{key:"getNumberingPlanMetadata",value:function(n){var r=this.getCountryCodeForCallingCode(n);if(r)return this.getCountryMetadata(r);if(this.nonGeographic()){var a=this.nonGeographic()[n];if(a)return a}else{var o=this.countryCallingCodes()[n];if(o&&o.length===1&&o[0]==="001")return this.metadata.countries["001"]}}},{key:"countryCallingCode",value:function(){return this.numberingPlan.callingCode()}},{key:"IDDPrefix",value:function(){return this.numberingPlan.IDDPrefix()}},{key:"defaultIDDPrefix",value:function(){return this.numberingPlan.defaultIDDPrefix()}},{key:"nationalNumberPattern",value:function(){return this.numberingPlan.nationalNumberPattern()}},{key:"possibleLengths",value:function(){return this.numberingPlan.possibleLengths()}},{key:"formats",value:function(){return this.numberingPlan.formats()}},{key:"nationalPrefixForParsing",value:function(){return this.numberingPlan.nationalPrefixForParsing()}},{key:"nationalPrefixTransformRule",value:function(){return this.numberingPlan.nationalPrefixTransformRule()}},{key:"leadingDigits",value:function(){return this.numberingPlan.leadingDigits()}},{key:"hasTypes",value:function(){return this.numberingPlan.hasTypes()}},{key:"type",value:function(n){return this.numberingPlan.type(n)}},{key:"ext",value:function(){return this.numberingPlan.ext()}},{key:"countryCallingCodes",value:function(){return this.v1?this.metadata.country_phone_code_to_countries:this.metadata.country_calling_codes}},{key:"chooseCountryByCountryCallingCode",value:function(n){return this.selectNumberingPlan(n)}},{key:"hasSelectedNumberingPlan",value:function(){return this.numberingPlan!==void 0}}])}(),Td=function(){function e(t,n){ca(this,e),this.globalMetadataObject=n,this.metadata=t,h0.call(this,n.metadata)}return ua(e,[{key:"callingCode",value:function(){return this.metadata[0]}},{key:"_getDefaultCountryMetadataForThisCallingCode",value:function(){return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode())}},{key:"getDefaultCountryMetadataForRegion",value:function(){return this._getDefaultCountryMetadataForThisCallingCode()}},{key:"IDDPrefix",value:function(){if(!(this.v1||this.v2))return this.metadata[1]}},{key:"defaultIDDPrefix",value:function(){if(!(this.v1||this.v2))return this.metadata[12]}},{key:"nationalNumberPattern",value:function(){return this.v1||this.v2?this.metadata[1]:this.metadata[2]}},{key:"possibleLengths",value:function(){if(!this.v1)return this.metadata[this.v2?2:3]}},{key:"_getFormats",value:function(n){return n[this.v1?2:this.v2?3:4]}},{key:"formats",value:function(){var n=this,r=this._getFormats(this.metadata)||this._getFormats(this._getDefaultCountryMetadataForThisCallingCode())||[];return r.map(function(a){return new b2(a,n)})}},{key:"nationalPrefix",value:function(){return this.metadata[this.v1?3:this.v2?4:5]}},{key:"_getNationalPrefixFormattingRule",value:function(n){return n[this.v1?4:this.v2?5:6]}},{key:"nationalPrefixFormattingRule",value:function(){return this._getNationalPrefixFormattingRule(this.metadata)||this._getNationalPrefixFormattingRule(this._getDefaultCountryMetadataForThisCallingCode())}},{key:"_nationalPrefixForParsing",value:function(){return this.metadata[this.v1?5:this.v2?6:7]}},{key:"nationalPrefixForParsing",value:function(){return this._nationalPrefixForParsing()||this.nationalPrefix()}},{key:"nationalPrefixTransformRule",value:function(){return this.metadata[this.v1?6:this.v2?7:8]}},{key:"_getNationalPrefixIsOptionalWhenFormatting",value:function(){return!!this.metadata[this.v1?7:this.v2?8:9]}},{key:"nationalPrefixIsOptionalWhenFormattingInNationalFormat",value:function(){return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata)||this._getNationalPrefixIsOptionalWhenFormatting(this._getDefaultCountryMetadataForThisCallingCode())}},{key:"leadingDigits",value:function(){return this.metadata[this.v1?8:this.v2?9:10]}},{key:"types",value:function(){return this.metadata[this.v1?9:this.v2?10:11]}},{key:"hasTypes",value:function(){return this.types()&&this.types().length===0?!1:!!this.types()}},{key:"type",value:function(n){if(this.hasTypes()&&Id(this.types(),n))return new k2(Id(this.types(),n),this)}},{key:"ext",value:function(){return this.v1||this.v2?Ed:this.metadata[13]||Ed}}])}(),b2=function(){function e(t,n){ca(this,e),this._format=t,this.metadata=n}return ua(e,[{key:"pattern",value:function(){return this._format[0]}},{key:"format",value:function(){return this._format[1]}},{key:"leadingDigitsPatterns",value:function(){return this._format[2]||[]}},{key:"nationalPrefixFormattingRule",value:function(){return this._format[3]||this.metadata.nationalPrefixFormattingRule()}},{key:"nationalPrefixIsOptionalWhenFormattingInNationalFormat",value:function(){return!!this._format[4]||this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()}},{key:"nationalPrefixIsMandatoryWhenFormattingInNationalFormat",value:function(){return this.usesNationalPrefix()&&!this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()}},{key:"usesNationalPrefix",value:function(){return!!(this.nationalPrefixFormattingRule()&&!j2.test(this.nationalPrefixFormattingRule()))}},{key:"internationalFormat",value:function(){return this._format[5]||this.format()}}])}(),j2=/^\(?\$1\)?$/,k2=function(){function e(t,n){ca(this,e),this.type=t,this.metadata=n}return ua(e,[{key:"pattern",value:function(){return this.metadata.v1?this.type:this.type[0]}},{key:"possibleLengths",value:function(){if(!this.metadata.v1)return this.type[1]||this.metadata.possibleLengths()}}])}();function Id(e,t){switch(t){case"FIXED_LINE":return e[0];case"MOBILE":return e[1];case"TOLL_FREE":return e[2];case"PREMIUM_RATE":return e[3];case"PERSONAL_NUMBER":return e[4];case"VOICEMAIL":return e[5];case"UAN":return e[6];case"PAGER":return e[7];case"VOIP":return e[8];case"SHARED_COST":return e[9]}}function A2(e){if(!e)throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");if(!Ka(e)||!Ka(e.countries))throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(Ka(e)?"an object of shape: { "+Object.keys(e).join(", ")+" }":"a "+S2(e)+": "+e,"."))}var S2=function(t){return Hn(t)};function N2(e,t){var n=new f0(t);if(n.hasCountry(e))return n.selectNumberingPlan(e).countryCallingCode();throw new Error("Unknown country: ".concat(e))}function h0(e){var t=e.version;typeof t=="number"?(this.v1=t===1,this.v2=t===2,this.v3=t===3,this.v4=t===4):t?Cd(t,y2)===-1?this.v2=!0:Cd(t,$2)===-1?this.v3=!0:this.v4=!0:this.v1=!0}function C2(e){return new f0(e).getCountries()}function E2(){return p0(C2,arguments)}function T2(){return p0(N2,arguments)}const I2="https://stacks-admin.onrender.com",L2=new Intl.DisplayNames(["en"],{type:"region"}),P2=e=>e.toUpperCase().replace(/./g,t=>String.fromCodePoint(127397+t.charCodeAt(0)));function R2(e){try{return L2.of(e)||e}catch{return e}}function Ya(){return i.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[i.jsx("path",{d:"M1.7 12s3.4-7 10.3-7 10.3 7 10.3 7-3.4 7-10.3 7S1.7 12 1.7 12Z"}),i.jsx("circle",{cx:"12",cy:"12",r:"3.1"})]})}function M2({message:e}){return i.jsx("div",{className:"register-message-overlay",children:i.jsx("div",{className:"register-message",children:e})})}function z2(){return i.jsx("div",{className:"register-spinner-overlay",children:i.jsx("div",{className:"register-spinner"})})}function O2(){const e=ie(),[t,n]=h.useState({username:"",email:"",phone:"",withdrawalPassword:"",password:"",confirmPassword:"",gender:"Male",inviteCode:"",agreed:!0}),[r,a]=h.useState("UG"),[o,s]=h.useState(""),[l,d]=h.useState(!1),[c,m]=h.useState(""),[p,x]=h.useState(!1),[w,y]=h.useState(!1),[b,j]=h.useState({withdrawalPassword:!1,password:!1,confirmPassword:!1}),f=h.useMemo(()=>E2().map(v=>({code:v,name:R2(v),flag:P2(v),dialCode:`+${T2(v)}`})).sort((v,I)=>v.name.localeCompare(I.name)),[]),u=h.useMemo(()=>{const v=o.trim().toLowerCase();return v?f.filter(I=>I.name.toLowerCase().includes(v)||I.code.toLowerCase().includes(v)||I.dialCode.includes(v)):f},[f,o]),g=f.find(v=>v.code===r)||f.find(v=>v.code==="UG")||f[0],$=v=>{const{name:I,value:L,type:W,checked:se}=v.target;n(fe=>({...fe,[I]:W==="checkbox"?se:L}))},A=v=>{j(I=>({...I,[v]:!I[v]}))},E=v=>{a(v.code),d(!1),s("")},N=async v=>{if(v.preventDefault(),!t.agreed){m("Please agree to the Terms and Conditions.");return}if(t.password!==t.confirmPassword){m("Passwords do not match.");return}try{const I=await fetch(`${I2}/api/users/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t.username,email:t.email,phone:t.phone,country:g.code,dialCode:g.dialCode,loginPassword:t.password,withdrawalPassword:t.withdrawalPassword,gender:t.gender,inviteCode:t.inviteCode})}),L=await I.json();I.ok&&L.success?(L.user&&(localStorage.setItem("currentUser",JSON.stringify(L.user)),localStorage.setItem("user",L.user.username||""),L.user.token&&localStorage.setItem("authToken",L.user.token)),m("Register Success")):m(L.message||"Registration failed.")}catch(I){console.error("Registration failed:",I),m("Server error. Please try again later.")}};return h.useEffect(()=>{if(!c)return;const v=setTimeout(()=>{c==="Register Success"?(m(""),x(!0)):m("")},1e3);return()=>clearTimeout(v)},[c]),h.useEffect(()=>{if(!p)return;const v=setTimeout(()=>{x(!1),e("/dashboard")},500);return()=>clearTimeout(v)},[p,e]),h.useEffect(()=>{if(!l)return;const v=I=>{I.target.closest(".country-picker")||d(!1)};return document.addEventListener("mousedown",v),()=>{document.removeEventListener("mousedown",v)}},[l]),i.jsxs("div",{className:"register-page",children:[c&&i.jsx(M2,{message:c}),p&&i.jsx(z2,{}),i.jsxs("main",{className:"register-container",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"register-logo"}),i.jsx("h1",{className:"register-welcome",children:"WELCOME TO"}),i.jsx("h2",{className:"register-heading",children:"REGISTER TO JOIN US"}),i.jsxs("form",{className:"register-form",onSubmit:N,children:[i.jsx("div",{className:"register-field",children:i.jsx("input",{name:"username",type:"text",placeholder:"Username",value:t.username,onChange:$,required:!0,autoComplete:"username"})}),i.jsx("div",{className:"register-field",children:i.jsx("input",{name:"email",type:"email",placeholder:"Email",value:t.email,onChange:$,required:!0,autoComplete:"email"})}),i.jsxs("div",{className:"register-field phone-field",children:[i.jsxs("div",{className:"country-picker",children:[i.jsxs("button",{type:"button",className:"country-picker-button",onClick:()=>d(v=>!v),"aria-expanded":l,"aria-label":"Select country",children:[i.jsx("span",{className:"country-flag",children:g==null?void 0:g.flag}),i.jsx("span",{className:"country-chevron"})]}),l&&i.jsxs("div",{className:"country-menu",children:[i.jsx("div",{className:"country-search-wrapper",children:i.jsx("input",{type:"search",value:o,onChange:v=>s(v.target.value),placeholder:"Search country",className:"country-search",autoFocus:!0})}),i.jsxs("div",{className:"country-options",children:[u.map(v=>i.jsxs("button",{type:"button",className:`country-option ${v.code===r?"selected":""}`,onClick:()=>E(v),children:[i.jsx("span",{className:"country-option-flag",children:v.flag}),i.jsx("span",{className:"country-option-name",children:v.name}),i.jsx("span",{className:"country-option-code",children:v.dialCode})]},`${v.code}-${v.dialCode}`)),u.length===0&&i.jsx("div",{className:"country-empty",children:"No countries found"})]})]})]}),i.jsx("input",{name:"phone",type:"tel",placeholder:"Enter a phone number",value:t.phone,onChange:$,required:!0,autoComplete:"tel"})]}),i.jsxs("div",{className:"register-field password-field",children:[i.jsx("input",{name:"withdrawalPassword",type:b.withdrawalPassword?"text":"password",placeholder:"Transaction Password",value:t.withdrawalPassword,onChange:$,required:!0,autoComplete:"new-password"}),i.jsx("button",{type:"button",className:"toggle-password",onClick:()=>A("withdrawalPassword"),"aria-label":"Toggle transaction password visibility",children:i.jsx(Ya,{})})]}),i.jsxs("div",{className:"register-field password-field",children:[i.jsx("input",{name:"password",type:b.password?"text":"password",placeholder:"Login Password",value:t.password,onChange:$,required:!0,autoComplete:"new-password"}),i.jsx("button",{type:"button",className:"toggle-password",onClick:()=>A("password"),"aria-label":"Toggle login password visibility",children:i.jsx(Ya,{})})]}),i.jsxs("div",{className:"register-field password-field",children:[i.jsx("input",{name:"confirmPassword",type:b.confirmPassword?"text":"password",placeholder:"Confirm Login Password",value:t.confirmPassword,onChange:$,required:!0,autoComplete:"new-password"}),i.jsx("button",{type:"button",className:"toggle-password",onClick:()=>A("confirmPassword"),"aria-label":"Toggle confirmation password visibility",children:i.jsx(Ya,{})})]}),i.jsxs("div",{className:"register-field gender-field",children:[i.jsx("span",{className:"gender-title",children:"Gender"}),i.jsxs("div",{className:"gender-options",children:[i.jsxs("label",{className:"gender-option",children:[i.jsx("input",{type:"radio",name:"gender",value:"Male",checked:t.gender==="Male",onChange:$}),i.jsx("span",{className:"gender-radio"}),i.jsx("span",{children:"Male"})]}),i.jsxs("label",{className:"gender-option",children:[i.jsx("input",{type:"radio",name:"gender",value:"Female",checked:t.gender==="Female",onChange:$}),i.jsx("span",{className:"gender-radio"}),i.jsx("span",{children:"Female"})]})]})]}),i.jsx("div",{className:"register-field",children:i.jsx("input",{name:"inviteCode",type:"text",placeholder:"Invite Code",value:t.inviteCode,onChange:$,autoComplete:"off"})}),i.jsxs("label",{className:"terms-row",children:[i.jsx("input",{type:"checkbox",name:"agreed",checked:t.agreed,onChange:$}),i.jsx("span",{className:"terms-checkbox"}),i.jsx("span",{children:"Accept ours"}),i.jsx(yr,{to:"/terms",className:"terms-link",children:"Terms and Conditions"})]}),i.jsx("button",{type:"submit",className:"register-submit",children:"Submit"})]}),i.jsxs("p",{className:"register-agreement",children:["By signing up, you agree to our ",i.jsx(yr,{to:"/terms",children:"Terms and Conditions"})]}),i.jsxs("p",{className:"register-login-link",children:["Already have an account? ",i.jsx(yr,{to:"/login",children:"Login"})]})]}),i.jsx("button",{type:"button",className:"register-support-button",onClick:()=>y(!0),"aria-label":"Open customer support",children:"?"}),i.jsx(ge,{open:w,onClose:()=>y(!1)})]})}const ze="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAA3XAAAN1wFCKJt4AAABC0lEQVRoge3bPUrFQABF4ZNYaWOjYOFS3ImF9YCVjVNaSVYh7kOwt/UVNm7iLUBGhBcQCWPnM/feA9OlmI9AAvMztNZwasSscd8TUO4SeAKOMKgAH8DXB+NZHV120O9DFl0WsPN4wAj7DpwjVAmWYFdfccJed7BvatjawW6AU4SqwRLs6qvBEuzqq07Yuw72BThBqOkX7DFCTcES7Oqb1LHDD+xt59lHYIvBm21iAydsG932lw52+z2HwAUGDa4fLZvf0lJBEzRBK3XfQb+qrXZYLvHMBU3QBK1UDZqgN8AZgt04ne+wPNQyFzRBE7RSxen4sOUB8SW0PHbu6j9c8hhyUUu8cd8T+Os+AQmryQRMsYvWAAAAAElFTkSuQmCC",D2=`
  html, body, #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  .tc-page {
    min-height: 100vh;
    overflow-x: hidden;
    background: #d4d4d4;
    color: #000000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  .tc-page *,
  .tc-page *::before,
  .tc-page *::after {
    box-sizing: border-box;
  }

  .tc-page button {
    font-family: inherit;
  }

  .tc-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid #dddddd;
    background: #ffffff;
  }

  .tc-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
  }

  .tc-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .tc-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 0;
    border-radius: 40px;
    color: #ffffff;
    background: #000000;
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    font-weight: 500;
    cursor: pointer;
  }

  .tc-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(34px, 5vw, 64px);
    height: clamp(26px, 3.5vw, 44px);
    padding: 4px 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .tc-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: #000000;
  }

  .tc-body {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding-top: 0;
    padding-bottom: 80px;
  }

  .tc-title-row {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60px;
    margin: 22px 0 18px;
  }

  .tc-back {
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .tc-back img {
    width: 22px;
    height: 22px;
    object-fit: contain;
    display: block;
  }

  .tc-title-row h1 {
    margin: 0;
    font-size: clamp(2.3rem, 4vw, 3.4rem);
    font-weight: 500;
    letter-spacing: -0.06em;
    text-align: center;
    color: #000000;
  }

  .tc-intro {
    margin: 0 0 28px;
    font-size: clamp(1.05rem, 1.7vw, 1.6rem);
    line-height: 1.42;
    letter-spacing: -0.04em;
    color: #000000;
    font-weight: 400;
  }

  .tc-section {
    margin-top: 16px;
  }

  .tc-section h2 {
    margin: 0 0 14px;
    font-size: clamp(1.2rem, 1.9vw, 2.1rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #000000;
  }

  .tc-section p {
    margin: 0 0 14px;
    font-size: clamp(1.05rem, 1.7vw, 1.6rem);
    line-height: 1.42;
    letter-spacing: -0.04em;
    color: #000000;
    font-weight: 400;
  }

  .tc-section ul {
    margin: 0 0 14px 28px;
    padding: 0;
    font-size: clamp(1.05rem, 1.7vw, 1.6rem);
    line-height: 1.42;
    color: #000000;
  }

  .tc-section ul li {
    margin-bottom: 8px;
  }

  .tc-final {
    margin-top: 24px;
    font-size: clamp(1.05rem, 1.7vw, 1.6rem);
    line-height: 1.42;
    letter-spacing: -0.04em;
    color: #000000;
    font-weight: 600;
    text-align: right;
  }

  @media (max-width: 700px) {
    .tc-header {
      display: flex;
      min-height: 72px;
      padding: 12px 14px;
    }

    .tc-logo {
      width: 180px;
      height: 34px;
      max-width: 58%;
    }

    .tc-header-actions {
      gap: 9px;
    }

    .tc-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .tc-menu {
      width: 28px;
      height: 24px;
    }

    .tc-menu span {
      height: 2px;
    }

    .tc-body {
      width: calc(100% - 36px);
      margin: 0 auto;
    }

    .tc-title-row {
      min-height: 46px;
      margin: 10px 0 16px;
    }

    .tc-back {
      width: 34px;
      height: 34px;
    }

    .tc-back img {
      width: 20px;
      height: 20px;
    }

    .tc-title-row h1 {
      font-size: 2rem;
    }

    .tc-intro {
      font-size: 1.05rem;
      line-height: 1.45;
      margin-bottom: 22px;
    }

    .tc-section h2 {
      font-size: 1.4rem;
      margin-bottom: 12px;
    }

    .tc-section p {
      font-size: 1.05rem;
      line-height: 1.45;
      margin-bottom: 12px;
    }

    .tc-final {
      font-size: 1.05rem;
      margin-top: 18px;
    }
  }
`;function B2(){const e=ie(),[t,n]=h.useState(!1);return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:D2}),i.jsxs("div",{className:"tc-page",children:[i.jsxs("header",{className:"tc-header",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"tc-logo"}),i.jsxs("div",{className:"tc-header-actions",children:[i.jsx("button",{type:"button",className:"tc-contact",onClick:()=>n(!0),children:"Contact"}),i.jsxs("button",{type:"button",className:"tc-menu",onClick:()=>e("/profile"),"aria-label":"Open profile menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]})]}),i.jsxs("main",{className:"tc-body",children:[i.jsxs("div",{className:"tc-title-row",children:[i.jsx("button",{type:"button",className:"tc-back",onClick:()=>e(-1),"aria-label":"Go back",children:i.jsx("img",{src:ze,alt:"Back"})}),i.jsx("h1",{children:"T&Cs"})]}),i.jsx("h2",{style:{fontSize:"clamp(1.5rem, 2.2vw, 2.4rem)",fontWeight:"600",letterSpacing:"-0.06em",marginBottom:"18px"},children:"Terms & Conditions"}),i.jsx("p",{className:"tc-intro",children:"These Terms and Conditions are governed by the following terminology and principles of interpretation. All users are required to adhere to the terms outlined by the platform. Any violations will result in corrective actions and penalties imposed by the platform. The User Agreement, which is part of these Terms and Conditions, is subject to the platform's final interpretation."}),i.jsxs("section",{className:"tc-section",children:[i.jsx("h2",{children:"1. Start to Submit Product Data"}),i.jsxs("p",{children:[i.jsx("strong",{children:"1.1"})," A minimum account balance of 50 USD is required to initiate the first set of 40 product submissions."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"1.2"})," A minimum deposit of 100 USD is required to reset and begin the new daily product submission process."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"1.3"})," Users must complete the current dataset before requesting a reset for the next set of submissions."]})]}),i.jsxs("section",{className:"tc-section",children:[i.jsx("h2",{children:"2. Withdrawal"}),i.jsxs("p",{children:[i.jsx("strong",{children:"2.1"})," Withdrawal amount is based on the VIP level of the account, if withdrawals exceeding the amount require an upgrade to the appropriate membership level, as each level is subject to different withdrawal limits."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"2.2"})," Users are required to complete two sets of product submissions per day in order to submit a withdrawal request. Additionally, users must request the withdrawal of their full account balance."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"2.3"})," Users who abandon or quit during the product submission process are ineligible to apply for a withdrawal or refund."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"2.4"})," If a withdrawal request has not been formally submitted by the user, the platform cannot process any withdrawal on the user's behalf."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"2.5"})," All members apply for withdrawal of more than 20,000 USD for the first time need to contact online customer service to process it to ensure the safety of all members' transfer funds."]})]}),i.jsxs("section",{className:"tc-section",children:[i.jsx("h2",{children:"3. Funds"}),i.jsxs("p",{children:[i.jsx("strong",{children:"3.1"})," All user funds will be securely stored in their account and may be withdrawn in full once all product submissions are completed."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"3.2"})," To avoid any loss of funds, all data processing will be handled by the system, not manually."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"3.3"})," In case of accidental loss of funds, the platform will assume full responsibility."]})]}),i.jsxs("section",{className:"tc-section",children:[i.jsx("h2",{children:"4. Account Security"}),i.jsxs("p",{children:[i.jsx("strong",{children:"4.1"})," Users must not share their login passwords or security PIN with others. If this results in a loss, the platform will not be responsible."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"4.2"})," It is not recommended to set easily identifiable information, such as birthdates, ID card numbers, or phone numbers, as security codes or login passwords."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"4.3"})," If users forget their login or withdrawal passwords, they should contact customer service to reset them."]})]}),i.jsxs("section",{className:"tc-section",children:[i.jsx("h2",{children:"5. Normal Product"}),i.jsxs("p",{children:[i.jsx("strong",{children:"5.1"})," VIP 1 users can complete 2 sets of product submissions per day with a 0.5% commission for each normal product data."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"5.2"})," VIP 2 users can complete 2 sets of product submissions per day with a 1.0% commission for each normal product data."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"5.3"})," VIP 3 users can complete 2 sets of product submissions per day with a 1.5% commission for each normal product data."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"5.4"})," VIP 4 users can complete 2 sets of product submissions per day with a 2.0% commission for each normal product data."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"5.5"})," VIP 5 users can complete 2 sets of product submissions per day with a 2.5% commission for each normal product data."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"5.6"})," Upon successful submission of product data, the commission will be automatically credited to the user's account balance."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"5.7"})," The system will randomly assign product data to the user's account based on their account balance."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"5.8"})," Once the data is assigned to the user's account, it cannot be canceled, skipped, or exchanged."]})]}),i.jsxs("section",{className:"tc-section",children:[i.jsx("h2",{children:"6. Merged Product"}),i.jsxs("p",{children:[i.jsx("strong",{children:"6.1"})," Merged product consists of 2 to 3 product data sets. Users may not necessarily receive 3 product data sets; the system will randomly assign product data within the merged product, with a higher likelihood of receiving 1 product data set."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"6.2"})," Users will earn ten times the commission for each product in the merged product compared to normal product data."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"6.3"})," Upon receiving merged product, all funds will be placed on hold until the submission of each pending merged product is completed. These funds will be returned to the user's account after the submissions are finalized."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"6.4"})," The system will randomly assign merged product to the user's account based on the total balance in the user's account."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"6.5"})," Once merged product is assigned to the user's account, it cannot be canceled, skipped, or exchanged."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"6.6"})," A user can receive a maximum of 3 merged product sets per set of product submission."]})]}),i.jsxs("section",{className:"tc-section",children:[i.jsx("h2",{children:"7. Advance Payments"}),i.jsxs("p",{children:[i.jsx("strong",{children:"7.1"})," The amount for advance payment is determined by the user. The platform does not set specific amounts for the user, but recommends users make advance payments based on their financial capacity or after becoming familiar with the platform."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"7.2"})," If a user needs to make an advance payment upon receiving merged product, it is advised that the user pays according to the negative balance indicated in their account."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"7.3"})," Before making an advance payment, users must contact customer service to request advance payment details and confirm the merchant's wallet address."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"7.4"})," The platform will not assume responsibility for any loss resulting from payments made to incorrect wallet addresses."]})]}),i.jsxs("section",{className:"tc-section",children:[i.jsx("h2",{children:"8. Merchant Cooperation"}),i.jsxs("p",{children:[i.jsx("strong",{children:"8.1"})," Data availability on the platform fluctuates. If product is not processed in a timely manner, merchants may be unable to offload it, affecting their progress. Users are encouraged to complete their submissions and apply for withdrawals promptly to avoid hindering merchant progress. Users must complete all submissions within 24 hours to avoid complaints from merchants and order freezes."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"8.2"})," Merchants will provide users with wallet addresses to facilitate advance payments."]})]}),i.jsxs("section",{className:"tc-section",children:[i.jsx("h2",{children:"9. Invitation"}),i.jsxs("p",{children:[i.jsx("strong",{children:"9.1"})," Users may invite other users to the platform using the invitation code linked to their account."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"9.2"})," Referral invitations are limited to once per user per month."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"9.3"})," To be eligible to use an invitation code to invite referrals, a user must first complete 15 days of work after registration."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"9.4"})," Referrers will receive 20% of the referee's daily earnings as a commission."]})]}),i.jsxs("section",{className:"tc-section",children:[i.jsx("h2",{children:"10. Credit Score"}),i.jsxs("p",{children:[i.jsx("strong",{children:"10.1"})," Users must complete all sets of product data submissions to maintain a 100% credit score."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"10.2"})," Failure to complete the submissions will result in a decrease in the user's credit score."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"10.3"})," The credit score is determined by the number of incomplete orders and the timeliness of their completion."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"10.4"})," A decrease in credit score may affect a user's ability to request withdrawals."]})]}),i.jsxs("section",{className:"tc-section",children:[i.jsx("h2",{children:"11. Operating Hours"}),i.jsxs("p",{children:[i.jsx("strong",{children:"11.1"})," The platform operates from 10:00 - 23:00 (EST)."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"11.2"})," Customer service is available from 10:00 - 23:00 (EST)."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"11.3"})," Platform withdrawal hours are from 10:00 - 23:00 (EST)."]})]}),i.jsx("p",{className:"tc-final",children:"The final right of interpretation belongs to Instrument."})]}),i.jsx(ge,{open:t,onClose:()=>n(!1)})]})]})}const m0="/Dept/assets/INSTRUMENT%20clicp-Ci3Pcqlp.mp4",F2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANPSURBVHgB7ZlNUhNBGIbfSSKlK4eyLLfNj1WWJVTcuQwnEE8AnkDcuQueADxBwgnwBsgJiIAWloC9VRd0uQRnxreHMcxMJtjzl4lFnoJKpTOdfG9Pf389wIQJNxsLBdIUwnZrWLEstPRbDxDwIPkr6/sncgslUIgA3/AG1mjsK761Ey5RFDCNEmggJ8150XI9dGi8uOYyGyVRQw4W58Uajd8BrjW+VDILoPHrXPWNhI8URa1jRGQSEBjfjo97HjZ/OZg5PJVvMSJS+8AQ45XnYPlAyl2MmFQCmg9F03VjxjNMnrtYOpJSogKMt1DzkRA0fjs2rKo0XhO5A9pI7wIdJqAmYqHPvRiczOteZjV+YVasMuFt8EtUnkTXvwP+Cl9gj0a1YBC3daQ5OJHvkREa3/Z/x/JDcHdxTqwgA30BXPnLLzSB+76ASBP/rc3H9DGk5EoAsGo0I3Ba5IQh93VsyG44Az72T4ZGIe7JQgu9OAensks/0Fup0x/kdlqcFe39FHc3VymRFy1CJ7/IoMWiMAWVCtDUXejVVqEh+wkLRNP5lQvoSanoV93wWM3Fc9P5lQvQeBbiJUgLhoyFgLqDXmTAMi/Px0JAbzCbGzdAYyEgD2MhgD21iA0pGDIWApw6IiUEq4Ke6dyxEEAjImHT8v4jAX4JH6vDPBfGVW7lAoIqODQAmaY1HVrMJTjWX5SfPQtAH8uwFlqNDFrpTjTCArRR/fjr1vFtyBzFWuXF4bH8gBzojmzgWIarz0o0VWdWC03uGs6xWat09HEichB0ZBGy9Bl9AedTeMcXaTSLqZ6HuG3kI7IADh05S3/dF3DE2ee3sMSI0MVlGJOx/+i+Z93O5iNV7R4m6Mik/l5t/KeMTb1x1+WfQNexh9g56O8ann7+KgfiNpt0L/y+rA7POIzqyKPvEGJ3ouFiJ0szXhSp8oDeZonNOEUszIllVEDqRKb72ITTZ5v7Y5s+sXFN/iiFOjLw40zt3p+2ETxKusLCM3ZXyw/u2fppTOSz72eqlBPrXI6lM+mQZwQDVO7ESewfy0069gxM80cJ5C7mtGNzdWcCv5CJF3nlCczkA0lov7hz196asvBFb0z+3cZltlWOhTc/z9RHTJgwoXD+ABjUOH0ChJedAAAAAElFTkSuQmCC",U2="/Dept/assets/Event-06ac9e70-Dw13vn6H.png",_2="/Dept/assets/TC-43047a64-VMCNvHO4.png",W2="/Dept/assets/Certificate-764a13af-aRnTEOL5.png",G2="/Dept/assets/FAQs-93891c56-DLWT7Os7.png",Q2="/Dept/assets/About-453ef9ca-ClhkjSfd.png",H2="/Dept/assets/Vip-5ce36f29-BpZIpg_S.png",V2="/Dept/assets/special-reward-B5wsRA5R.png",K2="/Dept/assets/alphasense-DKtkmwax.jpg",Y2="/Dept/assets/feeled-DrxB-ThX.jpg",q2="/Dept/assets/oura-Bxd4RaOa.jpg",J2="/Dept/assets/perfected-B8PjFVlV.jpg",X2="/Dept/assets/service-1-XRqmdQCa.jpg",Z2="/Dept/assets/service-2-DABm0f-g.jpg",eh="/Dept/assets/service-3-DLDcsEg9.jpg",th="/Dept/assets/service-4-D_b-mk7I.jpg",nh="/Dept/assets/service-5-CLWqiK_H.jpg",rh="/Dept/assets/service-6-CFOMzERc.jpg",Zs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAETklEQVR4nO3dP4gUZxjH8d8kmsIiVmeR2BlLSbAxYBotEhtPCHZiIKWpUlpZWFlFUlkkxMoiYkAOwfMMBkHyp1IuXTAaiKkCAS0UjPEbXvY9mZt9d3b3dmb3eWeeLxzL7c7OzT6f29m5ufUsAHl2em3RG+BtzkGM5SDGchBjOYi1wlFW+SO3gAL4EngRLwtl1qb55wzCAOMCm7uQG0onQIDXga9I93W4XZmUPQgDjEslgPvA+/Fyo0u5oGQNwjDGr8CueNtS/DwrlGxBSGMsVZbJDiVLEOAN4Ns6jBqUy+H+Mlp2IAwwVibBqKCsl+6zYhUlKxCGMX4Bdk54351xedMo2YAwA0ZOKFmAADuA67Ng1KCshvXLSOZBGGDcKg3wp61iVFB+LK3zlhUU0yAMYzQ2uDbX3UkQ5jAwiygmQeIu5c48BpVAuTPrLrFTIIkX3Zttf9dGlLUmDho6BbLIw1IaOKzuFIiFnxEwgGICJJ7auLtIjBqUe+NOzXQKJHHy77tF//TMAOXKNOfLOgFi+fQ4E5ze7xSIZYxFoiwEBNgN/GYZowYlbPdudQUkYpR/3/2NVYwKStjOje63hTJXkARGNm/TYfhtRq2gzA0kZ4x5oswFBHgHeJQzRg3Kn+HxKReQBMb5XDEqKF+UHtOjplBaBUlgnFOHAs41jdIaCLC3yxg1KHtlDQTYB/zddYwRKOFx75MVkATGGfUg4EwTKI2CJDBOq0cBp2dFaQwEeA/4p68YI1DCPN7VvEGAA8Dj0oY8UI8DHpRmEeZyYG4gCYzQPfU4Br/UYiso5flP/Y8+4xdZk/RmvGp96q3vduvxMsxnbZpnSmgqEOCDCsZnkh5Os44e9DDOpYxycOJ7T7rLAg4DT0tPyVPx+qu+y1J5l3U1fn6qNKswt8ONvYZUMP4DPind5iAaBonXnYzzqkWZCiSBcaJyu4MoDRKvPzEOZWIQ4EgdRlzGQTQaZATKR1ODAMvA8zqMuJyDqB4kgRLmujwxSAUjXB6r2RAH0XiQuMyxylyXx4IA+1N3qvkiDqLJQEZ8s+8f94Phx5K2S/pX0vGiKFbaexj9qxjM83ic7/Y471elQK5JuinpqGO0U5zr0TjnMO9XbUss/LOkD1vaFi9WFMUNSeFj08GU/wEzYzmIsRzEWA5iLAcx1tBRlpWAtyUdamkbX0j6oSiKv2QssyCSbkva0+L6f5fU2Ptz+7DL2pP5+jv3DNnooqSzaq7wJr5PZbQcQJ4URfFHUysDnshwlndZvcxBjOUgxnIQYzmIsRzEWA5iLAcxloMYy0GM5SDGchBjOYixHMRYDmIsBzGWgxjLQYzlIMZyEGM5iLEcxFgOYiwHMZaDGMtBjOUgHX5vb/i/QT5XRtHs9i5ZA3lL0nk138sW19fG9i58l/V9C0Pb6JmkVTXbalxvG72M89hy4Q/MN7c53sz5i7qxHMRYDmIsBzGWg8hW/wOJix/8MS8ESwAAAABJRU5ErkJggg==",el="/Dept/assets/icon30-ZsvW46rz.png",tl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFV0lEQVR4nO2dS4gcVRSG/9OTaCQSTUDQLMQQREHCIBpQiKAgio/RqFEEcePKhQvBtSIo6kLUjQTFnYJBE7VbF1EwGOMD8cGgWaj4AMEsoiiSxEce88vF03jTM93T3XWr6tSt80FRNQzcuvf+df66z2ohCccOnboz4JyMC2IMF8QYLogxXBBjuCDGcEGM4YI0SRARKXQAmAHwKIBfATCD4zcAj4VyFayX4YSe+rCjKCQfZp48VLBehh4yquKXVXP0TU8FcBDAGgAfANiF5nMHgMsB/ALgHBE5MU0iIx/2siKE5Fz0RN2GDCB5V1SmKwqkM7zOSxTkRc34YZKnIQNIriV5TMv1VGMECXZF8g/N+A5kBMk9Wq4fCqQx9Cir2XuNvjsCO5EXXT1vIDmbOvFOiS+/wN8AdiMvetH11uSpp7asAbvKoWW1CJJfavnm0QDLiu3qVeRJT8+zJM9LmXCnZLt6C3nSja5vMWtZoXmrzdzAm8gUkqFD/bOWc69ly7oewGq9fgWZIiKMbGsLybNSpZ1akNv1fHSgNZIjvagO58xZVlvsaqA1eWia8lZlWbFdvY7MEZF/oj7W1SRPT5FupwS7Og7gDbSDrp5XAbjWjGUN2FVuPfOhkFxH8riW+yVLlhXbVa6dwUWISJhB3Kd/3kByJQrSSWxXCwOdpjbQ1fOZAK6s3bLCy4zknxq276JlkAyjvn2erX0+hOSdUYbuRQvh/4ONofcudb9DYrt6De2kp+f1ADYXSqlIhKhd/aVPx3toKSQ3Ry7xeJ0RcqO2wQNZzn2MyWcADiSZtCoYIbv0qVggGcK1tZDcHkXJhZVHiA4VhP5H4EMR6T8hbaUXXU8dJSsS2VVpnUGS2/ReqQiL214QkY+Rlj0AjmgHOQjyRKWWFdlV4NwpCzFO/o4wPftKyuvO6B7rp6nzqSKE5BnRU/uJiPyE8ngmDEskjpDnUZ5t9Vdp3gxgeyURQvLu6El4oEABchxsPKH18k5lPfUwIVOFXTWR0B/TejmmTlJuK0tvEpb6BL4o2a6aPNi4YprGyDTN3psAnNK2ofYJ6BZq/k5qWQN2tXHiG7YAkvu1fsKk3arSLGsJu/o+WSnyjJLVYb69TMuK7Sr7hQy1rGycxLIG7GrkeE2b4X8rGw9oPR0kOZO82att7KN6k6+qLmTTIPncsO1vqd4hIfRW5r5MtHbbmiBCdkeKX5Qw4zmvbDy81Pa3wpaldtXf7Ph1HQVsIgODjbMpLSuEXH8g0juDZc6RjBkhsV1tmiBDrYYnDzbOJ7GsAbv6ts4CNnywkf3tb0UtK7arti7zqa61NUaExHZ1SaGstRCSG6P621v44zPBrjRCfgdwa4VlOQRgftoPvAxDe82h2b4O1fEygLPDYkIRmRlZ56P+Gf6vKxLr4hsA14nIjykSIxkG+8KCvktRH+E1waZ+Ue4CAFN/5GUJttUsxrJMssjhQf3uVVXcpwsGLk6Y5obo+ipUxxYAj6QWZL+IVLZ+l2T674hEVFyWsHdkLKxbVutwQYzhghjDBTGGC2IMF8QYLogxXBBjuCDGcEGMUWRLW9ks6HkNyfsTpXmZnsOUgkksC/KpntcCeDpx2u/DKJYtaweAJ/XrpikJI9b3wCqjphN1jWqfUkdfc4bk1qgeJdl2BKd8XBBjuCDGcEGM4YIYwwUxhgtiDBfEGC6IMVwQY7ggxnBBjOGCGMMFadIEVfitpWj/yFzqn4hrEZuG1OkixtlB9ZH+ZLVTnO9E5PxRdd4Z89vub4/a9eOMxefjbPpcbkubUzH+UjeGC2IMF8QYLogxXBBjuCDGcEFgi38Begy36j9CxDUAAAAASUVORK5CYII=",Ld="https://stacks-admin.onrender.com",Pd=`
  html,
  body,
  #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  .dashboard-page {
    min-height: 100vh;
    padding-bottom: 92px;
    overflow-x: hidden;
    background: #ffffff;
    color: #000000;
    font-family: "Century Gothic", "Trebuchet MS", Arial, sans-serif;
  }

  .dashboard-page *,
  .dashboard-page *::before,
  .dashboard-page *::after {
    box-sizing: border-box;
  }

  .dashboard-page button {
    font-family: inherit;
  }

  .dashboard-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid #dddddd;
    background: #ffffff;
  }

  .dashboard-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
  }

  .dashboard-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .dashboard-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 0;
    border-radius: 40px;
    color: #ffffff;
    background: #000000;
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    cursor: pointer;
  }

  .dashboard-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(34px, 5vw, 64px);
    height: clamp(26px, 3.5vw, 44px);
    padding: 4px 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .dashboard-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: #000000;
  }

  .dashboard-content {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
  }

  .dashboard-notice {
    position: relative;
    display: flex;
    align-items: center;
    gap: clamp(8px, 1.8vw, 18px);
    min-height: clamp(58px, 8vw, 102px);
    overflow: hidden;
    border-bottom: 1px solid #dddddd;
    font-size: clamp(0.8rem, 1.5vw, 1.5rem);
    white-space: nowrap;
  }

  .dashboard-notice-icon {
    position: relative;
    z-index: 2;
    width: clamp(22px, 3.2vw, 42px);
    height: clamp(22px, 3.2vw, 42px);
    flex: 0 0 auto;
    object-fit: contain;
    display: block;
    background: #ffffff;
  }

  .dashboard-notice-track {
    min-width: max-content;
    display: inline-block;
    padding-left: 100%;
    animation: dashboard-notice-scroll 18s linear infinite;
  }

  @keyframes dashboard-notice-scroll {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-100%);
    }
  }

  .dashboard-banner {
    width: 100%;
    height: clamp(250px, 51.6vw, 516px);
    margin-top: clamp(20px, 3.4vw, 34px);
    overflow: hidden;
    border-radius: clamp(12px, 1.8vw, 18px);
    background: #edf249;
  }

  .dashboard-banner video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .dashboard-intro {
    margin: clamp(22px, 3.4vw, 34px) 0 clamp(18px, 2.8vw, 28px);
    font-size: clamp(1.25rem, 3.2vw, 3rem);
    line-height: 1.32;
    letter-spacing: -0.065em;
  }

  .dashboard-black-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: clamp(8px, 1.8vw, 18px);
    min-width: clamp(180px, 29.6vw, 296px);
    height: clamp(42px, 6.4vw, 64px);
    padding: 0 clamp(18px, 2.6vw, 26px);
    border: 0;
    border-radius: 36px;
    color: #ffffff;
    background: #000000;
    font-size: clamp(0.85rem, 1.3vw, 1.3rem);
    cursor: pointer;
  }

  .dashboard-black-button .arrow {
    font-size: clamp(1.4rem, 2.2vw, 2.2rem);
    line-height: 0;
  }

  .dashboard-divider {
    width: 100%;
    height: clamp(1px, 0.2vw, 2px);
    margin: clamp(24px, 4.2vw, 42px) 0 clamp(20px, 3.4vw, 34px);
    background: #000000;
  }

  .dashboard-section-title {
    margin: 0 0 clamp(18px, 3.4vw, 34px);
    font-size: clamp(1rem, 1.9vw, 1.9rem);
    font-weight: 400;
    letter-spacing: -0.065em;
  }

  .quick-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(12px, 3.2vw, 32px);
  }

  .quick-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(150px, 30.2vw, 302px);
    padding: clamp(20px, 3.8vw, 38px)
      clamp(10px, 2vw, 20px)
      clamp(16px, 2.8vw, 28px);
    border: 0;
    border-radius: clamp(12px, 2.5vw, 25px);
    color: #000000;
    font-size: clamp(1rem, 2vw, 2rem);
    letter-spacing: -0.06em;
    cursor: pointer;
  }

  .quick-link img {
    width: clamp(70px, 12.6vw, 126px);
    height: clamp(70px, 12.6vw, 126px);
    object-fit: contain;
  }

  .quick-link.event {
    background: #edf8e9;
  }

  .quick-link.vip,
  .quick-link.faq {
    background: #beb4ad;
  }

  .quick-link.terms {
    background: #f5ff7b;
  }

  .quick-link.certificate {
    background: #c9cdf5;
  }

  .quick-link.about {
    background: #8d8e9b;
  }

  .recent-section {
    margin-top: clamp(30px, 5.6vw, 56px);
  }

  .recent-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: clamp(24px, 5.4vw, 54px) clamp(14px, 3.2vw, 32px);
  }

  .recent-card {
    min-width: 0;
  }

  .recent-image {
    width: 100%;
    aspect-ratio: 1.05;
    overflow: hidden;
    border-radius: clamp(12px, 2vw, 20px);
    background: #dddddd;
  }

  .recent-image img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .recent-card h3 {
    margin: clamp(10px, 1.8vw, 18px) 0 clamp(6px, 1vw, 10px);
    font-size: clamp(1rem, 2vw, 2rem);
    font-weight: 400;
    letter-spacing: -0.07em;
  }

  .recent-card small {
    color: #999999;
    font-size: clamp(0.7rem, 1.35vw, 1.35rem);
    letter-spacing: -0.04em;
  }

  .services {
    margin-top: clamp(30px, 5.6vw, 56px);
    padding: clamp(30px, 6.2vw, 62px)
      clamp(20px, 4.2vw, 42px)
      clamp(70px, 7.4vw, 100px);
    background: #e5eb45;
  }

  .services-label {
    display: block;
    margin-bottom: clamp(42px, 9vw, 90px);
    font-size: clamp(0.85rem, 1.15vw, 1.15rem);
  }

  .services h2 {
    max-width: 800px;
    margin: 0 0 clamp(40px, 9vw, 90px);
    font-size: clamp(1.8rem, 4.5vw, 4.4rem);
    font-weight: 400;
    line-height: 1.12;
    letter-spacing: -0.07em;
  }

  .services p {
    max-width: 950px;
    margin: 0 0 clamp(32px, 6.8vw, 68px);
    font-size: clamp(0.95rem, 2.4vw, 2.25rem);
    line-height: 1.45;
    letter-spacing: -0.06em;
  }

  .services-image-slider {
    width: 100%;
    overflow: hidden;
    margin-top: clamp(32px, 7.4vw, 74px);
    border-radius: clamp(12px, 2vw, 20px);
  }

  .services-image-track {
    display: flex;
    width: 600%;
    transition: transform 700ms ease-in-out;
  }

  .services-slide {
    flex: 0 0 16.666666%;
    width: 16.666666%;
  }

  .services-slide img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 1.05;
    object-fit: cover;
  }

  .services-slider-dots {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 12px;
  }

  .services-slider-dot {
    width: 8px;
    height: 8px;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }

  .services-slider-dot.active {
    background: #000000;
  }

  .dashboard-footer {
    width: 100%;
    min-height: clamp(110px, 18vw, 220px);
    padding: clamp(24px, 4vw, 42px) 0 clamp(40px, 5vw, 60px);
    background: transparent;
  }

  .dashboard-footer-divider {
    width: calc(100% - clamp(36px, 8.4vw, 84px));
    height: clamp(1px, 0.2vw, 2px);
    margin: 0 auto;
    background: #000000;
  }

  .dashboard-footer-icon {
    display: block;
    width: clamp(72px, 11vw, 120px);
    height: clamp(72px, 11vw, 120px);
    margin: clamp(24px, 4vw, 42px) auto 0;
    object-fit: contain;
  }

  .bottom-navigation {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    height: clamp(82px, 11.6vw, 116px);
    padding: clamp(8px, 1.2vw, 12px) clamp(22px, 3.2vw, 32px);
    background: #000000;
  }

  .bottom-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    min-width: clamp(80px, 15vw, 150px);
    border: 0;
    color: #ffffff;
    background: transparent;
    font-size: clamp(0.75rem, 1.3vw, 1.3rem);
    cursor: pointer;
  }

  .bottom-item img {
    width: clamp(30px, 4.3vw, 43px);
    height: clamp(30px, 4.3vw, 43px);
    margin-bottom: clamp(4px, 0.8vw, 8px);
    object-fit: contain;
  }

  .bottom-item.starting {
    transform: translateY(clamp(-30px, -3vw, -24px));
  }

  .bottom-item.starting img {
    width: clamp(76px, 12.4vw, 124px);
    height: clamp(76px, 12.4vw, 124px);
    margin-bottom: clamp(-13px, -1.3vw, -8px);
  }

  .reward-overlay,
  .modal-overlay {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: rgba(0, 0, 0, 0.7);
  }

  .reward-modal {
    position: relative;
    width: min(900px, 100%);
    max-height: calc(100vh - 48px);
    overflow-y: auto;
    background: #ffffff;
  }

  .reward-image {
    display: block;
    width: 100%;
    height: auto;
  }

  .reward-close {
    position: absolute;
    top: 14px;
    right: 14px;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    color: #ffffff;
    background: rgba(0, 0, 0, 0.4);
    font-size: 2.1rem;
    line-height: 1;
    cursor: pointer;
  }

  .reward-cancel {
    display: block;
    width: calc(100% - 48px);
    height: 60px;
    margin: 18px 24px 24px;
    border: 0;
    border-radius: 34px;
    color: #ffffff;
    background: #000000;
    font-size: 1.3rem;
    cursor: pointer;
  }

  .withdraw-modal {
    width: min(390px, calc(100% - 32px));
    padding: 24px;
    border-radius: 18px;
    background: #ffffff;
  }

  .withdraw-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .withdraw-header h2 {
    margin: 0;
    font-size: 1.1rem;
  }

  .withdraw-header button {
    border: 0;
    background: transparent;
    font-size: 1.8rem;
    cursor: pointer;
  }

  .withdraw-modal input {
    width: 100%;
    height: 48px;
    padding: 0 14px;
    border: 1px solid #dddddd;
    outline: none;
    background: #f6f7fb;
    font: inherit;
  }

  .withdraw-modal form > button {
    width: 100%;
    height: 48px;
    margin-top: 14px;
    border: 0;
    border-radius: 28px;
    color: #ffffff;
    background: #000000;
    font: inherit;
    cursor: pointer;
  }

  .withdraw-error {
    margin: 8px 0 0;
    color: #d00000;
    font-size: 0.82rem;
  }

  .dashboard-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-family: Arial, sans-serif;
  }

  @media (max-width: 700px) {
    .dashboard-page {
      padding-bottom: 76px;
    }

    .dashboard-header {
      display: flex;
      min-height: 72px;
      padding: 12px 14px;
    }

    .dashboard-logo {
      width: 180px;
      height: 34px;
      max-width: 58%;
    }

    .dashboard-header-actions {
      gap: 9px;
    }

    .dashboard-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .dashboard-menu {
      width: 28px;
      height: 24px;
    }

    .dashboard-menu span {
      height: 2px;
    }

    .dashboard-content {
      width: calc(100% - 36px);
      margin: 0 auto;
    }

    .dashboard-notice {
      min-height: 58px;
      gap: 8px;
      font-size: 0.78rem;
    }

    .dashboard-notice-icon {
      width: 22px;
      height: 22px;
    }

    .dashboard-banner {
      height: 250px;
      margin-top: 20px;
      border-radius: 14px;
    }

    .dashboard-intro {
      margin: 24px 0 18px;
      font-size: 1.35rem;
      line-height: 1.35;
    }

    .dashboard-black-button {
      min-width: 190px;
      height: 44px;
      font-size: 0.85rem;
    }

    .dashboard-divider {
      margin: 26px 0 20px;
    }

    .dashboard-section-title {
      margin-bottom: 18px;
      font-size: 1rem;
    }

    .quick-links {
      gap: 12px;
    }

    .quick-link {
      min-height: 150px;
      padding: 20px 10px 16px;
      border-radius: 12px;
      font-size: 1rem;
    }

    .quick-link img {
      width: 72px;
      height: 72px;
    }

    .recent-section {
      margin-top: 30px;
    }

    .recent-grid {
      gap: 26px 12px;
    }

    .recent-card h3 {
      margin-top: 10px;
      font-size: 1rem;
    }

    .recent-card small {
      font-size: 0.7rem;
    }

    .services {
      margin-left: calc((100vw - 100%) / -2);
      margin-right: calc((100vw - 100%) / -2);
      margin-top: 30px;
      padding: 34px 20px 90px;
    }

    .services-label {
      margin-bottom: 42px;
      font-size: 0.85rem;
    }

    .services h2 {
      margin-bottom: 42px;
      font-size: 1.8rem;
    }

    .services p {
      margin-bottom: 32px;
      font-size: 0.95rem;
    }

    .services-image-slider {
      margin-top: 36px;
      border-radius: 12px;
    }

    .dashboard-footer {
      min-height: 90px;
      padding: 20px 0 44px;
    }

    .dashboard-footer-divider {
      width: calc(100% - 1px);
    }

    .dashboard-footer-icon {
      width: 76px;
      height: 76px;
      margin-top: 24px;
    }

    .bottom-navigation {
      height: 92px;
      padding: 28px 16px;
    }

    .bottom-item {
      min-width: 80px;
      font-size: 0.75rem;
    }

    .bottom-item img {
      width: 30px;
      height: 30px;
    }

    .bottom-item.starting {
      transform: translateY(-24px);
    }

    .bottom-item.starting img {
      width: 76px;
      height: 76px;
    }

    .reward-overlay {
      padding: 12px;
    }

    .reward-close {
      top: 8px;
      right: 8px;
      width: 36px;
      height: 36px;
      font-size: 1.6rem;
    }

    .reward-cancel {
      width: calc(100% - 24px);
      height: 50px;
      margin: 12px;
      font-size: 1rem;
    }
  }
`;function ih({onClose:e}){return i.jsx("div",{className:"reward-overlay",role:"dialog","aria-modal":"true",children:i.jsxs("div",{className:"reward-modal",children:[i.jsx("button",{type:"button",className:"reward-close",onClick:e,"aria-label":"Close special reward announcement",children:"×"}),i.jsx("img",{src:V2,alt:"Instrument special reward announcement",className:"reward-image"}),i.jsx("button",{type:"button",className:"reward-cancel",onClick:e,children:"Cancel"})]})})}function ah({open:e,onClose:t,onSubmit:n,password:r,setPassword:a,error:o,loading:s}){return e?i.jsx("div",{className:"modal-overlay",onClick:t,children:i.jsxs("div",{className:"withdraw-modal",onClick:l=>l.stopPropagation(),children:[i.jsxs("div",{className:"withdraw-header",children:[i.jsx("h2",{children:"Withdrawal Password"}),i.jsx("button",{type:"button",onClick:t,"aria-label":"Close",children:"×"})]}),i.jsxs("form",{onSubmit:n,children:[i.jsx("input",{type:"password",value:r,onChange:l=>a(l.target.value),placeholder:"Withdrawal Password",autoFocus:!0,disabled:s}),o&&i.jsx("p",{className:"withdraw-error",children:o}),i.jsx("button",{type:"submit",disabled:s,children:s?"Verifying...":"Submit"})]})]})}):null}function oh({navigate:e}){return i.jsxs("nav",{className:"bottom-navigation",children:[i.jsxs("button",{type:"button",className:"bottom-item",onClick:()=>e("/dashboard"),children:[i.jsx("img",{src:Zs,alt:""}),i.jsx("span",{children:"Home"})]}),i.jsxs("button",{type:"button",className:"bottom-item starting",onClick:()=>e("/tasks"),children:[i.jsx("img",{src:el,alt:""}),i.jsx("span",{children:"Starting"})]}),i.jsxs("button",{type:"button",className:"bottom-item",onClick:()=>e("/records"),children:[i.jsx("img",{src:tl,alt:""}),i.jsx("span",{children:"Records"})]})]})}function sh(){const e=ie(),[t,n]=h.useState(null),[r,a]=h.useState(0),[o,s]=h.useState(0),[l,d]=h.useState(!1),[c,m]=h.useState(!1),[p,x]=h.useState(!1),[w,y]=h.useState(""),[b,j]=h.useState(""),[f,u]=h.useState(!1),g=[X2,Z2,eh,th,nh,rh],[$,A]=h.useState(0),E=[{label:"Event",icon:U2,path:"/events",className:"event"},{label:"VIP Level",icon:H2,path:"/vip",className:"vip"},{label:"FAQs",icon:G2,path:"/faq",className:"faq"},{label:"T&C's",icon:_2,path:"/terms",className:"terms"},{label:"Certificate",icon:W2,path:"/certificate",className:"certificate"},{label:"About Us",icon:Q2,path:"/about",className:"about"}];h.useEffect(()=>{const v=localStorage.getItem("currentUser");if(!v){e("/login");return}let I;try{I=JSON.parse(v),n(I),a(I.balance||0),s(I.vipLevel||0)}catch{localStorage.removeItem("currentUser"),e("/login");return}const L=localStorage.getItem("authToken")||localStorage.getItem("token")||I.token;L&&fetch(`${Ld}/api/user-profile`,{headers:{"x-auth-token":L,Authorization:`Bearer ${L}`}}).then(W=>{if(!W.ok)throw new Error("Unable to load profile");return W.json()}).then(W=>{if(!(W!=null&&W.user))return;const se={...I,...W.user};n(se),a(W.user.balance||0),s(W.user.vipLevel||0),localStorage.setItem("currentUser",JSON.stringify(se))}).catch(()=>{})},[e]),h.useEffect(()=>{sessionStorage.getItem("instrument-special-reward-shown")||(d(!0),sessionStorage.setItem("instrument-special-reward-shown","true"))},[]),h.useEffect(()=>{const v=window.setInterval(()=>{A(I=>(I+1)%g.length)},3e3);return()=>{window.clearInterval(v)}},[g.length]);const N=async v=>{v.preventDefault(),j(""),u(!0);try{const I=localStorage.getItem("authToken")||localStorage.getItem("token")||(t==null?void 0:t.token);if(!I){e("/login");return}const W=await(await fetch(`${Ld}/api/verify-withdraw-password`,{method:"POST",headers:{"Content-Type":"application/json","x-auth-token":I,Authorization:`Bearer ${I}`},body:JSON.stringify({password:w})})).json();W.success?(x(!1),y(""),e("/withdraw")):j(W.message||"Incorrect withdrawal password.")}catch{j("Could not verify withdrawal password. Try again.")}finally{u(!1)}};return t?i.jsxs(i.Fragment,{children:[i.jsx("style",{children:Pd}),i.jsxs("div",{className:"dashboard-page",children:[l&&i.jsx(ih,{onClose:()=>d(!1)}),i.jsxs("header",{className:"dashboard-header",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"dashboard-logo"}),i.jsxs("div",{className:"dashboard-header-actions",children:[i.jsx("button",{type:"button",className:"dashboard-contact",onClick:()=>m(!0),children:"Contact"}),i.jsxs("button",{type:"button",className:"dashboard-menu",onClick:()=>e("/profile"),"aria-label":"Open menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]})]}),i.jsxs("main",{className:"dashboard-content",children:[i.jsxs("div",{className:"dashboard-notice",children:[i.jsx("img",{src:F2,alt:"",className:"dashboard-notice-icon"}),i.jsx("div",{className:"dashboard-notice-track",children:"Thank you for your support in Instrument Platform. Kindly read Rules & regulations. Thank you."})]}),i.jsx("section",{className:"dashboard-banner",children:i.jsx("video",{src:m0,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto"})}),i.jsx("p",{className:"dashboard-intro",children:"We are a digitally native design agency evolving brands through creative vision & technology."}),i.jsxs("button",{type:"button",className:"dashboard-black-button",onClick:()=>e("/about"),children:["View All Work",i.jsx("span",{className:"arrow",children:"→"})]}),i.jsx("div",{className:"dashboard-divider"}),i.jsxs("section",{children:[i.jsx("h2",{className:"dashboard-section-title",children:"QUICK CLICKS"}),i.jsx("div",{className:"quick-links",children:E.map(v=>i.jsxs("button",{type:"button",className:`quick-link ${v.className}`,onClick:()=>e(v.path),children:[i.jsx("span",{children:v.label}),i.jsx("img",{src:v.icon,alt:""})]},v.label))})]}),i.jsxs("section",{className:"recent-section",children:[i.jsx("div",{className:"dashboard-divider"}),i.jsx("h2",{className:"dashboard-section-title",children:"RECENT WORK"}),i.jsxs("div",{className:"recent-grid",children:[i.jsxs("article",{className:"recent-card",children:[i.jsx("div",{className:"recent-image",children:i.jsx("img",{src:Y2,alt:"Feeled project"})}),i.jsx("h3",{children:"Feeled"}),i.jsx("small",{children:"#PRODUCT"})]}),i.jsxs("article",{className:"recent-card",children:[i.jsx("div",{className:"recent-image",children:i.jsx("img",{src:q2,alt:"ŌURA project"})}),i.jsx("h3",{children:"ŌURA"}),i.jsx("small",{children:"#MARKETING"})]}),i.jsxs("article",{className:"recent-card",children:[i.jsx("div",{className:"recent-image",children:i.jsx("img",{src:K2,alt:"AlphaSense project"})}),i.jsx("h3",{children:"AlphaSense"}),i.jsx("small",{children:"#PRODUCT"})]}),i.jsxs("article",{className:"recent-card",children:[i.jsx("div",{className:"recent-image",children:i.jsx("img",{src:J2,alt:"Perfected project"})}),i.jsx("h3",{children:"Perfected"}),i.jsx("small",{children:"#BRAND #MARKETING"})]})]})]}),i.jsxs("section",{className:"services",children:[i.jsx("span",{className:"services-label",children:"SERVICES"}),i.jsx("h2",{children:"Expressive and enduring digital experiences."}),i.jsx("p",{children:"We help our clients accelerate progress, shape outcomes, and envision the future. Through collaboration with companies across industries, we build scalable brand systems and products that leverage emerging behaviors and technologies, and ultimately unlock potential. Learn more about what we can do for you."}),i.jsxs("button",{type:"button",className:"dashboard-black-button",onClick:()=>m(!0),children:["See our offerings",i.jsx("span",{className:"arrow",children:"→"})]}),i.jsxs("div",{className:"services-image-slider",children:[i.jsx("div",{className:"services-image-track",style:{transform:`translateX(-${$*16.666666}%)`},children:g.map((v,I)=>i.jsx("div",{className:"services-slide",children:i.jsx("img",{src:v,alt:`Instrument service ${I+1}`})},`${v}-${I}`))}),i.jsx("div",{className:"services-slider-dots",children:g.map((v,I)=>i.jsx("button",{type:"button",className:`services-slider-dot ${$===I?"active":""}`,onClick:()=>A(I),"aria-label":`Show service image ${I+1}`},`${v}-${I}-dot`))})]})]}),i.jsxs("section",{className:"dashboard-footer",children:[i.jsx("div",{className:"dashboard-footer-divider"}),i.jsx("img",{src:pe,alt:"Instrument",className:"dashboard-footer-icon"})]})]}),i.jsx(ah,{open:p,onClose:()=>x(!1),onSubmit:N,password:w,setPassword:y,error:b,loading:f}),i.jsx(ge,{open:c,onClose:()=>m(!1)}),i.jsx(oh,{navigate:e})]})]}):i.jsxs(i.Fragment,{children:[i.jsx("style",{children:Pd}),i.jsx("div",{className:"dashboard-loading",children:"Loading..."})]})}const qa="https://stacks-admin.onrender.com",g0=h.createContext();function lh({children:e}){const[t,n]=h.useState(0),[r,a]=h.useState(0),[o,s]=h.useState(0),[l,d]=h.useState(""),[c,m]=h.useState("VIP1"),[p,x]=h.useState(null),w=async()=>{const f=localStorage.getItem("authToken");if(f)try{const u=await fetch(`${qa}/api/user-profile`,{headers:{"Content-Type":"application/json","X-Auth-Token":f}});if(!u.ok)return;const g=await u.json();g.success&&g.user&&(d(g.user.username||""),n(g.user.balance??0),m(g.user.vipLevel||"VIP1"),a(g.user.commissionToday??0),s(typeof g.user.taskCountThisSet=="number"?g.user.taskCountThisSet:g.user.taskCountToday??0),x(g.user))}catch(u){console.error("Failed to fetch user profile",u)}};h.useEffect(()=>{w()},[]);const y=w,b=async f=>{const u=localStorage.getItem("authToken");try{(await(await fetch(`${qa}/api/deposit`,{method:"POST",headers:{"Content-Type":"application/json","X-Auth-Token":u},body:JSON.stringify({amount:f})})).json()).success&&await y()}catch(g){console.error("Failed to deposit",g)}},j=async f=>{const u=localStorage.getItem("authToken");try{const $=await(await fetch(`${qa}/api/withdraw`,{method:"POST",headers:{"Content-Type":"application/json","X-Auth-Token":u},body:JSON.stringify({amount:f})})).json();return $.success&&await y(),$.success}catch(g){return console.error("Failed to withdraw",g),!1}};return i.jsx(g0.Provider,{value:{balance:t,setBalance:n,deposit:b,withdraw:j,commissionToday:r,setCommissionToday:a,taskCountToday:o,setTaskCountToday:s,username:l,vipLevel:c,setVipLevel:m,refreshProfile:y,userProfile:p},children:e})}function pa(){return h.useContext(g0)}const x0=h.createContext(),dh=({children:e})=>{const[t,n]=h.useState([]),[r,a]=h.useState([]),[o,s]=h.useState(!1),l="https://stacks-admin.onrender.com",d=async()=>{const m=localStorage.getItem("authToken");if(m){s(!0);try{const x=await(await fetch(`${l}/api/transactions`,{headers:{"Content-Type":"application/json","X-Auth-Token":m}})).json();x.success&&(n(x.deposits||[]),a(x.withdrawals||[]))}catch{n([]),a([])}s(!1)}};h.useEffect(()=>{d()},[]);const c=d;return i.jsx(x0.Provider,{value:{deposits:t,withdrawals:r,loading:o,refresh:c},children:e})},w0=()=>h.useContext(x0),ch="https://stacks-admin.onrender.com",v0=h.createContext({settings:null,loading:!0,refresh:async()=>{},currency:"",formatAmount:e=>String(e)}),fa=()=>h.useContext(v0),uh=({children:e})=>{const[t,n]=h.useState(null),[r,a]=h.useState(!0),o=c=>c?c.success&&c.settings||c.settings?c.settings:typeof c=="object"&&(c.currency||c.siteName||c.defaultVip)?c:null:null,s=async()=>{a(!0);try{const c=await fetch(`${ch}/api/settings`);if(!c.ok){console.warn("Failed to fetch settings. HTTP status:",c.status);return}const m=await c.json(),p=o(m);n(p)}catch(c){console.error("Settings fetch error:",c)}finally{a(!1)}};h.useEffect(()=>{s()},[]);const l=(t==null?void 0:t.currency)??"",d=(c,m={})=>{const p=Number.isInteger(m.decimals)?m.decimals:2,w=Number(c||0).toFixed(p);return l?`${w} ${l}`:w};return i.jsx(v0.Provider,{value:{settings:t,loading:r,refresh:s,currency:l,formatAmount:d},children:e})},ph=`
  html, body, #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  .deposit-page {
    min-height: 100vh;
    overflow-x: hidden;
    background: #f5f5f5;
    color: #000000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  .deposit-page button {
    font-family: inherit;
  }

  .deposit-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid #dddddd;
    background: #ffffff;
  }

  .deposit-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
  }

  .deposit-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .deposit-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 0;
    border-radius: 40px;
    color: #ffffff;
    background: #000000;
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    font-weight: 500;
    cursor: pointer;
  }

  .deposit-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(34px, 5vw, 64px);
    height: clamp(26px, 3.5vw, 44px);
    padding: 4px 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .deposit-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: #000000;
  }

  .deposit-title-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: clamp(50px, 6vw, 70px);
    padding: clamp(12px, 2vw, 16px) clamp(18px, 4.2vw, 42px);
    background: #e8e8e8;
    border-bottom: 1px solid #d9d9d9;
  }

  .deposit-back {
    position: absolute;
    left: clamp(18px, 4.2vw, 42px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .deposit-back img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    display: block;
  }

  .deposit-title-bar h1 {
    margin: 0;
    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #000000;
  }

  .deposit-content {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding: clamp(20px, 3vw, 30px) 0;
  }

  .deposit-wallet-section {
    background: #e8e8e8;
    border-radius: 16px;
    padding: clamp(20px, 3vw, 32px);
    margin-bottom: 20px;
  }

  .deposit-wallet-title {
    font-size: clamp(1.1rem, 1.8vw, 1.6rem);
    font-weight: 600;
    color: #000000;
    margin-bottom: 12px;
  }

  .deposit-label {
    font-size: clamp(0.95rem, 1.5vw, 1.4rem);
    font-weight: 500;
    color: #666666;
    text-align: center;
    margin-bottom: 12px;
  }

  .deposit-amount-box {
    background: #000000;
    color: #ffffff;
    border-radius: 12px;
    padding: clamp(14px, 2vw, 20px);
    text-align: center;
    margin-bottom: 16px;
    font-size: clamp(1.3rem, 2.5vw, 2.2rem);
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  .deposit-button {
    background: #000000;
    color: #ffffff;
    border: 0;
    border-radius: 12px;
    padding: clamp(12px, 2vw, 16px);
    font-size: clamp(1rem, 1.6vw, 1.5rem);
    font-weight: 600;
    cursor: pointer;
    width: 100%;
    transition: background 0.2s;
  }

  .deposit-button:hover {
    background: #222222;
  }

  .deposit-filter-tabs {
    display: flex;
    gap: 8px;
    margin-bottom: 20px;
    background: #ffffff;
    padding: clamp(10px, 2vw, 16px);
    border-radius: 12px;
    flex-wrap: wrap;
  }

  .deposit-filter-tab {
    padding: clamp(8px, 1.5vw, 12px) clamp(12px, 2vw, 18px);
    border: 0;
    border-radius: 8px;
    background: #e0e0e0;
    color: #666666;
    font-size: clamp(0.85rem, 1.3vw, 1.1rem);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
  }

  .deposit-filter-tab.active {
    background: #000000;
    color: #ffffff;
  }

  .deposit-activity-item {
    background: #ffffff;
    border-radius: 12px;
    padding: clamp(14px, 2vw, 18px);
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .deposit-activity-left {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .deposit-activity-amount {
    font-size: clamp(1rem, 1.6vw, 1.4rem);
    font-weight: 700;
    color: #000000;
  }

  .deposit-activity-date {
    font-size: clamp(0.85rem, 1.3vw, 1.1rem);
    color: #888888;
  }

  .deposit-activity-status {
    font-size: clamp(0.9rem, 1.4vw, 1.2rem);
    font-weight: 600;
    color: #666666;
    text-transform: capitalize;
    padding: 6px 12px;
    background: #f0f0f0;
    border-radius: 6px;
  }

  .deposit-activity-status.completed {
    background: #d4edda;
    color: #155724;
  }

  .deposit-activity-status.pending {
    background: #fff3cd;
    color: #856404;
  }

  .deposit-activity-status.reviewing {
    background: #e2e3e5;
    color: #383d41;
  }

  .deposit-empty {
    text-align: center;
    color: #888888;
    font-size: clamp(1rem, 1.6vw, 1.4rem);
    padding: clamp(20px, 4vw, 40px);
  }

  .deposit-loading {
    text-align: center;
    color: #666666;
    font-size: clamp(1rem, 1.6vw, 1.4rem);
    padding: clamp(20px, 4vw, 40px);
  }

  @media (max-width: 720px) {
    .deposit-header {
      min-height: 72px;
      padding: 12px 14px;
    }

    .deposit-logo {
      width: 180px;
      height: 34px;
    }

    .deposit-header-actions {
      gap: 9px;
    }

    .deposit-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .deposit-menu {
      width: 28px;
      height: 24px;
    }

    .deposit-menu span {
      height: 2px;
    }

    .deposit-title-bar {
      min-height: 48px;
      padding: 10px 14px;
    }

    .deposit-back {
      width: 32px;
      height: 32px;
      left: 14px;
    }

    .deposit-back img {
      width: 20px;
      height: 20px;
    }

    .deposit-title-bar h1 {
      font-size: 1.5rem;
    }

    .deposit-content {
      width: calc(100% - 28px);
      padding: 16px 0;
    }

    .deposit-filter-tabs {
      gap: 6px;
      padding: 8px;
    }

    .deposit-filter-tab {
      padding: 6px 10px;
      font-size: 0.8rem;
    }
  }
`;function fh(){const e=ie(),[t,n]=h.useState(!1),[r,a]=h.useState("all"),{balance:o,totalBalance:s}=pa(),{deposits:l,loading:d}=w0(),{currency:c,formatAmount:m}=fa(),p=l.filter(f=>f.type==="deposit"||f.type==="admin_add_balance"||f.type==="admin_add_funds"||f.type==="add_balance_admin"||!f.type),w=r==="all"?p:p.filter(f=>(f.status||"pending").toLowerCase()===r.toLowerCase()),y=["all","reviewing","completed","pending"],b=f=>{if(!f)return"N/A";try{return new Date(f).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}catch{return f}},j=f=>f?f.toLowerCase():"pending";return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:ph}),i.jsxs("div",{className:"deposit-page",children:[i.jsxs("header",{className:"deposit-header",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"deposit-logo"}),i.jsxs("div",{className:"deposit-header-actions",children:[i.jsx("button",{type:"button",className:"deposit-contact",onClick:()=>n(!0),children:"Contact"}),i.jsxs("button",{type:"button",className:"deposit-menu",onClick:()=>e("/profile"),"aria-label":"Open profile menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]})]}),i.jsxs("div",{className:"deposit-title-bar",children:[i.jsx("button",{type:"button",className:"deposit-back",onClick:()=>e(-1),"aria-label":"Go back",children:i.jsx("img",{src:ze,alt:"Back"})}),i.jsx("h1",{children:"Deposit"})]}),i.jsxs("main",{className:"deposit-content",children:[i.jsxs("div",{className:"deposit-wallet-section",children:[i.jsx("h2",{className:"deposit-wallet-title",children:"My Wallet"}),i.jsxs("div",{style:{marginBottom:"24px"},children:[i.jsx("div",{className:"deposit-label",children:"Available Balance"}),i.jsx("div",{className:"deposit-amount-box",children:m?m(o||0):`${c||""} ${Number(o||0).toFixed(2)}`})]}),i.jsx("button",{type:"button",className:"deposit-button",onClick:()=>n(!0),children:"Deposit"})]}),i.jsxs("div",{className:"deposit-wallet-section",children:[i.jsx("div",{className:"deposit-label",children:"Total Balance"}),i.jsx("div",{className:"deposit-amount-box",children:m?m(s||0):`${c||""} ${Number(s||0).toFixed(2)}`})]}),i.jsx("h2",{className:"deposit-wallet-title",style:{marginTop:"28px",marginBottom:"16px"},children:"Transaction History"}),i.jsx("div",{className:"deposit-filter-tabs",children:y.map(f=>i.jsx("button",{type:"button",className:`deposit-filter-tab ${r===f?"active":""}`,onClick:()=>a(f),children:f.charAt(0).toUpperCase()+f.slice(1)},f))}),d?i.jsx("div",{className:"deposit-loading",children:"Loading transaction history..."}):w.length===0?i.jsx("div",{className:"deposit-empty",children:"No more data"}):w.slice().reverse().map((f,u)=>{const g=Number(f.amount||0).toFixed(2),$=c?`+${g} ${c}`:`+${g}`;return i.jsxs("div",{className:"deposit-activity-item",children:[i.jsxs("div",{className:"deposit-activity-left",children:[i.jsx("div",{className:"deposit-activity-amount",children:$}),i.jsx("div",{className:"deposit-activity-date",children:b(f.createdAt||f.date)})]}),i.jsx("div",{className:`deposit-activity-status ${j(f.status)}`,children:f.status||"Pending"})]},u)})]}),i.jsx(ge,{open:t,onClose:()=>n(!1)})]})]})}const hh=`
  html, body, #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  .withdraw-page {
    min-height: 100vh;
    overflow-x: hidden;
    background: #e3e3e3;
    color: #000000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    padding-bottom: 40px;
  }

  .withdraw-page button {
    font-family: inherit;
  }

  .withdraw-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid #d5d5d5;
    background: #ffffff;
  }

  .withdraw-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
  }

  .withdraw-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .withdraw-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 0;
    border-radius: 40px;
    color: #ffffff;
    background: #000000;
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }

  .withdraw-contact:hover {
    background: #222222;
  }

  .withdraw-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(34px, 5vw, 64px);
    height: clamp(26px, 3.5vw, 44px);
    padding: 4px 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .withdraw-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: #000000;
  }

  .withdraw-title-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: clamp(50px, 6vw, 70px);
    padding: clamp(12px, 2vw, 16px) clamp(18px, 4.2vw, 42px);
    background: #e3e3e3;
    border-bottom: 1px solid #d5d5d5;
  }

  .withdraw-back {
    position: absolute;
    left: clamp(18px, 4.2vw, 42px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .withdraw-back img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    display: block;
  }

  .withdraw-title-bar h1 {
    margin: 0;
    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #000000;
  }

  .withdraw-tabs {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #d5d5d5;
    background: #ffffff;
    margin-bottom: 0;
    font-size: 0;
  }

  .withdraw-tab-button {
    flex: 1;
    padding: 20px 0 10px 0;
    font-weight: 600;
    font-size: 20px;
    color: #888;
    background: none;
    border: none;
    border-bottom: 3px solid transparent;
    outline: none;
    cursor: pointer;
    transition: all 0.2s;
  }

  .withdraw-tab-button.active {
    color: #222;
    border-bottom: 3px solid #000000;
  }

  .withdraw-content {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding: clamp(20px, 3vw, 30px);
  }

  .withdraw-wallet-section {
    background: #cfcfcf;
    border-radius: 20px;
    margin: 28px auto 18px auto;
    box-shadow: 0 4px 16px 0 rgba(0,0,0,0.07);
    padding: 0;
    overflow: hidden;
    min-height: 120px;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .withdraw-wallet-content {
    padding: 22px;
    width: 100%;
  }

  .withdraw-wallet-title {
    font-weight: 700;
    color: #000000;
    font-size: 18px;
    margin-bottom: 2px;
  }

  .withdraw-amount-display {
    display: flex;
    align-items: flex-end;
    gap: 6px;
  }

  .withdraw-amount-value {
    font-size: 38px;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: 1px;
  }

  .withdraw-amount-currency {
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
    padding-bottom: 5px;
  }

  .withdraw-message-text {
    color: #333333;
    font-size: 14px;
    margin-top: 7px;
  }

  .withdraw-form {
    margin: 0 auto;
    margin-bottom: 0;
    max-width: 100%;
    width: 100%;
    border-radius: 13px;
    background: transparent;
    box-shadow: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .withdraw-input-group {
    width: 100%;
  }

  .withdraw-input-label {
    display: block;
    color: #000000;
    font-weight: 700;
    margin-bottom: 8px;
    font-size: 16px;
  }

  .withdraw-input {
    width: 100%;
    padding: 14px 16px;
    border-radius: 7px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    font-size: 18px;
    color: #000000;
    margin-bottom: 0;
  }

  .withdraw-input:focus {
    outline: none;
    background: #ffffff;
    border-color: #000000;
  }

  .withdraw-submit-button {
    width: 100%;
    background: #2d003f;
    color: #ffffff;
    font-weight: 500;
    font-size: 20px;
    border-radius: 100px;
    border: none;
    padding: 13px 0;
    margin-top: 8px;
    transition: background 0.2s;
    cursor: pointer;
  }

  .withdraw-submit-button:hover {
    background: #41005a;
  }

  .withdraw-message {
    text-align: center;
    margin-top: 6px;
    font-size: 15px;
    color: #c62828;
  }

  .withdraw-message.success {
    color: #168b38;
  }

  .withdraw-history-container {
    margin-top: 30px;
    width: 100%;
  }

  .withdraw-history-tabs {
    display: flex;
    border: 2px solid #999999;
    border-radius: 25px;
    margin-bottom: 25px;
    overflow: hidden;
    background: #ffffff;
  }

  .withdraw-history-tab-button {
    flex: 1;
    padding: 13px 0;
    font-weight: 600;
    font-size: 18px;
    background: #ffffff;
    color: #666666;
    outline: none;
    border: none;
    border-right: 1px solid #999999;
    transition: all 0.2s;
    cursor: pointer;
  }

  .withdraw-history-tab-button:last-child {
    border-right: none;
  }

  .withdraw-history-tab-button.active {
    background: #000000;
    color: #ffffff;
    border-right-color: #000000;
  }

  .withdraw-loading {
    text-align: center;
    font-size: 16px;
    color: #888;
    margin-top: 30px;
  }

  .withdraw-empty {
    text-align: center;
    font-size: 16px;
    color: #888;
    margin-top: 30px;
  }

  .withdraw-activity-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .withdraw-activity-item {
    background: #ffffff;
    box-shadow: 0 4px 12px 0 rgba(0,0,0,.07);
    border-radius: 8px;
    padding: 18px 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .withdraw-activity-left {
    flex: 1;
  }

  .withdraw-activity-amount {
    font-weight: 700;
    font-size: 18px;
    color: #000000;
    margin-bottom: 2px;
  }

  .withdraw-activity-date {
    font-size: 14px;
    color: #777777;
    margin-top: 2px;
  }

  .withdraw-activity-status {
    font-weight: 600;
    font-size: 16px;
    text-transform: capitalize;
  }

  .withdraw-activity-status.success {
    color: #168b38;
  }

  .withdraw-activity-status.reject {
    color: #c62828;
  }

  .withdraw-activity-status.reviewing {
    color: #777777;
  }

  @media (max-width: 720px) {
    .withdraw-header {
      min-height: 72px;
      padding: 12px 14px;
    }

    .withdraw-logo {
      width: 180px;
      height: 34px;
    }

    .withdraw-header-actions {
      gap: 9px;
    }

    .withdraw-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .withdraw-menu {
      width: 28px;
      height: 24px;
    }

    .withdraw-menu span {
      height: 2px;
    }

    .withdraw-title-bar {
      min-height: 48px;
      padding: 10px 14px;
    }

    .withdraw-back {
      width: 32px;
      height: 32px;
      left: 14px;
    }

    .withdraw-back img {
      width: 20px;
      height: 20px;
    }

    .withdraw-title-bar h1 {
      font-size: 1.5rem;
    }

    .withdraw-tab-button {
      font-size: 16px;
      padding: 16px 0 8px 0;
    }

    .withdraw-content {
      width: calc(100% - 28px);
      padding: 16px 0;
    }
  }
`,Ja={reviewing:["Pending","Reviewing","In Review"],success:["Completed","Success"],reject:["Rejected","Reject","Failed"]};function Xa(e){return!e||Ja.reviewing.some(t=>e.toLowerCase().includes(t.toLowerCase()))?"reviewing":Ja.success.some(t=>e.toLowerCase().includes(t.toLowerCase()))?"success":Ja.reject.some(t=>e.toLowerCase().includes(t.toLowerCase()))?"reject":e.toLowerCase().includes("approved")?"success":"reviewing"}const mh="#1fb6fc",gh="#181c23";function xh(){const[e,t]=h.useState("withdraw"),[n,r]=h.useState("reviewing"),[a,o]=h.useState(""),[s,l]=h.useState(""),[d,c]=h.useState(""),[m,p]=h.useState(!1),x=ie(),{balance:w,refreshProfile:y}=pa(),{withdrawals:b,loading:j,refresh:f}=w0(),{profile:u}=Qr(),{currency:g,formatAmount:$}=fa(),A=async v=>{if(v.preventDefault(),c(""),!a||Number(a)<=0){c("Please enter a valid amount.");return}if(!s){c("Please enter your withdrawal password.");return}const I=localStorage.getItem("authToken"),L="https://stacks-admin.onrender.com";try{const se=await(await fetch(`${L}/api/withdraw`,{method:"POST",headers:{"Content-Type":"application/json","X-Auth-Token":I},body:JSON.stringify({amount:a,withdrawPassword:s})})).json();se.success?(c("Withdrawal request submitted and is under review."),o(""),l(""),f(),y()):c(se.message||"Failed to withdraw.")}catch{c("An error occurred. Please try again.")}},E=(b||[]).filter(v=>Xa(v.status)===n),N=v=>{const I=Number(v||0);return Number.isFinite(I)?I.toFixed(2):""};return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:hh}),i.jsxs("div",{className:"withdraw-page",children:[i.jsxs("header",{className:"withdraw-header",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"withdraw-logo"}),i.jsxs("div",{className:"withdraw-header-actions",children:[i.jsx("button",{type:"button",className:"withdraw-contact",onClick:()=>p(!0),children:"Contact"}),i.jsxs("button",{type:"button",className:"withdraw-menu",onClick:()=>x("/profile"),"aria-label":"Open profile menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]})]}),i.jsxs("div",{className:"withdraw-title-bar",children:[i.jsx("button",{type:"button",className:"withdraw-back",onClick:()=>x(-1),"aria-label":"Go back",children:i.jsx("img",{src:ze,alt:"Back"})}),i.jsx("h1",{children:"Withdrawal"})]}),i.jsxs("div",{className:"withdraw-tabs",children:[i.jsx("button",{className:`withdraw-tab-button ${e==="withdraw"?"active":""}`,onClick:()=>t("withdraw"),children:i.jsx("span",{"data-i18n":"Withdraw",children:"Withdraw"})}),i.jsx("button",{className:`withdraw-tab-button ${e==="history"?"active":""}`,onClick:()=>t("history"),children:i.jsx("span",{"data-i18n":"History",children:"History"})})]}),e==="withdraw"?i.jsxs("div",{className:"withdraw-content",children:[i.jsx("div",{className:"withdraw-wallet-section",children:i.jsxs("div",{className:"withdraw-wallet-content",children:[i.jsx("div",{className:"withdraw-wallet-title","data-i18n":"Account Amount",children:"Account Amount"}),i.jsxs("div",{className:"withdraw-amount-display",children:[i.jsx("span",{className:"withdraw-amount-value",children:N(w)}),i.jsx("span",{className:"withdraw-amount-currency","data-i18n":"GBP",children:g||""})]}),i.jsx("div",{className:"withdraw-message-text","data-i18n":"You will receive your withdrawal within an hour",children:"You will receive your withdrawal within an hour"})]})}),i.jsxs("form",{onSubmit:A,autoComplete:"off",className:"withdraw-form",children:[i.jsxs("div",{className:"withdraw-input-group",children:[i.jsx("label",{className:"withdraw-input-label","data-i18n":"Withdraw Amount",children:"Withdraw Amount"}),i.jsx("input",{type:"number",min:"1",step:"any",value:a,onChange:v=>o(v.target.value),className:"withdraw-input",placeholder:"Withdraw Amount","data-i18n-placeholder":"Withdraw Amount",required:!0})]}),i.jsxs("div",{className:"withdraw-input-group",children:[i.jsx("label",{className:"withdraw-input-label","data-i18n":"Withdrawal Password",children:"Withdrawal Password"}),i.jsx("input",{type:"password",value:s,onChange:v=>l(v.target.value),className:"withdraw-input",placeholder:"Withdrawal Password","data-i18n-placeholder":"Withdrawal Password",required:!0})]}),i.jsx("button",{type:"submit",className:"withdraw-submit-button",children:i.jsx("span",{"data-i18n":"Withdraw",children:"Withdraw"})}),d&&i.jsx("div",{className:"withdraw-message",children:d})]})]}):i.jsx("div",{className:"withdraw-content",children:i.jsxs("div",{className:"withdraw-history-container",children:[i.jsx("div",{className:"withdraw-history-tabs",children:["reviewing","success","reject"].map(v=>i.jsx("button",{className:`withdraw-history-tab-button ${n===v?"active":""}`,onClick:()=>r(v),children:v==="reviewing"?i.jsx("span",{"data-i18n":"Reviewing",children:"Reviewing"}):v==="success"?i.jsx("span",{"data-i18n":"Completed",children:"Completed"}):i.jsx("span",{"data-i18n":"Reject",children:"Reject"})},v))}),j?i.jsx("p",{className:"withdraw-loading","data-i18n":"Loading...",children:"Loading..."}):E.length===0?i.jsx("p",{className:"withdraw-empty","data-i18n":"No more data...",children:"No more data..."}):i.jsx("div",{className:"withdraw-activity-list",children:E.slice().reverse().map((v,I)=>{const L=N(v.amount);return i.jsxs("div",{className:"withdraw-activity-item",children:[i.jsxs("div",{className:"withdraw-activity-left",children:[i.jsxs("div",{className:"withdraw-activity-amount",children:[i.jsx("span",{style:{color:gh,fontWeight:700},children:g||""})," ",i.jsx("span",{style:{color:mh},children:L})]}),i.jsx("div",{className:"withdraw-activity-date",children:v.createdAt?new Date(v.createdAt).toLocaleString():v.date||""})]}),i.jsx("div",{className:`withdraw-activity-status ${Xa(v.status)}`,children:Xa(v.status)==="success"?i.jsx("span",{"data-i18n":"Completed",children:"Completed"}):v.status?i.jsx("span",{children:v.status}):i.jsx("span",{"data-i18n":"Reviewing",children:"Reviewing"})})]},I)})})]})}),i.jsx(ge,{open:m,onClose:()=>p(!1)})]})]})}const y0=h.createContext(),wh=({children:e})=>{const[t,n]=h.useState([]),r="https://stacks-admin.onrender.com",a=async()=>{const x=localStorage.getItem("authToken");if(x)try{const y=await(await fetch(`${r}/api/task-records`,{headers:{"Content-Type":"application/json","X-Auth-Token":x}})).json();y.success&&Array.isArray(y.records)&&n(y.records)}catch{}},o=a;h.useEffect(()=>{let x=!1,w=null;const y=async()=>{localStorage.getItem("authToken")&&!x&&(x=!0,await a(),w&&(clearInterval(w),w=null))};y(),w=setInterval(()=>{y()},800);const b=j=>{j.key==="authToken"&&j.newValue&&a()};return window.addEventListener("storage",b),()=>{w&&clearInterval(w),window.removeEventListener("storage",b)}},[]),h.useEffect(()=>{a()},[]);const s=async x=>{const w=localStorage.getItem("authToken"),b=await(await fetch(`${r}/api/start-task`,{method:"POST",headers:{"Content-Type":"application/json","X-Auth-Token":w},body:JSON.stringify({image:x.image})})).json();return b.success?(await a(),b.isCombo?{isCombo:!0,...b}:{task:b.task}):null},l=async x=>{const w=localStorage.getItem("authToken"),b=await(await fetch(`${r}/api/submit-task`,{method:"POST",headers:{"Content-Type":"application/json","X-Auth-Token":w},body:JSON.stringify({taskCode:x})})).json();return b.success?(await a(),b):{success:!1,message:b.message,mustDeposit:!!b.mustDeposit}},d=()=>t.some(x=>x.status==="Pending"&&!x.isCombo),c=()=>t.some(x=>x.status==="Pending"&&x.isCombo),m=()=>t.find(x=>x.status==="Pending"&&!x.isCombo)||null,p=()=>{const x=t.find(w=>w.status==="Pending"&&w.isCombo);return!x||!x.comboGroupId?[]:t.filter(w=>w.status==="Pending"&&w.comboGroupId===x.comboGroupId)};return i.jsx(y0.Provider,{value:{records:t,setRecords:n,fetchTaskRecords:a,refreshRecords:o,addTaskRecord:s,submitTaskRecord:l,hasPendingTask:d,hasPendingComboTask:c,getPendingTask:m,getPendingComboTasks:p},children:e})},$0=()=>h.useContext(y0),vh=h.createContext();function yh({children:e}){const[t,n]=h.useState({show:!1,message:""}),r=h.useCallback((a,o=1600)=>{n({show:!0,message:a}),setTimeout(()=>n({show:!1,message:""}),o)},[]);return i.jsxs(vh.Provider,{value:{showToast:r},children:[e,t.show&&i.jsxs("div",{style:{position:"fixed",left:"50%",top:"22%",transform:"translateX(-50%)",background:"#eee",color:"#666",borderRadius:10,padding:"10px 28px",fontWeight:500,fontSize:15.5,boxShadow:"0 2px 12px #0001",zIndex:99999,minWidth:210,maxWidth:"80vw",display:"flex",alignItems:"center"},children:[i.jsx("span",{style:{width:22,height:22,border:"3px solid #e0e0e0",borderTop:"3px solid #bbb",borderRadius:"50%",marginRight:13,display:"inline-block",animation:"spin 0.8s linear infinite"}}),i.jsx("span",{children:t.message}),i.jsx("style",{children:"@keyframes spin { 100% { transform: rotate(360deg); } }"})]})]})}const b0="/Dept/assets/avatar-BAjli7RW.png",nl="/Dept/assets/vip1-XUMszZ5i.png",Hi="/Dept/assets/vip2-aKuU-F_0.png",rl="/Dept/assets/vip3-f99M10x_.png",il="/Dept/assets/vip4-BWc3wkmr.png",Je="data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="100%" height="100%" fill="#f6f7fb"/><rect x="20" y="20" width="360" height="360" rx="36" fill="#fff" stroke="#eee" stroke-width="6"/></svg>');function $h({size:e=36,color:t="#bbb",style:n={}}){return i.jsx("div",{style:{border:"3px solid #ececec",borderTop:`3px solid ${t}`,borderRadius:"50%",width:e,height:e,animation:"spin 0.9s linear infinite",...n}})}function Rd({color:e="#1fb6fc"}){return i.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"center",gap:"6px",height:"50px"},children:[i.jsx("style",{children:`
        @keyframes jump {
          0%, 100% { height: 8px; }
          50% { height: 28px; }
        }
        .jumping-bar {
          width: 5px;
          border-radius: 3px;
          animation: jump 0.6s ease-in-out infinite;
        }
        .bar1 { animation-delay: 0s; }
        .bar2 { animation-delay: 0.2s; }
        .bar3 { animation-delay: 0.4s; }
      `}),i.jsx("div",{className:"jumping-bar bar1",style:{background:e}}),i.jsx("div",{className:"jumping-bar bar2",style:{background:e}}),i.jsx("div",{className:"jumping-bar bar3",style:{background:e}})]})}function Md({show:e,children:t}){return e?i.jsxs("div",{style:{position:"fixed",zIndex:11e3,top:0,left:0,width:"100vw",height:"100vh",background:"rgba(255,255,255,0.7)",display:"flex",justifyContent:"center",alignItems:"center",pointerEvents:"all"},children:[t,i.jsx("style",{children:"@keyframes spin { 100% { transform: rotate(360deg); } }"})]}):null}function bh(e,t=2500){return new Promise(n=>{if(typeof window>"u")return n(!1);const r=new Image;let a=!1;const o=s=>{a||(a=!0,r.onload=r.onerror=null,n(s))};r.onload=()=>o(!0),r.onerror=()=>o(!1),r.src=e,setTimeout(()=>o(!1),t)})}async function jh(e,t=2500){const n=e.map(a=>bh(a,t).then(o=>o?a:null));return(await Promise.all(n)).filter(Boolean)}function kh({show:e,message:t}){return e?i.jsx("div",{style:{position:"fixed",left:"50%",top:"18%",transform:"translateX(-50%)",background:"#eee",color:"#333",borderRadius:10,padding:"10px 22px",fontWeight:600,boxShadow:"0 6px 22px rgba(0,0,0,0.18)",zIndex:2e3},children:t}):null}const Ah=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0},Sh={1:{taskLimit:40},2:{taskLimit:45},3:{taskLimit:50},4:{taskLimit:55}},Za="#1fb6fc";function zd(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}return e}function Nh(e=100,t=200){const n="/Dept/assets/images/products/",r=[];for(let a=e;a<=t;a++)r.push(`${n}product1(${a}).png`);return r}const Ch=()=>{var cl;const[e,t]=h.useState(()=>{try{const U=JSON.parse(localStorage.getItem("productGridCache")||"null");if(Array.isArray(U)&&U.length){const T=U.slice(0,9);for(;T.length<9;)T.push(Je);return T}}catch{}const M="/Dept/assets/images/products/";return Array.from({length:9},(U,T)=>`${M}product1(${100+T}).png`)}),[n,r]=h.useState([]),[a,o]=h.useState([]),[s,l]=h.useState(null),[d,c]=h.useState(!1),[m,p]=h.useState(!1),[x,w]=h.useState(!1),[y,b]=h.useState(""),[j,f]=h.useState(!1),[u,g]=h.useState({show:!1,message:""}),[$,A]=h.useState(!1),[E,N]=h.useState(!1),v=ie(),{addTaskRecord:I,submitTaskRecord:L,hasPendingTask:W,hasPendingComboTask:se,records:fe,fetchTaskRecords:le,setRecords:yt}=$0(),{balance:k,setBalance:z,commissionToday:S,setCommissionToday:O,username:D,vipLevel:Q,refreshProfile:H,userProfile:V}=pa(),{currency:ke}=fa(),Oe=h.useRef(e);h.useEffect(()=>{Oe.current=e},[e]);const it=h.useRef(0),[$t,Jn]=h.useState({username:D||"",balance:k??0,commissionToday:S??0}),gn=async()=>{try{const M=localStorage.getItem("x-auth-token")||localStorage.getItem("authToken")||localStorage.getItem("token")||localStorage.getItem("X-Auth-Token")||null;if(!M)return null;const U=await fetch("https://stacks-admin.onrender.com/api/user-profile",{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${M}`,"x-auth-token":M},credentials:"include"});if(!U.ok)return null;const T=await U.json(),B=T&&(T.data||T.user||T);if(!B)return null;const P={username:B.username||B.name||D||"",balance:B.balance??B.walletBalance??k??0,commissionToday:B.commissionToday??B.commission??S??0};return Jn(P),typeof z=="function"&&P.balance!==void 0&&z(F=>Number(P.balance)||Number(F)||0),typeof O=="function"&&P.commissionToday!==void 0&&O(F=>Number(P.commissionToday)||Number(F)||0),B}catch{return null}};h.useEffect(()=>{Jn({username:D||V&&V.username||"",balance:k??(V&&V.balance||0),commissionToday:S??(V&&(V.commissionToday??V.commission)||0)})},[D,k,S,V]),h.useEffect(()=>{(async()=>{try{const T=await H();T&&typeof T=="object"?Jn({username:T.username||T.name||D||"",balance:T.balance??T.walletBalance??k??0,commissionToday:T.commissionToday??T.commission??S??0}):await gn()}catch{await gn()}})(),typeof le=="function"&&le().catch(()=>{});const M=()=>{(async()=>{try{const T=await H();T&&typeof T=="object"?Jn({username:T.username||T.name||D||"",balance:T.balance??T.walletBalance??k??0,commissionToday:T.commissionToday??T.commission??S??0}):await gn(),typeof le=="function"&&await le()}catch{await gn(),typeof le=="function"&&le().catch(()=>{})}})()};window.addEventListener("auth:login",M);const U=()=>{(async()=>{try{const T=await H();T&&typeof T=="object"?Jn({username:T.username||T.name||D||"",balance:T.balance??T.walletBalance??k??0,commissionToday:T.commissionToday??T.commission??S??0}):await gn()}catch{await gn()}})()};return window.addEventListener("profile:refresh",U),()=>{window.removeEventListener("auth:login",M),window.removeEventListener("profile:refresh",U)}},[]),h.useEffect(()=>{let M=!1;async function U(){try{const T=Nh(100,200);if(M)return;const B=zd([...T]);o(B),r(B);try{localStorage.setItem("productGridCache",JSON.stringify(B))}catch{}}catch(T){console.warn("Product pool load failed:",T)}}return U(),()=>{M=!0}},[]);const ol=async(M=9)=>{const U=++it.current,T=a.length?a:n;r(T);const B=T.slice(0,Math.min(T.length,200)),P=await jh(B,3e3);let Ae=zd([...P]).slice(0,M);if(Ae.length<M){const Jt=[];for(let ya=0;ya<M-Ae.length;ya++)P.length>0?Jt.push(P[ya%P.length]):Jt.push(Je);Ae=Ae.concat(Jt)}U===it.current&&(Ah(Ae,Oe.current)||t(Ae))};h.useEffect(()=>{ol(9);const M=setInterval(()=>{ol(9)},7e3);return()=>clearInterval(M)},[a]),h.useEffect(()=>{if(!Array.isArray(e)||e.length!==9){const M=Array.isArray(e)?e.slice(0,9):[];for(;M.length<9;)M.push(Je);t(M)}},[]);function A0(){if(!fe||!V)return 0;const M=V.currentSet??1;let U=new Set,T=0;fe.forEach(F=>{F.status==="Completed"&&(F.set===M||F.set===void 0)&&(F.isCombo?F.taskCode&&!U.has(F.taskCode)&&(T+=1,U.add(F.taskCode)):T+=1)});let B=new Set,P=!1;return fe.forEach(F=>{F.status==="Pending"&&(F.set===M||F.set===void 0)&&(F.isCombo?F.taskCode&&!B.has(F.taskCode)&&(P=!0,B.add(F.taskCode)):T+=1)}),P&&(T+=1),T}const ma=V&&V.maxTasks||((cl=Sh[Number(Q)])==null?void 0:cl.taskLimit)||40,ga=A0(),Vt=(M,U=1600)=>{g({show:!0,message:M}),setTimeout(()=>g({show:!1,message:""}),U)},S0=async()=>{var U,T;if(W()||se()){Vt("Please submit the previous rating before you proceed.");return}if(ga>=ma){Vt("Task set complete. Please contact customer service for reset.");return}N(!0),p(!0);const M=Oe.current&&Oe.current.length&&Oe.current[Math.floor(Oe.current.length/2)]||Je;try{const B=await I({image:M});if(N(!1),p(!1),B&&B.isCombo){Vt("Please submit the previous rating before you proceed.",1800),setTimeout(()=>v("/deposit"),1800);return}if(B&&B.task){const P=B.task;(U=P.product)!=null&&U.image||(P.product=P.product||{},P.product.image=M),l(P),c(!0),b(""),typeof((T=P.product)==null?void 0:T.price)=="number"&&z(F=>Number(F)-Number(P.product.price)),(async()=>{try{await H()}catch{}try{typeof le=="function"&&await le()}catch{}try{window.dispatchEvent(new Event("profile:refresh"))}catch{}try{window.dispatchEvent(new Event("balance:changed"))}catch{}})()}else Vt("Failed to start task. Please try again later.")}catch(B){N(!1),p(!1),Vt("API error: "+(B.message||B))}},N0=async()=>{var M,U;if(s){b("submitting");try{const T=await L(s.taskCode);if(T&&T.success){if(b("submitted"),T.task){const B=Number((M=T.task.product)==null?void 0:M.price)||0,P=Number((U=T.task.product)==null?void 0:U.commission)||0;O(F=>P+(Number(F)||0)),z(F=>Number(F)+B+P),yt(F=>F.map(Ae=>Ae.taskCode===T.task.taskCode?{...Ae,...T.task}:Ae))}(async()=>{try{await H()}catch{}try{typeof le=="function"&&await le()}catch{}try{window.dispatchEvent(new Event("profile:refresh"))}catch{}try{window.dispatchEvent(new Event("balance:changed"))}catch{}})(),setTimeout(()=>{c(!1),l(null),b(""),f(!0),setTimeout(()=>f(!1),250)},250)}else b(""),Vt(T&&T.message?T.message:"Failed to submit task")}catch(T){b(""),Vt("API error: "+(T.message||T))}}},xa=(M,U)=>{const T=M.currentTarget;T.onerror=null;const B=Oe.current&&Oe.current.length?Oe.current:n;let P=Je;if(B&&B.length)for(let F=0;F<B.length;F++){const Ae=(U+F)%B.length,Jt=B[Ae];if(Jt&&Jt!==T.src){P=Jt;break}}T.src=P},[Kt,Yt]=h.useState(0),wa=h.useRef(0),qt=h.useRef(null);h.useEffect(()=>{e.length&&Yt(Math.floor(e.length/2))},[e.length]),h.useEffect(()=>{if(e.length)return qt.current=setInterval(()=>{wa.current+=1,Yt(M=>(M+1)%e.length)},4e3),()=>clearInterval(qt.current)},[e.length]);const sl=()=>{qt.current&&clearInterval(qt.current)},ll=()=>{qt.current&&clearInterval(qt.current),qt.current=setInterval(()=>{wa.current+=1,Yt(M=>(M+1)%e.length)},4e3)},C0=()=>{if(!e.length)return null;const M=e.length,U=wa.current%2===0,T=(Kt-1+M)%M,B=(Kt+1)%M;return i.jsx("div",{className:"tasks-carousel-wrap",onMouseEnter:sl,onMouseLeave:ll,onTouchStart:sl,onTouchEnd:ll,children:i.jsxs("div",{className:"tasks-carousel","aria-roledescription":"carousel","aria-label":"Product carousel",children:[i.jsx("div",{className:`carousel-item side ${U?"left-large":""}`,onClick:()=>Yt(T),role:"button",tabIndex:0,onKeyDown:P=>{(P.key==="Enter"||P.key===" ")&&Yt(T)},"aria-label":`Show product ${T+1}`,children:i.jsx("div",{className:"carousel-card-inner",children:i.jsx("img",{src:e[T]||Je,alt:`product-${T}`,onError:P=>xa(P,T)})})},`left-${T}`),i.jsx("div",{className:"carousel-item center",onClick:()=>{},"aria-label":`Current product ${Kt+1}`,children:i.jsx("div",{className:"carousel-card-inner",children:i.jsx("img",{src:e[Kt]||Je,alt:`product-${Kt}`,onError:P=>xa(P,Kt)})})},`center-${Kt}`),i.jsx("div",{className:`carousel-item side ${U?"":"right-large"}`,onClick:()=>Yt(B),role:"button",tabIndex:0,onKeyDown:P=>{(P.key==="Enter"||P.key===" ")&&Yt(B)},"aria-label":`Show product ${B+1}`,children:i.jsx("div",{className:"carousel-card-inner",children:i.jsx("img",{src:e[B]||Je,alt:`product-${B}`,onError:P=>xa(P,B)})})},`right-${B}`)]})})},va=(()=>{const M=Q??(V==null?void 0:V.vipLevel);if(M==null)return{level:null,badge:null};let U=null;if(typeof M=="number")U=M;else if(typeof M=="string"){const F=M.match(/\d+/);U=F?Number(F[0]):NaN}else U=Number(M);if(!Number.isFinite(U))return{level:null,badge:null};const T=Math.max(1,Math.min(4,Math.floor(U))),P={1:nl,2:Hi,3:rl,4:il}[T]||null;return{level:T,badge:P}})();function E0(){if(!s)return null;const M=s.product||{},U=(()=>{var Ae;const P=M.price!==void 0&&M.price!==null&&M.price!==""?M.price:((Ae=s==null?void 0:s.product)==null?void 0:Ae.price)??(s==null?void 0:s.totalAmount)??"";if(P===""||P===null||P===void 0)return"";const F=Number(P);return isNaN(F)?String(P):F.toFixed(2)})(),T=(()=>{const P=M.commission??"";if(P===""||P===null||P===void 0)return"";const F=Number(P);return isNaN(F)?String(P):F.toFixed(2)})(),B=(P,F=60)=>P?P.length>F?P.substring(0,F)+"...":P:"";return i.jsx("div",{className:"fixed inset-0 z-50",style:{display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.65)",padding:16},children:i.jsxs("div",{style:{width:"100%",maxWidth:420,borderRadius:18,background:"#1a1a1a",padding:0,boxShadow:"0 20px 60px rgba(0,0,0,0.5)",overflow:"hidden"},children:[i.jsxs("div",{style:{padding:"16px 18px 8px 18px",color:"#ffffff",fontSize:28,fontWeight:700,letterSpacing:-.5},children:[ga," / ",ma]}),i.jsx("div",{style:{padding:"8px 18px 14px 18px"},children:i.jsx("img",{src:M.image||Je,alt:"product",style:{width:"100%",height:200,borderRadius:12,objectFit:"cover",border:"3px solid #ffffff",display:"block"},onError:P=>{P.currentTarget.onerror=null,P.currentTarget.src=Je}})}),i.jsxs("div",{style:{padding:"0 18px 14px 18px"},children:[i.jsxs("div",{style:{fontSize:14,fontWeight:600,color:"#ffffff",lineHeight:1.3,marginBottom:8},children:['"',B(M.name,65),'"']}),i.jsx("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:10},children:i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,background:"rgba(255,255,255,0.15)",padding:"5px 10px",borderRadius:18},children:[i.jsx("span",{style:{color:"#ffffff",fontSize:13,fontWeight:500},children:"☆"}),i.jsx("span",{style:{color:"#ffffff",fontSize:13,fontWeight:600},children:"9.9"})]})}),i.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:6},children:[i.jsx("span",{style:{color:"#ffffff",fontSize:13,fontWeight:600},children:ke||"USD"}),i.jsx("span",{style:{color:"#ffffff",fontSize:24,fontWeight:800},children:U})]})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",borderTop:"1px solid rgba(255,255,255,0.15)",borderBottom:"1px solid rgba(255,255,255,0.15)"},children:[i.jsxs("div",{style:{padding:"14px 12px",textAlign:"center",borderRight:"1px solid rgba(255,255,255,0.15)"},children:[i.jsx("div",{style:{fontSize:11,fontWeight:700,color:"#ffffff",marginBottom:6,letterSpacing:.4},children:"TOTAL AMOUNT"}),i.jsx("div",{style:{fontSize:10,fontWeight:600,color:"#ffffff",marginBottom:4},children:ke||"USD"}),i.jsx("div",{style:{fontSize:18,fontWeight:800,color:"#ffffff"},children:U})]}),i.jsxs("div",{style:{padding:"14px 12px",textAlign:"center"},children:[i.jsx("div",{style:{fontSize:11,fontWeight:700,color:"#ffffff",marginBottom:6,letterSpacing:.4},children:"PROFIT"}),i.jsx("div",{style:{fontSize:10,fontWeight:600,color:"#ffffff",marginBottom:4},children:ke||"USD"}),i.jsx("div",{style:{fontSize:18,fontWeight:800,color:"#ffffff"},children:T})]})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",borderBottom:"1px solid rgba(255,255,255,0.15)"},children:[i.jsxs("div",{style:{padding:"12px",borderRight:"1px solid rgba(255,255,255,0.15)"},children:[i.jsx("div",{style:{fontSize:12,fontWeight:600,color:"#ffffff",marginBottom:4},children:"Created"}),i.jsx("div",{style:{fontSize:11,fontWeight:700,color:"#ffffff"},children:Eh(M.createdAt||s.createdAt)})]}),i.jsxs("div",{style:{padding:"12px"},children:[i.jsx("div",{style:{fontSize:12,fontWeight:600,color:"#ffffff",marginBottom:4},children:"Order Code"}),i.jsx("div",{style:{fontSize:11,fontWeight:700,color:"#ffffff",wordBreak:"break-all"},children:s.taskCode})]})]}),i.jsx("div",{style:{padding:"14px 18px"},children:i.jsx("button",{onClick:y===""?N0:void 0,disabled:y!=="",style:{width:"100%",background:y!==""?"#999999":"#ffffff",color:"#1a1a1a",border:0,padding:"14px 10px",borderRadius:50,fontWeight:800,fontSize:15,letterSpacing:.4,cursor:y!==""?"not-allowed":"pointer",transition:"all 0.2s ease",textTransform:"uppercase"},onMouseEnter:P=>{y===""&&(P.currentTarget.style.background="#f0f0f0")},onMouseLeave:P=>{y===""&&(P.currentTarget.style.background="#ffffff")},children:y==="submitting"?"Submitting...":y==="submitted"?"Submitted!":"Press Here to Submit"})})]})})}const dl=M=>{const U=Number(M||0);return Number.isFinite(U)?U.toFixed(2):"0.00"};return i.jsxs("div",{className:"tasks-page",children:[i.jsxs("header",{className:"dashboard-header",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"dashboard-logo"}),i.jsxs("div",{className:"dashboard-header-actions",children:[i.jsx("button",{type:"button",className:"dashboard-contact",onClick:()=>A(!0),children:"Contact"}),i.jsxs("button",{type:"button",className:"dashboard-menu",onClick:()=>v("/profile"),"aria-label":"Open menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]})]}),i.jsxs("div",{className:"tasks-content",children:[i.jsxs("section",{className:"tasks-hero",children:[i.jsxs("div",{className:"tasks-user-row",children:[i.jsxs("div",{className:"user-left",children:[i.jsx("img",{src:b0,alt:"Avatar",className:"avatar"}),i.jsxs("div",{className:"user-greeting",children:[i.jsx("small",{style:{color:"#ffffff"},children:"Hello,"}),i.jsx("div",{className:"user-name",style:{color:"#ffffff"},children:$t.username||"Champ"})]})]}),i.jsxs("div",{className:"user-vip",children:[i.jsxs("span",{style:{color:"#ffffff"},children:["VIP",va.level||1]}),i.jsx("div",{className:"vip-badge",children:va.badge?i.jsx("img",{src:va.badge,alt:"VIP"}):i.jsx("img",{src:Hi,alt:"VIP"})})]})]}),i.jsxs("div",{className:"tasks-progress",style:{color:"#ffffff"},children:[ga," / ",ma]}),C0(),i.jsx("div",{className:"tasks-product-title",style:{color:"#ffffff"},children:'"Dell 1905FP 19" &quot;: Refurbished LCD Monitor - SXGA 1280x1024, Black, Off-Lease"'}),E&&i.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:16},children:i.jsx(Rd,{color:Za})}),i.jsx("div",{className:"tasks-cta-wrap",children:i.jsx("button",{type:"button",className:"tasks-cta",onClick:S0,disabled:m,children:"PRESS HERE TO GET STARTED"})})]}),i.jsxs("section",{className:"tasks-panel",children:[i.jsx("div",{className:"tasks-panel-header",style:{color:"#ffffff"},children:"TODAY'S COMMISSION"}),i.jsxs("div",{className:"tasks-panel-main",style:{color:"#ffffff"},children:[i.jsx("span",{className:"currency",style:{color:"#ffffff"},children:ke||"USD"}),i.jsx("span",{children:dl($t.commissionToday)})]}),i.jsx("p",{className:"tasks-panel-note",style:{color:"#cccccc"},children:"The displayed amount reflects today's earned commissions."}),i.jsxs("div",{className:"tasks-panel-grid",children:[i.jsxs("div",{className:"task-info-box",style:{borderColor:"rgba(255,255,255,0.2)",color:"#ffffff"},children:[i.jsx("div",{className:"label",style:{color:"#ffffff"},children:"Balance"}),i.jsxs("div",{className:"value",children:[i.jsx("span",{className:"currency",style:{color:"#ffffff"},children:ke||"USD"}),i.jsx("strong",{style:{color:"#ffffff"},children:dl($t.balance)})]}),i.jsx("div",{className:"muted",style:{color:"#cccccc"},children:"The total balance reflects both the deposited amount and earned commissions."})]}),i.jsxs("div",{className:"task-info-box",style:{borderColor:"rgba(255,255,255,0.2)",color:"#ffffff"},children:[i.jsx("div",{className:"label",style:{color:"#ffffff"},children:"Hold Amount"}),i.jsxs("div",{className:"value",children:[i.jsx("span",{className:"currency",style:{color:"#ffffff"},children:ke||"USD"}),i.jsx("strong",{style:{color:"#ffffff"},children:"0.00"})]}),i.jsx("div",{className:"muted",style:{color:"#cccccc"},children:"Contact Support for inquiries."})]})]}),i.jsxs("div",{className:"tasks-panel-bottom",style:{color:"#ffffff",borderTopColor:"rgba(255,255,255,0.2)"},children:[i.jsx("div",{style:{color:"#ffffff"},children:"Fusion Campaign Reward"}),i.jsxs("div",{className:"reward-value",children:[i.jsx("span",{className:"currency",style:{color:"#ffffff"},children:ke||"USD"}),i.jsx("strong",{style:{color:"#ffffff"},children:"0.00"})]})]})]}),i.jsxs("div",{className:"tasks-notice",style:{borderColor:"rgba(255,255,255,0.2)"},children:[i.jsx("div",{className:"tasks-notice-title",style:{color:"#ffffff"},children:"Important Notice"}),i.jsxs("div",{className:"tasks-notice-body",style:{color:"#cccccc"},children:["Online Support Hours 10:00 AM - 11:00 PM",i.jsx("br",{}),"Please contact online support for your assistance"]})]})]}),d&&E0(),E&&i.jsx(Md,{show:!0,children:i.jsx(Rd,{color:Za})}),i.jsx(Md,{show:j,children:i.jsx($h,{size:54,color:Za})}),i.jsx(kh,{show:u.show,message:u.message}),i.jsxs("nav",{className:"bottom-navigation",children:[i.jsxs("button",{className:"bottom-item",type:"button",onClick:()=>v("/dashboard"),children:[i.jsx("img",{src:Zs,alt:"Home"}),i.jsx("span",{children:"Home"})]}),i.jsxs("button",{className:"bottom-item starting",type:"button",onClick:()=>v("/tasks"),children:[i.jsx("img",{src:el,alt:"Starting"}),i.jsx("span",{children:"Starting"})]}),i.jsxs("button",{className:"bottom-item",type:"button",onClick:()=>v("/records"),children:[i.jsx("img",{src:tl,alt:"Records"}),i.jsx("span",{children:"Records"})]})]}),i.jsx(ge,{open:$,onClose:()=>A(!1)})]})};function Eh(e){if(!e)return"";try{const t=typeof e=="string"||typeof e=="number"?new Date(e):e;return isNaN(t.getTime())?"":t.toLocaleString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return""}}const Th="/Dept/assets/vip5-BSNigyet.png",Ih=`
  html, body, #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  .vip-page {
    min-height: 100vh;
    overflow-x: hidden;
    background: #2b183d;
    color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  .vip-page button {
    font-family: inherit;
  }

  .vip-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid #dddddd;
    background: #ffffff;
  }

  .vip-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
  }

  .vip-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .vip-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 0;
    border-radius: 40px;
    color: #ffffff;
    background: #000000;
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    font-weight: 500;
    cursor: pointer;
  }

  .vip-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(34px, 5vw, 64px);
    height: clamp(26px, 3.5vw, 44px);
    padding: 4px 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .vip-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: #000000;
  }

  .vip-content {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding-top: 0;
    padding-bottom: 80px;
  }

  .vip-title-row {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60px;
    margin: 18px 0 16px;
  }

  .vip-back {
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    filter: brightness(0) invert(1);
  }

  .vip-back img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    display: block;
  }

  .vip-title {
    margin: 0;
    font-size: clamp(2rem, 3vw, 2.8rem);
    font-weight: 500;
    letter-spacing: -0.05em;
    text-align: center;
    color: #ffffff;
    line-height: 1;
  }

  .vip-section {
    padding-bottom: 16px;
    margin-bottom: 14px;
    border-bottom: 1px solid rgba(255,255,255,0.18);
  }

  .vip-section:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .vip-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 14px;
    width: 100%;
    margin-bottom: 8px;
  }

  .vip-row-main {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    flex: 1;
    min-width: 0;
  }

  .vip-badge {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
  }

  .vip-badge img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  .vip-info {
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
  }

  .vip-label {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.05em;
    color: #ffffff;
    line-height: 1.1;
  }

  .vip-amount {
    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: -0.02em;
    color: rgba(255,255,255,0.88);
    line-height: 1.15;
  }

  .vip-current-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 90px;
    height: 32px;
    padding: 0 16px;
    border-radius: 999px;
    background: rgba(255,255,255,0.16);
    color: #ffffff;
    font-size: 0.85rem;
    font-weight: 500;
    white-space: nowrap;
  }

  .vip-features {
    margin-left: 84px;
    margin-top: 4px;
  }

  .vip-features ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .vip-features li {
    position: relative;
    padding-left: 12px;
    margin-bottom: 4px;
    font-size: 0.9rem;
    line-height: 1.35;
    letter-spacing: -0.02em;
    color: rgba(255,255,255,0.88);
    font-weight: 400;
  }

  .vip-features li::before {
    content: "●";
    position: absolute;
    left: 0;
    color: rgba(255,255,255,0.65);
    font-size: 0.85em;
  }

  @media (max-width: 720px) {
    .vip-header {
      min-height: 72px;
      padding: 12px 14px;
    }

    .vip-logo {
      width: 180px;
      height: 34px;
    }

    .vip-header-actions {
      gap: 9px;
    }

    .vip-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .vip-menu {
      width: 28px;
      height: 24px;
    }

    .vip-menu span {
      height: 2px;
    }

    .vip-content {
      width: calc(100% - 36px);
      margin: 0 auto;
    }

    .vip-title-row {
      min-height: 46px;
      margin: 10px 0 14px;
    }

    .vip-back {
      width: 32px;
      height: 32px;
    }

    .vip-back img {
      width: 20px;
      height: 20px;
    }

    .vip-title {
      font-size: 1.8rem;
    }

    .vip-row {
      gap: 10px;
      margin-bottom: 6px;
    }

    .vip-row-main {
      gap: 10px;
    }

    .vip-badge {
      width: 56px;
      height: 56px;
    }

    .vip-label {
      font-size: 1.15rem;
    }

    .vip-amount {
      font-size: 0.8rem;
    }

    .vip-current-pill {
      min-width: 78px;
      height: 28px;
      font-size: 0.75rem;
      padding: 0 12px;
    }

    .vip-features {
      margin-left: 66px;
      margin-top: 3px;
    }

    .vip-features li {
      font-size: 0.8rem;
      margin-bottom: 3px;
      padding-left: 10px;
    }
  }
`;function Lh(){const e=ie(),[t,n]=h.useState(!1),r=[{level:1,amount:"USD 100.00–499.00",badge:nl,current:!0,features:["Suitable for most data capture scenarios involving light to medium usage","Profit of 0.5% per product data","40 product data per set","Up to 80 data submissions per day","Can complete 2 sets of data submissions per day","No access to other Premium features"]},{level:2,amount:"USD 500.00–1,599.00",badge:Hi,current:!1,features:["Premium user have limited access to all features of the platform","Deposit according to our events","Profit of 1.0% per product data","45 product data per set","Up to 90 product data per day","Can complete 2 sets of data submissions per day","Better profit and permission","Full access to all other premium features"]},{level:3,amount:"USD 1,600.00–5,499.00",badge:rl,current:!1,features:["Premium user have limited access to all features of the platform","Deposit according to our events","Profit of 1.5% per product data","50 product data per set","Up to 100 product data per day","Can complete 2 sets of data submissions per day","Better profit and permission","Full access to all other premium features"]},{level:4,amount:"USD 5,500.00–9,999.00",badge:il,current:!1,features:["Premium user have limited access to all features of the platform","Deposit according to our events","Profit of 2.0% per product data","55 product data per set","Can complete 2 sets of product submissions per day","Better profit and permission","Up to 110 product submissions per day","Full access to all other premium features"]},{level:5,amount:"USD 10,000.00 OR ABOVE",badge:Th,current:!1,features:["Supreme user gets unlimited access to all features of the platform","Deposits according to our events","Profit of 2.5% per product data","60 product data per set","Up to 120 product data per day","Can complete 2 set of data submissions per day","Better profits and permissions","Full access to all other premium features"]}];return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:Ih}),i.jsxs("div",{className:"vip-page",children:[i.jsxs("header",{className:"vip-header",children:[i.jsx("img",{src:pe,alt:"Stacks",className:"vip-logo"}),i.jsxs("div",{className:"vip-header-actions",children:[i.jsx("button",{type:"button",className:"vip-contact",onClick:()=>n(!0),children:"Contact"}),i.jsxs("button",{type:"button",className:"vip-menu",onClick:()=>e("/profile"),"aria-label":"Open profile menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]})]}),i.jsxs("main",{className:"vip-content",children:[i.jsxs("div",{className:"vip-title-row",children:[i.jsx("button",{type:"button",className:"vip-back",onClick:()=>e(-1),"aria-label":"Go back",children:i.jsx("img",{src:ze,alt:"Back"})}),i.jsx("h1",{className:"vip-title",children:"Vip Levels"})]}),r.map(a=>i.jsxs("section",{className:"vip-section",children:[i.jsxs("div",{className:"vip-row",children:[i.jsxs("div",{className:"vip-row-main",children:[i.jsx("div",{className:"vip-badge",children:i.jsx("img",{src:a.badge,alt:`VIP ${a.level}`})}),i.jsxs("div",{className:"vip-info",children:[i.jsxs("div",{className:"vip-label",children:["VIP",a.level]}),i.jsx("div",{className:"vip-amount",children:a.amount})]})]}),a.current&&i.jsx("div",{className:"vip-current-pill",children:"Current"})]}),i.jsx("div",{className:"vip-features",children:i.jsx("ul",{children:a.features.map((o,s)=>i.jsx("li",{children:o},`${a.level}-${s}`))})})]},a.level))]}),i.jsx(ge,{open:t,onClose:()=>n(!1)})]})]})}const Ph="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACQMUbvAAAHlUlEQVR4Ae2bbYhUVRiAz3vu7M76MR9pSC6YS25rH5I/JAp/lPYjI7PdyRUL/FWQUUtoBkGabWGBgSQSEVbQjz4QbGdNDD+I1R+FkkJJGYaGJihIyc7MrruzM/ec3vfeubP33A/vjAu5d/aeHzPnvPc97znnuee852POMBaFiEBEICIQEZi0BKDWmq2RUus/NLxIFPVFUmi315pvMutxVv6j1JU6AgDSr56BgHj/4GYp4XkmZRsa4X6GQiyXDPjx2Tyx4p9OKDjb4QtI21dYI4TYjWDSzkwNmQYYns2Tc52QPHsE78vtQDh7pgwceuNSzvhXFA45X74LEMGRwDZiBt/e5TTSMGkpHpaOdisQKsOKeo4iNwAA5BjAAAh5moF2rRGgSKavx7bea2+LBmxFOZM+bMliVoS+Kz5HhQMggMNnojO5nnR83T09DFng2SFsT3mnvdqCxQiYG5AxWwmHQ0Y4Gp/+SLmz6Ue7kakUr/ogYyp3tJx6zlSGQzgMQLQIxLHYpvBBn2MNK0U+xRIGIFohY7urvclggA55irHwbK4BhbYPzqfGbOUUTsG0Achzb9UgU/lE36k6rCZqrQHzR4ACXmoEKAIUQCDgcdSDAgApezFVV7bHsoVlqqyxUoLJ9qAW+QKSUu/RGesJMtDoz6MhFvCGI0ARoAACAY8NHwQ8dk7qZUUVILaBM/mrImywhGCwWEr1wIxY2JtpAhKlYbuQ4gSnnEkcdcobKY2zNMOJSAngYBH5IAWPOxEBcjNRJBEgBYc7EQFyM1EkESAFhzsRAXIzUSQRIAWHOxEBcjNRJBEgBYc74Xvc4Vad/JJeKfm2bGGpANGFdwiWMAat+INoq1FzgMt4s+AyXjw4xSXv35JJ/LStfyiwUTcFaPrB4bnFkdIqvJplFh5YjKkAWMH4tKb915+YcaXGLDWptQ3Ilr8HC6++k81vQghzxm9Y2K5aSNmBxjpQskxnYhPqXgUG2aAC6gbU9F3uwZGR0mGsBN48s1UgqCR8TtqYdzvaeLz0dOrnGrIEqmjZwuqLg7kP0fi8QGVFQc6RTBo3VhSxI1G3DyrrbKcJx2Gp1iSCNWzUqu+jRxedeF/+PSH1vfXD8THqIa67B+GYfsDDTn2iCdogOFp//hvsAWt9CwY4g/4Gj2sk+h4K0Io9eDHW/z4zXdtn/YAATmMhS2sz76NFNiYQcFht84QDUEQ/91ETh0+KnalzXg4gvi/XXhLyJfSfPdiOuLMaQopVKDtqyeseYkh0IwM2aBmo+xvzxjS2oe58lQzkcyQTb7ryA5yINzcvFJn06wTH9bwioGekQ7p4pfCEUw/Bv0ZlWHLjuh39vKNLfcAS0rcG2nK/A7NbNYvRbIUO+U8Pn7N3QUtq3bknoWhvQ1C8/XsZPz+a+xL1uhVdYJfmp1MdF5bDaP1DDC1VpunditEaE9dr1PNSo6ncBQd7wYJ40hdO8/78PeWy3Iz5YvjSt5cyM3+xbBNQhLTufDE/D4fbQ5acyjDKYuyDuodY1cj/HOnFRSA6Z1zn2AL6HBwqa/16Di1JSiVxHPOtw6HzbFnqP6Sz6j1Myks2cLgpvY/KojJDA4hWyMYi0M4HHfLoymkXbaJqlOBgzzmCglRVyOSsIVlwXRYjG+Tcx/UoJudQmaEBRNsHtQGM0WzllFHaGw49gWszIfEbxZzByxaVGRpAOGXj3soWcJ3jNVv5wgF2XdN492AGPGdgwxbatJWArogtCQ0gY+Npq725CLQJMDrjwNAd5TI7iFHbsMIUweHaU+XOhDJTq7lJjRaW9gCt4QFk7cqr9bdWyFUBGy3SIk/OGpeYMY3D6iA4pqbDJpYZHkDOVnukQRMXPMRM11nP/b/LZq9nN5Sh5w4PIOM8x94c91FLuTON/x5kn9u1zLhceeZsvi8YktMmXAkPoOqms9Jk2nh6hK1dqRfxL5ZfuB8RpNxXbvm4BJ2yw6a8HBpA6EBPjTcFY7grp42nIsNEL/4BZ2tX8gVvSKy7af+QA4JpwbDl2OnjP1lPhgYQHZM6YdCu3Cmj9I0gAR4neuXxssUZ34cvhrF4X75jjImz9ozA2adcal/bZbc0zhnouvgWu85t1XqYW42Ffqtp2iq8m83vwm3GK5QH/dNu3Mm7ThFbDozML46NncVeaTv+gKtvZ5JzDUC47wDenxvElVGyWnhYIuZm9VG//Rg1oyU70ib5WMxrYWns6Iv5YwhnfLOKeQD4GyKTNDer9L9xFHwcFiZKPbFhdGRBDVXktsRoZtoFXzh03OGAgyvGS3emE7vIRNUH3dWc6EVsJ212wxTtxiOLYzRUaq006VIe1FfPglDAmbaRzoLIljHEKEKB3sJfYwUcuuLlkA435cjVbJX6GXTkCoy/L55JbrZyKYAsIfmklmzhbh2cCydL49Z/60y+xaR4zLcmuPHExtV1aI+uZo/elXyOXI5l1xOQ9XAyf9NLNA/vPc6nb6Li1HP0TGKLHQ6ZCS0giwEdsAum38QPhxUL6JDJ5yAcXEK4Q+gBUZOsn57pmJROAt3N9JLAVewtO2i2shyyp5aXMKwynF3qurxAK+6wtjWqd0SgQQj8B9qdCCWlPzDhAAAAAElFTkSuQmCC",Rh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACQMUbvAAAFE0lEQVR4Ae2cT2gVRxjA59t9Ly9R85JCNVTwYNSjnpqLLbSHUkttRQMiCHrzoHgQPBlBchT04MkWSi899FBKIxWsDQUtpPWgJ1HBqPGgKKgQ34sxidndr9+32d3ubHYz7+1u4ua9WXiZme+b/Xbm976ZffMvQuhrSQIQp0VE6ByZ2mYDbIzTt5rMRHw2u6/7AQBgtG4SoK1XsDLxbmoYHecoZeyJZm7xdA0M47v+ju7hh1/DnF/XABDDeTRXHxOIH/vKtgwBbm2pVD/1IRk+BPactofDMMhBXBYeGBcQ9zles/J5tXXILJgJQyjxH+6QKZD6HDDEDwaaP7O+1S8H7IPoiCOhevZ4TMZdQO7bKtJ/MxxrX/f10E0tGy2NTAlb2GFAwnuDjwd9UMvWPmPFNCAFQA1IA1IQUKi1B2lACgIKtfuaV+RpSt33J651OkQwhGnq5hwyVyrCfroTZnIw5ZrIBVD599qAZYszZHHgxXStT0znVbx0dmDk9WMQMFaB8umZvWuepLOycFfmPsgYqZ2wLHGDxjDf0KcvS2FyuxfFZhoqHJrFd3dKl2q7stjNBIg9B1GcpxGemaUQy3YviqrtiJ+6L9c/TPuMTIAWmlVB4QREcMO0hceDZJORrH3QgPQ8gPuA8CN10Y4kdxPQj2gfC8sBzIvkfRNhWeY4Op00Dj8pUHzg26JhplxOX9FAmBoQv63cDjn0EIbjDFbPhURBtPTb1Ge2EBIgA8Uv1mD17yBTThHqF7ejwAMhc1tC8aaiqZtY7Ks81nOaKk9emaMenPpnR2pAedWk6HY0IMU3pAFpQAoCCrX2IAUg9zXPK4v0CpYunsjmudqka7I+15mkK6C8i+ryeVK5uK70u0m6mIlFEhcQL7sal2p1ylT1c/Esf3Qi29e5oR1FKmmLlUDcRHW5llioCBzKV3OXoiniNjFekwYw6FetvpgAL0H76/RBH8Rr0oKWXdseETFwWXggAkC8Fs1r0kTvLI2l6m0IijcvnA2vyzMDaSzmLdiformUIeX2F6Pcaduzf6wKkABPTGEcTiprePvLw0gmCZCv89rfOKX5E3utv4brXk3OxuoKKJxZapWY31ZJg7WgiRWwUoUokgak+Bo0IA1IQUCh1h6kASkIKNTagzQgBQGFOvaHouKeFVd7S9sXaOV2B40Xb5dMcWJ+T8/NlShI4ZvYmqvTH1k2jhKcnQRkHYecZrkGRATmZua/pXmqXgkGpV25JFyeROE9CEX8eZEked6YCg8o7wo3a08DUhDTgDQgBQGFWnuQBqQgoFBrD9KAFAQUau1BGpCCgEKtPWi1AwKBz+LqkCSPy5tFVngPqnSVL9Oq3mupkpR25ZJweRKFB/T2q7XPSyZ8SRNl/xKCNxxymuXLg0S2uipmFL3Zw0/8os/7kRUIC+9BK8BgyUdoQEvi8XaYKfK0tTq1B/HJvkXk6CDJItl7END+pmg5eIdLqitpW0xDxuhk3wRNqG8OMoOYpJN+o5SOnpWgbMZ6gfYXQV6OgPkXHe94KckyJhbgwG46RdQRMvUrDvbuD6UbjmZ6ixGMf+hUzf+A6AhS5JRNqCCLHY6BLd5gGroldVS2ShvCxmRJ44ZTNzF+BJ0JHSr+fka421+pft84EjlnJkB8YNY0gM5lwQvZbFFScLcsjP3+P0tKU6pMfZD/QD4TysceyY35ZB8fXsvFrm+/ydCi1dd73KzYc7LAafK5OrsmEEPgP85RgkNX2hzmAAAAAElFTkSuQmCC",Mh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACQMUbvAAAFFUlEQVR4Ae3ay4scRRgA8Pp6ZmeJuzu9OcTVKAQElWBuuUgwYBA9aJbs7BIFD4kXD6KCf4AQH3cvEnIREgVFDeyuJqhL0HjyFCOCCD7wsb6IIMnMOJnNzkx/VrWppqafNd1V3dXQe6nqmu7qr35bXd3VXYRUf5VAJVAJVALGCoCxkUUENvtRd9f1bTxOiNO9q2Gf+fFRuBGxq5LiUgE1Vrt7B8T5jBC8zW09wKXmFD7SPjx/VYlGSCWlAXJxwLlIEBfG2gHky+YUeVgXUimAInG4lEYk44EScTQjWbx+E9NoHHAC8SLZ3xmQC/b5azsDv2UoMBYoBmdgAawAwEuBdmtAMvISS8B5fNRqrjMca619AhGDUArHJOOAbvmkd3u/P/wqcLciwHqOh8N7j24k4y6xrf7oeVkchuS07JeBwAkO5qWKLjfjgAhgcACmAgSdKa/xvoyzbL+iC8k4oB1Qe50A/DlmgFh3AN6prV47OlYubLhIGgZu44B6R2avNOrkwVRI7HJTjGTcIM07xfS59t3bQ/I5HY928zI3BRhaiE+OlufPjpULGyoHbmOBWHtNQCoEaPqDzr3bDr5BZ+X7aACruxfs534/AH2hE3jZopFyBwp9CATy6R0L9qKJSLkCheLwvmIoUm5AsTgGI+Vym5fCYUhIHvrjSvvcnV/gDm4mpjcW7R8aCIfUPwLA+aOINfFcPK8dKBoHBrShH/NAvDQJabn5fUakV71z8QzigbX1fw/yTTHVChSHY1nwhLPUfIw+2J0SA3LzMkgpHib3X8IpOvvfFzgfLYC61Qkr1waUhDNaaq5RHKTps6mQJrzcGM7lzfZ7FKHlh6AD8enB4sxlfznb1gIkg8ODyYTELjeJnhSLQ+d4Ky37aR6PP1V+F5sERwyGdn2orXdO0vQZsdzNZ3kEsMhTzghXaD3BnsNwlprHzgKMAue8WaAUKC0OD04LEq/cl9Kem4jDDlEGlBWHx58HkiyOMiBVOHkgTYKjBEg1jk6kSXFYLJnuYrpw3P9c1kcA9+5GNjk4fSX7VtKAzPcV09RjkE4cMcAsY9LOC2h3eh36MGr9NTwyd1GsVzafCigvHN6ILEi8jrTpxECxOCHfrdIG5j+uKKSJgIrC4VhJSHvm7cO/HIItvr+KVHqQLhqHNZbehWLnbpvtzosqUMQ6pIBMwOFBM6S99zRfoNu/8jKe0h52P8+rShOBTMJhjWYTz2+/a79Ls3v8CIDWhr8s63YskIk4ka8s3Fn53GtZQfzHRw7SpcNJmJX7Gy67HQo0u9G9tddzvvZWk3q1hS9B8X7WlIl9n0Pg7ZVW83jcK4ssYdXDDr7ex2NG4fzWfp/GueSP9ebcShsOO18oEF1qsmssGHrnsEhw8dLYPho2hJ4ThRP7sktFSLGDtHcCxC2+7M0r05wRcIJvAtllpWnM8TcrvAf598p5Oxbn/zeBWi8rsblyPUg8QnNeAkf7ZSU20Sgg03AYlDFAJuIYA2QqjhFAJuMUDmQ6TqFAZcApDKgsOIUAlQknd6Cy4eQKVEac3IDKisOA5Car9NNk48PufeyANH/0NSlbFxiclUsuQUlzTlXHyAEhTg+Go29UnZTVk2Yhgcrzy9ZVyFysLDgMMQLI+ltWeNL9yoQTCTRTJ2/StWc/T9r4pP3pF4LTeb0JTIpF9vfQrxrs4IUNnPmn33kAiTUnW1ncflbN+ilqqW3ccdVvlUAlUAlUApVApMB/kSxWe8bnyVUAAAAASUVORK5CYII=",Od="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACQMUbvAAAHfUlEQVR4Ae1cb4hUVRS/587szuoysxvGhgum6LaSSH6IKPxQWpBR2TqlSOGnvhghoRn0R6MNLEmQJPoQ1scoBHPW/pGGqB+sJP2QhGGoZIHikLEz47rOn3dv59yZ9+be9970ZnbJ3Tf7Lqzv3nPPOfee37v3nHvvuw5jUYoQiBCIEIgQmLYIQLM9WydlbOTQ2FJRtJZKEbu9WbnpzMdZ5bfymp7vAUA26mcgQHxkdJuU8DyTcgEq4Y0UhZguGfCf5vDkqr+HoOC2oyFAsYOFdUKIvQhMr1uoLcsAY3N4aq4bJN8RwQ/kdiM4+2YMOPTGpey+JgqH3C/fAxCBI4FtQYGGo8utpG3KUjwgXXYbINSmFY0cg64AAMgxgKMg5BkGsX/aARTJrI1o6926LTFgqyrp3sM2LW5n6FnzOSY4AAI4fCKGUhuJp6G7p8qQJZ65jvZU9ujdFixOgHkBUtFKuBwyghPjsx+sDHWc0JXMpLzjg1Qod1lOI2cmg0NwKIBoEYhzcYGBD/oce1oZ9BlWUADRChntdkaTwgAd8gzDwtdcBQptH9y1Klq5iTOwrADy3Vu1SSif7Ds1p9VktbWhfARQwEuNAIoACkAgoDoaQQEAGXsxk1cOxDOFFSatvUqCyYEgixoCJKW1yWJsU5CCdq+PpljAG44AigAKQCCgWvkg4PHz0qoYrADxzZzJXwximxUEg2VSmgdmhIVuZhUgUR7TiZQncCrp5DE3vZ3KGKUZBiIjgQuLyAcZ8HgLEUBeTAxKBJABh7cQAeTFxKBEABlweAsRQF5MDEoEkAGHtxAB5MXEoEQAGXB4Cw2PO7ys058yLCXfkSksFyDW4B2CexmDfvwg2q96DnAZbxZcxosHp7nkI9vTyR92jFwPNGpCAM3+bmxucby8Gq9mVRsPbKbKANjBxKyOr2481n2lSZGm2BYclV1/jhZeejuT34og9NVvWGhXLaQcRGWDSFlhMbEVebPAIBPUQMsAdXyZu298vHwYO4E3z7QOBLWE9cSNsu+hjkfLT/X83IRIIEssU3jm0mjufVQ+L5DZYJB9kkl1Y8Uguwot+6CKxfZUwXFparaIwCodzfI34KOLTvxA/h0hrf2tg9NAqQ+55RGEc/oeHz2tkSapg8CJjeQ/xxGwvmHDAGfR3+BxjUTfQwn6cQQvw/4vqZab+7d1gADOYCPLm1PfgIt0TCLhtNrhCw5AEf3chx0cPioO9Zz3cwCJg7mBspAvoP/chHYk3N0QUqxG2jGb3vIUQ0S3MGCjtoKWnygbj7HNLcvVBMjnSCbe8MgDnEx0di4W6d5XCBxPfY1AdcRDvHil8KSbD4F/mdqw6eq6HX3esaR11CbSMwaxlY0OzKYqilG0Qof8u4/P2b+oq2fD+cehqNsQlB/4ViYu3Mx9inxrDV5gf83v7Rn8YyXcbH2KoaZamN5rKG2ycKNJPj82CuUecHAULEqkfMHp/LqwtFIWr5OueAffWXoy+auulwBFkDZcKObn4XS736nDiKjaYmxXy1PMUXKLM8O4CETnjOscLaHPwamy3m/k3HFIdpdL4gjKPEd/lCeaJq2yJEs6cLoZo4/aojZDAxCtkNUiULOQHPLNJ2Zd0khO9tpYAaMtLhqdJPuqNIfgZEgH6XIIKiP7qM3QAETbB9MAxihauWlOGcAToXCUeGk1AT9d1OaEfJDTiVuYwZCNeyst4TrHHa1oCqlRgkDQJx2NW2WJhgEJB5YszulOnrm6CpyvOaQLMrmzWOesk6jN0ACkNp7ooe1Ei8B6iTFyyNmx/BE1rfQKWwCf9A3M/syDvFmUeUR33DWdDkDUZmimGFrXr9lK5tZWyFVqNVrpPsfk9pZknx3h6nWmTmozPADVrbh1OfTc4QFInefo2JhHLbTOwSmR1Tn+Ow/ZqozOZepEfVdC5IPU8KczHZXQzRhOmHwJOumFupP2fHe37xv4OGlS6tZJ0zg0AKEDPY0GrFDoKGvkEtp46pGsFpV+pGqKVrZDtmX0+wZXbWLtSbpKVj2CERn/J+up0EwxOiZ12cRoV+6mOWUcJU7ezvjRanV+ujjjB/HFMJY4kB8sMXHO1kNP4OxjLmOf6bQpzXMGliW+wGF/m9OP6lZjsd9qmtZEGMovIn9tNQ3Zvu7UQn3tY+vp+mZ8frFUOodRS1tIQvatdGquAgj3HcBHcqM4CVO2UGie1c3qQ377saDNKtmodvTF/HEEp75ZRToAf1WkU7sUQMTIR/I7pRCvUT6E6X877nB80MLO5DDCdiqE4FCX1+KRxXGaKs32n3hJhmTdMpzFttBZENGdEUQFGm4XS4VhKcWLIZ1uxpEr2eROQUeuwPi74unUNlvOAMgmkk/qyhTussC9cLI5pv5pMfkmk+Lhhj2ZwKE9/kTFPmtN6ln9pyp8AWrY6DSqoJdYPbz3OZ+eQD9p5Fjp5HYdHFITWoBsDOiAXTBrAh8Oaxrw/Jl8DoKDSwhvCj1AZJL96ZmOSevrHq+xJgWyOFp239mb/MB2yGZ9tdQWANmGYXRp6fLCMP4ugC0bPSMEIgSmBIF/AcD4Io0VxSrhAAAAAElFTkSuQmCC",zh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACQMUbvAAAF9klEQVR4Ae2bX4wTRRjA59tty/Wu3TaiJggXjJKQSCIgGKM+mIMokOO4q0QTE/8Qcw+AaEiIMf6LiJLogzFKRBJ90wsPkGuPu6APaHwwGM3BvUiURAMG/APC0W25/+2M37Td3m53u9Pe7Zm77kyz2Znvm/nm+36dne3OdAmRSRKQBCQBSWDeEoB6PAsmb66hkL+XUXYHtosTwM9CTowwopALKiODU4n4GadQhAHe2seiwzSzjzG2Aw0sdzLSGDL4uikY7B7raP7THI8rIDWZ3U4Z/ZQQdpu5UcPmAX6/vVlbfWUTjBgxKkam8qwk9Tcpocd8A4cDYOzuf0czB8wsHEcQwtmDl9Qhc0V7Hsa5Rbt8IUkA42dNFo9xFLFEbIUhswEKpvQHcox8j7EHjEqFM0AOCPtIVYI9S7XmXy62cUALPym96ffwW37FHEk8GovfeBR0LrNCQEGOkg+QaqX850Ag8NxUR8tZinUu4tEoCRTlN0Z5VNNpfHwsgiU7oMCJ7IZ8Lv/wdFWeg6uRILRlO1quWeX+KFkmaZqn2yvDVhTYme3QfAmHs7AAwol5swUQwGC+S0taZD4rlAEhHJywodUcPwCcMpf9mC8D0gayi3FyDlohsMvWsv9KZUA5ElhUGT4+ak1UyvxWLgPyW+C1xisBCUhJQBKQgIBALUeQBCQgIFDLESQBCQgI1HIESUACAgJ15cKYoLq7et0gCw5d0rvxofchrJnBp9+BfCL2lXsrvnDLINCXeQrPG3ldfEj+JtepHcWzcElXTepbsNJWbKahpdNrW2Ofn1kPU6I+a9V7donx7aGzl/QfcZX6MAb6NB67KWMncX37Yzdn9jOmKMlMP6WsB9s+zw+e5zKuc2vLbfM+eF/FPslh7gP3xa1dPTpXB+oxhHtnB3Ebbm1lG3T8Rf4tV8qN8oFU5gX85tuN8vSZtRd10xJzrjBy0LZZVsijDwVfbIqZCTwDhJuUfJg7ptIl4KxjpMNRgUIcTdV1xcvKsambL44NXISeAcKZA+eAqslN53Y5uOlcbLr6UtVJJ4WHgMhppw6KMlZVhztTM9LxCbl6f9VturRxVHkGKKTAy/hXhlFbL0CG+J3FJi8JImFyEG9bf9n0KCvobIqioGATbdvU6EPBF5tiZgLPAE10audDinIfBtuPx3WEdQFv04cWK7FH3G67mc2x4eaQug7rfomX6d/84Hku47pqYXGb3Dbvg/dV7BP6uQ/cl2rt6pV7+juo5Ng2wwn+I6aW/aKR9sg/WPUZc7vyvwcMocP5WidkUfxS6SjU8HqN2LMR5OB/Q4gkIMHXKAFJQAICArUcQRKQgIBALUeQBCQgIFDLESQBCQgI1HIESUACAgK1HEESkICAQC1HUK2AQjBpWw0svfYkMNHY6vKCmb41fgN6039guMuNkHF34G3o1Xfiih1f+/I2MbQ6N2kYFJK6BbT3Swtqs+qlDIhbweVLvgm3y2qRLZkDPNYuvC0tYZSsuk70HWoquzffFT0+G/OWOSgW0V5FY5dnY3AetV1Kaf4YJPWTTQPpu2bqlwUQf8MlFIQNOJR+mKnBedeOsS0Tk3AOt6nfWHWOher1z3Ee4Hvi757QN+JLMOvR4J04WzjWq7czW33+zqinCcK4G/sE7plZ3wEz+gA4r6rK7ty26LeGSE1luimlnxllfm4KhpYZr2bOTeDm3v7n/KI+fcUkJZ/gvvVj1brG77snrKr7RjojV3wHyICiJtNPUgIfIij+hrZT0kGB13C05XFSP2Ku0NAjyBxo6Y3td/Cy24MgVLOunAeSwQvdss9vBmSZpMuNGiTDfwfRRGxvQA3cjzeenxzDqoBTWaehARnBTnW2DL3VpT2IE+4uvN2kDXktZ18A4iD2A1D6ePxIS7O6En8Qf1ELHF7HN4AMIDc3Ra/iZfesCmobPjv8asinz5BvoeGMUfYdICPwXCL63T0rtdX43PY6ysYMOf5f6bj5Ga7hfgcZgdZzDqdGWyfIVAJhpNcs0466/V2nHruyriQgCUgCksAcE/gPG+7bY87hhtMAAAAASUVORK5CYII=",Oh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACQMUbvAAAGmUlEQVR4Ae1cXWgcVRS+Z2Z/EpPNxrappEHrg6mhSApqER9USv3DNmm0b1UE36z6rj60xPTJdxURFBHtm82vRS1S6s+DFASLFm1ejKURmhR2s2mTzO7c6zm7CZl7Z3bvzOzuZFtmIcw959x77ne+PfdnZueGsRb6pKfz/fTXQpCY0SpgjPH8h1ZRXKE/KrcKLmgFIJQ1RIwTSyoJe9aGsrNO3VaUWyKD7JLRpwbvpVPrRCG3BEFRBBq2j5ggDXNbTpAQAgRj21WcpCObqo9ajhwABZ2aWNpvMxgRjD+LAQ8wwTo8Awd2E/V/ATO+N5mYsEa6LgIQn9F9IiMoOb28z7bt14Vgw0yIXaFCBJgHYFOmaX5cHOr8PZSPgI2aTlDbNyu7Lcs6hcS8zJho0JAGjkR9lUqlTqweap8LGHOg6k0jqOe86LyRy48KBm9hxqQDofJbGWANmPhge3d2dOEALPttFqReUwiirFlbW5tCIIO1wcAsBniBAVzD6zwm2Dzu7bHIe5HYXUhsH16fwszT3X5cSqfTw83IpoYTlJhYesLm4msMqseTHIDLyMCXCTAnrZHMZc86ijI1UdhbEvYRJOsVJG2vYl4XYcE04GhppOsnb3s4bUMJMifyxzhnnyM5SRccYFcNZpw8MZL5YhSAu+w+FKNCGKcmCq9yxsdw5bvX3QQsw2Cv2SPZ025bOE3DCFrPnB/c5JQn1LH7urve/+cArIaDKbe6/7xo+ze39DZO/CexP2XihyJm0sFGZVJDCKrMOdZF17ACVjCEccx+qWtGDrExknlm6TAHfhqzKSN7hIV0OrW/EXOSwr7cjR+JVqvKhOyac+aSpvl4s8ghbOSb+sDinIxV9BAmwibrg0t1E3Qjt/QediuvVpg5yYR5yBrO/BkcUrAW1Af1hWtfQWk5SNsMRRdYrGuIlYeWZf0t73OA40p9pJmZ4xVlebgxMSnNSbhPSqdSD9Yz1OrKINohy+Qw3NKwsajJIcKoT+pbIg83qGWMkjKYEDqD6N6qVLR/k78xdnV3d3ZPo1arYKEwRqvbXC5/Rd4CAE8kzYfD3ruFziC7yI9L5GA0tM/ZKnKITOqbMMjECqOCVdb6lUIRVHmGI4alTnCHTJtASbcFQhkDYnF2LZgYDvtsKRRB9DwHs6fXCYJuH8LukJ1+6i0TBsIi+xG9Fcyy1o8UiiB62KU6p3srVbdVshcWL8x+8IUiaP1JoMM/zPq98XQ0alqxggWkn4zcmP11H5ig9bE84HSPKX3BKbdC2QPTQJh5KDBBHVO3enEZlZ8h4/OcViBFwqBiQsxl7FIlvRCYoJLJt6lu8duaV3VbLXth8sKuwxmYIG4J5c4Zu6Anga328cDkiV2DOzBBeC/her6MP8U05XmwBntNsycmD+w1naAxOEE6j3eYPSZI84XGBMUEaRjQmOMMignSMKAxxxkUE6RhQGOOMygmSMOAxhxnUEyQhgGNOc6gmCANAxpznEExQRoGNOY4g2KCNAxozHEGxQRpGNCYExo7o8NuzrNbnME+tQ2+snrUGF926dV6UcqciQfU/gh7YnzzRTQzwa/pDu3VfD+Ijkbir5FvqB3dSTL++vERfzH7ZrWYqhLkdUyympPbXV/r+Gc8SWu+3aoE0dik9NO0v+3NFGOteajqENuIXJ2kN/TCgD7B2Y4NuZWvYLBF4ML1goWfSTrSuO75TnQkx3OP0DVox/W0DdqXs742g5yV6ymnZgoPFS1OZzl24svC15Mp46B1OPOHH5/1tPXjv1adqnNQrUZhbKUif7dCDrUWOyuyP0/1tPXXQ/VakRGEJ3G7nDBQftQp1yqrdVVftdrWa4uMII8Xmvq3nRUSaV7B3H1OZFHf77R5+HKaG1qOjiBh/Cohx+PhudW8dpeeL+SP43EHaa4E1ZfkuLFCZAS1d8AMTs62E74AGE1O5qoONbJRHWcb8tHeBtOyrnlSZAQtP5e5Dob4TAoFD5uUOPxsnMm94xxuNKxIV7LhF/dhGfHp8guZBclPEwUpdZvYT9n1Xd/e7F1ZKV3CoHe4+qr8R4WNd5v71WFVrg+w2N6eGLz1fMd/rvZNUkRKEMWQmCw8adv8HC71qWAxgWWaxjOlI5kfg7Wrr3ZkQ2wDJgVIgeLLoIsbOu0V6+JB3aejJodwRU4QdUqB0lDBA3CfqBM32Tc/YFMdqtuoU8ybvv2VIh9iKqzOs4WelVUxJIA/Vv5vC1iB9jm0lNNqFeWErGKL5ZiB+hn4HydQYWOhktD3AAAAAElFTkSuQmCC",Dh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB2ElEQVR4nO3cPYoUQQBA4ddqYuyCYKDoGgn+XMGT6NEMDTyMqCwYLIqB0SYGomDQ0tAGIoKthf1meB8UncxUD/1gCoqZmuZ5Jh6X9v4A+VlBZAoiUxCZgsgURKYgMgWRKYhMQWQKIlMQmYLIFESmIDIFkbkyYpJpmra+5Q7wBrjK8Tif5/muIshfuLnG+AxccPhuAKcjJtoryA8vgKccvpfAwxETtYbIFESmIDIFkSmITEFkCiJTEJmCyBTEZvn1+78O4NUy1RGNC+D2xq2TecSzHLWXdR/4Bnz8w9dfBq4Dn9YNRpMT4BpwC3j3v28+cnPxDHjE4XsGPNnr5q0hMgWRKYhMQWQKIlMQmYLIFESmIDIFkSmITEFkCiJTEJmCyBREpiAyBZEpiExBZAoiUxCZgsgURKYgMgWRKYhMQWQKIlMQmYLIFESmIDIFkSmIzN4HmBmdrtfnwNcNJ8oNUZDfP5PlX8JbvGaAvrJ+9Xa9Pl7O99wwHjBAQWQKIlMQmYLIFESmIDIFkSmITEFkCiIzci/rHvCew3dyDEHO113S5Vi8Y/AF+LDHjaf1EMtItIbIFESmIDIFkSmITEFkCiJTEJmCyBREpiAyBZEpiExBZAoiUxBcvgP0Kbuihr2XjQAAAABJRU5ErkJggg==",Bh="https://stacks-admin.onrender.com",al="#333333",Fh="#3d075c",j0=`
  html, body, #root { margin: 0; min-height:100%; padding:0; }

  .profile-page {
    min-height: 100vh;
    padding-bottom: 50px;
    overflow-x: hidden;
    background: #e3e3e3;
    color: #000;
    font-family: "Century Gothic", "Trebuchet MS", Arial, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
  }

  .profile-page *, .profile-page *::before, .profile-page *::after { box-sizing: border-box; }
  .profile-page button { font-family: inherit; }

  .profile-header {
    display:flex;
    align-items:center;
    justify-content:space-between;
    min-height: 64px;
    padding: 12px 16px;
    background: #fff;
    border-bottom: 1px solid #d6d6d6;
  }

  .profile-logo {
    width: 170px;
    height: 36px;
    object-fit: contain;
    filter: brightness(0) saturate(100%);
  }

  .profile-header-actions {
    display:flex;
    align-items:center;
    gap:12px;
  }

  .profile-contact {
    min-width: 96px;
    height: 38px;
    padding: 0 20px;
    border: 0;
    border-radius: 999px;
    color: #fff;
    background: #000;
    font-size: 0.92rem;
    font-weight: 700;
    cursor: pointer;
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.04);
  }

  .profile-body {
    width: min(calc(100% - 24px), 560px);
    margin: 0 auto;
    padding: 16px 12px 24px;
  }

  .profile-title-row {
    position: relative;
    display:flex;
    align-items:center;
    justify-content:center;
    min-height: 48px;
    margin-bottom: 28px;
  }

  .profile-back {
    position: absolute;
    left: 0;
    display:flex;
    align-items:center;
    justify-content:center;
    border:0;
    padding:8px;
    background: transparent;
    cursor:pointer;
    width:40px;
    height:40px;
  }

  .profile-title {
    margin:0;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: #111;
  }

  .profile-summary {
    display:grid;
    grid-template-columns: 130px 1fr;
    gap: 24px;
    align-items:flex-start;
    margin-bottom: 32px;
  }

  .profile-avatar-area {
    position: relative;
    width: 130px;
    text-align:center;
    padding-bottom: 50px;
  }

  .profile-avatar {
    display:block;
    width: 110px;
    height: 110px;
    object-fit: cover;
    border: 3px solid #d5d5d5;
    border-radius: 50%;
    background: #f0c897;
    margin: 0 auto;
  }

  .profile-vip-badge {
    position:absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
    width: 42px;
    height: 42px;
    object-fit: contain;
    box-shadow: 0 3px 10px rgba(0,0,0,0.15);
    background: #fff;
    border: 3px solid #fff;
    border-radius: 50%;
    padding: 4px;
  }

  .profile-vip-label {
    position:absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    margin:0;
    font-size: 0.75rem;
    color:#555;
    text-align:center;
    font-weight: 700;
    letter-spacing: 0.06em;
    white-space: nowrap;
  }

  .profile-summary-details {
    padding-top: 6px;
  }

  .profile-username {
    margin: 0 0 12px;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1;
    color: #161616;
    letter-spacing: -0.04em;
  }

  .profile-referral {
    display:flex;
    align-items:center;
    gap:8px;
    margin-bottom: 14px;
    font-size: 0.98rem;
    color: #333;
    font-weight: 500;
  }

  .profile-referral strong {
    font-weight: 600;
    letter-spacing: 0.01em;
  }

  .profile-copy {
    border:0;
    background:transparent;
    cursor:pointer;
    padding:3px 6px;
    border-radius:6px;
  }

  .profile-copy img {
    width:18px;
    height:18px;
    display:block;
    opacity: 0.9;
  }

  .profile-credit {
    display:flex;
    align-items:center;
    gap:12px;
    font-size: 0.95rem;
    color:#333;
  }

  .profile-credit-label {
    white-space:nowrap;
    font-weight:700;
    color:#222;
    min-width:85px;
    font-size: 1rem;
  }

  .profile-credit-track {
    flex:1;
    height: 12px;
    border-radius: 999px;
    background: #d1d1d1;
    overflow:hidden;
  }

  .profile-credit-fill {
    height:100%;
    background: ${Fh};
    border-radius:inherit;
    transition: width 0.3s ease;
  }

  .profile-credit-value {
    min-width: 48px;
    text-align:right;
    font-weight:700;
    color:#222;
    font-size:1rem;
  }

  .wallet-card {
    margin: 24px 0 28px;
    padding: 18px 18px 16px;
    border-radius: 14px;
    background: #d7d7d7;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), 0 2px 8px rgba(0,0,0,0.05);
    border: 2px solid #c8c8c8;
  }

  .wallet-title {
    margin:0 0 16px;
    font-size: 1.12rem;
    font-weight:700;
    color:#111;
  }

  .wallet-row {
    margin-bottom: 14px;
  }

  .wallet-row:last-child { margin-bottom:0; }

  .wallet-label {
    margin: 0 0 8px;
    font-size: 0.98rem;
    font-weight:600;
    color:#212121;
    padding-left: 4px;
  }

  .wallet-value {
    display:flex;
    align-items:center;
    justify-content:flex-end;
    gap:12px;
    min-height: 48px;
    padding: 10px 16px;
    border-radius: 14px;
    color:#fff;
    background:#000;
    box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  }

  .wallet-currency {
    font-size: 0.85rem;
    opacity:0.95;
    margin-right:auto;
    color:#fff;
    font-weight:600;
  }

  .wallet-number {
    font-size: 1.18rem;
    font-weight:700;
    color:#fff;
    letter-spacing: -0.02em;
  }

  .profile-section {
    margin-bottom: 16px;
  }

  .profile-section-title {
    margin: 0 0 12px;
    font-size: 1rem;
    font-weight:700;
    color:#111;
  }

  .profile-section-items {
    display:flex;
    flex-direction:column;
    gap:10px;
  }

  .profile-item {
    display:flex;
    align-items:center;
    justify-content:space-between;
    min-height: 56px;
    padding: 0 16px;
    background:#f3f3f3;
    border-radius: 10px;
    font-size: 1.05rem;
    font-weight: 500;
    cursor:pointer;
    color:#000;
    box-shadow: inset 0 0 0 1px rgba(0,0,0,0.04);
    border: 0;
    transition: background 0.15s;
  }

  .profile-item:active {
    background: #e8e8e8;
  }

  .profile-item-left {
    display:flex;
    align-items:center;
    gap:14px;
  }

  .profile-item-icon {
    width:20px;
    height:20px;
    object-fit:contain;
    filter: brightness(0) saturate(100%);
    opacity:0.85;
  }

  .profile-item-arrow {
    color:#999;
    font-size:1.3rem;
    font-weight: 300;
  }

  .profile-loading {
    display:flex;
    align-items:center;
    justify-content:center;
    min-height:100vh;
    background:#e5e5e5;
  }

  @media (max-width:600px) {
    .profile-body { width: calc(100% - 20px); padding: 12px 10px 20px; }
    .profile-title-row { margin-bottom: 20px; }
    .profile-summary { grid-template-columns: 110px 1fr; gap:18px; margin-bottom:24px; }
    .profile-avatar-area { padding-bottom: 45px; }
    .profile-avatar { width:95px; height:95px; border-width: 2px; }
    .profile-vip-badge { width:38px; height:38px; bottom:18px; border-width: 2px; }
    .profile-username { font-size: 2rem; margin-bottom: 10px; }
    .profile-referral { font-size:0.92rem; margin-bottom: 12px; }
    .profile-credit { font-size:0.9rem; }
    .profile-credit-track { height: 11px; }
    .wallet-card { margin: 18px 0 22px; padding: 14px 14px 12px; border-radius: 12px; }
    .wallet-title { margin-bottom: 12px; font-size: 1.05rem; }
    .wallet-row { margin-bottom: 11px; }
    .wallet-label { font-size: 0.94rem; margin-bottom: 6px; }
    .wallet-value { min-height: 44px; padding:8px 14px; font-size: 0.95rem; }
    .wallet-currency { font-size: 0.8rem; }
    .wallet-number { font-size: 1.1rem; }
    .profile-section { margin-bottom: 12px; }
    .profile-section-title { font-size: 0.96rem; margin-bottom: 10px; }
    .profile-section-items { gap:8px; }
    .profile-item { min-height: 52px; padding:0 14px; font-size: 1rem; }
    .profile-item-left { gap:12px; }
    .profile-item-icon { width:19px; height:19px; }
  }
`;function Uh(){return i.jsxs("div",{className:"profile-loading",children:[i.jsx("style",{children:j0}),i.jsx("div",{style:{width:"2.2rem",height:"2.2rem",border:"4px solid #d0d0d0",borderTop:`4px solid ${al}`,borderRadius:"50%",animation:"profile-spin 1s linear infinite"}}),i.jsx("style",{children:"@keyframes profile-spin { from {transform:rotate(0deg)} to {transform:rotate(360deg)} }"})]})}function Dd({message:e,duration:t=600,onDone:n}){return h.useEffect(()=>{if(!e)return;const r=setTimeout(()=>{n&&n()},t);return()=>clearTimeout(r)},[e,t,n]),e?i.jsx("div",{style:{position:"fixed",zIndex:2e4,inset:0,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},children:i.jsx("div",{style:{padding:"0.7rem 1.4rem",borderRadius:10,background:"#e6e6e6",fontWeight:700,fontSize:"0.95rem"},children:e})}):null}function _h({open:e,onClose:t,onLogout:n}){return e?i.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{background:"rgba(0,0,0,.28)"},onClick:t,children:i.jsxs("div",{style:{width:"min(340px, calc(100% - 32px))",padding:"1.2rem 1rem",borderRadius:10,background:"#fff",boxShadow:"0 6px 16px rgba(0,0,0,0.08)"},onClick:r=>r.stopPropagation(),children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:10},children:[i.jsx("div",{style:{fontSize:15,fontWeight:700,marginBottom:6},children:"Logout"}),i.jsx("div",{style:{color:"#666",fontSize:13},children:"Are you sure you want to logout?"})]}),i.jsxs("div",{style:{display:"flex",gap:8},children:[i.jsx("button",{style:{flex:1,padding:9,borderRadius:999,border:0,background:"#f2f2f2"},onClick:t,children:"Cancel"}),i.jsx("button",{style:{flex:1,padding:9,borderRadius:999,border:0,background:al,color:"#fff"},onClick:n,children:"Confirm"})]})]})}):null}function Wh({open:e,onClose:t,onSubmit:n,withdrawPassword:r,setWithdrawPassword:a,errorMsg:o,submitting:s}){return e?i.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{background:"rgba(0,0,0,.45)"},onClick:t,children:i.jsxs("div",{style:{width:"min(360px, calc(100% - 32px))",padding:"1.2rem 1rem",borderRadius:10,background:"#fff",boxShadow:"0 6px 16px rgba(0,0,0,0.08)"},onClick:l=>l.stopPropagation(),children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[i.jsx("div",{style:{fontSize:15,fontWeight:700},children:"Withdrawal Password"}),i.jsx("button",{onClick:t,style:{border:0,background:"#f2f2f2",padding:6,borderRadius:8},children:"×"})]}),i.jsx("input",{type:"password",placeholder:"Withdrawal Password",value:r,onChange:l=>a(l.target.value),disabled:s,autoFocus:!0,style:{width:"100%",padding:8,borderRadius:8,border:"1px solid #e6e6e6",marginBottom:8,background:"#f6f7fb"}}),o&&i.jsx("div",{style:{color:"red",marginBottom:8},children:o}),i.jsx("button",{onClick:n,disabled:s,style:{width:"100%",padding:9,borderRadius:999,border:0,background:al,color:"#fff"},children:s?"Verifying...":"Submit"})]})}):null}function Gh(e){if(e==null)return{level:null,badge:null};let t=null;if(typeof e=="number")t=e;else if(typeof e=="string"){const a=e.match(/\d+/);t=a?Number(a[0]):NaN}else t=Number(e);if(!Number.isFinite(t))return{level:null,badge:null};const n=Math.max(1,Math.min(4,Math.floor(t)));return{level:n,badge:{1:nl,2:Hi,3:rl,4:il}[n]||null}}function Qh({navigate:e,setShowContactModal:t}){return i.jsxs("header",{className:"profile-header",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"profile-logo"}),i.jsx("div",{className:"profile-header-actions",children:i.jsx("button",{type:"button",className:"profile-contact",onClick:()=>t(!0),children:"Contact"})})]})}function Hh(){const e=ie(),t=mn(),{profile:n,fetchProfile:r,setProfile:a}=Qr(),[o,s]=h.useState(!1),[l,d]=h.useState(""),[c,m]=h.useState(null),[p,x]=h.useState(""),[w,y]=h.useState(!1),[b,j]=h.useState(!1),[f,u]=h.useState(!0),[g,$]=h.useState(!1),[A,E]=h.useState(""),[N,v]=h.useState("");h.useEffect(()=>{let z=!0;(async()=>{u(!0);try{await r()}catch{}finally{if(!z)return;setTimeout(()=>{z&&u(!1)},180)}})();const O=async()=>{u(!0);try{await r()}catch{}u(!1)},D=async()=>{try{await r()}catch{}},Q=async()=>{try{await r()}catch{}},H=()=>{try{localStorage.removeItem("authToken"),localStorage.removeItem("token"),localStorage.removeItem("currentUser"),localStorage.removeItem("userProfile")}catch{}try{a(null)}catch{}e("/login")};return window.addEventListener("auth:login",O),window.addEventListener("profile:refresh",D),window.addEventListener("balance:changed",Q),window.addEventListener("auth:logout",H),()=>{z=!1,window.removeEventListener("auth:login",O),window.removeEventListener("profile:refresh",D),window.removeEventListener("balance:changed",Q),window.removeEventListener("auth:logout",H)}},[t.pathname]),h.useEffect(()=>{let z=!0;const S=setInterval(async()=>{if(z)try{await r()}catch{}},1e4);return()=>{z=!1,clearInterval(S)}},[r]);const I=z=>{m(z),d(""),x(""),s(!0)},L=async()=>{x(""),y(!0);try{const z=localStorage.getItem("authToken"),O=await(await fetch(`${Bh}/api/verify-withdraw-password`,{method:"POST",headers:{"Content-Type":"application/json","X-Auth-Token":z},body:JSON.stringify({password:l})})).json();if(y(!1),O.success){s(!1),u(!0);try{await r()}catch{}u(!1),e(c)}else x(O.message||"Incorrect withdrawal password.")}catch{x("Network error. Please try again."),y(!1)}},W=()=>{$(!1),E("Logout Success"),setTimeout(()=>{E("");try{localStorage.removeItem("currentUser"),localStorage.removeItem("user"),localStorage.removeItem("authToken"),localStorage.removeItem("userProfile")}catch{}try{a(null)}catch{}e("/login")},600)},se=()=>{try{navigator.clipboard.writeText(n.inviteCode||""),v("Copied"),setTimeout(()=>v(""),700)}catch{v("Copy failed"),setTimeout(()=>v(""),700)}};if(f)return i.jsx(Uh,{});if(!n)return i.jsx("div",{style:{padding:12},children:"No profile found."});const fe=Gh(n.vipLevel),le=typeof n.creditScore<"u"?Number(n.creditScore):100,yt=Number.isFinite(le)?Math.max(0,Math.min(100,Math.round(le))):100,k=`${yt}%`;return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:j0}),i.jsxs("div",{className:"profile-page",children:[i.jsx(Qh,{navigate:e,setShowContactModal:j}),N&&i.jsx(Dd,{message:N,duration:700,onDone:()=>v("")}),i.jsxs("main",{className:"profile-body",children:[i.jsxs("section",{className:"profile-title-row",children:[i.jsx("button",{type:"button",className:"profile-back",onClick:()=>e(-1),"aria-label":"Back",children:i.jsx("img",{src:ze,alt:"Back",style:{width:20,height:20,objectFit:"contain"}})}),i.jsx("h1",{className:"profile-title",children:"My Profile"})]}),i.jsxs("section",{className:"profile-summary",children:[i.jsxs("div",{className:"profile-avatar-area",children:[i.jsx("img",{src:b0,alt:"Avatar",className:"profile-avatar"}),fe.badge&&i.jsx("img",{src:fe.badge,alt:`VIP-${fe.level}`,className:"profile-vip-badge"}),i.jsxs("div",{className:"profile-vip-label",children:["VIP",fe.level||""]})]}),i.jsxs("div",{className:"profile-summary-details",children:[i.jsx("h2",{className:"profile-username",children:n.username}),i.jsxs("div",{className:"profile-referral",children:[i.jsxs("span",{children:["My Referral Code: ",i.jsx("strong",{children:n.inviteCode||"N/A"})]}),i.jsx("button",{type:"button",className:"profile-copy",onClick:se,"aria-label":"Copy referral code",title:"Copy referral code",children:i.jsx("img",{src:Dh,alt:"Copy"})})]}),i.jsxs("div",{className:"profile-credit",children:[i.jsx("span",{className:"profile-credit-label",children:"Credit Score:"}),i.jsx("div",{className:"profile-credit-track",children:i.jsx("div",{className:"profile-credit-fill",style:{width:k}})}),i.jsxs("span",{className:"profile-credit-value",children:[yt,"%"]})]})]})]}),i.jsxs("section",{className:"wallet-card",children:[i.jsx("div",{className:"wallet-title",children:"My Wallet"}),i.jsxs("div",{className:"wallet-row",children:[i.jsx("div",{className:"wallet-label",children:"Today's Profit"}),i.jsxs("div",{className:"wallet-value",children:[i.jsx("div",{className:"wallet-currency",children:"USD"}),i.jsx("div",{className:"wallet-number",children:Number(n.commissionToday||0).toFixed(2)})]})]}),i.jsxs("div",{className:"wallet-row",children:[i.jsx("div",{className:"wallet-label",children:"Total Balance"}),i.jsxs("div",{className:"wallet-value",children:[i.jsx("div",{className:"wallet-currency",children:"USD"}),i.jsx("div",{className:"wallet-number",children:Number(n.balance||0).toFixed(2)})]})]})]}),i.jsxs(eo,{title:"My Profile",children:[i.jsx(jt,{label:"Account Info",icon:Mh,onClick:()=>I("/personal-info")}),i.jsx(jt,{label:"Add Wallet",icon:Od,onClick:()=>I("/bind-wallet")})]}),i.jsxs(eo,{title:"My Financial",children:[i.jsx(jt,{label:"Deposit",icon:Ph,onClick:()=>e("/deposit")}),i.jsx(jt,{label:"Withdraw",icon:Rh,onClick:()=>I("/withdraw")})]}),i.jsxs(eo,{title:"Other",children:[i.jsx(jt,{label:"Contact Us",icon:zh,onClick:()=>j(!0)}),i.jsx(jt,{label:"Notifications",icon:Oh,onClick:()=>e("/notifications")}),i.jsx(jt,{label:"Change Language",icon:Od,onClick:()=>{}}),i.jsx(jt,{label:"Logout",onClick:()=>$(!0)})]})]}),i.jsx(_h,{open:g,onClose:()=>$(!1),onLogout:W}),i.jsx(Wh,{open:o,onClose:()=>s(!1),onSubmit:L,withdrawPassword:l,setWithdrawPassword:d,errorMsg:p,submitting:w}),A&&i.jsx(Dd,{message:A,duration:600,onDone:()=>E("")}),i.jsx(ge,{open:b,onClose:()=>j(!1)})]})]})}function eo({title:e,children:t}){return i.jsxs("section",{className:"profile-section",children:[i.jsx("h2",{className:"profile-section-title",children:e}),i.jsx("div",{className:"profile-section-items",children:t})]})}function jt({label:e,icon:t,onClick:n}){return i.jsxs("button",{type:"button",className:"profile-item",onClick:n,children:[i.jsxs("span",{className:"profile-item-left",children:[t&&i.jsx("img",{src:t,alt:"",className:"profile-item-icon"}),i.jsx("span",{children:e})]}),i.jsx("span",{className:"profile-item-arrow",children:"›"})]})}const Vh=`
  html, body, #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  .about-page {
    min-height: 100vh;
    padding-bottom: 30px;
    overflow-x: hidden;
    background: #8b8fa0;
    color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  .about-page *,
  .about-page *::before,
  .about-page *::after {
    box-sizing: border-box;
  }

  .about-page button {
    font-family: inherit;
  }

  .about-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid #dddddd;
    background: #ffffff;
  }

  .about-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
  }

  .about-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .about-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 0;
    border-radius: 40px;
    color: #ffffff;
    background: #000000;
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    cursor: pointer;
    font-weight: 500;
  }

  .about-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(34px, 5vw, 64px);
    height: clamp(26px, 3.5vw, 44px);
    padding: 4px 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .about-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: #000000;
  }

  .about-body {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding-top: 0;
  }

  .about-title-row {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60px;
    margin: 30px 0 40px;
  }

  .about-back {
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    transition: opacity 0.2s ease;
  }

  .about-back:hover {
    opacity: 0.8;
  }

  .about-back img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  .about-title-row h1 {
    margin: 0;
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    font-weight: 400;
    letter-spacing: 0.02em;
    text-align: center;
    color: #ffffff;
  }

  .about-intro {
    margin: 0 0 40px;
    font-size: clamp(1.3rem, 2.2vw, 2rem);
    line-height: 1.5;
    letter-spacing: -0.01em;
    font-weight: 400;
    color: #ffffff;
  }

  .about-video-wrap {
    width: 100%;
    margin: 0 0 50px;
    border-radius: 12px;
    overflow: hidden;
    background: #000000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .about-video {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    background: #000000;
  }

  .about-cta {
    margin: 0 0 30px;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.2;
    letter-spacing: -0.02em;
    font-weight: 400;
    color: #ffffff;
  }

  .about-copy {
    margin: 0;
    font-size: clamp(1.15rem, 2.1vw, 1.8rem);
    line-height: 1.6;
    letter-spacing: -0.01em;
    color: #ffffff;
  }

  .about-copy strong {
    font-weight: 700;
  }

  @media (max-width: 700px) {
    .about-header {
      display: flex;
      min-height: 72px;
      padding: 12px 14px;
    }

    .about-logo {
      width: 180px;
      height: 34px;
      max-width: 58%;
    }

    .about-header-actions {
      gap: 9px;
    }

    .about-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .about-menu {
      width: 28px;
      height: 24px;
    }

    .about-menu span {
      height: 2px;
    }

    .about-body {
      width: calc(100% - 36px);
      margin: 0 auto;
    }

    .about-title-row {
      min-height: 46px;
      margin: 20px 0 24px;
    }

    .about-back {
      left: 0;
      width: 34px;
      height: 34px;
    }

    .about-back img {
      width: 20px;
      height: 20px;
    }

    .about-title-row h1 {
      font-size: 2rem;
    }

    .about-intro {
      font-size: 1.2rem;
      margin-bottom: 24px;
    }

    .about-video-wrap {
      margin-bottom: 30px;
      border-radius: 8px;
    }

    .about-cta {
      margin-bottom: 20px;
      font-size: 1.8rem;
      line-height: 1.3;
    }

    .about-copy {
      font-size: 1.1rem;
      line-height: 1.5;
    }
  }
`;function Kh(){const e=ie(),[t,n]=h.useState(!1);return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:Vh}),i.jsxs("div",{className:"about-page",children:[i.jsxs("header",{className:"about-header",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"about-logo"}),i.jsxs("div",{className:"about-header-actions",children:[i.jsx("button",{type:"button",className:"about-contact",onClick:()=>n(!0),children:"Contact"}),i.jsxs("button",{type:"button",className:"about-menu",onClick:()=>e("/profile"),"aria-label":"Open profile menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]})]}),i.jsxs("main",{className:"about-body",children:[i.jsxs("div",{className:"about-title-row",children:[i.jsx("button",{type:"button",className:"about-back",onClick:()=>e(-1),"aria-label":"Go back",children:i.jsx("img",{src:ze,alt:"Back"})}),i.jsx("h1",{children:"About Us"})]}),i.jsx("p",{className:"about-intro",children:"We're a company committed to shaping better futures. We put people first — our clients, our employees, and the users we serve. We pursue excellence — with our unwavering commitment to make work that goes above and beyond. We embrace growth — continually scaling in size, capabilities, and cultural intelligence. We own truth in action — using our powers for good to leave a lasting impact on the world."}),i.jsx("div",{className:"about-video-wrap",children:i.jsx("video",{className:"about-video",src:m0,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),i.jsx("h2",{className:"about-cta",children:"Meet our talented team of creators and technologists."}),i.jsx("p",{className:"about-copy",children:"We're a diverse group of designers, strategists, engineers, and wordsmiths who make things people love to use. Over the last 20 years, we've helped the world's most progressive brands solve problems, seize opportunities, and create lasting growth for their business. Together, we shape a better future."})]}),i.jsx(ge,{open:t,onClose:()=>n(!1)})]})]})}const Yh="/Dept/assets/Events1-Cml5dDJe.jpg",qh="/Dept/assets/Events2-Ck__mleZ.jpg",Jh="/Dept/assets/Events3-DfVT7MM-.jpg",Xh=`
  html, body, #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  .event-page {
    min-height: 100vh;
    overflow-x: hidden;
    background: #ffffff;
    color: #000000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  .event-page button {
    font-family: inherit;
  }

  .event-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid #dddddd;
    background: #ffffff;
  }

  .event-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
  }

  .event-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .event-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 0;
    border-radius: 40px;
    color: #ffffff;
    background: #000000;
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    font-weight: 500;
    cursor: pointer;
  }

  .event-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(34px, 5vw, 64px);
    height: clamp(26px, 3.5vw, 44px);
    padding: 4px 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .event-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: #000000;
  }

  .event-title-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: clamp(50px, 6vw, 70px);
    padding: clamp(12px, 2vw, 16px) clamp(18px, 4.2vw, 42px);
    background: #ebebeb;
    border-bottom: 1px solid #d9d9d9;
  }

  .event-back {
    position: absolute;
    left: clamp(18px, 4.2vw, 42px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .event-back img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    display: block;
  }

  .event-title-bar h1 {
    margin: 0;
    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #000000;
  }

  .event-content {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding: clamp(20px, 3vw, 40px) 0;
  }

  .event-images {
    display: flex;
    flex-direction: column;
    gap: clamp(16px, 3vw, 28px);
  }

  .event-image-wrapper {
    width: 100%;
    overflow: hidden;
    border-radius: clamp(8px, 1.5vw, 12px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .event-image-wrapper img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 720px) {
    .event-header {
      min-height: 72px;
      padding: 12px 14px;
    }

    .event-logo {
      width: 180px;
      height: 34px;
    }

    .event-header-actions {
      gap: 9px;
    }

    .event-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .event-menu {
      width: 28px;
      height: 24px;
    }

    .event-menu span {
      height: 2px;
    }

    .event-title-bar {
      min-height: 48px;
      padding: 10px 14px;
    }

    .event-back {
      width: 34px;
      height: 34px;
      left: 14px;
    }

    .event-back img {
      width: 20px;
      height: 20px;
    }

    .event-title-bar h1 {
      font-size: 1.5rem;
    }

    .event-content {
      width: calc(100% - 28px);
      padding: 16px 0;
    }

    .event-images {
      gap: 12px;
    }

    .event-image-wrapper {
      border-radius: 8px;
    }
  }
`;function Zh(){const e=ie(),[t,n]=Dn.useState(!1),r=[Yh,qh,Jh];return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:Xh}),i.jsxs("div",{className:"event-page",children:[i.jsxs("header",{className:"event-header",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"event-logo"}),i.jsxs("div",{className:"event-header-actions",children:[i.jsx("button",{type:"button",className:"event-contact",onClick:()=>n(!0),children:"Contact"}),i.jsxs("button",{type:"button",className:"event-menu",onClick:()=>e("/profile"),"aria-label":"Open profile menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]})]}),i.jsxs("div",{className:"event-title-bar",children:[i.jsx("button",{type:"button",className:"event-back",onClick:()=>e(-1),"aria-label":"Go back",children:i.jsx("img",{src:ze,alt:"Back"})}),i.jsx("h1",{children:"Event"})]}),i.jsx("main",{className:"event-content",children:i.jsx("div",{className:"event-images",children:r.map((a,o)=>i.jsx("div",{className:"event-image-wrapper",children:i.jsx("img",{src:a,alt:`Event ${o+1}`})},o))})}),i.jsx(ge,{open:t,onClose:()=>n(!1)})]})]})}const em=`
  html, body, #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  .faq-page {
    min-height: 100vh;
    overflow-x: hidden;
    background: #d4d4d4;
    color: #000000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  .faq-page *,
  .faq-page *::before,
  .faq-page *::after {
    box-sizing: border-box;
  }

  .faq-page button {
    font-family: inherit;
  }

  .faq-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid #dddddd;
    background: #ffffff;
  }

  .faq-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
  }

  .faq-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .faq-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 0;
    border-radius: 40px;
    color: #ffffff;
    background: #000000;
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    font-weight: 500;
    cursor: pointer;
  }

  .faq-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(34px, 5vw, 64px);
    height: clamp(26px, 3.5vw, 44px);
    padding: 4px 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .faq-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: #000000;
  }

  .faq-body {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding-top: 0;
    padding-bottom: 80px;
  }

  .faq-title-row {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60px;
    margin: 22px 0 18px;
  }

  .faq-back {
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .faq-back img {
    width: 22px;
    height: 22px;
    object-fit: contain;
    display: block;
  }

  .faq-title-row h1 {
    margin: 0;
    font-size: clamp(2.3rem, 4vw, 3.4rem);
    font-weight: 500;
    letter-spacing: -0.06em;
    text-align: center;
    color: #000000;
  }

  .faq-section {
    margin-top: 10px;
  }

  .faq-section h2 {
    margin: 0 0 18px;
    font-size: clamp(1.3rem, 2vw, 2.2rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #000000;
  }

  .faq-section p {
    margin: 0 0 18px;
    font-size: clamp(1.05rem, 1.7vw, 1.6rem);
    line-height: 1.42;
    letter-spacing: -0.04em;
    color: #000000;
    font-weight: 400;
  }

  .faq-section p strong {
    font-weight: 600;
  }

  @media (max-width: 700px) {
    .faq-header {
      display: flex;
      min-height: 72px;
      padding: 12px 14px;
    }

    .faq-logo {
      width: 180px;
      height: 34px;
      max-width: 58%;
    }

    .faq-header-actions {
      gap: 9px;
    }

    .faq-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .faq-menu {
      width: 28px;
      height: 24px;
    }

    .faq-menu span {
      height: 2px;
    }

    .faq-body {
      width: calc(100% - 36px);
      margin: 0 auto;
    }

    .faq-title-row {
      min-height: 46px;
      margin: 10px 0 16px;
    }

    .faq-back {
      width: 34px;
      height: 34px;
    }

    .faq-back img {
      width: 20px;
      height: 20px;
    }

    .faq-title-row h1 {
      font-size: 2rem;
    }

    .faq-section h2 {
      font-size: 1.5rem;
      margin-bottom: 12px;
    }

    .faq-section p {
      font-size: 1.05rem;
      line-height: 1.45;
      margin-bottom: 16px;
    }
  }
`;function tm(){const e=ie(),[t,n]=h.useState(!1);return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:em}),i.jsxs("div",{className:"faq-page",children:[i.jsxs("header",{className:"faq-header",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"faq-logo"}),i.jsxs("div",{className:"faq-header-actions",children:[i.jsx("button",{type:"button",className:"faq-contact",onClick:()=>n(!0),children:"Contact"}),i.jsxs("button",{type:"button",className:"faq-menu",onClick:()=>e("/profile"),"aria-label":"Open profile menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]})]}),i.jsxs("main",{className:"faq-body",children:[i.jsxs("div",{className:"faq-title-row",children:[i.jsx("button",{type:"button",className:"faq-back",onClick:()=>e(-1),"aria-label":"Go back",children:i.jsx("img",{src:ze,alt:"Back"})}),i.jsx("h1",{children:"FAQs"})]}),i.jsxs("section",{className:"faq-section",children:[i.jsx("h2",{children:"I. Start Submission"}),i.jsxs("p",{children:[i.jsx("strong",{children:"1.1"})," A minimum account balance of 50 USD is required to initiate the first set of 40 products submission."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"1.2"})," A minimum deposit of 100 USD is required to reset and begin the new daily products submission process."]})]}),i.jsxs("section",{className:"faq-section",children:[i.jsx("h2",{children:"II. Withdrawal"}),i.jsxs("p",{children:[i.jsx("strong",{children:"2.1"})," Withdrawal amount is based on the VIP level of the account, if withdrawals exceeding the amount require an upgrade to the appropriate membership level, as each level is subject to different withdrawal limits."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"2.2"})," All users must complete three sets of products submissions per day in order to be eligible to request a withdrawal. Furthermore, users are required to apply for the withdrawal of their entire account balance; partial withdrawals are not permitted."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"2.3"})," Users who choose to abandon or exit the products submission process will forfeit their eligibility to apply for a withdrawal or request a refund."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"2.4"})," If a withdrawal request has not been formally submitted by the user, Instrument is unable to process any withdrawal on their behalf."]})]}),i.jsxs("section",{className:"faq-section",children:[i.jsx("h2",{children:"III. Funds"}),i.jsxs("p",{children:[i.jsx("strong",{children:"3.1"})," All funds are securely held within the user's account and may be withdrawn in full upon successful completion of all required products submission."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"3.2"})," To ensure the security and integrity of user funds, all data processing is conducted automatically by the system; manual processing is not permitted."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"3.3"})," The platform assumes full responsibility for any accidental loss of funds resulting from system errors or platform-related issues."]})]}),i.jsxs("section",{className:"faq-section",children:[i.jsx("h2",{children:"IV. Account Security"}),i.jsxs("p",{children:[i.jsx("strong",{children:"4.1"})," Users are strictly advised not to disclose their login passwords or security codes to any third party. The platform shall not be held liable for any loss or damage resulting from unauthorized access due to such disclosure."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"4.2"})," For security purposes, it is strongly recommended that users do not use easily identifiable information such as birthdates, identification numbers, or mobile phone numbers as their login passwords or security codes."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"4.3"})," In the event that a user forgets their login password or security PIN, they must contact the platform's online customer service for assistance in resetting the credentials."]})]}),i.jsxs("section",{className:"faq-section",children:[i.jsx("h2",{children:"V. Normal Products"}),i.jsxs("p",{children:[i.jsx("strong",{children:"5.1"}),' Platform earnings are categorized into normal earnings and "ten-times revenue" earnings. Under normal circumstances, users will typically receive 1 to 3 merged product sets per submission set, with the possibility of obtaining a maximum of 3 merged data sets from a single set.']}),i.jsxs("p",{children:[i.jsx("strong",{children:"5.2"})," VIP 1 members will earn 0.5% of the profit for each normal product submission."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"5.3"})," VIP 1 members will earn 5.0% of the profit for each merged product submission."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"5.4"})," Funds and earnings from completed product submissions will be credited back to the user's account upon successful completion of each product set."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"5.5"})," The system will randomly distribute product to the user's account based on the total balance in the user's account."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"5.6"})," Once product has been distributed to the user's account, it cannot be canceled, skipped, or modified."]})]}),i.jsxs("section",{className:"faq-section",children:[i.jsx("h2",{children:"VI. Merged Product"}),i.jsxs("p",{children:[i.jsx("strong",{children:"6.1"})," Merged Product consist of 1 to 3 product data sets. Users may not necessarily receive 3 merged data sets; the system will randomly assign normal product data, with users having a higher likelihood of receiving either 1 or 3 product data sets within the merged product."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"6.2"})," Users will receive ten times the commission for each product set in the merged product compared to the commission for normal product data."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"6.3"})," Once the user is matched with merged product, all associated funds will be on-hold until the completion of each products submission. The funds will be refunded to the user's account upon successful completion of the required submissions."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"6.4"})," The system will randomly assign merged product to the user's account based on the total balance within the user's account."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"6.5"})," Once merged products have been distributed to the user's account, they cannot be canceled, skipped, or modified."]})]}),i.jsxs("section",{className:"faq-section",children:[i.jsx("h2",{children:"VII. Deposit"}),i.jsxs("p",{children:[i.jsx("strong",{children:"7.1"})," The deposit amount is determined by the user, and the platform does not impose any specific deposit requirements. It is recommended that users make advance payments based on their financial capacity."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"7.2"})," If a deposit is required when receiving a merged product, users are advised to make an advance payment to cover the insufficient amount indicated in their account."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"7.3"})," Before proceeding with an advance payment, users must contact user support to request the payment details and confirm the specific deposit information."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"7.4"})," The platform will not be held liable for any errors in depositing funds to an incorrect account."]})]}),i.jsxs("section",{className:"faq-section",children:[i.jsx("h2",{children:"VIII. Merchants' Cooperation"}),i.jsxs("p",{children:[i.jsx("strong",{children:"8.1"})," The availability of product on the platform fluctuates, and if product submissions are delayed for an extended period, merchants may be unable to offload the data, which could negatively impact their progress. It is strongly recommended that users complete all required submissions and apply for withdrawals promptly to avoid hindering the merchants' progress."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"8.2"})," Merchants will provide users with deposit details to facilitate the deposit process."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"8.3"})," Delays in completing product submissions will have a detrimental effect on merchants and the overall process."]})]}),i.jsxs("section",{className:"faq-section",children:[i.jsx("h2",{children:"IX. Invitation"}),i.jsxs("p",{children:[i.jsx("strong",{children:"9.1"})," Users may invite other users to the platform using the invitation code linked to their account."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"9.2"})," Users must complete all product submissions in their account before they can invite other users."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"9.3"})," To be eligible to use an invitation code to invite referrals, a user must first complete 15 days of work after registration."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"9.4"})," Referrers will receive 20% of the referee's daily earnings as a commission."]})]}),i.jsxs("section",{className:"faq-section",children:[i.jsx("h2",{children:"X. User Authentication"}),i.jsxs("p",{children:[i.jsx("strong",{children:"10."})," All users must undergo authentication before being eligible to apply for any withdrawal of funds from the platform. This measure is implemented to ensure the security of all users' funds and to prevent any potential loss of assets for active users on our platform."]})]}),i.jsxs("section",{className:"faq-section",children:[i.jsx("h2",{children:"XI. Operating Hours"}),i.jsxs("p",{children:[i.jsx("strong",{children:"11.1"})," The platform operates from 10:00 - 23:00 (EST)."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"11.2"})," Online customer service is available from 10:00 - 23:00 (EST)."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"11.3"})," Withdrawal operations are processed between 10:00 - 23:00 (EST)."]})]})]}),i.jsx(ge,{open:t,onClose:()=>n(!1)})]})]})}function nm(){const[e,t]=h.useState(""),[n,r]=h.useState(!1),a=()=>{if(!e.trim()){alert("Please enter a wallet address.");return}r(!0)};return i.jsxs("div",{className:"p-6 max-w-xl mx-auto space-y-6",children:[i.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"🔗 Wallet Binding"}),i.jsxs("div",{className:"bg-white p-6 rounded shadow space-y-4",children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"USDT Wallet Address (TRC20)"}),i.jsx("input",{type:"text",value:e,onChange:o=>t(o.target.value),disabled:n,className:"w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400",placeholder:"Enter your TRC20 USDT address"}),i.jsx("button",{onClick:a,disabled:n,className:`w-full py-2 rounded text-white transition ${n?"bg-gray-400 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700"}`,children:n?"Wallet Bound":"Bind Wallet"}),n&&i.jsxs("div",{className:"mt-4 bg-green-100 text-green-800 p-3 rounded",children:["✅ Wallet bound successfully: ",i.jsx("strong",{children:e})]})]})]})}const rm="/Dept/assets/certificate1-Ft5IEC20.jpg",im=`
  html, body, #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  .cert-page {
    min-height: 100vh;
    overflow-x: hidden;
    background: #ffffff;
    color: #000000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  .cert-page button {
    font-family: inherit;
  }

  .cert-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid #dddddd;
    background: #ffffff;
  }

  .cert-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
  }

  .cert-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .cert-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 0;
    border-radius: 40px;
    color: #ffffff;
    background: #000000;
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    font-weight: 500;
    cursor: pointer;
  }

  .cert-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(34px, 5vw, 64px);
    height: clamp(26px, 3.5vw, 44px);
    padding: 4px 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .cert-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: #000000;
  }

  .cert-title-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: clamp(50px, 6vw, 70px);
    padding: clamp(12px, 2vw, 16px) clamp(18px, 4.2vw, 42px);
    background: #ebebeb;
    border-bottom: 1px solid #d9d9d9;
  }

  .cert-back {
    position: absolute;
    left: clamp(18px, 4.2vw, 42px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .cert-back img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    display: block;
  }

  .cert-title-bar h1 {
    margin: 0;
    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #000000;
  }

  .cert-content {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding: clamp(20px, 3vw, 40px) 0;
  }

  .cert-image-wrapper {
    width: 100%;
    overflow: hidden;
    border-radius: clamp(8px, 1.5vw, 12px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .cert-image-wrapper img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 720px) {
    .cert-header {
      min-height: 72px;
      padding: 12px 14px;
    }

    .cert-logo {
      width: 180px;
      height: 34px;
    }

    .cert-header-actions {
      gap: 9px;
    }

    .cert-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .cert-menu {
      width: 28px;
      height: 24px;
    }

    .cert-menu span {
      height: 2px;
    }

    .cert-title-bar {
      min-height: 48px;
      padding: 10px 14px;
    }

    .cert-back {
      width: 34px;
      height: 34px;
      left: 14px;
    }

    .cert-back img {
      width: 20px;
      height: 20px;
    }

    .cert-title-bar h1 {
      font-size: 1.5rem;
    }

    .cert-content {
      width: calc(100% - 28px);
      padding: 16px 0;
    }

    .cert-image-wrapper {
      border-radius: 8px;
    }
  }
`;function am(){const e=ie(),[t,n]=Dn.useState(!1);return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:im}),i.jsxs("div",{className:"cert-page",children:[i.jsxs("header",{className:"cert-header",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"cert-logo"}),i.jsxs("div",{className:"cert-header-actions",children:[i.jsx("button",{type:"button",className:"cert-contact",onClick:()=>n(!0),children:"Contact"}),i.jsxs("button",{type:"button",className:"cert-menu",onClick:()=>e("/profile"),"aria-label":"Open profile menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]})]}),i.jsxs("div",{className:"cert-title-bar",children:[i.jsx("button",{type:"button",className:"cert-back",onClick:()=>e(-1),"aria-label":"Go back",children:i.jsx("img",{src:ze,alt:"Back"})}),i.jsx("h1",{children:"Certificate"})]}),i.jsx("main",{className:"cert-content",children:i.jsx("div",{className:"cert-image-wrapper",children:i.jsx("img",{src:rm,alt:"Certificate"})})}),i.jsx(ge,{open:t,onClose:()=>n(!1)})]})]})}const om="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAaVBMVEUAAAAzMzMzMzMzMzMyMjIuLi4yMjIxMTEyMjIyMjIyMjIyMjIyMjIyMjItLS0yMjIyMjIyMjIzMzMzMzMzMzMzMzMxMTEzMzMyMjIyMjIxMTEyMjIwMDAzMzMwMDAxMTEzMzMzMzMzMzMdmEIQAAAAInRSTlMASLN57xHjJqX1bSGMcgrZu5I40a2cT8nBoWRbPS4dGYGIMzfr7AAAAPRJREFUKM+NktlygzAMRUUwAuMEs2+h0N7//8jKbgsl4zY5D17myLJHMnlKbLTj92ZfvzEsqx22GnlBnqJFAK69bKAYy5rsbGZAA+1sDjYmohOyr2BlYdFTCEZNCTQFuSKmBU0UxMkefyHyDr4EGUXmuFIQ859Mn8nbCzLl0nWDU6JcvZ+lTDC0ArGv9XFnRULSxS5kSojqNjrJAM/ljM53/OMm41wlx/fw5cu+H1TThl9papERSh+nrBwa9NH1XmQKJkdxjF/EIknDUIgRd6IJWcgt0JLGaEzpoypmBV/ESAM8XNrsh7a0GujIs3YKD+ixF/EJYQsa4vs2ts4AAAAASUVORK5CYII=",sm=["All","Pending","Completed"],lm="#333333",dm=`
  .records-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid #dddddd;
    background: #ffffff;
  }

  .records-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
  }

  .records-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .records-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 0;
    border-radius: 40px;
    color: #ffffff;
    background: #000000;
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    cursor: pointer;
  }

  .records-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(34px, 5vw, 64px);
    height: clamp(26px, 3.5vw, 44px);
    padding: 4px 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .records-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: #000000;
  }

  .record-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  @media (max-width: 700px) {
    .records-header {
      display: flex;
      min-height: 72px;
      padding: 12px 14px;
    }

    .records-logo {
      width: 180px;
      height: 34px;
      max-width: 58%;
    }

    .records-header-actions {
      gap: 9px;
    }

    .records-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .records-menu {
      width: 28px;
      height: 24px;
    }

    .records-menu span {
      height: 2px;
    }
  }
`;function cm({show:e}){return e?i.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:11e3,background:"rgba(245,247,251,0.38)",display:"flex",alignItems:"center",justifyContent:"center"},children:[i.jsx("div",{style:{width:56,height:56,border:"6px solid #ddd",borderTop:`6px solid ${lm}`,borderRadius:"50%",animation:"spin 0.8s linear infinite"}}),i.jsx("style",{children:"@keyframes spin { 100% { transform: rotate(360deg); } }"})]}):null}function um({show:e,message:t}){return e?i.jsxs("div",{style:{position:"fixed",left:"50%",top:"22%",transform:"translateX(-50%)",background:"#eee",color:"#666",borderRadius:10,padding:"10px 28px",fontWeight:500,fontSize:15.5,boxShadow:"0 2px 12px #0001",zIndex:99999,minWidth:210,maxWidth:"80vw",display:"flex",alignItems:"center"},children:[i.jsx("span",{style:{width:22,height:22,border:"3px solid #e0e0e0",borderTop:"3px solid #bbb",borderRadius:"50%",marginRight:13,display:"inline-block",animation:"spin 0.8s linear infinite"}}),i.jsx("span",{children:t}),i.jsx("style",{children:"@keyframes spin { 100% { transform: rotate(360deg); } }"})]}):null}function pm({onContactClick:e}){const t=ie();return i.jsxs("header",{className:"records-header",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"records-logo"}),i.jsxs("div",{className:"records-header-actions",children:[i.jsx("button",{type:"button",className:"records-contact",onClick:e,children:"Contact"}),i.jsxs("button",{type:"button",className:"records-menu",onClick:()=>t("/profile"),"aria-label":"Open menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]})]})}const fm=()=>{const[e,t]=h.useState("All"),n=ie(),{records:r,submitTaskRecord:a,refreshRecords:o}=$0(),{balance:s,commissionToday:l,refreshProfile:d}=pa(),[c,m]=h.useState({}),[p,x]=h.useState({}),[w,y]=h.useState({show:!1,message:""}),[b,j]=h.useState(!1),[f,u]=h.useState(!0),{currency:g}=fa();h.useEffect(()=>{if(u(!0),o){let k=!1;const z=()=>{k||(k=!0,u(!1))},S=o();S&&typeof S.finally=="function"?S.finally(z):setTimeout(z,800)}else{const k=setTimeout(()=>{u(!1)},1e3);return()=>clearTimeout(k)}},[]),h.useEffect(()=>{if(f)return;const k=setInterval(()=>{o&&o()},1e3);return()=>clearInterval(k)},[f,o]);function $(k){const z={};for(const S of k)S.status==="Pending"&&S.comboGroupId&&(z[S.comboGroupId]||(z[S.comboGroupId]=[]),z[S.comboGroupId].push(S));return Object.values(z).forEach(S=>S.sort((O,D)=>new Date(O.createdAt)-new Date(D.createdAt))),z}function A(k){return!k||k.length===0?null:k[k.length-1].taskCode}const E=(k,z)=>k.isCombo&&typeof k.comboIndex<"u"?`${k.taskCode||k._id||"noid"}-combo-${k.comboIndex}`:k.taskCode||k._id||`idx-${z}`,N=(k,z=1600)=>{y({show:!0,message:k}),setTimeout(()=>y({show:!1,message:""}),z)},v=async k=>{if(k.isCombo&&k.canSubmit&&s<0){N("Insufficient Balance."),setTimeout(()=>{n("/deposit")},1600);return}m(z=>({...z,[k.taskCode]:!0})),x(z=>({...z,[k.taskCode]:!1})),setTimeout(async()=>{const z=await a(k.taskCode);if(m(S=>({...S,[k.taskCode]:!1})),!z.success&&z.mustDeposit){N("Insufficient Balance."),setTimeout(()=>{n("/deposit")},1600);return}z.success?(x(S=>({...S,[k.taskCode]:!0})),await d(),o&&o(),setTimeout(()=>{x(S=>({...S,[k.taskCode]:!1}))},1500)):alert(z.message||"Failed to submit task.")},3e3)},I=r.filter(k=>e==="All"||k.status&&k.status.toLowerCase()===e.toLowerCase()),L=$(I),W=Object.values(L).map(A),se=[...I].sort((k,z)=>k.comboGroupId&&z.comboGroupId&&k.comboGroupId===z.comboGroupId&&k.status==="Pending"&&z.status==="Pending"?(z.canSubmit?1:0)-(k.canSubmit?1:0):new Date(z.startedAt||z.createdAt)-new Date(k.startedAt||k.createdAt)),fe=k=>k&&typeof k.image=="string"&&k.image.trim()!==""&&k.image!=="null"?k.image:"/assets/images/products/default.png",le=k=>{const z=Number(k||0);return Number.isFinite(z)?z.toFixed(2):""},yt=(k,z)=>{var S,O,D,Q,H,V;return i.jsxs("div",{className:"record-card",children:[i.jsxs("div",{className:"record-top",children:[i.jsxs("div",{className:"record-time",children:[i.jsx("img",{src:om,alt:"date",className:"cal-icon"}),i.jsx("span",{children:k.completedAt?new Date(k.completedAt).toLocaleString():k.startedAt?new Date(k.startedAt).toLocaleString():k.createdAt?new Date(k.createdAt).toLocaleString():""})]}),i.jsx("span",{className:"badge","data-i18n":k.status||"",children:k.status})]}),i.jsxs("div",{className:"record-content",children:[i.jsx("img",{src:fe(k.product),alt:((S=k.product)==null?void 0:S.name)||"Product",className:"record-img"}),i.jsxs("div",{className:"record-info",children:[i.jsx("div",{className:"record-title",title:(O=k.product)==null?void 0:O.name,children:(D=k.product)==null?void 0:D.name}),i.jsx("div",{className:"record-meta",children:i.jsxs("div",{children:[i.jsx("span",{className:"price-currency",children:g||""})," ",i.jsx("span",{className:"price-value",children:le((Q=k.product)==null?void 0:Q.price)}),i.jsx("span",{style:{marginLeft:8,color:"#666",fontWeight:600},children:"x1"})]})}),i.jsxs("div",{className:"record-stars","aria-hidden":"true",children:[i.jsx("span",{children:"★"}),i.jsx("span",{children:"★"}),i.jsx("span",{children:"★"}),i.jsx("span",{children:"★"}),i.jsx("span",{children:"★"})]})]})]}),i.jsxs("div",{className:"record-footer",children:[i.jsxs("div",{className:"footer-col",children:[i.jsx("div",{className:"footer-label",children:"Total Amount"}),i.jsxs("div",{className:"footer-value",children:[g||""," ",le((H=k.product)==null?void 0:H.price)]})]}),i.jsxs("div",{className:"footer-col",children:[i.jsx("div",{className:"footer-label",children:"Profit"}),i.jsxs("div",{className:"footer-value",children:[g||""," ",le((V=k.product)==null?void 0:V.commission)]})]})]}),(k.status==="Pending"&&(!k.isCombo||k.canSubmit)||p[k.taskCode]&&k.status==="Completed")&&(!k.comboGroupId||W.includes(k.taskCode)||k.canSubmit)&&i.jsx("button",{className:"submit-btn",onClick:()=>v(k),disabled:c[k.taskCode]||p[k.taskCode],style:{width:"100%"},children:c[k.taskCode]?"Submitting...":p[k.taskCode]?"Submitted":"Submit"})]},E(k,z))};return i.jsxs("div",{className:"records-container",children:[i.jsx("style",{children:dm}),i.jsx(pm,{onContactClick:()=>j(!0)}),i.jsxs("div",{className:"records-hero",children:[i.jsx("button",{className:"back-btn",onClick:()=>n(-1),"aria-label":"Go back",children:i.jsx("img",{src:ze,alt:"back"})}),i.jsx("h1",{children:"Records"}),i.jsx("div",{style:{width:48}})," "]}),i.jsx(cm,{show:f}),i.jsx(um,{show:w.show,message:w.message}),i.jsx("div",{className:"tabs",role:"tablist","aria-label":"Records filter tabs",children:sm.map(k=>i.jsx("div",{role:"tab","aria-selected":e===k,className:`tab ${e===k?"active":""}`,onClick:()=>t(k),"data-i18n":k,children:k},k))}),i.jsx("div",{style:{height:8}}),i.jsx("div",{className:"record-list",children:f?i.jsx("div",{style:{height:"120px"}}):se.length===0?i.jsx("p",{className:"no-records",children:"No records in this category."}):se.map((k,z)=>yt(k,z))}),i.jsxs("nav",{className:"bottom-navigation",role:"navigation","aria-label":"Footer navigation",children:[i.jsxs("button",{className:"bottom-item",type:"button",onClick:()=>n("/dashboard"),children:[i.jsx("img",{src:Zs,alt:"Home"}),i.jsx("span",{children:"Home"})]}),i.jsxs("button",{className:"bottom-item starting",type:"button",onClick:()=>n("/tasks"),children:[i.jsx("img",{src:el,alt:"Starting"}),i.jsx("span",{style:{fontWeight:700},children:"Starting"})]}),i.jsxs("button",{className:"bottom-item",type:"button",onClick:()=>n("/records"),children:[i.jsx("img",{src:tl,alt:"Records"}),i.jsx("span",{children:"Records"})]})]}),i.jsx(ge,{open:b,onClose:()=>j(!1)})]})},hm=`
  html, body, #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  .personal-info-page {
    min-height: 100vh;
    overflow-x: hidden;
    background: #e3e3e3;
    color: #000000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    padding-bottom: 40px;
  }

  .personal-info-page button {
    font-family: inherit;
  }

  .personal-info-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid #d5d5d5;
    background: #ffffff;
  }

  .personal-info-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
  }

  .personal-info-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .personal-info-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 0;
    border-radius: 40px;
    color: #ffffff;
    background: #000000;
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }

  .personal-info-contact:hover {
    background: #222222;
  }

  .personal-info-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(34px, 5vw, 64px);
    height: clamp(26px, 3.5vw, 44px);
    padding: 4px 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .personal-info-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: #000000;
  }

  .personal-info-title-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: clamp(50px, 6vw, 70px);
    padding: clamp(12px, 2vw, 16px) clamp(18px, 4.2vw, 42px);
    background: #e3e3e3;
    border-bottom: 1px solid #d5d5d5;
  }

  .personal-info-back {
    position: absolute;
    left: clamp(18px, 4.2vw, 42px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .personal-info-back img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    display: block;
  }

  .personal-info-title-bar h1 {
    margin: 0;
    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #000000;
  }

  .personal-info-content {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding: clamp(20px, 3vw, 30px) 0;
  }

  .section-title {
    margin: clamp(20px, 3vw, 30px) 0 clamp(12px, 2vw, 18px);
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    font-weight: 700;
    color: #000000;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .profile-card {
    background: #cfcfcf;
    border-radius: 14px;
    margin-bottom: 24px;
    padding: 0;
    overflow: hidden;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), 0 2px 8px rgba(0,0,0,0.05);
    border: 2px solid #c8c8c8;
  }

  .info-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 56px;
    padding: 0 clamp(14px, 2vw, 20px);
    border-bottom: 1px solid #b8b8b8;
    background: transparent;
  }

  .info-row:last-child {
    border-bottom: none;
  }

  .info-label {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    font-weight: 600;
    color: #000000;
    letter-spacing: -0.02em;
  }

  .info-value {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    font-weight: 500;
    color: #000000;
    text-align: right;
    letter-spacing: -0.02em;
  }

  .security-section {
    margin-top: clamp(24px, 3vw, 32px);
  }

  .security-title {
    margin: 0 0 clamp(12px, 2vw, 18px);
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    font-weight: 700;
    color: #000000;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .security-card {
    background: #cfcfcf;
    border-radius: 14px;
    padding: 0;
    overflow: hidden;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), 0 2px 8px rgba(0,0,0,0.05);
    border: 2px solid #c8c8c8;
  }

  .security-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 56px;
    padding: 0 clamp(14px, 2vw, 20px);
    border-bottom: 1px solid #b8b8b8;
    background: transparent;
    border: none;
    cursor: pointer;
    width: 100%;
    text-align: left;
    transition: background 0.15s;
  }

  .security-row:hover {
    background: rgba(0,0,0,0.05);
  }

  .security-row:last-child {
    border-bottom: none;
  }

  .security-label {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    font-weight: 600;
    color: #000000;
    letter-spacing: -0.02em;
  }

  .chevron {
    font-size: clamp(1.2rem, 1.8vw, 1.4rem);
    color: #666666;
    line-height: 1;
    font-weight: 300;
  }

  @media (max-width: 720px) {
    .personal-info-header {
      min-height: 72px;
      padding: 12px 14px;
    }

    .personal-info-logo {
      width: 180px;
      height: 34px;
    }

    .personal-info-header-actions {
      gap: 9px;
    }

    .personal-info-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .personal-info-menu {
      width: 28px;
      height: 24px;
    }

    .personal-info-menu span {
      height: 2px;
    }

    .personal-info-title-bar {
      min-height: 48px;
      padding: 10px 14px;
    }

    .personal-info-back {
      width: 32px;
      height: 32px;
      left: 14px;
    }

    .personal-info-back img {
      width: 20px;
      height: 20px;
    }

    .personal-info-title-bar h1 {
      font-size: 1.5rem;
    }

    .personal-info-content {
      width: calc(100% - 28px);
      padding: 16px 0;
    }
  }
`;function mm(){const e=ie(),{profile:t}=Qr(),[n,r]=h.useState(!1);if(!t)return i.jsx("div",{style:{padding:12},children:"No profile found."});const a=(t==null?void 0:t.username)||"N/A",o=(t==null?void 0:t.phone)||"N/A",s=(t==null?void 0:t.gender)||"N/A";return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:hm}),i.jsxs("div",{className:"personal-info-page",children:[i.jsxs("header",{className:"personal-info-header",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"personal-info-logo"}),i.jsxs("div",{className:"personal-info-header-actions",children:[i.jsx("button",{type:"button",className:"personal-info-contact",onClick:()=>r(!0),children:"Contact"}),i.jsxs("button",{type:"button",className:"personal-info-menu",onClick:()=>e("/profile"),"aria-label":"Open profile menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]})]}),i.jsxs("div",{className:"personal-info-title-bar",children:[i.jsx("button",{type:"button",className:"personal-info-back",onClick:()=>e(-1),"aria-label":"Go back",children:i.jsx("img",{src:ze,alt:"Back"})}),i.jsx("h1",{children:"Account Info"})]}),i.jsxs("main",{className:"personal-info-content",children:[i.jsx("div",{className:"section-title",children:"My Profile"}),i.jsxs("div",{className:"profile-card",children:[i.jsxs("div",{className:"info-row",children:[i.jsx("div",{className:"info-label",children:"Username"}),i.jsx("div",{className:"info-value",children:a})]}),i.jsxs("div",{className:"info-row",children:[i.jsx("div",{className:"info-label",children:"Mobile Number"}),i.jsx("div",{className:"info-value",children:o})]}),i.jsxs("div",{className:"info-row",children:[i.jsx("div",{className:"info-label",children:"Gender"}),i.jsx("div",{className:"info-value",children:s})]})]}),i.jsxs("div",{className:"security-section",children:[i.jsx("div",{className:"security-title",children:"Security"}),i.jsxs("div",{className:"security-card",children:[i.jsxs("button",{type:"button",className:"security-row",onClick:()=>e("/update-password"),children:[i.jsx("span",{className:"security-label",children:"Login Password"}),i.jsx("span",{className:"chevron",children:"⌄"})]}),i.jsxs("button",{type:"button",className:"security-row",onClick:()=>e("/update-withdraw-password"),children:[i.jsx("span",{className:"security-label",children:"Transaction Password"}),i.jsx("span",{className:"chevron",children:"⌄"})]})]})]})]}),i.jsx(ge,{open:n,onClose:()=>r(!1)})]})]})}const gm=`
  html, body, #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  .bind-wallet-page {
    min-height: 100vh;
    overflow-x: hidden;
    background: #e3e3e3;
    color: #000000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    padding-bottom: 40px;
  }

  .bind-wallet-page button {
    font-family: inherit;
  }

  .bind-wallet-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid #d5d5d5;
    background: #ffffff;
  }

  .bind-wallet-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
  }

  .bind-wallet-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .bind-wallet-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 0;
    border-radius: 40px;
    color: #ffffff;
    background: #000000;
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }

  .bind-wallet-contact:hover {
    background: #222222;
  }

  .bind-wallet-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(34px, 5vw, 64px);
    height: clamp(26px, 3.5vw, 44px);
    padding: 4px 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .bind-wallet-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: #000000;
  }

  .bind-wallet-title-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: clamp(50px, 6vw, 70px);
    padding: clamp(12px, 2vw, 16px) clamp(18px, 4.2vw, 42px);
    background: #e3e3e3;
    border-bottom: 1px solid #d5d5d5;
  }

  .bind-wallet-back {
    position: absolute;
    left: clamp(18px, 4.2vw, 42px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .bind-wallet-back img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    display: block;
  }

  .bind-wallet-title-bar h1 {
    margin: 0;
    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #000000;
  }

  .bind-wallet-content {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding: clamp(20px, 3vw, 30px);
  }

  .form-card {
    background: #ffffff;
    border-radius: 14px;
    padding: clamp(20px, 3vw, 28px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }

  .form-section {
    margin-bottom: clamp(18px, 2.5vw, 24px);
    position: relative;
  }

  .form-section:last-of-type {
    margin-bottom: clamp(20px, 3vw, 28px);
  }

  .section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: clamp(14px, 2vw, 16px) clamp(14px, 2vw, 18px);
    background: #f0f0f0;
    border-radius: 8px;
    border: 1px solid #e5e5e5;
    cursor: pointer;
    width: 100%;
    font-size: inherit;
    font-family: inherit;
    transition: background 0.2s;
  }

  .section-header:hover {
    background: #e8e8e8;
  }

  .section-header-title {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    font-weight: 600;
    color: #000000;
    letter-spacing: -0.02em;
  }

  .dropdown-arrow {
    font-size: clamp(0.9rem, 1.4vw, 1rem);
    color: #666666;
    line-height: 1;
    transition: transform 0.2s;
  }

  .dropdown-arrow.open {
    transform: rotate(180deg);
  }

  .section-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .section-content.open {
    max-height: 400px;
  }

  .section-inner {
    padding: clamp(12px, 1.8vw, 16px);
    background: #f9f9f9;
    border: 1px solid #e8e8e8;
    border-top: none;
    border-radius: 0 0 8px 8px;
  }

  .dropdown-item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: clamp(10px, 1.5vw, 12px) 0;
    border-bottom: 1px solid #e8e8e8;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    color: #000000;
    font-weight: 500;
    letter-spacing: -0.02em;
    text-align: left;
    transition: background 0.2s;
  }

  .dropdown-item:last-child {
    border-bottom: none;
  }

  .dropdown-item:hover {
    background: #f0f0f0;
  }

  .dropdown-item.selected {
    font-weight: 600;
  }

  .dropdown-checkmark {
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    color: #168b38;
  }

  .form-group {
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .form-label {
    font-size: clamp(0.9rem, 1.4vw, 1rem);
    font-weight: 600;
    color: #000000;
    letter-spacing: -0.02em;
  }

  .form-input {
    width: 100%;
    padding: clamp(10px, 1.5vw, 12px) clamp(12px, 1.8vw, 14px);
    border-radius: 7px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    font-size: clamp(0.9rem, 1.4vw, 1rem);
    color: #000000;
    letter-spacing: 0.01em;
  }

  .form-input:focus {
    outline: none;
    border-color: #000000;
    background: #ffffff;
  }

  .form-input::placeholder {
    color: #b0b0b0;
  }

  .toggle-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: clamp(14px, 2vw, 16px) clamp(14px, 2vw, 18px);
    background: #f0f0f0;
    border-radius: 8px;
    border: 1px solid #e5e5e5;
  }

  .toggle-label {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    font-weight: 600;
    color: #000000;
    letter-spacing: -0.02em;
  }

  .toggle-switch {
    position: relative;
    width: 50px;
    height: 28px;
    background: #d0d0d0;
    border-radius: 999px;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    transition: background 0.2s;
  }

  .toggle-switch.active {
    background: #666666;
  }

  .toggle-switch::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    background: #ffffff;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    transition: left 0.2s;
  }

  .toggle-switch.active::after {
    left: 24px;
  }

  .submit-button {
    width: 100%;
    padding: clamp(14px, 2vw, 18px);
    border: none;
    border-radius: 100px;
    background: #2d003f;
    color: #ffffff;
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    letter-spacing: -0.02em;
  }

  .submit-button:hover:not(:disabled) {
    background: #41005a;
  }

  .submit-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .success-message {
    position: fixed;
    bottom: clamp(20px, 4vw, 30px);
    left: 50%;
    transform: translateX(-50%);
    background: #168b38;
    color: #ffffff;
    padding: clamp(12px, 2vw, 16px) clamp(16px, 2vw, 20px);
    border-radius: 8px;
    font-size: clamp(0.9rem, 1.4vw, 1rem);
    font-weight: 600;
    box-shadow: 0 2px 12px rgba(0,0,0,0.15);
    z-index: 1000;
    animation: slide-up 0.3s ease;
  }

  @keyframes slide-up {
    from { opacity: 0; transform: translateX(-50%) translateY(20px); }
    to { opacity: 1; transform: translateX(-50%) translateY(0); }
  }

  @media (max-width: 720px) {
    .bind-wallet-header {
      min-height: 72px;
      padding: 12px 14px;
    }

    .bind-wallet-logo {
      width: 180px;
      height: 34px;
    }

    .bind-wallet-header-actions {
      gap: 9px;
    }

    .bind-wallet-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .bind-wallet-menu {
      width: 28px;
      height: 24px;
    }

    .bind-wallet-menu span {
      height: 2px;
    }

    .bind-wallet-title-bar {
      min-height: 48px;
      padding: 10px 14px;
    }

    .bind-wallet-back {
      width: 32px;
      height: 32px;
      left: 14px;
    }

    .bind-wallet-back img {
      width: 20px;
      height: 20px;
    }

    .bind-wallet-title-bar h1 {
      font-size: 1.5rem;
    }

    .bind-wallet-content {
      width: calc(100% - 28px);
      padding: 16px 0;
    }

    .form-card {
      padding: 16px;
    }
  }
`,xm="https://stacks-admin.onrender.com/api";function wm(){const e=ie(),{profile:t}=Qr(),[n,r]=h.useState("BTC"),[a,o]=h.useState(!1),[s,l]=h.useState(""),[d,c]=h.useState(""),[m,p]=h.useState(""),[x,w]=h.useState(!1),[y,b]=h.useState(!1),[j,f]=h.useState(null),[u,g]=h.useState(!1),$=["BTC","ETH","ERC-USDT","TRC-USDT"],A=async N=>{if(N.preventDefault(),!m.trim()){alert("Please enter a wallet address.");return}w(!0);try{const v=localStorage.getItem("authToken"),L=await(await fetch(`${xm}/bind-wallet`,{method:"POST",headers:{"Content-Type":"application/json","X-Auth-Token":v},body:JSON.stringify({walletType:n,isDefault:a,accountHolderName:s,walletName:d,walletAddress:m})})).json();w(!1),L.success?(b(!0),setTimeout(()=>{b(!1),e("/personal-info")},2e3)):alert(L.message||"Failed to bind wallet.")}catch{w(!1),alert("Network error. Please try again.")}},E=()=>{f(j==="withdrawal"?null:"withdrawal")};return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:gm}),i.jsxs("div",{className:"bind-wallet-page",children:[i.jsxs("header",{className:"bind-wallet-header",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"bind-wallet-logo"}),i.jsxs("div",{className:"bind-wallet-header-actions",children:[i.jsx("button",{type:"button",className:"bind-wallet-contact",onClick:()=>g(!0),children:"Contact"}),i.jsxs("button",{type:"button",className:"bind-wallet-menu",onClick:()=>e("/profile"),"aria-label":"Open profile menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]})]}),i.jsxs("div",{className:"bind-wallet-title-bar",children:[i.jsx("button",{type:"button",className:"bind-wallet-back",onClick:()=>e(-1),"aria-label":"Go back",children:i.jsx("img",{src:ze,alt:"Back"})}),i.jsx("h1",{children:"Payment Methods"})]}),i.jsx("main",{className:"bind-wallet-content",children:i.jsxs("form",{onSubmit:A,className:"form-card",children:[i.jsxs("div",{className:"form-section",children:[i.jsxs("button",{type:"button",className:"section-header",onClick:E,children:[i.jsx("span",{className:"section-header-title",children:"Withdrawal Type"}),i.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:i.jsx("span",{className:"section-header-title",children:n})})]}),i.jsx("div",{className:`section-content ${j==="withdrawal"?"open":""}`,children:i.jsx("div",{className:"section-inner",children:$.map(N=>i.jsxs("button",{type:"button",className:`dropdown-item ${n===N?"selected":""}`,onClick:()=>{r(N),f(null)},children:[i.jsx("span",{children:N}),n===N&&i.jsx("span",{className:"dropdown-checkmark",children:"✓"})]},N))})})]}),i.jsx("div",{className:"form-section",children:i.jsxs("div",{className:"toggle-container",children:[i.jsx("span",{className:"toggle-label",children:"Default"}),i.jsx("button",{type:"button",className:`toggle-switch ${a?"active":""}`,onClick:()=>o(!a),"aria-label":"Toggle default wallet"})]})}),i.jsxs("div",{className:"form-section",children:[i.jsx("div",{className:"section-header",style:{cursor:"default",background:"#f0f0f0"},children:i.jsx("span",{className:"section-header-title",children:"Account Holder Name"})}),i.jsx("div",{style:{padding:"clamp(12px, 1.8vw, 16px)",background:"#f9f9f9",borderRadius:"0 0 8px 8px",border:"1px solid #e8e8e8",borderTop:"none"},children:i.jsx("input",{type:"text",className:"form-input",placeholder:"Account Holder Name",value:s,onChange:N=>l(N.target.value)})})]}),i.jsxs("div",{className:"form-section",children:[i.jsx("div",{className:"section-header",style:{cursor:"default",background:"#f0f0f0"},children:i.jsx("span",{className:"section-header-title",children:"Wallet Name"})}),i.jsx("div",{style:{padding:"clamp(12px, 1.8vw, 16px)",background:"#f9f9f9",borderRadius:"0 0 8px 8px",border:"1px solid #e8e8e8",borderTop:"none"},children:i.jsx("input",{type:"text",className:"form-input",placeholder:"Wallet Name",value:d,onChange:N=>c(N.target.value)})})]}),i.jsxs("div",{className:"form-section",children:[i.jsx("div",{className:"section-header",style:{cursor:"default",background:"#f0f0f0"},children:i.jsx("span",{className:"section-header-title",children:"Wallet Address"})}),i.jsx("div",{style:{padding:"clamp(12px, 1.8vw, 16px)",background:"#f9f9f9",borderRadius:"0 0 8px 8px",border:"1px solid #e8e8e8",borderTop:"none"},children:i.jsx("input",{type:"text",className:"form-input",placeholder:"Wallet Address",value:m,onChange:N=>p(N.target.value),required:!0})})]}),i.jsx("button",{type:"submit",className:"submit-button",disabled:x,children:x?"Submitting...":"Submit"})]})}),y&&i.jsx("div",{className:"success-message",children:"✅ Wallet bound successfully!"}),i.jsx(ge,{open:u,onClose:()=>g(!1)})]})]})}const vm="https://stacks-admin.onrender.com",Bd="#1fb6fc";function ym(){const[e,t]=h.useState([]),[n,r]=h.useState(!0),a=ie();return h.useEffect(()=>{fetch(`${vm}/api/notifications`,{headers:{"X-Auth-Token":localStorage.getItem("authToken")}}).then(o=>o.json()).then(o=>{o.success&&(t(o.notifications),o.notifications.length>0&&localStorage.setItem("lastReadNotificationId",o.notifications[0].id)),r(!1)}).catch(()=>r(!1))},[]),i.jsxs("div",{className:"min-h-screen bg-white pb-20",children:[i.jsxs("div",{className:"bg-[#2d2d2d] text-white text-center py-3 font-semibold text-lg relative flex items-center justify-center",children:[i.jsx("button",{"aria-label":"Back","data-i18n-aria":"Back",onClick:()=>a(-1),style:{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",padding:0,margin:0,cursor:"pointer",lineHeight:1,zIndex:1,display:"flex",alignItems:"center"},children:i.jsx("svg",{width:28,height:28,viewBox:"0 0 22 22",children:i.jsx("polyline",{points:"14,5 8,11 14,17",fill:"none",stroke:Bd,strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),i.jsx("span",{"data-i18n":"Notifications",children:"Notifications"})]}),i.jsx("div",{className:"p-4",children:n?i.jsx("div",{className:"text-center text-gray-500","data-i18n":"Loading...",children:"Loading..."}):e.length===0?i.jsx("div",{className:"text-center text-gray-400","data-i18n":"No notifications at the moment.",children:"No notifications at the moment."}):i.jsx("ul",{className:"space-y-4",children:e.map(o=>i.jsxs("li",{className:"border rounded p-4 shadow-sm bg-gray-50",children:[i.jsx("div",{className:"font-semibold",style:{color:Bd},children:o.title}),i.jsx("div",{className:"mt-1 text-gray-700",children:o.message}),i.jsx("div",{className:"mt-2 text-xs text-gray-400",children:o.createdAt&&!isNaN(new Date(o.createdAt).getTime())?new Date(o.createdAt).toLocaleString():""})]},o.id))})})]})}const $m=`
  html, body, #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  .update-password-page {
    min-height: 100vh;
    overflow-x: hidden;
    background: #e3e3e3;
    color: #000000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    padding-bottom: 40px;
  }

  .update-password-page button {
    font-family: inherit;
  }

  .update-password-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid #d5d5d5;
    background: #ffffff;
  }

  .update-password-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
  }

  .update-password-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .update-password-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 0;
    border-radius: 40px;
    color: #ffffff;
    background: #000000;
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }

  .update-password-contact:hover {
    background: #222222;
  }

  .update-password-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(34px, 5vw, 64px);
    height: clamp(26px, 3.5vw, 44px);
    padding: 4px 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .update-password-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: #000000;
  }

  .update-password-title-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: clamp(50px, 6vw, 70px);
    padding: clamp(12px, 2vw, 16px) clamp(18px, 4.2vw, 42px);
    background: #e3e3e3;
    border-bottom: 1px solid #d5d5d5;
  }

  .update-password-back {
    position: absolute;
    left: clamp(18px, 4.2vw, 42px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .update-password-back img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    display: block;
  }

  .update-password-title-bar h1 {
    margin: 0;
    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #000000;
  }

  .update-password-content {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding: clamp(20px, 3vw, 30px);
  }

  .section-title {
    margin: clamp(20px, 3vw, 30px) 0 clamp(12px, 2vw, 18px);
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    font-weight: 700;
    color: #000000;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .form-container {
    background: #ffffff;
    border-radius: 14px;
    padding: clamp(20px, 3vw, 24px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }

  .form-group {
    margin-bottom: clamp(16px, 2vw, 20px);
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .form-group:last-child {
    margin-bottom: 0;
  }

  .form-label {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    font-weight: 600;
    color: #000000;
    letter-spacing: -0.02em;
  }

  .password-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .form-input {
    width: 100%;
    padding: clamp(12px, 2vw, 14px) clamp(12px, 2vw, 16px);
    border-radius: 7px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    color: #000000;
    letter-spacing: 0.02em;
  }

  .form-input:focus {
    outline: none;
    border-color: #000000;
    background: #ffffff;
  }

  .form-input::placeholder {
    color: #999999;
  }

  .eye-toggle {
    position: absolute;
    right: clamp(10px, 1.5vw, 14px);
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    color: #666666;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .error-message {
    color: #c62828;
    font-size: clamp(0.85rem, 1.3vw, 1rem);
    margin-top: 8px;
    font-weight: 500;
  }

  .submit-button {
    width: 100%;
    padding: clamp(14px, 2vw, 18px);
    margin-top: clamp(16px, 2.5vw, 22px);
    border: none;
    border-radius: 100px;
    background: #666666;
    color: #ffffff;
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    letter-spacing: -0.02em;
  }

  .submit-button:hover:not(:disabled) {
    background: #555555;
  }

  .submit-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .fade-message {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }

  .fade-message-content {
    background: rgba(60, 60, 60, 0.94);
    color: #fff;
    border-radius: 16px;
    padding: clamp(0.8rem, 2vw, 1.1rem) clamp(1.5rem, 3vw, 2.2rem);
    font-weight: 600;
    font-size: clamp(0.95rem, 1.6vw, 1.19rem);
    box-shadow: 0 2px 16px 0 rgba(0,0,0,0.2);
    opacity: 0.97;
    text-align: center;
    min-width: 140px;
    max-width: 80vw;
    letter-spacing: 0.01em;
    animation: fade-in-out 1s linear;
  }

  @keyframes fade-in-out {
    0% { opacity: 0; transform: scale(0.98); }
    10% { opacity: 1; transform: scale(1); }
    90% { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: scale(0.98); }
  }

  @media (max-width: 720px) {
    .update-password-header {
      min-height: 72px;
      padding: 12px 14px;
    }

    .update-password-logo {
      width: 180px;
      height: 34px;
    }

    .update-password-header-actions {
      gap: 9px;
    }

    .update-password-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .update-password-menu {
      width: 28px;
      height: 24px;
    }

    .update-password-menu span {
      height: 2px;
    }

    .update-password-title-bar {
      min-height: 48px;
      padding: 10px 14px;
    }

    .update-password-back {
      width: 32px;
      height: 32px;
      left: 14px;
    }

    .update-password-back img {
      width: 20px;
      height: 20px;
    }

    .update-password-title-bar h1 {
      font-size: 1.5rem;
    }

    .update-password-content {
      width: calc(100% - 28px);
      padding: 16px 0;
    }

    .form-container {
      padding: 16px;
    }
  }
`;function bm({message:e}){return i.jsx("div",{className:"fade-message",children:i.jsx("div",{className:"fade-message-content",children:i.jsx("span",{children:e})})})}function jm(){const e=ie(),[t,n]=h.useState(""),[r,a]=h.useState(""),[o,s]=h.useState(""),[l,d]=h.useState(!1),[c,m]=h.useState(!1),[p,x]=h.useState(!1),[w,y]=h.useState(!1),[b,j]=h.useState(""),[f,u]=h.useState(""),[g,$]=h.useState(!1),A=async E=>{if(E.preventDefault(),u(""),!t||!r||!o){u("All fields are required.");return}if(r!==o){u("New passwords do not match.");return}if(r.length<6){u("New password must be at least 6 characters.");return}y(!0);try{const N=localStorage.getItem("authToken"),L=await(await fetch("https://stacks-admin.onrender.com/api/change-password",{method:"POST",headers:{"Content-Type":"application/json","X-Auth-Token":N},body:JSON.stringify({oldPassword:t,newPassword:r})})).json();y(!1),L.success?(j("Password updated successfully!"),setTimeout(()=>{localStorage.removeItem("currentUser"),localStorage.removeItem("authToken"),localStorage.removeItem("user"),e("/login")},1e3)):u(L.message||"Password update failed.")}catch{y(!1),u("Network error. Please try again.")}};return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:$m}),i.jsxs("div",{className:"update-password-page",children:[i.jsxs("header",{className:"update-password-header",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"update-password-logo"}),i.jsxs("div",{className:"update-password-header-actions",children:[i.jsx("button",{type:"button",className:"update-password-contact",onClick:()=>$(!0),children:"Contact"}),i.jsxs("button",{type:"button",className:"update-password-menu",onClick:()=>e("/profile"),"aria-label":"Open profile menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]})]}),i.jsxs("div",{className:"update-password-title-bar",children:[i.jsx("button",{type:"button",className:"update-password-back",onClick:()=>e(-1),"aria-label":"Go back",children:i.jsx("img",{src:ze,alt:"Back"})}),i.jsx("h1",{children:"Security"})]}),i.jsxs("main",{className:"update-password-content",children:[i.jsx("div",{className:"section-title",children:"Login Password"}),i.jsx("div",{className:"form-container",children:i.jsxs("form",{onSubmit:A,children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Old Password"}),i.jsxs("div",{className:"password-input-wrapper",children:[i.jsx("input",{type:l?"text":"password",className:"form-input",placeholder:"Old Password",value:t,onChange:E=>n(E.target.value),required:!0}),i.jsx("button",{type:"button",className:"eye-toggle",onClick:()=>d(!l),"aria-label":"Toggle password visibility",children:"👁️"})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"New Password"}),i.jsxs("div",{className:"password-input-wrapper",children:[i.jsx("input",{type:c?"text":"password",className:"form-input",placeholder:"New Password",value:r,onChange:E=>a(E.target.value),required:!0}),i.jsx("button",{type:"button",className:"eye-toggle",onClick:()=>m(!c),"aria-label":"Toggle password visibility",children:"👁️"})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Confirm New Password"}),i.jsxs("div",{className:"password-input-wrapper",children:[i.jsx("input",{type:p?"text":"password",className:"form-input",placeholder:"Confirm New Password",value:o,onChange:E=>s(E.target.value),required:!0}),i.jsx("button",{type:"button",className:"eye-toggle",onClick:()=>x(!p),"aria-label":"Toggle password visibility",children:"👁️"})]})]}),f&&i.jsx("div",{className:"error-message",children:f}),i.jsx("button",{type:"submit",className:"submit-button",disabled:w,children:w?"Updating...":"Update"})]})})]}),b&&i.jsx(bm,{message:b}),i.jsx(ge,{open:g,onClose:()=>$(!1)})]})]})}const km=`
  html, body, #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  .update-withdraw-password-page {
    min-height: 100vh;
    overflow-x: hidden;
    background: #e3e3e3;
    color: #000000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    padding-bottom: 40px;
  }

  .update-withdraw-password-page button {
    font-family: inherit;
  }

  .update-withdraw-password-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid #d5d5d5;
    background: #ffffff;
  }

  .update-withdraw-password-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
  }

  .update-withdraw-password-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .update-withdraw-password-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 0;
    border-radius: 40px;
    color: #ffffff;
    background: #000000;
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }

  .update-withdraw-password-contact:hover {
    background: #222222;
  }

  .update-withdraw-password-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(34px, 5vw, 64px);
    height: clamp(26px, 3.5vw, 44px);
    padding: 4px 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .update-withdraw-password-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: #000000;
  }

  .update-withdraw-password-title-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: clamp(50px, 6vw, 70px);
    padding: clamp(12px, 2vw, 16px) clamp(18px, 4.2vw, 42px);
    background: #e3e3e3;
    border-bottom: 1px solid #d5d5d5;
  }

  .update-withdraw-password-back {
    position: absolute;
    left: clamp(18px, 4.2vw, 42px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .update-withdraw-password-back img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    display: block;
  }

  .update-withdraw-password-title-bar h1 {
    margin: 0;
    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #000000;
  }

  .update-withdraw-password-content {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding: clamp(20px, 3vw, 30px);
  }

  .section-title {
    margin: clamp(20px, 3vw, 30px) 0 clamp(12px, 2vw, 18px);
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    font-weight: 700;
    color: #000000;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .form-container {
    background: #ffffff;
    border-radius: 14px;
    padding: clamp(20px, 3vw, 24px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }

  .form-group {
    margin-bottom: clamp(16px, 2vw, 20px);
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .form-group:last-of-type {
    margin-bottom: clamp(16px, 2vw, 20px);
  }

  .form-label {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    font-weight: 600;
    color: #000000;
    letter-spacing: -0.02em;
  }

  .password-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .form-input {
    width: 100%;
    padding: clamp(12px, 2vw, 14px) clamp(12px, 2vw, 16px);
    border-radius: 7px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    color: #000000;
    letter-spacing: 0.02em;
  }

  .form-input:focus {
    outline: none;
    border-color: #000000;
    background: #ffffff;
  }

  .form-input::placeholder {
    color: #999999;
  }

  .eye-toggle {
    position: absolute;
    right: clamp(10px, 1.5vw, 14px);
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    color: #666666;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .error-message {
    color: #c62828;
    font-size: clamp(0.85rem, 1.3vw, 1rem);
    margin-top: 0;
    font-weight: 500;
  }

  .submit-button {
    width: 100%;
    padding: clamp(14px, 2vw, 18px);
    margin-top: clamp(16px, 2.5vw, 22px);
    border: none;
    border-radius: 100px;
    background: #666666;
    color: #ffffff;
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    letter-spacing: -0.02em;
  }

  .submit-button:hover:not(:disabled) {
    background: #555555;
  }

  .submit-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .success-message {
    text-align: center;
    padding: clamp(20px, 3vw, 30px) 0;
  }

  .success-text {
    color: #168b38;
    font-weight: 600;
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    margin-bottom: 12px;
    letter-spacing: -0.02em;
  }

  .success-subtext {
    color: #666666;
    font-weight: 400;
    font-size: clamp(0.85rem, 1.3vw, 1rem);
    letter-spacing: -0.02em;
  }

  @media (max-width: 720px) {
    .update-withdraw-password-header {
      min-height: 72px;
      padding: 12px 14px;
    }

    .update-withdraw-password-logo {
      width: 180px;
      height: 34px;
    }

    .update-withdraw-password-header-actions {
      gap: 9px;
    }

    .update-withdraw-password-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .update-withdraw-password-menu {
      width: 28px;
      height: 24px;
    }

    .update-withdraw-password-menu span {
      height: 2px;
    }

    .update-withdraw-password-title-bar {
      min-height: 48px;
      padding: 10px 14px;
    }

    .update-withdraw-password-back {
      width: 32px;
      height: 32px;
      left: 14px;
    }

    .update-withdraw-password-back img {
      width: 20px;
      height: 20px;
    }

    .update-withdraw-password-title-bar h1 {
      font-size: 1.5rem;
    }

    .update-withdraw-password-content {
      width: calc(100% - 28px);
      padding: 16px 0;
    }

    .form-container {
      padding: 16px;
    }
  }
`;function Am(){const e=ie(),[t,n]=h.useState(""),[r,a]=h.useState(""),[o,s]=h.useState(""),[l,d]=h.useState(!1),[c,m]=h.useState(!1),[p,x]=h.useState(!1),[w,y]=h.useState(!1),[b,j]=h.useState(!1),[f,u]=h.useState(""),[g,$]=h.useState(!1),A=async E=>{if(E.preventDefault(),u(""),!t||!r||!o){u("All fields are required.");return}if(r!==o){u("New passwords do not match.");return}if(r.length<6){u("New password must be at least 6 characters.");return}y(!0);try{const N=localStorage.getItem("authToken"),L=await(await fetch("https://stacks-admin.onrender.com/api/change-withdraw-password",{method:"POST",headers:{"Content-Type":"application/json","X-Auth-Token":N},body:JSON.stringify({oldPassword:t,newPassword:r})})).json();y(!1),L.success?(j(!0),setTimeout(()=>{e("/personal-info")},2e3)):u(L.message||"Withdrawal password update failed.")}catch{y(!1),u("Network error. Please try again.")}};return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:km}),i.jsxs("div",{className:"update-withdraw-password-page",children:[i.jsxs("header",{className:"update-withdraw-password-header",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"update-withdraw-password-logo"}),i.jsxs("div",{className:"update-withdraw-password-header-actions",children:[i.jsx("button",{type:"button",className:"update-withdraw-password-contact",onClick:()=>$(!0),children:"Contact"}),i.jsxs("button",{type:"button",className:"update-withdraw-password-menu",onClick:()=>e("/profile"),"aria-label":"Open profile menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]})]}),i.jsxs("div",{className:"update-withdraw-password-title-bar",children:[i.jsx("button",{type:"button",className:"update-withdraw-password-back",onClick:()=>e(-1),"aria-label":"Go back",children:i.jsx("img",{src:ze,alt:"Back"})}),i.jsx("h1",{children:"Security"})]}),i.jsxs("main",{className:"update-withdraw-password-content",children:[i.jsx("div",{className:"section-title",children:"Security Pin"}),i.jsx("div",{className:"form-container",children:b?i.jsxs("div",{className:"success-message",children:[i.jsx("div",{className:"success-text",children:"Withdrawal password updated successfully!"}),i.jsx("div",{className:"success-subtext",children:"Redirecting to account info..."})]}):i.jsxs("form",{onSubmit:A,children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Old Security Pin"}),i.jsxs("div",{className:"password-input-wrapper",children:[i.jsx("input",{type:l?"text":"password",className:"form-input",placeholder:"Old Security Pin",value:t,onChange:E=>n(E.target.value),required:!0}),i.jsx("button",{type:"button",className:"eye-toggle",onClick:()=>d(!l),"aria-label":"Toggle password visibility",children:"👁️"})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"New Security Pin"}),i.jsxs("div",{className:"password-input-wrapper",children:[i.jsx("input",{type:c?"text":"password",className:"form-input",placeholder:"New Security Pin",value:r,onChange:E=>a(E.target.value),required:!0}),i.jsx("button",{type:"button",className:"eye-toggle",onClick:()=>m(!c),"aria-label":"Toggle password visibility",children:"👁️"})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Confirm New Security Pin"}),i.jsxs("div",{className:"password-input-wrapper",children:[i.jsx("input",{type:p?"text":"password",className:"form-input",placeholder:"Confirm New Security Pin",value:o,onChange:E=>s(E.target.value),required:!0}),i.jsx("button",{type:"button",className:"eye-toggle",onClick:()=>x(!p),"aria-label":"Toggle password visibility",children:"👁️"})]})]}),f&&i.jsx("div",{className:"error-message",children:f}),i.jsx("button",{type:"submit",className:"submit-button",disabled:w,children:w?"Updating...":"Update"})]})})]}),i.jsx(ge,{open:g,onClose:()=>$(!1)})]})]})}function Se({children:e}){const t=JSON.parse(localStorage.getItem("currentUser"));return!!(t!=null&&t.username)?e:i.jsx(Jo,{to:"/login",state:{from:mn()}})}function Sm(){return console.log("Rendering AppRoutes..."),i.jsx(r2,{children:i.jsxs(q1,{children:[i.jsx(Z,{path:"/",element:i.jsx(Jo,{to:"/login"})}),i.jsx(Z,{path:"/login",element:i.jsx(p2,{})}),i.jsx(Z,{path:"/register",element:i.jsx(O2,{})}),i.jsx(Z,{path:"/terms",element:i.jsx(B2,{})}),i.jsx(Z,{path:"/dashboard",element:i.jsx(Se,{children:i.jsx(sh,{})})}),i.jsx(Z,{path:"/deposit",element:i.jsx(Se,{children:i.jsx(fh,{})})}),i.jsx(Z,{path:"/withdraw",element:i.jsx(Se,{children:i.jsx(xh,{})})}),i.jsx(Z,{path:"/tasks",element:i.jsx(Se,{children:i.jsx(Ch,{})})}),i.jsx(Z,{path:"/vip",element:i.jsx(Se,{children:i.jsx(Lh,{})})}),i.jsx(Z,{path:"/profile",element:i.jsx(Se,{children:i.jsx(Hh,{})})}),i.jsx(Z,{path:"/about",element:i.jsx(Se,{children:i.jsx(Kh,{})})}),i.jsx(Z,{path:"/events",element:i.jsx(Se,{children:i.jsx(Zh,{})})}),i.jsx(Z,{path:"/faq",element:i.jsx(Se,{children:i.jsx(tm,{})})}),i.jsx(Z,{path:"/wallet-binding",element:i.jsx(Se,{children:i.jsx(nm,{})})}),i.jsx(Z,{path:"/certificate",element:i.jsx(Se,{children:i.jsx(am,{})})}),i.jsx(Z,{path:"/records",element:i.jsx(Se,{children:i.jsx(fm,{})})}),i.jsx(Z,{path:"/personal-info",element:i.jsx(Se,{children:i.jsx(mm,{})})}),i.jsx(Z,{path:"/bind-wallet",element:i.jsx(Se,{children:i.jsx(wm,{})})}),i.jsx(Z,{path:"/notifications",element:i.jsx(Se,{children:i.jsx(ym,{})})}),i.jsx(Z,{path:"/update-password",element:i.jsx(jm,{})}),i.jsx(Z,{path:"/update-withdraw-password",element:i.jsx(Am,{})}),i.jsx(Z,{path:"*",element:i.jsx(Jo,{to:"/login"})})]})})}const ha="translations:";function Xt(e,t){try{localStorage.setItem(ha+e,JSON.stringify(t||{}))}catch{}}function cr(e){try{const t=localStorage.getItem(ha+e);return t?JSON.parse(t):null}catch{return null}}function Fd(e,t){try{localStorage.setItem(ha+e+":raw",JSON.stringify(t||{}))}catch{}}function to(e){try{const t=localStorage.getItem(ha+e+":raw");return t?JSON.parse(t):null}catch{return null}}async function Ud(e){try{const t=await fetch(`/i18n/${e}.json`,{cache:"no-cache"});if(!t.ok)return null;const n=await t.json();return n&&typeof n=="object"?n:null}catch{return null}}function Nm(e){const t=Array.from(document.querySelectorAll("[data-i18n]"));let n=0;return t.forEach(r=>{try{const a=(r.getAttribute("data-i18n")||"").trim();if(!a||!Object.prototype.hasOwnProperty.call(e,a))return;const o=e[a],s=(r.tagName||"").toLowerCase();if(s==="input"||s==="textarea")r.getAttribute("placeholder")!==null?r.setAttribute("placeholder",o):r.setAttribute("aria-label",o);else if(s==="img")r.getAttribute("alt")!==null&&r.setAttribute("alt",o);else try{r.innerHTML=o}catch{r.textContent=o}r.getAttribute("title")!==null&&r.setAttribute("title",o),n++}catch{}}),n}function Cm(e){const t=["placeholder","title","alt","aria-label"],n=Array.from(document.querySelectorAll("body *"));let r=0;return n.forEach(a=>{try{t.forEach(o=>{if(!a.hasAttribute||!a.hasAttribute(o))return;const s=(a.getAttribute(o)||"").trim();s&&Object.prototype.hasOwnProperty.call(e,s)&&(a.setAttribute(o,e[s]),r++)})}catch{}}),r}function k0(e){const t=Object.keys(e||{}).filter(s=>s&&s.trim().length);if(t.length===0)return 0;t.sort((s,l)=>l.length-s.length);const n=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(s){const l=s.parentNode;if(!l||!(l instanceof HTMLElement))return NodeFilter.FILTER_REJECT;const d=l.tagName.toLowerCase();if(["script","style","noscript","template","svg","code","pre","textarea"].includes(d))return NodeFilter.FILTER_REJECT;try{const c=window.getComputedStyle(l);if(!c||c.display==="none"||c.visibility==="hidden"||c.opacity==="0")return NodeFilter.FILTER_REJECT}catch{}return!s.nodeValue||!s.nodeValue.trim()?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}});let r,a=0;const o=5e3;for(;r=n.nextNode();)try{let s=r.nodeValue,l=s,d=!1;for(const c of t)if(c&&s.includes(c)){const m=e[c];if(m==null)continue;if(s=s.split(c).join(m),d=!0,++a>o)break}if(d&&s!==l){const c=r.parentNode;if(!c)continue;if(/<\/?[a-z][\s\S]*>/i.test(s)){const p=document.createElement("span");p.innerHTML=s,c.replaceChild(p,r)}else r.nodeValue=s}if(a>o)break}catch{}return a}function wn(e){if(!e||Object.keys(e).length===0)return{applied:0,details:{}};const t=Nm(e),n=Cm(e),r=k0(e);try{window.dispatchEvent(new Event("languageChanged"))}catch{}return{applied:t+n+r,details:{data:t,attrs:n,text:r}}}function Em(e){if(!window.__I18N_OBSERVER_INSTALLED__)try{const t=new MutationObserver(n=>{const r=window.__TRANSLATIONS__&&window.__TRANSLATIONS__[e]||cr(e)||{};!r||Object.keys(r).length===0||n.forEach(a=>{try{if(a.type==="childList"&&a.addedNodes&&a.addedNodes.length)a.addedNodes.forEach(o=>{if(!(o instanceof HTMLElement))return;const s=Array.from(o.querySelectorAll?o.querySelectorAll("[data-i18n]"):[]);o.getAttribute&&o.getAttribute("data-i18n")&&s.unshift(o),s.length?s.forEach(l=>{try{const d=(l.getAttribute("data-i18n")||"").trim();if(d&&Object.prototype.hasOwnProperty.call(r,d))try{l.innerHTML=r[d]}catch{l.textContent=r[d]}}catch{}}):k0(r)});else if(a.type==="attributes"&&a.target){const o=a.target;if(o instanceof HTMLElement&&o.getAttribute&&o.getAttribute("data-i18n")){const s=(o.getAttribute("data-i18n")||"").trim();if(s&&Object.prototype.hasOwnProperty.call(r,s))try{o.innerHTML=r[s]}catch{o.textContent=r[s]}}}}catch{}})});t.observe(document.documentElement||document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-i18n","placeholder","title"]}),window.__I18N_OBSERVER_INSTALLED__=!0,window.__I18N_OBSERVER__=t}catch{}}function Tm(){if(window.__I18N_HISTORY_PATCHED__)return;const e=()=>{try{window.dispatchEvent(new Event("spa:navigation"))}catch{}},t=history.pushState;history.pushState=function(){t.apply(this,arguments),e()};const n=history.replaceState;history.replaceState=function(){n.apply(this,arguments),e()},window.addEventListener("popstate",e),window.__I18N_HISTORY_PATCHED__=!0}function Im(){const e=typeof window<"u"&&window.CURRENT_CURRENCY||localStorage.getItem("site:currency")||"",t=typeof window<"u"&&window.CURRENT_CURRENCY_SYMBOL||localStorage.getItem("site:currencySymbol")||"",n=typeof window<"u"&&window.CURRENT_CURRENCY_DECIMALS,r=Number.isFinite(n)?n:Number(localStorage.getItem("site:currencyDecimals"))||2,a=typeof window<"u"&&window.CURRENT_CURRENCY_POSITION||localStorage.getItem("site:currencyPosition")||"after";return{currency:e,symbol:t,decimals:r,position:a}}function In(e){const{currency:t,symbol:n,decimals:r,position:a}=Im(),o=l=>{if(typeof l!="string")return l;let d=l;return d=d.split("{{currencySymbol}}").join(n||""),d=d.split("{{currency}}").join(t||""),d=d.split("{{currencyDecimals}}").join(String(r??"")),d=d.split("{{currencyPosition}}").join(String(a)),d=d.split("%CURRENCY%").join(t||""),d=d.split("%CURRENCY_SYMBOL%").join(n||""),d};if(e==null)return e;if(typeof e=="string")return o(e);if(typeof e!="object")return e;if(Array.isArray(e))return e.map(l=>In(l));const s={};for(const l of Object.keys(e))try{s[l]=In(e[l])}catch{s[l]=e[l]}return s}async function _d(e={}){let n=e.defaultLang||localStorage.getItem("lang")||document.documentElement.getAttribute("lang")||"en";e.lang&&(n=e.lang),window.__TRANSLATIONS__=window.__TRANSLATIONS__||{},window.__RAW_TRANSLATIONS__=window.__RAW_TRANSLATIONS__||{};let r=null;try{const s=await Ud(n);if(s&&Object.keys(s).length>0){r=s;try{Fd(n,r)}catch{}window.__RAW_TRANSLATIONS__[n]=r}}catch{r=null}if(!r){const s=to(n);s&&Object.keys(s).length>0&&(r=s,window.__RAW_TRANSLATIONS__[n]=r)}let a=null;if(!r){const s=window.__TRANSLATIONS__&&window.__TRANSLATIONS__[n]||cr(n);s&&Object.keys(s).length>0&&(a=s)}if(r)try{const s=In(r);window.__TRANSLATIONS__[n]=Object.assign({},window.__TRANSLATIONS__[n]||{},s||{}),Xt(n,window.__TRANSLATIONS__[n])}catch{window.__TRANSLATIONS__[n]=Object.assign({},window.__TRANSLATIONS__[n]||{},r||{}),Xt(n,window.__TRANSLATIONS__[n])}else a?(window.__TRANSLATIONS__[n]=Object.assign({},window.__TRANSLATIONS__[n]||{},a||{}),Xt(n,window.__TRANSLATIONS__[n])):(window.__TRANSLATIONS__[n]=window.__TRANSLATIONS__[n]||{},Xt(n,window.__TRANSLATIONS__[n]));const o=wn(window.__TRANSLATIONS__[n]);try{document.documentElement.setAttribute("lang",n)}catch{}Em(n),Tm(),window.addEventListener("spa:navigation",()=>{try{const s=localStorage.getItem("lang")||n,l=window.__TRANSLATIONS__&&window.__TRANSLATIONS__[s]||cr(s)||{};l&&Object.keys(l).length&&wn(l)}catch{}}),window.addEventListener("storage",s=>{if(s.key==="lang"){const l=s.newValue||"en";(async()=>{try{let d=await Ud(l);if(d&&Object.keys(d).length>0){window.__RAW_TRANSLATIONS__[l]=d,Fd(l,d);const p=In(d);window.__TRANSLATIONS__[l]=Object.assign({},window.__TRANSLATIONS__[l]||{},p||{}),Xt(l,window.__TRANSLATIONS__[l]),wn(window.__TRANSLATIONS__[l]),document.documentElement.setAttribute("lang",l);return}const c=to(l)||window.__RAW_TRANSLATIONS__[l]||null;if(c&&Object.keys(c).length){const p=In(c);window.__TRANSLATIONS__[l]=Object.assign({},window.__TRANSLATIONS__[l]||{},p||{}),Xt(l,window.__TRANSLATIONS__[l]),wn(window.__TRANSLATIONS__[l]),document.documentElement.setAttribute("lang",l);return}const m=cr(l)||window.__TRANSLATIONS__&&window.__TRANSLATIONS__[l]||{};if(m&&Object.keys(m).length){window.__TRANSLATIONS__[l]=m,wn(window.__TRANSLATIONS__[l]),document.documentElement.setAttribute("lang",l);return}}catch{}})()}});try{window.__I18N_CURRENCY_LISTENER_INSTALLED__||(window.addEventListener("app:currencyChanged",s=>{try{const l=s&&s.detail||{};if(l.currency!==void 0)try{window.CURRENT_CURRENCY=l.currency}catch{}if(l.symbol!==void 0)try{window.CURRENT_CURRENCY_SYMBOL=l.symbol}catch{}if(l.decimals!==void 0)try{window.CURRENT_CURRENCY_DECIMALS=l.decimals}catch{}Object.keys(window.__RAW_TRANSLATIONS__||{}).forEach(p=>{try{const x=window.__RAW_TRANSLATIONS__[p]||to(p)||null;if(x&&Object.keys(x).length){const w=In(x);window.__TRANSLATIONS__[p]=Object.assign({},window.__TRANSLATIONS__[p]||{},w||{}),Xt(p,window.__TRANSLATIONS__[p])}}catch{}});const c=localStorage.getItem("lang")||n,m=window.__TRANSLATIONS__&&window.__TRANSLATIONS__[c]||cr(c)||{};m&&Object.keys(m).length&&wn(m)}catch{}}),window.__I18N_CURRENCY_LISTENER_INSTALLED__=!0)}catch{}return{lang:n,applied:o}}const Lm=h.createContext({lang:"en",changeLanguage:async e=>{},loading:!1});function Pm({children:e}){const t=typeof document<"u"&&(document.documentElement.getAttribute("lang")||localStorage.getItem("lang"))||"en",[n,r]=h.useState(t),[a,o]=h.useState(!1),[s,l]=h.useState(!1),d=()=>{try{if(typeof window<"u"&&window.i18next&&typeof window.i18next.changeLanguage=="function")return window.i18next}catch{}return null};h.useEffect(()=>{(async()=>{o(!0);try{try{typeof document<"u"&&document.documentElement.setAttribute("lang",n)}catch{}await _d({lang:n});const p=d();if(p)try{await p.changeLanguage(n)}catch{}}catch(p){console.error("initI18n failed on startup:",p)}finally{l(!0),o(!1)}})()},[]);const c=async p=>{if(!(!p||p===n)){o(!0);try{localStorage.setItem("lang",p);try{document.documentElement.setAttribute("lang",p)}catch{}await _d({lang:p});const x=d();if(x)try{await x.changeLanguage(p)}catch{}r(p);try{setTimeout(()=>{window.location.reload()},50)}catch(w){console.error("Failed to trigger reload after language change:",w)}}catch(x){console.error("changeLanguage failed:",x)}finally{o(!1)}}};let m=e;try{const p=Dn.Children.only(e);m=Dn.cloneElement(p,{key:n})}catch{m=e}return s?i.jsx(Lm.Provider,{value:{lang:n,changeLanguage:c,loading:a},children:m}):null}try{if(typeof window<"u"){const e=localStorage.getItem("lang");e&&e!==document.documentElement.getAttribute("lang")&&document.documentElement.setAttribute("lang",e)}}catch{}function Rm(){return i.jsx(uh,{children:i.jsx(Pm,{children:i.jsx(yh,{children:i.jsx(l2,{children:i.jsx(lh,{children:i.jsx(wh,{children:i.jsx(dh,{children:i.jsxs("div",{className:"min-h-screen bg-gray-100",children:[console.log("App initialized"),i.jsx(Sm,{})]})})})})})})})})}no.createRoot(document.getElementById("root")).render(i.jsx(Dn.StrictMode,{children:i.jsx(Rm,{})}));
